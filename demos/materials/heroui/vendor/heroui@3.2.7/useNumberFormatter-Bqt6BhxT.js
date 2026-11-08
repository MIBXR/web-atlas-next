import { t as e } from "./I18nProvider-zGzu-4zN.js";
import { t } from "./NumberFormatter-C0OI5DOG.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/i18n/useNumberFormatter.mjs
var i = /* @__PURE__ */ n(r(), 1);
function a(n = {}) {
	let { locale: r } = e();
	return (0, i.useMemo)(() => new t(r, n), [r, n]);
}
export { a as t };
