import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { atlasContent } from "./site/vite/atlas-plugin.ts";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(root, "site"),
  base: "./",
  plugins: [react(), atlasContent(root)],
  resolve: { alias: { "@": path.join(root, "site") } },
  build: { outDir: path.join(root, "dist"), emptyOutDir: true, chunkSizeWarningLimit: 4000 },
});
