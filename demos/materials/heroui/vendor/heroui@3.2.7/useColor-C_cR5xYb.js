import { n as e } from "./Color-DBUN1_WA.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-stately/dist/private/color/useColor.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t) {
	return (0, r.useMemo)(() => {
		if (typeof t == "string") try {
			return e(t);
		} catch {
			return;
		}
		return t;
	}, [t]);
}
export { i as t };
