import type { Entry } from "../types";
import type { Group, LabState } from "./data";
import type { LabModel } from "./state";
import { fontRules, graphicNames, layoutNames, shapeRules } from "./data";
import { bestText, luminance, resolvedPalette } from "./colors";

export function config(state: LabState, groupOrigins: Record<Group, string>, referenceEntry: Entry | null, systemDark: boolean, reducedMotion: boolean){
    return {
      version:3,
      purpose:'同一虚构产品内容的设计元素教学实验，不是来源网站复刻',
      reference:referenceEntry?{id:referenceEntry.id,title:referenceEntry.title,sources:referenceEntry.sources.map((s: {title: string; url: string})=>({title:s.title,url:s.url}))}:null,
      baseScheme:state.name,
      color:{background:resolvedPalette(state, systemDark).bg,text:resolvedPalette(state, systemDark).ink,accent:resolvedPalette(state, systemDark).accent,buttonText:bestText(resolvedPalette(state, systemDark).accent)},
      theme:{choice:state.themeChoice||'reference',resolved:luminance(resolvedPalette(state, systemDark).bg)<.25?'dark':'light',systemDark:systemDark,sourceBehavior:referenceEntry?.themeBehavior||null,note:'教学迁移使用协调颜色角色，固定主题案例的真实demo不改色'},
      sound:{kind:'none',control:'协调实验不播放音乐或操作音',interactionRole:'反馈由文字和微动效表达',sourceBehavior:referenceEntry?.soundBehavior||null},
      typography:{choice:state.type,titleFont:fontRules[state.type].title,bodyFont:fontRules[state.type].body},
      layout:{choice:state.layout,meaning:layoutNames[state.layout]},
      shape:{choice:state.shape,radiusPx:shapeRules[state.shape].radius,strokePx:shapeRules[state.shape].stroke,buttonRadiusPx:8},
      spacing:{basePx:state.space,note:'手机外边距上限28px，组间距离继续按所选尺度变化'},
      graphic:{choice:state.graphic,meaning:graphicNames[state.graphic],asset:'本地原创SVG，无外部素材'},
      hierarchy:state.hierarchy,
      texture:state.texture,
      motion:{type:'micro-motion',enabled:state.motion,reducedMotionPreferred:reducedMotion,note:'仅协调实验的局部反馈；文字反馈始终存在'},
      elementOrigins:{...groupOrigins},
      constraints:['内容先于装饰','颜色角色一致','自然滚动，手机重排，键盘焦点可见','产品文案保持相同，图形呈现方式可单独切换']
    };
  }

export const basePrompt = `为 [产品/项目] 制作面向 [目标用户] 的网页。核心目标是 [用户应理解什么、完成什么行动]。请先明确内容顺序、核心卖点与主行动，再组织视觉。

选择 [案例库中的真实案例/主要风格] 作为方向，说明你借鉴的是哪些可观察规则，而不是只贴风格标签。给出一套协调的视觉规则：
1. 配色：区分背景、表面、文字、强调和状态颜色；说明主次，保证文字可读，状态不要只靠颜色。
2. 字体与排版：确定标题/正文/说明的字体、字号、字重、行高与行长；使用有限且有规律的层级，中文长文保持易读。
3. 形状、线条与图像：统一圆角/直角、边框粗细、图标和插画的处理方式；图像要帮助展示卖点，质感不能干扰内容。
4. 空间与组织：用稳定的对齐线和间距尺度建立布局；组内近、组间远，重要内容有适当留白；用比例、平衡、对比与重复协调元素。
5. 视觉巧思与微动效：按内容需要选择文字强调、颜色区分、容器或装饰规则；为悬停、聚焦、按下和复位写清触发、局部变化与操作结果。静态文字和状态仍能独立表达反馈，手机与键盘可操作。
6. 页面动效：核对首次加载、欢迎界面、滚动叙事与章节交接；保留来源的自然滚动或分屏机制。写清起始、过程、完成、反向返回与快速重复时的状态顺序，尊重prefers-reduced-motion。
7. 深浅主题：区分固定主题、系统跟随与手动切换；切换时重映射背景、表面、文字、强调和边界角色，不简单反色图片。强IP或摄影主题若无切换，可保留固定主题并解释。
8. 声音：分别核对背景音乐、开场音和操作短音，保留真实素材与用户启用/静音/暂停流程。验证触发时机、重复操作、手机入口和后台返回；静音后保留完整反馈。没有声音的网站不添加配乐。

先做一个包含真实内容的关键页面，再检查配色、排版、形状与留白是否共同突出同一重点。解释每个视觉选择如何服务目标，区分来源事实与你的迁移判断。不要自动把某品牌的专属规则当成所有网页的普遍标准。`;

export function currentPrompt(model: LabModel, systemDark: boolean, reducedMotion: boolean) {
  const referenceEntry = model.referenceEntry;
  const source = referenceEntry ? '\n参考方向：' + referenceEntry.title + '；来源：' + referenceEntry.sources.map((s: {url: string}) => s.url).join('，') + '。这是元素教学迁移，请结合原条目研究其完整布局与交互。' : '';
  return basePrompt + source + '\n\n当前元素配置（可据项目内容调整，不作为审美评分）：\n' + JSON.stringify(config(model.state, model.groupOrigins, referenceEntry, systemDark, reducedMotion), null, 2);
}
