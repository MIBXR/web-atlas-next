import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-zgg4f6ja.js";
import { t as r } from "./dist-DCi9UB7o.js";
import { t as i } from "./button-DmMhlFcj.js";
import { t as a } from "./icon-placeholder-BTF3H_W7.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
// upstream/registry/bases/base/ui/code-block.tsx
var s = /* @__PURE__ */ e(t(), 1), c = o(), l = n("cn-code-block group/code-block relative flex w-full min-w-0 flex-col overflow-hidden", {
	variants: { variant: {
		default: "cn-code-block-variant-default",
		destructive: "cn-code-block-variant-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function u({ className: e, variant: t = "default", size: n = "default", ...i }) {
	return /* @__PURE__ */ (0, c.jsx)("div", {
		"data-slot": "code-block",
		"data-variant": t,
		"data-size": n,
		className: r(l({ variant: t }), e),
		...i
	});
}
function d({ className: e, ...t }) {
	return /* @__PURE__ */ (0, c.jsx)("div", {
		"data-slot": "code-block-header",
		className: r("cn-code-block-header flex min-w-0 shrink-0 items-center *:has-[>[data-slot=code-block-title]]:min-w-0", e),
		...t
	});
}
function f({ className: e, ...t }) {
	return /* @__PURE__ */ (0, c.jsx)("div", {
		"data-slot": "code-block-title",
		className: r("cn-code-block-title min-w-0 truncate [&_svg]:pointer-events-none [&_svg]:inline-block [&_svg]:align-middle", e),
		...t
	});
}
function p({ className: e, ...t }) {
	return /* @__PURE__ */ (0, c.jsx)("div", {
		"data-slot": "code-block-actions",
		className: r("cn-code-block-actions ms-auto flex shrink-0 items-center [[data-slot=code-block]>&]:absolute [[data-slot=code-block]>&]:z-10 [[data-slot=code-block]>&]:opacity-0 [[data-slot=code-block]>&]:transition-opacity [[data-slot=code-block]>&]:group-focus-within/code-block:opacity-100 [[data-slot=code-block]>&]:group-hover/code-block:opacity-100 [[data-slot=code-block]>&]:pointer-coarse:opacity-100", e),
		...t
	});
}
function m({ value: e, variant: t = "ghost", size: n = "icon-xs", className: o, onClick: l, ...u }) {
	let [d, f] = s.useState(!1);
	return s.useEffect(() => {
		if (!d) return;
		let e = setTimeout(() => f(!1), 2e3);
		return () => clearTimeout(e);
	}, [d]), /* @__PURE__ */ (0, c.jsxs)(c.Fragment, { children: [/* @__PURE__ */ (0, c.jsx)(i, {
		"data-slot": "code-block-copy-button",
		"data-copied": d || void 0,
		variant: t,
		size: n,
		"aria-label": d ? "Copied" : "Copy",
		className: r("cn-code-block-copy-button", o),
		onClick: (t) => {
			l?.(t), navigator.clipboard.writeText(e).then(() => f(!0)).catch(() => {});
		},
		...u,
		children: d ? /* @__PURE__ */ (0, c.jsx)(a, {
			lucide: "CheckIcon",
			tabler: "IconCheck",
			hugeicons: "Tick02Icon",
			phosphor: "CheckIcon",
			remixicon: "RiCheckLine"
		}) : /* @__PURE__ */ (0, c.jsx)(a, {
			lucide: "CopyIcon",
			tabler: "IconCopy",
			hugeicons: "Copy01Icon",
			phosphor: "CopyIcon",
			remixicon: "RiFileCopyLine"
		})
	}), /* @__PURE__ */ (0, c.jsx)("span", {
		"aria-live": "polite",
		className: "sr-only",
		children: d ? "Copied" : ""
	})] });
}
function h({ className: e, children: t, style: n, wrap: i = !1, lineNumbers: a = !1, startLine: o = 1, ...s }) {
	return /* @__PURE__ */ (0, c.jsx)("pre", {
		"data-slot": "code-block-content",
		"data-wrap": i || void 0,
		"data-numbered": a || void 0,
		dir: "ltr",
		tabIndex: 0,
		style: {
			counterReset: `line ${o - 1}`,
			...n
		},
		className: r("cn-code-block-content min-h-0 min-w-0 scroll-fade-x scrollbar-thin overflow-auto text-start font-mono outline-none data-wrap:scroll-fade-y data-wrap:wrap-break-word data-wrap:whitespace-pre-wrap", e),
		...s,
		children: /* @__PURE__ */ (0, c.jsx)("code", {
			"data-slot": "code-block-code",
			className: "cn-code-block-code grid min-h-lh min-w-max content-start in-data-numbered:grid-cols-[auto_1fr] in-data-wrap:min-w-0",
			children: a && typeof t == "string" ? t.replace(/\n$/, "").split("\n").map((e, t) => /* @__PURE__ */ (0, c.jsx)(_, { children: e }, t)) : t
		})
	});
}
var g = n("cn-code-block-line relative block min-h-lh after:absolute after:top-0 after:select-none in-data-numbered:col-span-2 in-data-numbered:grid in-data-numbered:grid-cols-subgrid in-data-numbered:[counter-increment:line] in-data-numbered:before:content-[counter(line)] in-data-numbered:before:select-none in-data-numbered:supports-[content:counter(line)_/_'']:before:content-[counter(line)_/_'']", {
	variants: { variant: {
		default: "cn-code-block-line-variant-default",
		added: "cn-code-block-line-variant-added",
		removed: "cn-code-block-line-variant-removed",
		highlighted: "cn-code-block-line-variant-highlighted"
	} },
	defaultVariants: { variant: "default" }
});
function _({ className: e, variant: t = "default", children: n, ...i }) {
	let a = n == null || n === "" || Array.isArray(n) && n.length === 0;
	return /* @__PURE__ */ (0, c.jsx)("span", {
		"data-slot": "code-block-line",
		"data-variant": t,
		className: r(g({ variant: t }), e),
		...i,
		children: /* @__PURE__ */ (0, c.jsx)("span", {
			"data-slot": "code-block-line-content",
			className: "min-w-0",
			children: a ? "\n" : n
		})
	});
}
export { d as a, m as i, p as n, _ as o, h as r, f as s, u as t };
