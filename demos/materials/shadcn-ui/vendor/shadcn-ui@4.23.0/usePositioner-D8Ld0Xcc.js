import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { d as i, o as a, t as o } from "./useRenderElement-Bc91YjHo.js";
import { t as s } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as c } from "./DirectionContext-CBHZ_yWZ.js";
import { n as l } from "./useBaseUiId-BwhhMxTY.js";
import { _ as u, a as d, c as f, d as p, f as m, h, i as g, l as _, n as v, o as y, p as b, r as x, s as S, t as C, u as w, v as T, y as E } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as D } from "./useValueAsRef-0u0FW33N.js";
import { t as O } from "./owner-C-FapX6G.js";
import { C as k, D as A, E as j, S as M, T as N, _ as P, b as ee, c as te, d as F, f as I, g as ne, h as L, l as R, m as re, p as z, u as B, v as ie, w as V, x as H, y as ae } from "./composite-BYPOq3H3.js";
import { E as oe, o as U, r as se, s as ce, v as le, y as ue } from "./popupStateMapping-CSyRbb7j.js";
// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var W = /* @__PURE__ */ e(t(), 1);
function G(e, t, n) {
	let { reference: r, floating: i } = e, a = M(t), o = z(t), s = L(o), c = H(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = I(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function de(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = B(t, e), p = ee(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = N(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = N(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var fe = 50, pe = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: de
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = G(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < fe && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = G(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, me = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = B(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = H(r), _ = M(o), v = H(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [ae(o)] : ne(o)), x = p !== "none";
			!d && x && b.push(...ie(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = re(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === M(t) || T.every((e) => M(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = M(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function he(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function K(e) {
	return A.some((t) => e[t] >= 0);
}
var q = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = B(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = he(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: K(e)
					} };
				}
				case "escaped": {
					let e = he(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: K(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ge = /*#__PURE__*/ new Set(["left", "top"]);
async function _e(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = H(n), s = I(n), c = M(n) === "y", l = ge.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = B(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var J = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await _e(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Y = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = B(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = M(i), p = P(f), m = u[p], h = u[f], g = (e, t) => te(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, ve = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = B(e, t), u = {
				x: n,
				y: r
			}, d = M(i), f = P(d), p = u[f], m = u[d], h = B(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = ge.has(H(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ye = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = B(e, t), c = await i.detectOverflow(t, s), l = H(n), u = I(n), d = M(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = V(p - c[m], g), y = V(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * k(c.left, c.right) : S = p - 2 * k(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function X(e) {
	let t = C(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = m(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = j(n) !== a || j(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function be(e) {
	return p(e) ? e : e.contextElement;
}
function Z(e) {
	let t = be(e);
	if (!m(t)) return R(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = X(t), o = (a ? j(n.width) : n.width) / r, s = (a ? j(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var xe = /*#__PURE__*/ R(0);
function Se(e) {
	let t = _(e);
	return !E() || !t.visualViewport ? xe : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ce(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === _(e);
}
function Q(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = be(e), o = R(1);
	t && (r ? p(r) && (o = Z(r)) : o = Z(e));
	let s = Ce(a, n, r) ? Se(a) : R(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = _(a), t = p(r) ? _(r) : r, n = e, i = g(n);
		for (; i && t !== n;) {
			let e = Z(i), t = i.getBoundingClientRect(), r = C(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = _(i), i = g(n);
		}
	}
	return N({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function $(e, t) {
	let n = y(e).scrollLeft;
	return t ? t.left + n : Q(x(e)).left + n;
}
function we(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - $(e, n),
		y: n.top + t.scrollTop
	};
}
function Te(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = x(r), s = t ? T(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = R(1), u = R(0), f = m(r);
	if ((f || !a) && ((d(r) !== "body" || h(o)) && (c = y(r)), f)) {
		let e = Q(r);
		l = Z(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let p = o && !f && !a ? we(o, c) : R(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
	};
}
function Ee(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function De(e) {
	let t = y(e), n = e.ownerDocument.body, r = k(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = k(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + $(e), o = -t.scrollTop;
	return C(n).direction === "rtl" && (a += k(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Oe = 25;
function ke(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = _(e), a = x(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !E() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if ($(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Oe && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ae(e, t) {
	let n = Q(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Z(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function je(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = ke(e, n, t);
	else if (t === "document") r = De(x(e));
	else if (p(t)) r = Ae(t, n);
	else {
		let n = Se(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return N(r);
}
function Me(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = S(e, [], !1).filter((e) => p(e) && d(e) !== "body"), i = null, a = C(e).position === "fixed", o = a ? f(e) : e;
	for (; p(o) && !b(o);) {
		let e = C(o), t = w(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = f(o);
	}
	return t.set(e, r), r;
}
function Ne(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? T(t) ? [] : Me(t, this._c) : [].concat(n), r], o = je(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = je(t, a[e], i);
		s = k(n.top, s), c = V(n.right, c), l = V(n.bottom, l), u = k(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Pe(e) {
	let { width: t, height: n } = X(e);
	return {
		width: t,
		height: n
	};
}
function Fe(e, t, n) {
	let r = m(t), i = x(t), a = n === "fixed", o = Q(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = R(0);
	if ((r || !a) && ((d(t) !== "body" || h(i)) && (s = y(t)), r)) {
		let e = Q(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = $(i));
	let l = i && !r && !a ? we(i, s) : R(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Ie(e) {
	return C(e).position === "static";
}
function Le(e, t) {
	if (!m(e) || C(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return x(e) === n && (n = n.ownerDocument.body), n;
}
function Re(e, t) {
	let n = _(e);
	if (T(e)) return n;
	if (!m(e)) {
		let t = f(e);
		for (; t && !b(t);) {
			if (p(t) && !Ie(t)) return t;
			t = f(t);
		}
		return n;
	}
	let r = Le(e, t);
	for (; r && u(r) && Ie(r);) r = Le(r, t);
	return r && b(r) && Ie(r) && !w(r) ? n : r || v(e) || n;
}
var ze = async function(e) {
	let t = this.getOffsetParent || Re, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Fe(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Be(e) {
	return C(e).direction === "rtl";
}
var Ve = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Te,
	getDocumentElement: x,
	getClippingRect: Ne,
	getOffsetParent: Re,
	getElementRects: ze,
	getClientRects: Ee,
	getDimensions: Pe,
	getScale: Z,
	isElement: p,
	isRTL: Be
};
function He(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ue(e, t, n) {
	let r = null, i, a = x(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = F(d), h = F(a.clientWidth - (u + f)), g = F(a.clientHeight - (d + p)), _ = F(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: k(0, V(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!He(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = _(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function We(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = be(e), u = i || a ? [...l ? S(l) : [], ...t ? S(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Ue(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Q(e) : null;
	c && g();
	function g() {
		let t = Q(e);
		h && !He(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Ge = J, Ke = Y, qe = me, Je = ye, Ye = q, Xe = ve, Ze = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Ve,
		...i.platform,
		_c: r
	};
	return pe(e, t, {
		...i,
		platform: a
	});
}, Qe = /* @__PURE__ */ e(n(), 1), $e = typeof document < "u" ? W.useLayoutEffect : function() {};
function et(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!et(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !et(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function tt(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nt(e, t) {
	let n = tt(e);
	return Math.round(t * n) / n;
}
function rt(e) {
	let t = W.useRef(e);
	return $e(() => {
		t.current = e;
	}), t;
}
function it(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = W.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = W.useState(r);
	et(f, r) || p(r);
	let [m, h] = W.useState(null), [g, _] = W.useState(null), v = W.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = W.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = W.useRef(null), C = W.useRef(null), w = W.useRef(u), T = c != null, E = rt(c), D = rt(i), O = rt(l), k = W.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Ze(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !et(w.current, t) && (w.current = t, Qe.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	$e(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = W.useRef(!1);
	$e(() => (A.current = !0, () => {
		A.current = !1;
	}), []), $e(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let j = W.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = W.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = W.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = nt(M.floating, u.x), r = nt(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...tt(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return W.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var at = (e, t) => {
	let n = Ge(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ot = (e, t) => {
	let n = Ke(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, st = (e, t) => ({
	fn: Xe(e).fn,
	options: [e, t]
}), ct = (e, t) => {
	let n = qe(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, lt = (e, t) => {
	let n = Je(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ut = (e, t) => {
	let n = Ye(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
};
// node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function dt(e) {
	let { open: t = !1, onOpenChange: n, elements: r = {} } = e, a = l(), o = le() != null, c = i(() => new ce({
		open: t,
		transitionStatus: void 0,
		onOpenChange: n,
		referenceElement: r.reference ?? null,
		floatingElement: r.floating ?? null,
		triggerElements: new U(),
		floatingId: a,
		syncOnly: !1,
		nested: o
	})).current;
	return s(() => {
		let e = {
			open: t,
			floatingId: a
		};
		r.reference !== void 0 && (e.referenceElement = r.reference, e.domReferenceElement = p(r.reference) ? r.reference : null), r.floating !== void 0 && (e.floatingElement = r.floating), c.update(e);
	}, [
		t,
		a,
		r.reference,
		r.floating,
		c
	]), c.context.onOpenChange = n, c.context.nested = o, c;
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
function ft(e = {}) {
	let { nodeId: t, externalTree: n } = e, r = dt(e), i = e.rootContext || r, a = i.useState("referenceElement"), o = i.useState("floatingElement"), c = i.useState("domReferenceElement"), l = i.useState("open"), u = i.useState("floatingId"), [d, f] = W.useState(null), [m, h] = W.useState(void 0), [g, _] = W.useState(void 0), v = W.useRef(null), y = ue(n), b = W.useMemo(() => ({
		reference: a,
		floating: o,
		domReference: c
	}), [
		a,
		o,
		c
	]), x = it({
		...e,
		elements: {
			...b,
			...d && { reference: d }
		}
	}), S = p(m) ? m : null, C = g === void 0 ? i.state.floatingElement : g;
	i.useSyncedValue("referenceElement", m ?? null), i.useSyncedValue("domReferenceElement", m === void 0 ? c : S), i.useSyncedValue("floatingElement", C);
	let w = W.useCallback((e) => {
		let t = p(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		f(t), x.refs.setReference(t);
	}, [x.refs]), T = W.useCallback((e) => {
		(p(e) || e === null) && (v.current = e, h(e)), (p(x.refs.reference.current) || x.refs.reference.current === null || e !== null && !p(e)) && x.refs.setReference(e);
	}, [x.refs, h]), E = W.useCallback((e) => {
		_(e), x.refs.setFloating(e);
	}, [x.refs]), D = W.useMemo(() => ({
		...x.refs,
		setReference: T,
		setFloating: E,
		setPositionReference: w,
		domReference: v
	}), [
		x.refs,
		T,
		E,
		w
	]), O = W.useMemo(() => ({
		...x.elements,
		domReference: c
	}), [x.elements, c]), k = W.useMemo(() => ({
		...x,
		dataRef: i.context.dataRef,
		open: l,
		onOpenChange: i.setOpen,
		events: i.context.events,
		floatingId: u,
		refs: D,
		elements: O,
		nodeId: t,
		rootStore: i
	}), [
		x,
		D,
		O,
		t,
		i,
		l,
		u
	]);
	return s(() => {
		c && (v.current = c);
	}, [c]), s(() => {
		i.context.dataRef.current.floatingContext = k;
		let e = y?.nodesRef.current.find((e) => e.id === t);
		e && (e.context = k);
	}), W.useMemo(() => ({
		...x,
		context: k,
		refs: D,
		elements: O,
		rootStore: i
	}), [
		x,
		D,
		O,
		k,
		i
	]);
}
// node_modules/@base-ui/react/utils/getDisabledMountTransitionStyles.mjs
function pt(e) {
	return e === "starting" ? oe : a;
}
// node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var mt = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0, offsetParent: d = "real" } = B(e, t) || {};
		if (l == null) return {};
		let f = ee(u), p = {
			x: n,
			y: r
		}, m = z(i), h = L(m), g = await o.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", x = a.reference[h] + a.reference[m] - p[m] - a.floating[h], S = p[m] - a.reference[m], C = d === "real" ? await o.getOffsetParent?.(l) : s.floating, w = s.floating[b] || a.floating[h];
		w && await o.isElement?.(C) || (w = s.floating[b] || a.floating[h]);
		let T = x / 2 - S / 2, E = w / 2 - g[h] / 2 - 1, D = Math.min(f[v], E), O = Math.min(f[y], E), k = D, A = w - g[h] - O, j = w / 2 - g[h] / 2 + T, M = te(k, j, A), N = !c.arrow && I(i) != null && j !== M && a.reference[h] / 2 - (j < k ? D : O) - g[h] / 2 < 0, P = N ? j < k ? j - k : j - A : 0;
		return {
			[m]: p[m] + P,
			data: {
				[m]: M,
				centerOffset: j - M - P,
				...N && { alignmentOffset: P }
			},
			reset: N
		};
	}
}), ht = (e, t) => ({
	...mt(e),
	options: [e, t]
}), gt = ut().fn, _t = {
	name: "hide",
	async fn(e) {
		let { width: t, height: n, x: r, y: i } = e.rects.reference, a = t === 0 && n === 0 && r === 0 && i === 0;
		return { data: { referenceHidden: (await gt(e)).data?.referenceHidden || a } };
	}
}, vt = {
	sideX: "left",
	sideY: "top"
}, yt = {
	name: "adaptiveOrigin",
	async fn(e) {
		let { x: t, y: n, rects: { floating: r }, elements: { floating: i }, platform: a, strategy: o, placement: s } = e, c = _(i), l = c.getComputedStyle(i);
		if (l.transitionDuration === "0s" || l.transitionDuration === "") return {
			x: t,
			y: n,
			data: vt
		};
		let u = await a.getOffsetParent?.(i), d = {
			width: 0,
			height: 0
		};
		if (o === "fixed" && c?.visualViewport) d = {
			width: c.visualViewport.width,
			height: c.visualViewport.height
		};
		else if (u === c) {
			let e = O(i);
			d = {
				width: e.documentElement.clientWidth,
				height: e.documentElement.clientHeight
			};
		} else await a.isElement?.(u) && (d = await a.getDimensions(u));
		let f = H(s), p = t, m = n;
		f === "left" && (p = d.width - (t + r.width)), f === "top" && (m = d.height - (n + r.height));
		let h = f === "left" ? "right" : vt.sideX, g = f === "top" ? "bottom" : vt.sideY;
		return {
			x: p,
			y: m,
			data: {
				sideX: h,
				sideY: g
			}
		};
	}
};
// node_modules/@base-ui/react/utils/useAnchorPositioning.mjs
function bt(e, t, n) {
	let r = e === "inline-start" || e === "inline-end";
	return {
		top: "top",
		right: r ? n ? "inline-start" : "inline-end" : "right",
		bottom: "bottom",
		left: r ? n ? "inline-end" : "inline-start" : "left"
	}[t];
}
function xt(e, t, n) {
	let { rects: r, placement: i } = e;
	return {
		side: bt(t, H(i), n),
		align: I(i) || "center",
		anchor: {
			width: r.reference.width,
			height: r.reference.height
		},
		positioner: {
			width: r.floating.width,
			height: r.floating.height
		}
	};
}
function St(e) {
	let { anchor: t, positionMethod: n = "absolute", side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: l = 0, collisionBoundary: u, collisionPadding: d = 5, sticky: f = !1, arrowPadding: p = 5, disableAnchorTracking: m = !1, inline: h, keepMounted: g = !1, floatingRootContext: v, mounted: y, collisionAvoidance: b, shiftCrossAxis: x = !1, nodeId: S, adaptiveOrigin: C, lazyFlip: w = !1, externalTree: T } = e, [E, k] = W.useState(null);
	!y && E !== null && k(null);
	let A = b.side || "flip", j = b.align || "flip", N = b.fallbackAxisSide || "end", P = typeof t == "function" ? t : void 0, ee = r(P), te = P ? ee : t, F = D(t), ne = D(y), L = c() === "rtl", R = E || {
		top: "top",
		right: "right",
		bottom: "bottom",
		left: "left",
		"inline-end": L ? "left" : "right",
		"inline-start": L ? "right" : "left"
	}[i], re = o === "center" ? R : `${R}-${o}`, z = d, B = +(i === "bottom"), ie = +(i === "top"), V = +(i === "right"), ae = +(i === "left");
	typeof z == "number" ? z = {
		top: z + B,
		right: z + ae,
		bottom: z + ie,
		left: z + V
	} : z &&= {
		top: (z.top || 0) + B,
		right: (z.right || 0) + ae,
		bottom: (z.bottom || 0) + ie,
		left: (z.left || 0) + V
	};
	let oe = {
		boundary: u === "clipping-ancestors" ? "clippingAncestors" : u,
		padding: z
	}, U = W.useRef(null), se = D(a), ce = D(l), le = typeof a == "function" ? 0 : a, ue = typeof l == "function" ? 0 : l, G = [];
	h && G.push(h), G.push(at((e) => {
		let t = xt(e, i, L), n = typeof se.current == "function" ? se.current(t) : se.current, r = typeof ce.current == "function" ? ce.current(t) : ce.current;
		return {
			mainAxis: n,
			crossAxis: r,
			alignmentAxis: r
		};
	}, [
		le,
		ue,
		L,
		i
	]));
	let de = j === "none" && A !== "shift", fe = !de && (f || x || A === "shift"), pe = A === "none" ? null : ct({
		...oe,
		padding: {
			top: z.top + 1,
			right: z.right + 1,
			bottom: z.bottom + 1,
			left: z.left + 1
		},
		mainAxis: !x && A === "flip",
		crossAxis: j === "flip" && "alignment",
		fallbackAxisSideDirection: N
	}), me = de ? null : ot((e) => {
		let t = O(e.elements.floating).documentElement;
		return {
			...oe,
			rootBoundary: x ? {
				x: 0,
				y: 0,
				width: t.clientWidth,
				height: t.clientHeight
			} : void 0,
			mainAxis: j !== "none",
			crossAxis: fe,
			limiter: f || x ? void 0 : st((e) => {
				if (!U.current) return {};
				let { width: t, height: n } = U.current.getBoundingClientRect(), r = M(H(e.placement)), i = r === "y" ? t : n, a = r === "y" ? z.left + z.right : z.top + z.bottom;
				return { offset: i / 2 + a / 2 };
			})
		};
	}, [
		oe,
		f,
		x,
		z,
		j
	]);
	A === "shift" || j === "shift" || o === "center" ? G.push(me, pe) : G.push(pe, me), G.push(lt({
		...oe,
		apply({ elements: { floating: e }, availableWidth: t, availableHeight: n, rects: r }) {
			if (!ne.current) return;
			let i = e.style;
			i.setProperty("--available-width", `${t}px`), i.setProperty("--available-height", `${n}px`);
			let a = _(e).devicePixelRatio || 1, { x: o, y: s, width: c, height: l } = r.reference, u = (Math.round((o + c) * a) - Math.round(o * a)) / a, d = (Math.round((s + l) * a) - Math.round(s * a)) / a;
			i.setProperty("--anchor-width", `${u}px`), i.setProperty("--anchor-height", `${d}px`);
		}
	}), ht((e) => ({
		element: U.current || O(e.elements.floating).createElement("div"),
		padding: p,
		offsetParent: "floating"
	}), [p]), {
		name: "transformOrigin",
		fn(e) {
			let { elements: t, middlewareData: n, placement: r, rects: o, y: s } = e, c = H(r), l = M(c), u = U.current, d = n.arrow?.x || 0, f = n.arrow?.y || 0, p = u?.clientWidth || 0, m = u?.clientHeight || 0, h = d + p / 2, g = f + m / 2, _ = Math.abs(n.shift?.y || 0), v = o.reference.height / 2, y = typeof a == "function" ? a(xt(e, i, L)) : a, b = _ > y, x = {
				top: `${h}px calc(100% + ${y}px)`,
				bottom: `${h}px ${-y}px`,
				left: `calc(100% + ${y}px) ${g}px`,
				right: `${-y}px ${g}px`
			}[c], S = `${h}px ${o.reference.y + v - s}px`;
			return t.floating.style.setProperty("--transform-origin", fe && l === "y" && b ? S : x), {};
		}
	}, _t, C), s(() => {
		!y && v && v.update({
			referenceElement: null,
			floatingElement: null,
			domReferenceElement: null,
			positionReference: null
		});
	}, [y, v]);
	let he = W.useMemo(() => ({
		elementResize: !m && typeof ResizeObserver < "u",
		layoutShift: !m && typeof IntersectionObserver < "u"
	}), [m]), { refs: K, elements: q, x: ge, y: _e, middlewareData: J, update: Y, placement: ve, context: ye, isPositioned: X, floatingStyles: be } = ft({
		rootContext: v,
		open: g ? y : void 0,
		placement: re,
		middleware: G,
		strategy: n,
		whileElementsMounted: g ? void 0 : (...e) => We(...e, he),
		nodeId: S,
		externalTree: T
	}), { sideX: Z, sideY: xe } = J.adaptiveOrigin || vt, Se = X ? n : "fixed", Ce = W.useMemo(() => {
		let e = C ? {
			position: Se,
			[Z]: ge,
			[xe]: _e
		} : {
			position: Se,
			...be
		};
		return X || (e.opacity = 0), e;
	}, [
		C,
		Se,
		Z,
		ge,
		xe,
		_e,
		be,
		X
	]), Q = W.useRef(null);
	s(() => {
		if (!y) return;
		let e = F.current, t = typeof e == "function" ? e() : e, n = (Ct(t) ? t.current : t) || null;
		n !== Q.current && (K.setPositionReference(n), Q.current = n);
	}, [
		y,
		K,
		te,
		F
	]), W.useEffect(() => {
		if (!y) return;
		let e = F.current;
		typeof e != "function" && Ct(e) && e.current !== Q.current && (K.setPositionReference(e.current), Q.current = e.current);
	}, [
		y,
		K,
		te,
		F
	]), W.useEffect(() => {
		if (g && y && q.reference && q.floating) return We(q.reference, q.floating, Y, he);
	}, [
		g,
		y,
		q,
		Y,
		he
	]);
	let $ = H(ve), we = bt(i, $, L), Te = I(ve) || "center", Ee = !!J.hide?.referenceHidden;
	s(() => {
		w && y && X && k($);
	}, [
		w,
		y,
		X,
		$
	]);
	let De = W.useMemo(() => ({
		position: "absolute",
		top: J.arrow?.y,
		left: J.arrow?.x
	}), [J.arrow]), Oe = J.arrow?.centerOffset !== 0;
	return W.useMemo(() => ({
		positionerStyles: Ce,
		arrowStyles: De,
		arrowRef: U,
		arrowUncentered: Oe,
		side: we,
		align: Te,
		physicalSide: $,
		anchorHidden: Ee,
		refs: K,
		context: ye,
		isPositioned: X,
		update: Y
	}), [
		Ce,
		De,
		U,
		Oe,
		we,
		Te,
		$,
		Ee,
		K,
		ye,
		X,
		Y
	]);
}
function Ct(e) {
	return e != null && "current" in e;
}
// node_modules/@base-ui/react/utils/usePositioner.mjs
function wt(e, t, { styles: n, transitionStatus: r, props: i, refs: a, hidden: s, inert: c = !1 }) {
	let l = { ...n };
	return c && (l.pointerEvents = "none"), o("div", e, {
		state: t,
		ref: a,
		props: [
			{
				role: "presentation",
				hidden: s,
				style: l
			},
			pt(r),
			i
		],
		stateAttributesMapping: se
	});
}
export { dt as a, pt as i, St as n, Ve as o, yt as r, wt as t };
