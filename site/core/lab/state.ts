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

const question = '观察：标题、主按钮和笔记是否形成明确主次？形状与字体是否表达相近气质？相关信息是否靠得更近？';

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
    context: '“'+entry.title+'”已带入：色板来自本地条目；字体、布局、形状与间距按条目ID/类别归纳为教学配置，供比较使用。这是元素迁移示例，并非官网或来源 Demo 的像素复刻。',
    title: '从风格库迁移',
    copy: '保持“拾光笔记”的产品内容，借用“'+entry.title+'”的元素特征。完整信息架构与核心交互见该条目的独立 Demo。',
    question: '观察：同一内容借用不同风格后，气质、视觉重点与阅读密度有什么变化？再单独改一项，检验它与其他元素的关系。',
  };
}

export function borrow(model: LabModel, group: Group, id: SchemeId): LabModel {
  const state = structuredClone(model.state), borrowed = schemes[id];
  if(group==='palette')state.palette={...borrowed.palette};
  else if(group==='type')state.type=borrowed.type;
  else if(group==='shape')state.shape=borrowed.shape;
  else state.space=borrowed.space;
  const questions = {
    palette:'观察：新的背景、文字和强调色是否仍把视线带到主行动？色彩气质与原有字体、形状如何相处？',
    type:'观察：字形改变后，标题气质与现有圆角、边框是否接近？换行与阅读密度发生了什么？',
    shape:'观察：按钮、笔记与图形边线的形状改变后，是否仍像同一套语言？',
    space:'观察：更疏朗或更紧凑的间距如何改变分组与阅读速度？哪些内容应该靠近？',
  };
  return {...model, state, schemeId:'', groupOrigins:{...model.groupOrigins,[group]:'借用·'+names[id]},
    plan:'当前：'+state.name+' + 单项混合', title:'只替换'+labels[group],
    copy:'从“'+names[id]+'”借用这一项，其余元素维持当前配置。单项混合不一定错误，试着判断它是否服务同一目标。', question:questions[group]};
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
      changed('palette','调整'+({bg:'背景',ink:'文字',accent:'强调'}[key])+'色','只改动这个颜色角色；字体、布局、形状与留白保持当前值。','观察：视线先落在哪里？请同时查看文字与背景对比读数；亮丽的颜色也可能降低可读性。'); break;
    case 'type': state.type=value as LabState['type'];
      changed('type','调整字体','标题与正文改用“'+fontNames[state.type]+'”字体方案，产品文字保持不变。','观察：字形、字重和换行是否改变阅读气质？与现有线条、形状的关系是否清晰？'); break;
    case 'layout': state.layout=value as LabState['layout']; next.plan='当前：'+state.name+' + 布局调整';
      message('调整布局','切换为“'+layoutNames[state.layout]+'”。手机会重排为纵向，但图文顺序仍体现这个选择。','观察：先看到的是文案还是示例笔记？布局是否将产品重点带到了更明确的位置？'); break;
    case 'shape': state.shape=value as LabState['shape'];
      changed('shape','调整形状与圆角','采用“'+shapeNames[state.shape]+'”，笔记卡片与边线处理一起更新，行动按钮保留统一圆角。','观察：多个元素重复同一种形状规则后，是否更容易被理解为一个整体？'); break;
    case 'space': state.space=Number(value);
      changed('space','调整留白','基准间距改为'+state.space+'px；外边距、组间距与内距按同一尺度变化。手机外边距有28px上限。','观察：哪些内容成了一组？重点周围是否有空间？密集与疏朗会如何改变阅读速度？'); break;
    case 'graphic': state.graphic=value as LabState['graphic']; next.plan='当前：'+state.name+' + 图形调整';
      message('调整图形素材','换成“'+graphicNames[state.graphic]+'”呈现方式；三幅SVG沿用当前配色与线条规则，文字卖点保持相同。','观察：线描、抽象构成与具体产品图分别强调了什么？哪一种更适合解释当前卖点？'); break;
    case 'hierarchy': state.hierarchy=value as LabState['hierarchy']; next.plan='当前：'+state.name+' + 层级调整';
      message('调整信息层级',state.hierarchy==='clear'?'恢复明显的标题尺度与字重差。':'把标题尺度和字重拉近正文，观察视觉更趋平级时的阅读变化。','观察：第一眼先看到什么？标题和主要行动还容易找到吗？语义标题没有改变，只改变视觉关系。'); break;
    case 'texture': state.texture=value as LabState['texture']; next.plan='当前：'+state.name+' + 质感调整';
      message('调整质感',{flat:'去掉额外颗粒和阴影，保持平面。',grain:'加入轻微颗粒，示范纸面感觉；文字区域保留可读性。',lift:'用阴影区分表面层次，不移动实际布局。'}[state.texture],'观察：质感有没有帮助理解层次？如果去掉它，产品重点仍然清楚吗？'); break;
    case 'themeChoice': state.themeChoice=value as LabState['themeChoice'];
      message('切换显示主题','比较同一内容在深浅主题下的背景、表面、文字、按钮与分组边界；颜色按角色调整，并非直接反转。','观察：主行动是否仍突出？文字、边框、图形是否仍可读？强主题原站是否适合提供切换？'); break;
    case 'motion': state.motion=Boolean(value); next.plan='当前：'+state.name+' + 动效调整';
      message('调整微动效',state.motion?'已允许短暂反馈动效；系统减少动态偏好仍优先。':'已关闭非必要动效，点击反馈按钮仍会显示结果文字。','用示例下方按钮体验：动效可以帮助确认操作，但不能成为反馈的唯一方式。'); break;
  }
  return next;
}
