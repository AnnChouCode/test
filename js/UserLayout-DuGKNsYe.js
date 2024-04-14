import{c as $,s as k}from"./userCartStore-gDf1fiJf.js";import{m as x,a as v}from"./pinia-D1tb24LR.js";import{f as M}from"./favoriteStore-CCTfxPmn.js";import{u as L}from"./userProductStore-CF3CjVKU.js";import{a_ as h,aR as l,a5 as r,bz as B,bq as P,a6 as t,L as g,aY as y,ae as n,bx as d,ad as u,ba as _,a4 as C,aG as N,a3 as w,ac as A,aU as U,aS as R}from"./@vue-Cqo5QHyB.js";import{_ as b}from"./index-DoNk55lq.js";import{O as V}from"./bootstrap-fL-MoaV8.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";import"./@popperjs-WhmJkuoZ.js";const z={data(){return{isAutoComplete:!1,search:""}},methods:{...x(L,["getAllProducts"])},computed:{...v(L,["allProducts"]),filterProducts(){return this.allProducts.filter(s=>s.title.includes(this.search)).sort((s,p)=>s.title.localeCompare(p.title))}},watch:{$route(){this.search=""}},mounted(){this.getAllProducts()}},j={class:"position-relative"},D=t("i",{class:"position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"},null,-1),E={key:0,class:"position-absolute z-1 start-0 mt-1 list-unstyled overflow-y-scroll bg-white border border-primary w-100 dropdown-scrollbar"},W={key:0,class:"p-3 text-info"};function I(e,s,p,m,f,a){const o=h("router-link");return l(),r("div",j,[B(t("input",{type:"search",class:"pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info",placeholder:"搜尋作品",style:{height:"28px"},"onUpdate:modelValue":s[0]||(s[0]=c=>f.search=c),"aria-label":"Search",onInput:s[1]||(s[1]=(...c)=>e.debouncedSearch&&e.debouncedSearch(...c))},null,544),[[P,f.search,void 0,{trim:!0}]]),D,f.search?(l(),r("ul",E,[a.filterProducts.length?(l(!0),r(g,{key:1},y(a.filterProducts,c=>(l(),r("li",{key:c.id},[n(o,{to:`/productinfo/${c.id}`,class:"d-block p-3 text-default link-hover-bg"},{default:d(()=>[u(_(c.title),1)]),_:2},1032,["to"])]))),128)):(l(),r("li",W," 未搜尋到符合輸入的作品 "))])):C("",!0)])}const F=b(z,[["render",I]]),O={data(){return{mobileNav:null}},methods:{showCartList(){window.innerWidth>=991.98&&this.$refs.cartList.classList.remove("d-none")},hideCartList(){window.innerWidth>=991.98&&this.$refs.cartList.classList.add("d-none")},openMobileNav(){this.mobileNav.show()},closeMobileNav(){this.mobileNav.hide()}},watch:{$route(){this.closeMobileNav()}},mounted(){this.mobileNav=new V(this.$refs.mobileNav)},computed:{...v($,["cartsList"]),...v(M,["favoriteList"])},components:{ProductSearch:F}},q={class:"fixed-top"},G={class:"bg-primary"},Y={class:"position-relative d-flex align-items-center container justify-content-between"},H=t("i",{class:"bi bi-list fs-5"},null,-1),J=[H],K={class:"d-none d-lg-flex align-items-center list-unstyled"},Q=t("h1",{class:"position-absolute top-50 start-50 translate-middle"},[t("a",{href:"#/home",class:"d-block h-100 h5 fs-md-20 fw-bold text-default link-hover-scale-grow"},"WANDERER LAND")],-1),X={class:"d-flex align-items-center list-unstyled"},Z={class:"d-none d-lg-block"},tt={class:"py-4 px-2"},st=t("i",{class:"bi bi-handbag"},null,-1),et={key:0,class:"position-absolute badge bg-default rounded-circle text-white",style:{top:"8px",right:"-10px","font-size":"8px"}},ot={key:0},it={class:"py-3 text-center border-bottom border-default"},at={class:"list-unstyled"},lt={class:"row g-5"},nt={class:"col-4"},rt=["src","alt"],ct={class:"col-8 d-flex flex-column justify-content-between"},dt={class:"fw-bold single-ellipsis"},ut={class:"fs-info single-ellipsis"},pt={class:"d-flex py-3 justify-content-between mb-6 fw-bold"},ft=t("p",null,"總計",-1),_t={key:1},ht=t("p",{class:"py-3 text-center"},"目前購物車內沒有內容",-1),bt={class:"offcanvas offcanvas-start bg-primary",tabindex:"-1",id:"offcanvasNav","aria-labelledby":"offcanvasNavLabel",ref:"mobileNav"},mt=t("div",{class:"offcanvas-header"},[t("h5",{class:"offcanvas-title",id:"offcanvasNavLabel"},"WANDERER LAND"),t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),vt={class:"offcanvas-body"},gt={class:"d-flex flex-column gap-3 gap-sm-5 list-unstyled"};function xt(e,s,p,m,f,a){const o=h("router-link"),c=h("ProductSearch");return l(),r(g,null,[t("div",q,[t("nav",G,[t("div",Y,[t("button",{class:"d-block d-lg-none px-0 border-0 bg-transparent",type:"button","aria-controls":"offcanvasNav",onClick:s[0]||(s[0]=(...i)=>a.openMobileNav&&a.openMobileNav(...i))},J),t("ul",K,[t("li",null,[n(o,{to:"/productlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:d(()=>[u("作品")]),_:1})]),t("li",null,[n(o,{to:"/artistlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:d(()=>[u("藝術家")]),_:1})]),t("li",null,[n(o,{to:"/articlelist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:d(()=>[u("最新消息")]),_:1})])]),Q,t("ul",X,[t("li",Z,[n(c)]),t("li",tt,[n(o,{to:"/favoritelist",class:"text-default link-hover-text-info"},{default:d(()=>[t("i",{class:N(["bi",e.favoriteList.length?"bi-heart-fill":"bi-heart"])},null,2)]),_:1})]),t("li",{class:"py-4 ps-2",onMouseenter:s[3]||(s[3]=(...i)=>a.showCartList&&a.showCartList(...i)),onMouseleave:s[4]||(s[4]=(...i)=>a.hideCartList&&a.hideCartList(...i)),style:{"padding-right":"8px","margin-right":"-8px"}},[n(o,{to:"/cart",class:"position-relative text-default link-hover-text-info"},{default:d(()=>[st,e.cartsList.final_total?(l(),r("div",et,_(e.cartsList.carts.length),1)):C("",!0)]),_:1}),t("div",{class:"d-none position-absolute end-0 top-100 px-6 pb-7 bg-primary",ref:"cartList",style:{"max-width":"375px"},onMouseenter:s[1]||(s[1]=(...i)=>a.showCartList&&a.showCartList(...i)),onMouseleave:s[2]||(s[2]=(...i)=>a.hideCartList&&a.hideCartList(...i))},[e.cartsList.total?(l(),r("div",ot,[t("p",it,_(e.cartsList.carts.length)+" 個商品",1),t("ul",at,[(l(!0),r(g,null,y(e.cartsList.carts,i=>(l(),r("li",{key:i.product_id,class:"py-3 border-bottom border-default"},[t("div",lt,[t("div",nt,[t("img",{src:i.product.imageUrl,alt:i.product.title,class:"w-100 h-100 object-fit-contain"},null,8,rt)]),t("div",ct,[t("div",null,[t("p",dt,_(i.product.title),1),t("p",ut,_(i.product.artist),1)]),t("p",null,"NT$ "+_(i.product.price.toLocaleString()),1),t("p",null,"數量："+_(i.qty),1)])])]))),128))]),t("div",pt,[ft,t("p",null,"NT$ "+_(e.cartsList.final_total.toLocaleString()),1)]),n(o,{to:"/cart",class:"py-2 btn btn-default text-center rounded-0 w-100 fw-bold"},{default:d(()=>[u("前往購物車")]),_:1})])):(l(),r("div",_t,[ht,n(o,{to:"/productlist",class:"py-2 btn btn-default text-center rounded-0 w-100 fw-bold"},{default:d(()=>[u("瀏覽作品")]),_:1})]))],544)],32)])])])]),t("div",bt,[mt,t("div",vt,[t("ul",gt,[t("li",null,[n(c)]),t("li",null,[n(o,{to:"/productlist",class:"d-block py-4 text-default navlink-underline"},{default:d(()=>[u("作品")]),_:1})]),t("li",null,[n(o,{to:"/artistlist",class:"d-block py-4 text-default navlink-underline"},{default:d(()=>[u("藝術家")]),_:1})]),t("li",null,[n(o,{to:"/articlelist",class:"d-block py-4 text-default navlink-underline"},{default:d(()=>[u("最新消息")]),_:1})])])])],512)],64)}const yt=b(O,[["render",xt]]),kt={props:["isLoggedin"]},Lt={class:"bg-primary w-100"},wt={class:"d-flex justify-content-between align-items-center container py-6 py-md-7"},$t=A('<div class="col-8"><div class="d-flex gap-3 mb-3"><a href="https://www.linkedin.com/in/annchou/" target="_blank"><i class="bi bi-linkedin fs-4 text-default"></i></a><a href="https://github.com/AnnChouCode/WandererLand" target="_blank"><i class="bi bi-github fs-4 text-default"></i></a></div><p class="fs-info fs-md-6">本網站僅供個人作品使用，<span class="d-block d-sm-inline">不提供商業用途</span></p></div>',1),Ct={class:"col-4 text-end"};function Nt(e,s,p,m,f,a){const o=h("RouterLink");return l(),r("footer",Lt,[t("div",wt,[$t,t("div",Ct,[p.isLoggedin?(l(),w(o,{key:1,to:"/admin",class:"text-default fs-info fs-md-6"},{default:d(()=>[u(" 管理者後台 ")]),_:1})):(l(),w(o,{key:0,to:"/userlogin",class:"text-default fs-info fs-md-6"},{default:d(()=>[u(" 登入 ")]),_:1}))])])])}const Tt=b(kt,[["render",Nt]]),St={props:["adminOrderState","adminOrderAction"],computed:{...v(k,["toastMsgList"])},methods:{...x(k,["clearMsg"])}},Mt={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"1056"}},Bt={class:"toast-body d-flex align-items-center justify-content-between"},Pt={class:"d-flex fw-bold"},At={class:"mb-0"},Ut=["onClick"];function Rt(e,s,p,m,f,a){return l(),r("div",Mt,[(l(!0),r(g,null,y(e.toastMsgList,(o,c)=>(l(),r("div",{class:"toast show mb-1 bg-tertiary",role:"alert","aria-live":"assertive","aria-atomic":"true",key:c},[t("div",Bt,[t("div",Pt,[t("i",{class:N(["bi me-2 text-default",o.icon])},null,2),t("p",At,_(o.msg),1)]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:i=>e.clearMsg(c)},null,8,Ut)])]))),128))])}const Vt=b(St,[["render",Rt]]),zt={methods:{backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},jt=e=>(U("data-v-740187ff"),e=e(),R(),e),Dt=jt(()=>t("i",{class:"fs-1 bi bi-arrow-up-circle-fill text-default link-hover-text-info"},null,-1)),Et=[Dt];function Wt(e,s,p,m,f,a){return l(),r("button",{type:"button",class:"btn",onClick:s[0]||(s[0]=(...o)=>a.backToTop&&a.backToTop(...o))},Et)}const It=b(zt,[["render",Wt],["__scopeId","data-v-740187ff"]]),Ft={data(){return{isLoggedin:"false"}},methods:{...x($,["getCartsList"])},mounted(){var s;((s=document.cookie.split("; ").find(p=>p.startsWith("user=")))==null?void 0:s.split("=")[1])||(this.isLoggedin=!this.isLoggedin),this.getCartsList()},components:{ToastComponent:Vt,UserNavBar:yt,UserFooter:Tt,BtnBackToTop:It}},Ot={class:"d-flex flex-column dvh-100"};function qt(e,s,p,m,f,a){const o=h("UserNavBar"),c=h("RouterView"),i=h("UserFooter"),T=h("ToastComponent"),S=h("BtnBackToTop");return l(),r("div",Ot,[n(o),n(c),n(i,{isLoggedin:f.isLoggedin},null,8,["isLoggedin"]),n(T,{class:"position-fixed z-3 end-0",style:{bottom:"45px"}}),n(S,{class:"position-fixed z-3 bottom-0 end-0"})])}const ps=b(Ft,[["render",qt]]);export{ps as default};
