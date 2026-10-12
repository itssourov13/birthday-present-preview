/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    ESCAPE_REGEX: function () {
      return o;
    },
    htmlEscapeAttributeString: function () {
      return c;
    },
    htmlEscapeJsonString: function () {
      return u;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    },
    o = /[&><\u2028\u2029]/g,
    s = { "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" },
    l = /[&"'<>]/g;
  function u(e) {
    return e.replace(o, (e) => a[e]);
  }
  function c(e) {
    return e.replace(l, (e) => s[e]);
  }
};
