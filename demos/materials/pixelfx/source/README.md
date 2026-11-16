# pixelfx 源码与制作工具

此目录保存 [patch-gg/pixelfx 0.3.1 的固定提交](https://github.com/patch-gg/pixelfx/tree/5294518ce7c72e48b6100a744596e0acf57f2826)（`5294518ce7c72e48b6100a744596e0acf57f2826`）中的 `gallery/`、`tools/`、`docs/`、`skills/`、`.claude-plugin/` 与构建配置，均保留上游原始字节；核心与 244 个特效源码 `src/` 原样保存在 [../vendor/pixelfx@0.3.1/src/](../vendor/pixelfx@0.3.1/src/core/index.js)。上游 README 原文为 [README.upstream.md](README.upstream.md)，中文使用说明见 [pixelfx.md](../../../../docs/materials/pixelfx.md) 与 [pixelfx-skill.md](../../../../docs/materials/pixelfx-skill.md)。

## 命令行工具（无需安装依赖）

`tools/` 下的渲染、检查与索引脚本仅使用 Node.js 内置模块（Node 18+）。先将 `../vendor/pixelfx@0.3.1/src` 复制到此目录的 `src/`，即可直接执行：

```powershell
node tools/list.mjs frost                  # 按关键词检索特效 ID、名称、标签与说明
node tools/render.mjs ice/frost-nova       # 渲染 16 帧采样接触表至 records/ice/frost-nova/contact.png
node tools/render.mjs ice/frost-nova --sheet # 导出透明网格 PNG 与 Aseprite JSON 精灵表
node tools/act.mjs melee/sword-slash       # 渲染连续 12fps 角色动作步进图至 records/act/melee-sword-slash.png
node tools/act.mjs melee/sword-slash --sheet # 将含角色与受击目标的完整演出导出为精灵表
node tools/check.mjs                       # 检查全部 244 个特效的越界、首尾残留、循环接缝、随机数与帧耗时
node tools/new.mjs arcane/my-spell         # 创建新特效模板（循环特效加 --loop）
node tools/index.mjs                       # 重新生成 src/fx/index.js 并同步 README.upstream.md 与 docs/CATALOG.md
```

使用 `--gif` 或 `--mp4` 导出动图与视频预览时需本机安装 `ffmpeg`。

## 重建独立画廊包

`package-lock.json` 固定 `esbuild 0.25.10`。在此目录执行：

```powershell
npm ci
node tools/build-gallery.mjs
```

构建脚本将 `gallery/app.js` 与 `src/` 打包至 `dist/gallery/` 与单页内联版 `dist/page/`。

## 本地化

本素材的在线样例入口位于上层目录（`../index.html`、`../demo/demo.js`、`../demo/demo.css`），直接从 `../vendor/pixelfx@0.3.1/src/` 加载 ES 模块；此 `source/` 目录内的上游源码保留原样。

| 文件 | 原值 | 本地值 |
| --- | --- | --- |
| `index.html` 的 Google Fonts 样式表 | `https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500&family=Red+Hat+Mono:wght@400;500&display=swap` | 移除外链，在 `demo/demo.css` 中以 `@font-face` 指向 `../fonts/*.woff2` |
| `demo/demo.css` 的 Patch Pixel 字体地址 | 上游 `gallery/style.css` 的 `url(fonts/PatchPixel-Regular.woff2)` | `url(../fonts/PatchPixel-Regular.woff2)` |
| `demo/demo.js` 的运行库导入路径 | `../src/fx/index.js`、`../src/core/index.js` | `../vendor/pixelfx@0.3.1/src/fx/index.js`、`../vendor/pixelfx@0.3.1/src/core/index.js` |
| `demo/demo.js` 的样例直达参数 | 仅读取 `location.hash` 筛选分类 | 增加读取 `?demo=<id>`（或 `?fx=<id>`）自动打开对应特效详情面板，并对 `focus()` 默认附加 `preventScroll: true` |

与官方在线画廊的对照结论见 [fidelity.md](../fidelity.md)。
