import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/components/tabs/tabs';
import { initialStatus, examples, playgroundLabels, playgroundTypes, type PlaygroundType } from '@/core/lab/playground/data';
import { reading } from '@/core/lab/reading';
import { href } from '@/core/router';
import { Section, Prose } from '../blocks';
import { useAtlas } from '../context';
import { VisualPlayground } from './VisualPlayground';
import { MicroPlayground } from './MicroPlayground';
import { PagePlayground } from './PagePlayground';
import { SoundPlayground } from './SoundPlayground';
import { StructurePlayground } from './StructurePlayground';

function Playground({type}: {type: PlaygroundType}) {
  const [status,setStatus]=useState(initialStatus(type));
  const View=type==='visual'?VisualPlayground:type==='micro-motion'?MicroPlayground:type==='page-motion'?PagePlayground:type==='sound'?SoundPlayground:StructurePlayground;
  return <div className="lab-playground" data-type={type}><View status={setStatus} /><p className="muted small lab-pg-status" role="status">{status}</p><p className="muted small">本地机制示意 · <a href={href(`/patterns/${examples[type]}`)}>阅读对应巧思与来源</a></p></div>;
}

export function PatternLab() {
  const [active,setActive]=useState<PlaygroundType>('visual'), [epoch,setEpoch]=useState(0);
  const {data}=useAtlas(), section=reading['pattern-lab'];
  const article=section.articles[playgroundTypes.indexOf(active)];
  useEffect(() => { const restore=(event: PageTransitionEvent) => { if(event.persisted)setEpoch(value => value+1); }; window.addEventListener('pageshow',restore); return () => window.removeEventListener('pageshow',restore); },[]);
  return <Section id="pattern-lab" title={section.title}>
    {section.intro.map(text => <Prose key={text} text={text} />)}
    <Tabs value={active} onValueChange={value => setActive(value as PlaygroundType)}>
      <TabsList aria-label="巧思机制实验">{playgroundTypes.map(type => <TabsTrigger key={type} value={type}>{playgroundLabels[type]}</TabsTrigger>)}</TabsList>
      <TabsContent key={`${active}-${epoch}`} value={active}>
        <div className="lab-pg-panel"><h3>{article.title}</h3><Prose text={article.paragraphs[0]} />
          <Playground type={active} />
          {article.paragraphs[1] && <Prose text={article.paragraphs[1]} />}
          <a href={href('/patterns',{experience:active})}>{article.link.title}</a>
        </div>
      </TabsContent>
    </Tabs>
    {section.after.map(text => <Prose key={text} text={text} />)}
    {data.docs.some(doc => doc.path==='site/playground/fidelity.md') && <a href={href('/docs',{path:'site/playground/fidelity.md'})}>查看示意范围</a>}
  </Section>;
}
