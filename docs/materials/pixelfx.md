# pixelfx：代码画出来的像素特效

[结构化条目](../../entries/materials/pixelfx.json) · [打开画廊](../../demos/materials/pixelfx/index.html) · [复刻对照](../../demos/materials/pixelfx/fidelity.md)

pixelfx 把 244 个像素特效写成 244 个文件，`src/fx/<分类>/<名称>.js`。每份文件声明 `meta`（名称、描述、标签、画布尺寸、轴心、时长、是否循环、帧率、默认配色与种子），用 `create(o)` 或 `drawBack`／绘制函数把画面算进两块缓冲：颜色缓冲放不透明、抖动与半透明像素，光缓冲放加法混合的辉光，最后合成一帧。没有图片，所以同一效果能实时播放、镜像、换种子、换色阶，也能导成雪碧图交给别的引擎。

画廊是本库复刻的入口：21 个分类的瓦片进入视口才启动，点开一项看大图、读参数、切配色、生成雪碧图，并复制接入代码。效果名、描述与标签沿用上游英文原文。

## 运行代码

| 路径 | 内容 |
| --- | --- |
| `vendor/pixelfx@0.3.1/src/core/` | 画布、调色、粒子、画家、字体、角色与表演运行时 |
| `vendor/pixelfx@0.3.1/src/fx/` | 每个效果一个文件，`index.js` 是聚合入口 |
| `vendor/pixelfx@0.3.1/LICENSE`、`NOTICE.md` | MIT 许可原文与第三方声明 |

在页面里通过 importmap 或相对路径引入 `src/core/index.js` 与要用的效果文件即可，没有构建步骤，也没有运行时依赖。

| 接口 | 用途 |
| --- | --- |
| `createFrame(w, h)`、`clearFrame(frame)` | 建一块像素分辨率的画布并清帧 |
| `createFx(mod, opts)` | 播放单个效果；`opts` 可给 `x`、`y`、`flip`、`angle`、`seed`、`palette` |
| `createAct(mod, opts)` | 连角色与目标一起表演的效果，读取 `act.poses` 与 `act.hits` |
| `composite(frame, imageData.data, backdrop)` | 颜色缓冲先写入，光缓冲叠加在上 |
| `PAL`、`BACKDROPS` | 内置色阶与背景 |

## 两种效果

模拟型效果（`create(o)` 返回 `update(dt)` 与 `draw(p)`）在创建和更新时生成粒子、碎片与光，运行时以 120 Hz 或更细的步长推进，所以帧率变化不影响物理；随机数一律来自 `o.seed`，任何一帧都能精确复现。纯效果由时间直接算出画面，循环能无缝接回第一帧。

带 `act` 的 73 个效果把身体也写进数据：`poses` 是姿态关键帧，`hits` 给出命中时刻、冻结时长与抖动幅度。数值是普通数据，读出来就能让自己的角色在第几秒起手、第几秒停住。

## 参数

| 参数 | 说明 |
| --- | --- |
| `palette` | 由暗到亮的色阶，换成冷色阶火焰就变成冰焰；`PAL` 里有内置的一组 |
| `seed` | 随机种子，同一种子逐帧可复现 |
| `flip`、`angle` | 镜像与旋转 |
| `actor` | 带角色的效果可关掉角色，只看效果本体 |
| `size`、`origin` | 画布尺寸与轴心，写在各效果的 `meta` 里 |

## 取材

`source/upstream/` 保存上游的 `tools/`、`docs/` 与 `skills/pixelfx/`。渲染、导出雪碧图、搜索、检查与本地服务的命令见 [source/README.md](../../demos/materials/pixelfx/source/README.md)；写新效果的方法见 `docs/AUTHORING.md`，[CATALOG](../../demos/materials/pixelfx/source/upstream/docs/CATALOG.md) 按分类列出全部效果与尺寸。

画布放大时用整数倍并设 `image-rendering: pixelated`；缩小会丢掉整列的 1 px 线，画廊在这种情况下才退回平滑缩放。
