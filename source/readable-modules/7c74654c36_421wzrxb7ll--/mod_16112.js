/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    createInitialRSCPayloadFromFallbackPrerender: function () {
      return c;
    },
    getFlightDataPartsFromPath: function () {
      return o;
    },
    getNextFlightSegmentPath: function () {
      return s;
    },
    normalizeFlightData: function () {
      return f;
    },
    prepareFlightRouterStateForRequest: function () {
      return d;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(65855),
    u = e.r(27175),
    i = e.r(54250);
  function o(e) {
    let [t, r, n, a] = e.slice(-4),
      l = e.slice(0, -4);
    return {
      pathToSegment: l.slice(0, -1),
      segmentPath: l,
      segment: l[l.length - 1] ?? "",
      tree: t,
      seedData: r,
      head: n,
      isHeadPartial: a,
      isRootRender: 4 === e.length,
    };
  }
  function c(e, t) {
    let r = (0, u.getRenderedPathname)(e),
      n = (0, u.getRenderedSearch)(e),
      a = (0, i.createHrefFromUrl)(new URL(location.href)),
      l = t.f[0],
      o = l[0],
      c = {
        c: a.split("/"),
        q: n,
        i: t.i,
        f: [
          [
            (function e(t, r, n, a) {
              let l,
                i,
                o = t[0];
              if ("string" == typeof o) (l = o), (i = (0, u.doesStaticSegmentAppearInURL)(o));
              else {
                let e = o[0],
                  t = o[2],
                  c = o[3],
                  s = (0, u.parseDynamicParamFromURLPart)(t, n, a);
                (l = [e, (0, u.getCacheKeyForDynamicParam)(s, r), t, c]), (i = !0);
              }
              let c = i ? a + 1 : a,
                s = t[1],
                f = {};
              for (let t in s) {
                let a = s[t];
                f[t] = e(a, r, n, c);
              }
              return [l, f, null, t[3], t[4]];
            })(
              o,
              n,
              r.split("/").filter((e) => "" !== e),
              0,
            ),
            l[1],
            l[2],
            l[2],
          ],
        ],
        m: t.m,
        G: t.G,
        S: t.S,
        h: t.h,
      };
    return t.b && (c.b = t.b), c;
  }
  function s(e) {
    return e.slice(2);
  }
  function f(e) {
    return "string" == typeof e ? e : e.map((e) => o(e));
  }
  function d(e, t) {
    return t
      ? encodeURIComponent(JSON.stringify(e))
      : encodeURIComponent(
          JSON.stringify(
            (function e(t) {
              let [r, n, a, u, i] = t,
                o = (function (e) {
                  if ("string" == typeof e)
                    return e.startsWith(l.PAGE_SEGMENT_KEY + "?") ? l.PAGE_SEGMENT_KEY : e;
                  let [t, r, n] = e;
                  return [t, r, n, null];
                })(r),
                c = {};
              for (let [t, r] of Object.entries(n)) c[t] = e(r);
              let s = [o, c];
              return u && ((s[2] = null), (s[3] = u)), void 0 !== i && (s[4] = i), s;
            })(e),
          ),
        );
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
