import{u as w}from"./userArticleStore-3pe1PorI.js";import{c as x}from"./userCartStore-CEq2uRuA.js";import{m as v,a as j}from"./pinia-D1tb24LR.js";import{S as C}from"./SwiperProductComponent-DVzG4hcA.js";import{B as S}from"./BtnSeeMore-Bi2CGQ9g.js";import{_ as V}from"./present-DYbhvz3j.js";import{_ as z}from"./index-CdfjMw5H.js";import{a_ as r,aR as b,a5 as u,a6 as s,ba as t,ae as i,bx as d,a4 as g,L as M,ac as U,ad as I,aG as h,aU as $,aS as F}from"./@vue-Cqo5QHyB.js";import"./axios-Di5RpEPX.js";import"./statusStore-bNOcWQBU.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./userProductStore-CF3CjVKU.js";import"./swiper-Crg6idDU.js";import"./BtnFavorite-DQSZYhZu.js";import"./favoriteStore-CPjCsCYH.js";import"./BtnSwiperNavigation-CrsSwEVd.js";import"./ProductCard-475GkyBh.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";const N={data(){return{tempMessage:{type:"",Name:""},message:{subject:"",body:""}}},watch:{tempMessage:{handler(){const e=this.tempMessage.type!==void 0?this.tempMessage.type:"",l=this.tempMessage.name!==void 0?`_${this.tempMessage.name}`:"";this.message.subject=`【${e}${l}】`},deep:!0}},methods:{...v(w,["getArticlesList"]),...v(x,["copyCouponCode"]),sendEmail(){Object.values(this.message).every(l=>l!=="")&&(window.open(`mailto:wandererland@gmail.com?cc=${this.message.email}&subject=${this.message.subject}&body=${this.message.body}`,"_blank"),this.$refs.cooperationForm.resetForm())}},components:{SwiperProductComponent:C,BtnSeeMore:S},computed:{...j(w,["sortArticles","articlesList"])},mounted(){this.getArticlesList()}},o=e=>($("data-v-16edaca4"),e=e(),F(),e),B={key:0,class:"position-relative banner"},L=["src","alt"],P=o(()=>s("div",{class:"position-absolute z-1 top-0 bg-default opacity-50 w-100 h-100"},null,-1)),q={class:"position-absolute z-2 top-50 start-50 translate-middle text-center banner-title w-80 w-sm-50"},E={class:"pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing title-letter-word-wrap"},T={class:"bg-white"},D={class:"container"},G={key:0,class:"py-7 py-md-9"},H={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},O=o(()=>s("h2",{class:"fs-2 fs-md-1"},"最新消息",-1)),R={class:"row g-3 g-lg-6 home-article"},W={class:"col-12 col-lg-6 home-article-img"},J={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},K=o(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Q=["src","alt"],X={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Y={class:"mb-4 fs-info fs-md-5 fw-bold"},Z={class:"fs-info fs-md-6 doubleline-ellipsis"},ss={class:"d-block d-xl-none py-3"},es={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ts={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},os={class:"col-6 d-flex flex-column home-article-img"},is={class:"position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden"},ls=o(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),ns=["src","alt"],ds={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},as={class:"mb-4 fs-info fs-md-5 fw-bold"},cs={class:"fs-info fs-md-6 doubleline-ellipsis"},rs={class:"d-block d-xl-none py-3"},ms={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ps={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},fs={class:"col-6 col-lg-4 home-article-img"},hs={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},_s=o(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),bs=["src","alt"],us={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},ws={class:"mb-4 fs-info fs-md-5 fw-bold"},vs={class:"fs-info fs-md-6 doubleline-ellipsis"},gs={class:"d-block d-xl-none py-3"},As={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ys={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},ks={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},xs={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},js=o(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Cs=["src"],Ss={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Vs={class:"mb-4 fs-info fs-md-5 fw-bold"},zs={class:"fs-info fs-md-6 doubleline-ellipsis"},Ms={class:"d-block d-xl-none py-3"},Us={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Is={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},$s={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},Fs={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Ns=o(()=>s("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Bs=["src","alt"],Ls={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Ps={class:"mb-4 fs-info fs-md-5 fw-bold"},qs={class:"fs-info fs-md-6 doubleline-ellipsis"},Es={class:"d-block d-xl-none py-3"},Ts={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Ds={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},Gs={class:"position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden bg-primary"},Hs={class:"position-absolute top-50 z-1 translate-middle-y text-center title-shadow"},Os=o(()=>s("h2",{class:"mb-2 fs-4 fs-md-1 text-white title-letter-spacing"},"使用優惠券",-1)),Rs=o(()=>s("p",{class:"mb-7 fs-info fs-md-6 text-white"},"為你的第一筆訂單，獲取 97 折折扣",-1)),Ws=o(()=>s("img",{src:V,alt:"coupon",class:"object-fit-cover w-100 h-100","data-aos":"zoom-out","data-aos-duration":"3000"},null,-1)),Js={class:"bg-white"},Ks={class:"container"},Qs={class:"py-7 py-md-9"},Xs=o(()=>s("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"與我們聯絡",-1)),Ys={class:"row d-flex flex-column flex-md-row g-6 justify-content-between"},Zs=U('<div class="col col-md-5" data-v-16edaca4><div class="mb-4 mb-md-6" data-v-16edaca4><p class="mb-2 fs-6 fs-md-5 fw-bold" data-v-16edaca4>合作說明</p><p data-v-16edaca4>謝謝您對 Wanderdr Land 的認可與提攜，我們歡迎各種合作，期盼與藝術激發更多靈感與火花。誠摯邀請您來信提案，我們將有專門窗口與您聯繫。</p></div><div class="mb-4" data-v-16edaca4><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-16edaca4>合作單位</p><p data-v-16edaca4>請附上您的提案網址及單位官網，並於來信標題寫入單位名稱。</p></div><div class="mb-4" data-v-16edaca4><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-16edaca4>空間</p><p data-v-16edaca4>請附上您的空間官網，並於來信標題寫入空間名稱。</p></div><div data-v-16edaca4><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-16edaca4>藝術家</p><p data-v-16edaca4>請附上您的 CV 或是作品集網址，並於來信標題寫入藝術家名稱。</p></div></div>',1),se={class:"col col-md-6"},ee={class:"form-floating mb-4 mb-md-7 w-100"},te=o(()=>s("option",{selected:""},"請選擇類別",-1)),oe=o(()=>s("option",{value:"異業合作"},"異業合作",-1)),ie=o(()=>s("option",{value:"空間合作"},"空間合作",-1)),le=o(()=>s("option",{value:"藝術家合作"},"藝術家合作",-1)),ne=o(()=>s("label",{for:"floatingSelect"},"來信類別",-1)),de={class:"form-floating mb-4 mb-md-7 w-100"},ae=o(()=>s("label",{for:"name"},"姓名",-1)),ce={class:"form-floating mb-4 mb-md-7 w-100"},re=o(()=>s("label",{for:"subject"},"信件標題",-1)),me={class:"form-floating mb-4 mb-md-7 w-100"},pe=o(()=>s("label",{for:"body"},"留言",-1)),fe=o(()=>s("button",{type:"submit",class:"py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto"}," 送出訊息 ",-1));function he(e,l,_e,be,n,A){const c=r("router-link"),_=r("swiperProductComponent"),y=r("btnSeeMore"),p=r("v-field"),f=r("error-message"),k=r("v-form");return b(),u(M,null,[e.sortArticles.topArticle[0]?(b(),u("div",B,[s("img",{src:e.sortArticles.topArticle[0].imageUrl,alt:e.sortArticles.topArticle[0].title,class:"position-fixed z-n1 h-100 w-100 overflow-hidden object-fit-cover","data-aos":"zoom-out","data-aos-duration":"3000"},null,8,L),P,s("div",q,[s("h2",E,t(e.sortArticles.topArticle[0].title),1),i(c,{to:`/articleinfo/${e.sortArticles.topArticle[0].id}`,class:"py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold"},{default:d(()=>[I("前往頁面")]),_:1},8,["to"])])])):g("",!0),s("div",T,[s("div",D,[i(_,{dataCategory:"products"}),i(_,{dataCategory:"artists"}),e.sortArticles.newestArticles[0]?(b(),u("div",G,[s("div",H,[O,i(y,{linkTo:"/articlelist"})]),s("div",R,[s("div",W,[i(c,{to:`/articleInfo/${e.sortArticles.newestArticles[0].id}`},{default:d(()=>[s("div",J,[K,s("img",{src:e.sortArticles.newestArticles[0].imageUrl,alt:e.sortArticles.newestArticles[0].title,class:"object-fit-cover w-100 h-100"},null,8,Q),s("div",X,[s("h3",Y,t(e.sortArticles.newestArticles[0].title),1),s("p",Z,t(e.sortArticles.newestArticles[0].description),1)])]),s("div",ss,[s("h3",es,t(e.sortArticles.newestArticles[0].title),1),s("p",ts,t(e.sortArticles.newestArticles[0].description),1)])]),_:1},8,["to"])]),s("div",os,[i(c,{to:`/articleInfo/${e.sortArticles.newestArticles[1].id}`,class:"d-flex flex-column flex-grow-1"},{default:d(()=>[s("div",is,[ls,s("img",{src:e.sortArticles.newestArticles[1].imageUrl,alt:e.sortArticles.newestArticles[1].title,class:"object-fit-cover w-100 h-100"},null,8,ns),s("div",ds,[s("h3",as,t(e.sortArticles.newestArticles[1].title),1),s("p",cs,t(e.sortArticles.newestArticles[1].description),1)])]),s("div",rs,[s("h3",ms,t(e.sortArticles.newestArticles[1].title),1),s("p",ps,t(e.sortArticles.newestArticles[1].description),1)])]),_:1},8,["to"])]),s("div",fs,[i(c,{to:`/articleInfo/${e.sortArticles.newestArticles[2].id}`},{default:d(()=>[s("div",hs,[_s,s("img",{src:e.sortArticles.newestArticles[2].imageUrl,alt:e.sortArticles.newestArticles[2].title,class:"object-fit-cover w-100 h-100"},null,8,bs),s("div",us,[s("h3",ws,t(e.sortArticles.newestArticles[2].title),1),s("p",vs,t(e.sortArticles.newestArticles[2].description),1)])]),s("div",gs,[s("h3",As,t(e.sortArticles.newestArticles[2].title),1),s("p",ys,t(e.sortArticles.newestArticles[2].description),1)])]),_:1},8,["to"])]),s("div",ks,[i(c,{to:`/articleInfo/${e.sortArticles.newestArticles[3].id}`},{default:d(()=>[s("div",xs,[js,s("img",{src:e.sortArticles.newestArticles[3].imageUrl,alt:"art",class:"object-fit-cover w-100 h-100"},null,8,Cs),s("div",Ss,[s("h3",Vs,t(e.sortArticles.newestArticles[3].title),1),s("p",zs,t(e.sortArticles.newestArticles[3].description),1)])]),s("div",Ms,[s("h3",Us,t(e.sortArticles.newestArticles[3].title),1),s("p",Is,t(e.sortArticles.newestArticles[3].description),1)])]),_:1},8,["to"])]),s("div",$s,[i(c,{to:`/articleInfo/${e.sortArticles.newestArticles[4].id}`},{default:d(()=>[s("div",Fs,[Ns,s("img",{src:e.sortArticles.newestArticles[4].imageUrl,alt:e.sortArticles.newestArticles[4].title,class:"object-fit-cover w-100 h-100"},null,8,Bs),s("div",Ls,[s("h3",Ps,t(e.sortArticles.newestArticles[4].title),1),s("p",qs,t(e.sortArticles.newestArticles[4].description),1)])]),s("div",Es,[s("h3",Ts,t(e.sortArticles.newestArticles[4].title),1),s("p",Ds,t(e.sortArticles.newestArticles[4].description),1)])]),_:1},8,["to"])])])])):g("",!0)])]),s("div",Gs,[s("div",Hs,[Os,Rs,s("button",{type:"button",class:"py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0",onClick:l[0]||(l[0]=m=>e.copyCouponCode("present97"))},"點擊複製優惠碼")]),Ws]),s("div",Js,[s("div",Ks,[i(_,{dataCategory:"recently"}),s("div",Qs,[Xs,s("div",Ys,[Zs,s("div",se,[i(k,{class:"d-flex flex-column align-items-end",onSubmit:A.sendEmail,ref:"cooperationForm"},{default:d(({errors:m})=>[s("div",ee,[i(p,{class:h(["form-select border-info rounded-0",{"is-invalid":m.類別}]),id:"floatingSelect","aria-label":"Floating label select",modelValue:n.tempMessage.type,"onUpdate:modelValue":l[1]||(l[1]=a=>n.tempMessage.type=a),as:"select",name:"類別",rules:"required"},{default:d(()=>[te,oe,ie,le]),_:2},1032,["class","modelValue"]),i(f,{name:"類別",class:"invalid-feedback"}),ne]),s("div",de,[i(p,{id:"name",name:"姓名",type:"text",class:h(["form-control border-info rounded-0",{"is-invalid":m.姓名}]),placeholder:"請輸入您的姓名",rules:"required",modelValue:n.tempMessage.name,"onUpdate:modelValue":l[2]||(l[2]=a=>n.tempMessage.name=a)},null,8,["class","modelValue"]),i(f,{name:"姓名",class:"invalid-feedback"}),ae]),s("div",ce,[i(p,{id:"subject",name:"標題",type:"text",class:h(["form-control border-info rounded-0",{"is-invalid":m.標題}]),placeholder:"請輸入您的信件標題",rules:"required",modelValue:n.message.subject,"onUpdate:modelValue":l[3]||(l[3]=a=>n.message.subject=a)},null,8,["class","modelValue"]),i(f,{name:"標題",class:"invalid-feedback"}),re]),s("div",me,[i(p,{id:"body",name:"訊息",class:h(["form-control border-info rounded-0",{"is-invalid":m.訊息}]),as:"textarea",placeholder:"請輸入您的訊息",rules:"required",style:{height:"273px"},modelValue:n.message.body,"onUpdate:modelValue":l[4]||(l[4]=a=>n.message.body=a)},null,8,["class","modelValue"]),i(f,{name:"訊息",class:"invalid-feedback"}),pe]),fe]),_:1},8,["onSubmit"])])])])])])],64)}const Re=z(N,[["render",he],["__scopeId","data-v-16edaca4"]]);export{Re as default};
