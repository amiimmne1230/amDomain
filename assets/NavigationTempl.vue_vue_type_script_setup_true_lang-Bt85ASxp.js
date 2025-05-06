import{a as Oe,a1 as _h,b as Me,d as Eu,r as Us,c as vu,D as yh,F as Th,C as Eh,u as Bs,h as vh,Y as Ih,J as wh,X as Ah,o as Rh,p as Sh,f as Ss,A as bs,Z as bh,K as Ch,j as Ph,e as Xt,S as Vh,t as Dh}from"./index-CsFuihEx.js";const Nh=(n,t)=>{const e=n.__vccOpts||n;for(const[r,s]of t)e[r]=s;return e};/**
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
 */const kh=()=>{};var ea={};/**
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
 */const Iu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},xh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,S=d&63;h||(S=64,a||(w=64)),r.push(e[m],e[y],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Iu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):xh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||y==null)throw new Oh;const w=o<<2|c>>4;if(r.push(w),d!==64){const S=c<<4&240|d>>2;if(r.push(S),y!==64){const D=d<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mh=function(n){const t=Iu(n);return wu.encodeByteArray(t,!0)},pr=function(n){return Mh(n).replace(/\./g,"")},Lh=function(n){try{return wu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uh=()=>Fh().__FIREBASE_DEFAULTS__,Bh=()=>{if(typeof process>"u"||typeof ea>"u")return;const n=ea.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=n&&Lh(n[1]);return t&&JSON.parse(t)},li=()=>{try{return kh()||Uh()||Bh()||qh()}catch(n){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(n));return}},$h=n=>{var t,e;return(e=(t=li())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},jh=n=>{const t=$h(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Au=()=>{var n;return(n=li())===null||n===void 0?void 0:n.config};/**
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
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Gh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pr(JSON.stringify(e)),pr(JSON.stringify(a)),""].join(".")}/**
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
 */function Kh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){var n;const t=(n=li())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(e){return!1}}function Wh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qh(){return!Hh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ru(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Su(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Yh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xh="FirebaseError";class le extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s="".concat(this.service,"/").concat(t),o=this.errors[t],a=o?Jh(o,r):"Error",c="".concat(this.serviceName,": ").concat(a," (").concat(s,").");return new le(s,c,r)}}function Jh(n,t){return n.replace(Zh,(e,r)=>{const s=t[r];return s!=null?String(s):"<".concat(r,"?>")})}const Zh=/\{\$([^}]+)}/g;function Ue(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(na(o)&&na(a)){if(!Ue(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function na(n){return n!==null&&typeof n=="object"}/**
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
 */const td=1e3,ed=2,nd=4*60*60*1e3,rd=.5;function ra(n,t=td,e=ed){const r=t*Math.pow(e,n),s=Math.round(rd*r*(Math.random()-.5)*2);return Math.min(nd,r+s)}/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class qt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const _e="[DEFAULT]";/**
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
 */class sd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new zh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,!!this.shouldAutoInitialize()){if(od(t))try{this.getOrInitializeService({instanceIdentifier:_e})}catch(e){}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch(o){}}}}clearInstance(t=_e){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_e){return this.instances.has(t)}getOptions(t=_e){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch(o){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:id(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(s){}return r||null}normalizeInstanceIdentifier(t=_e){return this.component?this.component.multipleInstances?t:_e:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function id(n){return n===_e?void 0:n}function od(n){return n.instantiationMode==="EAGER"}/**
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
 */class ad{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new sd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const ud={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},cd=$.INFO,ld={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},hd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ld[t];if(s)console[s]("[".concat(r,"]  ").concat(n.name,":"),...e);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class hi{constructor(t){this.name=t,this._logLevel=cd,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError('Invalid value "'.concat(t,'" assigned to `logLevel`'));this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ud[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const dd=(n,t)=>t.some(e=>n instanceof e);let sa,ia;function fd(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function md(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bu=new WeakMap,qs=new WeakMap,Cu=new WeakMap,Cs=new WeakMap,di=new WeakMap;function pd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&bu.set(e,n)}).catch(()=>{}),di.set(t,n),t}function gd(n){if(qs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});qs.set(n,t)}let $s={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Cu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function _d(n){$s=n($s)}function yd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ps(this),t,...e);return Cu.set(r,t.sort?t.sort():[t]),Zt(r)}:md().includes(n)?function(...t){return n.apply(Ps(this),t),Zt(bu.get(this))}:function(...t){return Zt(n.apply(Ps(this),t))}}function Td(n){return typeof n=="function"?yd(n):(n instanceof IDBTransaction&&gd(n),dd(n,fd())?new Proxy(n,$s):n)}function Zt(n){if(n instanceof IDBRequest)return pd(n);if(Cs.has(n))return Cs.get(n);const t=Td(n);return t!==n&&(Cs.set(n,t),di.set(t,n)),t}const Ps=n=>di.get(n);function Pu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Zt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Zt(a.result),h.oldVersion,h.newVersion,Zt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ed=["get","getKey","getAll","getAllKeys","count"],vd=["put","add","delete","clear"],Vs=new Map;function oa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=vd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ed.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Vs.set(t,o),o}_d(n=>({...n,get:(t,e,r)=>oa(t,e)||n.get(t,e,r),has:(t,e)=>!!oa(t,e)||n.has(t,e)}));/**
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
 */class Id{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(wd(e)){const r=e.getImmediate();return"".concat(r.library,"/").concat(r.version)}else return null}).filter(e=>e).join(" ")}}function wd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const js="@firebase/app",aa="0.11.5";/**
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
 */const $t=new hi("@firebase/app"),Ad="@firebase/app-compat",Rd="@firebase/analytics-compat",Sd="@firebase/analytics",bd="@firebase/app-check-compat",Cd="@firebase/app-check",Pd="@firebase/auth",Vd="@firebase/auth-compat",Dd="@firebase/database",Nd="@firebase/data-connect",kd="@firebase/database-compat",xd="@firebase/functions",Od="@firebase/functions-compat",Md="@firebase/installations",Ld="@firebase/installations-compat",Fd="@firebase/messaging",Ud="@firebase/messaging-compat",Bd="@firebase/performance",qd="@firebase/performance-compat",$d="@firebase/remote-config",jd="@firebase/remote-config-compat",zd="@firebase/storage",Gd="@firebase/storage-compat",Kd="@firebase/firestore",Hd="@firebase/vertexai",Wd="@firebase/firestore-compat",Qd="firebase",Yd="11.6.1";/**
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
 */const zs="[DEFAULT]",Xd={[js]:"fire-core",[Ad]:"fire-core-compat",[Sd]:"fire-analytics",[Rd]:"fire-analytics-compat",[Cd]:"fire-app-check",[bd]:"fire-app-check-compat",[Pd]:"fire-auth",[Vd]:"fire-auth-compat",[Dd]:"fire-rtdb",[Nd]:"fire-data-connect",[kd]:"fire-rtdb-compat",[xd]:"fire-fn",[Od]:"fire-fn-compat",[Md]:"fire-iid",[Ld]:"fire-iid-compat",[Fd]:"fire-fcm",[Ud]:"fire-fcm-compat",[Bd]:"fire-perf",[qd]:"fire-perf-compat",[$d]:"fire-rc",[jd]:"fire-rc-compat",[zd]:"fire-gcs",[Gd]:"fire-gcs-compat",[Kd]:"fire-fst",[Wd]:"fire-fst-compat",[Hd]:"fire-vertex","fire-js":"fire-js",[Qd]:"fire-js-all"};/**
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
 */const gr=new Map,Jd=new Map,Gs=new Map;function ua(n,t){try{n.container.addComponent(t)}catch(e){$t.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(n.name),e)}}function re(n){const t=n.name;if(Gs.has(t))return $t.debug("There were multiple attempts to register component ".concat(t,".")),!1;Gs.set(t,n);for(const e of gr.values())ua(e,n);for(const e of Jd.values())ua(e,n);return!0}function kn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Zd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const tf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new Dr("app","Firebase",tf);/**
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
 */class ef{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
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
 */const nf=Yd;function Vu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw te.create("bad-app-name",{appName:String(s)});if(e||(e=Au()),!e)throw te.create("no-options");const o=gr.get(s);if(o){if(Ue(e,o.options)&&Ue(r,o.config))return o;throw te.create("duplicate-app",{appName:s})}const a=new ad(s);for(const h of Gs.values())a.addComponent(h);const c=new ef(e,r,a);return gr.set(s,c),c}function Du(n=zs){const t=gr.get(n);if(!t&&n===zs&&Au())return Vu();if(!t)throw te.create("no-app",{appName:n});return t}function Dt(n,t,e){var r;let s=(r=Xd[n])!==null&&r!==void 0?r:n;e&&(s+="-".concat(e));const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=['Unable to register library "'.concat(s,'" with version "').concat(t,'":')];o&&c.push('library name "'.concat(s,'" contains illegal characters (whitespace or "/")')),o&&a&&c.push("and"),a&&c.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),$t.warn(c.join(" "));return}re(new qt("".concat(s,"-version"),()=>({library:s,version:t}),"VERSION"))}/**
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
 */const rf="firebase-heartbeat-database",sf=1,Sn="firebase-heartbeat-store";let Ds=null;function Nu(){return Ds||(Ds=Pu(rf,sf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),Ds}async function of(n){try{const e=(await Nu()).transaction(Sn),r=await e.objectStore(Sn).get(ku(n));return await e.done,r}catch(t){if(t instanceof le)$t.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function ca(n,t){try{const r=(await Nu()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(t,ku(n)),await r.done}catch(e){if(e instanceof le)$t.warn(e.message);else{const r=te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function ku(n){return"".concat(n.name,"!").concat(n.options.appId)}/**
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
 */const af=1024,uf=30;class cf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=la();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>uf){const a=df(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=la(),{heartbeatsToSend:r,unsentEntries:s}=lf(this._heartbeatsCache.heartbeats),o=pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function la(){return new Date().toISOString().substring(0,10)}function lf(n,t=af){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ha(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ha(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class hf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ru()?Su().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await of(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ha(n){return pr(JSON.stringify({version:2,heartbeats:n})).length}function df(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function ff(n){re(new qt("platform-logger",t=>new Id(t),"PRIVATE")),re(new qt("heartbeat",t=>new cf(t),"PRIVATE")),Dt(js,aa,n),Dt(js,aa,"esm2017"),Dt("fire-js","")}ff("");var mf="firebase",pf="11.6.1";/**
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
 */Dt(mf,pf,"app");const xu="@firebase/installations",fi="0.6.13";/**
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
 */const Ou=1e4,Mu="w:".concat(fi),Lu="FIS_v2",gf="https://firebaseinstallations.googleapis.com/v1",_f=60*60*1e3,yf="installations",Tf="Installations";/**
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
 */const Ef={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new Dr(yf,Tf,Ef);function Fu(n){return n instanceof le&&n.code.includes("request-failed")}/**
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
 */function Uu({projectId:n}){return"".concat(gf,"/projects/").concat(n,"/installations")}function Bu(n){return{token:n.token,requestStatus:2,expiresIn:If(n.expiresIn),creationTime:Date.now()}}async function qu(n,t){const r=(await t.json()).error;return Ee.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $u({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function vf(n,{refreshToken:t}){const e=$u(n);return e.append("Authorization",wf(t)),e}async function ju(n){const t=await n();return t.status>=500&&t.status<600?n():t}function If(n){return Number(n.replace("s","000"))}function wf(n){return"".concat(Lu," ").concat(n)}/**
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
 */async function Af({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Uu(n),s=$u(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Lu,appId:n.appId,sdkVersion:Mu},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ju(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Bu(d.authToken)}}else throw await qu("Create Installation",h)}/**
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
 */function zu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Rf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Sf=/^[cdef][\w-]{21}$/,Ks="";function bf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Cf(n);return Sf.test(e)?e:Ks}catch(n){return Ks}}function Cf(n){return Rf(n).substr(0,22)}/**
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
 */function Nr(n){return"".concat(n.appName,"!").concat(n.appId)}/**
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
 */const Gu=new Map;function Ku(n,t){const e=Nr(n);Hu(e,t),Pf(e,t)}function Hu(n,t){const e=Gu.get(n);if(e)for(const r of e)r(t)}function Pf(n,t){const e=Vf();e&&e.postMessage({key:n,fid:t}),Df()}let ye=null;function Vf(){return!ye&&"BroadcastChannel"in self&&(ye=new BroadcastChannel("[Firebase] FID Change"),ye.onmessage=n=>{Hu(n.data.key,n.data.fid)}),ye}function Df(){Gu.size===0&&ye&&(ye.close(),ye=null)}/**
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
 */const Nf="firebase-installations-database",kf=1,ve="firebase-installations-store";let Ns=null;function mi(){return Ns||(Ns=Pu(Nf,kf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ve)}}})),Ns}async function _r(n,t){const e=Nr(n),s=(await mi()).transaction(ve,"readwrite"),o=s.objectStore(ve),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Ku(n,t.fid),t}async function Wu(n){const t=Nr(n),r=(await mi()).transaction(ve,"readwrite");await r.objectStore(ve).delete(t),await r.done}async function kr(n,t){const e=Nr(n),s=(await mi()).transaction(ve,"readwrite"),o=s.objectStore(ve),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&Ku(n,c.fid),c}/**
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
 */async function pi(n){let t;const e=await kr(n.appConfig,r=>{const s=xf(r),o=Of(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ks?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function xf(n){const t=n||{fid:bf(),registrationStatus:0};return Qu(t)}function Of(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ee.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Mf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Lf(n)}:{installationEntry:t}}async function Mf(n,t){try{const e=await Af(n,t);return _r(n.appConfig,e)}catch(e){throw Fu(e)&&e.customData.serverCode===409?await Wu(n.appConfig):await _r(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Lf(n){let t=await da(n.appConfig);for(;t.registrationStatus===1;)await zu(100),t=await da(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await pi(n);return r||e}return t}function da(n){return kr(n,t=>{if(!t)throw Ee.create("installation-not-found");return Qu(t)})}function Qu(n){return Ff(n)?{fid:n.fid,registrationStatus:0}:n}function Ff(n){return n.registrationStatus===1&&n.registrationTime+Ou<Date.now()}/**
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
 */async function Uf({appConfig:n,heartbeatServiceProvider:t},e){const r=Bf(n,e),s=vf(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Mu,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ju(()=>fetch(r,c));if(h.ok){const d=await h.json();return Bu(d)}else throw await qu("Generate Auth Token",h)}function Bf(n,{fid:t}){return"".concat(Uu(n),"/").concat(t,"/authTokens:generate")}/**
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
 */async function gi(n,t=!1){let e;const r=await kr(n.appConfig,o=>{if(!Yu(o))throw Ee.create("not-registered");const a=o.authToken;if(!t&&jf(a))return o;if(a.requestStatus===1)return e=qf(n,t),o;{if(!navigator.onLine)throw Ee.create("app-offline");const c=Gf(o);return e=$f(n,c),c}});return e?await e:r.authToken}async function qf(n,t){let e=await fa(n.appConfig);for(;e.authToken.requestStatus===1;)await zu(100),e=await fa(n.appConfig);const r=e.authToken;return r.requestStatus===0?gi(n,t):r}function fa(n){return kr(n,t=>{if(!Yu(t))throw Ee.create("not-registered");const e=t.authToken;return Kf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function $f(n,t){try{const e=await Uf(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await _r(n.appConfig,r),e}catch(e){if(Fu(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Wu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _r(n.appConfig,r)}throw e}}function Yu(n){return n!==void 0&&n.registrationStatus===2}function jf(n){return n.requestStatus===2&&!zf(n)}function zf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+_f}function Gf(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Kf(n){return n.requestStatus===1&&n.requestTime+Ou<Date.now()}/**
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
 */async function Hf(n){const t=n,{installationEntry:e,registrationPromise:r}=await pi(t);return r?r.catch(console.error):gi(t).catch(console.error),e.fid}/**
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
 */async function Wf(n,t=!1){const e=n;return await Qf(e),(await gi(e,t)).token}async function Qf(n){const{registrationPromise:t}=await pi(n);t&&await t}/**
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
 */function Yf(n){if(!n||!n.options)throw ks("App Configuration");if(!n.name)throw ks("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw ks(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ks(n){return Ee.create("missing-app-config-values",{valueName:n})}/**
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
 */const Xu="installations",Xf="installations-internal",Jf=n=>{const t=n.getProvider("app").getImmediate(),e=Yf(t),r=kn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Zf=n=>{const t=n.getProvider("app").getImmediate(),e=kn(t,Xu).getImmediate();return{getId:()=>Hf(e),getToken:s=>Wf(e,s)}};function tm(){re(new qt(Xu,Jf,"PUBLIC")),re(new qt(Xf,Zf,"PRIVATE"))}tm();Dt(xu,fi);Dt(xu,fi,"esm2017");/**
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
 */const yr="analytics",em="firebase_id",nm="origin",rm=60*1e3,sm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_i="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new hi("@firebase/analytics");/**
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
 */const im={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new Dr("analytics","Analytics",im);/**
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
 */function om(n){if(!n.startsWith(_i)){const t=St.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(t.message),""}return n}function Ju(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function am(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function um(n,t){const e=am("firebase-js-sdk-policy",{createScriptURL:om}),r=document.createElement("script"),s="".concat(_i,"?l=").concat(n,"&id=").concat(t);r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function cm(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function lm(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Ju(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){wt.error(c)}n("config",s,o)}async function hm(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Ju(e);for(const h of a){const d=c.find(y=>y.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){wt.error(o)}}function dm(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await hm(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await lm(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){wt.error(c)}}return s}function fm(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=dm(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function mm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(_i)&&e.src.includes(n))return e;return null}/**
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
 */const pm=30,gm=1e3;class _m{constructor(t={},e=gm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Zu=new _m;function ym(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Tm(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:ym(r)},o=sm.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch(h){}throw St.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Em(n,t=Zu,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new wm;return setTimeout(async()=>{c.abort()},rm),tc({appId:r,apiKey:s,measurementId:o},a,c,t)}async function tc(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Zu){var o;const{appId:a,measurementId:c}=n;try{await vm(r,t)}catch(h){if(c)return wt.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(c)+' provided in the "measurementId" field in the local Firebase config. ['.concat(h==null?void 0:h.message,"]")),{appId:a,measurementId:c};throw h}try{const h=await Tm(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Im(d)){if(s.deleteThrottleMetadata(a),c)return wt.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(c)+' provided in the "measurementId" field in the local Firebase config. ['.concat(d==null?void 0:d.message,"]")),{appId:a,measurementId:c};throw h}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?ra(e,s.intervalMillis,pm):ra(e,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,y),wt.debug("Calling attemptFetch again in ".concat(m," millis")),tc(n,y,r,s)}}function vm(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Im(n){if(!(n instanceof le)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class wm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Am(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function Rm(){if(Ru())try{await Su()}catch(n){return wt.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sm(n,t,e,r,s,o,a){var c;const h=Em(n);h.then(S=>{e[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&wt.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(S.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(S=>wt.error(S)),t.push(h);const d=Rm().then(S=>{if(S)return r.getId()}),[m,y]=await Promise.all([h,d]);mm(o)||um(o,m.measurementId),s("js",new Date);const w=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return w[nm]="firebase",w.update=!0,y!=null&&(w[em]=y),s("config",m.measurementId,w),m.measurementId}/**
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
 */class bm{constructor(t){this.app=t}_delete(){return delete In[this.app.options.appId],Promise.resolve()}}let In={},ma=[];const pa={};let xs="dataLayer",Cm="gtag",ga,ec,_a=!1;function Pm(){const n=[];if(Wh()&&n.push("This is a browser extension environment."),Yh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>"(".concat(s+1,") ").concat(r)).join(" "),e=St.create("invalid-analytics-context",{errorInfo:t});wt.warn(e.message)}}function Vm(n,t,e){Pm();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(n.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw St.create("no-api-key");if(In[r]!=null)throw St.create("already-exists",{id:r});if(!_a){cm(xs);const{wrappedGtag:o,gtagCore:a}=fm(In,ma,pa,xs,Cm);ec=o,ga=a,_a=!0}return In[r]=Sm(n,ma,pa,t,ga,xs,e),new bm(n)}function Dm(n=Du()){n=bt(n);const t=kn(n,yr);return t.isInitialized()?t.getImmediate():Nm(n)}function Nm(n,t={}){const e=kn(n,yr);if(e.isInitialized()){const s=e.getImmediate();if(Ue(t,e.getOptions()))return s;throw St.create("already-initialized")}return e.initialize({options:t})}function km(n,t,e,r){n=bt(n),Am(ec,In[n.app.options.appId],t,e,r).catch(s=>wt.error(s))}const ya="@firebase/analytics",Ta="0.10.12";function xm(){re(new qt(yr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Vm(r,s,e)},"PUBLIC")),re(new qt("analytics-internal",n,"PRIVATE")),Dt(ya,Ta),Dt(ya,Ta,"esm2017");function n(t){try{const e=t.getProvider(yr).getImmediate();return{logEvent:(r,s,o)=>km(e,r,s,o)}}catch(e){throw St.create("interop-component-reg-failed",{reason:e})}}}xm();var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,nc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,E,A){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return p.prototype[E].apply(T,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var T=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)T[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)T[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var A=v.g[3],g=p+(A^_&(E^A))+T[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+T[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+T[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+T[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+T[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^A&(_^E))+T[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+T[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+T[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+T[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+T[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^A)+T[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+T[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+T[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+T[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+T[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~A))+T[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+T[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+T[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+T[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,T=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(T[E++]=v.charCodeAt(A++),E==this.blockSize){s(this,T),E=0;break}}else for(;A<p;)if(T[E++]=v[A++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var T=0;32>T;T+=8)v[_++]=this.g[p]>>>T&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],T=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;T&&A==p||(_[E]=A,T=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return P(d(-v));for(var p=[],_=1,T=0;v>=_;T++)p[T]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),T=y,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+A),p);8>A?(A=d(Math.pow(p,A)),T=T.j(A).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var y=h(0),w=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(x(this))return"-"+P(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,T="";;){var E=st(_,p).g;_=j(_,E.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,D(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=j(this,v),x(v)?-1:D(v)?0:1};function P(v){for(var p=v.g.length,_=[],T=0;T<p;T++)_[T]=~v.g[T];return new a(_,~v.h).add(w)}n.abs=function(){return x(this)?P(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0,E=0;E<=p;E++){var A=T+(this.i(E)&65535)+(v.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(v,p){return v.add(P(p))}n.j=function(v){if(D(this)||D(v))return y;if(x(this))return x(v)?P(this).j(P(v)):P(P(this).j(v));if(x(v))return P(this.j(P(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<v.g.length;E++){var A=this.i(T)>>>16,g=this.i(T)&65535,Lt=v.i(E)>>>16,tn=v.i(E)&65535;_[2*T+2*E]+=g*tn,G(_,2*T+2*E),_[2*T+2*E+1]+=A*tn,G(_,2*T+2*E+1),_[2*T+2*E+1]+=g*Lt,G(_,2*T+2*E+1),_[2*T+2*E+2]+=A*Lt,G(_,2*T+2*E+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function st(v,p){if(D(p))throw Error("division by zero");if(D(v))return new H(y,y);if(x(v))return p=st(P(v),p),new H(P(p.g),P(p.h));if(x(p))return p=st(v,P(p)),new H(P(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=p;0>=T.l(v);)_=Mt(_),T=Mt(T);var E=ot(_,1),A=ot(T,1);for(T=ot(T,2),_=ot(_,2);!D(T);){var g=A.add(T);0>=g.l(v)&&(E=E.add(_),A=g),T=ot(T,1),_=ot(_,1)}return p=j(v,E.j(p)),new H(E,p)}for(E=y;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(_),g=A.j(p);x(g)||0<g.l(v);)_-=T,A=d(_),g=A.j(p);D(A)&&(A=w),E=E.add(A),v=j(v,g)}return new H(E,v)}n.A=function(v){return st(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],T=0;T<p;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function Mt(v){for(var p=v.g.length+1,_=[],T=0;T<p;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function ot(v,p){var _=p>>5;p%=32;for(var T=v.g.length-_,E=[],A=0;A<T;A++)E[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ee=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rc,yn,sc,cr,Hs,ic,oc,ac;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in l))break t;l=l[I]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,I={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function y(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function w(i,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function S(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,I,R){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return u.prototype[I].apply(f,V)}}function x(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function P(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=i.length||0,R=f.length||0;i.length=I+R;for(let V=0;V<R;V++)i[I+V]=f[V]}else i.push(f)}}class j{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Mt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ot(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function v(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,u){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function E(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=ns;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Lt{constructor(){this.h=this.g=null}add(u,l){const f=tn.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var tn=new j(()=>new Ml,i=>i.reset());class Ml{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let en,nn=!1,ns=new Lt,to=()=>{const i=c.Promise.resolve(void 0);en=()=>{i.then(Ll)}};var Ll=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=tn;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}nn=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Fl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch(l){}return i}();function rn(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Mt){t:{try{st(u.nodeName);var I=!0;break t}catch(R){}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ul[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&rn.aa.h.call(this)}}D(rn,ht);var Ul={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),Bl=0;function ql(i,u,l,f,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=I,this.key=++Bl,this.da=this.fa=!1}function Bn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function qn(i){this.src=i,this.g={},this.h=0}qn.prototype.add=function(i,u,l,f,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=ss(i,u,f,I);return-1<V?(u=i[V],l||(u.fa=!1)):(u=new ql(u,this.src,R,!!f,I),u.fa=l,i.push(u)),u};function rs(i,u){var l=u.type;if(l in i.g){var f=i.g[l],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(Bn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ss(i,u,l,f){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return I}return-1}var is="closure_lm_"+(1e6*Math.random()|0),os={};function eo(i,u,l,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)eo(i,u[R],l,f,I);return null}return l=so(l),i&&i[Un]?i.K(u,l,d(f)?!!f.capture:!1,I):$l(i,u,l,!1,f,I)}function $l(i,u,l,f,I,R){if(!u)throw Error("Invalid event type");var V=d(I)?!!I.capture:!!I,W=us(i);if(W||(i[is]=W=new qn(i)),l=W.add(u,l,f,V,R),l.proxy)return l;if(f=jl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Fl||(I=V),I===void 0&&(I=!1),i.addEventListener(u.toString(),f,I);else if(i.attachEvent)i.attachEvent(ro(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function jl(){function i(l){return u.call(i.src,i.listener,l)}const u=zl;return i}function no(i,u,l,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)no(i,u[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=so(l),i&&i[Un]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=ss(R,l,f,I),-1<l&&(Bn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=us(i))&&(u=i.g[u.toString()],i=-1,u&&(i=ss(u,l,f,I)),(l=-1<i?u[i]:null)&&as(l))}function as(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Un])rs(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(ro(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=us(u))?(rs(l,i),l.h==0&&(l.src=null,u[is]=null)):Bn(i)}}}function ro(i){return i in os?os[i]:os[i]="on"+i}function zl(i,u){if(i.da)i=!0;else{u=new rn(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&as(i),i=l.call(f,u)}return i}function us(i){return i=i[is],i instanceof qn?i:null}var cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function so(i){return typeof i=="function"?i:(i[cs]||(i[cs]=function(u){return i.handleEvent(u)}),i[cs])}function dt(){Ht.call(this),this.i=new qn(this),this.M=this,this.F=null}D(dt,Ht),dt.prototype[Un]=!0,dt.prototype.removeEventListener=function(i,u,l,f){no(this,i,u,l,f)};function yt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var I=u;u=new ht(f,i),T(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var V=u.g=l[R];I=$n(V,f,!0,u)&&I}if(V=u.g=i,I=$n(V,f,!0,u)&&I,I=$n(V,f,!1,u)&&I,l)for(R=0;R<l.length;R++)V=u.g=l[R],I=$n(V,f,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Bn(l[f]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},dt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function $n(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var V=u[R];if(V&&!V.da&&V.capture==l){var W=V.listener,at=V.ha||V.src;V.fa&&rs(i.i,V),I=W.call(at,f)!==!1&&I}}return I&&!f.defaultPrevented}function io(i,u,l){if(typeof i=="function")l&&(i=w(i,l));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function oo(i){i.g=io(()=>{i.g=null,i.i&&(i.i=!1,oo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Gl extends Ht{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:oo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sn(i){Ht.call(this),this.h=i,this.g={}}D(sn,Ht);var ao=[];function uo(i){ot(i.g,function(u,l){this.g.hasOwnProperty(l)&&as(u)},i),i.g={}}sn.prototype.N=function(){sn.aa.N.call(this),uo(this)},sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ls=c.JSON.stringify,Kl=c.JSON.parse,Hl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function hs(){}hs.prototype.h=null;function co(i){return i.h||(i.h=i.i())}function lo(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ds(){ht.call(this,"d")}D(ds,ht);function fs(){ht.call(this,"c")}D(fs,ht);var fe={},ho=null;function jn(){return ho=ho||new dt}fe.La="serverreachability";function fo(i){ht.call(this,fe.La,i)}D(fo,ht);function an(i){const u=jn();yt(u,new fo(u))}fe.STAT_EVENT="statevent";function mo(i,u){ht.call(this,fe.STAT_EVENT,i),this.stat=u}D(mo,ht);function Tt(i){const u=jn();yt(u,new mo(u,i))}fe.Ma="timingevent";function po(i,u){ht.call(this,fe.Ma,i),this.size=u}D(po,ht);function un(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function cn(){this.g=!0}cn.prototype.xa=function(){this.g=!1};function Wl(i,u,l,f,I,R){i.info(function(){if(i.g)if(R)for(var V="",W=R.split("&"),at=0;at<W.length;at++){var z=W[at].split("=");if(1<z.length){var ft=z[0];z=z[1];var mt=ft.split("_");V=2<=mt.length&&mt[1]=="type"?V+(ft+"="+z+"&"):V+(ft+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+"\n"+l+"\n"+V})}function Ql(i,u,l,f,I,R,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+"\n"+l+"\n"+R+" "+V})}function be(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xl(i,l)+(f?" "+f:"")})}function Yl(i,u){i.info(function(){return"TIMEOUT: "+u})}cn.prototype.info=function(){};function Xl(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return ls(l)}catch(W){return u}}var zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},go={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ms;function Gn(){}D(Gn,hs),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},ms=new Gn;function Wt(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}var yo={},ps={};function gs(i,u,l){i.L=1,i.v=Qn(Ft(u)),i.m=l,i.P=!0,To(i,null)}function To(i,u){i.F=Date.now(),Kn(i),i.A=Ft(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),ko(l.i,"t",f),i.C=0,l=i.j.J,i.h=new _o,i.g=Xo(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Gl(w(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(ao[0]=I.toString()),I=ao);for(var R=0;R<I.length;R++){var V=eo(l,I[R],f||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),an(),Wl(i.i,i.u,i.A,i.l,i.R,i.m)}Wt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ut(i)==3?u.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ut(this.g);var u=this.g.Ba();const Ve=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Bo(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Ve?an(3):an(2)),_s(this);var l=this.g.Z();this.X=l;e:if(Eo(this)){var f=Bo(this.g);i="";var I=f.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),ln(this);var V="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,Ql(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(W)){var z=W;break e}}z=null}if(l=z)be(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,l);else{this.o=!1,this.s=3,Tt(12),me(this),ln(this);break t}}if(this.P){l=!0;let Ct;for(;!this.J&&this.C<V.length;)if(Ct=Jl(this,V),Ct==ps){mt==4&&(this.s=4,Tt(14),l=!1),be(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==yo){this.s=4,Tt(15),be(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else be(this.i,this.l,Ct,null),ys(this,Ct);if(Eo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)be(this.i,this.l,V,"[Invalid Chunked Response]"),me(this),ln(this);else if(0<V.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),As(ft),ft.M=!0,Tt(11))}}else be(this.i,this.l,V,null),ys(this,V);mt==4&&me(this),this.o&&!this.J&&(mt==4?Ho(this.j,this):(this.o=!1,Kn(this)))}else ph(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),me(this),ln(this)}}}catch(mt){}finally{}};function Eo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Jl(i,u){var l=i.C,f=u.indexOf("\n",l);return f==-1?ps:(l=Number(u.substring(l,f)),isNaN(l)?yo:(f+=1,f+l>u.length?ps:(u=u.slice(f,f+l),i.C=f+l,u)))}Wt.prototype.cancel=function(){this.J=!0,me(this)};function Kn(i){i.S=Date.now()+i.I,vo(i,i.I)}function vo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=un(w(i.ba,i),u)}function _s(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Wt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Yl(this.i,this.A),this.L!=2&&(an(),Tt(17)),me(this),this.s=2,ln(this)):vo(this,this.S-i)};function ln(i){i.j.G==0||i.J||Ho(i.j,i)}function me(i){_s(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,uo(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ys(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Ts(l.h,i))){if(!i.K&&Ts(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch(z){f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)er(l),Zn(l);else break t;ws(l),Tt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=un(w(l.Za,l),6e3));if(1>=Ao(l.h)&&l.ca){try{l.ca()}catch(z){}l.ca=void 0}}else ge(l,11)}else if((i.K||l.g==i)&&er(l),!G(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let z=I[u];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const ft=z[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=z[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Ve=z[5];Ve!=null&&typeof Ve=="number"&&0<Ve&&(f=1.5*Ve,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ct=i.g;if(Ct){const rr=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var R=f.h;R.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Es(R,R.h),R.h=null))}if(f.D){const Rs=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(f.ya=Rs,Y(f.I,f.D,Rs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=i;if(f.qa=Yo(f,f.J?f.ia:null,f.W),V.K){Ro(f.h,V);var W=V,at=f.L;at&&(W.I=at),W.B&&(_s(W),Kn(W)),f.g=V}else Go(f);0<l.i.length&&tr(l)}else z[0]!="stop"&&z[0]!="close"||ge(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ge(l,7):Is(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}an(4)}catch(z){}}var Zl=class{constructor(i,u){this.g=i,this.map=u}};function Io(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ao(i){return i.h?1:i.g?i.g.size:0}function Ts(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Es(i,u){i.g?i.g.add(u):i.h=u}function Ro(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Io.prototype.cancel=function(){if(this.i=So(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function So(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return x(i.i)}function th(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function eh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function bo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=eh(i),f=th(i),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],l&&l[R],i)}var Co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nh(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),I=null;if(0<=f){var R=i[l].substring(0,f);I=i[l].substring(f+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function pe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof pe){this.h=i.h,Hn(this,i.j),this.o=i.o,this.g=i.g,Wn(this,i.s),this.l=i.l;var u=i.i,l=new fn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Po(this,l),this.m=i.m}else i&&(u=String(i).match(Co))?(this.h=!1,Hn(this,u[1]||"",!0),this.o=hn(u[2]||""),this.g=hn(u[3]||"",!0),Wn(this,u[4]),this.l=hn(u[5]||"",!0),Po(this,u[6]||"",!0),this.m=hn(u[7]||"")):(this.h=!1,this.i=new fn(null,this.h))}pe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(dn(u,Vo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(dn(u,Vo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(dn(l,l.charAt(0)=="/"?ih:sh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",dn(l,ah)),i.join("")};function Ft(i){return new pe(i)}function Hn(i,u,l){i.j=l?hn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Wn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Po(i,u,l){u instanceof fn?(i.i=u,uh(i.i,i.h)):(l||(u=dn(u,oh)),i.i=new fn(u,i.h))}function Y(i,u,l){i.i.set(u,l)}function Qn(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function hn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function dn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,rh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Vo=/[#\/\?@]/g,sh=/[#\?:]/g,ih=/[#\?]/g,oh=/[#\?@]/g,ah=/#/g;function fn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&nh(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=fn.prototype,n.add=function(i,u){Qt(this),this.i=null,i=Ce(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Do(i,u){Qt(i),u=Ce(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function No(i,u){return Qt(i),u=Ce(i,u),i.g.has(u)}n.forEach=function(i,u){Qt(this),this.g.forEach(function(l,f){l.forEach(function(I){i.call(u,I,f,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const I=i[f];for(let R=0;R<I.length;R++)l.push(u[f])}return l},n.V=function(i){Qt(this);let u=[];if(typeof i=="string")No(this,i)&&(u=u.concat(this.g.get(Ce(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Qt(this),this.i=null,i=Ce(this,i),No(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function ko(i,u,l){Do(i,u),0<l.length&&(i.i=null,i.g.set(Ce(i,u),x(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var I=R;V[f]!==""&&(I+="="+encodeURIComponent(String(V[f]))),i.push(I)}}return this.i=i.join("&")};function Ce(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function uh(i,u){u&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Do(this,f),ko(this,I,l))},i)),i.j=u}function ch(i,u){const l=new cn;if(c.Image){const f=new Image;f.onload=S(Yt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=S(Yt,l,"TestLoadImage: error",!1,u,f),f.onabort=S(Yt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(Yt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function lh(i,u){const l=new cn,f=new AbortController,I=setTimeout(()=>{f.abort(),Yt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Yt(l,"TestPingServer: ok",!0,u):Yt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Yt(l,"TestPingServer: error",!1,u)})}function Yt(i,u,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch(R){}}function hh(){this.g=new Hl}function dh(i,u,l){const f=l||"";try{bo(i,function(I,R){let V=I;d(I)&&(V=ls(I)),u.push(f+R+"="+encodeURIComponent(V))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Yn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Yn,hs),Yn.prototype.g=function(){return new Xn(this.l,this.j)},Yn.prototype.i=function(i){return function(){return i}}({});function Xn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Xn,dt),n=Xn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,pn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,pn(this)),this.g&&(this.readyState=3,pn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function xo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?mn(this):pn(this),this.readyState==3&&xo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,mn(this))},n.Qa=function(i){this.g&&(this.response=i,mn(this))},n.ga=function(){this.g&&mn(this)};function mn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,pn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join("\r\n")};function pn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Oo(i){let u="";return ot(i,function(l,f){u+=f,u+=":",u+=l,u+="\r\n"}),u}function vs(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Oo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Y(i,u,l))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var fh=/^https?$/i,mh=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ms.g(),this.v=this.o?co(this.o):co(ms),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){Mo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(mh,u,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of l)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Mo(this,R)}};function Mo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Lo(i),Jn(i)}function Lo(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fo(this):this.bb())},n.bb=function(){Fo(this)};function Fo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ut(i)!=4||i.Z()!=2)){if(i.u&&Ut(i)==4)io(i.Ea,0,i);else if(yt(i,"readystatechange"),Ut(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=V===0){var I=String(i.D).match(Co)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!fh.test(I?I.toLowerCase():"")}l=f}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var R=2<Ut(i)?i.g.statusText:""}catch(W){R=""}i.l=R+" ["+i.Z()+"]",Lo(i)}}finally{Jn(i)}}}}function Jn(i,u){if(i.g){Uo(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||yt(i,"ready");try{l.onreadystatechange=f}catch(I){}}}function Uo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ut(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch(i){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(i){return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Kl(u)}};function Bo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch(u){return null}}function ph(i){const u={};i=(i.g&&2<=Ut(i)&&i.g.getAllResponseHeaders()||"").split("\r\n");for(let f=0;f<i.length;f++){if(G(i[f]))continue;var l=E(i[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}v(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function qo(i){this.Aa=0,this.i=[],this.j=new cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gn("baseRetryDelayMs",5e3,i),this.cb=gn("retryDelaySeedMs",1e4,i),this.Wa=gn("forwardChannelMaxRetries",2,i),this.wa=gn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Io(i&&i.concurrentRequestLimit),this.Da=new hh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){Tt(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Yo(this,null,this.W),tr(this)};function Is(i){if($o(i),i.G==3){var u=i.U++,l=Ft(i.I);if(Y(l,"SID",i.K),Y(l,"RID",u),Y(l,"TYPE","terminate"),_n(i,l),u=new Wt(i,i.j,u),u.L=2,u.v=Qn(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch(f){}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Xo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Kn(u)}Qo(i)}function Zn(i){i.g&&(As(i),i.g.cancel(),i.g=null)}function $o(i){Zn(i),i.u&&(c.clearTimeout(i.u),i.u=null),er(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function tr(i){if(!wo(i.h)&&!i.s){i.s=!0;var u=i.Ga;en||to(),nn||(en(),nn=!0),ns.add(u,i),i.B=0}}function gh(i,u){return Ao(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=un(w(i.Ga,i,u),Wo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Wt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=zo(this,I,u),l=Ft(this.I),Y(l,"RID",i),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),_n(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Oo(R)))+"&"+u:this.m&&vs(l,this.m,R)),Es(this.h,I),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",u),Y(l,"SID","null"),I.T=!0,gs(I,l,null)):gs(I,l,u),this.G=2}}else this.G==3&&(i?jo(this,i):this.i.length==0||wo(this.h)||jo(this))};function jo(i,u){var l;u?l=u.l:l=i.U++;const f=Ft(i.I);Y(f,"SID",i.K),Y(f,"RID",l),Y(f,"AID",i.T),_n(i,f),i.m&&i.o&&vs(f,i.m,i.o),l=new Wt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=zo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Es(i.h,l),gs(l,f,u)}function _n(i,u){i.H&&ot(i.H,function(l,f){Y(u,f,l)}),i.l&&bo({},function(l,f){Y(u,f,l)})}function zo(i,u,l){l=Math.min(i.i.length,l);var f=i.l?w(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const V=["count="+l];R==-1?0<l?(R=I[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let W=!0;for(let at=0;at<l;at++){let z=I[at].g;const ft=I[at].map;if(z-=R,0>z)R=Math.max(0,I[at].g-100),W=!1;else try{dh(ft,V,"req"+z+"_")}catch(mt){f&&f(ft)}}if(W){f=V.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Go(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;en||to(),nn||(en(),nn=!0),ns.add(u,i),i.v=0}}function ws(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=un(w(i.Fa,i),Wo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ko(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=un(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Zn(this),Ko(this))};function As(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ko(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);Y(u,"RID","rpc"),Y(u,"SID",i.K),Y(u,"AID",i.T),Y(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(u,"TO",i.ja),Y(u,"TYPE","xmlhttp"),_n(i,u),i.m&&i.o&&vs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Qn(Ft(u)),l.m=null,l.P=!0,To(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Zn(this),ws(this),Tt(19))};function er(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ho(i,u){var l=null;if(i.g==u){er(i),As(i),i.g=null;var f=2}else if(Ts(i.h,u))l=u.D,Ro(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;f=jn(),yt(f,new po(f,l)),tr(i)}else Go(i);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&gh(i,u)||f==2&&ws(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:ge(i,5);break;case 4:ge(i,10);break;case 3:ge(i,6);break;default:ge(i,2)}}}function Wo(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ge(i,u){if(i.j.info("Error code "+u),u==2){var l=w(i.fb,i),f=i.Xa;const I=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hn(f,"https"),Qn(f),I?ch(f.toString(),l):lh(f.toString(),l)}else Tt(2);i.G=0,i.l&&i.l.sa(u),Qo(i),$o(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Qo(i){if(i.G=0,i.ka=[],i.l){const u=So(i.h);(u.length!=0||i.i.length!=0)&&(P(i.ka,u),P(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function Yo(i,u,l){var f=l instanceof pe?Ft(l):new pe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Wn(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new pe(null);f&&Hn(R,f),u&&(R.g=u),I&&Wn(R,I),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&Y(f,l,u),Y(f,"VER",i.la),_n(i,f),f}function Xo(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new J(new Yn({eb:l})):new J(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}n=Jo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function nr(){}nr.prototype.g=function(i,u){return new At(i,u)};function At(i,u){dt.call(this),this.g=new qo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!G(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Pe(this)}D(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Is(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=ls(i),i=l);u.i.push(new Zl(u.Ya++,i)),u.G==3&&tr(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Is(this.g),delete this.g,At.aa.N.call(this)};function Zo(i){ds.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(Zo,ds);function ta(){fs.call(this),this.status=1}D(ta,fs);function Pe(i){this.g=i}D(Pe,Jo),Pe.prototype.ua=function(){yt(this.g,"a")},Pe.prototype.ta=function(i){yt(this.g,new Zo(i))},Pe.prototype.sa=function(i){yt(this.g,new ta)},Pe.prototype.ra=function(){yt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,ac=function(){return new nr},oc=function(){return jn()},ic=fe,Hs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,cr=zn,go.COMPLETE="complete",sc=go,lo.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",dt.prototype.listen=dt.prototype.K,yn=lo,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,rc=J}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});const va="@firebase/firestore",Ia="4.7.11";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Qe="11.6.1";/**
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
 */const Ie=new hi("@firebase/firestore");function De(){return Ie.logLevel}function k(n,...t){if(Ie.logLevel<=$.DEBUG){const e=t.map(yi);Ie.debug("Firestore (".concat(Qe,"): ").concat(n),...e)}}function jt(n,...t){if(Ie.logLevel<=$.ERROR){const e=t.map(yi);Ie.error("Firestore (".concat(Qe,"): ").concat(n),...e)}}function Be(n,...t){if(Ie.logLevel<=$.WARN){const e=t.map(yi);Ie.warn("Firestore (".concat(Qe,"): ").concat(n),...e)}}function yi(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch(t){return n}}/**
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
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,uc(n,r,e)}function uc(n,t,e){let r="FIRESTORE (".concat(Qe,") INTERNAL ASSERTION FAILED: ").concat(t," (ID: ").concat(n.toString(16),")");if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch(s){r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||uc(t,s,r)}function F(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends le{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
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
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class cc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))}}class Om{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Mm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lm{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new cc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Fm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Um{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Fm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(o.error.message));const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider","Received ".concat(a?"new":"existing"," token.")),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wa(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new wa(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function lc(){return new TextEncoder}/**
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
 */class hc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function Ws(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=lc(),a=$m(o.encode(Aa(n,e)),o.encode(Aa(t,e)));return a!==0?a:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Aa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function $m(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function qe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Ra=-62135596800,Sa=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Sa);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ra)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sa}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ra;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ba="__name__";class Vt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Vt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Vt.isNumericId(t),s=Vt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):Ws(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class Q extends Vt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,"Invalid segment (".concat(r,"). Paths must not contain // in them."));e.push(...r.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const jm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Vt{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return jm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ba}static keyField(){return new ct([ba])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
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
 */const bn=-1;function zm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new se(s,O.empty(),t)}function Gm(n){return new se(n.readTime,n.key,bn)}class se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new se(L.min(),O.empty(),bn)}static max(){return new se(L.max(),O.empty(),bn)}}function Km(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const Hm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ye(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Hm)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Qm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Xe(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}xr.le=-1;/**
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
 */const Ti=-1;function Or(n){return n==null}function Tr(n){return n===0&&1/n==-1/0}function Ym(n){return typeof n=="number"&&Number.isInteger(n)&&!Tr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const dc="";function Xm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ca(t)),t=Jm(n.get(e),t);return Ca(t)}function Jm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case dc:e+="";break;default:e+=o}}return e}function Ca(n){return n+dc+""}/**
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
 */function Pa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function he(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function fc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push("".concat(e,":").concat(r)),!1)),"{".concat(t.join(", "),"}")}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ir(this.root,t,this.comparator,!0)}}class ir{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r!=null?r:ut.RED,this.left=s!=null?s:ut.EMPTY,this.right=o!=null?o:ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,s!=null?s:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(t){return new Va(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class Va{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new rt(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return qe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mc("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Zm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Zm.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oe(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */const pc="server_timestamp",gc="__type__",_c="__previous_value__",yc="__local_write_time__";function Mr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[gc])===null||e===void 0?void 0:e.stringValue)===pc}function Lr(n){const t=n.mapValue.fields[_c];return Mr(t)?Lr(t):t}function Cn(n){const t=ie(n.mapValue.fields[yc].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class tp{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const Er="(default)";class Pn{constructor(t,e){this.projectId=t,this.database=e||Er}static empty(){return new Pn("","")}get isDefaultDatabase(){return this.database===Er}isEqual(t){return t instanceof Pn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Tc="__type__",ep="__max__",or={mapValue:{}},Ec="__vector__",vr="value";function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mr(n)?4:rp(n)?9007199254740991:np(n)?10:11:M(28295,{value:n})}function Ot(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Cn(n).isEqual(Cn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ie(s.timestampValue),c=ie(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return oe(s.bytesValue).isEqual(oe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),c=Z(o.doubleValue);return a===c?Tr(a)===Tr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return qe(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Pa(a)!==Pa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ot(a[h],c[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function Vn(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function $e(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Da(n.timestampValue,t.timestampValue);case 4:return Da(Cn(n),Cn(t));case 5:return Ws(n.stringValue,t.stringValue);case 6:return function(o,a){const c=oe(o),h=oe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=U(c[d],h[d]);if(m!==0)return m}return U(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=U(Z(o.latitude),Z(a.latitude));return c!==0?c:U(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Na(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const y=o.fields||{},w=a.fields||{},S=(c=y[vr])===null||c===void 0?void 0:c.arrayValue,D=(h=w[vr])===null||h===void 0?void 0:h.arrayValue,x=U(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Na(S,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===or.mapValue&&a===or.mapValue)return 0;if(o===or.mapValue)return 1;if(a===or.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Ws(h[y],m[y]);if(w!==0)return w;const S=$e(c[h[y]],d[m[y]]);if(S!==0)return S}return U(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function Da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ie(n),r=ie(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Na(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=$e(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function je(n){return Qs(n)}function Qs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return"time(".concat(r.seconds,",").concat(r.nanos,")")}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return"geo(".concat(e.latitude,",").concat(e.longitude,")")}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Qs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+="".concat(a,":").concat(Qs(e.fields[a]));return s+"}"}(n.mapValue):M(61005,{value:n})}function lr(n){switch(ae(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Lr(n);return t?16+lr(t):16;case 5:return 2*n.stringValue.length;case 6:return oe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+lr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return he(r.fields,(o,a)=>{s+=o.length+lr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Ir(n,t){return{referenceValue:"projects/".concat(n.projectId,"/databases/").concat(n.database,"/documents/").concat(t.path.canonicalString())}}function Ys(n){return!!n&&"integerValue"in n}function Ei(n){return!!n&&"arrayValue"in n}function ka(n){return!!n&&"nullValue"in n}function xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hr(n){return!!n&&"mapValue"in n}function np(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Tc])===null||e===void 0?void 0:e.stringValue)===Ec}function wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return he(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=wn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function rp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ep}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!hr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=wn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());hr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];hr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){he(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(wn(this.value))}}function vc(n){const t=[];return he(n.fields,(e,r)=>{const s=new ct([e]);if(hr(r)){const o=vc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}/**
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
 */class ze{constructor(t,e){this.position=t,this.inclusive=e}}function Oa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=$e(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ma(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Dn{constructor(t,e="asc"){this.field=t,this.dir=e}}function sp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ic{}class et extends Ic{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new op(t,e,r):e==="array-contains"?new cp(t,r):e==="in"?new lp(t,r):e==="not-in"?new hp(t,r):e==="array-contains-any"?new dp(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ap(t,r):new up(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($e(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends Ic{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Pt(t,e)}matches(t){return wc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function wc(n){return n.op==="and"}function Ac(n){return ip(n)&&wc(n)}function ip(n){for(const t of n.filters)if(t instanceof Pt)return!1;return!0}function Xs(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+je(n.value);if(Ac(n))return n.filters.map(t=>Xs(t)).join(",");{const t=n.filters.map(e=>Xs(e)).join(",");return"".concat(n.op,"(").concat(t,")")}}function Rc(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,t):n instanceof Pt?function(r,s){return s instanceof Pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Rc(a,s.filters[c]),!0):!1}(n,t):void M(19439)}function Sc(n){return n instanceof et?function(e){return"".concat(e.field.canonicalString()," ").concat(e.op," ").concat(je(e.value))}(n):n instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Sc).join(" ,")+"}"}(n):"Filter"}class op extends et{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ap extends et{constructor(t,e){super(t,"in",e),this.keys=bc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class up extends et{constructor(t,e){super(t,"not-in",e),this.keys=bc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function bc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class cp extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ei(e)&&Vn(e.arrayValue,this.value)}}class lp extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Vn(this.value.arrayValue,e)}}class hp extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Vn(this.value.arrayValue,e)}}class dp extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ei(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Vn(this.value.arrayValue,r))}}/**
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
 */class fp{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function La(n,t=null,e=[],r=[],s=null,o=null,a=null){return new fp(n,t,e,r,s,o,a)}function vi(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Or(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>je(r)).join(",")),t.Ie=e}return t.Ie}function Ii(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!sp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Rc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ma(n.startAt,t.startAt)&&Ma(n.endAt,t.endAt)}function Js(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ae{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function mp(n,t,e,r,s,o,a,c){return new Ae(n,t,e,r,s,o,a,c)}function wi(n){return new Ae(n)}function Fa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ai(n){return n.collectionGroup!==null}function Le(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new rt(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Dn(o,r))}),e.has(ct.keyField().canonicalString())||t.Ee.push(new Dn(ct.keyField(),r))}return t.Ee}function Nt(n){const t=F(n);return t.de||(t.de=pp(t,Le(n))),t.de}function pp(n,t){if(n.limitType==="F")return La(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dn(s.field,o)});const e=n.endAt?new ze(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ze(n.startAt.position,n.startAt.inclusive):null;return La(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zs(n,t){const e=n.filters.concat([t]);return new Ae(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function wr(n,t,e){return new Ae(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Fr(n,t){return Ii(Nt(n),Nt(t))&&n.limitType===t.limitType}function Cc(n){return"".concat(vi(Nt(n)),"|lt:").concat(n.limitType)}function Ne(n){return"Query(target=".concat(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=", filters: [".concat(e.filters.map(s=>Sc(s)).join(", "),"]")),Or(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=", orderBy: [".concat(e.orderBy.map(s=>function(a){return"".concat(a.field.canonicalString()," (").concat(a.dir,")")}(s)).join(", "),"]")),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>je(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>je(s)).join(",")),"Target(".concat(r,")")}(Nt(n)),"; limitType=").concat(n.limitType,")")}function Ur(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Le(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=Oa(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Le(r),s)||r.endAt&&!function(a,c,h){const d=Oa(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Le(r),s))}(n,t)}function gp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pc(n){return(t,e)=>{let r=!1;for(const s of Le(n)){const o=_p(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function _p(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?$e(h,d):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
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
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return fc(this.inner)}size(){return this.innerSize}}/**
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
 */const yp=new X(O.comparator);function zt(){return yp}const Vc=new X(O.comparator);function Tn(...n){let t=Vc;for(const e of n)t=t.insert(e.key,e);return t}function Dc(n){let t=Vc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Te(){return An()}function Nc(){return An()}function An(){return new Re(n=>n.toString(),(n,t)=>n.isEqual(t))}const Tp=new X(O.comparator),Ep=new rt(O.comparator);function B(...n){let t=Ep;for(const e of n)t=t.add(e);return t}const vp=new rt(U);function Ip(){return vp}/**
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
 */function Ri(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(t)?"-0":t}}function kc(n){return{integerValue:""+n}}function wp(n,t){return Ym(t)?kc(t):Ri(n,t)}/**
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
 */class Br{constructor(){this._=void 0}}function Ap(n,t,e){return n instanceof Ar?function(s,o){const a={fields:{[gc]:{stringValue:pc},[yc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Mr(o)&&(o=Lr(o)),o&&(a.fields[_c]=o),{mapValue:a}}(e,t):n instanceof Ge?Oc(n,t):n instanceof Nn?Mc(n,t):function(s,o){const a=xc(s,o),c=Ua(a)+Ua(s.Re);return Ys(a)&&Ys(s.Re)?kc(c):Ri(s.serializer,c)}(n,t)}function Rp(n,t,e){return n instanceof Ge?Oc(n,t):n instanceof Nn?Mc(n,t):e}function xc(n,t){return n instanceof Rr?function(r){return Ys(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Ar extends Br{}class Ge extends Br{constructor(t){super(),this.elements=t}}function Oc(n,t){const e=Lc(t);for(const r of n.elements)e.some(s=>Ot(s,r))||e.push(r);return{arrayValue:{values:e}}}class Nn extends Br{constructor(t){super(),this.elements=t}}function Mc(n,t){let e=Lc(t);for(const r of n.elements)e=e.filter(s=>!Ot(s,r));return{arrayValue:{values:e}}}class Rr extends Br{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Ua(n){return Z(n.integerValue||n.doubleValue)}function Lc(n){return Ei(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Sp{constructor(t,e){this.field=t,this.transform=e}}function bp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ge&&s instanceof Ge||r instanceof Nn&&s instanceof Nn?qe(r.elements,s.elements,Ot):r instanceof Rr&&s instanceof Rr?Ot(r.Re,s.Re):r instanceof Ar&&s instanceof Ar}(n.transform,t.transform)}class Cp{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class qr{}function Fc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bc(n.key,kt.none()):new xn(n.key,n.data,kt.none());{const e=n.data,r=It.empty();let s=new rt(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new de(n.key,r,new Rt(s.toArray()),kt.none())}}function Pp(n,t,e){n instanceof xn?function(s,o,a){const c=s.value.clone(),h=qa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof de?function(s,o,a){if(!dr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=qa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Uc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rn(n,t,e,r){return n instanceof xn?function(o,a,c,h){if(!dr(o.precondition,a))return c;const d=o.value.clone(),m=$a(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof de?function(o,a,c,h){if(!dr(o.precondition,a))return c;const d=$a(o.fieldTransforms,h,a),m=a.data;return m.setAll(Uc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,c){return dr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Vp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=xc(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function Ba(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qe(r,s,(o,a)=>bp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xn extends qr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class de extends qr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Uc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function qa(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Rp(a,c,e[s]))}return r}function $a(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ap(o,a,t))}return r}class Bc extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dp extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Np{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Pp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Nc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Fc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&qe(this.mutations,t.mutations,(e,r)=>Ba(e,r))&&qe(this.baseMutations,t.baseMutations,(e,r)=>Ba(e,r))}}class Si{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return Tp}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Si(t,e,r,s)}}/**
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
 */class kp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}/**
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
 */class xp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,q;function Op(n){switch(n){case b.OK:return M(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function qc(n){if(n===void 0)return jt("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return M(39323,{code:n})}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Mp=new ee([4294967295,4294967295],0);function ja(n){const t=lc().encode(n),e=new nc;return e.update(t),new Uint8Array(e.digest())}function za(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([s,o],0)]}class bi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new En("Invalid padding: ".concat(e));if(r<0)throw new En("Invalid hash count: ".concat(r));if(t.length>0&&this.hashCount===0)throw new En("Invalid hash count: ".concat(r));if(t.length===0&&e!==0)throw new En("Invalid padding when bitmap length is 0: ".concat(e));this.pe=8*t.length-e,this.ye=ee.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(ee.fromNumber(r)));return s.compare(Mp)===1&&(s=new ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=ja(t),[r,s]=za(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new bi(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=ja(t),[r,s]=za(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class En extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $r{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,On.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new $r(L.min(),s,new X(U),zt(),B())}}class On{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new On(r,e,B(),B(),B())}}/**
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
 */class fr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class $c{constructor(t,e){this.targetId=t,this.Ce=e}}class jc{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ga{constructor(){this.Fe=0,this.Me=Ka(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=B(),e=B(),r=B();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new On(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Ka()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Lp{constructor(t){this.ze=t,this.je=new Map,this.He=zt(),this.Je=ar(),this.Ye=ar(),this.Ze=new X(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(Js(o))if(r===0){const a=new O(o.path);this.tt(e,a,_t.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=oe(r).toUint8Array()}catch(h){if(h instanceof mc)return Be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new bi(a,s,o)}catch(h){return Be(h instanceof En?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),c="projects/".concat(a.projectId,"/databases/").concat(a.database,"/documents/").concat(o.path.canonicalString());t.mightContain(c)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&Js(c.target)){const h=new O(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,_t.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=B();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new $r(t,e,this.Ze,this.He,r);return this.He=zt(),this.Je=ar(),this.Ye=ar(),this.Ze=new X(U),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Ga,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new rt(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new rt(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Ga),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function ar(){return new X(O.comparator)}function Ka(){return new X(O.comparator)}const Fp={asc:"ASCENDING",desc:"DESCENDING"},Up={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bp={and:"AND",or:"OR"};class qp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ti(n,t){return n.useProto3Json||Or(t)?t:{value:t}}function Sr(n,t){return n.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function zc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $p(n,t){return Sr(n,t.toTimestamp())}function xt(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=ie(e);return new nt(r.seconds,r.nanos)}(n))}function Ci(n,t){return ei(n,t).canonicalString()}function ei(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Gc(n){const t=Q.fromString(n);return K(Yc(t),10190,{key:t.toString()}),t}function ni(n,t){return Ci(n.databaseId,t.path)}function Os(n,t){const e=Gc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Hc(e))}function Kc(n,t){return Ci(n.databaseId,t)}function jp(n){const t=Gc(n);return t.length===4?Q.emptyPath():Hc(t)}function ri(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hc(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ha(n,t,e){return{name:ni(n,t),fields:e.value.mapValue.fields}}function zp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?b.UNKNOWN:qc(d.code);return new N(m,d.message||"")}(a);e=new jc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Os(n,r.document.name),o=xt(r.document.updateTime),a=r.document.createTime?xt(r.document.createTime):L.min(),c=new It({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new fr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Os(n,r.document),o=r.readTime?xt(r.readTime):L.min(),a=_t.newNoDocument(s,o),c=r.removedTargetIds||[];e=new fr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Os(n,r.document),o=r.removedTargetIds||[];e=new fr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new xp(s,o),c=r.targetId;e=new $c(c,a)}}return e}function Gp(n,t){let e;if(t instanceof xn)e={update:Ha(n,t.key,t.value)};else if(t instanceof Bc)e={delete:ni(n,t.key)};else if(t instanceof de)e={update:Ha(n,t.key,t.data),updateMask:tg(t.fieldMask)};else{if(!(t instanceof Dp))return M(16599,{ft:t.type});e={verify:ni(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ge)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Nn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:$p(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function Kp(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?xt(s.updateTime):xt(o);return a.isEqual(L.min())&&(a=xt(o)),new Cp(a,s.transformResults||[])}(e,t))):[]}function Hp(n,t){return{documents:[Kc(n,t.path)]}}function Wp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Kc(n,s);const o=function(d){if(d.length!==0)return Qc(Pt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:ke(w.field),direction:Xp(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ti(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function Qp(n){let t=jp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const w=Wc(y);return w instanceof Pt&&Ac(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(w=>function(D){return new Dn(xe(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,Or(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(y){const w=!!y.before,S=y.values||[];return new ze(S,w)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const w=!y.before,S=y.values||[];return new ze(S,w)}(e.endAt)),mp(t,s,a,o,c,"F",h,d)}function Yp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Wc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=xe(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return et.create(xe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(r=>Wc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Xp(n){return Fp[n]}function Jp(n){return Up[n]}function Zp(n){return Bp[n]}function ke(n){return{fieldPath:n.canonicalString()}}function xe(n){return ct.fromServerFormat(n.fieldPath)}function Qc(n){return n instanceof et?function(e){if(e.op==="=="){if(xa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NAN"}};if(ka(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NAN"}};if(ka(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(e.field),op:Jp(e.op),value:e.value}}}(n):n instanceof Pt?function(e){const r=e.getFilters().map(s=>Qc(s));return r.length===1?r[0]:{compositeFilter:{op:Zp(e.op),filters:r}}}(n):M(54877,{filter:n})}function tg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Jt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class eg{constructor(t){this.wt=t}}function ng(n){const t=Qp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wr(t,t.limit,"L"):t}/**
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
 */class rg{constructor(){this.yn=new sg}addToCollectionParentIndex(t,e){return this.yn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(se.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class sg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new rt(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(Q.comparator)).toArray()}}/**
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
 */const Wa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xc=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Xc,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class Ke{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ke(0)}static ir(){return new Ke(-1)}}/**
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
 */const Qa="LruGarbageCollector",ig=1048576;function Ya([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class og{constructor(t){this.cr=t,this.buffer=new rt(Ya),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ya(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ag{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){k(Qa,"Garbage collection scheduled in ".concat(t,"ms")),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Xe(e)?k(Qa,"Ignoring IndexedDB error during garbage collection: ",e):await Ye(e)}await this.Ir(3e5)})}}class ug{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(xr.le);const r=new og(e);return this.Er.forEachTarget(t,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(t,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Er.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Wa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector","Garbage collection skipped; Cache size ".concat(r," is lower than threshold ").concat(this.params.cacheSizeCollectionThreshold)),Wa):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let r,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of ".concat(this.params.maximumSequenceNumbersToCollect," from ").concat(y)),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(d=Date.now(),De()<=$.DEBUG&&k("LruGarbageCollector","LRU Garbage Collection\n	Counted targets in ".concat(a-m,"ms\n	Determined least recently used ").concat(s," in ")+(c-a)+"ms\n"+"	Removed ".concat(o," targets in ")+(h-c)+"ms\n"+"	Removed ".concat(y," documents in ")+(d-h)+"ms\n"+"Total Duration: ".concat(d-m,"ms")),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function cg(n,t){return new ug(n,t)}/**
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
 */class lg{constructor(){this.changes=new Re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class dg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Rn(r.mutation,s,Rt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const s=Te();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Tn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Te();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=zt();const a=An(),c=function(){return An()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof de)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Rn(m.mutation,d,m.mutation.getFieldMask(),nt.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return c.set(d,new hg(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(t,e){const r=An();let s=new X((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Rt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const y=(s.get(c.batchId)||B()).add(h);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,y=Nc();m.forEach(w=>{if(!o.has(w)){const S=Fc(e.get(w),r.get(w));S!==null&&y.set(w,S),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ai(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Te());let c=bn,h=o;return a.next(d=>C.forEach(d,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,B())).next(m=>({batchId:c,changes:Dc(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=Tn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Tn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const d=function(y,w){return new Ae(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let c=Tn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Rn(m.mutation,d,Rt.empty(),nt.now()),Ur(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class fg{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return C.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:xt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(s){return{name:s.name,query:ng(s.bundledQuery),readTime:xt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class mg{constructor(){this.overlays=new X(O.comparator),this.Or=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Te();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Te(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Te(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Te(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return C.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new kp(e,r));let o=this.Or.get(e);o===void 0&&(o=B(),this.Or.set(e,o)),this.Or.set(e,o.add(r.key))}}/**
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
 */class pg{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class Pi{constructor(){this.Nr=new rt(it.Br),this.Lr=new rt(it.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Qr(new it(t,e))}$r(t,e){t.forEach(r=>this.removeReference(r,e))}Ur(t){const e=new O(new Q([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Lr.forEachInRange([r,s],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new O(new Q([])),r=new it(e,t),s=new it(e,t+1);let o=B();return this.Lr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Nr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return O.comparator(t.key,e.key)||U(t.Gr,e.Gr)}static kr(t,e){return U(t.Gr,e.Gr)||O.comparator(t.key,e.key)}}/**
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
 */class gg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new rt(it.Br)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Np(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.zr=this.zr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Hr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ti:this.Jn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,s],a=>{const c=this.jr(a.Gr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(U);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],c=>{r=r.add(c.Gr)})}),C.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new it(new O(o),0);let c=new rt(U);return this.zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Gr)),!0)},a),C.resolve(this.Jr(c))}Jr(t){const e=[];return t.forEach(r=>{const s=this.jr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return C.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.zr=r})}Xn(t){}containsKey(t,e){const r=new it(e,0),s=this.zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class _g{constructor(t){this.Zr=t,this.docs=function(){return new X(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Zr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=zt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=zt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Km(Gm(m),r)<=0||(s.has(m.key)||Ur(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}Xr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yg(this)}getSize(t){return C.resolve(this.size)}}class yg extends lg{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.vr.addEntry(t,s)):this.vr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
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
 */class Tg{constructor(t){this.persistence=t,this.ei=new Re(e=>vi(e),Ii),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ti=0,this.ni=new Pi,this.targetCount=0,this.ri=Ke.rr()}forEachTarget(t,e){return this.ei.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ti&&(this.ti=e),C.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Ke(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.ar(e),C.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ei.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ei.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ni.qr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ni.$r(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ni.Wr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ni.containsKey(e))}}/**
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
 */class Jc{constructor(t,e){this.ii={},this.overlays={},this.si=new xr(0),this.oi=!1,this.oi=!0,this._i=new pg,this.referenceDelegate=t(this),this.ai=new Tg(this),this.indexManager=new rg,this.remoteDocumentCache=function(s){return new _g(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new eg(e),this.ci=new fg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ii[t.toKey()];return r||(r=new gg(e,this.referenceDelegate),this.ii[t.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new Eg(this.si.next());return this.referenceDelegate.li(),r(s).next(o=>this.referenceDelegate.hi(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Pi(t,e){return C.or(Object.values(this.ii).map(r=>()=>r.containsKey(t,e)))}}class Eg extends Wm{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.Ti=new Pi,this.Ii=null}static Ei(t){return new Vi(t)}get di(){if(this.Ii)return this.Ii;throw M(60996)}addReference(t,e,r){return this.Ti.addReference(r,e),this.di.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ti.removeReference(r,e),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,r=>{const s=O.fromPath(r);return this.Ai(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return C.or([()=>C.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class br{constructor(t,e){this.persistence=t,this.Ri=new Re(r=>Xm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cg(this,e)}static Ei(t,e){return new br(t,e)}li(){}hi(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}Vr(t){let e=0;return this.Ar(t,r=>{e++}).next(()=>e)}Ar(t,e){return C.forEach(this.Ri,(r,s)=>this.gr(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Xr(t,a=>this.gr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=lr(t.data.value)),e}gr(t,e,r){return C.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Ri.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ls=r,this.hs=s}static Ps(t,e){let r=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Di(t,e.fromCache,r,s)}}/**
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
 */class vg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ig{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Qh()?8:Qm(Kh())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new vg;return this.fs(t,e,a).next(c=>{if(o.result=c,this.Is)return this.gs(t,e,a,c.size)})}).next(()=>o.result)}gs(t,e,r,s){return r.documentReadCount<this.Es?(De()<=$.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),C.resolve()):(De()<=$.DEBUG&&k("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(De()<=$.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):C.resolve())}Rs(t,e){if(Fa(e))return C.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=wr(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=B(...o);return this.As.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ps(e,c);return this.ys(e,d,a,h.readTime)?this.Rs(t,wr(e,null,"F")):this.ws(t,d,e,h)}))})))}Vs(t,e,r,s){return Fa(e)||s.isEqual(L.min())?C.resolve(null):this.As.getDocuments(t,r).next(o=>{const a=this.ps(e,o);return this.ys(e,a,r,s)?C.resolve(null):(De()<=$.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.ws(t,a,e,zm(s,bn)).next(c=>c))})}ps(t,e){let r=new rt(Pc(t));return e.forEach((s,o)=>{Ur(t,o)&&(r=r.add(o))}),r}ys(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}fs(t,e,r){return De()<=$.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.As.getDocumentsMatchingQuery(t,e,se.min(),r)}ws(t,e,r,s){return this.As.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Ni="LocalStore",wg=3e8;class Ag{constructor(t,e,r,s){this.persistence=t,this.bs=e,this.serializer=s,this.Ss=new X(U),this.Ds=new Re(o=>vi(o),Ii),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(r)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dg(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Rg(n,t,e,r){return new Ag(n,t,e,r)}async function Zc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=B();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ms:d,removedBatchIds:a,addedBatchIds:c}))})})}function Sg(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const y=d.batch,w=y.keys();let S=C.resolve();return w.forEach(D=>{S=S.next(()=>m.getEntry(h,D)).next(x=>{const P=d.docVersions.get(D);K(P!==null,48541),x.version.compareTo(P)<0&&(y.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function tl(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function bg(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});s=e.Ss;const c=[];t.targetChanges.forEach((m,y)=>{const w=s.get(y);if(!w)return;c.push(e.ai.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.ai.addMatchingKeys(o,m.addedDocuments,y)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(y,S),function(x,P,j){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=wg?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,S,m)&&c.push(e.ai.updateTargetData(o,S))});let h=zt(),d=B();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Cg(o,a,t.documentUpdates).next(m=>{h=m.xs,d=m.Os})),!r.isEqual(L.min())){const m=e.ai.getLastRemoteSnapshotVersion(o).next(y=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ss=s,o))}function Cg(n,t,e){let r=B(),s=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=zt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k(Ni,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{xs:a,Os:s}})}function Pg(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Ti),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Vg(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.ai.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.ai.allocateTargetId(r).next(a=>(s=new Jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(r.targetId,r),e.Ds.set(t,r.targetId)),r})}async function si(n,t,e){const r=F(n),s=r.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Xe(a))throw a;k(Ni,"Failed to update sequence numbers for target ".concat(t,": ").concat(a))}r.Ss=r.Ss.remove(t),r.Ds.delete(s.target)}function Xa(n,t,e){const r=F(n);let s=L.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const y=F(h),w=y.Ds.get(m);return w!==void 0?C.resolve(y.Ss.get(w)):y.ai.getTargetData(d,m)}(r,a,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.bs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:B())).next(c=>(Dg(r,gp(t),c),{documents:c,Ns:o})))}function Dg(n,t,e){let r=n.vs.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(t,r)}class Ja{constructor(){this.activeTargetIds=Ip()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ng{constructor(){this.So=new Ja,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,r){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Ja,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class kg{vo(t){}shutdown(){}}/**
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
 */const Za="ConnectivityMonitor";class tu{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){k(Za,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){k(Za,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ur=null;function ii(){return ur===null?ur=function(){return 268435456+Math.round(2147483648*Math.random())}():ur++,"0x"+ur.toString(16)}/**
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
 */const Ms="RestConnection",xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Og{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko="projects/".concat(r,"/databases/").concat(s),this.qo=this.databaseId.database===Er?"project_id=".concat(r):"project_id=".concat(r,"&database_id=").concat(s)}Qo(t,e,r,s,o){const a=ii(),c=this.$o(t,e.toUriEncodedString());k(Ms,"Sending RPC '".concat(t,"' ").concat(a,":"),c,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(h,s,o),this.Ko(t,c,h,r).then(d=>(k(Ms,"Received RPC '".concat(t,"' ").concat(a,": "),d),d),d=>{throw Be(Ms,"RPC '".concat(t,"' ").concat(a," failed with error: "),d,"url: ",c,"request:",r),d})}Wo(t,e,r,s,o,a){return this.Qo(t,e,r,s,o)}Uo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}$o(t,e){const r=xg[t];return"".concat(this.Lo,"/v1/").concat(e,":").concat(r)}terminate(){}}/**
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
 */class Mg{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
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
 */const pt="WebChannelConnection";class Lg extends Og{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,r,s){const o=ii();return new Promise((a,c)=>{const h=new rc;h.setWithCredentials(!0),h.listenOnce(sc.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case cr.NO_ERROR:const m=h.getResponseJson();k(pt,"XHR for RPC '".concat(t,"' ").concat(o," received:"),JSON.stringify(m)),a(m);break;case cr.TIMEOUT:k(pt,"RPC '".concat(t,"' ").concat(o," timed out")),c(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const y=h.getStatus();if(k(pt,"RPC '".concat(t,"' ").concat(o," failed with status:"),y,"response text:",h.getResponseText()),y>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const D=function(P){const j=P.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(j)>=0?j:b.UNKNOWN}(S.status);c(new N(D,S.message))}else c(new N(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(b.UNAVAILABLE,"Connection failed."));break;default:M(9055,{s_:t,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{k(pt,"RPC '".concat(t,"' ").concat(o," completed."))}});const d=JSON.stringify(s);k(pt,"RPC '".concat(t,"' ").concat(o," sending request:"),s),h.send(e,"POST",d,r,15)})}a_(t,e,r){const s=ii(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ac(),c=oc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");k(pt,"Creating RPC '".concat(t,"' stream ").concat(s,": ").concat(m),h);const y=a.createWebChannel(m,h);let w=!1,S=!1;const D=new Mg({Go:P=>{S?k(pt,"Not sending because RPC '".concat(t,"' stream ").concat(s," is closed:"),P):(w||(k(pt,"Opening RPC '".concat(t,"' stream ").concat(s," transport.")),y.open(),w=!0),k(pt,"RPC '".concat(t,"' stream ").concat(s," sending:"),P),y.send(P))},zo:()=>y.close()}),x=(P,j,G)=>{P.listen(j,H=>{try{G(H)}catch(st){setTimeout(()=>{throw st},0)}})};return x(y,yn.EventType.OPEN,()=>{S||(k(pt,"RPC '".concat(t,"' stream ").concat(s," transport opened.")),D.t_())}),x(y,yn.EventType.CLOSE,()=>{S||(S=!0,k(pt,"RPC '".concat(t,"' stream ").concat(s," transport closed")),D.r_())}),x(y,yn.EventType.ERROR,P=>{S||(S=!0,Be(pt,"RPC '".concat(t,"' stream ").concat(s," transport errored. Name:"),P.name,"Message:",P.message),D.r_(new N(b.UNAVAILABLE,"The operation could not be completed")))}),x(y,yn.EventType.MESSAGE,P=>{var j;if(!S){const G=P.data[0];K(!!G,16349);const H=G,st=(H==null?void 0:H.error)||((j=H[0])===null||j===void 0?void 0:j.error);if(st){k(pt,"RPC '".concat(t,"' stream ").concat(s," received error:"),st);const Mt=st.status;let ot=function(_){const T=tt[_];if(T!==void 0)return qc(T)}(Mt),v=st.message;ot===void 0&&(ot=b.INTERNAL,v="Unknown error status: "+Mt+" with message "+st.message),S=!0,D.r_(new N(ot,v)),y.close()}else k(pt,"RPC '".concat(t,"' stream ").concat(s," received:"),G),D.i_(G)}}),x(c,ic.STAT_EVENT,P=>{P.stat===Hs.PROXY?k(pt,"RPC '".concat(t,"' stream ").concat(s," detected buffering proxy")):P.stat===Hs.NOPROXY&&k(pt,"RPC '".concat(t,"' stream ").concat(s," detected no buffering proxy"))}),setTimeout(()=>{D.n_()},0),D}}function Ls(){return typeof document<"u"?document:null}/**
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
 */function jr(n){return new qp(n,!0)}/**
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
 */class el{constructor(t,e,r=1e3,s=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=r,this.c_=s,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff","Backing off for ".concat(s," ms (base delay: ").concat(this.h_," ms, delay with jitter: ").concat(e," ms, last attempt: ").concat(r," ms ago)")),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const eu="PersistentStream";class nl{constructor(t,e,r,s,o,a,c,h){this.bi=t,this.R_=r,this.V_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new el(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===e&&this.B_(r,s)},r=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(t,e){const r=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return k(eu,"close with error: ".concat(t)),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(k(eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fg extends nl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=zp(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?xt(a.readTime):L.min()}(t);return this.listener.Q_(e,r)}U_(t){const e={};e.database=ri(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Js(h)?{documents:Hp(o,h)}:{query:Wp(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=zc(o,a.resumeToken);const d=ti(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Sr(o,a.snapshotVersion.toTimestamp());const d=ti(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Yp(this.serializer,t);r&&(e.labels=r),this.F_(e)}K_(t){const e={};e.database=ri(this.serializer),e.removeTarget=t,this.F_(e)}}class Ug extends nl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=Kp(t.writeResults,t.commitTime),r=xt(t.commitTime);return this.listener.j_(r,e)}H_(){const t={};t.database=ri(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Gp(this.serializer,r))};this.F_(e)}}/**
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
 */class Bg{}class qg extends Bg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(t,ei(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Wo(t,e,r,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Wo(t,ei(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class $g{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra("Connection failed 1 times. Most recent error: ".concat(t.toString())),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e="Could not reach Cloud Firestore backend. ".concat(t,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ea?(jt(e),this.ea=!1):k("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const we="RemoteStore";class jg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{r.enqueueAndForget(async()=>{Se(this)&&(k(we,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.aa.add(4),await Mn(d),d.la.set("Unknown"),d.aa.delete(4),await zr(d)}(this))})}),this.la=new $g(r,s)}}async function zr(n){if(Se(n))for(const t of n.ua)await t(!0)}async function Mn(n){for(const t of n.ua)await t(!1)}function rl(n,t){const e=F(n);e._a.has(t.targetId)||(e._a.set(t.targetId,t),Mi(e)?Oi(e):Je(e).b_()&&xi(e,t))}function ki(n,t){const e=F(n),r=Je(e);e._a.delete(t),r.b_()&&sl(e,t),e._a.size===0&&(r.b_()?r.v_():Se(e)&&e.la.set("Unknown"))}function xi(n,t){if(n.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Je(n).U_(t)}function sl(n,t){n.ha.Ke(t),Je(n).K_(t)}function Oi(n){n.ha=new Lp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n._a.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Je(n).start(),n.la.ta()}function Mi(n){return Se(n)&&!Je(n).w_()&&n._a.size>0}function Se(n){return F(n).aa.size===0}function il(n){n.ha=void 0}async function zg(n){n.la.set("Online")}async function Gg(n){n._a.forEach((t,e)=>{xi(n,t)})}async function Kg(n,t){il(n),Mi(n)?(n.la.ia(t),Oi(n)):n.la.set("Unknown")}async function Hg(n,t,e){if(n.la.set("Online"),t instanceof jc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s._a.delete(c),s.ha.removeTarget(c))}(n,t)}catch(r){k(we,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Cr(n,r)}else if(t instanceof fr?n.ha.Xe(t):t instanceof $c?n.ha.ot(t):n.ha.nt(t),!e.isEqual(L.min()))try{const r=await tl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ha.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o._a.get(d);m&&o._a.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o._a.get(h);if(!m)return;o._a.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),sl(o,h);const y=new Jt(m.target,h,d,m.sequenceNumber);xi(o,y)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){k(we,"Failed to raise snapshot:",r),await Cr(n,r)}}async function Cr(n,t,e){if(!Xe(t))throw t;n.aa.add(1),await Mn(n),n.la.set("Offline"),e||(e=()=>tl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(we,"Retrying IndexedDB access"),await e(),n.aa.delete(1),await zr(n)})}function ol(n,t){return t().catch(e=>Cr(n,e,t))}async function Gr(n){const t=F(n),e=ue(t);let r=t.oa.length>0?t.oa[t.oa.length-1].batchId:Ti;for(;Wg(t);)try{const s=await Pg(t.localStore,r);if(s===null){t.oa.length===0&&e.v_();break}r=s.batchId,Qg(t,s)}catch(s){await Cr(t,s)}al(t)&&ul(t)}function Wg(n){return Se(n)&&n.oa.length<10}function Qg(n,t){n.oa.push(t);const e=ue(n);e.b_()&&e.W_&&e.G_(t.mutations)}function al(n){return Se(n)&&!ue(n).w_()&&n.oa.length>0}function ul(n){ue(n).start()}async function Yg(n){ue(n).H_()}async function Xg(n){const t=ue(n);for(const e of n.oa)t.G_(e.mutations)}async function Jg(n,t,e){const r=n.oa.shift(),s=Si.from(r,t,e);await ol(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gr(n)}async function Zg(n,t){t&&ue(n).W_&&await async function(r,s){if(function(a){return Op(a)&&a!==b.ABORTED}(s.code)){const o=r.oa.shift();ue(r).D_(),await ol(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gr(r)}}(n,t),al(n)&&ul(n)}async function nu(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(we,"RemoteStore received new credentials");const r=Se(e);e.aa.add(3),await Mn(e),r&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await zr(e)}async function t_(n,t){const e=F(n);t?(e.aa.delete(2),await zr(e)):t||(e.aa.add(2),await Mn(e),e.la.set("Unknown"))}function Je(n){return n.Pa||(n.Pa=function(e,r,s){const o=F(e);return o.Y_(),new Fg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:zg.bind(null,n),Jo:Gg.bind(null,n),Zo:Kg.bind(null,n),Q_:Hg.bind(null,n)}),n.ua.push(async t=>{t?(n.Pa.D_(),Mi(n)?Oi(n):n.la.set("Unknown")):(await n.Pa.stop(),il(n))})),n.Pa}function ue(n){return n.Ta||(n.Ta=function(e,r,s){const o=F(e);return o.Y_(),new Ug(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:Yg.bind(null,n),Zo:Zg.bind(null,n),z_:Xg.bind(null,n),j_:Jg.bind(null,n)}),n.ua.push(async t=>{t?(n.Ta.D_(),await Gr(n)):(await n.Ta.stop(),n.oa.length>0&&(k(we,"Stopping write stream with ".concat(n.oa.length," pending writes")),n.oa=[]))})),n.Ta}/**
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
 */class Li{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Li(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(n,t){if(jt("AsyncQueue","".concat(t,": ").concat(n)),Xe(n))return new N(b.UNAVAILABLE,"".concat(t,": ").concat(n));throw n}/**
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
 */class Fe{static emptySet(t){return new Fe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Tn(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const r=new Fe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ru{constructor(){this.Ia=new X(O.comparator)}track(t){const e=t.doc.key,r=this.Ia.get(e);r?t.type!==0&&r.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&r.type!==1?this.Ia=this.Ia.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Ia=this.Ia.remove(e):t.type===1&&r.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,Ea:r}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,r)=>{t.push(r)}),t}}class He{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new He(t,e,Fe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class e_{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class n_{constructor(){this.queries=su(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=su(),o.forEach((a,c)=>{for(const h of c.Ra)h.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function su(){return new Re(n=>Cc(n),Fr)}async function cl(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Va()&&t.ma()&&(r=2):(o=new e_,r=t.ma()?0:1);try{switch(r){case 0:o.Aa=await e.onListen(s,!0);break;case 1:o.Aa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Fi(a,"Initialization of query '".concat(Ne(t.query),"' failed"));return void t.onError(c)}e.queries.set(s,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&Ui(e)}async function ll(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Ra.indexOf(t);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?s=t.ma()?0:1:!o.Va()&&t.ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function r_(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Ra)c.pa(s)&&(r=!0);a.Aa=s}}r&&Ui(e)}function s_(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Ra)o.onError(e);r.queries.delete(t)}function Ui(n){n.fa.forEach(t=>{t.next()})}var oi,iu;(iu=oi||(oi={})).ya="default",iu.Cache="cache";class hl{constructor(t,e,r){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new He(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const r=e!=="Offline";return(!this.options.Fa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==oi.Cache}}/**
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
 */class dl{constructor(t){this.key=t}}class fl{constructor(t){this.key=t}}class i_{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=B(),this.mutatedKeys=B(),this.Ua=Pc(t),this.Ka=new Fe(this.Ua)}get Wa(){return this.qa}Ga(t,e){const r=e?e.za:new ru,s=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const w=s.get(m),S=Ur(this.query,y)?y:null,D=!!w&&this.mutatedKeys.has(w.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;w&&S?w.data.isEqual(S.data)?D!==x&&(r.track({type:3,doc:S}),P=!0):this.ja(w,S)||(r.track({type:2,doc:S}),P=!0,(h&&this.Ua(S,h)>0||d&&this.Ua(S,d)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),P=!0):w&&!S&&(r.track({type:1,doc:w}),P=!0,(h||d)&&(c=!0)),P&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ka:a,za:r,ys:c,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((m,y)=>function(S,D){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:P})}};return x(S)-x(D)}(m.type,y.type)||this.Ua(m.doc,y.doc)),this.Ha(r),s=s!=null&&s;const c=e&&!s?this.Ja():[],h=this.$a.size===0&&this.current&&!s?1:0,d=h!==this.Qa;return this.Qa=h,a.length!==0||d?{snapshot:new He(this.query,t.Ka,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new ru,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=B(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const e=[];return t.forEach(r=>{this.$a.has(r)||e.push(new fl(r))}),this.$a.forEach(r=>{t.has(r)||e.push(new dl(r))}),e}Xa(t){this.qa=t.Ns,this.$a=B();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return He.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Bi="SyncEngine";class o_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class a_{constructor(t){this.key=t,this.tu=!1}}class u_{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new Re(c=>Cc(c),Fr),this.iu=new Map,this.su=new Set,this.ou=new X(O.comparator),this._u=new Map,this.au=new Pi,this.uu={},this.cu=new Map,this.lu=Ke.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function c_(n,t,e=!0){const r=Tl(n);let s;const o=r.ru.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.eu()):s=await ml(r,t,e,!0),s}async function l_(n,t){const e=Tl(n);await ml(e,t,!0,!1)}async function ml(n,t,e,r){const s=await Vg(n.localStore,Nt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await h_(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&rl(n.remoteStore,s),c}async function h_(n,t,e,r,s){n.Pu=(y,w,S)=>async function(x,P,j,G){let H=P.view.Ga(j);H.ys&&(H=await Xa(x.localStore,P.query,!1).then(({documents:v})=>P.view.Ga(v,H)));const st=G&&G.targetChanges.get(P.targetId),Mt=G&&G.targetMismatches.get(P.targetId)!=null,ot=P.view.applyChanges(H,x.isPrimaryClient,st,Mt);return au(x,P.targetId,ot.Ya),ot.snapshot}(n,y,w,S);const o=await Xa(n.localStore,t,!0),a=new i_(t,o.Ns),c=a.Ga(o.documents),h=On.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);au(n,e,d.Ya);const m=new o_(t,e,a);return n.ru.set(t,m),n.iu.has(e)?n.iu.get(e).push(t):n.iu.set(e,[t]),d.snapshot}async function d_(n,t,e){const r=F(n),s=r.ru.get(t),o=r.iu.get(s.targetId);if(o.length>1)return r.iu.set(s.targetId,o.filter(a=>!Fr(a,t))),void r.ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await si(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ki(r.remoteStore,s.targetId),ai(r,s.targetId)}).catch(Ye)):(ai(r,s.targetId),await si(r.localStore,s.targetId,!0))}async function f_(n,t){const e=F(n),r=e.ru.get(t),s=e.iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ki(e.remoteStore,r.targetId))}async function m_(n,t,e){const r=v_(n);try{const s=await function(a,c){const h=F(a),d=nt.now(),m=c.reduce((S,D)=>S.add(D.key),B());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=zt(),x=B();return h.Cs.getEntries(S,m).next(P=>{D=P,D.forEach((j,G)=>{G.isValidDocument()||(x=x.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(P=>{y=P;const j=[];for(const G of c){const H=Vp(G,y.get(G.key).overlayedDocument);H!=null&&j.push(new de(G.key,H,vc(H.value.mapValue),kt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,j,c)}).next(P=>{w=P;const j=P.applyToLocalDocumentSet(y,x);return h.documentOverlayCache.saveOverlays(S,P.batchId,j)})}).then(()=>({batchId:w.batchId,changes:Dc(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.uu[a.currentUser.toKey()];d||(d=new X(U)),d=d.insert(c,h),a.uu[a.currentUser.toKey()]=d}(r,s.batchId,e),await Ln(r,s.changes),await Gr(r.remoteStore)}catch(s){const o=Fi(s,"Failed to persist write");e.reject(o)}}async function pl(n,t){const e=F(n);try{const r=await bg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e._u.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?K(a.tu,14607):s.removedDocuments.size>0&&(K(a.tu,42227),a.tu=!1))}),await Ln(e,r,t)}catch(r){await Ye(r)}}function ou(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ru.forEach((o,a)=>{const c=a.view.ga(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((m,y)=>{for(const w of y.Ra)w.ga(c)&&(d=!0)}),d&&Ui(h)}(r.eventManager,t),s.length&&r.nu.Q_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function p_(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r._u.get(t),o=s&&s.key;if(o){let a=new X(O.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const c=B().add(o),h=new $r(L.min(),new Map,new X(U),a,c);await pl(r,h),r.ou=r.ou.remove(o),r._u.delete(t),qi(r)}else await si(r.localStore,t,!1).then(()=>ai(r,t,e)).catch(Ye)}async function g_(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Sg(e.localStore,t);_l(e,r,null),gl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(e,s)}catch(s){await Ye(s)}}async function __(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(y=>(K(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);_l(r,t,e),gl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ln(r,s)}catch(s){await Ye(s)}}function gl(n,t){(n.cu.get(t)||[]).forEach(e=>{e.resolve()}),n.cu.delete(t)}function _l(n,t,e){const r=F(n);let s=r.uu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.uu[r.currentUser.toKey()]=s}}function ai(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.iu.get(t))n.ru.delete(r),e&&n.nu.Tu(r,e);n.iu.delete(t),n.isPrimaryClient&&n.au.Ur(t).forEach(r=>{n.au.containsKey(r)||yl(n,r)})}function yl(n,t){n.su.delete(t.path.canonicalString());const e=n.ou.get(t);e!==null&&(ki(n.remoteStore,e),n.ou=n.ou.remove(t),n._u.delete(e),qi(n))}function au(n,t,e){for(const r of e)r instanceof dl?(n.au.addReference(r.key,t),y_(n,r)):r instanceof fl?(k(Bi,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,t),n.au.containsKey(r.key)||yl(n,r.key)):M(19791,{Iu:r})}function y_(n,t){const e=t.key,r=e.path.canonicalString();n.ou.get(e)||n.su.has(r)||(k(Bi,"New document in limbo: "+e),n.su.add(r),qi(n))}function qi(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const t=n.su.values().next().value;n.su.delete(t);const e=new O(Q.fromString(t)),r=n.lu.next();n._u.set(r,new a_(e)),n.ou=n.ou.insert(e,r),rl(n.remoteStore,new Jt(Nt(wi(e.path)),r,"TargetPurposeLimboResolution",xr.le))}}async function Ln(n,t,e){const r=F(n),s=[],o=[],a=[];r.ru.isEmpty()||(r.ru.forEach((c,h)=>{a.push(r.Pu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Di.Ps(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.nu.Q_(s),await async function(h,d){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,w=>C.forEach(w.ls,S=>m.persistence.referenceDelegate.addReference(y,w.targetId,S)).next(()=>C.forEach(w.hs,S=>m.persistence.referenceDelegate.removeReference(y,w.targetId,S)))))}catch(y){if(!Xe(y))throw y;k(Ni,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const S=m.Ss.get(w),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);m.Ss=m.Ss.insert(w,x)}}}(r.localStore,o))}async function T_(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(Bi,"User change. New user:",t.toKey());const r=await Zc(e.localStore,t);e.currentUser=t,function(o,a){o.cu.forEach(c=>{c.forEach(h=>{h.reject(new N(b.CANCELLED,a))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ln(e,r.Ms)}}function E_(n,t){const e=F(n),r=e._u.get(t);if(r&&r.tu)return B().add(r.key);{let s=B();const o=e.iu.get(t);if(!o)return s;for(const a of o){const c=e.ru.get(a);s=s.unionWith(c.view.Wa)}return s}}function Tl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=pl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=E_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=p_.bind(null,t),t.nu.Q_=r_.bind(null,t.eventManager),t.nu.Tu=s_.bind(null,t.eventManager),t}function v_(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=g_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=__.bind(null,t),t}class Pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=jr(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Rg(this.persistence,new Ig,t.initialUser,this.serializer)}Ru(t){return new Jc(Vi.Ei,this.serializer)}Au(t){return new Ng}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pr.provider={build:()=>new Pr};class I_ extends Pr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){K(this.persistence.referenceDelegate instanceof br,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ag(r,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Jc(r=>br.Ei(r,e),this.serializer)}}class ui{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ou(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=T_.bind(null,this.syncEngine),await t_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new n_}()}createDatastore(t){const e=jr(t.databaseInfo.databaseId),r=function(o){return new Lg(o)}(t.databaseInfo);return function(o,a,c,h){return new qg(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new jg(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ou(this.syncEngine,e,0),function(){return tu.C()?new tu:new kg}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const y=new u_(s,o,a,c,h,d);return m&&(y.hu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k(we,"RemoteStore shutting down."),o.aa.add(5),await Mn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ui.provider={build:()=>new ui};/**
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
 */class El{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ce="FirestoreClient";class w_{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k(ce,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k(ce,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Fs(n,t){n.asyncQueue.verifyOperationInProgress(),k(ce,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function uu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await A_(n);k(ce,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>nu(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>nu(t.remoteStore,s)),n._onlineComponents=t}async function A_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ce,"Using user provided OfflineComponentProvider");try{await Fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Be("Error using user provided cache. Falling back to memory cache: "+e),await Fs(n,new Pr)}}else k(ce,"Using default OfflineComponentProvider"),await Fs(n,new I_(void 0));return n._offlineComponents}async function vl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ce,"Using user provided OnlineComponentProvider"),await uu(n,n._uninitializedComponentsProvider._online)):(k(ce,"Using default OnlineComponentProvider"),await uu(n,new ui))),n._onlineComponents}function R_(n){return vl(n).then(t=>t.syncEngine)}async function Il(n){const t=await vl(n),e=t.eventManager;return e.onListen=c_.bind(null,t.syncEngine),e.onUnlisten=d_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=l_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=f_.bind(null,t.syncEngine),e}function S_(n,t,e={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new El({next:w=>{m.yu(),a.enqueueAndForget(()=>ll(o,y));const S=w.docs.has(c);!S&&w.fromCache?d.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new hl(wi(c.path),m,{includeMetadataChanges:!0,Fa:!0});return cl(o,y)}(await Il(n),n.asyncQueue,t,e,r)),r.promise}function b_(n,t,e={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new El({next:w=>{m.yu(),a.enqueueAndForget(()=>ll(o,y)),w.fromCache&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new hl(c,m,{includeMetadataChanges:!0,Fa:!0});return cl(o,y)}(await Il(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function wl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const cu=new Map;/**
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
 */function Al(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,"Function ".concat(n,"() cannot be called with an empty ").concat(t,"."))}function C_(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,"".concat(n," and ").concat(e," cannot be used together."))}function lu(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(n," has ").concat(n.length,"."))}function hu(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(n," has ").concat(n.length,"."))}function Kr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n="".concat(n.substring(0,20),"...")),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?"a custom ".concat(t," object"):"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Gt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kr(n);throw new N(b.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(e))}}return n}/**
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
 */const Rl="firestore.googleapis.com",du=!0;class fu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rl,this.ssl=du}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:du;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Xc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ig)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}C_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(o.timeoutSeconds," (must not be NaN)"));if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(o.timeoutSeconds," (minimum allowed value is 5)"));if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(o.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Om;switch(r.type){case"firstParty":return new Um(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=cu.get(e);r&&(k("ComponentProvider","Removing Datastore"),cu.delete(e),r.terminate())}(this),Promise.resolve()}}function P_(n,t,e,r={}){var s;const o=(n=Gt(n,Hr))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c="".concat(t,":").concat(e);o.host!==Rl&&o.host!==c&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!Ue(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=gt.MOCK_USER;else{d=Gh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new gt(y)}n._authCredentials=new Mm(new cc(d,m))}}/**
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
 */class Kt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Kt(this.firestore,t,this._query)}}class Et{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class ne extends Kt{constructor(t,e,r){super(t,e,wi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new O(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function dy(n,t,...e){if(n=bt(n),Al("collection","path",t),n instanceof Hr){const r=Q.fromString(t,...e);return hu(r),new ne(n,null,r)}{if(!(n instanceof Et||n instanceof ne))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return hu(r),new ne(n.firestore,null,r)}}function fy(n,t,...e){if(n=bt(n),arguments.length===1&&(t=hc.newId()),Al("doc","path",t),n instanceof Hr){const r=Q.fromString(t,...e);return lu(r),new Et(n,null,new O(r))}{if(!(n instanceof Et||n instanceof ne))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return lu(r),new Et(n.firestore,n instanceof ne?n.converter:null,new O(r))}}/**
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
 */const mu="AsyncQueue";class pu{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new el(this,"async_queue_retry"),this.ju=()=>{const r=Ls();r&&k(mu,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=t;const e=Ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Ls();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new Bt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Xe(t))throw t;k(mu,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(r=>{throw this.Ku=r,this.Wu=!1,jt("INTERNAL UNHANDLED ERROR: ",gu(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=e,e}enqueueAfterDelay(t,e,r){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const s=Li.createAndSchedule(this,t,e,r,o=>this.Xu(o));return this.Uu.push(s),s}Ju(){this.Ku&&M(47125,{ec:gu(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function gu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),t}class Fn extends Hr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new pu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pu(t),this._firestoreClient=void 0,await t}}}function V_(n,t){const e=Du(),r=Er,s=kn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=jh("firestore");o&&P_(s,...o)}return s}function $i(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||D_(n),n._firestoreClient}function D_(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new tp(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,wl(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new w_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class We{constructor(t){this._byteString=t}static fromBase64String(t){try{return new We(lt.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new We(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Wr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Qr{constructor(t){this._methodName=t}}/**
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
 */class ji{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
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
 */class zi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const N_=/^__.*__$/;class k_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new de(t,this.data,this.fieldMask,e,this.fieldTransforms):new xn(t,this.data,e,this.fieldTransforms)}}class Sl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new de(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function bl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{oc:n})}}class Yr{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new Yr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s.lc(t),s}hc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Vr(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(bl(this.oc)&&N_.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class x_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||jr(t)}dc(t,e,r,s=!1){return new Yr({oc:t,methodName:e,Ec:r,path:ct.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xr(n){const t=n._freezeSettings(),e=jr(n._databaseId);return new x_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function O_(n,t,e,r,s,o={}){const a=n.dc(o.merge||o.mergeFields?2:0,t,e,s);Ki("Data must be an object, but it was:",a,r);const c=Pl(r,a);let h,d;if(o.merge)h=new Rt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=ci(t,y,e);if(!a.contains(w))throw new N(b.INVALID_ARGUMENT,"Field '".concat(w,"' is specified in your field mask but missing from your input data."));Dl(m,w)||m.push(w)}h=new Rt(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new k_(new It(c),h,d)}class Jr extends Qr{_toFieldTransform(t){if(t.oc!==2)throw t.oc===1?t.Tc("".concat(this._methodName,"() can only appear at the top level of your update data")):t.Tc("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Jr}}function M_(n,t,e){return new Yr({oc:3,Ec:t.settings.Ec,methodName:n._methodName,cc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Gi extends Qr{constructor(t,e){super(t),this.Ac=e}_toFieldTransform(t){const e=M_(this,t,!0),r=this.Ac.map(o=>Ze(o,e)),s=new Ge(r);return new Sp(t.path,s)}isEqual(t){return t instanceof Gi&&Ue(this.Ac,t.Ac)}}function L_(n,t,e,r){const s=n.dc(1,t,e);Ki("Data must be an object, but it was:",s,r);const o=[],a=It.empty();he(r,(h,d)=>{const m=Hi(t,h,e);d=bt(d);const y=s.hc(m);if(d instanceof Jr)o.push(m);else{const w=Ze(d,y);w!=null&&(o.push(m),a.set(m,w))}});const c=new Rt(o);return new Sl(a,c,s.fieldTransforms)}function F_(n,t,e,r,s,o){const a=n.dc(1,t,e),c=[ci(t,r,e)],h=[s];if(o.length%2!=0)throw new N(b.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(let w=0;w<o.length;w+=2)c.push(ci(t,o[w])),h.push(o[w+1]);const d=[],m=It.empty();for(let w=c.length-1;w>=0;--w)if(!Dl(d,c[w])){const S=c[w];let D=h[w];D=bt(D);const x=a.hc(S);if(D instanceof Jr)d.push(S);else{const P=Ze(D,x);P!=null&&(d.push(S),m.set(S,P))}}const y=new Rt(d);return new Sl(m,y,a.fieldTransforms)}function Cl(n,t,e,r=!1){return Ze(e,n.dc(r?4:3,t))}function Ze(n,t){if(Vl(n=bt(n)))return Ki("Unsupported field value:",t,n),Pl(n,t);if(n instanceof Qr)return function(r,s){if(!bl(s.oc))throw s.Tc("".concat(r._methodName,"() can only be used with update() and set()"));if(!s.path)throw s.Tc("".concat(r._methodName,"() is not currently supported inside arrays"));const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ze(c,s.Pc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Sr(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sr(s.serializer,o)}}if(r instanceof ji)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:zc(s.serializer,r._byteString)};if(r instanceof Et){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Tc("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(o.projectId,"/").concat(o.database));return{referenceValue:Ci(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zi)return function(a,c){return{mapValue:{fields:{[Tc]:{stringValue:Ec},[vr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Tc("VectorValues must only contain numeric values.");return Ri(c.serializer,d)})}}}}}}(r,s);throw s.Tc("Unsupported field value: ".concat(Kr(r)))}(n,t)}function Pl(n,t){const e={};return fc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(n,(r,s)=>{const o=Ze(s,t.uc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Vl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof ji||n instanceof We||n instanceof Et||n instanceof Qr||n instanceof zi)}function Ki(n,t,e){if(!Vl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Kr(e);throw r==="an object"?t.Tc(n+" a custom object"):t.Tc(n+" "+r)}}function ci(n,t,e){if((t=bt(t))instanceof Wr)return t._internalPath;if(typeof t=="string")return Hi(n,t);throw Vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const U_=new RegExp("[~\\*/\\[\\]]");function Hi(n,t,e){if(t.search(U_)>=0)throw Vr("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),n,!1,void 0,e);try{return new Wr(...t.split("."))._internalPath}catch(r){throw Vr("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),n,!1,void 0,e)}}function Vr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c="Function ".concat(t,"() called with invalid data");e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=" in field ".concat(r)),a&&(h+=" in document ".concat(s)),h+=")"),new N(b.INVALID_ARGUMENT,c+n+h)}function Dl(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Wi{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new B_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class B_ extends Wi{data(){return super.data()}}function Zr(n,t){return typeof t=="string"?Hi(n,t):t instanceof Wr?t._internalPath:t._delegate._internalPath}/**
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
 */function q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qi{}class ts extends Qi{}function my(n,t,...e){let r=[];t instanceof Qi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Yi).length,c=o.filter(h=>h instanceof es).length;if(a>1||a>0&&c>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class es extends ts{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new es(t,e,r)}_apply(t){const e=this._parse(t);return Nl(t._query,e),new Kt(t.firestore,t.converter,Zs(t._query,e))}_parse(t){const e=Xr(t.firestore);return function(o,a,c,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(b.INVALID_ARGUMENT,"Invalid Query. You can't perform '".concat(m,"' queries on documentId()."));if(m==="in"||m==="not-in"){yu(y,m);const D=[];for(const x of y)D.push(_u(h,o,x));w={arrayValue:{values:D}}}else w=_u(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||yu(y,m),w=Cl(c,a,y,m==="in"||m==="not-in");return et.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function py(n,t,e){const r=t,s=Zr("where",n);return es._create(s,r,e)}class Yi extends Qi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Yi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Pt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Nl(a,h),a=Zs(a,h)}(t._query,e),new Kt(t.firestore,t.converter,Zs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xi extends ts{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Xi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Dn(o,a)}(t._query,this._field,this._direction);return new Kt(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Ae(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function gy(n,t="asc"){const e=t,r=Zr("orderBy",n);return Xi._create(r,e)}class Ji extends ts{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ji(t,e,r)}_apply(t){return new Kt(t.firestore,t.converter,wr(t._query,this._limit,this._limitType))}}function _y(n){return Ji._create("limit",n,"F")}class Zi extends ts{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Zi(t,e,r)}_apply(t){const e=$_(t,this.type,this._docOrFields,this._inclusive);return new Kt(t.firestore,t.converter,function(s,o){return new Ae(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,o,s.endAt)}(t._query,e))}}function yy(...n){return Zi._create("startAfter",n,!1)}function $_(n,t,e,r){if(e[0]=bt(e[0]),e[0]instanceof Wi)return function(o,a,c,h,d){if(!h)throw new N(b.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for ".concat(c,"()."));const m=[];for(const y of Le(o))if(y.field.isKeyField())m.push(Ir(a,h.key));else{const w=h.data.field(y.field);if(Mr(w))throw new N(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+y.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=y.field.canonicalString();throw new N(b.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '".concat(S,"' (used as the orderBy) does not exist."))}m.push(w)}return new ze(m,d)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=Xr(n.firestore);return function(a,c,h,d,m,y){const w=a.explicitOrderBy;if(m.length>w.length)throw new N(b.INVALID_ARGUMENT,"Too many arguments provided to ".concat(d,"(). The number of arguments must be less than or equal to the number of orderBy() clauses"));const S=[];for(let D=0;D<m.length;D++){const x=m[D];if(w[D].field.isKeyField()){if(typeof x!="string")throw new N(b.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in ".concat(d,"(), but got a ").concat(typeof x));if(!Ai(a)&&x.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by documentId(), the value passed to ".concat(d,"() must be a plain document ID, but '").concat(x,"' contains a slash."));const P=a.path.child(Q.fromString(x));if(!O.isDocumentKey(P))throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by documentId(), the value passed to ".concat(d,"() must result in a valid document path, but '").concat(P,"' is not because it contains an odd number of segments."));const j=new O(P);S.push(Ir(c,j))}else{const P=Cl(h,d,x);S.push(P)}}return new ze(S,y)}(n._query,n.firestore._databaseId,s,t,e,r)}}function _u(n,t,e){if(typeof(e=bt(e))=="string"){if(e==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ai(t)&&e.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(e,"' contains a '/' character."));const r=t.path.child(Q.fromString(e));if(!O.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r,"' is not because it has an odd number of segments (").concat(r.length,")."));return Ir(n,new O(r))}if(e instanceof Et)return Ir(n,e._key);throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(Kr(e),"."))}function yu(n,t){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '".concat(t.toString(),"' filters."))}function Nl(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(b.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '".concat(t.op.toString(),"' filter.")):new N(b.INVALID_ARGUMENT,"Invalid query. You cannot use '".concat(t.op.toString(),"' filters with '").concat(e.toString(),"' filters."))}class j_{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return he(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[vr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new zi(o)}convertGeoPoint(t){return new ji(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Lr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Cn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);K(Yc(r),9688,{name:t});const s=new Pn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||jt("Document ".concat(o," contains a document reference within a different database (").concat(s.projectId,"/").concat(s.database,") which is not supported. It will be treated as a reference in the current database (").concat(e.projectId,"/").concat(e.database,") instead.")),o}}/**
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
 */function z_(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kl extends Wi{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class mr extends kl{data(t={}){return super.data(t)}}class G_{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new vn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new mr(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:K_(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function K_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
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
 */function Ty(n){n=Gt(n,Et);const t=Gt(n.firestore,Fn);return S_($i(t),n._key).then(e=>H_(t,n,e))}class xl extends j_{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Et(this.firestore,null,e)}}function Ey(n){n=Gt(n,Kt);const t=Gt(n.firestore,Fn),e=$i(t),r=new xl(t);return q_(n._query),b_(e,n._query).then(s=>new G_(t,r,n,s))}function vy(n,t,e){n=Gt(n,Et);const r=Gt(n.firestore,Fn),s=z_(n.converter,t,e);return Ol(r,[O_(Xr(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,kt.none())])}function Iy(n,t,e,...r){n=Gt(n,Et);const s=Gt(n.firestore,Fn),o=Xr(s);let a;return a=typeof(t=bt(t))=="string"||t instanceof Wr?F_(o,"updateDoc",n._key,t,e,r):L_(o,"updateDoc",n._key,t),Ol(s,[a.toMutation(n._key,kt.exists(!0))])}function Ol(n,t){return function(r,s){const o=new Bt;return r.asyncQueue.enqueueAndForget(async()=>m_(await R_(r),s,o)),o.promise}($i(n),t)}function H_(n,t,e){const r=e.docs.get(t._key),s=new xl(n);return new kl(n,s,t._key,r,new vn(e.hasPendingWrites,e.fromCache),t.converter)}function wy(...n){return new Gi("arrayUnion",n)}(function(t,e=!0){(function(s){Qe=s})(nf),re(new qt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Fn(new Lm(r.getProvider("auth-internal")),new Bm(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Dt(va,Ia,t),Dt(va,Ia,"esm2017")})();const W_={apiKey:"AIzaSyDz2t5TXGudA9sqRs9zlTYTwcutS9Liqbk",authDomain:"amdomain-5bf9b.firebaseapp.com",projectId:"amdomain-5bf9b",storageBucket:"amdomain-5bf9b.firebasestorage.app",messagingSenderId:"456731909675",appId:"1:456731909675:web:e7005450bfe810fd49d46e",measurementId:"G-7QXZH37VCE"},Q_=Vu(W_);Dm(Q_);const Ay=V_(),Y_={},X_={class:"relative w-full before:bg-stone-100 before:-z-100 before:absolute before:top-0 before:left-0 before:content-[''] before:h-full before:w-full xl:px-10 md:px-7 max-md:px-3"};function J_(n,t){return Me(),Oe("div",X_,[_h(n.$slots,"default")])}const Z_=Nh(Y_,[["render",J_]]),ty=["innerHTML"],Tu=30,ey=130,Ry=Eu({__name:"TransformTexts",props:{text:{}},setup(n){const t={zh:[19968,40959],ja:[12352,12447],en:[0,127],num:[48,57],sym:[32,47]},e=y=>{switch(!0){case(y>=t.zh[0]&&y<=t.zh[1]):return String.fromCharCode(~~(Math.random()*(t.zh[1]-t.zh[0]+1))+t.zh[0]);case(y>=t.en[0]&&y<=t.en[1]):return String.fromCharCode(~~(Math.random()*(t.en[1]-t.en[0]+1))+t.en[0]);case(y>=t.ja[0]&&y<=t.ja[1]):return String.fromCharCode(~~(Math.random()*(t.ja[1]-t.ja[0]+1))+t.ja[0]);case(y>=t.num[0]&&y<=t.num[1]):return String.fromCharCode(~~(Math.random()*(t.num[1]-t.num[0]+1))+t.num[0]);case(y>=t.sym[0]&&y<=t.sym[1]):return String.fromCharCode(~~(Math.random()*(t.sym[1]-t.sym[0]+1))+t.sym[0]);default:return String.fromCharCode(~~(Math.random()*65535))}},r=y=>{const w=y.split(""),S=w.map(D=>e(D.codePointAt(0)||~~(Math.random()*65535)));return{originTexts:w,unicodeTexts:S}},s=Us([]),o=Us([]);let a=[];const c=()=>{a.forEach(y=>clearTimeout(y)),a=[],s.value=[],o.value=[]},h=async y=>{const w=y.split(" ").filter(S=>S!=="");s.value=[];for(let S of w)s.value.push(r(S));o.value=s.value.map(S=>new Array(S.originTexts.length).fill(""));for(let S=0;S<o.value.length;S++){const D=s.value[S],x=o.value[S];(async()=>{for(let P=0;P<s.value[S].originTexts.length;P++){let j=setTimeout(()=>{x[P]=D.unicodeTexts[P]},P*Tu);a.push(j);let G=setTimeout(()=>{x[P]=D.originTexts[P]},P*Tu+ey);a.push(G)}})()}},d=vu(()=>o.value.map(y=>"".concat(y.join("")))),m=n;return h(m.text),yh(()=>m.text,(y,w)=>{c(),h(y)}),(y,w)=>(Me(!0),Oe(Th,null,Eh(Bs(d),S=>(Me(),Oe("p",{class:"break-all",innerHTML:S},null,8,ty))),256))}}),ny="/amDomain/logo.svg",ry={class:"flex items-center w-full h-full xl:gap-7 md:gap-6 max-md:gap-4"},sy={class:"flex h-full items-center xl:w-20 xl:p-5 md:w-20 md:p-4 <!-- 統一使用Tailwind內建尺寸 --> max-md:w-15 max-md:p-3"},iy={class:"cursor-pointer"},oy={class:"flex h-full items-center max-md:text-sm"},ay={class:"flex h-full items-center max-md:text-sm"},uy={class:"flex h-full items-center max-md:text-sm"},cy={key:1,class:"select-none flex items-center font-bold text-stone-500/50"},Sy=Eu({__name:"NavigationTempl",setup(n){var h;const t=vh();t.name=(h=localStorage.getItem("user"))!=null?h:"";const e=wh(),r=Ch(),s=Ih();vu(()=>e.path.split("/")[1]||"index");const o=Us(),a=d=>{r.push(d)},c=Ah(bh);return Rh(()=>{Sh(()=>{const d=c.value.pageTwoSideGapY-s.y.value;o.value.style.marginTop="".concat(d>0?d:0,"px")})}),(d,m)=>{const y=Ph("router-link"),w=Z_;return Me(),Oe("div",{ref_key:"navigationBar",ref:o,class:"fixed flex top-0 z-[100] bg-stone-100 border-b border-stone-400 xl:w-[calc(100%-2.5rem)] xl:h-25 xl:mt-5 md:w-[calc(100%-2rem)] md:h-20 md:mt-4 max-md:w-full max-md:h-15 max-md:mt-0"},[Ss(w,{as:"nav"},{default:bs(()=>[Xt("ul",ry,[Xt("li",sy,[Xt("div",iy,[Ss(y,{to:"/"},{default:bs(()=>m[2]||(m[2]=[Xt("img",{class:"w-full h-full",src:ny,alt:"同領地"},null,-1)])),_:1})])]),Xt("li",oy,[Ss(y,{to:"/topics"},{default:bs(()=>m[3]||(m[3]=[Vh(" 討論區 ")])),_:1})]),Xt("li",ay,[Xt("div",{class:"cursor-pointer flex items-center",onClick:m[0]||(m[0]=S=>a("/posts"))}," 發文 ")]),Xt("li",uy,[Bs(t).name===""?(Me(),Oe("div",{key:0,class:"cursor-pointer flex items-center",onClick:m[1]||(m[1]=S=>a("/logins"))}," +登入+ ")):(Me(),Oe("div",cy," 哈瞜 "+Dh(Bs(t).name),1))])])]),_:1})],512)}}});export{Ay as D,Nh as _,Sy as a,Z_ as b,Ry as c,fy as d,dy as e,Ey as f,Ty as g,wy as h,yy as i,_y as l,gy as o,my as q,vy as s,Iy as u,py as w};
