import{u as b}from"./userProductStore-CF3CjVKU.js";import{f as S}from"./favoriteStore-CCTfxPmn.js";import{c as _}from"./userCartStore-gDf1fiJf.js";import{m as p,a as y}from"./pinia-D1tb24LR.js";import{B as A}from"./BtnFavorite-Bon6Altn.js";import{P as T}from"./ProductCard-Dp7Ppd8J.js";import{B as k}from"./BtnSeeMore-Z5Q5nfs1.js";import{a_ as u,aR as a,a5 as i,a6 as t,L as h,aY as v,a4 as d,ba as r,ae as f,a3 as C,ac as O,bC as N,aG as q,bx as I}from"./@vue-Cqo5QHyB.js";import{_ as B}from"./index-CoxUwXUV.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:E,VITE_PATH:L}=R,V={data(){return{currentProductId:null,product:{},qty:1,tempRelatedAllProducts:[],relatedProducts:[],artistInfo:{},quantityInCart:""}},watch:{cartsList(){this.getAvailableProductNum(this.currentProductId)},$route(){this.initPageInfo()}},methods:{...p(b,["getAllProducts"]),...p(_,["addToCart","getCartsList"]),...p(S,["recentlyViewed"]),changeImage(e){this.product.currentImage=this.product.imagesStock[e]},getCurrentProduct(e){const s=`${E}/api/${L}/product/${e}`;return this.axios.get(s).then(c=>{const l=c.data.product;return this.product={productInfo:l,currentImage:l.imageUrl},l.imagesUrl&&(this.product.imagesStock=[l.imageUrl,...l.imagesUrl]),this.recentlyViewed(l),l.artist}).catch(c=>console.log(c.response.data.message))},getRelatedProducts(e,s){this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(c=>c.artist===e&&c.id!==s),this.tempRelatedAllProducts.length||(this.tempRelatedAllProducts=this.sortNewest.newestProduct.filter(c=>c.group===this.product.productInfo.group)),this.relatedProducts=this.tempRelatedAllProducts.slice(0,3)},getArtistInfo(e){this.artistInfo=this.sortNewest.newestArtist.filter(s=>s.title===e)[0]},getAvailableProductNum(e){const s=this.cartsList.carts.filter(c=>c.product_id===e);this.quantityInCart=s.length?s[0].qty:0},async initPageInfo(){try{this.currentProductId=this.$route.params.id;const e=await this.getCurrentProduct(this.currentProductId);await this.getAllProducts(),this.getCartsList(),this.getAvailableProductNum(this.currentProductId),this.getRelatedProducts(e,this.currentProductId),this.getArtistInfo(e)}catch(e){throw console.log("錯誤:",e),e}}},mounted(){this.initPageInfo()},computed:{...y(b,["sortNewest"]),...y(_,["cartsList"])},components:{ProductCard:T,BtnSeeMore:k,BtnFavorite:A}},F={key:0,class:"container user-page-container"},z={class:"row g-1 g-lg-6"},j={class:"col-12 col-md-8"},U={class:"row"},D={class:"position-relative col-12 col-lg-3"},M={class:"bg-tertiary h-100 overflow-hidden"},Q={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},H=["onClick"],G=["src"],Y={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},J={class:"bg-tertiary ratio-1x1 overflow-hidden"},K=["src","alt"],W={class:"col-12 col-md-4"},X={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},Z={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},$={class:"mb-2 h6 text-info fw-bold"},tt={class:"h5 fw-bold"},ot={class:"lh-base lh-md-lg fs-info text-info"},et=t("hr",{class:"my-6 text-info opacity-100"},null,-1),st={class:"accordion accordion-flush",id:"accordionFlushProductInfo"},ct={class:"accordion-item bg-transparent border-info pb-6"},at=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingSize"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseSize","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseSize",style:{"box-shadow":"none"}}," 作品規格 ")],-1),rt={id:"panelsStayOpen-collapseSize",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingSize"},it={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},nt={class:"accordion-item bg-transparent border-info py-6"},lt=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingQty"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseQty","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseQty",style:{"box-shadow":"none"}}," 作品版數 ")],-1),dt={id:"panelsStayOpen-collapseQty",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingQty"},pt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},ut={class:"accordion-item bg-transparent pt-6"},ht={class:"accordion-header",id:"panelsStayOpen-headingAbout"},ft={class:"accordion-button collapsed text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseAbout","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseAbout",style:{"box-shadow":"none"}},mt={id:"panelsStayOpen-collapseAbout",class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingAbout"},gt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},bt=["disabled"],_t={key:0},yt={key:1},vt=O('<div><p>router index.js 僅保留產品</p><section class="bg-primary text-white py-md-8 py-7"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Accordion Item #1 </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item&#39;s accordion body.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Accordion Item #2 </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item&#39;s accordion body. Let&#39;s imagine this being filled with some actual content.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> Accordion Item #3 </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item&#39;s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div></div></div></div></section></div>',1),It={key:1,class:"container"},wt={class:"py-7 py-md-9"},Pt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},xt=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),St={class:"row g-3 g-md-8"},At={class:"fs-info fs-md-6 text-info"};function Tt(e,s,c,l,o,w){const m=u("BtnFavorite"),P=u("BtnSeeMore"),x=u("ProductCard");return a(),i(h,null,[o.product.productInfo?(a(),i("div",F,[t("div",z,[t("div",j,[t("div",U,[t("div",D,[t("div",M,[o.product.imagesStock?(a(),i("div",Q,[(a(!0),i(h,null,v(o.product.imagesStock,(n,g)=>(a(),i("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+g,onClick:N(kt=>w.changeImage(g),["prevent"])},[t("img",{src:n,alt:"product",class:q(["object-fit-contain w-100 h-100",n===o.product.currentImage?"border border-2 border-info":""])},null,10,G)],8,H))),128))])):d("",!0)])]),t("div",Y,[t("div",J,[t("img",{src:o.product.currentImage,alt:o.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,K)])])])]),t("div",W,[t("div",X,[t("div",Z,[t("div",null,[t("h3",$,r(o.product.productInfo.artist),1),t("h2",tt,r(o.product.productInfo.title),1)]),f(m,{productId:o.product.productInfo.id},null,8,["productId"])]),t("p",ot,r(o.product.productInfo.content),1),et,t("div",st,[t("div",ct,[at,t("div",rt,[t("div",it,r(o.product.productInfo.size),1)])]),t("div",nt,[lt,t("div",dt,[t("div",pt,[t("p",null,"剩餘版數 "+r(o.product.productInfo.quantity?o.product.productInfo.quantity-o.quantityInCart:"無限"),1),t("p",null,"總版數 "+r(o.product.productInfo.quantity?o.product.productInfo.quantity:"無限"),1)])])]),t("div",ut,[t("h2",ht,[t("button",ft," 關於 "+r(o.artistInfo.title),1)]),t("div",mt,[t("div",gt,r(o.artistInfo.content),1)])])])]),t("button",{type:"button",class:"position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:s[0]||(s[0]=n=>e.addToCart(o.product.productInfo.id,o.qty)),disabled:o.product.productInfo.quantity-o.quantityInCart===0},[o.product.productInfo.quantity-o.quantityInCart!==0?(a(),i("span",_t,"加入購物車．NT$ "+r(o.product.productInfo.price.toLocaleString()),1)):(a(),i("span",yt,"已絕版．NT$ "+r(o.product.productInfo.price.toLocaleString()),1))],8,bt)]),vt])])):d("",!0),o.relatedProducts.length?(a(),i("div",It,[t("div",wt,[t("div",Pt,[xt,o.tempRelatedAllProducts?(a(),C(P,{key:0,linkTo:o.tempRelatedAllProducts.length?`/productlist?artist=${o.artistInfo.title}`:`/productlist?group=${o.product.productInfo.group}`},null,8,["linkTo"])):d("",!0)]),t("div",St,[(a(!0),i(h,null,v(o.relatedProducts,n=>(a(),i("div",{class:"col-6 col-md-4",key:n.id},[f(x,{item:n,linkTo:`/productInfo/${n.id}`},{price:I(()=>[t("p",At,"NT$ "+r(n.price.toLocaleString()),1)]),favorite:I(()=>[f(m,{productId:n.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])])])):d("",!0)],64)}const Zt=B(V,[["render",Tt]]);export{Zt as default};
