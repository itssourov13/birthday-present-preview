/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "addPathPrefix", {
      enumerable: !0,
      get: function () {
        return a;
      },
    });
  let n = e.r(96641);
  function a(e, t) {
    if (!e.startsWith("/") || !t) return e;
    let { pathname: r, query: a, hash: l } = (0, n.parsePath)(e);
    return `${t}${r}${a}${l}`;
  }
};
