/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n() {
    let e,
      t,
      r = new Promise((r, n) => {
        (e = r), (t = n);
      });
    return { resolve: e, reject: t, promise: r };
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "createPromiseWithResolvers", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
};
