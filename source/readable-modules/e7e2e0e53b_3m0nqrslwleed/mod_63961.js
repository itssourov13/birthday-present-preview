/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    cancelIdleCallback: function () {
      return o;
    },
    requestIdleCallback: function () {
      return a;
    },
  };
  for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
  let a =
      ("u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
      function (e) {
        let t = Date.now();
        return self.setTimeout(function () {
          e({
            didTimeout: !1,
            timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - t));
            },
          });
        }, 1);
      },
    o =
      ("u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
      function (e) {
        return clearTimeout(e);
      };
  ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
    void 0 === r.default.__esModule &&
    (Object.defineProperty(r.default, "__esModule", { value: !0 }),
    Object.assign(r.default, r),
    (t.exports = r.default));
};
