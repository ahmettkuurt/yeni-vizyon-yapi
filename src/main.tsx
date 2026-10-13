import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { initialLanguage } from "./lib/i18n";
import "./index.css";

const root = document.getElementById("root")!;

// Sayfa derlemede Türkçe olarak önceden HTML'e işlenir (scripts/prerender.mjs).
// Ziyaretçi Türkçe görüyorsa o HTML'i canlandır; başka dil seçtiyse baştan çiz.
if (root.firstElementChild && initialLanguage.startsWith("tr")) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
