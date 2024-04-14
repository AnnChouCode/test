import{C as P}from"./bootstrap-BHi8ZaYr.js";import{u as b}from"./userProductStore-CF3CjVKU.js";import{f as x}from"./favoriteStore-CPjCsCYH.js";import{c as y}from"./userCartStore-CEq2uRuA.js";import{m as u,a as I}from"./pinia-D1tb24LR.js";import{B as C}from"./BtnFavorite-gMntR-BU.js";import{P as k}from"./ProductCard-BkdrnSm0.js";import{B as T}from"./BtnSeeMore-BAHXEJ9e.js";import{a_ as h,aR as c,a5 as d,a6 as t,L as f,aY as v,a4 as p,ba as i,ae as m,a3 as q,bC as N,aG as B,bx as w}from"./@vue-Cqo5QHyB.js";import{_ as O}from"./index-TBxX1RUJ.js";import"./@popperjs-WhmJkuoZ.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./statusStore-bNOcWQBU.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};console.log(P);const{VITE_API:L,VITE_PATH:V}=R,E={data(){return{currentProductId:null,product:{},qty:1,tempRelatedAllProducts:[],relatedProducts:[],artistInfo:{},quantityInCart:"",accordion:null}},watch:{cartsList(){this.getAvailableProductNum(this.currentProductId)},$route(){this.initPageInfo()}},methods:{...u(b,["getAllProducts"]),...u(y,["addToCart","getCartsList"]),...u(x,["recentlyViewed"]),toggleAccordion(e){const s=`accordion${e}`;this.accordion=new P(this.$refs[s],{toggle:!0}),this.accordion.toggle()},changeImage(e){this.product.currentImage=this.product.imagesStock[e]},getCurrentProduct(e){const s=`${L}/api/${V}/product/${e}`;return this.axios.get(s).then(n=>{const l=n.data.product;return this.product={productInfo:l,currentImage:l.imageUrl},l.imagesUrl&&(this.product.imagesStock=[l.imageUrl,...l.imagesUrl]),this.recentlyViewed(l),l.artist}).catch(n=>console.log(n.response.data.message))},getRelatedProducts(e,s){this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(n=>n.artist===e&&n.id!==s),this.tempRelatedAllProducts.length||(this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(n=>n.group===this.product.productInfo.group)),this.relatedProducts=this.tempRelatedAllProducts.slice(0,3)},getArtistInfo(e){this.artistInfo=this.sortNewest.newestArtist.filter(s=>s.title===e)[0]},getAvailableProductNum(e){const s=this.cartsList.carts.filter(n=>n.product_id===e);this.quantityInCart=s.length?s[0].qty:0},async initPageInfo(){try{this.currentProductId=this.$route.params.id;const e=await this.getCurrentProduct(this.currentProductId);await this.getAllProducts(),this.getCartsList(),this.getAvailableProductNum(this.currentProductId),this.getRelatedProducts(e,this.currentProductId),this.getArtistInfo(e)}catch(e){throw console.log("錯誤:",e),e}}},mounted(){this.initPageInfo()},computed:{...I(b,["sortNewest"]),...I(y,["cartsList"])},components:{ProductCard:k,BtnSeeMore:T,BtnFavorite:C}},z={key:0,class:"container user-page-container"},Q={class:"row g-1 g-lg-6"},U={class:"col-12 col-md-8"},D={class:"row"},M={class:"position-relative col-12 col-lg-3"},j={class:"bg-tertiary h-100 overflow-hidden"},F={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},H=["onClick"],G=["src"],Y={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},J={class:"bg-tertiary ratio-1x1 overflow-hidden"},K=["src","alt"],W={class:"col-12 col-md-4"},X={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},Z={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},$={class:"mb-2 h6 text-info fw-bold"},tt={class:"h5 fw-bold"},ot={class:"lh-base lh-md-lg fs-info text-info"},et=t("hr",{class:"my-6 text-info opacity-100"},null,-1),st={class:"accordion accordion-flush",id:"accordion"},rt={class:"accordion-item bg-transparent border-info pb-6"},nt={class:"accordion-header",id:"panelsStayOpen-headingSize"},ct={class:"accordion-collapse collapse show",ref:"accordionSize","aria-labelledby":"panelsStayOpen-headingSize","data-bs-parent":"#accordion"},it={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},dt={class:"accordion-item bg-transparent border-info py-6"},lt={class:"accordion-header",id:"panelsStayOpen-headingQty"},at={id:"panelsStayOpen-collapseQty",class:"accordion-collapse collapse show",ref:"accordionQty","aria-labelledby":"panelsStayOpen-headingQty"},pt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},ut={class:"accordion-item bg-transparent pt-6"},ht={class:"accordion-header",id:"panelsStayOpen-headingAbout"},ft={id:"panelsStayOpen-collapseAbout",class:"accordion-collapse collapse",ref:"accordionAbout","aria-labelledby":"panelsStayOpen-headingAbout"},mt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},gt=["disabled"],_t={key:0},bt={key:1},yt={key:1,class:"container"},It={class:"py-7 py-md-9"},vt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},wt=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),Pt={class:"row g-3 g-md-8"},St={class:"fs-info fs-md-6 text-info"};function At(e,s,n,l,o,a){const g=h("BtnFavorite"),S=h("BtnSeeMore"),A=h("ProductCard");return c(),d(f,null,[o.product.productInfo?(c(),d("div",z,[t("div",Q,[t("div",U,[t("div",D,[t("div",M,[t("div",j,[o.product.imagesStock?(c(),d("div",F,[(c(!0),d(f,null,v(o.product.imagesStock,(r,_)=>(c(),d("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+_,onClick:N(xt=>a.changeImage(_),["prevent"])},[t("img",{src:r,alt:"product",class:B(["object-fit-contain w-100 h-100",r===o.product.currentImage?"border border-2 border-info":""])},null,10,G)],8,H))),128))])):p("",!0)])]),t("div",Y,[t("div",J,[t("img",{src:o.product.currentImage,alt:o.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,K)])])])]),t("div",W,[t("div",X,[t("div",Z,[t("div",null,[t("h3",$,i(o.product.productInfo.artist),1),t("h2",tt,i(o.product.productInfo.title),1)]),m(g,{productId:o.product.productInfo.id},null,8,["productId"])]),t("p",ot,i(o.product.productInfo.content),1),et,t("div",st,[t("div",rt,[t("h2",nt,[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseSize",style:{"box-shadow":"none"},onClick:s[0]||(s[0]=r=>a.toggleAccordion("Size"))}," 作品規格 ")]),t("div",ct,[t("div",it,i(o.product.productInfo.size),1)],512)]),t("div",dt,[t("h2",lt,[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseQty",style:{"box-shadow":"none"},onClick:s[1]||(s[1]=r=>a.toggleAccordion("Qty"))}," 作品版數 ")]),t("div",at,[t("div",pt,[t("p",null,"剩餘版數 "+i(o.product.productInfo.quantity?o.product.productInfo.quantity-o.quantityInCart:"無限"),1),t("p",null,"總版數 "+i(o.product.productInfo.quantity?o.product.productInfo.quantity:"無限"),1)])],512)]),t("div",ut,[t("h2",ht,[t("button",{class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseAbout",style:{"box-shadow":"none"},onClick:s[2]||(s[2]=r=>a.toggleAccordion("About"))}," 關於 "+i(o.artistInfo.title),1)]),t("div",ft,[t("div",mt,i(o.artistInfo.content),1)],512)])])]),t("button",{type:"button",class:"position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:s[3]||(s[3]=r=>e.addToCart(o.product.productInfo.id,o.qty)),disabled:o.product.productInfo.quantity-o.quantityInCart===0},[o.product.productInfo.quantity-o.quantityInCart!==0?(c(),d("span",_t,"加入購物車．NT$ "+i(o.product.productInfo.price.toLocaleString()),1)):(c(),d("span",bt,"已絕版．NT$ "+i(o.product.productInfo.price.toLocaleString()),1))],8,gt)])])])):p("",!0),o.relatedProducts.length?(c(),d("div",yt,[t("div",It,[t("div",vt,[wt,o.tempRelatedAllProducts?(c(),q(S,{key:0,linkTo:o.tempRelatedAllProducts.length?`/productlist?artist=${o.artistInfo.title}`:`/productlist?group=${o.product.productInfo.group}`},null,8,["linkTo"])):p("",!0)]),t("div",Pt,[(c(!0),d(f,null,v(o.relatedProducts,r=>(c(),d("div",{class:"col-6 col-md-4",key:r.id},[m(A,{item:r,linkTo:`/productInfo/${r.id}`},{price:w(()=>[t("p",St,"NT$ "+i(r.price.toLocaleString()),1)]),favorite:w(()=>[m(g,{productId:r.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])])])):p("",!0)],64)}const Xt=O(E,[["render",At]]);export{Xt as default};