import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { H as n, L as r } from "./useKeyboard-CqNSkGJ-.js";
import { t as i } from "./useLayoutEffect-Bx2X4QEP.js";
// node_modules/react-aria/dist/private/utils/isScrollable.mjs
var a = /* @__PURE__ */ e(t(), 1);
function o(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== "hidden" && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
// node_modules/react-aria/dist/private/utils/getScrollParents.mjs
function s(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (o(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
// node_modules/react-aria/dist/private/utils/useDescription.mjs
var c = 0, l = /* @__PURE__ */ new Map();
function u(e) {
	let [t, n] = (0, a.useState)();
	return i(() => {
		if (!e) return;
		let t = l.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${c++}`;
			n(r);
			let i = document.createElement("div");
			i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, l.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), l.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
// node_modules/react-aria/dist/private/utils/scrollIntoView.mjs
function d(e, t, n = {}) {
	e !== t && f(e, t, t.getBoundingClientRect(), n);
}
function f(e, t, i, a = {}) {
	let { block: o = "nearest", inline: s = "nearest" } = a, c = e.scrollTop, l = e.scrollLeft, u = e.getBoundingClientRect(), d = window.getComputedStyle(t), f = window.getComputedStyle(e), p = document.scrollingElement || document.documentElement, m = e === p, h = e === p ? 0 : u.top, g = e === p ? e.clientHeight : u.bottom, _ = e === p ? 0 : u.left, v = e === p ? e.clientWidth : u.right, y = parseFloat(d.scrollMarginTop) || 0, b = parseFloat(d.scrollMarginBottom) || 0, x = parseFloat(d.scrollMarginLeft) || 0, S = parseFloat(d.scrollMarginRight) || 0, C = parseFloat(f.scrollPaddingTop) || 0, w = parseFloat(f.scrollPaddingBottom) || 0, T = parseFloat(f.scrollPaddingLeft) || 0, E = parseFloat(f.scrollPaddingRight) || 0, D = parseFloat(f.borderTopWidth) || 0, O = parseFloat(f.borderBottomWidth) || 0, k = parseFloat(f.borderLeftWidth) || 0, A = parseFloat(f.borderRightWidth) || 0, j = i.top - y, M = i.bottom + b, N = i.left - x, P = i.right + S, F = e === p ? 0 : k + A, I = e === p ? 0 : D + O, L = e === p ? 0 : e.offsetWidth - e.clientWidth - F, R = e === p ? 0 : e.offsetHeight - e.clientHeight - I, z = h + (m ? 0 : D) + C, B = g - (m ? 0 : O) - w - R, V = _ + (m ? 0 : k) + T, H = v - (m ? 0 : A) - E;
	n() && r() || f.direction === "ltr" ? H -= L : f.direction === "rtl" && (V += L);
	let U = j < z || M > B, W = N < V || P > H;
	if (U && o === "start") c += j - z;
	else if (U && o === "center") c += (j + M) / 2 - (z + B) / 2;
	else if (U && o === "end") c += M - B;
	else if (U && o === "nearest") {
		let e = j - z, t = M - B;
		c += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (W && s === "start") l += N - V;
	else if (W && s === "center") l += (N + P) / 2 - (V + H) / 2;
	else if (W && s === "end") l += P - H;
	else if (W && s === "nearest") {
		let e = N - V, t = P - H;
		l += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	e.scrollTo({
		left: l,
		top: c
	});
}
function p(e, t = {}) {
	let { containingElement: n } = t;
	if (e && e.isConnected) {
		let t = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(t).overflow !== "hidden") {
			let { left: t, top: r } = e.getBoundingClientRect();
			e?.scrollIntoView?.({ block: "nearest" });
			let { left: i, top: a } = e.getBoundingClientRect();
			(Math.abs(t - i) > 1 || Math.abs(r - a) > 1) && (n?.scrollIntoView?.({
				block: "center",
				inline: "center"
			}), e.scrollIntoView?.({ block: "nearest" }));
		} else {
			let { left: t, top: r } = e.getBoundingClientRect(), i = s(e, !0);
			for (let t of i) d(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? s(n, !0) : [];
				for (let e of i) d(e, n, {
					block: "center",
					inline: "center"
				});
				for (let t of s(e, !0)) d(t, e);
			}
		}
	}
}
export { o as i, p as n, u as r, d as t };
