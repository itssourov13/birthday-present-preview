/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    extractInfoFromServerReferenceId: function () {
      return l;
    },
    omitUnusedArgs: function () {
      return u;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  function l(e) {
    let t = parseInt(e.slice(0, 2), 16),
      r = (t >> 1) & 63,
      n = Array(6);
    for (let e = 0; e < 6; e++) {
      let t = (r >> (5 - e)) & 1;
      n[e] = 1 === t;
    }
    return {
      type: 1 == ((t >> 7) & 1) ? "use-cache" : "server-action",
      usedArgs: n,
      hasRestArgs: 1 == (1 & t),
    };
  }
  function u(e, t) {
    let r = Array(e.length),
      n = 0;
    for (let a = 0; a < e.length; a++)
      ((a < 6 && t.usedArgs[a]) || (a >= 6 && t.hasRestArgs)) && ((r[a] = e[a]), (n = a + 1));
    return (r.length = n), r;
  }
};
