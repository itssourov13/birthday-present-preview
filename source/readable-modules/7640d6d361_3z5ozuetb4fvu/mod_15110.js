/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, a) => {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 });
  var i = {
    VALID_LOADERS: function () {
      return s;
    },
    imageConfigDefault: function () {
      return r;
    },
  };
  for (var n in i) Object.defineProperty(a, n, { enumerable: !0, get: i[n] });
  let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
    r = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 14400,
      formats: ["image/webp"],
      maximumDiskCacheSize: void 0,
      maximumRedirects: 3,
      maximumResponseBody: 5e7,
      dangerouslyAllowLocalIP: !1,
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: [75],
      unoptimized: !1,
      customCacheHandler: !1,
    };
};
