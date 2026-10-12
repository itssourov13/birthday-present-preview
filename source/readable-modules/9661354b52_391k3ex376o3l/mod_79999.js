/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    ReadonlyURLSearchParams: function () {
      return i.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return f;
    },
    forbidden: function () {
      return u.forbidden;
    },
    notFound: function () {
      return s.notFound;
    },
    permanentRedirect: function () {
      return o.permanentRedirect;
    },
    redirect: function () {
      return o.redirect;
    },
    unauthorized: function () {
      return c.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return d;
    },
    unstable_rethrow: function () {
      return l.unstable_rethrow;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let i = e.r(34871),
    o = e.r(57910),
    s = e.r(18846),
    u = e.r(25645),
    c = e.r(95140),
    l = e.r(20907);
  function d() {
    throw Object.defineProperty(
      Error("`unstable_isUnrecognizedActionError` can only be used on the client."),
      "__NEXT_ERROR_CODE",
      { value: "E776", enumerable: !1, configurable: !0 },
    );
  }
  let f = { push: "push", replace: "replace" };
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
