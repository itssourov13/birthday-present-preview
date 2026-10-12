/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "ClientSegmentRoot", {
      enumerable: !0,
      get: function () {
        return i;
      },
    });
  let n = e.r(84942),
    a = e.r(38674),
    o = e.r(12472);
  function i({ Component: t, slots: r, serverProvidedParams: s }) {
    let l;
    if (null !== s) l = s.params;
    else {
      let e = (0, o.use)(a.LayoutRouterContext);
      l = null !== e ? e.parentParams : {};
    }
    if ("u" < typeof window) {
      let { createParamsFromClient: a } = e.r(97347),
        o = a(l);
      return (0, n.jsx)(t, { ...r, params: o });
    }
    {
      let { createRenderParamsFromClient: a } = e.r(35354),
        o = a(l);
      return (0, n.jsx)(t, { ...r, params: o });
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
