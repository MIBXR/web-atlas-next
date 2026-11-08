import { t as e } from "./filterDOMProps-CJYy6efO.js";
import { d as t } from "./utils-UBVJ5JR_.js";
import { t as n } from "./useLabel-xEmSShhj.js";
import { t as r } from "./useNumberFormatter-Bqt6BhxT.js";
import { t as i } from "./number-DEd1Mp8h.js";
// node_modules/react-aria/dist/private/progress/useProgressBar.mjs
function a(a) {
	let { value: o = 0, minValue: s = 0, maxValue: c = 100, valueLabel: l, isIndeterminate: u, formatOptions: d = { style: "percent" } } = a, f = e(a, { labelable: !0 }), { labelProps: p, fieldProps: m } = n({
		...a,
		labelElementType: "span"
	});
	o = i(o, s, c);
	let h = c - s, g = h === 0 ? 0 : (o - s) / h, _ = r(d);
	if (!u && !l) {
		let e = d.style === "percent" ? g : o;
		l = _.format(e);
	}
	return {
		progressBarProps: t(f, {
			...m,
			"aria-valuenow": u ? void 0 : o,
			"aria-valuemin": s,
			"aria-valuemax": c,
			"aria-valuetext": u ? void 0 : l,
			role: "progressbar"
		}),
		labelProps: p
	};
}
export { a as t };
