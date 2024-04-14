import{f as d}from"./favoriteStore-TD4_ecEU.js";import{c}from"./userCartStore-BqHA07G1.js";import{m as p,a as m}from"./pinia-D1tb24LR.js";import{B as v}from"./BtnFavorite-BnRtAMps.js";import{P as h}from"./ProductCard-0C0PmHxP.js";import{S as g}from"./SwiperProductComponent-C2jiZCLR.js";import{_ as b}from"./index-IxpjysAi.js";import{a_ as e,aR as o,a5 as r,L as y,aY as C,ae as s,bx as a,a6 as i,ba as k,ad as w}from"./@vue-Cqo5QHyB.js";import"./statusStore-bNOcWQBU.js";import"./axios-Di5RpEPX.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./sweetalert2-Bxbxx77j.js";import"./userProductStore-BHbhZuew.js";import"./swiper-Crg6idDU.js";import"./BtnSwiperNavigation-ITUNl8nG.js";import"./BtnSeeMore-cLKzMboG.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-B1ByGxZb.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";const F={provide(){return{triggerGetFavorites:!0}},methods:{...p(d,["getFavoriteList","getFavoriteProducts"]),...p(c,["addToCart","getCartsList"])},components:{ProductCard:h,SwiperProductComponent:g,BtnFavorite:v},async mounted(){await this.getCartsList(),this.getFavoriteList(),this.getFavoriteProducts()},computed:{...m(d,["favoriteProducts"]),...m(c,["cartsList"])},watch:{cartsList(){this.getFavoriteProducts()}}},P={class:"container user-page-container flex-grow-1",style:{"padding-bottom":"0px"}},x=i("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"收藏",-1),L={key:0,class:"row g-3 g-md-8"},B={class:"fs-info fs-md-6 text-info"},S=["onClick","disabled"],T={key:0},$={key:1},N={key:1,class:"text-center"},I=i("p",{class:"mb-4 fs-4"},"目前沒有收藏",-1);function V(n,Q,A,D,E,G){const l=e("BtnFavorite"),u=e("productCard"),_=e("router-link"),f=e("swiperProductComponent");return o(),r("div",P,[x,n.favoriteProducts.length?(o(),r("div",L,[(o(!0),r(y,null,C(n.favoriteProducts,t=>(o(),r("div",{class:"col-6 col-md-4",key:t.id},[s(u,{item:t,linkTo:`/productInfo/${t.id}`},{price:a(()=>[i("p",B,"NT$ "+k(t.price.toLocaleString()),1)]),addToCart:a(()=>[i("button",{type:"button",class:"position-relative mt-3 py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:R=>n.addToCart(t.id,1),disabled:!t.availableQty},[t.availableQty?(o(),r("span",T,"加入購物車")):(o(),r("span",$,"已絕版"))],8,S)]),favorite:a(()=>[s(l,{productId:t.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])):(o(),r("div",N,[I,s(_,{to:"/productlist",class:"py-2 py-md-3 px-6 px-md-9 btn btn-default rounded-0 fw-bold"},{default:a(()=>[w("瀏覽作品")]),_:1})])),s(f,{dataCategory:"recently"})])}const _t=b(F,[["render",V]]);export{_t as default};
