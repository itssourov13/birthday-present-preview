/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n(e) {
    return null !== e && "object" == typeof e && "then" in e && "function" == typeof e.then;
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "isThenable", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
};
