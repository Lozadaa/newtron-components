import { g as Tr } from "./_commonjsHelpers-d4512b9c.js";
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }, U.apply(this, arguments);
}
function se(e, r) {
  if (e == null)
    return {};
  var n = {}, t = Object.keys(e), o, i;
  for (i = 0; i < t.length; i++)
    o = t[i], !(r.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Le = { exports: {} }, he = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function $r() {
  if (Je)
    return A;
  Je = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function D(p) {
    if (typeof p == "object" && p !== null) {
      var H = p.$$typeof;
      switch (H) {
        case r:
          switch (p = p.type, p) {
            case m:
            case f:
            case t:
            case i:
            case o:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case g:
                case v:
                case b:
                case a:
                  return p;
                default:
                  return H;
              }
          }
        case n:
          return H;
      }
    }
  }
  function B(p) {
    return D(p) === f;
  }
  return A.AsyncMode = m, A.ConcurrentMode = f, A.ContextConsumer = u, A.ContextProvider = a, A.Element = r, A.ForwardRef = g, A.Fragment = t, A.Lazy = v, A.Memo = b, A.Portal = n, A.Profiler = i, A.StrictMode = o, A.Suspense = h, A.isAsyncMode = function(p) {
    return B(p) || D(p) === m;
  }, A.isConcurrentMode = B, A.isContextConsumer = function(p) {
    return D(p) === u;
  }, A.isContextProvider = function(p) {
    return D(p) === a;
  }, A.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, A.isForwardRef = function(p) {
    return D(p) === g;
  }, A.isFragment = function(p) {
    return D(p) === t;
  }, A.isLazy = function(p) {
    return D(p) === v;
  }, A.isMemo = function(p) {
    return D(p) === b;
  }, A.isPortal = function(p) {
    return D(p) === n;
  }, A.isProfiler = function(p) {
    return D(p) === i;
  }, A.isStrictMode = function(p) {
    return D(p) === o;
  }, A.isSuspense = function(p) {
    return D(p) === h;
  }, A.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === f || p === i || p === o || p === h || p === c || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === b || p.$$typeof === a || p.$$typeof === u || p.$$typeof === g || p.$$typeof === O || p.$$typeof === k || p.$$typeof === z || p.$$typeof === l);
  }, A.typeOf = D, A;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Sr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function D(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === t || d === f || d === i || d === o || d === h || d === c || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === b || d.$$typeof === a || d.$$typeof === u || d.$$typeof === g || d.$$typeof === O || d.$$typeof === k || d.$$typeof === z || d.$$typeof === l);
    }
    function B(d) {
      if (typeof d == "object" && d !== null) {
        var Y = d.$$typeof;
        switch (Y) {
          case r:
            var ge = d.type;
            switch (ge) {
              case m:
              case f:
              case t:
              case i:
              case o:
              case h:
                return ge;
              default:
                var He = ge && ge.$$typeof;
                switch (He) {
                  case u:
                  case g:
                  case v:
                  case b:
                  case a:
                    return He;
                  default:
                    return Y;
                }
            }
          case n:
            return Y;
        }
      }
    }
    var p = m, H = f, Ce = u, Ae = a, Pe = r, Re = g, me = t, Ie = v, ke = b, Z = n, je = i, L = o, J = h, ye = !1;
    function Me(d) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(d) || B(d) === m;
    }
    function s(d) {
      return B(d) === f;
    }
    function y(d) {
      return B(d) === u;
    }
    function S(d) {
      return B(d) === a;
    }
    function T(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function x(d) {
      return B(d) === g;
    }
    function w(d) {
      return B(d) === t;
    }
    function E(d) {
      return B(d) === v;
    }
    function $(d) {
      return B(d) === b;
    }
    function _(d) {
      return B(d) === n;
    }
    function I(d) {
      return B(d) === i;
    }
    function C(d) {
      return B(d) === o;
    }
    function W(d) {
      return B(d) === h;
    }
    P.AsyncMode = p, P.ConcurrentMode = H, P.ContextConsumer = Ce, P.ContextProvider = Ae, P.Element = Pe, P.ForwardRef = Re, P.Fragment = me, P.Lazy = Ie, P.Memo = ke, P.Portal = Z, P.Profiler = je, P.StrictMode = L, P.Suspense = J, P.isAsyncMode = Me, P.isConcurrentMode = s, P.isContextConsumer = y, P.isContextProvider = S, P.isElement = T, P.isForwardRef = x, P.isFragment = w, P.isLazy = E, P.isMemo = $, P.isPortal = _, P.isProfiler = I, P.isStrictMode = C, P.isSuspense = W, P.isValidElementType = D, P.typeOf = B;
  }()), P;
}
var Ze;
function yr() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? he.exports = $r() : he.exports = Sr()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ne, Qe;
function wr() {
  if (Qe)
    return Ne;
  Qe = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var m = Object.getOwnPropertyNames(a).map(function(g) {
        return a[g];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        f[g] = g;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ne = o() ? Object.assign : function(i, a) {
    for (var u, m = t(i), f, g = 1; g < arguments.length; g++) {
      u = Object(arguments[g]);
      for (var h in u)
        r.call(u, h) && (m[h] = u[h]);
      if (e) {
        f = e(u);
        for (var c = 0; c < f.length; c++)
          n.call(u, f[c]) && (m[f[c]] = u[f[c]]);
      }
    }
    return m;
  }, Ne;
}
var De, er;
function Ye() {
  if (er)
    return De;
  er = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = e, De;
}
var Be, rr;
function gr() {
  return rr || (rr = 1, Be = Function.call.bind(Object.prototype.hasOwnProperty)), Be;
}
var Ue, tr;
function _r() {
  if (tr)
    return Ue;
  tr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Ye(), n = {}, t = gr();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, u, m, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (t(i, g)) {
          var h;
          try {
            if (typeof i[g] != "function") {
              var c = Error(
                (m || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw c.name = "Invariant Violation", c;
            }
            h = i[g](a, g, m, u, null, r);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + u + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + u + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ue = o, Ue;
}
var We, nr;
function Cr() {
  if (nr)
    return We;
  nr = 1;
  var e = yr(), r = wr(), n = Ye(), t = gr(), o = _r(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var m = "Warning: " + u;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return We = function(u, m) {
    var f = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function h(s) {
      var y = s && (f && s[f] || s[g]);
      if (typeof y == "function")
        return y;
    }
    var c = "<<anonymous>>", b = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: z(),
      arrayOf: D,
      element: B(),
      elementType: p(),
      instanceOf: H,
      node: Re(),
      objectOf: Ae,
      oneOf: Ce,
      oneOfType: Pe,
      shape: Ie,
      exact: ke
    };
    function v(s, y) {
      return s === y ? s !== 0 || 1 / s === 1 / y : s !== s && y !== y;
    }
    function l(s, y) {
      this.message = s, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function O(s) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, S = 0;
      function T(w, E, $, _, I, C, W) {
        if (_ = _ || c, C = C || $, W !== n) {
          if (m) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = _ + ":" + $;
            !y[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[Y] = !0, S++);
          }
        }
        return E[$] == null ? w ? E[$] === null ? new l("The " + I + " `" + C + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new l("The " + I + " `" + C + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : s(E, $, _, I, C);
      }
      var x = T.bind(null, !1);
      return x.isRequired = T.bind(null, !0), x;
    }
    function k(s) {
      function y(S, T, x, w, E, $) {
        var _ = S[T], I = L(_);
        if (I !== s) {
          var C = J(_);
          return new l(
            "Invalid " + w + " `" + E + "` of type " + ("`" + C + "` supplied to `" + x + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return O(y);
    }
    function z() {
      return O(a);
    }
    function D(s) {
      function y(S, T, x, w, E) {
        if (typeof s != "function")
          return new l("Property `" + E + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var $ = S[T];
        if (!Array.isArray($)) {
          var _ = L($);
          return new l("Invalid " + w + " `" + E + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected an array."));
        }
        for (var I = 0; I < $.length; I++) {
          var C = s($, I, x, w, E + "[" + I + "]", n);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return O(y);
    }
    function B() {
      function s(y, S, T, x, w) {
        var E = y[S];
        if (!u(E)) {
          var $ = L(E);
          return new l("Invalid " + x + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(s);
    }
    function p() {
      function s(y, S, T, x, w) {
        var E = y[S];
        if (!e.isValidElementType(E)) {
          var $ = L(E);
          return new l("Invalid " + x + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(s);
    }
    function H(s) {
      function y(S, T, x, w, E) {
        if (!(S[T] instanceof s)) {
          var $ = s.name || c, _ = Me(S[T]);
          return new l("Invalid " + w + " `" + E + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return O(y);
    }
    function Ce(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function y(S, T, x, w, E) {
        for (var $ = S[T], _ = 0; _ < s.length; _++)
          if (v($, s[_]))
            return null;
        var I = JSON.stringify(s, function(W, d) {
          var Y = J(d);
          return Y === "symbol" ? String(d) : d;
        });
        return new l("Invalid " + w + " `" + E + "` of value `" + String($) + "` " + ("supplied to `" + x + "`, expected one of " + I + "."));
      }
      return O(y);
    }
    function Ae(s) {
      function y(S, T, x, w, E) {
        if (typeof s != "function")
          return new l("Property `" + E + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var $ = S[T], _ = L($);
        if (_ !== "object")
          return new l("Invalid " + w + " `" + E + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected an object."));
        for (var I in $)
          if (t($, I)) {
            var C = s($, I, x, w, E + "." + I, n);
            if (C instanceof Error)
              return C;
          }
        return null;
      }
      return O(y);
    }
    function Pe(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var y = 0; y < s.length; y++) {
        var S = s[y];
        if (typeof S != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(S) + " at index " + y + "."
          ), a;
      }
      function T(x, w, E, $, _) {
        for (var I = [], C = 0; C < s.length; C++) {
          var W = s[C], d = W(x, w, E, $, _, n);
          if (d == null)
            return null;
          d.data && t(d.data, "expectedType") && I.push(d.data.expectedType);
        }
        var Y = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new l("Invalid " + $ + " `" + _ + "` supplied to " + ("`" + E + "`" + Y + "."));
      }
      return O(T);
    }
    function Re() {
      function s(y, S, T, x, w) {
        return Z(y[S]) ? null : new l("Invalid " + x + " `" + w + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return O(s);
    }
    function me(s, y, S, T, x) {
      return new l(
        (s || "React class") + ": " + y + " type `" + S + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function Ie(s) {
      function y(S, T, x, w, E) {
        var $ = S[T], _ = L($);
        if (_ !== "object")
          return new l("Invalid " + w + " `" + E + "` of type `" + _ + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var I in s) {
          var C = s[I];
          if (typeof C != "function")
            return me(x, w, E, I, J(C));
          var W = C($, I, x, w, E + "." + I, n);
          if (W)
            return W;
        }
        return null;
      }
      return O(y);
    }
    function ke(s) {
      function y(S, T, x, w, E) {
        var $ = S[T], _ = L($);
        if (_ !== "object")
          return new l("Invalid " + w + " `" + E + "` of type `" + _ + "` " + ("supplied to `" + x + "`, expected `object`."));
        var I = r({}, S[T], s);
        for (var C in I) {
          var W = s[C];
          if (t(s, C) && typeof W != "function")
            return me(x, w, E, C, J(W));
          if (!W)
            return new l(
              "Invalid " + w + " `" + E + "` key `" + C + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(S[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var d = W($, C, x, w, E + "." + C, n);
          if (d)
            return d;
        }
        return null;
      }
      return O(y);
    }
    function Z(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(Z);
          if (s === null || u(s))
            return !0;
          var y = h(s);
          if (y) {
            var S = y.call(s), T;
            if (y !== s.entries) {
              for (; !(T = S.next()).done; )
                if (!Z(T.value))
                  return !1;
            } else
              for (; !(T = S.next()).done; ) {
                var x = T.value;
                if (x && !Z(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function je(s, y) {
      return s === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function L(s) {
      var y = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : je(y, s) ? "symbol" : y;
    }
    function J(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var y = L(s);
      if (y === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function ye(s) {
      var y = J(s);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function Me(s) {
      return !s.constructor || !s.constructor.name ? c : s.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, We;
}
var Ke, or;
function Ar() {
  if (or)
    return Ke;
  or = 1;
  var e = Ye();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, Ke = function() {
    function t(a, u, m, f, g, h) {
      if (h !== e) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    t.isRequired = t;
    function o() {
      return t;
    }
    var i = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: o,
      element: t,
      elementType: t,
      instanceOf: o,
      node: t,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ke;
}
if (process.env.NODE_ENV !== "production") {
  var Pr = yr(), Rr = !0;
  Le.exports = Cr()(Pr.isElement, Rr);
} else
  Le.exports = Ar()();
var Ir = Le.exports;
const ce = /* @__PURE__ */ Tr(Ir);
function oe(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function hr(e) {
  if (!oe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((n) => {
    r[n] = hr(e[n]);
  }), r;
}
function F(e, r, n = {
  clone: !0
}) {
  const t = n.clone ? U({}, e) : e;
  return oe(e) && oe(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (oe(r[o]) && o in e && oe(e[o]) ? t[o] = F(e[o], r[o], n) : n.clone ? t[o] = oe(r[o]) ? hr(r[o]) : r[o] : t[o] = r[o]);
  }), t;
}
function ae(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    r += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
function br(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ae(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ir = (e) => e, kr = () => {
  let e = ir;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ir;
    }
  };
}, jr = kr(), Mr = jr, Nr = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Dr(e, r, n = "Mui") {
  const t = Nr[r];
  return t ? `${n}-${t}` : `${Mr.generate(e)}-${r}`;
}
const Br = ["values", "unit", "step"], Ur = (e) => {
  const r = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return r.sort((n, t) => n.val - t.val), r.reduce((n, t) => U({}, n, {
    [t.key]: t.val
  }), {});
};
function Wr(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: t = 5
  } = e, o = se(e, Br), i = Ur(r), a = Object.keys(i);
  function u(c) {
    return `@media (min-width:${typeof r[c] == "number" ? r[c] : c}${n})`;
  }
  function m(c) {
    return `@media (max-width:${(typeof r[c] == "number" ? r[c] : c) - t / 100}${n})`;
  }
  function f(c, b) {
    const v = a.indexOf(b);
    return `@media (min-width:${typeof r[c] == "number" ? r[c] : c}${n}) and (max-width:${(v !== -1 && typeof r[a[v]] == "number" ? r[a[v]] : b) - t / 100}${n})`;
  }
  function g(c) {
    return a.indexOf(c) + 1 < a.length ? f(c, a[a.indexOf(c) + 1]) : u(c);
  }
  function h(c) {
    const b = a.indexOf(c);
    return b === 0 ? u(a[1]) : b === a.length - 1 ? m(a[b]) : f(c, a[a.indexOf(c) + 1]).replace("@media", "@media not all and");
  }
  return U({
    keys: a,
    values: i,
    up: u,
    down: m,
    between: f,
    only: g,
    not: h,
    unit: n
  }, o);
}
const Kr = {
  borderRadius: 4
}, zr = Kr, Lr = process.env.NODE_ENV !== "production" ? ce.oneOfType([ce.number, ce.string, ce.object, ce.array]) : {}, V = Lr;
function fe(e, r) {
  return r ? F(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qe = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ar = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qe[e]}px)`
};
function G(e, r, n) {
  const t = e.theme || {};
  if (Array.isArray(r)) {
    const i = t.breakpoints || ar;
    return r.reduce((a, u, m) => (a[i.up(i.keys[m])] = n(r[m]), a), {});
  }
  if (typeof r == "object") {
    const i = t.breakpoints || ar;
    return Object.keys(r).reduce((a, u) => {
      if (Object.keys(i.values || qe).indexOf(u) !== -1) {
        const m = i.up(u);
        a[m] = n(r[u], u);
      } else {
        const m = u;
        a[m] = r[m];
      }
      return a;
    }, {});
  }
  return n(r);
}
function Yr(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((t, o) => {
    const i = e.up(o);
    return t[i] = {}, t;
  }, {})) || {};
}
function qr(e, r) {
  return e.reduce((n, t) => {
    const o = n[t];
    return (!o || Object.keys(o).length === 0) && delete n[t], n;
  }, r);
}
function ve(e, r, n = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && n) {
    const t = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (t != null)
      return t;
  }
  return r.split(".").reduce((t, o) => t && t[o] != null ? t[o] : null, e);
}
function be(e, r, n, t = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || t : o = ve(e, n) || t, r && (o = r(o, t, e)), o;
}
function R(e) {
  const {
    prop: r,
    cssProperty: n = e.prop,
    themeKey: t,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const u = a[r], m = a.theme, f = ve(m, t) || {};
    return G(a, u, (h) => {
      let c = be(f, o, h);
      return h === c && typeof h == "string" && (c = be(f, o, `${r}${h === "default" ? "" : br(h)}`, h)), n === !1 ? c : {
        [n]: c
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: V
  } : {}, i.filterProps = [r], i;
}
function Fr(e) {
  const r = {};
  return (n) => (r[n] === void 0 && (r[n] = e(n)), r[n]);
}
const Gr = {
  m: "margin",
  p: "padding"
}, Vr = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, sr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hr = Fr((e) => {
  if (e.length > 2)
    if (sr[e])
      e = sr[e];
    else
      return [e];
  const [r, n] = e.split(""), t = Gr[r], o = Vr[n] || "";
  return Array.isArray(o) ? o.map((i) => t + i) : [t + o];
}), xe = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ee = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jr = [...xe, ...Ee];
function de(e, r, n, t) {
  var o;
  const i = (o = ve(e, r, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${t} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function vr(e) {
  return de(e, "spacing", 8, "spacing");
}
function pe(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const n = Math.abs(r), t = e(n);
  return r >= 0 ? t : typeof t == "number" ? -t : `-${t}`;
}
function Xr(e, r) {
  return (n) => e.reduce((t, o) => (t[o] = pe(r, n), t), {});
}
function Zr(e, r, n, t) {
  if (r.indexOf(n) === -1)
    return null;
  const o = Hr(n), i = Xr(o, t), a = e[n];
  return G(e, a, i);
}
function xr(e, r) {
  const n = vr(e.theme);
  return Object.keys(e).map((t) => Zr(e, r, t, n)).reduce(fe, {});
}
function M(e) {
  return xr(e, xe);
}
M.propTypes = process.env.NODE_ENV !== "production" ? xe.reduce((e, r) => (e[r] = V, e), {}) : {};
M.filterProps = xe;
function N(e) {
  return xr(e, Ee);
}
N.propTypes = process.env.NODE_ENV !== "production" ? Ee.reduce((e, r) => (e[r] = V, e), {}) : {};
N.filterProps = Ee;
process.env.NODE_ENV !== "production" && Jr.reduce((e, r) => (e[r] = V, e), {});
function Qr(e = 8) {
  if (e.mui)
    return e;
  const r = vr({
    spacing: e
  }), n = (...t) => (process.env.NODE_ENV !== "production" && (t.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${t.length}`)), (t.length === 0 ? [1] : t).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Oe(...e) {
  const r = e.reduce((t, o) => (o.filterProps.forEach((i) => {
    t[i] = o;
  }), t), {}), n = (t) => Object.keys(t).reduce((o, i) => r[i] ? fe(o, r[i](t)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((t, o) => Object.assign(t, o.propTypes), {}) : {}, n.filterProps = e.reduce((t, o) => t.concat(o.filterProps), []), n;
}
function q(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const et = R({
  prop: "border",
  themeKey: "borders",
  transform: q
}), rt = R({
  prop: "borderTop",
  themeKey: "borders",
  transform: q
}), tt = R({
  prop: "borderRight",
  themeKey: "borders",
  transform: q
}), nt = R({
  prop: "borderBottom",
  themeKey: "borders",
  transform: q
}), ot = R({
  prop: "borderLeft",
  themeKey: "borders",
  transform: q
}), it = R({
  prop: "borderColor",
  themeKey: "palette"
}), at = R({
  prop: "borderTopColor",
  themeKey: "palette"
}), st = R({
  prop: "borderRightColor",
  themeKey: "palette"
}), ct = R({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ut = R({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Te = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = de(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (t) => ({
      borderRadius: pe(r, t)
    });
    return G(e, e.borderRadius, n);
  }
  return null;
};
Te.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: V
} : {};
Te.filterProps = ["borderRadius"];
Oe(et, rt, tt, nt, ot, it, at, st, ct, ut, Te);
const $e = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = de(e.theme, "spacing", 8, "gap"), n = (t) => ({
      gap: pe(r, t)
    });
    return G(e, e.gap, n);
  }
  return null;
};
$e.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: V
} : {};
$e.filterProps = ["gap"];
const Se = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = de(e.theme, "spacing", 8, "columnGap"), n = (t) => ({
      columnGap: pe(r, t)
    });
    return G(e, e.columnGap, n);
  }
  return null;
};
Se.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: V
} : {};
Se.filterProps = ["columnGap"];
const we = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = de(e.theme, "spacing", 8, "rowGap"), n = (t) => ({
      rowGap: pe(r, t)
    });
    return G(e, e.rowGap, n);
  }
  return null;
};
we.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: V
} : {};
we.filterProps = ["rowGap"];
const ft = R({
  prop: "gridColumn"
}), lt = R({
  prop: "gridRow"
}), dt = R({
  prop: "gridAutoFlow"
}), pt = R({
  prop: "gridAutoColumns"
}), mt = R({
  prop: "gridAutoRows"
}), yt = R({
  prop: "gridTemplateColumns"
}), gt = R({
  prop: "gridTemplateRows"
}), ht = R({
  prop: "gridTemplateAreas"
}), bt = R({
  prop: "gridArea"
});
Oe($e, Se, we, ft, lt, dt, pt, mt, yt, gt, ht, bt);
function ie(e, r) {
  return r === "grey" ? r : e;
}
const vt = R({
  prop: "color",
  themeKey: "palette",
  transform: ie
}), xt = R({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ie
}), Et = R({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ie
});
Oe(vt, xt, Et);
function K(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ot = R({
  prop: "width",
  transform: K
}), Fe = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (n) => {
      var t, o;
      const i = ((t = e.theme) == null || (t = t.breakpoints) == null || (t = t.values) == null ? void 0 : t[n]) || qe[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: K(n)
      };
    };
    return G(e, e.maxWidth, r);
  }
  return null;
};
Fe.filterProps = ["maxWidth"];
const Tt = R({
  prop: "minWidth",
  transform: K
}), $t = R({
  prop: "height",
  transform: K
}), St = R({
  prop: "maxHeight",
  transform: K
}), wt = R({
  prop: "minHeight",
  transform: K
});
R({
  prop: "size",
  cssProperty: "width",
  transform: K
});
R({
  prop: "size",
  cssProperty: "height",
  transform: K
});
const _t = R({
  prop: "boxSizing"
});
Oe(Ot, Fe, Tt, $t, St, wt, _t);
const Ct = {
  // borders
  border: {
    themeKey: "borders",
    transform: q
  },
  borderTop: {
    themeKey: "borders",
    transform: q
  },
  borderRight: {
    themeKey: "borders",
    transform: q
  },
  borderBottom: {
    themeKey: "borders",
    transform: q
  },
  borderLeft: {
    themeKey: "borders",
    transform: q
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Te
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ie
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ie
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ie
  },
  // spacing
  p: {
    style: N
  },
  pt: {
    style: N
  },
  pr: {
    style: N
  },
  pb: {
    style: N
  },
  pl: {
    style: N
  },
  px: {
    style: N
  },
  py: {
    style: N
  },
  padding: {
    style: N
  },
  paddingTop: {
    style: N
  },
  paddingRight: {
    style: N
  },
  paddingBottom: {
    style: N
  },
  paddingLeft: {
    style: N
  },
  paddingX: {
    style: N
  },
  paddingY: {
    style: N
  },
  paddingInline: {
    style: N
  },
  paddingInlineStart: {
    style: N
  },
  paddingInlineEnd: {
    style: N
  },
  paddingBlock: {
    style: N
  },
  paddingBlockStart: {
    style: N
  },
  paddingBlockEnd: {
    style: N
  },
  m: {
    style: M
  },
  mt: {
    style: M
  },
  mr: {
    style: M
  },
  mb: {
    style: M
  },
  ml: {
    style: M
  },
  mx: {
    style: M
  },
  my: {
    style: M
  },
  margin: {
    style: M
  },
  marginTop: {
    style: M
  },
  marginRight: {
    style: M
  },
  marginBottom: {
    style: M
  },
  marginLeft: {
    style: M
  },
  marginX: {
    style: M
  },
  marginY: {
    style: M
  },
  marginInline: {
    style: M
  },
  marginInlineStart: {
    style: M
  },
  marginInlineEnd: {
    style: M
  },
  marginBlock: {
    style: M
  },
  marginBlockStart: {
    style: M
  },
  marginBlockEnd: {
    style: M
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: $e
  },
  rowGap: {
    style: we
  },
  columnGap: {
    style: Se
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: K
  },
  maxWidth: {
    style: Fe
  },
  minWidth: {
    transform: K
  },
  height: {
    transform: K
  },
  maxHeight: {
    transform: K
  },
  minHeight: {
    transform: K
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ge = Ct;
function At(...e) {
  const r = e.reduce((t, o) => t.concat(Object.keys(o)), []), n = new Set(r);
  return e.every((t) => n.size === Object.keys(t).length);
}
function Pt(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Rt() {
  function e(n, t, o, i) {
    const a = {
      [n]: t,
      theme: o
    }, u = i[n];
    if (!u)
      return {
        [n]: t
      };
    const {
      cssProperty: m = n,
      themeKey: f,
      transform: g,
      style: h
    } = u;
    if (t == null)
      return null;
    if (f === "typography" && t === "inherit")
      return {
        [n]: t
      };
    const c = ve(o, f) || {};
    return h ? h(a) : G(a, t, (v) => {
      let l = be(c, g, v);
      return v === l && typeof v == "string" && (l = be(c, g, `${n}${v === "default" ? "" : br(v)}`, v)), m === !1 ? l : {
        [m]: l
      };
    });
  }
  function r(n) {
    var t;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = (t = i.unstable_sxConfig) != null ? t : Ge;
    function u(m) {
      let f = m;
      if (typeof m == "function")
        f = m(i);
      else if (typeof m != "object")
        return m;
      if (!f)
        return null;
      const g = Yr(i.breakpoints), h = Object.keys(g);
      let c = g;
      return Object.keys(f).forEach((b) => {
        const v = Pt(f[b], i);
        if (v != null)
          if (typeof v == "object")
            if (a[b])
              c = fe(c, e(b, v, i, a));
            else {
              const l = G({
                theme: i
              }, v, (O) => ({
                [b]: O
              }));
              At(l, v) ? c[b] = r({
                sx: v,
                theme: i
              }) : c = fe(c, l);
            }
          else
            c = fe(c, e(b, v, i, a));
      }), qr(h, c);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return r;
}
const Er = Rt();
Er.filterProps = ["sx"];
const Or = Er, It = ["breakpoints", "palette", "spacing", "shape"];
function kt(e = {}, ...r) {
  const {
    breakpoints: n = {},
    palette: t = {},
    spacing: o,
    shape: i = {}
  } = e, a = se(e, It), u = Wr(n), m = Qr(o);
  let f = F({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: U({
      mode: "light"
    }, t),
    spacing: m,
    shape: U({}, zr, i)
  }, a);
  return f = r.reduce((g, h) => F(g, h), f), f.unstable_sxConfig = U({}, Ge, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(h) {
    return Or({
      sx: h,
      theme: this
    });
  }, f;
}
function Ve(e, r = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > n) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${n}].`), Math.min(Math.max(r, e), n);
}
function jt(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(r);
  return n && n[0].length === 1 && (n = n.map((t) => t + t)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((t, o) => o < 3 ? parseInt(t, 16) : Math.round(parseInt(t, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function X(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return X(jt(e));
  const r = e.indexOf("("), n = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ae(9, e));
  let t = e.substring(r + 1, e.length - 1), o;
  if (n === "color") {
    if (t = t.split(" "), o = t.shift(), t.length === 4 && t[3].charAt(0) === "/" && (t[3] = t[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ae(10, o));
  } else
    t = t.split(",");
  return t = t.map((i) => parseFloat(i)), {
    type: n,
    values: t,
    colorSpace: o
  };
}
function _e(e) {
  const {
    type: r,
    colorSpace: n
  } = e;
  let {
    values: t
  } = e;
  return r.indexOf("rgb") !== -1 ? t = t.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (t[1] = `${t[1]}%`, t[2] = `${t[2]}%`), r.indexOf("color") !== -1 ? t = `${n} ${t.join(" ")}` : t = `${t.join(", ")}`, `${r}(${t})`;
}
function Mt(e) {
  e = X(e);
  const {
    values: r
  } = e, n = r[0], t = r[1] / 100, o = r[2] / 100, i = t * Math.min(o, 1 - o), a = (f, g = (f + n / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let u = "rgb";
  const m = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (u += "a", m.push(r[3])), _e({
    type: u,
    values: m
  });
}
function cr(e) {
  e = X(e);
  let r = e.type === "hsl" || e.type === "hsla" ? X(Mt(e)).values : e.values;
  return r = r.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ur(e, r) {
  const n = cr(e), t = cr(r);
  return (Math.max(n, t) + 0.05) / (Math.min(n, t) + 0.05);
}
function xn(e, r) {
  return e = X(e), r = Ve(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, _e(e);
}
function Nt(e, r) {
  if (e = X(e), r = Ve(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - r;
  return _e(e);
}
function Dt(e, r) {
  if (e = X(e), r = Ve(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * r;
  return _e(e);
}
function Bt(e, r) {
  return U({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Ut = {
  black: "#000",
  white: "#fff"
}, le = Ut, Wt = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Kt = Wt, zt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Q = zt, Lt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ee = Lt, Yt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ue = Yt, qt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, re = qt, Ft = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, te = Ft, Gt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ne = Gt, Vt = ["mode", "contrastThreshold", "tonalOffset"], fr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: le.white,
    default: le.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ze = {
  text: {
    primary: le.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: le.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function lr(e, r, n, t) {
  const o = t.light || t, i = t.dark || t * 1.5;
  e[r] || (e.hasOwnProperty(n) ? e[r] = e[n] : r === "light" ? e.light = Dt(e.main, o) : r === "dark" && (e.dark = Nt(e.main, i)));
}
function Ht(e = "light") {
  return e === "dark" ? {
    main: re[200],
    light: re[50],
    dark: re[400]
  } : {
    main: re[700],
    light: re[400],
    dark: re[800]
  };
}
function Jt(e = "light") {
  return e === "dark" ? {
    main: Q[200],
    light: Q[50],
    dark: Q[400]
  } : {
    main: Q[500],
    light: Q[300],
    dark: Q[700]
  };
}
function Xt(e = "light") {
  return e === "dark" ? {
    main: ee[500],
    light: ee[300],
    dark: ee[700]
  } : {
    main: ee[700],
    light: ee[400],
    dark: ee[800]
  };
}
function Zt(e = "light") {
  return e === "dark" ? {
    main: te[400],
    light: te[300],
    dark: te[700]
  } : {
    main: te[700],
    light: te[500],
    dark: te[900]
  };
}
function Qt(e = "light") {
  return e === "dark" ? {
    main: ne[400],
    light: ne[300],
    dark: ne[700]
  } : {
    main: ne[800],
    light: ne[500],
    dark: ne[900]
  };
}
function en(e = "light") {
  return e === "dark" ? {
    main: ue[400],
    light: ue[300],
    dark: ue[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ue[500],
    dark: ue[900]
  };
}
function rn(e) {
  const {
    mode: r = "light",
    contrastThreshold: n = 3,
    tonalOffset: t = 0.2
  } = e, o = se(e, Vt), i = e.primary || Ht(r), a = e.secondary || Jt(r), u = e.error || Xt(r), m = e.info || Zt(r), f = e.success || Qt(r), g = e.warning || en(r);
  function h(l) {
    const O = ur(l, ze.text.primary) >= n ? ze.text.primary : fr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const k = ur(l, O);
      k < 3 && console.error([`MUI: The contrast ratio of ${k}:1 for ${O} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const c = ({
    color: l,
    name: O,
    mainShade: k = 500,
    lightShade: z = 300,
    darkShade: D = 700
  }) => {
    if (l = U({}, l), !l.main && l[k] && (l.main = l[k]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.` : ae(11, O ? ` (${O})` : "", k));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ae(12, O ? ` (${O})` : "", JSON.stringify(l.main)));
    return lr(l, "light", z, t), lr(l, "dark", D, t), l.contrastText || (l.contrastText = h(l.main)), l;
  }, b = {
    dark: ze,
    light: fr
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), F(U({
    // A collection of common colors.
    common: U({}, le),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: c({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: c({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: c({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: c({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: c({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: c({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Kt,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: c,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: t
  }, b[r]), o);
}
const tn = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function nn(e) {
  return Math.round(e * 1e5) / 1e5;
}
const dr = {
  textTransform: "uppercase"
}, pr = '"Roboto", "Helvetica", "Arial", sans-serif';
function on(e, r) {
  const n = typeof r == "function" ? r(e) : r, {
    fontFamily: t = pr,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: h
  } = n, c = se(n, tn);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = h || ((k) => `${k / f * b}rem`), l = (k, z, D, B, p) => U({
    fontFamily: t,
    fontWeight: k,
    fontSize: v(z),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: D
  }, t === pr ? {
    letterSpacing: `${nn(B / z)}em`
  } : {}, p, g), O = {
    h1: l(i, 96, 1.167, -1.5),
    h2: l(i, 60, 1.2, -0.5),
    h3: l(a, 48, 1.167, 0),
    h4: l(a, 34, 1.235, 0.25),
    h5: l(a, 24, 1.334, 0),
    h6: l(u, 20, 1.6, 0.15),
    subtitle1: l(a, 16, 1.75, 0.15),
    subtitle2: l(u, 14, 1.57, 0.1),
    body1: l(a, 16, 1.5, 0.15),
    body2: l(a, 14, 1.43, 0.15),
    button: l(u, 14, 1.75, 0.4, dr),
    caption: l(a, 12, 1.66, 0.4),
    overline: l(a, 12, 2.66, 1, dr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return F(U({
    htmlFontSize: f,
    pxToRem: v,
    fontFamily: t,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: u,
    fontWeightBold: m
  }, O), c, {
    clone: !1
    // No need to clone deep
  });
}
const an = 0.2, sn = 0.14, cn = 0.12;
function j(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${an})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${sn})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cn})`].join(",");
}
const un = ["none", j(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), j(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), j(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), j(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), j(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), j(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), j(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), j(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), j(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), j(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), j(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), j(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), j(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), j(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), j(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), j(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), j(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), j(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), j(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), j(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), j(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), j(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), j(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), j(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], fn = un, ln = ["duration", "easing", "delay"], dn = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, pn = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function mr(e) {
  return `${Math.round(e)}ms`;
}
function mn(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function yn(e) {
  const r = U({}, dn, e.easing), n = U({}, pn, e.duration);
  return U({
    getAutoHeightDuration: mn,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: u = r.easeInOut,
        delay: m = 0
      } = i, f = se(i, ln);
      if (process.env.NODE_ENV !== "production") {
        const g = (c) => typeof c == "string", h = (c) => !isNaN(parseFloat(c));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(u) || console.error('MUI: Argument "easing" must be a string.'), !h(m) && !g(m) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : mr(a)} ${u} ${typeof m == "string" ? m : mr(m)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: n
  });
}
const gn = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, hn = gn, bn = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function En(e = {}, ...r) {
  const {
    mixins: n = {},
    palette: t = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = se(e, bn);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ae(18));
  const u = rn(t), m = kt(e);
  let f = F(m, {
    mixins: Bt(m.breakpoints, n),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: fn.slice(),
    typography: on(u, i),
    transitions: yn(o),
    zIndex: U({}, hn)
  });
  if (f = F(f, a), f = r.reduce((g, h) => F(g, h), f), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (c, b) => {
      let v;
      for (v in c) {
        const l = c[v];
        if (g.indexOf(v) !== -1 && Object.keys(l).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = Dr("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: l
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[v] = {};
        }
      }
    };
    Object.keys(f.components).forEach((c) => {
      const b = f.components[c].styleOverrides;
      b && c.indexOf("Mui") === 0 && h(b, c);
    });
  }
  return f.unstable_sxConfig = U({}, Ge, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(h) {
    return Or({
      sx: h,
      theme: this
    });
  }, f;
}
export {
  ce as P,
  U as _,
  se as a,
  xn as b,
  br as c,
  F as d,
  kt as e,
  ae as f,
  Dr as g,
  En as h,
  oe as i,
  yr as r,
  Or as s
};
