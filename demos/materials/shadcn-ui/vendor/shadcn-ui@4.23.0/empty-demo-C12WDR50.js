import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./createLucideIcon-B1HI5iko.js";
import { t as r } from "./button-DmMhlFcj.js";
import { t as i } from "./dist-zgg4f6ja.js";
import { t as a } from "./dist-DCi9UB7o.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
var s = n("ArrowUpRight", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), c = {
	outline: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	},
	filled: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		stroke: "none"
	}
}, l = /* @__PURE__ */ e(t(), 1), u = ((e, t, n, r) => {
	let i = (0, l.forwardRef)(({ color: n = "currentColor", size: i = 24, stroke: a = 2, title: o, className: s, children: u, ...d }, f) => (0, l.createElement)("svg", {
		ref: f,
		...c[e],
		width: i,
		height: i,
		className: [
			"tabler-icon",
			`tabler-icon-${t}`,
			s
		].join(" "),
		strokeWidth: a,
		stroke: n,
		...d
	}, [
		o && (0, l.createElement)("title", { key: "svg-title" }, o),
		...r.map(([e, t]) => (0, l.createElement)(e, t)),
		...Array.isArray(u) ? u : [u]
	]));
	return i.displayName = `${n}`, i;
})("outline", "folder-code", "FolderCode", [
	["path", {
		d: "M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4",
		key: "svg-0"
	}],
	["path", {
		d: "M20 21l2 -2l-2 -2",
		key: "svg-1"
	}],
	["path", {
		d: "M17 17l-2 2l2 2",
		key: "svg-2"
	}]
]), d = o();
function f({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty",
		className: a("cn-empty flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", e),
		...t
	});
}
function p({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty-header",
		className: a("cn-empty-header flex max-w-sm flex-col items-center", e),
		...t
	});
}
var m = i("cn-empty-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "cn-empty-media-default",
		icon: "cn-empty-media-icon"
	} },
	defaultVariants: { variant: "default" }
});
function h({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty-icon",
		"data-variant": t,
		className: a(m({
			variant: t,
			className: e
		})),
		...n
	});
}
function g({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty-title",
		className: a("cn-empty-title cn-font-heading", e),
		...t
	});
}
function _({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty-description",
		className: a("cn-empty-description text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function v({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "empty-content",
		className: a("cn-empty-content flex w-full max-w-sm min-w-0 flex-col items-center text-balance", e),
		...t
	});
}
// upstream/examples/base/empty-demo.tsx
function y() {
	return /* @__PURE__ */ (0, d.jsxs)(f, { children: [
		/* @__PURE__ */ (0, d.jsxs)(p, { children: [
			/* @__PURE__ */ (0, d.jsx)(h, {
				variant: "icon",
				children: /* @__PURE__ */ (0, d.jsx)(u, {})
			}),
			/* @__PURE__ */ (0, d.jsx)(g, { children: "No Projects Yet" }),
			/* @__PURE__ */ (0, d.jsx)(_, { children: "You haven't created any projects yet. Get started by creating your first project." })
		] }),
		/* @__PURE__ */ (0, d.jsxs)(v, {
			className: "flex-row justify-center gap-2",
			children: [/* @__PURE__ */ (0, d.jsx)(r, { children: "Create Project" }), /* @__PURE__ */ (0, d.jsx)(r, {
				variant: "outline",
				children: "Import Project"
			})]
		}),
		/* @__PURE__ */ (0, d.jsxs)(r, {
			variant: "link",
			render: /* @__PURE__ */ (0, d.jsx)("a", { href: "#" }),
			className: "text-muted-foreground",
			size: "sm",
			nativeButton: !1,
			children: ["Learn More ", /* @__PURE__ */ (0, d.jsx)(s, {})]
		})
	] });
}
export { y as default };
