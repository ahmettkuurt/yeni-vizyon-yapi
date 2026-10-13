import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Build sırasında dist/ içine sitemap.xml ve robots.txt üretir
    Sitemap({ hostname: "https://yenivizyonyapi.com" }),
  ],
  build: {
    rollupOptions: {
      // İki sayfa: ana site ve /katalog/
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        katalog: fileURLToPath(new URL("./katalog/index.html", import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
