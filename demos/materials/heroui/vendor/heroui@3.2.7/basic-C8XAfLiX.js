import { n as e, r as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { t as a } from "./Label-CJNHsoCN.js";
import { c as o, d as s, l as c, n as l, r as u, s as d, t as f, u as p } from "./utils-UBVJ5JR_.js";
import { n as m } from "./FieldError-BDRHklqb.js";
import { n as h } from "./Form-BfBA0JpQ.js";
import { n as g } from "./Text-CEDDBTEL.js";
import { t as _ } from "./useToggle-LBfAX9Xd.js";
import { t as v } from "./filterDOMProps-CJYy6efO.js";
import { t as y } from "./useToggleState-COCZgzVz.js";
import { n as b, t as x } from "./useHover-DxA7bNQs.js";
import { t as S } from "./VisuallyHidden-CRCgxFfe.js";
import { r as C, t as w } from "./compose-ClIOcrt6.js";
import { t as T } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/switch/switch.styles.js
var E = e({
	defaultVariants: { size: "md" },
	slots: {
		base: "switch",
		content: "switch__content",
		control: "switch__control",
		icon: "switch__icon",
		thumb: "switch__thumb"
	},
	variants: { size: {
		lg: { base: "switch--lg" },
		md: { base: "switch--md" },
		sm: { base: "switch--sm" }
	} }
});
// node_modules/react-aria/dist/private/switch/useSwitch.mjs
function D(e, t, n) {
	let { labelProps: r, inputProps: i, isSelected: a, ...o } = _(e, t, n);
	return {
		labelProps: r,
		inputProps: {
			...i,
			role: "switch",
			checked: a
		},
		isSelected: a,
		...o
	};
}
// node_modules/react-aria-components/dist/private/Switch.mjs
var O = /* @__PURE__ */ n(r(), 1), k = /*#__PURE__*/ (0, O.createContext)(null), A = /*#__PURE__*/ (0, O.createContext)(null), j = /*#__PURE__*/ (0, O.createContext)(null), M = /*#__PURE__*/ (0, O.forwardRef)(function(e, n) {
	let { inputRef: r = null, ...i } = e;
	[e, n] = l(i, n, k);
	let { validationBehavior: a } = c(h) || {}, _ = e.validationBehavior ?? a ?? "native", b = p((0, O.useMemo)(() => t(r, e.inputRef === void 0 ? null : e.inputRef), [r, e.inputRef])), x = y(e), S = D({
		...o(e),
		children: typeof e.children == "function" || e.children,
		validationBehavior: _
	}, x, b), { descriptionProps: C, errorMessageProps: w, isSelected: T, isDisabled: E, isReadOnly: M, isInvalid: N, validationDetails: P, validationErrors: F } = S, I = u({
		...e,
		defaultClassName: "react-aria-SwitchField",
		values: {
			isSelected: T,
			isDisabled: E,
			isReadOnly: M,
			isInvalid: N,
			isRequired: e.isRequired || !1,
			state: x
		}
	}), L = v(e, { global: !0 });
	return delete L.id, delete L.onClick, /*#__PURE__*/ O.createElement(d.div, {
		...s(L, I),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": T || void 0,
		"data-disabled": E || void 0,
		"data-readonly": M || void 0,
		"data-invalid": N || void 0,
		"data-required": e.isRequired || void 0
	}, /*#__PURE__*/ O.createElement(f, { values: [
		[A, x],
		[j, {
			...S,
			inputRef: b,
			defaultClassName: "react-aria-SwitchButton",
			isRequired: e.isRequired
		}],
		[g, { slots: {
			description: C,
			errorMessage: w
		} }],
		[m, {
			isInvalid: N,
			validationDetails: P,
			validationErrors: F
		}]
	] }, I.children));
}), N = /*#__PURE__*/ (0, O.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: r, isSelected: i, isDisabled: a, isReadOnly: o, isPressed: c, isInvalid: l, inputRef: f, defaultClassName: p, isRequired: m } = (0, O.useContext)(j), { isFocused: h, isFocusVisible: g, focusProps: _ } = b(), y = a || o, C = (0, O.useContext)(A), { hoverProps: w, isHovered: T } = x({
		...e,
		isDisabled: y
	}), E = u({
		...e,
		defaultClassName: p,
		values: {
			isSelected: i,
			isPressed: c,
			isHovered: T,
			isFocused: h,
			isFocusVisible: g,
			isDisabled: a,
			isReadOnly: o,
			isInvalid: l,
			isRequired: m || !1,
			state: C
		}
	}), D = v(e, { global: !0 });
	return delete D.id, delete D.onClick, /*#__PURE__*/ O.createElement(d.label, {
		...s(D, n, w, E),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": i || void 0,
		"data-pressed": c || void 0,
		"data-hovered": T || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		"data-disabled": a || void 0,
		"data-readonly": o || void 0,
		"data-invalid": l || void 0,
		"data-required": m || void 0
	}, /*#__PURE__*/ O.createElement(S, { elementType: "span" }, /*#__PURE__*/ O.createElement("input", {
		...s(r, _),
		ref: f
	})), E.children);
}), P = i(), F = { elementType: "span" }, I = /*#__PURE__*/ (0, O.createContext)({}), L = ({ children: e, className: t, size: n, ...r }) => {
	let i = O.useMemo(() => E({ size: n }), [n]);
	return /*#__PURE__*/ (0, P.jsx)(M, {
		"data-slot": "switch",
		...r,
		className: C(t, i.base()),
		children: (t) => /*#__PURE__*/ (0, P.jsx)(I, {
			value: {
				slots: i,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
L.displayName = "HeroUI.Switch";
var R = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, O.use)(I);
	return /*#__PURE__*/ (0, P.jsx)(N, {
		"data-slot": "switch-content",
		...n,
		className: C(t, r?.content()),
		children: (t) => /*#__PURE__*/ (0, P.jsx)(a, {
			value: F,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
R.displayName = "HeroUI.Switch.Content";
var z = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, O.use)(I);
	return /*#__PURE__*/ (0, P.jsx)(T.span, {
		className: w(r?.control, t),
		"data-slot": "switch-control",
		...n,
		children: e
	});
};
z.displayName = "HeroUI.Switch.Control";
var B = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, O.use)(I);
	return /*#__PURE__*/ (0, P.jsx)(T.span, {
		className: w(r?.thumb, t),
		"data-slot": "switch-thumb",
		...n,
		children: e
	});
};
B.displayName = "HeroUI.Switch.Thumb";
var V = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, O.use)(I);
	return /*#__PURE__*/ (0, P.jsx)(T.span, {
		className: w(r?.icon, t),
		"data-slot": "switch-icon",
		...n,
		children: e
	});
};
V.displayName = "HeroUI.Switch.Icon";
// node_modules/@heroui/react/dist/components/switch/index.js
var H = Object.assign(L, {
	Root: L,
	Content: R,
	Control: z,
	Thumb: B,
	Icon: V
});
// upstream/demos/en/switch/basic.tsx
function U() {
	return /* @__PURE__ */ (0, P.jsx)(H, { children: /* @__PURE__ */ (0, P.jsxs)(H.Content, { children: [/* @__PURE__ */ (0, P.jsx)(H.Control, { children: /* @__PURE__ */ (0, P.jsx)(H.Thumb, {}) }), "Enable notifications"] }) });
}
export { U as Basic };
