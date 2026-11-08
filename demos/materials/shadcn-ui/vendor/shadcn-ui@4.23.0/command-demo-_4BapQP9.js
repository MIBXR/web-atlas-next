import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./createLucideIcon-B1HI5iko.js";
import { g as n, t as r } from "./icon-placeholder-BTF3H_W7.js";
import { t as i } from "./react-D9cguz4v.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
import { t as o } from "./react-dom-BasjwewA.js";
import { t as s } from "./dist-DCi9UB7o.js";
import "./dialog-BRpXEAQr.js";
import { n as c, t as l } from "./input-group-Dqr1UK_p.js";
var u = t("Calculator", [
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6",
		key: "x4nwl0"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18",
		key: "wjye3r"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M12 10h.01",
		key: "1nrarc"
	}],
	["path", {
		d: "M8 10h.01",
		key: "19clt8"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}]
]), d = t("Calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]), f = t("Settings", [["path", {
	d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
	key: "1qme2f"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), p = t("Smile", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 14s1.5 2 4 2 4-2 4-2",
		key: "1y1vjs"
	}],
	["line", {
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9",
		key: "yxxnd0"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9",
		key: "1p4y9e"
	}]
]), m = t("User", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), h = /* @__PURE__ */ e(i(), 1), g = 1, _ = .9, v = .8, ee = .17, y = .1, b = .999, x = .9999, S = .99, C = /[\\\/_+.#"@\[\(\{&]/, te = /[\\\/_+.#"@\[\(\{&]/g, ne = /[\s-]/, w = /[\s-]/g;
function T(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? g : S;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = T(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= g : C.test(e.charAt(l - 1)) ? (d *= v, p = e.slice(i, l - 1).match(te), p && i > 0 && (d *= b ** +p.length)) : ne.test(e.charAt(l - 1)) ? (d *= _, m = e.slice(i, l - 1).match(w), m && i > 0 && (d *= b ** +m.length)) : (d *= ee, i > 0 && (d *= b ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= x)), (d < y && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = T(e, t, n, r, l + 1, a + 2, o), f * y > d && (d = f * y)), d > u && (u = d), l = n.indexOf(c, l + 1);
	return o[s] = u, u;
}
function re(e) {
	return e.toLowerCase().replace(w, " ");
}
function ie(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, T(e, t, re(e), re(t), 0, 0, {});
}
// node_modules/@radix-ui/primitive/dist/index.mjs
var E = Object.defineProperty, D = (e, t) => E(e, "name", {
	value: t,
	configurable: !0
}), ae = !!(typeof window < "u" && window.document && window.document.createElement);
function O(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ D(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
D(O, "composeEventHandlers");
function oe(e) {
	if (!ae) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
D(oe, "getOwnerWindow");
function se(e) {
	if (!ae) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
D(se, "getOwnerDocument");
function ce(e, t = !1) {
	let { activeElement: n } = se(e);
	if (!n?.nodeName) return null;
	if (le(n) && n.contentDocument) return ce(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = se(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
D(ce, "getActiveElement");
function le(e) {
	return e.tagName === "IFRAME";
}
D(le, "isFrame");
// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var ue = Object.defineProperty, de = (e, t) => ue(e, "name", {
	value: t,
	configurable: !0
});
function fe(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
de(fe, "setRef");
function k(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = fe(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : fe(e[t], null);
			}
		};
	};
}
de(k, "composeRefs");
function A(...e) {
	return h.useCallback(k(...e), e);
}
de(A, "useComposedRefs");
// node_modules/@radix-ui/react-context/dist/index.mjs
var j = a(), pe = Object.defineProperty, M = (e, t) => pe(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function me(e, t) {
	let n = h.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ M((e) => {
		let { children: t, ...r } = e, i = h.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, j.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = h.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return M(i, "useContext"), [r, i];
}
M(me, "createContext");
// @__NO_SIDE_EFFECTS__
function he(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = h.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ M((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = h.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, j.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = h.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return M(s, "useContext"), [o, s];
	}
	M(r, "createContext");
	let i = /* @__PURE__ */ M(() => {
		let t = n.map((e) => h.createContext(e));
		return /* @__PURE__ */ M(function(n) {
			let r = n?.[e] || t;
			return h.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, ge(i, ...t)];
}
M(he, "createContextScope");
function ge(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ M(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ M(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return h.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
M(ge, "composeContextScopes");
// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var N = globalThis?.document ? h.useLayoutEffect : () => {}, _e = Object.defineProperty, ve = (e, t) => _e(e, "name", {
	value: t,
	configurable: !0
}), ye = h.useId || (() => void 0), be = 0;
function P(e) {
	let [t, n] = h.useState(ye());
	return N(() => {
		e || n((e) => e ?? String(be++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
ve(P, "useId");
// node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var xe = Object.defineProperty, Se = (e, t) => xe(e, "name", {
	value: t,
	configurable: !0
}), Ce = h.useEffectEvent, we = h.useInsertionEffect;
function Te(e) {
	if (typeof Ce == "function") return Ce(e);
	let t = h.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof we == "function" ? we(() => {
		t.current = e;
	}) : N(() => {
		t.current = e;
	}), h.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Se(Te, "useEffectEvent");
// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Ee = Object.defineProperty, De = (e, t) => Ee(e, "name", {
	value: t,
	configurable: !0
}), Oe = h.useInsertionEffect || N;
function ke({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ De(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = Ae({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, h.useCallback((t) => {
		if (s) {
			let n = je(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
De(ke, "useControllableState");
function Ae({ defaultProp: e, onChange: t }) {
	let [n, r] = h.useState(e), i = h.useRef(n), a = h.useRef(t);
	return Oe(() => {
		a.current = t;
	}, [t]), h.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
De(Ae, "useUncontrolledState");
function je(e) {
	return typeof e == "function";
}
De(je, "isFunction");
var Me = Symbol("RADIX:SYNC_STATE");
function Ne(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Te(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = h.useReducer((t, n) => {
		if (n.type === Me) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = h.useRef(p);
	h.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let g = h.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return h.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: Me,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [g, f];
}
De(Ne, "useControllableStateReducer");
// node_modules/@radix-ui/react-slot/dist/index.mjs
var Pe = /* @__PURE__ */ e(o(), 1), Fe = Object.defineProperty, F = (e, t) => Fe(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ie(e) {
	let t = h.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		r = Ke(r), h.Children.forEach(r, (e) => {
			if (He(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				for (; We(n) && typeof Xe == "function";) n = Xe(n._payload);
				a = ze(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = h.cloneElement(a, void 0, s) : !o && h.Children.count(r) === 1 && h.isValidElement(r) && (a = r);
		let c = a ? Ve(a) : void 0, l = A(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? Ye(e) : Je(e));
			return r;
		}
		let u = Be(i, a.props ?? {});
		return a.type !== h.Fragment && (u.ref = n ? l : c), h.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
F(Ie, "createSlot");
var Le = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Re(e) {
	let t = /* @__PURE__ */ F((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Le, t;
}
F(Re, "createSlottable");
var ze = /* @__PURE__ */ F((e, t) => "child" in e.props ? h.isValidElement(t) ? h.cloneElement(t, void 0, e.props.children(t.props.children)) : null : h.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function Be(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = qe(a, i));
	}
	return {
		...e,
		...n
	};
}
F(Be, "mergeProps");
function Ve(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
F(Ve, "getElementRef");
function He(e) {
	return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Le;
}
F(He, "isSlottable");
var Ue = Symbol.for("react.lazy");
function We(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Ue && "_payload" in e && Ge(e._payload);
}
F(We, "isLazyComponent");
function Ge(e) {
	return typeof e == "object" && !!e && "then" in e;
}
F(Ge, "isPromiseLike");
function Ke(e) {
	let t = e;
	for (; We(t) && typeof Xe == "function";) t = Xe(t._payload);
	return t;
}
F(Ke, "useUnwrappedLazy");
function qe(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
F(qe, "concatAriaDescribedby");
var Je = /* @__PURE__ */ F((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Ye = /* @__PURE__ */ F((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Xe = h.use, Ze = Object.defineProperty, Qe = (e, t) => Ze(e, "name", {
	value: t,
	configurable: !0
}), I = [
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
	let n = /* @__PURE__ */ Ie(`Primitive.${t}`), r = h.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, j.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function $e(e, t) {
	e && Pe.flushSync(() => e.dispatchEvent(t));
}
Qe($e, "dispatchDiscreteCustomEvent");
// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var et = Object.defineProperty, tt = (e, t) => et(e, "name", {
	value: t,
	configurable: !0
}), nt = h.useInsertionEffect;
function L(e) {
	let t = h.useRef(e);
	return typeof nt == "function" ? nt(() => {
		t.current = e;
	}) : N(() => {
		t.current = e;
	}), h.useMemo(() => ((...e) => t.current?.(...e)), []);
}
tt(L, "useCallbackRef");
// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var rt = Object.defineProperty, R = (e, t) => rt(e, "name", {
	value: t,
	configurable: !0
}), it = "dismissableLayer.update", at = "dismissableLayer.pointerDownOutside", ot = "dismissableLayer.focusOutside", st, ct = h.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), lt = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ R(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = h.useContext(ct), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = A(t, f), _ = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), ee = v ? _.indexOf(v) : -1, y = d ? _.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= ee, S = h.useRef(!1), C = ft((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: h.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return x && !t;
		}, [u.branches, x])
	}), te = pt((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), ne = d ? y === _.length - 1 : !1, w = L((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return h.useEffect(() => {
		if (ne) return p.addEventListener("keydown", w, { capture: !0 }), () => p.removeEventListener("keydown", w, { capture: !0 });
	}, [
		p,
		ne,
		w
	]), h.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (st = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), mt(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = st));
		};
	}, [
		d,
		p,
		n,
		u
	]), h.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), mt());
	}, [d, u]), h.useEffect(() => {
		let e = /* @__PURE__ */ R(() => m({}), "handleUpdate");
		return document.addEventListener(it, e), () => document.removeEventListener(it, e);
	}, []), /* @__PURE__ */ (0, j.jsx)(I.div, {
		...l,
		ref: g,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: O(e.onFocusCapture, te.onFocusCapture),
		onBlurCapture: O(e.onBlurCapture, te.onBlurCapture),
		onPointerDownCapture: O(e.onPointerDownCapture, C.onPointerDownCapture)
	});
}, "DismissableLayer"));
function ut() {
	let e = h.useContext(ct), [t, n] = h.useState(null);
	return h.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
R(ut, "useDismissableLayerSurface");
var dt = /* @__PURE__ */ R(() => !0, "IS_TRUE");
function ft(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = dt } = t, s = L(e), c = h.useRef(!1), l = h.useRef(!1), u = h.useRef(/* @__PURE__ */ new Map()), d = h.useRef(() => {});
	return h.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		R(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		R(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		R(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		R(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ R((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || ht(at, s, p, { discrete: !0 });
				};
				if (R(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ R(() => c.current = !0, "onPointerDownCapture") };
}
R(ft, "usePointerDownOutside");
function pt(e, t = globalThis?.document) {
	let n = L(e), r = h.useRef(!1);
	return h.useEffect(() => {
		let e = /* @__PURE__ */ R((e) => {
			e.target && !r.current && ht(ot, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ R(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ R(() => r.current = !1, "onBlurCapture")
	};
}
R(pt, "useFocusOutside");
function mt() {
	let e = new CustomEvent(it);
	document.dispatchEvent(e);
}
R(mt, "dispatchUpdate");
function ht(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? $e(i, a) : i.dispatchEvent(a);
}
R(ht, "handleAndDispatchCustomEvent");
// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var gt = Object.defineProperty, z = (e, t) => gt(e, "name", {
	value: t,
	configurable: !0
}), _t = "focusScope.autoFocusOnMount", vt = "focusScope.autoFocusOnUnmount", yt = {
	bubbles: !1,
	cancelable: !0
}, bt = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let { loop: n = !1, trapped: r = !1, branches: i, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [c, l] = h.useState(null), u = L(a), d = L(o), f = h.useRef(null), p = A(t, l), m = h.useRef(i);
	h.useEffect(() => {
		m.current = i;
	});
	let g = h.useCallback((e) => e ? c?.contains(e) ? !0 : !!m.current?.some((t) => t.contains(e)) : !1, [c]), _ = h.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	h.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (_.paused || !c) return;
				let t = e.target;
				g(t) ? f.current = t : B(f.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || B(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && B(c);
			};
			z(e, "handleFocusIn"), z(t, "handleFocusOut"), z(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		_.paused,
		g
	]), h.useEffect(() => {
		if (c) {
			jt.add(_);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(_t, yt);
				c.addEventListener(_t, u), c.dispatchEvent(t), t.defaultPrevented || (Tt(Pt(Dt(c)), { select: !0 }), document.activeElement === e && B(c));
			}
			return () => {
				c.removeEventListener(_t, u);
				let t = c.ownerDocument, n = CustomEvent;
				setTimeout(() => {
					let r = new n(vt, yt);
					c.addEventListener(vt, d), c.dispatchEvent(r), r.defaultPrevented || B(e ?? t.body, { select: !0 }), c.removeEventListener(vt, d), jt.remove(_);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		_
	]);
	let v = h.useCallback((e) => {
		if (!n && !r || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Et(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && B(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && B(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		_.paused
	]);
	return /* @__PURE__ */ (0, j.jsx)(I.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: v
	});
}, "FocusScope")), xt = h.createContext(null);
function St({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ (0, j.jsx)(xt.Provider, {
		value: e,
		children: t
	}) : t;
}
z(St, "FocusScopeBranchProvider");
function Ct() {
	let [e, t] = h.useState([]);
	return {
		nodes: e,
		registry: h.useMemo(() => ({
			add: /* @__PURE__ */ z((e) => t((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ z((e) => t((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
z(Ct, "useFocusScopeBranchRegistry");
function wt(e) {
	let t = h.useContext(xt);
	h.useEffect(() => {
		if (e && t) return t.add(e), () => t.remove(e);
	}, [e, t]);
}
z(wt, "useFocusScopeBranch");
function Tt(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (B(r, { select: t }), document.activeElement !== n) return;
}
z(Tt, "focusFirst");
function Et(e) {
	let t = Dt(e);
	return [Ot(t, e), Ot(t.reverse(), e)];
}
z(Et, "getTabbableEdges");
function Dt(e) {
	let t = [], n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ z((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
z(Dt, "getTabbableCandidates");
function Ot(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : kt(r, { upTo: t }))) return r;
}
z(Ot, "findVisible");
function kt(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
z(kt, "isHidden");
function At(e) {
	return e.tagName === "INPUT" && typeof e.select == "function";
}
z(At, "isSelectableInput");
function B(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = (e.ownerDocument ?? document).activeElement;
		e.focus({ preventScroll: !0 }), e !== n && At(e) && t && e.select();
	}
}
z(B, "focus");
var jt = Mt();
function Mt() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Nt(e, t), e.unshift(t);
		},
		remove(t) {
			e = Nt(e, t), e[0]?.resume();
		}
	};
}
z(Mt, "createFocusScopesStack");
function Nt(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
z(Nt, "arrayRemove");
function Pt(e) {
	return e.filter((e) => e.tagName !== "A");
}
z(Pt, "removeLinks");
// node_modules/@radix-ui/react-portal/dist/index.mjs
var Ft = Object.defineProperty, It = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ ((e, t) => Ft(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = h.useState(!1);
	N(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? Pe.createPortal(/* @__PURE__ */ (0, j.jsx)(I.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), Lt = Object.defineProperty, V = (e, t) => Lt(e, "name", {
	value: t,
	configurable: !0
});
function Rt(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
V(Rt, "useStateMachine");
var zt = /* @__PURE__ */ V((e) => {
	let { present: t, children: n } = e, r = Bt(t), i = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), a = Ht(r.ref, Ut(i));
	return typeof n == "function" || r.isPresent ? h.cloneElement(i, { ref: a }) : null;
}, "Presence");
function Bt(e) {
	let [t, n] = h.useState(), r = h.useRef(null), i = h.useRef(e), a = h.useRef("none"), o = h.useRef(void 0), [s, c] = Rt(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return h.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? H(r.current), o.current = void 0) : a.current = "none";
	}, [s]), N(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = H(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), N(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ V((a) => {
				let o = H(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ V((e) => {
				e.target === t && (a.current = H(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: h.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = H(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
V(Bt, "usePresence");
function Vt(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
V(Vt, "setRef");
function Ht(...e) {
	let t = h.useRef(e);
	return t.current = e, h.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Vt(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Vt(n[e], null);
			}
		};
	}, []);
}
V(Ht, "useStableComposedRefs");
function H(e) {
	return e?.animationName || "none";
}
V(H, "getAnimationName");
function Ut(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
V(Ut, "getElementRef");
// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Wt = Object.defineProperty, Gt = (e, t) => Wt(e, "name", {
	value: t,
	configurable: !0
}), Kt = 0, qt = null;
function Jt(e) {
	return Yt(), e.children;
}
Gt(Jt, "FocusGuards");
function Yt() {
	h.useEffect(() => {
		qt ||= {
			start: Xt(),
			end: Xt()
		};
		let { start: e, end: t } = qt;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Kt++, () => {
			Kt === 1 && (qt?.start.remove(), qt?.end.remove(), qt = null), Kt = Math.max(0, Kt - 1);
		};
	}, []);
}
Gt(Yt, "useFocusGuards");
function Xt() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Gt(Xt, "createFocusGuard");
// node_modules/tslib/tslib.es6.mjs
var U = function() {
	return U = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, U.apply(this, arguments);
};
function Zt(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Qt(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var $t = "right-scroll-bar-position", en = "width-before-scroll-bar", tn = "with-scroll-bars-hidden", nn = "--removed-body-scroll-bar-size";
// node_modules/use-callback-ref/dist/es2015/assignRef.js
function rn(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/use-callback-ref/dist/es2015/useRef.js
function an(e, t) {
	var n = (0, h.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var on = typeof window < "u" ? h.useLayoutEffect : h.useEffect, sn = /* @__PURE__ */ new WeakMap();
function cn(e, t) {
	var n = an(t || null, function(t) {
		return e.forEach(function(e) {
			return rn(e, t);
		});
	});
	return on(function() {
		var t = sn.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || rn(e, null);
			}), i.forEach(function(e) {
				r.has(e) || rn(e, a);
			});
		}
		sn.set(n, e);
	}, [e]), n;
}
// node_modules/use-sidecar/dist/es2015/medium.js
function ln(e) {
	return e;
}
function un(e, t) {
	t === void 0 && (t = ln);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function dn(e) {
	e === void 0 && (e = {});
	var t = un(null);
	return t.options = U({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/use-sidecar/dist/es2015/exports.js
var fn = function(e) {
	var t = e.sideCar, n = Zt(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return h.createElement(r, U({}, n));
};
fn.isSideCarExport = !0;
function pn(e, t) {
	return e.useMedium(t), fn;
}
// node_modules/react-remove-scroll/dist/es2015/medium.js
var mn = dn(), hn = function() {}, gn = h.forwardRef(function(e, t) {
	var n = h.useRef(null), r = h.useState({
		onScrollCapture: hn,
		onWheelCapture: hn,
		onTouchMoveCapture: hn
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, ee = v === void 0 ? "div" : v, y = e.gapMode, b = Zt(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = cn([n, t]), C = U(U({}, b), i);
	return h.createElement(h.Fragment, null, u && h.createElement(x, {
		sideCar: mn,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: y
	}), o ? h.cloneElement(h.Children.only(s), U(U({}, C), { ref: S })) : h.createElement(ee, U({}, C, {
		className: c,
		ref: S
	}), s));
});
gn.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, gn.classNames = {
	fullWidth: en,
	zeroRight: $t
};
// node_modules/get-nonce/dist/es2015/index.js
var _n = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/react-style-singleton/dist/es2015/singleton.js
function vn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = _n();
	return t && e.setAttribute("nonce", t), e;
}
function yn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var xn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = vn()) && (yn(t, n), bn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Sn = function() {
	var e = xn();
	return function(t, n) {
		h.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Cn = function() {
	var e = Sn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, wn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Tn = function(e) {
	return parseInt(e || "", 10) || 0;
}, En = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Tn(n),
		Tn(r),
		Tn(i)
	];
}, Dn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return wn;
	var t = En(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, On = Cn(), kn = "data-scroll-locked", An = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${tn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${kn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${$t} {
    right: ${s}px ${r};
  }
  
  .${en} {
    margin-right: ${s}px ${r};
  }
  
  .${$t} .${$t} {
    right: 0 ${r};
  }
  
  .${en} .${en} {
    margin-right: 0 ${r};
  }
  
  body[${kn}] {
    ${nn}: ${s}px;
  }
`;
}, jn = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Mn = function() {
	h.useEffect(function() {
		return document.body.setAttribute(kn, (jn() + 1).toString()), function() {
			var e = jn() - 1;
			e <= 0 ? document.body.removeAttribute(kn) : document.body.setAttribute(kn, e.toString());
		};
	}, []);
}, Nn = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Mn();
	var a = h.useMemo(function() {
		return Dn(i);
	}, [i]);
	return h.createElement(On, { styles: An(a, !t, i, n ? "" : "!important") });
}, Pn = !1;
if (typeof window < "u") try {
	var Fn = Object.defineProperty({}, "passive", { get: function() {
		return Pn = !0, !0;
	} });
	window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
} catch {
	Pn = !1;
}
var W = Pn ? { passive: !1 } : !1, In = function(e) {
	return e.tagName === "TEXTAREA";
}, Ln = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !In(e) && n[t] === "visible");
}, Rn = function(e) {
	return Ln(e, "overflowY");
}, zn = function(e) {
	return Ln(e, "overflowX");
}, Bn = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Un(e, r)) {
			var i = Wn(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Vn = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Hn = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Un = function(e, t) {
	return e === "v" ? Rn(t) : zn(t);
}, Wn = function(e, t) {
	return e === "v" ? Vn(t) : Hn(t);
}, Gn = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Kn = function(e, t, n, r, i) {
	var a = Gn(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Wn(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Un(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, qn = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Jn = function(e) {
	return [e.deltaX, e.deltaY];
}, Yn = function(e) {
	return e && "current" in e ? e.current : e;
}, Xn = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Zn = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Qn = 0, G = [];
function $n(e) {
	var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), i = h.useState(Qn++)[0], a = h.useState(Cn)[0], o = h.useRef(e);
	h.useEffect(function() {
		o.current = e;
	}, [e]), h.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Qt([e.lockRef.current], (e.shards || []).map(Yn), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = h.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = qn(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Bn(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Bn(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Kn(h, t, e, h === "h" ? s : c, !0);
	}, []), c = h.useCallback(function(e) {
		var n = e;
		if (G.length && G[G.length - 1] === a) {
			var r = "deltaY" in n ? Jn(n) : qn(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Xn(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(Yn).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = h.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: er(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = h.useCallback(function(e) {
		n.current = qn(e), r.current = void 0;
	}, []), d = h.useCallback(function(t) {
		l(t.type, Jn(t), t.target, s(t, e.lockRef.current));
	}, []), f = h.useCallback(function(t) {
		l(t.type, qn(t), t.target, s(t, e.lockRef.current));
	}, []);
	h.useEffect(function() {
		return G.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, W), document.addEventListener("touchmove", c, W), document.addEventListener("touchstart", u, W), function() {
			G = G.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, W), document.removeEventListener("touchmove", c, W), document.removeEventListener("touchstart", u, W);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return h.createElement(h.Fragment, null, m ? h.createElement(a, { styles: Zn(i) }) : null, p ? h.createElement(Nn, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function er(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var tr = pn(mn, $n), nr = h.forwardRef(function(e, t) {
	return h.createElement(gn, U({}, e, {
		ref: t,
		sideCar: tr
	}));
});
nr.classNames = gn.classNames;
// node_modules/aria-hidden/dist/es2015/index.js
var rr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, K = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), ar = {}, or = 0, sr = function(e) {
	return e && (e.host || sr(e.parentNode));
}, cr = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = sr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, lr = function(e, t, n, r) {
	var i = cr(t, Array.isArray(e) ? e : [e]);
	ar[n] || (ar[n] = /* @__PURE__ */ new WeakMap());
	var a = ar[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (K.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				K.set(e, c), a.set(e, l), o.push(e), c === 1 && i && ir.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), or++, function() {
		o.forEach(function(e) {
			var t = K.get(e) - 1, i = a.get(e) - 1;
			K.set(e, t), a.set(e, i), t || (ir.has(e) || e.removeAttribute(r), ir.delete(e)), i || e.removeAttribute(n);
		}), or--, or || (K = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), ar = {});
	};
}, ur = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || rr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), lr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, dr = Object.defineProperty, q = (e, t) => dr(e, "name", {
	value: t,
	configurable: !0
}), fr = "Dialog", [pr, mr] = /* @__PURE__ */ he(fr), [hr, J] = pr(fr), gr = /* @__PURE__ */ q((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = h.useRef(null), c = h.useRef(null), { nodes: l, registry: u } = Ct(), [d, f] = ke({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: fr
	}), [p, m] = h.useState(0), [g, _] = h.useState(0);
	return /* @__PURE__ */ (0, j.jsx)(hr, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: P(),
		titleId: P(),
		descriptionId: P(),
		titlePresent: p > 0,
		descriptionPresent: g > 0,
		setTitleCount: m,
		setDescriptionCount: _,
		open: d,
		onOpenChange: f,
		onOpenToggle: h.useCallback(() => f((e) => !e), [f]),
		modal: o,
		branchNodes: l,
		branchRegistry: u,
		children: n
	});
}, "Dialog"), _r = "DialogPortal", [vr, yr] = pr(_r, { forceMount: void 0 }), br = /* @__PURE__ */ q((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = J(_r, t);
	return /* @__PURE__ */ (0, j.jsx)(vr, {
		scope: t,
		forceMount: n,
		children: h.Children.map(r, (e) => /* @__PURE__ */ (0, j.jsx)(zt, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, j.jsx)(It, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), xr = "DialogOverlay", Sr = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = yr(xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = J(xr, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, j.jsx)(zt, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, j.jsx)(wr, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), Cr = /* @__PURE__ */ Ie("DialogOverlay.RemoveScroll"), wr = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = J(xr, n), a = A(t, ut());
	return /* @__PURE__ */ (0, j.jsx)(nr, {
		as: Cr,
		allowPinchZoom: !0,
		shards: h.useMemo(() => [i.contentRef, ...i.branchNodes.map((e) => ({ current: e }))], [i.contentRef, i.branchNodes]),
		children: /* @__PURE__ */ (0, j.jsx)(I.div, {
			"data-state": jr(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}, "DialogOverlayImpl")), Tr = "DialogContent", Er = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = yr(Tr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = J(Tr, e.__scopeDialog);
	return /* @__PURE__ */ (0, j.jsx)(zt, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, j.jsx)(Dr, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, j.jsx)(Or, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), Dr = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = J(Tr, e.__scopeDialog), r = h.useRef(null), i = A(t, n.contentRef, r);
	return h.useEffect(() => {
		let e = r.current;
		if (e) return ur(e);
	}, []), /* @__PURE__ */ (0, j.jsx)(kr, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: O(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: O(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: O(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), Or = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = J(Tr, e.__scopeDialog), r = h.useRef(!1), i = h.useRef(!1);
	return /* @__PURE__ */ (0, j.jsx)(kr, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "DialogContentNonModal")), kr = /* @__PURE__ */ h.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = J(Tr, n);
	return Yt(), /* @__PURE__ */ (0, j.jsx)(St, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ (0, j.jsx)(bt, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ (0, j.jsx)(lt, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? Ar(o, l.descriptionId) : o,
				"data-state": jr(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl"));
function Ar(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
q(Ar, "concatAriaDescribedby");
function jr(e) {
	return e ? "open" : "closed";
}
q(jr, "getState");
// node_modules/cmdk/dist/index.mjs
var Mr = "[cmdk-group=\"\"]", Nr = "[cmdk-group-items=\"\"]", Pr = "[cmdk-group-heading=\"\"]", Fr = "[cmdk-item=\"\"]", Ir = `${Fr}:not([aria-disabled="true"])`, Lr = "cmdk-item-select", Y = "data-value", Rr = (e, t, n) => ie(e, t, n), zr = h.createContext(void 0), Br = () => h.useContext(zr), Vr = h.createContext(void 0), Hr = () => h.useContext(Vr), Ur = h.createContext(void 0), Wr = h.forwardRef((e, t) => {
	let n = Q(() => ({
		search: "",
		value: e.value ?? e.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), r = Q(() => /* @__PURE__ */ new Set()), i = Q(() => /* @__PURE__ */ new Map()), a = Q(() => /* @__PURE__ */ new Map()), o = Q(() => /* @__PURE__ */ new Set()), s = ti(e), { label: c, children: l, value: u, onValueChange: d, filter: f, shouldFilter: p, loop: m, disablePointerSelection: g = !1, vimBindings: _ = !0, ...v } = e, ee = P(), y = P(), b = P(), x = h.useRef(null), S = ri();
	Z(() => {
		if (u !== void 0) {
			let e = u.trim();
			n.current.value = e, C.emit();
		}
	}, [u]), Z(() => {
		S(6, ie);
	}, []);
	let C = h.useMemo(() => ({
		subscribe: (e) => (o.current.add(e), () => o.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, t, r) => {
			var i, a, o;
			if (!Object.is(n.current[e], t)) {
				if (n.current[e] = t, e === "search") re(), w(), S(1, T);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(b);
						e ? e.focus() : (i = document.getElementById(ee)) == null || i.focus();
					}
					if (S(7, () => {
						n.current.selectedItemId = E()?.id, C.emit();
					}), r || S(5, ie), s.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = s.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				C.emit();
			}
		},
		emit: () => {
			o.current.forEach((e) => e());
		}
	}), []), te = h.useMemo(() => ({
		value: (e, t, r) => {
			t !== a.current.get(e)?.value && (a.current.set(e, {
				value: t,
				keywords: r
			}), n.current.filtered.items.set(e, ne(t, r)), S(2, () => {
				w(), C.emit();
			}));
		},
		item: (e, t) => (r.current.add(e), t && (i.current.has(t) ? i.current.get(t).add(e) : i.current.set(t, /* @__PURE__ */ new Set([e]))), S(3, () => {
			re(), w(), n.current.value || T(), C.emit();
		}), () => {
			a.current.delete(e), r.current.delete(e), n.current.filtered.items.delete(e);
			let t = E();
			S(4, () => {
				re(), t?.getAttribute("id") === e && T(), C.emit();
			});
		}),
		group: (e) => (i.current.has(e) || i.current.set(e, /* @__PURE__ */ new Set()), () => {
			a.current.delete(e), i.current.delete(e);
		}),
		filter: () => s.current.shouldFilter,
		label: c || e["aria-label"],
		getDisablePointerSelection: () => s.current.disablePointerSelection,
		listId: ee,
		inputId: b,
		labelId: y,
		listInnerRef: x
	}), []);
	function ne(e, t) {
		let r = s.current?.filter ?? Rr;
		return e ? r(e, n.current.search, t) : 0;
	}
	function w() {
		if (!n.current.search || s.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, t = [];
		n.current.filtered.groups.forEach((n) => {
			let r = i.current.get(n), a = 0;
			r.forEach((t) => {
				let n = e.get(t);
				a = Math.max(n, a);
			}), t.push([n, a]);
		});
		let r = x.current;
		D().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(Nr);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${Nr} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${Nr} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = x.current?.querySelector(`${Mr}[${Y}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function T() {
		let e = D().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(Y);
		C.setState("value", e || void 0);
	}
	function re() {
		if (!n.current.search || s.current.shouldFilter === !1) {
			n.current.filtered.count = r.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of r.current) {
			let r = ne(a.current.get(t)?.value ?? "", a.current.get(t)?.keywords ?? []);
			n.current.filtered.items.set(t, r), r > 0 && e++;
		}
		for (let [e, t] of i.current) for (let r of t) if (n.current.filtered.items.get(r) > 0) {
			n.current.filtered.groups.add(e);
			break;
		}
		n.current.filtered.count = e;
	}
	function ie() {
		var e;
		let t = E();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(Mr)?.querySelector(Pr)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function E() {
		return x.current?.querySelector(`${Fr}[aria-selected="true"]`);
	}
	function D() {
		return Array.from(x.current?.querySelectorAll(Ir) || []);
	}
	function ae(e) {
		let t = D()[e];
		t && C.setState("value", t.getAttribute(Y));
	}
	function O(e) {
		var t;
		let n = E(), r = D(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = s.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && C.setState("value", a.getAttribute(Y));
	}
	function oe(e) {
		let t = E()?.closest(Mr), n;
		for (; t && !n;) t = e > 0 ? $r(t, Mr) : ei(t, Mr), n = t?.querySelector(Ir);
		n ? C.setState("value", n.getAttribute(Y)) : O(e);
	}
	let se = () => ae(D().length - 1), ce = (e) => {
		e.preventDefault(), e.metaKey ? se() : e.altKey ? oe(1) : O(1);
	}, le = (e) => {
		e.preventDefault(), e.metaKey ? ae(0) : e.altKey ? oe(-1) : O(-1);
	};
	return h.createElement(I.div, {
		ref: t,
		tabIndex: -1,
		...v,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = v.onKeyDown) == null || t.call(v, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					_ && e.ctrlKey && ce(e);
					break;
				case "ArrowDown":
					ce(e);
					break;
				case "p":
				case "k":
					_ && e.ctrlKey && le(e);
					break;
				case "ArrowUp":
					le(e);
					break;
				case "Home":
					e.preventDefault(), ae(0);
					break;
				case "End":
					e.preventDefault(), se();
					break;
				case "Enter": {
					e.preventDefault();
					let t = E();
					if (t) {
						let e = new Event(Lr);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, h.createElement("label", {
		"cmdk-label": "",
		htmlFor: te.inputId,
		id: te.labelId,
		style: oi
	}, c), ai(e, (e) => h.createElement(Vr.Provider, { value: C }, h.createElement(zr.Provider, { value: te }, e))));
}), Gr = h.forwardRef((e, t) => {
	let n = P(), r = h.useRef(null), i = h.useContext(Ur), a = Br(), o = ti(e), s = o.current?.forceMount ?? i?.forceMount;
	Z(() => {
		if (!s) return a.item(n, i?.id);
	}, [s]);
	let c = ni(n, r, [
		e.value,
		e.children,
		r
	], e.keywords), l = Hr(), u = $((e) => e.value && e.value === c.current), d = $((e) => s || a.filter() === !1 ? !0 : !e.search || e.filtered.items.get(n) > 0);
	h.useEffect(() => {
		let t = r.current;
		if (t && !e.disabled) return t.addEventListener(Lr, f), () => t.removeEventListener(Lr, f);
	}, [
		d,
		e.onSelect,
		e.disabled
	]);
	function f() {
		var e, t;
		p(), (t = (e = o.current).onSelect) == null || t.call(e, c.current);
	}
	function p() {
		l.setState("value", c.current, !0);
	}
	if (!d) return null;
	let { disabled: m, value: g, onSelect: _, forceMount: v, keywords: ee, ...y } = e;
	return h.createElement(I.div, {
		ref: k(r, t),
		...y,
		id: n,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!m,
		"aria-selected": !!u,
		"data-disabled": !!m,
		"data-selected": !!u,
		onPointerMove: m || a.getDisablePointerSelection() ? void 0 : p,
		onClick: m ? void 0 : f
	}, e.children);
}), Kr = h.forwardRef((e, t) => {
	let { heading: n, children: r, forceMount: i, ...a } = e, o = P(), s = h.useRef(null), c = h.useRef(null), l = P(), u = Br(), d = $((e) => i || u.filter() === !1 ? !0 : !e.search || e.filtered.groups.has(o));
	Z(() => u.group(o), []), ni(o, s, [
		e.value,
		e.heading,
		c
	]);
	let f = h.useMemo(() => ({
		id: o,
		forceMount: i
	}), [i]);
	return h.createElement(I.div, {
		ref: k(s, t),
		...a,
		"cmdk-group": "",
		role: "presentation",
		hidden: !d || void 0
	}, n && h.createElement("div", {
		ref: c,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: l
	}, n), ai(e, (e) => h.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": n ? l : void 0
	}, h.createElement(Ur.Provider, { value: f }, e))));
}), qr = h.forwardRef((e, t) => {
	let { alwaysRender: n, ...r } = e, i = h.useRef(null), a = $((e) => !e.search);
	return !n && !a ? null : h.createElement(I.div, {
		ref: k(i, t),
		...r,
		"cmdk-separator": "",
		role: "separator"
	});
}), Jr = h.forwardRef((e, t) => {
	let { onValueChange: n, ...r } = e, i = e.value != null, a = Hr(), o = $((e) => e.search), s = $((e) => e.selectedItemId), c = Br();
	return h.useEffect(() => {
		e.value != null && a.setState("search", e.value);
	}, [e.value]), h.createElement(I.input, {
		ref: t,
		...r,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": c.listId,
		"aria-labelledby": c.labelId,
		"aria-activedescendant": s,
		id: c.inputId,
		type: "text",
		value: i ? e.value : o,
		onChange: (e) => {
			i || a.setState("search", e.target.value), n?.(e.target.value);
		}
	});
}), Yr = h.forwardRef((e, t) => {
	let { children: n, label: r = "Suggestions", ...i } = e, a = h.useRef(null), o = h.useRef(null), s = $((e) => e.selectedItemId), c = Br();
	return h.useEffect(() => {
		if (o.current && a.current) {
			let e = o.current, t = a.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), h.createElement(I.div, {
		ref: k(a, t),
		...i,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": s,
		"aria-label": r,
		id: c.listId
	}, ai(e, (e) => h.createElement("div", {
		ref: k(o, c.listInnerRef),
		"cmdk-list-sizer": ""
	}, e)));
}), Xr = h.forwardRef((e, t) => {
	let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e;
	return h.createElement(gr, {
		open: n,
		onOpenChange: r
	}, h.createElement(br, { container: o }, h.createElement(Sr, {
		"cmdk-overlay": "",
		className: i
	}), h.createElement(Er, {
		"aria-label": e.label,
		"cmdk-dialog": "",
		className: a
	}, h.createElement(Wr, {
		ref: t,
		...s
	}))));
}), Zr = h.forwardRef((e, t) => $((e) => e.filtered.count === 0) ? h.createElement(I.div, {
	ref: t,
	...e,
	"cmdk-empty": "",
	role: "presentation"
}) : null), Qr = h.forwardRef((e, t) => {
	let { progress: n, children: r, label: i = "Loading...", ...a } = e;
	return h.createElement(I.div, {
		ref: t,
		...a,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i
	}, ai(e, (e) => h.createElement("div", { "aria-hidden": !0 }, e)));
}), X = Object.assign(Wr, {
	List: Yr,
	Item: Gr,
	Input: Jr,
	Group: Kr,
	Separator: qr,
	Dialog: Xr,
	Empty: Zr,
	Loading: Qr
});
function $r(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function ei(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function ti(e) {
	let t = h.useRef(e);
	return Z(() => {
		t.current = e;
	}), t;
}
var Z = typeof window > "u" ? h.useEffect : h.useLayoutEffect;
function Q(e) {
	let t = h.useRef();
	return t.current === void 0 && (t.current = e()), t;
}
function $(e) {
	let t = Hr(), n = () => e(t.snapshot());
	return h.useSyncExternalStore(t.subscribe, n, n);
}
function ni(e, t, n, r = []) {
	let i = h.useRef(), a = Br();
	return Z(() => {
		var o;
		let s = (() => {
			for (let e of n) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : i.current;
			}
		})(), c = r.map((e) => e.trim());
		a.value(e, s, c), (o = t.current) == null || o.setAttribute(Y, s), i.current = s;
	}), i;
}
var ri = () => {
	let [e, t] = h.useState(), n = Q(() => /* @__PURE__ */ new Map());
	return Z(() => {
		n.current.forEach((e) => e()), n.current = /* @__PURE__ */ new Map();
	}, [e]), (e, r) => {
		n.current.set(e, r), t({});
	};
};
function ii(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ai({ asChild: e, children: t }, n) {
	return e && h.isValidElement(t) ? h.cloneElement(ii(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var oi = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
};
// upstream/registry/bases/base/ui/command.tsx
function si({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(X, {
		"data-slot": "command",
		className: s("cn-command flex size-full flex-col overflow-hidden", e),
		...t
	});
}
function ci({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)("div", {
		"data-slot": "command-input-wrapper",
		className: "cn-command-input-wrapper",
		children: /* @__PURE__ */ (0, j.jsxs)(l, {
			className: "cn-command-input-group",
			children: [/* @__PURE__ */ (0, j.jsx)(X.Input, {
				"data-slot": "command-input",
				className: s("cn-command-input outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e),
				...t
			}), /* @__PURE__ */ (0, j.jsx)(c, { children: /* @__PURE__ */ (0, j.jsx)(r, {
				lucide: "SearchIcon",
				tabler: "IconSearch",
				hugeicons: "SearchIcon",
				phosphor: "MagnifyingGlassIcon",
				remixicon: "RiSearchLine",
				className: "cn-command-input-icon"
			}) })]
		})
	});
}
function li({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(X.List, {
		"data-slot": "command-list",
		className: s("cn-command-list overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function ui({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(X.Empty, {
		"data-slot": "command-empty",
		className: s("cn-command-empty", e),
		...t
	});
}
function di({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(X.Group, {
		"data-slot": "command-group",
		className: s("cn-command-group", e),
		...t
	});
}
function fi({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(X.Separator, {
		"data-slot": "command-separator",
		className: s("cn-command-separator", e),
		...t
	});
}
function pi({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, j.jsxs)(X.Item, {
		"data-slot": "command-item",
		className: s("cn-command-item group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...n,
		children: [t, /* @__PURE__ */ (0, j.jsx)(r, {
			lucide: "CheckIcon",
			tabler: "IconCheck",
			hugeicons: "Tick02Icon",
			phosphor: "CheckIcon",
			remixicon: "RiCheckLine",
			className: "cn-command-item-indicator ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
		})]
	});
}
function mi({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)("span", {
		"data-slot": "command-shortcut",
		className: s("cn-command-shortcut", e),
		...t
	});
}
// upstream/examples/base/command-demo.tsx
function hi() {
	return /* @__PURE__ */ (0, j.jsxs)(si, {
		className: "max-w-sm rounded-lg border",
		children: [/* @__PURE__ */ (0, j.jsx)(ci, { placeholder: "Type a command or search..." }), /* @__PURE__ */ (0, j.jsxs)(li, { children: [
			/* @__PURE__ */ (0, j.jsx)(ui, { children: "No results found." }),
			/* @__PURE__ */ (0, j.jsxs)(di, {
				heading: "Suggestions",
				children: [
					/* @__PURE__ */ (0, j.jsxs)(pi, { children: [/* @__PURE__ */ (0, j.jsx)(d, {}), /* @__PURE__ */ (0, j.jsx)("span", { children: "Calendar" })] }),
					/* @__PURE__ */ (0, j.jsxs)(pi, { children: [/* @__PURE__ */ (0, j.jsx)(p, {}), /* @__PURE__ */ (0, j.jsx)("span", { children: "Search Emoji" })] }),
					/* @__PURE__ */ (0, j.jsxs)(pi, {
						disabled: !0,
						children: [/* @__PURE__ */ (0, j.jsx)(u, {}), /* @__PURE__ */ (0, j.jsx)("span", { children: "Calculator" })]
					})
				]
			}),
			/* @__PURE__ */ (0, j.jsx)(fi, {}),
			/* @__PURE__ */ (0, j.jsxs)(di, {
				heading: "Settings",
				children: [
					/* @__PURE__ */ (0, j.jsxs)(pi, { children: [
						/* @__PURE__ */ (0, j.jsx)(m, {}),
						/* @__PURE__ */ (0, j.jsx)("span", { children: "Profile" }),
						/* @__PURE__ */ (0, j.jsx)(mi, { children: "⌘P" })
					] }),
					/* @__PURE__ */ (0, j.jsxs)(pi, { children: [
						/* @__PURE__ */ (0, j.jsx)(n, {}),
						/* @__PURE__ */ (0, j.jsx)("span", { children: "Billing" }),
						/* @__PURE__ */ (0, j.jsx)(mi, { children: "⌘B" })
					] }),
					/* @__PURE__ */ (0, j.jsxs)(pi, { children: [
						/* @__PURE__ */ (0, j.jsx)(f, {}),
						/* @__PURE__ */ (0, j.jsx)("span", { children: "Settings" }),
						/* @__PURE__ */ (0, j.jsx)(mi, { children: "⌘S" })
					] })
				]
			})
		] })]
	});
}
export { hi as CommandDemo };
