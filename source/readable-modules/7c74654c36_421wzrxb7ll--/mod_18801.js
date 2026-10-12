/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "matchSegment", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
  let n = (e, t) =>
    "string" == typeof e
      ? "string" == typeof t && e === t
      : "string" != typeof t && e[0] === t[0] && e[1] === t[1];
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
