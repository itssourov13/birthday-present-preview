/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  var n = e.r(56662),
    a = { stream: !0 },
    l = Object.prototype.hasOwnProperty;
  function u(t) {
    var r = e.r(t);
    return "function" != typeof r.then || "fulfilled" === r.status
      ? null
      : (r.then(
          function (e) {
            (r.status = "fulfilled"), (r.value = e);
          },
          function (e) {
            (r.status = "rejected"), (r.reason = e);
          },
        ),
        r);
  }
  var i = new WeakSet(),
    o = new WeakSet();
  function c() {}
  function s(t) {
    for (var r = t[1], n = [], a = 0; a < r.length; a++) {
      var l = e.L(r[a]);
      if ((o.has(l) || n.push(l), !i.has(l))) {
        var s = o.add.bind(o, l);
        l.then(s, c), i.add(l);
      }
    }
    return 4 === t.length
      ? 0 === n.length
        ? u(t[0])
        : Promise.all(n).then(function () {
            return u(t[0]);
          })
      : 0 < n.length
        ? Promise.all(n)
        : null;
  }
  function f(t) {
    var r = e.r(t[0]);
    if (4 === t.length && "function" == typeof r.then)
      if ("fulfilled" === r.status) r = r.value;
      else throw r.reason;
    return "*" === t[2]
      ? r
      : "" === t[2]
        ? r.__esModule
          ? r.default
          : r
        : l.call(r, t[2])
          ? r[t[2]]
          : void 0;
  }
  var d = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    h = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.lazy"),
    y = Symbol.iterator,
    g = Symbol.asyncIterator,
    _ = Array.isArray,
    v = Object.getPrototypeOf,
    R = Object.prototype,
    E = new WeakMap();
  function m(e, t, r) {
    E.has(e) || E.set(e, { id: t, originalBind: e.bind, bound: r });
  }
  function P(e, t, r) {
    (this.status = e), (this.value = t), (this.reason = r);
  }
  function S(e) {
    switch (e.status) {
      case "resolved_model":
        F(e);
        break;
      case "resolved_module":
        U(e);
    }
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "pending":
      case "blocked":
      case "halted":
        throw e;
      default:
        throw e.reason;
    }
  }
  function b() {
    return new P("pending", null, null);
  }
  function T(e, t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var l = t[a];
      "function" == typeof l ? l(r) : H(e, l, r, n);
    }
  }
  function O(e, t, r) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      "function" == typeof a ? a(r) : V(e, a.handler, r);
    }
  }
  function w(e, t) {
    var r = t.handler.chunk;
    if (null === r) return null;
    if (r === e) return t.handler;
    if (null !== (t = r.value))
      for (r = 0; r < t.length; r++) {
        var n = t[r];
        if ("function" != typeof n && null !== (n = w(e, n))) return n;
      }
    return null;
  }
  function A(e, t, r, n) {
    switch (t.status) {
      case "fulfilled":
        T(e, r, t.value, t);
        break;
      case "blocked":
        for (var a = 0; a < r.length; a++) {
          var l = r[a];
          if ("function" != typeof l) {
            var u = w(t, l);
            if (null !== u)
              switch (
                (H(e, l, u.value, t),
                r.splice(a, 1),
                a--,
                null !== n && -1 !== (l = n.indexOf(l)) && n.splice(l, 1),
                t.status)
              ) {
                case "fulfilled":
                  T(e, r, t.value, t);
                  return;
                case "rejected":
                  null !== n && O(e, n, t.reason);
                  return;
              }
          }
        }
      case "pending":
        if (t.value) for (e = 0; e < r.length; e++) t.value.push(r[e]);
        else t.value = r;
        if (t.reason) {
          if (n) for (r = 0; r < n.length; r++) t.reason.push(n[r]);
        } else t.reason = n;
        break;
      case "rejected":
        n && O(e, n, t.reason);
    }
  }
  function C(e, t, r) {
    if ("pending" !== t.status && "blocked" !== t.status) t.reason.error(r);
    else {
      var n = t.reason;
      (t.status = "rejected"), (t.reason = r), null !== n && O(e, n, r);
    }
  }
  function N(e, t, r) {
    return new P(
      "resolved_model",
      (r ? '{"done":true,"value":' : '{"done":false,"value":') + t + "}",
      e,
    );
  }
  function I(e, t, r, n) {
    M(e, t, (n ? '{"done":true,"value":' : '{"done":false,"value":') + r + "}");
  }
  function M(e, t, r) {
    if ("pending" !== t.status) t.reason.enqueueModel(r);
    else {
      var n = t.value,
        a = t.reason;
      (t.status = "resolved_model"),
        (t.value = r),
        (t.reason = e),
        null !== n && (F(t), A(e, t, n, a));
    }
  }
  function j(e, t, r) {
    if ("pending" === t.status || "blocked" === t.status) {
      var n = t.value,
        a = t.reason;
      (t.status = "resolved_module"),
        (t.value = r),
        (t.reason = null),
        null !== n && (U(t), A(e, t, n, a));
    }
  }
  (P.prototype = Object.create(Promise.prototype)),
    (P.prototype.then = function (e, t) {
      switch (this.status) {
        case "resolved_model":
          F(this);
          break;
        case "resolved_module":
          U(this);
      }
      switch (this.status) {
        case "fulfilled":
          "function" == typeof e && e(this.value);
          break;
        case "pending":
        case "blocked":
          "function" == typeof e && (null === this.value && (this.value = []), this.value.push(e)),
            "function" == typeof t &&
              (null === this.reason && (this.reason = []), this.reason.push(t));
          break;
        case "halted":
          break;
        default:
          "function" == typeof t && t(this.reason);
      }
    });
  var D = null;
  function F(e) {
    var t = D;
    D = null;
    var r = e.value,
      n = e.reason;
    (e.status = "blocked"), (e.value = null), (e.reason = null);
    try {
      var a = ei(n, r),
        l = e.value;
      if (null !== l)
        for (e.value = null, e.reason = null, r = 0; r < l.length; r++) {
          var u = l[r];
          "function" == typeof u ? u(a) : H(n, u, a, e);
        }
      if (null !== D) {
        if (D.errored) throw D.reason;
        if (0 < D.deps) {
          (D.value = a), (D.chunk = e);
          return;
        }
      }
      (e.status = "fulfilled"), (e.value = a), (e.reason = null);
    } catch (t) {
      (e.status = "rejected"), (e.reason = t);
    } finally {
      D = t;
    }
  }
  function U(e) {
    try {
      var t = f(e.value);
      (e.status = "fulfilled"), (e.value = t), (e.reason = null);
    } catch (t) {
      (e.status = "rejected"), (e.reason = t);
    }
  }
  function L(e, t) {
    (e._closed = !0),
      (e._closedReason = t),
      e._chunks.forEach(function (r) {
        "pending" === r.status
          ? C(e, r, t)
          : "fulfilled" === r.status && null !== r.reason && r.reason.error(t);
      });
  }
  function k(e) {
    return { $$typeof: p, _payload: e, _init: S };
  }
  function x(e, t) {
    var r = e._chunks,
      n = r.get(t);
    return (
      n ||
        (e._closed
          ? e._allowPartialStream
            ? (((e = n = b()).status = "halted"), (e.value = null), (e.reason = null))
            : (n = new P("rejected", null, e._closedReason))
          : (n = b()),
        r.set(t, n)),
      n
    );
  }
  function H(e, t, r) {
    var n = t.handler,
      a = t.parentObject,
      u = t.key,
      i = t.map,
      o = t.path;
    try {
      for (var c = 1; c < o.length; c++) {
        for (; "object" == typeof r && null !== r && r.$$typeof === p; ) {
          var s = r._payload;
          if (s === n.chunk) r = n.value;
          else {
            switch (s.status) {
              case "resolved_model":
                F(s);
                break;
              case "resolved_module":
                U(s);
            }
            switch (s.status) {
              case "fulfilled":
                r = s.value;
                continue;
              case "blocked":
                var f = w(s, t);
                if (null !== f) {
                  r = f.value;
                  continue;
                }
              case "pending":
                o.splice(0, c - 1),
                  null === s.value ? (s.value = [t]) : s.value.push(t),
                  null === s.reason ? (s.reason = [t]) : s.reason.push(t);
                return;
              case "halted":
                return;
              default:
                V(e, t.handler, s.reason);
                return;
            }
          }
        }
        var d = o[c];
        if ("object" == typeof r && null !== r && l.call(r, d)) r = r[d];
        else throw Error("Invalid reference.");
      }
      for (; "object" == typeof r && null !== r && r.$$typeof === p; ) {
        var y = r._payload;
        if (y === n.chunk) r = n.value;
        else {
          switch (y.status) {
            case "resolved_model":
              F(y);
              break;
            case "resolved_module":
              U(y);
          }
          if ("fulfilled" === y.status) {
            r = y.value;
            continue;
          }
          break;
        }
      }
      var g = i(e, r, a, u);
      if (
        ("__proto__" !== u && (a[u] = g),
        "" === u && null === n.value && (n.value = g),
        a[0] === h && "object" == typeof n.value && null !== n.value && n.value.$$typeof === h)
      ) {
        var _ = n.value;
        "3" === u && (_.props = g);
      }
    } catch (r) {
      V(e, t.handler, r);
      return;
    }
    n.deps--,
      0 === n.deps &&
        null !== (t = n.chunk) &&
        "blocked" === t.status &&
        ((r = t.value),
        (t.status = "fulfilled"),
        (t.value = n.value),
        (t.reason = n.reason),
        null !== r && T(e, r, n.value, t));
  }
  function V(e, t, r) {
    t.errored ||
      ((t.errored = !0),
      (t.value = null),
      (t.reason = r),
      null !== (t = t.chunk) && "blocked" === t.status && C(e, t, r));
  }
  function B(e, t, r, n, a, l) {
    return (
      D
        ? ((n = D), n.deps++)
        : (n = D = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 }),
      (t = { handler: n, parentObject: t, key: r, map: a, path: l }),
      null === e.value ? (e.value = [t]) : e.value.push(t),
      null === e.reason ? (e.reason = [t]) : e.reason.push(t),
      null
    );
  }
  function X(e, t, r, n) {
    if (!e._serverReferenceConfig)
      return (function (e, t) {
        function r() {
          var e = Array.prototype.slice.call(arguments);
          return a
            ? "fulfilled" === a.status
              ? t(n, a.value.concat(e))
              : Promise.resolve(a).then(function (r) {
                  return t(n, r.concat(e));
                })
            : t(n, e);
        }
        var n = e.id,
          a = e.bound;
        return m(r, n, a), r;
      })(t, e._callServer);
    var a = (function (e, t) {
        var r = "",
          n = e[t];
        if (n) r = n.name;
        else {
          var a = t.lastIndexOf("#");
          if ((-1 !== a && ((r = t.slice(a + 1)), (n = e[t.slice(0, a)])), !n))
            throw Error(
              'Could not find the module "' +
                t +
                '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.',
            );
        }
        return n.async ? [n.id, n.chunks, r, 1] : [n.id, n.chunks, r];
      })(e._serverReferenceConfig, t.id),
      l = s(a);
    if (l) t.bound && (l = Promise.all([l, t.bound]));
    else {
      if (!t.bound) return m((l = f(a)), t.id, t.bound), l;
      l = Promise.resolve(t.bound);
    }
    if (D) {
      var u = D;
      u.deps++;
    } else u = D = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 };
    return (
      l.then(
        function () {
          var l = f(a);
          if (t.bound) {
            var i = t.bound.value.slice(0);
            i.unshift(null), (l = l.bind.apply(l, i));
          }
          m(l, t.id, t.bound),
            "__proto__" !== n && (r[n] = l),
            "" === n && null === u.value && (u.value = l),
            r[0] === h &&
              "object" == typeof u.value &&
              null !== u.value &&
              u.value.$$typeof === h &&
              ((i = u.value), "3" === n) &&
              (i.props = l),
            u.deps--,
            0 === u.deps &&
              null !== (l = u.chunk) &&
              "blocked" === l.status &&
              ((i = l.value),
              (l.status = "fulfilled"),
              (l.value = u.value),
              (l.reason = null),
              null !== i && T(e, i, u.value, l));
        },
        function (t) {
          if (!u.errored) {
            (u.errored = !0), (u.value = null), (u.reason = t);
            var r = u.chunk;
            null !== r && "blocked" === r.status && C(e, r, t);
          }
        },
      ),
      null
    );
  }
  function $(e, t, r, n, a) {
    var l = parseInt((t = t.split(":"))[0], 16);
    switch ((l = x(e, l)).status) {
      case "resolved_model":
        F(l);
        break;
      case "resolved_module":
        U(l);
    }
    switch (l.status) {
      case "fulfilled":
        l = l.value;
        for (var u = 1; u < t.length; u++) {
          for (; "object" == typeof l && null !== l && l.$$typeof === p; ) {
            switch ((l = l._payload).status) {
              case "resolved_model":
                F(l);
                break;
              case "resolved_module":
                U(l);
            }
            switch (l.status) {
              case "fulfilled":
                l = l.value;
                break;
              case "blocked":
              case "pending":
                return B(l, r, n, e, a, t.slice(u - 1));
              case "halted":
                return (
                  D
                    ? ((e = D), e.deps++)
                    : (D = {
                        parent: null,
                        chunk: null,
                        value: null,
                        reason: null,
                        deps: 1,
                        errored: !1,
                      }),
                  null
                );
              default:
                return (
                  D
                    ? ((D.errored = !0), (D.value = null), (D.reason = l.reason))
                    : (D = {
                        parent: null,
                        chunk: null,
                        value: null,
                        reason: l.reason,
                        deps: 0,
                        errored: !0,
                      }),
                  null
                );
            }
          }
          l = l[t[u]];
        }
        for (; "object" == typeof l && null !== l && l.$$typeof === p; ) {
          switch ((t = l._payload).status) {
            case "resolved_model":
              F(t);
              break;
            case "resolved_module":
              U(t);
          }
          if ("fulfilled" === t.status) {
            l = t.value;
            continue;
          }
          break;
        }
        return a(e, l, r, n);
      case "pending":
      case "blocked":
        return B(l, r, n, e, a, t);
      case "halted":
        return (
          D
            ? ((e = D), e.deps++)
            : (D = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 }),
          null
        );
      default:
        return (
          D
            ? ((D.errored = !0), (D.value = null), (D.reason = l.reason))
            : (D = {
                parent: null,
                chunk: null,
                value: null,
                reason: l.reason,
                deps: 0,
                errored: !0,
              }),
          null
        );
    }
  }
  function K(e, t) {
    return new Map(t);
  }
  function G(e, t) {
    return new Set(t);
  }
  function q(e, t) {
    return new Blob(t.slice(1), { type: t[0] });
  }
  function Y(e, t) {
    e = new FormData();
    for (var r = 0; r < t.length; r++) e.append(t[r][0], t[r][1]);
    return e;
  }
  function z(e, t) {
    return t[Symbol.iterator]();
  }
  function W(e, t) {
    return t;
  }
  function Q() {
    throw Error(
      'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
    );
  }
  function J(e, t, r, n, a, l, u, i) {
    var o = new Map();
    (this._bundlerConfig = e),
      (this._serverReferenceConfig = t),
      (this._moduleLoading = r),
      (this._callServer = void 0 !== n ? n : Q),
      (this._encodeFormAction = a),
      (this._nonce = l),
      (this._chunks = o),
      (this._stringDecoder = new TextDecoder()),
      (this._closed = !1),
      (this._closedReason = null),
      (this._allowPartialStream = i),
      (this._tempRefs = u);
  }
  function Z(e, t, r) {
    var n = (e = e._chunks).get(t);
    n && "pending" !== n.status
      ? n.reason.enqueueValue(r)
      : ((r = new P("fulfilled", r, null)), e.set(t, r));
  }
  function ee(e, t, r, n) {
    var a = e._chunks,
      l = a.get(t);
    l
      ? "pending" === l.status &&
        ((t = l.value),
        (l.status = "fulfilled"),
        (l.value = r),
        (l.reason = n),
        null !== t && T(e, t, l.value, l))
      : ((e = new P("fulfilled", r, n)), a.set(t, e));
  }
  function et(e, t, r) {
    var n = null,
      a = !1;
    r = new ReadableStream({
      type: r,
      start: function (e) {
        n = e;
      },
    });
    var l = null;
    ee(e, t, r, {
      enqueueValue: function (e) {
        null === l
          ? n.enqueue(e)
          : l.then(function () {
              n.enqueue(e);
            });
      },
      enqueueModel: function (t) {
        if (null === l) {
          var r = new P("resolved_model", t, e);
          F(r),
            "fulfilled" === r.status
              ? n.enqueue(r.value)
              : (r.then(
                  function (e) {
                    return n.enqueue(e);
                  },
                  function (e) {
                    return n.error(e);
                  },
                ),
                (l = r));
        } else {
          r = l;
          var a = b();
          a.then(
            function (e) {
              return n.enqueue(e);
            },
            function (e) {
              return n.error(e);
            },
          ),
            (l = a),
            r.then(function () {
              l === a && (l = null), M(e, a, t);
            });
        }
      },
      close: function () {
        if (!a)
          if (((a = !0), null === l)) n.close();
          else {
            var e = l;
            (l = null),
              e.then(function () {
                return n.close();
              });
          }
      },
      error: function (e) {
        if (!a)
          if (((a = !0), null === l)) n.error(e);
          else {
            var t = l;
            (l = null),
              t.then(function () {
                return n.error(e);
              });
          }
      },
    });
  }
  function er() {
    return this;
  }
  function en(e, t, r) {
    var n = [],
      a = !1,
      l = 0,
      u = {};
    (u[g] = function () {
      var e,
        t = 0;
      return (
        ((e = {
          next: (e = function (e) {
            if (void 0 !== e)
              throw Error(
                "Values cannot be passed to next() of AsyncIterables passed to Client Components.",
              );
            if (t === n.length) {
              if (a) return new P("fulfilled", { done: !0, value: void 0 }, null);
              n[t] = b();
            }
            return n[t++];
          }),
        })[g] = er),
        e
      );
    }),
      ee(e, t, r ? u[g]() : u, {
        enqueueValue: function (t) {
          if (l === n.length) n[l] = new P("fulfilled", { done: !1, value: t }, null);
          else {
            var r = n[l],
              a = r.value,
              u = r.reason;
            (r.status = "fulfilled"),
              (r.value = { done: !1, value: t }),
              (r.reason = null),
              null !== a && A(e, r, a, u);
          }
          l++;
        },
        enqueueModel: function (t) {
          l === n.length ? (n[l] = N(e, t, !1)) : I(e, n[l], t, !1), l++;
        },
        close: function (t) {
          if (!a)
            for (
              a = !0, l === n.length ? (n[l] = N(e, t, !0)) : I(e, n[l], t, !0), l++;
              l < n.length;

            )
              I(e, n[l++], '"$undefined"', !0);
        },
        error: function (t) {
          if (!a) for (a = !0, l === n.length && (n[l] = b()); l < n.length; ) C(e, n[l++], t);
        },
      });
  }
  function ea() {
    var e = Error(
      "An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.",
    );
    return (e.stack = "Error: " + e.message), e;
  }
  function el(e, t) {
    for (var r = e.length, n = t.length, a = 0; a < r; a++) n += e[a].byteLength;
    n = new Uint8Array(n);
    for (var l = (a = 0); l < r; l++) {
      var u = e[l];
      n.set(u, a), (a += u.byteLength);
    }
    return n.set(t, a), n;
  }
  function eu(e, t, r, n, a, l) {
    Z(
      e,
      t,
      (a = new a(
        (r = 0 === r.length && 0 == n.byteOffset % l ? n : el(r, n)).buffer,
        r.byteOffset,
        r.byteLength / l,
      )),
    );
  }
  function ei(e, t) {
    return (function e(t, r, n, a) {
      if ("string" == typeof r)
        return "$" === r[0]
          ? (function (e, t, r, n) {
              if ("$" === n[0]) {
                if ("$" === n)
                  return (
                    null !== D &&
                      "0" === r &&
                      (D = {
                        parent: D,
                        chunk: null,
                        value: null,
                        reason: null,
                        deps: 0,
                        errored: !1,
                      }),
                    h
                  );
                switch (n[1]) {
                  case "$":
                    return n.slice(1);
                  case "L":
                    return k((e = x(e, (t = parseInt(n.slice(2), 16)))));
                  case "@":
                    return x(e, (t = parseInt(n.slice(2), 16)));
                  case "S":
                    return Symbol.for(n.slice(2));
                  case "h":
                    return $(e, (n = n.slice(2)), t, r, X);
                  case "T":
                    if (((t = "$" + n.slice(2)), null == (e = e._tempRefs)))
                      throw Error(
                        "Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.",
                      );
                    return e.get(t);
                  case "Q":
                    return $(e, (n = n.slice(2)), t, r, K);
                  case "W":
                    return $(e, (n = n.slice(2)), t, r, G);
                  case "B":
                    return $(e, (n = n.slice(2)), t, r, q);
                  case "K":
                    return $(e, (n = n.slice(2)), t, r, Y);
                  case "Z":
                    return ea();
                  case "i":
                    return $(e, (n = n.slice(2)), t, r, z);
                  case "I":
                    return 1 / 0;
                  case "-":
                    return "$-0" === n ? -0 : -1 / 0;
                  case "N":
                    return NaN;
                  case "u":
                    return;
                  case "D":
                    return new Date(Date.parse(n.slice(2)));
                  case "n":
                    return BigInt(n.slice(2));
                  default:
                    return $(e, (n = n.slice(1)), t, r, W);
                }
              }
              return n;
            })(t, n, a, r)
          : r;
      if ("object" != typeof r || null === r) return r;
      if (_(r)) {
        for (var l = 0; l < r.length; l++) r[l] = e(t, r[l], r, "" + l);
        return r[0] === h
          ? (r[0] === h
              ? ((t = { $$typeof: h, type: r[1], key: r[2], ref: null, props: r[3] }),
                null !== D &&
                  ((D = (r = D).parent),
                  r.errored
                    ? (t = k((t = new P("rejected", null, r.reason))))
                    : 0 < r.deps &&
                      ((l = new P("blocked", null, null)),
                      (r.value = t),
                      (r.chunk = l),
                      (t = k(l)))))
              : (t = r),
            t)
          : r;
      }
      for (l in r)
        "__proto__" === l
          ? delete r[l]
          : void 0 !== (n = e(t, r[l], r, l))
            ? (r[l] = n)
            : delete r[l];
      return r;
    })(e, (t = JSON.parse(t)), { "": t }, "");
  }
  function eo(e) {
    e._allowPartialStream
      ? ((e._closed = !0),
        e._chunks.forEach(function (e) {
          "pending" === e.status
            ? ((e.status = "halted"), (e.value = null), (e.reason = null))
            : "fulfilled" === e.status && null !== e.reason && e.reason.close('"$undefined"');
        }))
      : L(e, Error("Connection closed."));
  }
  function ec(e) {
    return new J(
      null,
      null,
      null,
      e && e.callServer ? e.callServer : void 0,
      void 0,
      void 0,
      e && e.temporaryReferences ? e.temporaryReferences : void 0,
      !!e && !!e.unstable_allowPartialStream && e.unstable_allowPartialStream,
    );
  }
  function es(e, t, r) {
    function n(t) {
      L(e, t);
    }
    var l = { _rowState: 0, _rowID: 0, _rowTag: 0, _rowLength: 0, _buffer: [] },
      u = t.getReader();
    u.read()
      .then(function t(i) {
        var o = i.value;
        if (i.done) return r();
        var c = 0,
          f = l._rowState;
        i = l._rowID;
        for (var h = l._rowTag, p = l._rowLength, y = l._buffer, g = o.length; c < g; ) {
          var _ = -1;
          switch (f) {
            case 0:
              58 === (_ = o[c++]) ? (f = 1) : (i = (i << 4) | (96 < _ ? _ - 87 : _ - 48));
              continue;
            case 1:
              84 === (f = o[c]) ||
              65 === f ||
              79 === f ||
              111 === f ||
              98 === f ||
              85 === f ||
              83 === f ||
              115 === f ||
              76 === f ||
              108 === f ||
              71 === f ||
              103 === f ||
              77 === f ||
              109 === f ||
              86 === f
                ? ((h = f), (f = 2), c++)
                : (64 < f && 91 > f) || 35 === f || 114 === f || 120 === f
                  ? ((h = f), (f = 3), c++)
                  : ((h = 0), (f = 3));
              continue;
            case 2:
              44 === (_ = o[c++]) ? (f = 4) : (p = (p << 4) | (96 < _ ? _ - 87 : _ - 48));
              continue;
            case 3:
              _ = o.indexOf(10, c);
              break;
            case 4:
              (_ = c + p) > o.length && (_ = -1);
          }
          var v = o.byteOffset + c;
          if (-1 < _)
            (p = new Uint8Array(o.buffer, v, _ - c)),
              98 === h
                ? Z(e, i, _ === g ? p : p.slice())
                : (function (e, t, r, n, l, u) {
                    switch (n) {
                      case 65:
                        Z(e, r, el(l, u).buffer);
                        return;
                      case 79:
                        eu(e, r, l, u, Int8Array, 1);
                        return;
                      case 111:
                        Z(e, r, 0 === l.length ? u : el(l, u));
                        return;
                      case 85:
                        eu(e, r, l, u, Uint8ClampedArray, 1);
                        return;
                      case 83:
                        eu(e, r, l, u, Int16Array, 2);
                        return;
                      case 115:
                        eu(e, r, l, u, Uint16Array, 2);
                        return;
                      case 76:
                        eu(e, r, l, u, Int32Array, 4);
                        return;
                      case 108:
                        eu(e, r, l, u, Uint32Array, 4);
                        return;
                      case 71:
                        eu(e, r, l, u, Float32Array, 4);
                        return;
                      case 103:
                        eu(e, r, l, u, Float64Array, 8);
                        return;
                      case 77:
                        eu(e, r, l, u, BigInt64Array, 8);
                        return;
                      case 109:
                        eu(e, r, l, u, BigUint64Array, 8);
                        return;
                      case 86:
                        eu(e, r, l, u, DataView, 1);
                        return;
                    }
                    t = e._stringDecoder;
                    for (var i = "", o = 0; o < l.length; o++) i += t.decode(l[o], a);
                    switch (((l = i += t.decode(u)), n)) {
                      case 73:
                        var c = e,
                          f = r,
                          h = l,
                          p = c._chunks,
                          y = p.get(f);
                        h = ei(c, h);
                        var g = (function (e, t) {
                          if (e) {
                            var r = e[t[0]];
                            if ((e = r && r[t[2]])) r = e.name;
                            else {
                              if (!(e = r && r["*"]))
                                throw Error(
                                  'Could not find the module "' +
                                    t[0] +
                                    '" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.',
                                );
                              r = t[2];
                            }
                            return 4 === t.length ? [e.id, e.chunks, r, 1] : [e.id, e.chunks, r];
                          }
                          return t;
                        })(c._bundlerConfig, h);
                        if ((h = s(g))) {
                          if (y) {
                            var _ = y;
                            _.status = "blocked";
                          } else (_ = new P("blocked", null, null)), p.set(f, _);
                          h.then(
                            function () {
                              return j(c, _, g);
                            },
                            function (e) {
                              return C(c, _, e);
                            },
                          );
                        } else
                          y ? j(c, y, g) : ((y = new P("resolved_module", g, null)), p.set(f, y));
                        break;
                      case 72:
                        switch (((r = l[0]), (e = ei(e, (l = l.slice(1)))), (l = d.d), r)) {
                          case "D":
                            l.D(e);
                            break;
                          case "C":
                            "string" == typeof e ? l.C(e) : l.C(e[0], e[1]);
                            break;
                          case "L":
                            (r = e[0]), (n = e[1]), 3 === e.length ? l.L(r, n, e[2]) : l.L(r, n);
                            break;
                          case "m":
                            "string" == typeof e ? l.m(e) : l.m(e[0], e[1]);
                            break;
                          case "X":
                            "string" == typeof e ? l.X(e) : l.X(e[0], e[1]);
                            break;
                          case "S":
                            "string" == typeof e
                              ? l.S(e)
                              : l.S(
                                  e[0],
                                  0 === e[1] ? void 0 : e[1],
                                  3 === e.length ? e[2] : void 0,
                                );
                            break;
                          case "M":
                            "string" == typeof e ? l.M(e) : l.M(e[0], e[1]);
                        }
                        break;
                      case 69:
                        (u = (n = e._chunks).get(r)),
                          (l = JSON.parse(l)),
                          ((t = ea()).digest = l.digest),
                          u ? C(e, u, t) : ((e = new P("rejected", null, t)), n.set(r, e));
                        break;
                      case 84:
                        (n = (e = e._chunks).get(r)) && "pending" !== n.status
                          ? n.reason.enqueueValue(l)
                          : ((l = new P("fulfilled", l, null)), e.set(r, l));
                        break;
                      case 78:
                      case 68:
                      case 74:
                      case 87:
                        throw Error(
                          "Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.",
                        );
                      case 82:
                        et(e, r, void 0);
                        break;
                      case 114:
                        et(e, r, "bytes");
                        break;
                      case 88:
                        en(e, r, !1);
                        break;
                      case 120:
                        en(e, r, !0);
                        break;
                      case 67:
                        (r = e._chunks.get(r)) &&
                          "fulfilled" === r.status &&
                          r.reason.close("" === l ? '"$undefined"' : l);
                        break;
                      default:
                        (u = (n = e._chunks).get(r))
                          ? M(e, u, l)
                          : ((e = new P("resolved_model", l, e)), n.set(r, e));
                    }
                  })(e, l, i, h, y, p),
              (c = _),
              3 === f && c++,
              (p = i = h = f = 0),
              (y.length = 0);
          else {
            (o = new Uint8Array(o.buffer, v, o.byteLength - c)),
              98 === h ? ((p -= o.byteLength), Z(e, i, o)) : (y.push(o), (p -= o.byteLength));
            break;
          }
        }
        return (
          (l._rowState = f),
          (l._rowID = i),
          (l._rowTag = h),
          (l._rowLength = p),
          u.read().then(t).catch(n)
        );
      })
      .catch(n);
  }
  (r.createFromFetch = function (e, t) {
    var r = ec(t);
    return (
      e.then(
        function (e) {
          es(r, e.body, eo.bind(null, r));
        },
        function (e) {
          L(r, e);
        },
      ),
      x(r, 0)
    );
  }),
    (r.createFromReadableStream = function (e, t) {
      return es((t = ec(t)), e, eo.bind(null, t)), x(t, 0);
    }),
    (r.createServerReference = function (e, t) {
      function r() {
        var r = Array.prototype.slice.call(arguments);
        return t(e, r);
      }
      return m(r, e, null), r;
    }),
    (r.createTemporaryReferenceSet = function () {
      return new Map();
    }),
    (r.encodeReply = function (e, t) {
      return new Promise(function (r, n) {
        var a = (function (e, t, r, n) {
          function a(e, t) {
            t = new Blob([new Uint8Array(t.buffer, t.byteOffset, t.byteLength)]);
            var r = i++;
            return (
              null === c && (c = new FormData()), c.append("" + r, t), "$" + e + r.toString(16)
            );
          }
          function l(e, d) {
            if (null === d) return null;
            if ("object" == typeof d) {
              switch (d.$$typeof) {
                case h:
                  if (void 0 !== t && -1 === e.indexOf(":")) {
                    var m,
                      P,
                      S,
                      b,
                      T,
                      O = s.get(this);
                    if (void 0 !== O) return t.set(O + ":" + e, d), "$T";
                  }
                  if (void 0 !== t && f === d) return (f = null), "$T";
                  throw Error(
                    "React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.",
                  );
                case p:
                  O = d._payload;
                  var w = d._init;
                  null === c && (c = new FormData()), o++;
                  try {
                    var A = w(O),
                      C = i++,
                      N = u(A, C);
                    return c.append("" + C, N), "$" + C.toString(16);
                  } catch (e) {
                    if ("object" == typeof e && null !== e && "function" == typeof e.then) {
                      o++;
                      var I = i++;
                      return (
                        (O = function () {
                          try {
                            var e = u(d, I),
                              t = c;
                            t.append("" + I, e), o--, 0 === o && r(t);
                          } catch (e) {
                            n(e);
                          }
                        }),
                        e.then(O, O),
                        "$" + I.toString(16)
                      );
                    }
                    return n(e), null;
                  } finally {
                    o--;
                  }
              }
              if (((O = s.get(d)), "function" == typeof d.then)) {
                if (void 0 !== O)
                  if (f !== d) return O;
                  else f = null;
                null === c && (c = new FormData()), o++;
                var M = i++;
                return (
                  (e = "$@" + M.toString(16)),
                  s.set(d, e),
                  d.then(function (e) {
                    try {
                      var t = s.get(e),
                        a = void 0 !== t ? JSON.stringify(t) : u(e, M);
                      (e = c).append("" + M, a), o--, 0 === o && r(e);
                    } catch (e) {
                      n(e);
                    }
                  }, n),
                  e
                );
              }
              if (void 0 !== O)
                if (f !== d) return O;
                else f = null;
              else
                -1 === e.indexOf(":") &&
                  void 0 !== (O = s.get(this)) &&
                  ((e = O + ":" + e), s.set(d, e), void 0 !== t && t.set(e, d));
              if (_(d)) return d;
              if (d instanceof FormData) {
                null === c && (c = new FormData());
                var j = c,
                  D = "_" + (e = i++) + "_";
                return (
                  d.forEach(function (e, t) {
                    j.append(D + t, e);
                  }),
                  "$K" + e.toString(16)
                );
              }
              if (d instanceof Map)
                return (
                  (e = i++),
                  (O = u(Array.from(d), e)),
                  null === c && (c = new FormData()),
                  c.append("" + e, O),
                  "$Q" + e.toString(16)
                );
              if (d instanceof Set)
                return (
                  (e = i++),
                  (O = u(Array.from(d), e)),
                  null === c && (c = new FormData()),
                  c.append("" + e, O),
                  "$W" + e.toString(16)
                );
              if (d instanceof ArrayBuffer)
                return (
                  (e = new Blob([d])),
                  (O = i++),
                  null === c && (c = new FormData()),
                  c.append("" + O, e),
                  "$A" + O.toString(16)
                );
              if (d instanceof Int8Array) return a("O", d);
              if (d instanceof Uint8Array) return a("o", d);
              if (d instanceof Uint8ClampedArray) return a("U", d);
              if (d instanceof Int16Array) return a("S", d);
              if (d instanceof Uint16Array) return a("s", d);
              if (d instanceof Int32Array) return a("L", d);
              if (d instanceof Uint32Array) return a("l", d);
              if (d instanceof Float32Array) return a("G", d);
              if (d instanceof Float64Array) return a("g", d);
              if (d instanceof BigInt64Array) return a("M", d);
              if (d instanceof BigUint64Array) return a("m", d);
              if (d instanceof DataView) return a("V", d);
              if ("function" == typeof Blob && d instanceof Blob)
                return (
                  null === c && (c = new FormData()),
                  (e = i++),
                  c.append("" + e, d),
                  "$B" + e.toString(16)
                );
              if (
                (e =
                  null === (m = d) || "object" != typeof m
                    ? null
                    : "function" == typeof (m = (y && m[y]) || m["@@iterator"])
                      ? m
                      : null)
              )
                return (O = e.call(d)) === d
                  ? ((e = i++),
                    (O = u(Array.from(O), e)),
                    null === c && (c = new FormData()),
                    c.append("" + e, O),
                    "$i" + e.toString(16))
                  : Array.from(O);
              if ("function" == typeof ReadableStream && d instanceof ReadableStream)
                return (function (e) {
                  try {
                    var t,
                      a,
                      u,
                      s,
                      f,
                      d,
                      h,
                      p = e.getReader({ mode: "byob" });
                  } catch (s) {
                    return (
                      (t = e.getReader()),
                      null === c && (c = new FormData()),
                      (a = c),
                      o++,
                      (u = i++),
                      t.read().then(function e(i) {
                        if (i.done) a.append("" + u, "C"), 0 == --o && r(a);
                        else
                          try {
                            var c = JSON.stringify(i.value, l);
                            a.append("" + u, c), t.read().then(e, n);
                          } catch (e) {
                            n(e);
                          }
                      }, n),
                      "$R" + u.toString(16)
                    );
                  }
                  return (
                    (s = p),
                    null === c && (c = new FormData()),
                    (f = c),
                    o++,
                    (d = i++),
                    (h = []),
                    s.read(new Uint8Array(1024)).then(function e(t) {
                      t.done
                        ? ((t = i++),
                          f.append("" + t, new Blob(h)),
                          f.append("" + d, '"$o' + t.toString(16) + '"'),
                          f.append("" + d, "C"),
                          0 == --o && r(f))
                        : (h.push(t.value), s.read(new Uint8Array(1024)).then(e, n));
                    }, n),
                    "$r" + d.toString(16)
                  );
                })(d);
              if ("function" == typeof (e = d[g]))
                return (
                  (P = d),
                  (S = e.call(d)),
                  null === c && (c = new FormData()),
                  (b = c),
                  o++,
                  (T = i++),
                  (P = P === S),
                  S.next().then(function e(t) {
                    if (t.done) {
                      if (void 0 === t.value) b.append("" + T, "C");
                      else
                        try {
                          var a = JSON.stringify(t.value, l);
                          b.append("" + T, "C" + a);
                        } catch (e) {
                          n(e);
                          return;
                        }
                      0 == --o && r(b);
                    } else
                      try {
                        var u = JSON.stringify(t.value, l);
                        b.append("" + T, u), S.next().then(e, n);
                      } catch (e) {
                        n(e);
                      }
                  }, n),
                  "$" + (P ? "x" : "X") + T.toString(16)
                );
              if ((e = v(d)) !== R && (null === e || null !== v(e))) {
                if (void 0 === t)
                  throw Error(
                    "Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.",
                  );
                return "$T";
              }
              return d;
            }
            if ("string" == typeof d)
              return "Z" === d[d.length - 1] && this[e] instanceof Date
                ? "$D" + d
                : (e = "$" === d[0] ? "$" + d : d);
            if ("boolean" == typeof d) return d;
            if ("number" == typeof d)
              return Number.isFinite(d)
                ? 0 === d && -1 / 0 == 1 / d
                  ? "$-0"
                  : d
                : 1 / 0 === d
                  ? "$Infinity"
                  : -1 / 0 === d
                    ? "$-Infinity"
                    : "$NaN";
            if (void 0 === d) return "$undefined";
            if ("function" == typeof d) {
              if (void 0 !== (O = E.get(d)))
                return (
                  void 0 !== (e = s.get(d)) ||
                    ((e = JSON.stringify({ id: O.id, bound: O.bound }, l)),
                    null === c && (c = new FormData()),
                    (O = i++),
                    c.set("" + O, e),
                    (e = "$h" + O.toString(16)),
                    s.set(d, e)),
                  e
                );
              if (void 0 !== t && -1 === e.indexOf(":") && void 0 !== (O = s.get(this)))
                return t.set(O + ":" + e, d), "$T";
              throw Error(
                "Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.",
              );
            }
            if ("symbol" == typeof d) {
              if (void 0 !== t && -1 === e.indexOf(":") && void 0 !== (O = s.get(this)))
                return t.set(O + ":" + e, d), "$T";
              throw Error(
                "Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.",
              );
            }
            if ("bigint" == typeof d) return "$n" + d.toString(10);
            throw Error(
              "Type " + typeof d + " is not supported as an argument to a Server Function.",
            );
          }
          function u(e, r) {
            return (
              "object" == typeof e &&
                null !== e &&
                ((r = "$" + r.toString(16)), s.set(e, r), void 0 !== t && t.set(r, e)),
              (f = e),
              JSON.stringify(e, l)
            );
          }
          var i = 1,
            o = 0,
            c = null,
            s = new WeakMap(),
            f = e,
            d = u(e, 0);
          return (
            null === c ? r(d) : (c.set("0", d), 0 === o && r(c)),
            function () {
              0 < o && ((o = 0), null === c ? r(d) : r(c));
            }
          );
        })(e, t && t.temporaryReferences ? t.temporaryReferences : void 0, r, n);
        if (t && t.signal) {
          var l = t.signal;
          if (l.aborted) a(l.reason);
          else {
            var u = function () {
              a(l.reason), l.removeEventListener("abort", u);
            };
            l.addEventListener("abort", u);
          }
        }
      });
    }),
    (r.registerServerReference = function (e, t) {
      return m(e, t, null), e;
    });
};
