/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    isRequestAPICallableInsideAfter: function () {
      return c;
    },
    throwForSearchParamsAccessInUseCache: function () {
      return l;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
      return s;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let o = e.r(27637),
    i = e.r(32706);
  function s(e, t) {
    throw Object.defineProperty(
      new o.StaticGenBailoutError(
        `Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
      ),
      "__NEXT_ERROR_CODE",
      { value: "E543", enumerable: !1, configurable: !0 },
    );
  }
  function l(e, t) {
    let r = Object.defineProperty(
      Error(
        `Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`,
      ),
      "__NEXT_ERROR_CODE",
      { value: "E842", enumerable: !1, configurable: !0 },
    );
    throw (Error.captureStackTrace(r, t), (e.invalidDynamicUsageError ??= r), r);
  }
  function c() {
    let e = i.afterTaskAsyncStorage.getStore();
    return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action";
  }
};
