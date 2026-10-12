/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n,
    a = {
      RenderStage: function () {
        return u;
      },
      StagedRenderingController: function () {
        return c;
      },
    };
  for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
  let o = e.r(20502),
    s = e.r(38312);
  var u =
    (((n = {})[(n.Before = 1)] = "Before"),
    (n[(n.EarlyStatic = 2)] = "EarlyStatic"),
    (n[(n.Static = 3)] = "Static"),
    (n[(n.EarlyRuntime = 4)] = "EarlyRuntime"),
    (n[(n.Runtime = 5)] = "Runtime"),
    (n[(n.Dynamic = 6)] = "Dynamic"),
    (n[(n.Abandoned = 7)] = "Abandoned"),
    n);
  class c {
    constructor(e, t, r) {
      (this.abortSignal = e),
        (this.abandonController = t),
        (this.shouldTrackSyncIO = r),
        (this.currentStage = 1),
        (this.syncInterruptReason = null),
        (this.staticStageEndTime = 1 / 0),
        (this.runtimeStageEndTime = 1 / 0),
        (this.staticStageListeners = []),
        (this.earlyRuntimeStageListeners = []),
        (this.runtimeStageListeners = []),
        (this.dynamicStageListeners = []),
        (this.staticStagePromise = (0, s.createPromiseWithResolvers)()),
        (this.earlyRuntimeStagePromise = (0, s.createPromiseWithResolvers)()),
        (this.runtimeStagePromise = (0, s.createPromiseWithResolvers)()),
        (this.dynamicStagePromise = (0, s.createPromiseWithResolvers)()),
        e &&
          e.addEventListener(
            "abort",
            () => {
              let { reason: t } = e;
              this.staticStagePromise.promise.catch(l),
                this.staticStagePromise.reject(t),
                this.earlyRuntimeStagePromise.promise.catch(l),
                this.earlyRuntimeStagePromise.reject(t),
                this.runtimeStagePromise.promise.catch(l),
                this.runtimeStagePromise.reject(t),
                this.dynamicStagePromise.promise.catch(l),
                this.dynamicStagePromise.reject(t);
            },
            { once: !0 },
          ),
        t &&
          t.signal.addEventListener(
            "abort",
            () => {
              this.abandonRender();
            },
            { once: !0 },
          );
    }
    onStage(e, t) {
      if (this.currentStage >= e) t();
      else if (3 === e) this.staticStageListeners.push(t);
      else if (4 === e) this.earlyRuntimeStageListeners.push(t);
      else if (5 === e) this.runtimeStageListeners.push(t);
      else if (6 === e) this.dynamicStageListeners.push(t);
      else
        throw Object.defineProperty(
          new o.InvariantError(`Invalid render stage: ${e}`),
          "__NEXT_ERROR_CODE",
          { value: "E881", enumerable: !1, configurable: !0 },
        );
    }
    shouldTrackSyncInterrupt() {
      if (!this.shouldTrackSyncIO) return !1;
      switch (this.currentStage) {
        case 1:
        case 5:
        case 6:
        case 7:
        default:
          return !1;
        case 2:
        case 3:
        case 4:
          return !0;
      }
    }
    syncInterruptCurrentStageWithReason(e) {
      if (1 !== this.currentStage && 7 !== this.currentStage) {
        if (this.abandonController) return void this.abandonController.abort();
        if (this.abortSignal) {
          (this.syncInterruptReason = e), (this.currentStage = 7);
          return;
        }
        switch (this.currentStage) {
          case 2:
          case 3:
          case 4:
            (this.syncInterruptReason = e), this.advanceStage(6);
            return;
          case 5:
            return;
        }
      }
    }
    getSyncInterruptReason() {
      return this.syncInterruptReason;
    }
    getStaticStageEndTime() {
      return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
      return this.runtimeStageEndTime;
    }
    abandonRender() {
      let { currentStage: e } = this;
      switch (e) {
        case 2:
          this.resolveStaticStage();
        case 3:
          this.resolveEarlyRuntimeStage();
        case 4:
          this.resolveRuntimeStage();
        case 5:
          this.currentStage = 7;
          return;
      }
    }
    advanceStage(e) {
      if (e <= this.currentStage) return;
      let t = this.currentStage;
      if (
        ((this.currentStage = e),
        t < 3 && e >= 3 && this.resolveStaticStage(),
        t < 4 && e >= 4 && this.resolveEarlyRuntimeStage(),
        t < 5 &&
          e >= 5 &&
          ((this.staticStageEndTime = performance.now() + performance.timeOrigin),
          this.resolveRuntimeStage()),
        t < 6 && e >= 6)
      ) {
        (this.runtimeStageEndTime = performance.now() + performance.timeOrigin),
          this.resolveDynamicStage();
        return;
      }
    }
    resolveStaticStage() {
      let e = this.staticStageListeners;
      for (let t = 0; t < e.length; t++) e[t]();
      (e.length = 0), this.staticStagePromise.resolve();
    }
    resolveEarlyRuntimeStage() {
      let e = this.earlyRuntimeStageListeners;
      for (let t = 0; t < e.length; t++) e[t]();
      (e.length = 0), this.earlyRuntimeStagePromise.resolve();
    }
    resolveRuntimeStage() {
      let e = this.runtimeStageListeners;
      for (let t = 0; t < e.length; t++) e[t]();
      (e.length = 0), this.runtimeStagePromise.resolve();
    }
    resolveDynamicStage() {
      let e = this.dynamicStageListeners;
      for (let t = 0; t < e.length; t++) e[t]();
      (e.length = 0), this.dynamicStagePromise.resolve();
    }
    getStagePromise(e) {
      switch (e) {
        case 3:
          return this.staticStagePromise.promise;
        case 4:
          return this.earlyRuntimeStagePromise.promise;
        case 5:
          return this.runtimeStagePromise.promise;
        case 6:
          return this.dynamicStagePromise.promise;
        default:
          throw Object.defineProperty(
            new o.InvariantError(`Invalid render stage: ${e}`),
            "__NEXT_ERROR_CODE",
            { value: "E881", enumerable: !1, configurable: !0 },
          );
      }
    }
    waitForStage(e) {
      return this.getStagePromise(e);
    }
    delayUntilStage(e, t, r) {
      var n, a, i;
      let o,
        s =
          ((n = this.getStagePromise(e)),
          (a = t),
          (i = r),
          (o = new Promise((e, t) => {
            n.then(e.bind(null, i), t);
          })),
          void 0 !== a && (o.displayName = a),
          o);
      return this.abortSignal && s.catch(l), s;
    }
  }
  function l() {}
};
