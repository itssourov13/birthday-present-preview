/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    bindSnapshot: function () {
      return s;
    },
    createAsyncLocalStorage: function () {
      return a;
    },
    createSnapshot: function () {
      return l;
    },
  };
  for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
  let u = Object.defineProperty(
    Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),
    "__NEXT_ERROR_CODE",
    { value: "E504", enumerable: !1, configurable: !0 },
  );
  class i {
    disable() {
      throw u;
    }
    getStore() {}
    run() {
      throw u;
    }
    exit() {
      throw u;
    }
    enterWith() {
      throw u;
    }
    static bind(e) {
      return e;
    }
  }
  let c = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function a() {
    return c ? new c() : new i();
  }
  function s(e) {
    return c ? c.bind(e) : i.bind(e);
  }
  function l() {
    return c
      ? c.snapshot()
      : function (e, ...t) {
          return e(...t);
        };
  }
};
