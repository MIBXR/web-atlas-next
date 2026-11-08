import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useRenderElement-Bc91YjHo.js";
import { a as i, t as a } from "./useOpenChangeComplete-BfJk_bnM.js";
import { i as o, t as s } from "./popupStoreUtils-DmfT7kYW.js";
import { r as c, t as l } from "./popupStateMapping-CSyRbb7j.js";
import { i as u } from "./useOpenInteractionType-DPoQCspH.js";
import { i as d, l as f } from "./DialogTrigger-CgqcEkyA.js";
import { o as p } from "./composite-DtpIpLt3.js";
// node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
var m = /* @__PURE__ */ e(t(), 1), h = {
	...c,
	...i
}, g = /*#__PURE__*/ m.forwardRef(function(e, t) {
	let { render: n, className: i, style: a, forceRender: o = !1, ...s } = e, { store: c } = f(), l = c.useState("open"), u = c.useState("nested"), d = c.useState("mounted"), p = {
		open: l,
		transitionStatus: c.useState("transitionStatus")
	};
	return r("div", e, {
		state: p,
		ref: [c.context.backdropRef, t],
		stateAttributesMapping: h,
		props: [{
			role: "presentation",
			hidden: !d,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, s],
		enabled: o || !u
	});
}), _ = /*#__PURE__*/ function(e) {
	return e.nestedDialogs = "--nested-dialogs", e;
}({}), v = function(e) {
	return e[e.open = l.open] = "open", e[e.closed = l.closed] = "closed", e[e.startingStyle = l.startingStyle] = "startingStyle", e[e.endingStyle = l.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
}({}), y = n(), b = {
	...c,
	...i,
	nestedDialogOpen(e) {
		return e ? { [v.nestedDialogOpen]: "" } : null;
	}
}, x = /*#__PURE__*/ m.forwardRef(function(e, t) {
	let { render: n, className: i, style: c, finalFocus: l, initialFocus: m, ...h } = e, { store: g } = f(), v = g.useState("descriptionElementId"), x = g.useState("disablePointerDismissal"), S = g.useState("floatingRootContext"), C = g.useState("popupProps"), w = g.useState("modal"), T = g.useState("mounted"), E = g.useState("nested"), D = g.useState("nestedOpenDialogCount"), O = g.useState("open"), k = g.useState("openMethod"), A = g.useState("titleElementId"), j = g.useState("transitionStatus"), M = g.useState("role"), N = S.useState("floatingId"), P = h.id ?? N;
	d(), a({
		open: O,
		ref: g.context.popupRef,
		onComplete() {
			O && g.context.onOpenChangeComplete?.(!0);
		}
	});
	let F = m === void 0 ? o(g.context.popupRef) : m, I = D > 0, L = g.useStateSetter("popupElement"), R = r("div", e, {
		state: {
			open: O,
			nested: E,
			transitionStatus: j,
			nestedDialogOpen: I
		},
		props: [
			C,
			{
				id: P,
				"aria-labelledby": A ?? void 0,
				"aria-describedby": v ?? void 0,
				role: M,
				...s,
				hidden: !T,
				onKeyDown(e) {
					p.has(e.key) && e.stopPropagation();
				},
				style: { [_.nestedDialogs]: D }
			},
			h
		],
		ref: [
			t,
			g.context.popupRef,
			L
		],
		stateAttributesMapping: b
	});
	return /*#__PURE__*/ (0, y.jsx)(u, {
		context: S,
		openInteractionType: k,
		disabled: !T,
		closeOnFocusOut: !x,
		initialFocus: F,
		returnFocus: l,
		modal: w !== !1,
		restoreFocus: "popup",
		children: R
	});
});
export { g as n, x as t };
