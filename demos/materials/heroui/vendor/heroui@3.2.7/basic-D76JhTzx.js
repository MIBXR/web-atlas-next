import { t as e } from "./label-Wq1WAbJ3.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { t as a } from "./ProgressBar-rUJ7j1jx.js";
import { r as o, t as s } from "./compose-ClIOcrt6.js";
import { t as c } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/progress-bar/progress-bar.styles.js
var l = t({
	defaultVariants: {
		color: "accent",
		size: "md"
	},
	slots: {
		base: "progress-bar",
		fill: "progress-bar__fill",
		output: "progress-bar__output",
		track: "progress-bar__track"
	},
	variants: {
		color: {
			accent: { base: "progress-bar--accent" },
			danger: { base: "progress-bar--danger" },
			default: { base: "progress-bar--default" },
			success: { base: "progress-bar--success" },
			warning: { base: "progress-bar--warning" }
		},
		size: {
			lg: { base: "progress-bar--lg" },
			md: { base: "progress-bar--md" },
			sm: { base: "progress-bar--sm" }
		}
	}
}), u = /* @__PURE__ */ n(r(), 1), d = i(), f = /*#__PURE__*/ (0, u.createContext)({}), p = ({ children: e, className: t, color: n, size: r, ...i }) => {
	let s = u.useMemo(() => l({
		color: n,
		size: r
	}), [n, r]);
	return /*#__PURE__*/ (0, d.jsx)(a, {
		"data-slot": "progress-bar",
		...i,
		className: o(t, s.base()),
		children: (t) => /*#__PURE__*/ (0, d.jsx)(f, {
			value: {
				slots: s,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
p.displayName = "HeroUI.ProgressBar";
var m = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, u.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(c.span, {
		className: s(r?.output, t),
		"data-slot": "progress-bar-output",
		...n,
		children: e ?? i?.valueText
	});
};
m.displayName = "HeroUI.ProgressBar.Output";
var h = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, u.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(c.div, {
		className: s(r?.track, t),
		"data-slot": "progress-bar-track",
		...n,
		children: e
	});
};
h.displayName = "HeroUI.ProgressBar.Track";
var g = ({ className: e, style: t, ...n }) => {
	let { slots: r, state: i } = (0, u.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(c.div, {
		className: s(r?.fill, e),
		"data-slot": "progress-bar-fill",
		style: {
			...t,
			width: i?.isIndeterminate ? void 0 : `${i?.percentage ?? 0}%`
		},
		...n
	});
};
g.displayName = "HeroUI.ProgressBar.Fill";
// node_modules/@heroui/react/dist/components/progress-bar/index.js
var _ = Object.assign(p, {
	Root: p,
	Output: m,
	Track: h,
	Fill: g
});
// upstream/demos/en/progress-bar/basic.tsx
function v() {
	return /* @__PURE__ */ (0, d.jsxs)(_, {
		"aria-label": "Loading",
		className: "w-64",
		value: 60,
		children: [
			/* @__PURE__ */ (0, d.jsx)(e, { children: "Loading" }),
			/* @__PURE__ */ (0, d.jsx)(_.Output, {}),
			/* @__PURE__ */ (0, d.jsx)(_.Track, { children: /* @__PURE__ */ (0, d.jsx)(_.Fill, {}) })
		]
	});
}
export { v as Basic };
