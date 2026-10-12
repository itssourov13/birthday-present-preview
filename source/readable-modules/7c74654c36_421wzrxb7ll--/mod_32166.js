/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n(e) {
    return e.startsWith("/") ? e : `/${e}`;
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "ensureLeadingSlash", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
};
