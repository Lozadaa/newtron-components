import { R as w } from "./jsx-runtime-7c16e54c.js";
var ae = (e) => e.type === "checkbox", re = (e) => e instanceof Date, R = (e) => e == null;
const Ze = (e) => typeof e == "object";
var C = (e) => !R(e) && !Array.isArray(e) && Ze(e) && !re(e), et = (e) => C(e) && e.target ? ae(e.target) ? e.target.checked : e.target.value : e, At = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, tt = (e, i) => e.has(At(i)), Ft = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return C(i) && i.hasOwnProperty("isPrototypeOf");
}, pe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(pe && (e instanceof Blob || e instanceof FileList)) && (r || C(e)))
    if (i = r ? [] : {}, !r && !Ft(e))
      i = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (i[s] = N(e[s]));
  else
    return e;
  return i;
}
var le = (e) => Array.isArray(e) ? e.filter(Boolean) : [], p = (e) => e === void 0, f = (e, i, r) => {
  if (!i || !C(e))
    return r;
  const s = le(i.split(/[,[\].]+?/)).reduce((n, l) => R(n) ? n : n[l], e);
  return p(s) || s === e ? p(e[i]) ? r : e[i] : s;
}, z = (e) => typeof e == "boolean";
const de = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, I = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, G = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, rt = w.createContext(null), Ce = () => w.useContext(rt), It = (e) => {
  const { children: i, ...r } = e;
  return w.createElement(rt.Provider, { value: r }, i);
};
var st = (e, i, r, s = !0) => {
  const n = {
    defaultValues: i._defaultValues
  };
  for (const l in e)
    Object.defineProperty(n, l, {
      get: () => {
        const d = l;
        return i._proxyFormState[d] !== I.all && (i._proxyFormState[d] = !s || I.all), r && (r[d] = !0), e[d];
      }
    });
  return n;
}, B = (e) => C(e) && !Object.keys(e).length, it = (e, i, r, s) => {
  r(e);
  const { name: n, ...l } = e;
  return B(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find((d) => i[d] === (!s || I.all));
}, ce = (e) => Array.isArray(e) ? e : [e], ut = (e, i, r) => !e || !i || e === i || ce(e).some((s) => s && (r ? s === i : s.startsWith(i) || i.startsWith(s)));
function Oe(e) {
  const i = w.useRef(e);
  i.current = e, w.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function xt(e) {
  const i = Ce(), { control: r = i.control, disabled: s, name: n, exact: l } = e || {}, [d, V] = w.useState(r._formState), g = w.useRef(!0), D = w.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), m = w.useRef(n);
  return m.current = n, Oe({
    disabled: s,
    next: (F) => g.current && ut(m.current, F.name, l) && it(F, D.current, r._updateFormState) && V({
      ...r._formState,
      ...F
    }),
    subject: r._subjects.state
  }), w.useEffect(() => (g.current = !0, D.current.isValid && r._updateValid(!0), () => {
    g.current = !1;
  }), [r]), st(d, r, D.current, !1);
}
var j = (e) => typeof e == "string", nt = (e, i, r, s, n) => j(e) ? (s && i.watch.add(e), f(r, e, n)) : Array.isArray(e) ? e.map((l) => (s && i.watch.add(l), f(r, l))) : (s && (i.watchAll = !0), r);
function mt(e) {
  const i = Ce(), { control: r = i.control, name: s, defaultValue: n, disabled: l, exact: d } = e || {}, V = w.useRef(s);
  V.current = s, Oe({
    disabled: l,
    subject: r._subjects.values,
    next: (m) => {
      ut(V.current, m.name, d) && D(N(nt(V.current, r._names, m.values || r._formValues, !1, n)));
    }
  });
  const [g, D] = w.useState(r._getWatch(s, n));
  return w.useEffect(() => r._removeUnmounted()), g;
}
var Le = (e) => /^\w*$/.test(e), at = (e) => le(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function x(e, i, r) {
  let s = -1;
  const n = Le(i) ? [i] : at(i), l = n.length, d = l - 1;
  for (; ++s < l; ) {
    const V = n[s];
    let g = r;
    if (s !== d) {
      const D = e[V];
      g = C(D) || Array.isArray(D) ? D : isNaN(+n[s + 1]) ? {} : [];
    }
    e[V] = g, e = e[V];
  }
  return e;
}
function wt(e) {
  const i = Ce(), { name: r, disabled: s, control: n = i.control, shouldUnregister: l } = e, d = tt(n._names.array, r), V = mt({
    control: n,
    name: r,
    defaultValue: f(n._formValues, r, f(n._defaultValues, r, e.defaultValue)),
    exact: !0
  }), g = xt({
    control: n,
    name: r
  }), D = w.useRef(n.register(r, {
    ...e.rules,
    value: V
  }));
  return D.current = n.register(r, e.rules), w.useEffect(() => {
    const m = n._options.shouldUnregister || l, F = (v, q) => {
      const T = f(n._fields, v);
      T && (T._f.mount = q);
    };
    if (F(r, !0), m) {
      const v = N(f(n._options.defaultValues, r));
      x(n._defaultValues, r, v), p(f(n._formValues, r)) && x(n._formValues, r, v);
    }
    return () => {
      (d ? m && !n._state.action : m) ? n.unregister(r) : F(r, !1);
    };
  }, [r, n, d, l]), w.useEffect(() => {
    f(n._fields, r) && n._updateDisabledField({
      disabled: s,
      fields: n._fields,
      name: r
    });
  }, [s, r, n]), {
    field: {
      name: r,
      value: V,
      ...z(s) ? { disabled: s } : {},
      onChange: w.useCallback((m) => D.current.onChange({
        target: {
          value: et(m),
          name: r
        },
        type: de.CHANGE
      }), [r]),
      onBlur: w.useCallback(() => D.current.onBlur({
        target: {
          value: f(n._formValues, r),
          name: r
        },
        type: de.BLUR
      }), [r, n]),
      ref: (m) => {
        const F = f(n._fields, r);
        F && m && (F._f.ref = {
          focus: () => m.focus(),
          select: () => m.select(),
          setCustomValidity: (v) => m.setCustomValidity(v),
          reportValidity: () => m.reportValidity()
        });
      }
    },
    formState: g,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!f(g.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!f(g.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!f(g.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => f(g.errors, r)
      }
    })
  };
}
const qt = (e) => e.render(wt(e));
var Dt = (e, i, r, s, n) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [s]: n || !0
  }
} : {};
const Ee = (e, i, r) => {
  for (const s of r || Object.keys(e)) {
    const n = f(e, s);
    if (n) {
      const { _f: l, ...d } = n;
      if (l && i(l.name)) {
        if (l.ref.focus) {
          l.ref.focus();
          break;
        } else if (l.refs && l.refs[0].focus) {
          l.refs[0].focus();
          break;
        }
      } else
        C(d) && Ee(d, i);
    }
  }
};
var $e = (e) => ({
  isOnSubmit: !e || e === I.onSubmit,
  isOnBlur: e === I.onBlur,
  isOnChange: e === I.onChange,
  isOnAll: e === I.all,
  isOnTouch: e === I.onTouched
}), Ke = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length)))), St = (e, i, r) => {
  const s = le(f(e, r));
  return x(s, "root", i[r]), x(e, r, s), e;
}, Te = (e) => e.type === "file", J = (e) => typeof e == "function", ye = (e) => {
  if (!pe)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, fe = (e) => j(e), Re = (e) => e.type === "radio", he = (e) => e instanceof RegExp;
const Ge = {
  value: !1,
  isValid: !1
}, ze = { value: !0, isValid: !0 };
var lt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !p(e[0].attributes.value) ? p(e[0].value) || e[0].value === "" ? ze : { value: e[0].value, isValid: !0 } : ze
    ) : Ge;
  }
  return Ge;
};
const Je = {
  isValid: !1,
  value: null
};
var ot = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, Je) : Je;
function Qe(e, i, r = "validate") {
  if (fe(e) || Array.isArray(e) && e.every(fe) || z(e) && !e)
    return {
      type: r,
      message: fe(e) ? e : "",
      ref: i
    };
}
var te = (e) => C(e) && !he(e) ? e : {
  value: e,
  message: ""
}, Xe = async (e, i, r, s, n) => {
  const { ref: l, refs: d, required: V, maxLength: g, minLength: D, min: m, max: F, pattern: v, validate: q, name: T, valueAsNumber: _e, mount: oe, disabled: Ve } = e._f, _ = f(i, T);
  if (!oe || Ve)
    return {};
  const P = d ? d[0] : l, $ = (A) => {
    s && P.reportValidity && (P.setCustomValidity(z(A) ? "" : A || ""), P.reportValidity());
  }, O = {}, se = Re(l), Z = ae(l), be = se || Z, W = (_e || Te(l)) && p(l.value) && p(_) || ye(l) && l.value === "" || _ === "" || Array.isArray(_) && !_.length, Q = Dt.bind(null, T, r, O), K = (A, b, k, U = G.maxLength, M = G.minLength) => {
    const H = A ? b : k;
    O[T] = {
      type: A ? U : M,
      message: H,
      ref: l,
      ...Q(A ? U : M, H)
    };
  };
  if (n ? !Array.isArray(_) || !_.length : V && (!be && (W || R(_)) || z(_) && !_ || Z && !lt(d).isValid || se && !ot(d).isValid)) {
    const { value: A, message: b } = fe(V) ? { value: !!V, message: V } : te(V);
    if (A && (O[T] = {
      type: G.required,
      message: b,
      ref: P,
      ...Q(G.required, b)
    }, !r))
      return $(b), O;
  }
  if (!W && (!R(m) || !R(F))) {
    let A, b;
    const k = te(F), U = te(m);
    if (!R(_) && !isNaN(_)) {
      const M = l.valueAsNumber || _ && +_;
      R(k.value) || (A = M > k.value), R(U.value) || (b = M < U.value);
    } else {
      const M = l.valueAsDate || new Date(_), H = (ue) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ue), X = l.type == "time", ie = l.type == "week";
      j(k.value) && _ && (A = X ? H(_) > H(k.value) : ie ? _ > k.value : M > new Date(k.value)), j(U.value) && _ && (b = X ? H(_) < H(U.value) : ie ? _ < U.value : M < new Date(U.value));
    }
    if ((A || b) && (K(!!A, k.message, U.message, G.max, G.min), !r))
      return $(O[T].message), O;
  }
  if ((g || D) && !W && (j(_) || n && Array.isArray(_))) {
    const A = te(g), b = te(D), k = !R(A.value) && _.length > +A.value, U = !R(b.value) && _.length < +b.value;
    if ((k || U) && (K(k, A.message, b.message), !r))
      return $(O[T].message), O;
  }
  if (v && !W && j(_)) {
    const { value: A, message: b } = te(v);
    if (he(A) && !_.match(A) && (O[T] = {
      type: G.pattern,
      message: b,
      ref: l,
      ...Q(G.pattern, b)
    }, !r))
      return $(b), O;
  }
  if (q) {
    if (J(q)) {
      const A = await q(_, i), b = Qe(A, P);
      if (b && (O[T] = {
        ...b,
        ...Q(G.validate, b.message)
      }, !r))
        return $(b.message), O;
    } else if (C(q)) {
      let A = {};
      for (const b in q) {
        if (!B(A) && !r)
          break;
        const k = Qe(await q[b](_, i), P, b);
        k && (A = {
          ...k,
          ...Q(b, k.message)
        }, $(k.message), r && (O[T] = A));
      }
      if (!B(A) && (O[T] = {
        ref: P,
        ...A
      }, !r))
        return O;
    }
  }
  return $(!0), O;
};
function kt(e, i) {
  const r = i.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    e = p(e) ? s++ : e[i[s++]];
  return e;
}
function Et(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !p(e[i]))
      return !1;
  return !0;
}
function L(e, i) {
  const r = Array.isArray(i) ? i : Le(i) ? [i] : at(i), s = r.length === 1 ? e : kt(e, r), n = r.length - 1, l = r[n];
  return s && delete s[l], n !== 0 && (C(s) && B(s) || Array.isArray(s) && Et(s)) && L(e, r.slice(0, -1)), e;
}
function we() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (n) => {
      for (const l of e)
        l.next && l.next(n);
    },
    subscribe: (n) => (e.push(n), {
      unsubscribe: () => {
        e = e.filter((l) => l !== n);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var ge = (e) => R(e) || !Ze(e);
function Y(e, i) {
  if (ge(e) || ge(i))
    return e === i;
  if (re(e) && re(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), s = Object.keys(i);
  if (r.length !== s.length)
    return !1;
  for (const n of r) {
    const l = e[n];
    if (!s.includes(n))
      return !1;
    if (n !== "ref") {
      const d = i[n];
      if (re(l) && re(d) || C(l) && C(d) || Array.isArray(l) && Array.isArray(d) ? !Y(l, d) : l !== d)
        return !1;
    }
  }
  return !0;
}
var ct = (e) => e.type === "select-multiple", pt = (e) => Re(e) || ae(e), De = (e) => ye(e) && e.isConnected, ft = (e) => {
  for (const i in e)
    if (J(e[i]))
      return !0;
  return !1;
};
function ve(e, i = {}) {
  const r = Array.isArray(e);
  if (C(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || C(e[s]) && !ft(e[s]) ? (i[s] = Array.isArray(e[s]) ? [] : {}, ve(e[s], i[s])) : R(e[s]) || (i[s] = !0);
  return i;
}
function dt(e, i, r) {
  const s = Array.isArray(e);
  if (C(e) || s)
    for (const n in e)
      Array.isArray(e[n]) || C(e[n]) && !ft(e[n]) ? p(i) || ge(r[n]) ? r[n] = Array.isArray(e[n]) ? ve(e[n], []) : { ...ve(e[n]) } : dt(e[n], R(i) ? {} : i[n], r[n]) : r[n] = !Y(e[n], i[n]);
  return r;
}
var Se = (e, i) => dt(e, i, ve(i)), yt = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: s }) => p(e) ? e : i ? e === "" ? NaN : e && +e : r && j(e) ? new Date(e) : s ? s(e) : e;
function ke(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Te(i) ? i.files : Re(i) ? ot(e.refs).value : ct(i) ? [...i.selectedOptions].map(({ value: r }) => r) : ae(i) ? lt(e.refs).value : yt(p(i.value) ? e.ref.value : i.value, e);
}
var Ct = (e, i, r, s) => {
  const n = {};
  for (const l of e) {
    const d = f(i, l);
    d && x(n, l, d._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: s
  };
}, ne = (e) => p(e) ? e : he(e) ? e.source : C(e) ? he(e.value) ? e.value.source : e.value : e, Ot = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ye(e, i, r) {
  const s = f(e, r);
  if (s || Le(r))
    return {
      error: s,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const l = n.join("."), d = f(i, l), V = f(e, l);
    if (d && !Array.isArray(d) && r !== l)
      return { name: r };
    if (V && V.type)
      return {
        name: l,
        error: V
      };
    n.pop();
  }
  return {
    name: r
  };
}
var Lt = (e, i, r, s, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(i || e) : (r ? s.isOnBlur : n.isOnBlur) ? !e : (r ? s.isOnChange : n.isOnChange) ? e : !0, Tt = (e, i) => !le(f(e, i)).length && L(e, i);
const Rt = {
  mode: I.onSubmit,
  reValidateMode: I.onChange,
  shouldFocusError: !0
};
function Ut(e = {}, i) {
  let r = {
    ...Rt,
    ...e
  }, s = {
    submitCount: 0,
    isDirty: !1,
    isLoading: J(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, n = {}, l = C(r.defaultValues) || C(r.values) ? N(r.defaultValues || r.values) || {} : {}, d = r.shouldUnregister ? {} : N(l), V = {
    action: !1,
    mount: !1,
    watch: !1
  }, g = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, D, m = 0;
  const F = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: we(),
    array: we(),
    state: we()
  }, q = e.resetOptions && e.resetOptions.keepDirtyValues, T = $e(r.mode), _e = $e(r.reValidateMode), oe = r.criteriaMode === I.all, Ve = (t) => (u) => {
    clearTimeout(m), m = setTimeout(t, u);
  }, _ = async (t) => {
    if (F.isValid || t) {
      const u = r.resolver ? B((await W()).errors) : await K(n, !0);
      u !== s.isValid && v.state.next({
        isValid: u
      });
    }
  }, P = (t) => F.isValidating && v.state.next({
    isValidating: t
  }), $ = (t, u = [], a, y, c = !0, o = !0) => {
    if (y && a) {
      if (V.action = !0, o && Array.isArray(f(n, t))) {
        const h = a(f(n, t), y.argA, y.argB);
        c && x(n, t, h);
      }
      if (o && Array.isArray(f(s.errors, t))) {
        const h = a(f(s.errors, t), y.argA, y.argB);
        c && x(s.errors, t, h), Tt(s.errors, t);
      }
      if (F.touchedFields && o && Array.isArray(f(s.touchedFields, t))) {
        const h = a(f(s.touchedFields, t), y.argA, y.argB);
        c && x(s.touchedFields, t, h);
      }
      F.dirtyFields && (s.dirtyFields = Se(l, d)), v.state.next({
        name: t,
        isDirty: b(t, u),
        dirtyFields: s.dirtyFields,
        errors: s.errors,
        isValid: s.isValid
      });
    } else
      x(d, t, u);
  }, O = (t, u) => {
    x(s.errors, t, u), v.state.next({
      errors: s.errors
    });
  }, se = (t, u, a, y) => {
    const c = f(n, t);
    if (c) {
      const o = f(d, t, p(a) ? f(l, t) : a);
      p(o) || y && y.defaultChecked || u ? x(d, t, u ? o : ke(c._f)) : M(t, o), V.mount && _();
    }
  }, Z = (t, u, a, y, c) => {
    let o = !1, h = !1;
    const S = {
      name: t
    };
    if (!a || y) {
      F.isDirty && (h = s.isDirty, s.isDirty = S.isDirty = b(), o = h !== S.isDirty);
      const E = Y(f(l, t), u);
      h = f(s.dirtyFields, t), E ? L(s.dirtyFields, t) : x(s.dirtyFields, t, !0), S.dirtyFields = s.dirtyFields, o = o || F.dirtyFields && h !== !E;
    }
    if (a) {
      const E = f(s.touchedFields, t);
      E || (x(s.touchedFields, t, a), S.touchedFields = s.touchedFields, o = o || F.touchedFields && E !== a);
    }
    return o && c && v.state.next(S), o ? S : {};
  }, be = (t, u, a, y) => {
    const c = f(s.errors, t), o = F.isValid && z(u) && s.isValid !== u;
    if (e.delayError && a ? (D = Ve(() => O(t, a)), D(e.delayError)) : (clearTimeout(m), D = null, a ? x(s.errors, t, a) : L(s.errors, t)), (a ? !Y(c, a) : c) || !B(y) || o) {
      const h = {
        ...y,
        ...o && z(u) ? { isValid: u } : {},
        errors: s.errors,
        name: t
      };
      s = {
        ...s,
        ...h
      }, v.state.next(h);
    }
    P(!1);
  }, W = async (t) => r.resolver(d, r.context, Ct(t || g.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), Q = async (t) => {
    const { errors: u } = await W(t);
    if (t)
      for (const a of t) {
        const y = f(u, a);
        y ? x(s.errors, a, y) : L(s.errors, a);
      }
    else
      s.errors = u;
    return u;
  }, K = async (t, u, a = {
    valid: !0
  }) => {
    for (const y in t) {
      const c = t[y];
      if (c) {
        const { _f: o, ...h } = c;
        if (o) {
          const S = g.array.has(o.name), E = await Xe(c, d, oe, r.shouldUseNativeValidation && !u, S);
          if (E[o.name] && (a.valid = !1, u))
            break;
          !u && (f(E, o.name) ? S ? St(s.errors, E, o.name) : x(s.errors, o.name, E[o.name]) : L(s.errors, o.name));
        }
        h && await K(h, u, a);
      }
    }
    return a.valid;
  }, A = () => {
    for (const t of g.unMount) {
      const u = f(n, t);
      u && (u._f.refs ? u._f.refs.every((a) => !De(a)) : !De(u._f.ref)) && Ae(t);
    }
    g.unMount = /* @__PURE__ */ new Set();
  }, b = (t, u) => (t && u && x(d, t, u), !Y(Ue(), l)), k = (t, u, a) => nt(t, g, {
    ...V.mount ? d : p(u) ? l : j(t) ? { [t]: u } : u
  }, a, u), U = (t) => le(f(V.mount ? d : l, t, e.shouldUnregister ? f(l, t, []) : [])), M = (t, u, a = {}) => {
    const y = f(n, t);
    let c = u;
    if (y) {
      const o = y._f;
      o && (!o.disabled && x(d, t, yt(u, o)), c = ye(o.ref) && R(u) ? "" : u, ct(o.ref) ? [...o.ref.options].forEach((h) => h.selected = c.includes(h.value)) : o.refs ? ae(o.ref) ? o.refs.length > 1 ? o.refs.forEach((h) => (!h.defaultChecked || !h.disabled) && (h.checked = Array.isArray(c) ? !!c.find((S) => S === h.value) : c === h.value)) : o.refs[0] && (o.refs[0].checked = !!c) : o.refs.forEach((h) => h.checked = h.value === c) : Te(o.ref) ? o.ref.value = "" : (o.ref.value = c, o.ref.type || v.values.next({
        name: t,
        values: { ...d }
      })));
    }
    (a.shouldDirty || a.shouldTouch) && Z(t, c, a.shouldTouch, a.shouldDirty, !0), a.shouldValidate && ue(t);
  }, H = (t, u, a) => {
    for (const y in u) {
      const c = u[y], o = `${t}.${y}`, h = f(n, o);
      (g.array.has(t) || !ge(c) || h && !h._f) && !re(c) ? H(o, c, a) : M(o, c, a);
    }
  }, X = (t, u, a = {}) => {
    const y = f(n, t), c = g.array.has(t), o = N(u);
    x(d, t, o), c ? (v.array.next({
      name: t,
      values: { ...d }
    }), (F.isDirty || F.dirtyFields) && a.shouldDirty && v.state.next({
      name: t,
      dirtyFields: Se(l, d),
      isDirty: b(t, o)
    })) : y && !y._f && !R(o) ? H(t, o, a) : M(t, o, a), Ke(t, g) && v.state.next({ ...s }), v.values.next({
      name: t,
      values: { ...d }
    }), !V.mount && i();
  }, ie = async (t) => {
    const u = t.target;
    let a = u.name, y = !0;
    const c = f(n, a), o = () => u.type ? ke(c._f) : et(t);
    if (c) {
      let h, S;
      const E = o(), ee = t.type === de.BLUR || t.type === de.FOCUS_OUT, _t = !Ot(c._f) && !r.resolver && !f(s.errors, a) && !c._f.deps || Lt(ee, f(s.touchedFields, a), s.isSubmitted, _e, T), xe = Ke(a, g, ee);
      x(d, a, E), ee ? (c._f.onBlur && c._f.onBlur(t), D && D(0)) : c._f.onChange && c._f.onChange(t);
      const me = Z(a, E, ee, !1), Vt = !B(me) || xe;
      if (!ee && v.values.next({
        name: a,
        type: t.type,
        values: { ...d }
      }), _t)
        return F.isValid && _(), Vt && v.state.next({ name: a, ...xe ? {} : me });
      if (!ee && xe && v.state.next({ ...s }), P(!0), r.resolver) {
        const { errors: He } = await W([a]), bt = Ye(s.errors, n, a), je = Ye(He, n, bt.name || a);
        h = je.error, a = je.name, S = B(He);
      } else
        h = (await Xe(c, d, oe, r.shouldUseNativeValidation))[a], y = Number.isNaN(E) || E === f(d, a, E), y && (h ? S = !1 : F.isValid && (S = await K(n, !0)));
      y && (c._f.deps && ue(c._f.deps), be(a, S, h, me));
    }
  }, ue = async (t, u = {}) => {
    let a, y;
    const c = ce(t);
    if (P(!0), r.resolver) {
      const o = await Q(p(t) ? t : c);
      a = B(o), y = t ? !c.some((h) => f(o, h)) : a;
    } else
      t ? (y = (await Promise.all(c.map(async (o) => {
        const h = f(n, o);
        return await K(h && h._f ? { [o]: h } : h);
      }))).every(Boolean), !(!y && !s.isValid) && _()) : y = a = await K(n);
    return v.state.next({
      ...!j(t) || F.isValid && a !== s.isValid ? {} : { name: t },
      ...r.resolver || !t ? { isValid: a } : {},
      errors: s.errors,
      isValidating: !1
    }), u.shouldFocus && !y && Ee(n, (o) => o && f(s.errors, o), t ? c : g.mount), y;
  }, Ue = (t) => {
    const u = {
      ...l,
      ...V.mount ? d : {}
    };
    return p(t) ? u : j(t) ? f(u, t) : t.map((a) => f(u, a));
  }, Me = (t, u) => ({
    invalid: !!f((u || s).errors, t),
    isDirty: !!f((u || s).dirtyFields, t),
    isTouched: !!f((u || s).touchedFields, t),
    error: f((u || s).errors, t)
  }), ht = (t) => {
    t && ce(t).forEach((u) => L(s.errors, u)), v.state.next({
      errors: t ? s.errors : {}
    });
  }, Be = (t, u, a) => {
    const y = (f(n, t, { _f: {} })._f || {}).ref;
    x(s.errors, t, {
      ...u,
      ref: y
    }), v.state.next({
      name: t,
      errors: s.errors,
      isValid: !1
    }), a && a.shouldFocus && y && y.focus && y.focus();
  }, gt = (t, u) => J(t) ? v.values.subscribe({
    next: (a) => t(k(void 0, u), a)
  }) : k(t, u, !0), Ae = (t, u = {}) => {
    for (const a of t ? ce(t) : g.mount)
      g.mount.delete(a), g.array.delete(a), u.keepValue || (L(n, a), L(d, a)), !u.keepError && L(s.errors, a), !u.keepDirty && L(s.dirtyFields, a), !u.keepTouched && L(s.touchedFields, a), !r.shouldUnregister && !u.keepDefaultValue && L(l, a);
    v.values.next({
      values: { ...d }
    }), v.state.next({
      ...s,
      ...u.keepDirty ? { isDirty: b() } : {}
    }), !u.keepIsValid && _();
  }, Pe = ({ disabled: t, name: u, field: a, fields: y }) => {
    if (z(t)) {
      const c = t ? void 0 : f(d, u, ke(a ? a._f : f(y, u)._f));
      x(d, u, c), Z(u, c, !1, !1, !0);
    }
  }, Fe = (t, u = {}) => {
    let a = f(n, t);
    const y = z(u.disabled);
    return x(n, t, {
      ...a || {},
      _f: {
        ...a && a._f ? a._f : { ref: { name: t } },
        name: t,
        mount: !0,
        ...u
      }
    }), g.mount.add(t), a ? Pe({
      field: a,
      disabled: u.disabled,
      name: t
    }) : se(t, !0, u.value), {
      ...y ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: ne(u.min),
        max: ne(u.max),
        minLength: ne(u.minLength),
        maxLength: ne(u.maxLength),
        pattern: ne(u.pattern)
      } : {},
      name: t,
      onChange: ie,
      onBlur: ie,
      ref: (c) => {
        if (c) {
          Fe(t, u), a = f(n, t);
          const o = p(c.value) && c.querySelectorAll && c.querySelectorAll("input,select,textarea")[0] || c, h = pt(o), S = a._f.refs || [];
          if (h ? S.find((E) => E === o) : o === a._f.ref)
            return;
          x(n, t, {
            _f: {
              ...a._f,
              ...h ? {
                refs: [
                  ...S.filter(De),
                  o,
                  ...Array.isArray(f(l, t)) ? [{}] : []
                ],
                ref: { type: o.type, name: t }
              } : { ref: o }
            }
          }), se(t, !1, void 0, o);
        } else
          a = f(n, t, {}), a._f && (a._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(tt(g.array, t) && V.action) && g.unMount.add(t);
      }
    };
  }, Ne = () => r.shouldFocusError && Ee(n, (t) => t && f(s.errors, t), g.mount), Ie = (t, u) => async (a) => {
    a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
    let y = N(d);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: c, values: o } = await W();
      s.errors = c, y = o;
    } else
      await K(n);
    L(s.errors, "root"), B(s.errors) ? (v.state.next({
      errors: {}
    }), await t(y, a)) : (u && await u({ ...s.errors }, a), Ne(), setTimeout(Ne)), v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: B(s.errors),
      submitCount: s.submitCount + 1,
      errors: s.errors
    });
  }, vt = (t, u = {}) => {
    f(n, t) && (p(u.defaultValue) ? X(t, f(l, t)) : (X(t, u.defaultValue), x(l, t, u.defaultValue)), u.keepTouched || L(s.touchedFields, t), u.keepDirty || (L(s.dirtyFields, t), s.isDirty = u.defaultValue ? b(t, f(l, t)) : b()), u.keepError || (L(s.errors, t), F.isValid && _()), v.state.next({ ...s }));
  }, qe = (t, u = {}) => {
    const a = t ? N(t) : l, y = N(a), c = t && !B(t) ? y : l;
    if (u.keepDefaultValues || (l = a), !u.keepValues) {
      if (u.keepDirtyValues || q)
        for (const o of g.mount)
          f(s.dirtyFields, o) ? x(c, o, f(d, o)) : X(o, f(c, o));
      else {
        if (pe && p(t))
          for (const o of g.mount) {
            const h = f(n, o);
            if (h && h._f) {
              const S = Array.isArray(h._f.refs) ? h._f.refs[0] : h._f.ref;
              if (ye(S)) {
                const E = S.closest("form");
                if (E) {
                  E.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      d = e.shouldUnregister ? u.keepDefaultValues ? N(l) : {} : N(c), v.array.next({
        values: { ...c }
      }), v.values.next({
        values: { ...c }
      });
    }
    g = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !V.mount && i(), V.mount = !F.isValid || !!u.keepIsValid, V.watch = !!e.shouldUnregister, v.state.next({
      submitCount: u.keepSubmitCount ? s.submitCount : 0,
      isDirty: u.keepDirty ? s.isDirty : !!(u.keepDefaultValues && !Y(t, l)),
      isSubmitted: u.keepIsSubmitted ? s.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? s.dirtyFields : u.keepDefaultValues && t ? Se(l, t) : {},
      touchedFields: u.keepTouched ? s.touchedFields : {},
      errors: u.keepErrors ? s.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? s.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, We = (t, u) => qe(J(t) ? t(d) : t, u);
  return {
    control: {
      register: Fe,
      unregister: Ae,
      getFieldState: Me,
      handleSubmit: Ie,
      setError: Be,
      _executeSchema: W,
      _getWatch: k,
      _getDirty: b,
      _updateValid: _,
      _removeUnmounted: A,
      _updateFieldArray: $,
      _updateDisabledField: Pe,
      _getFieldArray: U,
      _reset: qe,
      _resetDefaultValues: () => J(r.defaultValues) && r.defaultValues().then((t) => {
        We(t, r.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (t) => {
        s = {
          ...s,
          ...t
        };
      },
      _subjects: v,
      _proxyFormState: F,
      get _fields() {
        return n;
      },
      get _formValues() {
        return d;
      },
      get _state() {
        return V;
      },
      set _state(t) {
        V = t;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return g;
      },
      set _names(t) {
        g = t;
      },
      get _formState() {
        return s;
      },
      set _formState(t) {
        s = t;
      },
      get _options() {
        return r;
      },
      set _options(t) {
        r = {
          ...r,
          ...t
        };
      }
    },
    trigger: ue,
    register: Fe,
    handleSubmit: Ie,
    watch: gt,
    setValue: X,
    getValues: Ue,
    reset: We,
    resetField: vt,
    clearErrors: ht,
    unregister: Ae,
    setError: Be,
    setFocus: (t, u = {}) => {
      const a = f(n, t), y = a && a._f;
      if (y) {
        const c = y.refs ? y.refs[0] : y.ref;
        c.focus && (c.focus(), u.shouldSelect && c.select());
      }
    },
    getFieldState: Me
  };
}
function Wt(e = {}) {
  const i = w.useRef(), r = w.useRef(), [s, n] = w.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: J(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: J(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...Ut(e, () => n((d) => ({ ...d }))),
    formState: s
  });
  const l = i.current.control;
  return l._options = e, Oe({
    subject: l._subjects.state,
    next: (d) => {
      it(d, l._proxyFormState, l._updateFormState, !0) && n({ ...l._formState });
    }
  }), w.useEffect(() => {
    e.values && !Y(e.values, r.current) ? (l._reset(e.values, l._options.resetOptions), r.current = e.values) : l._resetDefaultValues();
  }, [e.values, l]), w.useEffect(() => {
    l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState })), l._removeUnmounted();
  }), i.current.formState = st(s, l), i.current;
}
export {
  qt as C,
  It as F,
  Ce as a,
  Wt as u
};
