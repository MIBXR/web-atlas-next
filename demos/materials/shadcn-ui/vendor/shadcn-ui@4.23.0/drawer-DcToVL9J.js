import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { t as i } from "./useControlled-BkmszdIY.js";
import { t as a } from "./useStableCallback-BmDujACN.js";
import { o, r as s, t as c, u as l } from "./useRenderElement-Bc91YjHo.js";
import { t as u } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as d } from "./useBaseUiId-BwhhMxTY.js";
import { o as f, t as p, w as m } from "./createBaseUIEventDetails-DG51vPHx.js";
import { n as h } from "./useAnimationFrame-CMIvKrBf.js";
import { a as g, i as _, t as v } from "./useOpenChangeComplete-BfJk_bnM.js";
import { c as y, d as b, f as x, l as S, p as C, t as w } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as T } from "./addEventListener-EiVbnOnq.js";
import { t as E } from "./owner-C-FapX6G.js";
import { t as D } from "./dist-DCi9UB7o.js";
import { t as ee } from "./popupStoreUtils-DmfT7kYW.js";
import { P as O } from "./composite-BYPOq3H3.js";
import { r as k, t as A, w as j } from "./popupStateMapping-CSyRbb7j.js";
import { i as te } from "./useOpenInteractionType-DPoQCspH.js";
import { n as M, r as ne, t as N } from "./shadowDom-D66trjQm.js";
import { a as P, c as re, i as F, l as I, n as L, o as R, r as z, t as B } from "./DialogTrigger-CgqcEkyA.js";
import { o as ie } from "./composite-DtpIpLt3.js";
import { t as V } from "./clamp-BEXCFueL.js";
import { t as ae } from "./DialogRoot-CAxIjwnk.js";
// node_modules/@base-ui/react/dialog/viewport/DialogViewportDataAttributes.mjs
var H = /* @__PURE__ */ e(t(), 1), oe = /* @__PURE__ */ e(n(), 1), U = r(), W = function(e) {
	return e[e.open = A.open] = "open", e[e.closed = A.closed] = "closed", e[e.startingStyle = A.startingStyle] = "startingStyle", e[e.endingStyle = A.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
}({}), G = {
	...k,
	...g,
	nested(e) {
		return e ? { [W.nested]: "" } : null;
	},
	nestedDialogOpen(e) {
		return e ? { [W.nestedDialogOpen]: "" } : null;
	}
}, se = /*#__PURE__*/ H.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: a, ...o } = e, s = F(), { store: l } = I(), u = l.useState("open"), d = l.useState("nested"), f = l.useState("transitionStatus"), p = l.useState("nestedOpenDialogCount"), m = l.useState("mounted"), h = l.useStateSetter("viewportElement");
	return c("div", e, {
		enabled: s || m,
		state: {
			open: u,
			nested: d,
			transitionStatus: f,
			nestedDialogOpen: p > 0
		},
		ref: [t, h],
		stateAttributesMapping: G,
		props: [{
			role: "presentation",
			hidden: !m,
			style: { pointerEvents: u ? void 0 : "none" },
			children: a
		}, o]
	});
}), K = /*#__PURE__*/ function(e) {
	return e.nestedDrawers = "--nested-drawers", e.height = "--drawer-height", e.frontmostHeight = "--drawer-frontmost-height", e.swipeMovementX = "--drawer-swipe-movement-x", e.swipeMovementY = "--drawer-swipe-movement-y", e.snapPointOffset = "--drawer-snap-point-offset", e.swipeStrength = "--drawer-swipe-strength", e;
}({}), q = /*#__PURE__*/ function(e) {
	return e.swipeProgress = "--drawer-swipe-progress", e;
}({}), J = {
	...k,
	...g
}, ce = /*#__PURE__*/ H.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, forceRender: a = !1, ...o } = e, { store: s } = I(), l = s.useState("open"), u = s.useState("nested"), d = s.useState("mounted"), f = {
		open: l,
		transitionStatus: s.useState("transitionStatus")
	};
	return c("div", e, {
		state: f,
		ref: [s.context.backdropRef, t],
		stateAttributesMapping: J,
		props: [{
			role: "presentation",
			hidden: !d,
			style: {
				pointerEvents: l ? void 0 : "none",
				userSelect: "none",
				WebkitUserSelect: "none",
				[q.swipeProgress]: "0",
				[K.swipeStrength]: "1"
			}
		}, o],
		enabled: a || !u
	});
}), le = R, ue = "data-drawer-content", de = /*#__PURE__*/ H.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e;
	return I(), c("div", e, {
		ref: t,
		props: [{ [ue]: "" }, a]
	});
}), fe = P, pe = /*#__PURE__*/ H.createContext(void 0);
function Y(e) {
	let t = H.useContext(pe);
	if (e === !1 && t === void 0) throw Error(l(91));
	return t;
}
// node_modules/@base-ui/react/drawer/popup/DrawerPopupDataAttributes.mjs
var X = function(e) {
	return e[e.open = A.open] = "open", e[e.closed = A.closed] = "closed", e[e.startingStyle = A.startingStyle] = "startingStyle", e[e.endingStyle = A.endingStyle] = "endingStyle", e.expanded = "data-expanded", e.nestedDrawerOpen = "data-nested-drawer-open", e.nestedDrawerSwiping = "data-nested-drawer-swiping", e.swipeDismiss = "data-swipe-dismiss", e.swipeDirection = "data-swipe-direction", e.swiping = "data-swiping", e;
}({}), me = /*#__PURE__*/ H.createContext(void 0);
function he(e) {
	let t = H.useContext(me);
	if (e === !1 && t === void 0) throw Error(l(90));
	return t;
}
// node_modules/@base-ui/react/drawer/root/useDrawerSnapPoints.mjs
function ge(e, t) {
	let n = e + t;
	return n >= 0 ? t : -Math.sqrt(-n) - e;
}
function Z(e, t, n) {
	if (!Number.isFinite(t) || t <= 0) return null;
	if (typeof e == "number") return Number.isFinite(e) ? e <= 1 ? V(e, 0, 1) * t : e : null;
	let r = e.trim();
	if (r.endsWith("px")) {
		let e = Number.parseFloat(r);
		return Number.isFinite(e) ? e : null;
	}
	if (r.endsWith("rem")) {
		let e = Number.parseFloat(r);
		return Number.isFinite(e) ? e * n : null;
	}
	return null;
}
function _e(e, t) {
	let n = null, r = Infinity;
	for (let i of t) {
		let t = Math.abs(i.height - e);
		t < r && (r = t, n = i);
	}
	return n;
}
function ve() {
	let { store: e } = I(), { snapPoints: t, activeSnapPoint: n, setActiveSnapPoint: r, popupHeight: i } = he(), o = e.useState("viewportElement"), [s, c] = H.useState(0), [l, d] = H.useState(16), f = a(() => {
		let e = E(o).documentElement;
		o && c(o.offsetHeight), o || c(e.clientHeight);
		let t = parseFloat(getComputedStyle(e).fontSize);
		Number.isFinite(t) && d(t);
	});
	u(() => {
		if (f(), !o || typeof ResizeObserver != "function") return;
		let e = new ResizeObserver(f);
		return e.observe(o), () => {
			e.disconnect();
		};
	}, [f, o]);
	let p = H.useMemo(() => {
		if (!t || t.length === 0 || s <= 0 || i <= 0) return [];
		let e = Math.min(i, s);
		if (!Number.isFinite(e) || e <= 0) return [];
		let n = t.map((t) => {
			let n = Z(t, s, l);
			if (n === null || !Number.isFinite(n)) return null;
			let r = V(n, 0, e);
			return {
				value: t,
				height: r,
				offset: Math.max(0, i - r)
			};
		}).filter((e) => !!e);
		if (n.length <= 1) return n;
		let r = [], a = [];
		for (let e = n.length - 1; e >= 0; --e) {
			let t = n[e];
			a.some((e) => Math.abs(e - t.height) <= 1) || (a.push(t.height), r.push(t));
		}
		return r.reverse(), r;
	}, [
		i,
		l,
		t,
		s
	]);
	return {
		snapPoints: t,
		activeSnapPoint: n,
		setActiveSnapPoint: r,
		popupHeight: i,
		viewportHeight: s,
		resolvedSnapPoints: p,
		activeSnapPointOffset: H.useMemo(() => {
			if (n === void 0) return p[0];
			if (n === null) return;
			let e = p.find((e) => Object.is(e.value, n));
			if (e) return e;
			let t = Math.min(i, s), r = Z(n, s, l);
			if (r !== null && Number.isFinite(r)) return _e(V(r, 0, t), p) ?? void 0;
		}, [
			n,
			i,
			p,
			l,
			s
		])?.offset ?? null
	};
}
// node_modules/@base-ui/react/drawer/viewport/DrawerViewportContext.mjs
var ye = /*#__PURE__*/ H.createContext(null);
function be(e) {
	let t = H.useContext(ye);
	if (e === !1 && t === null) throw Error(l(92));
	return t;
}
// node_modules/@base-ui/react/drawer/popup/DrawerPopup.mjs
var xe = !1;
function Q() {
	xe ||= (typeof CSS < "u" && "registerProperty" in CSS && ([
		K.swipeMovementX,
		K.swipeMovementY,
		K.snapPointOffset
	].forEach((e) => {
		try {
			CSS.registerProperty({
				name: e,
				syntax: "<length>",
				inherits: !1,
				initialValue: "0px"
			});
		} catch {}
	}), [{
		name: q.swipeProgress,
		initialValue: "0"
	}, {
		name: K.swipeStrength,
		initialValue: "1"
	}].forEach(({ name: e, initialValue: t }) => {
		try {
			CSS.registerProperty({
				name: e,
				syntax: "<number>",
				inherits: !1,
				initialValue: t
			});
		} catch {}
	})), !0);
}
var Se = {
	...k,
	...g,
	expanded(e) {
		return e ? { [X.expanded]: "" } : null;
	},
	nestedDrawerOpen(e) {
		return e ? { [X.nestedDrawerOpen]: "" } : null;
	},
	nestedDrawerSwiping(e) {
		return e ? { [X.nestedDrawerSwiping]: "" } : null;
	},
	swipeDirection(e) {
		return e ? { [X.swipeDirection]: e } : null;
	},
	swiping(e) {
		return e ? { [X.swiping]: "" } : null;
	}
}, Ce = /*#__PURE__*/ H.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, finalFocus: s, initialFocus: l, ...d } = e, { store: f } = I(), p = f.context.popupRef, { swipeDirection: m, frontmostHeight: h, hasNestedDrawer: g, nestedSwiping: _, nestedSwipeProgressStore: y, onPopupHeightChange: b, notifyParentFrontmostHeight: x, notifyParentHasNestedDrawer: S } = he(), C = f.useState("descriptionElementId"), w = f.useState("disablePointerDismissal"), T = f.useState("floatingRootContext"), E = f.useState("popupProps"), D = f.useState("modal"), O = f.useState("mounted"), k = f.useState("nested"), A = f.useState("nestedOpenDrawerCount"), j = f.useState("transitionStatus"), M = f.useState("open"), ne = f.useState("openMethod"), N = f.useState("titleElementId"), P = f.useState("role"), re = T.useState("floatingId"), L = d.id ?? re, R = be(!0);
	F();
	let { snapPoints: z, activeSnapPoint: B, activeSnapPointOffset: V } = ve(), ae = A > 0, oe = R?.swiping ?? !1, W = R?.swipeStrength ?? null, [G, se] = H.useState(0), J = H.useRef(0), ce = a(() => {
		let e = p.current;
		if (!e) return;
		let t = e.offsetHeight;
		if (J.current > 0 && h > J.current && t > J.current) return;
		if (J.current > 0 && g) {
			let e = J.current;
			se(e), b(e);
			return;
		}
		let n = t;
		n !== J.current && (J.current = n, se(n), b(n));
	});
	u(() => {
		if (!O) {
			J.current = 0, se(0), b(0);
			return;
		}
		let e = p.current;
		if (!e || (Q(), ce(), typeof ResizeObserver != "function")) return;
		let t = new ResizeObserver(ce);
		return t.observe(e), () => {
			t.disconnect();
		};
	}, [
		ce,
		O,
		ae,
		b,
		p
	]), u(() => {
		let e = () => {
			let e = p.current;
			if (!e) return;
			let t = y.getSnapshot();
			t > 0 ? e.style.setProperty(q.swipeProgress, `${t}`) : e.style.setProperty(q.swipeProgress, "0");
		};
		e();
		let t = y.subscribe(e), n = p.current;
		return () => {
			t(), n && n.style.setProperty(q.swipeProgress, "0");
		};
	}, [y, p]), H.useEffect(() => {
		if (M) return x?.(h), () => {
			x?.(0);
		};
	}, [
		h,
		M,
		x
	]), H.useEffect(() => {
		if (S) return S(M || j === "ending"), () => {
			S(!1);
		};
	}, [
		S,
		M,
		j
	]), v({
		open: M,
		ref: p,
		onComplete() {
			M && f.context.onOpenChangeComplete?.(!0);
		}
	});
	let le = l === void 0 ? p : l, ue = f.useStateSetter("popupElement"), de = {
		open: M,
		nested: k,
		transitionStatus: j,
		expanded: B === 1,
		nestedDrawerOpen: ae,
		nestedDrawerSwiping: _,
		swipeDirection: m,
		swiping: oe
	}, fe;
	G && (g || j === "ending") && (fe = `${G}px`);
	let pe = z && z.length > 0 && (m === "down" || m === "up"), Y = null;
	pe && V !== null && (Y = m === "up" ? -V : V);
	let X = R ? R.getDragStyles() : o;
	if (pe && m === "down") {
		let e = V ?? 0, t = Number.parseFloat(String(X[K.swipeMovementY] ?? 0));
		X = oe && Number.isFinite(t) ? {
			...X,
			transform: void 0,
			[K.swipeMovementY]: `${ge(e, t)}px`
		} : {
			...X,
			transform: void 0
		};
	}
	let me = c("div", e, {
		state: de,
		props: [
			E,
			{
				id: L,
				"aria-labelledby": N,
				"aria-describedby": C,
				role: P,
				...ee,
				hidden: !O,
				onKeyDown(e) {
					ie.has(e.key) && e.stopPropagation();
				},
				style: {
					...X,
					[q.swipeProgress]: "0",
					[K.nestedDrawers]: A,
					[K.height]: fe,
					[K.snapPointOffset]: typeof Y == "number" ? `${Y}px` : "0px",
					[K.frontmostHeight]: h ? `${h}px` : void 0,
					[K.swipeStrength]: typeof W == "number" && Number.isFinite(W) && W > 0 ? `${W}` : "1"
				}
			},
			d
		],
		ref: [
			t,
			p,
			ue
		],
		stateAttributesMapping: Se
	});
	return /*#__PURE__*/ (0, U.jsx)(te, {
		context: T,
		openInteractionType: ne,
		disabled: !O,
		closeOnFocusOut: !w,
		initialFocus: le,
		returnFocus: s,
		modal: D !== !1,
		restoreFocus: "popup",
		children: me
	});
}), we = z, Te, $;
function Ee(e) {
	let { children: t, open: n, defaultOpen: r = !1, onOpenChange: o, onOpenChangeComplete: s, disablePointerDismissal: c = !1, modal: l = !0, actionsRef: u, handle: d, triggerId: f, defaultTriggerId: m = null, swipeDirection: h = "down", snapToSequentialPoints: g = !1, snapPoints: _, snapPoint: v, defaultSnapPoint: y, onSnapPointChange: b } = e, x = he(!0), S = x?.onNestedSwipeProgressChange, C = x?.onNestedFrontmostHeightChange, w = x?.onNestedSwipingChange, T = x?.onNestedDrawerPresenceChange, [E, D] = H.useState(0), [ee, O] = H.useState(0), [k, A] = H.useState(!1), [j, te] = H.useState(!1), [M] = H.useState(De), ne = y === void 0 ? _?.[0] ?? null : y, N = v !== void 0, [P, F] = i({
		controlled: v,
		default: ne,
		name: "Drawer",
		state: "snapPoint"
	}), I = H.useRef(!1), L = a((e, t) => {
		let n = t ?? p("none");
		b?.(e, n), n.isCanceled || F(e);
	}), R = H.useMemo(() => N || !_ || _.length === 0 ? P : P === null || !_.some((e) => Object.is(e, P)) ? ne : P, [
		P,
		N,
		ne,
		_
	]), z = a((e) => {
		D(e), !I.current && e > 0 && O(e);
	}), B = a((e) => {
		e > 0 ? (I.current = !0, O(e)) : (I.current = !1, E > 0 && O(E));
	}), ie = a((e) => {
		A(e);
	}), V = a((e) => {
		M.set(e), S?.(e);
	}), oe = a((e) => {
		te(e), w?.(e);
	}), W = a((e, t) => {
		o?.(e, t), t.isCanceled || !e && _ && _.length > 0 && L(ne, p(t.reason, t.event, t.trigger));
	}), G = H.useMemo(() => ({
		swipeDirection: h,
		snapToSequentialPoints: g,
		snapPoints: _,
		activeSnapPoint: R,
		setActiveSnapPoint: L,
		frontmostHeight: ee,
		popupHeight: E,
		hasNestedDrawer: k,
		nestedSwiping: j,
		nestedSwipeProgressStore: M,
		onNestedDrawerPresenceChange: ie,
		onPopupHeightChange: z,
		onNestedFrontmostHeightChange: B,
		onNestedSwipingChange: oe,
		onNestedSwipeProgressChange: V,
		notifyParentFrontmostHeight: C,
		notifyParentSwipingChange: w,
		notifyParentSwipeProgressChange: S,
		notifyParentHasNestedDrawer: T
	}), [
		R,
		ee,
		k,
		j,
		M,
		T,
		S,
		w,
		C,
		ie,
		B,
		V,
		oe,
		z,
		E,
		L,
		_,
		g,
		h
	]), se = typeof t == "function" ? (e) => /*#__PURE__*/ (0, U.jsxs)(H.Fragment, { children: [Te ||= /*#__PURE__*/ (0, U.jsx)(Oe, {}), t(e)] }) : /*#__PURE__*/ (0, U.jsxs)(H.Fragment, { children: [$ ||= /*#__PURE__*/ (0, U.jsx)(Oe, {}), t] });
	return /*#__PURE__*/ (0, U.jsx)(me.Provider, {
		value: G,
		children: /*#__PURE__*/ (0, U.jsx)(re.Provider, {
			value: !0,
			children: /*#__PURE__*/ (0, U.jsx)(ae, {
				open: n,
				defaultOpen: r,
				onOpenChange: W,
				onOpenChangeComplete: s,
				disablePointerDismissal: c,
				modal: l,
				actionsRef: u,
				handle: d,
				triggerId: f,
				defaultTriggerId: m,
				children: se
			})
		})
	});
}
function De() {
	let e = 0, t = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => e,
		set(n) {
			let r = Number.isFinite(n) ? n : 0;
			r !== e && (e = r, t.forEach((e) => {
				e();
			}));
		},
		subscribe(e) {
			return t.add(e), () => {
				t.delete(e);
			};
		}
	};
}
function Oe() {
	let e = d(), t = Y(!0), { store: n } = I(!1), r = n.useState("open"), i = n.useState("nestedOpenDialogCount"), a = n.useState("popupElement"), o = i === 0;
	return H.useEffect(() => {
		if (t && e != null) return () => {
			t.removeDrawer(e);
		};
	}, [e, t]), H.useEffect(() => {
		e != null && t?.setDrawerOpen(e, r);
	}, [
		e,
		r,
		t
	]), H.useEffect(() => {
		if (!r || !o || !O) return;
		let e = S(a).CloseWatcher;
		if (!e) return;
		function t(e) {
			n.select("open") && n.setOpen(!1, p(f, e));
		}
		let i = new e(), s = T(i, "close", t);
		return () => {
			s(), i.destroy();
		};
	}, [
		n,
		o,
		r,
		a
	]), null;
}
// node_modules/@base-ui/react/utils/scrollable.mjs
function ke(e, t, n = !1) {
	let r = w(e);
	if (t === "vertical") {
		let t = r.overflowY;
		return t !== "auto" && t !== "scroll" ? !1 : n ? e.clientHeight > 0 : e.scrollHeight > e.clientHeight;
	}
	let i = r.overflowX;
	return i !== "auto" && i !== "scroll" ? !1 : n ? e.clientWidth > 0 : e.scrollWidth > e.clientWidth;
}
function Ae(e, t, n) {
	let r = e;
	for (; x(r) && r !== t && !C(r);) {
		for (let e of n) if (ke(r, e)) return !0;
		r = y(r);
	}
	return !1;
}
function je(e, t, n = "vertical", r = !1) {
	let i = x(e) ? e : null;
	for (; x(i) && i !== t && !C(i);) {
		if (ke(i, n, r)) return i;
		i = y(i);
	}
	return ke(t, n, r) ? t : null;
}
// node_modules/@base-ui/react/utils/getElementAtPoint.mjs
function Me(e, t, n) {
	return typeof e?.elementFromPoint == "function" ? e.elementFromPoint(t, n) : null;
}
// node_modules/@base-ui/react/utils/useSwipeDismiss.mjs
var Ne = 40, Pe = 10, Fe = 1, Ie = 50, Le = 16, Re = 80, ze = "button,a,input,select,textarea,label,[role=\"button\"]";
function Be(e, t, n) {
	switch (e) {
		case "up": return -n;
		case "down": return n;
		case "left": return -t;
		case "right": return t;
		default: return 0;
	}
}
function Ve(e) {
	let t = S(e).getComputedStyle(e).transform, n = 0, r = 0, i = 1;
	if (t && t !== "none") {
		let e = t.match(/matrix(?:3d)?\(([^)]+)\)/);
		if (e) {
			let t = e[1].split(", ").map(parseFloat);
			t.length === 6 ? (n = t[4], r = t[5], i = Math.sqrt(t[0] * t[0] + t[1] * t[1])) : t.length === 16 && (n = t[12], r = t[13], i = t[0]);
		}
	}
	return {
		x: n,
		y: r,
		scale: i
	};
}
function He(e) {
	return Number.isFinite(e) && e > 0 ? e : null;
}
function Ue(e, t) {
	return `translate3d(${e.x}px,${e.y}px,0) scale(${t})`;
}
function We(e) {
	return e % 2 == 1;
}
function Ge(e, t, n) {
	let r = e[n];
	if (typeof r == "function") try {
		r.call(e, t);
	} catch (e) {
		if (e && typeof e == "object" && "name" in e && e.name === "NotFoundError") return;
		throw e;
	}
}
function Ke(e) {
	let { enabled: t, directions: n, elementRef: r, movementCssVars: i, canStart: o, ignoreSelectorWhenTouch: s = !0, ignoreScrollableAncestors: c = !1, swipeThreshold: l, onDismiss: u, onProgress: d, onCancel: f, onSwipeStart: p, onRelease: m, onSwipingChange: h, trackDrag: g = !0 } = e, _ = ze, v = n.length === 1 ? n[0] : void 0, y = Math.max(0, typeof l == "number" ? l : Ne), b = n.includes("left"), x = n.includes("right"), S = n.includes("up"), C = n.includes("down"), w = b || x, T = S || C, D = H.useMemo(() => {
		let e = [];
		return T && e.push("vertical"), w && e.push("horizontal"), e;
	}, [w, T]), [ee, O] = H.useState(void 0), [k, A] = H.useState(!1), [j, te] = H.useState(!1), N = H.useRef({
		x: 0,
		y: 0
	}), P = H.useRef({
		x: 0,
		y: 0
	}), re = H.useRef(null), F = H.useRef({
		x: 0,
		y: 0,
		scale: 1
	}), I = H.useRef(void 0), L = H.useRef(0), R = H.useRef(!1), z = H.useRef({
		x: 0,
		y: 0
	}), B = H.useRef(null), ie = H.useRef(!1), ae = H.useRef(!1), oe = H.useRef(null), U = H.useRef(!1), W = H.useRef(!1), G = H.useRef({
		width: 0,
		height: 0
	}), se = H.useRef(0), K = H.useRef(y), q = H.useRef(null), J = H.useRef(null), ce = H.useRef({
		x: 0,
		y: 0
	}), le = H.useRef(null), ue = H.useRef(!1), de = H.useRef(null), fe = a((e) => {
		ue.current !== e && (ue.current = e, A(e), h?.(e));
	});
	function pe(e) {
		if (!e) return;
		if (typeof l != "function") {
			K.current = y;
			return;
		}
		let t = r.current;
		if (!t) return;
		let n = l({
			element: t,
			direction: e
		});
		K.current = Math.max(0, n);
	}
	let Y = a((e, t) => {
		let n = Number.isFinite(e) ? V(e, 0, 1) : 0, r = n !== se.current, i = !1;
		if (t) {
			let e = le.current;
			i = !e || e.deltaX !== t.deltaX || e.deltaY !== t.deltaY || e.direction !== t.direction;
		}
		(r || i) && (se.current = n, t ? le.current = t : r && (le.current = null), d?.(n, t));
	}), X = a((e) => {
		let t = r.current;
		if (!g || !t) {
			e || (de.current = null);
			return;
		}
		let n = t.style, a = de.current;
		e ? (a || (de.current = [n.transition, n.transform]), n.transition = "none") : a && ([n.transition, n.transform] = a, de.current = null);
		let o = P.current, s = F.current, c = o.x - s.x, l = o.y - s.y;
		e && (n.transform = Ue(o, s.scale)), n.setProperty(i.x, `${c}px`), n.setProperty(i.y, `${l}px`);
	});
	function me(e, t) {
		if (t === null) return;
		let n = J.current;
		if (n && t > n.time) {
			let r = Math.max(t - n.time, Le);
			ce.current = {
				x: (e.x - n.x) / r,
				y: (e.y - n.y) / r
			};
		}
		J.current = {
			x: e.x,
			y: e.y,
			time: t
		};
	}
	let he = H.useCallback(() => {
		O(void 0), fe(!1), te(!1), Y(0), K.current = y, N.current = {
			x: 0,
			y: 0
		}, P.current = {
			x: 0,
			y: 0
		}, F.current = {
			x: 0,
			y: 0,
			scale: 1
		}, I.current = void 0, L.current = 0, R.current = !1, z.current = {
			x: 0,
			y: 0
		}, B.current = null, ie.current = !1, re.current = null, ae.current = !1, oe.current = null, U.current = !1, W.current = !1, G.current = {
			width: 0,
			height: 0
		}, q.current = null, J.current = null, ce.current = {
			x: 0,
			y: 0
		}, le.current = null, X(!1);
	}, [
		fe,
		y,
		X,
		Y
	]);
	H.useEffect(() => {
		typeof l != "function" && (K.current = y);
	}, [y, l]);
	function ge(e) {
		if ("touches" in e) {
			let t = e.touches[0];
			return t ? {
				x: t.clientX,
				y: t.clientY
			} : null;
		}
		return {
			x: e.clientX,
			y: e.clientY
		};
	}
	function Z(e) {
		return "touches" in e || e.pointerType === "touch";
	}
	function _e(e, t) {
		return Me(E(r.current), e.x, e.y) ?? ne(t);
	}
	function ve(e, t) {
		return w && !T ? je(e, t, "horizontal") : T && !w ? je(e, t, "vertical") : je(e, t, "vertical") ?? je(e, t, "horizontal");
	}
	function ye(e, t, n) {
		U.current = !1;
		let i = Z(e), a = _e(t, e.nativeEvent), o = E(r.current).body, l = i && o ? ve(a, o) : null, u = n?.ignoreScrollableTarget ?? !1;
		if (l && !u || (U.current = !!(l && u), a && a.closest(_) && (!i || s))) return !1;
		let d = r.current;
		if (c && d && a && D.length > 0 && !(n?.ignoreScrollableAncestors ?? !1) && Ae(a, d, D)) return !1;
		if (R.current = !1, I.current = void 0, L.current = 0, N.current = t, q.current = He(e.timeStamp), z.current = t, re.current = t, d) {
			G.current = {
				width: d.offsetWidth,
				height: d.offsetHeight
			}, pe(v);
			let t = Ve(d);
			F.current = t, P.current = {
				x: t.x,
				y: t.y
			}, me({
				x: t.x,
				y: t.y
			}, q.current), "touches" in e || Ge(d, e.pointerId, "setPointerCapture");
		}
		return p?.(e.nativeEvent), fe(!0), B.current = null, ie.current = !0, Y(0), X(!0), !0;
	}
	function be() {
		xe(), U.current = !1, re.current = null;
	}
	function xe() {
		ae.current = !1, oe.current = null;
	}
	function Q(e) {
		if (be(), !ue.current) return;
		fe(!1), B.current = null;
		let t = F.current;
		P.current = {
			x: t.x,
			y: t.y
		}, O(void 0), W.current = !1, X(!1);
		let n = r.current;
		n && Ge(n, e.pointerId, "releasePointerCapture"), Y(0, {
			deltaX: 0,
			deltaY: 0,
			direction: void 0
		}), f?.(e.nativeEvent);
	}
	function Se(e, t) {
		let n = (e) => e >= 0 ? e ** .5 : -(Math.abs(e) ** .5), r = (e, t, r) => !t && e < 0 || !r && e > 0 ? n(e) : e;
		return {
			x: w ? r(e, b, x) : n(e),
			y: T ? r(t, S, C) : n(t)
		};
	}
	function Ce(e, t, n) {
		let r = Math.abs(t), i = Math.abs(n);
		if (T && n !== 0 && (!w || i >= r)) {
			let t = Math.max(0, e.scrollHeight - e.clientHeight), r = e.scrollTop <= 0, i = e.scrollTop >= t;
			return n > 0 && r && C || n < 0 && i && S;
		}
		if (w && t !== 0 && (!T || r > i)) {
			let n = Math.max(0, e.scrollWidth - e.clientWidth), r = e.scrollLeft <= 0, i = e.scrollLeft >= n;
			return t > 0 && r && x || t < 0 && i && b;
		}
		return null;
	}
	let we = a((e) => {
		if (!t || e.defaultPrevented || e.nativeEvent.defaultPrevented || !("touches" in e) && e.button !== 0) return;
		let n = ge(e);
		n && (ae.current = !0, oe.current = n, U.current = !1, W.current = !1, (!o || o(n, {
			nativeEvent: e.nativeEvent,
			direction: v
		})) && ye(e, n) && xe());
	});
	function Te(e, n, r) {
		if (!t || !ue.current) return;
		let i = ne(e.nativeEvent);
		if (Z(e) && !U.current) {
			let t = e.currentTarget;
			if (ve(i, t)) return;
		}
		if ("touches" in e || e.preventDefault(), ie.current) {
			N.current = n;
			let t = He(e.timeStamp);
			t !== null && (q.current = t), ie.current = !1;
		}
		let a = n.x, o = n.y, s = r.x, c = r.y;
		(c < 0 && o > z.current.y || c > 0 && o < z.current.y) && (z.current = {
			x: z.current.x,
			y: o
		}), (s < 0 && a > z.current.x || s > 0 && a < z.current.x) && (z.current = {
			x: a,
			y: z.current.y
		});
		let l = a - N.current.x, u = o - N.current.y, d = o - z.current.y, f = a - z.current.x, p = B.current;
		p === null && w && T && Math.sqrt(l * l + u * u) >= Fe && (p = Math.abs(l) > Math.abs(u) ? "horizontal" : "vertical", B.current = p);
		let m;
		if (!I.current) p === "vertical" ? u > 0 ? m = "down" : u < 0 && (m = "up") : p === "horizontal" ? l > 0 ? m = "right" : l < 0 && (m = "left") : m = Math.abs(l) >= Math.abs(u) ? l > 0 ? "right" : "left" : u > 0 ? "down" : "up", m && (m === "left" && b || m === "right" && x || m === "up" && S || m === "down" && C) && (I.current = m, L.current = Be(m, l, u), O(m), pe(m));
		else {
			let e = I.current, t = Be(e, f, d);
			t > K.current ? (R.current = !1, O(e)) : !(b && x) && !(S && C) && L.current - t >= Pe && (R.current = !0);
		}
		let h = Se(l, u), g = F.current.x, _ = F.current.y;
		p === "horizontal" ? w && (g += h.x) : (p === "vertical" || w && (g += h.x), T && (_ += h.y)), P.current = {
			x: g,
			y: _
		}, X(!0), me({
			x: g,
			y: _
		}, He(e.timeStamp));
		let y = g - F.current.x, E = _ - F.current.y, D = I.current, ee = v ?? I.current;
		if (!ee) {
			Y(0, {
				deltaX: y,
				deltaY: E,
				direction: D
			});
			return;
		}
		let k = ee === "left" || ee === "right" ? G.current.width : G.current.height, A = F.current.scale || 1;
		if (k <= 0 || A <= 0) {
			Y(0, {
				deltaX: y,
				deltaY: E,
				direction: D
			});
			return;
		}
		let j = Be(ee, g - F.current.x, _ - F.current.y);
		Y(j <= 0 ? 0 : j / (k * A), {
			deltaX: y,
			deltaY: E,
			direction: D
		});
	}
	let $ = a((e) => {
		if (!t) return;
		let i = P.current, a = F.current, o = i.x - a.x, s = i.y - a.y, c = {
			deltaX: o,
			deltaY: s,
			direction: I.current
		};
		if (!ue.current) {
			be(), Y(0, c);
			return;
		}
		fe(!1), B.current = null, be(), W.current = !1;
		let l = r.current;
		l && ("touches" in e || Ge(l, e.pointerId, "releasePointerCapture"));
		let d = o, f = s, p = q.current, h = He(e.timeStamp), g = p !== null && h !== null && h > p ? h - p : 0, _ = g > 0 ? Math.max(g, Ie) : 0, y = _ > 0 ? d / _ : 0, b = _ > 0 ? f / _ : 0, x = ce.current.x, S = ce.current.y, C = J.current;
		if (C && h !== null && h >= C.time) {
			let e = h - C.time;
			if (e <= Re) {
				let t = Math.max(e, Le), n = i.x - C.x, r = i.y - C.y, a = n / t, o = r / t;
				a !== 0 && (x = a), o !== 0 && (S = o);
			} else x = 0, S = 0;
		}
		let w = m?.({
			event: e.nativeEvent,
			direction: I.current,
			deltaX: d,
			deltaY: f,
			velocityX: y,
			velocityY: b,
			releaseVelocityX: x,
			releaseVelocityY: S
		}), T = typeof w == "boolean";
		if (R.current && !T) {
			P.current = {
				x: a.x,
				y: a.y
			}, O(void 0), X(!1), Y(0, c);
			return;
		}
		let E = !1, D;
		if (T) E = w, D = I.current ?? v;
		else for (let e of n) {
			switch (e) {
				case "right":
					d > K.current && (E = !0, D = "right");
					break;
				case "left":
					d < -K.current && (E = !0, D = "left");
					break;
				case "down":
					f > K.current && (E = !0, D = "down");
					break;
				case "up": f < -K.current && (E = !0, D = "up");
			}
			if (E) break;
		}
		E && D ? (O(D), te(!0), X(!1), u?.(e.nativeEvent, { direction: D })) : (P.current = {
			x: a.x,
			y: a.y
		}, O(void 0), X(!1), Y(0, c));
	}), Ee = a((e) => {
		let t = ge(e);
		if (!t) return;
		let n = !1;
		if (!("touches" in e)) {
			let t = We(e.buttons);
			if (t && (W.current = !0), e.buttons !== 0 && !t) {
				Q(e);
				return;
			}
			if (e.buttons === 0 && W.current) {
				if (!ue.current) {
					$(e);
					return;
				}
				n = !0;
			}
		}
		if (!k && ae.current) {
			if (!Z(e) && (e.defaultPrevented || e.nativeEvent.defaultPrevented)) {
				be();
				return;
			}
			if (!o || o(t, {
				nativeEvent: e.nativeEvent,
				direction: v
			})) {
				let n = oe.current, i = !1;
				if (Z(e)) {
					let a = r.current;
					if (n && a) {
						let r = _e(t, e.nativeEvent), o = E(a).body, s = o ? ve(r, o) : null;
						if (s && (M(a, s) || M(s, a))) {
							let e = Ce(s, t.x - n.x, t.y - n.y);
							if (e === !1) return;
							e === !0 && (i = !0);
						}
					}
				}
				ye(e, t, {
					ignoreScrollableTarget: i,
					ignoreScrollableAncestors: i
				}) && (n && i ? (xe(), N.current = n, z.current = n, re.current = n, ie.current = !1) : (xe(), U.current = !1));
			}
		}
		let i = re.current, a = i === null ? {
			x: 0,
			y: 0
		} : {
			x: t.x - i.x,
			y: t.y - i.y
		};
		re.current = t, Te(e, t, a), n && !("touches" in e) && $(e);
	}), De = a((e, t) => {
		Ee({
			touches: e.touches,
			currentTarget: t,
			nativeEvent: e,
			defaultPrevented: e.defaultPrevented,
			timeStamp: e.timeStamp
		});
	}), Oe = H.useCallback(() => {
		let e = P.current, t = F.current, n = e.x - t.x, r = e.y - t.y;
		return !k && n === 0 && r === 0 && !j ? {
			[i.x]: "0px",
			[i.y]: "0px"
		} : {
			transition: k ? "none" : void 0,
			transform: k ? Ue(e, t.scale) : void 0,
			[i.x]: `${n}px`,
			[i.y]: `${r}px`
		};
	}, [
		j,
		k,
		i
	]);
	return {
		swiping: k,
		swipeDirection: ee,
		dragDismissed: j,
		getPointerProps: H.useCallback(() => t ? {
			onPointerDown: we,
			onPointerMove: Ee,
			onPointerUp: $,
			onPointerCancel: $
		} : {}, [
			t,
			$,
			Ee,
			we
		]),
		getTouchProps: H.useCallback(() => t ? {
			onTouchStart: we,
			onTouchMove: Ee,
			onTouchEnd: $,
			onTouchCancel: $
		} : {}, [
			t,
			$,
			Ee,
			we
		]),
		moveNative: De,
		getDragStyles: Oe,
		reset: he
	};
}
// node_modules/@base-ui/react/drawer/title/DrawerTitle.mjs
var qe = L, Je = B, Ye = /*#__PURE__*/ H.createContext(void 0);
function Xe() {
	return H.useContext(Ye);
}
// node_modules/@base-ui/react/drawer/viewport/DrawerViewport.mjs
var Ze = 10, Qe = .5, $e = .5, et = 300, tt = 4, nt = .2, rt = 4, it = 80, at = 360, ot = .1, st = 1, ct = `[${ue}]`, lt = /*#__PURE__*/ H.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: o, ...c } = e, { store: l } = I(), u = l.context.popupRef, d = l.context.backdropRef, { swipeDirection: f, notifyParentSwipingChange: g, notifyParentSwipeProgressChange: v, frontmostHeight: y, snapToSequentialPoints: x } = he(), C = Y(!0), { snapPoints: w, resolvedSnapPoints: D, activeSnapPoint: ee, activeSnapPointOffset: O, setActiveSnapPoint: k, popupHeight: A } = ve(), j = l.useState("open"), te = l.useState("mounted"), N = l.useState("nested"), P = l.useState("nestedOpenDrawerCount"), re = l.useState("viewportElement"), F = l.useState("popupElement"), L = C?.visualStateStore, R = P > 0, z = f === "left" || f === "right" ? "horizontal" : "vertical", B = z === "vertical", ie = B ? "horizontal" : "vertical", [ae, W] = H.useState(null), G = H.useRef(void 0), J = H.useRef(null), ce = h(), le = H.useRef(!1), ue = H.useRef(!1), de = H.useRef(""), fe = H.useRef(!1), pe = H.useRef(!1), X = H.useRef(null), me = Xe(), Z = H.useMemo(() => {
		if (!w || w.length < 2 || f !== "down" && f !== "up" || D.length < 2) return null;
		let e = D.map((e) => e.offset).filter((e) => Number.isFinite(e)).sort((e, t) => e - t);
		if (e.length < 2) return null;
		let t = e[0], n = e[1], r = e[e.length - 1], i = n - t;
		if (!Number.isFinite(i) || i <= 0) {
			let e = r - t;
			if (!Number.isFinite(e) || e <= 0) return null;
			i = e;
		}
		return {
			minOffset: t,
			range: i
		};
	}, [
		D,
		w,
		f
	]), _e = H.useMemo(() => !Z || O === null ? null : V((O - Z.minOffset) / Z.range, 0, 1), [O, Z]), be = H.useMemo(() => w && w.length > 0 && (f === "down" || f === "up") ? f === "down" ? ["down", "up"] : ["up", "down"] : [f], [w, f]), xe = a((e) => {
		ut(u.current, d.current, e);
	}), Q = a(() => {
		xe(!1), u.current?.removeAttribute(_.endingStyle), W(null);
	}), Se = a(() => {
		ue.current && (ue.current = !1, g?.(!1));
	}), Ce = a(({ resolvedProgress: e, shouldTrackProgress: t, notifyParent: n }) => {
		let r = j && !N && t, i = r ? e : 0, a = j && t ? e : 0;
		n && v && (v(a), a <= 0 && Se()), L?.set({
			swipeProgress: i,
			frontmostHeight: i > 0 ? y : 0
		});
		let o = d.current;
		o && (!r || i <= 0 ? (o.style.setProperty(q.swipeProgress, "0"), o.style.removeProperty(K.height)) : (o.style.setProperty(q.swipeProgress, `${i}`), y > 0 ? o.style.setProperty(K.height, `${y}px`) : o.style.removeProperty(K.height)));
	});
	function we({ direction: e, deltaX: t, deltaY: n, velocityX: r, velocityY: i, releaseVelocityX: a, releaseVelocityY: o }) {
		if (!e) return null;
		let s = l.context.popupRef.current;
		if (!s) return null;
		let c = e === "left" || e === "right" ? s.offsetWidth : s.offsetHeight;
		if (!Number.isFinite(c) || c <= 0) return null;
		let u = e === "left" || e === "right" ? t : n, d = w && w.length > 0 ? O ?? 0 : 0, f = 0;
		e === "down" ? f = d : e === "up" && (f = -d);
		let p = f + u, m = e === "left" || e === "up" ? -p : p, h = Math.max(0, c - m);
		if (!Number.isFinite(h) || h <= 0) return null;
		let g = e === "left" || e === "right" ? a : o, _ = e === "left" || e === "right" ? r : i, v = Math.abs(g) > 0 && Number.isFinite(g) ? g : _, y = e === "left" || e === "up" ? -v : v;
		if (!Number.isFinite(y) || y <= nt) return null;
		let b = V(y, nt, rt), x = V(h / b, it, at);
		if (!Number.isFinite(x)) return null;
		let S = (x - it) / 280, C = V(ot + S * .9, ot, st);
		return !Number.isFinite(C) || C <= 0 ? null : C;
	}
	function Te(e) {
		if (ue.current || !e) return;
		let t = e.direction ?? f, n = t === "left" || t === "right" ? e.deltaX : e.deltaY;
		!Number.isFinite(n) || Math.abs(n) < Ze || (ue.current = !0, g?.(!0));
	}
	let $ = Ke({
		enabled: te && !R,
		directions: be,
		elementRef: l.context.popupRef,
		ignoreSelectorWhenTouch: !1,
		ignoreScrollableAncestors: !0,
		movementCssVars: {
			x: K.swipeMovementX,
			y: K.swipeMovementY
		},
		onSwipeStart(e) {
			if ("touches" in e || "pointerType" in e && e.pointerType === "touch") return;
			let t = u.current;
			if (!t) return;
			let n = E(t).getSelection?.();
			if (!n || n.isCollapsed) return;
			let r = b(n.anchorNode) ? n.anchorNode : n.anchorNode?.parentElement, i = b(n.focusNode) ? n.focusNode : n.focusNode?.parentElement;
			(M(t, r) || M(t, i)) && n.removeAllRanges();
		},
		onSwipingChange(e) {
			le.current = e, dt(l.context.backdropRef.current, e), !e && !v && Se();
		},
		swipeThreshold({ element: e, direction: t }) {
			return mt(e, t);
		},
		canStart(e, t) {
			let n = l.context.popupRef.current;
			if (!n) return !1;
			let r = n.ownerDocument, i = Me(r, e.x, e.y);
			if (!i || !M(n, i)) return !1;
			let a = t.nativeEvent;
			return !(("touches" in a || "pointerType" in a && a.pointerType === "touch") && vt(r, n) || a.type === "touchstart" && ft(i));
		},
		onProgress(e, t) {
			Te(t);
			let n = !!(w && w.length > 0);
			if (le.current && f === "down" && n && t && Number.isFinite(t.deltaY)) {
				let e = l.context.popupRef.current;
				e && (e.style.removeProperty("transform"), e.style.setProperty(K.swipeMovementY, `${ge(O ?? 0, t.deltaY)}px`));
			}
			let r = t?.direction ?? $.swipeDirection, i = n && (f === "down" || f === "up") || !n || f === "left" || f === "right" || r === void 0 || r === f, a = e;
			if (Z && A > 0) {
				if (t && Number.isFinite(t.deltaY)) {
					let e = O ?? Z.minOffset, n = V(e + t.deltaY, 0, A);
					a = V((n - Z.minOffset) / Z.range, 0, 1);
				} else if (_e !== null) a = _e;
				else if (r === "down" || r === "up") {
					let t = e * A, n = O ?? Z.minOffset, i = r === "down" ? n + t : n - t;
					a = V((i - Z.minOffset) / Z.range, 0, 1);
				}
			}
			Ce({
				resolvedProgress: a,
				shouldTrackProgress: i,
				notifyParent: !0
			});
		},
		onRelease({ event: e, deltaX: t, deltaY: n, direction: r, velocityX: i, velocityY: a, releaseVelocityX: o, releaseVelocityY: s }) {
			let c = {
				deltaX: t,
				deltaY: n,
				velocityX: i,
				velocityY: a,
				releaseVelocityX: o,
				releaseVelocityY: s
			};
			function u(e) {
				let t = l.context.popupRef.current;
				t && (Se(), xe(!0), t.style.removeProperty("transition"), t.setAttribute(_.endingStyle, ""), oe.flushSync(() => {
					W(we({
						direction: e,
						...c
					}));
				}));
			}
			if (!w || w.length === 0) {
				if (!r) {
					Q();
					return;
				}
				let e = l.context.popupRef.current;
				if (!e) {
					Q();
					return;
				}
				let o = mt(e, r), s = r === "left" || r === "right" ? t : n;
				if (!Number.isFinite(s)) {
					Q();
					return;
				}
				let c = r === "left" || r === "up" ? -s : s;
				if (c <= 0) return Q(), !1;
				let d = r === "left" || r === "right" ? i : a;
				if ((r === "left" || r === "up" ? -d : d) >= Qe && c > 0) return u(r), !0;
				let f = c > o;
				return f ? u(r) : Q(), f;
			}
			if (f !== "down" && f !== "up" || !A || D.length === 0) {
				Q();
				return;
			}
			let d = f === "down" ? n : -n;
			if (!Number.isFinite(d)) {
				Q();
				return;
			}
			let h = Math.sign(d), g = f === "down" ? s : -s, v = f === "down" ? a : -a, y = Number.isFinite(g) ? g : v;
			if (h !== 0 && Math.abs(d) >= Ze && Number.isFinite(y)) {
				let e = Math.sign(y);
				e !== 0 && e !== h && (y = v);
			}
			let b = O ?? 0, S = V(b + d, 0, A), C = Number.isFinite(y) && Math.abs(y) >= $e ? V(y, -4, tt) * et : 0, T = x ? S : V(S + C, 0, A), E = p(m, e), j = () => (G.current = ee, k?.(null, E), u(f), !0);
			if (x) {
				let e = [...D].sort((e, t) => e.offset - t.offset);
				if (e.length === 0) return Q(), !1;
				let t = 0, n = Math.abs(b - e[0].offset);
				for (let r = 1; r < e.length; r += 1) {
					let i = Math.abs(b - e[r].offset);
					i < n && (n = i, t = r);
				}
				let r = e[0];
				n = Math.abs(T - r.offset);
				for (let t of e) {
					let e = Math.abs(T - t.offset);
					e < n && (n = e, r = t);
				}
				let i = Math.sign(y), a = h !== 0 && i !== 0 && i === h && Math.abs(y) >= $e, o = T;
				if (a) {
					let n = V(t + h, 0, e.length - 1);
					if (n !== t) {
						let t = e[n];
						(h > 0 ? T < t.offset : T > t.offset) && (r = t, o = t.offset);
					} else if (h > 0) return j();
				}
				return Math.abs(o - A) < Math.abs(o - r.offset) ? j() : (k?.(r.value, E), Q(), !1);
			}
			if (y >= Qe && d > 0) return j();
			let te = D[0], M = Math.abs(T - te.offset);
			for (let e of D) {
				let t = Math.abs(T - e.offset);
				t < M && (M = t, te = e);
			}
			return Math.abs(T - A) < M ? j() : (k?.(te.value, E), Q(), !1);
		},
		onDismiss(e) {
			L?.set({
				swipeProgress: 0,
				frontmostHeight: 0
			});
			let t = l.context.backdropRef.current;
			t && (t.style.setProperty(q.swipeProgress, "0"), t.style.removeProperty(K.height));
			let n = p(m, e);
			if (l.setOpen(!1, n), n.isCanceled) {
				let t = G.current;
				t !== void 0 && k?.(t, p(m, e)), G.current = void 0, J.current?.(), Q();
			} else if (l.select("open")) {
				let t = e;
				ce.request(() => {
					if (l.select("open")) {
						let e = G.current;
						e !== void 0 && k?.(e, p(m, t)), G.current = void 0, Q(), J.current?.();
					} else G.current = void 0;
				});
			} else G.current = void 0, xe(!0);
		}
	}), Ee = $.getPointerProps(), De = $.getTouchProps(), { moveNative: Oe, reset: ke } = $;
	J.current = ke, H.useEffect(() => {
		let e = re ?? F;
		if (!e) return;
		let t = e, n = E(t), r = S(n);
		function i(e) {
			if (me?.onTouchMove(e), pe.current) return;
			let i = X.current, a = e.touches[0];
			if (!a || !i) return;
			let o = B ? a.clientY - i.lastY : a.clientX - i.lastX;
			if (yt(e, r)) {
				i.allowSwipe = !1, xt(i, a);
				return;
			}
			if (e.touches.length === 2 || vt(n, t) || !j || !te || R || St(i, a, B)) {
				xt(i, a);
				return;
			}
			let s = i.scrollTarget;
			if (!s || s === n.documentElement || s === n.body) {
				e.cancelable && e.preventDefault(), e.stopPropagation(), Oe(e, t), xt(i, a);
				return;
			}
			if (!Ct(s, z)) {
				e.cancelable && e.preventDefault(), e.stopPropagation(), xt(i, a);
				return;
			}
			let c = o;
			if (c !== 0) {
				let t = Et(s, z, f, c);
				i.allowSwipe ? e.cancelable && e.preventDefault() : e.cancelable && t ? (i.allowSwipe = !0, e.preventDefault()) : i.allowSwipe = !1;
			}
			i.allowSwipe === !0 && (e.stopPropagation(), Oe(e, t)), xt(i, a);
		}
		return T(n, "touchmove", i, {
			passive: !1,
			capture: !0
		});
	}, [
		te,
		R,
		j,
		F,
		B,
		z,
		f,
		Oe,
		re,
		me
	]), H.useEffect(() => {
		Z && !$.swiping && Ce({
			resolvedProgress: !j || N ? 0 : _e ?? 0,
			shouldTrackProgress: !0,
			notifyParent: !1
		});
	}, [
		Ce,
		y,
		N,
		v,
		j,
		_e,
		Z,
		$.swiping,
		l,
		L
	]), H.useEffect(() => {
		if (v) return j || v(0), () => {
			v(0);
		};
	}, [v, j]), H.useEffect(() => {
		j && (ke(), Q());
	}, [
		Q,
		j,
		ke
	]), H.useEffect(() => {
		let e = d.current;
		return () => {
			L?.set({
				swipeProgress: 0,
				frontmostHeight: 0
			}), dt(e, !1);
			let t = d.current;
			t !== e && dt(t, !1), Se();
		};
	}, [
		d,
		Se,
		L
	]);
	let Ae = H.useMemo(() => ({
		swiping: $.swiping,
		getDragStyles: $.getDragStyles,
		swipeStrength: ae ?? null,
		setSwipeDismissed: xe
	}), [
		xe,
		$.getDragStyles,
		$.swiping,
		ae
	]);
	function Ne() {
		pe.current = !1, X.current = null, de.current = "", fe.current = !1;
	}
	return /*#__PURE__*/ (0, U.jsx)(se, {
		ref: t,
		className: r,
		style: i,
		render: n,
		...s(c, {
			onPointerDown(e) {
				if (de.current = e.pointerType, fe.current = e.pointerType === "pen", !j || !te || R) return;
				let t = Me(E(e.currentTarget), e.clientX, e.clientY);
				ft(t) || pt(t) || e.pointerType !== "touch" && Ee.onPointerDown?.(e);
			},
			onPointerMove(e) {
				e.pointerType !== "touch" && Ee.onPointerMove?.(e);
			},
			onPointerUp(e) {
				de.current === e.pointerType && (de.current = ""), e.pointerType !== "touch" && Ee.onPointerUp?.(e);
			},
			onPointerCancel(e) {
				de.current === e.pointerType && (de.current = ""), e.pointerType !== "touch" && Ee.onPointerCancel?.(e);
			},
			onTouchStart(e) {
				if (de.current === "pen" && fe.current) {
					fe.current = !1, pe.current = !1, X.current = null;
					return;
				}
				if (!j || !te || R) {
					pe.current = !1, X.current = null;
					return;
				}
				let t = e.touches[0];
				if (!t) return;
				if (bt(e)) {
					pe.current = !1, X.current = null;
					return;
				}
				let n = Me(E(e.currentTarget), t.clientX, t.clientY), r = re ?? F, i = ne(e.nativeEvent), a = b(i) ? i : null;
				if (r && a && !M(r, a)) {
					pe.current = !0, X.current = null;
					return;
				}
				if (me?.onTouchStart(e), pe.current = ft(n), pe.current) {
					X.current = null;
					return;
				}
				let o = null, s = !1;
				r && a && (o = je(a, r, z), s = je(a, r, ie) != null);
				let c = null;
				o && (c = Tt(o, z, f) ? null : !1), X.current = {
					startX: t.clientX,
					startY: t.clientY,
					lastX: t.clientX,
					lastY: t.clientY,
					scrollTarget: o,
					hasCrossAxisScrollableContent: s,
					allowSwipe: c,
					preserveNativeCrossAxisScroll: !1
				}, De.onTouchStart?.(e);
			},
			onTouchEnd(e) {
				me?.onTouchEnd(e), Ne(), De.onTouchEnd?.(e);
			},
			onTouchCancel(e) {
				me?.onTouchCancel(), Ne(), De.onTouchCancel?.(e);
			},
			"data-nested-dialog-open": void 0
		}),
		children: /*#__PURE__*/ (0, U.jsx)(ye.Provider, {
			value: Ae,
			children: o
		})
	});
});
function ut(e, t, n) {
	n ? (e?.setAttribute(X.swipeDismiss, ""), t?.setAttribute(X.swipeDismiss, "")) : (e?.removeAttribute(X.swipeDismiss), t?.removeAttribute(X.swipeDismiss));
}
function dt(e, t) {
	e && (t ? e.setAttribute(X.swiping, "") : e.removeAttribute(X.swiping));
}
function ft(e) {
	return !!e?.closest(j);
}
function pt(e) {
	return !!e?.closest(ct);
}
function mt(e, t) {
	let n = t === "left" || t === "right" ? e.offsetWidth : e.offsetHeight;
	return Math.max(n * .5, Ze);
}
function ht(e, t) {
	return e instanceof t.HTMLInputElement && e.type === "range";
}
function gt(e) {
	return b(e) ? e.tagName === "INPUT" || e.tagName === "TEXTAREA" : !1;
}
function _t(e, t) {
	let n = b(e.anchorNode) ? e.anchorNode : e.anchorNode?.parentElement, r = b(e.focusNode) ? e.focusNode : e.focusNode?.parentElement;
	return e.containsNode(t, !0) || M(t, n) || M(t, r);
}
function vt(e, t) {
	let n = N(e);
	if (n && M(t, n) && gt(n)) {
		let { selectionStart: e, selectionEnd: t } = n;
		if (e != null && t != null && e < t) return !0;
	}
	let r = e.getSelection?.();
	return !r || r.isCollapsed ? !1 : _t(r, t);
}
function yt(e, t) {
	let n = e.composedPath();
	return n ? n.some((e) => ht(e, t)) : ht(ne(e), t);
}
function bt(e) {
	return yt(e.nativeEvent, S(e.currentTarget));
}
function xt(e, t) {
	e.lastX = t.clientX, e.lastY = t.clientY;
}
function St(e, t, n) {
	if (e.preserveNativeCrossAxisScroll) return !0;
	if (e.allowSwipe === !0 || !e.hasCrossAxisScrollableContent) return !1;
	let r = n ? t.clientY - e.startY : t.clientX - e.startX, i = n ? t.clientX - e.startX : t.clientY - e.startY, a = Math.abs(r), o = Math.abs(i);
	return o < 6 || o <= a + 2 ? !1 : (e.preserveNativeCrossAxisScroll = !0, !0);
}
function Ct(e, t) {
	return t === "vertical" ? e.scrollHeight > e.clientHeight : e.scrollWidth > e.clientWidth;
}
function wt(e, t) {
	if (t === "vertical") {
		let t = Math.max(0, e.scrollHeight - e.clientHeight);
		return {
			offset: e.scrollTop,
			max: t
		};
	}
	let n = Math.max(0, e.scrollWidth - e.clientWidth);
	return {
		offset: e.scrollLeft,
		max: n
	};
}
function Tt(e, t, n) {
	let { offset: r, max: i } = wt(e, t), a = Dt(n, t);
	return a === null ? !1 : a ? r <= 0 : r >= i;
}
function Et(e, t, n, r) {
	let { offset: i, max: a } = wt(e, t), o = Dt(n, t);
	return o === null || !(o ? r > 0 : r < 0) ? !1 : o ? i <= 0 : i >= a;
}
function Dt(e, t) {
	return t === "vertical" ? e === "down" || e !== "up" && null : e === "right" || e !== "left" && null;
}
// upstream/registry/bases/base/ui/drawer.tsx
var Ot = H.createContext(null);
function kt() {
	let e = H.useContext(Ot);
	if (!e) throw Error("useDrawer must be used within a Drawer.");
	return e;
}
function At({ modal: e = !0, showSwipeHandle: t = !1, snapPoints: n, swipeDirection: r = "down", ...i }) {
	let a = n != null && n.length > 0, o = H.useMemo(() => ({
		hasSnapPoints: a,
		modal: e,
		showSwipeHandle: t,
		swipeDirection: r
	}), [
		a,
		e,
		t,
		r
	]);
	return /* @__PURE__ */ (0, U.jsx)(Ot.Provider, {
		value: o,
		children: /* @__PURE__ */ (0, U.jsx)(Ee, {
			"data-slot": "drawer",
			modal: e,
			snapPoints: n,
			swipeDirection: r,
			...i
		})
	});
}
function jt({ ...e }) {
	return /* @__PURE__ */ (0, U.jsx)(Je, {
		"data-slot": "drawer-trigger",
		...e
	});
}
function Mt({ ...e }) {
	return /* @__PURE__ */ (0, U.jsx)(we, {
		"data-slot": "drawer-portal",
		...e
	});
}
function Nt({ ...e }) {
	return /* @__PURE__ */ (0, U.jsx)(le, {
		"data-slot": "drawer-close",
		...e
	});
}
function Pt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(ce, {
		"data-slot": "drawer-overlay",
		className: D("cn-drawer-overlay fixed inset-0 z-50 min-h-dvh opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute", e),
		...t
	});
}
function Ft({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)("div", {
		"data-slot": "drawer-swipe-handle",
		"aria-hidden": "true",
		className: D("cn-drawer-swipe-handle relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:order-last active:cursor-grabbing", e),
		...t
	});
}
function It({ className: e, children: t, ...n }) {
	let { hasSnapPoints: r, modal: i, showSwipeHandle: a, swipeDirection: o } = kt(), s = o === "down" || o === "up" ? "y" : "x";
	return /* @__PURE__ */ (0, U.jsxs)(Mt, {
		"data-slot": "drawer-portal",
		children: [i === !0 && /* @__PURE__ */ (0, U.jsx)(Pt, { "data-snap-points": r ? "" : void 0 }), /* @__PURE__ */ (0, U.jsx)(lt, {
			"data-slot": "drawer-viewport",
			"data-modal": i,
			className: "pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto",
			children: /* @__PURE__ */ (0, U.jsxs)(Ce, {
				"data-slot": "drawer-popup",
				"data-swipe-axis": s,
				"data-snap-points": r ? "" : void 0,
				className: D("cn-drawer-popup group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [interpolate-size:allow-keywords]", "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95", "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full", "[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]", "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]", "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]", "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)", "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row", "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]", "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]", e),
				...n,
				children: [a && /* @__PURE__ */ (0, U.jsx)(Ft, {}), /* @__PURE__ */ (0, U.jsx)(de, {
					"data-slot": "drawer-content",
					className: D("cn-drawer-content-base flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none"),
					children: t
				})]
			})
		})]
	});
}
function Lt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)("div", {
		"data-slot": "drawer-header",
		className: D("cn-drawer-header-base flex shrink-0 flex-col group-data-[swipe-axis=y]/drawer-popup:text-center", e),
		...t
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)("div", {
		"data-slot": "drawer-footer",
		className: D("cn-drawer-footer-base mt-auto flex shrink-0 flex-col", e),
		...t
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(qe, {
		"data-slot": "drawer-title",
		className: D("cn-drawer-title cn-font-heading", e),
		...t
	});
}
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(fe, {
		"data-slot": "drawer-description",
		className: D("cn-drawer-description text-balance", e),
		...t
	});
}
export { Rt as a, jt as c, Bt as i, Nt as n, Lt as o, It as r, zt as s, At as t };
