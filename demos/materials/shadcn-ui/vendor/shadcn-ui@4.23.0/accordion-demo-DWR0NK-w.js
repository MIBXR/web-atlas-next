import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./icon-placeholder-BTF3H_W7.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { i, l as a, t as o, u as s } from "./useRenderElement-Bc91YjHo.js";
import { t as c } from "./react-D9cguz4v.js";
import { t as l } from "./useControlled-BkmszdIY.js";
import { t as u } from "./useStableCallback-BmDujACN.js";
import { t as d } from "./CompositeList-Br8uoKbd.js";
import { t as f } from "./DirectionContext-CBHZ_yWZ.js";
import { a as p, i as m, n as h, o as g, r as _, t as v } from "./useCollapsiblePanel-Fb6B62Yb.js";
import { a as y } from "./useOpenChangeComplete-BfJk_bnM.js";
import { t as b } from "./useBaseUiId-BwhhMxTY.js";
import { n as x } from "./useCompositeListItem-BEyYtHBh.js";
import { t as S } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as C } from "./useButton-CMNj7XNN.js";
// node_modules/@base-ui/react/accordion/root/AccordionRootContext.mjs
var w = /* @__PURE__ */ e(c(), 1), T = /*#__PURE__*/ w.createContext(void 0);
function E() {
	let e = w.useContext(T);
	if (e === void 0) throw Error(s(10));
	return e;
}
// node_modules/@base-ui/react/accordion/root/AccordionRoot.mjs
var D = r(), O = { value: () => null }, k = /*#__PURE__*/ w.forwardRef(function(e, t) {
	let { render: n, className: r, disabled: i = !1, hiddenUntilFound: a, keepMounted: s, loopFocus: c, onValueChange: p, multiple: m = !1, orientation: h = "vertical", value: g, defaultValue: _, style: v, ...y } = e, b = f(), x = w.useMemo(() => {
		if (g === void 0) return _ ?? [];
	}, [g, _]), S = w.useRef([]), [C, E] = l({
		controlled: g,
		default: x,
		name: "Accordion",
		state: "value"
	}), k = u((e, t, n) => {
		if (!m) {
			let t = C[0] === e ? [] : [e];
			if (p?.(t, n), n.isCanceled) return;
			E(t);
		} else if (t) {
			let t = C.slice();
			if (t.push(e), p?.(t, n), n.isCanceled) return;
			E(t);
		} else {
			let t = C.filter((t) => t !== e);
			if (p?.(t, n), n.isCanceled) return;
			E(t);
		}
	}), A = w.useMemo(() => ({
		value: C,
		disabled: i,
		orientation: h
	}), [
		C,
		i,
		h
	]), j = w.useMemo(() => ({
		disabled: i,
		handleValueChange: k,
		hiddenUntilFound: a ?? !1,
		keepMounted: s ?? !1,
		state: A,
		value: C
	}), [
		i,
		k,
		a,
		s,
		A,
		C
	]), M = o("div", e, {
		state: A,
		ref: t,
		props: [{ dir: b }, y],
		stateAttributesMapping: O
	});
	return /*#__PURE__*/ (0, D.jsx)(T.Provider, {
		value: j,
		children: /*#__PURE__*/ (0, D.jsx)(d, {
			elementsRef: S,
			children: M
		})
	});
}), A = /*#__PURE__*/ w.createContext(void 0);
function j() {
	let e = w.useContext(A);
	if (e === void 0) throw Error(s(9));
	return e;
}
// node_modules/@base-ui/react/accordion/item/AccordionItemDataAttributes.mjs
var M = /*#__PURE__*/ function(e) {
	return e.index = "data-index", e.disabled = "data-disabled", e.open = "data-open", e;
}({}), N = {
	...h,
	index: (e) => Number.isInteger(e) ? { [M.index]: String(e) } : null,
	...y,
	value: () => null
}, P = /*#__PURE__*/ w.forwardRef(function(e, t) {
	let { className: n, disabled: r = !1, onOpenChange: i, render: s, value: c, style: l, ...d } = e, { ref: f, index: p } = x(), h = a(t, f), { disabled: _, handleValueChange: v, state: y, value: S } = E(), C = b(), T = c ?? C, O = r || _, k = w.useMemo(() => {
		if (!S) return !1;
		for (let e = 0; e < S.length; e += 1) if (S[e] === T) return !0;
		return !1;
	}, [S, T]), j = u((e, t) => {
		i?.(e, t), t.isCanceled || v(T, e, t);
	}), M = g({
		open: k,
		onOpenChange: j,
		disabled: O
	}), P = w.useMemo(() => ({
		open: M.open,
		disabled: M.disabled,
		transitionStatus: M.transitionStatus
	}), [
		M.open,
		M.disabled,
		M.transitionStatus
	]), F = w.useMemo(() => ({
		...M,
		onOpenChange: j,
		state: P
	}), [
		M,
		P,
		j
	]), I = w.useMemo(() => ({
		...y,
		hidden: !k && !M.mounted,
		index: p,
		disabled: O,
		open: k
	}), [
		M.mounted,
		O,
		p,
		k,
		y
	]), L = b(), [R, z] = w.useState(), B = w.useMemo(() => ({
		open: k,
		state: I,
		setTriggerId: z,
		triggerId: R ?? L
	}), [
		L,
		k,
		I,
		z,
		R
	]), V = o("div", e, {
		state: I,
		ref: h,
		props: d,
		stateAttributesMapping: N
	});
	return /*#__PURE__*/ (0, D.jsx)(m.Provider, {
		value: F,
		children: /*#__PURE__*/ (0, D.jsx)(A.Provider, {
			value: B,
			children: V
		})
	});
}), F = /*#__PURE__*/ w.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, { state: s } = j();
	return o("h3", e, {
		state: s,
		ref: t,
		props: a,
		stateAttributesMapping: N
	});
}), I = /*#__PURE__*/ w.forwardRef(function(e, t) {
	let { disabled: n, className: r, id: i, render: a, nativeButton: s = !0, style: c, ...l } = e, { panelId: u, open: d, handleTrigger: f, disabled: m } = p(), { getButtonProps: h, buttonRef: g } = C({
		disabled: n || m,
		focusableWhenDisabled: !0,
		native: s
	}), { state: v, setTriggerId: y, triggerId: b } = j();
	return S(() => (i && y(i), () => {
		y(void 0);
	}), [i, y]), o("button", e, {
		state: v,
		ref: [t, g],
		props: [
			{
				"aria-controls": d ? u : void 0,
				"aria-expanded": d,
				id: b,
				onClick: f
			},
			l,
			h
		],
		stateAttributesMapping: _
	});
}), L = /*#__PURE__*/ function(e) {
	return e.accordionPanelHeight = "--accordion-panel-height", e.accordionPanelWidth = "--accordion-panel-width", e;
}({}), R = /*#__PURE__*/ w.forwardRef(function(e, t) {
	let { className: n, hiddenUntilFound: r, keepMounted: a, id: s, render: c, style: l, ...u } = e, { hiddenUntilFound: d, keepMounted: f } = E(), { mounted: m, onOpenChange: h, open: g, panelId: _, setMounted: y, setOpen: b, setPanelIdState: x, transitionStatus: C } = p(), w = r ?? d, T = a ?? f;
	S(() => {
		if (s) return x(s), () => {
			x(void 0);
		};
	}, [s, x]);
	let { height: D, props: O, ref: k, shouldPreventOpenAnimation: A, shouldRender: M, transitionStatus: P, width: F } = v({
		externalRef: t,
		hiddenUntilFound: w,
		id: s ?? _,
		keepMounted: T,
		mounted: m,
		onOpenChange: h,
		open: g,
		setMounted: y,
		setOpen: b,
		transitionStatus: C
	}), { state: I, triggerId: R } = j(), z = {
		...I,
		transitionStatus: P
	}, B = i(l, z), V = o("div", {
		...e,
		style: void 0
	}, {
		state: z,
		ref: k,
		props: [
			O,
			{
				"aria-labelledby": R,
				role: "region",
				style: {
					[L.accordionPanelHeight]: D === void 0 ? "auto" : `${D}px`,
					[L.accordionPanelWidth]: F === void 0 ? "auto" : `${F}px`
				}
			},
			u,
			B ? { style: B } : void 0,
			A ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: N
	});
	return M ? V : null;
});
// upstream/registry/bases/base/ui/accordion.tsx
function z({ className: e, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(k, {
		"data-slot": "accordion",
		className: t("cn-accordion flex w-full flex-col", e),
		...n
	});
}
function B({ className: e, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(P, {
		"data-slot": "accordion-item",
		className: t("cn-accordion-item", e),
		...n
	});
}
function V({ className: e, children: r, ...i }) {
	return /* @__PURE__ */ (0, D.jsx)(F, {
		className: "flex",
		children: /* @__PURE__ */ (0, D.jsxs)(I, {
			"data-slot": "accordion-trigger",
			className: t("cn-accordion-trigger group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50", e),
			...i,
			children: [
				r,
				/* @__PURE__ */ (0, D.jsx)(n, {
					lucide: "ChevronDownIcon",
					tabler: "IconChevronDown",
					"data-slot": "accordion-trigger-icon",
					hugeicons: "ArrowDown01Icon",
					phosphor: "CaretDownIcon",
					remixicon: "RiArrowDownSLine",
					className: "cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ (0, D.jsx)(n, {
					lucide: "ChevronUpIcon",
					tabler: "IconChevronUp",
					"data-slot": "accordion-trigger-icon",
					hugeicons: "ArrowUp01Icon",
					phosphor: "CaretUpIcon",
					remixicon: "RiArrowUpSLine",
					className: "cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function H({ className: e, children: n, ...r }) {
	return /* @__PURE__ */ (0, D.jsx)(R, {
		"data-slot": "accordion-content",
		className: "cn-accordion-content overflow-hidden",
		...r,
		children: /* @__PURE__ */ (0, D.jsx)("div", {
			className: t("cn-accordion-content-inner h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", e),
			children: n
		})
	});
}
// upstream/examples/base/accordion-demo.tsx
function U() {
	return /* @__PURE__ */ (0, D.jsxs)(z, {
		defaultValue: ["shipping"],
		className: "max-w-lg",
		children: [
			/* @__PURE__ */ (0, D.jsxs)(B, {
				value: "shipping",
				children: [/* @__PURE__ */ (0, D.jsx)(V, { children: "What are your shipping options?" }), /* @__PURE__ */ (0, D.jsx)(H, { children: "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders." })]
			}),
			/* @__PURE__ */ (0, D.jsxs)(B, {
				value: "returns",
				children: [/* @__PURE__ */ (0, D.jsx)(V, { children: "What is your return policy?" }), /* @__PURE__ */ (0, D.jsx)(H, { children: "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days." })]
			}),
			/* @__PURE__ */ (0, D.jsxs)(B, {
				value: "support",
				children: [/* @__PURE__ */ (0, D.jsx)(V, { children: "How can I contact customer support?" }), /* @__PURE__ */ (0, D.jsx)(H, { children: "Reach us via email, live chat, or phone. We respond within 24 hours during business days." })]
			})
		]
	});
}
export { U as default };
