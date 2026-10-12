/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n(e) {
    let t = e.indexOf("#"),
      r = e.indexOf("?"),
      n = r > -1 && (t < 0 || r < t);
    return n || t > -1
      ? {
          pathname: e.substring(0, n ? r : t),
          query: n ? e.substring(r, t > -1 ? t : void 0) : "",
          hash: t > -1 ? e.slice(t) : "",
        }
      : { pathname: e, query: "", hash: "" };
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "parsePath", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
};
