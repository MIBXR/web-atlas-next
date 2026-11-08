import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { _ as n, g as r, h as i, y as a } from "./popupStateMapping-CSyRbb7j.js";
import { _ as o, a as s, c, g as l, o as u, s as d } from "./MenuSubmenuTrigger-DeBj4vdJ.js";
import { t as f } from "./CompositeRoot-BhZOjAjJ.js";
import { t as p } from "./useBaseUiId-BwhhMxTY.js";
import { t as m } from "./jsx-runtime-lAxUcZjR.js";
import { t as h } from "./dist-DCi9UB7o.js";
import { a as g, c as _, d as v, f as y, h as b, i as x, m as S, p as C, r as w, t as T, u as E } from "./dropdown-menu-CqSzBIr7.js";
import { t as D } from "./icon-placeholder-BTF3H_W7.js";
// node_modules/@base-ui/react/menubar/MenubarDataAttributes.mjs
var O = /*#__PURE__*/ function(e) {
	return e.modal = "data-modal", e.orientation = "data-orientation", e.hasSubmenuOpen = "data-has-submenu-open", e;
}({}), k = /* @__PURE__ */ e(t(), 1), A = m(), j = { hasSubmenuOpen(e) {
	return e ? { [O.hasSubmenuOpen]: "" } : null;
} }, M = /*#__PURE__*/ k.forwardRef(function(e, t) {
	let { orientation: n = "horizontal", loopFocus: i = !0, render: a, className: o, modal: c = !0, disabled: l = !1, id: u, style: d, ...m } = e, [h, g] = k.useState(null), [_, v] = k.useState(!1), y = p(u), b = {
		orientation: n,
		modal: c,
		hasSubmenuOpen: _
	}, x = k.useRef(null), S = k.useRef(!1), C = k.useMemo(() => ({
		contentElement: h,
		setContentElement: g,
		setHasSubmenuOpen: v,
		hasSubmenuOpen: _,
		modal: c,
		disabled: l,
		orientation: n,
		allowMouseUpTriggerRef: S,
		rootId: y
	}), [
		h,
		_,
		c,
		l,
		n,
		y
	]);
	return /*#__PURE__*/ (0, A.jsx)(s.Provider, {
		value: C,
		children: /*#__PURE__*/ (0, A.jsx)(r, { children: /*#__PURE__*/ (0, A.jsx)(N, { children: /*#__PURE__*/ (0, A.jsx)(f, {
			render: a,
			className: o,
			style: d,
			state: b,
			stateAttributesMapping: j,
			refs: [
				t,
				g,
				x
			],
			props: [{
				role: "menubar",
				id: y,
				"aria-orientation": n
			}, m],
			orientation: n,
			loopFocus: i,
			enableHomeAndEndKeys: !0,
			highlightItemOnHover: _
		}) }) })
	});
});
function N(e) {
	let t = n(), { events: r } = a(), o = u();
	return k.useEffect(() => {
		function e(e) {
			e.nodeId && e.parentNodeId === t && (e.open ? o.hasSubmenuOpen || o.setHasSubmenuOpen(!0) : e.reason !== "sibling-open" && e.reason !== "list-navigation" && o.setHasSubmenuOpen(!1));
		}
		return r.on("menuopenchange", e), () => {
			r.off("menuopenchange", e);
		};
	}, [
		r,
		t,
		o
	]), /*#__PURE__*/ (0, A.jsx)(i, {
		id: t,
		children: e.children
	});
}
// upstream/registry/bases/base/ui/menubar.tsx
function P({ className: e, ...t }) {
	return /* @__PURE__ */ (0, A.jsx)(M, {
		"data-slot": "menubar",
		className: h("cn-menubar flex items-center", e),
		...t
	});
}
function F({ ...e }) {
	return /* @__PURE__ */ (0, A.jsx)(T, {
		"data-slot": "menubar-menu",
		...e
	});
}
function I({ ...e }) {
	return /* @__PURE__ */ (0, A.jsx)(x, {
		"data-slot": "menubar-group",
		...e
	});
}
function L({ className: e, ...t }) {
	return /* @__PURE__ */ (0, A.jsx)(b, {
		"data-slot": "menubar-trigger",
		className: h("cn-menubar-trigger flex items-center outline-hidden select-none", e),
		...t
	});
}
function R({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...i }) {
	return /* @__PURE__ */ (0, A.jsx)(w, {
		"data-slot": "menubar-content",
		align: t,
		alignOffset: n,
		sideOffset: r,
		className: h("cn-menubar-content cn-menubar-content-logical cn-menu-target cn-menu-translucent", e),
		...i
	});
}
function z({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ (0, A.jsx)(g, {
		"data-slot": "menubar-item",
		"data-inset": t,
		"data-variant": n,
		className: h("cn-menubar-item group/menubar-item", e),
		...r
	});
}
function B({ className: e, children: t, checked: n, inset: r, ...i }) {
	return /* @__PURE__ */ (0, A.jsxs)(o, {
		"data-slot": "menubar-checkbox-item",
		"data-inset": r,
		className: h("cn-menubar-checkbox-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		checked: n,
		...i,
		children: [/* @__PURE__ */ (0, A.jsx)("span", {
			className: "cn-menubar-checkbox-item-indicator pointer-events-none absolute flex items-center justify-center",
			children: /* @__PURE__ */ (0, A.jsx)(l, { children: /* @__PURE__ */ (0, A.jsx)(D, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function V({ ...e }) {
	return /* @__PURE__ */ (0, A.jsx)(_, {
		"data-slot": "menubar-radio-group",
		...e
	});
}
function H({ className: e, children: t, inset: n, ...r }) {
	return /* @__PURE__ */ (0, A.jsxs)(c, {
		"data-slot": "menubar-radio-item",
		"data-inset": n,
		className: h("cn-menubar-radio-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...r,
		children: [/* @__PURE__ */ (0, A.jsx)("span", {
			className: "cn-menubar-radio-item-indicator pointer-events-none absolute flex items-center justify-center",
			children: /* @__PURE__ */ (0, A.jsx)(d, { children: /* @__PURE__ */ (0, A.jsx)(D, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ (0, A.jsx)(E, {
		"data-slot": "menubar-separator",
		className: h("cn-menubar-separator -mx-1 my-1 h-px", e),
		...t
	});
}
function W({ className: e, ...t }) {
	return /* @__PURE__ */ (0, A.jsx)(v, {
		"data-slot": "menubar-shortcut",
		className: h("cn-menubar-shortcut ml-auto", e),
		...t
	});
}
function G({ ...e }) {
	return /* @__PURE__ */ (0, A.jsx)(y, {
		"data-slot": "menubar-sub",
		...e
	});
}
function K({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ (0, A.jsx)(S, {
		"data-slot": "menubar-sub-trigger",
		"data-inset": t,
		className: h("cn-menubar-sub-trigger", e),
		...n
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ (0, A.jsx)(C, {
		"data-slot": "menubar-sub-content",
		className: h("cn-menubar-sub-content cn-menu-target cn-menu-translucent", e),
		...t
	});
}
// upstream/examples/base/menubar-demo.tsx
function J() {
	return /* @__PURE__ */ (0, A.jsxs)(P, {
		className: "w-72",
		children: [
			/* @__PURE__ */ (0, A.jsxs)(F, { children: [/* @__PURE__ */ (0, A.jsx)(L, { children: "File" }), /* @__PURE__ */ (0, A.jsxs)(R, { children: [
				/* @__PURE__ */ (0, A.jsxs)(I, { children: [
					/* @__PURE__ */ (0, A.jsxs)(z, { children: ["New Tab ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⌘T" })] }),
					/* @__PURE__ */ (0, A.jsxs)(z, { children: ["New Window ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⌘N" })] }),
					/* @__PURE__ */ (0, A.jsx)(z, {
						disabled: !0,
						children: "New Incognito Window"
					})
				] }),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsxs)(G, { children: [/* @__PURE__ */ (0, A.jsx)(K, { children: "Share" }), /* @__PURE__ */ (0, A.jsx)(q, { children: /* @__PURE__ */ (0, A.jsxs)(I, { children: [
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Email link" }),
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Messages" }),
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Notes" })
				] }) })] }) }),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsxs)(z, { children: ["Print... ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⌘P" })] }) })
			] })] }),
			/* @__PURE__ */ (0, A.jsxs)(F, { children: [/* @__PURE__ */ (0, A.jsx)(L, { children: "Edit" }), /* @__PURE__ */ (0, A.jsxs)(R, { children: [
				/* @__PURE__ */ (0, A.jsxs)(I, { children: [/* @__PURE__ */ (0, A.jsxs)(z, { children: ["Undo ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⌘Z" })] }), /* @__PURE__ */ (0, A.jsxs)(z, { children: ["Redo ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⇧⌘Z" })] })] }),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsxs)(G, { children: [/* @__PURE__ */ (0, A.jsx)(K, { children: "Find" }), /* @__PURE__ */ (0, A.jsxs)(q, { children: [
					/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsx)(z, { children: "Search the web" }) }),
					/* @__PURE__ */ (0, A.jsx)(U, {}),
					/* @__PURE__ */ (0, A.jsxs)(I, { children: [
						/* @__PURE__ */ (0, A.jsx)(z, { children: "Find..." }),
						/* @__PURE__ */ (0, A.jsx)(z, { children: "Find Next" }),
						/* @__PURE__ */ (0, A.jsx)(z, { children: "Find Previous" })
					] })
				] })] }) }),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsxs)(I, { children: [
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Cut" }),
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Copy" }),
					/* @__PURE__ */ (0, A.jsx)(z, { children: "Paste" })
				] })
			] })] }),
			/* @__PURE__ */ (0, A.jsxs)(F, { children: [/* @__PURE__ */ (0, A.jsx)(L, { children: "View" }), /* @__PURE__ */ (0, A.jsxs)(R, {
				className: "w-44",
				children: [
					/* @__PURE__ */ (0, A.jsxs)(I, { children: [/* @__PURE__ */ (0, A.jsx)(B, { children: "Bookmarks Bar" }), /* @__PURE__ */ (0, A.jsx)(B, {
						checked: !0,
						children: "Full URLs"
					})] }),
					/* @__PURE__ */ (0, A.jsx)(U, {}),
					/* @__PURE__ */ (0, A.jsxs)(I, { children: [/* @__PURE__ */ (0, A.jsxs)(z, {
						inset: !0,
						children: ["Reload ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⌘R" })]
					}), /* @__PURE__ */ (0, A.jsxs)(z, {
						disabled: !0,
						inset: !0,
						children: ["Force Reload ", /* @__PURE__ */ (0, A.jsx)(W, { children: "⇧⌘R" })]
					})] }),
					/* @__PURE__ */ (0, A.jsx)(U, {}),
					/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsx)(z, {
						inset: !0,
						children: "Toggle Fullscreen"
					}) }),
					/* @__PURE__ */ (0, A.jsx)(U, {}),
					/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsx)(z, {
						inset: !0,
						children: "Hide Sidebar"
					}) })
				]
			})] }),
			/* @__PURE__ */ (0, A.jsxs)(F, { children: [/* @__PURE__ */ (0, A.jsx)(L, { children: "Profiles" }), /* @__PURE__ */ (0, A.jsxs)(R, { children: [
				/* @__PURE__ */ (0, A.jsxs)(V, {
					value: "benoit",
					children: [
						/* @__PURE__ */ (0, A.jsx)(H, {
							value: "andy",
							children: "Andy"
						}),
						/* @__PURE__ */ (0, A.jsx)(H, {
							value: "benoit",
							children: "Benoit"
						}),
						/* @__PURE__ */ (0, A.jsx)(H, {
							value: "Luis",
							children: "Luis"
						})
					]
				}),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsx)(z, {
					inset: !0,
					children: "Edit..."
				}) }),
				/* @__PURE__ */ (0, A.jsx)(U, {}),
				/* @__PURE__ */ (0, A.jsx)(I, { children: /* @__PURE__ */ (0, A.jsx)(z, {
					inset: !0,
					children: "Add Profile..."
				}) })
			] })] })
		]
	});
}
export { J as default };
