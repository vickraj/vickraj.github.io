"use strict";var precacheConfig=[["/index.html","a93bea5aadbea0df17858ec5b08200f5"],["/static/css/main.1ea97491.css","c31017f811a14d4e07711f5e2ed7740a"],["/static/js/main.2a155e93.js","e36fe5c12d2ebc7a94d04d4775e83000"],["/static/media/ec.14452c7f.png","14452c7fbced1517b9cf65a556cd3d6b"],["/static/media/ecl.7c4112de.ttf","7c4112dea214e16c47500f10fb4b3f90"],["/static/media/fortuna.c6013a38.png","c6013a38111aaa2c3ee0722f798c9a56"],["/static/media/gmail.847c083c.png","847c083cc09040091439e3c05d1fedde"],["/static/media/morse.3a370bc4.png","3a370bc4a3cab993902a2b937239d24c"],["/static/media/nmf_topic.b976293b.png","b976293bbc53b3c190297861520dbbe5"],["/static/media/phone.459d993f.png","459d993fb25d5433e9158ecae26d4ea4"],["/static/media/pythagorean.57a9b2e8.png","57a9b2e8370a378c5894b2f173cba00d"],["/static/media/topics_30.d9484ace.png","d9484ace47a8ac2401c9d7ef78fbdc1a"],["/static/media/trianglify.278da52a.png","278da52a62cd23c5929efe5671c3fa9f"],["/static/media/twitter.2c64644f.png","2c64644f9a906fad8f7a5473120702ed"],["/static/media/website.dedeb7fb.png","dedeb7fbfc4f86493d9ef76c8f34c46b"],["/static/media/whgl2.1584908e.png","1584908efb3eb4de283b9e3a4d2ecb2f"],["/static/media/whgl5.77c454d8.png","77c454d8d5c417e3ea654973ae19deab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});