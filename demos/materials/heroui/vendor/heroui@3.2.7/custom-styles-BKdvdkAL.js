import { t as e } from "./ShoppingBag-BEmeq7cy.js";
import { t } from "./button-Dd5iSf4T.js";
import { t as n } from "./disclosure-fV06k2fo.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/disclosure/custom-styles.tsx
var o = /* @__PURE__ */ r(i(), 1), s = a();
function c() {
	let [r, i] = (0, o.useState)(!1);
	return /* @__PURE__ */ (0, s.jsx)("div", {
		className: "w-full max-w-sm",
		children: /* @__PURE__ */ (0, s.jsxs)(n, {
			isExpanded: r,
			onExpandedChange: i,
			children: [/* @__PURE__ */ (0, s.jsx)(n.Heading, { children: /* @__PURE__ */ (0, s.jsxs)(t, {
				className: "w-full justify-between rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white px-4 py-3 font-medium text-foreground shadow-sm ring-1 ring-black/5 hover:bg-muted/30 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10",
				slot: "trigger",
				variant: "ghost",
				children: [/* @__PURE__ */ (0, s.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, s.jsx)(e, { className: "size-4 text-muted" }), "Shipping details"]
				}), /* @__PURE__ */ (0, s.jsx)(n.Indicator, { className: "text-muted" })]
			}) }), /* @__PURE__ */ (0, s.jsx)(n.Content, { children: /* @__PURE__ */ (0, s.jsx)(n.Body, {
				className: "mt-2 rounded-xl border border-border/70 bg-surface/50 p-4 text-sm leading-relaxed text-muted dark:bg-neutral-900/50",
				children: "Orders ship within 2 business days. Standard delivery takes 3–5 days; express is available at checkout."
			}) })]
		})
	});
}
export { c as CustomStyles };
