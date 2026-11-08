import { t as e } from "./I18nProvider-zGzu-4zN.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/i18n/useListFormatter.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t = {}) {
	let { locale: n } = e();
	return (0, r.useMemo)(() => new Intl.ListFormat(n, t), [n, t]);
}
export { i as t };
