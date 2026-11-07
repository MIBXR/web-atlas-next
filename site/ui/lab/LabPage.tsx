import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRoute, navigate, withParams } from "@/core/router";
import { allowScroll } from "@/core/scroll-guard";
import { applyReference, change, setScheme, type Choice } from "@/core/lab/state";
import { basePrompt, currentPrompt } from "@/core/lab/config";
import type { SchemeId } from "@/core/lab/data";
import { PromptBlock, Prose, Section, SectionNav } from "../blocks";
import { useAtlas } from "../context";
import { CoordinationLab } from "./CoordinationLab";
import { ReadingSection } from "./ReadingSections";
import { PatternLab } from "./PatternLab";
import "./lab.css";

const sections = [
  {id:'lab',title:'协调实验'}, {id:'pattern-lab',title:'巧思机制实验'},
  {id:'elements',title:'组成元素'}, {id:'prompt',title:'基础 Prompt'},
];

export function LabPage() {
  const { data } = useAtlas(), route = useRoute();
  const requested = route.params.get('style'), target = route.params.get('h');
  const embed = route.params.get('embed') === 'home';
  const [model,setModel] = useState(() => setScheme('paper'));
  const [systemDark,setSystemDark] = useState(() => matchMedia('(prefers-color-scheme:dark)').matches);
  const [reducedMotion,setReducedMotion] = useState(() => matchMedia('(prefers-reduced-motion:reduce)').matches);
  const content = useRef<HTMLDivElement>(null);
  const [active,setActive] = useState('lab');
  const appliedStyle = useRef<string | null | undefined>(undefined);
  useLayoutEffect(() => {
    if(requested===appliedStyle.current)return;
    appliedStyle.current=requested;
    if(!requested) { setModel(setScheme('paper')); return; }
    const entry = data.cases.find(item => item.id===requested);
    setModel(entry ? applyReference(entry) : {...setScheme('paper'),context:'未找到这个风格编号，当前使用纸页基础方案。请重新选择风格。'});
  },[requested,data.cases]);
  useEffect(() => {
    const theme = matchMedia('(prefers-color-scheme:dark)'), motion = matchMedia('(prefers-reduced-motion:reduce)');
    const themeChanged = () => setSystemDark(theme.matches), motionChanged = () => setReducedMotion(motion.matches);
    theme.addEventListener('change',themeChanged); motion.addEventListener('change',motionChanged);
    return () => { theme.removeEventListener('change',themeChanged); motion.removeEventListener('change',motionChanged); };
  },[]);
  useEffect(() => {
    if(embed || !target)return;
    const raf=requestAnimationFrame(() => { allowScroll(); document.getElementById(`sec-${target}`)?.scrollIntoView({block:'start'}); });
    return () => cancelAnimationFrame(raf);
  },[target,embed]);
  useEffect(() => {
    if(embed)return;
    let raf=0;
    const update = () => {
      raf=0;
      const nodes=[...(content.current?.querySelectorAll<HTMLElement>(':scope > .section') ?? [])];
      const line=(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sticky-top')) || 0)+120;
      let cur=nodes[0];
      for(const node of nodes)if(node.getBoundingClientRect().top<=line)cur=node;
      if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2)cur=nodes[nodes.length-1];
      let nearest='lab';
      for(const node of nodes) {
        const id=node.id.replace(/^sec-/,'');
        if(sections.some(section => section.id===id))nearest=id;
        if(node===cur)break;
      }
      setActive(nearest);
    };
    const onScroll=() => { if(!raf)raf=requestAnimationFrame(update); };
    update(); window.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('resize',onScroll);
    return () => { window.removeEventListener('scroll',onScroll); window.removeEventListener('resize',onScroll); cancelAnimationFrame(raf); };
  },[embed]);
  function onScheme(id: SchemeId) {
    setModel(setScheme(id));
    appliedStyle.current=null;
    if(requested)navigate(withParams(route,{style:null}),{replace:true});
  }
  function onReference(id: string) {
    const entry=data.cases.find(item => item.id===id);
    setModel(entry?applyReference(entry):setScheme('paper'));
    appliedStyle.current=entry?.id ?? null;
    navigate(withParams(route,{style:entry?.id}),{replace:true});
  }
  function onChange(key: Choice,value: string | number | boolean) { setModel(model => change(model,key,value,systemDark)); }
  const coordination=<CoordinationLab model={model} setModel={setModel} embed={embed} systemDark={systemDark} reducedMotion={reducedMotion} onScheme={onScheme} onReference={onReference} onChange={onChange} />;
  if(embed)return <div className="lab-page lab-embed">{coordination}</div>;
  return <div className="page lab-page">
    <header className="page-head"><div><h1>设计实验室</h1><p className="muted">调整配色、排版与形状，体验视觉、微动效、页面动效和声音机制，比较内容层级与操作反馈。</p></div></header>
    <div className="detail-content">
      <SectionNav sections={sections} active={active} />
      <div className="detail-sections" ref={content}>
        <ReadingSection id="framework" />
        <Section id="lab" title="完整协调方案">{coordination}</Section>
        <PatternLab />
        <ReadingSection id="elements" />
        <ReadingSection id="principles" />
        <ReadingSection id="workflow" />
        <Section id="prompt" title="设计要求与 Prompt">
          <Prose text="将方括号中的内容替换为项目信息，并补充所选案例的专属 Prompt。" />
          <PromptBlock title="通用基础 Prompt · 中文" text={basePrompt} />
          <PromptBlock title="当前配置 Prompt" text={currentPrompt(model,systemDark,reducedMotion)} />
          <p className="muted small">若浏览器不允许自动复制，可选中上方文本手动复制。</p>
        </Section>
        <ReadingSection id="sources" />
      </div>
    </div>
  </div>;
}
