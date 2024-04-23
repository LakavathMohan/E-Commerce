"use strict";(globalThis.webpackChunkapi_01=globalThis.webpackChunkapi_01||[]).push([[4800],{92800:(ts,p,s)=>{s.d(p,{F:()=>E});var t=s(74081),d=s(27279),c=s(93415),y=s(48102),I=s(87006),T=s(57121),m=s(61020);const E=({displayedFilters:l})=>{const[O,D]=d.useState(!1),{formatMessage:S}=(0,m.Z)(),x=d.useRef(null),B=()=>{D(u=>!u)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(y.z,{variant:"tertiary",ref:x,startIcon:(0,t.jsx)(T.Z,{}),onClick:B,size:"S",children:S({id:"app.utils.filters",defaultMessage:"Filters"})}),O&&(0,t.jsx)(I.J5,{displayedFilters:l,isVisible:O,onToggle:B,source:x})]}),(0,t.jsx)(I.W$,{filtersSchema:l})]})}},94800:(ts,p,s)=>{s.d(p,{ProtectedListPage:()=>Is,i:()=>ls});var t=s(74081),d=s(27279),c=s(48102),y=s(5938),I=s(6918),T=s(15244),m=s(10701),E=s(93415),l=s(32370),O=s(23298),D=s(74577),S=s(35250),x=s(86967),B=s(93153),u=s(50086),J=s(73411),g=s(4987),h=s(73354),F=s(27875),X=s(37472),Q=s(74758),e=s(87006),f=s(29206),Z=s(61020),q=s(51447),_=s(88220),es=s(92800),A=s(16543),_s=s(26784),ds=s(78665),Es=s(89486),ms=s(82298),Ms=s(71563),b=s(47853),is=s(41195),as=s(13067),Ts=s(15816),fs=s(97442),Us=s(13576),Rs=s(87830),xs=s(47184),Bs=s(364),us=s(59461),js=s(49204),Ws=s(74919),Ks=s(40464),ps=s(98934),ys=s(43433),Ss=s(75719),Fs=s(8175),Zs=s(6078),zs=s(51943),Ns=s(55783),Vs=s(92249),$s=s(41942),Ys=s(22919),Gs=s(53915),Hs=s(75041),Js=s(30200),Xs=s(91379),Qs=s(33299),bs=s(33409),ks=s(63645),ws=s(7988),qs=s(7055),st=s(26757),tt=s(58311),et=s(24840),at=s(29510),nt=s(16946),it=s(10124),ot=s(69530),lt=s(86961),rt=s(51527),_t=s(19764),dt=s(42982),Et=s(26126),mt=s(51950),Mt=s(64797),Pt=s(85811);const Ps=({onClick:a})=>{const{formatMessage:i}=(0,Z.Z)();return(0,t.jsx)(c.z,{onClick:a,startIcon:(0,t.jsx)(A.Z,{}),size:"S",children:i({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},cs=({onToggle:a})=>{const[i,j]=d.useState("create"),[N,V]=d.useState(""),{formatMessage:M}=(0,Z.Z)(),C=(0,e.lm)(),{lockApp:$,unlockApp:U}=(0,e.o1)(),{_unstableFormatAPIError:Y,_unstableFormatValidationErrors:W}=(0,e.So)(),n=(0,_.p)(Os,async()=>(await s.e(6820).then(s.bind(s,86820))).ROLE_LAYOUT,{combine(o,R){return[...o,...R]},defaultValue:[]}),z=(0,_.p)(os,async()=>(await s.e(6820).then(s.bind(s,86820))).FORM_INITIAL_VALUES,{combine(o,R){return{...o,...R}},defaultValue:os}),L=(0,_.p)(is.M,async()=>(await s.e(1674).then(s.bind(s,81674))).MagicLinkEE),[G]=(0,_.H)(),K=M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),k=async(o,{setErrors:R})=>{$();const P=await G({...o,roles:o.roles??[]});"data"in P?P.data.registrationToken?(V(P.data.registrationToken),ss()):C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}):(C({type:"warning",message:Y(P.error)}),(0,_.x)(P.error)&&P.error.name==="ValidationError"&&R(W(P.error))),U()},ss=()=>{r?j(r):a()},{buttonSubmitLabel:w,isDisabled:H,next:r}=hs[i];return L?(0,t.jsxs)(y.P,{onClose:a,labelledBy:"title",children:[(0,t.jsx)(I.x,{children:(0,t.jsx)(Es.O,{label:K,children:(0,t.jsx)(ms.$,{isCurrent:!0,children:K})})}),(0,t.jsx)(Ms.J9,{enableReinitialize:!0,initialValues:z??{},onSubmit:k,validationSchema:gs,validateOnChange:!1,children:({errors:o,handleChange:R,values:P,isSubmitting:rs})=>(0,t.jsxs)(e.l0,{children:[(0,t.jsx)(T.f,{children:(0,t.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:6,children:[i!=="create"&&(0,t.jsx)(L,{registrationToken:N}),(0,t.jsxs)(E.x,{children:[(0,t.jsx)(l.Z,{variant:"beta",as:"h2",children:M({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(E.x,{paddingTop:4,children:(0,t.jsx)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(O.r,{gap:5,children:Ds.map(ns=>ns.map(v=>(0,t.jsx)(D.P,{...v.size,children:(0,t.jsx)(e.jm,{...v,disabled:H,error:o[v.name],onChange:R,value:P[v.name]})},v.name)))})})})]}),(0,t.jsxs)(E.x,{children:[(0,t.jsx)(l.Z,{variant:"beta",as:"h2",children:M({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(E.x,{paddingTop:4,children:(0,t.jsxs)(O.r,{gap:5,children:[(0,t.jsx)(D.P,{col:6,xs:12,children:(0,t.jsx)(is.S,{disabled:H,error:o.roles,onChange:R,value:P.roles??[]})}),n.map(ns=>ns.map(v=>(0,t.jsx)(D.P,{...v.size,children:(0,t.jsx)(e.jm,{...v,disabled:H,onChange:R,value:P[v.name]})},v.name)))]})})]})]})}),(0,t.jsx)(S.m,{startActions:(0,t.jsx)(c.z,{variant:"tertiary",onClick:a,type:"button",children:M({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:i==="create"?(0,t.jsx)(c.z,{type:"submit",loading:rs,children:M(w)}):(0,t.jsx)(c.z,{type:"button",loading:rs,onClick:a,children:M(w)})})]})})]}):null},os={firstname:"",lastname:"",email:"",roles:[]},Os=[],Ds=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],gs=b.Ry().shape({firstname:b.Z_().trim().required(e.I0.required),lastname:b.Z_(),email:b.Z_().email(e.I0.email).required(e.I0.required),roles:b.IX().min(1,e.I0.required).required(e.I0.required)}),hs={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},As=({canDelete:a,headers:i=[],entriesToDelete:j=[],onClickDelete:N,onSelectRow:V,withMainAction:M,withBulkActions:C,rows:$=[]})=>{const{push:U,location:{pathname:Y}}=(0,q.k6)(),{formatMessage:W}=(0,Z.Z)();return(0,t.jsx)(x.p,{children:$.map(n=>{const z=j.findIndex(L=>L===n.id)!==-1;return(0,t.jsxs)(B.Tr,{...(0,e.X7)({fn:()=>U(`${Y}/${n.id}`),condition:C}),children:[M&&(0,t.jsx)(u.Td,{...e.UW,children:(0,t.jsx)(J.C,{"aria-label":W({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,as.g)(n?.firstname??"",n.lastname)}),checked:z,onChange:()=>{V&&V({name:n.id,value:!z})}})}),i.map(({key:L,cellFormatter:G,name:K,...k})=>(0,t.jsx)(u.Td,{children:typeof G=="function"?G(n,{key:L,name:K,formatMessage:W,...k}):(0,t.jsx)(l.Z,{textColor:"neutral800",children:n[K]||"-"})},L)),C&&(0,t.jsx)(u.Td,{children:(0,t.jsxs)(m.k,{justifyContent:"end",children:[(0,t.jsx)(g.h,{onClick:()=>U(`${Y}/${n.id}`),label:W({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(_s.Z,{})}),a&&(0,t.jsx)(E.x,{paddingLeft:1,...e.UW,children:(0,t.jsx)(g.h,{onClick:()=>{N&&N(n.id)},label:W({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(ds.Z,{})})})]})})]},n.id)})})},ls=()=>{const{_unstableFormatAPIError:a}=(0,e.So)(),[i,j]=d.useState(!1),N=(0,_.j)(r=>r.admin_app.permissions),{allowedActions:{canCreate:V,canDelete:M,canRead:C}}=(0,e.ss)(N.settings?.users),$=(0,e.lm)(),{formatMessage:U}=(0,Z.Z)(),{search:Y}=(0,q.TH)();(0,e.go)();const{data:W,isError:n,isLoading:z}=(0,_.k)(f.parse(Y,{ignoreQueryPrefix:!0}),{skip:!C}),{pagination:L,users:G}=W??{},K=(0,_.p)(Ps,async()=>(await s.e(8907).then(s.bind(s,48907))).CreateActionEE),k=Cs.map(r=>({...r,metadatas:{...r.metadatas,label:U(r.metadatas.label)}})),ss=U({id:"global.users",defaultMessage:"Users"}),w=()=>{j(r=>!r)},[H]=(0,_.J)();return K?(0,t.jsxs)(h.o,{"aria-busy":z,children:[(0,t.jsx)(e.SL,{name:"Users"}),(0,t.jsx)(F.T,{primaryAction:V&&(0,t.jsx)(K,{onClick:w}),title:ss,subtitle:U({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),C&&(0,t.jsx)(X.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.m,{label:U({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ss})}),(0,t.jsx)(es.F,{displayedFilters:Ls})]})}),(0,t.jsxs)(Q.D,{children:[!C&&(0,t.jsx)(e.ZF,{}),n&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.tM,{contentType:"Users",isLoading:z,onConfirmDeleteAll:async r=>{const o=await H({ids:r});"error"in o&&$({type:"warning",message:a(o.error)})},onConfirmDelete:async r=>{const o=await H({ids:[r]});"error"in o&&$({type:"warning",message:a(o.error)})},headers:k,rows:G,withBulkActions:!0,withMainAction:M,children:(0,t.jsx)(As,{canDelete:M})}),L&&(0,t.jsx)(E.x,{paddingTop:4,children:(0,t.jsxs)(m.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.v4,{}),(0,t.jsx)(e.tU,{pagination:L})]})})]})]}),i&&(0,t.jsx)(cs,{onToggle:w})]}):null},Cs=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:i}){return(0,t.jsx)(l.Z,{textColor:"neutral800",children:a.map(j=>i({id:`Settings.permissions.users.${j.code}`,defaultMessage:j.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:i}){return(0,t.jsxs)(m.k,{children:[(0,t.jsx)(e.qb,{variant:a?"success":"danger"}),(0,t.jsx)(l.Z,{textColor:"neutral800",children:i({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],Ls=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],vs=()=>{const a=(0,_.p)(ls,async()=>(await s.e(2147).then(s.bind(s,92147))).UserListPageEE);return a?(0,t.jsx)(a,{}):null},Is=()=>{const a=(0,_.j)(i=>i.admin_app.permissions.settings?.users.main);return(0,t.jsx)(e.O4,{permissions:a,children:(0,t.jsx)(vs,{})})}},41195:(ts,p,s)=>{s.d(p,{M:()=>S,S:()=>x,a:()=>D});var t=s(74081),d=s(61020),c=s(88220),y=s(4987),I=s(97232),T=s(87006),m=s(78031),E=s(34547),l=s(72450),O=s(51950);const D=({children:g,target:h})=>{const F=(0,T.lm)(),{formatMessage:X}=(0,d.Z)(),{copy:Q}=(0,T.VP)(),e=X({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),f=async()=>{await Q(h)&&F({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(T.Y_,{endAction:(0,t.jsx)(y.h,{label:e,noBorder:!0,icon:(0,t.jsx)(m.Z,{}),onClick:f}),title:h,titleEllipsis:!0,subtitle:g,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},S=({registrationToken:g})=>{const{formatMessage:h}=(0,d.Z)(),F=`${window.location.origin}${(0,c.K)()}/auth/register?registrationToken=${g}`;return(0,t.jsx)(D,{target:F,children:h({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},x=({disabled:g,error:h,onChange:F,value:X})=>{const{isLoading:Q,roles:e}=(0,O.u)(),{formatMessage:f}=(0,d.Z)(),Z=h?f({id:h,defaultMessage:h}):"",q=f({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),_=f({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),es=f({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(I.NU,{id:"roles",disabled:g,error:Z,hint:_,label:q,name:"roles",onChange:A=>{F({target:{name:"roles",value:A}})},placeholder:es,startIcon:Q?(0,t.jsx)(J,{}):void 0,value:X.map(A=>A.toString()),withTags:!0,required:!0,children:e.map(A=>(0,t.jsx)(I.ML,{value:A.id.toString(),children:f({id:`global.${A.code}`,defaultMessage:A.name})},A.id))})},B=(0,l.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,u=l.ZP.div`
  animation: ${B} 2s infinite linear;
`,J=()=>(0,t.jsx)(u,{children:(0,t.jsx)(E.Z,{})})},51950:(ts,p,s)=>{s.d(p,{u:()=>I});var t=s(27279),d=s(87006),c=s(61020),y=s(88220);const I=(T={},m)=>{const{locale:E}=(0,c.Z)(),l=(0,d.Xe)(E,{sensitivity:"base"}),{data:O,error:D,isError:S,isLoading:x,refetch:B}=(0,y.z)(T,m);return{roles:t.useMemo(()=>[...O??[]].sort((J,g)=>l.compare(J.name,g.name)),[O,l]),error:D,isError:S,isLoading:x,refetch:B}}}}]);
