/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function () {
        return l;
      },
    });
  let n = e.r(73280),
    a = e.r(96641),
    l = (e) => {
      if (!e.startsWith("/")) return e;
      let { pathname: t, query: r, hash: l } = (0, a.parsePath)(e);
      return `${(0, n.removeTrailingSlash)(t)}${r}${l}`;
    };
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
