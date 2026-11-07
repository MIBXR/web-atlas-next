import { Button } from "@/registry/components/button/button";
import { LinkButton } from "@/ui/LinkButton";
// Web Demo 舞台：显示比例、重播、新标签页、原站对照，以及巧思在来源案例中的定位（CONTENT.md 6.1）。
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import SegmentedControl from "@/registry/components/segmented-control/segmented-control";
import { Columns2, Crosshair, ExternalLink, RotateCcw } from "@/ui/icons";

export type Viewport = "fit" | "wide" | "mobile";
const WIDTH: Record<Exclude<Viewport, "fit">, number> = { wide: 1440, mobile: 390 };

export interface Box { left: number; top: number; width: number; height: number; label: string }

interface FrameProps {
  src: string;
  viewport: Viewport;
  reloadKey: number;
  title: string;
  box?: Box | null;
  onFrame?: (iframe: HTMLIFrameElement) => void;
  loadingTarget?: string;
  desktopFallback?: boolean;
}

/** 等比缩小到可用宽度；iframe 高度取可用高度除以缩放系数，保留子文档自己的滚动。 */
export function DemoFrame({ src, viewport, reloadKey, title, box, onFrame, loadingTarget, desktopFallback = false }: FrameProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = wrap.current!;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    if (!loadingTarget || !size.w) return;
    let raf = 0;
    const find = () => {
      const iframe = frame.current;
      const doc = iframe?.contentDocument;
      if (iframe && doc && doc.URL !== "about:blank") {
        const target = doc.querySelector(loadingTarget);
        if (target?.getClientRects().length) { onFrame?.(iframe); return; }
        if (doc.readyState === "complete") return;
      }
      raf = requestAnimationFrame(find);
    };
    find();
    return () => cancelAnimationFrame(raf);
  }, [loadingTarget, src, reloadKey, size.w, onFrame]);
  const target = desktopFallback ? WIDTH.wide : viewport === "fit" ? size.w : WIDTH[viewport];
  const scale = size.w ? Math.min(1, size.w / target) : 1;
  const offsetX = Math.max(0, (size.w - target * scale) / 2);
  // 桌面定位保留横屏，避免按缩放比例拉高后触发 Demo 的竖屏布局。
  const height = desktopFallback ? Math.min(size.h / scale, target - 1) : size.h / scale;
  return (
    <div ref={wrap} className="demo-frame" data-viewport={viewport}>
      {size.w ? (
        <iframe
          ref={frame}
          key={reloadKey + src + desktopFallback}
          src={src}
          title={title}
          style={{ width: target, height, transform: `scale(${scale})`, left: offsetX }}
          onLoad={ev => { if (!loadingTarget) onFrame?.(ev.currentTarget); }}
        />
      ) : null}
      {box ? (
        <div className="locate-box" style={{ left: offsetX + (box.left - 6) * scale, top: (box.top - 6) * scale, width: (box.width + 12) * scale, height: (box.height + 12) * scale }}>
          <span>{box.label}</span>
        </div>
      ) : null}
    </div>
  );
}

export function ViewportControl({ value, onChange }: { value: Viewport; onChange: (v: Viewport) => void }) {
  return (
    <div title="显示比例：适应可用宽度 / 桌面 1440px / 手机 390px"><SegmentedControl
      label="显示比例"
      value={value}
      onValueChange={v => onChange(v as Viewport)}
      options={[{ value: "fit", label: "适应" }, { value: "wide", label: "桌面" }, { value: "mobile", label: "手机" }]}
    /></div>
  );
}

export function StageToolbar({ children }: { children: ReactNode }) {
  return <div className="stage-toolbar">{children}</div>;
}

export function ReplayButton({ onClick, label = "重播" }: { onClick: () => void; label?: string }) {
  return <Button variant="secondary" size="sm"  onClick={onClick} aria-label={label} title={label}><RotateCcw /><span className="stage-action-label">{label}</span></Button>;
}

export function OpenButton({ url }: { url: string }) {
  return <LinkButton variant="secondary" size="sm"  href={url} target="_blank" rel="noopener" aria-label="在新标签页打开" title="在新标签页打开"><ExternalLink /><span className="stage-action-label">新标签页</span></LinkButton>;
}

export function CompareToggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return <Button variant="secondary" size="sm"  aria-pressed={on} onClick={() => onChange(!on)} aria-label="原站对照" title="原站截图与复刻并排对照"><Columns2 /><span className="stage-action-label">原站对照</span></Button>;
}

export function LocateButton({ onClick }: { onClick: () => void }) {
  return <Button variant="secondary" size="sm"  onClick={onClick} aria-label="重新定位" title="重新定位"><Crosshair /><span className="stage-action-label">重新定位</span></Button>;
}

/* ---------- 巧思定位 ---------- */

export interface Focus {
  target: string; label: string; instruction: string; entrypoint?: string; viewport?: "wide" | "mobile"; replay?: string; phase?: "loading";
  prepare?: { key?: string; scroll?: string; images?: string; video?: string; click?: string; input?: string; value?: string; waitFor?: string; minWidth?: number; maxWidth?: number }[];
}

const raf2 = (win: Window) => new Promise<void>(r => win.requestAnimationFrame(() => win.requestAnimationFrame(() => r())));

function visible(doc: Document, selector: string): Element | null {
  for (const el of doc.querySelectorAll(selector)) if (el.getClientRects().length > 0) return el;
  return null;
}

function waitVisible(doc: Document, selector: string, alive: () => boolean): Promise<Element | null> {
  return new Promise(resolve => {
    const found = visible(doc, selector);
    if (found) return resolve(found);
    const mo = new MutationObserver(() => {
      if (!alive()) { mo.disconnect(); return resolve(null); }
      const el = visible(doc, selector);
      if (el) { mo.disconnect(); resolve(el); }
    });
    mo.observe(doc, { subtree: true, childList: true, attributes: true });
  });
}

async function prepare(win: Window, doc: Document, focus: Focus, alive: () => boolean) {
  for (const step of focus.prepare ?? []) {
    if (!alive()) return;
    if (step.maxWidth != null && win.innerWidth > step.maxWidth) continue;
    if (step.minWidth != null && win.innerWidth < step.minWidth) continue;
    if (step.key) win.dispatchEvent(new KeyboardEvent("keydown", { key: step.key, bubbles: true }));
    if (step.scroll) { const el = await waitVisible(doc, step.scroll, alive); if (el) centerInView(win, el); }
    if (step.images) {
      const imgs = [...doc.querySelectorAll<HTMLImageElement>(`${step.images} img`)].filter(i => i.clientWidth > 0);
      await Promise.all(imgs.map(i => (i.complete ? Promise.resolve() : new Promise(r => { i.addEventListener("load", r, { once: true }); i.addEventListener("error", r, { once: true }); })).then(() => i.decode?.().catch(() => {}))));
    }
    if (step.video) {
      const v = doc.querySelector<HTMLVideoElement>(step.video);
      if (v && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        while (alive() && (v.readyState < 2 || v.seeking)) await new Promise(r => setTimeout(r, 100));
      }
    }
    if (step.click) doc.querySelector<HTMLElement>(step.click)?.click();
    if (step.input) {
      const el = doc.querySelector<HTMLInputElement>(step.input);
      if (el) {
        el.value = step.value ?? "";
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    if (step.waitFor) await waitVisible(doc, step.waitFor, alive);
    await raf2(win);
  }
}

function centerInView(win: Window, target: Element) {
  let fixed = false;
  for (let el: Element | null = target; el; el = el.parentElement) {
    const cs = win.getComputedStyle(el);
    if (cs.position === "fixed") fixed = true;
    if (el === target) continue;
    const r = el.getBoundingClientRect(), t = target.getBoundingClientRect();
    if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight) el.scrollTop += t.top - r.top - (el.clientHeight - t.height) / 2;
    if (/(auto|scroll)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth) el.scrollLeft += t.left - r.left - (el.clientWidth - t.width) / 2;
  }
  if (fixed) return;
  const t = target.getBoundingClientRect();
  win.scrollTo({ top: win.scrollY + t.top - (win.innerHeight - t.height) / 2, behavior: "instant" as ScrollBehavior });
  const header = win.document.querySelector("header");
  if (header) {
    const hs = win.getComputedStyle(header), hr = header.getBoundingClientRect(), tr = target.getBoundingClientRect();
    if ((hs.position === "fixed" || hs.position === "sticky") && hr.top <= 0 && tr.top - hr.bottom < 36) win.scrollBy({ top: -(hr.bottom - tr.top + 36), behavior: "instant" as ScrollBehavior });
  }
}

/** 在来源案例 iframe 中执行准备步骤、滚动到目标并逐帧回报目标位置，4 秒后结束。滚动只发生在 iframe 内部。 */
export function useLocator(focus: Focus | null, viewport: Viewport) {
  const [box, setBox] = useState<Box | null>(null);
  const [fallback, setFallback] = useState<Focus | null>(null);
  const desktopFallback = focus !== null && fallback === focus && viewport !== "mobile";
  const run = useRef(0);
  const frame = useRef<HTMLIFrameElement | null>(null);
  const target = useRef<Element | null>(null);

  const locate = useCallback(async (initial: boolean) => {
    const iframe = frame.current;
    if (!iframe || !focus) return;
    const id = ++run.current;
    const alive = () => run.current === id && iframe.isConnected;
    setBox(null);
    const win = iframe.contentWindow as (Window & { CaseLoading?: { ready: Promise<unknown> } }) | null;
    const doc = iframe.contentDocument;
    if (!win || !doc) return;
    const canRestoreDesktop = !desktopFallback && viewport !== "mobile" && focus.phase !== "loading";
    const pathname = (url: URL) => url.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    const current = new URL(doc.URL), source = new URL(iframe.src);
    if (canRestoreDesktop && (pathname(current) !== pathname(source) || (focus.viewport === "wide" && win.innerWidth <= win.innerHeight))) {
      setFallback(focus);
      return;
    }
    {
    let el = !initial && target.current?.isConnected && target.current.getClientRects().length ? target.current : null;
    if (!el) {
      if (focus.phase !== "loading") {
        await doc.fonts?.ready;
        await win.CaseLoading?.ready.catch(() => {});
      }
      await prepare(win, doc, focus, alive);
      if (!alive()) return;
      if (canRestoreDesktop && viewport === "fit" && !visible(doc, focus.target) && doc.querySelector(focus.target)) {
        setFallback(focus);
        return;
      }
      el = await waitVisible(doc, focus.target, alive);
    }
    if (!el || !alive()) return;
    target.current = el;
    await raf2(win);
    centerInView(win, el);
    if (initial && focus.replay) {
      const nodes = [...doc.querySelectorAll<HTMLElement>(focus.replay)];
      nodes.forEach(n => { n.style.animationName = "none"; });
      await raf2(win);
      nodes.forEach(n => n.style.removeProperty("animation-name"));
    }
    }
    const el = target.current;
    if (!el || !alive()) return;
    const end = performance.now() + 4000;
    const tick = () => {
      if (!alive()) return;
      if (performance.now() > end) { setBox(null); return; }
      const r = el!.getBoundingClientRect();
      setBox({ left: r.left, top: r.top, width: r.width, height: r.height, label: focus.label });
      requestAnimationFrame(tick);
    };
    tick();
  }, [focus, viewport, desktopFallback]);

  useEffect(() => () => { run.current++; }, [focus]);

  const onFrame = useCallback((iframe: HTMLIFrameElement) => {
    frame.current = iframe;
    target.current = null;
    void locate(true);
  }, [locate]);

  return { box, onFrame, relocate: () => locate(false), desktopFallback };
}
