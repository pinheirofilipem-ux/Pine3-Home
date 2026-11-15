// The wall screen's side of pairing (see custom_components/pine3_home/pairing.py).

const TOKEN_KEY = "pine3_home.token";
const API = "/api/pine3_home";

export interface PairStart {
  code: string;
  pair_id: string;
  secret: string;
  ttl: number;
}

export type PairStatus =
  | { status: "waiting"; code: string }
  | { status: "expired" }
  | { status: "approved"; token: string; screen: { id: string; name: string; dashboard: string } };

export function storedToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function storeToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* private mode: the screen pairs again after a reload */
  }
}

async function post<T>(path: string, body?: unknown): Promise<T> {
  const r = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body ?? {}),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((data as { error?: string; message?: string }).error ?? (data as { message?: string }).message ?? `HTTP ${r.status}`);
  return data as T;
}

export const startPairing = () => post<PairStart>("/pair/start");
export const pairStatus = (p: PairStart) => post<PairStatus>("/pair/status", { pair_id: p.pair_id, secret: p.secret });
