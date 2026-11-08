import { t as e } from "./description-lMFGrfj6.js";
import { t } from "./label-Wq1WAbJ3.js";
import { n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { t as o } from "./Label-CJNHsoCN.js";
import { i as s, r as c, t as l } from "./RadioGroup-CswDq2f0.js";
import { r as u, t as d } from "./compose-ClIOcrt6.js";
import { t as f } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/radio-group/radio-group.styles.js
var p = n({
	base: "radio-group",
	defaultVariants: { variant: "primary" },
	variants: { variant: {
		primary: "radio-group--primary",
		secondary: "radio-group--secondary"
	} }
}), m = n({ slots: {
	base: "radio",
	content: "radio__content",
	control: "radio__control",
	indicator: "radio__indicator"
} }), h = /* @__PURE__ */ r(i(), 1), g = a(), _ = { elementType: "span" }, v = /*#__PURE__*/ (0, h.createContext)({}), y = ({ children: e, className: t, ...n }) => {
	let r = h.useMemo(() => m(), []);
	return /*#__PURE__*/ (0, g.jsx)(l, {
		"data-slot": "radio",
		...n,
		className: u(t, r.base()),
		children: (t) => /*#__PURE__*/ (0, g.jsx)(v, {
			value: {
				slots: r,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
y.displayName = "HeroUI.Radio";
var b = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(v);
	return /*#__PURE__*/ (0, g.jsx)(s, {
		"data-slot": "radio-content",
		...n,
		className: u(t, r?.content()),
		children: (t) => /*#__PURE__*/ (0, g.jsx)(o, {
			value: _,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
b.displayName = "HeroUI.Radio.Content";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(v);
	return /*#__PURE__*/ (0, g.jsx)(f.span, {
		className: d(r?.control, t),
		"data-slot": "radio-control",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.Radio.Control";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, h.use)(v), a = typeof e == "function" ? e(i ?? {}) : e;
	return /*#__PURE__*/ (0, g.jsx)(f.span, {
		"aria-hidden": "true",
		className: d(r?.indicator, t),
		"data-slot": "radio-indicator",
		...n,
		children: a
	});
};
S.displayName = "HeroUI.Radio.Indicator";
// node_modules/@heroui/react/dist/components/radio/index.js
var C = Object.assign(y, {
	Root: y,
	Content: b,
	Control: x,
	Indicator: S
}), w = ({ children: e, className: t, variant: n, ...r }) => {
	let i = h.useMemo(() => p({ variant: n }), [n]);
	return /*#__PURE__*/ (0, g.jsx)(c, {
		"data-slot": "radio-group",
		...r,
		className: u(t, i),
		children: e
	});
};
w.displayName = "HeroUI.RadioGroup";
// node_modules/@heroui/react/dist/components/radio-group/index.js
var T = Object.assign(w, { Root: w });
// upstream/demos/en/radio-group/basic.tsx
function E() {
	return /* @__PURE__ */ (0, g.jsxs)(T, {
		defaultValue: "premium",
		name: "plan",
		children: [
			/* @__PURE__ */ (0, g.jsx)(t, { children: "Plan selection" }),
			/* @__PURE__ */ (0, g.jsx)(e, { children: "Choose the plan that suits you best" }),
			/* @__PURE__ */ (0, g.jsxs)(C, {
				value: "basic",
				children: [/* @__PURE__ */ (0, g.jsxs)(C.Content, { children: [/* @__PURE__ */ (0, g.jsx)(C.Control, { children: /* @__PURE__ */ (0, g.jsx)(C.Indicator, {}) }), "Basic Plan"] }), /* @__PURE__ */ (0, g.jsx)(e, { children: "Includes 100 messages per month" })]
			}),
			/* @__PURE__ */ (0, g.jsxs)(C, {
				value: "premium",
				children: [/* @__PURE__ */ (0, g.jsxs)(C.Content, { children: [/* @__PURE__ */ (0, g.jsx)(C.Control, { children: /* @__PURE__ */ (0, g.jsx)(C.Indicator, {}) }), "Premium Plan"] }), /* @__PURE__ */ (0, g.jsx)(e, { children: "Includes 200 messages per month" })]
			}),
			/* @__PURE__ */ (0, g.jsxs)(C, {
				value: "business",
				children: [/* @__PURE__ */ (0, g.jsxs)(C.Content, { children: [/* @__PURE__ */ (0, g.jsx)(C.Control, { children: /* @__PURE__ */ (0, g.jsx)(C.Indicator, {}) }), "Business Plan"] }), /* @__PURE__ */ (0, g.jsx)(e, { children: "Unlimited messages" })]
			})
		]
	});
}
export { E as Basic };
