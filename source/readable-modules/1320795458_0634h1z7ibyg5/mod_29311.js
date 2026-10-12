/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = {
    getObjectClassLabel: function () {
      return a;
    },
    isPlainObject: function () {
      return o;
    },
  };
  for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
  function a(e) {
    return Object.prototype.toString.call(e);
  }
  function o(e) {
    if ("[object Object]" !== a(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t.hasOwnProperty("isPrototypeOf");
  }
};
