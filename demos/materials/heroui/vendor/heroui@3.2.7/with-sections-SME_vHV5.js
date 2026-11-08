import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { t as r } from "./description-lMFGrfj6.js";
import { n as i } from "./dist-qnEEIXtT.js";
import { r as a } from "./getItemCount-DbQDCr5r.js";
import { t as o } from "./kbd-AFVhtisq.js";
import { t as s } from "./label-Wq1WAbJ3.js";
import { t as c } from "./list-box-zqe1xyd4.js";
import { t as l } from "./separator-BSPhQk7w.js";
import { t as u } from "./surface-DpKJphE4.js";
// node_modules/@gravity-ui/icons/esm/Pencil.js
var d = /* @__PURE__ */ e(t()), f = (e) => d.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), d.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529-1.971 1.971-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059 2.5-2.5c.191-.191.451-.299.722-.299m-2.31 4.009-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903 1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.08 2.08 0 0 0-1.88-1.88m3.098.658a3.6 3.6 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88z",
	clipRule: "evenodd"
})), p = (e) => d.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), d.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm7.25 1a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z",
	clipRule: "evenodd"
})), m = (e) => d.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), d.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75",
	clipRule: "evenodd"
})), h = i({ base: "header" }), g = n(), _ = ({ children: e, className: t, ...n }) => {
	let r = (0, d.useMemo)(() => h({ className: t }), [t]);
	return /*#__PURE__*/ (0, g.jsx)(a, {
		className: r,
		"data-slot": "header",
		...n,
		children: e
	});
};
_.displayName = "HeroUI.Header";
// node_modules/@heroui/react/dist/components/header/index.js
var v = _;
// upstream/demos/en/list-box/with-sections.tsx
function y() {
	return /* @__PURE__ */ (0, g.jsx)(u, {
		className: "w-[256px] rounded-3xl shadow-surface",
		children: /* @__PURE__ */ (0, g.jsxs)(c, {
			"aria-label": "File actions",
			className: "w-full p-2",
			selectionMode: "none",
			onAction: (e) => alert(`Selected item: ${e}`),
			children: [
				/* @__PURE__ */ (0, g.jsxs)(c.Section, { children: [
					/* @__PURE__ */ (0, g.jsx)(v, { children: "Actions" }),
					/* @__PURE__ */ (0, g.jsxs)(c.Item, {
						id: "new-file",
						textValue: "New file",
						children: [
							/* @__PURE__ */ (0, g.jsx)("div", {
								className: "flex h-8 items-start justify-center pt-px",
								children: /* @__PURE__ */ (0, g.jsx)(p, { className: "size-4 shrink-0 text-muted" })
							}),
							/* @__PURE__ */ (0, g.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, g.jsx)(s, { children: "New file" }), /* @__PURE__ */ (0, g.jsx)(r, { children: "Create a new file" })]
							}),
							/* @__PURE__ */ (0, g.jsxs)(o, {
								className: "ms-auto",
								variant: "light",
								children: [/* @__PURE__ */ (0, g.jsx)(o.Abbr, { keyValue: "command" }), /* @__PURE__ */ (0, g.jsx)(o.Content, { children: "N" })]
							})
						]
					}),
					/* @__PURE__ */ (0, g.jsxs)(c.Item, {
						id: "edit-file",
						textValue: "Edit file",
						children: [
							/* @__PURE__ */ (0, g.jsx)("div", {
								className: "flex h-8 items-start justify-center pt-px",
								children: /* @__PURE__ */ (0, g.jsx)(f, { className: "size-4 shrink-0 text-muted" })
							}),
							/* @__PURE__ */ (0, g.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, g.jsx)(s, { children: "Edit file" }), /* @__PURE__ */ (0, g.jsx)(r, { children: "Make changes" })]
							}),
							/* @__PURE__ */ (0, g.jsxs)(o, {
								className: "ms-auto",
								variant: "light",
								children: [/* @__PURE__ */ (0, g.jsx)(o.Abbr, { keyValue: "command" }), /* @__PURE__ */ (0, g.jsx)(o.Content, { children: "E" })]
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, g.jsx)(l, {}),
				/* @__PURE__ */ (0, g.jsxs)(c.Section, { children: [/* @__PURE__ */ (0, g.jsx)(v, { children: "Danger zone" }), /* @__PURE__ */ (0, g.jsxs)(c.Item, {
					id: "delete-file",
					textValue: "Delete file",
					variant: "danger",
					children: [
						/* @__PURE__ */ (0, g.jsx)("div", {
							className: "flex h-8 items-start justify-center pt-px",
							children: /* @__PURE__ */ (0, g.jsx)(m, { className: "size-4 shrink-0 text-danger" })
						}),
						/* @__PURE__ */ (0, g.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, g.jsx)(s, { children: "Delete file" }), /* @__PURE__ */ (0, g.jsx)(r, { children: "Move to trash" })]
						}),
						/* @__PURE__ */ (0, g.jsxs)(o, {
							className: "ms-auto",
							variant: "light",
							children: [
								/* @__PURE__ */ (0, g.jsx)(o.Abbr, { keyValue: "command" }),
								/* @__PURE__ */ (0, g.jsx)(o.Abbr, { keyValue: "shift" }),
								/* @__PURE__ */ (0, g.jsx)(o.Content, { children: "D" })
							]
						})
					]
				})] })
			]
		})
	});
}
export { y as WithSections };
