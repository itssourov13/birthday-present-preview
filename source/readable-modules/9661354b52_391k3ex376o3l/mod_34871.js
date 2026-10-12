/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "ReadonlyURLSearchParams", {
      enumerable: !0,
      get: function () {
        return a;
      },
    });
  class n extends Error {
    constructor() {
      super(
        "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
      );
    }
  }
  class a extends URLSearchParams {
    append() {
      throw new n();
    }
    delete() {
      throw new n();
    }
    set() {
      throw new n();
    }
    sort() {
      throw new n();
    }
  }
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
