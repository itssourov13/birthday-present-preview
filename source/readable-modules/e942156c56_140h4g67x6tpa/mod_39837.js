/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    handleHardNavError: function () {
      return i;
    },
    useNavFailureHandler: function () {
      return c;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  e.r(12472);
  let u = e.r(54250);
  function i(e) {
    return (
      !!(e && "u" > typeof window) &&
      !!window.next.__pendingUrl &&
      (0, u.createHrefFromUrl)(new URL(window.location.href)) !==
        (0, u.createHrefFromUrl)(window.next.__pendingUrl) &&
      (console.error("Error occurred during navigation, falling back to hard navigation", e),
      (window.location.href = window.next.__pendingUrl.toString()),
      !0)
    );
  }
  function c() {}
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
