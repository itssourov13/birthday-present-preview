/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    IDLE_LINK_STATUS: function () {
      return f;
    },
    PENDING_LINK_STATUS: function () {
      return s;
    },
    getLinkForCurrentNavigation: function () {
      return p;
    },
    mountFormInstance: function () {
      return m;
    },
    mountLinkInstance: function () {
      return E;
    },
    onLinkVisibilityChanged: function () {
      return S;
    },
    onNavigationIntent: function () {
      return b;
    },
    pingVisibleLinks: function () {
      return O;
    },
    setLinkForCurrentNavigation: function () {
      return d;
    },
    unmountLinkForCurrentNavigation: function () {
      return h;
    },
    unmountPrefetchableInstance: function () {
      return P;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let l = e.r(53973),
    u = e.r(3971),
    i = e.r(50278),
    o = e.r(12472),
    c = null,
    s = { pending: !0 },
    f = { pending: !1 };
  function d(e) {
    (0, o.startTransition)(() => {
      c?.setOptimisticLinkStatus(f), e?.setOptimisticLinkStatus(s), (c = e);
    });
  }
  function h(e) {
    c === e && (c = null);
  }
  function p() {
    return c;
  }
  let y = "function" == typeof WeakMap ? new WeakMap() : new Map(),
    g = new Set(),
    _ =
      "function" == typeof IntersectionObserver
        ? new IntersectionObserver(
            function (e) {
              for (let t of e) {
                let e = t.intersectionRatio > 0;
                S(t.target, e);
              }
            },
            { rootMargin: "200px" },
          )
        : null;
  function v(e, t) {
    void 0 !== y.get(e) && P(e), y.set(e, t), null !== _ && _.observe(e);
  }
  function R(t) {
    if (!("u" > typeof window)) return null;
    {
      let { createPrefetchURL: r } = e.r(50953);
      try {
        return r(t);
      } catch {
        return (
          ("function" == typeof reportError ? reportError : console.error)(
            `Cannot prefetch '${t}' because it cannot be converted to a URL.`,
          ),
          null
        );
      }
    }
  }
  function E(e, t, r, n, a, l) {
    if (a) {
      let a = R(t);
      if (null !== a) {
        let t = {
          router: r,
          fetchStrategy: n,
          isVisible: !1,
          prefetchTask: null,
          prefetchHref: a.href,
          setOptimisticLinkStatus: l,
        };
        return v(e, t), t;
      }
    }
    return {
      router: r,
      fetchStrategy: n,
      isVisible: !1,
      prefetchTask: null,
      prefetchHref: null,
      setOptimisticLinkStatus: l,
    };
  }
  function m(e, t, r, n) {
    let a = R(t);
    null === a ||
      v(e, {
        router: r,
        fetchStrategy: n,
        isVisible: !1,
        prefetchTask: null,
        prefetchHref: a.href,
        setOptimisticLinkStatus: null,
      });
  }
  function P(e) {
    let t = y.get(e);
    if (void 0 !== t) {
      y.delete(e), g.delete(t);
      let r = t.prefetchTask;
      null !== r && (0, i.cancelPrefetchTask)(r);
    }
    null !== _ && _.unobserve(e);
  }
  function S(e, t) {
    let r = y.get(e);
    void 0 !== r &&
      ((r.isVisible = t), t ? g.add(r) : g.delete(r), T(r, l.PrefetchPriority.Default));
  }
  function b(e, t) {
    let r = y.get(e);
    void 0 !== r && void 0 !== r && T(r, l.PrefetchPriority.Intent);
  }
  function T(t, r) {
    if ("u" > typeof window) {
      let n = t.prefetchTask;
      if (!t.isVisible) {
        null !== n && (0, i.cancelPrefetchTask)(n);
        return;
      }
      let { getCurrentAppRouterState: a } = e.r(94596),
        l = a();
      if (null !== l) {
        let e = l.tree;
        if (null === n) {
          let n = l.nextUrl,
            a = (0, u.createCacheKey)(t.prefetchHref, n);
          t.prefetchTask = (0, i.schedulePrefetchTask)(a, e, t.fetchStrategy, r, null);
        } else (0, i.reschedulePrefetchTask)(n, e, t.fetchStrategy, r);
      }
    }
  }
  function O(e, t) {
    for (let r of g) {
      let n = r.prefetchTask;
      if (null !== n && !(0, i.isPrefetchTaskDirty)(n, e, t)) continue;
      null !== n && (0, i.cancelPrefetchTask)(n);
      let a = (0, u.createCacheKey)(r.prefetchHref, e);
      r.prefetchTask = (0, i.schedulePrefetchTask)(
        a,
        t,
        r.fetchStrategy,
        l.PrefetchPriority.Default,
        null,
      );
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
