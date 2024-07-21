(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var p=ca(this);function r(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}
function c(g,f){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=p[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
function da(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){return a.raw=a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ea=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ea});
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if(typeof Object.setPrototypeOf=="function")ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function ma(){this.j=!1;this.h=null;this.o=void 0;this.g=1;this.v=this.l=0;this.i=null}
function na(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}
ma.prototype.s=function(a){this.o=a};
function oa(a,b){a.i={ja:b,la:!0};a.g=a.l||a.v}
ma.prototype.return=function(a){this.i={return:a};this.g=this.v};
function pa(a,b,c){a.g=c;return{value:b}}
function qa(a){this.g=new ma;this.h=a}
function ra(a,b){na(a.g);var c=a.g.h;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return x(a)}
function sa(a,b,c,d){try{var e=b.call(a.g.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.j=!1,e;var g=e.value}catch(f){return a.g.h=null,oa(a.g,f),x(a)}a.g.h=null;d.call(a.g,g);return x(a)}
function x(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(c){a.g.o=void 0,oa(a.g,c)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.la)throw b.ja;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ta(a){this.next=function(b){na(a.g);a.g.h?b=sa(a,a.g.h.next,b,a.g.s):(a.g.s(b),b=x(a));return b};
this.throw=function(b){na(a.g);a.g.h?b=sa(a,a.g.h["throw"],b,a.g.s):(oa(a.g,b),b=x(a));return b};
this.return=function(b){return ra(a,b)};
this[Symbol.iterator]=function(){return this}}
function ua(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function g(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(g,e)}
g(a.next())})}
function va(a){return ua(new ta(new qa(a)))}
function wa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.s=!1;var h=this.j();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(f){return f instanceof b?f:new b(function(h){h(f)})}
if(a)return a;c.prototype.h=function(f){if(this.g==null){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(f)};
var e=p.setTimeout;c.prototype.i=function(f){e(f,0)};
c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=f[h];f[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(f){this.i(function(){throw f;})};
b.prototype.j=function(){function f(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:f(this.J),reject:f(this.l)}};
b.prototype.J=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.L(f);else{a:switch(typeof f){case "object":var h=f!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.H(f):this.o(f)}};
b.prototype.H=function(f){var h=void 0;try{h=f.then}catch(k){this.l(k);return}typeof h=="function"?this.M(h,f):this.o(f)};
b.prototype.l=function(f){this.v(2,f)};
b.prototype.o=function(f){this.v(1,f)};
b.prototype.v=function(f,h){if(this.h!=0)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;this.h===2&&this.K();this.F()};
b.prototype.K=function(){var f=this;e(function(){if(f.I()){var h=p.console;typeof h!=="undefined"&&h.error(f.i)}},1)};
b.prototype.I=function(){if(this.s)return!1;var f=p.CustomEvent,h=p.Event,k=p.dispatchEvent;if(typeof k==="undefined")return!0;typeof f==="function"?f=new f("unhandledrejection",{cancelable:!0}):typeof h==="function"?f=new h("unhandledrejection",{cancelable:!0}):(f=p.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};
b.prototype.F=function(){if(this.g!=null){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null}};
var g=new c;b.prototype.L=function(f){var h=this.j();f.R(h.resolve,h.reject)};
b.prototype.M=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(f,h){function k(t,G){return typeof t=="function"?function(xa){try{l(t(xa))}catch(ya){m(ya)}}:G}
var l,m,q=new b(function(t,G){l=t;m=G});
this.R(k(f,l),k(h,m));return q};
b.prototype.catch=function(f){return this.then(void 0,f)};
b.prototype.R=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.g==null?g.h(k):this.g.push(k);this.s=!0};
b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f)})};
b.race=function(f){return new b(function(h,k){for(var l=v(f),m=l.next();!m.done;m=l.next())d(m.value).R(h,k)})};
b.all=function(f){var h=v(f),k=h.next();return k.done?d([]):new b(function(l,m){function q(xa){return function(ya){t[xa]=ya;G--;G==0&&l(t)}}
var t=[],G=0;do t.push(void 0),G++,d(k.value).R(q(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,g=0;g<e;g++){var f=d[g];if(b.call(c,f,g,d)){b=f;break a}}b=void 0}return b}});
r("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!w(k,f)){var l=new c;ba(k,f,{value:l})}}
function g(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(q){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();g("freeze");g("preventExtensions");g("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,f))throw Error("WeakMap key fail: "+k);k[f][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,f)?k[f][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,f)&&w(k[f],this.g)};
b.prototype.delete=function(k){return d(k)&&w(k,f)&&w(k[f],this.g)?delete k[f][this.g]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return da(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?g.has(k)?l=g.get(k):(l=""+ ++f,g.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&w(h[0],l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,B:q}}return{id:l,list:m,index:-1,B:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var g=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.B?l.B.value=k:(l.B={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.B),this[1].previous.next=l.B,this[1].previous=l.B,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.B&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.B.previous.next=h.B.next,h.B.next.previous=h.B.previous,h.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).B};
e.prototype.get=function(h){return(h=d(this,h).B)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var f=0;return e});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push(b[d]);return c}});
function za(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.keys",function(a){return a?a:function(){return za(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return za(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],g=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof g=="function"){b=g.call(b);for(var f=0;!(g=b.next()).done;)e.push(c.call(d,g.value,f++))}else for(g=b.length,f=0;f<g;f++)e.push(c.call(d,b[f],f));return e}});
r("Set",function(a){function b(c){this.g=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),g=e.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return!1;g=e.next();return g.done||g.value[0]==c||g.value[0].x!=4||g.value[1]!=g.value[0]?!1:e.next().done}catch(f){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(g){return c.call(d,g,g,e)})};
return b});
r("String.prototype.endsWith",function(a){return a?a:function(b,c){if(this==null)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var d=this+"";b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var y=this||self;function Aa(a){a=a.split(".");for(var b=y,c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ba(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ca(a){var b=Ba(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function z(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Da(a){return Object.prototype.hasOwnProperty.call(a,Ea)&&a[Ea]||(a[Ea]=++Fa)}
var Ea="closure_uid_"+(Math.random()*1E9>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ia(a,b,c){Ia=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ga:Ha;return Ia.apply(null,arguments)}
function A(a,b){a=a.split(".");var c=y;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ja(a,b){function c(){}
c.prototype=b.prototype;a.fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ra=function(d,e,g){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[e].apply(d,f)}}
;var Ka;var La,Ma=Aa("CLOSURE_FLAGS"),Na=Ma&&Ma[610401301];La=Na!=null?Na:!1;function Oa(a){y.setTimeout(function(){throw a;},0)}
;var Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/"/g,Ta=/'/g,Ua=/\x00/g,Va=/[\x00&<>"']/;function Wa(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
var B,Xa=y.navigator;B=Xa?Xa.userAgentData||null:null;function Ya(a){return La?B?B.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function C(a){return Wa().indexOf(a)!=-1}
;function D(){return La?!!B&&B.brands.length>0:!1}
function Za(){return D()?Ya("Chromium"):(C("Chrome")||C("CriOS"))&&!(D()?0:C("Edge"))||C("Silk")}
function $a(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ab(){for(var a=Wa(),b=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);a=$a(c);return Za()?a(["Chrome","CriOS","HeadlessChrome"]):""}
function bb(){if(D()){var a=B.brands.find(function(b){return b.brand==="Chromium"});
if(!a||!a.version)return NaN;a=a.version.split(".")}else{a=ab();if(a==="")return NaN;a=a.split(".")}return a.length===0?NaN:Number(a[0])}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=typeof a==="string"?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},db=Array.prototype.some?function(a,b){Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
};
function eb(a,b){b=cb(a,b);b>=0&&Array.prototype.splice.call(a,b,1)}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,g=d.length||0;a.length=e+g;for(var f=0;f<g;f++)a[e+f]=d[f]}else a.push(d)}}
;var ib=D()?!1:C("Trident")||C("MSIE"),jb=C("Edge")||ib,kb=C("Gecko")&&!(Wa().toLowerCase().indexOf("webkit")!=-1&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),lb=Wa().toLowerCase().indexOf("webkit")!=-1&&!C("Edge");!C("Android")||Za();Za();!C("Safari")||Za()||(D()?0:C("Coast"))||(D()?0:C("Opera"))||(D()?0:C("Edge"))||(D()?Ya("Microsoft Edge"):C("Edg/"))||D()&&Ya("Opera");var mb=Math.max,nb=mb.apply,ob=Object.values({La:1,Ja:2,Ia:4,Oa:8,Na:16,Ma:32,Da:64,Qa:128,Ha:256,Ga:512,Ka:1024,Ea:2048,Pa:4096,Fa:8192}),pb;if(ob instanceof Array)pb=ob;else{for(var qb=v(ob),rb,sb=[];!(rb=qb.next()).done;)sb.push(rb.value);pb=sb}nb.call(mb,Math,pb);function F(){this.i=this.i;this.j=this.j}
F.prototype.i=!1;F.prototype.dispose=function(){this.i||(this.i=!0,this.N())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
F.prototype.addOnDisposeCallback=function(a,b){this.i?b!==void 0?a.call(b):a():(this.j||(this.j=[]),this.j.push(b!==void 0?Ia(a,b):a))};
F.prototype.N=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function tb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function H(a){this.g=a}
H.prototype.toString=function(){return this.g};
var ub=new H("about:invalid#zClosurez");function vb(a){if(a instanceof H)return a.g;throw Error("");}
;function wb(a){this.ma=a}
function I(a){return new wb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[I("data"),I("http"),I("https"),I("mailto"),I("ftp"),new wb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function yb(a){var b=b===void 0?xb:b;a:if(b=b===void 0?xb:b,!(a instanceof H)){for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof wb&&d.ma(a)){a=new H(a);break a}}a=void 0}return a||ub}
var zb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Ab={};function J(a){this.g=a}
J.prototype.toString=function(){return this.g.toString()};
function Bb(a){if(a instanceof J&&a.constructor===J)return a.g;Ba(a);return"type_error:SafeStyleSheet"}
;function Cb(a){return Bb(a)}
;function K(a){for(var b=wa.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d]),c+=a[d+1];b=document.implementation.createHTMLDocument("");d=b.createElement("style");b.head.appendChild(d);b=d.sheet;b.insertRule(c,0);if(b.cssRules.length===1&&(c=b.cssRules[0],c instanceof CSSStyleRule))return new J(c.cssText.replace(/</g,"\\3C "),Ab)}
;var Db=/^[\w+/_-]+[=]{0,2}$/;function Eb(){var a=y.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&Db.test(a)?a:"":""}
;function Fb(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);b instanceof H?b=vb(b):b=zb.test(b)?b:void 0;b!==void 0&&(a.src=b)}
;function Gb(a){Va.test(a)&&(a.indexOf("&")!=-1&&(a=a.replace(Pa,"&amp;")),a.indexOf("<")!=-1&&(a=a.replace(Qa,"&lt;")),a.indexOf(">")!=-1&&(a=a.replace(Ra,"&gt;")),a.indexOf('"')!=-1&&(a=a.replace(Sa,"&quot;")),a.indexOf("'")!=-1&&(a=a.replace(Ta,"&#39;")),a.indexOf("\x00")!=-1&&(a=a.replace(Ua,"&#0;")));return a}
function Hb(){return"cssText".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function Ib(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Jb(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Kb(a,b,c,d){a=d||a;var e=b&&b!="*"?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,f;f=b[g];g++)e==f.nodeName&&(a[d++]=f);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(g=d=0;f=b[g];g++){e=f.className;var h;if(h=typeof e.split=="function")h=cb(e.split(/\s+/),c)>=0;h&&(a[d++]=f)}a.length=d;return a}return b}
function Lb(a,b){tb(b,function(c,d){d=="style"?a.style.cssText=c:d=="class"?a.className=c:d=="for"?a.htmlFor=c:Mb.hasOwnProperty(d)?a.setAttribute(Mb[d],c):d.lastIndexOf("aria-",0)==0||d.lastIndexOf("data-",0)==0?a.setAttribute(d,c):a[d]=c})}
var Mb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Nb(a,b,c){function d(h){h&&b.appendChild(typeof h==="string"?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var g=c[e];if(!Ca(g)||z(g)&&g.nodeType>0)d(g);else{a:{if(g&&typeof g.length=="number"){if(z(g)){var f=typeof g.item=="function"||typeof g.item=="string";break a}if(typeof g==="function"){f=typeof g.item=="function";break a}}f=!1}E(f?gb(g):g,d)}}}
function L(a,b){b=String(b);a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)}
function Ob(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function M(){this.g=y.document||document}
M.prototype.h=function(a,b,c){var d=this.g,e=arguments,g=e[1],f=L(d,String(e[0]));g&&(typeof g==="string"?f.className=g:Array.isArray(g)?f.className=g.join(" "):Lb(f,g));e.length>2&&Nb(d,f,e);return f};
M.prototype.createElement=function(a){return L(this.g,a)};
M.prototype.i=function(a,b){a.appendChild(b)};
M.prototype.isElement=function(a){return z(a)&&a.nodeType==1};var Pb={};var Qb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rb(a){var b=a.match(Qb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;var Vb=y.window,Wb,Xb,N=(Vb==null?void 0:(Wb=Vb.yt)==null?void 0:Wb.config_)||(Vb==null?void 0:(Xb=Vb.ytcfg)==null?void 0:Xb.data_)||{};A("yt.config_",N);function Yb(){var a=arguments;a.length>1?N[a[0]]=a[1]:a.length===1&&Object.assign(N,a[0])}
;var Zb=0;function $b(a,b){var c;db(a,function(d){c=b[d];return!!c});
return c}
A("ytDomDomGetNextId",Aa("ytDomDomGetNextId")||function(){return++Zb});function ac(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()}
function O(){var a=a===void 0?!1:a;var b=$b(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;var bc=/^[\w.]*$/,cc={q:!0,search_query:!0};
function dc(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var g=b[d].split("=");if(g.length===1&&g[0]||g.length===2)try{var f=ec(g[0]||""),h=ec(g[1]||"");if(f in c){var k=c[f];Array.isArray(k)?hb(k,h):c[f]=[k,h]}else c[f]=h}catch(t){var l=t,m=g[0],q=String(dc);l.args=[{key:m,value:g[1],query:a,method:fc===q?"unchanged":q}];cc.hasOwnProperty(m)||(g=l,(l=Aa("yt.logging.errors.log"))?l(g,"WARNING",void 0,void 0,void 0,void 0,void 0):(l=[],l="ERRORS"in N?N.ERRORS:l,l.push([g,"WARNING",void 0,
void 0,void 0,void 0,void 0]),Yb("ERRORS",l)))}}return c}
var fc=String(dc);function gc(a){a.charAt(0)==="?"&&(a=a.substring(1));return dc(a,"&")}
function ec(a){return a&&a.match(bc)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hc(){return{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"g",A:"ytp-fullscreen-button-corner-0",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{m:"g",A:"ytp-fullscreen-button-corner-1",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{m:"g",A:"ytp-fullscreen-button-corner-2",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{m:"g",
A:"ytp-fullscreen-button-corner-3",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]}}
function ic(){return{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}}
function jc(){return{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}}
function kc(){return{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"path",D:!0,u:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}}
;var lc=1;function P(a){F.call(this);this.g={};this.h={};this.element=this.createElement(a)}
P.prototype=fa(F.prototype);P.prototype.constructor=P;if(la)la(P,F);else for(var Q in F)if(Q!="prototype")if(Object.defineProperties){var mc=Object.getOwnPropertyDescriptor(F,Q);mc&&Object.defineProperty(P,Q,mc)}else P[Q]=F[Q];P.fa=F.prototype;
P.prototype.createElement=function(a,b){b=b||a.m==="svg";var c=a.A,d=a.Sa;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.m);jb&&(a.u||(a.u={}),a.u.focusable="false")}else e=L(document,a.m);if(c){if(c=nc(this,e,"class",c))oc(this,e,"class",c),this.g[c]=e}else if(d){c=v(d);for(var g=c.next();!g.done;g=c.next())this.g[g.value]=e;oc(this,e,"class",d.join(" "))}d=a.Ta;c=a.C;if(d)b=nc(this,e,"child",d),b!==void 0&&e.appendChild(document.createTextNode(String(b)));else if(c)for(d=0,
c=v(c),g=c.next();!g.done;g=c.next())if(g=g.value)if(typeof g==="string")g=nc(this,e,"child",g),g!=null&&e.appendChild(document.createTextNode(String(g)));else if(g.element)e.appendChild(g.element);else{var f=g;g=this.createElement(f,b);e.appendChild(g);if(f.D){f="ytp-id-"+lc.toString();lc++;g.id=f;var h=document.createElementNS("http://www.w3.org/2000/svg","use");h.setAttribute("class","ytp-svg-shadow");h.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);g=e;f=h;h=d++;g.insertBefore(f,
g.childNodes[h]||null)}}if(a=a.u)for(b=e,d=v(Object.keys(a)),c=d.next();!c.done;c=d.next())c=c.value,g=a[c],oc(this,b,c,typeof g==="string"?nc(this,b,c,g):g);return e};
P.prototype.detach=function(){var a=this.element;a&&a.parentNode&&a.parentNode.removeChild(a)};
function nc(a,b,c,d){if(d.substr(0,2)==="{{")a.h[d]=[b,c];else return d}
P.prototype.update=function(a){for(var b=v(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=this.h["{{"+c+"}}"];d&&oc(this,d[0],d[1],a[c])}};
function pc(a,b){var c=[];if(!b)return c;b=v(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,d!=null){var e=d.nodeType;e===1||e===3?c.push(d):d&&typeof d.m==="string"?c.push(a.createElement(d)):d.element?c.push(d.element):typeof d==="string"&&d.indexOf("\n")!==-1?d.split("\n").forEach(function(g,f){f>0&&c.push(L(document,"BR"));c.push(document.createTextNode(String(g)))}):c.push(document.createTextNode(String(d)))}return c}
function oc(a,b,c,d){if(c==="child"){Ob(b);var e;d===void 0?e=void 0:e=!Array.isArray(d)||d&&typeof d.m==="string"?[d]:d;c=pc(a,e);c=v(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else c==="style"?(c=d?d:"",a=Pb.cssText,a||(a=d=Hb(),b.style[d]===void 0&&(d=(lb?"Webkit":kb?"Moz":ib?"ms":null)+Ib(d),b.style[d]!==void 0&&(a=d)),Pb.cssText=a),a&&(b.style[a]=c)):d===null||d===void 0?b.removeAttribute(c):(a=d.toString(),c==="href"&&(a=vb(yb(a))),b.setAttribute(c,a))}
P.prototype.N=function(){this.g={};this.h={};this.detach();F.prototype.N.call(this)};var qc=u([""," .ima-ad-player {\n        background-color: #000;\n      }"]),rc=u([""," .ima-controls {\n        background-color: #000;\n        bottom: 0;\n        height: ","px;\n        width: 100%;\n        position: absolute;\n      }"]),sc=u([""," .ima-control-button {\n        background-color: #000;\n        border: 1px transparent solid;\n        border-style: none;\n        cursor: pointer;\n        fill: #fff;\n        height: ","px;\n        width: ","px;\n      }"]),tc=u([""," .ima-control-countdown {\n        background-color: #000;\n        border-style: none;\n        color: #fff;\n        font-family: Arial, sans-serif;\n        font-size: 12px;\n        height: ",
"px;\n        line-height: ","px;\n        margin-left: 10px;\n        vertical-align: top;\n      }"]),uc=u([""," .ima-control-button.fullscreen {\n        float: right;\n      }"]),vc=u([""," .ima-control-button:hover {\n        fill: #f00;\n      }"]);function wc(){}
wc.prototype.info=function(a){this.log(a,"INFO")};
wc.prototype.error=function(a){this.log(a,"ERROR")};
wc.prototype.log=function(a,b){console.log("[YT.ImaManager] "+b+": "+a)};
var R=new wc;
function S(a,b,c,d,e){e=e===void 0?{}:e;this.h=a;this.ga=d;this.options=e;this.i=this.K=null;this.l=document.createElement("div");this.s=document.createElement("div");this.o=document.createElement("button");this.F=document.createElement("button");this.O=document.createElement("span");this.T=null;this.v=document.createElement("button");this.M=this.j=this.g=this.L=null;this.P={currentTime:0};this.Y=this.U=this.Z=this.aa=this.V=this.J=!1;this.S=this.H=this.I=0;if(window.google&&google&&google.ima&&google.ima.AdDisplayContainer)if(this.K=
Jb(b))if(this.i=Jb(c)){if(this.i){this.i.textContent="";if(this.i){a="#"+this.i.id;c=new J([K(qc,a),K(rc,a,40),K(sc,a,40,40),K(tc,a,40,40),K(uc,a),K(vc,a)].map(Cb).join(""),Ab);a=Ka||(Ka=new M);b=Kb(a.g,"HEAD")[0];b||(d=Kb(a.g,"BODY")[0],b=a.h("HEAD"),d.parentNode.insertBefore(b,d));d=a.h("STYLE");(e=Eb())&&d.setAttribute("nonce",e);c=Bb(c);if(y.trustedTypes)if("textContent"in d)d.textContent=c;else if(d.nodeType==3)d.data=String(c);else if(d.firstChild&&d.firstChild.nodeType==3){for(;d.lastChild!=
d.firstChild;)d.removeChild(d.lastChild);d.firstChild.data=String(c)}else Ob(d),d.appendChild((d.nodeType==9?d:d.ownerDocument||d.document).createTextNode(String(c)));else d.innerHTML=c;a.i(b,d)}a=this.h.getSize();this.I=a.height;this.H=a.width;b=xc(this).endsWith("%")&&this.options.enableResponsiveDesign?xc(this):this.H+"px";T(this.i,b,yc(this).endsWith("%")&&this.options.enableResponsiveDesign&&!this.options.enableControls?yc(this):this.I+(this.options.enableControls?40:0)+"px");this.i.style.position=
"relative";T(this.l,b,a.height+"px");this.l.className="ima-ad-player";this.i.appendChild(this.l);this.options.enableControls&&(this.s.className="ima-controls",this.o.className="ima-control-button playpause",this.o.title="Play/Pause",U(this.o,ic()),this.o.addEventListener("click",this.wa.bind(this)),this.s.appendChild(this.o),this.F.className="ima-control-button mute",this.F.title="Mute/Unmute",U(this.F,kc()),this.F.addEventListener("click",this.va.bind(this)),this.s.appendChild(this.F),this.O.className=
"ima-control-countdown",this.s.appendChild(this.O),this.v.className="ima-control-button fullscreen",this.v.title="Fullscreen",U(this.v,hc()),this.v.addEventListener("click",this.xa.bind(this)),this.s.appendChild(this.v),this.i.appendChild(this.s));zc(this.i)}this.l?(this.L=window.google&&google&&google.ima&&google.ima.AdDisplayContainer?new google.ima.AdDisplayContainer(this.l):null)?(Ac(this)&&Bc(this)&&(this.ca(),Cc(this),this.U=!0),this.h.addEventListener("onStateChange",this.onStateChange.bind(this)),
this.h.addEventListener("onVideoDataChange",this.onVideoDataChange.bind(this)),this.h.addEventListener("onVolumeChange",this.za.bind(this)),this.j=new google.ima.AdsLoader(this.L),this.j.addEventListener("adsManagerLoaded",this.ua.bind(this)),this.j.addEventListener("adError",this.sa.bind(this)),setInterval(this.Ba.bind(this),500),this.enableResponsiveDesign()&&window.addEventListener("resize",this.ya.bind(this)),Dc(this)):R.error("Could not create an AdDisplayContainer. Ad Blocked?"):R.error("Could not create a <div> for ads video.")}else R.error("Could not find ads container. Was given: "+
c);else R.error("Could not find YouTube Player IFrame. Was given: "+b);else R.error("Could not find the IMA SDK. Ad Blocked?")}
function Cc(a){a.aa||(a.L?(Bc(a)&&!a.Z&&a.h.pauseVideo(),a.aa=!0,a.L.initialize(),a.Y=!0,R.info("Done initializing the AdDisplayContainer."),Ec(a)):R.error("Trying to initialize the AdDisplayContainer, but it does not exist."))}
function Ec(a){a.Y&&(a.g?(R.info("Initializing the AdsManager."),a.g.init(a.H,a.I-(a.options.enableControls?40:0),google.ima.ViewMode.NORMAL),R.info("Starting the AdsManager."),a.g.start(),R.info("Started the AdsManager."),Fc(a,a.h.isMuted())):R.log("Trying to start the AdsManager, but it does not exist.","WARNING"))}
n=S.prototype;n.onStateChange=function(a){a=a.data;a===-1?(this.U=!0,Cc(this)):a===0&&this.j&&this.j.contentComplete()};
n.ua=function(a){this.h.logImaAdEvent(9,0);this.g=this.M?a.getAdsManager(this.P,this.M):a.getAdsManager(this.P);R.info("Loaded AdsManager.");this.g.addEventListener("contentPauseRequested",this.ca.bind(this));this.g.addEventListener("contentResumeRequested",this.W.bind(this));this.g.addEventListener("click",this.na.bind(this));this.g.addEventListener("skipped",this.qa.bind(this));this.g.addEventListener("adError",this.ta.bind(this));this.g.addEventListener("start",this.ra.bind(this));this.g.addEventListener("pause",
this.oa.bind(this));this.g.addEventListener("resume",this.pa.bind(this));Ec(this)};
n.ca=function(){Gc(this);this.h.pauseVideo();zc(this.K);U(this.o,ic());var a=this.i;a&&(a.style.display="block");this.J=!0;this.T=setInterval(this.Aa.bind(this),500)};
n.W=function(){this.h.logImaAdEvent(2,V(this));Gc(this);this.T&&clearInterval(this.T);this.J=!1;var a=this.K;a&&(a.style.display="block");U(this.o,jc());zc(this.i);this.h.playVideo()};
n.wa=function(){Hc(this,!this.J);this.h.logImaAdEvent(this.J?6:5,V(this))};
function Hc(a,b){b!==a.J&&a.g&&(b?(a.g.resume(),U(a.o,ic())):(a.g.pause(),U(a.o,jc())),a.J=b)}
n.va=function(){Fc(this,!this.V)};
function Fc(a,b){a.g&&b!==a.V&&(b?(a.g.setVolume(0),a.h.mute(),U(a.F,{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]})):
(a.g.setVolume(1),a.h.unMute(),U(a.F,kc())),a.V=b)}
n.xa=function(){var a=this;O()?Gc(this):this.i&&ac(this.i).then(function(){a.g&&a.g.resize(window.screen.width,window.screen.height-(a.options.enableControls?40:0),google.ima.ViewMode.FULLSCREEN);U(a.v,{m:"svg",u:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},C:[{m:"g",A:"ytp-fullscreen-button-corner-2",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{m:"g",A:"ytp-fullscreen-button-corner-3",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},
{m:"g",A:"ytp-fullscreen-button-corner-0",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{m:"g",A:"ytp-fullscreen-button-corner-1",C:[{m:"path",D:!0,A:"ytp-svg-fill",u:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]})})};
function Gc(a){if(O())a:{var b=O(),c;$b(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)?O()==b&&(c=document):c=b;if(c&&(b=$b(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],c))){b.call(c)instanceof Promise||Promise.resolve();break a}Promise.resolve()}a.g&&a.g.resize(a.H,a.I,google.ima.ViewMode.NORMAL);U(a.v,hc())}
n.na=function(){Gc(this);Hc(this,!1);this.h.logImaAdEvent(4,V(this))};
n.oa=function(){Hc(this,!1)};
n.pa=function(){Hc(this,!0)};
n.qa=function(){this.h.logImaAdEvent(3,V(this))};
n.ra=function(a){this.h.logImaAdEvent(1,V(this));if(a=a.getAd())this.S=a.getDuration()};
n.Ba=function(){this.P.currentTime=this.h.getCurrentTime();var a=this.h.getSize();if(this.I!==a.height||this.H!==a.width){var b=a.width;a=a.height;if(!this.enableResponsiveDesign()&&(this.H=b,this.I=a,!this.options.enableControls||T(this.s,b+"px",(this.options.enableControls?40:0)+"px"),this.i&&this.l&&(T(this.i,b+"px",a+(this.options.enableControls?40:0)+"px"),T(this.l,b+"px",a+"px"),this.g))){var c=O()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;this.g.resize(b,a,c)}}};
n.ya=function(){var a=this;clearTimeout(this.ha);this.ha=setTimeout(function(){if(a.i&&a.l&&a.g){var b=O()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;if(b!==google.ima.ViewMode.FULLSCREEN){var c=a.i.clientWidth,d=a.i.clientHeight;T(a.l,c+"px",d+"px");a.g.resize(c,d,b)}}},100)};
n.za=function(a){Fc(this,a.data.muted)};
function Dc(a){if(a.j)if(Bc(a)){var b=new google.ima.AdsRequest;a.M=new google.ima.AdsRenderingSettings;a.options.enableControls||(a.M.useStyledLinearAds=!0);a.ga(b,a.M);if(b.adTagUrl){b.linearAdSlotWidth=a.H;b.linearAdSlotHeight=a.I;var c=b.adTagUrl;c.indexOf("?")!==-1?(c=(c||"").split("#")[0],c=c.split("?",2),c=gc(c.length>1?c[1]:c[0])):c={};var d=c;c={};var e=a.h.getVideoData();e.video_id&&!d.vid&&(c.vid=e.video_id);e=a.h.getPlayerMode();if(!d.vpa){var g;b.setAdWillAutoPlay(!((g=e.pfp)==null||
!g.autoplay))}if(!d.vpmute){var f;b.setAdWillPlayMuted(!((f=e.pfp)==null||!f.mutedAutoplay))}c.cust_params="yt_embed_ima=1";d.cust_params&&(c.cust_params=d.cust_params+"&yt_embed_ima=1");f=b.adTagUrl;c=c||{};g=f.split("#",2);f=g[0];g=g.length>1?"#"+g[1]:"";d=f.split("?",2);f=d[0];d=gc(d[1]||"");for(var h in c)d[h]=c[h];h=Tb(d);h?(c=f.indexOf("#"),c<0&&(c=f.length),d=f.indexOf("?"),d<0||d>c?(d=c,e=""):e=f.substring(d+1,c),f=[f.slice(0,d),e,f.slice(c)],c=f[1],f[1]=h?c?c+"&"+h:h:c,h=f[0]+(f[1]?"?"+f[1]:
"")+f[2]):h=f;b.adTagUrl=h+g;a.j.requestAds(b);a.h.logImaAdEvent(8,0)}else R.error("The adsTagUrl field was not set by the embedder.")}else R.error("IMA integration is disabled for this video.")}
n.onVideoDataChange=function(a){a.data.type==="newdata"&&(this.g&&(this.g.destroy(),this.g=null),this.j&&this.j.contentComplete(),Dc(this))};
n.Aa=function(){if(this.O&&this.g){var a=this.S-this.g.getRemainingTime();a=(new Date(1E3*a)).toISOString().substring(14,19);var b=(new Date(1E3*this.S)).toISOString().substring(14,19);this.O.innerText=a+" / "+b}};
n.sa=function(a){this.Z=!0;var b;R.error("IMA AdsLoader error: "+((b=a.getError())==null?void 0:b.getMessage()));this.h.logImaAdEvent(10,V(this));this.g&&this.g.destroy();(Ac(this)||this.U)&&this.W()};
n.ta=function(a){var b;R.error("IMA AdsManager error: "+((b=a.getError())==null?void 0:b.getMessage()));this.h.logImaAdEvent(10,V(this));this.g&&this.g.destroy();this.W()};
function T(a,b,c){a.style.width=b;a.style.height=c}
function zc(a){a&&(a.style.display="none")}
function U(a,b){a.textContent="";b=new P(b);a.append(b.element)}
function Ac(a){a=a.h.getPlayerMode();return a.pfp&&(a.pfp.autoplay||a.pfp.mutedAutoplay)}
function Bc(a){a=a.h.getPlayerMode();return a.pfp&&a.pfp.enableIma}
function V(a){return a.P.currentTime===0?1:a.h.getPlayerState()===0?3:2}
function xc(a){var b,c;return(c=(b=a.K)==null?void 0:b.width)!=null?c:""}
function yc(a){var b,c;return(c=(b=a.K)==null?void 0:b.height)!=null?c:""}
n.enableResponsiveDesign=function(){return yc(this).endsWith("%")&&!!this.options.enableResponsiveDesign&&!this.options.enableControls||xc(this).endsWith("%")&&!!this.options.enableResponsiveDesign};
n.getAdsManager=function(){return this.g};
n.ka=function(){return this.j};A("YT.ImaManager",S);
A("YT.createPlayerForPublishers",function(a,b,c,d){a=Jb(a);var e=document.createElement("div");e.id=a.id+"-player";a.appendChild(e);var g=document.createElement("div");g.id=a.id+"-ad";a.appendChild(g);c=Object.assign({},{imaOptions:{},youtubeOptions:{}},c);c.imaOptions.enableResponsiveDesign=!0;c.youtubeOptions.events||(c.youtubeOptions.events={});c.youtubeOptions.events.onReady&&R.error("onReady event handler is already defined. Overwriting!");c.youtubeOptions.events.onReady=function(){var h,k=new S(f,
e.id,g,b,(h=c)==null?void 0:h.imaOptions);d&&d(f,k)};
if(!c.youtubeOptions.embedConfig)c.youtubeOptions.embedConfig={};else if(typeof c.youtubeOptions.embedConfig==="string")try{c.youtubeOptions.embedConfig=JSON.parse(c.youtubeOptions.embedConfig)}catch(h){R.error("Invalid embed_config JSON."),c.youtubeOptions.embedConfig={}}c.youtubeOptions.embedConfig.adsConfig={disableAds:!0};c.youtubeOptions.embedConfig.enableIma=!0;var f=new YT.Player(e,c.youtubeOptions)});
S.prototype.getAdsLoader=S.prototype.ka;S.prototype.getAdsManager=S.prototype.getAdsManager;function Ic(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Ic.prototype.get=function(){if(this.h>0){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};var Jc;
function Kc(){var a=y.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=L(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var g=e.contentWindow;e=g.document;e.open();e.close();var f="callImmediate"+Math.random(),h=g.location.protocol=="file:"?"*":g.location.protocol+"//"+g.location.host;e=Ia(function(k){if((h=="*"||k.origin==h)&&k.data==f)this.port1.onmessage()},this);
g.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){g.postMessage(f,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.ba;c.ba=null;e()}};
return function(e){d.next={ba:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Lc(){this.h=this.g=null}
Lc.prototype.add=function(a,b){var c=Mc.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Lc.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Mc=new Ic(function(){return new Nc},function(a){return a.reset()});
function Nc(){this.next=this.scope=this.g=null}
Nc.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Nc.prototype.reset=function(){this.next=this.scope=this.g=null};var Oc,Pc=!1,Qc=new Lc;function Rc(a){Oc||Sc();Pc||(Oc(),Pc=!0);Qc.add(a,void 0)}
function Sc(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Oc=function(){a.then(Tc)}}else Oc=function(){var b=Tc;
typeof y.setImmediate!=="function"||y.Window&&y.Window.prototype&&y.Window.prototype.setImmediate==y.setImmediate?(Jc||(Jc=Kc()),Jc(b)):y.setImmediate(b)}}
function Tc(){for(var a;a=Qc.remove();){try{a.g.call(a.scope)}catch(c){Oa(c)}var b=Mc;b.j(a);b.h<100&&(b.h++,a.next=b.g,b.g=a)}Pc=!1}
;function Uc(a){F.call(this);this.s=1;this.l=[];this.o=0;this.g=[];this.h={};this.v=!!a}
Ja(Uc,F);n=Uc.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
function Vc(a,b,c){var d=Wc;if(a=d.h[a]){var e=d.g;(a=a.find(function(g){return e[g+1]==b&&e[g+2]==c}))&&d.X(a)}}
n.X=function(a){var b=this.g[a];if(b){var c=this.h[b];this.o!=0?(this.l.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ea=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,g=arguments.length;e<g;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var f=c[e];Xc(this.g[f+1],this.g[f+2],d)}else{this.o++;try{for(e=0,g=c.length;e<g&&!this.i;e++)f=c[e],this.g[f+1].apply(this.g[f+2],d)}finally{if(this.o--,this.l.length>0&&this.o==0)for(;c=this.l.pop();)this.X(c)}}return e!=0}return!1};
function Xc(a,b,c){Rc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.X,this),delete this.h[a])}else this.g.length=0,this.h={}};
n.N=function(){Uc.fa.N.call(this);this.clear();this.l.length=0};var Yc=["https://www.google.com"];function Zc(){var a=this;this.g=[];this.h=function(){Promise.all(a.g.map(function(b){document.requestStorageAccessFor(b)})).then(function(){window.removeEventListener("click",a.h)})}}
function $c(){return va(function(a){var b=a.return;var c=bb()>=119;return b.call(a,c&&!!navigator.permissions&&!!navigator.permissions.query&&"requestStorageAccessFor"in document)})}
function ad(){var a=new Zc,b=["https://www.youtube.com"];b=b===void 0?Yc:b;va(function(c){switch(c.g){case 1:return pa(c,$c(),2);case 2:if(!c.o){c.g=3;break}return pa(c,Promise.all(b.map(function(d){var e;return va(function(g){if(g.g==1)return g.l=2,pa(g,navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:d}),4);g.g!=2?(e=g.o,e.state==="prompt"&&a.g.push(d),g.g=0,g.l=0):(g.l=0,g.i=null,g.g=0)})})),4);
case 4:a.g.length>0&&window.addEventListener("click",a.h);case 3:return c.return()}})}
;var W={},bd=[],Wc=new Uc,cd={};function dd(){for(var a=v(bd),b=a.next();!b.done;b=a.next())b=b.value,b()}
function ed(a,b){return a.tagName.toLowerCase().substring(0,3)==="yt:"?a.getAttribute(b):a.dataset?a.dataset[b]:a.getAttribute("data-"+b)}
function fd(a){Wc.ea.apply(Wc,arguments)}
;function gd(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function X(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(d!==void 0)return d}return null}
function hd(a,b,c){Y||(Y={},id=new Set,jd.addEventListener("message",function(d){a:if(id.has(d.origin)){try{var e=JSON.parse(d.data)}catch(h){break a}var g=Y[e.id];if(g&&d.origin===g.ia)switch(d=g.Ca,d.s=!0,d.s&&(E(d.o,d.sendMessage,d),d.o.length=0),g=e.event,e=e.info,g){case "apiInfoDelivery":if(z(e))for(var f in e)e.hasOwnProperty(f)&&(d.G[f]=e[f]);break;case "infoDelivery":kd(d,e);break;case "initialDelivery":z(e)&&(clearInterval(d.i),d.playerInfo={},d.G={},ld(d,e.apiInterface),kd(d,e));break;
default:d.j.i||(f={target:d,data:e},d.j.ea(g,f),fd("player."+g,f))}}}));
a=String(X(a,"host"));Y[c]={Ca:b,ia:a};id.add(a)}
var Y=null,id=null,jd=window;function md(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function nd(a){return a.search("get")===0||a.search("is")===0}
;var od=window;
function Z(a,b){this.G={};this.playerInfo={};this.videoTitle="";this.l=this.g=this.h=null;this.i=0;this.s=!1;this.o=[];this.j=null;this.F={};if(!a)throw Error("YouTube player element ID required.");this.id=Da(this);b=Object.assign({title:"video player",videoId:"",width:640,height:360},b||{});if(a=Jb(a)){od.yt_embedsEnableRsaforFromIframeApi&&ad();var c=a.tagName.toLowerCase()==="iframe";b.host||(b.host=c?Rb(a.src):"https://www.youtube.com");this.h=new gd(b);c||(b=pd(this,a),this.l=a,(c=a.parentNode)&&
c.replaceChild(b,a),a=b);this.g=a;this.g.id||(this.g.id="widget"+Da(this.g));W[this.g.id]=this;if(window.postMessage){this.j=new Uc;qd(this);a=X(this.h,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in cd)cd.hasOwnProperty(e)&&rd(this,e)}}}
n=Z.prototype;n.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
n.getIframe=function(){return this.g};
n.addEventListener=function(a,b){var c=b;typeof b==="string"&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);sd(this,a);return this};
function rd(a,b){b=b.split(".");if(b.length===2){var c=b[1];"player"===b[0]&&sd(a,c)}}
n.destroy=function(){this.g&&this.g.id&&(W[this.g.id]=null);var a=this.j;a&&typeof a.dispose=="function"&&a.dispose();if(this.l){a=this.l;var b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Y&&(Y[this.id]=null);this.h=null;this.g&&this.v&&this.g.removeEventListener("load",this.v);this.l=this.g=null};
function td(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.o.push(b)}
function pd(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var g=b[d].value;g!=null&&g!==""&&g!=="null"&&c.setAttribute(b[d].name,g)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title","YouTube "+X(a.h,"title"));(b=X(a.h,"width"))&&
c.setAttribute("width",b.toString());(b=X(a.h,"height"))&&c.setAttribute("height",b.toString());var f=ud(a);f.enablejsapi=window.postMessage?1:0;window.location.host&&(f.origin=window.location.protocol+"//"+window.location.host);f.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(h){var k=window.location.href;var l=k.search(Ub);b:{var m=0;for(var q=h.length;(m=k.indexOf(h,m))>=0&&m<l;){var t=k.charCodeAt(m-1);if(t==38||t==63)if(t=k.charCodeAt(m+q),!t||t==61||t==38||t==35)break b;
m+=q+1}m=-1}if(m<0)k=null;else{q=k.indexOf("&",m);if(q<0||q>l)q=l;m+=h.length+1;k=decodeURIComponent(k.slice(m,q!==-1?q:0).replace(/\+/g," "))}k!==null&&(f[h]=k)});
od.yt_embedsEnableIframeApiSendFullEmbedUrl&&(window.location.href&&(f.forigin=window.location.href),(b=window.location.ancestorOrigins)&&b.length>0&&(f.aorigins=Array.from(b).join(",")),window.document.referrer&&(f.gporigin=window.document.referrer));a=""+X(a.h,"host")+("/embed/"+X(a.h,"videoId"))+"?"+Tb(f);od.yt_embedsEnableIframeSrcWithIntent?(Fb(c,yb(a)),c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=a;return c}
n.da=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):clearInterval(this.i)};
function qd(a){hd(a.h,a,a.id);a.i=setInterval(a.da.bind(a),250);a.g&&(a.v=function(){clearInterval(a.i);a.i=setInterval(a.da.bind(a),250)},a.g.addEventListener("load",a.v))}
function sd(a,b){a.F[b]||(a.F[b]=!0,td(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=JSON.stringify(a);var b=[Rb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var c=0;c<b.length;c++)try{this.g.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&d.name==="SyntaxError")d.message&&d.message.indexOf("target origin ''")>0||console&&console.warn&&console.warn(d);else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};
function ud(a){var b=X(a.h,"playerVars");if(b){var c={},d;for(d in b)c[d]=b[d];b=c}else b={};window!==window.top&&document.referrer&&(b.widget_referrer=document.referrer.substring(0,256));if(a=X(a.h,"embedConfig")){if(z(a))try{a=JSON.stringify(a)}catch(e){console.error("Invalid embed config JSON",e)}b.embed_config=a}return b}
function kd(a,b){if(z(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+X(a.h,"title"))))}}
function ld(a,b){E(b,function(c){this[c]||(c==="getCurrentTime"?this[c]=function(){var d=this.playerInfo.currentTime;if(this.playerInfo.playerState===1){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;e>0&&(d+=Math.min(e,1))}return d}:md(c)?this[c]=function(){this.playerInfo={};
this.G={};td(this,c,arguments);return this}:nd(c)?this[c]=function(){var d=0;
c.search("get")===0?d=3:c.search("is")===0&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){td(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=X(this.h,"host")+("/embed/"+X(this.h,"videoId")),b=Number(X(this.h,"width")),c=Number(X(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Gb(a);d=Gb(d!=null?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.G.namespaces?a?this.G[a]?this.G[a].options||[]:[]:this.G.namespaces||[]:[]};
n.getOption=function(a,b){if(this.G.namespaces&&a&&b&&this.G[a])return this.G[a][b]};
function vd(a){if(a.tagName.toLowerCase()!=="iframe"){var b=ed(a,"videoid");b&&(b={videoId:b,width:ed(a,"width"),height:ed(a,"height")},new Z(a,b))}}
;A("YT.PlayerState.UNSTARTED",-1);A("YT.PlayerState.ENDED",0);A("YT.PlayerState.PLAYING",1);A("YT.PlayerState.PAUSED",2);A("YT.PlayerState.BUFFERING",3);A("YT.PlayerState.CUED",5);A("YT.get",function(a){return W[a]});
A("YT.scan",dd);A("YT.subscribe",function(a,b,c){Wc.subscribe(a,b,c);cd[a]=!0;for(var d in W)W.hasOwnProperty(d)&&rd(W[d],a)});
A("YT.unsubscribe",function(a,b,c){Vc(a,b,c)});
A("YT.Player",Z);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.getIframe;Z.prototype.addEventListener=Z.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
bd.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;b=gb(c.querySelectorAll&&c.querySelector?c.querySelectorAll(".yt-player"):Kb(document,"*","yt-player",b));E(fb(a,b),vd)});
typeof YTConfig!=="undefined"&&YTConfig.parsetags&&YTConfig.parsetags!=="onload"||dd();var wd=y.onYTReady;wd&&wd();var xd=y.onYouTubeIframeAPIReady;xd&&xd();var yd=y.onYouTubePlayerAPIReady;yd&&yd();}).call(this);
