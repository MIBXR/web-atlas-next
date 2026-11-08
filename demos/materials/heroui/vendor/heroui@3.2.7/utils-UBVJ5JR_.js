import { t as e } from "./useLayoutEffect-Bx2X4QEP.js";
import { n as t } from "./SSRProvider-DmcnjAEC.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
import { r as i } from "./dist-qnEEIXtT.js";
// node_modules/react-aria/dist/private/utils/useValueEffect.mjs
var a = /* @__PURE__ */ n(r(), 1);
function o(t) {
	let [n, r] = (0, a.useState)(t), i = (0, a.useRef)(n), o = (0, a.useRef)(null), s = (0, a.useRef)(() => {
		if (!o.current) return;
		let e = o.current.next();
		e.done ? o.current = null : i.current === e.value ? s.current() : r(e.value);
	});
	return e(() => {
		i.current = n, o.current && s.current();
	}), [n, (0, a.useCallback)((e) => {
		o.current = e(i.current), s.current();
	}, [s])];
}
// node_modules/react-aria/dist/private/utils/useId.mjs
var s = !!(typeof window < "u" && window.document && window.document.createElement), c = /* @__PURE__ */ new Map(), l;
typeof FinalizationRegistry < "u" && (l = new FinalizationRegistry((e) => {
	c.delete(e);
}));
var u = /* @__PURE__ */ new WeakMap();
function d(n) {
	let [r, i] = (0, a.useState)(n), o = (0, a.useRef)(null), d = t(r), f = (0, a.useRef)(null), p = u.get(f);
	if (l && p !== d && (p != null && l.unregister(f), l.register(f, d, f), u.set(f, d)), s) {
		let e = c.get(d);
		e && !e.includes(o) ? e.push(o) : c.set(d, [o]);
	}
	return e(() => {
		let e = d;
		return () => {
			l && (l.unregister(f), u.delete(f)), c.delete(e);
		};
	}, [d]), (0, a.useEffect)(() => {
		let e = o.current;
		return e && i(e), () => {
			e && (o.current = null);
		};
	}), d;
}
function f(e, t) {
	if (e === t) return e;
	let n = c.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = c.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function p(t = []) {
	let n = d(), [r, i] = o(n), s = (0, a.useCallback)(() => {
		i(function* () {
			yield n, yield document.getElementById(n) ? n : void 0;
		});
	}, [n, i]);
	return e(s, [
		n,
		s,
		...t
	]), r;
}
// node_modules/react-aria/dist/private/utils/chain.mjs
function m(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
// node_modules/clsx/dist/clsx.mjs
function h(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = h(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function g() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = h(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/react-aria/dist/private/utils/mergeProps.mjs
function _(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], a = r[e];
			typeof n == "function" && typeof a == "function" && e[0] === "o" && e[1] === "n" && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = m(n, a) : (e === "className" || e === "UNSAFE_className") && typeof n == "string" && typeof a == "string" ? t[e] = g(n, a) : e === "id" && n && a ? t.id = f(n, a) : e === "ref" && n && a ? t.ref = i(n, a) : t[e] = a === void 0 ? n : a;
		}
	}
	return t;
}
// node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function v(e) {
	let t = (0, a.useRef)(null), n = (0, a.useRef)(void 0), r = (0, a.useCallback)((t) => {
		if (typeof e == "function") {
			let n = e, r = n(t);
			return () => {
				typeof r == "function" ? r() : n(null);
			};
		}
		if (e) return e.current = t, () => {
			e.current = null;
		};
	}, [e]);
	return (0, a.useMemo)(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
		}
	}), [r]);
}
// node_modules/react-aria-components/dist/private/utils.mjs
var y = Symbol("default");
function b({ values: e, children: t }) {
	for (let [n, r] of e) t = /*#__PURE__*/ a.createElement(n.Provider, { value: r }, t);
	return t;
}
function x(e) {
	let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: o, defaultStyle: s, values: c, render: l } = e;
	return (0, a.useMemo)(() => {
		let e, a, u;
		return e = typeof t == "function" ? t({
			...c,
			defaultClassName: i
		}) : t, a = typeof n == "function" ? n({
			...c,
			defaultStyle: s || {}
		}) : n, u = typeof r == "function" ? r({
			...c,
			defaultChildren: o
		}) : r ?? o, {
			className: e ?? i,
			style: a || s ? {
				...s,
				...a
			} : void 0,
			children: u ?? o,
			"data-rac": "",
			render: l ? (e) => l(e, c) : void 0
		};
	}, [
		t,
		n,
		r,
		i,
		o,
		s,
		c,
		l
	]);
}
function S(e, t) {
	return (n) => t(typeof e == "function" ? e(n) : e, n);
}
function C(e, t) {
	let n = (0, a.useContext)(e);
	if (t === null) return null;
	if (n && typeof n == "object" && "slots" in n && n.slots) {
		let e = t || y;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function w(e, t, n) {
	let { ref: r, ...o } = C(n, e.slot) || {}, s = v((0, a.useMemo)(() => i(t, r), [t, r])), c = _(o, e);
	return "style" in o && o.style && "style" in e && e.style && (c.style = typeof o.style == "function" || typeof e.style == "function" ? (t) => {
		let n = typeof o.style == "function" ? o.style(t) : o.style, r = {
			...t.defaultStyle,
			...n
		}, i = typeof e.style == "function" ? e.style({
			...t,
			defaultStyle: r
		}) : e.style;
		return {
			...r,
			...i
		};
	} : {
		...o.style,
		...e.style
	}), [c, s];
}
function T(t = !0) {
	let [n, r] = (0, a.useState)(t), i = (0, a.useRef)(!1), o = (0, a.useCallback)((e) => {
		i.current = !0, r(!!e);
	}, []);
	return e(() => {
		i.current || r(!1);
	}, []), [o, n];
}
function E(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function D(t, n, r) {
	let { render: o, ...s } = n, c = (0, a.useRef)(null), l = (0, a.useMemo)(() => i(r, c), [r, c]);
	e(() => {}, [t, o]);
	let u = {
		...s,
		ref: l
	};
	return o ? o(u, void 0) : /*#__PURE__*/ a.createElement(t, u);
}
var O = {}, k = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = O[t];
	return n || (n = /*#__PURE__*/ (0, a.forwardRef)(D.bind(null, t)), O[t] = n), n;
} });
export { S as a, E as c, _ as d, m as f, T as i, C as l, d as m, w as n, y as o, p, x as r, k as s, b as t, v as u };
