"""Tests for the automatic home model."""

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.entity import EntityCategory
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.pine3_home.discovery import build_home, room_icon


async def _setup_home(hass: HomeAssistant):
    entry = MockConfigEntry(domain="test")
    entry.add_to_hass(hass)
    areas, devs, ents = ar.async_get(hass), dr.async_get(hass), er.async_get(hass)
    sala = areas.async_create("Sala")
    cozinha = areas.async_create("Cozinha")
    areas.async_create("Garagem")  # empty: must not appear

    def device(uid, name, area):
        d = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("test", uid)}, name=name)
        return devs.async_update_device(d.id, area_id=area.id)

    def entity(domain, uid, device, state, attrs=None, **kw):
        e = ents.async_get_or_create(domain, "test", uid, device_id=device.id if device else None, config_entry=entry, **kw)
        hass.states.async_set(e.entity_id, state, attrs or {})
        return e.entity_id

    lamp = device("lamp", "Sala Candeeiro de pé", sala)
    lamp_id = entity("light", "lamp", lamp, "on", {"friendly_name": "Sala Candeeiro de pé"})
    entity("sensor", "lamp_sig", lamp, "-60", {"device_class": "signal_strength"}, entity_category=EntityCategory.DIAGNOSTIC)

    plug = device("plug", "Máquina de café", cozinha)
    plug_id = entity("switch", "plug", plug, "on", {"device_class": "outlet"})
    power_id = entity("sensor", "plug_w", plug, "1200", {"device_class": "power", "unit_of_measurement": "W"})

    th = device("th", "Sensor Sala", sala)
    temp_id = entity("sensor", "th_t", th, "21.3", {"device_class": "temperature", "unit_of_measurement": "°C"})
    hum_id = entity("sensor", "th_h", th, "54", {"device_class": "humidity", "unit_of_measurement": "%"})

    relay = device("relay", "Relé 2 canais", sala)
    r1 = entity("light", "relay1", relay, "off", {"friendly_name": "Teto"})
    r2 = entity("light", "relay2", relay, "off", {"friendly_name": "Parede"})

    tv = device("tv", "Televisão", sala)
    tv_id = entity("media_player", "tv", tv, "playing")
    entity("switch", "tv_power", tv, "on")

    hidden_id = entity("light", "hid", device("hid", "Escondida", sala), "on", hidden_by=er.RegistryEntryHider.USER)
    loose = entity("switch", "loose", None, "off", {"friendly_name": "Bomba"})
    scene = entity("scene", "movie", None, "scening")
    ents.async_update_entity(scene, area_id=sala.id)
    hass.states.async_set("weather.casa", "sunny", {})
    return locals()


async def test_build_home(hass: HomeAssistant) -> None:
    h = await _setup_home(hass)
    home = build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})
    rooms = {r["name"]: r for r in home["rooms"]}

    assert list(rooms) == ["Cozinha", "Sala", "Outros"]  # alphabetical, "Outros" last, empty Garagem dropped
    assert rooms["Sala"]["icon"] == "mdi:sofa"
    assert rooms["Cozinha"]["icon"] == "mdi:silverware-fork-knife"

    sala = {d["id"]: d for d in rooms["Sala"]["devices"]}
    # area prefix stripped from the device name
    assert sala[h["lamp_id"]]["name"] == "Candeeiro de pé"
    # a 2-gang relay produces one tile per light, named by entity
    assert sala[h["r1"]]["name"] == "Teto" and sala[h["r2"]]["name"] == "Parede"
    # media player wins over its own power switch; one tile for the TV
    assert sala[h["tv_id"]]["name"] == "Televisão"
    assert not any(d["id"].startswith("switch.") for d in rooms["Sala"]["devices"])
    # temperature/humidity device becomes a single sensor tile and feeds the room climate
    assert sala[h["temp_id"]]["extras"] == [h["hum_id"]]
    assert rooms["Sala"]["temperature"] == [h["temp_id"]]
    assert rooms["Sala"]["humidity"] == [h["hum_id"]]
    # hidden and diagnostic entities never show up
    assert h["hidden_id"] not in sala
    assert all("sig" not in d for d in sala)
    # scenes assigned to a room are listed with it
    assert rooms["Sala"]["scenes"] == [h["scene"]]

    coz = rooms["Cozinha"]["devices"]
    assert coz == [{"id": h["plug_id"], "device_id": coz[0]["device_id"], "manufacturer": None, "model": None, "name": "Máquina de café",
                    "kind": "outlet", "extras": [h["power_id"]], "hidden": False, "members": [h["power_id"]]}]
    assert [d["id"] for d in rooms["Outros"]["devices"]] == [h["loose"]]
    assert home["weather"] == "weather.casa"
    assert h["scene"] in home["scenes"]


def test_room_icon() -> None:
    assert room_icon("Casa de Banho Suite", None) == "mdi:shower"
    assert room_icon("Quarto da Ana", None) == "mdi:bed"
    assert room_icon("Escritório", None) == "mdi:desk"
    assert room_icon("Sótão", None) == "mdi:stairs"
    assert room_icon("Sala", "mdi:star") == "mdi:star"
    assert room_icon("Xpto", None) == "mdi:home-outline"


async def test_floor_level(hass: HomeAssistant) -> None:
    from homeassistant.helpers import floor_registry as fr

    h = await _setup_home(hass)
    floor = fr.async_get(hass).async_create("Primeiro andar", level=1)
    areas = ar.async_get(hass)
    sala = areas.async_get_area_by_name("Sala")
    areas.async_update(sala.id, floor_id=floor.floor_id)
    home = build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})
    rooms = {r["name"]: r for r in home["rooms"]}
    assert rooms["Sala"]["floor_level"] == 1 and rooms["Sala"]["floor"] == "Primeiro andar"
    assert rooms["Cozinha"]["floor_level"] == 0
    assert h["lamp_id"]


async def test_room_entities(hass: HomeAssistant) -> None:
    h = await _setup_home(hass)
    home = build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})
    sala = next(r for r in home["rooms"] if r["name"] == "Sala")
    ents = {e["id"]: e for e in sala["entities"]}
    # primaries, merged secondaries and diagnostic entities are all listed
    assert ents[h["lamp_id"]]["primary"] is True
    tv_switch = next(i for i in ents if i.startswith("switch."))
    assert ents[tv_switch]["primary"] is False
    sig = next(i for i in ents if "signal" in i or "sig" in i)
    assert ents[sig]["category"] is True
    assert ents[h["hidden_id"]]["ha_hidden"] is True
    # primaries first
    assert sala["entities"][0]["primary"] is True



async def test_device_members_air_purifier(hass: HomeAssistant) -> None:
    """All of a device's entities (readings and controls) travel with its tile."""
    entry = MockConfigEntry(domain="philips_airpurifier_coap")
    entry.add_to_hass(hass)
    areas, devs, ents = ar.async_get(hass), dr.async_get(hass), er.async_get(hass)
    sala = areas.async_create("Sala")
    dev = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("philips", "ac2889")}, name="Purificador", model="AC2889")
    devs.async_update_device(dev.id, area_id=sala.id)

    def entity(domain, uid, state, attrs=None, **kw):
        e = ents.async_get_or_create(domain, "philips", uid, device_id=dev.id, config_entry=entry, **kw)
        hass.states.async_set(e.entity_id, state, attrs or {})
        return e.entity_id

    fan = entity("fan", "fan", "on", {"preset_modes": ["auto", "sleep", "turbo"], "preset_mode": "auto"})
    pm25 = entity("sensor", "pm25", "7", {"device_class": "pm25", "unit_of_measurement": "µg/m³"})
    allergen = entity("sensor", "allergen", "2", {"friendly_name": "Purificador Allergen index"})
    filt = entity("sensor", "filter", "68", {"unit_of_measurement": "%"}, entity_category=EntityCategory.DIAGNOSTIC)
    lock = entity("switch", "child_lock", "off", entity_category=EntityCategory.CONFIG)
    mode = entity("select", "light", "50%", {"options": ["0%", "50%", "100%"]}, entity_category=EntityCategory.CONFIG)

    home = build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})
    tile = next(d for r in home["rooms"] for d in r["devices"] if d["device_id"] == dev.id)
    assert tile["id"] == fan and tile["model"] == "AC2889"
    assert set(tile["members"]) == {pm25, allergen, filt, lock, mode}
    assert tile["members"][0] == pm25  # air-quality readings come first
    assert pm25 in tile["extras"]


async def test_vacuum_dock_joins_vacuum(hass: HomeAssistant) -> None:
    """Roborock registers the dock as a second device: its entities go with the vacuum's card."""
    entry = MockConfigEntry(domain="roborock")
    entry.add_to_hass(hass)
    areas, devs, ents = ar.async_get(hass), dr.async_get(hass), er.async_get(hass)
    sala = areas.async_create("Sala")
    robot = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("roborock", "abc")}, name="Roborock S8")
    robot = devs.async_update_device(robot.id, area_id=sala.id)
    dock = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("roborock", "abc_dock")}, name="Roborock S8 Dock")  # no area
    other = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("roborock", "zzz_dock")}, name="Unrelated")

    def entity(domain, uid, device, state, attrs=None, **kw):
        e = ents.async_get_or_create(domain, "roborock", uid, device_id=device.id, config_entry=entry, **kw)
        hass.states.async_set(e.entity_id, state, attrs or {})
        return e.entity_id

    vac = entity("vacuum", "abc", robot, "docked", {"fan_speed_list": ["quiet", "turbo"]})
    battery = entity("sensor", "abc_battery", robot, "90", {"device_class": "battery"}, entity_category=EntityCategory.DIAGNOSTIC)
    empty = entity("switch", "abc_dust", dock, "off")
    dock_err = entity("sensor", "abc_dock_error", dock, "ok", entity_category=EntityCategory.DIAGNOSTIC)
    entity("switch", "zzz", other, "off")

    rooms = {r["name"]: r for r in build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})["rooms"]}
    sala_devs = rooms["Sala"]["devices"]
    assert [d["id"] for d in sala_devs] == [vac]  # one card: the vacuum, not its dock's switch
    assert {battery, empty, dock_err} <= set(sala_devs[0]["members"])
    assert empty in {e["id"] for e in rooms["Sala"]["entities"]}  # the dock's entities are listed in the vacuum's room
    assert "Outros" in rooms and all(d["id"] != empty for d in rooms["Outros"]["devices"])  # an unrelated "_dock" device stays apart


async def test_identify_buttons_hidden(hass: HomeAssistant) -> None:
    """HomeKit's "Identify" buttons never show on a device's card."""
    entry = MockConfigEntry(domain="homekit_controller")
    entry.add_to_hass(hass)
    areas, devs, ents = ar.async_get(hass), dr.async_get(hass), er.async_get(hass)
    sala = areas.async_create("Sala")
    tv = devs.async_get_or_create(config_entry_id=entry.entry_id, identifiers={("hk", "tv")}, name="TV")
    tv = devs.async_update_device(tv.id, area_id=sala.id)

    def entity(domain, uid, state, attrs=None, **kw):
        e = ents.async_get_or_create(domain, "homekit_controller", uid, device_id=tv.id, config_entry=entry, **kw)
        hass.states.async_set(e.entity_id, state, attrs or {})
        return e.entity_id

    mp = entity("media_player", "tv", "on", {"device_class": "tv"})
    ident = entity("button", "tv_identify", "unknown", {"device_class": "identify"}, entity_category=EntityCategory.DIAGNOSTIC)
    mute = entity("switch", "tv_mute", "off")
    pob = entity("select", "tv_power_on_behavior", "previous", {"options": ["on", "off", "previous"]}, entity_category=EntityCategory.CONFIG, original_name="Power-on behavior")
    rooms = {r["name"]: r for r in build_home(hass, {"hidden": [], "hidden_rooms": [], "room_order": []})["rooms"]}
    dev = next(d for d in rooms["Sala"]["devices"] if d["id"] == mp)
    assert mute in dev["members"] and ident not in dev["members"] and pob not in dev["members"]

