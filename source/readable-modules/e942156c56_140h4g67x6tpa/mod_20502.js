/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "InvariantError", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
  class n extends Error {
    constructor(e, t) {
      super(`Invariant: ${e.endsWith(".") ? e : e + "."} This is a bug in Next.js.`, t),
        (this.name = "InvariantError");
    }
  }
};
