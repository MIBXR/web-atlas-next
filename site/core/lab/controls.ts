import type { Choice } from "./state";

export const controls: {key: Choice; label: string; description: string; options: {value: string; label: string}[]}[] = [
  {key:'type',label:'② 字体',description:'同时调整标题与正文的字体搭配，实际显示以本机可用字库为准。',options:[{value:'sans',label:'无衬线 / 微软雅黑'},{value:'serif',label:'衬线 / 阅读气质'},{value:'mono',label:'等宽 / 工具信息'}]},
  {key:'layout',label:'③ 布局',description:'改变内容位置与阅读顺序，产品文案保持相同。',options:[{value:'split',label:'左文右图 / 并列介绍'},{value:'center',label:'居中纵向 / 聚焦主题'},{value:'editorial',label:'左图右文 / 编辑阅读'}]},
  {key:'shape',label:'④ 形状与圆角',description:'笔记卡片与图形边线使用同一套规则；行动按钮保留统一的8px圆角。',options:[{value:'sharp',label:'直角 / 0px'},{value:'soft',label:'小圆角 / 8px'},{value:'round',label:'大圆角 / 24px'}]},
  {key:'graphic',label:'⑥ 图形素材',description:'三幅本地原创SVG，使用当前配色与线条规则。',options:[{value:'line',label:'线描 / 轮廓表达'},{value:'geometry',label:'几何 / 抽象构成'},{value:'product',label:'产品 / 记录工具'}]},
  {key:'hierarchy',label:'⑦ 信息层级',description:'改变标题比例与字重，语义标题和内容保持不变。',options:[{value:'clear',label:'清楚主次 / 大标题'},{value:'flat',label:'相近平级 / 观察比较'}]},
  {key:'texture',label:'⑧ 质感',description:'装饰只做轻量示范，不降低正文对比。',options:[{value:'flat',label:'平面 / 无额外质感'},{value:'grain',label:'颗粒 / 轻微纸感'},{value:'lift',label:'阴影 / 表面层次'}]},
  {key:'themeChoice',label:'⑩ 深浅色 / 颜色角色一起切换',description:'这是教学迁移，来源 Demo 保留原色。切换主题时，比较表面、文字、按钮与边界；图片不反色。',options:[{value:'reference',label:'保留方案 / 原案例主题'},{value:'system',label:'跟随系统'},{value:'light',label:'浅色'},{value:'dark',label:'深色'}]},
];
