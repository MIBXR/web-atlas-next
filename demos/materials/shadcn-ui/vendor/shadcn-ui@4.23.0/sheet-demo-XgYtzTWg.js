import { t as e } from "./button-DmMhlFcj.js";
import { t } from "./input-cHYv8lFd.js";
import { t as n } from "./label-LoHsVeB8.js";
import { a as r, c as i, i as a, n as o, o as s, r as c, s as l, t as u } from "./sheet-CmqT5rUx.js";
import { t as d } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/sheet-demo.tsx
var f = d();
function p() {
	return /* @__PURE__ */ (0, f.jsxs)(u, { children: [/* @__PURE__ */ (0, f.jsx)(i, {
		render: /* @__PURE__ */ (0, f.jsx)(e, { variant: "outline" }),
		children: "Open"
	}), /* @__PURE__ */ (0, f.jsxs)(c, { children: [
		/* @__PURE__ */ (0, f.jsxs)(s, { children: [/* @__PURE__ */ (0, f.jsx)(l, { children: "Edit profile" }), /* @__PURE__ */ (0, f.jsx)(a, { children: "Make changes to your profile here. Click save when you're done." })] }),
		/* @__PURE__ */ (0, f.jsxs)("div", {
			className: "grid flex-1 auto-rows-min gap-6 px-4",
			children: [/* @__PURE__ */ (0, f.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, f.jsx)(n, {
					htmlFor: "sheet-demo-name",
					children: "Name"
				}), /* @__PURE__ */ (0, f.jsx)(t, {
					id: "sheet-demo-name",
					defaultValue: "Pedro Duarte"
				})]
			}), /* @__PURE__ */ (0, f.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, f.jsx)(n, {
					htmlFor: "sheet-demo-username",
					children: "Username"
				}), /* @__PURE__ */ (0, f.jsx)(t, {
					id: "sheet-demo-username",
					defaultValue: "@peduarte"
				})]
			})]
		}),
		/* @__PURE__ */ (0, f.jsxs)(r, { children: [/* @__PURE__ */ (0, f.jsx)(e, {
			type: "submit",
			children: "Save changes"
		}), /* @__PURE__ */ (0, f.jsx)(o, {
			render: /* @__PURE__ */ (0, f.jsx)(e, { variant: "outline" }),
			children: "Close"
		})] })
	] })] });
}
export { p as default };
