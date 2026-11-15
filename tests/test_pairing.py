"""Pairing a wall screen without a password, end to end."""

from unittest.mock import AsyncMock, patch

import pytest
from homeassistant.auth.const import GROUP_ID_USER
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.pine3_home import async_setup_entry
from custom_components.pine3_home.const import DOMAIN, SCREEN_USER_NAME, VERSION


async def result(ws, msg_id: int) -> dict:
    """The reply to one message, skipping the events of earlier subscriptions."""
    while True:
        msg = await ws.receive_json()
        if msg["id"] == msg_id and msg["type"] == "result":
            return msg


@pytest.fixture
async def pine3(hass: HomeAssistant):
    # the integration's dependencies, set up before the test opens HTTP or websocket clients
    for dep in ("http", "websocket_api"):
        assert await async_setup_component(hass, dep, {})
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    with patch("homeassistant.components.panel_custom.async_register_panel", new=AsyncMock()) as reg:
        assert await async_setup_entry(hass, entry)
    return reg


async def test_screen_page_and_panel(hass: HomeAssistant, pine3, hass_client_no_auth) -> None:
    assert pine3.call_args.kwargs["module_url"] == f"/pine3_home_static/{VERSION}/panel.js"
    client = await hass_client_no_auth()
    resp = await client.get("/pine3/ecra")
    assert resp.status == 200
    assert f"/pine3_home_static/{VERSION}/screen.js" in await resp.text()
    # the built frontend is shipped with the integration
    for name in ("panel.js", "screen.js"):
        resp = await client.get(f"/pine3_home_static/{VERSION}/{name}")
        assert resp.status == 200, name


async def test_pairing_flow(hass: HomeAssistant, pine3, hass_client_no_auth, hass_ws_client) -> None:
    client = await hass_client_no_auth()
    # the screen asks for a code
    start = await (await client.post("/api/pine3_home/pair/start")).json()
    assert len(start["code"]) == 6 and start["code"].isdigit()
    status = await (await client.post("/api/pine3_home/pair/status", json={"pair_id": start["pair_id"], "secret": start["secret"]})).json()
    assert status == {"status": "waiting", "code": start["code"]}
    # the wrong secret learns nothing
    bad = await (await client.post("/api/pine3_home/pair/status", json={"pair_id": start["pair_id"], "secret": "nope"})).json()
    assert bad == {"status": "expired"}

    # an administrator sees the code waiting and approves it
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/screens/pending"})
    msg = await admin.receive_json()
    assert [p["code"] for p in msg["result"]["pending"]] == [start["code"]]
    await admin.send_json({"id": 2, "type": "pine3_home/screens/approve", "code": start["code"], "name": "Tablet da sala"})
    msg = await admin.receive_json()
    assert msg["success"], msg
    screen = msg["result"]["screen"]
    assert screen["name"] == "Tablet da sala" and screen["dashboard"] == "casa"

    # the screen gets its token once
    status = await (await client.post("/api/pine3_home/pair/status", json={"pair_id": start["pair_id"], "secret": start["secret"]})).json()
    assert status["status"] == "approved" and status["screen"]["id"] == screen["id"]
    token = status["token"]
    again = await (await client.post("/api/pine3_home/pair/status", json={"pair_id": start["pair_id"], "secret": start["secret"]})).json()
    assert again == {"status": "expired"}

    # the token belongs to a non-admin, local-only user made for screens
    refresh = hass.auth.async_validate_access_token(token)
    assert refresh is not None
    user = refresh.user
    assert user.name == SCREEN_USER_NAME and not user.is_admin and user.local_only
    assert [g.id for g in user.groups] == [GROUP_ID_USER]

    # the screen talks to Home Assistant with it and knows which screen it is
    ws = await hass_ws_client(hass, access_token=token)
    await ws.send_json({"id": 1, "type": "pine3_home/me"})
    me = (await ws.receive_json())["result"]
    assert me["screen"]["id"] == screen["id"] and me["dashboard"]["id"] == "casa" and me["is_admin"] is False
    await ws.send_json({"id": 2, "type": "pine3_home/home"})
    assert (await ws.receive_json())["success"]
    # but can't manage screens
    await ws.send_json({"id": 3, "type": "pine3_home/screens"})
    assert (await ws.receive_json())["error"]["code"] == "unauthorized"

    # what the screen page does after connecting must all be allowed for a non-admin user
    await ws.send_json({"id": 10, "type": "pine3_home/subscribe"})
    assert (await ws.receive_json())["success"]
    await ws.send_json({"id": 11, "type": "subscribe_entities"})
    assert (await ws.receive_json())["success"]
    await ws.receive_json()  # the first batch of states
    # (Home Assistant refuses subscribe_events for our own event to non-admins: the page must not use it)
    await ws.send_json({"id": 12, "type": "subscribe_events", "event_type": "pine3_home_updated"})
    assert (await ws.receive_json())["error"]["code"] == "unauthorized"

    # the screen may edit the layout of its own dashboard
    layout = {"items": [{"key": "climate.sala", "size": "xl"}], "hidden": ["scenes"]}
    await ws.send_json({"id": 14, "type": "pine3_home/dashboards/layout", "dashboard_id": "casa", "view": "home", "layout": layout})
    assert (await result(ws, 14))["result"]["dashboard"]["layouts"]["home"] == layout
    # ...not another dashboard's
    await admin.send_json({"id": 3, "type": "pine3_home/dashboards/save", "dashboard": {"id": "outro", "name": "Outro", "style": "vidro"}})
    await admin.receive_json()
    await ws.send_json({"id": 15, "type": "pine3_home/dashboards/layout", "dashboard_id": "outro", "view": "home", "layout": None})
    assert (await result(ws, 15))["error"]["code"] == "unauthorized"
    # ...and not when editing on screens is turned off
    await admin.send_json({"id": 4, "type": "pine3_home/dashboards/save", "dashboard": {"id": "casa", "name": "Casa", "style": "vidro", "screen_edit": False}})
    await admin.receive_json()
    await ws.send_json({"id": 16, "type": "pine3_home/dashboards/layout", "dashboard_id": "casa", "view": "home", "layout": None})
    assert (await result(ws, 16))["error"]["code"] == "unauthorized"
    # an administrator can always reset it
    await admin.send_json({"id": 5, "type": "pine3_home/dashboards/layout", "dashboard_id": "casa", "view": "home", "layout": None})
    assert "home" not in (await admin.receive_json())["result"]["dashboard"]["layouts"]

    # removing the screen revokes its token
    await admin.send_json({"id": 6, "type": "pine3_home/screens/remove", "screen_id": screen["id"]})
    assert (await admin.receive_json())["success"]
    assert hass.auth.async_validate_access_token(token) is None


async def test_unknown_code_and_rate_limit(hass: HomeAssistant, pine3, hass_client_no_auth, hass_ws_client) -> None:
    client = await hass_client_no_auth()
    assert (await client.post("/api/pine3_home/pair/start")).status == 200
    # the same address asking again straight away is refused
    assert (await client.post("/api/pine3_home/pair/start")).status == 429
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/screens/approve", "code": "000000", "name": "x"})
    msg = await admin.receive_json()
    assert not msg["success"] and msg["error"]["code"] == "unknown_code"


async def test_dashboards(hass: HomeAssistant, pine3, hass_ws_client) -> None:
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/dashboards"})
    res = (await admin.receive_json())["result"]
    assert res["dashboards"][0]["style"] == "vidro" and "lente" in res["styles"]
    await admin.send_json({"id": 2, "type": "pine3_home/dashboards/save", "dashboard": {"id": "cozinha", "name": "Cozinha", "style": "bento", "dock": "bottom"}})
    assert len((await admin.receive_json())["result"]["dashboards"]) == 2
    await admin.send_json({"id": 3, "type": "pine3_home/dashboards/save", "dashboard": {"id": "x", "name": "X", "style": "vidro", "ambient_after": 99}})
    assert not (await admin.receive_json())["success"]
    await admin.send_json({"id": 4, "type": "pine3_home/dashboards/save", "dashboard": {"id": "cozinha", "name": "Cozinha", "style": "vidro", "ambient_after": 5, "ambient_brightness": "low"}})
    saved = next(d for d in (await admin.receive_json())["result"]["dashboards"] if d["id"] == "cozinha")
    assert saved["ambient_after"] == 5 and saved["ambient_brightness"] == "low" and saved["dock"] == "bottom"
    await admin.send_json({"id": 44, "type": "pine3_home/dashboards/remove", "dashboard_id": "cozinha"})
    assert len((await admin.receive_json())["result"]["dashboards"]) == 1
    await admin.send_json({"id": 45, "type": "pine3_home/dashboards/remove", "dashboard_id": "casa"})
    assert (await admin.receive_json())["error"]["code"] == "last_dashboard"


async def test_home_settings(hass: HomeAssistant, pine3, hass_ws_client) -> None:
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/home/settings", "ipma_area": "LSB"})
    assert (await admin.receive_json())["result"]["settings"]["ipma_area"] == "LSB"
    await admin.send_json({"id": 2, "type": "pine3_home/home"})
    assert (await admin.receive_json())["result"]["settings"]["ipma_area"] == "LSB"
    await admin.send_json({"id": 3, "type": "pine3_home/home/settings", "ipma_area": "lisboa"})
    assert not (await admin.receive_json())["success"]
    # the language: automatic (Home Assistant's), Portuguese or English
    await admin.send_json({"id": 4, "type": "pine3_home/home/settings", "language": "en"})
    assert (await result(admin, 4))["result"]["settings"]["language"] == "en"
    await admin.send_json({"id": 5, "type": "pine3_home/home"})
    home = (await result(admin, 5))["result"]
    assert home["settings"]["language"] == "en" and home["language"] == hass.config.language
    await admin.send_json({"id": 6, "type": "pine3_home/home/settings", "language": "fr"})
    assert not (await result(admin, 6))["success"]


async def test_entities_and_rooms_settings(hass: HomeAssistant, pine3, hass_ws_client) -> None:
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/home/settings", "hidden": ["light.a"], "shown": ["sensor.b"],
                           "hidden_rooms": ["quarto"], "room_order": ["sala", "cozinha"], "room_icons": {"sala": "mdi:sofa"}})
    res = (await result(admin, 1))["result"]["settings"]
    assert res["hidden"] == ["light.a"] and res["shown"] == ["sensor.b"] and res["room_icons"] == {"sala": "mdi:sofa"}
    # an icon must be an mdi icon name
    await admin.send_json({"id": 2, "type": "pine3_home/home/settings", "room_icons": {"sala": "<svg>"}})
    assert not (await result(admin, 2))["success"]


async def test_card_type_and_name(hass: HomeAssistant, pine3, hass_ws_client) -> None:
    admin = await hass_ws_client(hass)
    await admin.send_json({"id": 1, "type": "pine3_home/home/settings", "types": {"light.sala_candeeiro": "led"}, "names": {"light.sala_candeeiro": "Fita LED"}})
    res = (await result(admin, 1))["result"]["settings"]
    assert res["types"] == {"light.sala_candeeiro": "led"} and res["names"] == {"light.sala_candeeiro": "Fita LED"}
    # only the known types, for entity ids
    await admin.send_json({"id": 2, "type": "pine3_home/home/settings", "types": {"light.x": "rocket"}})
    assert not (await result(admin, 2))["success"]
    await admin.send_json({"id": 3, "type": "pine3_home/home/settings", "types": {"not an id": "led"}})
    assert not (await result(admin, 3))["success"]


async def _paired_screen(hass: HomeAssistant, client, admin, msg_id: int) -> str:
    """Pair a screen and return its token."""
    start = await (await client.post("/api/pine3_home/pair/start")).json()
    await admin.send_json({"id": msg_id, "type": "pine3_home/screens/approve", "code": start["code"], "name": "Ecrã"})
    assert (await result(admin, msg_id))["success"]
    status = await (await client.post("/api/pine3_home/pair/status", json={"pair_id": start["pair_id"], "secret": start["secret"]})).json()
    return status["token"]


async def test_settings_pin(hass: HomeAssistant, pine3, hass_client_no_auth, hass_ws_client) -> None:
    client = await hass_client_no_auth()
    admin = await hass_ws_client(hass)
    token = await _paired_screen(hass, client, admin, 1)
    ws = await hass_ws_client(hass, access_token=token)

    # no PIN yet: a screen can't open the settings
    await ws.send_json({"id": 1, "type": "pine3_home/pin/status"})
    assert (await result(ws, 1))["result"] == {"set": False, "elevated": False, "locked_for": 0}
    await ws.send_json({"id": 2, "type": "pine3_home/pin/check", "pin": "1234"})
    assert (await result(ws, 2))["error"]["code"] == "no_pin"
    await ws.send_json({"id": 3, "type": "pine3_home/home/settings", "ipma_area": "LSB"})
    assert (await result(ws, 3))["error"]["code"] == "unauthorized"
    # nor set one
    await ws.send_json({"id": 4, "type": "pine3_home/pin/set", "pin": "0000"})
    assert (await result(ws, 4))["error"]["code"] == "unauthorized"

    # the administrator sets it
    await admin.send_json({"id": 2, "type": "pine3_home/pin/set", "pin": "4821"})
    assert (await result(admin, 2))["result"] == {"set": True}
    await admin.send_json({"id": 3, "type": "pine3_home/pin/set", "pin": "12"})  # 4 to 8 digits
    assert not (await result(admin, 3))["success"]

    # a wrong PIN changes nothing; the right one lets this connection change the settings
    await ws.send_json({"id": 5, "type": "pine3_home/pin/check", "pin": "0000"})
    assert (await result(ws, 5))["error"]["code"] == "wrong_pin"
    await ws.send_json({"id": 6, "type": "pine3_home/pin/check", "pin": "4821"})
    assert (await result(ws, 6))["result"] == {"minutes": 10}
    await ws.send_json({"id": 7, "type": "pine3_home/home/settings", "ipma_area": "LSB"})
    assert (await result(ws, 7))["success"]
    await ws.send_json({"id": 8, "type": "pine3_home/screens"})
    assert (await result(ws, 8))["success"]

    # only this connection: another one of the same screen still needs the PIN
    other = await hass_ws_client(hass, access_token=token)
    await other.send_json({"id": 1, "type": "pine3_home/home/settings", "ipma_area": "PTO"})
    assert (await result(other, 1))["error"]["code"] == "unauthorized"

    # five wrong PINs in a row lock it for a while, even the right one
    for i in range(5):
        await other.send_json({"id": 10 + i, "type": "pine3_home/pin/check", "pin": "9999"})
        assert (await result(other, 10 + i))["error"]["code"] == "wrong_pin"
    await other.send_json({"id": 20, "type": "pine3_home/pin/check", "pin": "4821"})
    assert (await result(other, 20))["error"]["code"] == "locked"
