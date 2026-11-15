// The styles that exist and the element that draws each one. Both the HA panel and the wall screen use this.
import "../vidro/vidro";
import "../vidro/bento";
import "../vidro/moldura";
import "../vidro/editorial";
import "../vidro/instrumento";
import "../vidro/orbita";
import "../vidro/carteira";
import { unsafeStatic } from "lit/static-html.js";

export const STYLE_TAGS: Record<string, string> = {
  vidro: "pine3-vidro",
  bento: "pine3-bento",
  moldura: "pine3-moldura",
  editorial: "pine3-editorial",
  instrumento: "pine3-instrumento",
  orbita: "pine3-orbita",
  carteira: "pine3-carteira",
};

/** The element for a style; the styles still to come show Vidro. */
export const styleTag = (style: string) => unsafeStatic(STYLE_TAGS[style] ?? "pine3-vidro");
export const STYLE_SELECTOR = Object.values(STYLE_TAGS).join(", ");

/** A swatch for each style, for the style picker. */
export const STYLE_SWATCH: Record<string, string> = {
  vidro: "linear-gradient(180deg,#262b31,#0f1113)",
  bento: "linear-gradient(135deg,#ffd166 0 33%,#efe9df 33% 66%,#ff7a50 66%)",
  moldura: "linear-gradient(180deg,#f2b27a,#7c5a8c 60%,#1a1f30)",
  editorial: "repeating-linear-gradient(180deg,#f1ece3 0 22%,#14110d 22% 24%)",
  instrumento: "radial-gradient(circle at 60% 50%,#ff6a1a 0 12%,#3a3a38 13%)",
  orbita: "radial-gradient(circle,#3a3f5a 0 30%,#20232f 31%)",
  carteira: "linear-gradient(180deg,#e9e4da,#cfc6b6)",
  lente: "linear-gradient(135deg,#e6e9ee,#c9ced6)",
};
