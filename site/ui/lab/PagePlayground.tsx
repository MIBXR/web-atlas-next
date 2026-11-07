import { Button } from "@/registry/components/button/button";
import { useEffect, useRef, useState } from 'react';
import { Slider } from '@/registry/components/slider/slider';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { createPageMotion } from '@/core/lab/playground/page-motion';
import { chapters } from '@/core/lab/playground/data';

export function PagePlayground({status}: {status: (text: string) => void}) {
  const [chapter,setChapter]=useState(0), [duration,setDuration]=useState(800);
  const cover=useRef<HTMLDivElement>(null), milliseconds=useRef(800), player=useRef<ReturnType<typeof createPageMotion>>(null);
  useEffect(() => { const controller=createPageMotion(cover.current!,setChapter,status,() => milliseconds.current); player.current=controller; return () => controller.dispose(); },[status]);
  return <>
    <div className="lab-pg-stage lab-pg-page"><div className="lab-pg-chapter" data-chapter={chapter}>
      <span className="lab-pg-eyebrow">CHAPTER <b>{String(chapter+1).padStart(2,'0')}</b></span><h3>{chapters[chapter][0]}</h3><p>{chapters[chapter][1]}</p><span className="lab-pg-chapter-art" aria-hidden="true" />
    </div><div ref={cover} className="lab-pg-wipe" aria-hidden="true" /></div>
    <div className="lab-pg-controls"><div className="lab-pg-actions">
      <Button variant="secondary" size="sm"  data-prev type="button" onClick={() => void player.current!.change(-1)}><ArrowLeft />上一章</Button><Button variant="secondary" size="sm"  data-next type="button" onClick={() => void player.current!.change(1)}>下一章<ArrowRight /></Button>
    </div><Slider label="转场时长" min={240} max={1600} step={40} value={duration} format={value => `${value}ms`} onValueChange={value => { milliseconds.current=value; setDuration(value); }} /></div>
  </>;
}
