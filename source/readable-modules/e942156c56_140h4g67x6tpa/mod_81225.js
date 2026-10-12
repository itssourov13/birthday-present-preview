/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  var n = Symbol.for("react.transitional.element");
  function o(e, t, r) {
    var o = null;
    if ((void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t))
      for (var u in ((r = {}), t)) "key" !== u && (r[u] = t[u]);
    else r = t;
    return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
  }
  (r.Fragment = Symbol.for("react.fragment")), (r.jsx = o), (r.jsxs = o);
};
