"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[2382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||a;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:3},s="About IDs",o={unversionedId:"guides/about-ids",id:"guides/about-ids",title:"About IDs",description:"NetId",source:"@site/docs/guides/about-ids.md",sourceDirName:"guides",slug:"/guides/about-ids",permalink:"/Mirage/docs/guides/about-ids",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/guides/about-ids.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Network Authority",permalink:"/Mirage/docs/guides/authority"},next:{title:"Attributes",permalink:"/Mirage/docs/guides/attributes"}},c={},u=[{value:"NetId",id:"netid",level:2},{value:"Prefab Hash",id:"prefab-hash",level:2},{value:"Scene ID",id:"scene-id",level:2}],d={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-ids"},"About IDs"),(0,i.kt)("h2",{id:"netid"},"NetId"),(0,i.kt)("p",null,"Mirage uses ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," for NetId. Every NetworkIdentity is assigned a NetId when it is being spawned. Mirage uses the ID when passing messages between client and server to tell which object is the recipient of the message."),(0,i.kt)("h2",{id:"prefab-hash"},"Prefab Hash"),(0,i.kt)("p",null,"The prefab hash is used to uniquely identify each prefab so that it can be spawned over the network. Mirage will create the prefab hash by taking a 32-bit hash of the Asset path. The path is found using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/AssetDatabase.GetAssetPath.html"},"AssetDatabase.GetAssetPath")),(0,i.kt)("h2",{id:"scene-id"},"Scene ID"),(0,i.kt)("p",null,"Mirage uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ulong")," for Scene IDss. Every game object with a NetworkIdentity in the scene (hierarchy) is assigned a scene ID in OnPostProcessScene. Mirage needs that to distinguish scene objects from each other because Unity has no unique ID for different game objects in the scene."))}l.isMDXComponent=!0}}]);