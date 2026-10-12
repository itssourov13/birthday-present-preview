/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "pathHasPrefix", {
      enumerable: !0,
      get: function () {
        return a;
      },
    });
  let n = e.r(96641);
  function a(e, t) {
    if ("string" != typeof e) return !1;
    let { pathname: r } = (0, n.parsePath)(e);
    return r === t || r.startsWith(t + "/");
  }
};
