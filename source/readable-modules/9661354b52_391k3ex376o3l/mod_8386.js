/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    getCacheSignal: function () {
      return b;
    },
    getDraftModeProviderForCacheScope: function () {
      return g;
    },
    getHmrRefreshHash: function () {
      return m;
    },
    getPrerenderResumeDataCache: function () {
      return d;
    },
    getRenderResumeDataCache: function () {
      return f;
    },
    getServerComponentsHmrCache: function () {
      return p;
    },
    getStagedRenderingController: function () {
      return y;
    },
    isHmrRefresh: function () {
      return h;
    },
    isInEarlyRenderStage: function () {
      return u;
    },
    throwForMissingRequestStore: function () {
      return c;
    },
    throwInvariantForMissingStore: function () {
      return l;
    },
    workUnitAsyncStorage: function () {
      return i.workUnitAsyncStorageInstance;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let i = e.r(2322);
  e.r(46591);
  let o = e.r(20502),
    s = e.r(81286);
  function u(e) {
    let t = e.stagedRendering;
    return (
      !!t &&
      (t.currentStage === s.RenderStage.EarlyStatic ||
        t.currentStage === s.RenderStage.EarlyRuntime)
    );
  }
  function c(e) {
    throw Object.defineProperty(
      Error(
        `\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`,
      ),
      "__NEXT_ERROR_CODE",
      { value: "E251", enumerable: !1, configurable: !0 },
    );
  }
  function l() {
    throw Object.defineProperty(
      new o.InvariantError("Expected workUnitAsyncStorage to have a store."),
      "__NEXT_ERROR_CODE",
      { value: "E696", enumerable: !1, configurable: !0 },
    );
  }
  function d(e) {
    switch (e.type) {
      case "prerender":
      case "prerender-runtime":
      case "prerender-ppr":
      case "prerender-client":
      case "validation-client":
        return e.prerenderResumeDataCache;
      case "request":
        if (e.prerenderResumeDataCache) return e.prerenderResumeDataCache;
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return e;
    }
  }
  function f(e) {
    switch (e.type) {
      case "request":
      case "prerender":
      case "prerender-runtime":
      case "prerender-client":
      case "validation-client":
        if (e.renderResumeDataCache) return e.renderResumeDataCache;
      case "prerender-ppr":
        return e.prerenderResumeDataCache ?? null;
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "prerender-legacy":
      case "generate-static-params":
        return null;
      default:
        return e;
    }
  }
  function m(e) {}
  function h(e) {
    return !1;
  }
  function p(e) {}
  function g(e, t) {
    if (e.isDraftMode)
      switch (t.type) {
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-runtime":
        case "request":
          return t.draftMode;
      }
  }
  function y(e) {
    switch (e.type) {
      case "request":
      case "prerender-runtime":
        return e.stagedRendering ?? null;
      case "prerender":
      case "prerender-client":
      case "validation-client":
      case "prerender-ppr":
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return e;
    }
  }
  function b(e) {
    switch (e.type) {
      case "prerender":
      case "prerender-client":
      case "validation-client":
      case "prerender-runtime":
        return e.cacheSignal;
      case "request":
        if (e.cacheSignal) return e.cacheSignal;
      case "prerender-ppr":
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return e;
    }
  }
};
