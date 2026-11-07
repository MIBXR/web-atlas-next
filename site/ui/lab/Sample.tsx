import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Textarea } from "@/registry/components/textarea/textarea";
import { bestText, blend, contrast, luminance, resolvedPalette } from "@/core/lab/colors";
import { fontRules, graphicNames, graphics, shapeRules } from "@/core/lab/data";
import type { LabState } from "@/core/lab/data";
import { allowScroll } from "@/core/scroll-guard";

export function Sample({ state, systemDark, reducedMotion }: { state: LabState; systemDark: boolean; reducedMotion: boolean }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [note, setNote] = useState<string>();
  const [message, setMessage] = useState('最多180字；本次页面内保存，刷新后不保留。');
  const [feedback, setFeedback] = useState<string>();
  const textarea = useRef<HTMLTextAreaElement>(null), action = useRef<HTMLButtonElement>(null);
  const { bg, ink, accent } = resolvedPalette(state, systemDark);
  const fonts = fontRules[state.type], shape = shapeRules[state.shape];
  const values = {
    bg, ink, accent, 'on-accent':bestText(accent), surface:blend(bg,ink,.035), soft:blend(bg,ink,.075), line:blend(bg,ink,.26), muted:blend(ink,bg,.18),
    'accent-text':contrast(accent,bg)>=4.5?accent:ink,
    'font-title':fonts.title,'font-body':fonts.body,'title-weight':fonts.weight,'title-track':fonts.track,
    radius:shape.radius+'px',stroke:shape.stroke+'px',linecap:shape.cap,shadow:shape.shadow,
    pad:state.space+'px',gap:Math.round(state.space*.7)+'px','card-pad':Math.round(state.space*.7)+'px',duration:state.motion?'180ms':'0ms',
  };
  const style = Object.fromEntries(Object.entries(values).map(([key,value]) => ['--lab-sample-'+key,value])) as CSSProperties;
  style.colorScheme = luminance(bg)<.25?'dark':'light';
  useLayoutEffect(() => { if(open) { allowScroll(); textarea.current?.focus(); } }, [open]);
  function close() { setOpen(false); action.current?.focus({preventScroll:true}); }
  return (
    <div className="lab-sample" id="sample" style={style} data-theme={luminance(bg)<.25?'dark':'light'} data-layout={state.layout} data-hierarchy={state.hierarchy} data-texture={state.texture} data-motion={state.motion?'on':'off'}>
      <div className="lab-sample-header">
        <a href="#sample-title" className="lab-sample-brand" onClick={event => { event.preventDefault(); allowScroll(); document.getElementById('sample-title')?.scrollIntoView({behavior:reducedMotion?'instant':'smooth',block:'center'}); }}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h13v18H5zM8 7h7M8 11h7M8 15h4" /></svg>拾光笔记
        </a>
        <span className="lab-sample-meta">YOUR EVERYDAY FIELD NOTES</span>
      </div>
      <div className="lab-sample-hero">
        <div className="lab-sample-copy">
          <div className="lab-sample-kicker">灵感来了，就留下。</div>
          <h3 id="sample-title">把日常的小发现，<br />变成自己的灵感库。</h3>
          <p>随手记录文字与想法，整理成主题，<br />在需要的时候，找回那一刻。</p>
          <div className="lab-sample-actions">
            <button className="lab-sample-primary" id="sample-action" type="button" ref={action} aria-expanded={open} aria-controls="sample-compose" onClick={() => setOpen(!open)}>试写一条</button>
            <a href="#sample-features" onClick={event => { event.preventDefault(); allowScroll(); document.getElementById('sample-features')?.scrollIntoView({behavior:reducedMotion?'instant':'smooth',block:'center'}); }}>浏览功能</a>
          </div>
          <p className="lab-sample-footnote">本地交互示例 · 无需注册</p>
        </div>
        <div className="lab-note-preview" aria-label="示例笔记">
          <div className="lab-note-preview-top"><span>今天的发现</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" /></svg></div>
          <div className="lab-sample-graphic" aria-label={'当前图形：'+graphicNames[state.graphic]} dangerouslySetInnerHTML={{__html:graphics[state.graphic].replaceAll('class="graphic-','class="lab-graphic-')}} />
          <h4>{note ?? <>光穿过树叶，<br />像一张会变化的地图。</>}</h4>
          <div className="lab-note-rule" /><p>散步 / 城市观察</p><span className="lab-note-tag">灵感片段</span>
        </div>
      </div>
      <div className="lab-sample-features" id="sample-features">
        {[
          ['m16 3 5 5M4 20l5-1L21 7l-5-5L4 14Z','随手记录','先留下，不急着整理。'],
          ['M4 4h16v16H4ZM4 9h16M9 13h6','主题归档','让相关想法靠在一起。'],
          ['m16 16 4.5 4.5M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0','快速找回','需要时，找到熟悉的线索。'],
        ].map(([path,title,copy]) => <div key={title}><span className="lab-feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={path} /></svg></span><strong>{title}</strong><p>{copy}</p></div>)}
      </div>
      <div className="lab-sample-feedback">
        <button className="lab-sample-primary" id="feedback-demo" type="button" onClick={event => {
          const button=event.currentTarget;
          button.classList.remove('lab-feedback-pulse');
          const animated=state.motion&&!reducedMotion;
          if(animated)requestAnimationFrame(() => button.classList.add('lab-feedback-pulse'));
          setFeedback('操作已完成。'+(animated?'同时提供短暂视觉反馈。':'当前使用静态文字反馈。'));
        }}>体验操作反馈</button>
        <p id="feedback-message" role="status" aria-live="polite">{feedback && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>}{feedback ?? '点击后查看文字与视觉反馈。'}</p>
      </div>
      <form className="lab-sample-compose" id="sample-compose" hidden={!open} onSubmit={event => {
        event.preventDefault(); const text=draft.trim();
        if(!text) { setMessage('先写一句发现，再保存。'); textarea.current?.focus(); return; }
        setNote(text); setMessage('已在本次页面保存。示例笔记已更新；刷新后不会保留。');
      }}>
        <Textarea id="sample-note" ref={textarea} label="写下你今天的一个发现" maxLength={180} placeholder="例如：雨后的路面，让霓虹的颜色多停留了一会儿。" value={draft} onChange={event => setDraft(event.target.value)} />
        <div className="lab-compose-actions"><button className="lab-sample-primary" id="sample-save" type="submit">保存这条发现</button><button className="lab-sample-secondary" id="sample-cancel" type="button" onClick={close}>返回预览</button><p id="sample-message" role="status" aria-live="polite">{message}</p></div>
      </form>
    </div>
  );
}
