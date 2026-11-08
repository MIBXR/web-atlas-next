import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { f as n, i as r } from "./Dialog-C0V2m_6r.js";
import { l as i } from "./utils-UBVJ5JR_.js";
import { n as a, t as o } from "./use-overlay-exit-hold-DYlqAHKn.js";
// node_modules/@heroui/react/dist/utils/use-popover-exit-hold.js
var s = /* @__PURE__ */ e(t(), 1), c = (e, t) => {
	let c = i(n, e.slot), l = (0, s.use)(r), u = e.shouldSkipAnimation ?? c?.shouldSkipAnimation;
	return a(o(e.isOpen ?? c?.isOpen, e.defaultOpen ?? c?.defaultOpen, l), {
		...t,
		enabled: !u
	});
};
export { c as t };
