/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  let n;
  Object.defineProperty(r, "__esModule", { value: !0 });
  var a = {
    createFetch: function () {
      return T;
    },
    createFromNextReadableStream: function () {
      return O;
    },
    decodeStaticStage: function () {
      return b;
    },
    fetchServerResponse: function () {
      return m;
    },
    processFetch: function () {
      return P;
    },
    resolveStaticStageData: function () {
      return S;
    },
  };
  for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
  let u = e.r(49157);
  e.r(20502);
  let i = e.r(46591),
    o = e.r(49193),
    c = e.r(38009),
    s = e.r(16112),
    f = e.r(28137),
    d = e.r(27175),
    h = e.r(97563),
    p = e.r(39393),
    y = e.r(3257);
  e.r(69092);
  let g = e.r(5243),
    _ = u.createFromReadableStream,
    v = u.createFromFetch;
  function R(e) {
    return (0, d.urlToUrlWithoutFlightMarker)(new URL(e, location.origin)).toString();
  }
  let E = !1;
  async function m(e, t) {
    let { flightRouterState: r, nextUrl: n } = t,
      a = {
        [i.RSC_HEADER]: "1",
        [i.NEXT_ROUTER_STATE_TREE_HEADER]: (0, s.prepareFlightRouterStateForRequest)(
          r,
          t.isHmrRefresh,
        ),
      };
    n && (a[i.NEXT_URL] = n);
    try {
      let t = await T(e, a, "auto", !0),
        r = (0, d.urlToUrlWithoutFlightMarker)(new URL(t.url)),
        n = t.redirected ? r : e,
        l = t.headers.get("content-type") || "",
        u = !!t.headers.get("vary")?.includes(i.NEXT_URL),
        o = !!t.headers.get(i.NEXT_DID_POSTPONE_HEADER);
      if (!l.startsWith(i.RSC_CONTENT_TYPE_HEADER) || !t.ok || !t.body)
        return e.hash && (r.hash = e.hash), R(r.toString());
      let c = t.flightResponsePromise;
      null === c && (c = O(t.body, a, { allowPartialStream: o }));
      let [f, h] = await Promise.all([c, t.cacheData]);
      if ((t.headers.get(y.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? f.b) !== (0, p.getNavigationBuildId)())
        return R(t.url);
      let _ = (0, s.normalizeFlightData)(f.f);
      if ("string" == typeof _) return R(_);
      let v = null !== h ? await S(h, f, a) : null;
      return {
        flightData: _,
        canonicalUrl: n,
        renderedSearch: f.q,
        couldBeIntercepted: u,
        supportsPerSegmentPrefetching: f.S,
        postponed: o,
        dynamicStaleTime: f.d ?? g.UnknownDynamicStaleTime,
        staticStageData: v,
        runtimePrefetchStream: f.p ?? null,
        responseHeaders: t.headers,
        debugInfo: c._debugInfo ?? null,
      };
    } catch (t) {
      return (
        E ||
          console.error(
            `Failed to fetch RSC payload for ${e}. Falling back to browser navigation.`,
            t,
          ),
        e.toString()
      );
    }
  }
  async function P(e) {
    return { response: e, cacheData: null };
  }
  async function S(e, t, r) {
    let { isResponsePartial: n, responseBodyClone: a } = e;
    if (a) {
      if (!n) return a.cancel(), { response: t, isResponsePartial: !1 };
      if (void 0 !== t.l) return { response: await b(a, t.l, r), isResponsePartial: !0 };
      a.cancel();
    }
    return null;
  }
  async function b(e, t, r) {
    var n, a;
    let l, u;
    return O(
      ((n = e),
      (a = await t),
      (l = n.getReader()),
      (u = a),
      new ReadableStream({
        async pull(e) {
          if (u <= 0) {
            l.cancel(), e.close();
            return;
          }
          let { done: t, value: r } = await l.read();
          t
            ? e.close()
            : r.byteLength <= u
              ? (e.enqueue(r), (u -= r.byteLength))
              : (e.enqueue(r.subarray(0, u)), (u = 0), l.cancel(), e.close());
        },
        cancel() {
          l.cancel();
        },
      })),
      r,
      { allowPartialStream: !0 },
    );
  }
  async function T(e, t, r, a, l) {
    var u, s;
    let d = (0, h.getDeploymentId)();
    d && (t["x-deployment-id"] = d);
    let p = new URL(e);
    await (0, f.setCacheBustingSearchParam)(p, t);
    let y = fetch(p, {
        credentials: "same-origin",
        headers: t,
        priority: r || void 0,
        signal: l,
      }).then(P),
      g = y.then(({ response: e }) => e),
      _ = a
        ? ((u = g),
          (s = t),
          v(u, {
            callServer: o.callServer,
            findSourceMapURL: c.findSourceMapURL,
            debugChannel: n && n(s),
          }))
        : null,
      R = await g,
      E = R.redirected,
      m = new URL(R.url, p);
    return (
      m.searchParams.delete(i.NEXT_RSC_UNION_QUERY),
      {
        url: m.href,
        redirected: E,
        ok: R.ok,
        headers: R.headers,
        body: R.body,
        status: R.status,
        flightResponsePromise: _,
        cacheData: y.then(({ cacheData: e }) => e),
      }
    );
  }
  function O(e, t, r) {
    return _(e, {
      callServer: o.callServer,
      findSourceMapURL: c.findSourceMapURL,
      debugChannel: n && n(t),
      unstable_allowPartialStream: r?.allowPartialStream,
    });
  }
  "u" > typeof window &&
    (window.addEventListener("pagehide", () => {
      E = !0;
    }),
    window.addEventListener("pageshow", () => {
      E = !1;
    })),
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
};
