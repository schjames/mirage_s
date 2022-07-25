"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[80],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,y=u["".concat(l,".").concat(f)]||u[f]||p[f]||c;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65704:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const c={id:"ISceneLoader",title:"ISceneLoader"},o="Interface ISceneLoader",i={unversionedId:"reference/Mirage/ISceneLoader",id:"reference/Mirage/ISceneLoader",title:"ISceneLoader",description:"Syntax",source:"@site/docs/reference/Mirage/ISceneLoader.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/ISceneLoader",permalink:"/Mirage/docs/reference/Mirage/ISceneLoader",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/ISceneLoader.md",tags:[],version:"current",frontMatter:{id:"ISceneLoader",title:"ISceneLoader"},sidebar:"api",previous:{title:"IObjectOwner",permalink:"/Mirage/docs/reference/Mirage/IObjectOwner"},next:{title:"IServerObjectManager",permalink:"/Mirage/docs/reference/Mirage/IServerObjectManager"}},l={},s=[{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"SceneIsReady",id:"sceneisready",level:4},{value:"Declaration",id:"declaration",level:5}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-isceneloader"},"Interface ISceneLoader"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public interface ISceneLoader\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"sceneisready"},"SceneIsReady"),(0,a.kt)("p",null,"Scene is fully loaded and we now can do things with player."),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"bool SceneIsReady { get; set; }\n")))}p.isMDXComponent=!0}}]);