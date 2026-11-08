import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./react-dom-Dipvgcxr.js";
import { t as a } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/react/dist/components/avatar-group/avatar-group-context.js
var o = /* @__PURE__ */ t(n(), 1), s = /*#__PURE__*/ (0, o.createContext)({}), c = "__avatar_group_child", l = e({
	defaultVariants: {
		color: "default",
		size: "md"
	},
	slots: {
		base: "avatar",
		fallback: "avatar__fallback",
		image: "avatar__image"
	},
	variants: {
		color: {
			accent: { fallback: "avatar__fallback--accent" },
			danger: { fallback: "avatar__fallback--danger" },
			default: { fallback: "avatar__fallback--default" },
			success: { fallback: "avatar__fallback--success" },
			warning: { fallback: "avatar__fallback--warning" }
		},
		size: {
			lg: { base: "avatar--lg" },
			md: { base: "avatar--md" },
			sm: { base: "avatar--sm" }
		},
		variant: {
			default: {},
			soft: { base: "avatar--soft" }
		}
	}
}), u = r(), d = Object.defineProperty, f = (e, t) => d(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function p(e, t) {
	let n = o.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ f((e) => {
		let { children: t, ...r } = e, i = o.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, u.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, s = o.useContext(n);
		if (s) return s;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return f(i, "useContext"), [r, i];
}
f(p, "createContext");
// @__NO_SIDE_EFFECTS__
function m(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = o.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let s = /* @__PURE__ */ f((t) => {
			let { scope: n, children: r, ...s } = t, c = n?.[e]?.[a] || i, l = o.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, u.jsx)(c.Provider, {
				value: l,
				children: r
			});
		}, "Provider");
		s.displayName = t + "Provider";
		function c(n, s, c = {}) {
			let { optional: l = !1 } = c, u = s?.[e]?.[a] || i, d = o.useContext(u);
			if (d) return d;
			if (r !== void 0) return r;
			if (!l) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return f(c, "useContext"), [s, c];
	}
	f(r, "createContext");
	let i = /* @__PURE__ */ f(() => {
		let t = n.map((e) => o.createContext(e));
		return /* @__PURE__ */ f(function(n) {
			let r = n?.[e] || t;
			return o.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, h(i, ...t)];
}
f(m, "createContextScope");
function h(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ f(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ f(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
f(h, "composeContextScopes");
// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var g = globalThis?.document ? o.useLayoutEffect : () => {}, _ = Object.defineProperty, v = (e, t) => _(e, "name", {
	value: t,
	configurable: !0
}), y = o.useInsertionEffect;
function b(e) {
	let t = o.useRef(e);
	return typeof y == "function" ? y(() => {
		t.current = e;
	}) : g(() => {
		t.current = e;
	}), o.useMemo(() => ((...e) => t.current?.(...e)), []);
}
v(b, "useCallbackRef");
// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var x = /* @__PURE__ */ t(i(), 1), ee = Object.defineProperty, S = (e, t) => ee(e, "name", {
	value: t,
	configurable: !0
});
function C(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
S(C, "setRef");
function w(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = C(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : C(e[t], null);
			}
		};
	};
}
S(w, "composeRefs");
function T(...e) {
	return o.useCallback(w(...e), e);
}
S(T, "useComposedRefs");
// node_modules/@radix-ui/react-slot/dist/index.mjs
var te = Object.defineProperty, E = (e, t) => te(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function D(e) {
	let t = o.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, s = !1, c = [];
		r = I(r), o.Children.forEach(r, (e) => {
			if (M(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				for (; P(n) && typeof z == "function";) n = z(n._payload);
				a = ne(t, n), c.push(a?.props?.children);
			} else c.push(e);
		}), a ? a = o.cloneElement(a, void 0, c) : !s && o.Children.count(r) === 1 && o.isValidElement(r) && (a = r);
		let l = a ? j(a) : void 0, u = T(n, l);
		if (!a) {
			if (r || r === 0) throw Error(s ? re(e) : R(e));
			return r;
		}
		let d = A(i, a.props ?? {});
		return a.type !== o.Fragment && (d.ref = n ? u : l), o.cloneElement(a, d);
	});
	return t.displayName = `${e}.Slot`, t;
}
E(D, "createSlot");
var O = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function k(e) {
	let t = /* @__PURE__ */ E((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = O, t;
}
E(k, "createSlottable");
var ne = /* @__PURE__ */ E((e, t) => "child" in e.props ? o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null : o.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function A(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = L(a, i));
	}
	return {
		...e,
		...n
	};
}
E(A, "mergeProps");
function j(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
E(j, "getElementRef");
function M(e) {
	return o.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === O;
}
E(M, "isSlottable");
var N = Symbol.for("react.lazy");
function P(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === N && "_payload" in e && F(e._payload);
}
E(P, "isLazyComponent");
function F(e) {
	return typeof e == "object" && !!e && "then" in e;
}
E(F, "isPromiseLike");
function I(e) {
	let t = e;
	for (; P(t) && typeof z == "function";) t = z(t._payload);
	return t;
}
E(I, "useUnwrappedLazy");
function L(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
E(L, "concatAriaDescribedby");
var R = /* @__PURE__ */ E((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), re = /* @__PURE__ */ E((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), z = o.use, ie = Object.defineProperty, ae = (e, t) => ie(e, "name", {
	value: t,
	configurable: !0
}), B = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ D(`Primitive.${t}`), r = o.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, u.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function oe(e, t) {
	e && x.flushSync(() => e.dispatchEvent(t));
}
ae(oe, "dispatchDiscreteCustomEvent");
// node_modules/@radix-ui/react-avatar/dist/index.mjs
var se = Object.defineProperty, V = (e, t) => se(e, "name", {
	value: t,
	configurable: !0
}), H = "Avatar", [U, ce] = /* @__PURE__ */ m(H), W = {
	Idle: "idle",
	Loading: "loading",
	Loaded: "loaded",
	Error: "error"
}, G = [0, () => void 0], [le, K] = U(H), ue = /* @__PURE__ */ o.forwardRef(/* @__PURE__ */ V(function(e, t) {
	let { __scopeAvatar: n, ...r } = e, [i, a] = o.useState(W.Idle), [s, c] = Y();
	return /* @__PURE__ */ (0, u.jsx)(le, {
		scope: n,
		imageLoadingStatus: i,
		setImageLoadingStatus: a,
		imageCount: s,
		setImageCount: c,
		children: /* @__PURE__ */ (0, u.jsx)(B.span, {
			...r,
			ref: t
		})
	});
}, "Avatar")), de = "AvatarImage", fe = /* @__PURE__ */ o.forwardRef(/* @__PURE__ */ V(function(e, t) {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i, ...a } = e, s = K(de, n);
	s.setImageCount;
	let c = q(r, {
		referrerPolicy: a.referrerPolicy,
		crossOrigin: a.crossOrigin,
		loadingStatus: s.imageLoadingStatus,
		setLoadingStatus: s.setImageLoadingStatus
	}), l = b((e) => {
		i?.(e);
	}), d = o.useRef(c);
	return g(() => {
		let e = d.current;
		d.current = c, c !== e && l(c);
	}, [c, l]), c === W.Loaded ? /* @__PURE__ */ (0, u.jsx)(B.img, {
		...a,
		ref: t,
		src: r
	}) : null;
}, "AvatarImage")), pe = "AvatarFallback", me = /* @__PURE__ */ o.forwardRef(/* @__PURE__ */ V(function(e, t) {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = K(pe, n), [s, c] = o.useState(r === void 0);
	return o.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => c(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), s && a.imageLoadingStatus !== W.Loaded ? /* @__PURE__ */ (0, u.jsx)(B.span, {
		...i,
		ref: t
	}) : null;
}, "AvatarFallback"));
function q(e, { loadingStatus: t, setLoadingStatus: n, referrerPolicy: r, crossOrigin: i }) {
	return g(() => {
		if (!e) {
			n(W.Error);
			return;
		}
		let t = new window.Image(), a = /* @__PURE__ */ V((e) => {
			let t = e.currentTarget;
			n(J(t));
		}, "handleLoad"), o = /* @__PURE__ */ V(() => n(W.Error), "handleError");
		return t.addEventListener("load", a), t.addEventListener("error", o), r && (t.referrerPolicy = r), t.crossOrigin = i ?? null, t.src = e, n(J(t)), () => {
			t.removeEventListener("load", a), t.removeEventListener("error", o), n(W.Idle);
		};
	}, [
		e,
		i,
		r,
		n
	]), t;
}
V(q, "useImageLoadingStatus");
function J(e) {
	return e.complete ? e.naturalWidth > 0 ? W.Loaded : W.Error : W.Loading;
}
V(J, "getImageLoadingStatus");
function Y() {
	return G;
}
V(Y, "useImageCount");
function he(e) {}
V(he, "useUpdateImageCount");
// node_modules/@heroui/react/dist/components/avatar/avatar.js
var X = /*#__PURE__*/ (0, o.createContext)({}), Z = ({ children: e, className: t, color: n, size: r, variant: i, [c]: a, ...d }) => {
	let f = (0, o.use)(s), p = a === !0, m = r ?? (p ? f?.size : void 0), h = n ?? (p ? f?.color : void 0), g = i ?? (p ? f?.variant : void 0), _ = o.useMemo(() => l({
		color: h,
		size: m,
		variant: g
	}), [
		h,
		m,
		g
	]), v = o.useMemo(() => ({ slots: _ }), [_]);
	return /*#__PURE__*/ (0, u.jsx)(X, {
		value: v,
		children: /*#__PURE__*/ (0, u.jsx)(ue, {
			className: _.base({ className: t }),
			...d,
			children: e
		})
	});
};
Z.displayName = "HeroUI.Avatar";
var Q = ({ className: e, crossOrigin: t, loading: n, onError: r, onLoad: i, sizes: s, src: c, srcSet: l, ...d }) => {
	let { slots: f } = o.use(X);
	return /*#__PURE__*/ (0, u.jsx)(fe, {
		className: a(f?.image, e),
		crossOrigin: t,
		loading: n,
		sizes: s,
		src: c,
		srcSet: l,
		onError: r,
		onLoad: i,
		...d
	});
};
Q.displayName = "HeroUI.Avatar.Image";
var $ = ({ className: e, color: t, ...n }) => {
	let { slots: r } = o.use(X);
	return /*#__PURE__*/ (0, u.jsx)(me, {
		className: a(r?.fallback, e, { color: t }),
		"data-slot": "avatar-fallback",
		...n
	});
};
$.displayName = "HeroUI.Avatar.Fallback";
// node_modules/@heroui/react/dist/components/avatar/index.js
var ge = Object.assign(Z, {
	Root: Z,
	Image: Q,
	Fallback: $
});
export { c as n, s as r, ge as t };
