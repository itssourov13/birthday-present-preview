/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "setAttributesFromProps", {
      enumerable: !0,
      get: function () {
        return l;
      },
    });
  let o = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule",
    },
    n = [
      "onLoad",
      "onReady",
      "dangerouslySetInnerHTML",
      "children",
      "onError",
      "strategy",
      "stylesheets",
    ];
  function i(e) {
    return ["async", "defer", "noModule"].includes(e);
  }
  function l(e, t) {
    for (let [r, l] of Object.entries(t)) {
      if (!t.hasOwnProperty(r) || n.includes(r) || void 0 === l) continue;
      let a = o[r] || r.toLowerCase();
      "SCRIPT" === e.tagName && i(a) ? (e[a] = !!l) : e.setAttribute(a, String(l)),
        (!1 === l || ("SCRIPT" === e.tagName && i(a) && (!l || "false" === l))) &&
          (e.setAttribute(a, ""), e.removeAttribute(a));
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
