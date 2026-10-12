/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    createPrefetchURL: function () {
      return o;
    },
    isExternalURL: function () {
      return i;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(9816),
    u = e.r(77052);
  function i(e) {
    return e.origin !== window.location.origin;
  }
  function o(e) {
    let t;
    if ((0, l.isBot)(window.navigator.userAgent)) return null;
    try {
      t = new URL((0, u.addBasePath)(e), window.location.href);
    } catch (t) {
      throw Object.defineProperty(
        Error(`Cannot prefetch '${e}' because it cannot be converted to a URL.`),
        "__NEXT_ERROR_CODE",
        { value: "E234", enumerable: !1, configurable: !0 },
      );
    }
    return i(t) ? null : t;
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
