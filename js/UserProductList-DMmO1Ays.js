import{u as w}from"./userProductStore-CF3CjVKU.js";import{m as k,a as C}from"./pinia-D1tb24LR.js";import{B as P}from"./BtnFavorite-aly0TnF9.js";import{O as z}from"./bootstrap-fL-MoaV8.js";import{aR as n,a5 as r,a6 as t,aG as d,bC as u,L as p,aY as h,ba as b,a4 as m,a_ as _,ae as v,ad as N,a3 as R,bx as y}from"./@vue-Cqo5QHyB.js";import{_ as x}from"./index-DqTzBMC6.js";import{P as F}from"./ProductCard-BMIauL1V.js";import{P as T}from"./PaginationComponent-BtJ7TOFQ.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./favoriteStore-CCTfxPmn.js";import"./userCartStore-gDf1fiJf.js";import"./@popperjs-WhmJkuoZ.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";const A={data(){return{filterRules:{},mobileNav:null}},props:["allArtists","groupList","productSizeList"],methods:{filterShow(a){if(a){const[i,c]=a;this.filterRules[i]=c,this.filterRules.current_page=1;const l=`${Object.entries(this.filterRules).map(s=>s.join("=")).join("&")}`;this.$router.push(`/productList?${l}`);return}this.filterRules={},this.$router.push("/productList")},openMobileNav(){this.mobileNav.show()},closeMobileNav(){this.mobileNav.hide()}},mounted(){this.mobileNav=new z(this.$refs.mobileNav),this.filterRules=JSON.parse(JSON.stringify(this.$route.query)),delete this.filterRules.current_page}},G={class:"fixed-top z-1 bg-tertiary nav-product-filter w-100"},j={class:"container"},H={class:"d-none d-lg-flex align-items-center"},O={class:"d-flex align-items-center list-unstyled"},B={class:"dropdown"},q=t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0",id:"btnProductSort","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("span",{class:"me-3"},"排序"),t("i",{class:"bi bi-chevron-down"})],-1),I={class:"dropdown-menu p-0 rounded-0","aria-labelledby":"btnProductSort"},M={class:"dropdown"},E=t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0",id:"btnSizeFilter","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("span",{class:"me-3"},"尺寸"),t("i",{class:"bi bi-chevron-down"})],-1),U={class:"dropdown-menu p-0 overflow-y-scroll rounded-0 dropdown-scrollbar","aria-labelledby":"btnSizeFilter"},V=["onClick"],$={class:"dropdown"},D=t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0",id:"btnGroupFilter","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("span",{class:"me-3"},"題材"),t("i",{class:"bi bi-chevron-down"})],-1),J={class:"dropdown-menu p-0 overflow-y-scroll rounded-0 dropdown-scrollbar","aria-labelledby":"btnGroupFilter"},W=["onClick"],Y={class:"dropdown"},K=t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0",id:"btnArtistFilter","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("span",{class:"me-3"},"藝術家"),t("i",{class:"bi bi-chevron-down"})],-1),Q={class:"dropdown-menu p-0 overflow-y-scroll rounded-0 dropdown-scrollbar","aria-labelledby":"btnArtistFilter"},X=["onClick"],Z={class:"d-flex d-lg-none align-items-center justify-content-between"},tt={class:"d-flex align-items-center list-unstyled"},et={class:"dropdown"},st=t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0",id:"btnProductSort","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("span",{class:"me-3"},"排序"),t("i",{class:"bi bi-chevron-down"})],-1),ot={class:"dropdown-menu p-0 rounded-0","aria-labelledby":"btnProductSort"},it=t("span",{class:"me-3"},"篩選",-1),nt=t("i",{class:"bi bi-chevron-down"},null,-1),rt=[it,nt],lt={class:"offcanvas offcanvas-start bg-primary",tabindex:"-1",id:"offcanvasNav","aria-labelledby":"offcanvasNavLabel",ref:"mobileNav"},at=t("div",{class:"offcanvas-header"},[t("h5",{class:"offcanvas-title",id:"offcanvasNavLabel"},"WANDERER LAND"),t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),ct={class:"offcanvas-body"},dt={class:"d-flex flex-column gap-3 gap-sm-5 list-unstyled accordion accordion-flush",id:"accordionFlushFilter"},ut={class:"accordion-item bg-transparent"},pt=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed px-0 text-default bg-transparent",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseSize","aria-expanded":"false","aria-controls":"flush-collapseSize"}," 尺寸 ")],-1),ft={id:"flush-collapseSize",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushSize"},ht={class:"accordion-body px-0 py-0"},bt={class:"list-unstyled","aria-labelledby":"btnSizeFilter"},gt=["onClick"],_t={class:"accordion-item bg-transparent"},mt=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed px-0 text-default bg-transparent",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseGroup","aria-expanded":"false","aria-controls":"flush-collapseGroup"}," 題材 ")],-1),vt={id:"flush-collapseGroup",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushGroup"},wt={class:"accordion-body px-0 py-0"},yt={class:"list-unstyled","aria-labelledby":"btnGroupFilter"},xt=["onClick"],Lt={class:"accordion-item bg-transparent"},St=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed px-0 text-default bg-transparent",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseArtist","aria-expanded":"false","aria-controls":"flush-collapseArtist"}," 藝術家 ")],-1),kt={id:"flush-collapseArtist",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushArtist"},Ct={class:"accordion-body px-0 py-0"},Pt={class:"list-unstyled","aria-labelledby":"btnArtistFilter"},zt=["onClick"],Nt={class:"position-absolute start-0 bottom-0 bg-primary p-4 w-100"};function Rt(a,i,c,l,s,o){return n(),r(p,null,[t("nav",G,[t("div",j,[t("div",H,[t("ul",O,[t("li",null,[t("div",B,[q,t("ul",I,[t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="newest"?"bg-secondary":""]),href:"#",onClick:i[0]||(i[0]=u(e=>o.filterShow(["sort","newest"]),["prevent"]))},"最新作品",2)]),t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="priceHighToLow"?"bg-secondary":""]),href:"#",onClick:i[1]||(i[1]=u(e=>o.filterShow(["sort","priceHighToLow"]),["prevent"]))},"價格：高至低",2)]),t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="priceLowToHigh"?"bg-secondary":""]),href:"#",onClick:i[2]||(i[2]=u(e=>o.filterShow(["sort","priceLowToHigh"]),["prevent"]))},"價格：低至高",2)])])])]),t("li",null,[t("div",M,[E,t("ul",U,[(n(!0),r(p,null,h(c.productSizeList,e=>(n(),r("li",{key:e},[t("a",{class:d(["dropdown-item p-3",s.filterRules.size===e?"bg-secondary":""]),href:"#",onClick:u(f=>o.filterShow(["size",e]),["prevent"])},b(e),11,V)]))),128))])])]),t("li",null,[t("div",$,[D,t("ul",J,[(n(!0),r(p,null,h(c.groupList.productGroupList,e=>(n(),r("li",{key:e},[t("a",{class:d(["dropdown-item p-3",s.filterRules.group===e?"bg-secondary":""]),href:"#",onClick:u(f=>o.filterShow(["group",e]),["prevent"])},b(e),11,W)]))),128))])])]),t("li",null,[t("div",Y,[K,t("ul",Q,[(n(!0),r(p,null,h(c.allArtists,e=>(n(),r("li",{key:e.id},[t("a",{class:d(["dropdown-item p-3",s.filterRules.artist===e.title?"bg-secondary":""]),href:"#",onClick:u(f=>o.filterShow(["artist",e.title]),["prevent"])},b(e.title),11,X)]))),128))])])])]),Object.keys(s.filterRules).length?(n(),r("button",{key:0,class:"btn btn-outline-default rounded-0 fs-info",type:"button",onClick:i[3]||(i[3]=e=>o.filterShow())},"清空篩選")):m("",!0)]),t("div",Z,[t("ul",tt,[t("li",null,[t("div",et,[st,t("ul",ot,[t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="newest"?"bg-secondary":""]),href:"#",onClick:i[4]||(i[4]=u(e=>o.filterShow(["sort","newest"]),["prevent"]))},"最新作品",2)]),t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="priceHighToLow"?"bg-secondary":""]),href:"#",onClick:i[5]||(i[5]=u(e=>o.filterShow(["sort","priceHighToLow"]),["prevent"]))},"價格：高至低",2)]),t("li",null,[t("a",{class:d(["dropdown-item p-3",s.filterRules.sort==="priceLowToHigh"?"bg-secondary":""]),href:"#",onClick:i[6]||(i[6]=u(e=>o.filterShow(["sort","priceLowToHigh"]),["prevent"]))},"價格：低至高",2)])])])]),t("li",null,[t("button",{type:"button",class:"btn d-flex align-items-center px-5 py-4 text-default fs-info border-0","aria-controls":"offcanvasFilterNav",onClick:i[7]||(i[7]=(...e)=>o.openMobileNav&&o.openMobileNav(...e))},rt)])]),Object.keys(s.filterRules).length?(n(),r("button",{key:0,class:"btn btn-outline-default rounded-0 fs-info",type:"button",onClick:i[8]||(i[8]=e=>o.filterShow())},"清空篩選")):m("",!0)])])]),t("div",lt,[at,t("div",ct,[t("ul",dt,[t("li",ut,[pt,t("div",ft,[t("div",ht,[t("ul",bt,[(n(!0),r(p,null,h(c.productSizeList,e=>(n(),r("li",{key:e},[t("a",{class:d(["d-block p-3 text-info",s.filterRules.size===e?"fw-bold text-decoration-underline":""]),href:"#",onClick:u(f=>o.filterShow(["size",e]),["prevent"]),"data-bs-dismiss":"offcanvas"},b(e),11,gt)]))),128))])])])]),t("li",_t,[mt,t("div",vt,[t("div",wt,[t("ul",yt,[(n(!0),r(p,null,h(c.groupList.productGroupList,e=>(n(),r("li",{key:e},[t("a",{class:d(["d-block p-3 text-info",s.filterRules.group===e?"fw-bold text-decoration-underline":""]),href:"#",onClick:u(f=>o.filterShow(["group",e]),["prevent"]),"data-bs-dismiss":"offcanvas"},b(e),11,xt)]))),128))])])])]),t("li",Lt,[St,t("div",kt,[t("div",Ct,[t("ul",Pt,[(n(!0),r(p,null,h(c.allArtists,e=>(n(),r("li",{key:e.id},[t("a",{class:d(["d-block p-3 text-info",s.filterRules.artist===e.title?"fw-bold text-decoration-underline":""]),href:"#",onClick:u(f=>o.filterShow(["artist",e.title]),["prevent"]),"data-bs-dismiss":"offcanvas"},b(e.title),11,zt)]))),128))])])])])])]),t("div",Nt,[Object.keys(s.filterRules).length?(n(),r("button",{key:0,class:"btn btn-outline-default rounded-0 fs-info w-100",type:"button",onClick:i[9]||(i[9]=e=>o.filterShow())},"清空篩選")):m("",!0)])],512)],64)}const Ft=x(A,[["render",Rt]]),Tt={data(){return{productsList:[],tempProductsList:[],pagination:{pageSize:12,total_pages:1,current_page:1},screenWidth:null}},methods:{...k(w,["getAllProducts","getSizeList"]),filterShow(a){const{sort:i,...c}=a;let l=this.sortNewest.newestProduct;Object.entries(c).forEach(([s,o])=>{o!==void 0&&(l=l.filter(e=>e[s]===o))}),i==="newest"?l=l.sort((s,o)=>o.create_at-s.create_at):i==="priceHighToLow"?l=l.sort((s,o)=>o.price-s.price):i==="priceLowToHigh"&&(l=l.sort((s,o)=>s.price-o.price)),this.productsList=l,this.getList()},getPaginationInfo(){this.pagination.total_pages=Math.ceil(this.productsList.length/this.pagination.pageSize),this.pagination.has_pre=this.pagination.current_page!==1,this.pagination.has_next=this.pagination.total_pages>this.pagination.current_page},getList(a=this.pagination.current_page){this.pagination.current_page=a,this.getPaginationInfo();const i=(a-1)*this.pagination.pageSize,c=i+this.pagination.pageSize;this.tempProductsList=this.productsList.slice(i,c);const l={...this.$route.query};l.current_page=a;const s=Object.entries(l).map(o=>o.join("=")).join("&");this.$router.push(`productlist?${s}`),this.backToTop()},backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0},initPageContent(){this.pagination.current_page=+this.$route.query.current_page||1;const a={sort:this.$route.query.sort,artist:this.$route.query.artist,group:this.$route.query.group,size:this.$route.query.size};this.filterShow(a)}},watch:{$route(){this.initPageContent()}},async mounted(){await this.getAllProducts(),this.initPageContent(),this.getSizeList()},computed:{...C(w,["allArtists","sortNewest","groupList","productSizeList"])},components:{UserNavProductFilter:Ft,ProductCard:F,PaginationComponent:T,BtnFavorite:P}},At={class:"container user-product-page-container flex-grow-1"},Gt=t("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"作品",-1),jt={key:0,class:"text-center fs-4"},Ht=t("span",{class:"d-block d-md-inline"},"請「清空篩選」重新選取",-1),Ot={key:1,class:"row g-3 g-md-8 mb-5"},Bt={class:"fs-info fs-md-6 text-info"};function qt(a,i,c,l,s,o){const e=_("UserNavProductFilter"),f=_("BtnFavorite"),L=_("ProductCard"),S=_("PaginationComponent");return n(),r(p,null,[v(e,{allArtists:a.allArtists,groupList:a.groupList,productSizeList:a.productSizeList,onFilterShow:o.filterShow},null,8,["allArtists","groupList","productSizeList","onFilterShow"]),t("div",At,[Gt,s.tempProductsList.length?(n(),r("div",Ot,[(n(!0),r(p,null,h(s.tempProductsList,g=>(n(),r("div",{class:"col-6 col-md-4",key:g.id},[v(L,{item:g,linkTo:`/productInfo/${g.id}`},{price:y(()=>[t("p",Bt,"NT$ "+b(g.price.toLocaleString()),1)]),favorite:y(()=>[v(f,{productId:g.id},null,8,["productId"])]),_:2},1032,["item","linkTo"])]))),128))])):(n(),r("p",jt,[N("沒有對應的作品，"),Ht])),s.tempProductsList.length?(n(),R(S,{key:2,pagination:s.pagination,onGetList:o.getList},null,8,["pagination","onGetList"])):m("",!0)])],64)}const ce=x(Tt,[["render",qt]]);export{ce as default};
