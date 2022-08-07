"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[4781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"BitMask",title:"BitMask"},i="Class BitMask",s={unversionedId:"reference/Mirage.Serialization/BitMask",id:"reference/Mirage.Serialization/BitMask",title:"BitMask",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/BitMask.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/BitMask",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitMask",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Serialization/BitMask.md",tags:[],version:"current",frontMatter:{id:"BitMask",title:"BitMask"},sidebar:"api",previous:{title:"BitHelper",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitHelper"},next:{title:"CollectionExtensions",permalink:"/Mirage/docs/reference/Mirage.Serialization/CollectionExtensions"}},o={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"Mask(Int32)",id:"maskint32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"OuterMask(Int32, Int32)",id:"outermaskint32-int32",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-bitmask"},"Class BitMask"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static class BitMask\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"maskint32"},"Mask(Int32)"),(0,n.kt)("p",null,"Creates mask for bits"),(0,n.kt)("p",null,"(showing 32 bits for simplify, result is 64 bit)"),(0,n.kt)("p",null,"Example bits = 4 => mask = 00000000_00000000_00000000_00001111"),(0,n.kt)("p",null,"Example bits = 10 => mask = 00000000_00000000_00000011_11111111"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static ulong Mask(int bits)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"bits"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"outermaskint32-int32"},"OuterMask(Int32, Int32)"),(0,n.kt)("p",null,"Creates Mask either side of start and end\nNote this mask is only valid for start ","[0..63]"," and end ","[0..64]"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static ulong OuterMask(int start, int end)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);