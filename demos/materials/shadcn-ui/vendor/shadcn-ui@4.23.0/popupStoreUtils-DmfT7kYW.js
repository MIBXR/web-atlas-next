import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { o as r } from "./useRenderElement-Bc91YjHo.js";
import { n as i } from "./useBaseUiId-BwhhMxTY.js";
import { t as a } from "./useStableCallback-BmDujACN.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { a as s } from "./constants-BQOuGgoN.js";
import { s as c, v as l } from "./popupStateMapping-CSyRbb7j.js";
import { d as u } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { o as d, t as f } from "./useOpenChangeComplete-BfJk_bnM.js";
import { D as p, t as m, x as h } from "./createBaseUIEventDetails-DG51vPHx.js";
// node_modules/@base-ui/utils/useOnFirstRender.mjs
var g = /* @__PURE__ */ e(n(), 1), _ = /* @__PURE__ */ e(t(), 1);
function v(e) {
	let t = _.useRef(!0);
	t.current && (t.current = !1, e());
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
function y(e) {
	let { popupStore: t, treatPopupAsFloatingElement: n = !1, floatingRootContext: r, floatingId: i, nested: a, onOpenChange: s } = e, l = t.useState("open"), d = t.useState("activeTriggerElement"), f = t.useState(n ? "popupElement" : "positionerElement"), p = t.context.triggerElements, m = s, h = _.useRef(null);
	r === void 0 && h.current === null && (h.current = new c({
		open: l,
		transitionStatus: void 0,
		referenceElement: d,
		floatingElement: f,
		triggerElements: p,
		onOpenChange: m,
		floatingId: i,
		syncOnly: !0,
		nested: a
	}));
	let g = r ?? h.current;
	return t.useSyncedValue("floatingId", i), o(() => {
		let e = {
			open: l,
			floatingId: i,
			referenceElement: d,
			floatingElement: f
		};
		u(d) && (e.domReferenceElement = d), g.state.positionReference === g.state.referenceElement && (e.positionReference = d), g.update(e);
	}, [
		l,
		i,
		d,
		f,
		g
	]), g.context.onOpenChange = m, g.context.nested = a, g;
}
// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var b = {
	tabIndex: -1,
	[s]: ""
};
function x(e) {
	return (t) => t !== "touch" || e.current;
}
function S(e, t, n = !1) {
	let r = i(), a = l() != null, o = _.useRef(null);
	e === void 0 && o.current === null && (o.current = t(r, a));
	let s = e ?? o.current;
	return y({
		popupStore: s,
		treatPopupAsFloatingElement: n,
		floatingRootContext: s.state.floatingRootContext,
		floatingId: r,
		nested: a,
		onOpenChange: s.setOpen
	}), {
		store: s,
		internalStore: o.current
	};
}
function C(e, t) {
	let n = _.useRef(null), r = _.useRef(null);
	return _.useCallback((i) => {
		if (e === void 0) return;
		let a = !1;
		if (n.current !== null) {
			let e = n.current, i = r.current, o = t.context.triggerElements.getById(e);
			i && o === i && (t.context.triggerElements.delete(e), a = !0), n.current = null, r.current = null;
		}
		if (i !== null && (n.current = e, r.current = i, t.context.triggerElements.add(e, i), a = !0), a) {
			let e = t.context.triggerElements.size;
			t.select("open") && t.state.triggerCount !== e && t.set("triggerCount", e);
		}
	}, [t, e]);
}
function w(e, t, n, r = !1) {
	t ? e.preventUnmountingOnClose = !1 : r && (e.preventUnmountingOnClose = !0);
	let i = n?.id ?? null;
	(i || t) && (e.activeTriggerId = i, e.activeTriggerElement = n ?? null);
}
function T(e) {
	let t = !1;
	return e.preventUnmountOnClose = () => {
		t = !0;
	}, () => t;
}
function E(e, t, n, r = {}) {
	let i = n.reason, a = i === p, o = t && i === "trigger-focus", s = !t && (i === "trigger-press" || i === "escape-key"), c = T(n);
	if (e.context.onOpenChange?.(t, n), n.isCanceled) return;
	r.onBeforeDispatch?.(), e.state.floatingRootContext.dispatchOpenChange(t, n);
	let l = () => {
		let i = {
			...r.extraState,
			open: t
		};
		o ? i.instantType = "focus" : s ? i.instantType = "dismiss" : a && (i.instantType = void 0), w(i, t, n.trigger, c()), e.update(i);
	};
	a ? g.flushSync(l) : l();
}
function D(e, t, n, r) {
	v(() => {
		t === void 0 && e.state.open === !1 && n && (e.state = {
			...e.state,
			open: !0,
			activeTriggerId: r,
			preventUnmountingOnClose: !1
		});
	});
}
function O(e, t, n, r) {
	let i = n.useState("isMountedByTrigger", e), s = C(e, n), c = a((t) => {
		if (s(t), !t) return;
		let i = n.select("open"), a = n.select("activeTriggerId");
		a === e ? n.update({
			activeTriggerElement: t,
			...i ? r : null
		}) : a == null && i && n.update({
			activeTriggerId: e,
			activeTriggerElement: t,
			...r
		});
	});
	return o(() => {
		i && n.update({
			activeTriggerElement: t.current,
			...r
		});
	}, [
		i,
		n,
		t,
		...Object.values(r)
	]), {
		registerTrigger: c,
		isMountedByThisTrigger: i
	};
}
function k(e, t = {}) {
	let { closeOnActiveTriggerUnmount: n = !1 } = t, r = e.useState("open"), i = e.useState("triggerCount");
	o(() => {
		if (!r) {
			e.state.triggerCount !== 0 && e.set("triggerCount", 0);
			return;
		}
		let t = e.context.triggerElements.size, i = {};
		e.state.triggerCount !== t && (i.triggerCount = t);
		let a = e.select("activeTriggerId"), o = null;
		if (a) {
			let t = e.context.triggerElements.getById(a);
			t ? t !== e.state.activeTriggerElement && (i.activeTriggerElement = t) : o = a;
		}
		if (!o && !a && t === 1) {
			let t = e.context.triggerElements.entries().next();
			if (!t.done) {
				let [e, n] = t.value;
				i.activeTriggerId = e, i.activeTriggerElement = n;
			}
		}
		(i.triggerCount !== void 0 || i.activeTriggerId !== void 0 || i.activeTriggerElement !== void 0) && e.update(i), o && n && queueMicrotask(() => {
			if (e.select("open") && e.select("activeTriggerId") === o && !e.context.triggerElements.getById(o)) {
				let t = m(h);
				e.setOpen(!1, t), t.isCanceled || e.update({
					activeTriggerId: null,
					activeTriggerElement: null
				});
			}
		});
	}, [
		r,
		e,
		i,
		n
	]);
}
function A(e, t, n) {
	let { mounted: r, setMounted: i, transitionStatus: o } = d(e), s = t.useState("preventUnmountingOnClose"), c = !e && s;
	t.useSyncedValues({
		mounted: r,
		transitionStatus: o,
		preventUnmountingOnClose: c
	});
	let l = a(() => {
		i(!1), t.update({
			activeTriggerId: null,
			activeTriggerElement: null,
			mounted: !1,
			preventUnmountingOnClose: !1
		}), n?.(), t.context.onOpenChangeComplete?.(!1);
	});
	return f({
		enabled: r && !e && !c,
		open: e,
		ref: t.context.popupRef,
		onComplete() {
			e || l();
		}
	}), {
		forceUnmount: l,
		transitionStatus: o
	};
}
function j(e, t) {
	e.useSyncedValues(t), o(() => () => {
		e.update({
			activeTriggerProps: r,
			inactiveTriggerProps: r,
			popupProps: r
		});
	}, [e]);
}
function M(e, t) {
	o(() => {
		!t && e.state.openMethod !== null && e.set("openMethod", null);
	}, [t, e]), o(() => () => {
		e.state.openMethod !== null && e.set("openMethod", null);
	}, [e]);
}
export { w as a, A as c, S as d, O as f, v as h, x as i, j as l, y as m, E as n, k as o, C as p, T as r, D as s, b as t, M as u };
