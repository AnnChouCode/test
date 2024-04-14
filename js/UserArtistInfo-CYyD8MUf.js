import{u}from"./userProductStore-CF3CjVKU.js";import{m as I,a as P}from"./pinia-D1tb24LR.js";import{B as y}from"./BtnFavorite-aly0TnF9.js";import{P as k}from"./ProductCard-BMIauL1V.js";import{a_ as _,aR as a,a5 as c,a6 as t,L as l,aY as h,a4 as d,ba as m,bC as x,aG as A,ae as g,bx as f}from"./@vue-Cqo5QHyB.js";import{_ as C}from"./index-DqTzBMC6.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./favoriteStore-CCTfxPmn.js";import"./userCartStore-gDf1fiJf.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var S={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:T,VITE_PATH:B}=S,E={data(){return{artist:{},relatedProducts:[]}},methods:{...I(u,["getAllProducts"]),changeImage(s){this.artist.currentImage=this.artist.imagesStock[s]},getCurrentArtist(s){const e=`${T}/api/${B}/product/${s}`;return this.axios.get(e).then(r=>{const n=r.data.product;return this.artist={artistInfo:n,currentImage:n.imageUrl},n.imagesUrl&&(this.artist.imagesStock=[n.imageUrl,...n.imagesUrl]),n.title}).catch(r=>console.log(r.response.data.message))},getRelatedProducts(s){let e=this.sortNewest.newestProduct.filter(r=>r.artist===s);e.length||(e=this.sortNewest.newestProduct.filter(r=>r.group===this.artist.artistInfo.group)),this.relatedProducts=e}},async mounted(){try{const s=this.$route.params.id,e=await this.getCurrentArtist(s);await this.getAllProducts(),this.getRelatedProducts(e)}catch(s){throw console.log("錯誤:",s),s}},computed:{...P(u,["sortNewest"])},components:{ProductCard:k,BtnFavorite:y}},V={key:0,class:"container user-page-container"},N={class:"row g-1 g-lg-6"},R={class:"col-12 col-md-8"},U={class:"row"},D={class:"position-relative col-12 col-lg-3"},F={class:"bg-tertiary h-100 overflow-hidden"},L={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},j=["onClick"],H=["src"],M={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},O={class:"bg-tertiary ratio-1x1 overflow-hidden"},z=["src","alt"],G={class:"col-12 col-md-4"},Y={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},q={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},J={class:"h5 fw-bold"},K={class:"lh-base lh-md-lg fs-info text-info"},Q={key:1,class:"container"},W={class:"py-7 py-md-9"},X=t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"藝術家作品",-1),Z={class:"row g-3 g-md-8"},$={class:"fs-info fs-md-6 text-info"};function tt(s,e,r,n,o,v){const w=_("BtnFavorite"),b=_("ProductCard");return a(),c(l,null,[o.artist.artistInfo?(a(),c("div",V,[t("div",N,[t("div",R,[t("div",U,[t("div",D,[t("div",F,[o.artist.imagesStock?(a(),c("div",L,[(a(!0),c(l,null,h(o.artist.imagesStock,(i,p)=>(a(),c("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+p,onClick:x(st=>v.changeImage(p),["prevent"])},[t("img",{src:i,alt:"product",class:A(["object-fit-contain w-100 h-100",i===o.artist.currentImage?"border border-2 border-info":""])},null,10,H)],8,j))),128))])):d("",!0)])]),t("div",M,[t("div",O,[t("img",{src:o.artist.currentImage,alt:o.artist.artistInfo.title,class:"object-fit-contain w-100 h-100"},null,8,z)])])])]),t("div",G,[t("div",Y,[t("div",q,[t("div",null,[t("h2",J,m(o.artist.artistInfo.title),1)])]),t("p",K,m(o.artist.artistInfo.content),1)])])])])):d("",!0),o.relatedProducts.length?(a(),c("div",Q,[t("div",W,[X,t("div",Z,[(a(!0),c(l,null,h(o.relatedProducts,i=>(a(),c("div",{class:"col-6 col-md-4",key:i.id},[g(b,{item:i,linkTo:`/productInfo/${i.id}`},{price:f(()=>[t("p",$,"NT$ "+m(i.price.toLocaleString()),1)]),favorite:f(()=>[g(w,{productId:i.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])])])):d("",!0)],64)}const kt=C(E,[["render",tt]]);export{kt as default};
