import { defineConfig } from "vite";

// Two entry points, built into the integration's static folder:
//   panel.js  - the panel inside Home Assistant (sidebar)
//   screen.js - the light page for wall screens (/pine3/ecra), without Home Assistant's frontend
export default defineConfig({
  build: {
    outDir: "../custom_components/pine3_home/frontend",
    emptyOutDir: true,
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      input: { panel: "src/panel.ts", screen: "src/screen.ts" },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
