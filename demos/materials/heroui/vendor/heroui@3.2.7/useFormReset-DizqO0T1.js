import { i as e } from "./useHover-DxA7bNQs.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/useFormReset.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t, n, i) {
	let a = e((e) => {
		i && !e.defaultPrevented && i(n);
	});
	(0, r.useEffect)(() => {
		let e = t?.current?.form;
		return e?.addEventListener("reset", a), () => {
			e?.removeEventListener("reset", a);
		};
	}, [t]);
}
export { i as t };
