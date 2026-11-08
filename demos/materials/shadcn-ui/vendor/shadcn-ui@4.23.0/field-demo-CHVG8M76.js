import { t as e } from "./button-DmMhlFcj.js";
import { t } from "./checkbox-BZCfKcOg.js";
import { a as n, c as r, i, o as a, r as o, s, t as c } from "./field-BJW096_J.js";
import { t as l } from "./input-cHYv8lFd.js";
import { i as u, n as d, o as f, r as p, s as m, t as h } from "./select-CXL1eyy7.js";
import { t as g } from "./textarea-JYJtHFCK.js";
import { t as _ } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/field-demo.tsx
var v = _(), y = [
	{
		label: "MM",
		value: null
	},
	{
		label: "01",
		value: "01"
	},
	{
		label: "02",
		value: "02"
	},
	{
		label: "03",
		value: "03"
	},
	{
		label: "04",
		value: "04"
	},
	{
		label: "05",
		value: "05"
	},
	{
		label: "06",
		value: "06"
	},
	{
		label: "07",
		value: "07"
	},
	{
		label: "08",
		value: "08"
	},
	{
		label: "09",
		value: "09"
	},
	{
		label: "10",
		value: "10"
	},
	{
		label: "11",
		value: "11"
	},
	{
		label: "12",
		value: "12"
	}
], b = [
	{
		label: "YYYY",
		value: null
	},
	{
		label: "2024",
		value: "2024"
	},
	{
		label: "2025",
		value: "2025"
	},
	{
		label: "2026",
		value: "2026"
	},
	{
		label: "2027",
		value: "2027"
	},
	{
		label: "2028",
		value: "2028"
	},
	{
		label: "2029",
		value: "2029"
	}
];
function x() {
	return /* @__PURE__ */ (0, v.jsx)("div", {
		className: "w-full max-w-md",
		children: /* @__PURE__ */ (0, v.jsx)("form", { children: /* @__PURE__ */ (0, v.jsxs)(i, { children: [
			/* @__PURE__ */ (0, v.jsxs)(r, { children: [
				/* @__PURE__ */ (0, v.jsx)(a, { children: "Payment Method" }),
				/* @__PURE__ */ (0, v.jsx)(o, { children: "All transactions are secure and encrypted" }),
				/* @__PURE__ */ (0, v.jsxs)(i, { children: [
					/* @__PURE__ */ (0, v.jsxs)(c, { children: [/* @__PURE__ */ (0, v.jsx)(n, {
						htmlFor: "checkout-7j9-card-name-43j",
						children: "Name on Card"
					}), /* @__PURE__ */ (0, v.jsx)(l, {
						id: "checkout-7j9-card-name-43j",
						placeholder: "Evil Rabbit",
						required: !0
					})] }),
					/* @__PURE__ */ (0, v.jsxs)(c, { children: [
						/* @__PURE__ */ (0, v.jsx)(n, {
							htmlFor: "checkout-7j9-card-number-uw1",
							children: "Card Number"
						}),
						/* @__PURE__ */ (0, v.jsx)(l, {
							id: "checkout-7j9-card-number-uw1",
							placeholder: "1234 5678 9012 3456",
							required: !0
						}),
						/* @__PURE__ */ (0, v.jsx)(o, { children: "Enter your 16-digit card number" })
					] }),
					/* @__PURE__ */ (0, v.jsxs)("div", {
						className: "grid grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, v.jsxs)(c, { children: [/* @__PURE__ */ (0, v.jsx)(n, {
								htmlFor: "checkout-exp-month-ts6",
								children: "Month"
							}), /* @__PURE__ */ (0, v.jsxs)(h, {
								items: y,
								children: [/* @__PURE__ */ (0, v.jsx)(f, {
									id: "checkout-exp-month-ts6",
									children: /* @__PURE__ */ (0, v.jsx)(m, {})
								}), /* @__PURE__ */ (0, v.jsx)(d, { children: /* @__PURE__ */ (0, v.jsx)(p, { children: y.map((e) => /* @__PURE__ */ (0, v.jsx)(u, {
									value: e.value,
									children: e.label
								}, e.value)) }) })]
							})] }),
							/* @__PURE__ */ (0, v.jsxs)(c, { children: [/* @__PURE__ */ (0, v.jsx)(n, {
								htmlFor: "checkout-7j9-exp-year-f59",
								children: "Year"
							}), /* @__PURE__ */ (0, v.jsxs)(h, {
								items: b,
								children: [/* @__PURE__ */ (0, v.jsx)(f, {
									id: "checkout-7j9-exp-year-f59",
									children: /* @__PURE__ */ (0, v.jsx)(m, {})
								}), /* @__PURE__ */ (0, v.jsx)(d, { children: /* @__PURE__ */ (0, v.jsx)(p, { children: b.map((e) => /* @__PURE__ */ (0, v.jsx)(u, {
									value: e.value,
									children: e.label
								}, e.value)) }) })]
							})] }),
							/* @__PURE__ */ (0, v.jsxs)(c, { children: [/* @__PURE__ */ (0, v.jsx)(n, {
								htmlFor: "checkout-7j9-cvv",
								children: "CVV"
							}), /* @__PURE__ */ (0, v.jsx)(l, {
								id: "checkout-7j9-cvv",
								placeholder: "123",
								required: !0
							})] })
						]
					})
				] })
			] }),
			/* @__PURE__ */ (0, v.jsx)(s, {}),
			/* @__PURE__ */ (0, v.jsxs)(r, { children: [
				/* @__PURE__ */ (0, v.jsx)(a, { children: "Billing Address" }),
				/* @__PURE__ */ (0, v.jsx)(o, { children: "The billing address associated with your payment method" }),
				/* @__PURE__ */ (0, v.jsx)(i, { children: /* @__PURE__ */ (0, v.jsxs)(c, {
					orientation: "horizontal",
					children: [/* @__PURE__ */ (0, v.jsx)(t, {
						id: "checkout-7j9-same-as-shipping-wgm",
						defaultChecked: !0
					}), /* @__PURE__ */ (0, v.jsx)(n, {
						htmlFor: "checkout-7j9-same-as-shipping-wgm",
						className: "font-normal",
						children: "Same as shipping address"
					})]
				}) })
			] }),
			/* @__PURE__ */ (0, v.jsx)(r, { children: /* @__PURE__ */ (0, v.jsx)(i, { children: /* @__PURE__ */ (0, v.jsxs)(c, { children: [/* @__PURE__ */ (0, v.jsx)(n, {
				htmlFor: "checkout-7j9-optional-comments",
				children: "Comments"
			}), /* @__PURE__ */ (0, v.jsx)(g, {
				id: "checkout-7j9-optional-comments",
				placeholder: "Add any additional comments",
				className: "resize-none"
			})] }) }) }),
			/* @__PURE__ */ (0, v.jsxs)(c, {
				orientation: "horizontal",
				children: [/* @__PURE__ */ (0, v.jsx)(e, {
					type: "submit",
					children: "Submit"
				}), /* @__PURE__ */ (0, v.jsx)(e, {
					variant: "outline",
					type: "button",
					children: "Cancel"
				})]
			})
		] }) })
	});
}
export { x as default };
