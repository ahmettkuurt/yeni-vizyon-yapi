import { renderToString } from "react-dom/server";
import Catalog from "./Catalog";

export function render() {
  return renderToString(<Catalog />);
}
