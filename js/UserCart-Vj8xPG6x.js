import{c as _}from"./userCartStore-gDf1fiJf.js";import{m as C,a as k}from"./pinia-D1tb24LR.js";import{S as L}from"./SwiperProductComponent-DwjNS-nG.js";import{M as B}from"./bootstrap-fL-MoaV8.js";import{a_ as b,aR as d,a5 as n,a6 as t,ae as w,bx as S,L as p,aY as f,bz as v,bq as I,ba as a,ad as m,bp as T,aU as M,aS as V}from"./@vue-Cqo5QHyB.js";import{_ as $}from"./present-DYbhvz3j.js";import{_ as q}from"./index-DoNk55lq.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./userProductStore-CF3CjVKU.js";import"./swiper-Crg6idDU.js";import"./BtnFavorite-InxWeGbY.js";import"./favoriteStore-CCTfxPmn.js";import"./BtnSwiperNavigation-DLGpdBaZ.js";import"./ProductCard-DDY82Rkl.js";import"./BtnSeeMore-DH7QNDQD.js";import"./@popperjs-WhmJkuoZ.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";const E="/test/svg/firework01-DmM0zjFc.svg",g="/test/svg/firework03-BhMQ_5vl.svg",N="/test/svg/firework02-DJ08Fvu4.svg";var P={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:A,VITE_PATH:D}=P,U={data(){return{coupon:"",toastState:!0,doAction:null,modal:null}},methods:{...C(_,["getCartsList","updateCart","deleteCartItem","checkCoupon","copyCouponCode"]),clearCartsList(){this.swalQuestionWithBootstrapButtons.fire({title:"確定要清空購物車嗎？",icon:"question",text:"這個動作無法復原",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認更改"}).then(s=>{if(s.isConfirmed){const e=this.$loading.show(),h=`${A}/api/${D}/carts`;this.axios.delete(h).then(r=>{this.swalInfoCheckWithBootstrapButtons.fire({title:r.data.message,confirmButtonText:"確認"}),this.getCartsList()}).catch(r=>this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:r.response.data.message,confirmButtonText:"確認"})).finally(()=>{e.hide()})}})},checkOrder(){this.$router.push("/order/checkform")},hideCouponModal(){sessionStorage.setItem("shownCouponModal",!0),this.modal.hide()}},mounted(){this.getCartsList(),sessionStorage.getItem("shownCouponModal")||(this.modal=new B(this.$refs.couponModal,{keyboard:!1,backdrop:"static"}),this.modal.show()),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},computed:{...k(_,["cartsList"])},components:{SwiperProductComponent:L}},i=s=>(M("data-v-276c1a5c"),s=s(),V(),s),O={class:"container user-page-container flex-grow-1",style:{"padding-bottom":"0"}},W=i(()=>t("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"購物車",-1)),j={key:0,class:"text-center"},R=i(()=>t("p",{class:"mb-4 fs-4"},"目前購物車內沒有內容",-1)),z={key:1,class:"position-relative"},F=["disabled"],Q={class:"table table-sm mb-4 mb-md-5"},H=i(()=>t("thead",null,[t("tr",{class:"fs-info fs-md-6"},[t("th",{scope:"col",style:{"padding-left":"0"}}),t("th",{scope:"col",class:"fw-bold"},[t("span",{class:"d-none d-md-block"},"商品")]),t("th",{scope:"col",class:"d-none d-md-table-cell fw-bold"},"單價"),t("th",{scope:"col",class:"fw-bold"},"數量"),t("th",{scope:"col",class:"fw-bold"},"總計")])],-1)),J={scope:"row",class:"w-auto w-md-15",style:{"padding-left":"0"}},Y=["onClick"],G=i(()=>t("i",{class:"bi bi-x fs-4"},null,-1)),K=[G],X={class:"d-flex gap-3 gap-md-5"},Z={style:{"max-width":"107px"},class:"ratio-1x1"},tt=["src","alt"],ot={style:{"max-width":"286px","min-width":"80px"},class:"d-flex flex-column"},st={class:"flex-grow-1"},et={class:"mb-1 fw-bold fs-info fs-md-6"},lt={class:"d-none d-md-block fs-info text-info fw-light"},it={class:"fs-info fs-md-6"},at={class:"d-none d-md-table-cell fs-info fs-md-6"},dt={class:"fs-info fs-md-6"},nt=["onUpdate:modelValue","onChange"],ct=["selected","value"],rt=["selected","value"],pt={class:"fs-info fs-md-6",style:{"min-width":"100px"}},mt={class:"row g-6 justify-content-between"},ut={class:"col-12 col-md-5 col-lg-4"},ft={class:"row"},ht={class:"col-6"},_t={class:"border-bottom border-default h-100"},bt={class:"col-6"},wt=["disabled"],vt={class:"col-12 col-md-5"},gt={class:"border-bottom border-default"},xt={class:"row mb-4"},yt=i(()=>t("div",{class:"col fw-bold"},"總計",-1)),Ct={class:"col text-end fw-bold"},kt={class:"row mb-4 mb-md-6"},Lt=i(()=>t("div",{class:"col fw-bold"},"折扣",-1)),Bt={class:"col text-end fw-bold"},St={class:"row py-4 py-md-7"},It=i(()=>t("div",{class:"col fw-bold fs-6 fs-md-5"},"結帳金額",-1)),Tt={class:"col text-end fw-bold fs-6 fs-md-5"},Mt=["disabled"],Vt={class:"modal show",tabindex:"-1",ref:"couponModal"},$t={class:"modal-dialog modal-dialog-centered modal-lg"},qt={class:"position-relative container modal-content rounded-0"},Et={class:"row flex-column flex-md-row"},Nt=i(()=>t("div",{class:"d-none d-md-block col col-md-6 px-0"},[t("img",{src:$,alt:"coupon",class:"object-fit-cover w-100 h-100"})],-1)),Pt={class:"col col-md-6 d-flex flex-column p-4"},At={class:"mx-auto mt-4 mb-5 mt-md-8 mb-md-9","data-aos":"fade-up","data-aos-duration":"3000"},Dt=i(()=>t("h3",{class:"mb-5 mb-md-8 fs-5 fs-md-3 title-letter-spacing lh-base"},[m("為你的第一筆訂單，"),t("span",{class:"d-block"},[m("獲取 "),t("span",{class:"fw-bold"},"97"),m(" 折折扣")])],-1)),Ut=i(()=>t("img",{src:E,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"170px",right:"-121px",top:"77px"}},null,-1)),Ot=i(()=>t("img",{src:g,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"100px",right:"-14px",top:"169px"}},null,-1)),Wt=i(()=>t("img",{src:N,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"67px",left:"-2px",top:"75px"}},null,-1)),jt=i(()=>t("img",{src:g,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"167px",left:"-32px",top:"167px"}},null,-1));function Rt(s,e,h,r,u,c){const x=b("router-link"),y=b("swiperProductComponent");return d(),n(p,null,[t("div",O,[W,s.cartsList.final_total?(d(),n("div",z,[t("button",{class:"position-absolute top-0 start-0 btn btn-primary rounded-0 fs-info text-info",type:"button",onClick:e[0]||(e[0]=(...o)=>c.clearCartsList&&c.clearCartsList(...o)),disabled:!s.cartsList.final_total},"清空購物車",8,F),t("table",Q,[H,t("tbody",null,[(d(!0),n(p,null,f(s.cartsList.carts,o=>(d(),n("tr",{key:o.id},[t("th",J,[t("button",{type:"button",class:"btn px-0",onClick:l=>s.deleteCartItem(o.id)},K,8,Y)]),t("td",null,[t("div",X,[t("div",Z,[t("img",{src:o.product.imageUrl,alt:o.product.title,class:"w-100 h-100 object-fit-contain",style:{"min-width":"40px"}},null,8,tt)]),t("div",ot,[t("div",st,[t("h3",et,a(o.product.title),1),t("p",lt,a(o.product.artist),1)]),t("p",it,a(o.product.size),1)])])]),t("td",at," NT$ "+a(o.product.origin_price.toLocaleString()),1),t("td",dt,[v(t("select",{class:"form-select form-select-sm rounded-0 border-default fs-info fs-md-6","aria-label":".form-select-sm example",style:{width:"65px"},"onUpdate:modelValue":l=>o.qty=l,onChange:l=>s.updateCart(o)},[o.product.quantity?(d(!0),n(p,{key:0},f(o.product.quantity,l=>(d(),n("option",{key:l,selected:l===o.qty,value:l},a(l),9,ct))),128)):(d(),n(p,{key:1},f(99,l=>t("option",{key:l,selected:l===o.qty,value:l},a(l),9,rt)),64))],40,nt),[[T,o.qty,void 0,{number:!0}]])]),t("td",pt," NT$ "+a(o.final_total.toLocaleString()),1)]))),128))])]),t("div",mt,[t("div",ut,[t("div",ft,[t("div",ht,[t("div",_t,[v(t("input",{type:"text",placeholder:"請輸入優惠碼",class:"form-control border-0 text-center h-100","onUpdate:modelValue":e[1]||(e[1]=o=>u.coupon=o)},null,512),[[I,u.coupon,void 0,{trim:!0}]])])]),t("div",bt,[t("button",{class:"py-3 btn btn-outline-default rounded-0 w-100",type:"button",disabled:!s.cartsList.final_total,onClick:e[2]||(e[2]=o=>s.checkCoupon(u.coupon))},"輸入優惠券",8,wt)])])]),t("div",vt,[t("div",gt,[t("div",xt,[yt,t("div",Ct,"NT$ "+a(s.cartsList.total.toLocaleString()),1)]),t("div",kt,[Lt,t("div",Bt,"- NT$ "+a((s.cartsList.total-s.cartsList.final_total).toLocaleString()),1)])]),t("div",St,[It,t("div",Tt,"NT$ "+a(s.cartsList.final_total.toLocaleString()),1)]),t("button",{type:"button",class:"py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:e[3]||(e[3]=(...o)=>c.checkOrder&&c.checkOrder(...o)),disabled:!s.cartsList.final_total},"送出訂單",8,Mt)])])])):(d(),n("div",j,[R,w(x,{to:"/productlist",class:"py-2 py-md-3 px-6 px-md-9 btn btn-default rounded-0 fw-bold"},{default:S(()=>[m("瀏覽作品")]),_:1})])),w(y,{dataCategory:"recently"})]),t("div",Vt,[t("div",$t,[t("div",qt,[t("div",Et,[Nt,t("div",Pt,[t("button",{type:"button",class:"align-self-end btn-close","aria-label":"Close",onClick:e[4]||(e[4]=(...o)=>c.hideCouponModal&&c.hideCouponModal(...o))}),t("div",At,[Dt,t("button",{type:"button",class:"py-2 py-md-3 px-6 px-lg-9 btn btn-default fw-bold rounded-0 w-100 text-nowrap",onClick:e[5]||(e[5]=o=>s.copyCouponCode("present97"))},"點擊複製優惠碼")])])]),Ut,Ot,Wt,jt])])],512)],64)}const wo=q(U,[["render",Rt],["__scopeId","data-v-276c1a5c"]]);export{wo as default};
