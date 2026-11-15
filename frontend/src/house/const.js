// The two helpers the files copied from Pine3 View (house3d.js, housecanvas.js, plan2d.js, devtypes.js) take from
// Pine3 View's const.js. Those four files are copies, left as they are; this file and i18n.js connect them to Pine3 Home.
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const dom = (id) => id.split(".")[0];
