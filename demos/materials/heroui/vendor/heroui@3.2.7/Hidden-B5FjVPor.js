import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/collections/Hidden.mjs
var n = /* @__PURE__ */ e(t(), 1);
typeof HTMLTemplateElement < "u" && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
	configurable: !0,
	enumerable: !0,
	get: function() {
		return this.content.firstChild;
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.appendChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.removeChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
	configurable: !0,
	enumerable: !0,
	value: function(e, t) {
		return this.content.insertBefore(e, t);
	}
}));
var r = /*#__PURE__*/ (0, n.createContext)(!1);
function i(e) {
	if ((0, n.useContext)(r)) return /*#__PURE__*/ n.createElement(n.Fragment, null, e.children);
	let t = /*#__PURE__*/ n.createElement(r.Provider, { value: !0 }, e.children);
	return /*#__PURE__*/ n.createElement("template", null, t);
}
function a(e) {
	let t = (t, i) => (0, n.useContext)(r) ? null : e(t, i);
	return t.displayName = e.displayName || e.name, (0, n.forwardRef)(t);
}
function o() {
	return (0, n.useContext)(r);
}
export { i as n, o as r, a as t };
