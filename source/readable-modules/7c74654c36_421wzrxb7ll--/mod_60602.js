/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "assignLocation", {
      enumerable: !0,
      get: function () {
        return a;
      },
    });
  let n = e.r(77052);
  function a(e, t) {
    if (e.startsWith(".")) {
      let r = t.origin + t.pathname;
      return new URL((r.endsWith("/") ? r : r + "/") + e);
    }
    return new URL((0, n.addBasePath)(e), t.href);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
