import { d as e, m as t, n, r, s as i } from "./utils-UBVJ5JR_.js";
import { t as a } from "./filterDOMProps-CJYy6efO.js";
import { t as o } from "./intlStrings-CddZy4Ou.js";
import { t as s } from "./I18nProvider-zGzu-4zN.js";
import { n as c } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { i as l, n as u } from "./jsx-runtime-C1t0izHF.js";
import { n as d } from "./Color-DBUN1_WA.js";
// node_modules/react-aria/dist/private/color/useColorSwatch.mjs
var f = /* @__PURE__ */ l(u(), 1);
function p(e) {
	return e && e.__esModule ? e.default : e;
}
function m(e) {
	let { color: n, colorName: r } = e, i = n || "#fff0", l = (0, f.useMemo)(() => typeof i == "string" ? d(i) : i, [i]), { locale: u } = s(), m = a(e, { labelable: !0 }), h = c(p(o), "@react-aria/color"), g = t(e.id);
	return r ||= l.getChannelValue("alpha") === 0 ? h.format("transparent") : l.getColorName(u), {
		colorSwatchProps: {
			...m,
			role: "img",
			"aria-roledescription": h.format("colorSwatch"),
			"aria-label": [r, e["aria-label"] || ""].filter(Boolean).join(", "),
			"aria-labelledby": e["aria-labelledby"] ? `${g} ${e["aria-labelledby"]}` : void 0,
			id: g,
			style: {
				backgroundColor: l.toString("css"),
				forcedColorAdjust: "none"
			}
		},
		color: l || null
	};
}
// node_modules/react-aria-components/dist/private/ColorSwatch.mjs
var h = /*#__PURE__*/ (0, f.createContext)(null), g = /*#__PURE__*/ (0, f.forwardRef)(function(t, o) {
	[t, o] = n(t, o, h);
	let { colorSwatchProps: s, color: c } = m(t), l = r({
		...t,
		defaultClassName: "react-aria-ColorSwatch",
		defaultStyle: s.style,
		values: { color: c }
	}), u = a(t, { global: !0 });
	return /*#__PURE__*/ f.createElement(i.div, {
		...e(u, s, l),
		slot: t.slot || void 0,
		ref: o
	});
});
export { g as n, h as t };
