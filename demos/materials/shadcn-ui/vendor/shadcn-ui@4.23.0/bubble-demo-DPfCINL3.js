import { i as e, n as t, r as n, t as r } from "./bubble-B4wkPswj.js";
import { t as i } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/bubble-demo.tsx
var a = i();
function o() {
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "flex w-full max-w-sm flex-col gap-8 py-12",
		children: [
			/* @__PURE__ */ (0, a.jsx)(r, {
				align: "end",
				children: /* @__PURE__ */ (0, a.jsx)(t, { children: "Hey there! what's up?" })
			}),
			/* @__PURE__ */ (0, a.jsxs)(n, { children: [/* @__PURE__ */ (0, a.jsx)(r, {
				variant: "muted",
				children: /* @__PURE__ */ (0, a.jsx)(t, { children: "Hey! Want to see chat bubbles?" })
			}), /* @__PURE__ */ (0, a.jsxs)(r, {
				variant: "muted",
				children: [/* @__PURE__ */ (0, a.jsx)(t, { children: "I can group messages, switch sides, and keep the whole thread easy to scan." }), /* @__PURE__ */ (0, a.jsx)(e, {
					role: "img",
					"aria-label": "Reaction: thumbs up",
					children: /* @__PURE__ */ (0, a.jsx)("span", { children: "👍" })
				})]
			})] }),
			/* @__PURE__ */ (0, a.jsx)(r, {
				align: "end",
				children: /* @__PURE__ */ (0, a.jsx)(t, { children: "Sure. Hit me with your best demo." })
			}),
			/* @__PURE__ */ (0, a.jsxs)(r, {
				variant: "muted",
				children: [/* @__PURE__ */ (0, a.jsx)(t, { children: "Yes. You are reading a demo that is demoing itself. Very meta. Very on-brand." }), /* @__PURE__ */ (0, a.jsxs)(e, {
					role: "img",
					"aria-label": "Reactions: thumbs up, fire, eyes, and 2 more",
					children: [
						/* @__PURE__ */ (0, a.jsx)("span", { children: "👍" }),
						/* @__PURE__ */ (0, a.jsx)("span", { children: "🔥" }),
						/* @__PURE__ */ (0, a.jsx)("span", { children: "👀" }),
						/* @__PURE__ */ (0, a.jsx)("span", { children: "+2" })
					]
				})]
			})
		]
	});
}
export { o as BubbleDemo };
