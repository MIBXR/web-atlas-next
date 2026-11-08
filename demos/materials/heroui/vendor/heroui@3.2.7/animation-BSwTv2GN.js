import { f as e } from "./utils-UBVJ5JR_.js";
import { w as t } from "./useKeyboard-CqNSkGJ-.js";
import { i as n } from "./useHover-DxA7bNQs.js";
import { t as r } from "./useLayoutEffect-Bx2X4QEP.js";
import { t as i } from "./react-dom-Dipvgcxr.js";
import { i as a, n as o } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/animation.mjs
var s = /* @__PURE__ */ a(i(), 1), c = /* @__PURE__ */ a(o(), 1);
function l(n, i = !0, a) {
	let [o, s] = (0, c.useState)(!0), l = o && i;
	return r(() => {
		if (!i && n.current) return e(t(n.current, "opacity", "0"), t(n.current, "clip", "rect(0 0 0 0)"), t(n.current, "clip-path", "inset(50%)"), t(n.current, "mask-image", "linear-gradient(#0000, #0000)"));
	}, [n, i]), r(() => {
		if (l && n.current && "getAnimations" in n.current) for (let e of n.current.getAnimations()) e instanceof CSSTransition && e.cancel();
	}, [n, l]), d(n, l, a, (0, c.useCallback)(() => s(!1), [])), l;
}
function u(e, t, n) {
	let [r, i] = (0, c.useState)(t ? "open" : "closed");
	switch (r) {
		case "open":
			t || i("exiting");
			break;
		case "closed":
		case "exiting": t && i("open");
	}
	let a = r === "exiting";
	return d(e, a, n, (0, c.useCallback)(() => {
		i((e) => e === "exiting" ? "closed" : e);
	}, [])), a;
}
function d(e, t, i, a) {
	let o = (0, c.useRef)(null), l = n(i);
	r(() => {
		if (t && e.current && o.current !== t) {
			if (o.current = t, !("getAnimations" in e.current)) {
				a();
				return;
			}
			let n = l?.(e.current), r = e.current.getAnimations().filter((e) => (typeof DocumentTimeline > "u" || e.timeline instanceof DocumentTimeline) && e.playState === "running");
			if (r.length === 0 && !n) {
				a();
				return;
			}
			Promise.all([n, ...r.map((e) => e.finished)]).then(() => {
				(0, s.flushSync)(() => {
					a();
				});
			}).catch(() => {});
		}
		o.current = t;
	}, [
		e,
		t,
		a
	]);
}
export { l as n, u as t };
