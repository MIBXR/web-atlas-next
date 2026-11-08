import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { l as n } from "./useRenderElement-Bc91YjHo.js";
import { r } from "./useButton-CMNj7XNN.js";
import { n as i } from "./useCompositeListItem-BEyYtHBh.js";
// node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
var a = /* @__PURE__ */ e(t(), 1);
function o(e = {}) {
	let { highlightItemOnHover: t, highlightedIndex: o, onHighlightedIndexChange: s } = r(), { ref: c, index: l } = i(e), u = o === l, d = a.useRef(null), f = n(c, d);
	return {
		compositeProps: {
			tabIndex: u ? 0 : -1,
			onFocus() {
				s(l);
			},
			onMouseMove() {
				let e = d.current;
				if (!t || !e) return;
				let n = e.hasAttribute("disabled") || e.ariaDisabled === "true";
				!u && !n && e.focus();
			}
		},
		compositeRef: f,
		index: l
	};
}
export { o as t };
