import { t as e } from "./button-Dd5iSf4T.js";
import { t } from "./dropdown-K0llc_t4.js";
import { t as n } from "./label-Wq1WAbJ3.js";
import { t as r } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/dropdown/default.tsx
var i = r();
function a() {
	return /* @__PURE__ */ (0, i.jsxs)(t, { children: [/* @__PURE__ */ (0, i.jsx)(e, {
		"aria-label": "Menu",
		variant: "secondary",
		children: "Actions"
	}), /* @__PURE__ */ (0, i.jsx)(t.Popover, { children: /* @__PURE__ */ (0, i.jsxs)(t.Menu, {
		onAction: (e) => console.log(`Selected: ${e}`),
		children: [
			/* @__PURE__ */ (0, i.jsx)(t.Item, {
				id: "new-file",
				textValue: "New file",
				children: /* @__PURE__ */ (0, i.jsx)(n, { children: "New file" })
			}),
			/* @__PURE__ */ (0, i.jsx)(t.Item, {
				id: "copy-link",
				textValue: "Copy link",
				children: /* @__PURE__ */ (0, i.jsx)(n, { children: "Copy link" })
			}),
			/* @__PURE__ */ (0, i.jsx)(t.Item, {
				id: "edit-file",
				textValue: "Edit file",
				children: /* @__PURE__ */ (0, i.jsx)(n, { children: "Edit file" })
			}),
			/* @__PURE__ */ (0, i.jsx)(t.Item, {
				id: "delete-file",
				textValue: "Delete file",
				variant: "danger",
				children: /* @__PURE__ */ (0, i.jsx)(n, { children: "Delete file" })
			})
		]
	}) })] });
}
export { a as Default };
