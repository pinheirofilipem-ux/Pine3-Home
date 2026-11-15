"""Config flow for Pine3 Home (single instance, no options)."""

from homeassistant import config_entries

from .const import DOMAIN


class Pine3HomeConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Add Pine3 Home once."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if user_input is not None:
            return self.async_create_entry(title="Pine3 Home", data={})
        return self.async_show_form(step_id="user")
