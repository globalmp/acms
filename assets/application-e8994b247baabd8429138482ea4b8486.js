! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = st.type(e);
		return "function" === n || st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function i(e, t, n) {
		if (st.isFunction(t)) return st.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return st.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (Dt.test(t)) return st.filter(t, e, n);
			t = st.filter(t, e)
		}
		return st.grep(e, function(e) {
			return st.inArray(e, t) >= 0 !== n
		})
	}

	function s(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function o(e) {
		var t = vt[e] = {};
		return st.each(e.match(yt) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function r() {
		pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (pt.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
	}

	function a() {
		(pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (r(), st.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(xt, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _t.test(n) ? st.parseJSON(n) : n
				} catch (s) {}
				st.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function d(e) {
		var t;
		for (t in e)
			if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function c(e, t, n, i) {
		if (st.acceptData(e)) {
			var s, o, r = st.expando,
				a = e.nodeType,
				l = a ? st.cache : e,
				d = a ? e[r] : e[r] && r;
			if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t) return d || (d = a ? e[r] = G.pop() || st.guid++ : r), l[d] || (l[d] = a ? {} : {
				toJSON: st.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[d] = st.extend(l[d], t) : l[d].data = st.extend(l[d].data, t)), o = l[d], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[st.camelCase(t)] = n), "string" == typeof t ? (s = o[t], null == s && (s = o[st.camelCase(t)])) : s = o, s
		}
	}

	function u(e, t, n) {
		if (st.acceptData(e)) {
			var i, s, o = e.nodeType,
				r = o ? st.cache : e,
				a = o ? e[st.expando] : st.expando;
			if (r[a]) {
				if (t && (i = n ? r[a] : r[a].data)) {
					st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in i ? t = [t] : (t = st.camelCase(t), t = t in i ? [t] : t.split(" ")), s = t.length;
					for (; s--;) delete i[t[s]];
					if (n ? !d(i) : !st.isEmptyObject(i)) return
				}(n || (delete r[a].data, d(r[a]))) && (o ? st.cleanData([e], !0) : nt.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
			}
		}
	}

	function D() {
		return !0
	}

	function h() {
		return !1
	}

	function p() {
		try {
			return pt.activeElement
		} catch (e) {}
	}

	function f(e) {
		var t = Nt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function m(e, t) {
		var n, i, s = 0,
			o = typeof e.getElementsByTagName !== wt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== wt ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (i = n[s]); s++) !t || st.nodeName(i, t) ? o.push(i) : st.merge(o, m(i, t));
		return void 0 === t || t && st.nodeName(e, t) ? st.merge([e], o) : o
	}

	function B(e) {
		Mt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function g(e, t) {
		return st.nodeName(e, "table") && st.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function y(e) {
		return e.type = (null !== st.find.attr(e, "type")) + "/" + e.type, e
	}

	function v(e) {
		var t = Ut.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function b(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) st._data(n, "globalEval", !t || st._data(t[i], "globalEval"))
	}

	function C(e, t) {
		if (1 === t.nodeType && st.hasData(e)) {
			var n, i, s, o = st._data(e),
				r = st._data(t, o),
				a = o.events;
			if (a) {
				delete r.handle, r.events = {};
				for (n in a)
					for (i = 0, s = a[n].length; s > i; i++) st.event.add(t, n, a[n][i])
			}
			r.data && (r.data = st.extend({}, r.data))
		}
	}

	function w(e, t) {
		var n, i, s;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[st.expando]) {
				s = st._data(t);
				for (i in s.events) st.removeEvent(t, i, s.handle);
				t.removeAttribute(st.expando)
			}
			"script" === n && t.text !== e.text ? (y(t).text = e.text, v(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Mt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function _(t, n) {
		var i, s = st(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(s[0])) ? i.display : st.css(s[0], "display");
		return s.detach(), o
	}

	function x(e) {
		var t = pt,
			n = Zt[e];
		return n || (n = _(e, t), "none" !== n && n || (Qt = (Qt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qt[0].contentWindow || Qt[0].contentDocument).document, t.write(), t.close(), n = _(e, t), Qt.detach()), Zt[e] = n), n
	}

	function E(e, t) {
		return {
			get: function() {
				var n = e();
				if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function A(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, s = hn.length; s--;)
			if (t = hn[s] + n, t in e) return t;
		return i
	}

	function k(e, t) {
		for (var n, i, s, o = [], r = 0, a = e.length; a > r; r++) i = e[r], i.style && (o[r] = st._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && kt(i) && (o[r] = st._data(i, "olddisplay", x(i.nodeName)))) : (s = kt(i), (n && "none" !== n || !s) && st._data(i, "olddisplay", s ? n : st.css(i, "display"))));
		for (r = 0; a > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
		return e
	}

	function T(e, t, n) {
		var i = dn.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function M(e, t, n, i, s) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += st.css(e, n + At[o], !0, s)), i ? ("content" === n && (r -= st.css(e, "padding" + At[o], !0, s)), "margin" !== n && (r -= st.css(e, "border" + At[o] + "Width", !0, s))) : (r += st.css(e, "padding" + At[o], !0, s), "padding" !== n && (r += st.css(e, "border" + At[o] + "Width", !0, s)));
		return r
	}

	function S(e, t, n) {
		var i = !0,
			s = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = en(e),
			r = nt.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
		if (0 >= s || null == s) {
			if (s = tn(e, t, o), (0 > s || null == s) && (s = e.style[t]), sn.test(s)) return s;
			i = r && (nt.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
		}
		return s + M(e, t, n || (r ? "border" : "content"), i, o) + "px"
	}

	function $(e, t, n, i, s) {
		return new $.prototype.init(e, t, n, i, s)
	}

	function F() {
		return setTimeout(function() {
			pn = void 0
		}), pn = st.now()
	}

	function j(e, t) {
		var n, i = {
				height: e
			},
			s = 0;
		for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = At[s], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function z(e, t, n) {
		for (var i, s = (vn[t] || []).concat(vn["*"]), o = 0, r = s.length; r > o; o++)
			if (i = s[o].call(n, t, e)) return i
	}

	function N(e, t, n) {
		var i, s, o, r, a, l, d, c, u = this,
			D = {},
			h = e.style,
			p = e.nodeType && kt(e),
			f = st._data(e, "fxshow");
		n.queue || (a = st._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
			a.unqueued || l()
		}), a.unqueued++, u.always(function() {
			u.always(function() {
				a.unqueued--, st.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], d = st.css(e, "display"), c = "none" === d ? st._data(e, "olddisplay") || x(e.nodeName) : d, "inline" === c && "none" === st.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== x(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || u.always(function() {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (s = t[i], mn.exec(s)) {
				if (delete t[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
					if ("show" !== s || !f || void 0 === f[i]) continue;
					p = !0
				}
				D[i] = f && f[i] || st.style(e, i)
			} else d = void 0;
		if (st.isEmptyObject(D)) "inline" === ("none" === d ? x(e.nodeName) : d) && (h.display = d);
		else {
			f ? "hidden" in f && (p = f.hidden) : f = st._data(e, "fxshow", {}), o && (f.hidden = !p), p ? st(e).show() : u.done(function() {
				st(e).hide()
			}), u.done(function() {
				var t;
				st._removeData(e, "fxshow");
				for (t in D) st.style(e, t, D[t])
			});
			for (i in D) r = z(p ? f[i] : 0, i, u), i in f || (f[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function P(e, t) {
		var n, i, s, o, r;
		for (n in e)
			if (i = st.camelCase(n), s = t[i], o = e[n], st.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = st.cssHooks[i], r && "expand" in r) {
				o = r.expand(o), delete e[i];
				for (n in o) n in e || (e[n] = o[n], t[n] = s)
			} else t[i] = s
	}

	function I(e, t, n) {
		var i, s, o = 0,
			r = yn.length,
			a = st.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = pn || F(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, o = 1 - i, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(o);
				return a.notifyWith(e, [d, o, n]), 1 > o && l ? n : (a.resolveWith(e, [d]), !1)
			},
			d = a.promise({
				elem: e,
				props: st.extend({}, t),
				opts: st.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: pn || F(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = st.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
					return d.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? d.tweens.length : 0;
					if (s) return this;
					for (s = !0; i > n; n++) d.tweens[n].run(1);
					return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
				}
			}),
			c = d.props;
		for (P(c, d.opts.specialEasing); r > o; o++)
			if (i = yn[o].call(d, e, c, d.opts)) return i;
		return st.map(c, z, d), st.isFunction(d.opts.start) && d.opts.start.call(e, d), st.fx.timer(st.extend(l, {
			elem: e,
			anim: d,
			queue: d.opts.queue
		})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
	}

	function L(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, s = 0,
				o = t.toLowerCase().match(yt) || [];
			if (st.isFunction(n))
				for (; i = o[s++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function O(e, t, n, i) {
		function s(a) {
			var l;
			return o[a] = !0, st.each(e[a] || [], function(e, a) {
				var d = a(t, n, i);
				return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
			}), l
		}
		var o = {},
			r = e === Vn;
		return s(t.dataTypes[0]) || !o["*"] && s("*")
	}

	function q(e, t) {
		var n, i, s = st.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
		return n && st.extend(!0, e, n), e
	}

	function H(e, t, n) {
		for (var i, s, o, r, a = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
		if (s)
			for (r in a)
				if (a[r] && a[r].test(s)) {
					l.unshift(r);
					break
				}
		if (l[0] in n) o = l[0];
		else {
			for (r in n) {
				if (!l[0] || e.converters[r + " " + l[0]]) {
					o = r;
					break
				}
				i || (i = r)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function R(e, t, n, i) {
		var s, o, r, a, l, d = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (r = d[l + " " + o] || d["* " + o], !r)
				for (s in d)
					if (a = s.split(" "), a[1] === o && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
						r === !0 ? r = d[s] : d[s] !== !0 && (o = a[0], c.unshift(a[1]));
						break
					}
			if (r !== !0)
				if (r && e["throws"]) t = r(t);
				else try {
					t = r(t)
				} catch (u) {
					return {
						state: "parsererror",
						error: r ? u : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function V(e, t, n, i) {
		var s;
		if (st.isArray(t)) st.each(t, function(t, s) {
			n || Gn.test(e) ? i(e, s) : V(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
		});
		else if (n || "object" !== st.type(t)) i(e, t);
		else
			for (s in t) V(e + "[" + s + "]", t[s], n, i)
	}

	function W() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function J() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function U(e) {
		return st.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var G = [],
		X = G.slice,
		K = G.concat,
		Y = G.push,
		Q = G.indexOf,
		Z = {},
		et = Z.toString,
		tt = Z.hasOwnProperty,
		nt = {},
		it = "1.11.2",
		st = function(e, t) {
			return new st.fn.init(e, t)
		},
		ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		rt = /^-ms-/,
		at = /-([\da-z])/gi,
		lt = function(e, t) {
			return t.toUpperCase()
		};
	st.fn = st.prototype = {
		jquery: it,
		constructor: st,
		selector: "",
		length: 0,
		toArray: function() {
			return X.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
		},
		pushStack: function(e) {
			var t = st.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return st.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(st.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(X.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Y,
		sort: G.sort,
		splice: G.splice
	}, st.extend = st.fn.extend = function() {
		var e, t, n, i, s, o, r = arguments[0] || {},
			a = 1,
			l = arguments.length,
			d = !1;
		for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
			if (null != (s = arguments[a]))
				for (i in s) e = r[i], n = s[i], r !== n && (d && n && (st.isPlainObject(n) || (t = st.isArray(n))) ? (t ? (t = !1, o = e && st.isArray(e) ? e : []) : o = e && st.isPlainObject(e) ? e : {}, r[i] = st.extend(d, o, n)) : void 0 !== n && (r[i] = n));
		return r
	}, st.extend({
		expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === st.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === st.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !st.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return !1;
			try {
				if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (nt.ownLast)
				for (t in e) return tt.call(e, t);
			for (t in e);
			return void 0 === t || tt.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && st.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(rt, "ms-").replace(at, lt)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var s, o = 0,
				r = e.length,
				a = n(e);
			if (i) {
				if (a)
					for (; r > o && (s = t.apply(e[o], i), s !== !1); o++);
				else
					for (o in e)
						if (s = t.apply(e[o], i), s === !1) break
			} else if (a)
				for (; r > o && (s = t.call(e[o], o, e[o]), s !== !1); o++);
			else
				for (o in e)
					if (s = t.call(e[o], o, e[o]), s === !1) break; return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ot, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? st.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (Q) return Q.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, s = e.length; n > i;) e[s++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[s++] = t[i++];
			return e.length = s, e
		},
		grep: function(e, t, n) {
			for (var i, s = [], o = 0, r = e.length, a = !n; r > o; o++) i = !t(e[o], o), i !== a && s.push(e[o]);
			return s
		},
		map: function(e, t, i) {
			var s, o = 0,
				r = e.length,
				a = n(e),
				l = [];
			if (a)
				for (; r > o; o++) s = t(e[o], o, i), null != s && l.push(s);
			else
				for (o in e) s = t(e[o], o, i), null != s && l.push(s);
			return K.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, s;
			return "string" == typeof t && (s = e[t], t = e, e = s), st.isFunction(e) ? (n = X.call(arguments, 2), i = function() {
				return e.apply(t || this, n.concat(X.call(arguments)))
			}, i.guid = e.guid = e.guid || st.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: nt
	}), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Z["[object " + t + "]"] = t.toLowerCase()
	});
	var dt = function(e) {
		function t(e, t, n, i) {
			var s, o, r, a, l, d, u, h, p, f;
			if ((t ? t.ownerDocument || t : O) !== $ && S(t), t = t || $, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
			if (!i && j) {
				if (11 !== a && (s = gt.exec(e)))
					if (r = s[1]) {
						if (9 === a) {
							if (o = t.getElementById(r), !o || !o.parentNode) return n;
							if (o.id === r) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && I(t, o) && o.id === r) return n.push(o), n
					} else {
						if (s[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
						if ((r = s[3]) && b.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
					}
				if (b.qsa && (!z || !z.test(e))) {
					if (h = u = L, p = t, f = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for (d = x(e), (u = t.getAttribute("id")) ? h = u.replace(vt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + D(d[l]);
						p = yt.test(e) && c(t.parentNode) || t, f = d.join(",")
					}
					if (f) try {
						return Q.apply(n, p.querySelectorAll(f)), n
					} catch (m) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return A(e.replace(lt, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[L] = !0, e
		}

		function s(e) {
			var t = $.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
		}

		function r(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function d(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
				})
			})
		}

		function c(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function u() {}

		function D(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function h(e, t, n) {
			var i = t.dir,
				s = n && "parentNode" === i,
				o = H++;
			return t.first ? function(t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || s) return e(t, n, o)
			} : function(t, n, r) {
				var a, l, d = [q, o];
				if (r) {
					for (; t = t[i];)
						if ((1 === t.nodeType || s) && e(t, n, r)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || s) {
							if (l = t[L] || (t[L] = {}), (a = l[i]) && a[0] === q && a[1] === o) return d[2] = a[2];
							if (l[i] = d, d[2] = e(t, n, r)) return !0
						}
			}
		}

		function p(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var s = e.length; s--;)
					if (!e[s](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function f(e, n, i) {
			for (var s = 0, o = n.length; o > s; s++) t(e, n[s], i);
			return i
		}

		function m(e, t, n, i, s) {
			for (var o, r = [], a = 0, l = e.length, d = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, s)) && (r.push(o), d && t.push(a));
			return r
		}

		function B(e, t, n, s, o, r) {
			return s && !s[L] && (s = B(s)), o && !o[L] && (o = B(o, r)), i(function(i, r, a, l) {
				var d, c, u, D = [],
					h = [],
					p = r.length,
					B = i || f(t || "*", a.nodeType ? [a] : a, []),
					g = !e || !i && t ? B : m(B, D, e, a, l),
					y = n ? o || (i ? e : p || s) ? [] : r : g;
				if (n && n(g, y, a, l), s)
					for (d = m(y, h), s(d, [], a, l), c = d.length; c--;)(u = d[c]) && (y[h[c]] = !(g[h[c]] = u));
				if (i) {
					if (o || e) {
						if (o) {
							for (d = [], c = y.length; c--;)(u = y[c]) && d.push(g[c] = u);
							o(null, y = [], d, l)
						}
						for (c = y.length; c--;)(u = y[c]) && (d = o ? et(i, u) : D[c]) > -1 && (i[d] = !(r[d] = u))
					}
				} else y = m(y === r ? y.splice(p, y.length) : y), o ? o(null, r, y, l) : Q.apply(r, y)
			})
		}

		function g(e) {
			for (var t, n, i, s = e.length, o = C.relative[e[0].type], r = o || C.relative[" "], a = o ? 1 : 0, l = h(function(e) {
					return e === t
				}, r, !0), d = h(function(e) {
					return et(t, e) > -1
				}, r, !0), c = [function(e, n, i) {
					var s = !o && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
					return t = null, s
				}]; s > a; a++)
				if (n = C.relative[e[a].type]) c = [h(p(c), n)];
				else {
					if (n = C.filter[e[a].type].apply(null, e[a].matches), n[L]) {
						for (i = ++a; s > i && !C.relative[e[i].type]; i++);
						return B(a > 1 && p(c), a > 1 && D(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(lt, "$1"), n, i > a && g(e.slice(a, i)), s > i && g(e = e.slice(i)), s > i && D(e))
					}
					c.push(n)
				}
			return p(c)
		}

		function y(e, n) {
			var s = n.length > 0,
				o = e.length > 0,
				r = function(i, r, a, l, d) {
					var c, u, D, h = 0,
						p = "0",
						f = i && [],
						B = [],
						g = k,
						y = i || o && C.find.TAG("*", d),
						v = q += null == g ? 1 : Math.random() || .1,
						b = y.length;
					for (d && (k = r !== $ && r); p !== b && null != (c = y[p]); p++) {
						if (o && c) {
							for (u = 0; D = e[u++];)
								if (D(c, r, a)) {
									l.push(c);
									break
								}
							d && (q = v)
						}
						s && ((c = !D && c) && h--, i && f.push(c))
					}
					if (h += p, s && p !== h) {
						for (u = 0; D = n[u++];) D(f, B, r, a);
						if (i) {
							if (h > 0)
								for (; p--;) f[p] || B[p] || (B[p] = K.call(l));
							B = m(B)
						}
						Q.apply(l, B), d && !i && B.length > 0 && h + n.length > 1 && t.uniqueSort(l)
					}
					return d && (q = v, k = g), f
				};
			return s ? i(r) : r
		}
		var v, b, C, w, _, x, E, A, k, T, M, S, $, F, j, z, N, P, I, L = "sizzle" + 1 * new Date,
			O = e.document,
			q = 0,
			H = 0,
			R = n(),
			V = n(),
			W = n(),
			J = function(e, t) {
				return e === t && (M = !0), 0
			},
			U = 1 << 31,
			G = {}.hasOwnProperty,
			X = [],
			K = X.pop,
			Y = X.push,
			Q = X.push,
			Z = X.slice,
			et = function(e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			nt = "[\\x20\\t\\r\\n\\f]",
			it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			st = it.replace("w", "w#"),
			ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + nt + "*\\]",
			rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
			at = new RegExp(nt + "+", "g"),
			lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
			dt = new RegExp("^" + nt + "*," + nt + "*"),
			ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
			ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
			Dt = new RegExp(rt),
			ht = new RegExp("^" + st + "$"),
			pt = {
				ID: new RegExp("^#(" + it + ")"),
				CLASS: new RegExp("^\\.(" + it + ")"),
				TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + ot),
				PSEUDO: new RegExp("^" + rt),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + tt + ")$", "i"),
				needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
			},
			ft = /^(?:input|select|textarea|button)$/i,
			mt = /^h\d$/i,
			Bt = /^[^{]+\{\s*\[native \w/,
			gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			yt = /[+~]/,
			vt = /'|\\/g,
			bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
			Ct = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			wt = function() {
				S()
			};
		try {
			Q.apply(X = Z.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
		} catch (_t) {
			Q = {
				apply: X.length ? function(e, t) {
					Y.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		b = t.support = {}, _ = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, S = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : O;
			return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, F = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), j = !_(i), b.attributes = s(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), b.getElementsByTagName = s(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), b.getElementsByClassName = Bt.test(i.getElementsByClassName), b.getById = s(function(e) {
				return F.appendChild(e).id = L, !i.getElementsByName || !i.getElementsByName(L).length
			}), b.getById ? (C.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && j) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, C.filter.ID = function(e) {
				var t = e.replace(bt, Ct);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete C.find.ID, C.filter.ID = function(e) {
				var t = e.replace(bt, Ct);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), C.find.TAG = b.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					s = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[s++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, C.find.CLASS = b.getElementsByClassName && function(e, t) {
				return j ? t.getElementsByClassName(e) : void 0
			}, N = [], z = [], (b.qsa = Bt.test(i.querySelectorAll)) && (s(function(e) {
				F.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + L + "-]").length || z.push("~="), e.querySelectorAll(":checked").length || z.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || z.push(".#.+[+~]")
			}), s(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
			})), (b.matchesSelector = Bt.test(P = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function(e) {
				b.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), N.push("!=", rt)
			}), z = z.length && new RegExp(z.join("|")), N = N.length && new RegExp(N.join("|")), t = Bt.test(F.compareDocumentPosition), I = t || Bt.test(F.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, J = t ? function(e, t) {
				if (e === t) return M = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === O && I(O, e) ? -1 : t === i || t.ownerDocument === O && I(O, t) ? 1 : T ? et(T, e) - et(T, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return M = !0, 0;
				var n, s = 0,
					o = e.parentNode,
					a = t.parentNode,
					l = [e],
					d = [t];
				if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : T ? et(T, e) - et(T, t) : 0;
				if (o === a) return r(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) d.unshift(n);
				for (; l[s] === d[s];) s++;
				return s ? r(l[s], d[s]) : l[s] === O ? -1 : d[s] === O ? 1 : 0
			}, i) : $
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== $ && S(e), n = n.replace(ut, "='$1']"), !(!b.matchesSelector || !j || N && N.test(n) || z && z.test(n))) try {
				var i = P.call(e, n);
				if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (s) {}
			return t(n, $, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== $ && S(e), I(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== $ && S(e);
			var n = C.attrHandle[t.toLowerCase()],
				i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
			return void 0 !== i ? i : b.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				s = 0;
			if (M = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort(J), M) {
				for (; t = e[s++];) t === e[s] && (i = n.push(s));
				for (; i--;) e.splice(n[i], 1)
			}
			return T = null, e
		}, w = t.getText = function(e) {
			var t, n = "",
				i = 0,
				s = e.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
				} else if (3 === s || 4 === s) return e.nodeValue
			} else
				for (; t = e[i++];) n += w(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: pt,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(bt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(bt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Dt.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(bt, Ct).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = R[e + " "];
					return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && R(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(s) {
						var o = t.attr(s, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, i, s) {
					var o = "nth" !== e.slice(0, 3),
						r = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === i && 0 === s ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var d, c, u, D, h, p, f = o !== r ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							B = a && t.nodeName.toLowerCase(),
							g = !l && !a;
						if (m) {
							if (o) {
								for (; f;) {
									for (u = t; u = u[f];)
										if (a ? u.nodeName.toLowerCase() === B : 1 === u.nodeType) return !1;
									p = f = "only" === e && !p && "nextSibling"
								}
								return !0
							}
							if (p = [r ? m.firstChild : m.lastChild], r && g) {
								for (c = m[L] || (m[L] = {}), d = c[e] || [], h = d[0] === q && d[1], D = d[0] === q && d[2], u = h && m.childNodes[h]; u = ++h && u && u[f] || (D = h = 0) || p.pop();)
									if (1 === u.nodeType && ++D && u === t) {
										c[e] = [q, h, D];
										break
									}
							} else if (g && (d = (t[L] || (t[L] = {}))[e]) && d[0] === q) D = d[1];
							else
								for (;
									(u = ++h && u && u[f] || (D = h = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== B : 1 !== u.nodeType) || !++D || (g && ((u[L] || (u[L] = {}))[e] = [q, D]), u !== t)););
							return D -= s, D === i || D % i === 0 && D / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var s, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[L] ? o(n) : o.length > 1 ? (s = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, s = o(e, n), r = s.length; r--;) i = et(e, s[r]), e[i] = !(t[i] = s[r])
					}) : function(e) {
						return o(e, 0, s)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						s = E(e.replace(lt, "$1"));
					return s[L] ? i(function(e, t, n, i) {
						for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
					}) : function(e, i, o) {
						return t[0] = e, s(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(bt, Ct),
						function(t) {
							return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(bt, Ct).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === F
				},
				focus: function(e) {
					return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return mt.test(e.nodeName)
				},
				input: function(e) {
					return ft.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: d(function() {
					return [0]
				}),
				last: d(function(e, t) {
					return [t - 1]
				}),
				eq: d(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: d(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: d(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: d(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: d(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (v in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[v] = a(v);
		for (v in {
				submit: !0,
				reset: !0
			}) C.pseudos[v] = l(v);
		return u.prototype = C.filters = C.pseudos, C.setFilters = new u, x = t.tokenize = function(e, n) {
			var i, s, o, r, a, l, d, c = V[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (a = e, l = [], d = C.preFilter; a;) {
				(!i || (s = dt.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = ct.exec(a)) && (i = s.shift(), o.push({
					value: i,
					type: s[0].replace(lt, " ")
				}), a = a.slice(i.length));
				for (r in C.filter) !(s = pt[r].exec(a)) || d[r] && !(s = d[r](s)) || (i = s.shift(), o.push({
					value: i,
					type: r,
					matches: s
				}), a = a.slice(i.length));
				if (!i) break
			}
			return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
		}, E = t.compile = function(e, t) {
			var n, i = [],
				s = [],
				o = W[e + " "];
			if (!o) {
				for (t || (t = x(e)), n = t.length; n--;) o = g(t[n]), o[L] ? i.push(o) : s.push(o);
				o = W(e, y(s, i)), o.selector = e
			}
			return o
		}, A = t.select = function(e, t, n, i) {
			var s, o, r, a, l, d = "function" == typeof e && e,
				u = !i && x(e = d.selector || e);
			if (n = n || [], 1 === u.length) {
				if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === t.nodeType && j && C.relative[o[1].type]) {
					if (t = (C.find.ID(r.matches[0].replace(bt, Ct), t) || [])[0], !t) return n;
					d && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (s = pt.needsContext.test(e) ? 0 : o.length; s-- && (r = o[s], !C.relative[a = r.type]);)
					if ((l = C.find[a]) && (i = l(r.matches[0].replace(bt, Ct), yt.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(s, 1), e = i.length && D(o), !e) return Q.apply(n, i), n;
						break
					}
			}
			return (d || E(e, u))(i, t, !j, n, yt.test(e) && c(t.parentNode) || t), n
		}, b.sortStable = L.split("").sort(J).join("") === L, b.detectDuplicates = !!M, S(), b.sortDetached = s(function(e) {
			return 1 & e.compareDocumentPosition($.createElement("div"))
		}), s(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), b.attributes && s(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), s(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(tt, function(e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	st.find = dt, st.expr = dt.selectors, st.expr[":"] = st.expr.pseudos, st.unique = dt.uniqueSort, st.text = dt.getText, st.isXMLDoc = dt.isXML, st.contains = dt.contains;
	var ct = st.expr.match.needsContext,
		ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Dt = /^.[^:#\[\.,]*$/;
	st.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? st.find.matchesSelector(i, e) ? [i] : [] : st.find.matches(e, st.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, st.fn.extend({
		find: function(e) {
			var t, n = [],
				i = this,
				s = i.length;
			if ("string" != typeof e) return this.pushStack(st(e).filter(function() {
				for (t = 0; s > t; t++)
					if (st.contains(i[t], this)) return !0
			}));
			for (t = 0; s > t; t++) st.find(e, i[t], n);
			return n = this.pushStack(s > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && ct.test(e) ? st(e) : e || [], !1).length
		}
	});
	var ht, pt = e.document,
		ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		mt = st.fn.init = function(e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof st ? t[0] : t, st.merge(this, st.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)), ut.test(n[1]) && st.isPlainObject(t))
						for (n in t) st.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = pt.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return ht.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = pt, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(st) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
		};
	mt.prototype = st.fn, ht = st(pt);
	var Bt = /^(?:parents|prev(?:Until|All))/,
		gt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	st.extend({
		dir: function(e, t, n) {
			for (var i = [], s = e[t]; s && 9 !== s.nodeType && (void 0 === n || 1 !== s.nodeType || !st(s).is(n));) 1 === s.nodeType && i.push(s), s = s[t];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), st.fn.extend({
		has: function(e) {
			var t, n = st(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (st.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, s = this.length, o = [], r = ct.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; s > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && st.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? st.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(st.unique(st.merge(this.get(), st(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), st.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return st.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return st.dir(e, "parentNode", n)
		},
		next: function(e) {
			return s(e, "nextSibling")
		},
		prev: function(e) {
			return s(e, "previousSibling")
		},
		nextAll: function(e) {
			return st.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return st.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return st.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return st.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return st.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return st.sibling(e.firstChild)
		},
		contents: function(e) {
			return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : st.merge([], e.childNodes)
		}
	}, function(e, t) {
		st.fn[e] = function(n, i) {
			var s = st.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = st.filter(i, s)), this.length > 1 && (gt[e] || (s = st.unique(s)), Bt.test(e) && (s = s.reverse())), this.pushStack(s)
		}
	});
	var yt = /\S+/g,
		vt = {};
	st.Callbacks = function(e) {
		e = "string" == typeof e ? vt[e] || o(e) : st.extend({}, e);
		var t, n, i, s, r, a, l = [],
			d = !e.once && [],
			c = function(o) {
				for (n = e.memory && o, i = !0, r = a || 0, a = 0, s = l.length, t = !0; l && s > r; r++)
					if (l[r].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (d ? d.length && c(d.shift()) : n ? l = [] : u.disable())
			},
			u = {
				add: function() {
					if (l) {
						var i = l.length;
						! function o(t) {
							st.each(t, function(t, n) {
								var i = st.type(n);
								"function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), t ? s = l.length : n && (a = i, c(n))
					}
					return this
				},
				remove: function() {
					return l && st.each(arguments, function(e, n) {
						for (var i;
							(i = st.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (s >= i && s--, r >= i && r--)
					}), this
				},
				has: function(e) {
					return e ? st.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], s = 0, this
				},
				disable: function() {
					return l = d = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return d = void 0, n || u.disable(), this
				},
				locked: function() {
					return !d
				},
				fireWith: function(e, n) {
					return !l || i && !d || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? d.push(n) : c(n)), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return u
	}, st.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", st.Callbacks("once memory"), "resolved"],
					["reject", "fail", st.Callbacks("once memory"), "rejected"],
					["notify", "progress", st.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return st.Deferred(function(n) {
							st.each(t, function(t, o) {
								var r = st.isFunction(e[t]) && e[t];
								s[o[1]](function() {
									var e = r && r.apply(this, arguments);
									e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? st.extend(e, i) : i
					}
				},
				s = {};
			return i.pipe = i.then, st.each(t, function(e, o) {
				var r = o[2],
					a = o[3];
				i[o[1]] = r.add, a && r.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
					return s[o[0] + "With"](this === s ? i : this, arguments), this
				}, s[o[0] + "With"] = r.fireWith
			}), i.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var t, n, i, s = 0,
				o = X.call(arguments),
				r = o.length,
				a = 1 !== r || e && st.isFunction(e.promise) ? r : 0,
				l = 1 === a ? e : st.Deferred(),
				d = function(e, n, i) {
					return function(s) {
						n[e] = this, i[e] = arguments.length > 1 ? X.call(arguments) : s, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if (r > 1)
				for (t = new Array(r), n = new Array(r), i = new Array(r); r > s; s++) o[s] && st.isFunction(o[s].promise) ? o[s].promise().done(d(s, i, o)).fail(l.reject).progress(d(s, n, t)) : --a;
			return a || l.resolveWith(i, o), l.promise()
		}
	});
	var bt;
	st.fn.ready = function(e) {
		return st.ready.promise().done(e), this
	}, st.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? st.readyWait++ : st.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--st.readyWait : !st.isReady) {
				if (!pt.body) return setTimeout(st.ready);
				st.isReady = !0, e !== !0 && --st.readyWait > 0 || (bt.resolveWith(pt, [st]), st.fn.triggerHandler && (st(pt).triggerHandler("ready"), st(pt).off("ready")))
			}
		}
	}), st.ready.promise = function(t) {
		if (!bt)
			if (bt = st.Deferred(), "complete" === pt.readyState) setTimeout(st.ready);
			else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
		else {
			pt.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
			var n = !1;
			try {
				n = null == e.frameElement && pt.documentElement
			} catch (i) {}
			n && n.doScroll && ! function s() {
				if (!st.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(s, 50)
					}
					r(), st.ready()
				}
			}()
		}
		return bt.promise(t)
	};
	var Ct, wt = "undefined";
	for (Ct in st(nt)) break;
	nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, st(function() {
			var e, t, n, i;
			n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function() {
			var e = pt.createElement("div");
			if (null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					nt.deleteExpando = !1
				}
			}
			e = null
		}(), st.acceptData = function(e) {
			var t = st.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		xt = /([A-Z])/g;
	st.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando], !!e && !d(e)
		},
		data: function(e, t, n) {
			return c(e, t, n)
		},
		removeData: function(e, t) {
			return u(e, t)
		},
		_data: function(e, t, n) {
			return c(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return u(e, t, !0)
		}
	}), st.fn.extend({
		data: function(e, t) {
			var n, i, s, o = this[0],
				r = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (s = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
					for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = st.camelCase(i.slice(5)), l(o, i, s[i])));
					st._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				st.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				st.data(this, e, t)
			}) : o ? l(o, e, st.data(o, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				st.removeData(this, e)
			})
		}
	}), st.extend({
		queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = st._data(e, t), n && (!i || st.isArray(n) ? i = st._data(e, t, st.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = st.queue(e, t),
				i = n.length,
				s = n.shift(),
				o = st._queueHooks(e, t),
				r = function() {
					st.dequeue(e, t)
				};
			"inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, r, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return st._data(e, n) || st._data(e, n, {
				empty: st.Callbacks("once memory").add(function() {
					st._removeData(e, t + "queue"), st._removeData(e, n)
				})
			})
		}
	}), st.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? st.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = st.queue(this, e, t);
				st._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && st.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				st.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				s = st.Deferred(),
				o = this,
				r = this.length,
				a = function() {
					--i || s.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = st._data(o[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
			return a(), s.promise(t)
		}
	});
	var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		At = ["Top", "Right", "Bottom", "Left"],
		kt = function(e, t) {
			return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
		},
		Tt = st.access = function(e, t, n, i, s, o, r) {
			var a = 0,
				l = e.length,
				d = null == n;
			if ("object" === st.type(n)) {
				s = !0;
				for (a in n) st.access(e, t, a, n[a], !0, o, r)
			} else if (void 0 !== i && (s = !0, st.isFunction(i) || (r = !0), d && (r ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
					return d.call(st(e), n)
				})), t))
				for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
			return s ? e : d ? t.call(e) : l ? t(e[0], n) : o
		},
		Mt = /^(?:checkbox|radio)$/i;
	! function() {
		var e = pt.createElement("input"),
			t = pt.createElement("div"),
			n = pt.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				nt.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == nt.deleteExpando) {
			nt.deleteExpando = !0;
			try {
				delete t.test
			} catch (i) {
				nt.deleteExpando = !1
			}
		}
	}(),
	function() {
		var t, n, i = pt.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var St = /^(?:input|select|textarea)$/i,
		$t = /^key/,
		Ft = /^(?:mouse|pointer|contextmenu)|click/,
		jt = /^(?:focusinfocus|focusoutblur)$/,
		zt = /^([^.]*)(?:\.(.+)|)$/;
	st.event = {
		global: {},
		add: function(e, t, n, i, s) {
			var o, r, a, l, d, c, u, D, h, p, f, m = st._data(e);
			if (m) {
				for (n.handler && (l = n, n = l.handler, s = l.selector), n.guid || (n.guid = st.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
						return typeof st === wt || e && st.event.triggered === e.type ? void 0 : st.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(yt) || [""], a = t.length; a--;) o = zt.exec(t[a]) || [], h = f = o[1], p = (o[2] || "").split(".").sort(), h && (d = st.event.special[h] || {}, h = (s ? d.delegateType : d.bindType) || h, d = st.event.special[h] || {}, u = st.extend({
					type: h,
					origType: f,
					data: i,
					handler: n,
					guid: n.guid,
					selector: s,
					needsContext: s && st.expr.match.needsContext.test(s),
					namespace: p.join(".")
				}, l), (D = r[h]) || (D = r[h] = [], D.delegateCount = 0, d.setup && d.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? D.splice(D.delegateCount++, 0, u) : D.push(u), st.event.global[h] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, s) {
			var o, r, a, l, d, c, u, D, h, p, f, m = st.hasData(e) && st._data(e);
			if (m && (c = m.events)) {
				for (t = (t || "").match(yt) || [""], d = t.length; d--;)
					if (a = zt.exec(t[d]) || [], h = f = a[1], p = (a[2] || "").split(".").sort(), h) {
						for (u = st.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, D = c[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = D.length; o--;) r = D[o], !s && f !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (D.splice(o, 1), r.selector && D.delegateCount--, u.remove && u.remove.call(e, r));
						l && !D.length && (u.teardown && u.teardown.call(e, p, m.handle) !== !1 || st.removeEvent(e, h, m.handle), delete c[h])
					} else
						for (h in c) st.event.remove(e, h + t[d], n, i, !0);
				st.isEmptyObject(c) && (delete m.handle, st._removeData(e, "events"))
			}
		},
		trigger: function(t, n, i, s) {
			var o, r, a, l, d, c, u, D = [i || pt],
				h = tt.call(t, "type") ? t.type : t,
				p = tt.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !jt.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), r = h.indexOf(":") < 0 && "on" + h, t = t[st.expando] ? t : new st.Event(h, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : st.makeArray(n, [t]), d = st.event.special[h] || {}, s || !d.trigger || d.trigger.apply(i, n) !== !1)) {
				if (!s && !d.noBubble && !st.isWindow(i)) {
					for (l = d.delegateType || h, jt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) D.push(a), c = a;
					c === (i.ownerDocument || pt) && D.push(c.defaultView || c.parentWindow || e)
				}
				for (u = 0;
					(a = D[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : d.bindType || h, o = (st._data(a, "events") || {})[t.type] && st._data(a, "handle"), o && o.apply(a, n), o = r && a[r], o && o.apply && st.acceptData(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
				if (t.type = h, !s && !t.isDefaultPrevented() && (!d._default || d._default.apply(D.pop(), n) === !1) && st.acceptData(i) && r && i[h] && !st.isWindow(i)) {
					c = i[r], c && (i[r] = null), st.event.triggered = h;
					try {
						i[h]()
					} catch (f) {}
					st.event.triggered = void 0, c && (i[r] = c)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = st.event.fix(e);
			var t, n, i, s, o, r = [],
				a = X.call(arguments),
				l = (st._data(this, "events") || {})[e.type] || [],
				d = st.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
				for (r = st.event.handlers.call(this, e, l), t = 0;
					(s = r[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = s.elem, o = 0;
						(i = s.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((st.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return d.postDispatch && d.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, s, o, r = [],
				a = t.delegateCount,
				l = e.target;
			if (a && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (s = [], o = 0; a > o; o++) i = t[o], n = i.selector + " ", void 0 === s[n] && (s[n] = i.needsContext ? st(n, this).index(l) >= 0 : st.find(n, this, null, [l]).length), s[n] && s.push(i);
						s.length && r.push({
							elem: l,
							handlers: s
						})
					}
			return a < t.length && r.push({
				elem: this,
				handlers: t.slice(a)
			}), r
		},
		fix: function(e) {
			if (e[st.expando]) return e;
			var t, n, i, s = e.type,
				o = e,
				r = this.fixHooks[s];
			for (r || (this.fixHooks[s] = r = Ft.test(s) ? this.mouseHooks : $t.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new st.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || pt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, s, o = t.button,
					r = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pt, s = i.documentElement, n = i.body, e.pageX = t.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== p() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === p() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return st.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var s = st.extend(new st.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? st.event.trigger(s, null, t) : st.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
		}
	}, st.removeEvent = pt.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === wt && (e[i] = null), e.detachEvent(i, n))
	}, st.Event = function(e, t) {
		return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? D : h) : this.type = e, t && st.extend(this, t), this.timeStamp = e && e.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(e, t)
	}, st.Event.prototype = {
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = D, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = D, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = D, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, st.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		st.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					s = e.relatedTarget,
					o = e.handleObj;
				return (!s || s !== i && !st.contains(i, s)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), nt.submitBubbles || (st.event.special.submit = {
		setup: function() {
			return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = st.nodeName(t, "input") || st.nodeName(t, "button") ? t.form : void 0;
				n && !st._data(n, "submitBubbles") && (st.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), st._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
		}
	}), nt.changeBubbles || (st.event.special.change = {
		setup: function() {
			return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), st.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, e, !0)
			})), !1) : void st.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				St.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
				}), st._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return st.event.remove(this, "._change"), !St.test(this.nodeName)
		}
	}), nt.focusinBubbles || st.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			st.event.simulate(t, e.target, st.event.fix(e), !0)
		};
		st.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					s = st._data(i, t);
				s || i.addEventListener(e, n, !0), st._data(i, t, (s || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					s = st._data(i, t) - 1;
				s ? st._data(i, t, s) : (i.removeEventListener(e, n, !0), st._removeData(i, t))
			}
		}
	}), st.fn.extend({
		on: function(e, t, n, i, s) {
			var o, r;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], s);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
			else if (!i) return this;
			return 1 === s && (r = i, i = function(e) {
				return st().off(e), r.apply(this, arguments)
			}, i.guid = r.guid || (r.guid = st.guid++)), this.each(function() {
				st.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, s;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (s in e) this.off(s, t, e[s]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
				st.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				st.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? st.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Nt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Pt = / jQuery\d+="(?:null|\d+)"/g,
		It = new RegExp("<(?:" + Nt + ")[\\s/>]", "i"),
		Lt = /^\s+/,
		Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		qt = /<([\w:]+)/,
		Ht = /<tbody/i,
		Rt = /<|&#?\w+;/,
		Vt = /<(?:script|style|link)/i,
		Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Jt = /^$|\/(?:java|ecma)script/i,
		Ut = /^true\/(.*)/,
		Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Xt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Kt = f(pt),
		Yt = Kt.appendChild(pt.createElement("div"));
	Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, st.extend({
		clone: function(e, t, n) {
			var i, s, o, r, a, l = st.contains(e.ownerDocument, e);
			if (nt.html5Clone || st.isXMLDoc(e) || !It.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Yt.innerHTML = e.outerHTML, Yt.removeChild(o = Yt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e)))
				for (i = m(o), a = m(e), r = 0; null != (s = a[r]); ++r) i[r] && w(s, i[r]);
			if (t)
				if (n)
					for (a = a || m(e), i = i || m(o), r = 0; null != (s = a[r]); r++) C(s, i[r]);
				else C(e, o);
			return i = m(o, "script"), i.length > 0 && b(i, !l && m(e, "script")), i = a = s = null, o
		},
		buildFragment: function(e, t, n, i) {
			for (var s, o, r, a, l, d, c, u = e.length, D = f(t), h = [], p = 0; u > p; p++)
				if (o = e[p], o || 0 === o)
					if ("object" === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
					else if (Rt.test(o)) {
				for (a = a || D.appendChild(t.createElement("div")), l = (qt.exec(o) || ["", ""])[1].toLowerCase(), c = Xt[l] || Xt._default, a.innerHTML = c[1] + o.replace(Ot, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
				if (!nt.leadingWhitespace && Lt.test(o) && h.push(t.createTextNode(Lt.exec(o)[0])), !nt.tbody)
					for (o = "table" !== l || Ht.test(o) ? "<table>" !== c[1] || Ht.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) st.nodeName(d = o.childNodes[s], "tbody") && !d.childNodes.length && o.removeChild(d);
				for (st.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = D.lastChild
			} else h.push(t.createTextNode(o));
			for (a && D.removeChild(a), nt.appendChecked || st.grep(m(h, "input"), B), p = 0; o = h[p++];)
				if ((!i || -1 === st.inArray(o, i)) && (r = st.contains(o.ownerDocument, o), a = m(D.appendChild(o), "script"), r && b(a), n))
					for (s = 0; o = a[s++];) Jt.test(o.type || "") && n.push(o);
			return a = null, D
		},
		cleanData: function(e, t) {
			for (var n, i, s, o, r = 0, a = st.expando, l = st.cache, d = nt.deleteExpando, c = st.event.special; null != (n = e[r]); r++)
				if ((t || st.acceptData(n)) && (s = n[a], o = s && l[s])) {
					if (o.events)
						for (i in o.events) c[i] ? st.event.remove(n, i) : st.removeEvent(n, i, o.handle);
					l[s] && (delete l[s], d ? delete n[a] : typeof n.removeAttribute !== wt ? n.removeAttribute(a) : n[a] = null, G.push(s))
				}
		}
	}), st.fn.extend({
		text: function(e) {
			return Tt(this, function(e) {
				return void 0 === e ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = g(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = g(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? st.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || st.cleanData(m(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && b(m(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && st.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && st.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return st.clone(this, e, t)
			})
		},
		html: function(e) {
			return Tt(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
				if (!("string" != typeof e || Vt.test(e) || !nt.htmlSerialize && It.test(e) || !nt.leadingWhitespace && Lt.test(e) || Xt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Ot, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (st.cleanData(m(t, !1)), t.innerHTML = e);
						t = 0
					} catch (s) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, st.cleanData(m(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = K.apply([], e);
			var n, i, s, o, r, a, l = 0,
				d = this.length,
				c = this,
				u = d - 1,
				D = e[0],
				h = st.isFunction(D);
			if (h || d > 1 && "string" == typeof D && !nt.checkClone && Wt.test(D)) return this.each(function(n) {
				var i = c.eq(n);
				h && (e[0] = D.call(this, n, i.html())), i.domManip(e, t)
			});
			if (d && (a = st.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
				for (o = st.map(m(a, "script"), y), s = o.length; d > l; l++) i = a, l !== u && (i = st.clone(i, !0, !0), s && st.merge(o, m(i, "script"))), t.call(this[l], i, l);
				if (s)
					for (r = o[o.length - 1].ownerDocument, st.map(o, v), l = 0; s > l; l++) i = o[l], Jt.test(i.type || "") && !st._data(i, "globalEval") && st.contains(r, i) && (i.src ? st._evalUrl && st._evalUrl(i.src) : st.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
				a = n = null
			}
			return this
		}
	}), st.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		st.fn[e] = function(e) {
			for (var n, i = 0, s = [], o = st(e), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), st(o[i])[t](n), Y.apply(s, n.get());
			return this.pushStack(s)
		}
	});
	var Qt, Zt = {};
	! function() {
		var e;
		nt.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = pt.getElementsByTagName("body")[0], n && n.style ? (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var en, tn, nn = /^margin/,
		sn = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
		on = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (en = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		}, tn = function(e, t, n) {
			var i, s, o, r, a = e.style;
			return n = n || en(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== r || st.contains(e.ownerDocument, e) || (r = st.style(e, t)), sn.test(r) && nn.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 === r ? r : r + ""
		}) : pt.documentElement.currentStyle && (en = function(e) {
			return e.currentStyle
		}, tn = function(e, t, n) {
			var i, s, o, r, a = e.style;
			return n = n || en(e), r = n ? n[t] : void 0, null == r && a && a[t] && (r = a[t]), sn.test(r) && !on.test(t) && (i = a.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : r, r = a.pixelLeft + "px", a.left = i, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
		}),
		function() {
			function t() {
				var t, n, i, s;
				n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
					width: "4px"
				}).width, s = t.appendChild(pt.createElement("div")), s.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight), t.removeChild(s)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = t.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), n.removeChild(i))
			}
			var n, i, s, o, r, a, l;
			n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = n.getElementsByTagName("a")[0], i = s && s.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, st.extend(nt, {
				reliableHiddenOffsets: function() {
					return null == a && t(), a
				},
				boxSizingReliable: function() {
					return null == r && t(), r
				},
				pixelPosition: function() {
					return null == o && t(), o
				},
				reliableMarginRight: function() {
					return null == l && t(), l
				}
			}))
		}(), st.swap = function(e, t, n, i) {
			var s, o, r = {};
			for (o in t) r[o] = e.style[o], e.style[o] = t[o];
			s = n.apply(e, i || []);
			for (o in t) e.style[o] = r[o];
			return s
		};
	var rn = /alpha\([^)]*\)/i,
		an = /opacity\s*=\s*([^)]*)/,
		ln = /^(none|table(?!-c[ea]).+)/,
		dn = new RegExp("^(" + Et + ")(.*)$", "i"),
		cn = new RegExp("^([+-])=(" + Et + ")", "i"),
		un = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Dn = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		hn = ["Webkit", "O", "Moz", "ms"];
	st.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = tn(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": nt.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var s, o, r, a = st.camelCase(t),
					l = e.style;
				if (t = st.cssProps[a] || (st.cssProps[a] = A(l, a)), r = st.cssHooks[t] || st.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : l[t];
				if (o = typeof n, "string" === o && (s = cn.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(st.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || st.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
					l[t] = n
				} catch (d) {}
			}
		},
		css: function(e, t, n, i) {
			var s, o, r, a = st.camelCase(t);
			return t = st.cssProps[a] || (st.cssProps[a] = A(e.style, a)), r = st.cssHooks[t] || st.cssHooks[a], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in Dn && (o = Dn[t]), "" === n || n ? (s = parseFloat(o), n === !0 || st.isNumeric(s) ? s || 0 : o) : o
		}
	}), st.each(["height", "width"], function(e, t) {
		st.cssHooks[t] = {
			get: function(e, n, i) {
				return n ? ln.test(st.css(e, "display")) && 0 === e.offsetWidth ? st.swap(e, un, function() {
					return S(e, t, i)
				}) : S(e, t, i) : void 0
			},
			set: function(e, n, i) {
				var s = i && en(e);
				return T(e, n, i ? M(e, t, i, nt.boxSizing && "border-box" === st.css(e, "boxSizing", !1, s), s) : 0)
			}
		}
	}), nt.opacity || (st.cssHooks.opacity = {
		get: function(e, t) {
			return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				s = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === st.trim(o.replace(rn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rn.test(o) ? o.replace(rn, s) : o + " " + s)
		}
	}), st.cssHooks.marginRight = E(nt.reliableMarginRight, function(e, t) {
		return t ? st.swap(e, {
			display: "inline-block"
		}, tn, [e, "marginRight"]) : void 0
	}), st.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		st.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + At[i] + t] = o[i] || o[i - 2] || o[0];
				return s
			}
		}, nn.test(e) || (st.cssHooks[e + t].set = T)
	}), st.fn.extend({
		css: function(e, t) {
			return Tt(this, function(e, t, n) {
				var i, s, o = {},
					r = 0;
				if (st.isArray(t)) {
					for (i = en(e), s = t.length; s > r; r++) o[t[r]] = st.css(e, t[r], !1, i);
					return o
				}
				return void 0 !== n ? st.style(e, t, n) : st.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				kt(this) ? st(this).show() : st(this).hide()
			})
		}
	}), st.Tween = $, $.prototype = {
		constructor: $,
		init: function(e, t, n, i, s, o) {
			this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (st.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = $.propHooks[this.prop];
			return e && e.get ? e.get(this) : $.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = $.propHooks[this.prop];
			return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
		}
	}, $.prototype.init.prototype = $.prototype, $.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, st.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, st.fx = $.prototype.init, st.fx.step = {};
	var pn, fn, mn = /^(?:toggle|show|hide)$/,
		Bn = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
		gn = /queueHooks$/,
		yn = [N],
		vn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					s = Bn.exec(t),
					o = s && s[3] || (st.cssNumber[e] ? "" : "px"),
					r = (st.cssNumber[e] || "px" !== o && +i) && Bn.exec(st.css(n.elem, e)),
					a = 1,
					l = 20;
				if (r && r[3] !== o) {
					o = o || r[3], s = s || [], r = +i || 1;
					do a = a || ".5", r /= a, st.style(n.elem, e, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
			}]
		};
	st.Animation = st.extend(I, {
			tweener: function(e, t) {
				st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, s = e.length; s > i; i++) n = e[i], vn[n] = vn[n] || [], vn[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? yn.unshift(e) : yn.push(e)
			}
		}), st.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? st.extend({}, e) : {
				complete: n || !n && t || st.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !st.isFunction(t) && t
			};
			return i.duration = st.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in st.fx.speeds ? st.fx.speeds[i.duration] : st.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				st.isFunction(i.old) && i.old.call(this), i.queue && st.dequeue(this, i.queue)
			}, i
		}, st.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(kt).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var s = st.isEmptyObject(e),
					o = st.speed(t, n, i),
					r = function() {
						var t = I(this, st.extend({}, e), o);
						(s || st._data(this, "finish")) && t.stop(!0)
					};
				return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						s = null != e && e + "queueHooks",
						o = st.timers,
						r = st._data(this);
					if (s) r[s] && r[s].stop && i(r[s]);
					else
						for (s in r) r[s] && r[s].stop && gn.test(s) && i(r[s]);
					for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(n), t = !1, o.splice(s, 1));
					(t || !n) && st.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = st._data(this),
						i = n[e + "queue"],
						s = n[e + "queueHooks"],
						o = st.timers,
						r = i ? i.length : 0;
					for (n.finish = !0, st.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), st.each(["toggle", "show", "hide"], function(e, t) {
			var n = st.fn[t];
			st.fn[t] = function(e, i, s) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, s)
			}
		}), st.each({
			slideDown: j("show"),
			slideUp: j("hide"),
			slideToggle: j("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			st.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), st.timers = [], st.fx.tick = function() {
			var e, t = st.timers,
				n = 0;
			for (pn = st.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || st.fx.stop(), pn = void 0
		}, st.fx.timer = function(e) {
			st.timers.push(e), e() ? st.fx.start() : st.timers.pop()
		}, st.fx.interval = 13, st.fx.start = function() {
			fn || (fn = setInterval(st.fx.tick, st.fx.interval))
		}, st.fx.stop = function() {
			clearInterval(fn), fn = null
		}, st.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, st.fn.delay = function(e, t) {
			return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var e, t, n, i, s;
			t = pt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pt.createElement("select"), s = n.appendChild(pt.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = s.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !s.disabled, e = pt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
		}();
	var bn = /\r/g;
	st.fn.extend({
		val: function(e) {
			var t, n, i, s = this[0]; {
				if (arguments.length) return i = st.isFunction(e), this.each(function(n) {
					var s;
					1 === this.nodeType && (s = i ? e.call(this, n, st(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function(e) {
						return null == e ? "" : e + ""
					})), t = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
				});
				if (s) return t = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(bn, "") : null == n ? "" : n)
			}
		}
	}), st.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = st.find.attr(e, "value");
					return null != t ? t : st.trim(st.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
						if (n = i[l], !(!n.selected && l !== s || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
							if (t = st(n).val(), o) return t;
							r.push(t)
						}
					return r
				},
				set: function(e, t) {
					for (var n, i, s = e.options, o = st.makeArray(t), r = s.length; r--;)
						if (i = s[r], st.inArray(st.valHooks.option.get(i), o) >= 0) try {
							i.selected = n = !0
						} catch (a) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (e.selectedIndex = -1), s
				}
			}
		}
	}), st.each(["radio", "checkbox"], function() {
		st.valHooks[this] = {
			set: function(e, t) {
				return st.isArray(t) ? e.checked = st.inArray(st(e).val(), t) >= 0 : void 0
			}
		}, nt.checkOn || (st.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Cn, wn, _n = st.expr.attrHandle,
		xn = /^(?:checked|selected)$/i,
		En = nt.getSetAttribute,
		An = nt.input;
	st.fn.extend({
		attr: function(e, t) {
			return Tt(this, st.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				st.removeAttr(this, e)
			})
		}
	}), st.extend({
		attr: function(e, t, n) {
			var i, s, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === wt ? st.prop(e, t, n) : (1 === o && st.isXMLDoc(e) || (t = t.toLowerCase(), i = st.attrHooks[t] || (st.expr.match.bool.test(t) ? wn : Cn)), void 0 === n ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = st.find.attr(e, t), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(e, n, t)) ? s : (e.setAttribute(t, n + ""), n) : void st.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, i, s = 0,
				o = t && t.match(yt);
			if (o && 1 === e.nodeType)
				for (; n = o[s++];) i = st.propFix[n] || n, st.expr.match.bool.test(n) ? An && En || !xn.test(n) ? e[i] = !1 : e[st.camelCase("default-" + n)] = e[i] = !1 : st.attr(e, n, ""), e.removeAttribute(En ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!nt.radioValue && "radio" === t && st.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), wn = {
		set: function(e, t, n) {
			return t === !1 ? st.removeAttr(e, n) : An && En || !xn.test(n) ? e.setAttribute(!En && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, st.each(st.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = _n[t] || st.find.attr;
		_n[t] = An && En || !xn.test(t) ? function(e, t, i) {
			var s, o;
			return i || (o = _n[t], _n[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, _n[t] = o), s
		} : function(e, t, n) {
			return n ? void 0 : e[st.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), An && En || (st.attrHooks.value = {
		set: function(e, t, n) {
			return st.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
		}
	}), En || (Cn = {
		set: function(e, t, n) {
			var i = e.getAttributeNode(n);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, _n.id = _n.name = _n.coords = function(e, t, n) {
		var i;
		return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
	}, st.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		},
		set: Cn.set
	}, st.attrHooks.contenteditable = {
		set: function(e, t, n) {
			Cn.set(e, "" === t ? !1 : t, n)
		}
	}, st.each(["width", "height"], function(e, t) {
		st.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), nt.style || (st.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var kn = /^(?:input|select|textarea|button|object)$/i,
		Tn = /^(?:a|area)$/i;
	st.fn.extend({
		prop: function(e, t) {
			return Tt(this, st.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = st.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), st.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var i, s, o, r = e.nodeType;
			if (e && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !st.isXMLDoc(e), o && (t = st.propFix[t] || t, s = st.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = st.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : kn.test(e.nodeName) || Tn.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), nt.hrefNormalized || st.each(["href", "src"], function(e, t) {
		st.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), nt.optSelected || (st.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		st.propFix[this.toLowerCase()] = this
	}), nt.enctype || (st.propFix.enctype = "encoding");
	var Mn = /[\t\r\n\f]/g;
	st.fn.extend({
		addClass: function(e) {
			var t, n, i, s, o, r, a = 0,
				l = this.length,
				d = "string" == typeof e && e;
			if (st.isFunction(e)) return this.each(function(t) {
				st(this).addClass(e.call(this, t, this.className))
			});
			if (d)
				for (t = (e || "").match(yt) || []; l > a; a++)
					if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : " ")) {
						for (o = 0; s = t[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
						r = st.trim(i), n.className !== r && (n.className = r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, s, o, r, a = 0,
				l = this.length,
				d = 0 === arguments.length || "string" == typeof e && e;
			if (st.isFunction(e)) return this.each(function(t) {
				st(this).removeClass(e.call(this, t, this.className))
			});
			if (d)
				for (t = (e || "").match(yt) || []; l > a; a++)
					if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : "")) {
						for (o = 0; s = t[o++];)
							for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
						r = e ? st.trim(i) : "", n.className !== r && (n.className = r)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(st.isFunction(e) ? function(n) {
				st(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var t, i = 0, s = st(this), o = e.match(yt) || []; t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
				else(n === wt || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : st._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mn, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		st.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), st.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Sn = st.now(),
		$n = /\?/,
		Fn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	st.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null,
			s = st.trim(t + "");
		return s && !st.trim(s.replace(Fn, function(e, t, s, o) {
			return n && t && (i = 0), 0 === i ? e : (n = s || t, i += !o - !s, "")
		})) ? Function("return " + s)() : st.error("Invalid JSON: " + t)
	}, st.parseXML = function(t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (s) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + t), n
	};
	var jn, zn, Nn = /#.*$/,
		Pn = /([?&])_=[^&]*/,
		In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ln = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		On = /^(?:GET|HEAD)$/,
		qn = /^\/\//,
		Hn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Rn = {},
		Vn = {},
		Wn = "*/".concat("*");
	try {
		zn = location.href
	} catch (Jn) {
		zn = pt.createElement("a"), zn.href = "", zn = zn.href
	}
	jn = Hn.exec(zn.toLowerCase()) || [], st.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: zn,
			type: "GET",
			isLocal: Ln.test(jn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Wn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": st.parseJSON,
				"text xml": st.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? q(q(e, st.ajaxSettings), t) : q(st.ajaxSettings, e)
		},
		ajaxPrefilter: L(Rn),
		ajaxTransport: L(Vn),
		ajax: function(e, t) {
			function n(e, t, n, i) {
				var s, c, B, g, v, C = t;
				2 !== y && (y = 2, a && clearTimeout(a), d = void 0, r = i || "", b.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, n && (g = H(u, b, n)), g = R(u, g, b, s), s ? (u.ifModified && (v = b.getResponseHeader("Last-Modified"), v && (st.lastModified[o] = v), v = b.getResponseHeader("etag"), v && (st.etag[o] = v)), 204 === e || "HEAD" === u.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = g.state, c = g.data, B = g.error, s = !B)) : (B = C, (e || !C) && (C = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || C) + "", s ? p.resolveWith(D, [c, C, b]) : p.rejectWith(D, [b, C, B]), b.statusCode(m), m = void 0, l && h.trigger(s ? "ajaxSuccess" : "ajaxError", [b, u, s ? c : B]), f.fireWith(D, [b, C]), l && (h.trigger("ajaxComplete", [b, u]), --st.active || st.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, s, o, r, a, l, d, c, u = st.ajaxSetup({}, t),
				D = u.context || u,
				h = u.context && (D.nodeType || D.jquery) ? st(D) : st.event,
				p = st.Deferred(),
				f = st.Callbacks("once memory"),
				m = u.statusCode || {},
				B = {},
				g = {},
				y = 0,
				v = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === y) {
							if (!c)
								for (c = {}; t = In.exec(r);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === y ? r : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return y || (e = g[n] = g[n] || e, B[e] = t), this
					},
					overrideMimeType: function(e) {
						return y || (u.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > y)
								for (t in e) m[t] = [m[t], e[t]];
							else b.always(e[b.status]);
						return this
					},
					abort: function(e) {
						var t = e || v;
						return d && d.abort(t), n(0, t), this
					}
				};
			if (p.promise(b).complete = f.add, b.success = b.done, b.error = b.fail, u.url = ((e || u.url || zn) + "").replace(Nn, "").replace(qn, jn[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = st.trim(u.dataType || "*").toLowerCase().match(yt) || [""], null == u.crossDomain && (i = Hn.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = st.param(u.data, u.traditional)), O(Rn, u, t, b), 2 === y) return b;
			l = st.event && u.global, l && 0 === st.active++ && st.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !On.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += ($n.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Pn.test(o) ? o.replace(Pn, "$1_=" + Sn++) : o + ($n.test(o) ? "&" : "?") + "_=" + Sn++)), u.ifModified && (st.lastModified[o] && b.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && b.setRequestHeader("If-None-Match", st.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", u.contentType), b.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Wn + "; q=0.01" : "") : u.accepts["*"]);
			for (s in u.headers) b.setRequestHeader(s, u.headers[s]);
			if (u.beforeSend && (u.beforeSend.call(D, b, u) === !1 || 2 === y)) return b.abort();
			v = "abort";
			for (s in {
					success: 1,
					error: 1,
					complete: 1
				}) b[s](u[s]);
			if (d = O(Vn, u, t, b)) {
				b.readyState = 1, l && h.trigger("ajaxSend", [b, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
					b.abort("timeout")
				}, u.timeout));
				try {
					y = 1, d.send(B, n)
				} catch (C) {
					if (!(2 > y)) throw C;
					n(-1, C)
				}
			} else n(-1, "No Transport");
			return b
		},
		getJSON: function(e, t, n) {
			return st.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return st.get(e, void 0, t, "script")
		}
	}), st.each(["get", "post"], function(e, t) {
		st[t] = function(e, n, i, s) {
			return st.isFunction(n) && (s = s || i, i = n, n = void 0), st.ajax({
				url: e,
				type: t,
				dataType: s,
				data: n,
				success: i
			})
		}
	}), st._evalUrl = function(e) {
		return st.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, st.fn.extend({
		wrapAll: function(e) {
			if (st.isFunction(e)) return this.each(function(t) {
				st(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(st.isFunction(e) ? function(t) {
				st(this).wrapInner(e.call(this, t))
			} : function() {
				var t = st(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = st.isFunction(e);
			return this.each(function(n) {
				st(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
			}).end()
		}
	}), st.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || st.css(e, "display"))
	}, st.expr.filters.visible = function(e) {
		return !st.expr.filters.hidden(e)
	};
	var Un = /%20/g,
		Gn = /\[\]$/,
		Xn = /\r?\n/g,
		Kn = /^(?:submit|button|image|reset|file)$/i,
		Yn = /^(?:input|select|textarea|keygen)/i;
	st.param = function(e, t) {
		var n, i = [],
			s = function(e, t) {
				t = st.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e, function() {
			s(this.name, this.value)
		});
		else
			for (n in e) V(n, e[n], t, s);
		return i.join("&").replace(Un, "+")
	}, st.fn.extend({
		serialize: function() {
			return st.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = st.prop(this, "elements");
				return e ? st.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !st(this).is(":disabled") && Yn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Mt.test(e))
			}).map(function(e, t) {
				var n = st(this).val();
				return null == n ? null : st.isArray(n) ? st.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Xn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Xn, "\r\n")
				}
			}).get()
		}
	}), st.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || J()
	} : W;
	var Qn = 0,
		Zn = {},
		ei = st.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Zn) Zn[e](void 0, !0)
	}), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && st.ajaxTransport(function(e) {
		if (!e.crossDomain || nt.cors) {
			var t;
			return {
				send: function(n, i) {
					var s, o = e.xhr(),
						r = ++Qn;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (s in e.xhrFields) o[s] = e.xhrFields[s];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (s in n) void 0 !== n[s] && o.setRequestHeader(s, n[s] + "");
					o.send(e.hasContent && e.data || null), t = function(n, s) {
						var a, l, d;
						if (t && (s || 4 === o.readyState))
							if (delete Zn[r], t = void 0, o.onreadystatechange = st.noop, s) 4 !== o.readyState && o.abort();
							else {
								d = {}, a = o.status, "string" == typeof o.responseText && (d.text = o.responseText);
								try {
									l = o.statusText
								} catch (c) {
									l = ""
								}
								a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
							}
						d && i(a, l, d, o.getAllResponseHeaders())
					}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[r] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), st.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return st.globalEval(e), e
			}
		}
	}), st.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), st.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = pt.head || st("head")[0] || pt.documentElement;
			return {
				send: function(i, s) {
					t = pt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || s(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var ti = [],
		ni = /(=)\?(?=&|$)|\?\?/;
	st.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = ti.pop() || st.expando + "_" + Sn++;
			return this[e] = !0, e
		}
	}), st.ajaxPrefilter("json jsonp", function(t, n, i) {
		var s, o, r, a = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = st.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ni, "$1" + s) : t.jsonp !== !1 && (t.url += ($n.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
			return r || st.error(s + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
			r = arguments
		}, i.always(function() {
			e[s] = o, t[s] && (t.jsonpCallback = n.jsonpCallback, ti.push(s)), r && st.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), st.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || pt;
		var i = ut.exec(e),
			s = !n && [];
		return i ? [t.createElement(i[1])] : (i = st.buildFragment([e], t, s), s && s.length && st(s).remove(), st.merge([], i.childNodes))
	};
	var ii = st.fn.load;
	st.fn.load = function(e, t, n) {
		if ("string" != typeof e && ii) return ii.apply(this, arguments);
		var i, s, o, r = this,
			a = e.indexOf(" ");
		return a >= 0 && (i = st.trim(e.slice(a, e.length)), e = e.slice(0, a)), st.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && st.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: t
		}).done(function(e) {
			s = arguments, r.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			r.each(n, s || [e.responseText, t, e])
		}), this
	}, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		st.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), st.expr.filters.animated = function(e) {
		return st.grep(st.timers, function(t) {
			return e === t.elem
		}).length
	};
	var si = e.document.documentElement;
	st.offset = {
		setOffset: function(e, t, n) {
			var i, s, o, r, a, l, d, c = st.css(e, "position"),
				u = st(e),
				D = {};
			"static" === c && (e.style.position = "relative"), a = u.offset(), o = st.css(e, "top"), l = st.css(e, "left"), d = ("absolute" === c || "fixed" === c) && st.inArray("auto", [o, l]) > -1, d ? (i = u.position(), r = i.top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), st.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (D.top = t.top - a.top + r), null != t.left && (D.left = t.left - a.left + s), "using" in t ? t.using.call(e, D) : u.css(D)
		}
	}, st.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				st.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				s = this[0],
				o = s && s.ownerDocument;
			if (o) return t = o.documentElement, st.contains(t, s) ? (typeof s.getBoundingClientRect !== wt && (i = s.getBoundingClientRect()), n = U(o), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === st.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - st.css(i, "marginTop", !0),
					left: t.left - n.left - st.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || si; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) e = e.offsetParent;
				return e || si
			})
		}
	}), st.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		st.fn[e] = function(i) {
			return Tt(this, function(e, i, s) {
				var o = U(e);
				return void 0 === s ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? st(o).scrollLeft() : s, n ? s : st(o).scrollTop()) : e[i] = s)
			}, e, i, arguments.length, null)
		}
	}), st.each(["top", "left"], function(e, t) {
		st.cssHooks[t] = E(nt.pixelPosition, function(e, n) {
			return n ? (n = tn(e, t), sn.test(n) ? st(e).position()[t] + "px" : n) : void 0
		})
	}), st.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		st.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			st.fn[i] = function(i, s) {
				var o = arguments.length && (n || "boolean" != typeof i),
					r = n || (i === !0 || s === !0 ? "margin" : "border");
				return Tt(this, function(t, n, i) {
					var s;
					return st.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? st.css(t, n, r) : st.style(t, n, i, r)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), st.fn.size = function() {
		return this.length
	}, st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return st
	});
	var oi = e.jQuery,
		ri = e.$;
	return st.noConflict = function(t) {
		return e.$ === st && (e.$ = ri), t && e.jQuery === st && (e.jQuery = oi), st
	}, typeof t === wt && (e.jQuery = e.$ = st), st
}),
function(e, t) {
	e.rails !== t && e.error("jquery-ujs has already been loaded!");
	var n, i = e(document);
	e.rails = n = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
		buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
		disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with], a[data-disable]",
		buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
		CSRFProtection: function(t) {
			var n = e('meta[name="csrf-token"]').attr("content");
			n && t.setRequestHeader("X-CSRF-Token", n)
		},
		refreshCSRFTokens: function() {
			var t = e("meta[name=csrf-token]").attr("content"),
				n = e("meta[name=csrf-param]").attr("content");
			e('form input[name="' + n + '"]').val(t)
		},
		fire: function(t, n, i) {
			var s = e.Event(n);
			return t.trigger(s, i), s.result !== !1
		},
		confirm: function(e) {
			return confirm(e)
		},
		ajax: function(t) {
			return e.ajax(t)
		},
		href: function(e) {
			return e.attr("href")
		},
		handleRemote: function(i) {
			var s, o, r, a, l, d, c, u;
			if (n.fire(i, "ajax:before")) {
				if (a = i.data("cross-domain"), l = a === t ? null : a, d = i.data("with-credentials") || null, c = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
					s = i.attr("method"), o = i.attr("action"), r = i.serializeArray();
					var D = i.data("ujs:submit-button");
					D && (r.push(D), i.data("ujs:submit-button", null))
				} else i.is(n.inputChangeSelector) ? (s = i.data("method"), o = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (s = i.data("method") || "get", o = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (s = i.data("method"), o = n.href(i), r = i.data("params") || null);
				return u = {
					type: s || "GET",
					data: r,
					dataType: c,
					beforeSend: function(e, s) {
						return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), n.fire(i, "ajax:beforeSend", [e, s]) ? void i.trigger("ajax:send", e) : !1
					},
					success: function(e, t, n) {
						i.trigger("ajax:success", [e, t, n])
					},
					complete: function(e, t) {
						i.trigger("ajax:complete", [e, t])
					},
					error: function(e, t, n) {
						i.trigger("ajax:error", [e, t, n])
					},
					crossDomain: l
				}, d && (u.xhrFields = {
					withCredentials: d
				}), o && (u.url = o), n.ajax(u)
			}
			return !1
		},
		handleMethod: function(i) {
			var s = n.href(i),
				o = i.data("method"),
				r = i.attr("target"),
				a = e("meta[name=csrf-token]").attr("content"),
				l = e("meta[name=csrf-param]").attr("content"),
				d = e('<form method="post" action="' + s + '"></form>'),
				c = '<input name="_method" value="' + o + '" type="hidden" />';
			l !== t && a !== t && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && d.attr("target", r), d.hide().append(c).appendTo("body"), d.submit()
		},
		formElements: function(t, n) {
			return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
		},
		disableFormElements: function(t) {
			n.formElements(t, n.disableSelector).each(function() {
				n.disableFormElement(e(this))
			})
		},
		disableFormElement: function(e) {
			var n, i;
			n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
		},
		enableFormElements: function(t) {
			n.formElements(t, n.enableSelector).each(function() {
				n.enableFormElement(e(this))
			})
		},
		enableFormElement: function(e) {
			var t = e.is("button") ? "html" : "val";
			e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
		},
		allowAction: function(e) {
			var t, i = e.data("confirm"),
				s = !1;
			return i ? (n.fire(e, "confirm") && (s = n.confirm(i), t = n.fire(e, "confirm:complete", [s])), s && t) : !0
		},
		blankInputs: function(t, n, i) {
			var s, o, r = e(),
				a = n || "input,textarea",
				l = t.find(a);
			return l.each(function() {
				if (s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !i) {
					if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
					r = r.add(s)
				}
			}), r.length ? r : !1
		},
		nonBlankInputs: function(e, t) {
			return n.blankInputs(e, t, !0)
		},
		stopEverything: function(t) {
			return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
		},
		disableElement: function(e) {
			var i = e.data("disable-with");
			e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
				return n.stopEverything(e)
			})
		},
		enableElement: function(e) {
			e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
		}
	}, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
		e.crossDomain || n.CSRFProtection(i)
	}), e(window).on("pageshow.rails", function() {
		e(e.rails.enableSelector).each(function() {
			var t = e(this);
			t.data("ujs:enable-with") && e.rails.enableFormElement(t)
		}), e(e.rails.linkDisableSelector).each(function() {
			var t = e(this);
			t.data("ujs:enable-with") && e.rails.enableElement(t)
		})
	}), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
		n.enableElement(e(this))
	}), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
		n.enableFormElement(e(this))
	}), i.delegate(n.linkClickSelector, "click.rails", function(i) {
		var s = e(this),
			o = s.data("method"),
			r = s.data("params"),
			a = i.metaKey || i.ctrlKey;
		if (!n.allowAction(s)) return n.stopEverything(i);
		if (!a && s.is(n.linkDisableSelector) && n.disableElement(s), s.data("remote") !== t) {
			if (a && (!o || "GET" === o) && !r) return !0;
			var l = n.handleRemote(s);
			return l === !1 ? n.enableElement(s) : l.fail(function() {
				n.enableElement(s)
			}), !1
		}
		return o ? (n.handleMethod(s), !1) : void 0
	}), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
		var i = e(this);
		if (!n.allowAction(i)) return n.stopEverything(t);
		i.is(n.buttonDisableSelector) && n.disableFormElement(i);
		var s = n.handleRemote(i);
		return s === !1 ? n.enableFormElement(i) : s.fail(function() {
			n.enableFormElement(i)
		}), !1
	}), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
		var i = e(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
	}), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
		var s, o, r = e(this),
			a = r.data("remote") !== t;
		if (!n.allowAction(r)) return n.stopEverything(i);
		if (r.attr("novalidate") == t && (s = n.blankInputs(r, n.requiredInputSelector), s && n.fire(r, "ajax:aborted:required", [s]))) return n.stopEverything(i);
		if (a) {
			if (o = n.nonBlankInputs(r, n.fileInputSelector)) {
				setTimeout(function() {
					n.disableFormElements(r)
				}, 13);
				var l = n.fire(r, "ajax:aborted:file", [o]);
				return l || setTimeout(function() {
					n.enableFormElements(r)
				}, 13), l
			}
			return n.handleRemote(r), !1
		}
		setTimeout(function() {
			n.disableFormElements(r)
		}, 13)
	}), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
		var i = e(this);
		if (!n.allowAction(i)) return n.stopEverything(t);
		var s = i.attr("name"),
			o = s ? {
				name: s,
				value: i.val()
			} : null;
		i.closest("form").data("ujs:submit-button", o)
	}), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
		this == t.target && n.disableFormElements(e(this))
	}), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
		this == t.target && n.enableFormElements(e(this))
	}), e(function() {
		n.refreshCSRFTokens()
	}))
}(jQuery);
var data_arm_variants = [{
		id: 1,
		d: 6,
		m: .222
	}, {
		id: 2,
		d: 8,
		m: .395
	}, {
		id: 3,
		d: 10,
		m: .617
	}, {
		id: 4,
		d: 12,
		m: .888
	}, {
		id: 5,
		d: 14,
		m: 1.21
	}, {
		id: 6,
		d: 16,
		m: 1.58
	}, {
		id: 7,
		d: 18,
		m: 2
	}, {
		id: 8,
		d: 20,
		m: 2.47
	}, {
		id: 9,
		d: 22,
		m: 2.98
	}, {
		id: 10,
		d: 25,
		m: 3.85
	}, {
		id: 11,
		d: 28,
		m: 4.83
	}, {
		id: 12,
		d: 32,
		m: 6.31
	}, {
		id: 13,
		d: 36,
		m: 7.99
	}],
	data_balk_types = [{
		id: 1,
		title: "\u0413\u043e\u0441\u0442 8239-89"
	}, {
		id: 2,
		title: "\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0432\u0443\u0442\u0430\u0432\u0440 (\u0411)"
	}, {
		id: 3,
		title: "\u0428\u0438\u0440\u043e\u043a\u043e\u043f\u043e\u043b\u043e\u0447\u043d\u044b\u0439 \u0434\u0432\u0443\u0442\u0430\u0432\u0440 (\u0428)"
	}, {
		id: 4,
		title: "\u041a\u043e\u043b\u043e\u043d\u043d\u044b\u0439 \u0434\u0432\u0443\u0442\u0430\u0432\u0440 (\u041a)"
	}, {
		id: 5,
		title: "\u0414\u0432\u0443\u0442\u0430\u0432\u0440 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0440\u0438\u0438 (\u0414)"
	}, {
		id: 6,
		title: "\u0421\u0432\u0430\u0440\u043d\u043e\u0439 \u0434\u0432\u0443\u0442\u0430\u0432\u0440 (\u0421)"
	}],
	data_balks = [{
		id: 1,
		type_id: 1,
		number: "10",
		h: 100,
		b: 55,
		s: 4.5,
		t: 7.2,
		m: 9.46
	}, {
		id: 2,
		type_id: 1,
		number: "12",
		h: 120,
		b: 64,
		s: 4.8,
		t: 7.3,
		m: 11.5
	}, {
		id: 3,
		type_id: 1,
		number: "14",
		h: 140,
		b: 73,
		s: 4.9,
		t: 7.5,
		m: 13.7
	}, {
		id: 4,
		type_id: 1,
		number: "16",
		h: 160,
		b: 81,
		s: 5,
		t: 7.8,
		m: 15.9
	}, {
		id: 5,
		type_id: 1,
		number: "18",
		h: 180,
		b: 90,
		s: 5.1,
		t: 8.1,
		m: 18.4
	}, {
		id: 6,
		type_id: 1,
		number: "20",
		h: 200,
		b: 100,
		s: 5.2,
		t: 8.4,
		m: 21
	}, {
		id: 7,
		type_id: 1,
		number: "22",
		h: 220,
		b: 110,
		s: 5.4,
		t: 8.7,
		m: 24
	}, {
		id: 8,
		type_id: 1,
		number: "24",
		h: 240,
		b: 115,
		s: 5.6,
		t: 9.5,
		m: 27.3
	}, {
		id: 9,
		type_id: 1,
		number: "27",
		h: 270,
		b: 125,
		s: 6,
		t: 9.8,
		m: 31.5
	}, {
		id: 10,
		type_id: 1,
		number: "30",
		h: 300,
		b: 135,
		s: 6.5,
		t: 10.2,
		m: 36.5
	}, {
		id: 11,
		type_id: 1,
		number: "33",
		h: 330,
		b: 140,
		s: 7,
		t: 11.2,
		m: 42.2
	}, {
		id: 12,
		type_id: 1,
		number: "36",
		h: 360,
		b: 145,
		s: 7.5,
		t: 12.3,
		m: 48.6
	}, {
		id: 13,
		type_id: 1,
		number: "40",
		h: 400,
		b: 155,
		s: 8.3,
		t: 13,
		m: 57
	}, {
		id: 14,
		type_id: 1,
		number: "45",
		h: 450,
		b: 160,
		s: 9,
		t: 14.2,
		m: 66.5
	}, {
		id: 15,
		type_id: 1,
		number: "50",
		h: 500,
		b: 170,
		s: 10,
		t: 15.2,
		m: 78.5
	}, {
		id: 16,
		type_id: 1,
		number: "55",
		h: 550,
		b: 180,
		s: 11,
		t: 16.5,
		m: 92.6
	}, {
		id: 17,
		type_id: 1,
		number: "60",
		h: 600,
		b: 190,
		s: 12,
		t: 17.8,
		m: 108
	}, {
		id: 18,
		type_id: 2,
		number: "10\u04111",
		h: 100,
		b: 55,
		s: 4.1,
		t: 5.7,
		m: 8.1
	}, {
		id: 19,
		type_id: 2,
		number: "12\u04111",
		h: 117.6,
		b: 64,
		s: 3.8,
		t: 5.1,
		m: 8.7
	}, {
		id: 20,
		type_id: 2,
		number: "12\u04112",
		h: 120,
		b: 64,
		s: 4.4,
		t: 6.3,
		m: 10.4
	}, {
		id: 21,
		type_id: 2,
		number: "14\u04111",
		h: 137.4,
		b: 73,
		s: 3.8,
		t: 5.6,
		m: 10.5
	}, {
		id: 22,
		type_id: 2,
		number: "14\u04112",
		h: 140,
		b: 73,
		s: 4.7,
		t: 6.9,
		m: 12.9
	}, {
		id: 23,
		type_id: 2,
		number: "16\u04111",
		h: 157,
		b: 82,
		s: 4,
		t: 5.9,
		m: 12.7
	}, {
		id: 24,
		type_id: 2,
		number: "16\u04112",
		h: 160,
		b: 82,
		s: 5,
		t: 7.4,
		m: 15.8
	}, {
		id: 25,
		type_id: 2,
		number: "18\u04111",
		h: 177,
		b: 91,
		s: 4.3,
		t: 6.5,
		m: 15.4
	}, {
		id: 26,
		type_id: 2,
		number: "18\u04112",
		h: 180,
		b: 91,
		s: 5.3,
		t: 8,
		m: 18.8
	}, {
		id: 27,
		type_id: 2,
		number: "20\u04111",
		h: 200,
		b: 100,
		s: 5.6,
		t: 8.5,
		m: 22.4
	}, {
		id: 28,
		type_id: 2,
		number: "23\u04111",
		h: 230,
		b: 110,
		s: 5.6,
		t: 9,
		m: 25.8
	}, {
		id: 29,
		type_id: 2,
		number: "26\u04111",
		h: 258,
		b: 120,
		s: 5.8,
		t: 8.5,
		m: 28
	}, {
		id: 30,
		type_id: 2,
		number: "26\u04112",
		h: 261,
		b: 120,
		s: 6,
		t: 10,
		m: 31.2
	}, {
		id: 31,
		type_id: 2,
		number: "30\u04111",
		h: 296,
		b: 140,
		s: 5.8,
		t: 8.5,
		m: 32.9
	}, {
		id: 32,
		type_id: 2,
		number: "30\u04112",
		h: 299,
		b: 140,
		s: 6,
		t: 10,
		m: 36.6
	}, {
		id: 33,
		type_id: 2,
		number: "35\u04111",
		h: 346,
		b: 155,
		s: 6.2,
		t: 8.5,
		m: 38.9
	}, {
		id: 34,
		type_id: 2,
		number: "35\u04112",
		h: 349,
		b: 155,
		s: 6.5,
		t: 10,
		m: 43.3
	}, {
		id: 35,
		type_id: 2,
		number: "40\u04111",
		h: 392,
		b: 165,
		s: 7,
		t: 9.5,
		m: 48.1
	}, {
		id: 36,
		type_id: 2,
		number: "40\u04112",
		h: 396,
		b: 165,
		s: 7.5,
		t: 11.5,
		m: 54.7
	}, {
		id: 37,
		type_id: 2,
		number: "45\u04111",
		h: 443,
		b: 180,
		s: 7.8,
		t: 11,
		m: 59.8
	}, {
		id: 38,
		type_id: 2,
		number: "45\u04112",
		h: 447,
		b: 180,
		s: 8.4,
		t: 13,
		m: 67.5
	}, {
		id: 39,
		type_id: 2,
		number: "50\u04111",
		h: 492,
		b: 200,
		s: 8.8,
		t: 12,
		m: 73
	}, {
		id: 40,
		type_id: 2,
		number: "50\u04112",
		h: 496,
		b: 200,
		s: 9.2,
		t: 14,
		m: 80.7
	}, {
		id: 41,
		type_id: 2,
		number: "55\u04111",
		h: 543,
		b: 220,
		s: 9.5,
		t: 13.5,
		m: 89
	}, {
		id: 42,
		type_id: 2,
		number: "55\u04112",
		h: 547,
		b: 220,
		s: 10,
		t: 15.5,
		m: 97.9
	}, {
		id: 43,
		type_id: 2,
		number: "60\u04111",
		h: 593,
		b: 230,
		s: 10.5,
		t: 15.5,
		m: 106.2
	}, {
		id: 44,
		type_id: 2,
		number: "60\u04112",
		h: 597,
		b: 230,
		s: 11,
		t: 17.5,
		m: 115.6
	}, {
		id: 45,
		type_id: 2,
		number: "70\u04111",
		h: 691,
		b: 260,
		s: 12,
		t: 15.5,
		m: 129.3
	}, {
		id: 46,
		type_id: 2,
		number: "70\u04112",
		h: 697,
		b: 260,
		s: 12.5,
		t: 18.5,
		m: 144.2
	}, {
		id: 47,
		type_id: 2,
		number: "80\u04111",
		h: 791,
		b: 280,
		s: 13.5,
		t: 17,
		m: 159.5
	}, {
		id: 48,
		type_id: 2,
		number: "80\u04112",
		h: 798,
		b: 280,
		s: 14,
		t: 20.5,
		m: 177.9
	}, {
		id: 49,
		type_id: 2,
		number: "90\u04111",
		h: 893,
		b: 300,
		s: 15,
		t: 18.5,
		m: 194
	}, {
		id: 50,
		type_id: 2,
		number: "90\u04112",
		h: 900,
		b: 300,
		s: 15.5,
		t: 22,
		m: 213.8
	}, {
		id: 51,
		type_id: 2,
		number: "100\u04111",
		h: 990,
		b: 320,
		s: 16,
		t: 21,
		m: 230.6
	}, {
		id: 52,
		type_id: 2,
		number: "100\u04112",
		h: 998,
		b: 320,
		s: 17,
		t: 25,
		m: 258.2
	}, {
		id: 53,
		type_id: 2,
		number: "100\u04113",
		h: 1006,
		b: 320,
		s: 18,
		t: 29,
		m: 285.7
	}, {
		id: 54,
		type_id: 2,
		number: "100\u04114",
		h: 1013,
		b: 320,
		s: 19.5,
		t: 32.5,
		m: 314.5
	}, {
		id: 55,
		type_id: 3,
		number: "20\u04281",
		h: 193,
		b: 150,
		s: 6,
		t: 9,
		m: 30.6
	}, {
		id: 56,
		type_id: 3,
		number: "23\u04281",
		h: 226,
		b: 155,
		s: 6.5,
		t: 10,
		m: 36.2
	}, {
		id: 57,
		type_id: 3,
		number: "26\u04281",
		h: 251,
		b: 180,
		s: 7,
		t: 10,
		m: 42.7
	}, {
		id: 58,
		type_id: 3,
		number: "26\u04282",
		h: 255,
		b: 180,
		s: 7.5,
		t: 12,
		m: 49.2
	}, {
		id: 59,
		type_id: 3,
		number: "30\u04281",
		h: 291,
		b: 200,
		s: 8,
		t: 11,
		m: 53.6
	}, {
		id: 60,
		type_id: 3,
		number: "30\u04282",
		h: 295,
		b: 200,
		s: 8.5,
		t: 13,
		m: 61
	}, {
		id: 61,
		type_id: 3,
		number: "30\u04283",
		h: 299,
		b: 200,
		s: 9,
		t: 15,
		m: 68.3
	}, {
		id: 62,
		type_id: 3,
		number: "35O1",
		h: 338,
		b: 250,
		s: 9.5,
		t: 12.5,
		m: 75.1
	}, {
		id: 63,
		type_id: 3,
		number: "35\u04282",
		h: 341,
		b: 250,
		s: 10,
		t: 14,
		m: 82.2
	}, {
		id: 64,
		type_id: 3,
		number: "35\u04283",
		h: 345,
		b: 250,
		s: 10.5,
		t: 16,
		m: 91.3
	}, {
		id: 65,
		type_id: 3,
		number: "40\u04281",
		h: 388,
		b: 300,
		s: 9.5,
		t: 14,
		m: 96.1
	}, {
		id: 66,
		type_id: 3,
		number: "40\u04282",
		h: 392,
		b: 300,
		s: 11.5,
		t: 16,
		m: 111.1
	}, {
		id: 67,
		type_id: 3,
		number: "40\u04283",
		h: 396,
		b: 300,
		s: 12.5,
		t: 18,
		m: 123.4
	}, {
		id: 68,
		type_id: 3,
		number: "50\u04281",
		h: 484,
		b: 300,
		s: 11,
		t: 15,
		m: 114.4
	}, {
		id: 69,
		type_id: 3,
		number: "50\u04282",
		h: 489,
		b: 300,
		s: 14.5,
		t: 17.5,
		m: 138.7
	}, {
		id: 70,
		type_id: 3,
		number: "50\u04283",
		h: 495,
		b: 300,
		s: 15.5,
		t: 20.5,
		m: 156.4
	}, {
		id: 71,
		type_id: 3,
		number: "50\u04284",
		h: 501,
		b: 300,
		s: 16.5,
		t: 23.5,
		m: 174.1
	}, {
		id: 72,
		type_id: 3,
		number: "60\u04281",
		h: 580,
		b: 320,
		s: 12,
		t: 17,
		m: 142.1
	}, {
		id: 73,
		type_id: 3,
		number: "60\u04282",
		h: 587,
		b: 320,
		s: 16,
		t: 20.5,
		m: 176.9
	}, {
		id: 74,
		type_id: 3,
		number: "60\u0428\u0417",
		h: 595,
		b: 320,
		s: 18,
		t: 24.5,
		m: 205.5
	}, {
		id: 75,
		type_id: 3,
		number: "60\u041414",
		h: 603,
		b: 320,
		s: 20,
		t: 28.5,
		m: 234.2
	}, {
		id: 76,
		type_id: 3,
		number: "70\u04281",
		h: 683,
		b: 320,
		s: 13.5,
		t: 19,
		m: 169.9
	}, {
		id: 77,
		type_id: 3,
		number: "70\u04282",
		h: 691,
		b: 320,
		s: 15,
		t: 23,
		m: 197.6
	}, {
		id: 78,
		type_id: 3,
		number: "70\u0428\u0417",
		h: 700,
		b: 320,
		s: 18,
		t: 27.5,
		m: 235.4
	}, {
		id: 79,
		type_id: 3,
		number: "70\u04284",
		h: 708,
		b: 320,
		s: 20.5,
		t: 31.5,
		m: 261.1
	}, {
		id: 80,
		type_id: 3,
		number: "70\u04285",
		h: 718,
		b: 320,
		s: 23,
		t: 36.5,
		m: 305.9
	}, {
		id: 81,
		type_id: 4,
		number: "20K1",
		h: 195,
		b: 200,
		s: 6.5,
		t: 10,
		m: 41.5
	}, {
		id: 82,
		type_id: 4,
		number: "20K2",
		h: 198,
		b: 200,
		s: 7,
		t: 11.5,
		m: 46.9
	}, {
		id: 83,
		type_id: 4,
		number: "23K1",
		h: 227,
		b: 240,
		s: 7,
		t: 10.5,
		m: 52.2
	}, {
		id: 84,
		type_id: 4,
		number: "23K2",
		h: 230,
		b: 240,
		s: 8,
		t: 12,
		m: 59.5
	}, {
		id: 85,
		type_id: 4,
		number: "26K1",
		h: 255,
		b: 260,
		s: 8,
		t: 12,
		m: 65.2
	}, {
		id: 86,
		type_id: 4,
		number: "26K2",
		h: 258,
		b: 260,
		s: 9,
		t: 13.5,
		m: 73.2
	}, {
		id: 87,
		type_id: 4,
		number: "26K3",
		h: 262,
		b: 260,
		s: 10,
		t: 15.5,
		m: 83.1
	}, {
		id: 88,
		type_id: 4,
		number: "30K1",
		h: 296,
		b: 300,
		s: 9,
		t: 13.5,
		m: 84.8
	}, {
		id: 89,
		type_id: 4,
		number: "30K2",
		h: 300,
		b: 300,
		s: 10,
		t: 15.5,
		m: 96.3
	}, {
		id: 90,
		type_id: 4,
		number: "30\u041a3",
		h: 304,
		b: 300,
		s: 11.5,
		t: 17.5,
		m: 108.9
	}, {
		id: 91,
		type_id: 4,
		number: "35\u041a1",
		h: 343,
		b: 350,
		s: 10,
		t: 15,
		m: 109.7
	}, {
		id: 92,
		type_id: 4,
		number: "35\u041a2",
		h: 348,
		b: 350,
		s: 11,
		t: 17.5,
		m: 125.9
	}, {
		id: 93,
		type_id: 4,
		number: "35K3",
		h: 353,
		b: 350,
		s: 13,
		t: 20,
		m: 144.5
	}, {
		id: 94,
		type_id: 4,
		number: "40\u041a1",
		h: 393,
		b: 400,
		s: 11,
		t: 16.5,
		m: 138
	}, {
		id: 95,
		type_id: 4,
		number: "40\u041a2",
		h: 400,
		b: 400,
		s: 13,
		t: 20,
		m: 165.6
	}, {
		id: 96,
		type_id: 4,
		number: "40K3",
		h: 409,
		b: 400,
		s: 16,
		t: 24.5,
		m: 202.3
	}, {
		id: 97,
		type_id: 4,
		number: "40\u041a4",
		h: 419,
		b: 400,
		s: 19,
		t: 29.5,
		m: 242.2
	}, {
		id: 98,
		type_id: 4,
		number: "40\u041a5",
		h: 431,
		b: 400,
		s: 23,
		t: 35.5,
		m: 291.2
	}, {
		id: 99,
		type_id: 5,
		number: "24\u0414\u04111",
		h: 239,
		b: 115,
		s: 5.5,
		t: 9.3,
		m: 27.8
	}, {
		id: 100,
		type_id: 5,
		number: "27\u0414\u04111",
		h: 269,
		b: 125,
		s: 6,
		t: 9.5,
		m: 31.9
	}, {
		id: 101,
		type_id: 5,
		number: "36\u0414\u04111",
		h: 360,
		b: 145,
		s: 7.2,
		t: 12.3,
		m: 49.1
	}, {
		id: 102,
		type_id: 5,
		number: "35\u0414\u04111",
		h: 349,
		b: 127,
		s: 5.8,
		t: 8.5,
		m: 33.6
	}, {
		id: 103,
		type_id: 5,
		number: "40\u0414\u04111",
		h: 399,
		b: 139,
		s: 6.2,
		t: 9,
		m: 39.7
	}, {
		id: 104,
		type_id: 5,
		number: "45\u0414\u04111",
		h: 450,
		b: 152,
		s: 7.4,
		t: 11,
		m: 52.6
	}, {
		id: 105,
		type_id: 5,
		number: "45\u0414\u04112",
		h: 450,
		b: 180,
		s: 7.6,
		t: 13.3,
		m: 65
	}, {
		id: 106,
		type_id: 5,
		number: "30\u0414\u04281",
		h: 300.6,
		b: 201.9,
		s: 9.4,
		t: 16,
		m: 72.7
	}, {
		id: 107,
		type_id: 5,
		number: "40\u0414\u04281",
		h: 397.6,
		b: 302,
		s: 11.5,
		t: 18.7,
		m: 124
	}, {
		id: 108,
		type_id: 5,
		number: "50\u0414\u04281",
		h: 496.2,
		b: 303.8,
		s: 14.2,
		t: 21,
		m: 155
	}, {
		id: 109,
		type_id: 6,
		number: "45\u0411\u04211",
		h: 444,
		b: 200,
		s: 8,
		t: 12,
		m: 64.06
	}, {
		id: 110,
		type_id: 6,
		number: "45\u0411\u04212",
		h: 460,
		b: 300,
		s: 12,
		t: 20,
		m: 133.8
	}, {
		id: 111,
		type_id: 6,
		number: "45\u0411\u04213",
		h: 448,
		b: 180,
		s: 8,
		t: 14,
		m: 65.94
	}, {
		id: 112,
		type_id: 6,
		number: "50\u0411\u04211",
		h: 482,
		b: 200,
		s: 10,
		t: 16,
		m: 85.57
	}, {
		id: 113,
		type_id: 6,
		number: "50\u0411\u04212",
		h: 482,
		b: 300,
		s: 12,
		t: 16,
		m: 117.8
	}, {
		id: 114,
		type_id: 6,
		number: "50\u0411\u04213",
		h: 500,
		b: 300,
		s: 12,
		t: 25,
		m: 160.1
	}, {
		id: 115,
		type_id: 6,
		number: "50\u0411\u04214",
		h: 510,
		b: 300,
		s: 14,
		t: 30,
		m: 190.8
	}, {
		id: 116,
		type_id: 6,
		number: "55\u0411\u04211",
		h: 551,
		b: 220,
		s: 10,
		t: 18,
		m: 102.6
	}, {
		id: 117,
		type_id: 6,
		number: "55\u0411\u04212",
		h: 547,
		b: 200,
		s: 10,
		t: 16,
		m: 90.67
	}, {
		id: 118,
		type_id: 6,
		number: "60\u0411\u04211",
		h: 577,
		b: 240,
		s: 12,
		t: 16,
		m: 111.6
	}, {
		id: 119,
		type_id: 6,
		number: "60\u0411\u04212",
		h: 585,
		b: 240,
		s: 12,
		t: 20,
		m: 126.7
	}, {
		id: 120,
		type_id: 6,
		number: "60\u0411\u04213",
		h: 585,
		b: 320,
		s: 12,
		t: 20,
		m: 151.8
	}, {
		id: 121,
		type_id: 6,
		number: "60\u0411\u04214",
		h: 595,
		b: 320,
		s: 14,
		t: 25,
		m: 185.5
	}, {
		id: 122,
		type_id: 6,
		number: "60\u0411\u04215",
		h: 605,
		b: 320,
		s: 16,
		t: 30,
		m: 219.2
	}, {
		id: 123,
		type_id: 6,
		number: "60\u0411\u04216",
		h: 597,
		b: 190,
		s: 12,
		t: 16,
		m: 101
	}, {
		id: 124,
		type_id: 6,
		number: "70\u0411\u04211",
		h: 685,
		b: 260,
		s: 12,
		t: 20,
		m: 142.4
	}, {
		id: 125,
		type_id: 6,
		number: "70\u0411\u04212",
		h: 685,
		b: 320,
		s: 14,
		t: 20,
		m: 171.4
	}, {
		id: 126,
		type_id: 6,
		number: "70\u0411\u04213",
		h: 695,
		b: 320,
		s: 14,
		t: 25,
		m: 196.5
	}, {
		id: 127,
		type_id: 6,
		number: "70\u0411\u04214",
		h: 705,
		b: 320,
		s: 16,
		t: 30,
		m: 231.7
	}, {
		id: 128,
		type_id: 6,
		number: "70\u0411\u04215",
		h: 725,
		b: 320,
		s: 20,
		t: 40,
		m: 302.2
	}, {
		id: 129,
		type_id: 6,
		number: "70\u0411\u04216",
		h: 692,
		b: 230,
		s: 12,
		t: 16,
		m: 119.9
	}, {
		id: 130,
		type_id: 6,
		number: "80\u0411\u04211",
		h: 791,
		b: 280,
		s: 14,
		t: 18,
		m: 162.1
	}, {
		id: 131,
		type_id: 6,
		number: "80\u0411\u04212",
		h: 815,
		b: 300,
		s: 18,
		t: 30,
		m: 248
	}, {
		id: 132,
		type_id: 6,
		number: "90\u0411\u04211",
		h: 895,
		b: 300,
		s: 16,
		t: 20,
		m: 201.6
	}, {
		id: 133,
		type_id: 6,
		number: "90\u0411\u04212",
		h: 927,
		b: 300,
		s: 16,
		t: 36,
		m: 276.9
	}, {
		id: 134,
		type_id: 6,
		number: "100\u0411\u04211",
		h: 995,
		b: 320,
		s: 16,
		t: 25,
		m: 244.3
	}, {
		id: 135,
		type_id: 6,
		number: "100\u0411\u04212",
		h: 1005,
		b: 320,
		s: 16,
		t: 30,
		m: 269.4
	}, {
		id: 136,
		type_id: 6,
		number: "100\u0411\u04213",
		h: 1017,
		b: 320,
		s: 20,
		t: 36,
		m: 329.2
	}, {
		id: 137,
		type_id: 6,
		number: "120\u0411\u04211",
		h: 1280,
		b: 400,
		s: 12,
		t: 20,
		m: 242.4
	}, {
		id: 138,
		type_id: 6,
		number: "120\u0411\u04212",
		h: 1280,
		b: 450,
		s: 14,
		t: 20,
		m: 277.6
	}, {
		id: 139,
		type_id: 6,
		number: "140\u0411\u04211",
		h: 1440,
		b: 400,
		s: 12,
		t: 20,
		m: 257.5
	}, {
		id: 140,
		type_id: 6,
		number: "140\u0411\u04212",
		h: 1440,
		b: 450,
		s: 12,
		t: 20,
		m: 273.2
	}, {
		id: 141,
		type_id: 6,
		number: "140\u0411\u04213",
		h: 1450,
		b: 500,
		s: 14,
		t: 25,
		m: 350.1
	}, {
		id: 142,
		type_id: 6,
		number: "160\u0411\u04211",
		h: 1640,
		b: 450,
		s: 12,
		t: 20,
		m: 292
	}, {
		id: 143,
		type_id: 6,
		number: "160\u0411\u04212",
		h: 1640,
		b: 500,
		s: 12,
		t: 20,
		m: 307.7
	}, {
		id: 144,
		type_id: 6,
		number: "160\u0411\u04213",
		h: 1650,
		b: 500,
		s: 14,
		t: 25,
		m: 372.1
	}, {
		id: 145,
		type_id: 6,
		number: "160\u0411\u04214",
		h: 1650,
		b: 560,
		s: 14,
		t: 25,
		m: 395.6
	}, {
		id: 146,
		type_id: 6,
		number: "180\u0411\u04211",
		h: 1800,
		b: 560,
		s: 12,
		t: 25,
		m: 384.7
	}, {
		id: 147,
		type_id: 6,
		number: "180\u0411\u04212",
		h: 1800,
		b: 500,
		s: 14,
		t: 25,
		m: 388.6
	}, {
		id: 148,
		type_id: 6,
		number: "180\u0411\u04213",
		h: 1810,
		b: 500,
		s: 14,
		t: 30,
		m: 427.8
	}, {
		id: 149,
		type_id: 6,
		number: "180\u0411\u04214",
		h: 1810,
		b: 600,
		s: 16,
		t: 30,
		m: 502.4
	}, {
		id: 150,
		type_id: 6,
		number: "200\u0411\u04211",
		h: 2e3,
		b: 560,
		s: 12,
		t: 25,
		m: 403.5
	}, {
		id: 151,
		type_id: 6,
		number: "200\u0411\u04212",
		h: 2010,
		b: 500,
		s: 16,
		t: 30,
		m: 480.4
	}, {
		id: 152,
		type_id: 6,
		number: "200\u0411\u04213",
		h: 2010,
		b: 600,
		s: 16,
		t: 30,
		m: 527.5
	}],
	data_branch_types = [{
		id: 1,
		title: "\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 1"
	}, {
		id: 2,
		title: "\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 2"
	}],
	data_branches = [{
		id: 1,
		type_id: 1,
		size: "21.3\u04452",
		dy: 15,
		dh: 21.3,
		w: 2,
		m: .04
	}, {
		id: 2,
		type_id: 1,
		size: "21.3\u04453.2",
		dy: 15,
		dh: 21.3,
		w: 3.2,
		m: .06
	}, {
		id: 3,
		type_id: 1,
		size: "21.35\u04454",
		dy: 15,
		dh: 21.3,
		w: 4,
		m: .07
	}, {
		id: 4,
		type_id: 1,
		size: "26.9\u04452",
		dy: 15,
		dh: 21.3,
		w: 2,
		m: .06
	}, {
		id: 5,
		type_id: 1,
		size: "26.9\u04453.2",
		dy: 15,
		dh: 21.3,
		w: 3.2,
		m: .08
	}, {
		id: 6,
		type_id: 1,
		size: "26.9\u04454",
		dy: 15,
		dh: 21.3,
		w: 4,
		m: .1
	}, {
		id: 7,
		type_id: 1,
		size: "33.7\u04452.3",
		dy: 25,
		dh: 33.7,
		w: 2.3,
		m: .11
	}, {
		id: 8,
		type_id: 1,
		size: "33.7\u04452.3",
		dy: 25,
		dh: 33.7,
		w: 3.2,
		m: .16
	}, {
		id: 9,
		type_id: 1,
		size: "33.7\u04452.3",
		dy: 25,
		dh: 33.7,
		w: 4.5,
		m: .19
	}, {
		id: 10,
		type_id: 1,
		size: "42.4\u04452.6",
		dy: 32,
		dh: 42.4,
		w: 2.6,
		m: .19
	}, {
		id: 11,
		type_id: 1,
		size: "42.4\u04453.6",
		dy: 32,
		dh: 42.4,
		w: 3.6,
		m: .26
	}, {
		id: 12,
		type_id: 1,
		size: "42.4\u04455",
		dy: 32,
		dh: 42.4,
		w: 5,
		m: .35
	}, {
		id: 13,
		type_id: 1,
		size: "48.3\u04452.6",
		dy: 40,
		dh: 48.3,
		w: 2.6,
		m: .26
	}, {
		id: 14,
		type_id: 1,
		size: "48.3\u04453.6",
		dy: 40,
		dh: 48.3,
		w: 3.6,
		m: .36
	}, {
		id: 15,
		type_id: 1,
		size: "48.3\u04455",
		dy: 40,
		dh: 48.3,
		w: 5,
		m: .47
	}, {
		id: 16,
		type_id: 1,
		size: "60.3\u04452.9",
		dy: 50,
		dh: 60.3,
		w: 2.9,
		m: .5
	}, {
		id: 17,
		type_id: 1,
		size: "60.3\u04454",
		dy: 50,
		dh: 60.3,
		w: 4,
		m: .67
	}, {
		id: 18,
		type_id: 1,
		size: "60.3\u04455.6",
		dy: 50,
		dh: 60.3,
		w: 5.6,
		m: .89
	}, {
		id: 19,
		type_id: 1,
		size: "76\u04452.9",
		dy: 65,
		dh: 76.1,
		w: 2.9,
		m: .79
	}, {
		id: 20,
		type_id: 1,
		size: "76\u04455",
		dy: 65,
		dh: 76.1,
		w: 5,
		m: 1.5
	}, {
		id: 21,
		type_id: 1,
		size: "76\u04457.1",
		dy: 65,
		dh: 76.1,
		w: 7.1,
		m: 1.8
	}, {
		id: 22,
		type_id: 1,
		size: "89\u04453.2",
		dy: 80,
		dh: 88.9,
		w: 3.2,
		m: 1.2
	}, {
		id: 23,
		type_id: 1,
		size: "89\u04455.6",
		dy: 80,
		dh: 88.9,
		w: 5.6,
		m: 2.1
	}, {
		id: 24,
		type_id: 1,
		size: "89\u04458",
		dy: 80,
		dh: 88.9,
		w: 8,
		m: 2.8
	}, {
		id: 25,
		type_id: 1,
		size: "114\u04453.6",
		dy: 100,
		dh: 114.3,
		w: 3.6,
		m: 2.4
	}, {
		id: 26,
		type_id: 1,
		size: "114\u04456.3",
		dy: 100,
		dh: 114.3,
		w: 6.3,
		m: 4
	}, {
		id: 27,
		type_id: 1,
		size: "114\u04458.8",
		dy: 100,
		dh: 114.3,
		w: 8.8,
		m: 5.4
	}, {
		id: 28,
		type_id: 1,
		size: "139\u04454",
		dy: 125,
		dh: 139.7,
		w: 4,
		m: 4
	}, {
		id: 29,
		type_id: 1,
		size: "139\u04456.3",
		dy: 125,
		dh: 139.7,
		w: 6.3,
		m: 6.2
	}, {
		id: 30,
		type_id: 1,
		size: "139\u044510",
		dy: 125,
		dh: 139.7,
		w: 10,
		m: 9.6
	}, {
		id: 31,
		type_id: 1,
		size: "168\u04454.5",
		dy: 150,
		dh: 168.3,
		w: 4.5,
		m: 6.5
	}, {
		id: 32,
		type_id: 1,
		size: "168\u04457.1",
		dy: 150,
		dh: 168.3,
		w: 7.1,
		m: 10
	}, {
		id: 33,
		type_id: 1,
		size: "168\u044511",
		dy: 150,
		dh: 168.3,
		w: 11,
		m: 15
	}, {
		id: 34,
		type_id: 1,
		size: "219\u04456.3",
		dy: 200,
		dh: 219.1,
		w: 6.3,
		m: 16
	}, {
		id: 35,
		type_id: 1,
		size: "219\u04458",
		dy: 200,
		dh: 219.1,
		w: 8,
		m: 20
	}, {
		id: 36,
		type_id: 1,
		size: "219\u044512.5",
		dy: 200,
		dh: 219.1,
		w: 12.5,
		m: 31
	}, {
		id: 37,
		type_id: 1,
		size: "273\u04456.3",
		dy: 250,
		dh: 273,
		w: 6.3,
		m: 25
	}, {
		id: 38,
		type_id: 1,
		size: "273\u044510",
		dy: 250,
		dh: 273,
		w: 10,
		m: 39
	}, {
		id: 39,
		type_id: 1,
		size: "323\u04457.1",
		dy: 300,
		dh: 323.9,
		w: 7.1,
		m: 40
	}, {
		id: 40,
		type_id: 1,
		size: "323\u044510",
		dy: 300,
		dh: 323.9,
		w: 10,
		m: 56
	}, {
		id: 41,
		type_id: 1,
		size: "355\u04458",
		dy: 350,
		dh: 355.6,
		w: 8,
		m: 57
	}, {
		id: 42,
		type_id: 1,
		size: "355\u044511",
		dy: 350,
		dh: 355.6,
		w: 11,
		m: 78
	}, {
		id: 43,
		type_id: 2,
		size: "32\u04452",
		dy: 25,
		dh: 32,
		w: 2,
		m: .1
	}, {
		id: 44,
		type_id: 2,
		size: "32\u04452.5",
		dy: 25,
		dh: 32,
		w: 2.5,
		m: .2
	}, {
		id: 45,
		type_id: 2,
		size: "32\u04453",
		dy: 25,
		dh: 32,
		w: 3,
		m: .2
	}, {
		id: 46,
		type_id: 2,
		size: "32\u04453.5",
		dy: 25,
		dh: 32,
		w: 3.5,
		m: .2
	}, {
		id: 47,
		type_id: 2,
		size: "38\u04452",
		dy: 32,
		dh: 38,
		w: 2,
		m: .2
	}, {
		id: 48,
		type_id: 2,
		size: "38\u04452.5",
		dy: 32,
		dh: 38,
		w: 2.5,
		m: .2
	}, {
		id: 49,
		type_id: 2,
		size: "38\u04453",
		dy: 32,
		dh: 38,
		w: 3,
		m: .2
	}, {
		id: 50,
		type_id: 2,
		size: "38\u04453.5",
		dy: 32,
		dh: 38,
		w: 3.5,
		m: .3
	}, {
		id: 51,
		type_id: 2,
		size: "38\u04454",
		dy: 32,
		dh: 38,
		w: 4,
		m: .3
	}, {
		id: 52,
		type_id: 2,
		size: "45\u04452.5",
		dy: 40,
		dh: 45,
		w: 2.5,
		m: .3
	}, {
		id: 53,
		type_id: 2,
		size: "45\u04453",
		dy: 40,
		dh: 45,
		w: 3,
		m: .3
	}, {
		id: 54,
		type_id: 2,
		size: "45\u04453.5",
		dy: 40,
		dh: 45,
		w: 3.5,
		m: .4
	}, {
		id: 55,
		type_id: 2,
		size: "45\u04454",
		dy: 40,
		dh: 45,
		w: 4,
		m: .4
	}, {
		id: 56,
		type_id: 2,
		size: "45\u04455",
		dy: 40,
		dh: 45,
		w: 5,
		m: .5
	}, {
		id: 57,
		type_id: 2,
		size: "57\u04452.5",
		dy: 50,
		dh: 57,
		w: 2.5,
		m: .4
	}, {
		id: 58,
		type_id: 2,
		size: "57\u04453",
		dy: 50,
		dh: 57,
		w: 3,
		m: .5
	}, {
		id: 59,
		type_id: 2,
		size: "57\u04453.5",
		dy: 50,
		dh: 57,
		w: 3.5,
		m: .6
	}, {
		id: 60,
		type_id: 2,
		size: "57\u04454",
		dy: 50,
		dh: 57,
		w: 4,
		m: .7
	}, {
		id: 61,
		type_id: 2,
		size: "57\u04454.5",
		dy: 50,
		dh: 57,
		w: 4.5,
		m: .7
	}, {
		id: 62,
		type_id: 2,
		size: "57\u04455",
		dy: 50,
		dh: 57,
		w: 5,
		m: .8
	}, {
		id: 63,
		type_id: 2,
		size: "57\u04455.5",
		dy: 50,
		dh: 57,
		w: 5.5,
		m: .9
	}, {
		id: 64,
		type_id: 2,
		size: "57\u04456",
		dy: 50,
		dh: 57,
		w: 6,
		m: 1
	}, {
		id: 65,
		type_id: 2,
		size: "76\u04453",
		dy: 65,
		dh: 76,
		w: 3,
		m: .8
	}, {
		id: 66,
		type_id: 2,
		size: "76\u04453.5",
		dy: 65,
		dh: 76,
		w: 3.5,
		m: 1
	}, {
		id: 67,
		type_id: 2,
		size: "76\u04454",
		dy: 65,
		dh: 76,
		w: 4,
		m: 1.1
	}, {
		id: 68,
		type_id: 2,
		size: "76\u04454.5",
		dy: 65,
		dh: 76,
		w: 4.5,
		m: 1.3
	}, {
		id: 69,
		type_id: 2,
		size: "76\u04455",
		dy: 65,
		dh: 76,
		w: 5,
		m: 1.4
	}, {
		id: 70,
		type_id: 2,
		size: "76\u04455.53",
		dy: 65,
		dh: 76,
		w: 5.5,
		m: 1.6
	}, {
		id: 71,
		type_id: 2,
		size: "76\u04456",
		dy: 65,
		dh: 76,
		w: 6,
		m: 1.7
	}, {
		id: 72,
		type_id: 2,
		size: "76\u04457",
		dy: 65,
		dh: 76,
		w: 7,
		m: 2
	}, {
		id: 73,
		type_id: 2,
		size: "76\u04458",
		dy: 65,
		dh: 76,
		w: 8,
		m: 2.2
	}, {
		id: 74,
		type_id: 2,
		size: "89\u04453",
		dy: 80,
		dh: 89,
		w: 3,
		m: 1.2
	}, {
		id: 75,
		type_id: 2,
		size: "89\u04453.5",
		dy: 80,
		dh: 89,
		w: 3.5,
		m: 1.4
	}, {
		id: 76,
		type_id: 2,
		size: "89\u04454",
		dy: 80,
		dh: 89,
		w: 4,
		m: 1.5
	}, {
		id: 77,
		type_id: 2,
		size: "89\u04454.5",
		dy: 80,
		dh: 89,
		w: 4.5,
		m: 1.7
	}, {
		id: 78,
		type_id: 2,
		size: "89\u04455",
		dy: 80,
		dh: 89,
		w: 5,
		m: 1.9
	}, {
		id: 79,
		type_id: 2,
		size: "89\u04455.5",
		dy: 80,
		dh: 89,
		w: 5.5,
		m: 2.1
	}, {
		id: 80,
		type_id: 2,
		size: "89\u04456",
		dy: 80,
		dh: 89,
		w: 6,
		m: 2.3
	}, {
		id: 81,
		type_id: 2,
		size: "89\u04457",
		dy: 80,
		dh: 89,
		w: 7,
		m: 2.7
	}, {
		id: 82,
		type_id: 2,
		size: "89\u04458",
		dy: 80,
		dh: 89,
		w: 8,
		m: 3
	}, {
		id: 83,
		type_id: 2,
		size: "102\u04453.5",
		dy: 100,
		dh: 102,
		w: 3.5,
		m: 2.1
	}, {
		id: 84,
		type_id: 2,
		size: "102\u04454",
		dy: 100,
		dh: 102,
		w: 4,
		m: 2.4
	}, {
		id: 85,
		type_id: 2,
		size: "102\u04454.5",
		dy: 100,
		dh: 102,
		w: 4.5,
		m: 2.6
	}, {
		id: 86,
		type_id: 2,
		size: "102\u04455",
		dy: 100,
		dh: 102,
		w: 5,
		m: 2.9
	}, {
		id: 87,
		type_id: 2,
		size: "102\u04456",
		dy: 100,
		dh: 102,
		w: 6,
		m: 3.4
	}, {
		id: 88,
		type_id: 2,
		size: "102\u04457",
		dy: 100,
		dh: 102,
		w: 7,
		m: 3.9
	}, {
		id: 89,
		type_id: 2,
		size: "102\u04458",
		dy: 100,
		dh: 102,
		w: 8,
		m: 4.5
	}, {
		id: 90,
		type_id: 2,
		size: "102\u04459",
		dy: 100,
		dh: 102,
		w: 9,
		m: 5
	}, {
		id: 91,
		type_id: 2,
		size: "102\u044510",
		dy: 100,
		dh: 102,
		w: 10,
		m: 5.5
	}, {
		id: 92,
		type_id: 2,
		size: "108\u044510",
		dy: 100,
		dh: 108,
		w: 3.5,
		m: 2.2
	}, {
		id: 93,
		type_id: 2,
		size: "108\u04454",
		dy: 100,
		dh: 108,
		w: 4,
		m: 2.5
	}, {
		id: 94,
		type_id: 2,
		size: "108\u04454.5",
		dy: 100,
		dh: 108,
		w: 4.5,
		m: 2.8
	}, {
		id: 95,
		type_id: 2,
		size: "108\u04455",
		dy: 100,
		dh: 108,
		w: 5,
		m: 3.1
	}, {
		id: 96,
		type_id: 2,
		size: "108\u04456",
		dy: 100,
		dh: 108,
		w: 6,
		m: 3.6
	}, {
		id: 97,
		type_id: 2,
		size: "108\u04457",
		dy: 100,
		dh: 108,
		w: 7,
		m: 4.1
	}, {
		id: 98,
		type_id: 2,
		size: "108\u04458",
		dy: 100,
		dh: 108,
		w: 8,
		m: 4.7
	}, {
		id: 99,
		type_id: 2,
		size: "108\u04459",
		dy: 100,
		dh: 108,
		w: 9,
		m: 5.3
	}, {
		id: 100,
		type_id: 2,
		size: "108\u044510",
		dy: 100,
		dh: 108,
		w: 10,
		m: 5.8
	}, {
		id: 101,
		type_id: 2,
		size: "114\u04453.5",
		dy: 100,
		dh: 114,
		w: 3.5,
		m: 2.2
	}, {
		id: 102,
		type_id: 2,
		size: "114\u04453.5",
		dy: 100,
		dh: 114,
		w: 4,
		m: 2.6
	}, {
		id: 103,
		type_id: 2,
		size: "114\u04454.5",
		dy: 100,
		dh: 114,
		w: 4.5,
		m: 2.9
	}, {
		id: 104,
		type_id: 2,
		size: "114\u04455",
		dy: 100,
		dh: 114,
		w: 5,
		m: 3.3
	}, {
		id: 105,
		type_id: 2,
		size: "114\u04456",
		dy: 100,
		dh: 114,
		w: 6,
		m: 3.8
	}, {
		id: 106,
		type_id: 2,
		size: "114\u04457",
		dy: 100,
		dh: 114,
		w: 7,
		m: 4.4
	}, {
		id: 107,
		type_id: 2,
		size: "114\u04458",
		dy: 100,
		dh: 114,
		w: 8,
		m: 5
	}, {
		id: 108,
		type_id: 2,
		size: "114\u04459",
		dy: 100,
		dh: 114,
		w: 9,
		m: 5.7
	}, {
		id: 109,
		type_id: 2,
		size: "114\u044510",
		dy: 100,
		dh: 114,
		w: 10,
		m: 6.1
	}, {
		id: 110,
		type_id: 2,
		size: "133\u04453.5",
		dy: 125,
		dh: 133,
		w: 3.5,
		m: 3.3
	}, {
		id: 111,
		type_id: 2,
		size: "133\u04454",
		dy: 125,
		dh: 133,
		w: 4,
		m: 3.8
	}, {
		id: 112,
		type_id: 2,
		size: "133\u04454.5",
		dy: 125,
		dh: 133,
		w: 4.5,
		m: 4.3
	}, {
		id: 113,
		type_id: 2,
		size: "133\u04455",
		dy: 125,
		dh: 133,
		w: 5,
		m: 4.8
	}, {
		id: 114,
		type_id: 2,
		size: "133\u04456",
		dy: 125,
		dh: 133,
		w: 6,
		m: 5.7
	}, {
		id: 115,
		type_id: 2,
		size: "133\u04457",
		dy: 125,
		dh: 133,
		w: 7,
		m: 6.5
	}, {
		id: 116,
		type_id: 2,
		size: "133\u044585",
		dy: 125,
		dh: 133,
		w: 8,
		m: 7.4
	}, {
		id: 117,
		type_id: 2,
		size: "133\u04459",
		dy: 125,
		dh: 133,
		w: 9,
		m: 8.2
	}, {
		id: 118,
		type_id: 2,
		size: "133\u044510",
		dy: 125,
		dh: 133,
		w: 10,
		m: 9.1
	}, {
		id: 119,
		type_id: 2,
		size: "133\u044511",
		dy: 125,
		dh: 133,
		w: 11,
		m: 10
	}, {
		id: 120,
		type_id: 2,
		size: "133\u044512",
		dy: 125,
		dh: 133,
		w: 12,
		m: 11
	}, {
		id: 121,
		type_id: 2,
		size: "159\u04454",
		dy: 150,
		dh: 159,
		w: 4,
		m: 5.4
	}, {
		id: 122,
		type_id: 2,
		size: "159\u04454.5",
		dy: 150,
		dh: 159,
		w: 4.5,
		m: 6.1
	}, {
		id: 123,
		type_id: 2,
		size: "159\u04455",
		dy: 150,
		dh: 159,
		w: 5,
		m: 6.7
	}, {
		id: 124,
		type_id: 2,
		size: "159\u04456",
		dy: 150,
		dh: 159,
		w: 6,
		m: 8.1
	}, {
		id: 125,
		type_id: 2,
		size: "159\u04457",
		dy: 150,
		dh: 159,
		w: 7,
		m: 9.4
	}, {
		id: 126,
		type_id: 2,
		size: "159\u04458",
		dy: 150,
		dh: 159,
		w: 8,
		m: 11
	}, {
		id: 127,
		type_id: 2,
		size: "159\u04459",
		dy: 150,
		dh: 159,
		w: 9,
		m: 12
	}, {
		id: 128,
		type_id: 2,
		size: "159\u044510",
		dy: 150,
		dh: 159,
		w: 10,
		m: 13
	}, {
		id: 129,
		type_id: 2,
		size: "159\u044511",
		dy: 150,
		dh: 159,
		w: 11,
		m: 14
	}, {
		id: 130,
		type_id: 2,
		size: "159\u044512",
		dy: 150,
		dh: 159,
		w: 12,
		m: 16
	}, {
		id: 131,
		type_id: 2,
		size: "159\u044513",
		dy: 150,
		dh: 159,
		w: 13,
		m: 17
	}, {
		id: 132,
		type_id: 2,
		size: "159\u044514",
		dy: 150,
		dh: 159,
		w: 14,
		m: 18
	}, {
		id: 133,
		type_id: 2,
		size: "168\u04454",
		dy: 150,
		dh: 168,
		w: 4,
		m: 5.6
	}, {
		id: 134,
		type_id: 2,
		size: "168\u04454.5",
		dy: 150,
		dh: 168,
		w: 4.5,
		m: 6.4
	}, {
		id: 135,
		type_id: 2,
		size: "168\u04455",
		dy: 150,
		dh: 168,
		w: 5,
		m: 7.1
	}, {
		id: 136,
		type_id: 2,
		size: "168\u04456",
		dy: 150,
		dh: 168,
		w: 6,
		m: 8.5
	}, {
		id: 137,
		type_id: 2,
		size: "168\u04457",
		dy: 150,
		dh: 168,
		w: 7,
		m: 9.8
	}, {
		id: 138,
		type_id: 2,
		size: "168\u04458",
		dy: 150,
		dh: 168,
		w: 8,
		m: 11.2
	}, {
		id: 139,
		type_id: 2,
		size: "168\u04459",
		dy: 150,
		dh: 168,
		w: 9,
		m: 12.5
	}, {
		id: 140,
		type_id: 2,
		size: "168\u044510",
		dy: 150,
		dh: 168,
		w: 10,
		m: 14
	}, {
		id: 141,
		type_id: 2,
		size: "168\u044511",
		dy: 150,
		dh: 168,
		w: 11,
		m: 15
	}, {
		id: 142,
		type_id: 2,
		size: "168\u044512",
		dy: 150,
		dh: 168,
		w: 12,
		m: 16
	}, {
		id: 143,
		type_id: 2,
		size: "168\u044513",
		dy: 150,
		dh: 168,
		w: 13,
		m: 17.5
	}, {
		id: 144,
		type_id: 2,
		size: "168\u044514",
		dy: 150,
		dh: 168,
		w: 14,
		m: 19
	}, {
		id: 145,
		type_id: 2,
		size: "219\u04455",
		dy: 200,
		dh: 219,
		w: 5,
		m: 13
	}, {
		id: 146,
		type_id: 2,
		size: "219\u04456",
		dy: 200,
		dh: 219,
		w: 6,
		m: 15
	}, {
		id: 147,
		type_id: 2,
		size: "219\u04457",
		dy: 200,
		dh: 219,
		w: 7,
		m: 17
	}, {
		id: 148,
		type_id: 2,
		size: "219\u04458",
		dy: 200,
		dh: 219,
		w: 8,
		m: 20
	}, {
		id: 149,
		type_id: 2,
		size: "219\u04459",
		dy: 200,
		dh: 219,
		w: 9,
		m: 22
	}, {
		id: 150,
		type_id: 2,
		size: "219\u044510",
		dy: 200,
		dh: 219,
		w: 10,
		m: 25
	}, {
		id: 151,
		type_id: 2,
		size: "219\u044511",
		dy: 200,
		dh: 219,
		w: 11,
		m: 27
	}, {
		id: 152,
		type_id: 2,
		size: "219\u044512",
		dy: 200,
		dh: 219,
		w: 12,
		m: 29
	}, {
		id: 153,
		type_id: 2,
		size: "219\u044513",
		dy: 200,
		dh: 219,
		w: 13,
		m: 32
	}, {
		id: 154,
		type_id: 2,
		size: "219\u044514",
		dy: 200,
		dh: 219,
		w: 14,
		m: 34
	}, {
		id: 155,
		type_id: 2,
		size: "219\u044515",
		dy: 200,
		dh: 219,
		w: 15,
		m: 37
	}, {
		id: 156,
		type_id: 2,
		size: "219\u044516",
		dy: 200,
		dh: 219,
		w: 16,
		m: 39
	}, {
		id: 157,
		type_id: 2,
		size: "219\u044517",
		dy: 200,
		dh: 219,
		w: 17,
		m: 42
	}, {
		id: 158,
		type_id: 2,
		size: "219\u044518",
		dy: 200,
		dh: 219,
		w: 18,
		m: 44
	}, {
		id: 159,
		type_id: 2,
		size: "273\u04456",
		dy: 250,
		dh: 273,
		w: 6,
		m: 23
	}, {
		id: 160,
		type_id: 2,
		size: "273\u04457",
		dy: 250,
		dh: 273,
		w: 7,
		m: 27
	}, {
		id: 161,
		type_id: 2,
		size: "273\u04458",
		dy: 250,
		dh: 273,
		w: 8,
		m: 31
	}, {
		id: 162,
		type_id: 2,
		size: "273\u04459",
		dy: 250,
		dh: 273,
		w: 9,
		m: 35
	}, {
		id: 163,
		type_id: 2,
		size: "273\u044510",
		dy: 250,
		dh: 273,
		w: 10,
		m: 39
	}, {
		id: 164,
		type_id: 2,
		size: "273\u044511",
		dy: 250,
		dh: 273,
		w: 11,
		m: 43
	}, {
		id: 165,
		type_id: 2,
		size: "273\u044512",
		dy: 250,
		dh: 273,
		w: 12,
		m: 46
	}, {
		id: 166,
		type_id: 2,
		size: "273\u044513",
		dy: 250,
		dh: 273,
		w: 13,
		m: 50
	}, {
		id: 167,
		type_id: 2,
		size: "273\u044514",
		dy: 250,
		dh: 273,
		w: 14,
		m: 54
	}, {
		id: 168,
		type_id: 2,
		size: "273\u044515",
		dy: 250,
		dh: 273,
		w: 15,
		m: 58
	}, {
		id: 169,
		type_id: 2,
		size: "273\u044516",
		dy: 250,
		dh: 273,
		w: 16,
		m: 61
	}, {
		id: 170,
		type_id: 2,
		size: "273\u044517",
		dy: 250,
		dh: 273,
		w: 17,
		m: 66
	}, {
		id: 171,
		type_id: 2,
		size: "273\u044518",
		dy: 250,
		dh: 273,
		w: 18,
		m: 70
	}, {
		id: 172,
		type_id: 2,
		size: "273\u044520",
		dy: 250,
		dh: 273,
		w: 20,
		m: 78
	}, {
		id: 173,
		type_id: 2,
		size: "273\u044522",
		dy: 250,
		dh: 273,
		w: 22,
		m: 85
	}, {
		id: 174,
		type_id: 2,
		size: "325\u04457",
		dy: 300,
		dh: 325,
		w: 7,
		m: 39
	}, {
		id: 175,
		type_id: 2,
		size: "325\u04458",
		dy: 300,
		dh: 325,
		w: 8,
		m: 45
	}, {
		id: 176,
		type_id: 2,
		size: "325\u04459",
		dy: 300,
		dh: 325,
		w: 9,
		m: 50
	}, {
		id: 177,
		type_id: 2,
		size: "325\u044510",
		dy: 300,
		dh: 325,
		w: 10,
		m: 56
	}, {
		id: 178,
		type_id: 2,
		size: "325\u044511",
		dy: 300,
		dh: 325,
		w: 11,
		m: 61
	}, {
		id: 179,
		type_id: 2,
		size: "325\u044512",
		dy: 300,
		dh: 325,
		w: 12,
		m: 66
	}, {
		id: 180,
		type_id: 2,
		size: "32513",
		dy: 300,
		dh: 325,
		w: 13,
		m: 72
	}, {
		id: 181,
		type_id: 2,
		size: "325\u044514",
		dy: 300,
		dh: 325,
		w: 14,
		m: 77
	}, {
		id: 182,
		type_id: 2,
		size: "325\u044515",
		dy: 300,
		dh: 325,
		w: 15,
		m: 82
	}, {
		id: 183,
		type_id: 2,
		size: "325\u044516",
		dy: 300,
		dh: 325,
		w: 16,
		m: 87
	}, {
		id: 184,
		type_id: 2,
		size: "325\u044517",
		dy: 300,
		dh: 325,
		w: 17,
		m: 92
	}, {
		id: 185,
		type_id: 2,
		size: "325\u044518",
		dy: 300,
		dh: 325,
		w: 18,
		m: 96
	}, {
		id: 186,
		type_id: 2,
		size: "325\u044520",
		dy: 300,
		dh: 325,
		w: 20,
		m: 107
	}, {
		id: 187,
		type_id: 2,
		size: "325\u044522",
		dy: 300,
		dh: 325,
		w: 22,
		m: 118
	}, {
		id: 188,
		type_id: 2,
		size: "325\u044524",
		dy: 300,
		dh: 325,
		w: 24,
		m: 130
	}, {
		id: 189,
		type_id: 2,
		size: "325\u044526",
		dy: 300,
		dh: 325,
		w: 26,
		m: 141
	}, {
		id: 190,
		type_id: 2,
		size: "325\u044528",
		dy: 300,
		dh: 325,
		w: 28,
		m: 150
	}, {
		id: 191,
		type_id: 2,
		size: "377\u04459",
		dy: 350,
		dh: 377,
		w: 9,
		m: 68
	}, {
		id: 192,
		type_id: 2,
		size: "377\u044510",
		dy: 350,
		dh: 377,
		w: 10,
		m: 75
	}, {
		id: 193,
		type_id: 2,
		size: "377\u044511",
		dy: 350,
		dh: 377,
		w: 11,
		m: 83
	}, {
		id: 194,
		type_id: 2,
		size: "377\u044512",
		dy: 350,
		dh: 377,
		w: 12,
		m: 90
	}, {
		id: 195,
		type_id: 2,
		size: "377\u044513",
		dy: 350,
		dh: 377,
		w: 13,
		m: 97
	}, {
		id: 196,
		type_id: 2,
		size: "377\u044514",
		dy: 350,
		dh: 377,
		w: 14,
		m: 104
	}, {
		id: 197,
		type_id: 2,
		size: "377\u044515",
		dy: 350,
		dh: 377,
		w: 15,
		m: 112
	}, {
		id: 198,
		type_id: 2,
		size: "377\u044516",
		dy: 350,
		dh: 377,
		w: 16,
		m: 119
	}, {
		id: 199,
		type_id: 2,
		size: "377\u044517",
		dy: 350,
		dh: 377,
		w: 18,
		m: 133
	}, {
		id: 200,
		type_id: 2,
		size: "377\u044518",
		dy: 350,
		dh: 377,
		w: 20,
		m: 147
	}, {
		id: 201,
		type_id: 2,
		size: "377\u044519",
		dy: 350,
		dh: 377,
		w: 22,
		m: 161
	}, {
		id: 202,
		type_id: 2,
		size: "377\u044520",
		dy: 350,
		dh: 377,
		w: 24,
		m: 175
	}, {
		id: 203,
		type_id: 2,
		size: "377\u044521",
		dy: 350,
		dh: 377,
		w: 26,
		m: 188
	}, {
		id: 204,
		type_id: 2,
		size: "377\u044522",
		dy: 350,
		dh: 377,
		w: 28,
		m: 201
	}, {
		id: 205,
		type_id: 2,
		size: "377\u044523",
		dy: 350,
		dh: 377,
		w: 30,
		m: 214
	}, {
		id: 206,
		type_id: 2,
		size: "377\u044524",
		dy: 350,
		dh: 377,
		w: 32,
		m: 228
	}, {
		id: 207,
		type_id: 2,
		size: "426\u04458",
		dy: 400,
		dh: 426,
		w: 8,
		m: 78
	}, {
		id: 208,
		type_id: 2,
		size: "426\u04459",
		dy: 400,
		dh: 426,
		w: 9,
		m: 87
	}, {
		id: 209,
		type_id: 2,
		size: "426\u044510",
		dy: 400,
		dh: 426,
		w: 10,
		m: 97
	}, {
		id: 210,
		type_id: 2,
		size: "426\u044511",
		dy: 400,
		dh: 426,
		w: 11,
		m: 107
	}, {
		id: 211,
		type_id: 2,
		size: "426\u044512",
		dy: 400,
		dh: 426,
		w: 12,
		m: 117
	}, {
		id: 212,
		type_id: 2,
		size: "426\u044513",
		dy: 400,
		dh: 426,
		w: 13,
		m: 126
	}, {
		id: 213,
		type_id: 2,
		size: "426\u044514",
		dy: 400,
		dh: 426,
		w: 14,
		m: 135
	}, {
		id: 214,
		type_id: 2,
		size: "426\u044515",
		dy: 400,
		dh: 426,
		w: 15,
		m: 145
	}, {
		id: 215,
		type_id: 2,
		size: "426\u044516",
		dy: 400,
		dh: 426,
		w: 16,
		m: 154
	}, {
		id: 216,
		type_id: 2,
		size: "426\u044517",
		dy: 400,
		dh: 426,
		w: 17,
		m: 164
	}, {
		id: 217,
		type_id: 2,
		size: "426\u044518",
		dy: 400,
		dh: 426,
		w: 18,
		m: 173
	}, {
		id: 218,
		type_id: 2,
		size: "426\u044520",
		dy: 400,
		dh: 426,
		w: 20,
		m: 192
	}, {
		id: 219,
		type_id: 2,
		size: "426\u044522",
		dy: 400,
		dh: 426,
		w: 22,
		m: 210
	}, {
		id: 220,
		type_id: 2,
		size: "426\u044524",
		dy: 400,
		dh: 426,
		w: 24,
		m: 230
	}, {
		id: 221,
		type_id: 2,
		size: "426\u044526",
		dy: 400,
		dh: 426,
		w: 26,
		m: 249
	}, {
		id: 222,
		type_id: 2,
		size: "426\u044528",
		dy: 400,
		dh: 426,
		w: 28,
		m: 268
	}, {
		id: 223,
		type_id: 2,
		size: "426\u044530",
		dy: 400,
		dh: 426,
		w: 30,
		m: 286
	}, {
		id: 224,
		type_id: 2,
		size: "426\u044532",
		dy: 400,
		dh: 426,
		w: 32,
		m: 306
	}, {
		id: 225,
		type_id: 2,
		size: "426\u044534",
		dy: 400,
		dh: 426,
		w: 34,
		m: 324
	}, {
		id: 226,
		type_id: 2,
		size: "530\u04459",
		dy: 500,
		dh: 530,
		w: 9,
		m: 138
	}, {
		id: 227,
		type_id: 2,
		size: "530\u044510",
		dy: 500,
		dh: 530,
		w: 10,
		m: 153
	}, {
		id: 228,
		type_id: 2,
		size: "530\u044511",
		dy: 500,
		dh: 530,
		w: 11,
		m: 168
	}, {
		id: 229,
		type_id: 2,
		size: "530\u044512",
		dy: 500,
		dh: 530,
		w: 12,
		m: 183
	}, {
		id: 230,
		type_id: 2,
		size: "530\u044513",
		dy: 500,
		dh: 530,
		w: 13,
		m: 198
	}, {
		id: 231,
		type_id: 2,
		size: "530\u044514",
		dy: 500,
		dh: 530,
		w: 14,
		m: 212
	}, {
		id: 232,
		type_id: 2,
		size: "530\u044515",
		dy: 500,
		dh: 530,
		w: 15,
		m: 227
	}, {
		id: 233,
		type_id: 2,
		size: "530\u044516",
		dy: 500,
		dh: 530,
		w: 16,
		m: 242
	}, {
		id: 234,
		type_id: 2,
		size: "530\u044517",
		dy: 500,
		dh: 530,
		w: 17,
		m: 256
	}, {
		id: 235,
		type_id: 2,
		size: "530\u044518",
		dy: 500,
		dh: 530,
		w: 18,
		m: 270
	}, {
		id: 236,
		type_id: 2,
		size: "530\u044520",
		dy: 500,
		dh: 530,
		w: 20,
		m: 298
	}, {
		id: 237,
		type_id: 2,
		size: "530\u044522",
		dy: 500,
		dh: 530,
		w: 22,
		m: 327
	}, {
		id: 238,
		type_id: 2,
		size: "530\u044524",
		dy: 500,
		dh: 530,
		w: 24,
		m: 356
	}, {
		id: 239,
		type_id: 2,
		size: "530\u044526",
		dy: 500,
		dh: 530,
		w: 26,
		m: 385
	}, {
		id: 240,
		type_id: 2,
		size: "530\u044528",
		dy: 500,
		dh: 530,
		w: 28,
		m: 413
	}, {
		id: 241,
		type_id: 2,
		size: "530\u044530",
		dy: 500,
		dh: 530,
		w: 30,
		m: 440
	}, {
		id: 242,
		type_id: 2,
		size: "530\u044532",
		dy: 500,
		dh: 530,
		w: 32,
		m: 467
	}, {
		id: 243,
		type_id: 2,
		size: "530\u044534",
		dy: 500,
		dh: 530,
		w: 34,
		m: 494
	}, {
		id: 244,
		type_id: 2,
		size: "530\u044536",
		dy: 500,
		dh: 530,
		w: 36,
		m: 520
	}, {
		id: 245,
		type_id: 2,
		size: "630\u04459",
		dy: 600,
		dh: 630,
		w: 9,
		m: 198
	}, {
		id: 246,
		type_id: 2,
		size: "630\u044510",
		dy: 600,
		dh: 630,
		w: 10,
		m: 219
	}, {
		id: 247,
		type_id: 2,
		size: "630\u044511",
		dy: 600,
		dh: 630,
		w: 11,
		m: 245
	}, {
		id: 248,
		type_id: 2,
		size: "630\u044512",
		dy: 600,
		dh: 630,
		w: 12,
		m: 261
	}, {
		id: 249,
		type_id: 2,
		size: "630\u044513",
		dy: 600,
		dh: 630,
		w: 13,
		m: 282
	}, {
		id: 250,
		type_id: 2,
		size: "630\u044514",
		dy: 600,
		dh: 630,
		w: 14,
		m: 302
	}, {
		id: 251,
		type_id: 2,
		size: "630\u044515",
		dy: 600,
		dh: 630,
		w: 15,
		m: 324
	}, {
		id: 252,
		type_id: 2,
		size: "630\u044516",
		dy: 600,
		dh: 630,
		w: 16,
		m: 345
	}, {
		id: 253,
		type_id: 2,
		size: "630\u044517",
		dy: 600,
		dh: 630,
		w: 17,
		m: 366
	}, {
		id: 254,
		type_id: 2,
		size: "630\u044518",
		dy: 600,
		dh: 630,
		w: 18,
		m: 387
	}, {
		id: 255,
		type_id: 2,
		size: "630\u044520",
		dy: 600,
		dh: 630,
		w: 20,
		m: 429
	}, {
		id: 256,
		type_id: 2,
		size: "630\u044522",
		dy: 600,
		dh: 630,
		w: 22,
		m: 471
	}, {
		id: 257,
		type_id: 2,
		size: "630\u044524",
		dy: 600,
		dh: 630,
		w: 24,
		m: 513
	}, {
		id: 258,
		type_id: 2,
		size: "630\u044526",
		dy: 600,
		dh: 630,
		w: 26,
		m: 554
	}, {
		id: 259,
		type_id: 2,
		size: "630\u044528",
		dy: 600,
		dh: 630,
		w: 28,
		m: 595
	}, {
		id: 260,
		type_id: 2,
		size: "630\u044530",
		dy: 600,
		dh: 630,
		w: 30,
		m: 636
	}, {
		id: 261,
		type_id: 2,
		size: "630\u044532",
		dy: 600,
		dh: 630,
		w: 32,
		m: 678
	}, {
		id: 262,
		type_id: 2,
		size: "720\u04459",
		dy: 700,
		dh: 720,
		w: 9,
		m: 248
	}, {
		id: 263,
		type_id: 2,
		size: "720\u044510",
		dy: 700,
		dh: 720,
		w: 10,
		m: 275
	}, {
		id: 264,
		type_id: 2,
		size: "720\u044511",
		dy: 700,
		dh: 720,
		w: 11,
		m: 302
	}, {
		id: 265,
		type_id: 2,
		size: "720\u044512",
		dy: 700,
		dh: 720,
		w: 12,
		m: 329
	}, {
		id: 266,
		type_id: 2,
		size: "720\u044513",
		dy: 700,
		dh: 720,
		w: 13,
		m: 356
	}, {
		id: 267,
		type_id: 2,
		size: "720\u044514",
		dy: 700,
		dh: 720,
		w: 14,
		m: 383
	}, {
		id: 268,
		type_id: 2,
		size: "720\u044515",
		dy: 700,
		dh: 720,
		w: 15,
		m: 410
	}, {
		id: 269,
		type_id: 2,
		size: "720\u044516",
		dy: 700,
		dh: 720,
		w: 16,
		m: 436
	}, {
		id: 270,
		type_id: 2,
		size: "720\u044517",
		dy: 700,
		dh: 720,
		w: 17,
		m: 462
	}, {
		id: 271,
		type_id: 2,
		size: "720\u044518",
		dy: 700,
		dh: 720,
		w: 18,
		m: 489
	}, {
		id: 272,
		type_id: 2,
		size: "720\u044520",
		dy: 700,
		dh: 720,
		w: 20,
		m: 542
	}, {
		id: 273,
		type_id: 2,
		size: "720\u044522",
		dy: 700,
		dh: 720,
		w: 22,
		m: 595
	}, {
		id: 274,
		type_id: 2,
		size: "720\u044524",
		dy: 700,
		dh: 720,
		w: 24,
		m: 647
	}, {
		id: 275,
		type_id: 2,
		size: "720\u044526",
		dy: 700,
		dh: 720,
		w: 26,
		m: 698
	}, {
		id: 276,
		type_id: 2,
		size: "720\u044528",
		dy: 700,
		dh: 720,
		w: 28,
		m: 750
	}, {
		id: 277,
		type_id: 2,
		size: "720\u044530",
		dy: 700,
		dh: 720,
		w: 30,
		m: 801
	}, {
		id: 278,
		type_id: 2,
		size: "720\u044532",
		dy: 700,
		dh: 720,
		w: 32,
		m: 852
	}, {
		id: 279,
		type_id: 2,
		size: "820\u04459",
		dy: 800,
		dh: 820,
		w: 9,
		m: 339
	}, {
		id: 280,
		type_id: 2,
		size: "820\u044510",
		dy: 800,
		dh: 820,
		w: 10,
		m: 376
	}, {
		id: 281,
		type_id: 2,
		size: "820\u044511",
		dy: 800,
		dh: 820,
		w: 11,
		m: 413
	}, {
		id: 282,
		type_id: 2,
		size: "820\u044512",
		dy: 800,
		dh: 820,
		w: 12,
		m: 450
	}, {
		id: 283,
		type_id: 2,
		size: "820\u044513",
		dy: 800,
		dh: 820,
		w: 13,
		m: 487
	}, {
		id: 284,
		type_id: 2,
		size: "820\u044514",
		dy: 800,
		dh: 820,
		w: 14,
		m: 524
	}, {
		id: 285,
		type_id: 2,
		size: "820\u044515",
		dy: 800,
		dh: 820,
		w: 15,
		m: 561
	}, {
		id: 286,
		type_id: 2,
		size: "820\u044516",
		dy: 800,
		dh: 820,
		w: 16,
		m: 598
	}, {
		id: 287,
		type_id: 2,
		size: "820\u044517",
		dy: 800,
		dh: 820,
		w: 17,
		m: 636
	}, {
		id: 288,
		type_id: 2,
		size: "820\u044518",
		dy: 800,
		dh: 820,
		w: 18,
		m: 670
	}, {
		id: 289,
		type_id: 2,
		size: "820\u044520",
		dy: 800,
		dh: 820,
		w: 20,
		m: 743
	}, {
		id: 290,
		type_id: 2,
		size: "820\u044522",
		dy: 800,
		dh: 820,
		w: 22,
		m: 815
	}, {
		id: 291,
		type_id: 2,
		size: "820\u044524",
		dy: 800,
		dh: 820,
		w: 24,
		m: 887
	}, {
		id: 292,
		type_id: 2,
		size: "820\u044526",
		dy: 800,
		dh: 820,
		w: 26,
		m: 959
	}, {
		id: 293,
		type_id: 2,
		size: "820\xd728",
		dy: 800,
		dh: 820,
		w: 28,
		m: 1030
	}, {
		id: 294,
		type_id: 2,
		size: "820\xd730",
		dy: 800,
		dh: 820,
		w: 30,
		m: 1101
	}, {
		id: 295,
		type_id: 2,
		size: "820\xd732",
		dy: 800,
		dh: 820,
		w: 32,
		m: 1171
	}],
	data_channel_types = [{
		id: 1,
		title: "\u041f"
	}, {
		id: 2,
		title: "\u0423"
	}],
	data_channels = [{
		id: 1,
		number: "5\u041f",
		type_id: 1,
		h: 50,
		b: 32,
		s: 4.4,
		t: 7,
		m: 4.84
	}, {
		id: 2,
		number: "5\u0423",
		type_id: 2,
		h: 50,
		b: 32,
		s: 4.4,
		t: 7,
		m: 4.84
	}, {
		id: 3,
		number: "6,5\u041f",
		type_id: 1,
		h: 65,
		b: 36,
		s: 4.4,
		t: 7.2,
		m: 5.9
	}, {
		id: 4,
		number: "6,5\u0423",
		type_id: 2,
		h: 65,
		b: 36,
		s: 4.4,
		t: 7.2,
		m: 5.9
	}, {
		id: 5,
		number: "8\u041f",
		type_id: 1,
		h: 80,
		b: 40,
		s: 4.5,
		t: 7.4,
		m: 7.05
	}, {
		id: 6,
		number: "8\u0423",
		type_id: 2,
		h: 80,
		b: 40,
		s: 4.5,
		t: 7.4,
		m: 7.05
	}, {
		id: 7,
		number: "10\u041f",
		type_id: 1,
		h: 100,
		b: 46,
		s: 4.5,
		t: 7,
		m: 8.59
	}, {
		id: 8,
		number: "10\u0423",
		type_id: 2,
		h: 100,
		b: 46,
		s: 4.5,
		t: 7.6,
		m: 8.59
	}, {
		id: 9,
		number: "12\u041f",
		type_id: 1,
		h: 120,
		b: 52,
		s: 4.8,
		t: 7.8,
		m: 10.4
	}, {
		id: 10,
		number: "12\u0423",
		type_id: 2,
		h: 120,
		b: 52,
		s: 4.8,
		t: 7.8,
		m: 10.4
	}, {
		id: 11,
		number: "14\u041f",
		type_id: 1,
		h: 140,
		b: 58,
		s: 4.9,
		t: 8.1,
		m: 12.3
	}, {
		id: 12,
		number: "14\u0443",
		h: 140,
		b: 58,
		s: 4.9,
		t: 8.1,
		m: 12.3
	}, {
		id: 13,
		number: "16\u0430\u041f",
		type_id: 1,
		h: 160,
		b: 68,
		s: 5,
		t: 9,
		m: 15.3
	}, {
		id: 14,
		number: "16\u041f",
		type_id: 1,
		h: 160,
		b: 64,
		s: 5,
		t: 8.4,
		m: 14.2
	}, {
		id: 15,
		number: "16\u0443",
		h: 160,
		b: 64,
		s: 5,
		t: 8.4,
		m: 14.2
	}, {
		id: 16,
		number: "18\u0430\u041f",
		type_id: 1,
		h: 180,
		b: 74,
		s: 5.1,
		t: 9.3,
		m: 17.4
	}, {
		id: 17,
		number: "18\u0430\u0423",
		type_id: 2,
		h: 180,
		b: 74,
		s: 5.1,
		t: 9.3,
		m: 17.4
	}, {
		id: 18,
		number: "18\u041f",
		type_id: 1,
		h: 180,
		b: 70,
		s: 5.1,
		t: 8.7,
		m: 16.3
	}, {
		id: 19,
		number: "18\u0443",
		h: 180,
		b: 70,
		s: 5.1,
		t: 8.7,
		m: 16.3
	}, {
		id: 20,
		number: "20\u041f",
		type_id: 1,
		h: 200,
		b: 76,
		s: 5.2,
		t: 9,
		m: 18.4
	}, {
		id: 21,
		number: "20\u0423",
		type_id: 2,
		h: 200,
		b: 76,
		s: 5.2,
		t: 9,
		m: 18.4
	}, {
		id: 22,
		number: "20\u0423",
		type_id: 2,
		h: 220,
		b: 82,
		s: 5.4,
		t: 9.5,
		m: 21
	}, {
		id: 23,
		number: "22\u041f",
		type_id: 1,
		h: 220,
		b: 82,
		s: 5.2,
		t: 9.5,
		m: 21
	}, {
		id: 24,
		number: "24\u041f",
		type_id: 1,
		h: 240,
		b: 90,
		s: 5.6,
		t: 10,
		m: 24
	}, {
		id: 25,
		number: "24\u0423",
		type_id: 2,
		h: 240,
		b: 90,
		s: 5.6,
		t: 10,
		m: 24
	}, {
		id: 26,
		number: "27\u041f",
		type_id: 1,
		h: 270,
		b: 95,
		s: 6,
		t: 10.5,
		m: 27.7
	}, {
		id: 27,
		number: "30\u041f",
		type_id: 1,
		h: 330,
		b: 110,
		s: 6.5,
		t: 11,
		m: 31.8
	}, {
		id: 28,
		number: "30\u0423",
		type_id: 2,
		h: 300,
		b: 100,
		s: 6.5,
		t: 11,
		m: 31.8
	}, {
		id: 29,
		number: "33\u041f",
		type_id: 1,
		h: 330,
		b: 105,
		s: 7,
		t: 11.7,
		m: 36.5
	}, {
		id: 30,
		number: "33\u0423",
		type_id: 2,
		h: 330,
		b: 105,
		s: 7,
		t: 11.7,
		m: 36.5
	}, {
		id: 31,
		number: "36\u041f",
		type_id: 1,
		h: 360,
		b: 110,
		s: 7.5,
		t: 12.6,
		m: 41.9
	}, {
		id: 32,
		number: "36\u0443",
		h: 360,
		b: 110,
		s: 7.5,
		t: 12.6,
		m: 41.9
	}, {
		id: 33,
		number: "40\u041f",
		type_id: 1,
		h: 400,
		b: 115,
		s: 8,
		t: 13.5,
		m: 48.3
	}, {
		id: 34,
		number: "40\u0423",
		type_id: 2,
		h: 400,
		b: 115,
		s: 8,
		t: 13.5,
		m: 48.3
	}],
	data_flange_types = [{
		id: 1,
		title: "\u0420\u0443 6"
	}, {
		id: 2,
		title: "\u0420\u0443 10"
	}, {
		id: 3,
		title: "\u0420\u0443 16"
	}, {
		id: 4,
		title: "\u0420\u0443 25"
	}],
	data_flanges = [{
		id: 1,
		type_id: 1,
		dy: 15,
		d: 80,
		d1: 55,
		dv: 19,
		b: 10,
		dxn: 11,
		n: 4,
		m: .33
	}, {
		id: 2,
		type_id: 1,
		dy: 20,
		d: 90,
		d1: 65,
		dv: 26,
		b: 12,
		dxn: 11,
		n: 4,
		m: .53
	}, {
		id: 3,
		type_id: 1,
		dy: 25,
		d: 100,
		d1: 75,
		dv: 33,
		b: 12,
		dxn: 11,
		n: 4,
		m: .64
	}, {
		id: 4,
		type_id: 1,
		dy: 32,
		d: 120,
		d1: 90,
		dv: 39,
		b: 13,
		dxn: 14,
		n: 4,
		m: 1.01
	}, {
		id: 5,
		type_id: 1,
		dy: 40,
		d: 130,
		d1: 100,
		dv: 46,
		b: 13,
		dxn: 14,
		n: 4,
		m: 1.21
	}, {
		id: 6,
		type_id: 1,
		dy: 50,
		d: 140,
		d1: 110,
		dv: 59,
		b: 13,
		dxn: 14,
		n: 4,
		m: 1.33
	}, {
		id: 7,
		type_id: 1,
		dy: 65,
		d: 160,
		d1: 130,
		dv: 78,
		b: 13,
		dxn: 14,
		n: 4,
		m: 1.63
	}, {
		id: 8,
		type_id: 1,
		dy: 80,
		d: 185,
		d1: 150,
		dv: 91,
		b: 15,
		dxn: 18,
		n: 4,
		m: 2.44
	}, {
		id: 9,
		type_id: 1,
		dy: 100,
		d: 205,
		d1: 170,
		dv: 110,
		b: 15,
		dxn: 18,
		n: 4,
		m: 2.85
	}, {
		id: 10,
		type_id: 1,
		dy: 125,
		d: 235,
		d1: 200,
		dv: 135,
		b: 17,
		dxn: 18,
		n: 8,
		m: 3.88
	}, {
		id: 11,
		type_id: 1,
		dy: 150,
		d: 260,
		d1: 225,
		dv: 161,
		b: 17,
		dxn: 18,
		n: 8,
		m: 4.39
	}, {
		id: 12,
		type_id: 1,
		dy: 200,
		d: 315,
		d1: 280,
		dv: 222,
		b: 19,
		dxn: 18,
		n: 8,
		m: 5.89
	}, {
		id: 13,
		type_id: 1,
		dy: 250,
		d: 370,
		d1: 335,
		dv: 273,
		b: 20,
		dxn: 18,
		n: 12,
		m: 7.67
	}, {
		id: 14,
		type_id: 1,
		dy: 300,
		d: 435,
		d1: 395,
		dv: 325,
		b: 20,
		dxn: 22,
		n: 12,
		m: 10.28
	}, {
		id: 15,
		type_id: 1,
		dy: 350,
		d: 485,
		d1: 445,
		dv: 377,
		b: 22,
		dxn: 22,
		n: 12,
		m: 12.58
	}, {
		id: 16,
		type_id: 1,
		dy: 400,
		d: 535,
		d1: 495,
		dv: 426,
		b: 24,
		dxn: 22,
		n: 16,
		m: 15.2
	}, {
		id: 17,
		type_id: 1,
		dy: 500,
		d: 640,
		d1: 600,
		dv: 530,
		b: 25,
		dxn: 22,
		n: 16,
		m: 19.72
	}, {
		id: 18,
		type_id: 1,
		dy: 600,
		d: 755,
		d1: 705,
		dv: 630,
		b: 25,
		dxn: 26,
		n: 20,
		m: 26.24
	}, {
		id: 19,
		type_id: 1,
		dy: 800,
		d: 975,
		d1: 920,
		dv: 820,
		b: 27,
		dxn: 30,
		n: 24,
		m: 46.14
	}, {
		id: 20,
		type_id: 1,
		dy: 1e3,
		d: 1175,
		d1: 1120,
		dv: 1020,
		b: 31,
		dxn: 30,
		n: 28,
		m: 64.36
	}, {
		id: 21,
		type_id: 1,
		dy: 1200,
		d: 1400,
		d1: 1340,
		dv: 1220,
		b: 34,
		dxn: 33,
		n: 32,
		m: 99.03
	}, {
		id: 22,
		type_id: 2,
		dy: 15,
		d: 95,
		d1: 65,
		dv: 19,
		b: 10,
		dxn: 14,
		n: 4,
		m: .51
	}, {
		id: 23,
		type_id: 2,
		dy: 20,
		d: 105,
		d1: 75,
		dv: 26,
		b: 12,
		dxn: 14,
		n: 4,
		m: .74
	}, {
		id: 24,
		type_id: 2,
		dy: 25,
		d: 115,
		d1: 85,
		dv: 33,
		b: 12,
		dxn: 14,
		n: 4,
		m: .89
	}, {
		id: 25,
		type_id: 2,
		dy: 32,
		d: 135,
		d1: 100,
		dv: 39,
		b: 14,
		dxn: 18,
		n: 4,
		m: 1.4
	}, {
		id: 26,
		type_id: 2,
		dy: 40,
		d: 145,
		d1: 110,
		dv: 46,
		b: 15,
		dxn: 18,
		n: 4,
		m: 1.71
	}, {
		id: 27,
		type_id: 2,
		dy: 50,
		d: 160,
		d1: 125,
		dv: 59,
		b: 15,
		dxn: 18,
		n: 4,
		m: 2.06
	}, {
		id: 28,
		type_id: 2,
		dy: 65,
		d: 180,
		d1: 145,
		dv: 78,
		b: 17,
		dxn: 18,
		n: 4,
		m: 2.8
	}, {
		id: 29,
		type_id: 2,
		dy: 80,
		d: 195,
		d1: 160,
		dv: 91,
		b: 17,
		dxn: 18,
		n: 4,
		m: 3.19
	}, {
		id: 30,
		type_id: 2,
		dy: 100,
		d: 215,
		d1: 180,
		dv: 110,
		b: 19,
		dxn: 18,
		n: 8,
		m: 3.96
	}, {
		id: 31,
		type_id: 2,
		dy: 125,
		d: 245,
		d1: 210,
		dv: 135,
		b: 21,
		dxn: 18,
		n: 8,
		m: 5.4
	}, {
		id: 32,
		type_id: 2,
		dy: 150,
		d: 280,
		d1: 240,
		dv: 161,
		b: 21,
		dxn: 22,
		n: 8,
		m: 6.62
	}, {
		id: 33,
		type_id: 2,
		dy: 200,
		d: 335,
		d1: 295,
		dv: 222,
		b: 21,
		dxn: 22,
		n: 8,
		m: 8.05
	}, {
		id: 34,
		type_id: 2,
		dy: 250,
		d: 390,
		d1: 350,
		dv: 273,
		b: 23,
		dxn: 22,
		n: 12,
		m: 10.65
	}, {
		id: 35,
		type_id: 2,
		dy: 300,
		d: 440,
		d1: 400,
		dv: 325,
		b: 24,
		dxn: 22,
		n: 12,
		m: 12.9
	}, {
		id: 36,
		type_id: 2,
		dy: 350,
		d: 500,
		d1: 460,
		dv: 377,
		b: 24,
		dxn: 22,
		n: 16,
		m: 15.85
	}, {
		id: 37,
		type_id: 2,
		dy: 400,
		d: 565,
		d1: 515,
		dv: 426,
		b: 26,
		dxn: 26,
		n: 16,
		m: 21.56
	}, {
		id: 38,
		type_id: 2,
		dy: 500,
		d: 670,
		d1: 620,
		dv: 530,
		b: 28,
		dxn: 26,
		n: 20,
		m: 27.7
	}, {
		id: 39,
		type_id: 2,
		dy: 600,
		d: 780,
		d1: 725,
		dv: 630,
		b: 31,
		dxn: 30,
		n: 20,
		m: 39.4
	}, {
		id: 40,
		type_id: 2,
		dy: 800,
		d: 1010,
		d1: 950,
		dv: 820,
		b: 37,
		dxn: 33,
		n: 24,
		m: 79.16
	}, {
		id: 41,
		type_id: 2,
		dy: 1e3,
		d: 1220,
		d1: 1160,
		dv: 1020,
		b: 43,
		dxn: 33,
		n: 28,
		m: 118.43
	}, {
		id: 42,
		type_id: 2,
		dy: 1200,
		d: 1455,
		d1: 1380,
		dv: 1220,
		b: 51,
		dxn: 39,
		n: 32,
		m: 197.44
	}, {
		id: 43,
		type_id: 3,
		dy: 15,
		d: 95,
		d1: 65,
		dv: 19,
		b: 12,
		dxn: 14,
		n: 4,
		m: .61
	}, {
		id: 44,
		type_id: 3,
		dy: 20,
		d: 105,
		d1: 75,
		dv: 26,
		b: 14,
		dxn: 14,
		n: 4,
		m: .86
	}, {
		id: 45,
		type_id: 3,
		dy: 25,
		d: 115,
		d1: 85,
		dv: 33,
		b: 16,
		dxn: 14,
		n: 4,
		m: 1.17
	}, {
		id: 46,
		type_id: 3,
		dy: 32,
		d: 135,
		d1: 100,
		dv: 39,
		b: 16,
		dxn: 18,
		n: 4,
		m: 1.58
	}, {
		id: 47,
		type_id: 3,
		dy: 40,
		d: 145,
		d1: 110,
		dv: 46,
		b: 17,
		dxn: 18,
		n: 4,
		m: 1.96
	}, {
		id: 48,
		type_id: 3,
		dy: 50,
		d: 160,
		d1: 125,
		dv: 59,
		b: 19,
		dxn: 18,
		n: 4,
		m: 2.58
	}, {
		id: 49,
		type_id: 3,
		dy: 65,
		d: 180,
		d1: 145,
		dv: 78,
		b: 21,
		dxn: 18,
		n: 4,
		m: 3.42
	}, {
		id: 50,
		type_id: 3,
		dy: 80,
		d: 195,
		d1: 160,
		dv: 91,
		b: 21,
		dxn: 18,
		n: 4,
		m: 3.71
	}, {
		id: 51,
		type_id: 3,
		dy: 100,
		d: 215,
		d1: 180,
		dv: 110,
		b: 23,
		dxn: 18,
		n: 8,
		m: 4.73
	}, {
		id: 52,
		type_id: 3,
		dy: 125,
		d: 245,
		d1: 210,
		dv: 135,
		b: 25,
		dxn: 18,
		n: 8,
		m: 6.38
	}, {
		id: 53,
		type_id: 3,
		dy: 150,
		d: 280,
		d1: 240,
		dv: 161,
		b: 25,
		dxn: 22,
		n: 8,
		m: 7.81
	}, {
		id: 54,
		type_id: 3,
		dy: 200,
		d: 335,
		d1: 295,
		dv: 222,
		b: 27,
		dxn: 22,
		n: 12,
		m: 10.1
	}, {
		id: 55,
		type_id: 3,
		dy: 250,
		d: 405,
		d1: 355,
		dv: 273,
		b: 28,
		dxn: 26,
		n: 12,
		m: 14.49
	}, {
		id: 56,
		type_id: 3,
		dy: 300,
		d: 460,
		d1: 410,
		dv: 325,
		b: 28,
		dxn: 26,
		n: 12,
		m: 17.78
	}, {
		id: 57,
		type_id: 3,
		dy: 350,
		d: 520,
		d1: 470,
		dv: 377,
		b: 30,
		dxn: 26,
		n: 16,
		m: 22.88
	}, {
		id: 58,
		type_id: 3,
		dy: 400,
		d: 580,
		d1: 525,
		dv: 426,
		b: 34,
		dxn: 30,
		n: 16,
		m: 31
	}, {
		id: 59,
		type_id: 3,
		dy: 500,
		d: 710,
		d1: 650,
		dv: 530,
		b: 44,
		dxn: 33,
		n: 20,
		m: 57.01
	}, {
		id: 60,
		type_id: 3,
		dy: 600,
		d: 840,
		d1: 770,
		dv: 630,
		b: 45,
		dxn: 39,
		n: 20,
		m: 80.03
	}, {
		id: 61,
		type_id: 3,
		dy: 800,
		d: 1020,
		d1: 950,
		dv: 820,
		b: 49,
		dxn: 39,
		n: 24,
		m: 104.41
	}, {
		id: 62,
		type_id: 3,
		dy: 1e3,
		d: 1255,
		d1: 1170,
		dv: 1020,
		b: 58,
		dxn: 45,
		n: 28,
		m: 179.37
	}, {
		id: 63,
		type_id: 3,
		dy: 1200,
		d: 1485,
		d1: 1390,
		dv: 1220,
		b: 71,
		dxn: 52,
		n: 32,
		m: 297.78
	}, {
		id: 64,
		type_id: 4,
		dy: 15,
		d: 95,
		d1: 65,
		dv: 19,
		b: 14,
		dxn: 14,
		n: 4,
		m: .7
	}, {
		id: 65,
		type_id: 4,
		dy: 20,
		d: 105,
		d1: 75,
		dv: 26,
		b: 16,
		dxn: 14,
		n: 4,
		m: .98
	}, {
		id: 66,
		type_id: 4,
		dy: 25,
		d: 115,
		d1: 85,
		dv: 33,
		b: 16,
		dxn: 14,
		n: 4,
		m: 1.17
	}, {
		id: 67,
		type_id: 4,
		dy: 32,
		d: 135,
		d1: 100,
		dv: 39,
		b: 18,
		dxn: 18,
		n: 4,
		m: 1.77
	}, {
		id: 68,
		type_id: 4,
		dy: 40,
		d: 145,
		d1: 110,
		dv: 46,
		b: 19,
		dxn: 18,
		n: 4,
		m: 2.18
	}, {
		id: 69,
		type_id: 4,
		dy: 50,
		d: 160,
		d1: 125,
		dv: 59,
		b: 21,
		dxn: 18,
		n: 4,
		m: 2.71
	}, {
		id: 70,
		type_id: 4,
		dy: 65,
		d: 180,
		d1: 145,
		dv: 78,
		b: 21,
		dxn: 18,
		n: 8,
		m: 3.22
	}, {
		id: 71,
		type_id: 4,
		dy: 80,
		d: 195,
		d1: 160,
		dv: 91,
		b: 23,
		dxn: 18,
		n: 8,
		m: 4.06
	}, {
		id: 72,
		type_id: 4,
		dy: 100,
		d: 230,
		d1: 190,
		dv: 110,
		b: 25,
		dxn: 22,
		n: 8,
		m: 5.92
	}, {
		id: 73,
		type_id: 4,
		dy: 125,
		d: 270,
		d1: 220,
		dv: 135,
		b: 27,
		dxn: 26,
		n: 8,
		m: 8.26
	}, {
		id: 74,
		type_id: 4,
		dy: 150,
		d: 300,
		d1: 250,
		dv: 161,
		b: 27,
		dxn: 26,
		n: 8,
		m: 10.12
	}, {
		id: 75,
		type_id: 4,
		dy: 200,
		d: 360,
		d1: 310,
		dv: 222,
		b: 29,
		dxn: 26,
		n: 12,
		m: 13.34
	}, {
		id: 76,
		type_id: 4,
		dy: 250,
		d: 425,
		d1: 370,
		dv: 273,
		b: 31,
		dxn: 30,
		n: 12,
		m: 18.9
	}, {
		id: 77,
		type_id: 4,
		dy: 300,
		d: 485,
		d1: 430,
		dv: 325,
		b: 32,
		dxn: 30,
		n: 16,
		m: 23.95
	}, {
		id: 78,
		type_id: 4,
		dy: 350,
		d: 550,
		d1: 490,
		dv: 377,
		b: 38,
		dxn: 33,
		n: 16,
		m: 34.35
	}, {
		id: 79,
		type_id: 4,
		dy: 400,
		d: 610,
		d1: 550,
		dv: 426,
		b: 40,
		dxn: 33,
		n: 16,
		m: 44.62
	}, {
		id: 80,
		type_id: 4,
		dy: 500,
		d: 730,
		d1: 660,
		dv: 530,
		b: 48,
		dxn: 39,
		n: 20,
		m: 67.3
	}, {
		id: 81,
		type_id: 4,
		dy: 600,
		d: 840,
		d1: 770,
		dv: 630,
		b: 49,
		dxn: 39,
		n: 20,
		m: 90.87
	}, {
		id: 82,
		type_id: 4,
		dy: 800,
		d: 1075,
		d1: 990,
		dv: 820,
		b: 63,
		dxn: 45,
		n: 24,
		m: 181.43
	}],
	data_gosts = [{
		id: 1,
		title: "\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0438\u0306 \u043f\u0440\u043e\u043a\u0430\u0442",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 1050-88 \u041f\u0440\u043e\u043a\u0430\u0442 \u0441\u043e\u0440\u0442\u043e\u0432\u043e\u0438\u0306, \u043a\u0430\u043b\u0438\u0431\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0438\u0306 \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0438\u0306 \u043e\u0442\u0434\u0435\u043b\u043a\u043e\u0438\u0306 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0438\u0437 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0438\u0306 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%201050-88%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%2C%20%D0%BA%D0%B0%D0%BB%D0%B8%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D1%81%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%BA%D0%BE%D0%B8%CC%86%20%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1435-99 \u041f\u0440\u0443\u0442\u043a\u0438, \u043f\u043e\u043b\u043e\u0441\u044b \u0438 \u043c\u043e\u0442\u043a\u0438 \u0438\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0438\u0306 \u043d\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%201435-99%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%2C%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20%D0%B8%20%D0%BC%D0%BE%D1%82%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BD%D0%B5%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 14959-79 \u041f\u0440\u043e\u043a\u0430\u0442 \u0438\u0437 \u0440\u0435\u0441\u0441\u043e\u0440\u043d\u043e-\u043f\u0440\u0443\u0436\u0438\u043d\u043d\u043e\u0438\u0306 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u0438 \u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2014959-79%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%B8%D0%B7%20%D1%80%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%BD%D0%BE-%D0%BF%D1%80%D1%83%D0%B6%D0%B8%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D0%B8%20%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 19265-73 \u041f\u0440\u0443\u0442\u043a\u0438 \u0438 \u043f\u043e\u043b\u043e\u0441\u044b \u0438\u0437 \u0431\u044b\u0441\u0442\u0440\u043e\u0440\u0435\u0436\u0443\u0449\u0435\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2019265-73%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%20%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20%D0%B8%D0%B7%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D1%80%D0%B5%D0%B6%D1%83%D1%89%D0%B5%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 20072-74 \u0421\u0442\u0430\u043b\u044c \u0442\u0435\u043f\u043b\u043e\u0443\u0441\u0442\u043e\u0438\u0306\u0447\u0438\u0432\u0430\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2020072-74%20%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D1%83%D1%81%D1%82%D0%BE%D0%B8%CC%86%D1%87%D0%B8%D0%B2%D0%B0%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 3836-83 \u0421\u0442\u0430\u043b\u044c \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043d\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u0430\u044f \u0438 \u043b\u0435\u043d\u0442\u044b (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%203836-83%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BD%D0%B5%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B8%20%D0%BB%D0%B5%D0%BD%D1%82%D1%8B%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 4405-75 \u0421\u0442\u0430\u043b\u044c \u043f\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u044f \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u0430\u044f \u0438 \u043a\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%204405-75%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0%D1%8F%20%D0%B8%20%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 4543-71 \u041f\u0440\u043e\u043a\u0430\u0442 \u0438\u0437 \u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0438\u0306 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%204543-71%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%B8%D0%B7%20%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 5632-72 \u0421\u0442\u0430\u043b\u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u0441\u043f\u043b\u0430\u0432\u044b \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e-\u0441\u0442\u043e\u0438\u0306\u043a\u0438\u0435, \u0436\u0430\u0440\u043e\u0441\u0442\u043e\u0438\u0306\u043a\u0438\u0435 \u0438 \u0436\u0430\u0440\u043e\u043f\u0440\u043e\u0447\u043d\u044b\u0435 (\u043c\u0430\u0440\u043a\u0438)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%205632-72%20%D0%A1%D1%82%D0%B0%D0%BB%D0%B8%20%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D1%8B%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B8%D0%B5%2C%20%D0%B6%D0%B0%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B8%D0%B5%20%D0%B8%20%D0%B6%D0%B0%D1%80%D0%BE%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 5950-2000 \u041f\u0440\u0443\u0442\u043a\u0438, \u043f\u043e\u043b\u043e\u0441\u044b \u0438 \u043c\u043e\u0442\u043a\u0438 \u0438\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0438\u0306 \u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%205950-2000%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%2C%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20%D0%B8%20%D0%BC%D0%BE%D1%82%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 801-78 \u0421\u0442\u0430\u043b\u044c \u043f\u043e\u0434\u0448\u0438\u043f\u043d\u0438\u043a\u043e\u0432\u0430\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9A%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%20801-78%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%88%D0%B8%D0%BF%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}]
	}, {
		id: 2,
		title: "\u041b\u0438\u0441\u0442\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u043a\u0430\u0442",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 14637-89 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043b\u0441\u0442\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0438\u0437 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2014637-89%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B8%D0%B7%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 14918-80 \u0421\u0442\u0430\u043b\u044c \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u0430\u044f \u043e\u0446\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0445 \u043b\u0438\u043d\u0438\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2014918-80%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BE%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D1%81%20%D0%BD%D0%B5%D0%BF%D1%80%D0%B5%D1%80%D1%8B%D0%B2%D0%BD%D1%8B%D1%85%20%D0%BB%D0%B8%D0%BD%D0%B8%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1577-93 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043b\u0441\u0442\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0438 \u0448\u0438\u0440\u043e\u043a\u043e\u043f\u043e\u043b\u043e\u0441\u043d\u044b\u0438\u0306 \u0438\u0437 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u043e\u0438\u0306 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%201577-93%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B8%20%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 16523-97 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0438\u0437 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0438\u0306 \u0438 \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0431\u0449\u0435\u0433\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2016523-97%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B8%D0%B7%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%B8%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 19281-89 \u041f\u0440\u043e\u043a\u0430\u0442 \u0438\u0437 \u0441\u0442\u0430\u043b\u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0438\u0306 \u043f\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u0438 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2019281-89%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%B8%D0%B7%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BF%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 19903-74 \u041f\u0440\u043e\u043a\u0430\u0442 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0438\u0306 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2019903-74%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B8%CC%86%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 19904-90 \u041f\u0440\u043e\u043a\u0430\u0442 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u043a\u0430\u0442\u0430\u043d\u044b\u0438\u0306 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2019904-90%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B8%CC%86%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 24045-94 \u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u0438\u0306 \u0433\u043d\u0443\u0442\u044b\u0435 \u0441 \u0442\u0440\u0430\u043f\u0435\u0446\u0438\u0435\u0432\u0438\u0434\u043d\u044b\u043c\u0438 \u0433\u043e\u0444\u0440\u0430\u043c\u0438 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2024045-94%20%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B8%CC%86%20%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D1%81%20%D1%82%D1%80%D0%B0%D0%BF%D0%B5%D1%86%D0%B8%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%B3%D0%BE%D1%84%D1%80%D0%B0%D0%BC%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B0%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 30246-94 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0440\u0443\u043b\u043e\u043d\u043d\u044b\u0438\u0306 \u0441 \u0437\u0430\u0449\u0438\u0442\u043d\u043e-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2030246-94%20%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D1%80%D1%83%D0%BB%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D1%81%20%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%BE-%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%BC%20%D0%BF%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5%D0%BC%20%D0%B4%D0%BB%D1%8F%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 4041-71 \u041f\u0440\u043e\u043a\u0430\u0442 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0434\u043b\u044f \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0438\u0306 \u0448\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0438 \u0438\u0437 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u043e\u0438\u0306 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%204041-71%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B8%CC%86%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 5582-75 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e-\u0441\u0442\u043e\u0438\u0306\u043a\u0438\u0438\u0306, \u0436\u0430\u0440\u043e\u0441\u0442\u043e\u0438\u0306\u043a\u0438\u0438\u0306 \u0438 \u0436\u0430\u0440\u043e\u043f\u0440\u043e\u0447\u043d\u044b\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%205582-75%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B8%D0%B8%CC%86%2C%20%D0%B6%D0%B0%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B8%D0%B8%CC%86%20%D0%B8%20%D0%B6%D0%B0%D1%80%D0%BE%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 7350-77 \u0421\u0442\u0430\u043b\u044c \u0442\u043e\u043b\u0441\u0442\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u0430\u044f \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e-\u0441\u0442\u043e\u0438\u0306\u043a\u0430\u044f, \u0436\u0430\u0440\u043e\u0441\u0442\u043e\u0438\u0306\u043a\u0430\u044f \u0438 \u0436\u0430\u0440\u043e\u043f\u0440\u043e\u0447\u043d\u0430\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%207350-77%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D1%82%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B0%D1%8F%2C%20%D0%B6%D0%B0%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%B0%D1%8F%20%D0%B8%20%D0%B6%D0%B0%D1%80%D0%BE%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8568-77 \u041b\u0438\u0441\u0442\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441 \u0440\u043e\u043c\u0431\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438 \u0447\u0435\u0447\u0435\u0432\u0438\u0447\u043d\u044b\u043c \u0440\u0438\u0444\u043b\u0435\u043d\u0438\u0435\u043c (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208568-77%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%20%D1%80%D0%BE%D0%BC%D0%B1%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC%20%D0%B8%20%D1%87%D0%B5%D1%87%D0%B5%D0%B2%D0%B8%D1%87%D0%BD%D1%8B%D0%BC%20%D1%80%D0%B8%D1%84%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 9045-93 \u041f\u0440\u043e\u043a\u0430\u0442 \u0442\u043e\u043d\u043a\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0438\u0306 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u043a\u0430\u0442\u0430\u043d\u044b\u0438\u0306 \u0438\u0437 \u043d\u0438\u0437\u043a\u043e\u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 \u0434\u043b\u044f \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0438\u0306 \u0448\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%209045-93%20%20%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%D0%B7%20%D0%BD%D0%B8%D0%B7%D0%BA%D0%BE%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B8%CC%86%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2%D0%BA%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b 802 \u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0438\u0306 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u043e\u043b\u0441\u0442\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u043a\u0430\u0442\u0430 \u0438\u0437 \u0441\u0442\u0430\u043b\u0438 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%20802%20%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8%20%D1%82%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%20%D0%B8%D0%B7%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0.pdf"
		}, {
			name: "\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b 804 \u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0438\u0306 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u043e\u043b\u0441\u0442\u043e\u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u043a\u0430\u0442\u0430 \u0438\u0437 \u0441\u0442\u0430\u043b\u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0438\u0306 \u043f\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u0438.",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%9B%D0%B8%D1%81%D1%82/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%20804%20%20%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8%20%D1%82%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%20%D0%B8%D0%B7%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BF%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8..pdf"
		}]
	}, {
		id: 3,
		title: "\u0421\u043e\u0440\u0442\u043e\u0432\u043e\u0438\u0306 \u043f\u0440\u043e\u043a\u0430\u0442",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 103-76 \u041f\u043e\u043b\u043e\u0441\u0430 \u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u0430\u044f (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%20103-76%20%D0%9F%D0%BE%D0%BB%D0%BE%D1%81%D0%B0%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0%D1%8F%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 10884-94 \u0421\u0442\u0430\u043b\u044c \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u043d\u0430\u044f \u0442\u0435\u0440\u043c\u043e\u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u043f\u0440\u043e\u0447\u043d\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0436\u0435\u043b\u0435\u0437\u043e\u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2010884-94%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D1%83%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BE%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1133-71 \u0421\u0442\u0430\u043b\u044c \u043a\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0440\u0443\u0433\u043b\u0430\u044f \u0438 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%201133-71%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%B8%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 11474-76 \u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043d\u0443\u0442\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2011474-76%20%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 19425-74 \u0411\u0430\u043b\u043a\u0438 \u0434\u0432\u0443\u0442\u0430\u0432\u0440\u043e\u0432\u044b\u0435 \u0438 \u0448\u0432\u0435\u043b\u043b\u0435\u0440\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2019425-74%20%20%D0%91%D0%B0%D0%BB%D0%BA%D0%B8%20%D0%B4%D0%B2%D1%83%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B8%20%D1%88%D0%B2%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 2590-88 \u041f\u0440\u043e\u043a\u0430\u0442 \u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0438\u0306 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0438\u0306 \u043a\u0440\u0443\u0433\u043b\u044b\u0438\u0306 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%202590-88%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B8%CC%86%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B8%CC%86%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 2591-88 \u041f\u0440\u043e\u043a\u0430\u0442 \u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0438\u0306 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0438\u0306 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0438\u0306 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%202591-88%20%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B8%CC%86%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B8%CC%86%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 30136-95 \u041a\u0430\u0442\u0430\u043d\u043a\u0430 \u0438\u0437 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%2030136-95%20%D0%9A%D0%B0%D1%82%D0%B0%D0%BD%D0%BA%D0%B0%20%D0%B8%D0%B7%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 380-94 \u0421\u0442\u0430\u043b\u044c \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u0430\u044f \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 (\u043c\u0430\u0440\u043a\u0438)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%20380-94%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D1%8F%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 5267.1-90 \u0428\u0432\u0435\u043b\u043b\u0435\u0440\u044b (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%205267.1-90%20%D0%A8%D0%B2%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 535-2005 \u041f\u0440\u043e\u043a\u0430\u0442 \u0441\u043e\u0440\u0442\u043e\u0432\u043e\u0438\u0306 \u0438 \u0444\u0430\u0441\u043e\u043d\u043d\u044b\u0438\u0306 \u0438\u0437 \u0441\u0442\u0430\u043b\u0438 \u0443\u0433\u043b\u0435\u0440\u043e\u0434\u0438\u0441\u0442\u043e\u0438\u0306 \u043e\u0431\u044b\u043a\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%20535-2005%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D1%81%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%B8%20%D1%84%D0%B0%D1%81%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%D0%B7%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20%D1%83%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%B8%D1%81%D1%82%D0%BE%D0%B8%CC%86%20%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 5781-82 \u0421\u0442\u0430\u043b\u044c \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u0430\u044f \u0434\u043b\u044f \u0430\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0435\u043b\u0435\u0437\u043e\u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%205781-82%20%D0%A1%D1%82%D0%B0%D0%BB%D1%8C%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BE%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 7511-73 \u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u043a\u043e\u043d\u043d\u044b\u0445 \u0438 \u0444\u043e\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043f\u043b\u0435\u0442\u043e\u0432 \u0438 \u043e\u043a\u043e\u043d\u043d\u044b\u0445 \u043f\u0430\u043d\u0435\u043b\u0435\u0438\u0306 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0434\u0430\u043d\u0438\u0438\u0306",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%207511-73%20%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%B8%20%D1%84%D0%BE%D0%BD%D0%B0%D1%80%D0%BD%D1%8B%D1%85%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%20%D0%B8%20%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%CC%86.pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8239-89 \u0414\u0432\u0443\u0442\u0430\u0432\u0440\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208239-89%20%D0%94%D0%B2%D1%83%D1%82%D0%B0%D0%B2%D1%80%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8240-97 \u0428\u0432\u0435\u043b\u043b\u0435\u0440\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208240-97%20%D0%A8%D0%B2%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8278-83 \u0428\u0432\u0435\u043b\u043b\u0435\u0440\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043d\u0443\u0442\u044b\u0435 \u0440\u0430\u0432\u043d\u043e\u043f\u043e\u043b\u043e\u0447\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208278-83%20%D0%A8%D0%B2%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8281-80 \u0428\u0432\u0435\u043b\u043b\u0435\u0440\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043d\u0443\u0442\u044b\u0435 \u043d\u0435\u0440\u0430\u0432\u043d\u043e\u043f\u043e\u043b\u043e\u0447\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208281-80%20%D0%A8%D0%B2%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D0%BD%D0%B5%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8509-93 \u0423\u0433\u043e\u043b\u043a\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0435 \u0440\u0430\u0432\u043d\u043e\u043f\u043e\u043b\u043e\u0447\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208509-93%20%D0%A3%D0%B3%D0%BE%D0%BB%D0%BA%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8510-86 \u0423\u0433\u043e\u043b\u043a\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u043a\u0430\u0442\u0430\u043d\u044b\u0435 \u043d\u0435\u0440\u0430\u0432\u043d\u043e\u043f\u043e\u043b\u043e\u0447\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%208510-86%20%D0%A3%D0%B3%D0%BE%D0%BB%D0%BA%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D1%8B%D0%B5%20%D0%BD%D0%B5%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 P 52544-2006 \u041f\u0440\u043e\u043a\u0430\u0442 \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u043d\u044b\u0438\u0306 \u0441\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0438\u0306",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A1%D0%BE%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D1%82/%D0%93%D0%9E%D0%A1%D0%A2%20P%2052544-2006%20%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D1%81%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B8%CC%86.pdf"
		}]
	}, {
		id: 4,
		title: "\u0422\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0430\u044f \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u0430",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 1215-79 \u041e\u0442\u043b\u0438\u0432\u043a\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%201215-79%20%D0%9E%D1%82%D0%BB%D0%B8%D0%B2%D0%BA%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 12815-80 \u0424\u043b\u0430\u043d\u0446\u044b \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b, \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u0435\u0438\u0306 \u0438 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u043d\u0430 \u0420\u0443 \u043e\u0442 0,1 \u0434\u043e 20 \u041c\u041f\u0430 \u043e\u0442 1 \u0434\u043e 200 \u043a\u0433\u0441\u0441\u043c2",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2012815-80%20%D0%A4%D0%BB%D0%B0%D0%BD%D1%86%D1%8B%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D1%8B%2C%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D1%87%D0%B0%D1%81%D1%82%D0%B5%D0%B8%CC%86%20%D0%B8%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%A0%D1%83%20%D0%BE%D1%82%200%2C1%20%D0%B4%D0%BE%2020%20%D0%9C%D0%9F%D0%B0%20%D0%BE%D1%82%201%20%D0%B4%D0%BE%20200%20%D0%BA%D0%B3%D1%81%D1%81%D0%BC2.pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 12816-80 \u0424\u043b\u0430\u043d\u0446\u044b \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b, \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u0435\u0438\u0306 \u0438 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u043d\u0430 \u0420\u0443 \u043e\u0442 0,1 \u0434\u043e 20 \u041c\u041f\u0430 \u043e\u0442 1 \u0434\u043e 200 \u043a\u0433\u0441\u0441\u043c2 (\u043e\u0431\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2012816-80%20%D0%A4%D0%BB%D0%B0%D0%BD%D1%86%D1%8B%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D1%8B%2C%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D1%87%D0%B0%D1%81%D1%82%D0%B5%D0%B8%CC%86%20%D0%B8%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%A0%D1%83%20%D0%BE%D1%82%200%2C1%20%D0%B4%D0%BE%2020%20%D0%9C%D0%9F%D0%B0%20%D0%BE%D1%82%201%20%D0%B4%D0%BE%20200%20%D0%BA%D0%B3%D1%81%D1%81%D0%BC2%20(%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 12820-80 \u0424\u043b\u0430\u043d\u0446\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u043e\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u0432\u0430\u0440\u043d\u044b\u0435 \u043d\u0430 \u0420\u0443 \u043e\u0442 0,1 \u0434\u043e 2,5 \u041c\u041f\u0430 \u043e\u0442 1 \u0434\u043e 25 \u043a\u0433\u0441\u0441\u043c2 (\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u044b).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2012820-80%20%20%D0%A4%D0%BB%D0%B0%D0%BD%D1%86%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BD%D0%B0%20%D0%A0%D1%83%20%D0%BE%D1%82%200%2C1%20%D0%B4%D0%BE%202%2C5%20%D0%9C%D0%9F%D0%B0%20%D0%BE%D1%82%201%20%D0%B4%D0%BE%2025%20%D0%BA%D0%B3%D1%81%D1%81%D0%BC2%20(%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%B8%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 12821-80 \u0424\u043b\u0430\u043d\u0446\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u043e\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u0432\u0430\u0440\u043d\u044b\u0435 \u043d\u0430 \u0420\u0443 \u043e\u0442 0,1 \u0434\u043e 20,0 \u041c\u041f\u0430 (\u043e\u0442 1 \u0434\u043e 200 \u043a\u0433\u0441\u0441\u043c2) (\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2012821-80%20%20%D0%A4%D0%BB%D0%B0%D0%BD%D1%86%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BD%D0%B0%20%D0%A0%D1%83%20%D0%BE%D1%82%200%2C1%20%D0%B4%D0%BE%2020%2C0%20%D0%9C%D0%9F%D0%B0%20(%D0%BE%D1%82%201%20%D0%B4%D0%BE%20200%20%D0%BA%D0%B3%D1%81%D1%81%D0%BC2)%20(%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%B8%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 17375-2001 \u041e\u0442\u0432\u043e\u0434\u044b \u043a\u0440\u0443\u0442\u043e\u0438\u0437\u043e\u0433\u043d\u0443\u0442\u044b\u0435 \u0442\u0438\u043f\u0430 3D (R = 1.5DN) (\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2017375-2001%20%D0%9E%D1%82%D0%B2%D0%BE%D0%B4%D1%8B%20%D0%BA%D1%80%D1%83%D1%82%D0%BE%D0%B8%D0%B7%D0%BE%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D1%82%D0%B8%D0%BF%D0%B0%203D%20(R%20%3D%201.5DN)%20(%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 17380-83 \u0414\u0435\u0442\u0430\u043b\u0438 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u0432\u0430\u0440\u043d\u044b\u0435 \u043d\u0430 \u0420\u0443 10\u041c\u043f\u0430(100 \u043a\u0433\u0441\u0441\u043c2) (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%2017380-83%20%20%D0%94%D0%B5%D1%82%D0%B0%D0%BB%D0%B8%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BD%D0%B0%20%D0%A0%D1%83%2010%D0%9C%D0%BF%D0%B0(100%20%D0%BA%D0%B3%D1%81%D1%81%D0%BC2)%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8944-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208944-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8946-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0423\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u043d\u044b\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208946-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%A3%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8947-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u0423\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208947-75%20%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%A3%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8948-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u0422\u0440\u043e\u0438\u0306\u043d\u0438\u043a\u0438 \u043f\u0440\u044f\u043c\u044b\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208948-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%A2%D1%80%D0%BE%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%BF%D1%80%D1%8F%D0%BC%D1%8B%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8949-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u0422\u0440\u043e\u0438\u0306\u043d\u0438\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208949-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%A2%D1%80%D0%BE%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8952-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u041a\u0440\u0435\u0441\u0442\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208952-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%9A%D1%80%D0%B5%D1%81%D1%82%D1%8B%20%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8956-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u041c\u0443\u0444\u0442\u044b \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0438\u0440\u0443\u044e\u0449\u0438\u0435 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208956-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%9C%D1%83%D1%84%D1%82%D1%8B%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%81%D0%B8%D1%80%D1%83%D1%8E%D1%89%D0%B8%D0%B5%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8960-75 \u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0432\u043a\u043e\u0433\u043e \u0447\u0443\u0433\u0443\u043d\u0430 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432. \u0424\u0443\u0442\u043e\u0440\u043a\u0438 (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208960-75%20%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%B2%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%87%D1%83%D0%B3%D1%83%D0%BD%D0%B0%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2.%20%D0%A4%D1%83%D1%82%D0%BE%D1%80%D0%BA%D0%B8%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8965-75 \u0427\u0430\u0441\u0442\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0420=1,6\u041c\u043f\u0430",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208965-75%20%20%D0%A7%D0%B0%D1%81%D1%82%D0%B8%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%A0%3D1%2C6%D0%9C%D0%BF%D0%B0.pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8969-75 \u0427\u0430\u0441\u0442\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441 \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0438\u0306 \u0440\u0435\u0437\u044c\u0431\u043e\u0438\u0306 \u0434\u043b\u044f \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0420=1,6\u041c\u043f\u0430. \u0421\u0433\u043e\u043d\u044b (\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%B0%D1%80%D0%BC%D0%B0%D1%82%D1%83%D1%80%D0%B0/%D0%93%D0%9E%D0%A1%D0%A2%208969-75%20%D0%A7%D0%B0%D1%81%D1%82%D0%B8%20%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D0%BE%D0%B8%CC%86%20%D0%B4%D0%BB%D1%8F%20%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%A0%3D1%2C6%D0%9C%D0%BF%D0%B0.%20%D0%A1%D0%B3%D0%BE%D0%BD%D1%8B%20(%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B).pdf"
		}]
	}, {
		id: 5,
		title: "\u0422\u0440\u0443\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u043a\u0430\u0442",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 10704-91 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0432\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u044f\u043c\u043e\u0448\u043e\u0432\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2010704-91%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 10705-80 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0432\u0430\u0440\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2010705-80%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 10706-76 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0432\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u044f\u043c\u043e\u0448\u043e\u0432\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2010706-76%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 11068-81 \u0422\u0440\u0443\u0431\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0432\u0430\u0440\u043d\u044b\u0435 \u0438\u0437 \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e-\u0441\u0442\u043e\u0438\u0306\u043a\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2011068-81%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 13663-86 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044c\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2013663-86%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 30245-03 \u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0433\u043d\u0443\u0442\u044b\u0435 \u0437\u0430\u043c\u043a\u043d\u0443\u0442\u044b\u0435 \u0441\u0432\u0430\u0440\u043d\u044b\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u0438 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2030245-03%20%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B8%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D0%B7%D0%B0%D0%BC%D0%BA%D0%BD%D1%83%D1%82%D1%8B%D0%B5%20%D1%81%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 3262-75 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0434\u043e\u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%203262-75%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B2%D0%BE%D0%B4%D0%BE%D0%B3%D0%B0%D0%B7%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 550-75 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0434\u043b\u044f \u043d\u0435\u0444\u0442\u0435\u043f\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0438\u0306 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20550-75%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%BD%D0%B5%D1%84%D1%82%D0%B5%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8639-82 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208639-82%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8642-68 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u0432\u0430\u043b\u044c\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208642-68%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8645-68 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208645-68%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8731-87 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208731-87%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8732-78 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208732-78%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8733-74 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u0442\u0435\u043f\u043b\u043e\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208733-74%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 8734-75 \u0422\u0440\u0443\u0431\u044b \u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 (\u0441\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%208734-75%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%81%D0%BE%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 9940-81. \u0422\u0440\u0443\u0431\u044b \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0433\u043e\u0440\u044f\u0447\u0435\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e-\u0441\u0442\u043e\u0438\u0306\u043a\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%209940-81.%20%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 9941-81 \u0422\u0440\u0443\u0431\u044b \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u044b\u0435 \u0445\u043e\u043b\u043e\u0434\u043d\u043e-\u0438 \u0442\u0435\u043f\u043b\u043e\u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043a\u043e\u0440\u0440\u043e\u0437\u0438\u043e\u043d\u043d\u043e\u0441\u0442\u043e\u0438\u0306\u043a\u043e\u0438\u0306 \u0441\u0442\u0430\u043b\u0438 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A2%D1%80%D1%83%D0%B1%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%209941-81%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%B1%D0%B5%D1%81%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%BE-%D0%B8%20%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%BE%D0%B8%CC%86%D0%BA%D0%BE%D0%B8%CC%86%20%D1%81%D1%82%D0%B0%D0%BB%D0%B8%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}]
	}, {
		id: 6,
		title: "\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u044b",
		docs: [{
			name: "\u0413\u041e\u0421\u0422 1066-90 \u041f\u0440\u043e\u0432\u043e\u043b\u043e\u043a\u0430 \u043b\u0430\u0442\u0443\u043d\u043d\u0430\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201066-90%20%D0%9F%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%B0%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D0%B0%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 11069-01 \u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0438\u0306 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0438\u0306 (\u043c\u0430\u0440\u043a\u0438).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2011069-01%20%D0%90%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B8%CC%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%B8%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1173-93 \u041b\u0435\u043d\u0442\u044b \u043c\u0435\u0434\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201173-93%20%D0%9B%D0%B5%D0%BD%D1%82%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1180-91 \u0410\u043d\u043e\u0434\u044b \u0446\u0438\u043d\u043a\u043e\u0432\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201180-91%20%D0%90%D0%BD%D0%BE%D0%B4%D1%8B%20%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1208-90 \u0422\u0440\u0443\u0431\u044b \u0431\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0435\u0441\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201208-90%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1209-90 \u0411\u0430\u0431\u0431\u0438\u0442\u044b \u043a\u0430\u043b\u044c\u0446\u0438\u0435\u0432\u044b\u0435 \u0432 \u0447\u0443\u0448\u043a\u0430\u0445 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201209-90%20%D0%91%D0%B0%D0%B1%D0%B1%D0%B8%D1%82%D1%8B%20%D0%BA%D0%B0%D0%BB%D1%8C%D1%86%D0%B8%D0%B5%D0%B2%D1%8B%D0%B5%20%D0%B2%20%D1%87%D1%83%D1%88%D0%BA%D0%B0%D1%85%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1320-74 \u0411\u0430\u0431\u0431\u0438\u0442\u044b \u043e\u043b\u043e\u0432\u044f\u043d\u043d\u044b\u0435 \u0438 \u0441\u0432\u0438\u043d\u0446\u043e\u0432\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201320-74%20%20%D0%91%D0%B0%D0%B1%D0%B1%D0%B8%D1%82%D1%8B%20%D0%BE%D0%BB%D0%BE%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%81%D0%B2%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1535-91 \u041f\u0440\u0443\u0442\u043a\u0438 \u043c\u0435\u0434\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201535-91%20%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 15527-04 \u0421\u043f\u043b\u0430\u0432\u044b \u043c\u0435\u0434\u043d\u043e-\u0446\u0438\u043d\u043a\u043e\u0432\u044b\u0435 (\u043b\u0430\u0442\u0443\u043d\u0438), \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u043c\u0430\u0440\u043a\u0438).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2015527-04%20%D0%A1%D0%BF%D0%BB%D0%B0%D0%B2%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D0%BE-%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20(%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%B8)%2C%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5%20%D0%B4%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 1628-78 \u041f\u0440\u0443\u0442\u043a\u0438 \u0431\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%201628-78%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 17232-99 \u041f\u043b\u0438\u0442\u044b \u0438\u0437 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u0438 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0441\u043f\u043b\u0430\u0432\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2017232-99%20%D0%9F%D0%BB%D0%B8%D1%82%D1%8B%20%D0%B8%D0%B7%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B5%D0%B2%D1%8B%D1%85%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 18175-78 \u0411\u0440\u043e\u043d\u0437\u044b \u0431\u0435\u0437\u043e\u043b\u043e\u0432\u044f\u043d\u043d\u044b\u0435, \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u043c\u0430\u0440\u043a\u0438).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2018175-78%20%D0%91%D1%80%D0%BE%D0%BD%D0%B7%D1%8B%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BB%D0%BE%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B5%2C%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5%20%D0%B4%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 18482-79 \u0422\u0440\u0443\u0431\u044b \u043f\u0440\u0435\u0441\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u0438 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0441\u043f\u043b\u0430\u0432\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2018482-79%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B5%D0%B2%D1%8B%D1%85%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 2060-90 \u041f\u0440\u0443\u0442\u043a\u0438 \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%202060-90%20%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 21488-97 \u041f\u0440\u0443\u0442\u043a\u0438 \u043f\u0440\u0435\u0441\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u0438 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0441\u043f\u043b\u0430\u0432\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2021488-97%20%D0%9F%D1%80%D1%83%D1%82%D0%BA%D0%B8%20%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%D0%B7%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B5%D0%B2%D1%8B%D1%85%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 21631-76 \u041b\u0438\u0441\u0442\u044b \u0438\u0437 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f \u0438 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0441\u043f\u043b\u0430\u0432\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2021631-76%20%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D0%B8%D0%B7%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B5%D0%B2%D1%8B%D1%85%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 21646-03 \u0422\u0440\u0443\u0431\u044b \u043c\u0435\u0434\u043d\u044b\u0435 \u0438 \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0442\u0435\u043f\u043b\u043e\u043e\u0431\u043c\u0435\u043d\u043d\u044b\u0445 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043e\u0432 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2021646-03%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D0%B0%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 21930-76 \u041f\u0440\u0438\u043f\u043e\u0438 \u043e\u043b\u043e\u0432\u044f\u043d\u043d\u043e-\u0441\u0432\u0438\u043d\u0446\u043e\u0432\u044b\u0435 \u0432 \u0447\u0443\u0448\u043a\u0430\u0445 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2021930-76%20%20%D0%9F%D1%80%D0%B8%D0%BF%D0%BE%D0%B8%20%D0%BE%D0%BB%D0%BE%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE-%D1%81%D0%B2%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B2%20%D1%87%D1%83%D1%88%D0%BA%D0%B0%D1%85%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 21931-76 \u041f\u0440\u0438\u043f\u043e\u0438 \u043e\u043b\u043e\u0432\u044f\u043d\u043d\u043e-\u0441\u0432\u0438\u043d\u0446\u043e\u0432\u044b\u0435 \u0432 \u0438\u0437\u0434\u0435\u043b\u0438\u044f\u0445 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2021931-76%20%20%D0%9F%D1%80%D0%B8%D0%BF%D0%BE%D0%B8%20%D0%BE%D0%BB%D0%BE%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE-%D1%81%D0%B2%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B2%20%D0%B8%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F%D1%85%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 2208-91 \u041b\u0435\u043d\u0442\u044b \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0435 \u043e\u0431\u0449\u0435\u0433\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%202208-91%20%D0%9B%D0%B5%D0%BD%D1%82%D1%8B%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 22861-93 \u0421\u0432\u0438\u043d\u0435\u0446 \u0432\u044b\u0441\u043e\u043a\u043e\u0438\u0306 \u0447\u0438\u0441\u0442\u043e\u0442\u044b (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%2022861-93%20%20%D0%A1%D0%B2%D0%B8%D0%BD%D0%B5%D1%86%20%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B8%CC%86%20%D1%87%D0%B8%D1%81%D1%82%D0%BE%D1%82%D1%8B%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 3640-94 \u0426\u0438\u043d\u043a (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%203640-94%20%20%D0%A6%D0%B8%D0%BD%D0%BA%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 3778-98 \u0421\u0432\u0438\u043d\u0435\u0446 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%203778-98%20%D0%A1%D0%B2%D0%B8%D0%BD%D0%B5%D1%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 434-78 \u041f\u0440\u043e\u0432\u043e\u043b\u043e\u043a\u0430 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0448\u0438\u043d\u044b \u043c\u0435\u0434\u043d\u044b\u0435 \u0434\u043b\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0446\u0435\u043b\u0435\u0438\u0306 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20434-78%20%D0%9F%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%B0%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D1%88%D0%B8%D0%BD%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D1%86%D0%B5%D0%BB%D0%B5%D0%B8%CC%86%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 4784-97 \u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0438\u0306 \u0438 \u0441\u043f\u043b\u0430\u0432\u044b \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0434\u0435\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u043c\u044b\u0435 (\u043c\u0430\u0440\u043a\u0438)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%204784-97%20%20%D0%90%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B8%CC%86%20%D0%B8%20%D1%81%D0%BF%D0%BB%D0%B0%D0%B2%D1%8B%20%D0%B0%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B5%D0%B2%D1%8B%D0%B5%20%D0%B4%D0%B5%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 494-90 \u0422\u0440\u0443\u0431\u044b \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20494-90%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 495-92 \u041b\u0438\u0441\u0442\u044b \u0438 \u043f\u043e\u043b\u043e\u0441\u044b \u043c\u0435\u0434\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20495-92%20%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 598-90 \u041b\u0438\u0441\u0442\u044b \u0446\u0438\u043d\u043a\u043e\u0432\u044b\u0435 \u043e\u0431\u0449\u0435\u0433\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20598-90%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D1%86%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 617-90 \u0422\u0440\u0443\u0431\u044b \u043c\u0435\u0434\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20617-90%20%D0%A2%D1%80%D1%83%D0%B1%D1%8B%20%D0%BC%D0%B5%D0%B4%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 859-01 \u041c\u0435\u0434\u044c (\u043c\u0430\u0440\u043a\u0438).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20859-01%20%D0%9C%D0%B5%D0%B4%D1%8C%20(%D0%BC%D0%B0%D1%80%D0%BA%D0%B8)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 860-75 \u041e\u043b\u043e\u0432\u043e (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20860-75%20%D0%9E%D0%BB%D0%BE%D0%B2%D0%BE%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 931-90 \u041b\u0438\u0441\u0442\u044b \u0438 \u043f\u043e\u043b\u043e\u0441\u044b \u043b\u0430\u0442\u0443\u043d\u043d\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f).",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%20931-90%20%20%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F)..pdf"
		}, {
			name: "\u0413\u041e\u0421\u0422 9559-89 \u041b\u0438\u0441\u0442\u044b \u0441\u0432\u0438\u043d\u0446\u043e\u0432\u044b\u0435 (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f)",
			url: "https://s3.eu-central-1.amazonaws.com/metal-calculator/gosts/%D0%93%D0%9E%D0%A1%D0%A2%D0%AB/%D0%A6%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%8B/%D0%93%D0%9E%D0%A1%D0%A2%209559-89%20%D0%9B%D0%B8%D1%81%D1%82%D1%8B%20%D1%81%D0%B2%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D1%8B%D0%B5%20(%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F).pdf"
		}]
	}],
	data_grades = [{
		id: 1,
		title: "\u0421\u0442 3",
		p: 7.8,
		metall_id: 1
	}, {
		id: 2,
		title: "10",
		p: 7.85,
		metall_id: 1
	}, {
		id: 3,
		title: "20",
		p: 7.85,
		metall_id: 1
	}, {
		id: 4,
		title: "40\u0425",
		p: 7.82,
		metall_id: 1
	}, {
		id: 5,
		title: "45",
		p: 7.82,
		metall_id: 1
	}, {
		id: 6,
		title: "65",
		p: 7.81,
		metall_id: 1
	}, {
		id: 7,
		title: "65\u0413",
		p: 7.85,
		metall_id: 1
	}, {
		id: 8,
		title: "09\u04132\u0421",
		p: 7.85,
		metall_id: 1
	}, {
		id: 9,
		title: "15\u04255\u041c",
		p: 7.75,
		metall_id: 1
	}, {
		id: 10,
		title: "10\u0425\u0421\u041d\u0414",
		p: 7.85,
		metall_id: 1
	}, {
		id: 11,
		title: "12\u04251\u041c\u0424",
		p: 7.8,
		metall_id: 1
	}, {
		id: 12,
		title: "\u0428\u042515",
		p: 7.81,
		metall_id: 1
	}, {
		id: 13,
		title: "\u04206\u041c5",
		p: 8.3,
		metall_id: 1
	}, {
		id: 14,
		title: "\u04237",
		p: 7.83,
		metall_id: 1
	}, {
		id: 15,
		title: "\u04238",
		p: 7.84,
		metall_id: 1
	}, {
		id: 16,
		title: "\u04238\u0410",
		p: 7.83,
		metall_id: 1
	}, {
		id: 17,
		title: "\u042310",
		p: 7.81,
		metall_id: 1
	}, {
		id: 18,
		title: "\u042310\u0410",
		p: 7.81,
		metall_id: 1
	}, {
		id: 19,
		title: "\u042312\u0410",
		p: 7.81,
		metall_id: 1
	}, {
		id: 20,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 7.8,
		metall_id: 1
	}, {
		id: 21,
		title: "08X17T",
		p: 7.76,
		metall_id: 2
	}, {
		id: 22,
		title: "20\u042513",
		p: 7.67,
		metall_id: 2
	}, {
		id: 23,
		title: "30\u042513",
		p: 7.67,
		metall_id: 2
	}, {
		id: 24,
		title: "40\u042513",
		p: 7.65,
		metall_id: 2
	}, {
		id: 25,
		title: "08X18H10",
		p: 7.85,
		metall_id: 2
	}, {
		id: 26,
		title: "12\u042518\u041d10\u0422",
		p: 7.9,
		metall_id: 2
	}, {
		id: 27,
		title: "10X17H13M2T",
		p: 7.9,
		metall_id: 2
	}, {
		id: 68,
		title: "06\u0425\u041d28\u041c\u0414\u0422",
		p: 7.96,
		metall_id: 2
	}, {
		id: 28,
		title: "20\u042523\u041d18",
		p: 7.9,
		metall_id: 2
	}, {
		id: 29,
		title: "AISI 304",
		p: 7.85,
		metall_id: 2
	}, {
		id: 30,
		title: "AISI 316L",
		p: 8,
		metall_id: 2
	}, {
		id: 31,
		title: "AISI 316Ti",
		p: 7.95,
		metall_id: 2
	}, {
		id: 32,
		title: "AISI 321",
		p: 7.9,
		metall_id: 2
	}, {
		id: 33,
		title: "AISI 409",
		p: 7.76,
		metall_id: 2
	}, {
		id: 34,
		title: "AISI 430",
		p: 7.72,
		metall_id: 2
	}, {
		id: 35,
		title: "AISI 904L",
		p: 7.96,
		metall_id: 2
	}, {
		id: 36,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 7.9,
		metall_id: 2
	}, {
		id: 37,
		title: "\u04105",
		p: 2.71,
		metall_id: 3
	}, {
		id: 38,
		title: "\u0410\u0414",
		p: 2.71,
		metall_id: 3
	}, {
		id: 39,
		title: "\u0410\u04141",
		p: 2.71,
		metall_id: 3
	}, {
		id: 40,
		title: "\u0410\u041a4",
		p: 2.77,
		metall_id: 3
	}, {
		id: 41,
		title: "\u0410\u041a6",
		p: 2.75,
		metall_id: 3
	}, {
		id: 42,
		title: "\u0410\u041c\u0433",
		p: 2.67,
		metall_id: 3
	}, {
		id: 43,
		title: "\u0410\u041c\u0446",
		p: 2.73,
		metall_id: 3
	}, {
		id: 44,
		title: "\u041295",
		p: 2.85,
		metall_id: 3
	}, {
		id: 45,
		title: "\u04141",
		p: 2.8,
		metall_id: 3
	}, {
		id: 46,
		title: "\u041416",
		p: 2.78,
		metall_id: 3
	}, {
		id: 47,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 2.75,
		metall_id: 3
	}, {
		id: 48,
		title: "\u041c1",
		p: 8.91,
		metall_id: 4
	}, {
		id: 49,
		title: "\u041c2",
		p: 8.93,
		metall_id: 4
	}, {
		id: 50,
		title: "\u041c3",
		p: 8.93,
		metall_id: 4
	}, {
		id: 51,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 8.92,
		metall_id: 4
	}, {
		id: 52,
		title: "\u041b63",
		p: 8.44,
		metall_id: 5
	}, {
		id: 53,
		title: "\u041b68",
		p: 8.6,
		metall_id: 5
	}, {
		id: 54,
		title: "\u041b\u0416\u041c\u044659-1-1",
		p: 8.5,
		metall_id: 5
	}, {
		id: 55,
		title: "\u041b\u041c\u044658-2",
		p: 8.4,
		metall_id: 5
	}, {
		id: 56,
		title: "\u041b\u042158-2",
		p: 8.45,
		metall_id: 5
	}, {
		id: 57,
		title: "\u041b\u042159-1",
		p: 8.45,
		metall_id: 5
	}, {
		id: 58,
		title: "\u041b\u042163-3",
		p: 8.5,
		metall_id: 5
	}, {
		id: 59,
		title: "\u0411\u0440\u0410\u04169-4",
		p: 7.6,
		metall_id: 6
	}, {
		id: 60,
		title: "\u0411\u0440\u0410\u0416\u041c\u044610-3-1,5",
		p: 7.8,
		metall_id: 6
	}, {
		id: 61,
		title: "\u0411\u0440\u0410\u0416\u041d10-4-4",
		p: 7.5,
		metall_id: 6
	}, {
		id: 62,
		title: "\u0411\u0440\u0410\u041c\u04469-2",
		p: 7.6,
		metall_id: 6
	}, {
		id: 63,
		title: "\u0411\u0440\u04112",
		p: 8.2,
		metall_id: 6
	}, {
		id: 64,
		title: "\u0411\u0440\u041a\u041c\u04263-1",
		p: 8.4,
		metall_id: 6
	}, {
		id: 65,
		title: "\u0411\u0440\u041e\u04247-0,2",
		p: 7.8,
		metall_id: 6
	}, {
		id: 66,
		title: "\u0411\u0440\u041e\u0426\u04215-5-5",
		p: 8.8,
		metall_id: 6
	}, {
		id: 67,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 7.96,
		metall_id: 6
	}, {
		id: 68,
		title: "\u0412\u04221-0",
		p: 4.505,
		metall_id: 7
	}, {
		id: 69,
		title: "\u0412\u04221-00",
		p: 4.505,
		metall_id: 7
	}, {
		id: 70,
		title: "\u0412\u04221-1",
		p: 4.505,
		metall_id: 7
	}, {
		id: 71,
		title: "\u0410\u0422-6",
		p: 4.43,
		metall_id: 7
	}, {
		id: 72,
		title: "\u0412\u042214",
		p: 4.52,
		metall_id: 7
	}, {
		id: 73,
		title: "\u0412\u042220",
		p: 4.45,
		metall_id: 7
	}, {
		id: 74,
		title: "\u0412\u042222",
		p: 4.6,
		metall_id: 7
	}, {
		id: 75,
		title: "\u0412\u04223-1",
		p: 4.5,
		metall_id: 7
	}, {
		id: 76,
		title: "\u0412\u04225",
		p: 4.4,
		metall_id: 7
	}, {
		id: 77,
		title: "\u0412\u04225-1",
		p: 4.46,
		metall_id: 7
	}, {
		id: 78,
		title: "\u0412\u04226",
		p: 4.43,
		metall_id: 7
	}, {
		id: 79,
		title: "\u041e\u04224-1",
		p: 4.55,
		metall_id: 7
	}, {
		id: 80,
		title: "\u041f\u04227\u041c",
		p: 4.49,
		metall_id: 7
	}, {
		id: 81,
		title: "\u041f\u0440\u043e\u0447\u0435\u0435",
		p: 4.5,
		metall_id: 7
	}],
	data_metalls = [{
		id: 1,
		title: "\u0427\u0435\u0440\u043d\u044b\u0439",
		default_grade: "\u0421\u0442 3",
		form_title: "\u0441\u0442\u0430\u043b\u044c\u043d\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u0441\u0442\u0430\u043b\u0438",
		default_sort_id: 8
	}, {
		id: 2,
		title: "\u041d\u0435\u0440\u0436\u0430\u0432\u0435\u0439\u043a\u0430",
		default_grade: "12\u042518\u041d10\u0422",
		form_title: "\u043d\u0435\u0440\u0436\u0430\u0432\u0435\u044e\u0449\u0435{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u0441\u0442\u0430\u043b\u0438",
		default_sort_id: 8
	}, {
		id: 3,
		title: "\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439",
		default_grade: "\u0410\u041c\u0433",
		form_title: "\u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f",
		default_sort_id: 6
	}, {
		id: 4,
		title: "\u041c\u0435\u0434\u044c",
		default_grade: "\u041c1",
		form_title: "\u043c\u0435\u0434\u043d\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u043c\u0435\u0434\u0438",
		default_sort_id: 4
	}, {
		id: 5,
		title: "\u041b\u0430\u0442\u0443\u043d\u044c",
		default_grade: "\u041b63",
		form_title: "\u043b\u0430\u0442\u0443\u043d\u043d\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u043b\u0430\u0442\u0443\u043d\u0438",
		default_sort_id: 4
	}, {
		id: 6,
		title: "\u0411\u0440\u043e\u043d\u0437\u0430",
		default_grade: "\u0411\u0440\u04112",
		form_title: "\u0431\u0440\u043e\u043d\u0437\u043e\u0432\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u0431\u0440\u043e\u043d\u0437\u044b",
		default_sort_id: 4
	}, {
		id: 7,
		title: "\u0422\u0438\u0442\u0430\u043d",
		default_grade: "\u0411\u0440\u04112",
		form_title: "\u0442\u0438\u0442\u0430\u043d\u043e\u0432\u043e{end}",
		grade_title: "\u041c\u0430\u0440\u043a\u0430 \u0442\u0438\u0442\u0430\u043d\u0430",
		default_sort_id: 4
	}],
	data_sortaments = [{
		id: 1,
		key: "armature",
		title: "\u0410\u0440\u043c\u0430\u0442\u0443\u0440\u0430",
		metall_ids: [1],
		form_title: "a\u0440\u043c\u0430\u0442\u0443\u0440\u044b",
		metall_title_end: "\u0439",
		icon: "arm",
		fields: [{
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		has_grades: !1,
		has_calc_togler: !0
	}, {
		id: 2,
		key: "balk",
		title: "\u0411\u0430\u043b\u043a\u0430/\u0434\u0432\u0443\u0442\u0430\u0432\u0440",
		metall_ids: [1],
		form_title: "\u0431\u0430\u043b\u043a\u0438",
		metall_title_end: "\u0439",
		icon: "balk",
		fields: [{
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		has_grades: !1,
		has_calc_togler: !0
	}, {
		id: 3,
		key: "square",
		title: "\u041a\u0432\u0430\u0434\u0440\u0430\u0442",
		metall_ids: [1, 2, 3],
		props: ["a", "l"],
		form_title: "\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u0421\u0442\u043e\u0440\u043e\u043d\u0430 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0430",
			type: "a",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "square",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 4,
		key: "circle",
		title: "\u041a\u0440\u0443\u0433/\u043f\u0440\u0443\u0442\u043e\u043a",
		metall_ids: [1, 2, 3, 4, 5, 6, 7],
		props: ["d", "l"],
		form_title: "\u043a\u0440\u0443\u0433\u0430",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u043a\u0440\u0443\u0433\u0430 D",
			type: "d",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "circle",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 5,
		key: "ribbon",
		title: "\u041b\u0435\u043d\u0442\u0430",
		metall_ids: [1, 2, 3, 4, 5, 6, 7],
		props: ["a", "b", "t", "n"],
		form_title: "\u043b\u0435\u043d\u0442\u044b",
		metall_title_end: "\u0439",
		fields: [{
			label: "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u043d\u0442\u044b a",
			disp: "\u043c\u043c.",
			type: "a"
		}, {
			label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043b\u0435\u043d\u0442\u044b t",
			type: "t",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "b",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 6,
		key: "list",
		title: "\u041b\u0438\u0441\u0442/\u043f\u043b\u0438\u0442\u0430",
		metall_ids: [1, 2, 3, 4, 5, 6, 7],
		form_title: "\u043b\u0438\u0441\u0442\u0430",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043b\u0438\u0441\u0442\u0430 t",
			type: "t",
			disp: "\u043c\u043c."
		}, {
			label: "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0438\u0441\u0442\u0430 a",
			disp: "\u043c\u043c.",
			type: "a"
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 \u043b\u0438\u0441\u0442\u0430 b",
			type: "b",
			disp: "\u043c\u043c."
		}, {
			label: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
			type: "n",
			disp: "\u0448\u0442."
		}],
		icon: "arm",
		has_grades: !0
	}, {
		id: 7,
		key: "branch",
		title: "\u041e\u0442\u0432\u043e\u0434",
		metall_ids: [1, 2],
		form_title: "\u043e\u0442\u0432\u043e\u0434\u0430",
		metall_title_end: "\u0433\u043e",
		icon: "branch",
		has_grades: !1
	}, {
		id: 8,
		key: "pipeCircle",
		title: "\u0422\u0440\u0443\u0431\u0430 \u043a\u0440\u0443\u0433\u043b\u0430\u044f",
		metall_ids: [1, 2, 3, 4, 5, 7],
		form_title: "\u043a\u0440\u0443\u0433\u043b\u043e\u0439 \u0442\u0440\u0443\u0431\u044b",
		metall_title_end: "\u0439",
		fields: [{
			label: "\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0434\u0438\u0430\u043c\u0435\u0442\u0440 \u0442\u0440\u0443\u0431\u044b D",
			type: "d",
			disp: "\u043c\u043c."
		}, {
			label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0441\u0442\u0435\u043d\u043a\u0438 t",
			type: "t",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 9,
		key: "pipeProf",
		title: "\u0422\u0440\u0443\u0431\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c\u043d\u0430\u044f",
		metall_ids: [1, 2, 3, 7],
		form_title: "\u043f\u0440\u043e\u0444\u0438\u043b\u044c\u043d\u043e\u0439 \u0442\u0440\u0443\u0431\u044b",
		metall_title_end: "\u0439",
		fields: [{
			label: "\u0428\u0438\u0440\u0438\u043d\u0430 \u0442\u0440\u0443\u0431\u044b a",
			type: "a",
			disp: "\u043c\u043c."
		}, {
			label: "\u0412\u044b\u0441\u043e\u0442\u0430 \u0442\u0440\u0443\u0431\u044b b",
			type: "b",
			disp: "\u043c\u043c."
		}, {
			label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0441\u0442\u0435\u043d\u043a\u0438 t",
			type: "t",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 10,
		key: "corner",
		title: "\u0423\u0433\u043e\u043b\u043e\u043a",
		metall_ids: [1, 2, 3],
		form_title: "\u0443\u0433\u043e\u043b\u043a\u0430",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u0428\u0438\u0440\u0438\u043d\u0430 \u0443\u0433\u043e\u043b\u043a\u0430 a",
			type: "a",
			disp: "\u043c\u043c."
		}, {
			label: "\u0412\u044b\u0441\u043e\u0442\u0430 \u0443\u0433\u043e\u043b\u043a\u0430 b",
			type: "b",
			disp: "\u043c\u043c."
		}, {
			label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043e\u043b\u043a\u0438 t",
			type: "t",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !0,
		has_calc_togler: !0
	}, {
		id: 11,
		key: "flange",
		title: "\u0424\u043b\u0430\u043d\u0435\u0446 \u043f\u043b\u043e\u0441\u043a\u0438\u0439",
		metall_title_end: "\u0433\u043e",
		metall_ids: [1, 2],
		props: [],
		form_title: "\u0444\u043b\u0430\u043d\u0446\u0430",
		icon: "arm",
		has_grades: !1
	}, {
		id: 12,
		key: "channel",
		title: "\u0428\u0432\u0435\u043b\u043b\u0435\u0440",
		metall_ids: [1, 2],
		props: ["a", "b", "t", "l"],
		form_title: "\u0448\u0432\u0435\u043b\u043b\u0435\u0440\u0430 ",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !1,
		has_calc_togler: !0
	}, {
		id: 13,
		key: "hexahedron",
		title: "\u0428\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u0438\u043a",
		metall_ids: [1, 2, 3, 5],
		props: ["a", "l"],
		form_title: "\u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u0438\u043a\u0430",
		metall_title_end: "\u0433\u043e",
		fields: [{
			label: "\u041d\u043e\u043c\u0435\u0440 \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u0438\u043a\u0430 a",
			type: "a",
			disp: "\u043c\u043c."
		}, {
			label: "\u0414\u043b\u0438\u043d\u0430 L",
			type: "l",
			disp: "\u043c.",
			calc_types: ["weight"]
		}, {
			label: "\u0412\u0435\u0441",
			type: "M",
			disp: "\u043a\u0433.",
			calc_types: ["length"]
		}],
		icon: "arm",
		has_grades: !0,
		has_calc_togler: !0
	}];
(function() {
	function e(e) {
		function t(t, n, i, s, o, r) {
			for (; o >= 0 && r > o; o += e) {
				var a = s ? s[o] : o;
				i = n(i, t[a], a, t)
			}
			return i
		}
		return function(n, i, s, o) {
			i = y(i, o, 4);
			var r = !E(n) && g.keys(n),
				a = (r || n).length,
				l = e > 0 ? 0 : a - 1;
			return arguments.length < 3 && (s = n[r ? r[l] : l], l += e), t(n, i, s, r, l, a)
		}
	}

	function t(e) {
		return function(t, n, i) {
			n = v(n, i);
			for (var s = x(t), o = e > 0 ? 0 : s - 1; o >= 0 && s > o; o += e)
				if (n(t[o], o, t)) return o;
			return -1
		}
	}

	function n(e, t, n) {
		return function(i, s, o) {
			var r = 0,
				a = x(i);
			if ("number" == typeof o) e > 0 ? r = o >= 0 ? o : Math.max(o + a, r) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
			else if (n && o && a) return o = n(i, s), i[o] === s ? o : -1;
			if (s !== s) return o = t(c.call(i, r, a), g.isNaN), o >= 0 ? o + r : -1;
			for (o = e > 0 ? r : a - 1; o >= 0 && a > o; o += e)
				if (i[o] === s) return o;
			return -1
		}
	}

	function i(e, t) {
		var n = S.length,
			i = e.constructor,
			s = g.isFunction(i) && i.prototype || a,
			o = "constructor";
		for (g.has(e, o) && !g.contains(t, o) && t.push(o); n--;) o = S[n], o in e && e[o] !== s[o] && !g.contains(t, o) && t.push(o)
	}
	var s = this,
		o = s._,
		r = Array.prototype,
		a = Object.prototype,
		l = Function.prototype,
		d = r.push,
		c = r.slice,
		u = a.toString,
		D = a.hasOwnProperty,
		h = Array.isArray,
		p = Object.keys,
		f = l.bind,
		m = Object.create,
		B = function() {},
		g = function(e) {
			return e instanceof g ? e : this instanceof g ? void(this._wrapped = e) : new g(e)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = g), exports._ = g) : s._ = g, g.VERSION = "1.8.3";
	var y = function(e, t, n) {
			if (void 0 === t) return e;
			switch (null == n ? 3 : n) {
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, i) {
						return e.call(t, n, i)
					};
				case 3:
					return function(n, i, s) {
						return e.call(t, n, i, s)
					};
				case 4:
					return function(n, i, s, o) {
						return e.call(t, n, i, s, o)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		},
		v = function(e, t, n) {
			return null == e ? g.identity : g.isFunction(e) ? y(e, t, n) : g.isObject(e) ? g.matcher(e) : g.property(e)
		};
	g.iteratee = function(e, t) {
		return v(e, t, 1 / 0)
	};
	var b = function(e, t) {
			return function(n) {
				var i = arguments.length;
				if (2 > i || null == n) return n;
				for (var s = 1; i > s; s++)
					for (var o = arguments[s], r = e(o), a = r.length, l = 0; a > l; l++) {
						var d = r[l];
						t && void 0 !== n[d] || (n[d] = o[d])
					}
				return n
			}
		},
		C = function(e) {
			if (!g.isObject(e)) return {};
			if (m) return m(e);
			B.prototype = e;
			var t = new B;
			return B.prototype = null, t
		},
		w = function(e) {
			return function(t) {
				return null == t ? void 0 : t[e]
			}
		},
		_ = Math.pow(2, 53) - 1,
		x = w("length"),
		E = function(e) {
			var t = x(e);
			return "number" == typeof t && t >= 0 && _ >= t
		};
	g.each = g.forEach = function(e, t, n) {
		t = y(t, n);
		var i, s;
		if (E(e))
			for (i = 0, s = e.length; s > i; i++) t(e[i], i, e);
		else {
			var o = g.keys(e);
			for (i = 0, s = o.length; s > i; i++) t(e[o[i]], o[i], e)
		}
		return e
	}, g.map = g.collect = function(e, t, n) {
		t = v(t, n);
		for (var i = !E(e) && g.keys(e), s = (i || e).length, o = Array(s), r = 0; s > r; r++) {
			var a = i ? i[r] : r;
			o[r] = t(e[a], a, e)
		}
		return o
	}, g.reduce = g.foldl = g.inject = e(1), g.reduceRight = g.foldr = e(-1), g.find = g.detect = function(e, t, n) {
		var i;
		return i = E(e) ? g.findIndex(e, t, n) : g.findKey(e, t, n), void 0 !== i && -1 !== i ? e[i] : void 0
	}, g.filter = g.select = function(e, t, n) {
		var i = [];
		return t = v(t, n), g.each(e, function(e, n, s) {
			t(e, n, s) && i.push(e)
		}), i
	}, g.reject = function(e, t, n) {
		return g.filter(e, g.negate(v(t)), n)
	}, g.every = g.all = function(e, t, n) {
		t = v(t, n);
		for (var i = !E(e) && g.keys(e), s = (i || e).length, o = 0; s > o; o++) {
			var r = i ? i[o] : o;
			if (!t(e[r], r, e)) return !1
		}
		return !0
	}, g.some = g.any = function(e, t, n) {
		t = v(t, n);
		for (var i = !E(e) && g.keys(e), s = (i || e).length, o = 0; s > o; o++) {
			var r = i ? i[o] : o;
			if (t(e[r], r, e)) return !0
		}
		return !1
	}, g.contains = g.includes = g.include = function(e, t, n, i) {
		return E(e) || (e = g.values(e)), ("number" != typeof n || i) && (n = 0), g.indexOf(e, t, n) >= 0
	}, g.invoke = function(e, t) {
		var n = c.call(arguments, 2),
			i = g.isFunction(t);
		return g.map(e, function(e) {
			var s = i ? t : e[t];
			return null == s ? s : s.apply(e, n)
		})
	}, g.pluck = function(e, t) {
		return g.map(e, g.property(t))
	}, g.where = function(e, t) {
		return g.filter(e, g.matcher(t))
	}, g.findWhere = function(e, t) {
		return g.find(e, g.matcher(t))
	}, g.max = function(e, t, n) {
		var i, s, o = -1 / 0,
			r = -1 / 0;
		if (null == t && null != e) {
			e = E(e) ? e : g.values(e);
			for (var a = 0, l = e.length; l > a; a++) i = e[a], i > o && (o = i)
		} else t = v(t, n), g.each(e, function(e, n, i) {
			s = t(e, n, i), (s > r || s === -1 / 0 && o === -1 / 0) && (o = e, r = s)
		});
		return o
	}, g.min = function(e, t, n) {
		var i, s, o = 1 / 0,
			r = 1 / 0;
		if (null == t && null != e) {
			e = E(e) ? e : g.values(e);
			for (var a = 0, l = e.length; l > a; a++) i = e[a], o > i && (o = i)
		} else t = v(t, n), g.each(e, function(e, n, i) {
			s = t(e, n, i), (r > s || 1 / 0 === s && 1 / 0 === o) && (o = e, r = s)
		});
		return o
	}, g.shuffle = function(e) {
		for (var t, n = E(e) ? e : g.values(e), i = n.length, s = Array(i), o = 0; i > o; o++) t = g.random(0, o), t !== o && (s[o] = s[t]), s[t] = n[o];
		return s
	}, g.sample = function(e, t, n) {
		return null == t || n ? (E(e) || (e = g.values(e)), e[g.random(e.length - 1)]) : g.shuffle(e).slice(0, Math.max(0, t))
	}, g.sortBy = function(e, t, n) {
		return t = v(t, n), g.pluck(g.map(e, function(e, n, i) {
			return {
				value: e,
				index: n,
				criteria: t(e, n, i)
			}
		}).sort(function(e, t) {
			var n = e.criteria,
				i = t.criteria;
			if (n !== i) {
				if (n > i || void 0 === n) return 1;
				if (i > n || void 0 === i) return -1
			}
			return e.index - t.index
		}), "value")
	};
	var A = function(e) {
		return function(t, n, i) {
			var s = {};
			return n = v(n, i), g.each(t, function(i, o) {
				var r = n(i, o, t);
				e(s, i, r)
			}), s
		}
	};
	g.groupBy = A(function(e, t, n) {
		g.has(e, n) ? e[n].push(t) : e[n] = [t]
	}), g.indexBy = A(function(e, t, n) {
		e[n] = t
	}), g.countBy = A(function(e, t, n) {
		g.has(e, n) ? e[n]++ : e[n] = 1
	}), g.toArray = function(e) {
		return e ? g.isArray(e) ? c.call(e) : E(e) ? g.map(e, g.identity) : g.values(e) : []
	}, g.size = function(e) {
		return null == e ? 0 : E(e) ? e.length : g.keys(e).length
	}, g.partition = function(e, t, n) {
		t = v(t, n);
		var i = [],
			s = [];
		return g.each(e, function(e, n, o) {
			(t(e, n, o) ? i : s).push(e)
		}), [i, s]
	}, g.first = g.head = g.take = function(e, t, n) {
		return null == e ? void 0 : null == t || n ? e[0] : g.initial(e, e.length - t)
	}, g.initial = function(e, t, n) {
		return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
	}, g.last = function(e, t, n) {
		return null == e ? void 0 : null == t || n ? e[e.length - 1] : g.rest(e, Math.max(0, e.length - t))
	}, g.rest = g.tail = g.drop = function(e, t, n) {
		return c.call(e, null == t || n ? 1 : t)
	}, g.compact = function(e) {
		return g.filter(e, g.identity)
	};
	var k = function(e, t, n, i) {
		for (var s = [], o = 0, r = i || 0, a = x(e); a > r; r++) {
			var l = e[r];
			if (E(l) && (g.isArray(l) || g.isArguments(l))) {
				t || (l = k(l, t, n));
				var d = 0,
					c = l.length;
				for (s.length += c; c > d;) s[o++] = l[d++]
			} else n || (s[o++] = l)
		}
		return s
	};
	g.flatten = function(e, t) {
		return k(e, t, !1)
	}, g.without = function(e) {
		return g.difference(e, c.call(arguments, 1))
	}, g.uniq = g.unique = function(e, t, n, i) {
		g.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = v(n, i));
		for (var s = [], o = [], r = 0, a = x(e); a > r; r++) {
			var l = e[r],
				d = n ? n(l, r, e) : l;
			t ? (r && o === d || s.push(l), o = d) : n ? g.contains(o, d) || (o.push(d), s.push(l)) : g.contains(s, l) || s.push(l)
		}
		return s
	}, g.union = function() {
		return g.uniq(k(arguments, !0, !0))
	}, g.intersection = function(e) {
		for (var t = [], n = arguments.length, i = 0, s = x(e); s > i; i++) {
			var o = e[i];
			if (!g.contains(t, o)) {
				for (var r = 1; n > r && g.contains(arguments[r], o); r++);
				r === n && t.push(o)
			}
		}
		return t
	}, g.difference = function(e) {
		var t = k(arguments, !0, !0, 1);
		return g.filter(e, function(e) {
			return !g.contains(t, e)
		})
	}, g.zip = function() {
		return g.unzip(arguments)
	}, g.unzip = function(e) {
		for (var t = e && g.max(e, x).length || 0, n = Array(t), i = 0; t > i; i++) n[i] = g.pluck(e, i);
		return n
	}, g.object = function(e, t) {
		for (var n = {}, i = 0, s = x(e); s > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
		return n
	}, g.findIndex = t(1), g.findLastIndex = t(-1), g.sortedIndex = function(e, t, n, i) {
		n = v(n, i, 1);
		for (var s = n(t), o = 0, r = x(e); r > o;) {
			var a = Math.floor((o + r) / 2);
			n(e[a]) < s ? o = a + 1 : r = a
		}
		return o
	}, g.indexOf = n(1, g.findIndex, g.sortedIndex), g.lastIndexOf = n(-1, g.findLastIndex), g.range = function(e, t, n) {
		null == t && (t = e || 0, e = 0), n = n || 1;
		for (var i = Math.max(Math.ceil((t - e) / n), 0), s = Array(i), o = 0; i > o; o++, e += n) s[o] = e;
		return s
	};
	var T = function(e, t, n, i, s) {
		if (!(i instanceof t)) return e.apply(n, s);
		var o = C(e.prototype),
			r = e.apply(o, s);
		return g.isObject(r) ? r : o
	};
	g.bind = function(e, t) {
		if (f && e.bind === f) return f.apply(e, c.call(arguments, 1));
		if (!g.isFunction(e)) throw new TypeError("Bind must be called on a function");
		var n = c.call(arguments, 2),
			i = function() {
				return T(e, i, t, this, n.concat(c.call(arguments)))
			};
		return i
	}, g.partial = function(e) {
		var t = c.call(arguments, 1),
			n = function() {
				for (var i = 0, s = t.length, o = Array(s), r = 0; s > r; r++) o[r] = t[r] === g ? arguments[i++] : t[r];
				for (; i < arguments.length;) o.push(arguments[i++]);
				return T(e, n, this, this, o)
			};
		return n
	}, g.bindAll = function(e) {
		var t, n, i = arguments.length;
		if (1 >= i) throw new Error("bindAll must be passed function names");
		for (t = 1; i > t; t++) n = arguments[t], e[n] = g.bind(e[n], e);
		return e
	}, g.memoize = function(e, t) {
		var n = function(i) {
			var s = n.cache,
				o = "" + (t ? t.apply(this, arguments) : i);
			return g.has(s, o) || (s[o] = e.apply(this, arguments)), s[o]
		};
		return n.cache = {}, n
	}, g.delay = function(e, t) {
		var n = c.call(arguments, 2);
		return setTimeout(function() {
			return e.apply(null, n)
		}, t)
	}, g.defer = g.partial(g.delay, g, 1), g.throttle = function(e, t, n) {
		var i, s, o, r = null,
			a = 0;
		n || (n = {});
		var l = function() {
			a = n.leading === !1 ? 0 : g.now(), r = null, o = e.apply(i, s), r || (i = s = null)
		};
		return function() {
			var d = g.now();
			a || n.leading !== !1 || (a = d);
			var c = t - (d - a);
			return i = this, s = arguments, 0 >= c || c > t ? (r && (clearTimeout(r), r = null), a = d, o = e.apply(i, s), r || (i = s = null)) : r || n.trailing === !1 || (r = setTimeout(l, c)), o
		}
	}, g.debounce = function(e, t, n) {
		var i, s, o, r, a, l = function() {
			var d = g.now() - r;
			t > d && d >= 0 ? i = setTimeout(l, t - d) : (i = null, n || (a = e.apply(o, s), i || (o = s = null)))
		};
		return function() {
			o = this, s = arguments, r = g.now();
			var d = n && !i;
			return i || (i = setTimeout(l, t)), d && (a = e.apply(o, s), o = s = null), a
		}
	}, g.wrap = function(e, t) {
		return g.partial(t, e)
	}, g.negate = function(e) {
		return function() {
			return !e.apply(this, arguments)
		}
	}, g.compose = function() {
		var e = arguments,
			t = e.length - 1;
		return function() {
			for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
			return i
		}
	}, g.after = function(e, t) {
		return function() {
			return --e < 1 ? t.apply(this, arguments) : void 0
		}
	}, g.before = function(e, t) {
		var n;
		return function() {
			return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
		}
	}, g.once = g.partial(g.before, 2);
	var M = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		S = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	g.keys = function(e) {
		if (!g.isObject(e)) return [];
		if (p) return p(e);
		var t = [];
		for (var n in e) g.has(e, n) && t.push(n);
		return M && i(e, t), t
	}, g.allKeys = function(e) {
		if (!g.isObject(e)) return [];
		var t = [];
		for (var n in e) t.push(n);
		return M && i(e, t), t
	}, g.values = function(e) {
		for (var t = g.keys(e), n = t.length, i = Array(n), s = 0; n > s; s++) i[s] = e[t[s]];
		return i
	}, g.mapObject = function(e, t, n) {
		t = v(t, n);
		for (var i, s = g.keys(e), o = s.length, r = {}, a = 0; o > a; a++) i = s[a], r[i] = t(e[i], i, e);
		return r
	}, g.pairs = function(e) {
		for (var t = g.keys(e), n = t.length, i = Array(n), s = 0; n > s; s++) i[s] = [t[s], e[t[s]]];
		return i
	}, g.invert = function(e) {
		for (var t = {}, n = g.keys(e), i = 0, s = n.length; s > i; i++) t[e[n[i]]] = n[i];
		return t
	}, g.functions = g.methods = function(e) {
		var t = [];
		for (var n in e) g.isFunction(e[n]) && t.push(n);
		return t.sort()
	}, g.extend = b(g.allKeys), g.extendOwn = g.assign = b(g.keys), g.findKey = function(e, t, n) {
		t = v(t, n);
		for (var i, s = g.keys(e), o = 0, r = s.length; r > o; o++)
			if (i = s[o], t(e[i], i, e)) return i
	}, g.pick = function(e, t, n) {
		var i, s, o = {},
			r = e;
		if (null == r) return o;
		g.isFunction(t) ? (s = g.allKeys(r), i = y(t, n)) : (s = k(arguments, !1, !1, 1), i = function(e, t, n) {
			return t in n
		}, r = Object(r));
		for (var a = 0, l = s.length; l > a; a++) {
			var d = s[a],
				c = r[d];
			i(c, d, r) && (o[d] = c)
		}
		return o
	}, g.omit = function(e, t, n) {
		if (g.isFunction(t)) t = g.negate(t);
		else {
			var i = g.map(k(arguments, !1, !1, 1), String);
			t = function(e, t) {
				return !g.contains(i, t)
			}
		}
		return g.pick(e, t, n)
	}, g.defaults = b(g.allKeys, !0), g.create = function(e, t) {
		var n = C(e);
		return t && g.extendOwn(n, t), n
	}, g.clone = function(e) {
		return g.isObject(e) ? g.isArray(e) ? e.slice() : g.extend({}, e) : e
	}, g.tap = function(e, t) {
		return t(e), e
	}, g.isMatch = function(e, t) {
		var n = g.keys(t),
			i = n.length;
		if (null == e) return !i;
		for (var s = Object(e), o = 0; i > o; o++) {
			var r = n[o];
			if (t[r] !== s[r] || !(r in s)) return !1
		}
		return !0
	};
	var $ = function(e, t, n, i) {
		if (e === t) return 0 !== e || 1 / e === 1 / t;
		if (null == e || null == t) return e === t;
		e instanceof g && (e = e._wrapped), t instanceof g && (t = t._wrapped);
		var s = u.call(e);
		if (s !== u.call(t)) return !1;
		switch (s) {
			case "[object RegExp]":
			case "[object String]":
				return "" + e == "" + t;
			case "[object Number]":
				return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
			case "[object Date]":
			case "[object Boolean]":
				return +e === +t
		}
		var o = "[object Array]" === s;
		if (!o) {
			if ("object" != typeof e || "object" != typeof t) return !1;
			var r = e.constructor,
				a = t.constructor;
			if (r !== a && !(g.isFunction(r) && r instanceof r && g.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
		}
		n = n || [], i = i || [];
		for (var l = n.length; l--;)
			if (n[l] === e) return i[l] === t;
		if (n.push(e), i.push(t), o) {
			if (l = e.length, l !== t.length) return !1;
			for (; l--;)
				if (!$(e[l], t[l], n, i)) return !1
		} else {
			var d, c = g.keys(e);
			if (l = c.length, g.keys(t).length !== l) return !1;
			for (; l--;)
				if (d = c[l], !g.has(t, d) || !$(e[d], t[d], n, i)) return !1
		}
		return n.pop(), i.pop(), !0
	};
	g.isEqual = function(e, t) {
		return $(e, t)
	}, g.isEmpty = function(e) {
		return null == e ? !0 : E(e) && (g.isArray(e) || g.isString(e) || g.isArguments(e)) ? 0 === e.length : 0 === g.keys(e).length
	}, g.isElement = function(e) {
		return !(!e || 1 !== e.nodeType)
	}, g.isArray = h || function(e) {
		return "[object Array]" === u.call(e)
	}, g.isObject = function(e) {
		var t = typeof e;
		return "function" === t || "object" === t && !!e
	}, g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
		g["is" + e] = function(t) {
			return u.call(t) === "[object " + e + "]"
		}
	}), g.isArguments(arguments) || (g.isArguments = function(e) {
		return g.has(e, "callee")
	}), "function" != typeof /./ && "object" != typeof Int8Array && (g.isFunction = function(e) {
		return "function" == typeof e || !1
	}), g.isFinite = function(e) {
		return isFinite(e) && !isNaN(parseFloat(e))
	}, g.isNaN = function(e) {
		return g.isNumber(e) && e !== +e
	}, g.isBoolean = function(e) {
		return e === !0 || e === !1 || "[object Boolean]" === u.call(e)
	}, g.isNull = function(e) {
		return null === e
	}, g.isUndefined = function(e) {
		return void 0 === e
	}, g.has = function(e, t) {
		return null != e && D.call(e, t)
	}, g.noConflict = function() {
		return s._ = o, this
	}, g.identity = function(e) {
		return e
	}, g.constant = function(e) {
		return function() {
			return e
		}
	}, g.noop = function() {}, g.property = w, g.propertyOf = function(e) {
		return null == e ? function() {} : function(t) {
			return e[t]
		}
	}, g.matcher = g.matches = function(e) {
		return e = g.extendOwn({}, e),
			function(t) {
				return g.isMatch(t, e)
			}
	}, g.times = function(e, t, n) {
		var i = Array(Math.max(0, e));
		t = y(t, n, 1);
		for (var s = 0; e > s; s++) i[s] = t(s);
		return i
	}, g.random = function(e, t) {
		return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
	}, g.now = Date.now || function() {
		return (new Date).getTime()
	};
	var F = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		j = g.invert(F),
		z = function(e) {
			var t = function(t) {
					return e[t]
				},
				n = "(?:" + g.keys(e).join("|") + ")",
				i = RegExp(n),
				s = RegExp(n, "g");
			return function(e) {
				return e = null == e ? "" : "" + e, i.test(e) ? e.replace(s, t) : e
			}
		};
	g.escape = z(F), g.unescape = z(j), g.result = function(e, t, n) {
		var i = null == e ? void 0 : e[t];
		return void 0 === i && (i = n), g.isFunction(i) ? i.call(e) : i
	};
	var N = 0;
	g.uniqueId = function(e) {
		var t = ++N + "";
		return e ? e + t : t
	}, g.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var P = /(.)^/,
		I = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		L = /\\|'|\r|\n|\u2028|\u2029/g,
		O = function(e) {
			return "\\" + I[e]
		};
	g.template = function(e, t, n) {
		!t && n && (t = n), t = g.defaults({}, t, g.templateSettings);
		var i = RegExp([(t.escape || P).source, (t.interpolate || P).source, (t.evaluate || P).source].join("|") + "|$", "g"),
			s = 0,
			o = "__p+='";
		e.replace(i, function(t, n, i, r, a) {
			return o += e.slice(s, a).replace(L, O), s = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (o += "';\n" + r + "\n__p+='"), t
		}), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
		try {
			var r = new Function(t.variable || "obj", "_", o)
		} catch (a) {
			throw a.source = o, a
		}
		var l = function(e) {
				return r.call(this, e, g)
			},
			d = t.variable || "obj";
		return l.source = "function(" + d + "){\n" + o + "}", l
	}, g.chain = function(e) {
		var t = g(e);
		return t._chain = !0, t
	};
	var q = function(e, t) {
		return e._chain ? g(t).chain() : t
	};
	g.mixin = function(e) {
		g.each(g.functions(e), function(t) {
			var n = g[t] = e[t];
			g.prototype[t] = function() {
				var e = [this._wrapped];
				return d.apply(e, arguments), q(this, n.apply(g, e))
			}
		})
	}, g.mixin(g), g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
		var t = r[e];
		g.prototype[e] = function() {
			var n = this._wrapped;
			return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], q(this, n)
		}
	}), g.each(["concat", "join", "slice"], function(e) {
		var t = r[e];
		g.prototype[e] = function() {
			return q(this, t.apply(this._wrapped, arguments))
		}
	}), g.prototype.value = function() {
		return this._wrapped
	}, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function() {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function() {
		return g
	})
}).call(this),
	function(e, t) {
		if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, s) {
			e.Backbone = t(e, s, n, i)
		});
		else if ("undefined" != typeof exports) {
			var n = require("underscore");
			t(e, exports, n)
		} else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
	}(this, function(e, t, n, i) {
		{
			var s = e.Backbone,
				o = [],
				r = (o.push, o.slice);
			o.splice
		}
		t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
			return e.Backbone = s, this
		}, t.emulateHTTP = !1, t.emulateJSON = !1;
		var a = t.Events = {
				on: function(e, t, n) {
					if (!d(this, "on", e, [t, n]) || !t) return this;
					this._events || (this._events = {});
					var i = this._events[e] || (this._events[e] = []);
					return i.push({
						callback: t,
						context: n,
						ctx: n || this
					}), this
				},
				once: function(e, t, i) {
					if (!d(this, "once", e, [t, i]) || !t) return this;
					var s = this,
						o = n.once(function() {
							s.off(e, o), t.apply(this, arguments)
						});
					return o._callback = t, this.on(e, o, i)
				},
				off: function(e, t, i) {
					var s, o, r, a, l, c, u, D;
					if (!this._events || !d(this, "off", e, [t, i])) return this;
					if (!e && !t && !i) return this._events = void 0, this;
					for (a = e ? [e] : n.keys(this._events), l = 0, c = a.length; c > l; l++)
						if (e = a[l], r = this._events[e]) {
							if (this._events[e] = s = [], t || i)
								for (u = 0, D = r.length; D > u; u++) o = r[u], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && s.push(o);
							s.length || delete this._events[e]
						}
					return this
				},
				trigger: function(e) {
					if (!this._events) return this;
					var t = r.call(arguments, 1);
					if (!d(this, "trigger", e, t)) return this;
					var n = this._events[e],
						i = this._events.all;
					return n && c(n, t), i && c(i, arguments), this
				},
				stopListening: function(e, t, i) {
					var s = this._listeningTo;
					if (!s) return this;
					var o = !t && !i;
					i || "object" != typeof t || (i = this), e && ((s = {})[e._listenId] = e);
					for (var r in s) e = s[r], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[r];
					return this
				}
			},
			l = /\s+/,
			d = function(e, t, n, i) {
				if (!n) return !0;
				if ("object" == typeof n) {
					for (var s in n) e[t].apply(e, [s, n[s]].concat(i));
					return !1
				}
				if (l.test(n)) {
					for (var o = n.split(l), r = 0, a = o.length; a > r; r++) e[t].apply(e, [o[r]].concat(i));
					return !1
				}
				return !0
			},
			c = function(e, t) {
				var n, i = -1,
					s = e.length,
					o = t[0],
					r = t[1],
					a = t[2];
				switch (t.length) {
					case 0:
						for (; ++i < s;)(n = e[i]).callback.call(n.ctx);
						return;
					case 1:
						for (; ++i < s;)(n = e[i]).callback.call(n.ctx, o);
						return;
					case 2:
						for (; ++i < s;)(n = e[i]).callback.call(n.ctx, o, r);
						return;
					case 3:
						for (; ++i < s;)(n = e[i]).callback.call(n.ctx, o, r, a);
						return;
					default:
						for (; ++i < s;)(n = e[i]).callback.apply(n.ctx, t);
						return
				}
			},
			u = {
				listenTo: "on",
				listenToOnce: "once"
			};
		n.each(u, function(e, t) {
			a[t] = function(t, i, s) {
				var o = this._listeningTo || (this._listeningTo = {}),
					r = t._listenId || (t._listenId = n.uniqueId("l"));
				return o[r] = t, s || "object" != typeof i || (s = this), t[e](i, s, this), this
			}
		}), a.bind = a.on, a.unbind = a.off, n.extend(t, a);
		var D = t.Model = function(e, t) {
			var i = e || {};
			t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
		};
		n.extend(D.prototype, a, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			initialize: function() {},
			toJSON: function() {
				return n.clone(this.attributes)
			},
			sync: function() {
				return t.sync.apply(this, arguments)
			},
			get: function(e) {
				return this.attributes[e]
			},
			escape: function(e) {
				return n.escape(this.get(e))
			},
			has: function(e) {
				return null != this.get(e)
			},
			set: function(e, t, i) {
				var s, o, r, a, l, d, c, u;
				if (null == e) return this;
				if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
				r = i.unset, l = i.silent, a = [], d = this._changing, this._changing = !0, d || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), u = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
				for (s in o) t = o[s], n.isEqual(u[s], t) || a.push(s), n.isEqual(c[s], t) ? delete this.changed[s] : this.changed[s] = t, r ? delete u[s] : u[s] = t;
				if (!l) {
					a.length && (this._pending = i);
					for (var D = 0, h = a.length; h > D; D++) this.trigger("change:" + a[D], this, u[a[D]], i)
				}
				if (d) return this;
				if (!l)
					for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
				return this._pending = !1, this._changing = !1, this
			},
			unset: function(e, t) {
				return this.set(e, void 0, n.extend({}, t, {
					unset: !0
				}))
			},
			clear: function(e) {
				var t = {};
				for (var i in this.attributes) t[i] = void 0;
				return this.set(t, n.extend({}, e, {
					unset: !0
				}))
			},
			hasChanged: function(e) {
				return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
			},
			changedAttributes: function(e) {
				if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
				var t, i = !1,
					s = this._changing ? this._previousAttributes : this.attributes;
				for (var o in e) n.isEqual(s[o], t = e[o]) || ((i || (i = {}))[o] = t);
				return i
			},
			previous: function(e) {
				return null != e && this._previousAttributes ? this._previousAttributes[e] : null
			},
			previousAttributes: function() {
				return n.clone(this._previousAttributes)
			},
			fetch: function(e) {
				e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = this,
					i = e.success;
				return e.success = function(n) {
					return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
				}, P(this, e), this.sync("read", this, e)
			},
			save: function(e, t, i) {
				var s, o, r, a = this.attributes;
				if (null == e || "object" == typeof e ? (s = e, i = t) : (s = {})[e] = t, i = n.extend({
						validate: !0
					}, i), s && !i.wait) {
					if (!this.set(s, i)) return !1
				} else if (!this._validate(s, i)) return !1;
				s && i.wait && (this.attributes = n.extend({}, a, s)), void 0 === i.parse && (i.parse = !0);
				var l = this,
					d = i.success;
				return i.success = function(e) {
					l.attributes = a;
					var t = l.parse(e, i);
					return i.wait && (t = n.extend(s || {}, t)), n.isObject(t) && !l.set(t, i) ? !1 : (d && d(l, e, i), void l.trigger("sync", l, e, i))
				}, P(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = s), r = this.sync(o, this, i), s && i.wait && (this.attributes = a), r
			},
			destroy: function(e) {
				e = e ? n.clone(e) : {};
				var t = this,
					i = e.success,
					s = function() {
						t.trigger("destroy", t, t.collection, e)
					};
				if (e.success = function(n) {
						(e.wait || t.isNew()) && s(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
					}, this.isNew()) return e.success(), !1;
				P(this, e);
				var o = this.sync("delete", this, e);
				return e.wait || s(), o
			},
			url: function() {
				var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || N();
				return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
			},
			parse: function(e) {
				return e
			},
			clone: function() {
				return new this.constructor(this.attributes)
			},
			isNew: function() {
				return !this.has(this.idAttribute)
			},
			isValid: function(e) {
				return this._validate({}, n.extend(e || {}, {
					validate: !0
				}))
			},
			_validate: function(e, t) {
				if (!t.validate || !this.validate) return !0;
				e = n.extend({}, this.attributes, e);
				var i = this.validationError = this.validate(e, t) || null;
				return i ? (this.trigger("invalid", this, i, n.extend(t, {
					validationError: i
				})), !1) : !0
			}
		});
		var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
		n.each(h, function(e) {
			D.prototype[e] = function() {
				var t = r.call(arguments);
				return t.unshift(this.attributes), n[e].apply(n, t)
			}
		});
		var p = t.Collection = function(e, t) {
				t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
					silent: !0
				}, t))
			},
			f = {
				add: !0,
				remove: !0,
				merge: !0
			},
			m = {
				add: !0,
				remove: !1
			};
		n.extend(p.prototype, a, {
			model: D,
			initialize: function() {},
			toJSON: function(e) {
				return this.map(function(t) {
					return t.toJSON(e)
				})
			},
			sync: function() {
				return t.sync.apply(this, arguments)
			},
			add: function(e, t) {
				return this.set(e, n.extend({
					merge: !1
				}, t, m))
			},
			remove: function(e, t) {
				var i = !n.isArray(e);
				e = i ? [e] : n.clone(e), t || (t = {});
				var s, o, r, a;
				for (s = 0, o = e.length; o > s; s++) a = e[s] = this.get(e[s]), a && (delete this._byId[a.id], delete this._byId[a.cid], r = this.indexOf(a), this.models.splice(r, 1), this.length--, t.silent || (t.index = r, a.trigger("remove", a, this, t)), this._removeReference(a, t));
				return i ? e[0] : e
			},
			set: function(e, t) {
				t = n.defaults({}, t, f), t.parse && (e = this.parse(e, t));
				var i = !n.isArray(e);
				e = i ? e ? [e] : [] : n.clone(e);
				var s, o, r, a, l, d, c, u = t.at,
					h = this.model,
					p = this.comparator && null == u && t.sort !== !1,
					m = n.isString(this.comparator) ? this.comparator : null,
					B = [],
					g = [],
					y = {},
					v = t.add,
					b = t.merge,
					C = t.remove,
					w = !p && v && C ? [] : !1;
				for (s = 0, o = e.length; o > s; s++) {
					if (l = e[s] || {}, r = l instanceof D ? a = l : l[h.prototype.idAttribute || "id"], d = this.get(r)) C && (y[d.cid] = !0), b && (l = l === a ? a.attributes : l, t.parse && (l = d.parse(l, t)), d.set(l, t), p && !c && d.hasChanged(m) && (c = !0)), e[s] = d;
					else if (v) {
						if (a = e[s] = this._prepareModel(l, t), !a) continue;
						B.push(a), this._addReference(a, t)
					}
					a = d || a, !w || !a.isNew() && y[a.id] || w.push(a), y[a.id] = !0
				}
				if (C) {
					for (s = 0, o = this.length; o > s; ++s) y[(a = this.models[s]).cid] || g.push(a);
					g.length && this.remove(g, t)
				}
				if (B.length || w && w.length)
					if (p && (c = !0), this.length += B.length, null != u)
						for (s = 0, o = B.length; o > s; s++) this.models.splice(u + s, 0, B[s]);
					else {
						w && (this.models.length = 0);
						var _ = w || B;
						for (s = 0, o = _.length; o > s; s++) this.models.push(_[s])
					}
				if (c && this.sort({
						silent: !0
					}), !t.silent) {
					for (s = 0, o = B.length; o > s; s++)(a = B[s]).trigger("add", a, this, t);
					(c || w && w.length) && this.trigger("sort", this, t)
				}
				return i ? e[0] : e
			},
			reset: function(e, t) {
				t || (t = {});
				for (var i = 0, s = this.models.length; s > i; i++) this._removeReference(this.models[i], t);
				return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
					silent: !0
				}, t)), t.silent || this.trigger("reset", this, t), e
			},
			push: function(e, t) {
				return this.add(e, n.extend({
					at: this.length
				}, t))
			},
			pop: function(e) {
				var t = this.at(this.length - 1);
				return this.remove(t, e), t
			},
			unshift: function(e, t) {
				return this.add(e, n.extend({
					at: 0
				}, t))
			},
			shift: function(e) {
				var t = this.at(0);
				return this.remove(t, e), t
			},
			slice: function() {
				return r.apply(this.models, arguments)
			},
			get: function(e) {
				return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
			},
			at: function(e) {
				return this.models[e]
			},
			where: function(e, t) {
				return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
					for (var n in e)
						if (e[n] !== t.get(n)) return !1;
					return !0
				})
			},
			findWhere: function(e) {
				return this.where(e, !0)
			},
			sort: function(e) {
				if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
			},
			pluck: function(e) {
				return n.invoke(this.models, "get", e)
			},
			fetch: function(e) {
				e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = e.success,
					i = this;
				return e.success = function(n) {
					var s = e.reset ? "reset" : "set";
					i[s](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
				}, P(this, e), this.sync("read", this, e)
			},
			create: function(e, t) {
				if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
				t.wait || this.add(e, t);
				var i = this,
					s = t.success;
				return t.success = function(e, n) {
					t.wait && i.add(e, t), s && s(e, n, t)
				}, e.save(null, t), e
			},
			parse: function(e) {
				return e
			},
			clone: function() {
				return new this.constructor(this.models)
			},
			_reset: function() {
				this.length = 0, this.models = [], this._byId = {}
			},
			_prepareModel: function(e, t) {
				if (e instanceof D) return e;
				t = t ? n.clone(t) : {}, t.collection = this;
				var i = new this.model(e, t);
				return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
			},
			_addReference: function(e) {
				this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
			},
			_removeReference: function(e) {
				this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
			},
			_onModelEvent: function(e, t, n, i) {
				("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
			}
		});
		var B = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
		n.each(B, function(e) {
			p.prototype[e] = function() {
				var t = r.call(arguments);
				return t.unshift(this.models), n[e].apply(n, t)
			}
		});
		var g = ["groupBy", "countBy", "sortBy", "indexBy"];
		n.each(g, function(e) {
			p.prototype[e] = function(t, i) {
				var s = n.isFunction(t) ? t : function(e) {
					return e.get(t)
				};
				return n[e](this.models, s, i)
			}
		});
		var y = t.View = function(e) {
				this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
			},
			v = /^(\S+)\s*(.*)$/,
			b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		n.extend(y.prototype, a, {
			tagName: "div",
			$: function(e) {
				return this.$el.find(e)
			},
			initialize: function() {},
			render: function() {
				return this
			},
			remove: function() {
				return this.$el.remove(), this.stopListening(), this
			},
			setElement: function(e, n) {
				return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
			},
			delegateEvents: function(e) {
				if (!e && !(e = n.result(this, "events"))) return this;
				this.undelegateEvents();
				for (var t in e) {
					var i = e[t];
					if (n.isFunction(i) || (i = this[e[t]]), i) {
						var s = t.match(v),
							o = s[1],
							r = s[2];
						i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === r ? this.$el.on(o, i) : this.$el.on(o, r, i)
					}
				}
				return this
			},
			undelegateEvents: function() {
				return this.$el.off(".delegateEvents" + this.cid), this
			},
			_ensureElement: function() {
				if (this.el) this.setElement(n.result(this, "el"), !1);
				else {
					var e = n.extend({}, n.result(this, "attributes"));
					this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
					var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
					this.setElement(i, !1)
				}
			}
		}), t.sync = function(e, i, s) {
			var o = w[e];
			n.defaults(s || (s = {}), {
				emulateHTTP: t.emulateHTTP,
				emulateJSON: t.emulateJSON
			});
			var r = {
				type: o,
				dataType: "json"
			};
			if (s.url || (r.url = n.result(i, "url") || N()), null != s.data || !i || "create" !== e && "update" !== e && "patch" !== e || (r.contentType = "application/json", r.data = JSON.stringify(s.attrs || i.toJSON(s))), s.emulateJSON && (r.contentType = "application/x-www-form-urlencoded", r.data = r.data ? {
					model: r.data
				} : {}), s.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
				r.type = "POST", s.emulateJSON && (r.data._method = o);
				var a = s.beforeSend;
				s.beforeSend = function(e) {
					return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
				}
			}
			"GET" === r.type || s.emulateJSON || (r.processData = !1), "PATCH" === r.type && C && (r.xhr = function() {
				return new ActiveXObject("Microsoft.XMLHTTP")
			});
			var l = s.xhr = t.ajax(n.extend(r, s));
			return i.trigger("request", i, l, s), l
		};
		var C = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
			w = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				"delete": "DELETE",
				read: "GET"
			};
		t.ajax = function() {
			return t.$.ajax.apply(t.$, arguments)
		};
		var _ = t.Router = function(e) {
				e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			x = /\((.*?)\)/g,
			E = /(\(\?)?:\w+/g,
			A = /\*\w+/g,
			k = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		n.extend(_.prototype, a, {
			initialize: function() {},
			route: function(e, i, s) {
				n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (s = i, i = ""), s || (s = this[i]);
				var o = this;
				return t.history.route(e, function(n) {
					var r = o._extractParameters(e, n);
					o.execute(s, r), o.trigger.apply(o, ["route:" + i].concat(r)), o.trigger("route", i, r), t.history.trigger("route", o, i, r)
				}), this
			},
			execute: function(e, t) {
				e && e.apply(this, t)
			},
			navigate: function(e, n) {
				return t.history.navigate(e, n), this
			},
			_bindRoutes: function() {
				if (this.routes) {
					this.routes = n.result(this, "routes");
					for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
				}
			},
			_routeToRegExp: function(e) {
				return e = e.replace(k, "\\$&").replace(x, "(?:$1)?").replace(E, function(e, t) {
					return t ? e : "([^/?]+)"
				}).replace(A, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
			},
			_extractParameters: function(e, t) {
				var i = e.exec(t).slice(1);
				return n.map(i, function(e, t) {
					return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
				})
			}
		});
		var T = t.History = function() {
				this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			M = /^[#\/]|\s+$/g,
			S = /^\/+|\/+$/g,
			$ = /msie [\w.]+/,
			F = /\/$/,
			j = /#.*$/;
		T.started = !1, n.extend(T.prototype, a, {
			interval: 50,
			atRoot: function() {
				return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
			},
			getHash: function(e) {
				var t = (e || this).location.href.match(/#(.*)$/);
				return t ? t[1] : ""
			},
			getFragment: function(e, t) {
				if (null == e)
					if (this._hasPushState || !this._wantsHashChange || t) {
						e = decodeURI(this.location.pathname + this.location.search);
						var n = this.root.replace(F, "");
						e.indexOf(n) || (e = e.slice(n.length))
					} else e = this.getHash();
				return e.replace(M, "")
			},
			start: function(e) {
				if (T.started) throw new Error("Backbone.history has already been started");
				T.started = !0, this.options = n.extend({
					root: "/"
				}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
				var i = this.getFragment(),
					s = document.documentMode,
					o = $.exec(navigator.userAgent.toLowerCase()) && (!s || 7 >= s);
				if (this.root = ("/" + this.root + "/").replace(S, "/"), o && this._wantsHashChange) {
					var r = t.$('<iframe src="javascript:0" tabindex="-1">');
					this.iframe = r.hide().appendTo("body")[0].contentWindow, this.navigate(i)
				}
				this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
				var a = this.location;
				if (this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
					this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
				}
				return this.options.silent ? void 0 : this.loadUrl()
			},
			stop: function() {
				t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), T.started = !1
			},
			route: function(e, t) {
				this.handlers.unshift({
					route: e,
					callback: t
				})
			},
			checkUrl: function() {
				var e = this.getFragment();
				return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
			},
			loadUrl: function(e) {
				return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
					return t.route.test(e) ? (t.callback(e), !0) : void 0
				})
			},
			navigate: function(e, t) {
				if (!T.started) return !1;
				t && t !== !0 || (t = {
					trigger: !!t
				});
				var n = this.root + (e = this.getFragment(e || ""));
				if (e = e.replace(j, ""), this.fragment !== e) {
					if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
					else {
						if (!this._wantsHashChange) return this.location.assign(n);
						this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
					}
					return t.trigger ? this.loadUrl(e) : void 0
				}
			},
			_updateHash: function(e, t, n) {
				if (n) {
					var i = e.href.replace(/(javascript:|#).*$/, "");
					e.replace(i + "#" + t)
				} else e.hash = "#" + t
			}
		}), t.history = new T;
		var z = function(e, t) {
			var i, s = this;
			i = e && n.has(e, "constructor") ? e.constructor : function() {
				return s.apply(this, arguments)
			}, n.extend(i, s, t);
			var o = function() {
				this.constructor = i
			};
			return o.prototype = s.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = s.prototype, i
		};
		D.extend = p.extend = _.extend = y.extend = T.extend = z;
		var N = function() {
				throw new Error('A "url" property or function must be specified')
			},
			P = function(e, t) {
				var n = t.error;
				t.error = function(i) {
					n && n(e, i, t), e.trigger("error", e, i, t)
				}
			};
		return t
	}),
	function(e, t) {
		"object" == typeof exports && "function" == typeof require ? module.exports = t(require("backbone")) : "function" == typeof define && define.amd ? define(["backbone"], function(n) {
			return t(n || e.Backbone)
		}) : t(Backbone)
	}(this, function(e) {
		function t() {
			return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
		}

		function n() {
			return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
		}

		function i(e) {
			return e === Object(e)
		}

		function s(e, t) {
			for (var n = e.length; n--;)
				if (e[n] === t) return !0;
			return !1
		}

		function o(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function r(e, t) {
			if (null == e) return void 0;
			var n = e[t];
			return "function" == typeof n ? e[t]() : n
		}
		return e.LocalStorage = window.Store = function(e, t) {
			if (!this.localStorage) throw "Backbone.localStorage: Environment does not support localStorage.";
			this.name = e, this.serializer = t || {
				serialize: function(e) {
					return i(e) ? JSON.stringify(e) : e
				},
				deserialize: function(e) {
					return e && JSON.parse(e)
				}
			};
			var n = this.localStorage().getItem(this.name);
			this.records = n && n.split(",") || []
		}, o(e.LocalStorage.prototype, {
			save: function() {
				this.localStorage().setItem(this.name, this.records.join(","))
			},
			create: function(e) {
				return !e.id && 0 !== e.id && (e.id = n(), e.set(e.idAttribute, e.id)), this.localStorage().setItem(this._itemName(e.id), this.serializer.serialize(e)), this.records.push(e.id.toString()), this.save(), this.find(e)
			},
			update: function(e) {
				this.localStorage().setItem(this._itemName(e.id), this.serializer.serialize(e));
				var t = e.id.toString();
				return s(this.records, t) || (this.records.push(t), this.save()), this.find(e)
			},
			find: function(e) {
				return this.serializer.deserialize(this.localStorage().getItem(this._itemName(e.id)))
			},
			findAll: function() {
				for (var e, t, n = [], i = 0; i < this.records.length; i++) e = this.records[i], t = this.serializer.deserialize(this.localStorage().getItem(this._itemName(e))), null != t && n.push(t);
				return n
			},
			destroy: function(e) {
				this.localStorage().removeItem(this._itemName(e.id));
				for (var t = e.id.toString(), n = 0; n < this.records.length; n++) this.records[n] === t && this.records.splice(n, 1);
				return this.save(), e
			},
			localStorage: function() {
				return localStorage
			},
			_clear: function() {
				var e = this.localStorage(),
					t = new RegExp("^" + this.name + "-");
				e.removeItem(this.name);
				for (var n in e) t.test(n) && e.removeItem(n);
				this.records.length = 0
			},
			_storageSize: function() {
				return this.localStorage().length
			},
			_itemName: function(e) {
				return this.name + "-" + e
			}
		}), e.LocalStorage.sync = window.Store.sync = e.localSync = function(t, n, i) {
			var s, o, a = r(n, "localStorage") || r(n.collection, "localStorage"),
				l = e.$ ? e.$.Deferred && e.$.Deferred() : e.Deferred && e.Deferred();
			try {
				switch (t) {
					case "read":
						s = void 0 != n.id ? a.find(n) : a.findAll();
						break;
					case "create":
						s = a.create(n);
						break;
					case "update":
						s = a.update(n);
						break;
					case "delete":
						s = a.destroy(n)
				}
			} catch (d) {
				o = 22 === d.code && 0 === a._storageSize() ? "Private browsing is unsupported" : d.message
			}
			return s ? (i && i.success && ("0.9.10" === e.VERSION ? i.success(n, s, i) : i.success(s)), l && l.resolve(s)) : (o = o ? o : "Record Not Found", i && i.error && ("0.9.10" === e.VERSION ? i.error(n, o, i) : i.error(o)), l && l.reject(o)), i && i.complete && i.complete(s), l && l.promise()
		}, e.ajaxSync = e.sync, e.getSyncMethod = function(t, n) {
			var i = n && n.ajaxSync;
			return i || !r(t, "localStorage") && !r(t.collection, "localStorage") ? e.ajaxSync : e.localSync
		}, e.sync = function(t, n, i) {
			return e.getSyncMethod(n, i).apply(this, [t, n, i])
		}, e.LocalStorage
	}), ! function(e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(e, t) {
		function n(e) {
			var t = "length" in e && e.length,
				n = Z.type(e);
			return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}

		function i(e, t, n) {
			if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
				return !!t.call(e, i, e) !== n
			});
			if (t.nodeType) return Z.grep(e, function(e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (at.test(t)) return Z.filter(t, e, n);
				t = Z.filter(t, e)
			}
			return Z.grep(e, function(e) {
				return J.call(t, e) >= 0 !== n
			})
		}

		function s(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function o(e) {
			var t = pt[e] = {};
			return Z.each(e.match(ht) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function r() {
			Y.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), Z.ready()
		}

		function a() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function() {
					return {}
				}
			}), this.expando = Z.expando + a.uid++
		}

		function l(e, t, n) {
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(vt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : yt.test(n) ? Z.parseJSON(n) : n
					} catch (s) {}
					gt.set(e, t, n)
				} else n = void 0;
			return n
		}

		function d() {
			return !0
		}

		function c() {
			return !1
		}

		function u() {
			try {
				return Y.activeElement
			} catch (e) {}
		}

		function D(e, t) {
			return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function h(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function p(e) {
			var t = Nt.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function f(e, t) {
			for (var n = 0, i = e.length; i > n; n++) Bt.set(e[n], "globalEval", !t || Bt.get(t[n], "globalEval"))
		}

		function m(e, t) {
			var n, i, s, o, r, a, l, d;
			if (1 === t.nodeType) {
				if (Bt.hasData(e) && (o = Bt.access(e), r = Bt.set(t, o), d = o.events)) {
					delete r.handle, r.events = {};
					for (s in d)
						for (n = 0, i = d[s].length; i > n; n++) Z.event.add(t, s, d[s][n])
				}
				gt.hasData(e) && (a = gt.access(e), l = Z.extend({}, a), gt.set(t, l))
			}
		}

		function B(e, t) {
			var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
			return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
		}

		function g(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && _t.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}

		function y(t, n) {
			var i, s = Z(n.createElement(t)).appendTo(n.body),
				o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(s[0])) ? i.display : Z.css(s[0], "display");
			return s.detach(), o
		}

		function v(e) {
			var t = Y,
				n = Ot[e];
			return n || (n = y(e, t), "none" !== n && n || (Lt = (Lt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Lt[0].contentDocument, t.write(), t.close(), n = y(e, t), Lt.detach()), Ot[e] = n), n
		}

		function b(e, t, n) {
			var i, s, o, r, a = e.style;
			return n = n || Rt(e), n && (r = n.getPropertyValue(t) || n[t]), n && ("" !== r || Z.contains(e.ownerDocument, e) || (r = Z.style(e, t)), Ht.test(r) && qt.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
		}

		function C(e, t) {
			return {
				get: function() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function w(e, t) {
			if (t in e) return t;
			for (var n = t[0].toUpperCase() + t.slice(1), i = t, s = Xt.length; s--;)
				if (t = Xt[s] + n, t in e) return t;
			return i
		}

		function _(e, t, n) {
			var i = Wt.exec(t);
			return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
		}

		function x(e, t, n, i, s) {
			for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += Z.css(e, n + Ct[o], !0, s)), i ? ("content" === n && (r -= Z.css(e, "padding" + Ct[o], !0, s)), "margin" !== n && (r -= Z.css(e, "border" + Ct[o] + "Width", !0, s))) : (r += Z.css(e, "padding" + Ct[o], !0, s), "padding" !== n && (r += Z.css(e, "border" + Ct[o] + "Width", !0, s)));
			return r
		}

		function E(e, t, n) {
			var i = !0,
				s = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = Rt(e),
				r = "border-box" === Z.css(e, "boxSizing", !1, o);
			if (0 >= s || null == s) {
				if (s = b(e, t, o), (0 > s || null == s) && (s = e.style[t]), Ht.test(s)) return s;
				i = r && (K.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
			}
			return s + x(e, t, n || (r ? "border" : "content"), i, o) + "px"
		}

		function A(e, t) {
			for (var n, i, s, o = [], r = 0, a = e.length; a > r; r++) i = e[r], i.style && (o[r] = Bt.get(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && wt(i) && (o[r] = Bt.access(i, "olddisplay", v(i.nodeName)))) : (s = wt(i), "none" === n && s || Bt.set(i, "olddisplay", s ? n : Z.css(i, "display"))));
			for (r = 0; a > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
			return e
		}

		function k(e, t, n, i, s) {
			return new k.prototype.init(e, t, n, i, s)
		}

		function T() {
			return setTimeout(function() {
				Kt = void 0
			}), Kt = Z.now()
		}

		function M(e, t) {
			var n, i = 0,
				s = {
					height: e
				};
			for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ct[i], s["margin" + n] = s["padding" + n] = e;
			return t && (s.opacity = s.width = e), s
		}

		function S(e, t, n) {
			for (var i, s = (nn[t] || []).concat(nn["*"]), o = 0, r = s.length; r > o; o++)
				if (i = s[o].call(n, t, e)) return i
		}

		function $(e, t, n) {
			var i, s, o, r, a, l, d, c, u = this,
				D = {},
				h = e.style,
				p = e.nodeType && wt(e),
				f = Bt.get(e, "fxshow");
			n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
				a.unqueued || l()
			}), a.unqueued++, u.always(function() {
				u.always(function() {
					a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], d = Z.css(e, "display"), c = "none" === d ? Bt.get(e, "olddisplay") || v(e.nodeName) : d, "inline" === c && "none" === Z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			}));
			for (i in t)
				if (s = t[i], Qt.exec(s)) {
					if (delete t[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
						if ("show" !== s || !f || void 0 === f[i]) continue;
						p = !0
					}
					D[i] = f && f[i] || Z.style(e, i)
				} else d = void 0;
			if (Z.isEmptyObject(D)) "inline" === ("none" === d ? v(e.nodeName) : d) && (h.display = d);
			else {
				f ? "hidden" in f && (p = f.hidden) : f = Bt.access(e, "fxshow", {}), o && (f.hidden = !p), p ? Z(e).show() : u.done(function() {
					Z(e).hide()
				}), u.done(function() {
					var t;
					Bt.remove(e, "fxshow");
					for (t in D) Z.style(e, t, D[t])
				});
				for (i in D) r = S(p ? f[i] : 0, i, u), i in f || (f[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
			}
		}

		function F(e, t) {
			var n, i, s, o, r;
			for (n in e)
				if (i = Z.camelCase(n), s = t[i], o = e[n], Z.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = Z.cssHooks[i], r && "expand" in r) {
					o = r.expand(o), delete e[i];
					for (n in o) n in e || (e[n] = o[n], t[n] = s)
				} else t[i] = s
		}

		function j(e, t, n) {
			var i, s, o = 0,
				r = tn.length,
				a = Z.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if (s) return !1;
					for (var t = Kt || T(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, o = 1 - i, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(o);
					return a.notifyWith(e, [d, o, n]), 1 > o && l ? n : (a.resolveWith(e, [d]), !1)
				},
				d = a.promise({
					elem: e,
					props: Z.extend({}, t),
					opts: Z.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Kt || T(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var i = Z.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
						return d.tweens.push(i), i
					},
					stop: function(t) {
						var n = 0,
							i = t ? d.tweens.length : 0;
						if (s) return this;
						for (s = !0; i > n; n++) d.tweens[n].run(1);
						return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
					}
				}),
				c = d.props;
			for (F(c, d.opts.specialEasing); r > o; o++)
				if (i = tn[o].call(d, e, c, d.opts)) return i;
			return Z.map(c, S, d), Z.isFunction(d.opts.start) && d.opts.start.call(e, d), Z.fx.timer(Z.extend(l, {
				elem: e,
				anim: d,
				queue: d.opts.queue
			})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
		}

		function z(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, s = 0,
					o = t.toLowerCase().match(ht) || [];
				if (Z.isFunction(n))
					for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function N(e, t, n, i) {
			function s(a) {
				var l;
				return o[a] = !0, Z.each(e[a] || [], function(e, a) {
					var d = a(t, n, i);
					return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
				}), l
			}
			var o = {},
				r = e === vn;
			return s(t.dataTypes[0]) || !o["*"] && s("*")
		}

		function P(e, t) {
			var n, i, s = Z.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
			return i && Z.extend(!0, e, i), e
		}

		function I(e, t, n) {
			for (var i, s, o, r, a = e.contents, l = e.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (s in a)
					if (a[s] && a[s].test(i)) {
						l.unshift(s);
						break
					}
			if (l[0] in n) o = l[0];
			else {
				for (s in n) {
					if (!l[0] || e.converters[s + " " + l[0]]) {
						o = s;
						break
					}
					r || (r = s)
				}
				o = o || r
			}
			return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
		}

		function L(e, t, n, i) {
			var s, o, r, a, l, d = {},
				c = e.dataTypes.slice();
			if (c[1])
				for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
			for (o = c.shift(); o;)
				if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
					if ("*" === o) o = l;
					else if ("*" !== l && l !== o) {
				if (r = d[l + " " + o] || d["* " + o], !r)
					for (s in d)
						if (a = s.split(" "), a[1] === o && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
							r === !0 ? r = d[s] : d[s] !== !0 && (o = a[0], c.unshift(a[1]));
							break
						}
				if (r !== !0)
					if (r && e["throws"]) t = r(t);
					else try {
						t = r(t)
					} catch (u) {
						return {
							state: "parsererror",
							error: r ? u : "No conversion from " + l + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function O(e, t, n, i) {
			var s;
			if (Z.isArray(t)) Z.each(t, function(t, s) {
				n || xn.test(e) ? i(e, s) : O(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
			});
			else if (n || "object" !== Z.type(t)) i(e, t);
			else
				for (s in t) O(e + "[" + s + "]", t[s], n, i)
		}

		function q(e) {
			return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var H = [],
			R = H.slice,
			V = H.concat,
			W = H.push,
			J = H.indexOf,
			U = {},
			G = U.toString,
			X = U.hasOwnProperty,
			K = {},
			Y = e.document,
			Q = "2.1.4",
			Z = function(e, t) {
				return new Z.fn.init(e, t)
			},
			et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			tt = /^-ms-/,
			nt = /-([\da-z])/gi,
			it = function(e, t) {
				return t.toUpperCase()
			};
		Z.fn = Z.prototype = {
			jquery: Q,
			constructor: Z,
			selector: "",
			length: 0,
			toArray: function() {
				return R.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : R.call(this)
			},
			pushStack: function(e) {
				var t = Z.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return Z.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(Z.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(R.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: W,
			sort: H.sort,
			splice: H.splice
		}, Z.extend = Z.fn.extend = function() {
			var e, t, n, i, s, o, r = arguments[0] || {},
				a = 1,
				l = arguments.length,
				d = !1;
			for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || Z.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
				if (null != (e = arguments[a]))
					for (t in e) n = r[t], i = e[t], r !== i && (d && i && (Z.isPlainObject(i) || (s = Z.isArray(i))) ? (s ? (s = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, r[t] = Z.extend(d, o, i)) : void 0 !== i && (r[t] = i));
			return r
		}, Z.extend({
			expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === Z.type(e)
			},
			isArray: Array.isArray,
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isPlainObject: function(e) {
				return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !X.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[G.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				var t, n = eval;
				e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function(e) {
				return e.replace(tt, "ms-").replace(nt, it)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, i) {
				var s, o = 0,
					r = e.length,
					a = n(e);
				if (i) {
					if (a)
						for (; r > o && (s = t.apply(e[o], i), s !== !1); o++);
					else
						for (o in e)
							if (s = t.apply(e[o], i), s === !1) break
				} else if (a)
					for (; r > o && (s = t.call(e[o], o, e[o]), s !== !1); o++);
				else
					for (o in e)
						if (s = t.call(e[o], o, e[o]), s === !1) break; return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(et, "")
			},
			makeArray: function(e, t) {
				var i = t || [];
				return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : W.call(i, e)), i
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : J.call(t, e, n)
			},
			merge: function(e, t) {
				for (var n = +t.length, i = 0, s = e.length; n > i; i++) e[s++] = t[i];
				return e.length = s, e
			},
			grep: function(e, t, n) {
				for (var i, s = [], o = 0, r = e.length, a = !n; r > o; o++) i = !t(e[o], o), i !== a && s.push(e[o]);
				return s
			},
			map: function(e, t, i) {
				var s, o = 0,
					r = e.length,
					a = n(e),
					l = [];
				if (a)
					for (; r > o; o++) s = t(e[o], o, i), null != s && l.push(s);
				else
					for (o in e) s = t(e[o], o, i), null != s && l.push(s);
				return V.apply([], l)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, i, s;
				return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = R.call(arguments, 2), s = function() {
					return e.apply(t || this, i.concat(R.call(arguments)))
				}, s.guid = e.guid = e.guid || Z.guid++, s) : void 0
			},
			now: Date.now,
			support: K
		}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			U["[object " + t + "]"] = t.toLowerCase()
		});
		var st = function(e) {
			function t(e, t, n, i) {
				var s, o, r, a, l, d, u, h, p, f;
				if ((t ? t.ownerDocument || t : O) !== $ && S(t), t = t || $, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
				if (!i && j) {
					if (11 !== a && (s = gt.exec(e)))
						if (r = s[1]) {
							if (9 === a) {
								if (o = t.getElementById(r), !o || !o.parentNode) return n;
								if (o.id === r) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && I(t, o) && o.id === r) return n.push(o), n
						} else {
							if (s[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
							if ((r = s[3]) && b.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
						}
					if (b.qsa && (!z || !z.test(e))) {
						if (h = u = L, p = t, f = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
							for (d = x(e), (u = t.getAttribute("id")) ? h = u.replace(vt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + D(d[l]);
							p = yt.test(e) && c(t.parentNode) || t, f = d.join(",")
						}
						if (f) try {
							return Q.apply(n, p.querySelectorAll(f)), n
						} catch (m) {} finally {
							u || t.removeAttribute("id")
						}
					}
				}
				return A(e.replace(lt, "$1"), t, n, i)
			}

			function n() {
				function e(n, i) {
					return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[L] = !0, e
			}

			function s(e) {
				var t = $.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function o(e, t) {
				for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
			}

			function r(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function a(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function l(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function d(e) {
				return i(function(t) {
					return t = +t, i(function(n, i) {
						for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
					})
				})
			}

			function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function u() {}

			function D(e) {
				for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
				return i
			}

			function h(e, t, n) {
				var i = t.dir,
					s = n && "parentNode" === i,
					o = H++;
				return t.first ? function(t, n, o) {
					for (; t = t[i];)
						if (1 === t.nodeType || s) return e(t, n, o)
				} : function(t, n, r) {
					var a, l, d = [q, o];
					if (r) {
						for (; t = t[i];)
							if ((1 === t.nodeType || s) && e(t, n, r)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || s) {
								if (l = t[L] || (t[L] = {}), (a = l[i]) && a[0] === q && a[1] === o) return d[2] = a[2];
								if (l[i] = d, d[2] = e(t, n, r)) return !0
							}
				}
			}

			function p(e) {
				return e.length > 1 ? function(t, n, i) {
					for (var s = e.length; s--;)
						if (!e[s](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function f(e, n, i) {
				for (var s = 0, o = n.length; o > s; s++) t(e, n[s], i);
				return i
			}

			function m(e, t, n, i, s) {
				for (var o, r = [], a = 0, l = e.length, d = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, s)) && (r.push(o), d && t.push(a));
				return r
			}

			function B(e, t, n, s, o, r) {
				return s && !s[L] && (s = B(s)), o && !o[L] && (o = B(o, r)), i(function(i, r, a, l) {
					var d, c, u, D = [],
						h = [],
						p = r.length,
						B = i || f(t || "*", a.nodeType ? [a] : a, []),
						g = !e || !i && t ? B : m(B, D, e, a, l),
						y = n ? o || (i ? e : p || s) ? [] : r : g;
					if (n && n(g, y, a, l), s)
						for (d = m(y, h), s(d, [], a, l), c = d.length; c--;)(u = d[c]) && (y[h[c]] = !(g[h[c]] = u));
					if (i) {
						if (o || e) {
							if (o) {
								for (d = [], c = y.length; c--;)(u = y[c]) && d.push(g[c] = u);
								o(null, y = [], d, l)
							}
							for (c = y.length; c--;)(u = y[c]) && (d = o ? et(i, u) : D[c]) > -1 && (i[d] = !(r[d] = u))
						}
					} else y = m(y === r ? y.splice(p, y.length) : y), o ? o(null, r, y, l) : Q.apply(r, y)
				})
			}

			function g(e) {
				for (var t, n, i, s = e.length, o = C.relative[e[0].type], r = o || C.relative[" "], a = o ? 1 : 0, l = h(function(e) {
						return e === t
					}, r, !0), d = h(function(e) {
						return et(t, e) > -1
					}, r, !0), c = [function(e, n, i) {
						var s = !o && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
						return t = null, s
					}]; s > a; a++)
					if (n = C.relative[e[a].type]) c = [h(p(c), n)];
					else {
						if (n = C.filter[e[a].type].apply(null, e[a].matches), n[L]) {
							for (i = ++a; s > i && !C.relative[e[i].type]; i++);
							return B(a > 1 && p(c), a > 1 && D(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(lt, "$1"), n, i > a && g(e.slice(a, i)), s > i && g(e = e.slice(i)), s > i && D(e))
						}
						c.push(n)
					}
				return p(c)
			}

			function y(e, n) {
				var s = n.length > 0,
					o = e.length > 0,
					r = function(i, r, a, l, d) {
						var c, u, D, h = 0,
							p = "0",
							f = i && [],
							B = [],
							g = k,
							y = i || o && C.find.TAG("*", d),
							v = q += null == g ? 1 : Math.random() || .1,
							b = y.length;
						for (d && (k = r !== $ && r); p !== b && null != (c = y[p]); p++) {
							if (o && c) {
								for (u = 0; D = e[u++];)
									if (D(c, r, a)) {
										l.push(c);
										break
									}
								d && (q = v)
							}
							s && ((c = !D && c) && h--, i && f.push(c))
						}
						if (h += p, s && p !== h) {
							for (u = 0; D = n[u++];) D(f, B, r, a);
							if (i) {
								if (h > 0)
									for (; p--;) f[p] || B[p] || (B[p] = K.call(l));
								B = m(B)
							}
							Q.apply(l, B), d && !i && B.length > 0 && h + n.length > 1 && t.uniqueSort(l)
						}
						return d && (q = v, k = g), f
					};
				return s ? i(r) : r
			}
			var v, b, C, w, _, x, E, A, k, T, M, S, $, F, j, z, N, P, I, L = "sizzle" + 1 * new Date,
				O = e.document,
				q = 0,
				H = 0,
				R = n(),
				V = n(),
				W = n(),
				J = function(e, t) {
					return e === t && (M = !0), 0
				},
				U = 1 << 31,
				G = {}.hasOwnProperty,
				X = [],
				K = X.pop,
				Y = X.push,
				Q = X.push,
				Z = X.slice,
				et = function(e, t) {
					for (var n = 0, i = e.length; i > n; n++)
						if (e[n] === t) return n;
					return -1
				},
				tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				nt = "[\\x20\\t\\r\\n\\f]",
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				st = it.replace("w", "w#"),
				ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + nt + "*\\]",
				rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
				at = new RegExp(nt + "+", "g"),
				lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
				dt = new RegExp("^" + nt + "*," + nt + "*"),
				ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
				ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
				Dt = new RegExp(rt),
				ht = new RegExp("^" + st + "$"),
				pt = {
					ID: new RegExp("^#(" + it + ")"),
					CLASS: new RegExp("^\\.(" + it + ")"),
					TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ot),
					PSEUDO: new RegExp("^" + rt),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + tt + ")$", "i"),
					needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
				},
				ft = /^(?:input|select|textarea|button)$/i,
				mt = /^h\d$/i,
				Bt = /^[^{]+\{\s*\[native \w/,
				gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				yt = /[+~]/,
				vt = /'|\\/g,
				bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
				Ct = function(e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				wt = function() {
					S()
				};
			try {
				Q.apply(X = Z.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
			} catch (_t) {
				Q = {
					apply: X.length ? function(e, t) {
						Y.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			b = t.support = {}, _ = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, S = t.setDocument = function(e) {
				var t, n, i = e ? e.ownerDocument || e : O;
				return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, F = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), j = !_(i), b.attributes = s(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), b.getElementsByTagName = s(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), b.getElementsByClassName = Bt.test(i.getElementsByClassName), b.getById = s(function(e) {
					return F.appendChild(e).id = L, !i.getElementsByName || !i.getElementsByName(L).length
				}), b.getById ? (C.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && j) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(bt, Ct);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete C.find.ID, C.filter.ID = function(e) {
					var t = e.replace(bt, Ct);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), C.find.TAG = b.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						s = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[s++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, C.find.CLASS = b.getElementsByClassName && function(e, t) {
					return j ? t.getElementsByClassName(e) : void 0
				}, N = [], z = [], (b.qsa = Bt.test(i.querySelectorAll)) && (s(function(e) {
					F.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + L + "-]").length || z.push("~="), e.querySelectorAll(":checked").length || z.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || z.push(".#.+[+~]")
				}), s(function(e) {
					var t = i.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
				})), (b.matchesSelector = Bt.test(P = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function(e) {
					b.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), N.push("!=", rt)
				}), z = z.length && new RegExp(z.join("|")), N = N.length && new RegExp(N.join("|")), t = Bt.test(F.compareDocumentPosition), I = t || Bt.test(F.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, J = t ? function(e, t) {
					if (e === t) return M = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === O && I(O, e) ? -1 : t === i || t.ownerDocument === O && I(O, t) ? 1 : T ? et(T, e) - et(T, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return M = !0, 0;
					var n, s = 0,
						o = e.parentNode,
						a = t.parentNode,
						l = [e],
						d = [t];
					if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : T ? et(T, e) - et(T, t) : 0;
					if (o === a) return r(e, t);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (n = t; n = n.parentNode;) d.unshift(n);
					for (; l[s] === d[s];) s++;
					return s ? r(l[s], d[s]) : l[s] === O ? -1 : d[s] === O ? 1 : 0
				}, i) : $
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== $ && S(e), n = n.replace(ut, "='$1']"), !(!b.matchesSelector || !j || N && N.test(n) || z && z.test(n))) try {
					var i = P.call(e, n);
					if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch (s) {}
				return t(n, $, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== $ && S(e), I(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== $ && S(e);
				var n = C.attrHandle[t.toLowerCase()],
					i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
				return void 0 !== i ? i : b.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					s = 0;
				if (M = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort(J), M) {
					for (; t = e[s++];) t === e[s] && (i = n.push(s));
					for (; i--;) e.splice(n[i], 1)
				}
				return T = null, e
			}, w = t.getText = function(e) {
				var t, n = "",
					i = 0,
					s = e.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
					} else if (3 === s || 4 === s) return e.nodeValue
				} else
					for (; t = e[i++];) n += w(t);
				return n
			}, C = t.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: pt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(bt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(bt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Dt.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(bt, Ct).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = R[e + " "];
						return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && R(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, i) {
						return function(s) {
							var o = t.attr(s, e);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, i, s) {
						var o = "nth" !== e.slice(0, 3),
							r = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === i && 0 === s ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var d, c, u, D, h, p, f = o !== r ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								B = a && t.nodeName.toLowerCase(),
								g = !l && !a;
							if (m) {
								if (o) {
									for (; f;) {
										for (u = t; u = u[f];)
											if (a ? u.nodeName.toLowerCase() === B : 1 === u.nodeType) return !1;
										p = f = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if (p = [r ? m.firstChild : m.lastChild], r && g) {
									for (c = m[L] || (m[L] = {}), d = c[e] || [], h = d[0] === q && d[1], D = d[0] === q && d[2], u = h && m.childNodes[h]; u = ++h && u && u[f] || (D = h = 0) || p.pop();)
										if (1 === u.nodeType && ++D && u === t) {
											c[e] = [q, h, D];
											break
										}
								} else if (g && (d = (t[L] || (t[L] = {}))[e]) && d[0] === q) D = d[1];
								else
									for (;
										(u = ++h && u && u[f] || (D = h = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== B : 1 !== u.nodeType) || !++D || (g && ((u[L] || (u[L] = {}))[e] = [q, D]), u !== t)););
								return D -= s, D === i || D % i === 0 && D / i >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var s, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[L] ? o(n) : o.length > 1 ? (s = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
							for (var i, s = o(e, n), r = s.length; r--;) i = et(e, s[r]), e[i] = !(t[i] = s[r])
						}) : function(e) {
							return o(e, 0, s)
						}) : o
					}
				},
				pseudos: {
					not: i(function(e) {
						var t = [],
							n = [],
							s = E(e.replace(lt, "$1"));
						return s[L] ? i(function(e, t, n, i) {
							for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
						}) : function(e, i, o) {
							return t[0] = e, s(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: i(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: i(function(e) {
						return e = e.replace(bt, Ct),
							function(t) {
								return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
							}
					}),
					lang: i(function(e) {
						return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(bt, Ct).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === F
					},
					focus: function(e) {
						return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !C.pseudos.empty(e)
					},
					header: function(e) {
						return mt.test(e.nodeName)
					},
					input: function(e) {
						return ft.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: d(function() {
						return [0]
					}),
					last: d(function(e, t) {
						return [t - 1]
					}),
					eq: d(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: d(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: d(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: d(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: d(function(e, t, n) {
						for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}, C.pseudos.nth = C.pseudos.eq;
			for (v in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) C.pseudos[v] = a(v);
			for (v in {
					submit: !0,
					reset: !0
				}) C.pseudos[v] = l(v);
			return u.prototype = C.filters = C.pseudos, C.setFilters = new u, x = t.tokenize = function(e, n) {
				var i, s, o, r, a, l, d, c = V[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (a = e, l = [], d = C.preFilter; a;) {
					(!i || (s = dt.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = ct.exec(a)) && (i = s.shift(), o.push({
						value: i,
						type: s[0].replace(lt, " ")
					}), a = a.slice(i.length));
					for (r in C.filter) !(s = pt[r].exec(a)) || d[r] && !(s = d[r](s)) || (i = s.shift(), o.push({
						value: i,
						type: r,
						matches: s
					}), a = a.slice(i.length));
					if (!i) break
				}
				return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
			}, E = t.compile = function(e, t) {
				var n, i = [],
					s = [],
					o = W[e + " "];
				if (!o) {
					for (t || (t = x(e)), n = t.length; n--;) o = g(t[n]), o[L] ? i.push(o) : s.push(o);
					o = W(e, y(s, i)), o.selector = e
				}
				return o
			}, A = t.select = function(e, t, n, i) {
				var s, o, r, a, l, d = "function" == typeof e && e,
					u = !i && x(e = d.selector || e);
				if (n = n || [], 1 === u.length) {
					if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === t.nodeType && j && C.relative[o[1].type]) {
						if (t = (C.find.ID(r.matches[0].replace(bt, Ct), t) || [])[0], !t) return n;
						d && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (s = pt.needsContext.test(e) ? 0 : o.length; s-- && (r = o[s], !C.relative[a = r.type]);)
						if ((l = C.find[a]) && (i = l(r.matches[0].replace(bt, Ct), yt.test(o[0].type) && c(t.parentNode) || t))) {
							if (o.splice(s, 1), e = i.length && D(o), !e) return Q.apply(n, i), n;
							break
						}
				}
				return (d || E(e, u))(i, t, !j, n, yt.test(e) && c(t.parentNode) || t), n
			}, b.sortStable = L.split("").sort(J).join("") === L, b.detectDuplicates = !!M, S(), b.sortDetached = s(function(e) {
				return 1 & e.compareDocumentPosition($.createElement("div"))
			}), s(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), b.attributes && s(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), s(function(e) {
				return null == e.getAttribute("disabled")
			}) || o(tt, function(e, t, n) {
				var i;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), t
		}(e);
		Z.find = st, Z.expr = st.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = st.uniqueSort, Z.text = st.getText, Z.isXMLDoc = st.isXML, Z.contains = st.contains;
		var ot = Z.expr.match.needsContext,
			rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			at = /^.[^:#\[\.,]*$/;
		Z.filter = function(e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, Z.fn.extend({
			find: function(e) {
				var t, n = this.length,
					i = [],
					s = this;
				if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
					for (t = 0; n > t; t++)
						if (Z.contains(s[t], this)) return !0
				}));
				for (t = 0; n > t; t++) Z.find(e, s[t], i);
				return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
			},
			filter: function(e) {
				return this.pushStack(i(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(i(this, e || [], !0))
			},
			is: function(e) {
				return !!i(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
			}
		});
		var lt, dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			ct = Z.fn.init = function(e, t) {
				var n, i;
				if (!e) return this;
				if ("string" == typeof e) {
					if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : dt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), rt.test(n[1]) && Z.isPlainObject(t))
							for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					return i = Y.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Y, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
			};
		ct.prototype = Z.fn, lt = Z(Y);
		var ut = /^(?:parents|prev(?:Until|All))/,
			Dt = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		Z.extend({
			dir: function(e, t, n) {
				for (var i = [], s = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (s && Z(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			sibling: function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), Z.fn.extend({
			has: function(e) {
				var t = Z(e, this),
					n = t.length;
				return this.filter(function() {
					for (var e = 0; n > e; e++)
						if (Z.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t) {
				for (var n, i = 0, s = this.length, o = [], r = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; s > i; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
				return this.pushStack(o.length > 1 ? Z.unique(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? J.call(Z(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), Z.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return Z.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return Z.dir(e, "parentNode", n)
			},
			next: function(e) {
				return s(e, "nextSibling")
			},
			prev: function(e) {
				return s(e, "previousSibling")
			},
			nextAll: function(e) {
				return Z.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return Z.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return Z.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return Z.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return Z.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return Z.sibling(e.firstChild)
			},
			contents: function(e) {
				return e.contentDocument || Z.merge([], e.childNodes)
			}
		}, function(e, t) {
			Z.fn[e] = function(n, i) {
				var s = Z.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = Z.filter(i, s)), this.length > 1 && (Dt[e] || Z.unique(s), ut.test(e) && s.reverse()), this.pushStack(s)
			}
		});
		var ht = /\S+/g,
			pt = {};
		Z.Callbacks = function(e) {
			e = "string" == typeof e ? pt[e] || o(e) : Z.extend({}, e);
			var t, n, i, s, r, a, l = [],
				d = !e.once && [],
				c = function(o) {
					for (t = e.memory && o, n = !0, a = s || 0, s = 0, r = l.length, i = !0; l && r > a; a++)
						if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
							t = !1;
							break
						}
					i = !1, l && (d ? d.length && c(d.shift()) : t ? l = [] : u.disable())
				},
				u = {
					add: function() {
						if (l) {
							var n = l.length;
							! function o(t) {
								Z.each(t, function(t, n) {
									var i = Z.type(n);
									"function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
								})
							}(arguments), i ? r = l.length : t && (s = n, c(t))
						}
						return this
					},
					remove: function() {
						return l && Z.each(arguments, function(e, t) {
							for (var n;
								(n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (r >= n && r--, a >= n && a--)
						}), this
					},
					has: function(e) {
						return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
					},
					empty: function() {
						return l = [], r = 0, this
					},
					disable: function() {
						return l = d = t = void 0, this
					},
					disabled: function() {
						return !l
					},
					lock: function() {
						return d = void 0, t || u.disable(), this
					},
					locked: function() {
						return !d
					},
					fireWith: function(e, t) {
						return !l || n && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? d.push(t) : c(t)), this
					},
					fire: function() {
						return u.fireWith(this, arguments), this
					},
					fired: function() {
						return !!n
					}
				};
			return u
		}, Z.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", Z.Callbacks("once memory"), "resolved"],
						["reject", "fail", Z.Callbacks("once memory"), "rejected"],
						["notify", "progress", Z.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function() {
							return n
						},
						always: function() {
							return s.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return Z.Deferred(function(n) {
								Z.each(t, function(t, o) {
									var r = Z.isFunction(e[t]) && e[t];
									s[o[1]](function() {
										var e = r && r.apply(this, arguments);
										e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? Z.extend(e, i) : i
						}
					},
					s = {};
				return i.pipe = i.then, Z.each(t, function(e, o) {
					var r = o[2],
						a = o[3];
					i[o[1]] = r.add, a && r.add(function() {
						n = a
					}, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
						return s[o[0] + "With"](this === s ? i : this, arguments), this
					}, s[o[0] + "With"] = r.fireWith
				}), i.promise(s), e && e.call(s, s), s
			},
			when: function(e) {
				var t, n, i, s = 0,
					o = R.call(arguments),
					r = o.length,
					a = 1 !== r || e && Z.isFunction(e.promise) ? r : 0,
					l = 1 === a ? e : Z.Deferred(),
					d = function(e, n, i) {
						return function(s) {
							n[e] = this, i[e] = arguments.length > 1 ? R.call(arguments) : s, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
						}
					};
				if (r > 1)
					for (t = new Array(r), n = new Array(r), i = new Array(r); r > s; s++) o[s] && Z.isFunction(o[s].promise) ? o[s].promise().done(d(s, i, o)).fail(l.reject).progress(d(s, n, t)) : --a;
				return a || l.resolveWith(i, o), l.promise()
			}
		});
		var ft;
		Z.fn.ready = function(e) {
			return Z.ready.promise().done(e), this
		}, Z.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? Z.readyWait++ : Z.ready(!0)
			},
			ready: function(e) {
				(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ft.resolveWith(Y, [Z]), Z.fn.triggerHandler && (Z(Y).triggerHandler("ready"), Z(Y).off("ready"))))
			}
		}), Z.ready.promise = function(t) {
			return ft || (ft = Z.Deferred(), "complete" === Y.readyState ? setTimeout(Z.ready) : (Y.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))), ft.promise(t)
		}, Z.ready.promise();
		var mt = Z.access = function(e, t, n, i, s, o, r) {
			var a = 0,
				l = e.length,
				d = null == n;
			if ("object" === Z.type(n)) {
				s = !0;
				for (a in n) Z.access(e, t, a, n[a], !0, o, r)
			} else if (void 0 !== i && (s = !0, Z.isFunction(i) || (r = !0), d && (r ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
					return d.call(Z(e), n)
				})), t))
				for (; l > a; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
			return s ? e : d ? t.call(e) : l ? t(e[0], n) : o
		};
		Z.acceptData = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		}, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
			key: function(e) {
				if (!a.accepts(e)) return 0;
				var t = {},
					n = e[this.expando];
				if (!n) {
					n = a.uid++;
					try {
						t[this.expando] = {
							value: n
						}, Object.defineProperties(e, t)
					} catch (i) {
						t[this.expando] = n, Z.extend(e, t)
					}
				}
				return this.cache[n] || (this.cache[n] = {}), n
			},
			set: function(e, t, n) {
				var i, s = this.key(e),
					o = this.cache[s];
				if ("string" == typeof t) o[t] = n;
				else if (Z.isEmptyObject(o)) Z.extend(this.cache[s], t);
				else
					for (i in t) o[i] = t[i];
				return o
			},
			get: function(e, t) {
				var n = this.cache[this.key(e)];
				return void 0 === t ? n : n[t]
			},
			access: function(e, t, n) {
				var i;
				return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function(e, t) {
				var n, i, s, o = this.key(e),
					r = this.cache[o];
				if (void 0 === t) this.cache[o] = {};
				else {
					Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (s = Z.camelCase(t), t in r ? i = [t, s] : (i = s, i = i in r ? [i] : i.match(ht) || [])), n = i.length;
					for (; n--;) delete r[i[n]]
				}
			},
			hasData: function(e) {
				return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
			},
			discard: function(e) {
				e[this.expando] && delete this.cache[e[this.expando]]
			}
		};
		var Bt = new a,
			gt = new a,
			yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			vt = /([A-Z])/g;
		Z.extend({
			hasData: function(e) {
				return gt.hasData(e) || Bt.hasData(e)
			},
			data: function(e, t, n) {
				return gt.access(e, t, n)
			},
			removeData: function(e, t) {
				gt.remove(e, t)
			},
			_data: function(e, t, n) {
				return Bt.access(e, t, n)
			},
			_removeData: function(e, t) {
				Bt.remove(e, t)
			}
		}), Z.fn.extend({
			data: function(e, t) {
				var n, i, s, o = this[0],
					r = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (s = gt.get(o), 1 === o.nodeType && !Bt.get(o, "hasDataAttrs"))) {
						for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(o, i, s[i])));
						Bt.set(o, "hasDataAttrs", !0)
					}
					return s
				}
				return "object" == typeof e ? this.each(function() {
					gt.set(this, e)
				}) : mt(this, function(t) {
					var n, i = Z.camelCase(e);
					if (o && void 0 === t) {
						if (n = gt.get(o, e), void 0 !== n) return n;
						if (n = gt.get(o, i), void 0 !== n) return n;
						if (n = l(o, i, void 0), void 0 !== n) return n
					} else this.each(function() {
						var n = gt.get(this, i);
						gt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && gt.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function(e) {
				return this.each(function() {
					gt.remove(this, e)
				})
			}
		}), Z.extend({
			queue: function(e, t, n) {
				var i;
				return e ? (t = (t || "fx") + "queue", i = Bt.get(e, t), n && (!i || Z.isArray(n) ? i = Bt.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = Z.queue(e, t),
					i = n.length,
					s = n.shift(),
					o = Z._queueHooks(e, t),
					r = function() {
						Z.dequeue(e, t)
					};
				"inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, r, o)), !i && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return Bt.get(e, n) || Bt.access(e, n, {
					empty: Z.Callbacks("once memory").add(function() {
						Bt.remove(e, [t + "queue", n])
					})
				})
			}
		}), Z.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = Z.queue(this, e, t);
					Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					Z.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, i = 1,
					s = Z.Deferred(),
					o = this,
					r = this.length,
					a = function() {
						--i || s.resolveWith(o, [o])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = Bt.get(o[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
				return a(), s.promise(t)
			}
		});
		var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ct = ["Top", "Right", "Bottom", "Left"],
			wt = function(e, t) {
				return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
			},
			_t = /^(?:checkbox|radio)$/i;
		! function() {
			var e = Y.createDocumentFragment(),
				t = e.appendChild(Y.createElement("div")),
				n = Y.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var xt = "undefined";
		K.focusinBubbles = "onfocusin" in e;
		var Et = /^key/,
			At = /^(?:mouse|pointer|contextmenu)|click/,
			kt = /^(?:focusinfocus|focusoutblur)$/,
			Tt = /^([^.]*)(?:\.(.+)|)$/;
		Z.event = {
			global: {},
			add: function(e, t, n, i, s) {
				var o, r, a, l, d, c, u, D, h, p, f, m = Bt.get(e);
				if (m)
					for (n.handler && (o = n, n = o.handler, s = o.selector), n.guid || (n.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(t) {
							return typeof Z !== xt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(ht) || [""], d = t.length; d--;) a = Tt.exec(t[d]) || [], h = f = a[1], p = (a[2] || "").split(".").sort(), h && (u = Z.event.special[h] || {}, h = (s ? u.delegateType : u.bindType) || h, u = Z.event.special[h] || {}, c = Z.extend({
						type: h,
						origType: f,
						data: i,
						handler: n,
						guid: n.guid,
						selector: s,
						needsContext: s && Z.expr.match.needsContext.test(s),
						namespace: p.join(".")
					}, o), (D = l[h]) || (D = l[h] = [], D.delegateCount = 0, u.setup && u.setup.call(e, i, p, r) !== !1 || e.addEventListener && e.addEventListener(h, r, !1)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), s ? D.splice(D.delegateCount++, 0, c) : D.push(c), Z.event.global[h] = !0)
			},
			remove: function(e, t, n, i, s) {
				var o, r, a, l, d, c, u, D, h, p, f, m = Bt.hasData(e) && Bt.get(e);
				if (m && (l = m.events)) {
					for (t = (t || "").match(ht) || [""], d = t.length; d--;)
						if (a = Tt.exec(t[d]) || [], h = f = a[1], p = (a[2] || "").split(".").sort(), h) {
							for (u = Z.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, D = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = D.length; o--;) c = D[o], !s && f !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (D.splice(o, 1), c.selector && D.delegateCount--, u.remove && u.remove.call(e, c));
							r && !D.length && (u.teardown && u.teardown.call(e, p, m.handle) !== !1 || Z.removeEvent(e, h, m.handle), delete l[h])
						} else
							for (h in l) Z.event.remove(e, h + t[d], n, i, !0);
					Z.isEmptyObject(l) && (delete m.handle, Bt.remove(e, "events"))
				}
			},
			trigger: function(t, n, i, s) {
				var o, r, a, l, d, c, u, D = [i || Y],
					h = X.call(t, "type") ? t.type : t,
					p = X.call(t, "namespace") ? t.namespace.split(".") : [];
				if (r = a = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !kt.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), d = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), u = Z.event.special[h] || {}, s || !u.trigger || u.trigger.apply(i, n) !== !1)) {
					if (!s && !u.noBubble && !Z.isWindow(i)) {
						for (l = u.delegateType || h, kt.test(l + h) || (r = r.parentNode); r; r = r.parentNode) D.push(r), a = r;
						a === (i.ownerDocument || Y) && D.push(a.defaultView || a.parentWindow || e)
					}
					for (o = 0;
						(r = D[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || h, c = (Bt.get(r, "events") || {})[t.type] && Bt.get(r, "handle"), c && c.apply(r, n), c = d && r[d], c && c.apply && Z.acceptData(r) && (t.result = c.apply(r, n), t.result === !1 && t.preventDefault());
					return t.type = h, s || t.isDefaultPrevented() || u._default && u._default.apply(D.pop(), n) !== !1 || !Z.acceptData(i) || d && Z.isFunction(i[h]) && !Z.isWindow(i) && (a = i[d], a && (i[d] = null), Z.event.triggered = h, i[h](), Z.event.triggered = void 0, a && (i[d] = a)), t.result
				}
			},
			dispatch: function(e) {
				e = Z.event.fix(e);
				var t, n, i, s, o, r = [],
					a = R.call(arguments),
					l = (Bt.get(this, "events") || {})[e.type] || [],
					d = Z.event.special[e.type] || {};
				if (a[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
					for (r = Z.event.handlers.call(this, e, l), t = 0;
						(s = r[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = s.elem, n = 0;
							(o = s.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
					return d.postDispatch && d.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, i, s, o, r = [],
					a = t.delegateCount,
					l = e.target;
				if (a && l.nodeType && (!e.button || "click" !== e.type))
					for (; l !== this; l = l.parentNode || this)
						if (l.disabled !== !0 || "click" !== e.type) {
							for (i = [], n = 0; a > n; n++) o = t[n], s = o.selector + " ", void 0 === i[s] && (i[s] = o.needsContext ? Z(s, this).index(l) >= 0 : Z.find(s, this, null, [l]).length), i[s] && i.push(o);
							i.length && r.push({
								elem: l,
								handlers: i
							})
						}
				return a < t.length && r.push({
					elem: this,
					handlers: t.slice(a)
				}), r
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, i, s, o = t.button;
					return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, i = n.documentElement, s = n.body, e.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			fix: function(e) {
				if (e[Z.expando]) return e;
				var t, n, i, s = e.type,
					o = e,
					r = this.fixHooks[s];
				for (r || (this.fixHooks[s] = r = At.test(s) ? this.mouseHooks : Et.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new Z.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
				return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, o) : e
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						return this !== u() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === u() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return Z.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, i) {
				var s = Z.extend(new Z.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				i ? Z.event.trigger(s, null, t) : Z.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
			}
		}, Z.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		}, Z.Event = function(e, t) {
			return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
		}, Z.Event.prototype = {
			isDefaultPrevented: c,
			isPropagationStopped: c,
			isImmediatePropagationStopped: c,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, Z.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			Z.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, i = this,
						s = e.relatedTarget,
						o = e.handleObj;
					return (!s || s !== i && !Z.contains(i, s)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), K.focusinBubbles || Z.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				Z.event.simulate(t, e.target, Z.event.fix(e), !0)
			};
			Z.event.special[t] = {
				setup: function() {
					var i = this.ownerDocument || this,
						s = Bt.access(i, t);
					s || i.addEventListener(e, n, !0), Bt.access(i, t, (s || 0) + 1)
				},
				teardown: function() {
					var i = this.ownerDocument || this,
						s = Bt.access(i, t) - 1;
					s ? Bt.access(i, t, s) : (i.removeEventListener(e, n, !0), Bt.remove(i, t))
				}
			}
		}), Z.fn.extend({
			on: function(e, t, n, i, s) {
				var o, r;
				if ("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for (r in e) this.on(r, t, n, e[r], s);
					return this
				}
				if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
				else if (!i) return this;
				return 1 === s && (o = i, i = function(e) {
					return Z().off(e), o.apply(this, arguments)
				}, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
					Z.event.add(this, e, i, n, t)
				})
			},
			one: function(e, t, n, i) {
				return this.on(e, t, n, i, 1)
			},
			off: function(e, t, n) {
				var i, s;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (s in e) this.off(s, t, e[s]);
					return this
				}
				return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
					Z.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					Z.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? Z.event.trigger(e, t, n, !0) : void 0
			}
		});
		var Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			St = /<([\w:]+)/,
			$t = /<|&#?\w+;/,
			Ft = /<(?:script|style|link)/i,
			jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			zt = /^$|\/(?:java|ecma)script/i,
			Nt = /^true\/(.*)/,
			Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			It = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td, Z.extend({
			clone: function(e, t, n) {
				var i, s, o, r, a = e.cloneNode(!0),
					l = Z.contains(e.ownerDocument, e);
				if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
					for (r = B(a), o = B(e), i = 0, s = o.length; s > i; i++) g(o[i], r[i]);
				if (t)
					if (n)
						for (o = o || B(e), r = r || B(a), i = 0, s = o.length; s > i; i++) m(o[i], r[i]);
					else m(e, a);
				return r = B(a, "script"), r.length > 0 && f(r, !l && B(e, "script")), a
			},
			buildFragment: function(e, t, n, i) {
				for (var s, o, r, a, l, d, c = t.createDocumentFragment(), u = [], D = 0, h = e.length; h > D; D++)
					if (s = e[D], s || 0 === s)
						if ("object" === Z.type(s)) Z.merge(u, s.nodeType ? [s] : s);
						else if ($t.test(s)) {
					for (o = o || c.appendChild(t.createElement("div")), r = (St.exec(s) || ["", ""])[1].toLowerCase(), a = It[r] || It._default, o.innerHTML = a[1] + s.replace(Mt, "<$1></$2>") + a[2], d = a[0]; d--;) o = o.lastChild;
					Z.merge(u, o.childNodes), o = c.firstChild, o.textContent = ""
				} else u.push(t.createTextNode(s));
				for (c.textContent = "", D = 0; s = u[D++];)
					if ((!i || -1 === Z.inArray(s, i)) && (l = Z.contains(s.ownerDocument, s), o = B(c.appendChild(s), "script"), l && f(o), n))
						for (d = 0; s = o[d++];) zt.test(s.type || "") && n.push(s);
				return c
			},
			cleanData: function(e) {
				for (var t, n, i, s, o = Z.event.special, r = 0; void 0 !== (n = e[r]); r++) {
					if (Z.acceptData(n) && (s = n[Bt.expando], s && (t = Bt.cache[s]))) {
						if (t.events)
							for (i in t.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
						Bt.cache[s] && delete Bt.cache[s]
					}
					delete gt.cache[n[gt.expando]]
				}
			}
		}), Z.fn.extend({
			text: function(e) {
				return mt(this, function(e) {
					return void 0 === e ? Z.text(this) : this.empty().each(function() {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = D(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = D(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for (var n, i = e ? Z.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || Z.cleanData(B(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && f(B(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(B(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return Z.clone(this, e, t)
				})
			},
			html: function(e) {
				return mt(this, function(e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ft.test(e) && !It[(St.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Mt, "<$1></$2>");
						try {
							for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(B(t, !1)), t.innerHTML = e);
							t = 0
						} catch (s) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, Z.cleanData(B(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = V.apply([], e);
				var n, i, s, o, r, a, l = 0,
					d = this.length,
					c = this,
					u = d - 1,
					D = e[0],
					f = Z.isFunction(D);
				if (f || d > 1 && "string" == typeof D && !K.checkClone && jt.test(D)) return this.each(function(n) {
					var i = c.eq(n);
					f && (e[0] = D.call(this, n, i.html())), i.domManip(e, t)
				});
				if (d && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
					for (s = Z.map(B(n, "script"), h), o = s.length; d > l; l++) r = n, l !== u && (r = Z.clone(r, !0, !0), o && Z.merge(s, B(r, "script"))), t.call(this[l], r, l);
					if (o)
						for (a = s[s.length - 1].ownerDocument, Z.map(s, p), l = 0; o > l; l++) r = s[l], zt.test(r.type || "") && !Bt.access(r, "globalEval") && Z.contains(a, r) && (r.src ? Z._evalUrl && Z._evalUrl(r.src) : Z.globalEval(r.textContent.replace(Pt, "")))
				}
				return this
			}
		}), Z.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			Z.fn[e] = function(e) {
				for (var n, i = [], s = Z(e), o = s.length - 1, r = 0; o >= r; r++) n = r === o ? this : this.clone(!0), Z(s[r])[t](n), W.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Lt, Ot = {},
			qt = /^margin/,
			Ht = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
			Rt = function(t) {
				return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
			};
		! function() {
			function t() {
				r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", s.appendChild(o);
				var t = e.getComputedStyle(r, null);
				n = "1%" !== t.top, i = "4px" === t.width, s.removeChild(o)
			}
			var n, i, s = Y.documentElement,
				o = Y.createElement("div"),
				r = Y.createElement("div");
			r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), e.getComputedStyle && Z.extend(K, {
				pixelPosition: function() {
					return t(), n
				},
				boxSizingReliable: function() {
					return null == i && t(), i
				},
				reliableMarginRight: function() {
					var t, n = r.appendChild(Y.createElement("div"));
					return n.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", r.style.width = "1px", s.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), s.removeChild(o), r.removeChild(n), t
				}
			}))
		}(), Z.swap = function(e, t, n, i) {
			var s, o, r = {};
			for (o in t) r[o] = e.style[o], e.style[o] = t[o];
			s = n.apply(e, i || []);
			for (o in t) e.style[o] = r[o];
			return s
		};
		var Vt = /^(none|table(?!-c[ea]).+)/,
			Wt = new RegExp("^(" + bt + ")(.*)$", "i"),
			Jt = new RegExp("^([+-])=(" + bt + ")", "i"),
			Ut = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Gt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Xt = ["Webkit", "O", "Moz", "ms"];
		Z.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = b(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function(e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var s, o, r, a = Z.camelCase(t),
						l = e.style;
					return t = Z.cssProps[a] || (Z.cssProps[a] = w(l, a)), r = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : l[t] : (o = typeof n, "string" === o && (s = Jt.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
				}
			},
			css: function(e, t, n, i) {
				var s, o, r, a = Z.camelCase(t);
				return t = Z.cssProps[a] || (Z.cssProps[a] = w(e.style, a)), r = Z.cssHooks[t] || Z.cssHooks[a], r && "get" in r && (s = r.get(e, !0, n)), void 0 === s && (s = b(e, t, i)), "normal" === s && t in Gt && (s = Gt[t]), "" === n || n ? (o = parseFloat(s), n === !0 || Z.isNumeric(o) ? o || 0 : s) : s
			}
		}), Z.each(["height", "width"], function(e, t) {
			Z.cssHooks[t] = {
				get: function(e, n, i) {
					return n ? Vt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ut, function() {
						return E(e, t, i)
					}) : E(e, t, i) : void 0
				},
				set: function(e, n, i) {
					var s = i && Rt(e);
					return _(e, n, i ? x(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, s), s) : 0)
				}
			}
		}), Z.cssHooks.marginRight = C(K.reliableMarginRight, function(e, t) {
			return t ? Z.swap(e, {
				display: "inline-block"
			}, b, [e, "marginRight"]) : void 0
		}), Z.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			Z.cssHooks[e + t] = {
				expand: function(n) {
					for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
					return s
				}
			}, qt.test(e) || (Z.cssHooks[e + t].set = _)
		}), Z.fn.extend({
			css: function(e, t) {
				return mt(this, function(e, t, n) {
					var i, s, o = {},
						r = 0;
					if (Z.isArray(t)) {
						for (i = Rt(e), s = t.length; s > r; r++) o[t[r]] = Z.css(e, t[r], !1, i);
						return o
					}
					return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return A(this, !0)
			},
			hide: function() {
				return A(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					wt(this) ? Z(this).show() : Z(this).hide()
				})
			}
		}), Z.Tween = k, k.prototype = {
			constructor: k,
			init: function(e, t, n, i, s, o) {
				this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = k.propHooks[this.prop];
				return e && e.get ? e.get(this) : k.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = k.propHooks[this.prop];
				return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
			}
		}, k.prototype.init.prototype = k.prototype, k.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, Z.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, Z.fx = k.prototype.init, Z.fx.step = {};
		var Kt, Yt, Qt = /^(?:toggle|show|hide)$/,
			Zt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
			en = /queueHooks$/,
			tn = [$],
			nn = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						i = n.cur(),
						s = Zt.exec(t),
						o = s && s[3] || (Z.cssNumber[e] ? "" : "px"),
						r = (Z.cssNumber[e] || "px" !== o && +i) && Zt.exec(Z.css(n.elem, e)),
						a = 1,
						l = 20;
					if (r && r[3] !== o) {
						o = o || r[3], s = s || [], r = +i || 1;
						do a = a || ".5", r /= a, Z.style(n.elem, e, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
					}
					return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
				}]
			};
		Z.Animation = Z.extend(j, {
				tweener: function(e, t) {
					Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
					for (var n, i = 0, s = e.length; s > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
				},
				prefilter: function(e, t) {
					t ? tn.unshift(e) : tn.push(e)
				}
			}), Z.speed = function(e, t, n) {
				var i = e && "object" == typeof e ? Z.extend({}, e) : {
					complete: n || !n && t || Z.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !Z.isFunction(t) && t
				};
				return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
					Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
				}, i
			}, Z.fn.extend({
				fadeTo: function(e, t, n, i) {
					return this.filter(wt).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function(e, t, n, i) {
					var s = Z.isEmptyObject(e),
						o = Z.speed(t, n, i),
						r = function() {
							var t = j(this, Z.extend({}, e), o);
							(s || Bt.get(this, "finish")) && t.stop(!0)
						};
					return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
				},
				stop: function(e, t, n) {
					var i = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							s = null != e && e + "queueHooks",
							o = Z.timers,
							r = Bt.get(this);
						if (s) r[s] && r[s].stop && i(r[s]);
						else
							for (s in r) r[s] && r[s].stop && en.test(s) && i(r[s]);
						for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(n), t = !1, o.splice(s, 1));
						(t || !n) && Z.dequeue(this, e)
					})
				},
				finish: function(e) {
					return e !== !1 && (e = e || "fx"), this.each(function() {
						var t, n = Bt.get(this),
							i = n[e + "queue"],
							s = n[e + "queueHooks"],
							o = Z.timers,
							r = i ? i.length : 0;
						for (n.finish = !0, Z.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), Z.each(["toggle", "show", "hide"], function(e, t) {
				var n = Z.fn[t];
				Z.fn[t] = function(e, i, s) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, s)
				}
			}), Z.each({
				slideDown: M("show"),
				slideUp: M("hide"),
				slideToggle: M("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				Z.fn[e] = function(e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), Z.timers = [], Z.fx.tick = function() {
				var e, t = 0,
					n = Z.timers;
				for (Kt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
				n.length || Z.fx.stop(), Kt = void 0
			}, Z.fx.timer = function(e) {
				Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
			}, Z.fx.interval = 13, Z.fx.start = function() {
				Yt || (Yt = setInterval(Z.fx.tick, Z.fx.interval))
			}, Z.fx.stop = function() {
				clearInterval(Yt), Yt = null
			}, Z.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, Z.fn.delay = function(e, t) {
				return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var i = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(i)
					}
				})
			},
			function() {
				var e = Y.createElement("input"),
					t = Y.createElement("select"),
					n = t.appendChild(Y.createElement("option"));
				e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
			}();
		var sn, on, rn = Z.expr.attrHandle;
		Z.fn.extend({
			attr: function(e, t) {
				return mt(this, Z.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					Z.removeAttr(this, e)
				})
			}
		}), Z.extend({
			attr: function(e, t, n) {
				var i, s, o = e.nodeType;
				return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === xt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : sn)), void 0 === n ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = Z.find.attr(e, t), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(e, n, t)) ? s : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
			},
			removeAttr: function(e, t) {
				var n, i, s = 0,
					o = t && t.match(ht);
				if (o && 1 === e.nodeType)
					for (; n = o[s++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!K.radioValue && "radio" === t && Z.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), on = {
			set: function(e, t, n) {
				return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = rn[t] || Z.find.attr;
			rn[t] = function(e, t, i) {
				var s, o;
				return i || (o = rn[t], rn[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, rn[t] = o), s
			}
		});
		var an = /^(?:input|select|textarea|button)$/i;
		Z.fn.extend({
			prop: function(e, t) {
				return mt(this, Z.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[Z.propFix[e] || e]
				})
			}
		}), Z.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(e, t, n) {
				var i, s, o, r = e.nodeType;
				return e && 3 !== r && 8 !== r && 2 !== r ? (o = 1 !== r || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, s = Z.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]) : void 0
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
					}
				}
			}
		}), K.optSelected || (Z.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			}
		}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			Z.propFix[this.toLowerCase()] = this
		});
		var ln = /[\t\r\n\f]/g;
		Z.fn.extend({
			addClass: function(e) {
				var t, n, i, s, o, r, a = "string" == typeof e && e,
					l = 0,
					d = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).addClass(e.call(this, t, this.className))
				});
				if (a)
					for (t = (e || "").match(ht) || []; d > l; l++)
						if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
							for (o = 0; s = t[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
							r = Z.trim(i), n.className !== r && (n.className = r)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, i, s, o, r, a = 0 === arguments.length || "string" == typeof e && e,
					l = 0,
					d = this.length;
				if (Z.isFunction(e)) return this.each(function(t) {
					Z(this).removeClass(e.call(this, t, this.className))
				});
				if (a)
					for (t = (e || "").match(ht) || []; d > l; l++)
						if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
							for (o = 0; s = t[o++];)
								for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
							r = e ? Z.trim(i) : "", n.className !== r && (n.className = r)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
					Z(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if ("string" === n)
						for (var t, i = 0, s = Z(this), o = e.match(ht) || []; t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
					else(n === xt || "boolean" === n) && (this.className && Bt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Bt.get(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		});
		var dn = /\r/g;
		Z.fn.extend({
			val: function(e) {
				var t, n, i, s = this[0];
				return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
					var s;
					1 === this.nodeType && (s = i ? e.call(this, n, Z(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : Z.isArray(s) && (s = Z.map(s, function(e) {
						return null == e ? "" : e + ""
					})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
				})) : s ? (t = Z.valHooks[s.type] || Z.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(dn, "") : null == n ? "" : n)) : void 0
			}
		}), Z.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = Z.find.attr(e, "value");
						return null != t ? t : Z.trim(Z.text(e))
					}
				},
				select: {
					get: function(e) {
						for (var t, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
							if (n = i[l], !(!n.selected && l !== s || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
								if (t = Z(n).val(), o) return t;
								r.push(t)
							}
						return r
					},
					set: function(e, t) {
						for (var n, i, s = e.options, o = Z.makeArray(t), r = s.length; r--;) i = s[r], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
						return n || (e.selectedIndex = -1), o
					}
				}
			}
		}), Z.each(["radio", "checkbox"], function() {
			Z.valHooks[this] = {
				set: function(e, t) {
					return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
				}
			}, K.checkOn || (Z.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			Z.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), Z.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var cn = Z.now(),
			un = /\?/;
		Z.parseJSON = function(e) {
			return JSON.parse(e + "")
		}, Z.parseXML = function(e) {
			var t, n;
			if (!e || "string" != typeof e) return null;
			try {
				n = new DOMParser, t = n.parseFromString(e, "text/xml")
			} catch (i) {
				t = void 0
			}
			return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
		};
		var Dn = /#.*$/,
			hn = /([?&])_=[^&]*/,
			pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			mn = /^(?:GET|HEAD)$/,
			Bn = /^\/\//,
			gn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			yn = {},
			vn = {},
			bn = "*/".concat("*"),
			Cn = e.location.href,
			wn = gn.exec(Cn.toLowerCase()) || [];
		Z.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Cn,
				type: "GET",
				isLocal: fn.test(wn[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": bn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": Z.parseJSON,
					"text xml": Z.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
			},
			ajaxPrefilter: z(yn),
			ajaxTransport: z(vn),
			ajax: function(e, t) {
				function n(e, t, n, r) {
					var l, c, B, g, v, C = t;
					2 !== y && (y = 2, a && clearTimeout(a), i = void 0, o = r || "", b.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (g = I(u, b, n)), g = L(u, g, b, l), l ? (u.ifModified && (v = b.getResponseHeader("Last-Modified"), v && (Z.lastModified[s] = v), v = b.getResponseHeader("etag"), v && (Z.etag[s] = v)), 204 === e || "HEAD" === u.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = g.state, c = g.data, B = g.error, l = !B)) : (B = C, (e || !C) && (C = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || C) + "", l ? p.resolveWith(D, [c, C, b]) : p.rejectWith(D, [b, C, B]), b.statusCode(m), m = void 0, d && h.trigger(l ? "ajaxSuccess" : "ajaxError", [b, u, l ? c : B]), f.fireWith(D, [b, C]), d && (h.trigger("ajaxComplete", [b, u]), --Z.active || Z.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var i, s, o, r, a, l, d, c, u = Z.ajaxSetup({}, t),
					D = u.context || u,
					h = u.context && (D.nodeType || D.jquery) ? Z(D) : Z.event,
					p = Z.Deferred(),
					f = Z.Callbacks("once memory"),
					m = u.statusCode || {},
					B = {},
					g = {},
					y = 0,
					v = "canceled",
					b = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (2 === y) {
								if (!r)
									for (r = {}; t = pn.exec(o);) r[t[1].toLowerCase()] = t[2];
								t = r[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === y ? o : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return y || (e = g[n] = g[n] || e, B[e] = t), this
						},
						overrideMimeType: function(e) {
							return y || (u.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e)
								if (2 > y)
									for (t in e) m[t] = [m[t], e[t]];
								else b.always(e[b.status]);
							return this
						},
						abort: function(e) {
							var t = e || v;
							return i && i.abort(t), n(0, t), this
						}
					};
				if (p.promise(b).complete = f.add, b.success = b.done, b.error = b.fail, u.url = ((e || u.url || Cn) + "").replace(Dn, "").replace(Bn, wn[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(ht) || [""], null == u.crossDomain && (l = gn.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === wn[1] && l[2] === wn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wn[3] || ("http:" === wn[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), N(yn, u, t, b), 2 === y) return b;
				d = Z.event && u.global, d && 0 === Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !mn.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (un.test(s) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = hn.test(s) ? s.replace(hn, "$1_=" + cn++) : s + (un.test(s) ? "&" : "?") + "_=" + cn++)), u.ifModified && (Z.lastModified[s] && b.setRequestHeader("If-Modified-Since", Z.lastModified[s]), Z.etag[s] && b.setRequestHeader("If-None-Match", Z.etag[s])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", u.contentType), b.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : u.accepts["*"]);
				for (c in u.headers) b.setRequestHeader(c, u.headers[c]);
				if (u.beforeSend && (u.beforeSend.call(D, b, u) === !1 || 2 === y)) return b.abort();
				v = "abort";
				for (c in {
						success: 1,
						error: 1,
						complete: 1
					}) b[c](u[c]);
				if (i = N(vn, u, t, b)) {
					b.readyState = 1, d && h.trigger("ajaxSend", [b, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
						b.abort("timeout")
					}, u.timeout));
					try {
						y = 1, i.send(B, n)
					} catch (C) {
						if (!(2 > y)) throw C;
						n(-1, C)
					}
				} else n(-1, "No Transport");
				return b
			},
			getJSON: function(e, t, n) {
				return Z.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return Z.get(e, void 0, t, "script")
			}
		}), Z.each(["get", "post"], function(e, t) {
			Z[t] = function(e, n, i, s) {
				return Z.isFunction(n) && (s = s || i, i = n, n = void 0), Z.ajax({
					url: e,
					type: t,
					dataType: s,
					data: n,
					success: i
				})
			}
		}), Z._evalUrl = function(e) {
			return Z.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, Z.fn.extend({
			wrapAll: function(e) {
				var t;
				return Z.isFunction(e) ? this.each(function(t) {
					Z(this).wrapAll(e.call(this, t))
				}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
			},
			wrapInner: function(e) {
				return this.each(Z.isFunction(e) ? function(t) {
					Z(this).wrapInner(e.call(this, t))
				} : function() {
					var t = Z(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = Z.isFunction(e);
				return this.each(function(n) {
					Z(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
				}).end()
			}
		}), Z.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0
		}, Z.expr.filters.visible = function(e) {
			return !Z.expr.filters.hidden(e)
		};
		var _n = /%20/g,
			xn = /\[\]$/,
			En = /\r?\n/g,
			An = /^(?:submit|button|image|reset|file)$/i,
			kn = /^(?:input|select|textarea|keygen)/i;
		Z.param = function(e, t) {
			var n, i = [],
				s = function(e, t) {
					t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
				s(this.name, this.value)
			});
			else
				for (n in e) O(n, e[n], t, s);
			return i.join("&").replace(_n, "+")
		}, Z.fn.extend({
			serialize: function() {
				return Z.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = Z.prop(this, "elements");
					return e ? Z.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !Z(this).is(":disabled") && kn.test(this.nodeName) && !An.test(e) && (this.checked || !_t.test(e))
				}).map(function(e, t) {
					var n = Z(this).val();
					return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(En, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(En, "\r\n")
					}
				}).get()
			}
		}), Z.ajaxSettings.xhr = function() {
			try {
				return new XMLHttpRequest
			} catch (e) {}
		};
		var Tn = 0,
			Mn = {},
			Sn = {
				0: 200,
				1223: 204
			},
			$n = Z.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function() {
			for (var e in Mn) Mn[e]()
		}), K.cors = !!$n && "withCredentials" in $n, K.ajax = $n = !!$n, Z.ajaxTransport(function(e) {
			var t;
			return K.cors || $n && !e.crossDomain ? {
				send: function(n, i) {
					var s, o = e.xhr(),
						r = ++Tn;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (s in e.xhrFields) o[s] = e.xhrFields[s];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (s in n) o.setRequestHeader(s, n[s]);
					t = function(e) {
						return function() {
							t && (delete Mn[r], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(Sn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
								text: o.responseText
							} : void 0, o.getAllResponseHeaders()))
						}
					}, o.onload = t(), o.onerror = t("error"), t = Mn[r] = t("abort");
					try {
						o.send(e.hasContent && e.data || null)
					} catch (a) {
						if (t) throw a
					}
				},
				abort: function() {
					t && t()
				}
			} : void 0
		}), Z.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return Z.globalEval(e), e
				}
			}
		}), Z.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), Z.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, n;
				return {
					send: function(i, s) {
						t = Z("<script>").prop({
							async: !0,
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
						}), Y.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			}
		});
		var Fn = [],
			jn = /(=)\?(?=&|$)|\?\?/;
		Z.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Fn.pop() || Z.expando + "_" + cn++;
				return this[e] = !0, e
			}
		}), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
			var s, o, r, a = t.jsonp !== !1 && (jn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jn.test(t.data) && "data");
			return a || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jn, "$1" + s) : t.jsonp !== !1 && (t.url += (un.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
				return r || Z.error(s + " was not called"), r[0]
			}, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
				r = arguments
			}, i.always(function() {
				e[s] = o, t[s] && (t.jsonpCallback = n.jsonpCallback, Fn.push(s)), r && Z.isFunction(o) && o(r[0]), r = o = void 0
			}), "script") : void 0
		}), Z.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || Y;
			var i = rt.exec(e),
				s = !n && [];
			return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, s), s && s.length && Z(s).remove(), Z.merge([], i.childNodes))
		};
		var zn = Z.fn.load;
		Z.fn.load = function(e, t, n) {
			if ("string" != typeof e && zn) return zn.apply(this, arguments);
			var i, s, o, r = this,
				a = e.indexOf(" ");
			return a >= 0 && (i = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), r.length > 0 && Z.ajax({
				url: e,
				type: s,
				dataType: "html",
				data: t
			}).done(function(e) {
				o = arguments, r.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
			}).complete(n && function(e, t) {
				r.each(n, o || [e.responseText, t, e])
			}), this
		}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			Z.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), Z.expr.filters.animated = function(e) {
			return Z.grep(Z.timers, function(t) {
				return e === t.elem
			}).length
		};
		var Nn = e.document.documentElement;
		Z.offset = {
			setOffset: function(e, t, n) {
				var i, s, o, r, a, l, d, c = Z.css(e, "position"),
					u = Z(e),
					D = {};
				"static" === c && (e.style.position = "relative"), a = u.offset(), o = Z.css(e, "top"), l = Z.css(e, "left"), d = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, d ? (i = u.position(), r = i.top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (D.top = t.top - a.top + r), null != t.left && (D.left = t.left - a.left + s), "using" in t ? t.using.call(e, D) : u.css(D)
			}
		}, Z.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					Z.offset.setOffset(this, e, t)
				});
				var t, n, i = this[0],
					s = {
						top: 0,
						left: 0
					},
					o = i && i.ownerDocument;
				return o ? (t = o.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== xt && (s = i.getBoundingClientRect()), n = q(o), {
					top: s.top + n.pageYOffset - t.clientTop,
					left: s.left + n.pageXOffset - t.clientLeft
				}) : s) : void 0
			},
			position: function() {
				if (this[0]) {
					var e, t, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - i.top - Z.css(n, "marginTop", !0),
						left: t.left - i.left - Z.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent || Nn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
					return e || Nn
				})
			}
		}), Z.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, n) {
			var i = "pageYOffset" === n;
			Z.fn[t] = function(s) {
				return mt(this, function(t, s, o) {
					var r = q(t);
					return void 0 === o ? r ? r[n] : t[s] : void(r ? r.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[s] = o)
				}, t, s, arguments.length, null)
			}
		}), Z.each(["top", "left"], function(e, t) {
			Z.cssHooks[t] = C(K.pixelPosition, function(e, n) {
				return n ? (n = b(e, t), Ht.test(n) ? Z(e).position()[t] + "px" : n) : void 0
			})
		}), Z.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			Z.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, i) {
				Z.fn[i] = function(i, s) {
					var o = arguments.length && (n || "boolean" != typeof i),
						r = n || (i === !0 || s === !0 ? "margin" : "border");
					return mt(this, function(t, n, i) {
						var s;
						return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? Z.css(t, n, r) : Z.style(t, n, i, r)
					}, t, o ? i : void 0, o, null)
				}
			})
		}), Z.fn.size = function() {
			return this.length
		}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return Z
		});
		var Pn = e.jQuery,
			In = e.$;
		return Z.noConflict = function(t) {
			return e.$ === Z && (e.$ = In), t && e.jQuery === Z && (e.jQuery = Pn), Z
		}, typeof t === xt && (e.jQuery = e.$ = Z), Z
	}),
	function(e, t, n) {
		function i(t, n) {
			this.bodyOverflowX, this.callbacks = {
				hide: [],
				show: []
			}, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, l, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
		}

		function s(t, n) {
			var i = !0;
			return e.each(t, function(e) {
				return "undefined" == typeof n[e] || t[e] !== n[e] ? (i = !1, !1) : void 0
			}), i
		}

		function o() {
			return !c && d
		}

		function r() {
			var e = n.body || n.documentElement,
				t = e.style,
				i = "transition";
			if ("string" == typeof t[i]) return !0;
			v = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
			for (var s = 0; s < v.length; s++)
				if ("string" == typeof t[v[s] + i]) return !0;
			return !1
		}
		var a = "tooltipster",
			l = {
				animation: "fade",
				arrow: !0,
				arrowColor: "",
				autoClose: !0,
				content: null,
				contentAsHTML: !1,
				contentCloning: !0,
				debug: !0,
				delay: 200,
				minWidth: 0,
				maxWidth: null,
				functionInit: function() {},
				functionBefore: function(e, t) {
					t()
				},
				functionReady: function() {},
				functionAfter: function() {},
				hideOnClick: !1,
				icon: "(?)",
				iconCloning: !0,
				iconDesktop: !1,
				iconTouch: !1,
				iconTheme: "tooltipster-icon",
				interactive: !1,
				interactiveTolerance: 350,
				multiple: !1,
				offsetX: 0,
				offsetY: 0,
				onlyOne: !1,
				position: "top",
				positionTracker: !1,
				positionTrackerCallback: function() {
					"hover" == this.option("trigger") && this.option("autoClose") && this.hide()
				},
				restoration: "current",
				speed: 350,
				timer: 0,
				theme: "tooltipster-default",
				touchDevices: !0,
				trigger: "hover",
				updateAnimation: !0
			};
		i.prototype = {
			_init: function() {
				var t = this;
				if (n.querySelector) {
					var i = null;
					void 0 === t.$el.data("tooltipster-initialTitle") && (i = t.$el.attr("title"), void 0 === i && (i = null), t.$el.data("tooltipster-initialTitle", i)), t._content_set(null !== t.options.content ? t.options.content : i);
					var s = t.options.functionInit.call(t.$el, t.$el, t.Content);
					"undefined" != typeof s && t._content_set(s), t.$el.removeAttr("title").addClass("tooltipstered"), !d && t.options.iconDesktop || d && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.$elProxy = t.options.iconCloning ? t.options.icon.clone(!0) : t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function() {
						(!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !0, t._show())
					}).on("mouseleave." + t.namespace, function() {
						(!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !1)
					}), d && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function() {
						t._showNow()
					})) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function() {
						(!o() || t.options.touchDevices) && t._show()
					})
				}
			},
			_show: function() {
				var e = this;
				"shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function() {
					("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
				}, e.options.delay) : e._showNow())
			},
			_showNow: function(n) {
				var i = this;
				i.options.functionBefore.call(i.$el, i.$el, function() {
					if (i.enabled && null !== i.Content) {
						n && i.callbacks.show.push(n), i.callbacks.hide = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null, i.options.onlyOne && e(".tooltipstered").not(i.$el).each(function(t, n) {
							var i = e(n),
								s = i.data("tooltipster-ns");
							e.each(s, function(e, t) {
								var n = i.data(t),
									s = n.status(),
									o = n.option("autoClose");
								"hidden" !== s && "disappearing" !== s && o && n.hide()
							})
						});
						var s = function() {
							i.Status = "shown", e.each(i.callbacks.show, function(e, t) {
								t.call(i.$el)
							}), i.callbacks.show = []
						};
						if ("hidden" !== i.Status) {
							var o = 0;
							"disappearing" === i.Status ? (i.Status = "appearing", r() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(s)) : i.$tooltip.stop().fadeIn(s)) : "shown" === i.Status && s()
						} else {
							i.Status = "appearing";
							var o = i.options.speed;
							i.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
							var a = "tooltipster-" + i.options.animation,
								l = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;",
								c = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : "",
								u = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "",
								D = i.options.interactive ? "pointer-events: auto;" : "";
							if (i.$tooltip = e('<div class="tooltipster-base ' + i.options.theme + '" style="' + c + " " + u + " " + D + " " + l + '"><div class="tooltipster-content"></div></div>'), r() && i.$tooltip.addClass(a), i._content_insert(), i.$tooltip.appendTo("body"), i.reposition(), i.options.functionReady.call(i.$el, i.$el, i.$tooltip), r() ? (i.$tooltip.addClass(a + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(s)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, s), i._interval_set(), e(t).on("scroll." + i.namespace + " resize." + i.namespace, function() {
									i.reposition()
								}), i.options.autoClose)
								if (e("body").off("." + i.namespace), "hover" == i.options.trigger) {
									if (d && setTimeout(function() {
											e("body").on("touchstart." + i.namespace, function() {
												i.hide()
											})
										}, 0), i.options.interactive) {
										d && i.$tooltip.on("touchstart." + i.namespace, function(e) {
											e.stopPropagation()
										});
										var h = null;
										i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
											clearTimeout(h), h = setTimeout(function() {
												i.hide()
											}, i.options.interactiveTolerance)
										}).on("mouseenter." + i.namespace + "-autoClose", function() {
											clearTimeout(h)
										})
									} else i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
										i.hide()
									});
									i.options.hideOnClick && i.$elProxy.on("click." + i.namespace + "-autoClose", function() {
										i.hide()
									})
								} else "click" == i.options.trigger && (setTimeout(function() {
									e("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
										i.hide()
									})
								}, 0), i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(e) {
									e.stopPropagation()
								}))
						}
						i.options.timer > 0 && (i.timerHide = setTimeout(function() {
							i.timerHide = null, i.hide()
						}, i.options.timer + o))
					}
				})
			},
			_interval_set: function() {
				var t = this;
				t.checkInterval = setInterval(function() {
					if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length)("shown" == t.Status || "appearing" == t.Status) && t.hide(), t._interval_cancel();
					else if (t.options.positionTracker) {
						var n = t._repositionInfo(t.$elProxy),
							i = !1;
						s(n.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? s(n.position, t.elProxyPosition.position) && (i = !0) : s(n.offset, t.elProxyPosition.offset) && (i = !0)), i || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
					}
				}, 200)
			},
			_interval_cancel: function() {
				clearInterval(this.checkInterval), this.checkInterval = null
			},
			_content_set: function(e) {
				"object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
			},
			_content_insert: function() {
				var e = this,
					t = this.$tooltip.find(".tooltipster-content");
				"string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
			},
			_update: function(e) {
				var t = this;
				t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (r() ? (t.$tooltip.css({
					width: "",
					"-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					"-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
					transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
				}).addClass("tooltipster-content-changing"), setTimeout(function() {
					"hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
						"hidden" !== t.Status && t.$tooltip.css({
							"-webkit-transition": t.options.speed + "ms",
							"-moz-transition": t.options.speed + "ms",
							"-o-transition": t.options.speed + "ms",
							"-ms-transition": t.options.speed + "ms",
							transition: t.options.speed + "ms"
						})
					}, t.options.speed))
				}, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
					"hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
				}))) : t.hide()
			},
			_repositionInfo: function(e) {
				return {
					dimension: {
						height: e.outerHeight(!1),
						width: e.outerWidth(!1)
					},
					offset: e.offset(),
					position: {
						left: parseInt(e.css("left")),
						top: parseInt(e.css("top"))
					}
				}
			},
			hide: function(n) {
				var i = this;
				n && i.callbacks.hide.push(n), i.callbacks.show = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null;
				var s = function() {
					e.each(i.callbacks.hide, function(e, t) {
						t.call(i.$el)
					}), i.callbacks.hide = []
				};
				if ("shown" == i.Status || "appearing" == i.Status) {
					i.Status = "disappearing";
					var o = function() {
						i.Status = "hidden", "object" == typeof i.Content && null !== i.Content && i.Content.detach(), i.$tooltip.remove(), i.$tooltip = null, e(t).off("." + i.namespace), e("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX), e("body").off("." + i.namespace), i.$elProxy.off("." + i.namespace + "-autoClose"), i.options.functionAfter.call(i.$el, i.$el), s()
					};
					r() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(o)) : i.$tooltip.stop().fadeOut(i.options.speed, o)
				} else "hidden" == i.Status && s();
				return i
			},
			show: function(e) {
				return this._showNow(e), this
			},
			update: function(e) {
				return this.content(e)
			},
			content: function(e) {
				return "undefined" == typeof e ? this.Content : (this._update(e), this)
			},
			reposition: function() {
				function n() {
					var n = e(t).scrollLeft();
					0 > k - n && (o = k - n, k = n), k + l - n > r && (o = k - (r + n - l), k = r + n - l)
				}

				function i(n, i) {
					a.offset.top - e(t).scrollTop() - d - S - 12 < 0 && i.indexOf("top") > -1 && (F = n), a.offset.top + a.dimension.height + d + 12 + S > e(t).scrollTop() + e(t).height() && i.indexOf("bottom") > -1 && (F = n, M = a.offset.top - d - S - 12)
				}
				var s = this;
				if (0 !== e("body").find(s.$tooltip).length) {
					s.$tooltip.css("width", ""), s.elProxyPosition = s._repositionInfo(s.$elProxy);
					var o = null,
						r = e(t).width(),
						a = s.elProxyPosition,
						l = s.$tooltip.outerWidth(!1),
						d = (s.$tooltip.innerWidth() + 1, s.$tooltip.outerHeight(!1));
					if (s.$elProxy.is("area")) {
						var c = s.$elProxy.attr("shape"),
							u = s.$elProxy.parent().attr("name"),
							D = e('img[usemap="#' + u + '"]'),
							h = D.offset().left,
							p = D.offset().top,
							f = void 0 !== s.$elProxy.attr("coords") ? s.$elProxy.attr("coords").split(",") : void 0;
						if ("circle" == c) {
							var m = parseInt(f[0]),
								B = parseInt(f[1]),
								g = parseInt(f[2]);
							a.dimension.height = 2 * g, a.dimension.width = 2 * g, a.offset.top = p + B - g, a.offset.left = h + m - g
						} else if ("rect" == c) {
							var m = parseInt(f[0]),
								B = parseInt(f[1]),
								y = parseInt(f[2]),
								v = parseInt(f[3]);
							a.dimension.height = v - B, a.dimension.width = y - m, a.offset.top = p + B, a.offset.left = h + m
						} else if ("poly" == c) {
							for (var b = 0, C = 0, w = 0, _ = 0, x = "even", E = 0; E < f.length; E++) {
								var A = parseInt(f[E]);
								"even" == x ? (A > w && (w = A, 0 === E && (b = w)), b > A && (b = A), x = "odd") : (A > _ && (_ = A, 1 == E && (C = _)), C > A && (C = A), x = "even")
							}
							a.dimension.height = _ - C, a.dimension.width = w - b, a.offset.top = p + C, a.offset.left = h + b
						} else a.dimension.height = D.outerHeight(!1), a.dimension.width = D.outerWidth(!1), a.offset.top = p, a.offset.left = h
					}
					var k = 0,
						T = 0,
						M = 0,
						S = parseInt(s.options.offsetY),
						$ = parseInt(s.options.offsetX),
						F = s.options.position;
					if ("top" == F) {
						var j = a.offset.left + l - (a.offset.left + a.dimension.width);
						k = a.offset.left + $ - j / 2, M = a.offset.top - d - S - 12, n(), i("bottom", "top")
					}
					if ("top-left" == F && (k = a.offset.left + $, M = a.offset.top - d - S - 12, n(), i("bottom-left", "top-left")), "top-right" == F && (k = a.offset.left + a.dimension.width + $ - l, M = a.offset.top - d - S - 12, n(), i("bottom-right", "top-right")), "bottom" == F) {
						var j = a.offset.left + l - (a.offset.left + a.dimension.width);
						k = a.offset.left - j / 2 + $, M = a.offset.top + a.dimension.height + S + 12, n(), i("top", "bottom")
					}
					if ("bottom-left" == F && (k = a.offset.left + $, M = a.offset.top + a.dimension.height + S + 12, n(), i("top-left", "bottom-left")), "bottom-right" == F && (k = a.offset.left + a.dimension.width + $ - l, M = a.offset.top + a.dimension.height + S + 12, n(), i("top-right", "bottom-right")), "left" == F) {
						k = a.offset.left - $ - l - 12, T = a.offset.left + $ + a.dimension.width + 12;
						var z = a.offset.top + d - (a.offset.top + a.dimension.height);
						if (M = a.offset.top - z / 2 - S, 0 > k && T + l > r) {
							var N = 2 * parseFloat(s.$tooltip.css("border-width")),
								P = l + k - N;
							s.$tooltip.css("width", P + "px"), d = s.$tooltip.outerHeight(!1), k = a.offset.left - $ - P - 12 - N, z = a.offset.top + d - (a.offset.top + a.dimension.height), M = a.offset.top - z / 2 - S
						} else 0 > k && (k = a.offset.left + $ + a.dimension.width + 12, o = "left")
					}
					if ("right" == F) {
						k = a.offset.left + $ + a.dimension.width + 12, T = a.offset.left - $ - l - 12;
						var z = a.offset.top + d - (a.offset.top + a.dimension.height);
						if (M = a.offset.top - z / 2 - S, k + l > r && 0 > T) {
							var N = 2 * parseFloat(s.$tooltip.css("border-width")),
								P = r - k - N;
							s.$tooltip.css("width", P + "px"), d = s.$tooltip.outerHeight(!1), z = a.offset.top + d - (a.offset.top + a.dimension.height), M = a.offset.top - z / 2 - S
						} else k + l > r && (k = a.offset.left - $ - l - 12, o = "right")
					}
					if (s.options.arrow) {
						var I = "tooltipster-arrow-" + F;
						if (s.options.arrowColor.length < 1) var L = s.$tooltip.css("background-color");
						else var L = s.options.arrowColor;
						if (o ? "left" == o ? (I = "tooltipster-arrow-right", o = "") : "right" == o ? (I = "tooltipster-arrow-left", o = "") : o = "left:" + Math.round(o) + "px;" : o = "", "top" == F || "top-left" == F || "top-right" == F) var O = parseFloat(s.$tooltip.css("border-bottom-width")),
							q = s.$tooltip.css("border-bottom-color");
						else if ("bottom" == F || "bottom-left" == F || "bottom-right" == F) var O = parseFloat(s.$tooltip.css("border-top-width")),
							q = s.$tooltip.css("border-top-color");
						else if ("left" == F) var O = parseFloat(s.$tooltip.css("border-right-width")),
							q = s.$tooltip.css("border-right-color");
						else if ("right" == F) var O = parseFloat(s.$tooltip.css("border-left-width")),
							q = s.$tooltip.css("border-left-color");
						else var O = parseFloat(s.$tooltip.css("border-bottom-width")),
							q = s.$tooltip.css("border-bottom-color");
						O > 1 && O++;
						var H = "";
						if (0 !== O) {
							var R = "",
								V = "border-color: " + q + ";"; - 1 !== I.indexOf("bottom") ? R = "margin-top: -" + Math.round(O) + "px;" : -1 !== I.indexOf("top") ? R = "margin-bottom: -" + Math.round(O) + "px;" : -1 !== I.indexOf("left") ? R = "margin-right: -" + Math.round(O) + "px;" : -1 !== I.indexOf("right") && (R = "margin-left: -" + Math.round(O) + "px;"), H = '<span class="tooltipster-arrow-border" style="' + R + " " + V + ';"></span>'
						}
						s.$tooltip.find(".tooltipster-arrow").remove();
						var W = '<div class="' + I + ' tooltipster-arrow" style="' + o + '">' + H + '<span style="border-color:' + L + ';"></span></div>';
						s.$tooltip.append(W)
					}
					s.$tooltip.css({
						top: Math.round(M) + "px",
						left: Math.round(k) + "px"
					})
				}
				return s
			},
			enable: function() {
				return this.enabled = !0, this
			},
			disable: function() {
				return this.hide(), this.enabled = !1, this
			},
			destroy: function() {
				var t = this;
				t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
				var n = t.$el.data("tooltipster-ns");
				if (1 === n.length) {
					var i = null;
					"previous" === t.options.restoration ? i = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (i = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), i && t.$el.attr("title", i), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
				} else n = e.grep(n, function(e) {
					return e !== t.namespace
				}), t.$el.data("tooltipster-ns", n);
				return t
			},
			elementIcon: function() {
				return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
			},
			elementTooltip: function() {
				return this.$tooltip ? this.$tooltip[0] : void 0
			},
			option: function(e, t) {
				return "undefined" == typeof t ? this.options[e] : (this.options[e] = t, this)
			},
			status: function() {
				return this.Status
			}
		}, e.fn[a] = function() {
			var t = arguments;
			if (0 === this.length) {
				if ("string" == typeof t[0]) {
					var n = !0;
					switch (t[0]) {
						case "setDefaults":
							e.extend(l, t[1]);
							break;
						default:
							n = !1
					}
					return n ? !0 : this
				}
				return this
			}
			if ("string" == typeof t[0]) {
				var s = "#*$~&";
				return this.each(function() {
					var n = e(this).data("tooltipster-ns"),
						i = n ? e(this).data(n[0]) : null;
					if (!i) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
					if ("function" != typeof i[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
					var o = i[t[0]](t[1], t[2]);
					return o !== i ? (s = o, !1) : void 0
				}), "#*$~&" !== s ? s : this
			}
			var o = [],
				r = t[0] && "undefined" != typeof t[0].multiple,
				a = r && t[0].multiple || !r && l.multiple,
				d = t[0] && "undefined" != typeof t[0].debug,
				c = d && t[0].debug || !d && l.debug;
			return this.each(function() {
				var n = !1,
					s = e(this).data("tooltipster-ns"),
					r = null;
				s ? a ? n = !0 : c && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (r = new i(this, t[0]), s || (s = []), s.push(r.namespace), e(this).data("tooltipster-ns", s), e(this).data(r.namespace, r)), o.push(r)
			}), a ? o : this
		};
		var d = !!("ontouchstart" in t),
			c = !1;
		e("body").one("mousemove", function() {
			c = !0
		})
	}(jQuery, window, document),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.accordion = function(n) {
			return this.each(function() {
				e.data(this, "accordion", {}), e.data(this, "accordion", t(this, n))
			})
		}, e.Accordion = t, e.Accordion.NAME = "accordion", e.Accordion.VERSION = "1.0", e.Accordion.opts = {
			scroll: !1,
			collapse: !0,
			toggle: !0,
			titleClass: ".accordion-title",
			panelClass: ".accordion-panel"
		}, t.fn = e.Accordion.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build(), this.opts.collapse ? this.closeAll() : this.openAll(), this.loadFromHash()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Accordion.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Accordion.NAME || l == e.Accordion.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			getTitles: function() {
				this.titles = this.$element.find(this.opts.titleClass), this.titles.append(e("<span />").addClass("accordion-toggle")), this.titles.each(function() {
					var t = e(this);
					t.attr("rel", t.attr("href"))
				})
			},
			getPanels: function() {
				this.panels = this.$element.find(this.opts.panelClass)
			},
			build: function() {
				this.getTitles(), this.getPanels(), this.titles.on("click", e.proxy(this.toggle, this))
			},
			loadFromHash: function() {
				"" !== top.location.hash && this.opts.scroll && 0 !== this.$element.find("[rel=" + top.location.hash + "]").size() && (this.open(top.location.hash), this.scrollTo(top.location.hash))
			},
			toggle: function(t) {
				t.preventDefault(), t.stopPropagation();
				var n = e(t.target).attr("rel");
				if (this.opts.toggle) {
					var i = e(t.target),
						s = i.closest(this.opts.titleClass),
						o = s.hasClass("accordion-title-opened");
					this.closeAll(), o || this.open(n)
				} else e("[rel=" + n + "]").hasClass("accordion-title-opened") ? this.close(n) : this.open(n)
			},
			open: function(t) {
				this.$title = e("[rel=" + t + "]"), this.$panel = e(t), top.location.hash = t, this.setStatus("open"), this.$panel.show(), this.setCallback("opened", this.$title, this.$panel)
			},
			close: function(t) {
				this.$title = e("[rel=" + t + "]"), this.$panel = e(t), this.setStatus("close"), this.$panel.hide(), this.setCallback("closed", this.$title, this.$panel)
			},
			setStatus: function(t) {
				var n = {
					toggle: this.$title.find("span.accordion-toggle"),
					title: this.$title,
					panel: this.$panel
				};
				e.each(n, function(e, n) {
					"close" == t ? n.removeClass("accordion-" + e + "-opened").addClass("accordion-" + e + "-closed") : n.removeClass("accordion-" + e + "-closed").addClass("accordion-" + e + "-opened")
				})
			},
			openAll: function() {
				this.titles.each(e.proxy(function(t, n) {
					this.open(e(n).attr("rel"))
				}, this))
			},
			closeAll: function() {
				this.titles.each(e.proxy(function(t, n) {
					this.close(e(n).attr("rel"))
				}, this))
			},
			scrollTo: function(t) {
				e("html, body").animate({
					scrollTop: e(t).offset().top - 50
				}, 500)
			}
		}, e(window).on("load.tools.accordion", function() {
			e('[data-tools="accordion"]').accordion()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.autocomplete = function(n) {
			return this.each(function() {
				e.data(this, "autocomplete", {}), e.data(this, "autocomplete", t(this, n))
			})
		}, e.Autocomplete = t, e.Autocomplete.NAME = "autocomplete", e.Autocomplete.VERSION = "1.0", e.Autocomplete.opts = {
			url: !1,
			min: 2,
			set: "value"
		}, t.fn = e.Autocomplete.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Autocomplete.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Autocomplete.NAME || l == e.Autocomplete.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				this.result = e('<ul class="autocomplete">').hide(), this.pos = this.$element.offset(), this.elementHeight = this.$element.innerHeight(), e("body").append(this.result), this.placement = e(document).height() - (this.pos.top + this.elementHeight) < this.result.height() ? "top" : "bottom", e(document).on("click", e.proxy(this.hide, this)), this.$element.on("keyup", e.proxy(function(e) {
					var t = this.$element.val();
					t.length >= this.opts.min ? (this.$element.addClass("autocomplete-in"), this.result.addClass("autocomplete-open"), this.listen(e)) : this.hide()
				}, this))
			},
			lookup: function() {
				e.ajax({
					url: this.opts.url,
					type: "post",
					data: this.$element.attr("name") + "=" + this.$element.val(),
					success: e.proxy(function(t) {
						var n = e.parseJSON(t);
						this.result.html(""), e.each(n, e.proxy(function(t, n) {
							var i = e("<li>"),
								s = e('<a href="#" rel="' + n.id + '">').html(n.value).on("click", e.proxy(this.set, this));
							i.append(s), this.result.append(i)
						}, this));
						var i = "top" === this.placement ? this.pos.top - this.result.height() - this.elementHeight : this.pos.top + this.elementHeight;
						this.result.css({
							top: i + "px",
							left: this.pos.left + "px"
						}), this.result.show(), this.active = !1
					}, this)
				})
			},
			listen: function(e) {
				if (this.$element.hasClass("autocomplete-in")) switch (e.stopPropagation(), e.preventDefault(), e.keyCode) {
					case 40:
						this.select("next");
						break;
					case 38:
						this.select("prev");
						break;
					case 13:
						this.set();
						break;
					case 27:
						this.hide();
						break;
					default:
						this.lookup()
				}
			},
			select: function(e) {
				var t = this.result.find("a"),
					n = t.size(),
					i = this.result.find("a.active");
				i.removeClass("active");
				var s = "next" === e ? i.parent().next().children("a") : i.parent().prev().children("a");
				0 === s.size() && (s = t.eq("next" === e ? 0 : n - 1)), s.addClass("active"), this.active = s
			},
			set: function(t) {
				var n = e(this.active);
				t && (t.preventDefault(), n = e(t.target));
				var i = n.attr("rel"),
					s = n.html();
				this.$element.val("value" == this.opts.set ? s : i), this.setCallback("set", i, s), this.hide()
			},
			hide: function(t) {
				t && (e(t.target).hasClass("autocomplete-in") || e(t.target).hasClass("autocomplete-open") || e(t.target).parents().hasClass("autocomplete-open")) || (this.$element.removeClass("autocomplete-in"), this.result.removeClass("autocomplete-open"), this.result.hide())
			}
		}, e(window).on("load.tools.autocomplete", function() {
			e('[data-tools="autocomplete"]').autocomplete()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.buttons = function(n) {
			return this.each(function() {
				e.data(this, "buttons", {}), e.data(this, "buttons", t(this, n))
			})
		}, e.Buttons = t, e.Buttons.NAME = "buttons", e.Buttons.VERSION = "1.0", e.Buttons.opts = {
			className: "btn",
			activeClassName: "btn-active",
			target: !1,
			type: "switch"
		}, t.fn = e.Buttons.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.buttons = this.getButtons(), this.value = this.getValue(), this.buttons.each(e.proxy(function(t, n) {
					var i = e(n);
					this.setDefault(i), i.click(e.proxy(function(e) {
						e.preventDefault(), "segmented" === this.opts.type ? this.setSegmented(i) : "toggle" === this.opts.type ? this.setToggle(i) : this.setBasic(i)
					}, this))
				}, this))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Buttons.opts), this.$element.data(), t)
			},
			getButtons: function() {
				return "toggle" === this.opts.type ? this.$element : this.$element.find("." + this.opts.className)
			},
			getValue: function() {
				return "segmented" === this.opts.type ? e(this.opts.target).val().split(",") : e(this.opts.target).val()
			},
			setDefault: function(t) {
				"segmented" === this.opts.type && -1 !== e.inArray(t.val(), this.value) ? this.setActive(t) : ("toggle" === this.opts.type && 1 === this.value || this.value === t.val()) && this.setActive(t)
			},
			setBasic: function(t) {
				this.setInActive(this.buttons), this.setActive(t), e(this.opts.target).val(t.val())
			},
			setSegmented: function(t) {
				var n = e(this.opts.target);
				this.value = n.val().split(","), t.hasClass(this.opts.activeClassName) ? (this.setInActive(t), this.value.splice(this.value.indexOf(t.val()), 1)) : (this.setActive(t), this.value.push(t.val())), n.val(this.value.join(",").replace(/^,/, ""))
			},
			setToggle: function(t) {
				t.hasClass(this.opts.activeClassName) ? (this.setInActive(t), e(this.opts.target).val(0)) : (this.setActive(t), e(this.opts.target).val(1))
			},
			setActive: function(e) {
				e.addClass(this.opts.activeClassName)
			},
			setInActive: function(e) {
				e.removeClass(this.opts.activeClassName)
			}
		}, e(window).on("load.tools.buttons", function() {
			e('[data-tools="buttons"]').buttons()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.checkAll = function(n) {
			return this.each(function() {
				e.data(this, "checkAll", {}), e.data(this, "checkAll", t(this, n))
			})
		}, e.CheckAll = t, e.CheckAll.opts = {
			classname: !1,
			parent: !1,
			highlight: "highlight",
			target: !1
		}, t.fn = e.CheckAll.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.$elements = e("." + this.opts.classname), this.$target = e(this.opts.target), this.$element.on("click", e.proxy(this.load, this)), this.setter = this.opts.target ? this.$target.val().split(",") : [], this.$elements.each(e.proxy(this.setOnStart, this))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.CheckAll.opts), this.$element.data(), t)
			},
			load: function() {
				this.$element.prop("checked") ? (this.$elements.prop("checked", !0), (this.opts.parent || this.opts.target) && this.$elements.each(e.proxy(function(t, n) {
					var i = e(n);
					this.setHighlight(i), this.setValue(i.val())
				}, this))) : (this.$elements.prop("checked", !1), this.opts.parent && this.$elements.each(e.proxy(this.removeHighlight, this)), this.opts.target && this.$target.val(""))
			},
			setOnStart: function(t, n) {
				var i = e(n);
				(this.$element.prop("checked") || this.setter && -1 !== e.inArray(i.val(), this.setter)) && (i.prop("checked", !0), this.setHighlight(i)), i.on("click", e.proxy(function() {
					var e = this.$elements.filter(":checked").size();
					i.prop("checked") ? (this.setValue(i.val()), this.setHighlight(i)) : (this.removeValue(i.val()), this.removeHighlight(i));
					var t = e !== this.$elements.size() ? !1 : !0;
					this.$element.prop("checked", t)
				}, this))
			},
			setHighlight: function(e) {
				this.opts.parent && e.closest(this.opts.parent).addClass(this.opts.highlight)
			},
			removeHighlight: function(t, n) {
				this.opts.parent && e(n).closest(this.opts.parent).removeClass(this.opts.highlight)
			},
			setValue: function(e) {
				if (this.opts.target) {
					var t = this.$target.val(),
						n = t.split(",");
					n.push(e), "" === t && (n = [e]), this.$target.val(n.join(","))
				}
			},
			removeValue: function(e) {
				if (this.opts.target) {
					var t = this.$target.val().split(","),
						n = t.indexOf(e);
					t.splice(n, 1), this.$target.val(t.join(","))
				}
			}
		}, e(window).on("load.tools.buttons", function() {
			e('[data-tools="check-all"]').checkAll()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.dropdown = function(n) {
			return this.each(function() {
				e.data(this, "dropdown", {}), e.data(this, "dropdown", t(this, n))
			})
		}, e.Dropdown = t, e.Dropdown.NAME = "dropdown", e.Dropdown.VERSION = "1.0", e.Dropdown.opts = {
			target: !1,
			targetClose: !1,
			height: !1,
			width: !1
		}, t.fn = e.Dropdown.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Dropdown.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Dropdown.NAME || l == e.Dropdown.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				this.$dropdown = e(this.opts.target), this.$dropdown.hide(), this.$caret = e('<b class="caret"></b>'), this.$element.append(this.$caret), this.setCaretUp(), this.preventBodyScroll(), this.$element.click(e.proxy(this.toggle, this))
			},
			setCaretUp: function() {
				var t = this.$element.offset().top + this.$element.innerHeight() + this.$dropdown.innerHeight();
				e(document).height() > t || this.$caret.addClass("caret-up")
			},
			toggle: function(e) {
				e.preventDefault(), this.$element.hasClass("dropdown-in") ? this.hide() : this.show()
			},
			getPlacement: function(t) {
				return e(document).height() < t ? "top" : "bottom"
			},
			getPosition: function() {
				return 0 !== this.$element.closest(".navigation-fixed").size() ? "fixed" : "absolute"
			},
			setPosition: function() {
				var t = this.$element.position(),
					n = this.$element.innerHeight(),
					i = this.$element.innerWidth(),
					s = this.$dropdown.innerHeight(),
					o = this.$dropdown.innerWidth(),
					r = this.getPosition(),
					a = this.getPlacement(t.top + s + n),
					l = 0;
				e(window).width() < t.left + o && (l = o - i);
				var d, c = t.left - l;
				"bottom" == a ? (this.$caret.removeClass("caret-up"), d = "fixed" == r ? n : t.top + n) : (this.$caret.addClass("caret-up"), d = "fixed" == r ? s : t.top - s), this.$dropdown.css({
					position: r,
					top: d + "px",
					left: c + "px"
				})
			},
			show: function() {
				e(".dropdown-in").removeClass("dropdown-in"), e(".dropdown").removeClass("dropdown-open").hide(), this.opts.height && this.$dropdown.css("min-height", this.opts.height + "px"), this.opts.width && this.$dropdown.width(this.opts.width), this.setPosition(), this.$dropdown.addClass("dropdown-open").show(), this.$element.addClass("dropdown-in"), e(document).on("scroll.tools.dropdown", e.proxy(this.setPosition, this)), e(window).on("resize.tools.dropdown", e.proxy(this.setPosition, this)), e(document).on("click.tools.dropdown touchstart.tools.dropdown", e.proxy(this.hide, this)), this.opts.targetClose && e(this.opts.targetClose).on("click.tools.dropdown", e.proxy(function(e) {
					e.preventDefault(), this.hide(!1)
				}, this)), e(document).on("keydown.tools.dropdown", e.proxy(function(e) {
					27 === e.which && this.hide()
				}, this)), this.setCallback("opened", this.$dropdown, this.$element)
			},
			preventBodyScroll: function() {
				this.$dropdown.on("mouseover", function() {
					e("html").css("overflow", "hidden")
				}), this.$dropdown.on("mouseout", function() {
					e("html").css("overflow", "")
				})
			},
			hide: function(t) {
				if (t) {
					t = t.originalEvent || t;
					var n = e(t.target);
					if (n.hasClass("caret") || n.hasClass("dropdown-in") || 0 !== n.closest(".dropdown-open").size()) return
				}
				this.$dropdown.removeClass("dropdown-open").hide(), this.$element.removeClass("dropdown-in"), e(document).off(".tools.dropdown"), e(window).off(".tools.dropdown"), this.setCallback("closed", this.$dropdown, this.$element)
			}
		}, e(window).on("load.tools.dropdown", function() {
			e('[data-tools="dropdown"]').dropdown()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.filterbox = function(n) {
			return this.each(function() {
				e.data(this, "filterbox", {}), e.data(this, "filterbox", t(this, n))
			})
		}, e.Filterbox = t, e.Filterbox.NAME = "filterbox", e.Filterbox.VERSION = "1.0", e.Filterbox.opts = {
			placeholder: !1
		}, t.fn = e.Filterbox.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Filterbox.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Filterbox.NAME || l == e.Filterbox.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				this.$sourceBox = e('<div class="filterbox" />'), this.$sourceSelect = e('<span class="filterbox-toggle" />'), this.$sourceLayer = e('<ul class="filterbox-list hide" />'), this.$source = e('<input type="text" id="' + this.$element.attr("id") + '-input" class="' + this.$element.attr("class") + '" />'), this.$sourceBox.append(this.$source), this.$sourceBox.append(this.$sourceSelect), this.$sourceBox.append(this.$sourceLayer), this.setPlaceholder(), this.$element.hide().after(this.$sourceBox), this.$element.find("option").each(e.proxy(this.buildListItemsFromOptions, this)), this.$source.on("keyup", e.proxy(this.clearSelected, this)), this.$sourceSelect.on("click", e.proxy(this.load, this)), this.preventBodyScroll()
			},
			load: function(t) {
				if (t.preventDefault(), this.$sourceLayer.hasClass("open")) return void this.close();
				var n = this.$element.val();
				this.$sourceLayer.addClass("open").show();
				var i = this.$sourceLayer.find("li").removeClass("active");
				this.setSelectedItem(i, n), e(document).on("click.tools.filterbox", e.proxy(this.close, this)), e(document).on("keydown.tools.filterbox", e.proxy(function(e) {
					var t, n, s = e.which;
					if (38 === s) {
						if (e.preventDefault(), i.hasClass("active")) {
							n = i.filter("li.active"), n.removeClass("active");
							var o = n.prev();
							t = 0 !== o.size() ? t = o : i.last()
						} else t = i.last();
						t.addClass("active"), this.setScrollTop(t)
					} else if (40 === s) {
						if (e.preventDefault(), i.hasClass("active")) {
							n = i.filter("li.active"), n.removeClass("active");
							var r = n.next();
							t = 0 !== r.size() ? r : i.first()
						} else t = i.first();
						t.addClass("active"), this.setScrollTop(t)
					} else if (13 === s) {
						if (!i.hasClass("active")) return;
						n = i.filter("li.active"), this.onItemClick(e, n)
					} else 27 === s && this.close()
				}, this))
			},
			clearSelected: function() {
				0 === this.$source.val().length && this.$element.val(0)
			},
			setSelectedItem: function(t, n) {
				var i = t.filter("[rel=" + n + "]");
				if (0 === i.size()) {
					i = !1;
					var s = this.$source.val();
					if (e.each(t, function(t, n) {
							var o = e(n);
							o.text() == s && (i = o)
						}), i === !1) return
				}
				i.addClass("active"), this.setScrollTop(i)
			},
			setScrollTop: function(e) {
				this.$sourceLayer.scrollTop(this.$sourceLayer.scrollTop() + e.position().top - 40)
			},
			buildListItemsFromOptions: function(t, n) {
				var i = e(n),
					s = i.val();
				if (0 !== s) {
					var o = e("<li />");
					o.attr("rel", s).text(i.html()), o.on("click", e.proxy(this.onItemClick, this)), this.$sourceLayer.append(o)
				}
			},
			onItemClick: function(t, n) {
				t.preventDefault();
				var i = e(n || t.target),
					s = i.attr("rel"),
					o = i.text();
				this.$source.val(o), this.$element.val(s), this.close(), this.setCallback("select", {
					id: s,
					value: o
				})
			},
			preventBodyScroll: function() {
				this.$sourceLayer.on("mouseover", function() {
					e("html").css("overflow", "hidden")
				}), this.$sourceLayer.on("mouseout", function() {
					e("html").css("overflow", "")
				})
			},
			setPlaceholder: function() {
				this.opts.placeholder && this.$source.attr("placeholder", this.opts.placeholder)
			},
			close: function(t) {
				(!t || !e(t.target).hasClass("filterbox-toggle") && 1 != e(t.target).closest("div.filterbox").size()) && (this.$sourceLayer.removeClass("open").hide(), e(document).off(".tools.filterbox"))
			}
		}, e(window).on("load.tools.filterbox", function() {
			e('[data-tools="filterbox"]').filterbox()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.infinityScroll = function(n) {
			return this.each(function() {
				e.data(this, "infinity-scroll", {}), e.data(this, "infinity-scroll", t(this, n))
			})
		}, e.InfinityScroll = t, e.InfinityScroll.NAME = "infinity-scroll", e.InfinityScroll.VERSION = "1.0", e.InfinityScroll.opts = {
			url: !1,
			offset: 0,
			limit: 20,
			tolerance: 50,
			pagination: !1
		}, t.fn = e.InfinityScroll.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.hidePagination(), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.InfinityScroll.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.InfinityScroll.NAME || l == e.InfinityScroll.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				e(window).on("DOMContentLoaded.tools.infinite-scroll load.tools.infinite-scroll resize.tools.infinite-scroll scroll.tools.infinite-scroll", e.proxy(function() {
					var e = this.$element.children().last();
					this.isElementInViewport(e[0]) && this.getData()
				}, this))
			},
			getData: function() {
				e.ajax({
					url: this.opts.url,
					type: "post",
					data: "limit=" + this.opts.limit + "&offset=" + this.opts.offset,
					success: e.proxy(function(t) {
						return "" === t ? void e(window).off(".tools.infinite-scroll") : (this.opts.offset = this.opts.offset + this.opts.limit, this.$element.append(t), void this.setCallback("loaded", t))
					}, this)
				})
			},
			hidePagination: function() {
				this.opts.pagination && e(this.opts.pagination).hide()
			},
			isElementInViewport: function(t) {
				var n = t.getBoundingClientRect();
				return n.top >= 0 && n.left >= 0 && n.bottom <= e(window).height() + this.opts.tolerance && n.right <= e(window).width()
			}
		}, e(window).on("load.tools.infinity-scroll", function() {
			e('[data-tools="infinity-scroll"]').infinityScroll()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.livesearch = function(n) {
			return this.each(function() {
				e.data(this, "livesearch", {}), e.data(this, "livesearch", t(this, n))
			})
		}, e.Livesearch = t, e.Livesearch.NAME = "livesearch", e.Livesearch.VERSION = "1.0", e.Livesearch.opts = {
			url: !1,
			target: !1,
			min: 2,
			params: !1,
			appendForms: !1
		}, t.fn = e.Livesearch.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Livesearch.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Livesearch.NAME || l == e.Livesearch.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				this.$box = e('<span class="livesearch-box" />'), this.$element.after(this.$box), this.$box.append(this.$element), this.$element.off("keyup.tools.livesearch"), this.$element.on("keyup.tools.livesearch", e.proxy(this.load, this)), this.$icon = e('<span class="livesearch-icon" />'), this.$box.append(this.$icon), this.$close = e('<span class="close" />').hide(), this.$box.append(this.$close), this.$close.off("click.tools.livesearch"), this.$close.on("click.tools.livesearch", e.proxy(function() {
					this.search(), this.$element.val("").focus(), this.$close.hide()
				}, this))
			},
			toggleClose: function(e) {
				0 === e ? this.$close.hide() : this.$close.show()
			},
			load: function() {
				var t = this.$element.val(),
					n = "";
				if (t.length > this.opts.min) {
					var i = "q";
					"undefined" != typeof this.$element.attr("name") && (i = this.$element.attr("name")), n += "&" + i + "=" + t, n = this.appendForms(n);
					var s = "";
					if (this.opts.params) {
						this.opts.params = e.trim(this.opts.params.replace("{", "").replace("}", ""));
						var o = this.opts.params.split(","),
							r = {};
						e.each(o, function(t, n) {
							var i = n.split(":");
							r[e.trim(i[0])] = e.trim(i[1])
						}), s = [], e.each(r, e.proxy(function(e, t) {
							s.push(e + "=" + t)
						}, this)), s = s.join("&"), n += "&" + s
					}
				}
				this.toggleClose(t.length), this.search(n)
			},
			appendForms: function(t) {
				return this.opts.appendForms ? (e.each(this.opts.appendForms, function(n, i) {
					t += "&" + e(i).serialize()
				}), t) : t
			},
			search: function(t) {
				e.ajax({
					url: this.opts.url,
					type: "post",
					data: t,
					success: e.proxy(function(t) {
						e(this.opts.target).html(t), this.setCallback("result", t)
					}, this)
				})
			}
		}, e(window).on("load.tools.livesearch", function() {
			e('[data-tools="livesearch"]').livesearch()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.message = function(n) {
			var i = [],
				s = Array.prototype.slice.call(arguments, 1);
			return this.each("string" == typeof n ? function() {
				var t = e.data(this, "message");
				if ("undefined" == typeof t || !e.isFunction(t[n])) return e.error('No such method "' + n + '" for Message');
				var o = t[n].apply(t, s);
				void 0 !== o && o !== t && i.push(o)
			} : function() {
				e.data(this, "message", {}), e.data(this, "message", t(this, n))
			}), 0 === i.length ? this : 1 === i.length ? i[0] : i
		}, e.Message = t, e.Message.NAME = "message", e.Message.VERSION = "1.0", e.Message.opts = {
			target: !1,
			delay: 10
		}, t.fn = e.Message.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.build()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Message.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$message[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Message.NAME || l == e.Message.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				this.opts.target ? (this.$message = e(this.opts.target), this.$message.data("message", ""), this.$message.data("message", this), this.$element.on("click", e.proxy(this.show, this))) : (this.$message = this.$element, this.show())
			},
			show: function() {
				return this.$message.hasClass("open") ? void this.hide() : (e(".tools-message").hide().removeClass("open"), this.$message.addClass("open").fadeIn("fast").on("click.tools.message", e.proxy(this.hide, this)), e(document).on("keyup.tools.message", e.proxy(this.hideHandler, this)), this.opts.delay && setTimeout(e.proxy(this.hide, this), 1e3 * this.opts.delay), void this.setCallback("opened"))
			},
			hideHandler: function(e) {
				27 == e.which && this.hide()
			},
			hide: function() {
				this.$message.hasClass("open") && (this.$message.off("click.tools.message"), e(document).off("keyup.tools.message"), this.$message.fadeOut("fast", e.proxy(function() {
					this.$message.removeClass("open"), this.setCallback("closed")
				}, this)))
			}
		}, t.prototype.init.prototype = t.prototype, e(function() {
			e('[data-tools="message"]').message()
		})
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.modal = function(n) {
			var i = [],
				s = Array.prototype.slice.call(arguments, 1);
			return this.each("string" == typeof n ? function() {
				var t = e.data(this, "modal");
				if ("undefined" == typeof t || !e.isFunction(t[n])) return e.error('No such method "' + n + '" for Modal');
				var o = t[n].apply(t, s);
				void 0 !== o && o !== t && i.push(o)
			} : function() {
				e.data(this, "modal", {}), e.data(this, "modal", t(this, n))
			}), 0 === i.length ? this : 1 === i.length ? i[0] : i
		}, e.Modal = t, e.Modal.NAME = "modal", e.Modal.VERSION = "1.0", e.Modal.opts = {
			title: "",
			width: 500,
			blur: !1
		}, t.fn = e.Modal.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.$element.on("click.tools.modal", e.proxy(this.load, this))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Modal.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Modal.NAME || l == e.Modal.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			load: function() {
				this.build(), this.enableEvents(), this.setTitle(), this.setDraggable(), this.setContent()
			},
			build: function() {
				this.buildOverlay(), this.$modalBox = e('<div class="modal-box" />').hide(), this.$modal = e('<div class="modal" />'), this.$modalHeader = e("<header />"), this.$modalClose = e('<span class="modal-close" />').html("&times;"), this.$modalBody = e("<section />"), this.$modalFooter = e("<footer />"), this.$modal.append(this.$modalHeader), this.$modal.append(this.$modalClose), this.$modal.append(this.$modalBody), this.$modal.append(this.$modalFooter), this.$modalBox.append(this.$modal), this.$modalBox.appendTo(document.body)
			},
			buildOverlay: function() {
				this.$modalOverlay = e('<div id="modal-overlay">').hide(), e("body").prepend(this.$modalOverlay), this.opts.blur && (this.blurredElements = e("body").children("div, section, header, article, pre, aside, table").not(".modal, .modal-box, #modal-overlay"), this.blurredElements.addClass("modal-blur"))
			},
			show: function() {
				this.setCallback("loading", this.$modal), this.bodyOveflow = e(document.body).css("overflow"), e(document.body).css("overflow", "hidden"), this.isMobile() ? this.showOnMobile() : this.showOnDesktop(), this.$modalOverlay.show(), this.$modalBox.show(), this.setButtonsWidth(), this.isMobile() || (setTimeout(e.proxy(this.showOnDesktop, this), 0), e(window).on("resize.tools.modal", e.proxy(this.resize, this))), this.setCallback("opened", this.$modal), e(document).off("focusin.modal")
			},
			showOnDesktop: function() {
				var t = this.$modal.outerHeight(),
					n = e(window).height(),
					i = e(window).width();
				return this.opts.width > i ? void this.$modal.css({
					width: "96%",
					marginTop: n / 2 - t / 2 + "px"
				}) : void this.$modal.css(t > n ? {
					width: this.opts.width + "px",
					marginTop: "20px"
				} : {
					width: this.opts.width + "px",
					marginTop: n / 2 - t / 2 + "px"
				})
			},
			showOnMobile: function() {
				this.$modal.css({
					width: "96%",
					marginTop: "2%"
				})
			},
			resize: function() {
				this.isMobile() ? this.showOnMobile() : this.showOnDesktop()
			},
			setTitle: function() {
				this.$modalHeader.html(this.opts.title)
			},
			setContent: function() {
				"object" == typeof this.opts.content || 0 === this.opts.content.search("#") ? (this.type = "html", this.$modalBody.html(e(this.opts.content).html()), this.show()) : e.ajax({
					url: this.opts.content,
					cache: !1,
					success: e.proxy(function(e) {
						this.$modalBody.html(e), this.show()
					}, this)
				})
			},
			setDraggable: function() {
				"undefined" != typeof e.fn.draggable && (this.$modal.draggable({
					handle: this.$modalHeader
				}), this.$modalHeader.css("cursor", "move"))
			},
			createCancelButton: function(t) {
				"undefined" == typeof t && (t = "Cancel");
				var n = e("<button>").addClass("btn modal-close-btn").html(t);
				n.on("click", e.proxy(this.close, this)), this.$modalFooter.append(n)
			},
			createDeleteButton: function(e) {
				return "undefined" == typeof e && (e = "Delete"), this.createButton(e, "red")
			},
			createActionButton: function(e) {
				return "undefined" == typeof e && (e = "Ok"), this.createButton(e, "blue")
			},
			createButton: function(t, n) {
				var i = e("<button>").addClass("btn").addClass("btn-" + n).html(t);
				return this.$modalFooter.append(i), i
			},
			setButtonsWidth: function() {
				var e = this.$modalFooter.find("button"),
					t = e.size();
				0 !== t && e.css("width", 100 / t + "%")
			},
			enableEvents: function() {
				this.$modalClose.on("click.tools.modal", e.proxy(this.close, this)), e(document).on("keyup.tools.modal", e.proxy(this.closeHandler, this)), this.$modalBox.on("click.tools.modal", e.proxy(this.close, this))
			},
			disableEvents: function() {
				this.$modalClose.off("click.tools.modal"), e(document).off("keyup.tools.modal"), this.$modalBox.off("click.tools.modal"), e(window).off("resize.tools.modal")
			},
			closeHandler: function(e) {
				27 == e.which && this.close()
			},
			close: function(t) {
				if (t) {
					if (!e(t.target).hasClass("modal-close-btn") && t.target != this.$modalClose[0] && t.target != this.$modalBox[0]) return;
					t.preventDefault()
				}
				this.$modalBox && (this.disableEvents(), this.$modalOverlay.remove(), this.$modalBox.fadeOut("fast", e.proxy(function() {
					this.$modalBox.remove(), e(document.body).css("overflow", this.bodyOveflow), this.opts.blur && "undefined" != typeof this.blurredElements && this.blurredElements.removeClass("modal-blur"), this.setCallback("closed")
				}, this)))
			},
			isMobile: function() {
				var e = window.matchMedia("(max-width: 767px)");
				return e.matches ? !0 : !1
			}
		}, e(window).on("load.tools.modal", function() {
			e('[data-tools="modal"]').modal()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.navigationFixed = function(n) {
			return this.each(function() {
				e.data(this, "navigationFixed", {}), e.data(this, "navigationFixed", t(this, n))
			})
		}, e.NavigationFixed = t, e.NavigationFixed.NAME = "navigation-fixed", e.NavigationFixed.VERSION = "1.0", e.NavigationFixed.opts = {}, t.fn = e.NavigationFixed.prototype = {
			init: function(t, n) {
				var i = window.matchMedia("(max-width: 767px)");
				i.matches || (this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.navBoxOffsetTop = this.$element.offset().top, this.build(), e(window).scroll(e.proxy(this.build, this)))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.NavigationFixed.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.NavigationFixed.NAME || l == e.NavigationFixed.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				e(window).scrollTop() > this.navBoxOffsetTop ? (this.$element.addClass("navigation-fixed"), this.setCallback("fixed")) : (this.$element.removeClass("navigation-fixed"), this.setCallback("unfixed"))
			}
		}, e(window).on("load.tools.navigation-fixed", function() {
			e('[data-tools="navigation-fixed"]').navigationFixed()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.navigationToggle = function(n) {
			return this.each(function() {
				e.data(this, "navigationToggle", {}), e.data(this, "navigationToggle", t(this, n))
			})
		}, e.NavigationToggle = t, e.NavigationToggle.NAME = "navigation-toggle", e.NavigationToggle.VERSION = "1.0", e.NavigationToggle.opts = {
			target: !1
		}, t.fn = e.NavigationToggle.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.$target = e(this.opts.target), this.$toggle = this.$element.find("span"), this.$toggle.on("click", e.proxy(this.onClick, this)), this.build(), e(window).resize(e.proxy(this.build, this))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.NavigationToggle.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.NavigationToggle.NAME || l == e.NavigationToggle.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			build: function() {
				var e = window.matchMedia("(max-width: 767px)");
				e.matches ? this.$target.hasClass("navigation-target-show") || (this.$element.addClass("navigation-toggle-show").show(), this.$target.addClass("navigation-target-show").hide()) : (this.$element.removeClass("navigation-toggle-show").hide(), this.$target.removeClass("navigation-target-show").show())
			},
			onClick: function(e) {
				e.stopPropagation(), e.preventDefault(), this.isTargetHide() ? (this.$element.addClass("navigation-toggle-show"), this.$target.show(), this.setCallback("show", this.$target)) : (this.$element.removeClass("navigation-toggle-show"), this.$target.hide(), this.setCallback("hide", this.$target))
			},
			isTargetHide: function() {
				return "none" == this.$target[0].style.display ? !0 : !1
			}
		}, e(window).on("load.tools.navigation-toggle", function() {
			e('[data-tools="navigation-toggle"]').navigationToggle()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		e.progress = {
			show: function() {
				if (0 !== e("#tools-progress").length) e("#tools-progress").fadeIn();
				else {
					var t = e('<div id="tools-progress"><span></span></div>').hide();
					e(document.body).append(t), e("#tools-progress").fadeIn()
				}
			},
			update: function(t) {
				this.show(), e("#tools-progress").find("span").css("width", t + "%")
			},
			hide: function() {
				e("#tools-progress").fadeOut(1500)
			}
		}
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.tabs = function(n) {
			var i = [],
				s = Array.prototype.slice.call(arguments, 1);
			return this.each("string" == typeof n ? function() {
				var t = e.data(this, "tabs");
				if ("undefined" == typeof t || !e.isFunction(t[n])) return e.error('No such method "' + n + '" for Tabs');
				var o = t[n].apply(t, s);
				void 0 !== o && o !== t && i.push(o)
			} : function() {
				e.data(this, "tabs", {}), e.data(this, "tabs", t(this, n))
			}), 0 === i.length ? this : 1 === i.length ? i[0] : i
		}, e.Tabs = t, e.Tabs.NAME = "tabs", e.Tabs.VERSION = "1.0", e.Tabs.opts = {
			equals: !1,
			active: !1
		}, t.fn = e.Tabs.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.links = this.$element.find("a"), this.tabs = [], this.links.each(e.proxy(this.load, this)), this.setEquals(), this.setCallback("init")
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Tabs.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Tabs.NAME || l == e.Tabs.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			load: function(t, n) {
				var i = e(n),
					s = i.attr("href");
				i.attr("rel", s), this.tabs.push(e(s)), i.parent().hasClass("active") || e(s).hide(), this.readLocationHash(s), this.opts.active !== !1 && this.opts.active === s && this.show(s), i.on("click", e.proxy(this.onClick, this))
			},
			onClick: function(t) {
				t.preventDefault();
				var n = e(t.target).attr("rel");
				top.location.hash = n, this.show(n)
			},
			readLocationHash: function(e) {
				"" !== top.location.hash && top.location.hash == e && (this.opts.active = top.location.hash)
			},
			setActive: function(t) {
				this.activeHash = t, this.activeTab = e("[rel=" + t + "]"), this.links.parent().removeClass("active"), this.activeTab.parent().addClass("active")
			},
			getActiveHash: function() {
				return this.activeHash
			},
			getActiveTab: function() {
				return this.activeTab
			},
			show: function(t) {
				this.hideAll(), e(t).show(), this.setActive(t), this.setCallback("show", e("[rel=" + t + "]"), t)
			},
			hideAll: function() {
				e.each(this.tabs, function() {
					e(this).hide()
				})
			},
			setEquals: function() {
				this.opts.equals && this.setMaxHeight(this.getMaxHeight())
			},
			setMaxHeight: function(t) {
				e.each(this.tabs, function() {
					e(this).css("min-height", t + "px")
				})
			},
			getMaxHeight: function() {
				var t = 0;
				return e.each(this.tabs, function() {
					var n = e(this).height();
					t = n > t ? n : t
				}), t
			}
		}, e(window).on("load.tools.tabs", function() {
			e('[data-tools="tabs"]').tabs()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.textfit = function(n) {
			return this.each(function() {
				e.data(this, "textfit", {}), e.data(this, "textfit", t(this, n))
			})
		}, e.Textfit = t, e.Textfit.NAME = "textfit", e.Textfit.VERSION = "1.0", e.Textfit.opts = {
			min: "10px",
			max: "100px",
			compressor: 1
		}, t.fn = e.Textfit.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.$element.css("font-size", Math.max(Math.min(this.$element.width() / (10 * this.opts.compressor), parseFloat(this.opts.max)), parseFloat(this.opts.min)))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Textfit.opts), this.$element.data(), t)
			}
		}, e(window).on("load.tools.textfit", function() {
			e('[data-tools="textfit"]').textfit()
		}), t.prototype.init.prototype = t.prototype
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.tooltip = function(n) {
			return this.each(function() {
				e.data(this, "tooltip", {}), e.data(this, "tooltip", t(this, n))
			})
		}, e.Tooltip = t, e.Tooltip.NAME = "tooltip", e.Tooltip.VERSION = "1.0", e.Tooltip.opts = {
			theme: !1
		}, t.fn = e.Tooltip.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.$element.on("mouseover", e.proxy(this.show, this)), this.$element.on("mouseout", e.proxy(this.hide, this))
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Tooltip.opts), this.$element.data(), t)
			},
			show: function() {
				e(".tooltip").hide();
				var t = this.$element.attr("title");
				this.$element.data("cached-title", t), this.$element.attr("title", ""), this.tooltip = e('<div class="tooltip" />').html(t).hide(), this.opts.theme !== !1 && this.tooltip.addClass("tooltip-theme-" + this.opts.theme), this.tooltip.css({
					top: this.$element.offset().top + this.$element.innerHeight() + "px",
					left: this.$element.offset().left + "px"
				}), e("body").append(this.tooltip), this.tooltip.show()
			},
			hide: function() {
				this.tooltip.fadeOut("fast", e.proxy(function() {
					this.tooltip.remove()
				}, this)), this.$element.attr("title", this.$element.data("cached-title")), this.$element.data("cached-title", "")
			}
		}, t.prototype.init.prototype = t.prototype, e(function() {
			e('[data-tools="tooltip"]').tooltip()
		})
	}(jQuery),
	function(e) {
		function t(e, n) {
			return new t.prototype.init(e, n)
		}
		e.fn.upload = function(n) {
			return this.each(function() {
				e.data(this, "upload", {}), e.data(this, "upload", t(this, n))
			})
		}, e.Upload = t, e.Upload.NAME = "upload", e.Upload.VERSION = "1.0", e.Upload.opts = {
			url: !1,
			placeholder: "Drop file here or ",
			param: "file"
		}, t.fn = e.Upload.prototype = {
			init: function(t, n) {
				this.$element = t !== !1 ? e(t) : !1, this.loadOptions(n), this.load()
			},
			loadOptions: function(t) {
				this.opts = e.extend({}, e.extend(!0, {}, e.Upload.opts), this.$element.data(), t)
			},
			setCallback: function(t, n, i) {
				var s = e._data(this.$element[0], "events");
				if (s && "undefined" != typeof s[t]) {
					for (var o = [], r = s[t].length, a = 0; r > a; a++) {
						var l = s[t][a].namespace;
						if (l == "tools." + e.Upload.NAME || l == e.Upload.NAME + ".tools") {
							var d = s[t][a].handler;
							o.push("undefined" == typeof i ? d.call(this, n) : d.call(this, n, i))
						}
					}
					return 1 == o.length ? o[0] : o
				}
				return "undefined" == typeof i ? n : i
			},
			load: function() {
				this.$droparea = e('<div class="tools-droparea" />'), this.$placeholdler = e('<div class="tools-droparea-placeholder" />').text(this.opts.placeholder), this.$droparea.append(this.$placeholdler), this.$element.after(this.$droparea), this.$placeholdler.append(this.$element), this.$droparea.off(".tools.upload"), this.$element.off(".tools.upload"), this.$droparea.on("dragover.tools.upload", e.proxy(this.onDrag, this)), this.$droparea.on("dragleave.tools.upload", e.proxy(this.onDragLeave, this)), this.$element.on("change.tools.upload", e.proxy(function(e) {
					e = e.originalEvent || e, this.traverseFile(this.$element[0].files[0], e)
				}, this)), this.$droparea.on("drop.tools.upload", e.proxy(function(e) {
					e.preventDefault(), this.$droparea.removeClass("drag-hover").addClass("drag-drop"), this.onDrop(e)
				}, this))
			},
			onDrop: function(e) {
				e = e.originalEvent || e;
				var t = e.dataTransfer.files;
				this.traverseFile(t[0], e)
			},
			traverseFile: function(t, n) {
				var i = window.FormData ? new FormData : null;
				window.FormData && i.append(this.opts.param, t), e.progress && e.progress.show(), this.sendData(i, n)
			},
			sendData: function(t) {
				var n = new XMLHttpRequest;
				n.open("POST", this.opts.url), n.onreadystatechange = e.proxy(function() {
					if (4 == n.readyState) {
						var t = n.responseText;
						t = t.replace(/^\[/, ""), t = t.replace(/\]$/, "");
						var i = "string" == typeof t ? e.parseJSON(t) : t;
						e.progress && e.progress.hide(), this.$droparea.removeClass("drag-drop"), this.setCallback("success", i)
					}
				}, this), n.send(t)
			},
			onDrag: function(e) {
				e.preventDefault(), this.$droparea.addClass("drag-hover")
			},
			onDragLeave: function(e) {
				e.preventDefault(), this.$droparea.removeClass("drag-hover")
			}
		}, t.prototype.init.prototype = t.prototype, e(function() {
			e('[data-tools="upload"]').upload()
		})
	}(jQuery), ! function(e, t, n) {
		"use strict";

		function i(t, i) {
			if (this.el = t, this.$el = e(t), this.s = e.extend({}, s, i), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
			return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in n.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.$items = this.s.dynamic ? this.s.dynamicEl : "this" === this.s.selector ? this.$el : "" !== this.s.selector ? this.s.selectWithin ? e(this.s.selectWithin).find(this.s.selector) : this.$el.find(e(this.s.selector)) : this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
		}
		var s = {
			mode: "lg-slide",
			cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
			easing: "linear",
			speed: 600,
			height: "100%",
			width: "100%",
			addClass: "",
			startClass: "lg-start-zoom",
			backdropDuration: 150,
			hideBarsDelay: 6e3,
			useLeft: !1,
			closable: !0,
			loop: !0,
			escKey: !0,
			keyPress: !0,
			controls: !0,
			slideEndAnimatoin: !0,
			hideControlOnEnd: !1,
			mousewheel: !0,
			appendSubHtmlTo: ".lg-sub-html",
			preload: 1,
			showAfterLoad: !0,
			selector: "",
			selectWithin: "",
			nextHtml: "",
			prevHtml: "",
			index: !1,
			iframeMaxWidth: "100%",
			download: !0,
			counter: !0,
			appendCounterTo: ".lg-toolbar",
			swipeThreshold: 50,
			enableSwipe: !0,
			enableDrag: !0,
			dynamic: !1,
			dynamicEl: [],
			galleryId: 1
		};
		i.prototype.init = function() {
			var n = this;
			n.s.preload > n.$items.length && (n.s.preload = n.$items.length);
			var i = t.location.hash;
			i.indexOf("lg=" + this.s.galleryId) > 0 && (n.index = parseInt(i.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || setTimeout(function() {
				n.build(n.index), e("body").addClass("lg-on")
			})), n.s.dynamic ? (n.$el.trigger("onBeforeOpen.lg"), n.index = n.s.index || 0, e("body").hasClass("lg-on") || setTimeout(function() {
				n.build(n.index), e("body").addClass("lg-on")
			})) : n.$items.on("click.lgcustom", function(t) {
				try {
					t.preventDefault(), t.preventDefault()
				} catch (i) {
					t.returnValue = !1
				}
				n.$el.trigger("onBeforeOpen.lg"), n.index = n.s.index || n.$items.index(this), e("body").hasClass("lg-on") || (n.build(n.index), e("body").addClass("lg-on"))
			})
		}, i.prototype.build = function(t) {
			var n = this;
			n.structure(), e.each(e.fn.lightGallery.modules, function(t) {
				n.modules[t] = new e.fn.lightGallery.modules[t](n.el)
			}), n.slide(t, !1, !1), n.s.keyPress && n.keyPress(), n.$items.length > 1 && (n.arrow(), setTimeout(function() {
				n.enableDrag(), n.enableSwipe()
			}, 50), n.s.mousewheel && n.mousewheel()), n.counter(), n.closeGallery(), n.$el.trigger("onAfterOpen.lg"), n.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
				n.$outer.removeClass("lg-hide-items"), clearTimeout(n.hideBartimeout), n.hideBartimeout = setTimeout(function() {
					n.$outer.addClass("lg-hide-items")
				}, n.s.hideBarsDelay)
			})
		}, i.prototype.structure = function() {
			var n, i = "",
				s = "",
				o = 0,
				r = "",
				a = this;
			for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), o = 0; o < this.$items.length; o++) i += '<div class="lg-item"></div>';
			if (this.s.controls && this.$items.length > 1 && (s = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (r = '<div class="lg-sub-html"></div>'), n = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + i + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + s + r + "</div></div>", e("body").append(n), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), a.setTop(), e(t).on("resize.lg orientationchange.lg", function() {
					setTimeout(function() {
						a.setTop()
					}, 100)
				}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
				var l = this.$outer.find(".lg-inner");
				l.css("transition-timing-function", this.s.cssEasing), l.css("transition-duration", this.s.speed + "ms")
			}
			e(".lg-backdrop").addClass("in"), setTimeout(function() {
				a.$outer.addClass("lg-visible")
			}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(t).scrollTop()
		}, i.prototype.setTop = function() {
			if ("100%" !== this.s.height) {
				var n = e(t).height(),
					i = (n - parseInt(this.s.height, 10)) / 2,
					s = this.$outer.find(".lg");
				n >= parseInt(this.s.height, 10) ? s.css("top", i + "px") : s.css("top", "0px")
			}
		}, i.prototype.doCss = function() {
			var e = function() {
				var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
					t = n.documentElement,
					i = 0;
				for (i = 0; i < e.length; i++)
					if (e[i] in t.style) return !0
			};
			return e() ? !0 : !1
		}, i.prototype.isVideo = function(e, t) {
			var n;
			if (n = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e && n) return {
				html5: !0
			};
			var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
				s = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
				o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
			return i ? {
				youtube: i
			} : s ? {
				vimeo: s
			} : o ? {
				dailymotion: o
			} : void 0
		}, i.prototype.counter = function() {
			this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
		}, i.prototype.addHtml = function(t) {
			var n, i = null;
			if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? n = this.s.dynamicEl[t].subHtmlUrl : i = this.s.dynamicEl[t].subHtml : this.$items.eq(t).attr("data-sub-html-url") ? n = this.$items.eq(t).attr("data-sub-html-url") : i = this.$items.eq(t).attr("data-sub-html"), !n)
				if ("undefined" != typeof i && null !== i) {
					var s = i.substring(0, 1);
					i = "." === s || "#" === s ? e(i).html() : i
				} else i = "";
				".lg-sub-html" === this.s.appendSubHtmlTo ? n ? this.$outer.find(this.s.appendSubHtmlTo).load(n) : this.$outer.find(this.s.appendSubHtmlTo).html(i) : n ? this.$slide.eq(t).load(n) : this.$slide.eq(t).append(i), "undefined" != typeof i && null !== i && ("" === i ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
		}, i.prototype.preload = function(e) {
			var t = 1,
				n = 1;
			for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
			for (n = 1; n <= this.s.preload && !(0 > e - n); n++) this.loadContent(e - n, !1, 0)
		}, i.prototype.loadContent = function(n, i, s) {
			var o, r, a, l, d, c, u = this,
				D = !1,
				h = function(n) {
					for (var i = [], s = [], o = 0; o < n.length; o++) {
						var a = n[o].split(" ");
						"" === a[0] && a.splice(0, 1), s.push(a[0]), i.push(a[1])
					}
					for (var l = e(t).width(), d = 0; d < i.length; d++)
						if (parseInt(i[d], 10) > l) {
							r = s[d];
							break
						}
				};
			if (u.s.dynamic) {
				if (u.s.dynamicEl[n].poster && (D = !0, a = u.s.dynamicEl[n].poster), c = u.s.dynamicEl[n].html, r = u.s.dynamicEl[n].src, u.s.dynamicEl[n].responsive) {
					var p = u.s.dynamicEl[n].responsive.split(",");
					h(p)
				}
				l = u.s.dynamicEl[n].srcset, d = u.s.dynamicEl[n].sizes
			} else {
				if (u.$items.eq(n).attr("data-poster") && (D = !0, a = u.$items.eq(n).attr("data-poster")), c = u.$items.eq(n).attr("data-html"), r = u.$items.eq(n).attr("href") || u.$items.eq(n).attr("data-src"), u.$items.eq(n).attr("data-responsive")) {
					var f = u.$items.eq(n).attr("data-responsive").split(",");
					h(f)
				}
				l = u.$items.eq(n).attr("data-srcset"), d = u.$items.eq(n).attr("data-sizes")
			}
			var m = !1;
			u.s.dynamic ? u.s.dynamicEl[n].iframe && (m = !0) : "true" === u.$items.eq(n).attr("data-iframe") && (m = !0);
			var B = u.isVideo(r, n);
			if (!u.$slide.eq(n).hasClass("lg-loaded")) {
				if (m) u.$slide.eq(n).prepend('<div class="lg-video-cont" style="max-width:' + u.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>');
				else if (D) {
					var g = "";
					g = B && B.youtube ? "lg-has-youtube" : B && B.vimeo ? "lg-has-vimeo" : "lg-has-html5", u.$slide.eq(n).prepend('<div class="lg-video-cont ' + g + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>')
				} else B ? (u.$slide.eq(n).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), u.$el.trigger("hasVideo.lg", [n, r, c])) : u.$slide.eq(n).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + r + '" /></div>');
				if (u.$el.trigger("onAferAppendSlide.lg", [n]), o = u.$slide.eq(n).find(".lg-object"), d && o.attr("sizes", d), l) {
					o.attr("srcset", l);
					try {
						picturefill({
							elements: [o[0]]
						})
					} catch (y) {
						console.error("Make sure you have included Picturefill version 2")
					}
				}
				".lg-sub-html" !== this.s.appendSubHtmlTo && u.addHtml(n), u.$slide.eq(n).addClass("lg-loaded")
			}
			u.$slide.eq(n).find(".lg-object").on("load.lg error.lg", function() {
				var t = 0;
				s && !e("body").hasClass("lg-from-hash") && (t = s), setTimeout(function() {
					u.$slide.eq(n).addClass("lg-complete"), u.$el.trigger("onSlideItemLoad.lg", [n, s || 0])
				}, t)
			}), B && B.html5 && !D && u.$slide.eq(n).addClass("lg-complete"), i === !0 && (u.$slide.eq(n).hasClass("lg-complete") ? u.preload(n) : u.$slide.eq(n).find(".lg-object").on("load.lg error.lg", function() {
				u.preload(n)
			}))
		}, i.prototype.slide = function(t, n, i) {
			var s = this.$outer.find(".lg-current").index(),
				o = this;
			if (!o.lGalleryOn || s !== t) {
				var r = this.$slide.length,
					a = o.lGalleryOn ? this.s.speed : 0,
					l = !1,
					d = !1;
				if (!o.lgBusy) {
					if (this.$el.trigger("onBeforeSlide.lg", [s, t, n, i]), o.lgBusy = !0, clearTimeout(o.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
							o.addHtml(t)
						}, a), this.arrowDisable(t), n) {
						var c = t - 1,
							u = t + 1;
						0 === t && s === r - 1 ? (u = 0, c = r - 1) : t === r - 1 && 0 === s && (u = 0, c = r - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), o.$slide.eq(c).addClass("lg-prev-slide"), o.$slide.eq(u).addClass("lg-next-slide"), o.$slide.eq(t).addClass("lg-current")
					} else o.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), s > t ? (d = !0, 0 !== t || s !== r - 1 || i || (d = !1, l = !0)) : t > s && (l = !0, t !== r - 1 || 0 !== s || i || (d = !0, l = !1)), d ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(s).addClass("lg-next-slide")) : l && (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(s).addClass("lg-prev-slide")), setTimeout(function() {
						o.$slide.removeClass("lg-current"), o.$slide.eq(t).addClass("lg-current"), o.$outer.removeClass("lg-no-trans")
					}, 50);
					if (o.lGalleryOn ? (setTimeout(function() {
							o.loadContent(t, !0, 0)
						}, this.s.speed + 50), setTimeout(function() {
							o.lgBusy = !1, o.$el.trigger("onAfterSlide.lg", [s, t, n, i])
						}, this.s.speed)) : (o.loadContent(t, !0, o.s.backdropDuration), o.lgBusy = !1, o.$el.trigger("onAfterSlide.lg", [s, t, n, i])), this.s.download) {
						var D;
						D = o.s.dynamic ? o.s.dynamicEl[t].downloadUrl || o.s.dynamicEl[t].src : o.$items.eq(t).attr("data-download-url") || o.$items.eq(t).attr("href") || o.$items.eq(t).attr("data-src"), e("#lg-download").attr("href", D)
					}
					o.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)
				}
			}
		}, i.prototype.goToNextSlide = function(e) {
			var t = this;
			t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (t.$outer.addClass("lg-right-end"), setTimeout(function() {
				t.$outer.removeClass("lg-right-end")
			}, 400)))
		}, i.prototype.goToPrevSlide = function(e) {
			var t = this;
			t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (t.$outer.addClass("lg-left-end"), setTimeout(function() {
				t.$outer.removeClass("lg-left-end")
			}, 400)))
		}, i.prototype.keyPress = function() {
			var n = this;
			this.$items.length > 1 && e(t).on("keyup.lg", function(e) {
				n.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), n.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), n.goToNextSlide()))
			}), e(t).on("keydown.lg", function(e) {
				n.s.escKey === !0 && 27 === e.keyCode && (e.preventDefault(), n.$outer.hasClass("lg-thumb-open") ? n.$outer.removeClass("lg-thumb-open") : n.destroy())
			})
		}, i.prototype.arrow = function() {
			var e = this;
			this.$outer.find(".lg-prev").on("click.lg", function() {
				e.goToPrevSlide()
			}), this.$outer.find(".lg-next").on("click.lg", function() {
				e.goToNextSlide()
			})
		}, i.prototype.arrowDisable = function(e) {
			!this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
		}, i.prototype.setTranslate = function(e, t, n) {
			this.s.useLeft ? e.css("left", t) : e.css({
				transform: "translate3d(" + t + "px, " + n + "px, 0px)"
			})
		}, i.prototype.touchMove = function(t, n) {
			var i = n - t;
			this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0)
		}, i.prototype.touchEnd = function(e) {
			var t = this;
			"lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
				t.$outer.removeClass("lg-dragging"), 0 > e && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
			}), setTimeout(function() {
				t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
			}, t.s.speed + 100)
		}, i.prototype.enableSwipe = function() {
			var e = this,
				t = 0,
				n = 0,
				i = !1;
			e.s.enableSwipe && e.isTouch && e.doCss() && (e.$slide.on("touchstart.lg", function(n) {
				e.$outer.hasClass("lg-zoomed") || e.lgBusy || (n.preventDefault(), e.manageSwipeClass(), t = n.originalEvent.targetTouches[0].pageX)
			}), e.$slide.on("touchmove.lg", function(s) {
				e.$outer.hasClass("lg-zoomed") || (s.preventDefault(), n = s.originalEvent.targetTouches[0].pageX, e.touchMove(t, n), i = !0)
			}), e.$slide.on("touchend.lg", function() {
				e.$outer.hasClass("lg-zoomed") || (i ? (i = !1, e.touchEnd(n - t)) : e.$el.trigger("onSlideClick.lg"))
			}))
		}, i.prototype.enableDrag = function() {
			var n = this,
				i = 0,
				s = 0,
				o = !1,
				r = !1;
			n.s.enableDrag && !n.isTouch && n.doCss() && (n.$slide.on("mousedown.lg", function(t) {
				n.$outer.hasClass("lg-zoomed") || (e(t.target).hasClass("lg-object") || e(t.target).hasClass("lg-video-play")) && (t.preventDefault(), n.lgBusy || (n.manageSwipeClass(), i = t.pageX, o = !0, n.$outer.scrollLeft += 1, n.$outer.scrollLeft -= 1, n.$outer.removeClass("lg-grab").addClass("lg-grabbing"), n.$el.trigger("onDragstart.lg")))
			}), e(t).on("mousemove.lg", function(e) {
				o && (r = !0, s = e.pageX, n.touchMove(i, s), n.$el.trigger("onDragmove.lg"))
			}), e(t).on("mouseup.lg", function(t) {
				r ? (r = !1, n.touchEnd(s - i), n.$el.trigger("onDragend.lg")) : (e(t.target).hasClass("lg-object") || e(t.target).hasClass("lg-video-play")) && n.$el.trigger("onSlideClick.lg"), o && (o = !1, n.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
			}))
		}, i.prototype.manageSwipeClass = function() {
			var e = this.index + 1,
				t = this.index - 1,
				n = this.$slide.length;
			this.s.loop && (0 === this.index ? t = n - 1 : this.index === n - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
		}, i.prototype.mousewheel = function() {
			var e = this;
			e.$outer.on("mousewheel.lg", function(t) {
				t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
			})
		}, i.prototype.closeGallery = function() {
			var t = this,
				n = !1;
			this.$outer.find(".lg-close").on("click.lg", function() {
				t.destroy()
			}), t.s.closable && (t.$outer.on("mousedown.lg", function(t) {
				n = e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap") ? !0 : !1
			}), t.$outer.on("mouseup.lg", function(i) {
				(e(i.target).is(".lg-outer") || e(i.target).is(".lg-item ") || e(i.target).is(".lg-img-wrap") && n) && (t.$outer.hasClass("lg-dragging") || t.destroy())
			}))
		}, i.prototype.destroy = function(n) {
			var i = this;
			i.$el.trigger("onBeforeClose.lg"), e(t).scrollTop(i.prevScrollTop), n && (i.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(i.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, function(e) {
				i.modules[e] && i.modules[e].destroy()
			}), this.lGalleryOn = !1, clearTimeout(i.hideBartimeout), this.hideBartimeout = !1, e(t).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), i.$outer && i.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout(function() {
				i.$outer && i.$outer.remove(), e(".lg-backdrop").remove(), i.$el.trigger("onCloseAfter.lg")
			}, i.s.backdropDuration + 50)
		}, e.fn.lightGallery = function(t) {
			return this.each(function() {
				if (e.data(this, "lightGallery")) try {
					e(this).data("lightGallery").init()
				} catch (n) {
					console.error("lightGallery has not initiated properly")
				} else e.data(this, "lightGallery", new i(this, t))
			})
		}, e.fn.lightGallery.modules = {}
	}(jQuery, window, document),
	function(e) {
		"use strict";
		var t = {
				autoplay: !1,
				pause: 5e3,
				progressBar: !0,
				fourceAutoplay: !1,
				autoplayControls: !0,
				appendAutoplayControlsTo: ".lg-toolbar"
			},
			n = function(n) {
				return this.core = e(n).data("lightGallery"), this.$el = e(n), this.core.$items.length < 2 ? !1 : (this.core.s = e.extend({}, t, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
			};
		n.prototype.init = function() {
			var e = this;
			e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.startlAuto(), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
				e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
			}), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
				!e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
			})
		}, n.prototype.progress = function() {
			var e, t, n = this;
			n.$el.on("onBeforeSlide.lg.tm", function() {
				n.core.s.progressBar && n.fromAuto && (e = n.core.$outer.find(".lg-progress-bar"), t = n.core.$outer.find(".lg-progress"), n.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout(function() {
					t.css("transition", "width " + (n.core.s.speed + n.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
				}, 20))), n.fromAuto || n.core.s.fourceAutoplay || n.cancelAuto(), n.fromAuto = !1
			})
		}, n.prototype.controls = function() {
			var t = this,
				n = '<span class="lg-autoplay-button lg-icon"></span>';
			e(this.core.s.appendAutoplayControlsTo).append(n), t.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
				e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
			})
		}, n.prototype.startlAuto = function() {
			var e = this;
			e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval(function() {
				e.core.index = e.core.index + 1 < e.core.$items.length ? e.core.index : -1, e.core.index++, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1)
			}, e.core.s.speed + e.core.s.pause)
		}, n.prototype.cancelAuto = function() {
			clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
		}, n.prototype.destroy = function() {
			this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
		}, e.fn.lightGallery.modules.autoplay = n
	}(jQuery, window, document),
	function(e, t, n) {
		"use strict";
		var i = {
				fullScreen: !0
			},
			s = function(t) {
				return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, i, this.core.s), this.init(), this
			};
		s.prototype.init = function() {
			var e = "";
			if (this.core.s.fullScreen) {
				if (!(n.fullscreenEnabled || n.webkitFullscreenEnabled || n.mozFullScreenEnabled || n.msFullscreenEnabled)) return;
				e = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
			}
		}, s.prototype.reuestFullscreen = function() {
			var e = n.documentElement;
			e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
		}, s.prototype.exitFullscreen = function() {
			n.exitFullscreen ? n.exitFullscreen() : n.msExitFullscreen ? n.msExitFullscreen() : n.mozCancelFullScreen ? n.mozCancelFullScreen() : n.webkitExitFullscreen && n.webkitExitFullscreen()
		}, s.prototype.fullScreen = function() {
			var t = this;
			e(n).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
				t.core.$outer.toggleClass("lg-fullscreen-on")
			}), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
				n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || n.msFullscreenElement ? t.exitFullscreen() : t.reuestFullscreen()
			})
		}, s.prototype.destroy = function() {
			this.exitFullscreen(), e(n).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
		}, e.fn.lightGallery.modules.fullscreen = s
	}(jQuery, window, document),
	function(e) {
		"use strict";
		var t = {
				pager: !1
			},
			n = function(n) {
				return this.core = e(n).data("lightGallery"), this.$el = e(n), this.core.s = e.extend({}, t, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
			};
		n.prototype.init = function() {
			var t, n, i, s = this,
				o = "";
			if (s.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), s.core.s.dynamic)
				for (var r = 0; r < s.core.s.dynamicEl.length; r++) o += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + s.core.s.dynamicEl[r].thumb + '" /></div></span>';
			else s.core.$items.each(function() {
				o += s.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).attr(s.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).find("img").attr("src") + '" /></div></span>'
			});
			n = s.core.$outer.find(".lg-pager-outer"), n.html(o), t = s.core.$outer.find(".lg-pager-cont"), t.on("click.lg touchend.lg", function() {
				var t = e(this);
				s.core.index = t.index(), s.core.slide(s.core.index, !1, !1)
			}), n.on("mouseover.lg", function() {
				clearTimeout(i), n.addClass("lg-pager-hover")
			}), n.on("mouseout.lg", function() {
				i = setTimeout(function() {
					n.removeClass("lg-pager-hover")
				})
			}), s.core.$el.on("onBeforeSlide.lg.tm", function(e, n, i) {
				t.removeClass("lg-pager-active"), t.eq(i).addClass("lg-pager-active")
			})
		}, n.prototype.destroy = function() {}, e.fn.lightGallery.modules.pager = n
	}(jQuery, window, document),
	function(e, t) {
		"use strict";
		var n = {
				thumbnail: !0,
				animateThumb: !0,
				currentPagerPosition: "middle",
				thumbWidth: 100,
				thumbContHeight: 100,
				thumbMargin: 5,
				exThumbImage: !1,
				showThumbByDefault: !0,
				toogleThumb: !0,
				pullCaptionUp: !0,
				enableThumbDrag: !0,
				enableThumbSwipe: !0,
				swipeThreshold: 50,
				loadYoutubeThumbnail: !0,
				youtubeThumbSize: 1,
				loadVimeoThumbnail: !0,
				vimeoThumbSize: "thumbnail_small",
				loadDailymotionThumbnail: !0
			},
			i = function(t) {
				return this.core = e(t).data("lightGallery"), this.core.s = e.extend({}, n, this.core.s), this.$el = e(t), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.init(), this
			};
		i.prototype.init = function() {
			this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && this.core.$outer.addClass("lg-thumb-open"), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
		}, i.prototype.build = function() {
			function n(e, t, n) {
				var i, a = s.core.isVideo(e, n) || {},
					l = "";
				a.youtube || a.vimeo || a.dailymotion ? a.youtube ? i = s.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + a.youtube[1] + "/" + s.core.s.youtubeThumbSize + ".jpg" : t : a.vimeo ? s.core.s.loadVimeoThumbnail ? (i = "//i.vimeocdn.com/video/error_" + r + ".jpg", l = a.vimeo[1]) : i = t : a.dailymotion && (i = s.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + a.dailymotion[1] : t) : i = t, o += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + s.core.s.thumbWidth + "px; margin-right: " + s.core.s.thumbMargin + 'px"><img src="' + i + '" /></div>', l = ""
			}
			var i, s = this,
				o = "",
				r = "",
				a = '<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';
			switch (this.core.s.vimeoThumbSize) {
				case "thumbnail_large":
					r = "640";
					break;
				case "thumbnail_medium":
					r = "200x150";
					break;
				case "thumbnail_small":
					r = "100x75"
			}
			if (s.core.$outer.addClass("lg-has-thumb"), s.core.$outer.find(".lg").append(a), s.$thumbOuter = s.core.$outer.find(".lg-thumb-outer"), s.thumbOuterWidth = s.$thumbOuter.width(), s.core.s.animateThumb && s.core.$outer.find(".lg-thumb").css({
					width: s.thumbTotalWidth + "px",
					position: "relative"
				}), this.core.s.animateThumb && s.$thumbOuter.css("height", s.core.s.thumbContHeight + "px"), s.core.s.dynamic)
				for (var l = 0; l < s.core.s.dynamicEl.length; l++) n(s.core.s.dynamicEl[l].src, s.core.s.dynamicEl[l].thumb, l);
			else s.core.$items.each(function(t) {
				s.core.s.exThumbImage ? n(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(s.core.s.exThumbImage), t) : n(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), t)
			});
			s.core.$outer.find(".lg-thumb").html(o), i = s.core.$outer.find(".lg-thumb-item"), i.each(function() {
				var t = e(this),
					n = t.attr("data-vimeo-id");
				n && e.getJSON("http://www.vimeo.com/api/v2/video/" + n + ".json?callback=?", {
					format: "json"
				}, function(e) {
					t.find("img").attr("src", e[0][s.core.s.vimeoThumbSize])
				})
			}), i.eq(s.core.index).addClass("active"), s.core.$el.on("onBeforeSlide.lg.tm", function() {
				i.removeClass("active"), i.eq(s.core.index).addClass("active")
			}), i.on("click.lg touchend.lg", function() {
				var t = e(this);
				setTimeout(function() {
					(s.thumbClickable && !s.core.lgBusy || !s.core.doCss()) && (s.core.index = t.index(), s.core.slide(s.core.index, !1, !0))
				}, 50)
			}), s.core.$el.on("onBeforeSlide.lg.tm", function() {
				s.animateThumb(s.core.index)
			}), e(t).on("resize.lg.thumb orientationchange.lg.thumb", function() {
				setTimeout(function() {
					s.animateThumb(s.core.index), s.thumbOuterWidth = s.$thumbOuter.width()
				}, 200)
			})
		}, i.prototype.setTranslate = function(e) {
			this.core.$outer.find(".lg-thumb").css({
				transform: "translate3d(-" + e + "px, 0px, 0px)"
			})
		}, i.prototype.animateThumb = function(e) {
			var t = this.core.$outer.find(".lg-thumb");
			if (this.core.s.animateThumb) {
				var n;
				switch (this.core.s.currentPagerPosition) {
					case "left":
						n = 0;
						break;
					case "middle":
						n = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
						break;
					case "right":
						n = this.thumbOuterWidth - this.core.s.thumbWidth
				}
				this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - n, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
					left: -this.left + "px"
				}, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
			}
		}, i.prototype.enableThumbDrag = function() {
			var n = this,
				i = 0,
				s = 0,
				o = !1,
				r = !1,
				a = 0;
			n.$thumbOuter.addClass("lg-grab"), n.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(e) {
				n.thumbTotalWidth > n.thumbOuterWidth && (e.preventDefault(), i = e.pageX, o = !0, n.core.$outer.scrollLeft += 1, n.core.$outer.scrollLeft -= 1, n.thumbClickable = !1, n.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
			}), e(t).on("mousemove.lg.thumb", function(e) {
				o && (a = n.left, r = !0, s = e.pageX, n.$thumbOuter.addClass("lg-dragging"), a -= s - i, a > n.thumbTotalWidth - n.thumbOuterWidth && (a = n.thumbTotalWidth - n.thumbOuterWidth), 0 > a && (a = 0), n.setTranslate(a))
			}), e(t).on("mouseup.lg.thumb", function() {
				r ? (r = !1, n.$thumbOuter.removeClass("lg-dragging"), n.left = a, Math.abs(s - i) < n.core.s.swipeThreshold && (n.thumbClickable = !0)) : n.thumbClickable = !0, o && (o = !1, n.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
			})
		}, i.prototype.enableThumbSwipe = function() {
			var e = this,
				t = 0,
				n = 0,
				i = !1,
				s = 0;
			e.core.$outer.find(".lg-thumb").on("touchstart.lg", function(n) {
				e.thumbTotalWidth > e.thumbOuterWidth && (n.preventDefault(), t = n.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
			}), e.core.$outer.find(".lg-thumb").on("touchmove.lg", function(o) {
				e.thumbTotalWidth > e.thumbOuterWidth && (o.preventDefault(), n = o.originalEvent.targetTouches[0].pageX, i = !0, e.$thumbOuter.addClass("lg-dragging"), s = e.left, s -= n - t, s > e.thumbTotalWidth - e.thumbOuterWidth && (s = e.thumbTotalWidth - e.thumbOuterWidth), 0 > s && (s = 0), e.setTranslate(s))
			}), e.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
				e.thumbTotalWidth > e.thumbOuterWidth && i ? (i = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(n - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = s) : e.thumbClickable = !0
			})
		}, i.prototype.toogle = function() {
			var e = this;
			e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
				e.core.$outer.toggleClass("lg-thumb-open")
			}))
		}, i.prototype.thumbkeyPress = function() {
			var n = this;
			e(t).on("keydown.lg.thumb", function(e) {
				38 === e.keyCode ? (e.preventDefault(), n.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), n.core.$outer.removeClass("lg-thumb-open"))
			})
		}, i.prototype.destroy = function() {
			this.core.s.thumbnail && this.core.$items.length > 1 && (e(t).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
		}, e.fn.lightGallery.modules.Thumbnail = i
	}(jQuery, window, document),
	function(e) {
		"use strict";
		var t = {
				videoMaxWidth: "855px",
				youtubePlayerParams: !1,
				vimeoPlayerParams: !1,
				dailymotionPlayerParams: !1,
				videojs: !1
			},
			n = function(n) {
				return this.core = e(n).data("lightGallery"), this.$el = e(n), this.core.s = e.extend({}, t, this.core.s), this.videoLoaded = !1, this.init(), this
			};
		n.prototype.init = function() {
			var t = this;
			t.core.$el.on("hasVideo.lg.tm", function(e, n, i, s) {
				if (t.core.$slide.eq(n).find(".lg-video").append(t.loadVideo(i, "lg-object", !0, n, s)), s)
					if (t.core.s.videojs) try {
						videojs(t.core.$slide.eq(n).find(".lg-html5").get(0), {}, function() {
							t.videoLoaded || this.play()
						})
					} catch (o) {
						console.error("Make sure you have included videojs")
					} else t.core.$slide.eq(n).find(".lg-html5").get(0).play()
			}), t.core.$el.on("onAferAppendSlide.lg.tm", function(e, n) {
				t.core.$slide.eq(n).find(".lg-video-cont").css("max-width", t.core.s.videoMaxWidth), t.videoLoaded = !0
			});
			var n = function(e) {
				if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
					if (e.hasClass("lg-has-video")) {
						var n = e.find(".lg-youtube").get(0),
							i = e.find(".lg-vimeo").get(0),
							s = e.find(".lg-dailymotion").get(0),
							o = e.find(".lg-html5").get(0);
						if (n) n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
						else if (i) try {
								$f(i).api("play")
							} catch (r) {
								console.error("Make sure you have included froogaloop2 js")
							} else if (s) s.contentWindow.postMessage("play", "*");
							else if (o)
							if (t.core.s.videojs) try {
								videojs(o).play()
							} catch (r) {
								console.error("Make sure you have included videojs")
							} else o.play();
						e.addClass("lg-video-palying")
					} else {
						e.addClass("lg-video-palying lg-has-video");
						var a, l, d = function(n, i) {
							if (e.find(".lg-video").append(t.loadVideo(n, "", !1, t.core.index, i)), i)
								if (t.core.s.videojs) try {
									videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), {}, function() {
										this.play()
									})
								} catch (s) {
									console.error("Make sure you have included videojs")
								} else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
						};
						t.core.s.dynamic ? (a = t.core.s.dynamicEl[t.core.index].src, l = t.core.s.dynamicEl[t.core.index].html, d(a, l)) : (a = t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), l = t.core.$items.eq(t.core.index).attr("data-html"), d(a, l));
						var c = e.find(".lg-object");
						e.find(".lg-video").append(c), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function() {
							e.addClass("lg-complete")
						}))
					}
			};
			t.core.doCss() && t.core.$items.length > 1 && (t.core.s.enableSwipe && t.core.isTouch || t.core.s.enableDrag && !t.core.isTouch) ? t.core.$el.on("onSlideClick.lg.tm", function() {
				var e = t.core.$slide.eq(t.core.index);
				n(e)
			}) : t.core.$slide.on("click.lg", function() {
				n(e(this))
			}), t.core.$el.on("onBeforeSlide.lg.tm", function(e, n) {
				var i = t.core.$slide.eq(n),
					s = i.find(".lg-youtube").get(0),
					o = i.find(".lg-vimeo").get(0),
					r = i.find(".lg-dailymotion").get(0),
					a = i.find(".lg-html5").get(0);
				if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
				else if (o) try {
						$f(o).api("pause")
					} catch (l) {
						console.error("Make sure you have included froogaloop2 js")
					} else if (r) r.contentWindow.postMessage("pause", "*");
					else if (a)
					if (t.core.s.videojs) try {
						videojs(a).pause()
					} catch (l) {
						console.error("Make sure you have included videojs")
					} else a.pause()
			}), t.core.$el.on("onAfterSlide.lg.tm", function(e, n) {
				t.core.$slide.eq(n).removeClass("lg-video-palying")
			})
		}, n.prototype.loadVideo = function(t, n, i, s, o) {
			var r = "",
				a = 1,
				l = "",
				d = this.core.isVideo(t, s) || {};
			if (i && (a = this.videoLoaded ? 0 : 1), d.youtube) l = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1", this.core.s.youtubePlayerParams && (l = l + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + n + '" width="560" height="315" src="//www.youtube.com/embed/' + d.youtube[1] + l + '" frameborder="0" allowfullscreen></iframe>';
			else if (d.vimeo) l = "?autoplay=" + a + "&api=1", this.core.s.vimeoPlayerParams && (l = l + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + n + '" width="560" height="315"  src="http://player.vimeo.com/video/' + d.vimeo[1] + l + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			else if (d.dailymotion) l = "?wmode=opaque&autoplay=" + a + "&api=postMessage", this.core.s.dailymotionPlayerParams && (l = l + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + n + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + d.dailymotion[1] + l + '" frameborder="0" allowfullscreen></iframe>';
			else if (d.html5) {
				var c = o.substring(0, 1);
				("." === c || "#" === c) && (o = e(o).html()), r = o
			}
			return r
		}, n.prototype.destroy = function() {
			this.videoLoaded = !1
		}, e.fn.lightGallery.modules.video = n
	}(jQuery, window, document),
	function(e, t) {
		"use strict";
		var n = {
				scale: 1,
				zoom: !0,
				enableZoomAfter: 300
			},
			i = function(i) {
				return this.core = e(i).data("lightGallery"), this.core.s = e.extend({}, n, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = e(t).width() / 2, this.pageY = e(t).height() / 2 + e(t).scrollTop()), this
			};
		i.prototype.init = function() {
			var n = this,
				i = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
			this.core.$outer.find(".lg-toolbar").append(i), n.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(t, i, s) {
				var o = n.core.s.enableZoomAfter + s;
				e("body").hasClass("lg-from-hash") && s ? o = 0 : e("body").removeClass("lg-from-hash"), n.zoomabletimeout = setTimeout(function() {
					n.core.$slide.eq(i).addClass("lg-zoomable")
				}, o + 30)
			});
			var s = 1,
				o = function(i) {
					var s, o, r = n.core.$outer.find(".lg-current .lg-image"),
						a = (e(t).width() - r.width()) / 2,
						l = (e(t).height() - r.height()) / 2 + e(t).scrollTop();
					s = n.pageX - a, o = n.pageY - l;
					var d = (i - 1) * s,
						c = (i - 1) * o;
					r.css("transform", "scale3d(" + i + ", " + i + ", 1)").attr("data-scale", i), r.parent().css("transform", "translate3d(-" + d + "px, -" + c + "px, 0)").attr("data-x", d).attr("data-y", c)
				},
				r = function() {
					s > 1 ? n.core.$outer.addClass("lg-zoomed") : n.resetZoom(), 1 > s && (s = 1), o(s)
				};
			n.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(e, t) {
				var i = n.core.$slide.eq(t).find(".lg-image");
				i.dblclick(function(e) {
					var o, a = i.width(),
						l = n.core.$items.eq(t).attr("data-width") || i[0].naturalWidth || a;
					n.core.$outer.hasClass("lg-zoomed") ? s = 1 : l > a && (o = l / a, s = o || 2), n.pageX = e.pageX, n.pageY = e.pageY, r(), setTimeout(function() {
						n.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
					}, 10)
				})
			}), e(t).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
				n.pageX = e(t).width() / 2, n.pageY = e(t).height() / 2 + e(t).scrollTop(), o(s)
			}), e("#lg-zoom-out").on("click.lg", function() {
				n.core.$outer.find(".lg-current .lg-image").length && (s -= n.core.s.scale, r())
			}), e("#lg-zoom-in").on("click.lg", function() {
				n.core.$outer.find(".lg-current .lg-image").length && (s += n.core.s.scale, r())
			}), n.core.$el.on("onBeforeSlide.lg.tm", function() {
				n.resetZoom()
			}), n.core.isTouch || n.zoomDrag(), n.core.isTouch && n.zoomSwipe()
		}, i.prototype.resetZoom = function() {
			this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = e(t).width() / 2, this.pageY = e(t).height() / 2 + e(t).scrollTop()
		}, i.prototype.zoomSwipe = function() {
			var e = this,
				t = {},
				n = {},
				i = !1,
				s = !1,
				o = !1;
			e.core.$slide.on("touchstart.lg", function(n) {
				if (e.core.$outer.hasClass("lg-zoomed")) {
					var i = e.core.$slide.eq(e.core.index).find(".lg-object");
					o = i.outerHeight() * i.attr("data-scale") > e.core.$outer.find(".lg").height(), s = i.outerWidth() * i.attr("data-scale") > e.core.$outer.find(".lg").width(), (s || o) && (n.preventDefault(), t = {
						x: n.originalEvent.targetTouches[0].pageX,
						y: n.originalEvent.targetTouches[0].pageY
					})
				}
			}), e.core.$slide.on("touchmove.lg", function(r) {
				if (e.core.$outer.hasClass("lg-zoomed")) {
					var a, l, d = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
					r.preventDefault(), i = !0, n = r.originalEvent.targetTouches[0].pageX, n = {
						x: r.originalEvent.targetTouches[0].pageX,
						y: r.originalEvent.targetTouches[0].pageY
					}, e.core.$outer.addClass("lg-zoom-dragging"), l = o ? -Math.abs(d.attr("data-y")) + (n.y - t.y) : -Math.abs(d.attr("data-y")), a = s ? -Math.abs(d.attr("data-x")) + (n.x - t.x) : -Math.abs(d.attr("data-x")), d.css("transform", "translate3d(" + a + "px, " + l + "px, 0)")
				}
			}), e.core.$slide.on("touchend.lg", function() {
				e.core.$outer.hasClass("lg-zoomed") && i && (i = !1, e.core.$outer.removeClass("lg-zoom-dragging"), e.touchendZoom(t, n, s, o))
			})
		}, i.prototype.zoomDrag = function() {
			var n = this,
				i = {},
				s = {},
				o = !1,
				r = !1,
				a = !1,
				l = !1;
			n.core.$slide.on("mousedown.lg.zoom", function(t) {
				var s = n.core.$slide.eq(n.core.index).find(".lg-object");
				l = s.outerHeight() * s.attr("data-scale") > n.core.$outer.find(".lg").height(), a = s.outerWidth() * s.attr("data-scale") > n.core.$outer.find(".lg").width(), n.core.$outer.hasClass("lg-zoomed") && e(t.target).hasClass("lg-object") && (a || l) && (t.preventDefault(), i = {
					x: t.pageX,
					y: t.pageY
				}, o = !0, n.core.$outer.scrollLeft += 1, n.core.$outer.scrollLeft -= 1, n.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
			}), e(t).on("mousemove.lg.zoom", function(e) {
				if (o) {
					var t, d, c = n.core.$slide.eq(n.core.index).find(".lg-img-wrap");
					r = !0, s = {
						x: e.pageX,
						y: e.pageY
					}, n.core.$outer.addClass("lg-zoom-dragging"), d = l ? -Math.abs(c.attr("data-y")) + (s.y - i.y) : -Math.abs(c.attr("data-y")), t = a ? -Math.abs(c.attr("data-x")) + (s.x - i.x) : -Math.abs(c.attr("data-x")), c.css("transform", "translate3d(" + t + "px, " + d + "px, 0)")
				}
			}), e(t).on("mouseup.lg.zoom", function(e) {
				o && (o = !1, n.core.$outer.removeClass("lg-zoom-dragging"), !r || i.x === s.x && i.y === s.y || (s = {
					x: e.pageX,
					y: e.pageY
				}, n.touchendZoom(i, s, a, l)), r = !1), n.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
			})
		}, i.prototype.touchendZoom = function(e, t, n, i) {
			var s = this,
				o = s.core.$slide.eq(s.core.index).find(".lg-img-wrap"),
				r = s.core.$slide.eq(s.core.index).find(".lg-object"),
				a = -Math.abs(o.attr("data-x")) + (t.x - e.x),
				l = -Math.abs(o.attr("data-y")) + (t.y - e.y),
				d = (s.core.$outer.find(".lg").height() - r.outerHeight()) / 2,
				c = Math.abs(r.outerHeight() * Math.abs(r.attr("data-scale")) - s.core.$outer.find(".lg").height() + d),
				u = (s.core.$outer.find(".lg").width() - r.outerWidth()) / 2,
				D = Math.abs(r.outerWidth() * Math.abs(r.attr("data-scale")) - s.core.$outer.find(".lg").width() + u);
			i && (-c >= l ? l = -c : l >= -d && (l = -d)), n && (-D >= a ? a = -D : a >= -u && (a = -u)), i ? o.attr("data-y", Math.abs(l)) : l = -Math.abs(o.attr("data-y")), n ? o.attr("data-x", Math.abs(a)) : a = -Math.abs(o.attr("data-x")), o.css("transform", "translate3d(" + a + "px, " + l + "px, 0)")
		}, i.prototype.destroy = function() {
			var n = this;
			n.core.$el.off(".lg.zoom"), e(t).off(".lg.zoom"), n.core.$slide.off(".lg.zoom"), n.core.$el.off(".lg.tm.zoom"), n.resetZoom(), clearTimeout(n.zoomabletimeout), n.zoomabletimeout = !1
		}, e.fn.lightGallery.modules.zoom = i
	}(jQuery, window, document),
	function(e, t, n) {
		"use strict";
		var i = {
				hash: !0
			},
			s = function(n) {
				return this.core = e(n).data("lightGallery"), this.core.s = e.extend({}, i, this.core.s), this.core.s.hash && (this.oldHash = t.location.hash, this.init()), this
			};
		s.prototype.init = function() {
			var n, i = this;
			i.core.$el.on("onAfterSlide.lg.tm", function(e, n, s) {
				t.location.hash = "lg=" + i.core.s.galleryId + "&slide=" + s
			}), e(t).on("hashchange", function() {
				n = t.location.hash;
				var e = parseInt(n.split("&slide=")[1], 10);
				n.indexOf("lg=" + i.core.s.galleryId) > -1 ? i.core.slide(e) : i.core.lGalleryOn && i.core.destroy()
			})
		}, s.prototype.destroy = function() {
			this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? t.location.hash = this.oldHash : history.pushState ? history.pushState("", n.title, t.location.pathname + t.location.search) : t.location.hash = ""
		}, e.fn.lightGallery.modules.hash = s
	}(jQuery, window, document), ! function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function(e, t) {
		"use strict";

		function n(e, t) {
			this.container = e, this.options = t, this.init()
		}

		function i(t, n) {
			this.widget = t, this.options = e.extend({}, n), this.detectService(), this.service && this.init()
		}

		function s(e) {
			function t(e, t) {
				return t.toUpper()
			}
			var n = {},
				i = e.data();
			for (var s in i) {
				var o = i[s];
				"yes" === o ? o = !0 : "no" === o && (o = !1), n[s.replace(/-(\w)/g, t)] = o
			}
			return n
		}

		function o(e, t) {
			return r(e, t, encodeURIComponent)
		}

		function r(e, t, n) {
			return e.replace(/\{([^\}]+)\}/g, function(e, i) {
				return i in t ? n ? n(t[i]) : t[i] : e
			})
		}

		function a(e, t) {
			var n = u + e;
			return n + " " + n + "_" + t
		}

		function l(t, n) {
			function i(r) {
				"keydown" === r.type && 27 !== r.which || e(r.target).closest(t).length || (t.removeClass(D), s.off(o, i), e.isFunction(n) && n())
			}
			var s = e(document),
				o = "click touchstart keydown";
			s.on(o, i)
		}

		function d(e) {
			var t = 10;
			if (document.documentElement.getBoundingClientRect) {
				var n = parseInt(e.css("left"), 10),
					i = parseInt(e.css("top"), 10),
					s = e[0].getBoundingClientRect();
				s.left < t ? e.css("left", t - s.left + n) : s.right > window.innerWidth - t && e.css("left", window.innerWidth - s.right - t + n), s.top < t ? e.css("top", t - s.top + i) : s.bottom > window.innerHeight - t && e.css("top", window.innerHeight - s.bottom - t + i)
			}
			e.addClass(D)
		}
		var c = "social-likes",
			u = c + "__",
			D = c + "_opened",
			h = "https:" === location.protocol ? "https:" : "http:",
			p = "https:" === h,
			f = {
				facebook: {
					counterUrl: "https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",
					convertNumber: function(e) {
						return e.data[0].total_count
					},
					popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
					popupWidth: 600,
					popupHeight: 500
				},
				twitter: {
					counterUrl: "https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
					convertNumber: function(e) {
						return e.count
					},
					popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
					popupWidth: 600,
					popupHeight: 450,
					click: function() {
						return /[\.\?:\-\u2013\u2014]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
					}
				},
				mailru: {
					counterUrl: h + "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",
					convertNumber: function(e) {
						for (var t in e)
							if (e.hasOwnProperty(t)) return e[t].shares
					},
					popupUrl: h + "//connect.mail.ru/share?share_url={url}&title={title}",
					popupWidth: 550,
					popupHeight: 360
				},
				vkontakte: {
					counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}",
					counter: function(t, n) {
						var i = f.vkontakte;
						i._ || (i._ = [], window.VK || (window.VK = {}), window.VK.Share = {
							count: function(e, t) {
								i._[e].resolve(t)
							}
						});
						var s = i._.length;
						i._.push(n), e.getScript(o(t, {
							index: s
						})).fail(n.reject)
					},
					popupUrl: h + "//vk.com/share.php?url={url}&title={title}",
					popupWidth: 550,
					popupHeight: 330
				},
				odnoklassniki: {
					counterUrl: p ? t : "http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
					counter: function(t, n) {
						var i = f.odnoklassniki;
						i._ || (i._ = [], window.ODKL || (window.ODKL = {}), window.ODKL.updateCount = function(e, t) {
							i._[e].resolve(t)
						});
						var s = i._.length;
						i._.push(n), e.getScript(o(t, {
							index: s
						})).fail(n.reject)
					},
					popupUrl: "http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
					popupWidth: 550,
					popupHeight: 360
				},
				plusone: {
					counterUrl: p ? t : "http://share.yandex.ru/gpp.xml?url={url}",
					counter: function(t, n) {
						var i = f.plusone;
						return i._ ? void n.reject() : (window.services || (window.services = {}), window.services.gplus = {
							cb: function(e) {
								"string" == typeof e && (e = e.replace(/\D/g, "")), i._.resolve(parseInt(e, 10))
							}
						}, i._ = n, void e.getScript(o(t)).fail(n.reject))
					},
					popupUrl: "https://plus.google.com/share?url={url}",
					popupWidth: 700,
					popupHeight: 500
				},
				pinterest: {
					counterUrl: h + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
					convertNumber: function(e) {
						return e.count
					},
					popupUrl: h + "//pinterest.com/pin/create/button/?url={url}&description={title}",
					popupWidth: 630,
					popupHeight: 270
				}
			},
			m = {
				promises: {},
				fetch: function(t, n, i) {
					m.promises[t] || (m.promises[t] = {});
					var s = m.promises[t];
					if (!i.forceUpdate && s[n]) return s[n];
					var r = e.extend({}, f[t], i),
						a = e.Deferred(),
						l = r.counterUrl && o(r.counterUrl, {
							url: n
						});
					return l && e.isFunction(r.counter) ? r.counter(l, a) : r.counterUrl ? e.getJSON(l).done(function(t) {
						try {
							var n = t;
							e.isFunction(r.convertNumber) && (n = r.convertNumber(t)), a.resolve(n)
						} catch (i) {
							a.reject()
						}
					}).fail(a.reject) : a.reject(), s[n] = a.promise(), s[n]
				}
			};
		e.fn.socialLikes = function(t) {
			return this.each(function() {
				var i = e(this),
					o = i.data(c);
				o ? e.isPlainObject(t) && o.update(t) : (o = new n(i, e.extend({}, e.fn.socialLikes.defaults, t, s(i))), i.data(c, o))
			})
		}, e.fn.socialLikes.defaults = {
			url: window.location.href.replace(window.location.hash, ""),
			title: document.title,
			counters: !0,
			zeroes: !1,
			wait: 500,
			timeout: 1e4,
			popupCheckInterval: 500,
			singleTitle: "Share"
		}, n.prototype = {
			init: function() {
				this.container.addClass(c), this.single = this.container.hasClass(c + "_single"), this.initUserButtons(), this.countersLeft = 0, this.number = 0, this.container.on("counter." + c, e.proxy(this.updateCounter, this));
				var t = this.container.children();
				this.makeSingleButton(), this.buttons = [], t.each(e.proxy(function(t, n) {
					var s = new i(e(n), this.options);
					this.buttons.push(s), s.options.counterUrl && this.countersLeft++
				}, this)), this.options.counters ? (this.timer = setTimeout(e.proxy(this.appear, this), this.options.wait), this.timeout = setTimeout(e.proxy(this.ready, this, !0), this.options.timeout)) : this.appear()
			},
			initUserButtons: function() {
				!this.userButtonInited && window.socialLikesButtons && e.extend(!0, f, socialLikesButtons), this.userButtonInited = !0
			},
			makeSingleButton: function() {
				if (this.single) {
					var t = this.container;
					t.addClass(c + "_vertical"), t.wrap(e("<div>", {
						"class": c + "_single-w"
					})), t.wrapInner(e("<div>", {
						"class": c + "__single-container"
					}));
					var n = t.parent(),
						i = e("<div>", {
							"class": a("widget", "single")
						}),
						s = e(r('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>', {
							buttonCls: a("button", "single"),
							iconCls: a("icon", "single"),
							title: this.options.singleTitle
						}));
					i.append(s), n.append(i), i.on("click", function() {
						var e = c + "__widget_active";
						return i.toggleClass(e), i.hasClass(e) ? (t.css({
							left: -(t.width() - i.width()) / 2,
							top: -t.height()
						}), d(t), l(t, function() {
							i.removeClass(e)
						})) : t.removeClass(D), !1
					}), this.widget = i
				}
			},
			update: function(t) {
				if (t.forceUpdate || t.url !== this.options.url) {
					this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + c + "__counter").remove(), e.extend(this.options, t);
					for (var n = 0; n < this.buttons.length; n++) this.buttons[n].update(t)
				}
			},
			updateCounter: function(e, t, n) {
				n && (this.number += n, this.single && this.getCounterElem().text(this.number)), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.ready())
			},
			appear: function() {
				this.container.addClass(c + "_visible")
			},
			ready: function(e) {
				this.timeout && clearTimeout(this.timeout), this.container.addClass(c + "_ready"), e || this.container.trigger("ready." + c, this.number)
			},
			getCounterElem: function() {
				var t = this.widget.find("." + u + "counter_single");
				return t.length || (t = e("<span>", {
					"class": a("counter", "single")
				}), this.widget.append(t)), t
			}
		}, i.prototype = {
			init: function() {
				this.detectParams(), this.initHtml(), setTimeout(e.proxy(this.initCounter, this), 0)
			},
			update: function(t) {
				e.extend(this.options, {
					forceUpdate: !1
				}, t), this.widget.find("." + c + "__counter").remove(), this.initCounter()
			},
			detectService: function() {
				var t = this.widget.data("service");
				if (!t) {
					for (var n = this.widget[0], i = n.classList || n.className.split(" "), s = 0; s < i.length; s++) {
						var o = i[s];
						if (f[o]) {
							t = o;
							break
						}
					}
					if (!t) return
				}
				this.service = t, e.extend(this.options, f[t])
			},
			detectParams: function() {
				var e = this.widget.data();
				if (e.counter) {
					var t = parseInt(e.counter, 10);
					isNaN(t) ? this.options.counterUrl = e.counter : this.options.counterNumber = t
				}
				e.title && (this.options.title = e.title), e.url && (this.options.url = e.url)
			},
			initHtml: function() {
				var t = this.options,
					n = this.widget,
					i = n.find("a");
				i.length && this.cloneDataAttrs(i, n);
				var s = e("<span>", {
					"class": this.getElementClassNames("button"),
					text: n.text()
				});
				if (t.clickUrl) {
					var r = o(t.clickUrl, {
							url: t.url,
							title: t.title
						}),
						a = e("<a>", {
							href: r
						});
					this.cloneDataAttrs(n, a), n.replaceWith(a), this.widget = n = a
				} else n.on("click", e.proxy(this.click, this));
				n.removeClass(this.service), n.addClass(this.getElementClassNames("widget")), s.prepend(e("<span>", {
					"class": this.getElementClassNames("icon")
				})), n.empty().append(s), this.button = s
			},
			initCounter: function() {
				if (this.options.counters)
					if (this.options.counterNumber) this.updateCounter(this.options.counterNumber);
					else {
						var t = {
							counterUrl: this.options.counterUrl,
							forceUpdate: this.options.forceUpdate
						};
						m.fetch(this.service, this.options.url, t).always(e.proxy(this.updateCounter, this))
					}
			},
			cloneDataAttrs: function(e, t) {
				var n = e.data();
				for (var i in n) n.hasOwnProperty(i) && t.data(i, n[i])
			},
			getElementClassNames: function(e) {
				return a(e, this.service)
			},
			updateCounter: function(t) {
				t = parseInt(t, 10) || 0;
				var n = {
					"class": this.getElementClassNames("counter"),
					text: t
				};
				t || this.options.zeroes || (n["class"] += " " + c + "__counter_empty", n.text = "");
				var i = e("<span>", n);
				this.widget.append(i), this.widget.trigger("counter." + c, [this.service, t])
			},
			click: function(t) {
				var n = this.options,
					i = !0;
				if (e.isFunction(n.click) && (i = n.click.call(this, t)), i) {
					var s = o(n.popupUrl, {
						url: n.url,
						title: n.title
					});
					s = this.addAdditionalParamsToUrl(s), this.openPopup(s, {
						width: n.popupWidth,
						height: n.popupHeight
					})
				}
				return !1
			},
			addAdditionalParamsToUrl: function(t) {
				var n = e.param(e.extend(this.widget.data(), this.options.data));
				if (e.isEmptyObject(n)) return t;
				var i = -1 === t.indexOf("?") ? "?" : "&";
				return t + i + n
			},
			openPopup: function(t, n) {
				var i = Math.round(screen.width / 2 - n.width / 2),
					s = 0;
				screen.height > n.height && (s = Math.round(screen.height / 3 - n.height / 2));
				var o = window.open(t, "sl_" + this.service, "left=" + i + ",top=" + s + ",width=" + n.width + ",height=" + n.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
				if (o) {
					o.focus(), this.widget.trigger("popup_opened." + c, [this.service, o]);
					var r = setInterval(e.proxy(function() {
						o.closed && (clearInterval(r), this.widget.trigger("popup_closed." + c, this.service))
					}, this), this.options.popupCheckInterval)
				} else location.href = t
			}
		}, e(function() {
			e("." + c).socialLikes()
		})
	}), this.JSON || (this.JSON = {}),
	function() {
		function f(e) {
			return 10 > e ? "0" + e : e
		}

		function quote(e) {
			return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
				var t = meta[e];
				return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + e + '"'
		}

		function str(e, t) {
			var n, i, s, o, r, a = gap,
				l = t[e];
			switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
				case "string":
					return quote(l);
				case "number":
					return isFinite(l) ? String(l) : "null";
				case "boolean":
				case "null":
					return String(l);
				case "object":
					if (!l) return "null";
					if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
						for (o = l.length, n = 0; o > n; n += 1) r[n] = str(n, l) || "null";
						return s = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + a + "]" : "[" + r.join(",") + "]", gap = a, s
					}
					if (rep && "object" == typeof rep)
						for (o = rep.length, n = 0; o > n; n += 1) i = rep[n], "string" == typeof i && (s = str(i, l), s && r.push(quote(i) + (gap ? ": " : ":") + s));
					else
						for (i in l) Object.hasOwnProperty.call(l, i) && (s = str(i, l), s && r.push(quote(i) + (gap ? ": " : ":") + s));
					return s = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + a + "}" : "{" + r.join(",") + "}", gap = a, s
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta = {
				"\b": "\\b",
				"	": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			rep;
		"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
			var i;
			if (gap = "", indent = "", "number" == typeof n)
				for (i = 0; n > i; i += 1) indent += " ";
			else "string" == typeof n && (indent = n);
			if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
				"": e
			});
			throw new Error("JSON.stringify")
		}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
			function walk(e, t) {
				var n, i, s = e[t];
				if (s && "object" == typeof s)
					for (n in s) Object.hasOwnProperty.call(s, n) && (i = walk(s, n), void 0 !== i ? s[n] = i : delete s[n]);
				return reviver.call(e, t, s)
			}
			var j;
			if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
					return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
				})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(),
	function(e, t) {
		"function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.store = t()
	}(this, function() {
		function e() {
			try {
				return o in i && i[o]
			} catch (e) {
				return !1
			}
		}
		var t, n = {},
			i = window,
			s = i.document,
			o = "localStorage",
			r = "script";
		if (n.disabled = !1, n.version = "1.3.17", n.set = function() {}, n.get = function() {}, n.has = function(e) {
				return void 0 !== n.get(e)
			}, n.remove = function() {}, n.clear = function() {}, n.transact = function(e, t, i) {
				null == i && (i = t, t = null), null == t && (t = {});
				var s = n.get(e, t);
				i(s), n.set(e, s)
			}, n.getAll = function() {}, n.forEach = function() {}, n.serialize = function(e) {
				return JSON.stringify(e)
			}, n.deserialize = function(e) {
				if ("string" != typeof e) return void 0;
				try {
					return JSON.parse(e)
				} catch (t) {
					return e || void 0
				}
			}, e()) t = i[o], n.set = function(e, i) {
			return void 0 === i ? n.remove(e) : (t.setItem(e, n.serialize(i)), i)
		}, n.get = function(e, i) {
			var s = n.deserialize(t.getItem(e));
			return void 0 === s ? i : s
		}, n.remove = function(e) {
			t.removeItem(e)
		}, n.clear = function() {
			t.clear()
		}, n.getAll = function() {
			var e = {};
			return n.forEach(function(t, n) {
				e[t] = n
			}), e
		}, n.forEach = function(e) {
			for (var i = 0; i < t.length; i++) {
				var s = t.key(i);
				e(s, n.get(s))
			}
		};
		else if (s.documentElement.addBehavior) {
			var a, l;
			try {
				l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + r + ">document.w=window</" + r + '><iframe src="/favicon.ico"></iframe>'), l.close(), a = l.w.frames[0].document, t = a.createElement("div")
			} catch (d) {
				t = s.createElement("div"), a = s.body
			}
			var c = function(e) {
					return function() {
						var i = Array.prototype.slice.call(arguments, 0);
						i.unshift(t), a.appendChild(t), t.addBehavior("#default#userData"), t.load(o);
						var s = e.apply(n, i);
						return a.removeChild(t), s
					}
				},
				u = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
				D = function(e) {
					return e.replace(/^d/, "___$&").replace(u, "___")
				};
			n.set = c(function(e, t, i) {
				return t = D(t), void 0 === i ? n.remove(t) : (e.setAttribute(t, n.serialize(i)), e.save(o), i)
			}), n.get = c(function(e, t, i) {
				t = D(t);
				var s = n.deserialize(e.getAttribute(t));
				return void 0 === s ? i : s
			}), n.remove = c(function(e, t) {
				t = D(t), e.removeAttribute(t), e.save(o)
			}), n.clear = c(function(e) {
				var t = e.XMLDocument.documentElement.attributes;
				for (e.load(o); t.length;) e.removeAttribute(t[0].name);
				e.save(o)
			}), n.getAll = function() {
				var e = {};
				return n.forEach(function(t, n) {
					e[t] = n
				}), e
			}, n.forEach = c(function(e, t) {
				for (var i, s = e.XMLDocument.documentElement.attributes, o = 0; i = s[o]; ++o) t(i.name, n.deserialize(e.getAttribute(i.name)))
			})
		}
		try {
			var h = "__storejs__";
			n.set(h, h), n.get(h) != h && (n.disabled = !0), n.remove(h)
		} catch (d) {
			n.disabled = !0
		}
		return n.enabled = !n.disabled, n
	});
var namespace;
! function() {
	var hasBackboneJs = "undefined" != typeof Backbone,
		root = this,
		loadDsl = function() {},
		unloadDsl = function() {};
	hasBackboneJs && (loadDsl = function(e, t) {
		var n = function(n, i) {
				i.className = t + "." + n, e[n] = Backbone.Model.extend({
					defaults: i
				})
			},
			i = function(t, n) {
				e[t] = Backbone.View.extend(n)
			};
		return [n, i]
	}), namespace = function(name, publics) {
		for (var path = name.split("."), cpath = "", i = 0; i < path.length; i++) cpath += path[i], "undefined" == typeof eval("this." + cpath) && eval(cpath + "={}"), cpath += ".";
		var ns = eval(name),
			dsl = loadDsl(ns, name);
		"function" == typeof publics && (publics = publics.apply(root, dsl)), unloadDsl();
		for (var key in publics) ns[key] = publics[key]
	}
}(), namespace("MC.Utils.Api", function() {
		function e(e, t, n) {
			var i = MC.Config.get("accessToken"),
				s = MC.Config.get("apiEndpoint") + t + "?access_token=" + i;
			return (MC.Config.isDesktop() || MC.Config.isPartnerType2()) && (s += "&license_key=" + MC.Utils.Store.get("license_key")), MC.Config.isWidget() && (s += "&siteid=" + MC.Utils.Helpers.getParamByName("siteid")), MC.Config.isPartner() && (s += "&partner_key=" + MC.Utils.Helpers.getParamByName("partner_key")), $.ajax({
				type: e,
				url: s,
				data: n || {}
			})
		}

		function t(t, n) {
			return _.partial(e, t, n)
		}
		MC.Config;
		return {
			partnerAdverts: {
				get: t("GET", "api/partner_adverts")
			},
			priceRequests: {
				post: t("POST", "api/price_requests")
			},
			grades: {
				get: t("GET", "api/grades.php")
			},
			licenses: {
				check: t("POST", "api/licenses/check"),
				activate: t("POST", "api/licenses/activate"),
				request: t("POST", "api/licenses/request")
			}
		}
	}), namespace("MC.Utils.Cookie", {
		get: function(e) {
			for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
				for (var s = n[i];
					" " == s.charAt(0);) s = s.substring(1, s.length);
				if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
			}
			return null
		},
		set: function(e, t, n) {
			if (n) {
				var i = new Date;
				i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
				var s = "; expires=" + i.toGMTString()
			} else var s = "";
			document.cookie = e + "=" + t + s + "; path=/"
		}
	}), _.mixin({
		format: function() {
			var e = arguments,
				t = _.first(e),
				n = _.rest(e);
			return t.replace(/\{\{|\}\}|\{(\d+)\}/g, function(e, t) {
				return "{{" == e ? "{" : "}}" == e ? "}" : n[t]
			})
		},
		startsWith: function(e, t) {
			return e.slice(0, t.length) == t
		},
		isEmpty: function(e) {
			return !e || 0 === e.length
		},
		isBlank: function(e) {
			return !e || /^\s*$/.test(e)
		},
		findKeyByValue: function(e, t) {
			var n;
			return _.each(e, function(e, i) {
				e === t && (n = i)
			}), n
		}
	}), namespace("MC.Utils.Helpers", function() {
		var e = {};
		return e.getParamByName = function(t) {
			return e.getParamByNameFromString(location.search, t)
		}, e.getParamByNameFromString = function(e, t) {
			t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var n = new RegExp("[\\?&]" + t + "=([^&#]*)"),
				i = n.exec(e);
			return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
		}, e.replaceOrAddParam = function(t, n, i) {
			if (_.isBlank(t) || _.isBlank(n) || _.isBlank(i)) return t;
			if (e.getParamByNameFromString(t, n).length > 0) {
				t.replace(/(m=)[^\&]+/, "$123");
				var s = new RegExp("(" + n + "=)[^&]+");
				t = t.replace(s, "$1" + i)
			} else t += -1 != t.indexOf("?") ? _.format("&{0}={1}", n, i) : _.format("?{0}={1}", n, i);
			return t
		}, e.removeParam = function(e, t) {
			var n, i = e.split("?")[0],
				s = [],
				o = -1 !== e.indexOf("?") ? e.split("?")[1] : "";
			if ("" !== o) {
				s = o.split("&");
				for (var r = s.length - 1; r >= 0; r -= 1) n = s[r].split("=")[0], n === t && s.splice(r, 1);
				i = i + "?" + s.join("&")
			}
			return i
		}, e.resultNumFormat = function(e, t) {
			var n = parseFloat(e.toString().replace(",", ".") || 0);
			return n = _.isNaN(n) ? 0 : n, n = n.toFixed(void 0 !== t ? t : n > 10 ? 0 : 2), n.toString().replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
		}, e.priceNumFormat = function(e) {
			var t = parseFloat(e || 0);
			return t = _.isNaN(t) ? 0 : t, t.toFixed().toString().replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
		}, e.highlight = function(t, n, i) {
			e.clearHighlight(t);
			var s = t.text(),
				o = _.format('<span class="js-highlight search-highlight {0}">$1</span>', i);
			s = s.replace(new RegExp("(" + n + ")", "gi"), o), t.html(s)
		}, e.clearHighlight = function(e) {
			e.text(e.text().replace(/(<([^>]+)>)/gi, ""))
		}, e.clearAllHighlight = function() {
			$(".js-highlight").each(function(t, n) {
				e.clearHighlight($(n).parent())
			})
		}, e
	}), namespace("MC.Utils.ImagePreloader", function() {
		function e(e) {
			if (document.images) {
				var t = new Image;
				t.src = e
			}
		}

		function t() {
			_.each(MC.Views.Details.Pane.Images, function(t) {
				e(t)
			})
		}
		return {
			preloadImg: e,
			preloadAll: t
		}
	}), namespace("MC.Utils.LengthCalc", function() {
		function e(e) {
			return {
				a: t(e.a),
				b: t(e.b),
				d: t(e.d),
				m: t(e.m),
				n: t(e.n),
				p: t(e.p),
				t: t(e.t),
				M: t(e.M)
			}
		}

		function t(e) {
			return e = e.toString().replace(",", "."), parseFloat(e)
		}
		var n = 3.14013;
		return {
			pipeCircle: function(t) {
				return t = e(t), t.M / ((t.d - t.t) * t.t * t.p * .00314013)
			},
			circle: function(t) {
				return t = e(t), 4e3 * t.M / (n * t.d * t.d * t.p)
			},
			pipeProf: function(t) {
				return t = e(t), 1e3 * t.M / (t.a + t.b - 2 * t.t) * 2 * t.t * t.p
			},
			corner: function(t) {
				return t = e(t), 1e3 * t.M / ((t.a + t.b - t.t) * t.t * t.p)
			},
			channel: function(t) {
				return t = e(t), t.M / t.m
			},
			armature: function(t) {
				return t = e(t), 4e3 * t.M / (n * t.d * t.d * 7.85)
			},
			square: function(t) {
				return t = e(t), 1e3 * t.M / (t.a * t.a * t.p)
			},
			hexahedron: function(t) {
				return t = e(t), 1e3 * t.M / (.8663 * t.a * t.a * t.p)
			},
			balk: function(t) {
				return t = e(t), t.M / t.m
			},
			ribbon: function(t) {
				return t = e(t), 1e3 * t.M / (t.a * t.t * t.p)
			}
		}
	}), namespace("MC.Utils.SquareCalc", {
		list: function(e) {
			return parseFloat(e.a) * parseFloat(e.b) * parseFloat(e.n) / 1e6
		}
	}), namespace("MC.Utils.Store", {
		set: function(e, t) {
			store.set(e, t)
		},
		get: function(e) {
			return store.get(e)
		},
		remove: function(e) {
			store.remove(e)
		},
		has: function(e) {
			return store.has(e)
		}
	}), namespace("MC.Utils.WeightCalc", function() {
		function e(e) {
			return {
				a: t(e.a),
				b: t(e.b),
				d: t(e.d),
				l: t(e.l),
				m: t(e.m),
				n: t(e.n),
				p: t(e.p),
				t: t(e.t)
			}
		}

		function t(e) {
			return e = e.toString().replace(",", "."), parseFloat(e)
		}
		var n = 3.14013;
		return {
			pipeCircle: function(t) {
				return t = e(t), (t.d - t.t) * t.t * t.l * t.p * .00314013
			},
			list: function(t) {
				return t = e(t), t.a * t.b * t.t * t.p * t.n / 1e6
			},
			circle: function(t) {
				return t = e(t), n * t.d * t.d * t.l * t.p / 4e3
			},
			pipeProf: function(t) {
				return t = e(t), 2 * (t.a + t.b - 2 * t.t) * t.t * t.p * t.l / 1e3
			},
			corner: function(t) {
				return t = e(t), (t.a + t.b - t.t) * t.t * t.p * t.l / 1e3
			},
			channel: function(t) {
				return t = e(t), t.m * t.l
			},
			armature: function(t) {
				return t = e(t), n * t.d * t.d * t.l * 7.85 / 4e3
			},
			square: function(t) {
				return t = e(t), t.a * t.a * t.l * t.p / 1e3
			},
			hexahedron: function(t) {
				return t = e(t), .8663 * t.a * t.a * t.l * t.p / 1e3
			},
			balk: function(t) {
				return t = e(t), t.m * t.l
			},
			branch: function(t) {
				return t = e(t), t.m * t.n
			},
			flange: function(t) {
				return t = e(t), t.m * t.n
			},
			ribbon: function(t) {
				return t = e(t), t.a * t.b * t.t * t.p / 1e3
			}
		}
	}), namespace("MC.Core", {
		Collection: Backbone.Collection.extend({
			initialize: function() {
				MC.Core.Collection.__super__.initialize.apply(this, arguments)
			},
			getAll: function() {
				return this.models
			}
		})
	}), namespace("MC.Core", function() {
		var e = _.extend({}, Backbone.Events);
		return {
			Events: e
		}
	}), namespace("MC.Core", {
		Model: Backbone.Model.extend({
			initialize: function() {
				MC.Core.Model.__super__.initialize.apply(this, arguments)
			},
			extendJson: function(e) {
				return _.extend(this.toJSON(), e)
			}
		})
	}), namespace("MC.Core", {
		Router: Backbone.Router.extend({})
	}), namespace("MC.Core", function() {
		var e = Backbone.sync;
		Backbone.sync = function(t, n, i) {
			if (!n.localStorage) {
				var s = _.isFunction(n.url) ? n.url() : n.url,
					o = MC.Config.get("apiEndpoint") + s + "?access_token=" + MC.Config.get("accessToken");
				(MC.Config.isDesktop() || MC.Config.isPartnerType2()) && (o += "&license_key=" + MC.Utils.Store.get("license_key")), MC.Config.isWidget() && (o += "&siteid=" + MC.Utils.Helpers.getParamByName("siteid")), MC.Config.isPartner() && (o += "&partner_key=" + MC.Utils.Helpers.getParamByName("partner_key")), i || (i = {}), i = _.extend(i, {
					url: o
				})
			}
			return e(t, n, i)
		}
	}), namespace("MC.Core", function() {
		var e = Backbone.View.extend({
			initialize: function() {},
			clean: function() {
				MC.Common.Vent.off(null, null, this), this.$el.remove()
			},
			detachEvents: function() {},
			hide: function() {
				return this.$el.hide(), this
			},
			show: function() {
				return this.$el.show(), this
			},
			region: function(e) {
				var t = '[data-region="' + e + '"]',
					n = this.$el.find(t),
					i = n.first();
				if (n && n.length > 1) throw 'View contains more that 1 "' + e + '" region.';
				return i.length > 0 ? $(i) : null
			},
			clearChildStartWith: function(e) {
				var t = this.children;
				_.each(t, function(t, n) {
					_.startsWith(n, e) && t.clean()
				})
			},
			getChildByPrefix: function(e) {
				return _.filter(this.children, function(t, n) {
					return _.startsWith(n, e)
				})
			}
		});
		return {
			View: e
		}
	}),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/common/agreement"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="popup-cover">\n	<div class="popup-container">\n		<i class="icon-budicon-471 popup-close js-popup-close"></i>\n		<div class="popup-content text-centered js-popup-content agreement-cont">\n\n\n			<h2>\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435</h3>\n\n			<p>\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \n			\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0441\u0430\u0439\u0442\u0430 www.metal-calculator.ru (\u0434\u0430\u043b\u0435\u0435 \u2014 \xab\u0421\u0430\u0439\u0442\xbb).</p>\n			\n			<h3>1.\u041e\u0431\u0449\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f</h3>\n			\n			<p>1.1. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0421\u0430\u0439\u0442\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u043e\u0440\u043c\u0430\u043c\u0438 \n			\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.</p>			\n			<p>1.2. \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u043e\u0439. \u041f\u043e\u043b\u0443\u0447\u0430\u044f \u0434\u043e\u0441\u0442\u0443\u043f \n			\u043a \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c \u0421\u0430\u0439\u0442\u0430 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0432\u0448\u0438\u043c\u0441\u044f \u043a \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \n			\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044e.</p>\n			<p>1.3. \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0421\u0430\u0439\u0442\u0430 \u0432\u043f\u0440\u0430\u0432\u0435 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u043e\u0434\u043d\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \n			\u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f. \u0422\u0430\u043a\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0432 \u0441\u0438\u043b\u0443 \n			\u043f\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0438 3 (\u0422\u0440\u0435\u0445) \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \n			\u043d\u0430 \u0441\u0430\u0439\u0442\u0435. \u041f\u0440\u0438 \u043d\u0435\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0432\u043d\u0435\u0441\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u043e\u043d \u043e\u0431\u044f\u0437\u0430\u043d \n			\u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0421\u0430\u0439\u0442\u0443, \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \n			\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0421\u0430\u0439\u0442\u0430.</p>\n			\n			<h3>2. \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f</h3>\n			\n			<p>2.1. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \n			\u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043d\u0430\u0440\u0443\u0448\u0430\u044e\u0449\u0438\u0435 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0435 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0438\u043b\u0438 \u043d\u043e\u0440\u043c\u044b \n			\u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \n			\u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u0438/\u0438\u043b\u0438 \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u043f\u0440\u0430\u0432\u0430\u0445, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043b\u044e\u0431\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442 \n			\u0438\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0421\u0430\u0439\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0421\u0430\u0439\u0442\u0430.</p>\n			<p>2.2. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0421\u0430\u0439\u0442\u0430 \u0431\u0435\u0437 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435 \n			\u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f (\u0441\u0442\u0430\u0442\u044c\u044f 1270 \u0413.\u041a \u0420\u0424). \u0414\u043b\u044f \u043f\u0440\u0430\u0432\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \n			\u0421\u0430\u0439\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u043e\u043d\u043d\u044b\u0445 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043e\u0432 (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0439) \n			\u043e\u0442 \u041f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u0435\u0439.</p>\n			<p>2.3. \u041f\u0440\u0438 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0421\u0430\u0439\u0442\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0435 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \n			\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0421\u0430\u0439\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 (\u043f\u043e\u0434\u043f\u0443\u043d\u043a\u0442 1 \u043f\u0443\u043d\u043a\u0442\u0430 1 \u0441\u0442\u0430\u0442\u044c\u0438 \n			1274 \u0413.\u041a \u0420\u0424).</p>\n			<p>2.4. \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0438 \u0438\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0421\u0430\u0439\u0442\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0441\u0442\u0443\u043f\u0430\u0442\u044c \n			\u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0440\u0435\u0447\u0438\u0435 \u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \n			\u043e\u0431\u0449\u0435\u043f\u0440\u0438\u043d\u044f\u0442\u044b\u0445 \u043d\u043e\u0440\u043c \u043c\u043e\u0440\u0430\u043b\u0438 \u0438 \u043d\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438.</p>\n			<p>2.5. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0421\u0430\u0439\u0442\u0430 \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \n			\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043c \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \n			\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435.</p>\n			<p>2.6. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0421\u0430\u0439\u0442\u0430 \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \n			\u0438 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u044f\u043c\u044b\u0445 \u0438\u043b\u0438 \u043a\u043e\u0441\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u043f\u0435\u0440\u0435\u0434 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043b\u044e\u0431\u044b\u043c\u0438 \n			\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u0438\u043b\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0438\u043c\u0438 \u043f\u043e\u0442\u0435\u0440\u044f\u043c\u0438 \u0438\u043b\u0438 \u0443\u0431\u044b\u0442\u043a\u0430\u043c\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u043b\u044e\u0431\u044b\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435\u043c \n			\u0421\u0430\u0439\u0442\u0430, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432 \u0438 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u043c\u0438 \u043e \u0442\u0430\u043a\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0442\u043e\u0432\u0430\u0440\u0430\u043c\u0438 \n			\u0438\u043b\u0438 \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u0438, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438 \u043d\u0430 \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u044b \u0438\u043b\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043b\u0438\u0431\u043e \n			\u0438\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0432\u0441\u0442\u0443\u043f\u0438\u043b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u043d\u0443\u044e \u043d\u0430 \u0421\u0430\u0439\u0442\u0435 \n			\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438\u043b\u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b.</p>			\n			<p>2.7. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0432\u0441\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0421\u0430\u0439\u0442\u0430 \n			\u0438\u043b\u0438 \u043b\u044e\u0431\u0430\u044f \u0438\u0445 \u0447\u0430\u0441\u0442\u044c \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0439. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \n			\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0421\u0430\u0439\u0442\u0430 \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \n			\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0442\u0430\u043a\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0439.</p>\n			\n			<h3>3. \u041f\u0440\u043e\u0447\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f</h3>\n			\n			<p>3.1. \u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b, \u0432\u044b\u0442\u0435\u043a\u0430\u044e\u0449\u0438\u0435 \u0438\u0437 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \n			\u0441 \u043d\u0438\u043c, \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \n			\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.</p>\n			<p>3.2. \u041d\u0438\u0447\u0442\u043e \u0432 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \n			\u0438 \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u0430\u0433\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u0442\u043e\u0432\u0430\u0440\u0438\u0449\u0435\u0441\u0442\u0432\u0430, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u043f\u043e \n			\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043d\u0430\u0439\u043c\u0430, \u043b\u0438\u0431\u043e \u043a\u0430\u043a\u0438\u0445-\u0442\u043e \u0438\u043d\u044b\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439, \n			\u043f\u0440\u044f\u043c\u043e \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c.</p>\n			<p>3.3. \u041f\u0440\u0438\u0437\u043d\u0430\u043d\u0438\u0435 \u0441\u0443\u0434\u043e\u043c \u043a\u0430\u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \n			\u0438\u043b\u0438 \u043d\u0435 \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u043c \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u043d\u0435 \u0432\u043b\u0435\u0447\u0435\u0442 \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u043d\u044b\u0445 \n			\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f.</p>\n			<p>3.4. \u0411\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043a\u0435\u043c-\u043b\u0438\u0431\u043e \n			\u0438\u0437 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u043d\u0435 \u043b\u0438\u0448\u0430\u0435\u0442 \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0421\u0430\u0439\u0442\u0430 \u043f\u0440\u0430\u0432\u0430 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u044f\u0442\u044c \n			\u043f\u043e\u0437\u0434\u043d\u0435\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u0437\u0430\u0449\u0438\u0442\u0443 \u0441\u0432\u043e\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432 \u0438 \u0437\u0430\u0449\u0438\u0442\u0443 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432 \n			\u043d\u0430 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0435 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0421\u0430\u0439\u0442\u0430.</p>\n			\n			<p>\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043f\u0443\u043d\u043a\u0442\u0430\u043c\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \n			\u0438 \u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0438\u0445.</p>\n\n		</div>\n	</div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/common/license_activate_success"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="license-activate-success">\n  <i class="license-success-icon icon-budicon-500"></i>\n  <div class="license-success-text">\u041a\u043b\u044e\u0447 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d.<br/>\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439</div>\n  <button class="js-start btn btn-license-outline btn-license">\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435</button>\n</div>		\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/common/modal_view"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="modal-cover js-modal-cover">\n  <div class="modal-view">    \n    <div class="modal-header">\n      <div class="text-centered" data-region="modal:header"></div>\n      <i class="icon-budicon-471 popup-close js-modal-close"></i>\n    </div>\n    <div class="modal-content" data-region="modal:content"></div>\n    <div class="modal-footer" data-region="modal:footer"></div>\n  </div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/common/pulse_marker"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="pulse_holder">\n  <div class="pulse_marker ', tooltip ? "ttp" : "", '" ', tooltip ? 'title="' + tooltip + '"' : "", '>\n     <div class="pulse_rays"></div>\n  </div>\n</div>		\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/common/spinner"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<svg class="spinner" width="35px" height="35px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n   <circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/campaign_modal"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="request-modal">\n  <div class="request-modal-form">\n    <div class="form-container campaign-modal-container">      \n      \n      <p style="margin-top: 20px;">\u0415\u0441\u043b\u0438 \u0412\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u043d\u0430\u0448 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 - \n      \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0439\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430 \u043d\u0435\u0433\u043e \u0432 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0435 "\u041b\u0443\u0447\u0448\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u043e\u0435\u043a\u0442" \n      \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u043f\u0440\u043e\u043a\u0430\u0442\u0430.</p>\n\n      <p class="bold" style="margin-top: 20px;">\u041a\u0430\u043a \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c: </p>\n      \n      <p>1. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 <a target="_blank" href="http://www.metalinfo.ru/ru/events/competitions/internet/2016/participants/?code=4de3edf907b9cfd515ed45611c7349e0">\u043d\u0430 \u0441\u0430\u0439\u0442 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430</a></p>\n\n      <p>2. \u041d\u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0448\u0435\u0439\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 "\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u044b"</p>\n      <img src="/assets/campaign_screen.png" />\n      \n      <p>3. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c"</p>\n      <img src="/assets/campaign_screen2.png"/ >\n\n    </div>\n  </div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/main"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section-container">\n	<div class="section-wrap">\n		<div class="section-header strip-header" data-region="details:title"></div>\n    <div class="units-row units-split details-container">\n      <div class="unit-60" data-region="details:pane">details</div>\n      <div class="unit-40" data-region="details:form">form</div>\n    </div>\n    <div data-region="details:result">result</div>\n	</div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/metmet_info_modal"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="request-modal">\n  <div class="request-modal-form">\n    <div class="form-container campaign-modal-container">      \n\n      <p style="margin: 20px 0px 10px 0px;">\u041c\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u043f\u0440\u043e\u043a\u0430\u0442\u0430 - \n      MetMet.ru. <br/> \u0418 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0442\u0443\u0434\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043c\u044b\u0445 \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0445 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432. \n      \u0422\u0435\u043f\u0435\u0440\u044c \u0432 \u043d\u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043c\u0435\u043d\u044e.</p>\n\n      <img src="/assets/metmet_header_link.png" style="margin: 30px auto;width: 85%;display: block;">\n\n      <p>\n        <a href="http://metmet.ru/" target="_blank" \n          class="btn main-btn btn-green width-50 js-metmet-link">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 MetMet.ru</a>\n        <a href="#"\n          class="js-modal-close"\n          style="margin: 10px 0px 0px 18px;display: inline-block;padding: 7px;">\n          \u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u044f \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u044e \u043f\u043e\u0437\u0436\u0435\n        </a>\n      </p>\n\n    </div>\n  </div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/pane"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push(""), null == src ? __p.push("\n	<p>not found</p>\n") : __p.push('\n	<img class="pane-img ', cssClass, '" src="', src, '" />\n'), __p.push("\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/partner_advert"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="ads-container">\n  <div class="units-row units-split">\n    <div class="unit-', image ? "60" : "100", ' ads-container-details">\n      <div>\n        <a class="ads-container-details-title js-link" target="_blank" href="', link, '">', title, "</a>\n      </div>\n      <div>", text, '</div>\n      <div>\n        <div class="left ads-container-details-phone">', phone, '</div>      \n        <div class="right">\n          '), showRequestBtn ? __p.push('\n            <a class="btn-link js-price-request">\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443</a> \n          ') : __p.push('\n            <a class="ads-container-details-link js-link" target="_blank" href="', link, '">\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442</a>\n          '), __p.push("\n        </div>      \n      </div>\n    </div>\n    "), image && __p.push('\n      <div class="unit-40 ads-container-img">\n        <a target="_blank" href="', link, '">\n          <img src="', image, '"/>  \n        </a>\n      </div>\n    '), __p.push("\n  </div>\n</div>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/price_request"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<a class="btn-link m-show-price js-offers-request-btn">\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443</a>\n<div class="result-block-offers" data-region="price-request:offers"></div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/price_request_form"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="request-modal">\n  '), showCompanies && __p.push('\n    <div class="request-modal-company-block">\n      <div><b>\u041d\u0430\u0439\u0434\u0435\u043d \u043e\u0434\u0438\u043d \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a:</b></div>\n      <div>\u041e\u041e\u041e "\u041c\u0418\u0414\u0410\u0421 \u0421\u0415\u0420\u0412\u0418\u0421", \u0433.\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a <br />\n      \u0422\u0435\u043b. (351) 216-34-12, 216-34-13</div>    \n    </div>\n  '), __p.push('\n  <div class="request-modal-form">\n    <div class="form-container">\n      <form class="forms">\n        \n        <label>\n          <span class="field-label">\u0418\u043c\u044f</span>\n          <span class="error-text" data-error-name="name"></span>          \n          <input type="text" name="name" class="width-100"/>\n        </label>\n\n        <label>\n          <span class="field-label">\u0422\u0435\u043b\u0435\u0444\u043e\u043d</span>\n          <span class="error-text" data-error-name="phone"></span>          \n          <input type="text" name="phone" class="width-100"/>\n        </label>\n\n        <label>\n          <span class="field-label">Email</span>\n          <span class="error-text" data-error-name="email"></span>          \n          <input type="email" name="email" class="width-100"/>\n        </label>\n\n        <label>\n          <span class="field-label">\u0417\u0430\u044f\u0432\u043a\u0430</span>\n          <span class="error-text" data-error-name="request_text"></span>          \n          <textarea rows="3" name="request_text" class="width-100">', request_text, '</textarea>\n        </label>\n\n        <a href="#" class="js-send-btn main-btn btn btn-green width-100">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441</a>\n\n      </form>\n    </div>\n  </div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/details/result"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="units-row units-split result-container">\n  <div style="overflow: visible; height: 0px;" data-region="details:partner_download_btn"></div>\n  <div style="position: relative;">\n    <div class="unit-40" data-region="details:c1">\n    	'), MC.Config.isWidget() ? __p.push('\n    		<div style="margin: 8px 0px 0px 18px;">\n    			<a class="btn btn-link js-widget-click" href="', MC.Config.downloadAppLink, '">\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440</a>\n    		</div>\n    	') : __p.push(isPartner ? '\n        <div style="min-height: 1px;" data-region="details:result:partner_logo"></div>\n      ' : "\n        &nbsp;\n    	"), __p.push('\n    </div>\n    <div class="unit-60" data-region="details:c2">\n    	<ul class="blocks-5 result-blocks">\n      	\n      	<li class="block-price-square">\n    		  <div data-region="details:result:s">\n    		  	<div class="result-item-block">\n    		  		<span class="result-item-label">\u041f\u043b\u043e\u0449\u0430\u0434\u044c</span>\n    			    <span class="result-item-value" data-region="details:result:square"></span>\n    		  	</div>\n    		  </div>\n      	</li>\n      	\n      	<li class="block-price-weight" data-region="details:result:w">\n    		  <div class="result-item-block">\n    		  	<span class="result-item-label" data-region="details:result:w:label">\u0412\u0435\u0441</span>\n    		  	<span class="result-item-value" data-region="details:result:weight"></span>\n    		  </div>\n      	</li>\n      	\n      	<li class="block-price-input" data-region="details:result:price-block">\n    		  <div class="result-item-block">\n    		  	<span class="price-input-symb">&times;</span>\n    		  	<span class="result-item-label">\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430 \u0437\u0430 \u043a\u0433.</span>\n    		  	<div>\n    					<input type="text" class="price-input js-mprice"/> \n    					<span class="input-append price-input-append">\u0440./\u043a\u0433.</span>					\n    		  	</div>\n    		  </div>      		\n      	</li>\n      	\n      	<li class="block-price-summ" data-region="details:result:summ-block">\n    		  <div class="result-item-block">\n    		  	<span class="price-summ-symb">=</span>			  \n    	  		<span class="result-item-label">\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c</span>\n    		    <span class="result-item-value" data-region="details:result:summ">0 \u0440\u0443\u0431</span>			  	\n    		  </div>\n      	</li>\n      	\n      	<li class="block-price-btn" data-region="details:result:price-btn">\n      		<a class="btn-link m-show-price js-show-price">\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0446\u0435\u043d\u0443</a>\n      	</li>\n\n        <li class="block-price-request" data-region="details:result:price-request-block">\n        </li>\n    	</ul>  \n    </div>\n  </div>\n  <div class="unit-100" data-region="details:partner_advert"></div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/forms/input_field"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<label>\n	<span class="field-label">', label, '</span>\n	<input class="width-100" name="', type, '" type="text">\n  <span class="input-append">', disp, "</span>\n</label>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/forms/main"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="form-container">\n  <div class="calc-togler-wrap" data-region="details:form:calc_togler"></div>\n  <form class="forms" data-region="details:form:fields"></form>  \n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/forms/select_field"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<label for="country">\n  	<span class="field-label">', label, '</span>\n    <select class="width-100" name="', type, '" data-region="options">\n      '), _.each(options, function(e) {
				__p.push('\n        <option value="', e.value, '" ', 1 == e.selected ? "selected" : "", ">", e.text, "</option>\n      ")
			}), __p.push("\n    </select>\n</label>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/gosts/details"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="height100 scrolled" data-region="gosts:details"/>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/gosts/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section-header strip-header">', title, '</div>\n<div class="gosts-details-list">\n  <ol>\n    \n    '), _.each(docs, function(e, t) {
				__p.push(" \n    	"), 5 > t || showAll ? __p.push('\n      	<li><a target="_blank" href="', e.url, '">', e.name, "</a></li>\n    	") : __p.push('\n      	<li style="display:none;"><a target="_blank" href="', e.url, '">', e.name, "</a></li>    		\n    	"), __p.push("\n    ")
			}), __p.push("\n\n  	"), docs.length > 5 && !showAll && __p.push('\n      <a class="btn-link js-btn-showall" href="#">\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435</a>\n  	'), __p.push("\n\n  </ol>\n</div>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/gosts/sidebar"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section scrolled">\n	<div class="section-search-wrap height100">\n		<div class="section-search">\n			<i class="section-search-icon icon icon-budicon-489"/>\n			<input class="js-search section-search-input" type="text" placeholder="\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0413\u041e\u0421\u0422\u0430\u043c"/>\n			<i class="section-search-clear-icon icon icon-budicon-471 js-search-clear"/>\n		</div>\n		<div class="section-list-wrap">\n			<nav class="nav nav-stacked section-nav scrolled height100">\n			  <ul data-region="gosts-list"></ul>\n			  <ul data-region="gosts:search_list"></ul>\n			</nav>\n		</div>\n	</div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/grades/details"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="grade-details" data-region="grade:details"/>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/grades/grade_details"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push(""), backUrl && __p.push('\n  <div style="margin-left:8px;">\n    <a class="btn-link btn-gray btn-mid btn-clear" href="', backUrl, '">\n      <i class="icon-budicon-521" style="font-size: 12px; position: relative; top: 2px;" />\n      \u041d\u0430\u0437\u0430\u0434\n    </a>    \n  </div>\n'), __p.push("\n", body, "\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/grades/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section ">\n	<div class="section-search-wrap height100">\n		<div class="section-search">\n			<i class="section-search-icon icon icon-budicon-489"/>\n			<input class="js-search section-search-input" type="text" placeholder="\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u0430\u0440\u043a\u0430\u043c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432"/>\n			<i class="section-search-clear-icon icon icon-budicon-471 js-search-clear"/>\n		</div>\n		<div class="section-list-wrap scrolled">\n			<nav class="nav grades-list" data-region="grades:list">\n				<div style="text-align: center; margin-top: 50px;">\n					', JST["app/templates/common/spinner"](), '\n				</div>\n			</nav>\n			<nav class="nav nav-stacked section-nav scrolled search-small" style="display:none;" data-region="grades:search_list">\n				<ul></ul>\n			</nav>			\n		</div>\n	</div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/grades/table"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push(""), backUrl && __p.push('\n  <div style="margin-left:8px;">\n    <a class="btn-link btn-gray btn-mid btn-clear" href="', backUrl, '">\n      <i class="icon-budicon-521" style="font-size: 12px; position: relative; top: 2px;" />\n      \u041d\u0430\u0437\u0430\u0434\n    </a>    \n  </div>\n'), __p.push('\n<div class="section-header strip-header">', title, '</div>\n<ul class="blocks-3 grades-blocks">\n  '), _.each(items, function(e) {
				__p.push(' \n    <li class="', liCssClass, '">\n      <a href="', e.href, '">', e.title, "</a>\n    </li>\n  ")
			}), __p.push("\n</ul>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/history/item"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push("<span>", text, "</span>\n<span>", grade, "</span>\n<small>\u0412\u0435\u0441: ", MC.Utils.Helpers.resultNumFormat(weight), ' \u043a\u0433.</small>\n<i class="history-item-icon icon icon-budicon-471 js-remove" />\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/history/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<ul class="list-flat history-list" data-region="history:list">\n</ul>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/arm"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>arm</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -129.000000)" stroke="#979797">\n            <circle id="arm" sketch:type="MSShapeGroup" cx="156.879165" cy="139" r="9"></circle>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/balk"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="19px" height="14px" viewBox="0 0 19 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>balk</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -473.000000)" stroke="#979797">\n            <path d="M153.177569,477.799988 C152.485958,476.382045 151.609246,474.866109 151.609246,474.866109 C151.346758,474.397419 150.671047,474 150.116205,474 L149.00463,474 C148.44714,474 148,474.448823 148,475.002473 L148,484.997527 C148,485.544239 148.449788,486 149.00463,486 L150.116205,486 C150.673695,486 151.339504,485.61223 151.609246,485.133891 C151.609246,485.133891 152.398764,483.768723 153.070386,482.417635 L159.929614,482.417635 C160.601236,483.768723 161.390754,485.133891 161.390754,485.133891 C161.653242,485.602581 162.328953,486 162.883795,486 L163.99537,486 C164.55286,486 165,485.551177 165,484.997527 L165,475.002473 C165,474.455761 164.550212,474 163.99537,474 L162.883795,474 C162.326305,474 161.660496,474.38777 161.390754,474.866109 C161.390754,474.866109 160.514042,476.382045 159.822431,477.799988 L153.177569,477.799988 Z" id="balk" sketch:type="MSShapeGroup"></path>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/branch"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>brunch</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -440.000000)" stroke="#979797">\n            <path d="M164,441.366192 C155.970795,441.366192 149.461838,447.875149 149.461838,455.904354 C149.461838,455.93626 149.46194,455.968142 149.462146,456 L159.600293,456 C159.600293,453.549246 161.561446,451.556544 164,451.505645 L164,441.366192 Z" id="brunch" sketch:type="MSShapeGroup"></path>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/brunch"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>brunch</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -440.000000)" stroke="#979797">\n            <path d="M164,441.366192 C155.970795,441.366192 149.461838,447.875149 149.461838,455.904354 C149.461838,455.93626 149.46194,455.968142 149.462146,456 L159.600293,456 C159.600293,453.549246 161.561446,451.556544 164,451.505645 L164,441.366192 Z" id="brunch" sketch:type="MSShapeGroup"></path>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/channel"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="19px" height="14px" viewBox="0 0 19 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>channel</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -379.000000)" stroke="#979797">\n            <path d="M164.707761,391.707255 C164.888714,391.525775 165,391.274796 165,390.997527 L165,381.002473 C165,380.455761 164.552371,380 164.000193,380 L160.999807,380 C160.443717,380 160,380.448823 160,381.002473 L160,387 L153,387 L153,381.002473 C153,380.455761 152.552371,380 152.000193,380 L148.999807,380 C148.443717,380 148,380.448823 148,381.002473 L148,390.997527 C148,391.271327 148.112271,391.522316 148.29372,391.704669 C148.473793,391.889051 148.723804,392 148.99996,392 L164.00004,392 C164.272691,392 164.522702,391.888072 164.704539,391.707113 Z" id="channel" sketch:type="MSShapeGroup"></path>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/circle"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>circle</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -190.000000)" stroke="#979797">\n            <circle id="circle" sketch:type="MSShapeGroup" cx="156.879165" cy="200" r="9"></circle>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/corner"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>corner</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -344.000000)" stroke="#979797">\n            <path d="M151.500532,361 L163.999128,361 C164.555369,361 165,360.552371 165,360.000193 L165,356.999807 C165,356.443717 164.551894,356 163.999128,356 L154,356 L154,346.000872 C154,345.444631 153.552371,345 153.000193,345 L149.999807,345 C149.443717,345 149,345.448106 149,346.000872 L149,359.999128 C149,360.138327 149.028032,360.270536 149.078721,360.390536 C149.129083,360.510435 149.202305,360.61804 149.2928,360.708283 C149.474085,360.888984 149.723894,361 149.999807,361 L151.500532,361 Z" id="corner" sketch:type="MSShapeGroup"></path>\n        </g>\n    </g>\n</svg>	\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/flange"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>flange</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-146.000000, -500.000000)">\n            <g id="flange" sketch:type="MSLayerGroup" transform="translate(147.000000, 501.000000)">\n                <path d="M9.87916512,18 C14.8497279,18 18.8791651,13.9705627 18.8791651,9 C18.8791651,4.02943725 14.8497279,0 9.87916512,0 C4.90860238,0 0.879165125,4.02943725 0.879165125,9 C0.879165125,13.9705627 4.90860238,18 9.87916512,18 Z M9.87916512,12.770574 C11.9615956,12.770574 13.6497391,11.0824305 13.6497391,9 C13.6497391,6.91756949 11.9615956,5.22942602 9.87916512,5.22942602 C7.79673462,5.22942602 6.10859115,6.91756949 6.10859115,9 C6.10859115,11.0824305 7.79673462,12.770574 9.87916512,12.770574 Z" stroke="#979797" stroke-width="2" sketch:type="MSShapeGroup"></path>\n                <path d="M16.3999939,9.5 C16.6761363,9.5 16.8999939,9.27614237 16.8999939,9 C16.8999939,8.72385763 16.6761363,8.5 16.3999939,8.5 C16.1238515,8.5 15.8999939,8.72385763 15.8999939,9 C15.8999939,9.27614237 16.1238515,9.5 16.3999939,9.5 Z M3.3999939,9.5 C3.67613627,9.5 3.8999939,9.27614237 3.8999939,9 C3.8999939,8.72385763 3.67613627,8.5 3.3999939,8.5 C3.12385152,8.5 2.8999939,8.72385763 2.8999939,9 C2.8999939,9.27614237 3.12385152,9.5 3.3999939,9.5 Z M15.0568481,4.96446609 C15.2521103,4.76920395 15.2521103,4.45262146 15.0568481,4.25735931 C14.861586,4.06209717 14.5450035,4.06209717 14.3497414,4.25735931 C14.1544792,4.45262146 14.1544792,4.76920395 14.3497414,4.96446609 C14.5450035,5.15972824 14.861586,5.15972824 15.0568481,4.96446609 Z M5.86445999,14.1568542 C6.05972214,13.9615921 6.05972214,13.6450096 5.86445999,13.4497475 C5.66919784,13.2544853 5.35261536,13.2544853 5.15735321,13.4497475 C4.96209106,13.6450096 4.96209106,13.9615921 5.15735321,14.1568542 C5.35261536,14.3521164 5.66919784,14.3521164 5.86445999,14.1568542 Z M14.3497414,14.1568542 C14.5450035,14.3521164 14.861586,14.3521164 15.0568481,14.1568542 C15.2521103,13.9615921 15.2521103,13.6450096 15.0568481,13.4497475 C14.861586,13.2544853 14.5450035,13.2544853 14.3497414,13.4497475 C14.1544792,13.6450096 14.1544792,13.9615921 14.3497414,14.1568542 Z M5.15735321,4.96446609 C5.35261536,5.15972824 5.66919784,5.15972824 5.86445999,4.96446609 C6.05972214,4.76920395 6.05972214,4.45262146 5.86445999,4.25735931 C5.66919784,4.06209717 5.35261536,4.06209717 5.15735321,4.25735931 C4.96209106,4.45262146 4.96209106,4.76920395 5.15735321,4.96446609 Z M9.87916512,16 C10.1553075,16 10.3791651,15.7761424 10.3791651,15.5 C10.3791651,15.2238576 10.1553075,15 9.87916512,15 C9.60302275,15 9.37916512,15.2238576 9.37916512,15.5 C9.37916512,15.7761424 9.60302275,16 9.87916512,16 Z M9.87916512,3 C10.1553075,3 10.3791651,2.77614237 10.3791651,2.5 C10.3791651,2.22385763 10.1553075,2 9.87916512,2 C9.60302275,2 9.37916512,2.22385763 9.37916512,2.5 C9.37916512,2.77614237 9.60302275,3 9.87916512,3 Z" id="Path" fill="#979797" sketch:type="MSShapeGroup"></path>\n            </g>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/hix"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="15px" viewBox="0 0 18 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>hix</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -410.000000)" stroke="#979797">\n            <polygon id="hix" sketch:type="MSShapeGroup" transform="translate(156.879165, 417.437989) rotate(-330.000000) translate(-156.879165, -417.437989) " points="156.879165 409.437989 163.807368 413.437989 163.807368 421.437989 156.879165 425.437989 149.950962 421.437989 149.950962 413.437989 "></polygon>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="19px" height="16px" viewBox="0 0 19 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>list</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -254.000000)" stroke="#979797">\n            <rect id="list" sketch:type="MSShapeGroup" x="148.379165" y="255" width="17" height="14" rx="1"></rect>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/pipe-circle"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>pipe-circle</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-147.000000, -283.000000)" stroke="#979797">\n            <circle id="pipe-circle" sketch:type="MSShapeGroup" cx="156.879165" cy="293" r="9"></circle>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/pipe-prof"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>pipe-prof</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -314.000000)" stroke="#979797">\n            <rect id="pipe-prof" sketch:type="MSShapeGroup" x="148.879165" y="315" width="16" height="16" rx="1"></rect>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/ribbon"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>ribbon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-149.000000, -223.000000)" stroke="#979797">\n            <rect id="ribbon" sketch:type="MSShapeGroup" transform="translate(156.879165, 232.000000) rotate(-270.000000) translate(-156.879165, -232.000000) " x="148.379165" y="225" width="17" height="14" rx="1"></rect>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/icons/square"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n    <!-- Generator: Sketch 3.3 (11970) - http://www.bohemiancoding.com/sketch -->\n    <title>square</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Icons" sketch:type="MSArtboardGroup" transform="translate(-148.000000, -160.000000)" stroke="#979797">\n            <rect id="square" sketch:type="MSShapeGroup" x="148.879165" y="161" width="16" height="16" rx="1"></rect>\n        </g>\n    </g>\n</svg>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/license"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="app-container height100">\n	<div class="app-content-wrap license-container">\n		<div class="units-row units-split height100 ">\n\n			<div class="unit-100 height100 license-form">\n				<div class="license-form-logo">\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440-\u043c\u0435\u0442\u0430\u043b\u043b\u0430.\u0440\u0444</div>\n\n				<div data-region="license:enter-key" class="hidden">\n					<div class="license-form-desc">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, <br/> \n						\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u0432\u044b\u0441\u043b\u0430\u043d \u0432\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443.</div>\n					<div class="license-form-input">\n						<input type="text" class="width-30" placeholder="\u041a\u043b\u044e\u0447" name="key"/>\n						<button class="btn btn-license js-key-btn">\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c</button>\n						<div class="license-form-spin js-key-spinner hidden">\n							', JST["app/templates/common/spinner"](), '						\n						</div>\n						<div class="license-form-error js-key-error"></div>\n						<div style="font-size:12px; margin-top:25px;line-height:18px;">\n          		<input type="checkbox" checked id="agree-checkbox" name="agree-checkbox" class="js-agree-checkbox">\n          		<label for="agree-checkbox">\u042f \u043f\u0440\u0438\u043c\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f \n          		<a href="#" class="js-show-agreement">\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f.</a></label>							\n						</div>												\n					</div>					\n					<div class="license-form-bottom-info">\n						<a href="#" class="btn btn-license btn-license-outline js-get-key">\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u044e\u0447 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e</a>\n					</div>				\n				</div>\n\n\n				<div data-region="license:get-key">\n					<div class="license-form-desc">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439<br/> \n						\u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0441\u043b\u0430\u043d \u043a\u043b\u044e\u0447.</div>\n					<div class="license-form-input">\n						<input type="text" class="width-30" placeholder="Email" name="email" />\n						<button class="btn btn-license js-email-btn">\u0412\u044b\u0441\u043b\u0430\u0442\u044c \u043a\u043b\u044e\u0447</button>\n						<div class="license-form-spin js-email-spinner hidden">\n							', JST["app/templates/common/spinner"](), '						\n						</div>						\n						<div class="license-form-error js-email-error"></div>						\n					</div>\n					<div class="license-form-bottom-info">\n						<a href="#" class="btn btn-license btn-license-outline js-enter-key">\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447</a>\n					</div>				\n				</div>\n\n\n			</div>		\n\n		</div>	\n	</div>	\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/main"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="app-container height100">\n\n	<div class="app-header">\n		<ul>\n			<li><a href="#/">\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u041c\u0435\u0442\u0430\u043b\u043b\u0430</a></li>\n			<li><a href="#/info/steels">\u041c\u0430\u0440\u043e\u0447\u043d\u0438\u043a \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u0432</a></li>\n			<li><a href="#/info/gosts">\u0413\u041e\u0421\u0422\u044b</a></li>\n			'),  __p.push('\n			<li class="header-sm" style="float: right;">\n				<a class="right js-history">\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432</a>\n			</li>\n		</ul>\n	</div>\n\n	<div class="app-content-wrap">\n		<div class="units-row units-split height100">\n			<div data-region="sidebar" class="unit-30 app-sidebar height100"></div>\n			<div data-region="details" class="unit-70 app-content section section-details non-border" ></div>	\n			<div data-region="right" class="app-right-pane section"></div>	\n		</div>	\n	</div>	\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/metalls/item"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<a target="1" href="#" onclick="return false;">', title, "</a>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/metalls/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section-header">\u041c\u0435\u0442\u0430\u043b\u043b</div>\n<div class="section-container">\n	<nav class="nav nav-stacked section-nav">\n	  <ul data-region="metall-list">\n	  </ul>\n	</nav>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/sidebars/calculator"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="units-row units-split height100">\n	<div class="unit-40 section" data-region="metalls"></div>\n	<div class="unit-60 section" data-region="sortaments"></div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/sidebars/grades"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="units-row units-split height100">\n	<div class="unit-100 section" data-region="grades">g</div>\n</div>\n');
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/sortaments/item"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<a onclick="return false;" href="#">\n	', title, "\n</a>\n");
			return __p.join("")
		}
	}.call(this),
	function() {
		this.JST || (this.JST = {}), this.JST["app/templates/sortaments/list"] = function(obj) {
			var __p = [];
			with(obj || {}) __p.push('<div class="section-header">\u0421\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442</div>\n<div class="section-container">\n	<nav class="nav nav-stacked section-nav">\n	  <ul data-region="sortament-list">\n	  </ul>\n	</nav>\n</div>\n');
			return __p.join("")
		}
	}.call(this), namespace("MC.Common", {
		Vent: _.extend({}, MC.Core.Events)
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "",
			initialize: function() {
				MC.Models.Grade.__super__.initialize.apply(this, arguments)
			},
			defaults: {}
		});
		return {
			Grade: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			localStorage: new Backbone.LocalStorage("HistoryCollection"),
			initialize: function() {
				e.__super__.initialize.apply(this, arguments), MC.Managers.CollectionManager.injectTo(this)
			},
			defaults: {
				id: null,
				grade: null
			}
		});
		return {
			History: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: function() {
				return this.id ? "api/grades/" + this.id : "/api/grades.php?"+Math.random()
			},
			defaults: {},
			initialize: function() {
				MC.Models.MGrade.__super__.initialize.apply(this, arguments), MC.Managers.CollectionManager.injectTo(this), this._isBodyLoaded = !1
			},
			getBody: function(e) {
				var t = this;
				this._isBodyLoaded ? e(t._getNormalizedBody()) : this.fetch({
					success: function() {
						e(t._getNormalizedBody()), t._isBodyLoaded = !0
					}
				})
			},
			_getNormalizedBody: function() {
				var e = this.get("body").replace('bgcolor="#f0f0f0" />', 'bgcolor="#f0f0f0">').replace('cellpadding="4" />', 'cellpadding="4" >');
				return e
			},
			getUrl: function() {
				var e, t;
				return t = this.getMaterial(), t && (e = this.mMaterialGroupCollection.get(t.get("material_group_id"))), t && e ? _.format("#/info/steels/groups/{0}/materials/{1}/grades/{2}", e.get("id"), t.get("id"), this.get("id")) : ""
			},
			getMaterial: function() {
				return this.mMaterialCollection.get(this.get("material_id"))
			}
		});
		return {
			MGrade: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "/api/materials",
			initialize: function() {
				MC.Models.MMaterial.__super__.initialize.apply(this, arguments), MC.Managers.CollectionManager.injectTo(this)
			},
			defaults: {},
			getGrades: function() {
				return this.mGradeCollection.where({
					material_id: this.get("id")
				})
			},
			getUrl: function() {
				var e = this.getGroup();
				return e ? _.format("#/info/steels/groups/{0}/materials/{1}", e.get("id"), this.get("id")) : ""
			},
			getGroup: function() {
				return this.mMaterialGroupCollection.get(this.get("material_group_id"))
			}
		});
		return {
			MMaterial: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "/api/material_groups",
			defaults: {},
			initialize: function() {
				MC.Models.MMaterialGroup.__super__.initialize.apply(this, arguments), MC.Managers.CollectionManager.injectTo(this)
			},
			getMaterials: function() {
				return this.mMaterialCollection.where({
					material_group_id: this.get("id")
				})
			},
			getUrl: function() {
				return _.format("#/info/steels/groups/{0}", this.get("id"))
			}
		});
		return {
			MMaterialGroup: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "",
			initialize: function() {
				MC.Models.Metall.__super__.initialize.apply(this, arguments)
			},
			defaults: {},
			validate: function() {},
			parse: function(e) {
				return e
			}
		});
		return {
			Metall: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "/api/mprices",
			defaults: {
				metal: "",
				metal_id: "",
				sortament: "",
				sortament_id: "",
				grade: "",
				price: 0
			},
			initialize: function() {
				MC.Models.Mprice.__super__.initialize.apply(this, arguments)
			}
		});
		return {
			Mprice: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "",
			initialize: function() {
				MC.Models.Sortament.__super__.initialize.apply(this, arguments)
			},
			defaults: {},
			getFileds: function(e) {
				return _.filter(this.get("fields"), function(t) {
					return void 0 === t.calc_types || -1 != t.calc_types.indexOf(e)
				})
			}
		});
		return {
			Sortament: e
		}
	}), namespace("MC.Models", function() {
		var e = MC.Core.Model.extend({
			url: "/api/stats",
			defaults: {
				metall_id: null,
				sortament_id: null,
				payload: null,
				weight: 0,
				sum: 0,
				user_agent: null,
				ip: null
			},
			initialize: function() {
				e.__super__.initialize.apply(this, arguments)
			}
		});
		return {
			Stat: e
		}
	}), namespace("MC.Collections", {
		GradeCollection: MC.Core.Collection.extend({
			model: MC.Models.Grade,
			initialize: function() {
				MC.Collections.GradeCollection.__super__.initialize.apply(this, arguments)
			},
			forMetall: function(e) {
				return this.where({
					metall_id: e
				})
			}
		})
	}), namespace("MC.Collections", {
		HistoryCollection: MC.Core.Collection.extend({
			localStorage: new Backbone.LocalStorage("HistoryCollection"),
			model: MC.Models.History,
			initialize: function() {
				MC.Collections.HistoryCollection.__super__.initialize.apply(this, arguments)
			},
			comparator: function(e) {
				return -e.get("id")
			}
		})
	}), namespace("MC.Collections", {
		MGradeCollection: MC.Core.Collection.extend({
			url: "/api/grades.php?"+Math.random(), 
			model: MC.Models.MGrade,
			initialize: function() {
				MC.Collections.MGradeCollection.__super__.initialize.apply(this, arguments)
			},
			comparator: function(e) {
				return e.get("title")
			}
		})
	}), namespace("MC.Collections", {
		MMaterialCollection: MC.Core.Collection.extend({
			url: "/api/materials",
			model: MC.Models.MMaterial,
			initialize: function() {
				MC.Collections.MMaterialCollection.__super__.initialize.apply(this, arguments)
			},
			comparator: function(e) {
				return e.get("title")
			}
		})
	}), namespace("MC.Collections", {
		MMaterialGroupCollection: MC.Core.Collection.extend({
			url: "/api/material_groups",
			model: MC.Models.MMaterialGroup,
			initialize: function() {
				MC.Collections.MMaterialGroupCollection.__super__.initialize.apply(this, arguments)
			},
			comparator: function(e) {
				return e.get("title")
			}
		})
	}), namespace("MC.Collections", {
		MetallCollection: MC.Core.Collection.extend({
			model: MC.Models.Metall,
			initialize: function() {
				MC.Collections.MetallCollection.__super__.initialize.apply(this, arguments)
			}
		})
	}), namespace("MC.Collections", {
		MpriceCollection: MC.Core.Collection.extend({
			url: "/api/mprices",
			model: MC.Models.Mprice,
			initialize: function() {
				MC.Collections.MpriceCollection.__super__.initialize.apply(this, arguments)
			},
			getForCurrentState: function() {
				var e = MC.Managers.State,
					t = e.getCurrent(),
					n = this.chain().filter(function(n) {
						var i = n.get("grade");
						return i && -1 != i.indexOf(".") && (i = i.substring(0, i.indexOf("."))), n.get("metal_id") == t.metallId && n.get("sortament_id") == t.sortId && i == e.getActualGrade()
					}).first().value();
				return n ? n.get("price") : 0
			}
		})
	}), namespace("MC.Collections", {
		SortamentCollection: MC.Core.Collection.extend({
			model: MC.Models.Sortament,
			initialize: function() {
				MC.Collections.SortamentCollection.__super__.initialize.apply(this, arguments)
			},
			forMetall: function(e) {
				return this.filter(function(t) {
					return -1 != t.get("metall_ids").indexOf(e)
				})
			}
		})
	}), namespace("MC.Collections", {
		StatCollection: MC.Core.Collection.extend({
			url: "/api/stats",
			model: MC.Models.Stat,
			initialize: function() {
				MC.Collections.StatCollection.__super__.initialize.apply(this, arguments)
			}
		})
	}), namespace("MC.Managers.CollectionManager", function() {
		function e() {
			s = MC.Common.Vent, o.historyCollection.fetch(), o.mpriceCollection.fetch({
				success: function() {
					s.trigger("mprice:loaded")
				}
			}), MC.Utils.Api.grades.get().success(function(e) {
				o.mGradeCollection.set(e.grades), o.mMaterialCollection.set(e.materials), o.mMaterialGroupCollection.set(e.material_groups), s.trigger("grades:loaded"), MC.Managers.State.set("gradeLoaded", !0)
			})
		}

		function t() {
			return o
		}

		function n(e) {
			return t()[e]
		}

		function i(e, n) {
			var i = t();
			for (var s in i)(_.isUndefined(n) || _.contains(n, s)) && (e[s] = i[s])
		}
		var s, o = {
			metallCollection: new MC.Collections.MetallCollection(data_metalls),
			sortamentCollection: new MC.Collections.SortamentCollection(data_sortaments),
			gradeCollection: new MC.Collections.GradeCollection(data_grades),
			historyCollection: new MC.Collections.HistoryCollection,
			statCollection: new MC.Collections.StatCollection,
			mpriceCollection: new MC.Collections.MpriceCollection,
			mGradeCollection: new MC.Collections.MGradeCollection,
			mMaterialCollection: new MC.Collections.MMaterialCollection,
			mMaterialGroupCollection: new MC.Collections.MMaterialGroupCollection
		};
		return {
			init: e,
			injectTo: i,
			collections: t,
			getCollection: n
		}
	}), namespace("MC.Managers.FormManager", function() {
		function e() {
			n = MC.Managers.CollectionManager, i = MC.Managers.State, s = MC.Common.Vent
		}

		function t() {
			var e = {},
				t = MC.Managers.VM.views.form_main;
			return t ? (_.each(t.children, function(t, n) {
				_.startsWith(n, "form_field_") && (e[t.data.type] = t.getValue())
			}), e) : e
		}
		var n, i, s;
		return {
			init: e,
			collectCalcFormValues: t
		}
	}), namespace("MC.Managers.Goals", function() {
		function e() {
			function e() {
				return 2 === r.getCurrent().metallId
			}
			o = MC.EventTypes, s = MC.Common.Vent, r = MC.Managers.State, s.on(o.STATS_PUSH, function(e) {
				n("rasschitali_ves", e)
			}, this), s.on(o.FORM_SHOW_PRICE_BLOCK, function() {
				n("rasschitali_cenu")
			}, this), s.on(o.LICENCE_REQUEST, function() {
				n("zaprosi")
			}, this), s.on(o.LICENCE_ACTIVATED, function() {
				n("activated")
			}, this), s.on(o.LICENCE_PAGE_OPEN, function() {
				n("first_desktop_open")
			}, this), s.on(o.WIDGET_DOWNLOAD_CLICK, function() {
				n("downloaded_by_widget")
			}, this), s.on(o.PARTNER_TYPE_2_ADS_SHOW, function() {
				e() && n("kr_nerj")
			}, this), s.on(o.PARTNER_TYPE_2_ADS_LINK_CLICK, function() {
				e() && n("kr_nerj_click")
			}, this), s.on(o.PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_OPEN, function() {
				e() && n("kr_nerj_form")
			}, this), s.on(o.PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_SEND, function() {
				e() && n("kr_nerj_lead")
			}, this)
		}

		function t() {
			return null != a ? a : (Object.keys(window).forEach(function(e) {
				e && 0 === e.indexOf("yaCounter") && window[e] && window[e].reachGoal && (a = window[e])
			}), a)
		}

		function n(e, n) {
			var i = t();
			i && (n ? i.reachGoal(e, n) : i.reachGoal(e))
		}

		function i(e, n) {
			var i = t();
			i && i.hit(e, n)
		}
		var s = null,
			o = null,
			r = null,
			a = null;
		return {
			init: e,
			hit: i,
			reachGoal: n,
			getYaCounter: t
		}
	}), namespace("MC.Managers.HistoryManager", function() {
		function e() {
			n = MC.Managers.CollectionManager, i = MC.Managers.State, s = MC.Common.Vent, s.on("history:push", t)
		}

		function t(e) {
			n.getCollection("historyCollection").create(e)
		}
		var n, i, s;
		return {
			init: e
		}
	}), namespace("MC.Managers.Messages", function() {
		function e() {
			i = MC.Common.Vent, s = MC.Managers.UserManager, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), i.on("stats:first_calculation", function() {
				!s.hasLicenseKey() && s.isRequestEmailAvailable() && t({
					actions: "show_request_email"
				})
			}), i.on("stats:fourth_calculation", function() {
				!s.hasLicenseKey() && s.isRequestEmailAvailable() && (t({
					actions: "show_request_email"
				}), s.setLastRequestEmailDate())
			})
		}

		function t(e) {
			parent && parent.postMessage && parent.postMessage(e, "*")
		}

		function n() {}
		var i, s;
		return {
			init: e,
			send: t
		}
	}), namespace("MC.Managers.State", function() {
		function e() {
			var e = MC.Managers.CollectionManager.getCollection;
			y = e("metallCollection"), g = e("sortamentCollection"), B = MC.Managers.FormManager, m = MC.Common.Vent, m.on("metall:set", t, this), m.on("metall:select", t, this), m.on("sortament:set", n, this), m.on("sortament:select", n, this), m.on("grade:change", i, this)
		}

		function t(e) {
			v.metallId = e.id, m.trigger("state:change:metall", v.metallId), m.trigger("state:change", v)
		}

		function n(e) {
			v.sortId = e.id, p("weight", {}), m.trigger("state:change:sort", v.sortId), m.trigger("state:change", v)
		}

		function i(e) {
			c("gradeId", e)
		}

		function s(e) {
			v.ip = e
		}

		function o() {
			return $("#client_ip").val()
		}

		function r() {
			return v
		}

		function a(e) {
			MC.Common.Vent.trigger("state:set", e)
		}

		function l() {
			var e = parseInt(MC.Utils.Helpers.getParamByName("m")),
				t = parseInt(MC.Utils.Helpers.getParamByName("s")),
				n = MC.Utils.Helpers.getParamByName("p"),
				i = y.get(e),
				s = g.get(t);
			i && s || (e = 1, t = 8), a({
				metallId: e,
				sortId: t,
				gradeId: n
			})
		}

		function d() {
			return v.gradeId
		}

		function c(e, t) {
			v[e] = t, m.trigger("state:change", v)
		}

		function u(e, t) {
			return "function" == typeof t ? t(v[e]) : v[e]
		}

		function D() {
			return u(11 == u("sortId") ? "flangeType" : 2 == u("sortId") ? "balkType" : "gradeId")
		}

		function h() {
			var e = u("metallId", parseInt),
				t = y.get(e);
			return t && 2 === t.get("id") ? "PRICE_REQUEST" : "PRICE_CALCULATE"
		}

		function p(e, t, n) {
			if ("weight" !== e && "length" !== e) throw new Error('unknown calcType "' + e + '"');
			if (c("calcType", e), n !== !0) {
				var i = B.collectCalcFormValues();
				i.gradeId = v.gradeId, i.metallId = v.metallId, i.sortId = v.sortId, i.noCalculate = !0, m.trigger("state:change:calcType", i)
			}
		}

		function f() {
			return u("calcType")
		}
		var m, B, g, y, v = {
			ip: "",
			metallId: 0,
			sortId: 0,
			gradeId: 0,
			a: 0,
			b: 0,
			d: 0,
			l: 0,
			t: 0,
			n: 0,
			gradeLoaded: !1,
			calcType: "weight"
		};
		return {
			init: e,
			set: c,
			get: u,
			setState: a,
			getCurrent: r,
			setIp: s,
			getIp: o,
			getActualGrade: D,
			setGrade: i,
			getGrade: d,
			setStateFromUrl: l,
			getPriceBlockType: h,
			setCalcType: p,
			getCalcType: f
		}
	}), namespace("MC.Managers.StatsManager", function() {
		function e() {
			l = MC.Managers.CollectionManager, d = MC.Managers.State, c = MC.Common.Vent, c.on("calculated", n), c.trigger("calculated:length", t)
		}

		function t() {}

		function n(e) {
			var t = MC.Utils.Helpers.resultNumFormat,
				n = i(e),
				r = t(n).replace(/ /g, "");
			if (!(0 >= n)) {
				var a = l.getCollection("statCollection"),
					D = d.getCurrent(),
					h = {
						grade_id: D.gradeId
					};
				_.each(e.payload, function(e) {
					h[e.name] = e.value
				});
				var p = {
					payload: o(D.sortId, h),
					weight: r,
					user_agent: navigator.userAgent,
					metal_id: D.metallId,
					sortament_id: D.sortId,
					ip: d.getIp(),
					grade: s(D.sortId)
				};
				a.findWhere(_.omit(p, "weight")) || (a.create(p), c.trigger("stats:push", p), c.trigger("history:push", {
					weight: r,
					payload: _.extend(h, {
						sortId: D.sortId,
						metallId: D.metallId
					}),
					metal_id: D.metallId,
					sortament_id: D.sortId,
					grade: s(D.sortId),
					text: o(D.sortId, h)
				}), u++, 1 === u && c.trigger("stats:first_calculation"), 4 === u && c.trigger("stats:fourth_calculation"))
			}
		}

		function i(e) {
			var t = 0;
			if ("length" === e.calcType) {
				var n = _.find(e.payload, function(e) {
					return "M" === e.name
				});
				n && (t = n.value)
			} else t = e.weight;
			return parseFloat(t)
		}

		function s(e) {
			var t = [3, 4, 5, 6, 8, 9, 10, 12, 13];
			return _.contains(t, e) ? d.getGrade() : ""
		}

		function o(e, t) {
			var n = "",
				i = D[e];
			return i && (n = i(t)), n
		}

		function r() {
			return l.getCollection("statCollection").last()
		}

		function a() {
			return u
		}
		var l, d, c, u = 0,
			D = {
				1: _.template("\u0410\u0440\u043c\u0430\u0442\u0443\u0440\u0430: d=<%= d %>; L=<%= l %>;"),
				2: _.template("\u0411\u0430\u043b\u043a\u0430: <%= type %> L=<%= l %>"),
				3: _.template("\u041a\u0432\u0430\u0434\u0440\u0430\u0442: a=<%= a %>; L=<%= l %>"),
				4: _.template("\u041a\u0440\u0443\u0433: D=<%= d %> L=<%= l %>"),
				5: _.template("\u041b\u0435\u043d\u0442\u0430: <%= a %>x<%=t%> L=<%= b %>"),
				6: _.template("\u041b\u0438\u0441\u0442: <%= t %>\u0445<%= a %>\u0445<%= b %>  <%= n %>\u0448\u0442."),
				7: _.template("\u041e\u0442\u0432\u043e\u0434: <%= s %>  <%= n %>\u0448\u0442."),
				8: _.template("\u0422\u0440\u0443\u0431\u0430 \u043a\u0440\u0443\u0433\u043b\u0430\u044f: <%= d %>x<%= t %>  L=<%= l %>"),
				9: _.template("\u0422\u0440\u0443\u0431\u0430 \u043f\u0440\u043e\u0444: <%= a %>x<%= b %>x<%= t %>  L=<%= l %>"),
				10: _.template("\u0423\u0433\u043e\u043b\u043e\u043a: <%= a %>x<%= b %>x<%= t %>  L=<%= l %>"),
				11: _.template("\u0424\u043b\u0430\u043d\u0435\u0446: D\u0443=<%= dy %> <%= pLabel %>  <%= n %>\u0448\u0442."),
				12: _.template("\u0428\u0432\u0435\u043b\u043b\u0435\u0440: <%= number %> L=<%= l %>"),
				13: _.template("\u0428\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u0438\u043a: A=<%= a %>  L=<%= l %>")
			};
		return {
			init: e,
			getLastCalculation: r,
			getCalculationCount: a
		}
	}), namespace("MC.Managers.UrlStateManager", function() {
		function e() {
			o = MC.Utils.Helpers, i = MC.Common.Vent, r = MC.Managers.Goals, s = MC.Managers.CollectionManager.getCollection("sortamentCollection"), i.on("state:change", t, this)
		}

		function t(e) {
			var t = s.get(e.sortId),
				i = location.pathname + location.search;
			i = o.replaceOrAddParam(i, "m", e.metallId), i = o.replaceOrAddParam(i, "s", e.sortId), i = t.get("has_grades") ? o.replaceOrAddParam(i, "p", e.gradeId) : o.removeParam(i, "p"), n(i) && r.hit(i), window.history.replaceState("", "", i)
		}

		function n(e) {
			return _.last(a) != e ? (a.push(e), !0) : !1
		}
		var i, s, o, r, a = [];
		return {
			init: e
		}
	}), namespace("MC.Managers.UserManager", function() {
		function e() {
			var e = MC.Utils.Store.get("license_key");
			return !_.isBlank(e)
		}

		function t() {
			var e = d.getCalculationCount();
			return c >= e
		}

		function n() {
			l.set("LastRequestEmailDate", r(new Date))
		}

		function i() {
			var e = l.get("LastRequestEmailDate");
			return e ? r(new Date) > r(new Date(e)) : !0
		}

		function s() {
			l.set("LastShowMetmetInfoPopUpDate", r(new Date))
		}

		function o() {
			var e = l.get("LastShowMetmetInfoPopUpDate");
			if (e) {
				var t = r(new Date),
					n = r(new Date(e)),
					i = a(n, u);
				return t > i
			}
			return !0
		}

		function r(e) {
			var t = e.getFullYear(),
				n = e.getMonth(),
				i = e.getDate();
			return Date.UTC(t, n, i)
		}

		function a(e, t) {
			var n = new Date(e);
			return n.setDate(n.getDate() + t), n
		}
		var l = MC.Utils.Store,
			d = MC.Managers.StatsManager,
			c = 4,
			u = 14;
		return {
			hasLicenseKey: e,
			hasFreeCalculation: t,
			setLastRequestEmailDate: n,
			isRequestEmailAvailable: i,
			setLastShowMetmetPopoUpDate: s,
			showMetmetInfoPopUp: o
		}
	}), namespace("MC.Managers.VM", function() {
		var e = {},
			t = function(t, n, i, s) {
				"undefined" != typeof e[n] && (e[n].undelegateEvents(), _.isFunction(e[n].clean) && (e[n].children && _.each(e[n].children, function(e) {
					e && _.isFunction(e.clean) && e.clean()
				}), e[n].clean()));
				var o = new i(s);
				return e[n] = o, "undefined" == typeof t.children ? (t.children = {}, t.children[n] = o) : t.children[n] = o, MC.Common.Vent.trigger("views:created", n), o
			};
		return {
			views: e,
			create: t
		}
	}), namespace("MC", {
		bootstrap: function() {
			MC.Managers.Goals.init(), MC.Router.init(function() {
				MC.Managers.HistoryManager.init(), MC.Managers.CollectionManager.init(), MC.Managers.UrlStateManager.init(), MC.Managers.StatsManager.init(), MC.Managers.Messages.init(), MC.Managers.FormManager.init()
			}), MC.Common.Vent.on("online", function() {
				$(".js-offline-pane").addClass("hidden")
			}, this), MC.Common.Vent.on("offline", function() {
				$(".js-offline-pane").removeClass("hidden")
			}, this)
		}
	}), namespace("MC.Config", function() {
		var e = {
				WEB: "web",
				DESKTOP: "desktop",
				WIDGET: "widget",
				PARTNER: "partner",
				DESKTOP_PARTNER: "desktop_partner"
			},
			t = {
				STANDART: "standart",
				MEDIUM: "medium",
				COMPACT: "compact"
			},
			n = {
				CD: "cd"
			},
			i = {
				TYPE_1: "type_1",
				TYPE_2: "type_2"
			},
			s = {},
			o = e.WEB,
			r = t.STANDART,
			a = {
				dev: "http://localhost:3000/",
				prod: "/"
			},
			l = _isDevEnv ? a.dev : a.prod;
		s[e.WEB] = {
			appType: e.WEB,
			accessToken: Math.random(),
			apiEndpoint: l,
			widgetType: t.STANDART,
			sourceType: "",
			partnerType: i.TYPE_1
		}, s[e.DESKTOP] = {
			appType: e.DESKTOP,
			accessToken: Math.random(),
			apiEndpoint: l,
			widgetType: t.STANDART,
			sourceType: "",
			partnerType: i.TYPE_1
		}, s[e.WIDGET] = {
			appType: e.WIDGET,
			accessToken: Math.random(),
			apiEndpoint: l,
			widgetType: t.STANDART,
			sourceType: ""
		}, s[e.PARTNER] = {
			appType: e.PARTNER,
			accessToken: Math.random(),
			apiEndpoint: l,
			widgetType: t.STANDART,
			sourceType: "",
			partnerType: i.TYPE_1
		}, s[e.DESKTOP_PARTNER] = {
			appType: e.DESKTOP_PARTNER,
			accessToken: Math.random(),
			apiEndpoint: l,
			widgetType: t.DESKTOP_PARTNER,
			sourceType: "",
			partnerType: i.TYPE_1
		};
		var d = {};
		return d.set = function(e, t) {
			return _.has(s[o], e) ? (s[o][e] = t, !0) : !1
		}, d.get = function(e) {
			return s[o][e]
		}, d.isDesktop = function() {
			return o == e.DESKTOP || o == e.DESKTOP_PARTNER
		}, d.isWidget = function() {
			return o == e.WIDGET
		}, d.isPartner = function() {
			return o == e.PARTNER || o == e.DESKTOP_PARTNER
		}, d.setMode = function(t) {
			o = _.findKeyByValue(e, t) ? t : e.WEB
		}, d.setSourceType = function(e) {
			switch (e) {
				case n.CD:
					d.set("sourceType", n.CD)
			}
		}, d.setWidgetType = function(e) {
			var n = _.findKeyByValue(t, e);
			n && (r = t[n])
		}, d.setPartnerType = function(e) {
			d.set("partnerType", e)
		}, d.isCompactWidget = function() {
			return r === t.COMPACT
		}, d.isMediumWidget = function() {
			return r === t.MEDIUM
		}, d.isPartnerType1 = function() {
			return "type_1" === d.get("partnerType")
		}, d.isPartnerType2 = function() {
			return "type_2" === d.get("partnerType")
		}, d.hasPartnerDownloadAppBtn = function() {
			return d.isPartner() && d.isPartnerType1() && !d.isDesktop()
		}, d.showCampaignBtn = function() {
			return !1
		}, d
	}), namespace("MC.EventTypes", function() {
		return {
			STATS_PUSH: "stats:push",
			FORM_SHOW_PRICE_BLOCK: "form:show_price_block",
			LICENCE_REQUEST: "licence:request",
			LICENCE_ACTIVATED: "licence:activated",
			LICENCE_PAGE_OPEN: "licence:page_open",
			WIDGET_DOWNLOAD_CLICK: "widget:download_click",
			PARTNER_TYPE_2_ADS_SHOW: "partner_type_2:ads:show",
			PARTNER_TYPE_2_ADS_HIDE: "partner_type_2:ads:hide",
			PARTNER_TYPE_2_ADS_LINK_CLICK: "partner_type_2:ads:link_click",
			PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_OPEN: "partner_type_2:ads:price_request_form:open",
			PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_SEND: "partner_type_2:ads:price_request_form:send"
		}
	}), $(document).ready(MC.bootstrap), namespace("MC.Router", function() {
		function e(e) {
			n(function(n) {
				0 == n ? MC.Managers.VM.create(this, "LicenseView", MC.Views.License, {}).render() : (t(), e())
			})
		}

		function t() {
			function e(e) {
				0 == MC.Managers.State.get("gradeLoaded") ? i.once("grades:loaded", e, this) : e()
			}
			var t = new r;
			s = MC.Managers.VM.create(this, "AppMain", MC.Views.Main, {}).render(), MC.Managers.State.init(), o = MC.Managers.CollectionManager, t.on("route:calculator", function() {
				i.off("sortament:clear_active"), s.renderCalculator(), MC.Managers.State.setStateFromUrl()
			}), t.on("route:materialGroups", function() {
				s.renderInfoSteels(), e(function() {
					var e = o.getCollection("mMaterialGroupCollection").getAll();
					i.trigger("info:steels:render_groups", e)
				})
			}), t.on("route:materials", function(t) {
				s.renderInfoSteels(), e(function() {
					var e = o.getCollection("mMaterialGroupCollection").get(t);
					e ? i.trigger("info:steels:render_materials", e) : i.trigger("info:steels:render_404", "404")
				})
			}), t.on("route:grades", function(t, n) {
				s.renderInfoSteels(), e(function() {
					var e = o.getCollection("mMaterialCollection").get(n);
					e ? i.trigger("info:steels:render_grades", e) : i.trigger("info:steels:render_404", "404")
				})
			}), t.on("route:gradeDetails", function(t, n, r) {
				s.renderInfoSteels(), e(function() {
					var e = o.getCollection("mGradeCollection").get(r);
					e ? i.trigger("info:steels:render_grade", e) : i.trigger("info:steels:render_404", "404")
				})
			}), t.on("route:infoGosts", function() {
				s.renderInfoGosts(), i.trigger("info:render_gosts_all")
			}), t.on("route:infoGostsGroup", function(e) {
				s.renderInfoGosts();
				var t = _.findWhere(data_gosts, {
					id: parseInt(e)
				});
				t ? i.trigger("info:render_gosts_group", t) : i.trigger("info:render_gosts_404")
			}), t.on("all", function(e, t, n) {
				i.trigger("route:change_all", e, t, n)
			}), Backbone.history.start()
		}

		function n(e) {
			MC.Utils.Store.get("license_key");
			MC.Config.isDesktop() ? MC.Utils.Store.has("license_key") ? MC.Utils.Api.licenses.check({
				key: MC.Utils.Store.get("license_key")
			}).success(function(t) {
				e(t)
			}).error(function() {
				e(!1)
			}) : e(!1) : e(!0)
		}
		var i = MC.Common.Vent,
			s = null,
			o = null,
			r = MC.Core.Router.extend({
				routes: {
					"": "calculator",
					"info/steels": "materialGroups",
					"info/steels/groups": "materialGroups",
					"info/steels/groups/:gid": "materials",
					"info/steels/groups/:gid/materials/:mid": "grades",
					"info/steels/groups/:groupid/materials/:mid/grades/:id": "gradeDetails",
					"info/steels/:id": "gradeDetails",
					"info/gosts": "infoGosts",
					"info/gosts/groups/:id": "infoGostsGroup"
				}
			});
		return {
			init: e
		}
	}), namespace("MC.Views.Common", function() {
		var e = (MC.Common.Vent, MC.Core.View.extend({
			events: {},
			conatinerTemplate: JST["app/templates/common/modal_view"],
			initialize: function(e) {
				this.params = _.defaults(e || {}, {
					width: 400,
					top: 100
				})
			},
			render: function() {
				this.$el.html(this.conatinerTemplate({})), $("body").append(this.$el), this.delegateEvents();
				var e = _.pick(this.params, "width", "height", "top");
				return this.region("modal:content").parent().css(e), this
			}
		}));
		return {
			ModalView: e
		}
	}), namespace("MC.Views.Common", function() {
		var e = (MC.Common.Vent, MC.Managers.VM, MC.Core.View.extend({
			template: JST["app/templates/common/pulse_marker"],
			events: {
				click: "onClick"
			},
			initialize: function(t) {
				e.__super__.initialize.apply(this, arguments), this.options = _.defaults(t || {}, {
					left: 0,
					top: 0,
					tooltip: null,
					appendTo: null,
					tooltipPosition: "right"
				})
			},
			render: function() {
				return this.$el.html(this.template({
					tooltip: this.options.tooltip
				})), this.$el.appendTo(this.options.appendTo), this.$el.css("position", "absolute").css("left", this.options.left).css("top", this.options.top), $(".ttp").tooltipster({
					positionTracker: !0,
					position: this.options.tooltipPosition
				}), this
			},
			onClick: function(e) {
				this.clean(), this.trigger("click", e)
			}
		}));
		return {
			PulseMarker: e
		}
	}), namespace("MC.Views.Details", function() {
		var e = (MC.Common.Vent, MC.EventTypes, MC.Views.Common.ModalView.extend({
			events: {
				"click .js-modal-close": "onCloseClick"
			},
			template: JST["app/templates/details/campaign_modal"],
			initialize: function() {
				MC.Views.Details.CampaignModal.__super__.initialize.call(this, {
					width: 500,
					top: 20
				})
			},
			render: function() {
				return MC.Views.Details.CampaignModal.__super__.render.call(this, arguments), this.region("modal:header").text("\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0435"), this.region("modal:content").html(this.template({})), this
			},
			onCloseClick: function() {
				this.clean()
			}
		}));
		return {
			CampaignModal: e
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Managers.CollectionManager,
			t = MC.Managers.VM,
			n = MC.Common.Vent,
			i = {
				a: {
					type: "a",
					label: "\u0428\u0438\u0440\u0438\u043d\u0430",
					disp: "\u043c\u043c."
				},
				b: {
					type: "b",
					label: "\u0412\u044b\u0441\u043e\u0442\u0430",
					disp: "\u043c\u043c."
				},
				d: {
					type: "d",
					label: "\u0414\u0438\u0430\u043c\u0435\u0442\u0440",
					disp: "\u043c\u043c."
				},
				t: {
					type: "t",
					label: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430",
					disp: "\u043c\u043c."
				},
				l: {
					type: "l",
					label: "\u0414\u043b\u0438\u043d\u0430",
					disp: "\u043c."
				},
				n: {
					type: "n",
					label: "\u041a\u043e\u043b-\u0432\u043e",
					disp: "\u0448\u0442"
				}
			},
			s = MC.Core.View.extend({
				template: JST["app/templates/details/form"],
				events: {},
				initialize: function() {
					s.__super__.initialize.apply(this, arguments), n.on("sortament:select", this.renderFields, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.renderGradeSelect(), this.renderFields(), this
				},
				renderFields: function(t) {
					this.clearFields();
					var n = t ? t.id : null,
						i = e.getCollection("sortamentCollection").get(n);
					i && _.each(i.get("props"), this.renderField, this)
				},
				renderField: function(e) {
					var n = i[e];
					if (n) {
						var s = t.create(this, "form_field_" + e, MC.Views.Details.Field, n);
						s.render(), this.region("details:form:fields").append(s.$el)
					}
				},
				renderGradeSelect: function() {
					var e = t.create(this, "grade_select", MC.Views.Details.GradeSelect, {});
					e.render(), this.region("details:form:fields").append(e.$el)
				},
				clearFields: function() {
					this.clearChildStartWith("form_field_")
				}
			});
		return {
			Form: s
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Managers.VM,
			t = MC.Managers.CollectionManager,
			n = MC.Managers.State,
			i = MC.Common.Vent,
			s = MC.Core.View.extend({
				template: JST["app/templates/details/main"],
				events: {},
				initialize: function() {
					s.__super__.initialize.apply(this, arguments), i.on("state:change", this.setTitleFromState, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.renderAllSections(), this
				},
				renderAllSections: function() {
					this._renderPane(), this._renderForm(), this._renderResult(), MC.Config.isCompactWidget() && (this.region("details:pane").hide(), this.region("details:form").removeClass("unit-40").addClass("unit-100"))
				},
				setTitle: function(e) {
					this.region("details:title").text(e)
				},
				setTitleFromState: function(e) {
					if (e) {
						var i = "",
							s = t.getCollection("metallCollection").get(e.metallId),
							o = t.getCollection("sortamentCollection").get(e.sortId),
							r = o ? o.get("key") : null,
							a = n.getCalcType(),
							l = "length" === a && o.get("has_calc_togler") ? "\u0434\u043b\u0438\u043d\u044b" : "\u0432\u0435\u0441\u0430";
						i = "armature" == r ? _.format("\u0420\u0430\u0441\u0447\u0435\u0442 {0} \u0430\u0440\u043c\u0430\u0442\u0443\u0440\u044b", l) : "balk" == r ? _.format("\u0420\u0430\u0441\u0447\u0435\u0442 {0} \u0431\u0430\u043b\u043a\u0438", l) : _.format("\u0420\u0430\u0441\u0447\u0435\u0442 {0} {1} {2}", l, s.get("form_title").replace("{end}", o.get("metall_title_end")), o.get("form_title")), this.setTitle(i)
					}
				},
				_renderPane: function() {
					e.create(this, "details_pane", MC.Views.Details.Pane, {
						el: this.region("details:pane")
					}).render()
				},
				_renderForm: function() {
					e.create(this, "details_form", MC.Views.Forms.Main, {
						el: this.region("details:form")
					}).render()
				},
				_renderResult: function() {
					e.create(this, "details_result", MC.Views.Details.Result, {
						el: this.region("details:result")
					}).render()
				}
			});
		return {
			Main: s
		}
	}), namespace("MC.Views.Details", function() {
		var e = (MC.Common.Vent, MC.EventTypes, MC.Views.Common.ModalView.extend({
			events: {
				"click .js-modal-close": "onCloseClick",
				"click .js-metmet-link": "onMetmetLinkClick"
			},
			template: JST["app/templates/details/metmet_info_modal"],
			initialize: function() {
				MC.Views.Details.MetmetInfoModal.__super__.initialize.call(this, {
					width: 500,
					top: 20
				})
			},
			render: function() {
				return false;
				return MC.Views.Details.MetmetInfoModal.__super__.render.call(this, arguments), this.region("modal:header").text("C\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u043f\u0440\u043e\u043a\u0430\u0442\u0430 - MetMet.ru"), this.region("modal:content").html(this.template({})), this
			},
			onCloseClick: function(e) {
				e.preventDefault(), this.clean()
			},
			onMetmetLinkClick: function() {
				this.clean()
			}
		}));
		return {
			MetmetInfoModal: e
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Common.Vent,
			t = (MC.Managers.VM, MC.Managers.CollectionManager),
			n = {
				pipeCircle: "/assets/PipeCircle.png",
				pipeProf: "/assets/PipeProf.png",
				hexahedron: "/assets/Hexahedron.png",
				corner: "/assets/Corner.png",
				channelp: "/assets/ChannelP.png",
				channely: "/assets/ChannelY.png",
				square: "/assets/Square.png",
				branch: "/assets/Branch.png",
				list: "/assets/List.png",
				circle: "/assets/Circle.png",
				armature: "/assets/Armature.png",
				ribbon: "/assets/Ribbon.png",
				flange: "/assets/Flange.png",
				balk: "/assets/Balk.png"
			},
			i = {
				d: {
					left: 135,
					top: 307,
					mLeft: 112,
					mTop: 250
				},
				d1: {
					left: 133,
					top: 279,
					mLeft: 112,
					mTop: 228
				},
				dv: {
					left: 135,
					top: 21,
					mLeft: 113,
					mTop: 23
				},
				b: {
					left: -15,
					top: 25,
					mLeft: -15,
					mTop: 25
				},
				dxn: {
					left: 254,
					top: 49,
					mLeft: 203,
					mTop: 43
				},
				n: {
					left: 28,
					top: 337,
					mLeft: 15,
					mTop: 290,
					text: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0440\u0435\u043f\u0435\u0436\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0439: "
				}
			},
			s = {
				h: {
					left: 60,
					top: 98,
					mLeft: 21,
					mTop: 91
				},
				b: {
					left: 161,
					top: 193,
					mLeft: 115,
					mTop: 178
				},
				s: {
					left: 215,
					top: 88,
					mLeft: 161,
					mTop: 78
				},
				t: {
					left: 263,
					top: 160,
					mLeft: 223,
					mTop: 150
				}
			},
			o = {
				h: {
					left: 56,
					top: 107,
					mLeft: 18,
					mTop: 107
				},
				b: {
					left: 129,
					top: 222,
					mLeft: 90,
					mTop: 212
				},
				s: {
					left: 136,
					top: 95,
					mLeft: 95,
					mTop: 95
				},
				t: {
					left: 153,
					top: 148,
					mLeft: 110,
					mTop: 148
				}
			},
			r = {
				h: {
					left: 56,
					top: 107,
					mLeft: 18,
					mTop: 107
				},
				b: {
					left: 129,
					top: 213,
					mLeft: 90,
					mTop: 212
				},
				s: {
					left: 136,
					top: 95,
					mLeft: 95,
					mTop: 95
				},
				t: {
					left: 153,
					top: 148,
					mLeft: 153,
					mTop: 148
				}
			},
			a = MC.Core.View.extend({
				template: JST["app/templates/details/pane"],
				events: {},
				initialize: function() {
					a.__super__.initialize.apply(this, arguments), e.on("set_img", this.renderImage, this), e.on("state:change:sort", this.render, this), e.on("state:change:pane_data", this.appendPaneData, this)
				},
				render: function(e) {
					var n = t.getCollection("sortamentCollection").get(e),
						i = n ? n.get("key") : "";
					return this.renderImage(i), this
				},
				renderImage: function(e) {
					this.$el.html(this.template({
						src: this.getImgSrc(e),
						cssClass: e ? "shape-" + e : ""
					}))
				},
				getImgSrc: function(e) {
					return n[e] || null
				},
				appendPaneData: function(e) {
					if (this.clearPaneData(), e) switch (e.sortKey) {
						case "flange":
							this._paneFlangeData(e.data);
							break;
						case "balk":
							this._paneBalkData(e.data);
							break;
						case "channely":
						case "channelp":
							this._paneChannelData(e)
					}
				},
				appendPaneItem: function(e, t, n) {
					var i = $("<div />", {
						"data-key": e,
						"class": "js-fdata shape-data",
						text: t
					});
					if (n) {
						var s = MC.Config.isMediumWidget(),
							o = s ? n.mLeft : n.left,
							r = s ? n.mTop : n.top;
						i.css("left", o), i.css("top", r), n.text && i.text(n.text + t)
					}
					this.$el.append(i)
				},
				_paneFlangeData: function(e) {
					var t = this,
						n = ["d", "d1", "dv", "dxn", "n"];
					_.each(e, function(e, s) {
						-1 != n.indexOf(s) && t.appendPaneItem(s, e, i[s])
					})
				},
				_paneBalkData: function(e) {
					var t = this,
						n = ["h", "b", "s", "t"];
					_.each(e, function(e, i) {
						-1 != n.indexOf(i) && t.appendPaneItem(i, e, s[i])
					})
				},
				_paneChannelData: function(e) {
					var t = this,
						n = e.data,
						i = "channely" == e.sortKey ? ["h", "b", "s", "t"] : ["h", "b", "s"],
						s = "channely" == e.sortKey ? o : r;
					_.each(n, function(e, n) {
						-1 != i.indexOf(n) && t.appendPaneItem(n, e, s[n])
					})
				},
				clearPaneData: function() {
					this.$el.find(".js-fdata").remove()
				}
			});
		return a.Images = n, {
			Pane: a
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Common.Vent,
			t = MC.EventTypes,
			n = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Utils.Api.partnerAdverts),
			i = MC.Managers.State,
			s = MC.Core.View.extend({
				template: JST["app/templates/details/partner_advert"],
				events: {
					"click .js-price-request": "onPriceRequestClick",
					"click .js-link": "onLinkClick"
				},
				initialize: function() {
					s.__super__.initialize.apply(this, arguments), e.on("calculate", this.onCalculate, this), e.on("state:change", this.hide, this)
				},
				render: function() {
					return this
				},
				_renderAdvert: function(e) {
					this.$el.html(this.template({
						title: e.title,
						text: e.advert_text,
						phone: e.phone,
						image: e.image,
						link: e.link,
						showRequestBtn: !MC.Config.isPartnerType2()
					})), this.show(e)
				},
				onCalculate: function() {
					var e = this,
						t = i.getCurrent();
					n.get({
						metal_id: t.metallId,
						sortament_id: t.sortId,
						grade_name: t.gradeId
					}).success(function(t) {
						t ? e._renderAdvert(t) : e.hide()
					})
				},
				onPriceRequestClick: function(n) {
					n && n.preventDefault();
					var i = new MC.Views.Details.PriceRequestForm({
						showCompanies: !1
					});
					e.trigger(t.PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_OPEN), i.render()
				},
				onLinkClick: function() {
					MC.Config.isPartnerType2() && e.trigger(t.PARTNER_TYPE_2_ADS_LINK_CLICK)
				},
				show: function(n) {
					this.$el.show(), MC.Config.isPartnerType2() && e.trigger(t.PARTNER_TYPE_2_ADS_SHOW, n)
				},
				hide: function() {
					this.$el.hide(), MC.Config.isPartnerType2() && e.trigger(t.PARTNER_TYPE_2_ADS_HIDE)
				}
			});
		return {
			PartnerAdvert: s
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Managers.VM,
			t = MC.Common.Vent,
			n = MC.Utils.Store,
			i = MC.Core.View.extend({
				events: {
					"click .js-offers-request-btn": "onPriceRequestClick"
				},
				template: JST["app/templates/details/price_request"],
				initialize: function() {
					t.on("calculated", this.onCalculated, this), t.on("state:change:sort", this.setInitialState, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.priceRequestBtn = this.$el.find(".js-offers-request-btn"), 1 != n.get("price_request_btn_clicked") && this.addMarker(), this.setInitialState(), this
				},
				addMarker: function() {
					var t = this;
					this.priceRequestBtn = this.$el.find(".js-offers-request-btn"), e.create(t, "price_request_marker", MC.Views.Common.PulseMarker, {
						left: -2,
						top: 17,
						tooltip: "\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443 \u0443 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432",
						tooltipPosition: "left",
						appendTo: t.priceRequestBtn.parent()
					}).render().on("click", function(e) {
						e.stopPropagation(), t.priceRequestBtn.trigger("click"), n.set("price_request_btn_clicked", !0)
					})
				},
				onCalculated: function() {
					"PRICE_REQUEST" === MC.Managers.State.getPriceBlockType() && this.show()
				},
				setInitialState: function() {
					this.hide(), this.showOffersRequestBtn(), this.hideOfferts()
				},
				showOffersRequestBtn: function() {
					this.$el.find(".js-offers-request-btn").show()
				},
				hideOffersRequestBtn: function() {
					this.$el.find(".js-offers-request-btn").hide()
				},
				showOfferts: function() {
					var e = $('<b>\u041d\u0430\u0439\u0434\u0435\u043d \u043e\u0434\u0438\u043d \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a:</b> <br />\u041e\u041e\u041e "\u041c\u0418\u0414\u0410\u0421 \u0421\u0415\u0420\u0412\u0418\u0421" (\u0433.\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a) <a class="btn-link m-show-price " style="display: inline;">\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443</a></div>');
					this.region("price-request:offers").html(e), this.$el.addClass("m-offers"), this.trigger("show_offers")
				},
				hideOfferts: function() {
					this.region("price-request:offers").html(""), this.$el.removeClass("m-offers"), this.trigger("hide_offers")
				},
				onPriceRequestClick: function() {
					var e = new MC.Views.Details.PriceRequestForm;
					e.render()
				}
			});
		return {
			PriceRequest: i
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Common.Vent,
			t = MC.EventTypes,
			n = MC.Managers.StatsManager,
			i = MC.Views.Common.ModalView.extend({
				events: {
					"click .js-modal-close": "onCloseClick",
					"click .js-send-btn": "onSendClick"
				},
				template: JST["app/templates/details/price_request_form"],
				initialize: function(e) {
					MC.Views.Details.PriceRequestForm.__super__.initialize.call(this, {
						width: 400,
						top: 20
					}), this.options = _.defaults(e || {}, {
						showCompanies: !0
					})
				},
				render: function() {
					MC.Views.Details.PriceRequestForm.__super__.render.call(this, arguments);
					var e = "",
						t = n.getLastCalculation();
					return t && (e = t.get("payload"), _.isBlank(t.get("grade")) || (e += ", \u041c\u0430\u0440\u043a\u0430 \u0441\u0442\u0430\u043b\u0438: " + t.get("grade"))), this.region("modal:content").html(this.template({
						request_text: e,
						showCompanies: this.options.showCompanies
					})), this.region("modal:header").text("\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0446\u0435\u043d\u0443"), this.sendBtn = this.$el.find(".js-send-btn"), this
				},
				onCloseClick: function() {
					this.clean()
				},
				onSendClick: function(i) {
					i.preventDefault();
					var s, o = this,
						r = this.formData();
					this.validateForm() && (s = n.getLastCalculation(), this.btnText = this.sendBtn.text(), this.sendBtn.html(JST["app/templates/common/spinner"]), MC.Utils.Api.priceRequests.post(_.extend(r, {
						client_ip: MC.Managers.State.getIp(),
						stat_id: s ? s.get("id") : null,
						source: "context_ads"
					})).success(function() {
						o.showSuccessText(), e.trigger(t.PARTNER_TYPE_2_ADS_PRICE_REQUEST_FORM_SEND)
					}))
				},
				showSuccessText: function() {
					var e = "\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430. \u0421\u043f\u0430\u0441\u0438\u0431\u043e! <br />";
					this.options.showCompanies && (e += '\u041e\u041e\u041e "\u041c\u0418\u0414\u0410\u0421 \u0421\u0415\u0420\u0412\u0418\u0421" \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 <br /> \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 20 \u043c\u0438\u043d.'), this.region("modal:content").html(["<br />", '<p class="text-centered">', e, "</p>"].join(""))
				},
				formData: function() {
					var e = this.$el.find("form");
					return _.reduce(e.serializeArray(), function(e, t) {
						return e[t.name] = t.value, e
					}, {})
				},
				validateForm: function() {
					var e = 0,
						t = this.formData();
					return _.isBlank(t.name) ? (this.addError("name", "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"), e++) : this.clearError("name"), _.isBlank(t.phone) ? (this.addError("phone", "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"), e++) : this.clearError("phone"), _.isBlank(t.email) ? (this.addError("email", "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 email"), e++) : this.clearError("email"), _.isBlank(t.request_text) ? (this.addError("request_text", "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443"), e++) : this.clearError("request_text"), 0 === e
				},
				addError: function(e, t) {
					var n = this.$el.find('[data-error-name="' + e + '"]');
					n && n.html(t)
				},
				clearError: function(e) {
					var t = this.$el.find('[data-error-name="' + e + '"]');
					t && t.html("")
				}
			});
		return {
			PriceRequestForm: i
		}
	}), namespace("MC.Views.Details", function() {
		var e = MC.Common.Vent,
			t = MC.EventTypes,
			n = MC.Managers.VM,
			i = MC.Managers.CollectionManager,
			s = MC.Managers.State,
			o = MC.Utils.Helpers.resultNumFormat,
			r = MC.Core.View.extend({
				template: JST["app/templates/details/result"],
				events: {
					"click .js-show-price": "showPriceBlock",
					"click .js-widget-click": "onWidgetDownload",
					"focusin .js-mprice": "onPriceFocusIn",
					"focusout .js-mprice": "onPriceFocusOut",
					"keyup .js-mprice": "onPriceKeyup"
				},
				initialize: function(n) {
					r.__super__.initialize.apply(this, arguments), this.sortId = n.sortId, this.sortKey = null, this.sortament = null, this.priceHidden = !0, this.data = {
						a: 0,
						b: 0,
						d: 0,
						t: 0,
						l: 0,
						n: 0,
						p: 0,
						m: 0,
						M: 0
					}, e.on("calculated", this.onCalculated, this), e.on("calculate", this.onCalculate, this), e.on("sortament:set", this.setSortament, this), e.on("state:change:sort", this.setSortament, this), e.on("state:change:sort", this.hidePriceBlock, this), e.on("state:change:sort", this.hidePriceBtn, this), e.on("state:change", this.resetValue, this), e.on("state:change:calcType", this.setCalcTypeLabel, this), e.on("mprice:loaded state:change sortament:set", this.setPrice, this), e.on(t.PARTNER_TYPE_2_ADS_SHOW, function(e) {
						this.renderPartnerLogo(e.partner_logo)
					}, this), e.on(t.PARTNER_TYPE_2_ADS_HIDE, this.removePartnerLogo, this)
				},
				render: function() {
					return this.$el.html(this.template({
						isPartner: MC.Config.isPartner()
					})), this.setWeight(0), this.setSquare(0), this.region("details:result:price-block").hide(), this.region("details:result:summ-block").hide(), this.hidePriceBtn(), MC.Config.isCompactWidget() && (this.region("details:c1").hide(), this.region("details:c2").removeClass("unit-60").addClass("unit-100")), MC.Config.isPartner() && this.renderPartnerAdvert(), MC.Config.isPartner() || MC.Config.isWidget() || this.renderPriceRequestBlock(), MC.Config.isPartnerType2() || this.renderPartnerLogo($("#partner_logo").val()), MC.Config.showCampaignBtn() && this.renderCampaignBtn(), MC.Config.hasPartnerDownloadAppBtn() && this.renderPartnerDownloadBtn(), this
				},
				renderPartnerAdvert: function() {
					n.create(this, "partner_advert", MC.Views.Details.PartnerAdvert, {
						el: this.region("details:partner_advert")
					}).render()
				},
				renderPriceRequestBlock: function() {
					var e = this,
						t = n.create(this, "price_request_block", MC.Views.Details.PriceRequest, {
							el: this.region("details:result:price-request-block")
						}).render();
					t.on("show_offers", function() {
						this.region("details:c1").removeClass("unit-40").addClass("unit-20"), this.region("details:c2").removeClass("unit-60").addClass("unit-80")
					}, e), t.on("hide_offers", function() {
						this.region("details:c1").removeClass("unit-20").addClass("unit-40"), this.region("details:c2").removeClass("unit-80").addClass("unit-60")
					}, e)
				},
				renderCampaignBtn: function() {
					var e = this.region("details:partner_download_btn");
					if (e) {
						var t = $("<a/>", {
							text: "\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0439 \u0437\u0430 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440!",
							"class": "btn-link partner-download-link",
							href: "#"
						});
						t.on("click", function(e) {
							e.preventDefault(), n.create(this, "campaign_modal", MC.Views.Details.CampaignModal, {}).render()
						}), e.html(t)
					}
				},
				renderPartnerDownloadBtn: function() {
					var e = this.region("details:partner_download_btn");
					e && e.html($("<a/>", {
						text: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",
						"class": "btn-link partner-download-link",
						href: MC.Config.downloadAppLink,
						target: "_blank"
					}))
				},
				renderPartnerLogo: function(e) {
					var t = this.region("details:result:partner_logo");
					t && t.html($("<img />", {
						style: "height: 42px; margin-left: 10px;",
						src: e
					}))
				},
				removePartnerLogo: function() {
					var e = this.region("details:result:partner_logo");
					e.html("")
				},
				showPriceBtn: function() {
					return MC.Config.isCompactWidget() || MC.Config.isPartner() || MC.Config.isMediumWidget() ? !1 : void this.region("details:result:price-btn").show()
				},
				hidePriceBtn: function() {
					this.region("details:result:price-btn").hide()
				},
				showPriceBlock: function(t) {
					return t && t.preventDefault(), MC.Config.isCompactWidget() || MC.Config.isPartner() ? !1 : (this.hidePriceBtn(), this.region("details:result:price-block").show(), this.region("details:result:summ-block").show(), this.region("details:c1").removeClass("unit-40").addClass("unit-20"), this.region("details:c2").removeClass("unit-60").addClass("unit-80"), this.priceHidden = !1, void e.trigger("form:show_price_block"))
				},
				hidePriceBlock: function() {
					return MC.Config.isCompactWidget() || MC.Config.isPartner() ? !1 : (this.region("details:result:price-block").hide(), this.region("details:result:summ-block").hide(), this.region("details:c1").removeClass("unit-20").addClass("unit-40"), this.region("details:c2").removeClass("unit-80").addClass("unit-60"), void(this.priceHidden = !0))
				},
				setPrice: function() {
					var e = this.$el.find(".js-mprice"),
						t = i.getCollection("mpriceCollection").getForCurrentState();
					e.val(t)
				},
				onPriceFocusIn: function() {
					"0" == this.$el.find(".js-mprice").val() && this.$el.find(".js-mprice").val("")
				},
				onPriceFocusOut: function() {
					"" == this.$el.find(".js-mprice").val() && this.$el.find(".js-mprice").val("0")
				},
				onPriceKeyup: function() {
					this.calculateSumm()
				},
				calculateSumm: function() {
					var e = 0,
						t = this.calculateWeight();
					if (t > 0) {
						var n = this.$el.find(".js-mprice").val().replace(",", ".");
						e = (parseFloat(n) * parseFloat(t)).toFixed(0), this.setSumm(_.isNaN(e) ? 0 : e)
					}
				},
				showRequestBtn: function() {
					this.region("details:result:price-request-btn").show()
				},
				hideRequestBtn: function() {
					this.region("details:result:price-request-btn").hide()
				},
				setLength: function(e) {
					this.region("details:result:weight").text(o(e, 3) + " \u043c.")
				},
				setWeight: function(e) {
					this.region("details:result:weight").text(o(e) + " \u043a\u0433.")
				},
				setSquare: function(e) {
					this.region("details:result:square").text((e || 0) + " \u043c2")
				},
				onWidgetDownload: function() {
					e.trigger(t.WIDGET_DOWNLOAD_CLICK)
				},
				onCalculate: function(t, n) {
					var i = s.getCalcType();
					if (_.each(t, function(e) {
							_.has(this.data, e.name) && (this.data[e.name] = e.value)
						}, this), e.trigger("calculate:hide_error"), "weight" === i && !this.isValidWeight()) return void e.trigger("calculate:show_error");
					var r = this.calculateWeight(),
						a = this.calculateLength();
					if ("length" === i ? this.setLength(a) : this.setWeight(r), 1 != n && e.trigger("calculated", {
							calcType: i,
							length: a,
							weight: r,
							payload: t
						}), this.hasSquare()) {
						var l = MC.Utils.SquareCalc.list(this.data);
						this.setSquare(o(l))
					}
					this.priceHidden && "PRICE_CALCULATE" === s.getPriceBlockType() && "flange" != this.sortKey && "branch" != this.sortKey && this.showPriceBtn(), this.calculateSumm()
				},
				onCalculated: function(t) {
					"length" === t.calcType && (_.each(t.payload, function(e) {
						("l" === e.name || "b" === e.name) && (e.value = o(t.length, 3))
					}), e.trigger("calculated:length", t.payload))
				},
				setSumm: function(e) {
					var t = MC.Utils.Helpers.priceNumFormat(e);
					this.region("details:result:summ").text(t + " \u0440\u0443\u0431.")
				},
				setSortament: function(e) {
					var t = i.getCollection("sortamentCollection").get(e);
					t && (this.sortKey = t.get("key"));
					var n = this.region("details:result:s");
					this.hasSquare() ? n.show() : n.hide()
				},
				setCalcTypeLabel: function() {
					var e = this.region("details:result:w:label");
					e && ("length" === s.getCalcType() ? (e.text("\u0414\u043b\u0438\u043d\u0430"), this.setLength(0)) : (e.text("\u0412\u0435\u0441"), this.setWeight(0)))
				},
				isValidWeight: function() {
					var e = s.getCurrent(),
						t = this.data,
						n = !0;
					switch (e.sortId) {
						case 8:
							n = parseInt(t.d) - 2 * parseInt(t.t) > 1;
							break;
						case 9:
							n = parseInt(t.a) - 2 * parseInt(t.t) > 1 && parseInt(t.b) - 2 * parseInt(t.t) > 1
					}
					return n
				},
				showErorr: function() {
					e.trigger("calculate:show_error")
				},
				hideError: function() {
					e.trigger("calculate:hide_error")
				},
				calculateWeight: function() {
					var e = MC.Utils.WeightCalc[this.sortKey];
					return e ? e(this.data) : 0
				},
				calculateLength: function() {
					var e = MC.Utils.LengthCalc[this.sortKey];
					return e ? e(this.data) : 0
				},
				hasSquare: function() {
					return "list" == this.sortKey
				},
				resetValue: function() {
					this.setWeight(0), this.setSquare(0), this.setSumm(0)
				}
			});
		return {
			Result: r
		}
	}), namespace("MC.Views.Forms", function() {
		var e = MC.Managers.VM,
			t = MC.Managers.CollectionManager,
			n = MC.Common.Vent,
			i = MC.Managers.State,
			s = MC.Core.View.extend({
				events: {},
				initialize: function(e) {
					var t = this;
					s.__super__.initialize.apply(this, arguments), this.props = e.props, this.fields = e.fields, this.gradeId = e.gradeId, n.on("calculate:show_error", this.addError, this), n.on("calculate:hide_error", this.clearError, this), n.on("form:press_enter", this.onBtnClick, this), n.on("form:set", function(e) {
						e.noCalculate !== !0 && t.onBtnClick({
							setOnly: !0
						})
					}, this)
				},
				preRender: function() {
					if (MC.Config.isCompactWidget()) {
						var e = i.getCurrent(),
							s = t.getCollection("metallCollection");
						this.metallSelect = this.renderSelectField({
							label: "\u041c\u0435\u0442\u0430\u043b\u043b",
							type: "m\u0435\u0442\u0430\u043b\u043b",
							options: _.map(s.getAll(), function(t) {
								return {
									value: t.get("id"),
									text: t.get("title"),
									selected: t.get("id") == e.metallId
								}
							})
						}, function(e) {
							n.trigger("metall:select", {
								id: parseInt(e.value)
							})
						}, !0);
						var o = t.getCollection("sortamentCollection");
						this.sortamentSelect = this.renderSelectField({
							label: "\u0421\u043e\u0440\u0442\u0430\u043c\u0435\u043d\u0442",
							type: "sort",
							options: _.map(o.forMetall(e.metallId), function(t) {
								return {
									value: t.get("id"),
									text: t.get("title"),
									selected: t.get("id") == e.sortId
								}
							})
						}, function(e) {
							n.trigger("sortament:select", {
								id: parseInt(e.value)
							})
						}, !0)
					}
				},
				render: function() {
					return this.renderGradeSelectField(), _.each(this.fields, this.renderInputField, this), this.renderBtn(), this
				},
				renderInputField: function(t) {
					var n = e.create(this, "form_field_" + t.type, MC.Views.Forms.InputField, t);
					return n.render(), this.$el.append(n.$el), n
				},
				renderSelectField: function(t, n, i) {
					var s = e.create(this, "form_field_" + t.type, MC.Views.Forms.SelectField, {
						type: t.type,
						label: t.label,
						options: t.options,
						skipFirstTrigger: i
					});
					return _.isFunction(n) && s.on("change", n), s.render(), this.$el.append(s.$el), s
				},
				renderGradeSelectField: function() {
					var e = i.getCurrent().metallId,
						s = t.getCollection("gradeCollection").forMetall(e),
						o = t.getCollection("metallCollection").get(e),
						r = this.gradeId || o && o.get("default_grade");
					return this.renderSelectField({
						label: o.get("grade_title"),
						type: "p",
						options: _.map(s, function(e) {
							return {
								value: e.get("p"),
								text: e.get("title"),
								selected: e.get("title") == r
							}
						})
					}, function(e) {
						n.trigger("grade:change", e.text)
					}), s
				},
				renderBtn: function() {
					this.btn = $("<a />", {
						text: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",
						"class": "btn main-btn btn-green width-100"
					}), this.btn.on("click", _.bind(this.onBtnClick, this)), this.$el.append(this.btn)
				},
				disableBtn: function() {
					this.btn && this.btn.attr("disabled", !0)
				},
				unDisableBtn: function() {
					this.btn && this.btn.removeAttr("disabled")
				},
				onBtnClick: function(e) {
					e = e || {};
					var t = this.getChildByPrefix("form_field_"),
						i = _.map(t, function(e) {
							return {
								name: e.data.type,
								value: e.getValue()
							}
						});
					_.find(i, function(e) {
						return "l" == e.name
					}) || i.push({
						name: "l",
						value: "0"
					}), _.find(i, function(e) {
						return "b" == e.name
					}) || i.push({
						name: "b",
						value: "0"
					}), n.trigger("calculate", i, e.setOnly)
				},
				addError: function(e) {
					this.clearError(), this.errorCont = $("<div/>", {
						"class": "error",
						text: e || "\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"
					}), this.btn && this.btn.before(this.errorCont)
				},
				clearError: function() {
					this.errorCont && this.errorCont.remove()
				}
			});
		return {
			BaseForm: s
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Common.Vent, MC.Managers.State, MC.Views.Forms.BaseForm.extend({
			events: {},
			initialize: function() {
				e.__super__.initialize.apply(this, arguments)
			},
			render: function() {
				return this.renderSelectField({
					label: "\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0430\u043c\u0435\u0442\u0440",
					options: _.map(data_arm_variants, function(e) {
						return {
							text: e.d,
							value: e.d
						}
					}),
					type: "d"
				}), _.each(this.fields, this.renderInputField, this), this.renderBtn(), this
			}
		}));
		return {
			ArmatureForm: e
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Common.Vent),
			t = MC.Managers.State,
			n = {
				balkTypes: data_balk_types,
				balks: data_balks
			},
			i = MC.Views.Forms.BaseForm.extend({
				events: {},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments)
				},
				render: function() {
					return this.renderBalkTypeSelectField(), this.renderBalkSelectField(_.first(n.balkTypes).id), _.each(this.fields, this.renderInputField, this), this.balkTypeSelect.selectVal(2), this.renderBtn(), this
				},
				renderBalkTypeSelectField: function() {
					var e = this,
						i = _.map(n.balkTypes, function(e) {
							return {
								text: e.title,
								value: e.id
							}
						});
					this.balkTypeSelect = this.renderSelectField({
						options: i,
						label: "\u0422\u0438\u043f \u0431\u0430\u043b\u043a\u0438",
						type: "d"
					}), this.balkTypeSelect.on("change", function(n) {
						t.set("balkType", e.balkTypeSelect.getText()), this.renderBalkSelectField(n.value)
					}, this)
				},
				renderBalkSelectField: function(t) {
					var i = this,
						s = _.chain(n.balks).filter(function(e) {
							return e.type_id == t
						}).map(function(e) {
							return {
								text: e.number,
								value: e.id
							}
						}).value();
					this.balkSelect ? this.balkSelect.replaceOptions(s) : (this.balkSelect = this.renderSelectField({
						options: s,
						label: "\u041d\u043e\u043c\u0435\u0440 \u0431\u0430\u043b\u043a\u0438",
						type: "balk"
					}), this.balkSelect.on("change", function() {
						e.trigger("state:change:pane_data", {
							sortKey: "balk",
							data: _.findWhere(n.balks, {
								id: parseInt(i.balkSelect.getValue())
							})
						})
					}, this))
				},
				onBtnClick: function() {
					var t = parseInt(this.balkSelect.getValue()),
						i = _.findWhere(n.balks, {
							id: t
						}),
						s = this.children.form_field_l,
						o = this.children.form_field_M;
					e.trigger("calculate", [{
						name: "m",
						value: i ? i.m : 0
					}, {
						name: "l",
						value: s ? s.getValue() : 0
					}, {
						name: "M",
						value: o ? o.getValue() : 0
					}, {
						name: "type",
						value: this.balkSelect.getText()
					}])
				}
			});
		return {
			BalkForm: i
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Common.Vent),
			t = (MC.Managers.State, {
				branchTypes: data_branch_types,
				branches: data_branches
			}),
			n = 2,
			i = MC.Views.Forms.BaseForm.extend({
				events: {},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments)
				},
				render: function() {
					return this.renderBranchTypeSelectField(), this.renderBranchSelectField(n), this.lengthInput = this.renderInputField({
						label: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
						type: "n",
						disp: "\u0448\u0442."
					}), this.renderBtn(), this
				},
				renderBranchTypeSelectField: function() {
					var e = _.map(t.branchTypes, function(e) {
						return {
							text: e.title,
							value: e.id,
							selected: e.id == n
						}
					});
					this.branchTypeSelect = this.renderSelectField({
						options: e,
						label: "\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",
						type: "d"
					}), this.branchTypeSelect.on("change", function(e) {
						this.renderBranchSelectField(e.value)
					}, this)
				},
				renderBranchSelectField: function(e) {
					var n = _.chain(t.branches).filter(function(t) {
						return t.type_id == e
					}).map(function(e) {
						return {
							text: e.size,
							value: e.id
						}
					}).value();
					this.branchSelect ? this.branchSelect.replaceOptions(n) : (this.branchSelect = this.renderSelectField({
						options: n,
						label: "\u0420\u0430\u0437\u043c\u0435\u0440",
						type: "s"
					}), this.branchSelect.on("change", function() {}))
				},
				onBtnClick: function() {
					var n = parseInt(this.branchSelect.getValue()),
						i = _.findWhere(t.branches, {
							id: n
						}),
						s = this.lengthInput.getValue();
					e.trigger("calculate", [{
						name: "m",
						value: i ? i.m : 0
					}, {
						name: "n",
						value: s
					}, {
						name: "s",
						value: i ? i.size : ""
					}])
				}
			});
		return {
			BranchForm: i
		}
	}), namespace("MC.Views.Forms", function() {
		var e = MC.Managers.State,
			t = MC.Common.Vent,
			n = (MC.Managers.VM, MC.Core.View.extend({
				events: {
					"click .js-weight": "onWeightClick",
					"click .js-length": "onLengthClick"
				},
				template: _.template(['<div class="calc-togler-container">', '<div class="calc-togler">', '<div class="calc-togler-item m-left <%= isWeightCalc ? "m-active" : "" %> js-weight">\u0420\u0430\u0441\u0447\u0435\u0442 \u0432\u0435\u0441\u0430</div>', '<div class="calc-togler-item m-right <%= isLengthCalc ? "m-active" : "" %> js-length">\u0420\u0430\u0441\u0447\u0435\u0442 \u0434\u043b\u0438\u043d\u044b</div>', "</div>", "</div>"].join("")),
				initialize: function() {
					n.__super__.initialize.apply(this, arguments), t.on("state:change:calcType", this.render, this)
				},
				render: function() {
					var t = e.getCalcType();
					return this.$el.html(this.template({
						isWeightCalc: "weight" === t,
						isLengthCalc: "length" === t
					})), this
				},
				onWeightClick: function() {
					e.setCalcType("weight", {})
				},
				onLengthClick: function() {
					e.setCalcType("length", {})
				}
			}));
		return {
			CalcTogler: n
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Common.Vent),
			t = (MC.Managers.State, MC.Views.Forms.BaseForm.extend({
				events: {},
				initialize: function() {
					t.__super__.initialize.apply(this, arguments)
				},
				render: function() {
					return this.channelSelect = this.renderSelectField({
						label: "\u041d\u043e\u043c\u0435\u0440 \u0448\u0432\u0435\u043b\u043b\u0435\u0440\u0430",
						options: _.map(data_channels, function(e) {
							return {
								text: e.number,
								value: e.id
							}
						}),
						type: "d"
					}, function(t) {
						var n = _.findWhere(data_channels, {
							id: parseInt(t.value)
						});
						if (n) {
							var i = 1 == n.type_id ? "channelp" : "channely";
							e.trigger("set_img", i), e.trigger("state:change:pane_data", {
								sortKey: i,
								data: n
							})
						}
					}), _.each(this.fields, this.renderInputField, this), this.renderBtn(), this
				},
				onBtnClick: function() {
					var t = this.channelSelect.getValue(),
						n = _.findWhere(data_channels, {
							id: parseInt(t)
						}),
						i = this.children.form_field_l,
						s = this.children.form_field_M;
					e.trigger("calculate", [{
						name: "m",
						value: n ? n.m : 0
					}, {
						name: "l",
						value: i ? i.getValue() : 0
					}, {
						name: "M",
						value: s ? s.getValue() : 0
					}, {
						name: "number",
						value: n.number
					}])
				}
			}));
		return {
			ChannelForm: t
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Common.Vent),
			t = MC.Managers.State,
			n = {
				flangeTypes: data_flange_types,
				flanges: data_flanges
			},
			i = MC.Views.Forms.BaseForm.extend({
				events: {},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments)
				},
				render: function() {
					return this.renderFlangeTypeSelectField(), this.renderFlangeSelectField(_.first(n.flangeTypes).id), this.nInput = this.renderInputField({
						label: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
						type: "n",
						disp: "\u0448\u0442."
					}), this.flangeTypeSelect.selectVal(1), this.renderBtn(), this
				},
				renderFlangeTypeSelectField: function() {
					var e = this,
						i = _.map(n.flangeTypes, function(e) {
							return {
								text: e.title,
								value: e.id
							}
						});
					this.flangeTypeSelect = this.renderSelectField({
						options: i,
						label: "\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435",
						type: "d"
					}), this.flangeTypeSelect.on("change", function(n) {
						t.set("flangeType", e.flangeTypeSelect.getText()), this.renderFlangeSelectField(n.value)
					}, this)
				},
				renderFlangeSelectField: function(t) {
					var i = this,
						s = _.chain(n.flanges).filter(function(e) {
							return e.type_id == t
						}).map(function(e) {
							return {
								text: e.dy,
								value: e.id
							}
						}).value();
					i.flangeSelect ? i.flangeSelect.replaceOptions(s) : (i.flangeSelect = i.renderSelectField({
						options: s,
						label: "\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0439 \u0434\u0438\u0430\u043c\u0435\u0442\u0440",
						type: "flange"
					}), i.flangeSelect.on("change", function() {
						e.trigger("state:change:pane_data", {
							sortKey: "flange",
							data: _.findWhere(n.flanges, {
								id: parseInt(i.flangeSelect.getValue())
							})
						})
					}))
				},
				onBtnClick: function() {
					var t = parseInt(this.flangeSelect.getValue()),
						i = _.findWhere(n.flanges, {
							id: t
						}),
						s = this.nInput.getValue();
					e.trigger("calculate", [{
						name: "m",
						value: i ? i.m : 0
					}, {
						name: "n",
						value: s
					}, {
						name: "dy",
						value: i.dy
					}, {
						name: "pLabel",
						value: this.flangeTypeSelect.getText()
					}])
				}
			});
		return {
			FlangeForm: i
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.CollectionManager, MC.Managers.VM, MC.Common.Vent),
			t = MC.Core.View.extend({
				template: JST["app/templates/forms/input_field"],
				events: {
					"keypress input": "onChange",
					"focusin input": "onFocusIn",
					"focusout input": "onFocusOut"
				},
				initialize: function(e) {
					t.__super__.initialize.apply(this, arguments), this.data = _.defaults(e || {}, {
						label: "",
						type: "",
						disp: ""
					})
				},
				render: function() {
					return this.$el.html(this.template({
						label: this.data.label,
						disp: this.data.disp,
						type: this.data.type
					})), this.input = this.$el.find("input"), this.input.attr("placeholder", "0"), this
				},
				onChange: function(t) {
					var n = String.fromCharCode(t.keyCode || t.which),
						i = 8 === t.keyCode,
						s = /[0-9]|\,|\./.test(n);
					i || s || (t.returnValue = !1, t.preventDefault && t.preventDefault()), 13 === t.keyCode && e.trigger("form:press_enter")
				},
				getValue: function() {
					return this.input.val()
				},
				setValue: function(e) {
					return this.input.val(e)
				},
				onFocusIn: function() {
					this.$el.addClass("active"), this.input.removeAttr("placeholder")
				},
				onFocusOut: function() {
					this.$el.removeClass("active"), this.input.attr("placeholder", "0")
				}
			});
		return {
			InputField: t
		}
	}), namespace("MC.Views.Forms", function() {
		var e = MC.Managers.State,
			t = MC.Managers.CollectionManager,
			n = MC.Managers.VM,
			i = MC.Common.Vent,
			s = MC.Core.View.extend({
				template: JST["app/templates/forms/main"],
				events: {},
				initialize: function() {
					s.__super__.initialize.apply(this, arguments), i.on("state:set", function(e) {
						this.renderFormForSort(e.sortId, e.gradeId)
					}, this), i.on("state:change:sort", this.renderFormForSort, this), i.on("state:change:calcType", function(e) {
						this.renderFormForSort(e.sortId, e.gradeId), i.trigger("form:set", e)
					}, this), i.on("form:set", this.setValues, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this
				},
				clearFields: function() {
					this.clearChildStartWith("form_field_")
				},
				setValues: function(e) {
					var t = this.form;
					_.each(e, function(e, n) {
						var i = t.children["form_field_" + n];
						i && i.setValue(e, !0)
					}, this)
				},
				renderFormForSort: function(i, s) {
					var o = null,
						r = null,
						a = t.getCollection("sortamentCollection").get(i);
					if (a) {
						switch (a.get("has_calc_togler") ? this.renderCalcTogler() : this.removeCalcTogler(), o = a.get("key")) {
							case "armature":
								r = MC.Views.Forms.ArmatureForm;
								break;
							case "balk":
								r = MC.Views.Forms.BalkForm;
								break;
							case "flange":
								r = MC.Views.Forms.FlangeForm;
								break;
							case "branch":
								r = MC.Views.Forms.BranchForm;
								break;
							case "channel":
								r = MC.Views.Forms.ChannelForm;
								break;
							default:
								r = MC.Views.Forms.BaseForm
						}
						this.form = n.create(this, "form_main", r, {
							props: a.get("props"),
							fields: a.getFileds(e.getCalcType()),
							gradeId: s || null
						}), this.form.preRender(), this.form.render(), this.region("details:form:fields").html(this.form.$el)
					}
				},
				renderCalcTogler: function() {
					var e = $("<div />");
					this.region("details:form:calc_togler").html(e), n.create(this, "details_form_calc_togler", MC.Views.Forms.CalcTogler, {
						el: e
					}).render()
				},
				removeCalcTogler: function() {
					if (this.children) {
						var e = this.children.details_form_calc_togler;
						e && e.remove()
					}
				}
			});
		return {
			Main: s
		}
	}), namespace("MC.Views.Forms", function() {
		var e = (MC.Managers.State, MC.Common.Vent, MC.Managers.VM, MC.Managers.CollectionManager, MC.Core.View.extend({
			events: {
				change: "onChange"
			},
			template: JST["app/templates/forms/select_field"],
			initialize: function(t) {
				e.__super__.initialize.apply(this, arguments), this.data = _.defaults(t || {}, {
					options: [],
					label: "",
					type: "",
					name: "",
					skipFirstTrigger: !1
				})
			},
			render: function() {
				this.$el.html(this.template(this.data));
				_.findWhere(this.data.options, {
					selected: !0
				});
				return this.data.skipFirstTrigger !== !0 && this.onChange(), this
			},
			onChange: function() {
				var e = {
					value: this.getValue(),
					type: this.data.type,
					text: this.getText()
				};
				this.trigger("change", e)
			},
			selectVal: function(e, t) {
				this.$el.find("select").val(e), t !== !0 && this.$el.trigger("change")
			},
			setValue: function(e, t) {
				this.selectVal(e, t)
			},
			getValue: function() {
				return this.$el.find("select").val()
			},
			getText: function() {
				return this.$el.find("select option:selected").text()
			},
			replaceOptions: function(e) {
				this.data.options = e, this.render()
			}
		}));
		return {
			SelectField: e
		}
	}), namespace("MC.Views.Gosts", function() {
		var e = MC.Common.Vent,
			t = (MC.Managers.VM, MC.Managers.CollectionManager, MC.Core.View.extend({
				template: JST["app/templates/gosts/details"],
				listTemplate: JST["app/templates/gosts/list"],
				events: {
					"click .js-btn-showall": "showAll"
				},
				initialize: function() {
					t.__super__.initialize.apply(this, arguments), e.on("info:render_gosts_group", this.renderGroup, this), e.on("info:render_gosts_all", this.renderAllGroups, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this
				},
				renderGroup: function(e) {
					var t = _.extend(e, {
						showAll: !0
					});
					this.region("gosts:details").html(this.listTemplate(t)), this.region("gosts:details").scrollTop(0)
				},
				renderAllGroups: function() {
					var e = this.listTemplate,
						t = this.region("gosts:details");
					t.html(""), _.each(data_gosts, function(n) {
						var i = _.extend(n, {
							showAll: !1
						});
						t.append(e(i))
					}), this.delegateEvents(), t.scrollTop(0)
				},
				showAll: function(e) {
					e.preventDefault(), $a = $(e.target), $a.parent().children().show(), $a.hide()
				}
			}));
		return {
			Details: t
		}
	}), namespace("MC.Views.Gosts", function() {
		var e = MC.Common.Vent,
			t = MC.Managers.VM,
			n = (MC.Managers.CollectionManager, data_gosts),
			i = (MC.Utils.Helpers, MC.Core.View.extend({
				template: JST["app/templates/gosts/sidebar"],
				searchResultItem: _.template('<li class="search-result-item"><a target="_blank" href="<%= url %>"> <%= name %> </a></li>'),
				events: {
					"keyup .js-search": "search",
					"click .js-search-clear": "searchClear"
				},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments), e.on("route:change_all", this.setActive, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.renderItems(), this.addTooltip(), this
				},
				addTooltip: function() {
					var e = this,
						n = MC.Utils.Store;
					if (1 != n.get("gosts_search_clicked")) {
						var i = MC.Config.isMediumWidget();
						t.create(this, "gost_search_marker", MC.Views.Common.PulseMarker, {
							left: i ? 169 : 218,
							top: 9,
							tooltip: "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0413\u041e\u0421\u0422\u0430\u043c",
							appendTo: this.$el
						}).render().on("click", function() {
							e.$el.find(".js-search").focus(), n.set("gosts_search_clicked", !0)
						})
					}
				},
				renderItems: function() {
					this.region("gosts-list").html(""), _.each(n, this.renderItem, this)
				},
				renderItem: function(e) {
					var t = $("<li/>"),
						n = $("<a/>", {
							text: e.title,
							href: "#/info/gosts/groups/" + e.id
						});
					t.append(n), this.region("gosts-list").append(t)
				},
				setActive: function() {
					this.region("gosts-list").find("li.active").removeClass("active");
					var e = this.region("gosts-list").find('[href="' + location.hash + '"]');
					e && e.closest("li").addClass("active")
				},
				search: function() {
					var e = this,
						t = this.$el.find(".js-search").val().toLowerCase();
					if (0 == t.length) return this.setListView(), void this.hideSearchClear();
					this.showSearchClear();
					var n = !1;
					_.chain(data_gosts).reduce(function(e, t) {
						return e.concat(t.docs)
					}, []).filter(function(e) {
						return -1 != e.name.toLocaleLowerCase().indexOf(t)
					}).tap(function(e) {
						n = e.length > 0
					}).map(function(n) {
						var i = "(" + t + ")";
						return e.searchResultItem({
							name: n.name.replace(new RegExp(i, "ig"), '<span class="search-highlight">$1</span>'),
							url: n.url
						})
					}).reduce(function(e, t) {
						return e += t
					}, "").tap(function(t) {
						0 === t.length && (t = '<div class="search-empty-result js-empty-result">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e</div>'), e.region("gosts:search_list").html(t)
					}), this.setSearchView()
				},
				searchClear: function() {
					this.$el.find(".js-search").val(""), this.hideSearchClear(), this.setListView()
				},
				showSearchClear: function() {
					this.$el.find(".js-search-clear").show()
				},
				hideSearchClear: function() {
					this.$el.find(".js-search-clear").hide()
				},
				setListView: function() {
					this.region("gosts-list").show(), this.region("gosts:search_list").hide()
				},
				setSearchView: function() {
					this.region("gosts-list").hide(), this.region("gosts:search_list").show()
				},
				showEmptyResult: function() {
					this.region("gosts-list").append('<div class="search-empty-result js-empty-result">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e</div>')
				},
				clearEmptyResult: function() {
					this.region("gosts-list").find(".js-empty-result").remove()
				}
			}));
		return {
			Sidebar: i
		}
	}), namespace("MC.Views.Grades", function() {
		var e = (MC.Managers.VM, MC.Common.Vent),
			t = (MC.Managers.CollectionManager, MC.Core.View.extend({
				template: JST["app/templates/grades/details"],
				tableTemplate: JST["app/templates/grades/table"],
				gradeDetailsTemplate: JST["app/templates/grades/grade_details"],
				events: {},
				initialize: function() {
					t.__super__.initialize.apply(this, arguments), MC.Managers.CollectionManager.injectTo(this), e.on("info:steels:render_groups", this.renderGroups, this), e.on("info:steels:render_materials", this.renderMaterials, this), e.on("info:steels:render_grades", this.renderGrades, this), e.on("info:steels:render_grade", this.renderGradeDetails, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this
				},
				renderTable: function(e) {
					this.region("grade:details").html(this.tableTemplate({
						title: e.title,
						items: e.items,
						liCssClass: e.liCssClass || "mh60",
						backUrl: e.backUrl
					}))
				},
				renderGradeDetails: function(e) {
					var t = this;
					e.getBody(function(n) {
						t.region("grade:details").html(t.gradeDetailsTemplate({
							body: n,
							backUrl: e.getMaterial().getUrl()
						}))
					})
				},
				renderGroups: function(e) {
					var t = _.map(e, function(e) {
						return {
							title: e.get("title"),
							href: e.getUrl()
						}
					});
					this.renderTable({
						title: "\u0413\u0440\u0443\u043f\u043f\u044b \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432",
						items: t,
						liCssClass: "mh40"
					})
				},
				renderMaterials: function(e) {
					var t = _.map(e.getMaterials(), function(e) {
						return {
							title: e.get("title"),
							href: e.getUrl()
						}
					});
					this.renderTable({
						title: e.get("title"),
						items: t,
						backUrl: "#/info/steels"
					})
				},
				renderGrades: function(e) {
					var t = _.map(e.getGrades(), function(e) {
						return {
							title: e.get("title"),
							href: e.getUrl()
						}
					});
					this.renderTable({
						title: e.get("title"),
						items: t,
						liCssClass: "mh30",
						backUrl: e.getGroup().getUrl()
					})
				}
			}));
		return {
			Details: t
		}
	}), namespace("MC.Views.Grades", function() {
		var e = MC.Managers.VM,
			t = MC.Common.Vent,
			n = MC.Managers.CollectionManager,
			i = (MC.Utils.Helpers, MC.Core.View.extend({
				template: JST["app/templates/grades/list"],
				searchResultItem: _.template('<li class="search-result-item"><a href="<%= url %>"> <%= name %> </a></li>'),
				events: {
					"keyup .js-search": "search",
					"click .js-search-clear": "searchClear"
				},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments), n.injectTo(this), t.on("grades:loaded", this.renderItems, this), t.on("grades:loaded", this.renderItems, this), t.on("route:change_all", this.setActive, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.mMaterialGroupCollection.length > 0 && this.renderItems(), this.addTooltip(), this
				},
				addTooltip: function() {
					var t = this,
						n = MC.Utils.Store;
					if (1 != n.get("grade_search_clicked")) {
						var i = MC.Config.isMediumWidget();
						e.create(this, "grade_search_marker", MC.Views.Common.PulseMarker, {
							left: i ? 203 : 263,
							top: 9,
							tooltip: "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u0430\u0440\u043a\u0430\u043c",
							appendTo: this.$el
						}).render().on("click", function() {
							t.$el.find(".js-search").focus(), n.set("grade_search_clicked", !0)
						})
					}
				},
				renderItems: function() {
					var e = this,
						t = $("<ul/>");
					e.mMaterialGroupCollection.each(function(n) {
						t.append(e.getGroupItem(n))
					}), this.region("grades:list").html(t), this.setActive()
				},
				getGroupItem: function(e) {
					var t = this,
						n = $("<li/>"),
						i = $("<a/>", {
							"class": "js-s-hide",
							text: e.get("title"),
							href: e.getUrl()
						}),
						s = $("<ul/>", {
							"class": "js-materials-list"
						});
					s.hide();
					var o = t.mMaterialCollection.where({
						material_group_id: e.get("id")
					});
					return _.each(o, function(e) {
						s.append(t.getMaterialItem(e))
					}), n.append(this.getIcon()), n.append(i), n.append(s), n
				},
				getMaterialItem: function(e) {
					var t = this,
						n = $("<li/>"),
						i = $("<a/>", {
							"class": "js-s-hide",
							text: e.get("title"),
							href: e.getUrl()
						}),
						s = $("<ul/>", {
							"class": "js-grade-list"
						});
					s.hide();
					var o = t.mGradeCollection.where({
						material_id: e.get("id")
					});
					return _.each(o, function(e) {
						s.append(t.getGradeItem(e))
					}), n.append(this.getIcon()), n.append(i), n.append(s), n
				},
				getGradeItem: function(e) {
					var t = $("<li/>"),
						n = $("<a />", {
							"class": "js-grade grade-item",
							text: e.get("title"),
							href: e.getUrl()
						});
					return t.append(n), t
				},
				getIcon: function() {
					var e = $('<i class="js-s-hide flaticon stroke right-1"/>');
					return e.on("click", function() {
						var t = e.parent().children("ul");
						e.toggleClass("right-1 down-1"), t.toggle()
					}), e
				},
				search: function() {
					var e = this,
						t = this.$el.find(".js-search").val().toLowerCase();
					if (0 == t.length) return this.setListView(), void this.hideSearchClear();
					this.showSearchClear();
					var n = !1;
					_.chain(this.mGradeCollection.getAll()).map(function(e) {
						return {
							name: e.get("title"),
							url: e.getUrl()
						}
					}).filter(function(e) {
						return -1 != e.name.toLocaleLowerCase().indexOf(t)
					}).tap(function(e) {
						n = e.length > 0
					}).map(function(n) {
						var i = "(" + t + ")";
						return e.searchResultItem({
							name: n.name.replace(new RegExp(i, "ig"), '<span class="search-highlight">$1</span>'),
							url: n.url
						})
					}).reduce(function(e, t) {
						return e += t
					}, "").tap(function(t) {
						0 === t.length && (t = '<div class="search-empty-result js-empty-result">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e</div>'), e.region("grades:search_list").find("ul").html(t)
					}), this.setSearchView()
				},
				showEmptyResult: function() {
					this.region("grades:list").append('<div class="search-empty-result js-empty-result">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e</div>')
				},
				clearEmptyResult: function() {
					this.region("grades:list").find(".js-empty-result").remove()
				},
				setSearchView: function() {
					this.region("grades:list").hide(), this.region("grades:search_list").show()
				},
				setListView: function() {
					this.region("grades:list").show(), this.region("grades:search_list").hide()
				},
				clearActive: function() {
					var e = this.$el.find(".active");
					e && e.removeClass("active")
				},
				setActive: function() {
					this.clearActive(), this.region("grades:list").find(".js-materials-list, .js-grade-list").hide(), this.region("grades:list").find("i").removeClass("down-1").addClass("right-1");
					var e = $('[href="' + location.hash + '"]'),
						t = e.closest("li");
					if (t) {
						t.children("i").addClass("down-1").removeClass("right-1"), t.addClass("active"), t.children(".js-grade-list, .js-materials-list").show();
						var n = e.closest(".js-grade-list");
						n && (n.show(), n.closest("li").children("i").addClass("down-1").removeClass("right-1"));
						var i = e.closest(".js-materials-list");
						n && (i.show(), i.closest("li").children("i").addClass("down-1").removeClass("right-1"))
					}
				},
				searchClear: function() {
					this.$el.find(".js-search").val(""), this.hideSearchClear(), this.setListView()
				},
				showSearchClear: function() {
					this.$el.find(".js-search-clear").show()
				},
				hideSearchClear: function() {
					this.$el.find(".js-search-clear").hide()
				}
			}));
		return {
			List: i
		}
	}), namespace("MC.Views.History", function() {
		var e = (MC.Managers.VM, MC.Common.Vent),
			t = (MC.Managers.CollectionManager, MC.Utils.Helpers, MC.Core.View.extend({
				tagName: "li",
				template: JST["app/templates/history/item"],
				events: {
					click: "onClick",
					"click .js-remove": "onRemoveClick"
				},
				initialize: function(e) {
					t.__super__.initialize.apply(this, arguments), this.model = e.model, this.model.on("destroy", this.clean, this)
				},
				render: function() {
					return this.$el.html(this.template(this.model.toJSON())), this
				},
				onClick: function() {
					e.trigger("state:set", this.model.get("payload")), e.trigger("form:set", this.model.get("payload"))
				},
				onRemoveClick: function(e) {
					e.stopPropagation(), this.model.destroy()
				}
			}));
		return {
			Item: t
		}
	}), namespace("MC.Views.History", function() {
		var e = MC.Common.Vent,
			t = (MC.Utils.Helpers, MC.Managers.CollectionManager),
			n = MC.Managers.VM,
			i = MC.Core.View.extend({
				template: JST["app/templates/history/list"],
				events: {
					click: "onClick"
				},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments), e.on("app:click", this.onAppClick, this), t.getCollection("historyCollection").on("remove", this.checkLength, this)
				},
				clean: function() {
					t.getCollection("historyCollection").off("remove", this), e.off(null, null, this)
				},
				render: function() {
					return this.$el.html(this.template({})), this.renderItems(), this
				},
				renderItems: function() {
					var e = t.getCollection("historyCollection").getAll();
					_.each(e, this.renderItem, this), this.checkLength()
				},
				renderItem: function(e) {
					var t = n.create(this, "history_item" + e.cid, MC.Views.History.Item, {
						model: e
					}).render();
					this.region("history:list").prepend(t.$el)
				},
				checkLength: function() {
					0 == t.getCollection("historyCollection").length && this.region("history:list").html('<div class="search-empty-result">\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430</div>')
				},
				onAppClick: function() {
					e.trigger("history:close")
				},
				onClick: function(e) {
					e.stopPropagation()
				}
			});
		return {
			List: i
		}
	}), namespace("MC.Views", function() {
		var e = (MC.Managers.VM, MC.Common.Vent),
			t = MC.EventTypes,
			n = (MC.Utils.Store, MC.Core.View.extend({
				template: JST["app/templates/license"],
				activateSuccessTemplate: JST["app/templates/common/license_activate_success"],
				el: "#app",
				events: {
					"click .js-enter-key": "showEnterKeyForm",
					"click .js-get-key": "showGetKeyForm",
					"click .js-email-btn": "onRequestClick",
					"click .js-key-btn": "onActivateClick",
					"click .js-start": "onStartClick",
					"click .js-agree": "onAgreeClick",
					"click .js-show-agreement": "onShowAgreementClick",
					"click .js-popup-close": "closePopup",
					"change .js-agree-checkbox": "onAgreeChange"
				},
				initialize: function() {
					n.__super__.initialize.apply(this, arguments), e.trigger(t.LICENCE_PAGE_OPEN)
				},
				clean: function() {
					this.$el.html("")
				},
				render: function() {
					return this.$el.html(this.template({})), this.emailInput = this.$el.find('[name="email"]'), this.emailBtn = this.$el.find(".js-email-btn"), this.emailSpinner = this.$el.find(".js-email-spinner"), this.emailError = this.$el.find(".js-email-error"), this.keyInput = this.$el.find('[name="key"]'), this.keyBtn = this.$el.find(".js-key-btn"), this.keySpinner = this.$el.find(".js-key-spinner"), this.keyError = this.$el.find(".js-key-error"), this.agreeCheckbox = this.$el.find(".js-agree-checkbox"), this
				},
				showEnterKeyForm: function(e) {
					e && e.preventDefault(), this.region("license:get-key").addClass("hidden"), this.region("license:enter-key").removeClass("hidden")
				},
				showGetKeyForm: function(e) {
					e && e.preventDefault(), this.region("license:enter-key").addClass("hidden"), this.region("license:get-key").removeClass("hidden")
				},
				onActivateClick: function(n) {
					n && n.preventDefault();
					var i = this;
					this.action({
						name: "key",
						apiMethod: MC.Utils.Api.licenses.activate,
						data: {
							key: i.keyInput.val()
						},
						success: function() {
							MC.Utils.Store.set("license_key", i.keyInput.val()), i.region("license:enter-key").html(i.activateSuccessTemplate()), i.delegateEvents(), e.trigger(t.LICENCE_ACTIVATED)
						},
						error: function(e) {
							i.keyError.html(e.responseJSON.error)
						}
					})
				},
				onRequestClick: function(n) {
					n && n.preventDefault();
					var i = this;
					this.action({
						name: "email",
						apiMethod: MC.Utils.Api.licenses.request,
						data: {
							ip: MC.Managers.State.getIp(),
							email: i.emailInput.val(),
							source_type: MC.Config.get("sourceType")
						},
						success: function() {
							var n = i.region("license:get-key").find(".license-form-desc");
							n.html("\u041d\u0430 email <b>" + i.emailInput.val() + "</b> \u0431\u044b\u043b \u0432\u044b\u0441\u043b\u0430\u043d <br/> \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447.");
							var s = i.region("license:get-key").find(".license-form-bottom-info");
							s.html(s.find("a")), i.region("license:get-key").find(".license-form-input").remove(), e.trigger(t.LICENCE_REQUEST)
						},
						error: function(e) {
							i.emailError.html(e.responseJSON.error)
						}
					})
				},
				onStartClick: function(e) {
					e && e.preventDefault(), MC.bootstrap()
				},
				onShowAgreementClick: function(e) {
					e && e.preventDefault(), this.popup && this.popup.remove(), this.popup = $(JST["app/templates/common/agreement"]({})), this.$el.append(this.popup), this.delegateEvents()
				},
				closePopup: function() {
					this.popup && this.popup.remove()
				},
				onAgreeChange: function() {
					this.agreeCheckbox.is(":checked") ? (this.keyBtn.removeClass("btn-disabled"), this.keyBtn.removeAttr("disabled")) : (this.keyBtn.addClass("btn-disabled"), this.keyBtn.attr("disabled", "disabled"))
				},
				action: function(e) {
					var t = this.$el.find('[name="' + e.name + '"]'),
						n = this.$el.find(".js-" + e.name + "-btn"),
						i = this.$el.find(".js-" + e.name + "-spinner");
					t.css("opacity", .5), n.css("opacity", .5), i.removeClass("hidden"), e.apiMethod(e.data).success(e.success).error(e.error).complete(function() {
						t.css("opacity", 1), n.css("opacity", 1), i.addClass("hidden")
					})
				}
			}));
		return {
			License: n
		}
	}), namespace("MC.Views", function() {
		var e = MC.Managers.VM,
			t = MC.Managers.UserManager,
			n = MC.Common.Vent,
			i = MC.Utils.Store,
			s = MC.Config,
			o = MC.Core.View.extend({
				template: JST["app/templates/main"],
				el: "#app",
				events: {
					click: "onClick",
					"click .js-history": "toggleHistory"
				},
				initialize: function() {
					o.__super__.initialize.apply(this, arguments), n.on("route:change_all", this.setMenuActive, this), n.on("state:set", this.hideHistory, this), n.on("history:close", this.hideHistory, this), this.isCompactWidget = s.isCompactWidget() === !0, this.isMediumWidget = s.isMediumWidget() === !0, this.isPartnerType2 = s.isPartnerType2() === !0, this.isDesktop = s.isDesktop() === !0, this.isPartner = s.isPartner() === !0
				},
				render: function() {
					return this.$el.html(this.template({
						isCompactWidget: this.isCompactWidget,
						isMediumWidget: this.isMediumWidget,
						isPartnerType2: this.isPartnerType2,
						isDesktop: this.isDesktop,
						isPartner: this.isPartner
					})), this.btnHistory = this.$el.find(".js-history"), (s.isPartnerType2() || s.isDesktop() && !s.isPartner()) && t.showMetmetInfoPopUp() && (e.create(this, "metmet_info_modal", MC.Views.Details.MetmetInfoModal, {}).render(), t.setLastShowMetmetPopoUpDate()), this
				},
				clean: function() {
					this.$el.html(""), n.off(null, null, this)
				},
				renderCalculator: function() {
					if ("CALCULATOR" != this.currentView) {
						this.showHistoryBtn(), this.hideHistory(), this.$el.removeClass("sidebar30 sidebar25"), this.region("sidebar").html(JST["app/templates/sidebars/calculator"]()), e.create(this, "metalls", MC.Views.Metalls.List, {
							el: this.region("metalls")
						}).render(), e.create(this, "sortaments", MC.Views.Sortaments.List, {
							el: this.region("sortaments")
						}).render();
						var t = $('<div class="height100"/>');
						this.region("details").html(t), e.create(this, "details", MC.Views.Details.Main, {
							el: t
						}).render(), this.isCompactWidget && $(".app-wrap").addClass("compact-widget"), this.isMediumWidget && $(".app-wrap").addClass("medium-widget"), this.currentView = "CALCULATOR"
					}
				},
				renderInfoSteels: function() {
					if ("INFO_STEEL" != this.currentView) {
						this.hideHistoryBtn(), this.hideHistory(), this.$el.removeClass("sidebar25").addClass("sidebar30"), this.region("details").addClass("unit-80").removeClass("unit-70");
						var t = $('<div class="height100"/>');
						this.region("sidebar").html(t), e.create(this, "grades_list", MC.Views.Grades.List, {
							el: t
						}).render();
						var n = $('<div class="height100"/>');
						this.region("details").html(n), e.create(this, "grades_details", MC.Views.Grades.Details, {
							el: n
						}).render(), this.currentView = "INFO_STEEL"
					}
				},
				renderInfoGosts: function() {
					if ("INFO_GOSTS" != this.currentView) {
						this.hideHistoryBtn(), this.hideHistory(), this.$el.removeClass("sidebar30").addClass("sidebar25"), this.region("details").addClass("unit-80").removeClass("unit-70"), this.region("details").html("gosts");
						var t = $('<div class="height100"/>');
						this.region("sidebar").html(t), e.create(this, "gosts_sidebar", MC.Views.Gosts.Sidebar, {
							el: t
						}).render();
						var n = $('<div class="height100"/>');
						this.region("details").html(n), e.create(this, "gosts_details", MC.Views.Gosts.Details, {
							el: n
						}).render(), this.currentView = "INFO_GOSTS"
					}
				},
				showHistoryBtn: function() {
					var t = this;
					t.btnHistory.show(), 1 != i.get("history_clicked") && e.create(t, "gost_search_marker", MC.Views.Common.PulseMarker, {
						left: 3,
						top: 14,
						tooltip: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432",
						tooltipPosition: "left",
						appendTo: t.btnHistory.parent()
					}).render().on("click", function(e) {
						e.stopPropagation(), t.showHistory(), i.set("history_clicked", !0)
					})
				},
				hideHistoryBtn: function() {
					this.btnHistory.hide()
				},
				showHistory: function() {
					if ("CALCULATOR" == this.currentView) {
						this.region("right").show(), this.btnHistory.addClass("active");
						var t = $('<div class="height100"/>');
						this.region("right").html(t); {
							e.create(this, "calc_history", MC.Views.History.List, {
								el: t
							}).render()
						}
						this.btnHistory.text("\u0421\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")
					}
				},
				hideHistory: function() {
					this.region("right").hide(), this.btnHistory.removeClass("active"), this.btnHistory.text("\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432")
				},
				toggleHistory: function(e) {
					e && e.stopPropagation(), this.btnHistory.hasClass("active") ? this.hideHistory() : this.showHistory()
				},
				setMenuActive: function() {
					var e = "";
					switch (this.$el.find(".app-header a").removeClass("active"), this.currentView) {
						case "CALCULATOR":
							e = "#/";
							break;
						case "INFO_STEEL":
							e = "#/info/steels";
							break;
						case "INFO_GOSTS":
							e = "#/info/gosts"
					}
					var t = this.$el.find(".app-header").find('[href="' + e + '"]');
					t.length > 0 && t.addClass("active")
				},
				onClick: function(e) {
					n.trigger("app:click", e)
				}
			});
		return {
			Main: o
		}
	}), namespace("MC.Views.Metalls", function() {
		var e = MC.Common.Vent,
			t = MC.Core.View.extend({
				template: JST["app/templates/metalls/item"],
				tagName: "li",
				events: {
					click: "onClick"
				},
				initialize: function(n) {
					t.__super__.initialize.apply(this, arguments), this.model = n.model, this.isActive = n.isActive, e.on("metall:clear_active", this.setUnActive, this), e.on("metall:set", this.checkItem, this)
				},
				clean: function() {
					e.off(null, null, this), this.$el.remove()
				},
				render: function() {
					return this.$el.html(this.template(this.model.toJSON())), this.isActive && this.setActive(), this
				},
				onClick: function() {
					this.setActive()
				},
				setActive: function() {
					e.trigger("metall:select", {
						id: this.model.get("id")
					}), e.trigger("metall:clear_active"), this.$el.addClass("active"), this.isActive = !0
				},
				setUnActive: function() {
					this.$el.removeClass("active"), this.isActive = !0
				},
				checkItem: function(e) {
					e && this.model.get("id") === e.id && this.setActive()
				}
			});
		return {
			Item: t
		}
	}), namespace("MC.Views.Metalls", function() {
		var e = MC.Managers.VM,
			t = MC.Common.Vent,
			n = MC.Managers.CollectionManager.getCollection("metallCollection"),
			i = MC.Core.View.extend({
				template: JST["app/templates/metalls/list"],
				events: {},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments), t.on("state:set", this.renderItems, this)
				},
				clean: function() {
					t.off(null, null, this), this.$el.remove()
				},
				render: function() {
					return this.$el.html(this.template({})), this
				},
				renderItems: function(e) {
					_.each(n.getAll(), function(t) {
						this.renderItem(t, e.metallId === t.get("id"))
					}, this)
				},
				renderItem: function(t, n) {
					var i = e.create(this, "metall_item_" + t.cid, MC.Views.Metalls.Item, {
						model: t,
						isActive: n
					});
					i.render(), this.region("metall-list").append(i.$el)
				}
			});
		return {
			List: i
		}
	}), namespace("MC.Views.Sortaments", function() {
		var e = MC.Common.Vent,
			t = MC.Core.View.extend({
				template: JST["app/templates/sortaments/item"],
				tagName: "li",
				events: {
					click: "onClick"
				},
				initialize: function(n) {
					t.__super__.initialize.apply(this, arguments), this.model = n.model, e.on("sortament:clear_active", this.setUnActive, this)
				},
				render: function() {
					var e = JST["app/templates/icons/" + this.model.get("icon")];
					return this.$el.html(this.template(this.model.extendJson({
						iconSvg: e ? e() : ""
					}))), this
				},
				onClick: function() {
					this.setActive()
				},
				setActive: function() {
					e.trigger("sortament:select", {
						id: this.model.get("id"),
						key: this.model.get("key")
					}), e.trigger("sortament:clear_active"), this.$el.addClass("active")
				},
				setUnActive: function() {
					this.$el.removeClass("active")
				},
				checkItem: function(e) {
					e && this.model.get("id") === e.id && this.setActive()
				}
			});
		return {
			Item: t
		} 
	}), namespace("MC.Views.Sortaments", function() {
		var e = MC.Common.Vent,
			t = MC.Managers.VM,
			n = MC.Managers.CollectionManager,
			i = MC.Core.View.extend({
				template: JST["app/templates/sortaments/list"],
				events: {},
				initialize: function() {
					i.__super__.initialize.apply(this, arguments);
					var t = this;
					e.on("state:change:metall", this.renderItems, this), e.on("state:set", function(e) {
						t.renderItems(e.metallId, e.sortId)
					}, this)
				},
				clean: function() {
					e.off(null, null, this), this.$el.remove()
				},
				render: function() {
					return this.$el.html(this.template({})), this
				},
				renderItems: function(e, t) {
					this.region("sortament-list").html("");
					var i = n.getCollection("metallCollection").get(e);
					this.removeAllItems(), _.each(n.getCollection("sortamentCollection").forMetall(e), this.renderItem, this), this.setActive(t || i.get("default_sort_id"))
				},
				renderItem: function(e) {
					var n = t.create(this, "sortament_item_" + e.id, MC.Views.Sortaments.Item, {
						model: e
					});
					n.render(), this.region("sortament-list").append(n.$el)
				},
				removeAllItems: function() {
					var e = this.children;
					_.each(e, function(t, n) {
						-1 != n.indexOf("sortament_item_") && (t.clean(), delete e[n])
					})
				},
				setActive: function(e) {
					var t = this.children["sortament_item_" + e];
					t && t.setActive()
				},
				setFirstActive: function() {
					var e = _.first(this.getChildByPrefix("sortament_item_"));
					e && e.setActive()
				}
			});
		return {
			List: i
		}
	});