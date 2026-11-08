import { d as e, r as t, s as n } from "./utils-UBVJ5JR_.js";
import { t as r } from "./filterDOMProps-CJYy6efO.js";
import { i, n as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o, t as s } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria-components/dist/private/ColorThumb.mjs
var c = /* @__PURE__ */ i(a(), 1), l = /*#__PURE__*/ (0, c.createContext)(null), u = /*#__PURE__*/ (0, c.forwardRef)(function(i, a) {
	let { state: u, thumbProps: d, inputXRef: f, inputYRef: p, xInputProps: m, yInputProps: h, isDisabled: g = !1 } = (0, c.useContext)(l), { focusProps: _, isFocused: v, isFocusVisible: y } = o(), { hoverProps: b, isHovered: x } = s(i), S = t({
		...i,
		defaultClassName: "react-aria-ColorThumb",
		defaultStyle: {
			...d.style,
			backgroundColor: u.getDisplayColor().toString()
		},
		values: {
			color: u.getDisplayColor(),
			isHovered: x,
			isDragging: u.isDragging,
			isFocused: v,
			isFocusVisible: y,
			isDisabled: g
		}
	}), C = r(i, { global: !0 });
	return delete C.id, /*#__PURE__*/ c.createElement(n.div, {
		...e(d, b, C),
		...S,
		ref: a,
		"data-hovered": x || void 0,
		"data-dragging": u.isDragging || void 0,
		"data-focused": v || void 0,
		"data-focus-visible": y || void 0,
		"data-disabled": g || void 0
	}, /*#__PURE__*/ c.createElement("input", {
		ref: f,
		...m,
		..._
	}), h && /*#__PURE__*/ c.createElement("input", {
		ref: p,
		...h,
		..._
	}), S.children);
});
export { l as n, u as t };
