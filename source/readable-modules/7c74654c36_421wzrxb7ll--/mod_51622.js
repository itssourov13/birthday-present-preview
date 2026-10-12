/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "prefetch", {
      enumerable: !0,
      get: function () {
        return i;
      },
    });
  let n = e.r(50953),
    a = e.r(3971),
    l = e.r(50278),
    u = e.r(53973);
  function i(e, t, r, i, o) {
    let c = (0, n.createPrefetchURL)(e);
    if (null === c) return;
    let s = (0, a.createCacheKey)(c.href, t);
    (0, l.schedulePrefetchTask)(s, r, i, u.PrefetchPriority.Default, o);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
