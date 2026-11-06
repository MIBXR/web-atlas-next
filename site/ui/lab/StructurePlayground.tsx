import { useEffect, useRef } from 'react';
import { Accordion } from '@/registry/components/accordion/accordion';
import { questions, structureStatus } from '@/core/lab/playground/data';

export function StructurePlayground({status}: {status: (text: string) => void}) {
  const root=useRef<HTMLDivElement>(null);
  useEffect(() => { status(structureStatus(questions[0].title)); },[status]);
  return <div className="lab-pg-stage lab-pg-structure" ref={root} onClick={() => requestAnimationFrame(() => {
    const open=root.current?.querySelector('button[data-state="open"]');
    if(open)status(structureStatus(open.textContent!));
  })}><span className="lab-pg-eyebrow">ONE QUESTION AT A TIME</span><Accordion items={questions} /></div>;
}
