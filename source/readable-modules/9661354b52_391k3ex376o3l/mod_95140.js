/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  function n() {
    throw Object.defineProperty(
      Error(
        "`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.",
      ),
      "__NEXT_ERROR_CODE",
      { value: "E411", enumerable: !1, configurable: !0 },
    );
  }
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "unauthorized", {
      enumerable: !0,
      get: function () {
        return n;
      },
    }),
    e.r(25777).HTTP_ERROR_FALLBACK_ERROR_CODE,
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
};
