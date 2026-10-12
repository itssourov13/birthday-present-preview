/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, a) => {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.defineProperty(a, "default", {
      enumerable: !0,
      get: function () {
        return o;
      },
    });
  let i = e.r(12472),
    n = "u" < typeof window,
    s = n ? () => {} : i.useLayoutEffect,
    r = n ? () => {} : i.useEffect;
  function o(e) {
    let { headManager: t, reduceComponentsToState: a } = e;
    function o() {
      if (t && t.mountedInstances) {
        let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(a(e));
      }
    }
    return (
      n && (t?.mountedInstances?.add(e.children), o()),
      s(
        () => (
          t?.mountedInstances?.add(e.children),
          () => {
            t?.mountedInstances?.delete(e.children);
          }
        ),
      ),
      s(
        () => (
          t && (t._pendingUpdate = o),
          () => {
            t && (t._pendingUpdate = o);
          }
        ),
      ),
      r(
        () => (
          t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
          () => {
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
          }
        ),
      ),
      null
    );
  }
};
