import { build } from "esbuild";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { copyFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("./", import.meta.url));
const output = fileURLToPath(new URL("../vendor/react-bits@66fd12b/", import.meta.url));
const upstream = "https://raw.githubusercontent.com/DavidHDev/react-bits/66fd12b4ada49cf1d523309aea6c965eb5123dfa/";

const download = promisify(execFile);

async function fetchUpstream(path) {
  const { stdout } = await download("curl", [
    "-fsSL", "--retry", "2", "--max-time", "30", upstream + path,
  ], { encoding: "buffer" });
  return stdout;
}

const directory = "src/ts-default/Micro/FuseButton/";
const [component, styles, license] = await Promise.all([
  fetchUpstream(directory + "FuseButton.tsx"),
  fetchUpstream(directory + "FuseButton.css"),
  fetchUpstream("LICENSE.md"),
]);

await build({
  absWorkingDir: source,
  entryPoints: ["archive.tsx"],
  outfile: output + "runtime.js",
  format: "esm",
  bundle: true,
  minify: true,
  jsx: "automatic",
  target: "es2022",
  legalComments: "linked",
  plugins: [{
    name: "react-bits-fuse-button",
    setup({ onResolve, onLoad }) {
      onResolve({ filter: /^react-bits-fuse-button$/ }, () => ({ path: "FuseButton.tsx", namespace: "react-bits" }));
      onResolve({ filter: /^\.\/FuseButton\.css$/, namespace: "react-bits" }, () => ({ path: "FuseButton.css", namespace: "react-bits" }));
      onLoad({ filter: /\.tsx$/, namespace: "react-bits" }, () => ({ contents: component, loader: "tsx", resolveDir: source }));
      onLoad({ filter: /\.css$/, namespace: "react-bits" }, () => ({ contents: styles, loader: "css" }));
    },
  }],
});

await writeFile(output + "ReactBits-LICENSE.txt", license);

const licenses = [
  ["react", "LICENSE", "React"],
  ["react-dom", "LICENSE", "ReactDOM"],
  ["scheduler", "LICENSE", "Scheduler"],
  ["@hugeicons/react", "LICENSE.md", "HugeiconsReact"],
  ["@hugeicons/core-free-icons", "LICENSE.md", "HugeiconsCoreFreeIcons"],
];
for (const [name, file, label] of licenses) {
  await copyFile(source + "node_modules/" + name + "/" + file, output + label + "-LICENSE.txt");
}
