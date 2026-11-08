import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { o as r, t as i, u as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useBaseUiId-BwhhMxTY.js";
import { a as s, d as c, t as l } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as u } from "./useButton-CMNj7XNN.js";
import { a as d, c as f, d as p, f as m, h, l as g, o as _, u as v } from "./popupStoreUtils-DmfT7kYW.js";
import { T as y, a as b, c as x, m as S, o as C, p as w, x as T } from "./popupStateMapping-CSyRbb7j.js";
import { n as E, o as D, r as O } from "./useOpenInteractionType-DPoQCspH.js";
import { n as k, r as A } from "./shadowDom-D66trjQm.js";
import { t as j } from "./useClick-B0N8YgwG.js";
import { n as M, r as N, t as P } from "./store-DVwqec8L.js";
import { t as F } from "./inertValue-cHK2-C55.js";
// node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
var I = /* @__PURE__ */ e(t(), 1);
function L(e) {
	let { store: t, actionsRef: n } = e, r = t.useState("open");
	v(t, r), _(t);
	let { forceUnmount: i } = f(r, t), a = I.useCallback(() => {
		t.setOpen(!1, l(c));
	}, [t]);
	I.useImperativeHandle(n, () => ({
		unmount: i,
		close: a
	}), [i, a]);
}
function R({ store: e, parentContext: t, isDrawer: n }) {
	let i = e.useState("open"), a = e.useState("disablePointerDismissal"), o = e.useState("modal"), s = e.useState("popupElement"), c = e.useState("floatingRootContext"), [l, u] = I.useState(0), [d, f] = I.useState(0), p = l === 0, m = S(c, {
		outsidePressEvent() {
			return e.context.internalBackdropRef.current || e.context.backdropRef.current ? "intentional" : {
				mouse: o === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(t) {
			if (!e.context.outsidePressEnabledRef.current || "button" in t && t.button !== 0 || "touches" in t && t.touches.length !== 1) return !1;
			let n = A(t);
			return p && !a ? o && (e.context.internalBackdropRef.current || e.context.backdropRef.current) ? e.context.internalBackdropRef.current === n || e.context.backdropRef.current === n || k(n, s) && !n?.hasAttribute("data-base-ui-portal") : !0 : !1;
		},
		escapeKey: p
	});
	D(i && o === !0, s), e.useContextCallback("onNestedDialogOpen", (e, t) => {
		u(e), f(t);
	}), e.useContextCallback("onNestedDialogClose", () => {
		u(0), f(0);
	}), I.useEffect(() => (t?.onNestedDialogOpen && i && t.onNestedDialogOpen(l + 1, d + +!!n), t?.onNestedDialogClose && !i && t.onNestedDialogClose(), () => {
		t?.onNestedDialogClose && i && t.onNestedDialogClose();
	}), [
		n,
		i,
		l,
		d,
		t
	]);
	let h = m.reference ?? r, _ = m.trigger ?? r, v = m.floating ?? r;
	return g(e, {
		activeTriggerProps: h,
		inactiveTriggerProps: _,
		popupProps: v,
		nestedOpenDialogCount: l,
		nestedOpenDrawerCount: d
	}), null;
}
// node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
var z = /*#__PURE__*/ I.createContext(!1), B = /*#__PURE__*/ I.createContext(void 0);
function V(e) {
	let t = I.useContext(B);
	if (e === !1 && t === void 0) throw Error(a(27));
	return t;
}
// node_modules/@base-ui/react/dialog/store/DialogStore.mjs
var H = {
	...N,
	modal: w((e) => e.modal),
	nested: w((e) => e.nested),
	nestedOpenDialogCount: w((e) => e.nestedOpenDialogCount),
	nestedOpenDrawerCount: w((e) => e.nestedOpenDrawerCount),
	disablePointerDismissal: w((e) => e.disablePointerDismissal),
	openMethod: w((e) => e.openMethod),
	descriptionElementId: w((e) => e.descriptionElementId),
	titleElementId: w((e) => e.titleElementId),
	viewportElement: w((e) => e.viewportElement),
	role: w((e) => e.role)
}, U = class e extends x {
	constructor(e, t, n = !1) {
		let r = new C(), i = W(e);
		i.floatingRootContext = M(r, t, n), super(i, {
			popupRef: /*#__PURE__*/ I.createRef(),
			backdropRef: /*#__PURE__*/ I.createRef(),
			internalBackdropRef: /*#__PURE__*/ I.createRef(),
			outsidePressEnabledRef: { current: !0 },
			triggerElements: r,
			onOpenChange: void 0,
			onOpenChangeComplete: void 0
		}, H);
	}
	setOpen = (e, t) => {
		if (t.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", !0);
		}, !e && t.trigger == null && this.state.activeTriggerId != null && (t.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e, t), t.isCanceled) return;
		this.state.floatingRootContext.dispatchOpenChange(e, t);
		let n = { open: e };
		d(n, e, t.trigger), this.update(n);
	};
	static useStore(t, n) {
		return p(t, (t, r) => new e(n, t, r), !0).store;
	}
};
function W(e = {}) {
	return {
		...P(),
		modal: !0,
		disablePointerDismissal: !1,
		popupElement: null,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: !1,
		nestedOpenDialogCount: 0,
		nestedOpenDrawerCount: 0,
		role: "dialog",
		...e
	};
}
// node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
var G = n();
function K(e, t = "dialog") {
	let { children: n, open: r, defaultOpen: i = !1, onOpenChange: a, onOpenChangeComplete: o, disablePointerDismissal: s = !1, modal: c = !0, actionsRef: l, handle: u, triggerId: d, defaultTriggerId: f = null } = e, p = t === "drawer", m = t === "alert-dialog", g = m ? !0 : c, _ = m || s, v = m ? "alertdialog" : "dialog", y = V(!0), b = {
		modal: g,
		disablePointerDismissal: _,
		nested: !!y,
		role: v
	}, x = U.useStore(u?.store, {
		open: i,
		openProp: r,
		activeTriggerId: f,
		triggerIdProp: d,
		...b
	});
	h(() => {
		let e = r === void 0 && x.state.open === !1 && i === !0 ? {
			open: !0,
			activeTriggerId: f
		} : null;
		m ? x.update(e ? {
			...b,
			...e
		} : b) : e && x.update(e);
	}), x.useControlledProp("openProp", r), x.useControlledProp("triggerIdProp", d), x.useSyncedValues(b), x.useContextCallback("onOpenChange", a), x.useContextCallback("onOpenChangeComplete", o);
	let S = x.useState("open"), C = x.useState("mounted"), w = x.useState("payload");
	L({
		store: x,
		actionsRef: l
	});
	let T = S || C, E = I.useMemo(() => ({ store: x }), [x]);
	return /*#__PURE__*/ (0, G.jsx)(z.Provider, {
		value: !1,
		children: /*#__PURE__*/ (0, G.jsxs)(B.Provider, {
			value: E,
			children: [T && /*#__PURE__*/ (0, G.jsx)(R, {
				store: x,
				parentContext: y?.store.context,
				isDrawer: p
			}), typeof n == "function" ? n({ payload: w }) : n]
		})
	});
}
// node_modules/@base-ui/react/dialog/close/DialogClose.mjs
var q = /*#__PURE__*/ I.forwardRef(function(e, t) {
	let { render: n, className: r, style: a, disabled: o = !1, nativeButton: c = !0, ...d } = e, { store: f } = V(), p = f.useState("open"), { getButtonProps: m, buttonRef: h } = u({
		disabled: o,
		native: c
	}), g = { disabled: o };
	function _(e) {
		p && f.setOpen(!1, l(s, e.nativeEvent));
	}
	return i("button", e, {
		state: g,
		ref: [t, h],
		props: [
			{ onClick: _ },
			d,
			m
		]
	});
}), J = /*#__PURE__*/ I.forwardRef(function(e, t) {
	let { render: n, className: r, style: a, id: s, ...c } = e, { store: l } = V(), u = o(s);
	return l.useSyncedValueWithCleanup("descriptionElementId", u), i("p", e, {
		ref: t,
		props: [{ id: u }, c]
	});
}), Y = /*#__PURE__*/ I.createContext(void 0);
function X() {
	let e = I.useContext(Y);
	if (e === void 0) throw Error(a(26));
	return e;
}
// node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
var Z = /*#__PURE__*/ I.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { store: i } = V(), a = i.useState("mounted"), o = i.useState("modal"), s = i.useState("open");
	return a || n ? /*#__PURE__*/ (0, G.jsx)(Y.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, G.jsxs)(T, {
			ref: t,
			...r,
			children: [a && o === !0 && /*#__PURE__*/ (0, G.jsx)(O, {
				ref: i.context.internalBackdropRef,
				inert: F(!s)
			}), e.children]
		})
	}) : null;
}), Q = /*#__PURE__*/ I.forwardRef(function(e, t) {
	let { render: n, className: r, style: a, id: s, ...c } = e, { store: l } = V(), u = o(s);
	return l.useSyncedValueWithCleanup("titleElementId", u), i("h2", e, {
		ref: t,
		props: [{ id: u }, c]
	});
}), $ = /*#__PURE__*/ I.forwardRef(function(e, t) {
	let { render: n, className: r, style: s, disabled: c = !1, nativeButton: l = !0, id: d, payload: f, handle: p, ...h } = e, g = V(!0), _ = p?.store ?? g?.store;
	if (!_) throw Error(a(79));
	let v = o(d), x = _.useState("floatingRootContext"), S = _.useState("isOpenedByTrigger", v), C = _.useState("triggerPopupId", v), w = I.useRef(null), { registerTrigger: T, isMountedByThisTrigger: D } = m(v, w, _, { payload: f }), { getButtonProps: O, buttonRef: k } = u({
		disabled: c,
		native: l
	}), A = j(x, { enabled: x != null }), M = E(() => _.select("open"), (e) => {
		_.set("openMethod", e);
	}), N = {
		disabled: c,
		open: S
	}, P = _.useState("triggerProps", D);
	return i("button", e, {
		state: N,
		ref: [
			k,
			t,
			T,
			w
		],
		props: [
			A.reference,
			P,
			M,
			{
				[y]: "",
				id: v,
				"aria-haspopup": "dialog",
				"aria-expanded": S,
				"aria-controls": C
			},
			h,
			O
		],
		stateAttributesMapping: b
	});
});
export { J as a, z as c, X as i, V as l, Q as n, q as o, Z as r, K as s, $ as t };
