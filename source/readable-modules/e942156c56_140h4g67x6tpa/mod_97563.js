/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  let n;
  Object.defineProperty(r, "__esModule", { value: !0 });
  var o = {
    getAssetToken: function () {
      return a;
    },
    getAssetTokenQuery: function () {
      return s;
    },
    getDeploymentId: function () {
      return i;
    },
    getDeploymentIdQuery: function () {
      return c;
    },
  };
  for (var u in o) Object.defineProperty(r, u, { enumerable: !0, get: o[u] });
  function i() {
    return n;
  }
  function c(e = !1) {
    let t = n;
    return t ? `${e ? "&" : "?"}dpl=${t}` : "";
  }
  function a() {
    return globalThis.NEXT_DEPLOYMENT_ID;
  }
  function s(e = !1) {
    let t = a();
    return t ? `${e ? "&" : "?"}dpl=${t}` : "";
  }
  "u" > typeof window
    ? ((n = document.documentElement.dataset.dplId), delete document.documentElement.dataset.dplId)
    : (n = globalThis.NEXT_DEPLOYMENT_ID || void 0);
};
