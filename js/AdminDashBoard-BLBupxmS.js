import{d as w,b}from"./pinia-D1tb24LR.js";import{a as f}from"./axios-Di5RpEPX.js";import{s as O}from"./sweetalert2-WZH64N0g.js";import{d as T}from"./vue-loading-overlay-DxSJf-C0.js";import{L as V,B}from"./vue-chartjs-CdWNJvnm.js";import{C as S,a as A,b as E,P as I,c as R,p as $,d as C,e as x,f as j}from"./chart.js-CYfGDqQG.js";import{_ as v}from"./index-DqTzBMC6.js";import{a_ as p,aR as d,a5 as h,ae as u,a6 as e,ba as m,bz as H,bp as N,a4 as L}from"./@vue-Cqo5QHyB.js";import"./@ckeditor-DVmmUNiu.js";import"./vue-rznDyWWg.js";import"./@kurkle-BZxJdD1U.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-fL-MoaV8.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-BIKR1xpe.js";import"./vue-router-DOL1scXn.js";var Z={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const k=T.useLoading(),{VITE_API:D,VITE_PATH:P}=Z,y=w("adminOrders",{state:()=>({allOrderList:[],currentOrderList:[],pagination:{}}),actions:{resetAllOrderList(){return this.allOrderList=[],this.allOrderList},getAllOrderList(t=1){const s=`${D}/api/${P}/admin/orders?page=${t}`,r=k.show();return f.get(s).then(a=>{const{orders:o}=a.data;this.allOrderList=this.allOrderList.concat(o)}).catch(a=>{O.fire({icon:"error",text:a.response.data.message})}).finally(()=>r.hide())},getCurrentOrderList(t=1){const s=`${D}/api/${P}/admin/orders?page=${t}`;return f.get(s).then(r=>{const{orders:a,pagination:o}=r.data;this.currentOrderList=a,this.pagination=o}).catch(r=>{O.fire({icon:"error",text:r.response.data.message})})}}});var z={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:G,VITE_PATH:U}=z,M=w("adminProducts",{state:()=>({allProducts:[],groupList:[]}),actions:{getAllProducts(){const t=`${G}/api/${U}/admin/products/all`;return f.get(t).then(s=>{this.allProducts=s.data.products,this.getGroupList()}).catch(s=>{O.fire({icon:"error",text:s.response.data.message})})},getGroupList(){const t=Object.values(this.allProducts),s=new Set(t.map(r=>r.group));this.groupList=[...s]}}});S.register(A,E,I,R,$,C,x);const Y={name:"LineChart",components:{LineChartComponent:V},props:{chartData:Object},data(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},q={style:{height:"300px"}},F=e("h3",{class:"mb-2 fs-6 fw-bold text-info"},"總銷售額",-1);function J(t,s,r,a,o,n){const i=p("LineChartComponent");return d(),h("div",q,[F,u(i,{id:"my-chart-id",options:o.chartOptions,data:r.chartData},null,8,["options","data"])])}const K=v(Y,[["render",J]]);S.register($,C,x,j,A,E);const Q={name:"HorizontalBarChart",components:{Bar:B},props:{chartData:Object},data(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,indexAxis:"y"}}}},W={style:{height:"300px"}},X=e("h3",{class:"mb-2 fs-6 fw-bold text-info"},"分類銷售額",-1);function tt(t,s,r,a,o,n){const i=p("Bar");return d(),h("div",W,[X,u(i,{id:"my-chart-id",options:o.chartOptions,data:r.chartData},null,8,["options","data"])])}const et=v(Q,[["render",tt]]),l=y(),g=M(),st={data(){return{allProductList:[],allOrderList:[],isNotPaidOrder:[],isNotShippingOrder:[],needReplenishedProduct:[],chartMonthZone:3,turnOverData:{},groupSales:{}}},computed:{...b(M),...b(y)},watch:{chartMonthZone(){this.getMonthZone(this.chartMonthZone)}},methods:{getMonthZone(t=3){const s=new Date,r=s.getMonth()+1,a=s.getFullYear(),o=[];for(let n=0;n<t;n++){let i=r-n,c=a;i<=0&&(i+=12,c--),o.unshift(`${c.toString().slice(2,4)} ${i}月`)}this.getTurnOverData(o),this.getGroupSales(o)},getTurnOverData(t){const s={};l.allOrderList.forEach(a=>{const n=new Date(a.create_at*1e3).toLocaleString().split("/").splice(0,2),i=`${n[0].slice(2,4)} ${n[1]}月`;s[i]||(s[i]=0),Object.values(a.products).forEach(c=>{s[i]+=c.total})});const r=t.map(a=>s[a]||0);this.turnOverData={labels:t,datasets:[{label:"總銷售額",backgroundColor:"#333333",data:r}]}},getGroupSales(t){const s={};g.groupList.forEach(r=>{s[r]=0}),l.allOrderList.forEach(r=>{const o=new Date(r.create_at*1e3).toLocaleString().split("/").splice(0,2),n=`${o[0].slice(2,4)} ${o[1]}月`;t.forEach(i=>{i===n&&Object.values(r.products).forEach(c=>{const _=c.product.group;s[_]+=c.total})})}),this.groupSales={labels:Object.keys(s),datasets:[{label:"分類銷售額",backgroundColor:"#333333",data:Object.values(s)}]}},handleOrderData(){this.isNotPaidOrder=this.allOrderList.filter(t=>!t.is_paid),this.isNotShippingOrder=this.allOrderList.filter(t=>t.is_paid&&!t.is_shipping)},handleProductData(){this.needReplenishedProduct=this.allProductList.filter(t=>t.quantity&&t.quantity<=3)},async getAllOrderList(){await l.getCurrentOrderList();for(let t=0;t<l.pagination.total_pages;t++)await l.getAllOrderList(t+1);this.allOrderList=l.allOrderList,this.handleOrderData(),this.getMonthZone()},async getAllProductList(){await g.getAllProducts(),this.allProductList=Object.values(g.allProducts),this.handleProductData()}},async mounted(){await l.resetAllOrderList(),this.getAllOrderList(),this.getAllProductList()},components:{LineChart:K,HorizontalBarChart:et}},ot={class:"overflow-y-scroll scrollbar-y-hide vh-100"},rt=e("h2",{class:"py-4 py-md-7 fw-bold"},"總覽",-1),at={class:"row g-1 p-2 p-md-3 mb-4 bg-light"},it=e("div",{class:"col-12 col-md-3"},[e("div",{class:"p-3"},[e("h3",{class:"mb-1 fs-5 fw-bold"},"歡迎回來"),e("p",null,"這是您的待辦事項")])],-1),nt={class:"col-12 col-md-3"},ct={class:"p-3 border rounded-2 bg-white"},lt={class:"fs-3"},dt=e("h3",{class:"fs-6 fw-bold text-info"},"尚未付款的訂單",-1),ht={class:"col-12 col-md-3"},pt={class:"p-3 border rounded-2 bg-white"},ut={class:"fs-3"},_t=e("h3",{class:"fs-6 fw-bold text-info"},"待出貨的訂單",-1),mt={class:"col-12 col-md-3"},gt={class:"p-3 border rounded-2 bg-white"},ft={class:"fs-3"},Ot=e("h3",{class:"fs-6 fw-bold text-info"},"即將售鑿商品",-1),vt={class:"p-2 p-md-3 bg-light"},bt=e("option",{value:"3",selected:""},"3 個月",-1),Lt=e("option",{value:"6"},"6 個月",-1),Dt=e("option",{value:"12"},"12 個月",-1),Pt=[bt,Lt,Dt],wt={class:"row g-3"},St={class:"col col-md-6"},At={key:0,class:"w-100 p-3 pb-7 border rounded-2 bg-white"},Et={class:"col col-md-6"},$t={key:0,class:"w-100 p-3 pb-7 border rounded-2 bg-white"};function Ct(t,s,r,a,o,n){const i=p("LineChart"),c=p("HorizontalBarChart");return d(),h("div",ot,[rt,e("div",at,[it,e("div",nt,[e("div",ct,[e("p",lt,m(o.isNotPaidOrder.length),1),dt])]),e("div",ht,[e("div",pt,[e("p",ut,m(o.isNotShippingOrder.length),1),_t])]),e("div",mt,[e("div",gt,[e("p",ft,m(o.needReplenishedProduct.length),1),Ot])])]),e("div",vt,[H(e("select",{class:"mb-5 form-select","aria-label":"selectMonthZone","onUpdate:modelValue":s[0]||(s[0]=_=>o.chartMonthZone=_),style:{width:"150px"}},Pt,512),[[N,o.chartMonthZone]]),e("div",wt,[e("div",St,[Object.values(o.turnOverData).length?(d(),h("div",At,[u(i,{chartData:o.turnOverData},null,8,["chartData"])])):L("",!0)]),e("div",Et,[Object.values(o.groupSales).length?(d(),h("div",$t,[u(c,{chartData:o.groupSales},null,8,["chartData"])])):L("",!0)])])])])}const Kt=v(st,[["render",Ct]]);export{Kt as default};