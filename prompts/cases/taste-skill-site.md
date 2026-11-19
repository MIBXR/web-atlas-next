# Taste Skill · AI 编码 Agent 的网页设计 skill 官网 · 复用 Prompt

由 [结构化案例](../../entries/cases/taste-skill-site.json) 自动生成。参考观察与具体边界见 [调研](../../docs/cases/taste-skill-site.md)。

## 正向 Prompt

读取本案例源码、研究、fidelity.md、source/trace.json 并关联 taste-skill 素材，为目标开发者工具或 Agent Skill 制作以真实设计过程与前后对比为核心的产品官网。保留深墨至焦橙的首屏渐变与 #f8f4ee 暖奶油纸面系统，顶栏采用随底层明暗切换 .on-light/.is-dark 并支持下滚收起的悬浮胶囊导航。首屏在随滚动展平的三维倾角画框中提供带 clip-path 裁剪指示器的多业态作品标签切换。紧接三段粘性滚动舞台与交互模块：第一段用三维竖向滚筒展示 20 条编号方向，联动三角准星、右侧计数说明与末尾三张抽选卡片；第二段用三张带悬停重播的界面微动画卡片演示核心脚本；第三段在左栏五步进度按钮与右栏同一真实 DOM 页面之间建立同步，分五步演进展示从默认套路到专业版面的改版过程。中后段提供三标签安装命令复制、支持 Pause/Play/Replay 的 8.6 秒桌面应用工作流回放、常见问题与社区赞助网格，最后以多层 Canvas 光泛与柔焦字标交接收束至带日出巨字动画的暖黑页脚，并配套 Docs、Guide、Changelog、Blog 四个子页。全站保持无声，在 1440×900 与 390×844 下逐模块核对布局与减少动态后备。

## 负向约束

不要用静态图片代替三维方向滚筒、五步 Noteflow 真实 DOM 改版舞台、三张能力卡微动画或 TasteCode 工作流回放；不要删掉命令复制的 1600ms 状态反馈、键盘标签切换或手机导航抽屉；不要在减少动态模式下把内容留在隐藏或半透明状态；不要引入第三方追踪脚本或自动播放音频。

## 制作约束

- 复刻范围固定为 2026-11-19 的 https://www.tasteskill.dev/ 首页及 /docs、/guide、/changelog、/blog 四个导航子页（部署标识 dpl_p6tE71r3jRSWDdmahXrJaf8t29eg）。
- 运行库使用原站同版本 GSAP 3.15.0（含 ScrollTrigger、SplitText）与 Lenis 1.3.26；原始 Next.js 分块保存在 demos/cases/taste-skill-site/source/upstream/。
- 21 个 Google Sans Flex / Google Sans Code 字体分片、作品截图、赞助标志、Agent 图标与 23 张社区赞助者头像均已本地化，逐项来源记录于 assets-manifest.json。
- 遵循无追踪原则，移除原站统计脚本与 Blog 页的第三方 Twitter widgets.js 外链脚本，保留原站内置的 4 张推文卡片与外链入口。

## 检查方法

在桌面与手机宽度下切换首屏四个作品标签并复制安装命令；缓慢滚过 The draw 观察二十方向滚筒、准星缩放与末尾三张抽选卡；移入三张能力卡触发重播；在 Before and after 依次点击五个步骤按钮观察 Noteflow 页面的五步蜕变；暂停并重播 TasteCode 桌面演示；滚过终章光泛字标并进入 Docs、Guide、Changelog、Blog 四个子页测试目录高亮与代码复制。

[查看 Demo](../../demos/cases/taste-skill-site/index.html) · [返回案例库](https://web-atlas-library.mibxranime.chatgpt.site/#/cases/taste-skill-site)
