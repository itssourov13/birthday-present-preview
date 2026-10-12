/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "useUntrackedPathname", {
      enumerable: !0,
      get: function () {
        return u;
      },
    });
  let n = e.r(12472),
    o = e.r(27797);
  function u() {
    return !(function () {
      if ("u" < typeof window) {
        let { workUnitAsyncStorage: t } = e.r(8386),
          r = t.getStore();
        if (!r) return !1;
        switch (r.type) {
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "validation-client":
            let n = r.fallbackRouteParams;
            return !!n && n.size > 0;
        }
      }
      return !1;
    })()
      ? (0, n.useContext)(o.PathnameContext)
      : null;
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
