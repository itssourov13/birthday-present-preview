/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    UnknownDynamicStaleTime: function () {
      return i;
    },
    computeDynamicStaleAt: function () {
      return o;
    },
    invalidateBfCache: function () {
      return f;
    },
    readFromBFCache: function () {
      return y;
    },
    readFromBFCacheDuringRegularNavigation: function () {
      return g;
    },
    updateBFCacheEntryStaleAt: function () {
      return p;
    },
    writeHeadToBFCache: function () {
      return h;
    },
    writeToBFCache: function () {
      return d;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(30486),
    u = e.r(5039),
    i = -1;
  function o(e, t) {
    return t !== i ? e + 1e3 * t : e + l.DYNAMIC_STALETIME_MS;
  }
  let c = (0, u.createCacheMap)(),
    s = 0;
  function f() {
    "u" > typeof window && s++;
  }
  function d(e, t, r, n, a, l, i) {
    if ("u" < typeof window) return;
    let o = {
      rsc: r,
      prefetchRsc: n,
      head: a,
      prefetchHead: l,
      ref: null,
      size: 100,
      navigatedAt: e,
      staleAt: i,
      version: s,
    };
    (0, u.setInCacheMap)(c, t, o, !1);
  }
  function h(e, t, r, n, a) {
    d(e, t, r, n, null, null, a);
  }
  function p(e, t) {
    if ("u" < typeof window) return;
    let r = (0, u.getFromCacheMap)(-1, s, c, e, !1);
    null !== r && (r.staleAt = t);
  }
  function y(e) {
    return "u" < typeof window ? null : (0, u.getFromCacheMap)(-1, s, c, e, !1);
  }
  function g(e, t) {
    return "u" < typeof window ? null : (0, u.getFromCacheMap)(e, s, c, t, !1);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
