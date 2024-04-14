import{P as B}from"./PaginationComponent-8jdgDqJg.js";import{_ as w}from"./index-B_njGGFN.js";import{a_ as h,aR as a,a5 as l,a6 as t,ae as d,bx as p,L as k,aY as y,ad as C,aI as A,ba as m,aG as _}from"./@vue-Cqo5QHyB.js";import"./pinia-D1tb24LR.js";import"./axios-Di5RpEPX.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./sweetalert2-WZH64N0g.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var v={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:f,VITE_PATH:b}=v,$={data(){return{artistsList:[],pagination:{},swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getArtistList(o=1,r="artists"){const c=`${f}/api/${b}/admin/products?page=${o}&category=${r}`;this.axios.get(c).then(n=>{const{products:s,pagination:i}=n.data;this.artistsList=s,this.pagination=i}).catch(n=>{this.swalInfoCheckWithBootstrapButtons.fire({text:n.response.data.message,confirmButtonText:"確認"})})},showArtistPage(o){this.$router.push(`/admin/Artistinfo/${o}`)},deleteArtist(o){const r=`${f}/api/${b}/admin/product/${o}`;this.swalQuestionWithBootstrapButtons.fire({title:"確定要刪除藝術家嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(c=>{if(c.isConfirmed){const n=this.$loading.show();this.axios.delete(r).then(s=>{this.swalInfoCheckWithBootstrapButtons.fire({title:s.data.message,confirmButtonText:"確認"}),this.getArtistList()}).catch(s=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:s.response.data.message,confirmButtonText:"確認"})}).finally(()=>{n.hide()})}})}},mounted(){this.getArtistList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},components:{PaginationComponent:B}},I={class:"overflow-y-scroll scrollbar-y-hide vh-100"},L={class:"d-flex justify-content-between py-4 py-md-7"},T=t("h2",{class:"fw-bold"},"藝術家管理",-1),P={class:"table align-middle fs-info fs-md-6"},E=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",{class:"d-none d-md-table-cell text-center"},"分類"),t("th",null,"狀態"),t("th")])],-1),V={class:"d-none d-md-table-cell"},W={class:"py-1 rounded-pill bg-light text-center text-nowrap"},S={key:0,class:"text-danger text-nowrap"},D={key:1,class:"text-nowrap"},R={class:"btn-group align-items-center"},G=["onClick"],N=t("i",{class:"bi bi-pencil text-default"},null,-1),Q=[N],z=["onClick"],H=t("i",{class:"bi bi-trash text-danger"},null,-1),O=[H];function U(o,r,c,n,s,i){const u=h("router-link"),g=h("PaginationComponent");return a(),l("div",I,[t("div",L,[T,d(u,{to:"/admin/artistinfo/new",class:"btn btn-dark d-flex align-items-center"},{default:p(()=>[C("建立新的藝術家")]),_:1})]),t("div",null,[t("table",P,[E,t("tbody",null,[(a(!0),l(k,null,y(s.artistsList,e=>(a(),l("tr",{key:e.id},[t("td",null,[t("div",{class:"bg-img-center bg-img-contain bg-img-norepeat ratio-1x1",style:A([{"min-width":"50px","max-width":"100px"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),t("td",null,m(e.title),1),t("td",V,[t("div",W,m(e.group),1)]),t("td",null,[e.is_enabled?(a(),l("p",S,"已上架")):(a(),l("p",D,"未上架"))]),t("td",null,[t("div",R,[t("button",{type:"button",class:"btn border-0",onClick:x=>i.showArtistPage(e.id)},Q,8,G),t("button",{type:"button",class:"btn border-0",onClick:x=>i.deleteArtist(e.id)},O,8,z),d(u,{class:_(["d-none d-sm-table-cell btn border-0",{"pe-none":!e.is_enabled}]),target:"_blank",to:`/artistinfo/${e.id}`},{default:p(()=>[t("i",{class:_(["bi bi-house",e.is_enabled?"text-default":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])]),d(g,{pagination:s.pagination,onGetList:i.getArtistList},null,8,["pagination","onGetList"])])])}const ct=w($,[["render",U]]);export{ct as default};
