"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),u=o,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},56204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},a="Network Match Checker",i={unversionedId:"components/network-match-checker",id:"components/network-match-checker",title:"Network Match Checker",description:"The Network Match Checker component controls the visibility of networked objects based on match id.",source:"@site/docs/components/network-match-checker.md",sourceDirName:"components",slug:"/components/network-match-checker",permalink:"/Mirage/docs/components/network-match-checker",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/components/network-match-checker.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Network Manager",permalink:"/Mirage/docs/components/network-manager"},next:{title:"Network Ping Display",permalink:"/Mirage/docs/components/network-ping-display"}},s={},l=[],p={toc:l};function m(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-match-checker"},"Network Match Checker"),(0,o.kt)("p",null,"The Network Match Checker component controls the visibility of networked objects based on match id."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network Scene Checker component",src:r(25902).Z,width:"510",height:"146"})),(0,o.kt)("p",null,"Any object with this component on it will only be visible to other objects in the same match."),(0,o.kt)("p",null,"This would be used to isolate players to their respective matches within a single game server instance."),(0,o.kt)("p",null,"When you create a match, generate and store, in a List, for example, a new match id with ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Guid.NewGuid();")," and assign the same match id to the Network Match Checker via ",(0,o.kt)("inlineCode",{parentName:"p"},"GetComponent<NetworkMatchChecker>().matchId"),"."),(0,o.kt)("p",null,"Mirage's built-in Observers system will isolate SyncVar's and ClientRpc's on networked objects to only send updates to clients with the same match id."))}m.isMDXComponent=!0},25902:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/NetworkMatchChecker-466e2627f1cef6d1a9583c1221886fe2.png"}}]);