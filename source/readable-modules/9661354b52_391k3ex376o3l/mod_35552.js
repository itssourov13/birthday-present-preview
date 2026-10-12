/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "isPostpone", {
      enumerable: !0,
      get: function () {
        return a;
      },
    });
  let n = Symbol.for("react.postpone");
  function a(e) {
    return "object" == typeof e && null !== e && e.$$typeof === n;
  }
};
