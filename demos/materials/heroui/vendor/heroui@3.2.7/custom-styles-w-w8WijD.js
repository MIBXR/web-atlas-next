import { t as e } from "./button-Dd5iSf4T.js";
import { t } from "./disclosure-fV06k2fo.js";
import { n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o } from "./Disclosure-C7qrn_Ga.js";
import { r as s } from "./compose-ClIOcrt6.js";
import { t as c } from "./separator-BSPhQk7w.js";
// node_modules/@heroui/styles/dist/components/disclosure-group/disclosure-group.styles.js
var l = n({
	defaultVariants: {},
	slots: { base: "disclosure-group" },
	variants: {}
}), u = /* @__PURE__ */ r(i(), 1), d = a(), f = /*#__PURE__*/ (0, u.createContext)({}), p = ({ children: e, className: t, ...n }) => {
	let r = u.useMemo(() => l({}), []), i = u.useMemo(() => ({ slots: r }), [r]);
	return /*#__PURE__*/ (0, d.jsx)(f, {
		value: i,
		children: /*#__PURE__*/ (0, d.jsx)(o, {
			"data-slot": "disclosure-group",
			...n,
			className: s(t, r.base()),
			children: e
		})
	});
};
p.displayName = "HeroUI.DisclosureGroup";
// node_modules/@heroui/react/dist/components/disclosure-group/index.js
var m = Object.assign(p, { Root: p });
// upstream/demos/en/disclosure-group/custom-styles.tsx
function h() {
	return /* @__PURE__ */ (0, d.jsxs)(m, {
		className: "w-full max-w-sm rounded-xl bg-default-soft p-2",
		children: [
			/* @__PURE__ */ (0, d.jsxs)(t, {
				id: "billing",
				children: [/* @__PURE__ */ (0, d.jsx)(t.Heading, { children: /* @__PURE__ */ (0, d.jsxs)(e, {
					className: "w-full justify-between",
					slot: "trigger",
					variant: "ghost",
					children: ["Billing", /* @__PURE__ */ (0, d.jsx)(t.Indicator, { className: "text-muted" })]
				}) }), /* @__PURE__ */ (0, d.jsx)(t.Content, { children: /* @__PURE__ */ (0, d.jsx)(t.Body, {
					className: "text-sm text-muted",
					children: "Invoices are issued on the first of each month."
				}) })]
			}),
			/* @__PURE__ */ (0, d.jsx)(c, { className: "my-1" }),
			/* @__PURE__ */ (0, d.jsxs)(t, {
				id: "support",
				children: [/* @__PURE__ */ (0, d.jsx)(t.Heading, { children: /* @__PURE__ */ (0, d.jsxs)(e, {
					className: "w-full justify-between",
					slot: "trigger",
					variant: "ghost",
					children: ["Support", /* @__PURE__ */ (0, d.jsx)(t.Indicator, { className: "text-muted" })]
				}) }), /* @__PURE__ */ (0, d.jsx)(t.Content, { children: /* @__PURE__ */ (0, d.jsx)(t.Body, {
					className: "text-sm text-muted",
					children: "Reach us at help@heroui.com. Typical response time is under one business day."
				}) })]
			})
		]
	});
}
export { h as CustomStyles };
