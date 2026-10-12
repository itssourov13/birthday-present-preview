/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    djb2Hash: function () {
      return l;
    },
    hexHash: function () {
      return u;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  function l(e) {
    let t = 5381;
    for (let r = 0; r < e.length; r++) t = ((t << 5) + t + e.charCodeAt(r)) | 0;
    return t >>> 0;
  }
  function u(e) {
    return l(e).toString(36).slice(0, 5);
  }
};
