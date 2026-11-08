import { t as e } from "./dist-DCi9UB7o.js";
import { t } from "./button-DmMhlFcj.js";
import { i as n, o as r, r as i, s as a, t as o } from "./card-Cc7Sw7Ur.js";
import { a as s, i as c, r as l, s as u, t as d } from "./field-BJW096_J.js";
import { t as f } from "./input-cHYv8lFd.js";
import { t as p } from "./jsx-runtime-lAxUcZjR.js";
import { t as m } from "./icon-placeholder-BTF3H_W7.js";
// upstream/registry/bases/base/blocks/login-03/components/login-form.tsx
var h = p();
function g({ className: p, ...m }) {
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: e("flex flex-col gap-6", p),
		...m,
		children: [/* @__PURE__ */ (0, h.jsxs)(o, { children: [/* @__PURE__ */ (0, h.jsxs)(r, {
			className: "text-center",
			children: [/* @__PURE__ */ (0, h.jsx)(a, {
				className: "text-xl",
				children: "Welcome back"
			}), /* @__PURE__ */ (0, h.jsx)(n, { children: "Login with your Apple or Google account" })]
		}), /* @__PURE__ */ (0, h.jsx)(i, { children: /* @__PURE__ */ (0, h.jsx)("form", { children: /* @__PURE__ */ (0, h.jsxs)(c, { children: [
			/* @__PURE__ */ (0, h.jsxs)(d, { children: [/* @__PURE__ */ (0, h.jsxs)(t, {
				variant: "outline",
				type: "button",
				children: [/* @__PURE__ */ (0, h.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, h.jsx)("path", {
						d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
						fill: "currentColor"
					})
				}), "Login with Apple"]
			}), /* @__PURE__ */ (0, h.jsxs)(t, {
				variant: "outline",
				type: "button",
				children: [/* @__PURE__ */ (0, h.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, h.jsx)("path", {
						d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
						fill: "currentColor"
					})
				}), "Login with Google"]
			})] }),
			/* @__PURE__ */ (0, h.jsx)(u, {
				className: "*:data-[slot=field-separator-content]:bg-card",
				children: "Or continue with"
			}),
			/* @__PURE__ */ (0, h.jsxs)(d, { children: [/* @__PURE__ */ (0, h.jsx)(s, {
				htmlFor: "email",
				children: "Email"
			}), /* @__PURE__ */ (0, h.jsx)(f, {
				id: "email",
				type: "email",
				placeholder: "m@example.com",
				required: !0
			})] }),
			/* @__PURE__ */ (0, h.jsxs)(d, { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, h.jsx)(s, {
					htmlFor: "password",
					children: "Password"
				}), /* @__PURE__ */ (0, h.jsx)("a", {
					href: "#",
					className: "ml-auto text-sm underline-offset-4 hover:underline",
					children: "Forgot your password?"
				})]
			}), /* @__PURE__ */ (0, h.jsx)(f, {
				id: "password",
				type: "password",
				required: !0
			})] }),
			/* @__PURE__ */ (0, h.jsxs)(d, { children: [/* @__PURE__ */ (0, h.jsx)(t, {
				type: "submit",
				children: "Login"
			}), /* @__PURE__ */ (0, h.jsxs)(l, {
				className: "text-center",
				children: ["Don't have an account? ", /* @__PURE__ */ (0, h.jsx)("a", {
					href: "#",
					children: "Sign up"
				})]
			})] })
		] }) }) })] }), /* @__PURE__ */ (0, h.jsxs)(l, {
			className: "px-6 text-center",
			children: [
				"By clicking continue, you agree to our ",
				/* @__PURE__ */ (0, h.jsx)("a", {
					href: "#",
					children: "Terms of Service"
				}),
				" ",
				"and ",
				/* @__PURE__ */ (0, h.jsx)("a", {
					href: "#",
					children: "Privacy Policy"
				}),
				"."
			]
		})]
	});
}
// upstream/registry/bases/base/blocks/login-03/page.tsx
function _() {
	return /* @__PURE__ */ (0, h.jsx)("div", {
		className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10",
		children: /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: [/* @__PURE__ */ (0, h.jsxs)("a", {
				href: "#",
				className: "flex items-center gap-2 self-center font-medium",
				children: [/* @__PURE__ */ (0, h.jsx)("div", {
					className: "flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, h.jsx)(m, {
						lucide: "GalleryVerticalEndIcon",
						tabler: "IconLayoutRows",
						hugeicons: "LayoutBottomIcon",
						phosphor: "RowsIcon",
						remixicon: "RiGalleryLine",
						className: "size-4"
					})
				}), "Acme Inc."]
			}), /* @__PURE__ */ (0, h.jsx)(g, {})]
		})
	});
}
export { _ as default };
