// The language of the dashboards and the settings. The Portuguese text is the key: what is not in the English
// dictionary stays in Portuguese, so nothing ever shows up empty.
import { EN } from "./en";

export type Lang = "pt" | "en";
let lang: Lang = "pt";

/** "auto" follows Home Assistant's language (or the browser's), anything starting with "pt" is Portuguese. */
export function setLang(setting?: string | null, fallback?: string | null): Lang {
  const want = setting && setting !== "auto" ? setting : fallback || (typeof navigator !== "undefined" ? navigator.language : "pt");
  lang = (want ?? "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
  if (typeof document !== "undefined") document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  return lang;
}

export const getLang = (): Lang => lang;

/** The locale for dates and numbers. */
export const locale = (): string => (lang === "pt" ? "pt-PT" : "en-GB");

/** Translate a Portuguese text; {name} placeholders are filled from vars. */
export function tr(pt: string, vars?: Record<string, string | number>): string {
  let out = lang === "en" ? EN[pt] ?? pt : pt;
  if (vars) out = out.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  return out;
}

/** One or many: trn(2, "{n} luz acesa", "{n} luzes acesas"). */
export const trn = (n: number, one: string, many: string): string => tr(n === 1 ? one : many, { n });

/** A map of words (a state → its name) whose values are translated when read. */
export function trMap<T extends Record<string, string>>(o: T): T {
  return new Proxy(o, { get: (x, k) => (typeof k === "string" && typeof x[k] === "string" ? tr(x[k]) : Reflect.get(x, k)) });
}

/** An object whose "name" (and "sub") are translated when read. */
export function trName<T extends object>(o: T): T {
  return new Proxy(o, { get: (x, k) => ((k === "name" || k === "sub") && typeof Reflect.get(x, k) === "string" ? tr(Reflect.get(x, k) as string) : Reflect.get(x, k)) });
}

/** A list of objects whose names are translated when read. */
export const trNames = <T extends object>(list: readonly T[]): T[] => list.map(trName);
