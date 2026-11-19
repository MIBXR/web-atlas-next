# Taste Skill：AI 编码 Agent 的网页设计 skill 官网研究

## 来源与范围

来源为 [Taste Skill 官网](https://www.tasteskill.dev/)（2026-11-19 线上版本，部署标识 `dpl_p6tE71r3jRSWDdmahXrJaf8t29eg`）及配套开源仓库 [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/f6b76575f949707b4e3c37cd86cb44b0b98643e8)（`v2.5.1`）。本案例完整复现官网首页（12 个模块）及顶栏的四个子页（[Docs](../../demos/cases/taste-skill-site/docs/index.html)、[Guide](../../demos/cases/taste-skill-site/guide/index.html)、[Changelog](../../demos/cases/taste-skill-site/changelog/index.html)、[Blog](../../demos/cases/taste-skill-site/blog/index.html)）。

创作者 Leon Lin（[@Leonxlnx](https://github.com/Leonxlnx)）公开所在地为德国慕尼黑（Munich），国别归入德国；页面中展示的 *Bohne & Söhne*（莱比锡咖啡烘焙店）、*Nachtschicht*（科隆电子乐之夜）、*Atelier Nord*（建筑事务所）、*Margin*（合同审阅工具）与 *Noteflow*（笔记应用）均为技能生成的示范设定。技能原文、CLI 脚本与可运行设计套件收录在关联素材 [taste-skill](../materials/taste-skill.md)。

## 模块状态矩阵

完整六列动态对照矩阵、解包模块映射与双视口核验结果见 [fidelity.md](../../demos/cases/taste-skill-site/fidelity.md)。

| 模块 | 入口与核心状态 | 对照结果位置 |
| --- | --- | --- |
| 自适应悬浮胶囊顶栏 | 深色 Hero 磨砂、浅色纸面 `.on-light`、下滚收起 `data-tucked`、终章 `.is-dark`、手机抽屉 | fidelity 矩阵第 1 行 |
| Hero 与四标签作品舞台 | 命令复制、四标签裁剪胶囊切换、`.work-frame` 滚动展平、离屏 `data-asleep` | fidelity 矩阵第 2 行 |
| Sponsored by | 四栏细线白卡（Interfaces、React Bits、IMG.LY、Sent.dm）与赞助入口 | fidelity 矩阵第 3 行 |
| The draw 二十方向滚筒 | 3D 竖向滚筒、准星与光晕呼吸、右侧计数与副标题、91.2% 弹出三张抽选卡 | fidelity 矩阵第 4 行 |
| Design sense 三层能力卡 | Pictures 步进打字检索、Inspector 双轮扫描与三维翻转 Fixed、App 滚轮数字与柱图 | fidelity 矩阵第 5 行 |
| Before and after 五步舞台 | 左栏五步导轨与按钮跳转、右栏 Noteflow 真实 DOM 五步去套路改版 | fidelity 矩阵第 6 行 |
| Install 与支持 Agent | `npx skills` / `Claude Code` / `Codex` 三标签命令复制、6 个 Agent 标志格 | fidelity 矩阵第 7 行 |
| TasteCode 桌面应用演示 | 8.6s 自动工作流（6 步日志 + Diff 切 Browser + 页面滚动预览）、Pause/Play/Replay 控制 | fidelity 矩阵第 8 行 |
| Questions & Open source | 2×3 常见问题白卡、23 位社区赞助者头像、Kimi 与 Vercel 支持卡 | fidelity 矩阵第 9 行 |
| Stop guessing, start deciding. | 9 层 Canvas 光泛、日冕扩张与夜幕降下、双句柔焦字标交接 | fidelity 矩阵第 10 行 |
| 暖黑页脚与四个导航子页 | 页脚日出巨字、`Docs` / `Guide` 吸附目录高亮与代码块复制、`Changelog`、`Blog` | fidelity 矩阵第 11–12 行 |

---

## 官网如何证明“设计品味可以被打包为工具”

### 1. 首屏用四类不同业态的成品画面建立基准
首屏从顶部暖黑（`#140a05`）经焦橙色（`#ff5b14`）垂直过渡到暖奶油纸面（`#f8f4ee`），标题 *"The design skill for AI coding agents"* 下方并置单行安装命令复制框与文档入口。紧随其后的 `.work-frame` 将 1440 宽度的作品截图放在带透视倾角（`rotateX: 26deg, scale: 0.84`）的画框内，随用户向下滚动展平为正视；顶部的四个标签分别代表四种截然不同的业态——莱比锡街角咖啡馆（`Coffee shop`）、科隆电子乐演出（`Club night`）、北欧木构建筑事务所（`Architects`）与法律合同审阅软件（`Contracts`）。标签指示器不用固定宽度的滑块，而是由 `ResizeObserver` 测量当前按钮在整条标签栏中的偏移，用 `clip-path: inset(top right bottom left round 10px)` 裁切出一层深色内胆，无论标签文字长短都能严丝合缝地包裹。

### 2. "The draw"：把随机发牌算法转化为三维透视滚筒
为了说明技能如何避免每次生成千篇一律的页面，`#directions` 章节将 `draw.mjs` 的 20 条美术方向（如 *"1. The name as a monument"*、*"3. The pinned poster"*、*"18. The split stage"*、*"20. Type and nothing else"*）排布在半径 `--drum-r`、透视 `--drum-persp` 的三维竖向圆柱滚筒上。
- **几何与光照**：滚动进度驱动 `--drum-turn` 旋转角，脚本按每项与视口中心的夹角余弦计算不透明度 `--drum-o` 与高亮权重 `--drum-lit`。
- **准星呼吸**：视口中央的阅读窗口由上下两条水平细线（`.drum-rule`）和左右两枚橙色三角准星（`.drum-pointer--left/right`）界定；当某条方向恰好卡入中心整步位时，背景暖光晕（`.drum-glow`）放大增亮，左右三角准星向内收拢咬合；滚筒处于两项之间时，准星向外退开至多 `10px`。
- **发牌收束**：右侧同步滚入当前序号（`1 of 20`）与一句构成说明；当滚动进度到达 `91.2%` 时，触发 `drum:close` 事件，上方交错弹出本页随机抽中的 3 张方向卡片（`Dealt for this page`，初始角度 `-5° / 2° / 6°` 落位归零），底部浮现 `See how a build runs` 链接。

### 3. 三张能力卡：把命令行脚本翻译成可重播的微叙事
`#how-it-works` 没有粘贴枯燥的终端日志，而是用三条 GSAP 时间线把三个核心脚本的工作过程演出来，并在桌面端支持鼠标移入随时重播：
- **Pictures（`scripts/assets.mjs`）**：在暖桃色底板上先以 `steps(20)` 等宽打字动画输入 `"roasted coffee beans"`，进度条闪过后依次展开三张带 `Dan Bollinger, Wikimedia` 署名的咖啡豆烘焙缩略图，最后弹出带扩散光环的 `CC BY-SA` 绿色许可标签与 `"3 saved to assets/ · credits recorded"`。
- **Inspector（`scripts/inspect.mjs`）**：在暗琥珀色十字准星底板上依次点亮 `1440`、`768`、`390` 三个检查宽度，第一道扫描线掠过时列出 `few-pictures`、`off-centre`、`edge-text` 等 3 项 `FAIL` 与 2 项 `WARN`；紧接着底栏由 `Round 1` 翻滚为 `Round 2`，第二道扫描线掠过并逐行划掉问题代码，红色 `FAIL` 与琥珀色 `WARN` 标签沿 X 轴三维翻转 90° 替换为绿色的 `Fixed`（`0 FAIL, 0 WARN`）。
- **App screens（`inspect.mjs --app`）**：用数字滚轮（`.roll-strip`）滚出 `1,284`、`€38.4k`、`2.4%` 三项指标，生长出周一至周日的七根营收柱，再绘出 `avg €5.5k` 均线并弹出周六峰值气泡（`Sat €8.1k`）。

### 4. "Before and after"：在同一 DOM 画布上分五步脱去 AI 套路
不同于常见的左右拉帘图片对比，`.scene.showcase` 在右侧画框内同时挂载了默认套路层（`.nf-slop`）与编辑式成品层（`.nf-calm`），左侧列出 5 个可点击跳转的演进步骤（对应滚动锚点 `0`、`0.18`、`0.4`、`0.665`、`0.93`）：
1. **The default**：典型的 AI 默认页——蓝紫渐变底、🚀 Emoji 标志、染色渐变词 `"Note-Taking"` 与三张毛玻璃空话卡片（`⚡ Lightning Fast`、`🔒 Super Secure`、`🎨 Beautiful Design`）。
2. **One palette（Step 1 of 4）**：以 `(440px, 166px)` 为圆心扩张一道 `600px` 圆形 `clip-path` 光环，将蓝紫渐变一举扫除为暖米白底色与深墨色单色板。
3. **Real type（Step 2 of 4）**：🚀 Emoji 旋转缩退，换上几何方块标志与紧致字标 `Noteflow`；空洞大标题逐词下沉退场，换上直白具体的 `"Notes that keep up with your thinking."`，三张卡片中的夸张形容词同步替换为具体事实（`Fast`、`Private`、`Plain`）。
4. **Layout with intent（Step 3 of 4）**：三张填料卡片带倾角向下坠出画面，标题与行动按钮左移归入左栏，右侧滑入一张真实的 `Weekly review` 笔记卡片。
5. **The last 10%（Step 4 of 4）**：笔记卡片内的已完成项依次弹出绿色复选框、划上删除线并压暗文字，底部弹出 `#planning`、`#weekly` 标签，按钮下方补齐 `"Free for personal use. No card needed."`，背后铺开一层柔和暖底衬托卡片层次。

### 5. TasteCode 工作流回放与终章 Canvas 光泛
- **TasteCode 桌面应用卡片**：在 `#0f0f0f` 深色圆角卡片内构建了一个完整三栏 macOS 桌面应用窗口（左侧项目树、中间 Agent 对话与 6 步执行日志、右侧 `Browser` / `Diff` 切换面板）。当卡片滚入视口中央时，8.6 秒时间线自动演示从锁定简报、抽取四色色板、收集三张照片、写入 6 个文件与 HTML 代码，到自动切至 `Browser` 面板加载 `127.0.0.1:4173`、上下滚动检验全页并弹出 `1440` 与 `390` 通过标签的全过程；右下角 `.tcw-control` 按钮让观看者可以随时暂停细看或重头回放。
- **终章 "Stop guessing, start deciding."（`light-flood`）**：全屏钉住舞台通过 9 张二维 Canvas 动态绘制带确定性伪随机抖动（消除色带）的暖橙日冕（`#e8500e` / `#ff7a2e`）、顶部压下的深色夜幕椭圆遮罩（`#140a05`）以及三层不同模糊半径（`6px / 3.4px / 1.5px` 与 `4px / 2px / 0.9px`）的 Canvas 柔焦字层。随着用户滚到底部，深色模糊的 `"Stop guessing,"` 逐层向柔焦过渡并上移消散，而亮白色的 `"start deciding."` 则从柔焦光晕中逐级凝聚为清晰字标，自然衔接到暖黑页脚的日出光晕与一键安装入口。

---

## 怎么改

[结构化条目的 migration](../../entries/cases/taste-skill-site.json) 列出了 Hero 四标签作品、二十条美术方向滚筒、三张核心能力动效卡、五步 Noteflow 改版舞台、TasteCode 工作流时间线与终章光泛配色参数的修改位置；上游分块与本地脚本的映射见 [source/README.md](../../demos/cases/taste-skill-site/source/README.md)。
