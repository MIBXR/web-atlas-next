import { B as e, E as t, L as n, O as r, S as i, b as a, h as o, z as s } from "./useKeyboard-CqNSkGJ-.js";
import { t as c } from "./getMetaValue-BWDF30Qb.js";
// node_modules/react-aria/dist/private/utils/constants.mjs
var l = "react-aria-clear-focus", u = "react-aria-focus", d = 100, f = 600, p = {
	isOpen: !1,
	screenWidth: 0,
	screenHeight: 0,
	screenAngle: 0,
	screenTimeout: 0,
	startTimeStamp: 0,
	endTimeStamp: 0,
	resizeTimeStamp: 0,
	resizeTimeout: 0
}, m = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function h() {
	let e = Number(window.visualViewport?.width ?? window.innerWidth), t = Number(window.visualViewport?.height ?? window.innerHeight), n = Number(window.visualViewport?.scale ?? 1);
	return {
		width: e * n,
		height: t * n,
		angle: window.screen.orientation?.angle ?? 0
	};
}
function g(e) {
	p.resizeTimeStamp <= e.timeStamp + 50 && (p.resizeTimeStamp = e.timeStamp + 150, window.clearTimeout(p.resizeTimeout), p.resizeTimeout = window.setTimeout(_, 150));
}
function _() {
	let t = c("viewport");
	if (e() && t?.includes("overlays-content")) return;
	let n = performance.now(), r = h(), i = n - p.startTimeStamp, o = p.screenHeight - r.height, s = p.screenAngle - r.angle;
	Math.abs(s) % 180 && p.screenWidth - r.height < d && (p.screenWidth = r.width, p.screenHeight = r.height, p.screenAngle = r.angle, o = 0), i > f && (window.clearTimeout(p.screenTimeout), p.screenTimeout = window.setTimeout(() => {
		let e = S(document.hasFocus() ? a() : null), t = h();
		Math.abs(p.screenAngle - t.angle) % 180 || p.isOpen && e || (p.screenWidth = t.width, p.screenHeight = t.height, p.screenAngle = t.angle, p.isOpen = !1);
	}, f)), i <= f && o >= d && (p.endTimeStamp = n), p.isOpen = o >= d;
}
function v() {
	let e = h(), t = p.screenAngle - e.angle;
	if (Math.abs(t) % 180 && !p.isOpen) {
		let e = p.screenWidth;
		p.screenWidth = p.screenHeight, p.screenHeight = e;
	}
	p.isOpen || (p.screenAngle = e.angle);
}
function y(e) {
	let t = S(i(e)), n = performance.now(), r = h(), a = p.screenHeight - r.height;
	a < d && t && (p.screenWidth = r.width, p.screenHeight = r.height, p.screenAngle = r.angle, p.startTimeStamp = n), t && window.clearTimeout(p.screenTimeout), a >= d && t && (p.endTimeStamp = n);
}
function b() {
	let e = h();
	r(window.visualViewport, "resize", n() ? _ : g), r(window.screen.orientation, "change", v), r(window, "focus", y, {
		capture: !0,
		passive: !0
	}), p.screenWidth = e.width, p.screenHeight = e.height, p.screenAngle = e.angle;
}
typeof document < "u" && (document.readyState === "loading" ? r(document, "DOMContentLoaded", b) : b());
function x() {
	let t = c("viewport");
	return e() && t?.includes("overlays-content") ? !1 : p.isOpen ? !0 : p.startTimeStamp ? p.endTimeStamp >= p.startTimeStamp ? !0 : performance.now() - p.startTimeStamp <= f ? p.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : !1 : window.navigator.maxTouchPoints > 0;
}
function S(e) {
	if (!(e instanceof Element) || !o(e)) return !1;
	let t = e instanceof HTMLTextAreaElement, n = e instanceof HTMLElement && e.isContentEditable, r = e instanceof HTMLInputElement && !m.has(e.type);
	return t || n || r;
}
function C(e) {
	return s() ? e.metaKey : e.ctrlKey;
}
function w() {
	return p.isOpen;
}
// node_modules/react-aria/dist/private/focus/virtualFocus.mjs
function T(e) {
	let n = O(t(e));
	n !== e && (n && E(n, e), e && D(e, n));
}
function E(e, t) {
	e.dispatchEvent(new FocusEvent("blur", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusout", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function D(e, t) {
	e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusin", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function O(e) {
	let t = a(e), n = t?.getAttribute("aria-activedescendant");
	return n && e.getElementById(n) || t;
}
export { C as a, S as c, T as i, l, E as n, x as o, O as r, w as s, D as t, u };
