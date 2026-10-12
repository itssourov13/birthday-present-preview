/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    InstantValidationError: function () {
      return s;
    },
    isInstantValidationError: function () {
      return i;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let o = "INSTANT_VALIDATION_ERROR";
  function i(e) {
    return !!(e && "object" == typeof e && e instanceof Error && e.digest === o);
  }
  class s extends Error {
    constructor(...e) {
      super(...e), (this.digest = o);
    }
  }
};
