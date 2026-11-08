import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useControlled-BkmszdIY.js";
import { t as i } from "./useStableCallback-BmDujACN.js";
import { a, t as o, u as s } from "./useRenderElement-Bc91YjHo.js";
import { t as c } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as l } from "./useCompositeListItem-BEyYtHBh.js";
import { t as u } from "./CompositeList-Br8uoKbd.js";
import { t as d } from "./useBaseUiId-BwhhMxTY.js";
import { b as f, f as p, s as m, t as h, x as g } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as _, i as v, o as y, t as b } from "./useOpenChangeComplete-BfJk_bnM.js";
import { t as x } from "./useButton-CMNj7XNN.js";
import { t as S } from "./owner-C-FapX6G.js";
import { t as C } from "./dist-DCi9UB7o.js";
import { t as w } from "./dist-zgg4f6ja.js";
import { n as T, t as E } from "./shadowDom-D66trjQm.js";
import { t as D } from "./inertValue-cHK2-C55.js";
import { t as O } from "./useCompositeItem-DXDw5OY1.js";
import { n as k, t as A } from "./CompositeRoot-BhZOjAjJ.js";
// node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
var j = /* @__PURE__ */ e(t(), 1), M = /*#__PURE__*/ j.createContext(void 0);
function N() {
	let e = j.useContext(M);
	if (e === void 0) throw Error(s(64));
	return e;
}
// node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
var P = /*#__PURE__*/ function(e) {
	return e.activationDirection = "data-activation-direction", e.orientation = "data-orientation", e;
}({}), F = { tabActivationDirection: (e) => ({ [P.activationDirection]: e }) }, I = n(), L = /*#__PURE__*/ j.forwardRef(function(e, t) {
	let { className: n, defaultValue: a = 0, onValueChange: s, orientation: l = "horizontal", render: d, value: g, style: _, ...v } = e, y = e.defaultValue !== void 0, b = j.useRef([]), [x, S] = j.useState(() => /* @__PURE__ */ new Map()), [C, w] = r({
		controlled: g,
		default: a,
		name: "Tabs",
		state: "value"
	}), T = g !== void 0, [E, D] = j.useState(() => /* @__PURE__ */ new Map()), O = j.useRef(void 0), k = j.useCallback((e) => {
		if (e === void 0) return null;
		for (let [t, n] of E.entries()) if (n != null && e === (n.value ?? n.index)) return t;
		return null;
	}, [E]), [A, N] = j.useState(() => ({
		previousValue: C,
		tabActivationDirection: "none"
	})), { previousValue: P, tabActivationDirection: L } = A, z = L, B = !1;
	P !== C && (z = R(P, C, l, E), B = P != null && C != null && k(C) == null);
	let V = B ? P : C, H = P !== V || L !== z;
	c(() => {
		H && N({
			previousValue: V,
			tabActivationDirection: z
		});
	}, [
		V,
		H,
		z
	]);
	let U = i((e, t) => {
		t.activationDirection = R(C, e, l, E), s?.(e, t), t.isCanceled || w(e);
	}), W = i((e, t) => {
		s?.(e, h(t, void 0, void 0, { activationDirection: "none" }));
	}), G = i((e, t) => {
		S((n) => {
			if (n.get(e) === t) return n;
			let r = new Map(n);
			return r.set(e, t), r;
		});
	}), K = i((e, t) => {
		S((n) => {
			if (!n.has(e) || n.get(e) !== t) return n;
			let r = new Map(n);
			return r.delete(e), r;
		});
	}), q = j.useCallback((e) => x.get(e), [x]), J = j.useCallback((e) => {
		for (let t of E.values()) if (e === t?.value) return t?.id;
	}, [E]), Y = j.useMemo(() => ({
		getTabElementBySelectedValue: k,
		getTabIdByPanelValue: J,
		getTabPanelIdByValue: q,
		onValueChange: U,
		orientation: l,
		registerMountedTabPanel: G,
		setTabMap: D,
		unregisterMountedTabPanel: K,
		tabActivationDirection: z,
		value: C
	}), [
		k,
		J,
		q,
		U,
		l,
		G,
		D,
		K,
		z,
		C
	]), X = j.useMemo(() => {
		for (let e of E.values()) if (e != null && e.value === C) return e;
	}, [E, C]), Z = j.useMemo(() => {
		for (let e of E.values()) if (e != null && !e.disabled) return e.value;
	}, [E]), Q = j.useRef(!y), $ = j.useRef(a), ee = j.useRef(y), te = j.useRef(!1);
	c(() => {
		if (T) return;
		function e(e, t) {
			w(e), N((t) => t.previousValue === e && t.tabActivationDirection === "none" ? t : {
				previousValue: e,
				tabActivationDirection: "none"
			}), W(e, t), Q.current = !1;
		}
		if (E.size === 0) {
			te.current && C !== null && !O.current?.isConnected && e(null, f);
			return;
		}
		te.current = !0, O.current = E.keys().next().value;
		let t = X?.disabled, n = X == null && C !== null;
		if (!t && C === $.current && (ee.current = !1), ee.current && t && C === $.current) return;
		let r = Q.current;
		if (t || n) {
			let n = Z ?? null;
			if (C === n) {
				Q.current = !1;
				return;
			}
			let i = f;
			r ? i = p : t && (i = m), e(n, i);
		} else r && X != null && (W(C, p), Q.current = !1);
	}, [
		Z,
		T,
		W,
		X,
		w,
		E,
		C
	]);
	let ne = o("div", e, {
		state: {
			orientation: l,
			tabActivationDirection: z
		},
		ref: t,
		props: v,
		stateAttributesMapping: F
	});
	return /*#__PURE__*/ (0, I.jsx)(M.Provider, {
		value: Y,
		children: /*#__PURE__*/ (0, I.jsx)(u, {
			elementsRef: b,
			children: ne
		})
	});
});
function R(e, t, n, r) {
	if (e == null || t == null) return "none";
	let i = null, a = null;
	for (let [n, o] of r.entries()) {
		if (o == null) continue;
		let r = o.value ?? o.index;
		if (e === r && (i = n), t === r && (a = n), i != null && a != null) break;
	}
	if (i == null || a == null) return i !== a && (typeof e == "number" || typeof e == "string") && typeof e == typeof t ? n === "horizontal" ? t > e ? "right" : "left" : t > e ? "down" : "up" : "none";
	let o = i.getBoundingClientRect(), s = a.getBoundingClientRect();
	if (n === "horizontal") {
		if (s.left < o.left) return "left";
		if (s.left > o.left) return "right";
	} else {
		if (s.top < o.top) return "up";
		if (s.top > o.top) return "down";
	}
	return "none";
}
// node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
var z = /*#__PURE__*/ j.createContext(void 0);
function B() {
	let e = j.useContext(z);
	if (e === void 0) throw Error(s(65));
	return e;
}
// node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
var V = /*#__PURE__*/ j.forwardRef(function(e, t) {
	let { className: n, disabled: r = !1, render: i, value: a, id: s, nativeButton: l = !0, style: u, ...f } = e, { value: p, getTabPanelIdByValue: m, orientation: _, tabActivationDirection: v } = N(), { activateOnFocus: y, highlightedTabIndex: b, onTabActivation: C, registerTabResizeObserverElement: w, setHighlightedTabIndex: D, tabsListElement: A } = B(), M = d(s), P = j.useMemo(() => ({
		disabled: r,
		id: M,
		value: a
	}), [
		r,
		M,
		a
	]), { compositeProps: I, compositeRef: L, index: R } = O({ metadata: P }), z = a === p, V = j.useRef(!1), H = j.useRef(null);
	c(() => {
		let e = H.current;
		if (e) return w(e);
	}, [w]), c(() => {
		if (V.current) {
			V.current = !1;
			return;
		}
		if (!(z && R > -1 && b !== R)) return;
		let e = A;
		if (e != null) {
			let t = E(S(e));
			if (t && T(e, t)) return;
		}
		r || D(R);
	}, [
		z,
		R,
		b,
		D,
		r,
		A
	]);
	let { getButtonProps: U, buttonRef: W } = x({
		disabled: r,
		native: l,
		focusableWhenDisabled: !0
	}), G = m(a), K = j.useRef(!1), q = j.useRef(!1);
	function J(e) {
		z || r || C(a, h(g, e.nativeEvent, void 0, { activationDirection: "none" }));
	}
	function Y(e) {
		z || (R > -1 && !r && D(R), r || y && (!K.current || K.current && q.current) && C(a, h(g, e.nativeEvent, void 0, { activationDirection: "none" })));
	}
	function X(e) {
		if (z || r) return;
		K.current = !0;
		function t() {
			K.current = !1, q.current = !1;
		}
		e.button && e.button !== 0 || (q.current = !0, S(e.currentTarget).addEventListener("pointerup", t, { once: !0 }));
	}
	return o("button", e, {
		state: {
			disabled: r,
			active: z,
			orientation: _,
			tabActivationDirection: v
		},
		ref: [
			t,
			W,
			L,
			H
		],
		props: [
			I,
			{
				role: "tab",
				"aria-controls": G,
				"aria-selected": z,
				id: M,
				onClick: J,
				onFocus: Y,
				onPointerDown: X,
				[k]: z ? "" : void 0,
				onKeyDownCapture() {
					V.current = !0;
				}
			},
			f,
			U
		],
		stateAttributesMapping: F
	});
}), H = function(e) {
	return e.index = "data-index", e.activationDirection = "data-activation-direction", e.orientation = "data-orientation", e.hidden = "data-hidden", e[e.startingStyle = v.startingStyle] = "startingStyle", e[e.endingStyle = v.endingStyle] = "endingStyle", e;
}({}), U = {
	...F,
	..._
}, W = /*#__PURE__*/ j.forwardRef(function(e, t) {
	let { className: n, value: r, render: i, keepMounted: a = !1, style: s, ...u } = e, { value: f, getTabIdByPanelValue: p, orientation: m, tabActivationDirection: h, registerMountedTabPanel: g, unregisterMountedTabPanel: _ } = N(), v = d(), x = j.useMemo(() => ({
		id: v,
		value: r
	}), [v, r]), { ref: S, index: C } = l({ metadata: x }), w = r === f, { mounted: T, transitionStatus: E, setMounted: O } = y(w), k = !T, A = p(r), M = {
		hidden: k,
		orientation: m,
		tabActivationDirection: h,
		transitionStatus: E
	}, P = j.useRef(null), F = o("div", e, {
		state: M,
		ref: [
			t,
			S,
			P
		],
		props: [{
			"aria-labelledby": A,
			hidden: k,
			id: v,
			role: "tabpanel",
			tabIndex: w ? 0 : -1,
			inert: D(!w),
			[H.index]: C
		}, u],
		stateAttributesMapping: U
	});
	return b({
		open: w,
		ref: P,
		onComplete() {
			w || O(!1);
		}
	}), c(() => {
		if ((!k || a) && v != null) return g(r, v), () => {
			_(r, v);
		};
	}, [
		k,
		a,
		r,
		v,
		g,
		_
	]), a || T ? F : null;
}), G = /*#__PURE__*/ j.forwardRef(function(e, t) {
	let { activateOnFocus: n = !1, className: r, loopFocus: o = !0, render: s, style: l, ...u } = e, { onValueChange: d, orientation: f, value: p, setTabMap: m, tabActivationDirection: h } = N(), [g, _] = j.useState(0), [v, y] = j.useState(null), b = j.useRef(/* @__PURE__ */ new Set()), x = j.useRef(/* @__PURE__ */ new Set()), S = j.useRef(null);
	c(() => {
		if (typeof ResizeObserver > "u") return;
		let e = new ResizeObserver(() => {
			b.current.forEach((e) => {
				e();
			});
		});
		return S.current = e, v && e.observe(v), x.current.forEach((t) => {
			e.observe(t);
		}), () => {
			e.disconnect(), S.current = null;
		};
	}, [v]);
	let C = i((e) => (b.current.add(e), () => {
		b.current.delete(e);
	})), w = i((e) => (x.current.add(e), S.current?.observe(e), () => {
		x.current.delete(e), S.current?.unobserve(e);
	})), T = i((e, t) => {
		e !== p && d(e, t);
	}), E = {
		orientation: f,
		tabActivationDirection: h
	}, D = {
		"aria-orientation": f === "vertical" ? "vertical" : void 0,
		role: "tablist"
	}, O = j.useMemo(() => ({
		activateOnFocus: n,
		highlightedTabIndex: g,
		registerIndicatorUpdateListener: C,
		registerTabResizeObserverElement: w,
		onTabActivation: T,
		setHighlightedTabIndex: _,
		tabsListElement: v
	}), [
		n,
		g,
		C,
		w,
		T,
		_,
		v
	]);
	return /*#__PURE__*/ (0, I.jsx)(z.Provider, {
		value: O,
		children: /*#__PURE__*/ (0, I.jsx)(A, {
			render: s,
			className: r,
			style: l,
			state: E,
			refs: [t, y],
			props: [D, u],
			stateAttributesMapping: F,
			highlightedIndex: g,
			enableHomeAndEndKeys: !0,
			loopFocus: o,
			orientation: f,
			onHighlightedIndexChange: _,
			onMapChange: m,
			disabledIndices: a
		})
	});
});
// upstream/registry/bases/base/ui/tabs.tsx
function K({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ (0, I.jsx)(L, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: C("cn-tabs group/tabs flex data-horizontal:flex-col", e),
		...n
	});
}
var q = w("cn-tabs-list group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col", {
	variants: { variant: {
		default: "cn-tabs-list-variant-default bg-muted",
		line: "cn-tabs-list-variant-line gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function J({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ (0, I.jsx)(G, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: C(q({ variant: t }), e),
		...n
	});
}
function Y({ className: e, ...t }) {
	return /* @__PURE__ */ (0, I.jsx)(V, {
		"data-slot": "tabs-trigger",
		className: C("cn-tabs-trigger relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
function X({ className: e, ...t }) {
	return /* @__PURE__ */ (0, I.jsx)(W, {
		"data-slot": "tabs-content",
		className: C("cn-tabs-content flex-1 outline-none", e),
		...t
	});
}
export { Y as i, X as n, J as r, K as t };
