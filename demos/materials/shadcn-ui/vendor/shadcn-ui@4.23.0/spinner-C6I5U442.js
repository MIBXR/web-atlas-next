import { t as e } from "./dist-DCi9UB7o.js";
import { t } from "./icon-placeholder-BTF3H_W7.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
// upstream/registry/bases/base/ui/spinner.tsx
var r = n();
function i({ className: n, ...i }) {
	return /* @__PURE__ */ (0, r.jsx)(t, {
		lucide: "Loader2Icon",
		tabler: "IconLoader",
		hugeicons: "Loading03Icon",
		phosphor: "SpinnerIcon",
		remixicon: "RiLoaderLine",
		"data-slot": "spinner",
		role: "status",
		"aria-label": "Loading",
		className: e("size-4 animate-spin", n),
		...i
	});
}
export { i as t };
