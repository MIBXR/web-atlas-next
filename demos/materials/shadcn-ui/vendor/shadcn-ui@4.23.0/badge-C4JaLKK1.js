import { r as e } from "./useRenderElement-Bc91YjHo.js";
import { t } from "./useRender-CYqx-Dca.js";
import { t as n } from "./dist-zgg4f6ja.js";
import { t as r } from "./dist-DCi9UB7o.js";
// upstream/registry/bases/base/ui/badge.tsx
var i = n("cn-badge group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none", {
	variants: { variant: {
		default: "cn-badge-variant-default",
		secondary: "cn-badge-variant-secondary",
		destructive: "cn-badge-variant-destructive",
		outline: "cn-badge-variant-outline",
		ghost: "cn-badge-variant-ghost",
		link: "cn-badge-variant-link"
	} },
	defaultVariants: { variant: "default" }
});
function a({ className: n, variant: a = "default", render: o, ...s }) {
	return t({
		defaultTagName: "span",
		props: e({ className: r(i({ variant: a }), n) }, s),
		render: o,
		state: {
			slot: "badge",
			variant: a
		}
	});
}
export { a as t };
