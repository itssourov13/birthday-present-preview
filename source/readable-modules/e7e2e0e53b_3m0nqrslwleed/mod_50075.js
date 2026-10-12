/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e) => {
  "use strict";
  var t = e.i(84942),
    r = e.i(12472),
    n = e.i(78550),
    i = e.i(2272);
  e.s([
    "default",
    0,
    function () {
      let [e, a] = (0, r.useState)(!1),
        [o, s] = (0, r.useState)(null),
        l = (0, r.useRef)(null),
        u = (0, r.useRef)(null),
        c = (0, r.useCallback)(() => a(!1), []);
      if (
        ((0, r.useEffect)(() => {
          let e = (e) => {
            u.current = document.activeElement ?? null;
            let t = e.detail;
            s((0, i.findOccasionGroup)(t?.groupId)), a(!0);
          };
          return (
            window.addEventListener(i.OPEN_OCCASION_MODAL_EVENT, e),
            () => window.removeEventListener(i.OPEN_OCCASION_MODAL_EVENT, e)
          );
        }, []),
        (0, r.useEffect)(() => {
          if (!e) return;
          document.body.classList.add("nav-menu-open");
          let t = (e) => {
            "Escape" === e.key && a(!1);
          };
          return (
            document.addEventListener("keydown", t),
            l.current?.focus(),
            () => {
              document.body.classList.remove("nav-menu-open"),
                document.removeEventListener("keydown", t),
                u.current?.focus?.();
            }
          );
        }, [e]),
        !e)
      )
        return null;
      let d = o ? (o.children ?? []).filter((e) => e.live) : i.LIVE_OCCASIONS;
      return (0, t.jsx)("div", {
        className: "occ-modal-backdrop",
        onClick: c,
        children: (0, t.jsxs)("div", {
          className: "occ-modal",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "occ-modal-title",
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, t.jsx)("button", {
              ref: l,
              type: "button",
              className: "occ-modal-close",
              "aria-label": "Close",
              onClick: c,
              children: "✕",
            }),
            o
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: "occ-modal-back",
                      onClick: () => s(null),
                      children: "← All occasions",
                    }),
                    (0, t.jsxs)("span", {
                      className: "hero-badge",
                      children: [o.emoji, " ", o.label],
                    }),
                    (0, t.jsx)("h2", {
                      className: "section-title",
                      id: "occ-modal-title",
                      children: "Pick a festival",
                    }),
                    (0, t.jsx)("p", {
                      className: "section-sub",
                      children: "Select the festival you want to build. More are on the way!",
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("span", {
                      className: "hero-badge",
                      children: "✨ Start a new gift",
                    }),
                    (0, t.jsx)("h2", {
                      className: "section-title",
                      id: "occ-modal-title",
                      children: "Choose your occasion",
                    }),
                    (0, t.jsx)("p", {
                      className: "section-sub",
                      children:
                        "Select the type of digital surprise you want to build. More occasions are coming soon!",
                    }),
                  ],
                }),
            (0, t.jsx)("div", {
              className: `occ-modal-grid${1 === d.length ? " occ-modal-grid--single" : ""}`,
              children: d.map((e) => {
                if (e.live && e.children?.length) {
                  let r = e.children.filter((e) => e.live).length;
                  return (0, t.jsxs)(
                    "button",
                    {
                      type: "button",
                      className: "occasion-card occasion-card--live",
                      onClick: () => s(e),
                      "aria-label": `${e.label} — see the festivals you can create`,
                      children: [
                        (0, t.jsx)("span", {
                          className: "occasion-emoji",
                          "aria-hidden": !0,
                          children: e.emoji,
                        }),
                        (0, t.jsxs)("span", {
                          className: "occasion-badge occasion-badge--live",
                          children: [r, " live"],
                        }),
                        (0, t.jsx)("h3", { children: e.label }),
                        (0, t.jsx)("p", { children: e.desc }),
                        (0, t.jsx)("span", {
                          className: "occasion-cta",
                          "aria-hidden": !0,
                          children: "See festivals →",
                        }),
                      ],
                    },
                    e.id,
                  );
                }
                return e.live
                  ? (0, t.jsxs)(
                      n.default,
                      {
                        href: e.href ?? "/create",
                        className: "occasion-card occasion-card--live",
                        onClick: c,
                        children: [
                          (0, t.jsx)("span", {
                            className: "occasion-emoji",
                            "aria-hidden": !0,
                            children: e.emoji,
                          }),
                          (0, t.jsx)("h3", { children: e.label }),
                          (0, t.jsx)("p", { children: e.desc }),
                          (0, t.jsxs)("span", {
                            className: "occasion-cta",
                            "aria-hidden": !0,
                            children: ["Select ", e.label, " →"],
                          }),
                        ],
                      },
                      e.id,
                    )
                  : null;
              }),
            }),
          ],
        }),
      });
    },
  ]);
};
