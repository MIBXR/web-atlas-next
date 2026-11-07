import { Button } from "@/registry/components/button/button";
import { LinkButton } from "@/ui/LinkButton";
import { useEffect, useMemo, useRef, useState } from "react";
import Badge from "@/registry/components/badge/badge";
import { Carousel } from "@/registry/components/carousel/carousel";
import { Dialog, DialogContent } from "@/registry/components/dialog/dialog";
import { Combobox } from "@/registry/components/combobox/combobox";
import { Select } from "@/registry/components/select/select";
import { ChevronLeft, ChevronRight, Columns2, Crosshair, ExternalLink, Volume2, VolumeX, X } from "@/ui/icons";
import { href, navigate, useRoute, withParams } from "@/core/router";
import type { Entry } from "@/core/types";
import { Bullets, CodeLine, DocLinks, EntryLinks, has, SourceList, useEvidenceLabel, KV, Palette, ParamTable, PromptBlock, Prose, RelatedEntries, Section, Sources } from "@/ui/blocks";
import { DetailLayout, GalleryStage } from "@/ui/DetailPage";
import { byId, useAtlas } from "@/ui/context";
import { CompareToggle, DemoFrame, LocateButton, OpenButton, ReplayButton, StageToolbar, useLocator, ViewportControl, type Focus, type Viewport } from "./stage";

type L = Record<string, any>;
/** labels.json 没有收录、但页面上会直接显示的枚举值。 */
const ENUM: Record<string, string> = { "reference-study": "参考研究（对照原站复刻）", "visual-adaptation": "视觉改编", dark: "深色", light: "浅色", system: "跟随系统" };
const lab = (labels: L, path: string[], v: string) => path.reduce<any>((o, k) => o?.[k], labels)?.[v] ?? v;

function useViewport(fallback: Viewport) {
  const route = useRoute();
  const v = route.params.get("view") as Viewport | null;
  const value: Viewport = v === "fit" || v === "wide" || v === "mobile" ? v : fallback;
  return [value, (next: Viewport) => navigate(withParams(route, { view: next === fallback ? null : next }), { replace: true })] as const;
}

/* ---------- 案例 ---------- */

function CaseStage({ e }: { e: Entry }) {
  const route = useRoute();
  const [viewport, setViewport] = useViewport(e.id === "chatgpt-platform" ? "wide" : "fit");
  const [reload, setReload] = useState(0);
  const compare = route.params.get("ref") === "1" && !!e.referencePreview;
  return (
    <div className="stage">
      <StageToolbar>
        <ViewportControl value={viewport} onChange={setViewport} />
        <ReplayButton onClick={() => setReload(n => n + 1)} />
        {e.referencePreview ? <CompareToggle on={compare} onChange={on => navigate(withParams(route, { ref: on ? "1" : null }), { replace: true })} /> : null}
        <OpenButton url={e.demo} />
      </StageToolbar>
      <div className={compare ? "stage-split" : "stage-single"}>
        {compare ? (
          <figure className="reference-shot">
            <figcaption>原站截图{e.capturedAt ? ` · ${e.capturedAt}` : ""}</figcaption>
            <div className="reference-scroll"><img src={e.referencePreview} alt={`${e.title} 原站截图`} /></div>
            {e.referencePreviewNote ? <p className="muted">{e.referencePreviewNote}</p> : null}
          </figure>
        ) : null}
        <div className="stage-demo">
          {compare ? <p className="stage-caption">复刻 Demo</p> : null}
          <DemoFrame src={e.demo} viewport={viewport} reloadKey={reload} title={`${e.title} Demo`} />
        </div>
      </div>
    </div>
  );
}

function Migration({ m }: { m: any }) {
  if (!has(m)) return null;
  if (Array.isArray(m)) return <ParamTable rows={m} cols={[["field", "位置"], ["how", "修改方法"]]} />;
  return (
    <>
      <KV data={{ entrypoint: m.entrypoint, editGuide: m.editGuide }} labels={{ entrypoint: "复用入口", editGuide: "修改入口说明" }} />
      <Bullets title="需要修改的文件" items={m.files} />
    </>
  );
}

export function CaseDetail({ e }: { e: Entry }) {
  const { data } = useAtlas();
  const L = data.labels;
  const patterns = useMemo(() => [...new Set([...(e.patternIds ?? []), ...data.patterns.filter(p => p.sources.some((s: L) => s.caseId === e.id)).map(p => p.id)])], [e, data]);
  const fullPrompt = [e.prompt, e.negativePrompt ? `负向约束：\n${e.negativePrompt}` : ""].filter(Boolean).join("\n\n");
  return (
    <DetailLayout
      kind="cases"
      e={e}
      subtitle={e.subtitle}
      meta={<>
        <Badge>{lab(L, ["cases", "category"], e.category)}</Badge>
        <Badge>{e.country}</Badge>
        {e.capturedAt ? <Badge>采集 {e.capturedAt}</Badge> : null}
        {e.referenceUrl ? <LinkButton variant="ghost" size="sm"  href={e.referenceUrl} target="_blank" rel="noopener">原站 <ExternalLink aria-hidden="true" /></LinkButton> : null}
      </>}
      stage={<CaseStage e={e} />}
    >
      <Section id="overview" title="概览">
        <Prose text={e.summary} />
        <KV data={{ productFocus: e.productFocus, theme: e.theme, edition: e.edition, implementation: ENUM[e.implementation] ?? e.implementation, studyScope: ENUM[e.studyScope] ?? e.studyScope, theoryVerifiedAt: e.theoryVerifiedAt }} labels={{ productFocus: "设计重点", theme: "主题与情绪", edition: "采集版本", implementation: "实现类别", studyScope: "研究范围", theoryVerifiedAt: "理论核验" }} />
        {has(e.tags) ? <div className="badge-row">{e.tags.map((t: string) => <a key={t} className="badge-link" href={href("/cases", { q: t })}><Badge>{t}</Badge></a>)}</div> : null}
      </Section>
      <Section id="principles" title="设计机制"><Bullets items={e.principles} /></Section>
      <Section id="interaction" title="交互"><Bullets items={e.interaction} /></Section>
      <Section id="composition" title="构成"><KV data={e.composition} labels={L.cases.composition} order={Object.keys(L.cases.composition)} /></Section>
      <Section id="tokens" title="色板与 Token">
        {has(e.tokens?.palette) ? <Palette colors={e.tokens.palette} /> : null}
        <KV data={{ accent: e.accent, background: e.background, type: e.tokens?.type, layout: e.tokens?.layout, motion: e.tokens?.motion }} labels={{ accent: "强调色", background: "背景色", type: "字体与排版", layout: "布局", motion: "动效" }} />
        {e.tokens?.accentRoles ? <ParamTable rows={Object.entries(e.tokens.accentRoles).map(([k, v]) => ({ theme: k === "dark" ? "深色" : "浅色", ...(v as L) }))} cols={[["theme", "主题"], ["accent1", "深色强调"], ["accent2", "强调文字"], ["accent3", "实心底"], ["accent3Ink", "实心字"], ["accentMark", "高亮条"], ["accent4", "柔和底"]]} /> : null}
      </Section>
      <Section id="behavior" title="主题与声音">
        <KV
          data={{ mode: lab(L, ["cases", "themeBehavior.mode"], e.themeBehavior?.mode), default: ENUM[e.themeBehavior?.default] ?? e.themeBehavior?.default, control: e.themeBehavior?.control, designReason: e.themeBehavior?.designReason, sound: lab(L, ["cases", "soundBehavior.kind"], e.soundBehavior?.kind), soundControl: e.soundBehavior?.control, soundRole: e.soundBehavior?.interactionRole }}
          labels={{ mode: "主题模式", default: "默认主题", control: "主题控制", designReason: "主题理由", sound: "声音类别", soundControl: "声音控制", soundRole: "声音作用" }}
        />
      </Section>
      <Section id="fit" title="适用场景与限制">
        <Bullets title="适用" items={e.useCases} />
        <Bullets title="避用" items={e.avoid} />
        <Bullets title="约束" items={e.constraints} />
      </Section>
      <Section id="patterns" title={`关联巧思（${patterns.length}）`}>{patterns.length ? <EntryLinks kind="patterns" ids={patterns} /> : null}</Section>
      <Section id="migration" title="迁移指南"><Migration m={e.migration} /></Section>
      <Section id="exercise" title="改造练习"><Prose text={e.exercise} /></Section>
      <Section id="prompt" title="Prompt">
        <PromptBlock title="实现 Prompt" note="复制时附带负向约束" text={fullPrompt} />
        <PromptBlock title="负向约束" text={e.negativePrompt} />
      </Section>
      <Section id="sources" title="来源证据"><Sources items={e.sources} /></Section>
      <Section id="docs" title="研究文档与资料">
        <DocLinks docs={[{ label: "研究拆解", path: e.$.research }, { label: "复刻对照", path: e.$.fidelity }, { label: "许可说明", path: e.$.licenses }, { label: "Prompt 原文", path: e.$.prompt }]} />
        {e.assetManifest ? <p><LinkButton variant="ghost" size="sm"  href={e.assetManifest} target="_blank" rel="noopener">素材来源清单 JSON <ExternalLink aria-hidden="true" /></LinkButton></p> : null}
      </Section>
    </DetailLayout>
  );
}

/* ---------- 巧思 ---------- */

/** 巧思来源：证据标签 + 来源案例 + 采集日期 + 行内操作；说明在第二行。定位条目文件的 locator 不在页面上显示。 */
function PatternSources({ e }: { e: Entry }) {
  const { data } = useAtlas();
  const route = useRoute();
  const evidence = useEvidenceLabel();
  return (
    <SourceList items={e.sources.map((s: L) => {
      const ob = parseObservation(s.observation);
      return {
        tag: evidence(s.evidence),
        title: byId(data.cases, s.caseId)?.title ?? s.caseId,
        url: href(`/cases/${s.caseId}`),
        internal: true,
        meta: s.capturedAt,
        actions: <>
          {s.focus ? <Button variant="ghost" size="sm"  onClick={() => { navigate(withParams(route, { source: s.caseId, view: null }), { replace: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }}><Crosshair aria-hidden="true" /> 在 Demo 中定位</Button> : null}
          {s.referenceUrl ? <LinkButton variant="ghost" size="sm"  href={s.referenceUrl} target="_blank" rel="noopener">原始参考 <ExternalLink aria-hidden="true" /></LinkButton> : null}
        </>,
        note: <>{ob.title ? <strong>{ob.title}</strong> : null}{ob.note}</>,
      };
    })} />
  );
}

function parseObservation(raw: string): { title?: string; note: string } {
  if (raw.startsWith("{")) {
    try { const o = JSON.parse(raw); return { title: o.title, note: o.note ?? "" }; } catch { /* 原文不是 JSON 时按文字显示 */ }
  }
  return { note: raw };
}

function PatternStage({ e, sources }: { e: Entry; sources: { caseId: string; focus: Focus }[] }) {
  const { data } = useAtlas();
  const route = useRoute();
  const sel = sources.find(s => s.caseId === route.params.get("source")) ?? sources[0]!;
  const c = byId(data.cases, sel.caseId);
  const src = sel.focus.entrypoint ?? c?.demo;
  const [viewport, setViewport] = useViewport(sel.focus.viewport ?? (sel.caseId === "chatgpt-platform" ? "wide" : "fit"));
  const [reload, setReload] = useState(0);
  const { box, onFrame, relocate, desktopFallback } = useLocator(sel.focus, viewport);
  if (!src) return null;
  return (
    <div className="stage">
      <StageToolbar>
        {sources.length > 1 ? (
          <div className="picker picker-source">
            <Select label="来源案例" value={sel.caseId} onValueChange={v => navigate(withParams(route, { source: v, view: null }), { replace: true })} options={sources.map(s => ({ value: s.caseId, label: `来源：${byId(data.cases, s.caseId)?.title ?? s.caseId}` }))} />
          </div>
        ) : null}
        <ViewportControl value={viewport} onChange={setViewport} />
        <LocateButton onClick={relocate} />
        <ReplayButton onClick={() => setReload(n => n + 1)} />
        <OpenButton url={src} />
      </StageToolbar>
      <div className="locate-note">
        <Crosshair aria-hidden="true" />
        <div>
          <strong>{sel.focus.label}</strong>
          <span>{sel.focus.instruction}</span>
          <a href={href(`/cases/${sel.caseId}`)}>来源案例：{c?.title ?? sel.caseId}</a>
        </div>
      </div>
      <div className="stage-single"><div className="stage-demo">
        <DemoFrame key={sel.caseId} src={src} viewport={viewport} reloadKey={reload} title={`${c?.title ?? ""} Demo`} box={box} onFrame={onFrame} loadingTarget={sel.focus.phase === "loading" ? sel.focus.target : undefined} desktopFallback={desktopFallback} />
      </div></div>
    </div>
  );
}

export function PatternDetail({ e }: { e: Entry }) {
  const { data } = useAtlas();
  const L = data.labels;
  const route = useRoute();
  const sources = useMemo(() => {
    const seen = new Map<string, { caseId: string; focus: Focus }>();
    for (const s of e.sources) if (!seen.has(s.caseId) && s.focus) seen.set(s.caseId, { caseId: s.caseId, focus: s.focus });
    return [...seen.values()];
  }, [e]);
  return (
    <DetailLayout
      kind="patterns"
      e={e}
      subtitle={e.summary}
      meta={<>
        <Badge>{e.category}</Badge>
        {e.experienceTypes.map((t: string) => <Badge key={t}>{lab(L, ["patterns", "experienceTypes"], t)}</Badge>)}
        <Badge tone="info">{lab(L, ["patterns", "composition.role"], e.composition.role)}</Badge>
      </>}
      stage={sources.length ? <PatternStage e={e} sources={sources} /> : null}
    >
      <Section id="mechanism" title="机制">
        <KV data={{ mechanism: e.mechanism, trigger: e.trigger, effect: e.effect }} labels={{ mechanism: "机制", trigger: "触发", effect: "效果" }} />
      </Section>
      <Section id="params" title="参数"><ParamTable rows={e.parameters} cols={[["name", "参数"], ["value", "参考值"], ["note", "说明"]]} /></Section>
      <Section id="fit" title="适用与限制">
        <Bullets title="适用" items={e.useCases} />
        <Bullets title="避用" items={e.avoid} />
        <Bullets title="约束" items={e.constraints} />
      </Section>
      <Section id="composition" title="组合关系">
        <KV data={{ role: lab(L, ["patterns", "composition.role"], e.composition.role), notes: e.composition.notes }} labels={{ role: "组合职责", notes: "组合说明" }} />
        {has(e.composition.pairsWellWith) ? <><h3 className="sub">适合搭配</h3><EntryLinks kind="patterns" ids={e.composition.pairsWellWith} /></> : null}
        {has(e.composition.conflicts) ? <><h3 className="sub">冲突</h3><EntryLinks kind="patterns" ids={e.composition.conflicts} /></> : null}
      </Section>
      <Section id="sources" title="来源"><PatternSources e={e} /></Section>
      <Section id="prompt" title="Prompt"><PromptBlock title="实现 Prompt" text={e.prompt} /></Section>
      <Section id="files" title="取材文件与文档">
        <DocLinks docs={[{ label: "Prompt 原文", path: e.$.prompt }, { label: "研究文档", path: e.$.research }]} />
        <FileList files={e.sourceFiles} />
      </Section>
    </DetailLayout>
  );
}

function FileList({ files }: { files?: string[] }) {
  if (!has(files)) return null;
  return (
    <ul className="file-list">
      {files!.map(f => {
        const p = f.replace(/\\/g, "/");
        const target = p.endsWith(".md") ? href("/docs", { path: p }) : p.startsWith("entries/") ? href("/" + p.replace(/^entries\//, "").replace(/\.json$/, "")) : p;
        const external = !p.endsWith(".md") && !p.startsWith("entries/");
        return <li key={f}><a href={target} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} className="mono">{p}</a></li>;
      })}
    </ul>
  );
}

/* ---------- 素材 ---------- */

function MaterialStage({ e }: { e: Entry }) {
  const route = useRoute();
  const demos: L[] = e.demos ?? [];
  const cur = demos.find(d => d.id === route.params.get("demo")) ?? demos[0];
  const src = cur?.entrypoint ?? e.demo;
  const [viewport, setViewport] = useViewport("fit");
  const [reload, setReload] = useState(0);
  const i = cur ? demos.indexOf(cur) : -1;
  const go = (d?: L) => d && navigate(withParams(route, { demo: d.id }), { replace: true });
  return (
    <div className="stage">
      <StageToolbar>
        {demos.length > 1 ? (
          <div className="demo-picker">
            <Button variant="secondary" size="sm"  aria-label="上一个样例" disabled={i <= 0} onClick={() => go(demos[i - 1])}><ChevronLeft /></Button>
            <div className="picker picker-demo">
              <Combobox label={`样例（${i + 1}/${demos.length}）`} placeholder="搜索样例" value={cur?.id ?? ""} onValueChange={v => go(demos.find(d => d.id === v))} options={demos.map(d => ({ value: d.id, label: d.group ? `${d.group} · ${d.title}` : d.title, keywords: [d.component ?? "", d.id] }))} />
            </div>
            <span className="picker-count muted">{i + 1}/{demos.length}</span>
            <Button variant="secondary" size="sm"  aria-label="下一个样例" disabled={i >= demos.length - 1} onClick={() => go(demos[i + 1])}><ChevronRight /></Button>
          </div>
        ) : null}
        <ViewportControl value={viewport} onChange={setViewport} />
        <ReplayButton onClick={() => setReload(n => n + 1)} />
        <OpenButton url={src} />
      </StageToolbar>
      {cur ? <div className="locate-note"><div><strong>{cur.title}</strong>{cur.component ? <span className="mono">{cur.component}</span> : null}<span>{cur.summary}</span></div></div> : null}
      <div className="stage-single"><div className="stage-demo">
        <DemoFrame src={src} viewport={viewport} reloadKey={reload} title={`${e.title} 样例`} />
      </div></div>
    </div>
  );
}

/** 0010-vigil 的原作视频与 WebGL 复刻对照：复刻画面的时间跟随视频 currentTime。 */
function VigilCompare({ item, onClose }: { item: L; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    let raf = 0, alive = true;
    const base = "demos/materials/0010-vigil/demo/";
    const load = (p: string) => import(/* @vite-ignore */ new URL(base + p, location.href).href);
    Promise.all([load("renderer.js"), load("pieces.js")]).then(([r, p]) => {
      if (!alive || !canvas.current) return;
      const piece = p.pieces.find((x: L) => x.id === item.compare.piece);
      if (!piece) return;
      canvas.current.width = piece.originalWidth;
      canvas.current.height = piece.originalHeight;
      const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const draw = () => {
        if (!alive || !canvas.current) return;
        r.renderPiece(canvas.current, piece, still ? 0 : video.current?.currentTime ?? 0);
        raf = requestAnimationFrame(draw);
      };
      draw();
    });
    const c = canvas.current, v = video.current;
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
      load("renderer.js").then(r => c && r.releaseRenderer(c));
    };
  }, [item]);
  return (
    <div className="vigil-compare">
      <header>
        <strong>{item.caption}</strong>
        {item.compare.sound ? <Button variant="secondary" size="sm"  aria-label={muted ? "打开原作声音" : "静音"} onClick={() => setMuted(!muted)}>{muted ? <VolumeX /> : <Volume2 />}</Button> : null}
        <Button variant="secondary" size="sm"  aria-label="关闭对照" onClick={onClose}><X /></Button>
      </header>
      <div className="vigil-pair">
        <figure><figcaption>原作</figcaption><video ref={video} src={item.compare.original} autoPlay loop muted={muted} playsInline /></figure>
        <figure><figcaption>WebGL 复刻</figcaption><canvas ref={canvas} /></figure>
      </div>
    </div>
  );
}

function Gallery({ e }: { e: Entry }) {
  const { data } = useAtlas();
  const images = e.gallery as L[];
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [settled, setSettled] = useState(false);
  const [comparison, setComparison] = useState<L | null>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const kinds = [...new Set(images.map(g => g.kind))];
  // Dialog 缩放结束后重新测量 Carousel，使用最终画幅定位图片。
  const galleryAnimation = { onAnimationComplete: () => {
    if (!open || settled) return;
    setSettled(true);
    requestAnimationFrame(() => carousel.current?.querySelector<HTMLElement>('[role="group"]')?.focus({ preventScroll: true }));
  } };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent {...galleryAnimation} title="素材画廊" description={e.title} className="gallery-dialog" onOpenAutoFocus={event => { event.preventDefault(); carousel.current?.querySelector<HTMLElement>('[role="group"]')?.focus({ preventScroll: true }); }}>
          <div ref={carousel} className="gallery-content">
            <Carousel key={settled ? "ready" : "opening"} label={`${e.title}画廊`} className="gallery-carousel" index={index} onIndexChange={setIndex} slideSize="100cqw" slideLabel={(i, count) => `第 ${i + 1} 张，共 ${count} 张`}>
              {images.map(image => <figure key={image.path}>
                <img src={image.path} alt={image.caption} loading="lazy" />
                <figcaption>
                  <p>{image.caption}</p>
                  <div className="gallery-modal-links">
                    <LinkButton variant="ghost" size="sm" href={image.path} target="_blank" rel="noopener">原图 <ExternalLink aria-hidden="true" /></LinkButton>
                    {image.replicaPage ? <LinkButton variant="ghost" size="sm" href={image.replicaPage} target="_blank" rel="noopener">复刻页 <ExternalLink aria-hidden="true" /></LinkButton> : null}
                    {image.sourceUrl ? <LinkButton variant="ghost" size="sm" href={image.sourceUrl} target="_blank" rel="noopener">出处 <ExternalLink aria-hidden="true" /></LinkButton> : null}
                  </div>
                  {image.license ? <p className="muted small">{image.license}</p> : null}
                </figcaption>
              </figure>)}
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={comparison !== null} onOpenChange={value => { if (!value) setComparison(null); }}>
        <DialogContent title="原作与 WebGL 复刻">
          {comparison ? <VigilCompare key={comparison.path} item={comparison} onClose={() => setComparison(null)} /> : null}
        </DialogContent>
      </Dialog>
      {kinds.map(k => (
        <div key={k}>
          {kinds.length > 1 ? <h3 className="sub">{lab(data.labels, ["materials", "gallery[].kind"], k)}</h3> : null}
          <ul className="gallery" style={{ ["--ratio" as string]: e.galleryRatio ?? "4/3", ["--fit" as string]: e.galleryFit ?? "cover" }}>
            {images.filter(g => g.kind === k).map(g => (
              <li key={g.path}>
                <a href={g.path} target="_blank" rel="noopener" onClick={event => { event.preventDefault(); setIndex(images.indexOf(g)); setSettled(false); setOpen(true); }}><img src={g.path} alt={g.caption} loading="lazy" /></a>
                <p>{g.caption}</p>
                <div className="gallery-actions">
                  {g.compare ? <Button variant="ghost" size="sm"  onClick={() => setComparison(g)}><Columns2 aria-hidden="true" /> 原作与复刻</Button> : null}
                  {g.replicaPage ? <LinkButton variant="ghost" size="sm"  href={g.replicaPage} target="_blank" rel="noopener">复刻页 <ExternalLink aria-hidden="true" /></LinkButton> : null}
                  {g.sourceUrl ? <LinkButton variant="ghost" size="sm"  href={g.sourceUrl} target="_blank" rel="noopener">出处 <ExternalLink aria-hidden="true" /></LinkButton> : null}
                </div>
                {g.license ? <p className="muted small">{g.license}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function MaterialDetail({ e }: { e: Entry }) {
  const { data } = useAtlas();
  const L = data.labels;
  const route = useRoute();
  const cur = (e.demos as L[] | undefined)?.find(d => d.id === route.params.get("demo")) ?? e.demos?.[0];
  return (
    <DetailLayout
      kind="materials"
      e={e}
      subtitle={e.summary}
      meta={<>
        <Badge>{lab(L, ["materials", "type"], e.type)}</Badge>
        <Badge>{e.category}</Badge>
        {e.upstream?.version ? <Badge>v{e.upstream.version}</Badge> : null}
        {e.license?.name ? <Badge tone="info">{e.license.name}</Badge> : null}
      </>}
      stage={e.demo ? <MaterialStage e={e} /> : has(e.gallery) ? <GalleryStage e={e}><Gallery e={e} /></GalleryStage> : null}
    >
      {e.demo ? <Section id="gallery" title={`画廊（${e.gallery?.length ?? 0}）`}>{has(e.gallery) ? <Gallery e={e} /> : null}</Section> : null}
      <Section id="install" title="安装与取材"><CodeLine text={e.install} label="复制命令" /></Section>
      <Section id="workflow" title="工作流">{has(e.workflow) ? <ol className="steps">{e.workflow.map((s: string, i: number) => <li key={i}>{s}</li>)}</ol> : null}</Section>
      <Section id="demo-params" title="当前样例参数">
        <ParamTable rows={cur?.parameters} cols={[["name", "参数"], ["value", "参考值"], ["note", "说明"]]} />
        <Prose text={e.demoNote} />
      </Section>
      <Section id="fit" title="适用与限制">
        <Bullets title="适用" items={e.useCases} />
        <Bullets title="避用" items={e.avoid} />
        <Bullets title="约束" items={e.constraints} />
      </Section>
      <Section id="upstream" title="上游、版本与许可">
        <KV data={e.upstream} labels={{ url: "上游地址", verifiedAt: "核验日期", repository: "仓库", commit: "固定提交", version: "版本", threeVersion: "Three.js 版本" }} />
        <KV data={e.license} labels={{ name: "许可", scope: "范围", url: "许可原文", notes: "说明" }} />
      </Section>
      <Section id="sources" title="来源"><Sources items={e.sources} /></Section>
      <Section id="related" title="关联条目"><RelatedEntries items={e.relatedEntries} /></Section>
      <Section id="prompt" title="Prompt"><PromptBlock title="实现 Prompt" text={e.prompt} /></Section>
      <Section id="docs" title="文档与原文">
        <DocLinks docs={[{ label: "使用说明", path: e.$.research }, { label: "原文主文档", path: e.$.snapshot }, { label: "复刻对照", path: e.$.fidelity }, { label: "许可说明", path: e.$.licenses }, { label: "Prompt 原文", path: e.$.prompt }]} />
        <FileList files={e.sourceFiles} />
      </Section>
    </DetailLayout>
  );
}
