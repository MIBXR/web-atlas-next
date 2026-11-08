import { d as e, n as t, s as n } from "./utils-UBVJ5JR_.js";
import { t as r } from "./filterDOMProps-CJYy6efO.js";
import { d as i, t as a } from "./CollectionBuilder-DSfSS-yC.js";
import { i as o, n as s } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/separator/useSeparator.mjs
function c(e) {
	let t = r(e, { labelable: !0 }), n;
	return e.orientation === "vertical" && (n = "vertical"), e.elementType === "hr" ? { separatorProps: t } : { separatorProps: {
		...t,
		role: "separator",
		"aria-orientation": n
	} };
}
// node_modules/react-aria-components/dist/private/Separator.mjs
var l = /* @__PURE__ */ o(s(), 1), u = /*#__PURE__*/ (0, l.createContext)({}), d = class extends i {
	static {
		this.type = "separator";
	}
	filter(e, t) {
		let n = t.getItem(this.prevKey);
		if (n && n.type !== "separator") {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
}, f = /*#__PURE__*/ a(d, function(i, a) {
	[i, a] = t(i, a, u);
	let { elementType: o, orientation: s, style: d, className: f, slot: p, ...m } = i, h = o || "hr";
	h === "hr" && s === "vertical" && (h = "div");
	let g = n[h], { separatorProps: _ } = c({
		...m,
		elementType: o,
		orientation: s
	}), v = r(i, { global: !0 });
	return /*#__PURE__*/ l.createElement(g, {
		render: i.render,
		...e(v, _),
		style: d,
		className: f ?? "react-aria-Separator",
		ref: a,
		slot: p || void 0
	});
});
export { u as n, f as t };
