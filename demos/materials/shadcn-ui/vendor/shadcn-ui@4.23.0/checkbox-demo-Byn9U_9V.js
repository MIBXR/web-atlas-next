import { t as e } from "./checkbox-BZCfKcOg.js";
import { a as t, i as n, l as r, n as i, r as a, t as o } from "./field-BJW096_J.js";
import { t as s } from "./label-LoHsVeB8.js";
import { t as c } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/checkbox-demo.tsx
var l = c();
function u() {
	return /* @__PURE__ */ (0, l.jsxs)(n, {
		className: "max-w-sm",
		children: [
			/* @__PURE__ */ (0, l.jsxs)(o, {
				orientation: "horizontal",
				children: [/* @__PURE__ */ (0, l.jsx)(e, {
					id: "terms-checkbox",
					name: "terms-checkbox"
				}), /* @__PURE__ */ (0, l.jsx)(s, {
					htmlFor: "terms-checkbox",
					children: "Accept terms and conditions"
				})]
			}),
			/* @__PURE__ */ (0, l.jsxs)(o, {
				orientation: "horizontal",
				children: [/* @__PURE__ */ (0, l.jsx)(e, {
					id: "terms-checkbox-2",
					name: "terms-checkbox-2",
					defaultChecked: !0
				}), /* @__PURE__ */ (0, l.jsxs)(i, { children: [/* @__PURE__ */ (0, l.jsx)(t, {
					htmlFor: "terms-checkbox-2",
					children: "Accept terms and conditions"
				}), /* @__PURE__ */ (0, l.jsx)(a, { children: "By clicking this checkbox, you agree to the terms." })] })]
			}),
			/* @__PURE__ */ (0, l.jsxs)(o, {
				orientation: "horizontal",
				"data-disabled": !0,
				children: [/* @__PURE__ */ (0, l.jsx)(e, {
					id: "toggle-checkbox",
					name: "toggle-checkbox",
					disabled: !0
				}), /* @__PURE__ */ (0, l.jsx)(t, {
					htmlFor: "toggle-checkbox",
					children: "Enable notifications"
				})]
			}),
			/* @__PURE__ */ (0, l.jsx)(t, { children: /* @__PURE__ */ (0, l.jsxs)(o, {
				orientation: "horizontal",
				children: [/* @__PURE__ */ (0, l.jsx)(e, {
					id: "toggle-checkbox-2",
					name: "toggle-checkbox-2"
				}), /* @__PURE__ */ (0, l.jsxs)(i, { children: [/* @__PURE__ */ (0, l.jsx)(r, { children: "Enable notifications" }), /* @__PURE__ */ (0, l.jsx)(a, { children: "You can enable or disable notifications at any time." })] })]
			}) })
		]
	});
}
export { u as default };
