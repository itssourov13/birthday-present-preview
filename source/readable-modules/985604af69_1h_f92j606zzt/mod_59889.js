/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "default", {
      enumerable: !0,
      get: function () {
        return l;
      },
    }),
    e.r(2178);
  let o = e.r(84942);
  e.r(12472);
  let n = e.r(48751),
    i = e.r(53492),
    l = function ({ error: e }) {
      let t = e?.digest,
        r = !!t;
      return (
        (0, n.handleISRError)({ error: e }),
        (0, o.jsxs)("html", {
          id: "__next_error__",
          children: [
            (0, o.jsx)("head", {
              children: (0, o.jsx)("style", {
                dangerouslySetInnerHTML: { __html: i.errorThemeCss },
              }),
            }),
            (0, o.jsxs)("body", {
              children: [
                (0, o.jsx)("div", {
                  style: i.errorStyles.container,
                  children: (0, o.jsxs)("div", {
                    style: i.errorStyles.card,
                    children: [
                      (0, o.jsx)(i.WarningIcon, {}),
                      (0, o.jsx)("h1", {
                        style: i.errorStyles.title,
                        children: "This page couldn’t load",
                      }),
                      (0, o.jsx)("p", {
                        style: i.errorStyles.message,
                        children: r
                          ? "A server error occurred. Reload to try again."
                          : "Reload to try again, or go back.",
                      }),
                      (0, o.jsxs)("div", {
                        style: i.errorStyles.buttonGroup,
                        children: [
                          (0, o.jsx)("form", {
                            style: i.errorStyles.form,
                            children: (0, o.jsx)("button", {
                              type: "submit",
                              style: i.errorStyles.button,
                              children: "Reload",
                            }),
                          }),
                          !r &&
                            (0, o.jsx)("button", {
                              type: "button",
                              style: i.errorStyles.buttonSecondary,
                              onClick: () => {
                                window.history.length > 1
                                  ? window.history.back()
                                  : (window.location.href = "/");
                              },
                              children: "Back",
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                t &&
                  (0, o.jsxs)("p", { style: i.errorStyles.digestFooter, children: ["ERROR ", t] }),
              ],
            }),
          ],
        })
      );
    };
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
