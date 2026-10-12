/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    ReadonlyURLSearchParams: function () {
      return s.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return d.RedirectType;
    },
    ServerInsertedHTMLContext: function () {
      return c.ServerInsertedHTMLContext;
    },
    forbidden: function () {
      return d.forbidden;
    },
    notFound: function () {
      return d.notFound;
    },
    permanentRedirect: function () {
      return d.permanentRedirect;
    },
    redirect: function () {
      return d.redirect;
    },
    unauthorized: function () {
      return d.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return l.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function () {
      return d.unstable_rethrow;
    },
    useParams: function () {
      return E;
    },
    usePathname: function () {
      return b;
    },
    useRouter: function () {
      return _;
    },
    useSearchParams: function () {
      return y;
    },
    useSelectedLayoutSegment: function () {
      return v;
    },
    useSelectedLayoutSegments: function () {
      return R;
    },
    useServerInsertedHTML: function () {
      return c.useServerInsertedHTML;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let i = e.r(11324)._(e.r(12472)),
    o = e.r(38674),
    s = e.r(27797),
    u = e.r(65855),
    c = e.r(77327),
    l = e.r(30751),
    d = e.r(79999),
    f = "u" < typeof window ? e.r(99006).useDynamicRouteParams : void 0,
    m = "u" < typeof window ? e.r(99006).useDynamicSearchParams : void 0,
    {
      instrumentParamsForClientValidation: h,
      instrumentSearchParamsForClientValidation: p,
      expectCompleteParamsInClientValidation: g,
    } = {};
  function y() {
    m?.("useSearchParams()");
    let e = (0, i.useContext)(s.SearchParamsContext);
    return (0, i.useMemo)(() => (e ? new s.ReadonlyURLSearchParams(e) : null), [e]);
  }
  function b() {
    return f?.("usePathname()"), (0, i.useContext)(s.PathnameContext);
  }
  function _() {
    let e = (0, i.useContext)(o.AppRouterContext);
    if (null === e)
      throw Object.defineProperty(
        Error("invariant expected app router to be mounted"),
        "__NEXT_ERROR_CODE",
        { value: "E238", enumerable: !1, configurable: !0 },
      );
    return e;
  }
  function E() {
    return f?.("useParams()"), (0, i.useContext)(s.PathParamsContext);
  }
  function R(e = "children") {
    f?.("useSelectedLayoutSegments()");
    let t = (0, i.useContext)(o.LayoutRouterContext);
    return t ? (0, u.getSelectedLayoutSegmentPath)(t.parentTree, e) : null;
  }
  function v(e = "children") {
    f?.("useSelectedLayoutSegment()"), (0, i.useContext)(s.NavigationPromisesContext);
    let t = R(e);
    return (0, u.computeSelectedLayoutSegment)(t, e);
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
