/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "hasInterceptionRouteInCurrentTree", {
      enumerable: !0,
      get: function () {
        return function e([t, r]) {
          if (
            (Array.isArray(t) &&
              ("di(..)(..)" === t[2] ||
                "ci(..)(..)" === t[2] ||
                "di(.)" === t[2] ||
                "ci(.)" === t[2] ||
                "di(..)" === t[2] ||
                "ci(..)" === t[2] ||
                "di(...)" === t[2] ||
                "ci(...)" === t[2])) ||
            ("string" == typeof t && (0, n.isInterceptionRouteAppPath)(t))
          )
            return !0;
          if (r) {
            for (let t in r) if (e(r[t])) return !0;
          }
          return !1;
        };
      },
    });
  let n = e.r(65271);
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
