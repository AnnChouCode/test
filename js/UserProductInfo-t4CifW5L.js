import{u as b}from"./userProductStore-BHbhZuew.js";import{f as x}from"./favoriteStore-TD4_ecEU.js";import{c as _}from"./userCartStore-BqHA07G1.js";import{m as p,a as y}from"./pinia-D1tb24LR.js";import{B as k}from"./BtnFavorite-C5GR6QoH.js";import{P as A}from"./ProductCard-CNbRWEGd.js";import{B as q}from"./BtnSeeMore-Di6g-PWc.js";import{a_ as u,aR as i,a5 as a,a6 as t,L as h,aY as v,a4 as l,ba as c,ae as f,a3 as C,ac as O,bC as T,aG as N,bx as I}from"./@vue-Cqo5QHyB.js";import{_ as B}from"./index-D1bcyXEb.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-Bxbxx77j.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./statusStore-bNOcWQBU.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-B1ByGxZb.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:L,VITE_PATH:V}=R,E={data(){return{currentProductId:null,product:{},qty:1,tempRelatedAllProducts:[],relatedProducts:[],artistInfo:{},quantityInCart:""}},watch:{cartsList(){this.getAvailableProductNum(this.currentProductId)},$route(){this.initPageInfo()}},methods:{...p(b,["getAllProducts"]),...p(_,["addToCart","getCartsList"]),...p(x,["recentlyViewed"]),changeImage(e){this.product.currentImage=this.product.imagesStock[e]},getCurrentProduct(e){const s=`${L}/api/${V}/product/${e}`;return this.axios.get(s).then(r=>{const d=r.data.product;return this.product={productInfo:d,currentImage:d.imageUrl},d.imagesUrl&&(this.product.imagesStock=[d.imageUrl,...d.imagesUrl]),this.recentlyViewed(d),d.artist}).catch(r=>console.log(r.response.data.message))},getRelatedProducts(e,s){this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(r=>r.artist===e&&r.id!==s),this.tempRelatedAllProducts.length||(this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(r=>r.group===this.product.productInfo.group)),this.relatedProducts=this.tempRelatedAllProducts.slice(0,3)},getArtistInfo(e){this.artistInfo=this.sortNewest.newestArtist.filter(s=>s.title===e)[0]},getAvailableProductNum(e){const s=this.cartsList.carts.filter(r=>r.product_id===e);this.quantityInCart=s.length?s[0].qty:0},async initPageInfo(){try{this.currentProductId=this.$route.params.id;const e=await this.getCurrentProduct(this.currentProductId);await this.getAllProducts(),this.getCartsList(),this.getAvailableProductNum(this.currentProductId),this.getRelatedProducts(e,this.currentProductId),this.getArtistInfo(e)}catch(e){throw console.log("錯誤:",e),e}}},mounted(){this.initPageInfo()},computed:{...y(b,["sortNewest"]),...y(_,["cartsList"])},components:{ProductCard:A,BtnSeeMore:q,BtnFavorite:k}},z={key:0,class:"container user-page-container"},U={class:"row g-1 g-lg-6"},D={class:"col-12 col-md-8"},F={class:"row"},M={class:"position-relative col-12 col-lg-3"},Q={class:"bg-tertiary h-100 overflow-hidden"},j={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},H=["onClick"],G=["src"],Y={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},J={class:"bg-tertiary ratio-1x1 overflow-hidden"},K=["src","alt"],W={class:"col-12 col-md-4"},X={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},Z={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},$={class:"mb-2 h6 text-info fw-bold"},tt={class:"h5 fw-bold"},ot={class:"lh-base lh-md-lg fs-info text-info"},et=t("hr",{class:"my-6 text-info opacity-100"},null,-1),st={class:"accordion accordion-flush",id:"accordionFlushProductInfo"},rt={class:"accordion-item bg-transparent border-info pb-6"},it=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingSize"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseSize","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseSize",style:{"box-shadow":"none"}}," 作品規格 ")],-1),ct={id:"panelsStayOpen-collapseSize",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingSize"},at={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},nt={class:"accordion-item bg-transparent border-info py-6"},dt=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingQty"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseQty","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseQty",style:{"box-shadow":"none"}}," 作品版數 ")],-1),lt={id:"panelsStayOpen-collapseQty",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingQty"},pt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},ut={class:"accordion-item bg-transparent pt-6"},ht={class:"accordion-header",id:"panelsStayOpen-headingAbout"},ft={class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseAbout","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseAbout",style:{"box-shadow":"none"}},mt={id:"panelsStayOpen-collapseAbout",class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingAbout"},gt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},bt=["disabled"],_t={key:0},yt={key:1},vt=O('<div><section class="bg-primary text-white py-md-8 py-7"><div class="container"><div class="row gy-5"><div class="col-md-4"><div class="h-100 d-flex align-items-center"><h3 class="mb-0"><b>常見問答</b></h3></div></div><div class="col-md-8"><div class="accordion mb-5" id="faq"><div class="accordion-item"><div class="accordion-header"><button type="button" class="bg-light accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="#faq-1"><i class="d-none d-md-block fs-7 text-highlight bi bi-asterisk me-3"></i><b>ques</b></button></div><div class="accordion-collapse collapse" id="faq1" aria-expanded="false"><div class="accordion-body"><p class="mb-0 lh-lg">123123123</p></div></div></div><div class="accordion-item"><div class="accordion-header"><button type="button" class="bg-light accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="#faq-2"><i class="d-none d-md-block fs-7 text-highlight bi bi-asterisk me-3"></i><b>ques</b></button></div><div class="accordion-collapse collapse" id="faq2" aria-expanded="false"><div class="accordion-body"><p class="mb-0 lh-lg">123123123</p></div></div></div></div></div></div></div></section></div>',1),It={key:1,class:"container"},wt={class:"py-7 py-md-9"},Pt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},St=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),xt={class:"row g-3 g-md-8"},kt={class:"fs-info fs-md-6 text-info"};function At(e,s,r,d,o,w){const m=u("BtnFavorite"),P=u("BtnSeeMore"),S=u("ProductCard");return i(),a(h,null,[o.product.productInfo?(i(),a("div",z,[t("div",U,[t("div",D,[t("div",F,[t("div",M,[t("div",Q,[o.product.imagesStock?(i(),a("div",j,[(i(!0),a(h,null,v(o.product.imagesStock,(n,g)=>(i(),a("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+g,onClick:T(qt=>w.changeImage(g),["prevent"])},[t("img",{src:n,alt:"product",class:N(["object-fit-contain w-100 h-100",n===o.product.currentImage?"border border-2 border-info":""])},null,10,G)],8,H))),128))])):l("",!0)])]),t("div",Y,[t("div",J,[t("img",{src:o.product.currentImage,alt:o.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,K)])])])]),t("div",W,[t("div",X,[t("div",Z,[t("div",null,[t("h3",$,c(o.product.productInfo.artist),1),t("h2",tt,c(o.product.productInfo.title),1)]),f(m,{productId:o.product.productInfo.id},null,8,["productId"])]),t("p",ot,c(o.product.productInfo.content),1),et,t("div",st,[t("div",rt,[it,t("div",ct,[t("div",at,c(o.product.productInfo.size),1)])]),t("div",nt,[dt,t("div",lt,[t("div",pt,[t("p",null,"剩餘版數 "+c(o.product.productInfo.quantity?o.product.productInfo.quantity-o.quantityInCart:"無限"),1),t("p",null,"總版數 "+c(o.product.productInfo.quantity?o.product.productInfo.quantity:"無限"),1)])])]),t("div",ut,[t("h2",ht,[t("button",ft," 關於 "+c(o.artistInfo.title),1)]),t("div",mt,[t("div",gt,c(o.artistInfo.content),1)])])])]),t("button",{type:"button",class:"position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:s[0]||(s[0]=n=>e.addToCart(o.product.productInfo.id,o.qty)),disabled:o.product.productInfo.quantity-o.quantityInCart===0},[o.product.productInfo.quantity-o.quantityInCart!==0?(i(),a("span",_t,"加入購物車．NT$ "+c(o.product.productInfo.price.toLocaleString()),1)):(i(),a("span",yt,"已絕版．NT$ "+c(o.product.productInfo.price.toLocaleString()),1))],8,bt)]),vt])])):l("",!0),o.relatedProducts.length?(i(),a("div",It,[t("div",wt,[t("div",Pt,[St,o.tempRelatedAllProducts?(i(),C(P,{key:0,linkTo:o.tempRelatedAllProducts.length?`/productlist?artist=${o.artistInfo.title}`:`/productlist?group=${o.product.productInfo.group}`},null,8,["linkTo"])):l("",!0)]),t("div",xt,[(i(!0),a(h,null,v(o.relatedProducts,n=>(i(),a("div",{class:"col-6 col-md-4",key:n.id},[f(S,{item:n,linkTo:`/productInfo/${n.id}`},{price:I(()=>[t("p",kt,"NT$ "+c(n.price.toLocaleString()),1)]),favorite:I(()=>[f(m,{productId:n.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])])])):l("",!0)],64)}const $t=B(E,[["render",At]]);export{$t as default};
