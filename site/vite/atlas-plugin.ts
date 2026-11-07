import fs from "node:fs";
import path from "node:path";
import sirv from "sirv";
import type { OutgoingHttpHeader, OutgoingHttpHeaders } from "node:http";
import type { Plugin } from "vite";

const VIRTUAL = "virtual:atlas-data";
const RESOLVED = "\0" + VIRTUAL;
const CONTENT = new Set(["demos", "previews", "docs", "prompts", "entries", "data", "agent", "site", "asset-cache-worker.js", "README.md", "CONTRIBUTING.md", "AGENTS.md"]);

export function atlasContent(root: string): Plugin {
  return {
    name: "atlas-content",
    resolveId(id) { return id === VIRTUAL ? RESOLVED : undefined; },
    load(id) {
      if (id !== RESOLVED) return;
      const read = (name: string) => JSON.parse(fs.readFileSync(path.join(root, "data", name + ".json"), "utf8"));
      const data = { lib: "web", labels: read("labels"), cases: read("cases"), patterns: read("patterns"), materials: read("materials"), docs: read("docs") };
      return `export default JSON.parse(${JSON.stringify(JSON.stringify(data))});`;
    },
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        const utf8 = <T,>(value: T) => typeof value === "string" && /^(text\/(markdown|javascript|css|plain)|application\/json)(;|$)/i.test(value) && !/charset\s*=/i.test(value) ? `${value}; charset=utf-8` : value;
        const setHeader = res.setHeader;
        res.setHeader = function(name, value) { return setHeader.call(this, name, name.toLowerCase() === "content-type" ? utf8(value) : value); };
        const writeHead = res.writeHead.bind(res);
        res.writeHead = function(statusCode: number, statusMessage?: string | OutgoingHttpHeaders | OutgoingHttpHeader[], headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]) {
          const values = typeof statusMessage === "object" ? statusMessage : headers;
          if (values && !Array.isArray(values)) for (const name of Object.keys(values)) if (name.toLowerCase() === "content-type") values[name] = utf8(values[name]);
          return writeHead(statusCode, typeof statusMessage === "string" ? statusMessage : undefined, typeof statusMessage === "object" ? statusMessage : headers);
        };
        next();
      });
      const dataDirectory = path.join(root, "data");
      server.watcher.add(dataDirectory);
      server.watcher.on("change", file => {
        if (path.dirname(path.resolve(file)) !== dataDirectory || !file.endsWith(".json")) return;
        const module = server.moduleGraph.getModuleById(RESOLVED);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      });
      const serve = sirv(root, { dev: true, etag: true });
      server.middlewares.use((req, res, next) => {
        decodeReserved(req);
        const url = (req.url ?? "/").split("?")[0]!;
        const first = decodeURIComponent(url.split("/")[1] ?? "");
        if (!CONTENT.has(first)) return next();
        if (first === "site" && !/^\/site\/(?:runtime|icons)(?:\/|$)/.test(url)) return next();
        serve(req, res, () => { res.statusCode = 404; res.end("Not found"); });
      });
    },
  };
}

function decodeReserved(req: { url?: string }) {
  if (!req.url) return;
  const i = req.url.indexOf("?");
  const pathname = i < 0 ? req.url : req.url.slice(0, i);
  const fixed = pathname.replace(/%(40|3A|2B|2C|24|3B|3D|26)/gi, m => decodeURIComponent(m));
  if (fixed !== pathname) req.url = fixed + (i < 0 ? "" : req.url.slice(i));
}
