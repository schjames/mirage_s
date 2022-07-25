"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,f=u["".concat(o,".").concat(g)]||u[g]||p[g]||c;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const c={id:"SceneMessage",title:"SceneMessage"},i="Struct SceneMessage",s={unversionedId:"reference/Mirage/SceneMessage",id:"reference/Mirage/SceneMessage",title:"SceneMessage",description:"Syntax",source:"@site/docs/reference/Mirage/SceneMessage.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SceneMessage",permalink:"/Mirage/docs/reference/Mirage/SceneMessage",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/SceneMessage.md",tags:[],version:"current",frontMatter:{id:"SceneMessage",title:"SceneMessage"},sidebar:"api",previous:{title:"SceneChangeStartedEvent",permalink:"/Mirage/docs/reference/Mirage/SceneChangeStartedEvent"},next:{title:"SceneNotReadyMessage",permalink:"/Mirage/docs/reference/Mirage/SceneNotReadyMessage"}},o={},l=[{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"MainActivateScene",id:"mainactivatescene",level:4},{value:"Declaration",id:"declaration",level:5},{value:"SceneOperation",id:"sceneoperation",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"AdditiveScenes",id:"additivescenes",level:4},{value:"Declaration",id:"declaration-2",level:5}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-scenemessage"},"Struct SceneMessage"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public struct SceneMessage\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"mainactivatescene"},"MainActivateScene"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public string MainActivateScene\n")),(0,a.kt)("h4",{id:"sceneoperation"},"SceneOperation"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public SceneOperation SceneOperation\n")),(0,a.kt)("h4",{id:"additivescenes"},"AdditiveScenes"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public List<string> AdditiveScenes\n")))}p.isMDXComponent=!0}}]);