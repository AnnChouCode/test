import{u as x}from"./adminProductStore-K5YG__WE.js";import{b as C}from"./pinia-D1tb24LR.js";import{M as B}from"./bootstrap-fL-MoaV8.js";import{aR as n,a5 as r,a6 as e,aI as g,bz as I,bq as w,a_ as h,a4 as q,L as _,aY as y,ae as i,bx as P,aG as u,ba as A,bm as T,ad as S}from"./@vue-Cqo5QHyB.js";import{_ as U}from"./index-DoNk55lq.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-WZH64N0g.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./@popperjs-WhmJkuoZ.js";import"./vue-axios-BaogFJPH.js";import"./vue-loading-overlay-DxSJf-C0.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var D={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:E,VITE_PATH:z}=D,j={props:["isCover"],data(){return{modal:null,accept:["jpg","jpeg","png"],imgUrl:""}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},handleFile(s){const t=s.target.files[0];if(t.size/(1024*1024)>3)return this.$swal.fire({icon:"error",text:"請上傳 3MB 以內的圖檔"}),this.resetDropArea(),!1;const o=t.type.split("/")[1];if(!this.accept.find(d=>d===o))return this.$swal.fire({icon:"error",text:"僅限使用 jpg、jpeg 與 png 格式圖檔"}),this.resetDropArea(),!1;this.uploadImage(t)},uploadImage(s){const t=this.$loading.show(),m=new FormData;m.append("file-to-upload",s),this.axios.post(`${E}/api/${z}/admin/upload`,m).then(f=>{this.imgUrl=f.data.imageUrl}).catch(f=>{this.$swal.fire({icon:"error",text:f.response})}).finally(()=>{t.hide()})},resetDropArea(){this.imgUrl="",this.$refs.dropArea.value=""},submitImgUrl(){this.isCover?this.$emit("submitImgUrl","imageUrl",this.imgUrl):this.$emit("submitImgUrl","imagesUrl",this.imgUrl),this.resetDropArea(),this.closeModal()}},mounted(){this.modal=new B(this.$refs.uploadImageModal,{keyboard:!1,backdrop:"static"})}},N={ref:"uploadImageModal",class:"modal fade","aria-hidden":"true","aria-labelledby":"uploadImageModal",tabindex:"-1"},L={class:"modal-dialog modal-lg modal-dialog-centered"},$={class:"modal-content"},R={class:"modal-header"},F={key:0,class:"modal-title text-bold fw-bold"},G={key:1,class:"modal-title text-bold fw-bold"},H=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body container"},O={class:"row g-3"},Y={class:"col-12 col-md-4"},J={class:"drop-area ratio-1x1"},K={key:1},Q={class:"col-12 col-md-8"},X=e("p",{class:"mb-1"},"僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下",-1),Z={ref:"imgForm"},ee=["accept"],te={class:"modal-footer"};function oe(s,t,m,f,o,a){return n(),r("div",N,[e("div",L,[e("div",$,[e("div",R,[m.isCover?(n(),r("h5",F,"上傳封面")):(n(),r("h5",G,"上傳圖片")),H]),e("div",W,[e("div",O,[e("div",Y,[e("div",J,[o.imgUrl?(n(),r("div",{key:0,style:g(`background-image:url(${o.imgUrl})`),class:"w-100 h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(n(),r("p",K,"圖片預覽"))])]),e("div",Q,[X,e("form",Z,[I(e("input",{class:"form-control mb-1",type:"text",placeholder:"請填入圖片網址","onUpdate:modelValue":t[0]||(t[0]=d=>o.imgUrl=d)},null,512),[[w,o.imgUrl]]),e("input",{class:"form-control",type:"file",ref:"dropArea",accept:o.accept,onChange:t[1]||(t[1]=(...d)=>a.handleFile&&a.handleFile(...d))},null,40,ee)],512)])])]),e("div",te,[e("button",{type:"button",class:"btn btn-dark",onClick:t[2]||(t[2]=(...d)=>a.submitImgUrl&&a.submitImgUrl(...d))},"送出")])])])],512)}const se=U(j,[["render",oe]]);var le={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const b=x(),{VITE_API:ie,VITE_PATH:ne}=le,re={data(){return{isNewProduct:!1,tempProductInfo:{},tempGroupList:[],isCover:!1,swalInfoCheckWithBootstrapButtons:null}},methods:{getProductInfo(s,t){this.tempProductInfo=s[t]},chooseGroup(s){this.tempProductInfo.group=s},deleteImage(s,t){s==="imageUrl"?this.tempProductInfo.imageUrl="":s==="imagesUrl"?this.tempProductInfo.imagesUrl.splice(t,1):(this.tempProductInfo.imageUrl="",this.tempProductInfo.imagesUrl=[])},openImageModal(s){s==="isCover"?this.isCover=!0:this.isCover=!1,this.$refs.uploadImageModal.openModal()},getImgUrl(s,t){if(s==="imageUrl"){this.tempProductInfo.imageUrl=t;return}this.tempProductInfo.imagesUrl?this.tempProductInfo.imagesUrl.push(t):this.tempProductInfo.imagesUrl=[t]},updateProductInfo(){let s=`${ie}/api/${ne}/admin/product`;const t=this.isNewProduct?"post":"put";if(!this.tempProductInfo.imageUrl||!this.tempProductInfo.imagesUrl||this.tempProductInfo.imageUrl===""||!this.tempProductInfo.imagesUrl.length){this.swalInfoCheckWithBootstrapButtons.fire("圖片欄位為必填");return}this.isNewProduct||(s+=`/${this.tempProductInfo.id}`),this.isNewProduct&&(this.tempProductInfo.category="products",this.tempProductInfo.create_at=Math.floor(Date.now()/1e3)),this.tempProductInfo.size=this.tempProductInfo.size.replace("×","x"),this.axios[t](s,{data:this.tempProductInfo}).then(m=>{this.swalInfoCheckWithBootstrapButtons.fire(m.data.message),this.$router.push("/admin/products")}).catch(m=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:m.response.data.message,confirmButtonText:"確認"})})},async fetchData(s){try{if(await b.getAllProducts(),this.tempGroupList=[...b.groupList],!s)return;this.getProductInfo(b.allProducts,s)}catch(t){console.log(t.response.data.message)}}},computed:{...C(x)},components:{UploadImageModal:se},mounted(){const s=this.$route.params.id;s||(this.isNewProduct=!0),this.fetchData(s),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},de={class:"overflow-y-scroll scrollbar-y-hide vh-100"},ae={key:0,class:"py-4 py-md-7 fw-bold"},ce={key:1,class:"py-4 py-md-7 fw-bold"},me={class:"mb-7"},ue=e("h5",{class:"mb-3 fw-bold has-required"},"商品圖片",-1),pe={class:"row g-1 mb-3"},fe={class:"col-6 col-md-2"},he={class:"ratio-1x1"},_e={class:"position-relative border border-1 h-100"},be=e("i",{class:"bi bi-trash"},null,-1),ge=[be],Ie=e("div",{class:"position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"}," 封面圖片 ",-1),ve={key:2,class:"h-100"},ye=e("i",{class:"bi bi-image mb-2 text-default"},null,-1),Pe=e("p",{class:"text-default"},"目前無封面",-1),xe=[ye,Pe],we={class:"position-relative border border-1 h-100"},Ue=["onClick"],ke=e("i",{class:"bi bi-trash"},null,-1),Ve=[ke],Me={class:"col-6 col-md-2"},Ce=e("i",{class:"bi bi-trash me-2"},null,-1),Be=e("span",null,"刪除所有圖片",-1),qe=[Ce,Be],Ae=e("h5",{class:"mb-5 fw-bold"},"商品基本資訊",-1),Te=e("label",{for:"title",class:"form-label fw-bold has-required"},"商品名稱",-1),Se={class:"row g-5 g-md-1"},De={class:"col-md-6"},Ee=e("label",{for:"artist",class:"form-label fw-bold has-required"},"藝術家",-1),ze={class:"col-md-6"},je=e("label",{for:"size",class:"me-2 form-label fw-bold has-required"},"商品尺寸",-1),Ne={class:"row g-5 g-md-1"},Le={class:"col-md-6"},$e=e("label",{for:"quantity",class:"me-2 form-label fw-bold"},"作品版數",-1),Re=e("span",{class:"fs-info text-info"},"若未填寫則不限版數",-1),Fe={class:"col-md-6"},Ge=e("label",{for:"unit",class:"form-label fw-bold has-required"},"商品單位",-1),He=e("label",{for:"group",class:"form-label fw-bold has-required"},"商品分類",-1),We={class:"d-flex align-items-center text-nowrap fs-info"},Oe=e("span",{class:"text-info"},"點擊帶入分類：",-1),Ye={class:"d-flex gap-1 mb-0 flex-wrap"},Je=["onClick"],Ke={class:"row g-3 g-md-1"},Qe={class:"col-md-6"},Xe=e("label",{for:"origin_price",class:"form-label fw-bold has-required"},"原價",-1),Ze={class:"col-md-6"},et=e("label",{for:"price",class:"form-label fw-bold has-required"},"售價",-1),tt=e("label",{for:"content",class:"form-label fw-bold"},"說明內容",-1),ot={class:"form-check form-switch"},st={class:"form-check-label",for:"is_enabled"},lt={key:0},it={key:1},nt={class:"d-flex justify-content-end gap-2 pt-3"},rt=e("button",{type:"submit",class:"btn btn-dark text-white"},"確認",-1);function dt(s,t,m,f,o,a){const d=h("v-field"),p=h("error-message"),k=h("router-link"),V=h("v-form"),M=h("UploadImageModal");return n(),r(_,null,[e("div",de,[o.isNewProduct?(n(),r("h2",ae,"新增商品")):(n(),r("h2",ce,"編輯商品")),e("div",null,[e("div",me,[ue,e("div",pe,[e("div",fe,[e("div",he,[e("div",_e,[o.tempProductInfo.imageUrl?(n(),r("button",{key:0,type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:t[0]||(t[0]=c=>a.deleteImage("imageUrl",s.idx))},ge)):q("",!0),Ie,o.tempProductInfo.imageUrl?(n(),r("div",{key:1,style:g(`background-image:url(${o.tempProductInfo.imageUrl})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(n(),r("div",ve,[e("button",{onClick:t[1]||(t[1]=c=>a.openImageModal("isCover")),class:"d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary btn btn-light rounded-0",type:"button"},xe)]))])])]),(n(!0),r(_,null,y(o.tempProductInfo.imagesUrl,(c,l)=>(n(),r("div",{class:"col-6 col-md-2",key:l},[e("div",we,[e("button",{type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:v=>a.deleteImage("imagesUrl",l)},Ve,8,Ue),e("div",{style:g(`background-image:url(${c})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)])]))),128)),e("div",Me,[e("button",{onClick:t[2]||(t[2]=c=>a.openImageModal("inNotCover")),class:"d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0 ratio-1x1 border border-1",type:"button"}," 新增圖片 ")])]),e("button",{typs:"button",class:"p-0 btn text-danger",onClick:t[3]||(t[3]=(...c)=>a.deleteImage&&a.deleteImage(...c))},qe)]),e("div",null,[Ae,i(V,{class:"d-flex flex-column gap-5",onSubmit:a.updateProductInfo},{default:P(({errors:c})=>[e("div",null,[Te,i(d,{type:"text",class:u(["form-control",{"is-invalid":c.名稱}]),placeholder:"請輸入商品名稱",modelValue:o.tempProductInfo.title,"onUpdate:modelValue":t[4]||(t[4]=l=>o.tempProductInfo.title=l),modelModifiers:{trim:!0},id:"title",name:"名稱",rules:"required"},null,8,["modelValue","class"]),i(p,{name:"名稱",class:"invalid-feedback"})]),e("div",Se,[e("div",De,[Ee,i(d,{id:"artist",name:"藝術家",type:"text",class:u(["form-control",{"is-invalid":c.藝術家}]),placeholder:"請輸入藝術家名稱",rules:"required",modelValue:o.tempProductInfo.artist,"onUpdate:modelValue":t[5]||(t[5]=l=>o.tempProductInfo.artist=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),i(p,{name:"藝術家",class:"invalid-feedback"})]),e("div",ze,[je,i(d,{id:"size",name:"尺寸",type:"text",class:u(["form-control",{"is-invalid":c.size}]),placeholder:"請輸入商品尺寸",min:"0",modelValue:o.tempProductInfo.size,"onUpdate:modelValue":t[6]||(t[6]=l=>o.tempProductInfo.size=l)},null,8,["class","modelValue"]),i(p,{name:"尺寸",class:"invalid-feedback"})])]),e("div",Ne,[e("div",Le,[$e,Re,i(d,{id:"quantity",name:"quantity",type:"number",class:u(["form-control",{"is-invalid":c.quantity}]),placeholder:"請輸入作品版數",min:"0",modelValue:o.tempProductInfo.quantity,"onUpdate:modelValue":t[7]||(t[7]=l=>o.tempProductInfo.quantity=l),modelModifiers:{number:!0,trim:!0}},null,8,["class","modelValue"])]),e("div",Fe,[Ge,i(d,{id:"unit",name:"單位",type:"text",class:u(["form-control",{"is-invalid":c.unit}]),placeholder:"請輸入商品單位",rules:"required",modelValue:o.tempProductInfo.unit,"onUpdate:modelValue":t[8]||(t[8]=l=>o.tempProductInfo.unit=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),i(p,{name:"單位",class:"invalid-feedback"})])]),e("div",null,[e("div",null,[He,i(d,{type:"text",id:"group",name:"分類",class:u(["form-control mb-1",{"is-invalid":c.分類}]),placeholder:"請輸入商品分類",rules:"required",modelValue:o.tempProductInfo.group,"onUpdate:modelValue":t[9]||(t[9]=l=>o.tempProductInfo.group=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),i(p,{name:"分類",class:"invalid-feedback"})]),e("div",We,[Oe,e("div",Ye,[(n(!0),r(_,null,y(o.tempGroupList,(l,v)=>(n(),r("button",{type:"button",class:"btn btn-light rounded-pill py-1 fs-info text-info",value:"item",key:v,onClick:at=>a.chooseGroup(l)},A(l),9,Je))),128))])])]),e("div",Ke,[e("div",Qe,[Xe,i(d,{type:"number",id:"origin_price",name:"原價",class:u(["form-control",{"is-invalid":c.原價}]),placeholder:"請輸入原價",rules:"required",min:"0",modelValue:o.tempProductInfo.origin_price,"onUpdate:modelValue":t[10]||(t[10]=l=>o.tempProductInfo.origin_price=l),modelModifiers:{number:!0,trim:!0}},null,8,["class","modelValue"]),i(p,{name:"原價",class:"invalid-feedback"})]),e("div",Ze,[et,i(d,{type:"number",id:"price",name:"售價",class:u(["form-control",{"is-invalid":c.售價}]),placeholder:"請輸入商品售價",rules:"required",min:"0",modelValue:o.tempProductInfo.price,"onUpdate:modelValue":t[11]||(t[11]=l=>o.tempProductInfo.price=l),modelModifiers:{number:!0,trim:!0}},null,8,["class","modelValue"]),i(p,{name:"售價",class:"invalid-feedback"})])]),e("div",null,[tt,I(e("textarea",{type:"text",id:"content",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[12]||(t[12]=l=>o.tempProductInfo.content=l),style:{height:"200px"}},null,512),[[w,o.tempProductInfo.content,void 0,{trim:!0}]])]),e("div",ot,[I(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","onUpdate:modelValue":t[13]||(t[13]=l=>o.tempProductInfo.is_enabled=l)},null,512),[[T,o.tempProductInfo.is_enabled]]),e("label",st,[o.tempProductInfo.is_enabled?(n(),r("span",lt,"更改為未上架")):(n(),r("span",it,"更改為已上架"))])]),e("div",nt,[i(k,{to:"/admin/products",class:"btn btn-outline-dark"},{default:P(()=>[S("取消")]),_:1}),rt])]),_:1},8,["onSubmit"])])])]),i(M,{ref:"uploadImageModal",onSubmitImgUrl:a.getImgUrl,"is-Cover":o.isCover},null,8,["onSubmitImgUrl","is-Cover"])],64)}const Mt=U(re,[["render",dt]]);export{Mt as default};
