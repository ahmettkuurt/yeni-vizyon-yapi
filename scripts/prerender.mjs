// Derlemeden sonra çalışır: her sayfanın HTML'ini önceden üretip dist/ içine yazar.
// Böylece Google ve WhatsApp/Facebook önizlemeleri içeriği JavaScript beklemeden görür.
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const ssrOut = `${root}dist-ssr`;

const pages = [
  { entry: "src/entry-server.tsx", name: "home", html: "dist/index.html" },
  { entry: "src/katalog/entry-server.tsx", name: "katalog", html: "dist/katalog/index.html" },
];

await build({
  root,
  logLevel: "warn",
  build: {
    ssr: true,
    outDir: ssrOut,
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      input: Object.fromEntries(pages.map(p => [p.name, `${root}${p.entry}`])),
      output: { entryFileNames: "[name].js" },
    },
  },
});

for (const page of pages) {
  const { render } = await import(pathToFileURL(`${ssrOut}/${page.name}.js`).href);
  const file = `${root}${page.html}`;
  const html = await readFile(file, "utf8");
  if (!html.includes("<!--app-html-->")) throw new Error(`${page.html}: <!--app-html--> bulunamadı`);
  await writeFile(file, html.replace("<!--app-html-->", render()));
  console.log(`✓ prerender: ${page.html}`);
}

await rm(ssrOut, { recursive: true, force: true });
