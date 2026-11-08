import { d as e, i as t, n, r, s as i } from "./utils-UBVJ5JR_.js";
import { t as a } from "./Label-CJNHsoCN.js";
import { t as o } from "./useProgressBar-CRPxYGaB.js";
import { t as s } from "./number-DEd1Mp8h.js";
import { t as c } from "./filterDOMProps-CJYy6efO.js";
import { i as l, n as u } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/ProgressBar.mjs
var d = /* @__PURE__ */ l(u(), 1), f = /*#__PURE__*/ (0, d.createContext)(null), p = /*#__PURE__*/ (0, d.forwardRef)(function(l, u) {
	[l, u] = n(l, u, f);
	let { value: p = 0, minValue: m = 0, maxValue: h = 100, isIndeterminate: g = !1 } = l;
	p = s(p, m, h);
	let [_, v] = t(!l["aria-label"] && !l["aria-labelledby"]), { progressBarProps: y, labelProps: b } = o({
		...l,
		label: v
	}), x = h - m, S;
	g || (S = x === 0 ? 0 : (p - m) / x * 100);
	let C = r({
		...l,
		defaultClassName: "react-aria-ProgressBar",
		values: {
			percentage: S,
			valueText: y["aria-valuetext"],
			isIndeterminate: g
		}
	}), w = c(l, { global: !0 });
	return /*#__PURE__*/ d.createElement(i.div, {
		...e(w, C, y),
		ref: u,
		slot: l.slot || void 0
	}, /*#__PURE__*/ d.createElement(a.Provider, { value: {
		...b,
		ref: _,
		elementType: "span"
	} }, C.children));
});
export { f as n, p as t };
