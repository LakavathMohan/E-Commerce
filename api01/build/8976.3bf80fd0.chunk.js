(globalThis.webpackChunkapi_01=globalThis.webpackChunkapi_01||[]).push([[8976],{1786:D=>{function f(e,s,l,d){for(var c=l-1,P=e.length;++c<P;)if(d(e[c],s))return c;return-1}D.exports=f},12186:(D,f,e)=>{var s=e(36393),l=e(62878),d=e(1786),c=e(20435),P=e(22033),v=Array.prototype,O=v.splice;function C(i,I,m,Y){var w=Y?d:l,Q=-1,z=I.length,E=i;for(i===I&&(I=P(I)),m&&(E=s(i,c(m)));++Q<z;)for(var W=0,L=I[Q],Z=m?m(L):L;(W=w(E,Z,W,Y))>-1;)E!==i&&O.call(E,W,1),O.call(i,W,1);return i}D.exports=C},58422:(D,f,e)=>{var s=e(36393),l=e(90040),d=e(92403),c=e(26126);function P(v,O){var C=c(v)?s:d;return C(v,l(O,3))}D.exports=P},22009:(D,f,e)=>{var s=e(52431),l=e(45906),d=s(l);D.exports=d},45906:(D,f,e)=>{var s=e(12186);function l(d,c){return d&&d.length&&c&&c.length?s(d,c):d}D.exports=l},34049:(D,f,e)=>{var s=e(20454);function l(d){var c=d==null?0:d.length;return c?s(d,1,c):[]}D.exports=l},48976:(D,f,e)=>{"use strict";e.d(f,{N:()=>ie,ProtectedEditView:()=>Se});var s=e(74081),l=e(27279),d=e(93415),c=e(10701),P=e(32370),v=e(23298),O=e(74577),C=e(73354),i=e(27875),I=e(48102),m=e(74758),Y=e(45322),w=e(24920),Q=e(34642),z=e(22572),E=e(87006),W=e(71563),L=e(61020),Z=e(51447),$=e(88220),q=e(49601),G=e(93118),S=e(24722),le=e(76873),de=e(59082),ce=e(35318),_e=e(58422),Ee=e(34049),b=e(72450),pe=e(98344),V=e(47853),Pe=e(61815),ae=e(22009),He=e(15816),Ye=e(97442),Qe=e(13576),ze=e(87830),be=e(47184),Je=e(364),Xe=e(59461),we=e(49204),qe=e(74919),es=e(29206),ss=e(40464),ts=e(98934),ns=e(43433),as=e(75719),os=e(8175),is=e(6078),rs=e(51943),ls=e(55783),ds=e(92249),cs=e(41942),_s=e(22919),Es=e(53915),ps=e(75041),Ps=e(30200),us=e(91379),gs=e(33299),hs=e(33409),ms=e(63645),As=e(7988),Os=e(7055),Ts=e(26757),Ms=e(58311),Ds=e(24840),Is=e(29510),Cs=e(16946),xs=e(10124),ys=e(69530),fs=e(86961),vs=e(51527),Ls=e(19764),Rs=e(42982),Us=e(26126);const ue=$.m.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:t=>t.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:t=>t.data})}),overrideExisting:!1}),{useGetPermissionsQuery:ge,useGetRoutesQuery:he}=ue,[me,Ae]=(0,le.k)("ApiTokenPermissionsContext"),Oe=({children:n,...t})=>(0,s.jsx)(me,{...t,children:n}),ee=()=>Ae("useApiTokenPermissions"),Te=({errors:n={},onChange:t,canEditInputs:a,isCreating:_,values:o={},apiToken:u={},onDispatch:r,setHasChangedPermissions:j})=>{const{formatMessage:A}=(0,L.Z)(),U=({target:{value:x}})=>{j(!1),x==="full-access"&&r({type:"SELECT_ALL_ACTIONS"}),x==="read-only"&&r({type:"ON_CHANGE_READ_ONLY"})},F=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,s.jsx)(d.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h2",children:A({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(v.r,{gap:5,children:[(0,s.jsx)(O.P,{col:6,xs:12,children:(0,s.jsx)(S.T,{error:n.name,value:o.name,canEditInputs:a,onChange:t})},"name"),(0,s.jsx)(O.P,{col:6,xs:12,children:(0,s.jsx)(S.a,{error:n.description,value:o.description,canEditInputs:a,onChange:t})},"description"),(0,s.jsx)(O.P,{col:6,xs:12,children:(0,s.jsx)(S.L,{isCreating:_,error:n.lifespan,value:o.lifespan,onChange:t,token:u})},"lifespan"),(0,s.jsx)(O.P,{col:6,xs:12,children:(0,s.jsx)(S.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:x=>{U({target:{value:x}}),t({target:{name:"type",value:x}})},options:F,canEditInputs:a})},"type")]})]})})},Me=({apiTokenName:n=null})=>{const{formatMessage:t}=(0,L.Z)();return(0,E.go)(),(0,s.jsxs)(C.o,{"aria-busy":"true",children:[(0,s.jsx)(E.SL,{name:"API Tokens"}),(0,s.jsx)(i.T,{primaryAction:(0,s.jsx)(I.z,{disabled:!0,startIcon:(0,s.jsx)(de.Z,{}),type:"button",size:"L",children:t({id:"global.save",defaultMessage:"Save"})}),title:n||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,s.jsx)(m.D,{children:(0,s.jsx)(E.dO,{})})]})},De=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ie=(0,b.ZP)(d.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,Ce=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:t}=(0,L.Z)(),{method:a,handler:_,path:o}=n,u=o?Ee(o.split("/")):[],[r="",j=""]=_?_.split("."):[],A=De(n.method);return(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(P.Z,{variant:"delta",as:"h3",children:[t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,s.jsx)("span",{children:r}),(0,s.jsxs)(P.Z,{variant:"delta",textColor:"primary600",children:[".",j]})]}),(0,s.jsxs)(c.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,s.jsx)(Ie,{background:A.background,borderColor:A.border,padding:2,children:(0,s.jsx)(P.Z,{fontWeight:"bold",textColor:A.text,children:a})}),(0,s.jsx)(d.x,{paddingLeft:2,paddingRight:2,children:_e(u,U=>(0,s.jsxs)(P.Z,{textColor:U.includes(":")?"neutral600":"neutral900",children:["/",U]},U))})]})]})},xe=()=>{const{value:{selectedAction:n,routes:t}}=ee(),{formatMessage:a}=(0,L.Z)(),_=n?.split(".")[0];return(0,s.jsx)(O.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,s.jsx)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:_&&_ in t&&t[_].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,s.jsx)(Ce,{route:o},o.handler):null)}):(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,s.jsx)(P.Z,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},oe=(0,b.iv)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,ye=(0,b.ZP)(d.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&oe}
  &:hover {
    ${oe}
  }
`,fe=b.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,ve=({controllers:n=[],label:t,orderNumber:a=0,disabled:_=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:u=null})=>{const{value:{onChangeSelectAll:r,onChange:j,selectedActions:A,setSelectedAction:U,selectedAction:F}}=ee(),[x,J]=l.useState(!1),{formatMessage:H}=(0,L.Z)(),T=()=>{J(h=>!h),o(a)};l.useEffect(()=>{u!==null&&u!==a&&x&&J(!1)},[u,a,x]);const re=h=>h===F;return(0,s.jsxs)(Y.U,{expanded:x,onToggle:T,variant:a%2?"primary":"secondary",children:[(0,s.jsx)(w.B,{title:pe(t)}),(0,s.jsx)(Q.v,{children:n?.map(h=>{const y=h.actions.every(M=>A.includes(M.actionId)),R=h.actions.some(M=>A.includes(M.actionId));return(0,s.jsxs)(d.x,{children:[(0,s.jsxs)(c.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,s.jsx)(d.x,{paddingRight:4,children:(0,s.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:h?.controller})}),(0,s.jsx)(fe,{}),(0,s.jsx)(d.x,{paddingLeft:4,children:(0,s.jsx)(z.X,{value:y,indeterminate:!y&&R,onValueChange:()=>{r({target:{value:[...h.actions]}})},disabled:_,children:H({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsx)(v.r,{gap:4,padding:4,children:h?.actions&&h?.actions.map(M=>(0,s.jsx)(O.P,{col:6,children:(0,s.jsxs)(ye,{isActive:re(M.actionId),padding:2,hasRadius:!0,children:[(0,s.jsx)(z.X,{value:A.includes(M.actionId),name:M.actionId,onValueChange:()=>{j({target:{value:M.actionId}})},disabled:_,children:M.action}),(0,s.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>U({target:{value:M.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,s.jsx)(ce.Z,{})})]})},M.actionId))})]},`${t}.${h?.controller}`)})})]})},Le=({section:n=null,...t})=>{const[a,_]=l.useState(null),o=u=>_(u);return(0,s.jsx)(d.x,{padding:4,background:"neutral0",children:n&&n.map((u,r)=>(0,s.jsx)(ve,{label:u.label,controllers:u.controllers,orderNumber:r,indexExpandendCollapsedContent:a,onExpanded:o,...t},u.apiId))})},Re=({...n})=>{const{value:{data:t}}=ee(),{formatMessage:a}=(0,L.Z)();return(0,s.jsxs)(v.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,s.jsxs)(O.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(P.Z,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,s.jsx)(P.Z,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),t?.permissions&&(0,s.jsx)(Le,{section:t?.permissions,...n})]}),(0,s.jsx)(xe,{})]})},Ue=V.Ry().shape({name:V.Z_().max(100).required(E.I0.required),type:V.Z_().oneOf(["read-only","full-access","custom"]).required(E.I0.required),description:V.Z_().nullable(),lifespan:V.Rx().integer().min(0).nullable().defined(E.I0.required)}),je=n=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.entries(n).map(([a,_])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(_.controllers).map(o=>({controller:o,actions:o in _.controllers?_.controllers[o].map(u=>{const r=`${a}.${o}.${u}`;return a.includes("api::")&&t.allActionsIds.push(r),{action:u,actionId:r}}).flat():[]})).flat()})),t},Be={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},We=(n,t)=>(0,Pe.ZP)(n,a=>{switch(t.type){case"ON_CHANGE":{a.selectedActions.includes(t.value)?ae(a.selectedActions,t.value):a.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>a.selectedActions.includes(o.actionId))?t.value.forEach(o=>{ae(a.selectedActions,o.actionId)}):t.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const _=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[..._];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=je(t.value);break}case"UPDATE_ROUTES":{a.routes={...t.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=t.value;break}default:return a}}),ie=()=>{(0,E.go)();const{formatMessage:n}=(0,L.Z)(),t=(0,E.lm)(),{lockApp:a,unlockApp:_}=(0,E.o1)(),{state:o}=(0,Z.TH)(),u=(0,$.j)(p=>p.admin_app.permissions),[r,j]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:A}=(0,E.rS)(),{setCurrentStep:U}=(0,E.c1)(),{allowedActions:{canCreate:F,canUpdate:x,canRegenerate:J}}=(0,E.ss)(u.settings?.["api-tokens"]),[H,T]=l.useReducer(We,Be),h=(0,Z.$B)("/settings/api-tokens/:id")?.params?.id,y=h==="create",{_unstableFormatAPIError:R,_unstableFormatValidationErrors:M}=(0,E.So)(),Ke=(0,Z.k6)(),K=ge(),k=he();l.useEffect(()=>{K.error&&t({type:"warning",message:R(K.error)})},[K.error,R,t]),l.useEffect(()=>{k.error&&t({type:"warning",message:R(k.error)})},[k.error,R,t]),l.useEffect(()=>{K.data&&T({type:"UPDATE_PERMISSIONS_LAYOUT",value:K.data})},[K.data]),l.useEffect(()=>{k.data&&T({type:"UPDATE_ROUTES",value:k.data})},[k.data]),l.useEffect(()=>{r&&(r.type==="read-only"&&T({type:"ON_CHANGE_READ_ONLY"}),r.type==="full-access"&&T({type:"SELECT_ALL_ACTIONS"}),r.type==="custom"&&T({type:"UPDATE_PERMISSIONS",value:r?.permissions}))},[r]),l.useEffect(()=>{A(y?"didAddTokenFromList":"didEditTokenFromList",{tokenType:G.A})},[y,A]);const{data:B,error:se,isLoading:ke}=(0,q.b)(h,{skip:!h||y||!!r});l.useEffect(()=>{se&&t({type:"warning",message:R(se)})},[se,R,t]),l.useEffect(()=>{B&&(j(B),B.type==="read-only"&&T({type:"ON_CHANGE_READ_ONLY"}),B.type==="full-access"&&T({type:"SELECT_ALL_ACTIONS"}),B.type==="custom"&&T({type:"UPDATE_PERMISSIONS",value:B?.permissions}))},[B]);const[Ne]=(0,q.c)(),[Ze]=(0,q.d)(),$e=async(p,N)=>{A(y?"willCreateToken":"willEditToken",{tokenType:G.A}),a();try{if(y){const g=await Ne({...p,lifespan:p.lifespan==="0"?parseInt(p.lifespan):null,permissions:p.type==="custom"?H.selectedActions:null});if("error"in g){(0,$.x)(g.error)&&g.error.name==="ValidationError"?N.setErrors(M(g.error)):t({type:"warning",message:R(g.error)});return}t({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),A("didCreateToken",{type:g.data.type,tokenType:G.A}),Ke.replace(`/settings/api-tokens/${g.data.id}`,{apiToken:g.data}),U("apiTokens.success")}else{const g=await Ze({id:h,name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?H.selectedActions:null});if("error"in g){(0,$.x)(g.error)&&g.error.name==="ValidationError"?N.setErrors(M(g.error)):t({type:"warning",message:R(g.error)});return}t({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),A("didEditToken",{type:g.data.type,tokenType:G.A})}}catch{t({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{_()}},[Ge,te]=l.useState(!1),Ve={...H,onChange:({target:{value:p}})=>{te(!0),T({type:"ON_CHANGE",value:p})},onChangeSelectAll:({target:{value:p}})=>{te(!0),T({type:"SELECT_ALL_IN_PERMISSION",value:p})},setSelectedAction:({target:{value:p}})=>{T({type:"SET_SELECTED_ACTION",value:p})}},ne=x&&!y||F&&y;return ke?(0,s.jsx)(Me,{apiTokenName:r?.name}):(0,s.jsx)(Oe,{value:Ve,children:(0,s.jsxs)(C.o,{children:[(0,s.jsx)(E.SL,{name:"API Tokens"}),(0,s.jsx)(W.J9,{validationSchema:Ue,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",type:r?.type,lifespan:r?.lifespan?r.lifespan.toString():r?.lifespan},enableReinitialize:!0,onSubmit:(p,N)=>$e(p,N),children:({errors:p,handleChange:N,isSubmitting:g,values:X,setFieldValue:Fe})=>(Ge&&X?.type!=="custom"&&Fe("type","custom"),(0,s.jsxs)(E.l0,{children:[(0,s.jsx)(S.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:r,setToken:j,canEditInputs:ne,canRegenerate:J,isSubmitting:g,regenerateUrl:"/admin/api-tokens/"}),(0,s.jsx)(m.D,{children:(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(r?.name)&&(0,s.jsx)(S.c,{token:r?.accessKey,tokenType:G.A}),(0,s.jsx)(Te,{errors:p,onChange:N,canEditInputs:ne,isCreating:y,values:X,apiToken:r,onDispatch:T,setHasChangedPermissions:te}),(0,s.jsx)(Re,{disabled:!ne||X?.type==="read-only"||X?.type==="full-access"})]})})]}))})]})})},Se=()=>{const n=(0,$.j)(t=>t.admin_app.permissions.settings?.["api-tokens"].read);return(0,s.jsx)(E.O4,{permissions:n,children:(0,s.jsx)(ie,{})})}},49601:(D,f,e)=>{"use strict";e.d(f,{a:()=>v,b:()=>c,c:()=>P,d:()=>O,u:()=>d});var s=e(88220);const l=s.m.injectEndpoints({endpoints:C=>({getAPITokens:C.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,I)=>[...i?.map(({id:m})=>({type:"ApiToken",id:m}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:C.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,I,m)=>[{type:"ApiToken",id:m}]}),createAPIToken:C.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:C.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,I,m)=>[{type:"ApiToken",id:m}]}),updateAPIToken:C.mutation({query:({id:i,...I})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:I}),transformResponse:i=>i.data,invalidatesTags:(i,I,{id:m})=>[{type:"ApiToken",id:m}]})}),overrideExisting:!1}),{useGetAPITokensQuery:d,useGetAPITokenQuery:c,useCreateAPITokenMutation:P,useDeleteAPITokenMutation:v,useUpdateAPITokenMutation:O}=l}}]);