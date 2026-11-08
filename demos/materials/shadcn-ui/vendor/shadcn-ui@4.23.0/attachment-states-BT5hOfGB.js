import "./rolldown-runtime-DUcC5eAW.js";
import { m as e, n as t, y as n } from "./icon-placeholder-BTF3H_W7.js";
import { t as r } from "./clock-BSRoYUhr.js";
import { t as i } from "./createLucideIcon-B1HI5iko.js";
import { t as a } from "./react-D9cguz4v.js";
import { t as o } from "./dist-zgg4f6ja.js";
import { t as s } from "./dist-DCi9UB7o.js";
import { t as c } from "./button-DmMhlFcj.js";
import { t as l } from "./jsx-runtime-lAxUcZjR.js";
import { t as u } from "./spinner-C6I5U442.js";
var d = i("FileWarning", [
	["path", {
		d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
		key: "1rqfz7"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), f = i("RefreshCw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
a();
var p = l(), m = o("cn-attachment group/attachment relative flex max-w-full min-w-0 shrink-0 flex-wrap border bg-card text-card-foreground transition-colors has-[>a,>button]:hover:bg-muted/50 data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed", { variants: {
	size: {
		default: "cn-attachment-size-default",
		sm: "cn-attachment-size-sm",
		xs: "cn-attachment-size-xs"
	},
	orientation: {
		horizontal: "cn-attachment-orientation-horizontal items-center",
		vertical: "cn-attachment-orientation-vertical flex-col"
	}
} });
function h({ className: e, state: t = "done", size: n = "default", orientation: r = "horizontal", ...i }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "attachment",
		"data-state": t,
		"data-size": n,
		"data-orientation": r,
		className: s(m({
			size: n,
			orientation: r
		}), e),
		...i
	});
}
var g = o("cn-attachment-media relative flex aspect-square shrink-0 items-center justify-center overflow-hidden group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive [&_svg]:pointer-events-none", {
	variants: { variant: {
		icon: "cn-attachment-media-variant-icon",
		image: "cn-attachment-media-variant-image *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover"
	} },
	defaultVariants: { variant: "icon" }
});
function _({ className: e, variant: t = "icon", ...n }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "attachment-media",
		"data-variant": t,
		className: s(g({ variant: t }), e),
		...n
	});
}
function v({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "attachment-content",
		className: s("cn-attachment-content max-w-full min-w-0 flex-1", e),
		...t
	});
}
function y({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("span", {
		"data-slot": "attachment-title",
		className: s("cn-attachment-title block max-w-full min-w-0 truncate group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer", e),
		...t
	});
}
function b({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("span", {
		"data-slot": "attachment-description",
		className: s("cn-attachment-description block min-w-0 truncate text-muted-foreground group-data-[state=error]/attachment:text-destructive/80", "max-w-full", e),
		...t
	});
}
function x({ className: e, ...t }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "attachment-actions",
		className: s("cn-attachment-actions flex shrink-0 items-center", e),
		...t
	});
}
function S({ className: e, variant: t, size: n = "icon-xs", ...r }) {
	return /* @__PURE__ */ (0, p.jsx)(c, {
		"data-slot": "attachment-action",
		variant: t ?? "ghost",
		size: n,
		className: s("cn-attachment-action", e),
		...r
	});
}
// upstream/examples/base/attachment-states.tsx
function C() {
	return /* @__PURE__ */ (0, p.jsxs)("div", {
		className: "mx-auto flex w-full max-w-sm flex-col gap-2 py-12",
		children: [
			/* @__PURE__ */ (0, p.jsxs)(h, {
				state: "idle",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, p.jsx)(_, { children: /* @__PURE__ */ (0, p.jsx)(r, {}) }),
					/* @__PURE__ */ (0, p.jsxs)(v, { children: [/* @__PURE__ */ (0, p.jsx)(y, { children: "selected-file.pdf" }), /* @__PURE__ */ (0, p.jsx)(b, { children: "Ready to upload" })] }),
					/* @__PURE__ */ (0, p.jsx)(x, { children: /* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Remove selected-file.pdf",
						children: /* @__PURE__ */ (0, p.jsx)(t, {})
					}) })
				]
			}),
			/* @__PURE__ */ (0, p.jsxs)(h, {
				state: "uploading",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, p.jsx)(_, { children: /* @__PURE__ */ (0, p.jsx)(u, {}) }),
					/* @__PURE__ */ (0, p.jsxs)(v, { children: [/* @__PURE__ */ (0, p.jsx)(y, { children: "design-system.zip" }), /* @__PURE__ */ (0, p.jsx)(b, { children: "Uploading · 64%" })] }),
					/* @__PURE__ */ (0, p.jsx)(x, { children: /* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Cancel upload",
						children: /* @__PURE__ */ (0, p.jsx)(t, {})
					}) })
				]
			}),
			/* @__PURE__ */ (0, p.jsxs)(h, {
				state: "processing",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, p.jsx)(_, { children: /* @__PURE__ */ (0, p.jsx)(e, {}) }),
					/* @__PURE__ */ (0, p.jsxs)(v, { children: [/* @__PURE__ */ (0, p.jsx)(y, { children: "market-research.pdf" }), /* @__PURE__ */ (0, p.jsx)(b, { children: "Processing document" })] }),
					/* @__PURE__ */ (0, p.jsx)(x, { children: /* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Remove market-research.pdf",
						children: /* @__PURE__ */ (0, p.jsx)(t, {})
					}) })
				]
			}),
			/* @__PURE__ */ (0, p.jsxs)(h, {
				state: "error",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, p.jsx)(_, { children: /* @__PURE__ */ (0, p.jsx)(d, {}) }),
					/* @__PURE__ */ (0, p.jsxs)(v, { children: [/* @__PURE__ */ (0, p.jsx)(y, { children: "financial-model.xlsx" }), /* @__PURE__ */ (0, p.jsx)(b, { children: "Upload failed. Try again." })] }),
					/* @__PURE__ */ (0, p.jsxs)(x, { children: [/* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Retry upload",
						children: /* @__PURE__ */ (0, p.jsx)(f, {})
					}), /* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Remove financial-model.xlsx",
						children: /* @__PURE__ */ (0, p.jsx)(t, {})
					})] })
				]
			}),
			/* @__PURE__ */ (0, p.jsxs)(h, {
				state: "done",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, p.jsx)(_, { children: /* @__PURE__ */ (0, p.jsx)(n, {}) }),
					/* @__PURE__ */ (0, p.jsxs)(v, { children: [/* @__PURE__ */ (0, p.jsx)(y, { children: "uploaded-report.pdf" }), /* @__PURE__ */ (0, p.jsx)(b, { children: "Uploaded · 1.8 MB" })] }),
					/* @__PURE__ */ (0, p.jsx)(x, { children: /* @__PURE__ */ (0, p.jsx)(S, {
						"aria-label": "Remove uploaded-report.pdf",
						children: /* @__PURE__ */ (0, p.jsx)(t, {})
					}) })
				]
			})
		]
	});
}
export { C as AttachmentStates };
