import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import "./select-CXL1eyy7.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./button-DmMhlFcj.js";
import { a as i, i as a, n as o, o as s, r as c, s as l, t as u } from "./card-Cc7Sw7Ur.js";
import { t as d } from "./input-cHYv8lFd.js";
import { t as f } from "./label-LoHsVeB8.js";
// upstream/components/language-selector.tsx
var p = /* @__PURE__ */ e(t(), 1), m = n(), h = p.createContext(void 0);
function g() {
	return p.useContext(h);
}
function _(e, t = "ar") {
	let n = g(), [r, i] = p.useState(t), a = n?.language ?? r, o = n?.setLanguage ?? i, { dir: s, locale: c, values: l } = e[a];
	return {
		language: a,
		setLanguage: o,
		dir: s,
		locale: c,
		t: l
	};
}
// upstream/examples/base/card-rtl.tsx
var v = {
	en: {
		dir: "ltr",
		values: {
			title: "Login to your account",
			description: "Enter your email below to login to your account",
			signUp: "Sign Up",
			email: "Email",
			emailPlaceholder: "m@example.com",
			password: "Password",
			forgotPassword: "Forgot your password?",
			login: "Login",
			loginWithGoogle: "Login with Google"
		}
	},
	ar: {
		dir: "rtl",
		values: {
			title: "تسجيل الدخول إلى حسابك",
			description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
			signUp: "إنشاء حساب",
			email: "البريد الإلكتروني",
			emailPlaceholder: "m@example.com",
			password: "كلمة المرور",
			forgotPassword: "نسيت كلمة المرور؟",
			login: "تسجيل الدخول",
			loginWithGoogle: "تسجيل الدخول باستخدام Google"
		}
	},
	he: {
		dir: "rtl",
		values: {
			title: "התחבר לחשבון שלך",
			description: "הזן את האימייל שלך למטה כדי להתחבר לחשבון שלך",
			signUp: "הירשם",
			email: "אימייל",
			emailPlaceholder: "m@example.com",
			password: "סיסמה",
			forgotPassword: "שכחת את הסיסמה?",
			login: "התחבר",
			loginWithGoogle: "התחבר עם Google"
		}
	}
};
function y() {
	let { dir: e, t } = _(v, "ar");
	return /* @__PURE__ */ (0, m.jsxs)(u, {
		className: "w-full max-w-sm",
		dir: e,
		children: [
			/* @__PURE__ */ (0, m.jsxs)(s, { children: [
				/* @__PURE__ */ (0, m.jsx)(l, { children: t.title }),
				/* @__PURE__ */ (0, m.jsx)(a, { children: t.description }),
				/* @__PURE__ */ (0, m.jsx)(o, { children: /* @__PURE__ */ (0, m.jsx)(r, {
					variant: "link",
					children: t.signUp
				}) })
			] }),
			/* @__PURE__ */ (0, m.jsx)(c, { children: /* @__PURE__ */ (0, m.jsx)("form", { children: /* @__PURE__ */ (0, m.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, m.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, m.jsx)(f, {
						htmlFor: "email-rtl",
						children: t.email
					}), /* @__PURE__ */ (0, m.jsx)(d, {
						id: "email-rtl",
						type: "email",
						placeholder: t.emailPlaceholder,
						required: !0
					})]
				}), /* @__PURE__ */ (0, m.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, m.jsxs)("div", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, m.jsx)(f, {
							htmlFor: "password-rtl",
							children: t.password
						}), /* @__PURE__ */ (0, m.jsx)("a", {
							href: "#",
							className: "ms-auto inline-block text-sm underline-offset-4 hover:underline",
							children: t.forgotPassword
						})]
					}), /* @__PURE__ */ (0, m.jsx)(d, {
						id: "password-rtl",
						type: "password",
						required: !0
					})]
				})]
			}) }) }),
			/* @__PURE__ */ (0, m.jsxs)(i, {
				className: "flex-col gap-2",
				children: [/* @__PURE__ */ (0, m.jsx)(r, {
					type: "submit",
					className: "w-full",
					children: t.login
				}), /* @__PURE__ */ (0, m.jsx)(r, {
					variant: "outline",
					className: "w-full",
					children: t.loginWithGoogle
				})]
			})
		]
	});
}
export { y as CardRtl };
