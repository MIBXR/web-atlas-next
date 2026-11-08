import { t as e } from "./button-DmMhlFcj.js";
import { a as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./card-Cc7Sw7Ur.js";
import { t as c } from "./input-cHYv8lFd.js";
import { t as l } from "./label-LoHsVeB8.js";
import { t as u } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/card-demo.tsx
var d = u();
function f() {
	return /* @__PURE__ */ (0, d.jsxs)(s, {
		className: "w-full max-w-sm",
		children: [
			/* @__PURE__ */ (0, d.jsxs)(i, { children: [
				/* @__PURE__ */ (0, d.jsx)(o, { children: "Login to your account" }),
				/* @__PURE__ */ (0, d.jsx)(n, { children: "Enter your email below to login to your account" }),
				/* @__PURE__ */ (0, d.jsx)(r, { children: /* @__PURE__ */ (0, d.jsx)(e, {
					variant: "link",
					children: "Sign Up"
				}) })
			] }),
			/* @__PURE__ */ (0, d.jsx)(a, { children: /* @__PURE__ */ (0, d.jsx)("form", { children: /* @__PURE__ */ (0, d.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, d.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, d.jsx)(l, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, d.jsx)(c, {
						id: "email",
						type: "email",
						placeholder: "m@example.com",
						required: !0
					})]
				}), /* @__PURE__ */ (0, d.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, d.jsxs)("div", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, d.jsx)(l, {
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, d.jsx)("a", {
							href: "#",
							className: "ml-auto inline-block text-sm underline-offset-4 hover:underline",
							children: "Forgot your password?"
						})]
					}), /* @__PURE__ */ (0, d.jsx)(c, {
						id: "password",
						type: "password",
						required: !0
					})]
				})]
			}) }) }),
			/* @__PURE__ */ (0, d.jsxs)(t, {
				className: "flex-col gap-2",
				children: [/* @__PURE__ */ (0, d.jsx)(e, {
					type: "submit",
					className: "w-full",
					children: "Login"
				}), /* @__PURE__ */ (0, d.jsx)(e, {
					variant: "outline",
					className: "w-full",
					children: "Login with Google"
				})]
			})
		]
	});
}
export { f as default };
