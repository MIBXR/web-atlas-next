import { a as e, n as t } from "./utils-UBVJ5JR_.js";
import { t as n } from "./ColorSwatch-D-eXJKEM.js";
import { t as r } from "./intlStrings-B6Rkdzvl.js";
import { i, t as a } from "./ListBox-DCWNZidc.js";
import { t as o } from "./filterDOMProps-CJYy6efO.js";
import { n as s } from "./Color-DBUN1_WA.js";
import { i as c, n as l } from "./jsx-runtime-C1t0izHF.js";
import { t as u } from "./useColor-C_cR5xYb.js";
import { t as d } from "./useControlledState-BbVlCDcL.js";
import { t as f } from "./I18nProvider-zGzu-4zN.js";
import { n as p } from "./useLocalizedStringFormatter-tuzNT5MD.js";
// node_modules/react-stately/dist/private/color/useColorPickerState.mjs
function m(e) {
	let t = u(e.value), n = u(e.defaultValue || "#000000"), [r, i] = d(t || void 0, n, e.onChange);
	return {
		color: r,
		setColor(e) {
			e != null && i(e || s("#000000"));
		}
	};
}
// node_modules/react-aria-components/dist/private/ColorSwatchPicker.mjs
var h = /* @__PURE__ */ c(l(), 1);
function g(e) {
	return e && e.__esModule ? e.default : e;
}
var _ = /*#__PURE__*/ (0, h.createContext)(null), v = /*#__PURE__*/ (0, h.createContext)(null), y = /*#__PURE__*/ (0, h.forwardRef)(function(e, n) {
	[e, n] = t(e, n, _);
	let i = m(e), s = (0, h.useMemo)(() => /* @__PURE__ */ new Map(), []), c = p(g(r), "react-aria-components");
	return /*#__PURE__*/ h.createElement(a, {
		...o(e, { labelable: !0 }),
		ref: n,
		className: e.className || "react-aria-ColorSwatchPicker",
		style: e.style,
		"aria-label": e["aria-label"] || (e["aria-labelledby"] ? void 0 : c.format("colorSwatchPicker")),
		layout: e.layout || "grid",
		selectionMode: "single",
		selectedKeys: [i.color.toString("hexa")],
		onSelectionChange: (e) => {
			e !== "all" && i.setColor(s.get([...e][0]));
		},
		disallowEmptySelection: !0
	}, /*#__PURE__*/ h.createElement(v.Provider, { value: s }, e.children));
}), b = /*#__PURE__*/ (0, h.forwardRef)(function(t, r) {
	let a = t.color || "#0000", o = (0, h.useMemo)(() => typeof a == "string" ? s(a) : a, [a]), { locale: c } = f(), l = (0, h.useContext)(v);
	(0, h.useEffect)(() => {
		let e = o.toString("hexa");
		return l.set(e, o), () => {
			l.delete(e);
		};
	}, [o, l]);
	let u = (e) => typeof e == "function" ? (t) => e({
		...t,
		color: o
	}) : e;
	return /*#__PURE__*/ h.createElement(i, {
		...t,
		render: t.render,
		ref: r,
		id: o.toString("hexa"),
		textValue: o.getColorName(c),
		className: u(t.className || "react-aria-ColorSwatchPickerItem"),
		style: u(t.style)
	}, e(u(t.children), (e) => /*#__PURE__*/ h.createElement(n.Provider, { value: { color: o } }, e)));
});
export { m as i, b as n, y as r, _ as t };
