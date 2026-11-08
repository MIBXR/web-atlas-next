import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
// node_modules/@base-ui/utils/useRefWithInit.mjs
var n = /* @__PURE__ */ e(t(), 1), r = {};
function i(e, t) {
	let i = n.useRef(r);
	return i.current === r && (i.current = e(t)), i;
}
// node_modules/@base-ui/utils/formatErrorMessage.mjs
function a(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var o = a("https://base-ui.com/production-error", "Base UI");
// node_modules/@base-ui/utils/useMergedRefs.mjs
function s(e, t, n, r) {
	let a = i(l).current;
	return u(a, e, t, n, r) && f(a, [
		e,
		t,
		n,
		r
	]), a.callback;
}
function c(e) {
	let t = i(l).current;
	return d(t, e) && f(t, e), t.callback;
}
function l() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function u(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function d(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function f(e, t) {
	e.refs = t, e.callback = t.every((e) => e == null) ? null : (n) => {
		if (e.cleanup &&= (e.cleanup(), null), n != null) {
			let r = Array(t.length).fill(null);
			for (let e = 0; e < t.length; e += 1) {
				let i = t[e];
				if (i != null) switch (typeof i) {
					case "function": {
						let t = i(n);
						typeof t == "function" && (r[e] = t);
						break;
					}
					case "object": i.current = n;
				}
			}
			e.cleanup = () => {
				for (let e = 0; e < t.length; e += 1) {
					let n = t[e];
					if (n != null) switch (typeof n) {
						case "function": {
							let t = r[e];
							typeof t == "function" ? t() : n(null);
							break;
						}
						case "object": n.current = null;
					}
				}
			};
		}
	};
}
// node_modules/@base-ui/utils/reactVersion.mjs
var p = 19;
function m(e) {
	return p >= e;
}
// node_modules/@base-ui/utils/getReactElementRef.mjs
function h(e) {
	if (!/*#__PURE__*/ n.isValidElement(e)) return null;
	let t = e, r = t.props;
	return (m(19) ? r?.ref : t.ref) ?? null;
}
// node_modules/@base-ui/utils/mergeObjects.mjs
function g(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
// node_modules/@base-ui/utils/empty.mjs
function _() {}
var v = Object.freeze([]), y = Object.freeze({});
// node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function b(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (t?.hasOwnProperty(r)) {
			let e = t[r](i);
			e != null && Object.assign(n, e);
		} else i === !0 ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString());
	}
	return n;
}
// node_modules/@base-ui/react/utils/resolveClassName.mjs
function x(e, t) {
	return typeof e == "function" ? e(t) : e;
}
// node_modules/@base-ui/react/utils/resolveStyle.mjs
function S(e, t) {
	return typeof e == "function" ? e(t) : e;
}
// node_modules/@base-ui/react/merge-props/mergeProps.mjs
var C = {};
function w(e, t, n, r, i) {
	if (!n && !r && !i && !e) return E(t);
	let a = E(e);
	return t && (a = D(a, t)), n && (a = D(a, n)), r && (a = D(a, r)), i && (a = D(a, i)), a;
}
function T(e) {
	if (e.length === 0) return C;
	if (e.length === 1) return E(e[0]);
	let t = E(e[0]);
	for (let n = 1; n < e.length; n += 1) t = D(t, e[n]);
	return t;
}
function E(e) {
	return j(e) ? { ...M(e, C) } : O(e);
}
function D(e, t) {
	return j(t) ? M(t, e) : k(e, t);
}
function O(e) {
	let t = { ...e };
	for (let e in t) {
		let n = t[e];
		A(e, n) && (t[e] = P(n));
	}
	return t;
}
function k(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = g(e.style, r);
				break;
			case "className":
				e[n] = I(e.className, r);
				break;
			default: e[n] = A(n, r) ? N(e[n], r) : r;
		}
	}
	return e;
}
function A(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function j(e) {
	return typeof e == "function";
}
function M(e, t) {
	return j(e) ? e(t) : e ?? C;
}
function N(e, t) {
	return t ? e ? (...n) => {
		let r = n[0];
		if (L(r)) {
			let i = r;
			F(i);
			let a = t(...n);
			return i.baseUIHandlerPrevented || e?.(...n), a;
		}
		let i = t(...n);
		return e?.(...n), i;
	} : P(t) : e;
}
function P(e) {
	return e && ((...t) => {
		let n = t[0];
		return L(n) && F(n), e(...t);
	});
}
function F(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function I(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function L(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
// node_modules/@base-ui/react/internals/useRenderElement.mjs
function R(e, t, n = {}) {
	let r = t.render, i = z(t, n);
	return n.enabled === !1 ? null : H(e, r, i, n.state ?? y);
}
function z(e, t = {}) {
	let { className: n, style: r, render: i } = e, { state: a = y, ref: o, props: l, stateAttributesMapping: u, enabled: d = !0 } = t, f = d ? x(n, a) : void 0, p = d ? S(r, a) : void 0, m = d ? b(a, u) : y, _ = d && l ? B(l) : void 0, v = d ? g(m, _) ?? {} : y;
	return typeof document < "u" && (d ? v.ref = Array.isArray(o) ? c([
		v.ref,
		h(i),
		...o
	]) : s(v.ref, h(i), o) : s(null, null)), d ? (f !== void 0 && (v.className = I(v.className, f)), p !== void 0 && (v.style = g(v.style, p)), v) : y;
}
function B(e) {
	return Array.isArray(e) ? T(e) : w(void 0, e);
}
var V = Symbol.for("react.lazy");
function H(e, t, r, i) {
	if (t) {
		if (typeof t == "function") return t(r, i);
		let e = w(r, t.props);
		e.ref = r.ref;
		let a = t;
		return a?.$$typeof === V && (a = n.Children.toArray(t)[0]), /*#__PURE__*/ n.cloneElement(a, e);
	}
	if (e && typeof e == "string") return U(e, r);
	throw Error(o(8));
}
function U(e, t) {
	return e === "button" ? /*#__PURE__*/ (0, n.createElement)("button", {
		type: "button",
		...t,
		key: t.key
	}) : e === "img" ? /*#__PURE__*/ (0, n.createElement)("img", {
		alt: "",
		...t,
		key: t.key
	}) : /*#__PURE__*/ n.createElement(e, t);
}
export { v as a, m as c, i as d, S as i, s as l, F as n, y as o, w as r, _ as s, R as t, o as u };
