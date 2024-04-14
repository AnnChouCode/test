function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/UserLayout-BdsUSr16.js","js/userCartStore-gDf1fiJf.js","js/pinia-D1tb24LR.js","js/@vue-Cqo5QHyB.js","js/axios-Di5RpEPX.js","js/sweetalert2-WZH64N0g.js","js/@ckeditor-DVmmUNiu.js","js/vue-rznDyWWg.js","css/sweetalert2-dyZLM0kd.css","js/vue-loading-overlay-DxSJf-C0.js","css/vue-loading-overlay-nP5dPYjw.css","js/favoriteStore-CCTfxPmn.js","js/userProductStore-CF3CjVKU.js","js/bootstrap-fL-MoaV8.js","js/@popperjs-WhmJkuoZ.js","js/vue-axios-BaogFJPH.js","js/vue-sweetalert2-BkTfjfvc.js","js/vee-validate-CasJ09EL.js","js/@vee-validate-DziBkgPq.js","js/aos-BIKR1xpe.js","css/aos-B0a9OMnn.css","js/vue-router-DOL1scXn.js","css/UserLayout-BEm7qHDA.css","css/bootstrap-icons-CSKXIx42.css","js/UserHome-Dlakf3cn.js","js/userArticleStore-3pe1PorI.js","js/SwiperProductComponent-DATKoX8j.js","js/swiper-Crg6idDU.js","css/swiper-BfolW0Mq.css","js/BtnFavorite-Bon6Altn.js","css/BtnFavorite-B7UYF4uj.css","js/BtnSwiperNavigation-DCl0tqEX.js","css/BtnSwiperNavigation-M_a8twDr.css","js/ProductCard-Dp7Ppd8J.js","css/ProductCard-CZyP55OZ.css","js/BtnSeeMore-Z5Q5nfs1.js","css/BtnSeeMore-D1jv7qoh.css","css/SwiperProductComponent-DRoqYFVF.css","js/present-DYbhvz3j.js","css/UserHome-CbP4pKq3.css","js/UserProductList-DnMGgFcO.js","js/PaginationComponent-DOsviqsI.js","js/UserProductInfo-C-LUWoOI.js","js/UserArtistList-BGLOhEzh.js","js/UserArtistInfo-kVja8YOw.js","js/UserCart-DPziVZdM.js","css/UserCart-Bsp-bXr-.css","js/UserOrder-CDE71G01.js","css/UserOrder-C88JSp3X.css","js/UserCheckOrderForm-DoBMNKNU.js","js/UserPayOrder-47EhB-L6.js","js/UserOrderHistory-C-shQ40k.js","js/UserArticleList-DhGCujQg.js","js/UserArticleInfo-VR05vXs6.js","css/UserArticleInfo-C4MZJyzn.css","js/UserFavoriteList-BjqOa1RQ.js","js/UserLogin-D2ZB3nfk.js","js/AdminLayout-CzlQIjFC.js","js/AdminProductList-BjFqORNb.js","js/AdminProductInfo-DuFhg3AK.js","css/AdminProductInfo-8EOOR79j.css","js/NotFound-CkbYSNx0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a_ as P,aR as A,a3 as O,a2 as R}from"./@vue-Cqo5QHyB.js";import{c as T}from"./pinia-D1tb24LR.js";import{a as y}from"./axios-Di5RpEPX.js";import{p as g}from"./vue-axios-BaogFJPH.js";import{d as v}from"./vue-loading-overlay-DxSJf-C0.js";import{C as V}from"./@ckeditor-DVmmUNiu.js";import{V as I}from"./vue-sweetalert2-BkTfjfvc.js";import"./sweetalert2-WZH64N0g.js";import{d as D,c as W,F as b,b as w,E as k}from"./vee-validate-CasJ09EL.js";import{A as h,l as S,s as $,z as C}from"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";/* empty css                        */import{A as F}from"./aos-BIKR1xpe.js";import{c as B,a as x}from"./vue-router-DOL1scXn.js";import"./vue-rznDyWWg.js";import"./@popperjs-WhmJkuoZ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const z=(e,a)=>{const i=e.__vccOpts||e;for(const[c,t]of a)i[c]=t;return i},q={mounted(){F.init()}};function N(e,a,i,c,t,o){const n=P("RouterView");return A(),O(n)}const H=z(q,[["render",N]]),K="modulepreload",M=function(e){return"/test/"+e},E={},r=function(a,i,c){let t=Promise.resolve();if(i&&i.length>0){const o=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),f=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.all(i.map(p=>{if(p=M(p),p in E)return;E[p]=!0;const m=p.endsWith(".css"),L=m?'[rel="stylesheet"]':"";if(!!c)for(let l=o.length-1;l>=0;l--){const u=o[l];if(u.href===p&&(!m||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${L}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":K,m||(d.as="script",d.crossOrigin=""),d.href=p,f&&d.setAttribute("nonce",f),document.head.appendChild(d),m)return new Promise((l,u)=>{d.addEventListener("load",l),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${p}`)))})}))}return t.then(()=>a()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})},U=v.useLoading(),j=[{path:"/",redirect:"home",component:()=>r(()=>import("./UserLayout-BdsUSr16.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])),meta:{navbarType:"frontend"},children:[{path:"home",name:"userhome",component:()=>r(()=>import("./UserHome-Dlakf3cn.js"),__vite__mapDeps([24,25,2,3,4,1,5,6,7,8,9,10,26,12,27,28,29,11,30,31,32,33,34,35,36,37,38,15,16,17,18,13,14,19,20,21,39,23])),meta:{title:"Wanderer Land"}},{path:"productlist",name:"productlist",component:()=>r(()=>import("./UserProductList-DnMGgFcO.js"),__vite__mapDeps([40,12,2,3,4,5,6,7,8,9,10,29,11,1,30,13,14,33,34,41,15,16,17,18,19,20,21,23])),meta:{title:"作品列表 - Wanderer Land"}},{path:"productinfo/:id",component:()=>r(()=>import("./UserProductInfo-C-LUWoOI.js"),__vite__mapDeps([42,12,2,3,4,5,6,7,8,9,10,11,1,29,30,33,34,35,36,15,16,17,18,13,14,19,20,21,23])),props:e=>({id:e.params.id}),meta:{title:"作品資訊 - Wanderer Land"}},{path:"artistlist",name:"artistlist",component:()=>r(()=>import("./UserArtistList-BGLOhEzh.js"),__vite__mapDeps([43,12,2,3,4,5,6,7,8,9,10,13,14,33,34,41,15,16,17,18,19,20,21,23])),meta:{title:"藝術家列表 - Wanderer Land"}},{path:"artistinfo/:id",component:()=>r(()=>import("./UserArtistInfo-kVja8YOw.js"),__vite__mapDeps([44,12,2,3,4,5,6,7,8,9,10,29,11,1,30,33,34,15,16,17,18,13,14,19,20,21,23])),props:e=>({id:e.params.id}),meta:{title:"藝術家資訊 - Wanderer Land"}},{path:"cart",name:"cart",component:()=>r(()=>import("./UserCart-DPziVZdM.js"),__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,26,12,27,28,29,11,30,31,32,33,34,35,36,37,13,14,38,15,16,17,18,19,20,21,46,23])),meta:{title:"購物車 - Wanderer Land"}},{path:"order",component:()=>r(()=>import("./UserOrder-CDE71G01.js"),__vite__mapDeps([47,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,48,23])),props:e=>({id:e.params.id}),meta:{title:"訂單 - Wanderer Land"},children:[{path:"checkform",name:"checkform",component:()=>r(()=>import("./UserCheckOrderForm-DoBMNKNU.js"),__vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,15,16,17,18,13,14,19,20,21,23]))},{path:"payorder/:id",component:()=>r(()=>import("./UserPayOrder-47EhB-L6.js"),__vite__mapDeps([50,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),props:e=>({id:e.params.id})},{path:"orderhistory/:id",component:()=>r(()=>import("./UserOrderHistory-C-shQ40k.js"),__vite__mapDeps([51,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),props:e=>({id:e.params.id})}]},{path:"articlelist",name:"articlelist",component:()=>r(()=>import("./UserArticleList-DhGCujQg.js"),__vite__mapDeps([52,25,2,3,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),meta:{title:"最新消息 - Wanderer Land"}},{path:"articleinfo/:id",component:()=>r(()=>import("./UserArticleInfo-VR05vXs6.js"),__vite__mapDeps([53,27,3,28,29,11,2,1,4,5,6,7,8,9,10,30,31,32,15,16,17,18,13,14,19,20,21,54,23])),props:e=>({id:e.params.id}),meta:{title:"最新消息 - Wanderer Land"}},{path:"favoritelist",name:"favoritelist",component:()=>r(()=>import("./UserFavoriteList-BjqOa1RQ.js"),__vite__mapDeps([55,11,2,3,1,4,5,6,7,8,9,10,29,30,33,34,26,12,27,28,31,32,35,36,37,15,16,17,18,13,14,19,20,21,23])),meta:{title:"收藏 - Wanderer Land"}},{path:"userlogin",name:"userlogin",component:()=>r(()=>import("./UserLogin-D2ZB3nfk.js"),__vite__mapDeps([56,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),meta:{title:"登入 - Wanderer Land"}}]},{path:"/admin",redirect:"/admin/dashboard",component:()=>r(()=>import("./AdminLayout-CzlQIjFC.js"),__vite__mapDeps([57,13,14,6,7,3,2,4,5,8,9,10,15,16,17,18,19,20,21,23])),meta:{navbarType:"backend"},children:[{path:"products",name:"products",component:()=>r(()=>import("./AdminProductList-BjFqORNb.js"),__vite__mapDeps([58,41,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),meta:{title:"商品管理 - Wanderer Land"}},{path:"productinfo/new",component:()=>r(()=>import("./AdminProductInfo-DuFhg3AK.js"),__vite__mapDeps([59,2,3,4,5,6,7,8,13,14,15,9,10,16,17,18,19,20,21,60,23])),meta:{title:"商品管理 - Wanderer Land"}},{path:"productinfo/:id",component:()=>r(()=>import("./AdminProductInfo-DuFhg3AK.js"),__vite__mapDeps([59,2,3,4,5,6,7,8,13,14,15,9,10,16,17,18,19,20,21,60,23])),props:e=>({id:e.params.id}),meta:{title:"商品管理 - Wanderer Land"}}]},{path:"/:pathMatch(.*)*",component:()=>r(()=>import("./NotFound-CkbYSNx0.js"),__vite__mapDeps([61,3,2,4,15,9,6,7,10,16,5,8,17,18,13,14,19,20,21,23])),meta:{title:"404 Not Found - Wanderer Land"}}],_=B({history:x("/test/"),routes:j,scrollBehavior(e,a,i){return{top:0,behavior:"smooth"}}});_.beforeEach((e,a,i)=>{const c=U.show();window.setTimeout(()=>{c.hide()},500);const t=e.meta.navbarType==="backend"?"theme-dark-navlink-active":e.meta.navbarType==="frontend"?"navlink-underline-active":"active";_.options.linkActiveClass=t,window.document.title=e.meta.title,i()});Object.keys(h).forEach(e=>{D(e,h[e])});W({generateMessage:S({zh_TW:C}),validateOnInput:!0});$("zh_TW");const s=R(H);s.component("VField",b);s.component("VForm",w);s.component("ErrorMessage",k);s.use(v.LoadingPlugin);s.use(I);s.use(T());s.use(_);s.use(g,y);s.use(V);s.mount("#app");export{z as _,_ as r};
