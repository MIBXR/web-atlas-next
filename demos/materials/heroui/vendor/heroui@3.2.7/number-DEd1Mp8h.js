// node_modules/react-stately/dist/private/utils/number.mjs
function e(e, t = -Infinity, n = Infinity) {
	return Math.min(Math.max(e, t), n);
}
function t(e, t) {
	let n = e, r = 0, i = t.toString(), a = i.toLowerCase().indexOf("e-");
	if (a > 0) r = Math.abs(Math.floor(Math.log10(Math.abs(t)))) + a;
	else {
		let e = i.indexOf(".");
		e >= 0 && (r = i.length - e);
	}
	if (r > 0) {
		let e = 10 ** r;
		n = Math.round(n * e) / e;
	}
	return n;
}
function n(e, n, r, i) {
	n = Number(n), r = Number(r);
	let a = (e - (isNaN(n) ? 0 : n)) % i, o = t(Math.abs(a) * 2 >= i ? e + Math.sign(a) * (i - Math.abs(a)) : e - a, i);
	return isNaN(n) ? !isNaN(r) && o > r && (o = Math.floor(t(r / i, i)) * i) : o < n ? o = n : !isNaN(r) && o > r && (o = n + Math.floor(t((r - n) / i, i)) * i), o = t(o, i), o;
}
function r(e, t, n = 10) {
	let r = n ** +t;
	return Math.round(e * r) / r;
}
export { r as n, n as r, e as t };
