import{A,P as C,N as I,S as T,a as E}from"./swiper-Crg6idDU.js";import{B as N}from"./BtnFavorite-joChs9nI.js";import{B as P}from"./BtnSwiperNavigation-Dokikdgg.js";import{_ as V}from"./index-CqVM_4K0.js";import{a_ as l,aR as s,a5 as n,a6 as t,ae as p,bx as _,a4 as a,ba as c,ad as w,L as u,aY as f,a3 as g,aU as U,aS as L}from"./@vue-Cqo5QHyB.js";import"./favoriteStore-D7LzfIJR.js";import"./pinia-Cz9d2yny.js";import"./userCartStore-D2HYVFaZ.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-B4QTl4MQ.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var D={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:R,VITE_PATH:j}=D,F={data(){return{article:{},articleContent:"",modules:[A,C,I]}},methods:{getCurrentArticle(i){const d=`${R}/api/${j}/article/${i}`;return this.axios.get(d).then(r=>{const m=r.data.article;this.article=m,this.handleArticleContent()}).catch(r=>console.log(r.response.data.message))},handleArticleContent(){const i=this.article.content,d=[["<h2>",'<h2 class="mt-8 mb-4 fs-3 fs-md-2">'],["<h3>",'<h3 class="mt-5 mb-3 fs-5 fs-md-3">'],["<h4>",'<h4 class="my-3 fs-6 fs-md-5">'],["<p>",'<p class="mb-3 fs-info fs-md-6">']];this.articleContent=d.reduce((r,[m,e])=>r.replaceAll(m,e),i)},toRelatedTag(i){this.$router.push(`/articleList?tag=${i}`)}},mounted(){const i=this.$route.params.id;this.getCurrentArticle(i)},components:{Swiper:T,SwiperSlide:E,BtnFavorite:N,BtnSwiperNavigation:P}},x=i=>(U("data-v-564170ce"),i=i(),L(),i),H={key:0,class:"container user-page-container"},M={class:"row"},O={class:"col-12 col-md-8 mx-auto"},z={key:0,class:"position-relative mb-5 mb-md-8"},Y={class:"position-relative overflow-hidden"},q=["src"],G={class:"mb-7 mb-md-8 text-center"},J={class:"mb-4 h1 lh-sm title-letter-spacing h1"},K={key:0,class:"text-info"},Q=x(()=>t("span",{class:"px-2 fw-bold"},"‧",-1)),W=["innerHTML"],X={class:"d-flex gap-1 mb-0 flex-wrap"},Z=["onClick"],$={key:1,class:"container"},tt={class:"py-7 py-md-9"},et=x(()=>t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"關聯作品",-1)),ot={class:"row g-3 g-md-8"},st={class:"position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"},it=["src","alt"],nt=["src"],rt={class:"py-3 px-0 px-md-4"},at={class:"mb-2 fs-info fs-md-5 fw-bold text-default"},ct={class:"d-flex justify-content-between align-items-center"},lt={class:"fs-info fs-md-6 text-info"};function dt(i,d,r,m,e,S){const y=l("SwiperSlide"),v=l("BtnSwiperNavigation"),k=l("Swiper"),b=l("router-link"),B=l("BtnFavorite");return s(),n(u,null,[e.article?(s(),n("div",H,[t("div",M,[t("div",O,[e.article.imagesUrl?(s(),n("div",z,[p(k,{slidesPerView:1,spaceBetween:24,pagination:{clickable:!0},loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:e.modules,class:"article-swiper"},{default:_(()=>[(s(!0),n(u,null,f(e.article.imagesUrl,(o,h)=>(s(),g(y,{key:h},{default:_(()=>[t("div",Y,[t("img",{src:o,alt:"news",class:"object-fit-contain w-100 h-100"},null,8,q)])]),_:2},1024))),128)),e.article.imagesUrl.length>1?(s(),g(v,{key:0,position:"top",direction:"next"})):a("",!0),e.article.imagesUrl.length>1?(s(),g(v,{key:1,position:"top",direction:"prev"})):a("",!0)]),_:1},8,["navigation","modules"])])):a("",!0),t("div",G,[t("h2",J,c(e.article.title),1),e.article.create_at?(s(),n("p",K,[w(c(new Date(e.article.create_at*1e3).toLocaleDateString())+" ",1),Q,w(" "+c(e.article.author),1)])):a("",!0)]),t("div",{innerHTML:e.articleContent,class:"mb-7 mb-md-8"},null,8,W),t("div",X,[(s(!0),n(u,null,f(e.article.tag,(o,h)=>(s(),n("button",{type:"button",class:"btn px-3 py-1 bg-light rounded-pill fs-info text-info",key:h,onClick:mt=>S.toRelatedTag(o)},c(o),9,Z))),128))])])])])):a("",!0),e.article.relatedProduct?(s(),n("div",$,[t("div",tt,[et,t("div",ot,[(s(!0),n(u,null,f(e.article.relatedProduct,o=>(s(),n("div",{class:"col-6 col-md-4",key:o.id},[p(b,{to:`/productinfo/${o.id}`},{default:_(()=>[t("div",st,[t("img",{src:o.imageUrl,alt:o.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,it),t("img",{src:o.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,nt)])]),_:2},1032,["to"]),t("div",rt,[p(b,{to:`/productinfo/${o.id}`},{default:_(()=>[t("h3",at,c(o.title),1)]),_:2},1032,["to"]),t("div",ct,[t("p",lt,"NT$ "+c(o.price.toLocaleString()),1),p(B)])])]))),128))])])])):a("",!0)],64)}const Ut=V(F,[["render",dt],["__scopeId","data-v-564170ce"]]);export{Ut as default};
