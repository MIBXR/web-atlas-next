import { t as e } from "./label-Wq1WAbJ3.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { d as a, i as o, n as s, r as c, s as l } from "./utils-UBVJ5JR_.js";
import { t as u } from "./Label-CJNHsoCN.js";
import { t as d } from "./useProgressBar-CRPxYGaB.js";
import { t as f } from "./number-DEd1Mp8h.js";
import { t as p } from "./filterDOMProps-CJYy6efO.js";
import { r as m, t as h } from "./compose-ClIOcrt6.js";
import { t as g } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/meter/meter.styles.js
var _ = t({
	defaultVariants: {
		color: "accent",
		size: "md"
	},
	slots: {
		base: "meter",
		fill: "meter__fill",
		output: "meter__output",
		track: "meter__track"
	},
	variants: {
		color: {
			accent: { base: "meter--accent" },
			danger: { base: "meter--danger" },
			default: { base: "meter--default" },
			success: { base: "meter--success" },
			warning: { base: "meter--warning" }
		},
		size: {
			lg: { base: "meter--lg" },
			md: { base: "meter--md" },
			sm: { base: "meter--sm" }
		}
	}
});
// node_modules/react-aria/dist/private/meter/useMeter.mjs
function v(e) {
	let { progressBarProps: t, labelProps: n } = d(e);
	return {
		meterProps: {
			...t,
			role: "meter"
		},
		labelProps: n
	};
}
// node_modules/react-aria-components/dist/private/Meter.mjs
var y = /* @__PURE__ */ n(r(), 1), b = /*#__PURE__*/ (0, y.createContext)(null), x = /*#__PURE__*/ (0, y.forwardRef)(function(e, t) {
	[e, t] = s(e, t, b);
	let { value: n = 0, minValue: r = 0, maxValue: i = 100 } = e;
	n = f(n, r, i);
	let d = i - r, [m, h] = o(!e["aria-label"] && !e["aria-labelledby"]), { meterProps: g, labelProps: _ } = v({
		...e,
		label: h
	}), x = d === 0 ? 0 : (n - r) / d * 100, S = c({
		...e,
		defaultClassName: "react-aria-Meter",
		values: {
			percentage: x,
			valueText: g["aria-valuetext"]
		}
	}), C = p(e, { global: !0 });
	return /*#__PURE__*/ y.createElement(l.div, {
		...a(C, S, g),
		ref: t,
		slot: e.slot || void 0
	}, /*#__PURE__*/ y.createElement(u.Provider, { value: {
		..._,
		ref: m,
		elementType: "span"
	} }, S.children));
}), S = i(), C = /*#__PURE__*/ (0, y.createContext)({}), w = ({ children: e, className: t, color: n, size: r, ...i }) => {
	let a = y.useMemo(() => _({
		color: n,
		size: r
	}), [n, r]);
	return /*#__PURE__*/ (0, S.jsx)(x, {
		"data-slot": "meter",
		...i,
		className: m(t, a.base()),
		children: (t) => /*#__PURE__*/ (0, S.jsx)(C, {
			value: {
				slots: a,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
w.displayName = "HeroUI.Meter";
var T = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, y.use)(C);
	return /*#__PURE__*/ (0, S.jsx)(g.span, {
		className: h(r?.output, t),
		"data-slot": "meter-output",
		...n,
		children: e ?? i?.valueText
	});
};
T.displayName = "HeroUI.Meter.Output";
var E = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, y.use)(C);
	return /*#__PURE__*/ (0, S.jsx)(g.div, {
		className: h(r?.track, t),
		"data-slot": "meter-track",
		...n,
		children: e
	});
};
E.displayName = "HeroUI.Meter.Track";
var D = ({ className: e, style: t, ...n }) => {
	let { slots: r, state: i } = (0, y.use)(C);
	return /*#__PURE__*/ (0, S.jsx)(g.div, {
		className: h(r?.fill, e),
		"data-slot": "meter-fill",
		style: {
			...t,
			width: `${i?.percentage ?? 0}%`
		},
		...n
	});
};
D.displayName = "HeroUI.Meter.Fill";
// node_modules/@heroui/react/dist/components/meter/index.js
var O = Object.assign(w, {
	Root: w,
	Output: T,
	Track: E,
	Fill: D
});
// upstream/demos/en/meter/basic.tsx
function k() {
	return /* @__PURE__ */ (0, S.jsxs)(O, {
		"aria-label": "Storage",
		className: "w-64",
		value: 60,
		children: [
			/* @__PURE__ */ (0, S.jsx)(e, { children: "Storage" }),
			/* @__PURE__ */ (0, S.jsx)(O.Output, {}),
			/* @__PURE__ */ (0, S.jsx)(O.Track, { children: /* @__PURE__ */ (0, S.jsx)(O.Fill, {}) })
		]
	});
}
export { k as Basic };
