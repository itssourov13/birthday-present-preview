/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    formatUrl: function () {
      return s;
    },
    formatWithValidation: function () {
      return u;
    },
    urlObjectKeys: function () {
      return l;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a = e.r(11324)._(e.r(74239)),
    o = /https?|ftp|gopher|file/;
  function s(e) {
    let { auth: t, hostname: r } = e,
      n = e.protocol || "",
      i = e.pathname || "",
      s = e.hash || "",
      l = e.query || "",
      u = !1;
    (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
      e.host
        ? (u = t + e.host)
        : r && ((u = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (u += ":" + e.port)),
      l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l)));
    let c = e.search || (l && `?${l}`) || "";
    return (
      n && !n.endsWith(":") && (n += ":"),
      e.slashes || ((!n || o.test(n)) && !1 !== u)
        ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
        : u || (u = ""),
      s && "#" !== s[0] && (s = "#" + s),
      c && "?" !== c[0] && (c = "?" + c),
      (i = i.replace(/[?#]/g, encodeURIComponent)),
      (c = c.replace("#", "%23")),
      `${n}${u}${i}${c}${s}`
    );
  }
  let l = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes",
  ];
  function u(e) {
    return s(e);
  }
};
