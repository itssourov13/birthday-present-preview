/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    UnrecognizedActionError: function () {
      return u;
    },
    unstable_isUnrecognizedActionError: function () {
      return i;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  class u extends Error {
    constructor(...e) {
      super(...e), (this.name = "UnrecognizedActionError");
    }
  }
  function i(e) {
    return !!(e && "object" == typeof e && e instanceof u);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
