import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { S as r } from "./popupStateMapping-CSyRbb7j.js";
import { t as i } from "./jsx-runtime-lAxUcZjR.js";
// node_modules/@base-ui/react/utils/FloatingPortalLite.mjs
var a = /* @__PURE__ */ e(t(), 1), o = /* @__PURE__ */ e(n(), 1), s = i(), c = /*#__PURE__*/ a.forwardRef(function(e, t) {
	let { children: n, container: i, className: c, render: l, style: u, ...d } = e, { portalNode: f, portalSubtree: p } = r({
		container: i,
		ref: t,
		componentProps: e,
		elementProps: d
	});
	return !p && !f ? null : /*#__PURE__*/ (0, s.jsxs)(a.Fragment, { children: [p, f && /*#__PURE__*/ o.createPortal(n, f)] });
});
export { c as t };
