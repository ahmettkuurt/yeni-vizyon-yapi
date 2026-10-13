import { createRoot, hydrateRoot } from "react-dom/client";
import Catalog from "./Catalog";
import "./katalog.css";

const root = document.getElementById("root")!;

if (root.firstElementChild) {
  hydrateRoot(root, <Catalog />);
} else {
  createRoot(root).render(<Catalog />);
}
