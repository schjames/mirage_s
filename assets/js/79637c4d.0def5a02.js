"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,f=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"LocalPlayerAttribute",title:"LocalPlayerAttribute"},l="Class LocalPlayerAttribute",o={unversionedId:"reference/Mirage/LocalPlayerAttribute",id:"reference/Mirage/LocalPlayerAttribute",title:"LocalPlayerAttribute",description:"Prevents nonlocal players from running this method.",source:"@site/docs/reference/Mirage/LocalPlayerAttribute.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/LocalPlayerAttribute",permalink:"/Mirage/docs/reference/Mirage/LocalPlayerAttribute",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/LocalPlayerAttribute.md",tags:[],version:"current",frontMatter:{id:"LocalPlayerAttribute",title:"LocalPlayerAttribute"},sidebar:"api",previous:{title:"LobbyReady",permalink:"/Mirage/docs/reference/Mirage/LobbyReady"},next:{title:"MessageDelegate<T>",permalink:"/Mirage/docs/reference/Mirage/MessageDelegate-1"}},c={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"error",id:"error",level:4},{value:"Declaration",id:"declaration",level:5}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-localplayerattribute"},"Class LocalPlayerAttribute"),(0,a.kt)("p",null,"Prevents nonlocal players from running this method.\nCan only be used inside a NetworkBehaviour"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,a.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Method)]\npublic class LocalPlayerAttribute : Attribute, _Attribute\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"error"},"error"),(0,a.kt)("p",null,"If true,  when the method is called from a client, it throws an error\nIf false, no error is thrown, but the method won","'","t execute\nuseful for unity built in methods such as Await, Update, Start, etc."),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public bool error\n")))}d.isMDXComponent=!0}}]);