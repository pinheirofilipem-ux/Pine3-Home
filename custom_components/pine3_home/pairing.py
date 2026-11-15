"""Pairing wall screens without a password.

A screen opens the light page (/pine3/ecra) and asks for a pairing code. Someone signed in to Home
Assistant as an administrator types that code in the Pine3 Home panel and picks a dashboard. The
integration then gives the screen a long-lived access token of a dedicated, non-admin user that can
only be used from the local network ("Pine3 Home · Ecrãs"). The screen keeps the token and talks to
Home Assistant's websocket with it; removing the screen revokes the token.

Nothing here is reachable without the code shown on the screen *and* the secret only that screen
knows, and a code only becomes a token after an administrator approves it.
"""

from __future__ import annotations

import secrets
import time
from dataclasses import dataclass, field
from datetime import timedelta
from typing import Any

from homeassistant.auth.const import GROUP_ID_USER
from homeassistant.auth.models import TOKEN_TYPE_LONG_LIVED_ACCESS_TOKEN, User
from homeassistant.core import HomeAssistant

from .const import SCREEN_USER_NAME

CODE_TTL = 10 * 60  # seconds a code stays valid
MAX_PENDING = 8  # codes waiting at the same time
MIN_INTERVAL = 3  # seconds between two codes from the same address
TOKEN_LIFETIME = timedelta(days=3650)


class PairingError(Exception):
    """A pairing request that can't be honoured; the message is shown to the person."""


@dataclass
class Pending:
    code: str
    pair_id: str
    secret: str
    created: float
    remote: str | None
    screen: dict[str, Any] | None = None  # set once approved
    token: str | None = None  # handed to the screen once, then forgotten
    seen: float = field(default_factory=time.monotonic)


class PairingManager:
    """Codes waiting for approval (in memory) and the paired screens (in the integration's store)."""

    def __init__(self, hass: HomeAssistant, data: dict[str, Any], save) -> None:
        self.hass = hass
        self.data = data  # the integration's stored data: {"screens": [...], "screen_user_id": ...}
        self._save = save
        self._pending: dict[str, Pending] = {}
        self._last_from: dict[str, float] = {}

    # ---------- codes ----------
    def _expire(self) -> None:
        now = time.monotonic()
        for pid in [p for p, v in self._pending.items() if now - v.created > CODE_TTL]:
            del self._pending[pid]

    def start(self, remote: str | None) -> Pending:
        """A screen asks for a code."""
        self._expire()
        now = time.monotonic()
        if remote and now - self._last_from.get(remote, -1e9) < MIN_INTERVAL:
            raise PairingError("too_fast")
        if len(self._pending) >= MAX_PENDING:
            raise PairingError("too_many")
        self._last_from[remote or ""] = now
        used = {p.code for p in self._pending.values()}
        code = f"{secrets.randbelow(1_000_000):06d}"
        while code in used:
            code = f"{secrets.randbelow(1_000_000):06d}"
        pending = Pending(code=code, pair_id=secrets.token_urlsafe(12), secret=secrets.token_urlsafe(24), created=now, remote=remote)
        self._pending[pending.pair_id] = pending
        return pending

    def status(self, pair_id: str, secret: str) -> dict[str, Any]:
        """A screen asks whether its code was approved. The token is handed over once."""
        self._expire()
        p = self._pending.get(pair_id)
        if p is None or not secrets.compare_digest(p.secret, secret):
            return {"status": "expired"}
        p.seen = time.monotonic()
        if p.token is None:
            return {"status": "waiting", "code": p.code}
        token, screen = p.token, p.screen
        del self._pending[pair_id]
        return {"status": "approved", "token": token, "screen": screen}

    def pending_codes(self) -> list[dict[str, Any]]:
        self._expire()
        return [{"code": p.code, "age": int(time.monotonic() - p.created)} for p in self._pending.values() if p.token is None]

    # ---------- approval ----------
    async def _screen_user(self) -> User:
        auth = self.hass.auth
        user_id = self.data.get("screen_user_id")
        user = await auth.async_get_user(user_id) if user_id else None
        if user is None:
            user = await auth.async_create_user(SCREEN_USER_NAME, group_ids=[GROUP_ID_USER], local_only=True)
            self.data["screen_user_id"] = user.id
        return user

    async def approve(self, code: str, name: str, dashboard: str) -> dict[str, Any]:
        """An administrator approves a code: the screen gets its token on its next status check."""
        self._expire()
        p = next((v for v in self._pending.values() if v.code == code and v.token is None), None)
        if p is None:
            raise PairingError("unknown_code")
        user = await self._screen_user()
        screen_id = secrets.token_hex(4)
        refresh = await self.hass.auth.async_create_refresh_token(
            user,
            client_name=f"Pine3 Home · {name} · {screen_id}",
            token_type=TOKEN_TYPE_LONG_LIVED_ACCESS_TOKEN,
            access_token_expiration=TOKEN_LIFETIME,
        )
        screen = {"id": screen_id, "name": name, "dashboard": dashboard, "token_id": refresh.id, "paired": int(time.time())}
        self.data.setdefault("screens", []).append(screen)
        await self._save()
        p.screen = {k: v for k, v in screen.items() if k != "token_id"}
        p.token = self.hass.auth.async_create_access_token(refresh)
        return p.screen

    # ---------- screens ----------
    def screens(self) -> list[dict[str, Any]]:
        live = []
        for s in self.data.get("screens", []):
            token = self.hass.auth.async_get_refresh_token(s["token_id"])
            last = token.last_used_at.isoformat() if token and token.last_used_at else None
            live.append({**{k: v for k, v in s.items() if k != "token_id"}, "active": token is not None, "last_used": last})
        return live

    def screen_for_token(self, refresh_token_id: str | None) -> dict[str, Any] | None:
        return next((s for s in self.data.get("screens", []) if s["token_id"] == refresh_token_id), None)

    async def update(self, screen_id: str, **changes: Any) -> dict[str, Any]:
        s = next((x for x in self.data.get("screens", []) if x["id"] == screen_id), None)
        if s is None:
            raise PairingError("unknown_screen")
        s.update({k: v for k, v in changes.items() if v is not None})
        await self._save()
        return {k: v for k, v in s.items() if k != "token_id"}

    async def remove(self, screen_id: str) -> None:
        """Forget a screen and revoke its token: it goes back to the pairing code."""
        screens = self.data.get("screens", [])
        s = next((x for x in screens if x["id"] == screen_id), None)
        if s is None:
            raise PairingError("unknown_screen")
        token = self.hass.auth.async_get_refresh_token(s["token_id"])
        if token is not None:
            self.hass.auth.async_remove_refresh_token(token)
        screens.remove(s)
        await self._save()
