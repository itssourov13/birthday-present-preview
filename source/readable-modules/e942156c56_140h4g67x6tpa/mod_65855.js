/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    DEFAULT_SEGMENT_KEY: function () {
      return f;
    },
    NOT_FOUND_SEGMENT_KEY: function () {
      return d;
    },
    PAGE_SEGMENT_KEY: function () {
      return l;
    },
    addSearchParamsIfPageSegment: function () {
      return a;
    },
    computeSelectedLayoutSegment: function () {
      return s;
    },
    getSegmentValue: function () {
      return u;
    },
    getSelectedLayoutSegmentPath: function () {
      return function e(t, r, n = !0, o = []) {
        let i;
        if (n) i = t[1][r];
        else {
          let e = t[1];
          i = e.children ?? Object.values(e)[0];
        }
        if (!i) return o;
        let c = u(i[0]);
        return !c || c.startsWith(l) ? o : (o.push(c), e(i, r, !1, o));
      };
    },
    isGroupSegment: function () {
      return i;
    },
    isParallelRouteSegment: function () {
      return c;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  function u(e) {
    return Array.isArray(e) ? e[1] : e;
  }
  function i(e) {
    return "(" === e[0] && e.endsWith(")");
  }
  function c(e) {
    return e.startsWith("@") && "@children" !== e;
  }
  function a(e, t) {
    if (e.includes(l)) {
      let e = JSON.stringify(t);
      return "{}" !== e ? l + "?" + e : l;
    }
    return e;
  }
  function s(e, t) {
    if (!e || 0 === e.length) return null;
    let r = "children" === t ? e[0] : e[e.length - 1];
    return r === f ? null : r;
  }
  let l = "__PAGE__",
    f = "__DEFAULT__",
    d = "/_not-found";
};
