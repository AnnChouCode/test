import{d as r}from"./pinia-D1tb24LR.js";import{a as e}from"./axios-Di5RpEPX.js";import{s as a}from"./sweetalert2-Bxbxx77j.js";var i={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:u,VITE_PATH:c}=i,l=r("adminProducts",{state:()=>({allProducts:[],groupList:[]}),actions:{getAllProducts(){const s=`${u}/api/${c}/admin/products/all`;return e.get(s).then(t=>{this.allProducts=t.data.products,this.getGroupList()}).catch(t=>{a.fire({icon:"error",text:t.response.data.message})})},getGroupList(){const s=Object.values(this.allProducts),t=new Set(s.map(o=>o.group));this.groupList=[...t]}}});export{l as u};
