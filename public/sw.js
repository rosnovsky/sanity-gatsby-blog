if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return t;default:return e(a)}}))).then((e=>{const a=r(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback-MtHkASXfFqpZQaKQguHzn.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MtHkASXfFqpZQaKQguHzn/_buildManifest.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/MtHkASXfFqpZQaKQguHzn/_ssgManifest.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/186-7a6290b204206b38afef.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/281-cb3f32c11ee7f1128a47.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/302-991187ea20dbecae6aa1.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/464-36563f9ff0375fbdfd54.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/framework-ba739959830eed930663.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/main-870d101a79350ca6630c.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/404-fc6e970630c05a7d6ef1.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/_app-1f37433df58236428780.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/_error-e63bdfd631c676700cb7.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/_offline-5afaebb5ef0d0425e342.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/about-6d085d3f3d573a259445.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/blog-45ea306e899de2c167a1.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-7540339456a205892caa.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/index-c5921bcd28adce813ef2.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/natgeo-437dc1bf3586c1a0585c.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/protected-31177caa816de71ab3bf.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/pages/stats-949ea77279dd4085ec3f.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/chunks/webpack-377d9957422d331503bc.js",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_next/static/css/673c40d898a9c75bb7ba.css",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/_offline",revision:"MtHkASXfFqpZQaKQguHzn"},{url:"/avatar.jpg",revision:"79eb828d41f68dab82ea8aebe863186e"},{url:"/feed.xml",revision:"5fd0cec14739538ec9df75ca4ba710c0"},{url:"/fonts/inter-var-latin.woff2",revision:"812b3dd29751112389e93387c4f7dd0a"},{url:"/logos/buttondown.png",revision:"750e998b73f88058b03eaaa0634aded5"},{url:"/logos/css.png",revision:"ae9cd3b6eb92af84637ab296b895ad28"},{url:"/logos/firebase.png",revision:"134ac4ad2e53737b42c49efc93343b81"},{url:"/logos/google-analytics.png",revision:"97ae6f428566fc10e30384c3660aa18a"},{url:"/logos/google-sheets.png",revision:"21d601c1121e040b153c05c4a5e0e519"},{url:"/logos/gumroad.png",revision:"7dab7758c1677a49588f0acfe60cda78"},{url:"/logos/mailchimp.png",revision:"7d899418eec5046f5f6e841fc858fddc"},{url:"/logos/mailgun.png",revision:"38a45cc01b26e9cbc3e36c313a80bcbe"},{url:"/logos/mdx.png",revision:"0d70743cd72ef2576953234b9cc266b5"},{url:"/logos/react.png",revision:"742503b86a20d5802ad27d790e8462b8"},{url:"/logos/sendgrid.png",revision:"199ba87b0ef6c37cad5d1b96dee8d30f"},{url:"/logos/slack.png",revision:"d3506eb815e73f080860e8ee36418766"},{url:"/logos/spotify.png",revision:"3d7bb4f3c8f3a863d053d5798500b02f"},{url:"/logos/stripe.png",revision:"14cb7a4f254acbaef2a5db0af1c4e857"},{url:"/logos/youtube.png",revision:"0ec33d08c886d4046447705338c89ae3"},{url:"/robots.txt",revision:"f0c2307d6770f9d9414858ced20d9e31"},{url:"/sitemap.xml",revision:"5e4371da60e4e03d413c1fca94faff21"},{url:"/static/favicons/android-chrome-192x192.png",revision:"acc004451d3b72ce7b70e0b1eb0b622f"},{url:"/static/favicons/android-chrome-512x512.png",revision:"fdaea895a3835333a0f4bc1c14c2d756"},{url:"/static/favicons/apple-touch-icon.png",revision:"fdaea895a3835333a0f4bc1c14c2d756"},{url:"/static/favicons/browserconfig.xml",revision:"338d84c2c27844d0ded61b5cc6f255e7"},{url:"/static/favicons/favicon-16x16.png",revision:"77a6d644271dc289196d7663f1254ef0"},{url:"/static/favicons/favicon-32x32.png",revision:"8357431c78d72667bcb4dbbff691971a"},{url:"/static/favicons/favicon.ico",revision:"acc004451d3b72ce7b70e0b1eb0b622f"},{url:"/static/favicons/mstile-150x150.png",revision:"16b559853e0ed8fac2e1f8af4d34558d"},{url:"/static/favicons/safari-pinned-tab.svg",revision:"e7f7879f2c0b687112f2dfe3e4849688"},{url:"/static/favicons/site.webmanifest",revision:"e897a4df0cb0cc7f2caec02d9433ee5b"},{url:"/static/images/art.jpg",revision:"79eb828d41f68dab82ea8aebe863186e"},{url:"/static/images/auth0-10-years-later/allhands.jpg",revision:"3d3a88facba1220aac896123f9010b0d"},{url:"/static/images/auth0-10-years-later/avocado.jpg",revision:"1ce801e6e7dbf7ce932d97aeaa1f81a6"},{url:"/static/images/auth0-10-years-later/box.jpg",revision:"9e7a1b3d221be7f1d8498b5fb9aca6f3"},{url:"/static/images/auth0-10-years-later/context.jpg",revision:"6e0bcc03919d07451f8c9ec47e981f28"},{url:"/static/images/auth0-10-years-later/cover.jpg",revision:"27ea9230b4cef2c86d78a6a43a8fcfc4"},{url:"/static/images/auth0-10-years-later/it.jpg",revision:"ef545c11512ddb8027478fa7e1d100f1"},{url:"/static/images/auth0-10-years-later/layout.jpg",revision:"363078a8756690625f24493743952f3c"},{url:"/static/images/auth0-10-years-later/lunch.jpg",revision:"d0f3453d952e80a9bf21f9dc17ae0392"},{url:"/static/images/auth0-10-years-later/me.jpg",revision:"83240e20879419e0454d34c64397733f"},{url:"/static/images/auth0-10-years-later/meee.jpg",revision:"bdc3c6b0362f6e7b18cd598fc4af649b"},{url:"/static/images/auth0-10-years-later/pizza.jpg",revision:"02e03d0f22df6622a002f85368132217"},{url:"/static/images/auth0-10-years-later/pride.png",revision:"1d7e0c75a510b85a9d66bf04ac45f255"},{url:"/static/images/auth0-10-years-later/unite.jpg",revision:"4fe6238dabde05aa6f077d441e50c7b1"},{url:"/static/images/backend/og.png",revision:"0917ada8684755644006d0956641bbd3"},{url:"/static/images/banner.jpg",revision:"8e72fc32e45a7d32bce742dac2c68074"},{url:"/static/images/banner2.jpg",revision:"b6c67109fd2c856fbfb6586c65b51088"},{url:"/static/images/building-this-website-part-3/cover.jpg",revision:"503974386ea5c1165088a93e539af4ca"},{url:"/static/images/dynamic-comments-for-a-static-website/cover.jpg",revision:"9fd224fda6f1150e9679598aedcca4b9"},{url:"/static/images/generating-blog-social-images/cover.jpg",revision:"de3b0f8a3897371aed376b23b7b29c08"},{url:"/static/images/weekly-update-1/cover.png",revision:"a5304f23839fc0212435c6258d54d9ad"},{url:"/static/images/weekly-update-2/elliot-bay.jpg",revision:"34dd05dfd315aa40d7acad78e80bf0ef"},{url:"/static/images/weekly-update-2/olympic-mountains.jpg",revision:"60f23c1e241c7ba27b925294f2b1a9d5"},{url:"/static/images/weekly-update-2/seattle-skyline.jpg",revision:"8b5fc3df2692f53dd695e7b6571de6a1"},{url:"/static/images/weekly-update-3/cover.png",revision:"9155ef57d3c0a10c45b4a6f994aa5648"},{url:"/static/images/weekly-update-4/garage.jpg",revision:"402ec6a0527b893952d42d875e9fd168"},{url:"/static/images/weekly-update-4/home.jpg",revision:"31fe4a00942cdc01a6a42e826d149674"},{url:"/static/images/weekly-update-4/lattuce.jpg",revision:"6c9d2ecf81a75acc4514fa4f5424074e"},{url:"/static/images/weekly-update-4/lighthouse.jpg",revision:"23de39018fba56f6278d5804d148cbd1"},{url:"/static/images/weekly-update-4/neighborhood.jpg",revision:"02ee233d7ea2d65d12854ba693b543ab"},{url:"/static/images/weekly-update-4/neighborhood2.jpg",revision:"ed13f413ac0784a7d33afb517e8db93e"},{url:"/static/images/weekly-update-4/radish.jpg",revision:"d311efc95150b56360bed3ba31dcdeb2"},{url:"/static/images/weekly-update-4/sunset.jpg",revision:"1fd4c8cb80e8b3fa48dc25c57f8f0d76"},{url:"/static/logo.png",revision:"4b096262bbb442f7ca4a3c7d063fb496"},{url:"/static/socialCard.jpg",revision:"f0a93ab4ec48dc3907709d5e561f2842"},{url:"/tweets.tsx",revision:"f00ba8c4a511f63cc983a7e2c3163fd7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
