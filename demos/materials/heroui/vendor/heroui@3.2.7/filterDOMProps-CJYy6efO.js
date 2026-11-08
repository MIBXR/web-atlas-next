// node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var e = /* @__PURE__ */ new Set(["id"]), t = /* @__PURE__ */ new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]), n = /* @__PURE__ */ new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]), r = /* @__PURE__ */ new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate",
	"suppressHydrationWarning"
]), i = /* @__PURE__ */ new Set(/* @__PURE__ */ "onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart".split(".")), a = /^(data-.*)$/;
function o(o, s = {}) {
	let { labelable: c, isLink: l, global: u, events: d = u, propNames: f } = s, p = {};
	for (let s in o) Object.prototype.hasOwnProperty.call(o, s) && (e.has(s) || c && t.has(s) || l && n.has(s) || u && r.has(s) || d && (i.has(s) || s.endsWith("Capture") && i.has(s.slice(0, -7))) || f?.has(s) || a.test(s)) && (p[s] = o[s]);
	return p;
}
export { o as t };
