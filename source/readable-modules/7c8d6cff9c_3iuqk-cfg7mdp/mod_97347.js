/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    createParamsFromClient: function () {
      return g;
    },
    createPrerenderParamsForClientSegment: function () {
      return _;
    },
    createServerParamsForMetadata: function () {
      return y;
    },
    createServerParamsForRoute: function () {
      return b;
    },
    createServerParamsForServerSegment: function () {
      return P;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let o = e.r(45368),
    i = e.r(18640),
    s = e.r(21929),
    l = e.r(99006),
    c = e.r(8386),
    u = e.r(20502),
    d = e.r(69186),
    f = e.r(64050),
    p = e.r(22270),
    m = e.r(3906),
    h = e.r(81286);
  function g(e) {
    let t = o.workAsyncStorage.getStore();
    if (!t)
      throw Object.defineProperty(
        new u.InvariantError("Expected workStore to be initialized"),
        "__NEXT_ERROR_CODE",
        { value: "E1068", enumerable: !1, configurable: !0 },
      );
    let r = c.workUnitAsyncStorage.getStore();
    if (r)
      switch (r.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          return v(e, null, t, r, null);
        case "validation-client":
          return R(e, t, r.validationSamples);
        case "cache":
        case "private-cache":
        case "unstable-cache":
          throw Object.defineProperty(
            new u.InvariantError("createParamsFromClient should not be called in cache contexts."),
            "__NEXT_ERROR_CODE",
            { value: "E736", enumerable: !1, configurable: !0 },
          );
        case "prerender-runtime":
          throw Object.defineProperty(
            new u.InvariantError(
              "createParamsFromClient should not be called in a runtime prerender.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E770", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new u.InvariantError(
              "createParamsFromClient should not be called inside generateStaticParams.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1122", enumerable: !1, configurable: !0 },
          );
        case "request":
          if (r.validationSamples) return R(e, t, r.validationSamples);
          return S(e);
      }
    (0, c.throwInvariantForMissingStore)();
  }
  function y(e, t, r) {
    return P(e, t, (0, i.getMetadataVaryParamsAccumulator)(), r);
  }
  function b(e, t = null) {
    let r = o.workAsyncStorage.getStore();
    if (!r)
      throw Object.defineProperty(
        new u.InvariantError("Expected workStore to be initialized"),
        "__NEXT_ERROR_CODE",
        { value: "E1068", enumerable: !1, configurable: !0 },
      );
    let n = c.workUnitAsyncStorage.getStore();
    if (n)
      switch (n.type) {
        case "prerender":
        case "prerender-ppr":
        case "prerender-legacy":
          return v(e, null, r, n, t);
        case "prerender-client":
        case "validation-client":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForRoute should not be called in client contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1064", enumerable: !1, configurable: !0 },
          );
        case "cache":
        case "private-cache":
        case "unstable-cache":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForRoute should not be called in cache contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E738", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForRoute should not be called inside generateStaticParams.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1131", enumerable: !1, configurable: !0 },
          );
        case "prerender-runtime":
          return E(e, null, n, t, !1);
        case "request":
          return S(e);
      }
    (0, c.throwInvariantForMissingStore)();
  }
  function P(t, r, n, a) {
    let i = o.workAsyncStorage.getStore();
    if (!i)
      throw Object.defineProperty(
        new u.InvariantError("Expected workStore to be initialized"),
        "__NEXT_ERROR_CODE",
        { value: "E1068", enumerable: !1, configurable: !0 },
      );
    let s = c.workUnitAsyncStorage.getStore();
    if (s)
      switch (s.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          return v(t, r, i, s, n);
        case "validation-client":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForServerSegment should not be called in client contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1101", enumerable: !1, configurable: !0 },
          );
        case "cache":
        case "private-cache":
        case "unstable-cache":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForServerSegment should not be called in cache contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E743", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new u.InvariantError(
              "createServerParamsForServerSegment should not be called inside generateStaticParams.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1120", enumerable: !1, configurable: !0 },
          );
        case "prerender-runtime":
          return E(t, r, s, n, a);
        case "request":
          if (s.asyncApiPromises && s.validationSamples)
            return (function (t, r, n, a, o) {
              let { createExhaustiveParamsProxy: i } = e.r(9302),
                s = i(t, new Set(Object.keys(n.params ?? {})), r.route);
              return (o ? a.earlySharedParamsParent : a.sharedParamsParent).then(() => s);
            })(t, i, s.validationSamples, s.asyncApiPromises, a);
          if (
            s.asyncApiPromises &&
            (function (e, t) {
              if (t) {
                for (let r in e) if (t.has(r)) return !0;
              }
              return !1;
            })(t, s.fallbackParams)
          )
            return (
              a ? s.asyncApiPromises.earlySharedParamsParent : s.asyncApiPromises.sharedParamsParent
            ).then(() => t);
          return S(t);
      }
    (0, c.throwInvariantForMissingStore)();
  }
  function _(e) {
    let t = o.workAsyncStorage.getStore();
    if (!t)
      throw Object.defineProperty(
        new u.InvariantError("Missing workStore in createPrerenderParamsForClientSegment"),
        "__NEXT_ERROR_CODE",
        { value: "E773", enumerable: !1, configurable: !0 },
      );
    let r = c.workUnitAsyncStorage.getStore();
    if (r)
      switch (r.type) {
        case "prerender":
        case "prerender-client":
          let n = r.fallbackRouteParams;
          if (n) {
            for (let a in e)
              if (n.has(a)) return (0, f.makeHangingPromise)(r.renderSignal, t.route, "`params`");
          }
          break;
        case "validation-client":
          throw Object.defineProperty(
            new u.InvariantError(
              "createPrerenderParamsForClientSegment should not be called in validation contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1099", enumerable: !1, configurable: !0 },
          );
        case "cache":
        case "private-cache":
        case "unstable-cache":
          throw Object.defineProperty(
            new u.InvariantError(
              "createPrerenderParamsForClientSegment should not be called in cache contexts.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E734", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new u.InvariantError(
              "createPrerenderParamsForClientSegment should not be called inside generateStaticParams.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1126", enumerable: !1, configurable: !0 },
          );
      }
    return Promise.resolve(e);
  }
  function v(e, t, r, n, a) {
    let o = null !== a ? (0, i.createVaryingParams)(a, e, t) : e;
    switch (n.type) {
      case "prerender":
      case "prerender-client": {
        let t = n.fallbackRouteParams;
        if (t) {
          for (let a in e)
            if (t.has(a))
              return (function (e, t, r) {
                let n = O.get(e);
                if (n) return n;
                let a = new Proxy(
                  (0, f.makeHangingPromise)(r.renderSignal, t.route, "`params`"),
                  w,
                );
                return O.set(e, a), a;
              })(o, r, n);
        }
        break;
      }
      case "prerender-ppr": {
        let t = n.fallbackRouteParams;
        if (t) {
          for (let a in e)
            if (t.has(a))
              return (function (e, t, r, n) {
                let a = O.get(e);
                if (a) return a;
                let o = { ...e },
                  i = Promise.resolve(o);
                return (
                  O.set(e, i),
                  Object.keys(e).forEach((e) => {
                    d.wellKnownProperties.has(e) ||
                      (t.has(e) &&
                        Object.defineProperty(o, e, {
                          get() {
                            let t = (0, d.describeStringPropertyAccess)("params", e);
                            "prerender-ppr" === n.type
                              ? (0, l.postponeWithTracking)(r.route, t, n.dynamicTracking)
                              : (0, l.throwToInterruptStaticGeneration)(t, r, n);
                          },
                          enumerable: !0,
                        }));
                  }),
                  i
                );
              })(o, t, r, n);
        }
      }
    }
    return S(o);
  }
  function E(e, t, r, n, a) {
    let o = S(null !== n ? (0, i.createVaryingParams)(n, e, t) : e),
      { stagedRendering: s } = r;
    if (!s) return o;
    let l = a ? h.RenderStage.EarlyRuntime : h.RenderStage.Runtime;
    return s.waitForStage(l).then(() => o);
  }
  function R(t, r, n) {
    let { createExhaustiveParamsProxy: a } = e.r(9302);
    return Promise.resolve(
      a(t, new Set(Object.keys((null == n ? void 0 : n.params) ?? {})), r.route),
    );
  }
  let O = new WeakMap(),
    w = {
      get: function (e, t, r) {
        if ("then" === t || "catch" === t || "finally" === t) {
          let n = s.ReflectAdapter.get(e, t, r);
          return {
            [t]: (...t) => {
              let r = m.dynamicAccessAsyncStorage.getStore();
              return (
                r &&
                  r.abortController.abort(
                    Object.defineProperty(
                      Error("Accessed fallback `params` during prerendering."),
                      "__NEXT_ERROR_CODE",
                      { value: "E691", enumerable: !1, configurable: !0 },
                    ),
                  ),
                new Proxy(n.apply(e, t), w)
              );
            },
          }[t];
        }
        return s.ReflectAdapter.get(e, t, r);
      },
    };
  function S(e) {
    let t = O.get(e);
    if (t) return t;
    let r = Promise.resolve(e);
    return O.set(e, r), r;
  }
  (0, p.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
    let r = e ? `Route "${e}" ` : "This route ";
    return Object.defineProperty(
      Error(
        `${r}used ${t}. \`params\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
      ),
      "__NEXT_ERROR_CODE",
      { value: "E834", enumerable: !1, configurable: !0 },
    );
  });
};
