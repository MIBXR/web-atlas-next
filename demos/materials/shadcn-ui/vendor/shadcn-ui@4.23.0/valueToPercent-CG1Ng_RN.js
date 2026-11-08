import { t as e } from "./stringifyLocale-C6rrgktz.js";
// node_modules/@base-ui/react/utils/formatNumber.mjs
var t = /* @__PURE__ */ new Map();
function n(n, r) {
	let i = JSON.stringify({
		locale: e(n),
		options: r
	}), a = t.get(i);
	if (a) return a;
	let o = new Intl.NumberFormat(n, r);
	return t.set(i, o), o;
}
function r(e, t, r) {
	return e == null ? "" : n(t, r).format(e);
}
function i(e, t, n) {
	return e == null ? "" : n ? r(e, t, n) : r(e / 100, t, { style: "percent" });
}
// node_modules/@base-ui/react/utils/valueToPercent.mjs
function a(e, t, n) {
	return (e - t) * 100 / (n - t);
}
export { r as n, i as r, a as t };
