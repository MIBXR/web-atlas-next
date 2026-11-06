export const reading = {
  "framework": {
    "title": "先看材料，再看组织，最后看使用。",
    "intro": [],
    "articles": [
      {"title": "视觉材料", "paragraphs": ["颜色、字体、形状与线条、图像与图标、空间、质感。"], "kind": "01", "question": "有哪些东西？", "link": null},
      {"title": "组织原则", "paragraphs": ["布局与对齐、层级与对比、比例与平衡、重复与节奏。"], "kind": "02", "question": "它们是什么关系？", "link": null},
      {"title": "网页体验", "paragraphs": ["目标与内容顺序、操作与反馈、响应式与无障碍。"], "kind": "03", "question": "用户看得懂、用得了吗？", "link": null},
    ],
    "after": ["这是本库结合设计系统、UX研究与网页规范整理的教学框架，不是唯一的国际分类标准。"],
  },
  "pattern-lab": {
    "title": "从一条规则，到一次完整反馈。",
    "intro": ["视觉看构成规则，动效看触发、过程、完成与回程，声音看启用和停止。以下是独立的本地机制示意；上方协调实验的配置导出只包含“拾光笔记”的实际选择。"],
    "articles": [
      {"title": "强调，不必依赖运动。", "paragraphs": ["文字下划线、颜色角色、圆角容器和几何装饰，可以建立一眼可见的层级。改变参数，判断重点是否清楚、装饰是否服务内容。", "观察：强调词是否仍可读？容器与装饰有没有争夺主次？"], "kind": "VISUAL / 视觉构成", "question": "", "link": {"url": "patterns.html#patterns?type=visual", "title": "查看有来源的视觉巧思"}},
      {"title": "局部反馈，跟着意图走。", "paragraphs": ["悬停、键盘聚焦和按下反馈帮助定位与确认。移入、操作、移出，再试快速重复；手机可以直接点击，不依赖悬停。", "观察：进入和复位是否连贯？静态结果能否独立表达完成？"], "kind": "MICRO MOTION / 微动效", "question": "", "link": {"url": "patterns.html#patterns?type=micro-motion", "title": "查看有来源的微动效"}},
      {"title": "内容主体，按顺序交接。", "paragraphs": ["加载、滚动叙事和章节转场会改变主要内容的呈现。用前进与返回观察遮罩、旧内容退出和新内容进入，区分起始、过程与完成。", "观察：切换中再次操作，会不会让当前内容与状态脱节？减少动态时仍应直接到达目标。"], "kind": "PAGE MOTION / 页面动效", "question": "", "link": {"url": "patterns.html#patterns?type=page-motion", "title": "查看有来源的页面动效"}},
      {"title": "把声音，当作辅助信息。", "paragraphs": ["环境音乐承担氛围，操作短音承担确认，两者分别管理。这里仅演示合成操作音，由你启用；尝试重复触发、静音与后台返回。", "观察：声音与动作是否对应？静音后，文字和视觉反馈是否仍完整？原站音轨与播放流程请回到来源案例。"], "kind": "SOUND / 声音", "question": "", "link": {"url": "patterns.html#patterns?type=sound", "title": "查看有来源的声音巧思"}},
      {"title": "还有一些巧思，藏在信息组织里。", "paragraphs": ["分组、渐进展开、导航位置与状态同步，也能独立借用。按机制本身归类，一个巧思可以同时涉及视觉和动效；不要求每个案例都凑齐类型。"], "kind": "STRUCTURE & STATE / 结构与状态", "question": "", "link": {"url": "patterns.html#patterns?type=structure", "title": "探索结构与状态巧思"}},
    ],
    "after": ["这些示意是本地原创教学机制，参数不代表原站实测值，也不替代来源 Demo。巧思详情保留真实来源、适用任务、键盘策略与减少动态边界。"],
  },
  "elements": {
    "title": "网页里，具体有哪些设计元素？",
    "intro": [],
    "articles": [
      {"title": "色彩", "paragraphs": ["背景、文字、强调、状态，各有角色。先决定谁是主色，哪些颜色负责行动与反馈。"], "kind": "", "question": "观察：同一种行动是否总用同一颜色？文字能否轻松读出？", "link": null},
      {"title": "字体与排版", "paragraphs": ["不只是选字体，还包括字号、字重、行高、字距与行长。它们共同影响气质和阅读速度。"], "kind": "字", "question": "观察：标题比正文重要在哪里？长段落是否太宽或太挤？", "link": null},
      {"title": "形状与线条", "paragraphs": ["圆角、直角、边框粗细、线条端点都是语言。按钮、图标和插画可以共享相似规则。"], "kind": "", "question": "观察：一处很圆、一处很尖，是有意强调，还是没有规则？", "link": null},
      {"title": "图像与图标", "paragraphs": ["照片、插画、产品截图和图标负责展示内容。画面题材、视角与细节量应服务同一个主题。"], "kind": "", "question": "观察：图像在证明卖点，还是占位置？图标是否容易理解？", "link": null},
      {"title": "空间与留白", "paragraphs": ["距离能告诉我们什么是一组。组内近、组间远；重要内容周围留一点空间，视线更容易停留。"], "kind": "", "question": "观察：哪些内容应靠近？页面有没有让眼睛休息的地方？", "link": null},
      {"title": "质感", "paragraphs": ["光影、渐变、颗粒和材质，让元素有表面感。也可以保持完全平面；关键是用途和分寸。"], "kind": "", "question": "观察：质感在帮助理解层次，还是干扰文字与产品本身？", "link": null},
    ],
    "after": [],
  },
  "principles": {
    "title": "统一规则，也保留重点的差异。",
    "intro": [],
    "articles": [
      {"title": "布局与对齐", "paragraphs": ["用稳定的边线、网格与分组组织信息。元素即使大小不同，也能共享对齐关系。"], "kind": "01", "question": "", "link": null},
      {"title": "层级与对比", "paragraphs": ["决定先看什么、再看什么。通过大小、位置、明暗和留白突出重点；次要文字仍要可读。"], "kind": "02", "question": "", "link": null},
      {"title": "比例与平衡", "paragraphs": ["考虑文字、图形和空白的相对重量。平衡可以对称，也可以不对称，不是把每个块做成同样大。"], "kind": "03", "question": "", "link": null},
      {"title": "重复、节奏与一致性", "paragraphs": ["重复字号、颜色角色、线条与间距规则，形成熟悉感。需要强调的地方，再有意识地改变节奏。"], "kind": "04", "question": "", "link": null},
    ],
    "after": ["这些原则互相作用。例如，留白既是一种视觉材料，也能帮助分组、建立层级和形成节奏。分类是为了学习，不是把关系割开。"],
  },
  "workflow": {
    "title": "开始制作前，先回答三个问题。",
    "intro": [],
    "articles": [
      {"title": "谁来用，要做什么？", "paragraphs": ["把核心目标写成一句话。比如“让第一次来的人理解产品，并试用一项功能”。内容顺序应围绕这个目标。"], "kind": "1", "question": "", "link": null},
      {"title": "操作后，会发生什么？", "paragraphs": ["按钮要有实际结果，加载、成功、失败都需要反馈。同一种状态的文字、图标和颜色应保持一致。"], "kind": "2", "question": "", "link": null},
      {"title": "换一种方式，还能用吗？", "paragraphs": ["在手机、键盘、放大文字时检查页面。保留焦点与可读对比，尊重减少动态偏好；漂亮不应成为使用障碍。"], "kind": "3", "question": "", "link": null},
    ],
    "after": [],
  },
  "sources": {
    "title": "这套学习方法从哪里来？",
    "intro": ["核验于2026-10-07。下面是实际阅读的第一方资料；我们将它们综合为初学者框架。IBM的核心蓝色和专属配色限制属于它的品牌系统，不是通用定律。"],
    "articles": [
    ],
    "after": [],
    "sources": [
      {"url": "https://www.ibm.com/design/language/layout/overview/", "title": "IBM Design Language · Layout", "note": "布局把元素组合起来：层级、比例、对比、和谐、节奏、重复。"},
      {"url": "https://www.ibm.com/design/language/color/", "title": "IBM Design Language · Color", "note": "颜色角色、一致性和可读性；区分品牌专属规则。"},
      {"url": "https://www.carbondesignsystem.com/building-blocks/foundations/spacing/overview", "title": "Carbon · Spacing", "note": "间距如何形成分组、层级和阅读空间。"},
      {"url": "https://www.nngroup.com/articles/principles-visual-design/", "title": "NN/g · 视觉设计原则", "note": "尺度、层级、平衡、对比和Gestalt关系。"},
      {"url": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", "title": "W3C · 文本对比", "note": "普通文本通常4.5:1、大号文本3:1；需结合字重、用途和例外。"},
      {"url": "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html", "title": "W3C · 交互动效", "note": "非必要交互动效可停用；该成功准则为Level AAA。"},
    ],
  },
};
