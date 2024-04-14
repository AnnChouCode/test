import{u as _}from"./userProductStore-D49mHi_z.js";import{m as B,a as N}from"./pinia-Cz9d2yny.js";import{A as x,P as C,N as I,S as k,a as D}from"./swiper-Crg6idDU.js";import{P as A,B as M}from"./ProductCard-BS_bJPdT.js";import{_ as m}from"./index-DqUkzexz.js";import{aR as a,a5 as l,a6 as r,aG as g,aU as O,aS as $,a_ as i,ba as v,a3 as w,a4 as F,ae as n,bx as d,L as J,aY as L,ab as T}from"./@vue-Cqo5QHyB.js";import{B as V}from"./BtnSeeMore-95L_MsaC.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-DYHJktcF.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";const j={props:{position:{type:String,default:"bottom"},direction:{type:String,default:"next"}},computed:{containerClass(){return{"position-relative":!0,"position-absolute":!0,"z-1":!0,"bottom-50":this.position==="bottom","top-50":this.position==="top","end-0":this.direction==="next","start-0":this.direction==="prev","rounded-circle":!0,"overflow-hidden":!0,"navigation-next":this.direction==="next","navigation-prev":this.direction==="prev"}},swiperButton(){return{"swiper-button-next":this.direction==="next","swiper-button-prev":this.direction==="prev"}}}},E=t=>(O("data-v-fb2520eb"),t=t(),$(),t),R=E(()=>r("div",{class:"navigation-bg"},null,-1));function z(t,o,s,f,e,p){return a(),l("div",{class:g(p.containerClass)},[r("div",{class:g(p.swiperButton)},null,2),R],2)}const G=m(j,[["render",z],["__scopeId","data-v-fb2520eb"]]),U={props:["dataCategory"],data(){return{maxNumItem:8,DataInfo:{products:{title:"探索新作品",path:"/productlist",infoPath:"productinfo"},artists:{title:"認識新藝術家",path:"/artistlist",infoPath:"artistinfo"},recently:{title:"猜你喜歡",path:"",infoPath:"productinfo"}},currentDatas:[],modules:[x,C,I],isArtistBlock:!0}},methods:{...B(_,["getAllProducts"]),shuffleArray(t){for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t},getRandomProducts(t){const o=this.maxNumItem-this.currentDatas.length;return this.shuffleArray(t).slice(0,o)},async getAllDatas(){await this.getAllProducts(),this.dataCategory==="artists"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestArtist)).slice(0,this.maxNumItem)),this.dataCategory==="products"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestProduct)).slice(0,this.maxNumItem)),this.dataCategory==="recently"&&(this.currentDatas=this.currentDatas.concat(this.getRandomProducts(this.sortNewest.newestProduct)))}},mounted(){if(this.isArtistBlock=this.dataCategory==="artists",this.dataCategory==="recently"){const t=JSON.parse(localStorage.getItem("recentlyList"))||[];if(this.currentDatas=t,this.currentDatas.length>=this.maxNumItem)return}this.getAllDatas()},computed:{...N(_,["sortNewest"])},components:{Swiper:k,SwiperSlide:D,BtnSwiperNavigation:G,ProductCard:A,BtnSeeMore:V,BtnFavorite:M},inject:["triggerGetFavorites"]},H={class:"py-7 py-md-9"},Y={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},q={class:"fs-2 fs-md-1"},K={class:"position-relative"},Q={class:"fs-info fs-md-6 text-info"};function W(t,o,s,f,e,p){const u=i("BtnSeeMore"),S=i("BtnFavorite"),y=i("ProductCard"),b=i("SwiperSlide"),h=i("BtnSwiperNavigation"),P=i("Swiper");return a(),l("div",H,[r("div",Y,[r("h2",q,v(e.DataInfo[s.dataCategory].title),1),e.DataInfo[s.dataCategory].path!==""?(a(),w(u,{key:0,linkTo:e.DataInfo[s.dataCategory].path},null,8,["linkTo"])):F("",!0)]),r("div",K,[n(P,{slidesPerView:2,spaceBetween:12,pagination:{clickable:!0},loop:!0,breakpoints:{768:{slidesPerView:3,spaceBetween:48}},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:e.modules,class:"product-swiper"},{default:d(()=>[(a(!0),l(J,null,L(e.currentDatas,c=>(a(),w(b,{key:c.id},{default:d(()=>[n(y,{item:c,linkTo:`/${e.DataInfo[s.dataCategory].infoPath}/${c.id}`,shape:e.isArtistBlock?"rounded-circle":"",titlePosition:e.isArtistBlock?"text-center":""},T({_:2},[e.isArtistBlock?void 0:{name:"price",fn:d(()=>[r("p",Q,"NT$ "+v(c.price.toLocaleString()),1)]),key:"0"},e.isArtistBlock?void 0:{name:"favorite",fn:d(()=>[n(S,{productId:c.id},null,8,["productId"])]),key:"1"}]),1032,["item","linkTo","shape","titlePosition"])]),_:2},1024))),128)),n(h,{position:"bottom",direction:"next"}),n(h,{position:"bottom",direction:"prev"})]),_:1},8,["navigation","modules"])])])}const X=m(U,[["render",W],["__scopeId","data-v-af284d54"]]),Z={data(){return{tempMessage:{type:"",Name:""},message:{subject:"",body:""}}},components:{SwiperProductComponent:X}},tt={class:"bg-white"},et={class:"container"};function ot(t,o,s,f,e,p){const u=i("swiperProductComponent");return a(),l("div",tt,[r("div",et,[n(u,{dataCategory:"products"})])])}const Bt=m(Z,[["render",ot],["__scopeId","data-v-eddbf7d8"]]);export{Bt as default};
