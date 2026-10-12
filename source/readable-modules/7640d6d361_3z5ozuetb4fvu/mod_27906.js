/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, a) => {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 });
  var i = {
    default: function () {
      return c;
    },
    getImageProps: function () {
      return d;
    },
  };
  for (var n in i) Object.defineProperty(a, n, { enumerable: !0, get: i[n] });
  let s = e.r(2178),
    r = e.r(2999),
    o = e.r(64816),
    l = s._(e.r(21366));
  function d(e) {
    let { props: t } = (0, r.getImgProps)(e, {
      defaultLoader: l.default,
      imgConf: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      },
    });
    for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
    return { props: t };
  }
  let c = o.Image;
};
