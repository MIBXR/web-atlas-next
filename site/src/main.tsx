import data from "virtual:atlas-data";
import { mountAtlas } from "@/ui/App";
import { FlaskConical, Workflow } from "@/ui/icons";
import { byId } from "@/ui/context";
import { Bullets, KV, Palette, Prose } from "@/ui/blocks";
import { KINDS, type AtlasConfig, type Entry, type Kind } from "@/core/types";
import { CaseDetail, MaterialDetail, PatternDetail } from "./details";
import "./web.css";

const L = data.labels;
const label = (dict: Record<string, string> | undefined) => (v: string) => dict?.[v] ?? v;
const caseTitle = (id: string) => byId(data.cases, id)?.title ?? id;

const config: AtlasConfig = {
  name: "Web Atlas",
  tagline: "网页设计参考工作台",
  data,
  facets: {
    cases: [
      { key: "category", label: "分类", values: e => [e.category], display: label(L.cases.category), order: Object.keys(L.cases.category) },
      { key: "country", label: "地区", values: e => [e.country], display: v => v },
    ],
    patterns: [
      { key: "category", label: "分类", values: e => [e.category], display: v => v },
      { key: "experience", label: "体验类型", values: e => e.experienceTypes, display: label(L.patterns.experienceTypes), order: Object.keys(L.patterns.experienceTypes) },
      { key: "source", label: "来源案例", values: e => [...new Set<string>(e.sources.map((s: Entry) => s.caseId))], display: caseTitle, order: data.cases.map((c: Entry) => c.id) },
    ],
    materials: [
      { key: "type", label: "类型", values: e => [e.type], display: label(L.materials.type), order: Object.keys(L.materials.type) },
      { key: "category", label: "分类", values: e => [e.category], display: v => v },
    ],
  },
  cardMeta: (kind, e) =>
    kind === "cases" ? { subtitle: e.subtitle, chips: [L.cases.category[e.category] ?? e.category, e.country] }
      : kind === "patterns" ? { chips: [e.category, ...e.experienceTypes.map((t: string) => L.patterns.experienceTypes[t] ?? t)] }
        : { chips: [L.materials.type[e.type] ?? e.type, e.category] },
  compareRows: [
    { label: "摘要", render: e => e.summary },
    { label: "分类 · 地区", render: e => `${L.cases.category[e.category] ?? e.category} · ${e.country}` },
    { label: "设计重点", render: e => e.productFocus },
    { label: "主题与情绪", render: e => e.theme },
    { label: "设计机制", render: e => <Bullets items={e.principles} /> },
    { label: "交互", render: e => <Bullets items={e.interaction} /> },
    ...Object.entries(L.cases.composition as Record<string, string>).map(([k, name]) => ({ label: `构成 · ${name}`, render: (e: Entry) => e.composition?.[k] })),
    { label: "色板", render: e => <Palette colors={e.tokens?.palette} /> },
    { label: "Token", render: e => <KV data={{ type: e.tokens?.type, layout: e.tokens?.layout, motion: e.tokens?.motion }} labels={{ type: "字体", layout: "布局", motion: "动效" }} /> },
    { label: "主题行为", render: e => `${L.cases["themeBehavior.mode"][e.themeBehavior?.mode] ?? ""}：${e.themeBehavior?.control ?? ""}` },
    { label: "声音行为", render: e => `${L.cases["soundBehavior.kind"][e.soundBehavior?.kind] ?? ""}：${e.soundBehavior?.control ?? ""}` },
    { label: "适用场景", render: e => <Bullets items={e.useCases} /> },
    { label: "避用", render: e => <Bullets items={e.avoid} /> },
    { label: "约束", render: e => <Bullets items={e.constraints} /> },
    { label: "改造练习", render: e => <Prose text={e.exercise} /> },
  ],
  favorites: {
    storageKey: "web-atlas-favorites",
    fileName: "web-atlas-favorites.json",
    serialize: fav => ({ format: "web-atlas-favorites", ...fav }),
    exportJson: fav => ({ format: "web-atlas-favorites", ...fav }),
    parse: json => {
      const o = json as Record<string, unknown>;
      if (!o || o.format !== "web-atlas-favorites" || !KINDS.every(k => Array.isArray(o[k]))) throw new Error("不是 web-atlas-favorites 格式");
      return Object.fromEntries(KINDS.map(k => [k, (o[k] as unknown[]).filter(x => typeof x === "string")])) as Record<Kind, string[]>;
    },
  },
  detail: {
    cases: e => <CaseDetail e={e} />,
    patterns: e => <PatternDetail e={e} />,
    materials: e => <MaterialDetail e={e} />,
  },
  tools: [
    { id: "lab", title: "设计实验室", description: "亲手切换方案，调配颜色、字体与留白，观察这些元素怎样配合。", icon: <FlaskConical /> },
    { id: "workflow", title: "Agent 工作流", description: "围绕需求比较设计方向，再取得完整说明、Prompt、研究与源码，作为构建依据。", icon: <Workflow /> },
  ],
  // Demo 中“返回参考库”指向原站 index.html#style/<id>。
  legacyHash: hash => {
    const id = hash.split("/").pop() ?? "";
    for (const k of KINDS) if (byId(data[k], id)) return `/${k}/${id}`;
    return null;
  },
};

mountAtlas(config);
