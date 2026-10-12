/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.defineProperty(r, "ReflectAdapter", {
      enumerable: !0,
      get: function () {
        return n;
      },
    });
  class n {
    static get(e, t, r) {
      let n = Reflect.get(e, t, r);
      return "function" == typeof n ? n.bind(e) : n;
    }
    static set(e, t, r, n) {
      return Reflect.set(e, t, r, n);
    }
    static has(e, t) {
      return Reflect.has(e, t);
    }
    static deleteProperty(e, t) {
      return Reflect.deleteProperty(e, t);
    }
  }
};
