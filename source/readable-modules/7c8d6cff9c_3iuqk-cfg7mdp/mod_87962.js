/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    MutableRequestCookiesAdapter: function () {
      return m;
    },
    ReadonlyRequestCookiesError: function () {
      return c;
    },
    RequestCookiesAdapter: function () {
      return u;
    },
    appendMutableCookies: function () {
      return p;
    },
    areCookiesMutableInCurrentPhase: function () {
      return g;
    },
    createCookiesWithMutableAccessCheck: function () {
      return h;
    },
    getModifiedCookieValues: function () {
      return f;
    },
    responseCookiesToRequestCookies: function () {
      return b;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let o = e.r(58120),
    i = e.r(21929),
    s = e.r(45368),
    l = e.r(15257);
  class c extends Error {
    constructor() {
      super(
        "Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options",
      );
    }
    static callable() {
      throw new c();
    }
  }
  class u {
    static seal(e) {
      return new Proxy(e, {
        get(e, t, r) {
          switch (t) {
            case "clear":
            case "delete":
            case "set":
              return c.callable;
            default:
              return i.ReflectAdapter.get(e, t, r);
          }
        },
      });
    }
  }
  let d = Symbol.for("next.mutated.cookies");
  function f(e) {
    let t = e[d];
    return t && Array.isArray(t) && 0 !== t.length ? t : [];
  }
  function p(e, t) {
    let r = f(t);
    if (0 === r.length) return !1;
    let n = new o.ResponseCookies(e),
      a = n.getAll();
    for (let e of r) n.set(e);
    for (let e of a) n.set(e);
    return !0;
  }
  class m {
    static wrap(e, t) {
      let r = new o.ResponseCookies(new Headers());
      for (let t of e.getAll()) r.set(t);
      let n = [],
        a = new Set(),
        c = () => {
          let e = s.workAsyncStorage.getStore();
          if (
            (e && (e.pathWasRevalidated = l.ActionDidRevalidateStaticAndDynamic),
            (n = r.getAll().filter((e) => a.has(e.name))),
            t)
          ) {
            let e = [];
            for (let t of n) {
              let r = new o.ResponseCookies(new Headers());
              r.set(t), e.push(r.toString());
            }
            t(e);
          }
        },
        u = new Proxy(r, {
          get(e, t, r) {
            switch (t) {
              case d:
                return n;
              case "delete":
                return function (...t) {
                  a.add("string" == typeof t[0] ? t[0] : t[0].name);
                  try {
                    return e.delete(...t), u;
                  } finally {
                    c();
                  }
                };
              case "set":
                return function (...t) {
                  a.add("string" == typeof t[0] ? t[0] : t[0].name);
                  try {
                    return e.set(...t), u;
                  } finally {
                    c();
                  }
                };
              default:
                return i.ReflectAdapter.get(e, t, r);
            }
          },
        });
      return u;
    }
  }
  function h(e) {
    let t = new Proxy(e.mutableCookies, {
      get(r, n, a) {
        switch (n) {
          case "delete":
            return function (...n) {
              return y(e, "cookies().delete"), r.delete(...n), t;
            };
          case "set":
            return function (...n) {
              return y(e, "cookies().set"), r.set(...n), t;
            };
          default:
            return i.ReflectAdapter.get(r, n, a);
        }
      },
    });
    return t;
  }
  function g(e) {
    return "action" === e.phase;
  }
  function y(e, t) {
    if (!g(e)) throw new c();
  }
  function b(e) {
    let t = new o.RequestCookies(new Headers());
    for (let r of e.getAll()) t.set(r);
    return t;
  }
};
