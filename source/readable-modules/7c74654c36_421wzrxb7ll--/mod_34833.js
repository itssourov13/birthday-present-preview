/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "isNavigatingToNewRootLayout", {
      enumerable: !0,
      get: function () {
        return function e(t, r) {
          let a = t[0],
            l = r.segment;
          if (Array.isArray(a) && Array.isArray(l)) {
            if (a[0] !== l[0] || a[2] !== l[2]) return !0;
          } else if (a !== l) return !0;
          let u = ((t[4] ?? 0) & n.PrefetchHint.IsRootLayout) != 0,
            i = (r.prefetchHints & n.PrefetchHint.IsRootLayout) != 0;
          if (u) return !i;
          if (i) return !0;
          let o = r.slots,
            c = t[1];
          if (null !== o)
            for (let t in o) {
              let r = o[t],
                n = c[t];
              if (void 0 === n || e(n, r)) return !0;
            }
          return !1;
        };
      },
    });
  let n = e.r(1109);
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
