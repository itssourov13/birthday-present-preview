/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = {
    describeHasCheckingStringProperty: function () {
      return s;
    },
    describeStringPropertyAccess: function () {
      return i;
    },
    wellKnownProperties: function () {
      return l;
    },
  };
  for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
  let o = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
  function i(e, t) {
    return o.test(t) ? `\`${e}.${t}\`` : `\`${e}[${JSON.stringify(t)}]\``;
  }
  function s(e, t) {
    let r = JSON.stringify(t);
    return `\`Reflect.has(${e}, ${r})\`, \`${r} in ${e}\`, or similar`;
  }
  let l = new Set([
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toString",
    "valueOf",
    "toLocaleString",
    "then",
    "catch",
    "finally",
    "status",
    "displayName",
    "_debugInfo",
    "toJSON",
    "$$typeof",
    "__esModule",
    "@@iterator",
  ]);
};
