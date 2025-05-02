System.register(["./index-legacy-DsOVKWX6.js"],(function(t,e){"use strict";var n,r,i,s,o,a,c,u,l,h,d,f,p,g,m,y,v,w,b,_,T,E,I,C;return{setters:[t=>{n=t.c,r=t.a2,i=t.i,s=t.d,o=t.r,a=t.j,c=t.D,u=t.F,l=t.C,h=t.f,d=t.a,f=t._,p=t.J,g=t.W,m=t.o,y=t.p,v=t.g,w=t.A,b=t.Y,_=t.K,T=t.h,E=t.e,I=t.V,C=t.t}],execute:function(){t({d:function(t,e,...n){if(t=G(t),1===arguments.length&&(e=wr.newId()),ul("doc","path",e),t instanceof yl){const r=xr.fromString(e,...n);return ll(r),new bl(t,null,new Mr(r))}{if(!(t instanceof bl||t instanceof _l))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xr.fromString(e,...n));return ll(r),new bl(t.firestore,t instanceof _l?t.converter:null,new Mr(r))}}
/**
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
       */,e:function(t,e,...n){if(t=G(t),ul("collection","path",e),t instanceof yl){const r=xr.fromString(e,...n);return hl(r),new _l(t,null,r)}{if(!(t instanceof bl||t instanceof _l))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xr.fromString(e,...n));return hl(r),new _l(t.firestore,null,r)}},f:function(t){t=fl(t,wl);const e=fl(t.firestore,Il),n=Cl(e),r=new mh(e);
/**
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
       */return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ar(or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:n=>{s.su(),e.enqueueAndForget((()=>gu(t,o))),n.fromCache&&"server"===r.source?i.reject(new ar(or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new _u(n,s,{includeMetadataChanges:!0,Ta:!0});return pu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise
/**
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
       */}(n,t._query).then((n=>new ph(e,r,t,n)))},g:
/**
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
       */
function(t){t=fl(t,bl);const e=fl(t.firestore,Il);return function(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:a=>{s.su(),e.enqueueAndForget((()=>gu(t,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new ar(or.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new ar(or.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new _u(ys(n.path),s,{includeMetadataChanges:!0,Ta:!0});return pu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}(Cl(e),t._key).then((n=>function(t,e,n){const r=n.docs.get(e._key),i=new mh(t);return new dh(t,i,e._key,r,new hh(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))},h:function(...t){return new ql("arrayUnion",t)},i:function(...t){return oh._create("startAfter",t,!1)},l:function(t){return sh._create("limit",t,"F")},o:function(t,e="asc"){const n=e,r=Zl("orderBy",t);return ih._create(r,n)},q:function(t,e,...n){let r=[];e instanceof th&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof rh)).length,n=t.filter((t=>t instanceof nh)).length;if(e>1||e>0&&n>0)throw new ar(or.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
       */(r);for(const i of r)t=i._apply(t);return t},s:function(t,e,n){t=fl(t,bl);const r=fl(t.firestore,Il),i=
/**
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
       */
function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r
/**
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
       */}(t.converter,e,n);return yh(r,[Vl(Fl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,oo.none())])},u:function(t,e,n,...r){t=fl(t,bl);const i=fl(t.firestore,Il),s=Fl(i);let o;return o="string"==typeof(e=G(e))||e instanceof Al?function(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[Gl(e,r,n)],c=[i];if(s.length%2!=0)throw new ar(or.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gl(e,s[d])),c.push(s[d+1]);const u=[],l=Bi.empty();for(let d=a.length-1;d>=0;--d)if(!Xl(u,a[d])){const t=a[d];let e=c[d];e=G(e);const n=o.Uu(t);if(e instanceof Ul)u.push(t);else{const r=jl(e,n);null!=r&&(u.push(t),l.set(t,r))}}const h=new ri(u);return new Ll(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.ju(1,e,n);Kl("Data must be an object, but it was:",i,r);const s=[],o=Bi.empty();Xr(r,((t,r)=>{const a=Ql(e,t,n);r=G(r);const c=i.Uu(a);if(r instanceof Ul)s.push(a);else{const t=jl(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new ri(s);return new Ll(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),yh(i,[o.toMutation(t._key,oo.exists(!0))])},w:function(t,e,n){const r=e,i=Zl("where",t);return nh._create(i,r,n)}});const e=t("_",((t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}));
/**
       * @license
       * Copyright 2025 Google LLC
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
       */var S={};
/**
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
       */const A=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},D={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length?n[t.charAt(i)]:0;++i;const o=i<t.length?n[t.charAt(i)]:64;++i;const a=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==o||null==a)throw new k;const c=e<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N=function(t){return function(t){const e=A(t);return D.encodeByteArray(e,!0)}(t).replace(/\./g,"")},x=()=>
/**
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
       */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
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
       */().__FIREBASE_DEFAULTS__,R=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return D.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},L=()=>{try{return x()||(()=>{if("undefined"==typeof process)return;const t=S.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||R()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},M=t=>{const e=(t=>{var e,n;return null===(n=null===(e=L())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},O=()=>{var t;return null===(t=L())||void 0===t?void 0:t.config};
/**
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
       */
class P{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
       */function F(){return!function(){var t;const e=null===(t=L())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function V(){try{return"object"==typeof indexedDB}catch(t){return!1}}function U(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}class q extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(j,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new q(r,o,n)}}const j=/\{\$([^}]+)}/g;function $(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(z(n)&&z(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function z(t){return null!==t&&"object"==typeof t}
/**
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
       */function K(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
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
       */function G(t){return t&&t._delegate?t._delegate:t}class H{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
       */const Q="[DEFAULT]";
/**
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
       */class W{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new P;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
       */(t))try{this.getOrInitializeService({instanceIdentifier:Q})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=Q){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=Q){return this.instances.has(t)}getOptions(t=Q){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===Q?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(t=Q){return this.component?this.component.multipleInstances?t:Q:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class X{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new W(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
       */var Y;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Y||(Y={}));const J={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Z=Y.INFO,tt={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},et=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=tt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class nt{constructor(t){this.name=t,this._logLevel=Z,this._logHandler=et,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?J[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}let rt,it;const st=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap,ut=new WeakMap;let lt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ot.get(t);if("objectStoreNames"===e)return t.objectStoreNames||at.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ht(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(pt(this),e),ft(st.get(this))}:function(...e){return ft(t.apply(pt(this),e))}:function(e,...n){const r=t.call(pt(this),e,...n);return at.set(r,e.sort?e.sort():[e]),ft(r)}}function dt(t){return"function"==typeof t?ht(t):(t instanceof IDBTransaction&&function(t){if(ot.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));ot.set(t,e)}(t),e=t,(rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,lt):t);var e}function ft(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(ft(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&st.set(e,t)})).catch((()=>{})),ut.set(e,t),e}(t);if(ct.has(t))return ct.get(t);const e=dt(t);return e!==t&&(ct.set(t,e),ut.set(e,t)),e}const pt=t=>ut.get(t);function gt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ft(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(ft(o.result),t.oldVersion,t.newVersion,ft(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const mt=["get","getKey","getAll","getAllKeys","count"],yt=["put","add","delete","clear"],vt=new Map;function wt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(vt.get(e))return vt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!mt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return vt.set(e,s),s}var bt;bt=lt,lt={...bt,get:(t,e,n)=>wt(t,e)||bt.get(t,e,n),has:(t,e)=>!!wt(t,e)||bt.has(t,e)};
/**
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
       */
class _t{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Tt="@firebase/app",Et="0.11.4",It=new nt("@firebase/app"),Ct="@firebase/app-compat",St="@firebase/analytics-compat",At="@firebase/analytics",Dt="@firebase/app-check-compat",kt="@firebase/app-check",Nt="@firebase/auth",xt="@firebase/auth-compat",Rt="@firebase/database",Lt="@firebase/data-connect",Mt="@firebase/database-compat",Ot="@firebase/functions",Pt="@firebase/functions-compat",Ft="@firebase/installations",Vt="@firebase/installations-compat",Ut="@firebase/messaging",qt="@firebase/messaging-compat",Bt="@firebase/performance",jt="@firebase/performance-compat",$t="@firebase/remote-config",zt="@firebase/remote-config-compat",Kt="@firebase/storage",Gt="@firebase/storage-compat",Ht="@firebase/firestore",Qt="@firebase/vertexai",Wt="@firebase/firestore-compat",Xt="firebase",Yt="[DEFAULT]",Jt={[Tt]:"fire-core",[Ct]:"fire-core-compat",[At]:"fire-analytics",[St]:"fire-analytics-compat",[kt]:"fire-app-check",[Dt]:"fire-app-check-compat",[Nt]:"fire-auth",[xt]:"fire-auth-compat",[Rt]:"fire-rtdb",[Lt]:"fire-data-connect",[Mt]:"fire-rtdb-compat",[Ot]:"fire-fn",[Pt]:"fire-fn-compat",[Ft]:"fire-iid",[Vt]:"fire-iid-compat",[Ut]:"fire-fcm",[qt]:"fire-fcm-compat",[Bt]:"fire-perf",[jt]:"fire-perf-compat",[$t]:"fire-rc",[zt]:"fire-rc-compat",[Kt]:"fire-gcs",[Gt]:"fire-gcs-compat",[Ht]:"fire-fst",[Wt]:"fire-fst-compat",[Qt]:"fire-vertex","fire-js":"fire-js",[Xt]:"fire-js-all"},Zt=new Map,te=new Map,ee=new Map;function ne(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function re(t){const e=t.name;if(ee.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;ee.set(e,t);for(const n of Zt.values())ne(n,t);for(const n of te.values())ne(n,t);return!0}function ie(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
       */
const se=new B("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
       */
class oe{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new H("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}
/**
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
       */function ae(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r=Object.assign({name:Yt,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw se.create("bad-app-name",{appName:String(i)});if(n||(n=O()),!n)throw se.create("no-options");const s=Zt.get(i);if(s){if($(n,s.options)&&$(r,s.config))return s;throw se.create("duplicate-app",{appName:i})}const o=new X(i);for(const c of ee.values())o.addComponent(c);const a=new oe(n,r,o);return Zt.set(i,a),a}function ce(t=Yt){const e=Zt.get(t);if(!e&&t===Yt&&O())return ae();if(!e)throw se.create("no-app",{appName:t});return e}function ue(t,e,n){var r;let i=null!==(r=Jt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void It.warn(t.join(" "))}re(new H(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
       */const le="firebase-heartbeat-store";let he=null;function de(){return he||(he=gt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(le)}catch(n){console.warn(n)}}}).catch((t=>{throw se.create("idb-open",{originalErrorMessage:t.message})}))),he}async function fe(t,e){try{const n=(await de()).transaction(le,"readwrite"),r=n.objectStore(le);await r.put(e,pe(t)),await n.done}catch(n){if(n instanceof q)It.warn(n.message);else{const t=se.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});It.warn(t.message)}}}function pe(t){return`${t.name}!${t.options.appId}`}
/**
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
       */class ge{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ye(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=me();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
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
       */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){It.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=me(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),ve(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ve(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=N(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return It.warn(e),""}}}function me(){return(new Date).toISOString().substring(0,10)}class ye{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!V()&&U().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await de()).transaction(le),n=await e.objectStore(le).get(pe(t));return await e.done,n}catch(e){if(e instanceof q)It.warn(e.message);else{const t=se.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});It.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ve(t){return N(JSON.stringify({version:2,heartbeats:t})).length}var we;we="",re(new H("platform-logger",(t=>new _t(t)),"PRIVATE")),re(new H("heartbeat",(t=>new ge(t)),"PRIVATE")),ue(Tt,Et,we),ue(Tt,Et,"esm2017"),ue("fire-js",""),
/**
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
       */
ue("firebase","11.6.0","app");const be="@firebase/installations",_e="0.6.13",Te=1e4,Ee=`w:${_e}`,Ie="FIS_v2",Ce=36e5,Se=new B("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ae(t){return t instanceof q&&t.code.includes("request-failed")}
/**
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
       */function De({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function ke(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Ne(t,e){const n=(await e.json()).error;return Se.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function xe({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Re(t,{refreshToken:e}){const n=xe(t);return n.append("Authorization",function(t){return`${Ie} ${t}`}
/**
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
       */(e)),n}async function Le(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
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
       */function Me(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
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
       */
/**
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
       */
const Oe=/^[cdef][\w-]{21}$/;function Pe(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
/**
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
       */(t);return Oe.test(e)?e:""}catch(t){return""}}function Fe(t){return`${t.appName}!${t.appId}`}
/**
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
       */const Ve=new Map;function Ue(t,e){const n=Fe(t);qe(n,e),function(t,e){const n=(!Be&&"BroadcastChannel"in self&&(Be=new BroadcastChannel("[Firebase] FID Change"),Be.onmessage=t=>{qe(t.data.key,t.data.fid)}),Be);n&&n.postMessage({key:t,fid:e}),0===Ve.size&&Be&&(Be.close(),Be=null)}(n,e)}function qe(t,e){const n=Ve.get(t);if(n)for(const r of n)r(e)}let Be=null;
/**
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
       */
const je="firebase-installations-store";let $e=null;function ze(){return $e||($e=gt("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(je)}})),$e}async function Ke(t,e){const n=Fe(t),r=(await ze()).transaction(je,"readwrite"),i=r.objectStore(je),s=await i.get(n);return await i.put(e,n),await r.done,s&&s.fid===e.fid||Ue(t,e.fid),e}async function Ge(t){const e=Fe(t),n=(await ze()).transaction(je,"readwrite");await n.objectStore(je).delete(e),await n.done}async function He(t,e){const n=Fe(t),r=(await ze()).transaction(je,"readwrite"),i=r.objectStore(je),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Ue(t,o.fid),o}
/**
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
       */async function Qe(t){let e;const n=await He(t.appConfig,(n=>{const r=function(t){const e=t||{fid:Pe(),registrationStatus:0};return Ye(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(Se.create("app-offline"))};const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=De(t),i=xe(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:Ie,appId:t.appId,sdkVersion:Ee},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Le((()=>fetch(r,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:ke(t.authToken)}}throw await Ne("Create Installation",c)}(t,e);return Ke(t.appConfig,n)}catch(n){throw Ae(n)&&409===n.customData.serverCode?await Ge(t.appConfig):await Ke(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:We(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function We(t){let e=await Xe(t.appConfig);for(;1===e.registrationStatus;)await Me(100),e=await Xe(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Qe(t);return n||e}return e}function Xe(t){return He(t,(t=>{if(!t)throw Se.create("installation-not-found");return Ye(t)}))}function Ye(t){return 1===(e=t).registrationStatus&&e.registrationTime+Te<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
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
       */}async function Je({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${De(t)}/${e}/authTokens:generate`}
/**
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
       */(t,n),i=Re(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:Ee,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Le((()=>fetch(r,a)));if(c.ok)return ke(await c.json());throw await Ne("Generate Auth Token",c)}async function Ze(t,e=!1){let n;const r=await He(t.appConfig,(r=>{if(!en(r))throw Se.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ce}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await tn(t.appConfig);for(;1===n.authToken.requestStatus;)await Me(100),n=await tn(t.appConfig);const r=n.authToken;return 0===r.requestStatus?Ze(t,e):r}(t,e),r;{if(!navigator.onLine)throw Se.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await Je(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ke(t.appConfig,r),n}catch(n){if(!Ae(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ke(t.appConfig,n)}else await Ge(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function tn(t){return He(t,(t=>{if(!en(t))throw Se.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Te<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
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
       */}))}function en(t){return void 0!==t&&2===t.registrationStatus}
/**
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
       */
async function nn(t,e=!1){const n=t;return await async function(t){const{registrationPromise:e}=await Qe(t);e&&await e}
/**
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
       */(n),(await Ze(n,e)).token}function rn(t){return Se.create("missing-app-config-values",{valueName:t})}
/**
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
       */const sn="installations",on=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw rn("App Configuration");if(!t.name)throw rn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:ie(e,"heartbeat"),_delete:()=>Promise.resolve()}},an=t=>{const e=ie(t.getProvider("app").getImmediate(),sn).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await Qe(e);return r?r.catch(console.error):Ze(e).catch(console.error),n.fid}(e),getToken:t=>nn(e,t)}};re(new H(sn,on,"PUBLIC")),re(new H("installations-internal",an,"PRIVATE")),ue(be,_e),ue(be,_e,"esm2017");
/**
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
       */
const cn="analytics",un="https://www.googletagmanager.com/gtag/js",ln=new nt("@firebase/analytics"),hn=new B("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
       */
function dn(t){if(!t.startsWith(un)){const e=hn.create("invalid-gtag-resource",{gtagURL:t});return ln.warn(e.message),""}return t}function fn(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function pn(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:dn}),r=document.createElement("script"),i=`${un}?l=${t}&id=${e}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function gn(t,e,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await fn(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ln.error(s)}}(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await async function(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=(await fn(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(a){ln.error(a)}t("config",i,s)}(t,e,n,r,i,o)}else if("consent"===i){const[e,n]=s;t("consent",e,n)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){ln.error(o)}}}const mn=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function yn(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vn(t,e=mn,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw hn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw hn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bn;return setTimeout((async()=>{a.abort()}),6e4),wn({appId:r,apiKey:i,measurementId:s},o,a,e)}async function wn(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=mn){var s;const{appId:o,measurementId:a}=t;try{await function(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(r,e)}catch(c){if(a)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const e=await async function(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:yn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw hn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(o),e}catch(c){const e=c;if(!function(t){if(!(t instanceof q&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(i.deleteThrottleMetadata(o),a)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?K(n,i.intervalMillis,30):K(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),ln.debug(`Calling attemptFetch again in ${u} millis`),wn(t,l,r,i)}}class bn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function _n(t,e,n,r,i,s,o){var a;const c=vn(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>ln.error(t))),e.push(c);const u=
/**
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
       */
async function(){if(!V())return ln.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await U()}catch(t){return ln.warn(hn.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(un)&&n.src.includes(t))return n;return null}
/**
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
       */)(s)||pn(s,l.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
/**
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
       */class Tn{constructor(t){this.app=t}_delete(){return delete En[this.app.options.appId],Promise.resolve()}}let En={},In=[];const Cn={};let Sn,An,Dn="dataLayer",kn=!1;function Nn(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=hn.create("invalid-analytics-context",{errorInfo:e});ln.warn(n.message)}}function xn(t,e,n){Nn();const r=t.options.appId;if(!r)throw hn.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw hn.create("no-api-key");ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=En[r])throw hn.create("already-exists",{id:r});if(!kn){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Dn);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=gn(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}(En,In,Cn,Dn,"gtag");An=t,Sn=e,kn=!0}return En[r]=_n(t,In,Cn,e,Sn,Dn,n),new Tn(t)}function Rn(t,e,n,r){t=G(t),async function(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(An,En[t.app.options.appId],e,n,r).catch((t=>ln.error(t)))}const Ln="@firebase/analytics",Mn="0.10.12";re(new H(cn,((t,{options:e})=>xn(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),re(new H("analytics-internal",(function(t){try{const e=t.getProvider(cn).getImmediate();return{logEvent:(t,n,r)=>Rn(e,t,n,r)}}catch(e){throw hn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ue(Ln,Mn),ue(Ln,Mn,"esm2017");var On,Pn,Fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */(function(){var t;
/** @license

       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,i=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var i={};function s(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],0>t?-1:0)})):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new r(e,0)}var a=s(0),c=s(1),u=s(16777216);function l(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function h(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(h(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(h(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(h(t)||h(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;0>=r.l(t);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!l(r);){var u=s.add(r);0>=u.l(t)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return e=f(t,i.j(e)),new g(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(e);h(u)||0<u.l(t);)u=(s=o(n-=r)).j(e);l(s)&&(s=c),i=i.add(s),t=f(t,u)}return new g(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(h(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(h(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var i=m(n,e).g,s=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return h(t=f(this,t))?-1:l(t)?0:1},t.abs=function(){return h(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(h(this))return h(t)?d(this).j(d(t)):d(d(this).j(t));if(h(t))return d(this.j(d(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=t.i(s)>>>16,m=65535&t.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,Pn=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<e.length;s+=8){var c=Math.min(8,e.length-s),u=parseInt(e.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},On=r}).apply(void 0!==Fn?Fn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Vn,Un,qn,Bn,jn,$n,zn,Kn,Gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t},n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Gn&&Gn];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var i=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}(r=r(s=i[t=t[t.length-1]]))!=s&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t,e){return e}))}}));
/** @license

       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */
var r=r||{},i=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(s(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<b.length;e++)n=b[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function T(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function E(t){i.setTimeout((()=>{throw t}),0)}function I(){var t=k;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var C=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new S),(t=>t.reset()));class S{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,D=!1,k=new class{constructor(){this.h=this.g=null}add(t,e){const n=C.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const t=i.Promise.resolve(void 0);A=()=>{t.then(x)}};var x=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){E(n)}var e=C;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function R(){this.s=this.s,this.C=this.C}function L(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},L.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function O(t,e){if(L.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&O.aa.h.call(this)}}h(O,L);var P={2:"touch",3:"pen",4:"mouse"};O.prototype.h=function(){O.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++V,this.da=this.fa=!1}function q(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function B(t){this.src=t,this.g={},this.h=0}function j(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(q(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),K={};function G(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)G(t,e[s],n,r,i);return null}return n=Z(n),t&&t[F]?t.K(e,n,!!o(r)&&!!r.capture,i):function(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=Y(t);if(c||(t[z]=c=new B(t)),(n=c.add(e,n,r,a,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=X;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)M||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(W(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,i)}function H(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)H(t,e[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&-1<(n=$(s=t.g[e],n,r,i))&&(q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--))):t&&(t=Y(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,r,i)),(n=-1<t?e[t]:null)&&Q(n))}function Q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])j(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(W(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Y(e))?(j(n,t),0==n.h&&(n.src=null,e[z]=null)):q(t)}}}function W(t){return t in K?K[t]:K[t]="on"+t}function X(t,e){if(t.da)t=!0;else{e=new O(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&Q(t),t=n.call(r,e)}return t}function Y(t){return(t=t[z])instanceof B?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function tt(){R.call(this),this.i=new B(this),this.M=this,this.F=null}function et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new L(e,t);else if(e instanceof L)e.target=e.target||t;else{var i=e;_(e=new L(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nt(o,r,!0,e)&&i}if(i=nt(o=e.g=t,r,!0,e)&&i,i=nt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=nt(o=e.g=n[s],r,!1,e)&&i}function nt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&j(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function rt(t,e,n){if("function"==typeof t)n&&(t=u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function it(t){t.g=rt((()=>{t.g=null,t.i&&(t.i=!1,it(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(tt,R),tt.prototype[F]=!0,tt.prototype.removeEventListener=function(t,e,n,r){H(this,t,e,n,r)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)q(n[r]);delete e.g[t],e.h--}}this.F=null},tt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},tt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class st extends R{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){R.call(this),this.h=t,this.g={}}h(ot,R);var at=[];function ct(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Q(t)}),t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ct(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=i.JSON.stringify,lt=i.JSON.parse,ht=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function dt(){}function ft(t){return t.h||(t.h=t.i())}function pt(){}dt.prototype.h=null;var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){L.call(this,"d")}function yt(){L.call(this,"c")}h(mt,L),h(yt,L);var vt={},wt=null;function bt(){return wt=wt||new tt}function _t(t){L.call(this,vt.La,t)}function Tt(t){const e=bt();et(e,new _t(e))}function Et(t,e){L.call(this,vt.STAT_EVENT,t),this.stat=e}function It(t){const e=bt();et(e,new Et(e,t))}function Ct(t,e){L.call(this,vt.Ma,t),this.size=e}function St(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){t()}),e)}function At(){this.g=!0}function Dt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ut(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}vt.La="serverreachability",h(_t,L),vt.STAT_EVENT="statevent",h(Et,L),vt.Ma="timingevent",h(Ct,L),At.prototype.xa=function(){this.g=!1},At.prototype.info=function(){};var kt,Nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Rt(){}function Lt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}h(Rt,dt),Rt.prototype.g=function(){return new XMLHttpRequest},Rt.prototype.i=function(){return{}},kt=new Rt;var Ot={},Pt={};function Ft(t,e,n){t.L=1,t.v=ue(ie(e)),t.m=n,t.P=!0,Vt(t,null)}function Vt(t,e){t.F=Date.now(),Bt(t),t.A=ie(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Ee(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Mt,t.g=hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new st(u(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(at[0]=i.toString()),i=at);for(var s=0;s<i.length;s++){var o=G(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.j.Ca}function qt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Pt:(n=Number(e.substring(n,r)),isNaN(n)?Ot:(r+=1)+n>e.length?Pt:(e=e.slice(r,r+n),t.C=r+n,e))}function Bt(t){t.S=Date.now()+t.I,jt(t,t.I)}function jt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=St(u(t.ba,t),e)}function $t(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||on(t.j,t)}function Kt(t){$t(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Gt(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Yt(n.h,t)))if(!t.K&&Yt(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sn(n),Qe(n)}en(n),It(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=St(u(n.Za,n),6e3));if(1>=Xt(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else cn(n,11)}else if((t.K||n.g==t)&&sn(n),!p(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ce(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=ln(r,r.J?r.ia:null,r.W),o.K){Zt(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&($t(a),Bt(a)),r.g=o}else tn(r);0<n.i.length&&Xe(n)}else"stop"!=u[0]&&"close"!=u[0]||cn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cn(n,7):He(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Tt()}catch(l){}}Lt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==$e(t)?e.j():this.Y(t)},Lt.prototype.Y=function(t){try{if(t==this.g)t:{const d=$e(this.g);var e=this.g.Ba();if(this.g.Z(),!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||ze(this.g)))){this.J||4!=d||7==e||Tt(),$t(this);var n=this.g.Z();this.X=n;e:if(Ut(this)){var r=ze(this.g);t="";var s=r.length,o=4==$e(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Kt(this),zt(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,It(12),Kt(this),zt(this);break t}Dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gt(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=qt(this,a),t==Pt){4==d&&(this.s=4,It(14),n=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Ot){this.s=4,It(15),Dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Dt(this.i,this.l,t,null),Gt(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(h),h.M=!0,It(11))}}else Dt(this.i,this.l,a,"[Invalid Chunked Response]"),Kt(this),zt(this)}else Dt(this.i,this.l,a,null),Gt(this,a);4==d&&Kt(this),this.o&&!this.J&&(4==d?on(this.j,this):(this.o=!1,Bt(this)))}else(function(t){const e={};t=(t.g&&2<=$e(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=T(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Kt(this),zt(this)}}}catch(d){}},Lt.prototype.cancel=function(){this.J=!0,Kt(this)},Lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Tt(),It(17)),Kt(this),this.s=2,zt(this)):jt(this,this.S-t)};var Ht=class{constructor(t,e){this.g=t,this.map=e}};function Qt(t){this.l=t||10,t=i.PerformanceNavigationTiming?0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xt(t){return t.h?1:t.g?t.g.size:0}function Yt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jt(t,e){t.g?t.g.add(e):t.h=e}function Zt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}Qt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ne=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof re){this.h=t.h,se(this,t.j),this.o=t.o,this.g=t.g,oe(this,t.s),this.l=t.l;var e=t.i,n=new we;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ae(this,n),this.m=t.m}else t&&(e=String(t).match(ne))?(this.h=!1,se(this,e[1]||"",!0),this.o=le(e[2]||""),this.g=le(e[3]||"",!0),oe(this,e[4]),this.l=le(e[5]||"",!0),ae(this,e[6]||"",!0),this.m=le(e[7]||"")):(this.h=!1,this.i=new we(null,this.h))}function ie(t){return new re(t)}function se(t,e,n){t.j=n?le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ae(t,e,n){e instanceof we?(t.i=e,function(t,e){e&&!t.j&&(be(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(_e(this,e),Ee(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=he(e,ye)),t.i=new we(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function ue(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function he(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,de),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function de(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(he(e,pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(he(e,pe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(he(n,"/"==n.charAt(0)?me:ge,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",he(n,ve)),t.join("")};var fe,pe=/[#\/\?@]/g,ge=/[#\?:]/g,me=/[#\?]/g,ye=/[#\?@]/g,ve=/#/g;function we(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function be(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function _e(t,e){be(t),e=Ie(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Te(t,e){return be(t),e=Ie(t,e),t.g.has(e)}function Ee(t,e,n){_e(t,e),0<n.length&&(t.i=null,t.g.set(Ie(t,e),d(n)),t.h+=n.length)}function Ie(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ce(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Se(){this.g=new ht}function Ae(t,e,n){const r=n||"";try{ee(t,(function(t,n){let i=t;o(t)&&(i=ut(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function De(t){this.l=t.Ub||null,this.j=t.eb||!1}function ke(t,e){tt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ne(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function xe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Re(t)}function Re(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Le(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Me(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Le(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ce(t,e,n))}function Oe(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=we.prototype).add=function(t,e){be(this),this.i=null,t=Ie(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){be(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){be(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){be(this);let e=[];if("string"==typeof t)Te(this,t)&&(e=e.concat(this.g.get(Ie(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return be(this),this.i=null,Te(this,t=Ie(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},h(De,dt),De.prototype.g=function(){return new ke(this.l,this.j)},De.prototype.i=(fe={},function(){return fe}),h(ke,tt),(t=ke.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Re(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Re(this)),this.g&&(this.readyState=3,Re(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ne(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xe(this):Re(this),3==this.readyState&&Ne(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,xe(this))},t.Qa=function(t){this.g&&(this.response=t,xe(this))},t.ga=function(){this.g&&xe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ke.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Oe,tt);var Pe=/^https?$/i,Fe=["POST","PUT"];function Ve(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Ue(t),Be(t)}function Ue(t){t.A||(t.A=!0,et(t,"complete"),et(t,"error"))}function qe(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=$e(t)||2!=t.Z()))if(t.u&&4==$e(t))rt(t.Ea,0,t);else if(et(t,"readystatechange"),4==$e(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){var o=String(t.D).match(ne)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Pe.test(o?o.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var a=2<$e(t)?t.g.statusText:""}catch(c){a=""}t.l=a+" ["+t.Z()+"]",Ue(t)}}finally{Be(t)}}}function Be(t,e){if(t.g){je(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function je(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function $e(t){return t.g?t.g.readyState:0}function ze(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Qn){return null}}function Ke(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ge(t){this.Aa=0,this.i=[],this.j=new At,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ke("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ke("baseRetryDelayMs",5e3,t),this.cb=Ke("retryDelaySeedMs",1e4,t),this.Wa=Ke("forwardChannelMaxRetries",2,t),this.wa=Ke("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Qt(t&&t.concurrentRequestLimit),this.Da=new Se,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function He(t){if(We(t),3==t.G){var e=t.U++,n=ie(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),Je(t,n),(e=new Lt(t,t.j,e)).L=2,e.v=ue(ie(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Bt(e)}un(t)}function Qe(t){t.g&&(nn(t),t.g.cancel(),t.g=null)}function We(t){Qe(t),t.u&&(i.clearTimeout(t.u),t.u=null),sn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function Xe(t){if(!Wt(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||N(),D||(A(),D=!0),k.add(e,t),t.B=0}}function Ye(t,e){var n;n=e?e.l:t.U++;const r=ie(t.I);ce(r,"SID",t.K),ce(r,"RID",n),ce(r,"AID",t.T),Je(t,r),t.m&&t.o&&Me(r,t.m,t.o),n=new Lt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Ze(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Jt(t.h,n),Ft(n,r,e)}function Je(t,e){t.H&&v(t.H,(function(t,n){ce(e,n,t)})),t.l&&ee({},(function(t,n){ce(e,n,t)}))}function Ze(t,e,n){n=Math.min(t.i.length,n);var r=t.l?u(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{Ae(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function tn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||N(),D||(A(),D=!0),k.add(e,t),t.v=0}}function en(t){return!(t.g||t.u||3<=t.v||(t.Y++,t.u=St(u(t.Fa,t),an(t,t.v)),t.v++,0))}function nn(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function rn(t){t.g=new Lt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ie(t.qa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.T),ce(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ce(e,"TO",t.ja),ce(e,"TYPE","xmlhttp"),Je(t,e),t.m&&t.o&&Me(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ue(ie(e)),n.m=null,n.P=!0,Vt(n,t)}function sn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function on(t,e){var n=null;if(t.g==e){sn(t),nn(t),t.g=null;var r=2}else{if(!Yt(t.h,e))return;n=e.D,Zt(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;et(r=bt(),new Ct(r,n)),Xe(t)}else tn(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==r&&function(t,e){return!(Xt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=St(u(t.Ga,t,e),an(t,t.B)),t.B++,0)))}(t,e)||2==r&&en(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cn(t,5);break;case 4:cn(t,10);break;case 3:cn(t,6);break;default:cn(t,2)}}function an(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function cn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.fb,t),r=t.Xa;const e=!r;r=new re(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||se(r,"https"),ue(r),e?function(t,e){const n=new At;if(i.Image){const r=new Image;r.onload=l(Ce,n,"TestLoadImage: loaded",!0,e,r),r.onerror=l(Ce,n,"TestLoadImage: error",!1,e,r),r.onabort=l(Ce,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=l(Ce,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new At;const n=new AbortController,r=setTimeout((()=>{n.abort(),Ce(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(r),t.ok?Ce(0,0,!0,e):Ce(0,0,!1,e)})).catch((()=>{clearTimeout(r),Ce(0,0,!1,e)}))}(r.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),un(t),We(t)}function un(t){if(t.G=0,t.ka=[],t.l){const e=te(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function ln(t,e,n){var r=n instanceof re?ie(n):new re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),oe(r,r.s);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new re(null);r&&se(o,r),e&&(o.g=e),s&&oe(o,s),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ce(r,n,e),ce(r,"VER",t.la),Je(t,r),r}function hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new Oe(new De({eb:n})):new Oe(t.pa)).Ha(t.J),e}function dn(){}function fn(){}function pn(t,e){tt.call(this),this.g=new Ge(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new yn(this)}function gn(t){mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mn(){yt.call(this),this.status=1}function yn(t){this.g=t}(t=Oe.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kt.g(),this.v=this.o?ft(this.o):ft(kt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Ve(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Fe,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{je(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Ve(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Be(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Be(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qe(this):this.bb())},t.bb=function(){qe(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<$e(this)?this.g.status:-1}catch(fe){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(fe){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),lt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Ge.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){It(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=ln(this,null,this.W),Xe(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Lt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ze(this,i,e),ce(n=ie(this.I),"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Je(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Le(s)))+"&"+e:this.m&&Me(n,this.m,s)),Jt(this.h,i),this.Ua&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.T=!0,Ft(i,n,null)):Ft(i,n,e),this.G=2}}else 3==this.G&&(t?Ye(this,t):0==this.i.length||Wt(this.h)||Ye(this))},t.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=St(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Qe(this),rn(this))},t.Za=function(){null!=this.C&&(this.C=null,Qe(this),en(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=dn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},fn.prototype.g=function(t,e){return new pn(t,e)},h(pn,tt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){He(this.g)},pn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ut(t),t=n);e.i.push(new Ht(e.Ya++,t)),3==e.G&&Xe(e)},pn.prototype.N=function(){this.g.l=null,delete this.j,He(this.g),delete this.g,pn.aa.N.call(this)},h(gn,mt),h(mn,yt),h(yn,dn),yn.prototype.ua=function(){et(this.g,"a")},yn.prototype.ta=function(t){et(this.g,new gn(t))},yn.prototype.sa=function(t){et(this.g,new mn)},yn.prototype.ra=function(){et(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Kn=function(){return new fn},zn=function(){return bt()},$n=vt,jn={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nt.NO_ERROR=0,Nt.TIMEOUT=8,Nt.HTTP_ERROR=6,Bn=Nt,xt.COMPLETE="complete",qn=xt,pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Un=pt,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Vn=Oe}).apply(void 0!==Gn?Gn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Hn="@firebase/firestore",Qn="4.7.10";
/**
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
       */class Wn{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wn.UNAUTHENTICATED=new Wn(null),Wn.GOOGLE_CREDENTIALS=new Wn("google-credentials-uid"),Wn.FIRST_PARTY=new Wn("first-party-uid"),Wn.MOCK_USER=new Wn("mock-user");
/**
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
       */
let Xn="11.5.0";
/**
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
       */const Yn=new nt("@firebase/firestore");function Jn(){return Yn.logLevel}function Zn(t,...e){if(Yn.logLevel<=Y.DEBUG){const n=e.map(nr);Yn.debug(`Firestore (${Xn}): ${t}`,...n)}}function tr(t,...e){if(Yn.logLevel<=Y.ERROR){const n=e.map(nr);Yn.error(`Firestore (${Xn}): ${t}`,...n)}}function er(t,...e){if(Yn.logLevel<=Y.WARN){const n=e.map(nr);Yn.warn(`Firestore (${Xn}): ${t}`,...n)}}function nr(t){if("string"==typeof t)return t;try{
/**
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
       */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
       */function rr(t="Unexpected state"){const e=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function ir(t,e){t||rr()}function sr(t,e){return t}
/**
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
       */const or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ar extends q{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
       */class cr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
       */class ur{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wn.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dr{constructor(t){this.t=t,this.currentUser=Wn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ir(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Zn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zn("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ir("string"==typeof e.accessToken),new ur(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ir(null===t||"string"==typeof t),new Wn(t)}}class fr{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Wn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class pr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fr(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Wn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(t,e){var n;this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){ir(void 0===this.o);const n=t=>{null!=t.error&&Zn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Zn("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Zn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Zn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new gr(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ir("string"==typeof t.token),this.R=t.token,new gr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
       */function yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
       */function vr(){return new TextEncoder}
/**
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
       */class wr{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=yr(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function br(t,e){return t<e?-1:t>e?1:0}function _r(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return br(r,i);{const s=vr(),o=Er(s.encode(Tr(t,n)),s.encode(Tr(e,n)));return 0!==o?o:br(r,i)}}n+=r>65535?2:1}return br(t.length,e.length)}function Tr(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Er(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return br(t[n],e[n]);return br(t.length,e.length)}function Ir(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
       */const Cr=-62135596800,Sr=1e6;class Ar{static now(){return Ar.fromMillis(Date.now())}static fromDate(t){return Ar.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Sr);return new Ar(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Cr)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sr}_compareTo(t){return this.seconds===t.seconds?br(this.nanoseconds,t.nanoseconds):br(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Cr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
       */class Dr{static fromTimestamp(t){return new Dr(t)}static min(){return new Dr(new Ar(0,0))}static max(){return new Dr(new Ar(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
       */const kr="__name__";class Nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&rr(),void 0===n?n=t.length-e:n>t.length-e&&rr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=Nr.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return br(t.length,e.length)}static compareSegments(t,e){const n=Nr.isNumericId(t),r=Nr.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Nr.extractNumericId(t).compare(Nr.extractNumericId(e)):_r(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return On.fromString(t.substring(4,t.length-2))}}class xr extends Nr{construct(t,e,n){return new xr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ar(or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new xr(e)}static emptyPath(){return new xr([])}}const Rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lr extends Nr{construct(t,e,n){return new Lr(t,e,n)}static isValidIdentifier(t){return Rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===kr}static keyField(){return new Lr([kr])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ar(or.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ar(or.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ar(or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ar(or.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Lr(e)}static emptyPath(){return new Lr([])}}
/**
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
       */class Mr{constructor(t){this.path=t}static fromPath(t){return new Mr(xr.fromString(t))}static fromName(t){return new Mr(xr.fromString(t).popFirst(5))}static empty(){return new Mr(xr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===xr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return xr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Mr(new xr(t.slice()))}}
/**
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
       */function Or(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Pr(Dr.min(),Mr.empty(),-1)}static max(){return new Pr(Dr.max(),Mr.empty(),-1)}}function Fr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Mr.comparator(t.documentKey,e.documentKey),0!==n?n:br(t.largestBatchId,e.largestBatchId)
/**
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
       */)}const Vr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
       */async function qr(t){if(t.code!==or.FAILED_PRECONDITION||t.message!==Vr)throw t;Zn("LocalStore","Unexpectedly lost primary lease")}
/**
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
       */class Br{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Br(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Br?e:Br.resolve(e)}catch(t){return Br.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Br.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Br.reject(e)}static resolve(t){return new Br(((e,n)=>{e(t)}))}static reject(t){return new Br(((e,n)=>{n(t)}))}static waitFor(t){return new Br(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Br.resolve(!1);for(const n of t)e=e.next((t=>t?Br.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Br(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Br(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}function jr(t){return"IndexedDbTransactionError"===t.name}
/**
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
       */class $r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}$r.ae=-1;
/**
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
       */const zr=-1;function Kr(t){return null==t}function Gr(t){return 0===t&&1/t==-1/0}function Hr(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Qr(t){return t+""}
/**
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
       */function Wr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
       */class Jr{constructor(t,e){this.comparator=t,this.root=e||ti.EMPTY}insert(t,e){return new Jr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ti.BLACK,null,null))}remove(t){return new Jr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ti.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ti{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ti.RED,this.left=null!=r?r:ti.EMPTY,this.right=null!=i?i:ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ti(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ti.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ti.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw rr();if(this.right.isRed())throw rr();const t=this.left.check();if(t!==this.right.check())throw rr();return t+(this.isRed()?0:1)}}ti.EMPTY=null,ti.RED=!0,ti.BLACK=!1,ti.EMPTY=new class{constructor(){this.size=0}get key(){throw rr()}get value(){throw rr()}get color(){throw rr()}get left(){throw rr()}get right(){throw rr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ti(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
       */
class ei{constructor(t){this.comparator=t,this.data=new Jr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ni(this.data.getIterator())}getIteratorFrom(t){return new ni(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ei))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ei(this.comparator);return e.data=t,e}}class ni{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
       */class ri{constructor(t){this.fields=t,t.sort(Lr.comparator)}static empty(){return new ri([])}unionWith(t){let e=new ei(Lr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ri(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ir(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
       */class ii extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
       */class si{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ii("Invalid base64 string: "+t):t}}(t);return new si(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new si(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
       */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return br(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}si.EMPTY_BYTE_STRING=new si("");const oi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(ir(!!t),"string"==typeof t){let e=0;const n=oi.exec(t);if(ir(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ci(t.seconds),nanos:ci(t.nanos)}}function ci(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ui(t){return"string"==typeof t?si.fromBase64String(t):si.fromUint8Array(t)}
/**
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
       */const li="server_timestamp",hi="__type__",di="__previous_value__",fi="__local_write_time__";function pi(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[hi])||void 0===n?void 0:n.stringValue)===li}function gi(t){const e=t.mapValue.fields[di];return pi(e)?gi(e):e}function mi(t){const e=ai(t.mapValue.fields[fi].timestampValue);return new Ar(e.seconds,e.nanos)}
/**
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
       */class yi{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}const vi="(default)";class wi{constructor(t,e){this.projectId=t,this.database=e||vi}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===vi}isEqual(t){return t instanceof wi&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
       */const bi="__type__",_i="__max__",Ti={},Ei="__vector__",Ii="value";function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pi(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_i}
/**
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
       */(t)?9007199254740991:function(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[bi])||void 0===n?void 0:n.stringValue)===Ei}(t)?10:11:rr()}function Si(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ai(t.timestampValue),r=ai(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ui(t.bytesValue).isEqual(ui(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ci(t.geoPointValue.latitude)===ci(e.geoPointValue.latitude)&&ci(t.geoPointValue.longitude)===ci(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ci(t.integerValue)===ci(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ci(t.doubleValue),r=ci(e.doubleValue);return n===r?Gr(n)===Gr(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ir(t.arrayValue.values||[],e.arrayValue.values||[],Si);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Wr(n)!==Wr(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Si(n[i],r[i])))return!1;return!0}(t,e);default:return rr()}}function Ai(t,e){return void 0!==(t.values||[]).find((t=>Si(t,e)))}function Di(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return br(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return br(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ci(t.integerValue||t.doubleValue),r=ci(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ki(t.timestampValue,e.timestampValue);case 4:return ki(mi(t),mi(e));case 5:return _r(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ui(t),r=ui(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=br(n[i],r[i]);if(0!==t)return t}return br(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=br(ci(t.latitude),ci(e.latitude));return 0!==n?n:br(ci(t.longitude),ci(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ni(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o[Ii])||void 0===n?void 0:n.arrayValue,u=null===(r=a[Ii])||void 0===r?void 0:r.arrayValue,l=br((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Ni(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ti&&e===Ti)return 0;if(t===Ti)return 1;if(e===Ti)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=_r(r[o],s[o]);if(0!==t)return t;const e=Di(n[r[o]],i[s[o]]);if(0!==e)return e}return br(r.length,s.length)}(t.mapValue,e.mapValue);default:throw rr()}}function ki(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return br(t,e);const n=ai(t),r=ai(e),i=br(n.seconds,r.seconds);return 0!==i?i:br(n.nanos,r.nanos)}function Ni(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Di(n[i],r[i]);if(t)return t}return br(n.length,r.length)}function xi(t){return Ri(t)}function Ri(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ai(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return ui(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Mr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ri(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ri(t.fields[i])}`;return n+"}"}(t.mapValue):rr()}function Li(t){switch(Ci(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(t);return e?16+Li(e):16;case 5:return 2*t.stringValue.length;case 6:return ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Li(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Xr(t.fields,((t,n)=>{e+=t.length+Li(n)})),e}(t.mapValue);default:throw rr()}}function Mi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oi(t){return!!t&&"integerValue"in t}function Pi(t){return!!t&&"arrayValue"in t}function Fi(t){return!!t&&"nullValue"in t}function Vi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ui(t){return!!t&&"mapValue"in t}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Bi{constructor(t){this.value=t}static empty(){return new Bi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ui(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qi(e)}setAll(t){let e=Lr.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=qi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ui(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Si(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ui(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Xr(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Bi(qi(this.value))}}function ji(t){const e=[];return Xr(t.fields,((t,n)=>{const r=new Lr([t]);if(Ui(n)){const t=ji(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ri(e)
/**
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
       */}class $i{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new $i(t,0,Dr.min(),Dr.min(),Dr.min(),Bi.empty(),0)}static newFoundDocument(t,e,n,r){return new $i(t,1,e,Dr.min(),n,r,0)}static newNoDocument(t,e){return new $i(t,2,e,Dr.min(),Dr.min(),Bi.empty(),0)}static newUnknownDocument(t,e){return new $i(t,3,e,Dr.min(),Dr.min(),Bi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Dr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof $i&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $i(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
       */class zi{constructor(t,e){this.position=t,this.inclusive=e}}function Ki(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Mr.comparator(Mr.fromName(o.referenceValue),n.key):Di(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Gi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Si(t.position[n],e.position[n]))return!1;return!0}
/**
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
       */class Hi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
       */class Wi{}class Xi extends Wi{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new rs(t,e,n):"array-contains"===e?new as(t,n):"in"===e?new cs(t,n):"not-in"===e?new us(t,n):"array-contains-any"===e?new ls(t,n):new Xi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new is(t,n):new ss(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Di(e,this.value)):null!==e&&Ci(this.value)===Ci(e)&&this.matchesComparison(Di(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return rr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yi extends Wi{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Yi(t,e)}matches(t){return Ji(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ji(t){return"and"===t.op}function Zi(t){return function(t){for(const e of t.filters)if(e instanceof Yi)return!1;return!0}(t)&&Ji(t)}function ts(t){if(t instanceof Xi)return t.field.canonicalString()+t.op.toString()+xi(t.value);if(Zi(t))return t.filters.map((t=>ts(t))).join(",");{const e=t.filters.map((t=>ts(t))).join(",");return`${t.op}(${e})`}}function es(t,e){return t instanceof Xi?function(t,e){return e instanceof Xi&&t.op===e.op&&t.field.isEqual(e.field)&&Si(t.value,e.value)}(t,e):t instanceof Yi?function(t,e){return e instanceof Yi&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&es(n,e.filters[r])),!0)}(t,e):void rr()}function ns(t){return t instanceof Xi?function(t){return`${t.field.canonicalString()} ${t.op} ${xi(t.value)}`}(t):t instanceof Yi?function(t){return t.op.toString()+" {"+t.getFilters().map(ns).join(" ,")+"}"}(t):"Filter"}class rs extends Xi{constructor(t,e,n){super(t,e,n),this.key=Mr.fromName(n.referenceValue)}matches(t){const e=Mr.comparator(t.key,this.key);return this.matchesComparison(e)}}class is extends Xi{constructor(t,e){super(t,"in",e),this.keys=os(0,e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ss extends Xi{constructor(t,e){super(t,"not-in",e),this.keys=os(0,e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function os(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Mr.fromName(t.referenceValue)))}class as extends Xi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pi(e)&&Ai(e.arrayValue,this.value)}}class cs extends Xi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ai(this.value.arrayValue,e)}}class us extends Xi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ai(this.value.arrayValue,e)}}class ls extends Xi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ai(this.value.arrayValue,t)))}}
/**
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
       */class hs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function ds(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hs(t,e,n,r,i,s,o)}function fs(t){const e=sr(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ts(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Kr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>xi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>xi(t))).join(",")),e.le=t}return e.le}function ps(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!es(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gi(t.startAt,e.startAt)&&Gi(t.endAt,e.endAt)}function gs(t){return Mr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
       */class ms{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ys(t){return new ms(t)}function vs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ws(t){return null!==t.collectionGroup}function bs(t){const e=sr(t);if(null===e.he){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new ei(Lr.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.he.push(new Hi(r,n))})),t.has(Lr.keyField().canonicalString())||e.he.push(new Hi(Lr.keyField(),n))}return e.he}function _s(t){const e=sr(t);return e.Pe||(e.Pe=function(t,e){if("F"===t.limitType)return ds(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Hi(t.field,e)}));const n=t.endAt?new zi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zi(t.startAt.position,t.startAt.inclusive):null;return ds(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,bs(t))),e.Pe}function Ts(t,e){const n=t.filters.concat([e]);return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Es(t,e,n){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Is(t,e){return ps(_s(t),_s(e))&&t.limitType===e.limitType}function Cs(t){return`${fs(_s(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ns(t))).join(", ")}]`),Kr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>xi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>xi(t))).join(",")),`Target(${e})`}(_s(t))}; limitType=${t.limitType})`}function As(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Mr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of bs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ki(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,bs(t),e)||t.endAt&&!function(t,e,n){const r=Ki(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,bs(t),e))}(t,e)}function Ds(t){return(e,n)=>{let r=!1;for(const i of bs(t)){const t=ks(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ks(t,e,n){const r=t.field.isKeyField()?Mr.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Di(r,i):rr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return rr()}}
/**
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
       */class Ns{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Xr(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Yr(this.inner)}size(){return this.innerSize}}
/**
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
       */const xs=new Jr(Mr.comparator);function Rs(){return xs}const Ls=new Jr(Mr.comparator);function Ms(...t){let e=Ls;for(const n of t)e=e.insert(n.key,n);return e}function Os(t){let e=Ls;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ps(){return Vs()}function Fs(){return Vs()}function Vs(){return new Ns((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Us=new Jr(Mr.comparator),qs=new ei(Mr.comparator);function Bs(...t){let e=qs;for(const n of t)e=e.add(n);return e}const js=new ei(br);
/**
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
       */
function $s(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(e)?"-0":e}}function zs(t){return{integerValue:""+t}}function Ks(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Gr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
       */(e)?zs(e):$s(t,e)}
/**
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
       */class Gs{constructor(){this._=void 0}}function Hs(t,e,n){return t instanceof Xs?function(t,e){const n={fields:{[hi]:{stringValue:li},[fi]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&pi(e)&&(e=gi(e)),e&&(n.fields[di]=e),{mapValue:n}}(n,e):t instanceof Ys?Js(t,e):t instanceof Zs?to(t,e):function(t,e){const n=Ws(t,e),r=no(n)+no(t.Ie);return Oi(n)&&Oi(t.Ie)?zs(r):$s(t.serializer,r)}(t,e)}function Qs(t,e,n){return t instanceof Ys?Js(t,e):t instanceof Zs?to(t,e):n}function Ws(t,e){return t instanceof eo?function(t){return Oi(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Xs extends Gs{}class Ys extends Gs{constructor(t){super(),this.elements=t}}function Js(t,e){const n=ro(e);for(const r of t.elements)n.some((t=>Si(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Gs{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const r of t.elements)n=n.filter((t=>!Si(t,r)));return{arrayValue:{values:n}}}class eo extends Gs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function no(t){return ci(t.integerValue||t.doubleValue)}function ro(t){return Pi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
       */class io{constructor(t,e){this.field=t,this.transform=e}}class so{constructor(t,e){this.version=t,this.transformResults=e}}class oo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oo}static exists(t){return new oo(void 0,t)}static updateTime(t){return new oo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ao(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class co{}function uo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new bo(t.key,oo.none()):new go(t.key,t.data,oo.none());{const n=t.data,r=Bi.empty();let i=new ei(Lr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new mo(t.key,r,new ri(i.toArray()),oo.none())}}function lo(t,e,n){t instanceof go?function(t,e,n){const r=t.value.clone(),i=vo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!ao(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=vo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(yo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof go?function(t,e,n,r){if(!ao(t.precondition,e))return n;const i=t.value.clone(),s=wo(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof mo?function(t,e,n,r){if(!ao(t.precondition,e))return n;const i=wo(t.fieldTransforms,r,e),s=e.data;return s.setAll(yo(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ao(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function fo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ws(r.transform,t||null);null!=i&&(null===n&&(n=Bi.empty()),n.set(r.field,i))}return n||null}function po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ir(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ys&&e instanceof Ys||t instanceof Zs&&e instanceof Zs?Ir(t.elements,e.elements,Si):t instanceof eo&&e instanceof eo?Si(t.Ie,e.Ie):t instanceof Xs&&e instanceof Xs}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends co{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mo extends co{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function vo(t,e,n){const r=new Map;ir(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Qs(o,a,n[i]))}return r}function wo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Hs(t,s,e))}return r}class bo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _o extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
       */class To{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fs();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=uo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Bs())}isEqual(t){return this.batchId===t.batchId&&Ir(this.mutations,t.mutations,((t,e)=>po(t,e)))&&Ir(this.baseMutations,t.baseMutations,((t,e)=>po(t,e)))}}class Eo{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ir(t.mutations.length===n.length);let r=Us;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Eo(t,e,n,r)}}
/**
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
       */class Io{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
       */class Co{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
       */var So,Ao;function Do(t){if(void 0===t)return tr("GRPC error has no .code"),or.UNKNOWN;switch(t){case So.OK:return or.OK;case So.CANCELLED:return or.CANCELLED;case So.UNKNOWN:return or.UNKNOWN;case So.DEADLINE_EXCEEDED:return or.DEADLINE_EXCEEDED;case So.RESOURCE_EXHAUSTED:return or.RESOURCE_EXHAUSTED;case So.INTERNAL:return or.INTERNAL;case So.UNAVAILABLE:return or.UNAVAILABLE;case So.UNAUTHENTICATED:return or.UNAUTHENTICATED;case So.INVALID_ARGUMENT:return or.INVALID_ARGUMENT;case So.NOT_FOUND:return or.NOT_FOUND;case So.ALREADY_EXISTS:return or.ALREADY_EXISTS;case So.PERMISSION_DENIED:return or.PERMISSION_DENIED;case So.FAILED_PRECONDITION:return or.FAILED_PRECONDITION;case So.ABORTED:return or.ABORTED;case So.OUT_OF_RANGE:return or.OUT_OF_RANGE;case So.UNIMPLEMENTED:return or.UNIMPLEMENTED;case So.DATA_LOSS:return or.DATA_LOSS;default:return rr()}}(Ao=So||(So={}))[Ao.OK=0]="OK",Ao[Ao.CANCELLED=1]="CANCELLED",Ao[Ao.UNKNOWN=2]="UNKNOWN",Ao[Ao.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ao[Ao.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ao[Ao.NOT_FOUND=5]="NOT_FOUND",Ao[Ao.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ao[Ao.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ao[Ao.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ao[Ao.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ao[Ao.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ao[Ao.ABORTED=10]="ABORTED",Ao[Ao.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ao[Ao.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ao[Ao.INTERNAL=13]="INTERNAL",Ao[Ao.UNAVAILABLE=14]="UNAVAILABLE",Ao[Ao.DATA_LOSS=15]="DATA_LOSS";
/**
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
       */
const ko=new On([4294967295,4294967295],0);function No(t){const e=vr().encode(t),n=new Pn;return n.update(e),new Uint8Array(n.digest())}function xo(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new On([n,r],0),new On([i,s],0)]}class Ro{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Lo(`Invalid padding: ${e}`);if(n<0)throw new Lo(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Lo(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Lo(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=On.fromNumber(this.Ee)}Ae(t,e,n){let r=t.add(e.multiply(On.fromNumber(n)));return 1===r.compare(ko)&&(r=new On([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ee)return!1;const e=No(t),[n,r]=xo(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);if(!this.Re(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ro(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ee)return;const e=No(t),[n,r]=xo(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);this.Ve(t)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
       */class Mo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Oo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Mo(Dr.min(),r,new Jr(br),Rs(),Bs())}}class Oo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Oo(n,e,Bs(),Bs(),Bs())}}
/**
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
       */class Po{constructor(t,e,n,r){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=r}}class Fo{constructor(t,e){this.targetId=t,this.ge=e}}class Vo{constructor(t,e,n=si.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Uo{constructor(){this.pe=0,this.ye=jo(),this.we=si.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Bs(),e=Bs(),n=Bs();return this.ye.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:rr()}})),new Oo(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=jo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,ir(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class qo{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Rs(),this.$e=Bo(),this.Ue=Bo(),this.Ke=new Jr(br)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:rr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){const e=t.targetId,n=t.ge.count,r=this.Xe(e);if(r){const i=r.target;if(gs(i))if(0===n){const t=new Mr(i.path);this.ze(e,t,$i.newNoDocument(t,Dr.min()))}else ir(1===n);else{const r=this.et(e);if(r!==n){const n=this.tt(t),i=n?this.nt(n,t,r):1;if(0!==i){this.Ye(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=ui(n).toUint8Array()}catch(t){if(t instanceof ii)return er("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ro(s,r,i)}catch(t){return er(t instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ee?null:o}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.ze(e,n,null),r++)})),r}ot(t){const e=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&gs(i.target)){const e=new Mr(i.target.path);this._t(e).has(r)||this.ut(r,e)||this.ze(r,e,$i.newNoDocument(e,t))}n.ve&&(e.set(r,n.Fe()),n.Me())}}));let n=Bs();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Mo(t,e,this.Ke,this.Qe,n);return this.Qe=Rs(),this.$e=Bo(),this.Ue=Bo(),this.Ke=new Jr(br),r}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const r=this.He(t);this.ut(t,e)?r.xe(e,1):r.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Uo,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new ei(br),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new ei(br),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||Zn("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Uo),this.ke.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Bo(){return new Jr(Mr.comparator)}function jo(){return new Jr(Mr.comparator)}const $o={asc:"ASCENDING",desc:"DESCENDING"},zo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ko={and:"AND",or:"OR"};class Go{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ho(t,e){return t.useProto3Json||Kr(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wo(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xo(t,e){return Qo(t,e.toTimestamp())}function Yo(t){return ir(!!t),Dr.fromTimestamp(function(t){const e=ai(t);return new Ar(e.seconds,e.nanos)}(t))}function Jo(t,e){return Zo(t,e).canonicalString()}function Zo(t,e){const n=function(t){return new xr(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function ta(t){const e=xr.fromString(t);return ir(va(e)),e}function ea(t,e){return Jo(t.databaseId,e.path)}function na(t,e){const n=ta(e);if(n.get(1)!==t.databaseId.projectId)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Mr(sa(n))}function ra(t,e){return Jo(t.databaseId,e)}function ia(t){return new xr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sa(t){return ir(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function oa(t,e,n){return{name:ea(t,e),fields:n.value.mapValue.fields}}function aa(t,e){return{documents:[ra(t,e.path)]}}function ca(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ra(t,i);const s=function(t){if(0!==t.length)return ma(Yi.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pa(t.field),direction:ha(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ho(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ht:n,parent:i}}function ua(t){let e=function(t){const e=ta(t);return 4===e.length?xr.emptyPath():sa(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ir(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=la(t);return e instanceof Yi&&Zi(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Hi(ga(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Kr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new zi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new zi(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new ms(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function la(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ga(t.unaryFilter.field);return Xi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ga(t.unaryFilter.field);return Xi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ga(t.unaryFilter.field);return Xi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ga(t.unaryFilter.field);return Xi.create(i,"!=",{nullValue:"NULL_VALUE"});default:return rr()}}(t):void 0!==t.fieldFilter?function(t){return Xi.create(ga(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Yi.create(t.compositeFilter.filters.map((t=>la(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return rr()}}(t.compositeFilter.op))}(t):rr()}function ha(t){return $o[t]}function da(t){return zo[t]}function fa(t){return Ko[t]}function pa(t){return{fieldPath:t.canonicalString()}}function ga(t){return Lr.fromServerFormat(t.fieldPath)}function ma(t){return t instanceof Xi?function(t){if("=="===t.op){if(Vi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NAN"}};if(Fi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Vi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NAN"}};if(Fi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(t.field),op:da(t.op),value:t.value}}}(t):t instanceof Yi?function(t){const e=t.getFilters().map((t=>ma(t)));return 1===e.length?e[0]:{compositeFilter:{op:fa(t.op),filters:e}}}(t):rr()}function ya(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function va(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
       */class wa{constructor(t,e,n,r,i=Dr.min(),s=Dr.min(),o=si.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new wa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
       */class ba{constructor(t){this.Tt=t}}function _a(t){const e=ua({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Es(e,e.limit,"L"):e}
/**
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
       */class Ta{constructor(){this.Tn=new Ea}addToCollectionParentIndex(t,e){return this.Tn.add(e),Br.resolve()}getCollectionParents(t,e){return Br.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return Br.resolve()}deleteFieldIndex(t,e){return Br.resolve()}deleteAllFieldIndexes(t){return Br.resolve()}createTargetIndexes(t,e){return Br.resolve()}getDocumentsMatchingTarget(t,e){return Br.resolve(null)}getIndexType(t,e){return Br.resolve(0)}getFieldIndexes(t,e){return Br.resolve([])}getNextCollectionGroupToUpdate(t){return Br.resolve(null)}getMinOffset(t,e){return Br.resolve(Pr.min())}getMinOffsetFromCollectionGroup(t,e){return Br.resolve(Pr.min())}updateCollectionGroup(t,e,n){return Br.resolve()}updateIndexEntries(t,e){return Br.resolve()}}class Ea{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ei(xr.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ei(xr.comparator)).toArray()}}
/**
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
       */const Ia={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ca=41943040;class Sa{static withCacheSize(t){return new Sa(t,Sa.DEFAULT_COLLECTION_PERCENTILE,Sa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
       */Sa.DEFAULT_COLLECTION_PERCENTILE=10,Sa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sa.DEFAULT=new Sa(Ca,Sa.DEFAULT_COLLECTION_PERCENTILE,Sa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sa.DISABLED=new Sa(-1,0,0);
/**
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
       */
class Aa{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Aa(0)}static Kn(){return new Aa(-1)}}
/**
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
       */const Da="LruGarbageCollector";function ka([t,e],[n,r]){const i=br(t,n);return 0===i?br(e,r):i}class Na{constructor(t){this.Hn=t,this.buffer=new ei(ka),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();ka(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class xa{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(t){Zn(Da,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jr(t)?Zn(Da,"Ignoring IndexedDB error during garbage collection: ",t):await qr(t)}await this.er(3e5)}))}}class Ra{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Br.resolve($r.ae);const n=new Na(e);return this.tr.forEachTarget(t,(t=>n.Zn(t.sequenceNumber))).next((()=>this.tr.rr(t,(t=>n.Zn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Zn("LruGarbageCollector","Garbage collection skipped; disabled"),Br.resolve(Ia)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(Zn("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ia):this.ir(t,e)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(Zn("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),Jn()<=Y.DEBUG&&Zn("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Br.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}
/**
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
       */
class La{constructor(){this.changes=new Ns((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$i.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Br.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
       */
/**
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
       */class Ma{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
       */class Oa{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ho(n.mutation,t,ri.empty(),Ar.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Bs()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Bs()){const r=Ps();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ms();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ps();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Bs())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Rs();const s=Vs(),o=Vs();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof mo)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ho(o.mutation,e,o.mutation.getFieldMask(),Ar.now())):s.set(e.key,ri.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ma(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Vs();let r=new Jr(((t,e)=>t-e)),i=Bs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ri.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Bs()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Fs();c.forEach((t=>{if(!i.has(t)){const r=uo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Br.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Mr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ws(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Br.resolve(Ps());let o=-1,a=i;return s.next((e=>Br.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Br.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Bs()))).next((t=>({batchId:o,changes:Os(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Mr(e)).next((t=>{let e=Ms();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Ms();return this.indexManager.getCollectionParents(t,i).next((o=>Br.forEach(o,(o=>{const a=function(t,e){return new ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,$i.newInvalidDocument(r)))}));let n=Ms();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&ho(s.mutation,r,ri.empty(),Ar.now()),As(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
       */class Pa{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return Br.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Yo(t.createTime)}}(e)),Br.resolve()}getNamedQuery(t,e){return Br.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(t){return{name:t.name,query:_a(t.bundledQuery),readTime:Yo(t.readTime)}}(e)),Br.resolve()}}
/**
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
       */class Fa{constructor(){this.overlays=new Jr(Mr.comparator),this.Rr=new Map}getOverlay(t,e){return Br.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ps();return Br.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Et(t,e,r)})),Br.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Rr.delete(n)),Br.resolve()}getOverlaysForCollection(t,e,n){const r=Ps(),i=e.length+1,s=new Mr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Br.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Jr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ps(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ps(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Br.resolve(o)}Et(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Io(e,n));let i=this.Rr.get(e);void 0===i&&(i=Bs(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}
/**
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
       */class Va{constructor(){this.sessionToken=si.EMPTY_BYTE_STRING}getSessionToken(t){return Br.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Br.resolve()}}
/**
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
       */class Ua{constructor(){this.Vr=new ei(qa.mr),this.gr=new ei(qa.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new qa(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.wr(new qa(t,e))}Sr(t,e){t.forEach((t=>this.removeReference(t,e)))}br(t){const e=new Mr(new xr([])),n=new qa(e,t),r=new qa(e,t+1),i=[];return this.gr.forEachInRange([n,r],(t=>{this.wr(t),i.push(t.key)})),i}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new Mr(new xr([])),n=new qa(e,t),r=new qa(e,t+1);let i=Bs();return this.gr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new qa(t,0),n=this.Vr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class qa{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return Mr.comparator(t.key,e.key)||br(t.Cr,e.Cr)}static pr(t,e){return br(t.Cr,e.Cr)||Mr.comparator(t.key,e.key)}}
/**
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
       */class Ba{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new ei(qa.mr)}checkEmpty(t){return Br.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new To(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new qa(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Br.resolve(s)}lookupMutationBatch(t,e){return Br.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Nr(n),i=r<0?0:r;return Br.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Br.resolve(0===this.mutationQueue.length?zr:this.Fr-1)}getAllMutationBatches(t){return Br.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new qa(e,0),r=new qa(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(t=>{const e=this.Or(t.Cr);i.push(e)})),Br.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ei(br);return e.forEach((t=>{const e=new qa(t,0),r=new qa(t,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([e,r],(t=>{n=n.add(t.Cr)}))})),Br.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Mr.isDocumentKey(i)||(i=i.child(""));const s=new qa(new Mr(i),0);let o=new ei(br);return this.Mr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Cr)),!0)}),s),Br.resolve(this.Br(o))}Br(t){const e=[];return t.forEach((t=>{const n=this.Or(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ir(0===this.Lr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return Br.forEach(e.mutations,(r=>{const i=new qa(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Mr=n}))}qn(t){}containsKey(t,e){const n=new qa(e,0),r=this.Mr.firstAfterOrEqual(n);return Br.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Br.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
       */class ja{constructor(t){this.kr=t,this.docs=new Jr(Mr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Br.resolve(n?n.document.mutableCopy():$i.newInvalidDocument(e))}getEntries(t,e){let n=Rs();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():$i.newInvalidDocument(t))})),Br.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Rs();const s=e.path,o=new Mr(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Fr(Or(o),n)<=0||(r.has(o.key)||As(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Br.resolve(i)}getAllFromCollectionGroup(t,e,n,r){rr()}qr(t,e){return Br.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new $a(this)}getSize(t){return Br.resolve(this.size)}}class $a extends La{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Ir.addEntry(t,r)):this.Ir.removeEntry(n)})),Br.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}
/**
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
       */class za{constructor(t){this.persistence=t,this.Qr=new Ns((t=>fs(t)),ps),this.lastRemoteSnapshotVersion=Dr.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ua,this.targetCount=0,this.Kr=Aa.Un()}forEachTarget(t,e){return this.Qr.forEach(((t,n)=>e(n))),Br.resolve()}getLastRemoteSnapshotVersion(t){return Br.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Br.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),Br.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),Br.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Aa(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,Br.resolve()}updateTargetData(t,e){return this.zn(e),Br.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,Br.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Br.waitFor(i).next((()=>r))}getTargetCount(t){return Br.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return Br.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),Br.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Br.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),Br.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return Br.resolve(n)}containsKey(t,e){return Br.resolve(this.Ur.containsKey(e))}}
/**
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
       */class Ka{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new $r(0),this.zr=!1,this.zr=!0,this.jr=new Va,this.referenceDelegate=t(this),this.Hr=new za(this),this.indexManager=new Ta,this.remoteDocumentCache=function(t){return new ja(t)}((t=>this.referenceDelegate.Jr(t))),this.serializer=new ba(e),this.Yr=new Pa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fa,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new Ba(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){Zn("MemoryPersistence","Starting transaction:",t);const r=new Ga(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((t=>this.referenceDelegate.Xr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}ei(t,e){return Br.or(Object.values(this.Wr).map((n=>()=>n.containsKey(t,e))))}}class Ga extends Ur{constructor(t){super(),this.currentSequenceNumber=t}}class Ha{constructor(t){this.persistence=t,this.ti=new Ua,this.ni=null}static ri(t){return new Ha(t)}get ii(){if(this.ni)return this.ni;throw rr()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),Br.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),Br.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),Br.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach((t=>this.ii.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ii.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Br.forEach(this.ii,(n=>{const r=Mr.fromPath(n);return this.si(t,r).next((t=>{t||e.removeEntry(r,Dr.min())}))})).next((()=>(this.ni=null,e.apply(t))))}updateLimboDocument(t,e){return this.si(t,e).next((t=>{t?this.ii.delete(e.toString()):this.ii.add(e.toString())}))}Jr(t){return 0}si(t,e){return Br.or([()=>Br.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Qa{constructor(t,e){this.persistence=t,this.oi=new Ns((t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qr(e)),e=Hr(t.get(n),e);return Qr(e)}(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=function(t,e){return new Ra(t,e)}(this,e)}static ri(t,e){return new Qa(t,e)}Zr(){}Xr(t){return Br.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}sr(t){let e=0;return this.rr(t,(t=>{e++})).next((()=>e))}rr(t,e){return Br.forEach(this.oi,((n,r)=>this.ar(t,n,r).next((t=>t?Br.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(t,(r=>this.ar(t,r,e).next((t=>{t||(n++,i.removeEntry(r,Dr.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),Br.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),Br.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),Br.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),Br.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Li(t.data.value)),e}ar(t,e,n){return Br.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.oi.get(e);return Br.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
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
       */class Wa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=r}static Yi(t,e){let n=Bs(),r=Bs();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wa(t,e.fromCache,n,r)}}
/**
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
       */class Xa{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
       */class Ya{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=F()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.rs(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ss(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Xa;return this._s(t,e,n).next((r=>{if(i.result=r,this.Xi)return this.us(t,e,n,r.size)}))})).next((()=>i.result))}us(t,e,n,r){return n.documentReadCount<this.es?(Jn()<=Y.DEBUG&&Zn("QueryEngine","SDK will not create cache indexes for query:",Ss(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Br.resolve()):(Jn()<=Y.DEBUG&&Zn("QueryEngine","Query:",Ss(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(Jn()<=Y.DEBUG&&Zn("QueryEngine","The SDK decides to create cache indexes for query:",Ss(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_s(e))):Br.resolve())}rs(t,e){if(vs(e))return Br.resolve(null);let n=_s(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Es(e,null,"F"),n=_s(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Bs(...r);return this.ns.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.cs(e,r);return this.ls(e,s,i,n.readTime)?this.rs(t,Es(e,null,"F")):this.hs(t,s,e,n)}))))})))))}ss(t,e,n,r){return vs(e)||r.isEqual(Dr.min())?Br.resolve(null):this.ns.getDocuments(t,n).next((i=>{const s=this.cs(e,i);return this.ls(e,s,n,r)?Br.resolve(null):(Jn()<=Y.DEBUG&&Zn("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ss(e)),this.hs(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Dr.fromTimestamp(1e9===r?new Ar(n+1,0):new Ar(n,r));return new Pr(i,Mr.empty(),e)}(r,-1)).next((t=>t)))}))}cs(t,e){let n=new ei(Ds(t));return e.forEach(((e,r)=>{As(t,r)&&(n=n.add(r))})),n}ls(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(t,e,n){return Jn()<=Y.DEBUG&&Zn("QueryEngine","Using full collection scan to execute query:",Ss(e)),this.ns.getDocumentsMatchingQuery(t,e,Pr.min(),n)}hs(t,e,n,r){return this.ns.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
       */const Ja="LocalStore",Za=3e8;class tc{constructor(t,e,n,r){this.persistence=t,this.Ps=e,this.serializer=r,this.Ts=new Jr(br),this.Is=new Ns((t=>fs(t)),ps),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Oa(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ts)))}}async function ec(t,e){const n=sr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.As(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Bs();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Rs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function nc(t){const e=sr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Hr.getLastRemoteSnapshotVersion(t)))}function rc(t,e){const n=sr(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Hr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(si.EMPTY_BYTE_STRING,Dr.min()).withLastLimboFreeSnapshotVersion(Dr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=Za||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Hr.updateTargetData(t,u))}));let a=Rs(),c=Bs();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=Bs(),i=Bs();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Rs();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Dr.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Zn(Ja,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}(t,s,e.documentUpdates).next((t=>{a=t.Vs,c=t.fs}))),!r.isEqual(Dr.min())){const e=n.Hr.getLastRemoteSnapshotVersion(t).next((e=>n.Hr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Br.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ts=i,t)))}function ic(t,e){const n=sr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=zr),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function sc(t,e,n){const r=sr(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!jr(t))throw t;Zn(Ja,`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function oc(t,e,n){const r=sr(t);let i=Dr.min(),s=Bs();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=sr(t),i=r.Is.get(n);return void 0!==i?Br.resolve(r.Ts.get(i)):r.Hr.getTargetData(e,n)}(r,t,_s(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Ps.getDocumentsMatchingQuery(t,e,n?i:Dr.min(),n?s:Bs()))).next((t=>(function(t,e,n){let r=t.Es.get(e)||Dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Es.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,gs:s})))))}class ac{constructor(){this.activeTargetIds=js}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cc{constructor(){this.ho=new ac,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ac,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
       */class uc{To(t){}shutdown(){}}
/**
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
       */const lc="ConnectivityMonitor";class hc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Zn(lc,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){Zn(lc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
       */let dc=null;function fc(){return null===dc?dc=268435456+Math.round(2147483648*Math.random()):dc++,"0x"+dc.toString(16)
/**
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
       */}const pc="RestConnection",gc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mc{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===vi?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(t,e,n,r,i){const s=fc(),o=this.bo(t,e.toUriEncodedString());Zn(pc,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(t,o,a,n).then((e=>(Zn(pc,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw er(pc,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.So(t,e,n,r,i)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=gc[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}
/**
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
       */class yc{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}
/**
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
       */const vc="WebChannelConnection";class wc extends mc{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const i=fc();return new Promise(((s,o)=>{const a=new Vn;a.setWithCredentials(!0),a.listenOnce(qn.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Bn.NO_ERROR:const e=a.getResponseJson();Zn(vc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Bn.TIMEOUT:Zn(vc,`RPC '${t}' ${i} timed out`),o(new ar(or.DEADLINE_EXCEEDED,"Request time out"));break;case Bn.HTTP_ERROR:const n=a.getStatus();if(Zn(vc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(or).indexOf(e)>=0?e:or.UNKNOWN}(e.status);o(new ar(t,e.message))}else o(new ar(or.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ar(or.UNAVAILABLE,"Connection failed."));break;default:rr()}}finally{Zn(vc,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Zn(vc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Wo(t,e,n){const r=fc(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Kn(),o=zn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zn(vc,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new yc({Fo:e=>{d?Zn(vc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zn(vc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zn(vc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Mo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Un.EventType.OPEN,(()=>{d||(Zn(vc,`RPC '${t}' stream ${r} transport opened.`),f.Qo())})),p(l,Un.EventType.CLOSE,(()=>{d||(d=!0,Zn(vc,`RPC '${t}' stream ${r} transport closed`),f.Uo())})),p(l,Un.EventType.ERROR,(e=>{d||(d=!0,er(vc,`RPC '${t}' stream ${r} transport errored:`,e),f.Uo(new ar(or.UNAVAILABLE,"The operation could not be completed")))})),p(l,Un.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];ir(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zn(vc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=So[t];if(void 0!==e)return Do(e)}(e),i=o.message;void 0===n&&(n=or.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Uo(new ar(n,i)),l.close()}else Zn(vc,`RPC '${t}' stream ${r} received:`,i),f.Ko(i)}})),p(o,$n.STAT_EVENT,(e=>{e.stat===jn.PROXY?Zn(vc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===jn.NOPROXY&&Zn(vc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.$o()}),0),f}}function bc(){return"undefined"!=typeof document?document:null}
/**
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
       */function _c(t){return new Go(t,!0)}
/**
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
       */class Tc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,e-n);r>0&&Zn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
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
       */const Ec="PersistentStream";class Ic{constructor(t,e,n,r,i,s,o,a){this.Ti=t,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tc(t,e)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==t?this.a_.reset():e&&e.code===or.RESOURCE_EXHAUSTED?(tr(e.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===or.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.i_===e&&this.V_(t,n)}),(e=>{t((()=>{const t=new ar(or.UNKNOWN,"Fetching auth token failed: "+e.message);return this.m_(t)}))}))}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((t=>{n((()=>this.m_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.__?this.g_(t):this.onNext(t)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return Zn(Ec,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget((()=>this.i_===t?e():(Zn(Ec,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cc extends Ic{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:rr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ir(void 0===e||"string"==typeof e),si.fromBase64String(e||"")):(ir(void 0===e||e instanceof Buffer||e instanceof Uint8Array),si.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?or.UNKNOWN:Do(t.code);return new ar(e,t.message||"")}(o);n=new Vo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=na(t,r.document.name),s=Yo(r.document.updateTime),o=r.document.createTime?Yo(r.document.createTime):Dr.min(),a=new Bi({mapValue:{fields:r.document.fields}}),c=$i.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Po(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=na(t,r.document),s=r.readTime?Yo(r.readTime):Dr.min(),o=$i.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=na(t,r.document),s=r.removedTargetIds||[];n=new Po([],s,i,null)}else{if(!("filter"in e))return rr();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Co(r,i),o=t.targetId;n=new Fo(o,s)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Dr.min():e.readTime?Yo(e.readTime):Dr.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=ia(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=gs(r)?{documents:aa(t,r)}:{query:ca(t,r).ht},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Wo(t,e.resumeToken);const r=Ho(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Dr.min())>0){n.readTime=Qo(t,e.snapshotVersion.toTimestamp());const r=Ho(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return rr()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=ia(this.serializer),e.removeTarget=t,this.I_(e)}}class Sc extends Ic{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return ir(!!t.streamToken),this.lastStreamToken=t.streamToken,ir(!t.writeResults||0===t.writeResults.length),this.listener.D_()}onNext(t){ir(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=function(t,e){return t&&t.length>0?(ir(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Yo(t.updateTime):Yo(e);return n.isEqual(Dr.min())&&(n=Yo(e)),new so(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Yo(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=ia(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof go)n={update:oa(t,e.key,e.value)};else if(e instanceof bo)n={delete:ea(t,e.key)};else if(e instanceof mo)n={update:oa(t,e.key,e.data),updateMask:ya(e.fieldMask)};else{if(!(e instanceof _o))return rr();n={verify:ea(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Xs)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ys)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw rr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Xo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:rr()}(t,e.precondition)),n}(this.serializer,t)))};this.I_(e)}}
/**
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
       */class Ac{}class Dc extends Ac{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,Zo(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}Co(t,e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(t,Zo(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class kc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,"Online"===t&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(tr(e),this.N_=!1):Zn("OnlineStateTracker",e)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
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
       */const Nc="RemoteStore";class xc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((t=>{n.enqueueAndForget((async()=>{qc(this)&&(Zn(Nc,"Restarting streams for network reachability change."),await async function(t){const e=sr(t);e.W_.add(4),await Lc(e),e.j_.set("Unknown"),e.W_.delete(4),await Rc(e)}(this))}))})),this.j_=new kc(n,r)}}async function Rc(t){if(qc(t))for(const e of t.G_)await e(!0)}async function Lc(t){for(const e of t.G_)await e(!1)}function Mc(t,e){const n=sr(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Uc(n)?Vc(n):iu(n).c_()&&Pc(n,e))}function Oc(t,e){const n=sr(t),r=iu(n);n.K_.delete(e),r.c_()&&Fc(n,e),0===n.K_.size&&(r.c_()?r.P_():qc(n)&&n.j_.set("Unknown"))}function Pc(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Dr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}iu(t).y_(e)}function Fc(t,e){t.H_.Ne(e),iu(t).w_(e)}function Vc(t){t.H_=new qo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),iu(t).start(),t.j_.B_()}function Uc(t){return qc(t)&&!iu(t).u_()&&t.K_.size>0}function qc(t){return 0===sr(t).W_.size}function Bc(t){t.H_=void 0}async function jc(t){t.j_.set("Online")}async function $c(t){t.K_.forEach(((e,n)=>{Pc(t,e)}))}async function zc(t,e){Bc(t),Uc(t)?(t.j_.q_(e),Vc(t)):t.j_.set("Unknown")}async function Kc(t,e,n){if(t.j_.set("Online"),e instanceof Vo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.K_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.K_.delete(r),t.H_.removeTarget(r))}(t,e)}catch(n){Zn(Nc,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gc(t,n)}else if(e instanceof Po?t.H_.We(e):e instanceof Fo?t.H_.Ze(e):t.H_.je(e),!n.isEqual(Dr.min()))try{const e=await nc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.H_.ot(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.K_.get(r);i&&t.K_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.K_.get(e);if(!r)return;t.K_.set(e,r.withResumeToken(si.EMPTY_BYTE_STRING,r.snapshotVersion)),Fc(t,e);const i=new wa(r.target,e,n,r.sequenceNumber);Pc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zn(Nc,"Failed to raise snapshot:",e),await Gc(t,e)}}async function Gc(t,e,n){if(!jr(e))throw e;t.W_.add(1),await Lc(t),t.j_.set("Offline"),n||(n=()=>nc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zn(Nc,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Rc(t)}))}function Hc(t,e){return e().catch((n=>Gc(t,n,e)))}async function Qc(t){const e=sr(t),n=su(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:zr;for(;Wc(e);)try{const t=await ic(e.localStore,r);if(null===t){0===e.U_.length&&n.P_();break}r=t.batchId,Xc(e,t)}catch(t){await Gc(e,t)}Yc(e)&&Jc(e)}function Wc(t){return qc(t)&&t.U_.length<10}function Xc(t,e){t.U_.push(e);const n=su(t);n.c_()&&n.S_&&n.b_(e.mutations)}function Yc(t){return qc(t)&&!su(t).u_()&&t.U_.length>0}function Jc(t){su(t).start()}async function Zc(t){su(t).C_()}async function tu(t){const e=su(t);for(const n of t.U_)e.b_(n.mutations)}async function eu(t,e,n){const r=t.U_.shift(),i=Eo.from(r,e,n);await Hc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Qc(t)}async function nu(t,e){e&&su(t).S_&&await async function(t,e){if(function(t){return function(t){switch(t){case or.OK:return rr();case or.CANCELLED:case or.UNKNOWN:case or.DEADLINE_EXCEEDED:case or.RESOURCE_EXHAUSTED:case or.INTERNAL:case or.UNAVAILABLE:case or.UNAUTHENTICATED:return!1;case or.INVALID_ARGUMENT:case or.NOT_FOUND:case or.ALREADY_EXISTS:case or.PERMISSION_DENIED:case or.FAILED_PRECONDITION:case or.ABORTED:case or.OUT_OF_RANGE:case or.UNIMPLEMENTED:case or.DATA_LOSS:return!0;default:return rr()}}(t)&&t!==or.ABORTED}(e.code)){const n=t.U_.shift();su(t).h_(),await Hc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Qc(t)}}(t,e),Yc(t)&&Jc(t)}async function ru(t,e){const n=sr(t);n.asyncQueue.verifyOperationInProgress(),Zn(Nc,"RemoteStore received new credentials");const r=qc(n);n.W_.add(3),await Lc(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Rc(n)}function iu(t){return t.J_||(t.J_=function(t,e,n){const r=sr(t);return r.M_(),new Cc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
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
       */}(t.datastore,t.asyncQueue,{xo:jc.bind(null,t),No:$c.bind(null,t),Lo:zc.bind(null,t),p_:Kc.bind(null,t)}),t.G_.push((async e=>{e?(t.J_.h_(),Uc(t)?Vc(t):t.j_.set("Unknown")):(await t.J_.stop(),Bc(t))}))),t.J_}function su(t){return t.Y_||(t.Y_=function(t,e,n){const r=sr(t);return r.M_(),new Sc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:Zc.bind(null,t),Lo:nu.bind(null,t),D_:tu.bind(null,t),v_:eu.bind(null,t)}),t.G_.push((async e=>{e?(t.Y_.h_(),await Qc(t)):(await t.Y_.stop(),t.U_.length>0&&(Zn(Nc,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))}))),t.Y_
/**
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
       */}class ou{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ou(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ar(or.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(tr("AsyncQueue",`${e}: ${t}`),jr(t))return new ar(or.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
       */class cu{static emptySet(t){return new cu(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Mr.comparator(e.key,n.key):(t,e)=>Mr.comparator(t.key,e.key),this.keyedMap=Ms(),this.sortedSet=new Jr(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new cu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
       */class uu{constructor(){this.Z_=new Jr(Mr.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?0!==t.type&&3===n.type?this.Z_=this.Z_.insert(e,t):3===t.type&&1!==n.type?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Z_=this.Z_.remove(e):1===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):rr():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class lu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new lu(t,e,cu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
       */class hu{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class du{constructor(){this.queries=fu(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(t,e){const n=sr(t),r=n.queries;n.queries=fu(),r.forEach(((t,n)=>{for(const r of n.ta)r.onError(e)}))}(this,new ar(or.ABORTED,"Firestore shutting down"))}}function fu(){return new Ns((t=>Cs(t)),Is)}async function pu(t,e){const n=sr(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new hu,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=au(t,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&vu(n)}async function gu(t,e){const n=sr(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.ta.indexOf(e);t>=0&&(s.ta.splice(t,1),0===s.ta.length?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mu(t,e){const n=sr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.ta)t.oa(i)&&(r=!0);e.ea=i}}r&&vu(n)}function yu(t,e,n){const r=sr(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function vu(t){t.ia.forEach((t=>{t.next()}))}var wu,bu;(bu=wu||(wu={}))._a="default",bu.Cache="cache";class _u{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==e;return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Pa(t){t=lu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==wu.Cache}}
/**
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
       */class Tu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class Iu{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Bs(),this.mutatedKeys=Bs(),this.ya=Ds(t),this.wa=new cu(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new uu,r=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=As(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.va(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ya(l,a)>0||c&&this.ya(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const s=t.Da.X_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rr()}};return n(t)-n(e)}
/**
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
       */(t.type,e.type)||this.ya(t.doc,e.doc))),this.Ca(n),r=null!=r&&r;const o=e&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,c=a!==this.ga;return this.ga=a,0!==s.length||c?{snapshot:new lu(this.query,t.wa,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({wa:this.wa,Da:new uu,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((t=>this.fa=this.fa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.fa=this.fa.delete(t))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Bs(),this.wa.forEach((t=>{this.xa(t.key)&&(this.pa=this.pa.add(t.key))}));const e=[];return t.forEach((t=>{this.pa.has(t)||e.push(new Eu(t))})),this.pa.forEach((n=>{t.has(n)||e.push(new Tu(n))})),e}Oa(t){this.fa=t.gs,this.pa=Bs();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return lu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const Cu="SyncEngine";class Su{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Au{constructor(t){this.key=t,this.Ba=!1}}class Du{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new Ns((t=>Cs(t)),Is),this.qa=new Map,this.Qa=new Set,this.$a=new Jr(Mr.comparator),this.Ua=new Map,this.Ka=new Ua,this.Wa={},this.Ga=new Map,this.za=Aa.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ku(t,e,n=!0){const r=Xu(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await xu(r,e,n,!0),i}async function Nu(t,e){const n=Xu(t);await xu(n,e,!0,!1)}async function xu(t,e,n,r){const i=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Hr.getTargetData(t,e).next((i=>i?(r=i,Br.resolve(r)):n.Hr.allocateTargetId(t).next((i=>(r=new wa(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Hr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(t.targetId,t),n.Is.set(e,t.targetId)),t}))}(t.localStore,_s(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(t,e,n,r,i){t.Ha=(e,n,r)=>async function(t,e,n,r){let i=e.view.ba(n);i.ls&&(i=await oc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ba(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return zu(t,e.targetId,a.Ma),a.snapshot}(t,e,n,r);const s=await oc(t.localStore,e,!0),o=new Iu(e,s.gs),a=o.ba(s.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);zu(t,n,u.Ma);const l=new Su(e,n,o);return t.ka.set(e,l),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&Mc(t.remoteStore,i),a}async function Ru(t,e,n){const r=sr(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((t=>!Is(t,e)))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Oc(r.remoteStore,i.targetId),ju(r,i.targetId)})).catch(qr)):(ju(r,i.targetId),await sc(r.localStore,i.targetId,!0))}async function Lu(t,e){const n=sr(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Oc(n.remoteStore,r.targetId))}async function Mu(t,e,n){const r=function(t){const e=sr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uu.bind(null,e),e}(t);try{const t=await function(t,e){const n=sr(t),r=Ar.now(),i=e.reduce(((t,e)=>t.add(e.key)),Bs());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Rs(),c=Bs();return n.ds.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=fo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new mo(t.key,e,ji(e.value.mapValue),oo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Os(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Wa[t.currentUser.toKey()];r||(r=new Jr(br)),r=r.insert(e,n),t.Wa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Hu(r,t.changes),await Qc(r.remoteStore)}catch(t){const e=au(t,"Failed to persist write");n.reject(e)}}async function Ou(t,e){const n=sr(t);try{const t=await rc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Ua.get(e);r&&(ir(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?ir(r.Ba):t.removedDocuments.size>0&&(ir(r.Ba),r.Ba=!1))})),await Hu(n,t,e)}catch(t){await qr(t)}}function Pu(t,e,n){const r=sr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=sr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.ta)i.sa(e)&&(r=!0)})),r&&vu(n)}(r.eventManager,e),t.length&&r.La.p_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fu(t,e,n){const r=sr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let t=new Jr(Mr.comparator);t=t.insert(s,$i.newNoDocument(s,Dr.min()));const n=Bs().add(s),i=new Mo(Dr.min(),new Map,new Jr(br),t,n);await Ou(r,i),r.$a=r.$a.remove(s),r.Ua.delete(e),Gu(r)}else await sc(r.localStore,e,!1).then((()=>ju(r,e,n))).catch(qr)}async function Vu(t,e){const n=sr(t),r=e.batch.batchId;try{const t=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Br.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ir(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Bs();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Bu(n,r,null),qu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hu(n,t)}catch(t){await qr(t)}}async function Uu(t,e,n){const r=sr(t);try{const t=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ir(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Bu(r,e,n),qu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hu(r,t)}catch(n){await qr(n)}}function qu(t,e){(t.Ga.get(e)||[]).forEach((t=>{t.resolve()})),t.Ga.delete(e)}function Bu(t,e,n){const r=sr(t);let i=r.Wa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach((e=>{t.Ka.containsKey(e)||$u(t,e)}))}function $u(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);null!==n&&(Oc(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Gu(t))}function zu(t,e,n){for(const r of n)r instanceof Tu?(t.Ka.addReference(r.key,e),Ku(t,r)):r instanceof Eu?(Zn(Cu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||$u(t,r.key)):rr()}function Ku(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(Zn(Cu,"New document in limbo: "+n),t.Qa.add(r),Gu(t))}function Gu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new Mr(xr.fromString(e)),r=t.za.next();t.Ua.set(r,new Au(n)),t.$a=t.$a.insert(n,r),Mc(t.remoteStore,new wa(_s(ys(n.path)),r,"TargetPurposeLimboResolution",$r.ae))}}async function Hu(t,e,n){const r=sr(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((t,a)=>{o.push(r.Ha(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=Wa.Yi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.La.p_(i),await async function(t,e){const n=sr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Br.forEach(e,(e=>Br.forEach(e.Hi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Br.forEach(e.Ji,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!jr(t))throw t;Zn(Ja,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ts.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(t,i)}}}(r.localStore,s))}async function Qu(t,e){const n=sr(t);if(!n.currentUser.isEqual(e)){Zn(Cu,"User change. New user:",e.toKey());const t=await ec(n.localStore,e);n.currentUser=e,function(t,e){t.Ga.forEach((t=>{t.forEach((t=>{t.reject(new ar(or.CANCELLED,e))}))})),t.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Hu(n,t.Rs)}}function Wu(t,e){const n=sr(t),r=n.Ua.get(e);if(r&&r.Ba)return Bs().add(r.key);{let t=Bs();const r=n.qa.get(e);if(!r)return t;for(const e of r){const r=n.ka.get(e);t=t.unionWith(r.view.Sa)}return t}}function Xu(t){const e=sr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fu.bind(null,e),e.La.p_=mu.bind(null,e.eventManager),e.La.Ja=yu.bind(null,e.eventManager),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_c(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return function(t,e,n,r){return new tc(t,e,n,r)}(this.persistence,new Ya,t.initialUser,this.serializer)}Xa(t){return new Ka(Ha.ri,this.serializer)}Za(t){return new cc}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class Ju extends Yu{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){ir(this.persistence.referenceDelegate instanceof Qa);const n=this.persistence.referenceDelegate.garbageCollector;return new xa(n,t.asyncQueue,e)}Xa(t){const e=void 0!==this.cacheSizeBytes?Sa.withCacheSize(this.cacheSizeBytes):Sa.DEFAULT;return new Ka((t=>Qa.ri(t,e)),this.serializer)}}class Zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qu.bind(null,this.syncEngine),await async function(t,e){const n=sr(t);e?(n.W_.delete(2),await Rc(n)):e||(n.W_.add(2),await Lc(n),n.j_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new du}createDatastore(t){const e=_c(t.databaseInfo.databaseId),n=function(t){return new wc(t)}(t.databaseInfo);return function(t,e,n,r){return new Dc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new xc(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Pu(this.syncEngine,t,0)),hc.D()?new hc:new uc)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Du(t,e,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=sr(t);Zn(Nc,"RemoteStore shutting down."),e.W_.add(5),await Lc(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Zu.provider={build:()=>new Zu};
/**
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
       */
/**
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
       */
class tl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):tr("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
       */const el="FirestoreClient";class nl{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Wn.UNAUTHENTICATED,this.clientId=wr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{Zn(el,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zn(el,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=au(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),Zn(el,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ec(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zn(el,"Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(t){return"FirebaseError"===t.name?t.code===or.FAILED_PRECONDITION||t.code===or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(r))throw r;er("Error using user provided cache. Falling back to memory cache: "+r),await rl(t,new Yu)}}else Zn(el,"Using default OfflineComponentProvider"),await rl(t,new Ju(void 0));return t._offlineComponents}(t);Zn(el,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ru(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ru(e.remoteStore,n))),t._onlineComponents=e}async function sl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zn(el,"Using user provided OnlineComponentProvider"),await il(t,t._uninitializedComponentsProvider._online)):(Zn(el,"Using default OnlineComponentProvider"),await il(t,new Zu))),t._onlineComponents}async function ol(t){const e=await sl(t),n=e.eventManager;return n.onListen=ku.bind(null,e.syncEngine),n.onUnlisten=Ru.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Nu.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Lu.bind(null,e.syncEngine),n}function al(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
       */}const cl=new Map;
/**
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
       */function ul(t,e,n){if(!n)throw new ar(or.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ll(t){if(!Mr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hl(t){if(Mr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":rr()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ar(or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new ar(or.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
       */const pl="firestore.googleapis.com",gl=!0;class ml{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ar(or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pl,this.ssl=gl}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:gl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Ca;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ar(or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ar(or.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=al(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
       */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ar(or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ar(or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new lr;switch(t.type){case"firstParty":return new pr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ar(or.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cl.get(t);e&&(Zn("ComponentProvider","Removing Datastore"),cl.delete(t),e.terminate())}(this),Promise.resolve()}}function vl(t,e,n,r={}){var i;const s=(t=fl(t,yl))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==pl&&s.host!==a&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!$(c,o)&&(t._setSettings(c),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Wn.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[N(JSON.stringify({alg:"none",type:"JWT"})),N(JSON.stringify(s)),""].join(".")}
/**
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
       */(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ar(or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wn(s)}t._authCredentials=new hr(new ur(e,n))}}
/**
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
       */class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class bl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _l(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bl(this.firestore,t,this._key)}}class _l extends wl{constructor(t,e,n){super(t,e,ys(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bl(this.firestore,null,new Mr(t))}withConverter(t){return new _l(this.firestore,t,this._path)}}const Tl="AsyncQueue";class El{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tc(this,"async_queue_retry"),this.Su=()=>{const t=bc();t&&Zn(Tl,"Visibility state changed to "+t.visibilityState),this.a_.t_()},this.bu=t;const e=bc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=bc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const e=new cr;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!jr(t))throw t;Zn(Tl,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const e=this.bu.then((()=>(this.pu=!0,t().catch((t=>{this.gu=t,this.pu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
       */(t);throw tr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.pu=!1,t))))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const r=ou.createAndSchedule(this,t,e,n,(t=>this.Fu(t)));return this.fu.push(r),r}Du(){this.gu&&rr()}verifyOperationInProgress(){}async Mu(){let t;do{t=this.bu,await t}while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.fu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Il extends yl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new El,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new El(t),this._firestoreClient=void 0,await t}}}function Cl(t){if(t._terminated)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new yi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,al(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new nl(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
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
       */(t),t._firestoreClient}class Sl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sl(si.fromBase64String(t))}catch(t){throw new ar(or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sl(si.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
       */class Al{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ar(or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
       */class Dl{constructor(t){this._methodName=t}}
/**
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
       */class kl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ar(or.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ar(or.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return br(this._lat,t._lat)||br(this._long,t._long)}}
/**
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
       */class Nl{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
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
       */const xl=/^__.*__$/;class Rl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new go(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new mo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ml(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rr()}}class Ol{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ol(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.$u(t),r}Uu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Wl(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(0===t.length)throw this.Wu("Document fields must not be empty");if(Ml(this.Lu)&&xl.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Pl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||_c(t)}ju(t,e,n,r=!1){return new Ol({Lu:t,methodName:e,zu:n,path:Lr.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fl(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new Pl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vl(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Kl("Data must be an object, but it was:",o,r);const a=$l(r,o);let c,u;if(s.merge)c=new ri(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Gl(e,r,n);if(!o.contains(i))throw new ar(or.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Xl(t,i)||t.push(i)}c=new ri(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Rl(new Bi(a),c,u)}class Ul extends Dl{_toFieldTransform(t){if(2!==t.Lu)throw 1===t.Lu?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ul}}class ql extends Dl{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=function(t,e,n){return new Ol({Lu:3,zu:e.settings.zu,methodName:t._methodName,Qu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}(this,t,!0),n=this.Hu.map((t=>jl(t,e))),r=new Ys(n);return new io(t.path,r)}isEqual(t){return t instanceof ql&&$(this.Hu,t.Hu)}}function Bl(t,e,n,r=!1){return jl(n,t.ju(r?4:3,e))}function jl(t,e){if(zl(t=G(t)))return Kl("Unsupported field value:",e,t),$l(t,e);if(t instanceof Dl)return function(t,e){if(!Ml(e.Lu))throw e.Wu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Wu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&4!==e.Lu)throw e.Wu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=jl(i,e.Ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=G(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ks(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ar.fromDate(t);return{timestampValue:Qo(e.serializer,n)}}if(t instanceof Ar){const n=new Ar(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Qo(e.serializer,n)}}if(t instanceof kl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sl)return{bytesValue:Wo(e.serializer,t._byteString)};if(t instanceof bl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jo(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Nl)return function(t,e){return{mapValue:{fields:{[bi]:{stringValue:Ei},[Ii]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Wu("VectorValues must only contain numeric values.");return $s(e.serializer,t)}))}}}}}}(t,e);throw e.Wu(`Unsupported field value: ${dl(t)}`)}(t,e)}function $l(t,e){const n={};return Yr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,((t,r)=>{const i=jl(r,e.qu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function zl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ar||t instanceof kl||t instanceof Sl||t instanceof bl||t instanceof Dl||t instanceof Nl)}function Kl(t,e,n){if(!zl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=dl(n);throw"an object"===r?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Gl(t,e,n){if((e=G(e))instanceof Al)return e._internalPath;if("string"==typeof e)return Ql(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hl=new RegExp("[~\\*/\\[\\]]");function Ql(t,e,n){if(e.search(Hl)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Al(...e.split("."))._internalPath}catch(r){throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ar(or.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
       */class Yl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Jl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Jl extends Yl{data(){return super.data()}}function Zl(t,e){return"string"==typeof e?Ql(t,e):e instanceof Al?e._internalPath:e._delegate._internalPath}class th{}class eh extends th{}class nh extends eh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new nh(t,e,n)}_apply(t){const e=this._parse(t);return uh(t._query,e),new wl(t.firestore,t.converter,Ts(t._query,e))}_parse(t){const e=Fl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ch(o,s);const e=[];for(const n of o)e.push(ah(r,t,n));a={arrayValue:{values:e}}}else a=ah(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ch(o,s),a=Bl(n,e,o,"in"===s||"not-in"===s);return Xi.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class rh extends th{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new rh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Yi.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)uh(n,i),n=Ts(n,i)}(t._query,e),new wl(t.firestore,t.converter,Ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ih extends eh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ih(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ar(or.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ar(or.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(e,n)}(t._query,this._field,this._direction);return new wl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class sh extends eh{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new sh(t,e,n)}_apply(t){return new wl(t.firestore,t.converter,Es(t._query,this._limit,this._limitType))}}class oh extends eh{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new oh(t,e,n)}_apply(t){const e=function(t,e,n,r){if(n[0]=G(n[0]),n[0]instanceof Yl)return function(t,e,n,r,i){if(!r)throw new ar(or.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of bs(t))if(o.field.isKeyField())s.push(Mi(e,r.key));else{const t=r.data.field(o.field);if(pi(t))throw new ar(or.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new ar(or.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new zi(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Fl(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new ar(or.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ar(or.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!ws(t)&&-1!==s.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(xr.fromString(s));if(!Mr.isDocumentKey(n))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Mr(n);a.push(Mi(e,i))}else{const t=Bl(n,r,s);a.push(t)}}return new zi(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}(t,this.type,this._docOrFields,this._inclusive);return new wl(t.firestore,t.converter,function(t,e){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function ah(t,e,n){if("string"==typeof(n=G(n))){if(""===n)throw new ar(or.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ws(e)&&-1!==n.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xr.fromString(n));if(!Mr.isDocumentKey(r))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mi(t,new Mr(r))}if(n instanceof bl)return Mi(t,n._key);throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dl(n)}.`)}function ch(t,e){if(!Array.isArray(t)||0===t.length)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uh(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lh{convertValue(t,e="none"){switch(Ci(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ci(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw rr()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Xr(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[Ii].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>ci(t.doubleValue)));return new Nl(i)}convertGeoPoint(t){return new kl(ci(t.latitude),ci(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mi(t));default:return null}}convertTimestamp(t){const e=ai(t);return new Ar(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=xr.fromString(t);ir(va(n));const r=new wi(n.get(1),n.get(3)),i=new Mr(n.popFirst(5));return r.isEqual(e)||tr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}class hh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dh extends Yl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Zl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class fh extends dh{data(t={}){return super.data(t)}}class ph{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new hh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new fh(this._firestore,this._userDataWriter,n.key,n,new hh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ar(or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new fh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new hh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new fh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new hh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:gh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function gh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rr()}}class mh extends lh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bl(this.firestore,null,e)}}function yh(t,e){return function(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget((async()=>Mu(await function(t){return sl(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Cl(t),e)}!function(t,e=!0){!function(t){Xn=t}("11.6.0"),re(new H("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Il(new dr(t.getProvider("auth-internal")),new mr(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ar(or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ue(Hn,Qn,t),ue(Hn,Qn,"esm2017")}(),function(t=ce()){const e=ie(t=G(t),cn);e.isInitialized()?e.getImmediate():function(t,e={}){const n=ie(t,cn);if(n.isInitialized()){const t=n.getImmediate();if($(e,n.getOptions()))return t;throw hn.create("already-initialized")}n.initialize({options:e})}(t)}(ae({apiKey:"AIzaSyDz2t5TXGudA9sqRs9zlTYTwcutS9Liqbk",authDomain:"amdomain-5bf9b.firebaseapp.com",projectId:"amdomain-5bf9b",storageBucket:"amdomain-5bf9b.firebasestorage.app",messagingSenderId:"456731909675",appId:"1:456731909675:web:e7005450bfe810fd49d46e",measurementId:"G-7QXZH37VCE"})),t("D",function(){const t=ce(),e=vi,n=ie(t,"firestore").getImmediate({identifier:e});if(!n._initialized){const t=M("firestore");t&&vl(n,...t)}return n}());const vh={class:"relative w-full before:bg-stone-100 before:-z-100 before:absolute before:top-0 before:left-0 before:content-[''] before:h-full before:w-full xl:px-10 md:px-7 max-md:px-3"},wh=t("b",e({},[["render",function(t,e){return i(),n("div",vh,[r(t.$slots,"default")])}]])),bh=["innerHTML"],_h=(t("c",s({__name:"TransformTexts",props:{text:{}},setup(t){const e=[19968,40959],r=[12352,12447],s=[0,127],d=[48,57],f=[32,47],p=t=>{const n=t.split(""),i=n.map((t=>(t=>{switch(!0){case t>=e[0]&&t<=e[1]:return String.fromCharCode(~~(Math.random()*(e[1]-e[0]+1))+e[0]);case t>=s[0]&&t<=s[1]:return String.fromCharCode(~~(Math.random()*(s[1]-s[0]+1))+s[0]);case t>=r[0]&&t<=r[1]:return String.fromCharCode(~~(Math.random()*(r[1]-r[0]+1))+r[0]);case t>=d[0]&&t<=d[1]:return String.fromCharCode(~~(Math.random()*(d[1]-d[0]+1))+d[0]);case t>=f[0]&&t<=f[1]:return String.fromCharCode(~~(Math.random()*(f[1]-f[0]+1))+f[0]);default:return String.fromCharCode(~~(65535*Math.random()))}})(t.codePointAt(0)||~~(65535*Math.random()))));return{originTexts:n,unicodeTexts:i}},g=o([]),m=o([]);let y=[];const v=async t=>{const e=t.split(" ").filter((t=>""!==t));g.value=[];for(let n of e)g.value.push(p(n));m.value=g.value.map((t=>new Array(t.originTexts.length).fill("")));for(let n=0;n<m.value.length;n++){const t=g.value[n],e=m.value[n];(async()=>{for(let r=0;r<g.value[n].originTexts.length;r++){let n=setTimeout((()=>{e[r]=t.unicodeTexts[r]}),30*r);y.push(n);let i=setTimeout((()=>{e[r]=t.originTexts[r]}),30*r+130);y.push(i)}})()}},w=a((()=>m.value.map((t=>`${t.join("")}`)))),b=t;return v(b.text),c((()=>b.text),((t,e)=>{y.forEach((t=>clearTimeout(t))),y=[],g.value=[],m.value=[],v(t)})),(t,e)=>(i(!0),n(u,null,l(h(w),(t=>(i(),n("p",{class:"break-all",innerHTML:t},null,8,bh)))),256))}})),{class:"flex item-center w-full h-full xl:gap-7 md:gap-6 max-md:gap-4"}),Th={class:"flex h-full items-center xl:w-[100px] xl:p-5 md:w-[80px] md:p-4 max-md:w-[60px] max-md:p-3"},Eh={class:"cursor-pointer"},Ih={class:"flex h-full items-center max-md:text-[0.8rem] max-md:ml-auto"},Ch={class:"flex h-full items-center max-md:text-[0.8rem]"},Sh={class:"flex h-full items-center max-md:text-[0.8rem]"},Ah={key:1,class:"select-none flex items-center font-bold text-stone-500/50"};t("a",s({__name:"NavigationTempl",setup(t){const e=d();e.name=localStorage.getItem("user")??"";const r=p(),s=_(),c=f();a((()=>r.path.split("/")[1]||"index"));const u=o(),l=t=>{s.push(t)},S=g(b);return m((()=>{y((()=>{const t=S.value.pageTwoSideGapY-c.y.value;u.value.style.marginTop=`${t>0?t:0}px`}))})),(t,r)=>{const s=T("router-link"),o=wh;return i(),n("div",{ref_key:"navigationBar",ref:u,class:"fixed flex top-0 z-100 bg-stone-100 border-b border-stone-400 xl:w-[calc(100%-(1.25rem*2))] xl:h-[100px] xl:mt-5 md:w-[calc(100%-(1rem*2))] md:h-[80px] md:mt-4 max-md:w-full max-md:h-[60px] max-md:mt-0"},[v(o,{as:"nav"},{default:w((()=>[E("ul",_h,[E("li",Th,[E("div",Eh,[v(s,{to:"/"},{default:w((()=>r[2]||(r[2]=[E("img",{class:"w-full h-full",src:"/amDomain/logo.svg",alt:"同領地"},null,-1)]))),_:1})])]),E("li",Ih,[v(s,{to:"/topics"},{default:w((()=>r[3]||(r[3]=[I(" 討論區 ")]))),_:1})]),E("li",Ch,[E("div",{class:"cursor-pointer flex items-center",onClick:r[0]||(r[0]=t=>l("/posts"))}," 發文 ")]),E("li",Sh,[""===h(e).name?(i(),n("div",{key:0,class:"cursor-pointer flex items-center",onClick:r[1]||(r[1]=t=>l("/logins"))}," +登入+ ")):(i(),n("div",Ah," 哈瞜 "+C(h(e).name),1))])])])),_:1})],512)}}}))}}}));
