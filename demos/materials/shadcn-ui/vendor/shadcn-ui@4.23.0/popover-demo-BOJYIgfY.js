import { t as e } from "./button-DmMhlFcj.js";
import { t } from "./input-cHYv8lFd.js";
import { t as n } from "./label-LoHsVeB8.js";
import { n as r, r as i, t as a } from "./popover-BMKcnHZL.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/popover-demo.tsx
var s = o();
function c() {
	return /* @__PURE__ */ (0, s.jsxs)(a, { children: [/* @__PURE__ */ (0, s.jsx)(i, {
		render: /* @__PURE__ */ (0, s.jsx)(e, { variant: "outline" }),
		children: "Open popover"
	}), /* @__PURE__ */ (0, s.jsx)(r, {
		className: "w-80",
		children: /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "grid gap-4",
			children: [/* @__PURE__ */ (0, s.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, s.jsx)("h4", {
					className: "leading-none font-medium",
					children: "Dimensions"
				}), /* @__PURE__ */ (0, s.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Set the dimensions for the layer."
				})]
			}), /* @__PURE__ */ (0, s.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, s.jsxs)("div", {
						className: "grid grid-cols-3 items-center gap-4",
						children: [/* @__PURE__ */ (0, s.jsx)(n, {
							htmlFor: "width",
							children: "Width"
						}), /* @__PURE__ */ (0, s.jsx)(t, {
							id: "width",
							defaultValue: "100%",
							className: "col-span-2 h-8"
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						className: "grid grid-cols-3 items-center gap-4",
						children: [/* @__PURE__ */ (0, s.jsx)(n, {
							htmlFor: "maxWidth",
							children: "Max. width"
						}), /* @__PURE__ */ (0, s.jsx)(t, {
							id: "maxWidth",
							defaultValue: "300px",
							className: "col-span-2 h-8"
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						className: "grid grid-cols-3 items-center gap-4",
						children: [/* @__PURE__ */ (0, s.jsx)(n, {
							htmlFor: "height",
							children: "Height"
						}), /* @__PURE__ */ (0, s.jsx)(t, {
							id: "height",
							defaultValue: "25px",
							className: "col-span-2 h-8"
						})]
					}),
					/* @__PURE__ */ (0, s.jsxs)("div", {
						className: "grid grid-cols-3 items-center gap-4",
						children: [/* @__PURE__ */ (0, s.jsx)(n, {
							htmlFor: "maxHeight",
							children: "Max. height"
						}), /* @__PURE__ */ (0, s.jsx)(t, {
							id: "maxHeight",
							defaultValue: "none",
							className: "col-span-2 h-8"
						})]
					})
				]
			})]
		})
	})] });
}
export { c as default };
