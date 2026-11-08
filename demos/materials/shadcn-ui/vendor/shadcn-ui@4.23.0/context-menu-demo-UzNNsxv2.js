import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./icon-placeholder-BTF3H_W7.js";
import { t as i } from "./jsx-runtime-lAxUcZjR.js";
import { n as a } from "./useBaseUiId-BwhhMxTY.js";
import { _ as o, b as s, c, d as l, f as u, g as d, h as f, i as p, l as m, m as h, n as g, p as _, r as v, s as y, t as b, u as x, v as S, x as C, y as w } from "./MenuSubmenuTrigger-DeBj4vdJ.js";
import { t as T } from "./addEventListener-EiVbnOnq.js";
import { t as E } from "./owner-C-FapX6G.js";
import { n as D } from "./useTimeout-CP4j_cva.js";
import { n as O, r as k } from "./shadowDom-D66trjQm.js";
import { N as ee } from "./composite-BYPOq3H3.js";
import { t as te } from "./useRenderElement-Bc91YjHo.js";
import { O as A, r as j, t as M } from "./createBaseUIEventDetails-DG51vPHx.js";
import { i as N } from "./popupStateMapping-CSyRbb7j.js";
import { t as P } from "./Separator-UE5J-VuZ.js";
// node_modules/@base-ui/react/context-menu/root/ContextMenuRoot.mjs
var F = /* @__PURE__ */ e(t(), 1), I = i();
function L(e) {
	let [t, n] = F.useState({ getBoundingClientRect() {
		return DOMRect.fromRect({
			width: 0,
			height: 0,
			x: 0,
			y: 0
		});
	} }), r = F.useRef(null), i = F.useRef(null), o = F.useRef(null), c = F.useRef(null), l = F.useRef(!0), u = F.useRef(null), d = a(), f = F.useMemo(() => ({
		anchor: t,
		setAnchor: n,
		actionsRef: o,
		backdropRef: r,
		internalBackdropRef: i,
		positionerRef: c,
		allowMouseUpTriggerRef: l,
		initialCursorPointRef: u,
		rootId: d
	}), [t, d]);
	return /*#__PURE__*/ (0, I.jsx)(S.Provider, {
		value: f,
		children: /*#__PURE__*/ (0, I.jsx)(s.Provider, {
			value: void 0,
			children: /*#__PURE__*/ (0, I.jsx)(p, { ...e })
		})
	});
}
// node_modules/@base-ui/react/context-menu/trigger/ContextMenuTrigger.mjs
var R = 500, z = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, { setAnchor: o, actionsRef: s, internalBackdropRef: c, backdropRef: l, positionerRef: u, allowMouseUpTriggerRef: d, initialCursorPointRef: f, rootId: p } = w(!1), { store: m } = C(!1), h = m.useState("open"), _ = m.useState("disabled"), v = F.useRef(null), y = F.useRef(null), b = D(), x = D(), S = F.useRef(!1);
	function P(e, t, n) {
		let r = n.type.startsWith("touch");
		f.current = {
			x: e,
			y: t
		}, o({ getBoundingClientRect() {
			return DOMRect.fromRect({
				width: r ? 10 : 0,
				height: r ? 10 : 0,
				x: e,
				y: t
			});
		} }), S.current = !1, s.current?.setOpen(!0, M(A, n)), x.start(R, () => {
			S.current = !0;
		});
	}
	function I(e) {
		if (_) return;
		d.current = !0, ee(e), P(e.clientX, e.clientY, e.nativeEvent);
		let t = E(v.current);
		T(t, "mouseup", (e) => {
			if (d.current = !1, !S.current) return;
			x.clear(), S.current = !1;
			let t = k(e);
			O(u.current, t) || p && t && g(t) === p || s.current?.setOpen(!1, M(j, e));
		}, { once: !0 });
	}
	function L(e) {
		if (!_ && (d.current = !1, e.touches.length === 1)) {
			e.stopPropagation();
			let t = e.touches[0];
			y.current = {
				x: t.clientX,
				y: t.clientY
			}, b.start(R, () => {
				y.current && P(y.current.x, y.current.y, e.nativeEvent);
			});
		}
	}
	function z(e) {
		if (b.isStarted() && y.current && e.touches.length === 1) {
			let t = e.touches[0], n = Math.abs(t.clientX - y.current.x), r = Math.abs(t.clientY - y.current.y);
			(n > 10 || r > 10) && b.clear();
		}
	}
	function B() {
		b.clear(), y.current = null;
	}
	return F.useEffect(() => {
		function e(e) {
			if (_) return;
			let t = k(e);
			(O(v.current, t) || O(c.current, t) || O(l.current, t)) && e.preventDefault();
		}
		let t = E(v.current);
		return T(t, "contextmenu", e);
	}, [
		l,
		_,
		c
	]), te("div", e, {
		state: { open: h },
		ref: [v, t],
		props: [{
			onContextMenu: I,
			onTouchStart: L,
			onTouchMove: z,
			onTouchEnd: B,
			onTouchCancel: B,
			style: { WebkitTouchCallout: "none" }
		}, a],
		stateAttributesMapping: N
	});
});
// upstream/registry/bases/base/ui/context-menu.tsx
function B({ ...e }) {
	return /* @__PURE__ */ (0, I.jsx)(L, {
		"data-slot": "context-menu",
		...e
	});
}
function V({ className: e, ...t }) {
	return /* @__PURE__ */ (0, I.jsx)(z, {
		"data-slot": "context-menu-trigger",
		className: n("cn-context-menu-trigger select-none", e),
		...t
	});
}
function H({ className: e, align: t = "start", alignOffset: r = 4, side: i = "right", sideOffset: a = 0, ...o }) {
	return /* @__PURE__ */ (0, I.jsx)(l, { children: /* @__PURE__ */ (0, I.jsx)(x, {
		className: "isolate z-50 outline-none",
		align: t,
		alignOffset: r,
		side: i,
		sideOffset: a,
		children: /* @__PURE__ */ (0, I.jsx)(u, {
			"data-slot": "context-menu-content",
			className: n("cn-context-menu-content cn-context-menu-content-logical cn-menu-target cn-menu-translucent z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none", e),
			...o
		})
	}) });
}
function U({ ...e }) {
	return /* @__PURE__ */ (0, I.jsx)(f, {
		"data-slot": "context-menu-group",
		...e
	});
}
function W({ className: e, inset: t, ...r }) {
	return /* @__PURE__ */ (0, I.jsx)(h, {
		"data-slot": "context-menu-label",
		"data-inset": t,
		className: n("cn-context-menu-label", e),
		...r
	});
}
function G({ className: e, inset: t, variant: r = "default", ...i }) {
	return /* @__PURE__ */ (0, I.jsx)(_, {
		"data-slot": "context-menu-item",
		"data-inset": t,
		"data-variant": r,
		className: n("cn-context-menu-item group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...i
	});
}
function K({ ...e }) {
	return /* @__PURE__ */ (0, I.jsx)(v, {
		"data-slot": "context-menu-sub",
		...e
	});
}
function q({ className: e, inset: t, children: i, ...a }) {
	return /* @__PURE__ */ (0, I.jsxs)(b, {
		"data-slot": "context-menu-sub-trigger",
		"data-inset": t,
		className: n("cn-context-menu-sub-trigger flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...a,
		children: [i, /* @__PURE__ */ (0, I.jsx)(r, {
			lucide: "ChevronRightIcon",
			tabler: "IconChevronRight",
			hugeicons: "ArrowRight01Icon",
			phosphor: "CaretRightIcon",
			remixicon: "RiArrowRightSLine",
			className: "cn-rtl-flip ml-auto"
		})]
	});
}
function J({ ...e }) {
	return /* @__PURE__ */ (0, I.jsx)(H, {
		"data-slot": "context-menu-sub-content",
		className: "cn-context-menu-subcontent cn-menu-target cn-menu-translucent",
		side: "right",
		...e
	});
}
function Y({ className: e, children: t, checked: i, inset: a, ...s }) {
	return /* @__PURE__ */ (0, I.jsxs)(o, {
		"data-slot": "context-menu-checkbox-item",
		"data-inset": a,
		className: n("cn-context-menu-checkbox-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		checked: i,
		...s,
		children: [/* @__PURE__ */ (0, I.jsx)("span", {
			className: "cn-context-menu-item-indicator pointer-events-none",
			children: /* @__PURE__ */ (0, I.jsx)(d, { children: /* @__PURE__ */ (0, I.jsx)(r, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function X({ ...e }) {
	return /* @__PURE__ */ (0, I.jsx)(m, {
		"data-slot": "context-menu-radio-group",
		...e
	});
}
function Z({ className: e, children: t, inset: i, ...a }) {
	return /* @__PURE__ */ (0, I.jsxs)(c, {
		"data-slot": "context-menu-radio-item",
		"data-inset": i,
		className: n("cn-context-menu-radio-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...a,
		children: [/* @__PURE__ */ (0, I.jsx)("span", {
			className: "cn-context-menu-item-indicator pointer-events-none",
			children: /* @__PURE__ */ (0, I.jsx)(y, { children: /* @__PURE__ */ (0, I.jsx)(r, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			}) })
		}), t]
	});
}
function Q({ className: e, ...t }) {
	return /* @__PURE__ */ (0, I.jsx)(P, {
		"data-slot": "context-menu-separator",
		className: n("cn-context-menu-separator", e),
		...t
	});
}
function $({ className: e, ...t }) {
	return /* @__PURE__ */ (0, I.jsx)("span", {
		"data-slot": "context-menu-shortcut",
		className: n("cn-context-menu-shortcut", e),
		...t
	});
}
// upstream/examples/base/context-menu-demo.tsx
function ne() {
	return /* @__PURE__ */ (0, I.jsxs)(B, { children: [/* @__PURE__ */ (0, I.jsxs)(V, {
		className: "flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm",
		children: [/* @__PURE__ */ (0, I.jsx)("span", {
			className: "hidden pointer-fine:inline-block",
			children: "Right click here"
		}), /* @__PURE__ */ (0, I.jsx)("span", {
			className: "hidden pointer-coarse:inline-block",
			children: "Long press here"
		})]
	}), /* @__PURE__ */ (0, I.jsxs)(H, {
		className: "w-48",
		children: [
			/* @__PURE__ */ (0, I.jsxs)(U, { children: [
				/* @__PURE__ */ (0, I.jsxs)(G, { children: ["Back", /* @__PURE__ */ (0, I.jsx)($, { children: "⌘[" })] }),
				/* @__PURE__ */ (0, I.jsxs)(G, {
					disabled: !0,
					children: ["Forward", /* @__PURE__ */ (0, I.jsx)($, { children: "⌘]" })]
				}),
				/* @__PURE__ */ (0, I.jsxs)(G, { children: ["Reload", /* @__PURE__ */ (0, I.jsx)($, { children: "⌘R" })] }),
				/* @__PURE__ */ (0, I.jsxs)(K, { children: [/* @__PURE__ */ (0, I.jsx)(q, { children: "More Tools" }), /* @__PURE__ */ (0, I.jsxs)(J, {
					className: "w-44",
					children: [
						/* @__PURE__ */ (0, I.jsxs)(U, { children: [
							/* @__PURE__ */ (0, I.jsx)(G, { children: "Save Page..." }),
							/* @__PURE__ */ (0, I.jsx)(G, { children: "Create Shortcut..." }),
							/* @__PURE__ */ (0, I.jsx)(G, { children: "Name Window..." })
						] }),
						/* @__PURE__ */ (0, I.jsx)(Q, {}),
						/* @__PURE__ */ (0, I.jsx)(U, { children: /* @__PURE__ */ (0, I.jsx)(G, { children: "Developer Tools" }) }),
						/* @__PURE__ */ (0, I.jsx)(Q, {}),
						/* @__PURE__ */ (0, I.jsx)(U, { children: /* @__PURE__ */ (0, I.jsx)(G, {
							variant: "destructive",
							children: "Delete"
						}) })
					]
				})] })
			] }),
			/* @__PURE__ */ (0, I.jsx)(Q, {}),
			/* @__PURE__ */ (0, I.jsxs)(U, { children: [/* @__PURE__ */ (0, I.jsx)(Y, {
				checked: !0,
				children: "Show Bookmarks"
			}), /* @__PURE__ */ (0, I.jsx)(Y, { children: "Show Full URLs" })] }),
			/* @__PURE__ */ (0, I.jsx)(Q, {}),
			/* @__PURE__ */ (0, I.jsx)(U, { children: /* @__PURE__ */ (0, I.jsxs)(X, {
				value: "pedro",
				children: [
					/* @__PURE__ */ (0, I.jsx)(W, { children: "People" }),
					/* @__PURE__ */ (0, I.jsx)(Z, {
						value: "pedro",
						children: "Pedro Duarte"
					}),
					/* @__PURE__ */ (0, I.jsx)(Z, {
						value: "colm",
						children: "Colm Tuite"
					})
				]
			}) })
		]
	})] });
}
export { ne as ContextMenuDemo };
