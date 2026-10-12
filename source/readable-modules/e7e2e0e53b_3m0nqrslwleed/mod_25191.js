/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    default: function () {
      return j;
    },
    handleClientScriptLoad: function () {
      return g;
    },
    initScriptLoader: function () {
      return b;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a = e.r(2178),
    o = e.r(11324),
    s = e.r(84942),
    l = a._(e.r(56662)),
    u = o._(e.r(12472)),
    c = e.r(41890),
    d = e.r(32282),
    f = e.r(63961),
    h = e.r(69469),
    p = new Map(),
    m = new Set(),
    y = (e) => {
      let {
          src: t,
          id: r,
          onLoad: n = () => {},
          onReady: i = null,
          dangerouslySetInnerHTML: a,
          children: o = "",
          strategy: s = "afterInteractive",
          onError: u,
          stylesheets: c,
        } = e,
        f = r || t;
      if (f && m.has(f)) return;
      if (p.has(t)) {
        m.add(f), p.get(t).then(n, u);
        return;
      }
      let h = () => {
          i && i(), m.add(f);
        },
        y = document.createElement("script"),
        g = new Promise((e, t) => {
          y.addEventListener("load", function (t) {
            e(), n && n.call(this, t), h();
          }),
            y.addEventListener("error", function (e) {
              t(e);
            });
        }).catch(function (e) {
          u && u(e);
        });
      a
        ? ((y.innerHTML = a.__html || ""), h())
        : o
          ? ((y.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), h())
          : t && ((y.src = t), p.set(t, g)),
        (0, d.setAttributesFromProps)(y, e),
        "worker" === s && y.setAttribute("type", "text/partytown"),
        y.setAttribute("data-nscript", s),
        c &&
          ((e) => {
            if (l.default.preinit)
              return e.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              });
            if ("u" > typeof window) {
              let t = document.head;
              e.forEach((e) => {
                let r = document.createElement("link");
                (r.type = "text/css"), (r.rel = "stylesheet"), (r.href = e), t.appendChild(r);
              });
            }
          })(c),
        document.body.appendChild(y);
    };
  function g(e) {
    let { strategy: t = "afterInteractive" } = e;
    "lazyOnload" === t
      ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => y(e));
        })
      : y(e);
  }
  function b(e) {
    e.forEach(g),
      [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
      ].forEach((e) => {
        let t = e.id || e.getAttribute("src");
        m.add(t);
      });
  }
  function v(e) {
    let {
        id: t,
        src: r = "",
        onLoad: n = () => {},
        onReady: i = null,
        strategy: a = "afterInteractive",
        onError: o,
        stylesheets: d,
        ...p
      } = e,
      {
        updateScripts: g,
        scripts: b,
        getIsSsr: v,
        appDir: j,
        nonce: _,
      } = (0, u.useContext)(c.HeadManagerContext);
    _ = p.nonce || _;
    let O = (0, u.useRef)(!1);
    (0, u.useEffect)(() => {
      let e = t || r;
      O.current || (i && e && m.has(e) && i(), (O.current = !0));
    }, [i, t, r]);
    let w = (0, u.useRef)(!1);
    if (
      ((0, u.useEffect)(() => {
        if (!w.current) {
          if ("afterInteractive" === a) y(e);
          else
            "lazyOnload" === a &&
              ("complete" === document.readyState
                ? (0, f.requestIdleCallback)(() => y(e))
                : window.addEventListener("load", () => {
                    (0, f.requestIdleCallback)(() => y(e));
                  }));
          w.current = !0;
        }
      }, [e, a]),
      ("beforeInteractive" === a || "worker" === a) &&
        (g
          ? ((b[a] = (b[a] || []).concat([
              { id: t, src: r, onLoad: n, onReady: i, onError: o, ...p, nonce: _ },
            ])),
            g(b))
          : v && v()
            ? m.add(t || r)
            : v && !v() && y({ ...e, nonce: _ })),
      j)
    ) {
      if (
        (d &&
          d.forEach((e) => {
            l.default.preinit(e, { as: "style" });
          }),
        "beforeInteractive" === a)
      )
        if (!r)
          return (
            p.dangerouslySetInnerHTML &&
              ((p.children = p.dangerouslySetInnerHTML.__html), delete p.dangerouslySetInnerHTML),
            (0, s.jsx)("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${(0, h.htmlEscapeJsonString)(JSON.stringify([0, { ...p, id: t }]))})`,
              },
            })
          );
        else
          return (
            l.default.preload(
              r,
              p.integrity
                ? { as: "script", integrity: p.integrity, nonce: _, crossOrigin: p.crossOrigin }
                : { as: "script", nonce: _, crossOrigin: p.crossOrigin },
            ),
            (0, s.jsx)("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${(0, h.htmlEscapeJsonString)(JSON.stringify([r, { ...p, id: t }]))})`,
              },
            })
          );
      "afterInteractive" === a &&
        r &&
        l.default.preload(
          r,
          p.integrity
            ? { as: "script", integrity: p.integrity, nonce: _, crossOrigin: p.crossOrigin }
            : { as: "script", nonce: _, crossOrigin: p.crossOrigin },
        );
    }
    return null;
  }
  Object.defineProperty(v, "__nextScript", { value: !0 });
  let j = v;
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
