/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  function r(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n; ) {
      var r = (n - 1) >>> 1,
        l = e[r];
      if (0 < o(l, t)) (e[r] = t), (e[n] = l), (n = r);
      else break;
    }
  }
  function l(e) {
    return 0 === e.length ? null : e[0];
  }
  function a(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      for (var r = 0, l = e.length, a = l >>> 1; r < a; ) {
        var i = 2 * (r + 1) - 1,
          u = e[i],
          s = i + 1,
          c = e[s];
        if (0 > o(u, n))
          s < l && 0 > o(c, u)
            ? ((e[r] = c), (e[s] = n), (r = s))
            : ((e[r] = u), (e[i] = n), (r = i));
        else if (s < l && 0 > o(c, n)) (e[r] = c), (e[s] = n), (r = s);
        else break;
      }
    }
    return t;
  }
  function o(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if (
    ((n.unstable_now = void 0),
    "object" == typeof performance && "function" == typeof performance.now)
  ) {
    var i,
      u = performance;
    n.unstable_now = function () {
      return u.now();
    };
  } else {
    var s = Date,
      c = s.now();
    n.unstable_now = function () {
      return s.now() - c;
    };
  }
  var f = [],
    d = [],
    p = 1,
    m = null,
    h = 3,
    g = !1,
    v = !1,
    y = !1,
    b = !1,
    w = "function" == typeof setTimeout ? setTimeout : null,
    S = "function" == typeof clearTimeout ? clearTimeout : null,
    k = "u" > typeof setImmediate ? setImmediate : null;
  function E(e) {
    for (var t = l(d); null !== t; ) {
      if (null === t.callback) a(d);
      else if (t.startTime <= e) a(d), (t.sortIndex = t.expirationTime), r(f, t);
      else break;
      t = l(d);
    }
  }
  function _(e) {
    if (((y = !1), E(e), !v))
      if (null !== l(f)) (v = !0), x || ((x = !0), i());
      else {
        var t = l(d);
        null !== t && R(_, t.startTime - e);
      }
  }
  var x = !1,
    N = -1,
    P = 5,
    C = -1;
  function T() {
    return !!b || !(n.unstable_now() - C < P);
  }
  function O() {
    if (((b = !1), x)) {
      var e = n.unstable_now();
      C = e;
      var t = !0;
      try {
        e: {
          (v = !1), y && ((y = !1), S(N), (N = -1)), (g = !0);
          var r = h;
          try {
            t: {
              for (E(e), m = l(f); null !== m && !(m.expirationTime > e && T()); ) {
                var o = m.callback;
                if ("function" == typeof o) {
                  (m.callback = null), (h = m.priorityLevel);
                  var u = o(m.expirationTime <= e);
                  if (((e = n.unstable_now()), "function" == typeof u)) {
                    (m.callback = u), E(e), (t = !0);
                    break t;
                  }
                  m === l(f) && a(f), E(e);
                } else a(f);
                m = l(f);
              }
              if (null !== m) t = !0;
              else {
                var s = l(d);
                null !== s && R(_, s.startTime - e), (t = !1);
              }
            }
            break e;
          } finally {
            (m = null), (h = r), (g = !1);
          }
        }
      } finally {
        t ? i() : (x = !1);
      }
    }
  }
  if ("function" == typeof k)
    i = function () {
      k(O);
    };
  else if ("u" > typeof MessageChannel) {
    var z = new MessageChannel(),
      L = z.port2;
    (z.port1.onmessage = O),
      (i = function () {
        L.postMessage(null);
      });
  } else
    i = function () {
      w(O, 0);
    };
  function R(e, t) {
    N = w(function () {
      e(n.unstable_now());
    }, t);
  }
  (n.unstable_IdlePriority = 5),
    (n.unstable_ImmediatePriority = 1),
    (n.unstable_LowPriority = 4),
    (n.unstable_NormalPriority = 3),
    (n.unstable_Profiling = null),
    (n.unstable_UserBlockingPriority = 2),
    (n.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (n.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (n.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (n.unstable_next = function (e) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = h;
      }
      var n = h;
      h = t;
      try {
        return e();
      } finally {
        h = n;
      }
    }),
    (n.unstable_requestPaint = function () {
      b = !0;
    }),
    (n.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = h;
      h = e;
      try {
        return t();
      } finally {
        h = n;
      }
    }),
    (n.unstable_scheduleCallback = function (e, t, a) {
      var o = n.unstable_now();
      switch (
        ((a =
          "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a
            ? o + a
            : o),
        e)
      ) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 0x3fffffff;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return (
        (u = a + u),
        (e = {
          id: p++,
          callback: t,
          priorityLevel: e,
          startTime: a,
          expirationTime: u,
          sortIndex: -1,
        }),
        a > o
          ? ((e.sortIndex = a),
            r(d, e),
            null === l(f) && e === l(d) && (y ? (S(N), (N = -1)) : (y = !0), R(_, a - o)))
          : ((e.sortIndex = u), r(f, e), v || g || ((v = !0), x || ((x = !0), i()))),
        e
      );
    }),
    (n.unstable_shouldYield = T),
    (n.unstable_wrapCallback = function (e) {
      var t = h;
      return function () {
        var n = h;
        h = t;
        try {
          return e.apply(this, arguments);
        } finally {
          h = n;
        }
      };
    });
};
