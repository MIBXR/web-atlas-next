import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { t as r } from "./button-Dd5iSf4T.js";
import { t as i } from "./shim-BmqQMxK7.js";
// node_modules/@gravity-ui/icons/esm/Persons.js
var a = /* @__PURE__ */ e(t()), o = (e) => a.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), a.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M5.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-3.029 2.886c-.777.54-.971 1.063-.971 1.306 0 .446.362.808.808.808h6.384a.81.81 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5s-2.292.375-3.029.886M0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.67 5.67 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.31 2.31 0 0 1 0 11.692m10.991-.192h3.086c.234 0 .423-.19.423-.423 0-.103-.096-.472-.688-.89-.554-.393-1.375-.687-2.312-.687-.517 0-.999.09-1.42.236.526.534.854 1.146.911 1.764M12.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0",
	clipRule: "evenodd"
}));
i();
var s = class {
	constructor(e) {
		this.queue = [], this.subscriptions = /* @__PURE__ */ new Set(), this.visibleToasts = [], this.maxVisibleToasts = e?.maxVisibleToasts ?? Infinity, this.wrapUpdate = e?.wrapUpdate;
	}
	runWithWrapUpdate(e, t) {
		this.wrapUpdate ? this.wrapUpdate(e, t) : e();
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	add(e, t = {}) {
		let n = "_" + Math.random().toString(36).slice(2), r = {
			...t,
			content: e,
			key: n,
			timer: t.timeout ? new c(() => this.close(n), t.timeout) : void 0
		};
		return this.queue.unshift(r), this.updateVisibleToasts("add"), n;
	}
	close(e) {
		let t = this.queue.findIndex((t) => t.key === e);
		t >= 0 && (this.queue[t].onClose?.(), this.queue.splice(t, 1)), this.updateVisibleToasts("remove");
	}
	updateVisibleToasts(e) {
		this.visibleToasts = this.queue.slice(0, this.maxVisibleToasts), this.runWithWrapUpdate(() => {
			for (let e of this.subscriptions) e();
		}, e);
	}
	pauseAll() {
		for (let e of this.visibleToasts) e.timer && e.timer.pause();
	}
	resumeAll() {
		for (let e of this.visibleToasts) e.timer && e.timer.resume();
	}
	clear() {
		this.queue = [], this.updateVisibleToasts("clear");
	}
}, c = class {
	constructor(e, t) {
		this.startTime = null, this.remaining = t, this.callback = e;
	}
	reset(e) {
		this.remaining = e, this.resume();
	}
	pause() {
		this.timerId != null && (clearTimeout(this.timerId), this.timerId = null, this.remaining -= Date.now() - this.startTime);
	}
	resume() {
		this.remaining <= 0 || (this.startTime = Date.now(), this.timerId = setTimeout(() => {
			this.timerId = null, this.remaining = 0, this.callback();
		}, this.remaining));
	}
}, l = 2 ** 53 - 1, u = 4e3, d = typeof performance < "u" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), f = /* @__PURE__ */ new WeakSet(), p = class {
	startTime = null;
	constructor(e, t) {
		this.remaining = t, this.callback = e;
	}
	reset(e) {
		this.remaining = e, this.resume();
	}
	pause() {
		this.timerId != null && (clearTimeout(this.timerId), this.timerId = null, this.remaining -= d() - (this.startTime ?? d()));
	}
	resume() {
		this.remaining <= 0 || (this.startTime = d(), this.timerId = setTimeout(() => {
			this.timerId = null, this.remaining = 0, this.callback();
		}, this.remaining));
	}
}, m = class e extends s {
	static didWarnMissingNotify = !1;
	exitTimers = /* @__PURE__ */ new Map();
	exitingSnapshot = /* @__PURE__ */ new Set();
	exitSubscriptions = /* @__PURE__ */ new Set();
	suspensions = /* @__PURE__ */ new Set();
	isBatchingExits = !1;
	constructor(e, t = 300) {
		super(e), this.exitDuration = t;
	}
	suspendTimers(e) {
		let t = this.suspensions.size === 0;
		this.suspensions.add(e), t && super.pauseAll();
	}
	resumeTimers(e) {
		this.suspensions.delete(e), this.suspensions.size === 0 && super.resumeAll();
	}
	pauseAll() {
		this.suspendTimers("external");
	}
	resumeAll() {
		this.resumeTimers("external");
	}
	guardTimer(e) {
		if (f.has(e)) return;
		f.add(e);
		let t = e.resume.bind(e), n = e.reset.bind(e);
		e.resume = () => {
			this.suspensions.size > 0 || e.timerId != null || t();
		}, e.reset = (t) => {
			e.pause(), n(t);
		};
	}
	add(e, t) {
		let n = super.add(e, t), r = this.visibleToasts.find((e) => e.key === n)?.timer;
		return r && this.guardTimer(r), n;
	}
	updateToast(t, n, r) {
		if (this.exitTimers.has(t)) return !1;
		let i = this.visibleToasts.find((e) => e.key === t);
		if (!i) return !1;
		if (i.content = n, r && "onClose" in r && (i.onClose = r.onClose), r?.timeout !== void 0) {
			if (i.timer?.pause(), i.timeout = r.timeout, r.timeout > 0) {
				let e = new p(() => this.close(t), r.timeout);
				this.guardTimer(e), i.timer = e;
			} else i.timer = void 0;
		}
		let a = this.updateVisibleToasts;
		return typeof a == "function" ? a.call(this, "add") : (e.didWarnMissingNotify || (e.didWarnMissingNotify = !0, console.warn("[HeroUI Toast] react-stately no longer exposes updateVisibleToasts; toast updates fall back to a partial re-render.")), this.exitingSnapshot = new Set(this.exitTimers.keys()), this.notifyExitSubscribers()), !0;
	}
	getExitingKeys = () => this.exitingSnapshot;
	subscribeExiting = (e) => (this.exitSubscriptions.add(e), () => {
		this.exitSubscriptions.delete(e);
	});
	notifyExitSubscribers() {
		for (let e of this.exitSubscriptions) e();
	}
	close(e) {
		let t = this.visibleToasts.find((t) => t.key === e);
		if (this.exitTimers.has(e) || !t) return;
		if (!(this.exitDuration > 0 && typeof window < "u" && !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)) {
			super.close(e);
			return;
		}
		let n = t.onClose;
		t.onClose = void 0, this.exitTimers.set(e, setTimeout(() => {
			this.exitTimers.delete(e), this.exitingSnapshot = new Set(this.exitTimers.keys()), super.close(e), this.isBatchingExits || this.notifyExitSubscribers();
		}, this.exitDuration)), this.isBatchingExits || (this.exitingSnapshot = new Set(this.exitTimers.keys()), this.notifyExitSubscribers()), n?.();
	}
	clear() {
		this.isBatchingExits = !0;
		try {
			for (let e of [...this.visibleToasts]) this.close(e.key);
		} finally {
			this.isBatchingExits = !1, this.exitingSnapshot = new Set(this.exitTimers.keys()), this.notifyExitSubscribers();
		}
	}
	destroy() {
		for (let e of this.exitTimers.values()) clearTimeout(e);
		this.exitTimers.clear(), this.exitingSnapshot = /* @__PURE__ */ new Set(), this.exitSubscriptions.clear(), this.suspensions.clear();
		for (let e of this.visibleToasts) e.timer?.pause();
	}
}, h = class {
	constructor(e) {
		this.maxVisibleToasts = e?.maxVisibleToasts, this.queue = new m({
			maxVisibleToasts: l,
			wrapUpdate: e?.wrapUpdate
		}, e?.exitDuration ?? 300);
	}
	add(e, t) {
		return this.queue.add(e, {
			...t,
			timeout: t?.timeout ?? 4e3
		});
	}
	close(e) {
		this.queue.close(e);
	}
	update(e, t, n) {
		return this.queue.updateToast(e, t, n);
	}
	pauseAll() {
		this.queue.pauseAll();
	}
	resumeAll() {
		this.queue.resumeAll();
	}
	clear() {
		this.queue.clear();
	}
	subscribe(e) {
		return this.queue.subscribe(e);
	}
	get visibleToasts() {
		return this.queue.visibleToasts;
	}
	getQueue() {
		return this.queue;
	}
	destroy() {
		this.queue.destroy();
	}
};
function g(e) {
	let t = (e, t) => ({
		title: e,
		description: t?.description,
		indicator: t?.indicator,
		variant: t?.variant || "default",
		actionProps: t?.actionProps,
		isLoading: t?.isLoading
	}), n = (e) => ({
		timeout: e?.timeout ?? 4e3,
		onClose: e?.onClose
	}), r = (e) => ({
		...e && "timeout" in e ? { timeout: e.timeout } : null,
		...e && "onClose" in e ? { onClose: e.onClose } : null
	}), i = (r, i) => e.add(t(r, i), n(i));
	return i.success = (e, t) => i(e, {
		...t,
		variant: "success"
	}), i.danger = (e, t) => i(e, {
		...t,
		variant: "danger"
	}), i.info = (e, t) => i(e, {
		...t,
		variant: "accent"
	}), i.warning = (e, t) => i(e, {
		...t,
		variant: "warning"
	}), i.update = (i, a, o) => {
		let s = t(a, o);
		return e.update(i, s, r(o)) ? i : e.add(s, n(o));
	}, i.promise = (n, r) => {
		let a = typeof n == "function" ? n() : n, o = e.add(t(r.loading, { isLoading: !0 }), { timeout: 0 });
		return a.then((e) => {
			let t = typeof r.success == "function" ? r.success(e) : r.success;
			return i.update(o, t, {
				isLoading: !1,
				timeout: u,
				variant: "success"
			});
		}).catch((e) => {
			let t = typeof r.error == "function" ? r.error(e) : r.error;
			return i.update(o, t, {
				isLoading: !1,
				timeout: u,
				variant: "danger"
			});
		}), o;
	}, i.getQueue = () => e.getQueue(), i.close = (t) => e.close(t), i.pauseAll = () => e.pauseAll(), i.resumeAll = () => e.resumeAll(), i.clear = () => e.clear(), i;
}
var _ = g(new h()), v = n();
function y() {
	return /* @__PURE__ */ (0, v.jsx)("div", {
		className: "flex h-full max-w-xl flex-col items-center justify-center",
		children: /* @__PURE__ */ (0, v.jsx)(r, {
			size: "sm",
			variant: "secondary",
			onPress: () => {
				let e = _("You have been invited to join a team", {
					actionProps: {
						children: "Dismiss",
						onPress: () => _.close(e),
						variant: "tertiary"
					},
					description: "Bob sent you an invitation to join HeroUI team",
					indicator: /* @__PURE__ */ (0, v.jsx)(o, {}),
					variant: "default"
				});
			},
			children: "Show toast"
		})
	});
}
export { y as Default };
