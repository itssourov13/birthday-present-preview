/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, a) => {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 });
  var i = {
    default: function () {
      return p;
    },
    defaultHead: function () {
      return h;
    },
  };
  for (var n in i) Object.defineProperty(a, n, { enumerable: !0, get: i[n] });
  let s = e.r(2178),
    r = e.r(11324),
    o = e.r(84942),
    l = r._(e.r(12472)),
    d = s._(e.r(35346)),
    c = e.r(41890);
  function h() {
    return [
      (0, o.jsx)("meta", { charSet: "utf-8" }, "charset"),
      (0, o.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
    ];
  }
  function u(e, t) {
    return "string" == typeof t || "number" == typeof t
      ? e
      : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
              [],
            ),
          )
        : e.concat(t);
  }
  e.r(35882);
  let m = ["name", "httpEquiv", "charSet", "itemProp"];
  function f(e) {
    let t, a, i, n;
    return e
      .reduce(u, [])
      .reverse()
      .concat(h().reverse())
      .filter(
        ((t = new Set()),
        (a = new Set()),
        (i = new Set()),
        (n = {}),
        (e) => {
          let s = !0,
            r = !1;
          if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
            r = !0;
            let a = e.key.slice(e.key.indexOf("$") + 1);
            t.has(a) ? (s = !1) : t.add(a);
          }
          switch (e.type) {
            case "title":
            case "base":
              a.has(e.type) ? (s = !1) : a.add(e.type);
              break;
            case "meta":
              for (let t = 0, a = m.length; t < a; t++) {
                let a = m[t];
                if (e.props.hasOwnProperty(a))
                  if ("charSet" === a) i.has(a) ? (s = !1) : i.add(a);
                  else {
                    let t = e.props[a],
                      i = n[a] || new Set();
                    ("name" !== a || !r) && i.has(t) ? (s = !1) : (i.add(t), (n[a] = i));
                  }
              }
          }
          return s;
        }),
      )
      .reverse()
      .map((e, t) => {
        let a = e.key || t;
        return l.default.cloneElement(e, { key: a });
      });
  }
  let p = function ({ children: e }) {
    let t = (0, l.useContext)(c.HeadManagerContext);
    return (0, o.jsx)(d.default, { reduceComponentsToState: f, headManager: t, children: e });
  };
  ("function" == typeof a.default || ("object" == typeof a.default && null !== a.default)) &&
    void 0 === a.default.__esModule &&
    (Object.defineProperty(a.default, "__esModule", { value: !0 }),
    Object.assign(a.default, a),
    (t.exports = a.default));
};
