/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, a) => {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.defineProperty(a, "default", {
      enumerable: !0,
      get: function () {
        return r;
      },
    });
  let i = e.r(13050),
    n = e.r(97563);
  function s({ config: e, src: t, width: a, quality: r }) {
    let o = (0, n.getDeploymentId)();
    if (t.startsWith("/") && !t.startsWith("//")) {
      let e = t.indexOf("?");
      if (-1 !== e) {
        let a = new URLSearchParams(t.slice(e + 1)),
          i = a.get("dpl");
        if (i) {
          (o = i), a.delete("dpl");
          let n = a.toString();
          t = t.slice(0, e) + (n ? "?" + n : "");
        }
      }
    }
    if (
      t.startsWith("/") &&
      t.includes("?") &&
      e.localPatterns?.length === 1 &&
      "**" === e.localPatterns[0].pathname &&
      "" === e.localPatterns[0].search
    )
      throw Object.defineProperty(
        Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
        "__NEXT_ERROR_CODE",
        { value: "E871", enumerable: !1, configurable: !0 },
      );
    let l = (0, i.findClosestQuality)(r, e);
    return `${e.path}?url=${encodeURIComponent(t)}&w=${a}&q=${l}${t.startsWith("/") && o ? `&dpl=${o}` : ""}`;
  }
  s.__next_img_default = !0;
  let r = s;
};
