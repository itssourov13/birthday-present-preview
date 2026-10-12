/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    appendLayoutVaryPath: function () {
      return s;
    },
    clonePageVaryPathWithNewSearchParams: function () {
      return _;
    },
    finalizeLayoutVaryPath: function () {
      return f;
    },
    finalizeMetadataVaryPath: function () {
      return y;
    },
    finalizePageVaryPath: function () {
      return h;
    },
    getFulfilledRouteVaryPath: function () {
      return c;
    },
    getFulfilledSegmentVaryPath: function () {
      return function e(t, r) {
        return {
          id: t.id,
          value: null === t.id || r.has(t.id) ? t.value : u.Fallback,
          parent: null === t.parent ? null : e(t.parent, r),
        };
      };
    },
    getPartialLayoutVaryPath: function () {
      return d;
    },
    getPartialPageVaryPath: function () {
      return p;
    },
    getRenderedSearchFromVaryPath: function () {
      return v;
    },
    getRouteVaryPath: function () {
      return o;
    },
    getSegmentVaryPathForRequest: function () {
      return g;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(53973),
    u = e.r(5039),
    i = e.r(6153);
  function o(e, t, r) {
    return {
      id: null,
      value: e,
      parent: { id: "?", value: t, parent: { id: null, value: r, parent: null } },
    };
  }
  function c(e, t, r, n) {
    return {
      id: null,
      value: e,
      parent: { id: "?", value: t, parent: { id: null, value: n ? r : u.Fallback, parent: null } },
    };
  }
  function s(e, t, r) {
    return { id: r, value: t, parent: e };
  }
  function f(e, t) {
    return { id: null, value: e, parent: t };
  }
  function d(e) {
    return e.parent;
  }
  function h(e, t, r) {
    return { id: null, value: e, parent: { id: "?", value: t, parent: r } };
  }
  function p(e) {
    return e.parent.parent;
  }
  function y(e, t, r) {
    return { id: null, value: e + i.HEAD_REQUEST_KEY, parent: { id: "?", value: t, parent: r } };
  }
  function g(e, t) {
    let r = t.varyPath;
    if (t.isPage && e !== l.FetchStrategy.Full && e !== l.FetchStrategy.PPRRuntime) {
      let e = r.parent.parent;
      return { id: null, value: r.value, parent: { id: "?", value: u.Fallback, parent: e } };
    }
    return r;
  }
  function _(e, t) {
    let r = e.parent;
    return { id: null, value: e.value, parent: { id: "?", value: t, parent: r.parent } };
  }
  function v(e) {
    let t = e.parent.value;
    return "string" == typeof t ? t : null;
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
