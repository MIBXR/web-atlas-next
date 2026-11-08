import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { r as n } from "./useRenderElement-Bc91YjHo.js";
import { t as r } from "./useRender-CYqx-Dca.js";
import { t as i } from "./dist-zgg4f6ja.js";
import { t as a } from "./dist-DCi9UB7o.js";
import { t as o } from "./button-DmMhlFcj.js";
import "./input-cHYv8lFd.js";
import "./separator-DPldDFzU.js";
import { i as s, o as c, r as l, s as u, t as d } from "./sheet-CmqT5rUx.js";
import "./skeleton-Dunw9yj-.js";
import { n as f, r as p, t as m } from "./tooltip-BAGpQ5mu.js";
import { t as h } from "./icon-placeholder-BTF3H_W7.js";
import { t as g } from "./jsx-runtime-lAxUcZjR.js";
// upstream/registry/bases/base/hooks/use-mobile.ts
var _ = /* @__PURE__ */ e(t(), 1), v = 768;
function y() {
	let [e, t] = _.useState(void 0);
	return _.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), n = () => {
			t(window.innerWidth < v);
		};
		return e.addEventListener("change", n), t(window.innerWidth < v), () => e.removeEventListener("change", n);
	}, []), !!e;
}
// upstream/registry/bases/base/ui/sidebar.tsx
var b = g(), x = "sidebar_state", S = 604800, C = "16rem", w = "18rem", T = "3rem", E = "b", D = _.createContext(null);
function O() {
	let e = _.useContext(D);
	if (!e) throw Error("useSidebar must be used within a SidebarProvider.");
	return e;
}
function k({ defaultOpen: e = !0, open: t, onOpenChange: n, className: r, style: i, children: o, ...s }) {
	let c = y(), [l, u] = _.useState(!1), [d, f] = _.useState(e), p = t ?? d, m = _.useCallback((e) => {
		let t = typeof e == "function" ? e(p) : e;
		n ? n(t) : f(t), document.cookie = `${x}=${t}; path=/; max-age=${S}`;
	}, [n, p]), h = _.useCallback(() => c ? u((e) => !e) : m((e) => !e), [
		c,
		m,
		u
	]);
	_.useEffect(() => {
		let e = (e) => {
			e.key === E && (e.metaKey || e.ctrlKey) && (e.preventDefault(), h());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [h]);
	let g = p ? "expanded" : "collapsed", v = _.useMemo(() => ({
		state: g,
		open: p,
		setOpen: m,
		isMobile: c,
		openMobile: l,
		setOpenMobile: u,
		toggleSidebar: h
	}), [
		g,
		p,
		m,
		c,
		l,
		u,
		h
	]);
	return /* @__PURE__ */ (0, b.jsx)(D.Provider, {
		value: v,
		children: /* @__PURE__ */ (0, b.jsx)("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": C,
				"--sidebar-width-icon": T,
				...i
			},
			className: a("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", r),
			...s,
			children: o
		})
	});
}
function A({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, dir: o, ...f }) {
	let { isMobile: p, state: m, openMobile: h, setOpenMobile: g } = O();
	return n === "none" ? /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar",
		className: a("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...f,
		children: i
	}) : p ? /* @__PURE__ */ (0, b.jsx)(d, {
		open: h,
		onOpenChange: g,
		...f,
		children: /* @__PURE__ */ (0, b.jsxs)(l, {
			dir: o,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": w },
			side: e,
			children: [/* @__PURE__ */ (0, b.jsxs)(c, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, b.jsx)(u, { children: "Sidebar" }), /* @__PURE__ */ (0, b.jsx)(s, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ (0, b.jsx)("div", {
				className: "flex h-full w-full flex-col",
				children: i
			})]
		})
	}) : /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": m,
		"data-collapsible": m === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ (0, b.jsx)("div", {
			"data-slot": "sidebar-gap",
			className: a("cn-sidebar-gap relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ (0, b.jsx)("div", {
			"data-slot": "sidebar-container",
			"data-side": e,
			className: a("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
			...f,
			children: /* @__PURE__ */ (0, b.jsx)("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "cn-sidebar-inner flex size-full flex-col",
				children: i
			})
		})]
	});
}
function j({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = O();
	return /* @__PURE__ */ (0, b.jsxs)(o, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: a("cn-sidebar-trigger", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ (0, b.jsx)(h, {
			lucide: "PanelLeftIcon",
			tabler: "IconLayoutSidebar",
			hugeicons: "SidebarLeftIcon",
			phosphor: "SidebarIcon",
			remixicon: "RiSideBarLine",
			className: "cn-rtl-flip"
		}), /* @__PURE__ */ (0, b.jsx)("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function M({ className: e, ...t }) {
	let { toggleSidebar: n } = O();
	return /* @__PURE__ */ (0, b.jsx)("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: n,
		title: "Toggle Sidebar",
		className: a("cn-sidebar-rail absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function N({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("main", {
		"data-slot": "sidebar-inset",
		className: a("cn-sidebar-inset relative flex w-full flex-1 flex-col", e),
		...t
	});
}
function P({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: a("cn-sidebar-header flex flex-col", e),
		...t
	});
}
function F({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: a("cn-sidebar-footer flex flex-col", e),
		...t
	});
}
function I({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: a("cn-sidebar-content flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function L({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: a("cn-sidebar-group relative flex w-full min-w-0 flex-col", e),
		...t
	});
}
function R({ className: e, render: t, ...i }) {
	return r({
		defaultTagName: "div",
		props: n({ className: a("cn-sidebar-group-label flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", e) }, i),
		render: t,
		state: {
			slot: "sidebar-group-label",
			sidebar: "group-label"
		}
	});
}
function z({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: a("cn-sidebar-group-content w-full", e),
		...t
	});
}
function B({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: a("cn-sidebar-menu flex w-full min-w-0 flex-col", e),
		...t
	});
}
function V({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: a("group/menu-item relative", e),
		...t
	});
}
var H = i("cn-sidebar-menu-button peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "cn-sidebar-menu-button-variant-default",
			outline: "cn-sidebar-menu-button-variant-outline"
		},
		size: {
			default: "cn-sidebar-menu-button-size-default",
			sm: "cn-sidebar-menu-button-size-sm",
			lg: "cn-sidebar-menu-button-size-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function U({ render: e, isActive: t = !1, variant: i = "default", size: o = "default", tooltip: s, className: c, ...l }) {
	let { isMobile: u, state: d } = O(), h = r({
		defaultTagName: "button",
		props: n({ className: a(H({
			variant: i,
			size: o
		}), c) }, l),
		render: s ? /* @__PURE__ */ (0, b.jsx)(p, { render: e }) : e,
		state: {
			slot: "sidebar-menu-button",
			sidebar: "menu-button",
			size: o,
			active: t
		}
	});
	return s ? (typeof s == "string" && (s = { children: s }), /* @__PURE__ */ (0, b.jsxs)(m, { children: [h, /* @__PURE__ */ (0, b.jsx)(f, {
		side: "right",
		align: "center",
		hidden: d !== "collapsed" || u,
		...s
	})] })) : h;
}
function W({ className: e, render: t, showOnHover: i = !1, ...o }) {
	return r({
		defaultTagName: "button",
		props: n({ className: a("cn-sidebar-menu-action flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0", i && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0", e) }, o),
		render: t,
		state: {
			slot: "sidebar-menu-action",
			sidebar: "menu-action"
		}
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: a("cn-sidebar-menu-sub flex min-w-0 flex-col", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ (0, b.jsx)("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: a("group/menu-sub-item relative", e),
		...t
	});
}
function q({ render: e, size: t = "md", isActive: i = !1, className: o, ...s }) {
	return r({
		defaultTagName: "a",
		props: n({ className: a("cn-sidebar-menu-sub-button flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0", o) }, s),
		render: e,
		state: {
			slot: "sidebar-menu-sub-button",
			sidebar: "menu-sub-button",
			size: t,
			active: i
		}
	});
}
export { M as _, z as a, y as b, N as c, U as d, V as f, k as g, K as h, L as i, B as l, q as m, I as n, R as o, G as p, F as r, P as s, A as t, W as u, j as v, O as y };
