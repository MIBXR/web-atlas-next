import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./button-DmMhlFcj.js";
import "./react-D9cguz4v.js";
import "./icon-placeholder-BTF3H_W7.js";
import { t } from "./jsx-runtime-lAxUcZjR.js";
import "./useRenderElement-Bc91YjHo.js";
// node_modules/@base-ui/react/toast/provider/ToastProviderContext.mjs
var n = 0;
function r(e) {
	return n += 1, `${e}-${Math.random().toString(36).slice(2, 6)}-${n}`;
}
// node_modules/@base-ui/react/toast/createToastManager.mjs
function i() {
	let e = /* @__PURE__ */ new Set();
	function t(t) {
		e.forEach((e) => e(t));
	}
	return {
		" subscribe": function(t) {
			return e.add(t), () => {
				e.delete(t);
			};
		},
		add(e) {
			let n = e.id || r("toast");
			return t({
				action: "add",
				options: {
					...e,
					id: n,
					transitionStatus: "starting"
				}
			}), n;
		},
		close(e) {
			t({
				action: "close",
				options: { id: e }
			});
		},
		update(e, n) {
			t({
				action: "update",
				options: {
					...n,
					id: e
				}
			});
		},
		promise(e, n) {
			let r = e;
			return t({
				action: "promise",
				options: {
					...n,
					promise: e,
					setPromise(e) {
						r = e;
					}
				}
			}), r;
		}
	};
}
// upstream/registry/bases/base/ui/toast.tsx
var a = t(), o = i();
// upstream/examples/base/toast-demo.tsx
function s() {
	function t() {
		let e = o.add({
			title: "Event created",
			description: "Sunday, December 3 at 9:00 AM",
			actionProps: {
				children: "Undo",
				onClick() {
					o.close(e);
				}
			}
		});
	}
	return /* @__PURE__ */ (0, a.jsx)(e, {
		variant: "outline",
		onClick: t,
		children: "Show Toast"
	});
}
export { s as ToastDemo };
