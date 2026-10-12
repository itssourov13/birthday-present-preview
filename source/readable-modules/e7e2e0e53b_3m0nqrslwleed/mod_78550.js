/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    default: function () {
      return g;
    },
    useLinkStatus: function () {
      return v;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a = e.r(11324),
    o = e.r(84942),
    s = a._(e.r(12472)),
    l = e.r(79133),
    u = e.r(38674),
    c = e.r(55387),
    d = e.r(51810),
    f = e.r(77052);
  e.r(35882);
  let h = e.r(72458),
    p = e.r(46569),
    m = e.r(66309),
    y = e.r(53973);
  function g(t) {
    var r, n;
    let i,
      a,
      g,
      [v, j] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
      _ = (0, s.useRef)(null),
      {
        href: O,
        as: w,
        children: E,
        prefetch: P = null,
        passHref: S,
        replace: x,
        shallow: C,
        scroll: k,
        onClick: I,
        onMouseEnter: N,
        onTouchStart: T,
        legacyBehavior: L = !1,
        onNavigate: M,
        transitionTypes: A,
        ref: $,
        unstable_dynamicOnHover: R,
        ...F
      } = t;
    (i = E),
      L && ("string" == typeof i || "number" == typeof i) && (i = (0, o.jsx)("a", { children: i }));
    let D = s.default.useContext(u.AppRouterContext),
      U = !1 !== P,
      B =
        !1 !== P
          ? null === (n = P) || "auto" === n
            ? y.FetchStrategy.PPR
            : y.FetchStrategy.Full
          : y.FetchStrategy.PPR,
      q = "string" == typeof (r = w || O) ? r : (0, l.formatUrl)(r);
    if (L) {
      if (i?.$$typeof === Symbol.for("react.lazy"))
        throw Object.defineProperty(
          Error(
            "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E863", enumerable: !1, configurable: !0 },
        );
      a = s.default.Children.only(i);
    }
    let z = L ? a && "object" == typeof a && a.ref : $,
      H = s.default.useCallback(
        (e) => (
          null !== D && (_.current = (0, p.mountLinkInstance)(e, q, D, B, U, j)),
          () => {
            _.current && ((0, p.unmountLinkForCurrentNavigation)(_.current), (_.current = null)),
              (0, p.unmountPrefetchableInstance)(e);
          }
        ),
        [U, q, D, B, j],
      ),
      K = {
        ref: (0, c.useMergedRef)(H, z),
        onClick(t) {
          L || "function" != typeof I || I(t),
            L && a.props && "function" == typeof a.props.onClick && a.props.onClick(t),
            !D ||
              t.defaultPrevented ||
              (function (t, r, n, i, a, o, l) {
                if ("u" > typeof window) {
                  let u,
                    { nodeName: c } = t.currentTarget;
                  if (
                    ("A" === c.toUpperCase() &&
                      (((u = t.currentTarget.getAttribute("target")) && "_self" !== u) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                    t.currentTarget.hasAttribute("download")
                  )
                    return;
                  if (!(0, m.isLocalURL)(r)) {
                    i && (t.preventDefault(), location.replace(r));
                    return;
                  }
                  if ((t.preventDefault(), o)) {
                    let e = !1;
                    if (
                      (o({
                        preventDefault: () => {
                          e = !0;
                        },
                      }),
                      e)
                    )
                      return;
                  }
                  let { dispatchNavigateAction: d } = e.r(94596);
                  s.default.startTransition(() => {
                    d(
                      r,
                      i ? "replace" : "push",
                      !1 === a ? h.ScrollBehavior.NoScroll : h.ScrollBehavior.Default,
                      n.current,
                      l,
                    );
                  });
                }
              })(t, q, _, x, k, M, A);
        },
        onMouseEnter(e) {
          L || "function" != typeof N || N(e),
            L && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
            D && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
        },
        onTouchStart: function (e) {
          L || "function" != typeof T || T(e),
            L && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
            D && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
        },
      };
    return (
      (0, d.isAbsoluteUrl)(q)
        ? (K.href = q)
        : (L && !S && ("a" !== a.type || "href" in a.props)) || (K.href = (0, f.addBasePath)(q)),
      (g = L ? s.default.cloneElement(a, K) : (0, o.jsx)("a", { ...F, ...K, children: i })),
      (0, o.jsx)(b.Provider, { value: v, children: g })
    );
  }
  e.r(97635);
  let b = (0, s.createContext)(p.IDLE_LINK_STATUS),
    v = () => (0, s.useContext)(b);
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
