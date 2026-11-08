import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import previewImages from "./preview-images.json" with { type: "json" };

const local = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: "./",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "atlas-preview-images",
      enforce: "pre",
      transform(code, id) {
        if (!id.includes("/upstream/") || !id.endsWith(".tsx")) return;
        for (const [original, preview] of Object.entries(previewImages)) {
          code = code.replaceAll(original, preview);
        }
        return code;
      },
    },
  ],
  build: {
    lib: { entry: local("./main.tsx"), formats: ["es"], fileName: "runtime", cssFileName: "runtime" },
    outDir: "../vendor/heroui@3.2.7",
    emptyOutDir: true,
    license: { fileName: "dependencies.md" },
  },
});
