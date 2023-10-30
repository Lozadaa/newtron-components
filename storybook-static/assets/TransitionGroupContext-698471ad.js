import{r as p,a as Le,R as Ve}from"./index-76fb7be0.js";import{w as Se,a as re}from"./emotion-element-c39617d8.browser.esm-02814d88.js";import{u as ie,a as ze}from"./inheritsLoose-2f439779.js";import{_ as S}from"./extends-98964cd2.js";import{d as xe,_ as we,a as Q,i as le,e as ue,s as De,c as Ge}from"./createTheme-3150df99.js";function Ne(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Ue=typeof window<"u"?p.useLayoutEffect:p.useEffect,We=Ue;let ce=0;function qe(e){const[t,r]=p.useState(e),n=e||t;return p.useEffect(()=>{t==null&&(ce+=1,r(`mui-${ce}`))},[t]),n}const fe=Le["useId".toString()];function Bt(e){if(fe!==void 0){const t=fe();return e??t}return qe(e)}function Xt(e){const t=p.useRef(e);return We(()=>{t.current=e}),p.useRef((...r)=>(0,t.current)(...r)).current}function Yt(...e){return p.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Ne(r,t)})},e)}function Ce(e,t){const r=S({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=S({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const o=e[n]||{},a=t[n];r[n]={},!a||!Object.keys(a)?r[n]=o:!o||!Object.keys(o)?r[n]=a:(r[n]=S({},a),Object.keys(o).forEach(s=>{r[n][s]=Ce(o[s],a[s])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function Kt(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((a,s)=>{if(s){const i=t(s);i!==""&&a.push(i),r&&r[s]&&a.push(r[s])}return a},[]).join(" ")}),n}const de=e=>e,He=()=>{let e=de;return{configure(t){e=t},generate(t){return e(t)},reset(){e=de}}},Be=He(),Xe=Be,Ye={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ke(e,t,r="Mui"){const n=Ye[t];return n?`${r}-${n}`:`${Xe.generate(e)}-${t}`}function Zt(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=Ke(e,o,r)}),n}const ke="$$material";function _e(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Ze=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Je=_e(function(e){return Ze.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pe={exports:{}},u={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=typeof Symbol=="function"&&Symbol.for,ne=d?Symbol.for("react.element"):60103,oe=d?Symbol.for("react.portal"):60106,U=d?Symbol.for("react.fragment"):60107,W=d?Symbol.for("react.strict_mode"):60108,q=d?Symbol.for("react.profiler"):60114,H=d?Symbol.for("react.provider"):60109,B=d?Symbol.for("react.context"):60110,ae=d?Symbol.for("react.async_mode"):60111,X=d?Symbol.for("react.concurrent_mode"):60111,Y=d?Symbol.for("react.forward_ref"):60112,K=d?Symbol.for("react.suspense"):60113,Qe=d?Symbol.for("react.suspense_list"):60120,Z=d?Symbol.for("react.memo"):60115,J=d?Symbol.for("react.lazy"):60116,et=d?Symbol.for("react.block"):60121,tt=d?Symbol.for("react.fundamental"):60117,rt=d?Symbol.for("react.responder"):60118,nt=d?Symbol.for("react.scope"):60119;function g(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ne:switch(e=e.type,e){case ae:case X:case U:case q:case W:case K:return e;default:switch(e=e&&e.$$typeof,e){case B:case Y:case J:case Z:case H:return e;default:return t}}case oe:return t}}}function Ee(e){return g(e)===X}u.AsyncMode=ae;u.ConcurrentMode=X;u.ContextConsumer=B;u.ContextProvider=H;u.Element=ne;u.ForwardRef=Y;u.Fragment=U;u.Lazy=J;u.Memo=Z;u.Portal=oe;u.Profiler=q;u.StrictMode=W;u.Suspense=K;u.isAsyncMode=function(e){return Ee(e)||g(e)===ae};u.isConcurrentMode=Ee;u.isContextConsumer=function(e){return g(e)===B};u.isContextProvider=function(e){return g(e)===H};u.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ne};u.isForwardRef=function(e){return g(e)===Y};u.isFragment=function(e){return g(e)===U};u.isLazy=function(e){return g(e)===J};u.isMemo=function(e){return g(e)===Z};u.isPortal=function(e){return g(e)===oe};u.isProfiler=function(e){return g(e)===q};u.isStrictMode=function(e){return g(e)===W};u.isSuspense=function(e){return g(e)===K};u.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===U||e===X||e===q||e===W||e===K||e===Qe||typeof e=="object"&&e!==null&&(e.$$typeof===J||e.$$typeof===Z||e.$$typeof===H||e.$$typeof===B||e.$$typeof===Y||e.$$typeof===tt||e.$$typeof===rt||e.$$typeof===nt||e.$$typeof===et)};u.typeOf=g;Pe.exports=u;var ot=Pe.exports,Te=ot,at={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},st={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe={};Oe[Te.ForwardRef]=at;Oe[Te.Memo]=st;var it=!0;function lt(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):n+=o+" "}),n}var Re=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||it===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},$e=function(t,r,n){Re(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function ut(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft=/[A-Z]|^ms/g,dt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Fe=function(t){return t.charCodeAt(1)===45},me=function(t){return t!=null&&typeof t!="boolean"},ee=_e(function(e){return Fe(e)?e:e.replace(ft,"-$&").toLowerCase()}),pe=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(dt,function(n,o,a){return k={name:o,styles:a,next:k},o})}return ct[t]!==1&&!Fe(t)&&typeof r=="number"&&r!==0?r+"px":r};function j(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return k={name:r.name,styles:r.styles,next:k},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)k={name:n.name,styles:n.styles,next:k},n=n.next;var o=r.styles+";";return o}return mt(e,t,r)}case"function":{if(e!==void 0){var a=k,s=r(e);return k=a,j(e,t,s)}break}}if(t==null)return r;var i=t[r];return i!==void 0?i:r}function mt(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=j(e,t,r[o])+";";else for(var a in r){var s=r[a];if(typeof s!="object")t!=null&&t[s]!==void 0?n+=a+"{"+t[s]+"}":me(s)&&(n+=ee(a)+":"+pe(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var i=0;i<s.length;i++)me(s[i])&&(n+=ee(a)+":"+pe(a,s[i])+";");else{var c=j(e,t,s);switch(a){case"animation":case"animationName":{n+=ee(a)+":"+c+";";break}default:n+=a+"{"+c+"}"}}}return n}var he=/label:\s*([^\s;\n{]+)\s*(;|$)/g,k,se=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";k=void 0;var s=t[0];s==null||s.raw===void 0?(o=!1,a+=j(n,r,s)):a+=s[0];for(var i=1;i<t.length;i++)a+=j(n,r,t[i]),o&&(a+=s[i]);he.lastIndex=0;for(var c="",h;(h=he.exec(a))!==null;)c+="-"+h[1];var b=ut(a)+c;return{name:b,styles:a,next:k}},Jt=Se(function(e,t){var r=e.styles,n=se([r],void 0,p.useContext(re)),o=p.useRef();return ie(function(){var a=t.key+"-global",s=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,c=document.querySelector('style[data-emotion="'+a+" "+n.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(i=!0,c.setAttribute("data-emotion",a),s.hydrate([c])),o.current=[s,i],function(){s.flush()}},[t]),ie(function(){var a=o.current,s=a[0],i=a[1];if(i){a[1]=!1;return}if(n.next!==void 0&&$e(t,n.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",n,s,!1)},[t,n.name]),null});function pt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return se(t)}var Qt=function(){var t=pt.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ht=Je,yt=function(t){return t!=="theme"},ye=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ht:yt},ve=function(t,r,n){var o;if(r){var a=r.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(s){return t.__emotion_forwardProp(s)&&a(s)}:a}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},vt=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Re(r,n,o),ze(function(){return $e(r,n,o)}),null},gt=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,a,s;r!==void 0&&(a=r.label,s=r.target);var i=ve(t,r,n),c=i||ye(o),h=!c("as");return function(){var b=arguments,w=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&w.push("label:"+a+";"),b[0]==null||b[0].raw===void 0)w.push.apply(w,b);else{w.push(b[0][0]);for(var L=b.length,F=1;F<L;F++)w.push(b[F],b[0][F])}var y=Se(function(m,_,A){var O=h&&m.as||o,E="",f=[],x=m;if(m.theme==null){x={};for(var T in m)x[T]=m[T];x.theme=p.useContext(re)}typeof m.className=="string"?E=lt(_.registered,f,m.className):m.className!=null&&(E=m.className+" ");var P=se(w.concat(f),_.registered,x);E+=_.key+"-"+P.name,s!==void 0&&(E+=" "+s);var V=h&&i===void 0?ye(O):c,R={};for(var l in m)h&&l==="as"||V(l)&&(R[l]=m[l]);return R.className=E,R.ref=A,p.createElement(p.Fragment,null,p.createElement(vt,{cache:_,serialized:P,isStringTag:typeof O=="string"}),p.createElement(O,R))});return y.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=w,y.__emotion_forwardProp=i,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(m,_){return e(m,S({},r,_,{shouldForwardProp:ve(y,_,!0)})).apply(void 0,w)},y}},bt=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],te=gt.bind();bt.forEach(function(e){te[e]=te(e)});/**
 * @mui/styled-engine v5.14.15
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function St(e,t){return te(e,t)}const xt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function wt(e){return Object.keys(e).length===0}function Ct(e=null){const t=p.useContext(re);return!t||wt(t)?e:t}const kt=xe();function _t(e=kt){return Ct(e)}function Ae(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ae(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function er(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Ae(e))&&(n&&(n+=" "),n+=t);return n}const Pt=["variant"];function ge(e){return e.length===0}function Me(e){const{variant:t}=e,r=we(e,Pt);let n=t||"";return Object.keys(r).sort().forEach(o=>{o==="color"?n+=ge(n)?e[o]:Q(e[o]):n+=`${ge(n)?o:Q(o)}${Q(e[o].toString())}`}),n}const Et=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Tt(e){return Object.keys(e).length===0}function Ot(e){return typeof e=="string"&&e.charCodeAt(0)>96}const Rt=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,G=e=>{const t={};return e&&e.forEach(r=>{const n=Me(r.props);t[n]=r.style}),t},$t=(e,t)=>{let r=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants),G(r)},N=(e,t,r)=>{const{ownerState:n={}}=e,o=[];return r&&r.forEach(a=>{let s=!0;Object.keys(a.props).forEach(i=>{n[i]!==a.props[i]&&e[i]!==a.props[i]&&(s=!1)}),s&&o.push(t[Me(a.props)])}),o},Ft=(e,t,r,n)=>{var o;const a=r==null||(o=r.components)==null||(o=o[n])==null?void 0:o.variants;return N(e,t,a)};function I(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const At=xe(),Mt=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function D({defaultTheme:e,theme:t,themeId:r}){return Tt(t)?e:t[r]||t}function It(e){return e?(t,r)=>r[e]:null}const be=({styledArg:e,props:t,defaultTheme:r,themeId:n})=>{const o=e(S({},t,{theme:D(S({},t,{defaultTheme:r,themeId:n}))}));let a;if(o&&o.variants&&(a=o.variants,delete o.variants),a){const s=N(t,G(a),a);return[o,...s]}return o};function jt(e={}){const{themeId:t,defaultTheme:r=At,rootShouldForwardProp:n=I,slotShouldForwardProp:o=I}=e,a=s=>De(S({},s,{theme:D(S({},s,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(s,i={})=>{xt(s,f=>f.filter(x=>!(x!=null&&x.__mui_systemSx)));const{name:c,slot:h,skipVariantsResolver:b,skipSx:w,overridesResolver:L=It(Mt(h))}=i,F=we(i,Et),y=b!==void 0?b:h&&h!=="Root"&&h!=="root"||!1,m=w||!1;let _,A=I;h==="Root"||h==="root"?A=n:h?A=o:Ot(s)&&(A=void 0);const O=St(s,S({shouldForwardProp:A,label:_},F)),E=(f,...x)=>{const T=x?x.map(l=>{if(typeof l=="function"&&l.__emotion_real!==l)return v=>be({styledArg:l,props:v,defaultTheme:r,themeId:t});if(le(l)){let v=l,C;return l&&l.variants&&(C=l.variants,delete v.variants,v=M=>{let $=l;return N(M,G(C),C).forEach(je=>{$=ue($,je)}),$}),v}return l}):[];let P=f;if(le(f)){let l;f&&f.variants&&(l=f.variants,delete P.variants,P=v=>{let C=f;return N(v,G(l),l).forEach($=>{C=ue(C,$)}),C})}else typeof f=="function"&&f.__emotion_real!==f&&(P=l=>be({styledArg:f,props:l,defaultTheme:r,themeId:t}));c&&L&&T.push(l=>{const v=D(S({},l,{defaultTheme:r,themeId:t})),C=Rt(c,v);if(C){const M={};return Object.entries(C).forEach(([$,z])=>{M[$]=typeof z=="function"?z(S({},l,{theme:v})):z}),L(l,M)}return null}),c&&!y&&T.push(l=>{const v=D(S({},l,{defaultTheme:r,themeId:t}));return Ft(l,$t(c,v),v,c)}),m||T.push(a);const V=T.length-x.length;if(Array.isArray(f)&&V>0){const l=new Array(V).fill("");P=[...f,...l],P.raw=[...f.raw,...l]}const R=O(P,...T);return s.muiName&&(R.muiName=s.muiName),R};return O.withConfig&&(E.withConfig=O.withConfig),E}}function Lt(e){const{theme:t,name:r,props:n}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?n:Ce(t.components[r].defaultProps,n)}function Vt({props:e,name:t,defaultTheme:r,themeId:n}){let o=_t(r);return n&&(o=o[n]||o),Lt({theme:o,name:t,props:e})}const zt=Ge(),Ie=zt;function tr({props:e,name:t}){return Vt({props:e,name:t,defaultTheme:Ie,themeId:ke})}const Dt=e=>I(e)&&e!=="classes",rr=I,Gt=jt({themeId:ke,defaultTheme:Ie,rootShouldForwardProp:Dt}),nr=Gt,or=Ve.createContext(null);export{Jt as G,or as T,Ke as a,Yt as b,er as c,Xt as d,Kt as e,Ce as f,Zt as g,pt as h,Bt as i,_t as j,Qt as k,Ie as l,ke as m,We as n,Ne as o,rr as p,Dt as r,nr as s,tr as u};
//# sourceMappingURL=TransitionGroupContext-698471ad.js.map
