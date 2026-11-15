// Shapes returned by the integration's websocket commands (custom_components/pine3_home/websocket.py).

export type Style = "vidro" | "bento" | "moldura" | "editorial" | "instrumento" | "orbita" | "carteira" | "lente";
export type DockPlacement = "left" | "bottom";

export interface Dashboard {
  id: string;
  name: string;
  style: Style;
  dock: DockPlacement;
  theme: string;
  views?: unknown[] | null;
}

export interface Screen {
  id: string;
  name: string;
  dashboard: string;
  paired: number;
  active?: boolean;
  last_used?: string | null;
}

export interface PendingCode {
  code: string;
  age: number;
}

export interface Device {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface Room {
  id: string;
  name: string;
  icon: string;
  floor: string | null;
  devices: Device[];
  temperature: string | null;
  humidity: string | null;
  scenes: string[];
  hidden: boolean;
}

export interface Home {
  rooms: Room[];
  scenes: string[];
  scripts: string[];
  weather: string | null;
  persons: string[];
  version: string;
}

export interface Me {
  screen: Screen | null;
  dashboard: Dashboard;
  is_admin: boolean;
  version: string;
}

export const STYLE_NAMES: Record<Style, string> = {
  vidro: "Vidro",
  bento: "Bento",
  moldura: "Moldura",
  editorial: "Editorial",
  instrumento: "Instrumento",
  orbita: "Órbita",
  carteira: "Carteira",
  lente: "Lente",
};

export const DOCK_NAMES: Record<DockPlacement, string> = { left: "À esquerda", bottom: "Em baixo" };
