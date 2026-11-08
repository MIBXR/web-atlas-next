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
  resolve: {
    alias: [
      { find: /^@\/styles\/base-nova\/ui-rtl(?=\/)/, replacement: local("./upstream/registry/bases/base/ui") },
      { find: /^@\/styles\/(?:base|radix)-(?:nova|rhea|vega)(?=\/)/, replacement: local("./upstream/registry/bases/base") },
      { find: "@/app/(create)/components/icon-placeholder", replacement: local("./icon-placeholder.tsx") },
      { find: "next/image", replacement: local("./next-image.tsx") },
      { find: "next/link", replacement: local("./next-link.tsx") },
      { find: "@", replacement: local("./upstream") },
    ],
  },
  build: {
    lib: { entry: local("./main.tsx"), formats: ["es"], fileName: "runtime", cssFileName: "runtime" },
    outDir: "../vendor/shadcn-ui@4.23.0",
    emptyOutDir: true,
    license: { fileName: "dependencies.md" },
  },
});
