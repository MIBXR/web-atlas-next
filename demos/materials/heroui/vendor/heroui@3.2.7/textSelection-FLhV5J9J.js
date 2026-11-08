import { E as e, H as t, L as n, _ as r } from "./useKeyboard-CqNSkGJ-.js";
// node_modules/react-aria/dist/private/interactions/textSelection.mjs
var i = "default", a = "", o = /* @__PURE__ */ new WeakMap();
function s(r) {
	if (t() && n()) {
		if (i === "default") {
			let t = e(r);
			a = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
		}
		i = "disabled";
	} else if (r instanceof HTMLElement || r instanceof SVGElement) {
		let e = "userSelect" in r.style ? "userSelect" : "webkitUserSelect";
		o.set(r, r.style[e]), r.style[e] = "none";
	}
}
function c(s) {
	if (t() && n()) {
		if (i !== "disabled") return;
		i = "restoring", setTimeout(() => {
			r(() => {
				if (i === "restoring") {
					let t = e(s);
					t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = a || ""), a = "", i = "default";
				}
			});
		}, 300);
	} else if ((s instanceof HTMLElement || s instanceof SVGElement) && s && o.has(s)) {
		let e = o.get(s), t = "userSelect" in s.style ? "userSelect" : "webkitUserSelect";
		s.style[t] === "none" && (s.style[t] = e), s.getAttribute("style") === "" && s.removeAttribute("style"), o.delete(s);
	}
}
export { c as n, s as t };
