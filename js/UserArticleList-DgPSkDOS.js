import{u as p}from"./userArticleStore-3pe1PorI.js";import{m as y,a as b}from"./pinia-D1tb24LR.js";import{a_ as v,aR as r,a5 as a,a6 as t,aG as f,bC as u,L as g,aY as h,ba as d,ae as x,bx as w,a4 as C}from"./@vue-Cqo5QHyB.js";import{_ as k}from"./index-IxpjysAi.js";import"./axios-Di5RpEPX.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./sweetalert2-Bxbxx77j.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-B1ByGxZb.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";const L={data(){return{articles:[],filterRules:{}}},methods:{...y(p,["getArticlesList"]),filterHandle(l){if(l){const[s,n]=l;this.filterRules[s]=n;const i=Object.entries(this.filterRules).map(o=>o.join("=")).join("&");this.$router.push(`/articleList?${i}`);return}this.filterRules={},this.$router.push("/articleList")},filterShow(l){const{category:s,tag:n}=l;let i=this.articlesList;s!==void 0&&s!=="all"&&(i=i.filter(o=>o.category===s)),n!==void 0&&(i=i.filter(o=>o.tag.includes(n))),this.articles=i}},watch:{$route(){const l={category:this.$route.query.category,tag:this.$route.query.tag};this.filterShow(l)}},async mounted(){await this.getArticlesList();const l={category:this.$route.query.category,tag:this.$route.query.tag};this.filterShow(l)},computed:{...b(p,["articlesList","tagList"])}},R={class:"container user-page-container flex-grow-1"},$=t("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"最新消息",-1),S={class:"row g-3 g-lg-8"},A={class:"col-lg-3"},H={class:"d-flex flex-row flex-lg-column justify-content-between gap-0 gap-lg-6 list-unstyled fs-info fs-lg-5"},j=t("hr",{class:"my-3 my-lg-7"},null,-1),q={class:"accordion accordion-flush",id:"accordionCategory"},B={class:"accordion-item"},D=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button fs-info fs-lg-5 bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseCategory","aria-expanded":"true","aria-controls":"collapseCategory",style:{"box-shadow":"none"}}," 探索主題 ")],-1),N={id:"collapseCategory",class:"accordion-collapse collapse show","data-bs-parent":"#accordionCategory"},V={class:"accordion-body px-0 py-3 py-lg-6"},U={class:"d-flex gap-1 mb-0 flex-wrap"},z=["onClick"],E={class:"col-lg-9"},F={class:"row g-3 g-lg-8"},G={class:"ratio ratio-4x3 overflow-hidden"},M=["src","alt"],O={class:"px-0 px-lg-3 py-4"},T={class:"mb-2 fs-info fs-md-5 fw-bold doubleline-ellipsis"},Y={key:0,class:"d-flex mb-2 mb-lg-4 text-info fs-info"},I=t("span",{class:"px-2 fw-bold"},"‧",-1),J={class:"single-ellipsis"},K={class:"fs-info fs-md-6 threeline-ellipsis"};function P(l,s,n,i,o,c){const m=v("router-link");return r(),a("div",R,[$,t("div",S,[t("div",A,[t("ul",H,[t("li",null,[t("a",{href:"#",class:f(["text-default",o.filterRules.category===void 0?"fw-bold":""]),onClick:s[0]||(s[0]=u(e=>c.filterHandle(),["prevent"]))},"全部文章",2)]),t("li",null,[t("a",{href:"#",class:f(["text-default",o.filterRules.category==="最新消息"?"fw-bold":""]),onClick:s[1]||(s[1]=u(e=>c.filterHandle(["category","最新消息"]),["prevent"]))},"最新消息",2)]),t("li",null,[t("a",{href:"#",class:f(["text-default",o.filterRules.category==="活動講座"?"fw-bold":""]),onClick:s[2]||(s[2]=u(e=>c.filterHandle(["category","活動講座"]),["prevent"]))},"活動講座",2)]),t("li",null,[t("a",{href:"#",class:f(["text-default",o.filterRules.category==="專欄文章"?"fw-bold":""]),onClick:s[3]||(s[3]=u(e=>c.filterHandle(["category","專欄文章"]),["prevent"]))},"專欄文章",2)])]),j,t("div",q,[t("div",B,[D,t("div",N,[t("div",V,[t("div",U,[(r(!0),a(g,null,h(l.tagList.articleTagList,(e,_)=>(r(),a("button",{type:"button",class:"btn px-3 py-1 bg-light rounded-pill fs-info text-info",key:_,onClick:Q=>c.filterHandle(["tag",e])},d(e),9,z))),128))])])])])])]),t("div",E,[t("div",F,[(r(!0),a(g,null,h(o.articles,e=>(r(),a("div",{class:"col-6",key:e.id},[x(m,{to:`/articleinfo/${e.id}`,class:"text-default"},{default:w(()=>[t("div",G,[t("img",{src:e.imageUrl,alt:e.title,class:"object-fit-cover w-100 h-100"},null,8,M)]),t("div",O,[t("h3",T,d(e.title),1),e.create_at?(r(),a("div",Y,[t("span",null,d(new Date(e.create_at*1e3).toLocaleDateString()),1),I,t("span",J,d(e.author),1)])):C("",!0),t("p",K,d(e.description),1)])]),_:2},1032,["to"])]))),128))])])])])}const ht=k(L,[["render",P]]);export{ht as default};
