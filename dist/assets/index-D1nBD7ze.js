(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var zh={exports:{}},ga={},Bh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function _0(){if(km)return Se;km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function H(x,B,le){this.props=x,this.context=B,this.refs=Q,this.updater=le||j}H.prototype.isReactComponent={},H.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Ee(){}Ee.prototype=H.prototype;function ve(x,B,le){this.props=x,this.context=B,this.refs=Q,this.updater=le||j}var ye=ve.prototype=new Ee;ye.constructor=ve,G(ye,H.prototype),ye.isPureReactComponent=!0;var Te=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ae={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(x,B,le){var we,Ie={},Ne=null,Le=null;if(B!=null)for(we in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ne=""+B.key),B)Ke.call(B,we)&&!N.hasOwnProperty(we)&&(Ie[we]=B[we]);var Me=arguments.length-2;if(Me===1)Ie.children=le;else if(1<Me){for(var ze=Array(Me),gt=0;gt<Me;gt++)ze[gt]=arguments[gt+2];Ie.children=ze}if(x&&x.defaultProps)for(we in Me=x.defaultProps,Me)Ie[we]===void 0&&(Ie[we]=Me[we]);return{$$typeof:i,type:x,key:Ne,ref:Le,props:Ie,_owner:Ae.current}}function R(x,B){return{$$typeof:i,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function P(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function V(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(le){return B[le]})}var O=/\/+/g;function S(x,B){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):B.toString(36)}function tt(x,B,le,we,Ie){var Ne=typeof x;(Ne==="undefined"||Ne==="boolean")&&(x=null);var Le=!1;if(x===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(x.$$typeof){case i:case e:Le=!0}}if(Le)return Le=x,Ie=Ie(Le),x=we===""?"."+S(Le,0):we,Te(Ie)?(le="",x!=null&&(le=x.replace(O,"$&/")+"/"),tt(Ie,B,le,"",function(gt){return gt})):Ie!=null&&(P(Ie)&&(Ie=R(Ie,le+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+x)),B.push(Ie)),1;if(Le=0,we=we===""?".":we+":",Te(x))for(var Me=0;Me<x.length;Me++){Ne=x[Me];var ze=we+S(Ne,Me);Le+=tt(Ne,B,le,ze,Ie)}else if(ze=D(x),typeof ze=="function")for(x=ze.call(x),Me=0;!(Ne=x.next()).done;)Ne=Ne.value,ze=we+S(Ne,Me++),Le+=tt(Ne,B,le,ze,Ie);else if(Ne==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Nt(x,B,le){if(x==null)return x;var we=[],Ie=0;return tt(x,we,"","",function(Ne){return B.call(le,Ne,Ie++)}),we}function Dt(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(le){(x._status===0||x._status===-1)&&(x._status=1,x._result=le)},function(le){(x._status===0||x._status===-1)&&(x._status=2,x._result=le)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var Ue={current:null},J={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Nt,forEach:function(x,B,le){Nt(x,function(){B.apply(this,arguments)},le)},count:function(x){var B=0;return Nt(x,function(){B++}),B},toArray:function(x){return Nt(x,function(B){return B})||[]},only:function(x){if(!P(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Se.Component=H,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ve,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=ee,Se.cloneElement=function(x,B,le){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var we=G({},x.props),Ie=x.key,Ne=x.ref,Le=x._owner;if(B!=null){if(B.ref!==void 0&&(Ne=B.ref,Le=Ae.current),B.key!==void 0&&(Ie=""+B.key),x.type&&x.type.defaultProps)var Me=x.type.defaultProps;for(ze in B)Ke.call(B,ze)&&!N.hasOwnProperty(ze)&&(we[ze]=B[ze]===void 0&&Me!==void 0?Me[ze]:B[ze])}var ze=arguments.length-2;if(ze===1)we.children=le;else if(1<ze){Me=Array(ze);for(var gt=0;gt<ze;gt++)Me[gt]=arguments[gt+2];we.children=Me}return{$$typeof:i,type:x.type,key:Ie,ref:Ne,props:we,_owner:Le}},Se.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Se.createElement=I,Se.createFactory=function(x){var B=I.bind(null,x);return B.type=x,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(x){return{$$typeof:p,render:x}},Se.isValidElement=P,Se.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Dt}},Se.memo=function(x,B){return{$$typeof:v,type:x,compare:B===void 0?null:B}},Se.startTransition=function(x){var B=J.transition;J.transition={};try{x()}finally{J.transition=B}},Se.unstable_act=ee,Se.useCallback=function(x,B){return Ue.current.useCallback(x,B)},Se.useContext=function(x){return Ue.current.useContext(x)},Se.useDebugValue=function(){},Se.useDeferredValue=function(x){return Ue.current.useDeferredValue(x)},Se.useEffect=function(x,B){return Ue.current.useEffect(x,B)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(x,B,le){return Ue.current.useImperativeHandle(x,B,le)},Se.useInsertionEffect=function(x,B){return Ue.current.useInsertionEffect(x,B)},Se.useLayoutEffect=function(x,B){return Ue.current.useLayoutEffect(x,B)},Se.useMemo=function(x,B){return Ue.current.useMemo(x,B)},Se.useReducer=function(x,B,le){return Ue.current.useReducer(x,B,le)},Se.useRef=function(x){return Ue.current.useRef(x)},Se.useState=function(x){return Ue.current.useState(x)},Se.useSyncExternalStore=function(x,B,le){return Ue.current.useSyncExternalStore(x,B,le)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var Nm;function Dd(){return Nm||(Nm=1,Bh.exports=_0()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function y0(){if(Dm)return ga;Dm=1;var i=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,v){var w,A={},D=null,j=null;v!==void 0&&(D=""+v),g.key!==void 0&&(D=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(A[w]=g[w]);if(p&&p.defaultProps)for(w in g=p.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:p,key:D,ref:j,props:A,_owner:o.current}}return ga.Fragment=t,ga.jsx=h,ga.jsxs=h,ga}var Vm;function v0(){return Vm||(Vm=1,zh.exports=y0()),zh.exports}var ae=v0(),et=Dd(),hu={},$h={exports:{}},Xt={},qh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function E0(){return xm||(xm=1,function(i){function e(J,ce){var ee=J.length;J.push(ce);e:for(;0<ee;){var x=ee-1>>>1,B=J[x];if(0<o(B,ce))J[x]=ce,J[ee]=B,ee=x;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ce=J[0],ee=J.pop();if(ee!==ce){J[0]=ee;e:for(var x=0,B=J.length,le=B>>>1;x<le;){var we=2*(x+1)-1,Ie=J[we],Ne=we+1,Le=J[Ne];if(0>o(Ie,ee))Ne<B&&0>o(Le,Ie)?(J[x]=Le,J[Ne]=ee,x=Ne):(J[x]=Ie,J[we]=ee,x=we);else if(Ne<B&&0>o(Le,ee))J[x]=Le,J[Ne]=ee,x=Ne;else break e}}return ce}function o(J,ce){var ee=J.sortIndex-ce.sortIndex;return ee!==0?ee:J.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var g=[],v=[],w=1,A=null,D=3,j=!1,G=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=J)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function Te(J){if(Q=!1,ye(J),!G)if(t(g)!==null)G=!0,Dt(Ke);else{var ce=t(v);ce!==null&&Ue(Te,ce.startTime-J)}}function Ke(J,ce){G=!1,Q&&(Q=!1,Ee(I),I=-1),j=!0;var ee=D;try{for(ye(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||J&&!V());){var x=A.callback;if(typeof x=="function"){A.callback=null,D=A.priorityLevel;var B=x(A.expirationTime<=ce);ce=i.unstable_now(),typeof B=="function"?A.callback=B:A===t(g)&&s(g),ye(ce)}else s(g);A=t(g)}if(A!==null)var le=!0;else{var we=t(v);we!==null&&Ue(Te,we.startTime-ce),le=!1}return le}finally{A=null,D=ee,j=!1}}var Ae=!1,N=null,I=-1,R=5,P=-1;function V(){return!(i.unstable_now()-P<R)}function O(){if(N!==null){var J=i.unstable_now();P=J;var ce=!0;try{ce=N(!0,J)}finally{ce?S():(Ae=!1,N=null)}}else Ae=!1}var S;if(typeof ve=="function")S=function(){ve(O)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Nt=tt.port2;tt.port1.onmessage=O,S=function(){Nt.postMessage(null)}}else S=function(){H(O,0)};function Dt(J){N=J,Ae||(Ae=!0,S())}function Ue(J,ce){I=H(function(){J(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){G||j||(G=!0,Dt(Ke))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(D){case 1:case 2:case 3:var ce=3;break;default:ce=D}var ee=D;D=ce;try{return J()}finally{D=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=D;D=J;try{return ce()}finally{D=ee}},i.unstable_scheduleCallback=function(J,ce,ee){var x=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:ce,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>x?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(Q?(Ee(I),I=-1):Q=!0,Ue(Te,ee-x))):(J.sortIndex=B,e(g,J),G||j||(G=!0,Dt(Ke))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var ce=D;return function(){var ee=D;D=ce;try{return J.apply(this,arguments)}finally{D=ee}}}}(Hh)),Hh}var Om;function w0(){return Om||(Om=1,qh.exports=E0()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function T0(){if(Lm)return Xt;Lm=1;var i=Dd(),e=w0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function D(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,m,y){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=m,this.removeEmptyString=y}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ee,ve);H[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ee,ve);H[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ee,ve);H[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function B(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var le=!1;function we(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),y=d.length-1,T=m.length-1;1<=y&&0<=T&&d[y]!==m[T];)T--;for(;1<=y&&0<=T;y--,T--)if(d[y]!==m[T]){if(y!==1||T!==1)do if(y--,T--,0>T||d[y]!==m[T]){var C=`
`+d[y].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=y&&0<=T);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ae:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Dt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(y){c=""+y,m.call(this,y)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(y){c=""+y},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function tr(n){n._valueTracker||(n._valueTracker=gt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function To(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Io(n,r){To(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ya(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nr=Array.isArray;function rr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function So(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(nr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function us(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ao(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ir,Ro=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ir.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function kr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wi=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(n){wi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ei[r]=Ei[n]})});function Co(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ei.hasOwnProperty(n)&&Ei[n]?(""+r).trim():r+"px"}function Po(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Co(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ko=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(n,r){if(r){if(ko[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Do(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,cn=null,Fn=null;function ds(n){if(n=ta(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),hs(n.stateNode,n.type,r))}}function Un(n){cn?Fn?Fn.push(n):Fn=[n]:cn=n}function Vo(){if(cn){var n=cn,r=Fn;if(Fn=cn=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Ii(n,r){return n(r)}function xo(){}var sr=!1;function Oo(n,r,a){if(sr)return n(r,a);sr=!0;try{return Ii(n,r,a)}finally{sr=!1,(cn!==null||Fn!==null)&&(xo(),Vo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(p)try{var En={};Object.defineProperty(En,"passive",{get:function(){fs=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{fs=!1}function Si(n,r,a,c,d,m,y,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(W){this.onError(W)}}var Ai=!1,ps=null,wn=!1,Lo=null,mc={onError:function(n){Ai=!0,ps=n}};function ms(n,r,a,c,d,m,y,T,C){Ai=!1,ps=null,Si.apply(mc,arguments)}function Xa(n,r,a,c,d,m,y,T,C){if(ms.apply(this,arguments),Ai){if(Ai){var F=ps;Ai=!1,ps=null}else throw Error(t(198));wn||(wn=!0,Lo=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ri(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function Ja(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return In(d),n;if(m===c)return In(d),r;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var y=!1,T=d.child;T;){if(T===a){y=!0,a=d,c=m;break}if(T===c){y=!0,c=d,a=m;break}T=T.sibling}if(!y){for(T=m.child;T;){if(T===a){y=!0,a=m,c=d;break}if(T===c){y=!0,c=m,a=d;break}T=T.sibling}if(!y)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Mo(n){return n=Ja(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var _s=e.unstable_scheduleCallback,bo=e.unstable_cancelCallback,Za=e.unstable_shouldYield,gc=e.unstable_requestPaint,Be=e.unstable_now,el=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,tl=e.unstable_IdlePriority,Pi=null,en=null;function nl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Pi,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:il,Uo=Math.log,rl=Math.LN2;function il(n){return n>>>=0,n===0?32:31-(Uo(n)/rl|0)|0}var ys=64,vs=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ki(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,y=a&268435455;if(y!==0){var T=y&~d;T!==0?c=Dr(T):(m&=y,m!==0&&(c=Dr(m)))}else y=a&~d,y!==0?c=Dr(y):m!==0&&(c=Dr(m));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,m=r&-r,d>=m||d===16&&(m&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),d=1<<a,c|=n[a],r&=~d;return c}function _c(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function or(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var y=31-jt(m),T=1<<y,C=d[y];C===-1?(!(T&a)||T&c)&&(d[y]=_c(T,r)):C<=r&&(n.expiredLanes|=T),m&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ni(){var n=ys;return ys<<=1,!(ys&4194240)&&(ys=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function xr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),m=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Lr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var sl,Es,ol,al,ll,jo=!1,jn=[],Tt=null,Sn=null,An=null,Mr=new Map,dn=new Map,zn=[],yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function qt(n,r,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=ta(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function vc(n,r,a,c,d){switch(r){case"focusin":return Tt=qt(Tt,n,r,a,c,d),!0;case"dragenter":return Sn=qt(Sn,n,r,a,c,d),!0;case"mouseover":return An=qt(An,n,r,a,c,d),!0;case"pointerover":var m=d.pointerId;return Mr.set(m,qt(Mr.get(m)||null,n,r,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,dn.set(m,qt(dn.get(m)||null,n,r,a,c,d)),!0}return!1}function cl(n){var r=Li(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ri(a),r!==null){n.blockedOn=r,ll(n.priority,function(){ol(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ar(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ws(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ti=c,a.target.dispatchEvent(c),Ti=null}else return r=ta(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function Di(n,r,a){ar(n)&&a.delete(r)}function hl(){jo=!1,Tt!==null&&ar(Tt)&&(Tt=null),Sn!==null&&ar(Sn)&&(Sn=null),An!==null&&ar(An)&&(An=null),Mr.forEach(Di),dn.forEach(Di)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hl)))}function Cn(n){function r(d){return Rn(d,n)}if(0<jn.length){Rn(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Rn(Tt,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),Mr.forEach(r),dn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)cl(a),a.blockedOn===null&&zn.shift()}var lr=Te.ReactCurrentBatchConfig,br=!0;function Ge(n,r,a,c){var d=Pe,m=lr.transition;lr.transition=null;try{Pe=1,zo(n,r,a,c)}finally{Pe=d,lr.transition=m}}function Ec(n,r,a,c){var d=Pe,m=lr.transition;lr.transition=null;try{Pe=4,zo(n,r,a,c)}finally{Pe=d,lr.transition=m}}function zo(n,r,a,c){if(br){var d=ws(n,r,a,c);if(d===null)Dc(n,r,c,Vi,a),ul(n,c);else if(vc(d,n,r,a,c))c.stopPropagation();else if(ul(n,c),r&4&&-1<yc.indexOf(n)){for(;d!==null;){var m=ta(d);if(m!==null&&sl(m),m=ws(n,r,a,c),m===null&&Dc(n,r,c,Vi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Dc(n,r,c,null,a)}}var Vi=null;function ws(n,r,a,c){if(Vi=null,n=cs(c),n=Li(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ri(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Vi=n,null}function Bo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(el()){case Ci:return 1;case Nr:return 4;case hn:case Fo:return 16;case tl:return 536870912;default:return 16}default:return 16}}var nn=null,Ts=null,Ht=null;function $o(){if(Ht)return Ht;var n,r=Ts,a=r.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&r[n]===d[n];n++);var y=a-n;for(c=1;c<=y&&r[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function qo(){return!1}function It(n){function r(a,c,d,m,y){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bn:qo,this.isPropagationStopped=qo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=It(Pn),$n=ee({},Pn,{view:0,detail:0}),wc=It($n),As,ur,Fr,xi=ee({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(As=n.screenX-Fr.screenX,ur=n.screenY-Fr.screenY):ur=As=0,Fr=n),As)},movementY:function(n){return"movementY"in n?n.movementY:ur}}),Rs=It(xi),Ho=ee({},xi,{dataTransfer:0}),dl=It(Ho),Cs=ee({},$n,{relatedTarget:0}),Ps=It(Cs),fl=ee({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),cr=It(fl),pl=ee({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ml=It(pl),gl=ee({},Pn,{data:0}),Wo=It(gl),ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_l[n])?!!r[n]:!1}function qn(){return yl}var l=ee({},$n,{key:function(n){if(n.key){var r=ks[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),_=ee({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(_),L=ee({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),U=It(L),X=ee({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(X),ht=ee({},xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=It(ht),_t=[9,13,27,32],st=p&&"CompositionEvent"in window,fn=null;p&&"documentMode"in document&&(fn=document.documentMode);var rn=p&&"TextEvent"in window&&!fn,Oi=p&&(!st||fn&&8<fn&&11>=fn),Ns=" ",If=!1;function Sf(n,r){switch(n){case"keyup":return _t.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function mv(n,r){switch(n){case"compositionend":return Af(r);case"keypress":return r.which!==32?null:(If=!0,Ns);case"textInput":return n=r.data,n===Ns&&If?null:n;default:return null}}function gv(n,r){if(Ds)return n==="compositionend"||!st&&Sf(n,r)?(n=$o(),Ht=Ts=nn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Oi&&r.locale!=="ko"?null:r.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!_v[n.type]:r==="textarea"}function Cf(n,r,a,c){Un(c),r=Il(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Ko=null,Go=null;function yv(n){Hf(n,0)}function vl(n){var r=Ms(n);if(ss(r))return n}function vv(n,r){if(n==="change")return r}var Pf=!1;if(p){var Tc;if(p){var Ic="oninput"in document;if(!Ic){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Ic=typeof kf.oninput=="function"}Tc=Ic}else Tc=!1;Pf=Tc&&(!document.documentMode||9<document.documentMode)}function Nf(){Ko&&(Ko.detachEvent("onpropertychange",Df),Go=Ko=null)}function Df(n){if(n.propertyName==="value"&&vl(Go)){var r=[];Cf(r,Go,n,cs(n)),Oo(yv,r)}}function Ev(n,r,a){n==="focusin"?(Nf(),Ko=r,Go=a,Ko.attachEvent("onpropertychange",Df)):n==="focusout"&&Nf()}function wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(Go)}function Tv(n,r){if(n==="click")return vl(r)}function Iv(n,r){if(n==="input"||n==="change")return vl(r)}function Sv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var kn=typeof Object.is=="function"?Object.is:Sv;function Qo(n,r){if(kn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!kn(n[d],r[d]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xf(n,r){var a=Vf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function Of(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Of(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Lf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function Sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Av(n){var r=Lf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=xf(a,m);var y=xf(a,c);d&&y&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(r),n.extend(y.node,y.offset)):(r.setEnd(y.node,y.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rv=p&&"documentMode"in document&&11>=document.documentMode,Vs=null,Ac=null,Yo=null,Rc=!1;function Mf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Vs==null||Vs!==Pr(c)||(c=Vs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Qo(Yo,c)||(Yo=c,c=Il(Ac,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Vs)))}function El(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Cc={},bf={};p&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function wl(n){if(Cc[n])return Cc[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in bf)return Cc[n]=r[a];return n}var Ff=wl("animationend"),Uf=wl("animationiteration"),jf=wl("animationstart"),zf=wl("transitionend"),Bf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Bf.set(n,r),u(r,[n])}for(var Pc=0;Pc<$f.length;Pc++){var kc=$f[Pc],Cv=kc.toLowerCase(),Pv=kc[0].toUpperCase()+kc.slice(1);Ur(Cv,"on"+Pv)}Ur(Ff,"onAnimationEnd"),Ur(Uf,"onAnimationIteration"),Ur(jf,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(zf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function qf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Xa(c,r,void 0,n),n.currentTarget=null}function Hf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var y=c.length-1;0<=y;y--){var T=c[y],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==m&&d.isPropagationStopped())break e;qf(d,T,F),m=C}else for(y=0;y<c.length;y++){if(T=c[y],C=T.instance,F=T.currentTarget,T=T.listener,C!==m&&d.isPropagationStopped())break e;qf(d,T,F),m=C}}}if(wn)throw n=Lo,wn=!1,Lo=null,n}function qe(n,r){var a=r[bc];a===void 0&&(a=r[bc]=new Set);var c=n+"__bubble";a.has(c)||(Wf(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),Wf(a,n,c,r)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Jo(n){if(!n[Tl]){n[Tl]=!0,s.forEach(function(a){a!=="selectionchange"&&(kv.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Tl]||(r[Tl]=!0,Nc("selectionchange",!1,r))}}function Wf(n,r,a,c){switch(Bo(r)){case 1:var d=Ge;break;case 4:d=Ec;break;default:d=zo}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Dc(n,r,a,c,d){var m=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var y=c.tag;if(y===3||y===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(y===4)for(y=c.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;y=y.return}for(;T!==null;){if(y=Li(T),y===null)return;if(C=y.tag,C===5||C===6){c=m=y;continue e}T=T.parentNode}}c=c.return}Oo(function(){var F=m,W=cs(a),K=[];e:{var q=Bf.get(n);if(q!==void 0){var Z=Ss,re=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ps;break;case"focusout":re="blur",Z=Ps;break;case"beforeblur":case"afterblur":Z=Ps;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Ff:case Uf:case jf:Z=cr;break;case zf:Z=Fe;break;case"scroll":Z=wc;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var se=(r&4)!==0,rt=!se&&n==="scroll",M=se?q!==null?q+"Capture":null:q;se=[];for(var k=F,b;k!==null;){b=k;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=nt(k,M),Y!=null&&se.push(Zo(k,Y,b)))),rt)break;k=k.return}0<se.length&&(q=new Z(q,re,null,a,W),K.push({event:q,listeners:se}))}}if(!(r&7)){e:{if(q=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",q&&a!==Ti&&(re=a.relatedTarget||a.fromElement)&&(Li(re)||re[hr]))break e;if((Z||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?Li(re):null,re!==null&&(rt=Tn(re),re!==rt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(se=Rs,Y="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Y="onPointerLeave",M="onPointerEnter",k="pointer"),rt=Z==null?q:Ms(Z),b=re==null?q:Ms(re),q=new se(Y,k+"leave",Z,a,W),q.target=rt,q.relatedTarget=b,Y=null,Li(W)===F&&(se=new se(M,k+"enter",re,a,W),se.target=b,se.relatedTarget=rt,Y=se),rt=Y,Z&&re)t:{for(se=Z,M=re,k=0,b=se;b;b=Os(b))k++;for(b=0,Y=M;Y;Y=Os(Y))b++;for(;0<k-b;)se=Os(se),k--;for(;0<b-k;)M=Os(M),b--;for(;k--;){if(se===M||M!==null&&se===M.alternate)break t;se=Os(se),M=Os(M)}se=null}else se=null;Z!==null&&Kf(K,q,Z,se,!1),re!==null&&rt!==null&&Kf(K,rt,re,se,!0)}}e:{if(q=F?Ms(F):window,Z=q.nodeName&&q.nodeName.toLowerCase(),Z==="select"||Z==="input"&&q.type==="file")var oe=vv;else if(Rf(q))if(Pf)oe=Iv;else{oe=wv;var he=Ev}else(Z=q.nodeName)&&Z.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=Tv);if(oe&&(oe=oe(n,F))){Cf(K,oe,a,W);break e}he&&he(n,q,F),n==="focusout"&&(he=q._wrapperState)&&he.controlled&&q.type==="number"&&as(q,"number",q.value)}switch(he=F?Ms(F):window,n){case"focusin":(Rf(he)||he.contentEditable==="true")&&(Vs=he,Ac=F,Yo=null);break;case"focusout":Yo=Ac=Vs=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Mf(K,a,W);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":Mf(K,a,W)}var de;if(st)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ds?Sf(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Oi&&a.locale!=="ko"&&(Ds||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ds&&(de=$o()):(nn=W,Ts="value"in nn?nn.value:nn.textContent,Ds=!0)),he=Il(F,pe),0<he.length&&(pe=new Wo(pe,n,null,a,W),K.push({event:pe,listeners:he}),de?pe.data=de:(de=Af(a),de!==null&&(pe.data=de)))),(de=rn?mv(n,a):gv(n,a))&&(F=Il(F,"onBeforeInput"),0<F.length&&(W=new Wo("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=de))}Hf(K,r)})}function Zo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Il(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(Zo(n,m,d)),m=nt(n,r),m!=null&&c.push(Zo(n,m,d))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kf(n,r,a,c,d){for(var m=r._reactName,y=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=nt(a,m),C!=null&&y.unshift(Zo(a,C,T))):d||(C=nt(a,m),C!=null&&y.push(Zo(a,C,T)))),a=a.return}y.length!==0&&n.push({event:r,listeners:y})}var Nv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Gf(n){return(typeof n=="string"?n:""+n).replace(Nv,`
`).replace(Dv,"")}function Sl(n,r,a){if(r=Gf(r),Gf(n)!==r&&a)throw Error(t(425))}function Al(){}var Vc=null,xc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(n){return Qf.resolve(null).then(n).catch(Ov)}:Lc;function Ov(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Yf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ls,ea="__reactProps$"+Ls,hr="__reactContainer$"+Ls,bc="__reactEvents$"+Ls,Lv="__reactListeners$"+Ls,Mv="__reactHandles$"+Ls;function Li(n){var r=n[Hn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[hr]||a[Hn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Yf(n);n!==null;){if(a=n[Hn])return a;n=Yf(n)}return r}n=a,a=n.parentNode}return null}function ta(n){return n=n[Hn]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[ea]||null}var Fc=[],bs=-1;function zr(n){return{current:n}}function He(n){0>bs||(n.current=Fc[bs],Fc[bs]=null,bs--)}function $e(n,r){bs++,Fc[bs]=n.current,n.current=r}var Br={},Vt=zr(Br),Wt=zr(!1),Mi=Br;function Fs(n,r){var a=n.type.contextTypes;if(!a)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=r[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Cl(){He(Wt),He(Vt)}function Xf(n,r,a){if(Vt.current!==Br)throw Error(t(168));$e(Vt,r),$e(Wt,a)}function Jf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Mi=Vt.current,$e(Vt,n),$e(Wt,Wt.current),!0}function Zf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Jf(n,r,Mi),c.__reactInternalMemoizedMergedChildContext=n,He(Wt),He(Vt),$e(Vt,n)):He(Wt),$e(Wt,a)}var dr=null,kl=!1,Uc=!1;function ep(n){dr===null?dr=[n]:dr.push(n)}function bv(n){kl=!0,ep(n)}function $r(){if(!Uc&&dr!==null){Uc=!0;var n=0,r=Pe;try{var a=dr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}dr=null,kl=!1}catch(d){throw dr!==null&&(dr=dr.slice(n+1)),_s(Ci,$r),d}finally{Pe=r,Uc=!1}}return null}var Us=[],js=0,Nl=null,Dl=0,pn=[],mn=0,bi=null,fr=1,pr="";function Fi(n,r){Us[js++]=Dl,Us[js++]=Nl,Nl=n,Dl=r}function tp(n,r,a){pn[mn++]=fr,pn[mn++]=pr,pn[mn++]=bi,bi=n;var c=fr;n=pr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var m=32-jt(r)+d;if(30<m){var y=d-d%5;m=(c&(1<<y)-1).toString(32),c>>=y,d-=y,fr=1<<32-jt(r)+d|a<<d|c,pr=m+n}else fr=1<<m|a<<d|c,pr=n}function jc(n){n.return!==null&&(Fi(n,1),tp(n,1,0))}function zc(n){for(;n===Nl;)Nl=Us[--js],Us[js]=null,Dl=Us[--js],Us[js]=null;for(;n===bi;)bi=pn[--mn],pn[mn]=null,pr=pn[--mn],pn[mn]=null,fr=pn[--mn],pn[mn]=null}var sn=null,on=null,Qe=!1,Nn=null;function np(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function rp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=bi!==null?{id:fr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Qe){var r=on;if(r){var a=r;if(!rp(n,r)){if(Bc(n))throw Error(t(418));r=jr(a.nextSibling);var c=sn;r&&rp(n,r)?np(c,a):(n.flags=n.flags&-4097|2,Qe=!1,sn=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,sn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Vl(n){if(n!==sn)return!1;if(!Qe)return ip(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=on)){if(Bc(n))throw sp(),Error(t(418));for(;r;)np(n,r),r=jr(r.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?jr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=on;n;)n=jr(n.nextSibling)}function zs(){on=sn=null,Qe=!1}function qc(n){Nn===null?Nn=[n]:Nn.push(n)}var Fv=Te.ReactCurrentBatchConfig;function na(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(y){var T=d.refs;y===null?delete T[m]:T[m]=y},r._stringRef=m,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function xl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function op(n){var r=n._init;return r(n._payload)}function ap(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Xr(M,k),M.index=0,M.sibling=null,M}function m(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function y(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,b,Y){return k===null||k.tag!==6?(k=Lh(b,M.mode,Y),k.return=M,k):(k=d(k,b),k.return=M,k)}function C(M,k,b,Y){var oe=b.type;return oe===N?W(M,k,b.props.children,Y,b.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Dt&&op(oe)===k.type)?(Y=d(k,b.props),Y.ref=na(M,k,b),Y.return=M,Y):(Y=ru(b.type,b.key,b.props,null,M.mode,Y),Y.ref=na(M,k,b),Y.return=M,Y)}function F(M,k,b,Y){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=Mh(b,M.mode,Y),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function W(M,k,b,Y,oe){return k===null||k.tag!==7?(k=Wi(b,M.mode,Y,oe),k.return=M,k):(k=d(k,b),k.return=M,k)}function K(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Lh(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ke:return b=ru(k.type,k.key,k.props,null,M.mode,b),b.ref=na(M,null,k),b.return=M,b;case Ae:return k=Mh(k,M.mode,b),k.return=M,k;case Dt:var Y=k._init;return K(M,Y(k._payload),b)}if(nr(k)||ce(k))return k=Wi(k,M.mode,b,null),k.return=M,k;xl(M,k)}return null}function q(M,k,b,Y){var oe=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:T(M,k,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return b.key===oe?C(M,k,b,Y):null;case Ae:return b.key===oe?F(M,k,b,Y):null;case Dt:return oe=b._init,q(M,k,oe(b._payload),Y)}if(nr(b)||ce(b))return oe!==null?null:W(M,k,b,Y,null);xl(M,b)}return null}function Z(M,k,b,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(k,M,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ke:return M=M.get(Y.key===null?b:Y.key)||null,C(k,M,Y,oe);case Ae:return M=M.get(Y.key===null?b:Y.key)||null,F(k,M,Y,oe);case Dt:var he=Y._init;return Z(M,k,b,he(Y._payload),oe)}if(nr(Y)||ce(Y))return M=M.get(b)||null,W(k,M,Y,oe,null);xl(k,Y)}return null}function re(M,k,b,Y){for(var oe=null,he=null,de=k,pe=k=0,Et=null;de!==null&&pe<b.length;pe++){de.index>pe?(Et=de,de=null):Et=de.sibling;var Oe=q(M,de,b[pe],Y);if(Oe===null){de===null&&(de=Et);break}n&&de&&Oe.alternate===null&&r(M,de),k=m(Oe,k,pe),he===null?oe=Oe:he.sibling=Oe,he=Oe,de=Et}if(pe===b.length)return a(M,de),Qe&&Fi(M,pe),oe;if(de===null){for(;pe<b.length;pe++)de=K(M,b[pe],Y),de!==null&&(k=m(de,k,pe),he===null?oe=de:he.sibling=de,he=de);return Qe&&Fi(M,pe),oe}for(de=c(M,de);pe<b.length;pe++)Et=Z(de,M,pe,b[pe],Y),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?pe:Et.key),k=m(Et,k,pe),he===null?oe=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(Jr){return r(M,Jr)}),Qe&&Fi(M,pe),oe}function se(M,k,b,Y){var oe=ce(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var he=oe=null,de=k,pe=k=0,Et=null,Oe=b.next();de!==null&&!Oe.done;pe++,Oe=b.next()){de.index>pe?(Et=de,de=null):Et=de.sibling;var Jr=q(M,de,Oe.value,Y);if(Jr===null){de===null&&(de=Et);break}n&&de&&Jr.alternate===null&&r(M,de),k=m(Jr,k,pe),he===null?oe=Jr:he.sibling=Jr,he=Jr,de=Et}if(Oe.done)return a(M,de),Qe&&Fi(M,pe),oe;if(de===null){for(;!Oe.done;pe++,Oe=b.next())Oe=K(M,Oe.value,Y),Oe!==null&&(k=m(Oe,k,pe),he===null?oe=Oe:he.sibling=Oe,he=Oe);return Qe&&Fi(M,pe),oe}for(de=c(M,de);!Oe.done;pe++,Oe=b.next())Oe=Z(de,M,pe,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&de.delete(Oe.key===null?pe:Oe.key),k=m(Oe,k,pe),he===null?oe=Oe:he.sibling=Oe,he=Oe);return n&&de.forEach(function(g0){return r(M,g0)}),Qe&&Fi(M,pe),oe}function rt(M,k,b,Y){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:e:{for(var oe=b.key,he=k;he!==null;){if(he.key===oe){if(oe=b.type,oe===N){if(he.tag===7){a(M,he.sibling),k=d(he,b.props.children),k.return=M,M=k;break e}}else if(he.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Dt&&op(oe)===he.type){a(M,he.sibling),k=d(he,b.props),k.ref=na(M,he,b),k.return=M,M=k;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===N?(k=Wi(b.props.children,M.mode,Y,b.key),k.return=M,M=k):(Y=ru(b.type,b.key,b.props,null,M.mode,Y),Y.ref=na(M,k,b),Y.return=M,M=Y)}return y(M);case Ae:e:{for(he=b.key;k!==null;){if(k.key===he)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=Mh(b,M.mode,Y),k.return=M,M=k}return y(M);case Dt:return he=b._init,rt(M,k,he(b._payload),Y)}if(nr(b))return re(M,k,b,Y);if(ce(b))return se(M,k,b,Y);xl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=Lh(b,M.mode,Y),k.return=M,M=k),y(M)):a(M,k)}return rt}var Bs=ap(!0),lp=ap(!1),Ol=zr(null),Ll=null,$s=null,Hc=null;function Wc(){Hc=$s=Ll=null}function Kc(n){var r=Ol.current;He(Ol),n._currentValue=r}function Gc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){Ll=n,Hc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Ll===null)throw Error(t(308));$s=n,Ll.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var Ui=null;function Qc(n){Ui===null?Ui=[n]:Ui.push(n)}function up(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Qc(r)):(a.next=d.next,d.next=a),r.interleaved=a,mr(n,c)}function mr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,xe&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,mr(n,a)}return d=c.interleaved,d===null?(r.next=r,Qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,mr(n,a)}function Ml(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function hp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var y={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=y:m=m.next=y,a=a.next}while(a!==null);m===null?d=m=r:m=m.next=r}else d=m=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function bl(n,r,a,c){var d=n.updateQueue;qr=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,y===null?m=F:y.next=F,y=C;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==y&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=C))}if(m!==null){var K=d.baseState;y=0,W=F=C=null,T=m;do{var q=T.lane,Z=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,se=T;switch(q=r,Z=a,se.tag){case 1:if(re=se.payload,typeof re=="function"){K=re.call(Z,K,q);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,q=typeof re=="function"?re.call(Z,K,q):re,q==null)break e;K=ee({},K,q);break e;case 2:qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else Z={eventTime:Z,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=Z,C=K):W=W.next=Z,y|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(C=K),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do y|=d.lane,d=d.next;while(d!==r)}else m===null&&(d.shared.lanes=0);Bi|=y,n.lanes=y,n.memoizedState=K}}function dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ra={},Wn=zr(ra),ia=zr(ra),sa=zr(ra);function ji(n){if(n===ra)throw Error(t(174));return n}function Xc(n,r){switch($e(sa,r),$e(ia,n),$e(Wn,ra),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ct(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ct(r,n)}He(Wn),$e(Wn,r)}function Hs(){He(Wn),He(ia),He(sa)}function fp(n){ji(sa.current);var r=ji(Wn.current),a=ct(r,n.type);r!==a&&($e(ia,n),$e(Wn,a))}function Jc(n){ia.current===n&&(He(Wn),He(ia))}var Ye=zr(0);function Fl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Ul=Te.ReactCurrentDispatcher,th=Te.ReactCurrentBatchConfig,zi=0,Xe=null,dt=null,yt=null,jl=!1,oa=!1,aa=0,Uv=0;function xt(){throw Error(t(321))}function nh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!kn(n[a],r[a]))return!1;return!0}function rh(n,r,a,c,d,m){if(zi=m,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ul.current=n===null||n.memoizedState===null?$v:qv,n=a(c,d),oa){m=0;do{if(oa=!1,aa=0,25<=m)throw Error(t(301));m+=1,yt=dt=null,r.updateQueue=null,Ul.current=Hv,n=a(c,d)}while(oa)}if(Ul.current=$l,r=dt!==null&&dt.next!==null,zi=0,yt=dt=Xe=null,jl=!1,r)throw Error(t(300));return n}function ih(){var n=aa!==0;return aa=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function _n(){if(dt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function la(n,r){return typeof r=="function"?r(n):r}function sh(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=y=null,C=null,F=m;do{var W=F.lane;if((zi&W)===W)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=K,y=c):C=C.next=K,Xe.lanes|=W,Bi|=W}F=F.next}while(F!==null&&F!==m);C===null?y=c:C.next=T,kn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=y,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Xe.lanes|=m,Bi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function oh(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=r.memoizedState;if(d!==null){a.pending=null;var y=d=d.next;do m=n(m,y.action),y=y.next;while(y!==d);kn(m,r.memoizedState)||(Gt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function pp(){}function mp(n,r){var a=Xe,c=_n(),d=r(),m=!kn(c.memoizedState,d);if(m&&(c.memoizedState=d,Gt=!0),c=c.queue,ah(yp.bind(null,a,c,n),[n]),c.getSnapshot!==r||m||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ua(9,_p.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));zi&30||gp(a,r,d)}return d}function gp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function _p(n,r,a,c){r.value=a,r.getSnapshot=c,vp(r)&&Ep(n)}function yp(n,r,a){return a(function(){vp(r)&&Ep(n)})}function vp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!kn(n,a)}catch{return!0}}function Ep(n){var r=mr(n,1);r!==null&&On(r,n,1,-1)}function wp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},r.queue=n,n=n.dispatch=Bv.bind(null,Xe,n),[r.memoizedState,n]}function ua(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Tp(){return _n().memoizedState}function zl(n,r,a,c){var d=Kn();Xe.flags|=n,d.memoizedState=ua(1|r,a,void 0,c===void 0?null:c)}function Bl(n,r,a,c){var d=_n();c=c===void 0?null:c;var m=void 0;if(dt!==null){var y=dt.memoizedState;if(m=y.destroy,c!==null&&nh(c,y.deps)){d.memoizedState=ua(r,a,m,c);return}}Xe.flags|=n,d.memoizedState=ua(1|r,a,m,c)}function Ip(n,r){return zl(8390656,8,n,r)}function ah(n,r){return Bl(2048,8,n,r)}function Sp(n,r){return Bl(4,2,n,r)}function Ap(n,r){return Bl(4,4,n,r)}function Rp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Cp(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4,4,Rp.bind(null,r,n),a)}function lh(){}function Pp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function kp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Np(n,r,a){return zi&21?(kn(a,r)||(a=Ni(),Xe.lanes|=a,Bi|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function jv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=th.transition;th.transition={};try{n(!1),r()}finally{Pe=a,th.transition=c}}function Dp(){return _n().memoizedState}function zv(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Vp(n))xp(r,a);else if(a=up(n,r,a,c),a!==null){var d=$t();On(a,n,c,d),Op(a,r,c)}}function Bv(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vp(n))xp(r,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var y=r.lastRenderedState,T=m(y,a);if(d.hasEagerState=!0,d.eagerState=T,kn(T,y)){var C=r.interleaved;C===null?(d.next=d,Qc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=up(n,r,d,c),a!==null&&(d=$t(),On(a,n,c,d),Op(a,r,c))}}function Vp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function xp(n,r){oa=jl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Op(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var $l={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},$v={readContext:gn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:Ip,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,zl(4194308,4,Rp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return zl(4194308,4,n,r)},useInsertionEffect:function(n,r){return zl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=zv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:wp,useDebugValue:lh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=wp(!1),r=n[0];return n=jv.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Kn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));zi&30||gp(c,r,a)}d.memoizedState=a;var m={value:a,getSnapshot:r};return d.queue=m,Ip(yp.bind(null,c,m,n),[n]),c.flags|=2048,ua(9,_p.bind(null,c,m,a,r),void 0,null),a},useId:function(){var n=Kn(),r=vt.identifierPrefix;if(Qe){var a=pr,c=fr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=aa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Uv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},qv={readContext:gn,useCallback:Pp,useContext:gn,useEffect:ah,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:kp,useReducer:sh,useRef:Tp,useState:function(){return sh(la)},useDebugValue:lh,useDeferredValue:function(n){var r=_n();return Np(r,dt.memoizedState,n)},useTransition:function(){var n=sh(la)[0],r=_n().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Dp,unstable_isNewReconciler:!1},Hv={readContext:gn,useCallback:Pp,useContext:gn,useEffect:ah,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:kp,useReducer:oh,useRef:Tp,useState:function(){return oh(la)},useDebugValue:lh,useDeferredValue:function(n){var r=_n();return dt===null?r.memoizedState=n:Np(r,dt.memoizedState,n)},useTransition:function(){var n=oh(la)[0],r=_n().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Dp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function uh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Qr(n),m=gr(c,d);m.payload=r,a!=null&&(m.callback=a),r=Hr(n,m,d),r!==null&&(On(r,n,d,c),Ml(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Qr(n),m=gr(c,d);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Hr(n,m,d),r!==null&&(On(r,n,d,c),Ml(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=Qr(n),d=gr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(On(r,n,c,a),Ml(r,n,c))}};function Lp(n,r,a,c,d,m,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,y):r.prototype&&r.prototype.isPureReactComponent?!Qo(a,c)||!Qo(d,m):!0}function Mp(n,r,a){var c=!1,d=Br,m=r.contextType;return typeof m=="object"&&m!==null?m=gn(m):(d=Kt(r)?Mi:Vt.current,c=r.contextTypes,m=(c=c!=null)?Fs(n,d):Br),r=new r(a,m),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ql,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),r}function bp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ql.enqueueReplaceState(r,r.state,null)}function ch(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var m=r.contextType;typeof m=="object"&&m!==null?d.context=gn(m):(m=Kt(r)?Mi:Vt.current,d.context=Fs(n,m)),d.state=n.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(uh(n,r,m,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ql.enqueueReplaceState(d,d.state,null),bl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:r,stack:d,digest:null}}function hh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function dh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,r,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Xl||(Xl=!0,Ch=c),dh(n,r)},a}function Up(n,r,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){dh(n,r)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){dh(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})}),a}function jp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Wv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=o0.bind(null,n,r,a),r.then(n,n))}function zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Bp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=gr(-1,1),r.tag=2,Hr(a,r,1))),a.lanes|=1),n)}var Kv=Te.ReactCurrentOwner,Gt=!1;function Bt(n,r,a,c){r.child=n===null?lp(r,null,a,c):Bs(r,n.child,a,c)}function $p(n,r,a,c,d){a=a.render;var m=r.ref;return qs(r,d),c=rh(n,r,a,c,m,d),a=ih(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&a&&jc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function qp(n,r,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Oh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,Hp(n,r,m,c,d)):(n=ru(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!(n.lanes&d)){var y=m.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(y,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Xr(m,c),n.ref=r.ref,n.return=r,r.child=n}function Hp(n,r,a,c,d){if(n!==null){var m=n.memoizedProps;if(Qo(m,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return fh(n,r,a,c,d)}function Wp(n,r,a){var c=r.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Gs,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Gs,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,$e(Gs,an),an|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,$e(Gs,an),an|=c;return Bt(n,r,d,a),r.child}function Kp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function fh(n,r,a,c,d){var m=Kt(a)?Mi:Vt.current;return m=Fs(r,m),qs(r,d),a=rh(n,r,a,c,m,d),c=ih(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&c&&jc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function Gp(n,r,a,c,d){if(Kt(a)){var m=!0;Pl(r)}else m=!1;if(qs(r,d),r.stateNode===null)Wl(n,r),Mp(r,a,c),ch(r,a,c,d),c=!0;else if(n===null){var y=r.stateNode,T=r.memoizedProps;y.props=T;var C=y.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Kt(a)?Mi:Vt.current,F=Fs(r,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof y.getSnapshotBeforeUpdate=="function";K||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(T!==c||C!==F)&&bp(r,y,c,F),qr=!1;var q=r.memoizedState;y.state=q,bl(r,c,y,d),C=r.memoizedState,T!==c||q!==C||Wt.current||qr?(typeof W=="function"&&(uh(r,a,W,c),C=r.memoizedState),(T=qr||Lp(r,a,T,c,q,C,F))?(K||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),y.props=c,y.state=C,y.context=F,c=T):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{y=r.stateNode,cp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Dn(r.type,T),y.props=F,K=r.pendingProps,q=y.context,C=a.contextType,typeof C=="object"&&C!==null?C=gn(C):(C=Kt(a)?Mi:Vt.current,C=Fs(r,C));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(T!==K||q!==C)&&bp(r,y,c,C),qr=!1,q=r.memoizedState,y.state=q,bl(r,c,y,d);var re=r.memoizedState;T!==K||q!==re||Wt.current||qr?(typeof Z=="function"&&(uh(r,a,Z,c),re=r.memoizedState),(F=qr||Lp(r,a,F,c,q,re,C)||!1)?(W||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(c,re,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(c,re,C)),typeof y.componentDidUpdate=="function"&&(r.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof y.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),y.props=c,y.state=re,y.context=C,c=F):(typeof y.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ph(n,r,a,c,m,d)}function ph(n,r,a,c,d,m){Kp(n,r);var y=(r.flags&128)!==0;if(!c&&!y)return d&&Zf(r,a,!1),_r(n,r,m);c=r.stateNode,Kv.current=r;var T=y&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&y?(r.child=Bs(r,n.child,null,m),r.child=Bs(r,null,T,m)):Bt(n,r,T,m),r.memoizedState=c.state,d&&Zf(r,a,!0),r.child}function Qp(n){var r=n.stateNode;r.pendingContext?Xf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xf(n,r.context,!1),Xc(n,r.containerInfo)}function Yp(n,r,a,c,d){return zs(),qc(d),r.flags|=256,Bt(n,r,a,c),r.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,a){var c=r.pendingProps,d=Ye.current,m=!1,y=(r.flags&128)!==0,T;if((T=y)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(y=c.children,n=c.fallback,m?(c=r.mode,m=r.child,y={mode:"hidden",children:y},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=y):m=iu(y,c,0,null),n=Wi(n,c,a,null),m.return=r,n.return=r,m.sibling=n,r.child=m,r.child.memoizedState=gh(a),r.memoizedState=mh,n):_h(r,y));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Gv(n,r,y,c,T,d,a);if(m){m=c.fallback,y=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(y&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Xr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=Xr(T,m):(m=Wi(m,y,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,y=n.child.memoizedState,y=y===null?gh(a):{baseLanes:y.baseLanes|a,cachePool:null,transitions:y.transitions},m.memoizedState=y,m.childLanes=n.childLanes&~a,r.memoizedState=mh,c}return m=n.child,n=m.sibling,c=Xr(m,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function _h(n,r){return r=iu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Hl(n,r,a,c){return c!==null&&qc(c),Bs(r,n.child,null,a),n=_h(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Gv(n,r,a,c,d,m,y){if(a)return r.flags&256?(r.flags&=-257,c=hh(Error(t(422))),Hl(n,r,y,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(m=c.fallback,d=r.mode,c=iu({mode:"visible",children:c.children},d,0,null),m=Wi(m,d,y,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,r.mode&1&&Bs(r,n.child,null,y),r.child.memoizedState=gh(y),r.memoizedState=mh,m);if(!(r.mode&1))return Hl(n,r,y,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=hh(m,c,void 0),Hl(n,r,y,c)}if(T=(y&n.childLanes)!==0,Gt||T){if(c=vt,c!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|y)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,mr(n,d),On(c,n,d,-1))}return xh(),c=hh(Error(t(421))),Hl(n,r,y,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=a0.bind(null,n),d._reactRetry=r,null):(n=m.treeContext,on=jr(d.nextSibling),sn=r,Qe=!0,Nn=null,n!==null&&(pn[mn++]=fr,pn[mn++]=pr,pn[mn++]=bi,fr=n.id,pr=n.overflow,bi=r),r=_h(r,c.children),r.flags|=4096,r)}function Jp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Gc(n.return,r,a)}function yh(n,r,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Zp(n,r,a){var c=r.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jp(n,a,r);else if(n.tag===19)Jp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Fl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),yh(r,!1,d,a,m);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Fl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}yh(r,!0,a,null,m);break;case"together":yh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Wl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Bi|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Qv(n,r,a){switch(r.tag){case 3:Qp(r),zs();break;case 5:fp(r);break;case 1:Kt(r.type)&&Pl(r);break;case 4:Xc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Ol,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?Xp(n,r,a):($e(Ye,Ye.current&1),n=_r(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Zp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Wp(n,r,a)}return _r(n,r,a)}var em,vh,tm,nm;em=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,ji(Wn.current);var m=null;switch(a){case"input":d=vi(n,d),c=vi(n,c),m=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":d=So(n,d),c=So(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Al)}No(a,c);var y;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(y in T)T.hasOwnProperty(y)&&(a||(a={}),a[y]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(y in T)!T.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(a||(a={}),a[y]="");for(y in C)C.hasOwnProperty(y)&&T[y]!==C[y]&&(a||(a={}),a[y]=C[y])}else a||(m||(m=[]),m.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(m=m||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&qe("scroll",n),m||T===C||(m=[])):(m=m||[]).push(F,C))}a&&(m=m||[]).push("style",a);var F=m;(r.updateQueue=F)&&(r.flags|=4)}},nm=function(n,r,a,c){a!==c&&(r.flags|=4)};function ca(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Yv(n,r,a){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Kt(r.type)&&Cl(),Ot(r),null;case 3:return c=r.stateNode,Hs(),He(Wt),He(Vt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Nn!==null&&(Nh(Nn),Nn=null))),vh(n,r),Ot(r),null;case 5:Jc(r);var d=ji(sa.current);if(a=r.type,n!==null&&r.stateNode!=null)tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=ji(Wn.current),Vl(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[Hn]=r,c[ea]=m,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<Xo.length;d++)qe(Xo[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":os(c,m),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qe("invalid",c);break;case"textarea":ls(c,m),qe("invalid",c)}No(a,m),d=null;for(var y in m)if(m.hasOwnProperty(y)){var T=m[y];y==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(y)&&T!=null&&y==="onScroll"&&qe("scroll",c)}switch(a){case"input":tr(c),Ya(c,m,!0);break;case"textarea":tr(c),Ao(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Al)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=y.createElement(a,{is:c.is}):(n=y.createElement(a),a==="select"&&(y=n,c.multiple?y.multiple=!0:c.size&&(y.size=c.size))):n=y.createElementNS(n,a),n[Hn]=r,n[ea]=c,em(n,r,!1,!1),r.stateNode=n;e:{switch(y=Do(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Xo.length;d++)qe(Xo[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":os(n,c),d=vi(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),qe("invalid",n);break;case"textarea":ls(n,c),d=So(n,c),qe("invalid",n);break;default:d=c}No(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var C=T[m];m==="style"?Po(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ro(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&kr(n,C):typeof C=="number"&&kr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&qe("scroll",n):C!=null&&ye(n,m,C,y))}switch(a){case"input":tr(n),Ya(n,c,!1);break;case"textarea":tr(n),Ao(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?rr(n,!!c.multiple,m,!1):c.defaultValue!=null&&rr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Al)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)nm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=ji(sa.current),ji(Wn.current),Vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Hn]=r,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Sl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(c.nodeValue,a,(n.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hn]=r,r.stateNode=c}return Ot(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&on!==null&&r.mode&1&&!(r.flags&128))sp(),zs(),r.flags|=98560,m=!1;else if(m=Vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Hn]=r}else zs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ot(r),m=!1}else Nn!==null&&(Nh(Nn),Nn=null),m=!0;if(!m)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?ft===0&&(ft=3):xh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Hs(),vh(n,r),n===null&&Jo(r.stateNode.containerInfo),Ot(r),null;case 10:return Kc(r.type._context),Ot(r),null;case 17:return Kt(r.type)&&Cl(),Ot(r),null;case 19:if(He(Ye),m=r.memoizedState,m===null)return Ot(r),null;if(c=(r.flags&128)!==0,y=m.rendering,y===null)if(c)ca(m,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(y=Fl(n),y!==null){for(r.flags|=128,ca(m,!1),c=y.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,n=c,m.flags&=14680066,y=m.alternate,y===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=y.childLanes,m.lanes=y.lanes,m.child=y.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=y.memoizedProps,m.memoizedState=y.memoizedState,m.updateQueue=y.updateQueue,m.type=y.type,n=y.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}m.tail!==null&&Be()>Qs&&(r.flags|=128,c=!0,ca(m,!1),r.lanes=4194304)}else{if(!c)if(n=Fl(y),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!y.alternate&&!Qe)return Ot(r),null}else 2*Be()-m.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,ca(m,!1),r.lanes=4194304);m.isBackwards?(y.sibling=r.child,r.child=y):(a=m.last,a!==null?a.sibling=y:r.child=y,m.last=y)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Be(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Vh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?an&1073741824&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Xv(n,r){switch(zc(r),r.tag){case 1:return Kt(r.type)&&Cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),He(Wt),He(Vt),eh(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Jc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));zs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return Hs(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Kl=!1,Lt=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var rm=!1;function Zv(n,r){if(Vc=br,n=Lf(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var y=0,T=-1,C=-1,F=0,W=0,K=n,q=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=y+d),K!==m||c!==0&&K.nodeType!==3||(C=y+c),K.nodeType===3&&(y+=K.nodeValue.length),(Z=K.firstChild)!==null;)q=K,K=Z;for(;;){if(K===n)break t;if(q===a&&++F===d&&(T=y),q===m&&++W===c&&(C=y),(Z=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=Z}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},br=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,rt=re.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:Dn(r.type,se),rt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){Ze(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=rm,rm=!1,re}function ha(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Eh(r,a,m)}d=d.next}while(d!==c)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function wh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function im(n){var r=n.alternate;r!==null&&(n.alternate=null,im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Hn],delete r[ea],delete r[bc],delete r[Lv],delete r[Mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Al));else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,a),n=n.sibling;n!==null;)Th(n,r,a),n=n.sibling}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}var St=null,Vn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)am(n,r,a),a=a.sibling}function am(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Lt||Ks(a,r);case 6:var c=St,d=Vn;St=null,Wr(n,r,a),St=c,Vn=d,St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Cn(n)):Mc(St,a.stateNode));break;case 4:c=St,d=Vn,St=a.stateNode.containerInfo,Vn=!0,Wr(n,r,a),St=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,y=m.destroy;m=m.tag,y!==void 0&&(m&2||m&4)&&Eh(a,r,y),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Lt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Wr(n,r,a),Lt=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function lm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Jv),r.forEach(function(c){var d=l0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,y=r,T=y;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Vn=!1;break e;case 3:St=T.stateNode.containerInfo,Vn=!0;break e;case 4:St=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(St===null)throw Error(t(160));am(m,y,d),St=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)um(r,n),r=r.sibling}function um(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(r,n),Gn(n),c&4){try{ha(3,n,n.return),Gl(3,n)}catch(se){Ze(n,n.return,se)}try{ha(5,n,n.return)}catch(se){Ze(n,n.return,se)}}break;case 1:xn(r,n),Gn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(xn(r,n),Gn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{kr(d,"")}catch(se){Ze(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,y=a!==null?a.memoizedProps:m,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&To(d,m),Do(T,y);var F=Do(T,m);for(y=0;y<C.length;y+=2){var W=C[y],K=C[y+1];W==="style"?Po(d,K):W==="dangerouslySetInnerHTML"?Ro(d,K):W==="children"?kr(d,K):ye(d,W,K,F)}switch(T){case"input":Io(d,m);break;case"textarea":us(d,m);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Z=m.value;Z!=null?rr(d,!!m.multiple,Z,!1):q!==!!m.multiple&&(m.defaultValue!=null?rr(d,!!m.multiple,m.defaultValue,!0):rr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ea]=m}catch(se){Ze(n,n.return,se)}}break;case 6:if(xn(r,n),Gn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(se){Ze(n,n.return,se)}}break;case 3:if(xn(r,n),Gn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(se){Ze(n,n.return,se)}break;case 4:xn(r,n),Gn(n);break;case 13:xn(r,n),Gn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Rh=Be())),c&4&&lm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||W,xn(r,n),Lt=F):xn(r,n),Gn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&n.mode&1)for(ne=n,W=n.child;W!==null;){for(K=ne=W;ne!==null;){switch(q=ne,Z=q.child,q.tag){case 0:case 11:case 14:case 15:ha(4,q,q.return);break;case 1:Ks(q,q.return);var re=q.stateNode;if(typeof re.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(se){Ze(c,a,se)}}break;case 5:Ks(q,q.return);break;case 22:if(q.memoizedState!==null){dm(K);continue}}Z!==null?(Z.return=q,ne=Z):dm(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=K.stateNode,C=K.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Co("display",y))}catch(se){Ze(n,n.return,se)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(se){Ze(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:xn(r,n),Gn(n),c&4&&lm(n);break;case 21:break;default:xn(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(kr(d,""),c.flags&=-33);var m=om(n);Ih(n,m,d);break;case 3:case 4:var y=c.stateNode.containerInfo,T=om(n);Th(n,T,y);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function e0(n,r,a){ne=n,cm(n)}function cm(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,m=d.child;if(d.tag===22&&c){var y=d.memoizedState!==null||Kl;if(!y){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Lt;T=Kl;var F=Lt;if(Kl=y,(Lt=C)&&!F)for(ne=d;ne!==null;)y=ne,C=y.child,y.tag===22&&y.memoizedState!==null?fm(d):C!==null?(C.return=y,ne=C):fm(d);for(;m!==null;)ne=m,cm(m),m=m.sibling;ne=d,Kl=T,Lt=F}hm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,ne=m):hm(n)}}function hm(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Lt||Gl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&dp(r,m,c);break;case 3:var y=r.updateQueue;if(y!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}dp(r,y,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Cn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&wh(r)}catch(q){Ze(r,r.return,q)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function dm(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function fm(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Gl(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var m=r.return;try{wh(r)}catch(C){Ze(r,m,C)}break;case 5:var y=r.return;try{wh(r)}catch(C){Ze(r,y,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var t0=Math.ceil,Ql=Te.ReactCurrentDispatcher,Sh=Te.ReactCurrentOwner,yn=Te.ReactCurrentBatchConfig,xe=0,vt=null,ot=null,At=0,an=0,Gs=zr(0),ft=0,da=null,Bi=0,Yl=0,Ah=0,fa=null,Qt=null,Rh=0,Qs=1/0,yr=null,Xl=!1,Ch=null,Kr=null,Jl=!1,Gr=null,Zl=0,pa=0,Ph=null,eu=-1,tu=0;function $t(){return xe&6?Be():eu!==-1?eu:eu=Be()}function Qr(n){return n.mode&1?xe&2&&At!==0?At&-At:Fv.transition!==null?(tu===0&&(tu=Ni()),tu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Bo(n.type)),n):1}function On(n,r,a,c){if(50<pa)throw pa=0,Ph=null,Error(t(185));xr(n,a,c),(!(xe&2)||n!==vt)&&(n===vt&&(!(xe&2)&&(Yl|=a),ft===4&&Yr(n,At)),Yt(n,c),a===1&&xe===0&&!(r.mode&1)&&(Qs=Be()+500,kl&&$r()))}function Yt(n,r){var a=n.callbackNode;or(n,r);var c=ki(n,n===vt?At:0);if(c===0)a!==null&&bo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&bo(a),r===1)n.tag===0?bv(mm.bind(null,n)):ep(mm.bind(null,n)),xv(function(){!(xe&6)&&$r()}),a=null;else{switch(Lr(c)){case 1:a=Ci;break;case 4:a=Nr;break;case 16:a=hn;break;case 536870912:a=tl;break;default:a=hn}a=Im(a,pm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function pm(n,r){if(eu=-1,tu=0,xe&6)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=ki(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=nu(n,c);else{r=c;var d=xe;xe|=2;var m=_m();(vt!==n||At!==r)&&(yr=null,Qs=Be()+500,qi(n,r));do try{i0();break}catch(T){gm(n,T)}while(!0);Wc(),Ql.current=m,xe=d,ot!==null?r=0:(vt=null,At=0,r=ft)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=kh(n,d))),r===1)throw a=da,qi(n,0),Yr(n,c),Yt(n,Be()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,!(c&30)&&!n0(d)&&(r=nu(n,c),r===2&&(m=tn(n),m!==0&&(c=m,r=kh(n,m))),r===1))throw a=da,qi(n,0),Yr(n,c),Yt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Hi(n,Qt,yr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=Rh+500-Be(),10<r)){if(ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(Hi.bind(null,n,Qt,yr),r);break}Hi(n,Qt,yr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var y=31-jt(c);m=1<<y,y=r[y],y>d&&(d=y),c&=~m}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*t0(c/1960))-c,10<c){n.timeoutHandle=Lc(Hi.bind(null,n,Qt,yr),c);break}Hi(n,Qt,yr);break;case 5:Hi(n,Qt,yr);break;default:throw Error(t(329))}}}return Yt(n,Be()),n.callbackNode===a?pm.bind(null,n):null}function kh(n,r){var a=fa;return n.current.memoizedState.isDehydrated&&(qi(n,r).flags|=256),n=nu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Nh(r)),n}function Nh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function n0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!kn(m(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~Ah,r&=~Yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function mm(n){if(xe&6)throw Error(t(327));Ys();var r=ki(n,0);if(!(r&1))return Yt(n,Be()),null;var a=nu(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=kh(n,c))}if(a===1)throw a=da,qi(n,0),Yr(n,r),Yt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Hi(n,Qt,yr),Yt(n,Be()),null}function Dh(n,r){var a=xe;xe|=1;try{return n(r)}finally{xe=a,xe===0&&(Qs=Be()+500,kl&&$r())}}function $i(n){Gr!==null&&Gr.tag===0&&!(xe&6)&&Ys();var r=xe;xe|=1;var a=yn.transition,c=Pe;try{if(yn.transition=null,Pe=1,n)return n()}finally{Pe=c,yn.transition=a,xe=r,!(xe&6)&&$r()}}function Vh(){an=Gs.current,He(Gs)}function qi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Vv(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Hs(),He(Wt),He(Vt),eh();break;case 5:Jc(c);break;case 4:Hs();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:Kc(c.type._context);break;case 22:case 23:Vh()}a=a.return}if(vt=n,ot=n=Xr(n.current,null),At=an=r,ft=0,da=null,Ah=Yl=Bi=0,Qt=fa=null,Ui!==null){for(r=0;r<Ui.length;r++)if(a=Ui[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var y=m.next;m.next=d,c.next=y}a.pending=c}Ui=null}return n}function gm(n,r){do{var a=ot;try{if(Wc(),Ul.current=$l,jl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}jl=!1}if(zi=0,yt=dt=Xe=null,oa=!1,aa=0,Sh.current=null,a===null||a.return===null){ft=1,da=r,ot=null;break}e:{var m=n,y=a.return,T=a,C=r;if(r=At,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,W=T,K=W.tag;if(!(W.mode&1)&&(K===0||K===11||K===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=zp(y);if(Z!==null){Z.flags&=-257,Bp(Z,y,T,m,r),Z.mode&1&&jp(m,F,r),r=Z,C=F;var re=r.updateQueue;if(re===null){var se=new Set;se.add(C),r.updateQueue=se}else re.add(C);break e}else{if(!(r&1)){jp(m,F,r),xh();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var rt=zp(y);if(rt!==null){!(rt.flags&65536)&&(rt.flags|=256),Bp(rt,y,T,m,r),qc(Ws(C,T));break e}}m=C=Ws(C,T),ft!==4&&(ft=2),fa===null?fa=[m]:fa.push(m),m=y;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var M=Fp(m,C,r);hp(m,M);break e;case 1:T=C;var k=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){m.flags|=65536,r&=-r,m.lanes|=r;var Y=Up(m,T,r);hp(m,Y);break e}}m=m.return}while(m!==null)}vm(a)}catch(oe){r=oe,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function _m(){var n=Ql.current;return Ql.current=$l,n===null?$l:n}function xh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(Bi&268435455)&&!(Yl&268435455)||Yr(vt,At)}function nu(n,r){var a=xe;xe|=2;var c=_m();(vt!==n||At!==r)&&(yr=null,qi(n,r));do try{r0();break}catch(d){gm(n,d)}while(!0);if(Wc(),xe=a,Ql.current=c,ot!==null)throw Error(t(261));return vt=null,At=0,ft}function r0(){for(;ot!==null;)ym(ot)}function i0(){for(;ot!==null&&!Za();)ym(ot)}function ym(n){var r=Tm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?vm(n):ot=r,Sh.current=null}function vm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=Xv(a,r),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,ot=null;return}}else if(a=Yv(a,r,an),a!==null){ot=a;return}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);ft===0&&(ft=5)}function Hi(n,r,a){var c=Pe,d=yn.transition;try{yn.transition=null,Pe=1,s0(n,r,a,c)}finally{yn.transition=d,Pe=c}return null}function s0(n,r,a,c){do Ys();while(Gr!==null);if(xe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(n,m),n===vt&&(ot=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Jl||(Jl=!0,Im(hn,function(){return Ys(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=yn.transition,yn.transition=null;var y=Pe;Pe=1;var T=xe;xe|=4,Sh.current=null,Zv(n,a),um(a,n),Av(xc),br=!!Vc,xc=Vc=null,n.current=a,e0(a),gc(),xe=T,Pe=y,yn.transition=m}else n.current=a;if(Jl&&(Jl=!1,Gr=n,Zl=d),m=n.pendingLanes,m===0&&(Kr=null),nl(a.stateNode),Yt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xl)throw Xl=!1,n=Ch,Ch=null,n;return Zl&1&&n.tag!==0&&Ys(),m=n.pendingLanes,m&1?n===Ph?pa++:(pa=0,Ph=n):pa=0,$r(),null}function Ys(){if(Gr!==null){var n=Lr(Zl),r=yn.transition,a=Pe;try{if(yn.transition=null,Pe=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,Zl=0,xe&6)throw Error(t(331));var d=xe;for(xe|=4,ne=n.current;ne!==null;){var m=ne,y=m.child;if(ne.flags&16){var T=m.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(ne=F;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:ha(8,W,m)}var K=W.child;if(K!==null)K.return=W,ne=K;else for(;ne!==null;){W=ne;var q=W.sibling,Z=W.return;if(im(W),W===F){ne=null;break}if(q!==null){q.return=Z,ne=q;break}ne=Z}}}var re=m.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var rt=se.sibling;se.sibling=null,se=rt}while(se!==null)}}ne=m}}if(m.subtreeFlags&2064&&y!==null)y.return=m,ne=y;else e:for(;ne!==null;){if(m=ne,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ha(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ne=M;break e}ne=m.return}}var k=n.current;for(ne=k;ne!==null;){y=ne;var b=y.child;if(y.subtreeFlags&2064&&b!==null)b.return=y,ne=b;else e:for(y=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Gl(9,T)}}catch(oe){Ze(T,T.return,oe)}if(T===y){ne=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ne=Y;break e}ne=T.return}}if(xe=d,$r(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Pi,n)}catch{}c=!0}return c}finally{Pe=a,yn.transition=r}}return!1}function Em(n,r,a){r=Ws(a,r),r=Fp(n,r,1),n=Hr(n,r,1),r=$t(),n!==null&&(xr(n,1,r),Yt(n,r))}function Ze(n,r,a){if(n.tag===3)Em(n,n,a);else for(;r!==null;){if(r.tag===3){Em(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=Ws(a,n),n=Up(r,n,1),r=Hr(r,n,1),n=$t(),r!==null&&(xr(r,1,n),Yt(r,n));break}}r=r.return}}function o0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>Be()-Rh?qi(n,0):Ah|=a),Yt(n,r)}function wm(n,r){r===0&&(n.mode&1?(r=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):r=1);var a=$t();n=mr(n,r),n!==null&&(xr(n,r,a),Yt(n,a))}function a0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),wm(n,a)}function l0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),wm(n,a)}var Tm;Tm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Gt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Gt=!1,Qv(n,r,a);Gt=!!(n.flags&131072)}else Gt=!1,Qe&&r.flags&1048576&&tp(r,Dl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Wl(n,r),n=r.pendingProps;var d=Fs(r,Vt.current);qs(r,a),d=rh(null,r,c,n,d,a);var m=ih();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(m=!0,Pl(r)):m=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=ql,r.stateNode=d,d._reactInternals=r,ch(r,c,n,a),r=ph(null,r,c,!0,m,a)):(r.tag=0,Qe&&m&&jc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Wl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=c0(c),n=Dn(c,n),d){case 0:r=fh(null,r,c,n,a);break e;case 1:r=Gp(null,r,c,n,a);break e;case 11:r=$p(null,r,c,n,a);break e;case 14:r=qp(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),fh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Gp(n,r,c,d,a);case 3:e:{if(Qp(r),n===null)throw Error(t(387));c=r.pendingProps,m=r.memoizedState,d=m.element,cp(n,r),bl(r,c,null,a);var y=r.memoizedState;if(c=y.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){d=Ws(Error(t(423)),r),r=Yp(n,r,c,a,d);break e}else if(c!==d){d=Ws(Error(t(424)),r),r=Yp(n,r,c,a,d);break e}else for(on=jr(r.stateNode.containerInfo.firstChild),sn=r,Qe=!0,Nn=null,a=lp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){r=_r(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return fp(r),n===null&&$c(r),c=r.type,d=r.pendingProps,m=n!==null?n.memoizedProps:null,y=d.children,Oc(c,d)?y=null:m!==null&&Oc(c,m)&&(r.flags|=32),Kp(n,r),Bt(n,r,y,a),r.child;case 6:return n===null&&$c(r),null;case 13:return Xp(n,r,a);case 4:return Xc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Bs(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),$p(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,m=r.memoizedProps,y=d.value,$e(Ol,c._currentValue),c._currentValue=y,m!==null)if(kn(m.value,y)){if(m.children===d.children&&!Wt.current){r=_r(n,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var T=m.dependencies;if(T!==null){y=m.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=gr(-1,a&-a),C.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?C.next=C:(C.next=W.next,W.next=C),F.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),Gc(m.return,a,r),T.lanes|=a;break}C=C.next}}else if(m.tag===10)y=m.type===r.type?null:m.child;else if(m.tag===18){if(y=m.return,y===null)throw Error(t(341));y.lanes|=a,T=y.alternate,T!==null&&(T.lanes|=a),Gc(y,a,r),y=m.sibling}else y=m.child;if(y!==null)y.return=m;else for(y=m;y!==null;){if(y===r){y=null;break}if(m=y.sibling,m!==null){m.return=y.return,y=m;break}y=y.return}m=y}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=gn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),qp(n,r,c,d,a);case 15:return Hp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Wl(n,r),r.tag=1,Kt(c)?(n=!0,Pl(r)):n=!1,qs(r,a),Mp(r,c,d),ch(r,c,d,a),ph(null,r,c,!0,n,a);case 19:return Zp(n,r,a);case 22:return Wp(n,r,a)}throw Error(t(156,r.tag))};function Im(n,r){return _s(n,r)}function u0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new u0(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function c0(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Nt)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ru(n,r,a,c,d,m){var y=2;if(c=n,typeof n=="function")Oh(n)&&(y=1);else if(typeof n=="string")y=5;else e:switch(n){case N:return Wi(a.children,d,m,r);case I:y=8,d|=8;break;case R:return n=vn(12,a,r,d|2),n.elementType=R,n.lanes=m,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=m,n;case tt:return n=vn(19,a,r,d),n.elementType=tt,n.lanes=m,n;case Ue:return iu(a,d,m,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:y=10;break e;case V:y=9;break e;case O:y=11;break e;case Nt:y=14;break e;case Dt:y=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(y,a,r,d),r.elementType=n,r.type=c,r.lanes=m,r}function Wi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function iu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function h0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bh(n,r,a,c,d,m,y,T,C){return n=new h0(n,r,a,T,C),r===1?(r=1,m===!0&&(r|=8)):r=0,m=vn(3,null,null,r),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),n}function d0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Sm(n){if(!n)return Br;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Jf(n,a,r)}return r}function Am(n,r,a,c,d,m,y,T,C){return n=bh(a,c,!0,n,d,m,y,T,C),n.context=Sm(null),a=n.current,c=$t(),d=Qr(a),m=gr(c,d),m.callback=r??null,Hr(a,m,d),n.current.lanes=d,xr(n,d,c),Yt(n,c),n}function su(n,r,a,c){var d=r.current,m=$t(),y=Qr(d);return a=Sm(a),r.context===null?r.context=a:r.pendingContext=a,r=gr(m,y),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,y),n!==null&&(On(n,d,y,m),Ml(n,d,y)),y}function ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Fh(n,r){Rm(n,r),(n=n.alternate)&&Rm(n,r)}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uh(n){this._internalRoot=n}au.prototype.render=Uh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));su(n,r,null,null)},au.prototype.unmount=Uh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;$i(function(){su(null,n,null,null)}),r[hr]=null}};function au(n){this._internalRoot=n}au.prototype.unstable_scheduleHydration=function(n){if(n){var r=al();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&cl(n)}};function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function f0(n,r,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=ou(y);m.call(F)}}var y=Am(r,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=y,n[hr]=y.current,Jo(n.nodeType===8?n.parentNode:n),$i(),y}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=ou(C);T.call(F)}}var C=bh(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=C,n[hr]=C.current,Jo(n.nodeType===8?n.parentNode:n),$i(function(){su(r,C,a,c)}),C}function uu(n,r,a,c,d){var m=a._reactRootContainer;if(m){var y=m;if(typeof d=="function"){var T=d;d=function(){var C=ou(y);T.call(C)}}su(r,y,n,d)}else y=f0(a,r,n,d,c);return ou(y)}sl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Or(r,a|1),Yt(r,Be()),!(xe&6)&&(Qs=Be()+500,$r()))}break;case 13:$i(function(){var c=mr(n,1);if(c!==null){var d=$t();On(c,n,1,d)}}),Fh(n,1)}},Es=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var a=$t();On(r,n,134217728,a)}Fh(n,134217728)}},ol=function(n){if(n.tag===13){var r=Qr(n),a=mr(n,r);if(a!==null){var c=$t();On(a,n,r,c)}Fh(n,r)}},al=function(){return Pe},ll=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},hs=function(n,r,a){switch(r){case"input":if(Io(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));ss(c),Io(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&rr(n,!!a.multiple,r,!1)}},Ii=Dh,xo=$i;var p0={usingClientEntryPoint:!1,Events:[ta,Ms,Rl,Un,Vo,Dh]},ma={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mo(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Pi=cu.inject(m0),en=cu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(r))throw Error(t(200));return d0(n,r,null,a)},Xt.createRoot=function(n,r){if(!jh(n))throw Error(t(299));var a=!1,c="",d=Cm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=bh(n,1,!1,null,null,a,!1,c,d),n[hr]=r.current,Jo(n.nodeType===8?n.parentNode:n),new Uh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Mo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return $i(n)},Xt.hydrate=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",y=Cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(y=a.onRecoverableError)),r=Am(r,null,n,1,a??null,d,!1,m,y),n[hr]=r.current,Jo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new au(r)},Xt.render=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?($i(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Dh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Mm;function I0(){if(Mm)return $h.exports;Mm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=T0(),$h.exports}var bm;function S0(){if(bm)return hu;bm=1;var i=I0();return hu.createRoot=i.createRoot,hu.hydrateRoot=i.hydrateRoot,hu}var A0=S0();const R0="_complete_prxbw_33",C0="_remove_prxbw_41",P0="_completed_prxbw_49",k0="_text_prxbw_59",N0="_category_prxbw_67",D0="_todo_prxbw_75",Ki={complete:R0,remove:C0,completed:P0,text:k0,category:N0,todo:D0};function V0({todo:i,onRemove:e,onComplete:t}){return ae.jsxs("div",{className:`${Ki.todo} ${i.completed?Ki.completed:""}`,children:[ae.jsxs("div",{className:Ki.content,children:[ae.jsx("p",{className:Ki.text,children:i.text}),ae.jsxs("p",{className:Ki.category,children:["(",i.category,")"]})]}),ae.jsxs("div",{children:[ae.jsx("button",{onClick:t,className:Ki.complete,children:"Completar"}),ae.jsx("button",{onClick:e,className:Ki.remove,children:"Excluir"})]})]})}var Fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},x0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],p=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},r_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,p=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,A=(u&3)<<4|p>>4;let D=(p&15)<<2|v>>6,j=v&63;g||(j=64,h||(D=64)),s.push(t[w],t[A],t[D],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(n_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):x0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],p=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||p==null||v==null||A==null)throw new O0;const D=u<<2|p>>4;if(s.push(D),v!==64){const j=p<<4&240|v>>2;if(s.push(j),A!==64){const G=v<<6&192|A;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class O0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L0=function(i){const e=n_(i);return r_.encodeByteArray(e,!0)},Nu=function(i){return L0(i).replace(/\./g,"")},i_=function(i){try{return r_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=()=>M0().__FIREBASE_DEFAULTS__,F0=()=>{if(typeof process>"u"||typeof Fm>"u")return;const i=Fm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},U0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&i_(i[1]);return e&&JSON.parse(e)},Qu=()=>{try{return b0()||F0()||U0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},s_=i=>{var e,t;return(t=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},j0=i=>{const e=s_(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},o_=()=>{var i;return(i=Qu())===null||i===void 0?void 0:i.config},a_=i=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Nu(JSON.stringify(t)),Nu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function q0(){var i;const e=(i=Qu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function K0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G0(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Q0(){return!q0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=J0,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Z0(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,p,s)}}function Z0(i,e){return i.replace(eE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const eE=/\{\$([^}]+)}/g;function tE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Du(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Um(u)&&Um(h)){if(!Du(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Um(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ya(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function va(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function nE(i,e){const t=new rE(i,e);return t.subscribe.bind(t)}class rE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");iE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Wh),o.error===void 0&&(o.error=Wh),o.complete===void 0&&(o.complete=Wh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Wh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(i){return i&&i._delegate?i._delegate:i}class Xi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new z0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aE(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(i){return i===Gi?void 0:i}function aE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const uE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},cE=Re.INFO,hE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},dE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=hE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vd{constructor(e){this.name=e,this._logLevel=cE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const fE=(i,e)=>e.some(t=>i instanceof t);let jm,zm;function pE(){return jm||(jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mE(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,sd=new WeakMap,u_=new WeakMap,Kh=new WeakMap,xd=new WeakMap;function gE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&l_.set(t,i)}).catch(()=>{}),xd.set(e,i),e}function _E(i){if(sd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});sd.set(i,e)}let od={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return sd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||u_.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function yE(i){od=i(od)}function vE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Gh(this),e,...t);return u_.set(s,e.sort?e.sort():[e]),si(s)}:mE().includes(i)?function(...e){return i.apply(Gh(this),e),si(l_.get(this))}:function(...e){return si(i.apply(Gh(this),e))}}function EE(i){return typeof i=="function"?vE(i):(i instanceof IDBTransaction&&_E(i),fE(i,pE())?new Proxy(i,od):i)}function si(i){if(i instanceof IDBRequest)return gE(i);if(Kh.has(i))return Kh.get(i);const e=EE(i);return e!==i&&(Kh.set(i,e),xd.set(e,i)),e}const Gh=i=>xd.get(i);function wE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),p=si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(si(h.result),g.oldVersion,g.newVersion,si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const TE=["get","getKey","getAll","getAllKeys","count"],IE=["put","add","delete","clear"],Qh=new Map;function Bm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=IE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||TE.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&g.done]))[0]};return Qh.set(e,u),u}yE(i=>({...i,get:(e,t,s)=>Bm(e,t)||i.get(e,t,s),has:(e,t)=>!!Bm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function AE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",$m="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Vd("@firebase/app"),RE="@firebase/app-compat",CE="@firebase/analytics-compat",PE="@firebase/analytics",kE="@firebase/app-check-compat",NE="@firebase/app-check",DE="@firebase/auth",VE="@firebase/auth-compat",xE="@firebase/database",OE="@firebase/data-connect",LE="@firebase/database-compat",ME="@firebase/functions",bE="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",jE="@firebase/messaging",zE="@firebase/messaging-compat",BE="@firebase/performance",$E="@firebase/performance-compat",qE="@firebase/remote-config",HE="@firebase/remote-config-compat",WE="@firebase/storage",KE="@firebase/storage-compat",GE="@firebase/firestore",QE="@firebase/vertexai",YE="@firebase/firestore-compat",XE="firebase",JE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="[DEFAULT]",ZE={[ad]:"fire-core",[RE]:"fire-core-compat",[PE]:"fire-analytics",[CE]:"fire-analytics-compat",[NE]:"fire-app-check",[kE]:"fire-app-check-compat",[DE]:"fire-auth",[VE]:"fire-auth-compat",[xE]:"fire-rtdb",[OE]:"fire-data-connect",[LE]:"fire-rtdb-compat",[ME]:"fire-fn",[bE]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[jE]:"fire-fcm",[zE]:"fire-fcm-compat",[BE]:"fire-perf",[$E]:"fire-perf-compat",[qE]:"fire-rc",[HE]:"fire-rc-compat",[WE]:"fire-gcs",[KE]:"fire-gcs-compat",[GE]:"fire-fst",[YE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map,ew=new Map,ud=new Map;function qm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function oo(i){const e=i.name;if(ud.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,i);for(const t of Vu.values())qm(t,i);for(const t of ew.values())qm(t,i);return!0}function Od(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Qn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new ba("app","Firebase",tw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=JE;function c_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ld,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=o_()),!t)throw oi.create("no-options");const u=Vu.get(o);if(u){if(Du(t,u.options)&&Du(s,u.config))return u;throw oi.create("duplicate-app",{appName:o})}const h=new lE(o);for(const g of ud.values())h.addComponent(g);const p=new nw(t,s,h);return Vu.set(o,p),p}function h_(i=ld){const e=Vu.get(i);if(!e&&i===ld&&o_())return c_();if(!e)throw oi.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let o=(s=ZE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(p.join(" "));return}oo(new Xi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebase-heartbeat-database",iw=1,Pa="firebase-heartbeat-store";let Yh=null;function d_(){return Yh||(Yh=wE(rw,iw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Pa)}catch(t){console.warn(t)}}}}).catch(i=>{throw oi.create("idb-open",{originalErrorMessage:i.message})})),Yh}async function sw(i){try{const t=(await d_()).transaction(Pa),s=await t.objectStore(Pa).get(f_(i));return await t.done,s}catch(e){if(e instanceof Cr)Ir.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function Hm(i,e){try{const s=(await d_()).transaction(Pa,"readwrite");await s.objectStore(Pa).put(e,f_(i)),await s.done}catch(t){if(t instanceof Cr)Ir.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function f_(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=1024,aw=30*24*60*60*1e3;class lw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=aw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wm(),{heartbeatsToSend:s,unsentEntries:o}=uw(this._heartbeatsCache.heartbeats),u=Nu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function uw(i,e=ow){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Km(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Km(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Km(i){return Nu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(i){oo(new Xi("platform-logger",e=>new SE(e),"PRIVATE")),oo(new Xi("heartbeat",e=>new lw(e),"PRIVATE")),ai(ad,$m,i),ai(ad,$m,"esm2017"),ai("fire-js","")}hw("");var dw="firebase",fw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai(dw,fw,"app");var Gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi,p_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function R(){}R.prototype=I.prototype,N.D=I.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(P,V,O){for(var S=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)S[tt-2]=arguments[tt];return I.prototype[V].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)P[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)P[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=N.g[0],R=N.g[1],V=N.g[2];var O=N.g[3],S=I+(O^R&(V^O))+P[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+P[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+P[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+P[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+P[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+P[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+P[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+P[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+P[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+P[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+P[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+P[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+P[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+P[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+P[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+P[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(R^V))+P[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+P[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+P[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+P[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+P[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+P[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+P[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+P[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+P[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+P[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+P[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+P[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+P[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+P[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+P[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+P[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^O)+P[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+P[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+P[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+P[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+P[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+P[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+P[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+P[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+P[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+P[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+P[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+P[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+P[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+P[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+P[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+P[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~O))+P[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+P[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+P[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+P[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+P[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+P[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+P[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+P[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+P[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+P[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+P[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+P[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+P[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+P[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+P[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var R=I-this.blockSize,P=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=R;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(P[V++]=N.charCodeAt(O++),V==this.blockSize){o(this,P),V=0;break}}else for(;O<I;)if(P[V++]=N[O++],V==this.blockSize){o(this,P),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var R=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=R&255,R/=256;for(this.u(N),N=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)N[R++]=this.g[I]>>>P&255;return N};function u(N,I){var R=p;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=I(N)}function h(N,I){this.h=I;for(var R=[],P=!0,V=N.length-1;0<=V;V--){var O=N[V]|0;P&&O==I||(R[V]=O,P=!1)}this.g=R}var p={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return H(v(-N));for(var I=[],R=1,P=0;N>=R;P++)I[P]=N/R|0,R*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return H(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),P=A,V=0;V<N.length;V+=8){var O=Math.min(8,N.length-V),S=parseInt(N.substring(V,V+O),I);8>O?(O=v(Math.pow(I,O)),P=P.j(O).add(v(S))):(P=P.j(R),P=P.add(v(S)))}return P}var A=g(0),D=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Q(this))return-H(this).m();for(var N=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);N+=(0<=P?P:4294967296+P)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(Q(this))return"-"+H(this).toString(N);for(var I=v(Math.pow(N,6)),R=this,P="";;){var V=Te(R,I).g;R=Ee(R,V.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=V,G(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Q(N){return N.h==-1}i.l=function(N){return N=Ee(this,N),Q(N)?-1:G(N)?0:1};function H(N){for(var I=N.g.length,R=[],P=0;P<I;P++)R[P]=~N.g[P];return new h(R,~N.h).add(D)}i.abs=function(){return Q(this)?H(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0,V=0;V<=I;V++){var O=P+(this.i(V)&65535)+(N.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);P=S>>>16,O&=65535,S&=65535,R[V]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Ee(N,I){return N.add(H(I))}i.j=function(N){if(G(this)||G(N))return A;if(Q(this))return Q(N)?H(this).j(H(N)):H(H(this).j(N));if(Q(N))return H(this.j(H(N)));if(0>this.l(j)&&0>N.l(j))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<N.g.length;V++){var O=this.i(P)>>>16,S=this.i(P)&65535,tt=N.i(V)>>>16,Nt=N.i(V)&65535;R[2*P+2*V]+=S*Nt,ve(R,2*P+2*V),R[2*P+2*V+1]+=O*Nt,ve(R,2*P+2*V+1),R[2*P+2*V+1]+=S*tt,ve(R,2*P+2*V+1),R[2*P+2*V+2]+=O*tt,ve(R,2*P+2*V+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ve(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ye(N,I){this.g=N,this.h=I}function Te(N,I){if(G(I))throw Error("division by zero");if(G(N))return new ye(A,A);if(Q(N))return I=Te(H(N),I),new ye(H(I.g),H(I.h));if(Q(I))return I=Te(N,H(I)),new ye(H(I.g),I.h);if(30<N.g.length){if(Q(N)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=D,P=I;0>=P.l(N);)R=Ke(R),P=Ke(P);var V=Ae(R,1),O=Ae(P,1);for(P=Ae(P,2),R=Ae(R,2);!G(P);){var S=O.add(P);0>=S.l(N)&&(V=V.add(R),O=S),P=Ae(P,1),R=Ae(R,1)}return I=Ee(N,V.j(I)),new ye(V,I)}for(V=A;0<=N.l(I);){for(R=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=v(R),S=O.j(I);Q(S)||0<S.l(N);)R-=P,O=v(R),S=O.j(I);G(O)&&(O=D),V=V.add(O),N=Ee(N,S)}return new ye(V,N)}i.A=function(N){return Te(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function Ke(N){for(var I=N.g.length+1,R=[],P=0;P<I;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function Ae(N,I){var R=I>>5;I%=32;for(var P=N.g.length-R,V=[],O=0;O<P;O++)V[O]=0<I?N.i(O+R)>>>I|N.i(O+R+1)<<32-I:N.i(O+R);return new h(V,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,p_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Yi=h}).apply(typeof Gm<"u"?Gm:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,Ea,g_,Eu,cd,__,y_,v_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,_){return l==Array.prototype||l==Object.prototype||(l[f]=_.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var f=0;f<l.length;++f){var _=l[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var _=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in _))break e;_=_[L]}l=l[l.length-1],E=_[l],f=f(E),f!=E&&f!=null&&e(_,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var _=0,E=!1,L={next:function(){if(!E&&_<l.length){var U=_++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,_){return l.call.apply(l.bind,arguments)}function A(l,f,_){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function D(l,f,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,D.apply(null,arguments)}function j(l,f){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,f){function _(){}_.prototype=f.prototype,l.aa=f.prototype,l.prototype=new _,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function Q(l){const f=l.length;if(0<f){const _=Array(f);for(let E=0;E<f;E++)_[E]=l[E];return _}return[]}function H(l,f){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=E[X]}else l.push(E)}}class Ee{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var Ke=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ae(l,f,_){for(const E in l)f.call(_,l[E],E,l)}function N(l,f){for(const _ in l)f.call(void 0,l[_],_,l)}function I(l){const f={};for(const _ in l)f[_]=l[_];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let _,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(_ in E)l[_]=E[_];for(let U=0;U<R.length;U++)_=R[U],Object.prototype.hasOwnProperty.call(E,_)&&(l[_]=E[_])}}function V(l){var f=1;l=l.split(":");const _=[];for(;0<f&&l.length;)_.push(l.shift()),f--;return l.length&&_.push(l.join(":")),_}function O(l){p.setTimeout(()=>{throw l},0)}function S(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,_){const E=Nt.get();E.set(f,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new Ee(()=>new Dt,l=>l.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,ce=new tt,ee=()=>{const l=p.Promise.resolve(void 0);Ue=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(_){O(_)}var f=Nt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const _=()=>{};p.addEventListener("test",_,f),p.removeEventListener("test",_,f)}catch{}return l}();function Ie(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var _=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ke){e:{try{Te(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else _=="mouseover"?f=l.fromElement:_=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}G(Ie,le);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,_,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=_,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function tr(l){this.src=l,this.g={},this.h=0}tr.prototype.add=function(l,f,_,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Pr(l,f,E,L);return-1<X?(f=l[X],_||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=_,l.push(f)),f};function ss(l,f){var _=f.type;if(_ in l.g){var E=l.g[_],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(f),l.g[_].length==0&&(delete l.g[_],l.h--))}}function Pr(l,f,_,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!_&&U.ha==E)return L}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),os={};function To(l,f,_,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)To(l,f[U],_,E,L);return null}return _=Ao(_),l&&l[Le]?l.K(f,_,v(E)?!!E.capture:!!E,L):Io(l,f,_,!1,E,L)}function Io(l,f,_,E,L,U){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Fe=ls(l);if(Fe||(l[vi]=Fe=new tr(l)),_=Fe.add(f,_,E,X,U),_.proxy)return _;if(E=Ya(),_.proxy=E,E.src=l,E.listener=_,l.addEventListener)we||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(rr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ya(){function l(_){return f.call(l.src,l.listener,_)}const f=So;return l}function as(l,f,_,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)as(l,f[U],_,E,L);else E=v(E)?!!E.capture:!!E,_=Ao(_),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],_=Pr(U,_,E,L),-1<_&&(gt(U[_]),Array.prototype.splice.call(U,_,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,_,E,L)),(_=-1<l?f[l]:null)&&nr(_))}function nr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ss(f.i,l);else{var _=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(_,E,l.capture):f.detachEvent?f.detachEvent(rr(_),E):f.addListener&&f.removeListener&&f.removeListener(E),(_=ls(f))?(ss(_,l),_.h==0&&(_.src=null,f[vi]=null)):gt(l)}}}function rr(l){return l in os?os[l]:os[l]="on"+l}function So(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var _=l.listener,E=l.ha||l.src;l.fa&&nr(l),l=_.call(E,f)}return l}function ls(l){return l=l[vi],l instanceof tr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function ut(){B.call(this),this.i=new tr(this),this.M=this,this.F=null}G(ut,B),ut.prototype[Le]=!0,ut.prototype.removeEventListener=function(l,f,_,E){as(this,l,f,_,E)};function ct(l,f){var _,E=l.F;if(E)for(_=[];E;E=E.F)_.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var L=f;f=new le(E,l),P(f,L)}if(L=!0,_)for(var U=_.length-1;0<=U;U--){var X=f.g=_[U];L=ir(X,E,!0,f)&&L}if(X=f.g=l,L=ir(X,E,!0,f)&&L,L=ir(X,E,!1,f)&&L,_)for(U=0;U<_.length;U++)X=f.g=_[U],L=ir(X,E,!1,f)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var _=l.g[f],E=0;E<_.length;E++)gt(_[E]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,_,E){return this.i.add(String(l),f,!1,_,E)},ut.prototype.L=function(l,f,_,E){return this.i.add(String(l),f,!0,_,E)};function ir(l,f,_,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==_){var Fe=X.listener,ht=X.ha||X.src;X.fa&&ss(l.i,X),L=Fe.call(ht,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ro(l,f,_){if(typeof l=="function")_&&(l=D(l,_));else if(l&&typeof l.handleEvent=="function")l=D(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function kr(l){l.g=Ro(()=>{l.g=null,l.i&&(l.i=!1,kr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ei extends B{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(l){B.call(this),this.h=l,this.g={}}G(wi,B);var Co=[];function Po(l){Ae(l.g,function(f,_){this.g.hasOwnProperty(_)&&nr(f)},l),l.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Po(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ko=p.JSON.stringify,No=p.JSON.parse,Do=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Ti(){}Ti.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fn(){le.call(this,"d")}G(Fn,le);function ds(){le.call(this,"c")}G(ds,le);var Un={},Vo=null;function Ii(){return Vo=Vo||new ut}Un.La="serverreachability";function xo(l){le.call(this,Un.La,l)}G(xo,le);function sr(l){const f=Ii();ct(f,new xo(f))}Un.STAT_EVENT="statevent";function Oo(l,f){le.call(this,Un.STAT_EVENT,l),this.stat=f}G(Oo,le);function nt(l){const f=Ii();ct(f,new Oo(f,l))}Un.Ma="timingevent";function fs(l,f){le.call(this,Un.Ma,l),this.size=f}G(fs,le);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function Ai(l,f,_,E,L,U){l.info(function(){if(l.g)if(U)for(var X="",Fe=U.split("&"),ht=0;ht<Fe.length;ht++){var De=Fe[ht].split("=");if(1<De.length){var _t=De[0];De=De[1];var st=_t.split("_");X=2<=st.length&&st[1]=="type"?X+(_t+"="+De+"&"):X+(_t+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+_+`
`+X})}function ps(l,f,_,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+_+`
`+U+" "+X})}function wn(l,f,_,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+mc(l,_)+(E?" "+E:"")})}function Lo(l,f){l.info(function(){return"TIMEOUT: "+f})}Si.prototype.info=function(){};function mc(l,f){if(!l.g)return f;if(!f)return null;try{var _=JSON.parse(f);if(_){for(l=0;l<_.length;l++)if(Array.isArray(_[l])){var E=_[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return ko(_)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ri(){}G(Ri,Ti),Ri.prototype.g=function(){return new XMLHttpRequest},Ri.prototype.i=function(){return{}},Tn=new Ri;function In(l,f,_,E){this.j=l,this.i=f,this.l=_,this.R=E||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var Mo={},gs={};function _s(l,f,_){l.L=1,l.v=Or(tn(f)),l.m=_,l.P=!0,bo(l,null)}function bo(l,f){l.F=Date.now(),Be(l),l.A=tn(l.v);var _=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(_.i,"t",E),l.C=0,_=l.j.J,l.h=new Ja,l.g=gl(l.j,_?f:null,!l.m),0<l.O&&(l.M=new Ei(D(l.Y,l,l.g),l.O)),f=l.U,_=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Co[0]=L.toString()),L=Co);for(var U=0;U<L.length;U++){var X=To(_,L[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),sr(),Ai(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const st=Ht(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||$o(this.g)))){this.J||st!=4||f==7||(f==8||0>=fn?sr(3):sr(2)),Ci(this);var _=this.g.Z();this.X=_;t:if(Za(this)){var E=$o(this.g);l="";var L=E.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Nr(this);var X="";break t}this.h.i=new p.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=_==200,ps(this.i,this.u,this.A,this.l,this.R,st,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ht=this.g;if((Fe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Fe)){var De=Fe;break t}}De=null}if(_=De)wn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,_);else{this.o=!1,this.s=3,nt(12),hn(this),Nr(this);break e}}if(this.P){_=!0;let rn;for(;!this.J&&this.C<X.length;)if(rn=gc(this,X),rn==gs){st==4&&(this.s=4,nt(14),_=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Mo){this.s=4,nt(15),wn(this.i,this.l,X,"[Invalid Chunk]"),_=!1;break}else wn(this.i,this.l,rn,null),Fo(this,rn);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||X.length!=0||this.h.h||(this.s=1,nt(16),_=!1),this.o=this.o&&_,!_)wn(this.i,this.l,X,"[Invalid Chunked Response]"),hn(this),Nr(this);else if(0<X.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Ho(_t),_t.M=!0,nt(11))}}else wn(this.i,this.l,X,null),Fo(this,X);st==4&&hn(this),this.o&&!this.J&&(st==4?Ps(this.j,this):(this.o=!1,Be(this)))}else Is(this.g),_==400&&0<X.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),hn(this),Nr(this)}}}catch{}finally{}};function Za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function gc(l,f){var _=l.C,E=f.indexOf(`
`,_);return E==-1?gs:(_=Number(f.substring(_,E)),isNaN(_)?Mo:(E+=1,E+_>f.length?gs:(f=f.slice(E,E+_),l.C=E+_,f)))}In.prototype.cancel=function(){this.J=!0,hn(this)};function Be(l){l.S=Date.now()+l.I,el(l,l.I)}function el(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(D(l.ba,l),f)}function Ci(l){l.B&&(p.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Lo(this.i,this.A),this.L!=2&&(sr(),nt(17)),hn(this),this.s=2,Nr(this)):el(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Ps(l.j,l)}function hn(l){Ci(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Po(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Fo(l,f){try{var _=l.j;if(_.G!=0&&(_.g==l||jt(_.h,l))){if(!l.K&&jt(_.h,l)&&_.G==3){try{var E=_.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<l.F)Cs(_),Pn(_);else break e;Rs(_),nt(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=En(D(_.Za,_),6e3));if(1>=nl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else cr(_,11)}else if((l.K||_.g==l)&&Cs(_),!ve(f))for(L=_.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(_.T=De[0],De=De[1],_.G==2)if(De[0]=="c"){_.K=De[1],_.ia=De[2];const _t=De[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const st=De[4];st!=null&&(_.Aa=st,_.j.info("SVER="+_.Aa));const fn=De[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const rn=l.g;if(rn){const Oi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var U=E.h;U.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Uo(U,U.h),U.h=null))}if(E.D){const Ns=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(E.ya=Ns,je(E.I,E.D,Ns))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-l.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var X=l;if(E.qa=ml(E,E.J?E.ia:null,E.W),X.K){rl(E.h,X);var Fe=X,ht=E.L;ht&&(Fe.I=ht),Fe.B&&(Ci(Fe),Be(Fe)),E.g=X}else xi(E);0<_.i.length&&$n(_)}else De[0]!="stop"&&De[0]!="close"||cr(_,7);else _.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?cr(_,7):It(_):De[0]!="noop"&&_.l&&_.l.ta(De),_.v=0)}}sr(4)}catch{}}var tl=class{constructor(l,f){this.g=l,this.map=f}};function Pi(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function nl(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Uo(l,f){l.g?l.g.add(f):l.h=f}function rl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Pi.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function il(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const _ of l.g.values())f=f.concat(_.D);return f}return Q(l.i)}function ys(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],_=l.length,E=0;E<_;E++)f.push(l[E]);return f}f=[],_=0;for(E in l)f[_++]=l[E];return f}function vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var _=0;_<l;_++)f.push(_);return f}f=[],_=0;for(const E in l)f[_++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var _=vs(l),E=ys(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],_&&_[U],l)}var ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(l,f){if(l){l=l.split("&");for(var _=0;_<l.length;_++){var E=l[_].indexOf("="),L=null;if(0<=E){var U=l[_].substring(0,E);L=l[_].substring(E+1)}else U=l[_];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function or(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof or){this.h=l.h,Ni(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,_=new jn;_.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),xr(this,_),this.m=l.m}else l&&(f=String(l).match(ki))?(this.h=!1,Ni(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Vr(this,f[4]),this.l=Pe(f[5]||"",!0),xr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}or.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,Es,!0),":");var _=this.g;return(_||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,Es,!0),"@"),l.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&l.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&l.push("/"),l.push(Lr(_,_.charAt(0)=="/"?al:ol,!0))),(_=this.i.toString())&&l.push("?",_),(_=this.m)&&l.push("#",Lr(_,jo)),l.join("")};function tn(l){return new or(l)}function Ni(l,f,_){l.j=_?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function xr(l,f,_){f instanceof jn?(l.i=f,zn(l.i,l.h)):(_||(f=Lr(f,ll)),l.i=new jn(f,l.h))}function je(l,f,_){l.i.set(f,_)}function Or(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,_){return typeof l=="string"?(l=encodeURI(l).replace(f,sl),_&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ll=/[#\?@]/g,jo=/#/g;function jn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&_c(l.i,function(f,_){l.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}i=jn.prototype,i.add=function(l,f){Tt(this),this.i=null,l=dn(this,l);var _=this.g.get(l);return _||this.g.set(l,_=[]),_.push(f),this.h+=1,this};function Sn(l,f){Tt(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Tt(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(_,E){_.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),_=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)_.push(f[E])}return _},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let _=0;_<l.length;_++)f=f.concat(l[_])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=dn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,_){Sn(l,f),0<_.length&&(l.i=null,l.g.set(dn(l,f),Q(_)),l.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var _=0;_<f.length;_++){var E=f[_];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=U;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(_,E){var L=E.toLowerCase();E!=L&&(Sn(this,E),Mr(this,L,_))},l)),l.j=f}function yc(l,f){const _=new Si;if(p.Image){const E=new Image;E.onload=j(qt,_,"TestLoadImage: loaded",!0,f,E),E.onerror=j(qt,_,"TestLoadImage: error",!1,f,E),E.onabort=j(qt,_,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(qt,_,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function ul(l,f){const _=new Si,E=new AbortController,L=setTimeout(()=>{E.abort(),qt(_,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?qt(_,"TestPingServer: ok",!0,f):qt(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),qt(_,"TestPingServer: error",!1,f)})}function qt(l,f,_,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(_)}catch{}}function vc(){this.g=new Do}function cl(l,f,_){const E=_||"";try{Dr(l,function(L,U){let X=L;v(L)&&(X=ko(L)),f.push(E+U+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ar(l){this.l=l.Ub||null,this.j=l.eb||!1}G(ar,Ti),ar.prototype.g=function(){return new Di(this.l,this.j)},ar.prototype.i=function(l){return function(){return l}}({});function Di(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Di,ut),i=Di.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Cn(this),this.readyState==3&&hl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,l.push(_[0]+": "+_[1]),_=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function lr(l){let f="";return Ae(l,function(_,E){f+=E,f+=":",f+=_,f+=`\r
`}),f}function br(l,f,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=lr(_),typeof l=="string"?_!=null&&encodeURIComponent(String(_)):je(l,f,_))}function Ge(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ge,ut);var Ec=/^https?$/i,zo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?cs(this.o):cs(Tn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Vi(this,U);return}if(l=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)_.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())_.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(U=>U.toLowerCase()=="content-type"),L=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(zo,f,void 0))||E||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of _)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Vi(this,U)}};function Vi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ws(l),nn(l)}function ws(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ct(this,"complete"),ct(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},i.bb=function(){Bo(this)};function Bo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Ro(l.Ea,0,l);else if(ct(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var _;if(!(_=f)){var E;if(E=X===0){var L=String(l.D).match(ki)[1]||null;!L&&p.self&&p.self.location&&(L=p.self.location.protocol.slice(0,-1)),E=!Ec.test(L?L.toLowerCase():"")}_=E}if(_)ct(l,"complete"),ct(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ws(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ts(l);const _=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ct(l,"ready");try{_.onreadystatechange=E}catch{}}}function Ts(l){l.I&&(p.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),No(f)}};function $o(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ve(l[E]))continue;var _=V(l[E]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const U=f[L]||[];f[L]=U,U.push(_)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[l]||f}function qo(l){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(l&&l.concurrentRequestLimit),this.Da=new vc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=qo.prototype,i.la=8,i.G=1,i.connect=function(l,f,_,E){nt(0),this.W=l,this.H=f||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=ml(this,null,this.W),$n(this)};function It(l){if(Ss(l),l.G==3){var f=l.U++,_=tn(l.I);if(je(_,"SID",l.K),je(_,"RID",f),je(_,"TYPE","terminate"),ur(l,_),f=new In(l,l.j,f),f.L=2,f.v=Or(tn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=f.v,_=!0),_||(f.g=gl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}pl(l)}function Pn(l){l.g&&(Ho(l),l.g.cancel(),l.g=null)}function Ss(l){Pn(l),l.u&&(p.clearTimeout(l.u),l.u=null),Cs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function $n(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),ce.add(f,l),l.B=0}}function wc(l,f){return nl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(D(l.Ga,l,f),fl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new In(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=_;break e}if(f===4096||_===this.i.length-1){f=_+1;break e}}f=1e3}else f=1e3;f=Fr(this,L,f),_=tn(this.I),je(_,"RID",l),je(_,"CVER",22),this.D&&je(_,"X-HTTP-Session-Id",this.D),ur(this,_),U&&(this.O?f="headers="+encodeURIComponent(String(lr(U)))+"&"+f:this.m&&br(_,this.m,U)),Uo(this.h,L),this.Ua&&je(_,"TYPE","init"),this.P?(je(_,"$req",f),je(_,"SID","null"),L.T=!0,_s(L,_,null)):_s(L,_,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||en(this.h)||As(this))};function As(l,f){var _;f?_=f.l:_=l.U++;const E=tn(l.I);je(E,"SID",l.K),je(E,"RID",_),je(E,"AID",l.T),ur(l,E),l.m&&l.o&&br(E,l.m,l.o),_=new In(l,l.j,_,l.B+1),l.m===null&&(_.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,_,1e3),_.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Uo(l.h,_),_s(_,E,f)}function ur(l,f){l.H&&Ae(l.H,function(_,E){je(f,E,_)}),l.l&&Dr({},function(_,E){je(f,E,_)})}function Fr(l,f,_){_=Math.min(l.i.length,_);var E=l.l?D(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+_];U==-1?0<_?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Fe=!0;for(let ht=0;ht<_;ht++){let De=L[ht].g;const _t=L[ht].map;if(De-=U,0>De)U=Math.max(0,L[ht].g-100),Fe=!1;else try{cl(_t,X,"req"+De+"_")}catch{E&&E(_t)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,_),f.D=l,E}function xi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),ce.add(f,l),l.v=0}}function Rs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(D(l.Fa,l),fl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(D(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Pn(this),dl(this))};function Ho(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function dl(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),ur(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var _=l.g;l=l.ia,_.L=1,_.v=Or(tn(f)),_.m=null,_.P=!0,bo(_,l)}i.Za=function(){this.C!=null&&(this.C=null,Pn(this),Rs(this),nt(19))};function Cs(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Ps(l,f){var _=null;if(l.g==f){Cs(l),Ho(l),l.g=null;var E=2}else if(jt(l.h,f))_=f.D,rl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){_=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ii(),ct(E,new fs(E,_)),$n(l)}else xi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&wc(l,f)||E==2&&Rs(l)))switch(_&&0<_.length&&(f=l.h,f.i=f.i.concat(_)),L){case 1:cr(l,5);break;case 4:cr(l,10);break;case 3:cr(l,6);break;default:cr(l,2)}}}function fl(l,f){let _=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(_*=2),_*f}function cr(l,f){if(l.j.info("Error code "+f),f==2){var _=D(l.fb,l),E=l.Xa;const L=!E;E=new or(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ni(E,"https"),Or(E),L?yc(E.toString(),_):ul(E.toString(),_)}else nt(2);l.G=0,l.l&&l.l.sa(f),pl(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function pl(l){if(l.G=0,l.ka=[],l.l){const f=il(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function ml(l,f,_){var E=_ instanceof or?tn(_):new or(_);if(E.g!="")f&&(E.g=f+"."+E.g),Vr(E,E.s);else{var L=p.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new or(null);E&&Ni(U,E),f&&(U.g=f),L&&Vr(U,L),_&&(U.l=_),E=U}return _=l.D,f=l.ya,_&&f&&je(E,_,f),je(E,"VER",l.la),ur(l,E),E}function gl(l,f,_){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new ar({eb:_})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wo(){}i=Wo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ks(){}ks.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){ut.call(this),this.g=new qo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}G(zt,ut),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){It(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var _={};_.__data__=l,l=_}else this.u&&(_={},_.__data__=ko(l),l=_);f.i.push(new tl(f.Ya++,l)),f.G==3&&$n(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,zt.aa.N.call(this)};function _l(l){Fn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const _ in f){l=_;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(_l,Fn);function yl(){ds.call(this),this.status=1}G(yl,ds);function qn(l){this.g=l}G(qn,Wo),qn.prototype.ua=function(){ct(this.g,"a")},qn.prototype.ta=function(l){ct(this.g,new _l(l))},qn.prototype.sa=function(l){ct(this.g,new yl)},qn.prototype.ra=function(){ct(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,v_=function(){return new ks},y_=function(){return Ii()},__=Un,cd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Eu=ms,Xa.COMPLETE="complete",g_=Xa,hs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ea=hs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,m_=Ge}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const Qm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Vd("@firebase/firestore");function Xs(){return Ji.logLevel}function te(i,...e){if(Ji.logLevel<=Re.DEBUG){const t=e.map(Ld);Ji.debug(`Firestore (${go}): ${i}`,...t)}}function Sr(i,...e){if(Ji.logLevel<=Re.ERROR){const t=e.map(Ld);Ji.error(`Firestore (${go}): ${i}`,...t)}}function ao(i,...e){if(Ji.logLevel<=Re.WARN){const t=e.map(Ld);Ji.warn(`Firestore (${go}): ${i}`,...t)}}function Ld(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function be(i,e){i||me()}function _e(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(bt.UNAUTHENTICATED))}shutdown(){}}class mw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gw{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new li;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new li,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new li)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new E_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new bt(e)}}class _w{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yw{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new _w(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ew{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new vw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=ww(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function lo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new pt(0,0))}static max(){return new ge(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ka.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ka?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class We extends ka{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new We(t)}static emptyPath(){return new We([])}}const Tw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends ka{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return Tw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}function Iw(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ge.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new ci(o,ue.empty(),e)}function Sw(i){return new ci(i.readTime,i.key,-1)}class ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ci(ge.min(),ue.empty(),-1)}static max(){return new ci(ge.max(),ue.empty(),-1)}}function Aw(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==Rw)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++p,p===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function Pw(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yu.oe=-1;function Xu(i){return i==null}function xu(i){return i===0&&1/i==-1/0}function kw(i){return typeof i=="number"&&Number.isInteger(i)&&!xu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ym(e)),e=Dw(i.get(t),e);return Ym(e)}function Dw(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Ym(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function mi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function T_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}}class fu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jm(this.data.getIterator())}getIteratorFrom(e){return new Jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new ln([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new I_("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(i){if(be(!!i),typeof i=="string"){let e=0;const t=Vw.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function di(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ju(i){const e=i.mapValue.fields.__previous_value__;return Md(e)?Ju(e):e}function Na(i){const e=hi(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,s,o,u,h,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=v}}class Da{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Md(i)?4:Lw(i)?9007199254740991:Ow(i)?10:11:me()}function er(i,e){if(i===e)return!0;const t=fi(i);if(t!==fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Na(i).isEqual(Na(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=hi(o.timestampValue),p=hi(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return di(o.bytesValue).isEqual(di(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),p=it(u.doubleValue);return h===p?xu(h)===xu(p):isNaN(h)&&isNaN(p)}return!1}(i,e);case 9:return lo(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Xm(h)!==Xm(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!er(h[g],p[g])))return!1;return!0}(i,e);default:return me()}}function Va(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function uo(i,e){if(i===e)return 0;const t=fi(i),s=fi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const p=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(i,e);case 3:return Zm(i.timestampValue,e.timestampValue);case 4:return Zm(Na(i),Na(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const p=di(u),g=di(h);return p.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),g=h.split("/");for(let v=0;v<p.length&&v<g.length;v++){const w=ke(p[v],g[v]);if(w!==0)return w}return ke(p.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const p=ke(it(u.latitude),it(h.latitude));return p!==0?p:ke(it(u.longitude),it(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return eg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var p,g,v,w;const A=u.fields||{},D=h.fields||{},j=(p=A.value)===null||p===void 0?void 0:p.arrayValue,G=(g=D.value)===null||g===void 0?void 0:g.arrayValue,Q=ke(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:eg(j,G)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===pu.mapValue&&h===pu.mapValue)return 0;if(u===pu.mapValue)return 1;if(h===pu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const D=ke(g[A],w[A]);if(D!==0)return D;const j=uo(p[g[A]],v[w[A]]);if(j!==0)return j}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw me()}}function Zm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=hi(i),s=hi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function eg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=uo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function co(i){return hd(i)}function hd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=hi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return di(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ue.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=hd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${hd(t.fields[h])}`;return o+"}"}(i.mapValue):me()}function wu(i){switch(fi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ju(i);return e?16+wu(e):16;case 5:return 2*i.stringValue.length;case 6:return di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+wu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return mi(s.fields,(u,h)=>{o+=u.length+wu(h)}),o}(i.mapValue);default:throw me()}}function tg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function dd(i){return!!i&&"integerValue"in i}function bd(i){return!!i&&"arrayValue"in i}function ng(i){return!!i&&"nullValue"in i}function rg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Tu(i){return!!i&&"mapValue"in i}function Ow(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ia(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return mi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ia(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ia(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Lw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Tu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ia(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Tu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Tu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){mi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Zt(Ia(this.value))}}function S_(i){const e=[];return mi(i.fields,(t,s)=>{const o=new Ct([t]);if(Tu(s)){const u=S_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Ft(e,0,ge.min(),ge.min(),ge.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,ge.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,ge.min(),ge.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,ge.min(),ge.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.position=e,this.inclusive=t}}function ig(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=uo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function sg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{}class lt extends A_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Fw(e,t,s):t==="array-contains"?new zw(e,s):t==="in"?new Bw(e,s):t==="not-in"?new $w(e,s):t==="array-contains-any"?new qw(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Uw(e,s):new jw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(uo(t,this.value)):t!==null&&fi(this.value)===fi(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends A_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Mn(e,t)}matches(e){return R_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function R_(i){return i.op==="and"}function C_(i){return bw(i)&&R_(i)}function bw(i){for(const e of i.filters)if(e instanceof Mn)return!1;return!0}function fd(i){if(i instanceof lt)return i.field.canonicalString()+i.op.toString()+co(i.value);if(C_(i))return i.filters.map(e=>fd(e)).join(",");{const e=i.filters.map(t=>fd(t)).join(",");return`${i.op}(${e})`}}function P_(i,e){return i instanceof lt?function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof Mn?function(s,o){return o instanceof Mn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&P_(h,o.filters[p]),!0):!1}(i,e):void me()}function k_(i){return i instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(i):i instanceof Mn?function(t){return t.op.toString()+" {"+t.getFilters().map(k_).join(" ,")+"}"}(i):"Filter"}class Fw extends lt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uw extends lt{constructor(e,t){super(e,"in",t),this.keys=N_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jw extends lt{constructor(e,t){super(e,"not-in",t),this.keys=N_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function N_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class zw extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bd(t)&&Va(t.arrayValue,this.value)}}class Bw extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Va(this.value.arrayValue,t)}}class $w extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Va(this.value.arrayValue,t)}}class qw extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Va(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.ue=null}}function og(i,e=null,t=[],s=[],o=null,u=null,h=null){return new Hw(i,e,t,s,o,u,h)}function Fd(i){const e=_e(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>fd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Xu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>co(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>co(s)).join(",")),e.ue=t}return e.ue}function Ud(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Mw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!P_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!sg(i.startAt,e.startAt)&&sg(i.endAt,e.endAt)}function pd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ww(i,e,t,s,o,u,h,p){return new Ua(i,e,t,s,o,u,h,p)}function D_(i){return new Ua(i)}function ag(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function V_(i){return i.collectionGroup!==null}function Sa(i){const e=_e(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Lu(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new Lu(Ct.keyField(),s))}return e.ce}function Yn(i){const e=_e(i);return e.le||(e.le=Kw(e,Sa(i))),e.le}function Kw(i,e){if(i.limitType==="F")return og(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Lu(o.field,u)});const t=i.endAt?new Ou(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ou(i.startAt.position,i.startAt.inclusive):null;return og(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function md(i,e){const t=i.filters.concat([e]);return new Ua(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function gd(i,e,t){return new Ua(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Zu(i,e){return Ud(Yn(i),Yn(e))&&i.limitType===e.limitType}function x_(i){return`${Fd(Yn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>k_(o)).join(", ")}]`),Xu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>co(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>co(o)).join(",")),`Target(${s})`}(Yn(i))}; limitType=${i.limitType})`}function ec(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Sa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const v=ig(h,p,g);return h.inclusive?v<=0:v<0}(s.startAt,Sa(s),o)||s.endAt&&!function(h,p,g){const v=ig(h,p,g);return h.inclusive?v>=0:v>0}(s.endAt,Sa(s),o))}(i,e)}function Gw(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function O_(i){return(e,t)=>{let s=!1;for(const o of Sa(i)){const u=Qw(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Qw(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,p){const g=h.data.field(u),v=p.data.field(u);return g!==null&&v!==null?uo(g,v):me()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return T_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new Je(ue.comparator);function Ar(){return Yw}const L_=new Je(ue.comparator);function wa(...i){let e=L_;for(const t of i)e=e.insert(t.key,t);return e}function M_(i){let e=L_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qi(){return Aa()}function b_(){return Aa()}function Aa(){return new ns(i=>i.toString(),(i,e)=>i.isEqual(e))}const Xw=new Je(ue.comparator),Jw=new mt(ue.comparator);function Ce(...i){let e=Jw;for(const t of i)e=e.add(t);return e}const Zw=new mt(ke);function eT(){return Zw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function F_(i){return{integerValue:""+i}}function tT(i,e){return kw(e)?F_(e):jd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this._=void 0}}function nT(i,e,t){return i instanceof Mu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Md(u)&&(u=Ju(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof xa?j_(i,e):i instanceof Oa?z_(i,e):function(o,u){const h=U_(o,u),p=lg(h)+lg(o.Pe);return dd(h)&&dd(o.Pe)?F_(p):jd(o.serializer,p)}(i,e)}function rT(i,e,t){return i instanceof xa?j_(i,e):i instanceof Oa?z_(i,e):t}function U_(i,e){return i instanceof bu?function(s){return dd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Mu extends tc{}class xa extends tc{constructor(e){super(),this.elements=e}}function j_(i,e){const t=B_(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Oa extends tc{constructor(e){super(),this.elements=e}}function z_(i,e){let t=B_(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class bu extends tc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lg(i){return it(i.integerValue||i.doubleValue)}function B_(i){return bd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function iT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof xa&&o instanceof xa||s instanceof Oa&&o instanceof Oa?lo(s.elements,o.elements,er):s instanceof bu&&o instanceof bu?er(s.Pe,o.Pe):s instanceof Mu&&o instanceof Mu}(i.transform,e.transform)}class sT{constructor(e,t){this.version=e,this.transformResults=t}}class Ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class nc{}function $_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new zd(i.key,Ln.none()):new ja(i.key,i.data,Ln.none());{const t=i.data,s=Zt.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new gi(i.key,s,new ln(o.toArray()),Ln.none())}}function oT(i,e,t){i instanceof ja?function(o,u,h){const p=o.value.clone(),g=cg(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):i instanceof gi?function(o,u,h){if(!Iu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=cg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(q_(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ra(i,e,t,s){return i instanceof ja?function(u,h,p,g){if(!Iu(u.precondition,h))return p;const v=u.value.clone(),w=hg(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof gi?function(u,h,p,g){if(!Iu(u.precondition,h))return p;const v=hg(u.fieldTransforms,g,h),w=h.data;return w.setAll(q_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,p){return Iu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(i,e,t)}function aT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=U_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function ug(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,(u,h)=>iT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ja extends nc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gi extends nc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function q_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function cg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,rT(h,p,t[o]))}return s}function hg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,nT(u,h,e))}return s}class zd extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lT extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&oT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=b_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=$_(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ge.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(t,s)=>ug(t,s))&&lo(this.baseMutations,e.baseMutations,(t,s)=>ug(t,s))}}class Bd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return Xw}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Bd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ve;function dT(i){switch(i){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function H_(i){if(i===void 0)return Sr("GRPC error has no .code"),$.UNKNOWN;switch(i){case at.OK:return $.OK;case at.CANCELLED:return $.CANCELLED;case at.UNKNOWN:return $.UNKNOWN;case at.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case at.INTERNAL:return $.INTERNAL;case at.UNAVAILABLE:return $.UNAVAILABLE;case at.UNAUTHENTICATED:return $.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case at.NOT_FOUND:return $.NOT_FOUND;case at.ALREADY_EXISTS:return $.ALREADY_EXISTS;case at.PERMISSION_DENIED:return $.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case at.ABORTED:return $.ABORTED;case at.OUT_OF_RANGE:return $.OUT_OF_RANGE;case at.UNIMPLEMENTED:return $.UNIMPLEMENTED;case at.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(Ve=at||(at={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new Yi([4294967295,4294967295],0);function dg(i){const e=fT().encode(i),t=new p_;return t.update(e),new Uint8Array(t.digest())}function fg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Yi([t,s],0),new Yi([o,u],0)]}class $d{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ta(`Invalid padding: ${t}`);if(s<0)throw new Ta(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Yi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Yi.fromNumber(s)));return o.compare(pT)===1&&(o=new Yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=dg(e),[s,o]=fg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new $d(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.Te===0)return;const t=dg(e),[s,o]=fg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rc(ge.min(),o,new Je(ke),Ar(),Ce())}}class za{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new za(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class W_{constructor(e,t){this.targetId=e,this.me=t}}class K_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class pg{constructor(){this.fe=0,this.ge=mg(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me()}}),new za(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=mg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=mu(),this.Qe=mu(),this.Ke=new Je(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(pd(u))if(s===0){const h=new ue(u.path);this.We(t,h,Ft.newNoDocument(h,ge.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const p=this.Xe(e),g=p?this.et(p,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=di(s).toUint8Array()}catch(g){if(g instanceof I_)return ao("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new $d(h,o,u)}catch(g){return ao(g instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.Te===0?null:p}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const p=this.Ye(h);if(p){if(u.current&&pd(p.target)){const g=new ue(p.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Ft.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let p=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new rc(e,t,this.Ke,this.ke,s);return this.ke=Ar(),this.qe=mu(),this.Qe=mu(),this.Ke=new Je(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new pg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new pg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function mu(){return new Je(ue.comparator)}function mg(){return new Je(ue.comparator)}const gT={asc:"ASCENDING",desc:"DESCENDING"},_T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yT={and:"AND",or:"OR"};class vT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _d(i,e){return i.useProto3Json||Xu(e)?e:{value:e}}function Fu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ET(i,e){return Fu(i,e.toTimestamp())}function Xn(i){return be(!!i),ge.fromTimestamp(function(t){const s=hi(t);return new pt(s.seconds,s.nanos)}(i))}function qd(i,e){return yd(i,e).canonicalString()}function yd(i,e){const t=function(o){return new We(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Q_(i){const e=We.fromString(i);return be(ey(e)),e}function vd(i,e){return qd(i.databaseId,e.path)}function Xh(i,e){const t=Q_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(X_(t))}function Y_(i,e){return qd(i.databaseId,e)}function wT(i){const e=Q_(i);return e.length===4?We.emptyPath():X_(e)}function Ed(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function X_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function gg(i,e,t){return{name:vd(i,e),fields:t.value.mapValue.fields}}function TT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(v){const w=v.code===void 0?$.UNKNOWN:H_(v.code);return new ie(w,v.message||"")}(h);t=new K_(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Xh(i,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):ge.min(),p=new Zt({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,p),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Su(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Xh(i,s.document),u=s.readTime?Xn(s.readTime):ge.min(),h=Ft.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Su([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Xh(i,s.document),u=s.removedTargetIds||[];t=new Su([],u,o,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new hT(o,u),p=s.targetId;t=new W_(p,h)}}return t}function IT(i,e){let t;if(e instanceof ja)t={update:gg(i,e.key,e.value)};else if(e instanceof zd)t={delete:vd(i,e.key)};else if(e instanceof gi)t={update:gg(i,e.key,e.data),updateMask:VT(e.fieldMask)};else{if(!(e instanceof lT))return me();t={verify:vd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Mu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Oa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof bu)return{fieldPath:h.field.canonicalString(),increment:p.Pe};throw me()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:ET(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me()}(i,e.precondition)),t}function ST(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Xn(o.updateTime):Xn(u);return h.isEqual(ge.min())&&(h=Xn(u)),new sT(h,o.transformResults||[])}(t,e))):[]}function AT(i,e){return{documents:[Y_(i,e.path)]}}function RT(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Y_(i,o);const u=function(v){if(v.length!==0)return Z_(Mn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(D){return{field:Zs(D.field),direction:kT(D.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=_d(i,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function CT(i){let e=wT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(A){const D=J_(A);return D instanceof Mn&&C_(D)?D.getFilters():[D]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(D=>function(G){return new Lu(eo(G.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(D))}(t.orderBy));let p=null;t.limit&&(p=function(A){let D;return D=typeof A=="object"?A.value:A,Xu(D)?null:D}(t.limit));let g=null;t.startAt&&(g=function(A){const D=!!A.before,j=A.values||[];return new Ou(j,D)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const D=!A.before,j=A.values||[];return new Ou(j,D)}(t.endAt)),Ww(e,o,h,u,p,"F",g,v)}function PT(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function J_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return lt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(i):i.fieldFilter!==void 0?function(t){return lt.create(eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Mn.create(t.compositeFilter.filters.map(s=>J_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(i):me()}function kT(i){return gT[i]}function NT(i){return _T[i]}function DT(i){return yT[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Ct.fromServerFormat(i.fieldPath)}function Z_(i){return i instanceof lt?function(t){if(t.op==="=="){if(rg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:NT(t.op),value:t.value}}}(i):i instanceof Mn?function(t){const s=t.getFilters().map(o=>Z_(o));return s.length===1?s[0]:{compositeFilter:{op:DT(t.op),filters:s}}}(i):me()}function VT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ey(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,u=ge.min(),h=ge.min(),p=kt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.ht=e}}function OT(i){const e=CT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?gd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.ln=new MT}addToCollectionParentIndex(e,t){return this.ln.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(ci.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class MT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ho(0)}static Qn(){return new ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class bT{constructor(e){this.Gn=e,this.buffer=new mt(yg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _o(t)}await this.Yn(3e5)})}}class UT{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Yu.oe);const s=new bT(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(_g)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_g):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,p,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,p=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),Xs()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function jT(i,e){return new UT(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ra(s.mutation,o,ln.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Qi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=wa();return u.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Ar();const h=Aa(),p=function(){return Aa()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof gi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ra(w.mutation,v,w.mutation.getFieldMask(),pt.now())):h.set(v.key,ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var A;return p.set(v,new BT(w,(A=h.get(v))!==null&&A!==void 0?A:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Aa();let o=new Je((h,p)=>h-p),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||ln.empty();w=p.applyToLocalView(v,w),s.set(g,w);const A=(o.get(p.batchId)||Ce()).add(g);o=o.insert(p.batchId,A)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),v=g.key,w=g.value,A=b_();w.forEach(D=>{if(!u.has(D)){const j=$_(t.get(D),s.get(D));j!==null&&A.set(D,j),u=u.add(D)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):V_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(Qi());let p=-1,g=u;return h.next(v=>z.forEach(v,(w,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(D=>{g=g.insert(w,D)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Ce())).next(w=>({batchId:p,changes:M_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=wa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=wa();return this.indexManager.getCollectionParents(e,u).next(p=>z.forEach(p,g=>{const v=function(A,D){return new Ua(D,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((A,D)=>{h=h.insert(A,D)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))});let p=wa();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Ra(w.mutation,v,ln.empty(),pt.now()),ec(t,v)&&(p=p.insert(g,v))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return z.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:OT(o.bundledQuery),readTime:Xn(o.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.overlays=new Je(ue.comparator),this.Er=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=Qi(),u=t.length+1,h=new ue(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Qi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Qi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>p.set(v,w)),!(p.size()>=o)););return z.resolve(p)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new cT(t,s));let u=this.Er.get(t);u===void 0&&(u=Ce(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.dr=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ue(new We([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ue(new We([])),s=new wt(t,e),o=new wt(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ue.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new uT(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.vr=this.vr.add(new wt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const p=this.Cr(h.br);u.push(p)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(ke);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],p=>{s=s.add(p.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ue(u),0);let p=new mt(ke);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(p=p.add(g.br)),!0)},h),z.resolve(this.Mr(p))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.Nr=e,this.docs=function(){return new Je(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,p=new ue(h.child("")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||Aw(Sw(w),s)<=0||(o.has(w.key)||ec(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me()}Lr(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new QT(this)}getSize(e){return z.resolve(this.size)}}class QT extends zT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.persistence=e,this.Br=new ns(t=>Fd(t),Ud),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new Hd,this.targetCount=0,this.Qr=ho.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),z.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ho(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Un(t),z.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Yu(0),this.Ur=!1,this.Ur=!0,this.Wr=new WT,this.referenceDelegate=e(this),this.Gr=new YT(this),this.indexManager=new LT,this.remoteDocumentCache=function(o){return new GT(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new xT(t),this.jr=new qT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new KT(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new XT(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class XT extends Cw{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Zr=new Hd,this.Xr=null}static ei(e){return new Wd(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),z.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const o=ue.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,ge.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return z.or([()=>z.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Uu{constructor(e,t){this.persistence=e,this.ri=new ns(s=>Nw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=jT(this,t)}static ei(e,t){return new Uu(e,t)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return z.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(p=>{p||(s++,u.removeEntry(h,ge.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wu(e.data.value)),t}ir(e,t,s){return z.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Kd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Q0()?8:Pw(Ut())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new JT;return this.ts(e,t,h).next(p=>{if(u.result=p,this.Hi)return this.ns(e,t,h,p.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Xs()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(Xs()<=Re.DEBUG&&te("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Xs()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):z.resolve())}Xi(e,t){if(ag(t))return z.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=gd(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,p);return this.ss(t,v,h,g.readTime)?this.Xi(e,gd(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return ag(t)||o.isEqual(ge.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?z.resolve(null):(Xs()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.os(e,h,t,Iw(o,-1)).next(p=>p))})}rs(e,t){let s=new mt(O_(e));return t.forEach((o,u)=>{ec(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Xs()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Js(t)),this.Zi.getDocumentsMatchingQuery(e,t,ci.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(ke),this.cs=new ns(u=>Fd(u),Ud),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $T(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function tI(i,e,t,s){return new eI(i,e,t,s)}async function ny(i,e){const t=_e(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let g=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){p.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:p}))})})}function nI(i,e){const t=_e(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(p,g,v,w){const A=v.batch,D=A.keys();let j=z.resolve();return D.forEach(G=>{j=j.next(()=>w.getEntry(g,G)).next(Q=>{const H=v.docVersions.get(G);be(H!==null),Q.version.compareTo(H)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))})}),j.next(()=>p.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Ce();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(g=g.add(p.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function ry(i){const e=_e(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function rI(i,e){const t=_e(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const p=[];e.targetChanges.forEach((w,A)=>{const D=o.get(A);if(!D)return;p.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,A).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,A)));let j=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(kt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),function(Q,H,Ee){return Q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=3e8?!0:Ee.addedDocuments.size+Ee.modifiedDocuments.size+Ee.removedDocuments.size>0}(D,j,w)&&p.push(t.Gr.updateTargetData(u,j))});let g=Ar(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),p.push(iI(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.Es})),!s.isEqual(ge.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(A=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(w)}return z.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function iI(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ar();return t.forEach((p,g)=>{const v=u.get(p);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ge.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):te("LocalStore","Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",g.version)}),{Is:h,Es:o}})}function sI(i,e){const t=_e(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oI(i,e){const t=_e(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function wd(i,e,t){const s=_e(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!yo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function vg(i,e,t){const s=_e(i);let o=ge.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const A=_e(g),D=A.cs.get(w);return D!==void 0?z.resolve(A.us.get(D)):A.Gr.getTargetData(v,w)}(s,h,Yn(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,p.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:ge.min(),t?u:Ce())).next(p=>(aI(s,Gw(e),p),{documents:p,ds:u})))}function aI(i,e,t){let s=i.ls.get(e)||ge.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Eg{constructor(){this.activeTargetIds=eT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lI{constructor(){this._o=new Eg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Eg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu=null;function Jh(){return gu===null?gu=function(){return 268435456+Math.round(2147483648*Math.random())}():gu++,"0x"+gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class dI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const p=Jh(),g=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${p}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,g,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${p}: `,w),w),w=>{throw ao("RestConnection",`RPC '${t}' ${p} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,p){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=cI[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=Jh();return new Promise((h,p)=>{const g=new m_;g.setWithCredentials(!0),g.listenOnce(g_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Eu.NO_ERROR:const w=g.getResponseJson();te(Mt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case Eu.TIMEOUT:te(Mt,`RPC '${e}' ${u} timed out`),p(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const A=g.getStatus();if(te(Mt,`RPC '${e}' ${u} failed with status:`,A,"response text:",g.getResponseText()),A>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D==null?void 0:D.error;if(j&&j.status&&j.message){const G=function(H){const Ee=H.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(Ee)>=0?Ee:$.UNKNOWN}(j.status);p(new ie(G,j.message))}else p(new ie($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ie($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(Mt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(Mt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Jh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=v_(),p=y_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);let D=!1,j=!1;const G=new hI({Eo:H=>{j?te(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(D||(te(Mt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),D=!0),te(Mt,`RPC '${e}' stream ${o} sending:`,H),A.send(H))},Ao:()=>A.close()}),Q=(H,Ee,ve)=>{H.listen(Ee,ye=>{try{ve(ye)}catch(Te){setTimeout(()=>{throw Te},0)}})};return Q(A,Ea.EventType.OPEN,()=>{j||(te(Mt,`RPC '${e}' stream ${o} transport opened.`),G.So())}),Q(A,Ea.EventType.CLOSE,()=>{j||(j=!0,te(Mt,`RPC '${e}' stream ${o} transport closed`),G.Do())}),Q(A,Ea.EventType.ERROR,H=>{j||(j=!0,ao(Mt,`RPC '${e}' stream ${o} transport errored:`,H),G.Do(new ie($.UNAVAILABLE,"The operation could not be completed")))}),Q(A,Ea.EventType.MESSAGE,H=>{var Ee;if(!j){const ve=H.data[0];be(!!ve);const ye=ve,Te=(ye==null?void 0:ye.error)||((Ee=ye[0])===null||Ee===void 0?void 0:Ee.error);if(Te){te(Mt,`RPC '${e}' stream ${o} received error:`,Te);const Ke=Te.status;let Ae=function(R){const P=at[R];if(P!==void 0)return H_(P)}(Ke),N=Te.message;Ae===void 0&&(Ae=$.INTERNAL,N="Unknown error status: "+Ke+" with message "+Te.message),j=!0,G.Do(new ie(Ae,N)),A.close()}else te(Mt,`RPC '${e}' stream ${o} received:`,ve),G.vo(ve)}}),Q(p,__.STAT_EVENT,H=>{H.stat===cd.PROXY?te(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===cd.NOPROXY&&te(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{G.bo()},0),G}}function Zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(i){return new vT(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,s,o,u,h,p,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new iy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fI extends sy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=TT(this.serializer,e),s=function(u){if(!("targetChange"in u))return ge.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ge.min():h.readTime?Xn(h.readTime):ge.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Ed(this.serializer),t.addTarget=function(u,h){let p;const g=h.target;if(p=pd(g)?{documents:AT(u,g)}:{query:RT(u,g).ct},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=G_(u,h.resumeToken);const v=_d(u,h.expectedCount);v!==null&&(p.expectedCount=v)}else if(h.snapshotVersion.compareTo(ge.min())>0){p.readTime=Fu(u,h.snapshotVersion.toTimestamp());const v=_d(u,h.expectedCount);v!==null&&(p.expectedCount=v)}return p}(this.serializer,e);const s=PT(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Ed(this.serializer),t.removeTarget=e,this.c_(t)}}class pI extends sy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=ST(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Ed(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>IT(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,yd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.ko(e,yd(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class gI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Sr(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{rs(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=_e(g);v.k_.add(4),await Ba(v),v.K_.set("Unknown"),v.k_.delete(4),await sc(v)}(this))})}),this.K_=new gI(s,o)}}async function sc(i){if(rs(i))for(const e of i.q_)await e(!0)}async function Ba(i){for(const e of i.q_)await e(!1)}function oy(i,e){const t=_e(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Xd(t)?Yd(t):vo(t).s_()&&Qd(t,e))}function Gd(i,e){const t=_e(i),s=vo(t);t.B_.delete(e),s.s_()&&ay(t,e),t.B_.size===0&&(s.s_()?s.a_():rs(t)&&t.K_.set("Unknown"))}function Qd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vo(i).V_(e)}function ay(i,e){i.U_.xe(e),vo(i).m_(e)}function Yd(i){i.U_=new mT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),vo(i).start(),i.K_.F_()}function Xd(i){return rs(i)&&!vo(i).i_()&&i.B_.size>0}function rs(i){return _e(i).k_.size===0}function ly(i){i.U_=void 0}async function yI(i){i.K_.set("Online")}async function vI(i){i.B_.forEach((e,t)=>{Qd(i,e)})}async function EI(i,e){ly(i),Xd(i)?(i.K_.O_(e),Yd(i)):i.K_.set("Unknown")}async function wI(i,e,t){if(i.K_.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.B_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.B_.delete(p),o.U_.removeTarget(p))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ju(i,s)}else if(e instanceof Su?i.U_.$e(e):e instanceof W_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(ge.min()))try{const s=await ry(i.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.U_.it(h);return p.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(g.resumeToken,h))}}),p.targetMismatches.forEach((g,v)=>{const w=u.B_.get(g);if(!w)return;u.B_.set(g,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),ay(u,g);const A=new ii(w.target,g,v,w.sequenceNumber);Qd(u,A)}),u.remoteSyncer.applyRemoteEvent(p)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await ju(i,s)}}async function ju(i,e,t){if(!yo(e))throw e;i.k_.add(1),await Ba(i),i.K_.set("Offline"),t||(t=()=>ry(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await sc(i)})}function uy(i,e){return e().catch(t=>ju(i,t,e))}async function oc(i){const e=_e(i),t=pi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;TI(e);)try{const o=await sI(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,II(e,o)}catch(o){await ju(e,o)}cy(e)&&hy(e)}function TI(i){return rs(i)&&i.L_.length<10}function II(i,e){i.L_.push(e);const t=pi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function cy(i){return rs(i)&&!pi(i).i_()&&i.L_.length>0}function hy(i){pi(i).start()}async function SI(i){pi(i).w_()}async function AI(i){const e=pi(i);for(const t of i.L_)e.g_(t.mutations)}async function RI(i,e,t){const s=i.L_.shift(),o=Bd.from(s,e,t);await uy(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await oc(i)}async function CI(i,e){e&&pi(i).f_&&await async function(s,o){if(function(h){return dT(h)&&h!==$.ABORTED}(o.code)){const u=s.L_.shift();pi(s).__(),await uy(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await oc(s)}}(i,e),cy(i)&&hy(i)}async function Tg(i,e){const t=_e(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=rs(t);t.k_.add(3),await Ba(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await sc(t)}async function PI(i,e){const t=_e(i);e?(t.k_.delete(2),await sc(t)):e||(t.k_.add(2),await Ba(t),t.K_.set("Unknown"))}function vo(i){return i.W_||(i.W_=function(t,s,o){const u=_e(t);return u.b_(),new fI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:yI.bind(null,i),mo:vI.bind(null,i),po:EI.bind(null,i),R_:wI.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Xd(i)?Yd(i):i.K_.set("Unknown")):(await i.W_.stop(),ly(i))})),i.W_}function pi(i){return i.G_||(i.G_=function(t,s,o){const u=_e(t);return u.b_(),new pI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:SI.bind(null,i),po:CI.bind(null,i),p_:AI.bind(null,i),y_:RI.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await oc(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new Jd(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zd(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),yo(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=wa(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.z_=new Je(ue.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class fo{constructor(e,t,s,o,u,h,p,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new fo(e,t,no.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class NI{constructor(){this.queries=Sg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=_e(t),u=o.queries;o.queries=Sg(),u.forEach((h,p)=>{for(const g of p.J_)g.onError(s)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function Sg(){return new ns(i=>x_(i),Zu)}async function DI(i,e){const t=_e(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new kI,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Zd(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&ef(t)}async function VI(i,e){const t=_e(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function xI(i,e){const t=_e(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.J_)p.ta(o)&&(s=!0);h.H_=o}}s&&ef(t)}function OI(i,e,t){const s=_e(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function ef(i){i.X_.forEach(e=>{e.next()})}var Td,Ag;(Ag=Td||(Td={})).na="default",Ag.Cache="cache";class LI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new fo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Td.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.key=e}}class fy{constructor(e){this.key=e}}class MI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=O_(e),this.ma=new no(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Ig,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,A)=>{const D=o.get(w),j=ec(this.query,A)?A:null,G=!!D&&this.mutatedKeys.has(D.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let H=!1;D&&j?D.data.isEqual(j.data)?G!==Q&&(s.track({type:3,doc:j}),H=!0):this.ya(D,j)||(s.track({type:2,doc:j}),H=!0,(g&&this.Va(j,g)>0||v&&this.Va(j,v)<0)&&(p=!0)):!D&&j?(s.track({type:0,doc:j}),H=!0):D&&!j&&(s.track({type:1,doc:D}),H=!0,(g||v)&&(p=!0)),H&&(j?(h=h.add(j),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:p,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,A)=>function(j,G){const Q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return Q(j)-Q(G)}(w.type,A.type)||this.Va(w.doc,A.doc)),this.wa(s),o=o!=null&&o;const p=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new fo(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:p}:{ba:p}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ig,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new fy(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new dy(s))}),t}va(e){this.da=e.ds,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return fo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class bI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class FI{constructor(e){this.key=e,this.Fa=!1}}class UI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ns(p=>x_(p),Zu),this.Oa=new Map,this.Na=new Set,this.La=new Je(ue.comparator),this.Ba=new Map,this.ka=new Hd,this.qa={},this.Qa=new Map,this.Ka=ho.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function jI(i,e,t=!0){const s=vy(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await py(s,e,t,!0),o}async function zI(i,e){const t=vy(i);await py(t,e,!0,!1)}async function py(i,e,t,s){const o=await oI(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await BI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&oy(i.remoteStore,o),p}async function BI(i,e,t,s,o){i.Ua=(A,D,j)=>async function(Q,H,Ee,ve){let ye=H.view.ga(Ee);ye.ss&&(ye=await vg(Q.localStore,H.query,!1).then(({documents:N})=>H.view.ga(N,ye)));const Te=ve&&ve.targetChanges.get(H.targetId),Ke=ve&&ve.targetMismatches.get(H.targetId)!=null,Ae=H.view.applyChanges(ye,Q.isPrimaryClient,Te,Ke);return Cg(Q,H.targetId,Ae.ba),Ae.snapshot}(i,A,D,j);const u=await vg(i.localStore,e,!0),h=new MI(e,u.ds),p=h.ga(u.documents),g=za.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(p,i.isPrimaryClient,g);Cg(i,t,v.ba);const w=new bI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function $I(i,e,t){const s=_e(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Zu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await wd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gd(s.remoteStore,o.targetId),Id(s,o.targetId)}).catch(_o)):(Id(s,o.targetId),await wd(s.localStore,o.targetId,!0))}async function qI(i,e){const t=_e(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gd(t.remoteStore,s.targetId))}async function HI(i,e,t){const s=JI(i);try{const o=await function(h,p){const g=_e(h),v=pt.now(),w=p.reduce((j,G)=>j.add(G.key),Ce());let A,D;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let G=Ar(),Q=Ce();return g.hs.getEntries(j,w).next(H=>{G=H,G.forEach((Ee,ve)=>{ve.isValidDocument()||(Q=Q.add(Ee))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,G)).next(H=>{A=H;const Ee=[];for(const ve of p){const ye=aT(ve,A.get(ve.key).overlayedDocument);ye!=null&&Ee.push(new gi(ve.key,ye,S_(ye.value.mapValue),Ln.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,Ee,p)}).next(H=>{D=H;const Ee=H.applyToLocalDocumentSet(A,Q);return g.documentOverlayCache.saveOverlays(j,H.batchId,Ee)})}).then(()=>({batchId:D.batchId,changes:M_(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Je(ke)),v=v.insert(p,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await $a(s,o.changes),await oc(s.remoteStore)}catch(o){const u=Zd(o,"Failed to persist write");t.reject(u)}}async function my(i,e){const t=_e(i);try{const s=await rI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await $a(t,s,e)}catch(s){await _o(s)}}function Rg(i,e,t){const s=_e(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const p=h.view.ea(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=_e(h);g.onlineState=p;let v=!1;g.queries.forEach((w,A)=>{for(const D of A.J_)D.ea(p)&&(v=!0)}),v&&ef(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WI(i,e,t){const s=_e(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Je(ue.comparator);h=h.insert(u,Ft.newNoDocument(u,ge.min()));const p=Ce().add(u),g=new rc(ge.min(),new Map,new Je(ke),h,p);await my(s,g),s.La=s.La.remove(u),s.Ba.delete(e),tf(s)}else await wd(s.localStore,e,!1).then(()=>Id(s,e,t)).catch(_o)}async function KI(i,e){const t=_e(i),s=e.batch.batchId;try{const o=await nI(t.localStore,e);_y(t,s,null),gy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $a(t,o)}catch(o){await _o(o)}}async function GI(i,e,t){const s=_e(i);try{const o=await function(h,p){const g=_e(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,p).next(A=>(be(A!==null),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);_y(s,e,t),gy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $a(s,o)}catch(o){await _o(o)}}function gy(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function _y(i,e,t){const s=_e(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Id(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||yy(i,s)})}function yy(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Gd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),tf(i))}function Cg(i,e,t){for(const s of t)s instanceof dy?(i.ka.addReference(s.key,e),QI(i,s)):s instanceof fy?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||yy(i,s.key)):me()}function QI(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),tf(i))}function tf(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new ue(We.fromString(e)),s=i.Ka.next();i.Ba.set(s,new FI(t)),i.La=i.La.insert(t,s),oy(i.remoteStore,new ii(Yn(D_(t.path)),s,"TargetPurposeLimboResolution",Yu.oe))}}async function $a(i,e,t){const s=_e(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((p,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Kd.zi(g.targetId,v);u.push(A)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=_e(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>z.forEach(v,D=>z.forEach(D.Wi,j=>w.persistence.referenceDelegate.addReference(A,D.targetId,j)).next(()=>z.forEach(D.Gi,j=>w.persistence.referenceDelegate.removeReference(A,D.targetId,j)))))}catch(A){if(!yo(A))throw A;te("LocalStore","Failed to update sequence numbers: "+A)}for(const A of v){const D=A.targetId;if(!A.fromCache){const j=w.us.get(D),G=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(G);w.us=w.us.insert(D,Q)}}}(s.localStore,u))}async function YI(i,e){const t=_e(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await ny(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(p=>{p.forEach(g=>{g.reject(new ie($.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $a(t,s.Ts)}}function XI(i,e){const t=_e(i),s=t.Ba.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const p=t.xa.get(h);o=o.unionWith(p.view.fa)}return o}}function vy(i){const e=_e(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=my.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WI.bind(null,e),e.Ma.R_=xI.bind(null,e.eventManager),e.Ma.Wa=OI.bind(null,e.eventManager),e}function JI(i){const e=_e(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GI.bind(null,e),e}class zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return tI(this.persistence,new ZT,e.initialUser,this.serializer)}ja(e){return new ty(Wd.ei,this.serializer)}za(e){return new lI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zu.provider={build:()=>new zu};class ZI extends zu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Uu);const s=this.persistence.referenceDelegate.garbageCollector;return new FT(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new ty(s=>Uu.ei(s,t),this.serializer)}}class Sd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YI.bind(null,this.syncEngine),await PI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NI}()}createDatastore(e){const t=ic(e.databaseInfo.databaseId),s=function(u){return new dI(u)}(e.databaseInfo);return function(u,h,p,g){return new mI(u,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new _I(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>Rg(this.syncEngine,t,0),function(){return wg.p()?new wg:new uI}())}createSyncEngine(e,t){return function(o,u,h,p,g,v,w){const A=new UI(o,u,h,p,g,v);return w&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=_e(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ba(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Sd.provider={build:()=>new Sd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=w_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Zd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ed(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await ny(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Pg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await nS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Tg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Tg(e.remoteStore,o)),i._onlineComponents=e}async function nS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await ed(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ao("Error using user provided cache. Falling back to memory cache: "+t),await ed(i,new zu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await ed(i,new ZI(void 0));return i._offlineComponents}async function Ey(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Pg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Pg(i,new Sd))),i._onlineComponents}function rS(i){return Ey(i).then(e=>e.syncEngine)}async function iS(i){const e=await Ey(i),t=e.eventManager;return t.onListen=jI.bind(null,e.syncEngine),t.onUnlisten=$I.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qI.bind(null,e.syncEngine),t}function sS(i,e,t={}){const s=new li;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,p,g,v){const w=new eS({next:D=>{w.eu(),h.enqueueAndForget(()=>VI(u,A)),D.fromCache&&g.source==="server"?v.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(D)},error:D=>v.reject(D)}),A=new LI(p,w,{includeMetadataChanges:!0,ua:!0});return DI(u,A)}(await iS(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function oS(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ng(i){if(!ue.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Dg(i){if(ue.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ac(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me()}function Zi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ac(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pw;switch(s.type){case"firstParty":return new yw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=kg.get(t);s&&(te("ComponentProvider","Removing Datastore"),kg.delete(t),s.terminate())}(this),Promise.resolve()}}function aS(i,e,t,s={}){var o;const u=(i=Zi(i,lc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=bt.MOCK_USER;else{p=B0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new bt(v)}i._authCredentials=new mw(new E_(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Eo(this.firestore,e,this._query)}}class un{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class ui extends Eo{constructor(e,t,s){super(e,t,D_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new ue(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function xg(i,e,...t){if(i=Pt(i),Ty("collection","path",e),i instanceof lc){const s=We.fromString(e,...t);return Dg(s),new ui(i,null,s)}{if(!(i instanceof un||i instanceof ui))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Dg(s),new ui(i.firestore,null,s)}}function Ad(i,e,...t){if(i=Pt(i),arguments.length===1&&(e=w_.newId()),Ty("doc","path",e),i instanceof lc){const s=We.fromString(e,...t);return Ng(s),new un(i,null,new ue(s))}{if(!(i instanceof un||i instanceof ui))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Ng(s),new un(i.firestore,i instanceof ui?i.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new iy(this,"async_queue_retry"),this.fu=()=>{const s=Zh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new li;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Jd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class qa extends lc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Og,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Og(e),this._firestoreClient=void 0,await e}}}function lS(i,e){const t=typeof i=="object"?i:h_(),s=typeof i=="string"?i:"(default)",o=Od(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=j0("firestore");u&&aS(o,...u)}return o}function Iy(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||uS(i),i._firestoreClient}function uS(i){var e,t,s;const o=i._freezeSettings(),u=function(p,g,v,w){return new xw(p,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,wy(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new tS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(kt.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new po(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^__.*__$/;class hS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new gi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ja(e,this.data,t,this.fieldTransforms)}}class Sy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new gi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ay(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class of{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Bu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ay(this.Mu)&&cS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class dS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ic(e)}$u(e,t,s,o=!1){return new of({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function af(i){const e=i._freezeSettings(),t=ic(i._databaseId);return new dS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function fS(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);lf("Data must be an object, but it was:",h,s);const p=Ry(s,h);let g,v;if(u.merge)g=new ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const D=Rd(e,A,t);if(!h.contains(D))throw new ie($.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);Py(w,D)||w.push(D)}g=new ln(w),v=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,v=h.fieldTransforms;return new hS(new Zt(p),g,v)}class cc extends nf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}function pS(i,e,t,s){const o=i.$u(1,e,t);lf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();mi(s,(g,v)=>{const w=uf(e,g,t);v=Pt(v);const A=o.Bu(w);if(v instanceof cc)u.push(w);else{const D=Ha(v,A);D!=null&&(u.push(w),h.set(w,D))}});const p=new ln(u);return new Sy(h,p,o.fieldTransforms)}function mS(i,e,t,s,o,u){const h=i.$u(1,e,t),p=[Rd(e,s,t)],g=[o];if(u.length%2!=0)throw new ie($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)p.push(Rd(e,u[D])),g.push(u[D+1]);const v=[],w=Zt.empty();for(let D=p.length-1;D>=0;--D)if(!Py(v,p[D])){const j=p[D];let G=g[D];G=Pt(G);const Q=h.Bu(j);if(G instanceof cc)v.push(j);else{const H=Ha(G,Q);H!=null&&(v.push(j),w.set(j,H))}}const A=new ln(v);return new Sy(w,A,h.fieldTransforms)}function gS(i,e,t,s=!1){return Ha(t,i.$u(s?4:3,e))}function Ha(i,e){if(Cy(i=Pt(i)))return lf("Unsupported field value:",e,i),Ry(i,e);if(i instanceof nf)return function(s,o){if(!Ay(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let g=Ha(p,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return tT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Fu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fu(o.serializer,u)}}if(s instanceof rf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof po)return{bytesValue:G_(o.serializer,s._byteString)};if(s instanceof un){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:qd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sf)return function(h,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.qu("VectorValues must only contain numeric values.");return jd(p.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${ac(s)}`)}(i,e)}function Ry(i,e){const t={};return T_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(i,(s,o)=>{const u=Ha(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Cy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof rf||i instanceof po||i instanceof un||i instanceof nf||i instanceof sf)}function lf(i,e,t){if(!Cy(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=ac(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function Rd(i,e,t){if((e=Pt(e))instanceof uc)return e._internalPath;if(typeof e=="string")return uf(i,e);throw Bu("Field path arguments must be of type string or ",i,!1,void 0,t)}const _S=new RegExp("[~\\*/\\[\\]]");function uf(i,e,t){if(e.search(_S)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new uc(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Bu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie($.INVALID_ARGUMENT,p+i+g)}function Py(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yS extends ky{data(){return super.data()}}function cf(i,e){return typeof e=="string"?uf(i,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class ES extends hf{}function wS(i,e,...t){let s=[];e instanceof hf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof df).length,p=u.filter(g=>g instanceof hc).length;if(h>1||h>0&&p>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class hc extends ES{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new hc(e,t,s)}_apply(e){const t=this._parse(e);return Ny(e._query,t),new Eo(e.firestore,e.converter,md(e._query,t))}_parse(e){const t=af(e.firestore);return function(u,h,p,g,v,w,A){let D;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Mg(A,w);const j=[];for(const G of A)j.push(Lg(g,u,G));D={arrayValue:{values:j}}}else D=Lg(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Mg(A,w),D=gS(p,h,A,w==="in"||w==="not-in");return lt.create(v,w,D)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function TS(i,e,t){const s=e,o=cf("where",i);return hc._create(o,s,t)}class df extends hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new df(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Mn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const g of p)Ny(h,g),h=md(h,g)}(e._query,t),new Eo(e.firestore,e.converter,md(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lg(i,e,t){if(typeof(t=Pt(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V_(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!ue.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tg(i,new ue(s))}if(t instanceof un)return tg(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(t)}.`)}function Mg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(i,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IS{convertValue(e,t="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return mi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new sf(u)}convertGeoPoint(e){return new rf(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ju(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const t=hi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);be(ey(s));const o=new Da(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AS extends ky{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Au extends AS{data(e={}){return super.data(e)}}class RS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new _u(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Au(this._firestore,this._userDataWriter,s.key,s,new _u(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const g=new Au(o._firestore,o._userDataWriter,p.doc.key,p.doc,new _u(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new Au(o._firestore,o._userDataWriter,p.doc.key,p.doc,new _u(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return p.type!==0&&(v=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:CS(p.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function CS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class PS extends IS{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,t)}}function kS(i){i=Zi(i,Eo);const e=Zi(i.firestore,qa),t=Iy(e),s=new PS(e);return vS(i._query),sS(t,i._query).then(o=>new RS(e,s,i,o))}function NS(i,e,t,...s){i=Zi(i,un);const o=Zi(i.firestore,qa),u=af(o);let h;return h=typeof(e=Pt(e))=="string"||e instanceof uc?mS(u,"updateDoc",i._key,e,t,s):pS(u,"updateDoc",i._key,e),ff(o,[h.toMutation(i._key,Ln.exists(!0))])}function DS(i){return ff(Zi(i.firestore,qa),[new zd(i._key,Ln.none())])}function VS(i,e){const t=Zi(i.firestore,qa),s=Ad(i),o=SS(i.converter,e);return ff(t,[fS(af(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function ff(i,e){return function(s,o){const u=new li;return s.asyncQueue.enqueueAndForget(async()=>HI(await rS(s),o,u)),u.promise}(Iy(i),e)}(function(e,t=!0){(function(o){go=o})(mo),oo(new Xi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new qa(new gw(s.getProvider("auth-internal")),new Ew(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Da(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ai(Qm,"4.7.5",e),ai(Qm,"4.7.5","esm2017")})();function pf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xS=Dy,Vy=new ba("auth","Firebase",Dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Vd("@firebase/auth");function OS(i,...e){$u.logLevel<=Re.WARN&&$u.warn(`Auth (${mo}): ${i}`,...e)}function Ru(i,...e){$u.logLevel<=Re.ERROR&&$u.error(`Auth (${mo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(i,...e){throw mf(i,...e)}function Jn(i,...e){return mf(i,...e)}function xy(i,e,t){const s=Object.assign(Object.assign({},xS()),{[e]:t});return new ba("auth","Firebase",s).create(e,{appName:i.name})}function Tr(i){return xy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Vy.create(i,...e)}function fe(i,e,...t){if(!i)throw mf(e,...t)}function vr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ru(e),new Error(e)}function Rr(i,e){i||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function LS(){return bg()==="http:"||bg()==="https:"}function bg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||W0()||"connection"in navigator)?navigator.onLine:!0}function bS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=$0()||K0()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Wa(3e4,6e4);function _i(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function yi(i,e,t,s,o={}){return Ly(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Fa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return H0()||(v.referrerPolicy="no-referrer"),Oy.fetch()(My(i,i.config.apiHost,t,p),v)})}async function Ly(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},FS),e);try{const o=new zS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw yu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,v]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw yu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw yu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw yu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw xy(i,w,v);bn(i,w)}}catch(o){if(o instanceof Cr)throw o;bn(i,"network-request-failed",{message:String(o)})}}async function Ka(i,e,t,s,o={}){const u=await yi(i,e,t,s,o);return"mfaPendingCredential"in u&&bn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function My(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?gf(i.config,o):`${i.config.apiScheme}://${o}`}function jS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),US.get())})}}function yu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(i,e,s);return o.customData._tokenResponse=t,o}function Fg(i){return i!==void 0&&i.enterprise!==void 0}class BS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $S(i,e){return yi(i,"GET","/v2/recaptchaConfig",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(i,e){return yi(i,"POST","/v1/accounts:delete",e)}async function by(i,e){return yi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HS(i,e=!1){const t=Pt(i),s=await t.getIdToken(e),o=_f(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ca(td(o.auth_time)),issuedAtTime:Ca(td(o.iat)),expirationTime:Ca(td(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function td(i){return Number(i)*1e3}function _f(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const o=i_(t);return o?JSON.parse(o):(Ru("Failed to decode base64 JWT payload"),null)}catch(o){return Ru("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ug(i){const e=_f(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&WS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function WS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await La(i,by(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Fy(u.providerUserInfo):[],p=QS(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(p!=null&&p.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Pd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,A)}async function GS(i){const e=Pt(i);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Fy(i){return i.map(e=>{var{providerId:t}=e,s=pf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(i,e){const t=await Ly(i,{},async()=>{const s=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=My(i,o,"/v1/token",`key=${u}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Oy.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XS(i,e){return yi(i,"POST","/v2/accounts:revokeToken",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Ug(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await YS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Pd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await La(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return HS(this,e)}reload(){return GS(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await La(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,D=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(p=t.tenantId)!==null&&p!==void 0?p:void 0,H=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Ee=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ve=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:Te,isAnonymous:Ke,providerData:Ae,stsTokenManager:N}=t;fe(ye&&N,e,"internal-error");const I=ro.fromJSON(this.name,N);fe(typeof ye=="string",e,"internal-error"),Zr(A,e.name),Zr(D,e.name),fe(typeof Te=="boolean",e,"internal-error"),fe(typeof Ke=="boolean",e,"internal-error"),Zr(j,e.name),Zr(G,e.name),Zr(Q,e.name),Zr(H,e.name),Zr(Ee,e.name),Zr(ve,e.name);const R=new Er({uid:ye,auth:e,email:D,emailVerified:Te,displayName:A,isAnonymous:Ke,photoURL:G,phoneNumber:j,tenantId:Q,stsTokenManager:I,createdAt:Ee,lastLoginAt:ve});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(P=>Object.assign({},P))),H&&(R._redirectEventId=H),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Er({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Fy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new ro;p.updateFromIdToken(s);const g=new Er({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;function wr(i){Rr(i instanceof Function,"Expected a class definition");let e=jg.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,jg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uy.type="NONE";const zg=Uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(wr(zg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(zg);const h=Cu(s,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(h);if(w){const A=Er._fromJSON(e,w);v!==u&&(p=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new io(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new io(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hy(e))return"Blackberry";if(Wy(e))return"Webos";if(zy(e))return"Safari";if((e.includes("chrome/")||By(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jy(i=Ut()){return/firefox\//i.test(i)}function zy(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function By(i=Ut()){return/crios\//i.test(i)}function $y(i=Ut()){return/iemobile/i.test(i)}function qy(i=Ut()){return/android/i.test(i)}function Hy(i=Ut()){return/blackberry/i.test(i)}function Wy(i=Ut()){return/webos/i.test(i)}function yf(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function JS(i=Ut()){var e;return yf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZS(){return G0()&&document.documentMode===10}function Ky(i=Ut()){return yf(i)||qy(i)||Wy(i)||Hy(i)||/windows phone/i.test(i)||$y(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(i,e=[]){let t;switch(i){case"Browser":t=Bg(Ut());break;case"Worker":t=`${Bg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(i,e={}){return yi(i,"GET","/v2/passwordPolicy",_i(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=6;class r1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:n1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new e1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await by(this,{idToken:e}),s=await Er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Tr(this));const t=e?Pt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t1(this),t=new r1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await XS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function is(i){return Pt(i)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=nE(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function s1(i){dc=i}function Qy(i){return dc.loadJS(i)}function o1(){return dc.recaptchaEnterpriseScript}function a1(){return dc.gapiScript}function l1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class u1{constructor(){this.enterprise=new c1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class c1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const h1="recaptcha-enterprise",Yy="NO_RECAPTCHA";class d1{constructor(e){this.type=h1,this.auth=is(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{$S(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new BS(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{p(g)})})}function o(u,h,p){const g=window.grecaptcha;Fg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(Yy)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&Fg(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=o1();g.length!==0&&(g+=p),Qy(g).then(()=>{o(p,u,h)}).catch(v=>{h(v)})}}).catch(p=>{h(p)})})}}async function qg(i,e,t,s=!1,o=!1){const u=new d1(i);let h;if(o)h=Yy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function kd(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await qg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await qg(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(i,e){const t=Od(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Du(u,e??{}))return o;bn(o,"already-initialized")}return t.initialize({options:e})}function p1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function m1(i,e,t){const s=is(i);fe(s._canInitEmulator,s,"emulator-config-failed"),fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Xy(e),{host:h,port:p}=g1(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),_1()}function Xy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function g1(i){const e=Xy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Hg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Hg(h)}}}function Hg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function _1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function y1(i,e){return yi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(i,e){return Ka(i,"POST","/v1/accounts:signInWithPassword",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,e))}async function w1(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends vf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ma(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kd(e,t,"signInWithPassword",v1);case"emailLink":return E1(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kd(e,s,"signUpPassword",y1);case"emailLink":return w1(e,{idToken:t,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(i,e){return Ka(i,"POST","/v1/accounts:signInWithIdp",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="http://localhost";class es extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=pf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new es(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:T1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S1(i){const e=ya(va(i)).link,t=e?ya(va(e)).deep_link_id:null,s=ya(va(i)).deep_link_id;return(s?ya(va(s)).link:null)||s||t||e||i}class Ef{constructor(e){var t,s,o,u,h,p;const g=ya(va(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=I1((o=g.mode)!==null&&o!==void 0?o:null);fe(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=S1(e);try{return new Ef(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ef.parseLink(t);return fe(s,"argument-error"),Ma._fromEmailAndCode(e,s.code,s.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ga{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ga{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ga{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(i,e){return Ka(i,"POST","/v1/accounts:signUp",_i(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Er._fromIdTokenResponse(e,s,o),h=Wg(s);return new ts({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Wg(s);return new ts({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Wg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function Zy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(i,u,e,s):u})}async function R1(i,e,t=!1){const s=await La(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ts._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(i,e,t=!1){const{auth:s}=i;if(Qn(s.app))return Promise.reject(Tr(s));const o="reauthenticate";try{const u=await La(i,Zy(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=_f(u.idToken);fe(h,s,"internal-error");const{sub:p}=h;return fe(i.uid===p,s,"user-mismatch"),ts._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(i,e,t=!1){if(Qn(i.app))return Promise.reject(Tr(i));const s="signIn",o=await Zy(i,s,e),u=await ts._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function P1(i,e){return ev(is(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(i){const e=is(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function k1(i,e,t){if(Qn(i.app))return Promise.reject(Tr(i));const s=is(i),h=await kd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",A1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&tv(i),g}),p=await ts._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function N1(i,e,t){return Qn(i.app)?Promise.reject(Tr(i)):P1(Pt(i),wo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tv(i),s})}function D1(i,e,t,s){return Pt(i).onIdTokenChanged(e,t,s)}function V1(i,e,t){return Pt(i).beforeAuthStateChanged(e,t)}function x1(i){return Pt(i).signOut()}const Wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=1e3,L1=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ky(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);ZS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,L1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const M1=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iv.type="SESSION";const sv=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async v=>v(t.origin,u)),g=await b1(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const v=wf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const D=A;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(D.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function U1(i){Zn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function j1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function B1(){return ov()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",$1=1,Ku="firebaseLocalStorage",lv="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(i,e){return i.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function q1(){const i=indexedDB.deleteDatabase(av);return new Qa(i).toPromise()}function Nd(){const i=indexedDB.open(av,$1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ku,{keyPath:lv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ku)?e(s):(s.close(),await q1(),e(await Nd()))})})}async function Kg(i,e,t){const s=pc(i,!0).put({[lv]:e,value:t});return new Qa(s).toPromise()}async function H1(i,e){const t=pc(i,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function Gg(i,e){const t=pc(i,!0).delete(e);return new Qa(t).toPromise()}const W1=800,K1=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>K1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(B1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await j1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Kg(e,Wu,"1"),await Gg(e,Wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>H1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=pc(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const G1=uv;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(i,e){return e?wr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Y1(i){return ev(i.auth,new Tf(i),i.bypassAuthState)}function X1(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),C1(t,new Tf(i),i.bypassAuthState)}async function J1(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),R1(t,new Tf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y1;case"linkViaPopup":case"linkViaRedirect":return J1;case"reauthViaPopup":case"reauthViaRedirect":return X1;default:bn(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Wa(2e3,1e4);class to extends cv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Z1.get())};e()}}to.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="pendingRedirect",Pu=new Map;class tA extends cv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const s=await nA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nA(i,e){const t=sA(e),s=iA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function rA(i,e){Pu.set(i._key(),e)}function iA(i){return wr(i._redirectPersistence)}function sA(i){return Cu(eA,i.config.apiKey,i.name)}async function oA(i,e,t=!1){if(Qn(i.app))return Promise.reject(Tr(i));const s=is(i),o=Q1(s,e),h=await new tA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=10*60*1e3;class lA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!hv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function hv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(i,e={}){return yi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dA=/^https?/;async function fA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await cA(i);for(const t of e)try{if(pA(t))return}catch{}bn(i,"unauthorized-domain")}function pA(i){const e=Cd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!dA.test(t))return!1;if(hA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Wa(3e4,6e4);function Yg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function gA(i){return new Promise((e,t)=>{var s,o,u;function h(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),t(Jn(i,"network-request-failed"))},timeout:mA.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const p=l1("iframefcb");return Zn()[p]=()=>{gapi.load?h():t(Jn(i,"network-request-failed"))},Qy(`${a1()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw ku=null,e})}let ku=null;function _A(i){return ku=ku||gA(i),ku}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new Wa(5e3,15e3),vA="__/auth/iframe",EA="emulator/auth/iframe",wA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IA(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?gf(e,EA):`https://${i.config.authDomain}/${vA}`,s={apiKey:e.apiKey,appName:i.name,v:mo},o=TA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Fa(s).slice(1)}`}async function SA(i){const e=await _A(i),t=Zn().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:IA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(i,"network-request-failed"),p=Zn().setTimeout(()=>{u(h)},yA.get());function g(){Zn().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RA=500,CA=600,PA="_blank",kA="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(i,e,t,s=RA,o=CA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},AA),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(p=By(v)?PA:t),jy(v)&&(e=e||kA,g.scrollbars="yes");const w=Object.entries(g).reduce((D,[j,G])=>`${D}${j}=${G},`,"");if(JS(v)&&p!=="_self")return DA(e||"",p),new Xg(null);const A=window.open(e||"",p,w);fe(A,i,"popup-blocked");try{A.focus()}catch{}return new Xg(A)}function DA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="__/auth/handler",xA="emulator/auth/handler",OA=encodeURIComponent("fac");async function Jg(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:mo,eventId:o};if(e instanceof Jy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",tE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Ga){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await i._getAppCheckToken(),v=g?`#${OA}=${encodeURIComponent(g)}`:"";return`${LA(i)}?${Fa(p).slice(1)}${v}`}function LA({config:i}){return i.emulator?gf(i,xA):`https://${i.authDomain}/${VA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="webStorageSupport";class MA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=oA,this._overrideRedirectResult=rA}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Jg(e,t,s,Cd(),o);return NA(e,h,wf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Jg(e,t,s,Cd(),o);return U1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await SA(e),s=new lA(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[nd];h!==void 0&&t(!!h),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ky()||zy()||yf()}}const bA=MA;var Zg="@firebase/auth",e_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jA(i){oo(new Xi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(i)},v=new i1(s,o,u,g);return p1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),oo(new Xi("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new FA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(Zg,e_,UA(i)),ai(Zg,e_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=5*60,BA=a_("authIdTokenMaxAge")||zA;let t_=null;const $A=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>BA)return;const o=t==null?void 0:t.token;t_!==o&&(t_=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function qA(i=h_()){const e=Od(i,"auth");if(e.isInitialized())return e.getImmediate();const t=f1(i,{popupRedirectResolver:bA,persistence:[G1,M1,sv]}),s=a_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=$A(u.toString());V1(t,h,()=>h(t.currentUser)),D1(t,p=>h(p))}}const o=s_("auth");return o&&m1(t,`http://${o}`),t}function HA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}s1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",HA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jA("Browser");const WA={apiKey:"AIzaSyC9qUgcT57rQHjWDyI6q2wh9zFZTwoOzKQ",authDomain:"to-do-list-87b48.firebaseapp.com",projectId:"to-do-list-87b48",storageBucket:"to-do-list-87b48.firebasestorage.app",messagingSenderId:"271235174752",appId:"1:271235174752:web:be13c0386aa56d07618e05",measurementId:"G-7S8JJQB9HX"},dv=c_(WA),vu=lS(dv),Gu=qA(dv),fv=et.createContext(),pv=()=>et.useContext(fv),KA=({children:i})=>{const[e,t]=et.useState(null),[s,o]=et.useState(!0);et.useEffect(()=>Gu.onAuthStateChanged(p=>{t(p),o(!1)}),[]);const u=async()=>{await x1(Gu),t(null)};return ae.jsx(fv.Provider,{value:{currentUser:e,logout:u},children:!s&&i})},GA="_TodoForm_nxgzv_1",QA="_create_nxgzv_39",YA="_h1_nxgzv_49",rd={TodoForm:GA,create:QA,h1:YA};function XA({id:i,value:e,setValue:t}){return ae.jsx("div",{children:ae.jsx("input",{type:"text",placeholder:"Digite o titulo",id:i,onChange:s=>t(s.target.value),value:e})})}function JA({addTodo:i}){const[e,t]=et.useState(""),[s,o]=et.useState(""),[u,h]=et.useState(""),[p,g]=et.useState(["Trabalho","Pessoal","Estudos"]),v=A=>{A.preventDefault(),!(!e||!s)&&(i({text:e,category:s}),t(""),o(""))},w=A=>{A.preventDefault(),u&&!p.includes(u)&&(g([...p,u]),h(""))};return ae.jsxs("div",{id:"todo-form",className:rd.TodoForm,children:[ae.jsx("h1",{className:rd.h1,children:"Criar Tarefa:"}),ae.jsxs("form",{onSubmit:v,children:[ae.jsx(XA,{id:"todo",value:e,setValue:t}),ae.jsxs("select",{name:"selectCategory",id:"selectCategory",onChange:A=>o(A.target.value),value:s,children:[ae.jsx("option",{value:"",children:"Selecione uma categoria"}),p.map((A,D)=>ae.jsx("option",{value:A,children:A},D))]}),ae.jsx("button",{className:rd.create,type:"submit",children:"Criar tarefa"})]}),ae.jsxs("form",{onSubmit:w,children:[ae.jsx("input",{type:"text",placeholder:"Nova Categoria",value:u,onChange:A=>h(A.target.value)}),ae.jsx("button",{type:"submit",children:"Adicionar Categoria"})]})]})}function ZA(){const[i,e]=et.useState([]),{currentUser:t}=pv();return et.useEffect(()=>{t&&(async()=>{const p=wS(xg(vu,"todos"),TS("userId","==",t.uid)),g=await kS(p);e(g.docs.map(v=>({...v.data(),id:v.id})))})()},[t]),{todos:i,addTodo:async h=>{if(!t)return;const p={...h,userId:t.uid,isComplete:!1},g=await VS(xg(vu,"todos"),p);e(v=>[...v,{...p,id:g.id}])},removeTodo:async h=>{await DS(Ad(vu,"todos",h)),e(p=>p.filter(g=>g.id!==h))},completeTodo:async h=>{const p=Ad(vu,"todos",h);await NS(p,{completed:!0}),e(g=>g.map(v=>v.id===h?{...v,completed:!0}:v))}}}const eR="_input_1rn1k_9",tR="_button_1rn1k_21",_a={input:eR,button:tR},nR=({onLoginSuccess:i})=>{const[e,t]=et.useState(""),[s,o]=et.useState(""),[u,h]=et.useState(""),[p,g]=et.useState(""),v=w=>{w.preventDefault(),h(""),g(""),N1(Gu,e,s).then(A=>{console.log("Login bem-sucedido: ",A.user),g("Login bem-sucedido!"),i()}).catch(A=>{let D="";switch(A.code){case"auth/invalid-email":D="Email inválido. Por favor, verifique o endereço de email.";break;case"auth/user-disabled":D="Este usuário foi desativado.";break;case"auth/user-not-found":D="Usuário não encontrado. Verifique o email ou cadastre-se.";break;case"auth/wrong-password":D="Senha incorreta. Por favor, tente novamente.";break;case"auth/invalid-credential":D="Credenciais inválidas. Por favor, verifique os dados inseridos.";break;default:D="Erro de login: "+A.message}h(D),console.error("Erro de login: ",A)})};return ae.jsxs("div",{style:_a,children:[ae.jsx("h2",{children:"Login"}),u&&ae.jsx("p",{style:{color:"red"},children:u}),p&&ae.jsx("p",{style:{color:"green"},children:p}),ae.jsxs("form",{className:_a,onSubmit:v,children:[ae.jsx("input",{className:_a.input,type:"email",value:e,onChange:w=>t(w.target.value),placeholder:"Email",required:!0,autoComplete:"username"}),ae.jsx("input",{className:_a.input,type:"password",value:s,onChange:w=>o(w.target.value),placeholder:"Senha",required:!0,autoComplete:"current-password"}),ae.jsx("button",{className:_a.button,type:"submit",children:"Login"})]})]})},rR="_input_1rn1k_9",iR="_button_1rn1k_21",id={input:rR,button:iR},sR=({onSignupSuccess:i})=>{const[e,t]=et.useState(""),[s,o]=et.useState(""),[u,h]=et.useState(""),[p,g]=et.useState(""),v=w=>{w.preventDefault(),h(""),g(""),k1(Gu,e,s).then(A=>{console.log("Cadastro bem-sucedido: ",A.user),g("Cadastro bem-sucedido!"),i()}).catch(A=>{let D="";switch(A.code){case"auth/email-already-in-use":D="Este email já está registrado. Tente fazer login.";break;case"auth/invalid-email":D="Email inválido. Por favor, verifique o endereço de email.";break;case"auth/weak-password":D="A senha é muito fraca. Por favor, escolha uma senha mais forte.";break;default:D="Erro de cadastro: "+A.message}h(D),console.error("Erro de cadastro: ",A)})};return ae.jsxs("div",{children:[ae.jsx("h2",{children:"Cadastro"}),u&&ae.jsx("p",{style:{color:"red"},children:u}),p&&ae.jsx("p",{style:{color:"green"},children:p}),ae.jsxs("form",{onSubmit:v,children:[ae.jsx("input",{className:id.input,type:"email",value:e,onChange:w=>t(w.target.value),placeholder:"Email",required:!0,autoComplete:"username"}),ae.jsx("input",{className:id.input,type:"password",value:s,onChange:w=>o(w.target.value),placeholder:"Senha",required:!0,autoComplete:"new-password"}),ae.jsx("button",{className:id.button,type:"submit",children:"Cadastrar"})]})]})};function oR(){const{currentUser:i,loading:e,logout:t}=pv(),{todos:s,addTodo:o,removeTodo:u,completeTodo:h}=ZA(),[p,g]=et.useState(!0),[v,w]=et.useState(!1),A=()=>{g(Q=>!Q)},D=()=>{g(!1)},j=()=>{g(!1)};et.useEffect(()=>{e||w(!0)},[e]);const G=async()=>{await t(),g(!0)};return ae.jsxs("div",{className:`app ${v?"loaded":""}`,children:[ae.jsx("div",{className:"logout",children:i&&ae.jsx("button",{onClick:G,className:"logout-btn",children:"Sair"})}),i?ae.jsxs(ae.Fragment,{children:[ae.jsx(JA,{addTodo:o}),s.length>0&&ae.jsx("h2",{children:"Lista de tarefas"}),ae.jsx("div",{className:"todo-list",children:s.map(Q=>ae.jsx(V0,{todo:Q,onRemove:()=>u(Q.id),onComplete:()=>h(Q.id)},Q.id))})]}):ae.jsx(ae.Fragment,{children:p?ae.jsxs(ae.Fragment,{children:[ae.jsx(nR,{onLoginSuccess:D}),ae.jsxs("p",{className:"p",children:["Não tem uma conta?"," ",ae.jsx("button",{onClick:A,children:"Cadastre-se"})]})]}):ae.jsxs(ae.Fragment,{children:[ae.jsx(sR,{onSignupSuccess:j}),ae.jsxs("p",{className:"p",children:["Já tem uma conta?"," ",ae.jsx("button",{onClick:A,children:"Login"})]})]})})]})}A0.createRoot(document.getElementById("root")).render(ae.jsx(KA,{children:ae.jsx(oR,{})}));
