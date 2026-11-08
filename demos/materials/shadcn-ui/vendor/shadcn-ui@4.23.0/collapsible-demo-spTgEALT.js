import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./chevrons-up-down-CvT-sKsR.js";
import { t as r } from "./button-DmMhlFcj.js";
import { n as i, r as a, t as o } from "./collapsible-C-8FK08d.js";
import { t as s } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/collapsible-demo.tsx
var c = /* @__PURE__ */ e(t(), 1), l = s();
function u() {
	let [e, t] = c.useState(!1);
	return /* @__PURE__ */ (0, l.jsxs)(o, {
		open: e,
		onOpenChange: t,
		className: "flex w-[350px] flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, l.jsxs)("div", {
				className: "flex items-center justify-between gap-4 px-4",
				children: [/* @__PURE__ */ (0, l.jsx)("h4", {
					className: "text-sm font-semibold",
					children: "Order #4189"
				}), /* @__PURE__ */ (0, l.jsxs)(a, {
					render: /* @__PURE__ */ (0, l.jsx)(r, {
						variant: "ghost",
						size: "icon",
						className: "size-8"
					}),
					children: [/* @__PURE__ */ (0, l.jsx)(n, {}), /* @__PURE__ */ (0, l.jsx)("span", {
						className: "sr-only",
						children: "Toggle details"
					})]
				})]
			}),
			/* @__PURE__ */ (0, l.jsxs)("div", {
				className: "flex items-center justify-between rounded-md border px-4 py-2 text-sm",
				children: [/* @__PURE__ */ (0, l.jsx)("span", {
					className: "text-muted-foreground",
					children: "Status"
				}), /* @__PURE__ */ (0, l.jsx)("span", {
					className: "font-medium",
					children: "Shipped"
				})]
			}),
			/* @__PURE__ */ (0, l.jsxs)(i, {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, l.jsxs)("div", {
					className: "rounded-md border px-4 py-2 text-sm",
					children: [/* @__PURE__ */ (0, l.jsx)("p", {
						className: "font-medium",
						children: "Shipping address"
					}), /* @__PURE__ */ (0, l.jsx)("p", {
						className: "text-muted-foreground",
						children: "100 Market St, San Francisco"
					})]
				}), /* @__PURE__ */ (0, l.jsxs)("div", {
					className: "rounded-md border px-4 py-2 text-sm",
					children: [/* @__PURE__ */ (0, l.jsx)("p", {
						className: "font-medium",
						children: "Items"
					}), /* @__PURE__ */ (0, l.jsx)("p", {
						className: "text-muted-foreground",
						children: "2x Studio Headphones"
					})]
				})]
			})
		]
	});
}
export { u as default };
