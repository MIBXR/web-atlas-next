import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DffedT9e.js";
import { t as r } from "./badge-C4JaLKK1.js";
import { t as i } from "./button-DmMhlFcj.js";
import { a, c as o, i as s, n as c, o as l, r as u, s as d, t as f } from "./drawer-DcToVL9J.js";
import { a as p, l as m, n as h, r as g, t as _ } from "./field-BJW096_J.js";
import { n as v, t as y } from "./radio-group-DTy40Oje.js";
import { t as b } from "./jsx-runtime-lAxUcZjR.js";
// upstream/hooks/use-mobile.ts
var x = /* @__PURE__ */ e(t(), 1);
function S(e = 768) {
	let [t, n] = x.useState(void 0);
	return x.useEffect(() => {
		let t = window.matchMedia(`(max-width: ${e - 1}px)`), r = () => {
			n(window.innerWidth < e);
		};
		return t.addEventListener("change", r), n(window.innerWidth < e), () => t.removeEventListener("change", r);
	}, [e]), !!t;
}
// upstream/examples/base/drawer-demo.tsx
var C = b(), w = [
	{
		value: "asap",
		id: "delivery-asap",
		label: "Standard delivery",
		description: "25–35 min · Driver assigned now",
		badge: "Fastest"
	},
	{
		value: "5-00",
		id: "delivery-5-00",
		label: "5:00 PM – 5:15 PM",
		description: "Prep starts at 4:45 PM"
	},
	{
		value: "5-30",
		id: "delivery-5-30",
		label: "5:30 PM – 5:45 PM",
		description: "Good if you're heading home"
	},
	{
		value: "6-00",
		id: "delivery-6-00",
		label: "6:00 PM – 6:15 PM",
		description: "Most popular · High demand"
	},
	{
		value: "6-30",
		id: "delivery-6-30",
		label: "6:30 PM – 6:45 PM",
		description: "Last slot before kitchen closes"
	}
];
function T() {
	let [e, t] = x.useState(!1), [b, T] = x.useState("asap"), E = S();
	function D() {
		let e = w.find((e) => e.value === b);
		e && (t(!1), n("Delivery time confirmed", { description: e.label }));
	}
	return /* @__PURE__ */ (0, C.jsxs)(f, {
		open: e,
		onOpenChange: t,
		showSwipeHandle: E,
		swipeDirection: E ? "down" : "right",
		children: [/* @__PURE__ */ (0, C.jsx)(o, {
			render: /* @__PURE__ */ (0, C.jsx)(i, { variant: "secondary" }),
			children: "Open Drawer"
		}), /* @__PURE__ */ (0, C.jsxs)(u, { children: [
			/* @__PURE__ */ (0, C.jsxs)(l, { children: [/* @__PURE__ */ (0, C.jsx)(d, { children: "Pick a delivery time" }), /* @__PURE__ */ (0, C.jsx)(s, { children: "We'll prepare your order as soon as possible." })] }),
			/* @__PURE__ */ (0, C.jsx)("div", {
				className: "flex-1 scroll-fade overflow-y-auto p-4",
				children: /* @__PURE__ */ (0, C.jsx)(y, {
					value: b,
					onValueChange: T,
					className: "gap-2",
					children: w.map((e) => /* @__PURE__ */ (0, C.jsx)(p, {
						htmlFor: e.id,
						children: /* @__PURE__ */ (0, C.jsxs)(_, {
							orientation: "horizontal",
							children: [/* @__PURE__ */ (0, C.jsxs)(h, { children: [/* @__PURE__ */ (0, C.jsxs)(m, {
								className: "flex items-center gap-2",
								children: [e.label, e.badge ? /* @__PURE__ */ (0, C.jsx)(r, {
									variant: "secondary",
									children: e.badge
								}) : null]
							}), /* @__PURE__ */ (0, C.jsx)(g, { children: e.description })] }), /* @__PURE__ */ (0, C.jsx)(v, {
								value: e.value,
								id: e.id
							})]
						})
					}, e.value))
				})
			}),
			/* @__PURE__ */ (0, C.jsxs)(a, { children: [/* @__PURE__ */ (0, C.jsx)(i, {
				onClick: D,
				className: "h-[34px]",
				children: "Confirm Delivery Time"
			}), /* @__PURE__ */ (0, C.jsx)(c, {
				render: /* @__PURE__ */ (0, C.jsx)(i, { variant: "outline" }),
				children: "Cancel"
			})] })
		] })]
	});
}
export { T as DrawerDemo };
