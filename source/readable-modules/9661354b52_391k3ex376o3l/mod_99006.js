/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n,
    a,
    i,
    o = {
      DynamicHoleKind: function () {
        return Z;
      },
      Postpone: function () {
        return T;
      },
      PreludeState: function () {
        return ei;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function () {
        return D;
      },
      abortOnSynchronousPlatformIOAccess: function () {
        return j;
      },
      accessedDynamicData: function () {
        return L;
      },
      annotateDynamicAccess: function () {
        return H;
      },
      consumeDynamicAccess: function () {
        return $;
      },
      createDynamicTrackingState: function () {
        return E;
      },
      createDynamicValidationState: function () {
        return R;
      },
      createHangingInputAbortSignal: function () {
        return X;
      },
      createInstantValidationState: function () {
        return Q;
      },
      createRenderInBrowserAbortSignal: function () {
        return B;
      },
      formatDynamicAPIAccesses: function () {
        return U;
      },
      getFirstDynamicReason: function () {
        return v;
      },
      getNavigationDisallowedDynamicReasons: function () {
        return ec;
      },
      getStaticShellDisallowedDynamicReasons: function () {
        return eu;
      },
      isDynamicPostpone: function () {
        return C;
      },
      isPrerenderInterruptedError: function () {
        return I;
      },
      logDisallowedDynamicError: function () {
        return eo;
      },
      markCurrentScopeAsDynamic: function () {
        return S;
      },
      postponeWithTracking: function () {
        return x;
      },
      throwIfDisallowedDynamic: function () {
        return es;
      },
      throwToInterruptStaticGeneration: function () {
        return O;
      },
      trackAllowedDynamicAccess: function () {
        return J;
      },
      trackDynamicDataInDynamicRender: function () {
        return w;
      },
      trackDynamicHoleInNavigation: function () {
        return ee;
      },
      trackDynamicHoleInRuntimeShell: function () {
        return er;
      },
      trackDynamicHoleInStaticShell: function () {
        return en;
      },
      trackThrownErrorInNavigation: function () {
        return et;
      },
      useDynamicRouteParams: function () {
        return F;
      },
      useDynamicSearchParams: function () {
        return W;
      },
    };
  for (var s in o) Object.defineProperty(r, s, { enumerable: !0, get: o[s] });
  let u = (n = e.r(12472)) && n.__esModule ? n : { default: n },
    c = e.r(14696),
    l = e.r(27637),
    d = e.r(8386),
    f = e.r(45368),
    m = e.r(64050),
    h = e.r(43887),
    p = e.r(9142),
    g = e.r(39982),
    y = e.r(20502),
    b = e.r(13052),
    _ = "function" == typeof u.default.unstable_postpone;
  function E(e) {
    return { isDebugDynamicAccesses: e, dynamicAccesses: [], syncDynamicErrorWithStack: null };
  }
  function R() {
    return {
      hasSuspenseAboveBody: !1,
      hasDynamicMetadata: !1,
      dynamicMetadata: null,
      hasDynamicViewport: !1,
      hasAllowedDynamic: !1,
      dynamicErrors: [],
    };
  }
  function v(e) {
    var t;
    return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression;
  }
  function S(e, t, r) {
    if (t)
      switch (t.type) {
        case "cache":
        case "unstable-cache":
        case "private-cache":
          return;
      }
    if (!e.forceDynamic && !e.forceStatic) {
      if (e.dynamicShouldError)
        throw Object.defineProperty(
          new l.StaticGenBailoutError(
            `Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E553", enumerable: !1, configurable: !0 },
        );
      if (t)
        switch (t.type) {
          case "prerender-ppr":
            return x(e.route, r, t.dynamicTracking);
          case "prerender-legacy":
            t.revalidate = 0;
            let n = Object.defineProperty(
              new c.DynamicServerError(
                `Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E550", enumerable: !1, configurable: !0 },
            );
            throw ((e.dynamicUsageDescription = r), (e.dynamicUsageStack = n.stack), n);
        }
    }
  }
  function O(e, t, r) {
    let n = Object.defineProperty(
      new c.DynamicServerError(
        `Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
      ),
      "__NEXT_ERROR_CODE",
      { value: "E558", enumerable: !1, configurable: !0 },
    );
    throw ((r.revalidate = 0), (t.dynamicUsageDescription = e), (t.dynamicUsageStack = n.stack), n);
  }
  function w(e) {
    switch (e.type) {
      case "cache":
      case "unstable-cache":
      case "private-cache":
        return;
    }
  }
  function P(e, t, r) {
    let n = M(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
    r.controller.abort(n);
    let a = r.dynamicTracking;
    a &&
      a.dynamicAccesses.push({
        stack: a.isDebugDynamicAccesses ? Error().stack : void 0,
        expression: t,
      });
  }
  function j(e, t, r, n) {
    let a = n.dynamicTracking;
    P(e, t, n), a && null === a.syncDynamicErrorWithStack && (a.syncDynamicErrorWithStack = r);
  }
  function D(e, t, r, n) {
    if (!1 === n.controller.signal.aborted) {
      P(e, t, n);
      let a = n.dynamicTracking;
      a && null === a.syncDynamicErrorWithStack && (a.syncDynamicErrorWithStack = r);
    }
    throw M(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
  }
  function T({ reason: e, route: t }) {
    let r = d.workUnitAsyncStorage.getStore();
    x(t, e, r && "prerender-ppr" === r.type ? r.dynamicTracking : null);
  }
  function x(e, t, r) {
    (function () {
      if (!_)
        throw Object.defineProperty(
          Error(
            "Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E224", enumerable: !1, configurable: !0 },
        );
    })(),
      r &&
        r.dynamicAccesses.push({
          stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
          expression: t,
        }),
      u.default.unstable_postpone(A(e, t));
  }
  function A(e, t) {
    return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function C(e) {
    return "object" == typeof e && null !== e && "string" == typeof e.message && N(e.message);
  }
  function N(e) {
    return (
      e.includes("needs to bail out of prerendering at this point because it used") &&
      e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")
    );
  }
  if (!1 === N(A("%%%", "^^^")))
    throw Object.defineProperty(
      Error(
        "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js",
      ),
      "__NEXT_ERROR_CODE",
      { value: "E296", enumerable: !1, configurable: !0 },
    );
  let k = "NEXT_PRERENDER_INTERRUPTED";
  function M(e) {
    let t = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0,
    });
    return (t.digest = k), t;
  }
  function I(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.digest === k &&
      "name" in e &&
      "message" in e &&
      e instanceof Error
    );
  }
  function L(e) {
    return e.length > 0;
  }
  function $(e, t) {
    return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
  }
  function U(e) {
    return e
      .filter((e) => "string" == typeof e.stack && e.stack.length > 0)
      .map(
        ({ expression: e, stack: t }) => (
          (t = t
            .split("\n")
            .slice(4)
            .filter(
              (e) =>
                !(
                  e.includes("node_modules/next/") ||
                  e.includes(" (<anonymous>)") ||
                  e.includes(" (node:")
                ),
            )
            .join("\n")),
          `Dynamic API Usage Debug - ${e}:
${t}`
        ),
      );
  }
  function B() {
    let e = new AbortController();
    return (
      e.abort(
        Object.defineProperty(new g.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
          value: "E721",
          enumerable: !1,
          configurable: !0,
        }),
      ),
      e.signal
    );
  }
  function X(e) {
    switch (e.type) {
      case "prerender":
      case "prerender-runtime":
        let t = new AbortController();
        if (e.cacheSignal)
          e.cacheSignal.inputReady().then(() => {
            t.abort();
          });
        else if ("prerender-runtime" === e.type && e.stagedRendering) {
          let { stagedRendering: r } = e;
          r.waitForStage((0, m.getRuntimeStage)(r)).then(() =>
            (0, p.scheduleOnNextTick)(() => t.abort()),
          );
        } else (0, p.scheduleOnNextTick)(() => t.abort());
        return t.signal;
      case "prerender-client":
      case "validation-client":
      case "prerender-ppr":
      case "prerender-legacy":
      case "request":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return;
    }
  }
  function H(e, t) {
    let r = t.dynamicTracking;
    r &&
      r.dynamicAccesses.push({
        stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
        expression: e,
      });
  }
  function F(e) {
    let t = f.workAsyncStorage.getStore(),
      r = d.workUnitAsyncStorage.getStore();
    if (t && r)
      switch (r.type) {
        case "prerender-client":
        case "prerender": {
          let n = r.fallbackRouteParams;
          n && n.size > 0 && u.default.use((0, m.makeHangingPromise)(r.renderSignal, t.route, e));
          break;
        }
        case "prerender-ppr": {
          let n = r.fallbackRouteParams;
          if (n && n.size > 0) return x(t.route, e, r.dynamicTracking);
          break;
        }
        case "validation-client":
        case "prerender-legacy":
        case "request":
        case "unstable-cache":
          break;
        case "prerender-runtime":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E771", enumerable: !1, configurable: !0 },
          );
        case "cache":
        case "private-cache":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E745", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1130", enumerable: !1, configurable: !0 },
          );
      }
  }
  function W(e) {
    let t = f.workAsyncStorage.getStore(),
      r = d.workUnitAsyncStorage.getStore();
    if (t)
      switch ((!r && (0, d.throwForMissingRequestStore)(e), r.type)) {
        case "validation-client":
        case "request":
          return;
        case "prerender-client":
          u.default.use((0, m.makeHangingPromise)(r.renderSignal, t.route, e));
          break;
        case "prerender-legacy":
        case "prerender-ppr":
          if (t.forceStatic) return;
          throw Object.defineProperty(new g.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0,
          });
        case "prerender":
        case "prerender-runtime":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E795", enumerable: !1, configurable: !0 },
          );
        case "cache":
        case "unstable-cache":
        case "private-cache":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E745", enumerable: !1, configurable: !0 },
          );
        case "generate-static-params":
          throw Object.defineProperty(
            new y.InvariantError(
              `\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1130", enumerable: !1, configurable: !0 },
          );
      }
  }
  let z = /\n\s+at Suspense \(<anonymous>\)/,
    V = RegExp(
      `\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${h.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`,
    ),
    q = RegExp(`\\n\\s+at ${h.METADATA_BOUNDARY_NAME}[\\n\\s]`),
    G = RegExp(`\\n\\s+at ${h.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
    Y = RegExp(`\\n\\s+at ${h.OUTLET_BOUNDARY_NAME}[\\n\\s]`),
    K = RegExp(`\\n\\s+at ${b.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
  function J(e, t, r, n) {
    if (!Y.test(t)) {
      if (q.test(t)) {
        r.hasDynamicMetadata = !0;
        return;
      }
      if (G.test(t)) {
        r.hasDynamicViewport = !0;
        return;
      }
      if (V.test(t)) {
        (r.hasAllowedDynamic = !0), (r.hasSuspenseAboveBody = !0);
        return;
      } else if (z.test(t)) {
        r.hasAllowedDynamic = !0;
        return;
      } else {
        if (n.syncDynamicErrorWithStack)
          return void r.dynamicErrors.push(n.syncDynamicErrorWithStack);
        let a = ea(
          Object.defineProperty(
            Error(
              `Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1079", enumerable: !1, configurable: !0 },
          ),
          t,
          null,
        );
        return void r.dynamicErrors.push(a);
      }
    }
  }
  var Z = (((a = {})[(a.Runtime = 1)] = "Runtime"), (a[(a.Dynamic = 2)] = "Dynamic"), a);
  function Q(e) {
    return {
      hasDynamicMetadata: !1,
      hasAllowedClientDynamicAboveBoundary: !1,
      dynamicMetadata: null,
      hasDynamicViewport: !1,
      hasAllowedDynamic: !1,
      dynamicErrors: [],
      validationPreventingErrors: [],
      thrownErrorsOutsideBoundary: [],
      createInstantStack: e,
    };
  }
  function ee(e, t, r, n, a, i) {
    if (Y.test(t)) return;
    if (q.test(t)) {
      let n = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": ${1 === a ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`."} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1076", enumerable: !1, configurable: !0 },
        ),
        t,
        r.createInstantStack,
      );
      r.dynamicMetadata = n;
      return;
    }
    if (G.test(t)) {
      let n = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": ${1 === a ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`."} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1086", enumerable: !1, configurable: !0 },
        ),
        t,
        r.createInstantStack,
      );
      r.dynamicErrors.push(n);
      return;
    }
    let o = K.exec(t);
    if (o) {
      let e = z.exec(t);
      if (e && e.index < o.index) {
        r.hasAllowedDynamic = !0;
        return;
      }
    } else if (i.expectedIds.size === i.renderedIds.size) {
      (r.hasAllowedClientDynamicAboveBoundary = !0), (r.hasAllowedDynamic = !0);
      return;
    } else {
      let n = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1082", enumerable: !1, configurable: !0 },
        ),
        t,
        r.createInstantStack,
      );
      r.validationPreventingErrors.push(n);
      return;
    }
    if (n.syncDynamicErrorWithStack) {
      let e = n.syncDynamicErrorWithStack;
      null !== r.createInstantStack && void 0 === e.cause && (e.cause = r.createInstantStack()),
        r.dynamicErrors.push(e);
      return;
    }
    let s = ea(
      Object.defineProperty(
        Error(
          `Route "${e.route}": ${1 === a ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`." : "Uncached data or `connection()` was accessed outside of `<Suspense>`."} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,
        ),
        "__NEXT_ERROR_CODE",
        { value: "E1078", enumerable: !1, configurable: !0 },
      ),
      t,
      r.createInstantStack,
    );
    r.dynamicErrors.push(s);
  }
  function et(e, t, r, n) {
    let a = K.exec(n);
    if (a) {
      let i = z.exec(n);
      if (i && i.index < a.index) return;
      let o = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`,
            { cause: r },
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1112", enumerable: !1, configurable: !0 },
        ),
        n,
        null,
      );
      t.validationPreventingErrors.push(o);
    } else {
      let e = ea(
        Object.defineProperty(
          Error(
            "An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.",
            { cause: r },
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1118", enumerable: !1, configurable: !0 },
        ),
        n,
        null,
      );
      t.thrownErrorsOutsideBoundary.push(e);
    }
  }
  function er(e, t, r, n) {
    if (Y.test(t)) return;
    if (q.test(t)) {
      r.dynamicMetadata = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1080", enumerable: !1, configurable: !0 },
        ),
        t,
        null,
      );
      return;
    }
    if (G.test(t)) {
      let n = ea(
        Object.defineProperty(
          Error(
            `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1077", enumerable: !1, configurable: !0 },
        ),
        t,
        null,
      );
      r.dynamicErrors.push(n);
      return;
    }
    if (V.test(t)) {
      (r.hasAllowedDynamic = !0), (r.hasSuspenseAboveBody = !0);
      return;
    }
    if (z.test(t)) {
      r.hasAllowedDynamic = !0;
      return;
    } else if (n.syncDynamicErrorWithStack)
      return void r.dynamicErrors.push(n.syncDynamicErrorWithStack);
    let a = ea(
      Object.defineProperty(
        Error(
          `Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,
        ),
        "__NEXT_ERROR_CODE",
        { value: "E1084", enumerable: !1, configurable: !0 },
      ),
      t,
      null,
    );
    r.dynamicErrors.push(a);
  }
  function en(e, t, r, n) {
    if (!Y.test(t)) {
      if (q.test(t)) {
        r.dynamicMetadata = ea(
          Object.defineProperty(
            Error(
              `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1085", enumerable: !1, configurable: !0 },
          ),
          t,
          null,
        );
        return;
      }
      if (G.test(t)) {
        let n = ea(
          Object.defineProperty(
            Error(
              `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1081", enumerable: !1, configurable: !0 },
          ),
          t,
          null,
        );
        r.dynamicErrors.push(n);
        return;
      }
      if (V.test(t)) {
        (r.hasAllowedDynamic = !0), (r.hasSuspenseAboveBody = !0);
        return;
      } else if (z.test(t)) {
        r.hasAllowedDynamic = !0;
        return;
      } else {
        if (n.syncDynamicErrorWithStack)
          return void r.dynamicErrors.push(n.syncDynamicErrorWithStack);
        let a = ea(
          Object.defineProperty(
            Error(
              `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E1083", enumerable: !1, configurable: !0 },
          ),
          t,
          null,
        );
        return void r.dynamicErrors.push(a);
      }
    }
  }
  function ea(e, t, r) {
    return null !== r && (e.cause = r()), (e.stack = e.name + ": " + e.message + t), e;
  }
  var ei =
    (((i = {})[(i.Full = 0)] = "Full"),
    (i[(i.Empty = 1)] = "Empty"),
    (i[(i.Errored = 2)] = "Errored"),
    i);
  function eo(e, t) {
    console.error(t),
      console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
  }
  function es(e, t, r, n) {
    if (n.syncDynamicErrorWithStack)
      throw (eo(e, n.syncDynamicErrorWithStack), new l.StaticGenBailoutError());
    if (0 !== t) {
      if (r.hasSuspenseAboveBody) return;
      let n = r.dynamicErrors;
      if (n.length > 0) {
        for (let t = 0; t < n.length; t++) eo(e, n[t]);
        throw new l.StaticGenBailoutError();
      }
      if (r.hasDynamicViewport)
        throw (
          (console.error(
            `Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,
          ),
          new l.StaticGenBailoutError())
        );
      if (1 === t)
        throw (
          (console.error(
            `Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`,
          ),
          new l.StaticGenBailoutError())
        );
    } else if (!1 === r.hasAllowedDynamic && r.hasDynamicMetadata)
      throw (
        (console.error(
          `Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,
        ),
        new l.StaticGenBailoutError())
      );
  }
  function eu(e, t, r, n) {
    if (n || r.hasSuspenseAboveBody) return [];
    if (0 !== t) {
      let n = r.dynamicErrors;
      if (n.length > 0) return n;
      if (1 === t)
        return [
          Object.defineProperty(
            new y.InvariantError(
              `Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E936", enumerable: !1, configurable: !0 },
          ),
        ];
    } else if (!1 === r.hasAllowedDynamic && 0 === r.dynamicErrors.length && r.dynamicMetadata)
      return [r.dynamicMetadata];
    return [];
  }
  function ec(e, t, r, n, a) {
    if (n) {
      let { missingSampleErrors: e } = n;
      if (e.length > 0) return e;
    }
    let { validationPreventingErrors: i } = r;
    if (i.length > 0) return i;
    if (a.renderedIds.size < a.expectedIds.size) {
      let { thrownErrorsOutsideBoundary: t, createInstantStack: n } = r;
      if (0 === t.length) {
        let t = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`,
          r = null !== n ? n() : Error();
        return (r.name = "Error"), (r.message = t), [r];
      }
      if (1 === t.length) {
        let r = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`,
          a = null !== n ? n() : Error();
        return (a.name = "Error"), (a.message = r), [a, t[0]];
      }
      {
        let r = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`,
          a = null !== n ? n() : Error();
        return (a.name = "Error"), (a.message = r), [a, ...t];
      }
    }
    if (0 !== t) {
      let n = r.dynamicErrors;
      if (n.length > 0) return n;
      if (1 === t)
        return r.hasAllowedClientDynamicAboveBoundary
          ? []
          : [
              Object.defineProperty(
                new y.InvariantError(
                  `Route "${e.route}" failed to render during instant validation and Next.js was unable to determine a reason.`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E1055", enumerable: !1, configurable: !0 },
              ),
            ];
    } else {
      let e = r.dynamicErrors;
      if (e.length > 0) return e;
      if (!1 === r.hasAllowedDynamic && r.dynamicMetadata) return [r.dynamicMetadata];
    }
    return [];
  }
};
