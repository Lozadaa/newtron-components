import { r as l, R as no, j as R } from "./jsx-runtime-7c16e54c.js";
import { _ as b, a as Y, P as n, g as ao, c as C, b as to } from "./createTheme-e8cea0f8.js";
import { _ as he, m as To, a as $, g as Z, p as J, h as N, i as Q, b as $o, e as io, r as ge, j as be, k as so, l as me, q as ve, t as So, c as Do, o as ye } from "./TransitionGroupContext-be555fdc.js";
import "./_commonjsHelpers-d4512b9c.js";
let lo = !0, mo = !1, Po;
const xe = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ce(o) {
  const {
    type: e,
    tagName: t
  } = o;
  return !!(t === "INPUT" && xe[e] && !o.readOnly || t === "TEXTAREA" && !o.readOnly || o.isContentEditable);
}
function Re(o) {
  o.metaKey || o.altKey || o.ctrlKey || (lo = !0);
}
function bo() {
  lo = !1;
}
function Ee() {
  this.visibilityState === "hidden" && mo && (lo = !0);
}
function Ie(o) {
  o.addEventListener("keydown", Re, !0), o.addEventListener("mousedown", bo, !0), o.addEventListener("pointerdown", bo, !0), o.addEventListener("touchstart", bo, !0), o.addEventListener("visibilitychange", Ee, !0);
}
function Te(o) {
  const {
    target: e
  } = o;
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return lo || Ce(e);
}
function $e() {
  const o = l.useCallback((i) => {
    i != null && Ie(i.ownerDocument);
  }, []), e = l.useRef(!1);
  function t() {
    return e.current ? (mo = !0, window.clearTimeout(Po), Po = window.setTimeout(() => {
      mo = !1;
    }, 100), e.current = !1, !0) : !1;
  }
  function a(i) {
    return Te(i) ? (e.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: e,
    onFocus: a,
    onBlur: t,
    ref: o
  };
}
function Pe(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function yo(o, e) {
  var t = function(r) {
    return e && l.isValidElement(r) ? e(r) : r;
  }, a = /* @__PURE__ */ Object.create(null);
  return o && l.Children.map(o, function(i) {
    return i;
  }).forEach(function(i) {
    a[i.key] = t(i);
  }), a;
}
function Me(o, e) {
  o = o || {}, e = e || {};
  function t(f) {
    return f in e ? e[f] : o[f];
  }
  var a = /* @__PURE__ */ Object.create(null), i = [];
  for (var r in o)
    r in e ? i.length && (a[r] = i, i = []) : i.push(r);
  var s, u = {};
  for (var c in e) {
    if (a[c])
      for (s = 0; s < a[c].length; s++) {
        var p = a[c][s];
        u[a[c][s]] = t(p);
      }
    u[c] = t(c);
  }
  for (s = 0; s < i.length; s++)
    u[i[s]] = t(i[s]);
  return u;
}
function X(o, e, t) {
  return t[e] != null ? t[e] : o.props[e];
}
function Be(o, e) {
  return yo(o.children, function(t) {
    return l.cloneElement(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: X(t, "appear", o),
      enter: X(t, "enter", o),
      exit: X(t, "exit", o)
    });
  });
}
function ke(o, e, t) {
  var a = yo(o.children), i = Me(e, a);
  return Object.keys(i).forEach(function(r) {
    var s = i[r];
    if (l.isValidElement(s)) {
      var u = r in e, c = r in a, p = e[r], f = l.isValidElement(p) && !p.props.in;
      c && (!u || f) ? i[r] = l.cloneElement(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: X(s, "exit", o),
        enter: X(s, "enter", o)
      }) : !c && u && !f ? i[r] = l.cloneElement(s, {
        in: !1
      }) : c && u && l.isValidElement(p) && (i[r] = l.cloneElement(s, {
        onExited: t.bind(null, s),
        in: p.props.in,
        exit: X(s, "exit", o),
        enter: X(s, "enter", o)
      }));
    }
  }), i;
}
var ze = Object.values || function(o) {
  return Object.keys(o).map(function(e) {
    return o[e];
  });
}, Le = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, xo = /* @__PURE__ */ function(o) {
  he(e, o);
  function e(a, i) {
    var r;
    r = o.call(this, a, i) || this;
    var s = r.handleExited.bind(Pe(r));
    return r.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, r;
  }
  var t = e.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, e.getDerivedStateFromProps = function(i, r) {
    var s = r.children, u = r.handleExited, c = r.firstRender;
    return {
      children: c ? Be(i, u) : ke(i, s, u),
      firstRender: !1
    };
  }, t.handleExited = function(i, r) {
    var s = yo(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(r), this.mounted && this.setState(function(u) {
      var c = b({}, u.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, t.render = function() {
    var i = this.props, r = i.component, s = i.childFactory, u = Y(i, ["component", "childFactory"]), c = this.state.contextValue, p = ze(this.state.children).map(s);
    return delete u.appear, delete u.enter, delete u.exit, r === null ? /* @__PURE__ */ no.createElement(To.Provider, {
      value: c
    }, p) : /* @__PURE__ */ no.createElement(To.Provider, {
      value: c
    }, /* @__PURE__ */ no.createElement(r, u, p));
  }, e;
}(no.Component);
xo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
xo.defaultProps = Le;
const Ne = xo;
function jo(o) {
  const {
    className: e,
    classes: t,
    pulsate: a = !1,
    rippleX: i,
    rippleY: r,
    rippleSize: s,
    in: u,
    onExited: c,
    timeout: p
  } = o, [f, y] = l.useState(!1), x = $(e, t.ripple, t.rippleVisible, a && t.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + r,
    left: -(s / 2) + i
  }, h = $(t.child, f && t.childLeaving, a && t.childPulsate);
  return !u && !f && y(!0), l.useEffect(() => {
    if (!u && c != null) {
      const v = setTimeout(c, p);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, u, p]), /* @__PURE__ */ R.jsx("span", {
    className: x,
    style: m,
    children: /* @__PURE__ */ R.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const Ve = Z("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), B = Ve, Oe = ["center", "classes", "className"];
let co = (o) => o, Mo, Bo, ko, zo;
const vo = 550, Se = 80, De = J(Mo || (Mo = co`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), je = J(Bo || (Bo = co`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Fe = J(ko || (ko = co`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), _e = N("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Ue = N(jo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(zo || (zo = co`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), B.rippleVisible, De, vo, ({
  theme: o
}) => o.transitions.easing.easeInOut, B.ripplePulsate, ({
  theme: o
}) => o.transitions.duration.shorter, B.child, B.childLeaving, je, vo, ({
  theme: o
}) => o.transitions.easing.easeInOut, B.childPulsate, Fe, ({
  theme: o
}) => o.transitions.easing.easeInOut), Fo = /* @__PURE__ */ l.forwardRef(function(e, t) {
  const a = Q({
    props: e,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: r = {},
    className: s
  } = a, u = Y(a, Oe), [c, p] = l.useState([]), f = l.useRef(0), y = l.useRef(null);
  l.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [c]);
  const x = l.useRef(!1), m = l.useRef(0), h = l.useRef(null), v = l.useRef(null);
  l.useEffect(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const I = l.useCallback((g) => {
    const {
      pulsate: P,
      rippleX: E,
      rippleY: T,
      rippleSize: F,
      cb: K
    } = g;
    p((M) => [...M, /* @__PURE__ */ R.jsx(Ue, {
      classes: {
        ripple: $(r.ripple, B.ripple),
        rippleVisible: $(r.rippleVisible, B.rippleVisible),
        ripplePulsate: $(r.ripplePulsate, B.ripplePulsate),
        child: $(r.child, B.child),
        childLeaving: $(r.childLeaving, B.childLeaving),
        childPulsate: $(r.childPulsate, B.childPulsate)
      },
      timeout: vo,
      pulsate: P,
      rippleX: E,
      rippleY: T,
      rippleSize: F
    }, f.current)]), f.current += 1, y.current = K;
  }, [r]), k = l.useCallback((g = {}, P = {}, E = () => {
  }) => {
    const {
      pulsate: T = !1,
      center: F = i || P.pulsate,
      fakeElement: K = !1
      // For test purposes
    } = P;
    if ((g == null ? void 0 : g.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (x.current = !0);
    const M = K ? null : v.current, _ = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let O, U, W;
    if (F || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      O = Math.round(_.width / 2), U = Math.round(_.height / 2);
    else {
      const {
        clientX: G,
        clientY: S
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      O = Math.round(G - _.left), U = Math.round(S - _.top);
    }
    if (F)
      W = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const G = Math.max(Math.abs((M ? M.clientWidth : 0) - O), O) * 2 + 2, S = Math.max(Math.abs((M ? M.clientHeight : 0) - U), U) * 2 + 2;
      W = Math.sqrt(G ** 2 + S ** 2);
    }
    g != null && g.touches ? h.current === null && (h.current = () => {
      I({
        pulsate: T,
        rippleX: O,
        rippleY: U,
        rippleSize: W,
        cb: E
      });
    }, m.current = setTimeout(() => {
      h.current && (h.current(), h.current = null);
    }, Se)) : I({
      pulsate: T,
      rippleX: O,
      rippleY: U,
      rippleSize: W,
      cb: E
    });
  }, [i, I]), z = l.useCallback(() => {
    k({}, {
      pulsate: !0
    });
  }, [k]), V = l.useCallback((g, P) => {
    if (clearTimeout(m.current), (g == null ? void 0 : g.type) === "touchend" && h.current) {
      h.current(), h.current = null, m.current = setTimeout(() => {
        V(g, P);
      });
      return;
    }
    h.current = null, p((E) => E.length > 0 ? E.slice(1) : E), y.current = P;
  }, []);
  return l.useImperativeHandle(t, () => ({
    pulsate: z,
    start: k,
    stop: V
  }), [z, k, V]), /* @__PURE__ */ R.jsx(_e, b({
    className: $(B.root, r.root, s),
    ref: v
  }, u, {
    children: /* @__PURE__ */ R.jsx(Ne, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
const We = Fo;
function we(o) {
  return ao("MuiButtonBase", o);
}
const Ke = Z("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ge = Ke, Ae = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Xe = (o) => {
  const {
    disabled: e,
    focusVisible: t,
    focusVisibleClassName: a,
    classes: i
  } = o, s = so({
    root: ["root", e && "disabled", t && "focusVisible"]
  }, we, i);
  return t && a && (s.root += ` ${a}`), s;
}, Ye = N("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (o, e) => e.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Ge.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _o = /* @__PURE__ */ l.forwardRef(function(e, t) {
  const a = Q({
    props: e,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: r = !1,
    children: s,
    className: u,
    component: c = "button",
    disabled: p = !1,
    disableRipple: f = !1,
    disableTouchRipple: y = !1,
    focusRipple: x = !1,
    LinkComponent: m = "a",
    onBlur: h,
    onClick: v,
    onContextMenu: I,
    onDragLeave: k,
    onFocus: z,
    onFocusVisible: V,
    onKeyDown: g,
    onKeyUp: P,
    onMouseDown: E,
    onMouseLeave: T,
    onMouseUp: F,
    onTouchEnd: K,
    onTouchMove: M,
    onTouchStart: _,
    tabIndex: O = 0,
    TouchRippleProps: U,
    touchRippleRef: W,
    type: G
  } = a, S = Y(a, Ae), q = l.useRef(null), L = l.useRef(null), Yo = $o(L, W), {
    isFocusVisibleRef: Co,
    onFocus: qo,
    onBlur: Ho,
    ref: Zo
  } = $e(), [A, oo] = l.useState(!1);
  p && A && oo(!1), l.useImperativeHandle(i, () => ({
    focusVisible: () => {
      oo(!0), q.current.focus();
    }
  }), []);
  const [po, Jo] = l.useState(!1);
  l.useEffect(() => {
    Jo(!0);
  }, []);
  const fo = po && !f && !p;
  l.useEffect(() => {
    A && x && !f && po && L.current.pulsate();
  }, [f, x, A, po]);
  function D(d, Eo, fe = y) {
    return io((Io) => (Eo && Eo(Io), !fe && L.current && L.current[d](Io), !0));
  }
  const Qo = D("start", E), oe = D("stop", I), ee = D("stop", k), ne = D("stop", F), te = D("stop", (d) => {
    A && d.preventDefault(), T && T(d);
  }), ie = D("start", _), re = D("stop", K), ae = D("stop", M), se = D("stop", (d) => {
    Ho(d), Co.current === !1 && oo(!1), h && h(d);
  }, !1), le = io((d) => {
    q.current || (q.current = d.currentTarget), qo(d), Co.current === !0 && (oo(!0), V && V(d)), z && z(d);
  }), ho = () => {
    const d = q.current;
    return c && c !== "button" && !(d.tagName === "A" && d.href);
  }, go = l.useRef(!1), ce = io((d) => {
    x && !go.current && A && L.current && d.key === " " && (go.current = !0, L.current.stop(d, () => {
      L.current.start(d);
    })), d.target === d.currentTarget && ho() && d.key === " " && d.preventDefault(), g && g(d), d.target === d.currentTarget && ho() && d.key === "Enter" && !p && (d.preventDefault(), v && v(d));
  }), ue = io((d) => {
    x && d.key === " " && L.current && A && !d.defaultPrevented && (go.current = !1, L.current.stop(d, () => {
      L.current.pulsate(d);
    })), P && P(d), v && d.target === d.currentTarget && ho() && d.key === " " && !d.defaultPrevented && v(d);
  });
  let eo = c;
  eo === "button" && (S.href || S.to) && (eo = m);
  const H = {};
  eo === "button" ? (H.type = G === void 0 ? "button" : G, H.disabled = p) : (!S.href && !S.to && (H.role = "button"), p && (H["aria-disabled"] = p));
  const de = $o(t, Zo, q);
  process.env.NODE_ENV !== "production" && l.useEffect(() => {
    fo && !L.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [fo]);
  const Ro = b({}, a, {
    centerRipple: r,
    component: c,
    disabled: p,
    disableRipple: f,
    disableTouchRipple: y,
    focusRipple: x,
    tabIndex: O,
    focusVisible: A
  }), pe = Xe(Ro);
  return /* @__PURE__ */ R.jsxs(Ye, b({
    as: eo,
    className: $(pe.root, u),
    ownerState: Ro,
    onBlur: se,
    onClick: v,
    onContextMenu: oe,
    onFocus: le,
    onKeyDown: ce,
    onKeyUp: ue,
    onMouseDown: Qo,
    onMouseLeave: te,
    onMouseUp: ne,
    onDragLeave: ee,
    onTouchEnd: re,
    onTouchMove: ae,
    onTouchStart: ie,
    ref: de,
    tabIndex: p ? -1 : O,
    type: G
  }, H, S, {
    children: [s, fo ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ R.jsx(We, b({
        ref: Yo,
        center: r
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ge,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: be,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
const qe = _o;
function He(o) {
  return ao("MuiButton", o);
}
const Ze = Z("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ro = Ze, Uo = /* @__PURE__ */ l.createContext({});
process.env.NODE_ENV !== "production" && (Uo.displayName = "ButtonGroupContext");
const Je = Uo, Wo = /* @__PURE__ */ l.createContext(void 0);
process.env.NODE_ENV !== "production" && (Wo.displayName = "ButtonGroupButtonContext");
const Qe = Wo, on = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], en = (o) => {
  const {
    color: e,
    disableElevation: t,
    fullWidth: a,
    size: i,
    variant: r,
    classes: s
  } = o, u = {
    root: ["root", r, `${r}${C(e)}`, `size${C(i)}`, `${r}Size${C(i)}`, e === "inherit" && "colorInherit", t && "disableElevation", a && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${C(i)}`],
    endIcon: ["endIcon", `iconSize${C(i)}`]
  }, c = so(u, He, s);
  return b({}, s, c);
}, wo = (o) => b({}, o.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, o.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, o.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), nn = N(qe, {
  shouldForwardProp: (o) => me(o) || o === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.root, e[t.variant], e[`${t.variant}${C(t.color)}`], e[`size${C(t.size)}`], e[`${t.variant}Size${C(t.size)}`], t.color === "inherit" && e.colorInherit, t.disableElevation && e.disableElevation, t.fullWidth && e.fullWidth];
  }
})(({
  theme: o,
  ownerState: e
}) => {
  var t, a;
  const i = o.palette.mode === "light" ? o.palette.grey[300] : o.palette.grey[800], r = o.palette.mode === "light" ? o.palette.grey.A100 : o.palette.grey[700];
  return b({}, o.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (o.vars || o).shape.borderRadius,
    transition: o.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: o.transitions.duration.short
    }),
    "&:hover": b({
      textDecoration: "none",
      backgroundColor: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : to(o.palette.text.primary, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "text" && e.color !== "inherit" && {
      backgroundColor: o.vars ? `rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : to(o.palette[e.color].main, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "outlined" && e.color !== "inherit" && {
      border: `1px solid ${(o.vars || o).palette[e.color].main}`,
      backgroundColor: o.vars ? `rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : to(o.palette[e.color].main, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "contained" && {
      backgroundColor: o.vars ? o.vars.palette.Button.inheritContainedHoverBg : r,
      boxShadow: (o.vars || o).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (o.vars || o).shadows[2],
        backgroundColor: (o.vars || o).palette.grey[300]
      }
    }, e.variant === "contained" && e.color !== "inherit" && {
      backgroundColor: (o.vars || o).palette[e.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (o.vars || o).palette[e.color].main
      }
    }),
    "&:active": b({}, e.variant === "contained" && {
      boxShadow: (o.vars || o).shadows[8]
    }),
    [`&.${ro.focusVisible}`]: b({}, e.variant === "contained" && {
      boxShadow: (o.vars || o).shadows[6]
    }),
    [`&.${ro.disabled}`]: b({
      color: (o.vars || o).palette.action.disabled
    }, e.variant === "outlined" && {
      border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`
    }, e.variant === "contained" && {
      color: (o.vars || o).palette.action.disabled,
      boxShadow: (o.vars || o).shadows[0],
      backgroundColor: (o.vars || o).palette.action.disabledBackground
    })
  }, e.variant === "text" && {
    padding: "6px 8px"
  }, e.variant === "text" && e.color !== "inherit" && {
    color: (o.vars || o).palette[e.color].main
  }, e.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, e.variant === "outlined" && e.color !== "inherit" && {
    color: (o.vars || o).palette[e.color].main,
    border: o.vars ? `1px solid rgba(${o.vars.palette[e.color].mainChannel} / 0.5)` : `1px solid ${to(o.palette[e.color].main, 0.5)}`
  }, e.variant === "contained" && {
    color: o.vars ? (
      // this is safe because grey does not change between default light/dark mode
      o.vars.palette.text.primary
    ) : (t = (a = o.palette).getContrastText) == null ? void 0 : t.call(a, o.palette.grey[300]),
    backgroundColor: o.vars ? o.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (o.vars || o).shadows[2]
  }, e.variant === "contained" && e.color !== "inherit" && {
    color: (o.vars || o).palette[e.color].contrastText,
    backgroundColor: (o.vars || o).palette[e.color].main
  }, e.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, e.size === "small" && e.variant === "text" && {
    padding: "4px 5px",
    fontSize: o.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "text" && {
    padding: "8px 11px",
    fontSize: o.typography.pxToRem(15)
  }, e.size === "small" && e.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: o.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: o.typography.pxToRem(15)
  }, e.size === "small" && e.variant === "contained" && {
    padding: "4px 10px",
    fontSize: o.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "contained" && {
    padding: "8px 22px",
    fontSize: o.typography.pxToRem(15)
  }, e.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: o
}) => o.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${ro.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${ro.disabled}`]: {
    boxShadow: "none"
  }
}), tn = N("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.startIcon, e[`iconSize${C(t.size)}`]];
  }
})(({
  ownerState: o
}) => b({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, o.size === "small" && {
  marginLeft: -2
}, wo(o))), rn = N("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.endIcon, e[`iconSize${C(t.size)}`]];
  }
})(({
  ownerState: o
}) => b({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, o.size === "small" && {
  marginRight: -2
}, wo(o))), Ko = /* @__PURE__ */ l.forwardRef(function(e, t) {
  const a = l.useContext(Je), i = l.useContext(Qe), r = ve(a, e), s = Q({
    props: r,
    name: "MuiButton"
  }), {
    children: u,
    color: c = "primary",
    component: p = "button",
    className: f,
    disabled: y = !1,
    disableElevation: x = !1,
    disableFocusRipple: m = !1,
    endIcon: h,
    focusVisibleClassName: v,
    fullWidth: I = !1,
    size: k = "medium",
    startIcon: z,
    type: V,
    variant: g = "text"
  } = s, P = Y(s, on), E = b({}, s, {
    color: c,
    component: p,
    disabled: y,
    disableElevation: x,
    disableFocusRipple: m,
    fullWidth: I,
    size: k,
    type: V,
    variant: g
  }), T = en(E), F = z && /* @__PURE__ */ R.jsx(tn, {
    className: T.startIcon,
    ownerState: E,
    children: z
  }), K = h && /* @__PURE__ */ R.jsx(rn, {
    className: T.endIcon,
    ownerState: E,
    children: h
  }), M = i || "";
  return /* @__PURE__ */ R.jsxs(nn, b({
    ownerState: E,
    className: $(a.className, T.root, f, M),
    component: p,
    disabled: y,
    focusRipple: !m,
    focusVisibleClassName: $(T.focusVisible, v),
    ref: t,
    type: V
  }, P, {
    classes: T,
    children: [F, u, K]
  }));
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const Go = Ko;
function an(o) {
  return ao("MuiCircularProgress", o);
}
Z("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const sn = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let uo = (o) => o, Lo, No, Vo, Oo;
const w = 44, ln = J(Lo || (Lo = uo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), cn = J(No || (No = uo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), un = (o) => {
  const {
    classes: e,
    variant: t,
    color: a,
    disableShrink: i
  } = o, r = {
    root: ["root", t, `color${C(a)}`],
    svg: ["svg"],
    circle: ["circle", `circle${C(t)}`, i && "circleDisableShrink"]
  };
  return so(r, an, e);
}, dn = N("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.root, e[t.variant], e[`color${C(t.color)}`]];
  }
})(({
  ownerState: o,
  theme: e
}) => b({
  display: "inline-block"
}, o.variant === "determinate" && {
  transition: e.transitions.create("transform")
}, o.color !== "inherit" && {
  color: (e.vars || e).palette[o.color].main
}), ({
  ownerState: o
}) => o.variant === "indeterminate" && So(Vo || (Vo = uo`
      animation: ${0} 1.4s linear infinite;
    `), ln)), pn = N("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (o, e) => e.svg
})({
  display: "block"
  // Keeps the progress centered
}), fn = N("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.circle, e[`circle${C(t.variant)}`], t.disableShrink && e.circleDisableShrink];
  }
})(({
  ownerState: o,
  theme: e
}) => b({
  stroke: "currentColor"
}, o.variant === "determinate" && {
  transition: e.transitions.create("stroke-dashoffset")
}, o.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: o
}) => o.variant === "indeterminate" && !o.disableShrink && So(Oo || (Oo = uo`
      animation: ${0} 1.4s ease-in-out infinite;
    `), cn)), Ao = /* @__PURE__ */ l.forwardRef(function(e, t) {
  const a = Q({
    props: e,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: r = "primary",
    disableShrink: s = !1,
    size: u = 40,
    style: c,
    thickness: p = 3.6,
    value: f = 0,
    variant: y = "indeterminate"
  } = a, x = Y(a, sn), m = b({}, a, {
    color: r,
    disableShrink: s,
    size: u,
    thickness: p,
    value: f,
    variant: y
  }), h = un(m), v = {}, I = {}, k = {};
  if (y === "determinate") {
    const z = 2 * Math.PI * ((w - p) / 2);
    v.strokeDasharray = z.toFixed(3), k["aria-valuenow"] = Math.round(f), v.strokeDashoffset = `${((100 - f) / 100 * z).toFixed(3)}px`, I.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ R.jsx(dn, b({
    className: $(h.root, i),
    style: b({
      width: u,
      height: u
    }, I, c),
    ownerState: m,
    ref: t,
    role: "progressbar"
  }, k, x, {
    children: /* @__PURE__ */ R.jsx(pn, {
      className: h.svg,
      ownerState: m,
      viewBox: `${w / 2} ${w / 2} ${w} ${w}`,
      children: /* @__PURE__ */ R.jsx(fn, {
        className: h.circle,
        style: v,
        ownerState: m,
        cx: w,
        cy: w,
        r: (w - p) / 2,
        fill: "none",
        strokeWidth: p
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Do(n.bool, (o) => o.disableShrink && o.variant && o.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g. '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
const hn = Ao;
function gn(o) {
  return ao("MuiLoadingButton", o);
}
const bn = Z("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]), j = bn, mn = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"], vn = (o) => {
  const {
    loading: e,
    loadingPosition: t,
    classes: a
  } = o, i = {
    root: ["root", e && "loading"],
    startIcon: [e && `startIconLoading${C(t)}`],
    endIcon: [e && `endIconLoading${C(t)}`],
    loadingIndicator: ["loadingIndicator", e && `loadingIndicator${C(t)}`]
  }, r = so(i, gn, a);
  return b({}, a, r);
}, yn = (o) => o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as" && o !== "classes", xn = N(Go, {
  shouldForwardProp: (o) => yn(o) || o === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (o, e) => [e.root, e.startIconLoadingStart && {
    [`& .${j.startIconLoadingStart}`]: e.startIconLoadingStart
  }, e.endIconLoadingEnd && {
    [`& .${j.endIconLoadingEnd}`]: e.endIconLoadingEnd
  }]
})(({
  ownerState: o,
  theme: e
}) => b({
  [`& .${j.startIconLoadingStart}, & .${j.endIconLoadingEnd}`]: {
    transition: e.transitions.create(["opacity"], {
      duration: e.transitions.duration.short
    }),
    opacity: 0
  }
}, o.loadingPosition === "center" && {
  transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: e.transitions.duration.short
  }),
  [`&.${j.loading}`]: {
    color: "transparent"
  }
}, o.loadingPosition === "start" && o.fullWidth && {
  [`& .${j.startIconLoadingStart}, & .${j.endIconLoadingEnd}`]: {
    transition: e.transitions.create(["opacity"], {
      duration: e.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, o.loadingPosition === "end" && o.fullWidth && {
  [`& .${j.startIconLoadingStart}, & .${j.endIconLoadingEnd}`]: {
    transition: e.transitions.create(["opacity"], {
      duration: e.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
})), Cn = N("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (o, e) => {
    const {
      ownerState: t
    } = o;
    return [e.loadingIndicator, e[`loadingIndicator${C(t.loadingPosition)}`]];
  }
})(({
  theme: o,
  ownerState: e
}) => b({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, e.loadingPosition === "start" && (e.variant === "outlined" || e.variant === "contained") && {
  left: e.size === "small" ? 10 : 14
}, e.loadingPosition === "start" && e.variant === "text" && {
  left: 6
}, e.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (o.vars || o).palette.action.disabled
}, e.loadingPosition === "end" && (e.variant === "outlined" || e.variant === "contained") && {
  right: e.size === "small" ? 10 : 14
}, e.loadingPosition === "end" && e.variant === "text" && {
  right: 6
}, e.loadingPosition === "start" && e.fullWidth && {
  position: "relative",
  left: -10
}, e.loadingPosition === "end" && e.fullWidth && {
  position: "relative",
  right: -10
})), Xo = /* @__PURE__ */ l.forwardRef(function(e, t) {
  const a = Q({
    props: e,
    name: "MuiLoadingButton"
  }), {
    children: i,
    disabled: r = !1,
    id: s,
    loading: u = !1,
    loadingIndicator: c,
    loadingPosition: p = "center",
    variant: f = "text"
  } = a, y = Y(a, mn), x = ye(s), m = c ?? /* @__PURE__ */ R.jsx(hn, {
    "aria-labelledby": x,
    color: "inherit",
    size: 16
  }), h = b({}, a, {
    disabled: r,
    loading: u,
    loadingIndicator: m,
    loadingPosition: p,
    variant: f
  }), v = vn(h), I = u ? /* @__PURE__ */ R.jsx(Cn, {
    className: v.loadingIndicator,
    ownerState: h,
    children: m
  }) : null;
  return /* @__PURE__ */ R.jsxs(xn, b({
    disabled: r || u,
    id: x,
    ref: t
  }, y, {
    variant: f,
    classes: v,
    ownerState: h,
    children: [h.loadingPosition === "end" ? i : I, h.loadingPosition === "end" ? I : i]
  }));
});
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: Do(n.oneOf(["start", "end", "center"]), (o) => o.loadingPosition === "start" && !o.startIcon ? new Error('MUI: The loadingPosition="start" should be used in combination with startIcon.') : o.loadingPosition === "end" && !o.endIcon ? new Error('MUI: The loadingPosition="end" should be used in combination with endIcon.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const Rn = Xo, Mn = ({
  id: o,
  color: e = "primary",
  children: t,
  disabled: a,
  size: i = "large",
  fullWidth: r,
  variant: s = "outlined",
  type: u = "button",
  isLoading: c,
  onClick: p
}) => {
  const f = c ? Rn : Go;
  return /* @__PURE__ */ R.jsx(
    f,
    {
      id: o,
      color: e,
      type: u,
      size: i,
      onClick: p,
      fullWidth: r,
      variant: s,
      loading: c,
      disabled: !!a,
      children: t
    }
  );
};
export {
  Mn as Button
};
