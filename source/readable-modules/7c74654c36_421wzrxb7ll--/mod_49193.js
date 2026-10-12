/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "callServer", {
      enumerable: !0,
      get: function () {
        return u;
      },
    });
  let n = e.r(12472),
    a = e.r(72458),
    l = e.r(7919);
  async function u(e, t) {
    return new Promise((r, u) => {
      (0, n.startTransition)(() => {
        (0, l.dispatchAppRouterAction)({
          type: a.ACTION_SERVER_ACTION,
          actionId: e,
          actionArgs: t,
          resolve: r,
          reject: u,
        });
      });
    });
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
