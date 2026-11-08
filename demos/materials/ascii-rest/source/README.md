# ascii.rest 源码

此目录保存 [bas3line/ascii 0.4.0 的固定提交](https://github.com/bas3line/ascii/tree/88165af8d1713e82a50bd03b15f6cd1ffc925f90)（88165af8d1713e82a50bd03b15f6cd1ffc925f90）中的 `src/`、`registry/`、`scripts/`、`skills/`、`examples/` 与构建配置，均保留原文；上游 README 原文为 [README.upstream.md](README.upstream.md)，中文使用说明见 [ascii-rest.md](../../../../docs/materials/ascii-rest.md)。

## 重建发行库

在此目录执行：

```powershell
npm ci
npm run build
```

`package-lock.json` 固定 TypeScript 7.0.2，`npm run build` 执行 `tsc -p tsconfig.build.json` 并生成完整 `dist/`。

## 编译 Kit 示例

在同一目录使用同一份 TypeScript，实际编译命令为：

```powershell
$kitFiles = @(Get-ChildItem -Path examples/kit/*.ts | ForEach-Object FullName)
node node_modules/typescript/bin/tsc --ignoreConfig --noCheck --noResolve --target ES2022 --module ESNext --rewriteRelativeImportExtensions --verbatimModuleSyntax --rootDir examples/kit --outDir kit-dist $kitFiles
```

`kit-dist/` 中的 99 个 ES 模块对应原文件名，扩展名为 `.js`；连同 `examples/kit/assets/` 放入素材的 `demo/kit/`。包名导入保持原样，相对 TypeScript 导入由编译器改为 `.js`；样例页 import map 的 `./src/` 前缀将这些路径解析到本地发行库。上游示例与图片原文见 [examples/kit/](examples/kit/)。

## 本地化

以下路径相对素材根目录；此目录内的上游源码保留原样。

| 文件 | 原值 | 本地值 |
| --- | --- | --- |
| `vendor/ascii.rest@0.4.0/dist/ascii.js` 的 `STYLE` 字体地址 | `https://ascii.rest/fonts/ascii-rest-mono.woff2` | `new URL("../../../fonts/ascii-rest-mono.woff2", import.meta.url).href`，拼入 `url(...)` |
| `demo/demo.css` 的 Paper Mono 字体地址 | 上游 `site.css` 的 `/fonts/paper-mono.woff2` | `../fonts/paper-mono.woff2` |

按名加载使用 `dist/library.js` 的相对模块路径；Kit 图片通过 `new URL("./assets/…", import.meta.url)` 读取本地文件。CLI 的 `https://ascii.rest/r` 保持原样。

对照结果见 [fidelity.md](../fidelity.md)。
