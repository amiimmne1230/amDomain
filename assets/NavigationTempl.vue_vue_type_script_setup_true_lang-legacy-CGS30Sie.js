System.register(["./index-legacy-cJxDDVlG.js"],(function(t,e){"use strict";var n,r,i,s,o,a,c,u,l,h,d,f,p,g,m,y,v,w,b,E,T,_,I,S;return{setters:[t=>{n=t.a,r=t.a1,i=t.b,s=t.d,o=t.r,a=t.c,c=t.D,u=t.F,l=t.C,h=t.u,d=t.h,f=t.Y,p=t.J,g=t.X,m=t.o,y=t.p,v=t.f,w=t.A,b=t.Z,E=t.K,T=t.j,_=t.e,I=t.V,S=t.t}],execute:function(){t({d:function(t,e,...n){if(t=G(t),1===arguments.length&&(e=wr.newId()),ul("doc","path",e),t instanceof yl){const r=xr.fromString(e,...n);return ll(r),new bl(t,null,new Lr(r))}{if(!(t instanceof bl||t instanceof El))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xr.fromString(e,...n));return ll(r),new bl(t.firestore,t instanceof El?t.converter:null,new Lr(r))}}
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
             */,e:function(t,e,...n){if(t=G(t),ul("collection","path",e),t instanceof yl){const r=xr.fromString(e,...n);return hl(r),new El(t,null,r)}{if(!(t instanceof bl||t instanceof El))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xr.fromString(e,...n));return hl(r),new El(t.firestore,null,r)}},f:function(t){t=fl(t,wl);const e=fl(t.firestore,Sl),n=Cl(e),r=new yh(e);
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
             */return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ar(or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:n=>{s.yu(),e.enqueueAndForget((()=>gu(t,o))),n.fromCache&&"server"===r.source?i.reject(new ar(or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Eu(n,s,{includeMetadataChanges:!0,Fa:!0});return pu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise
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
             */}(n,t._query).then((n=>new gh(e,r,t,n)))},g:
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
function(t){t=fl(t,bl);const e=fl(t.firestore,Sl);return function(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:a=>{s.yu(),e.enqueueAndForget((()=>gu(t,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new ar(or.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new ar(or.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new Eu(ys(n.path),s,{includeMetadataChanges:!0,Fa:!0});return pu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}(Cl(e),t._key).then((n=>function(t,e,n){const r=n.docs.get(e._key),i=new yh(t);return new fh(t,i,e._key,r,new dh(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))},h:function(...t){return new ql("arrayUnion",t)},i:function(...t){return ah._create("startAfter",t,!1)},l:function(t){return oh._create("limit",t,"F")},o:function(t,e="asc"){const n=e,r=th("orderBy",t);return sh._create(r,n)},q:function(t,e,...n){let r=[];e instanceof eh&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof ih)).length,n=t.filter((t=>t instanceof rh)).length;if(e>1||e>0&&n>0)throw new ar(or.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
             */(r);for(const i of r)t=i._apply(t);return t},s:function(t,e,n){t=fl(t,bl);const r=fl(t.firestore,Sl),i=
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
             */}(t.converter,e,n);return vh(r,[Ul(Vl(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,oo.none())])},u:function(t,e,n,...r){t=fl(t,bl);const i=fl(t.firestore,Sl),s=Vl(i);let o;return o="string"==typeof(e=G(e))||e instanceof Dl?function(t,e,n,r,i,s){const o=t.dc(1,e,n),a=[Hl(e,r,n)],c=[i];if(s.length%2!=0)throw new ar(or.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Hl(e,s[d])),c.push(s[d+1]);const u=[],l=qi.empty();for(let d=a.length-1;d>=0;--d)if(!Xl(u,a[d])){const t=a[d];let e=c[d];e=G(e);const n=o.hc(t);if(e instanceof jl)u.push(t);else{const r=$l(e,n);null!=r&&(u.push(t),l.set(t,r))}}const h=new ri(u);return new Ll(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.dc(1,e,n);Kl("Data must be an object, but it was:",i,r);const s=[],o=qi.empty();Yr(r,((t,r)=>{const a=Wl(e,t,n);r=G(r);const c=i.hc(a);if(r instanceof jl)s.push(a);else{const t=$l(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new ri(s);return new Ll(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),vh(i,[o.toMutation(t._key,oo.exists(!0))])},w:function(t,e,n){const r=e,i=th("where",t);return rh._create(i,r,n)}});var e={};
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
             */const C=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length?n[t.charAt(i)]:0;++i;const o=i<t.length?n[t.charAt(i)]:64;++i;const a=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==o||null==a)throw new D;const c=e<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N=function(t){return function(t){const e=C(t);return A.encodeByteArray(e,!0)}(t).replace(/\./g,"")},k=()=>
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
             */().__FIREBASE_DEFAULTS__,x=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return A.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},R=()=>{try{return k()||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||x()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},O=t=>{const e=(t=>{var e,n;return null===(n=null===(e=R())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L=()=>{var t;return null===(t=R())||void 0===t?void 0:t.config};
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
class M{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
             */function P(){return!function(){var t;const e=null===(t=R())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F(){try{return"object"==typeof indexedDB}catch(t){return!1}}function V(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}class U extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(q,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new U(r,o,n)}}const q=/\{\$([^}]+)}/g;function B(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if($(n)&&$(s)){if(!B(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(t){return null!==t&&"object"==typeof t}
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
             */function z(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
             */function G(t){return t&&t._delegate?t._delegate:t}class K{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
             */const H="[DEFAULT]";
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
             */class Q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new M;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
             */(t))try{this.getOrInitializeService({instanceIdentifier:H})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=H){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=H){return this.instances.has(t)}getOptions(t=H){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===H?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(t=H){return this.component?this.component.multipleInstances?t:H:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class W{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
             */var Y;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Y||(Y={}));const X={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},J=Y.INFO,Z={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},tt=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=Z[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class et{constructor(t){this.name=t,this._logLevel=J,this._logHandler=tt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?X[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}let nt,rt;const it=new WeakMap,st=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap;let ut={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return st.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ot.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function lt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ft(this),e),dt(it.get(this))}:function(...e){return dt(t.apply(ft(this),e))}:function(e,...n){const r=t.call(ft(this),e,...n);return ot.set(r,e.sort?e.sort():[e]),dt(r)}}function ht(t){return"function"==typeof t?lt(t):(t instanceof IDBTransaction&&function(t){if(st.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));st.set(t,e)}(t),e=t,(nt||(nt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ut):t);var e}function dt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(dt(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&it.set(e,t)})).catch((()=>{})),ct.set(e,t),e}(t);if(at.has(t))return at.get(t);const e=ht(t);return e!==t&&(at.set(t,e),ct.set(e,t)),e}const ft=t=>ct.get(t);function pt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(dt(o.result),t.oldVersion,t.newVersion,dt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const gt=["get","getKey","getAll","getAllKeys","count"],mt=["put","add","delete","clear"],yt=new Map;function vt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(yt.get(e))return yt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!gt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return yt.set(e,s),s}var wt;wt=ut,ut={...wt,get:(t,e,n)=>vt(t,e)||wt.get(t,e,n),has:(t,e)=>!!vt(t,e)||wt.has(t,e)};
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
class bt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Et="@firebase/app",Tt="0.11.5",_t=new et("@firebase/app"),It="@firebase/app-compat",St="@firebase/analytics-compat",Ct="@firebase/analytics",At="@firebase/app-check-compat",Dt="@firebase/app-check",Nt="@firebase/auth",kt="@firebase/auth-compat",xt="@firebase/database",Rt="@firebase/data-connect",Ot="@firebase/database-compat",Lt="@firebase/functions",Mt="@firebase/functions-compat",Pt="@firebase/installations",Ft="@firebase/installations-compat",Vt="@firebase/messaging",Ut="@firebase/messaging-compat",jt="@firebase/performance",qt="@firebase/performance-compat",Bt="@firebase/remote-config",$t="@firebase/remote-config-compat",zt="@firebase/storage",Gt="@firebase/storage-compat",Kt="@firebase/firestore",Ht="@firebase/vertexai",Qt="@firebase/firestore-compat",Wt="firebase",Yt="[DEFAULT]",Xt={[Et]:"fire-core",[It]:"fire-core-compat",[Ct]:"fire-analytics",[St]:"fire-analytics-compat",[Dt]:"fire-app-check",[At]:"fire-app-check-compat",[Nt]:"fire-auth",[kt]:"fire-auth-compat",[xt]:"fire-rtdb",[Rt]:"fire-data-connect",[Ot]:"fire-rtdb-compat",[Lt]:"fire-fn",[Mt]:"fire-fn-compat",[Pt]:"fire-iid",[Ft]:"fire-iid-compat",[Vt]:"fire-fcm",[Ut]:"fire-fcm-compat",[jt]:"fire-perf",[qt]:"fire-perf-compat",[Bt]:"fire-rc",[$t]:"fire-rc-compat",[zt]:"fire-gcs",[Gt]:"fire-gcs-compat",[Kt]:"fire-fst",[Qt]:"fire-fst-compat",[Ht]:"fire-vertex","fire-js":"fire-js",[Wt]:"fire-js-all"},Jt=new Map,Zt=new Map,te=new Map;function ee(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ne(t){const e=t.name;if(te.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;te.set(e,t);for(const n of Jt.values())ee(n,t);for(const n of Zt.values())ee(n,t);return!0}function re(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ie=new j("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class se{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}
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
             */function oe(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r=Object.assign({name:Yt,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw ie.create("bad-app-name",{appName:String(i)});if(n||(n=L()),!n)throw ie.create("no-options");const s=Jt.get(i);if(s){if(B(n,s.options)&&B(r,s.config))return s;throw ie.create("duplicate-app",{appName:i})}const o=new W(i);for(const c of te.values())o.addComponent(c);const a=new se(n,r,o);return Jt.set(i,a),a}function ae(t=Yt){const e=Jt.get(t);if(!e&&t===Yt&&L())return oe();if(!e)throw ie.create("no-app",{appName:t});return e}function ce(t,e,n){var r;let i=null!==(r=Xt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void _t.warn(t.join(" "))}ne(new K(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
             */const ue="firebase-heartbeat-store";let le=null;function he(){return le||(le=pt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(ue)}catch(n){console.warn(n)}}}).catch((t=>{throw ie.create("idb-open",{originalErrorMessage:t.message})}))),le}async function de(t,e){try{const n=(await he()).transaction(ue,"readwrite"),r=n.objectStore(ue);await r.put(e,fe(t)),await n.done}catch(n){if(n instanceof U)_t.warn(n.message);else{const t=ie.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});_t.warn(t.message)}}}function fe(t){return`${t.name}!${t.options.appId}`}
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
             */class pe{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new me(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ge();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){_t.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ge(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),ye(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ye(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=N(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return _t.warn(e),""}}}function ge(){return(new Date).toISOString().substring(0,10)}class me{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!F()&&V().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await he()).transaction(ue),n=await e.objectStore(ue).get(fe(t));return await e.done,n}catch(e){if(e instanceof U)_t.warn(e.message);else{const t=ie.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});_t.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return de(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return de(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ye(t){return N(JSON.stringify({version:2,heartbeats:t})).length}var ve;ve="",ne(new K("platform-logger",(t=>new bt(t)),"PRIVATE")),ne(new K("heartbeat",(t=>new pe(t)),"PRIVATE")),ce(Et,Tt,ve),ce(Et,Tt,"esm2017"),ce("fire-js",""),
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
ce("firebase","11.6.1","app");const we="@firebase/installations",be="0.6.13",Ee=1e4,Te=`w:${be}`,_e="FIS_v2",Ie=36e5,Se=new j("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ce(t){return t instanceof U&&t.code.includes("request-failed")}
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
             */function Ae({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function De(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Ne(t,e){const n=(await e.json()).error;return Se.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ke({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xe(t,{refreshToken:e}){const n=ke(t);return n.append("Authorization",function(t){return`${_e} ${t}`}
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
             */(e)),n}async function Re(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
             */function Oe(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const Le=/^[cdef][\w-]{21}$/;function Me(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
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
             */(t);return Le.test(e)?e:""}catch(t){return""}}function Pe(t){return`${t.appName}!${t.appId}`}
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
             */const Fe=new Map;function Ve(t,e){const n=Pe(t);Ue(n,e),function(t,e){const n=(!je&&"BroadcastChannel"in self&&(je=new BroadcastChannel("[Firebase] FID Change"),je.onmessage=t=>{Ue(t.data.key,t.data.fid)}),je);n&&n.postMessage({key:t,fid:e}),0===Fe.size&&je&&(je.close(),je=null)}(n,e)}function Ue(t,e){const n=Fe.get(t);if(n)for(const r of n)r(e)}let je=null;
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
const qe="firebase-installations-store";let Be=null;function $e(){return Be||(Be=pt("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(qe)}})),Be}async function ze(t,e){const n=Pe(t),r=(await $e()).transaction(qe,"readwrite"),i=r.objectStore(qe),s=await i.get(n);return await i.put(e,n),await r.done,s&&s.fid===e.fid||Ve(t,e.fid),e}async function Ge(t){const e=Pe(t),n=(await $e()).transaction(qe,"readwrite");await n.objectStore(qe).delete(e),await n.done}async function Ke(t,e){const n=Pe(t),r=(await $e()).transaction(qe,"readwrite"),i=r.objectStore(qe),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||Ve(t,o.fid),o}
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
             */async function He(t){let e;const n=await Ke(t.appConfig,(n=>{const r=function(t){const e=t||{fid:Me(),registrationStatus:0};return Ye(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(Se.create("app-offline"))};const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ae(t),i=ke(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:_e,appId:t.appId,sdkVersion:Te},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Re((()=>fetch(r,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:De(t.authToken)}}throw await Ne("Create Installation",c)}(t,e);return ze(t.appConfig,n)}catch(n){throw Ce(n)&&409===n.customData.serverCode?await Ge(t.appConfig):await ze(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Qe(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Qe(t){let e=await We(t.appConfig);for(;1===e.registrationStatus;)await Oe(100),e=await We(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await He(t);return n||e}return e}function We(t){return Ke(t,(t=>{if(!t)throw Se.create("installation-not-found");return Ye(t)}))}function Ye(t){return 1===(e=t).registrationStatus&&e.registrationTime+Ee<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
             */}async function Xe({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${Ae(t)}/${e}/authTokens:generate`}
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
             */(t,n),i=xe(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:Te,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Re((()=>fetch(r,a)));if(c.ok)return De(await c.json());throw await Ne("Generate Auth Token",c)}async function Je(t,e=!1){let n;const r=await Ke(t.appConfig,(r=>{if(!tn(r))throw Se.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ie}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await Ze(t.appConfig);for(;1===n.authToken.requestStatus;)await Oe(100),n=await Ze(t.appConfig);const r=n.authToken;return 0===r.requestStatus?Je(t,e):r}(t,e),r;{if(!navigator.onLine)throw Se.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await Xe(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ze(t.appConfig,r),n}catch(n){if(!Ce(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ze(t.appConfig,n)}else await Ge(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function Ze(t){return Ke(t,(t=>{if(!tn(t))throw Se.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Ee<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
             */}))}function tn(t){return void 0!==t&&2===t.registrationStatus}
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
async function en(t,e=!1){const n=t;return await async function(t){const{registrationPromise:e}=await He(t);e&&await e}
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
             */(n),(await Je(n,e)).token}function nn(t){return Se.create("missing-app-config-values",{valueName:t})}
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
             */const rn="installations",sn=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw nn("App Configuration");if(!t.name)throw nn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw nn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:re(e,"heartbeat"),_delete:()=>Promise.resolve()}},on=t=>{const e=re(t.getProvider("app").getImmediate(),rn).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await He(e);return r?r.catch(console.error):Je(e).catch(console.error),n.fid}(e),getToken:t=>en(e,t)}};ne(new K(rn,sn,"PUBLIC")),ne(new K("installations-internal",on,"PRIVATE")),ce(we,be),ce(we,be,"esm2017");
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
const an="analytics",cn="https://www.googletagmanager.com/gtag/js",un=new et("@firebase/analytics"),ln=new j("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function hn(t){if(!t.startsWith(cn)){const e=ln.create("invalid-gtag-resource",{gtagURL:t});return un.warn(e.message),""}return t}function dn(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function fn(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:hn}),r=document.createElement("script"),i=`${cn}?l=${t}&id=${e}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function pn(t,e,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await dn(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){un.error(s)}}(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await async function(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=(await dn(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(a){un.error(a)}t("config",i,s)}(t,e,n,r,i,o)}else if("consent"===i){const[e,n]=s;t("consent",e,n)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){un.error(o)}}}const gn=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function mn(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function yn(t,e=gn,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ln.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ln.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wn;return setTimeout((async()=>{a.abort()}),6e4),vn({appId:r,apiKey:i,measurementId:s},o,a,e)}async function vn(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gn){var s;const{appId:o,measurementId:a}=t;try{await function(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(ln.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(r,e)}catch(c){if(a)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const e=await async function(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:mn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw ln.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(o),e}catch(c){const e=c;if(!function(t){if(!(t instanceof U&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(i.deleteThrottleMetadata(o),a)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?z(n,i.intervalMillis,30):z(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),un.debug(`Calling attemptFetch again in ${u} millis`),vn(t,l,r,i)}}class wn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function bn(t,e,n,r,i,s,o){var a;const c=yn(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>un.error(t))),e.push(c);const u=
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
async function(){if(!F())return un.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await V()}catch(t){return un.warn(ln.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cn)&&n.src.includes(t))return n;return null}
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
             */)(s)||fn(s,l.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
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
             */class En{constructor(t){this.app=t}_delete(){return delete Tn[this.app.options.appId],Promise.resolve()}}let Tn={},_n=[];const In={};let Sn,Cn,An="dataLayer",Dn=!1;function Nn(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ln.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function kn(t,e,n){Nn();const r=t.options.appId;if(!r)throw ln.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ln.create("no-api-key");un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Tn[r])throw ln.create("already-exists",{id:r});if(!Dn){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(An);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=pn(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}(Tn,_n,In,An,"gtag");Cn=t,Sn=e,Dn=!0}return Tn[r]=bn(t,_n,In,e,Sn,An,n),new En(t)}function xn(t,e,n,r){t=G(t),async function(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Cn,Tn[t.app.options.appId],e,n,r).catch((t=>un.error(t)))}const Rn="@firebase/analytics",On="0.10.12";ne(new K(an,((t,{options:e})=>kn(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),ne(new K("analytics-internal",(function(t){try{const e=t.getProvider(an).getImmediate();return{logEvent:(t,n,r)=>xn(e,t,n,r)}}catch(e){throw ln.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ce(Rn,On),ce(Rn,On,"esm2017");var Ln,Mn,Pn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t;
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,i=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var i={};function s(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],0>t?-1:0)})):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new r(e,0)}var a=s(0),c=s(1),u=s(16777216);function l(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function h(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(h(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(h(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(h(t)||h(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;0>=r.l(t);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!l(r);){var u=s.add(r);0>=u.l(t)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return e=f(t,i.j(e)),new g(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(e);h(u)||0<u.l(t);)u=(s=o(n-=r)).j(e);l(s)&&(s=c),i=i.add(s),t=f(t,u)}return new g(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(h(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(h(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var i=m(n,e).g,s=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return h(t=f(this,t))?-1:l(t)?0:1},t.abs=function(){return h(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(h(this))return h(t)?d(this).j(d(t)):d(d(this).j(t));if(h(t))return d(this.j(d(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=t.i(s)>>>16,m=65535&t.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,Mn=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<e.length;s+=8){var c=Math.min(8,e.length-s),u=parseInt(e.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Ln=r}).apply(void 0!==Pn?Pn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Fn,Vn,Un,jn,qn,Bn,$n,zn,Gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
            Copyright The Closure Library Authors.
            SPDX-License-Identifier: Apache-2.0
            */(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t},n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Gn&&Gn];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var i=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}(r=r(s=i[t=t[t.length-1]]))!=s&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t,e){return e}))}}));
/** @license

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */
var r=r||{},i=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(s(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<b.length;e++)n=b[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function T(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _(t){i.setTimeout((()=>{throw t}),0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new C),(t=>t.reset()));class C{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,D=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},k=()=>{const t=i.Promise.resolve(void 0);A=()=>{t.then(x)}};var x=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){_(n)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function R(){this.s=this.s,this.C=this.C}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function M(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}h(M,O);var P={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++V,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function q(t){this.src=t,this.g={},this.h=0}function B(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}q.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),G={};function K(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)K(t,e[s],n,r,i);return null}return n=Z(n),t&&t[F]?t.K(e,n,!!o(r)&&!!r.capture,i):function(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=X(t);if(c||(t[z]=c=new q(t)),(n=c.add(e,n,r,a,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Y;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)L||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(W(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,i)}function H(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)H(t,e[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&-1<(n=$(s=t.g[e],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--))):t&&(t=X(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,r,i)),(n=-1<t?e[t]:null)&&Q(n))}function Q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])B(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(W(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=X(e))?(B(n,t),0==n.h&&(n.src=null,e[z]=null)):j(t)}}}function W(t){return t in G?G[t]:G[t]="on"+t}function Y(t,e){if(t.da)t=!0;else{e=new M(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&Q(t),t=n.call(r,e)}return t}function X(t){return(t=t[z])instanceof q?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function tt(){R.call(this),this.i=new q(this),this.M=this,this.F=null}function et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var i=e;E(e=new O(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nt(o,r,!0,e)&&i}if(i=nt(o=e.g=t,r,!0,e)&&i,i=nt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=nt(o=e.g=n[s],r,!1,e)&&i}function nt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&B(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function rt(t,e,n){if("function"==typeof t)n&&(t=u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function it(t){t.g=rt((()=>{t.g=null,t.i&&(t.i=!1,it(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(tt,R),tt.prototype[F]=!0,tt.prototype.removeEventListener=function(t,e,n,r){H(this,t,e,n,r)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)j(n[r]);delete e.g[t],e.h--}}this.F=null},tt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},tt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class st extends R{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){R.call(this),this.h=t,this.g={}}h(ot,R);var at=[];function ct(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Q(t)}),t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ct(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=i.JSON.stringify,lt=i.JSON.parse,ht=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function dt(){}function ft(t){return t.h||(t.h=t.i())}function pt(){}dt.prototype.h=null;var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){O.call(this,"d")}function yt(){O.call(this,"c")}h(mt,O),h(yt,O);var vt={},wt=null;function bt(){return wt=wt||new tt}function Et(t){O.call(this,vt.La,t)}function Tt(t){const e=bt();et(e,new Et(e))}function _t(t,e){O.call(this,vt.STAT_EVENT,t),this.stat=e}function It(t){const e=bt();et(e,new _t(e,t))}function St(t,e){O.call(this,vt.Ma,t),this.size=e}function Ct(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){t()}),e)}function At(){this.g=!0}function Dt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ut(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}vt.La="serverreachability",h(Et,O),vt.STAT_EVENT="statevent",h(_t,O),vt.Ma="timingevent",h(St,O),At.prototype.xa=function(){this.g=!1},At.prototype.info=function(){};var Nt,kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Rt(){}function Ot(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lt}function Lt(){this.i=null,this.g="",this.h=!1}h(Rt,dt),Rt.prototype.g=function(){return new XMLHttpRequest},Rt.prototype.i=function(){return{}},Nt=new Rt;var Mt={},Pt={};function Ft(t,e,n){t.L=1,t.v=ue(ie(e)),t.m=n,t.P=!0,Vt(t,null)}function Vt(t,e){t.F=Date.now(),qt(t),t.A=ie(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),_e(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Lt,t.g=hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new st(u(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(at[0]=i.toString()),i=at);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.j.Ca}function jt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Pt:(n=Number(e.substring(n,r)),isNaN(n)?Mt:(r+=1)+n>e.length?Pt:(e=e.slice(r,r+n),t.C=r+n,e))}function qt(t){t.S=Date.now()+t.I,Bt(t,t.I)}function Bt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ct(u(t.ba,t),e)}function $t(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||on(t.j,t)}function Gt(t){$t(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Kt(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Xt(n.h,t)))if(!t.K&&Xt(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sn(n),Qe(n)}en(n),It(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ct(u(n.Za,n),6e3));if(1>=Yt(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else cn(n,11)}else if((t.K||n.g==t)&&sn(n),!p(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ce(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=ln(r,r.J?r.ia:null,r.W),o.K){Zt(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&($t(a),qt(a)),r.g=o}else tn(r);0<n.i.length&&Ye(n)}else"stop"!=u[0]&&"close"!=u[0]||cn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cn(n,7):He(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Tt()}catch(l){}}Ot.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==$e(t)?e.j():this.Y(t)},Ot.prototype.Y=function(t){try{if(t==this.g)t:{const d=$e(this.g);var e=this.g.Ba();if(this.g.Z(),!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||ze(this.g)))){this.J||4!=d||7==e||Tt(),$t(this);var n=this.g.Z();this.X=n;e:if(Ut(this)){var r=ze(this.g);t="";var s=r.length,o=4==$e(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gt(this),zt(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,It(12),Gt(this),zt(this);break t}Dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kt(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=jt(this,a),t==Pt){4==d&&(this.s=4,It(14),n=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Mt){this.s=4,It(15),Dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Dt(this.i,this.l,t,null),Kt(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(h),h.M=!0,It(11))}}else Dt(this.i,this.l,a,"[Invalid Chunked Response]"),Gt(this),zt(this)}else Dt(this.i,this.l,a,null),Kt(this,a);4==d&&Gt(this),this.o&&!this.J&&(4==d?on(this.j,this):(this.o=!1,qt(this)))}else(function(t){const e={};t=(t.g&&2<=$e(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=T(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Gt(this),zt(this)}}}catch(d){}},Ot.prototype.cancel=function(){this.J=!0,Gt(this)},Ot.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Tt(),It(17)),Gt(this),this.s=2,zt(this)):Bt(this,this.S-t)};var Ht=class{constructor(t,e){this.g=t,this.map=e}};function Qt(t){this.l=t||10,t=i.PerformanceNavigationTiming?0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Yt(t){return t.h?1:t.g?t.g.size:0}function Xt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jt(t,e){t.g?t.g.add(e):t.h=e}function Zt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}Qt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ne=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof re){this.h=t.h,se(this,t.j),this.o=t.o,this.g=t.g,oe(this,t.s),this.l=t.l;var e=t.i,n=new we;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ae(this,n),this.m=t.m}else t&&(e=String(t).match(ne))?(this.h=!1,se(this,e[1]||"",!0),this.o=le(e[2]||""),this.g=le(e[3]||"",!0),oe(this,e[4]),this.l=le(e[5]||"",!0),ae(this,e[6]||"",!0),this.m=le(e[7]||"")):(this.h=!1,this.i=new we(null,this.h))}function ie(t){return new re(t)}function se(t,e,n){t.j=n?le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ae(t,e,n){e instanceof we?(t.i=e,function(t,e){e&&!t.j&&(be(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ee(this,e),_e(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=he(e,ye)),t.i=new we(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function ue(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function he(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,de),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function de(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(he(e,pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(he(e,pe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(he(n,"/"==n.charAt(0)?me:ge,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",he(n,ve)),t.join("")};var fe,pe=/[#\/\?@]/g,ge=/[#\?:]/g,me=/[#\?]/g,ye=/[#\?@]/g,ve=/#/g;function we(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function be(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ee(t,e){be(t),e=Ie(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Te(t,e){return be(t),e=Ie(t,e),t.g.has(e)}function _e(t,e,n){Ee(t,e),0<n.length&&(t.i=null,t.g.set(Ie(t,e),d(n)),t.h+=n.length)}function Ie(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Se(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Ce(){this.g=new ht}function Ae(t,e,n){const r=n||"";try{ee(t,(function(t,n){let i=t;o(t)&&(i=ut(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function De(t){this.l=t.Ub||null,this.j=t.eb||!1}function Ne(t,e){tt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function ke(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function xe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Re(t)}function Re(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Oe(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Le(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Oe(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ce(t,e,n))}function Me(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=we.prototype).add=function(t,e){be(this),this.i=null,t=Ie(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){be(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){be(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){be(this);let e=[];if("string"==typeof t)Te(this,t)&&(e=e.concat(this.g.get(Ie(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return be(this),this.i=null,Te(this,t=Ie(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},h(De,dt),De.prototype.g=function(){return new Ne(this.l,this.j)},De.prototype.i=(fe={},function(){return fe}),h(Ne,tt),(t=Ne.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Re(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Re(this)),this.g&&(this.readyState=3,Re(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ke(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xe(this):Re(this),3==this.readyState&&ke(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,xe(this))},t.Qa=function(t){this.g&&(this.response=t,xe(this))},t.ga=function(){this.g&&xe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ne.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Me,tt);var Pe=/^https?$/i,Fe=["POST","PUT"];function Ve(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Ue(t),qe(t)}function Ue(t){t.A||(t.A=!0,et(t,"complete"),et(t,"error"))}function je(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=$e(t)||2!=t.Z()))if(t.u&&4==$e(t))rt(t.Ea,0,t);else if(et(t,"readystatechange"),4==$e(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){var o=String(t.D).match(ne)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Pe.test(o?o.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var a=2<$e(t)?t.g.statusText:""}catch(c){a=""}t.l=a+" ["+t.Z()+"]",Ue(t)}}finally{qe(t)}}}function qe(t,e){if(t.g){Be(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Be(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function $e(t){return t.g?t.g.readyState:0}function ze(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ge(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ke(t){this.Aa=0,this.i=[],this.j=new At,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ge("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ge("baseRetryDelayMs",5e3,t),this.cb=Ge("retryDelaySeedMs",1e4,t),this.Wa=Ge("forwardChannelMaxRetries",2,t),this.wa=Ge("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Qt(t&&t.concurrentRequestLimit),this.Da=new Ce,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function He(t){if(We(t),3==t.G){var e=t.U++,n=ie(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),Je(t,n),(e=new Ot(t,t.j,e)).L=2,e.v=ue(ie(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),qt(e)}un(t)}function Qe(t){t.g&&(nn(t),t.g.cancel(),t.g=null)}function We(t){Qe(t),t.u&&(i.clearTimeout(t.u),t.u=null),sn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function Ye(t){if(!Wt(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||k(),D||(A(),D=!0),N.add(e,t),t.B=0}}function Xe(t,e){var n;n=e?e.l:t.U++;const r=ie(t.I);ce(r,"SID",t.K),ce(r,"RID",n),ce(r,"AID",t.T),Je(t,r),t.m&&t.o&&Le(r,t.m,t.o),n=new Ot(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Ze(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Jt(t.h,n),Ft(n,r,e)}function Je(t,e){t.H&&v(t.H,(function(t,n){ce(e,n,t)})),t.l&&ee({},(function(t,n){ce(e,n,t)}))}function Ze(t,e,n){n=Math.min(t.i.length,n);var r=t.l?u(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{Ae(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function tn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||k(),D||(A(),D=!0),N.add(e,t),t.v=0}}function en(t){return!(t.g||t.u||3<=t.v||(t.Y++,t.u=Ct(u(t.Fa,t),an(t,t.v)),t.v++,0))}function nn(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function rn(t){t.g=new Ot(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ie(t.qa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.T),ce(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ce(e,"TO",t.ja),ce(e,"TYPE","xmlhttp"),Je(t,e),t.m&&t.o&&Le(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ue(ie(e)),n.m=null,n.P=!0,Vt(n,t)}function sn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function on(t,e){var n=null;if(t.g==e){sn(t),nn(t),t.g=null;var r=2}else{if(!Xt(t.h,e))return;n=e.D,Zt(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;et(r=bt(),new St(r,n)),Ye(t)}else tn(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==r&&function(t,e){return!(Yt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Ct(u(t.Ga,t,e),an(t,t.B)),t.B++,0)))}(t,e)||2==r&&en(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cn(t,5);break;case 4:cn(t,10);break;case 3:cn(t,6);break;default:cn(t,2)}}function an(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function cn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.fb,t),r=t.Xa;const e=!r;r=new re(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||se(r,"https"),ue(r),e?function(t,e){const n=new At;if(i.Image){const r=new Image;r.onload=l(Se,n,"TestLoadImage: loaded",!0,e,r),r.onerror=l(Se,n,"TestLoadImage: error",!1,e,r),r.onabort=l(Se,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=l(Se,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new At;const n=new AbortController,r=setTimeout((()=>{n.abort(),Se(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(r),t.ok?Se(0,0,!0,e):Se(0,0,!1,e)})).catch((()=>{clearTimeout(r),Se(0,0,!1,e)}))}(r.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),un(t),We(t)}function un(t){if(t.G=0,t.ka=[],t.l){const e=te(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function ln(t,e,n){var r=n instanceof re?ie(n):new re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),oe(r,r.s);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new re(null);r&&se(o,r),e&&(o.g=e),s&&oe(o,s),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ce(r,n,e),ce(r,"VER",t.la),Je(t,r),r}function hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new Me(new De({eb:n})):new Me(t.pa)).Ha(t.J),e}function dn(){}function fn(){}function pn(t,e){tt.call(this),this.g=new Ke(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new yn(this)}function gn(t){mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mn(){yt.call(this),this.status=1}function yn(t){this.g=t}(t=Me.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nt.g(),this.v=this.o?ft(this.o):ft(Nt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void Ve(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Fe,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Be(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Ve(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),qe(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qe(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?je(this):this.bb())},t.bb=function(){je(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<$e(this)?this.g.status:-1}catch(fe){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(fe){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),lt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Ke.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){It(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=ln(this,null,this.W),Ye(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ot(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),E(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ze(this,i,e),ce(n=ie(this.I),"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Je(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Oe(s)))+"&"+e:this.m&&Le(n,this.m,s)),Jt(this.h,i),this.Ua&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.T=!0,Ft(i,n,null)):Ft(i,n,e),this.G=2}}else 3==this.G&&(t?Xe(this,t):0==this.i.length||Wt(this.h)||Xe(this))},t.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ct(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Qe(this),rn(this))},t.Za=function(){null!=this.C&&(this.C=null,Qe(this),en(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=dn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},fn.prototype.g=function(t,e){return new pn(t,e)},h(pn,tt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){He(this.g)},pn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ut(t),t=n);e.i.push(new Ht(e.Ya++,t)),3==e.G&&Ye(e)},pn.prototype.N=function(){this.g.l=null,delete this.j,He(this.g),delete this.g,pn.aa.N.call(this)},h(gn,mt),h(mn,yt),h(yn,dn),yn.prototype.ua=function(){et(this.g,"a")},yn.prototype.ta=function(t){et(this.g,new gn(t))},yn.prototype.sa=function(t){et(this.g,new mn)},yn.prototype.ra=function(){et(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,zn=function(){return new fn},$n=function(){return bt()},Bn=vt,qn={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,jn=kt,xt.COMPLETE="complete",Un=xt,pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Vn=pt,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Fn=Me}).apply(void 0!==Gn?Gn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Kn="@firebase/firestore",Hn="4.7.11";
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
             */class Qn{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qn.UNAUTHENTICATED=new Qn(null),Qn.GOOGLE_CREDENTIALS=new Qn("google-credentials-uid"),Qn.FIRST_PARTY=new Qn("first-party-uid"),Qn.MOCK_USER=new Qn("mock-user");
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
let Wn="11.6.1";
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
             */const Yn=new et("@firebase/firestore");function Xn(){return Yn.logLevel}function Jn(t,...e){if(Yn.logLevel<=Y.DEBUG){const n=e.map(er);Yn.debug(`Firestore (${Wn}): ${t}`,...n)}}function Zn(t,...e){if(Yn.logLevel<=Y.ERROR){const n=e.map(er);Yn.error(`Firestore (${Wn}): ${t}`,...n)}}function tr(t,...e){if(Yn.logLevel<=Y.WARN){const n=e.map(er);Yn.warn(`Firestore (${Wn}): ${t}`,...n)}}function er(t){if("string"==typeof t)return t;try{
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
             */function nr(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,rr(t,r,n)}function rr(t,e,n){let r=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function ir(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||rr(e,i,r)}function sr(t,e){return t}
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
             */const or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ar extends U{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
             */class ur{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qn.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dr{constructor(t){this.t=t,this.currentUser=Qn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ir(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Jn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Jn("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Jn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ir("string"==typeof e.accessToken,31837,{l:e}),new ur(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ir(null===t||"string"==typeof t,2055,{h:t}),new Qn(t)}}class fr{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Qn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pr{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new fr(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Qn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(t,e){var n;this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ir(void 0===this.o,3512);const n=t=>{null!=t.error&&Jn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,Jn("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Jn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):Jn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ir("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new gr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
             */class wr{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=yr(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function br(t,e){return t<e?-1:t>e?1:0}function Er(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return br(r,i);{const s=vr(),o=_r(s.encode(Tr(t,n)),s.encode(Tr(e,n)));return 0!==o?o:br(r,i)}}n+=r>65535?2:1}return br(t.length,e.length)}function Tr(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _r(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return br(t[n],e[n]);return br(t.length,e.length)}function Ir(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
             */const Sr=-62135596800,Cr=1e6;class Ar{static now(){return Ar.fromMillis(Date.now())}static fromDate(t){return Ar.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Cr);return new Ar(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Sr)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cr}_compareTo(t){return this.seconds===t.seconds?br(this.nanoseconds,t.nanoseconds):br(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Sr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
             */const Nr="__name__";class kr{constructor(t,e,n){void 0===e?e=0:e>t.length&&nr(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&nr(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===kr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=kr.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return br(t.length,e.length)}static compareSegments(t,e){const n=kr.isNumericId(t),r=kr.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?kr.extractNumericId(t).compare(kr.extractNumericId(e)):Er(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ln.fromString(t.substring(4,t.length-2))}}class xr extends kr{construct(t,e,n){return new xr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ar(or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new xr(e)}static emptyPath(){return new xr([])}}const Rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Or extends kr{construct(t,e,n){return new Or(t,e,n)}static isValidIdentifier(t){return Rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Or.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Nr}static keyField(){return new Or([Nr])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ar(or.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ar(or.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ar(or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ar(or.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Or(e)}static emptyPath(){return new Or([])}}
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
             */class Lr{constructor(t){this.path=t}static fromPath(t){return new Lr(xr.fromString(t))}static fromName(t){return new Lr(xr.fromString(t).popFirst(5))}static empty(){return new Lr(xr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===xr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return xr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Lr(new xr(t.slice()))}}
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
             */function Mr(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Pr(Dr.min(),Lr.empty(),-1)}static max(){return new Pr(Dr.max(),Lr.empty(),-1)}}function Fr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Lr.comparator(t.documentKey,e.documentKey),0!==n?n:br(t.largestBatchId,e.largestBatchId)
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
             */async function jr(t){if(t.code!==or.FAILED_PRECONDITION||t.message!==Vr)throw t;Jn("LocalStore","Unexpectedly lost primary lease")}
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
             */class qr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&nr(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new qr(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof qr?e:qr.resolve(e)}catch(t){return qr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):qr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):qr.reject(e)}static resolve(t){return new qr(((e,n)=>{e(t)}))}static reject(t){return new qr(((e,n)=>{n(t)}))}static waitFor(t){return new qr(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=qr.resolve(!1);for(const n of t)e=e.next((t=>t?qr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new qr(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new qr(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}function Br(t){return"IndexedDbTransactionError"===t.name}
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
             */class $r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ue(t),this.ce=t=>e.writeSequenceNumber(t))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}$r.le=-1;
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
             */const zr=-1;function Gr(t){return null==t}function Kr(t){return 0===t&&1/t==-1/0}function Hr(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Qr(t){return t+""}
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
             */function Wr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
             */class Jr{constructor(t,e){this.comparator=t,this.root=e||ti.EMPTY}insert(t,e){return new Jr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ti.BLACK,null,null))}remove(t){return new Jr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ti.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ti{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ti.RED,this.left=null!=r?r:ti.EMPTY,this.right=null!=i?i:ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ti(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ti.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ti.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw nr(43730,{key:this.key,value:this.value});if(this.right.isRed())throw nr(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw nr(27949);return t+(this.isRed()?0:1)}}ti.EMPTY=null,ti.RED=!0,ti.BLACK=!1,ti.EMPTY=new class{constructor(){this.size=0}get key(){throw nr(57766)}get value(){throw nr(16141)}get color(){throw nr(16727)}get left(){throw nr(29726)}get right(){throw nr(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new ti(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
             */class ri{constructor(t){this.fields=t,t.sort(Or.comparator)}static empty(){return new ri([])}unionWith(t){let e=new ei(Or.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ri(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ir(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
             */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return br(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}si.EMPTY_BYTE_STRING=new si("");const oi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(ir(!!t,39018),"string"==typeof t){let e=0;const n=oi.exec(t);if(ir(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ci(t.seconds),nanos:ci(t.nanos)}}function ci(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ui(t){return"string"==typeof t?si.fromBase64String(t):si.fromUint8Array(t)}
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
             */const bi="__type__",Ei="__max__",Ti={},_i="__vector__",Ii="value";function Si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pi(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ei}
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
             */(t)?9007199254740991:function(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[bi])||void 0===n?void 0:n.stringValue)===_i}(t)?10:11:nr(28295,{value:t})}function Ci(t,e){if(t===e)return!0;const n=Si(t);if(n!==Si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ai(t.timestampValue),r=ai(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ui(t.bytesValue).isEqual(ui(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ci(t.geoPointValue.latitude)===ci(e.geoPointValue.latitude)&&ci(t.geoPointValue.longitude)===ci(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ci(t.integerValue)===ci(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ci(t.doubleValue),r=ci(e.doubleValue);return n===r?Kr(n)===Kr(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ir(t.arrayValue.values||[],e.arrayValue.values||[],Ci);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Wr(n)!==Wr(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ci(n[i],r[i])))return!1;return!0}(t,e);default:return nr(52216,{left:t})}}function Ai(t,e){return void 0!==(t.values||[]).find((t=>Ci(t,e)))}function Di(t,e){if(t===e)return 0;const n=Si(t),r=Si(e);if(n!==r)return br(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return br(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ci(t.integerValue||t.doubleValue),r=ci(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ni(t.timestampValue,e.timestampValue);case 4:return Ni(mi(t),mi(e));case 5:return Er(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ui(t),r=ui(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=br(n[i],r[i]);if(0!==t)return t}return br(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=br(ci(t.latitude),ci(e.latitude));return 0!==n?n:br(ci(t.longitude),ci(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ki(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o[Ii])||void 0===n?void 0:n.arrayValue,u=null===(r=a[Ii])||void 0===r?void 0:r.arrayValue,l=br((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:ki(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ti&&e===Ti)return 0;if(t===Ti)return 1;if(e===Ti)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Er(r[o],s[o]);if(0!==t)return t;const e=Di(n[r[o]],i[s[o]]);if(0!==e)return e}return br(r.length,s.length)}(t.mapValue,e.mapValue);default:throw nr(23264,{Pe:n})}}function Ni(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return br(t,e);const n=ai(t),r=ai(e),i=br(n.seconds,r.seconds);return 0!==i?i:br(n.nanos,r.nanos)}function ki(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Di(n[i],r[i]);if(t)return t}return br(n.length,r.length)}function xi(t){return Ri(t)}function Ri(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ai(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return ui(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Lr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ri(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ri(t.fields[i])}`;return n+"}"}(t.mapValue):nr(61005,{value:t})}function Oi(t){switch(Si(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(t);return e?16+Oi(e):16;case 5:return 2*t.stringValue.length;case 6:return ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Oi(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Yr(t.fields,((t,n)=>{e+=t.length+Oi(n)})),e}(t.mapValue);default:throw nr(13486,{value:t})}}function Li(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mi(t){return!!t&&"integerValue"in t}function Pi(t){return!!t&&"arrayValue"in t}function Fi(t){return!!t&&"nullValue"in t}function Vi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ui(t){return!!t&&"mapValue"in t}function ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ji(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}class qi{constructor(t){this.value=t}static empty(){return new qi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ui(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ji(e)}setAll(t){let e=Or.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ji(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ui(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ci(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ui(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Yr(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new qi(ji(this.value))}}function Bi(t){const e=[];return Yr(t.fields,((t,n)=>{const r=new Or([t]);if(Ui(n)){const t=Bi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ri(e)
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
             */}class $i{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new $i(t,0,Dr.min(),Dr.min(),Dr.min(),qi.empty(),0)}static newFoundDocument(t,e,n,r){return new $i(t,1,e,Dr.min(),n,r,0)}static newNoDocument(t,e){return new $i(t,2,e,Dr.min(),Dr.min(),qi.empty(),0)}static newUnknownDocument(t,e){return new $i(t,3,e,Dr.min(),Dr.min(),qi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Dr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof $i&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $i(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
             */class zi{constructor(t,e){this.position=t,this.inclusive=e}}function Gi(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Lr.comparator(Lr.fromName(o.referenceValue),n.key):Di(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ki(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ci(t.position[n],e.position[n]))return!1;return!0}
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
             */class Wi{}class Yi extends Wi{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new rs(t,e,n):"array-contains"===e?new as(t,n):"in"===e?new cs(t,n):"not-in"===e?new us(t,n):"array-contains-any"===e?new ls(t,n):new Yi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new is(t,n):new ss(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Di(e,this.value)):null!==e&&Si(this.value)===Si(e)&&this.matchesComparison(Di(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return nr(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xi extends Wi{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Xi(t,e)}matches(t){return Ji(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ji(t){return"and"===t.op}function Zi(t){return function(t){for(const e of t.filters)if(e instanceof Xi)return!1;return!0}(t)&&Ji(t)}function ts(t){if(t instanceof Yi)return t.field.canonicalString()+t.op.toString()+xi(t.value);if(Zi(t))return t.filters.map((t=>ts(t))).join(",");{const e=t.filters.map((t=>ts(t))).join(",");return`${t.op}(${e})`}}function es(t,e){return t instanceof Yi?function(t,e){return e instanceof Yi&&t.op===e.op&&t.field.isEqual(e.field)&&Ci(t.value,e.value)}(t,e):t instanceof Xi?function(t,e){return e instanceof Xi&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&es(n,e.filters[r])),!0)}(t,e):void nr(19439)}function ns(t){return t instanceof Yi?function(t){return`${t.field.canonicalString()} ${t.op} ${xi(t.value)}`}(t):t instanceof Xi?function(t){return t.op.toString()+" {"+t.getFilters().map(ns).join(" ,")+"}"}(t):"Filter"}class rs extends Yi{constructor(t,e,n){super(t,e,n),this.key=Lr.fromName(n.referenceValue)}matches(t){const e=Lr.comparator(t.key,this.key);return this.matchesComparison(e)}}class is extends Yi{constructor(t,e){super(t,"in",e),this.keys=os(0,e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ss extends Yi{constructor(t,e){super(t,"not-in",e),this.keys=os(0,e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function os(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Lr.fromName(t.referenceValue)))}class as extends Yi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pi(e)&&Ai(e.arrayValue,this.value)}}class cs extends Yi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ai(this.value.arrayValue,e)}}class us extends Yi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Ai(this.value.arrayValue,e)}}class ls extends Yi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ai(this.value.arrayValue,t)))}}
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
             */class hs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Ie=null}}function ds(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hs(t,e,n,r,i,s,o)}function fs(t){const e=sr(t);if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ts(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>xi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>xi(t))).join(",")),e.Ie=t}return e.Ie}function ps(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!es(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ki(t.startAt,e.startAt)&&Ki(t.endAt,e.endAt)}function gs(t){return Lr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
             */class ms{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ys(t){return new ms(t)}function vs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ws(t){return null!==t.collectionGroup}function bs(t){const e=sr(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new ei(Or.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new Hi(r,n))})),t.has(Or.keyField().canonicalString())||e.Ee.push(new Hi(Or.keyField(),n))}return e.Ee}function Es(t){const e=sr(t);return e.de||(e.de=function(t,e){if("F"===t.limitType)return ds(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Hi(t.field,e)}));const n=t.endAt?new zi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zi(t.startAt.position,t.startAt.inclusive):null;return ds(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,bs(t))),e.de}function Ts(t,e){const n=t.filters.concat([e]);return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _s(t,e,n){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Is(t,e){return ps(Es(t),Es(e))&&t.limitType===e.limitType}function Ss(t){return`${fs(Es(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ns(t))).join(", ")}]`),Gr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>xi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>xi(t))).join(",")),`Target(${e})`}(Es(t))}; limitType=${t.limitType})`}function As(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Lr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of bs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Gi(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,bs(t),e)||t.endAt&&!function(t,e,n){const r=Gi(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,bs(t),e))}(t,e)}function Ds(t){return(e,n)=>{let r=!1;for(const i of bs(t)){const t=Ns(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ns(t,e,n){const r=t.field.isKeyField()?Lr.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Di(r,i):nr(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return nr(19790,{direction:t.dir})}}
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
             */class ks{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Yr(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Xr(this.inner)}size(){return this.innerSize}}
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
             */const xs=new Jr(Lr.comparator);function Rs(){return xs}const Os=new Jr(Lr.comparator);function Ls(...t){let e=Os;for(const n of t)e=e.insert(n.key,n);return e}function Ms(t){let e=Os;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ps(){return Vs()}function Fs(){return Vs()}function Vs(){return new ks((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Us=new Jr(Lr.comparator),js=new ei(Lr.comparator);function qs(...t){let e=js;for(const n of t)e=e.add(n);return e}const Bs=new ei(br);
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
function $s(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kr(e)?"-0":e}}function zs(t){return{integerValue:""+t}}function Gs(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Kr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
             */class Ks{constructor(){this._=void 0}}function Hs(t,e,n){return t instanceof Ys?function(t,e){const n={fields:{[hi]:{stringValue:li},[fi]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&pi(e)&&(e=gi(e)),e&&(n.fields[di]=e),{mapValue:n}}(n,e):t instanceof Xs?Js(t,e):t instanceof Zs?to(t,e):function(t,e){const n=Ws(t,e),r=no(n)+no(t.Re);return Mi(n)&&Mi(t.Re)?zs(r):$s(t.serializer,r)}(t,e)}function Qs(t,e,n){return t instanceof Xs?Js(t,e):t instanceof Zs?to(t,e):n}function Ws(t,e){return t instanceof eo?function(t){return Mi(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Ys extends Ks{}class Xs extends Ks{constructor(t){super(),this.elements=t}}function Js(t,e){const n=ro(e);for(const r of t.elements)n.some((t=>Ci(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Ks{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const r of t.elements)n=n.filter((t=>!Ci(t,r)));return{arrayValue:{values:n}}}class eo extends Ks{constructor(t,e){super(),this.serializer=t,this.Re=e}}function no(t){return ci(t.integerValue||t.doubleValue)}function ro(t){return Pi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
             */class io{constructor(t,e){this.field=t,this.transform=e}}class so{constructor(t,e){this.version=t,this.transformResults=e}}class oo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oo}static exists(t){return new oo(void 0,t)}static updateTime(t){return new oo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ao(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class co{}function uo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new bo(t.key,oo.none()):new go(t.key,t.data,oo.none());{const n=t.data,r=qi.empty();let i=new ei(Or.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new mo(t.key,r,new ri(i.toArray()),oo.none())}}function lo(t,e,n){t instanceof go?function(t,e,n){const r=t.value.clone(),i=vo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!ao(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=vo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(yo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof go?function(t,e,n,r){if(!ao(t.precondition,e))return n;const i=t.value.clone(),s=wo(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof mo?function(t,e,n,r){if(!ao(t.precondition,e))return n;const i=wo(t.fieldTransforms,r,e),s=e.data;return s.setAll(yo(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ao(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function fo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ws(r.transform,t||null);null!=i&&(null===n&&(n=qi.empty()),n.set(r.field,i))}return n||null}function po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ir(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Xs&&e instanceof Xs||t instanceof Zs&&e instanceof Zs?Ir(t.elements,e.elements,Ci):t instanceof eo&&e instanceof eo?Ci(t.Re,e.Re):t instanceof Ys&&e instanceof Ys}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends co{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mo extends co{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function vo(t,e,n){const r=new Map;ir(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Qs(o,a,n[i]))}return r}function wo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Hs(t,s,e))}return r}class bo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
             */class To{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fs();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=uo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),qs())}isEqual(t){return this.batchId===t.batchId&&Ir(this.mutations,t.mutations,((t,e)=>po(t,e)))&&Ir(this.baseMutations,t.baseMutations,((t,e)=>po(t,e)))}}class _o{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ir(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let r=Us;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new _o(t,e,n,r)}}
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
             */class So{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
             */var Co,Ao;function Do(t){if(void 0===t)return Zn("GRPC error has no .code"),or.UNKNOWN;switch(t){case Co.OK:return or.OK;case Co.CANCELLED:return or.CANCELLED;case Co.UNKNOWN:return or.UNKNOWN;case Co.DEADLINE_EXCEEDED:return or.DEADLINE_EXCEEDED;case Co.RESOURCE_EXHAUSTED:return or.RESOURCE_EXHAUSTED;case Co.INTERNAL:return or.INTERNAL;case Co.UNAVAILABLE:return or.UNAVAILABLE;case Co.UNAUTHENTICATED:return or.UNAUTHENTICATED;case Co.INVALID_ARGUMENT:return or.INVALID_ARGUMENT;case Co.NOT_FOUND:return or.NOT_FOUND;case Co.ALREADY_EXISTS:return or.ALREADY_EXISTS;case Co.PERMISSION_DENIED:return or.PERMISSION_DENIED;case Co.FAILED_PRECONDITION:return or.FAILED_PRECONDITION;case Co.ABORTED:return or.ABORTED;case Co.OUT_OF_RANGE:return or.OUT_OF_RANGE;case Co.UNIMPLEMENTED:return or.UNIMPLEMENTED;case Co.DATA_LOSS:return or.DATA_LOSS;default:return nr(39323,{code:t})}}(Ao=Co||(Co={}))[Ao.OK=0]="OK",Ao[Ao.CANCELLED=1]="CANCELLED",Ao[Ao.UNKNOWN=2]="UNKNOWN",Ao[Ao.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ao[Ao.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ao[Ao.NOT_FOUND=5]="NOT_FOUND",Ao[Ao.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ao[Ao.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ao[Ao.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ao[Ao.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ao[Ao.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ao[Ao.ABORTED=10]="ABORTED",Ao[Ao.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ao[Ao.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ao[Ao.INTERNAL=13]="INTERNAL",Ao[Ao.UNAVAILABLE=14]="UNAVAILABLE",Ao[Ao.DATA_LOSS=15]="DATA_LOSS";
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
const No=new Ln([4294967295,4294967295],0);function ko(t){const e=vr().encode(t),n=new Mn;return n.update(e),new Uint8Array(n.digest())}function xo(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ln([n,r],0),new Ln([i,s],0)]}class Ro{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Oo(`Invalid padding: ${e}`);if(n<0)throw new Oo(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Oo(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Oo(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Ln.fromNumber(this.pe)}we(t,e,n){let r=t.add(e.multiply(Ln.fromNumber(n)));return 1===r.compare(No)&&(r=new Ln([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.pe)return!1;const e=ko(t),[n,r]=xo(e);for(let i=0;i<this.hashCount;i++){const t=this.we(n,r,i);if(!this.be(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ro(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.pe)return;const e=ko(t),[n,r]=xo(e);for(let i=0;i<this.hashCount;i++){const t=this.we(n,r,i);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
             */class Lo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Mo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Lo(Dr.min(),r,new Jr(br),Rs(),qs())}}class Mo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Mo(n,e,qs(),qs(),qs())}}
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
             */class Po{constructor(t,e,n,r){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=r}}class Fo{constructor(t,e){this.targetId=t,this.Ce=e}}class Vo{constructor(t,e,n=si.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Uo{constructor(){this.Fe=0,this.Me=Bo(),this.xe=si.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=qs(),e=qs(),n=qs();return this.Me.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:nr(38017,{changeType:i})}})),new Mo(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=Bo()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,ir(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class jo{constructor(t){this.ze=t,this.je=new Map,this.He=Rs(),this.Je=qo(),this.Ye=qo(),this.Ze=new Jr(br)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,(e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:nr(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach(((t,n)=>{this.it(n)&&e(n)}))}ot(t){const e=t.targetId,n=t.Ce.count,r=this._t(e);if(r){const i=r.target;if(gs(i))if(0===n){const t=new Lr(i.path);this.tt(e,t,$i.newNoDocument(t,Dr.min()))}else ir(1===n,20013,{expectedCount:n});else{const r=this.ut(e);if(r!==n){const n=this.ct(t),i=n?this.lt(n,t,r):1;if(0!==i){this.st(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=ui(n).toUint8Array()}catch(t){if(t instanceof ii)return tr("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ro(s,r,i)}catch(t){return tr(t instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.pe?null:o}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.ze.Pt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.tt(e,n,null),r++)})),r}It(t){const e=new Map;this.je.forEach(((n,r)=>{const i=this._t(r);if(i){if(n.current&&gs(i.target)){const e=new Lr(i.target.path);this.Et(e).has(r)||this.dt(r,e)||this.tt(r,e,$i.newNoDocument(e,t))}n.Le&&(e.set(r,n.qe()),n.Qe())}}));let n=qs();this.Ye.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this._t(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.He.forEach(((e,n)=>n.setReadTime(t)));const r=new Lo(t,e,this.Ze,this.He,n);return this.He=Rs(),this.Je=qo(),this.Ye=qo(),this.Ze=new Jr(br),r}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const r=this.rt(t);this.dt(t,e)?r.$e(e,1):r.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Uo,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new ei(br),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new ei(br),this.Je=this.Je.insert(t,e)),e}it(t){const e=null!==this._t(t);return e||Jn("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Uo),this.ze.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function qo(){return new Jr(Lr.comparator)}function Bo(){return new Jr(Lr.comparator)}const $o={asc:"ASCENDING",desc:"DESCENDING"},zo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Go={and:"AND",or:"OR"};class Ko{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ho(t,e){return t.useProto3Json||Gr(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wo(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Yo(t,e){return Qo(t,e.toTimestamp())}function Xo(t){return ir(!!t,49232),Dr.fromTimestamp(function(t){const e=ai(t);return new Ar(e.seconds,e.nanos)}(t))}function Jo(t,e){return Zo(t,e).canonicalString()}function Zo(t,e){const n=function(t){return new xr(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function ta(t){const e=xr.fromString(t);return ir(va(e),10190,{key:e.toString()}),e}function ea(t,e){return Jo(t.databaseId,e.path)}function na(t,e){const n=ta(e);if(n.get(1)!==t.databaseId.projectId)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Lr(sa(n))}function ra(t,e){return Jo(t.databaseId,e)}function ia(t){return new xr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sa(t){return ir(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function oa(t,e,n){return{name:ea(t,e),fields:n.value.mapValue.fields}}function aa(t,e){return{documents:[ra(t,e.path)]}}function ca(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ra(t,i);const s=function(t){if(0!==t.length)return ma(Xi.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pa(t.field),direction:ha(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ho(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{gt:n,parent:i}}function ua(t){let e=function(t){const e=ta(t);return 4===e.length?xr.emptyPath():sa(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ir(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=la(t);return e instanceof Xi&&Zi(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Hi(ga(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new zi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new zi(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new ms(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function la(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ga(t.unaryFilter.field);return Yi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ga(t.unaryFilter.field);return Yi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ga(t.unaryFilter.field);return Yi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ga(t.unaryFilter.field);return Yi.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return nr(61313);default:return nr(60726)}}(t):void 0!==t.fieldFilter?function(t){return Yi.create(ga(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return nr(58110);default:return nr(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Xi.create(t.compositeFilter.filters.map((t=>la(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return nr(1026)}}(t.compositeFilter.op))}(t):nr(30097,{filter:t})}function ha(t){return $o[t]}function da(t){return zo[t]}function fa(t){return Go[t]}function pa(t){return{fieldPath:t.canonicalString()}}function ga(t){return Or.fromServerFormat(t.fieldPath)}function ma(t){return t instanceof Yi?function(t){if("=="===t.op){if(Vi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NAN"}};if(Fi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Vi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NAN"}};if(Fi(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(t.field),op:da(t.op),value:t.value}}}(t):t instanceof Xi?function(t){const e=t.getFilters().map((t=>ma(t)));return 1===e.length?e[0]:{compositeFilter:{op:fa(t.op),filters:e}}}(t):nr(54877,{filter:t})}function ya(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function va(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
             */class ba{constructor(t){this.wt=t}}function Ea(t){const e=ua({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_s(e,e.limit,"L"):e}
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
             */class Ta{constructor(){this.yn=new _a}addToCollectionParentIndex(t,e){return this.yn.add(e),qr.resolve()}getCollectionParents(t,e){return qr.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return qr.resolve()}deleteFieldIndex(t,e){return qr.resolve()}deleteAllFieldIndexes(t){return qr.resolve()}createTargetIndexes(t,e){return qr.resolve()}getDocumentsMatchingTarget(t,e){return qr.resolve(null)}getIndexType(t,e){return qr.resolve(0)}getFieldIndexes(t,e){return qr.resolve([])}getNextCollectionGroupToUpdate(t){return qr.resolve(null)}getMinOffset(t,e){return qr.resolve(Pr.min())}getMinOffsetFromCollectionGroup(t,e){return qr.resolve(Pr.min())}updateCollectionGroup(t,e,n){return qr.resolve()}updateIndexEntries(t,e){return qr.resolve()}}class _a{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ei(xr.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ei(xr.comparator)).toArray()}}
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
             */const Ia={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sa=41943040;class Ca{static withCacheSize(t){return new Ca(t,Ca.DEFAULT_COLLECTION_PERCENTILE,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
             */Ca.DEFAULT_COLLECTION_PERCENTILE=10,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ca.DEFAULT=new Ca(Sa,Ca.DEFAULT_COLLECTION_PERCENTILE,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ca.DISABLED=new Ca(-1,0,0);
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
class Aa{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Aa(0)}static ir(){return new Aa(-1)}}
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
             */const Da="LruGarbageCollector";function Na([t,e],[n,r]){const i=br(t,n);return 0===i?br(e,r):i}class ka{constructor(t){this.cr=t,this.buffer=new ei(Na),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Na(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class xa{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return null!==this.Tr}Ir(t){Jn(Da,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Br(t)?Jn(Da,"Ignoring IndexedDB error during garbage collection: ",t):await jr(t)}await this.Ir(3e5)}))}}class Ra{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return qr.resolve($r.le);const n=new ka(e);return this.Er.forEachTarget(t,(t=>n.Pr(t.sequenceNumber))).next((()=>this.Er.Ar(t,(t=>n.Pr(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Jn("LruGarbageCollector","Garbage collection skipped; disabled"),qr.resolve(Ia)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(Jn("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ia):this.Rr(t,e)))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(Jn("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),Xn()<=Y.DEBUG&&Jn("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),qr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}
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
class Oa{constructor(){this.changes=new ks((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$i.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?qr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
             */class La{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
             */class Ma{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ho(n.mutation,t,ri.empty(),Ar.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,qs()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=qs()){const r=Ps();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ls();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ps();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,qs())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Rs();const s=Vs(),o=Vs();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof mo)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ho(o.mutation,e,o.mutation.getFieldMask(),Ar.now())):s.set(e.key,ri.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new La(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Vs();let r=new Jr(((t,e)=>t-e)),i=qs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ri.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||qs()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Fs();c.forEach((t=>{if(!i.has(t)){const r=uo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return qr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Lr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ws(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):qr.resolve(Ps());let o=-1,a=i;return s.next((e=>qr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?qr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,qs()))).next((t=>({batchId:o,changes:Ms(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Lr(e)).next((t=>{let e=Ls();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Ls();return this.indexManager.getCollectionParents(t,i).next((o=>qr.forEach(o,(o=>{const a=function(t,e){return new ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,$i.newInvalidDocument(r)))}));let n=Ls();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&ho(s.mutation,r,ri.empty(),Ar.now()),As(e,r)&&(n=n.insert(t,r))})),n}))}}
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
             */class Pa{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return qr.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Xo(t.createTime)}}(e)),qr.resolve()}getNamedQuery(t,e){return qr.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(t){return{name:t.name,query:Ea(t.bundledQuery),readTime:Xo(t.readTime)}}(e)),qr.resolve()}}
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
             */class Fa{constructor(){this.overlays=new Jr(Lr.comparator),this.Or=new Map}getOverlay(t,e){return qr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ps();return qr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.St(t,e,r)})),qr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Or.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Or.delete(n)),qr.resolve()}getOverlaysForCollection(t,e,n){const r=Ps(),i=e.length+1,s=new Lr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return qr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Jr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ps(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ps(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return qr.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Or.get(r.largestBatchId).delete(n.key);this.Or.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Io(e,n));let i=this.Or.get(e);void 0===i&&(i=qs(),this.Or.set(e,i)),this.Or.set(e,i.add(n.key))}}
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
             */class Va{constructor(){this.sessionToken=si.EMPTY_BYTE_STRING}getSessionToken(t){return qr.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,qr.resolve()}}
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
             */class Ua{constructor(){this.Nr=new ei(ja.Br),this.Lr=new ei(ja.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new ja(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Qr(new ja(t,e))}$r(t,e){t.forEach((t=>this.removeReference(t,e)))}Ur(t){const e=new Lr(new xr([])),n=new ja(e,t),r=new ja(e,t+1),i=[];return this.Lr.forEachInRange([n,r],(t=>{this.Qr(t),i.push(t.key)})),i}Kr(){this.Nr.forEach((t=>this.Qr(t)))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new Lr(new xr([])),n=new ja(e,t),r=new ja(e,t+1);let i=qs();return this.Lr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ja(t,0),n=this.Nr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ja{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return Lr.comparator(t.key,e.key)||br(t.Gr,e.Gr)}static kr(t,e){return br(t.Gr,e.Gr)||Lr.comparator(t.key,e.key)}}
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
             */class qa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new ei(ja.Br)}checkEmpty(t){return qr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new To(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.zr=this.zr.add(new ja(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return qr.resolve(s)}lookupMutationBatch(t,e){return qr.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Hr(n),i=r<0?0:r;return qr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return qr.resolve(0===this.mutationQueue.length?zr:this.Jn-1)}getAllMutationBatches(t){return qr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ja(e,0),r=new ja(e,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,r],(t=>{const e=this.jr(t.Gr);i.push(e)})),qr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ei(br);return e.forEach((t=>{const e=new ja(t,0),r=new ja(t,Number.POSITIVE_INFINITY);this.zr.forEachInRange([e,r],(t=>{n=n.add(t.Gr)}))})),qr.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Lr.isDocumentKey(i)||(i=i.child(""));const s=new ja(new Lr(i),0);let o=new ei(br);return this.zr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Gr)),!0)}),s),qr.resolve(this.Jr(o))}Jr(t){const e=[];return t.forEach((t=>{const n=this.jr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ir(0===this.Yr(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.zr;return qr.forEach(e.mutations,(r=>{const i=new ja(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.zr=n}))}Xn(t){}containsKey(t,e){const n=new ja(e,0),r=this.zr.firstAfterOrEqual(n);return qr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,qr.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
             */class Ba{constructor(t){this.Zr=t,this.docs=new Jr(Lr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return qr.resolve(n?n.document.mutableCopy():$i.newInvalidDocument(e))}getEntries(t,e){let n=Rs();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():$i.newInvalidDocument(t))})),qr.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Rs();const s=e.path,o=new Lr(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Fr(Mr(o),n)<=0||(r.has(o.key)||As(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return qr.resolve(i)}getAllFromCollectionGroup(t,e,n,r){nr(9500)}Xr(t,e){return qr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new $a(this)}getSize(t){return qr.resolve(this.size)}}class $a extends Oa{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.vr.addEntry(t,r)):this.vr.removeEntry(n)})),qr.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}
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
             */class za{constructor(t){this.persistence=t,this.ei=new ks((t=>fs(t)),ps),this.lastRemoteSnapshotVersion=Dr.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ua,this.targetCount=0,this.ri=Aa.rr()}forEachTarget(t,e){return this.ei.forEach(((t,n)=>e(n))),qr.resolve()}getLastRemoteSnapshotVersion(t){return qr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return qr.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),qr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),qr.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Aa(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,qr.resolve()}updateTargetData(t,e){return this.ar(e),qr.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,qr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ei.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ei.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),qr.waitFor(i).next((()=>r))}getTargetCount(t){return qr.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return qr.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),qr.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),qr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),qr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return qr.resolve(n)}containsKey(t,e){return qr.resolve(this.ni.containsKey(e))}}
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
             */class Ga{constructor(t,e){this.ii={},this.overlays={},this.si=new $r(0),this.oi=!1,this.oi=!0,this._i=new Va,this.referenceDelegate=t(this),this.ai=new za(this),this.indexManager=new Ta,this.remoteDocumentCache=function(t){return new Ba(t)}((t=>this.referenceDelegate.ui(t))),this.serializer=new ba(e),this.ci=new Pa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fa,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new qa(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){Jn("MemoryPersistence","Starting transaction:",t);const r=new Ka(this.si.next());return this.referenceDelegate.li(),n(r).next((t=>this.referenceDelegate.hi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Pi(t,e){return qr.or(Object.values(this.ii).map((n=>()=>n.containsKey(t,e))))}}class Ka extends Ur{constructor(t){super(),this.currentSequenceNumber=t}}class Ha{constructor(t){this.persistence=t,this.Ti=new Ua,this.Ii=null}static Ei(t){return new Ha(t)}get di(){if(this.Ii)return this.Ii;throw nr(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),qr.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),qr.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),qr.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach((t=>this.di.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.di.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return qr.forEach(this.di,(n=>{const r=Lr.fromPath(n);return this.Ai(t,r).next((t=>{t||e.removeEntry(r,Dr.min())}))})).next((()=>(this.Ii=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ai(t,e).next((t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())}))}ui(t){return 0}Ai(t,e){return qr.or([()=>qr.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Qa{constructor(t,e){this.persistence=t,this.Ri=new ks((t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qr(e)),e=Hr(t.get(n),e);return Qr(e)}(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=function(t,e){return new Ra(t,e)}(this,e)}static Ei(t,e){return new Qa(t,e)}li(){}hi(t){return qr.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}Vr(t){let e=0;return this.Ar(t,(t=>{e++})).next((()=>e))}Ar(t,e){return qr.forEach(this.Ri,((n,r)=>this.gr(t,n,r).next((t=>t?qr.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Xr(t,(r=>this.gr(t,r,e).next((t=>{t||(n++,i.removeEntry(r,Dr.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),qr.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),qr.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),qr.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),qr.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Oi(t.data.value)),e}gr(t,e,n){return qr.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.Ri.get(e);return qr.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
             */class Wa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=r}static Ps(t,e){let n=qs(),r=qs();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wa(t,e.fromCache,n,r)}}
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
             */class Ya{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
             */class Xa{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=P()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Rs(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Vs(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Ya;return this.fs(t,e,n).next((r=>{if(i.result=r,this.Is)return this.gs(t,e,n,r.size)}))})).next((()=>i.result))}gs(t,e,n,r){return n.documentReadCount<this.Es?(Xn()<=Y.DEBUG&&Jn("QueryEngine","SDK will not create cache indexes for query:",Cs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),qr.resolve()):(Xn()<=Y.DEBUG&&Jn("QueryEngine","Query:",Cs(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Xn()<=Y.DEBUG&&Jn("QueryEngine","The SDK decides to create cache indexes for query:",Cs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Es(e))):qr.resolve())}Rs(t,e){if(vs(e))return qr.resolve(null);let n=Es(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=_s(e,null,"F"),n=Es(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=qs(...r);return this.As.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ps(e,r);return this.ys(e,s,i,n.readTime)?this.Rs(t,_s(e,null,"F")):this.ws(t,s,e,n)}))))})))))}Vs(t,e,n,r){return vs(e)||r.isEqual(Dr.min())?qr.resolve(null):this.As.getDocuments(t,n).next((i=>{const s=this.ps(e,i);return this.ys(e,s,n,r)?qr.resolve(null):(Xn()<=Y.DEBUG&&Jn("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cs(e)),this.ws(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Dr.fromTimestamp(1e9===r?new Ar(n+1,0):new Ar(n,r));return new Pr(i,Lr.empty(),e)}(r,-1)).next((t=>t)))}))}ps(t,e){let n=new ei(Ds(t));return e.forEach(((e,r)=>{As(t,r)&&(n=n.add(r))})),n}ys(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}fs(t,e,n){return Xn()<=Y.DEBUG&&Jn("QueryEngine","Using full collection scan to execute query:",Cs(e)),this.As.getDocumentsMatchingQuery(t,e,Pr.min(),n)}ws(t,e,n,r){return this.As.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
             */const Ja="LocalStore",Za=3e8;class tc{constructor(t,e,n,r){this.persistence=t,this.bs=e,this.serializer=r,this.Ss=new Jr(br),this.Ds=new ks((t=>fs(t)),ps),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ma(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ss)))}}async function ec(t,e){const n=sr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=qs();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ms:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function nc(t){const e=sr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ai.getLastRemoteSnapshotVersion(t)))}function rc(t,e){const n=sr(t),r=e.snapshotVersion;let i=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Cs.newChangeBuffer({trackRemovals:!0});i=n.Ss;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.ai.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.ai.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(si.EMPTY_BYTE_STRING,Dr.min()).withLastLimboFreeSnapshotVersion(Dr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=Za||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.ai.updateTargetData(t,u))}));let a=Rs(),c=qs();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=qs(),i=qs();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Rs();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Dr.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Jn(Ja,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{xs:r,Os:i}}))}(t,s,e.documentUpdates).next((t=>{a=t.xs,c=t.Os}))),!r.isEqual(Dr.min())){const e=n.ai.getLastRemoteSnapshotVersion(t).next((e=>n.ai.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return qr.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ss=i,t)))}function ic(t,e){const n=sr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=zr),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function sc(t,e,n){const r=sr(t),i=r.Ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Br(t))throw t;Jn(Ja,`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(i.target)}function oc(t,e,n){const r=sr(t);let i=Dr.min(),s=qs();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=sr(t),i=r.Ds.get(n);return void 0!==i?qr.resolve(r.Ss.get(i)):r.ai.getTargetData(e,n)}(r,t,Es(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.bs.getDocumentsMatchingQuery(t,e,n?i:Dr.min(),n?s:qs()))).next((t=>(function(t,e,n){let r=t.vs.get(e)||Dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.vs.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Ns:s})))))}class ac{constructor(){this.activeTargetIds=Bs}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cc{constructor(){this.So=new ac,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new ac,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
             */class uc{vo(t){}shutdown(){}}
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
             */const lc="ConnectivityMonitor";class hc{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){Jn(lc,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){Jn(lc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
             */}const pc="RestConnection",gc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mc{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${r}`,this.qo=this.databaseId.database===vi?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Qo(t,e,n,r,i){const s=fc(),o=this.$o(t,e.toUriEncodedString());Jn(pc,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(a,r,i),this.Ko(t,o,a,n).then((e=>(Jn(pc,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw tr(pc,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Wo(t,e,n,r,i,s){return this.Qo(t,e,n,r,i)}Uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}$o(t,e){const n=gc[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}
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
             */class yc{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}
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
             */const vc="WebChannelConnection";class wc extends mc{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,r){const i=fc();return new Promise(((s,o)=>{const a=new Fn;a.setWithCredentials(!0),a.listenOnce(Un.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jn.NO_ERROR:const e=a.getResponseJson();Jn(vc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case jn.TIMEOUT:Jn(vc,`RPC '${t}' ${i} timed out`),o(new ar(or.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:const n=a.getStatus();if(Jn(vc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(or).indexOf(e)>=0?e:or.UNKNOWN}(e.status);o(new ar(t,e.message))}else o(new ar(or.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ar(or.UNAVAILABLE,"Connection failed."));break;default:nr(9055,{s_:t,streamId:i,o_:a.getLastErrorCode(),__:a.getLastError()})}}finally{Jn(vc,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Jn(vc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}a_(t,e,n){const r=fc(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=zn(),o=$n(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Uo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Jn(vc,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new yc({Go:e=>{d?Jn(vc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Jn(vc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Jn(vc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},zo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Vn.EventType.OPEN,(()=>{d||(Jn(vc,`RPC '${t}' stream ${r} transport opened.`),f.t_())})),p(l,Vn.EventType.CLOSE,(()=>{d||(d=!0,Jn(vc,`RPC '${t}' stream ${r} transport closed`),f.r_())})),p(l,Vn.EventType.ERROR,(e=>{d||(d=!0,tr(vc,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),f.r_(new ar(or.UNAVAILABLE,"The operation could not be completed")))})),p(l,Vn.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];ir(!!i,16349);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Jn(vc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Co[t];if(void 0!==e)return Do(e)}(e),i=o.message;void 0===n&&(n=or.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.r_(new ar(n,i)),l.close()}else Jn(vc,`RPC '${t}' stream ${r} received:`,i),f.i_(i)}})),p(o,Bn.STAT_EVENT,(e=>{e.stat===qn.PROXY?Jn(vc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===qn.NOPROXY&&Jn(vc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.n_()}),0),f}}function bc(){return"undefined"!=typeof document?document:null}
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
             */function Ec(t){return new Ko(t,!0)}
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
             */class Tc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=r,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),r=Math.max(0,e-n);r>0&&Jn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,r,(()=>(this.T_=Date.now(),t()))),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){null!==this.P_&&(this.P_.skipDelay(),this.P_=null)}cancel(){null!==this.P_&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}
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
             */const _c="PersistentStream";class Ic{constructor(t,e,n,r,i,s,o,a){this.bi=t,this.R_=n,this.V_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Tc(t,e)}w_(){return 1===this.state||5===this.state||this.b_()}b_(){return 2===this.state||3===this.state}start(){this.p_=0,4!==this.state?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&null===this.f_&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,(()=>this.C_())))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,4!==t?this.y_.reset():e&&e.code===or.RESOURCE_EXHAUSTED?(Zn(e.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===or.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.m_===e&&this.B_(t,n)}),(e=>{t((()=>{const t=new ar(or.UNKNOWN,"Fetching auth token failed: "+e.message);return this.L_(t)}))}))}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo((()=>{n((()=>this.listener.jo()))})),this.stream.Jo((()=>{n((()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,(()=>(this.b_()&&(this.state=3),Promise.resolve()))),this.listener.Jo())))})),this.stream.Zo((t=>{n((()=>this.L_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.p_?this.q_(t):this.onNext(t)))}))}S_(){this.state=5,this.y_.E_((async()=>{this.state=0,this.start()}))}L_(t){return Jn(_c,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget((()=>this.m_===t?e():(Jn(_c,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sc extends Ic{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:nr(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ir(void 0===e||"string"==typeof e,58123),si.fromBase64String(e||"")):(ir(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),si.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?or.UNKNOWN:Do(t.code);return new ar(e,t.message||"")}(o);n=new Vo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=na(t,r.document.name),s=Xo(r.document.updateTime),o=r.document.createTime?Xo(r.document.createTime):Dr.min(),a=new qi({mapValue:{fields:r.document.fields}}),c=$i.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Po(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=na(t,r.document),s=r.readTime?Xo(r.readTime):Dr.min(),o=$i.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=na(t,r.document),s=r.removedTargetIds||[];n=new Po([],s,i,null)}else{if(!("filter"in e))return nr(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new So(r,i),o=t.targetId;n=new Fo(o,s)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Dr.min():e.readTime?Xo(e.readTime):Dr.min()}(t);return this.listener.Q_(e,n)}U_(t){const e={};e.database=ia(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=gs(r)?{documents:aa(t,r)}:{query:ca(t,r).gt},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Wo(t,e.resumeToken);const r=Ho(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Dr.min())>0){n.readTime=Qo(t,e.snapshotVersion.toTimestamp());const r=Ho(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nr(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.F_(e)}K_(t){const e={};e.database=ia(this.serializer),e.removeTarget=t,this.F_(e)}}class Cc extends Ic{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return ir(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ir(!t.writeResults||0===t.writeResults.length,55816),this.listener.z_()}onNext(t){ir(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=function(t,e){return t&&t.length>0?(ir(void 0!==e,14353),t.map((t=>function(t,e){let n=t.updateTime?Xo(t.updateTime):Xo(e);return n.isEqual(Dr.min())&&(n=Xo(e)),new so(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Xo(t.commitTime);return this.listener.j_(n,e)}H_(){const t={};t.database=ia(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof go)n={update:oa(t,e.key,e.value)};else if(e instanceof bo)n={delete:ea(t,e.key)};else if(e instanceof mo)n={update:oa(t,e.key,e.data),updateMask:ya(e.fieldMask)};else{if(!(e instanceof Eo))return nr(16599,{ft:e.type});n={verify:ea(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ys)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xs)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),increment:n.Re};throw nr(20930,{transform:e.transform})}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Yo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:nr(27497)}(t,e.precondition)),n}(this.serializer,t)))};this.F_(e)}}
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
             */class Ac{}class Dc extends Ac{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.J_=!1}Y_(){if(this.J_)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,r){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Qo(t,Zo(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}Wo(t,e,n,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(t,Zo(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}terminate(){this.J_=!0,this.connection.terminate()}}class Nc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){0===this.Z_&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve()))))}ia(t){"Online"===this.state?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,"Online"===t&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Zn(e),this.ea=!1):Jn("OnlineStateTracker",e)}sa(){null!==this.X_&&(this.X_.cancel(),this.X_=null)}}
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
             */const kc="RemoteStore";class xc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo((t=>{n.enqueueAndForget((async()=>{jc(this)&&(Jn(kc,"Restarting streams for network reachability change."),await async function(t){const e=sr(t);e.aa.add(4),await Oc(e),e.la.set("Unknown"),e.aa.delete(4),await Rc(e)}(this))}))})),this.la=new Nc(n,r)}}async function Rc(t){if(jc(t))for(const e of t.ua)await e(!0)}async function Oc(t){for(const e of t.ua)await e(!1)}function Lc(t,e){const n=sr(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Uc(n)?Vc(n):iu(n).b_()&&Pc(n,e))}function Mc(t,e){const n=sr(t),r=iu(n);n._a.delete(e),r.b_()&&Fc(n,e),0===n._a.size&&(r.b_()?r.v_():jc(n)&&n.la.set("Unknown"))}function Pc(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Dr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}iu(t).U_(e)}function Fc(t,e){t.ha.Ke(e),iu(t).K_(e)}function Vc(t){t.ha=new jo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),iu(t).start(),t.la.ta()}function Uc(t){return jc(t)&&!iu(t).w_()&&t._a.size>0}function jc(t){return 0===sr(t).aa.size}function qc(t){t.ha=void 0}async function Bc(t){t.la.set("Online")}async function $c(t){t._a.forEach(((e,n)=>{Pc(t,e)}))}async function zc(t,e){qc(t),Uc(t)?(t.la.ia(e),Vc(t)):t.la.set("Unknown")}async function Gc(t,e,n){if(t.la.set("Online"),e instanceof Vo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._a.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._a.delete(r),t.ha.removeTarget(r))}(t,e)}catch(n){Jn(kc,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Kc(t,n)}else if(e instanceof Po?t.ha.Xe(e):e instanceof Fo?t.ha.ot(e):t.ha.nt(e),!n.isEqual(Dr.min()))try{const e=await nc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.ha.It(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._a.get(r);i&&t._a.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t._a.get(e);if(!r)return;t._a.set(e,r.withResumeToken(si.EMPTY_BYTE_STRING,r.snapshotVersion)),Fc(t,e);const i=new wa(r.target,e,n,r.sequenceNumber);Pc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Jn(kc,"Failed to raise snapshot:",e),await Kc(t,e)}}async function Kc(t,e,n){if(!Br(e))throw e;t.aa.add(1),await Oc(t),t.la.set("Offline"),n||(n=()=>nc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Jn(kc,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Rc(t)}))}function Hc(t,e){return e().catch((n=>Kc(t,n,e)))}async function Qc(t){const e=sr(t),n=su(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:zr;for(;Wc(e);)try{const t=await ic(e.localStore,r);if(null===t){0===e.oa.length&&n.v_();break}r=t.batchId,Yc(e,t)}catch(t){await Kc(e,t)}Xc(e)&&Jc(e)}function Wc(t){return jc(t)&&t.oa.length<10}function Yc(t,e){t.oa.push(e);const n=su(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Xc(t){return jc(t)&&!su(t).w_()&&t.oa.length>0}function Jc(t){su(t).start()}async function Zc(t){su(t).H_()}async function tu(t){const e=su(t);for(const n of t.oa)e.G_(n.mutations)}async function eu(t,e,n){const r=t.oa.shift(),i=_o.from(r,e,n);await Hc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Qc(t)}async function nu(t,e){e&&su(t).W_&&await async function(t,e){if(function(t){return function(t){switch(t){case or.OK:return nr(64938);case or.CANCELLED:case or.UNKNOWN:case or.DEADLINE_EXCEEDED:case or.RESOURCE_EXHAUSTED:case or.INTERNAL:case or.UNAVAILABLE:case or.UNAUTHENTICATED:return!1;case or.INVALID_ARGUMENT:case or.NOT_FOUND:case or.ALREADY_EXISTS:case or.PERMISSION_DENIED:case or.FAILED_PRECONDITION:case or.ABORTED:case or.OUT_OF_RANGE:case or.UNIMPLEMENTED:case or.DATA_LOSS:return!0;default:return nr(15467,{code:t})}}(t)&&t!==or.ABORTED}(e.code)){const n=t.oa.shift();su(t).D_(),await Hc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Qc(t)}}(t,e),Xc(t)&&Jc(t)}async function ru(t,e){const n=sr(t);n.asyncQueue.verifyOperationInProgress(),Jn(kc,"RemoteStore received new credentials");const r=jc(n);n.aa.add(3),await Oc(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Rc(n)}function iu(t){return t.Pa||(t.Pa=function(t,e,n){const r=sr(t);return r.Y_(),new Sc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
             */}(t.datastore,t.asyncQueue,{jo:Bc.bind(null,t),Jo:$c.bind(null,t),Zo:zc.bind(null,t),Q_:Gc.bind(null,t)}),t.ua.push((async e=>{e?(t.Pa.D_(),Uc(t)?Vc(t):t.la.set("Unknown")):(await t.Pa.stop(),qc(t))}))),t.Pa}function su(t){return t.Ta||(t.Ta=function(t,e,n){const r=sr(t);return r.Y_(),new Cc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:Zc.bind(null,t),Zo:nu.bind(null,t),z_:tu.bind(null,t),j_:eu.bind(null,t)}),t.ua.push((async e=>{e?(t.Ta.D_(),await Qc(t)):(await t.Ta.stop(),t.oa.length>0&&(Jn(kc,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))}))),t.Ta
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
             */}class ou{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ou(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ar(or.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Br(t))return new ar(or.UNAVAILABLE,`${e}: ${t}`);throw t}
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
             */class cu{static emptySet(t){return new cu(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Lr.comparator(e.key,n.key):(t,e)=>Lr.comparator(t.key,e.key),this.keyedMap=Ls(),this.sortedSet=new Jr(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new cu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
             */class uu{constructor(){this.Ia=new Jr(Lr.comparator)}track(t){const e=t.doc.key,n=this.Ia.get(e);n?0!==t.type&&3===n.type?this.Ia=this.Ia.insert(e,t):3===t.type&&1!==n.type?this.Ia=this.Ia.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Ia=this.Ia.remove(e):1===t.type&&2===n.type?this.Ia=this.Ia.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):nr(63341,{Vt:t,Ea:n}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal(((e,n)=>{t.push(n)})),t}}class lu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new lu(t,e,cu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
             */class hu{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some((t=>t.ma()))}}class du{constructor(){this.queries=fu(),this.onlineState="Unknown",this.fa=new Set}terminate(){!function(t,e){const n=sr(t),r=n.queries;n.queries=fu(),r.forEach(((t,n)=>{for(const r of n.Ra)r.onError(e)}))}(this,new ar(or.ABORTED,"Firestore shutting down"))}}function fu(){return new ks((t=>Ss(t)),Is)}async function pu(t,e){const n=sr(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Va()&&e.ma()&&(r=2):(s=new hu,r=e.ma()?0:1);try{switch(r){case 0:s.Aa=await n.onListen(i,!0);break;case 1:s.Aa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=au(t,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Ra.push(e),e.ga(n.onlineState),s.Aa&&e.pa(s.Aa)&&vu(n)}async function gu(t,e){const n=sr(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.Ra.indexOf(e);t>=0&&(s.Ra.splice(t,1),0===s.Ra.length?i=e.ma()?0:1:!s.Va()&&e.ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mu(t,e){const n=sr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Ra)t.pa(i)&&(r=!0);e.Aa=i}}r&&vu(n)}function yu(t,e,n){const r=sr(t),i=r.queries.get(e);if(i)for(const s of i.Ra)s.onError(n);r.queries.delete(e)}function vu(t){t.fa.forEach((t=>{t.next()}))}var wu,bu;(bu=wu||(wu={})).ya="default",bu.Cache="cache";class Eu{constructor(t,e,n){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache)return!0;if(!this.ma())return!0;const n="Offline"!==e;return(!this.options.Fa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Ca(t){t=lu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==wu.Cache}}
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
             */class Tu{constructor(t){this.key=t}}class _u{constructor(t){this.key=t}}class Iu{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=qs(),this.mutatedKeys=qs(),this.Ua=Ds(t),this.Ka=new cu(this.Ua)}get Wa(){return this.qa}Ga(t,e){const n=e?e.za:new uu,r=e?e.Ka:this.Ka;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=As(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ja(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ua(l,a)>0||c&&this.Ua(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ka:s,za:n,ys:o,mutatedKeys:i}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const s=t.za.da();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nr(20277,{Vt:t})}};return n(t)-n(e)}
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
             */(t.type,e.type)||this.Ua(t.doc,e.doc))),this.Ha(n),r=null!=r&&r;const o=e&&!r?this.Ja():[],a=0===this.$a.size&&this.current&&!r?1:0,c=a!==this.Qa;return this.Qa=a,0!==s.length||c?{snapshot:new lu(this.query,t.Ka,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:o}:{Ya:o}}ga(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new uu,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach((t=>this.qa=this.qa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qa=this.qa.delete(t))),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=qs(),this.Ka.forEach((t=>{this.Za(t.key)&&(this.$a=this.$a.add(t.key))}));const e=[];return t.forEach((t=>{this.$a.has(t)||e.push(new _u(t))})),this.$a.forEach((n=>{t.has(n)||e.push(new Tu(n))})),e}Xa(t){this.qa=t.Ns,this.$a=qs();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return lu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,0===this.Qa,this.hasCachedResults)}}const Su="SyncEngine";class Cu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Au{constructor(t){this.key=t,this.tu=!1}}class Du{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nu={},this.ru=new ks((t=>Ss(t)),Is),this.iu=new Map,this.su=new Set,this.ou=new Jr(Lr.comparator),this._u=new Map,this.au=new Ua,this.uu={},this.cu=new Map,this.lu=Aa.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return!0===this.hu}}async function Nu(t,e,n=!0){const r=Yu(t);let i;const s=r.ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.eu()):i=await xu(r,e,n,!0),i}async function ku(t,e){const n=Yu(t);await xu(n,e,!0,!1)}async function xu(t,e,n,r){const i=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ai.getTargetData(t,e).next((i=>i?(r=i,qr.resolve(r)):n.ai.allocateTargetId(t).next((i=>(r=new wa(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.ai.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ss.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(t.targetId,t),n.Ds.set(e,t.targetId)),t}))}(t.localStore,Es(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(t,e,n,r,i){t.Pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ga(n);i.ys&&(i=await oc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ga(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return zu(t,e.targetId,a.Ya),a.snapshot}(t,e,n,r);const s=await oc(t.localStore,e,!0),o=new Iu(e,s.Ns),a=o.Ga(s.documents),c=Mo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);zu(t,n,u.Ya);const l=new Cu(e,n,o);return t.ru.set(e,l),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&Lc(t.remoteStore,i),a}async function Ru(t,e,n){const r=sr(t),i=r.ru.get(e),s=r.iu.get(i.targetId);if(s.length>1)return r.iu.set(i.targetId,s.filter((t=>!Is(t,e)))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mc(r.remoteStore,i.targetId),Bu(r,i.targetId)})).catch(jr)):(Bu(r,i.targetId),await sc(r.localStore,i.targetId,!0))}async function Ou(t,e){const n=sr(t),r=n.ru.get(e),i=n.iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mc(n.remoteStore,r.targetId))}async function Lu(t,e,n){const r=function(t){const e=sr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uu.bind(null,e),e}(t);try{const t=await function(t,e){const n=sr(t),r=Ar.now(),i=e.reduce(((t,e)=>t.add(e.key)),qs());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Rs(),c=qs();return n.Cs.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=fo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new mo(t.key,e,Bi(e.value.mapValue),oo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ms(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.uu[t.currentUser.toKey()];r||(r=new Jr(br)),r=r.insert(e,n),t.uu[t.currentUser.toKey()]=r}(r,t.batchId,n),await Hu(r,t.changes),await Qc(r.remoteStore)}catch(t){const e=au(t,"Failed to persist write");n.reject(e)}}async function Mu(t,e){const n=sr(t);try{const t=await rc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n._u.get(e);r&&(ir(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.tu=!0:t.modifiedDocuments.size>0?ir(r.tu,14607):t.removedDocuments.size>0&&(ir(r.tu,42227),r.tu=!1))})),await Hu(n,t,e)}catch(t){await jr(t)}}function Pu(t,e,n){const r=sr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ru.forEach(((n,r)=>{const i=r.view.ga(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=sr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.Ra)i.ga(e)&&(r=!0)})),r&&vu(n)}(r.eventManager,e),t.length&&r.nu.Q_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fu(t,e,n){const r=sr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r._u.get(e),s=i&&i.key;if(s){let t=new Jr(Lr.comparator);t=t.insert(s,$i.newNoDocument(s,Dr.min()));const n=qs().add(s),i=new Lo(Dr.min(),new Map,new Jr(br),t,n);await Mu(r,i),r.ou=r.ou.remove(s),r._u.delete(e),Ku(r)}else await sc(r.localStore,e,!1).then((()=>Bu(r,e,n))).catch(jr)}async function Vu(t,e){const n=sr(t),r=e.batch.batchId;try{const t=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=qr.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ir(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=qs();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);qu(n,r,null),ju(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hu(n,t)}catch(t){await jr(t)}}async function Uu(t,e,n){const r=sr(t);try{const t=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ir(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);qu(r,e,n),ju(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hu(r,t)}catch(n){await jr(n)}}function ju(t,e){(t.cu.get(e)||[]).forEach((t=>{t.resolve()})),t.cu.delete(e)}function qu(t,e,n){const r=sr(t);let i=r.uu[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.uu[r.currentUser.toKey()]=i}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach((e=>{t.au.containsKey(e)||$u(t,e)}))}function $u(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);null!==n&&(Mc(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Ku(t))}function zu(t,e,n){for(const r of n)r instanceof Tu?(t.au.addReference(r.key,e),Gu(t,r)):r instanceof _u?(Jn(Su,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||$u(t,r.key)):nr(19791,{Iu:r})}function Gu(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(Jn(Su,"New document in limbo: "+n),t.su.add(r),Ku(t))}function Ku(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new Lr(xr.fromString(e)),r=t.lu.next();t._u.set(r,new Au(n)),t.ou=t.ou.insert(n,r),Lc(t.remoteStore,new wa(Es(ys(n.path)),r,"TargetPurposeLimboResolution",$r.le))}}async function Hu(t,e,n){const r=sr(t),i=[],s=[],o=[];r.ru.isEmpty()||(r.ru.forEach(((t,a)=>{o.push(r.Pu(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=Wa.Ps(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.nu.Q_(i),await async function(t,e){const n=sr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>qr.forEach(e,(e=>qr.forEach(e.ls,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>qr.forEach(e.hs,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Br(t))throw t;Jn(Ja,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ss.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ss=n.Ss.insert(t,i)}}}(r.localStore,s))}async function Qu(t,e){const n=sr(t);if(!n.currentUser.isEqual(e)){Jn(Su,"User change. New user:",e.toKey());const t=await ec(n.localStore,e);n.currentUser=e,function(t,e){t.cu.forEach((t=>{t.forEach((t=>{t.reject(new ar(or.CANCELLED,e))}))})),t.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Hu(n,t.Ms)}}function Wu(t,e){const n=sr(t),r=n._u.get(e);if(r&&r.tu)return qs().add(r.key);{let t=qs();const r=n.iu.get(e);if(!r)return t;for(const e of r){const r=n.ru.get(e);t=t.unionWith(r.view.Wa)}return t}}function Yu(t){const e=sr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fu.bind(null,e),e.nu.Q_=mu.bind(null,e.eventManager),e.nu.Tu=yu.bind(null,e.eventManager),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ec(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return function(t,e,n,r){return new tc(t,e,n,r)}(this.persistence,new Xa,t.initialUser,this.serializer)}Ru(t){return new Ga(Ha.Ei,this.serializer)}Au(t){return new cc}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class Ju extends Xu{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){ir(this.persistence.referenceDelegate instanceof Qa,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new xa(n,t.asyncQueue,e)}Ru(t){const e=void 0!==this.cacheSizeBytes?Ca.withCacheSize(this.cacheSizeBytes):Ca.DEFAULT;return new Ga((t=>Qa.Ei(t,e)),this.serializer)}}class Zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qu.bind(null,this.syncEngine),await async function(t,e){const n=sr(t);e?(n.aa.delete(2),await Rc(n)):e||(n.aa.add(2),await Oc(n),n.la.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new du}createDatastore(t){const e=Ec(t.databaseInfo.databaseId),n=function(t){return new wc(t)}(t.databaseInfo);return function(t,e,n,r){return new Dc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new xc(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Pu(this.syncEngine,t,0)),hc.C()?new hc:new uc)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Du(t,e,n,r,i,s);return o&&(a.hu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=sr(t);Jn(kc,"RemoteStore shutting down."),e.aa.add(5),await Oc(e),e.ca.shutdown(),e.la.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Zu.provider={build:()=>new Zu};
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
class tl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Zn("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
             */const el="FirestoreClient";class nl{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qn.UNAUTHENTICATED,this.clientId=wr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{Jn(el,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Jn(el,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=au(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),Jn(el,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ec(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Jn(el,"Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(t){return"FirebaseError"===t.name?t.code===or.FAILED_PRECONDITION||t.code===or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(r))throw r;tr("Error using user provided cache. Falling back to memory cache: "+r),await rl(t,new Xu)}}else Jn(el,"Using default OfflineComponentProvider"),await rl(t,new Ju(void 0));return t._offlineComponents}(t);Jn(el,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ru(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ru(e.remoteStore,n))),t._onlineComponents=e}async function sl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Jn(el,"Using user provided OnlineComponentProvider"),await il(t,t._uninitializedComponentsProvider._online)):(Jn(el,"Using default OnlineComponentProvider"),await il(t,new Zu))),t._onlineComponents}async function ol(t){const e=await sl(t),n=e.eventManager;return n.onListen=Nu.bind(null,e.syncEngine),n.onUnlisten=Ru.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ku.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ou.bind(null,e.syncEngine),n}function al(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
             */function ul(t,e,n){if(!n)throw new ar(or.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ll(t){if(!Lr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hl(t){if(Lr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":nr(12329,{type:typeof t})}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ar(or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new ar(or.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
             */const pl="firestore.googleapis.com",gl=!0;class ml{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ar(or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pl,this.ssl=gl}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:gl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Sa;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ar(or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ar(or.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=al(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
             */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ar(or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ar(or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new lr;switch(t.type){case"firstParty":return new pr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ar(or.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cl.get(t);e&&(Jn("ComponentProvider","Removing Datastore"),cl.delete(t),e.terminate())}(this),Promise.resolve()}}function vl(t,e,n,r={}){var i;const s=(t=fl(t,yl))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==pl&&s.host!==a&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!B(c,o)&&(t._setSettings(c),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qn.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[N(JSON.stringify({alg:"none",type:"JWT"})),N(JSON.stringify(s)),""].join(".")}
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
             */(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ar(or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qn(s)}t._authCredentials=new hr(new ur(e,n))}}
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
             */class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class bl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new El(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bl(this.firestore,t,this._key)}}class El extends wl{constructor(t,e,n){super(t,e,ys(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bl(this.firestore,null,new Lr(t))}withConverter(t){return new El(this.firestore,t,this._path)}}const Tl="AsyncQueue";class _l{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Tc(this,"async_queue_retry"),this.ju=()=>{const t=bc();t&&Jn(Tl,"Visibility state changed to "+t.visibilityState),this.y_.A_()},this.Hu=t;const e=bc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=bc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise((()=>{}));const e=new cr;return this.Yu((()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qu.push(t),this.Zu())))}async Zu(){if(0!==this.Qu.length){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Br(t))throw t;Jn(Tl,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_((()=>this.Zu()))}}Yu(t){const e=this.Hu.then((()=>(this.Wu=!0,t().catch((t=>{throw this.Ku=t,this.Wu=!1,Zn("INTERNAL UNHANDLED ERROR: ",Il(t)),t})).then((t=>(this.Wu=!1,t))))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const r=ou.createAndSchedule(this,t,e,n,(t=>this.Xu(t)));return this.Uu.push(r),r}Ju(){this.Ku&&nr(47125,{ec:Il(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do{t=this.Hu,await t}while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then((()=>{this.Uu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.tc()}))}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function Il(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class Sl extends yl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new _l,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _l(t),this._firestoreClient=void 0,await t}}}function Cl(t){if(t._terminated)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new yi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,al(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new nl(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
             */(t),t._firestoreClient}class Al{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Al(si.fromBase64String(t))}catch(t){throw new ar(or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Al(si.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
             */class Dl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ar(or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Or(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
             */class Nl{constructor(t){this._methodName=t}}
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
             */class xl{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
             */const Rl=/^__.*__$/;class Ol{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new go(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new mo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ml(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nr(40011,{oc:t})}}class Pl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this._c(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new Pl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r.lc(t),r}hc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r._c(),r}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Yl(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(0===t.length)throw this.Tc("Document fields must not be empty");if(Ml(this.oc)&&Rl.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class Fl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ec(t)}dc(t,e,n,r=!1){return new Pl({oc:t,methodName:e,Ec:n,path:Or.emptyPath(),cc:!1,Ic:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vl(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new Fl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ul(t,e,n,r,i,s={}){const o=t.dc(s.merge||s.mergeFields?2:0,e,n,i);Kl("Data must be an object, but it was:",o,r);const a=zl(r,o);let c,u;if(s.merge)c=new ri(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Hl(e,r,n);if(!o.contains(i))throw new ar(or.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Xl(t,i)||t.push(i)}c=new ri(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ol(new qi(a),c,u)}class jl extends Nl{_toFieldTransform(t){if(2!==t.oc)throw 1===t.oc?t.Tc(`${this._methodName}() can only appear at the top level of your update data`):t.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jl}}class ql extends Nl{constructor(t,e){super(t),this.Ac=e}_toFieldTransform(t){const e=function(t,e,n){return new Pl({oc:3,Ec:e.settings.Ec,methodName:t._methodName,cc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}(this,t,!0),n=this.Ac.map((t=>$l(t,e))),r=new Xs(n);return new io(t.path,r)}isEqual(t){return t instanceof ql&&B(this.Ac,t.Ac)}}function Bl(t,e,n,r=!1){return $l(n,t.dc(r?4:3,e))}function $l(t,e){if(Gl(t=G(t)))return Kl("Unsupported field value:",e,t),zl(t,e);if(t instanceof Nl)return function(t,e){if(!Ml(e.oc))throw e.Tc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Tc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&4!==e.oc)throw e.Tc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=$l(i,e.Pc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=G(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Gs(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ar.fromDate(t);return{timestampValue:Qo(e.serializer,n)}}if(t instanceof Ar){const n=new Ar(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Qo(e.serializer,n)}}if(t instanceof kl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Al)return{bytesValue:Wo(e.serializer,t._byteString)};if(t instanceof bl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Tc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jo(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof xl)return function(t,e){return{mapValue:{fields:{[bi]:{stringValue:_i},[Ii]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Tc("VectorValues must only contain numeric values.");return $s(e.serializer,t)}))}}}}}}(t,e);throw e.Tc(`Unsupported field value: ${dl(t)}`)}(t,e)}function zl(t,e){const n={};return Xr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,((t,r)=>{const i=$l(r,e.uc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Gl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ar||t instanceof kl||t instanceof Al||t instanceof bl||t instanceof Nl||t instanceof xl)}function Kl(t,e,n){if(!Gl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=dl(n);throw"an object"===r?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Hl(t,e,n){if((e=G(e))instanceof Dl)return e._internalPath;if("string"==typeof e)return Wl(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ql=new RegExp("[~\\*/\\[\\]]");function Wl(t,e,n){if(e.search(Ql)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch(r){throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ar(or.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some((t=>t.isEqual(e)))}
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
             */class Jl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(th("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zl extends Jl{data(){return super.data()}}function th(t,e){return"string"==typeof e?Wl(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}class eh{}class nh extends eh{}class rh extends nh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new rh(t,e,n)}_apply(t){const e=this._parse(t);return lh(t._query,e),new wl(t.firestore,t.converter,Ts(t._query,e))}_parse(t){const e=Vl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uh(o,s);const e=[];for(const n of o)e.push(ch(r,t,n));a={arrayValue:{values:e}}}else a=ch(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uh(o,s),a=Bl(n,e,o,"in"===s||"not-in"===s);return Yi.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class ih extends eh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ih(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Xi.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)lh(n,i),n=Ts(n,i)}(t._query,e),new wl(t.firestore,t.converter,Ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class sh extends nh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new sh(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ar(or.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ar(or.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(e,n)}(t._query,this._field,this._direction);return new wl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class oh extends nh{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new oh(t,e,n)}_apply(t){return new wl(t.firestore,t.converter,_s(t._query,this._limit,this._limitType))}}class ah extends nh{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ah(t,e,n)}_apply(t){const e=function(t,e,n,r){if(n[0]=G(n[0]),n[0]instanceof Jl)return function(t,e,n,r,i){if(!r)throw new ar(or.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of bs(t))if(o.field.isKeyField())s.push(Li(e,r.key));else{const t=r.data.field(o.field);if(pi(t))throw new ar(or.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new ar(or.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new zi(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Vl(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new ar(or.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ar(or.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!ws(t)&&-1!==s.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(xr.fromString(s));if(!Lr.isDocumentKey(n))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Lr(n);a.push(Li(e,i))}else{const t=Bl(n,r,s);a.push(t)}}return new zi(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}(t,this.type,this._docOrFields,this._inclusive);return new wl(t.firestore,t.converter,function(t,e){return new ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function ch(t,e,n){if("string"==typeof(n=G(n))){if(""===n)throw new ar(or.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ws(e)&&-1!==n.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xr.fromString(n));if(!Lr.isDocumentKey(r))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Li(t,new Lr(r))}if(n instanceof bl)return Li(t,n._key);throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dl(n)}.`)}function uh(t,e){if(!Array.isArray(t)||0===t.length)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lh(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hh{convertValue(t,e="none"){switch(Si(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ci(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw nr(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Yr(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[Ii].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>ci(t.doubleValue)));return new xl(i)}convertGeoPoint(t){return new kl(ci(t.latitude),ci(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mi(t));default:return null}}convertTimestamp(t){const e=ai(t);return new Ar(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=xr.fromString(t);ir(va(n),9688,{name:t});const r=new wi(n.get(1),n.get(3)),i=new Lr(n.popFirst(5));return r.isEqual(e)||Zn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}class dh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fh extends Jl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ph(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(th("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ph extends fh{data(t={}){return super.data(t)}}class gh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new dh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ph(this._firestore,this._userDataWriter,n.key,n,new dh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ar(or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new ph(t._firestore,t._userDataWriter,n.doc.key,n.doc,new dh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new ph(t._firestore,t._userDataWriter,e.doc.key,e.doc,new dh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:mh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nr(61501,{type:t})}}class yh extends hh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Al(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bl(this.firestore,null,e)}}function vh(t,e){return function(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget((async()=>Lu(await function(t){return sl(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Cl(t),e)}!function(t,e=!0){!function(t){Wn=t}("11.6.1"),ne(new K("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Sl(new dr(t.getProvider("auth-internal")),new mr(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ar(or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ce(Kn,Hn,t),ce(Kn,Hn,"esm2017")}(),function(t=ae()){const e=re(t=G(t),an);e.isInitialized()?e.getImmediate():function(t,e={}){const n=re(t,an);if(n.isInitialized()){const t=n.getImmediate();if(B(e,n.getOptions()))return t;throw ln.create("already-initialized")}n.initialize({options:e})}(t)}(oe({apiKey:"AIzaSyDz2t5TXGudA9sqRs9zlTYTwcutS9Liqbk",authDomain:"amdomain-5bf9b.firebaseapp.com",projectId:"amdomain-5bf9b",storageBucket:"amdomain-5bf9b.firebasestorage.app",messagingSenderId:"456731909675",appId:"1:456731909675:web:e7005450bfe810fd49d46e",measurementId:"G-7QXZH37VCE"})),t("D",function(){const t=ae(),e=vi,n=re(t,"firestore").getImmediate({identifier:e});if(!n._initialized){const t=O("firestore");t&&vl(n,...t)}return n}());const wh=t("_",((t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n})),bh={class:"relative w-full before:bg-stone-100 before:-z-100 before:absolute before:top-0 before:left-0 before:content-[''] before:h-full before:w-full xl:px-10 md:px-7 max-md:px-3"},Eh=t("b",wh({},[["render",function(t,e){return i(),n("div",bh,[r(t.$slots,"default")])}]])),Th=["innerHTML"],_h=(t("c",s({__name:"TransformTexts",props:{text:{}},setup(t){const e=[19968,40959],r=[12352,12447],s=[0,127],d=[48,57],f=[32,47],p=t=>{const n=t.split(""),i=n.map((t=>(t=>{switch(!0){case t>=e[0]&&t<=e[1]:return String.fromCharCode(~~(Math.random()*(e[1]-e[0]+1))+e[0]);case t>=s[0]&&t<=s[1]:return String.fromCharCode(~~(Math.random()*(s[1]-s[0]+1))+s[0]);case t>=r[0]&&t<=r[1]:return String.fromCharCode(~~(Math.random()*(r[1]-r[0]+1))+r[0]);case t>=d[0]&&t<=d[1]:return String.fromCharCode(~~(Math.random()*(d[1]-d[0]+1))+d[0]);case t>=f[0]&&t<=f[1]:return String.fromCharCode(~~(Math.random()*(f[1]-f[0]+1))+f[0]);default:return String.fromCharCode(~~(65535*Math.random()))}})(t.codePointAt(0)||~~(65535*Math.random()))));return{originTexts:n,unicodeTexts:i}},g=o([]),m=o([]);let y=[];const v=async t=>{const e=t.split(" ").filter((t=>""!==t));g.value=[];for(let n of e)g.value.push(p(n));m.value=g.value.map((t=>new Array(t.originTexts.length).fill("")));for(let n=0;n<m.value.length;n++){const t=g.value[n],e=m.value[n];(async()=>{for(let r=0;r<g.value[n].originTexts.length;r++){let n=setTimeout((()=>{e[r]=t.unicodeTexts[r]}),30*r);y.push(n);let i=setTimeout((()=>{e[r]=t.originTexts[r]}),30*r+130);y.push(i)}})()}},w=a((()=>m.value.map((t=>`${t.join("")}`)))),b=t;return v(b.text),c((()=>b.text),((t,e)=>{y.forEach((t=>clearTimeout(t))),y=[],g.value=[],m.value=[],v(t)})),(t,e)=>(i(!0),n(u,null,l(h(w),(t=>(i(),n("p",{class:"break-all",innerHTML:t},null,8,Th)))),256))}})),{class:"flex items-center w-full h-full xl:gap-7 md:gap-6 max-md:gap-4"}),Ih={class:"flex h-full items-center xl:w-20 xl:p-5 md:w-20 md:p-4 \x3c!-- 統一使用Tailwind內建尺寸 --\x3e max-md:w-15 max-md:p-3"},Sh={class:"cursor-pointer"},Ch={class:"flex h-full items-center max-md:text-sm"},Ah={class:"flex h-full items-center max-md:text-sm"},Dh={class:"flex h-full items-center max-md:text-sm"},Nh={key:1,class:"select-none flex items-center font-bold text-stone-500/50"};t("a",s({__name:"NavigationTempl",setup(t){const e=d();e.name=localStorage.getItem("user")??"";const r=p(),s=E(),c=f();a((()=>r.path.split("/")[1]||"index"));const u=o(),l=t=>{s.push(t)},C=g(b);return m((()=>{y((()=>{const t=C.value.pageTwoSideGapY-c.y.value;u.value.style.marginTop=`${t>0?t:0}px`}))})),(t,r)=>{const s=T("router-link"),o=Eh;return i(),n("div",{ref_key:"navigationBar",ref:u,class:"fixed flex top-0 z-[100] bg-stone-100 border-b border-stone-400 xl:w-[calc(100%-2.5rem)] xl:h-25 xl:mt-5 md:w-[calc(100%-2rem)] md:h-20 md:mt-4 max-md:w-full max-md:h-15 max-md:mt-0"},[v(o,{as:"nav"},{default:w((()=>[_("ul",_h,[_("li",Ih,[_("div",Sh,[v(s,{to:"/"},{default:w((()=>r[2]||(r[2]=[_("img",{class:"w-full h-full",src:"/amDomain/logo.svg",alt:"同領地"},null,-1)]))),_:1})])]),_("li",Ch,[v(s,{to:"/topics"},{default:w((()=>r[3]||(r[3]=[I(" 討論區 ")]))),_:1})]),_("li",Ah,[_("div",{class:"cursor-pointer flex items-center",onClick:r[0]||(r[0]=t=>l("/posts"))}," 發文 ")]),_("li",Dh,[""===h(e).name?(i(),n("div",{key:0,class:"cursor-pointer flex items-center",onClick:r[1]||(r[1]=t=>l("/logins"))}," +登入+ ")):(i(),n("div",Nh," 哈瞜 "+S(h(e).name),1))])])])),_:1})],512)}}}))}}}));
