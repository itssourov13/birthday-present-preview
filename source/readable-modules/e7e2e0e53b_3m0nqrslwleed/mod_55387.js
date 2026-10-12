/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "useMergedRef", {
      enumerable: !0,
      get: function () {
        return i;
      },
    });
  let n = e.r(12472);
  function i(e, t) {
    let r = (0, n.useRef)(null),
      i = (0, n.useRef)(null);
    return (0, n.useCallback)(
      (n) => {
        if (null === n) {
          let e = r.current;
          e && ((r.current = null), e());
          let t = i.current;
          t && ((i.current = null), t());
        } else e && (r.current = a(e, n)), t && (i.current = a(t, n));
      },
      [e, t],
    );
  }
  function a(e, t) {
    if ("function" != typeof e)
      return (
        (e.current = t),
        () => {
          e.current = null;
        }
      );
    {
      let r = e(t);
      return "function" == typeof r ? r : () => e(null);
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
