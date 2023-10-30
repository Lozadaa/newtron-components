import { j as s, r as n } from "./jsx-runtime-7c16e54c.js";
import { u, F as i } from "./index.esm-91686179.js";
import "./_commonjsHelpers-d4512b9c.js";
const d = ({ children: r, config: t, onSubmit: e = () => {
} }) => {
  const o = u(t);
  return /* @__PURE__ */ s.jsx(i, { ...o, children: /* @__PURE__ */ s.jsx("form", { onSubmit: o.handleSubmit(e), children: r }) });
}, m = n.createContext(void 0), F = () => {
  const r = n.useContext(m);
  if (!r)
    throw new Error("useMFormProvider must be used within a MFormProvider");
  return r;
}, v = ({ children: r, url: t }) => {
  const [e] = n.useState(t), o = {
    url: e
  };
  return /* @__PURE__ */ s.jsx(m.Provider, { value: o, children: r });
};
export {
  d as MForm,
  v as MFormProvider,
  F as useMFormProvider
};
