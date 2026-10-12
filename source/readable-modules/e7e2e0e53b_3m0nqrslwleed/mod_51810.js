/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    DecodeError: function () {
      return g;
    },
    MiddlewareNotFoundError: function () {
      return _;
    },
    MissingStaticPage: function () {
      return j;
    },
    NormalizeError: function () {
      return b;
    },
    PageNotFoundError: function () {
      return v;
    },
    SP: function () {
      return m;
    },
    ST: function () {
      return y;
    },
    WEB_VITALS: function () {
      return a;
    },
    execOnce: function () {
      return o;
    },
    getDisplayName: function () {
      return d;
    },
    getLocationOrigin: function () {
      return u;
    },
    getURL: function () {
      return c;
    },
    isAbsoluteUrl: function () {
      return l;
    },
    isResSent: function () {
      return f;
    },
    loadGetInitialProps: function () {
      return p;
    },
    normalizeRepeatedSlashes: function () {
      return h;
    },
    stringifyError: function () {
      return O;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function o(e) {
    let t,
      r = !1;
    return (...n) => (r || ((r = !0), (t = e(...n))), t);
  }
  let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    l = (e) => s.test(e);
  function u() {
    let { protocol: e, hostname: t, port: r } = window.location;
    return `${e}//${t}${r ? ":" + r : ""}`;
  }
  function c() {
    let { href: e } = window.location,
      t = u();
    return e.substring(t.length);
  }
  function d(e) {
    return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
  }
  function f(e) {
    return e.finished || e.headersSent;
  }
  function h(e) {
    let t = e.split("?");
    return (
      t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    );
  }
  async function p(e, t) {
    let r = t.res || (t.ctx && t.ctx.res);
    if (!e.getInitialProps)
      return t.ctx && t.Component ? { pageProps: await p(t.Component, t.ctx) } : {};
    let n = await e.getInitialProps(t);
    if (r && f(r)) return n;
    if (!n)
      throw Object.defineProperty(
        Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),
        "__NEXT_ERROR_CODE",
        { value: "E1025", enumerable: !1, configurable: !0 },
      );
    return n;
  }
  let m = "u" > typeof performance,
    y =
      m &&
      ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
  class g extends Error {}
  class b extends Error {}
  class v extends Error {
    constructor(e) {
      super(),
        (this.code = "ENOENT"),
        (this.name = "PageNotFoundError"),
        (this.message = `Cannot find module for page: ${e}`);
    }
  }
  class j extends Error {
    constructor(e, t) {
      super(), (this.message = `Failed to load static file for page: ${e} ${t}`);
    }
  }
  class _ extends Error {
    constructor() {
      super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module");
    }
  }
  function O(e) {
    return JSON.stringify({ message: e.message, stack: e.stack });
  }
};
