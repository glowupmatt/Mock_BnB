function ch(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bc = { exports: {} },
  Ro = {},
  ef = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  fh = Symbol.for("react.portal"),
  dh = Symbol.for("react.fragment"),
  ph = Symbol.for("react.strict_mode"),
  hh = Symbol.for("react.profiler"),
  mh = Symbol.for("react.provider"),
  vh = Symbol.for("react.context"),
  yh = Symbol.for("react.forward_ref"),
  gh = Symbol.for("react.suspense"),
  wh = Symbol.for("react.memo"),
  Sh = Symbol.for("react.lazy"),
  ys = Symbol.iterator;
function xh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ys && e[ys]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nf = Object.assign,
  rf = {};
function fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rf),
    (this.updater = n || tf);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lf() {}
lf.prototype = fr.prototype;
function qu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rf),
    (this.updater = n || tf);
}
var bu = (qu.prototype = new lf());
bu.constructor = qu;
nf(bu, fr.prototype);
bu.isPureReactComponent = !0;
var gs = Array.isArray,
  of = Object.prototype.hasOwnProperty,
  ea = { current: null },
  uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function af(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      of.call(t, r) && !uf.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: cl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ea.current,
  };
}
function Eh(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function Ch(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ws = /\/+/g;
function xi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ch("" + e.key)
    : t.toString(36);
}
function $l(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case fh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + xi(i, 0) : r),
      gs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ws, "$&/") + "/"),
          $l(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (ta(l) &&
            (l = Eh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ws, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), gs(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + xi(o, u);
      i += $l(o, t, n, a, l);
    }
  else if (((a = xh(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + xi(o, u++)), (i += $l(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Sl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    $l(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function kh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ze = { current: null },
  Il = { transition: null },
  Ph = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: ea,
  };
W.Children = {
  map: Sl,
  forEach: function (e, t, n) {
    Sl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = fr;
W.Fragment = dh;
W.Profiler = hh;
W.PureComponent = qu;
W.StrictMode = ph;
W.Suspense = gh;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ph;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nf({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ea.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      of.call(t, a) &&
        !uf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: cl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: vh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mh, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = af;
W.createFactory = function (e) {
  var t = af.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: yh, render: e };
};
W.isValidElement = ta;
W.lazy = function (e) {
  return { $$typeof: Sh, _payload: { _status: -1, _result: e }, _init: kh };
};
W.memo = function (e, t) {
  return { $$typeof: wh, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
W.useContext = function (e) {
  return ze.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
W.useId = function () {
  return ze.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return ze.current.useRef(e);
};
W.useState = function (e) {
  return ze.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return ze.current.useTransition();
};
W.version = "18.2.0";
ef.exports = W;
var C = ef.exports;
const Nt = qc(C),
  Rh = ch({ __proto__: null, default: Nt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h = C,
  Nh = Symbol.for("react.element"),
  Lh = Symbol.for("react.fragment"),
  jh = Object.prototype.hasOwnProperty,
  Th = _h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mh = { key: !0, ref: !0, __self: !0, __source: !0 };
function sf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) jh.call(t, r) && !Mh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Nh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Th.current,
  };
}
Ro.Fragment = Lh;
Ro.jsx = sf;
Ro.jsxs = sf;
bc.exports = Ro;
var E = bc.exports,
  qi = {},
  cf = { exports: {} },
  Ye = {},
  ff = { exports: {} },
  df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, z) {
    var A = j.length;
    j.push(z);
    e: for (; 0 < A; ) {
      var le = (A - 1) >>> 1,
        he = j[le];
      if (0 < l(he, z)) (j[le] = z), (j[A] = he), (A = le);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0],
      A = j.pop();
    if (A !== z) {
      j[0] = A;
      e: for (var le = 0, he = j.length, jn = he >>> 1; le < jn; ) {
        var b = 2 * (le + 1) - 1,
          xt = j[b],
          mt = b + 1,
          Tn = j[mt];
        if (0 > l(xt, A))
          mt < he && 0 > l(Tn, xt)
            ? ((j[le] = Tn), (j[mt] = A), (le = mt))
            : ((j[le] = xt), (j[b] = A), (le = b));
        else if (mt < he && 0 > l(Tn, A)) (j[le] = Tn), (j[mt] = A), (le = mt);
        else break e;
      }
    }
    return z;
  }
  function l(j, z) {
    var A = j.sortIndex - z.sortIndex;
    return A !== 0 ? A : j.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    f = 1,
    h = null,
    v = 3,
    g = !1,
    w = !1,
    y = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(j) {
    for (var z = n(s); z !== null; ) {
      if (z.callback === null) r(s);
      else if (z.startTime <= j)
        r(s), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(s);
    }
  }
  function p(j) {
    if (((y = !1), m(j), !w))
      if (n(a) !== null) (w = !0), Ve(P);
      else {
        var z = n(s);
        z !== null && ht(p, z.startTime - j);
      }
  }
  function P(j, z) {
    (w = !1), y && ((y = !1), d(O), (O = -1)), (g = !0);
    var A = v;
    try {
      for (
        m(z), h = n(a);
        h !== null && (!(h.expirationTime > z) || (j && !Se()));

      ) {
        var le = h.callback;
        if (typeof le == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var he = le(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof he == "function" ? (h.callback = he) : h === n(a) && r(a),
            m(z);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var jn = !0;
      else {
        var b = n(s);
        b !== null && ht(p, b.startTime - z), (jn = !1);
      }
      return jn;
    } finally {
      (h = null), (v = A), (g = !1);
    }
  }
  var L = !1,
    N = null,
    O = -1,
    H = 5,
    U = -1;
  function Se() {
    return !(e.unstable_now() - U < H);
  }
  function q() {
    if (N !== null) {
      var j = e.unstable_now();
      U = j;
      var z = !0;
      try {
        z = N(!0, j);
      } finally {
        z ? pt() : ((L = !1), (N = null));
      }
    } else L = !1;
  }
  var pt;
  if (typeof c == "function")
    pt = function () {
      c(q);
    };
  else if (typeof MessageChannel < "u") {
    var Ut = new MessageChannel(),
      $t = Ut.port2;
    (Ut.port1.onmessage = q),
      (pt = function () {
        $t.postMessage(null);
      });
  } else
    pt = function () {
      R(q, 0);
    };
  function Ve(j) {
    (N = j), L || ((L = !0), pt());
  }
  function ht(j, z) {
    O = R(function () {
      j(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Ve(P));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = v;
      }
      var A = v;
      v = z;
      try {
        return j();
      } finally {
        v = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, z) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var A = v;
      v = j;
      try {
        return z();
      } finally {
        v = A;
      }
    }),
    (e.unstable_scheduleCallback = function (j, z, A) {
      var le = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? le + A : le))
          : (A = le),
        j)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = A + he),
        (j = {
          id: f++,
          callback: z,
          priorityLevel: j,
          startTime: A,
          expirationTime: he,
          sortIndex: -1,
        }),
        A > le
          ? ((j.sortIndex = A),
            t(s, j),
            n(a) === null &&
              j === n(s) &&
              (y ? (d(O), (O = -1)) : (y = !0), ht(p, A - le)))
          : ((j.sortIndex = he), t(a, j), w || g || ((w = !0), Ve(P))),
        j
      );
    }),
    (e.unstable_shouldYield = Se),
    (e.unstable_wrapCallback = function (j) {
      var z = v;
      return function () {
        var A = v;
        v = z;
        try {
          return j.apply(this, arguments);
        } finally {
          v = A;
        }
      };
    });
})(df);
ff.exports = df;
var Oh = ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = C,
  Ke = Oh;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hf = new Set(),
  Qr = {};
function _n(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++) hf.add(t[e]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bi = Object.prototype.hasOwnProperty,
  Dh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ss = {},
  xs = {};
function zh(e) {
  return bi.call(xs, e)
    ? !0
    : bi.call(Ss, e)
    ? !1
    : Dh.test(e)
    ? (xs[e] = !0)
    : ((Ss[e] = !0), !1);
}
function Fh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Uh(e, t, n, r) {
  if (t === null || typeof t > "u" || Fh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    Re[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(na, ra);
  Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function la(e, t, n, r) {
  var l = Re.hasOwnProperty(t) ? Re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Uh(t, n, l, r) && (n = null),
    r || l === null
      ? zh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  eu = Symbol.for("react.profiler"),
  mf = Symbol.for("react.provider"),
  vf = Symbol.for("react.context"),
  ia = Symbol.for("react.forward_ref"),
  tu = Symbol.for("react.suspense"),
  nu = Symbol.for("react.suspense_list"),
  ua = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  yf = Symbol.for("react.offscreen"),
  Es = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Ei;
function Tr(e) {
  if (Ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ei = (t && t[1]) || "";
    }
  return (
    `
` +
    Ei +
    e
  );
}
var Ci = !1;
function ki(e, t) {
  if (!e || Ci) return "";
  Ci = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Ci = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tr(e) : "";
}
function $h(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr("Lazy");
    case 13:
      return Tr("Suspense");
    case 19:
      return Tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ki(e.type, !1)), e;
    case 11:
      return (e = ki(e.type.render, !1)), e;
    case 1:
      return (e = ki(e.type, !0)), e;
    default:
      return "";
  }
}
function ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Dn:
      return "Portal";
    case eu:
      return "Profiler";
    case oa:
      return "StrictMode";
    case tu:
      return "Suspense";
    case nu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vf:
        return (e.displayName || "Context") + ".Consumer";
      case mf:
        return (e._context.displayName || "Context") + ".Provider";
      case ia:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ua:
        return (
          (t = e.displayName || null), t !== null ? t : ru(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return ru(e(t));
        } catch {}
    }
  return null;
}
function Ih(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ru(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ah(e) {
  var t = gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function El(e) {
  e._valueTracker || (e._valueTracker = Ah(e));
}
function wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lu(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sf(e, t) {
  (t = t.checked), t != null && la(e, "checked", t, !1);
}
function ou(e, t) {
  Sf(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? iu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && iu(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ks(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function iu(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ps(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function xf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Rs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ef(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function au(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ef(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cl,
  Cf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cl = Cl || document.createElement("div"),
          Cl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
    strokeWidth: !0,
  },
  Bh = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  Bh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function kf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Pf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = kf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Vh = se(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function su(e, t) {
  if (t) {
    if (Vh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function cu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var fu = null;
function aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var du = null,
  Gn = null,
  Jn = null;
function _s(e) {
  if ((e = pl(e))) {
    if (typeof du != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = To(t)), du(e.stateNode, e.type, t));
  }
}
function Rf(e) {
  Gn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Gn = e);
}
function _f() {
  if (Gn) {
    var e = Gn,
      t = Jn;
    if (((Jn = Gn = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
  }
}
function Nf(e, t) {
  return e(t);
}
function Lf() {}
var Pi = !1;
function jf(e, t, n) {
  if (Pi) return e(t, n);
  Pi = !0;
  try {
    return Nf(e, t, n);
  } finally {
    (Pi = !1), (Gn !== null || Jn !== null) && (Lf(), _f());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = To(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var pu = !1;
if (Tt)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", {
      get: function () {
        pu = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr);
  } catch {
    pu = !1;
  }
function Wh(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Fr = !1,
  Zl = null,
  ql = !1,
  hu = null,
  Hh = {
    onError: function (e) {
      (Fr = !0), (Zl = e);
    },
  };
function Qh(e, t, n, r, l, o, i, u, a) {
  (Fr = !1), (Zl = null), Wh.apply(Hh, arguments);
}
function Kh(e, t, n, r, l, o, i, u, a) {
  if ((Qh.apply(this, arguments), Fr)) {
    if (Fr) {
      var s = Zl;
      (Fr = !1), (Zl = null);
    } else throw Error(_(198));
    ql || ((ql = !0), (hu = s));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ns(e) {
  if (Nn(e) !== e) throw Error(_(188));
}
function Yh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ns(l), e;
        if (o === r) return Ns(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Mf(e) {
  return (e = Yh(e)), e !== null ? Of(e) : null;
}
function Of(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Of(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Df = Ke.unstable_scheduleCallback,
  Ls = Ke.unstable_cancelCallback,
  Xh = Ke.unstable_shouldYield,
  Gh = Ke.unstable_requestPaint,
  pe = Ke.unstable_now,
  Jh = Ke.unstable_getCurrentPriorityLevel,
  sa = Ke.unstable_ImmediatePriority,
  zf = Ke.unstable_UserBlockingPriority,
  bl = Ke.unstable_NormalPriority,
  Zh = Ke.unstable_LowPriority,
  Ff = Ke.unstable_IdlePriority,
  _o = null,
  wt = null;
function qh(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : tm,
  bh = Math.log,
  em = Math.LN2;
function tm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bh(e) / em) | 0)) | 0;
}
var kl = 64,
  Pl = 4194304;
function Or(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Or(u)) : ((o &= i), o !== 0 && (r = Or(o)));
  } else (i = n & ~l), i !== 0 ? (r = Or(i)) : o !== 0 && (r = Or(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ct(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = nm(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function mu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uf() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Ri(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function lm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ct(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function $f(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var If,
  fa,
  Af,
  Bf,
  Vf,
  vu = !1,
  Rl = [],
  Xt = null,
  Gt = null,
  Jt = null,
  Xr = new Map(),
  Gr = new Map(),
  Ht = [],
  om =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function js(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = pl(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function im(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Xt = xr(Xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Gt = xr(Gt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Jt = xr(Jt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Xr.set(o, xr(Xr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Gr.set(o, xr(Gr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Wf(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tf(n)), t !== null)) {
          (e.blockedOn = t),
            Vf(e.priority, function () {
              Af(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fu = r), n.target.dispatchEvent(r), (fu = null);
    } else return (t = pl(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ts(e, t, n) {
  Al(e) && n.delete(t);
}
function um() {
  (vu = !1),
    Xt !== null && Al(Xt) && (Xt = null),
    Gt !== null && Al(Gt) && (Gt = null),
    Jt !== null && Al(Jt) && (Jt = null),
    Xr.forEach(Ts),
    Gr.forEach(Ts);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vu ||
      ((vu = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, um)));
}
function Jr(e) {
  function t(l) {
    return Er(l, e);
  }
  if (0 < Rl.length) {
    Er(Rl[0], e);
    for (var n = 1; n < Rl.length; n++) {
      var r = Rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && Er(Xt, e),
      Gt !== null && Er(Gt, e),
      Jt !== null && Er(Jt, e),
      Xr.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    Wf(n), n.blockedOn === null && Ht.shift();
}
var Zn = zt.ReactCurrentBatchConfig,
  to = !0;
function am(e, t, n, r) {
  var l = Y,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (Y = 1), da(e, t, n, r);
  } finally {
    (Y = l), (Zn.transition = o);
  }
}
function sm(e, t, n, r) {
  var l = Y,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (Y = 4), da(e, t, n, r);
  } finally {
    (Y = l), (Zn.transition = o);
  }
}
function da(e, t, n, r) {
  if (to) {
    var l = yu(e, t, n, r);
    if (l === null) Fi(e, t, r, no, n), js(e, r);
    else if (im(l, e, t, n, r)) r.stopPropagation();
    else if ((js(e, r), t & 4 && -1 < om.indexOf(e))) {
      for (; l !== null; ) {
        var o = pl(l);
        if (
          (o !== null && If(o),
          (o = yu(e, t, n, r)),
          o === null && Fi(e, t, r, no, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Fi(e, t, r, null, n);
  }
}
var no = null;
function yu(e, t, n, r) {
  if (((no = null), (e = aa(r)), (e = mn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (no = e), null;
}
function Hf(e) {
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
      switch (Jh()) {
        case sa:
          return 1;
        case zf:
          return 4;
        case bl:
        case Zh:
          return 16;
        case Ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  pa = null,
  Bl = null;
function Qf() {
  if (Bl) return Bl;
  var e,
    t = pa,
    n = t.length,
    r,
    l = "value" in Kt ? Kt.value : Kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Bl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _l() {
  return !0;
}
function Ms() {
  return !1;
}
function Xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? _l
        : Ms),
      (this.isPropagationStopped = Ms),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _l));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _l));
      },
      persist: function () {},
      isPersistent: _l,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ha = Xe(dr),
  dl = se({}, dr, { view: 0, detail: 0 }),
  cm = Xe(dl),
  _i,
  Ni,
  Cr,
  No = se({}, dl, {
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
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Cr &&
            (Cr && e.type === "mousemove"
              ? ((_i = e.screenX - Cr.screenX), (Ni = e.screenY - Cr.screenY))
              : (Ni = _i = 0),
            (Cr = e)),
          _i);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ni;
    },
  }),
  Os = Xe(No),
  fm = se({}, No, { dataTransfer: 0 }),
  dm = Xe(fm),
  pm = se({}, dl, { relatedTarget: 0 }),
  Li = Xe(pm),
  hm = se({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mm = Xe(hm),
  vm = se({}, dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ym = Xe(vm),
  gm = se({}, dr, { data: 0 }),
  Ds = Xe(gm),
  wm = {
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
    MozPrintableKey: "Unidentified",
  },
  Sm = {
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
    224: "Meta",
  },
  xm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Em(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xm[e]) ? !!t[e] : !1;
}
function ma() {
  return Em;
}
var Cm = se({}, dl, {
    key: function (e) {
      if (e.key) {
        var t = wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  km = Xe(Cm),
  Pm = se({}, No, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zs = Xe(Pm),
  Rm = se({}, dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  _m = Xe(Rm),
  Nm = se({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lm = Xe(Nm),
  jm = se({}, No, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tm = Xe(jm),
  Mm = [9, 13, 27, 32],
  va = Tt && "CompositionEvent" in window,
  Ur = null;
Tt && "documentMode" in document && (Ur = document.documentMode);
var Om = Tt && "TextEvent" in window && !Ur,
  Kf = Tt && (!va || (Ur && 8 < Ur && 11 >= Ur)),
  Fs = String.fromCharCode(32),
  Us = !1;
function Yf(e, t) {
  switch (e) {
    case "keyup":
      return Mm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Dm(e, t) {
  switch (e) {
    case "compositionend":
      return Xf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Us = !0), Fs);
    case "textInput":
      return (e = t.data), e === Fs && Us ? null : e;
    default:
      return null;
  }
}
function zm(e, t) {
  if (Fn)
    return e === "compositionend" || (!va && Yf(e, t))
      ? ((e = Qf()), (Bl = pa = Kt = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = {
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
  week: !0,
};
function $s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function Gf(e, t, n, r) {
  Rf(r),
    (t = ro(t, "onChange")),
    0 < t.length &&
      ((n = new ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  Zr = null;
function Um(e) {
  id(e, 0);
}
function Lo(e) {
  var t = In(e);
  if (wf(t)) return e;
}
function $m(e, t) {
  if (e === "change") return t;
}
var Jf = !1;
if (Tt) {
  var ji;
  if (Tt) {
    var Ti = "oninput" in document;
    if (!Ti) {
      var Is = document.createElement("div");
      Is.setAttribute("oninput", "return;"),
        (Ti = typeof Is.oninput == "function");
    }
    ji = Ti;
  } else ji = !1;
  Jf = ji && (!document.documentMode || 9 < document.documentMode);
}
function As() {
  $r && ($r.detachEvent("onpropertychange", Zf), (Zr = $r = null));
}
function Zf(e) {
  if (e.propertyName === "value" && Lo(Zr)) {
    var t = [];
    Gf(t, Zr, e, aa(e)), jf(Um, t);
  }
}
function Im(e, t, n) {
  e === "focusin"
    ? (As(), ($r = t), (Zr = n), $r.attachEvent("onpropertychange", Zf))
    : e === "focusout" && As();
}
function Am(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Lo(Zr);
}
function Bm(e, t) {
  if (e === "click") return Lo(t);
}
function Vm(e, t) {
  if (e === "input" || e === "change") return Lo(t);
}
function Wm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : Wm;
function qr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bi.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Bs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vs(e, t) {
  var n = Bs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bs(n);
  }
}
function qf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bf() {
  for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jl(e.document);
  }
  return t;
}
function ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hm(e) {
  var t = bf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ya(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Vs(n, o));
        var i = Vs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qm = Tt && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  gu = null,
  Ir = null,
  wu = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wu ||
    Un == null ||
    Un !== Jl(r) ||
    ((r = Un),
    "selectionStart" in r && ya(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ir && qr(Ir, r)) ||
      ((Ir = r),
      (r = ro(gu, "onSelect")),
      0 < r.length &&
        ((t = new ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Un))));
}
function Nl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $n = {
    animationend: Nl("Animation", "AnimationEnd"),
    animationiteration: Nl("Animation", "AnimationIteration"),
    animationstart: Nl("Animation", "AnimationStart"),
    transitionend: Nl("Transition", "TransitionEnd"),
  },
  Mi = {},
  ed = {};
Tt &&
  ((ed = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function jo(e) {
  if (Mi[e]) return Mi[e];
  if (!$n[e]) return e;
  var t = $n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return (Mi[e] = t[n]);
  return e;
}
var td = jo("animationend"),
  nd = jo("animationiteration"),
  rd = jo("animationstart"),
  ld = jo("transitionend"),
  od = new Map(),
  Hs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function on(e, t) {
  od.set(e, t), _n(t, [e]);
}
for (var Oi = 0; Oi < Hs.length; Oi++) {
  var Di = Hs[Oi],
    Km = Di.toLowerCase(),
    Ym = Di[0].toUpperCase() + Di.slice(1);
  on(Km, "on" + Ym);
}
on(td, "onAnimationEnd");
on(nd, "onAnimationIteration");
on(rd, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(ld, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
_n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kh(r, t, void 0, e), (e.currentTarget = null);
}
function id(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Qs(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Qs(l, u, s), (o = a);
        }
    }
  }
  if (ql) throw ((e = hu), (ql = !1), (hu = null), e);
}
function te(e, t) {
  var n = t[ku];
  n === void 0 && (n = t[ku] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ud(t, e, 2, !1), n.add(r));
}
function zi(e, t, n) {
  var r = 0;
  t && (r |= 4), ud(n, e, r, t);
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Ll]) {
    (e[Ll] = !0),
      hf.forEach(function (n) {
        n !== "selectionchange" && (Xm.has(n) || zi(n, !1, e), zi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ll] || ((t[Ll] = !0), zi("selectionchange", !1, t));
  }
}
function ud(e, t, n, r) {
  switch (Hf(t)) {
    case 1:
      var l = am;
      break;
    case 4:
      l = sm;
      break;
    default:
      l = da;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !pu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Fi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = mn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  jf(function () {
    var s = o,
      f = aa(n),
      h = [];
    e: {
      var v = od.get(e);
      if (v !== void 0) {
        var g = ha,
          w = e;
        switch (e) {
          case "keypress":
            if (Vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = km;
            break;
          case "focusin":
            (w = "focus"), (g = Li);
            break;
          case "focusout":
            (w = "blur"), (g = Li);
            break;
          case "beforeblur":
          case "afterblur":
            g = Li;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = dm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _m;
            break;
          case td:
          case nd:
          case rd:
            g = mm;
            break;
          case ld:
            g = Lm;
            break;
          case "scroll":
            g = cm;
            break;
          case "wheel":
            g = Tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = zs;
        }
        var y = (t & 4) !== 0,
          R = !y && e === "scroll",
          d = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var p = m.stateNode;
          if (
            (m.tag === 5 &&
              p !== null &&
              ((m = p),
              d !== null && ((p = Yr(c, d)), p != null && y.push(el(c, p, m)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((v = new g(v, w, null, n, f)), h.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== fu &&
            (w = n.relatedTarget || n.fromElement) &&
            (mn(w) || w[Mt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = s),
              (w = w ? mn(w) : null),
              w !== null &&
                ((R = Nn(w)), w !== R || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = s)),
          g !== w)
        ) {
          if (
            ((y = Os),
            (p = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = zs),
              (p = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (R = g == null ? v : In(g)),
            (m = w == null ? v : In(w)),
            (v = new y(p, c + "leave", g, n, f)),
            (v.target = R),
            (v.relatedTarget = m),
            (p = null),
            mn(f) === s &&
              ((y = new y(d, c + "enter", w, n, f)),
              (y.target = m),
              (y.relatedTarget = R),
              (p = y)),
            (R = p),
            g && w)
          )
            t: {
              for (y = g, d = w, c = 0, m = y; m; m = Mn(m)) c++;
              for (m = 0, p = d; p; p = Mn(p)) m++;
              for (; 0 < c - m; ) (y = Mn(y)), c--;
              for (; 0 < m - c; ) (d = Mn(d)), m--;
              for (; c--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = Mn(y)), (d = Mn(d));
              }
              y = null;
            }
          else y = null;
          g !== null && Ks(h, v, g, y, !1),
            w !== null && R !== null && Ks(h, R, w, y, !0);
        }
      }
      e: {
        if (
          ((v = s ? In(s) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var P = $m;
        else if ($s(v))
          if (Jf) P = Vm;
          else {
            P = Am;
            var L = Im;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (P = Bm);
        if (P && (P = P(e, s))) {
          Gf(h, P, n, f);
          break e;
        }
        L && L(e, v, s),
          e === "focusout" &&
            (L = v._wrapperState) &&
            L.controlled &&
            v.type === "number" &&
            iu(v, "number", v.value);
      }
      switch (((L = s ? In(s) : window), e)) {
        case "focusin":
          ($s(L) || L.contentEditable === "true") &&
            ((Un = L), (gu = s), (Ir = null));
          break;
        case "focusout":
          Ir = gu = Un = null;
          break;
        case "mousedown":
          wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wu = !1), Ws(h, n, f);
          break;
        case "selectionchange":
          if (Qm) break;
        case "keydown":
        case "keyup":
          Ws(h, n, f);
      }
      var N;
      if (va)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Fn
          ? Yf(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Kf &&
          n.locale !== "ko" &&
          (Fn || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Fn && (N = Qf())
            : ((Kt = f),
              (pa = "value" in Kt ? Kt.value : Kt.textContent),
              (Fn = !0))),
        (L = ro(s, O)),
        0 < L.length &&
          ((O = new Ds(O, e, null, n, f)),
          h.push({ event: O, listeners: L }),
          N ? (O.data = N) : ((N = Xf(n)), N !== null && (O.data = N)))),
        (N = Om ? Dm(e, n) : zm(e, n)) &&
          ((s = ro(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new Ds("onBeforeInput", "beforeinput", null, n, f)),
            h.push({ event: f, listeners: s }),
            (f.data = N)));
    }
    id(h, t);
  });
}
function el(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ro(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Yr(e, n)),
      o != null && r.unshift(el(e, o, l)),
      (o = Yr(e, t)),
      o != null && r.push(el(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ks(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Yr(n, o)), a != null && i.unshift(el(n, a, u)))
        : l || ((a = Yr(n, o)), a != null && i.push(el(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Gm = /\r\n?/g,
  Jm = /\u0000|\uFFFD/g;
function Ys(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gm,
      `
`
    )
    .replace(Jm, "");
}
function jl(e, t, n) {
  if (((t = Ys(t)), Ys(e) !== t && n)) throw Error(_(425));
}
function lo() {}
var Su = null,
  xu = null;
function Eu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Cu = typeof setTimeout == "function" ? setTimeout : void 0,
  Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xs = typeof Promise == "function" ? Promise : void 0,
  qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xs < "u"
      ? function (e) {
          return Xs.resolve(null).then(e).catch(bm);
        }
      : Cu;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ui(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + pr,
  tl = "__reactProps$" + pr,
  Mt = "__reactContainer$" + pr,
  ku = "__reactEvents$" + pr,
  ev = "__reactListeners$" + pr,
  tv = "__reactHandles$" + pr;
function mn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gs(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Gs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pl(e) {
  return (
    (e = e[gt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function To(e) {
  return e[tl] || null;
}
var Pu = [],
  An = -1;
function un(e) {
  return { current: e };
}
function ne(e) {
  0 > An || ((e.current = Pu[An]), (Pu[An] = null), An--);
}
function ee(e, t) {
  An++, (Pu[An] = e.current), (e.current = t);
}
var rn = {},
  Me = un(rn),
  Ie = un(!1),
  xn = rn;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  ne(Ie), ne(Me);
}
function Js(e, t, n) {
  if (Me.current !== rn) throw Error(_(168));
  ee(Me, t), ee(Ie, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, Ih(e) || "Unknown", l));
  return se({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (xn = Me.current),
    ee(Me, e),
    ee(Ie, Ie.current),
    !0
  );
}
function Zs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = ad(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Ie),
      ne(Me),
      ee(Me, e))
    : ne(Ie),
    ee(Ie, n);
}
var Pt = null,
  Mo = !1,
  $i = !1;
function sd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function nv(e) {
  (Mo = !0), sd(e);
}
function an() {
  if (!$i && Pt !== null) {
    $i = !0;
    var e = 0,
      t = Y;
    try {
      var n = Pt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Mo = !1);
    } catch (l) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Df(sa, an), l);
    } finally {
      (Y = t), ($i = !1);
    }
  }
  return null;
}
var Bn = [],
  Vn = 0,
  uo = null,
  ao = 0,
  Ze = [],
  qe = 0,
  En = null,
  Rt = 1,
  _t = "";
function pn(e, t) {
  (Bn[Vn++] = ao), (Bn[Vn++] = uo), (uo = e), (ao = t);
}
function cd(e, t, n) {
  (Ze[qe++] = Rt), (Ze[qe++] = _t), (Ze[qe++] = En), (En = e);
  var r = Rt;
  e = _t;
  var l = 32 - ct(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ct(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Rt = (1 << (32 - ct(t) + l)) | (n << l) | r),
      (_t = o + e);
  } else (Rt = (1 << o) | (n << l) | r), (_t = e);
}
function ga(e) {
  e.return !== null && (pn(e, 1), cd(e, 1, 0));
}
function wa(e) {
  for (; e === uo; )
    (uo = Bn[--Vn]), (Bn[Vn] = null), (ao = Bn[--Vn]), (Bn[Vn] = null);
  for (; e === En; )
    (En = Ze[--qe]),
      (Ze[qe] = null),
      (_t = Ze[--qe]),
      (Ze[qe] = null),
      (Rt = Ze[--qe]),
      (Ze[qe] = null);
}
var Qe = null,
  He = null,
  re = !1,
  st = null;
function fd(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qe = e), (He = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = En !== null ? { id: Rt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (re) {
    var t = He;
    if (t) {
      var n = t;
      if (!qs(e, t)) {
        if (Ru(e)) throw Error(_(418));
        t = Zt(n.nextSibling);
        var r = Qe;
        t && qs(e, t)
          ? fd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Qe = e));
      }
    } else {
      if (Ru(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Qe = e);
    }
  }
}
function bs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qe = e;
}
function Tl(e) {
  if (e !== Qe) return !1;
  if (!re) return bs(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Eu(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Ru(e)) throw (dd(), Error(_(418)));
    for (; t; ) fd(e, t), (t = Zt(t.nextSibling));
  }
  if ((bs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Qe ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = He; e; ) e = Zt(e.nextSibling);
}
function rr() {
  (He = Qe = null), (re = !1);
}
function Sa(e) {
  st === null ? (st = [e]) : st.push(e);
}
var rv = zt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var so = un(null),
  co = null,
  Wn = null,
  xa = null;
function Ea() {
  xa = Wn = co = null;
}
function Ca(e) {
  var t = so.current;
  ne(so), (e._currentValue = t);
}
function Nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qn(e, t) {
  (co = e),
    (xa = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (xa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (co === null) throw Error(_(308));
      (Wn = e), (co.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function ka(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function pd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ka(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Pa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ka(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function Wl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
function ec(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fo(e, t, n, r) {
  var l = e.updateQueue;
  Wt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== i &&
        (u === null ? (f.firstBaseUpdate = s) : (u.next = s),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (f = s = a = null), (u = o);
    do {
      var v = u.lane,
        g = u.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((v = t), (g = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                h = w.call(g, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (v = typeof w == "function" ? w.call(g, h, v) : w),
                v == null)
              )
                break e;
              h = se({}, h, v);
              break e;
            case 2:
              Wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((s = f = g), (a = h)) : (f = f.next = g),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (kn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function tc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var md = new pf.Component().refs;
function Lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = en(e),
      o = Lt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (ft(t, e, l, r), Wl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = en(e),
      o = Lt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (ft(t, e, l, r), Wl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = en(e),
      l = Lt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (ft(t, e, r, n), Wl(t, e, r));
  },
};
function nc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qr(n, r) || !qr(l, o)
      : !0
  );
}
function vd(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = tt(o))
      : ((l = Ae(t) ? xn : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, l) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function rc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
}
function ju(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = md), Pa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = tt(o))
    : ((o = Ae(t) ? xn : Me.current), (l.context = nr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Lu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Oo.enqueueReplaceState(l, l.state, null),
      fo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === md && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ml(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function lc(e) {
  var t = e._init;
  return t(e._payload);
}
function yd(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [c]), (d.flags |= 16)) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = tn(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags |= 2), c) : m)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, m, p) {
    return c === null || c.tag !== 6
      ? ((c = Qi(m, d.mode, p)), (c.return = d), c)
      : ((c = l(c, m)), (c.return = d), c);
  }
  function a(d, c, m, p) {
    var P = m.type;
    return P === zn
      ? f(d, c, m.props.children, p, m.key)
      : c !== null &&
        (c.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Vt &&
            lc(P) === c.type))
      ? ((p = l(c, m.props)), (p.ref = kr(d, c, m)), (p.return = d), p)
      : ((p = Gl(m.type, m.key, m.props, null, d.mode, p)),
        (p.ref = kr(d, c, m)),
        (p.return = d),
        p);
  }
  function s(d, c, m, p) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Ki(m, d.mode, p)), (c.return = d), c)
      : ((c = l(c, m.children || [])), (c.return = d), c);
  }
  function f(d, c, m, p, P) {
    return c === null || c.tag !== 7
      ? ((c = Sn(m, d.mode, p, P)), (c.return = d), c)
      : ((c = l(c, m)), (c.return = d), c);
  }
  function h(d, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Qi("" + c, d.mode, m)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xl:
          return (
            (m = Gl(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = kr(d, null, c)),
            (m.return = d),
            m
          );
        case Dn:
          return (c = Ki(c, d.mode, m)), (c.return = d), c;
        case Vt:
          var p = c._init;
          return h(d, p(c._payload), m);
      }
      if (Mr(c) || wr(c))
        return (c = Sn(c, d.mode, m, null)), (c.return = d), c;
      Ml(d, c);
    }
    return null;
  }
  function v(d, c, m, p) {
    var P = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : u(d, c, "" + m, p);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xl:
          return m.key === P ? a(d, c, m, p) : null;
        case Dn:
          return m.key === P ? s(d, c, m, p) : null;
        case Vt:
          return (P = m._init), v(d, c, P(m._payload), p);
      }
      if (Mr(m) || wr(m)) return P !== null ? null : f(d, c, m, p, null);
      Ml(d, m);
    }
    return null;
  }
  function g(d, c, m, p, P) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (d = d.get(m) || null), u(c, d, "" + p, P);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xl:
          return (d = d.get(p.key === null ? m : p.key) || null), a(c, d, p, P);
        case Dn:
          return (d = d.get(p.key === null ? m : p.key) || null), s(c, d, p, P);
        case Vt:
          var L = p._init;
          return g(d, c, m, L(p._payload), P);
      }
      if (Mr(p) || wr(p)) return (d = d.get(m) || null), f(c, d, p, P, null);
      Ml(c, p);
    }
    return null;
  }
  function w(d, c, m, p) {
    for (
      var P = null, L = null, N = c, O = (c = 0), H = null;
      N !== null && O < m.length;
      O++
    ) {
      N.index > O ? ((H = N), (N = null)) : (H = N.sibling);
      var U = v(d, N, m[O], p);
      if (U === null) {
        N === null && (N = H);
        break;
      }
      e && N && U.alternate === null && t(d, N),
        (c = o(U, c, O)),
        L === null ? (P = U) : (L.sibling = U),
        (L = U),
        (N = H);
    }
    if (O === m.length) return n(d, N), re && pn(d, O), P;
    if (N === null) {
      for (; O < m.length; O++)
        (N = h(d, m[O], p)),
          N !== null &&
            ((c = o(N, c, O)), L === null ? (P = N) : (L.sibling = N), (L = N));
      return re && pn(d, O), P;
    }
    for (N = r(d, N); O < m.length; O++)
      (H = g(N, d, O, m[O], p)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? O : H.key),
          (c = o(H, c, O)),
          L === null ? (P = H) : (L.sibling = H),
          (L = H));
    return (
      e &&
        N.forEach(function (Se) {
          return t(d, Se);
        }),
      re && pn(d, O),
      P
    );
  }
  function y(d, c, m, p) {
    var P = wr(m);
    if (typeof P != "function") throw Error(_(150));
    if (((m = P.call(m)), m == null)) throw Error(_(151));
    for (
      var L = (P = null), N = c, O = (c = 0), H = null, U = m.next();
      N !== null && !U.done;
      O++, U = m.next()
    ) {
      N.index > O ? ((H = N), (N = null)) : (H = N.sibling);
      var Se = v(d, N, U.value, p);
      if (Se === null) {
        N === null && (N = H);
        break;
      }
      e && N && Se.alternate === null && t(d, N),
        (c = o(Se, c, O)),
        L === null ? (P = Se) : (L.sibling = Se),
        (L = Se),
        (N = H);
    }
    if (U.done) return n(d, N), re && pn(d, O), P;
    if (N === null) {
      for (; !U.done; O++, U = m.next())
        (U = h(d, U.value, p)),
          U !== null &&
            ((c = o(U, c, O)), L === null ? (P = U) : (L.sibling = U), (L = U));
      return re && pn(d, O), P;
    }
    for (N = r(d, N); !U.done; O++, U = m.next())
      (U = g(N, d, O, U.value, p)),
        U !== null &&
          (e && U.alternate !== null && N.delete(U.key === null ? O : U.key),
          (c = o(U, c, O)),
          L === null ? (P = U) : (L.sibling = U),
          (L = U));
    return (
      e &&
        N.forEach(function (q) {
          return t(d, q);
        }),
      re && pn(d, O),
      P
    );
  }
  function R(d, c, m, p) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case xl:
          e: {
            for (var P = m.key, L = c; L !== null; ) {
              if (L.key === P) {
                if (((P = m.type), P === zn)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (c = l(L, m.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  L.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Vt &&
                    lc(P) === L.type)
                ) {
                  n(d, L.sibling),
                    (c = l(L, m.props)),
                    (c.ref = kr(d, L, m)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            m.type === zn
              ? ((c = Sn(m.props.children, d.mode, p, m.key)),
                (c.return = d),
                (d = c))
              : ((p = Gl(m.type, m.key, m.props, null, d.mode, p)),
                (p.ref = kr(d, c, m)),
                (p.return = d),
                (d = p));
          }
          return i(d);
        case Dn:
          e: {
            for (L = m.key; c !== null; ) {
              if (c.key === L)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = Ki(m, d.mode, p)), (c.return = d), (d = c);
          }
          return i(d);
        case Vt:
          return (L = m._init), R(d, c, L(m._payload), p);
      }
      if (Mr(m)) return w(d, c, m, p);
      if (wr(m)) return y(d, c, m, p);
      Ml(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = Qi(m, d.mode, p)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return R;
}
var lr = yd(!0),
  gd = yd(!1),
  hl = {},
  St = un(hl),
  nl = un(hl),
  rl = un(hl);
function yn(e) {
  if (e === hl) throw Error(_(174));
  return e;
}
function Ra(e, t) {
  switch ((ee(rl, t), ee(nl, e), ee(St, hl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : au(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = au(t, e));
  }
  ne(St), ee(St, t);
}
function or() {
  ne(St), ne(nl), ne(rl);
}
function wd(e) {
  yn(rl.current);
  var t = yn(St.current),
    n = au(t, e.type);
  t !== n && (ee(nl, e), ee(St, n));
}
function _a(e) {
  nl.current === e && (ne(St), ne(nl));
}
var ue = un(0);
function po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ii = [];
function Na() {
  for (var e = 0; e < Ii.length; e++)
    Ii[e]._workInProgressVersionPrimary = null;
  Ii.length = 0;
}
var Hl = zt.ReactCurrentDispatcher,
  Ai = zt.ReactCurrentBatchConfig,
  Cn = 0,
  ae = null,
  ge = null,
  xe = null,
  ho = !1,
  Ar = !1,
  ll = 0,
  lv = 0;
function Ne() {
  throw Error(_(321));
}
function La(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ja(e, t, n, r, l, o) {
  if (
    ((Cn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hl.current = e === null || e.memoizedState === null ? av : sv),
    (e = n(r, l)),
    Ar)
  ) {
    o = 0;
    do {
      if (((Ar = !1), (ll = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (Hl.current = cv),
        (e = n(r, l));
    } while (Ar);
  }
  if (
    ((Hl.current = mo),
    (t = ge !== null && ge.next !== null),
    (Cn = 0),
    (xe = ge = ae = null),
    (ho = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Ta() {
  var e = ll !== 0;
  return (ll = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function nt() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ae.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(_(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function ol(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bi(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var f = s.lane;
      if ((Cn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (ae.lanes |= f),
          (kn |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      dt(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (kn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vi(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    dt(o, t.memoizedState) || ($e = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Sd() {}
function xd(e, t) {
  var n = ae,
    r = nt(),
    l = t(),
    o = !dt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), ($e = !0)),
    (r = r.queue),
    Ma(kd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      il(9, Cd.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(_(349));
    Cn & 30 || Ed(n, t, l);
  }
  return l;
}
function Ed(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pd(t) && Rd(e);
}
function kd(e, t, n) {
  return n(function () {
    Pd(t) && Rd(e);
  });
}
function Pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Rd(e) {
  var t = Ot(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function oc(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ol,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uv.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function il(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _d() {
  return nt().memoizedState;
}
function Ql(e, t, n, r) {
  var l = yt();
  (ae.flags |= e),
    (l.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r));
}
function Do(e, t, n, r) {
  var l = nt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && La(r, i.deps))) {
      l.memoizedState = il(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = il(1 | t, n, o, r));
}
function ic(e, t) {
  return Ql(8390656, 8, e, t);
}
function Ma(e, t) {
  return Do(2048, 8, e, t);
}
function Nd(e, t) {
  return Do(4, 2, e, t);
}
function Ld(e, t) {
  return Do(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Td(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Do(4, 4, jd.bind(null, t, e), n)
  );
}
function Oa() {}
function Md(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Od(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Dd(e, t, n) {
  return Cn & 21
    ? (dt(n, t) || ((n = Uf()), (ae.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function ov(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ai.transition;
  Ai.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Ai.transition = r);
  }
}
function zd() {
  return nt().memoizedState;
}
function iv(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fd(e))
  )
    Ud(t, n);
  else if (((n = pd(e, t, n, r)), n !== null)) {
    var l = De();
    ft(n, e, r, l), $d(n, t, r);
  }
}
function uv(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fd(e)) Ud(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), dt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ka(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pd(e, t, l, r)),
      n !== null && ((l = De()), ft(n, e, r, l), $d(n, t, r));
  }
}
function Fd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Ud(e, t) {
  Ar = ho = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $d(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
var mo = {
    readContext: tt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  av = {
    readContext: tt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ql(4194308, 4, jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ql(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = iv.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oc,
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = oc(!1),
        t = e[0];
      return (e = ov.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = yt();
      if (re) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(_(349));
        Cn & 30 || Ed(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ic(kd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        il(9, Cd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = Ee.identifierPrefix;
      if (re) {
        var n = _t,
          r = Rt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ll++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sv = {
    readContext: tt,
    useCallback: Md,
    useContext: tt,
    useEffect: Ma,
    useImperativeHandle: Td,
    useInsertionEffect: Nd,
    useLayoutEffect: Ld,
    useMemo: Od,
    useReducer: Bi,
    useRef: _d,
    useState: function () {
      return Bi(ol);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = nt();
      return Dd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Bi(ol)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Sd,
    useSyncExternalStore: xd,
    useId: zd,
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: tt,
    useCallback: Md,
    useContext: tt,
    useEffect: Ma,
    useImperativeHandle: Td,
    useInsertionEffect: Nd,
    useLayoutEffect: Ld,
    useMemo: Od,
    useReducer: Vi,
    useRef: _d,
    useState: function () {
      return Vi(ol);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = nt();
      return ge === null ? (t.memoizedState = e) : Dd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Vi(ol)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Sd,
    useSyncExternalStore: xd,
    useId: zd,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $h(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fv = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yo || ((yo = !0), (Bu = r)), Tu(e, t);
    }),
    n
  );
}
function Ad(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Tu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Tu(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function uc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Pv.bind(null, e, t, n)), t.then(e, e));
}
function ac(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dv = zt.ReactCurrentOwner,
  $e = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? gd(t, null, n, r) : lr(t, e.child, n, r);
}
function cc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    qn(t, l),
    (r = ja(e, t, n, r, o, l)),
    (n = Ta()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (re && n && ga(t), (t.flags |= 1), Oe(e, t, r, l), t.child)
  );
}
function fc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ba(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Bd(e, t, o, r, l))
      : ((e = Gl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qr(o, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Dt(e, t, l);
  }
  return Mu(e, t, n, r, l);
}
function Vd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Qn, We),
        (We |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Qn, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee(Qn, We),
        (We |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Qn, We),
      (We |= r);
  return Oe(e, t, l, n), t.child;
}
function Wd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mu(e, t, n, r, l) {
  var o = Ae(n) ? xn : Me.current;
  return (
    (o = nr(t, o)),
    qn(t, l),
    (n = ja(e, t, n, r, o, l)),
    (r = Ta()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (re && r && ga(t), (t.flags |= 1), Oe(e, t, n, l), t.child)
  );
}
function dc(e, t, n, r, l) {
  if (Ae(n)) {
    var o = !0;
    io(t);
  } else o = !1;
  if ((qn(t, l), t.stateNode === null))
    Kl(e, t), vd(t, n, r), ju(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = tt(s))
      : ((s = Ae(n) ? xn : Me.current), (s = nr(t, s)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && rc(t, i, r, s)),
      (Wt = !1);
    var v = t.memoizedState;
    (i.state = v),
      fo(t, r, i, l),
      (a = t.memoizedState),
      u !== r || v !== a || Ie.current || Wt
        ? (typeof f == "function" && (Lu(t, n, f, r), (a = t.memoizedState)),
          (u = Wt || nc(t, n, u, r, v, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      hd(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : it(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (v = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = tt(a))
        : ((a = Ae(n) ? xn : Me.current), (a = nr(t, a)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || v !== a) && rc(t, i, r, a)),
      (Wt = !1),
      (v = t.memoizedState),
      (i.state = v),
      fo(t, r, i, l);
    var w = t.memoizedState;
    u !== h || v !== w || Ie.current || Wt
      ? (typeof g == "function" && (Lu(t, n, g, r), (w = t.memoizedState)),
        (s = Wt || nc(t, n, s, r, v, w, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ou(e, t, n, r, o, l);
}
function Ou(e, t, n, r, l, o) {
  Wd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Zs(t, n, !1), Dt(e, t, o);
  (r = t.stateNode), (dv.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, u, o)))
      : Oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Zs(t, n, !0),
    t.child
  );
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Js(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Js(e, t.context, !1),
    Ra(e, t.containerInfo);
}
function pc(e, t, n, r, l) {
  return rr(), Sa(l), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function zu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(ue, l & 1),
    e === null)
  )
    return (
      _u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Uo(i, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = zu(n)),
              (t.memoizedState = Du),
              e)
            : Da(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return pv(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = tn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = tn(u, o)) : ((o = Sn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? zu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Du),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Da(e, t) {
  return (
    (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ol(e, t, n, r) {
  return (
    r !== null && Sa(r),
    lr(t, e.child, null, n),
    (e = Da(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function pv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wi(Error(_(422)))), Ol(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Uo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Sn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && lr(t, e.child, null, i),
        (t.child.memoizedState = zu(i)),
        (t.memoizedState = Du),
        o);
  if (!(t.mode & 1)) return Ol(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(_(419))), (r = Wi(o, r, void 0)), Ol(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), $e || u)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ot(e, l), ft(r, e, l, -1));
    }
    return Aa(), (r = Wi(Error(_(421)))), Ol(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = Zt(l.nextSibling)),
      (Qe = t),
      (re = !0),
      (st = null),
      e !== null &&
        ((Ze[qe++] = Rt),
        (Ze[qe++] = _t),
        (Ze[qe++] = En),
        (Rt = e.id),
        (_t = e.overflow),
        (En = t)),
      (t = Da(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nu(e.return, t, n);
}
function Hi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Kd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Oe(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
        else if (e.tag === 19) hc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && po(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Hi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && po(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Hi(t, !0, n, null, o);
        break;
      case "together":
        Hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hv(e, t, n) {
  switch (t.tag) {
    case 3:
      Hd(t), rr();
      break;
    case 5:
      wd(t);
      break;
    case 1:
      Ae(t.type) && io(t);
      break;
    case 4:
      Ra(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(so, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qd(e, t, n)
          : (ee(ue, ue.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Kd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vd(e, t, n);
  }
  return Dt(e, t, n);
}
var Yd, Fu, Xd, Gd;
Yd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fu = function () {};
Xd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), yn(St.current);
    var o = null;
    switch (n) {
      case "input":
        (l = lu(e, l)), (r = lu(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = uu(e, l)), (r = uu(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = lo);
    }
    su(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Qr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Qr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && te("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mv(e, t, n) {
  var r = t.pendingProps;
  switch ((wa(t), t.tag)) {
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
      return Le(t), null;
    case 1:
      return Ae(t.type) && oo(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        or(),
        ne(Ie),
        ne(Me),
        Na(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Hu(st), (st = null)))),
        Fu(e, t),
        Le(t),
        null
      );
    case 5:
      _a(t);
      var l = yn(rl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Le(t), null;
        }
        if (((e = yn(St.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[tl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dr.length; l++) te(Dr[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Cs(r, o), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              Ps(r, o), te("invalid", r);
          }
          su(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Qr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              El(r), ks(r, o, !0);
              break;
            case "textarea":
              El(r), Rs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = lo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ef(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[gt] = t),
            (e[tl] = r),
            Yd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = cu(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dr.length; l++) te(Dr[l], e);
                l = r;
                break;
              case "source":
                te("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (l = r);
                break;
              case "details":
                te("toggle", e), (l = r);
                break;
              case "input":
                Cs(e, r), (l = lu(e, r)), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                Ps(e, r), (l = uu(e, r)), te("invalid", e);
                break;
              default:
                l = r;
            }
            su(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Pf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Cf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Kr(e, a)
                    : typeof a == "number" && Kr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Qr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && te("scroll", e)
                      : a != null && la(e, o, a, i));
              }
            switch (n) {
              case "input":
                El(e), ks(e, r, !1);
                break;
              case "textarea":
                El(e), Rs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = lo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = yn(rl.current)), yn(St.current), Tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (o = r.nodeValue !== n) && ((e = Qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (ne(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && He !== null && t.mode & 1 && !(t.flags & 128))
          dd(), rr(), (t.flags |= 98560), (o = !1);
        else if (((o = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[gt] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else st !== null && (Hu(st), (st = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? we === 0 && (we = 3) : Aa())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        or(), Fu(e, t), e === null && br(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Ca(t.type._context), Le(t), null;
    case 17:
      return Ae(t.type) && oo(), Le(t), null;
    case 19:
      if ((ne(ue), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pr(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = po(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > ur &&
            ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = po(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !re)
            )
              return Le(t), null;
          } else
            2 * pe() - o.renderingStartTime > ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ue.current),
          ee(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        Ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function vv(e, t) {
  switch ((wa(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        ne(Ie),
        ne(Me),
        Na(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _a(t), null;
    case 13:
      if (
        (ne(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(ue), null;
    case 4:
      return or(), null;
    case 10:
      return Ca(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1,
  Te = !1,
  yv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Uu(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var mc = !1;
function gv(e, t) {
  if (((Su = to), (e = bf()), ya(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            f = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (v = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++s === l && (u = i),
                v === o && ++f === r && (a = i),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xu = { focusedElem: e, selectionRange: n }, to = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    R = w.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : it(t.type, y),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (p) {
          ce(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = mc), (mc = !1), w;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Uu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $u(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[tl], delete t[ku], delete t[ev], delete t[tv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
function Au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), (e = e.sibling);
}
var ke = null,
  ut = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) qd(e, t, n), (n = n.sibling);
}
function qd(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(_o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Hn(n, t);
    case 6:
      var r = ke,
        l = ut;
      (ke = null),
        Bt(e, t, n),
        (ke = r),
        (ut = l),
        ke !== null &&
          (ut
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (ut
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ui(e.parentNode, n)
              : e.nodeType === 1 && Ui(e, n),
            Jr(e))
          : Ui(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = ut),
        (ke = n.stateNode.containerInfo),
        (ut = !0),
        Bt(e, t, n),
        (ke = r),
        (ut = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Uu(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ce(n, t, u);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Bt(e, t, n), (Te = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function yc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yv()),
      t.forEach(function (r) {
        var l = _v.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ke = u.stateNode), (ut = !1);
              break e;
            case 3:
              (ke = u.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (ke = u.stateNode.containerInfo), (ut = !0);
              break e;
          }
          u = u.return;
        }
        if (ke === null) throw Error(_(160));
        qd(o, i, l), (ke = null), (ut = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bd(t, e), (t = t.sibling);
}
function bd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), vt(e), r & 4)) {
        try {
          Br(3, e, e.return), zo(3, e);
        } catch (y) {
          ce(e, e.return, y);
        }
        try {
          Br(5, e, e.return);
        } catch (y) {
          ce(e, e.return, y);
        }
      }
      break;
    case 1:
      ot(t, e), vt(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        vt(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kr(l, "");
        } catch (y) {
          ce(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Sf(l, o),
              cu(u, i);
            var s = cu(u, o);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                h = a[i + 1];
              f === "style"
                ? Pf(l, h)
                : f === "dangerouslySetInnerHTML"
                ? Cf(l, h)
                : f === "children"
                ? Kr(l, h)
                : la(l, f, h, s);
            }
            switch (u) {
              case "input":
                ou(l, o);
                break;
              case "textarea":
                xf(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Xn(l, !!o.multiple, g, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xn(l, !!o.multiple, o.defaultValue, !0)
                      : Xn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tl] = o;
          } catch (y) {
            ce(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ot(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          ce(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (y) {
          ce(e, e.return, y);
        }
      break;
    case 4:
      ot(t, e), vt(e);
      break;
    case 13:
      ot(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ua = pe())),
        r & 4 && yc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || f), ot(t, e), (Te = s)) : ot(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (M = e, f = e.child; f !== null; ) {
            for (h = M = f; M !== null; ) {
              switch (((v = M), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, v, v.return);
                  break;
                case 1:
                  Hn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      ce(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Hn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    wc(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (M = g)) : wc(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = kf("display", i)));
              } catch (y) {
                ce(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (y) {
                ce(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), vt(e), r & 4 && yc(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kr(l, ""), (r.flags &= -33));
          var o = vc(e);
          Au(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = vc(e);
          Iu(e, u, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wv(e, t, n) {
  (M = e), ep(e);
}
function ep(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Dl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Te;
        u = Dl;
        var s = Te;
        if (((Dl = i), (Te = a) && !s))
          for (M = l; M !== null; )
            (i = M),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Sc(l)
                : a !== null
                ? ((a.return = i), (M = a))
                : Sc(l);
        for (; o !== null; ) (M = o), ep(o), (o = o.sibling);
        (M = l), (Dl = u), (Te = s);
      }
      gc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (M = o)) : gc(e);
  }
}
function gc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || zo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && tc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tc(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && Jr(h);
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
              throw Error(_(163));
          }
        Te || (t.flags & 512 && $u(t));
      } catch (v) {
        ce(t, t.return, v);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function wc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Sc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zo(4, t);
          } catch (a) {
            ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ce(t, l, a);
            }
          }
          var o = t.return;
          try {
            $u(t);
          } catch (a) {
            ce(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $u(t);
          } catch (a) {
            ce(t, i, a);
          }
      }
    } catch (a) {
      ce(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var Sv = Math.ceil,
  vo = zt.ReactCurrentDispatcher,
  za = zt.ReactCurrentOwner,
  et = zt.ReactCurrentBatchConfig,
  Q = 0,
  Ee = null,
  ve = null,
  Pe = 0,
  We = 0,
  Qn = un(0),
  we = 0,
  ul = null,
  kn = 0,
  Fo = 0,
  Fa = 0,
  Vr = null,
  Ue = null,
  Ua = 0,
  ur = 1 / 0,
  kt = null,
  yo = !1,
  Bu = null,
  bt = null,
  zl = !1,
  Yt = null,
  go = 0,
  Wr = 0,
  Vu = null,
  Yl = -1,
  Xl = 0;
function De() {
  return Q & 6 ? pe() : Yl !== -1 ? Yl : (Yl = pe());
}
function en(e) {
  return e.mode & 1
    ? Q & 2 && Pe !== 0
      ? Pe & -Pe
      : rv.transition !== null
      ? (Xl === 0 && (Xl = Uf()), Xl)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hf(e.type))),
        e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (Vu = null), Error(_(185)));
  fl(e, n, r),
    (!(Q & 2) || e !== Ee) &&
      (e === Ee && (!(Q & 2) && (Fo |= n), we === 4 && Qt(e, Pe)),
      Be(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((ur = pe() + 500), Mo && an()));
}
function Be(e, t) {
  var n = e.callbackNode;
  rm(e, t);
  var r = eo(e, e === Ee ? Pe : 0);
  if (r === 0)
    n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ls(n), t === 1))
      e.tag === 0 ? nv(xc.bind(null, e)) : sd(xc.bind(null, e)),
        qm(function () {
          !(Q & 6) && an();
        }),
        (n = null);
    else {
      switch ($f(r)) {
        case 1:
          n = sa;
          break;
        case 4:
          n = zf;
          break;
        case 16:
          n = bl;
          break;
        case 536870912:
          n = Ff;
          break;
        default:
          n = bl;
      }
      n = ap(n, tp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tp(e, t) {
  if (((Yl = -1), (Xl = 0), Q & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = eo(e, e === Ee ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wo(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = rp();
    (Ee !== e || Pe !== t) && ((kt = null), (ur = pe() + 500), wn(e, t));
    do
      try {
        Cv();
        break;
      } catch (u) {
        np(e, u);
      }
    while (1);
    Ea(),
      (vo.current = o),
      (Q = l),
      ve !== null ? (t = 0) : ((Ee = null), (Pe = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = mu(e)), l !== 0 && ((r = l), (t = Wu(e, l)))), t === 1)
    )
      throw ((n = ul), wn(e, 0), Qt(e, r), Be(e, pe()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xv(l) &&
          ((t = wo(e, r)),
          t === 2 && ((o = mu(e)), o !== 0 && ((r = o), (t = Wu(e, o)))),
          t === 1))
      )
        throw ((n = ul), wn(e, 0), Qt(e, r), Be(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          hn(e, Ue, kt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Ua + 500 - pe()), 10 < t))
          ) {
            if (eo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Cu(hn.bind(null, e, Ue, kt), t);
            break;
          }
          hn(e, Ue, kt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ct(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cu(hn.bind(null, e, Ue, kt), r);
            break;
          }
          hn(e, Ue, kt);
          break;
        case 5:
          hn(e, Ue, kt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Be(e, pe()), e.callbackNode === n ? tp.bind(null, e) : null;
}
function Wu(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = wo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Hu(t)),
    e
  );
}
function Hu(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function xv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~Fa,
      t &= ~Fo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xc(e) {
  if (Q & 6) throw Error(_(327));
  bn();
  var t = eo(e, 0);
  if (!(t & 1)) return Be(e, pe()), null;
  var n = wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mu(e);
    r !== 0 && ((t = r), (n = Wu(e, r)));
  }
  if (n === 1) throw ((n = ul), wn(e, 0), Qt(e, t), Be(e, pe()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, Ue, kt),
    Be(e, pe()),
    null
  );
}
function $a(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((ur = pe() + 500), Mo && an());
  }
}
function Pn(e) {
  Yt !== null && Yt.tag === 0 && !(Q & 6) && bn();
  var t = Q;
  Q |= 1;
  var n = et.transition,
    r = Y;
  try {
    if (((et.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (et.transition = n), (Q = t), !(Q & 6) && an();
  }
}
function Ia() {
  (We = Qn.current), ne(Qn);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zm(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((wa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          or(), ne(Ie), ne(Me), Na();
          break;
        case 5:
          _a(r);
          break;
        case 4:
          or();
          break;
        case 13:
          ne(ue);
          break;
        case 19:
          ne(ue);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ve = e = tn(e.current, null)),
    (Pe = We = t),
    (we = 0),
    (ul = null),
    (Fa = Fo = kn = 0),
    (Ue = Vr = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((n = vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    vn = null;
  }
  return e;
}
function np(e, t) {
  do {
    var n = ve;
    try {
      if ((Ea(), (Hl.current = mo), ho)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ho = !1;
      }
      if (
        ((Cn = 0),
        (xe = ge = ae = null),
        (Ar = !1),
        (ll = 0),
        (za.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (ul = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Pe),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            f = u,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = ac(i);
          if (g !== null) {
            (g.flags &= -257),
              sc(g, i, u, o, t),
              g.mode & 1 && uc(o, s, t),
              (t = g),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              uc(o, s, t), Aa();
              break e;
            }
            a = Error(_(426));
          }
        } else if (re && u.mode & 1) {
          var R = ac(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              sc(R, i, u, o, t),
              Sa(ir(a, u));
            break e;
          }
        }
        (o = a = ir(a, u)),
          we !== 4 && (we = 2),
          Vr === null ? (Vr = [o]) : Vr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Id(o, a, t);
              ec(o, d);
              break e;
            case 1:
              u = a;
              var c = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (bt === null || !bt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var p = Ad(o, u, t);
                ec(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      op(n);
    } catch (P) {
      (t = P), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rp() {
  var e = vo.current;
  return (vo.current = mo), e === null ? mo : e;
}
function Aa() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(kn & 268435455) && !(Fo & 268435455)) || Qt(Ee, Pe);
}
function wo(e, t) {
  var n = Q;
  Q |= 2;
  var r = rp();
  (Ee !== e || Pe !== t) && ((kt = null), wn(e, t));
  do
    try {
      Ev();
      break;
    } catch (l) {
      np(e, l);
    }
  while (1);
  if ((Ea(), (Q = n), (vo.current = r), ve !== null)) throw Error(_(261));
  return (Ee = null), (Pe = 0), we;
}
function Ev() {
  for (; ve !== null; ) lp(ve);
}
function Cv() {
  for (; ve !== null && !Xh(); ) lp(ve);
}
function lp(e) {
  var t = up(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps),
    t === null ? op(e) : (ve = t),
    (za.current = null);
}
function op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vv(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = mv(n, t, We)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function hn(e, t, n) {
  var r = Y,
    l = et.transition;
  try {
    (et.transition = null), (Y = 1), kv(e, t, n, r);
  } finally {
    (et.transition = l), (Y = r);
  }
  return null;
}
function kv(e, t, n, r) {
  do bn();
  while (Yt !== null);
  if (Q & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lm(e, o),
    e === Ee && ((ve = Ee = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zl ||
      ((zl = !0),
      ap(bl, function () {
        return bn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = et.transition), (et.transition = null);
    var i = Y;
    Y = 1;
    var u = Q;
    (Q |= 4),
      (za.current = null),
      gv(e, n),
      bd(n, e),
      Hm(xu),
      (to = !!Su),
      (xu = Su = null),
      (e.current = n),
      wv(n),
      Gh(),
      (Q = u),
      (Y = i),
      (et.transition = o);
  } else e.current = n;
  if (
    (zl && ((zl = !1), (Yt = e), (go = l)),
    (o = e.pendingLanes),
    o === 0 && (bt = null),
    qh(n.stateNode),
    Be(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (yo) throw ((yo = !1), (e = Bu), (Bu = null), e);
  return (
    go & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Vu ? Wr++ : ((Wr = 0), (Vu = e))) : (Wr = 0),
    an(),
    null
  );
}
function bn() {
  if (Yt !== null) {
    var e = $f(go),
      t = et.transition,
      n = Y;
    try {
      if (((et.transition = null), (Y = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (go = 0), Q & 6)) throw Error(_(331));
        var l = Q;
        for (Q |= 4, M = e.current; M !== null; ) {
          var o = M,
            i = o.child;
          if (M.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var f = M;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, f, o);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (M = h);
                  else
                    for (; M !== null; ) {
                      f = M;
                      var v = f.sibling,
                        g = f.return;
                      if ((Jd(f), f === s)) {
                        M = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (M = v);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var R = y.sibling;
                    (y.sibling = null), (y = R);
                  } while (y !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (M = i);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (M = d);
                break e;
              }
              M = o.return;
            }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          i = M;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (M = m);
          else
            e: for (i = c; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, u);
                  }
                } catch (P) {
                  ce(u, u.return, P);
                }
              if (u === i) {
                M = null;
                break e;
              }
              var p = u.sibling;
              if (p !== null) {
                (p.return = u.return), (M = p);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((Q = l), an(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(_o, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (et.transition = t);
    }
  }
  return !1;
}
function Ec(e, t, n) {
  (t = ir(n, t)),
    (t = Id(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = De()),
    e !== null && (fl(e, 1, t), Be(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Ec(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ec(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = ir(n, e)),
            (e = Ad(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = De()),
            t !== null && (fl(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Pe & n) === n &&
      (we === 4 || (we === 3 && (Pe & 130023424) === Pe && 500 > pe() - Ua)
        ? wn(e, 0)
        : (Fa |= n)),
    Be(e, t);
}
function ip(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pl), (Pl <<= 1), !(Pl & 130023424) && (Pl = 4194304))
      : (t = 1));
  var n = De();
  (e = Ot(e, t)), e !== null && (fl(e, t, n), Be(e, n));
}
function Rv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ip(e, n);
}
function _v(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), ip(e, n);
}
var up;
up = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), hv(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), re && t.flags & 1048576 && cd(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Kl(e, t), (e = t.pendingProps);
      var l = nr(t, Me.current);
      qn(t, n), (l = ja(null, t, r, e, l, n));
      var o = Ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), io(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Pa(t),
            (l.updater = Oo),
            (t.stateNode = l),
            (l._reactInternals = t),
            ju(t, r, e, n),
            (t = Ou(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && ga(t), Oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Lv(r)),
          (e = it(r, e)),
          l)
        ) {
          case 0:
            t = Mu(null, t, r, e, n);
            break e;
          case 1:
            t = dc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = fc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Mu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        dc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Hd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          hd(e, t),
          fo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = ir(Error(_(423)), t)), (t = pc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ir(Error(_(424)), t)), (t = pc(e, t, r, n, l));
            break e;
          } else
            for (
              He = Zt(t.stateNode.containerInfo.firstChild),
                Qe = t,
                re = !0,
                st = null,
                n = gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === l)) {
            t = Dt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wd(t),
        e === null && _u(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Eu(r, l) ? (i = null) : o !== null && Eu(r, o) && (t.flags |= 32),
        Wd(e, t),
        Oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && _u(t), null;
    case 13:
      return Qd(e, t, n);
    case 4:
      return (
        Ra(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        cc(e, t, r, l, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ee(so, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (dt(o.value, i)) {
            if (o.children === l.children && !Ie.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Lt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Nu(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Nu(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qn(t, n),
        (l = tt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = it(r, t.pendingProps)),
        (l = it(r.type, l)),
        fc(e, t, r, l, n)
      );
    case 15:
      return Bd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Kl(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), io(t)) : (e = !1),
        qn(t, n),
        vd(t, r, l),
        ju(t, r, l, n),
        Ou(null, t, r, !0, e, n)
      );
    case 19:
      return Kd(e, t, n);
    case 22:
      return Vd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function ap(e, t) {
  return Df(e, t);
}
function Nv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new Nv(e, t, n, r);
}
function Ba(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Lv(e) {
  if (typeof e == "function") return Ba(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ia)) return 11;
    if (e === ua) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ba(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case zn:
        return Sn(n.children, l, o, t);
      case oa:
        (i = 8), (l |= 8);
        break;
      case eu:
        return (
          (e = be(12, n, t, l | 2)), (e.elementType = eu), (e.lanes = o), e
        );
      case tu:
        return (e = be(13, n, t, l)), (e.elementType = tu), (e.lanes = o), e;
      case nu:
        return (e = be(19, n, t, l)), (e.elementType = nu), (e.lanes = o), e;
      case yf:
        return Uo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mf:
              i = 10;
              break e;
            case vf:
              i = 9;
              break e;
            case ia:
              i = 11;
              break e;
            case ua:
              i = 14;
              break e;
            case Vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Sn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Uo(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qi(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Ki(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ri(0)),
    (this.expirationTimes = Ri(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ri(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Va(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new jv(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pa(o),
    e
  );
}
function Tv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sp(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return ad(e, n, t);
  }
  return t;
}
function cp(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Va(n, r, !0, e, l, o, i, u, a)),
    (e.context = sp(null)),
    (n = e.current),
    (r = De()),
    (l = en(n)),
    (o = Lt(r, l)),
    (o.callback = t ?? null),
    qt(n, o, l),
    (e.current.lanes = l),
    fl(e, l, r),
    Be(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var l = t.current,
    o = De(),
    i = en(l);
  return (
    (n = sp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, i)),
    e !== null && (ft(e, l, i, o), Wl(e, l, i)),
    i
  );
}
function So(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function Mv() {
  return null;
}
var fp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
Io.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  $o(e, t, null, null);
};
Io.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function () {
      $o(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && Wf(e);
  }
};
function Qa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ao(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kc() {}
function Ov(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = So(i);
        o.call(s);
      };
    }
    var i = cp(t, r, e, 0, null, !1, !1, "", kc);
    return (
      (e._reactRootContainer = i),
      (e[Mt] = i.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      Pn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = So(a);
      u.call(s);
    };
  }
  var a = Va(e, 0, !1, null, null, !1, !1, "", kc);
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    Pn(function () {
      $o(t, a, n, r);
    }),
    a
  );
}
function Bo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = So(i);
        u.call(a);
      };
    }
    $o(t, i, e, l);
  } else i = Ov(n, t, e, l, r);
  return So(i);
}
If = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 &&
          (ca(t, n | 1), Be(t, pe()), !(Q & 6) && ((ur = pe() + 500), an()));
      }
      break;
    case 13:
      Pn(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var l = De();
          ft(r, e, 1, l);
        }
      }),
        Wa(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = De();
      ft(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
Af = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = De();
      ft(n, e, t, r);
    }
    Wa(e, t);
  }
};
Bf = function () {
  return Y;
};
Vf = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
du = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ou(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = To(r);
            if (!l) throw Error(_(90));
            wf(r), ou(r, l);
          }
        }
      }
      break;
    case "textarea":
      xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
Nf = $a;
Lf = Pn;
var Dv = { usingClientEntryPoint: !1, Events: [pl, In, To, Rf, _f, $a] },
  Rr = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zv = {
    bundleType: Rr.bundleType,
    version: Rr.version,
    rendererPackageName: Rr.rendererPackageName,
    rendererConfig: Rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rr.findFiberByHostInstance || Mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isActive && Fl.supportsFiber)
    try {
      (_o = Fl.inject(zv)), (wt = Fl);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dv;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qa(t)) throw Error(_(200));
  return Tv(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!Qa(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = fp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Va(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Mf(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return Pn(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Ao(t)) throw Error(_(200));
  return Bo(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!Qa(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = fp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Mt] = t.current),
    br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Io(t);
};
Ye.render = function (e, t, n) {
  if (!Ao(t)) throw Error(_(200));
  return Bo(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Ao(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Pn(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = $a;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ao(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Bo(e, t, n, !1, r);
};
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function dp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp);
    } catch (e) {
      console.error(e);
    }
}
dp(), (cf.exports = Ye);
var Ka = cf.exports;
const Fv = qc(Ka);
var Pc = Ka;
(qi.createRoot = Pc.createRoot), (qi.hydrateRoot = Pc.hydrateRoot);
var pp = { exports: {} },
  hp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = C;
function Uv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $v = typeof Object.is == "function" ? Object.is : Uv,
  Iv = ar.useState,
  Av = ar.useEffect,
  Bv = ar.useLayoutEffect,
  Vv = ar.useDebugValue;
function Wv(e, t) {
  var n = t(),
    r = Iv({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    Bv(
      function () {
        (l.value = n), (l.getSnapshot = t), Yi(l) && o({ inst: l });
      },
      [e, n, t]
    ),
    Av(
      function () {
        return (
          Yi(l) && o({ inst: l }),
          e(function () {
            Yi(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    Vv(n),
    n
  );
}
function Yi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$v(e, n);
  } catch {
    return !0;
  }
}
function Hv(e, t) {
  return t();
}
var Qv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Hv
    : Wv;
hp.useSyncExternalStore =
  ar.useSyncExternalStore !== void 0 ? ar.useSyncExternalStore : Qv;
pp.exports = hp;
var Kv = pp.exports,
  mp = { exports: {} },
  vp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = C,
  Yv = Kv;
function Xv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gv = typeof Object.is == "function" ? Object.is : Xv,
  Jv = Yv.useSyncExternalStore,
  Zv = Vo.useRef,
  qv = Vo.useEffect,
  bv = Vo.useMemo,
  ey = Vo.useDebugValue;
vp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = Zv(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = bv(
    function () {
      function a(g) {
        if (!s) {
          if (((s = !0), (f = g), (g = r(g)), l !== void 0 && i.hasValue)) {
            var w = i.value;
            if (l(w, g)) return (h = w);
          }
          return (h = g);
        }
        if (((w = h), Gv(f, g))) return w;
        var y = r(g);
        return l !== void 0 && l(w, y) ? w : ((f = g), (h = y));
      }
      var s = !1,
        f,
        h,
        v = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        v === null
          ? void 0
          : function () {
              return a(v());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = Jv(e, o[0], o[1]);
  return (
    qv(
      function () {
        (i.hasValue = !0), (i.value = u);
      },
      [u]
    ),
    ey(u),
    u
  );
};
mp.exports = vp;
var ty = mp.exports;
function ny(e) {
  e();
}
let yp = ny;
const ry = (e) => (yp = e),
  ly = () => yp,
  Rc = Symbol.for("react-redux-context"),
  _c = typeof globalThis < "u" ? globalThis : {};
function oy() {
  var e;
  if (!C.createContext) return {};
  const t = (e = _c[Rc]) != null ? e : (_c[Rc] = new Map());
  let n = t.get(C.createContext);
  return n || ((n = C.createContext(null)), t.set(C.createContext, n)), n;
}
const ln = oy();
function Ya(e = ln) {
  return function () {
    return C.useContext(e);
  };
}
const gp = Ya(),
  iy = () => {
    throw new Error("uSES not initialized!");
  };
let wp = iy;
const uy = (e) => {
    wp = e;
  },
  ay = (e, t) => e === t;
function sy(e = ln) {
  const t = e === ln ? gp : Ya(e);
  return function (r, l = {}) {
    const {
        equalityFn: o = ay,
        stabilityCheck: i = void 0,
        noopCheck: u = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: a,
        subscription: s,
        getServerState: f,
        stabilityCheck: h,
        noopCheck: v,
      } = t();
    C.useRef(!0);
    const g = C.useCallback(
        {
          [r.name](y) {
            return r(y);
          },
        }[r.name],
        [r, h, i]
      ),
      w = wp(s.addNestedSub, a.getState, f || a.getState, g, o);
    return C.useDebugValue(w), w;
  };
}
const Qu = sy();
var Sp = { exports: {} },
  X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ce = typeof Symbol == "function" && Symbol.for,
  Xa = Ce ? Symbol.for("react.element") : 60103,
  Ga = Ce ? Symbol.for("react.portal") : 60106,
  Wo = Ce ? Symbol.for("react.fragment") : 60107,
  Ho = Ce ? Symbol.for("react.strict_mode") : 60108,
  Qo = Ce ? Symbol.for("react.profiler") : 60114,
  Ko = Ce ? Symbol.for("react.provider") : 60109,
  Yo = Ce ? Symbol.for("react.context") : 60110,
  Ja = Ce ? Symbol.for("react.async_mode") : 60111,
  Xo = Ce ? Symbol.for("react.concurrent_mode") : 60111,
  Go = Ce ? Symbol.for("react.forward_ref") : 60112,
  Jo = Ce ? Symbol.for("react.suspense") : 60113,
  cy = Ce ? Symbol.for("react.suspense_list") : 60120,
  Zo = Ce ? Symbol.for("react.memo") : 60115,
  qo = Ce ? Symbol.for("react.lazy") : 60116,
  fy = Ce ? Symbol.for("react.block") : 60121,
  dy = Ce ? Symbol.for("react.fundamental") : 60117,
  py = Ce ? Symbol.for("react.responder") : 60118,
  hy = Ce ? Symbol.for("react.scope") : 60119;
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xa:
        switch (((e = e.type), e)) {
          case Ja:
          case Xo:
          case Wo:
          case Qo:
          case Ho:
          case Jo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Yo:
              case Go:
              case qo:
              case Zo:
              case Ko:
                return e;
              default:
                return t;
            }
        }
      case Ga:
        return t;
    }
  }
}
function xp(e) {
  return Ge(e) === Xo;
}
X.AsyncMode = Ja;
X.ConcurrentMode = Xo;
X.ContextConsumer = Yo;
X.ContextProvider = Ko;
X.Element = Xa;
X.ForwardRef = Go;
X.Fragment = Wo;
X.Lazy = qo;
X.Memo = Zo;
X.Portal = Ga;
X.Profiler = Qo;
X.StrictMode = Ho;
X.Suspense = Jo;
X.isAsyncMode = function (e) {
  return xp(e) || Ge(e) === Ja;
};
X.isConcurrentMode = xp;
X.isContextConsumer = function (e) {
  return Ge(e) === Yo;
};
X.isContextProvider = function (e) {
  return Ge(e) === Ko;
};
X.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xa;
};
X.isForwardRef = function (e) {
  return Ge(e) === Go;
};
X.isFragment = function (e) {
  return Ge(e) === Wo;
};
X.isLazy = function (e) {
  return Ge(e) === qo;
};
X.isMemo = function (e) {
  return Ge(e) === Zo;
};
X.isPortal = function (e) {
  return Ge(e) === Ga;
};
X.isProfiler = function (e) {
  return Ge(e) === Qo;
};
X.isStrictMode = function (e) {
  return Ge(e) === Ho;
};
X.isSuspense = function (e) {
  return Ge(e) === Jo;
};
X.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wo ||
    e === Xo ||
    e === Qo ||
    e === Ho ||
    e === Jo ||
    e === cy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qo ||
        e.$$typeof === Zo ||
        e.$$typeof === Ko ||
        e.$$typeof === Yo ||
        e.$$typeof === Go ||
        e.$$typeof === dy ||
        e.$$typeof === py ||
        e.$$typeof === hy ||
        e.$$typeof === fy))
  );
};
X.typeOf = Ge;
Sp.exports = X;
var my = Sp.exports,
  Ep = my,
  vy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  yy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Cp = {};
Cp[Ep.ForwardRef] = vy;
Cp[Ep.Memo] = yy;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za = Symbol.for("react.element"),
  qa = Symbol.for("react.portal"),
  bo = Symbol.for("react.fragment"),
  ei = Symbol.for("react.strict_mode"),
  ti = Symbol.for("react.profiler"),
  ni = Symbol.for("react.provider"),
  ri = Symbol.for("react.context"),
  gy = Symbol.for("react.server_context"),
  li = Symbol.for("react.forward_ref"),
  oi = Symbol.for("react.suspense"),
  ii = Symbol.for("react.suspense_list"),
  ui = Symbol.for("react.memo"),
  ai = Symbol.for("react.lazy"),
  wy = Symbol.for("react.offscreen"),
  kp;
kp = Symbol.for("react.module.reference");
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Za:
        switch (((e = e.type), e)) {
          case bo:
          case ti:
          case ei:
          case oi:
          case ii:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case gy:
              case ri:
              case li:
              case ai:
              case ui:
              case ni:
                return e;
              default:
                return t;
            }
        }
      case qa:
        return t;
    }
  }
}
J.ContextConsumer = ri;
J.ContextProvider = ni;
J.Element = Za;
J.ForwardRef = li;
J.Fragment = bo;
J.Lazy = ai;
J.Memo = ui;
J.Portal = qa;
J.Profiler = ti;
J.StrictMode = ei;
J.Suspense = oi;
J.SuspenseList = ii;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return rt(e) === ri;
};
J.isContextProvider = function (e) {
  return rt(e) === ni;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Za;
};
J.isForwardRef = function (e) {
  return rt(e) === li;
};
J.isFragment = function (e) {
  return rt(e) === bo;
};
J.isLazy = function (e) {
  return rt(e) === ai;
};
J.isMemo = function (e) {
  return rt(e) === ui;
};
J.isPortal = function (e) {
  return rt(e) === qa;
};
J.isProfiler = function (e) {
  return rt(e) === ti;
};
J.isStrictMode = function (e) {
  return rt(e) === ei;
};
J.isSuspense = function (e) {
  return rt(e) === oi;
};
J.isSuspenseList = function (e) {
  return rt(e) === ii;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === bo ||
    e === ti ||
    e === ei ||
    e === oi ||
    e === ii ||
    e === wy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ai ||
        e.$$typeof === ui ||
        e.$$typeof === ni ||
        e.$$typeof === ri ||
        e.$$typeof === li ||
        e.$$typeof === kp ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = rt;
function Sy() {
  const e = ly();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Nc = { notify() {}, get: () => [] };
function xy(e, t) {
  let n,
    r = Nc;
  function l(h) {
    return a(), r.subscribe(h);
  }
  function o() {
    r.notify();
  }
  function i() {
    f.onStateChange && f.onStateChange();
  }
  function u() {
    return !!n;
  }
  function a() {
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = Sy()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = Nc));
  }
  const f = {
    addNestedSub: l,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: u,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return f;
}
const Ey =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Cy = Ey ? C.useLayoutEffect : C.useEffect;
function ky({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: o = "once",
}) {
  const i = C.useMemo(() => {
      const s = xy(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    u = C.useMemo(() => e.getState(), [e]);
  Cy(() => {
    const { subscription: s } = i;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      u !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [i, u]);
  const a = t || ln;
  return C.createElement(a.Provider, { value: i }, n);
}
function Pp(e = ln) {
  const t = e === ln ? gp : Ya(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Py = Pp();
function Ry(e = ln) {
  const t = e === ln ? Py : Pp(e);
  return function () {
    return t().dispatch;
  };
}
const hr = Ry();
uy(ty.useSyncExternalStoreWithSelector);
ry(Ka.unstable_batchedUpdates);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var me;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(me || (me = {}));
const Lc = "popstate";
function _y(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return al(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Rn(l);
  }
  return Ly(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ny() {
  return Math.random().toString(36).substr(2, 8);
}
function jc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Ny() }
    )
  );
}
function Rn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ft(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = me.Pop,
    a = null,
    s = f();
  s == null && ((s = 0), i.replaceState(ie({}, i.state, { idx: s }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = me.Pop;
    let R = f(),
      d = R == null ? null : R - s;
    (s = R), a && a({ action: u, location: y.location, delta: d });
  }
  function v(R, d) {
    u = me.Push;
    let c = al(y.location, R, d);
    n && n(c, R), (s = f() + 1);
    let m = jc(c, s),
      p = y.createHref(c);
    try {
      i.pushState(m, "", p);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      l.location.assign(p);
    }
    o && a && a({ action: u, location: y.location, delta: 1 });
  }
  function g(R, d) {
    u = me.Replace;
    let c = al(y.location, R, d);
    n && n(c, R), (s = f());
    let m = jc(c, s),
      p = y.createHref(c);
    i.replaceState(m, "", p),
      o && a && a({ action: u, location: y.location, delta: 0 });
  }
  function w(R) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof R == "string" ? R : Rn(R);
    return (
      V(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, d)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Lc, h),
        (a = R),
        () => {
          l.removeEventListener(Lc, h), (a = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: w,
    encodeLocation(R) {
      let d = w(R);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: v,
    replace: g,
    go(R) {
      return i.go(R);
    },
  };
  return y;
}
var de;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(de || (de = {}));
const jy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Ty(e) {
  return e.index === !0;
}
function Ku(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        V(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Ty(l))
      ) {
        let a = ie({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ie({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = Ku(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Kn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ft(t) : t,
    l = mr(r.pathname || "/", n);
  if (l == null) return null;
  let o = Rp(e);
  Oy(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Vy(o[u], Qy(l));
  return i;
}
function My(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Rp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (V(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = jt([r, a.relativePath]),
      f = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Rp(o.children, t, f, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Ay(s, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of _p(o.path)) l(o, i, a);
    }),
    t
  );
}
function _p(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = _p(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Oy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : By(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Dy = /^:\w+$/,
  zy = 3,
  Fy = 2,
  Uy = 1,
  $y = 10,
  Iy = -2,
  Tc = (e) => e === "*";
function Ay(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tc) && (r += Iy),
    t && (r += Fy),
    n
      .filter((l) => !Tc(l))
      .reduce((l, o) => l + (Dy.test(o) ? zy : o === "" ? Uy : $y), r)
  );
}
function By(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      f = Wy(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: jt([l, f.pathname]),
      pathnameBase: Gy(jt([l, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== "/" && (l = jt([l, f.pathnameBase]));
  }
  return o;
}
function Wy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, f, h) => {
      if (f === "*") {
        let v = u[h] || "";
        i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      return (s[f] = Ky(u[h] || "", f)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Hy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Qy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ky(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      sr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function mr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Xy(n, t)) : t,
    search: Jy(r),
    hash: Zy(l),
  };
}
function Xy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Xi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function si(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ba(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ft(e))
    : ((l = ie({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        Xi("?", "pathname", "search", l)
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        Xi("#", "pathname", "hash", l)
      ),
      V(!l.search || !l.search.includes("#"), Xi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let v = i.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      l.pathname = v.join("/");
    }
    u = h >= 0 ? t[h] : "/";
  }
  let a = Yy(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || f) && (a.pathname += "/"), a;
}
const jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class es {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Np(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Lp = ["post", "put", "patch", "delete"],
  qy = new Set(Lp),
  by = ["get", ...Lp],
  eg = new Set(by),
  tg = new Set([301, 302, 303, 307, 308]),
  ng = new Set([307, 308]),
  Gi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _r = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  jp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function og(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: S(x) });
  } else l = lg;
  let o = {},
    i = Ku(e.routes, l, void 0, o),
    u,
    a = e.basename || "/",
    s = ie({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    f = null,
    h = new Set(),
    v = null,
    g = null,
    w = null,
    y = e.hydrationData != null,
    R = Kn(i, e.history.location, a),
    d = null;
  if (R == null) {
    let S = Je(404, { pathname: e.history.location.pathname }),
      { matches: x, route: k } = Ic(i);
    (R = x), (d = { [k.id]: S });
  }
  let c =
      !R.some((S) => S.route.lazy) &&
      (!R.some((S) => S.route.loader) || e.hydrationData != null),
    m,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: c,
      navigation: Gi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = me.Pop,
    L = !1,
    N,
    O = !1,
    H = !1,
    U = [],
    Se = [],
    q = new Map(),
    pt = 0,
    Ut = -1,
    $t = new Map(),
    Ve = new Set(),
    ht = new Map(),
    j = new Map(),
    z = new Map(),
    A = !1;
  function le() {
    return (
      (f = e.history.listen((S) => {
        let { action: x, location: k, delta: T } = S;
        if (A) {
          A = !1;
          return;
        }
        sr(
          z.size === 0 || T != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let I = ps({
          currentLocation: p.location,
          nextLocation: k,
          historyAction: x,
        });
        if (I && T != null) {
          (A = !0),
            e.history.go(T * -1),
            gl(I, {
              state: "blocked",
              location: k,
              proceed() {
                gl(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(T);
              },
              reset() {
                let $ = new Map(p.blockers);
                $.set(I, _r), b({ blockers: $ });
              },
            });
          return;
        }
        return cn(x, k);
      })),
      p.initialized || cn(me.Pop, p.location),
      m
    );
  }
  function he() {
    f && f(),
      h.clear(),
      N && N.abort(),
      p.fetchers.forEach((S, x) => hi(x)),
      p.blockers.forEach((S, x) => ds(x));
  }
  function jn(S) {
    return h.add(S), () => h.delete(S);
  }
  function b(S) {
    (p = ie({}, p, S)), h.forEach((x) => x(p));
  }
  function xt(S, x) {
    var k, T;
    let I =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        at(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
      $;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? ($ = x.actionData)
        : ($ = null)
      : I
      ? ($ = p.actionData)
      : ($ = null);
    let B = x.loaderData
        ? $c(p.loaderData, x.loaderData, x.matches || [], x.errors)
        : p.loaderData,
      F = p.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((oe, _e) => F.set(_e, _r)));
    let D =
      L === !0 ||
      (p.navigation.formMethod != null &&
        at(p.navigation.formMethod) &&
        ((T = S.state) == null ? void 0 : T._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      O ||
        P === me.Pop ||
        (P === me.Push
          ? e.history.push(S, S.state)
          : P === me.Replace && e.history.replace(S, S.state)),
      b(
        ie({}, x, {
          actionData: $,
          loaderData: B,
          historyAction: P,
          location: S,
          initialized: !0,
          navigation: Gi,
          revalidation: "idle",
          restoreScrollPosition: ms(S, x.matches || p.matches),
          preventScrollReset: D,
          blockers: F,
        })
      ),
      (P = me.Pop),
      (L = !1),
      (O = !1),
      (H = !1),
      (U = []),
      (Se = []);
  }
  async function mt(S, x) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let k = Yu(
        p.location,
        p.matches,
        a,
        s.v7_prependBasename,
        S,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: T,
        submission: I,
        error: $,
      } = Mc(s.v7_normalizeFormMethod, !1, k, x),
      B = p.location,
      F = al(p.location, T, x && x.state);
    F = ie({}, F, e.history.encodeLocation(F));
    let D = x && x.replace != null ? x.replace : void 0,
      oe = me.Push;
    D === !0
      ? (oe = me.Replace)
      : D === !1 ||
        (I != null &&
          at(I.formMethod) &&
          I.formAction === p.location.pathname + p.location.search &&
          (oe = me.Replace));
    let _e =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      K = ps({ currentLocation: B, nextLocation: F, historyAction: oe });
    if (K) {
      gl(K, {
        state: "blocked",
        location: F,
        proceed() {
          gl(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            mt(S, x);
        },
        reset() {
          let Z = new Map(p.blockers);
          Z.set(K, _r), b({ blockers: Z });
        },
      });
      return;
    }
    return await cn(oe, F, {
      submission: I,
      pendingError: $,
      preventScrollReset: _e,
      replace: x && x.replace,
    });
  }
  function Tn() {
    if (
      (pi(),
      b({ revalidation: "loading" }),
      p.navigation.state !== "submitting")
    ) {
      if (p.navigation.state === "idle") {
        cn(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      cn(P || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function cn(S, x, k) {
    N && N.abort(),
      (N = null),
      (P = S),
      (O = (k && k.startUninterruptedRevalidation) === !0),
      uh(p.location, p.matches),
      (L = (k && k.preventScrollReset) === !0);
    let T = u || i,
      I = k && k.overrideNavigation,
      $ = Kn(T, x, a);
    if (!$) {
      let Z = Je(404, { pathname: x.pathname }),
        { matches: fe, route: fn } = Ic(T);
      mi(), xt(x, { matches: fe, loaderData: {}, errors: { [fn.id]: Z } });
      return;
    }
    if (
      p.initialized &&
      !H &&
      cg(p.location, x) &&
      !(k && k.submission && at(k.submission.formMethod))
    ) {
      xt(x, { matches: $ });
      return;
    }
    N = new AbortController();
    let B = Lr(e.history, x, N.signal, k && k.submission),
      F,
      D;
    if (k && k.pendingError) D = { [Yn($).route.id]: k.pendingError };
    else if (k && k.submission && at(k.submission.formMethod)) {
      let Z = await eh(B, x, k.submission, $, { replace: k.replace });
      if (Z.shortCircuited) return;
      (F = Z.pendingActionData),
        (D = Z.pendingActionError),
        (I = Ji(x, k.submission)),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: oe,
      loaderData: _e,
      errors: K,
    } = await th(
      B,
      x,
      $,
      I,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      F,
      D
    );
    oe ||
      ((N = null),
      xt(
        x,
        ie({ matches: $ }, F ? { actionData: F } : {}, {
          loaderData: _e,
          errors: K,
        })
      ));
  }
  async function eh(S, x, k, T, I) {
    I === void 0 && (I = {}), pi();
    let $ = hg(x, k);
    b({ navigation: $ });
    let B,
      F = Gu(T, x);
    if (!F.route.action && !F.route.lazy)
      B = {
        type: de.error,
        error: Je(405, {
          method: S.method,
          pathname: x.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((B = await Nr("action", S, F, T, o, l, a)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (er(B)) {
      let D;
      return (
        I && I.replace != null
          ? (D = I.replace)
          : (D = B.location === p.location.pathname + p.location.search),
        await vr(p, B, { submission: k, replace: D }),
        { shortCircuited: !0 }
      );
    }
    if (Hr(B)) {
      let D = Yn(T, F.route.id);
      return (
        (I && I.replace) !== !0 && (P = me.Push),
        { pendingActionData: {}, pendingActionError: { [D.route.id]: B.error } }
      );
    }
    if (gn(B)) throw Je(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: B.data } };
  }
  async function th(S, x, k, T, I, $, B, F, D) {
    let oe = T || Ji(x, I),
      _e = I || $ || Vc(oe),
      K = u || i,
      [Z, fe] = Oc(e.history, p, k, _e, x, H, U, Se, ht, Ve, K, a, F, D);
    if (
      (mi(
        (G) =>
          !(k && k.some((lt) => lt.route.id === G)) ||
          (Z && Z.some((lt) => lt.route.id === G))
      ),
      (Ut = ++pt),
      Z.length === 0 && fe.length === 0)
    ) {
      let G = cs();
      return (
        xt(
          x,
          ie(
            { matches: k, loaderData: {}, errors: D || null },
            F ? { actionData: F } : {},
            G ? { fetchers: new Map(p.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!O) {
      fe.forEach((lt) => {
        let At = p.fetchers.get(lt.key),
          Si = jr(void 0, At ? At.data : void 0);
        p.fetchers.set(lt.key, Si);
      });
      let G = F || p.actionData;
      b(
        ie(
          { navigation: oe },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          fe.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
        )
      );
    }
    fe.forEach((G) => {
      q.has(G.key) && It(G.key), G.controller && q.set(G.key, G.controller);
    });
    let fn = () => fe.forEach((G) => It(G.key));
    N && N.signal.addEventListener("abort", fn);
    let {
      results: dn,
      loaderResults: yr,
      fetcherResults: vi,
    } = await as(p.matches, k, Z, fe, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    N && N.signal.removeEventListener("abort", fn),
      fe.forEach((G) => q.delete(G.key));
    let Et = Ac(dn);
    if (Et) {
      if (Et.idx >= Z.length) {
        let G = fe[Et.idx - Z.length].key;
        Ve.add(G);
      }
      return await vr(p, Et.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Ct, errors: wl } = Uc(p, k, Z, yr, D, fe, vi, j);
    j.forEach((G, lt) => {
      G.subscribe((At) => {
        (At || G.done) && j.delete(lt);
      });
    });
    let yi = cs(),
      gi = fs(Ut),
      wi = yi || gi || fe.length > 0;
    return ie(
      { loaderData: Ct, errors: wl },
      wi ? { fetchers: new Map(p.fetchers) } : {}
    );
  }
  function us(S) {
    return p.fetchers.get(S) || rg;
  }
  function nh(S, x, k, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    q.has(S) && It(S);
    let I = u || i,
      $ = Yu(
        p.location,
        p.matches,
        a,
        s.v7_prependBasename,
        k,
        x,
        T == null ? void 0 : T.relative
      ),
      B = Kn(I, $, a);
    if (!B) {
      yl(S, x, Je(404, { pathname: $ }));
      return;
    }
    let {
      path: F,
      submission: D,
      error: oe,
    } = Mc(s.v7_normalizeFormMethod, !0, $, T);
    if (oe) {
      yl(S, x, oe);
      return;
    }
    let _e = Gu(B, F);
    if (((L = (T && T.preventScrollReset) === !0), D && at(D.formMethod))) {
      rh(S, x, F, _e, B, D);
      return;
    }
    ht.set(S, { routeId: x, path: F }), lh(S, x, F, _e, B, D);
  }
  async function rh(S, x, k, T, I, $) {
    if ((pi(), ht.delete(S), !T.route.action && !T.route.lazy)) {
      let ye = Je(405, { method: $.formMethod, pathname: k, routeId: x });
      yl(S, x, ye);
      return;
    }
    let B = p.fetchers.get(S),
      F = mg($, B);
    p.fetchers.set(S, F), b({ fetchers: new Map(p.fetchers) });
    let D = new AbortController(),
      oe = Lr(e.history, k, D.signal, $);
    q.set(S, D);
    let _e = pt,
      K = await Nr("action", oe, T, I, o, l, a);
    if (oe.signal.aborted) {
      q.get(S) === D && q.delete(S);
      return;
    }
    if (er(K))
      if ((q.delete(S), Ut > _e)) {
        let ye = On(void 0);
        p.fetchers.set(S, ye), b({ fetchers: new Map(p.fetchers) });
        return;
      } else {
        Ve.add(S);
        let ye = jr($);
        return (
          p.fetchers.set(S, ye),
          b({ fetchers: new Map(p.fetchers) }),
          vr(p, K, { fetcherSubmission: $ })
        );
      }
    if (Hr(K)) {
      yl(S, x, K.error);
      return;
    }
    if (gn(K)) throw Je(400, { type: "defer-action" });
    let Z = p.navigation.location || p.location,
      fe = Lr(e.history, Z, D.signal),
      fn = u || i,
      dn =
        p.navigation.state !== "idle"
          ? Kn(fn, p.navigation.location, a)
          : p.matches;
    V(dn, "Didn't find any matches after fetcher action");
    let yr = ++pt;
    $t.set(S, yr);
    let vi = jr($, K.data);
    p.fetchers.set(S, vi);
    let [Et, Ct] = Oc(
      e.history,
      p,
      dn,
      $,
      Z,
      H,
      U,
      Se,
      ht,
      Ve,
      fn,
      a,
      { [T.route.id]: K.data },
      void 0
    );
    Ct.filter((ye) => ye.key !== S).forEach((ye) => {
      let gr = ye.key,
        vs = p.fetchers.get(gr),
        sh = jr(void 0, vs ? vs.data : void 0);
      p.fetchers.set(gr, sh),
        q.has(gr) && It(gr),
        ye.controller && q.set(gr, ye.controller);
    }),
      b({ fetchers: new Map(p.fetchers) });
    let wl = () => Ct.forEach((ye) => It(ye.key));
    D.signal.addEventListener("abort", wl);
    let {
      results: yi,
      loaderResults: gi,
      fetcherResults: wi,
    } = await as(p.matches, dn, Et, Ct, fe);
    if (D.signal.aborted) return;
    D.signal.removeEventListener("abort", wl),
      $t.delete(S),
      q.delete(S),
      Ct.forEach((ye) => q.delete(ye.key));
    let G = Ac(yi);
    if (G) {
      if (G.idx >= Et.length) {
        let ye = Ct[G.idx - Et.length].key;
        Ve.add(ye);
      }
      return vr(p, G.result);
    }
    let { loaderData: lt, errors: At } = Uc(
      p,
      p.matches,
      Et,
      gi,
      void 0,
      Ct,
      wi,
      j
    );
    if (p.fetchers.has(S)) {
      let ye = On(K.data);
      p.fetchers.set(S, ye);
    }
    let Si = fs(yr);
    p.navigation.state === "loading" && yr > Ut
      ? (V(P, "Expected pending action"),
        N && N.abort(),
        xt(p.navigation.location, {
          matches: dn,
          loaderData: lt,
          errors: At,
          fetchers: new Map(p.fetchers),
        }))
      : (b(
          ie(
            { errors: At, loaderData: $c(p.loaderData, lt, dn, At) },
            Si || Ct.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
          )
        ),
        (H = !1));
  }
  async function lh(S, x, k, T, I, $) {
    let B = p.fetchers.get(S),
      F = jr($, B ? B.data : void 0);
    p.fetchers.set(S, F), b({ fetchers: new Map(p.fetchers) });
    let D = new AbortController(),
      oe = Lr(e.history, k, D.signal);
    q.set(S, D);
    let _e = pt,
      K = await Nr("loader", oe, T, I, o, l, a);
    if (
      (gn(K) && (K = (await Op(K, oe.signal, !0)) || K),
      q.get(S) === D && q.delete(S),
      oe.signal.aborted)
    )
      return;
    if (er(K))
      if (Ut > _e) {
        let fe = On(void 0);
        p.fetchers.set(S, fe), b({ fetchers: new Map(p.fetchers) });
        return;
      } else {
        Ve.add(S), await vr(p, K);
        return;
      }
    if (Hr(K)) {
      let fe = Yn(p.matches, x);
      p.fetchers.delete(S),
        b({
          fetchers: new Map(p.fetchers),
          errors: { [fe.route.id]: K.error },
        });
      return;
    }
    V(!gn(K), "Unhandled fetcher deferred data");
    let Z = On(K.data);
    p.fetchers.set(S, Z), b({ fetchers: new Map(p.fetchers) });
  }
  async function vr(S, x, k) {
    let {
      submission: T,
      fetcherSubmission: I,
      replace: $,
    } = k === void 0 ? {} : k;
    x.revalidate && (H = !0);
    let B = al(S.location, x.location, { _isRedirect: !0 });
    if ((V(B, "Expected a location on the redirect navigation"), n)) {
      let Z = !1;
      if (x.reloadDocument) Z = !0;
      else if (jp.test(x.location)) {
        const fe = e.history.createURL(x.location);
        Z = fe.origin !== t.location.origin || mr(fe.pathname, a) == null;
      }
      if (Z) {
        $ ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    N = null;
    let F = $ === !0 ? me.Replace : me.Push,
      { formMethod: D, formAction: oe, formEncType: _e } = S.navigation;
    !T && !I && D && oe && _e && (T = Vc(S.navigation));
    let K = T || I;
    if (ng.has(x.status) && K && at(K.formMethod))
      await cn(F, B, {
        submission: ie({}, K, { formAction: x.location }),
        preventScrollReset: L,
      });
    else {
      let Z = Ji(B, T);
      await cn(F, B, {
        overrideNavigation: Z,
        fetcherSubmission: I,
        preventScrollReset: L,
      });
    }
  }
  async function as(S, x, k, T, I) {
    let $ = await Promise.all([
        ...k.map((D) => Nr("loader", I, D, x, o, l, a)),
        ...T.map((D) =>
          D.matches && D.match && D.controller
            ? Nr(
                "loader",
                Lr(e.history, D.path, D.controller.signal),
                D.match,
                D.matches,
                o,
                l,
                a
              )
            : { type: de.error, error: Je(404, { pathname: D.path }) }
        ),
      ]),
      B = $.slice(0, k.length),
      F = $.slice(k.length);
    return (
      await Promise.all([
        Bc(
          S,
          k,
          B,
          B.map(() => I.signal),
          !1,
          p.loaderData
        ),
        Bc(
          S,
          T.map((D) => D.match),
          F,
          T.map((D) => (D.controller ? D.controller.signal : null)),
          !0
        ),
      ]),
      { results: $, loaderResults: B, fetcherResults: F }
    );
  }
  function pi() {
    (H = !0),
      U.push(...mi()),
      ht.forEach((S, x) => {
        q.has(x) && (Se.push(x), It(x));
      });
  }
  function yl(S, x, k) {
    let T = Yn(p.matches, x);
    hi(S), b({ errors: { [T.route.id]: k }, fetchers: new Map(p.fetchers) });
  }
  function hi(S) {
    let x = p.fetchers.get(S);
    q.has(S) && !(x && x.state === "loading" && $t.has(S)) && It(S),
      ht.delete(S),
      $t.delete(S),
      Ve.delete(S),
      p.fetchers.delete(S);
  }
  function It(S) {
    let x = q.get(S);
    V(x, "Expected fetch controller: " + S), x.abort(), q.delete(S);
  }
  function ss(S) {
    for (let x of S) {
      let k = us(x),
        T = On(k.data);
      p.fetchers.set(x, T);
    }
  }
  function cs() {
    let S = [],
      x = !1;
    for (let k of Ve) {
      let T = p.fetchers.get(k);
      V(T, "Expected fetcher: " + k),
        T.state === "loading" && (Ve.delete(k), S.push(k), (x = !0));
    }
    return ss(S), x;
  }
  function fs(S) {
    let x = [];
    for (let [k, T] of $t)
      if (T < S) {
        let I = p.fetchers.get(k);
        V(I, "Expected fetcher: " + k),
          I.state === "loading" && (It(k), $t.delete(k), x.push(k));
      }
    return ss(x), x.length > 0;
  }
  function oh(S, x) {
    let k = p.blockers.get(S) || _r;
    return z.get(S) !== x && z.set(S, x), k;
  }
  function ds(S) {
    p.blockers.delete(S), z.delete(S);
  }
  function gl(S, x) {
    let k = p.blockers.get(S) || _r;
    V(
      (k.state === "unblocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "proceeding") ||
        (k.state === "blocked" && x.state === "unblocked") ||
        (k.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + x.state
    );
    let T = new Map(p.blockers);
    T.set(S, x), b({ blockers: T });
  }
  function ps(S) {
    let { currentLocation: x, nextLocation: k, historyAction: T } = S;
    if (z.size === 0) return;
    z.size > 1 && sr(!1, "A router only supports one blocker at a time");
    let I = Array.from(z.entries()),
      [$, B] = I[I.length - 1],
      F = p.blockers.get($);
    if (
      !(F && F.state === "proceeding") &&
      B({ currentLocation: x, nextLocation: k, historyAction: T })
    )
      return $;
  }
  function mi(S) {
    let x = [];
    return (
      j.forEach((k, T) => {
        (!S || S(T)) && (k.cancel(), x.push(T), j.delete(T));
      }),
      x
    );
  }
  function ih(S, x, k) {
    if (((v = S), (w = x), (g = k || null), !y && p.navigation === Gi)) {
      y = !0;
      let T = ms(p.location, p.matches);
      T != null && b({ restoreScrollPosition: T });
    }
    return () => {
      (v = null), (w = null), (g = null);
    };
  }
  function hs(S, x) {
    return (
      (g &&
        g(
          S,
          x.map((T) => My(T, p.loaderData))
        )) ||
      S.key
    );
  }
  function uh(S, x) {
    if (v && w) {
      let k = hs(S, x);
      v[k] = w();
    }
  }
  function ms(S, x) {
    if (v) {
      let k = hs(S, x),
        T = v[k];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function ah(S) {
    (o = {}), (u = Ku(S, l, void 0, o));
  }
  return (
    (m = {
      get basename() {
        return a;
      },
      get state() {
        return p;
      },
      get routes() {
        return i;
      },
      initialize: le,
      subscribe: jn,
      enableScrollRestoration: ih,
      navigate: mt,
      fetch: nh,
      revalidate: Tn,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: us,
      deleteFetcher: hi,
      dispose: he,
      getBlocker: oh,
      deleteBlocker: ds,
      _internalFetchControllers: q,
      _internalActiveDeferreds: j,
      _internalSetRoutes: ah,
    }),
    m
  );
}
function ig(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Yu(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== "path") {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === o)) {
        a = f;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = ba(
    l || ".",
    si(u).map((f) => f.pathnameBase),
    mr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !ts(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : jt([n, s.pathname])),
    Rn(s)
  );
}
function Mc(e, t, n, r) {
  if (!r || !ig(r)) return { path: n };
  if (r.formMethod && !pg(r.formMethod))
    return { path: n, error: Je(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Je(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Mp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!at(i)) return l();
      let v =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, w) => {
              let [y, R] = w;
              return (
                "" +
                g +
                y +
                "=" +
                R +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!at(i)) return l();
      try {
        let v = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: v,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, s;
  if (r.formData) (a = Xu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = Xu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Fc(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Fc(a));
    } catch {
      return l();
    }
  let f = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (at(f.formMethod)) return { path: n, submission: f };
  let h = Ft(n);
  return (
    t && h.search && ts(h.search) && a.append("index", ""),
    (h.search = "?" + a),
    { path: Rn(h), submission: f }
  );
}
function ug(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Oc(e, t, n, r, l, o, i, u, a, s, f, h, v, g) {
  let w = g ? Object.values(g)[0] : v ? Object.values(v)[0] : void 0,
    y = e.createURL(t.location),
    R = e.createURL(l),
    d = g ? Object.keys(g)[0] : void 0,
    m = ug(n, d).filter((P, L) => {
      if (P.route.lazy) return !0;
      if (P.route.loader == null) return !1;
      if (ag(t.loaderData, t.matches[L], P) || i.some((H) => H === P.route.id))
        return !0;
      let N = t.matches[L],
        O = P;
      return Dc(
        P,
        ie(
          {
            currentUrl: y,
            currentParams: N.params,
            nextUrl: R,
            nextParams: O.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              y.pathname + y.search === R.pathname + R.search ||
              y.search !== R.search ||
              Tp(N, O),
          }
        )
      );
    }),
    p = [];
  return (
    a.forEach((P, L) => {
      if (!n.some((Se) => Se.route.id === P.routeId)) return;
      let N = Kn(f, P.path, h);
      if (!N) {
        p.push({
          key: L,
          routeId: P.routeId,
          path: P.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let O = t.fetchers.get(L),
        H = Gu(N, P.path),
        U = !1;
      s.has(L)
        ? (U = !1)
        : u.includes(L)
        ? (U = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (U = o)
        : (U = Dc(
            H,
            ie(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: R,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: o }
            )
          )),
        U &&
          p.push({
            key: L,
            routeId: P.routeId,
            path: P.path,
            matches: N,
            match: H,
            controller: new AbortController(),
          });
    }),
    [m, p]
  );
}
function ag(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Tp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Dc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function zc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== "hasErrorBoundary";
    sr(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !jy.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
async function Nr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    f,
    h = (w) => {
      let y,
        R = new Promise((d, c) => (y = c));
      return (
        (f = () => y()),
        t.signal.addEventListener("abort", f),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          R,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let y,
          R = await Promise.all([
            h(w).catch((d) => {
              y = d;
            }),
            zc(n.route, o, l),
          ]);
        if (y) throw y;
        s = R[0];
      } else if ((await zc(n.route, o, l), (w = n.route[e]), w)) s = await h(w);
      else if (e === "action") {
        let y = new URL(t.url),
          R = y.pathname + y.search;
        throw Je(405, { method: t.method, pathname: R, routeId: n.route.id });
      } else return { type: de.data, data: void 0 };
    else if (w) s = await h(w);
    else {
      let y = new URL(t.url),
        R = y.pathname + y.search;
      throw Je(404, { pathname: R });
    }
    V(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (a = de.error), (s = w);
  } finally {
    f && t.signal.removeEventListener("abort", f);
  }
  if (dg(s)) {
    let w = s.status;
    if (tg.has(w)) {
      let d = s.headers.get("Location");
      if (
        (V(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !jp.test(d))
      )
        d = Yu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let c = new URL(t.url),
          m = d.startsWith("//") ? new URL(c.protocol + d) : new URL(d),
          p = mr(m.pathname, i) != null;
        m.origin === c.origin && p && (d = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set("Location", d), s);
      return {
        type: de.redirect,
        status: w,
        location: d,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === de.error ? de.error : de.data, response: s };
    let y,
      R = s.headers.get("Content-Type");
    return (
      R && /\bapplication\/json\b/.test(R)
        ? (y = await s.json())
        : (y = await s.text()),
      a === de.error
        ? { type: a, error: new es(w, s.statusText, y), headers: s.headers }
        : { type: de.data, data: y, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === de.error) return { type: a, error: s };
  if (fg(s)) {
    var v, g;
    return {
      type: de.deferred,
      deferredData: s,
      statusCode: (v = s.init) == null ? void 0 : v.status,
      headers:
        ((g = s.init) == null ? void 0 : g.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: de.data, data: s };
}
function Lr(e, t, n, r) {
  let l = e.createURL(Mp(t)).toString(),
    o = { signal: n };
  if (r && at(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": u })),
          (o.body = JSON.stringify(r.json)))
        : u === "text/plain"
        ? (o.body = r.text)
        : u === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Xu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Xu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Fc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function sg(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((f, h) => {
      let v = t[h].route.id;
      if (
        (V(!er(f), "Cannot handle redirect results in processLoaderData"),
        Hr(f))
      ) {
        let g = Yn(e, v),
          w = f.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[g.route.id] == null && (i[g.route.id] = w),
          (o[v] = void 0),
          a || ((a = !0), (u = Np(f.error) ? f.error.status : 500)),
          f.headers && (s[v] = f.headers);
      } else
        gn(f)
          ? (l.set(v, f.deferredData), (o[v] = f.deferredData.data))
          : (o[v] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !a &&
            (u = f.statusCode),
          f.headers && (s[v] = f.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Uc(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = sg(t, n, r, l, u);
  for (let f = 0; f < o.length; f++) {
    let { key: h, match: v, controller: g } = o[f];
    V(
      i !== void 0 && i[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = i[f];
    if (!(g && g.signal.aborted))
      if (Hr(w)) {
        let y = Yn(e.matches, v == null ? void 0 : v.route.id);
        (s && s[y.route.id]) || (s = ie({}, s, { [y.route.id]: w.error })),
          e.fetchers.delete(h);
      } else if (er(w)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (gn(w)) V(!1, "Unhandled fetcher deferred data");
      else {
        let y = On(w.data);
        e.fetchers.set(h, y);
      }
  }
  return { loaderData: a, errors: s };
}
function $c(e, t, n, r) {
  let l = ie({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Yn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ic(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Je(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (u = "defer() is not supported in actions")
          : o === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new es(e || 500, i, new Error(u), !0)
  );
}
function Ac(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (er(n)) return { result: n, idx: t };
  }
}
function Mp(e) {
  let t = typeof e == "string" ? Ft(e) : e;
  return Rn(ie({}, t, { hash: "" }));
}
function cg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function gn(e) {
  return e.type === de.deferred;
}
function Hr(e) {
  return e.type === de.error;
}
function er(e) {
  return (e && e.type) === de.redirect;
}
function fg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function dg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function pg(e) {
  return eg.has(e.toLowerCase());
}
function at(e) {
  return qy.has(e.toLowerCase());
}
async function Bc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((h) => h.route.id === a.route.id),
      f = s != null && !Tp(s, a) && (o && o[a.route.id]) !== void 0;
    if (gn(u) && (l || f)) {
      let h = r[i];
      V(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Op(u, h, l).then((v) => {
          v && (n[i] = v || n[i]);
        });
    }
  }
}
async function Op(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: de.error, error: l };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function ts(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Gu(e, t) {
  let n = typeof t == "string" ? Ft(t).search : t.search;
  if (e[e.length - 1].route.index && ts(n || "")) return e[e.length - 1];
  let r = si(e);
  return r[r.length - 1];
}
function Vc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Ji(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function hg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function jr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function mg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function On(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xo.apply(this, arguments)
  );
}
const ci = C.createContext(null),
  ns = C.createContext(null),
  Ln = C.createContext(null),
  fi = C.createContext(null),
  sn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dp = C.createContext(null);
function vg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ml() || V(!1);
  let { basename: r, navigator: l } = C.useContext(Ln),
    { hash: o, pathname: i, search: u } = rs(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : jt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function ml() {
  return C.useContext(fi) != null;
}
function vl() {
  return ml() || V(!1), C.useContext(fi).location;
}
function zp(e) {
  C.useContext(Ln).static || C.useLayoutEffect(e);
}
function yg() {
  let { isDataRoute: e } = C.useContext(sn);
  return e ? Tg() : gg();
}
function gg() {
  ml() || V(!1);
  let e = C.useContext(ci),
    { basename: t, navigator: n } = C.useContext(Ln),
    { matches: r } = C.useContext(sn),
    { pathname: l } = vl(),
    o = JSON.stringify(si(r).map((a) => a.pathnameBase)),
    i = C.useRef(!1);
  return (
    zp(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let f = ba(a, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : jt([t, f.pathname])),
          (s.replace ? n.replace : n.push)(f, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const wg = C.createContext(null);
function Sg(e) {
  let t = C.useContext(sn).outlet;
  return t && C.createElement(wg.Provider, { value: e }, t);
}
function rs(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(sn),
    { pathname: l } = vl(),
    o = JSON.stringify(si(r).map((i) => i.pathnameBase));
  return C.useMemo(() => ba(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function xg(e, t, n) {
  ml() || V(!1);
  let { navigator: r } = C.useContext(Ln),
    { matches: l } = C.useContext(sn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = vl(),
    s;
  if (t) {
    var f;
    let y = typeof t == "string" ? Ft(t) : t;
    u === "/" || ((f = y.pathname) != null && f.startsWith(u)) || V(!1),
      (s = y);
  } else s = a;
  let h = s.pathname || "/",
    v = u === "/" ? h : h.slice(u.length) || "/",
    g = Kn(e, { pathname: v }),
    w = Rg(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: jt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : jt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && w
    ? C.createElement(
        fi.Provider,
        {
          value: {
            location: xo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: me.Pop,
          },
        },
        w
      )
    : w;
}
function Eg() {
  let e = jg(),
    t = Np(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    o
  );
}
const Cg = C.createElement(Eg, null);
class kg extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          C.createElement(Dp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Pg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(ci);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(sn.Provider, { value: t }, r)
  );
}
function Rg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || V(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let f = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || Cg);
    let v = t.concat(o.slice(0, s + 1)),
      g = () => {
        let w;
        return (
          f
            ? (w = h)
            : a.route.Component
            ? (w = C.createElement(a.route.Component, null))
            : a.route.element
            ? (w = a.route.element)
            : (w = u),
          C.createElement(Pg, {
            match: a,
            routeContext: { outlet: u, matches: v, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? C.createElement(kg, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: f,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Fp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Fp || {}),
  Eo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Eo || {});
function _g(e) {
  let t = C.useContext(ci);
  return t || V(!1), t;
}
function Ng(e) {
  let t = C.useContext(ns);
  return t || V(!1), t;
}
function Lg(e) {
  let t = C.useContext(sn);
  return t || V(!1), t;
}
function Up(e) {
  let t = Lg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function jg() {
  var e;
  let t = C.useContext(Dp),
    n = Ng(Eo.UseRouteError),
    r = Up(Eo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Tg() {
  let { router: e } = _g(Fp.UseNavigateStable),
    t = Up(Eo.UseNavigateStable),
    n = C.useRef(!1);
  return (
    zp(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, xo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Mg = "startTransition",
  Wc = Rh[Mg];
function Og(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = C.useState(n.state),
    { v7_startTransition: i } = r || {},
    u = C.useCallback(
      (h) => {
        i && Wc ? Wc(() => o(h)) : o(h);
      },
      [o, i]
    );
  C.useLayoutEffect(() => n.subscribe(u), [n, u]);
  let a = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (h) => n.navigate(h),
        push: (h, v, g) =>
          n.navigate(h, {
            state: v,
            preventScrollReset: g == null ? void 0 : g.preventScrollReset,
          }),
        replace: (h, v, g) =>
          n.navigate(h, {
            replace: !0,
            state: v,
            preventScrollReset: g == null ? void 0 : g.preventScrollReset,
          }),
      }),
      [n]
    ),
    s = n.basename || "/",
    f = C.useMemo(
      () => ({ router: n, navigator: a, static: !1, basename: s }),
      [n, a, s]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      ci.Provider,
      { value: f },
      C.createElement(
        ns.Provider,
        { value: l },
        C.createElement(
          Fg,
          {
            basename: s,
            location: l.location,
            navigationType: l.historyAction,
            navigator: a,
          },
          l.initialized
            ? C.createElement(Dg, { routes: n.routes, state: l })
            : t
        )
      )
    ),
    null
  );
}
function Dg(e) {
  let { routes: t, state: n } = e;
  return xg(t, void 0, n);
}
function zg(e) {
  return Sg(e.context);
}
function Fg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = me.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  ml() && V(!1);
  let u = t.replace(/^\/*/, "/"),
    a = C.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Ft(r));
  let {
      pathname: s = "/",
      search: f = "",
      hash: h = "",
      state: v = null,
      key: g = "default",
    } = r,
    w = C.useMemo(() => {
      let y = mr(s, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: f, hash: h, state: v, key: g },
            navigationType: l,
          };
    }, [u, s, f, h, v, g, l]);
  return w == null
    ? null
    : C.createElement(
        Ln.Provider,
        { value: a },
        C.createElement(fi.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function Ug(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
function $p(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function $g(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ig(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$g(e);
}
const Ag = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Bg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Vg(e, t) {
  return og({
    basename: t == null ? void 0 : t.basename,
    future: cr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: _y({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Wg(),
    routes: e,
    mapRouteProperties: Ug,
  }).initialize();
}
function Wg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = cr({}, t, { errors: Hg(t.errors) })), t;
}
function Hg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new es(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Qg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Kg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yg = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: f,
      } = t,
      h = $p(t, Ag),
      { basename: v } = C.useContext(Ln),
      g,
      w = !1;
    if (typeof s == "string" && Kg.test(s) && ((g = s), Qg))
      try {
        let c = new URL(window.location.href),
          m = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s),
          p = mr(m.pathname, v);
        m.origin === c.origin && p != null
          ? (s = p + m.search + m.hash)
          : (w = !0);
      } catch {}
    let y = vg(s, { relative: l }),
      R = Xg(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: f,
        relative: l,
      });
    function d(c) {
      r && r(c), c.defaultPrevented || R(c);
    }
    return C.createElement(
      "a",
      cr({}, h, { href: g || y, onClick: w || o ? r : d, ref: n, target: a })
    );
  }),
  Ju = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: a,
        children: s,
      } = t,
      f = $p(t, Bg),
      h = rs(a, { relative: f.relative }),
      v = vl(),
      g = C.useContext(ns),
      { navigator: w } = C.useContext(Ln),
      y = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
      R = v.pathname,
      d =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    l ||
      ((R = R.toLowerCase()),
      (d = d ? d.toLowerCase() : null),
      (y = y.toLowerCase()));
    let c = R === y || (!i && R.startsWith(y) && R.charAt(y.length) === "/"),
      m =
        d != null &&
        (d === y || (!i && d.startsWith(y) && d.charAt(y.length) === "/")),
      p = c ? r : void 0,
      P;
    typeof o == "function"
      ? (P = o({ isActive: c, isPending: m }))
      : (P = [o, c ? "active" : null, m ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let L = typeof u == "function" ? u({ isActive: c, isPending: m }) : u;
    return C.createElement(
      Yg,
      cr({}, f, { "aria-current": p, className: P, ref: n, style: L, to: a }),
      typeof s == "function" ? s({ isActive: c, isPending: m }) : s
    );
  });
var Hc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Hc || (Hc = {}));
var Qc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Qc || (Qc = {}));
function Xg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = yg(),
    a = vl(),
    s = rs(e, { relative: i });
  return C.useCallback(
    (f) => {
      if (Ig(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Rn(a) === Rn(s);
        u(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i]
  );
}
var Ip = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Kc = Nt.createContext && Nt.createContext(Ip),
  Gg = ["attr", "size", "title"];
function Jg(e, t) {
  if (e == null) return {};
  var n = Zg(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Zg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
function Yc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yc(Object(n), !0).forEach(function (r) {
          qg(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function qg(e, t, n) {
  return (
    (t = bg(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bg(e) {
  var t = e0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ap(e) {
  return (
    e &&
    e.map((t, n) =>
      Nt.createElement(t.tag, ko({ key: n }, t.attr), Ap(t.child))
    )
  );
}
function t0(e) {
  return (t) =>
    Nt.createElement(n0, Co({ attr: ko({}, e.attr) }, t), Ap(e.child));
}
function n0(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = Jg(e, Gg),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Nt.createElement(
        "svg",
        Co(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: a,
            style: ko(ko({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Nt.createElement("title", null, o),
        e.children
      )
    );
  };
  return Kc !== void 0
    ? Nt.createElement(Kc.Consumer, null, (n) => t(n))
    : t(Ip);
}
function r0(e) {
  return t0({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
        },
        child: [],
      },
    ],
  })(e);
}
/*! js-cookie v3.0.5 | MIT */ function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var l0 = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function Zu(e, t) {
  function n(l, o, i) {
    if (!(typeof document > "u")) {
      (i = Ul({}, t, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var u = "";
      for (var a in i)
        i[a] &&
          ((u += "; " + a), i[a] !== !0 && (u += "=" + i[a].split(";")[0]));
      return (document.cookie = l + "=" + e.write(o, l) + u);
    }
  }
  function r(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          i = {},
          u = 0;
        u < o.length;
        u++
      ) {
        var a = o[u].split("="),
          s = a.slice(1).join("=");
        try {
          var f = decodeURIComponent(a[0]);
          if (((i[f] = e.read(s, f)), l === f)) break;
        } catch {}
      }
      return l ? i[l] : i;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, o) {
        n(l, "", Ul({}, o, { expires: -1 }));
      },
      withAttributes: function (l) {
        return Zu(this.converter, Ul({}, this.attributes, l));
      },
      withConverter: function (l) {
        return Zu(Ul({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var o0 = Zu(l0, { path: "/" });
async function di(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = o0.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const Bp = "session/setUser",
  Vp = "session/removeUser",
  ls = (e) => ({ type: Bp, payload: e }),
  i0 = () => ({ type: Vp }),
  u0 = (e) => async (t) => {
    const { username: n, firstName: r, lastName: l, email: o, password: i } = e,
      u = await di("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: l,
          email: o,
          password: i,
        }),
      }),
      a = await u.json();
    return t(ls(a.user)), u;
  },
  Wp = (e) => async (t) => {
    const { credential: n, password: r } = e,
      l = await di("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: n, password: r }),
      }),
      o = await l.json();
    return t(ls(o.user)), l;
  },
  a0 = () => async (e) => {
    const t = await di("/api/session", { method: "DELETE" });
    return e(i0()), t;
  },
  s0 = () => async (e) => {
    const t = await di("/api/session"),
      n = await t.json();
    return e(ls(n.user)), t;
  },
  c0 = { user: null },
  f0 = (e = c0, t) => {
    switch (t.type) {
      case Bp:
        return { ...e, user: t.payload };
      case Vp:
        return { ...e, user: null, message: `LOGGED OUT OF : ${t.payload}` };
      default:
        return e;
    }
  };
const os = C.createContext();
function d0({ children: e }) {
  const t = C.useRef(),
    [n, r] = C.useState(null),
    [l, o] = C.useState(null),
    u = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof l == "function" && (o(null), l());
      },
    };
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(os.Provider, { value: u, children: e }),
      E.jsx("div", { ref: t }),
    ],
  });
}
function p0() {
  const { modalRef: e, modalContent: t, closeModal: n } = C.useContext(os);
  return !e || !e.current || !t
    ? null
    : Fv.createPortal(
        E.jsxs("div", {
          id: "modal",
          children: [
            E.jsx("div", { id: "modal-background", onClick: n }),
            E.jsx("div", {
              id: "modal-container",
              children: E.jsx("div", {
                className: "modal-content",
                children: t,
              }),
            }),
          ],
        }),
        e.current
      );
}
function is() {
  const e = C.useContext(os);
  if (!e) throw new Error("useModal must be used within a ModalProvider");
  return e;
}
function Xc({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: l, setOnModalClose: o } = is(),
    i = () => {
      r && o(r), l(e), typeof n == "function" && n();
    };
  return E.jsx("li", { className: "model-text", onClick: i, children: t });
}
function h0() {
  const e = hr(),
    [t, n] = C.useState(""),
    [r, l] = C.useState(""),
    [o, i] = C.useState({}),
    { closeModal: u } = is(),
    a = (s) => (
      s.preventDefault(),
      i({}),
      e(Wp({ credential: t, password: r }))
        .then(() => (u(), e((void 0)())))
        .catch(async (f) => {
          const h = await f.json();
          h && h.errors && i(h.errors);
        })
    );
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx("img", {
        className: "login-modal-image",
        src: "/images/logo.svg",
        alt: "MockBnb Logo",
      }),
      E.jsx("h1", {
        className: "login-modal-title",
        children: "Log In to MockBnB",
      }),
      E.jsxs("form", {
        className: "login-form-modal",
        onSubmit: a,
        children: [
          E.jsxs("div", {
            children: [
              E.jsx("label", { htmlFor: "username", className: "label" }),
              E.jsx("input", {
                className: "login-form-input",
                id: "username",
                type: "text",
                value: t,
                placeholder: "Username or Email",
                onChange: (s) => n(s.target.value),
                required: !0,
              }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", { htmlFor: "password" }),
              E.jsx("input", {
                className: "login-form-input",
                placeholder: "password",
                type: "password",
                value: r,
                onChange: (s) => l(s.target.value),
                required: !0,
              }),
            ],
          }),
          o.credential && E.jsx("p", { children: o.credential }),
          E.jsx("button", {
            className: "login-button-modal",
            type: "submit",
            children: "Log In",
          }),
        ],
      }),
    ],
  });
}
function m0() {
  const e = hr(),
    [t, n] = C.useState(""),
    [r, l] = C.useState(""),
    [o, i] = C.useState(""),
    [u, a] = C.useState(""),
    [s, f] = C.useState(""),
    [h, v] = C.useState(""),
    [g, w] = C.useState({}),
    { closeModal: y } = is(),
    R = (d) => (
      d.preventDefault(),
      s === h
        ? (w({}),
          e(
            u0({
              email: t,
              username: r,
              firstName: o,
              lastName: u,
              password: s,
            })
          )
            .then(y)
            .catch(async (c) => {
              const m = await c.json();
              m != null && m.errors && w(m.errors);
            }))
        : w({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx("img", {
        className: "login-modal-image",
        src: "/images/logo.svg",
        alt: "MockBnb Logo",
      }),
      E.jsx("h1", { children: "Sign Up" }),
      E.jsxs("form", {
        className: "signin-form-modal",
        onSubmit: R,
        children: [
          E.jsxs("div", {
            children: [
              E.jsx("label", { htmlFor: "email" }),
              E.jsx("input", {
                className: "signin-form-input",
                placeholder: "Email",
                type: "text",
                value: t,
                onChange: (d) => n(d.target.value),
                required: !0,
              }),
              g.email && E.jsx("p", { children: g.email }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", {
                htmlFor: "username",
                children: E.jsx("input", {
                  className: "signin-form-input",
                  placeholder: "Username",
                  id: "username",
                  type: "text",
                  value: r,
                  onChange: (d) => l(d.target.value),
                  required: !0,
                }),
              }),
              g.username && E.jsx("p", { children: g.username }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", {
                htmlFor: "firstName",
                children: E.jsx("input", {
                  className: "signin-form-input",
                  placeholder: "First Name",
                  id: "firstName",
                  type: "text",
                  value: o,
                  onChange: (d) => i(d.target.value),
                  required: !0,
                }),
              }),
              g.firstName && E.jsx("p", { children: g.firstName }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", {
                htmlFor: "lastName",
                children: E.jsx("input", {
                  className: "signin-form-input",
                  placeholder: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: u,
                  onChange: (d) => a(d.target.value),
                  required: !0,
                }),
              }),
              g.lastName && E.jsx("p", { children: g.lastName }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", {
                htmlFor: "password",
                children: E.jsx("input", {
                  className: "signin-form-input",
                  placeholder: "Password",
                  id: "password",
                  type: "password",
                  value: s,
                  onChange: (d) => f(d.target.value),
                  required: !0,
                }),
              }),
              g.password && E.jsx("p", { children: g.password }),
            ],
          }),
          E.jsxs("div", {
            children: [
              E.jsx("label", {
                htmlFor: "password-confirm",
                children: E.jsx("input", {
                  className: "signin-form-input",
                  placeholder: "Confirm Password",
                  id: "password-confirm",
                  type: "password",
                  value: h,
                  onChange: (d) => v(d.target.value),
                  required: !0,
                }),
              }),
              g.confirmPassword && E.jsx("p", { children: g.confirmPassword }),
            ],
          }),
          E.jsx("button", {
            className: "signin-button-modal",
            type: "submit",
            children: "Sign Up",
          }),
        ],
      }),
    ],
  });
}
function v0({ user: e }) {
  const t = hr(),
    [n, r] = C.useState(!1),
    l = C.useRef(),
    o = (f) => {
      f.stopPropagation(), r(!n);
    };
  C.useEffect(() => {
    if (!n) return;
    const f = (h) => {
      l.current.contains(h.target) || r(!1);
    };
    return (
      document.addEventListener("click", f),
      () => document.removeEventListener("click", f)
    );
  }, [n]);
  const i = () => r(!1),
    u = (f) => {
      f.preventDefault(), t(a0()), i();
    },
    a = () => {
      t(Wp({ credential: "Demo-lition", password: "password" })), i();
    },
    s = "profile-dropdown" + (n ? "" : " hidden");
  return E.jsxs("div", {
    children: [
      E.jsx("button", {
        className: "profile-button",
        onClick: o,
        children: E.jsx(r0, { className: "user-icon", size: 50 }),
      }),
      E.jsx("div", {
        className: "dropdown-container",
        children: E.jsx("ul", {
          className: s,
          ref: l,
          children: e
            ? E.jsxs(E.Fragment, {
                children: [
                  E.jsx("li", { children: e.username }),
                  E.jsxs("li", { children: [e.firstName, " ", e.lastName] }),
                  E.jsx("li", { children: e.email }),
                  E.jsx("li", {
                    children: E.jsx("button", {
                      className: "profile-logout-button",
                      onClick: u,
                      children: "Log Out",
                    }),
                  }),
                ],
              })
            : E.jsx(E.Fragment, {
                children: E.jsxs("div", {
                  className: "modal-menu-item-container",
                  children: [
                    E.jsx(Xc, {
                      itemText: "Log In",
                      onItemClick: i,
                      modalComponent: E.jsx(h0, {}),
                    }),
                    E.jsx(Xc, {
                      itemText: "Sign Up",
                      onItemClick: i,
                      modalComponent: E.jsx(m0, {}),
                    }),
                    E.jsx("div", {
                      children: E.jsx("button", {
                        onClick: () => a(),
                        className: "guest-login-button",
                        children: "Log in with guest",
                      }),
                    }),
                  ],
                }),
              }),
        }),
      }),
    ],
  });
}
const Hp = "session/FETCH_USERSPOTS_REQUEST",
  Qp = "session/FETCH_USERSPOTS_SUCCESS",
  Kp = "session/FETCH_USERSPOTS_FAILURE",
  y0 = () => ({ type: Hp }),
  g0 = (e) => ({ type: Qp, payload: e }),
  w0 = (e) => ({ type: Kp, payload: e }),
  S0 = () => async (e) => {
    e(y0());
    try {
      const t = await fetch("/api/user/spots"),
        n = await t.json();
      return e(g0(n)), t;
    } catch (t) {
      e(w0(t.toString()));
    }
  },
  x0 = { data: [], loading: !1, error: null },
  E0 = (e = x0, t) => {
    switch (t.type) {
      case Hp:
        return { ...e, loading: !0, error: null };
      case Qp:
        return { ...e, loading: !1, data: t.payload };
      case Kp:
        return { ...e, loading: !1, error: t.payload };
      default:
        return e;
    }
  };
function C0({ sessionUser: e, userSpots: t, userId: n }) {
  const [r, l] = C.useState(!0),
    [o, i] = C.useState(!1),
    u = C.useRef();
  return (
    C.useEffect(() => {
      t !== void 0 && l(!1);
    }, [t]),
    C.useEffect(() => {
      const a = () => i(!0),
        s = () => i(!1),
        f = u.current;
      return (
        f &&
          (f.addEventListener("mouseenter", a),
          f.addEventListener("mouseleave", s)),
        () => {
          f &&
            (f.removeEventListener("mouseenter", a),
            f.removeEventListener("mouseleave", s));
        }
      );
    }, [u, o]),
    r
      ? E.jsx("div", { children: "Loading..." })
      : E.jsx("div", {
          children: e
            ? E.jsx("div", {
                ref: u,
                className: `property-toggle-container ${o ? "hovered" : ""}`,
                children:
                  t.length > 0
                    ? E.jsx(Ju, {
                        to: `/${n}/current-properties/`,
                        children: "Edit Your Properties",
                      })
                    : E.jsx(Ju, {
                        to: `/${n}/new-property/`,
                        children: "Host A Property",
                      }),
              })
            : null,
        })
  );
}
function k0({ isLoaded: e }) {
  const t = hr(),
    n = Qu((a) => a.session.user),
    { data: r, loading: l, error: o } = Qu((a) => a.fetchUserSpots);
  if (
    (C.useEffect(() => {
      t(S0());
    }, [t]),
    l)
  )
    return E.jsx("div", { children: "Loading..." });
  if (o) return E.jsxs("div", { children: ["Error: ", o] });
  const i = r || [],
    u = n == null ? void 0 : n.id;
  return E.jsxs("ul", {
    className: "navigation-container",
    children: [
      E.jsx("li", {
        children: E.jsx(Ju, {
          to: "/",
          children: E.jsx("img", { src: "/images/logo.svg" }),
        }),
      }),
      e &&
        E.jsxs("li", {
          className: "user-controls-container",
          children: [
            E.jsx(C0, { sessionUser: n, userSpots: i, userId: u }),
            E.jsx(v0, { user: n }),
          ],
        }),
    ],
  });
}
const Yp = "session/FETCH_ALLSPOTS_REQUEST",
  Xp = "session/FETCH_ALLSPOTS_SUCCESS",
  Gp = "session/FETCH_ALLSPOTS_FAILURE",
  P0 = () => ({ type: Yp }),
  R0 = (e) => ({ type: Xp, payload: e }),
  _0 = (e) => ({ type: Gp, payload: e }),
  N0 = (e) => async (t) => {
    t(P0());
    try {
      const r = await (await fetch(`/api/spots?page=${e}&size=10`)).json();
      t(R0(r));
    } catch (n) {
      t(_0(n.toString()));
    }
  },
  L0 = { data: [], loading: !1, error: null },
  j0 = (e = L0, t) => {
    switch (t.type) {
      case Yp:
        return { ...e, loading: !0, error: null };
      case Xp:
        return { ...e, loading: !1, data: t.payload };
      case Gp:
        return { ...e, loading: !1, error: t.payload };
      default:
        return e;
    }
  };
function T0({ spot: e }) {
  return E.jsx("div", {
    className: "spot-card",
    children: E.jsxs("div", {
      className: "spot-data-container",
      children: [
        E.jsx("div", {
          className: "spot-image-container",
          children: E.jsx("img", {
            className: "spot-image",
            src: e.previewImage,
            alt: e.name,
          }),
        }),
        E.jsxs("div", {
          className: "spot-info-container",
          children: [
            E.jsx("h3", { className: "spot-name", children: e.name }),
            E.jsxs("p", {
              className: "spot-location",
              children: [e.city, ", ", e.country],
            }),
            E.jsxs("p", {
              className: "spot-price",
              children: ["$", e.price, " night"],
            }),
          ],
        }),
      ],
    }),
  });
}
function M0() {
  const e = hr(),
    { data: t, loading: n, error: r } = Qu((u) => u.fetchAllSpots),
    [l, o] = C.useState(1);
  if (
    (C.useEffect(() => {
      e(N0(l));
    }, [e, l]),
    n)
  )
    return E.jsx("div", { children: "Loading..." });
  if (r) return E.jsxs("div", { children: ["Error: ", r] });
  const i = (t == null ? void 0 : t.Spots) || [];
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx("ul", {
        className: "spots-parent-container",
        children:
          i.length > 0
            ? i.map((u) => E.jsx(T0, { spot: u }, u.id))
            : E.jsx("li", { children: "No data available" }),
      }),
      E.jsxs("div", {
        className: "home-pagination-container",
        children: [
          l === 1
            ? null
            : E.jsx("button", {
                className: "pagination-button",
                onClick: () => o((u) => u - 1),
                children: "View Pervious 10",
              }),
          E.jsx("button", {
            className: "pagination-button",
            onClick: () => o((u) => u + 1),
            children: "View 10 More",
          }),
        ],
      }),
    ],
  });
}
function O0() {
  return E.jsx("div", { children: "CreateNewProperty" });
}
function D0() {
  return E.jsx("div", { children: "ListAllProperties" });
}
function z0() {
  const e = hr(),
    [t, n] = C.useState(!1);
  return (
    C.useEffect(() => {
      e(s0()).then(() => {
        n(!0);
      });
    }, [e]),
    E.jsx("div", {
      className: "app-container",
      children: E.jsxs("div", {
        className: "app-display",
        children: [
          E.jsx("div", {
            className: "navigation",
            children: E.jsx(k0, { isLoaded: t }),
          }),
          E.jsx("div", {
            className: "display-content-container",
            children: t && E.jsx(zg, {}),
          }),
        ],
      }),
    })
  );
}
const F0 = Vg([
  {
    element: E.jsx(z0, {}),
    children: [
      { path: "/", element: E.jsx(M0, {}) },
      { path: "/:userId/current-properties/", element: E.jsx(D0, {}) },
      { path: "/:userId/new-property", element: E.jsx(O0, {}) },
    ],
  },
]);
function U0() {
  return E.jsx(Og, { router: F0 });
}
function sl(e) {
  "@babel/helpers - typeof";
  return (
    (sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sl(e)
  );
}
function $0(e, t) {
  if (sl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (sl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I0(e) {
  var t = $0(e, "string");
  return sl(t) === "symbol" ? t : String(t);
}
function A0(e, t, n) {
  return (
    (t = I0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Gc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gc(Object(n), !0).forEach(function (r) {
          A0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function je(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Zc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Zi = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Po = {
    INIT: "@@redux/INIT" + Zi(),
    REPLACE: "@@redux/REPLACE" + Zi(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Zi();
    },
  };
function B0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Jp(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(je(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(je(1));
    return n(Jp)(e, t);
  }
  if (typeof e != "function") throw new Error(je(2));
  var l = e,
    o = t,
    i = [],
    u = i,
    a = !1;
  function s() {
    u === i && (u = i.slice());
  }
  function f() {
    if (a) throw new Error(je(3));
    return o;
  }
  function h(y) {
    if (typeof y != "function") throw new Error(je(4));
    if (a) throw new Error(je(5));
    var R = !0;
    return (
      s(),
      u.push(y),
      function () {
        if (R) {
          if (a) throw new Error(je(6));
          (R = !1), s();
          var c = u.indexOf(y);
          u.splice(c, 1), (i = null);
        }
      }
    );
  }
  function v(y) {
    if (!B0(y)) throw new Error(je(7));
    if (typeof y.type > "u") throw new Error(je(8));
    if (a) throw new Error(je(9));
    try {
      (a = !0), (o = l(o, y));
    } finally {
      a = !1;
    }
    for (var R = (i = u), d = 0; d < R.length; d++) {
      var c = R[d];
      c();
    }
    return y;
  }
  function g(y) {
    if (typeof y != "function") throw new Error(je(10));
    (l = y), v({ type: Po.REPLACE });
  }
  function w() {
    var y,
      R = h;
    return (
      (y = {
        subscribe: function (c) {
          if (typeof c != "object" || c === null) throw new Error(je(11));
          function m() {
            c.next && c.next(f());
          }
          m();
          var p = R(m);
          return { unsubscribe: p };
        },
      }),
      (y[Zc] = function () {
        return this;
      }),
      y
    );
  }
  return (
    v({ type: Po.INIT }),
    (r = { dispatch: v, subscribe: h, getState: f, replaceReducer: g }),
    (r[Zc] = w),
    r
  );
}
function V0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Po.INIT });
    if (typeof r > "u") throw new Error(je(12));
    if (typeof n(void 0, { type: Po.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(je(13));
  });
}
function W0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    V0(n);
  } catch (u) {
    i = u;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var f = !1, h = {}, v = 0; v < o.length; v++) {
      var g = o[v],
        w = n[g],
        y = a[g],
        R = w(y, s);
      if (typeof R > "u") throw (s && s.type, new Error(je(14)));
      (h[g] = R), (f = f || R !== y);
    }
    return (f = f || o.length !== Object.keys(a).length), f ? h : a;
  };
}
function H0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, l) {
        return function () {
          return r(l.apply(void 0, arguments));
        };
      });
}
function Q0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(je(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        u = t.map(function (a) {
          return a(i);
        });
      return (
        (o = H0.apply(void 0, u)(l.dispatch)),
        Jc(Jc({}, l), {}, { dispatch: o })
      );
    };
  };
}
function Zp(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (u) {
        return typeof u == "function" ? u(l, o, e) : i(u);
      };
    };
  };
  return t;
}
var qp = Zp();
qp.withExtraArgument = Zp;
const K0 = qp,
  Y0 = W0({ session: f0, fetchAllSpots: j0, fetchUserSpots: E0 });
let bp;
bp = Q0(K0);
const X0 = (e) => Jp(Y0, e, bp),
  G0 = X0();
qi.createRoot(document.getElementById("root")).render(
  E.jsx(Nt.StrictMode, {
    children: E.jsx(d0, {
      children: E.jsxs(ky, {
        store: G0,
        children: [E.jsx(U0, {}), E.jsx(p0, {})],
      }),
    }),
  })
);
