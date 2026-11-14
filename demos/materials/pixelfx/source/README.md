# pixelfx 源码与制作资料

[上游 0.3.1 固定提交](https://github.com/patch-gg/pixelfx/tree/5294518ce7c72e48b6100a744596e0acf57f2826) 的 `tools/`、`docs/`、`skills/pixelfx/`、`package.json` 与画廊原文件，均保留原文；上游 README 原文为 [README.upstream.md](upstream/README.upstream.md)，本库使用说明见 [pixelfx.md](../../../../docs/materials/pixelfx.md)。

## 渲染与导出

工具只依赖 Node 18 或更新版本，工作目录为 `upstream/`：

```sh
node tools/render.mjs fire/torch                  # 帧联系表 records/fire/torch/contact.png
node tools/render.mjs ice/frost-nova --sheet      # 透明 PNG 雪碧图与 Aseprite JSON
node tools/render.mjs fire --gif --scale 6        # 整类 GIF，需要 ffmpeg
node tools/list.mjs frost                        # 按 id、名称、标签与描述搜索
node tools/check.mjs                             # 检查溢出、接缝、未设种子的随机与慢帧
node tools/serve.mjs 8080                        # 打开 http://localhost:8080/gallery/
```

`tools/` 依赖它同级的 `src/`。用本站的固定版本运行时即可：把 `vendor/pixelfx@0.3.1/src` 复制进 `upstream/`，或在 `upstream/` 里另放一份上游仓库的 `src/`。`tools/build-gallery.mjs` 需要 esbuild，本地未安装。

## 制作新特效

`docs/AUTHORING.md` 写效果文件的结构、两种类型、种子与调色板约定；`skills/pixelfx/SKILL.md` 是随仓库发布的 Claude Code skill，给出草稿、渲染、看图、改进的循环。
