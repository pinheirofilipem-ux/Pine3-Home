"""Pine3 Home: one app with several dashboards for Home Assistant, and a light page for wall screens."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN, PANEL_ELEMENT, PANEL_ICON, PANEL_TITLE, PANEL_URL_PATH, STATIC_URL, VERSION
from .http import PairStartView, PairStatusView, ScreenPageView
from .websocket import async_setup_api, async_unload_api

FRONTEND_DIR = Path(__file__).parent / "frontend"
ROUTES_KEY = f"{DOMAIN}_routes"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    await async_setup_api(hass)
    # Versioned static path: an update changes every module URL, so browsers never keep stale copies.
    base = f"{STATIC_URL}/{VERSION}"
    if not hass.data.get(ROUTES_KEY):
        # routes can't be unregistered: register them once, they survive reloads of the integration
        await hass.http.async_register_static_paths([StaticPathConfig(base, str(FRONTEND_DIR), cache_headers=False)])
        hass.http.register_view(ScreenPageView())
        hass.http.register_view(PairStartView())
        hass.http.register_view(PairStatusView())
        hass.data[ROUTES_KEY] = True
    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=PANEL_ELEMENT,
        frontend_url_path=PANEL_URL_PATH,
        module_url=f"{base}/panel.js",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        require_admin=False,
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    async_unload_api(hass)
    return True
