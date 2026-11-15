"""Websocket API of Pine3 Home: the home model, dashboards, screens and IPMA warnings."""

from __future__ import annotations

import asyncio
import copy
import time
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.event import async_call_later
from homeassistant.helpers.storage import Store

from .const import DOMAIN, EVENT_UPDATED, STORAGE_KEY, VERSION
from .discovery import build_home
from .pairing import PairingError, PairingManager
from .pin import PIN_COMMANDS, may_change_settings, require_admin_or_pin

STYLES = ["vidro", "bento", "moldura", "editorial", "instrumento", "orbita", "carteira", "lente"]
DOCK_PLACEMENTS = ["left", "bottom"]
DEFAULT_DASHBOARD = {"id": "casa", "name": "Casa", "style": "vidro", "dock": "left", "theme": "grafite"}
DEFAULT_DATA: dict[str, Any] = {
    "home": {"hidden": [], "hidden_rooms": [], "room_order": [], "shown": [], "room_icons": {}, "types": {}, "names": {}, "ipma_area": None, "language": "auto"},
    "pin": None,
    "dashboards": [DEFAULT_DASHBOARD],
    "screens": [],
    "screen_user_id": None,
    "data_version": 1,
}
REGISTRY_EVENTS = ("area_registry_updated", "device_registry_updated", "entity_registry_updated", "floor_registry_updated")
SLUG = vol.Match(r"^[a-z0-9_-]{1,32}$")
# The device types a card can be drawn as (the same as Pine3 View's floor plan), chosen in a card's sheet.
DEVICE_TYPES = [
    "ceiling", "lamp", "led", "spot", "bulb", "tv", "appletv", "homepod", "speaker", "ac", "fan", "purifier",
    "blind", "door", "window", "plug", "sensor", "motion", "camera", "lock", "vacuum", "other",
]
ENTITY_ID = vol.Match(r"^[a-z_]+\.[a-z0-9_]+$")
SIZES = ["s", "m", "l", "xl"]
VIEW_ID = vol.All(str, vol.Length(min=1, max=80))
LAYOUT = vol.Schema({
    vol.Required("items"): vol.All([{vol.Required("key"): vol.All(str, vol.Length(max=120)), vol.Optional("size"): vol.In(SIZES)}], vol.Length(max=200)),
    vol.Required("hidden"): vol.All([vol.All(str, vol.Length(max=120))], vol.Length(max=200)),
})
DASHBOARD = vol.Schema({
    vol.Required("id"): SLUG,
    vol.Required("name"): vol.All(str, vol.Length(min=1, max=40)),
    vol.Required("style"): vol.In(STYLES),
    vol.Optional("dock"): vol.In(DOCK_PLACEMENTS),
    vol.Optional("theme"): vol.All(str, vol.Length(max=32)),
    vol.Optional("views"): vol.Any(None, list),
    vol.Optional("layouts"): {VIEW_ID: LAYOUT},
    vol.Optional("screen_edit"): bool,
    # ambient face: minutes without activity before it shows (0 = never), and the screen brightness on it
    vol.Optional("ambient_after"): vol.All(int, vol.Range(min=0, max=60)),
    vol.Optional("ambient_brightness"): vol.In(["auto", "low", "off"]),
})


def _data(hass: HomeAssistant) -> dict[str, Any]:
    return hass.data[DOMAIN]["data"]


def _pairing(hass: HomeAssistant) -> PairingManager:
    return hass.data[DOMAIN]["pairing"]


async def async_setup_api(hass: HomeAssistant) -> None:
    store: Store = Store(hass, 1, STORAGE_KEY)
    stored = await store.async_load() or {}
    # deep copies: the defaults must never be changed by what the house stores
    data = {**copy.deepcopy(DEFAULT_DATA), **stored}
    data["home"] = {**copy.deepcopy(DEFAULT_DATA["home"]), **data.get("home", {})}
    if not data.get("dashboards"):
        data["dashboards"] = [copy.deepcopy(DEFAULT_DASHBOARD)]

    async def _save() -> None:
        await store.async_save(data)

    hass.data[DOMAIN] = {"store": store, "data": data, "save": _save, "unsubs": [], "pairing": PairingManager(hass, data, _save)}

    for cmd in (ws_home, ws_subscribe, ws_home_settings, ws_ipma_warnings, ws_me, ws_dashboards, ws_dashboard_save, ws_dashboard_remove, ws_dashboard_layout,
                ws_screens, ws_pending, ws_approve, ws_screen_update, ws_screen_remove, *PIN_COMMANDS):
        websocket_api.async_register_command(hass, cmd)

    pending: list = []

    @callback
    def _fire(_now=None) -> None:
        pending.clear()
        hass.bus.async_fire(EVENT_UPDATED)

    @callback
    def _changed(_event: Event) -> None:
        # registries change in bursts (e.g. a new integration): debounce
        if not pending:
            pending.append(async_call_later(hass, 2, _fire))

    for ev in REGISTRY_EVENTS:
        hass.data[DOMAIN]["unsubs"].append(hass.bus.async_listen(ev, _changed))


@callback
def async_unload_api(hass: HomeAssistant) -> None:
    for unsub in hass.data.get(DOMAIN, {}).get("unsubs", []):
        unsub()
    hass.data.pop(DOMAIN, None)


def _model(hass: HomeAssistant) -> dict[str, Any]:
    return {**build_home(hass, _data(hass)["home"]), "version": VERSION}


# ---------- the home ----------
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/home"})
@callback
def ws_home(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_result(msg["id"], _model(hass))


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/subscribe"})
@callback
def ws_subscribe(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Push a fresh home model whenever the registries or the data change."""

    @callback
    def _forward(_event: Event) -> None:
        if DOMAIN in hass.data:
            connection.send_message(websocket_api.event_message(msg["id"], _model(hass)))

    connection.subscriptions[msg["id"]] = hass.bus.async_listen(EVENT_UPDATED, _forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/home/settings",
    vol.Optional("ipma_area"): vol.Any(None, vol.Match(r"^[A-Z]{3}$")),
    vol.Optional("hidden"): [str],
    vol.Optional("hidden_rooms"): [str],
    vol.Optional("room_order"): [str],
    vol.Optional("shown"): [str],
    vol.Optional("room_icons"): {str: vol.Match(r"^mdi:[a-z0-9-]{1,60}$")},
    vol.Optional("types"): {ENTITY_ID: vol.In(DEVICE_TYPES)},
    vol.Optional("names"): {ENTITY_ID: vol.All(str, vol.Length(min=1, max=40))},
    vol.Optional("language"): vol.In(["auto", "pt", "en"]),
})
@require_admin_or_pin
@websocket_api.async_response
async def ws_home_settings(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Settings of the house shared by every dashboard: the IPMA warning area, the devices hidden and the extra
    entities shown as tiles (Entidades), the rooms' order, icons and the hidden ones (Divisões), and the language."""
    home = _data(hass)["home"]
    for key in ("ipma_area", "hidden", "hidden_rooms", "room_order", "shown", "room_icons", "types", "names", "language"):
        if key in msg:
            home[key] = msg[key]
    await hass.data[DOMAIN]["save"]()
    hass.bus.async_fire(EVENT_UPDATED)
    connection.send_result(msg["id"], {"settings": home})


# ---------- the screen asking who it is ----------
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/me"})
@callback
def ws_me(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """A paired screen (or a person in the panel): which screen this is and which dashboard it shows."""
    screen = _pairing(hass).screen_for_token(connection.refresh_token_id)
    dashboards = _data(hass)["dashboards"]
    dash_id = screen["dashboard"] if screen else None
    dashboard = next((d for d in dashboards if d["id"] == dash_id), dashboards[0])
    connection.send_result(msg["id"], {
        "screen": {k: v for k, v in screen.items() if k != "token_id"} if screen else None,
        "dashboard": dashboard,
        "is_admin": connection.user.is_admin,
        "version": VERSION,
    })


# ---------- dashboards ----------
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/dashboards"})
@callback
def ws_dashboards(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_result(msg["id"], {"dashboards": _data(hass)["dashboards"], "styles": STYLES})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/dashboards/save", vol.Required("dashboard"): DASHBOARD})
@require_admin_or_pin
@websocket_api.async_response
async def ws_dashboard_save(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    dash = msg["dashboard"]
    dashboards = _data(hass)["dashboards"]
    i = next((k for k, d in enumerate(dashboards) if d["id"] == dash["id"]), None)
    if i is None:
        # a new dashboard: the defaults for what wasn't given; an existing one only changes what was sent
        dashboards.append({"dock": "left", "theme": "grafite", "screen_edit": True, **dash})
    else:
        dashboards[i] = {**dashboards[i], **dash}
    await hass.data[DOMAIN]["save"]()
    hass.bus.async_fire(EVENT_UPDATED)
    connection.send_result(msg["id"], {"dashboards": dashboards})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/dashboards/layout",
    vol.Required("dashboard_id"): SLUG,
    vol.Required("view"): VIEW_ID,
    vol.Required("layout"): vol.Any(None, LAYOUT),
})
@websocket_api.async_response
async def ws_dashboard_layout(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Save (or with null, reset) the layout of one view. Allowed for administrators, and for a paired screen
    editing the dashboard it shows, unless editing on screens is turned off for that dashboard."""
    dash = next((d for d in _data(hass)["dashboards"] if d["id"] == msg["dashboard_id"]), None)
    if dash is None:
        connection.send_error(msg["id"], "unknown_dashboard", "Esse painel não existe.")
        return
    if not may_change_settings(hass, connection):
        screen = _pairing(hass).screen_for_token(connection.refresh_token_id)
        if screen is None or screen["dashboard"] != dash["id"] or dash.get("screen_edit", True) is False:
            connection.send_error(msg["id"], websocket_api.ERR_UNAUTHORIZED, "Este ecrã não pode editar esse painel.")
            return
    layouts = dash.setdefault("layouts", {})
    if msg["layout"] is None:
        layouts.pop(msg["view"], None)
    else:
        layouts[msg["view"]] = msg["layout"]
    await hass.data[DOMAIN]["save"]()
    hass.bus.async_fire(EVENT_UPDATED)
    connection.send_result(msg["id"], {"dashboard": dash})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/dashboards/remove", vol.Required("dashboard_id"): SLUG})
@require_admin_or_pin
@websocket_api.async_response
async def ws_dashboard_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    data = _data(hass)
    if len(data["dashboards"]) <= 1:
        connection.send_error(msg["id"], "last_dashboard", "A casa precisa de pelo menos um painel.")
        return
    data["dashboards"] = [d for d in data["dashboards"] if d["id"] != msg["dashboard_id"]]
    fallback = data["dashboards"][0]["id"]
    for s in data["screens"]:
        if s["dashboard"] == msg["dashboard_id"]:
            s["dashboard"] = fallback
    await hass.data[DOMAIN]["save"]()
    hass.bus.async_fire(EVENT_UPDATED)
    connection.send_result(msg["id"], {"dashboards": data["dashboards"]})


# ---------- screens ----------
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/screens"})
@require_admin_or_pin
@callback
def ws_screens(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_result(msg["id"], {"screens": _pairing(hass).screens()})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/screens/pending"})
@require_admin_or_pin
@callback
def ws_pending(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_result(msg["id"], {"pending": _pairing(hass).pending_codes()})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/screens/approve",
    vol.Required("code"): vol.Match(r"^\d{6}$"),
    vol.Required("name"): vol.All(str, vol.Length(min=1, max=40)),
    vol.Optional("dashboard"): SLUG,
})
@require_admin_or_pin
@websocket_api.async_response
async def ws_approve(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    dashboards = _data(hass)["dashboards"]
    dash = msg.get("dashboard") or dashboards[0]["id"]
    if not any(d["id"] == dash for d in dashboards):
        connection.send_error(msg["id"], "unknown_dashboard", "Esse painel não existe.")
        return
    try:
        screen = await _pairing(hass).approve(msg["code"], msg["name"], dash)
    except PairingError as err:
        connection.send_error(msg["id"], str(err), "O código não existe ou já expirou.")
        return
    connection.send_result(msg["id"], {"screen": screen})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/screens/update",
    vol.Required("screen_id"): str,
    vol.Optional("name"): vol.All(str, vol.Length(min=1, max=40)),
    vol.Optional("dashboard"): SLUG,
})
@require_admin_or_pin
@websocket_api.async_response
async def ws_screen_update(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    if "dashboard" in msg and not any(d["id"] == msg["dashboard"] for d in _data(hass)["dashboards"]):
        connection.send_error(msg["id"], "unknown_dashboard", "Esse painel não existe.")
        return
    try:
        screen = await _pairing(hass).update(msg["screen_id"], name=msg.get("name"), dashboard=msg.get("dashboard"))
    except PairingError as err:
        connection.send_error(msg["id"], str(err), "Esse ecrã não existe.")
        return
    hass.bus.async_fire(EVENT_UPDATED)
    connection.send_result(msg["id"], {"screen": screen})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/screens/remove", vol.Required("screen_id"): str})
@require_admin_or_pin
@websocket_api.async_response
async def ws_screen_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    try:
        await _pairing(hass).remove(msg["screen_id"])
    except PairingError as err:
        connection.send_error(msg["id"], str(err), "Esse ecrã não existe.")
        return
    connection.send_result(msg["id"])


# ---------- IPMA (Portuguese weather service) ----------
# The HA integration exposes only the first warning of an area, so the warnings are asked of IPMA here
# (server side: no CORS, one download for every screen).
IPMA_WARNINGS_URL = "https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json"
IPMA_TTL = 600  # seconds
IPMA_FIELDS = ("text", "awarenessTypeName", "awarenessLevelID", "startTime", "endTime")


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/ipma_warnings", vol.Required("area"): str})
@websocket_api.async_response
async def ws_ipma_warnings(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    cache = hass.data.setdefault(f"{DOMAIN}_ipma", {})
    if cache.get("raw") is None or time.monotonic() - cache.get("at", 0) > IPMA_TTL:
        try:
            async with asyncio.timeout(10):
                resp = await async_get_clientsession(hass).get(IPMA_WARNINGS_URL)
                resp.raise_for_status()
                raw = await resp.json(content_type=None)
            if isinstance(raw, list):
                cache.update(raw=raw, at=time.monotonic())
        except Exception as err:  # noqa: BLE001 - network or format: keep the last list if there is one
            if cache.get("raw") is None:
                connection.send_error(msg["id"], "unavailable", str(err))
                return
    warnings = [
        {k: w.get(k) for k in IPMA_FIELDS}
        for w in cache.get("raw") or []
        if isinstance(w, dict) and w.get("idAreaAviso") == msg["area"] and w.get("awarenessLevelID") not in (None, "green")
    ]
    connection.send_result(msg["id"], {"warnings": warnings})
