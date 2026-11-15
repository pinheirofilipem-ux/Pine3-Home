"""The light page for wall screens (no Home Assistant frontend) and the two pairing endpoints."""

from __future__ import annotations

from aiohttp import web

from homeassistant.components.http import HomeAssistantView
from homeassistant.core import HomeAssistant

from .const import API_URL, DOMAIN, SCREEN_URL, STATIC_URL, VERSION
from .pairing import CODE_TTL, PairingError

SCREEN_HTML = """<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0f1113">
<meta name="mobile-web-app-capable" content="yes">
<title>Pine3 Home</title>
<style>html,body{{margin:0;height:100%;background:#0f1113;color:#eef1f4;font-family:system-ui,sans-serif}}</style>
<script type="module" src="{static}/{version}/screen.js"></script>
</head>
<body><pine3-screen></pine3-screen></body>
</html>
"""


class ScreenPageView(HomeAssistantView):
    """GET /pine3/ecra: a small page that loads the screen app; it signs in with its own token."""

    url = SCREEN_URL
    name = "pine3_home:screen"
    requires_auth = False

    async def get(self, request: web.Request) -> web.Response:
        return web.Response(
            text=SCREEN_HTML.format(static=STATIC_URL, version=VERSION),
            content_type="text/html",
            headers={"Cache-Control": "no-cache"},
        )


class PairStartView(HomeAssistantView):
    """POST: a screen asks for a pairing code."""

    url = f"{API_URL}/pair/start"
    name = "api:pine3_home:pair_start"
    requires_auth = False

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if DOMAIN not in hass.data:
            return self.json_message("Pine3 Home is not set up", 503)
        try:
            p = hass.data[DOMAIN]["pairing"].start(request.remote)
        except PairingError as err:
            return self.json({"error": str(err)}, 429)
        return self.json({"code": p.code, "pair_id": p.pair_id, "secret": p.secret, "ttl": CODE_TTL})


class PairStatusView(HomeAssistantView):
    """POST {pair_id, secret}: has the code been approved? Hands the token over once."""

    url = f"{API_URL}/pair/status"
    name = "api:pine3_home:pair_status"
    requires_auth = False

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if DOMAIN not in hass.data:
            return self.json_message("Pine3 Home is not set up", 503)
        try:
            body = await request.json()
            pair_id, secret = str(body["pair_id"]), str(body["secret"])
        except (ValueError, KeyError, TypeError):
            return self.json_message("pair_id and secret are required", 400)
        return self.json(hass.data[DOMAIN]["pairing"].status(pair_id, secret))
