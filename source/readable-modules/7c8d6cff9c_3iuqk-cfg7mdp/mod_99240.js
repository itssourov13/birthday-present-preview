/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "parseRelativeUrl", {
      enumerable: !0,
      get: function () {
        return o;
      },
    });
  let n = e.r(51810),
    a = e.r(74239);
  function o(e, t, r = !0) {
    let i = new URL("u" < typeof window ? "http://n" : (0, n.getLocationOrigin)()),
      s = t
        ? new URL(t, i)
        : e.startsWith(".")
          ? new URL("u" < typeof window ? "http://n" : window.location.href)
          : i,
      {
        pathname: l,
        searchParams: c,
        search: u,
        hash: d,
        href: f,
        origin: p,
      } = e.startsWith("/") ? new URL(`${s.protocol}//${s.host}${e}`) : new URL(e, s);
    if (p !== i.origin)
      throw Object.defineProperty(
        Error(`invariant: invalid relative URL, router received ${e}`),
        "__NEXT_ERROR_CODE",
        { value: "E159", enumerable: !1, configurable: !0 },
      );
    return {
      auth: null,
      host: null,
      hostname: null,
      pathname: l,
      port: null,
      protocol: null,
      query: r ? (0, a.searchParamsToUrlQuery)(c) : void 0,
      search: u,
      hash: d,
      href: f.slice(p.length),
      slashes: null,
    };
  }
};
