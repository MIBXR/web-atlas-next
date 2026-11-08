import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./ProgressBar-rUJ7j1jx.js";
import { r as a, t as o } from "./compose-ClIOcrt6.js";
import { t as s } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/progress-circle/progress-circle.styles.js
var c = e({
	defaultVariants: {
		color: "accent",
		size: "md"
	},
	slots: {
		base: "progress-circle",
		fillCircle: "progress-circle__fill-circle",
		track: "progress-circle__track",
		trackCircle: "progress-circle__track-circle"
	},
	variants: {
		color: {
			accent: { base: "progress-circle--accent" },
			danger: { base: "progress-circle--danger" },
			default: { base: "progress-circle--default" },
			success: { base: "progress-circle--success" },
			warning: { base: "progress-circle--warning" }
		},
		size: {
			lg: { base: "progress-circle--lg" },
			md: { base: "progress-circle--md" },
			sm: { base: "progress-circle--sm" }
		}
	}
}), l = /* @__PURE__ */ t(n(), 1), u = r(), d = 4, f = 18, p = f - d / 2, m = 2 * Math.PI * p, h = /*#__PURE__*/ (0, l.createContext)({}), g = ({ children: e, className: t, color: n, size: r, ...o }) => {
	let s = l.useMemo(() => c({
		color: n,
		size: r
	}), [n, r]);
	return /*#__PURE__*/ (0, u.jsx)(i, {
		"data-slot": "progress-circle",
		...o,
		className: a(t, s.base()),
		children: (t) => /*#__PURE__*/ (0, u.jsx)(h, {
			value: {
				slots: s,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
g.displayName = "HeroUI.ProgressCircle";
var _ = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, l.use)(h);
	return /*#__PURE__*/ (0, u.jsx)(s.svg, {
		className: o(r?.track, t),
		"data-slot": "progress-circle-track",
		fill: "none",
		viewBox: "0 0 36 36",
		...n,
		children: e
	});
};
_.displayName = "HeroUI.ProgressCircle.Track";
var v = ({ className: e, ...t }) => {
	let { slots: n } = (0, l.use)(h);
	return /*#__PURE__*/ (0, u.jsx)(s.circle, {
		className: o(n?.trackCircle, e),
		cx: f,
		cy: f,
		"data-slot": "progress-circle-track-circle",
		r: p,
		strokeWidth: d,
		...t
	});
};
v.displayName = "HeroUI.ProgressCircle.TrackCircle";
var y = ({ className: e, ...t }) => {
	let { slots: n, state: r } = (0, l.use)(h), i = r?.percentage ?? 0, a = r?.isIndeterminate ?? !1, c = m - i / 100 * m;
	return /*#__PURE__*/ (0, u.jsx)(s.circle, {
		className: o(n?.fillCircle, e),
		cx: f,
		cy: f,
		"data-slot": "progress-circle-fill-circle",
		r: p,
		strokeDasharray: m,
		strokeDashoffset: a ? m * .75 : c,
		strokeLinecap: "round",
		strokeWidth: d,
		transform: `rotate(-90 ${f} ${f})`,
		...t
	});
};
y.displayName = "HeroUI.ProgressCircle.FillCircle";
// node_modules/@heroui/react/dist/components/progress-circle/index.js
var b = Object.assign(g, {
	Root: g,
	Track: _,
	TrackCircle: v,
	FillCircle: y
});
// upstream/demos/en/progress-circle/basic.tsx
function x() {
	return /* @__PURE__ */ (0, u.jsx)(b, {
		"aria-label": "Loading",
		value: 60,
		children: /* @__PURE__ */ (0, u.jsxs)(b.Track, { children: [/* @__PURE__ */ (0, u.jsx)(b.TrackCircle, {}), /* @__PURE__ */ (0, u.jsx)(b.FillCircle, {})] })
	});
}
export { x as Basic };
