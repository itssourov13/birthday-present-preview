/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = {
    onCaughtError: function () {
      return d;
    },
    onUncaughtError: function () {
      return p;
    },
  };
  for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
  let a = e.r(2178),
    o = e.r(43540),
    i = e.r(39982),
    u = e.r(64587),
    s = e.r(89476),
    c = a._(e.r(59889)),
    f = {
      decorateDevError: (e) => e,
      handleClientError: () => {},
      originConsoleError: console.error.bind(console),
    };
  function d(e, t) {
    let n,
      r = t.errorBoundary?.constructor;
    if (
      (n =
        n || (r === s.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default))
    )
      return p(e);
    (0, i.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || f.originConsoleError(e);
  }
  function p(e) {
    (0, i.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || (0, u.reportGlobalError)(e);
  }
  ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
    void 0 === n.default.__esModule &&
    (Object.defineProperty(n.default, "__esModule", { value: !0 }),
    Object.assign(n.default, n),
    (t.exports = n.default));
};
