import { a as e, c as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./table-D1EnsJZM.js";
import { t as c } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/table-demo.tsx
var l = c(), u = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card"
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal"
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer"
	},
	{
		invoice: "INV004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card"
	},
	{
		invoice: "INV005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal"
	},
	{
		invoice: "INV006",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
		paymentMethod: "Bank Transfer"
	},
	{
		invoice: "INV007",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
		paymentMethod: "Credit Card"
	}
];
function d() {
	return /* @__PURE__ */ (0, l.jsxs)(s, { children: [
		/* @__PURE__ */ (0, l.jsx)(a, { children: "A list of your recent invoices." }),
		/* @__PURE__ */ (0, l.jsx)(o, { children: /* @__PURE__ */ (0, l.jsxs)(t, { children: [
			/* @__PURE__ */ (0, l.jsx)(i, {
				className: "w-[100px]",
				children: "Invoice"
			}),
			/* @__PURE__ */ (0, l.jsx)(i, { children: "Status" }),
			/* @__PURE__ */ (0, l.jsx)(i, { children: "Method" }),
			/* @__PURE__ */ (0, l.jsx)(i, {
				className: "text-right",
				children: "Amount"
			})
		] }) }),
		/* @__PURE__ */ (0, l.jsx)(r, { children: u.map((e) => /* @__PURE__ */ (0, l.jsxs)(t, { children: [
			/* @__PURE__ */ (0, l.jsx)(n, {
				className: "font-medium",
				children: e.invoice
			}),
			/* @__PURE__ */ (0, l.jsx)(n, { children: e.paymentStatus }),
			/* @__PURE__ */ (0, l.jsx)(n, { children: e.paymentMethod }),
			/* @__PURE__ */ (0, l.jsx)(n, {
				className: "text-right",
				children: e.totalAmount
			})
		] }, e.invoice)) }),
		/* @__PURE__ */ (0, l.jsx)(e, { children: /* @__PURE__ */ (0, l.jsxs)(t, { children: [/* @__PURE__ */ (0, l.jsx)(n, {
			colSpan: 3,
			children: "Total"
		}), /* @__PURE__ */ (0, l.jsx)(n, {
			className: "text-right",
			children: "$2,500.00"
		})] }) })
	] });
}
export { d as TableDemo };
