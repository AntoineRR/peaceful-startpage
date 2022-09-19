(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const us="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ds=Yr(us);function Ri(e){return!!e||e===""}function Wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?hs(r):Wr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(J(e))return e}}const ms=/;(?![^(]*\))/g,ps=/:(.+)/;function hs(e){const t={};return e.split(ms).forEach(n=>{if(n){const r=n.split(ps);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Kr(e){let t="";if(te(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Kr(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bt=e=>te(e)?e:e==null?"":R(e)||J(e)&&(e.toString===ji||!L(e.toString))?JSON.stringify(e,Li,2):String(e),Li=(e,t)=>t&&t.__v_isRef?Li(e,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:$i(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!Di(t)?String(t):t,Y={},Ot=[],Oe=()=>{},gs=()=>!1,vs=/^on[^a-z]/,Bn=e=>vs.test(e),qr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bs=Object.prototype.hasOwnProperty,j=(e,t)=>bs.call(e,t),R=Array.isArray,Et=e=>Yn(e)==="[object Map]",$i=e=>Yn(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",Vr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",zi=e=>J(e)&&L(e.then)&&L(e.catch),ji=Object.prototype.toString,Yn=e=>ji.call(e),ys=e=>Yn(e).slice(8,-1),Di=e=>Yn(e)==="[object Object]",Jr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_s=/-(\w)/g,Re=Wn(e=>e.replace(_s,(t,n)=>n?n.toUpperCase():"")),xs=/\B([A-Z])/g,gt=Wn(e=>e.replace(xs,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Wn(e=>e?`on${Kn(e)}`:""),Xt=(e,t)=>!Object.is(e,t),Cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const ws=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class ks{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Te&&(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function As(e,t=Te){t&&t.active&&t.effects.push(e)}const Qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&Ze)>0,Hi=e=>(e.n&Ze)>0,Os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Es=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},br=new WeakMap;let Ut=0,Ze=1;const yr=30;let _e;const dt=Symbol(""),_r=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,As(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Qe=!0,Ze=1<<++Ut,Ut<=yr?Os(this):Ma(this),this.fn()}finally{Ut<=yr&&Es(this),Ze=1<<--Ut,_e=this.parent,Qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qe=!0;const Bi=[];function Ft(){Bi.push(Qe),Qe=!1}function Rt(){const e=Bi.pop();Qe=e===void 0?!0:e}function he(e,t,n){if(Qe&&_e){let r=br.get(e);r||br.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Qr()),Yi(a)}}function Yi(e,t){let n=!1;Ut<=yr?Hi(e)||(e.n|=Ze,n=!Ui(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function je(e,t,n,r,a,i){const o=br.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Jr(n)&&s.push(o.get("length")):(s.push(o.get(dt)),Et(e)&&s.push(o.get(_r)));break;case"delete":R(e)||(s.push(o.get(dt)),Et(e)&&s.push(o.get(_r)));break;case"set":Et(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&xr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);xr(Qr(l))}}function xr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cs=Yr("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),Ps=Zr(),Ss=Zr(!1,!0),Is=Zr(!0),Ra=Ts();function Ts(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=U(this)[t].apply(this,n);return Rt(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?qs:Ji:t?Vi:Xi).get(r))return r;const o=R(r);if(!e&&o&&j(Ra,a))return Reflect.get(Ra,a,i);const s=Reflect.get(r,a,i);return(Vr(a)?Wi.has(a):Cs(a))||(e||he(r,"get",a),t)?s:ie(s)?o&&Jr(a)?s:s.value:J(s)?e?Qi(s):na(s):s}}const Ns=Ki(),Ms=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let o=n[r];if(It(o)&&ie(o)&&!ie(a))return!1;if(!e&&(!Fn(a)&&!It(a)&&(o=U(o),a=U(a)),!R(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=R(n)&&Jr(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Xt(a,o)&&je(n,"set",r,a):je(n,"add",r,a)),l}}function Fs(e,t){const n=j(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&je(e,"delete",t,void 0),r}function Rs(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Wi.has(t))&&he(e,"has",t),n}function Ls(e){return he(e,"iterate",R(e)?"length":dt),Reflect.ownKeys(e)}const qi={get:Ps,set:Ns,deleteProperty:Fs,has:Rs,ownKeys:Ls},$s={get:Is,set(e,t){return!0},deleteProperty(e,t){return!0}},zs=fe({},qi,{get:Ss,set:Ms}),ea=e=>e,qn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=qn(a),s=r?ea:n?aa:Vt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",dt),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return qn(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function $a(e,t){t=U(t);const n=U(this),{has:r,get:a}=qn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Xt(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function za(e){const t=U(this),{has:n,get:r}=qn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&je(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ea:e?aa:Vt;return!e&&he(s,"iterate",dt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=Et(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ea:t?aa:Vt;return!t&&he(i,"iterate",l?_r:dt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function js(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:La,set:$a,delete:za,clear:ja,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:La,set:$a,delete:za,clear:ja,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[Ds,Us,Hs,Bs]=js();function ta(e,t){const n=t?e?Bs:Hs:e?Us:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(j(n,a)&&a in r?n:r,a,i)}const Ys={get:ta(!1,!1)},Ws={get:ta(!1,!0)},Ks={get:ta(!0,!1)},Xi=new WeakMap,Vi=new WeakMap,Ji=new WeakMap,qs=new WeakMap;function Xs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vs(e){return e.__v_skip||!Object.isExtensible(e)?0:Xs(ys(e))}function na(e){return It(e)?e:ra(e,!1,qi,Ys,Xi)}function Js(e){return ra(e,!1,zs,Ws,Vi)}function Qi(e){return ra(e,!0,$s,Ks,Ji)}function ra(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Vs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ct(e){return It(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Fn(e){return!!(e&&e.__v_isShallow)}function Gi(e){return Ct(e)||It(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Zi(e){return Mn(e,"__v_skip",!0),e}const Vt=e=>J(e)?na(e):e,aa=e=>J(e)?Qi(e):e;function eo(e){Qe&&_e&&(e=U(e),Yi(e.dep||(e.dep=Qr())))}function to(e,t){e=U(e),e.dep&&xr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Qs(e){return Gs(e,!1)}function Gs(e,t){return ie(e)?e:new Zs(e,t)}class Zs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Vt(t)}get value(){return eo(this),this._value}set value(t){const n=this.__v_isShallow||Fn(t)||It(t);t=n?t:U(t),Xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vt(t),to(this))}}function el(e){return ie(e)?e.value:e}const tl={get:(e,t,n)=>el(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return Ct(e)?e:new Proxy(e,tl)}var ro;class nl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ro]=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,to(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return eo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ro="__v_isReadonly";function rl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new nl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}al(e,n,a,r)}function al(e,t,n,r=!0){console.error(e)}let Jt=!1,wr=!1;const ae=[];let Me=0;const Pt=[];let ze=null,st=0;const ao=Promise.resolve();let ia=null;function il(e){const t=ia||ao;return e?t.then(this?e.bind(this):e):t}function ol(e){let t=Me+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Qt(ae[r])<e?t=r+1:n=r}return t}function oa(e){(!ae.length||!ae.includes(e,Jt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ae.push(e):ae.splice(ol(e.id),0,e),io())}function io(){!Jt&&!wr&&(wr=!0,ia=ao.then(so))}function sl(e){const t=ae.indexOf(e);t>Me&&ae.splice(t,1)}function ll(e){R(e)?Pt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?st+1:st))&&Pt.push(e),io()}function Da(e,t=Jt?Me+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function oo(e){if(Pt.length){const t=[...new Set(Pt)];if(Pt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Qt(n)-Qt(r)),st=0;st<ze.length;st++)ze[st]();ze=null,st=0}}const Qt=e=>e.id==null?1/0:e.id,fl=(e,t)=>{const n=Qt(e)-Qt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){wr=!1,Jt=!0,ae.sort(fl);const t=Oe;try{for(Me=0;Me<ae.length;Me++){const n=ae[Me];n&&n.active!==!1&&Ge(n,null,14)}}finally{Me=0,ae.length=0,oo(),Jt=!1,ia=null,(ae.length||Pt.length)&&so()}}function cl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||Y;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(vr))}let s,l=r[s=lr(t)]||r[s=lr(Re(t))];!l&&i&&(l=r[s=lr(gt(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=lo(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):fe(o,i),J(e)&&r.set(e,o),o)}function Vn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,gt(t))||j(e,t))}let we=null,Jn=null;function Rn(e){const t=we;return we=e,Jn=e&&e.type.__scopeId||null,t}function fo(e){Jn=e}function co(){Jn=null}function ul(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Rn(t),o=e(...a);return Rn(i),r._d&&Ja(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:M,inheritAttrs:$}=e;let T,y;const E=Rn(e);try{if(n.shapeFlag&4){const z=a||r;T=Ne(d.call(z,z,m,i,k,v,M)),y=l}else{const z=t;T=Ne(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),y=t.props?l:dl(l)}}catch(z){Yt.length=0,Xn(z,e,1),T=Z(Gt)}let F=T;if(y&&$!==!1){const z=Object.keys(y),{shapeFlag:W}=F;z.length&&W&7&&(o&&z.some(qr)&&(y=ml(y,o)),F=Tt(F,y))}return n.dirs&&(F=Tt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,Rn(E),T}const dl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},ml=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Vn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ua(r,o,c):!0:!!o;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Vn(n,i))return!0}return!1}function hl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gl=e=>e.__isSuspense;function vl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):ll(e)}function bl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function cr(e,t,n=!1){const r=ne||we;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Ha={};function Pn(e,t,n){return uo(e,t,n)}function uo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=ne;let l,c=!1,d=!1;if(ie(e)?(l=()=>e.value,c=Fn(e)):Ct(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(y=>Ct(y)||Fn(y)),l=()=>e.map(y=>{if(ie(y))return y.value;if(Ct(y))return ft(y);if(L(y))return Ge(y,s,2)})):L(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ee(e,s,3,[v])}:l=Oe,t&&r){const y=l;l=()=>ft(y())}let m,v=y=>{m=T.onStop=()=>{Ge(y,s,4)}};if(en)return v=Oe,t?n&&Ee(t,s,3,[l(),d?[]:void 0,v]):l(),Oe;let k=d?[]:Ha;const M=()=>{if(!!T.active)if(t){const y=T.run();(r||c||(d?y.some((E,F)=>Xt(E,k[F])):Xt(y,k)))&&(m&&m(),Ee(t,s,3,[y,k===Ha?void 0:k,v]),k=y)}else T.run()};M.allowRecurse=!!t;let $;a==="sync"?$=M:a==="post"?$=()=>me(M,s&&s.suspense):(M.pre=!0,s&&(M.id=s.uid),$=()=>oa(M));const T=new Gr(l,$);return t?n?M():k=T.run():a==="post"?me(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Xr(s.scope.effects,T)}}function yl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?mo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ne;Nt(this);const s=uo(a,i.bind(r),n);return o?Nt(o):mt(),s}function mo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ft(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ft(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if($i(e)||Et(e))e.forEach(n=>{ft(n,t)});else if(Di(e))for(const n in e)ft(e[n],t);return e}function Be(e){return L(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,po=e=>e.type.__isKeepAlive;function _l(e,t){ho(e,"a",t)}function xl(e,t){ho(e,"da",t)}function ho(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)po(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=Qn(t,e,r,!0);vo(()=>{Xr(r[t],a)},n)}function Qn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Nt(n);const s=Ee(t,n,e,o);return mt(),Rt(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=ne)=>(!en||e==="sp")&&Qn(e,t,n),kl=Ye("bm"),go=Ye("m"),Al=Ye("bu"),Ol=Ye("u"),El=Ye("bum"),vo=Ye("um"),Cl=Ye("sp"),Pl=Ye("rtg"),Sl=Ye("rtc");function Il(e,t=ne){Qn("ec",e,t)}function Tl(e,t){const n=we;if(n===null)return e;const r=Zn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Y]=t[i];L(o)&&(o={mounted:o,updated:o}),o.deep&&ft(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ft(),Ee(l,n,8,[e.el,s,e,t]),Rt())}}const bo="components";function yo(e,t){return Ml(bo,e,!0,t)||e}const Nl=Symbol();function Ml(e,t,n=!0,r=!1){const a=we||ne;if(a){const i=a.type;if(e===bo){const s=df(i,!1);if(s&&(s===t||s===Re(t)||s===Kn(Re(t))))return i}const o=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!o&&r?i:o}}function Ba(e,t){return e&&(e[t]||e[Re(t)]||e[Kn(Re(t))])}function Fl(e,t,n,r){let a;const i=n&&n[r];if(R(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const kr=e=>e?So(e)?Zn(e)||e.proxy:kr(e.parent):null,Ln=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=il.bind(e.proxy)),$watch:e=>yl.bind(e)}),Rl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&j(r,t))return o[t]=1,r[t];if(a!==Y&&j(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&j(c,t))return o[t]=3,i[t];if(n!==Y&&j(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Ln[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&j(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,j(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&j(a,t)?(a[t]=n,!0):r!==Y&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&j(e,o)||t!==Y&&j(t,o)||(s=i[0])&&j(s,o)||j(r,o)||j(Ln,o)||j(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ar=!0;function Ll(e){const t=sa(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:M,activated:$,deactivated:T,beforeDestroy:y,beforeUnmount:E,destroyed:F,unmounted:z,render:W,renderTracked:ce,renderTriggered:oe,errorCaptured:Ke,serverPrefetch:re,expose:rt,inheritAttrs:bt,components:$t,directives:cn,filters:Ea}=t;if(c&&$l(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const K=o[Q];L(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);J(Q)&&(e.data=na(Q))}if(Ar=!0,i)for(const Q in i){const K=i[Q],Le=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Oe,ir=!L(K)&&L(K.set)?K.set.bind(n):Oe,zt=ve({get:Le,set:ir});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>zt.value,set:yt=>zt.value=yt})}if(s)for(const Q in s)_o(s[Q],r,n,Q);if(l){const Q=L(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{bl(K,Q[K])})}d&&Ya(d,e,"c");function ue(Q,K){R(K)?K.forEach(Le=>Q(Le.bind(n))):K&&Q(K.bind(n))}if(ue(kl,m),ue(go,v),ue(Al,k),ue(Ol,M),ue(_l,$),ue(xl,T),ue(Il,Ke),ue(Sl,ce),ue(Pl,oe),ue(El,E),ue(vo,z),ue(Cl,re),R(rt))if(rt.length){const Q=e.exposed||(e.exposed={});rt.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:Le=>n[K]=Le})})}else e.exposed||(e.exposed={});W&&e.render===Oe&&(e.render=W),bt!=null&&(e.inheritAttrs=bt),$t&&(e.components=$t),cn&&(e.directives=cn)}function $l(e,t,n=Oe,r=!1){R(e)&&(e=Or(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=cr(i.from||a,i.default,!0):o=cr(i.from||a):o=cr(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ya(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){const a=r.includes(".")?mo(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&Pn(a,i)}else if(L(e))Pn(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>_o(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Pn(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>$n(l,c,o,!0)),$n(l,t,o)),J(t)&&i.set(t,l),l}function $n(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&$n(e,i,n,!0),a&&a.forEach(o=>$n(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=zl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const zl={data:Wa,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ot,directives:ot,watch:Dl,provide:Wa,inject:jl};function Wa(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function jl(e,t){return ot(Or(e),Or(t))}function Or(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?fe(fe(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Ul(e,t,n,r=!1){const a={},i={};Mn(i,Gn,1),e.propsDefaults=Object.create(null),xo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Vn(e.emitsOptions,v))continue;const k=t[v];if(l)if(j(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const M=Re(v);a[M]=Er(l,s,M,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{xo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!j(t,m)&&((d=gt(m))===m||!j(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Er(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!j(t,m)&&!0)&&(delete i[m],c=!0)}c&&je(e,"set","$attrs")}function xo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const c=t[l];let d;a&&j(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Vn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Er(a,l,m,c[m],e,!j(c,m))}}return o}function Er(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=j(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Nt(a),r=c[n]=l.call(null,t),mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===gt(n))&&(r=!0))}return r}function wo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=wo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,Ot),Ot;if(R(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Ka(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Re(d);if(Ka(m)){const v=i[d],k=o[m]=R(v)||L(v)?{type:v}:v;if(k){const M=Va(Boolean,k.type),$=Va(String,k.type);k[0]=M>-1,k[1]=$<0||M<$,(M>-1||j(k,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xa(e,t){return qa(e)===qa(t)}function Va(e,t){return R(t)?t.findIndex(n=>Xa(n,e)):L(t)&&Xa(t,e)?0:-1}const ko=e=>e[0]==="_"||e==="$stable",la=e=>R(e)?e.map(Ne):[Ne(e)],Bl=(e,t,n)=>{if(t._n)return t;const r=ul((...a)=>la(t(...a)),n);return r._c=!1,r},Ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ko(a))continue;const i=e[a];if(L(i))t[a]=Bl(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},Oo=(e,t)=>{const n=la(t);e.slots.default=()=>n},Yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):Ao(t,e.slots={})}else e.slots={},t&&Oo(e,t);Mn(e.slots,Gn,1)},Wl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ao(t,a)),o=t}else t&&(Oo(e,t),o={default:1});if(i)for(const s in a)!ko(s)&&!(s in o)&&delete a[s]};function Eo(){return{app:null,config:{isNativeTag:gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function ql(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=Eo(),o=new Set;let s=!1;const l=i.app={_uid:Kl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=Z(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,Zn(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Cr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Cr(v,t&&(R(t)?t[k]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?Zn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,j(m,c)&&(m[c]=null)):ie(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=te(l),k=ie(l);if(v||k){const M=()=>{if(e.f){const $=v?d[l]:l.value;a?R($)&&Xr($,i):R($)?$.includes(i)||$.push(i):v?(d[l]=[i],j(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,j(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(M.id=-1,me(M,n)):M()}}}const me=vl;function Xl(e){return Vl(e)}function Vl(e,t){const n=ws();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,cloneNode:M,insertStaticContent:$}=e,T=(f,u,p,g=null,h=null,x=null,A=!1,_=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Dt(f,u)&&(g=un(f),qe(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case fa:y(f,u,p,g);break;case Gt:E(f,u,p,g);break;case ur:f==null&&F(u,p,g,A);break;case ye:cn(f,u,p,g,h,x,A,_,w);break;default:C&1?ce(f,u,p,g,h,x,A,_,w):C&6?Ea(f,u,p,g,h,x,A,_,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,_,w,_t)}S!=null&&h&&Cr(S,f&&f.ref,x,u||f,!u)},y=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},E=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},F=(f,u,p,g)=>{[f.el,f.anchor]=$(f.children,u,p,g,f.el,f.anchor)},z=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},W=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},ce=(f,u,p,g,h,x,A,_,w)=>{A=A||u.type==="svg",f==null?oe(u,p,g,h,x,A,_,w):rt(f,u,h,x,A,_,w)},oe=(f,u,p,g,h,x,A,_)=>{let w,b;const{type:S,props:C,shapeFlag:I,transition:N,patchFlag:D,dirs:H}=f;if(f.el&&M!==void 0&&D===-1)w=f.el=M(f.el);else{if(w=f.el=o(f.type,x,C&&C.is,C),I&8?d(w,f.children):I&16&&re(f.children,w,null,g,h,x&&S!=="foreignObject",A,_),H&&at(f,null,g,"created"),C){for(const q in C)q!=="value"&&!En(q)&&i(w,q,null,C[q],x,f.children,g,h,$e);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ie(b,g,f)}Ke(w,f,f.scopeId,A,g)}H&&at(f,null,g,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;B&&N.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||B||H)&&me(()=>{b&&Ie(b,g,f),B&&N.enter(w),H&&at(f,null,g,"mounted")},h)},Ke=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;Ke(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},re=(f,u,p,g,h,x,A,_,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=_?Je(f[b]):Ne(f[b]);T(null,S,u,p,g,h,x,A,_)}},rt=(f,u,p,g,h,x,A)=>{const _=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const C=f.props||Y,I=u.props||Y;let N;p&&it(p,!1),(N=I.onVnodeBeforeUpdate)&&Ie(N,p,u,f),S&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const D=h&&u.type!=="foreignObject";if(b?bt(f.dynamicChildren,b,_,p,g,D,x):A||Le(f,u,_,null,p,g,D,x,!1),w>0){if(w&16)$t(_,u,C,I,p,g,h);else if(w&2&&C.class!==I.class&&i(_,"class",null,I.class,h),w&4&&i(_,"style",C.style,I.style,h),w&8){const H=u.dynamicProps;for(let B=0;B<H.length;B++){const q=H[B],be=C[q],xt=I[q];(xt!==be||q==="value")&&i(_,q,be,xt,h,f.children,p,g,$e)}}w&1&&f.children!==u.children&&d(_,u.children)}else!A&&b==null&&$t(_,u,C,I,p,g,h);((N=I.onVnodeUpdated)||S)&&me(()=>{N&&Ie(N,p,u,f),S&&at(u,f,p,"updated")},g)},bt=(f,u,p,g,h,x,A)=>{for(let _=0;_<u.length;_++){const w=f[_],b=u[_],S=w.el&&(w.type===ye||!Dt(w,b)||w.shapeFlag&70)?m(w.el):p;T(w,b,S,null,g,h,x,A,!0)}},$t=(f,u,p,g,h,x,A)=>{if(p!==g){for(const _ in g){if(En(_))continue;const w=g[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,A,u.children,h,x,$e)}if(p!==Y)for(const _ in p)!En(_)&&!(_ in g)&&i(f,_,p[_],null,A,u.children,h,x,$e);"value"in g&&i(f,"value",p.value,g.value)}},cn=(f,u,p,g,h,x,A,_,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:N}=u;N&&(_=_?_.concat(N):N),f==null?(r(b,p,g),r(S,p,g),re(u.children,p,S,h,x,A,_,w)):C>0&&C&64&&I&&f.dynamicChildren?(bt(f.dynamicChildren,I,p,h,x,A,_),(u.key!=null||h&&u===h.subTree)&&Co(f,u,!0)):Le(f,u,p,S,h,x,A,_,w)},Ea=(f,u,p,g,h,x,A,_,w)=>{u.slotScopeIds=_,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):ar(u,p,g,h,x,A,w):ue(f,u,w)},ar=(f,u,p,g,h,x,A)=>{const _=f.component=sf(f,g,h);if(po(f)&&(_.ctx.renderer=_t),lf(_),_.asyncDep){if(h&&h.registerDep(_,Q),!f.el){const w=_.subTree=Z(Gt);E(null,w,u,p)}return}Q(_,f,u,p,h,x,A)},ue=(f,u,p)=>{const g=u.component=f.component;if(pl(f,u,p))if(g.asyncDep&&!g.asyncResolved){K(g,u,p);return}else g.next=u,sl(g.update),g.update();else u.el=f.el,g.vnode=u},Q=(f,u,p,g,h,x,A)=>{const _=()=>{if(f.isMounted){let{next:S,bu:C,u:I,parent:N,vnode:D}=f,H=S,B;it(f,!1),S?(S.el=D.el,K(f,S,A)):S=D,C&&Cn(C),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Ie(B,N,S,D),it(f,!0);const q=fr(f),be=f.subTree;f.subTree=q,T(be,q,m(be.el),un(be),f,h,x),S.el=q.el,H===null&&hl(f,q.el),I&&me(I,h),(B=S.props&&S.props.onVnodeUpdated)&&me(()=>Ie(B,N,S,D),h)}else{let S;const{el:C,props:I}=u,{bm:N,m:D,parent:H}=f,B=Sn(u);if(it(f,!1),N&&Cn(N),!B&&(S=I&&I.onVnodeBeforeMount)&&Ie(S,H,u),it(f,!0),C&&sr){const q=()=>{f.subTree=fr(f),sr(C,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=fr(f);T(null,q,p,g,f,h,x),u.el=q.el}if(D&&me(D,h),!B&&(S=I&&I.onVnodeMounted)){const q=u;me(()=>Ie(S,H,q),h)}(u.shapeFlag&256||H&&Sn(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Gr(_,()=>oa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},K=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Hl(f,u.props,g,p),Wl(f,u.children,p),Ft(),Da(),Rt()},Le=(f,u,p,g,h,x,A,_,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:I,shapeFlag:N}=u;if(I>0){if(I&128){zt(b,C,p,g,h,x,A,_,w);return}else if(I&256){ir(b,C,p,g,h,x,A,_,w);return}}N&8?(S&16&&$e(b,h,x),C!==b&&d(p,C)):S&16?N&16?zt(b,C,p,g,h,x,A,_,w):$e(b,h,x,!0):(S&8&&d(p,""),N&16&&re(C,p,g,h,x,A,_,w))},ir=(f,u,p,g,h,x,A,_,w)=>{f=f||Ot,u=u||Ot;const b=f.length,S=u.length,C=Math.min(b,S);let I;for(I=0;I<C;I++){const N=u[I]=w?Je(u[I]):Ne(u[I]);T(f[I],N,p,null,h,x,A,_,w)}b>S?$e(f,h,x,!0,!1,C):re(u,p,g,h,x,A,_,w,C)},zt=(f,u,p,g,h,x,A,_,w)=>{let b=0;const S=u.length;let C=f.length-1,I=S-1;for(;b<=C&&b<=I;){const N=f[b],D=u[b]=w?Je(u[b]):Ne(u[b]);if(Dt(N,D))T(N,D,p,null,h,x,A,_,w);else break;b++}for(;b<=C&&b<=I;){const N=f[C],D=u[I]=w?Je(u[I]):Ne(u[I]);if(Dt(N,D))T(N,D,p,null,h,x,A,_,w);else break;C--,I--}if(b>C){if(b<=I){const N=I+1,D=N<S?u[N].el:g;for(;b<=I;)T(null,u[b]=w?Je(u[b]):Ne(u[b]),p,D,h,x,A,_,w),b++}}else if(b>I)for(;b<=C;)qe(f[b],h,x,!0),b++;else{const N=b,D=b,H=new Map;for(b=D;b<=I;b++){const pe=u[b]=w?Je(u[b]):Ne(u[b]);pe.key!=null&&H.set(pe.key,b)}let B,q=0;const be=I-D+1;let xt=!1,Sa=0;const jt=new Array(be);for(b=0;b<be;b++)jt[b]=0;for(b=N;b<=C;b++){const pe=f[b];if(q>=be){qe(pe,h,x,!0);continue}let Se;if(pe.key!=null)Se=H.get(pe.key);else for(B=D;B<=I;B++)if(jt[B-D]===0&&Dt(pe,u[B])){Se=B;break}Se===void 0?qe(pe,h,x,!0):(jt[Se-D]=b+1,Se>=Sa?Sa=Se:xt=!0,T(pe,u[Se],p,null,h,x,A,_,w),q++)}const Ia=xt?Jl(jt):Ot;for(B=Ia.length-1,b=be-1;b>=0;b--){const pe=D+b,Se=u[pe],Ta=pe+1<S?u[pe+1].el:g;jt[b]===0?T(null,Se,p,Ta,h,x,A,_,w):xt&&(B<0||b!==Ia[B]?yt(Se,p,Ta,2):B--)}}},yt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:_,children:w,shapeFlag:b}=f;if(b&6){yt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,_t);return}if(A===ye){r(x,u,p);for(let C=0;C<w.length;C++)yt(w[C],u,p,g);r(f.anchor,u,p);return}if(A===ur){z(f,u,p);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,u,p),me(()=>_.enter(x),h);else{const{leave:C,delayLeave:I,afterLeave:N}=_,D=()=>r(x,u,p),H=()=>{C(x,()=>{D(),N&&N()})};I?I(x,D,H):H()}else r(x,u,p)},qe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:_,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:I}=f;if(_!=null&&Cr(_,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const N=S&1&&I,D=!Sn(f);let H;if(D&&(H=A&&A.onVnodeBeforeUnmount)&&Ie(H,u,f),S&6)cs(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}N&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,_t,g):b&&(x!==ye||C>0&&C&64)?$e(b,u,p,!1,!0):(x===ye&&C&384||!h&&S&16)&&$e(w,u,p),g&&Ca(f)}(D&&(H=A&&A.onVnodeUnmounted)||N)&&me(()=>{H&&Ie(H,u,f),N&&at(f,null,u,"unmounted")},p)},Ca=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ye){fs(p,g);return}if(u===ur){W(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:_}=h,w=()=>A(p,x);_?_(f.el,x,w):w()}else x()},fs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},cs=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:_}=f;g&&Cn(g),h.stop(),x&&(x.active=!1,qe(A,f,u,p)),_&&me(_,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)qe(f[A],u,p,g,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&qe(u._vnode,null,null,!0):T(u._vnode||null,f,u,null,null,null,p),Da(),oo(),u._vnode=f},_t={p:T,um:qe,m:yt,r:Ca,mt:ar,mc:re,pc:Le,pbc:bt,n:un,o:e};let or,sr;return t&&([or,sr]=t(_t)),{render:Pa,hydrate:or,createApp:ql(Pa,or)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Co(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Je(a[i]),s.el=o.el),n||Co(o,s))}}function Jl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ql=e=>e.__isTeleport,ye=Symbol(void 0),fa=Symbol(void 0),Gt=Symbol(void 0),ur=Symbol(void 0),Yt=[];let ke=null;function Ce(e=!1){Yt.push(ke=e?null:[])}function Gl(){Yt.pop(),ke=Yt[Yt.length-1]||null}let Zt=1;function Ja(e){Zt+=e}function Zl(e){return e.dynamicChildren=Zt>0?ke||Ot:null,Gl(),Zt>0&&ke&&ke.push(e),e}function Pe(e,t,n,r,a,i){return Zl(le(e,t,n,r,a,i,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",Po=({key:e})=>e!=null?e:null,In=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ie(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null;function le(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Po(t),ref:t&&In(t),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Zt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const Z=ef;function ef(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Nl)&&(e=Gt),Pr(e)){const s=Tt(e,t,!0);return n&&ca(s,n),Zt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(mf(e)&&(e=e.__vccOpts),t){t=tf(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Kr(s)),J(l)&&(Gi(l)&&!R(l)&&(l=fe({},l)),t.style=Wr(l))}const o=te(e)?1:gl(e)?128:Ql(e)?64:J(e)?4:L(e)?2:0;return le(e,t,n,r,a,o,i,!0)}function tf(e){return e?Gi(e)||Gn in e?fe({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Po(s),ref:t&&t.ref?n&&a?R(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor}}function nf(e=" ",t=0){return Z(fa,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?Z(Gt):R(e)?Z(ye,null,e.slice()):typeof e=="object"?Je(e):Z(fa,null,String(e))}function Je(e){return e.el===null||e.memo?e:Tt(e)}function ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[nf(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Kr([t.class,r.class]));else if(a==="style")t.style=Wr([t.style,r.style]);else if(Bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Ee(e,t,7,[n,r])}const af=Eo();let of=0;function sf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:of++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(r,a),emitsOptions:lo(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cl.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const Nt=e=>{ne=e,e.scope.on()},mt=()=>{ne&&ne.scope.off(),ne=null};function So(e){return e.vnode.shapeFlag&4}let en=!1;function lf(e,t=!1){en=t;const{props:n,children:r}=e.vnode,a=So(e);Ul(e,n,a,t),Yl(e,r);const i=a?ff(e,t):void 0;return en=!1,i}function ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zi(new Proxy(e.ctx,Rl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null;Nt(e),Ft();const i=Ge(r,e,0,[e.props,a]);if(Rt(),mt(),zi(i)){if(i.then(mt,mt),t)return i.then(o=>{Qa(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else Qa(e,i,t)}else Io(e,t)}function Qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=no(t)),Io(e,n)}let Ga;function Io(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Ga(a,c)}}e.render=r.render||Oe}Nt(e),Ft(),Ll(e),Rt(),mt()}function cf(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function uf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=cf(e))},slots:e.slots,emit:e.emit,expose:t}}function Zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(no(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)}}))}function df(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function mf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>rl(e,t,en);function To(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?Pr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),Z(e,t,n))}const pf="3.2.39",hf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Za=lt&&lt.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(hf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const s=Za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bf(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)Sr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&Sr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ei=/\s*!important$/;function Sr(e,t,n){if(R(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yf(e,t);ei.test(n)?e.setProperty(gt(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],dr={};function yf(e,t){const n=dr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return dr[t]=r;r=Kn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return dr[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function _f(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=ds(t);n==null||i&&!Ri(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ri(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[No,wf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ir=0;const kf=Promise.resolve(),Af=()=>{Ir=0},Of=()=>Ir||(kf.then(Af),Ir=No());function wt(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const c=i[t]=Sf(r,a);wt(e,s,c,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}function Sf(e,t){const n=r=>{const a=r.timeStamp||No();(wf||a>=n.attached-1)&&Ee(If(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function If(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vf(e,r,a):t==="style"?bf(e,n,r):Bn(t)?qr(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nf(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_f(e,t,r,a))};function Nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&te(n)?!1:t in e}const ii=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Cn(t,n):t};function Mf(e){e.target.composing=!0}function oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ff={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=ii(a);const i=r||a.props&&a.props.type==="number";wt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=vr(s)),e._assign(s)}),n&&wt(e,"change",()=>{e.value=e.value.trim()}),t||(wt(e,"compositionstart",Mf),wt(e,"compositionend",oi),wt(e,"change",oi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=ii(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&vr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Rf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lf=(e,t)=>n=>{if(!("key"in n))return;const r=gt(n.key);if(t.some(a=>a===r||Rf[a]===r))return e(n)},$f=fe({patchProp:Tf},gf);let si;function zf(){return si||(si=Xl($f))}const jf=(...e)=>{const t=zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Df(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Df(e){return te(e)?document.querySelector(e):e}const Uf="/peaceful-startpage/assets/waves.f949737a.mp4";const vt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Hf={},Bf=e=>(fo("data-v-2217258b"),e=e(),co(),e),Yf={autoplay:"",muted:"",loop:""},Wf=Bf(()=>le("source",{src:Uf,type:"video/mp4"},null,-1)),Kf=[Wf];function qf(e,t){return Ce(),Pe("video",Yf,Kf)}const Xf=vt(Hf,[["render",qf],["__scopeId","data-v-2217258b"]]),Vf=Be({setup(){const e=Qs(null);return go(()=>{var t;(t=e.value)==null||t.focus()}),{searchBar:e}},data(){return{searchString:"",searchEngines:[{icon:"fa-brands fa-duckduckgo",url:"https://www.duckduckgo.com/?q="},{icon:"fa-brands fa-google",url:"https://www.google.com/search?q="}],currentSearchEngine:0}},methods:{search(){let e=this.searchEngines[this.currentSearchEngine].url+this.searchString;window.open(e),this.searchString=""},changeSearchEngine(){this.currentSearchEngine=(this.currentSearchEngine+1)%this.searchEngines.length}}});const Jf={class:"frame"};function Qf(e,t,n,r,a,i){const o=yo("font-awesome-icon");return Ce(),Pe("div",Jf,[le("button",{onClick:t[0]||(t[0]=(...s)=>e.changeSearchEngine&&e.changeSearchEngine(...s))},[Z(o,{icon:e.searchEngines[e.currentSearchEngine].icon,size:"lg"},null,8,["icon"])]),Tl(le("input",{ref:"searchBar",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>e.searchString=s),onKeyup:t[2]||(t[2]=Lf((...s)=>e.search&&e.search(...s),["enter"]))},null,544),[[Ff,e.searchString]])])}const Gf=vt(Vf,[["render",Qf],["__scopeId","data-v-0afef2d2"]]),Zf=Be({props:{iconName:String,url:String},methods:{openUrl(){let e="https://"+this.url;window.open(e)}}});function ec(e,t,n,r,a,i){const o=yo("font-awesome-icon");return Ce(),Pe("button",{onClick:t[0]||(t[0]=(...s)=>e.openUrl&&e.openUrl(...s))},[Z(o,{icon:e.iconName,size:"lg"},null,8,["icon"])])}const tc=vt(Zf,[["render",ec],["__scopeId","data-v-4fda22fe"]]),nc=Be({data(){return{weekday:"",date:"",time:""}},mounted(){this.setDate(),this.setTime(),setInterval(this.setTime,1e3)},methods:{setDate(){let e=new Date,t=e.toLocaleDateString(void 0,{weekday:"long"}),n=e.toLocaleDateString(void 0,{month:"long"}),r=e.getDate(),a=e.getFullYear();this.weekday=t,this.date=r+" "+n+" "+a},setTime(){let e=new Date,t=e.getHours()<10?"0"+e.getHours():e.getHours(),n=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();this.time=t+":"+n}}});const rc={class:"frame"},ac={class:"weekday"},ic={class:"date"},oc={class:"time"};function sc(e,t,n,r,a,i){return Ce(),Pe("div",rc,[le("span",ac,Bt(e.weekday),1),le("span",ic,Bt(e.date),1),le("span",oc,Bt(e.time),1)])}const lc=vt(nc,[["render",sc],["__scopeId","data-v-893990b9"]]),fc="/random/",cc=Be({data(){return{quote:"",author:""}},mounted(){this.fetchQuote()},methods:{async fetchQuote(){let e=await(await fetch("https://api.quotable.io"+fc)).json();this.quote=e.content,this.author=e.author}}});const ua=e=>(fo("data-v-92b8c65b"),e=e(),co(),e),uc={class:"frame"},dc={key:0,class:"quote"},mc={class:"author"},pc={key:1,class:"loading"},hc=ua(()=>le("div",null,null,-1)),gc=ua(()=>le("div",null,null,-1)),vc=ua(()=>le("div",null,null,-1)),bc=[hc,gc,vc];function yc(e,t,n,r,a,i){return Ce(),Pe("div",uc,[e.quote&&e.author?(Ce(),Pe("div",dc,[le("span",null,'"'+Bt(e.quote)+'"',1),le("span",mc,Bt(e.author),1)])):(Ce(),Pe("div",pc,bc))])}const _c=vt(cc,[["render",yc],["__scopeId","data-v-92b8c65b"]]),xc={class:"wrapper"},wc={class:"iconLinks"},kc={data(){return{icons:[{icon_name:"fa-brands fa-reddit",url:"www.reddit.com"},{icon_name:"fa-brands fa-youtube",url:"www.youtube.com"},{icon_name:"fa-brands fa-twitch",url:"www.twitch.com"},{icon_name:"fa-brands fa-github",url:"www.github.com"}]}}},Ac=Be({...kc,__name:"Frame",setup(e){return(t,n)=>(Ce(),Pe("div",xc,[Z(_c,{class:"quote"}),Z(lc,{class:"datetime"}),Z(Gf,{class:"searchBar"}),le("div",wc,[(Ce(!0),Pe(ye,null,Fl(t.icons,r=>(Ce(),Pe("div",null,[Z(tc,{"icon-name":r.icon_name,url:r.url},null,8,["icon-name","url"])]))),256))])]))}});const Oc=vt(Ac,[["__scopeId","data-v-3a9884c8"]]),Ec={class:"frameWrapper"},Cc=Be({__name:"App",setup(e){return(t,n)=>(Ce(),Pe(ye,null,[Z(Xf),le("div",Ec,[Z(Oc)])],64))}});const Pc=vt(Cc,[["__scopeId","data-v-69838c4c"]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Sc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ic(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return Nc(e)||Fc(e,t)||Mo(e,t)||Lc()}function sn(e){return Tc(e)||Mc(e)||Mo(e)||Rc()}function Tc(e){if(Array.isArray(e))return Tr(e)}function Nc(e){if(Array.isArray(e))return e}function Mc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Mo(e,t){if(!!e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},Fo={},Ro=null,Lo={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Fo=document),typeof MutationObserver<"u"&&(Ro=MutationObserver),typeof performance<"u"&&(Lo=performance)}catch{}var $c=ma.navigator||{},ui=$c.userAgent,di=ui===void 0?"":ui,et=ma,V=Fo,mi=Ro,vn=Lo;et.document;var We=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",$o=~di.indexOf("MSIE")||~di.indexOf("Trident/"),bn,yn,_n,xn,wn,De="___FONT_AWESOME___",Nr=16,zo="fa",jo="svg-inline--fa",pt="data-fa-i2svg",Mr="data-fa-pseudo-element",zc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",pi="fontawesome-i2svg",jc="async",Dc=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),X="classic",G="sharp",ga=[X,G];function ln(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var tn=ln((bn={},ee(bn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(bn,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),bn)),nn=ln((yn={},ee(yn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(yn,G,{solid:"fass"}),yn)),rn=ln((_n={},ee(_n,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(_n,G,{fass:"fa-solid"}),_n)),Uc=ln((xn={},ee(xn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(xn,G,{"fa-solid":"fass"}),xn)),Hc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Uo="fa-layers-text",Bc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yc=ln((wn={},ee(wn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(wn,G,{900:"fass"}),wn)),Ho=[1,2,3,4,5,6,7,8,9,10],Wc=Ho.concat([11,12,13,14,15,16,17,18,19,20]),Kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[X]).map(an.add.bind(an));Object.keys(nn[G]).map(an.add.bind(an));var qc=[].concat(ga,sn(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Ho.map(function(e){return"".concat(e,"x")})).concat(Wc.map(function(e){return"w-".concat(e)})),Wt=et.FontAwesomeConfig||{};function Xc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Jc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jc.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=Vc(Xc(n));a!=null&&(Wt[r]=a)})}var Bo={styleDefault:"solid",familyDefault:"classic",cssPrefix:zo,replacementClass:jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var Mt=O(O({},Bo),Wt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var P={};Object.keys(Bo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Mt[e]=n,Kt.forEach(function(r){return r(P)})},get:function(){return Mt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,Kt.forEach(function(n){return n(P)})},get:function(){return Mt.cssPrefix}});et.FontAwesomeConfig=P;var Kt=[];function Qc(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var Ve=Nr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gc(e){if(!(!e||!We)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Zc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var e=12,t="";e-- >0;)t+=Zc[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Yo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Yo(e[n]),'" ')},"").trim()}function er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function tu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function nu(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$o?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ru=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wo(){var e=zo,t=jo,n=P.cssPrefix,r=P.replacementClass,a=ru;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function mr(){P.autoAddCss&&!hi&&(Gc(Wo()),hi=!0)}var au={mixout:function(){return{dom:{css:Wo,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},Ue=et||{};Ue[De]||(Ue[De]={});Ue[De].styles||(Ue[De].styles={});Ue[De].hooks||(Ue[De].hooks={});Ue[De].shims||(Ue[De].shims=[]);var Ae=Ue[De],Ko=[],iu=function e(){V.removeEventListener("DOMContentLoaded",e),jn=1,Ko.map(function(t){return t()})},jn=!1;We&&(jn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),jn||V.addEventListener("DOMContentLoaded",iu));function ou(e){!We||(jn?setTimeout(e,0):Ko.push(e))}function fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Yo(e):"<".concat(t," ").concat(eu(r),">").concat(i.map(fn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var su=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?su(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function lu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fr(e){var t=lu(e);return t.length===1?t[0].toString(16):null}function fu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,vi(t)):Ae.styles[e]=O(O({},Ae.styles[e]||{}),i),e==="fas"&&Rr("fa",t)}var kn,An,On,kt=Ae.styles,cu=Ae.shims,uu=(kn={},ee(kn,X,Object.values(rn[X])),ee(kn,G,Object.values(rn[G])),kn),ya=null,qo={},Xo={},Vo={},Jo={},Qo={},du=(An={},ee(An,X,Object.keys(tn[X])),ee(An,G,Object.keys(tn[G])),An);function mu(e){return~qc.indexOf(e)}function pu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!mu(a)?a:null}var Go=function(){var t=function(i){return pr(kt,function(o,s,l){return o[l]=pr(s,i,{}),o},{})};qo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Xo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in kt||P.autoFetchSvg,r=pr(cu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vo=r.names,Jo=r.unicodes,ya=tr(P.styleDefault,{family:P.familyDefault})};Qc(function(e){ya=tr(e.styleDefault,{family:P.familyDefault})});Go();function _a(e,t){return(qo[e]||{})[t]}function hu(e,t){return(Xo[e]||{})[t]}function ut(e,t){return(Qo[e]||{})[t]}function Zo(e){return Vo[e]||{prefix:null,iconName:null}}function gu(e){var t=Jo[e],n=_a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return ya}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=tn[r][e],i=nn[r][e]||nn[r][a],o=e in Ae.styles?e:null;return i||o||null}var bi=(On={},ee(On,X,Object.keys(rn[X])),ee(On,G,Object.keys(rn[G])),On);function nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,X,"".concat(P.cssPrefix,"-").concat(X)),ee(t,G,"".concat(P.cssPrefix,"-").concat(G)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return bi[X].includes(c)}))&&(s=X),(e.includes(i[G])||e.some(function(c){return bi[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=pu(P.cssPrefix,d);if(kt[d]?(d=uu[s].includes(d)?Uc[s][d]:d,o=d,c.prefix=d):du[s].indexOf(d)>-1?(o=d,c.prefix=tr(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[X]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Zo(c.iconName):{},k=ut(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!kt.far&&kt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(kt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tt()||"fas"),l}var vu=function(){function e(){Sc(this,e),this.definitions={}}return Ic(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Rr(s,o[s]);var l=rn[X][s];l&&Rr(l,o[s]),Go()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],At={},St={},bu=Object.keys(St);function yu(e,t){var n=t.mixoutsTo;return yi=e,At={},Object.keys(St).forEach(function(r){bu.indexOf(r)===-1&&delete St[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){At[o]||(At[o]=[]),At[o].push(i[o])})}r.provides&&r.provides(St)}),n}function Lr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=At[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=At[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[e]?St[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(!!t)return t=ut(n,t)||t,gi(es.definitions,n,t)||gi(Ae.styles,n,t)}var es=new vu,_u=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ht("noAuto")},xu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(ht("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,ou(function(){ku({autoReplaceSvgRoot:n}),ht("watch",t)})}},wu={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tr(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Hc))){var a=nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:ut(i,t)||t}}}},ge={noAuto:_u,config:P,dom:xu,parse:wu,library:es,findIconDefinition:$r,toHtml:fn},ku=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ae.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Au(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=er(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,M=r.found?r:n,$=M.width,T=M.height,y=a==="fak",E=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),F={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(T)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/T*16*.0625,"em")}:{};k&&(F.attributes[pt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||on())},children:[l]}),delete F.attributes.title);var W=O(O({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},z),m.styles)}),ce=r.found&&n.found?He("generateAbstractMask",W)||{children:[],attributes:{}}:He("generateAbstractIcon",W)||{children:[],attributes:{}},oe=ce.children,Ke=ce.attributes;return W.children=oe,W.attributes=Ke,s?Ou(W):Au(W)}function _i(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=O({},o.styles);ba(a)&&(d.transform=nu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=er(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Eu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=Ae.styles;function zr(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Cu={found:!1,width:512,height:512};function Pu(e,t){!Do&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=Zo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var o=hr[t][e];return r(zr(o))}Pu(e,t),r(O(O({},Cu),{},{icon:P.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var xi=function(){},Dr=P.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:xi,measure:xi},Ht='FA "6.2.0"',Su=function(t){return Dr.mark("".concat(Ht," ").concat(t," begins")),function(){return ts(t)}},ts=function(t){Dr.mark("".concat(Ht," ").concat(t," ends")),Dr.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},ka={begin:Su,end:ts},Tn=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Iu(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function Tu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Nu(){if(P.autoReplaceSvg===!0)return Nn.replace;var e=Nn[P.autoReplaceSvg];return e||Nn.replace}function Mu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Fu(e){return V.createElement(e)}function ns(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Mu:Fu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ns(o,{ceFn:r}))}),a}function Ru(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ns(a),n)}),n.getAttribute(pt)===null&&P.keepOriginalSource){var r=V.createComment(Ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(P.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return fn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function ki(e){e()}function rs(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=ki;P.mutateApproach===jc&&(r=et.requestAnimationFrame||ki),r(function(){var a=Nu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function as(){Aa=!0}function Ur(){Aa=!1}var Dn=null;function Ai(e){if(!!mi&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,a=r===void 0?Tn:r,i=e.pseudoElementsCallback,o=i===void 0?Tn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;Dn=new mi(function(c){if(!Aa){var d=tt();Lt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~Kc.indexOf(m.attributeName))if(m.attributeName==="class"&&Iu(m.target)){var v=nr(va(m.target)),k=v.prefix,M=v.iconName;m.target.setAttribute(pa,k||d),M&&m.target.setAttribute(ha,M)}else Tu(m.target)&&a(m.target)})}}),We&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lu(){!Dn||Dn.disconnect()}function $u(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=nr(va(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=hu(a.prefix,e.innerText)||_a(a.prefix,Fr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ju(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function Du(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ju(e),s=Lr("parseNodeAttributes",{},e),l=t.styleParser?$u(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Uu=Ae.styles;function is(e){var t=P.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Uo)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var nt=new Set;ga.map(function(e){nt.add("fa-".concat(e))});Object.keys(tn[X]).map(nt.add.bind(nt));Object.keys(tn[G]).map(nt.add.bind(nt));nt=sn(nt);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=P.autoFetchSvg?nt:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Uu));i.includes("fa")||i.push("fa");var o=[".".concat(Uo,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(d,m){try{var v=is(m);v&&d.push(v)}catch(k){Do||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){rs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;is(e).then(function(n){n&&rs([n],t)})}function Bu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Yu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,M=k===void 0?null:k,$=n.classes,T=$===void 0?[]:$,y=n.attributes,E=y===void 0?{}:y,F=n.styles,z=F===void 0?{}:F;if(!!t){var W=t.prefix,ce=t.iconName,oe=t.icon;return rr(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?E["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(M||on()):(E["aria-hidden"]="true",E.focusable="false")),wa({icons:{main:zr(oe),mask:l?zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:M,extra:{attributes:E,styles:z,classes:T}})})}},Wu={mixout:function(){return{icon:Bu(Yu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=Hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,M){Promise.all([jr(a,s),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var T=da($,2),y=T[0],E=T[1];k([n,wa({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=er(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:o}]})}}}},qu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return rr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Eu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(sn(s))}})})}}}},Xu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),_i({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(sn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($o){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_i({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Vu=new RegExp('"',"ug"),Ci=[1105920,1112319];function Ju(e){var t=e.replace(Vu,""),n=fu(t,0),r=n>=Ci[0]&&n<=Ci[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(zc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(oe){return oe.getAttribute(Mr)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Bc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nn[v][l[2].toLowerCase()]:Yc[v][c],M=Ju(m),$=M.value,T=M.isSecondary,y=l[0].startsWith("FontAwesome"),E=_a(k,$),F=E;if(y){var z=gu($);z.iconName&&z.prefix&&(E=z.iconName,k=z.prefix)}if(E&&!T&&(!o||o.getAttribute(pa)!==k||o.getAttribute(ha)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var W=Du(),ce=W.extra;ce.attributes[Mr]=t,jr(E,k).then(function(oe){var Ke=wa(O(O({},W),{},{icons:{main:oe,mask:xa()},prefix:k,iconName:F,extra:ce,watchable:!0})),re=V.createElement("svg");t==="::before"?e.insertBefore(re,e.firstChild):e.appendChild(re),re.outerHTML=Ke.map(function(rt){return fn(rt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Qu(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function Gu(e){return e.parentNode!==document.head&&!~Dc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Si(e){if(!!We)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(Gu).map(Qu),a=ka.begin("searchPseudoElements");as(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var Zu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;P.searchPseudoElements&&Si(a)}}},Ii=!1,ed={mixout:function(){return{dom:{unwatch:function(){as(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Lr("mutationObserverCallbacks",{}))},noAuto:function(){Lu()},watch:function(n){var r=n.observeMutationsRoot;Ii?Ur():Ai(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},td={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nd(e){return e.tag==="g"?e.children:[e]}var rd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=tu({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:O(O({},gr),{},{fill:"white"})},$=d.children?{children:d.children.map(Ni)}:{},T={tag:"g",attributes:O({},k.inner),children:[Ni(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},$))]},y={tag:"g",attributes:O({},k.outer),children:[T]},E="mask-".concat(s||on()),F="clip-".concat(s||on()),z={tag:"mask",attributes:O(O({},gr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:nd(v)},z]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(E,")")},gr)}),{children:r,attributes:a}}}},ad={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},id={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},od=[au,Wu,Ku,qu,Xu,Zu,ed,td,rd,ad,id];yu(od,{mixoutsTo:ge});ge.noAuto;var os=ge.config,sd=ge.library;ge.dom;var Un=ge.parse;ge.findIconDefinition;ge.toHtml;var ld=ge.icon;ge.layer;var fd=ge.text;ge.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ud(e,t){if(e==null)return{};var n=cd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Hr(e){return dd(e)||md(e)||pd(e)||hd()}function dd(e){if(Array.isArray(e))return Br(e)}function md(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pd(e,t){if(!!e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ss={exports:{}};(function(e){(function(t){var n=function(y,E,F){if(!c(E)||m(E)||v(E)||k(E)||l(E))return E;var z,W=0,ce=0;if(d(E))for(z=[],ce=E.length;W<ce;W++)z.push(n(y,E[W],F));else{z={};for(var oe in E)Object.prototype.hasOwnProperty.call(E,oe)&&(z[y(oe,F)]=n(y,E[oe],F))}return z},r=function(y,E){E=E||{};var F=E.separator||"_",z=E.split||/(?=[A-Z])/;return y.split(z).join(F)},a=function(y){return M(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},M=function(y){return y=y-0,y===y},$=function(y,E){var F=E&&"process"in E?E.process:E;return typeof F!="function"?y:function(z,W){return F(z,y,W)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n($(a,E),y)},decamelizeKeys:function(y,E){return n($(o,E),y,E)},pascalizeKeys:function(y,E){return n($(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(gd)})(ss);var vd=ss.exports,bd=["class","style"];function yd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _d(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Oa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=_d(d);break;case"style":l.style=yd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ud(n,bd);return To(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var ls=!1;try{ls=!0}catch{}function xd(){if(!ls&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function wd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Un.icon)return Un.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kd=Be({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Fi(t.icon)}),i=ve(function(){return qt("classes",wd(t))}),o=ve(function(){return qt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ve(function(){return qt("mask",Fi(t.mask))}),l=ve(function(){return ld(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Pn(l,function(d){if(!d)return xd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?Oa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Be({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=os.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Hr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return To("div",{class:i.value},r.default?r.default():[])}}});Be({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=os.familyPrefix,i=ve(function(){return qt("classes",[].concat(Hr(t.counter?["".concat(a,"-layers-counter")]:[]),Hr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return qt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ve(function(){var c=fd(t.value.toString(),xe(xe({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return Oa(s.value,{},r)});return function(){return l.value}}});var Ad={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Od={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},Ed={prefix:"fab",iconName:"twitch",icon:[512,512,[],"f1e8","M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]},Cd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Pd={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};let Sd={prefix:"fab",iconName:"duckduckgo",icon:[24,24,[],"e001","M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.074 1 12S5.926 1 12 1s11 4.925 11 11-4.925 11-11 11zm10.219-11c0 4.805-3.317 8.833-7.786 9.925-.27-.521-.53-1.017-.749-1.438.645.249 1.93.718 2.208.615.376-.144.282-3.149-.14-3.245-.338-.075-1.632.837-2.141 1.209l.034.156c.078.397.144.993.03 1.247-.001.004-.002.01-.004.013a.218.218 0 0 1-.068.088c-.284.188-1.081.284-1.503.188a.516.516 0 0 1-.064-.02c-.694.396-2.01 1.109-2.25.971-.329-.188-.377-2.676-.329-3.288.035-.46 1.653.286 2.442.679.174-.163.602-.272.98-.31-.57-1.389-.99-2.977-.733-4.105 0 .002.002.002.002.002.356.248 2.73 1.05 3.91 1.027 1.18-.024 3.114-.743 2.903-1.323-.212-.58-2.135.51-4.142.324-1.486-.138-1.748-.804-1.42-1.29.414-.611 1.168.116 2.411-.256 1.245-.371 2.987-1.035 3.632-1.397 1.494-.833-.625-1.177-1.125-.947-.474.22-2.123.637-2.889.82.428-1.516-.603-4.149-1.757-5.3-.376-.376-.951-.612-1.603-.736-.25-.344-.654-.671-1.225-.977a5.772 5.772 0 0 0-3.595-.584l-.024.004-.034.004.004.002c-.148.028-.237.08-.357.098.148.016.705.276 1.057.418-.174.068-.412.108-.596.184a.828.828 0 0 0-.204.056c-.173.08-.303.375-.3.515.84-.086 2.082-.026 2.991.246-.644.09-1.235.258-1.661.482-.016.008-.03.018-.048.028-.054.02-.106.042-.152.066-1.367.72-1.971 2.405-1.611 4.424.323 1.824 1.665 8.088 2.29 11.064-3.973-1.4-6.822-5.186-6.822-9.639C1.781 6.356 6.356 1.781 12 1.781S22.219 6.356 22.219 12zM9.095 9.581a.758.758 0 1 0 0 1.516.758.758 0 0 0 0-1.516zm.338.702a.196.196 0 1 1 0-.392.196.196 0 0 1 0 .392zm4.724-1.043a.65.65 0 1 0 0 1.299.65.65 0 0 0 0-1.3zm.29.601a.168.168 0 1 1 0-.336.168.168 0 0 1 0 .336zM9.313 8.146s-.571-.26-1.125.09c-.554.348-.534.704-.534.704s-.294-.656.49-.978c.786-.32 1.17.184 1.17.184zm5.236-.052s-.41-.234-.73-.23c-.654.008-.831.296-.831.296s.11-.688.945-.55a.84.84 0 0 1 .616.484z"]};sd.add(Od,Pd,Ed,Cd,Ad,Sd);jf(Pc).component("font-awesome-icon",kd).mount("#app");
