/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  var n = e.i(4146);
  Object.defineProperty(r, "__esModule", { value: !0 });
  var a = {
    atLeastOneTask: function () {
      return u;
    },
    scheduleImmediate: function () {
      return s;
    },
    scheduleOnNextTick: function () {
      return o;
    },
    waitAtLeastOneReactRenderTask: function () {
      return c;
    },
  };
  for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
  let o = (e) => {
      Promise.resolve().then(() => {
        n.default.nextTick(e);
      });
    },
    s = (e) => {
      setImmediate(e);
    };
  function u() {
    return new Promise((e) => s(e));
  }
  function c() {
    return new Promise((e) => setImmediate(e));
  }
};
