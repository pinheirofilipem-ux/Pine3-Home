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
  /** Per view ("home", a room id, "@clima"...): the order and size of its widgets, and the hidden ones. */
  layouts?: Record<string, Layout>;
  /** Whether the wall screens showing this dashboard may edit it. */
  screen_edit?: boolean;
  /** Minutes without activity before the ambient face shows (0 = never; default 2). */
  ambient_after?: number;
  /** Screen brightness on the ambient face, inside Pine3 Wallpanel. */
  ambient_brightness?: "auto" | "low" | "off";
}

export type WidgetSize = "s" | "m" | "l" | "xl";
export interface Layout {
  items: Array<{ key: string; size?: WidgetSize }>;
  hidden: string[];
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
  settings?: { ipma_area?: string | null };
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

/** The styles that exist so far; the others show Vidro until they arrive. */
export const READY_STYLES: Style[] = ["vidro", "bento", "moldura", "editorial"];

export const DOCK_NAMES: Record<DockPlacement, string> = { left: "À esquerda", bottom: "Em baixo" };

export const THEME_NAMES: Record<string, string> = { grafite: "Grafite (escuro)", claro: "Claro", auto: "Automático (pôr do sol)" };

// IPMA warning areas (idAreaAviso) for the weather widget.
export const IPMA_AREAS: Record<string, string> = {
  AVR: "Aveiro", BJA: "Beja", BRG: "Braga", BGC: "Bragança", CBO: "Castelo Branco", CBR: "Coimbra", EVR: "Évora",
  FAR: "Faro", GDA: "Guarda", LRA: "Leiria", LSB: "Lisboa", PTG: "Portalegre", PTO: "Porto", STM: "Santarém",
  STB: "Setúbal", VCT: "Viana do Castelo", VRL: "Vila Real", VIS: "Viseu",
  MCN: "Madeira · Costa Norte", MCS: "Madeira · Costa Sul", MRM: "Madeira · Regiões Montanhosas", MPS: "Porto Santo",
  AOR: "Açores · Grupo Oriental", ACE: "Açores · Grupo Central", AOC: "Açores · Grupo Ocidental",
};

export const AMBIENT_AFTER: Array<[number, string]> = [[0, "Nunca"], [1, "1 minuto"], [2, "2 minutos"], [5, "5 minutos"], [10, "10 minutos"], [30, "30 minutos"]];
export const AMBIENT_BRIGHTNESS: Record<string, string> = { auto: "Automático (dia 50%, noite 12%)", low: "Sempre baixo (12%)", off: "Não mexer" };
