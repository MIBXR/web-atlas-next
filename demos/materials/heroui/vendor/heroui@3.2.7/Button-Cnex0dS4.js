import { d as e, m as t, n, r, s as i } from "./utils-UBVJ5JR_.js";
import { n as a } from "./ProgressBar-rUJ7j1jx.js";
import { t as o } from "./LiveAnnouncer-7fiQ12ko.js";
import { t as s } from "./useButton-DkELok1R.js";
import { t as c } from "./Hidden-B5FjVPor.js";
import { t as l } from "./filterDOMProps-CJYy6efO.js";
import { i as u, n as d } from "./jsx-runtime-C1t0izHF.js";
import { n as f, t as p } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria-components/dist/private/Button.mjs
var m = /* @__PURE__ */ u(d(), 1), h = /*#__PURE__*/ (0, m.createContext)({}), g = /*#__PURE__*/ c(function(c, u) {
	[c, u] = n(c, u, h);
	let d = c, { isPending: g } = d, { buttonProps: _, isPressed: y } = s(c, u);
	_ = v(_, g);
	let { focusProps: b, isFocused: x, isFocusVisible: S } = f(c), { hoverProps: C, isHovered: w } = p({
		...c,
		isDisabled: c.isDisabled || g
	}), T = {
		isHovered: w,
		isPressed: (d.isPressed || y) && !g,
		isFocused: x,
		isFocusVisible: S,
		isDisabled: c.isDisabled || !1,
		isPending: g ?? !1
	}, E = r({
		...c,
		values: T,
		defaultClassName: "react-aria-Button"
	}), D = t(_.id), O = t(), k = _["aria-labelledby"];
	g && (k ? k = `${k} ${O}` : _["aria-label"] && (k = `${D} ${O}`));
	let A = (0, m.useRef)(g);
	(0, m.useEffect)(() => {
		let e = { "aria-labelledby": k || D };
		(!A.current && x && g || A.current && x && !g) && o(e, "assertive"), A.current = g;
	}, [
		g,
		x,
		k,
		D
	]);
	let j = l(c, { global: !0 });
	return delete j.onClick, /*#__PURE__*/ m.createElement(i.button, {
		...e(j, E, _, b, C),
		type: _.type === "submit" && g ? "button" : _.type,
		id: D,
		ref: u,
		"aria-labelledby": k,
		slot: c.slot || void 0,
		"aria-disabled": g ? "true" : _["aria-disabled"],
		"data-disabled": c.isDisabled || void 0,
		"data-pressed": T.isPressed || void 0,
		"data-hovered": w || void 0,
		"data-focused": x || void 0,
		"data-pending": g || void 0,
		"data-focus-visible": S || void 0
	}, /*#__PURE__*/ m.createElement(a.Provider, { value: { id: O } }, E.children));
}), _ = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function v(e, t) {
	if (t) {
		for (let t in e) t.startsWith("on") && !_.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
export { g as n, h as t };
