/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n(e, t) {
    let r = new URL(e);
    return { pathname: r.pathname, search: r.search, nextUrl: t };
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "createCacheKey", {
      enumerable: !0,
      get: function () {
        return n;
      },
    }),
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
};
