(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3549:function(e,t,r){Promise.resolve().then(r.bind(r,7777)),Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.t.bind(r,3086,23))},7777:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var s=r(3827),n=r(7191),a=r(4090),l=r(5526);function i(){let e=(0,a.useRef)(!1);return(0,l.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var o=r(4205),c=r(4561),d=r(2435);class u extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f(e){let{children:t,isPresent:r}=e,s=(0,a.useId)(),n=(0,a.useRef)(null),l=(0,a.useRef)({width:0,height:0,top:0,left:0});return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:i}=l.current;if(r||!n.current||!e||!t)return;n.current.dataset.motionPopId=s;let o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(a,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}},[r]),a.createElement(u,{isPresent:r,childRef:n,sizeRef:l},a.cloneElement(t,{ref:n}))}let h=e=>{let{children:t,initial:r,isPresent:s,onExitComplete:n,custom:l,presenceAffectsLayout:i,mode:o}=e,u=(0,d.h)(m),h=(0,a.useId)(),x=(0,a.useMemo)(()=>({id:h,initial:r,isPresent:s,custom:l,onExitComplete:e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;n&&n()},register:e=>(u.set(e,!1),()=>u.delete(e))}),i?void 0:[s]);return(0,a.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[s]),a.useEffect(()=>{s||u.size||!n||n()},[s]),"popLayout"===o&&(t=a.createElement(f,{isPresent:s},t)),a.createElement(c.O.Provider,{value:x},t)};function m(){return new Map}var x=r(3856),p=r(9908);let b=e=>e.key||"",v=e=>{var t;let{children:r,custom:s,initial:n=!0,onExitComplete:c,exitBeforeEnter:d,presenceAffectsLayout:u=!0,mode:f="sync"}=e;(0,p.k)(!d,"Replace exitBeforeEnter with mode='wait'");let m=(0,a.useContext)(x.p).forceRender||function(){let e=i(),[t,r]=(0,a.useState)(0),s=(0,a.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,a.useCallback)(()=>o.Wi.postRender(s),[s]),t]}()[0],v=i(),j=function(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}(r),g=j,y=(0,a.useRef)(new Map).current,N=(0,a.useRef)(g),w=(0,a.useRef)(new Map).current,k=(0,a.useRef)(!0);if((0,l.L)(()=>{k.current=!1,function(e,t){e.forEach(e=>{let r=b(e);t.set(r,e)})}(j,w),N.current=g}),t=()=>{k.current=!0,w.clear(),y.clear()},(0,a.useEffect)(()=>()=>t(),[]),k.current)return a.createElement(a.Fragment,null,g.map(e=>a.createElement(h,{key:b(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:f},e)));g=[...g];let E=N.current.map(b),C=j.map(b),P=E.length;for(let e=0;e<P;e++){let t=E[e];-1!==C.indexOf(t)||y.has(t)||y.set(t,void 0)}return"wait"===f&&y.size&&(g=[]),y.forEach((e,t)=>{if(-1!==C.indexOf(t))return;let r=w.get(t);if(!r)return;let n=E.indexOf(t),l=e;l||(l=a.createElement(h,{key:b(r),isPresent:!1,onExitComplete:()=>{y.delete(t);let e=Array.from(w.keys()).filter(e=>!C.includes(e));if(e.forEach(e=>w.delete(e)),N.current=j.filter(r=>{let s=b(r);return s===t||e.includes(s)}),!y.size){if(!1===v.current)return;m(),c&&c()}},custom:s,presenceAffectsLayout:u,mode:f},r),y.set(t,l)),g.splice(n,0,l)}),g=g.map(e=>{let t=e.key;return y.has(t)?e:a.createElement(h,{key:b(e),isPresent:!0,presenceAffectsLayout:u,mode:f},e)}),a.createElement(a.Fragment,null,y.size?g:g.map(e=>(0,a.cloneElement)(e)))};var j=r(8792);r(7862);var g=r(703);let y=e=>{let{isOpen:t,setIsOpen:r}=e,[l,i]=(0,a.useState)(!1);return(0,s.jsx)(v,{children:t&&(0,s.jsx)(n.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{r(!1),i(e=>!e)},className:"bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer",children:(0,s.jsx)(n.E.div,{initial:{scale:0,rotate:"12.5deg"},animate:{scale:1,rotate:"0deg"},exit:{scale:0,rotate:"0deg"},onClick:e=>e.stopPropagation(),className:"bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden",children:(0,s.jsxs)("div",{className:"navbar  sm:flex flex-col sm:flex-row  gap-4  justify-center text-3xl  font-abhaya-libre-semibold",children:[(0,s.jsx)("div",{onClick:()=>{r(!1),i(e=>!e)},children:(0,s.jsx)(N,{href:"/",children:"Home"})}),(0,s.jsx)("div",{className:"w-fit h-fit",onClick:()=>i(e=>!e),children:(0,s.jsx)(N,{href:"#",children:"Galleries"})}),l&&(0,s.jsx)(v,{children:(0,s.jsxs)(n.E.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},transition:{duration:.4,ease:"easeOut"},className:"flex flex-col menu text-2xl",children:[(0,s.jsx)(j.default,{href:"/portraits",className:"  text-xl hover:text-amber-400",onClick:()=>{r(!1),i(e=>!e)},children:"Portraits"}),(0,s.jsx)(j.default,{href:"/stilllife",className:" text-xl hover:text-amber-400",onClick:()=>{r(!1),i(e=>!e)},children:"Still Life"}),(0,s.jsx)(j.default,{href:"/nature",className:" text-xl hover:text-amber-400",onClick:()=>{r(!1),i(e=>!e)},children:"Nature & Landscape"}),(0,s.jsx)(j.default,{href:"/automotive",className:" text-xl hover:text-amber-400",onClick:()=>{r(!1),i(e=>!e)},children:"Automotive"}),(0,s.jsx)(j.default,{href:"/urban",className:" text-xl hover:text-amber-400",onClick:()=>{r(!1),i(e=>!e)},children:"Urban"})]})}),(0,s.jsx)("div",{onClick:()=>{r(!1),i(e=>!e)},children:(0,s.jsx)(N,{href:"/blog",children:"Blog"})}),(0,s.jsx)("div",{onClick:()=>{r(!1),i(e=>!e)},children:(0,s.jsx)(N,{href:"/about",children:"About"})}),(0,s.jsx)("div",{onClick:()=>{r(!1),i(e=>!e)},children:(0,s.jsx)(N,{href:"/contact",children:"Contact"})})]})})})})},N=e=>{let{children:t,href:r}=e,[l,i]=(0,a.useState)(!1);return(0,s.jsx)("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"relative w-fit h-fit",children:(0,s.jsxs)(j.default,{href:r,className:"relative text-white",children:[t,(0,s.jsx)(n.E.span,{initial:{scaleX:0},animate:{scaleX:l?1:0},transition:{duration:.3},className:"absolute bottom-[-10px] left-0 right-0 h-1 origin-left rounded-full bg-amber-400 transition-transform duration-300 ease-out"})]})})};var w=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"px-4 bg-black grid place-content-center sm:hidden",children:[(0,s.jsx)("button",{onClick:()=>t(!0),className:" text-white font-medium  rounded hover:opacity-90 transition-opacity",children:(0,s.jsx)(g.default,{src:"burger-menu-right-svgrepo-com.svg",className:"text-white",width:28,height:28,alt:"hamburger icon"})}),(0,s.jsx)(y,{isOpen:e,setIsOpen:t})]})};let k=e=>{let{children:t,href:r}=e,[l,i]=(0,a.useState)(!1);return(0,s.jsx)("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"relative w-fit h-fit",children:(0,s.jsxs)(j.default,{href:r,className:"relative text-white",children:[t,(0,s.jsx)(n.E.span,{initial:{scaleX:0},animate:{scaleX:l?1:0},transition:{duration:.3},className:"absolute bottom-[-10px] left-0 right-0 h-1 origin-left rounded-full bg-amber-400 transition-transform duration-300 ease-out"})]})})},E=e=>{let{children:t,href:r,FlyoutContent:l}=e,[i,o]=(0,a.useState)(!1),c=l&&i;return(0,s.jsxs)("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"relative w-fit h-fit",children:[(0,s.jsxs)("a",{href:r,className:"relative text-white",children:[t,(0,s.jsx)("span",{style:{transform:c?"scaleX(1)":"scaleX(0)"},className:"absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-amber-400 transition-transform duration-300 ease-out"})]}),(0,s.jsx)(v,{children:c&&(0,s.jsxs)(n.E.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},style:{translateX:"-50%"},transition:{duration:.3,ease:"easeOut"},className:"absolute left-1/2 top-12 bg-white text-black",children:[(0,s.jsx)("div",{className:"absolute -top-6 left-0 right-0 h-6 bg-transparent"}),(0,s.jsx)("div",{className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"}),(0,s.jsx)(l,{})]})})]})},C=()=>(0,s.jsxs)("div",{className:"w-64 bg-black text-white p-6 shadow-xl border border-white border-width-1",children:[(0,s.jsxs)("div",{className:"mb-3 space-y-3",children:[(0,s.jsx)(j.default,{href:"/portraits",className:"block  hover:underline",children:"Portraits"}),(0,s.jsx)(j.default,{href:"/stilllife",className:"block  hover:underline",children:"Still Life"})]}),(0,s.jsxs)("div",{className:"mb-1 space-y-3",children:[(0,s.jsx)(j.default,{href:"/nature",className:"block hover:underline",children:"Nature & Landscape Page"}),(0,s.jsx)(j.default,{href:"automotive",className:"block hover:underline",children:"Automotive"}),(0,s.jsx)(j.default,{href:"/urban",className:"block hover:underline",children:"Urban"})]})]});var P=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("nav",{className:"flex sm:flex-col flex-row justify-between sm:justify-center items-center gap-4 bg-black  md:py-28 px-[min(5vw,20em)] py-8",children:[(0,s.jsx)(j.default,{href:"/",className:" text-white cursor-pointer  hover:text-gray-300 font-abhaya-libre-semibold font-medium  text-2xl sm:text-4xl lg:text-5xl ",children:"ShotsByVidz"}),(0,s.jsx)(w,{}),(0,s.jsxs)("div",{className:"navbar  hidden sm:flex flex-col sm:flex-row  gap-12  justify-center  pt-22 font-serif text-xl",children:[(0,s.jsx)(k,{href:"/",children:"Home"})," ",(0,s.jsx)("span",{className:"sm:hidden md:flex text-[10px]",children:"◇"}),(0,s.jsx)(E,{href:"#",FlyoutContent:C,children:"Galleries"})," ",(0,s.jsx)("span",{className:"sm:hidden md:flex text-[10px]",children:"◇"}),(0,s.jsx)(k,{href:"/blog",children:"Blog"}),(0,s.jsx)("span",{className:"sm:hidden md:flex text-[10px]",children:"◇"}),(0,s.jsx)(k,{href:"/about",children:"About"}),(0,s.jsx)("span",{className:"sm:hidden md:flex text-[10px]",children:"◇"}),(0,s.jsx)(k,{href:"/contact",children:"Contact"})]})]})}},7862:function(){},2445:function(){},3086:function(e){e.exports={style:{fontFamily:"'__Roboto_792391', '__Roboto_Fallback_792391'",fontWeight:400,fontStyle:"normal"},className:"__className_792391"}}},function(e){e.O(0,[889,792,971,69,744],function(){return e(e.s=3549)}),_N_E=e.O()}]);