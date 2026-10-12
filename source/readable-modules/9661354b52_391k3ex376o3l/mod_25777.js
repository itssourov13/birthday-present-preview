/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    HTTPAccessErrorStatus: function () {
      return i;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
      return s;
    },
    getAccessFallbackErrorTypeByStatus: function () {
      return l;
    },
    getAccessFallbackHTTPStatus: function () {
      return c;
    },
    isHTTPAccessFallbackError: function () {
      return u;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let i = { NOT_FOUND: 404, FORBIDDEN: 403, UNAUTHORIZED: 401 },
    o = new Set(Object.values(i)),
    s = "NEXT_HTTP_ERROR_FALLBACK";
  function u(e) {
    if ("object" != typeof e || null === e || !("digest" in e) || "string" != typeof e.digest)
      return !1;
    let [t, r] = e.digest.split(";");
    return t === s && o.has(Number(r));
  }
  function c(e) {
    return Number(e.digest.split(";")[1]);
  }
  function l(e) {
    switch (e) {
      case 401:
        return "unauthorized";
      case 403:
        return "forbidden";
      case 404:
        return "not-found";
      default:
        return;
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
