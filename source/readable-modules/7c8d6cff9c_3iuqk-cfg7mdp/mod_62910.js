/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  var n = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    o = Object.getOwnPropertyNames,
    i = Object.prototype.hasOwnProperty,
    s = {},
    l = {
      RequestCookies: () => h,
      ResponseCookies: () => g,
      parseCookie: () => d,
      parseSetCookie: () => f,
      stringifyCookie: () => u,
    };
  for (var c in l) n(s, c, { get: l[c], enumerable: !0 });
  function u(e) {
    var t;
    let r = [
        "path" in e && e.path && `Path=${e.path}`,
        "expires" in e &&
          (e.expires || 0 === e.expires) &&
          `Expires=${("number" == typeof e.expires ? new Date(e.expires) : e.expires).toUTCString()}`,
        "maxAge" in e && "number" == typeof e.maxAge && `Max-Age=${e.maxAge}`,
        "domain" in e && e.domain && `Domain=${e.domain}`,
        "secure" in e && e.secure && "Secure",
        "httpOnly" in e && e.httpOnly && "HttpOnly",
        "sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`,
        "partitioned" in e && e.partitioned && "Partitioned",
        "priority" in e && e.priority && `Priority=${e.priority}`,
      ].filter(Boolean),
      n = `${e.name}=${encodeURIComponent(null != (t = e.value) ? t : "")}`;
    return 0 === r.length ? n : `${n}; ${r.join("; ")}`;
  }
  function d(e) {
    let t = new Map();
    for (let r of e.split(/; */)) {
      if (!r) continue;
      let e = r.indexOf("=");
      if (-1 === e) {
        t.set(r, "true");
        continue;
      }
      let [n, a] = [r.slice(0, e), r.slice(e + 1)];
      try {
        t.set(n, decodeURIComponent(null != a ? a : "true"));
      } catch {}
    }
    return t;
  }
  function f(e) {
    if (!e) return;
    let [[t, r], ...n] = d(e),
      {
        domain: a,
        expires: o,
        httponly: i,
        maxage: s,
        path: l,
        samesite: c,
        secure: u,
        partitioned: f,
        priority: h,
      } = Object.fromEntries(n.map(([e, t]) => [e.toLowerCase().replace(/-/g, ""), t]));
    {
      var g,
        y,
        b = {
          name: t,
          value: decodeURIComponent(r),
          domain: a,
          ...(o && { expires: new Date(o) }),
          ...(i && { httpOnly: !0 }),
          ...("string" == typeof s && { maxAge: Number(s) }),
          path: l,
          ...(c && { sameSite: p.includes((g = (g = c).toLowerCase())) ? g : void 0 }),
          ...(u && { secure: !0 }),
          ...(h && { priority: m.includes((y = (y = h).toLowerCase())) ? y : void 0 }),
          ...(f && { partitioned: !0 }),
        };
      let e = {};
      for (let t in b) b[t] && (e[t] = b[t]);
      return e;
    }
  }
  t.exports = ((e, t, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let s of o(t))
        i.call(e, s) ||
          void 0 === s ||
          n(e, s, { get: () => t[s], enumerable: !(r = a(t, s)) || r.enumerable });
    return e;
  })(n({}, "__esModule", { value: !0 }), s);
  var p = ["strict", "lax", "none"],
    m = ["low", "medium", "high"],
    h = class {
      constructor(e) {
        (this._parsed = new Map()), (this._headers = e);
        const t = e.get("cookie");
        if (t) for (const [e, r] of d(t)) this._parsed.set(e, { name: e, value: r });
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      get size() {
        return this._parsed.size;
      }
      get(...e) {
        let t = "string" == typeof e[0] ? e[0] : e[0].name;
        return this._parsed.get(t);
      }
      getAll(...e) {
        var t;
        let r = Array.from(this._parsed);
        if (!e.length) return r.map(([e, t]) => t);
        let n = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
        return r.filter(([e]) => e === n).map(([e, t]) => t);
      }
      has(e) {
        return this._parsed.has(e);
      }
      set(...e) {
        let [t, r] = 1 === e.length ? [e[0].name, e[0].value] : e,
          n = this._parsed;
        return (
          n.set(t, { name: t, value: r }),
          this._headers.set(
            "cookie",
            Array.from(n)
              .map(([e, t]) => u(t))
              .join("; "),
          ),
          this
        );
      }
      delete(e) {
        let t = this._parsed,
          r = Array.isArray(e) ? e.map((e) => t.delete(e)) : t.delete(e);
        return (
          this._headers.set(
            "cookie",
            Array.from(t)
              .map(([e, t]) => u(t))
              .join("; "),
          ),
          r
        );
      }
      clear() {
        return this.delete(Array.from(this._parsed.keys())), this;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()]
          .map((e) => `${e.name}=${encodeURIComponent(e.value)}`)
          .join("; ");
      }
    },
    g = class {
      constructor(e) {
        var t, r, n;
        (this._parsed = new Map()), (this._headers = e);
        const a =
          null !=
          (n =
            null != (r = null == (t = e.getSetCookie) ? void 0 : t.call(e))
              ? r
              : e.get("set-cookie"))
            ? n
            : [];
        for (const e of Array.isArray(a)
          ? a
          : (function (e) {
              if (!e) return [];
              var t,
                r,
                n,
                a,
                o,
                i = [],
                s = 0;
              function l() {
                for (; s < e.length && /\s/.test(e.charAt(s)); ) s += 1;
                return s < e.length;
              }
              for (; s < e.length; ) {
                for (t = s, o = !1; l(); )
                  if ("," === (r = e.charAt(s))) {
                    for (
                      n = s, s += 1, l(), a = s;
                      s < e.length && "=" !== (r = e.charAt(s)) && ";" !== r && "," !== r;

                    )
                      s += 1;
                    s < e.length && "=" === e.charAt(s)
                      ? ((o = !0), (s = a), i.push(e.substring(t, n)), (t = s))
                      : (s = n + 1);
                  } else s += 1;
                (!o || s >= e.length) && i.push(e.substring(t, e.length));
              }
              return i;
            })(a)) {
          const t = f(e);
          t && this._parsed.set(t.name, t);
        }
      }
      get(...e) {
        let t = "string" == typeof e[0] ? e[0] : e[0].name;
        return this._parsed.get(t);
      }
      getAll(...e) {
        var t;
        let r = Array.from(this._parsed.values());
        if (!e.length) return r;
        let n = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
        return r.filter((e) => e.name === n);
      }
      has(e) {
        return this._parsed.has(e);
      }
      set(...e) {
        let [t, r, n] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e,
          a = this._parsed;
        return (
          a.set(
            t,
            (function (e = { name: "", value: "" }) {
              return (
                "number" == typeof e.expires && (e.expires = new Date(e.expires)),
                e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)),
                (null === e.path || void 0 === e.path) && (e.path = "/"),
                e
              );
            })({ name: t, value: r, ...n }),
          ),
          (function (e, t) {
            for (let [, r] of (t.delete("set-cookie"), e)) {
              let e = u(r);
              t.append("set-cookie", e);
            }
          })(a, this._headers),
          this
        );
      }
      delete(...e) {
        let [t, r] = "string" == typeof e[0] ? [e[0]] : [e[0].name, e[0]];
        return this.set({ ...r, name: t, value: "", expires: new Date(0) });
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(u).join("; ");
      }
    };
};
