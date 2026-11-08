import { p as e, s as t } from "./popupStateMapping-CSyRbb7j.js";
import { o as n } from "./useRenderElement-Bc91YjHo.js";
import { t as r } from "./getEmptyRootContext-CyY6MYgU.js";
// node_modules/@base-ui/react/utils/popups/store.mjs
function i() {
	return {
		open: !1,
		openProp: void 0,
		mounted: !1,
		transitionStatus: void 0,
		floatingRootContext: r(),
		floatingId: void 0,
		triggerCount: 0,
		preventUnmountingOnClose: !1,
		payload: void 0,
		activeTriggerId: null,
		activeTriggerElement: null,
		triggerIdProp: void 0,
		popupElement: null,
		positionerElement: null,
		activeTriggerProps: n,
		inactiveTriggerProps: n,
		popupProps: n
	};
}
function a(e, n, r = !1) {
	return new t({
		open: !1,
		transitionStatus: void 0,
		floatingElement: null,
		referenceElement: null,
		triggerElements: e,
		floatingId: n,
		syncOnly: !0,
		nested: r,
		onOpenChange: void 0
	});
}
var o = e((e) => e.triggerIdProp ?? e.activeTriggerId), s = e((e) => e.openProp ?? e.open), c = e((e) => (e.popupElement?.id ?? e.floatingId) || void 0);
function l(e, t) {
	return t !== void 0 && s(e) && o(e) === t;
}
function u(e, t) {
	return l(e, t) ? !0 : t !== void 0 && s(e) && o(e) == null && e.triggerCount === 1;
}
var d = {
	open: s,
	mounted: e((e) => e.mounted),
	transitionStatus: e((e) => e.transitionStatus),
	floatingRootContext: e((e) => e.floatingRootContext),
	triggerCount: e((e) => e.triggerCount),
	preventUnmountingOnClose: e((e) => e.preventUnmountingOnClose),
	payload: e((e) => e.payload),
	activeTriggerId: o,
	activeTriggerElement: e((e) => e.mounted ? e.activeTriggerElement : null),
	popupId: c,
	isTriggerActive: e((e, t) => t !== void 0 && o(e) === t),
	isOpenedByTrigger: e((e, t) => l(e, t)),
	isMountedByTrigger: e((e, t) => t !== void 0 && o(e) === t && e.mounted),
	triggerProps: e((e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps),
	triggerPopupId: e((e, t) => u(e, t) ? c(e) : void 0),
	popupProps: e((e) => e.popupProps),
	popupElement: e((e) => e.popupElement),
	positionerElement: e((e) => e.positionerElement)
};
export { a as n, d as r, i as t };
