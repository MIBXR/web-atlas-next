import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { o as i, r as a, t as ee, u as te } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as ne } from "./useBaseUiId-BwhhMxTY.js";
import { r as re } from "./createBaseUIEventDetails-DG51vPHx.js";
import { r as ie, t as ae } from "./useButton-CMNj7XNN.js";
import { t as s } from "./owner-C-FapX6G.js";
import { t as c } from "./dist-DCi9UB7o.js";
import { t as l } from "./icon-placeholder-BTF3H_W7.js";
import { f as oe } from "./popupStoreUtils-DmfT7kYW.js";
import { U as u, _ as se, b as ce, f as d, i as f, v as le, y as ue } from "./popupStateMapping-CSyRbb7j.js";
import { n as p } from "./useTimeout-CP4j_cva.js";
import { n as m } from "./shadowDom-D66trjQm.js";
import { n as de, t as fe } from "./safePolygon-DhLTA827.js";
import { t as pe } from "./useClick-B0N8YgwG.js";
import { t as me } from "./useFocus-CcLAK8ce.js";
import { _ as h, c as g, d as _, f as v, g as y, h as b, i as x, l as S, m as C, n as he, o as w, p as T, r as E, s as D, t as O, u as k, x as A, y as j } from "./MenuSubmenuTrigger-DeBj4vdJ.js";
import { t as ge } from "./getPseudoElementBounds-Du39E_1D.js";
import { t as _e } from "./CompositeItem-Vp60fN0N.js";
import { t as ve } from "./useTriggerFocusGuards-Bb9U1GRH.js";
import { t as M } from "./Separator-UE5J-VuZ.js";
// node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
var N = /* @__PURE__ */ e(t(), 1);
function ye(e) {
	let { enabled: t = !0, mouseDownAction: n, open: r } = e, a = N.useRef(!1);
	return N.useMemo(() => t ? {
		onMouseDown: (e) => {
			(n === "open" && !r || n === "close" && r) && (a.current = !0, s(e.currentTarget).addEventListener("click", () => {
				a.current = !1;
			}, { once: !0 }));
		},
		onClick: (e) => {
			a.current && (a.current = !1, e.preventBaseUIHandler());
		}
	} : i, [
		t,
		n,
		r
	]);
}
// node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
var P = n(), F = 2, I = d(function(e, t) {
	let { render: n, className: o, style: c, disabled: l = !1, nativeButton: d = !0, id: h, openOnHover: g, delay: _ = 100, closeDelay: v = 0, handle: y, payload: b, ...x } = e, S = A(!0), C = y?.store ?? S?.store;
	if (!C) throw Error(te(85));
	let w = ne(h), T = C.useState("isTriggerActive", w), E = C.useState("floatingRootContext"), D = C.useState("isOpenedByTrigger", w), O = C.useState("triggerPopupId", w), k = N.useRef(null), j = xe(), M = ie(!0), I = ue(), L = N.useMemo(() => I ?? new ce(), [I]), R = se(L), z = le(), { registerTrigger: B, isMountedByThisTrigger: V } = oe(w, k, C, {
		payload: b,
		closeDelay: v,
		parent: j,
		floatingTreeRoot: L,
		floatingNodeId: R,
		floatingParentNodeId: z,
		keyboardEventRelay: M?.relayKeyboardEvent
	}), H = j.type === "menubar", U = C.useState("disabled"), W = l || U || H && j.context.disabled, { getButtonProps: G, buttonRef: K } = ae({
		disabled: W,
		native: d
	});
	N.useEffect(() => {
		!D && j.type === void 0 && (C.context.allowMouseUpTriggerRef.current = !1);
	}, [
		C,
		D,
		j.type
	]);
	let q = N.useRef(null), J = p(), Y = r((e) => {
		if (!q.current) return;
		J.clear(), C.context.allowMouseUpTriggerRef.current = !1;
		let t = e.target;
		if (m(q.current, t) || m(C.select("positionerElement"), t) || t === q.current || t != null && he(t) === C.select("rootId")) return;
		let n = ge(q.current);
		e.clientX >= n.left - F && e.clientX <= n.right + F && e.clientY >= n.top - F && e.clientY <= n.bottom + F || L.events.emit("close", {
			domEvent: e,
			reason: re
		});
	});
	N.useEffect(() => {
		D && C.select("lastOpenChangeReason") === "trigger-hover" && s(q.current).addEventListener("mouseup", Y, { once: !0 });
	}, [
		D,
		Y,
		C
	]);
	let X = H && j.context.hasSubmenuOpen, Z = de(E, {
		enabled: (g ?? X) && !W && j.type !== "context-menu" && (!H || X && !V),
		handleClose: fe({ blockPointerEvents: !H }),
		mouseOnly: !0,
		move: !1,
		restMs: j.type === void 0 ? _ : void 0,
		delay: { close: v },
		triggerElementRef: k,
		externalTree: L,
		isActiveTrigger: T,
		isClosing: () => C.select("transitionStatus") === "ending"
	}), Se = be(D, C.select("lastOpenChangeReason")), Q = pe(E, {
		enabled: !W && j.type !== "context-menu",
		event: D && H ? "click" : "mousedown",
		toggle: !0,
		ignoreMouse: !1,
		stickIfOpen: j.type === void 0 && Se
	}), $ = me(E, { enabled: !W && X }), Ce = ye({
		open: D,
		enabled: H,
		mouseDownAction: "open"
	}), we = N.useMemo(() => a($.reference, Q.reference), [$.reference, Q.reference]), Te = C.useState("triggerProps", V), { preFocusGuardRef: Ee, handlePreFocusGuardFocus: De, handleFocusTargetFocus: Oe } = ve(C, k), ke = {
		disabled: W,
		open: D
	}, Ae = [
		q,
		t,
		K,
		B,
		k
	], je = [
		we,
		Z ?? i,
		Te,
		{
			"aria-haspopup": "menu",
			"aria-controls": O,
			id: w,
			onMouseDown: (e) => {
				C.select("open") || (J.start(200, () => {
					C.context.allowMouseUpTriggerRef.current = !0;
				}), s(e.currentTarget).addEventListener("mouseup", Y, { once: !0 }));
			}
		},
		H ? { role: "menuitem" } : {},
		Ce,
		x,
		G
	], Me = ee("button", e, {
		enabled: !H,
		stateAttributesMapping: f,
		state: ke,
		ref: Ae,
		props: je
	});
	return H ? /*#__PURE__*/ (0, P.jsx)(_e, {
		tag: "button",
		render: n,
		className: o,
		style: c,
		state: ke,
		refs: Ae,
		props: je,
		stateAttributesMapping: f
	}) : D ? /*#__PURE__*/ (0, P.jsxs)(N.Fragment, { children: [
		/*#__PURE__*/ (0, P.jsx)(u, {
			ref: Ee,
			onFocus: De
		}, `${w}-pre-focus-guard`),
		/*#__PURE__*/ (0, P.jsx)(N.Fragment, { children: Me }, w),
		/*#__PURE__*/ (0, P.jsx)(u, {
			ref: C.context.triggerFocusTargetRef,
			onFocus: Oe
		}, `${w}-post-focus-guard`)
	] }) : /*#__PURE__*/ (0, P.jsx)(N.Fragment, { children: Me }, w);
});
function be(e, t) {
	let n = p(), [r, i] = N.useState(!1);
	return o(() => {
		e && t === "trigger-hover" ? (i(!0), n.start(500, () => {
			i(!1);
		})) : e || (n.clear(), i(!1));
	}, [
		e,
		t,
		n
	]), r;
}
function xe() {
	let e = j(!0), t = A(!0), n = w(!0);
	return N.useMemo(() => n ? {
		type: "menubar",
		context: n
	} : e && !t ? {
		type: "context-menu",
		context: e
	} : { type: void 0 }, [
		e,
		t,
		n
	]);
}
// upstream/registry/bases/base/ui/dropdown-menu.tsx
function L({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(x, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function R({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(_, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function z({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(I, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function B({ align: e = "start", alignOffset: t = 0, side: n = "bottom", sideOffset: r = 4, className: i, ...a }) {
	return /* @__PURE__ */ (0, P.jsx)(_, { children: /* @__PURE__ */ (0, P.jsx)(k, {
		className: "isolate z-50 outline-none",
		align: e,
		alignOffset: t,
		side: n,
		sideOffset: r,
		children: /* @__PURE__ */ (0, P.jsx)(v, {
			"data-slot": "dropdown-menu-content",
			className: c("cn-dropdown-menu-content cn-dropdown-menu-content-logical cn-menu-target cn-menu-translucent z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden", i),
			...a
		})
	}) });
}
function V({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(b, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function H({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ (0, P.jsx)(C, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: c("cn-dropdown-menu-label", e),
		...n
	});
}
function U({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ (0, P.jsx)(T, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: c("cn-dropdown-menu-item group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...r
	});
}
function W({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(E, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function G({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, P.jsxs)(O, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: c("cn-dropdown-menu-sub-trigger flex cursor-default items-center outline-hidden select-none data-popup-open:bg-accent data-popup-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...r,
		children: [n, /* @__PURE__ */ (0, P.jsx)(l, {
			lucide: "ChevronRightIcon",
			tabler: "IconChevronRight",
			hugeicons: "ArrowRight01Icon",
			phosphor: "CaretRightIcon",
			remixicon: "RiArrowRightSLine",
			className: "cn-rtl-flip ml-auto"
		})]
	});
}
function K({ align: e = "start", alignOffset: t = -3, side: n = "right", sideOffset: r = 0, className: i, ...a }) {
	return /* @__PURE__ */ (0, P.jsx)(B, {
		"data-slot": "dropdown-menu-sub-content",
		className: c("cn-dropdown-menu-sub-content cn-menu-target cn-menu-translucent w-auto", i),
		align: e,
		alignOffset: t,
		side: n,
		sideOffset: r,
		...a
	});
}
function q({ className: e, children: t, checked: n, inset: r, ...i }) {
	return /* @__PURE__ */ (0, P.jsxs)(h, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": r,
		className: c("cn-dropdown-menu-checkbox-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		checked: n,
		...i,
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "cn-dropdown-menu-item-indicator pointer-events-none",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			children: /* @__PURE__ */ (0, P.jsx)(y, { children: /* @__PURE__ */ (0, P.jsx)(l, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function J({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(S, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Y({ className: e, children: t, inset: n, ...r }) {
	return /* @__PURE__ */ (0, P.jsxs)(g, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": n,
		className: c("cn-dropdown-menu-radio-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...r,
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "cn-dropdown-menu-item-indicator pointer-events-none",
			"data-slot": "dropdown-menu-radio-item-indicator",
			children: /* @__PURE__ */ (0, P.jsx)(D, { children: /* @__PURE__ */ (0, P.jsx)(l, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function X({ className: e, ...t }) {
	return /* @__PURE__ */ (0, P.jsx)(M, {
		"data-slot": "dropdown-menu-separator",
		className: c("cn-dropdown-menu-separator", e),
		...t
	});
}
function Z({ className: e, ...t }) {
	return /* @__PURE__ */ (0, P.jsx)("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: c("cn-dropdown-menu-shortcut", e),
		...t
	});
}
export { U as a, J as c, Z as d, W as f, z as h, V as i, Y as l, G as m, q as n, H as o, K as p, B as r, R as s, L as t, X as u };
