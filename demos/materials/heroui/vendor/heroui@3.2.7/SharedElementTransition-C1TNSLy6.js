import { r as e, s as t, u as n } from "./utils-UBVJ5JR_.js";
import { t as r } from "./react-dom-Dipvgcxr.js";
import { i, n as a } from "./jsx-runtime-C1t0izHF.js";
import { t as o } from "./useLayoutEffect-Bx2X4QEP.js";
// node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var s = /* @__PURE__ */ i(r(), 1), c = /* @__PURE__ */ i(a(), 1), l = /*#__PURE__*/ (0, c.createContext)(null);
function u(e) {
	let t = (0, c.useRef)({});
	return /*#__PURE__*/ c.createElement(l.Provider, { value: t }, e.children);
}
var d = /*#__PURE__*/ (0, c.forwardRef)(function(r, i) {
	let { name: a, isVisible: u = !0, children: d, className: f, style: p, render: m, ...h } = r, [g, _] = (0, c.useState)(u ? "visible" : "hidden"), v = (0, c.useContext)(l);
	if (!v) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
	u && g === "hidden" && _("visible"), i = n(i), o(() => {
		let e = i.current, t = v.current, n = t[a], r = null;
		if (e && u && n) {
			_("visible");
			let i = e.getAnimations(), o = n.style.map(([t, r]) => {
				let i = e.style[t];
				if (t === "translate") {
					let t = n.rect, r = e.getBoundingClientRect(), i = t.left - r?.left, a = t.top - r?.top;
					e.style.translate = `${i}px ${a}px`;
				} else e.style[t] = r;
				return [t, i];
			});
			for (let t of e.getAnimations()) i.includes(t) || t.cancel();
			r = requestAnimationFrame(() => {
				r = null;
				for (let [t, n] of o) e.style[t] = n;
			}), delete t[a];
		} else e && u && !n ? (queueMicrotask(() => (0, s.flushSync)(() => _("entering"))), r = requestAnimationFrame(() => {
			r = null, _("visible");
		})) : e && !u && queueMicrotask(() => {
			t[a] ? (delete t[a], (0, s.flushSync)(() => _("exiting")), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => _("hidden")).catch(() => {})) : _("hidden");
		});
		return () => {
			if (r != null && cancelAnimationFrame(r), e && e.isConnected && !e.hasAttribute("data-exiting")) {
				let n = window.getComputedStyle(e);
				if (n.transitionProperty !== "none") {
					let r = n.transitionProperty.split(/\s*,\s*/);
					t[a] = {
						rect: e.getBoundingClientRect(),
						style: r.map((e) => [e, n[e]])
					};
				}
			}
		};
	}, [
		i,
		v,
		a,
		u
	]);
	let y = e({
		children: d,
		className: f,
		style: p,
		render: m,
		values: {
			isEntering: g === "entering",
			isExiting: g === "exiting"
		}
	});
	return g === "hidden" ? null : /*#__PURE__*/ c.createElement(t.div, {
		...h,
		...y,
		ref: i,
		"data-entering": g === "entering" || void 0,
		"data-exiting": g === "exiting" || void 0
	});
});
export { d as n, u as t };
