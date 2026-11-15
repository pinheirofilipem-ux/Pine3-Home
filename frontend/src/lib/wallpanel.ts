// The Pine3 Wallpanel app (github.com/pinheirofilipem-ux/wallpanel-android): when the screen runs inside it
// (user agent "Pine3Wallpanel/<n>" and window.Pine3Wallpanel), movement in front of the tablet counts as a
// touch, the screen turning off brings the dashboard back to Casa, and the ambient face lowers the brightness.
// In any other browser nothing here does anything.

interface Bridge {
  version(): number;
  state(): string;
  setBrightness(level: number): void;
  wake(): void;
  keepAwake(seconds: number): void;
  sleepNow(): void;
}

export type WallpanelEvent = "motion" | "sleep" | "wake";

export function bridge(): Bridge | null {
  const b = (window as unknown as { Pine3Wallpanel?: Bridge }).Pine3Wallpanel;
  return /Pine3Wallpanel\/\d+/.test(navigator.userAgent) && b && typeof b.version === "function" ? b : null;
}

/** Listen to the app's events; returns the function that stops listening. */
export function onWallpanel(cb: (type: WallpanelEvent) => void): () => void {
  const handler = (e: Event) => {
    const type = (e as CustomEvent<{ type?: string }>).detail?.type;
    if (type === "motion" || type === "sleep" || type === "wake") cb(type);
  };
  window.addEventListener("pine3wallpanel", handler);
  return () => window.removeEventListener("pine3wallpanel", handler);
}

const NIGHT = 0.12;
const DAY = 0.5;
let current: number | null = null;

/** Brightness for the ambient face (auto: by day / by night from the sun; low; off: don't touch); -1 = the system's. */
export function applyBrightness(ambient: boolean, mode: string | undefined, sunBelow: boolean | null): void {
  const b = bridge();
  if (!b) return;
  let want = -1;
  if (ambient && mode !== "off") {
    const h = new Date().getHours();
    const night = sunBelow ?? (h < 7 || h >= 21);
    want = mode === "low" || night ? NIGHT : DAY;
  }
  if (want === current) return;
  current = want;
  try {
    b.setBrightness(want);
  } catch (err) {
    console.warn("Pine3 Home: Pine3 Wallpanel", err);
  }
}
