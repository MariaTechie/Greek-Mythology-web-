"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81507,93810],{826263:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let i={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"StructuredFeedStoryModule_story",selections:[{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"containerType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contentIds",storageKey:null},{alias:null,args:null,concreteType:"StoryDisplayOptions",kind:"LinkedField",name:"displayOptions",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryContentDisplay",kind:"LinkedField",name:"contentDisplay",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"componentType",storageKey:null}],storageKey:null}],storageKey:null},{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"CarouselModule_story"},{args:null,kind:"FragmentSpread",name:"HeaderModule_story"}],type:"Story",abstractKey:null};i.hash="058a61f5e0b72dbde337960de273d6a5";let r=i},241893:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),r=n(883119),a=n(679482),o=n(785893);function l(){return/*#__PURE__*/(0,o.jsx)(r.xu,{width:a.yF})}function s(){return/*#__PURE__*/(0,o.jsx)(i.Fragment,{children:Array(12).fill(void 0).map((e,t)=>/*#__PURE__*/(0,o.jsx)(l,{},t))})}},483702:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(883119),r=n(132780),a=n(785893);let o=new Map([["pin",4],["explorearticle",2]]);function l({children:e,itemType:t,overrideMargin:n}){return/*#__PURE__*/(0,a.jsx)(i.xu,{marginBottom:n||o.get(t)||r.mT,children:e})}},881507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$}),n(167912);var i,r=n(883119),a=n(318717),o=n(788388),l=n(609073),s=n(237579),d=n(202099),c=n(679482),u=n(117428),p=n(107218),m=n(820139),y=n(132780),g=n(37268),h=n(785893);let x=()=>/*#__PURE__*/(0,h.jsx)(r.xu,{color:"secondary",height:c.yF,width:c.yF}),j={1:{itemRep:p.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:u.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:m.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function f({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(j[(i.display_options?.content_display||{}).model_type]||y.g5).itemRep||x,s=i.display_options?.content_display?.component_type??t,c=(0,d.Z)();return/*#__PURE__*/(0,h.jsx)(r.xu,{borderStyle:c?"lg":void 0,marginBottom:2,padding:c?5:void 0,rounding:c?4:void 0,children:/*#__PURE__*/(0,h.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[i.title&&/*#__PURE__*/(0,h.jsx)(g.Z,{marginBottomOverride:c?3:void 0,showExpanded:n,storyKey:{type:"deprecated",data:i}}),/*#__PURE__*/(0,h.jsx)(r.kC,{gap:2,justifyContent:c?"start":"center",wrap:!0,children:i.objects?.map(function(t,n){return/*#__PURE__*/(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:"rgba(0, 0, 0, 0)",index:n,item:t,story:i,view:a,viewParameter:o},n)})})]})})}var _=n(667294),w=n(587435),v=n(266069),I=n(241893),k=n(483702),b=n(474492),S=n(724924),C=n(505471),F=n(410150);let T="rgba(0, 0, 0, 0)",Z=()=>/*#__PURE__*/(0,h.jsx)(r.xu,{color:"secondary",height:c.yF,width:c.yF}),A={1:{itemRep:p.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:u.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:m.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function D({auxData:e,componentFallback:t,dangerouslySetActionUrl:n,dangerouslySetContentVisibleItemCount:i,disableHeader:a,dynamicItemWidth:o,gutterWidth:l,initialSlotIndex:s=0,showExpanded:d,story:u,surface:p,view:m,viewParameter:x,width:j}){let f=(0,F.HG)(),D=u.display_options?.content_display||{},K=A[D.model_type]||y.g5,P=K.itemRep||Z,{action:E}=u,L=n||u.action?.url||"",R=u.display_options?.content_display?.component_type??t,W=D.grid_layout?.rows,G="number"==typeof W?W:1,z=D.grid_layout?.cols,N="number"==typeof z?z:-1,O=-1===N,M=i??D.content_visible_item_count?.web,B=M&&j&&o?(0,c.Wv)({defaultItemWidth:c.yF,contentVisibleItemCount:M,gap:l??c.oX,isDesktop:f,moduleWidth:"number"==typeof j?j:parseInt(j,10)}):c.yF,{containerRef:H,itemsToRender:U,actionItem:X}=(0,C.Z)({items:u.objects||[],itemWidth:(0,b.Z)()?c.tG:B,itemGap:l??c.oX,actionItemType:E?"one":void 0,numRows:G}),q=X&&K.deprecatedGetActionImage?K.deprecatedGetActionImage(X):void 0,Y=O?U:u.objects||[],{anyEnabled:V,experimentalGutterBoints:J}=(0,w.Z)(),Q=Y.map((t,n)=>/*#__PURE__*/(0,h.jsx)(k.Z,{itemType:"string"==typeof t.type?t.type:null,children:/*#__PURE__*/(0,h.jsx)(P,{auxData:e,component:R,imagePlaceholderColor:T,imageWidth:B,index:n,item:t,slotIndex:s+n,story:u,surface:p,view:m,viewParameter:x})},n)),$=!!L&&!!E?.text&&q&&/*#__PURE__*/(0,h.jsx)(v.Z,{auxData:e,buttonText:E.text,component:R,contentIds:u.content_ids,element:179,imageWidth:B,previewImageSrc:q,shape:K.deprecatedActionShape,storyId:u.id,storyType:u.story_type,url:L,view:m,viewParameter:x});return/*#__PURE__*/(0,h.jsxs)(r.xu,{alignItems:"stretch",color:"default",direction:"column",display:"flex",justifyContent:"start",children:[u.title&&!a&&/*#__PURE__*/(0,h.jsx)(g.Z,{showExpanded:d,storyKey:{type:"deprecated",data:u}}),O?/*#__PURE__*/(0,h.jsxs)(S.Z,{containerRef:H,itemGap:l??c.oX,numRows:G,rowAlignment:"center",children:[Q,$,G>1&&/*#__PURE__*/(0,h.jsx)(I.Z,{})]}):/*#__PURE__*/(0,h.jsxs)(_.Fragment,{children:[N>1?Array(G).fill(null).map((e,t)=>/*#__PURE__*/(0,h.jsx)(r.kC,{alignItems:"stretch",gap:J??(f?c.jC:c.D6),justifyContent:"start",width:V?"100%":void 0,wrap:N<=1,children:N>0&&Array(N).fill(null).map((e,n)=>{let i=Q[t*N+n];return V?/*#__PURE__*/(0,h.jsx)(r.kC.Item,{flex:"grow",children:i}):i})},Y[t].id)):/*#__PURE__*/(0,h.jsx)(r.kC,{direction:"column",children:Q}),$]})]})}function K({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(A[(i.display_options?.content_display||{}).model_type]||y.g5).itemRep||Z,s=i.display_options?.content_display?.component_type??t,d=(0,b.Z)()?c.tG:c.yF;return/*#__PURE__*/(0,h.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[i.title&&/*#__PURE__*/(0,h.jsx)(g.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),/*#__PURE__*/(0,h.jsx)(r.Rk,{columnWidth:d,gutterWidth:c.oX,items:i.objects||[],layout:"flexible",renderItem:({data:t,itemIdx:n})=>/*#__PURE__*/(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:T,index:n,item:t,story:i,view:a,viewParameter:o},n)})]})}function P(e){switch(e.story.display_options?.content_display?.pins_display){case 3:case 1:case 2:return/*#__PURE__*/(0,h.jsx)(K,{...e});default:return/*#__PURE__*/(0,h.jsx)(D,{...e})}}var E=n(656817),L=n(616550),R=n(573706),W=n(559028),G=n(144326),z=n(436922),N=n(383399);let O=({actionText:e,actionUrl:t,articleId:n,author:i,authorAvatar:a,auxData:l,component:s,contentIds:d,coverImage:c,debug:u,index:p,isFullWidth:m=!1,onImageLoad:y,storyId:g,storyType:x,subtitle:j,title:f,view:w,viewParameter:v,width:I,windowWidth:k})=>{let b=(0,G.ZP)(),S=(0,L.k6)(),{logContextEvent:C}=(0,R.v)(),[F,T]=(0,_.useState)(!1),Z=(0,N.Z)(),A=Z.isAuth?Z?.avatar_color_index:void 0,D=(0,o.Z)({loggingId:n,objectIdStr:n,impressionType:"Article",contextLogData:{content_ids:d,story_id:g,story_type:x,article_id:n,...l},slotIndex:p,viewParameter:v,viewType:w,componentType:s});return/*#__PURE__*/(0,h.jsx)(r.xu,{"data-test-id":"sf-hero",children:/*#__PURE__*/(0,h.jsxs)(r.xu,{ref:D,height:"auto",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),width:I,children:[/*#__PURE__*/(0,h.jsx)(r.iP,{onTap:()=>{C({event_type:101,view_type:w,view_parameter:v,component:s,aux_data:{article_id:n,content_ids:d,story_id:g,story_type:x,...l}}),S.push(t)},children:/*#__PURE__*/(0,h.jsxs)(r.xu,{height:m?400:"35vw",maxHeight:500,overflow:"hidden",position:"relative",children:[/*#__PURE__*/(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"scale(1.5)":"scale(1)"}},height:"100%",width:"100%",children:/*#__PURE__*/(0,h.jsx)(r.Ee,{alt:b.bt("Image de couverture de ce Shopping Spotlight", "Cover image of this shopping spotlight", "hero.heroCoverImage", undefined, true),color:"#fff",fit:"cover",naturalHeight:400,naturalWidth:400,onLoad:y,src:c,children:/*#__PURE__*/(0,h.jsx)(r.xu,{color:"transparentDarkGray",display:"block",height:"100%",opacity:.3,width:"100%"})})}),/*#__PURE__*/(0,h.jsx)(r.xu,{bottom:!0,marginBottom:m?12:0,padding:6,position:"absolute",width:"100%",children:/*#__PURE__*/(0,h.jsxs)(r.kC,{direction:"column",height:"100%",justifyContent:"end",children:[/*#__PURE__*/(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"translateY(-20px)":"translateY(20px)"}},children:/*#__PURE__*/(0,h.jsx)(r.X6,{color:"light",size:k<=822?"600":k<1e3?"400":k<1100?"500":"600",children:f})}),/*#__PURE__*/(0,h.jsxs)(r.xu,{dangerouslySetInlineStyle:{__style:{opacity:F?1:0,transition:F?"opacity 0.4s ease-in":"opacity 0.4s ease-out"}},display:"block",height:F?"auto":20,overflow:"hidden",children:[/*#__PURE__*/(0,h.jsx)(r.xv,{color:"inverse",children:j}),i&&/*#__PURE__*/(0,h.jsx)(r.xu,{marginTop:4,children:/*#__PURE__*/(0,h.jsxs)(r.kC,{alignItems:"center",direction:"row",children:[/*#__PURE__*/(0,h.jsx)(W.qE,{color:A,name:i,size:"md",src:a})," ",/*#__PURE__*/(0,h.jsx)(r.xv,{color:"inverse",children:i})]})})]}),/*#__PURE__*/(0,h.jsx)(r.xu,{marginTop:4,width:"74px",children:/*#__PURE__*/(0,h.jsx)(r.zx,{color:"white",onClick:()=>{S.push(t)},size:"lg",text:e})})]})})]})}),void 0!==u&&/*#__PURE__*/(0,h.jsx)(z.Z,{data:u})]})})};var M=n(773456),B=n(993422),H=n(235753);function U({auxData:e,onImageLoad:t,story:n,view:i,viewParameter:a,component:o,width:l}){let[s,d]=(0,_.useState)(0),c=(0,_.useRef)(null),u=n.objects?.slice(0,3)||[];return/*#__PURE__*/(0,h.jsxs)(r.xu,{ref:c,alignItems:"end",display:"flex",height:400,justifyContent:"center",position:"relative",width:l,children:[/*#__PURE__*/(0,h.jsx)(M.Z,{containerRef:c.current,id:n.id,index:s,slideWidth:l,children:u.map((r,s)=>/*#__PURE__*/(0,h.jsx)(O,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:o,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,isFullWidth:!0,onImageLoad:t,storyId:n.id,storyType:n.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:i,viewParameter:a,width:l,windowWidth:l},r.id))}),/*#__PURE__*/(0,h.jsx)(r.xu,{display:"inlineBlock",height:"auto",paddingY:5,position:"absolute",width:"60%",children:/*#__PURE__*/(0,h.jsx)(B.default,{addEllipsis:!0,backNode:/*#__PURE__*/(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"back",showFab:!0}),carouselData:{index:s,entityId:"",carouselSlots:u.map(e=>({id:e.id,title:null}))},carouselIndex:s,forwardNode:/*#__PURE__*/(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"forward",showFab:!0}),handleCarouselSwipe:e=>{d(e)},pinKey:null})})]})}function X({auxData:e,component:t,onImageLoad:n,story:i,view:a,viewParameter:o,windowWidth:l}){let s=i.objects?.slice(0,3)||[];return/*#__PURE__*/(0,h.jsxs)(_.Fragment,{children:[/*#__PURE__*/(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[0].dominant_colors[0]}},flex:"grow"}),s.map((r,s)=>/*#__PURE__*/(0,h.jsx)(O,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:t,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,onImageLoad:n,storyId:i.id,storyType:i.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:a,viewParameter:o,width:500,windowWidth:l},r.id)),/*#__PURE__*/(0,h.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[2].dominant_colors[0]}},flex:"grow"})]})}function q({auxData:e,component:t,pwtSurfaceContext:n,story:i,view:a,viewParameter:o}){let{width:l}=(0,E.Z)()||{},s=()=>{n&&n.markConstraintComplete("RenderHeroImages")},d=!l||l>822?3:1;return/*#__PURE__*/(0,h.jsx)(_.Fragment,{children:/*#__PURE__*/(0,h.jsx)(r.kC,{alignItems:"stretch",direction:"row",justifyContent:"start",width:l,children:3===d?/*#__PURE__*/(0,h.jsx)(X,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,windowWidth:l}):/*#__PURE__*/(0,h.jsx)(U,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,width:l})})})}function Y({story:e}){let t=(0,L.k6)(),{user:n,custom_properties:i,action:a}=e||{},{full_name:o,username:l,image_medium_url:s,avatar_color_index:d}=n||{},u=o||e.title?.format||"",{url:p,text:m}=a||{},{image:y}=i||{};if(!p||!m)return null;let g=/*#__PURE__*/(0,h.jsxs)(r.xu,{alignItems:"center",color:"transparentDarkGray",display:"flex",height:"100%",justifyContent:"center",padding:2,position:"relative",children:[l&&s&&/*#__PURE__*/(0,h.jsx)(r.xu,{left:!0,padding:2,position:"absolute",top:!0,children:/*#__PURE__*/(0,h.jsx)(W.qE,{color:d||void 0,name:l,size:"sm",src:s})}),u&&/*#__PURE__*/(0,h.jsx)(r.xv,{color:"inverse",weight:"bold",children:u})]});return/*#__PURE__*/(0,h.jsxs)(r.xu,{marginBottom:4,width:c.yF,children:[/*#__PURE__*/(0,h.jsx)(r.iP,{onTap:()=>t.push(p),children:/*#__PURE__*/(0,h.jsx)(r.zd,{height:c.yF,rounding:2,wash:!0,children:"string"==typeof y&&y?/*#__PURE__*/(0,h.jsx)(r.Ee,{alt:u,fit:"contain",naturalHeight:c.yF,naturalWidth:c.yF,src:y,children:g}):/*#__PURE__*/(0,h.jsx)(r.xu,{height:c.yF,width:c.yF,children:g})})}),/*#__PURE__*/(0,h.jsx)(r.xu,{marginTop:3,children:/*#__PURE__*/(0,h.jsx)(r.ZP,{fullWidth:!0,href:p,text:m})})]})}let V=new Set([101]),J="UNKNOWN_CONTAINER_TYPE",Q=void 0!==i?i:i=n(826263);function $(e){var t;let{auxData:n,componentFallback:i,initialSlotIndex:d,view:c,viewParameter:u,width:p}=e,{story:m,storyKey:y,...x}=e,j=(0,a.Z)(Q,y),_=j?.displayOptions?.contentDisplay?.componentType??i,w={...x,component:_},v=(0,o.Z)({clientTrackingParams:j?.trackingParams,componentType:_,contextLogData:{story_id:j?.storyId,story_type:j?.storyType,content_ids:j?.contentIds,...n},impressionType:"Story",loggingId:j?.storyId,slotIndex:d||0,viewParameter:u,viewType:c}),I=(()=>{switch(j?.containerType){case 90:case 139:return/*#__PURE__*/(0,h.jsx)(l.default,{...w,story:m,storyKey:j,width:p});case 88:return/*#__PURE__*/(0,h.jsx)(g.Z,{...w,storyKey:j});case 89:let{location:e,text:t,url:n}=j?.action||{};return/*#__PURE__*/(0,h.jsx)(s.Z,{location:e,text:t,url:n});case 91:return!!m&&/*#__PURE__*/(0,h.jsx)(P,{...w,story:m});case 101:return!!m&&/*#__PURE__*/(0,h.jsx)(q,{...w,story:m});case 92:return!!m&&/*#__PURE__*/(0,h.jsx)(Y,{...w,story:m});case 131:return!!m&&/*#__PURE__*/(0,h.jsx)(f,{...w,story:m});default:return J}})();return I===J?null:/*#__PURE__*/(0,h.jsxs)(r.xu,{ref:v,width:(t=j?.containerType,V.has(t))?void 0:p,children:[I,/*#__PURE__*/(0,h.jsx)(r.xu,{})]})}},724924:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(883119),r=n(785893);let a={center:{outer:"center",inner:"center"},left:{outer:"start",inner:"start"},right:{outer:"end",inner:"end"}};function o({children:e,itemGap:t,containerRef:n,numRows:o=1,rowAlignment:l="center"}){let s=a[l];return/*#__PURE__*/(0,r.jsx)(i.xu,{ref:n,width:"100%",children:/*#__PURE__*/(0,r.jsx)(i.kC,{alignItems:"center",justifyContent:s.outer,children:/*#__PURE__*/(0,r.jsx)(i.kC,{dataTestId:"story-row-items-container",gap:{row:Math.floor(t/4),column:0},justifyContent:s.inner,wrap:o>1,children:e})})})}},505471:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(667294);function r({items:e,itemWidth:t,itemGap:n,numRows:r=1,actionItemType:a}){let o;let[l,s]=function(){let[e,t]=(0,i.useState)(0),n=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{n.current&&t(n.current.clientWidth)},[n]);return(0,i.useEffect)(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]),(0,i.useEffect)(r),[e,n]}(),d=Math.floor((l+n)/(t+n))*r||r,c=e.slice(0,d),u=[];switch(a){case"nextFour":d>=e.length?u=[c.pop()]:(c.pop(),u=e.slice(d-1,d+3));break;case"one":o=d>e.length?e[Math.floor(e.length/2)]:c.pop()}return{containerRef:s,itemsToRender:c,actionItem:o,nextFourItems:u}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/81507.fr-02ab45883a9a1681.mjs.map