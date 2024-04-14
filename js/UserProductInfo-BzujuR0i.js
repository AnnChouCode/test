import{u as m,c as b,f as x}from"./userProductStore-D49mHi_z.js";import{m as p,a as y}from"./pinia-Cz9d2yny.js";import{P as A,B as k}from"./ProductCard-2dAChJFx.js";import{B as C}from"./BtnSeeMore-1Ag5RG7q.js";import{a_ as u,aR as n,a5 as i,a6 as t,L as h,aY as I,a4 as d,ba as c,ae as _,a3 as O,bC as T,aG as q,bx as v}from"./@vue-Cqo5QHyB.js";import{_ as B}from"./index-C-Gwvuq8.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-DYHJktcF.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var N={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:R,VITE_PATH:L}=N,V={data(){return{currentProductId:null,product:{},qty:1,tempRelatedAllProducts:[],relatedProducts:[],artistInfo:{},quantityInCart:""}},watch:{cartsList(){this.getAvailableProductNum(this.currentProductId)},$route(){this.initPageInfo()}},methods:{...p(m,["getAllProducts"]),...p(b,["addToCart","getCartsList"]),...p(x,["recentlyViewed"]),changeImage(e){this.product.currentImage=this.product.imagesStock[e]},getCurrentProduct(e){const s=`${R}/api/${L}/product/${e}`;return this.axios.get(s).then(r=>{const l=r.data.product;return this.product={productInfo:l,currentImage:l.imageUrl},l.imagesUrl&&(this.product.imagesStock=[l.imageUrl,...l.imagesUrl]),this.recentlyViewed(l),l.artist}).catch(r=>console.log(r.response.data.message))},getRelatedProducts(e,s){this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(r=>r.artist===e&&r.id!==s),this.tempRelatedAllProducts.length||(this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(r=>r.group===this.product.productInfo.group)),this.relatedProducts=this.tempRelatedAllProducts.slice(0,3)},getArtistInfo(e){this.artistInfo=this.sortNewest.newestArtist.filter(s=>s.title===e)[0]},getAvailableProductNum(e){const s=this.cartsList.carts.filter(r=>r.product_id===e);this.quantityInCart=s.length?s[0].qty:0},async initPageInfo(){try{this.currentProductId=this.$route.params.id;const e=await this.getCurrentProduct(this.currentProductId);await this.getAllProducts(),this.getCartsList(),this.getAvailableProductNum(this.currentProductId),this.getRelatedProducts(e,this.currentProductId),this.getArtistInfo(e)}catch(e){throw console.log("錯誤:",e),e}}},mounted(){this.initPageInfo()},computed:{...y(m,["sortNewest"]),...y(b,["cartsList"])},components:{ProductCard:A,BtnSeeMore:C,BtnFavorite:k}},E={key:0,class:"container user-page-container"},z={class:"row g-1 g-lg-6"},U={class:"col-12 col-md-8"},D={class:"row"},F={class:"position-relative col-12 col-lg-3"},M={class:"bg-tertiary h-100 overflow-hidden"},Q={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},j=["onClick"],H=["src"],G={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},Y={class:"bg-tertiary ratio-1x1 overflow-hidden"},J=["src","alt"],K={class:"col-12 col-md-4"},W={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},X={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},Z={class:"mb-2 h6 text-info fw-bold"},$={class:"h5 fw-bold"},tt={class:"lh-base lh-md-lg fs-info text-info"},ot=t("hr",{class:"my-6 text-info opacity-100"},null,-1),et={class:"accordion accordion-flush",id:"accordionFlushProductInfo"},st={class:"accordion-item bg-transparent border-info pb-6"},rt=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingSize"},[t("button",{class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseSize","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseSize",style:{"box-shadow":"none"}}," 作品規格 ")],-1),nt={id:"panelsStayOpen-collapseSize",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingSize"},ct={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},it={class:"accordion-item bg-transparent border-info py-6"},at=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingQty"},[t("button",{class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseQty","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseQty",style:{"box-shadow":"none"}}," 作品版數 ")],-1),lt={id:"panelsStayOpen-collapseQty",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingQty"},dt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},pt={class:"accordion-item bg-transparent pt-6"},ut={class:"accordion-header",id:"panelsStayOpen-headingAbout"},ht={class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseAbout","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseAbout",style:{"box-shadow":"none"}},_t={id:"panelsStayOpen-collapseAbout",class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingAbout"},ft={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},gt=["disabled"],mt={key:0},bt={key:1},yt={key:1,class:"container"},It={class:"py-7 py-md-9"},vt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},Pt=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),wt={class:"row g-3 g-md-8"},St={class:"fs-info fs-md-6 text-info"};function xt(e,s,r,l,o,P){const f=u("BtnFavorite"),w=u("BtnSeeMore"),S=u("ProductCard");return n(),i(h,null,[o.product.productInfo?(n(),i("div",E,[t("div",z,[t("div",U,[t("div",D,[t("div",F,[t("div",M,[o.product.imagesStock?(n(),i("div",Q,[(n(!0),i(h,null,I(o.product.imagesStock,(a,g)=>(n(),i("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+g,onClick:T(At=>P.changeImage(g),["prevent"])},[t("img",{src:a,alt:"product",class:q(["object-fit-contain w-100 h-100",a===o.product.currentImage?"border border-2 border-info":""])},null,10,H)],8,j))),128))])):d("",!0)])]),t("div",G,[t("div",Y,[t("img",{src:o.product.currentImage,alt:o.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,J)])])])]),t("div",K,[t("div",W,[t("div",X,[t("div",null,[t("h3",Z,c(o.product.productInfo.artist),1),t("h2",$,c(o.product.productInfo.title),1)]),_(f,{productId:o.product.productInfo.id},null,8,["productId"])]),t("p",tt,c(o.product.productInfo.content),1),ot,t("div",et,[t("div",st,[rt,t("div",nt,[t("div",ct,c(o.product.productInfo.size),1)])]),t("div",it,[at,t("div",lt,[t("div",dt,[t("p",null,"剩餘版數 "+c(o.product.productInfo.quantity?o.product.productInfo.quantity-o.quantityInCart:"無限"),1),t("p",null,"總版數 "+c(o.product.productInfo.quantity?o.product.productInfo.quantity:"無限"),1)])])]),t("div",pt,[t("h2",ut,[t("button",ht," 關於 "+c(o.artistInfo.title),1)]),t("div",_t,[t("div",ft,c(o.artistInfo.content),1)])])])]),t("button",{type:"button",class:"position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:s[0]||(s[0]=a=>e.addToCart(o.product.productInfo.id,o.qty)),disabled:o.product.productInfo.quantity-o.quantityInCart===0},[o.product.productInfo.quantity-o.quantityInCart!==0?(n(),i("span",mt,"加入購物車．NT$ "+c(o.product.productInfo.price.toLocaleString()),1)):(n(),i("span",bt,"已絕版．NT$ "+c(o.product.productInfo.price.toLocaleString()),1))],8,gt)])])])):d("",!0),o.relatedProducts.length?(n(),i("div",yt,[t("div",It,[t("div",vt,[Pt,o.tempRelatedAllProducts?(n(),O(w,{key:0,linkTo:o.tempRelatedAllProducts.length?`/productlist?artist=${o.artistInfo.title}`:`/productlist?group=${o.product.productInfo.group}`},null,8,["linkTo"])):d("",!0)]),t("div",wt,[(n(!0),i(h,null,I(o.relatedProducts,a=>(n(),i("div",{class:"col-6 col-md-4",key:a.id},[_(S,{item:a,linkTo:`/productInfo/${a.id}`},{price:v(()=>[t("p",St,"NT$ "+c(a.price.toLocaleString()),1)]),favorite:v(()=>[_(f,{productId:a.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])])])):d("",!0)],64)}const Yt=B(V,[["render",xt]]);export{Yt as default};
