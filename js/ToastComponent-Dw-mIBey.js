import{s as n}from"./statusStore-bNOcWQBU.js";import{a as r,m as l}from"./pinia-D1tb24LR.js";import{_ as c}from"./index-CotZv_7g.js";import{aR as s,a5 as e,L as d,aY as m,a6 as t,aG as p,ba as _}from"./@vue-Cqo5QHyB.js";const u={props:["adminOrderState","adminOrderAction"],computed:{...r(n,["toastMsgList"])},methods:{...l(n,["clearMsg"])}},b={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"1056"}},f={class:"toast-body d-flex align-items-center justify-content-between"},g={class:"d-flex fw-bold"},h={class:"mb-0"},v=["onClick"];function y(a,k,x,C,$,L){return s(),e("div",b,[(s(!0),e(d,null,m(a.toastMsgList,(o,i)=>(s(),e("div",{class:"toast show mb-1 bg-tertiary",role:"alert","aria-live":"assertive","aria-atomic":"true",key:i},[t("div",f,[t("div",g,[t("i",{class:p(["bi me-2 text-default",o.icon])},null,2),t("p",h,_(o.msg),1)]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:M=>a.clearMsg(i)},null,8,v)])]))),128))])}const A=c(u,[["render",y]]);export{A as T};
