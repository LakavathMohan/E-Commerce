"use strict";(globalThis.webpackChunkapi_01=globalThis.webpackChunkapi_01||[]).push([[7056],{2048:(G,T,t)=>{t.d(T,{ProtectedListPage:()=>gt});var s=t(74081),g=t(27279),u=t(51926),M=t(27997),b=t(73354),C=t(27875),W=t(37472),c=t(32370),d=t(48102),o=t(74758),h=t(93415),i=t(70774),f=t(38566),B=t(38101),P=t(93153),l=t(50086),D=t(73411),_=t(10989),tt=t(86967),A=t(10701),H=t(72450);const k=H.ZP.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=H.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${k} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${k}:before {
    transform: translateX(1rem);
  }
`,ot=g.forwardRef(({label:n,onChange:x,onLabel:p="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...I},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:x,visibleLabels:m,type:"button",...I,children:(0,s.jsxs)(A.k,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)("span",{children:p}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?p:S})]})}));var Q=t(4987),et=t(6191),at=t(37370),v=t(87006),Z=t(36938),V=t(78665),nt=t(26784),rt=t(52448),it=t(61020),X=t(51447),dt=t(47533),J=t(88220),lt=t(1350),bt=t(15816),Ct=t(97442),Wt=t(13576),St=t(87830),Et=t(47184),Lt=t(364),Pt=t(59461),Dt=t(71563),pt=t(49204),$t=t(47853),Ot=t(74919),Bt=t(29206),At=t(40464),kt=t(98934),Zt=t(43433),It=t(75719),Rt=t(8175),Ut=t(6078),Ft=t(51943),Kt=t(55783),Nt=t(92249),zt=t(41942),Gt=t(22919),Ht=t(53915),Qt=t(75041),Vt=t(30200),Xt=t(91379),Jt=t(33299),Yt=t(33409),wt=t(63645),qt=t(7988),_t=t(7055),ts=t(26757),ss=t(58311),os=t(24840),es=t(29510),as=t(16946),ns=t(10124),rs=t(69530),is=t(86961),ds=t(51527),ls=t(19764),hs=t(42982),gs=t(26126);const ht=()=>{const[n,x]=g.useState(!1),[p,S]=g.useState(!1),[j,m]=g.useState([]),I=(0,J.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,it.Z)(),{_unstableFormatAPIError:$}=(0,v.So)(),y=(0,v.lm)();(0,v.go)();const{push:ct}=(0,X.k6)(),{pathname:Y}=(0,X.TH)(),{isLoading:mt,allowedActions:{canCreate:R,canUpdate:U,canDelete:w}}=(0,v.ss)(I),{notifyStatus:q}=(0,u.G)(),{isLoading:vt,webhooks:E,error:F,updateWebhook:xt,deleteManyWebhooks:ut}=(0,lt.u)();g.useEffect(()=>{if(F){y({type:"warning",message:$(F)});return}E&&q(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,F,y,a,q,$]);const ft=async e=>{try{const r=await xt(e);"error"in r&&y({type:"warning",message:$(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await ut({ids:j});if("error"in e){y({type:"warning",message:$(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),x(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?z=>[...z,r]:z=>z.filter(Mt=>Mt!==r)),K=e=>()=>ct(`${Y}/${e}`),N=mt||vt,O=E?.length??0,L=j.length;return(0,s.jsxs)(M.A,{children:[(0,s.jsx)(v.SL,{name:"Webhooks"}),(0,s.jsxs)(b.o,{"aria-busy":N,children:[(0,s.jsx)(C.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:R&&!N&&(0,s.jsx)(at.Q,{as:dt.OL,startIcon:(0,s.jsx)(Z.Z,{}),variant:"default",to:`${Y}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),L>0&&w&&(0,s.jsx)(W.Z,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})}),(0,s.jsx)(d.z,{onClick:()=>x(!0),startIcon:(0,s.jsx)(V.Z,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.D,{children:N?(0,s.jsx)(h.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.dO,{})}):O>0?(0,s.jsxs)(i.i,{colCount:5,rowCount:O+1,footer:(0,s.jsx)(f.c,{onClick:R?K("create"):void 0,icon:(0,s.jsx)(Z.Z,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(B.h,{children:(0,s.jsxs)(P.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(D.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<O,value:L===O,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(_.T,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(tt.p,{children:E?.map(e=>(0,s.jsxs)(P.Tr,{onClick:U?K(e.id):void 0,style:{cursor:U?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(D.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.Z,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.Z,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(A.k,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(A.k,{gap:1,children:[U&&(0,s.jsx)(Q.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.Z,{}),noBorder:!0}),w&&(0,s.jsx)(Q.h,{onClick:r=>{r.stopPropagation(),m([e.id]),x(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(V.Z,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.x,{icon:(0,s.jsx)(rt.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(d.z,{variant:"secondary",startIcon:(0,s.jsx)(Z.Z,{}),onClick:()=>R?K("create"):{},children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.QH,{isOpen:n,onToggleDialog:()=>x(e=>!e),onConfirm:jt,isConfirmButtonLoading:p})]})},gt=()=>{const n=(0,J.j)(x=>x.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.O4,{permissions:n,children:(0,s.jsx)(ht,{})})}},1350:(G,T,t)=>{t.d(T,{u:()=>c});var s=t(88220);const g=s.m.injectEndpoints({endpoints:d=>({getWebhooks:d.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,i)=>typeof i=="object"&&"id"in i?[{type:"Webhook",id:i.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:d.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:d.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:i})=>[{type:"Webhook",id:i}]}),triggerWebhook:d.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:d.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:i})=>i.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:u,useCreateWebhookMutation:M,useUpdateWebhookMutation:b,useTriggerWebhookMutation:C,useDeleteManyWebhooksMutation:W}=g,c=(d=void 0,o)=>{const{data:h,isLoading:i,error:f}=u(d,o),[B]=M(),[P]=b(),[l]=C(),[D]=W();return{webhooks:h,isLoading:i,error:f,createWebhook:B,updateWebhook:P,triggerWebhook:l,deleteManyWebhooks:D}}},38566:(G,T,t)=>{t.d(T,{c:()=>d});var s=t(74081),g=t(72450),u=t(93415),M=t(84366),b=t(10701),C=t(32370);const W=(0,g.ZP)(u.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,c=(0,g.ZP)(u.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:o,icon:h,...i})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.i,{}),(0,s.jsx)(c,{as:"button",background:"primary100",padding:5,...i,children:(0,s.jsxs)(b.k,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(u.x,{paddingLeft:3,children:(0,s.jsx)(C.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
