/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    DynamicServerError: function () {
      return o;
    },
    isDynamicServerError: function () {
      return s;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let i = "DYNAMIC_SERVER_USAGE";
  class o extends Error {
    constructor(e) {
      super(`Dynamic server usage: ${e}`), (this.description = e), (this.digest = i);
    }
  }
  function s(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      "digest" in e &&
      "string" == typeof e.digest &&
      e.digest === i
    );
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
