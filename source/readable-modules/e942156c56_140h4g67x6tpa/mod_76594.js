/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    MetadataBoundary: function () {
      return c;
    },
    OutletBoundary: function () {
      return s;
    },
    RootLayoutBoundary: function () {
      return l;
    },
    ViewportBoundary: function () {
      return a;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  let u = e.r(43887),
    i = {
      [u.METADATA_BOUNDARY_NAME]: function ({ children: e }) {
        return e;
      },
      [u.VIEWPORT_BOUNDARY_NAME]: function ({ children: e }) {
        return e;
      },
      [u.OUTLET_BOUNDARY_NAME]: function ({ children: e }) {
        return e;
      },
      [u.ROOT_LAYOUT_BOUNDARY_NAME]: function ({ children: e }) {
        return e;
      },
    },
    c = i[u.METADATA_BOUNDARY_NAME.slice(0)],
    a = i[u.VIEWPORT_BOUNDARY_NAME.slice(0)],
    s = i[u.OUTLET_BOUNDARY_NAME.slice(0)],
    l = i[u.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
};
