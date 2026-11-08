import { t as e } from "./button-DmMhlFcj.js";
import { a as t, c as n, i as r, n as i, o as a, r as o, s, t as c } from "./dialog-BRpXEAQr.js";
import { i as l, t as u } from "./field-BJW096_J.js";
import { t as d } from "./input-cHYv8lFd.js";
import { t as f } from "./label-LoHsVeB8.js";
import { t as p } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/dialog-demo.tsx
var m = p();
function h() {
	return /* @__PURE__ */ (0, m.jsx)(c, { children: /* @__PURE__ */ (0, m.jsxs)("form", { children: [/* @__PURE__ */ (0, m.jsx)(n, {
		render: /* @__PURE__ */ (0, m.jsx)(e, { variant: "outline" }),
		children: "Open Dialog"
	}), /* @__PURE__ */ (0, m.jsxs)(o, {
		className: "sm:max-w-sm",
		children: [
			/* @__PURE__ */ (0, m.jsxs)(a, { children: [/* @__PURE__ */ (0, m.jsx)(s, { children: "Edit profile" }), /* @__PURE__ */ (0, m.jsx)(r, { children: "Make changes to your profile here. Click save when you're done." })] }),
			/* @__PURE__ */ (0, m.jsxs)(l, { children: [/* @__PURE__ */ (0, m.jsxs)(u, { children: [/* @__PURE__ */ (0, m.jsx)(f, {
				htmlFor: "name-1",
				children: "Name"
			}), /* @__PURE__ */ (0, m.jsx)(d, {
				id: "name-1",
				name: "name",
				defaultValue: "Pedro Duarte"
			})] }), /* @__PURE__ */ (0, m.jsxs)(u, { children: [/* @__PURE__ */ (0, m.jsx)(f, {
				htmlFor: "username-1",
				children: "Username"
			}), /* @__PURE__ */ (0, m.jsx)(d, {
				id: "username-1",
				name: "username",
				defaultValue: "@peduarte"
			})] })] }),
			/* @__PURE__ */ (0, m.jsxs)(t, { children: [/* @__PURE__ */ (0, m.jsx)(i, {
				render: /* @__PURE__ */ (0, m.jsx)(e, { variant: "outline" }),
				children: "Cancel"
			}), /* @__PURE__ */ (0, m.jsx)(e, {
				type: "submit",
				children: "Save changes"
			})] })
		]
	})] }) });
}
export { h as DialogDemo };
