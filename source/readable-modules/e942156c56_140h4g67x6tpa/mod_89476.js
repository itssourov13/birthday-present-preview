/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    ErrorBoundary: function () {
      return y;
    },
    ErrorBoundaryHandler: function () {
      return _;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  let u = e.r(11324),
    i = e.r(84942),
    c = u._(e.r(12472)),
    a = e.r(34252),
    s = e.r(43540);
  e.r(39837);
  let l = e.r(48751),
    f = e.r(9816),
    d = e.r(38674),
    p = "u" > typeof window && (0, f.isBot)(window.navigator.userAgent);
  class _ extends c.default.Component {
    static {
      this.contextType = d.AppRouterContext;
    }
    constructor(e) {
      super(e),
        (this.reset = () => {
          this.setState({ error: null });
        }),
        (this.unstable_retry = () => {
          (0, c.startTransition)(() => {
            this.context?.refresh(), this.reset();
          });
        }),
        (this.state = { error: null, previousPathname: this.props.pathname });
    }
    static getDerivedStateFromError(e) {
      if ((0, s.isNextRouterError)(e)) throw e;
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      let { error: r } = t;
      return e.pathname !== t.previousPathname && t.error
        ? { error: null, previousPathname: e.pathname }
        : { error: t.error, previousPathname: e.pathname };
    }
    render() {
      return this.state.error && !p
        ? ((0, l.handleISRError)({ error: this.state.error }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              this.props.errorStyles,
              this.props.errorScripts,
              (0, i.jsx)(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset,
                unstable_retry: this.unstable_retry,
              }),
            ],
          }))
        : this.props.children;
    }
  }
  function y({ errorComponent: e, errorStyles: t, errorScripts: r, children: n }) {
    let o = (0, a.useUntrackedPathname)();
    return e
      ? (0, i.jsx)(_, {
          pathname: o,
          errorComponent: e,
          errorStyles: t,
          errorScripts: r,
          children: n,
        })
      : (0, i.jsx)(i.Fragment, { children: n });
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
