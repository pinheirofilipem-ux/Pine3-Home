// Pine3 View's t() and tp(), on top of Pine3 Home's dictionary (the same idea: the Portuguese text is the key).
import { tr } from "../lib/i18n";

export const t = (s, vars) => tr(s, vars);
export const tp = (n, one, many, vars) => tr(n === 1 ? one : many, { n, ...vars });
