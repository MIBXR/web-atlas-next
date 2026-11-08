import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./createLucideIcon-B1HI5iko.js";
import { t as r } from "./clock-BSRoYUhr.js";
import { h as i, r as a } from "./icon-placeholder-BTF3H_W7.js";
import { t as o } from "./button-DmMhlFcj.js";
import { t as s } from "./dist-zgg4f6ja.js";
import { t as c } from "./dist-DCi9UB7o.js";
import "./separator-DPldDFzU.js";
import { t as l } from "./jsx-runtime-lAxUcZjR.js";
import { a as u, c as d, f, h as p, i as m, l as h, m as g, p as _, r as v, t as y, u as b } from "./dropdown-menu-CqSzBIr7.js";
var x = n("Archive", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}]
]), S = n("ArrowLeft", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), C = n("CalendarPlus", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
		key: "3spt84"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}]
]), w = n("ListFilter", [
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}],
	["path", {
		d: "M10 18h4",
		key: "1ulq68"
	}]
]), T = n("MailCheck", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "12jkf8"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]), E = n("Tag", [["path", {
	d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
	key: "vktsd0"
}], ["circle", {
	cx: "7.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "kqv944"
}]]), D = /* @__PURE__ */ e(t(), 1), O = l(), k = s("cn-button-group flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "cn-button-group-orientation-horizontal *:data-slot:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
		vertical: "cn-button-group-orientation-vertical flex-col *:data-slot:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function A({ className: e, orientation: t, ...n }) {
	return /* @__PURE__ */ (0, O.jsx)("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": t,
		className: c(k({ orientation: t }), e),
		...n
	});
}
// upstream/examples/base/button-group-demo.tsx
function j() {
	let [e, t] = D.useState("personal");
	return /* @__PURE__ */ (0, O.jsxs)(A, { children: [
		/* @__PURE__ */ (0, O.jsx)(A, {
			className: "hidden sm:flex",
			children: /* @__PURE__ */ (0, O.jsx)(o, {
				variant: "outline",
				size: "icon",
				"aria-label": "Go Back",
				children: /* @__PURE__ */ (0, O.jsx)(S, {})
			})
		}),
		/* @__PURE__ */ (0, O.jsxs)(A, { children: [/* @__PURE__ */ (0, O.jsx)(o, {
			variant: "outline",
			children: "Archive"
		}), /* @__PURE__ */ (0, O.jsx)(o, {
			variant: "outline",
			children: "Report"
		})] }),
		/* @__PURE__ */ (0, O.jsxs)(A, { children: [/* @__PURE__ */ (0, O.jsx)(o, {
			variant: "outline",
			children: "Snooze"
		}), /* @__PURE__ */ (0, O.jsxs)(y, { children: [/* @__PURE__ */ (0, O.jsx)(p, {
			render: /* @__PURE__ */ (0, O.jsx)(o, {
				variant: "outline",
				size: "icon",
				"aria-label": "More Options"
			}),
			children: /* @__PURE__ */ (0, O.jsx)(i, {})
		}), /* @__PURE__ */ (0, O.jsxs)(v, {
			align: "end",
			className: "w-40",
			children: [
				/* @__PURE__ */ (0, O.jsxs)(m, { children: [/* @__PURE__ */ (0, O.jsxs)(u, { children: [/* @__PURE__ */ (0, O.jsx)(T, {}), "Mark as Read"] }), /* @__PURE__ */ (0, O.jsxs)(u, { children: [/* @__PURE__ */ (0, O.jsx)(x, {}), "Archive"] })] }),
				/* @__PURE__ */ (0, O.jsx)(b, {}),
				/* @__PURE__ */ (0, O.jsxs)(m, { children: [
					/* @__PURE__ */ (0, O.jsxs)(u, { children: [/* @__PURE__ */ (0, O.jsx)(r, {}), "Snooze"] }),
					/* @__PURE__ */ (0, O.jsxs)(u, { children: [/* @__PURE__ */ (0, O.jsx)(C, {}), "Add to Calendar"] }),
					/* @__PURE__ */ (0, O.jsxs)(u, { children: [/* @__PURE__ */ (0, O.jsx)(w, {}), "Add to List"] }),
					/* @__PURE__ */ (0, O.jsxs)(f, { children: [/* @__PURE__ */ (0, O.jsxs)(g, { children: [/* @__PURE__ */ (0, O.jsx)(E, {}), "Label As..."] }), /* @__PURE__ */ (0, O.jsx)(_, { children: /* @__PURE__ */ (0, O.jsxs)(d, {
						value: e,
						onValueChange: t,
						children: [
							/* @__PURE__ */ (0, O.jsx)(h, {
								value: "personal",
								children: "Personal"
							}),
							/* @__PURE__ */ (0, O.jsx)(h, {
								value: "work",
								children: "Work"
							}),
							/* @__PURE__ */ (0, O.jsx)(h, {
								value: "other",
								children: "Other"
							})
						]
					}) })] })
				] }),
				/* @__PURE__ */ (0, O.jsx)(b, {}),
				/* @__PURE__ */ (0, O.jsx)(m, { children: /* @__PURE__ */ (0, O.jsxs)(u, {
					variant: "destructive",
					children: [/* @__PURE__ */ (0, O.jsx)(a, {}), "Trash"]
				}) })
			]
		})] })] })
	] });
}
export { j as default };
