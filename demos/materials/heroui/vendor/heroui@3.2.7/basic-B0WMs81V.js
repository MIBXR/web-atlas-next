import { t as e } from "./label-Wq1WAbJ3.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { n as a, t as o } from "./Button-Cnex0dS4.js";
import { n as s, t as c } from "./Group-VeeQ5avm.js";
import { n as l, t as u } from "./Input-DWAXtMrJ.js";
import { c as d, i as f, l as p, n as m, r as h, s as g, t as _ } from "./utils-UBVJ5JR_.js";
import { n as v } from "./FieldError-BDRHklqb.js";
import { n as y } from "./Form-BfBA0JpQ.js";
import { t as b } from "./Label-CJNHsoCN.js";
import { n as x } from "./Text-CEDDBTEL.js";
import { n as S, t as C } from "./useNumberFieldState-CItsPCOI.js";
import { t as w } from "./filterDOMProps-CJYy6efO.js";
import { t as T } from "./I18nProvider-zGzu-4zN.js";
import { r as E } from "./compose-ClIOcrt6.js";
import { l as D, u as O } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/number-field/number-field.styles.js
var k = t({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "number-field",
		decrementButton: "number-field__decrement-button",
		group: "number-field__group",
		incrementButton: "number-field__increment-button",
		input: "number-field__input"
	},
	variants: {
		fullWidth: {
			false: {},
			true: {
				base: "number-field--full-width",
				group: "number-field__group--full-width"
			}
		},
		variant: {
			primary: { base: "number-field--primary" },
			secondary: { base: "number-field--secondary" }
		}
	}
}), A = /* @__PURE__ */ n(r(), 1), j = /*#__PURE__*/ (0, A.createContext)(null), M = /*#__PURE__*/ (0, A.createContext)(null), N = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	[e, t] = m(e, t, j);
	let { validationBehavior: n } = p(y) || {}, r = e.validationBehavior ?? n ?? "native", { locale: i } = T(), a = C({
		...e,
		locale: i,
		validationBehavior: r
	}), c = (0, A.useRef)(null), [l, E] = f(!e["aria-label"] && !e["aria-labelledby"]), { labelProps: D, groupProps: O, inputProps: k, incrementButtonProps: N, decrementButtonProps: P, descriptionProps: F, errorMessageProps: I, ...L } = S({
		...d(e),
		label: E,
		validationBehavior: r
	}, a, c), R = h({
		...e,
		values: {
			state: a,
			isDisabled: e.isDisabled || !1,
			isInvalid: L.isInvalid || !1,
			isRequired: e.isRequired || !1,
			isReadOnly: e.isReadOnly || !1
		},
		defaultClassName: "react-aria-NumberField"
	}), z = w(e, { global: !0 });
	return delete z.id, /*#__PURE__*/ A.createElement(_, { values: [
		[M, a],
		[s, O],
		[u, {
			...k,
			ref: c
		}],
		[b, {
			...D,
			ref: l
		}],
		[o, { slots: {
			increment: N,
			decrement: P
		} }],
		[x, { slots: {
			description: F,
			errorMessage: I
		} }],
		[v, L]
	] }, /*#__PURE__*/ A.createElement(g.div, {
		...z,
		...R,
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": L.isInvalid || void 0
	}), e.name && /*#__PURE__*/ A.createElement("input", {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: isNaN(a.numberValue) ? "" : a.numberValue,
		disabled: e.isDisabled || void 0
	}));
}), P = i(), F = /*#__PURE__*/ (0, A.createContext)({}), I = ({ children: e, className: t, fullWidth: n, variant: r, ...i }) => {
	let a = A.useMemo(() => k({
		fullWidth: n,
		variant: r
	}), [n, r]), o = A.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, P.jsx)(F, {
		value: o,
		children: /*#__PURE__*/ (0, P.jsx)(N, {
			"data-slot": "number-field",
			...i,
			className: E(t, a?.base()),
			children: e
		})
	});
};
I.displayName = "HeroUI.NumberField";
var L = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, A.use)(F);
	return /*#__PURE__*/ (0, P.jsx)(c, {
		className: E(t, r?.group()),
		"data-slot": "number-field-group",
		...n,
		children: e
	});
};
L.displayName = "HeroUI.NumberField.Group";
var R = ({ className: e, ...t }) => {
	let { slots: n } = (0, A.use)(F);
	return /*#__PURE__*/ (0, P.jsx)(l, {
		className: E(e, n?.input()),
		"data-slot": "number-field-input",
		...t
	});
};
R.displayName = "HeroUI.NumberField.Input";
var z = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, A.use)(F);
	return /*#__PURE__*/ (0, P.jsx)(a, {
		className: E(t, r?.incrementButton()),
		"data-slot": "number-field-increment-button",
		slot: "increment",
		...n,
		children: e && /*#__PURE__*/ A.isValidElement(e) ? e : /*#__PURE__*/ (0, P.jsx)(O, { "data-slot": "number-field-increment-button-icon" })
	});
};
z.displayName = "HeroUI.NumberField.IncrementButton";
var B = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, A.use)(F);
	return /*#__PURE__*/ (0, P.jsx)(a, {
		className: E(t, r?.decrementButton()),
		"data-slot": "number-field-decrement-button",
		slot: "decrement",
		...n,
		children: e && /*#__PURE__*/ A.isValidElement(e) ? e : /*#__PURE__*/ (0, P.jsx)(D, { "data-slot": "number-field-decrement-button-icon" })
	});
};
B.displayName = "HeroUI.NumberField.DecrementButton";
// node_modules/@heroui/react/dist/components/number-field/index.js
var V = Object.assign(I, {
	Root: I,
	Group: L,
	Input: R,
	IncrementButton: z,
	DecrementButton: B
});
// upstream/demos/en/number-field/basic.tsx
function H() {
	return /* @__PURE__ */ (0, P.jsxs)(V, {
		className: "w-full max-w-64",
		defaultValue: 1024,
		minValue: 0,
		name: "width",
		children: [/* @__PURE__ */ (0, P.jsx)(e, { children: "Width" }), /* @__PURE__ */ (0, P.jsxs)(V.Group, { children: [
			/* @__PURE__ */ (0, P.jsx)(V.DecrementButton, {}),
			/* @__PURE__ */ (0, P.jsx)(V.Input, { className: "w-[120px]" }),
			/* @__PURE__ */ (0, P.jsx)(V.IncrementButton, {})
		] })]
	});
}
export { H as Basic };
