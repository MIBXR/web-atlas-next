import { a as e, o as t, t as n } from "./useRenderElement-Bc91YjHo.js";
import { t as r } from "./useCompositeItem-DXDw5OY1.js";
// node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
function i(i) {
	let { render: a, className: o, style: s, state: c = t, props: l = e, refs: u = e, metadata: d, stateAttributesMapping: f, tag: p = "div", ...m } = i, { compositeProps: h, compositeRef: g } = r({ metadata: d });
	return n(p, i, {
		state: c,
		ref: [...u, g],
		props: [
			h,
			...l,
			m
		],
		stateAttributesMapping: f
	});
}
export { i as t };
