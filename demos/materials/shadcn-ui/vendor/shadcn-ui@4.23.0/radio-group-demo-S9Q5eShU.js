import { t as e } from "./label-LoHsVeB8.js";
import { n as t, t as n } from "./radio-group-DTy40Oje.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/radio-group-demo.tsx
var i = r();
function a() {
	return /* @__PURE__ */ (0, i.jsxs)(n, {
		defaultValue: "comfortable",
		className: "w-fit",
		children: [
			/* @__PURE__ */ (0, i.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, i.jsx)(t, {
					value: "default",
					id: "r1"
				}), /* @__PURE__ */ (0, i.jsx)(e, {
					htmlFor: "r1",
					children: "Default"
				})]
			}),
			/* @__PURE__ */ (0, i.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, i.jsx)(t, {
					value: "comfortable",
					id: "r2"
				}), /* @__PURE__ */ (0, i.jsx)(e, {
					htmlFor: "r2",
					children: "Comfortable"
				})]
			}),
			/* @__PURE__ */ (0, i.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, i.jsx)(t, {
					value: "compact",
					id: "r3"
				}), /* @__PURE__ */ (0, i.jsx)(e, {
					htmlFor: "r3",
					children: "Compact"
				})]
			})
		]
	});
}
export { a as RadioGroupDemo };
