import type { Entry } from "../types";
import { schemes, names, labels, fontNames, graphicNames, layoutNames, shapeNames, type SchemeId, type Group, type LabState } from "./data";
import { contrast, hex, resolvedPalette } from "./colors";

export interface LabModel {
  state: LabState;
  groupOrigins: Record<Group, string>;
  referenceEntry: Entry | null;
  schemeId: SchemeId | '';
  plan: string;
  context: string;
  title: string;
  copy: string;
  question: string;
}

const question = '比较标题、主按钮和笔记的层级，以及形状、字体与信息分组的关系。';

export function setScheme(id: SchemeId): LabModel {
  return {
    state: structuredClone(schemes[id]),
    groupOrigins: {palette:names[id],type:names[id],shape:names[id],space:names[id]},
    referenceEntry: null, schemeId: id, plan: '当前：'+names[id]+'完整方案',
    context: '已恢复完整协调方案。各控件仍可单独调整，产品文案不变。',
    title: names[id]+'完整方案', copy: schemes[id].description!, question,
  };
}

export function applyReference(entry: Entry): LabModel {
    const palette=(entry.tokens&&Array.isArray(entry.tokens.palette)?entry.tokens.palette:[]).filter((c: string)=>/^#[0-9a-f]{6}$/i.test(c));
    const bg=/^#[0-9a-f]{6}$/i.test(entry.background)?entry.background:'#f4eee2';
    const readablePalette=palette.filter((color: string)=>contrast(color,bg)>=4.5);
    const candidates=readablePalette.length?readablePalette:['#171717','#fff1e8'];const ink=candidates.sort((a: string,b: string)=>contrast(b,bg)-contrast(a,bg))[0];
    const accent=/^#[0-9a-f]{6}$/i.test(entry.accent)?entry.accent:palette[2]||'#49654d';
    const mono=/retro-80s|pixel-world/.test(entry.id);
    const serif=/zelda-world|hand-drawn|isometric-3d/.test(entry.id);
    const sharp=/swiss-grid|bauhaus-geometry|line-art|persona-kinetic|retro-80s|pixel-world/.test(entry.id);
    const center=/apple-product|shape-morph/.test(entry.id);
    const editorial=/swiss-grid|line-art|persona-kinetic/.test(entry.id);
    const space=/apple-product|hand-drawn/.test(entry.id)?48:/retro-80s|pixel-world/.test(entry.id)?24:32;
    const state: LabState={name:entry.title,palette:{bg:hex(bg),ink:hex(ink),accent:hex(accent)},type:mono?'mono':serif?'serif':'sans',layout:center?'center':editorial?'editorial':'split',shape:sharp?'sharp':entry.category==='产品'?'round':'soft',space,graphic:/line-art|hand-drawn/.test(entry.id)?'line':/swiss-grid|bauhaus-geometry|shape-morph/.test(entry.id)?'geometry':'product',hierarchy:'clear',texture:/hand-drawn|zelda-world/.test(entry.id)?'grain':entry.category==='产品'?'lift':'flat',motion:true};

  return {
    state, referenceEntry: entry, schemeId: '',
    groupOrigins: {palette:'条目色板',type:'教学映射',shape:'教学映射',space:'教学映射'},
    plan: '当前：'+entry.title+' / 教学迁移',
    context: '“'+entry.title+'”已带入：色板来自本地条目；字体、布局、形状与间距按条目ID/类别归纳为教学配置，供元素组合比较使用。',
    title: '从风格库迁移',
    copy: '保持“拾光笔记”的产品内容，借用“'+entry.title+'”的元素特征。完整信息架构与核心交互见该条目的独立 Demo。',
    question: '比较不同风格下的视觉重点与阅读密度，再单独调整一项，查看它与其他元素的组合效果。',
  };
}

export function borrow(model: LabModel, group: Group, id: SchemeId): LabModel {
  const state = structuredClone(model.state), borrowed = schemes[id];
  if(group==='palette')state.palette={...borrowed.palette};
  else if(group==='type')state.type=borrowed.type;
  else if(group==='shape')state.shape=borrowed.shape;
  else state.space=borrowed.space;
  const questions = {
    palette:'比较新配色下的主行动层级，以及颜色与字体、形状的组合效果。',
    type:'比较字形与圆角、边框的组合，以及换行与阅读密度的变化。',
    shape:'比较按钮、笔记与图形边线的形状规则。',
    space:'比较不同间距下的信息分组与阅读密度。',
  };
  return {...model, state, schemeId:'', groupOrigins:{...model.groupOrigins,[group]:'借用·'+names[id]},
    plan:'当前：'+state.name+' + 单项混合', title:'只替换'+labels[group],
    copy:'从“'+names[id]+'”借用这一项，其余元素维持当前配置。可比较替换前后的组合效果。', question:questions[group]};
}

export type Choice = 'bg' | 'ink' | 'accent' | 'type' | 'layout' | 'shape' | 'space' | 'graphic' | 'hierarchy' | 'texture' | 'motion' | 'themeChoice';
export function change(model: LabModel, key: Choice, value: string | number | boolean, systemDark: boolean): LabModel {
  const state = {...model.state}, next = {...model, state, schemeId:'' as const, groupOrigins:{...model.groupOrigins}};
  function message(title: string, copy: string, observe = question) { next.title=title; next.copy=copy; next.question=observe; }
  function changed(group: Group, title: string, copy: string, observe: string) {
    next.groupOrigins[group]='手动调整'; next.plan='当前：'+state.name+' + 自定义'; message(title,copy,observe);
  }
  switch(key) {
    case 'bg': case 'ink': case 'accent':
      state.palette={...resolvedPalette(state,systemDark),[key]:hex(String(value))}; state.themeChoice='reference';
      changed('palette','调整'+({bg:'背景',ink:'文字',accent:'强调'}[key])+'色','只改动这个颜色角色；字体、布局、形状与留白保持当前值。','比较颜色调整前后的视觉重点，并查看文字与背景的对比读数。'); break;
    case 'type': state.type=value as LabState['type'];
      changed('type','调整字体','标题与正文改用“'+fontNames[state.type]+'”字体方案，产品文字保持不变。','比较字形、字重和换行的变化，以及它们与线条、形状的组合。'); break;
    case 'layout': state.layout=value as LabState['layout']; next.plan='当前：'+state.name+' + 布局调整';
      message('调整布局','切换为“'+layoutNames[state.layout]+'”。手机会重排为纵向，但图文顺序仍体现这个选择。','比较文案与示例笔记的阅读顺序，以及产品重点的位置。'); break;
    case 'shape': state.shape=value as LabState['shape'];
      changed('shape','调整形状与圆角','采用“'+shapeNames[state.shape]+'”，笔记卡片与边线处理一起更新，行动按钮保留统一圆角。','比较卡片与边线共用形状规则后的整体关系。'); break;
    case 'space': state.space=Number(value);
      changed('space','调整留白','基准间距改为'+state.space+'px；外边距、组间距与内距按同一尺度变化。手机外边距有28px上限。','比较信息分组、重点周围的空间与阅读密度。'); break;
    case 'graphic': state.graphic=value as LabState['graphic']; next.plan='当前：'+state.name+' + 图形调整';
      message('调整图形素材','换成“'+graphicNames[state.graphic]+'”呈现方式；三幅SVG沿用当前配色与线条规则，文字卖点保持相同。','比较线描、抽象构成与产品图对当前卖点的呈现。'); break;
    case 'hierarchy': state.hierarchy=value as LabState['hierarchy']; next.plan='当前：'+state.name+' + 层级调整';
      message('调整信息层级',state.hierarchy==='clear'?'恢复明显的标题尺度与字重差。':'把标题尺度和字重拉近正文，观察视觉更趋平级时的阅读变化。','比较标题和主要行动的可辨认程度；此项调整只改变视觉层级。'); break;
    case 'texture': state.texture=value as LabState['texture']; next.plan='当前：'+state.name+' + 质感调整';
      message('调整质感',{flat:'去掉额外颗粒和阴影，保持平面。',grain:'加入轻微颗粒，示范纸面感觉；文字区域保留可读性。',lift:'用阴影区分表面层次，不移动实际布局。'}[state.texture],'比较质感开关前后的表面层次与产品重点。'); break;
    case 'themeChoice': state.themeChoice=value as LabState['themeChoice'];
      message('切换显示主题','比较同一内容在深浅主题下的背景、表面、文字、按钮与分组边界；颜色按角色调整，并非直接反转。','比较深浅主题下主行动的层级，以及文字、边框和图形的可读性。'); break;
    case 'motion': state.motion=Boolean(value); next.plan='当前：'+state.name+' + 动效调整';
      message('调整微动效',state.motion?'已允许短暂反馈动效；系统减少动态偏好仍优先。':'已关闭非必要动效，点击反馈按钮仍会显示结果文字。','用示例下方按钮体验：动效可以帮助确认操作，但不能成为反馈的唯一方式。'); break;
  }
  return next;
}
