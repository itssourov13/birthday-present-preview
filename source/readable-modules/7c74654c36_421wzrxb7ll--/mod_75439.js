/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    completeHardNavigation: function () {
      return P;
    },
    completeSoftNavigation: function () {
      return S;
    },
    completeTraverseNavigation: function () {
      return b;
    },
    convertServerPatchToFullTree: function () {
      return T;
    },
    navigate: function () {
      return _;
    },
    navigateToKnownRoute: function () {
      return v;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(60806),
    u = e.r(47155),
    i = e.r(54250),
    o = e.r(3257),
    c = e.r(69092),
    s = e.r(10607),
    f = e.r(3971);
  e.r(50278);
  let d = e.r(53973);
  e.r(46569);
  let h = e.r(72458),
    p = e.r(44424),
    y = e.r(59206),
    g = e.r(5243);
  function _(e, t, r, n, a, l, u, i, o, s) {
    return (function (e, t, r, n, a, l, u, i, o, s) {
      let d = Date.now(),
        h = t.href,
        p = (0, f.createCacheKey)(h, u),
        y = (0, c.readRouteCacheEntry)(d, p);
      if (null !== y && y.status === c.EntryStatus.Fulfilled)
        return R(d, e, t, r, n, u, a, l, i, o, s, y);
      if (null === y || y.status !== c.EntryStatus.Rejected) {
        let f = (0, c.deprecated_requestOptimisticRouteCacheEntry)(d, t, u);
        if (null !== f) return R(d, e, t, r, n, u, a, l, i, o, s, f);
      }
      return m(d, e, t, r, n, u, a, l, i, o, s).catch(() => e);
    })(e, t, r, n, a, l, u, i, o, s);
  }
  function v(e, t, r, n, a, l, i, o, c, s, f, d, h, p, y) {
    let g = { separateRefreshUrls: null, scrollRef: null },
      _ = r.href === l.href,
      v = (0, u.startPPRNavigation)(
        e,
        l,
        i,
        o,
        c,
        a.routeTree,
        a.metadataVaryPath,
        s,
        a.data,
        a.head,
        a.dynamicStaleAt,
        _,
        g,
      );
    return null !== v
      ? (s !== u.FreshnessPolicy.Gesture && (0, u.spawnDynamicRequests)(v, r, f, s, g, y, h),
        S(t, r, f, v.route, v.node, a.renderedSearch, n, h, d, g.scrollRef, p))
      : P(t, r, h);
  }
  function R(e, t, r, n, a, l, u, i, o, c, s, f) {
    let d = f.tree,
      h = f.canonicalUrl + r.hash,
      p = {
        renderedSearch: f.renderedSearch,
        routeTree: d,
        metadataVaryPath: f.metadata.varyPath,
        data: null,
        head: null,
        dynamicStaleAt: (0, g.computeDynamicStaleAt)(e, g.UnknownDynamicStaleTime),
      };
    return v(e, t, r, h, p, n, a, u, i, o, l, c, s, null, f);
  }
  let E = ["", {}, null, "refetch"];
  async function m(e, t, r, n, a, f, h, p, y, g, _) {
    let R;
    switch (y) {
      case u.FreshnessPolicy.Default:
      case u.FreshnessPolicy.HistoryTraversal:
      case u.FreshnessPolicy.Gesture:
        R = p;
        break;
      case u.FreshnessPolicy.Hydration:
      case u.FreshnessPolicy.RefreshAll:
      case u.FreshnessPolicy.HMRRefresh:
        R = E;
        break;
      default:
        R = p;
    }
    let m = (0, l.fetchServerResponse)(r, { flightRouterState: R, nextUrl: f }),
      S = await m;
    if ("string" == typeof S) return P(t, new URL(S, location.origin), _);
    let {
        flightData: b,
        canonicalUrl: O,
        renderedSearch: w,
        couldBeIntercepted: A,
        supportsPerSegmentPrefetching: C,
        dynamicStaleTime: N,
        staticStageData: I,
        runtimePrefetchStream: M,
        responseHeaders: j,
        debugInfo: D,
      } = S,
      F = T(e, p, b, w, N),
      U = F.metadataVaryPath;
    if (null !== U) {
      if (
        ((0, s.discoverKnownRoute)(
          e,
          r.pathname,
          f,
          null,
          F.routeTree,
          U,
          A,
          (0, i.createHrefFromUrl)(O),
          C,
          !1,
        ),
        null !== I)
      ) {
        let { response: t, isResponsePartial: r } = I;
        (0, c.getStaleAt)(e, t.s)
          .then((n) => {
            let a = j.get(o.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? t.b;
            (0, c.writeStaticStageResponseIntoCache)(e, t.f, a, t.h, n, p, w, r);
          })
          .catch(() => {});
      }
      null !== M &&
        (0, c.processRuntimePrefetchStream)(e, M, p, w)
          .then((t) => {
            null !== t &&
              (0, c.writeDynamicRenderResponseIntoCache)(
                e,
                d.FetchStrategy.PPRRuntime,
                t.flightDatas,
                t.buildId,
                t.isResponsePartial,
                t.headVaryParams,
                t.staleAt,
                t.navigationSeed,
                null,
              );
          })
          .catch(() => {});
    }
    return v(e, t, r, (0, i.createHrefFromUrl)(O), F, n, a, h, p, y, f, g, _, D, null);
  }
  function P(e, t, r) {
    return (0, y.isJavaScriptURLString)(t.href)
      ? (console.error("Next.js has blocked a javascript: URL as a security precaution."), e)
      : {
          canonicalUrl: t.origin === location.origin ? (0, i.createHrefFromUrl)(t) : t.href,
          pushRef: { pendingPush: "push" === r, mpaNavigation: !0, preserveCustomHistoryState: !1 },
          renderedSearch: e.renderedSearch,
          focusAndScrollRef: e.focusAndScrollRef,
          cache: e.cache,
          tree: e.tree,
          nextUrl: e.nextUrl,
          previousNextUrl: e.previousNextUrl,
          debugInfo: null,
        };
  }
  function S(e, t, r, n, a, l, u, i, o, c, s) {
    let f,
      d,
      y = (0, p.computeChangedPath)(e.tree, n) || e.nextUrl,
      g = new URL(e.canonicalUrl, t),
      _ = t.pathname === g.pathname && t.search === g.search && t.hash !== g.hash;
    if (o === h.ScrollBehavior.NoScroll)
      null !== c && (c.current = !1), (f = e.focusAndScrollRef.scrollRef), (d = !1);
    else if (_) {
      let t = e.focusAndScrollRef.scrollRef;
      null !== t && (t.current = !1),
        null !== c && (c.current = !1),
        (f = { current: !0 }),
        (d = !0);
    } else {
      if (((f = c), null !== c)) {
        let t = e.focusAndScrollRef.scrollRef;
        null !== t && (t.current = !1);
      }
      d = !1;
    }
    return {
      canonicalUrl: u,
      renderedSearch: l,
      pushRef: { pendingPush: "push" === i, mpaNavigation: !1, preserveCustomHistoryState: !1 },
      focusAndScrollRef: {
        scrollRef: f,
        forceScroll: d,
        onlyHashChange: _,
        hashFragment:
          o !== h.ScrollBehavior.NoScroll && "" !== t.hash
            ? decodeURIComponent(t.hash.slice(1))
            : e.focusAndScrollRef.hashFragment,
      },
      cache: a,
      tree: n,
      nextUrl: y,
      previousNextUrl: r,
      debugInfo: s,
    };
  }
  function b(e, t, r, n, a, l) {
    return {
      canonicalUrl: (0, i.createHrefFromUrl)(t),
      renderedSearch: r,
      pushRef: { pendingPush: !1, mpaNavigation: !1, preserveCustomHistoryState: !0 },
      focusAndScrollRef: e.focusAndScrollRef,
      cache: n,
      tree: a,
      nextUrl: l,
      previousNextUrl: null,
      debugInfo: null,
    };
  }
  function T(e, t, r, n, a) {
    let l = t,
      u = null,
      i = null;
    if (null !== r)
      for (let { segmentPath: e, tree: t, seedData: a, head: o } of r) {
        let r = (function e(t, r, n, a, l, u, i) {
          let o;
          if (i === l.length) return { tree: n, data: a };
          let c = l[i],
            s = t[1],
            f = null !== r ? r[1] : null,
            d = {},
            h = {};
          for (let t in s) {
            let r = s[t],
              o = null !== f ? (f[t] ?? null) : null;
            if (t === c) {
              let c = e(r, o, n, a, l, u, i + 2);
              (d[t] = c.tree), (h[t] = c.data);
            } else (d[t] = r), (h[t] = o);
          }
          if (((o = [t[0], d]), 2 in t)) {
            let e = t[2];
            null != e && (o[2] = [e[0], u]);
          }
          return (
            3 in t && (o[3] = t[3]),
            4 in t && (o[4] = t[4]),
            { tree: o, data: [null, h, null, !0, null] }
          );
        })(l, u, t, a, e, n, 0);
        (l = r.tree), (u = r.data), (i = o);
      }
    let o = l,
      s = { metadataVaryPath: null };
    return {
      routeTree: (0, c.convertRootFlightRouterStateToRouteTree)(o, n, s),
      metadataVaryPath: s.metadataVaryPath,
      data: u,
      renderedSearch: n,
      head: i,
      dynamicStaleAt: (0, g.computeDynamicStaleAt)(e, a),
    };
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
