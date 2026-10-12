/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n(e, t = {}) {
    if (t.onlyHashChange) return void e();
    let r = document.documentElement;
    if ("smooth" !== r.dataset.scrollBehavior) return void e();
    let a = r.style.scrollBehavior;
    (r.style.scrollBehavior = "auto"),
      t.dontForceLayout || r.getClientRects(),
      e(),
      (r.style.scrollBehavior = a);
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
      enumerable: !0,
      get: function () {
        return n;
      },
    }),
    e.r(35882);
};
