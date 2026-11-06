export const playgroundTypes = ['visual','micro-motion','page-motion','sound','structure'] as const;
export type PlaygroundType = typeof playgroundTypes[number];
export const playgroundLabels = {visual:'视觉构成','micro-motion':'微动效','page-motion':'页面动效',sound:'声音反馈',structure:'内容与状态'};
export const examples = {visual:'restrained-signal-color','micro-motion':'state-shape-feedback','page-motion':'directional-section-wipe',sound:'sound-opt-in',structure:'single-open-accordion'};
export const chapters = [['看见设计。','先确定信息的主角。'],['理解机制。','用转场解释内容的交接。'],['组合你的页面。','同一操作也能反向返回。']];
export const questions = [
  {title:'01 / 先明确任务',content:'为当前内容选择一个主要机制。'},
  {title:'02 / 再组合反馈',content:'让辅助机制服务于阅读和操作。'},
  {title:'03 / 最后核对边界',content:'检查来源、设备与实际可用的状态。'},
];
export const initialStatus = (type: PlaygroundType) => playgroundLabels[type]+' · '+(type==='sound'?'声音关闭':'初始状态');
export const highlightStatus = '强调方式已改变；观察阅读重点。';
export const radiusStatus = (radius: number) => '容器圆角 '+radius+'px；内容与位置保持一致。';
export const microStatus = (active: boolean) => active?'反馈状态 · 局部变化说明可以操作。':'返回初始位置 · 选择结果保留。';
export const selectionStatus = (selected: boolean) => selected?'已选择这条灵感。':'已取消选择。';
export const chapterStatus = (chapter: number, reduced: boolean) => '第 '+(chapter+1)+' 章 · '+(reduced?'减少动态，直接交接。':'交接完成，可反向返回。');
export const structureStatus = (title: string) => '当前展开：'+title;
