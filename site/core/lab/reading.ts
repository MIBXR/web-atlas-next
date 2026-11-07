export const reading = {
  "framework": {
    "title": "设计元素的三个层次",
    "intro": [],
    "articles": [
      {"title": "视觉材料", "paragraphs": ["颜色、字体、形状与线条、图像与图标、空间、质感。"], "kind": "01", "question": "识别页面中的视觉元素。", "link": null},
      {"title": "组织原则", "paragraphs": ["布局与对齐、层级与对比、比例与平衡、重复与节奏。"], "kind": "02", "question": "分析元素之间的组织关系。", "link": null},
      {"title": "网页体验", "paragraphs": ["目标与内容顺序、操作与反馈、响应式与无障碍。"], "kind": "03", "question": "检查内容理解与操作体验。", "link": null},
    ],
    "after": ["这个教学框架结合设计系统、UX 研究与网页规范，按视觉材料、组织原则和网页体验整理设计知识。"],
  },
  "pattern-lab": {
    "title": "巧思机制示意",
    "intro": ["切换下方分类，调整视觉规则，体验微动效、页面转场与操作声音。配置导出包含上方“拾光笔记”协调实验的实际选择。"],
    "articles": [
      {"title": "文字强调与容器", "paragraphs": ["调整文字下划线、颜色角色、容器圆角与几何装饰，比较不同参数下的内容层级。", "比较强调词的可读性，以及容器、装饰与正文的主次关系。"], "kind": "视觉构成", "question": "", "link": {"url": "patterns.html#patterns?type=visual", "title": "查看有来源的视觉巧思"}},
      {"title": "局部操作反馈", "paragraphs": ["通过悬停、键盘聚焦、按下与移出体验定位和确认反馈，也可快速重复操作。手机端可直接点击。", "检查进入与复位的连贯性，以及静态结果对完成状态的表达。"], "kind": "微动效", "question": "", "link": {"url": "patterns.html#patterns?type=micro-motion", "title": "查看有来源的微动效"}},
      {"title": "内容与章节转场", "paragraphs": ["加载、滚动叙事和章节转场会改变主要内容的呈现。用前进与返回观察遮罩、旧内容退出和新内容进入，区分起始、过程与完成。", "切换中再次操作，检查内容与状态是否同步；启用减少动态后，检查能否直接到达目标。"], "kind": "页面动效", "question": "", "link": {"url": "patterns.html#patterns?type=page-motion", "title": "查看有来源的页面动效"}},
      {"title": "操作声音反馈", "paragraphs": ["环境音乐与操作短音分别承担氛围和确认反馈。这里可启用合成操作音，体验重复触发、静音与后台返回。", "检查声音与动作的对应关系，以及静音后的文字和视觉反馈；原站音轨与播放流程见来源案例。"], "kind": "声音", "question": "", "link": {"url": "patterns.html#patterns?type=sound", "title": "查看有来源的声音巧思"}},
      {"title": "信息组织与状态", "paragraphs": ["按分组、渐进展开、导航位置和状态同步查找信息组织机制。一个巧思可以同时涉及视觉和动效。"], "kind": "结构与状态", "question": "", "link": {"url": "patterns.html#patterns?type=structure", "title": "探索结构与状态巧思"}},
    ],
    "after": ["本地原创机制示意提供可调参数；对应巧思详情包含来源 Demo、适用任务、键盘策略与减少动态设置。"],
  },
  "elements": {
    "title": "网页设计元素",
    "intro": [],
    "articles": [
      {"title": "色彩", "paragraphs": ["为背景、文字、强调与状态分配颜色角色，确定主色和行动反馈色。"], "kind": "", "question": "检查同类行动的颜色是否一致，以及文字与背景的对比。", "link": null},
      {"title": "字体与排版", "paragraphs": ["字体、字号、字重、行高、字距与行长共同影响页面风格和阅读速度。"], "kind": "字", "question": "比较标题与正文的层级，检查长段落的行长和行距。", "link": null},
      {"title": "形状与线条", "paragraphs": ["按钮、图标和插画可共用圆角、边框粗细与线条端点规则。"], "kind": "", "question": "比较不同元素的形状规则，区分统一处理与局部强调。", "link": null},
      {"title": "图像与图标", "paragraphs": ["照片、插画、产品截图和图标负责展示内容。画面题材、视角与细节量应服务同一个主题。"], "kind": "", "question": "检查图像与产品内容的关联，以及图标含义的清晰程度。", "link": null},
      {"title": "空间与留白", "paragraphs": ["用较小的组内间距和较大的组间距区分信息分组，为重点内容保留周围空间。"], "kind": "", "question": "检查相关内容的距离，以及重点内容周围的留白。", "link": null},
      {"title": "质感", "paragraphs": ["光影、渐变、颗粒和材质用于区分表面层次，也可选择平面呈现。"], "kind": "", "question": "比较质感开关前后的层次与可读性。", "link": null},
    ],
    "after": [],
  },
  "principles": {
    "title": "元素组织原则",
    "intro": [],
    "articles": [
      {"title": "布局与对齐", "paragraphs": ["用稳定的边线、网格与分组组织信息。元素即使大小不同，也能共享对齐关系。"], "kind": "01", "question": "", "link": null},
      {"title": "层级与对比", "paragraphs": ["通过大小、位置、明暗和留白安排阅读顺序，突出重点并保留次要文字的可读性。"], "kind": "02", "question": "", "link": null},
      {"title": "比例与平衡", "paragraphs": ["考虑文字、图形和空白的相对重量。平衡可以对称，也可以不对称，不是把每个块做成同样大。"], "kind": "03", "question": "", "link": null},
      {"title": "重复、节奏与一致性", "paragraphs": ["重复字号、颜色角色、线条与间距规则，形成熟悉感。需要强调的地方，再有意识地改变节奏。"], "kind": "04", "question": "", "link": null},
    ],
    "after": ["留白既是视觉材料，也能帮助分组、建立层级和形成节奏。"],
  },
  "workflow": {
    "title": "制作前的设计要求",
    "intro": [],
    "articles": [
      {"title": "目标用户与任务", "paragraphs": ["用一句话描述目标用户和核心任务，例如“让第一次来的人理解产品，并试用一项功能”，再据此安排内容顺序。"], "kind": "1", "question": "", "link": null},
      {"title": "操作结果与状态反馈", "paragraphs": ["按钮要有实际结果，加载、成功、失败都需要反馈。同一种状态的文字、图标和颜色应保持一致。"], "kind": "2", "question": "", "link": null},
      {"title": "响应式与无障碍", "paragraphs": ["在手机、键盘操作和放大文字时检查页面，核对焦点、文字对比与减少动态设置。"], "kind": "3", "question": "", "link": null},
    ],
    "after": [],
  },
  "sources": {
    "title": "参考资料",
    "intro": ["本节列出用于整理初学者框架的第一方资料，核验日期为2026-10-07。IBM 的核心蓝色和专属配色限制适用于其品牌系统。"],
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
