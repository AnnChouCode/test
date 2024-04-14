import{d as h}from"./pinia-Cz9d2yny.js";import{a as n}from"./axios-Di5RpEPX.js";import{s as d}from"./sweetalert2-WZH64N0g.js";import{d as g}from"./vue-loading-overlay-DxSJf-C0.js";const c=h("statusStore",{state:()=>({toastMsgList:[],message:{}}),actions:{addMsg(t="bi-info-circle",s=""){this.message={icon:t,msg:s},this.handleMsg()},handleMsg(){this.toastMsgList.unshift(this.message),setTimeout(()=>{this.toastMsgList.pop()},1500)},clearMsg(t){this.toastMsgList.splice(t,1)}}});var m={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=g.useLoading(),{VITE_API:u,VITE_PATH:p}=m,L=h("cartStore",{state:()=>({cartsList:[],coupon_code:""}),actions:{addToCart(t,s){const e=l.show(),r=`${u}/api/${p}/cart`,o={data:{product_id:t,qty:s}};n.post(r,o).then(i=>{const{addMsg:a}=c();a("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(i=>{d.fire({icon:"error",text:i.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{e.hide()})},getCartsList(){const t=l.show(),s=`${u}/api/${p}/cart`;return n.get(s).then(e=>{this.cartsList=e.data.data}).catch(e=>{d.fire({icon:"error",text:e.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{t.hide()})},updateCart(t){const s=l.show(),e=`${u}/api/${p}/cart/${t.id}`,r={data:{product_id:t.product_id,qty:t.qty}};n.put(e,r).then(o=>{const{addMsg:i}=c();i("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(o=>{d.fire({icon:"error",text:o.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{s.hide()})},deleteCartItem(t){const s=l.show(),e=`${u}/api/${p}/cart/${t}`;n.delete(e).then(r=>{const{addMsg:o}=c();o("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(r=>{d.fire({icon:"error",text:r.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{s.hide()})},copyCouponCode(t){navigator.clipboard.writeText(t).then(()=>{const{addMsg:s}=c();s("bi-info-circle","已複製優惠碼"),this.coupon_code=t})},checkCoupon(t){const s=`${u}/api/${p}/coupon`;if(this.cartsList.total!==this.cartsList.final_total){const{addMsg:o}=c();o("bi-info-circle","已套用優惠碼");return}const e=l.show(),r={data:{code:t}};n.post(s,r).then(o=>{const{addMsg:i}=c();i("bi-info-circle","已套用優惠碼"),this.getCartsList()}).catch(o=>{d.fire({icon:"error",text:o.response.data.message})}).finally(()=>{e.hide()})}}});var P={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const _=g.useLoading(),{VITE_API:S,VITE_PATH:v}=P,M=h("favoriteStore",{state:()=>({favoriteList:[],recentlyProducts:[],favoriteProducts:[]}),actions:{handleFavorite(t){const s=this.favoriteList.indexOf(t);s===-1?this.favoriteList.push(t):this.favoriteList.splice(s,1),this.setStorage();const{addMsg:e}=c();e("bi-info-circle","收藏已更新")},setStorage(){localStorage.setItem("favoriteList",this.favoriteList)},getFavoriteList(){const t=localStorage.getItem("favoriteList");t&&(this.favoriteList=t.split(","))},recentlyViewed(t){const s=this.recentlyProducts.findIndex(e=>e.id===t.id);s===-1?(this.recentlyProducts.unshift(t),this.recentlyProducts.length>=8&&this.recentlyProducts.pop()):(this.recentlyProducts.splice(s,1),this.recentlyProducts.unshift(t)),localStorage.setItem("recentlyList",JSON.stringify(this.recentlyProducts))},async getFavoriteProducts(){try{const t=_.show(),{cartsList:s}=L(),r=(await Promise.all(this.favoriteList.map(async o=>{const i=`${S}/api/${v}/product/${o}`;return(await n.get(i)).data.product}))).map(o=>{const i=s.carts.find(a=>a.product_id===o.id);return{...o,availableQty:i?o.quantity-i.qty:o.quantity}});this.favoriteProducts=r,t.hide()}catch(t){console.log("Error getFavoriteProducts:",t)}}}});var y={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const I=g.useLoading(),{VITE_API:$,VITE_PATH:E}=y,x=h("allProductsStore",{state:()=>({allProducts:[],allArtists:[],productSizeList:[],filter:[]}),actions:{getAllProducts(){const t=I.show(),s=`${$}/api/${E}/products/all`;return n.get(s).then(e=>{const r=e.data.products;this.allProducts=r.filter(o=>o.category==="products"),this.allArtists=r.filter(o=>o.category==="artists").sort((o,i)=>o.title.localeCompare(i.title))}).catch(e=>{d.fire({icon:"error",text:e.response.data.message})}).finally(()=>{t.hide()})},getSizeList(){const s=[...new Set(this.allProducts.map(e=>e.size))].sort((e,r)=>e[0]-r[0]);this.productSizeList=s}},getters:{sortNewest:({allProducts:t,allArtists:s})=>{const e=JSON.parse(JSON.stringify(s)),r=JSON.parse(JSON.stringify(t)),o=e.sort((a,f)=>f.create_at-a.create_at),i=r.sort((a,f)=>f.create_at-a.create_at);return{newestArtist:o,newestProduct:i}},groupList:({allProducts:t,allArtists:s})=>{const r=[...new Set(t.map(a=>a.group))],i=[...new Set(s.map(a=>a.group))];return{productGroupList:r,artistGroupList:i}}}});export{L as c,M as f,c as s,x as u};
