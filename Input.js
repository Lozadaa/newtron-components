import { r as W, j as Re, R as iy } from "./jsx-runtime-7c16e54c.js";
import { a as mN, C as yN } from "./index.esm-91686179.js";
import { P as c, _ as q, a as $t, g as pr, c as Dr, f as zx, d as dE, b as ix } from "./createTheme-e8cea0f8.js";
import { c as hy, G as gN, u as Ux, a as zn, b as ti, d as Cf, s as ox, e as lx, f as Ax, T as Fx, g as vr, h as Tt, i as kr, j as Px, r as ou, k as hr, l as Cs, _ as SN, m as jx, n as EN, o as Hx } from "./TransitionGroupContext-be555fdc.js";
import { g as bN } from "./_commonjsHelpers-d4512b9c.js";
function CN(p) {
  const {
    prototype: h = {}
  } = p;
  return !!h.isReactComponent;
}
function $x(p, h, y, C, x) {
  const R = p[h], S = x || h;
  if (R == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let L;
  const _ = R.type;
  return typeof _ == "function" && !CN(_) && (L = "Did you accidentally use a plain function component for an element instead?"), L !== void 0 ? new Error(`Invalid ${C} \`${S}\` supplied to \`${y}\`. Expected an element that can hold a ref. ${L} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vx = hy(c.element, $x);
Vx.isRequired = hy(c.element.isRequired, $x);
const my = Vx, TN = "exact-prop: ​";
function Ix(p) {
  return process.env.NODE_ENV === "production" ? p : q({}, p, {
    [TN]: (h) => {
      const y = Object.keys(h).filter((C) => !p.hasOwnProperty(C));
      return y.length > 0 ? new Error(`The following props are not supported: ${y.map((C) => `\`${C}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Jp(p, h, y, C, x) {
  if (process.env.NODE_ENV === "production")
    return null;
  const R = p[h], S = x || h;
  return R == null ? null : R && R.nodeType !== 1 ? new Error(`Invalid ${C} \`${S}\` supplied to \`${y}\`. Expected an HTMLElement.`) : null;
}
function ux(...p) {
  return p.reduce((h, y) => y == null ? h : function(...x) {
    h.apply(this, x), y.apply(this, x);
  }, () => {
  });
}
function Bx(p, h = 166) {
  let y;
  function C(...x) {
    const R = () => {
      p.apply(this, x);
    };
    clearTimeout(y), y = setTimeout(R, h);
  }
  return C.clear = () => {
    clearTimeout(y);
  }, C;
}
function tE(p, h) {
  var y, C;
  return /* @__PURE__ */ W.isValidElement(p) && h.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (y = p.type.muiName) != null ? y : (C = p.type) == null || (C = C._payload) == null || (C = C.value) == null ? void 0 : C.muiName
  ) !== -1;
}
function Pa(p) {
  return p && p.ownerDocument || document;
}
function bs(p) {
  return Pa(p).defaultView || window;
}
function sx({
  controlled: p,
  default: h,
  name: y,
  state: C = "value"
}) {
  const {
    current: x
  } = W.useRef(p !== void 0), [R, S] = W.useState(h), L = x ? p : R;
  if (process.env.NODE_ENV !== "production") {
    W.useEffect(() => {
      x !== (p !== void 0) && console.error([`MUI: A component is changing the ${x ? "" : "un"}controlled ${C} state of ${y} to be ${x ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${y} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [C, y, p]);
    const {
      current: M
    } = W.useRef(h);
    W.useEffect(() => {
      !x && M !== h && console.error([`MUI: A component is changing the default ${C} state of an uncontrolled ${y} after being initialized. To suppress this warning opt to use a controlled ${y}.`].join(`
`));
    }, [JSON.stringify(h)]);
  }
  const _ = W.useCallback((M) => {
    x || S(M);
  }, []);
  return [L, _];
}
function Wx(p) {
  const h = p.documentElement.clientWidth;
  return Math.abs(window.innerWidth - h);
}
function xN(p) {
  const h = typeof p;
  switch (h) {
    case "number":
      return Number.isNaN(p) ? "NaN" : Number.isFinite(p) ? p !== Math.floor(p) ? "float" : "number" : "Infinity";
    case "object":
      return p === null ? "null" : p.constructor.name;
    default:
      return h;
  }
}
function RN(p) {
  return typeof p == "number" && isFinite(p) && Math.floor(p) === p;
}
const wN = Number.isInteger || RN;
function Yx(p, h, y, C) {
  const x = p[h];
  if (x == null || !wN(x)) {
    const R = xN(x);
    return new RangeError(`Invalid ${C} \`${h}\` of type \`${R}\` supplied to \`${y}\`, expected \`integer\`.`);
  }
  return null;
}
function qx(p, h, ...y) {
  return p[h] === void 0 ? null : Yx(p, h, ...y);
}
function lE() {
  return null;
}
qx.isRequired = Yx;
lE.isRequired = lE;
const Qx = process.env.NODE_ENV === "production" ? lE : qx;
function ON(p) {
  return p == null || Object.keys(p).length === 0;
}
function Gx(p) {
  const {
    styles: h,
    defaultTheme: y = {}
  } = p, C = typeof h == "function" ? (x) => h(ON(x) ? y : x) : h;
  return /* @__PURE__ */ Re.jsx(gN, {
    styles: C
  });
}
process.env.NODE_ENV !== "production" && (Gx.propTypes = {
  defaultTheme: c.object,
  styles: c.oneOfType([c.array, c.string, c.object, c.func])
});
function Kx({
  styles: p,
  themeId: h,
  defaultTheme: y = {}
}) {
  const C = Ux(y), x = typeof p == "function" ? p(h && C[h] || C) : p;
  return /* @__PURE__ */ Re.jsx(Gx, {
    styles: x
  });
}
process.env.NODE_ENV !== "production" && (Kx.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  defaultTheme: c.object,
  /**
   * @ignore
   */
  styles: c.oneOfType([c.array, c.func, c.number, c.object, c.string, c.bool]),
  /**
   * @ignore
   */
  themeId: c.string
});
function cy(p) {
  return typeof p == "string";
}
function DN(p, h, y) {
  return p === void 0 || cy(p) ? h : q({}, h, {
    ownerState: q({}, h.ownerState, y)
  });
}
function Xx(p, h = []) {
  if (p === void 0)
    return {};
  const y = {};
  return Object.keys(p).filter((C) => C.match(/^on[A-Z]/) && typeof p[C] == "function" && !h.includes(C)).forEach((C) => {
    y[C] = p[C];
  }), y;
}
function kN(p, h, y) {
  return typeof p == "function" ? p(h, y) : p;
}
function cx(p) {
  if (p === void 0)
    return {};
  const h = {};
  return Object.keys(p).filter((y) => !(y.match(/^on[A-Z]/) && typeof p[y] == "function")).forEach((y) => {
    h[y] = p[y];
  }), h;
}
function NN(p) {
  const {
    getSlotProps: h,
    additionalProps: y,
    externalSlotProps: C,
    externalForwardedProps: x,
    className: R
  } = p;
  if (!h) {
    const B = zn(x == null ? void 0 : x.className, C == null ? void 0 : C.className, R, y == null ? void 0 : y.className), J = q({}, y == null ? void 0 : y.style, x == null ? void 0 : x.style, C == null ? void 0 : C.style), ie = q({}, y, x, C);
    return B.length > 0 && (ie.className = B), Object.keys(J).length > 0 && (ie.style = J), {
      props: ie,
      internalRef: void 0
    };
  }
  const S = Xx(q({}, x, C)), L = cx(C), _ = cx(x), M = h(S), K = zn(M == null ? void 0 : M.className, y == null ? void 0 : y.className, R, x == null ? void 0 : x.className, C == null ? void 0 : C.className), F = q({}, M == null ? void 0 : M.style, y == null ? void 0 : y.style, x == null ? void 0 : x.style, C == null ? void 0 : C.style), I = q({}, M, y, _, L);
  return K.length > 0 && (I.className = K), Object.keys(F).length > 0 && (I.style = F), {
    props: I,
    internalRef: M.ref
  };
}
const MN = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Tf(p) {
  var h;
  const {
    elementType: y,
    externalSlotProps: C,
    ownerState: x,
    skipResolvingSlotProps: R = !1
  } = p, S = $t(p, MN), L = R ? {} : kN(C, x), {
    props: _,
    internalRef: M
  } = NN(q({}, S, {
    externalSlotProps: L
  })), K = ti(M, L == null ? void 0 : L.ref, (h = p.additionalProps) == null ? void 0 : h.ref);
  return DN(y, q({}, _, {
    ref: K
  }), x);
}
const _N = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function LN(p) {
  const h = parseInt(p.getAttribute("tabindex") || "", 10);
  return Number.isNaN(h) ? p.contentEditable === "true" || (p.nodeName === "AUDIO" || p.nodeName === "VIDEO" || p.nodeName === "DETAILS") && p.getAttribute("tabindex") === null ? 0 : p.tabIndex : h;
}
function zN(p) {
  if (p.tagName !== "INPUT" || p.type !== "radio" || !p.name)
    return !1;
  const h = (C) => p.ownerDocument.querySelector(`input[type="radio"]${C}`);
  let y = h(`[name="${p.name}"]:checked`);
  return y || (y = h(`[name="${p.name}"]`)), y !== p;
}
function UN(p) {
  return !(p.disabled || p.tagName === "INPUT" && p.type === "hidden" || zN(p));
}
function AN(p) {
  const h = [], y = [];
  return Array.from(p.querySelectorAll(_N)).forEach((C, x) => {
    const R = LN(C);
    R === -1 || !UN(C) || (R === 0 ? h.push(C) : y.push({
      documentOrder: x,
      tabIndex: R,
      node: C
    }));
  }), y.sort((C, x) => C.tabIndex === x.tabIndex ? C.documentOrder - x.documentOrder : C.tabIndex - x.tabIndex).map((C) => C.node).concat(h);
}
function FN() {
  return !0;
}
function fy(p) {
  const {
    children: h,
    disableAutoFocus: y = !1,
    disableEnforceFocus: C = !1,
    disableRestoreFocus: x = !1,
    getTabbable: R = AN,
    isEnabled: S = FN,
    open: L
  } = p, _ = W.useRef(!1), M = W.useRef(null), K = W.useRef(null), F = W.useRef(null), I = W.useRef(null), B = W.useRef(!1), J = W.useRef(null), ie = ti(h.ref, J), $ = W.useRef(null);
  W.useEffect(() => {
    !L || !J.current || (B.current = !y);
  }, [y, L]), W.useEffect(() => {
    if (!L || !J.current)
      return;
    const Y = Pa(J.current);
    return J.current.contains(Y.activeElement) || (J.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), J.current.setAttribute("tabIndex", "-1")), B.current && J.current.focus()), () => {
      x || (F.current && F.current.focus && (_.current = !0, F.current.focus()), F.current = null);
    };
  }, [L]), W.useEffect(() => {
    if (!L || !J.current)
      return;
    const Y = Pa(J.current), Q = (re) => {
      $.current = re, !(C || !S() || re.key !== "Tab") && Y.activeElement === J.current && re.shiftKey && (_.current = !0, K.current && K.current.focus());
    }, te = () => {
      const re = J.current;
      if (re === null)
        return;
      if (!Y.hasFocus() || !S() || _.current) {
        _.current = !1;
        return;
      }
      if (re.contains(Y.activeElement) || C && Y.activeElement !== M.current && Y.activeElement !== K.current)
        return;
      if (Y.activeElement !== I.current)
        I.current = null;
      else if (I.current !== null)
        return;
      if (!B.current)
        return;
      let De = [];
      if ((Y.activeElement === M.current || Y.activeElement === K.current) && (De = R(J.current)), De.length > 0) {
        var $e, Ae;
        const Me = !!(($e = $.current) != null && $e.shiftKey && ((Ae = $.current) == null ? void 0 : Ae.key) === "Tab"), Ve = De[0], de = De[De.length - 1];
        typeof Ve != "string" && typeof de != "string" && (Me ? de.focus() : Ve.focus());
      } else
        re.focus();
    };
    Y.addEventListener("focusin", te), Y.addEventListener("keydown", Q, !0);
    const ce = setInterval(() => {
      Y.activeElement && Y.activeElement.tagName === "BODY" && te();
    }, 50);
    return () => {
      clearInterval(ce), Y.removeEventListener("focusin", te), Y.removeEventListener("keydown", Q, !0);
    };
  }, [y, C, x, S, L, R]);
  const he = (Y) => {
    F.current === null && (F.current = Y.relatedTarget), B.current = !0, I.current = Y.target;
    const Q = h.props.onFocus;
    Q && Q(Y);
  }, ye = (Y) => {
    F.current === null && (F.current = Y.relatedTarget), B.current = !0;
  };
  return /* @__PURE__ */ Re.jsxs(W.Fragment, {
    children: [/* @__PURE__ */ Re.jsx("div", {
      tabIndex: L ? 0 : -1,
      onFocus: ye,
      ref: M,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ W.cloneElement(h, {
      ref: ie,
      onFocus: he
    }), /* @__PURE__ */ Re.jsx("div", {
      tabIndex: L ? 0 : -1,
      onFocus: ye,
      ref: K,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (fy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: my,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: c.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: c.func,
  /**
   * If `true`, focus is locked.
   */
  open: c.bool.isRequired
});
process.env.NODE_ENV !== "production" && (fy["propTypes"] = Ix(fy.propTypes));
var uE = { exports: {} }, Ta = {}, oy = { exports: {} }, nE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function PN() {
  return fx || (fx = 1, function(p) {
    function h(G, pe) {
      var fe = G.length;
      G.push(pe);
      e:
        for (; 0 < fe; ) {
          var it = fe - 1 >>> 1, Ze = G[it];
          if (0 < x(Ze, pe))
            G[it] = pe, G[fe] = Ze, fe = it;
          else
            break e;
        }
    }
    function y(G) {
      return G.length === 0 ? null : G[0];
    }
    function C(G) {
      if (G.length === 0)
        return null;
      var pe = G[0], fe = G.pop();
      if (fe !== pe) {
        G[0] = fe;
        e:
          for (var it = 0, Ze = G.length, ht = Ze >>> 1; it < ht; ) {
            var lt = 2 * (it + 1) - 1, kt = G[lt], vt = lt + 1, rn = G[vt];
            if (0 > x(kt, fe))
              vt < Ze && 0 > x(rn, kt) ? (G[it] = rn, G[vt] = fe, it = vt) : (G[it] = kt, G[lt] = fe, it = lt);
            else if (vt < Ze && 0 > x(rn, fe))
              G[it] = rn, G[vt] = fe, it = vt;
            else
              break e;
          }
      }
      return pe;
    }
    function x(G, pe) {
      var fe = G.sortIndex - pe.sortIndex;
      return fe !== 0 ? fe : G.id - pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      p.unstable_now = function() {
        return R.now();
      };
    } else {
      var S = Date, L = S.now();
      p.unstable_now = function() {
        return S.now() - L;
      };
    }
    var _ = [], M = [], K = 1, F = null, I = 3, B = !1, J = !1, ie = !1, $ = typeof setTimeout == "function" ? setTimeout : null, he = typeof clearTimeout == "function" ? clearTimeout : null, ye = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Y(G) {
      for (var pe = y(M); pe !== null; ) {
        if (pe.callback === null)
          C(M);
        else if (pe.startTime <= G)
          C(M), pe.sortIndex = pe.expirationTime, h(_, pe);
        else
          break;
        pe = y(M);
      }
    }
    function Q(G) {
      if (ie = !1, Y(G), !J)
        if (y(_) !== null)
          J = !0, Ce(te);
        else {
          var pe = y(M);
          pe !== null && Fe(Q, pe.startTime - G);
        }
    }
    function te(G, pe) {
      J = !1, ie && (ie = !1, he(De), De = -1), B = !0;
      var fe = I;
      try {
        for (Y(pe), F = y(_); F !== null && (!(F.expirationTime > pe) || G && !Me()); ) {
          var it = F.callback;
          if (typeof it == "function") {
            F.callback = null, I = F.priorityLevel;
            var Ze = it(F.expirationTime <= pe);
            pe = p.unstable_now(), typeof Ze == "function" ? F.callback = Ze : F === y(_) && C(_), Y(pe);
          } else
            C(_);
          F = y(_);
        }
        if (F !== null)
          var ht = !0;
        else {
          var lt = y(M);
          lt !== null && Fe(Q, lt.startTime - pe), ht = !1;
        }
        return ht;
      } finally {
        F = null, I = fe, B = !1;
      }
    }
    var ce = !1, re = null, De = -1, $e = 5, Ae = -1;
    function Me() {
      return !(p.unstable_now() - Ae < $e);
    }
    function Ve() {
      if (re !== null) {
        var G = p.unstable_now();
        Ae = G;
        var pe = !0;
        try {
          pe = re(!0, G);
        } finally {
          pe ? de() : (ce = !1, re = null);
        }
      } else
        ce = !1;
    }
    var de;
    if (typeof ye == "function")
      de = function() {
        ye(Ve);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), Te = me.port2;
      me.port1.onmessage = Ve, de = function() {
        Te.postMessage(null);
      };
    } else
      de = function() {
        $(Ve, 0);
      };
    function Ce(G) {
      re = G, ce || (ce = !0, de());
    }
    function Fe(G, pe) {
      De = $(function() {
        G(p.unstable_now());
      }, pe);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, p.unstable_continueExecution = function() {
      J || B || (J = !0, Ce(te));
    }, p.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < G ? Math.floor(1e3 / G) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, p.unstable_getFirstCallbackNode = function() {
      return y(_);
    }, p.unstable_next = function(G) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var pe = 3;
          break;
        default:
          pe = I;
      }
      var fe = I;
      I = pe;
      try {
        return G();
      } finally {
        I = fe;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(G, pe) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var fe = I;
      I = G;
      try {
        return pe();
      } finally {
        I = fe;
      }
    }, p.unstable_scheduleCallback = function(G, pe, fe) {
      var it = p.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? it + fe : it) : fe = it, G) {
        case 1:
          var Ze = -1;
          break;
        case 2:
          Ze = 250;
          break;
        case 5:
          Ze = 1073741823;
          break;
        case 4:
          Ze = 1e4;
          break;
        default:
          Ze = 5e3;
      }
      return Ze = fe + Ze, G = { id: K++, callback: pe, priorityLevel: G, startTime: fe, expirationTime: Ze, sortIndex: -1 }, fe > it ? (G.sortIndex = fe, h(M, G), y(_) === null && G === y(M) && (ie ? (he(De), De = -1) : ie = !0, Fe(Q, fe - it))) : (G.sortIndex = Ze, h(_, G), J || B || (J = !0, Ce(te))), G;
    }, p.unstable_shouldYield = Me, p.unstable_wrapCallback = function(G) {
      var pe = I;
      return function() {
        var fe = I;
        I = pe;
        try {
          return G.apply(this, arguments);
        } finally {
          I = fe;
        }
      };
    };
  }(nE)), nE;
}
var rE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dx;
function jN() {
  return dx || (dx = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, y = !1, C = 5;
      function x(be, Ie) {
        var dt = be.length;
        be.push(Ie), L(be, Ie, dt);
      }
      function R(be) {
        return be.length === 0 ? null : be[0];
      }
      function S(be) {
        if (be.length === 0)
          return null;
        var Ie = be[0], dt = be.pop();
        return dt !== Ie && (be[0] = dt, _(be, dt, 0)), Ie;
      }
      function L(be, Ie, dt) {
        for (var ge = dt; ge > 0; ) {
          var Ye = ge - 1 >>> 1, Ct = be[Ye];
          if (M(Ct, Ie) > 0)
            be[Ye] = Ie, be[ge] = Ct, ge = Ye;
          else
            return;
        }
      }
      function _(be, Ie, dt) {
        for (var ge = dt, Ye = be.length, Ct = Ye >>> 1; ge < Ct; ) {
          var qt = (ge + 1) * 2 - 1, mr = be[qt], sn = qt + 1, ja = be[sn];
          if (M(mr, Ie) < 0)
            sn < Ye && M(ja, mr) < 0 ? (be[ge] = ja, be[sn] = Ie, ge = sn) : (be[ge] = mr, be[qt] = Ie, ge = qt);
          else if (sn < Ye && M(ja, Ie) < 0)
            be[ge] = ja, be[sn] = Ie, ge = sn;
          else
            return;
        }
      }
      function M(be, Ie) {
        var dt = be.sortIndex - Ie.sortIndex;
        return dt !== 0 ? dt : be.id - Ie.id;
      }
      var K = 1, F = 2, I = 3, B = 4, J = 5;
      function ie(be, Ie) {
      }
      var $ = typeof performance == "object" && typeof performance.now == "function";
      if ($) {
        var he = performance;
        p.unstable_now = function() {
          return he.now();
        };
      } else {
        var ye = Date, Y = ye.now();
        p.unstable_now = function() {
          return ye.now() - Y;
        };
      }
      var Q = 1073741823, te = -1, ce = 250, re = 5e3, De = 1e4, $e = Q, Ae = [], Me = [], Ve = 1, de = null, me = I, Te = !1, Ce = !1, Fe = !1, G = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function it(be) {
        for (var Ie = R(Me); Ie !== null; ) {
          if (Ie.callback === null)
            S(Me);
          else if (Ie.startTime <= be)
            S(Me), Ie.sortIndex = Ie.expirationTime, x(Ae, Ie);
          else
            return;
          Ie = R(Me);
        }
      }
      function Ze(be) {
        if (Fe = !1, it(be), !Ce)
          if (R(Ae) !== null)
            Ce = !0, Nr(ht);
          else {
            var Ie = R(Me);
            Ie !== null && En(Ze, Ie.startTime - be);
          }
      }
      function ht(be, Ie) {
        Ce = !1, Fe && (Fe = !1, ft()), Te = !0;
        var dt = me;
        try {
          var ge;
          if (!y)
            return lt(be, Ie);
        } finally {
          de = null, me = dt, Te = !1;
        }
      }
      function lt(be, Ie) {
        var dt = Ie;
        for (it(dt), de = R(Ae); de !== null && !h && !(de.expirationTime > dt && (!be || nr())); ) {
          var ge = de.callback;
          if (typeof ge == "function") {
            de.callback = null, me = de.priorityLevel;
            var Ye = de.expirationTime <= dt, Ct = ge(Ye);
            dt = p.unstable_now(), typeof Ct == "function" ? de.callback = Ct : de === R(Ae) && S(Ae), it(dt);
          } else
            S(Ae);
          de = R(Ae);
        }
        if (de !== null)
          return !0;
        var qt = R(Me);
        return qt !== null && En(Ze, qt.startTime - dt), !1;
      }
      function kt(be, Ie) {
        switch (be) {
          case K:
          case F:
          case I:
          case B:
          case J:
            break;
          default:
            be = I;
        }
        var dt = me;
        me = be;
        try {
          return Ie();
        } finally {
          me = dt;
        }
      }
      function vt(be) {
        var Ie;
        switch (me) {
          case K:
          case F:
          case I:
            Ie = I;
            break;
          default:
            Ie = me;
            break;
        }
        var dt = me;
        me = Ie;
        try {
          return be();
        } finally {
          me = dt;
        }
      }
      function rn(be) {
        var Ie = me;
        return function() {
          var dt = me;
          me = Ie;
          try {
            return be.apply(this, arguments);
          } finally {
            me = dt;
          }
        };
      }
      function Vt(be, Ie, dt) {
        var ge = p.unstable_now(), Ye;
        if (typeof dt == "object" && dt !== null) {
          var Ct = dt.delay;
          typeof Ct == "number" && Ct > 0 ? Ye = ge + Ct : Ye = ge;
        } else
          Ye = ge;
        var qt;
        switch (be) {
          case K:
            qt = te;
            break;
          case F:
            qt = ce;
            break;
          case J:
            qt = $e;
            break;
          case B:
            qt = De;
            break;
          case I:
          default:
            qt = re;
            break;
        }
        var mr = Ye + qt, sn = {
          id: Ve++,
          callback: Ie,
          priorityLevel: be,
          startTime: Ye,
          expirationTime: mr,
          sortIndex: -1
        };
        return Ye > ge ? (sn.sortIndex = Ye, x(Me, sn), R(Ae) === null && sn === R(Me) && (Fe ? ft() : Fe = !0, En(Ze, Ye - ge))) : (sn.sortIndex = mr, x(Ae, sn), !Ce && !Te && (Ce = !0, Nr(ht))), sn;
      }
      function Jt() {
      }
      function gn() {
        !Ce && !Te && (Ce = !0, Nr(ht));
      }
      function nt() {
        return R(Ae);
      }
      function xt(be) {
        be.callback = null;
      }
      function Qe() {
        return me;
      }
      var le = !1, ct = null, Lt = -1, It = C, Sn = -1;
      function nr() {
        var be = p.unstable_now() - Sn;
        return !(be < It);
      }
      function rr() {
      }
      function zt(be) {
        if (be < 0 || be > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        be > 0 ? It = Math.floor(1e3 / be) : It = C;
      }
      var Un = function() {
        if (ct !== null) {
          var be = p.unstable_now();
          Sn = be;
          var Ie = !0, dt = !0;
          try {
            dt = ct(Ie, be);
          } finally {
            dt ? en() : (le = !1, ct = null);
          }
        } else
          le = !1;
      }, en;
      if (typeof fe == "function")
        en = function() {
          fe(Un);
        };
      else if (typeof MessageChannel < "u") {
        var Ut = new MessageChannel(), Bn = Ut.port2;
        Ut.port1.onmessage = Un, en = function() {
          Bn.postMessage(null);
        };
      } else
        en = function() {
          G(Un, 0);
        };
      function Nr(be) {
        ct = be, le || (le = !0, en());
      }
      function En(be, Ie) {
        Lt = G(function() {
          be(p.unstable_now());
        }, Ie);
      }
      function ft() {
        pe(Lt), Lt = -1;
      }
      var Ra = rr, ar = null;
      p.unstable_IdlePriority = J, p.unstable_ImmediatePriority = K, p.unstable_LowPriority = B, p.unstable_NormalPriority = I, p.unstable_Profiling = ar, p.unstable_UserBlockingPriority = F, p.unstable_cancelCallback = xt, p.unstable_continueExecution = gn, p.unstable_forceFrameRate = zt, p.unstable_getCurrentPriorityLevel = Qe, p.unstable_getFirstCallbackNode = nt, p.unstable_next = vt, p.unstable_pauseExecution = Jt, p.unstable_requestPaint = Ra, p.unstable_runWithPriority = kt, p.unstable_scheduleCallback = Vt, p.unstable_shouldYield = nr, p.unstable_wrapCallback = rn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rE)), rE;
}
var px;
function Zx() {
  return px || (px = 1, process.env.NODE_ENV === "production" ? oy.exports = PN() : oy.exports = jN()), oy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vx;
function HN() {
  if (vx)
    return Ta;
  vx = 1;
  var p = W, h = Zx();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), x = {};
  function R(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, F = {};
  function I(n) {
    return _.call(F, n) ? !0 : _.call(K, n) ? !1 : M.test(n) ? F[n] = !0 : (K[n] = !0, !1);
  }
  function B(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function J(n, r, o, u) {
    if (r === null || typeof r > "u" || B(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ie(n, r, o, u, f, v, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = E;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    $[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    $[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    $[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    $[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    $[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    $[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    $[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    $[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    $[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var he = /[\-:]([a-z])/g;
  function ye(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      he,
      ye
    );
    $[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(he, ye);
    $[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(he, ye);
    $[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    $[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    $[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Y(n, r, o, u) {
    var f = $.hasOwnProperty(r) ? $[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (J(r, o, f, u) && (o = null), u || f === null ? I(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Q = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), ce = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), Ae = Symbol.for("react.provider"), Me = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function pe(n) {
    return n === null || typeof n != "object" ? null : (n = G && n[G] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, it;
  function Ze(n) {
    if (it === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        it = r && r[1] || "";
      }
    return `
` + it + n;
  }
  var ht = !1;
  function lt(n, r) {
    if (!n || ht)
      return "";
    ht = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (V) {
            var u = V;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (V) {
            u = V;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          u = V;
        }
        n();
      }
    } catch (V) {
      if (V && u && typeof V.stack == "string") {
        for (var f = V.stack.split(`
`), v = u.stack.split(`
`), E = f.length - 1, w = v.length - 1; 1 <= E && 0 <= w && f[E] !== v[w]; )
          w--;
        for (; 1 <= E && 0 <= w; E--, w--)
          if (f[E] !== v[w]) {
            if (E !== 1 || w !== 1)
              do
                if (E--, w--, 0 > w || f[E] !== v[w]) {
                  var O = `
` + f[E].replace(" at new ", " at ");
                  return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
                }
              while (1 <= E && 0 <= w);
            break;
          }
      }
    } finally {
      ht = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Ze(n) : "";
  }
  function kt(n) {
    switch (n.tag) {
      case 5:
        return Ze(n.type);
      case 16:
        return Ze("Lazy");
      case 13:
        return Ze("Suspense");
      case 19:
        return Ze("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = lt(n.type, !1), n;
      case 11:
        return n = lt(n.type.render, !1), n;
      case 1:
        return n = lt(n.type, !0), n;
      default:
        return "";
    }
  }
  function vt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case re:
        return "Fragment";
      case ce:
        return "Portal";
      case $e:
        return "Profiler";
      case De:
        return "StrictMode";
      case de:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Me:
          return (n.displayName || "Context") + ".Consumer";
        case Ae:
          return (n._context.displayName || "Context") + ".Provider";
        case Ve:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Te:
          return r = n.displayName || null, r !== null ? r : vt(n.type) || "Memo";
        case Ce:
          r = n._payload, n = n._init;
          try {
            return vt(n(r));
          } catch {
          }
      }
    return null;
  }
  function rn(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return vt(r);
      case 8:
        return r === De ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Vt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Jt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function gn(n) {
    var r = Jt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, v = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(E) {
        u = "" + E, v.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function nt(n) {
    n._valueTracker || (n._valueTracker = gn(n));
  }
  function xt(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = Jt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Qe(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function le(n, r) {
    var o = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function ct(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Vt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Lt(n, r) {
    r = r.checked, r != null && Y(n, "checked", r, !1);
  }
  function It(n, r) {
    Lt(n, r);
    var o = Vt(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? nr(n, r.type, o) : r.hasOwnProperty("defaultValue") && nr(n, r.type, Vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Sn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function nr(n, r, o) {
    (r !== "number" || Qe(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var rr = Array.isArray;
  function zt(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < o.length; f++)
        r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Vt(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Un(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function en(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(y(92));
        if (rr(o)) {
          if (1 < o.length)
            throw Error(y(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Vt(o) };
  }
  function Ut(n, r) {
    var o = Vt(r.value), u = Vt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Bn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Nr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function En(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Nr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ft, Ra = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (ft = ft || document.createElement("div"), ft.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ft.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ar(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var be = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ie = ["Webkit", "ms", "Moz", "O"];
  Object.keys(be).forEach(function(n) {
    Ie.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), be[r] = be[n];
    });
  });
  function dt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || be.hasOwnProperty(n) && be[n] ? ("" + r).trim() : r + "px";
  }
  function ge(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, f = dt(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
      }
  }
  var Ye = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ct(n, r) {
    if (r) {
      if (Ye[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(y(62));
    }
  }
  function qt(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function sn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ja = null, bn = null, cn = null;
  function ev(n) {
    if (n = Mu(n)) {
      if (typeof ja != "function")
        throw Error(y(280));
      var r = n.stateNode;
      r && (r = We(r), ja(n.stateNode, n.type, r));
    }
  }
  function Ts(n) {
    bn ? cn ? cn.push(n) : cn = [n] : bn = n;
  }
  function xs() {
    if (bn) {
      var n = bn, r = cn;
      if (cn = bn = null, ev(n), r)
        for (n = 0; n < r.length; n++)
          ev(r[n]);
    }
  }
  function tv(n, r) {
    return n(r);
  }
  function nv() {
  }
  var Rs = !1;
  function Of(n, r, o) {
    if (Rs)
      return n(r, o);
    Rs = !0;
    try {
      return tv(n, r, o);
    } finally {
      Rs = !1, (bn !== null || cn !== null) && (nv(), xs());
    }
  }
  function lu(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = We(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(y(231, r, typeof o));
    return o;
  }
  var ws = !1;
  if (L)
    try {
      var fo = {};
      Object.defineProperty(fo, "passive", { get: function() {
        ws = !0;
      } }), window.addEventListener("test", fo, fo), window.removeEventListener("test", fo, fo);
    } catch {
      ws = !1;
    }
  function rl(n, r, o, u, f, v, E, w, O) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, V);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var wa = !1, ni = null, al = !1, uu = null, Df = { onError: function(n) {
    wa = !0, ni = n;
  } };
  function kf(n, r, o, u, f, v, E, w, O) {
    wa = !1, ni = null, rl.apply(Df, arguments);
  }
  function il(n, r, o, u, f, v, E, w, O) {
    if (kf.apply(this, arguments), wa) {
      if (wa) {
        var V = ni;
        wa = !1, ni = null;
      } else
        throw Error(y(198));
      al || (al = !0, uu = V);
    }
  }
  function Ha(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function su(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ol(n) {
    if (Ha(n) !== n)
      throw Error(y(188));
  }
  function yr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ha(n), r === null)
        throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var v = f.alternate;
      if (v === null) {
        if (u = f.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === v.child) {
        for (v = f.child; v; ) {
          if (v === o)
            return ol(f), n;
          if (v === u)
            return ol(f), r;
          v = v.sibling;
        }
        throw Error(y(188));
      }
      if (o.return !== u.return)
        o = f, u = v;
      else {
        for (var E = !1, w = f.child; w; ) {
          if (w === o) {
            E = !0, o = f, u = v;
            break;
          }
          if (w === u) {
            E = !0, u = f, o = v;
            break;
          }
          w = w.sibling;
        }
        if (!E) {
          for (w = v.child; w; ) {
            if (w === o) {
              E = !0, o = v, u = f;
              break;
            }
            if (w === u) {
              E = !0, u = v, o = f;
              break;
            }
            w = w.sibling;
          }
          if (!E)
            throw Error(y(189));
        }
      }
      if (o.alternate !== u)
        throw Error(y(190));
    }
    if (o.tag !== 3)
      throw Error(y(188));
    return o.stateNode.current === o ? n : r;
  }
  function rv(n) {
    return n = yr(n), n !== null ? av(n) : null;
  }
  function av(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = av(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Nf = h.unstable_scheduleCallback, iv = h.unstable_cancelCallback, Cy = h.unstable_shouldYield, Ty = h.unstable_requestPaint, fn = h.unstable_now, xy = h.unstable_getCurrentPriorityLevel, ri = h.unstable_ImmediatePriority, mt = h.unstable_UserBlockingPriority, Mi = h.unstable_NormalPriority, ov = h.unstable_LowPriority, Mf = h.unstable_IdlePriority, cu = null, Oa = null;
  function lv(n) {
    if (Oa && typeof Oa.onCommitFiberRoot == "function")
      try {
        Oa.onCommitFiberRoot(cu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ra = Math.clz32 ? Math.clz32 : Ry, uv = Math.log, sv = Math.LN2;
  function Ry(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (uv(n) / sv | 0) | 0;
  }
  var Os = 64, ll = 4194304;
  function po(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Da(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, f = n.suspendedLanes, v = n.pingedLanes, E = o & 268435455;
    if (E !== 0) {
      var w = E & ~f;
      w !== 0 ? u = po(w) : (v &= E, v !== 0 && (u = po(v)));
    } else
      E = o & ~f, E !== 0 ? u = po(E) : v !== 0 && (u = po(v));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & f) && (f = u & -u, v = r & -r, f >= v || f === 16 && (v & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - ra(r), f = 1 << o, u |= n[o], r &= ~f;
    return u;
  }
  function _f(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ds(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var E = 31 - ra(v), w = 1 << E, O = f[E];
      O === -1 ? (!(w & o) || w & u) && (f[E] = _f(w, r)) : O <= r && (n.expiredLanes |= w), v &= ~w;
    }
  }
  function Lf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ks() {
    var n = Os;
    return Os <<= 1, !(Os & 4194240) && (Os = 64), n;
  }
  function zf(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function vo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ra(r), n[r] = o;
  }
  function wy(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - ra(o), v = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~v;
    }
  }
  function fu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - ra(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var _t = 0;
  function Uf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cv, Ns, Bt, fv, Af, ot = !1, du = [], Cn = null, aa = null, ia = null, pu = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), At = [], Oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        aa = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        pu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(r.pointerId);
    }
  }
  function ir(n, r, o, u, f, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: v, targetContainers: [f] }, r !== null && (r = Mu(r), r !== null && Ns(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function _i(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Cn = ir(Cn, n, r, o, u, f), !0;
      case "dragenter":
        return aa = ir(aa, n, r, o, u, f), !0;
      case "mouseover":
        return ia = ir(ia, n, r, o, u, f), !0;
      case "pointerover":
        var v = f.pointerId;
        return pu.set(v, ir(pu.get(v) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return v = f.pointerId, On.set(v, ir(On.get(v) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function dv(n) {
    var r = la(n.target);
    if (r !== null) {
      var o = Ha(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = su(o), r !== null) {
            n.blockedOn = r, Af(n.priority, function() {
              Bt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ul(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Ls(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        mr = u, o.target.dispatchEvent(u), mr = null;
      } else
        return r = Mu(o), r !== null && Ns(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Ff(n, r, o) {
    ul(n) && o.delete(r);
  }
  function pv() {
    ot = !1, Cn !== null && ul(Cn) && (Cn = null), aa !== null && ul(aa) && (aa = null), ia !== null && ul(ia) && (ia = null), pu.forEach(Ff), On.forEach(Ff);
  }
  function vu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ot || (ot = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, pv)));
  }
  function hu(n) {
    function r(f) {
      return vu(f, n);
    }
    if (0 < du.length) {
      vu(du[0], n);
      for (var o = 1; o < du.length; o++) {
        var u = du[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Cn !== null && vu(Cn, n), aa !== null && vu(aa, n), ia !== null && vu(ia, n), pu.forEach(r), On.forEach(r), o = 0; o < At.length; o++)
      u = At[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < At.length && (o = At[0], o.blockedOn === null); )
      dv(o), o.blockedOn === null && At.shift();
  }
  var sl = Q.ReactCurrentBatchConfig, ho = !0;
  function vv(n, r, o, u) {
    var f = _t, v = sl.transition;
    sl.transition = null;
    try {
      _t = 1, _s(n, r, o, u);
    } finally {
      _t = f, sl.transition = v;
    }
  }
  function Ms(n, r, o, u) {
    var f = _t, v = sl.transition;
    sl.transition = null;
    try {
      _t = 4, _s(n, r, o, u);
    } finally {
      _t = f, sl.transition = v;
    }
  }
  function _s(n, r, o, u) {
    if (ho) {
      var f = Ls(n, r, o, u);
      if (f === null)
        Ws(n, r, u, mu, o), ka(n, u);
      else if (_i(f, n, r, o, u))
        u.stopPropagation();
      else if (ka(n, u), r & 4 && -1 < Oy.indexOf(n)) {
        for (; f !== null; ) {
          var v = Mu(f);
          if (v !== null && cv(v), v = Ls(n, r, o, u), v === null && Ws(n, r, u, mu, o), v === f)
            break;
          f = v;
        }
        f !== null && u.stopPropagation();
      } else
        Ws(n, r, u, null, o);
    }
  }
  var mu = null;
  function Ls(n, r, o, u) {
    if (mu = null, n = sn(u), n = la(n), n !== null)
      if (r = Ha(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = su(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return mu = n, null;
  }
  function Pf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (xy()) {
          case ri:
            return 1;
          case mt:
            return 4;
          case Mi:
          case ov:
            return 16;
          case Mf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, yu = null, gu = null;
  function jf() {
    if (gu)
      return gu;
    var n, r = yu, o = r.length, u, f = "value" in ai ? ai.value : ai.textContent, v = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++)
      ;
    var E = o - n;
    for (u = 1; u <= E && r[o - u] === f[v - u]; u++)
      ;
    return gu = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function cl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Su() {
    return !0;
  }
  function hv() {
    return !1;
  }
  function Wr(n) {
    function r(o, u, f, v, E) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = v, this.target = E, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (o = n[w], this[w] = o ? o(v) : v[w]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? Su : hv, this.isPropagationStopped = hv, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Su);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Su);
    }, persist: function() {
    }, isPersistent: Su }), r;
  }
  var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, zs = Wr(Li), fl = fe({}, Li, { view: 0, detail: 0 }), mv = Wr(fl), Us, Hf, Eu, An = fe({}, fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Eu && (Eu && n.type === "mousemove" ? (Us = n.screenX - Eu.screenX, Hf = n.screenY - Eu.screenY) : Hf = Us = 0, Eu = n), Us);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Hf;
  } }), As = Wr(An), yv = fe({}, An, { dataTransfer: 0 }), gv = Wr(yv), Dy = fe({}, fl, { relatedTarget: 0 }), zi = Wr(Dy), $f = fe({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sv = Wr($f), ky = fe({}, Li, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ny = Wr(ky), My = fe({}, Li, { data: 0 }), Vf = Wr(My), If = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = bv[n]) ? !!r[n] : !1;
  }
  function Bf() {
    return Cv;
  }
  var ii = fe({}, fl, { key: function(n) {
    if (n.key) {
      var r = If[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = cl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bf, charCode: function(n) {
    return n.type === "keypress" ? cl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? cl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), _y = Wr(ii), Wf = fe({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fs = Wr(Wf), Yf = fe({}, fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bf }), Ly = Wr(Yf), Ps = fe({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = Wr(Ps), Mr = fe({}, An, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oi = Wr(Mr), Tn = [9, 13, 27, 32], Na = L && "CompositionEvent" in window, mo = null;
  L && "documentMode" in document && (mo = document.documentMode);
  var js = L && "TextEvent" in window && !mo, xv = L && (!Na || mo && 8 < mo && 11 >= mo), dl = String.fromCharCode(32), Rv = !1;
  function wv(n, r) {
    switch (n) {
      case "keyup":
        return Tn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pl = !1;
  function zy(n, r) {
    switch (n) {
      case "compositionend":
        return Hs(r);
      case "keypress":
        return r.which !== 32 ? null : (Rv = !0, dl);
      case "textInput":
        return n = r.data, n === dl && Rv ? null : n;
      default:
        return null;
    }
  }
  function Uy(n, r) {
    if (pl)
      return n === "compositionend" || !Na && wv(n, r) ? (n = jf(), gu = yu = ai = null, pl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return xv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ov = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Dv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ov[n.type] : r === "textarea";
  }
  function kv(n, r, o, u) {
    Ts(u), r = Du(r, "onChange"), 0 < r.length && (o = new zs("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var bu = null, vl = null;
  function hl(n) {
    Bs(n, 0);
  }
  function ml(n) {
    var r = gl(n);
    if (xt(r))
      return n;
  }
  function Nv(n, r) {
    if (n === "change")
      return r;
  }
  var qf = !1;
  if (L) {
    var Qf;
    if (L) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var Mv = document.createElement("div");
        Mv.setAttribute("oninput", "return;"), Gf = typeof Mv.oninput == "function";
      }
      Qf = Gf;
    } else
      Qf = !1;
    qf = Qf && (!document.documentMode || 9 < document.documentMode);
  }
  function _v() {
    bu && (bu.detachEvent("onpropertychange", Lv), vl = bu = null);
  }
  function Lv(n) {
    if (n.propertyName === "value" && ml(vl)) {
      var r = [];
      kv(r, vl, n, sn(n)), Of(hl, r);
    }
  }
  function Ay(n, r, o) {
    n === "focusin" ? (_v(), bu = r, vl = o, bu.attachEvent("onpropertychange", Lv)) : n === "focusout" && _v();
  }
  function Fy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ml(vl);
  }
  function Py(n, r) {
    if (n === "click")
      return ml(r);
  }
  function zv(n, r) {
    if (n === "input" || n === "change")
      return ml(r);
  }
  function jy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var oa = typeof Object.is == "function" ? Object.is : jy;
  function Cu(n, r) {
    if (oa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!_.call(r, f) || !oa(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Av(n, r) {
    var o = Uv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Uv(o);
    }
  }
  function Fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function $s() {
    for (var n = window, r = Qe(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Qe(n.document);
    }
    return r;
  }
  function li(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Vs(n) {
    var r = $s(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Fv(o.ownerDocument.documentElement, o)) {
      if (u !== null && li(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = o.textContent.length, v = Math.min(u.start, f);
          u = u.end === void 0 ? v : Math.min(u.end, f), !n.extend && v > u && (f = u, u = v, v = f), f = Av(o, v);
          var E = Av(
            o,
            u
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), v > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Pv = L && "documentMode" in document && 11 >= document.documentMode, Ma = null, Kf = null, Tu = null, Xf = !1;
  function jv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Xf || Ma == null || Ma !== Qe(u) || (u = Ma, "selectionStart" in u && li(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Tu && Cu(Tu, u) || (Tu = u, u = Du(Kf, "onSelect"), 0 < u.length && (r = new zs("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Ma)));
  }
  function Is(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yo = { animationend: Is("Animation", "AnimationEnd"), animationiteration: Is("Animation", "AnimationIteration"), animationstart: Is("Animation", "AnimationStart"), transitionend: Is("Transition", "TransitionEnd") }, Zf = {}, Jf = {};
  L && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete yo.animationend.animation, delete yo.animationiteration.animation, delete yo.animationstart.animation), "TransitionEvent" in window || delete yo.transitionend.transition);
  function Fn(n) {
    if (Zf[n])
      return Zf[n];
    if (!yo[n])
      return n;
    var r = yo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Jf)
        return Zf[n] = r[o];
    return n;
  }
  var ed = Fn("animationend"), Hv = Fn("animationiteration"), $v = Fn("animationstart"), Vv = Fn("transitionend"), Iv = /* @__PURE__ */ new Map(), Bv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ui(n, r) {
    Iv.set(n, r), R(r, [n]);
  }
  for (var xu = 0; xu < Bv.length; xu++) {
    var go = Bv[xu], Hy = go.toLowerCase(), Ru = go[0].toUpperCase() + go.slice(1);
    ui(Hy, "on" + Ru);
  }
  ui(ed, "onAnimationEnd"), ui(Hv, "onAnimationIteration"), ui($v, "onAnimationStart"), ui("dblclick", "onDoubleClick"), ui("focusin", "onFocus"), ui("focusout", "onBlur"), ui(Vv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $y = new Set("cancel close invalid load scroll toggle".split(" ").concat(wu));
  function Wv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, il(u, r, void 0, n), n.currentTarget = null;
  }
  function Bs(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var v = void 0;
        if (r)
          for (var E = u.length - 1; 0 <= E; E--) {
            var w = u[E], O = w.instance, V = w.currentTarget;
            if (w = w.listener, O !== v && f.isPropagationStopped())
              break e;
            Wv(f, w, V), v = O;
          }
        else
          for (E = 0; E < u.length; E++) {
            if (w = u[E], O = w.instance, V = w.currentTarget, w = w.listener, O !== v && f.isPropagationStopped())
              break e;
            Wv(f, w, V), v = O;
          }
      }
    }
    if (al)
      throw n = uu, al = !1, uu = null, n;
  }
  function Wt(n, r) {
    var o = r[ld];
    o === void 0 && (o = r[ld] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Yv(r, n, 2, !1), o.add(u));
  }
  function Ui(n, r, o) {
    var u = 0;
    r && (u |= 4), Yv(o, n, u, r);
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function yl(n) {
    if (!n[si]) {
      n[si] = !0, C.forEach(function(o) {
        o !== "selectionchange" && ($y.has(o) || Ui(o, !1, n), Ui(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[si] || (r[si] = !0, Ui("selectionchange", !1, r));
    }
  }
  function Yv(n, r, o, u) {
    switch (Pf(r)) {
      case 1:
        var f = vv;
        break;
      case 4:
        f = Ms;
        break;
      default:
        f = _s;
    }
    o = f.bind(null, r, o, n), f = void 0, !ws || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: f }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, { passive: f }) : n.addEventListener(r, o, !1);
  }
  function Ws(n, r, o, u, f) {
    var v = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var E = u.tag;
          if (E === 3 || E === 4) {
            var w = u.stateNode.containerInfo;
            if (w === f || w.nodeType === 8 && w.parentNode === f)
              break;
            if (E === 4)
              for (E = u.return; E !== null; ) {
                var O = E.tag;
                if ((O === 3 || O === 4) && (O = E.stateNode.containerInfo, O === f || O.nodeType === 8 && O.parentNode === f))
                  return;
                E = E.return;
              }
            for (; w !== null; ) {
              if (E = la(w), E === null)
                return;
              if (O = E.tag, O === 5 || O === 6) {
                u = v = E;
                continue e;
              }
              w = w.parentNode;
            }
          }
          u = u.return;
        }
    Of(function() {
      var V = v, oe = sn(o), ue = [];
      e: {
        var ae = Iv.get(n);
        if (ae !== void 0) {
          var we = zs, Le = n;
          switch (n) {
            case "keypress":
              if (cl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              we = _y;
              break;
            case "focusin":
              Le = "focus", we = zi;
              break;
            case "focusout":
              Le = "blur", we = zi;
              break;
            case "beforeblur":
            case "afterblur":
              we = zi;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = As;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = Ly;
              break;
            case ed:
            case Hv:
            case $v:
              we = Sv;
              break;
            case Vv:
              we = Tv;
              break;
            case "scroll":
              we = mv;
              break;
            case "wheel":
              we = oi;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = Ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = Fs;
          }
          var Pe = (r & 4) !== 0, mn = !Pe && n === "scroll", z = Pe ? ae !== null ? ae + "Capture" : null : ae;
          Pe = [];
          for (var k = V, P; k !== null; ) {
            P = k;
            var ve = P.stateNode;
            if (P.tag === 5 && ve !== null && (P = ve, z !== null && (ve = lu(k, z), ve != null && Pe.push(Ou(k, ve, P)))), mn)
              break;
            k = k.return;
          }
          0 < Pe.length && (ae = new we(ae, Le, null, o, oe), ue.push({ event: ae, listeners: Pe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", ae && o !== mr && (Le = o.relatedTarget || o.fromElement) && (la(Le) || Le[ci]))
            break e;
          if ((we || ae) && (ae = oe.window === oe ? oe : (ae = oe.ownerDocument) ? ae.defaultView || ae.parentWindow : window, we ? (Le = o.relatedTarget || o.toElement, we = V, Le = Le ? la(Le) : null, Le !== null && (mn = Ha(Le), Le !== mn || Le.tag !== 5 && Le.tag !== 6) && (Le = null)) : (we = null, Le = V), we !== Le)) {
            if (Pe = As, ve = "onMouseLeave", z = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Pe = Fs, ve = "onPointerLeave", z = "onPointerEnter", k = "pointer"), mn = we == null ? ae : gl(we), P = Le == null ? ae : gl(Le), ae = new Pe(ve, k + "leave", we, o, oe), ae.target = mn, ae.relatedTarget = P, ve = null, la(oe) === V && (Pe = new Pe(z, k + "enter", Le, o, oe), Pe.target = P, Pe.relatedTarget = mn, ve = Pe), mn = ve, we && Le)
              t: {
                for (Pe = we, z = Le, k = 0, P = Pe; P; P = So(P))
                  k++;
                for (P = 0, ve = z; ve; ve = So(ve))
                  P++;
                for (; 0 < k - P; )
                  Pe = So(Pe), k--;
                for (; 0 < P - k; )
                  z = So(z), P--;
                for (; k--; ) {
                  if (Pe === z || z !== null && Pe === z.alternate)
                    break t;
                  Pe = So(Pe), z = So(z);
                }
                Pe = null;
              }
            else
              Pe = null;
            we !== null && td(ue, ae, we, Pe, !1), Le !== null && mn !== null && td(ue, mn, Le, Pe, !0);
          }
        }
        e: {
          if (ae = V ? gl(V) : window, we = ae.nodeName && ae.nodeName.toLowerCase(), we === "select" || we === "input" && ae.type === "file")
            var je = Nv;
          else if (Dv(ae))
            if (qf)
              je = zv;
            else {
              je = Fy;
              var ze = Ay;
            }
          else
            (we = ae.nodeName) && we.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (je = Py);
          if (je && (je = je(n, V))) {
            kv(ue, je, o, oe);
            break e;
          }
          ze && ze(n, ae, V), n === "focusout" && (ze = ae._wrapperState) && ze.controlled && ae.type === "number" && nr(ae, "number", ae.value);
        }
        switch (ze = V ? gl(V) : window, n) {
          case "focusin":
            (Dv(ze) || ze.contentEditable === "true") && (Ma = ze, Kf = V, Tu = null);
            break;
          case "focusout":
            Tu = Kf = Ma = null;
            break;
          case "mousedown":
            Xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xf = !1, jv(ue, o, oe);
            break;
          case "selectionchange":
            if (Pv)
              break;
          case "keydown":
          case "keyup":
            jv(ue, o, oe);
        }
        var Be;
        if (Na)
          e: {
            switch (n) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break e;
              case "compositionend":
                tt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break e;
            }
            tt = void 0;
          }
        else
          pl ? wv(n, o) && (tt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (tt = "onCompositionStart");
        tt && (xv && o.locale !== "ko" && (pl || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && pl && (Be = jf()) : (ai = oe, yu = "value" in ai ? ai.value : ai.textContent, pl = !0)), ze = Du(V, tt), 0 < ze.length && (tt = new Vf(tt, n, null, o, oe), ue.push({ event: tt, listeners: ze }), Be ? tt.data = Be : (Be = Hs(o), Be !== null && (tt.data = Be)))), (Be = js ? zy(n, o) : Uy(n, o)) && (V = Du(V, "onBeforeInput"), 0 < V.length && (oe = new Vf("onBeforeInput", "beforeinput", null, o, oe), ue.push({ event: oe, listeners: V }), oe.data = Be));
      }
      Bs(ue, r);
    });
  }
  function Ou(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Du(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, v = f.stateNode;
      f.tag === 5 && v !== null && (f = v, v = lu(n, o), v != null && u.unshift(Ou(n, v, f)), v = lu(n, r), v != null && u.push(Ou(n, v, f))), n = n.return;
    }
    return u;
  }
  function So(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, o, u, f) {
    for (var v = r._reactName, E = []; o !== null && o !== u; ) {
      var w = o, O = w.alternate, V = w.stateNode;
      if (O !== null && O === u)
        break;
      w.tag === 5 && V !== null && (w = V, f ? (O = lu(o, v), O != null && E.unshift(Ou(o, O, w))) : f || (O = lu(o, v), O != null && E.push(Ou(o, O, w)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var nd = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(Vy, "");
  }
  function Ys(n, r, o) {
    if (r = rd(r), rd(n) !== r && o)
      throw Error(y(425));
  }
  function qs() {
  }
  var ad = null, Eo = null;
  function ku(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var bo = typeof setTimeout == "function" ? setTimeout : void 0, qv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(Iy);
  } : bo;
  function Iy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ai(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (u === 0) {
            n.removeChild(f), hu(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
    } while (o);
    hu(r);
  }
  function _a(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Nu(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Fi = Math.random().toString(36).slice(2), $a = "__reactFiber$" + Fi, Co = "__reactProps$" + Fi, ci = "__reactContainer$" + Fi, ld = "__reactEvents$" + Fi, By = "__reactListeners$" + Fi, ud = "__reactHandles$" + Fi;
  function la(n) {
    var r = n[$a];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[ci] || o[$a]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Nu(n); n !== null; ) {
            if (o = n[$a])
              return o;
            n = Nu(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Mu(n) {
    return n = n[$a] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(y(33));
  }
  function We(n) {
    return n[Co] || null;
  }
  var Pi = [], Qt = -1;
  function ut(n) {
    return { current: n };
  }
  function Dt(n) {
    0 > Qt || (n.current = Pi[Qt], Pi[Qt] = null, Qt--);
  }
  function Nt(n, r) {
    Qt++, Pi[Qt] = n.current, n.current = r;
  }
  var Va = {}, et = ut(Va), dn = ut(!1), _r = Va;
  function ua(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Va;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, v;
    for (v in o)
      f[v] = r[v];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function sa() {
    Dt(dn), Dt(et);
  }
  function ji(n, r, o) {
    if (et.current !== Va)
      throw Error(y(168));
    Nt(et, r), Nt(dn, o);
  }
  function _u(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var f in u)
      if (!(f in r))
        throw Error(y(108, rn(n) || "Unknown", f));
    return fe({}, o, u);
  }
  function Qs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Va, _r = et.current, Nt(et, n), Nt(dn, dn.current), !0;
  }
  function Qv(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(y(169));
    o ? (n = _u(n, r, _r), u.__reactInternalMemoizedMergedChildContext = n, Dt(dn), Dt(et), Nt(et, n)) : Dt(dn), Nt(dn, o);
  }
  var Yr = null, Pn = !1, Lu = !1;
  function sd(n) {
    Yr === null ? Yr = [n] : Yr.push(n);
  }
  function cd(n) {
    Pn = !0, sd(n);
  }
  function Lr() {
    if (!Lu && Yr !== null) {
      Lu = !0;
      var n = 0, r = _t;
      try {
        var o = Yr;
        for (_t = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Yr = null, Pn = !1;
      } catch (f) {
        throw Yr !== null && (Yr = Yr.slice(n + 1)), Nf(ri, Lr), f;
      } finally {
        _t = r, Lu = !1;
      }
    }
    return null;
  }
  var Hi = [], zr = 0, To = null, Sl = 0, Ur = [], or = 0, ca = null, Wn = 1, fi = "";
  function qr(n, r) {
    Hi[zr++] = Sl, Hi[zr++] = To, To = n, Sl = r;
  }
  function fd(n, r, o) {
    Ur[or++] = Wn, Ur[or++] = fi, Ur[or++] = ca, ca = n;
    var u = Wn;
    n = fi;
    var f = 32 - ra(u) - 1;
    u &= ~(1 << f), o += 1;
    var v = 32 - ra(r) + f;
    if (30 < v) {
      var E = f - f % 5;
      v = (u & (1 << E) - 1).toString(32), u >>= E, f -= E, Wn = 1 << 32 - ra(r) + f | o << f | u, fi = v + n;
    } else
      Wn = 1 << v | o << f | u, fi = n;
  }
  function Gs(n) {
    n.return !== null && (qr(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === To; )
      To = Hi[--zr], Hi[zr] = null, Sl = Hi[--zr], Hi[zr] = null;
    for (; n === ca; )
      ca = Ur[--or], Ur[or] = null, fi = Ur[--or], Ur[or] = null, Wn = Ur[--or], Ur[or] = null;
  }
  var Qr = null, Ar = null, Gt = !1, fa = null;
  function pd(n, r) {
    var o = ya(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Gv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Qr = n, Ar = _a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Qr = n, Ar = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ca !== null ? { id: Wn, overflow: fi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ya(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Qr = n, Ar = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ks(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Xs(n) {
    if (Gt) {
      var r = Ar;
      if (r) {
        var o = r;
        if (!Gv(n, r)) {
          if (Ks(n))
            throw Error(y(418));
          r = _a(o.nextSibling);
          var u = Qr;
          r && Gv(n, r) ? pd(u, o) : (n.flags = n.flags & -4097 | 2, Gt = !1, Qr = n);
        }
      } else {
        if (Ks(n))
          throw Error(y(418));
        n.flags = n.flags & -4097 | 2, Gt = !1, Qr = n;
      }
    }
  }
  function Kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Qr = n;
  }
  function Zs(n) {
    if (n !== Qr)
      return !1;
    if (!Gt)
      return Kv(n), Gt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ku(n.type, n.memoizedProps)), r && (r = Ar)) {
      if (Ks(n))
        throw Xv(), Error(y(418));
      for (; r; )
        pd(n, r), r = _a(r.nextSibling);
    }
    if (Kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ar = _a(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ar = null;
      }
    } else
      Ar = Qr ? _a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Xv() {
    for (var n = Ar; n; )
      n = _a(n.nextSibling);
  }
  function an() {
    Ar = Qr = null, Gt = !1;
  }
  function vd(n) {
    fa === null ? fa = [n] : fa.push(n);
  }
  var Js = Q.ReactCurrentBatchConfig;
  function Gr(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Ia = ut(null), ec = null, $i = null, hd = null;
  function md() {
    hd = $i = ec = null;
  }
  function Vi(n) {
    var r = Ia.current;
    Dt(Ia), n._currentValue = r;
  }
  function jn(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Se(n, r) {
    ec = n, hd = $i = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (xn = !0), n.firstContext = null);
  }
  function hn(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, $i === null) {
        if (ec === null)
          throw Error(y(308));
        $i = n, ec.dependencies = { lanes: 0, firstContext: n };
      } else
        $i = $i.next = n;
    return r;
  }
  var Yn = null;
  function yd(n) {
    Yn === null ? Yn = [n] : Yn.push(n);
  }
  function Zv(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, yd(r)) : (o.next = f.next, f.next = o), r.interleaved = o, di(n, u);
  }
  function di(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Ii = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Dn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function pi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Bi(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, yt & 2) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, di(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, yd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, di(n, o);
  }
  function tc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, fu(n, o);
    }
  }
  function Sd(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var f = null, v = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var E = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          v === null ? f = v = E : v = v.next = E, o = o.next;
        } while (o !== null);
        v === null ? f = v = r : v = v.next = r;
      } else
        f = v = r;
      o = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: v, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Wi(n, r, o, u) {
    var f = n.updateQueue;
    Ii = !1;
    var v = f.firstBaseUpdate, E = f.lastBaseUpdate, w = f.shared.pending;
    if (w !== null) {
      f.shared.pending = null;
      var O = w, V = O.next;
      O.next = null, E === null ? v = V : E.next = V, E = O;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, w = oe.lastBaseUpdate, w !== E && (w === null ? oe.firstBaseUpdate = V : w.next = V, oe.lastBaseUpdate = O));
    }
    if (v !== null) {
      var ue = f.baseState;
      E = 0, oe = V = O = null, w = v;
      do {
        var ae = w.lane, we = w.eventTime;
        if ((u & ae) === ae) {
          oe !== null && (oe = oe.next = {
            eventTime: we,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Le = n, Pe = w;
            switch (ae = r, we = o, Pe.tag) {
              case 1:
                if (Le = Pe.payload, typeof Le == "function") {
                  ue = Le.call(we, ue, ae);
                  break e;
                }
                ue = Le;
                break e;
              case 3:
                Le.flags = Le.flags & -65537 | 128;
              case 0:
                if (Le = Pe.payload, ae = typeof Le == "function" ? Le.call(we, ue, ae) : Le, ae == null)
                  break e;
                ue = fe({}, ue, ae);
                break e;
              case 2:
                Ii = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ae = f.effects, ae === null ? f.effects = [w] : ae.push(w));
        } else
          we = { eventTime: we, lane: ae, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, oe === null ? (V = oe = we, O = ue) : oe = oe.next = we, E |= ae;
        if (w = w.next, w === null) {
          if (w = f.shared.pending, w === null)
            break;
          ae = w, w = ae.next, ae.next = null, f.lastBaseUpdate = ae, f.shared.pending = null;
        }
      } while (1);
      if (oe === null && (O = ue), f.baseState = O, f.firstBaseUpdate = V, f.lastBaseUpdate = oe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else
        v === null && (f.shared.lanes = 0);
      yi |= E, n.lanes = E, n.memoizedState = ue;
    }
  }
  function xo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], f = u.callback;
        if (f !== null) {
          if (u.callback = null, u = o, typeof f != "function")
            throw Error(y(191, f));
          f.call(u);
        }
      }
  }
  var Jv = new p.Component().refs;
  function Ed(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : fe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var nc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ha(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = cr(), f = Rn(n), v = pi(u, f);
    v.payload = r, o != null && (v.callback = o), r = Bi(n, v, f), r !== null && (fr(r, n, f, u), tc(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = cr(), f = Rn(n), v = pi(u, f);
    v.tag = 1, v.payload = r, o != null && (v.callback = o), r = Bi(n, v, f), r !== null && (fr(r, n, f, u), tc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = cr(), u = Rn(n), f = pi(o, u);
    f.tag = 2, r != null && (f.callback = r), r = Bi(n, f, u), r !== null && (fr(r, n, u, o), tc(r, n, u));
  } };
  function eh(n, r, o, u, f, v, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, v, E) : r.prototype && r.prototype.isPureReactComponent ? !Cu(o, u) || !Cu(f, v) : !0;
  }
  function th(n, r, o) {
    var u = !1, f = Va, v = r.contextType;
    return typeof v == "object" && v !== null ? v = hn(v) : (f = tn(r) ? _r : et.current, u = r.contextTypes, v = (u = u != null) ? ua(n, f) : Va), r = new r(o, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function nh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && nc.enqueueReplaceState(r, r.state, null);
  }
  function rc(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = Jv, gd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? f.context = hn(v) : (v = tn(r) ? _r : et.current, f.context = ua(n, v)), f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Ed(n, r, v, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && nc.enqueueReplaceState(f, f.state, null), Wi(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function El(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(y(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(y(147, n));
        var f = u, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(E) {
          var w = f.refs;
          w === Jv && (w = f.refs = {}), E === null ? delete w[v] : w[v] = E;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(y(284));
      if (!o._owner)
        throw Error(y(290, n));
    }
    return n;
  }
  function ac(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function rh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ah(n) {
    function r(z, k) {
      if (n) {
        var P = z.deletions;
        P === null ? (z.deletions = [k], z.flags |= 16) : P.push(k);
      }
    }
    function o(z, k) {
      if (!n)
        return null;
      for (; k !== null; )
        r(z, k), k = k.sibling;
      return null;
    }
    function u(z, k) {
      for (z = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? z.set(k.key, k) : z.set(k.index, k), k = k.sibling;
      return z;
    }
    function f(z, k) {
      return z = Ji(z, k), z.index = 0, z.sibling = null, z;
    }
    function v(z, k, P) {
      return z.index = P, n ? (P = z.alternate, P !== null ? (P = P.index, P < k ? (z.flags |= 2, k) : P) : (z.flags |= 2, k)) : (z.flags |= 1048576, k);
    }
    function E(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function w(z, k, P, ve) {
      return k === null || k.tag !== 6 ? (k = Zu(P, z.mode, ve), k.return = z, k) : (k = f(k, P), k.return = z, k);
    }
    function O(z, k, P, ve) {
      var je = P.type;
      return je === re ? oe(z, k, P.props.children, ve, P.key) : k !== null && (k.elementType === je || typeof je == "object" && je !== null && je.$$typeof === Ce && rh(je) === k.type) ? (ve = f(k, P.props), ve.ref = El(z, k, P), ve.return = z, ve) : (ve = Ac(P.type, P.key, P.props, null, z.mode, ve), ve.ref = El(z, k, P), ve.return = z, ve);
    }
    function V(z, k, P, ve) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== P.containerInfo || k.stateNode.implementation !== P.implementation ? (k = Io(P, z.mode, ve), k.return = z, k) : (k = f(k, P.children || []), k.return = z, k);
    }
    function oe(z, k, P, ve, je) {
      return k === null || k.tag !== 7 ? (k = Vo(P, z.mode, ve, je), k.return = z, k) : (k = f(k, P), k.return = z, k);
    }
    function ue(z, k, P) {
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return k = Zu("" + k, z.mode, P), k.return = z, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case te:
            return P = Ac(k.type, k.key, k.props, null, z.mode, P), P.ref = El(z, null, k), P.return = z, P;
          case ce:
            return k = Io(k, z.mode, P), k.return = z, k;
          case Ce:
            var ve = k._init;
            return ue(z, ve(k._payload), P);
        }
        if (rr(k) || pe(k))
          return k = Vo(k, z.mode, P, null), k.return = z, k;
        ac(z, k);
      }
      return null;
    }
    function ae(z, k, P, ve) {
      var je = k !== null ? k.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return je !== null ? null : w(z, k, "" + P, ve);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case te:
            return P.key === je ? O(z, k, P, ve) : null;
          case ce:
            return P.key === je ? V(z, k, P, ve) : null;
          case Ce:
            return je = P._init, ae(
              z,
              k,
              je(P._payload),
              ve
            );
        }
        if (rr(P) || pe(P))
          return je !== null ? null : oe(z, k, P, ve, null);
        ac(z, P);
      }
      return null;
    }
    function we(z, k, P, ve, je) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return z = z.get(P) || null, w(k, z, "" + ve, je);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case te:
            return z = z.get(ve.key === null ? P : ve.key) || null, O(k, z, ve, je);
          case ce:
            return z = z.get(ve.key === null ? P : ve.key) || null, V(k, z, ve, je);
          case Ce:
            var ze = ve._init;
            return we(z, k, P, ze(ve._payload), je);
        }
        if (rr(ve) || pe(ve))
          return z = z.get(P) || null, oe(k, z, ve, je, null);
        ac(k, ve);
      }
      return null;
    }
    function Le(z, k, P, ve) {
      for (var je = null, ze = null, Be = k, tt = k = 0, Vn = null; Be !== null && tt < P.length; tt++) {
        Be.index > tt ? (Vn = Be, Be = null) : Vn = Be.sibling;
        var Rt = ae(z, Be, P[tt], ve);
        if (Rt === null) {
          Be === null && (Be = Vn);
          break;
        }
        n && Be && Rt.alternate === null && r(z, Be), k = v(Rt, k, tt), ze === null ? je = Rt : ze.sibling = Rt, ze = Rt, Be = Vn;
      }
      if (tt === P.length)
        return o(z, Be), Gt && qr(z, tt), je;
      if (Be === null) {
        for (; tt < P.length; tt++)
          Be = ue(z, P[tt], ve), Be !== null && (k = v(Be, k, tt), ze === null ? je = Be : ze.sibling = Be, ze = Be);
        return Gt && qr(z, tt), je;
      }
      for (Be = u(z, Be); tt < P.length; tt++)
        Vn = we(Be, z, tt, P[tt], ve), Vn !== null && (n && Vn.alternate !== null && Be.delete(Vn.key === null ? tt : Vn.key), k = v(Vn, k, tt), ze === null ? je = Vn : ze.sibling = Vn, ze = Vn);
      return n && Be.forEach(function(eo) {
        return r(z, eo);
      }), Gt && qr(z, tt), je;
    }
    function Pe(z, k, P, ve) {
      var je = pe(P);
      if (typeof je != "function")
        throw Error(y(150));
      if (P = je.call(P), P == null)
        throw Error(y(151));
      for (var ze = je = null, Be = k, tt = k = 0, Vn = null, Rt = P.next(); Be !== null && !Rt.done; tt++, Rt = P.next()) {
        Be.index > tt ? (Vn = Be, Be = null) : Vn = Be.sibling;
        var eo = ae(z, Be, Rt.value, ve);
        if (eo === null) {
          Be === null && (Be = Vn);
          break;
        }
        n && Be && eo.alternate === null && r(z, Be), k = v(eo, k, tt), ze === null ? je = eo : ze.sibling = eo, ze = eo, Be = Vn;
      }
      if (Rt.done)
        return o(
          z,
          Be
        ), Gt && qr(z, tt), je;
      if (Be === null) {
        for (; !Rt.done; tt++, Rt = P.next())
          Rt = ue(z, Rt.value, ve), Rt !== null && (k = v(Rt, k, tt), ze === null ? je = Rt : ze.sibling = Rt, ze = Rt);
        return Gt && qr(z, tt), je;
      }
      for (Be = u(z, Be); !Rt.done; tt++, Rt = P.next())
        Rt = we(Be, z, tt, Rt.value, ve), Rt !== null && (n && Rt.alternate !== null && Be.delete(Rt.key === null ? tt : Rt.key), k = v(Rt, k, tt), ze === null ? je = Rt : ze.sibling = Rt, ze = Rt);
      return n && Be.forEach(function(cg) {
        return r(z, cg);
      }), Gt && qr(z, tt), je;
    }
    function mn(z, k, P, ve) {
      if (typeof P == "object" && P !== null && P.type === re && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case te:
            e: {
              for (var je = P.key, ze = k; ze !== null; ) {
                if (ze.key === je) {
                  if (je = P.type, je === re) {
                    if (ze.tag === 7) {
                      o(z, ze.sibling), k = f(ze, P.props.children), k.return = z, z = k;
                      break e;
                    }
                  } else if (ze.elementType === je || typeof je == "object" && je !== null && je.$$typeof === Ce && rh(je) === ze.type) {
                    o(z, ze.sibling), k = f(ze, P.props), k.ref = El(z, ze, P), k.return = z, z = k;
                    break e;
                  }
                  o(z, ze);
                  break;
                } else
                  r(z, ze);
                ze = ze.sibling;
              }
              P.type === re ? (k = Vo(P.props.children, z.mode, ve, P.key), k.return = z, z = k) : (ve = Ac(P.type, P.key, P.props, null, z.mode, ve), ve.ref = El(z, k, P), ve.return = z, z = ve);
            }
            return E(z);
          case ce:
            e: {
              for (ze = P.key; k !== null; ) {
                if (k.key === ze)
                  if (k.tag === 4 && k.stateNode.containerInfo === P.containerInfo && k.stateNode.implementation === P.implementation) {
                    o(z, k.sibling), k = f(k, P.children || []), k.return = z, z = k;
                    break e;
                  } else {
                    o(z, k);
                    break;
                  }
                else
                  r(z, k);
                k = k.sibling;
              }
              k = Io(P, z.mode, ve), k.return = z, z = k;
            }
            return E(z);
          case Ce:
            return ze = P._init, mn(z, k, ze(P._payload), ve);
        }
        if (rr(P))
          return Le(z, k, P, ve);
        if (pe(P))
          return Pe(z, k, P, ve);
        ac(z, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, k !== null && k.tag === 6 ? (o(z, k.sibling), k = f(k, P), k.return = z, z = k) : (o(z, k), k = Zu(P, z.mode, ve), k.return = z, z = k), E(z)) : o(z, k);
    }
    return mn;
  }
  var bl = ah(!0), ih = ah(!1), zu = {}, La = ut(zu), Uu = ut(zu), Cl = ut(zu);
  function Ro(n) {
    if (n === zu)
      throw Error(y(174));
    return n;
  }
  function bd(n, r) {
    switch (Nt(Cl, r), Nt(Uu, n), Nt(La, zu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : En(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = En(r, n);
    }
    Dt(La), Nt(La, r);
  }
  function Yi() {
    Dt(La), Dt(Uu), Dt(Cl);
  }
  function Ge(n) {
    Ro(Cl.current);
    var r = Ro(La.current), o = En(r, n.type);
    r !== o && (Nt(Uu, n), Nt(La, o));
  }
  function pt(n) {
    Uu.current === n && (Dt(La), Dt(Uu));
  }
  var Ke = ut(0);
  function on(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var da = [];
  function ic() {
    for (var n = 0; n < da.length; n++)
      da[n]._workInProgressVersionPrimary = null;
    da.length = 0;
  }
  var oc = Q.ReactCurrentDispatcher, Cd = Q.ReactCurrentBatchConfig, wo = 0, Kt = null, ee = null, St = null, Xe = !1, Ba = !1, Kr = 0, Oo = 0;
  function Xt() {
    throw Error(y(321));
  }
  function Do(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!oa(n[o], r[o]))
        return !1;
    return !0;
  }
  function qi(n, r, o, u, f, v) {
    if (wo = v, Kt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, oc.current = n === null || n.memoizedState === null ? Yy : qy, n = o(u, f), Ba) {
      v = 0;
      do {
        if (Ba = !1, Kr = 0, 25 <= v)
          throw Error(y(301));
        v += 1, St = ee = null, r.updateQueue = null, oc.current = xd, n = o(u, f);
      } while (Ba);
    }
    if (oc.current = Cc, r = ee !== null && ee.next !== null, wo = 0, St = ee = Kt = null, Xe = !1, r)
      throw Error(y(300));
    return n;
  }
  function ko() {
    var n = Kr !== 0;
    return Kr = 0, n;
  }
  function pa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return St === null ? Kt.memoizedState = St = n : St = St.next = n, St;
  }
  function Fr() {
    if (ee === null) {
      var n = Kt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ee.next;
    var r = St === null ? Kt.memoizedState : St.next;
    if (r !== null)
      St = r, ee = n;
    else {
      if (n === null)
        throw Error(y(310));
      ee = n, n = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, St === null ? Kt.memoizedState = St = n : St = St.next = n;
    }
    return St;
  }
  function No(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Au(n) {
    var r = Fr(), o = r.queue;
    if (o === null)
      throw Error(y(311));
    o.lastRenderedReducer = n;
    var u = ee, f = u.baseQueue, v = o.pending;
    if (v !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = v.next, v.next = E;
      }
      u.baseQueue = f = v, o.pending = null;
    }
    if (f !== null) {
      v = f.next, u = u.baseState;
      var w = E = null, O = null, V = v;
      do {
        var oe = V.lane;
        if ((wo & oe) === oe)
          O !== null && (O = O.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), u = V.hasEagerState ? V.eagerState : n(u, V.action);
        else {
          var ue = {
            lane: oe,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          O === null ? (w = O = ue, E = u) : O = O.next = ue, Kt.lanes |= oe, yi |= oe;
        }
        V = V.next;
      } while (V !== null && V !== v);
      O === null ? E = u : O.next = w, oa(u, r.memoizedState) || (xn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = O, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      f = n;
      do
        v = f.lane, Kt.lanes |= v, yi |= v, f = f.next;
      while (f !== n);
    } else
      f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Fu(n) {
    var r = Fr(), o = r.queue;
    if (o === null)
      throw Error(y(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, v = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var E = f = f.next;
      do
        v = n(v, E.action), E = E.next;
      while (E !== f);
      oa(v, r.memoizedState) || (xn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), o.lastRenderedState = v;
    }
    return [v, u];
  }
  function lc() {
  }
  function uc(n, r) {
    var o = Kt, u = Fr(), f = r(), v = !oa(u.memoizedState, f);
    if (v && (u.memoizedState = f, xn = !0), u = u.queue, Pu(fc.bind(null, o, u, n), [n]), u.getSnapshot !== r || v || St !== null && St.memoizedState.tag & 1) {
      if (o.flags |= 2048, Mo(9, cc.bind(null, o, u, f, r), void 0, null), ln === null)
        throw Error(y(349));
      wo & 30 || sc(o, r, f);
    }
    return f;
  }
  function sc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function cc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, dc(r) && pc(n);
  }
  function fc(n, r, o) {
    return o(function() {
      dc(r) && pc(n);
    });
  }
  function dc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !oa(n, o);
    } catch {
      return !0;
    }
  }
  function pc(n) {
    var r = di(n, 1);
    r !== null && fr(r, n, 1, -1);
  }
  function vc(n) {
    var r = pa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: No, lastRenderedState: n }, r.queue = n, n = n.dispatch = bc.bind(null, Kt, n), [r.memoizedState, n];
  }
  function Mo(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function hc() {
    return Fr().memoizedState;
  }
  function _o(n, r, o, u) {
    var f = pa();
    Kt.flags |= n, f.memoizedState = Mo(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function vi(n, r, o, u) {
    var f = Fr();
    u = u === void 0 ? null : u;
    var v = void 0;
    if (ee !== null) {
      var E = ee.memoizedState;
      if (v = E.destroy, u !== null && Do(u, E.deps)) {
        f.memoizedState = Mo(r, o, v, u);
        return;
      }
    }
    Kt.flags |= n, f.memoizedState = Mo(1 | r, o, v, u);
  }
  function mc(n, r) {
    return _o(8390656, 8, n, r);
  }
  function Pu(n, r) {
    return vi(2048, 8, n, r);
  }
  function yc(n, r) {
    return vi(4, 2, n, r);
  }
  function gc(n, r) {
    return vi(4, 4, n, r);
  }
  function Td(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Tl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, vi(4, 4, Td.bind(null, r, n), o);
  }
  function Sc() {
  }
  function xl(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Do(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Qi(n, r) {
    var o = Fr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Do(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Pr(n, r, o) {
    return wo & 21 ? (oa(o, r) || (o = ks(), Kt.lanes |= o, yi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, xn = !0), n.memoizedState = o);
  }
  function Wy(n, r) {
    var o = _t;
    _t = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = o, Cd.transition = u;
    }
  }
  function Yt() {
    return Fr().memoizedState;
  }
  function Ec(n, r, o) {
    var u = Rn(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Rl(n))
      ju(r, o);
    else if (o = Zv(n, r, o, u), o !== null) {
      var f = cr();
      fr(o, n, u, f), oh(o, r, u);
    }
  }
  function bc(n, r, o) {
    var u = Rn(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Rl(n))
      ju(r, f);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var E = r.lastRenderedState, w = v(E, o);
          if (f.hasEagerState = !0, f.eagerState = w, oa(w, E)) {
            var O = r.interleaved;
            O === null ? (f.next = f, yd(r)) : (f.next = O.next, O.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      o = Zv(n, r, f, u), o !== null && (f = cr(), fr(o, n, u, f), oh(o, r, u));
    }
  }
  function Rl(n) {
    var r = n.alternate;
    return n === Kt || r !== null && r === Kt;
  }
  function ju(n, r) {
    Ba = Xe = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function oh(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, fu(n, o);
    }
  }
  var Cc = { readContext: hn, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useInsertionEffect: Xt, useLayoutEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useMutableSource: Xt, useSyncExternalStore: Xt, useId: Xt, unstable_isNewReconciler: !1 }, Yy = { readContext: hn, useCallback: function(n, r) {
    return pa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: hn, useEffect: mc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, _o(
      4194308,
      4,
      Td.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return _o(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _o(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = pa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = pa();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ec.bind(null, Kt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = pa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: vc, useDebugValue: Sc, useDeferredValue: function(n) {
    return pa().memoizedState = n;
  }, useTransition: function() {
    var n = vc(!1), r = n[0];
    return n = Wy.bind(null, n[1]), pa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Kt, f = pa();
    if (Gt) {
      if (o === void 0)
        throw Error(y(407));
      o = o();
    } else {
      if (o = r(), ln === null)
        throw Error(y(349));
      wo & 30 || sc(u, r, o);
    }
    f.memoizedState = o;
    var v = { value: o, getSnapshot: r };
    return f.queue = v, mc(fc.bind(
      null,
      u,
      v,
      n
    ), [n]), u.flags |= 2048, Mo(9, cc.bind(null, u, v, o, r), void 0, null), o;
  }, useId: function() {
    var n = pa(), r = ln.identifierPrefix;
    if (Gt) {
      var o = fi, u = Wn;
      o = (u & ~(1 << 32 - ra(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Kr++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Oo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, qy = {
    readContext: hn,
    useCallback: xl,
    useContext: hn,
    useEffect: Pu,
    useImperativeHandle: Tl,
    useInsertionEffect: yc,
    useLayoutEffect: gc,
    useMemo: Qi,
    useReducer: Au,
    useRef: hc,
    useState: function() {
      return Au(No);
    },
    useDebugValue: Sc,
    useDeferredValue: function(n) {
      var r = Fr();
      return Pr(r, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = Au(No)[0], r = Fr().memoizedState;
      return [n, r];
    },
    useMutableSource: lc,
    useSyncExternalStore: uc,
    useId: Yt,
    unstable_isNewReconciler: !1
  }, xd = { readContext: hn, useCallback: xl, useContext: hn, useEffect: Pu, useImperativeHandle: Tl, useInsertionEffect: yc, useLayoutEffect: gc, useMemo: Qi, useReducer: Fu, useRef: hc, useState: function() {
    return Fu(No);
  }, useDebugValue: Sc, useDeferredValue: function(n) {
    var r = Fr();
    return ee === null ? r.memoizedState = n : Pr(r, ee.memoizedState, n);
  }, useTransition: function() {
    var n = Fu(No)[0], r = Fr().memoizedState;
    return [n, r];
  }, useMutableSource: lc, useSyncExternalStore: uc, useId: Yt, unstable_isNewReconciler: !1 };
  function wl(n, r) {
    try {
      var o = "", u = r;
      do
        o += kt(u), u = u.return;
      while (u);
      var f = o;
    } catch (v) {
      f = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Hu(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Tc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Qy = typeof WeakMap == "function" ? WeakMap : Map;
  function lh(n, r, o) {
    o = pi(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Nc || (Nc = !0, Fo = u), Tc(n, r);
    }, o;
  }
  function $u(n, r, o) {
    o = pi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        Tc(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
      Tc(n, r), typeof u != "function" && (qa === null ? qa = /* @__PURE__ */ new Set([this]) : qa.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function uh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Qy();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else
      f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = tg.bind(null, n, r, o), r.then(n, n));
  }
  function Rd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function wd(n, r, o, u, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = pi(-1, 1), r.tag = 2, Bi(o, r, 1))), o.lanes |= 1), n);
  }
  var Gy = Q.ReactCurrentOwner, xn = !1;
  function kn(n, r, o, u) {
    r.child = n === null ? ih(r, null, o, u) : bl(r, n.child, o, u);
  }
  function Gi(n, r, o, u, f) {
    o = o.render;
    var v = r.ref;
    return Se(r, f), u = qi(n, r, o, u, v, f), o = ko(), n !== null && !xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qn(n, r, f)) : (Gt && o && Gs(r), r.flags |= 1, kn(n, r, u, f), r.child);
  }
  function xc(n, r, o, u, f) {
    if (n === null) {
      var v = o.type;
      return typeof v == "function" && !Wd(v) && v.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = v, jr(n, r, v, u, f)) : (n = Ac(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & f)) {
      var E = v.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Cu, o(E, u) && n.ref === r.ref)
        return qn(n, r, f);
    }
    return r.flags |= 1, n = Ji(v, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function jr(n, r, o, u, f) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Cu(v, u) && n.ref === r.ref)
        if (xn = !1, r.pendingProps = u = v, (n.lanes & f) !== 0)
          n.flags & 131072 && (xn = !0);
        else
          return r.lanes = n.lanes, qn(n, r, f);
    }
    return Ol(n, r, o, u, f);
  }
  function Lo(n, r, o) {
    var u = r.pendingProps, f = u.children, v = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Nt(Ll, Xr), Xr |= o;
      else {
        if (!(o & 1073741824))
          return n = v !== null ? v.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Nt(Ll, Xr), Xr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = v !== null ? v.baseLanes : o, Nt(Ll, Xr), Xr |= u;
      }
    else
      v !== null ? (u = v.baseLanes | o, r.memoizedState = null) : u = o, Nt(Ll, Xr), Xr |= u;
    return kn(n, r, f, o), r.child;
  }
  function st(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ol(n, r, o, u, f) {
    var v = tn(o) ? _r : et.current;
    return v = ua(r, v), Se(r, f), o = qi(n, r, o, u, v, f), u = ko(), n !== null && !xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, qn(n, r, f)) : (Gt && u && Gs(r), r.flags |= 1, kn(n, r, o, f), r.child);
  }
  function Od(n, r, o, u, f) {
    if (tn(o)) {
      var v = !0;
      Qs(r);
    } else
      v = !1;
    if (Se(r, f), r.stateNode === null)
      lr(n, r), th(r, o, u), rc(r, o, u, f), u = !0;
    else if (n === null) {
      var E = r.stateNode, w = r.memoizedProps;
      E.props = w;
      var O = E.context, V = o.contextType;
      typeof V == "object" && V !== null ? V = hn(V) : (V = tn(o) ? _r : et.current, V = ua(r, V));
      var oe = o.getDerivedStateFromProps, ue = typeof oe == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ue || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (w !== u || O !== V) && nh(r, E, u, V), Ii = !1;
      var ae = r.memoizedState;
      E.state = ae, Wi(r, u, E, f), O = r.memoizedState, w !== u || ae !== O || dn.current || Ii ? (typeof oe == "function" && (Ed(r, o, oe, u), O = r.memoizedState), (w = Ii || eh(r, o, w, u, ae, O, V)) ? (ue || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = O), E.props = u, E.state = O, E.context = V, u = w) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, Dn(n, r), w = r.memoizedProps, V = r.type === r.elementType ? w : Gr(r.type, w), E.props = V, ue = r.pendingProps, ae = E.context, O = o.contextType, typeof O == "object" && O !== null ? O = hn(O) : (O = tn(o) ? _r : et.current, O = ua(r, O));
      var we = o.getDerivedStateFromProps;
      (oe = typeof we == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (w !== ue || ae !== O) && nh(r, E, u, O), Ii = !1, ae = r.memoizedState, E.state = ae, Wi(r, u, E, f);
      var Le = r.memoizedState;
      w !== ue || ae !== Le || dn.current || Ii ? (typeof we == "function" && (Ed(r, o, we, u), Le = r.memoizedState), (V = Ii || eh(r, o, V, u, ae, Le, O) || !1) ? (oe || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Le, O), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Le, O)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Le), E.props = u, E.state = Le, E.context = O, u = V) : (typeof E.componentDidUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return sh(n, r, o, u, v, f);
  }
  function sh(n, r, o, u, f, v) {
    st(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E)
      return f && Qv(r, o, !1), qn(n, r, v);
    u = r.stateNode, Gy.current = r;
    var w = E && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = bl(r, n.child, null, v), r.child = bl(r, null, w, v)) : kn(n, r, w, v), r.memoizedState = u.state, f && Qv(r, o, !0), r.child;
  }
  function ch(n) {
    var r = n.stateNode;
    r.pendingContext ? ji(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ji(n, r.context, !1), bd(n, r.containerInfo);
  }
  function Rc(n, r, o, u, f) {
    return an(), vd(f), r.flags |= 256, kn(n, r, o, u), r.child;
  }
  var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function kd(n, r, o) {
    var u = r.pendingProps, f = Ke.current, v = !1, E = (r.flags & 128) !== 0, w;
    if ((w = E) || (w = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), w ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Nt(Ke, f & 1), n === null)
      return Xs(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, v ? (u = r.mode, v = r.child, E = { mode: "hidden", children: E }, !(u & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = E) : v = Xu(E, u, 0, null), n = Vo(n, u, o, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = Dd(o), r.memoizedState = zo, n) : Nd(r, E));
    if (f = n.memoizedState, f !== null && (w = f.dehydrated, w !== null))
      return Ky(n, r, E, u, w, f, o);
    if (v) {
      v = u.fallback, E = r.mode, f = n.child, w = f.sibling;
      var O = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = O, r.deletions = null) : (u = Ji(f, O), u.subtreeFlags = f.subtreeFlags & 14680064), w !== null ? v = Ji(w, v) : (v = Vo(v, E, o, null), v.flags |= 2), v.return = r, u.return = r, u.sibling = v, r.child = u, u = v, v = r.child, E = n.child.memoizedState, E = E === null ? Dd(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, v.memoizedState = E, v.childLanes = n.childLanes & ~o, r.memoizedState = zo, u;
    }
    return v = n.child, n = v.sibling, u = Ji(v, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Nd(n, r) {
    return r = Xu({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Dl(n, r, o, u) {
    return u !== null && vd(u), bl(r, n.child, null, o), n = Nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ky(n, r, o, u, f, v, E) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Hu(Error(y(422))), Dl(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = u.fallback, f = r.mode, u = Xu({ mode: "visible", children: u.children }, f, 0, null), v = Vo(v, f, E, null), v.flags |= 2, u.return = r, v.return = r, u.sibling = v, r.child = u, r.mode & 1 && bl(r, n.child, null, E), r.child.memoizedState = Dd(E), r.memoizedState = zo, v);
    if (!(r.mode & 1))
      return Dl(n, r, E, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u)
        var w = u.dgst;
      return u = w, v = Error(y(419)), u = Hu(v, u, void 0), Dl(n, r, E, u);
    }
    if (w = (E & n.childLanes) !== 0, xn || w) {
      if (u = ln, u !== null) {
        switch (E & -E) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (u.suspendedLanes | E) ? 0 : f, f !== 0 && f !== v.retryLane && (v.retryLane = f, di(n, f), fr(u, n, f, -1));
      }
      return Vd(), u = Hu(Error(y(421))), Dl(n, r, E, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ng.bind(null, n), f._reactRetry = r, null) : (n = v.treeContext, Ar = _a(f.nextSibling), Qr = r, Gt = !0, fa = null, n !== null && (Ur[or++] = Wn, Ur[or++] = fi, Ur[or++] = ca, Wn = n.id, fi = n.overflow, ca = r), r = Nd(r, u.children), r.flags |= 4096, r);
  }
  function Md(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), jn(n.return, r, o);
  }
  function wc(n, r, o, u, f) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: f } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = u, v.tail = o, v.tailMode = f);
  }
  function _d(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, v = u.tail;
    if (kn(n, r, u.children, o), u = Ke.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Md(n, o, r);
            else if (n.tag === 19)
              Md(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Nt(Ke, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = r.child, f = null; o !== null; )
            n = o.alternate, n !== null && on(n) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), wc(r, !1, f, o, v);
          break;
        case "backwards":
          for (o = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && on(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = o, o = f, f = n;
          }
          wc(r, !0, o, null, v);
          break;
        case "together":
          wc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function lr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function qn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), yi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, o = Ji(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Ji(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function hi(n, r, o) {
    switch (r.tag) {
      case 3:
        ch(r), an();
        break;
      case 5:
        Ge(r);
        break;
      case 1:
        tn(r.type) && Qs(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        Nt(Ia, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Nt(Ke, Ke.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? kd(n, r, o) : (Nt(Ke, Ke.current & 1), n = qn(n, r, o), n !== null ? n.sibling : null);
        Nt(Ke, Ke.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return _d(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Nt(Ke, Ke.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Lo(n, r, o);
    }
    return qn(n, r, o);
  }
  var Vu, Uo, va, Nn;
  Vu = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Uo = function() {
  }, va = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, Ro(La.current);
      var v = null;
      switch (o) {
        case "input":
          f = le(n, f), u = le(n, u), v = [];
          break;
        case "select":
          f = fe({}, f, { value: void 0 }), u = fe({}, u, { value: void 0 }), v = [];
          break;
        case "textarea":
          f = Un(n, f), u = Un(n, u), v = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = qs);
      }
      Ct(o, u);
      var E;
      o = null;
      for (V in f)
        if (!u.hasOwnProperty(V) && f.hasOwnProperty(V) && f[V] != null)
          if (V === "style") {
            var w = f[V];
            for (E in w)
              w.hasOwnProperty(E) && (o || (o = {}), o[E] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (x.hasOwnProperty(V) ? v || (v = []) : (v = v || []).push(V, null));
      for (V in u) {
        var O = u[V];
        if (w = f != null ? f[V] : void 0, u.hasOwnProperty(V) && O !== w && (O != null || w != null))
          if (V === "style")
            if (w) {
              for (E in w)
                !w.hasOwnProperty(E) || O && O.hasOwnProperty(E) || (o || (o = {}), o[E] = "");
              for (E in O)
                O.hasOwnProperty(E) && w[E] !== O[E] && (o || (o = {}), o[E] = O[E]);
            } else
              o || (v || (v = []), v.push(
                V,
                o
              )), o = O;
          else
            V === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, w = w ? w.__html : void 0, O != null && w !== O && (v = v || []).push(V, O)) : V === "children" ? typeof O != "string" && typeof O != "number" || (v = v || []).push(V, "" + O) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (x.hasOwnProperty(V) ? (O != null && V === "onScroll" && Wt("scroll", n), v || w === O || (v = [])) : (v = v || []).push(V, O));
      }
      o && (v = v || []).push("style", o);
      var V = v;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, Nn = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Iu(n, r) {
    if (!Gt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function ur(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Xy(n, r, o) {
    var u = r.pendingProps;
    switch (dd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ur(r), null;
      case 1:
        return tn(r.type) && sa(), ur(r), null;
      case 3:
        return u = r.stateNode, Yi(), Dt(dn), Dt(et), ic(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Zs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, fa !== null && (Ku(fa), fa = null))), Uo(n, r), ur(r), null;
      case 5:
        pt(r);
        var f = Ro(Cl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          va(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(y(166));
            return ur(r), null;
          }
          if (n = Ro(La.current), Zs(r)) {
            u = r.stateNode, o = r.type;
            var v = r.memoizedProps;
            switch (u[$a] = r, u[Co] = v, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Wt("cancel", u), Wt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < wu.length; f++)
                  Wt(wu[f], u);
                break;
              case "source":
                Wt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  u
                ), Wt("load", u);
                break;
              case "details":
                Wt("toggle", u);
                break;
              case "input":
                ct(u, v), Wt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!v.multiple }, Wt("invalid", u);
                break;
              case "textarea":
                en(u, v), Wt("invalid", u);
            }
            Ct(o, v), f = null;
            for (var E in v)
              if (v.hasOwnProperty(E)) {
                var w = v[E];
                E === "children" ? typeof w == "string" ? u.textContent !== w && (v.suppressHydrationWarning !== !0 && Ys(u.textContent, w, n), f = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (v.suppressHydrationWarning !== !0 && Ys(
                  u.textContent,
                  w,
                  n
                ), f = ["children", "" + w]) : x.hasOwnProperty(E) && w != null && E === "onScroll" && Wt("scroll", u);
              }
            switch (o) {
              case "input":
                nt(u), Sn(u, v, !0);
                break;
              case "textarea":
                nt(u), Bn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (u.onclick = qs);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Nr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(o, { is: u.is }) : (n = E.createElement(o), o === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, o), n[$a] = r, n[Co] = u, Vu(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = qt(o, u), o) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < wu.length; f++)
                    Wt(wu[f], n);
                  f = u;
                  break;
                case "source":
                  Wt("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), f = u;
                  break;
                case "details":
                  Wt("toggle", n), f = u;
                  break;
                case "input":
                  ct(n, u), f = le(n, u), Wt("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = fe({}, u, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  en(n, u), f = Un(n, u), Wt("invalid", n);
                  break;
                default:
                  f = u;
              }
              Ct(o, f), w = f;
              for (v in w)
                if (w.hasOwnProperty(v)) {
                  var O = w[v];
                  v === "style" ? ge(n, O) : v === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && Ra(n, O)) : v === "children" ? typeof O == "string" ? (o !== "textarea" || O !== "") && ar(n, O) : typeof O == "number" && ar(n, "" + O) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (x.hasOwnProperty(v) ? O != null && v === "onScroll" && Wt("scroll", n) : O != null && Y(n, v, O, E));
                }
              switch (o) {
                case "input":
                  nt(n), Sn(n, u, !1);
                  break;
                case "textarea":
                  nt(n), Bn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Vt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, v = u.value, v != null ? zt(n, !!u.multiple, v, !1) : u.defaultValue != null && zt(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = qs);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ur(r), null;
      case 6:
        if (n && r.stateNode != null)
          Nn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(y(166));
          if (o = Ro(Cl.current), Ro(La.current), Zs(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[$a] = r, (v = u.nodeValue !== o) && (n = Qr, n !== null))
              switch (n.tag) {
                case 3:
                  Ys(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ys(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            v && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[$a] = r, r.stateNode = u;
        }
        return ur(r), null;
      case 13:
        if (Dt(Ke), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Gt && Ar !== null && r.mode & 1 && !(r.flags & 128))
            Xv(), an(), r.flags |= 98560, v = !1;
          else if (v = Zs(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!v)
                throw Error(y(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v)
                throw Error(y(317));
              v[$a] = r;
            } else
              an(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ur(r), v = !1;
          } else
            fa !== null && (Ku(fa), fa = null), v = !0;
          if (!v)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ke.current & 1 ? _n === 0 && (_n = 3) : Vd())), r.updateQueue !== null && (r.flags |= 4), ur(r), null);
      case 4:
        return Yi(), Uo(n, r), n === null && yl(r.stateNode.containerInfo), ur(r), null;
      case 10:
        return Vi(r.type._context), ur(r), null;
      case 17:
        return tn(r.type) && sa(), ur(r), null;
      case 19:
        if (Dt(Ke), v = r.memoizedState, v === null)
          return ur(r), null;
        if (u = (r.flags & 128) !== 0, E = v.rendering, E === null)
          if (u)
            Iu(v, !1);
          else {
            if (_n !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = on(n), E !== null) {
                  for (r.flags |= 128, Iu(v, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    v = o, n = u, v.flags &= 14680066, E = v.alternate, E === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = E.childLanes, v.lanes = E.lanes, v.child = E.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = E.memoizedProps, v.memoizedState = E.memoizedState, v.updateQueue = E.updateQueue, v.type = E.type, n = E.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Nt(Ke, Ke.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            v.tail !== null && fn() > Ul && (r.flags |= 128, u = !0, Iu(v, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = on(E), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Iu(v, !0), v.tail === null && v.tailMode === "hidden" && !E.alternate && !Gt)
                return ur(r), null;
            } else
              2 * fn() - v.renderingStartTime > Ul && o !== 1073741824 && (r.flags |= 128, u = !0, Iu(v, !1), r.lanes = 4194304);
          v.isBackwards ? (E.sibling = r.child, r.child = E) : (o = v.last, o !== null ? o.sibling = E : r.child = E, v.last = E);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = fn(), r.sibling = null, o = Ke.current, Nt(Ke, u ? o & 1 | 2 : o & 1), r) : (ur(r), null);
      case 22:
      case 23:
        return $d(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Xr & 1073741824 && (ur(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ur(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function Ld(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return tn(r.type) && sa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Yi(), Dt(dn), Dt(et), ic(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return pt(r), null;
      case 13:
        if (Dt(Ke), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(y(340));
          an();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Dt(Ke), null;
      case 4:
        return Yi(), null;
      case 10:
        return Vi(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bu = !1, Mn = !1, fh = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function kl(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          vn(n, r, u);
        }
      else
        o.current = null;
  }
  function Wu(n, r, o) {
    try {
      o();
    } catch (u) {
      vn(n, r, u);
    }
  }
  var dh = !1;
  function ph(n, r) {
    if (ad = ho, n = $s(), li(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var f = u.anchorOffset, v = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, v.nodeType;
            } catch {
              o = null;
              break e;
            }
            var E = 0, w = -1, O = -1, V = 0, oe = 0, ue = n, ae = null;
            t:
              for (; ; ) {
                for (var we; ue !== o || f !== 0 && ue.nodeType !== 3 || (w = E + f), ue !== v || u !== 0 && ue.nodeType !== 3 || (O = E + u), ue.nodeType === 3 && (E += ue.nodeValue.length), (we = ue.firstChild) !== null; )
                  ae = ue, ue = we;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ae === o && ++V === f && (w = E), ae === v && ++oe === u && (O = E), (we = ue.nextSibling) !== null)
                    break;
                  ue = ae, ae = ue.parentNode;
                }
                ue = we;
              }
            o = w === -1 || O === -1 ? null : { start: w, end: O };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Eo = { focusedElem: n, selectionRange: o }, ho = !1, _e = r; _e !== null; )
      if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, _e = n;
      else
        for (; _e !== null; ) {
          r = _e;
          try {
            var Le = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Le !== null) {
                    var Pe = Le.memoizedProps, mn = Le.memoizedState, z = r.stateNode, k = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Pe : Gr(r.type, Pe), mn);
                    z.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var P = r.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (ve) {
            vn(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, _e = n;
            break;
          }
          _e = r.return;
        }
    return Le = dh, dh = !1, Le;
  }
  function Yu(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && Wu(r, o, v);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function qu(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function zd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[$a], delete r[Co], delete r[ld], delete r[By], delete r[ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Oc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || vh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Nl(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = qs));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Nl(n, r, o), n = n.sibling; n !== null; )
        Nl(n, r, o), n = n.sibling;
  }
  function Wa(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Wa(n, r, o), n = n.sibling; n !== null; )
        Wa(n, r, o), n = n.sibling;
  }
  var nn = null, Hn = !1;
  function ha(n, r, o) {
    for (o = o.child; o !== null; )
      Ml(n, r, o), o = o.sibling;
  }
  function Ml(n, r, o) {
    if (Oa && typeof Oa.onCommitFiberUnmount == "function")
      try {
        Oa.onCommitFiberUnmount(cu, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Mn || kl(o, r);
      case 6:
        var u = nn, f = Hn;
        nn = null, ha(n, r, o), nn = u, Hn = f, nn !== null && (Hn ? (n = nn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : nn.removeChild(o.stateNode));
        break;
      case 18:
        nn !== null && (Hn ? (n = nn, o = o.stateNode, n.nodeType === 8 ? Ai(n.parentNode, o) : n.nodeType === 1 && Ai(n, o), hu(n)) : Ai(nn, o.stateNode));
        break;
      case 4:
        u = nn, f = Hn, nn = o.stateNode.containerInfo, Hn = !0, ha(n, r, o), nn = u, Hn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mn && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var v = f, E = v.destroy;
            v = v.tag, E !== void 0 && (v & 2 || v & 4) && Wu(o, r, E), f = f.next;
          } while (f !== u);
        }
        ha(n, r, o);
        break;
      case 1:
        if (!Mn && (kl(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (w) {
            vn(o, r, w);
          }
        ha(n, r, o);
        break;
      case 21:
        ha(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Mn = (u = Mn) || o.memoizedState !== null, ha(n, r, o), Mn = u) : ha(n, r, o);
        break;
      default:
        ha(n, r, o);
    }
  }
  function mi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new fh()), r.forEach(function(u) {
        var f = rg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function za(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var f = o[u];
        try {
          var v = n, E = r, w = E;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  nn = w.stateNode, Hn = !1;
                  break e;
                case 3:
                  nn = w.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  nn = w.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              w = w.return;
            }
          if (nn === null)
            throw Error(y(160));
          Ml(v, E, f), nn = null, Hn = !1;
          var O = f.alternate;
          O !== null && (O.return = null), f.return = null;
        } catch (V) {
          vn(f, r, V);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        hh(r, n), r = r.sibling;
  }
  function hh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (za(r, n), Ya(n), u & 4) {
          try {
            Yu(3, n, n.return), qu(3, n);
          } catch (Pe) {
            vn(n, n.return, Pe);
          }
          try {
            Yu(5, n, n.return);
          } catch (Pe) {
            vn(n, n.return, Pe);
          }
        }
        break;
      case 1:
        za(r, n), Ya(n), u & 512 && o !== null && kl(o, o.return);
        break;
      case 5:
        if (za(r, n), Ya(n), u & 512 && o !== null && kl(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            ar(f, "");
          } catch (Pe) {
            vn(n, n.return, Pe);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var v = n.memoizedProps, E = o !== null ? o.memoizedProps : v, w = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null)
            try {
              w === "input" && v.type === "radio" && v.name != null && Lt(f, v), qt(w, E);
              var V = qt(w, v);
              for (E = 0; E < O.length; E += 2) {
                var oe = O[E], ue = O[E + 1];
                oe === "style" ? ge(f, ue) : oe === "dangerouslySetInnerHTML" ? Ra(f, ue) : oe === "children" ? ar(f, ue) : Y(f, oe, ue, V);
              }
              switch (w) {
                case "input":
                  It(f, v);
                  break;
                case "textarea":
                  Ut(f, v);
                  break;
                case "select":
                  var ae = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!v.multiple;
                  var we = v.value;
                  we != null ? zt(f, !!v.multiple, we, !1) : ae !== !!v.multiple && (v.defaultValue != null ? zt(
                    f,
                    !!v.multiple,
                    v.defaultValue,
                    !0
                  ) : zt(f, !!v.multiple, v.multiple ? [] : "", !1));
              }
              f[Co] = v;
            } catch (Pe) {
              vn(n, n.return, Pe);
            }
        }
        break;
      case 6:
        if (za(r, n), Ya(n), u & 4) {
          if (n.stateNode === null)
            throw Error(y(162));
          f = n.stateNode, v = n.memoizedProps;
          try {
            f.nodeValue = v;
          } catch (Pe) {
            vn(n, n.return, Pe);
          }
        }
        break;
      case 3:
        if (za(r, n), Ya(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            hu(r.containerInfo);
          } catch (Pe) {
            vn(n, n.return, Pe);
          }
        break;
      case 4:
        za(r, n), Ya(n);
        break;
      case 13:
        za(r, n), Ya(n), f = n.child, f.flags & 8192 && (v = f.memoizedState !== null, f.stateNode.isHidden = v, !v || f.alternate !== null && f.alternate.memoizedState !== null || (Pd = fn())), u & 4 && mi(n);
        break;
      case 22:
        if (oe = o !== null && o.memoizedState !== null, n.mode & 1 ? (Mn = (V = Mn) || oe, za(r, n), Mn = V) : za(r, n), Ya(n), u & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !oe && n.mode & 1)
            for (_e = n, oe = n.child; oe !== null; ) {
              for (ue = _e = oe; _e !== null; ) {
                switch (ae = _e, we = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Yu(4, ae, ae.return);
                    break;
                  case 1:
                    kl(ae, ae.return);
                    var Le = ae.stateNode;
                    if (typeof Le.componentWillUnmount == "function") {
                      u = ae, o = ae.return;
                      try {
                        r = u, Le.props = r.memoizedProps, Le.state = r.memoizedState, Le.componentWillUnmount();
                      } catch (Pe) {
                        vn(u, o, Pe);
                      }
                    }
                    break;
                  case 5:
                    kl(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      Ad(ue);
                      continue;
                    }
                }
                we !== null ? (we.return = ae, _e = we) : Ad(ue);
              }
              oe = oe.sibling;
            }
          e:
            for (oe = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (oe === null) {
                  oe = ue;
                  try {
                    f = ue.stateNode, V ? (v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (w = ue.stateNode, O = ue.memoizedProps.style, E = O != null && O.hasOwnProperty("display") ? O.display : null, w.style.display = dt("display", E));
                  } catch (Pe) {
                    vn(n, n.return, Pe);
                  }
                }
              } else if (ue.tag === 6) {
                if (oe === null)
                  try {
                    ue.stateNode.nodeValue = V ? "" : ue.memoizedProps;
                  } catch (Pe) {
                    vn(n, n.return, Pe);
                  }
              } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
                ue.child.return = ue, ue = ue.child;
                continue;
              }
              if (ue === n)
                break e;
              for (; ue.sibling === null; ) {
                if (ue.return === null || ue.return === n)
                  break e;
                oe === ue && (oe = null), ue = ue.return;
              }
              oe === ue && (oe = null), ue.sibling.return = ue.return, ue = ue.sibling;
            }
        }
        break;
      case 19:
        za(r, n), Ya(n), u & 4 && mi(n);
        break;
      case 21:
        break;
      default:
        za(
          r,
          n
        ), Ya(n);
    }
  }
  function Ya(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (vh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(y(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (ar(f, ""), u.flags &= -33);
            var v = Oc(n);
            Wa(n, v, f);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, w = Oc(n);
            Nl(n, w, E);
            break;
          default:
            throw Error(y(161));
        }
      } catch (O) {
        vn(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function mh(n, r, o) {
    _e = n, _l(n);
  }
  function _l(n, r, o) {
    for (var u = (n.mode & 1) !== 0; _e !== null; ) {
      var f = _e, v = f.child;
      if (f.tag === 22 && u) {
        var E = f.memoizedState !== null || Bu;
        if (!E) {
          var w = f.alternate, O = w !== null && w.memoizedState !== null || Mn;
          w = Bu;
          var V = Mn;
          if (Bu = E, (Mn = O) && !V)
            for (_e = f; _e !== null; )
              E = _e, O = E.child, E.tag === 22 && E.memoizedState !== null ? gh(f) : O !== null ? (O.return = E, _e = O) : gh(f);
          for (; v !== null; )
            _e = v, _l(v), v = v.sibling;
          _e = f, Bu = w, Mn = V;
        }
        yh(n);
      } else
        f.subtreeFlags & 8772 && v !== null ? (v.return = f, _e = v) : yh(n);
    }
  }
  function yh(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Mn || qu(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !Mn)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? o.memoizedProps : Gr(r.type, o.memoizedProps);
                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var v = r.updateQueue;
                v !== null && xo(r, v, u);
                break;
              case 3:
                var E = r.updateQueue;
                if (E !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  xo(r, E, o);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = w;
                  var O = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && o.focus();
                      break;
                    case "img":
                      O.src && (o.src = O.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var V = r.alternate;
                  if (V !== null) {
                    var oe = V.memoizedState;
                    if (oe !== null) {
                      var ue = oe.dehydrated;
                      ue !== null && hu(ue);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(y(163));
            }
          Mn || r.flags & 512 && zd(r);
        } catch (ae) {
          vn(r, r.return, ae);
        }
      }
      if (r === n) {
        _e = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, _e = o;
        break;
      }
      _e = r.return;
    }
  }
  function Ad(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r === n) {
        _e = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, _e = o;
        break;
      }
      _e = r.return;
    }
  }
  function gh(n) {
    for (; _e !== null; ) {
      var r = _e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              qu(4, r);
            } catch (O) {
              vn(r, o, O);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (O) {
                vn(r, f, O);
              }
            }
            var v = r.return;
            try {
              zd(r);
            } catch (O) {
              vn(r, v, O);
            }
            break;
          case 5:
            var E = r.return;
            try {
              zd(r);
            } catch (O) {
              vn(r, E, O);
            }
        }
      } catch (O) {
        vn(r, r.return, O);
      }
      if (r === n) {
        _e = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, _e = w;
        break;
      }
      _e = r.return;
    }
  }
  var Dc = Math.ceil, Qu = Q.ReactCurrentDispatcher, Fd = Q.ReactCurrentOwner, sr = Q.ReactCurrentBatchConfig, yt = 0, ln = null, pn = null, $n = 0, Xr = 0, Ll = ut(0), _n = 0, Gu = null, yi = 0, kc = 0, zl = 0, Ao = null, gr = null, Pd = 0, Ul = 1 / 0, gi = null, Nc = !1, Fo = null, qa = null, Ki = !1, Xi = null, Mc = 0, Al = 0, _c = null, Po = -1, jo = 0;
  function cr() {
    return yt & 6 ? fn() : Po !== -1 ? Po : Po = fn();
  }
  function Rn(n) {
    return n.mode & 1 ? yt & 2 && $n !== 0 ? $n & -$n : Js.transition !== null ? (jo === 0 && (jo = ks()), jo) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Pf(n.type)), n) : 1;
  }
  function fr(n, r, o, u) {
    if (50 < Al)
      throw Al = 0, _c = null, Error(y(185));
    vo(n, o, u), (!(yt & 2) || n !== ln) && (n === ln && (!(yt & 2) && (kc |= o), _n === 4 && ma(n, $n)), dr(n, u), o === 1 && yt === 0 && !(r.mode & 1) && (Ul = fn() + 500, Pn && Lr()));
  }
  function dr(n, r) {
    var o = n.callbackNode;
    Ds(n, r);
    var u = Da(n, n === ln ? $n : 0);
    if (u === 0)
      o !== null && iv(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && iv(o), r === 1)
        n.tag === 0 ? cd(Sh.bind(null, n)) : sd(Sh.bind(null, n)), od(function() {
          !(yt & 6) && Lr();
        }), o = null;
      else {
        switch (Uf(u)) {
          case 1:
            o = ri;
            break;
          case 4:
            o = mt;
            break;
          case 16:
            o = Mi;
            break;
          case 536870912:
            o = Mf;
            break;
          default:
            o = Mi;
        }
        o = Bd(o, Fl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Fl(n, r) {
    if (Po = -1, jo = 0, yt & 6)
      throw Error(y(327));
    var o = n.callbackNode;
    if (jl() && n.callbackNode !== o)
      return null;
    var u = Da(n, n === ln ? $n : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = zc(n, u);
    else {
      r = u;
      var f = yt;
      yt |= 2;
      var v = Lc();
      (ln !== n || $n !== r) && (gi = null, Ul = fn() + 500, Ho(n, r));
      do
        try {
          Jy();
          break;
        } catch (w) {
          Eh(n, w);
        }
      while (1);
      md(), Qu.current = v, yt = f, pn !== null ? r = 0 : (ln = null, $n = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (f = Lf(n), f !== 0 && (u = f, r = jd(n, f))), r === 1)
        throw o = Gu, Ho(n, 0), ma(n, u), dr(n, fn()), o;
      if (r === 6)
        ma(n, u);
      else {
        if (f = n.current.alternate, !(u & 30) && !Hd(f) && (r = zc(n, u), r === 2 && (v = Lf(n), v !== 0 && (u = v, r = jd(n, v))), r === 1))
          throw o = Gu, Ho(n, 0), ma(n, u), dr(n, fn()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            $o(n, gr, gi);
            break;
          case 3:
            if (ma(n, u), (u & 130023424) === u && (r = Pd + 500 - fn(), 10 < r)) {
              if (Da(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                cr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = bo($o.bind(null, n, gr, gi), r);
              break;
            }
            $o(n, gr, gi);
            break;
          case 4:
            if (ma(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var E = 31 - ra(u);
              v = 1 << E, E = r[E], E > f && (f = E), u &= ~v;
            }
            if (u = f, u = fn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Dc(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = bo($o.bind(null, n, gr, gi), u);
              break;
            }
            $o(n, gr, gi);
            break;
          case 5:
            $o(n, gr, gi);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return dr(n, fn()), n.callbackNode === o ? Fl.bind(null, n) : null;
  }
  function jd(n, r) {
    var o = Ao;
    return n.current.memoizedState.isDehydrated && (Ho(n, r).flags |= 256), n = zc(n, r), n !== 2 && (r = gr, gr = o, r !== null && Ku(r)), n;
  }
  function Ku(n) {
    gr === null ? gr = n : gr.push.apply(gr, n);
  }
  function Hd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var f = o[u], v = f.getSnapshot;
            f = f.value;
            try {
              if (!oa(v(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ma(n, r) {
    for (r &= ~zl, r &= ~kc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ra(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Sh(n) {
    if (yt & 6)
      throw Error(y(327));
    jl();
    var r = Da(n, 0);
    if (!(r & 1))
      return dr(n, fn()), null;
    var o = zc(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Lf(n);
      u !== 0 && (r = u, o = jd(n, u));
    }
    if (o === 1)
      throw o = Gu, Ho(n, 0), ma(n, r), dr(n, fn()), o;
    if (o === 6)
      throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, $o(n, gr, gi), dr(n, fn()), null;
  }
  function Pl(n, r) {
    var o = yt;
    yt |= 1;
    try {
      return n(r);
    } finally {
      yt = o, yt === 0 && (Ul = fn() + 500, Pn && Lr());
    }
  }
  function Zi(n) {
    Xi !== null && Xi.tag === 0 && !(yt & 6) && jl();
    var r = yt;
    yt |= 1;
    var o = sr.transition, u = _t;
    try {
      if (sr.transition = null, _t = 1, n)
        return n();
    } finally {
      _t = u, sr.transition = o, yt = r, !(yt & 6) && Lr();
    }
  }
  function $d() {
    Xr = Ll.current, Dt(Ll);
  }
  function Ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, qv(o)), pn !== null)
      for (o = pn.return; o !== null; ) {
        var u = o;
        switch (dd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && sa();
            break;
          case 3:
            Yi(), Dt(dn), Dt(et), ic();
            break;
          case 5:
            pt(u);
            break;
          case 4:
            Yi();
            break;
          case 13:
            Dt(Ke);
            break;
          case 19:
            Dt(Ke);
            break;
          case 10:
            Vi(u.type._context);
            break;
          case 22:
          case 23:
            $d();
        }
        o = o.return;
      }
    if (ln = n, pn = n = Ji(n.current, null), $n = Xr = r, _n = 0, Gu = null, zl = kc = yi = 0, gr = Ao = null, Yn !== null) {
      for (r = 0; r < Yn.length; r++)
        if (o = Yn[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var f = u.next, v = o.pending;
          if (v !== null) {
            var E = v.next;
            v.next = f, u.next = E;
          }
          o.pending = u;
        }
      Yn = null;
    }
    return n;
  }
  function Eh(n, r) {
    do {
      var o = pn;
      try {
        if (md(), oc.current = Cc, Xe) {
          for (var u = Kt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Xe = !1;
        }
        if (wo = 0, St = ee = Kt = null, Ba = !1, Kr = 0, Fd.current = null, o === null || o.return === null) {
          _n = 1, Gu = r, pn = null;
          break;
        }
        e: {
          var v = n, E = o.return, w = o, O = r;
          if (r = $n, w.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var V = O, oe = w, ue = oe.tag;
            if (!(oe.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ae = oe.alternate;
              ae ? (oe.updateQueue = ae.updateQueue, oe.memoizedState = ae.memoizedState, oe.lanes = ae.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var we = Rd(E);
            if (we !== null) {
              we.flags &= -257, wd(we, E, w, v, r), we.mode & 1 && uh(v, V, r), r = we, O = V;
              var Le = r.updateQueue;
              if (Le === null) {
                var Pe = /* @__PURE__ */ new Set();
                Pe.add(O), r.updateQueue = Pe;
              } else
                Le.add(O);
              break e;
            } else {
              if (!(r & 1)) {
                uh(v, V, r), Vd();
                break e;
              }
              O = Error(y(426));
            }
          } else if (Gt && w.mode & 1) {
            var mn = Rd(E);
            if (mn !== null) {
              !(mn.flags & 65536) && (mn.flags |= 256), wd(mn, E, w, v, r), vd(wl(O, w));
              break e;
            }
          }
          v = O = wl(O, w), _n !== 4 && (_n = 2), Ao === null ? Ao = [v] : Ao.push(v), v = E;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var z = lh(v, O, r);
                Sd(v, z);
                break e;
              case 1:
                w = O;
                var k = v.type, P = v.stateNode;
                if (!(v.flags & 128) && (typeof k.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (qa === null || !qa.has(P)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var ve = $u(v, w, r);
                  Sd(v, ve);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Id(o);
      } catch (je) {
        r = je, pn === o && o !== null && (pn = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Lc() {
    var n = Qu.current;
    return Qu.current = Cc, n === null ? Cc : n;
  }
  function Vd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), ln === null || !(yi & 268435455) && !(kc & 268435455) || ma(ln, $n);
  }
  function zc(n, r) {
    var o = yt;
    yt |= 2;
    var u = Lc();
    (ln !== n || $n !== r) && (gi = null, Ho(n, r));
    do
      try {
        Zy();
        break;
      } catch (f) {
        Eh(n, f);
      }
    while (1);
    if (md(), yt = o, Qu.current = u, pn !== null)
      throw Error(y(261));
    return ln = null, $n = 0, _n;
  }
  function Zy() {
    for (; pn !== null; )
      bh(pn);
  }
  function Jy() {
    for (; pn !== null && !Cy(); )
      bh(pn);
  }
  function bh(n) {
    var r = Th(n.alternate, n, Xr);
    n.memoizedProps = n.pendingProps, r === null ? Id(n) : pn = r, Fd.current = null;
  }
  function Id(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ld(o, r), o !== null) {
          o.flags &= 32767, pn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, pn = null;
          return;
        }
      } else if (o = Xy(o, r, Xr), o !== null) {
        pn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function $o(n, r, o) {
    var u = _t, f = sr.transition;
    try {
      sr.transition = null, _t = 1, eg(n, r, o, u);
    } finally {
      sr.transition = f, _t = u;
    }
    return null;
  }
  function eg(n, r, o, u) {
    do
      jl();
    while (Xi !== null);
    if (yt & 6)
      throw Error(y(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = o.lanes | o.childLanes;
    if (wy(n, v), n === ln && (pn = ln = null, $n = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Ki || (Ki = !0, Bd(Mi, function() {
      return jl(), null;
    })), v = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || v) {
      v = sr.transition, sr.transition = null;
      var E = _t;
      _t = 1;
      var w = yt;
      yt |= 4, Fd.current = null, ph(n, o), hh(o, n), Vs(Eo), ho = !!ad, Eo = ad = null, n.current = o, mh(o), Ty(), yt = w, _t = E, sr.transition = v;
    } else
      n.current = o;
    if (Ki && (Ki = !1, Xi = n, Mc = f), v = n.pendingLanes, v === 0 && (qa = null), lv(o.stateNode), dr(n, fn()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Nc)
      throw Nc = !1, n = Fo, Fo = null, n;
    return Mc & 1 && n.tag !== 0 && jl(), v = n.pendingLanes, v & 1 ? n === _c ? Al++ : (Al = 0, _c = n) : Al = 0, Lr(), null;
  }
  function jl() {
    if (Xi !== null) {
      var n = Uf(Mc), r = sr.transition, o = _t;
      try {
        if (sr.transition = null, _t = 16 > n ? 16 : n, Xi === null)
          var u = !1;
        else {
          if (n = Xi, Xi = null, Mc = 0, yt & 6)
            throw Error(y(331));
          var f = yt;
          for (yt |= 4, _e = n.current; _e !== null; ) {
            var v = _e, E = v.child;
            if (_e.flags & 16) {
              var w = v.deletions;
              if (w !== null) {
                for (var O = 0; O < w.length; O++) {
                  var V = w[O];
                  for (_e = V; _e !== null; ) {
                    var oe = _e;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yu(8, oe, v);
                    }
                    var ue = oe.child;
                    if (ue !== null)
                      ue.return = oe, _e = ue;
                    else
                      for (; _e !== null; ) {
                        oe = _e;
                        var ae = oe.sibling, we = oe.return;
                        if (Ud(oe), oe === V) {
                          _e = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = we, _e = ae;
                          break;
                        }
                        _e = we;
                      }
                  }
                }
                var Le = v.alternate;
                if (Le !== null) {
                  var Pe = Le.child;
                  if (Pe !== null) {
                    Le.child = null;
                    do {
                      var mn = Pe.sibling;
                      Pe.sibling = null, Pe = mn;
                    } while (Pe !== null);
                  }
                }
                _e = v;
              }
            }
            if (v.subtreeFlags & 2064 && E !== null)
              E.return = v, _e = E;
            else
              e:
                for (; _e !== null; ) {
                  if (v = _e, v.flags & 2048)
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yu(9, v, v.return);
                    }
                  var z = v.sibling;
                  if (z !== null) {
                    z.return = v.return, _e = z;
                    break e;
                  }
                  _e = v.return;
                }
          }
          var k = n.current;
          for (_e = k; _e !== null; ) {
            E = _e;
            var P = E.child;
            if (E.subtreeFlags & 2064 && P !== null)
              P.return = E, _e = P;
            else
              e:
                for (E = k; _e !== null; ) {
                  if (w = _e, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          qu(9, w);
                      }
                    } catch (je) {
                      vn(w, w.return, je);
                    }
                  if (w === E) {
                    _e = null;
                    break e;
                  }
                  var ve = w.sibling;
                  if (ve !== null) {
                    ve.return = w.return, _e = ve;
                    break e;
                  }
                  _e = w.return;
                }
          }
          if (yt = f, Lr(), Oa && typeof Oa.onPostCommitFiberRoot == "function")
            try {
              Oa.onPostCommitFiberRoot(cu, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        _t = o, sr.transition = r;
      }
    }
    return !1;
  }
  function Ch(n, r, o) {
    r = wl(o, r), r = lh(n, r, 1), n = Bi(n, r, 1), r = cr(), n !== null && (vo(n, 1, r), dr(n, r));
  }
  function vn(n, r, o) {
    if (n.tag === 3)
      Ch(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Ch(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (qa === null || !qa.has(u))) {
            n = wl(o, n), n = $u(r, n, 1), r = Bi(r, n, 1), n = cr(), r !== null && (vo(r, 1, n), dr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function tg(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = cr(), n.pingedLanes |= n.suspendedLanes & o, ln === n && ($n & o) === o && (_n === 4 || _n === 3 && ($n & 130023424) === $n && 500 > fn() - Pd ? Ho(n, 0) : zl |= o), dr(n, r);
  }
  function Uc(n, r) {
    r === 0 && (n.mode & 1 ? (r = ll, ll <<= 1, !(ll & 130023424) && (ll = 4194304)) : r = 1);
    var o = cr();
    n = di(n, r), n !== null && (vo(n, r, o), dr(n, o));
  }
  function ng(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Uc(n, o);
  }
  function rg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(r), Uc(n, o);
  }
  var Th;
  Th = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || dn.current)
        xn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return xn = !1, hi(n, r, o);
        xn = !!(n.flags & 131072);
      }
    else
      xn = !1, Gt && r.flags & 1048576 && fd(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        lr(n, r), n = r.pendingProps;
        var f = ua(r, et.current);
        Se(r, o), f = qi(null, r, u, n, f, o);
        var v = ko();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, tn(u) ? (v = !0, Qs(r)) : v = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, gd(r), f.updater = nc, r.stateNode = f, f._reactInternals = r, rc(r, u, n, o), r = sh(null, r, u, !0, v, o)) : (r.tag = 0, Gt && v && Gs(r), kn(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (lr(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = ig(u), n = Gr(u, n), f) {
            case 0:
              r = Ol(null, r, u, n, o);
              break e;
            case 1:
              r = Od(null, r, u, n, o);
              break e;
            case 11:
              r = Gi(null, r, u, n, o);
              break e;
            case 14:
              r = xc(null, r, u, Gr(u.type, n), o);
              break e;
          }
          throw Error(y(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Gr(u, f), Ol(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Gr(u, f), Od(n, r, u, f, o);
      case 3:
        e: {
          if (ch(r), n === null)
            throw Error(y(387));
          u = r.pendingProps, v = r.memoizedState, f = v.element, Dn(n, r), Wi(r, u, null, o);
          var E = r.memoizedState;
          if (u = E.element, v.isDehydrated)
            if (v = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
              f = wl(Error(y(423)), r), r = Rc(n, r, u, o, f);
              break e;
            } else if (u !== f) {
              f = wl(Error(y(424)), r), r = Rc(n, r, u, o, f);
              break e;
            } else
              for (Ar = _a(r.stateNode.containerInfo.firstChild), Qr = r, Gt = !0, fa = null, o = ih(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (an(), u === f) {
              r = qn(n, r, o);
              break e;
            }
            kn(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ge(r), n === null && Xs(r), u = r.type, f = r.pendingProps, v = n !== null ? n.memoizedProps : null, E = f.children, ku(u, f) ? E = null : v !== null && ku(u, v) && (r.flags |= 32), st(n, r), kn(n, r, E, o), r.child;
      case 6:
        return n === null && Xs(r), null;
      case 13:
        return kd(n, r, o);
      case 4:
        return bd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = bl(r, null, u, o) : kn(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Gr(u, f), Gi(n, r, u, f, o);
      case 7:
        return kn(n, r, r.pendingProps, o), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, v = r.memoizedProps, E = f.value, Nt(Ia, u._currentValue), u._currentValue = E, v !== null)
            if (oa(v.value, E)) {
              if (v.children === f.children && !dn.current) {
                r = qn(n, r, o);
                break e;
              }
            } else
              for (v = r.child, v !== null && (v.return = r); v !== null; ) {
                var w = v.dependencies;
                if (w !== null) {
                  E = v.child;
                  for (var O = w.firstContext; O !== null; ) {
                    if (O.context === u) {
                      if (v.tag === 1) {
                        O = pi(-1, o & -o), O.tag = 2;
                        var V = v.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var oe = V.pending;
                          oe === null ? O.next = O : (O.next = oe.next, oe.next = O), V.pending = O;
                        }
                      }
                      v.lanes |= o, O = v.alternate, O !== null && (O.lanes |= o), jn(
                        v.return,
                        o,
                        r
                      ), w.lanes |= o;
                      break;
                    }
                    O = O.next;
                  }
                } else if (v.tag === 10)
                  E = v.type === r.type ? null : v.child;
                else if (v.tag === 18) {
                  if (E = v.return, E === null)
                    throw Error(y(341));
                  E.lanes |= o, w = E.alternate, w !== null && (w.lanes |= o), jn(E, o, r), E = v.sibling;
                } else
                  E = v.child;
                if (E !== null)
                  E.return = v;
                else
                  for (E = v; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (v = E.sibling, v !== null) {
                      v.return = E.return, E = v;
                      break;
                    }
                    E = E.return;
                  }
                v = E;
              }
          kn(n, r, f.children, o), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, Se(r, o), f = hn(f), u = u(f), r.flags |= 1, kn(n, r, u, o), r.child;
      case 14:
        return u = r.type, f = Gr(u, r.pendingProps), f = Gr(u.type, f), xc(n, r, u, f, o);
      case 15:
        return jr(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Gr(u, f), lr(n, r), r.tag = 1, tn(u) ? (n = !0, Qs(r)) : n = !1, Se(r, o), th(r, u, f), rc(r, u, f, o), sh(null, r, u, !0, n, o);
      case 19:
        return _d(n, r, o);
      case 22:
        return Lo(n, r, o);
    }
    throw Error(y(156, r.tag));
  };
  function Bd(n, r) {
    return Nf(n, r);
  }
  function ag(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ya(n, r, o, u) {
    return new ag(n, r, o, u);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ig(n) {
    if (typeof n == "function")
      return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ve)
        return 11;
      if (n === Te)
        return 14;
    }
    return 2;
  }
  function Ji(n, r) {
    var o = n.alternate;
    return o === null ? (o = ya(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ac(n, r, o, u, f, v) {
    var E = 2;
    if (u = n, typeof n == "function")
      Wd(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case re:
            return Vo(o.children, f, v, r);
          case De:
            E = 8, f |= 8;
            break;
          case $e:
            return n = ya(12, o, r, f | 2), n.elementType = $e, n.lanes = v, n;
          case de:
            return n = ya(13, o, r, f), n.elementType = de, n.lanes = v, n;
          case me:
            return n = ya(19, o, r, f), n.elementType = me, n.lanes = v, n;
          case Fe:
            return Xu(o, f, v, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ae:
                  E = 10;
                  break e;
                case Me:
                  E = 9;
                  break e;
                case Ve:
                  E = 11;
                  break e;
                case Te:
                  E = 14;
                  break e;
                case Ce:
                  E = 16, u = null;
                  break e;
              }
            throw Error(y(130, n == null ? n : typeof n, ""));
        }
    return r = ya(E, o, r, f), r.elementType = n, r.type = u, r.lanes = v, r;
  }
  function Vo(n, r, o, u) {
    return n = ya(7, n, u, r), n.lanes = o, n;
  }
  function Xu(n, r, o, u) {
    return n = ya(22, n, u, r), n.elementType = Fe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Zu(n, r, o) {
    return n = ya(6, n, null, r), n.lanes = o, n;
  }
  function Io(n, r, o) {
    return r = ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function og(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zf(0), this.expirationTimes = zf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zf(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Fc(n, r, o, u, f, v, E, w, O) {
    return n = new og(n, r, o, w, O), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = ya(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(v), n;
  }
  function xh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ce, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function Yd(n) {
    if (!n)
      return Va;
    n = n._reactInternals;
    e: {
      if (Ha(n) !== n || n.tag !== 1)
        throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (tn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (tn(o))
        return _u(n, o, r);
    }
    return r;
  }
  function Rh(n, r, o, u, f, v, E, w, O) {
    return n = Fc(o, u, !0, n, f, v, E, w, O), n.context = Yd(null), o = n.current, u = cr(), f = Rn(o), v = pi(u, f), v.callback = r ?? null, Bi(o, v, f), n.current.lanes = f, vo(n, f, u), dr(n, u), n;
  }
  function Ju(n, r, o, u) {
    var f = r.current, v = cr(), E = Rn(f);
    return o = Yd(o), r.context === null ? r.context = o : r.pendingContext = o, r = pi(v, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Bi(f, r, E), n !== null && (fr(n, f, E, v), tc(n, f, E)), E;
  }
  function Pc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function wh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function qd(n, r) {
    wh(n, r), (n = n.alternate) && wh(n, r);
  }
  function Oh() {
    return null;
  }
  var Qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function jc(n) {
    this._internalRoot = n;
  }
  Si.prototype.render = jc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(y(409));
    Ju(n, r, null, null);
  }, Si.prototype.unmount = jc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Zi(function() {
        Ju(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function Si(n) {
    this._internalRoot = n;
  }
  Si.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < At.length && r !== 0 && r < At[o].priority; o++)
        ;
      At.splice(o, 0, n), o === 0 && dv(n);
    }
  };
  function Gd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Hc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dh() {
  }
  function lg(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var v = u;
        u = function() {
          var V = Pc(E);
          v.call(V);
        };
      }
      var E = Rh(r, u, n, 0, null, !1, !1, "", Dh);
      return n._reactRootContainer = E, n[ci] = E.current, yl(n.nodeType === 8 ? n.parentNode : n), Zi(), E;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var V = Pc(O);
        w.call(V);
      };
    }
    var O = Fc(n, 0, !1, null, null, !1, !1, "", Dh);
    return n._reactRootContainer = O, n[ci] = O.current, yl(n.nodeType === 8 ? n.parentNode : n), Zi(function() {
      Ju(r, O, o, u);
    }), O;
  }
  function $c(n, r, o, u, f) {
    var v = o._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof f == "function") {
        var w = f;
        f = function() {
          var O = Pc(E);
          w.call(O);
        };
      }
      Ju(r, E, n, f);
    } else
      E = lg(o, r, n, f, u);
    return Pc(E);
  }
  cv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = po(r.pendingLanes);
          o !== 0 && (fu(r, o | 1), dr(r, fn()), !(yt & 6) && (Ul = fn() + 500, Lr()));
        }
        break;
      case 13:
        Zi(function() {
          var u = di(n, 1);
          if (u !== null) {
            var f = cr();
            fr(u, n, 1, f);
          }
        }), qd(n, 1);
    }
  }, Ns = function(n) {
    if (n.tag === 13) {
      var r = di(n, 134217728);
      if (r !== null) {
        var o = cr();
        fr(r, n, 134217728, o);
      }
      qd(n, 134217728);
    }
  }, Bt = function(n) {
    if (n.tag === 13) {
      var r = Rn(n), o = di(n, r);
      if (o !== null) {
        var u = cr();
        fr(o, n, r, u);
      }
      qd(n, r);
    }
  }, fv = function() {
    return _t;
  }, Af = function(n, r) {
    var o = _t;
    try {
      return _t = n, r();
    } finally {
      _t = o;
    }
  }, ja = function(n, r, o) {
    switch (r) {
      case "input":
        if (It(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = We(u);
              if (!f)
                throw Error(y(90));
              xt(u), It(u, f);
            }
          }
        }
        break;
      case "textarea":
        Ut(n, o);
        break;
      case "select":
        r = o.value, r != null && zt(n, !!o.multiple, r, !1);
    }
  }, tv = Pl, nv = Zi;
  var ug = { usingClientEntryPoint: !1, Events: [Mu, gl, We, Ts, xs, Pl] }, Hl = { findFiberByHostInstance: la, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, sg = { bundleType: Hl.bundleType, version: Hl.version, rendererPackageName: Hl.rendererPackageName, rendererConfig: Hl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Q.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = rv(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hl.findFiberByHostInstance || Oh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        cu = Vc.inject(sg), Oa = Vc;
      } catch {
      }
  }
  return Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug, Ta.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gd(r))
      throw Error(y(200));
    return xh(n, r, null, o);
  }, Ta.createRoot = function(n, r) {
    if (!Gd(n))
      throw Error(y(299));
    var o = !1, u = "", f = Qd;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Fc(n, 1, !1, null, null, o, !1, u, f), n[ci] = r.current, yl(n.nodeType === 8 ? n.parentNode : n), new jc(r);
  }, Ta.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = rv(r), n = n === null ? null : n.stateNode, n;
  }, Ta.flushSync = function(n) {
    return Zi(n);
  }, Ta.hydrate = function(n, r, o) {
    if (!Hc(r))
      throw Error(y(200));
    return $c(null, n, r, !0, o);
  }, Ta.hydrateRoot = function(n, r, o) {
    if (!Gd(n))
      throw Error(y(405));
    var u = o != null && o.hydratedSources || null, f = !1, v = "", E = Qd;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), r = Rh(r, null, n, 1, o ?? null, f, !1, v, E), n[ci] = r.current, yl(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
          o,
          f
        );
    return new Si(r);
  }, Ta.render = function(n, r, o) {
    if (!Hc(r))
      throw Error(y(200));
    return $c(null, n, r, !1, o);
  }, Ta.unmountComponentAtNode = function(n) {
    if (!Hc(n))
      throw Error(y(40));
    return n._reactRootContainer ? (Zi(function() {
      $c(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, Ta.unstable_batchedUpdates = Pl, Ta.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Hc(o))
      throw Error(y(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(y(38));
    return $c(n, r, o, !1, u);
  }, Ta.version = "18.2.0-next-9e3b772b8-20220608", Ta;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function $N() {
  return hx || (hx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = W, h = Zx(), y = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function x(e) {
      C = e;
    }
    function R(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        L("warn", e, a);
      }
    }
    function S(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        L("error", e, a);
      }
    }
    function L(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var _ = 0, M = 1, K = 2, F = 3, I = 4, B = 5, J = 6, ie = 7, $ = 8, he = 9, ye = 10, Y = 11, Q = 12, te = 13, ce = 14, re = 15, De = 16, $e = 17, Ae = 18, Me = 19, Ve = 21, de = 22, me = 23, Te = 24, Ce = 25, Fe = !0, G = !1, pe = !1, fe = !1, it = !1, Ze = !0, ht = !1, lt = !1, kt = !0, vt = !0, rn = !0, Vt = /* @__PURE__ */ new Set(), Jt = {}, gn = {};
    function nt(e, t) {
      xt(e, t), xt(e + "Capture", t);
    }
    function xt(e, t) {
      Jt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Jt[e] = t;
      {
        var a = e.toLowerCase();
        gn[a] = e, e === "onDoubleClick" && (gn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Vt.add(t[i]);
    }
    var Qe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", le = Object.prototype.hasOwnProperty;
    function ct(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Lt(e) {
      try {
        return It(e), !1;
      } catch {
        return !0;
      }
    }
    function It(e) {
      return "" + e;
    }
    function Sn(e, t) {
      if (Lt(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), It(e);
    }
    function nr(e) {
      if (Lt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ct(e)), It(e);
    }
    function rr(e, t) {
      if (Lt(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), It(e);
    }
    function zt(e, t) {
      if (Lt(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), It(e);
    }
    function Un(e) {
      if (Lt(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ct(e)), It(e);
    }
    function en(e) {
      if (Lt(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", ct(e)), It(e);
    }
    var Ut = 0, Bn = 1, Nr = 2, En = 3, ft = 4, Ra = 5, ar = 6, be = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ie = be + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dt = new RegExp("^[" + be + "][" + Ie + "]*$"), ge = {}, Ye = {};
    function Ct(e) {
      return le.call(Ye, e) ? !0 : le.call(ge, e) ? !1 : dt.test(e) ? (Ye[e] = !0, !0) : (ge[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function qt(e, t, a) {
      return t !== null ? t.type === Ut : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === Ut)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function sn(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case En:
            return !t;
          case ft:
            return t === !1;
          case Ra:
            return isNaN(t);
          case ar:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ja(e) {
      return cn.hasOwnProperty(e) ? cn[e] : null;
    }
    function bn(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Nr || t === En || t === ft, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var cn = {}, ev = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ev.forEach(function(e) {
      cn[e] = new bn(
        e,
        Ut,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      cn[t] = new bn(
        t,
        Bn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      cn[e] = new bn(
        e,
        Nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      cn[e] = new bn(
        e,
        Nr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      cn[e] = new bn(
        e,
        En,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new bn(
        e,
        En,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new bn(
        e,
        ft,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      cn[e] = new bn(
        e,
        ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      cn[e] = new bn(
        e,
        Ra,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ts = /[\-\:]([a-z])/g, xs = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ts, xs);
      cn[t] = new bn(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ts, xs);
      cn[t] = new bn(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ts, xs);
      cn[t] = new bn(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      cn[e] = new bn(
        e,
        Bn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tv = "xlinkHref";
    cn[tv] = new bn(
      "xlinkHref",
      Bn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      cn[e] = new bn(
        e,
        Bn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var nv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Rs = !1;
    function Of(e) {
      !Rs && nv.test(e) && (Rs = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function lu(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Sn(a, t), i.sanitizeURL && Of("" + a);
        var s = i.attributeName, d = null;
        if (i.type === ft) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : sn(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (sn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === En)
            return a;
          d = e.getAttribute(s);
        }
        return sn(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function ws(e, t, a, i) {
      {
        if (!Ct(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Sn(a, t), l === "" + a ? a : l;
      }
    }
    function fo(e, t, a, i) {
      var l = ja(t);
      if (!qt(t, l, i)) {
        if (sn(t, a, l, i) && (a = null), i || l === null) {
          if (Ct(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Sn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var m = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[m] = g === En ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var b = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var N = l.type, D;
          N === En || N === ft && a === !0 ? D = "" : (Sn(a, b), D = "" + a, l.sanitizeURL && Of(D.toString())), T ? e.setAttributeNS(T, b, D) : e.setAttribute(b, D);
        }
      }
    }
    var rl = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ni = Symbol.for("react.fragment"), al = Symbol.for("react.strict_mode"), uu = Symbol.for("react.profiler"), Df = Symbol.for("react.provider"), kf = Symbol.for("react.context"), il = Symbol.for("react.forward_ref"), Ha = Symbol.for("react.suspense"), su = Symbol.for("react.suspense_list"), ol = Symbol.for("react.memo"), yr = Symbol.for("react.lazy"), rv = Symbol.for("react.scope"), av = Symbol.for("react.debug_trace_mode"), Nf = Symbol.for("react.offscreen"), iv = Symbol.for("react.legacy_hidden"), Cy = Symbol.for("react.cache"), Ty = Symbol.for("react.tracing_marker"), fn = Symbol.iterator, xy = "@@iterator";
    function ri(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = fn && e[fn] || e[xy];
      return typeof t == "function" ? t : null;
    }
    var mt = Object.assign, Mi = 0, ov, Mf, cu, Oa, lv, ra, uv;
    function sv() {
    }
    sv.__reactDisabledLog = !0;
    function Ry() {
      {
        if (Mi === 0) {
          ov = console.log, Mf = console.info, cu = console.warn, Oa = console.error, lv = console.group, ra = console.groupCollapsed, uv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: sv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Mi++;
      }
    }
    function Os() {
      {
        if (Mi--, Mi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, e, {
              value: ov
            }),
            info: mt({}, e, {
              value: Mf
            }),
            warn: mt({}, e, {
              value: cu
            }),
            error: mt({}, e, {
              value: Oa
            }),
            group: mt({}, e, {
              value: lv
            }),
            groupCollapsed: mt({}, e, {
              value: ra
            }),
            groupEnd: mt({}, e, {
              value: uv
            })
          });
        }
        Mi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ll = y.ReactCurrentDispatcher, po;
    function Da(e, t, a) {
      {
        if (po === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            po = i && i[1] || "";
          }
        return `
` + po + e;
      }
    }
    var _f = !1, Ds;
    {
      var Lf = typeof WeakMap == "function" ? WeakMap : Map;
      Ds = new Lf();
    }
    function ks(e, t) {
      if (!e || _f)
        return "";
      {
        var a = Ds.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      _f = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ll.current, ll.current = null, Ry();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (H) {
              i = H;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var m = H.stack.split(`
`), g = i.stack.split(`
`), b = m.length - 1, T = g.length - 1; b >= 1 && T >= 0 && m[b] !== g[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (m[b] !== g[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || m[b] !== g[T]) {
                    var N = `
` + m[b].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && Ds.set(e, N), N;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        _f = !1, ll.current = s, Os(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", j = D ? Da(D) : "";
      return typeof e == "function" && Ds.set(e, j), j;
    }
    function zf(e, t, a) {
      return ks(e, !0);
    }
    function vo(e, t, a) {
      return ks(e, !1);
    }
    function wy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ks(e, wy(e));
      if (typeof e == "string")
        return Da(e);
      switch (e) {
        case Ha:
          return Da("Suspense");
        case su:
          return Da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case il:
            return vo(e.render);
          case ol:
            return fu(e.type, t, a);
          case yr: {
            var i = e, l = i._payload, s = i._init;
            try {
              return fu(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function _t(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return Da(e.type);
        case De:
          return Da("Lazy");
        case te:
          return Da("Suspense");
        case Me:
          return Da("SuspenseList");
        case _:
        case K:
        case re:
          return vo(e.type);
        case Y:
          return vo(e.type.render);
        case M:
          return zf(e.type);
        default:
          return "";
      }
    }
    function Uf(e) {
      try {
        var t = "", a = e;
        do
          t += _t(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Ns(e) {
      return e.displayName || "Context";
    }
    function Bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ni:
          return "Fragment";
        case wa:
          return "Portal";
        case uu:
          return "Profiler";
        case al:
          return "StrictMode";
        case Ha:
          return "Suspense";
        case su:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case kf:
            var t = e;
            return Ns(t) + ".Consumer";
          case Df:
            var a = e;
            return Ns(a._context) + ".Provider";
          case il:
            return cv(e, e.render, "ForwardRef");
          case ol:
            var i = e.displayName || null;
            return i !== null ? i : Bt(e.type) || "Memo";
          case yr: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Bt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Af(e) {
      return e.displayName || "Context";
    }
    function ot(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Te:
          return "Cache";
        case he:
          var i = a;
          return Af(i) + ".Consumer";
        case ye:
          var l = a;
          return Af(l._context) + ".Provider";
        case Ae:
          return "DehydratedFragment";
        case Y:
          return fv(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case B:
          return a;
        case I:
          return "Portal";
        case F:
          return "Root";
        case J:
          return "Text";
        case De:
          return Bt(a);
        case $:
          return a === al ? "StrictMode" : "Mode";
        case de:
          return "Offscreen";
        case Q:
          return "Profiler";
        case Ve:
          return "Scope";
        case te:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case Ce:
          return "TracingMarker";
        case M:
        case _:
        case $e:
        case K:
        case ce:
        case re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var du = y.ReactDebugCurrentFrame, Cn = null, aa = !1;
    function ia() {
      {
        if (Cn === null)
          return null;
        var e = Cn._debugOwner;
        if (e !== null && typeof e < "u")
          return ot(e);
      }
      return null;
    }
    function pu() {
      return Cn === null ? "" : Uf(Cn);
    }
    function On() {
      du.getCurrentStack = null, Cn = null, aa = !1;
    }
    function At(e) {
      du.getCurrentStack = e === null ? null : pu, Cn = e, aa = !1;
    }
    function Oy() {
      return Cn;
    }
    function ka(e) {
      aa = e;
    }
    function ir(e) {
      return "" + e;
    }
    function _i(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return en(e), e;
        default:
          return "";
      }
    }
    var dv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ul(e, t) {
      dv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ff(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pv(e) {
      return e._valueTracker;
    }
    function vu(e) {
      e._valueTracker = null;
    }
    function hu(e) {
      var t = "";
      return e && (Ff(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function sl(e) {
      var t = Ff(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      en(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            en(m), i = "" + m, s.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            en(m), i = "" + m;
          },
          stopTracking: function() {
            vu(e), delete e[t];
          }
        };
        return d;
      }
    }
    function ho(e) {
      pv(e) || (e._valueTracker = sl(e));
    }
    function vv(e) {
      if (!e)
        return !1;
      var t = pv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ms(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var _s = !1, mu = !1, Ls = !1, Pf = !1;
    function ai(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function yu(e, t) {
      var a = e, i = t.checked, l = mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function gu(e, t) {
      ul("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !mu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component", t.type), mu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_s && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component", t.type), _s = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: _i(t.value != null ? t.value : i),
        controlled: ai(t)
      };
    }
    function jf(e, t) {
      var a = e, i = t.checked;
      i != null && fo(a, "checked", i, !1);
    }
    function cl(e, t) {
      var a = e;
      {
        var i = ai(t);
        !a._wrapperState.controlled && i && !Pf && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pf = !0), a._wrapperState.controlled && !i && !Ls && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ls = !0);
      }
      jf(e, t);
      var l = _i(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = ir(l)) : a.value !== ir(l) && (a.value = ir(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Li(a, t.type, l) : t.hasOwnProperty("defaultValue") && Li(a, t.type, _i(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Su(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = ir(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function hv(e, t) {
      var a = e;
      cl(a, t), Wr(a, t);
    }
    function Wr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Sn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var m = Wh(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vv(d), cl(d, m);
          }
        }
      }
    }
    function Li(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ms(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ir(e._wrapperState.initialValue) : e.defaultValue !== ir(a) && (e.defaultValue = ir(a)));
    }
    var zs = !1, fl = !1, mv = !1;
    function Us(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? p.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fl || (fl = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mv || (mv = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !zs && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), zs = !0);
    }
    function Hf(e, t) {
      t.value != null && e.setAttribute("value", ir(_i(t.value)));
    }
    var Eu = Array.isArray;
    function An(e) {
      return Eu(e);
    }
    var As;
    As = !1;
    function yv() {
      var e = ia();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gv = ["value", "defaultValue"];
    function Dy(e) {
      {
        ul("select", e);
        for (var t = 0; t < gv.length; t++) {
          var a = gv[t];
          if (e[a] != null) {
            var i = An(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yv()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yv());
          }
        }
      }
    }
    function zi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, m = 0; m < s.length; m++)
          d["$" + s[m]] = !0;
        for (var g = 0; g < l.length; g++) {
          var b = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== b && (l[g].selected = b), b && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var T = ir(_i(a)), N = null, D = 0; D < l.length; D++) {
          if (l[D].value === T) {
            l[D].selected = !0, i && (l[D].defaultSelected = !0);
            return;
          }
          N === null && !l[D].disabled && (N = l[D]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function $f(e, t) {
      return mt({}, t, {
        value: void 0
      });
    }
    function Sv(e, t) {
      var a = e;
      Dy(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !As && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), As = !0);
    }
    function ky(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? zi(a, !!t.multiple, i, !1) : t.defaultValue != null && zi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ny(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? zi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? zi(a, !!t.multiple, t.defaultValue, !0) : zi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function My(e, t) {
      var a = e, i = t.value;
      i != null && zi(a, !!t.multiple, i, !1);
    }
    var Vf = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ev(e, t) {
      var a = e;
      ul("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Vf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component"), Vf = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (An(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: _i(i)
      };
    }
    function bv(e, t) {
      var a = e, i = _i(t.value), l = _i(t.defaultValue);
      if (i != null) {
        var s = ir(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = ir(l));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bf(e, t) {
      bv(e, t);
    }
    var ii = "http://www.w3.org/1999/xhtml", _y = "http://www.w3.org/1998/Math/MathML", Wf = "http://www.w3.org/2000/svg";
    function Fs(e) {
      switch (e) {
        case "svg":
          return Wf;
        case "math":
          return _y;
        default:
          return ii;
      }
    }
    function Yf(e, t) {
      return e == null || e === ii ? Fs(t) : e === Wf && t === "foreignObject" ? ii : e;
    }
    var Ly = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ps, Tv = Ly(function(e, t) {
      if (e.namespaceURI === Wf && !("innerHTML" in e)) {
        Ps = Ps || document.createElement("div"), Ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ps.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Mr = 1, oi = 3, Tn = 8, Na = 9, mo = 11, js = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === oi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, xv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, dl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var wv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(dl).forEach(function(e) {
      wv.forEach(function(t) {
        dl[Rv(t, e)] = dl[e];
      });
    });
    function Hs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(dl.hasOwnProperty(e) && dl[e]) ? t + "px" : (zt(t, e), ("" + t).trim());
    }
    var pl = /([A-Z])/g, zy = /^ms-/;
    function Uy(e) {
      return e.replace(pl, "-$1").toLowerCase().replace(zy, "-ms-");
    }
    var Ov = function() {
    };
    {
      var Dv = /^(?:webkit|moz|o)[A-Z]/, kv = /^-ms-/, bu = /-(.)/g, vl = /;\s*$/, hl = {}, ml = {}, Nv = !1, qf = !1, Qf = function(e) {
        return e.replace(bu, function(t, a) {
          return a.toUpperCase();
        });
      }, Gf = function(e) {
        hl.hasOwnProperty(e) && hl[e] || (hl[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Qf(e.replace(kv, "ms-"))
        ));
      }, Mv = function(e) {
        hl.hasOwnProperty(e) && hl[e] || (hl[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _v = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vl, "")));
      }, Lv = function(e, t) {
        Nv || (Nv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ay = function(e, t) {
        qf || (qf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ov = function(e, t) {
        e.indexOf("-") > -1 ? Gf(e) : Dv.test(e) ? Mv(e) : vl.test(t) && _v(e, t), typeof t == "number" && (isNaN(t) ? Lv(e, t) : isFinite(t) || Ay(e, t));
      };
    }
    var Fy = Ov;
    function Py(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Uy(i)) + ":", t += Hs(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function zv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Fy(i, t[i]);
          var s = Hs(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function jy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function oa(e) {
      var t = {};
      for (var a in e)
        for (var i = xv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Cu(e, t) {
      {
        if (!t)
          return;
        var a = oa(e), i = oa(t), l = {};
        for (var s in a) {
          var d = a[s], m = i[s];
          if (m && d !== m) {
            var g = d + "," + m;
            if (l[g])
              continue;
            l[g] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", jy(e[d]) ? "Removing" : "Updating", d, m);
          }
        }
      }
    }
    var Uv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Av = mt({
      menuitem: !0
    }, Uv), Fv = "__html";
    function $s(e, t) {
      if (t) {
        if (Av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function li(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Vs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Pv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ma = {}, Kf = new RegExp("^(aria)-[" + Ie + "]*$"), Tu = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
    function Xf(e, t) {
      {
        if (le.call(Ma, t) && Ma[t])
          return !0;
        if (Tu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Pv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ma[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ma[t] = !0, !0;
        }
        if (Kf.test(t)) {
          var l = t.toLowerCase(), s = Pv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Ma[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ma[t] = !0, !0;
        }
      }
      return !0;
    }
    function jv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Xf(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Is(e, t) {
      li(e, t) || jv(e, t);
    }
    var yo = !1;
    function Zf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yo && (yo = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Jf = function() {
    };
    {
      var Fn = {}, ed = /^on./, Hv = /^on[^A-Z]/, $v = new RegExp("^(aria)-[" + Ie + "]*$"), Vv = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
      Jf = function(e, t, a, i) {
        if (le.call(Fn, t) && Fn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Fn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(l) ? d[l] : null;
          if (m != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, m), Fn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Fn[t] = !0, !0;
        } else if (ed.test(t))
          return Hv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Fn[t] = !0, !0;
        if ($v.test(t) || Vv.test(t))
          return !0;
        if (l === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Fn[t] = !0, !0;
        if (l === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Fn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Fn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Fn[t] = !0, !0;
        var g = ja(t), b = g !== null && g.type === Ut;
        if (Vs.hasOwnProperty(l)) {
          var T = Vs[l];
          if (T !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Fn[t] = !0, !0;
        } else if (!b && t !== l)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Fn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, g, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Fn[t] = !0, !0) : b ? !0 : mr(t, a, g, !1) ? (Fn[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === En && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Fn[t] = !0), !0);
      };
    }
    var Iv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Jf(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Bv(e, t, a) {
      li(e, t) || Iv(e, t, a);
    }
    var ui = 1, xu = 2, go = 4, Hy = ui | xu | go, Ru = null;
    function wu(e) {
      Ru !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ru = e;
    }
    function $y() {
      Ru === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ru = null;
    }
    function Wv(e) {
      return e === Ru;
    }
    function Bs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === oi ? t.parentNode : t;
    }
    var Wt = null, Ui = null, si = null;
    function yl(e) {
      var t = Il(e);
      if (t) {
        if (typeof Wt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Wh(a);
          Wt(t.stateNode, t.type, i);
        }
      }
    }
    function Yv(e) {
      Wt = e;
    }
    function Ws(e) {
      Ui ? si ? si.push(e) : si = [e] : Ui = e;
    }
    function Ou() {
      return Ui !== null || si !== null;
    }
    function Du() {
      if (Ui) {
        var e = Ui, t = si;
        if (Ui = null, si = null, yl(e), t)
          for (var a = 0; a < t.length; a++)
            yl(t[a]);
      }
    }
    var So = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function Vy() {
      var e = Ou();
      e && (td(), Du());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return So(e, t, a);
      } finally {
        nd = !1, Vy();
      }
    }
    function Ys(e, t, a) {
      So = e, td = a;
    }
    function qs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && qs(t));
        default:
          return !1;
      }
    }
    function Eo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Wh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (ad(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ku = !1;
    if (Qe)
      try {
        var bo = {};
        Object.defineProperty(bo, "passive", {
          get: function() {
            ku = !0;
          }
        }), window.addEventListener("test", bo, bo), window.removeEventListener("test", bo, bo);
      } catch {
        ku = !1;
      }
    function qv(e, t, a, i, l, s, d, m, g) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var id = qv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      id = function(t, a, i, l, s, d, m, g, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), N = !1, D = !0, j = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          od.removeEventListener(Z, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var ke = Array.prototype.slice.call(arguments, 3);
        function qe() {
          N = !0, X(), a.apply(i, ke), D = !1;
        }
        var He, bt = !1, gt = !1;
        function U(A) {
          if (He = A.error, bt = !0, He === null && A.colno === 0 && A.lineno === 0 && (gt = !0), A.defaultPrevented && He != null && typeof He == "object")
            try {
              He._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), od.addEventListener(Z, qe, !1), T.initEvent(Z, !1, !1), od.dispatchEvent(T), H && Object.defineProperty(window, "event", H), N && D && (bt ? gt && (He = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : He = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(He)), window.removeEventListener("error", U), !N)
          return X(), qv.apply(this, arguments);
      };
    }
    var Iy = id, Ai = !1, _a = null, Nu = !1, Fi = null, $a = {
      onError: function(e) {
        Ai = !0, _a = e;
      }
    };
    function Co(e, t, a, i, l, s, d, m, g) {
      Ai = !1, _a = null, Iy.apply($a, arguments);
    }
    function ci(e, t, a, i, l, s, d, m, g) {
      if (Co.apply(this, arguments), Ai) {
        var b = ud();
        Nu || (Nu = !0, Fi = b);
      }
    }
    function ld() {
      if (Nu) {
        var e = Fi;
        throw Nu = !1, Fi = null, e;
      }
    }
    function By() {
      return Ai;
    }
    function ud() {
      if (Ai) {
        var e = _a;
        return Ai = !1, _a = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function la(e) {
      return e._reactInternals;
    }
    function Mu(e) {
      return e._reactInternals !== void 0;
    }
    function gl(e, t) {
      e._reactInternals = t;
    }
    var We = (
      /*                      */
      0
    ), Pi = (
      /*                */
      1
    ), Qt = (
      /*                    */
      2
    ), ut = (
      /*                       */
      4
    ), Dt = (
      /*                */
      16
    ), Nt = (
      /*                 */
      32
    ), Va = (
      /*                     */
      64
    ), et = (
      /*                   */
      128
    ), dn = (
      /*            */
      256
    ), _r = (
      /*                          */
      512
    ), ua = (
      /*                     */
      1024
    ), tn = (
      /*                      */
      2048
    ), sa = (
      /*                    */
      4096
    ), ji = (
      /*                   */
      8192
    ), _u = (
      /*             */
      16384
    ), Qs = tn | ut | Va | _r | ua | _u, Qv = (
      /*               */
      32767
    ), Yr = (
      /*                   */
      32768
    ), Pn = (
      /*                */
      65536
    ), Lu = (
      /* */
      131072
    ), sd = (
      /*                       */
      1048576
    ), cd = (
      /*                    */
      2097152
    ), Lr = (
      /*                 */
      4194304
    ), Hi = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), To = (
      /*              */
      33554432
    ), Sl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ut | ua | 0
    ), Ur = Qt | ut | Dt | Nt | _r | sa | ji, or = ut | Va | _r | ji, ca = tn | Dt, Wn = Lr | Hi | cd, fi = y.ReactCurrentOwner;
    function qr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Qt | sa)) !== We && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function fd(e) {
      if (e.tag === te) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Gs(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return qr(e) === e;
    }
    function Qr(e) {
      {
        var t = fi.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ot(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = la(e);
      return l ? qr(l) === l : !1;
    }
    function Ar(e) {
      if (qr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Gt(e) {
      var t = e.alternate;
      if (!t) {
        var a = qr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var m = s.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Ar(s), e;
            if (g === l)
              return Ar(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var b = !1, T = s.child; T; ) {
            if (T === i) {
              b = !0, i = s, l = d;
              break;
            }
            if (T === l) {
              b = !0, l = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = d.child; T; ) {
              if (T === i) {
                b = !0, i = d, l = s;
                break;
              }
              if (T === l) {
                b = !0, l = d, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function fa(e) {
      var t = Gt(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === B || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gv(e) {
      var t = Gt(e);
      return t !== null ? Ks(t) : null;
    }
    function Ks(e) {
      if (e.tag === B || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== I) {
          var a = Ks(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Xs = h.unstable_scheduleCallback, Kv = h.unstable_cancelCallback, Zs = h.unstable_shouldYield, Xv = h.unstable_requestPaint, an = h.unstable_now, vd = h.unstable_getCurrentPriorityLevel, Js = h.unstable_ImmediatePriority, Gr = h.unstable_UserBlockingPriority, Ia = h.unstable_NormalPriority, ec = h.unstable_LowPriority, $i = h.unstable_IdlePriority, hd = h.unstable_yieldValue, md = h.unstable_setDisableYieldValue, Vi = null, jn = null, Se = null, hn = !1, Yn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        kt && (e = mt({}, e, {
          getLaneLabelMap: Bi,
          injectProfilingHooks: pi
        })), Vi = t.inject(e), jn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (jn && typeof jn.onScheduleFiberRoot == "function")
        try {
          jn.onScheduleFiberRoot(Vi, e, t);
        } catch (a) {
          hn || (hn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function di(e, t) {
      if (jn && typeof jn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & et) === et;
          if (vt) {
            var i;
            switch (t) {
              case lr:
                i = Js;
                break;
              case qn:
                i = Gr;
                break;
              case hi:
                i = Ia;
                break;
              case Vu:
                i = $i;
                break;
              default:
                i = Ia;
                break;
            }
            jn.onCommitFiberRoot(Vi, e, i, a);
          }
        } catch (l) {
          hn || (hn = !0, S("React instrumentation encountered an error: %s", l));
        }
    }
    function Ii(e) {
      if (jn && typeof jn.onPostCommitFiberRoot == "function")
        try {
          jn.onPostCommitFiberRoot(Vi, e);
        } catch (t) {
          hn || (hn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (jn && typeof jn.onCommitFiberUnmount == "function")
        try {
          jn.onCommitFiberUnmount(Vi, e);
        } catch (t) {
          hn || (hn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Dn(e) {
      if (typeof hd == "function" && (md(e), x(e)), jn && typeof jn.setStrictMode == "function")
        try {
          jn.setStrictMode(Vi, e);
        } catch (t) {
          hn || (hn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function pi(e) {
      Se = e;
    }
    function Bi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Kt; a++) {
          var i = Wy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function tc(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function Sd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function Wi(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function xo() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function Jv(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function nc(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function eh() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function th(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function rc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function El() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function ac(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function rh(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function ah(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function bl() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function ih(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function zu() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function La(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function Uu() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Cl() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function Ro(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function bd(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function Yi(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), pt = (
      /*                 */
      1
    ), Ke = (
      /*                    */
      2
    ), on = (
      /*               */
      8
    ), da = (
      /*              */
      16
    ), ic = Math.clz32 ? Math.clz32 : wo, oc = Math.log, Cd = Math.LN2;
    function wo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (oc(t) / Cd | 0) | 0;
    }
    var Kt = 31, ee = (
      /*                        */
      0
    ), St = (
      /*                          */
      0
    ), Xe = (
      /*                        */
      1
    ), Ba = (
      /*    */
      2
    ), Kr = (
      /*             */
      4
    ), Oo = (
      /*            */
      8
    ), Xt = (
      /*                     */
      16
    ), Do = (
      /*                */
      32
    ), qi = (
      /*                       */
      4194240
    ), ko = (
      /*                        */
      64
    ), pa = (
      /*                        */
      128
    ), Fr = (
      /*                        */
      256
    ), No = (
      /*                        */
      512
    ), Au = (
      /*                        */
      1024
    ), Fu = (
      /*                        */
      2048
    ), lc = (
      /*                        */
      4096
    ), uc = (
      /*                        */
      8192
    ), sc = (
      /*                        */
      16384
    ), cc = (
      /*                       */
      32768
    ), fc = (
      /*                       */
      65536
    ), dc = (
      /*                       */
      131072
    ), pc = (
      /*                       */
      262144
    ), vc = (
      /*                       */
      524288
    ), Mo = (
      /*                       */
      1048576
    ), hc = (
      /*                       */
      2097152
    ), _o = (
      /*                            */
      130023424
    ), vi = (
      /*                             */
      4194304
    ), mc = (
      /*                             */
      8388608
    ), Pu = (
      /*                             */
      16777216
    ), yc = (
      /*                             */
      33554432
    ), gc = (
      /*                             */
      67108864
    ), Td = vi, Tl = (
      /*          */
      134217728
    ), Sc = (
      /*                          */
      268435455
    ), xl = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), Pr = (
      /*                   */
      1073741824
    );
    function Wy(e) {
      {
        if (e & Xe)
          return "Sync";
        if (e & Ba)
          return "InputContinuousHydration";
        if (e & Kr)
          return "InputContinuous";
        if (e & Oo)
          return "DefaultHydration";
        if (e & Xt)
          return "Default";
        if (e & Do)
          return "TransitionHydration";
        if (e & qi)
          return "Transition";
        if (e & _o)
          return "Retry";
        if (e & Tl)
          return "SelectiveHydration";
        if (e & xl)
          return "IdleHydration";
        if (e & Qi)
          return "Idle";
        if (e & Pr)
          return "Offscreen";
      }
    }
    var Yt = -1, Ec = ko, bc = vi;
    function Rl(e) {
      switch (xn(e)) {
        case Xe:
          return Xe;
        case Ba:
          return Ba;
        case Kr:
          return Kr;
        case Oo:
          return Oo;
        case Xt:
          return Xt;
        case Do:
          return Do;
        case ko:
        case pa:
        case Fr:
        case No:
        case Au:
        case Fu:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case Mo:
        case hc:
          return e & qi;
        case vi:
        case mc:
        case Pu:
        case yc:
        case gc:
          return e & _o;
        case Tl:
          return Tl;
        case xl:
          return xl;
        case Qi:
          return Qi;
        case Pr:
          return Pr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ju(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, l = e.suspendedLanes, s = e.pingedLanes, d = a & Sc;
      if (d !== ee) {
        var m = d & ~l;
        if (m !== ee)
          i = Rl(m);
        else {
          var g = d & s;
          g !== ee && (i = Rl(g));
        }
      } else {
        var b = a & ~l;
        b !== ee ? i = Rl(b) : s !== ee && (i = Rl(s));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ee) {
        var T = xn(i), N = xn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Xt && (N & qi) !== ee
        )
          return t;
      }
      (i & Kr) !== ee && (i |= a & Xt);
      var D = e.entangledLanes;
      if (D !== ee)
        for (var j = e.entanglements, H = i & D; H > 0; ) {
          var X = Gi(H), ke = 1 << X;
          i |= j[X], H &= ~ke;
        }
      return i;
    }
    function oh(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var l = Gi(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Cc(e, t) {
      switch (e) {
        case Xe:
        case Ba:
        case Kr:
          return t + 250;
        case Oo:
        case Xt:
        case Do:
        case ko:
        case pa:
        case Fr:
        case No:
        case Au:
        case Fu:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case Mo:
        case hc:
          return t + 5e3;
        case vi:
        case mc:
        case Pu:
        case yc:
        case gc:
          return Yt;
        case Tl:
        case xl:
        case Qi:
        case Pr:
          return Yt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function Yy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Gi(d), g = 1 << m, b = s[m];
        b === Yt ? ((g & i) === ee || (g & l) !== ee) && (s[m] = Cc(g, t)) : b <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function qy(e) {
      return Rl(e.pendingLanes);
    }
    function xd(e) {
      var t = e.pendingLanes & ~Pr;
      return t !== ee ? t : t & Pr ? Pr : ee;
    }
    function wl(e) {
      return (e & Xe) !== ee;
    }
    function Hu(e) {
      return (e & Sc) !== ee;
    }
    function Tc(e) {
      return (e & _o) === e;
    }
    function Qy(e) {
      var t = Xe | Kr | Xt;
      return (e & t) === ee;
    }
    function lh(e) {
      return (e & qi) === e;
    }
    function $u(e, t) {
      var a = Ba | Kr | Oo | Xt;
      return (t & a) !== ee;
    }
    function uh(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Rd(e) {
      return (e & qi) !== ee;
    }
    function wd() {
      var e = Ec;
      return Ec <<= 1, (Ec & qi) === ee && (Ec = ko), e;
    }
    function Gy() {
      var e = bc;
      return bc <<= 1, (bc & _o) === ee && (bc = vi), e;
    }
    function xn(e) {
      return e & -e;
    }
    function kn(e) {
      return xn(e);
    }
    function Gi(e) {
      return 31 - ic(e);
    }
    function xc(e) {
      return Gi(e);
    }
    function jr(e, t) {
      return (e & t) !== ee;
    }
    function Lo(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function Ol(e, t) {
      return e & ~t;
    }
    function Od(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== St && e < t ? e : t;
    }
    function Rc(e) {
      for (var t = [], a = 0; a < Kt; a++)
        t.push(e);
      return t;
    }
    function zo(e, t, a) {
      e.pendingLanes |= t, t !== Qi && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, l = xc(t);
      i[l] = a;
    }
    function Dd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Gi(i), s = 1 << l;
        a[l] = Yt, i &= ~s;
      }
    }
    function kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Gi(d), g = 1 << m;
        i[m] = ee, l[m] = Yt, s[m] = Yt, d &= ~g;
      }
    }
    function Dl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Gi(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function Ky(e, t) {
      var a = xn(t), i;
      switch (a) {
        case Kr:
          i = Ba;
          break;
        case Xt:
          i = Oo;
          break;
        case ko:
        case pa:
        case Fr:
        case No:
        case Au:
        case Fu:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case Mo:
        case hc:
        case vi:
        case mc:
        case Pu:
        case yc:
        case gc:
          i = Do;
          break;
        case Qi:
          i = xl;
          break;
        default:
          i = St;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== St ? St : i;
    }
    function Md(e, t, a) {
      if (Yn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = xc(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function wc(e, t) {
      if (Yn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = xc(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(m) {
            var g = m.alternate;
            (g === null || !i.has(g)) && i.add(m);
          }), d.clear()), t &= ~s;
        }
    }
    function _d(e, t) {
      return null;
    }
    var lr = Xe, qn = Kr, hi = Xt, Vu = Qi, Uo = St;
    function va() {
      return Uo;
    }
    function Nn(e) {
      Uo = e;
    }
    function Iu(e, t) {
      var a = Uo;
      try {
        return Uo = e, t();
      } finally {
        Uo = a;
      }
    }
    function ur(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ld(e, t) {
      return e !== 0 && e < t;
    }
    function Bu(e) {
      var t = xn(e);
      return Ld(lr, t) ? Ld(qn, t) ? Hu(t) ? hi : Vu : qn : lr;
    }
    function Mn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fh;
    function _e(e) {
      fh = e;
    }
    function kl(e) {
      fh(e);
    }
    var Wu;
    function dh(e) {
      Wu = e;
    }
    var ph;
    function Yu(e) {
      ph = e;
    }
    var qu;
    function zd(e) {
      qu = e;
    }
    var Ud;
    function vh(e) {
      Ud = e;
    }
    var Oc = !1, Nl = [], Wa = null, nn = null, Hn = null, ha = /* @__PURE__ */ new Map(), Ml = /* @__PURE__ */ new Map(), mi = [], za = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function hh(e) {
      return za.indexOf(e) > -1;
    }
    function Ya(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wa = null;
          break;
        case "dragenter":
        case "dragleave":
          nn = null;
          break;
        case "mouseover":
        case "mouseout":
          Hn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ha.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ml.delete(i);
          break;
        }
      }
    }
    function _l(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ya(t, a, i, l, s);
        if (t !== null) {
          var m = Il(t);
          m !== null && Wu(m);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function yh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Wa = _l(Wa, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return nn = _l(nn, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var m = l;
          return Hn = _l(Hn, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var g = l, b = g.pointerId;
          return ha.set(b, _l(ha.get(b) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = l, N = T.pointerId;
          return Ml.set(N, _l(Ml.get(N) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Ad(e) {
      var t = ns(e.target);
      if (t !== null) {
        var a = qr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === te) {
            var l = fd(a);
            if (l !== null) {
              e.blockedOn = l, Ud(e.priority, function() {
                ph(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (Mn(s)) {
              e.blockedOn = Gs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function gh(e) {
      for (var t = qu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < mi.length && Ld(t, mi[i].priority); i++)
        ;
      mi.splice(i, 0, a), i === 0 && Ad(a);
    }
    function Dc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ao(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          wu(s), l.target.dispatchEvent(s), $y();
        } else {
          var d = Il(i);
          return d !== null && Wu(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qu(e, t, a) {
      Dc(e) && a.delete(t);
    }
    function Fd() {
      Oc = !1, Wa !== null && Dc(Wa) && (Wa = null), nn !== null && Dc(nn) && (nn = null), Hn !== null && Dc(Hn) && (Hn = null), ha.forEach(Qu), Ml.forEach(Qu);
    }
    function sr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Oc || (Oc = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, Fd)));
    }
    function yt(e) {
      if (Nl.length > 0) {
        sr(Nl[0], e);
        for (var t = 1; t < Nl.length; t++) {
          var a = Nl[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wa !== null && sr(Wa, e), nn !== null && sr(nn, e), Hn !== null && sr(Hn, e);
      var i = function(m) {
        return sr(m, e);
      };
      ha.forEach(i), Ml.forEach(i);
      for (var l = 0; l < mi.length; l++) {
        var s = mi[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; mi.length > 0; ) {
        var d = mi[0];
        if (d.blockedOn !== null)
          break;
        Ad(d), d.blockedOn === null && mi.shift();
      }
    }
    var ln = y.ReactCurrentBatchConfig, pn = !0;
    function $n(e) {
      pn = !!e;
    }
    function Xr() {
      return pn;
    }
    function Ll(e, t, a) {
      var i = gr(t), l;
      switch (i) {
        case lr:
          l = _n;
          break;
        case qn:
          l = Gu;
          break;
        case hi:
        default:
          l = yi;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function _n(e, t, a, i) {
      var l = va(), s = ln.transition;
      ln.transition = null;
      try {
        Nn(lr), yi(e, t, a, i);
      } finally {
        Nn(l), ln.transition = s;
      }
    }
    function Gu(e, t, a, i) {
      var l = va(), s = ln.transition;
      ln.transition = null;
      try {
        Nn(qn), yi(e, t, a, i);
      } finally {
        Nn(l), ln.transition = s;
      }
    }
    function yi(e, t, a, i) {
      pn && kc(e, t, a, i);
    }
    function kc(e, t, a, i) {
      var l = Ao(e, t, a, i);
      if (l === null) {
        yg(e, t, i, zl, a), mh(e, i);
        return;
      }
      if (yh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (mh(e, i), t & go && hh(e)) {
        for (; l !== null; ) {
          var s = Il(l);
          s !== null && kl(s);
          var d = Ao(e, t, a, i);
          if (d === null && yg(e, t, i, zl, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      yg(e, t, i, null, a);
    }
    var zl = null;
    function Ao(e, t, a, i) {
      zl = null;
      var l = Bs(i), s = ns(l);
      if (s !== null) {
        var d = qr(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === te) {
            var g = fd(d);
            if (g !== null)
              return g;
            s = null;
          } else if (m === F) {
            var b = d.stateNode;
            if (Mn(b))
              return Gs(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return zl = s, null;
    }
    function gr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return qn;
        case "message": {
          var t = vd();
          switch (t) {
            case Js:
              return lr;
            case Gr:
              return qn;
            case Ia:
            case ec:
              return hi;
            case $i:
              return Vu;
            default:
              return hi;
          }
        }
        default:
          return hi;
      }
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ul(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function gi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Nc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Fo = null, qa = null, Ki = null;
    function Xi(e) {
      return Fo = e, qa = _c(), !0;
    }
    function Mc() {
      Fo = null, qa = null, Ki = null;
    }
    function Al() {
      if (Ki)
        return Ki;
      var e, t = qa, a = t.length, i, l = _c(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Ki = l.slice(e, m), Ki;
    }
    function _c() {
      return "value" in Fo ? Fo.value : Fo.textContent;
    }
    function Po(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function jo() {
      return !0;
    }
    function cr() {
      return !1;
    }
    function Rn(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var g = e[m];
            g ? this[m] = g(s) : this[m] = s[m];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = jo : this.isDefaultPrevented = cr, this.isPropagationStopped = cr, this;
      }
      return mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: jo
      }), t;
    }
    var fr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, dr = Rn(fr), Fl = mt({}, fr, {
      view: 0,
      detail: 0
    }), jd = Rn(Fl), Ku, Hd, ma;
    function Sh(e) {
      e !== ma && (ma && e.type === "mousemove" ? (Ku = e.screenX - ma.screenX, Hd = e.screenY - ma.screenY) : (Ku = 0, Hd = 0), ma = e);
    }
    var Pl = mt({}, Fl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Uc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Sh(e), Ku);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hd;
      }
    }), Zi = Rn(Pl), $d = mt({}, Pl, {
      dataTransfer: 0
    }), Ho = Rn($d), Eh = mt({}, Fl, {
      relatedTarget: 0
    }), Lc = Rn(Eh), Vd = mt({}, fr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zc = Rn(Vd), Zy = mt({}, fr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jy = Rn(Zy), bh = mt({}, fr, {
      data: 0
    }), Id = Rn(bh), $o = Id, eg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, jl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ch(e) {
      if (e.key) {
        var t = eg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Po(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? jl[e.keyCode] || "Unidentified" : "";
    }
    var vn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function tg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = vn[e];
      return i ? !!a[i] : !1;
    }
    function Uc(e) {
      return tg;
    }
    var ng = mt({}, Fl, {
      key: Ch,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Uc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Po(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), rg = Rn(ng), Th = mt({}, Pl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Bd = Rn(Th), ag = mt({}, Fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Uc
    }), ya = Rn(ag), Wd = mt({}, fr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ig = Rn(Wd), Ji = mt({}, Pl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ac = Rn(Ji), Vo = [9, 13, 27, 32], Xu = 229, Zu = Qe && "CompositionEvent" in window, Io = null;
    Qe && "documentMode" in document && (Io = document.documentMode);
    var og = Qe && "TextEvent" in window && !Io, Fc = Qe && (!Zu || Io && Io > 8 && Io <= 11), xh = 32, Yd = String.fromCharCode(xh);
    function Rh() {
      nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ju = !1;
    function Pc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function qd(e, t) {
      return e === "keydown" && t.keyCode === Xu;
    }
    function Oh(e, t) {
      switch (e) {
        case "keyup":
          return Vo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Xu;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Qd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function jc(e) {
      return e.locale === "ko";
    }
    var Si = !1;
    function Gd(e, t, a, i, l) {
      var s, d;
      if (Zu ? s = wh(t) : Si ? Oh(t, i) && (s = "onCompositionEnd") : qd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fc && !jc(i) && (!Si && s === "onCompositionStart" ? Si = Xi(l) : s === "onCompositionEnd" && Si && (d = Al()));
      var m = _h(a, s);
      if (m.length > 0) {
        var g = new Id(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: m
        }), d)
          g.data = d;
        else {
          var b = Qd(i);
          b !== null && (g.data = b);
        }
      }
    }
    function Hc(e, t) {
      switch (e) {
        case "compositionend":
          return Qd(t);
        case "keypress":
          var a = t.which;
          return a !== xh ? null : (Ju = !0, Yd);
        case "textInput":
          var i = t.data;
          return i === Yd && Ju ? null : i;
        default:
          return null;
      }
    }
    function Dh(e, t) {
      if (Si) {
        if (e === "compositionend" || !Zu && Oh(e, t)) {
          var a = Al();
          return Mc(), Si = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Pc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fc && !jc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function lg(e, t, a, i, l) {
      var s;
      if (og ? s = Hc(t, i) : s = Dh(t, i), !s)
        return null;
      var d = _h(a, "onBeforeInput");
      if (d.length > 0) {
        var m = new $o("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: m,
          listeners: d
        }), m.data = s;
      }
    }
    function $c(e, t, a, i, l, s, d) {
      Gd(e, t, a, i, l), lg(e, t, a, i, l);
    }
    var ug = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Hl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ug[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function sg(e) {
      if (!Qe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vc() {
      nt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Ws(i);
      var l = _h(t, "onChange");
      if (l.length > 0) {
        var s = new dr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function f(e) {
      var t = [];
      n(t, o, e, Bs(e)), rd(v, t);
    }
    function v(e) {
      FE(e, 0);
    }
    function E(e) {
      var t = Qc(e);
      if (vv(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var O = !1;
    Qe && (O = sg("input") && (!document.documentMode || document.documentMode > 9));
    function V(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", ue);
    }
    function oe() {
      r && (r.detachEvent("onpropertychange", ue), r = null, o = null);
    }
    function ue(e) {
      e.propertyName === "value" && E(o) && f(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (oe(), V(t, a)) : e === "focusout" && oe();
    }
    function we(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Pe(e, t) {
      if (e === "click")
        return E(t);
    }
    function mn(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Li(e, "number", e.value);
    }
    function k(e, t, a, i, l, s, d) {
      var m = a ? Qc(a) : window, g, b;
      if (u(m) ? g = w : Hl(m) ? O ? g = mn : (g = we, b = ae) : Le(m) && (g = Pe), g) {
        var T = g(t, a);
        if (T) {
          n(e, T, i, l);
          return;
        }
      }
      b && b(t, m, a), t === "focusout" && z(m);
    }
    function P() {
      xt("onMouseEnter", ["mouseout", "mouseover"]), xt("onMouseLeave", ["mouseout", "mouseover"]), xt("onPointerEnter", ["pointerout", "pointerover"]), xt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ve(e, t, a, i, l, s, d) {
      var m = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (m && !Wv(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (ns(b) || sp(b)))
          return;
      }
      if (!(!g && !m)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var N = l.ownerDocument;
          N ? T = N.defaultView || N.parentWindow : T = window;
        }
        var D, j;
        if (g) {
          var H = i.relatedTarget || i.toElement;
          if (D = a, j = H ? ns(H) : null, j !== null) {
            var X = qr(j);
            (j !== X || j.tag !== B && j.tag !== J) && (j = null);
          }
        } else
          D = null, j = a;
        if (D !== j) {
          var ke = Zi, qe = "onMouseLeave", He = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ke = Bd, qe = "onPointerLeave", He = "onPointerEnter", bt = "pointer");
          var gt = D == null ? T : Qc(D), U = j == null ? T : Qc(j), Z = new ke(qe, bt + "leave", D, i, l);
          Z.target = gt, Z.relatedTarget = U;
          var A = null, se = ns(l);
          if (se === a) {
            var Ne = new ke(He, bt + "enter", j, i, l);
            Ne.target = U, Ne.relatedTarget = gt, A = Ne;
          }
          G1(e, Z, A, D, j);
        }
      }
    }
    function je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ze = typeof Object.is == "function" ? Object.is : je;
    function Be(e, t) {
      if (ze(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!le.call(t, s) || !ze(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function tt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Vn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Rt(e, t) {
      for (var a = tt(e), i = 0, l = 0; a; ) {
        if (a.nodeType === oi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = tt(Vn(a));
      }
    }
    function eo(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return cg(e, l, s, d, m);
    }
    function cg(e, t, a, i, l) {
      var s = 0, d = -1, m = -1, g = 0, b = 0, T = e, N = null;
      e:
        for (; ; ) {
          for (var D = null; T === t && (a === 0 || T.nodeType === oi) && (d = s + a), T === i && (l === 0 || T.nodeType === oi) && (m = s + l), T.nodeType === oi && (s += T.nodeValue.length), (D = T.firstChild) !== null; )
            N = T, T = D;
          for (; ; ) {
            if (T === e)
              break e;
            if (N === t && ++g === a && (d = s), N === i && ++b === l && (m = s), (D = T.nextSibling) !== null)
              break;
            T = N, N = T.parentNode;
          }
          T = D;
        }
      return d === -1 || m === -1 ? null : {
        start: d,
        end: m
      };
    }
    function N1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), m = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > m) {
          var g = m;
          m = d, d = g;
        }
        var b = Rt(e, d), T = Rt(e, m);
        if (b && T) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var N = a.createRange();
          N.setStart(b.node, b.offset), l.removeAllRanges(), d > m ? (l.addRange(N), l.extend(T.node, T.offset)) : (N.setEnd(T.node, T.offset), l.addRange(N));
        }
      }
    }
    function RE(e) {
      return e && e.nodeType === oi;
    }
    function wE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : RE(e) ? !1 : RE(t) ? wE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function M1(e) {
      return e && e.ownerDocument && wE(e.ownerDocument.documentElement, e);
    }
    function _1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function OE() {
      for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
        if (_1(t))
          e = t.contentWindow;
        else
          return t;
        t = Ms(e.document);
      }
      return t;
    }
    function fg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function L1() {
      var e = OE();
      return {
        focusedElem: e,
        selectionRange: fg(e) ? U1(e) : null
      };
    }
    function z1(e) {
      var t = OE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && M1(a)) {
        i !== null && fg(a) && A1(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Mr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var m = l[d];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function U1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = eo(e), t || {
        start: 0,
        end: 0
      };
    }
    function A1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : N1(e, t);
    }
    var F1 = Qe && "documentMode" in document && document.documentMode <= 11;
    function P1() {
      nt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ic = null, dg = null, Kd = null, pg = !1;
    function j1(e) {
      if ("selectionStart" in e && fg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function H1(e) {
      return e.window === e ? e.document : e.nodeType === Na ? e : e.ownerDocument;
    }
    function DE(e, t, a) {
      var i = H1(a);
      if (!(pg || Ic == null || Ic !== Ms(i))) {
        var l = j1(Ic);
        if (!Kd || !Be(Kd, l)) {
          Kd = l;
          var s = _h(dg, "onSelect");
          if (s.length > 0) {
            var d = new dr("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Ic;
          }
        }
      }
    }
    function $1(e, t, a, i, l, s, d) {
      var m = a ? Qc(a) : window;
      switch (t) {
        case "focusin":
          (Hl(m) || m.contentEditable === "true") && (Ic = m, dg = a, Kd = null);
          break;
        case "focusout":
          Ic = null, dg = null, Kd = null;
          break;
        case "mousedown":
          pg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pg = !1, DE(e, i, l);
          break;
        case "selectionchange":
          if (F1)
            break;
        case "keydown":
        case "keyup":
          DE(e, i, l);
      }
    }
    function kh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Bc = {
      animationend: kh("Animation", "AnimationEnd"),
      animationiteration: kh("Animation", "AnimationIteration"),
      animationstart: kh("Animation", "AnimationStart"),
      transitionend: kh("Transition", "TransitionEnd")
    }, vg = {}, kE = {};
    Qe && (kE = document.createElement("div").style, "AnimationEvent" in window || (delete Bc.animationend.animation, delete Bc.animationiteration.animation, delete Bc.animationstart.animation), "TransitionEvent" in window || delete Bc.transitionend.transition);
    function Nh(e) {
      if (vg[e])
        return vg[e];
      if (!Bc[e])
        return e;
      var t = Bc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in kE)
          return vg[e] = t[a];
      return e;
    }
    var NE = Nh("animationend"), ME = Nh("animationiteration"), _E = Nh("animationstart"), LE = Nh("transitionend"), zE = /* @__PURE__ */ new Map(), UE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $l(e, t) {
      zE.set(e, t), nt(t, [e]);
    }
    function V1() {
      for (var e = 0; e < UE.length; e++) {
        var t = UE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $l(a, "on" + i);
      }
      $l(NE, "onAnimationEnd"), $l(ME, "onAnimationIteration"), $l(_E, "onAnimationStart"), $l("dblclick", "onDoubleClick"), $l("focusin", "onFocus"), $l("focusout", "onBlur"), $l(LE, "onTransitionEnd");
    }
    function I1(e, t, a, i, l, s, d) {
      var m = zE.get(t);
      if (m !== void 0) {
        var g = dr, b = t;
        switch (t) {
          case "keypress":
            if (Po(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = rg;
            break;
          case "focusin":
            b = "focus", g = Lc;
            break;
          case "focusout":
            b = "blur", g = Lc;
            break;
          case "beforeblur":
          case "afterblur":
            g = Lc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ho;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ya;
            break;
          case NE:
          case ME:
          case _E:
            g = zc;
            break;
          case LE:
            g = ig;
            break;
          case "scroll":
            g = jd;
            break;
          case "wheel":
            g = Ac;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Jy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Bd;
            break;
        }
        var T = (s & go) !== 0;
        {
          var N = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = q1(a, m, i.type, T, N);
          if (D.length > 0) {
            var j = new g(m, b, null, i, l);
            e.push({
              event: j,
              listeners: D
            });
          }
        }
      }
    }
    V1(), P(), Vc(), P1(), Rh();
    function B1(e, t, a, i, l, s, d) {
      I1(e, t, a, i, l, s);
      var m = (s & Hy) === 0;
      m && (ve(e, t, a, i, l), k(e, t, a, i, l), $1(e, t, a, i, l), $c(e, t, a, i, l));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], hg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function AE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ci(i, t, void 0, e), e.currentTarget = null;
    }
    function W1(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, m = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          AE(e, g, m), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], N = T.instance, D = T.currentTarget, j = T.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          AE(e, j, D), i = N;
        }
    }
    function FE(e, t) {
      for (var a = (t & go) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        W1(s, d, a);
      }
      ld();
    }
    function Y1(e, t, a, i, l) {
      var s = Bs(a), d = [];
      B1(d, e, i, a, s, t), FE(d, t);
    }
    function un(e, t) {
      hg.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Cw(t), l = K1(e, a);
      i.has(l) || (PE(t, e, xu, a), i.add(l));
    }
    function mg(e, t, a) {
      hg.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= go), PE(a, e, i, t);
    }
    var Mh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[Mh]) {
        e[Mh] = !0, Vt.forEach(function(a) {
          a !== "selectionchange" && (hg.has(a) || mg(a, !1, e), mg(a, !0, e));
        });
        var t = e.nodeType === Na ? e : e.ownerDocument;
        t !== null && (t[Mh] || (t[Mh] = !0, mg("selectionchange", !1, t)));
      }
    }
    function PE(e, t, a, i, l) {
      var s = Ll(e, t, a), d = void 0;
      ku && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? gi(e, t, s, d) : Ul(e, t, s) : d !== void 0 ? Nc(e, t, s, d) : Pd(e, t, s);
    }
    function jE(e, t) {
      return e === t || e.nodeType === Tn && e.parentNode === t;
    }
    function yg(e, t, a, i, l) {
      var s = i;
      if (!(t & ui) && !(t & xu)) {
        var d = l;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var g = m.tag;
              if (g === F || g === I) {
                var b = m.stateNode.containerInfo;
                if (jE(b, d))
                  break;
                if (g === I)
                  for (var T = m.return; T !== null; ) {
                    var N = T.tag;
                    if (N === F || N === I) {
                      var D = T.stateNode.containerInfo;
                      if (jE(D, d))
                        return;
                    }
                    T = T.return;
                  }
                for (; b !== null; ) {
                  var j = ns(b);
                  if (j === null)
                    return;
                  var H = j.tag;
                  if (H === B || H === J) {
                    m = s = j;
                    continue e;
                  }
                  b = b.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      rd(function() {
        return Y1(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function q1(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, g = [], b = e, T = null; b !== null; ) {
        var N = b, D = N.stateNode, j = N.tag;
        if (j === B && D !== null && (T = D, m !== null)) {
          var H = Eo(b, m);
          H != null && g.push(Jd(b, H, T));
        }
        if (l)
          break;
        b = b.return;
      }
      return g;
    }
    function _h(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, m = s.tag;
        if (m === B && d !== null) {
          var g = d, b = Eo(l, a);
          b != null && i.unshift(Jd(l, b, g));
          var T = Eo(l, t);
          T != null && i.push(Jd(l, T, g));
        }
        l = l.return;
      }
      return i;
    }
    function Wc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function Q1(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Wc(s))
        l++;
      for (var d = 0, m = i; m; m = Wc(m))
        d++;
      for (; l - d > 0; )
        a = Wc(a), l--;
      for (; d - l > 0; )
        i = Wc(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Wc(a), i = Wc(i);
      }
      return null;
    }
    function HE(e, t, a, i, l) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var g = m, b = g.alternate, T = g.stateNode, N = g.tag;
        if (b !== null && b === i)
          break;
        if (N === B && T !== null) {
          var D = T;
          if (l) {
            var j = Eo(m, s);
            j != null && d.unshift(Jd(m, j, D));
          } else if (!l) {
            var H = Eo(m, s);
            H != null && d.push(Jd(m, H, D));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function G1(e, t, a, i, l) {
      var s = i && l ? Q1(i, l) : null;
      i !== null && HE(e, t, i, s, !1), l !== null && a !== null && HE(e, a, l, s, !0);
    }
    function K1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ga = !1, ep = "dangerouslySetInnerHTML", Lh = "suppressContentEditableWarning", Vl = "suppressHydrationWarning", $E = "autoFocus", es = "children", ts = "style", zh = "__html", gg, Uh, tp, VE, Ah, IE, BE;
    gg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Uh = function(e, t) {
      Is(e, t), Zf(e, t), Bv(e, t, {
        registrationNameDependencies: Jt,
        possibleRegistrationNames: gn
      });
    }, IE = Qe && !document.documentMode, tp = function(e, t, a) {
      if (!ga) {
        var i = Fh(a), l = Fh(t);
        l !== i && (ga = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, VE = function(e) {
      if (!ga) {
        ga = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Ah = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var a = e.namespaceURI === ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var X1 = /\r\n?/g, Z1 = /\u0000|\uFFFD/g;
    function Fh(e) {
      Un(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(X1, `
`).replace(Z1, "");
    }
    function Ph(e, t, a, i) {
      var l = Fh(t), s = Fh(e);
      if (s !== l && (i && (ga || (ga = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Fe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function WE(e) {
      return e.nodeType === Na ? e : e.ownerDocument;
    }
    function J1() {
    }
    function jh(e) {
      e.onclick = J1;
    }
    function eR(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === ts)
            d && Object.freeze(d), zv(t, d);
          else if (s === ep) {
            var m = d ? d[zh] : void 0;
            m != null && Tv(t, m);
          } else if (s === es)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && js(t, d);
            } else
              typeof d == "number" && js(t, "" + d);
          else
            s === Lh || s === Vl || s === $E || (Jt.hasOwnProperty(s) ? d != null && (typeof d != "function" && Ah(s, d), s === "onScroll" && un("scroll", t)) : d != null && fo(t, s, d, l));
        }
    }
    function tR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === ts ? zv(e, d) : s === ep ? Tv(e, d) : s === es ? js(e, d) : fo(e, s, d, i);
      }
    }
    function nR(e, t, a, i) {
      var l, s = WE(a), d, m = i;
      if (m === ii && (m = Fs(e)), m === ii) {
        if (l = li(e, t), !l && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var b = g.firstChild;
          d = g.removeChild(b);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var T = d;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        d = s.createElementNS(m, e);
      return m === ii && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !le.call(gg, e) && (gg[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function rR(e, t) {
      return WE(t).createTextNode(e);
    }
    function aR(e, t, a, i) {
      var l = li(t, a);
      Uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          un("cancel", e), un("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          un("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Xd.length; d++)
            un(Xd[d], e);
          s = a;
          break;
        case "source":
          un("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          un("error", e), un("load", e), s = a;
          break;
        case "details":
          un("toggle", e), s = a;
          break;
        case "input":
          gu(e, a), s = yu(e, a), un("invalid", e);
          break;
        case "option":
          Us(e, a), s = a;
          break;
        case "select":
          Sv(e, a), s = $f(e, a), un("invalid", e);
          break;
        case "textarea":
          Ev(e, a), s = If(e, a), un("invalid", e);
          break;
        default:
          s = a;
      }
      switch ($s(t, s), eR(t, e, i, s, l), t) {
        case "input":
          ho(e), Su(e, a, !1);
          break;
        case "textarea":
          ho(e), Cv(e);
          break;
        case "option":
          Hf(e, a);
          break;
        case "select":
          ky(e, a);
          break;
        default:
          typeof s.onClick == "function" && jh(e);
          break;
      }
    }
    function iR(e, t, a, i, l) {
      Uh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = yu(e, a), m = yu(e, i), s = [];
          break;
        case "select":
          d = $f(e, a), m = $f(e, i), s = [];
          break;
        case "textarea":
          d = If(e, a), m = If(e, i), s = [];
          break;
        default:
          d = a, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && jh(e);
          break;
      }
      $s(t, m);
      var g, b, T = null;
      for (g in d)
        if (!(m.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === ts) {
            var N = d[g];
            for (b in N)
              N.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else
            g === ep || g === es || g === Lh || g === Vl || g === $E || (Jt.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in m) {
        var D = m[g], j = d != null ? d[g] : void 0;
        if (!(!m.hasOwnProperty(g) || D === j || D == null && j == null))
          if (g === ts)
            if (D && Object.freeze(D), j) {
              for (b in j)
                j.hasOwnProperty(b) && (!D || !D.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in D)
                D.hasOwnProperty(b) && j[b] !== D[b] && (T || (T = {}), T[b] = D[b]);
            } else
              T || (s || (s = []), s.push(g, T)), T = D;
          else if (g === ep) {
            var H = D ? D[zh] : void 0, X = j ? j[zh] : void 0;
            H != null && X !== H && (s = s || []).push(g, H);
          } else
            g === es ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(g, "" + D) : g === Lh || g === Vl || (Jt.hasOwnProperty(g) ? (D != null && (typeof D != "function" && Ah(g, D), g === "onScroll" && un("scroll", e)), !s && j !== D && (s = [])) : (s = s || []).push(g, D));
      }
      return T && (Cu(T, m[ts]), (s = s || []).push(ts, T)), s;
    }
    function oR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && jf(e, l);
      var s = li(a, i), d = li(a, l);
      switch (tR(e, t, s, d), a) {
        case "input":
          cl(e, l);
          break;
        case "textarea":
          bv(e, l);
          break;
        case "select":
          Ny(e, l);
          break;
      }
    }
    function lR(e) {
      {
        var t = e.toLowerCase();
        return Vs.hasOwnProperty(t) && Vs[t] || null;
      }
    }
    function uR(e, t, a, i, l, s, d) {
      var m, g;
      switch (m = li(t, a), Uh(t, a), t) {
        case "dialog":
          un("cancel", e), un("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          un("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Xd.length; b++)
            un(Xd[b], e);
          break;
        case "source":
          un("error", e);
          break;
        case "img":
        case "image":
        case "link":
          un("error", e), un("load", e);
          break;
        case "details":
          un("toggle", e);
          break;
        case "input":
          gu(e, a), un("invalid", e);
          break;
        case "option":
          Us(e, a);
          break;
        case "select":
          Sv(e, a), un("invalid", e);
          break;
        case "textarea":
          Ev(e, a), un("invalid", e);
          break;
      }
      $s(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, N = 0; N < T.length; N++) {
          var D = T[N].name.toLowerCase();
          switch (D) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(T[N].name);
          }
        }
      }
      var j = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var X = a[H];
          if (H === es)
            typeof X == "string" ? e.textContent !== X && (a[Vl] !== !0 && Ph(e.textContent, X, s, d), j = [es, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Vl] !== !0 && Ph(e.textContent, X, s, d), j = [es, "" + X]);
          else if (Jt.hasOwnProperty(H))
            X != null && (typeof X != "function" && Ah(H, X), H === "onScroll" && un("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var ke = void 0, qe = m && ht ? null : ja(H);
            if (a[Vl] !== !0) {
              if (!(H === Lh || H === Vl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === ep) {
                  var He = e.innerHTML, bt = X ? X[zh] : void 0;
                  if (bt != null) {
                    var gt = BE(e, bt);
                    gt !== He && tp(H, He, gt);
                  }
                } else if (H === ts) {
                  if (g.delete(H), IE) {
                    var U = Py(X);
                    ke = e.getAttribute("style"), U !== ke && tp(H, ke, U);
                  }
                } else if (m && !ht)
                  g.delete(H.toLowerCase()), ke = ws(e, H, X), X !== ke && tp(H, ke, X);
                else if (!qt(H, qe, m) && !sn(H, X, qe, m)) {
                  var Z = !1;
                  if (qe !== null)
                    g.delete(qe.attributeName), ke = lu(e, H, X, qe);
                  else {
                    var A = i;
                    if (A === ii && (A = Fs(t)), A === ii)
                      g.delete(H.toLowerCase());
                    else {
                      var se = lR(H);
                      se !== null && se !== H && (Z = !0, g.delete(se)), g.delete(H);
                    }
                    ke = ws(e, H, X);
                  }
                  var Ne = ht;
                  !Ne && X !== ke && !Z && tp(H, ke, X);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Vl] !== !0 && VE(g), t) {
        case "input":
          ho(e), Su(e, a, !0);
          break;
        case "textarea":
          ho(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jh(e);
          break;
      }
      return j;
    }
    function sR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Sg(e, t) {
      {
        if (ga)
          return;
        ga = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Eg(e, t) {
      {
        if (ga)
          return;
        ga = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function bg(e, t, a) {
      {
        if (ga)
          return;
        ga = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Cg(e, t) {
      {
        if (t === "" || ga)
          return;
        ga = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function cR(e, t, a) {
      switch (t) {
        case "input":
          hv(e, a);
          return;
        case "textarea":
          Bf(e, a);
          return;
        case "select":
          My(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var fR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], YE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], dR = YE.concat(["button"]), pR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], qE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = mt({}, e || qE), i = {
          tag: t
        };
        return YE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), dR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), fR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var vR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return pR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, hR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, QE = {};
      np = function(e, t, a) {
        a = a || qE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = vR(e, l) ? null : i, d = s ? null : hR(e, a), m = s || d;
        if (m) {
          var g = m.tag, b = !!s + "|" + e + "|" + g;
          if (!QE[b]) {
            QE[b] = !0;
            var T = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var D = "";
              g === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, N, D);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var Hh = "suppressHydrationWarning", $h = "$", Vh = "/$", ap = "$?", ip = "$!", mR = "style", Tg = null, xg = null;
    function yR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Na:
        case mo: {
          t = i === Na ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Yf(null, "");
          break;
        }
        default: {
          var s = i === Tn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Yf(d, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), g = rp(null, m);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function gR(e, t, a) {
      {
        var i = e, l = Yf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function ML(e) {
      return e;
    }
    function SR(e) {
      Tg = Xr(), xg = L1();
      var t = null;
      return $n(!1), t;
    }
    function ER(e) {
      z1(xg), $n(Tg), Tg = null, xg = null;
    }
    function bR(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (np(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, g = rp(d.ancestorInfo, e);
          np(null, m, g);
        }
        s = d.namespace;
      }
      var b = nR(e, t, a, s);
      return up(l, b), _g(b, t), b;
    }
    function CR(e, t) {
      e.appendChild(t);
    }
    function TR(e, t, a, i, l) {
      switch (aR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function xR(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, g = rp(d.ancestorInfo, t);
          np(null, m, g);
        }
      }
      return iR(e, t, a, i);
    }
    function Rg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function RR(e, t, a, i) {
      {
        var l = a;
        np(null, e, l.ancestorInfo);
      }
      var s = rR(e, t);
      return up(i, s), s;
    }
    function wR() {
      var e = window.event;
      return e === void 0 ? hi : gr(e.type);
    }
    var wg = typeof setTimeout == "function" ? setTimeout : void 0, OR = typeof clearTimeout == "function" ? clearTimeout : void 0, Og = -1, GE = typeof Promise == "function" ? Promise : void 0, DR = typeof queueMicrotask == "function" ? queueMicrotask : typeof GE < "u" ? function(e) {
      return GE.resolve(null).then(e).catch(kR);
    } : wg;
    function kR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function NR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function MR(e, t, a, i, l, s) {
      oR(e, t, a, i, l), _g(e, l);
    }
    function KE(e) {
      js(e, "");
    }
    function _R(e, t, a) {
      e.nodeValue = a;
    }
    function LR(e, t) {
      e.appendChild(t);
    }
    function zR(e, t) {
      var a;
      e.nodeType === Tn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jh(a);
    }
    function UR(e, t, a) {
      e.insertBefore(t, a);
    }
    function AR(e, t, a) {
      e.nodeType === Tn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function FR(e, t) {
      e.removeChild(t);
    }
    function PR(e, t) {
      e.nodeType === Tn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Dg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Tn) {
          var s = l.data;
          if (s === Vh)
            if (i === 0) {
              e.removeChild(l), yt(t);
              return;
            } else
              i--;
          else
            (s === $h || s === ap || s === ip) && i++;
        }
        a = l;
      } while (a);
      yt(t);
    }
    function jR(e, t) {
      e.nodeType === Tn ? Dg(e.parentNode, t) : e.nodeType === Mr && Dg(e, t), yt(e);
    }
    function HR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function $R(e) {
      e.nodeValue = "";
    }
    function VR(e, t) {
      e = e;
      var a = t[mR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Hs("display", i);
    }
    function IR(e, t) {
      e.nodeValue = t;
    }
    function BR(e) {
      e.nodeType === Mr ? e.textContent = "" : e.nodeType === Na && e.documentElement && e.removeChild(e.documentElement);
    }
    function WR(e, t, a) {
      return e.nodeType !== Mr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function YR(e, t) {
      return t === "" || e.nodeType !== oi ? null : e;
    }
    function qR(e) {
      return e.nodeType !== Tn ? null : e;
    }
    function XE(e) {
      return e.data === ap;
    }
    function kg(e) {
      return e.data === ip;
    }
    function QR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function GR(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Mr || t === oi)
          break;
        if (t === Tn) {
          var a = e.data;
          if (a === $h || a === ip || a === ap)
            break;
          if (a === Vh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Ih(e.nextSibling);
    }
    function KR(e) {
      return Ih(e.firstChild);
    }
    function XR(e) {
      return Ih(e.firstChild);
    }
    function ZR(e) {
      return Ih(e.nextSibling);
    }
    function JR(e, t, a, i, l, s, d) {
      up(s, e), _g(e, a);
      var m;
      {
        var g = l;
        m = g.namespace;
      }
      var b = (s.mode & pt) !== Ge;
      return uR(e, t, a, m, i, b, d);
    }
    function ew(e, t, a, i) {
      return up(a, e), a.mode & pt, sR(e, t);
    }
    function tw(e, t) {
      up(t, e);
    }
    function nw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === Vh) {
            if (a === 0)
              return op(t);
            a--;
          } else
            (i === $h || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function ZE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === $h || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function rw(e) {
      yt(e);
    }
    function aw(e) {
      yt(e);
    }
    function iw(e) {
      return e !== "head" && e !== "body";
    }
    function ow(e, t, a, i) {
      var l = !0;
      Ph(t.nodeValue, a, i, l);
    }
    function lw(e, t, a, i, l, s) {
      if (t[Hh] !== !0) {
        var d = !0;
        Ph(i.nodeValue, l, s, d);
      }
    }
    function uw(e, t) {
      t.nodeType === Mr ? Sg(e, t) : t.nodeType === Tn || Eg(e, t);
    }
    function sw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Mr ? Sg(a, t) : t.nodeType === Tn || Eg(a, t));
      }
    }
    function cw(e, t, a, i, l) {
      (l || t[Hh] !== !0) && (i.nodeType === Mr ? Sg(a, i) : i.nodeType === Tn || Eg(a, i));
    }
    function fw(e, t, a) {
      bg(e, t);
    }
    function dw(e, t) {
      Cg(e, t);
    }
    function pw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && bg(i, t);
      }
    }
    function vw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Cg(a, t);
      }
    }
    function hw(e, t, a, i, l, s) {
      (s || t[Hh] !== !0) && bg(a, i);
    }
    function mw(e, t, a, i, l) {
      (l || t[Hh] !== !0) && Cg(a, i);
    }
    function yw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function gw(e) {
      Zd(e);
    }
    var Yc = Math.random().toString(36).slice(2), qc = "__reactFiber$" + Yc, Ng = "__reactProps$" + Yc, lp = "__reactContainer$" + Yc, Mg = "__reactEvents$" + Yc, Sw = "__reactListeners$" + Yc, Ew = "__reactHandles$" + Yc;
    function bw(e) {
      delete e[qc], delete e[Ng], delete e[Mg], delete e[Sw], delete e[Ew];
    }
    function up(e, t) {
      t[qc] = e;
    }
    function Bh(e, t) {
      t[lp] = e;
    }
    function JE(e) {
      e[lp] = null;
    }
    function sp(e) {
      return !!e[lp];
    }
    function ns(e) {
      var t = e[qc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lp] || a[qc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = ZE(e); l !== null; ) {
              var s = l[qc];
              if (s)
                return s;
              l = ZE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Il(e) {
      var t = e[qc] || e[lp];
      return t && (t.tag === B || t.tag === J || t.tag === te || t.tag === F) ? t : null;
    }
    function Qc(e) {
      if (e.tag === B || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Wh(e) {
      return e[Ng] || null;
    }
    function _g(e, t) {
      e[Ng] = t;
    }
    function Cw(e) {
      var t = e[Mg];
      return t === void 0 && (t = e[Mg] = /* @__PURE__ */ new Set()), t;
    }
    var eb = {}, tb = y.ReactDebugCurrentFrame;
    function Yh(e) {
      if (e) {
        var t = e._owner, a = fu(e.type, e._source, t ? t.type : null);
        tb.setExtraStackFrame(a);
      } else
        tb.setExtraStackFrame(null);
    }
    function Ei(e, t, a, i, l) {
      {
        var s = Function.call.bind(le);
        for (var d in e)
          if (s(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              m = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              m = b;
            }
            m && !(m instanceof Error) && (Yh(l), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof m), Yh(null)), m instanceof Error && !(m.message in eb) && (eb[m.message] = !0, Yh(l), S("Failed %s type: %s", a, m.message), Yh(null));
          }
      }
    }
    var Lg = [], qh;
    qh = [];
    var Bo = -1;
    function Bl(e) {
      return {
        current: e
      };
    }
    function Hr(e, t) {
      if (Bo < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== qh[Bo] && S("Unexpected Fiber popped."), e.current = Lg[Bo], Lg[Bo] = null, qh[Bo] = null, Bo--;
    }
    function $r(e, t, a) {
      Bo++, Lg[Bo] = e.current, qh[Bo] = a, e.current = t;
    }
    var zg;
    zg = {};
    var Ua = {};
    Object.freeze(Ua);
    var Wo = Bl(Ua), to = Bl(!1), Ug = Ua;
    function Gc(e, t, a) {
      return a && no(t) ? Ug : Wo.current;
    }
    function nb(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Kc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ua;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var m = ot(e) || "Unknown";
          Ei(i, s, "context", m);
        }
        return l && nb(e, t, s), s;
      }
    }
    function Qh() {
      return to.current;
    }
    function no(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gh(e) {
      Hr(to, e), Hr(Wo, e);
    }
    function Ag(e) {
      Hr(to, e), Hr(Wo, e);
    }
    function rb(e, t, a) {
      {
        if (Wo.current !== Ua)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        $r(Wo, t, e), $r(to, a, e);
      }
    }
    function ab(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ot(e) || "Unknown";
            zg[s] || (zg[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in l))
            throw new Error((ot(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var g = ot(e) || "Unknown";
          Ei(l, d, "child context", g);
        }
        return mt({}, a, d);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ua;
        return Ug = Wo.current, $r(Wo, a, e), $r(to, to.current, e), !0;
      }
    }
    function ib(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = ab(e, t, Ug);
          i.__reactInternalMemoizedMergedChildContext = l, Hr(to, e), Hr(Wo, e), $r(Wo, l, e), $r(to, a, e);
        } else
          Hr(to, e), $r(to, a, e);
      }
    }
    function Tw(e) {
      {
        if (!dd(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case M: {
              var a = t.type;
              if (no(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Wl = 0, Xh = 1, Yo = null, Fg = !1, Pg = !1;
    function ob(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    function xw(e) {
      Fg = !0, ob(e);
    }
    function lb() {
      Fg && Yl();
    }
    function Yl() {
      if (!Pg && Yo !== null) {
        Pg = !0;
        var e = 0, t = va();
        try {
          var a = !0, i = Yo;
          for (Nn(lr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Yo = null, Fg = !1;
        } catch (s) {
          throw Yo !== null && (Yo = Yo.slice(e + 1)), Xs(Js, Yl), s;
        } finally {
          Nn(t), Pg = !1;
        }
      }
      return null;
    }
    var Xc = [], Zc = 0, Zh = null, Jh = 0, Qa = [], Ga = 0, rs = null, qo = 1, Qo = "";
    function Rw(e) {
      return is(), (e.flags & sd) !== We;
    }
    function ww(e) {
      return is(), Jh;
    }
    function Ow() {
      var e = Qo, t = qo, a = t & ~Dw(t);
      return a.toString(32) + e;
    }
    function as(e, t) {
      is(), Xc[Zc++] = Jh, Xc[Zc++] = Zh, Zh = e, Jh = t;
    }
    function ub(e, t, a) {
      is(), Qa[Ga++] = qo, Qa[Ga++] = Qo, Qa[Ga++] = rs, rs = e;
      var i = qo, l = Qo, s = em(i) - 1, d = i & ~(1 << s), m = a + 1, g = em(t) + s;
      if (g > 30) {
        var b = s - s % 5, T = (1 << b) - 1, N = (d & T).toString(32), D = d >> b, j = s - b, H = em(t) + j, X = m << j, ke = X | D, qe = N + l;
        qo = 1 << H | ke, Qo = qe;
      } else {
        var He = m << s, bt = He | d, gt = l;
        qo = 1 << g | bt, Qo = gt;
      }
    }
    function jg(e) {
      is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        as(e, a), ub(e, a, i);
      }
    }
    function em(e) {
      return 32 - ic(e);
    }
    function Dw(e) {
      return 1 << em(e) - 1;
    }
    function Hg(e) {
      for (; e === Zh; )
        Zh = Xc[--Zc], Xc[Zc] = null, Jh = Xc[--Zc], Xc[Zc] = null;
      for (; e === rs; )
        rs = Qa[--Ga], Qa[Ga] = null, Qo = Qa[--Ga], Qa[Ga] = null, qo = Qa[--Ga], Qa[Ga] = null;
    }
    function kw() {
      return is(), rs !== null ? {
        id: qo,
        overflow: Qo
      } : null;
    }
    function Nw(e, t) {
      is(), Qa[Ga++] = qo, Qa[Ga++] = Qo, Qa[Ga++] = rs, qo = t.id, Qo = t.overflow, rs = e;
    }
    function is() {
      Er() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Sr = null, Ka = null, bi = !1, os = !1, ql = null;
    function Mw() {
      bi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sb() {
      os = !0;
    }
    function _w() {
      return os;
    }
    function Lw(e) {
      var t = e.stateNode.containerInfo;
      return Ka = XR(t), Sr = e, bi = !0, ql = null, os = !1, !0;
    }
    function zw(e, t, a) {
      return Ka = ZR(t), Sr = e, bi = !0, ql = null, os = !1, a !== null && Nw(e, a), !0;
    }
    function cb(e, t) {
      switch (e.tag) {
        case F: {
          uw(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var a = (e.mode & pt) !== Ge;
          cw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case te: {
          var i = e.memoizedState;
          i.dehydrated !== null && sw(i.dehydrated, t);
          break;
        }
      }
    }
    function fb(e, t) {
      cb(e, t);
      var a = Fk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Dt) : i.push(a);
    }
    function $g(e, t) {
      {
        if (os)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var i = t.type;
                t.pendingProps, fw(a, i);
                break;
              case J:
                var l = t.pendingProps;
                dw(a, l);
                break;
            }
            break;
          }
          case B: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case B: {
                var g = t.type, b = t.pendingProps, T = (e.mode & pt) !== Ge;
                hw(
                  s,
                  d,
                  m,
                  g,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case J: {
                var N = t.pendingProps, D = (e.mode & pt) !== Ge;
                mw(
                  s,
                  d,
                  m,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case te: {
            var j = e.memoizedState, H = j.dehydrated;
            if (H !== null)
              switch (t.tag) {
                case B:
                  var X = t.type;
                  t.pendingProps, pw(H, X);
                  break;
                case J:
                  var ke = t.pendingProps;
                  vw(H, ke);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function db(e, t) {
      t.flags = t.flags & ~sa | Qt, $g(e, t);
    }
    function pb(e, t) {
      switch (e.tag) {
        case B: {
          var a = e.type;
          e.pendingProps;
          var i = WR(t, a);
          return i !== null ? (e.stateNode = i, Sr = e, Ka = KR(i), !0) : !1;
        }
        case J: {
          var l = e.pendingProps, s = YR(t, l);
          return s !== null ? (e.stateNode = s, Sr = e, Ka = null, !0) : !1;
        }
        case te: {
          var d = qR(t);
          if (d !== null) {
            var m = {
              dehydrated: d,
              treeContext: kw(),
              retryLane: Pr
            };
            e.memoizedState = m;
            var g = Pk(d);
            return g.return = e, e.child = g, Sr = e, Ka = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Vg(e) {
      return (e.mode & pt) !== Ge && (e.flags & et) === We;
    }
    function Ig(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Bg(e) {
      if (bi) {
        var t = Ka;
        if (!t) {
          Vg(e) && ($g(Sr, e), Ig()), db(Sr, e), bi = !1, Sr = e;
          return;
        }
        var a = t;
        if (!pb(e, t)) {
          Vg(e) && ($g(Sr, e), Ig()), t = op(a);
          var i = Sr;
          if (!t || !pb(e, t)) {
            db(Sr, e), bi = !1, Sr = e;
            return;
          }
          fb(i, a);
        }
      }
    }
    function Uw(e, t, a) {
      var i = e.stateNode, l = !os, s = JR(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Aw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ew(t, a, e);
      if (i) {
        var l = Sr;
        if (l !== null)
          switch (l.tag) {
            case F: {
              var s = l.stateNode.containerInfo, d = (l.mode & pt) !== Ge;
              ow(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case B: {
              var m = l.type, g = l.memoizedProps, b = l.stateNode, T = (l.mode & pt) !== Ge;
              lw(
                m,
                g,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Fw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      tw(a, e);
    }
    function Pw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return nw(a);
    }
    function vb(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== F && t.tag !== te; )
        t = t.return;
      Sr = t;
    }
    function tm(e) {
      if (e !== Sr)
        return !1;
      if (!bi)
        return vb(e), bi = !0, !1;
      if (e.tag !== F && (e.tag !== B || iw(e.type) && !Rg(e.type, e.memoizedProps))) {
        var t = Ka;
        if (t)
          if (Vg(e))
            hb(e), Ig();
          else
            for (; t; )
              fb(e, t), t = op(t);
      }
      return vb(e), e.tag === te ? Ka = Pw(e) : Ka = Sr ? op(e.stateNode) : null, !0;
    }
    function jw() {
      return bi && Ka !== null;
    }
    function hb(e) {
      for (var t = Ka; t; )
        cb(e, t), t = op(t);
    }
    function Jc() {
      Sr = null, Ka = null, bi = !1, os = !1;
    }
    function mb() {
      ql !== null && (cT(ql), ql = null);
    }
    function Er() {
      return bi;
    }
    function Wg(e) {
      ql === null ? ql = [e] : ql.push(e);
    }
    var Hw = y.ReactCurrentBatchConfig, $w = null;
    function Vw() {
      return Hw.transition;
    }
    var Ci = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Iw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & on && (t = a), a = a.return;
        return t;
      }, ls = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], us = /* @__PURE__ */ new Set();
      Ci.recordUnsafeLifecycleWarnings = function(e, t) {
        us.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & on && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & on && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & on && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Ci.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(D) {
          e.add(ot(D) || "Component"), us.add(D.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(D) {
          t.add(ot(D) || "Component"), us.add(D.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(D) {
          a.add(ot(D) || "Component"), us.add(D.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(D) {
          i.add(ot(D) || "Component"), us.add(D.type);
        }), pp = []);
        var l = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(D) {
          l.add(ot(D) || "Component"), us.add(D.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(D) {
          s.add(ot(D) || "Component"), us.add(D.type);
        }), hp = []), t.size > 0) {
          var d = ls(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var m = ls(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var g = ls(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var b = ls(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = ls(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var N = ls(l);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var nm = /* @__PURE__ */ new Map(), yb = /* @__PURE__ */ new Set();
      Ci.recordLegacyContextWarning = function(e, t) {
        var a = Iw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yb.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, Ci.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ot(s) || "Component"), yb.add(s.type);
            });
            var l = ls(i);
            try {
              At(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              On();
            }
          }
        });
      }, Ci.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    function Ti(e, t) {
      if (e && e.defaultProps) {
        var a = mt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Yg = Bl(null), qg;
    qg = {};
    var rm = null, ef = null, Qg = null, am = !1;
    function im() {
      rm = null, ef = null, Qg = null, am = !1;
    }
    function gb() {
      am = !0;
    }
    function Sb() {
      am = !1;
    }
    function Eb(e, t, a) {
      $r(Yg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== qg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = qg;
    }
    function Gg(e, t) {
      var a = Yg.current;
      Hr(Yg, t), e._currentValue = a;
    }
    function Kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Lo(i.childLanes, t) ? l !== null && !Lo(l.childLanes, t) && (l.childLanes = st(l.childLanes, t)) : (i.childLanes = st(i.childLanes, t), l !== null && (l.childLanes = st(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bw(e, t, a) {
      Ww(e, t, a);
    }
    function Ww(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === M) {
                var m = kn(a), g = Go(Yt, m);
                g.tag = lm;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, N = T.pending;
                  N === null ? g.next = g : (g.next = N.next, N.next = g), T.pending = g;
                }
              }
              i.lanes = st(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = st(D.lanes, a)), Kg(i.return, a, e), s.lanes = st(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ye)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Ae) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = st(j.lanes, a);
          var H = j.alternate;
          H !== null && (H.lanes = st(H.lanes, a)), Kg(j, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var X = l.sibling;
            if (X !== null) {
              X.return = l.return, l = X;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function tf(e, t) {
      rm = e, ef = null, Qg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (jr(a.lanes, t) && kp(), a.firstContext = null);
      }
    }
    function In(e) {
      am && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Qg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ef === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ef = a, rm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          ef = ef.next = a;
      }
      return t;
    }
    var ss = null;
    function Xg(e) {
      ss === null ? ss = [e] : ss.push(e);
    }
    function Yw() {
      if (ss !== null) {
        for (var e = 0; e < ss.length; e++) {
          var t = ss[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ss = null;
      }
    }
    function bb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function qw(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Qw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function Sa(e, t) {
      return om(e, t);
    }
    var Gw = om;
    function om(e, t) {
      e.lanes = st(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = st(a.lanes, t)), a === null && (e.flags & (Qt | sa)) !== We && CT(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = st(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = st(a.childLanes, t) : (l.flags & (Qt | sa)) !== We && CT(e), i = l, l = l.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var Cb = 0, Tb = 1, lm = 2, Zg = 3, um = !1, Jg, sm;
    Jg = !1, sm = null;
    function eS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function xb(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Go(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Cb,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ql(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (sm === l && !Jg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Jg = !0), GD()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Gw(e, a);
      } else
        return Qw(e, l, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Rd(a)) {
          var s = l.lanes;
          s = Od(s, e.pendingLanes);
          var d = st(s, a);
          l.lanes = d, Dl(e, d);
        }
      }
    }
    function tS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var g = m;
            do {
              var b = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = b : (d.next = b, d = b), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function Kw(e, t, a, i, l, s) {
      switch (a.tag) {
        case Tb: {
          var d = a.payload;
          if (typeof d == "function") {
            gb();
            var m = d.call(s, i, l);
            {
              if (e.mode & on) {
                Dn(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  Dn(!1);
                }
              }
              Sb();
            }
            return m;
          }
          return d;
        }
        case Zg:
          e.flags = e.flags & ~Pn | et;
        case Cb: {
          var g = a.payload, b;
          if (typeof g == "function") {
            gb(), b = g.call(s, i, l);
            {
              if (e.mode & on) {
                Dn(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  Dn(!1);
                }
              }
              Sb();
            }
          } else
            b = g;
          return b == null ? i : mt({}, i, b);
        }
        case lm:
          return um = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var l = e.updateQueue;
      um = !1, sm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var g = m, b = g.next;
        g.next = null, d === null ? s = b : d.next = b, d = g;
        var T = e.alternate;
        if (T !== null) {
          var N = T.updateQueue, D = N.lastBaseUpdate;
          D !== d && (D === null ? N.firstBaseUpdate = b : D.next = b, N.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var j = l.baseState, H = ee, X = null, ke = null, qe = null, He = s;
        do {
          var bt = He.lane, gt = He.eventTime;
          if (Lo(i, bt)) {
            if (qe !== null) {
              var Z = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                tag: He.tag,
                payload: He.payload,
                callback: He.callback,
                next: null
              };
              qe = qe.next = Z;
            }
            j = Kw(e, l, He, j, t, a);
            var A = He.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            He.lane !== St) {
              e.flags |= Va;
              var se = l.effects;
              se === null ? l.effects = [He] : se.push(He);
            }
          } else {
            var U = {
              eventTime: gt,
              lane: bt,
              tag: He.tag,
              payload: He.payload,
              callback: He.callback,
              next: null
            };
            qe === null ? (ke = qe = U, X = j) : qe = qe.next = U, H = st(H, bt);
          }
          if (He = He.next, He === null) {
            if (m = l.shared.pending, m === null)
              break;
            var Ne = m, xe = Ne.next;
            Ne.next = null, He = xe, l.lastBaseUpdate = Ne, l.shared.pending = null;
          }
        } while (!0);
        qe === null && (X = j), l.baseState = X, l.firstBaseUpdate = ke, l.lastBaseUpdate = qe;
        var Je = l.shared.interleaved;
        if (Je !== null) {
          var at = Je;
          do
            H = st(H, at.lane), at = at.next;
          while (at !== Je);
        } else
          s === null && (l.shared.lanes = ee);
        $p(H), e.lanes = H, e.memoizedState = j;
      }
      sm = null;
    }
    function Xw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Rb() {
      um = !1;
    }
    function dm() {
      return um;
    }
    function wb(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Xw(d, a));
        }
    }
    var nS = {}, Ob = new p.Component().refs, rS, aS, iS, oS, lS, Db, pm, uS, sS, cS;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set();
      var kb = /* @__PURE__ */ new Set();
      pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          kb.has(a) || (kb.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Db = function(e, t) {
        if (t === void 0) {
          var a = Bt(e) || "Component";
          lS.has(a) || (lS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & on) {
          Dn(!0);
          try {
            s = a(i, l);
          } finally {
            Dn(!1);
          }
        }
        Db(t, s);
      }
      var d = s == null ? l : mt({}, l, s);
      if (e.memoizedState = d, e.lanes === ee) {
        var m = e.updateQueue;
        m.baseState = d;
      }
    }
    var dS = {
      isMounted: Qr,
      enqueueSetState: function(e, t, a) {
        var i = la(e), l = ea(), s = nu(i), d = Go(l, s);
        d.payload = t, a != null && (pm(a, "setState"), d.callback = a);
        var m = Ql(i, d, s);
        m !== null && (tr(m, i, s, l), cm(m, i, s)), Yi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = la(e), l = ea(), s = nu(i), d = Go(l, s);
        d.tag = Tb, d.payload = t, a != null && (pm(a, "replaceState"), d.callback = a);
        var m = Ql(i, d, s);
        m !== null && (tr(m, i, s, l), cm(m, i, s)), Yi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = la(e), i = ea(), l = nu(a), s = Go(i, l);
        s.tag = lm, t != null && (pm(t, "forceUpdate"), s.callback = t);
        var d = Ql(a, s, l);
        d !== null && (tr(d, a, l, i), cm(d, a, l)), bd(a, l);
      }
    };
    function Nb(e, t, a, i, l, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var g = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & on) {
            Dn(!0);
            try {
              g = m.shouldComponentUpdate(i, s, d);
            } finally {
              Dn(!1);
            }
          }
          g === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Bt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Be(a, i) || !Be(l, s) : !0;
    }
    function Zw(e, t, a) {
      var i = e.stateNode;
      {
        var l = Bt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Bt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || An(m)) && S("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Mb(e, t) {
      t.updater = dS, e.stateNode = t, gl(t, e), t._reactInternalInstance = nS;
    }
    function _b(e, t, a) {
      var i = !1, l = Ua, s = Ua, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === kf && d._context === void 0
        );
        if (!m && !cS.has(t)) {
          cS.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === Df ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Bt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = In(d);
      else {
        l = Gc(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Kc(e, l) : Ua;
      }
      var T = new t(a, s);
      if (e.mode & on) {
        Dn(!0);
        try {
          T = new t(a, s);
        } finally {
          Dn(!1);
        }
      }
      var N = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      Mb(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var D = Bt(t) || "Component";
          aS.has(D) || (aS.add(D), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, T.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var j = null, H = null, X = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), j !== null || H !== null || X !== null) {
            var ke = Bt(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            oS.has(ke) || (oS.add(ke), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, qe, j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && nb(e, l, s), T;
    }
    function Jw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ot(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function Lb(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ot(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      Zw(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = Ob, eS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = In(s);
      else {
        var d = Gc(e, t, !0);
        l.context = Kc(e, d);
      }
      {
        if (l.state === a) {
          var m = Bt(t) || "Component";
          uS.has(m) || (uS.add(m), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & on && Ci.recordLegacyContextWarning(e, l), Ci.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (fS(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Jw(e, l), fm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = ut;
        b |= Lr, (e.mode & da) !== Ge && (b |= zr), e.flags |= b;
      }
    }
    function eO(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, m = t.contextType, g = Ua;
      if (typeof m == "object" && m !== null)
        g = In(m);
      else {
        var b = Gc(e, t, !0);
        g = Kc(e, b);
      }
      var T = t.getDerivedStateFromProps, N = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !N && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && Lb(e, l, a, g), Rb();
      var D = e.memoizedState, j = l.state = D;
      if (fm(e, a, l, i), j = e.memoizedState, s === a && D === j && !Qh() && !dm()) {
        if (typeof l.componentDidMount == "function") {
          var H = ut;
          H |= Lr, (e.mode & da) !== Ge && (H |= zr), e.flags |= H;
        }
        return !1;
      }
      typeof T == "function" && (fS(e, t, T, a), j = e.memoizedState);
      var X = dm() || Nb(e, t, s, a, D, j, g);
      if (X) {
        if (!N && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var ke = ut;
          ke |= Lr, (e.mode & da) !== Ge && (ke |= zr), e.flags |= ke;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var qe = ut;
          qe |= Lr, (e.mode & da) !== Ge && (qe |= zr), e.flags |= qe;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return l.props = a, l.state = j, l.context = g, X;
    }
    function tO(e, t, a, i, l) {
      var s = t.stateNode;
      xb(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : Ti(t.type, d);
      s.props = m;
      var g = t.pendingProps, b = s.context, T = a.contextType, N = Ua;
      if (typeof T == "object" && T !== null)
        N = In(T);
      else {
        var D = Gc(t, a, !0);
        N = Kc(t, D);
      }
      var j = a.getDerivedStateFromProps, H = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || b !== N) && Lb(t, s, i, N), Rb();
      var X = t.memoizedState, ke = s.state = X;
      if (fm(t, i, s, l), ke = t.memoizedState, d === g && X === ke && !Qh() && !dm() && !pe)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ut), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ua), !1;
      typeof j == "function" && (fS(t, a, j, i), ke = t.memoizedState);
      var qe = dm() || Nb(t, a, m, i, X, ke, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      pe;
      return qe ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ke, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ke, N)), typeof s.componentDidUpdate == "function" && (t.flags |= ut), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ua)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ut), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ua), t.memoizedProps = i, t.memoizedState = ke), s.props = i, s.state = ke, s.context = N, qe;
    }
    var vS, hS, mS, yS, gS, zb = function(e, t) {
    };
    vS = !1, hS = !1, mS = {}, yS = {}, gS = {}, zb = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ot(t) || "Component";
        yS[a] || (yS[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & on || lt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ot(e) || "Component";
          mS[l] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), mS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var m = s;
            if (m.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = m.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          rr(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(N) {
            var D = g.refs;
            D === Ob && (D = g.refs = {}), N === null ? delete D[b] : D[b] = N;
          };
          return T._stringRef = b, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = ot(e) || "Component";
        if (gS[t])
          return;
        gS[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Ub(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Ab(e) {
      function t(U, Z) {
        if (e) {
          var A = U.deletions;
          A === null ? (U.deletions = [Z], U.flags |= Dt) : A.push(Z);
        }
      }
      function a(U, Z) {
        if (!e)
          return null;
        for (var A = Z; A !== null; )
          t(U, A), A = A.sibling;
        return null;
      }
      function i(U, Z) {
        for (var A = /* @__PURE__ */ new Map(), se = Z; se !== null; )
          se.key !== null ? A.set(se.key, se) : A.set(se.index, se), se = se.sibling;
        return A;
      }
      function l(U, Z) {
        var A = ys(U, Z);
        return A.index = 0, A.sibling = null, A;
      }
      function s(U, Z, A) {
        if (U.index = A, !e)
          return U.flags |= sd, Z;
        var se = U.alternate;
        if (se !== null) {
          var Ne = se.index;
          return Ne < Z ? (U.flags |= Qt, Z) : Ne;
        } else
          return U.flags |= Qt, Z;
      }
      function d(U) {
        return e && U.alternate === null && (U.flags |= Qt), U;
      }
      function m(U, Z, A, se) {
        if (Z === null || Z.tag !== J) {
          var Ne = W0(A, U.mode, se);
          return Ne.return = U, Ne;
        } else {
          var xe = l(Z, A);
          return xe.return = U, xe;
        }
      }
      function g(U, Z, A, se) {
        var Ne = A.type;
        if (Ne === ni)
          return T(U, Z, A.props.children, se, A.key);
        if (Z !== null && (Z.elementType === Ne || // Keep this check inline so it only runs on the false path:
        wT(Z, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ne == "object" && Ne !== null && Ne.$$typeof === yr && Ub(Ne) === Z.type)) {
          var xe = l(Z, A.props);
          return xe.ref = mp(U, Z, A), xe.return = U, xe._debugSource = A._source, xe._debugOwner = A._owner, xe;
        }
        var Je = B0(A, U.mode, se);
        return Je.ref = mp(U, Z, A), Je.return = U, Je;
      }
      function b(U, Z, A, se) {
        if (Z === null || Z.tag !== I || Z.stateNode.containerInfo !== A.containerInfo || Z.stateNode.implementation !== A.implementation) {
          var Ne = Y0(A, U.mode, se);
          return Ne.return = U, Ne;
        } else {
          var xe = l(Z, A.children || []);
          return xe.return = U, xe;
        }
      }
      function T(U, Z, A, se, Ne) {
        if (Z === null || Z.tag !== ie) {
          var xe = au(A, U.mode, se, Ne);
          return xe.return = U, xe;
        } else {
          var Je = l(Z, A);
          return Je.return = U, Je;
        }
      }
      function N(U, Z, A) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var se = W0("" + Z, U.mode, A);
          return se.return = U, se;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case rl: {
              var Ne = B0(Z, U.mode, A);
              return Ne.ref = mp(U, null, Z), Ne.return = U, Ne;
            }
            case wa: {
              var xe = Y0(Z, U.mode, A);
              return xe.return = U, xe;
            }
            case yr: {
              var Je = Z._payload, at = Z._init;
              return N(U, at(Je), A);
            }
          }
          if (An(Z) || ri(Z)) {
            var Pt = au(Z, U.mode, A, null);
            return Pt.return = U, Pt;
          }
          vm(U, Z);
        }
        return typeof Z == "function" && hm(U), null;
      }
      function D(U, Z, A, se) {
        var Ne = Z !== null ? Z.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return Ne !== null ? null : m(U, Z, "" + A, se);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case rl:
              return A.key === Ne ? g(U, Z, A, se) : null;
            case wa:
              return A.key === Ne ? b(U, Z, A, se) : null;
            case yr: {
              var xe = A._payload, Je = A._init;
              return D(U, Z, Je(xe), se);
            }
          }
          if (An(A) || ri(A))
            return Ne !== null ? null : T(U, Z, A, se, null);
          vm(U, A);
        }
        return typeof A == "function" && hm(U), null;
      }
      function j(U, Z, A, se, Ne) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var xe = U.get(A) || null;
          return m(Z, xe, "" + se, Ne);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case rl: {
              var Je = U.get(se.key === null ? A : se.key) || null;
              return g(Z, Je, se, Ne);
            }
            case wa: {
              var at = U.get(se.key === null ? A : se.key) || null;
              return b(Z, at, se, Ne);
            }
            case yr:
              var Pt = se._payload, wt = se._init;
              return j(U, Z, A, wt(Pt), Ne);
          }
          if (An(se) || ri(se)) {
            var Ln = U.get(A) || null;
            return T(Z, Ln, se, Ne, null);
          }
          vm(Z, se);
        }
        return typeof se == "function" && hm(Z), null;
      }
      function H(U, Z, A) {
        {
          if (typeof U != "object" || U === null)
            return Z;
          switch (U.$$typeof) {
            case rl:
            case wa:
              zb(U, A);
              var se = U.key;
              if (typeof se != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(se);
                break;
              }
              if (!Z.has(se)) {
                Z.add(se);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case yr:
              var Ne = U._payload, xe = U._init;
              H(xe(Ne), Z, A);
              break;
          }
        }
        return Z;
      }
      function X(U, Z, A, se) {
        for (var Ne = null, xe = 0; xe < A.length; xe++) {
          var Je = A[xe];
          Ne = H(Je, Ne, U);
        }
        for (var at = null, Pt = null, wt = Z, Ln = 0, Ot = 0, wn = null; wt !== null && Ot < A.length; Ot++) {
          wt.index > Ot ? (wn = wt, wt = null) : wn = wt.sibling;
          var Ir = D(U, wt, A[Ot], se);
          if (Ir === null) {
            wt === null && (wt = wn);
            break;
          }
          e && wt && Ir.alternate === null && t(U, wt), Ln = s(Ir, Ln, Ot), Pt === null ? at = Ir : Pt.sibling = Ir, Pt = Ir, wt = wn;
        }
        if (Ot === A.length) {
          if (a(U, wt), Er()) {
            var Or = Ot;
            as(U, Or);
          }
          return at;
        }
        if (wt === null) {
          for (; Ot < A.length; Ot++) {
            var Fa = N(U, A[Ot], se);
            Fa !== null && (Ln = s(Fa, Ln, Ot), Pt === null ? at = Fa : Pt.sibling = Fa, Pt = Fa);
          }
          if (Er()) {
            var ta = Ot;
            as(U, ta);
          }
          return at;
        }
        for (var na = i(U, wt); Ot < A.length; Ot++) {
          var Br = j(na, U, Ot, A[Ot], se);
          Br !== null && (e && Br.alternate !== null && na.delete(Br.key === null ? Ot : Br.key), Ln = s(Br, Ln, Ot), Pt === null ? at = Br : Pt.sibling = Br, Pt = Br);
        }
        if (e && na.forEach(function(Sf) {
          return t(U, Sf);
        }), Er()) {
          var tl = Ot;
          as(U, tl);
        }
        return at;
      }
      function ke(U, Z, A, se) {
        var Ne = ri(A);
        if (typeof Ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (hS || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hS = !0), A.entries === Ne && (vS || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vS = !0);
          var xe = Ne.call(A);
          if (xe)
            for (var Je = null, at = xe.next(); !at.done; at = xe.next()) {
              var Pt = at.value;
              Je = H(Pt, Je, U);
            }
        }
        var wt = Ne.call(A);
        if (wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Ln = null, Ot = null, wn = Z, Ir = 0, Or = 0, Fa = null, ta = wt.next(); wn !== null && !ta.done; Or++, ta = wt.next()) {
          wn.index > Or ? (Fa = wn, wn = null) : Fa = wn.sibling;
          var na = D(U, wn, ta.value, se);
          if (na === null) {
            wn === null && (wn = Fa);
            break;
          }
          e && wn && na.alternate === null && t(U, wn), Ir = s(na, Ir, Or), Ot === null ? Ln = na : Ot.sibling = na, Ot = na, wn = Fa;
        }
        if (ta.done) {
          if (a(U, wn), Er()) {
            var Br = Or;
            as(U, Br);
          }
          return Ln;
        }
        if (wn === null) {
          for (; !ta.done; Or++, ta = wt.next()) {
            var tl = N(U, ta.value, se);
            tl !== null && (Ir = s(tl, Ir, Or), Ot === null ? Ln = tl : Ot.sibling = tl, Ot = tl);
          }
          if (Er()) {
            var Sf = Or;
            as(U, Sf);
          }
          return Ln;
        }
        for (var Yp = i(U, wn); !ta.done; Or++, ta = wt.next()) {
          var co = j(Yp, U, Or, ta.value, se);
          co !== null && (e && co.alternate !== null && Yp.delete(co.key === null ? Or : co.key), Ir = s(co, Ir, Or), Ot === null ? Ln = co : Ot.sibling = co, Ot = co);
        }
        if (e && Yp.forEach(function(hN) {
          return t(U, hN);
        }), Er()) {
          var vN = Or;
          as(U, vN);
        }
        return Ln;
      }
      function qe(U, Z, A, se) {
        if (Z !== null && Z.tag === J) {
          a(U, Z.sibling);
          var Ne = l(Z, A);
          return Ne.return = U, Ne;
        }
        a(U, Z);
        var xe = W0(A, U.mode, se);
        return xe.return = U, xe;
      }
      function He(U, Z, A, se) {
        for (var Ne = A.key, xe = Z; xe !== null; ) {
          if (xe.key === Ne) {
            var Je = A.type;
            if (Je === ni) {
              if (xe.tag === ie) {
                a(U, xe.sibling);
                var at = l(xe, A.props.children);
                return at.return = U, at._debugSource = A._source, at._debugOwner = A._owner, at;
              }
            } else if (xe.elementType === Je || // Keep this check inline so it only runs on the false path:
            wT(xe, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === yr && Ub(Je) === xe.type) {
              a(U, xe.sibling);
              var Pt = l(xe, A.props);
              return Pt.ref = mp(U, xe, A), Pt.return = U, Pt._debugSource = A._source, Pt._debugOwner = A._owner, Pt;
            }
            a(U, xe);
            break;
          } else
            t(U, xe);
          xe = xe.sibling;
        }
        if (A.type === ni) {
          var wt = au(A.props.children, U.mode, se, A.key);
          return wt.return = U, wt;
        } else {
          var Ln = B0(A, U.mode, se);
          return Ln.ref = mp(U, Z, A), Ln.return = U, Ln;
        }
      }
      function bt(U, Z, A, se) {
        for (var Ne = A.key, xe = Z; xe !== null; ) {
          if (xe.key === Ne)
            if (xe.tag === I && xe.stateNode.containerInfo === A.containerInfo && xe.stateNode.implementation === A.implementation) {
              a(U, xe.sibling);
              var Je = l(xe, A.children || []);
              return Je.return = U, Je;
            } else {
              a(U, xe);
              break;
            }
          else
            t(U, xe);
          xe = xe.sibling;
        }
        var at = Y0(A, U.mode, se);
        return at.return = U, at;
      }
      function gt(U, Z, A, se) {
        var Ne = typeof A == "object" && A !== null && A.type === ni && A.key === null;
        if (Ne && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case rl:
              return d(He(U, Z, A, se));
            case wa:
              return d(bt(U, Z, A, se));
            case yr:
              var xe = A._payload, Je = A._init;
              return gt(U, Z, Je(xe), se);
          }
          if (An(A))
            return X(U, Z, A, se);
          if (ri(A))
            return ke(U, Z, A, se);
          vm(U, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? d(qe(U, Z, "" + A, se)) : (typeof A == "function" && hm(U), a(U, Z));
      }
      return gt;
    }
    var nf = Ab(!0), Fb = Ab(!1);
    function nO(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ys(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ys(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function rO(e, t) {
      for (var a = e.child; a !== null; )
        _k(a, t), a = a.sibling;
    }
    var yp = {}, Gl = Bl(yp), gp = Bl(yp), mm = Bl(yp);
    function ym(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Pb() {
      var e = ym(mm.current);
      return e;
    }
    function SS(e, t) {
      $r(mm, t, e), $r(gp, e, e), $r(Gl, yp, e);
      var a = yR(t);
      Hr(Gl, e), $r(Gl, a, e);
    }
    function rf(e) {
      Hr(Gl, e), Hr(gp, e), Hr(mm, e);
    }
    function ES() {
      var e = ym(Gl.current);
      return e;
    }
    function jb(e) {
      ym(mm.current);
      var t = ym(Gl.current), a = gR(t, e.type);
      t !== a && ($r(gp, e, e), $r(Gl, a, e));
    }
    function bS(e) {
      gp.current === e && (Hr(Gl, e), Hr(gp, e));
    }
    var aO = 0, Hb = 1, $b = 1, Sp = 2, xi = Bl(aO);
    function CS(e, t) {
      return (e & t) !== 0;
    }
    function af(e) {
      return e & Hb;
    }
    function TS(e, t) {
      return e & Hb | t;
    }
    function iO(e, t) {
      return e | t;
    }
    function Kl(e, t) {
      $r(xi, t, e);
    }
    function of(e) {
      Hr(xi, e);
    }
    function oO(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || XE(i) || kg(i))
              return t;
          }
        } else if (t.tag === Me && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & et) !== We;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ea = (
      /*   */
      0
    ), Qn = (
      /* */
      1
    ), ro = (
      /*  */
      2
    ), Gn = (
      /*    */
      4
    ), br = (
      /*   */
      8
    ), xS = [];
    function RS() {
      for (var e = 0; e < xS.length; e++) {
        var t = xS[e];
        t._workInProgressVersionPrimary = null;
      }
      xS.length = 0;
    }
    function lO(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Oe = y.ReactCurrentDispatcher, Ep = y.ReactCurrentBatchConfig, wS, lf;
    wS = /* @__PURE__ */ new Set();
    var cs = ee, Ft = null, Kn = null, Xn = null, Sm = !1, bp = !1, Cp = 0, uO = 0, sO = 25, ne = null, Xa = null, Xl = -1, OS = !1;
    function Mt() {
      {
        var e = ne;
        Xa === null ? Xa = [e] : Xa.push(e);
      }
    }
    function Ee() {
      {
        var e = ne;
        Xa !== null && (Xl++, Xa[Xl] !== e && cO(e));
      }
    }
    function uf(e) {
      e != null && !An(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function cO(e) {
      {
        var t = ot(Ft);
        if (!wS.has(t) && (wS.add(t), Xa !== null)) {
          for (var a = "", i = 30, l = 0; l <= Xl; l++) {
            for (var s = Xa[l], d = l === Xl ? e : s, m = l + 1 + ". " + s; m.length < i; )
              m += " ";
            m += d + `
`, a += m;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Vr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function DS(e, t) {
      if (OS)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ze(e[a], t[a]))
          return !1;
      return !0;
    }
    function sf(e, t, a, i, l, s) {
      cs = s, Ft = t, Xa = e !== null ? e._debugHookTypes : null, Xl = -1, OS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Oe.current = sC : Xa !== null ? Oe.current = uC : Oe.current = lC;
      var d = a(i, l);
      if (bp) {
        var m = 0;
        do {
          if (bp = !1, Cp = 0, m >= sO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, OS = !1, Kn = null, Xn = null, t.updateQueue = null, Xl = -1, Oe.current = cC, d = a(i, l);
        } while (bp);
      }
      Oe.current = _m, t._debugHookTypes = Xa;
      var g = Kn !== null && Kn.next !== null;
      if (cs = ee, Ft = null, Kn = null, Xn = null, ne = null, Xa = null, Xl = -1, e !== null && (e.flags & Wn) !== (t.flags & Wn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pt) !== Ge && S("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function cf() {
      var e = Cp !== 0;
      return Cp = 0, e;
    }
    function Vb(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & da) !== Ge ? t.flags &= ~(To | zr | tn | ut) : t.flags &= ~(tn | ut), e.lanes = Ol(e.lanes, a);
    }
    function Ib() {
      if (Oe.current = _m, Sm) {
        for (var e = Ft.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      cs = ee, Ft = null, Kn = null, Xn = null, Xa = null, Xl = -1, ne = null, nC = !1, bp = !1, Cp = 0;
    }
    function ao() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Xn === null ? Ft.memoizedState = Xn = e : Xn = Xn.next = e, Xn;
    }
    function Za() {
      var e;
      if (Kn === null) {
        var t = Ft.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Kn.next;
      var a;
      if (Xn === null ? a = Ft.memoizedState : a = Xn.next, a !== null)
        Xn = a, a = Xn.next, Kn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Kn = e;
        var i = {
          memoizedState: Kn.memoizedState,
          baseState: Kn.baseState,
          baseQueue: Kn.baseQueue,
          queue: Kn.queue,
          next: null
        };
        Xn === null ? Ft.memoizedState = Xn = i : Xn = Xn.next = i;
      }
      return Xn;
    }
    function Bb() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function kS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function NS(e, t, a) {
      var i = ao(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = vO.bind(null, Ft, s);
      return [i.memoizedState, d];
    }
    function MS(e, t, a) {
      var i = Za(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Kn, d = s.baseQueue, m = l.pending;
      if (m !== null) {
        if (d !== null) {
          var g = d.next, b = m.next;
          d.next = b, m.next = g;
        }
        s.baseQueue !== d && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = m, l.pending = null;
      }
      if (d !== null) {
        var T = d.next, N = s.baseState, D = null, j = null, H = null, X = T;
        do {
          var ke = X.lane;
          if (Lo(cs, ke)) {
            if (H !== null) {
              var He = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              H = H.next = He;
            }
            if (X.hasEagerState)
              N = X.eagerState;
            else {
              var bt = X.action;
              N = e(N, bt);
            }
          } else {
            var qe = {
              lane: ke,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            H === null ? (j = H = qe, D = N) : H = H.next = qe, Ft.lanes = st(Ft.lanes, ke), $p(ke);
          }
          X = X.next;
        } while (X !== null && X !== T);
        H === null ? D = N : H.next = j, ze(N, i.memoizedState) || kp(), i.memoizedState = N, i.baseState = D, i.baseQueue = H, l.lastRenderedState = N;
      }
      var gt = l.interleaved;
      if (gt !== null) {
        var U = gt;
        do {
          var Z = U.lane;
          Ft.lanes = st(Ft.lanes, Z), $p(Z), U = U.next;
        } while (U !== gt);
      } else
        d === null && (l.lanes = ee);
      var A = l.dispatch;
      return [i.memoizedState, A];
    }
    function _S(e, t, a) {
      var i = Za(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, m = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, b = g;
        do {
          var T = b.action;
          m = e(m, T), b = b.next;
        } while (b !== g);
        ze(m, i.memoizedState) || kp(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, s];
    }
    function _L(e, t, a) {
    }
    function LL(e, t, a) {
    }
    function LS(e, t, a) {
      var i = Ft, l = ao(), s, d = Er();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), lf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), lf = !0);
      } else {
        if (s = t(), !lf) {
          var m = t();
          ze(s, m) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), lf = !0);
        }
        var g = Km();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $u(g, cs) || Wb(i, t, s);
      }
      l.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return l.queue = b, xm(qb.bind(null, i, b, e), [e]), i.flags |= tn, Tp(Qn | br, Yb.bind(null, i, b, s, t), void 0, null), s;
    }
    function Em(e, t, a) {
      var i = Ft, l = Za(), s = t();
      if (!lf) {
        var d = t();
        ze(s, d) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), lf = !0);
      }
      var m = l.memoizedState, g = !ze(m, s);
      g && (l.memoizedState = s, kp());
      var b = l.queue;
      if (Rp(qb.bind(null, i, b, e), [e]), b.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Xn !== null && Xn.memoizedState.tag & Qn) {
        i.flags |= tn, Tp(Qn | br, Yb.bind(null, i, b, s, t), void 0, null);
        var T = Km();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $u(T, cs) || Wb(i, t, s);
      }
      return s;
    }
    function Wb(e, t, a) {
      e.flags |= _u;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Ft.updateQueue;
      if (l === null)
        l = Bb(), Ft.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function Yb(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Qb(t) && Gb(e);
    }
    function qb(e, t, a) {
      var i = function() {
        Qb(t) && Gb(e);
      };
      return a(i);
    }
    function Qb(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ze(a, i);
      } catch {
        return !0;
      }
    }
    function Gb(e) {
      var t = Sa(e, Xe);
      t !== null && tr(t, e, Xe, Yt);
    }
    function bm(e) {
      var t = ao();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: kS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = hO.bind(null, Ft, a);
      return [t.memoizedState, i];
    }
    function zS(e) {
      return MS(kS);
    }
    function US(e) {
      return _S(kS);
    }
    function Tp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ft.updateQueue;
      if (s === null)
        s = Bb(), Ft.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var m = d.next;
          d.next = l, l.next = m, s.lastEffect = l;
        }
      }
      return l;
    }
    function AS(e) {
      var t = ao();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Cm(e) {
      var t = Za();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var l = ao(), s = i === void 0 ? null : i;
      Ft.flags |= e, l.memoizedState = Tp(Qn | t, a, void 0, s);
    }
    function Tm(e, t, a, i) {
      var l = Za(), s = i === void 0 ? null : i, d = void 0;
      if (Kn !== null) {
        var m = Kn.memoizedState;
        if (d = m.destroy, s !== null) {
          var g = m.deps;
          if (DS(s, g)) {
            l.memoizedState = Tp(t, a, d, s);
            return;
          }
        }
      }
      Ft.flags |= e, l.memoizedState = Tp(Qn | t, a, d, s);
    }
    function xm(e, t) {
      return (Ft.mode & da) !== Ge ? xp(To | tn | Hi, br, e, t) : xp(tn | Hi, br, e, t);
    }
    function Rp(e, t) {
      return Tm(tn, br, e, t);
    }
    function FS(e, t) {
      return xp(ut, ro, e, t);
    }
    function Rm(e, t) {
      return Tm(ut, ro, e, t);
    }
    function PS(e, t) {
      var a = ut;
      return a |= Lr, (Ft.mode & da) !== Ge && (a |= zr), xp(a, Gn, e, t);
    }
    function wm(e, t) {
      return Tm(ut, Gn, e, t);
    }
    function Kb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function jS(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = ut;
      return l |= Lr, (Ft.mode & da) !== Ge && (l |= zr), xp(l, Gn, Kb.bind(null, t, e), i);
    }
    function Om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Tm(ut, Gn, Kb.bind(null, t, e), i);
    }
    function fO(e, t) {
    }
    var Dm = fO;
    function HS(e, t) {
      var a = ao(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function km(e, t) {
      var a = Za(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (DS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function $S(e, t) {
      var a = ao(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Nm(e, t) {
      var a = Za(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (DS(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function VS(e) {
      var t = ao();
      return t.memoizedState = e, e;
    }
    function Xb(e) {
      var t = Za(), a = Kn, i = a.memoizedState;
      return Jb(t, i, e);
    }
    function Zb(e) {
      var t = Za();
      if (Kn === null)
        return t.memoizedState = e, e;
      var a = Kn.memoizedState;
      return Jb(t, a, e);
    }
    function Jb(e, t, a) {
      var i = !Qy(cs);
      if (i) {
        if (!ze(a, t)) {
          var l = wd();
          Ft.lanes = st(Ft.lanes, l), $p(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, kp()), e.memoizedState = a, a;
    }
    function dO(e, t, a) {
      var i = va();
      Nn(ur(i, qn)), e(!0);
      var l = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Nn(i), Ep.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function IS() {
      var e = bm(!1), t = e[0], a = e[1], i = dO.bind(null, a), l = ao();
      return l.memoizedState = i, [t, i];
    }
    function eC() {
      var e = zS(), t = e[0], a = Za(), i = a.memoizedState;
      return [t, i];
    }
    function tC() {
      var e = US(), t = e[0], a = Za(), i = a.memoizedState;
      return [t, i];
    }
    var nC = !1;
    function pO() {
      return nC;
    }
    function BS() {
      var e = ao(), t = Km(), a = t.identifierPrefix, i;
      if (Er()) {
        var l = Ow();
        i = ":" + a + "R" + l;
        var s = Cp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = uO++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Mm() {
      var e = Za(), t = e.memoizedState;
      return t;
    }
    function vO(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = nu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        aC(t, l);
      else {
        var s = bb(e, t, l, i);
        if (s !== null) {
          var d = ea();
          tr(s, e, i, d), iC(s, t, i);
        }
      }
      oC(e, i);
    }
    function hO(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = nu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        aC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = Oe.current, Oe.current = Ri;
            try {
              var g = t.lastRenderedState, b = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = b, ze(b, g)) {
                qw(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Oe.current = m;
            }
          }
        }
        var T = bb(e, t, l, i);
        if (T !== null) {
          var N = ea();
          tr(T, e, i, N), iC(T, t, i);
        }
      }
      oC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === Ft || t !== null && t === Ft;
    }
    function aC(e, t) {
      bp = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function iC(e, t, a) {
      if (Rd(a)) {
        var i = t.lanes;
        i = Od(i, e.pendingLanes);
        var l = st(i, a);
        t.lanes = l, Dl(e, l);
      }
    }
    function oC(e, t, a) {
      Yi(e, t);
    }
    var _m = {
      readContext: In,
      useCallback: Vr,
      useContext: Vr,
      useEffect: Vr,
      useImperativeHandle: Vr,
      useInsertionEffect: Vr,
      useLayoutEffect: Vr,
      useMemo: Vr,
      useReducer: Vr,
      useRef: Vr,
      useState: Vr,
      useDebugValue: Vr,
      useDeferredValue: Vr,
      useTransition: Vr,
      useMutableSource: Vr,
      useSyncExternalStore: Vr,
      useId: Vr,
      unstable_isNewReconciler: G
    }, lC = null, uC = null, sC = null, cC = null, io = null, Ri = null, Lm = null;
    {
      var WS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, rt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      lC = {
        readContext: function(e) {
          return In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Mt(), uf(t), HS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Mt(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Mt(), uf(t), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Mt(), uf(a), jS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Mt(), uf(t), FS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Mt(), uf(t), PS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Mt(), uf(t);
          var a = Oe.current;
          Oe.current = io;
          try {
            return $S(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Mt();
          var i = Oe.current;
          Oe.current = io;
          try {
            return NS(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Mt(), AS(e);
        },
        useState: function(e) {
          ne = "useState", Mt();
          var t = Oe.current;
          Oe.current = io;
          try {
            return bm(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Mt(), VS(e);
        },
        useTransition: function() {
          return ne = "useTransition", Mt(), IS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Mt(), LS(e, t, a);
        },
        useId: function() {
          return ne = "useId", Mt(), BS();
        },
        unstable_isNewReconciler: G
      }, uC = {
        readContext: function(e) {
          return In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ee(), HS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ee(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ee(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ee(), jS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ee(), FS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ee(), PS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ee();
          var a = Oe.current;
          Oe.current = io;
          try {
            return $S(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ee();
          var i = Oe.current;
          Oe.current = io;
          try {
            return NS(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ee(), AS(e);
        },
        useState: function(e) {
          ne = "useState", Ee();
          var t = Oe.current;
          Oe.current = io;
          try {
            return bm(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ee(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ee(), VS(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ee(), IS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ee(), LS(e, t, a);
        },
        useId: function() {
          return ne = "useId", Ee(), BS();
        },
        unstable_isNewReconciler: G
      }, sC = {
        readContext: function(e) {
          return In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ee(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ee(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ee(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ee(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ee(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ee(), wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ee();
          var a = Oe.current;
          Oe.current = Ri;
          try {
            return Nm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ee();
          var i = Oe.current;
          Oe.current = Ri;
          try {
            return MS(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ee(), Cm();
        },
        useState: function(e) {
          ne = "useState", Ee();
          var t = Oe.current;
          Oe.current = Ri;
          try {
            return zS(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ee(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ee(), Xb(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ee(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ee(), Em(e, t);
        },
        useId: function() {
          return ne = "useId", Ee(), Mm();
        },
        unstable_isNewReconciler: G
      }, cC = {
        readContext: function(e) {
          return In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ee(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ee(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ee(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ee(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ee(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ee(), wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ee();
          var a = Oe.current;
          Oe.current = Lm;
          try {
            return Nm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ee();
          var i = Oe.current;
          Oe.current = Lm;
          try {
            return _S(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ee(), Cm();
        },
        useState: function(e) {
          ne = "useState", Ee();
          var t = Oe.current;
          Oe.current = Lm;
          try {
            return US(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ee(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ee(), Zb(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ee(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ee(), Em(e, t);
        },
        useId: function() {
          return ne = "useId", Ee(), Mm();
        },
        unstable_isNewReconciler: G
      }, io = {
        readContext: function(e) {
          return WS(), In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", rt(), Mt(), HS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", rt(), Mt(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", rt(), Mt(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", rt(), Mt(), jS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", rt(), Mt(), FS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", rt(), Mt(), PS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", rt(), Mt();
          var a = Oe.current;
          Oe.current = io;
          try {
            return $S(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", rt(), Mt();
          var i = Oe.current;
          Oe.current = io;
          try {
            return NS(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", rt(), Mt(), AS(e);
        },
        useState: function(e) {
          ne = "useState", rt(), Mt();
          var t = Oe.current;
          Oe.current = io;
          try {
            return bm(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", rt(), Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", rt(), Mt(), VS(e);
        },
        useTransition: function() {
          return ne = "useTransition", rt(), Mt(), IS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", rt(), Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", rt(), Mt(), LS(e, t, a);
        },
        useId: function() {
          return ne = "useId", rt(), Mt(), BS();
        },
        unstable_isNewReconciler: G
      }, Ri = {
        readContext: function(e) {
          return WS(), In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", rt(), Ee(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", rt(), Ee(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", rt(), Ee(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", rt(), Ee(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", rt(), Ee(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", rt(), Ee(), wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", rt(), Ee();
          var a = Oe.current;
          Oe.current = Ri;
          try {
            return Nm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", rt(), Ee();
          var i = Oe.current;
          Oe.current = Ri;
          try {
            return MS(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", rt(), Ee(), Cm();
        },
        useState: function(e) {
          ne = "useState", rt(), Ee();
          var t = Oe.current;
          Oe.current = Ri;
          try {
            return zS(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", rt(), Ee(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", rt(), Ee(), Xb(e);
        },
        useTransition: function() {
          return ne = "useTransition", rt(), Ee(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", rt(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", rt(), Ee(), Em(e, t);
        },
        useId: function() {
          return ne = "useId", rt(), Ee(), Mm();
        },
        unstable_isNewReconciler: G
      }, Lm = {
        readContext: function(e) {
          return WS(), In(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", rt(), Ee(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", rt(), Ee(), In(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", rt(), Ee(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", rt(), Ee(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", rt(), Ee(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", rt(), Ee(), wm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", rt(), Ee();
          var a = Oe.current;
          Oe.current = Ri;
          try {
            return Nm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", rt(), Ee();
          var i = Oe.current;
          Oe.current = Ri;
          try {
            return _S(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", rt(), Ee(), Cm();
        },
        useState: function(e) {
          ne = "useState", rt(), Ee();
          var t = Oe.current;
          Oe.current = Ri;
          try {
            return US(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", rt(), Ee(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", rt(), Ee(), Zb(e);
        },
        useTransition: function() {
          return ne = "useTransition", rt(), Ee(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", rt(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", rt(), Ee(), Em(e, t);
        },
        useId: function() {
          return ne = "useId", rt(), Ee(), Mm();
        },
        unstable_isNewReconciler: G
      };
    }
    var Zl = h.unstable_now, fC = 0, zm = -1, wp = -1, Um = -1, YS = !1, Am = !1;
    function dC() {
      return YS;
    }
    function mO() {
      Am = !0;
    }
    function yO() {
      YS = !1, Am = !1;
    }
    function gO() {
      YS = Am, Am = !1;
    }
    function pC() {
      return fC;
    }
    function vC() {
      fC = Zl();
    }
    function qS(e) {
      wp = Zl(), e.actualStartTime < 0 && (e.actualStartTime = Zl());
    }
    function hC(e) {
      wp = -1;
    }
    function Fm(e, t) {
      if (wp >= 0) {
        var a = Zl() - wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), wp = -1;
      }
    }
    function oo(e) {
      if (zm >= 0) {
        var t = Zl() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Q:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function QS(e) {
      if (Um >= 0) {
        var t = Zl() - Um;
        Um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Q:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function lo() {
      zm = Zl();
    }
    function GS() {
      Um = Zl();
    }
    function KS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fs(e, t) {
      return {
        value: e,
        source: t,
        stack: Uf(t),
        digest: null
      };
    }
    function XS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function SO(e, t) {
      return !0;
    }
    function ZS(e, t) {
      try {
        var a = SO(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(i);
        }
        var m = l ? ot(l) : null, g = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === F)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = ot(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var N = g + `
` + d + `

` + ("" + b);
        console.error(N);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var EO = typeof WeakMap == "function" ? WeakMap : Map;
    function mC(e, t, a) {
      var i = Go(Yt, a);
      i.tag = Zg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        dk(l), ZS(e, t);
      }, i;
    }
    function JS(e, t, a) {
      var i = Go(Yt, a);
      i.tag = Zg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          OT(e), ZS(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        OT(e), ZS(e, t), typeof l != "function" && ck(this);
        var g = t.value, b = t.stack;
        this.componentDidCatch(g, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (jr(e.lanes, Xe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ot(e) || "Unknown"));
      }), i;
    }
    function yC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new EO(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = pk.bind(null, e, t, a);
        Yn && Vp(e, a), t.then(s, s);
      }
    }
    function bO(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function CO(e, t) {
      var a = e.tag;
      if ((e.mode & pt) === Ge && (a === _ || a === Y || a === re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function gC(e) {
      var t = e;
      do {
        if (t.tag === te && oO(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function SC(e, t, a, i, l) {
      if ((e.mode & pt) === Ge) {
        if (e === t)
          e.flags |= Pn;
        else {
          if (e.flags |= et, a.flags |= Lu, a.flags &= ~(Qs | Yr), a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = $e;
            else {
              var d = Go(Yt, Xe);
              d.tag = lm, Ql(a, d, Xe);
            }
          }
          a.lanes = st(a.lanes, Xe);
        }
        return e;
      }
      return e.flags |= Pn, e.lanes = l, e;
    }
    function TO(e, t, a, i, l) {
      if (a.flags |= Yr, Yn && Vp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        CO(a), Er() && a.mode & pt && sb();
        var d = gC(t);
        if (d !== null) {
          d.flags &= ~dn, SC(d, t, a, e, l), d.mode & pt && yC(e, s, l), bO(d, e, s);
          return;
        } else {
          if (!wl(l)) {
            yC(e, s, l), _0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Er() && a.mode & pt) {
        sb();
        var g = gC(t);
        if (g !== null) {
          (g.flags & Pn) === We && (g.flags |= dn), SC(g, t, a, e, l), Wg(fs(i, a));
          return;
        }
      }
      i = fs(i, a), nk(i);
      var b = t;
      do {
        switch (b.tag) {
          case F: {
            var T = i;
            b.flags |= Pn;
            var N = kn(l);
            b.lanes = st(b.lanes, N);
            var D = mC(b, T, N);
            tS(b, D);
            return;
          }
          case M:
            var j = i, H = b.type, X = b.stateNode;
            if ((b.flags & et) === We && (typeof H.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !gT(X))) {
              b.flags |= Pn;
              var ke = kn(l);
              b.lanes = st(b.lanes, ke);
              var qe = JS(b, j, ke);
              tS(b, qe);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function xO() {
      return null;
    }
    var Op = y.ReactCurrentOwner, wi = !1, e0, Dp, t0, n0, r0, ds, a0, Pm;
    e0 = {}, Dp = {}, t0 = {}, n0 = {}, r0 = {}, ds = !1, a0 = {}, Pm = {};
    function Zr(e, t, a, i) {
      e === null ? t.child = Fb(t, null, a, i) : t.child = nf(t, e.child, a, i);
    }
    function RO(e, t, a, i) {
      t.child = nf(t, e.child, null, i), t.child = nf(t, null, a, i);
    }
    function EC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          Bt(a)
        );
      }
      var d = a.render, m = t.ref, g, b;
      tf(t, l), Wi(t);
      {
        if (Op.current = t, ka(!0), g = sf(e, t, d, i, m, l), b = cf(), t.mode & on) {
          Dn(!0);
          try {
            g = sf(e, t, d, i, m, l), b = cf();
          } finally {
            Dn(!1);
          }
        }
        ka(!1);
      }
      return xo(), e !== null && !wi ? (Vb(e, t, l), Ko(e, t, l)) : (Er() && b && jg(t), t.flags |= Pi, Zr(e, t, g, l), t.child);
    }
    function bC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Nk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = gf(s), t.tag = re, t.type = d, l0(t, s), CC(e, t, d, i, l);
        }
        {
          var m = s.propTypes;
          m && Ei(
            m,
            i,
            // Resolved props
            "prop",
            Bt(s)
          );
        }
        var g = I0(a.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var b = a.type, T = b.propTypes;
        T && Ei(
          T,
          i,
          // Resolved props
          "prop",
          Bt(b)
        );
      }
      var N = e.child, D = p0(e, l);
      if (!D) {
        var j = N.memoizedProps, H = a.compare;
        if (H = H !== null ? H : Be, H(j, i) && e.ref === t.ref)
          return Ko(e, t, l);
      }
      t.flags |= Pi;
      var X = ys(N, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function CC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === yr) {
          var d = s, m = d._payload, g = d._init;
          try {
            s = g(m);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && Ei(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Bt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Be(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (wi = !1, t.pendingProps = i = T, p0(e, l))
            (e.flags & Lu) !== We && (wi = !0);
          else
            return t.lanes = e.lanes, Ko(e, t, l);
      }
      return i0(e, t, a, i, l);
    }
    function TC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || fe)
        if ((t.mode & pt) === Ge) {
          var d = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Xm(t, a);
        } else if (jr(a, Pr)) {
          var N = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var D = s !== null ? s.baseLanes : a;
          Xm(t, D);
        } else {
          var m = null, g;
          if (s !== null) {
            var b = s.baseLanes;
            g = st(b, a);
          } else
            g = a;
          t.lanes = t.childLanes = Pr;
          var T = {
            baseLanes: g,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Xm(t, g), null;
        }
      else {
        var j;
        s !== null ? (j = st(s.baseLanes, a), t.memoizedState = null) : j = a, Xm(t, j);
      }
      return Zr(e, t, l, a), t.child;
    }
    function wO(e, t, a) {
      var i = t.pendingProps;
      return Zr(e, t, i, a), t.child;
    }
    function OO(e, t, a) {
      var i = t.pendingProps.children;
      return Zr(e, t, i, a), t.child;
    }
    function DO(e, t, a) {
      {
        t.flags |= ut;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Zr(e, t, s, a), t.child;
    }
    function xC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= _r, t.flags |= cd);
    }
    function i0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ei(
          s,
          i,
          // Resolved props
          "prop",
          Bt(a)
        );
      }
      var d;
      {
        var m = Gc(t, a, !0);
        d = Kc(t, m);
      }
      var g, b;
      tf(t, l), Wi(t);
      {
        if (Op.current = t, ka(!0), g = sf(e, t, a, i, d, l), b = cf(), t.mode & on) {
          Dn(!0);
          try {
            g = sf(e, t, a, i, d, l), b = cf();
          } finally {
            Dn(!1);
          }
        }
        ka(!1);
      }
      return xo(), e !== null && !wi ? (Vb(e, t, l), Ko(e, t, l)) : (Er() && b && jg(t), t.flags |= Pi, Zr(e, t, g, l), t.child);
    }
    function RC(e, t, a, i, l) {
      {
        switch (Wk(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), g = m.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= Pn;
            var b = new Error("Simulated error coming from DevTools"), T = kn(l);
            t.lanes = st(t.lanes, T);
            var N = JS(t, fs(b, t), T);
            tS(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && Ei(
            D,
            i,
            // Resolved props
            "prop",
            Bt(a)
          );
        }
      }
      var j;
      no(a) ? (j = !0, Kh(t)) : j = !1, tf(t, l);
      var H = t.stateNode, X;
      H === null ? (Hm(e, t), _b(t, a, i), pS(t, a, i, l), X = !0) : e === null ? X = eO(t, a, i, l) : X = tO(e, t, a, i, l);
      var ke = o0(e, t, a, X, j, l);
      {
        var qe = t.stateNode;
        X && qe.props !== i && (ds || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ot(t) || "a component"), ds = !0);
      }
      return ke;
    }
    function o0(e, t, a, i, l, s) {
      xC(e, t);
      var d = (t.flags & et) !== We;
      if (!i && !d)
        return l && ib(t, a, !1), Ko(e, t, s);
      var m = t.stateNode;
      Op.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
        g = null, hC();
      else {
        Wi(t);
        {
          if (ka(!0), g = m.render(), t.mode & on) {
            Dn(!0);
            try {
              m.render();
            } finally {
              Dn(!1);
            }
          }
          ka(!1);
        }
        xo();
      }
      return t.flags |= Pi, e !== null && d ? RO(e, t, g, s) : Zr(e, t, g, s), t.memoizedState = m.state, l && ib(t, a, !0), t.child;
    }
    function wC(e) {
      var t = e.stateNode;
      t.pendingContext ? rb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rb(e, t.context, !1), SS(e, t.containerInfo);
    }
    function kO(e, t, a) {
      if (wC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      xb(e, t), fm(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var m = d.element;
      if (l.isDehydrated) {
        var g = {
          element: m,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, b = t.updateQueue;
        if (b.baseState = g, t.memoizedState = g, t.flags & dn) {
          var T = fs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return OC(e, t, m, a, T);
        } else if (m !== s) {
          var N = fs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return OC(e, t, m, a, N);
        } else {
          Lw(t);
          var D = Fb(t, null, m, a);
          t.child = D;
          for (var j = D; j; )
            j.flags = j.flags & ~Qt | sa, j = j.sibling;
        }
      } else {
        if (Jc(), m === s)
          return Ko(e, t, a);
        Zr(e, t, m, a);
      }
      return t.child;
    }
    function OC(e, t, a, i, l) {
      return Jc(), Wg(l), t.flags |= dn, Zr(e, t, a, i), t.child;
    }
    function NO(e, t, a) {
      jb(t), e === null && Bg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, m = Rg(i, l);
      return m ? d = null : s !== null && Rg(i, s) && (t.flags |= Nt), xC(e, t), Zr(e, t, d, a), t.child;
    }
    function MO(e, t) {
      return e === null && Bg(t), null;
    }
    function _O(e, t, a, i) {
      Hm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, m = s._init, g = m(d);
      t.type = g;
      var b = t.tag = Mk(g), T = Ti(g, l), N;
      switch (b) {
        case _:
          return l0(t, g), t.type = g = gf(g), N = i0(null, t, g, T, i), N;
        case M:
          return t.type = g = F0(g), N = RC(null, t, g, T, i), N;
        case Y:
          return t.type = g = P0(g), N = EC(null, t, g, T, i), N;
        case ce: {
          if (t.type !== t.elementType) {
            var D = g.propTypes;
            D && Ei(
              D,
              T,
              // Resolved for outer only
              "prop",
              Bt(g)
            );
          }
          return N = bC(
            null,
            t,
            g,
            Ti(g.type, T),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var j = "";
      throw g !== null && typeof g == "object" && g.$$typeof === yr && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function LO(e, t, a, i, l) {
      Hm(e, t), t.tag = M;
      var s;
      return no(a) ? (s = !0, Kh(t)) : s = !1, tf(t, l), _b(t, a, i), pS(t, a, i, l), o0(null, t, a, !0, s, l);
    }
    function zO(e, t, a, i) {
      Hm(e, t);
      var l = t.pendingProps, s;
      {
        var d = Gc(t, a, !1);
        s = Kc(t, d);
      }
      tf(t, i);
      var m, g;
      Wi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Bt(a) || "Unknown";
          e0[b] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), e0[b] = !0);
        }
        t.mode & on && Ci.recordLegacyContextWarning(t, null), ka(!0), Op.current = t, m = sf(null, t, a, l, s, i), g = cf(), ka(!1);
      }
      if (xo(), t.flags |= Pi, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var T = Bt(a) || "Unknown";
        Dp[T] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Dp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var N = Bt(a) || "Unknown";
          Dp[N] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Dp[N] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return no(a) ? (D = !0, Kh(t)) : D = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, eS(t), Mb(t, m), pS(t, a, l, i), o0(null, t, a, !0, D, i);
      } else {
        if (t.tag = _, t.mode & on) {
          Dn(!0);
          try {
            m = sf(null, t, a, l, s, i), g = cf();
          } finally {
            Dn(!1);
          }
        }
        return Er() && g && jg(t), Zr(null, t, m, i), l0(t, a), t.child;
      }
    }
    function l0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ia();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), r0[l] || (r0[l] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Bt(t) || "Unknown";
          n0[d] || (S("%s: Function components do not support getDerivedStateFromProps.", d), n0[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Bt(t) || "Unknown";
          t0[m] || (S("%s: Function components do not support contextType.", m), t0[m] = !0);
        }
      }
    }
    var u0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: St
    };
    function s0(e) {
      return {
        baseLanes: e,
        cachePool: xO(),
        transitions: null
      };
    }
    function UO(e, t) {
      var a = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function AO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return CS(e, Sp);
    }
    function FO(e, t) {
      return Ol(e.childLanes, t);
    }
    function DC(e, t, a) {
      var i = t.pendingProps;
      Yk(t) && (t.flags |= et);
      var l = xi.current, s = !1, d = (t.flags & et) !== We;
      if (d || AO(l, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (l = iO(l, $b)), l = af(l), Kl(t, l), e === null) {
        Bg(t);
        var m = t.memoizedState;
        if (m !== null) {
          var g = m.dehydrated;
          if (g !== null)
            return VO(t, g);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var N = PO(t, b, T, a), D = t.child;
          return D.memoizedState = s0(a), t.memoizedState = u0, N;
        } else
          return c0(t, b);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var H = j.dehydrated;
          if (H !== null)
            return IO(e, t, d, i, H, j, a);
        }
        if (s) {
          var X = i.fallback, ke = i.children, qe = HO(e, t, ke, X, a), He = t.child, bt = e.child.memoizedState;
          return He.memoizedState = bt === null ? s0(a) : UO(bt, a), He.childLanes = FO(e, a), t.memoizedState = u0, qe;
        } else {
          var gt = i.children, U = jO(e, t, gt, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function c0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = f0(l, i);
      return s.return = e, e.child = s, s;
    }
    function PO(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, m, g;
      return (l & pt) === Ge && s !== null ? (m = s, m.childLanes = ee, m.pendingProps = d, e.mode & Ke && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), g = au(a, l, i, null)) : (m = f0(d, l), g = au(a, l, i, null)), m.return = e, g.return = e, m.sibling = g, e.child = m, g;
    }
    function f0(e, t, a) {
      return kT(e, t, ee, null);
    }
    function kC(e, t) {
      return ys(e, t);
    }
    function jO(e, t, a, i) {
      var l = e.child, s = l.sibling, d = kC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pt) === Ge && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Dt) : m.push(s);
      }
      return t.child = d, d;
    }
    function HO(e, t, a, i, l) {
      var s = t.mode, d = e.child, m = d.sibling, g = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pt) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        b = T, b.childLanes = ee, b.pendingProps = g, t.mode & Ke && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = kC(d, g), b.subtreeFlags = d.subtreeFlags & Wn;
      var N;
      return m !== null ? N = ys(m, i) : (N = au(i, s, l, null), N.flags |= Qt), N.return = t, b.return = t, b.sibling = N, t.child = b, N;
    }
    function jm(e, t, a, i) {
      i !== null && Wg(i), nf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = c0(t, s);
      return d.flags |= Qt, t.memoizedState = null, d;
    }
    function $O(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, m = f0(d, s), g = au(i, s, l, null);
      return g.flags |= Qt, m.return = t, g.return = t, m.sibling = g, t.child = m, (t.mode & pt) !== Ge && nf(t, e.child, null, l), g;
    }
    function VO(e, t, a) {
      return (e.mode & pt) === Ge ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Xe) : kg(t) ? e.lanes = Oo : e.lanes = Pr, null;
    }
    function IO(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & dn) {
          t.flags &= ~dn;
          var U = XS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jm(e, t, d, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var Z = i.children, A = i.fallback, se = $O(e, t, Z, A, d), Ne = t.child;
          return Ne.memoizedState = s0(d), t.memoizedState = u0, se;
        }
      else {
        if (Mw(), (t.mode & pt) === Ge)
          return jm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (kg(l)) {
          var m, g, b;
          {
            var T = QR(l);
            m = T.digest, g = T.message, b = T.stack;
          }
          var N;
          g ? N = new Error(g) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = XS(N, m, b);
          return jm(e, t, d, D);
        }
        var j = jr(d, e.childLanes);
        if (wi || j) {
          var H = Km();
          if (H !== null) {
            var X = Ky(H, d);
            if (X !== St && X !== s.retryLane) {
              s.retryLane = X;
              var ke = Yt;
              Sa(e, X), tr(H, e, X, ke);
            }
          }
          _0();
          var qe = XS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jm(e, t, d, qe);
        } else if (XE(l)) {
          t.flags |= et, t.child = e.child;
          var He = vk.bind(null, e);
          return GR(l, He), null;
        } else {
          zw(t, l, s.treeContext);
          var bt = i.children, gt = c0(t, bt);
          return gt.flags |= sa, gt;
        }
      }
    }
    function NC(e, t, a) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), Kg(e.return, t, a);
    }
    function BO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === te) {
          var l = i.memoizedState;
          l !== null && NC(i, a, e);
        } else if (i.tag === Me)
          NC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function WO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function YO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !a0[e])
        if (a0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function qO(e, t) {
      e !== void 0 && !Pm[e] && (e !== "collapsed" && e !== "hidden" ? (Pm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Pm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function MC(e, t) {
      {
        var a = An(e), i = !a && typeof ri(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function QO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var a = 0; a < e.length; a++)
            if (!MC(e[a], a))
              return;
        } else {
          var i = ri(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!MC(s.value, d))
                  return;
                d++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function d0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function _C(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      YO(l), qO(s, l), QO(d, l), Zr(e, t, d, a);
      var m = xi.current, g = CS(m, Sp);
      if (g)
        m = TS(m, Sp), t.flags |= et;
      else {
        var b = e !== null && (e.flags & et) !== We;
        b && BO(t, t.child, a), m = af(m);
      }
      if (Kl(t, m), (t.mode & pt) === Ge)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = WO(t.child), N;
            T === null ? (N = t.child, t.child = null) : (N = T.sibling, T.sibling = null), d0(
              t,
              !1,
              // isBackwards
              N,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var H = j.alternate;
              if (H !== null && gm(H) === null) {
                t.child = j;
                break;
              }
              var X = j.sibling;
              j.sibling = D, D = j, j = X;
            }
            d0(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            d0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function GO(e, t, a) {
      SS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = nf(t, null, i, a) : Zr(e, t, i, a), t.child;
    }
    var LC = !1;
    function KO(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || LC || (LC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && Ei(g, s, "prop", "Context.Provider");
      }
      if (Eb(t, l, m), d !== null) {
        var b = d.value;
        if (ze(b, m)) {
          if (d.children === s.children && !Qh())
            return Ko(e, t, a);
        } else
          Bw(t, l, a);
      }
      var T = s.children;
      return Zr(e, t, T, a), t.child;
    }
    var zC = !1;
    function XO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (zC || (zC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), tf(t, a);
      var d = In(i);
      Wi(t);
      var m;
      return Op.current = t, ka(!0), m = s(d), ka(!1), xo(), t.flags |= Pi, Zr(e, t, m, a), t.child;
    }
    function kp() {
      wi = !0;
    }
    function Hm(e, t) {
      (t.mode & pt) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Qt);
    }
    function Ko(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), $p(t.lanes), jr(a, t.childLanes) ? (nO(e, t), t.child) : null;
    }
    function ZO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Dt) : s.push(e), a.flags |= Qt, a;
      }
    }
    function p0(e, t) {
      var a = e.lanes;
      return !!jr(a, t);
    }
    function JO(e, t, a) {
      switch (t.tag) {
        case F:
          wC(t), t.stateNode, Jc();
          break;
        case B:
          jb(t);
          break;
        case M: {
          var i = t.type;
          no(i) && Kh(t);
          break;
        }
        case I:
          SS(t, t.stateNode.containerInfo);
          break;
        case ye: {
          var l = t.memoizedProps.value, s = t.type._context;
          Eb(t, s, l);
          break;
        }
        case Q:
          {
            var d = jr(a, t.childLanes);
            d && (t.flags |= ut);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case te: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Kl(t, af(xi.current)), t.flags |= et, null;
            var b = t.child, T = b.childLanes;
            if (jr(a, T))
              return DC(e, t, a);
            Kl(t, af(xi.current));
            var N = Ko(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Kl(t, af(xi.current));
          break;
        }
        case Me: {
          var D = (e.flags & et) !== We, j = jr(a, t.childLanes);
          if (D) {
            if (j)
              return _C(e, t, a);
            t.flags |= et;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), Kl(t, xi.current), j)
            break;
          return null;
        }
        case de:
        case me:
          return t.lanes = ee, TC(e, t, a);
      }
      return Ko(e, t, a);
    }
    function UC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZO(e, t, I0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wi = !0;
        else {
          var s = p0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === We)
            return wi = !1, JO(e, t, a);
          (e.flags & Lu) !== We ? wi = !0 : wi = !1;
        }
      } else if (wi = !1, Er() && Rw(t)) {
        var d = t.index, m = ww();
        ub(t, m, d);
      }
      switch (t.lanes = ee, t.tag) {
        case K:
          return zO(e, t, t.type, a);
        case De: {
          var g = t.elementType;
          return _O(e, t, g, a);
        }
        case _: {
          var b = t.type, T = t.pendingProps, N = t.elementType === b ? T : Ti(b, T);
          return i0(e, t, b, N, a);
        }
        case M: {
          var D = t.type, j = t.pendingProps, H = t.elementType === D ? j : Ti(D, j);
          return RC(e, t, D, H, a);
        }
        case F:
          return kO(e, t, a);
        case B:
          return NO(e, t, a);
        case J:
          return MO(e, t);
        case te:
          return DC(e, t, a);
        case I:
          return GO(e, t, a);
        case Y: {
          var X = t.type, ke = t.pendingProps, qe = t.elementType === X ? ke : Ti(X, ke);
          return EC(e, t, X, qe, a);
        }
        case ie:
          return wO(e, t, a);
        case $:
          return OO(e, t, a);
        case Q:
          return DO(e, t, a);
        case ye:
          return KO(e, t, a);
        case he:
          return XO(e, t, a);
        case ce: {
          var He = t.type, bt = t.pendingProps, gt = Ti(He, bt);
          if (t.type !== t.elementType) {
            var U = He.propTypes;
            U && Ei(
              U,
              gt,
              // Resolved for outer only
              "prop",
              Bt(He)
            );
          }
          return gt = Ti(He.type, gt), bC(e, t, He, gt, a);
        }
        case re:
          return CC(e, t, t.type, t.pendingProps, a);
        case $e: {
          var Z = t.type, A = t.pendingProps, se = t.elementType === Z ? A : Ti(Z, A);
          return LO(e, t, Z, se, a);
        }
        case Me:
          return _C(e, t, a);
        case Ve:
          break;
        case de:
          return TC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ff(e) {
      e.flags |= ut;
    }
    function AC(e) {
      e.flags |= _r, e.flags |= cd;
    }
    var FC, v0, PC, jC;
    FC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === J)
          CR(e, l.stateNode);
        else if (l.tag !== I) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, v0 = function(e, t) {
    }, PC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, m = ES(), g = xR(d, a, s, i, l, m);
        t.updateQueue = g, g && ff(t);
      }
    }, jC = function(e, t, a, i) {
      a !== i && ff(t);
    };
    function Np(e, t) {
      if (!Er())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Cr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = We;
      if (t) {
        if ((e.mode & Ke) !== Ge) {
          for (var g = e.selfBaseDuration, b = e.child; b !== null; )
            a = st(a, st(b.lanes, b.childLanes)), i |= b.subtreeFlags & Wn, i |= b.flags & Wn, g += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = st(a, st(T.lanes, T.childLanes)), i |= T.subtreeFlags & Wn, i |= T.flags & Wn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ke) !== Ge) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = st(a, st(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = st(a, st(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function eD(e, t, a) {
      if (jw() && (t.mode & pt) !== Ge && (t.flags & et) === We)
        return hb(t), Jc(), t.flags |= dn | Yr | Pn, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Fw(t), Cr(t), (t.mode & Ke) !== Ge) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Jc(), (t.flags & et) === We && (t.memoizedState = null), t.flags |= ut, Cr(t), (t.mode & Ke) !== Ge) {
            var d = a !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return mb(), !0;
    }
    function HC(e, t, a) {
      var i = t.pendingProps;
      switch (Hg(t), t.tag) {
        case K:
        case De:
        case re:
        case _:
        case Y:
        case ie:
        case $:
        case Q:
        case he:
        case ce:
          return Cr(t), null;
        case M: {
          var l = t.type;
          return no(l) && Gh(t), Cr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (rf(t), Ag(t), RS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = tm(t);
            if (d)
              ff(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & dn) !== We) && (t.flags |= ua, mb());
            }
          }
          return v0(e, t), Cr(t), null;
        }
        case B: {
          bS(t);
          var g = Pb(), b = t.type;
          if (e !== null && t.stateNode != null)
            PC(e, t, b, i, g), e.ref !== t.ref && AC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Cr(t), null;
            }
            var T = ES(), N = tm(t);
            if (N)
              Uw(t, g, T) && ff(t);
            else {
              var D = bR(b, i, g, T, t);
              FC(D, t, !1, !1), t.stateNode = D, TR(D, b, i, g) && ff(t);
            }
            t.ref !== null && AC(t);
          }
          return Cr(t), null;
        }
        case J: {
          var j = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            jC(e, t, H, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = Pb(), ke = ES(), qe = tm(t);
            qe ? Aw(t) && ff(t) : t.stateNode = RR(j, X, ke, t);
          }
          return Cr(t), null;
        }
        case te: {
          of(t);
          var He = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = eD(e, t, He);
            if (!bt)
              return t.flags & Pn ? t : null;
          }
          if ((t.flags & et) !== We)
            return t.lanes = a, (t.mode & Ke) !== Ge && KS(t), t;
          var gt = He !== null, U = e !== null && e.memoizedState !== null;
          if (gt !== U && gt) {
            var Z = t.child;
            if (Z.flags |= ji, (t.mode & pt) !== Ge) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !it);
              A || CS(xi.current, $b) ? tk() : _0();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= ut), Cr(t), (t.mode & Ke) !== Ge && gt) {
            var Ne = t.child;
            Ne !== null && (t.treeBaseDuration -= Ne.treeBaseDuration);
          }
          return null;
        }
        case I:
          return rf(t), v0(e, t), e === null && gw(t.stateNode.containerInfo), Cr(t), null;
        case ye:
          var xe = t.type._context;
          return Gg(xe, t), Cr(t), null;
        case $e: {
          var Je = t.type;
          return no(Je) && Gh(t), Cr(t), null;
        }
        case Me: {
          of(t);
          var at = t.memoizedState;
          if (at === null)
            return Cr(t), null;
          var Pt = (t.flags & et) !== We, wt = at.rendering;
          if (wt === null)
            if (Pt)
              Np(at, !1);
            else {
              var Ln = rk() && (e === null || (e.flags & et) === We);
              if (!Ln)
                for (var Ot = t.child; Ot !== null; ) {
                  var wn = gm(Ot);
                  if (wn !== null) {
                    Pt = !0, t.flags |= et, Np(at, !1);
                    var Ir = wn.updateQueue;
                    return Ir !== null && (t.updateQueue = Ir, t.flags |= ut), t.subtreeFlags = We, rO(t, a), Kl(t, TS(xi.current, Sp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              at.tail !== null && an() > lT() && (t.flags |= et, Pt = !0, Np(at, !1), t.lanes = Td);
            }
          else {
            if (!Pt) {
              var Or = gm(wt);
              if (Or !== null) {
                t.flags |= et, Pt = !0;
                var Fa = Or.updateQueue;
                if (Fa !== null && (t.updateQueue = Fa, t.flags |= ut), Np(at, !0), at.tail === null && at.tailMode === "hidden" && !wt.alternate && !Er())
                  return Cr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                an() * 2 - at.renderingStartTime > lT() && a !== Pr && (t.flags |= et, Pt = !0, Np(at, !1), t.lanes = Td);
            }
            if (at.isBackwards)
              wt.sibling = t.child, t.child = wt;
            else {
              var ta = at.last;
              ta !== null ? ta.sibling = wt : t.child = wt, at.last = wt;
            }
          }
          if (at.tail !== null) {
            var na = at.tail;
            at.rendering = na, at.tail = na.sibling, at.renderingStartTime = an(), na.sibling = null;
            var Br = xi.current;
            return Pt ? Br = TS(Br, Sp) : Br = af(Br), Kl(t, Br), na;
          }
          return Cr(t), null;
        }
        case Ve:
          break;
        case de:
        case me: {
          M0(t);
          var tl = t.memoizedState, Sf = tl !== null;
          if (e !== null) {
            var Yp = e.memoizedState, co = Yp !== null;
            co !== Sf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !fe && (t.flags |= ji);
          }
          return !Sf || (t.mode & pt) === Ge ? Cr(t) : jr(so, Pr) && (Cr(t), t.subtreeFlags & (Qt | ut) && (t.flags |= ji)), null;
        }
        case Te:
          return null;
        case Ce:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function tD(e, t, a) {
      switch (Hg(t), t.tag) {
        case M: {
          var i = t.type;
          no(i) && Gh(t);
          var l = t.flags;
          return l & Pn ? (t.flags = l & ~Pn | et, (t.mode & Ke) !== Ge && KS(t), t) : null;
        }
        case F: {
          t.stateNode, rf(t), Ag(t), RS();
          var s = t.flags;
          return (s & Pn) !== We && (s & et) === We ? (t.flags = s & ~Pn | et, t) : null;
        }
        case B:
          return bS(t), null;
        case te: {
          of(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Jc();
          }
          var m = t.flags;
          return m & Pn ? (t.flags = m & ~Pn | et, (t.mode & Ke) !== Ge && KS(t), t) : null;
        }
        case Me:
          return of(t), null;
        case I:
          return rf(t), null;
        case ye:
          var g = t.type._context;
          return Gg(g, t), null;
        case de:
        case me:
          return M0(t), null;
        case Te:
          return null;
        default:
          return null;
      }
    }
    function $C(e, t, a) {
      switch (Hg(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && Gh(t);
          break;
        }
        case F: {
          t.stateNode, rf(t), Ag(t), RS();
          break;
        }
        case B: {
          bS(t);
          break;
        }
        case I:
          rf(t);
          break;
        case te:
          of(t);
          break;
        case Me:
          of(t);
          break;
        case ye:
          var l = t.type._context;
          Gg(l, t);
          break;
        case de:
        case me:
          M0(t);
          break;
      }
    }
    var VC = null;
    VC = /* @__PURE__ */ new Set();
    var $m = !1, Tr = !1, nD = typeof WeakSet == "function" ? WeakSet : Set, Ue = null, df = null, pf = null;
    function rD(e) {
      Co(null, function() {
        throw e;
      }), ud();
    }
    var aD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ke)
        try {
          lo(), t.componentWillUnmount();
        } finally {
          oo(e);
        }
      else
        t.componentWillUnmount();
    };
    function IC(e, t) {
      try {
        Jl(Gn, e);
      } catch (a) {
        Zt(e, t, a);
      }
    }
    function h0(e, t, a) {
      try {
        aD(e, a);
      } catch (i) {
        Zt(e, t, i);
      }
    }
    function iD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Zt(e, t, i);
      }
    }
    function BC(e, t) {
      try {
        YC(e);
      } catch (a) {
        Zt(e, t, a);
      }
    }
    function vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (vt && rn && e.mode & Ke)
              try {
                lo(), i = a(null);
              } finally {
                oo(e);
              }
            else
              i = a(null);
          } catch (l) {
            Zt(e, t, l);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          a.current = null;
    }
    function Vm(e, t, a) {
      try {
        a();
      } catch (i) {
        Zt(e, t, i);
      }
    }
    var WC = !1;
    function oD(e, t) {
      SR(e.containerInfo), Ue = t, lD();
      var a = WC;
      return WC = !1, a;
    }
    function lD() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        (e.subtreeFlags & Sl) !== We && t !== null ? (t.return = e, Ue = t) : uD();
      }
    }
    function uD() {
      for (; Ue !== null; ) {
        var e = Ue;
        At(e);
        try {
          sD(e);
        } catch (a) {
          Zt(e, e.return, a);
        }
        On();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function sD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ua) !== We) {
        switch (At(e), e.tag) {
          case _:
          case Y:
          case re:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ds && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ti(e.type, i), l);
              {
                var m = VC;
                d === void 0 && !m.has(e.type) && (m.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ot(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case F: {
            {
              var g = e.stateNode;
              BR(g.containerInfo);
            }
            break;
          }
          case B:
          case J:
          case I:
          case $e:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        On();
      }
    }
    function Oi(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & br) !== Ea ? nc(t) : (e & Gn) !== Ea && rc(t), (e & ro) !== Ea && Ip(!0), Vm(t, a, m), (e & ro) !== Ea && Ip(!1), (e & br) !== Ea ? eh() : (e & Gn) !== Ea && El());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Jl(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & br) !== Ea ? Jv(t) : (e & Gn) !== Ea && th(t);
            var d = s.create;
            (e & ro) !== Ea && Ip(!0), s.destroy = d(), (e & ro) !== Ea && Ip(!1), (e & br) !== Ea ? Ed() : (e & Gn) !== Ea && nh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var g = void 0;
                (s.tag & Gn) !== We ? g = "useLayoutEffect" : (s.tag & ro) !== We ? g = "useInsertionEffect" : g = "useEffect";
                var b = void 0;
                m === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? b = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + m, S("%s must not return anything besides a function, which is used for clean-up.%s", g, b);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function cD(e, t) {
      if ((t.flags & ut) !== We)
        switch (t.tag) {
          case Q: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = pC(), m = t.alternate === null ? "mount" : "update";
            dC() && (m = "nested-update"), typeof s == "function" && s(l, m, a, d);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case F:
                    var b = g.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                  case Q:
                    var T = g.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function fD(e, t, a, i) {
      if ((a.flags & or) !== We)
        switch (a.tag) {
          case _:
          case Y:
          case re: {
            if (!Tr)
              if (a.mode & Ke)
                try {
                  lo(), Jl(Gn | Qn, a);
                } finally {
                  oo(a);
                }
              else
                Jl(Gn | Qn, a);
            break;
          }
          case M: {
            var l = a.stateNode;
            if (a.flags & ut && !Tr)
              if (t === null)
                if (a.type === a.elementType && !ds && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & Ke)
                  try {
                    lo(), l.componentDidMount();
                  } finally {
                    oo(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ti(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !ds && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & Ke)
                  try {
                    lo(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    oo(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !ds && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), wb(a, m, l));
            break;
          }
          case F: {
            var g = a.updateQueue;
            if (g !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    b = a.child.stateNode;
                    break;
                  case M:
                    b = a.child.stateNode;
                    break;
                }
              wb(a, g, b);
            }
            break;
          }
          case B: {
            var T = a.stateNode;
            if (t === null && a.flags & ut) {
              var N = a.type, D = a.memoizedProps;
              NR(T, N, D);
            }
            break;
          }
          case J:
            break;
          case I:
            break;
          case Q: {
            {
              var j = a.memoizedProps, H = j.onCommit, X = j.onRender, ke = a.stateNode.effectDuration, qe = pC(), He = t === null ? "mount" : "update";
              dC() && (He = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, He, a.actualDuration, a.treeBaseDuration, a.actualStartTime, qe);
              {
                typeof H == "function" && H(a.memoizedProps.id, He, ke, qe), uk(a);
                var bt = a.return;
                e:
                  for (; bt !== null; ) {
                    switch (bt.tag) {
                      case F:
                        var gt = bt.stateNode;
                        gt.effectDuration += ke;
                        break e;
                      case Q:
                        var U = bt.stateNode;
                        U.effectDuration += ke;
                        break e;
                    }
                    bt = bt.return;
                  }
              }
            }
            break;
          }
          case te: {
            SD(e, a);
            break;
          }
          case Me:
          case $e:
          case Ve:
          case de:
          case me:
          case Ce:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Tr || a.flags & _r && YC(a);
    }
    function dD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          if (e.mode & Ke)
            try {
              lo(), IC(e, e.return);
            } finally {
              oo(e);
            }
          else
            IC(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && iD(e, e.return, t), BC(e, e.return);
          break;
        }
        case B: {
          BC(e, e.return);
          break;
        }
      }
    }
    function pD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? HR(l) : VR(i.stateNode, i.memoizedProps);
            } catch (d) {
              Zt(e, e.return, d);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? $R(s) : IR(s, i.memoizedProps);
            } catch (d) {
              Zt(e, e.return, d);
            }
        } else if (!((i.tag === de || i.tag === me) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function YC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case B:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Ke)
            try {
              lo(), l = t(i);
            } finally {
              oo(e);
            }
          else
            l = t(i);
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ot(e)), t.current = i;
      }
    }
    function vD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function qC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, qC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && bw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function hD(e) {
      for (var t = e.return; t !== null; ) {
        if (QC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function QC(e) {
      return e.tag === B || e.tag === F || e.tag === I;
    }
    function GC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || QC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== J && t.tag !== Ae; ) {
            if (t.flags & Qt || t.child === null || t.tag === I)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Qt))
            return t.stateNode;
        }
    }
    function mD(e) {
      var t = hD(e);
      switch (t.tag) {
        case B: {
          var a = t.stateNode;
          t.flags & Nt && (KE(a), t.flags &= ~Nt);
          var i = GC(e);
          y0(e, i, a);
          break;
        }
        case F:
        case I: {
          var l = t.stateNode.containerInfo, s = GC(e);
          m0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function m0(e, t, a) {
      var i = e.tag, l = i === B || i === J;
      if (l) {
        var s = e.stateNode;
        t ? AR(a, s, t) : zR(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          m0(d, t, a);
          for (var m = d.sibling; m !== null; )
            m0(m, t, a), m = m.sibling;
        }
      }
    }
    function y0(e, t, a) {
      var i = e.tag, l = i === B || i === J;
      if (l) {
        var s = e.stateNode;
        t ? UR(a, s, t) : LR(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          y0(d, t, a);
          for (var m = d.sibling; m !== null; )
            y0(m, t, a), m = m.sibling;
        }
      }
    }
    var xr = null, Di = !1;
    function yD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case B: {
                xr = i.stateNode, Di = !1;
                break e;
              }
              case F: {
                xr = i.stateNode.containerInfo, Di = !0;
                break e;
              }
              case I: {
                xr = i.stateNode.containerInfo, Di = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        KC(e, t, a), xr = null, Di = !1;
      }
      vD(a);
    }
    function eu(e, t, a) {
      for (var i = a.child; i !== null; )
        KC(e, t, i), i = i.sibling;
    }
    function KC(e, t, a) {
      switch (gd(a), a.tag) {
        case B:
          Tr || vf(a, t);
        case J: {
          {
            var i = xr, l = Di;
            xr = null, eu(e, t, a), xr = i, Di = l, xr !== null && (Di ? PR(xr, a.stateNode) : FR(xr, a.stateNode));
          }
          return;
        }
        case Ae: {
          xr !== null && (Di ? jR(xr, a.stateNode) : Dg(xr, a.stateNode));
          return;
        }
        case I: {
          {
            var s = xr, d = Di;
            xr = a.stateNode.containerInfo, Di = !0, eu(e, t, a), xr = s, Di = d;
          }
          return;
        }
        case _:
        case Y:
        case ce:
        case re: {
          if (!Tr) {
            var m = a.updateQueue;
            if (m !== null) {
              var g = m.lastEffect;
              if (g !== null) {
                var b = g.next, T = b;
                do {
                  var N = T, D = N.destroy, j = N.tag;
                  D !== void 0 && ((j & ro) !== Ea ? Vm(a, t, D) : (j & Gn) !== Ea && (rc(a), a.mode & Ke ? (lo(), Vm(a, t, D), oo(a)) : Vm(a, t, D), El())), T = T.next;
                } while (T !== b);
              }
            }
          }
          eu(e, t, a);
          return;
        }
        case M: {
          if (!Tr) {
            vf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && h0(a, t, H);
          }
          eu(e, t, a);
          return;
        }
        case Ve: {
          eu(e, t, a);
          return;
        }
        case de: {
          if (
            // TODO: Remove this dead flag
            a.mode & pt
          ) {
            var X = Tr;
            Tr = X || a.memoizedState !== null, eu(e, t, a), Tr = X;
          } else
            eu(e, t, a);
          break;
        }
        default: {
          eu(e, t, a);
          return;
        }
      }
    }
    function gD(e) {
      e.memoizedState;
    }
    function SD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && aw(s);
          }
        }
      }
    }
    function XC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new nD()), t.forEach(function(i) {
          var l = hk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Yn)
              if (df !== null && pf !== null)
                Vp(pf, df);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function ED(e, t, a) {
      df = a, pf = e, At(t), ZC(t, e), At(t), df = null, pf = null;
    }
    function ki(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            yD(e, t, s);
          } catch (g) {
            Zt(s, t, g);
          }
        }
      var d = Oy();
      if (t.subtreeFlags & Ur)
        for (var m = t.child; m !== null; )
          At(m), ZC(m, e), m = m.sibling;
      At(d);
    }
    function ZC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case _:
        case Y:
        case ce:
        case re: {
          if (ki(t, e), uo(e), l & ut) {
            try {
              Oi(ro | Qn, e, e.return), Jl(ro | Qn, e);
            } catch (Je) {
              Zt(e, e.return, Je);
            }
            if (e.mode & Ke) {
              try {
                lo(), Oi(Gn | Qn, e, e.return);
              } catch (Je) {
                Zt(e, e.return, Je);
              }
              oo(e);
            } else
              try {
                Oi(Gn | Qn, e, e.return);
              } catch (Je) {
                Zt(e, e.return, Je);
              }
          }
          return;
        }
        case M: {
          ki(t, e), uo(e), l & _r && i !== null && vf(i, i.return);
          return;
        }
        case B: {
          ki(t, e), uo(e), l & _r && i !== null && vf(i, i.return);
          {
            if (e.flags & Nt) {
              var s = e.stateNode;
              try {
                KE(s);
              } catch (Je) {
                Zt(e, e.return, Je);
              }
            }
            if (l & ut) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, g = i !== null ? i.memoizedProps : m, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    MR(d, T, b, g, m, e);
                  } catch (Je) {
                    Zt(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (ki(t, e), uo(e), l & ut) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, D = e.memoizedProps, j = i !== null ? i.memoizedProps : D;
            try {
              _R(N, j, D);
            } catch (Je) {
              Zt(e, e.return, Je);
            }
          }
          return;
        }
        case F: {
          if (ki(t, e), uo(e), l & ut && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                rw(t.containerInfo);
              } catch (Je) {
                Zt(e, e.return, Je);
              }
          }
          return;
        }
        case I: {
          ki(t, e), uo(e);
          return;
        }
        case te: {
          ki(t, e), uo(e);
          var X = e.child;
          if (X.flags & ji) {
            var ke = X.stateNode, qe = X.memoizedState, He = qe !== null;
            if (ke.isHidden = He, He) {
              var bt = X.alternate !== null && X.alternate.memoizedState !== null;
              bt || ek();
            }
          }
          if (l & ut) {
            try {
              gD(e);
            } catch (Je) {
              Zt(e, e.return, Je);
            }
            XC(e);
          }
          return;
        }
        case de: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pt
          ) {
            var U = Tr;
            Tr = U || gt, ki(t, e), Tr = U;
          } else
            ki(t, e);
          if (uo(e), l & ji) {
            var Z = e.stateNode, A = e.memoizedState, se = A !== null, Ne = e;
            if (Z.isHidden = se, se && !gt && (Ne.mode & pt) !== Ge) {
              Ue = Ne;
              for (var xe = Ne.child; xe !== null; )
                Ue = xe, CD(xe), xe = xe.sibling;
            }
            pD(Ne, se);
          }
          return;
        }
        case Me: {
          ki(t, e), uo(e), l & ut && XC(e);
          return;
        }
        case Ve:
          return;
        default: {
          ki(t, e), uo(e);
          return;
        }
      }
    }
    function uo(e) {
      var t = e.flags;
      if (t & Qt) {
        try {
          mD(e);
        } catch (a) {
          Zt(e, e.return, a);
        }
        e.flags &= ~Qt;
      }
      t & sa && (e.flags &= ~sa);
    }
    function bD(e, t, a) {
      df = a, pf = t, Ue = e, JC(e, t, a), df = null, pf = null;
    }
    function JC(e, t, a) {
      for (var i = (e.mode & pt) !== Ge; Ue !== null; ) {
        var l = Ue, s = l.child;
        if (l.tag === de && i) {
          var d = l.memoizedState !== null, m = d || $m;
          if (m) {
            g0(e, t, a);
            continue;
          } else {
            var g = l.alternate, b = g !== null && g.memoizedState !== null, T = b || Tr, N = $m, D = Tr;
            $m = m, Tr = T, Tr && !D && (Ue = l, TD(l));
            for (var j = s; j !== null; )
              Ue = j, JC(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Ue = l, $m = N, Tr = D, g0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & or) !== We && s !== null ? (s.return = l, Ue = s) : g0(e, t, a);
      }
    }
    function g0(e, t, a) {
      for (; Ue !== null; ) {
        var i = Ue;
        if ((i.flags & or) !== We) {
          var l = i.alternate;
          At(i);
          try {
            fD(t, l, i, a);
          } catch (d) {
            Zt(i, i.return, d);
          }
          On();
        }
        if (i === e) {
          Ue = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ue = s;
          return;
        }
        Ue = i.return;
      }
    }
    function CD(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        switch (t.tag) {
          case _:
          case Y:
          case ce:
          case re: {
            if (t.mode & Ke)
              try {
                lo(), Oi(Gn, t, t.return);
              } finally {
                oo(t);
              }
            else
              Oi(Gn, t, t.return);
            break;
          }
          case M: {
            vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && h0(t, t.return, i);
            break;
          }
          case B: {
            vf(t, t.return);
            break;
          }
          case de: {
            var l = t.memoizedState !== null;
            if (l) {
              eT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ue = a) : eT(e);
      }
    }
    function eT(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if (t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function TD(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        if (t.tag === de) {
          var i = t.memoizedState !== null;
          if (i) {
            tT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ue = a) : tT(e);
      }
    }
    function tT(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        At(t);
        try {
          dD(t);
        } catch (i) {
          Zt(t, t.return, i);
        }
        if (On(), t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function xD(e, t, a, i) {
      Ue = t, RD(t, e, a, i);
    }
    function RD(e, t, a, i) {
      for (; Ue !== null; ) {
        var l = Ue, s = l.child;
        (l.subtreeFlags & ca) !== We && s !== null ? (s.return = l, Ue = s) : wD(e, t, a, i);
      }
    }
    function wD(e, t, a, i) {
      for (; Ue !== null; ) {
        var l = Ue;
        if ((l.flags & tn) !== We) {
          At(l);
          try {
            OD(t, l, a, i);
          } catch (d) {
            Zt(l, l.return, d);
          }
          On();
        }
        if (l === e) {
          Ue = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ue = s;
          return;
        }
        Ue = l.return;
      }
    }
    function OD(e, t, a, i) {
      switch (t.tag) {
        case _:
        case Y:
        case re: {
          if (t.mode & Ke) {
            GS();
            try {
              Jl(br | Qn, t);
            } finally {
              QS(t);
            }
          } else
            Jl(br | Qn, t);
          break;
        }
      }
    }
    function DD(e) {
      Ue = e, kD();
    }
    function kD() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        if ((Ue.flags & Dt) !== We) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ue = l, _D(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var m = d.sibling;
                    d.sibling = null, d = m;
                  } while (d !== null);
                }
              }
            }
            Ue = e;
          }
        }
        (e.subtreeFlags & ca) !== We && t !== null ? (t.return = e, Ue = t) : ND();
      }
    }
    function ND() {
      for (; Ue !== null; ) {
        var e = Ue;
        (e.flags & tn) !== We && (At(e), MD(e), On());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function MD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          e.mode & Ke ? (GS(), Oi(br | Qn, e, e.return), QS(e)) : Oi(br | Qn, e, e.return);
          break;
        }
      }
    }
    function _D(e, t) {
      for (; Ue !== null; ) {
        var a = Ue;
        At(a), zD(a, t), On();
        var i = a.child;
        i !== null ? (i.return = a, Ue = i) : LD(e);
      }
    }
    function LD(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.sibling, i = t.return;
        if (qC(t), t === e) {
          Ue = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ue = a;
          return;
        }
        Ue = i;
      }
    }
    function zD(e, t) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          e.mode & Ke ? (GS(), Oi(br, e, t), QS(e)) : Oi(br, e, t);
          break;
        }
      }
    }
    function UD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          try {
            Jl(Gn | Qn, e);
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
      }
    }
    function AD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          try {
            Jl(br | Qn, e);
          } catch (t) {
            Zt(e, e.return, t);
          }
          break;
        }
      }
    }
    function FD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re: {
          try {
            Oi(Gn | Qn, e, e.return);
          } catch (a) {
            Zt(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && h0(e, e.return, t);
          break;
        }
      }
    }
    function PD(e) {
      switch (e.tag) {
        case _:
        case Y:
        case re:
          try {
            Oi(br | Qn, e, e.return);
          } catch (t) {
            Zt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Mp = Symbol.for;
      Mp("selector.component"), Mp("selector.has_pseudo_class"), Mp("selector.role"), Mp("selector.test_id"), Mp("selector.text");
    }
    var jD = [];
    function HD() {
      jD.forEach(function(e) {
        return e();
      });
    }
    var $D = y.ReactCurrentActQueue;
    function VD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function nT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && $D.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ID = Math.ceil, S0 = y.ReactCurrentDispatcher, E0 = y.ReactCurrentOwner, Rr = y.ReactCurrentBatchConfig, Ni = y.ReactCurrentActQueue, Zn = (
      /*             */
      0
    ), rT = (
      /*               */
      1
    ), wr = (
      /*                */
      2
    ), Ja = (
      /*                */
      4
    ), Xo = 0, _p = 1, ps = 2, Im = 3, Lp = 4, aT = 5, b0 = 6, Et = Zn, Jr = null, yn = null, Jn = ee, so = ee, C0 = Bl(ee), er = Xo, zp = null, Bm = ee, Up = ee, Wm = ee, Ap = null, ba = null, T0 = 0, iT = 500, oT = 1 / 0, BD = 500, Zo = null;
    function Fp() {
      oT = an() + BD;
    }
    function lT() {
      return oT;
    }
    var Ym = !1, x0 = null, hf = null, vs = !1, tu = null, Pp = ee, R0 = [], w0 = null, WD = 50, jp = 0, O0 = null, D0 = !1, qm = !1, YD = 50, mf = 0, Qm = null, Hp = Yt, Gm = ee, uT = !1;
    function Km() {
      return Jr;
    }
    function ea() {
      return (Et & (wr | Ja)) !== Zn ? an() : (Hp !== Yt || (Hp = an()), Hp);
    }
    function nu(e) {
      var t = e.mode;
      if ((t & pt) === Ge)
        return Xe;
      if ((Et & wr) !== Zn && Jn !== ee)
        return kn(Jn);
      var a = Vw() !== $w;
      if (a) {
        if (Rr.transition !== null) {
          var i = Rr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Gm === St && (Gm = wd()), Gm;
      }
      var l = va();
      if (l !== St)
        return l;
      var s = wR();
      return s;
    }
    function qD(e) {
      var t = e.mode;
      return (t & pt) === Ge ? Xe : Gy();
    }
    function tr(e, t, a, i) {
      yk(), uT && S("useInsertionEffect must not schedule updates."), D0 && (qm = !0), zo(e, a, i), (Et & wr) !== ee && e === Jr ? Ek(t) : (Yn && Md(e, t, a), bk(t), e === Jr && ((Et & wr) === Zn && (Up = st(Up, a)), er === Lp && ru(e, Jn)), Ca(e, i), a === Xe && Et === Zn && (t.mode & pt) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ni.isBatchingLegacy && (Fp(), lb()));
    }
    function QD(e, t, a) {
      var i = e.current;
      i.lanes = t, zo(e, t, a), Ca(e, a);
    }
    function GD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & wr) !== Zn
      );
    }
    function Ca(e, t) {
      var a = e.callbackNode;
      Yy(e, t);
      var i = ju(e, e === Jr ? Jn : ee);
      if (i === ee) {
        a !== null && xT(a), e.callbackNode = null, e.callbackPriority = St;
        return;
      }
      var l = xn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ni.current !== null && a !== U0)) {
        a == null && s !== Xe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && xT(a);
      var d;
      if (l === Xe)
        e.tag === Wl ? (Ni.isBatchingLegacy !== null && (Ni.didScheduleLegacyUpdate = !0), xw(fT.bind(null, e))) : ob(fT.bind(null, e)), Ni.current !== null ? Ni.current.push(Yl) : DR(function() {
          (Et & (wr | Ja)) === Zn && Yl();
        }), d = null;
      else {
        var m;
        switch (Bu(i)) {
          case lr:
            m = Js;
            break;
          case qn:
            m = Gr;
            break;
          case hi:
            m = Ia;
            break;
          case Vu:
            m = $i;
            break;
          default:
            m = Ia;
            break;
        }
        d = A0(m, sT.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function sT(e, t) {
      if (yO(), Hp = Yt, Gm = ee, (Et & (wr | Ja)) !== Zn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = el();
      if (i && e.callbackNode !== a)
        return null;
      var l = ju(e, e === Jr ? Jn : ee);
      if (l === ee)
        return null;
      var s = !$u(e, l) && !uh(e, l) && !t, d = s ? ik(e, l) : Zm(e, l);
      if (d !== Xo) {
        if (d === ps) {
          var m = xd(e);
          m !== ee && (l = m, d = k0(e, m));
        }
        if (d === _p) {
          var g = zp;
          throw hs(e, ee), ru(e, l), Ca(e, an()), g;
        }
        if (d === b0)
          ru(e, l);
        else {
          var b = !$u(e, l), T = e.current.alternate;
          if (b && !XD(T)) {
            if (d = Zm(e, l), d === ps) {
              var N = xd(e);
              N !== ee && (l = N, d = k0(e, N));
            }
            if (d === _p) {
              var D = zp;
              throw hs(e, ee), ru(e, l), Ca(e, an()), D;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, KD(e, d, l);
        }
      }
      return Ca(e, an()), e.callbackNode === a ? sT.bind(null, e) : null;
    }
    function k0(e, t) {
      var a = Ap;
      if (Mn(e)) {
        var i = hs(e, t);
        i.flags |= dn, yw(e.containerInfo);
      }
      var l = Zm(e, t);
      if (l !== ps) {
        var s = ba;
        ba = a, s !== null && cT(s);
      }
      return l;
    }
    function cT(e) {
      ba === null ? ba = e : ba.push.apply(ba, e);
    }
    function KD(e, t, a) {
      switch (t) {
        case Xo:
        case _p:
          throw new Error("Root did not complete. This is a bug in React.");
        case ps: {
          ms(e, ba, Zo);
          break;
        }
        case Im: {
          if (ru(e, a), Tc(a) && // do not delay if we're inside an act() scope
          !RT()) {
            var i = T0 + iT - an();
            if (i > 10) {
              var l = ju(e, ee);
              if (l !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Lo(s, a)) {
                ea(), kd(e, s);
                break;
              }
              e.timeoutHandle = wg(ms.bind(null, e, ba, Zo), i);
              break;
            }
          }
          ms(e, ba, Zo);
          break;
        }
        case Lp: {
          if (ru(e, a), lh(a))
            break;
          if (!RT()) {
            var d = oh(e, a), m = d, g = an() - m, b = mk(g) - g;
            if (b > 10) {
              e.timeoutHandle = wg(ms.bind(null, e, ba, Zo), b);
              break;
            }
          }
          ms(e, ba, Zo);
          break;
        }
        case aT: {
          ms(e, ba, Zo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function XD(e) {
      for (var t = e; ; ) {
        if (t.flags & _u) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, m = s.value;
                try {
                  if (!ze(d(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & _u && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ru(e, t) {
      t = Ol(t, Wm), t = Ol(t, Up), Dd(e, t);
    }
    function fT(e) {
      if (gO(), (Et & (wr | Ja)) !== Zn)
        throw new Error("Should not already be working.");
      el();
      var t = ju(e, ee);
      if (!jr(t, Xe))
        return Ca(e, an()), null;
      var a = Zm(e, t);
      if (e.tag !== Wl && a === ps) {
        var i = xd(e);
        i !== ee && (t = i, a = k0(e, i));
      }
      if (a === _p) {
        var l = zp;
        throw hs(e, ee), ru(e, t), Ca(e, an()), l;
      }
      if (a === b0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ms(e, ba, Zo), Ca(e, an()), null;
    }
    function ZD(e, t) {
      t !== ee && (Dl(e, st(t, Xe)), Ca(e, an()), (Et & (wr | Ja)) === Zn && (Fp(), Yl()));
    }
    function N0(e, t) {
      var a = Et;
      Et |= rT;
      try {
        return e(t);
      } finally {
        Et = a, Et === Zn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ni.isBatchingLegacy && (Fp(), lb());
      }
    }
    function JD(e, t, a, i, l) {
      var s = va(), d = Rr.transition;
      try {
        return Rr.transition = null, Nn(lr), e(t, a, i, l);
      } finally {
        Nn(s), Rr.transition = d, Et === Zn && Fp();
      }
    }
    function Jo(e) {
      tu !== null && tu.tag === Wl && (Et & (wr | Ja)) === Zn && el();
      var t = Et;
      Et |= rT;
      var a = Rr.transition, i = va();
      try {
        return Rr.transition = null, Nn(lr), e ? e() : void 0;
      } finally {
        Nn(i), Rr.transition = a, Et = t, (Et & (wr | Ja)) === Zn && Yl();
      }
    }
    function dT() {
      return (Et & (wr | Ja)) !== Zn;
    }
    function Xm(e, t) {
      $r(C0, so, e), so = st(so, t);
    }
    function M0(e) {
      so = C0.current, Hr(C0, e);
    }
    function hs(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Og && (e.timeoutHandle = Og, OR(a)), yn !== null)
        for (var i = yn.return; i !== null; ) {
          var l = i.alternate;
          $C(l, i), i = i.return;
        }
      Jr = e;
      var s = ys(e.current, null);
      return yn = s, Jn = so = t, er = Xo, zp = null, Bm = ee, Up = ee, Wm = ee, Ap = null, ba = null, Yw(), Ci.discardPendingWarnings(), s;
    }
    function pT(e, t) {
      do {
        var a = yn;
        try {
          if (im(), Ib(), On(), E0.current = null, a === null || a.return === null) {
            er = _p, zp = t, yn = null;
            return;
          }
          if (vt && a.mode & Ke && Fm(a, !0), kt)
            if (xo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              rh(a, i, Jn);
            } else
              ac(a, t, Jn);
          TO(e, a.return, a, t, Jn), yT(a);
        } catch (l) {
          t = l, yn === a && a !== null ? (a = a.return, yn = a) : a = yn;
          continue;
        }
        return;
      } while (!0);
    }
    function vT() {
      var e = S0.current;
      return S0.current = _m, e === null ? _m : e;
    }
    function hT(e) {
      S0.current = e;
    }
    function ek() {
      T0 = an();
    }
    function $p(e) {
      Bm = st(e, Bm);
    }
    function tk() {
      er === Xo && (er = Im);
    }
    function _0() {
      (er === Xo || er === Im || er === ps) && (er = Lp), Jr !== null && (Hu(Bm) || Hu(Up)) && ru(Jr, Jn);
    }
    function nk(e) {
      er !== Lp && (er = ps), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function rk() {
      return er === Xo;
    }
    function Zm(e, t) {
      var a = Et;
      Et |= wr;
      var i = vT();
      if (Jr !== e || Jn !== t) {
        if (Yn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Vp(e, Jn), l.clear()), wc(e, t);
        }
        Zo = _d(), hs(e, t);
      }
      La(t);
      do
        try {
          ak();
          break;
        } catch (s) {
          pT(e, s);
        }
      while (!0);
      if (im(), Et = a, hT(i), yn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Cl(), Jr = null, Jn = ee, er;
    }
    function ak() {
      for (; yn !== null; )
        mT(yn);
    }
    function ik(e, t) {
      var a = Et;
      Et |= wr;
      var i = vT();
      if (Jr !== e || Jn !== t) {
        if (Yn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Vp(e, Jn), l.clear()), wc(e, t);
        }
        Zo = _d(), Fp(), hs(e, t);
      }
      La(t);
      do
        try {
          ok();
          break;
        } catch (s) {
          pT(e, s);
        }
      while (!0);
      return im(), hT(i), Et = a, yn !== null ? (Uu(), Xo) : (Cl(), Jr = null, Jn = ee, er);
    }
    function ok() {
      for (; yn !== null && !Zs(); )
        mT(yn);
    }
    function mT(e) {
      var t = e.alternate;
      At(e);
      var a;
      (e.mode & Ke) !== Ge ? (qS(e), a = L0(t, e, so), Fm(e, !0)) : a = L0(t, e, so), On(), e.memoizedProps = e.pendingProps, a === null ? yT(e) : yn = a, E0.current = null;
    }
    function yT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Yr) === We) {
          At(t);
          var l = void 0;
          if ((t.mode & Ke) === Ge ? l = HC(a, t, so) : (qS(t), l = HC(a, t, so), Fm(t, !1)), On(), l !== null) {
            yn = l;
            return;
          }
        } else {
          var s = tD(a, t);
          if (s !== null) {
            s.flags &= Qv, yn = s;
            return;
          }
          if ((t.mode & Ke) !== Ge) {
            Fm(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Yr, i.subtreeFlags = We, i.deletions = null;
          else {
            er = b0, yn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          yn = g;
          return;
        }
        t = i, yn = t;
      } while (t !== null);
      er === Xo && (er = aT);
    }
    function ms(e, t, a) {
      var i = va(), l = Rr.transition;
      try {
        Rr.transition = null, Nn(lr), lk(e, t, a, i);
      } finally {
        Rr.transition = l, Nn(i);
      }
      return null;
    }
    function lk(e, t, a, i) {
      do
        el();
      while (tu !== null);
      if (gk(), (Et & (wr | Ja)) !== Zn)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (tc(s), l === null)
        return Sd(), null;
      if (s === ee && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = St;
      var d = st(l.lanes, l.childLanes);
      Nd(e, d), e === Jr && (Jr = null, yn = null, Jn = ee), ((l.subtreeFlags & ca) !== We || (l.flags & ca) !== We) && (vs || (vs = !0, w0 = a, A0(Ia, function() {
        return el(), null;
      })));
      var m = (l.subtreeFlags & (Sl | Ur | or | ca)) !== We, g = (l.flags & (Sl | Ur | or | ca)) !== We;
      if (m || g) {
        var b = Rr.transition;
        Rr.transition = null;
        var T = va();
        Nn(lr);
        var N = Et;
        Et |= Ja, E0.current = null, oD(e, l), vC(), ED(e, l, s), ER(e.containerInfo), e.current = l, ah(s), bD(l, e, s), bl(), Xv(), Et = N, Nn(T), Rr.transition = b;
      } else
        e.current = l, vC();
      var D = vs;
      if (vs ? (vs = !1, tu = e, Pp = s) : (mf = 0, Qm = null), d = e.pendingLanes, d === ee && (hf = null), D || bT(e.current, !1), di(l.stateNode, i), Yn && e.memoizedUpdaters.clear(), HD(), Ca(e, an()), t !== null)
        for (var j = e.onRecoverableError, H = 0; H < t.length; H++) {
          var X = t[H], ke = X.stack, qe = X.digest;
          j(X.value, {
            componentStack: ke,
            digest: qe
          });
        }
      if (Ym) {
        Ym = !1;
        var He = x0;
        throw x0 = null, He;
      }
      return jr(Pp, Xe) && e.tag !== Wl && el(), d = e.pendingLanes, jr(d, Xe) ? (mO(), e === O0 ? jp++ : (jp = 0, O0 = e)) : jp = 0, Yl(), Sd(), null;
    }
    function el() {
      if (tu !== null) {
        var e = Bu(Pp), t = Xy(hi, e), a = Rr.transition, i = va();
        try {
          return Rr.transition = null, Nn(t), sk();
        } finally {
          Nn(i), Rr.transition = a;
        }
      }
      return !1;
    }
    function uk(e) {
      R0.push(e), vs || (vs = !0, A0(Ia, function() {
        return el(), null;
      }));
    }
    function sk() {
      if (tu === null)
        return !1;
      var e = w0;
      w0 = null;
      var t = tu, a = Pp;
      if (tu = null, Pp = ee, (Et & (wr | Ja)) !== Zn)
        throw new Error("Cannot flush passive effects while already rendering.");
      D0 = !0, qm = !1, ih(a);
      var i = Et;
      Et |= Ja, DD(t.current), xD(t, t.current, a, e);
      {
        var l = R0;
        R0 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          cD(t, d);
        }
      }
      zu(), bT(t.current, !0), Et = i, Yl(), qm ? t === Qm ? mf++ : (mf = 0, Qm = t) : mf = 0, D0 = !1, qm = !1, Ii(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function gT(e) {
      return hf !== null && hf.has(e);
    }
    function ck(e) {
      hf === null ? hf = /* @__PURE__ */ new Set([e]) : hf.add(e);
    }
    function fk(e) {
      Ym || (Ym = !0, x0 = e);
    }
    var dk = fk;
    function ST(e, t, a) {
      var i = fs(a, t), l = mC(e, i, Xe), s = Ql(e, l, Xe), d = ea();
      s !== null && (zo(s, Xe, d), Ca(s, d));
    }
    function Zt(e, t, a) {
      if (rD(a), Ip(!1), e.tag === F) {
        ST(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          ST(i, e, a);
          return;
        } else if (i.tag === M) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !gT(s)) {
            var d = fs(a, e), m = JS(i, d, Xe), g = Ql(i, m, Xe), b = ea();
            g !== null && (zo(g, Xe, b), Ca(g, b));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function pk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ea();
      kd(e, a), Ck(e), Jr === e && Lo(Jn, a) && (er === Lp || er === Im && Tc(Jn) && an() - T0 < iT ? hs(e, ee) : Wm = st(Wm, a)), Ca(e, l);
    }
    function ET(e, t) {
      t === St && (t = qD(e));
      var a = ea(), i = Sa(e, t);
      i !== null && (zo(i, t, a), Ca(i, a));
    }
    function vk(e) {
      var t = e.memoizedState, a = St;
      t !== null && (a = t.retryLane), ET(e, a);
    }
    function hk(e, t) {
      var a = St, i;
      switch (e.tag) {
        case te:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Me:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ET(e, a);
    }
    function mk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ID(e / 1960) * 1960;
    }
    function yk() {
      if (jp > WD)
        throw jp = 0, O0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      mf > YD && (mf = 0, Qm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function gk() {
      Ci.flushLegacyContextWarning(), Ci.flushPendingUnsafeLifecycleWarnings();
    }
    function bT(e, t) {
      At(e), Jm(e, zr, FD), t && Jm(e, To, PD), Jm(e, zr, UD), t && Jm(e, To, AD), On();
    }
    function Jm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== We ? i = i.child : ((i.flags & t) !== We && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ey = null;
    function CT(e) {
      {
        if ((Et & wr) !== Zn || !(e.mode & pt))
          return;
        var t = e.tag;
        if (t !== K && t !== F && t !== M && t !== _ && t !== Y && t !== ce && t !== re)
          return;
        var a = ot(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = Cn;
        try {
          At(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? At(e) : On();
        }
      }
    }
    var L0;
    {
      var Sk = null;
      L0 = function(e, t, a) {
        var i = NT(Sk, t);
        try {
          return UC(e, t, a);
        } catch (s) {
          if (_w() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), Ib(), $C(e, t), NT(t, i), t.mode & Ke && qS(t), Co(null, UC, null, e, t, a), By()) {
            var l = ud();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var TT = !1, z0;
    z0 = /* @__PURE__ */ new Set();
    function Ek(e) {
      if (aa && !pO())
        switch (e.tag) {
          case _:
          case Y:
          case re: {
            var t = yn && ot(yn) || "Unknown", a = t;
            if (!z0.has(a)) {
              z0.add(a);
              var i = ot(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case M: {
            TT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), TT = !0);
            break;
          }
        }
    }
    function Vp(e, t) {
      if (Yn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Md(e, i, t);
        });
      }
    }
    var U0 = {};
    function A0(e, t) {
      {
        var a = Ni.current;
        return a !== null ? (a.push(t), U0) : Xs(e, t);
      }
    }
    function xT(e) {
      if (e !== U0)
        return Kv(e);
    }
    function RT() {
      return Ni.current !== null;
    }
    function bk(e) {
      {
        if (e.mode & pt) {
          if (!nT())
            return;
        } else if (!VD() || Et !== Zn || e.tag !== _ && e.tag !== Y && e.tag !== re)
          return;
        if (Ni.current === null) {
          var t = Cn;
          try {
            At(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ot(e));
          } finally {
            t ? At(e) : On();
          }
        }
      }
    }
    function Ck(e) {
      e.tag !== Wl && nT() && Ni.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      uT = e;
    }
    var ei = null, yf = null, Tk = function(e) {
      ei = e;
    };
    function gf(e) {
      {
        if (ei === null)
          return e;
        var t = ei(e);
        return t === void 0 ? e : t.current;
      }
    }
    function F0(e) {
      return gf(e);
    }
    function P0(e) {
      {
        if (ei === null)
          return e;
        var t = ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = gf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: il,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wT(e, t) {
      {
        if (ei === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (l = !0);
            break;
          }
          case _: {
            (typeof i == "function" || s === yr) && (l = !0);
            break;
          }
          case Y: {
            (s === il || s === yr) && (l = !0);
            break;
          }
          case ce:
          case re: {
            (s === ol || s === yr) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = ei(a);
          if (d !== void 0 && d === ei(i))
            return !0;
        }
        return !1;
      }
    }
    function OT(e) {
      {
        if (ei === null || typeof WeakSet != "function")
          return;
        yf === null && (yf = /* @__PURE__ */ new WeakSet()), yf.add(e);
      }
    }
    var xk = function(e, t) {
      {
        if (ei === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        el(), Jo(function() {
          j0(e.current, i, a);
        });
      }
    }, Rk = function(e, t) {
      {
        if (e.context !== Ua)
          return;
        el(), Jo(function() {
          Bp(t, e, null, null);
        });
      }
    };
    function j0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, m = e.type, g = null;
        switch (d) {
          case _:
          case re:
          case M:
            g = m;
            break;
          case Y:
            g = m.render;
            break;
        }
        if (ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (g !== null) {
          var N = ei(g);
          N !== void 0 && (a.has(N) ? T = !0 : t.has(N) && (d === M ? T = !0 : b = !0));
        }
        if (yf !== null && (yf.has(e) || i !== null && yf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var D = Sa(e, Xe);
          D !== null && tr(D, e, Xe, Yt);
        }
        l !== null && !T && j0(l, t, a), s !== null && j0(s, t, a);
      }
    }
    var wk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return H0(e.current, i, a), a;
      }
    };
    function H0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, m = null;
        switch (s) {
          case _:
          case re:
          case M:
            m = d;
            break;
          case Y:
            m = d.render;
            break;
        }
        var g = !1;
        m !== null && t.has(m) && (g = !0), g ? Ok(e, a) : i !== null && H0(i, t, a), l !== null && H0(l, t, a);
      }
    }
    function Ok(e, t) {
      {
        var a = Dk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case B:
              t.add(i.stateNode);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Dk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === B)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var $0;
    {
      $0 = !1;
      try {
        var DT = Object.preventExtensions({});
      } catch {
        $0 = !0;
      }
    }
    function kk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !$0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Aa = function(e, t, a, i) {
      return new kk(e, t, a, i);
    };
    function V0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Nk(e) {
      return typeof e == "function" && !V0(e) && e.defaultProps === void 0;
    }
    function Mk(e) {
      if (typeof e == "function")
        return V0(e) ? M : _;
      if (e != null) {
        var t = e.$$typeof;
        if (t === il)
          return Y;
        if (t === ol)
          return ce;
      }
      return K;
    }
    function ys(e, t) {
      var a = e.alternate;
      a === null ? (a = Aa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = We, a.subtreeFlags = We, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Wn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case K:
        case _:
        case re:
          a.type = gf(e.type);
          break;
        case M:
          a.type = F0(e.type);
          break;
        case Y:
          a.type = P0(e.type);
          break;
      }
      return a;
    }
    function _k(e, t) {
      e.flags &= Wn | Qt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Lk(e, t, a) {
      var i;
      return e === Xh ? (i = pt, t === !0 && (i |= on, i |= da)) : i = Ge, Yn && (i |= Ke), Aa(F, null, null, i);
    }
    function I0(e, t, a, i, l, s) {
      var d = K, m = e;
      if (typeof e == "function")
        V0(e) ? (d = M, m = F0(m)) : m = gf(m);
      else if (typeof e == "string")
        d = B;
      else
        e:
          switch (e) {
            case ni:
              return au(a.children, l, s, t);
            case al:
              d = $, l |= on, (l & pt) !== Ge && (l |= da);
              break;
            case uu:
              return zk(a, l, s, t);
            case Ha:
              return Uk(a, l, s, t);
            case su:
              return Ak(a, l, s, t);
            case Nf:
              return kT(a, l, s, t);
            case iv:
            case rv:
            case Cy:
            case Ty:
            case av:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Df:
                    d = ye;
                    break e;
                  case kf:
                    d = he;
                    break e;
                  case il:
                    d = Y, m = P0(m);
                    break e;
                  case ol:
                    d = ce;
                    break e;
                  case yr:
                    d = De, m = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? ot(i) : null;
                b && (g += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      var T = Aa(d, a, t, l);
      return T.elementType = e, T.type = m, T.lanes = s, T._debugOwner = i, T;
    }
    function B0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, m = I0(l, s, d, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function au(e, t, a, i) {
      var l = Aa(ie, e, i, t);
      return l.lanes = a, l;
    }
    function zk(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Aa(Q, e, i, t | Ke);
      return l.elementType = uu, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Uk(e, t, a, i) {
      var l = Aa(te, e, i, t);
      return l.elementType = Ha, l.lanes = a, l;
    }
    function Ak(e, t, a, i) {
      var l = Aa(Me, e, i, t);
      return l.elementType = su, l.lanes = a, l;
    }
    function kT(e, t, a, i) {
      var l = Aa(de, e, i, t);
      l.elementType = Nf, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function W0(e, t, a) {
      var i = Aa(J, e, null, t);
      return i.lanes = a, i;
    }
    function Fk() {
      var e = Aa(B, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function Pk(e) {
      var t = Aa(Ae, null, null, Ge);
      return t.stateNode = e, t;
    }
    function Y0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Aa(I, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function NT(e, t) {
      return e === null && (e = Aa(K, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function jk(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Og, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = St, this.eventTimes = Rc(ee), this.expirationTimes = Rc(Yt), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Rc(ee), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Kt; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Wl:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function MT(e, t, a, i, l, s, d, m, g, b) {
      var T = new jk(e, t, a, m, g), N = Lk(t, s);
      T.current = N, N.stateNode = T;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = D;
      }
      return eS(N), T;
    }
    var q0 = "18.2.0";
    function Hk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return nr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: wa,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Q0, G0;
    Q0 = !1, G0 = {};
    function _T(e) {
      if (!e)
        return Ua;
      var t = la(e), a = Tw(t);
      if (t.tag === M) {
        var i = t.type;
        if (no(i))
          return ab(t, i, a);
      }
      return a;
    }
    function $k(e, t) {
      {
        var a = la(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = fa(a);
        if (l === null)
          return null;
        if (l.mode & on) {
          var s = ot(a) || "Component";
          if (!G0[s]) {
            G0[s] = !0;
            var d = Cn;
            try {
              At(l), a.mode & on ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? At(d) : On();
            }
          }
        }
        return l.stateNode;
      }
    }
    function LT(e, t, a, i, l, s, d, m) {
      var g = !1, b = null;
      return MT(e, t, g, b, a, i, l, s, d);
    }
    function zT(e, t, a, i, l, s, d, m, g, b) {
      var T = !0, N = MT(a, i, T, e, l, s, d, m, g);
      N.context = _T(null);
      var D = N.current, j = ea(), H = nu(D), X = Go(j, H);
      return X.callback = t ?? null, Ql(D, X, H), QD(N, H, j), N;
    }
    function Bp(e, t, a, i) {
      Zv(t, e);
      var l = t.current, s = ea(), d = nu(l);
      Ro(d);
      var m = _T(a);
      t.context === null ? t.context = m : t.pendingContext = m, aa && Cn !== null && !Q0 && (Q0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ot(Cn) || "Unknown"));
      var g = Go(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var b = Ql(l, g, d);
      return b !== null && (tr(b, l, d, s), cm(b, l, d)), d;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Vk(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (Mn(t)) {
            var a = qy(t);
            ZD(t, a);
          }
          break;
        }
        case te: {
          Jo(function() {
            var l = Sa(e, Xe);
            if (l !== null) {
              var s = ea();
              tr(l, e, Xe, s);
            }
          });
          var i = Xe;
          K0(e, i);
          break;
        }
      }
    }
    function UT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function K0(e, t) {
      UT(e, t);
      var a = e.alternate;
      a && UT(a, t);
    }
    function Ik(e) {
      if (e.tag === te) {
        var t = Tl, a = Sa(e, t);
        if (a !== null) {
          var i = ea();
          tr(a, e, t, i);
        }
        K0(e, t);
      }
    }
    function Bk(e) {
      if (e.tag === te) {
        var t = nu(e), a = Sa(e, t);
        if (a !== null) {
          var i = ea();
          tr(a, e, t, i);
        }
        K0(e, t);
      }
    }
    function AT(e) {
      var t = Gv(e);
      return t === null ? null : t.stateNode;
    }
    var FT = function(e) {
      return null;
    };
    function Wk(e) {
      return FT(e);
    }
    var PT = function(e) {
      return !1;
    };
    function Yk(e) {
      return PT(e);
    }
    var jT = null, HT = null, $T = null, VT = null, IT = null, BT = null, WT = null, YT = null, qT = null;
    {
      var QT = function(e, t, a) {
        var i = t[a], l = An(e) ? e.slice() : mt({}, e);
        return a + 1 === t.length ? (An(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = QT(e[i], t, a + 1), l);
      }, GT = function(e, t) {
        return QT(e, t, 0);
      }, KT = function(e, t, a, i) {
        var l = t[i], s = An(e) ? e.slice() : mt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], An(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = KT(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, XT = function(e, t, a) {
        if (t.length !== a.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return KT(e, t, a, 0);
      }, ZT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = An(e) ? e.slice() : mt({}, e);
        return s[l] = ZT(e[l], t, a + 1, i), s;
      }, JT = function(e, t, a) {
        return ZT(e, t, 0, a);
      }, X0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      jT = function(e, t, a, i) {
        var l = X0(e, t);
        if (l !== null) {
          var s = JT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var d = Sa(e, Xe);
          d !== null && tr(d, e, Xe, Yt);
        }
      }, HT = function(e, t, a) {
        var i = X0(e, t);
        if (i !== null) {
          var l = GT(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = mt({}, e.memoizedProps);
          var s = Sa(e, Xe);
          s !== null && tr(s, e, Xe, Yt);
        }
      }, $T = function(e, t, a, i) {
        var l = X0(e, t);
        if (l !== null) {
          var s = XT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var d = Sa(e, Xe);
          d !== null && tr(d, e, Xe, Yt);
        }
      }, VT = function(e, t, a) {
        e.pendingProps = JT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Sa(e, Xe);
        i !== null && tr(i, e, Xe, Yt);
      }, IT = function(e, t) {
        e.pendingProps = GT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Sa(e, Xe);
        a !== null && tr(a, e, Xe, Yt);
      }, BT = function(e, t, a) {
        e.pendingProps = XT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Sa(e, Xe);
        i !== null && tr(i, e, Xe, Yt);
      }, WT = function(e) {
        var t = Sa(e, Xe);
        t !== null && tr(t, e, Xe, Yt);
      }, YT = function(e) {
        FT = e;
      }, qT = function(e) {
        PT = e;
      };
    }
    function qk(e) {
      var t = fa(e);
      return t === null ? null : t.stateNode;
    }
    function Qk(e) {
      return null;
    }
    function Gk() {
      return Cn;
    }
    function Kk(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: jT,
        overrideHookStateDeletePath: HT,
        overrideHookStateRenamePath: $T,
        overrideProps: VT,
        overridePropsDeletePath: IT,
        overridePropsRenamePath: BT,
        setErrorHandler: YT,
        setSuspenseHandler: qT,
        scheduleUpdate: WT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: qk,
        findFiberByHostInstance: t || Qk,
        // React Refresh
        findHostInstancesForRefresh: wk,
        scheduleRefresh: xk,
        scheduleRoot: Rk,
        setRefreshHandler: Tk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Gk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: q0
      });
    }
    var ex = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Z0(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = Z0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Tn) {
          var i = AT(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Bp(e, t, null, null);
    }, ny.prototype.unmount = Z0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dT() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Jo(function() {
          Bp(null, e, null, null);
        }), JE(t);
      }
    };
    function Xk(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tx(e);
      var a = !1, i = !1, l = "", s = ex;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === rl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = LT(e, Xh, null, a, i, l, s);
      Bh(d.current, e);
      var m = e.nodeType === Tn ? e.parentNode : e;
      return Zd(m), new Z0(d);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function Zk(e) {
      e && gh(e);
    }
    ny.prototype.unstable_scheduleHydration = Zk;
    function Jk(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tx(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", g = ex;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var b = zT(t, null, e, Xh, i, s, d, m, g);
      if (Bh(b.current, e), Zd(e), l)
        for (var T = 0; T < l.length; T++) {
          var N = l[T];
          lO(b, N);
        }
      return new ny(b);
    }
    function ry(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === Na || e.nodeType === mo || !Ze));
    }
    function Wp(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === Na || e.nodeType === mo || e.nodeType === Tn && e.nodeValue === " react-mount-point-unstable "));
    }
    function tx(e) {
      e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var eN = y.ReactCurrentOwner, nx;
    nx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Tn) {
        var t = AT(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = J0(e), l = !!(i && Il(i));
      l && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function J0(e) {
      return e ? e.nodeType === Na ? e.documentElement : e.firstChild : null;
    }
    function rx() {
    }
    function tN(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = ty(d);
            s.call(D);
          };
        }
        var d = zT(
          t,
          i,
          e,
          Wl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rx
        );
        e._reactRootContainer = d, Bh(d.current, e);
        var m = e.nodeType === Tn ? e.parentNode : e;
        return Zd(m), Jo(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var D = ty(T);
            b.call(D);
          };
        }
        var T = LT(
          e,
          Wl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rx
        );
        e._reactRootContainer = T, Bh(T.current, e);
        var N = e.nodeType === Tn ? e.parentNode : e;
        return Zd(N), Jo(function() {
          Bp(t, T, a, i);
        }), T;
      }
    }
    function nN(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, l) {
      nx(a), nN(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = tN(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var m = l;
          l = function() {
            var g = ty(d);
            m.call(g);
          };
        }
        Bp(t, d, e, l);
      }
      return ty(d);
    }
    function rN(e) {
      {
        var t = eN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Mr ? e : $k(e, "findDOMNode");
    }
    function aN(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function iN(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function oN(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Mu(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    function lN(e) {
      if (!Wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = J0(e), i = a && !Il(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jo(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, JE(e);
          });
        }), !0;
      } else {
        {
          var l = J0(e), s = !!(l && Il(l)), d = e.nodeType === Mr && Wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _e(Vk), dh(Ik), Yu(Bk), zd(va), vh(Iu), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Yv(cR), Ys(N0, JD, Jo);
    function uN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return Hk(e, t, null, a);
    }
    function sN(e, t, a, i) {
      return oN(e, t, a, i);
    }
    var eE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Il, Qc, Wh, Ws, Du, N0]
    };
    function cN(e, t) {
      return eE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Xk(e, t);
    }
    function fN(e, t, a) {
      return eE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Jk(e, t, a);
    }
    function dN(e) {
      return dT() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jo(e);
    }
    var pN = Kk({
      findFiberByHostInstance: ns,
      bundleType: 1,
      version: q0,
      rendererPackageName: "react-dom"
    });
    if (!pN && Qe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ax = window.location.protocol;
      /^(https?|file):$/.test(ax) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ax === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eE, xa.createPortal = uN, xa.createRoot = cN, xa.findDOMNode = rN, xa.flushSync = dN, xa.hydrate = aN, xa.hydrateRoot = fN, xa.render = iN, xa.unmountComponentAtNode = lN, xa.unstable_batchedUpdates = N0, xa.unstable_renderSubtreeIntoContainer = sN, xa.version = q0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function Jx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx);
    } catch (p) {
      console.error(p);
    }
  }
}
process.env.NODE_ENV === "production" ? (Jx(), uE.exports = HN()) : uE.exports = $N();
var pE = uE.exports;
const ly = /* @__PURE__ */ bN(pE);
function VN(p) {
  return typeof p == "function" ? p() : p;
}
const dy = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const {
    children: C,
    container: x,
    disablePortal: R = !1
  } = h, [S, L] = W.useState(null), _ = ti(/* @__PURE__ */ W.isValidElement(C) ? C.ref : null, y);
  if (Cf(() => {
    R || L(VN(x) || document.body);
  }, [x, R]), Cf(() => {
    if (S && !R)
      return ox(y, S), () => {
        ox(y, null);
      };
  }, [y, S, R]), R) {
    if (/* @__PURE__ */ W.isValidElement(C)) {
      const M = {
        ref: _
      };
      return /* @__PURE__ */ W.cloneElement(C, M);
    }
    return /* @__PURE__ */ Re.jsx(W.Fragment, {
      children: C
    });
  }
  return /* @__PURE__ */ Re.jsx(W.Fragment, {
    children: S && /* @__PURE__ */ pE.createPortal(C, S)
  });
});
process.env.NODE_ENV !== "production" && (dy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: c.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Jp, c.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool
});
process.env.NODE_ENV !== "production" && (dy["propTypes"] = Ix(dy.propTypes));
function IN(p) {
  const h = Pa(p);
  return h.body === p ? bs(p).innerWidth > h.documentElement.clientWidth : p.scrollHeight > p.clientHeight;
}
function Xp(p, h) {
  h ? p.setAttribute("aria-hidden", "true") : p.removeAttribute("aria-hidden");
}
function mx(p) {
  return parseInt(bs(p).getComputedStyle(p).paddingRight, 10) || 0;
}
function BN(p) {
  const y = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(p.tagName) !== -1, C = p.tagName === "INPUT" && p.getAttribute("type") === "hidden";
  return y || C;
}
function yx(p, h, y, C, x) {
  const R = [h, y, ...C];
  [].forEach.call(p.children, (S) => {
    const L = R.indexOf(S) === -1, _ = !BN(S);
    L && _ && Xp(S, x);
  });
}
function aE(p, h) {
  let y = -1;
  return p.some((C, x) => h(C) ? (y = x, !0) : !1), y;
}
function WN(p, h) {
  const y = [], C = p.container;
  if (!h.disableScrollLock) {
    if (IN(C)) {
      const S = Wx(Pa(C));
      y.push({
        value: C.style.paddingRight,
        property: "padding-right",
        el: C
      }), C.style.paddingRight = `${mx(C) + S}px`;
      const L = Pa(C).querySelectorAll(".mui-fixed");
      [].forEach.call(L, (_) => {
        y.push({
          value: _.style.paddingRight,
          property: "padding-right",
          el: _
        }), _.style.paddingRight = `${mx(_) + S}px`;
      });
    }
    let R;
    if (C.parentNode instanceof DocumentFragment)
      R = Pa(C).body;
    else {
      const S = C.parentElement, L = bs(C);
      R = (S == null ? void 0 : S.nodeName) === "HTML" && L.getComputedStyle(S).overflowY === "scroll" ? S : C;
    }
    y.push({
      value: R.style.overflow,
      property: "overflow",
      el: R
    }, {
      value: R.style.overflowX,
      property: "overflow-x",
      el: R
    }, {
      value: R.style.overflowY,
      property: "overflow-y",
      el: R
    }), R.style.overflow = "hidden";
  }
  return () => {
    y.forEach(({
      value: R,
      el: S,
      property: L
    }) => {
      R ? S.style.setProperty(L, R) : S.style.removeProperty(L);
    });
  };
}
function YN(p) {
  const h = [];
  return [].forEach.call(p.children, (y) => {
    y.getAttribute("aria-hidden") === "true" && h.push(y);
  }), h;
}
class qN {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(h, y) {
    let C = this.modals.indexOf(h);
    if (C !== -1)
      return C;
    C = this.modals.length, this.modals.push(h), h.modalRef && Xp(h.modalRef, !1);
    const x = YN(y);
    yx(y, h.mount, h.modalRef, x, !0);
    const R = aE(this.containers, (S) => S.container === y);
    return R !== -1 ? (this.containers[R].modals.push(h), C) : (this.containers.push({
      modals: [h],
      container: y,
      restore: null,
      hiddenSiblings: x
    }), C);
  }
  mount(h, y) {
    const C = aE(this.containers, (R) => R.modals.indexOf(h) !== -1), x = this.containers[C];
    x.restore || (x.restore = WN(x, y));
  }
  remove(h, y = !0) {
    const C = this.modals.indexOf(h);
    if (C === -1)
      return C;
    const x = aE(this.containers, (S) => S.modals.indexOf(h) !== -1), R = this.containers[x];
    if (R.modals.splice(R.modals.indexOf(h), 1), this.modals.splice(C, 1), R.modals.length === 0)
      R.restore && R.restore(), h.modalRef && Xp(h.modalRef, y), yx(R.container, h.mount, h.modalRef, R.hiddenSiblings, !1), this.containers.splice(x, 1);
    else {
      const S = R.modals[R.modals.length - 1];
      S.modalRef && Xp(S.modalRef, !1);
    }
    return C;
  }
  isTopModal(h) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === h;
  }
}
function QN(p) {
  return typeof p == "function" ? p() : p;
}
function GN(p) {
  return p ? p.props.hasOwnProperty("in") : !1;
}
const KN = new qN();
function XN(p) {
  const {
    container: h,
    disableEscapeKeyDown: y = !1,
    disableScrollLock: C = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: x = KN,
    closeAfterTransition: R = !1,
    onTransitionEnter: S,
    onTransitionExited: L,
    children: _,
    onClose: M,
    open: K,
    rootRef: F
  } = p, I = W.useRef({}), B = W.useRef(null), J = W.useRef(null), ie = ti(J, F), [$, he] = W.useState(!K), ye = GN(_);
  let Y = !0;
  (p["aria-hidden"] === "false" || p["aria-hidden"] === !1) && (Y = !1);
  const Q = () => Pa(B.current), te = () => (I.current.modalRef = J.current, I.current.mount = B.current, I.current), ce = () => {
    x.mount(te(), {
      disableScrollLock: C
    }), J.current && (J.current.scrollTop = 0);
  }, re = lx(() => {
    const Ce = QN(h) || Q().body;
    x.add(te(), Ce), J.current && ce();
  }), De = W.useCallback(() => x.isTopModal(te()), [x]), $e = lx((Ce) => {
    B.current = Ce, Ce && (K && De() ? ce() : J.current && Xp(J.current, Y));
  }), Ae = W.useCallback(() => {
    x.remove(te(), Y);
  }, [Y, x]);
  W.useEffect(() => () => {
    Ae();
  }, [Ae]), W.useEffect(() => {
    K ? re() : (!ye || !R) && Ae();
  }, [K, Ae, ye, R, re]);
  const Me = (Ce) => (Fe) => {
    var G;
    (G = Ce.onKeyDown) == null || G.call(Ce, Fe), !(Fe.key !== "Escape" || !De()) && (y || (Fe.stopPropagation(), M && M(Fe, "escapeKeyDown")));
  }, Ve = (Ce) => (Fe) => {
    var G;
    (G = Ce.onClick) == null || G.call(Ce, Fe), Fe.target === Fe.currentTarget && M && M(Fe, "backdropClick");
  };
  return {
    getRootProps: (Ce = {}) => {
      const Fe = Xx(p);
      delete Fe.onTransitionEnter, delete Fe.onTransitionExited;
      const G = q({}, Fe, Ce);
      return q({
        role: "presentation"
      }, G, {
        onKeyDown: Me(G),
        ref: ie
      });
    },
    getBackdropProps: (Ce = {}) => {
      const Fe = Ce;
      return q({
        "aria-hidden": !0
      }, Fe, {
        onClick: Ve(Fe),
        open: K
      });
    },
    getTransitionProps: () => {
      const Ce = () => {
        he(!1), S && S();
      }, Fe = () => {
        he(!0), L && L(), R && Ae();
      };
      return {
        onEnter: ux(Ce, _ == null ? void 0 : _.props.onEnter),
        onExited: ux(Fe, _ == null ? void 0 : _.props.onExited)
      };
    },
    rootRef: ie,
    portalRef: $e,
    isTopModal: De,
    exited: $,
    hasTransition: ye
  };
}
const ZN = ["onChange", "maxRows", "minRows", "style", "value"];
function uy(p) {
  return parseInt(p, 10) || 0;
}
const JN = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function gx(p) {
  return p == null || Object.keys(p).length === 0 || p.outerHeightStyle === 0 && !p.overflow;
}
const e1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const {
    onChange: C,
    maxRows: x,
    minRows: R = 1,
    style: S,
    value: L
  } = h, _ = $t(h, ZN), {
    current: M
  } = W.useRef(L != null), K = W.useRef(null), F = ti(y, K), I = W.useRef(null), B = W.useRef(0), [J, ie] = W.useState({
    outerHeightStyle: 0
  }), $ = W.useCallback(() => {
    const Q = K.current, ce = bs(Q).getComputedStyle(Q);
    if (ce.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const re = I.current;
    re.style.width = ce.width, re.value = Q.value || h.placeholder || "x", re.value.slice(-1) === `
` && (re.value += " ");
    const De = ce.boxSizing, $e = uy(ce.paddingBottom) + uy(ce.paddingTop), Ae = uy(ce.borderBottomWidth) + uy(ce.borderTopWidth), Me = re.scrollHeight;
    re.value = "x";
    const Ve = re.scrollHeight;
    let de = Me;
    R && (de = Math.max(Number(R) * Ve, de)), x && (de = Math.min(Number(x) * Ve, de)), de = Math.max(de, Ve);
    const me = de + (De === "border-box" ? $e + Ae : 0), Te = Math.abs(de - Me) <= 1;
    return {
      outerHeightStyle: me,
      overflow: Te
    };
  }, [x, R, h.placeholder]), he = (Q, te) => {
    const {
      outerHeightStyle: ce,
      overflow: re
    } = te;
    return B.current < 20 && (ce > 0 && Math.abs((Q.outerHeightStyle || 0) - ce) > 1 || Q.overflow !== re) ? (B.current += 1, {
      overflow: re,
      outerHeightStyle: ce
    }) : (process.env.NODE_ENV !== "production" && B.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), Q);
  }, ye = W.useCallback(() => {
    const Q = $();
    gx(Q) || ie((te) => he(te, Q));
  }, [$]);
  Cf(() => {
    const Q = () => {
      const Ve = $();
      gx(Ve) || pE.flushSync(() => {
        ie((de) => he(de, Ve));
      });
    }, te = () => {
      B.current = 0, Q();
    };
    let ce;
    const re = () => {
      cancelAnimationFrame(ce), ce = requestAnimationFrame(() => {
        te();
      });
    }, De = Bx(te), $e = K.current, Ae = bs($e);
    Ae.addEventListener("resize", De);
    let Me;
    return typeof ResizeObserver < "u" && (Me = new ResizeObserver(process.env.NODE_ENV === "test" ? re : te), Me.observe($e)), () => {
      De.clear(), cancelAnimationFrame(ce), Ae.removeEventListener("resize", De), Me && Me.disconnect();
    };
  }, [$]), Cf(() => {
    ye();
  }), W.useEffect(() => {
    B.current = 0;
  }, [L]);
  const Y = (Q) => {
    B.current = 0, M || ye(), C && C(Q);
  };
  return /* @__PURE__ */ Re.jsxs(W.Fragment, {
    children: [/* @__PURE__ */ Re.jsx("textarea", q({
      value: L,
      onChange: Y,
      ref: F,
      rows: R,
      style: q({
        height: J.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: J.overflow ? "hidden" : void 0
      }, S)
    }, _)), /* @__PURE__ */ Re.jsx("textarea", {
      "aria-hidden": !0,
      className: h.className,
      readOnly: !0,
      ref: I,
      tabIndex: -1,
      style: q({}, JN.shadow, S, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (e1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: c.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * @ignore
   */
  onChange: c.func,
  /**
   * @ignore
   */
  placeholder: c.string,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * @ignore
   */
  value: c.oneOfType([c.arrayOf(c.string), c.number, c.string])
});
function Rf({
  props: p,
  states: h,
  muiFormControl: y
}) {
  return h.reduce((C, x) => (C[x] = p[x], y && typeof p[x] > "u" && (C[x] = y[x]), C), {});
}
const t1 = /* @__PURE__ */ W.createContext(void 0);
process.env.NODE_ENV !== "production" && (t1.displayName = "FormControlContext");
const vE = t1;
function wf() {
  return W.useContext(vE);
}
function n1(p) {
  return /* @__PURE__ */ Re.jsx(Kx, q({}, p, {
    defaultTheme: Ax,
    themeId: Fx
  }));
}
process.env.NODE_ENV !== "production" && (n1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: c.oneOfType([c.array, c.func, c.number, c.object, c.string, c.bool])
});
function Sx(p) {
  return p != null && !(Array.isArray(p) && p.length === 0);
}
function py(p, h = !1) {
  return p && (Sx(p.value) && p.value !== "" || h && Sx(p.defaultValue) && p.defaultValue !== "");
}
function eM(p) {
  return p.startAdornment;
}
function tM(p) {
  return pr("MuiInputBase", p);
}
const nM = vr("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), xf = nM, rM = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], yy = (p, h) => {
  const {
    ownerState: y
  } = p;
  return [h.root, y.formControl && h.formControl, y.startAdornment && h.adornedStart, y.endAdornment && h.adornedEnd, y.error && h.error, y.size === "small" && h.sizeSmall, y.multiline && h.multiline, y.color && h[`color${Dr(y.color)}`], y.fullWidth && h.fullWidth, y.hiddenLabel && h.hiddenLabel];
}, gy = (p, h) => {
  const {
    ownerState: y
  } = p;
  return [h.input, y.size === "small" && h.inputSizeSmall, y.multiline && h.inputMultiline, y.type === "search" && h.inputTypeSearch, y.startAdornment && h.inputAdornedStart, y.endAdornment && h.inputAdornedEnd, y.hiddenLabel && h.inputHiddenLabel];
}, aM = (p) => {
  const {
    classes: h,
    color: y,
    disabled: C,
    error: x,
    endAdornment: R,
    focused: S,
    formControl: L,
    fullWidth: _,
    hiddenLabel: M,
    multiline: K,
    readOnly: F,
    size: I,
    startAdornment: B,
    type: J
  } = p, ie = {
    root: ["root", `color${Dr(y)}`, C && "disabled", x && "error", _ && "fullWidth", S && "focused", L && "formControl", I && I !== "medium" && `size${Dr(I)}`, K && "multiline", B && "adornedStart", R && "adornedEnd", M && "hiddenLabel", F && "readOnly"],
    input: ["input", C && "disabled", J === "search" && "inputTypeSearch", K && "inputMultiline", I === "small" && "inputSizeSmall", M && "inputHiddenLabel", B && "inputAdornedStart", R && "inputAdornedEnd", F && "readOnly"]
  };
  return hr(ie, tM, h);
}, Sy = Tt("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: yy
})(({
  theme: p,
  ownerState: h
}) => q({}, p.typography.body1, {
  color: (p.vars || p).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${xf.disabled}`]: {
    color: (p.vars || p).palette.text.disabled,
    cursor: "default"
  }
}, h.multiline && q({
  padding: "4px 0 5px"
}, h.size === "small" && {
  paddingTop: 1
}), h.fullWidth && {
  width: "100%"
})), Ey = Tt("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: gy
})(({
  theme: p,
  ownerState: h
}) => {
  const y = p.palette.mode === "light", C = q({
    color: "currentColor"
  }, p.vars ? {
    opacity: p.vars.opacity.inputPlaceholder
  } : {
    opacity: y ? 0.42 : 0.5
  }, {
    transition: p.transitions.create("opacity", {
      duration: p.transitions.duration.shorter
    })
  }), x = {
    opacity: "0 !important"
  }, R = p.vars ? {
    opacity: p.vars.opacity.inputPlaceholder
  } : {
    opacity: y ? 0.42 : 0.5
  };
  return q({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": C,
    "&::-moz-placeholder": C,
    // Firefox 19+
    "&:-ms-input-placeholder": C,
    // IE11
    "&::-ms-input-placeholder": C,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${xf.formControl} &`]: {
      "&::-webkit-input-placeholder": x,
      "&::-moz-placeholder": x,
      // Firefox 19+
      "&:-ms-input-placeholder": x,
      // IE11
      "&::-ms-input-placeholder": x,
      // Edge
      "&:focus::-webkit-input-placeholder": R,
      "&:focus::-moz-placeholder": R,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": R,
      // IE11
      "&:focus::-ms-input-placeholder": R
      // Edge
    },
    [`&.${xf.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (p.vars || p).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, h.size === "small" && {
    paddingTop: 1
  }, h.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, h.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), iM = /* @__PURE__ */ Re.jsx(n1, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), r1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C;
  const x = kr({
    props: h,
    name: "MuiInputBase"
  }), {
    "aria-describedby": R,
    autoComplete: S,
    autoFocus: L,
    className: _,
    components: M = {},
    componentsProps: K = {},
    defaultValue: F,
    disabled: I,
    disableInjectingGlobalStyles: B,
    endAdornment: J,
    fullWidth: ie = !1,
    id: $,
    inputComponent: he = "input",
    inputProps: ye = {},
    inputRef: Y,
    maxRows: Q,
    minRows: te,
    multiline: ce = !1,
    name: re,
    onBlur: De,
    onChange: $e,
    onClick: Ae,
    onFocus: Me,
    onKeyDown: Ve,
    onKeyUp: de,
    placeholder: me,
    readOnly: Te,
    renderSuffix: Ce,
    rows: Fe,
    slotProps: G = {},
    slots: pe = {},
    startAdornment: fe,
    type: it = "text",
    value: Ze
  } = x, ht = $t(x, rM), lt = ye.value != null ? ye.value : Ze, {
    current: kt
  } = W.useRef(lt != null), vt = W.useRef(), rn = W.useCallback((ft) => {
    process.env.NODE_ENV !== "production" && ft && ft.nodeName !== "INPUT" && !ft.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), Vt = ti(vt, Y, ye.ref, rn), [Jt, gn] = W.useState(!1), nt = wf();
  process.env.NODE_ENV !== "production" && W.useEffect(() => {
    if (nt)
      return nt.registerEffect();
  }, [nt]);
  const xt = Rf({
    props: x,
    muiFormControl: nt,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  xt.focused = nt ? nt.focused : Jt, W.useEffect(() => {
    !nt && I && Jt && (gn(!1), De && De());
  }, [nt, I, Jt, De]);
  const Qe = nt && nt.onFilled, le = nt && nt.onEmpty, ct = W.useCallback((ft) => {
    py(ft) ? Qe && Qe() : le && le();
  }, [Qe, le]);
  Cf(() => {
    kt && ct({
      value: lt
    });
  }, [lt, ct, kt]);
  const Lt = (ft) => {
    if (xt.disabled) {
      ft.stopPropagation();
      return;
    }
    Me && Me(ft), ye.onFocus && ye.onFocus(ft), nt && nt.onFocus ? nt.onFocus(ft) : gn(!0);
  }, It = (ft) => {
    De && De(ft), ye.onBlur && ye.onBlur(ft), nt && nt.onBlur ? nt.onBlur(ft) : gn(!1);
  }, Sn = (ft, ...Ra) => {
    if (!kt) {
      const ar = ft.target || vt.current;
      if (ar == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : zx(1));
      ct({
        value: ar.value
      });
    }
    ye.onChange && ye.onChange(ft, ...Ra), $e && $e(ft, ...Ra);
  };
  W.useEffect(() => {
    ct(vt.current);
  }, []);
  const nr = (ft) => {
    vt.current && ft.currentTarget === ft.target && vt.current.focus(), Ae && Ae(ft);
  };
  let rr = he, zt = ye;
  ce && rr === "input" && (Fe ? (process.env.NODE_ENV !== "production" && (te || Q) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), zt = q({
    type: void 0,
    minRows: Fe,
    maxRows: Fe
  }, zt)) : zt = q({
    type: void 0,
    maxRows: Q,
    minRows: te
  }, zt), rr = e1);
  const Un = (ft) => {
    ct(ft.animationName === "mui-auto-fill-cancel" ? vt.current : {
      value: "x"
    });
  };
  W.useEffect(() => {
    nt && nt.setAdornedStart(!!fe);
  }, [nt, fe]);
  const en = q({}, x, {
    color: xt.color || "primary",
    disabled: xt.disabled,
    endAdornment: J,
    error: xt.error,
    focused: xt.focused,
    formControl: nt,
    fullWidth: ie,
    hiddenLabel: xt.hiddenLabel,
    multiline: ce,
    size: xt.size,
    startAdornment: fe,
    type: it
  }), Ut = aM(en), Bn = pe.root || M.Root || Sy, Nr = G.root || K.root || {}, En = pe.input || M.Input || Ey;
  return zt = q({}, zt, (C = G.input) != null ? C : K.input), /* @__PURE__ */ Re.jsxs(W.Fragment, {
    children: [!B && iM, /* @__PURE__ */ Re.jsxs(Bn, q({}, Nr, !cy(Bn) && {
      ownerState: q({}, en, Nr.ownerState)
    }, {
      ref: y,
      onClick: nr
    }, ht, {
      className: zn(Ut.root, Nr.className, _, Te && "MuiInputBase-readOnly"),
      children: [fe, /* @__PURE__ */ Re.jsx(vE.Provider, {
        value: null,
        children: /* @__PURE__ */ Re.jsx(En, q({
          ownerState: en,
          "aria-invalid": xt.error,
          "aria-describedby": R,
          autoComplete: S,
          autoFocus: L,
          defaultValue: F,
          disabled: xt.disabled,
          id: $,
          onAnimationStart: Un,
          name: re,
          placeholder: me,
          readOnly: Te,
          required: xt.required,
          rows: Fe,
          value: lt,
          onKeyDown: Ve,
          onKeyUp: de,
          type: it
        }, zt, !cy(En) && {
          as: rr,
          ownerState: q({}, en, zt.ownerState)
        }, {
          ref: Vt,
          className: zn(Ut.input, zt.className, Te && "MuiInputBase-readOnly"),
          onBlur: It,
          onChange: Sn,
          onFocus: Lt
        }))
      }), J, Ce ? Ce(q({}, xt, {
        startAdornment: fe
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (r1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": c.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Px,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ou,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: c.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * @ignore
   */
  onClick: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: c.func,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * @ignore
   */
  onKeyUp: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * @ignore
   */
  renderSuffix: c.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The size of the component.
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
const hE = r1;
function oM(p) {
  return pr("MuiInput", p);
}
const lM = q({}, xf, vr("MuiInput", ["root", "underline", "input"])), qp = lM, uM = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], sM = (p) => {
  const {
    classes: h,
    disableUnderline: y
  } = p, x = hr({
    root: ["root", !y && "underline"],
    input: ["input"]
  }, oM, h);
  return q({}, h, x);
}, cM = Tt(Sy, {
  shouldForwardProp: (p) => Cs(p) || p === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [...yy(p, h), !y.disableUnderline && h.underline];
  }
})(({
  theme: p,
  ownerState: h
}) => {
  let C = p.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return p.vars && (C = `rgba(${p.vars.palette.common.onBackgroundChannel} / ${p.vars.opacity.inputUnderline})`), q({
    position: "relative"
  }, h.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !h.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(p.vars || p).palette[h.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: p.transitions.create("transform", {
        duration: p.transitions.duration.shorter,
        easing: p.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${qp.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${qp.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (p.vars || p).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${C}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: p.transitions.create("border-bottom-color", {
        duration: p.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${qp.disabled}, .${qp.error}):before`]: {
      borderBottom: `2px solid ${(p.vars || p).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${C}`
      }
    },
    [`&.${qp.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), fM = Tt(Ey, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: gy
})({}), mE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R, S;
  const L = kr({
    props: h,
    name: "MuiInput"
  }), {
    disableUnderline: _,
    components: M = {},
    componentsProps: K,
    fullWidth: F = !1,
    inputComponent: I = "input",
    multiline: B = !1,
    slotProps: J,
    slots: ie = {},
    type: $ = "text"
  } = L, he = $t(L, uM), ye = sM(L), Q = {
    root: {
      ownerState: {
        disableUnderline: _
      }
    }
  }, te = J ?? K ? dE(J ?? K, Q) : Q, ce = (C = (x = ie.root) != null ? x : M.Root) != null ? C : cM, re = (R = (S = ie.input) != null ? S : M.Input) != null ? R : fM;
  return /* @__PURE__ */ Re.jsx(hE, q({
    slots: {
      root: ce,
      input: re
    },
    slotProps: te,
    fullWidth: F,
    inputComponent: I,
    multiline: B,
    ref: y,
    type: $
  }, he, {
    classes: ye
  }));
});
process.env.NODE_ENV !== "production" && (mE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ou,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
mE.muiName = "Input";
const a1 = mE;
function dM(p) {
  return pr("MuiFilledInput", p);
}
const pM = q({}, xf, vr("MuiFilledInput", ["root", "underline", "input"])), gs = pM, vM = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], hM = (p) => {
  const {
    classes: h,
    disableUnderline: y
  } = p, x = hr({
    root: ["root", !y && "underline"],
    input: ["input"]
  }, dM, h);
  return q({}, h, x);
}, mM = Tt(Sy, {
  shouldForwardProp: (p) => Cs(p) || p === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [...yy(p, h), !y.disableUnderline && h.underline];
  }
})(({
  theme: p,
  ownerState: h
}) => {
  var y;
  const C = p.palette.mode === "light", x = C ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", R = C ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", S = C ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", L = C ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return q({
    position: "relative",
    backgroundColor: p.vars ? p.vars.palette.FilledInput.bg : R,
    borderTopLeftRadius: (p.vars || p).shape.borderRadius,
    borderTopRightRadius: (p.vars || p).shape.borderRadius,
    transition: p.transitions.create("background-color", {
      duration: p.transitions.duration.shorter,
      easing: p.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: p.vars ? p.vars.palette.FilledInput.hoverBg : S,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: p.vars ? p.vars.palette.FilledInput.bg : R
      }
    },
    [`&.${gs.focused}`]: {
      backgroundColor: p.vars ? p.vars.palette.FilledInput.bg : R
    },
    [`&.${gs.disabled}`]: {
      backgroundColor: p.vars ? p.vars.palette.FilledInput.disabledBg : L
    }
  }, !h.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(y = (p.vars || p).palette[h.color || "primary"]) == null ? void 0 : y.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: p.transitions.create("transform", {
        duration: p.transitions.duration.shorter,
        easing: p.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${gs.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${gs.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (p.vars || p).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${p.vars ? `rgba(${p.vars.palette.common.onBackgroundChannel} / ${p.vars.opacity.inputUnderline})` : x}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: p.transitions.create("border-bottom-color", {
        duration: p.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${gs.disabled}, .${gs.error}):before`]: {
      borderBottom: `1px solid ${(p.vars || p).palette.text.primary}`
    },
    [`&.${gs.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, h.startAdornment && {
    paddingLeft: 12
  }, h.endAdornment && {
    paddingRight: 12
  }, h.multiline && q({
    padding: "25px 12px 8px"
  }, h.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, h.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), yM = Tt(Ey, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: gy
})(({
  theme: p,
  ownerState: h
}) => q({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !p.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: p.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: p.palette.mode === "light" ? null : "#fff",
    caretColor: p.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, p.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [p.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, h.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, h.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, h.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, h.startAdornment && {
  paddingLeft: 0
}, h.endAdornment && {
  paddingRight: 0
}, h.hiddenLabel && h.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), yE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R, S;
  const L = kr({
    props: h,
    name: "MuiFilledInput"
  }), {
    components: _ = {},
    componentsProps: M,
    fullWidth: K = !1,
    // declare here to prevent spreading to DOM
    inputComponent: F = "input",
    multiline: I = !1,
    slotProps: B,
    slots: J = {},
    type: ie = "text"
  } = L, $ = $t(L, vM), he = q({}, L, {
    fullWidth: K,
    inputComponent: F,
    multiline: I,
    type: ie
  }), ye = hM(L), Y = {
    root: {
      ownerState: he
    },
    input: {
      ownerState: he
    }
  }, Q = B ?? M ? dE(B ?? M, Y) : Y, te = (C = (x = J.root) != null ? x : _.Root) != null ? C : mM, ce = (R = (S = J.input) != null ? S : _.Input) != null ? R : yM;
  return /* @__PURE__ */ Re.jsx(hE, q({
    slots: {
      root: te,
      input: ce
    },
    componentsProps: Q,
    fullWidth: K,
    inputComponent: F,
    multiline: I,
    ref: y,
    type: ie
  }, $, {
    classes: ye
  }));
});
process.env.NODE_ENV !== "production" && (yE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ou,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
yE.muiName = "Input";
const i1 = yE;
var Ex;
const gM = ["children", "classes", "className", "label", "notched"], SM = Tt("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), EM = Tt("legend")(({
  ownerState: p,
  theme: h
}) => q({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !p.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: h.transitions.create("width", {
    duration: 150,
    easing: h.transitions.easing.easeOut
  })
}, p.withLabel && q({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: h.transitions.create("max-width", {
    duration: 50,
    easing: h.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, p.notched && {
  maxWidth: "100%",
  transition: h.transitions.create("max-width", {
    duration: 100,
    easing: h.transitions.easing.easeOut,
    delay: 50
  })
})));
function o1(p) {
  const {
    className: h,
    label: y,
    notched: C
  } = p, x = $t(p, gM), R = y != null && y !== "", S = q({}, p, {
    notched: C,
    withLabel: R
  });
  return /* @__PURE__ */ Re.jsx(SM, q({
    "aria-hidden": !0,
    className: h,
    ownerState: S
  }, x, {
    children: /* @__PURE__ */ Re.jsx(EM, {
      ownerState: S,
      children: R ? /* @__PURE__ */ Re.jsx("span", {
        children: y
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ex || (Ex = /* @__PURE__ */ Re.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (o1.propTypes = {
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The label.
   */
  label: c.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: c.bool.isRequired,
  /**
   * @ignore
   */
  style: c.object
});
function bM(p) {
  return pr("MuiOutlinedInput", p);
}
const CM = q({}, xf, vr("MuiOutlinedInput", ["root", "notchedOutline", "input"])), iu = CM, TM = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], xM = (p) => {
  const {
    classes: h
  } = p, C = hr({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, bM, h);
  return q({}, h, C);
}, RM = Tt(Sy, {
  shouldForwardProp: (p) => Cs(p) || p === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: yy
})(({
  theme: p,
  ownerState: h
}) => {
  const y = p.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return q({
    position: "relative",
    borderRadius: (p.vars || p).shape.borderRadius,
    [`&:hover .${iu.notchedOutline}`]: {
      borderColor: (p.vars || p).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${iu.notchedOutline}`]: {
        borderColor: p.vars ? `rgba(${p.vars.palette.common.onBackgroundChannel} / 0.23)` : y
      }
    },
    [`&.${iu.focused} .${iu.notchedOutline}`]: {
      borderColor: (p.vars || p).palette[h.color].main,
      borderWidth: 2
    },
    [`&.${iu.error} .${iu.notchedOutline}`]: {
      borderColor: (p.vars || p).palette.error.main
    },
    [`&.${iu.disabled} .${iu.notchedOutline}`]: {
      borderColor: (p.vars || p).palette.action.disabled
    }
  }, h.startAdornment && {
    paddingLeft: 14
  }, h.endAdornment && {
    paddingRight: 14
  }, h.multiline && q({
    padding: "16.5px 14px"
  }, h.size === "small" && {
    padding: "8.5px 14px"
  }));
}), wM = Tt(o1, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (p, h) => h.notchedOutline
})(({
  theme: p
}) => {
  const h = p.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: p.vars ? `rgba(${p.vars.palette.common.onBackgroundChannel} / 0.23)` : h
  };
}), OM = Tt(Ey, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: gy
})(({
  theme: p,
  ownerState: h
}) => q({
  padding: "16.5px 14px"
}, !p.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: p.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: p.palette.mode === "light" ? null : "#fff",
    caretColor: p.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, p.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [p.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, h.size === "small" && {
  padding: "8.5px 14px"
}, h.multiline && {
  padding: 0
}, h.startAdornment && {
  paddingLeft: 0
}, h.endAdornment && {
  paddingRight: 0
})), gE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R, S, L;
  const _ = kr({
    props: h,
    name: "MuiOutlinedInput"
  }), {
    components: M = {},
    fullWidth: K = !1,
    inputComponent: F = "input",
    label: I,
    multiline: B = !1,
    notched: J,
    slots: ie = {},
    type: $ = "text"
  } = _, he = $t(_, TM), ye = xM(_), Y = wf(), Q = Rf({
    props: _,
    muiFormControl: Y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), te = q({}, _, {
    color: Q.color || "primary",
    disabled: Q.disabled,
    error: Q.error,
    focused: Q.focused,
    formControl: Y,
    fullWidth: K,
    hiddenLabel: Q.hiddenLabel,
    multiline: B,
    size: Q.size,
    type: $
  }), ce = (C = (x = ie.root) != null ? x : M.Root) != null ? C : RM, re = (R = (S = ie.input) != null ? S : M.Input) != null ? R : OM;
  return /* @__PURE__ */ Re.jsx(hE, q({
    slots: {
      root: ce,
      input: re
    },
    renderSuffix: (De) => /* @__PURE__ */ Re.jsx(wM, {
      ownerState: te,
      className: ye.notchedOutline,
      label: I != null && I !== "" && Q.required ? L || (L = /* @__PURE__ */ Re.jsxs(W.Fragment, {
        children: [I, " ", "*"]
      })) : I,
      notched: typeof J < "u" ? J : !!(De.startAdornment || De.filled || De.focused)
    }),
    fullWidth: K,
    inputComponent: F,
    multiline: B,
    ref: y,
    type: $
  }, he, {
    classes: q({}, ye, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (gE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ou,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: c.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: c.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
gE.muiName = "Input";
const l1 = gE;
function DM(p) {
  return pr("MuiFormLabel", p);
}
const kM = vr("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Zp = kM, NM = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], MM = (p) => {
  const {
    classes: h,
    color: y,
    focused: C,
    disabled: x,
    error: R,
    filled: S,
    required: L
  } = p, _ = {
    root: ["root", `color${Dr(y)}`, x && "disabled", R && "error", S && "filled", C && "focused", L && "required"],
    asterisk: ["asterisk", R && "error"]
  };
  return hr(_, DM, h);
}, _M = Tt("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: p
  }, h) => q({}, h.root, p.color === "secondary" && h.colorSecondary, p.filled && h.filled)
})(({
  theme: p,
  ownerState: h
}) => q({
  color: (p.vars || p).palette.text.secondary
}, p.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Zp.focused}`]: {
    color: (p.vars || p).palette[h.color].main
  },
  [`&.${Zp.disabled}`]: {
    color: (p.vars || p).palette.text.disabled
  },
  [`&.${Zp.error}`]: {
    color: (p.vars || p).palette.error.main
  }
})), LM = Tt("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (p, h) => h.asterisk
})(({
  theme: p
}) => ({
  [`&.${Zp.error}`]: {
    color: (p.vars || p).palette.error.main
  }
})), u1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiFormLabel"
  }), {
    children: x,
    className: R,
    component: S = "label"
  } = C, L = $t(C, NM), _ = wf(), M = Rf({
    props: C,
    muiFormControl: _,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), K = q({}, C, {
    color: M.color || "primary",
    component: S,
    disabled: M.disabled,
    error: M.error,
    filled: M.filled,
    focused: M.focused,
    required: M.required
  }), F = MM(K);
  return /* @__PURE__ */ Re.jsxs(_M, q({
    as: S,
    ownerState: K,
    className: zn(F.root, R),
    ref: y
  }, L, {
    children: [x, M.required && /* @__PURE__ */ Re.jsxs(LM, {
      ownerState: K,
      "aria-hidden": !0,
      className: F.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (u1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: c.oneOfType([c.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: c.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: c.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: c.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const zM = u1;
function UM(p) {
  return pr("MuiInputLabel", p);
}
vr("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const AM = ["disableAnimation", "margin", "shrink", "variant", "className"], FM = (p) => {
  const {
    classes: h,
    formControl: y,
    size: C,
    shrink: x,
    disableAnimation: R,
    variant: S,
    required: L
  } = p, _ = {
    root: ["root", y && "formControl", !R && "animated", x && "shrink", C && C !== "normal" && `size${Dr(C)}`, S],
    asterisk: [L && "asterisk"]
  }, M = hr(_, UM, h);
  return q({}, h, M);
}, PM = Tt(zM, {
  shouldForwardProp: (p) => Cs(p) || p === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [{
      [`& .${Zp.asterisk}`]: h.asterisk
    }, h.root, y.formControl && h.formControl, y.size === "small" && h.sizeSmall, y.shrink && h.shrink, !y.disableAnimation && h.animated, y.focused && h.focused, h[y.variant]];
  }
})(({
  theme: p,
  ownerState: h
}) => q({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, h.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, h.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, h.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !h.disableAnimation && {
  transition: p.transitions.create(["color", "transform", "max-width"], {
    duration: p.transitions.duration.shorter,
    easing: p.transitions.easing.easeOut
  })
}, h.variant === "filled" && q({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, h.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, h.shrink && q({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, h.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), h.variant === "outlined" && q({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, h.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, h.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), s1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    name: "MuiInputLabel",
    props: h
  }), {
    disableAnimation: x = !1,
    shrink: R,
    className: S
  } = C, L = $t(C, AM), _ = wf();
  let M = R;
  typeof M > "u" && _ && (M = _.filled || _.focused || _.adornedStart);
  const K = Rf({
    props: C,
    muiFormControl: _,
    states: ["size", "variant", "required", "focused"]
  }), F = q({}, C, {
    disableAnimation: x,
    formControl: _,
    shrink: M,
    size: K.size,
    variant: K.variant,
    required: K.required,
    focused: K.focused
  }), I = FM(F);
  return /* @__PURE__ */ Re.jsx(PM, q({
    "data-shrink": M,
    ownerState: F,
    ref: y,
    className: zn(I.root, S)
  }, L, {
    classes: I
  }));
});
process.env.NODE_ENV !== "production" && (s1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: c.oneOfType([c.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), c.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: c.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: c.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: c.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: c.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: c.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: c.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: c.oneOfType([c.oneOf(["normal", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const jM = s1;
function HM(p) {
  return pr("MuiFormControl", p);
}
vr("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const $M = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], VM = (p) => {
  const {
    classes: h,
    margin: y,
    fullWidth: C
  } = p, x = {
    root: ["root", y !== "none" && `margin${Dr(y)}`, C && "fullWidth"]
  };
  return hr(x, HM, h);
}, IM = Tt("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: p
  }, h) => q({}, h.root, h[`margin${Dr(p.margin)}`], p.fullWidth && h.fullWidth)
})(({
  ownerState: p
}) => q({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, p.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, p.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, p.fullWidth && {
  width: "100%"
})), c1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiFormControl"
  }), {
    children: x,
    className: R,
    color: S = "primary",
    component: L = "div",
    disabled: _ = !1,
    error: M = !1,
    focused: K,
    fullWidth: F = !1,
    hiddenLabel: I = !1,
    margin: B = "none",
    required: J = !1,
    size: ie = "medium",
    variant: $ = "outlined"
  } = C, he = $t(C, $M), ye = q({}, C, {
    color: S,
    component: L,
    disabled: _,
    error: M,
    fullWidth: F,
    hiddenLabel: I,
    margin: B,
    required: J,
    size: ie,
    variant: $
  }), Y = VM(ye), [Q, te] = W.useState(() => {
    let de = !1;
    return x && W.Children.forEach(x, (me) => {
      if (!tE(me, ["Input", "Select"]))
        return;
      const Te = tE(me, ["Select"]) ? me.props.input : me;
      Te && eM(Te.props) && (de = !0);
    }), de;
  }), [ce, re] = W.useState(() => {
    let de = !1;
    return x && W.Children.forEach(x, (me) => {
      tE(me, ["Input", "Select"]) && (py(me.props, !0) || py(me.props.inputProps, !0)) && (de = !0);
    }), de;
  }), [De, $e] = W.useState(!1);
  _ && De && $e(!1);
  const Ae = K !== void 0 && !_ ? K : De;
  let Me;
  if (process.env.NODE_ENV !== "production") {
    const de = W.useRef(!1);
    Me = () => (de.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), de.current = !0, () => {
      de.current = !1;
    });
  }
  const Ve = W.useMemo(() => ({
    adornedStart: Q,
    setAdornedStart: te,
    color: S,
    disabled: _,
    error: M,
    filled: ce,
    focused: Ae,
    fullWidth: F,
    hiddenLabel: I,
    size: ie,
    onBlur: () => {
      $e(!1);
    },
    onEmpty: () => {
      re(!1);
    },
    onFilled: () => {
      re(!0);
    },
    onFocus: () => {
      $e(!0);
    },
    registerEffect: Me,
    required: J,
    variant: $
  }), [Q, S, _, M, ce, Ae, F, I, Me, J, ie, $]);
  return /* @__PURE__ */ Re.jsx(vE.Provider, {
    value: Ve,
    children: /* @__PURE__ */ Re.jsx(IM, q({
      as: L,
      ownerState: ye,
      className: zn(Y.root, R),
      ref: y
    }, he, {
      children: x
    }))
  });
});
process.env.NODE_ENV !== "production" && (c1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: c.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: c.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: c.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: c.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: c.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const BM = c1;
function WM(p) {
  return pr("MuiFormHelperText", p);
}
const YM = vr("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), bx = YM;
var Cx;
const qM = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], QM = (p) => {
  const {
    classes: h,
    contained: y,
    size: C,
    disabled: x,
    error: R,
    filled: S,
    focused: L,
    required: _
  } = p, M = {
    root: ["root", x && "disabled", R && "error", C && `size${Dr(C)}`, y && "contained", L && "focused", S && "filled", _ && "required"]
  };
  return hr(M, WM, h);
}, GM = Tt("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, y.size && h[`size${Dr(y.size)}`], y.contained && h.contained, y.filled && h.filled];
  }
})(({
  theme: p,
  ownerState: h
}) => q({
  color: (p.vars || p).palette.text.secondary
}, p.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${bx.disabled}`]: {
    color: (p.vars || p).palette.text.disabled
  },
  [`&.${bx.error}`]: {
    color: (p.vars || p).palette.error.main
  }
}, h.size === "small" && {
  marginTop: 4
}, h.contained && {
  marginLeft: 14,
  marginRight: 14
})), f1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiFormHelperText"
  }), {
    children: x,
    className: R,
    component: S = "p"
  } = C, L = $t(C, qM), _ = wf(), M = Rf({
    props: C,
    muiFormControl: _,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), K = q({}, C, {
    component: S,
    contained: M.variant === "filled" || M.variant === "outlined",
    variant: M.variant,
    size: M.size,
    disabled: M.disabled,
    error: M.error,
    filled: M.filled,
    focused: M.focused,
    required: M.required
  }), F = QM(K);
  return /* @__PURE__ */ Re.jsx(GM, q({
    as: S,
    ownerState: K,
    className: zn(F.root, R),
    ref: y
  }, L, {
    children: x === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Cx || (Cx = /* @__PURE__ */ Re.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : x
  }));
});
process.env.NODE_ENV !== "production" && (f1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: c.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: c.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: c.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: c.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: c.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   */
  variant: c.oneOfType([c.oneOf(["filled", "outlined", "standard"]), c.string])
});
const KM = f1;
var sE = { exports: {} }, jt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tx;
function XM() {
  if (Tx)
    return jt;
  Tx = 1;
  var p = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), S = Symbol.for("react.context"), L = Symbol.for("react.server_context"), _ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), J;
  J = Symbol.for("react.module.reference");
  function ie($) {
    if (typeof $ == "object" && $ !== null) {
      var he = $.$$typeof;
      switch (he) {
        case p:
          switch ($ = $.type, $) {
            case y:
            case x:
            case C:
            case M:
            case K:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case L:
                case S:
                case _:
                case I:
                case F:
                case R:
                  return $;
                default:
                  return he;
              }
          }
        case h:
          return he;
      }
    }
  }
  return jt.ContextConsumer = S, jt.ContextProvider = R, jt.Element = p, jt.ForwardRef = _, jt.Fragment = y, jt.Lazy = I, jt.Memo = F, jt.Portal = h, jt.Profiler = x, jt.StrictMode = C, jt.Suspense = M, jt.SuspenseList = K, jt.isAsyncMode = function() {
    return !1;
  }, jt.isConcurrentMode = function() {
    return !1;
  }, jt.isContextConsumer = function($) {
    return ie($) === S;
  }, jt.isContextProvider = function($) {
    return ie($) === R;
  }, jt.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === p;
  }, jt.isForwardRef = function($) {
    return ie($) === _;
  }, jt.isFragment = function($) {
    return ie($) === y;
  }, jt.isLazy = function($) {
    return ie($) === I;
  }, jt.isMemo = function($) {
    return ie($) === F;
  }, jt.isPortal = function($) {
    return ie($) === h;
  }, jt.isProfiler = function($) {
    return ie($) === x;
  }, jt.isStrictMode = function($) {
    return ie($) === C;
  }, jt.isSuspense = function($) {
    return ie($) === M;
  }, jt.isSuspenseList = function($) {
    return ie($) === K;
  }, jt.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === y || $ === x || $ === C || $ === M || $ === K || $ === B || typeof $ == "object" && $ !== null && ($.$$typeof === I || $.$$typeof === F || $.$$typeof === R || $.$$typeof === S || $.$$typeof === _ || $.$$typeof === J || $.getModuleId !== void 0);
  }, jt.typeOf = ie, jt;
}
var Ht = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function ZM() {
  return xx || (xx = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), S = Symbol.for("react.context"), L = Symbol.for("react.server_context"), _ = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), J = !1, ie = !1, $ = !1, he = !1, ye = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Q(le) {
      return !!(typeof le == "string" || typeof le == "function" || le === y || le === x || ye || le === C || le === M || le === K || he || le === B || J || ie || $ || typeof le == "object" && le !== null && (le.$$typeof === I || le.$$typeof === F || le.$$typeof === R || le.$$typeof === S || le.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      le.$$typeof === Y || le.getModuleId !== void 0));
    }
    function te(le) {
      if (typeof le == "object" && le !== null) {
        var ct = le.$$typeof;
        switch (ct) {
          case p:
            var Lt = le.type;
            switch (Lt) {
              case y:
              case x:
              case C:
              case M:
              case K:
                return Lt;
              default:
                var It = Lt && Lt.$$typeof;
                switch (It) {
                  case L:
                  case S:
                  case _:
                  case I:
                  case F:
                  case R:
                    return It;
                  default:
                    return ct;
                }
            }
          case h:
            return ct;
        }
      }
    }
    var ce = S, re = R, De = p, $e = _, Ae = y, Me = I, Ve = F, de = h, me = x, Te = C, Ce = M, Fe = K, G = !1, pe = !1;
    function fe(le) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function it(le) {
      return pe || (pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ze(le) {
      return te(le) === S;
    }
    function ht(le) {
      return te(le) === R;
    }
    function lt(le) {
      return typeof le == "object" && le !== null && le.$$typeof === p;
    }
    function kt(le) {
      return te(le) === _;
    }
    function vt(le) {
      return te(le) === y;
    }
    function rn(le) {
      return te(le) === I;
    }
    function Vt(le) {
      return te(le) === F;
    }
    function Jt(le) {
      return te(le) === h;
    }
    function gn(le) {
      return te(le) === x;
    }
    function nt(le) {
      return te(le) === C;
    }
    function xt(le) {
      return te(le) === M;
    }
    function Qe(le) {
      return te(le) === K;
    }
    Ht.ContextConsumer = ce, Ht.ContextProvider = re, Ht.Element = De, Ht.ForwardRef = $e, Ht.Fragment = Ae, Ht.Lazy = Me, Ht.Memo = Ve, Ht.Portal = de, Ht.Profiler = me, Ht.StrictMode = Te, Ht.Suspense = Ce, Ht.SuspenseList = Fe, Ht.isAsyncMode = fe, Ht.isConcurrentMode = it, Ht.isContextConsumer = Ze, Ht.isContextProvider = ht, Ht.isElement = lt, Ht.isForwardRef = kt, Ht.isFragment = vt, Ht.isLazy = rn, Ht.isMemo = Vt, Ht.isPortal = Jt, Ht.isProfiler = gn, Ht.isStrictMode = nt, Ht.isSuspense = xt, Ht.isSuspenseList = Qe, Ht.isValidElementType = Q, Ht.typeOf = te;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? sE.exports = XM() : sE.exports = ZM();
var SE = sE.exports;
const d1 = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (d1.displayName = "ListContext");
const JM = d1;
function e_(p) {
  return pr("MuiList", p);
}
vr("MuiList", ["root", "padding", "dense", "subheader"]);
const t_ = ["children", "className", "component", "dense", "disablePadding", "subheader"], n_ = (p) => {
  const {
    classes: h,
    disablePadding: y,
    dense: C,
    subheader: x
  } = p;
  return hr({
    root: ["root", !y && "padding", C && "dense", x && "subheader"]
  }, e_, h);
}, r_ = Tt("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, !y.disablePadding && h.padding, y.dense && h.dense, y.subheader && h.subheader];
  }
})(({
  ownerState: p
}) => q({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !p.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, p.subheader && {
  paddingTop: 0
})), p1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiList"
  }), {
    children: x,
    className: R,
    component: S = "ul",
    dense: L = !1,
    disablePadding: _ = !1,
    subheader: M
  } = C, K = $t(C, t_), F = W.useMemo(() => ({
    dense: L
  }), [L]), I = q({}, C, {
    component: S,
    dense: L,
    disablePadding: _
  }), B = n_(I);
  return /* @__PURE__ */ Re.jsx(JM.Provider, {
    value: F,
    children: /* @__PURE__ */ Re.jsxs(r_, q({
      as: S,
      className: zn(B.root, R),
      ref: y,
      ownerState: I
    }, K, {
      children: [M, x]
    }))
  });
});
process.env.NODE_ENV !== "production" && (p1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: c.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: c.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const a_ = p1, i_ = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function iE(p, h, y) {
  return p === h ? p.firstChild : h && h.nextElementSibling ? h.nextElementSibling : y ? null : p.firstChild;
}
function Rx(p, h, y) {
  return p === h ? y ? p.firstChild : p.lastChild : h && h.previousElementSibling ? h.previousElementSibling : y ? null : p.lastChild;
}
function v1(p, h) {
  if (h === void 0)
    return !0;
  let y = p.innerText;
  return y === void 0 && (y = p.textContent), y = y.trim().toLowerCase(), y.length === 0 ? !1 : h.repeating ? y[0] === h.keys[0] : y.indexOf(h.keys.join("")) === 0;
}
function Qp(p, h, y, C, x, R) {
  let S = !1, L = x(p, h, h ? y : !1);
  for (; L; ) {
    if (L === p.firstChild) {
      if (S)
        return !1;
      S = !0;
    }
    const _ = C ? !1 : L.disabled || L.getAttribute("aria-disabled") === "true";
    if (!L.hasAttribute("tabindex") || !v1(L, R) || _)
      L = x(p, L, y);
    else
      return L.focus(), !0;
  }
  return !1;
}
const h1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: C,
    autoFocus: x = !1,
    autoFocusItem: R = !1,
    children: S,
    className: L,
    disabledItemsFocusable: _ = !1,
    disableListWrap: M = !1,
    onKeyDown: K,
    variant: F = "selectedMenu"
  } = h, I = $t(h, i_), B = W.useRef(null), J = W.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Cf(() => {
    x && B.current.focus();
  }, [x]), W.useImperativeHandle(C, () => ({
    adjustStyleForScrollbar: (Y, Q) => {
      const te = !B.current.style.width;
      if (Y.clientHeight < B.current.clientHeight && te) {
        const ce = `${Wx(Pa(Y))}px`;
        B.current.style[Q.direction === "rtl" ? "paddingLeft" : "paddingRight"] = ce, B.current.style.width = `calc(100% + ${ce})`;
      }
      return B.current;
    }
  }), []);
  const ie = (Y) => {
    const Q = B.current, te = Y.key, ce = Pa(Q).activeElement;
    if (te === "ArrowDown")
      Y.preventDefault(), Qp(Q, ce, M, _, iE);
    else if (te === "ArrowUp")
      Y.preventDefault(), Qp(Q, ce, M, _, Rx);
    else if (te === "Home")
      Y.preventDefault(), Qp(Q, null, M, _, iE);
    else if (te === "End")
      Y.preventDefault(), Qp(Q, null, M, _, Rx);
    else if (te.length === 1) {
      const re = J.current, De = te.toLowerCase(), $e = performance.now();
      re.keys.length > 0 && ($e - re.lastTime > 500 ? (re.keys = [], re.repeating = !0, re.previousKeyMatched = !0) : re.repeating && De !== re.keys[0] && (re.repeating = !1)), re.lastTime = $e, re.keys.push(De);
      const Ae = ce && !re.repeating && v1(ce, re);
      re.previousKeyMatched && (Ae || Qp(Q, ce, !1, _, iE, re)) ? Y.preventDefault() : re.previousKeyMatched = !1;
    }
    K && K(Y);
  }, $ = ti(B, y);
  let he = -1;
  W.Children.forEach(S, (Y, Q) => {
    if (!/* @__PURE__ */ W.isValidElement(Y)) {
      he === Q && (he += 1, he >= S.length && (he = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && SE.isFragment(Y) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), Y.props.disabled || (F === "selectedMenu" && Y.props.selected || he === -1) && (he = Q), he === Q && (Y.props.disabled || Y.props.muiSkipListHighlight || Y.type.muiSkipListHighlight) && (he += 1, he >= S.length && (he = -1));
  });
  const ye = W.Children.map(S, (Y, Q) => {
    if (Q === he) {
      const te = {};
      return R && (te.autoFocus = !0), Y.props.tabIndex === void 0 && F === "selectedMenu" && (te.tabIndex = 0), /* @__PURE__ */ W.cloneElement(Y, te);
    }
    return Y;
  });
  return /* @__PURE__ */ Re.jsx(a_, q({
    role: "menu",
    ref: $,
    className: L,
    onKeyDown: ie,
    tabIndex: x ? 0 : -1
  }, I, {
    children: ye
  }));
});
process.env.NODE_ENV !== "production" && (h1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: c.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: c.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: c.bool,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
const o_ = h1, wx = {
  disabled: !1
};
var l_ = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.shape({
  enter: c.number,
  exit: c.number,
  appear: c.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && c.oneOfType([c.string, c.shape({
  enter: c.string,
  exit: c.string,
  active: c.string
}), c.shape({
  enter: c.string,
  enterDone: c.string,
  enterActive: c.string,
  exit: c.string,
  exitDone: c.string,
  exitActive: c.string
})]);
var u_ = function(h) {
  return h.scrollTop;
}, Kp = "unmounted", Ss = "exited", Es = "entering", bf = "entered", cE = "exiting", nl = /* @__PURE__ */ function(p) {
  SN(h, p);
  function h(C, x) {
    var R;
    R = p.call(this, C, x) || this;
    var S = x, L = S && !S.isMounting ? C.enter : C.appear, _;
    return R.appearStatus = null, C.in ? L ? (_ = Ss, R.appearStatus = Es) : _ = bf : C.unmountOnExit || C.mountOnEnter ? _ = Kp : _ = Ss, R.state = {
      status: _
    }, R.nextCallback = null, R;
  }
  h.getDerivedStateFromProps = function(x, R) {
    var S = x.in;
    return S && R.status === Kp ? {
      status: Ss
    } : null;
  };
  var y = h.prototype;
  return y.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, y.componentDidUpdate = function(x) {
    var R = null;
    if (x !== this.props) {
      var S = this.state.status;
      this.props.in ? S !== Es && S !== bf && (R = Es) : (S === Es || S === bf) && (R = cE);
    }
    this.updateStatus(!1, R);
  }, y.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, y.getTimeouts = function() {
    var x = this.props.timeout, R, S, L;
    return R = S = L = x, x != null && typeof x != "number" && (R = x.exit, S = x.enter, L = x.appear !== void 0 ? x.appear : S), {
      exit: R,
      enter: S,
      appear: L
    };
  }, y.updateStatus = function(x, R) {
    if (x === void 0 && (x = !1), R !== null)
      if (this.cancelNextCallback(), R === Es) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var S = this.props.nodeRef ? this.props.nodeRef.current : ly.findDOMNode(this);
          S && u_(S);
        }
        this.performEnter(x);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ss && this.setState({
        status: Kp
      });
  }, y.performEnter = function(x) {
    var R = this, S = this.props.enter, L = this.context ? this.context.isMounting : x, _ = this.props.nodeRef ? [L] : [ly.findDOMNode(this), L], M = _[0], K = _[1], F = this.getTimeouts(), I = L ? F.appear : F.enter;
    if (!x && !S || wx.disabled) {
      this.safeSetState({
        status: bf
      }, function() {
        R.props.onEntered(M);
      });
      return;
    }
    this.props.onEnter(M, K), this.safeSetState({
      status: Es
    }, function() {
      R.props.onEntering(M, K), R.onTransitionEnd(I, function() {
        R.safeSetState({
          status: bf
        }, function() {
          R.props.onEntered(M, K);
        });
      });
    });
  }, y.performExit = function() {
    var x = this, R = this.props.exit, S = this.getTimeouts(), L = this.props.nodeRef ? void 0 : ly.findDOMNode(this);
    if (!R || wx.disabled) {
      this.safeSetState({
        status: Ss
      }, function() {
        x.props.onExited(L);
      });
      return;
    }
    this.props.onExit(L), this.safeSetState({
      status: cE
    }, function() {
      x.props.onExiting(L), x.onTransitionEnd(S.exit, function() {
        x.safeSetState({
          status: Ss
        }, function() {
          x.props.onExited(L);
        });
      });
    });
  }, y.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, y.safeSetState = function(x, R) {
    R = this.setNextCallback(R), this.setState(x, R);
  }, y.setNextCallback = function(x) {
    var R = this, S = !0;
    return this.nextCallback = function(L) {
      S && (S = !1, R.nextCallback = null, x(L));
    }, this.nextCallback.cancel = function() {
      S = !1;
    }, this.nextCallback;
  }, y.onTransitionEnd = function(x, R) {
    this.setNextCallback(R);
    var S = this.props.nodeRef ? this.props.nodeRef.current : ly.findDOMNode(this), L = x == null && !this.props.addEndListener;
    if (!S || L) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ = this.props.nodeRef ? [this.nextCallback] : [S, this.nextCallback], M = _[0], K = _[1];
      this.props.addEndListener(M, K);
    }
    x != null && setTimeout(this.nextCallback, x);
  }, y.render = function() {
    var x = this.state.status;
    if (x === Kp)
      return null;
    var R = this.props, S = R.children;
    R.in, R.mountOnEnter, R.unmountOnExit, R.appear, R.enter, R.exit, R.timeout, R.addEndListener, R.onEnter, R.onEntering, R.onEntered, R.onExit, R.onExiting, R.onExited, R.nodeRef;
    var L = $t(R, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ iy.createElement(jx.Provider, {
        value: null
      }, typeof S == "function" ? S(x, L) : iy.cloneElement(iy.Children.only(S), L))
    );
  }, h;
}(iy.Component);
nl.contextType = jx;
nl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: c.shape({
    current: typeof Element > "u" ? c.any : function(p, h, y, C, x, R) {
      var S = p[h];
      return c.instanceOf(S && "ownerDocument" in S ? S.ownerDocument.defaultView.Element : Element)(p, h, y, C, x, R);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: c.oneOfType([c.func.isRequired, c.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: c.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: c.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: c.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: c.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: c.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: c.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(h) {
    var y = l_;
    h.addEndListener || (y = y.isRequired);
    for (var C = arguments.length, x = new Array(C > 1 ? C - 1 : 0), R = 1; R < C; R++)
      x[R - 1] = arguments[R];
    return y.apply(void 0, [h].concat(x));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: c.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: c.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: c.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: c.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: c.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: c.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: c.func
} : {};
function Ef() {
}
nl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ef,
  onEntering: Ef,
  onEntered: Ef,
  onExit: Ef,
  onExiting: Ef,
  onExited: Ef
};
nl.UNMOUNTED = Kp;
nl.EXITED = Ss;
nl.ENTERING = Es;
nl.ENTERED = bf;
nl.EXITING = cE;
const m1 = nl;
function by() {
  const p = Ux(Ax);
  return process.env.NODE_ENV !== "production" && W.useDebugValue(p), p[Fx] || p;
}
const y1 = (p) => p.scrollTop;
function vy(p, h) {
  var y, C;
  const {
    timeout: x,
    easing: R,
    style: S = {}
  } = p;
  return {
    duration: (y = S.transitionDuration) != null ? y : typeof x == "number" ? x : x[h.mode] || 0,
    easing: (C = S.transitionTimingFunction) != null ? C : typeof R == "object" ? R[h.mode] : R,
    delay: S.transitionDelay
  };
}
const s_ = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function fE(p) {
  return `scale(${p}, ${p ** 2})`;
}
const c_ = {
  entering: {
    opacity: 1,
    transform: fE(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, oE = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), EE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const {
    addEndListener: C,
    appear: x = !0,
    children: R,
    easing: S,
    in: L,
    onEnter: _,
    onEntered: M,
    onEntering: K,
    onExit: F,
    onExited: I,
    onExiting: B,
    style: J,
    timeout: ie = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = m1
  } = h, he = $t(h, s_), ye = W.useRef(), Y = W.useRef(), Q = by(), te = W.useRef(null), ce = ti(te, R.ref, y), re = (Te) => (Ce) => {
    if (Te) {
      const Fe = te.current;
      Ce === void 0 ? Te(Fe) : Te(Fe, Ce);
    }
  }, De = re(K), $e = re((Te, Ce) => {
    y1(Te);
    const {
      duration: Fe,
      delay: G,
      easing: pe
    } = vy({
      style: J,
      timeout: ie,
      easing: S
    }, {
      mode: "enter"
    });
    let fe;
    ie === "auto" ? (fe = Q.transitions.getAutoHeightDuration(Te.clientHeight), Y.current = fe) : fe = Fe, Te.style.transition = [Q.transitions.create("opacity", {
      duration: fe,
      delay: G
    }), Q.transitions.create("transform", {
      duration: oE ? fe : fe * 0.666,
      delay: G,
      easing: pe
    })].join(","), _ && _(Te, Ce);
  }), Ae = re(M), Me = re(B), Ve = re((Te) => {
    const {
      duration: Ce,
      delay: Fe,
      easing: G
    } = vy({
      style: J,
      timeout: ie,
      easing: S
    }, {
      mode: "exit"
    });
    let pe;
    ie === "auto" ? (pe = Q.transitions.getAutoHeightDuration(Te.clientHeight), Y.current = pe) : pe = Ce, Te.style.transition = [Q.transitions.create("opacity", {
      duration: pe,
      delay: Fe
    }), Q.transitions.create("transform", {
      duration: oE ? pe : pe * 0.666,
      delay: oE ? Fe : Fe || pe * 0.333,
      easing: G
    })].join(","), Te.style.opacity = 0, Te.style.transform = fE(0.75), F && F(Te);
  }), de = re(I), me = (Te) => {
    ie === "auto" && (ye.current = setTimeout(Te, Y.current || 0)), C && C(te.current, Te);
  };
  return W.useEffect(() => () => {
    clearTimeout(ye.current);
  }, []), /* @__PURE__ */ Re.jsx($, q({
    appear: x,
    in: L,
    nodeRef: te,
    onEnter: $e,
    onEntered: Ae,
    onEntering: De,
    onExit: Ve,
    onExited: de,
    onExiting: Me,
    addEndListener: me,
    timeout: ie === "auto" ? null : ie
  }, he, {
    children: (Te, Ce) => /* @__PURE__ */ W.cloneElement(R, q({
      style: q({
        opacity: 0,
        transform: fE(0.75),
        visibility: Te === "exited" && !L ? "hidden" : void 0
      }, c_[Te], J, R.props.style),
      ref: ce
    }, Ce))
  }));
});
process.env.NODE_ENV !== "production" && (EE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: my.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
EE.muiSupportAuto = !0;
const f_ = EE, d_ = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], p_ = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, g1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = by(), x = {
    enter: C.transitions.duration.enteringScreen,
    exit: C.transitions.duration.leavingScreen
  }, {
    addEndListener: R,
    appear: S = !0,
    children: L,
    easing: _,
    in: M,
    onEnter: K,
    onEntered: F,
    onEntering: I,
    onExit: B,
    onExited: J,
    onExiting: ie,
    style: $,
    timeout: he = x,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: ye = m1
  } = h, Y = $t(h, d_), Q = W.useRef(null), te = ti(Q, L.ref, y), ce = (me) => (Te) => {
    if (me) {
      const Ce = Q.current;
      Te === void 0 ? me(Ce) : me(Ce, Te);
    }
  }, re = ce(I), De = ce((me, Te) => {
    y1(me);
    const Ce = vy({
      style: $,
      timeout: he,
      easing: _
    }, {
      mode: "enter"
    });
    me.style.webkitTransition = C.transitions.create("opacity", Ce), me.style.transition = C.transitions.create("opacity", Ce), K && K(me, Te);
  }), $e = ce(F), Ae = ce(ie), Me = ce((me) => {
    const Te = vy({
      style: $,
      timeout: he,
      easing: _
    }, {
      mode: "exit"
    });
    me.style.webkitTransition = C.transitions.create("opacity", Te), me.style.transition = C.transitions.create("opacity", Te), B && B(me);
  }), Ve = ce(J), de = (me) => {
    R && R(Q.current, me);
  };
  return /* @__PURE__ */ Re.jsx(ye, q({
    appear: S,
    in: M,
    nodeRef: Q,
    onEnter: De,
    onEntered: $e,
    onEntering: re,
    onExit: Me,
    onExited: Ve,
    onExiting: Ae,
    addEndListener: de,
    timeout: he
  }, Y, {
    children: (me, Te) => /* @__PURE__ */ W.cloneElement(L, q({
      style: q({
        opacity: 0,
        visibility: me === "exited" && !M ? "hidden" : void 0
      }, p_[me], $, L.props.style),
      ref: te
    }, Te))
  }));
});
process.env.NODE_ENV !== "production" && (g1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: my.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
const v_ = g1;
function h_(p) {
  return pr("MuiBackdrop", p);
}
vr("MuiBackdrop", ["root", "invisible"]);
const m_ = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], y_ = (p) => {
  const {
    classes: h,
    invisible: y
  } = p;
  return hr({
    root: ["root", y && "invisible"]
  }, h_, h);
}, g_ = Tt("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, y.invisible && h.invisible];
  }
})(({
  ownerState: p
}) => q({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, p.invisible && {
  backgroundColor: "transparent"
})), S1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R;
  const S = kr({
    props: h,
    name: "MuiBackdrop"
  }), {
    children: L,
    className: _,
    component: M = "div",
    components: K = {},
    componentsProps: F = {},
    invisible: I = !1,
    open: B,
    slotProps: J = {},
    slots: ie = {},
    TransitionComponent: $ = v_,
    transitionDuration: he
  } = S, ye = $t(S, m_), Y = q({}, S, {
    component: M,
    invisible: I
  }), Q = y_(Y), te = (C = J.root) != null ? C : F.root;
  return /* @__PURE__ */ Re.jsx($, q({
    in: B,
    timeout: he
  }, ye, {
    children: /* @__PURE__ */ Re.jsx(g_, q({
      "aria-hidden": !0
    }, te, {
      as: (x = (R = ie.root) != null ? R : K.Root) != null ? x : M,
      className: zn(Q.root, _, te == null ? void 0 : te.className),
      ownerState: q({}, Y, te == null ? void 0 : te.ownerState),
      classes: Q,
      ref: y,
      children: L
    }))
  }));
});
process.env.NODE_ENV !== "production" && (S1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    root: c.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: c.bool,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: c.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
const S_ = S1;
function E_(p) {
  return pr("MuiModal", p);
}
vr("MuiModal", ["root", "hidden", "backdrop"]);
const b_ = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], C_ = (p) => {
  const {
    open: h,
    exited: y,
    classes: C
  } = p;
  return hr({
    root: ["root", !h && y && "hidden"],
    backdrop: ["backdrop"]
  }, E_, C);
}, T_ = Tt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, !y.open && y.exited && h.hidden];
  }
})(({
  theme: p,
  ownerState: h
}) => q({
  position: "fixed",
  zIndex: (p.vars || p).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !h.open && h.exited && {
  visibility: "hidden"
})), x_ = Tt(S_, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (p, h) => h.backdrop
})({
  zIndex: -1
}), E1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R, S, L, _;
  const M = kr({
    name: "MuiModal",
    props: h
  }), {
    BackdropComponent: K = x_,
    BackdropProps: F,
    className: I,
    closeAfterTransition: B = !1,
    children: J,
    container: ie,
    component: $,
    components: he = {},
    componentsProps: ye = {},
    disableAutoFocus: Y = !1,
    disableEnforceFocus: Q = !1,
    disableEscapeKeyDown: te = !1,
    disablePortal: ce = !1,
    disableRestoreFocus: re = !1,
    disableScrollLock: De = !1,
    hideBackdrop: $e = !1,
    keepMounted: Ae = !1,
    onBackdropClick: Me,
    open: Ve,
    slotProps: de,
    slots: me
    // eslint-disable-next-line react/prop-types
  } = M, Te = $t(M, b_), Ce = q({}, M, {
    closeAfterTransition: B,
    disableAutoFocus: Y,
    disableEnforceFocus: Q,
    disableEscapeKeyDown: te,
    disablePortal: ce,
    disableRestoreFocus: re,
    disableScrollLock: De,
    hideBackdrop: $e,
    keepMounted: Ae
  }), {
    getRootProps: Fe,
    getBackdropProps: G,
    getTransitionProps: pe,
    portalRef: fe,
    isTopModal: it,
    exited: Ze,
    hasTransition: ht
  } = XN(q({}, Ce, {
    rootRef: y
  })), lt = q({}, Ce, {
    exited: Ze
  }), kt = C_(lt), vt = {};
  if (J.props.tabIndex === void 0 && (vt.tabIndex = "-1"), ht) {
    const {
      onEnter: Qe,
      onExited: le
    } = pe();
    vt.onEnter = Qe, vt.onExited = le;
  }
  const rn = (C = (x = me == null ? void 0 : me.root) != null ? x : he.Root) != null ? C : T_, Vt = (R = (S = me == null ? void 0 : me.backdrop) != null ? S : he.Backdrop) != null ? R : K, Jt = (L = de == null ? void 0 : de.root) != null ? L : ye.root, gn = (_ = de == null ? void 0 : de.backdrop) != null ? _ : ye.backdrop, nt = Tf({
    elementType: rn,
    externalSlotProps: Jt,
    externalForwardedProps: Te,
    getSlotProps: Fe,
    additionalProps: {
      ref: y,
      as: $
    },
    ownerState: lt,
    className: zn(I, Jt == null ? void 0 : Jt.className, kt == null ? void 0 : kt.root, !lt.open && lt.exited && (kt == null ? void 0 : kt.hidden))
  }), xt = Tf({
    elementType: Vt,
    externalSlotProps: gn,
    additionalProps: F,
    getSlotProps: (Qe) => G(q({}, Qe, {
      onClick: (le) => {
        Me && Me(le), Qe != null && Qe.onClick && Qe.onClick(le);
      }
    })),
    className: zn(gn == null ? void 0 : gn.className, F == null ? void 0 : F.className, kt == null ? void 0 : kt.backdrop),
    ownerState: lt
  });
  return !Ae && !Ve && (!ht || Ze) ? null : /* @__PURE__ */ Re.jsx(dy, {
    ref: fe,
    container: ie,
    disablePortal: ce,
    children: /* @__PURE__ */ Re.jsxs(rn, q({}, nt, {
      children: [!$e && K ? /* @__PURE__ */ Re.jsx(Vt, q({}, xt)) : null, /* @__PURE__ */ Re.jsx(fy, {
        disableEnforceFocus: Q,
        disableAutoFocus: Y,
        disableRestoreFocus: re,
        isEnabled: it,
        open: Ve,
        children: /* @__PURE__ */ W.cloneElement(J, vt)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (E1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: c.object,
  /**
   * A single child content element.
   */
  children: my.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: c.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Backdrop: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Jp, c.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: c.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: c.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: c.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const R_ = E1, w_ = (p) => {
  let h;
  return p < 1 ? h = 5.11916 * p ** 2 : h = 4.5 * Math.log(p + 1) + 2, (h / 100).toFixed(2);
}, Ox = w_;
function O_(p) {
  return pr("MuiPaper", p);
}
vr("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const D_ = ["className", "component", "elevation", "square", "variant"], k_ = (p) => {
  const {
    square: h,
    elevation: y,
    variant: C,
    classes: x
  } = p, R = {
    root: ["root", C, !h && "rounded", C === "elevation" && `elevation${y}`]
  };
  return hr(R, O_, x);
}, N_ = Tt("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, h[y.variant], !y.square && h.rounded, y.variant === "elevation" && h[`elevation${y.elevation}`]];
  }
})(({
  theme: p,
  ownerState: h
}) => {
  var y;
  return q({
    backgroundColor: (p.vars || p).palette.background.paper,
    color: (p.vars || p).palette.text.primary,
    transition: p.transitions.create("box-shadow")
  }, !h.square && {
    borderRadius: p.shape.borderRadius
  }, h.variant === "outlined" && {
    border: `1px solid ${(p.vars || p).palette.divider}`
  }, h.variant === "elevation" && q({
    boxShadow: (p.vars || p).shadows[h.elevation]
  }, !p.vars && p.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${ix("#fff", Ox(h.elevation))}, ${ix("#fff", Ox(h.elevation))})`
  }, p.vars && {
    backgroundImage: (y = p.vars.overlays) == null ? void 0 : y[h.elevation]
  }));
}), b1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiPaper"
  }), {
    className: x,
    component: R = "div",
    elevation: S = 1,
    square: L = !1,
    variant: _ = "elevation"
  } = C, M = $t(C, D_), K = q({}, C, {
    component: R,
    elevation: S,
    square: L,
    variant: _
  }), F = k_(K);
  return process.env.NODE_ENV !== "production" && by().shadows[S] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${S}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${S}]\` is defined.`].join(`
`)), /* @__PURE__ */ Re.jsx(N_, q({
    as: R,
    ownerState: K,
    className: zn(F.root, x),
    ref: y
  }, M));
});
process.env.NODE_ENV !== "production" && (b1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: hy(Qx, (p) => {
    const {
      elevation: h,
      variant: y
    } = p;
    return h > 0 && y === "outlined" ? new Error(`MUI: Combining \`elevation={${h}}\` with \`variant="${y}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: c.oneOfType([c.oneOf(["elevation", "outlined"]), c.string])
});
const M_ = b1;
function __(p) {
  return pr("MuiPopover", p);
}
vr("MuiPopover", ["root", "paper"]);
const L_ = ["onEntering"], z_ = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], U_ = ["slotProps"];
function Dx(p, h) {
  let y = 0;
  return typeof h == "number" ? y = h : h === "center" ? y = p.height / 2 : h === "bottom" && (y = p.height), y;
}
function kx(p, h) {
  let y = 0;
  return typeof h == "number" ? y = h : h === "center" ? y = p.width / 2 : h === "right" && (y = p.width), y;
}
function Nx(p) {
  return [p.horizontal, p.vertical].map((h) => typeof h == "number" ? `${h}px` : h).join(" ");
}
function sy(p) {
  return typeof p == "function" ? p() : p;
}
const A_ = (p) => {
  const {
    classes: h
  } = p;
  return hr({
    root: ["root"],
    paper: ["paper"]
  }, __, h);
}, F_ = Tt(R_, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (p, h) => h.root
})({}), C1 = Tt(M_, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (p, h) => h.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), T1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x, R;
  const S = kr({
    props: h,
    name: "MuiPopover"
  }), {
    action: L,
    anchorEl: _,
    anchorOrigin: M = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: K,
    anchorReference: F = "anchorEl",
    children: I,
    className: B,
    container: J,
    elevation: ie = 8,
    marginThreshold: $ = 16,
    open: he,
    PaperProps: ye = {},
    slots: Y,
    slotProps: Q,
    transformOrigin: te = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: ce = f_,
    transitionDuration: re = "auto",
    TransitionProps: {
      onEntering: De
    } = {},
    disableScrollLock: $e = !1
  } = S, Ae = $t(S.TransitionProps, L_), Me = $t(S, z_), Ve = (C = Q == null ? void 0 : Q.paper) != null ? C : ye, de = W.useRef(), me = ti(de, Ve.ref), Te = q({}, S, {
    anchorOrigin: M,
    anchorReference: F,
    elevation: ie,
    marginThreshold: $,
    externalPaperSlotProps: Ve,
    transformOrigin: te,
    TransitionComponent: ce,
    transitionDuration: re,
    TransitionProps: Ae
  }), Ce = A_(Te), Fe = W.useCallback(() => {
    if (F === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (K || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), K;
    const Qe = sy(_), le = Qe && Qe.nodeType === 1 ? Qe : Pa(de.current).body, ct = le.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Lt = le.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Lt.top === 0 && Lt.left === 0 && Lt.right === 0 && Lt.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ct.top + Dx(ct, M.vertical),
      left: ct.left + kx(ct, M.horizontal)
    };
  }, [_, M.horizontal, M.vertical, K, F]), G = W.useCallback((Qe) => ({
    vertical: Dx(Qe, te.vertical),
    horizontal: kx(Qe, te.horizontal)
  }), [te.horizontal, te.vertical]), pe = W.useCallback((Qe) => {
    const le = {
      width: Qe.offsetWidth,
      height: Qe.offsetHeight
    }, ct = G(le);
    if (F === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Nx(ct)
      };
    const Lt = Fe();
    let It = Lt.top - ct.vertical, Sn = Lt.left - ct.horizontal;
    const nr = It + le.height, rr = Sn + le.width, zt = bs(sy(_)), Un = zt.innerHeight - $, en = zt.innerWidth - $;
    if ($ !== null && It < $) {
      const Ut = It - $;
      It -= Ut, ct.vertical += Ut;
    } else if ($ !== null && nr > Un) {
      const Ut = nr - Un;
      It -= Ut, ct.vertical += Ut;
    }
    if (process.env.NODE_ENV !== "production" && le.height > Un && le.height && Un && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${le.height - Un}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), $ !== null && Sn < $) {
      const Ut = Sn - $;
      Sn -= Ut, ct.horizontal += Ut;
    } else if (rr > en) {
      const Ut = rr - en;
      Sn -= Ut, ct.horizontal += Ut;
    }
    return {
      top: `${Math.round(It)}px`,
      left: `${Math.round(Sn)}px`,
      transformOrigin: Nx(ct)
    };
  }, [_, F, Fe, G, $]), [fe, it] = W.useState(he), Ze = W.useCallback(() => {
    const Qe = de.current;
    if (!Qe)
      return;
    const le = pe(Qe);
    le.top !== null && (Qe.style.top = le.top), le.left !== null && (Qe.style.left = le.left), Qe.style.transformOrigin = le.transformOrigin, it(!0);
  }, [pe]);
  W.useEffect(() => ($e && window.addEventListener("scroll", Ze), () => window.removeEventListener("scroll", Ze)), [_, $e, Ze]);
  const ht = (Qe, le) => {
    De && De(Qe, le), Ze();
  }, lt = () => {
    it(!1);
  };
  W.useEffect(() => {
    he && Ze();
  }), W.useImperativeHandle(L, () => he ? {
    updatePosition: () => {
      Ze();
    }
  } : null, [he, Ze]), W.useEffect(() => {
    if (!he)
      return;
    const Qe = Bx(() => {
      Ze();
    }), le = bs(_);
    return le.addEventListener("resize", Qe), () => {
      Qe.clear(), le.removeEventListener("resize", Qe);
    };
  }, [_, he, Ze]);
  let kt = re;
  re === "auto" && !ce.muiSupportAuto && (kt = void 0);
  const vt = J || (_ ? Pa(sy(_)).body : void 0), rn = (x = Y == null ? void 0 : Y.root) != null ? x : F_, Vt = (R = Y == null ? void 0 : Y.paper) != null ? R : C1, Jt = Tf({
    elementType: Vt,
    externalSlotProps: q({}, Ve, {
      style: fe ? Ve.style : q({}, Ve.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: ie,
      ref: me
    },
    ownerState: Te,
    className: zn(Ce.paper, Ve == null ? void 0 : Ve.className)
  }), gn = Tf({
    elementType: rn,
    externalSlotProps: (Q == null ? void 0 : Q.root) || {},
    externalForwardedProps: Me,
    additionalProps: {
      ref: y,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: vt,
      open: he
    },
    ownerState: Te,
    className: zn(Ce.root, B)
  }), {
    slotProps: nt
  } = gn, xt = $t(gn, U_);
  return /* @__PURE__ */ Re.jsx(rn, q({}, xt, !cy(rn) && {
    slotProps: nt,
    disableScrollLock: $e
  }, {
    children: /* @__PURE__ */ Re.jsx(ce, q({
      appear: !0,
      in: he,
      onEntering: ht,
      onExited: lt,
      timeout: kt
    }, Ae, {
      children: /* @__PURE__ */ Re.jsx(Vt, q({}, Jt, {
        children: I
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (T1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ou,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: hy(c.oneOfType([Jp, c.func]), (p) => {
    if (p.open && (!p.anchorReference || p.anchorReference === "anchorEl")) {
      const h = sy(p.anchorEl);
      if (h && h.nodeType === 1) {
        const y = h.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && y.top === 0 && y.left === 0 && y.right === 0 && y.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${h}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: c.shape({
    left: c.number.isRequired,
    top: c.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: c.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Jp, c.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Qx,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: c.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: c.shape({
    component: Px
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: c.shape({
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: c.shape({
    paper: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: c.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: c.object
});
const P_ = T1;
function j_(p) {
  return pr("MuiMenu", p);
}
vr("MuiMenu", ["root", "paper", "list"]);
const H_ = ["onEntering"], $_ = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], V_ = {
  vertical: "top",
  horizontal: "right"
}, I_ = {
  vertical: "top",
  horizontal: "left"
}, B_ = (p) => {
  const {
    classes: h
  } = p;
  return hr({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, j_, h);
}, W_ = Tt(P_, {
  shouldForwardProp: (p) => Cs(p) || p === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (p, h) => h.root
})({}), Y_ = Tt(C1, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (p, h) => h.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), q_ = Tt(o_, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (p, h) => h.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), x1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C, x;
  const R = kr({
    props: h,
    name: "MuiMenu"
  }), {
    autoFocus: S = !0,
    children: L,
    className: _,
    disableAutoFocusItem: M = !1,
    MenuListProps: K = {},
    onClose: F,
    open: I,
    PaperProps: B = {},
    PopoverClasses: J,
    transitionDuration: ie = "auto",
    TransitionProps: {
      onEntering: $
    } = {},
    variant: he = "selectedMenu",
    slots: ye = {},
    slotProps: Y = {}
  } = R, Q = $t(R.TransitionProps, H_), te = $t(R, $_), ce = by(), re = ce.direction === "rtl", De = q({}, R, {
    autoFocus: S,
    disableAutoFocusItem: M,
    MenuListProps: K,
    onEntering: $,
    PaperProps: B,
    transitionDuration: ie,
    TransitionProps: Q,
    variant: he
  }), $e = B_(De), Ae = S && !M && I, Me = W.useRef(null), Ve = (pe, fe) => {
    Me.current && Me.current.adjustStyleForScrollbar(pe, ce), $ && $(pe, fe);
  }, de = (pe) => {
    pe.key === "Tab" && (pe.preventDefault(), F && F(pe, "tabKeyDown"));
  };
  let me = -1;
  W.Children.map(L, (pe, fe) => {
    /* @__PURE__ */ W.isValidElement(pe) && (process.env.NODE_ENV !== "production" && SE.isFragment(pe) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), pe.props.disabled || (he === "selectedMenu" && pe.props.selected || me === -1) && (me = fe));
  });
  const Te = (C = ye.paper) != null ? C : Y_, Ce = (x = Y.paper) != null ? x : B, Fe = Tf({
    elementType: ye.root,
    externalSlotProps: Y.root,
    ownerState: De,
    className: [$e.root, _]
  }), G = Tf({
    elementType: Te,
    externalSlotProps: Ce,
    ownerState: De,
    className: $e.paper
  });
  return /* @__PURE__ */ Re.jsx(W_, q({
    onClose: F,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: re ? "right" : "left"
    },
    transformOrigin: re ? V_ : I_,
    slots: {
      paper: Te,
      root: ye.root
    },
    slotProps: {
      root: Fe,
      paper: G
    },
    open: I,
    ref: y,
    transitionDuration: ie,
    TransitionProps: q({
      onEntering: Ve
    }, Q),
    ownerState: De
  }, te, {
    classes: J,
    children: /* @__PURE__ */ Re.jsx(q_, q({
      onKeyDown: de,
      actions: Me,
      autoFocus: S && (me === -1 || M),
      autoFocusItem: Ae,
      variant: he
    }, K, {
      className: zn($e.list, K.className),
      children: L
    }))
  }));
});
process.env.NODE_ENV !== "production" && (x1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: c.oneOfType([Jp, c.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: c.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: c.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: c.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: c.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: c.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: c.shape({
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: c.shape({
    paper: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: c.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
const Q_ = x1;
function G_(p) {
  return pr("MuiNativeSelect", p);
}
const K_ = vr("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), bE = K_, X_ = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Z_ = (p) => {
  const {
    classes: h,
    variant: y,
    disabled: C,
    multiple: x,
    open: R,
    error: S
  } = p, L = {
    select: ["select", y, C && "disabled", x && "multiple", S && "error"],
    icon: ["icon", `icon${Dr(y)}`, R && "iconOpen", C && "disabled"]
  };
  return hr(L, G_, h);
}, R1 = ({
  ownerState: p,
  theme: h
}) => q({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": q({}, h.vars ? {
    backgroundColor: `rgba(${h.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: h.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${bE.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (h.vars || h).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, p.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, p.variant === "outlined" && {
  borderRadius: (h.vars || h).shape.borderRadius,
  "&:focus": {
    borderRadius: (h.vars || h).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), J_ = Tt("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Cs,
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.select, h[y.variant], y.error && h.error, {
      [`&.${bE.multiple}`]: h.multiple
    }];
  }
})(R1), w1 = ({
  ownerState: p,
  theme: h
}) => q({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (h.vars || h).palette.action.active,
  [`&.${bE.disabled}`]: {
    color: (h.vars || h).palette.action.disabled
  }
}, p.open && {
  transform: "rotate(180deg)"
}, p.variant === "filled" && {
  right: 7
}, p.variant === "outlined" && {
  right: 7
}), eL = Tt("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.icon, y.variant && h[`icon${Dr(y.variant)}`], y.open && h.iconOpen];
  }
})(w1), O1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const {
    className: C,
    disabled: x,
    error: R,
    IconComponent: S,
    inputRef: L,
    variant: _ = "standard"
  } = h, M = $t(h, X_), K = q({}, h, {
    disabled: x,
    variant: _,
    error: R
  }), F = Z_(K);
  return /* @__PURE__ */ Re.jsxs(W.Fragment, {
    children: [/* @__PURE__ */ Re.jsx(J_, q({
      ownerState: K,
      className: zn(F.select, C),
      disabled: x,
      ref: L || y
    }, M)), h.multiple ? null : /* @__PURE__ */ Re.jsx(eL, {
      as: S,
      ownerState: K,
      className: F.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (O1.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * The CSS class name of the select element.
   */
  className: c.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: c.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: c.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: ou,
  /**
   * @ignore
   */
  multiple: c.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: c.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The input value.
   */
  value: c.any,
  /**
   * The variant to use.
   */
  variant: c.oneOf(["standard", "outlined", "filled"])
});
const tL = O1;
function nL(p) {
  return pr("MuiSelect", p);
}
const rL = vr("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Gp = rL;
var Mx;
const aL = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], iL = Tt("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [
      // Win specificity over the input base
      {
        [`&.${Gp.select}`]: h.select
      },
      {
        [`&.${Gp.select}`]: h[y.variant]
      },
      {
        [`&.${Gp.error}`]: h.error
      },
      {
        [`&.${Gp.multiple}`]: h.multiple
      }
    ];
  }
})(R1, {
  // Win specificity over the input base
  [`&.${Gp.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), oL = Tt("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.icon, y.variant && h[`icon${Dr(y.variant)}`], y.open && h.iconOpen];
  }
})(w1), lL = Tt("input", {
  shouldForwardProp: (p) => EN(p) && p !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (p, h) => h.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function _x(p, h) {
  return typeof h == "object" && h !== null ? p === h : String(p) === String(h);
}
function uL(p) {
  return p == null || typeof p == "string" && !p.trim();
}
const sL = (p) => {
  const {
    classes: h,
    variant: y,
    disabled: C,
    multiple: x,
    open: R,
    error: S
  } = p, L = {
    select: ["select", y, C && "disabled", x && "multiple", S && "error"],
    icon: ["icon", `icon${Dr(y)}`, R && "iconOpen", C && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return hr(L, nL, h);
}, D1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  var C;
  const {
    "aria-describedby": x,
    "aria-label": R,
    autoFocus: S,
    autoWidth: L,
    children: _,
    className: M,
    defaultOpen: K,
    defaultValue: F,
    disabled: I,
    displayEmpty: B,
    error: J = !1,
    IconComponent: ie,
    inputRef: $,
    labelId: he,
    MenuProps: ye = {},
    multiple: Y,
    name: Q,
    onBlur: te,
    onChange: ce,
    onClose: re,
    onFocus: De,
    onOpen: $e,
    open: Ae,
    readOnly: Me,
    renderValue: Ve,
    SelectDisplayProps: de = {},
    tabIndex: me,
    value: Te,
    variant: Ce = "standard"
  } = h, Fe = $t(h, aL), [G, pe] = sx({
    controlled: Te,
    default: F,
    name: "Select"
  }), [fe, it] = sx({
    controlled: Ae,
    default: K,
    name: "Select"
  }), Ze = W.useRef(null), ht = W.useRef(null), [lt, kt] = W.useState(null), {
    current: vt
  } = W.useRef(Ae != null), [rn, Vt] = W.useState(), Jt = ti(y, $), gn = W.useCallback((ge) => {
    ht.current = ge, ge && kt(ge);
  }, []), nt = lt == null ? void 0 : lt.parentNode;
  W.useImperativeHandle(Jt, () => ({
    focus: () => {
      ht.current.focus();
    },
    node: Ze.current,
    value: G
  }), [G]), W.useEffect(() => {
    K && fe && lt && !vt && (Vt(L ? null : nt.clientWidth), ht.current.focus());
  }, [lt, L]), W.useEffect(() => {
    S && ht.current.focus();
  }, [S]), W.useEffect(() => {
    if (!he)
      return;
    const ge = Pa(ht.current).getElementById(he);
    if (ge) {
      const Ye = () => {
        getSelection().isCollapsed && ht.current.focus();
      };
      return ge.addEventListener("click", Ye), () => {
        ge.removeEventListener("click", Ye);
      };
    }
  }, [he]);
  const xt = (ge, Ye) => {
    ge ? $e && $e(Ye) : re && re(Ye), vt || (Vt(L ? null : nt.clientWidth), it(ge));
  }, Qe = (ge) => {
    ge.button === 0 && (ge.preventDefault(), ht.current.focus(), xt(!0, ge));
  }, le = (ge) => {
    xt(!1, ge);
  }, ct = W.Children.toArray(_), Lt = (ge) => {
    const Ye = ct.find((Ct) => Ct.props.value === ge.target.value);
    Ye !== void 0 && (pe(Ye.props.value), ce && ce(ge, Ye));
  }, It = (ge) => (Ye) => {
    let Ct;
    if (Ye.currentTarget.hasAttribute("tabindex")) {
      if (Y) {
        Ct = Array.isArray(G) ? G.slice() : [];
        const qt = G.indexOf(ge.props.value);
        qt === -1 ? Ct.push(ge.props.value) : Ct.splice(qt, 1);
      } else
        Ct = ge.props.value;
      if (ge.props.onClick && ge.props.onClick(Ye), G !== Ct && (pe(Ct), ce)) {
        const qt = Ye.nativeEvent || Ye, mr = new qt.constructor(qt.type, qt);
        Object.defineProperty(mr, "target", {
          writable: !0,
          value: {
            value: Ct,
            name: Q
          }
        }), ce(mr, ge);
      }
      Y || xt(!1, Ye);
    }
  }, Sn = (ge) => {
    Me || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ge.key) !== -1 && (ge.preventDefault(), xt(!0, ge));
  }, nr = lt !== null && fe, rr = (ge) => {
    !nr && te && (Object.defineProperty(ge, "target", {
      writable: !0,
      value: {
        value: G,
        name: Q
      }
    }), te(ge));
  };
  delete Fe["aria-invalid"];
  let zt, Un;
  const en = [];
  let Ut = !1, Bn = !1;
  (py({
    value: G
  }) || B) && (Ve ? zt = Ve(G) : Ut = !0);
  const Nr = ct.map((ge) => {
    if (!/* @__PURE__ */ W.isValidElement(ge))
      return null;
    process.env.NODE_ENV !== "production" && SE.isFragment(ge) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ye;
    if (Y) {
      if (!Array.isArray(G))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : zx(2));
      Ye = G.some((Ct) => _x(Ct, ge.props.value)), Ye && Ut && en.push(ge.props.children);
    } else
      Ye = _x(G, ge.props.value), Ye && Ut && (Un = ge.props.children);
    return Ye && (Bn = !0), /* @__PURE__ */ W.cloneElement(ge, {
      "aria-selected": Ye ? "true" : "false",
      onClick: It(ge),
      onKeyUp: (Ct) => {
        Ct.key === " " && Ct.preventDefault(), ge.props.onKeyUp && ge.props.onKeyUp(Ct);
      },
      role: "option",
      selected: Ye,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ge.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && W.useEffect(() => {
    if (!Bn && !Y && G !== "") {
      const ge = ct.map((Ye) => Ye.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${G}\` for the select ${Q ? `(name="${Q}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ge.filter((Ye) => Ye != null).map((Ye) => `\`${Ye}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Bn, ct, Y, Q, G]), Ut && (Y ? en.length === 0 ? zt = null : zt = en.reduce((ge, Ye, Ct) => (ge.push(Ye), Ct < en.length - 1 && ge.push(", "), ge), []) : zt = Un);
  let En = rn;
  !L && vt && lt && (En = nt.clientWidth);
  let ft;
  typeof me < "u" ? ft = me : ft = I ? null : 0;
  const Ra = de.id || (Q ? `mui-component-select-${Q}` : void 0), ar = q({}, h, {
    variant: Ce,
    value: G,
    open: nr,
    error: J
  }), be = sL(ar), Ie = q({}, ye.PaperProps, (C = ye.slotProps) == null ? void 0 : C.paper), dt = Hx();
  return /* @__PURE__ */ Re.jsxs(W.Fragment, {
    children: [/* @__PURE__ */ Re.jsx(iL, q({
      ref: gn,
      tabIndex: ft,
      role: "combobox",
      "aria-controls": dt,
      "aria-disabled": I ? "true" : void 0,
      "aria-expanded": nr ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": R,
      "aria-labelledby": [he, Ra].filter(Boolean).join(" ") || void 0,
      "aria-describedby": x,
      onKeyDown: Sn,
      onMouseDown: I || Me ? null : Qe,
      onBlur: rr,
      onFocus: De
    }, de, {
      ownerState: ar,
      className: zn(de.className, be.select, M),
      id: Ra,
      children: uL(zt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Mx || (Mx = /* @__PURE__ */ Re.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : zt
    })), /* @__PURE__ */ Re.jsx(lL, q({
      "aria-invalid": J,
      value: Array.isArray(G) ? G.join(",") : G,
      name: Q,
      ref: Ze,
      "aria-hidden": !0,
      onChange: Lt,
      tabIndex: -1,
      disabled: I,
      className: be.nativeInput,
      autoFocus: S,
      ownerState: ar
    }, Fe)), /* @__PURE__ */ Re.jsx(oL, {
      as: ie,
      className: be.icon,
      ownerState: ar
    }), /* @__PURE__ */ Re.jsx(Q_, q({
      id: `menu-${Q || ""}`,
      anchorEl: nt,
      open: nr,
      onClose: le,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, ye, {
      MenuListProps: q({
        "aria-labelledby": he,
        role: "listbox",
        "aria-multiselectable": Y ? "true" : void 0,
        disableListWrap: !0,
        id: dt
      }, ye.MenuListProps),
      slotProps: q({}, ye.slotProps, {
        paper: q({}, Ie, {
          style: q({
            minWidth: En
          }, Ie != null ? Ie.style : null)
        })
      }),
      children: Nr
    }))]
  });
});
process.env.NODE_ENV !== "production" && (D1.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": c.string,
  /**
   * @ignore
   */
  "aria-label": c.string,
  /**
   * @ignore
   */
  autoFocus: c.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: c.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * The CSS class name of the select element.
   */
  className: c.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: c.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: c.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: c.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: c.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: ou,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: c.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: c.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: c.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: c.string,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool,
  /**
   * @ignore
   */
  readOnly: c.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: c.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: c.object,
  /**
   * @ignore
   */
  tabIndex: c.oneOfType([c.number, c.string]),
  /**
   * @ignore
   */
  type: c.any,
  /**
   * The input value.
   */
  value: c.any,
  /**
   * The variant to use.
   */
  variant: c.oneOf(["standard", "outlined", "filled"])
});
const cL = D1;
function fL(p) {
  return pr("MuiSvgIcon", p);
}
vr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const dL = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], pL = (p) => {
  const {
    color: h,
    fontSize: y,
    classes: C
  } = p, x = {
    root: ["root", h !== "inherit" && `color${Dr(h)}`, `fontSize${Dr(y)}`]
  };
  return hr(x, fL, C);
}, vL = Tt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (p, h) => {
    const {
      ownerState: y
    } = p;
    return [h.root, y.color !== "inherit" && h[`color${Dr(y.color)}`], h[`fontSize${Dr(y.fontSize)}`]];
  }
})(({
  theme: p,
  ownerState: h
}) => {
  var y, C, x, R, S, L, _, M, K, F, I, B, J;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: h.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (y = p.transitions) == null || (C = y.create) == null ? void 0 : C.call(y, "fill", {
      duration: (x = p.transitions) == null || (x = x.duration) == null ? void 0 : x.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((R = p.typography) == null || (S = R.pxToRem) == null ? void 0 : S.call(R, 20)) || "1.25rem",
      medium: ((L = p.typography) == null || (_ = L.pxToRem) == null ? void 0 : _.call(L, 24)) || "1.5rem",
      large: ((M = p.typography) == null || (K = M.pxToRem) == null ? void 0 : K.call(M, 35)) || "2.1875rem"
    }[h.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (F = (I = (p.vars || p).palette) == null || (I = I[h.color]) == null ? void 0 : I.main) != null ? F : {
      action: (B = (p.vars || p).palette) == null || (B = B.action) == null ? void 0 : B.active,
      disabled: (J = (p.vars || p).palette) == null || (J = J.action) == null ? void 0 : J.disabled,
      inherit: void 0
    }[h.color]
  };
}), CE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiSvgIcon"
  }), {
    children: x,
    className: R,
    color: S = "inherit",
    component: L = "svg",
    fontSize: _ = "medium",
    htmlColor: M,
    inheritViewBox: K = !1,
    titleAccess: F,
    viewBox: I = "0 0 24 24"
  } = C, B = $t(C, dL), J = /* @__PURE__ */ W.isValidElement(x) && x.type === "svg", ie = q({}, C, {
    color: S,
    component: L,
    fontSize: _,
    instanceFontSize: h.fontSize,
    inheritViewBox: K,
    viewBox: I,
    hasSvgAsChild: J
  }), $ = {};
  K || ($.viewBox = I);
  const he = pL(ie);
  return /* @__PURE__ */ Re.jsxs(vL, q({
    as: L,
    className: zn(he.root, R),
    focusable: "false",
    color: M,
    "aria-hidden": F ? void 0 : !0,
    role: F ? "img" : void 0,
    ref: y
  }, $, B, J && x.props, {
    ownerState: ie,
    children: [J ? x.props.children : x, F ? /* @__PURE__ */ Re.jsx("title", {
      children: F
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (CE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: c.oneOfType([c.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: c.oneOfType([c.oneOf(["inherit", "large", "medium", "small"]), c.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: c.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: c.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: c.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: c.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: c.string
});
CE.muiName = "SvgIcon";
const Lx = CE;
function hL(p, h) {
  function y(C, x) {
    return /* @__PURE__ */ Re.jsx(Lx, q({
      "data-testid": `${h}Icon`,
      ref: x
    }, C, {
      children: p
    }));
  }
  return process.env.NODE_ENV !== "production" && (y.displayName = `${h}Icon`), y.muiName = Lx.muiName, /* @__PURE__ */ W.memo(/* @__PURE__ */ W.forwardRef(y));
}
const mL = hL(/* @__PURE__ */ Re.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), yL = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], gL = ["root"], SL = (p) => {
  const {
    classes: h
  } = p;
  return h;
}, TE = {
  name: "MuiSelect",
  overridesResolver: (p, h) => h.root,
  shouldForwardProp: (p) => Cs(p) && p !== "variant",
  slot: "Root"
}, EL = Tt(a1, TE)(""), bL = Tt(l1, TE)(""), CL = Tt(i1, TE)(""), xE = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    name: "MuiSelect",
    props: h
  }), {
    autoWidth: x = !1,
    children: R,
    classes: S = {},
    className: L,
    defaultOpen: _ = !1,
    displayEmpty: M = !1,
    IconComponent: K = mL,
    id: F,
    input: I,
    inputProps: B,
    label: J,
    labelId: ie,
    MenuProps: $,
    multiple: he = !1,
    native: ye = !1,
    onClose: Y,
    onOpen: Q,
    open: te,
    renderValue: ce,
    SelectDisplayProps: re,
    variant: De = "outlined"
  } = C, $e = $t(C, yL), Ae = ye ? tL : cL, Me = wf(), Ve = Rf({
    props: C,
    muiFormControl: Me,
    states: ["variant", "error"]
  }), de = Ve.variant || De, me = q({}, C, {
    variant: de,
    classes: S
  }), Te = SL(me), Ce = $t(Te, gL), Fe = I || {
    standard: /* @__PURE__ */ Re.jsx(EL, {
      ownerState: me
    }),
    outlined: /* @__PURE__ */ Re.jsx(bL, {
      label: J,
      ownerState: me
    }),
    filled: /* @__PURE__ */ Re.jsx(CL, {
      ownerState: me
    })
  }[de], G = ti(y, Fe.ref);
  return /* @__PURE__ */ Re.jsx(W.Fragment, {
    children: /* @__PURE__ */ W.cloneElement(Fe, q({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: Ae,
      inputProps: q({
        children: R,
        error: Ve.error,
        IconComponent: K,
        variant: de,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: he
      }, ye ? {
        id: F
      } : {
        autoWidth: x,
        defaultOpen: _,
        displayEmpty: M,
        labelId: ie,
        MenuProps: $,
        onClose: Y,
        onOpen: Q,
        open: te,
        renderValue: ce,
        SelectDisplayProps: q({
          id: F
        }, re)
      }, B, {
        classes: B ? dE(Ce, B.classes) : Ce
      }, I ? I.props.inputProps : {})
    }, he && ye && de === "outlined" ? {
      notched: !0
    } : {}, {
      ref: G,
      className: zn(Fe.props.className, L, Te.root)
    }, !I && {
      variant: de
    }, $e))
  });
});
process.env.NODE_ENV !== "production" && (xE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: c.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: c.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: c.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: c.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: c.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: c.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: c.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: c.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: c.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: c.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: c.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: c.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: c.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: c.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: c.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: c.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: c.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: c.oneOfType([c.oneOf([""]), c.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
xE.muiName = "Select";
const TL = xE;
function xL(p) {
  return pr("MuiTextField", p);
}
vr("MuiTextField", ["root"]);
const RL = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], wL = {
  standard: a1,
  filled: i1,
  outlined: l1
}, OL = (p) => {
  const {
    classes: h
  } = p;
  return hr({
    root: ["root"]
  }, xL, h);
}, DL = Tt(BM, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (p, h) => h.root
})({}), k1 = /* @__PURE__ */ W.forwardRef(function(h, y) {
  const C = kr({
    props: h,
    name: "MuiTextField"
  }), {
    autoComplete: x,
    autoFocus: R = !1,
    children: S,
    className: L,
    color: _ = "primary",
    defaultValue: M,
    disabled: K = !1,
    error: F = !1,
    FormHelperTextProps: I,
    fullWidth: B = !1,
    helperText: J,
    id: ie,
    InputLabelProps: $,
    inputProps: he,
    InputProps: ye,
    inputRef: Y,
    label: Q,
    maxRows: te,
    minRows: ce,
    multiline: re = !1,
    name: De,
    onBlur: $e,
    onChange: Ae,
    onFocus: Me,
    placeholder: Ve,
    required: de = !1,
    rows: me,
    select: Te = !1,
    SelectProps: Ce,
    type: Fe,
    value: G,
    variant: pe = "outlined"
  } = C, fe = $t(C, RL), it = q({}, C, {
    autoFocus: R,
    color: _,
    disabled: K,
    error: F,
    fullWidth: B,
    multiline: re,
    required: de,
    select: Te,
    variant: pe
  }), Ze = OL(it);
  process.env.NODE_ENV !== "production" && Te && !S && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const ht = {};
  pe === "outlined" && ($ && typeof $.shrink < "u" && (ht.notched = $.shrink), ht.label = Q), Te && ((!Ce || !Ce.native) && (ht.id = void 0), ht["aria-describedby"] = void 0);
  const lt = Hx(ie), kt = J && lt ? `${lt}-helper-text` : void 0, vt = Q && lt ? `${lt}-label` : void 0, rn = wL[pe], Vt = /* @__PURE__ */ Re.jsx(rn, q({
    "aria-describedby": kt,
    autoComplete: x,
    autoFocus: R,
    defaultValue: M,
    fullWidth: B,
    multiline: re,
    name: De,
    rows: me,
    maxRows: te,
    minRows: ce,
    type: Fe,
    value: G,
    id: lt,
    inputRef: Y,
    onBlur: $e,
    onChange: Ae,
    onFocus: Me,
    placeholder: Ve,
    inputProps: he
  }, ht, ye));
  return /* @__PURE__ */ Re.jsxs(DL, q({
    className: zn(Ze.root, L),
    disabled: K,
    error: F,
    fullWidth: B,
    ref: y,
    required: de,
    color: _,
    variant: pe,
    ownerState: it
  }, fe, {
    children: [Q != null && Q !== "" && /* @__PURE__ */ Re.jsx(jM, q({
      htmlFor: lt,
      id: vt
    }, $, {
      children: Q
    })), Te ? /* @__PURE__ */ Re.jsx(TL, q({
      "aria-describedby": kt,
      id: lt,
      labelId: vt,
      value: G,
      input: Vt
    }, Ce, {
      children: S
    })) : Vt, J && /* @__PURE__ */ Re.jsx(KM, q({
      id: kt
    }, I, {
      children: J
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (k1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * @ignore
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: c.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: c.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The helper text content.
   */
  helperText: c.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: c.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: c.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: c.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ou,
  /**
   * The label content.
   */
  label: c.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: c.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: c.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: c.object,
  /**
   * The size of the component.
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const kL = k1, NL = (p) => /* @__PURE__ */ Re.jsx(kL, { ...p }), jL = ({
  name: p,
  rules: h,
  defaultValue: y,
  disabled: C,
  placeholder: x,
  type: R = "text",
  variant: S = "outlined",
  label: L
}) => {
  const { control: _ } = mN();
  return /* @__PURE__ */ Re.jsx(
    yN,
    {
      name: p,
      control: _,
      defaultValue: y,
      disabled: C,
      rules: h,
      render: ({ field: M }) => /* @__PURE__ */ Re.jsx(
        NL,
        {
          field: M,
          type: R,
          placeholder: x,
          defaultValue: y,
          variant: S,
          label: L
        }
      )
    }
  );
};
export {
  jL as Input
};
