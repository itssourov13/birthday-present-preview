/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = {
    GracefulDegradeBoundary: function () {
      return i;
    },
    default: function () {
      return u;
    },
  };
  for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
  let a = e.r(84942),
    o = e.r(12472);
  class i extends o.Component {
    constructor(e) {
      super(e),
        (this.state = { hasError: !1 }),
        (this.rootHtml = ""),
        (this.htmlAttributes = {}),
        (this.htmlRef = (0, o.createRef)());
    }
    static getDerivedStateFromError(e) {
      return { hasError: !0 };
    }
    componentDidMount() {
      let e = this.htmlRef.current;
      this.state.hasError &&
        e &&
        Object.entries(this.htmlAttributes).forEach(([t, n]) => {
          e.setAttribute(t, n);
        });
    }
    render() {
      let { hasError: e } = this.state;
      return ("u" > typeof window &&
        !this.rootHtml &&
        ((this.rootHtml = document.documentElement.innerHTML),
        (this.htmlAttributes = (function (e) {
          let t = {};
          for (let n = 0; n < e.attributes.length; n++) {
            let r = e.attributes[n];
            t[r.name] = r.value;
          }
          return t;
        })(document.documentElement))),
      e)
        ? (0, a.jsx)("html", {
            ref: this.htmlRef,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: this.rootHtml },
          })
        : this.props.children;
    }
  }
  let u = i;
  ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
    void 0 === n.default.__esModule &&
    (Object.defineProperty(n.default, "__esModule", { value: !0 }),
    Object.assign(n.default, n),
    (t.exports = n.default));
};
