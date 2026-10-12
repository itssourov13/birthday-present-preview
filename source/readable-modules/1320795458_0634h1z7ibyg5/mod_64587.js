/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.defineProperty(n, "reportGlobalError", {
      enumerable: !0,
      get: function () {
        return r;
      },
    });
  let r =
    "function" == typeof reportError
      ? reportError
      : (e) => {
          globalThis.console.error(e);
        };
  ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
    void 0 === n.default.__esModule &&
    (Object.defineProperty(n.default, "__esModule", { value: !0 }),
    Object.assign(n.default, n),
    (t.exports = n.default));
};
