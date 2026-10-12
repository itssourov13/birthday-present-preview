/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    DYNAMIC_STALETIME_MS: function () {
      return o;
    },
    STATIC_STALETIME_MS: function () {
      return c;
    },
    navigateReducer: function () {
      return s;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(75439),
    u = e.r(69092),
    i = e.r(47155),
    o = 1e3 * Number("0"),
    c = (0, u.getStaleTimeMs)(Number("300"));
  function s(e, t) {
    let { url: r, isExternalUrl: n, navigateType: a, scrollBehavior: u } = t;
    if (n || document.getElementById("__next-page-redirect"))
      return (0, l.completeHardNavigation)(e, r, a);
    let o = new URL(e.canonicalUrl, location.origin),
      c = e.renderedSearch;
    return (0, l.navigate)(e, r, o, c, e.cache, e.tree, e.nextUrl, i.FreshnessPolicy.Default, u, a);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
