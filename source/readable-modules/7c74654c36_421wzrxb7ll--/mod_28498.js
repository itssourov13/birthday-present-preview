/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    refreshDynamicData: function () {
      return d;
    },
    refreshReducer: function () {
      return f;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(72458),
    u = e.r(75439),
    i = e.r(69092),
    o = e.r(76279),
    c = e.r(47155),
    s = e.r(5243);
  function f(e, t) {
    {
      let t = e.nextUrl,
        r = e.tree;
      (0, i.invalidateSegmentCacheEntries)(t, r);
    }
    return d(e, c.FreshnessPolicy.RefreshAll);
  }
  function d(e, t) {
    (0, s.invalidateBfCache)();
    let r = e.nextUrl,
      n = (0, o.hasInterceptionRouteInCurrentTree)(e.tree) ? e.previousNextUrl || r : null,
      a = e.canonicalUrl,
      i = new URL(a, location.origin),
      c = e.renderedSearch,
      f = e.tree,
      d = l.ScrollBehavior.NoScroll,
      h = Date.now(),
      p = (0, u.convertServerPatchToFullTree)(h, f, null, c, s.UnknownDynamicStaleTime);
    return (0, u.navigateToKnownRoute)(
      h,
      e,
      i,
      a,
      p,
      i,
      c,
      e.cache,
      f,
      t,
      n,
      d,
      "replace",
      null,
      null,
    );
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
