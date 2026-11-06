import { chapters, chapterStatus, initialStatus } from './data';

export function createPageMotion(cover: HTMLElement, show: (chapter: number) => void, status: (text: string) => void, getDuration: () => number) {
  let target=0, revision=0, animation: Animation | undefined;
  function finishOrCancel(animation: Animation) {
    return new Promise<boolean>(resolve => {
      const end=(event: Event) => {
        animation.removeEventListener('finish',end); animation.removeEventListener('cancel',end);
        resolve(event.type==='finish');
      };
      animation.addEventListener('finish',end); animation.addEventListener('cancel',end);
    });
  }
  function cancel() { revision++; animation?.cancel(); cover.style.transform='scaleX(0)'; }
  async function change(direction: number) {
    target=(target+direction+chapters.length)%chapters.length;
    const current=++revision;
    animation?.cancel(); cover.style.transform='scaleX(0)';
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) { show(target); status(chapterStatus(target,true)); return; }
    cover.style.transformOrigin=direction>0?'left':'right';
    const duration=getDuration()/2;
    status('遮罩进入 · 覆盖当前内容。');
    animation=cover.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'});
    if(!await finishOrCancel(animation) || current!==revision)return;
    cover.style.transform='scaleX(1)'; animation.cancel();
    show(target); status('内容交接 · 遮罩退出。');
    cover.style.transformOrigin=direction>0?'right':'left';
    animation=cover.animate([{transform:'scaleX(1)'},{transform:'scaleX(0)'}],{duration,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'});
    if(await finishOrCancel(animation) && current===revision) { cover.style.transform='scaleX(0)'; animation.cancel(); status(chapterStatus(target,false)); }
  }
  function restore(event: PageTransitionEvent) {
    if(!event.persisted)return;
    cancel(); target=0; show(target); status(initialStatus('page-motion'));
  }
  window.addEventListener('pagehide',cancel); window.addEventListener('pageshow',restore);
  return {change,dispose:() => { cancel(); window.removeEventListener('pagehide',cancel); window.removeEventListener('pageshow',restore); }};
}
