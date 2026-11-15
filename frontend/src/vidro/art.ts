// Live art for the Vidro widgets: small SVG scenes drawn from the entity's state (from the plan's mockups).
import { svg, type SVGTemplateResult } from "lit";

let uid = 0;
const id = (p: string) => `${p}${++uid}`;
const frame = (body: SVGTemplateResult) =>
  svg`<svg class="art" viewBox="0 0 60 60" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">${body}</svg>`;

/** A pendant lamp; v = brightness 0..100, c = light colour. */
export function lamp(v: number, c = "#ffcf8a"): SVGTemplateResult {
  const g = id("l");
  return frame(svg`<defs><radialGradient id=${g} cx="36" cy="40" r="28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color=${c} stop-opacity=${(v / 100) * 0.85}/><stop offset="1" stop-color=${c} stop-opacity="0"/></radialGradient></defs>
    <circle cx="36" cy="40" r="28" fill=${`url(#${g})`}/><line x1="36" y1="0" x2="36" y2="22" stroke="#6b717a" stroke-width=".8"/>
    <path d="M25 34 L47 34 L41.5 21 L30.5 21 Z" fill=${v ? "#d9c6a3" : "#4a4f57"}/><ellipse cx="36" cy="34.5" rx="11" ry="1.7" fill=${v ? "#fff2d6" : "#3a3e45"}/>`);
}

/** A blind; p = position 0 (closed) .. 100 (open). */
export function blind(p: number): SVGTemplateResult {
  const closed = Math.max(0, Math.min(100, 100 - p));
  const slats = Array.from({ length: Math.round(closed / 11) }, (_, k) => svg`<line x1="20" x2="54" y1=${12 + k * 4.2} y2=${12 + k * 4.2} stroke="#8796a6" stroke-width=".5"/>`);
  return frame(svg`<rect x="20" y="10" width="34" height="46" rx="2" fill="#2d4a66" opacity=".6"/><circle cx="44" cy="22" r="5" fill="#ffd27a" opacity=".5"/>
    <rect x="20" y="10" width="34" height=${((46 * closed) / 100).toFixed(1)} fill="#a9b6c4"/>${slats}<rect x="18" y="8" width="38" height="3" rx="1" fill="#5d646e"/>`);
}

/** A thermostat dial; t = target temperature, colour by mode. */
export function thermo(t: number | null, color = "#ff9f43"): SVGTemplateResult {
  const f = t == null ? 0 : Math.max(0, Math.min(1, (t - 16) / 14));
  return frame(svg`<circle cx="40" cy="36" r="17" fill="#2a2e34" stroke="#454a52"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${color} stroke-width="2.6" stroke-dasharray=${`${(f * 81).toFixed(1)} 82`} transform="rotate(135 40 36)" stroke-linecap="round"/>
    <circle cx="40" cy="36" r="13" fill="none" stroke=${color} stroke-width="7" opacity=".08"/>`);
}

export function lockArt(open: boolean): SVGTemplateResult {
  return frame(svg`<rect x="28" y="12" width="24" height="44" rx="3" fill="#3a3f46"/><rect x="31" y="15" width="18" height="38" rx="2" fill="#2b2f35"/>
    <circle cx="34" cy="34" r="1.6" fill=${open ? "#ff8a5c" : "#5be3a0"}/><rect x=${open ? 44 : 38} y="33.2" width="6" height="1.6" rx=".8" fill="#8a919b"/>`);
}

export function robot(active: boolean): SVGTemplateResult {
  return frame(svg`<ellipse cx="40" cy="50" rx="16" ry="4" fill="#000" opacity=".3"/><ellipse cx="40" cy="44" rx="15" ry="6" fill="#d8dce1"/><rect x="25" y="38" width="30" height="6" fill="#d8dce1"/>
    <ellipse cx="40" cy="38" rx="15" ry="6" fill="#eef0f3"/><circle cx="40" cy="36" r="3.4" fill=${active ? "#5be3a0" : "#c4c9cf"}/>
    ${active ? svg`<path d="M10 50 Q20 46 26 48" stroke="#5be3a0" stroke-width=".8" fill="none" stroke-dasharray="1.2 1.2" opacity=".8"/>` : null}`);
}

/** Album art: the real picture when there is one, otherwise a sunset. */
export function album(picture?: string | null): SVGTemplateResult {
  if (picture) {
    return frame(svg`<image href=${picture} x="26" y="14" width="30" height="30" preserveAspectRatio="xMidYMid slice" transform="rotate(6 41 29)"/>`);
  }
  const g = id("a");
  return frame(svg`<defs><linearGradient id=${g} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3a35f"/><stop offset=".5" stop-color="#d96d6d"/><stop offset=".75" stop-color="#5c4a8a"/><stop offset="1" stop-color="#2e2a54"/></linearGradient></defs>
    <rect x="26" y="14" width="30" height="30" rx="3" fill=${`url(#${g})`} transform="rotate(6 41 29)"/><circle cx="46" cy="22" r="3" fill="#ffe7b8" opacity=".9" transform="rotate(6 41 29)"/>`);
}

export function weatherArt(condition: string): SVGTemplateResult {
  const sun = !/rain|pour|snow|fog|cloudy$|lightning|night/.test(condition) || condition === "partlycloudy";
  const cloud = condition !== "sunny" && condition !== "clear-night";
  const rain = /rain|pour|lightning/.test(condition);
  const moon = condition === "clear-night";
  return frame(svg`${sun ? svg`<circle cx="44" cy="20" r="8" fill="#ffd27a" opacity=".85"/>` : null}
    ${moon ? svg`<path d="M46 12a9 9 0 1 0 6 14 7 7 0 1 1-6-14z" fill="#e8e3c8" opacity=".9"/>` : null}
    ${cloud ? svg`<path d="M28 36h20a6 6 0 0 0 .6-12 9 9 0 0 0-17 2.5A5 5 0 0 0 28 36z" fill="#cfd6df"/>` : null}
    ${rain ? svg`<path d="M32 40l-2 6M38 40l-2 6M44 40l-2 6" stroke="#6cc8ff" stroke-width="1.4" stroke-linecap="round"/>` : null}`);
}

export function fanArt(on: boolean): SVGTemplateResult {
  return frame(svg`<g transform="translate(40 34)"><g class=${on ? "spin" : ""}>
    ${[0, 120, 240].map((r) => svg`<ellipse cx="0" cy="-8" rx="4" ry="8" fill="#cfd6df" opacity=".85" transform=${`rotate(${r})`}/>`)}
    </g><circle r="2.6" fill="#8a919b"/></g>`);
}

export function plugArt(on: boolean): SVGTemplateResult {
  return frame(svg`<rect x="28" y="20" width="24" height="24" rx="6" fill="#3a3f46"/><circle cx="36" cy="32" r="1.8" fill="#1b1e22"/><circle cx="44" cy="32" r="1.8" fill="#1b1e22"/>
    <circle cx="48" cy="24" r="1.4" fill=${on ? "#5be3a0" : "#5d646e"}/>`);
}

/** A soft line chart for a sensor: the last 24 h when the history is known, a flat line until then. */
export function spark(c: string, values?: number[]): SVGTemplateResult {
  let line = "M0 26 L100 26";
  if (values && values.length > 1) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    const pts = values.map((v, i) => [(i / (values.length - 1)) * 100, 34 - ((v - min) / span) * 26]);
    line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  }
  return svg`<svg class="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d=${`${line} V40 H0Z`} fill=${c} opacity=".12"/><path d=${line} fill="none" stroke=${c} stroke-width="1.4" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity=".85"/></svg>`;
}

export function sceneArt(): SVGTemplateResult {
  return frame(svg`<circle cx="42" cy="34" r="14" fill="#b49cff" opacity=".18"/><path d="M42 22l2.6 7.4L52 32l-7.4 2.6L42 42l-2.6-7.4L32 32l7.4-2.6z" fill="#d9ccff"/><path d="M52 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#ffe2b0"/>`);
}
