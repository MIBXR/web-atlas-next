import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { i as n, t as r } from "./icon-placeholder-BTF3H_W7.js";
import { t as i } from "./button-DmMhlFcj.js";
import { r as a, t as o } from "./code-block-CcD1W89b.js";
import { t as s } from "./dist-DCi9UB7o.js";
import { n as c, r as l, t as u } from "./collapsible-C-8FK08d.js";
import { t as d } from "./jsx-runtime-lAxUcZjR.js";
// upstream/registry/bases/base/ui/trace.tsx
var f = /* @__PURE__ */ e(t(), 1), p = d();
function m({ className: e, status: t, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)("span", {
		"data-slot": "trace-line",
		"data-status": t,
		className: s("cn-trace-line flex w-fit max-w-full min-w-0 items-center text-muted-foreground transition-colors in-[a,button]:cursor-pointer in-[a:hover,button:hover]:text-foreground data-[status=error]:text-destructive data-[status=error]:in-[a:hover,button:hover]:text-destructive data-[status=pending]:opacity-60 data-[status=running]:*:data-[slot=trace-title]:shimmer", e),
		...n
	});
}
function h({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("span", {
		"data-slot": "trace-icon",
		"aria-hidden": "true",
		className: s("cn-trace-icon flex shrink-0 items-center justify-center [&_svg]:pointer-events-none", e),
		...t
	});
}
function g({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("span", {
		"data-slot": "trace-title",
		className: s("cn-trace-title min-w-0 truncate motion-reduce:shimmer-none", e),
		...t
	});
}
function _({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)(u, {
		"data-slot": "trace-collapsible",
		className: s("cn-trace-collapsible flex w-full min-w-0 flex-col", e),
		...t
	});
}
function v({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, p.jsxs)(l, {
		"data-slot": "trace-collapsible-trigger",
		className: s("cn-trace-collapsible-trigger group/trace-collapsible-trigger flex w-fit max-w-full min-w-0 cursor-pointer items-center text-left text-muted-foreground transition-colors outline-none hover:text-foreground has-[[data-status=error]]:text-destructive", e),
		...n,
		children: [t, /* @__PURE__ */ (0, p.jsx)(h, {
			className: "transition-transform group-aria-expanded/trace-collapsible-trigger:rotate-90",
			children: /* @__PURE__ */ (0, p.jsx)(r, {
				lucide: "ChevronRightIcon",
				tabler: "IconChevronRight",
				hugeicons: "ArrowRight01Icon",
				phosphor: "CaretRightIcon",
				remixicon: "RiArrowRightSLine"
			})
		})]
	});
}
function y({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(c, {
		"data-slot": "trace-collapsible-content",
		className: "cn-trace-collapsible-content h-(--collapsible-panel-height) min-w-0 overflow-hidden transition-[height] data-ending-style:h-0 data-starting-style:h-0",
		...n,
		children: /* @__PURE__ */ (0, p.jsx)("div", {
			"data-slot": "trace-collapsible-content-inner",
			className: s("cn-trace-collapsible-content-inner min-w-0 wrap-break-word text-muted-foreground", e),
			children: t
		})
	});
}
// upstream/examples/base/trace-open.tsx
function b() {
	let [e, t] = f.useState(!1);
	return /* @__PURE__ */ (0, p.jsxs)("div", {
		className: "flex w-full max-w-sm flex-col items-start gap-4",
		children: [
			/* @__PURE__ */ (0, p.jsxs)(_, {
				defaultOpen: !0,
				children: [/* @__PURE__ */ (0, p.jsx)(v, { children: /* @__PURE__ */ (0, p.jsxs)(m, { children: [/* @__PURE__ */ (0, p.jsx)(h, { children: /* @__PURE__ */ (0, p.jsx)(n, {}) }), /* @__PURE__ */ (0, p.jsx)(g, { children: "Ran node --version" })] }) }), /* @__PURE__ */ (0, p.jsx)(y, { children: /* @__PURE__ */ (0, p.jsx)(o, {
					size: "sm",
					children: /* @__PURE__ */ (0, p.jsx)(a, {
						wrap: !0,
						className: "max-h-64",
						children: "$ node --version\nv24.18.0"
					})
				}) })]
			}),
			/* @__PURE__ */ (0, p.jsxs)(_, {
				open: e,
				onOpenChange: t,
				children: [/* @__PURE__ */ (0, p.jsx)(v, { children: /* @__PURE__ */ (0, p.jsxs)(m, { children: [/* @__PURE__ */ (0, p.jsx)(h, { children: /* @__PURE__ */ (0, p.jsx)(n, {}) }), /* @__PURE__ */ (0, p.jsx)(g, { children: "Ran pnpm --version" })] }) }), /* @__PURE__ */ (0, p.jsx)(y, { children: /* @__PURE__ */ (0, p.jsx)(o, {
					size: "sm",
					children: /* @__PURE__ */ (0, p.jsx)(a, {
						wrap: !0,
						className: "max-h-64",
						children: "$ pnpm --version\n10.33.4"
					})
				}) })]
			}),
			/* @__PURE__ */ (0, p.jsxs)(i, {
				variant: "outline",
				size: "sm",
				onClick: () => t(!e),
				children: [e ? "Hide" : "Show", " the pnpm output"]
			})
		]
	});
}
export { b as TraceOpen };
