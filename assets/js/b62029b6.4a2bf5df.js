"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(t),u=i,f=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"SceneChangeFinishedEvent",title:"SceneChangeFinishedEvent"},c="Class SceneChangeFinishedEvent",o={unversionedId:"reference/Mirage/SceneChangeFinishedEvent",id:"reference/Mirage/SceneChangeFinishedEvent",title:"SceneChangeFinishedEvent",description:"Event fires from  when a scene change finishes on either Server or Client.",source:"@site/docs/reference/Mirage/SceneChangeFinishedEvent.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SceneChangeFinishedEvent",permalink:"/Mirage/docs/reference/Mirage/SceneChangeFinishedEvent",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/SceneChangeFinishedEvent.md",tags:[],version:"current",frontMatter:{id:"SceneChangeFinishedEvent",title:"SceneChangeFinishedEvent"},sidebar:"api",previous:{title:"SceneAttribute",permalink:"/Mirage/docs/reference/Mirage/SceneAttribute"},next:{title:"SceneChangeStartedEvent",permalink:"/Mirage/docs/reference/Mirage/SceneChangeStartedEvent"}},s={},l=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-scenechangefinishedevent"},"Class SceneChangeFinishedEvent"),(0,i.kt)("p",null,"Event fires from  when a scene change finishes on either Server or Client.\nScene - Loaded scene\nSceneOperation - Scene change type (Normal, Additive Load, Additive Unload)."),(0,i.kt)("div",{class:"inheritance"},(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class SceneChangeFinishedEvent : UnityEvent<Scene, SceneOperation>\n")))}p.isMDXComponent=!0}}]);