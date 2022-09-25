"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||o[m]||l;return a?r.createElement(u,i(i({ref:t},g),{},{components:a})):r.createElement(u,i({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"IMessageReceiver",title:"IMessageReceiver"},i="Interface IMessageReceiver",s={unversionedId:"reference/Mirage/IMessageReceiver",id:"reference/Mirage/IMessageReceiver",title:"IMessageReceiver",description:"An object that can receive messages",source:"@site/docs/reference/Mirage/IMessageReceiver.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/IMessageReceiver",permalink:"/Mirage/docs/reference/Mirage/IMessageReceiver",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage/IMessageReceiver.md",tags:[],version:"current",frontMatter:{id:"IMessageReceiver",title:"IMessageReceiver"},sidebar:"api",previous:{title:"IClientObjectManager",permalink:"/Mirage/docs/reference/Mirage/IClientObjectManager"},next:{title:"IMessageSender",permalink:"/Mirage/docs/reference/Mirage/IMessageSender"}},c={},d=[{value:"Syntax",id:"syntax",level:5},{value:"Methods",id:"methods",level:3},{value:"RegisterHandler&lt;T&gt;(MessageDelegateWithPlayer&lt;T&gt;)",id:"registerhandlertmessagedelegatewithplayert",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"RegisterHandler&lt;T&gt;(MessageDelegate&lt;T&gt;)",id:"registerhandlertmessagedelegatet",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"UnregisterHandler&lt;T&gt;()",id:"unregisterhandlert",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"ClearHandlers()",id:"clearhandlers",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"HandleMessage(INetworkPlayer, ArraySegment&lt;Byte&gt;)",id:"handlemessageinetworkplayer-arraysegmentbyte",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-2",level:5}],g={toc:d};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-imessagereceiver"},"Interface IMessageReceiver"),(0,n.kt)("p",null,"An object that can receive messages"),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IMessageReceiver\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"registerhandlertmessagedelegatewithplayert"},"RegisterHandler","<","T",">","(MessageDelegateWithPlayer","<","T",">",")"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterHandler<T>(MessageDelegateWithPlayer<T> handler)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.MessageDelegateWithPlayer","<","T",">"),(0,n.kt)("td",{parentName:"tr",align:null},"handler"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"registerhandlertmessagedelegatet"},"RegisterHandler","<","T",">","(MessageDelegate","<","T",">",")"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void RegisterHandler<T>(MessageDelegate<T> handler)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.MessageDelegate","<","T",">"),(0,n.kt)("td",{parentName:"tr",align:null},"handler"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unregisterhandlert"},"UnregisterHandler","<","T",">","()"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void UnregisterHandler<T>()\n")),(0,n.kt)("h4",{id:"clearhandlers"},"ClearHandlers()"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void ClearHandlers()\n")),(0,n.kt)("h4",{id:"handlemessageinetworkplayer-arraysegmentbyte"},"HandleMessage(INetworkPlayer, ArraySegment","<","Byte",">",")"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"void HandleMessage(INetworkPlayer player, ArraySegment<byte> packet)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.INetworkPlayer"),(0,n.kt)("td",{parentName:"tr",align:null},"player"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,n.kt)("td",{parentName:"tr",align:null},"packet"),(0,n.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);