import { m as e } from "./utils-UBVJ5JR_.js";
import { t } from "./useLabels-IW2w8qqV.js";
// node_modules/react-aria/dist/private/label/useLabel.mjs
function n(n) {
	let { id: r, label: i, "aria-labelledby": a, "aria-label": o, labelElementType: s = "label" } = n;
	r = e(r);
	let c = e(), l = {};
	i && (a = a ? `${c} ${a}` : c, l = {
		id: c,
		htmlFor: s === "label" ? r : void 0
	});
	let u = t({
		id: r,
		"aria-label": o,
		"aria-labelledby": a
	});
	return {
		labelProps: l,
		fieldProps: u
	};
}
export { n as t };
