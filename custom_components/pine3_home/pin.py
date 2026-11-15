"""The settings PIN: an administrator sets it in the Pine3 Home panel, and a paired wall screen that types it may
change the settings for a while, through the same websocket commands an administrator uses.

The PIN is stored as a salted PBKDF2 hash. A right PIN lifts the connection that typed it (only that one) for
ELEVATED_FOR seconds; MAX_TRIES wrong ones in a row lock the PIN for LOCK_FOR seconds.
"""

from __future__ import annotations

import functools
import hashlib
import secrets
import time
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant

from .const import DOMAIN

ELEVATED_FOR = 10 * 60
MAX_TRIES = 5
LOCK_FOR = 5 * 60
ITERATIONS = 120_000
PIN = vol.Match(r"^\d{4,8}$")
STATE_KEY = f"{DOMAIN}_pin_state"


def _state(hass: HomeAssistant) -> dict[str, Any]:
    return hass.data.setdefault(STATE_KEY, {"elevated": {}, "fails": 0, "locked_until": 0.0})


def _hash(pin: str, salt: str) -> str:
    return hashlib.pbkdf2_hmac("sha256", pin.encode(), bytes.fromhex(salt), ITERATIONS).hex()


def is_elevated(hass: HomeAssistant, connection: websocket_api.ActiveConnection) -> bool:
    until = _state(hass)["elevated"].get(id(connection))
    return until is not None and until > time.monotonic()


def may_change_settings(hass: HomeAssistant, connection: websocket_api.ActiveConnection) -> bool:
    return bool(connection.user and connection.user.is_admin) or is_elevated(hass, connection)


def require_admin_or_pin(func):
    """Like websocket_api.require_admin, but a screen that typed the PIN is let through too."""

    @functools.wraps(func)
    def check(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
        if not may_change_settings(hass, connection):
            connection.send_error(msg["id"], websocket_api.ERR_UNAUTHORIZED, "É preciso o PIN das definições.")
            return
        func(hass, connection, msg)

    return check


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/pin/status"})
@websocket_api.async_response
async def ws_pin_status(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    st = _state(hass)
    connection.send_result(msg["id"], {
        "set": bool(hass.data[DOMAIN]["data"].get("pin")),
        "elevated": is_elevated(hass, connection),
        "locked_for": max(0, int(st["locked_until"] - time.monotonic())),
    })


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/pin/check", vol.Required("pin"): str})
@websocket_api.async_response
async def ws_pin_check(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """A screen types the PIN: right, and this connection may change the settings for a while."""
    stored = hass.data[DOMAIN]["data"].get("pin")
    st = _state(hass)
    if not stored:
        connection.send_error(msg["id"], "no_pin", "Ainda não há PIN: define-o no Home Assistant, em Pine3 Home → ⚙ → Sistema.")
        return
    now = time.monotonic()
    if st["locked_until"] > now:
        connection.send_error(msg["id"], "locked", f"Demasiadas tentativas. Tenta de novo daqui a {int(st['locked_until'] - now) // 60 + 1} min.")
        return
    attempt = await hass.async_add_executor_job(_hash, msg["pin"], stored["salt"])
    if not secrets.compare_digest(attempt, stored["hash"]):
        st["fails"] += 1
        if st["fails"] >= MAX_TRIES:
            st["fails"] = 0
            st["locked_until"] = now + LOCK_FOR
        connection.send_error(msg["id"], "wrong_pin", "PIN errado.")
        return
    st["fails"] = 0
    key = id(connection)
    st["elevated"][key] = now + ELEVATED_FOR
    # forget it when this connection closes (its subscriptions are all called then)
    connection.subscriptions[msg["id"]] = lambda: st["elevated"].pop(key, None)
    connection.send_result(msg["id"], {"minutes": ELEVATED_FOR // 60})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/pin/set", vol.Required("pin"): vol.Any(None, PIN)})
@require_admin_or_pin
@websocket_api.async_response
async def ws_pin_set(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    """Set, change or (with null) remove the PIN."""
    data = hass.data[DOMAIN]["data"]
    if msg["pin"] is None:
        data["pin"] = None
    else:
        salt = secrets.token_hex(16)
        data["pin"] = {"salt": salt, "hash": await hass.async_add_executor_job(_hash, msg["pin"], salt)}
    await hass.data[DOMAIN]["save"]()
    connection.send_result(msg["id"], {"set": bool(data["pin"])})


PIN_COMMANDS = (ws_pin_status, ws_pin_check, ws_pin_set)
