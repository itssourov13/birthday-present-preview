/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, n) => {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = {
    default: function () {
      return o;
    },
    getProperError: function () {
      return i;
    },
  };
  for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
  let a = e.r(29311);
  function o(e) {
    return "object" == typeof e && null !== e && "name" in e && "message" in e;
  }
  function i(e) {
    let t;
    return o(e)
      ? e
      : Object.defineProperty(
          Error(
            (0, a.isPlainObject)(e)
              ? ((t = new WeakSet()),
                JSON.stringify(e, (e, n) => {
                  if ("object" == typeof n && null !== n) {
                    if (t.has(n)) return "[Circular]";
                    t.add(n);
                  }
                  return n;
                }))
              : e + "",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
  }
};
