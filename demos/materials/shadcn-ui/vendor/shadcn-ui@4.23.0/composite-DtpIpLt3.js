import { f as e } from "./floating-ui.utils.dom-Dz-TRm4-.js";
// node_modules/@base-ui/react/internals/composite/composite.mjs
var t = "ArrowUp", n = "ArrowDown", r = "ArrowLeft", i = "ArrowRight", a = "Home", o = "PageUp", s = "PageDown", c = /* @__PURE__ */ new Set([r, i]), l = /* @__PURE__ */ new Set([
	r,
	i,
	a,
	"End"
]), u = /* @__PURE__ */ new Set([t, n]), d = /* @__PURE__ */ new Set([
	t,
	n,
	a,
	"End"
]), f = /* @__PURE__ */ new Set([...c, ...u]), p = /* @__PURE__ */ new Set([
	...f,
	a,
	"End"
]), m = "Shift", h = /* @__PURE__ */ new Set([
	m,
	"Control",
	"Alt",
	"Meta"
]);
function g(t) {
	return e(t) && t.tagName === "INPUT";
}
function _(t) {
	return !!(g(t) && t.selectionStart != null || e(t) && t.tagName === "TEXTAREA");
}
function v(e, t, n, r) {
	if (!e || !t || !t.scrollTo) return;
	let i = e.scrollLeft, a = e.scrollTop, o = e.clientWidth < e.scrollWidth, s = e.clientHeight < e.scrollHeight;
	if (o && r !== "vertical") {
		let r = y(e, t, "left"), a = b(e), o = b(t);
		n === "ltr" && (r + t.offsetWidth + o.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight ? i = r + t.offsetWidth + o.scrollMarginRight - e.clientWidth + a.scrollPaddingRight : r - o.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft && (i = r - o.scrollMarginLeft - a.scrollPaddingLeft)), n === "rtl" && (r - o.scrollMarginRight < e.scrollLeft + a.scrollPaddingLeft ? i = r - o.scrollMarginLeft - a.scrollPaddingLeft : r + t.offsetWidth + o.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight && (i = r + t.offsetWidth + o.scrollMarginRight - e.clientWidth + a.scrollPaddingRight));
	}
	if (s && r !== "horizontal") {
		let n = y(e, t, "top"), r = b(e), i = b(t);
		n - i.scrollMarginTop < e.scrollTop + r.scrollPaddingTop ? a = n - i.scrollMarginTop - r.scrollPaddingTop : n + t.offsetHeight + i.scrollMarginBottom > e.scrollTop + e.clientHeight - r.scrollPaddingBottom && (a = n + t.offsetHeight + i.scrollMarginBottom - e.clientHeight + r.scrollPaddingBottom);
	}
	e.scrollTo({
		left: i,
		top: a,
		behavior: "auto"
	});
}
function y(e, t, n) {
	let r = n === "left" ? "offsetLeft" : "offsetTop", i = 0;
	for (; t.offsetParent && (i += t[r], t.offsetParent !== e);) t = t.offsetParent;
	return i;
}
function b(e) {
	let t = getComputedStyle(e);
	return {
		scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
		scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
		scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
		scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
		scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
		scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
		scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
		scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
	};
}
export { v as _, t as a, c, s as d, o as f, _ as g, d as h, i, l, u as m, f as n, p as o, m as p, r, a as s, n as t, h as u };
