# Web Atlas 收录与维护

品牌案例以采集页面的布局、素材和交互为依据，经典构成练习以原作者实例和理论为依据；同一布局只换配色归为同一设计。

## 仓库定位

本库是个人设计参考库，不是作品画廊。它保存三类内容：可参考的案例范本、从范本中拆出的巧思、可直接取用的素材。

案例范本有两个用途：

1. **参考**：遇到真实需求时，从范本出发修改、增减、拼接，做出新的作品。
2. **验证**：检验某个来源的制作思路、工作流或 skill 能否在本库的条件下生效。

范本的价值在于制作过程可读、内容可改；可运行的网页是这个过程的检验结果。复刻他人作品的案例与本库原创案例按同一标准对待。

## 收录边界

本库收录以网页为载体的设计：观看者自己滚动、点击和阅读，画面随屏幕宽度重排。页面里的动效、声音和内容组织都属于网页的一部分，一并收录。

**收录**
- 网站与网页应用的完整案例
- 能从案例中单独借用的视觉、微动效、页面动效、声音与内容组织巧思
- 组件库、字体、图像、Shader 等内容素材
- 经典设计语言的构成练习
- 示范作品：由公开发布的 skill 或生成工具产出、随来源仓库公开的示范页面，按固定提交归档，页面设定作为示范内容。

案例的 `category` 使用“产品”“游戏/IP”“经典风格”“示范作品”“艺术/文化”。示范作品的研究重点是“页面用了哪些设计机制”；有基线版本时，再写“与基线相比改进了什么”。虚构内容不当作真实机构的事实来描述。

**不收录**
- 视频，以及按时间线播放的操作台与展示台。这类作品收录在 Motion Atlas。

**判定**
1. 最终形态是网站或网页应用：收录。
2. 最终形态是视频，或是带时间轴、按时间线播放的操作台／展示台：不收录，即使它运行在浏览器里。
3. 仍难判断时，设想把它逐帧导出为视频。核心价值仍在，它是时间线作品；价值依赖重排、滚动阅读和观看者自己的节奏，它属于本库。
4. 同一来源在两种载体上都有价值时，只收录网页部分，条目本身保持完整。
5. 主题相同、表现形式不同的作品可以分别出现在两个库里，各自是独立条目，互不引用。
6. 画幅不是判据：原作即使是固定画幅，复刻时也可以调整或拓展。各判据冲突时，以“谁掌握时间”为准。例如 HTML-Light-Demo 原作固定为 1440×810 画幅，但时间由观看者掌握，归入本库。

## 收录原则

- **案例驱动**：案例以真实 Demo 或作品为依据；没有现成作品、但能实践的，制作一个真实案例。skill、提示词与教程的原文按素材收录，作品与指导资料分别归类。
- **忠实复刻**：忠实复刻是验证过程，不是目的：检验在给定的素材、工作流与工具下能否复现参考作品；能 1:1 复现，说明这套过程正确、可复现。使用第一方字标、字体与摄影时保持比例，复杂场景保留状态关系和过渡顺序。
  - **验收以 1:1 为准**：有明确参考或源码的，与原作在相同视口并排对照一致，差异写明原因；没有源码，或源码、制作过程不完整的，尽力复现，无法复现的差异写明原因。按文档分工记录本次对照结果。
  - **影像转译**：官方影像的网页转译以官方影像为素材，整帧画面可作为素材。
  - **素材可直接取用，成片不能替代实现**：图形、人物形象、图片、字体、音乐、音效、视频等组成画面的素材可以直接取自原作，以后也可以替换；画面的构成、动效、交互与时间线由本库代码实现，不把原作渲染好的成片画面当作复刻结果。原作的品牌内容与文案照用。
  - **生成类素材**：原作由脚本生成的素材（抠图、贴纸、纸纹、渲染帧等）直接使用原作已生成的版本，生成脚本及其输入保留在条目本体的 `source/`；本库自己重新生成并验证过的版本也可以保留。
  - **有可用源码的作品保持原作代码原样**：不为“易改”重组原作代码结构，改动只限于接入本库和去掉与成品无关的内容（其他剪辑分支、调试代码、无人读取的中间文件）。原作缺数据或源码与公开成品不符时，以公开成品为准补全。网页仅提供压缩打包代码时，由本库自行实现。
  - **对照画面**：只由原作代码产生；接入层不为提高对照分数改动原作的画面实现（不叠加压缩、不替换原作的绘制代码），编码或缩放等处理只在测量时施加。
- **第三方资源**：素材与上游原文快照保留原始字节、尺寸、语言、许可与署名。`.gitattributes` 对原始素材与快照使用 `-text`，对自有文本使用 UTF-8／LF。
- **可修改**：修改范本时直接阅读和修改源码，不要求把内容抽成配置。案例、巧思与素材的迁移指南（`migration`）均为可选；有可提炼的常改内容时，写明路线、图片、文案、节拍、配色或素材在哪个文件、哪一段。
- **保留制作依赖**：收录是为了日后参考、学习和复现制作。除成品运行所需外，还要保留制作该作品必需的工具与依赖：素材生成与处理脚本、构建所需的上游源码、配乐合成库与采样，以及这些脚本读取的数据；无法入库的原始输入在 `source/README.md` 写明来源与获取方式。条目专属的工具与依赖放在条目本体的 `source/`；多个条目共用的作为素材收录在 `demos/materials/<id>/`，由条目引用。与本库已有工具完全等价的可以不收，但要在条目说明中写明对应关系。工具与依赖要能在库里取得，并写明用法；不要求每个案例都验证一键重跑。
- **方法与决策记录**：有研究价值时，在 `docs/cases/<id>.md` 记录参考与来源、采用的工作流／skill／提示词、关键决定与理由、怎么改；验证结论链接到本体的 `fidelity.md`。不强制每个案例都写，避免把范本框死在固定格式里。
- **语言**：网页上的说明文字一律用中文，装饰性的英文眉题除外。保留原语言的只有被复刻作品本身的原文，以及作为素材收录的 skill、prompt 原文。
- **声音**：新做的作品不用 AI 合成声音。用一条连续的公开音乐打底（如 Incompetech / Kevin MacLeod，CC BY 4.0），在 3–4 个关键节点放短音效（如 Kenney.nl，CC0），音量压在音乐之下。复刻作品沿用原作声音。

复刻覆盖任务约定范围内的公开模块及定义性交互；任务确定的删减及原因记录在 `fidelity.md`。

## 三类组织规范

内容分为案例 `cases`、巧思 `patterns`、素材 `materials`，同一条目在各目录使用相同英文 kebab-case id。目录按实际内容建立。

三库分别维护内部收录编号 `order`，正序按收录先后递增。新条目使用所属库现有最大编号加一；修改条目或为已有巧思补充来源时保留编号。编号仅用于排序，不在卡片上显示。

| 一级目录 | 角色 | 组织 |
| --- | --- | --- |
| `entries/` | 内容源：结构化条目 | `{cases,patterns,materials}/<id>.json` |
| `demos/` | 内容源：条目本体 | `{cases,patterns,materials}/<id>/` |
| `docs/` | 内容源：人读文档 | 根目录为通用文档；`{cases,patterns,materials}/<id>.md` 为单条文档；`readme/` 为 README 配图 |
| `prompts/` | 生成的 Prompt | `{cases,patterns,materials}/<id>.md`，条目有 `prompt` 时生成 |
| `agent/` | 生成的读取接口 | 根目录为 `catalog.json`；`{cases,patterns,materials}/index.json` 为单类索引，`<id>.json` 为资料包 |
| `previews/` | 截图与生成预览 | `{cases,patterns,materials}/<id>.<ext>`；变体用 `-portrait`、`-mobile`、`-reference`；作者效果图放 `materials/<id>/` |
| `data/` | 生成的站点数据 | `cases.json`、`patterns.json`、`materials.json`、`docs.json`、`labels.json`；`asset-sources.js` 保存素材映射 |
| `site/` | 站点代码 | React 页面、通用组件、Arc UI、内容插件、兼容入口和共享运行时；目录见[站点](#站点) |
| `scripts/` | 构建、检查、取材和静态导出工具 | 按工具命名；新条目模板位于 `templates/` |
| 根目录 | 项目入口与配置 | `README.md`、`CONTRIBUTING.md`、`AGENTS.md`、`package.json`、`package-lock.json`、`vite.config.ts`、`tsconfig.json`、`asset-cache-worker.js` 和 Git 配置 |

`asset-cache-worker.js` 位于根目录，使 Service Worker 作用域覆盖 `demos/`。

### 条目本体

案例目录保存作品运行文件、素材、`source/`、复刻作品的 `fidelity.md` 及许可索引 `LICENSES.md`。`source/` 收集制作脚本、输入数据、上游源码与使用说明。

| 路径（相对 `demos/cases/<id>/`） | 内容 |
| --- | --- |
| `index.html` | 作品入口，加载本案例的代码与样式 |
| `assets/` | 图像等画面素材 |
| `fonts/` | 字体 |
| `vendor/<库>/` | 第三方运行库 |
| `source/` | 制作脚本、输入数据、上游源码与使用说明 |
| `fidelity.md` | 复刻作品的对照结果 |
| `assets-manifest.json` | 逐文件素材来源与用途 |
| `LICENSES.md` | 许可索引 |

巧思采用来源引用结构，通过 `sources` 与 `sourceFiles` 取得来源案例的机制、素材和运行依赖。

| 路径／字段 | 内容 |
| --- | --- |
| `entries/patterns/<id>.json` | 巧思的机制、参数、来源定位与主要取材文件 |
| `sources[].caseId`、`sources[].locator` | 来源案例及精确观察位置 |
| `sourceFiles` | 来源案例包内的机制代码、研究与运行依赖 |
| `demos/cases/<来源 id>/` | 被引用的作品代码、素材、上游源码与许可 |
| `docs/patterns/<id>.md` | 有单条研究时保存机制说明 |

可运行素材按下表组织，目录按实际内容建立。使用说明统一放在 `docs/materials/<id>.md`。

| 路径（相对 `demos/materials/<id>/`） | 内容 |
| --- | --- |
| `index.html` | 样例入口，可通过 `?demo=` 等参数切换 |
| `demo/` | 样例代码与样式：`demo.js`、`demo.css`、各样例子目录及其素材 |
| `vendor/<库>@<版本>/` | 固定版本运行库 |
| `fonts/` | 字体 |
| `source/` | 重建入口、依赖锁、source map、上游源码与 provenance 等制作资料 |
| `fidelity.md` | 复刻型素材的对照结果（如有） |
| `LICENSES.md` | 许可索引 |

文字素材按固定提交保存上游原文，入口字段见“素材”。

### 文档分工与唯一位置

`docs/` 根目录保存使用指南、方法、Prompt 写法、取材说明 `agent.md`、总览、国别比较、基础理论和巧思体验类型等通用文档。单个案例的原作分析和机制观察放在 `docs/cases/<id>.md`，案例索引由构建生成 `docs/cases/README.md`。素材的中文使用说明放在 `docs/materials/<id>.md`，总览为 `docs/materials/README.md`。有单条巧思文档时使用 `docs/patterns/<id>.md`。

| 信息 | 唯一位置 |
| --- | --- |
| 来源、版本、许可、用途、适用／避用等结构化事实 | 条目 JSON；逐文件素材事实通过 `assetManifest` 引用素材清单 JSON |
| 研究分析、机制观察 | `docs/<类>/<id>.md` |
| 复刻删改、已接受差异、对照结果 | `demos/<类>/<id>/fidelity.md` |
| 第三方许可原文与索引 | `demos/<类>/<id>/` 内许可原文和 `LICENSES.md` |
| Prompt 文档、Agent 资料包、站点数据、案例索引 | 构建生成 |

条目详情与资料包提供 Demo 中的 `fidelity.md`、`LICENSES.md`。文档之间用链接引用已有信息。

`README.md` 负责介绍与入口；本文负责收录规则、组织规范、字段、新增流程与验收；`AGENTS.md` 负责修改仓库时的操作约束。


## 姊妹站

Web Atlas 与 Motion Atlas 是姊妹站，内容互不交叉。基础导航、页脚、侧栏、筛选、收藏、素材缓存和控件保持共同的视觉层级与操作习惯。内容区域按载体组织：Web 保留网页浏览、来源定位与对照，Motion 保留时间线、画幅和播放控制。调整公共界面时对照另一站的同一位置，保留这些功能差异。

品牌层保留各自的主题色（Motion 橙、Web 绿）、标志、圆角大小（Motion 偏大、Web 偏小）与底色色相；卡片按内容提供能量曲线、来源标签或比较入口。

配色：浅色模式下，底色带主题色，卡片与侧栏为白色；深色模式下，底色接近中性黑，卡片与侧栏带少量主题色。页面上的内容放在有圆角和内边距的卡片里，卡片内的子项用与卡片区分的次级面底色。

## 站点

| 路径 | 用途 |
| --- | --- |
| `site/index.html` | 站点 HTML 入口与首帧主题设置 |
| `site/src/` | Web Atlas 配置、三类详情、网页 Demo 舞台与来源定位 |
| `site/core/` | hash 路由、搜索、主题与收藏存储、滚动管理和 Markdown 渲染，实验室的方案、导出与机制示意逻辑（`site/core/lab/`），Agent 工作流检索（`site/core/workflow.ts`） |
| `site/lib/` | 剪贴板反馈和动效 Token |
| `site/ui/` | 外壳、总览、列表、详情布局、文档、收藏、比较及通用展示块、设计实验室（`site/ui/lab/`）与 Agent 工作流（`site/ui/workflow/`） |
| `site/registry/` | Arc UI 源码、foundation 样式与 `ARC-UI-LICENSE` |
| `site/vite/` | 内容挂载和 `virtual:atlas-data` 插件 |
| `site/public/` | 旧地址兼容入口页与站点图标 |
| `site/labels.json` | 内容代码、中文名称和文档分组映射 |
| `site/runtime/` | 素材加载、缓存、案例加载状态与 Demo 滚动条 |
| `site/icons/` | 供内容引用的 SVG 图标 |
| 根目录 `package.json`、`vite.config.ts`、`tsconfig.json`、`asset-cache-worker.js` | 命令与固定依赖、Vite 配置、严格 TypeScript 配置和根作用域的素材缓存 Service Worker |

### 数据与内容

`entries/` 与 `site/labels.json` 经 `npm run build` 生成 `data/*.json`。条目保留原字段，封面、研究、复刻说明、许可、Prompt、Agent 包和快照入口等派生路径放在 `$` 下。站点通过 `virtual:atlas-data` 读取这些 JSON；文档目录扫描 `docs/`、`prompts/` 和 `demos/` 中的 Markdown，记录标题、分组与路径。

内容目录挂在站点根目录，URL 与仓库路径一致。开发服务从仓库根目录读取内容；内容目录下找不到的文件返回 404。

### 路由

站点使用 hash 路由，可放在静态主机的任意子路径下。筛选、搜索、排序、显示方式、来源、样例和文档章节保存在 URL 中，支持刷新、前进／后退和分享。

| 路由示例 | 内容 |
| --- | --- |
| `#/`、`#/?q=关键词` | 总览与跨库搜索 |
| `#/cases?q=关键词&category=产品&country=美国&sort=title&dir=desc&fav=1&view=list` | 案例列表、筛选、排序、收藏筛选与布局 |
| `#/patterns?category=交互反馈&experience=micro-motion&source=animejs-site` | 巧思分类、体验类型与来源案例筛选 |
| `#/materials?type=font&category=<分类>` | 素材类型与分类筛选 |
| `#/cases/<id>?view=mobile&ref=1` | 案例详情、Demo 视口与原站截图对照 |
| `#/patterns/<id>?source=<案例>` | 巧思详情与来源选择 |
| `#/materials/<id>?demo=<样例>` | 素材详情与样例选择 |
| `#/docs?path=<文件>&h=<章节>` | 文档阅读与章节定位；`dq` 搜索文档标题与路径 |
| `#/favorites`、`#/compare?ids=a,b,c` | 收藏与案例比较 |
| `#/tools/lab`、`#/tools/workflow` | 设计实验室与 Agent 工作流 |

兼容入口页通过 `location.replace` 转入以下路由。

| 兼容地址 | 目标路由与参数 |
| --- | --- |
| `index.html#style/<id>`、`index.html#pattern/<id>`、`index.html#material/<id>` | 按条目 id 进入对应的案例、巧思或素材详情 |
| `cases.html#style/<id>`；无 hash | `#/cases/<id>`；`#/cases` |
| `cases.html#compare` | `#/compare` |
| `cases.html?category=<分类>&country=<地区>&q=<词>&sort=title&dir=desc` | 参数写入案例路由；`products/games/classics/showcases/culture` 分别映射为“产品／游戏/IP／经典风格／示范作品／艺术/文化”；`category=favorites` 映射为 `fav=1`，其 `type` 映射为分类 |
| `patterns.html#pattern/<id>?…`、`patterns.html#patterns?…`；无 hash | `#/patterns/<id>?…`、`#/patterns?…`；`#/patterns`；保留 `q/category/source/sort/dir`，`type` 映射为 `experience`，`favorites=1` 映射为 `fav=1` |
| `materials.html#material/<id>?…`、`materials.html#materials?…`；无 hash | `#/materials/<id>?…`、`#/materials?…`；`#/materials`；保留 `q/category/type/sort/dir`，`favorites=1` 映射为 `fav=1` |
| `docs.html?file=<文件>#<章节>`；无参数 | `#/docs?path=<文件>&h=<章节>`；`#/docs` |
| `lab.html?style=<id>&embed=home#<章节>` | `#/tools/lab?style=<id>&embed=home&h=<章节>` |
| `agent.html#<id>` | `#/tools/workflow?case=<id>`，预填案例搜索 |

### 设计语言与交互

站点采用 React、TypeScript strict、Vite、Arc UI 与 lucide-react，依赖版本固定。颜色、圆角、间距和阴影取 Arc foundation Token，Web Atlas 使用绿色强调色。站点按钮使用 Arc Button：主要操作为 `primary/sm`，次要操作与纯图标按钮为 `secondary/sm`，文字按钮为 `ghost/sm`；切换类按钮开启时使用 `primary`。链接按钮统一使用 `site/ui/LinkButton.tsx` 复用 Arc 按钮样式类。筛选使用 Arc Checkbox 与 FilterToolbar，静态标签使用 Badge，详情位置使用 Breadcrumb。实验室示例产品使用原生按钮与标签，外观由演示配置驱动。浅色、深色与跟随系统三种主题保存在本地；浅深切换使用 Arc theme-switch 的 split 变体，新外观从页面正中的细缝向两侧展开，减少动态时直接切换。界面使用 SVG 图标，正文、导航、标签和控件的渲染字号至少为 12px；Demo 画面内文字按作品设计确定。

主导航依次为总览、参考库（案例／巧思／素材／文档）、我的（收藏／比较）和工具。桌面侧栏可收起，收起后以图标和 Tooltip 提示名称及数量；手机通过顶部导航抽屉切换页面。主题、侧栏、收藏与比较篮保存在本地。

列表提供卡片与紧凑列表两种布局。筛选取值的计数按其余条件统计，取值顺序按标签字典、案例编号或中文名称固定。桌面筛选栏吸附在工具栏下方，手机使用底部抽屉。条目搜索覆盖文字字段，多个词需全部命中；文档搜索匹配标题与路径。下拉使用 Arc Select／Combobox，滚动区域使用 Arc ScrollArea。

详情采用 Demo 舞台与拆解双栏。宽屏左侧舞台吸顶，右侧章节条随阅读位置高亮；窄屏上下排列。仅有画廊的素材把画廊放在左栏并随页面滚动。可选字段没有内容时隐藏对应小节。头部提供上一条／下一条、收藏、案例比较和 Agent 资料包下载；比较最多选择三个案例。

网页 Demo 提供适应、桌面 1440px、手机 390px、重播、新标签页与原站截图对照。巧思在完整来源 Demo 中执行准备动作、滚动并框选观察位置四秒，可切换来源和重新定位。素材通过 `demos[].entrypoint` 切换样例。画廊网格点击图片后打开 Arc Dialog，内置 Carousel 从所点图片开始，支持左右按钮和方向键；原图、出处与复刻页链接随当前图片切换。原作视频与 WebGL 复刻对照也在 Arc Dialog 内打开。

收藏、导入导出、比较超出上限与复制失败通过根部 Arc ToastStack 显示反馈，由 `site/ui/notifications.tsx` 的 `notify` 统一调用；复制成功由按钮自身显示“已复制”。

页面由文档本身滚动，侧栏、工具栏、舞台与章节条使用吸附定位。每条历史记录保存滚动位置，返回列表时恢复；巧思定位只滚动 iframe 内部。来源列表采用证据标签、标题、日期、行内操作与第二行说明的统一布局。

文档目录使用 Arc tree-view，按标签规则分组，Demo 目录内文档默认折叠；标题取正文一级标题、frontmatter 的 `title/name` 或文件名。当前文档决定选中项，切换文档时自动展开所在分组并在目录滚动区域内定位；分组标题在目录顶部吸附，支持方向键、Home、End、Enter 和空格操作。宽屏提供目录、正文和章节三栏，较窄屏幕在正文上方用 Arc Accordion 展示章节目录。手机文档页随页面滚动，分组标题吸附在顶栏下方；阅读后返回目录时保留当前文档高亮并定位。Markdown 相对链接与图片以当前文档路径解析。收藏页统一导入、导出三类收藏，导入时合并本库有效 id。

## 观察与实现

1. 记录原站 URL、语言／年度版本、采集日期与本次采集范围。首次进入后，浏览至页尾，再反向返回，列出全部模块、导航入口及到达的页面／状态；检查加载／欢迎、指针进入／移动／离开、焦点、触摸和快速反向操作。每个案例是这次采集的单一快照；用户要求重新核验时重新记录。
2. 区分配色角色、字体尺度、网格留白、图像、形状、信息层级、动效和协调关系。用浏览器 DevTools 核对相关 DOM、computed style 及加载的 CSS／JS／字体／媒体；记录关键元素定位、尺寸、字体、颜色、裁切、层叠、过渡／动画与断点。分别写清观察值、源码值和本地拟合结果。
3. 保留有辨识度的机制：原站自然滚动就自然滚动，原站分屏切换则保留遮罩方向、出入顺序、数字／标题交接及指针反馈。新增的教学操作单列。
4. 使用实际官方素材与正确比例。素材本地化并记录 URL、归属、用途、尺寸和处理方式（转码、剪短）；不搬入追踪、统计、账户或支付逻辑。
5. 声音：独立 BGM、开场音、操作音、影片声音、外部播放列表分别描述，保留原站的启用／静音／暂停流程与原音轨。游戏页面逐一核对悬停、选择、切换、开合等操作音的时机、与视觉反馈的先后、音量与关闭/后台策略；桌面/手机入口、开关状态共享和键盘触发一并核对。原站没有的策略标为本地补充；无音乐的原站不加配乐。
6. 主题：固定、系统、手动、系统＋手动分别描述。切换时协调背景、表面、文字、强调、边界；图像保留原色。没有切换的强 IP／摄影风格保留固定主题，并说明其设计作用。
7. 研究中记录触发、原站响应与设计作用；按文档分工记录本次对照结果。交易、预约和账号通过原站入口使用。
8. **提取巧思**：按“一个触发与结果／一条构成规则”把可独立学习或组合的机制保存为 `entries/patterns/<id>.json`，在完整案例中保留这些机制的协作方式。先搜索已有巧思，同一机制合并为多来源。

## 原站与本地的动态对照

在每个原站案例的研究中记录源端模块／状态，按文档分工保存对照矩阵，覆盖全部模块以及每种不同状态与分支：

| 模块／状态 | 原站定位 | 起始条件与触发 | 原站可见响应与先后 | 本地对应 | 证据与判定 |
| --- | --- | --- | --- | --- | --- |
| 使用实际模块与状态名 | 页面URL、锚点／DOM选择器；影像则用时间位置 | 缓存、滚动位置、已选项、输入及操作 | 内容、位置、样式与过渡怎样变化 | 页面／选择器及实际响应 | 浏览器观察／源码依据；已对照通过／近似／未实现／未验证／本地新增 |

对照方法：

1. **同条件**：原站与本地使用相同的 CSS 视口宽高、DPR、缩放、语言及主题，记录滚动位置与选择状态。常用桌面 1440px、手机 390px。先查独立 Demo，再查站内嵌入。
2. **首入到完整页面**：冷缓存首入、资源就绪、欢迎／加载层退出、慢网络与失败恢复、热缓存二次进入；记录遮罩、正文、字体、首帧及声音控制的交接。
3. **动作与回程**：每个定义性机制对照进入、变化中、完成、反向返回；按实际功能执行滚动／章节切换、点击、hover／离开、focus／键盘、触摸、媒体启停及主题切换。声音用实际播放事件或录音核验触发与停止。转换中快速反向或重复触发一次，检查取消／接续、焦点与当前项同步。
4. **几何与时序**：用同尺寸截图或短序列对照关键状态，结合 DOM、computed style 及对应 CSS／JS 解释差异：模块位置、宽高／留白、字体与换行、素材比例／裁切、形状／层叠、出入方向和交接顺序。时长、缓动、延迟注明来源。
5. **作结**：按文档分工记录本次对照结果。

主负责人独立重走定义性机制，并核对全部模块的到达性与主要布局。

Prompt 写明结构、尺度、素材、关键状态及交接、音乐和主题行为，以及响应式处理。声音由用户启用，停止／静音控制可用。

## 条目字段

### 案例

`id` 对齐文件名；`order` 决定默认顺序。`title`、`subtitle`、`category`、`tags`、`summary` 描述案例；`useCases`、`avoid`、`principles`、`constraints` 与 `exercise` 提供取材和练习依据。`constraints` 使用字符串数组；`prompt`、`negativePrompt` 为文本，分别生成正向 Prompt 和负向约束。

`composition` 包含 `color`、`typography`、`layout`、`imagery`、`shape`、`hierarchy`、`motion`、`coherence`，可选的 `scroll` 记录滚动结构。`tokens` 保存颜色等设计参数，`interaction` 保存页面交互机制。`sources` 包含真实实例和理论／规范及各自支持的结论。

`themeBehavior` 包含 `mode`（`fixed`、`system`、`manual`、`system-and-manual`）、`default`（`light`、`dark`、`system`）、`control`、`designReason`；`soundBehavior` 包含 `kind`（`none`、`background`、`video`、`external`、`interactive`）、`control`，可选的 `interactionRole` 说明声音与交互的实际关系。参考库与独立 Demo 分别管理主题。

路径字段为 `research: docs/cases/<id>.md`、`demo`、`preview`，复刻作品另有 `fidelity` 和 `assetManifest`，可有 `referencePreview`。案例右侧“相关文档”集中提供已有的调研、复现对照、素材来源清单与许可索引。预览来自实际浏览器，桌面横向、手机纵向，扩展名与真实编码一致。

预览截图使用独立临时浏览器配置目录，禁用扩展并通过 `--hide-scrollbars` 隐藏滚动条；导航前用 `Emulation.setEmulatedMedia` 传递 `prefers-color-scheme: light`，保留 Demo 自身的固定主题与主题行为。等待页面资源、字体、可见图片解码和视频首帧就绪，有 `CaseLoading.ready` 时等待其完成，再等加载层退出、入场动画完成后截图；循环动画选择能完整展示内容的时刻。截图前查看实际画面，不以固定延时作为加载完成的依据。

原站案例记录 `implementation: reference-study`、`country`、`referenceUrl`、`capturedAt`（`YYYY-MM-DD`），可加语言／年度标签。国别指具体机构或创作来源。官方影像等资料的网页转译使用 `studyScope: visual-adaptation`，标题、摘要和研究区分影像观察与本地交互；详情显示“官方影像网页转译”。经典构成练习用 `theoryVerifiedAt` 记录理论核验日期；缺失时显示“理论来源核验日期未记录”。

`country` 填写实际参考机构或创作者的公开所在地，出处与依据记入 `sources`。经典构成练习按主要范本的机构或作者来源标注，示范作品按实际作者来源标注；网页语言、市场版本、风格名称和虚构设定另记。证据不足统一填写“未确认”，案例列表、Agent 列表与索引使用同一值。

### 巧思

`title`、`summary`、`mechanism`、`effect` 分别说明名称、价值、机制和结果；`trigger` 在存在真实交互、时序或视口条件时填写，静态构成无需填写。`useCases`、`avoid`、`constraints`、`prompt` 支持任务适配。`parameters` 是 `{name,value,note}` 数组，数值用字符串并注明实测、公开代码或本地拟合依据。

`category` 使用视觉构成、交互反馈、滚动叙事、导航与状态、加载与媒体、内容组织。`experienceTypes` 至少一项且不重复：

| 值 | 体验类型 | 依据 |
| --- | --- | --- |
| `visual` | 视觉构成 | 静态即可辨认的颜色、字体、形状、图像和空间关系 |
| `micro-motion` | 微动效 | 局部反馈或辅助信息的运动 |
| `page-motion` | 主体与页面动效 | 整页、章节、展示舞台和主要媒体的交接 |
| `sound` | 声音与音效 | 音乐、操作音、语音、主动媒体及启停衔接 |
| `structure` | 信息与状态 | 内容组织、导航、筛选和状态协调 |

`composition.role` 的 `foundation`、`support`、`accent` 表示骨架、衔接和反馈职责；可选的 `notes` 只记录具体协作条件，`pairsWellWith`、`conflicts` 引用真实巧思 id。机制自身需要的操作与静态呈现方式写入 `mechanism`。详情按机制、参数、约束与适用场景、组合、Prompt、来源的顺序展示，空章节及子项不显示。

`sources[]` 包含 `caseId`、精确 `locator`、`observation`、`evidence`，可加 `referenceUrl` 和 `capturedAt`。`observed` 表示源端观察，`adapted` 表示本地迁移，`inferred` 表示公开资料推断。`locator` 可用 `entries/cases/<id>.json#interaction/0` 等 JSON 字段定位；`observation` 保存定位值完整原文，对象／数组用 JSON 序列化文本。来源改动后，若原文不符，构建会报错。归档日期沿用来源案例。

`preview` 必填，指向 `previews/patterns/<id>.jpg`，取自第一来源中对应机制的真实区域与交互状态。同一案例中的不同巧思各有自己的封面，封面纳入巧思资料包的文件清单。

每个来源的 `focus` 必填 `target`、`label`、`instruction`：分别为真实运行页面的 CSS 选择器、短暂框选标识和指向可见对象的操作指引。可选 `entrypoint` 使用该案例已有子页的仓库相对路径，可带查询或锚点；默认使用案例入口。同一案例的多份证据共享同一观察场景。桌面专属与手机专属机制可用 `viewport: wide|mobile` 设置推荐画幅。

需要进入章节或展开内容时，`prepare` 按顺序操作原控件：`click`、`input` 与 `value`、`key`、`scroll`、`waitFor`；`images` 等待指定区域的真实图像载入并解码，`video` 等待原视频产生可显示帧。动作可用 `minWidth`／`maxWidth` 对应原作断点。普通定位保留当前选择，目标关闭或离开对应章节时通过原控件恢复。声音由用户启用。`replay` 可指定重新启动的原 CSS 动画元素，保留其逐项延迟；加载机制用 `phase: loading` 在原加载层出现时观察。

`useCases`、`constraints`、`sourceFiles` 为非空字符串数组；`avoid`、`parameters`、`pairsWellWith`、`conflicts` 保留数组类型。

`sourceFiles` 覆盖定位文件、研究、复现范围与相关源码，每个文件属于至少一个来源案例的文件清单。完整运行依赖由来源案例包提供；案例包中的 `patternIds` 提供反向关联。

### 素材

`id`、`title`、`type`、`category`、`summary`、`tags` 描述素材；`upstream` 保存 `url`、`verifiedAt` 以及存在时的 `repository`、`version`、完整 `commit`；`version` 使用上游实际版本号，提交号只记在 `commit`。`license` 保存 `name`、`url`、`scope`、`notes`；`sources` 保存出处与依据。`useCases`、`avoid`、`constraints`、`prompt` 说明使用边界。`research` 指向同 id 的中文说明，`preview` 指向素材预览，`sourceFiles` 列主要取材文件。

`license.name`、`license.scope` 必填，说明许可状态与适用对象；`url` 仅在有真实许可或许可声明作为依据时填写，`notes` 记录独立补充信息，无内容时省略。作者网站和发布页面作为原始出处记录在 `upstream.url` 或 `sources`。`sources[].note` 说明该资料支持的事实。版权、许可和实际能力说明保留事实，页面不重复写来源身份或阶段性核验结论。

| `type` | 显示名 |
| --- | --- |
| `component-library` | 组件库 |
| `image` | 图像 |
| `sound` | 声音 |
| `font` | 字体 |
| `poster` | 海报 |
| `agent-skill` | Agent Skill |
| `prompt-kit` | 提示词套件 |

`title`、`type`、`category`、`summary`、`prompt`、`research` 必填；`useCases`、`constraints`、`sourceFiles` 非空；`sourceFiles` 与 `demos[].entrypoint` 属于本素材文件清单，样例 id 不重复。

可运行素材使用 `demo`、`demoNote` 和非空 `demos`；每个样例包含 `id`、`title`、`summary`、`entrypoint`，可有 `component` 与 `{name,value,note}` 参数数组。字体、声音提供试排或播放样例；图像可使用站内画廊。

资料目录使用 `snapshotPath: demos/materials/<id>/` 与 `snapshotEntry`；`snapshotEntry` 指向主文档，Agent Skill 为 `SKILL.md`。Agent Skill 的 `workflow` 是非空中文步骤数组，`relatedEntries` 是 `{kind: case|material|pattern,id,note}` 数组且关联 id 存在；可运行素材也可记录关联条目，有值时在详情显示。可选 `gallery` 是 `{path,caption,kind,sourceUrl,license,replicaPage,width,height}` 数组，`kind` 为 `work`、`style` 或 `theme`；采用自然比例的画廊必须提供正整数 `width`、`height`，保存图片实际像素尺寸；显式设置 `galleryRatio` 时由展示框预留空间。图片比例不一致时用 `galleryRatio`（如 `16/9`）统一展示框，图片按比例裁切；有本库复刻页时用 `replicaPage` 指向该页，显示入口链接。`galleryFit` 取 `cover` 或 `contain`，需要完整显示作品时用 `contain`。`gallery[].compare` 保存 `{piece,original,sound}`，提供复刻与原作对比入口，`sound` 仅在原作有音轨时设为 `true`。文字详情提供工作流、关联条目、原文主文档与 README；资料目录按目录递归纳入资料包，文件按第三方资源规则保存；图像类型不显示原文快照入口。


## 新增流程

### 构建与检查

在仓库根目录执行：

```sh
npm install
npm run build
npm run check
```

`npm run build` 生成 `data/` 下的案例、巧思、素材、文档目录和标签 JSON，三类 `prompts/`、`agent/` 资料包及分类索引、`agent/catalog.json`、`docs/cases/README.md` 和根目录 README 计数块；首次构建还会创建本地空素材映射 `data/asset-sources.js`。取材接口见 [Agent 工作流](docs/agent.md)。

`npm run check` 检查 LF 换行、已跟踪的忽略类型文件、案例与巧思引用、三库 `order` 的整数与唯一性、案例的 Demo／研究／预览路径、案例子页／素材 Demo／站点公共文件／模板中的本地资源引用及单文件大小。检查本地资源时按素材快照和 `source/` 的既有规则确定范围。单个文件超过 50 MiB 时报错；原文件确实超过且不能改动的，经仓库所有者同意后把路径和原因写进 `scripts/check.mjs` 的 `oversizeAllowed`，此后只列提示。

查看结果时运行 `npm run dev`，打开终端显示的本地地址，在 `#/cases/<id>`、`#/patterns/<id>`、`#/materials/<id>` 查看新条目。

### 案例

锁定来源页面和范围，完成原站观察与状态记录。从 `scripts/templates/case/` 创建 `demos/cases/<id>/`，写入 `entries/cases/<id>.json`、`docs/cases/<id>.md` 与 `previews/cases/<id>.<ext>`、`<id>-mobile.jpg`；复刻作品附 `fidelity.md`、素材清单和许可索引。按机制提取巧思，并更新相关跨案例分析。运行构建与检查（见“[构建与检查](#构建与检查)”）。

### 巧思

先搜索已有机制；同一机制合并多来源。写入 `entries/patterns/<id>.json`，保存真实观察、源码定位、独立封面和每个来源的 `focus`；研究按文档分工放置。逐来源核对首入、切换、定位和返回操作，方法见[详情中的来源定位](docs/pattern-experiences.md#详情中的来源定位)。复核检索、Prompt、组合链接与案例回跳，再运行构建与检查。

### 素材

锁定上游版本和许可。可运行素材从 `scripts/templates/material-demo/` 创建 `demos/materials/<id>/`；文字素材在该目录保存上游快照。写入 `entries/materials/<id>.json`、`docs/materials/<id>.md` 和 `previews/materials/`；按第三方资源规则保存文件，文字素材遵循固定提交快照规则。在相同桌面和手机宽度对照素材库与详情。实际操作样例参数、输入和后备；文字素材打开 `snapshotEntry` 与关联条目。运行构建与检查（见“[构建与检查](#构建与检查)”）。

## 验收与交付

新增或修改内容完成后，按[审查清单](docs/review.md)执行增量审查；全库复查使用同一清单的全库范围。

按“原站与本地的动态对照”验收，结果写入 `fidelity.md`。

用包含全部交付文件的干净副本复验；运行所需文件均纳入 Git。

构建会报告受 LF 规则约束、但使用 CRLF 或混合换行的路径，按项目规则修正后重新构建。

提交仅包含长期源码、内容、文档与交付预览；临时脚本、原始日志、截图、QA 报告留在工作区。提交与 PR 记录变更背景和验证结果。

## 构建与发布

完整原始素材随源码收录，来源与权利由案例素材清单记录。

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 本地开发，资源从本地内容目录加载；打开终端显示的地址，`Ctrl+C` 结束服务 |
| `npm run build:local` | 生成数据、检查 TypeScript、构建站点，并把全部本地内容复制到 `dist/` |
| `npm run build:site -- --commit <已推送提交的完整 SHA>` | 生成数据、检查 TypeScript、构建站点，并按指定提交生成 GitHub 素材映射与部署目录 |

`dist/` 包含 Vite 生成的站点入口、打包后的 JS／CSS、`site/public/` 的兼容入口与图标，以及仓库的 `demos/`、`previews/`、`docs/`、`prompts/`、`entries/`、`data/`、`agent/`、`site/runtime/`、`site/icons/`、`asset-cache-worker.js` 和三份根文档 `README.md`、`CONTRIBUTING.md`、`AGENTS.md`。

GitHub 模式按工作区文件清单与大小生成 `dist/data/asset-sources.js`。映射范围为上述复制内容中至少 131072 字节（128 KiB）的媒体文件，扩展名为：图像 `.png/.jpg/.jpeg/.webp/.avif/.gif/.svg`；音视频 `.mp4/.webm/.mp3/.wav/.ogg/.m4a/.aac/.flac`；字体 `.woff/.woff2/.otf/.ttf`；三维及制作文件 `.glb/.gltf/.bin/.blend/.hdr/.ply`。这些文件由固定 GitHub 提交加载；其余文件随站点部署。映射的键使用仓库内原路径，URL 形如 `https://raw.githubusercontent.com/MIBXR/web-atlas-next/<commit>/<path>`，路径各段按 URL 编码。

发布副本的 HTML／CSS 引用指向映射地址，并接入 `site/runtime/asset-runtime.js`；素材加载与回退、浏览器缓存由共享运行时处理。部署目录最多 200 MB，构建会报告实际体积。部署索引的 `source.commit` 与 `source.baseUrl` 使用传入的完整提交；发布使用已通过 PR 合并并推送的源提交。

仓库内的 `data/asset-sources.js` 用于本地素材回退，可执行 `node scripts/build-asset-sources.mjs --commit <sha>` 生成，`<sha>` 为 40 位十六进制完整提交。发布构建独立生成部署目录中的映射。

两种构建都会把产物中指向本地文件的 `%40` 引用写成 `@`，使按字面查找和解码路径的静态服务器都能找到文件。

托管方提供发布 checkout 后，执行：

```sh
npm run build:site -- --commit <已推送提交的完整 SHA>
node scripts/export-site.mjs --checkout <绝对路径>
```

源码仓库与发布 checkout 的 `.openai/hosting.json` 需指向同一 Site，发布 checkout 的静态目录设为 `dist`。导出脚本核对部署索引与部署素材映射记录的提交号后同步 `dist/`，平台 helper 负责提交和发布。发布 checkout 的 `dist/**` 按 `-text` 保存。发布成功后在正式地址复核本次修改的核心操作。
