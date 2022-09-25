"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5323],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(a),s=l,u=c["".concat(o,".").concat(s)]||c[s]||k[s]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={id:"IConnection",title:"IConnection"},i="Interface IConnection",d={unversionedId:"reference/Mirage.SocketLayer/IConnection",id:"reference/Mirage.SocketLayer/IConnection",title:"IConnection",description:"Connection for",source:"@site/docs/reference/Mirage.SocketLayer/IConnection.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/IConnection",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/IConnection",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.SocketLayer/IConnection.md",tags:[],version:"current",frontMatter:{id:"IConnection",title:"IConnection"},sidebar:"api",previous:{title:"DisconnectReason",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/DisconnectReason"},next:{title:"IDataHandler",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/IDataHandler"}},o={},m=[{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"EndPoint",id:"endpoint",level:4},{value:"Declaration",id:"declaration",level:5},{value:"State",id:"state",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Methods",id:"methods",level:3},{value:"Disconnect()",id:"disconnect",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"SendNotify(Byte[])",id:"sendnotifybyte",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"SendNotify(Byte[], Int32, Int32)",id:"sendnotifybyte-int32-int32",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"SendNotify(ArraySegment&lt;Byte&gt;)",id:"sendnotifyarraysegmentbyte",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"SendNotify(Byte[], INotifyCallBack)",id:"sendnotifybyte-inotifycallback",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"SendNotify(Byte[], Int32, Int32, INotifyCallBack)",id:"sendnotifybyte-int32-int32-inotifycallback",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"SendNotify(ArraySegment&lt;Byte&gt;, INotifyCallBack)",id:"sendnotifyarraysegmentbyte-inotifycallback",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"SendReliable(Byte[])",id:"sendreliablebyte",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"SendReliable(Byte[], Int32, Int32)",id:"sendreliablebyte-int32-int32",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"SendReliable(ArraySegment&lt;Byte&gt;)",id:"sendreliablearraysegmentbyte",level:4},{value:"Declaration",id:"declaration-11",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"SendUnreliable(Byte[])",id:"sendunreliablebyte",level:4},{value:"Declaration",id:"declaration-12",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"SendUnreliable(Byte[], Int32, Int32)",id:"sendunreliablebyte-int32-int32",level:4},{value:"Declaration",id:"declaration-13",level:5},{value:"Parameters",id:"parameters-10",level:5},{value:"SendUnreliable(ArraySegment&lt;Byte&gt;)",id:"sendunreliablearraysegmentbyte",level:4},{value:"Declaration",id:"declaration-14",level:5},{value:"Parameters",id:"parameters-11",level:5},{value:"FlushBatch()",id:"flushbatch",level:4},{value:"Declaration",id:"declaration-15",level:5}],p={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interface-iconnection"},"Interface IConnection"),(0,l.kt)("p",null,"Connection for "),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IConnection\n")),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"endpoint"},"EndPoint"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"IEndPoint EndPoint { get; }\n")),(0,l.kt)("h4",{id:"state"},"State"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"ConnectionState State { get; }\n")),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"disconnect"},"Disconnect()"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void Disconnect()\n")),(0,l.kt)("h4",{id:"sendnotifybyte"},"SendNotify(Byte[])"),(0,l.kt)("h5",{id:"declaration-3"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"INotifyToken SendNotify(byte[] packet)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyToken"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendnotifybyte-int32-int32"},"SendNotify(Byte[], Int32, Int32)"),(0,l.kt)("h5",{id:"declaration-4"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"INotifyToken SendNotify(byte[] packet, int offset, int length)\n")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyToken"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendnotifyarraysegmentbyte"},"SendNotify(ArraySegment","<","Byte",">",")"),(0,l.kt)("h5",{id:"declaration-5"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"INotifyToken SendNotify(ArraySegment<byte> packet)\n")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyToken"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendnotifybyte-inotifycallback"},"SendNotify(Byte[], INotifyCallBack)"),(0,l.kt)("h5",{id:"declaration-6"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendNotify(byte[] packet, INotifyCallBack callBacks)\n")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null},"callBacks"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendnotifybyte-int32-int32-inotifycallback"},"SendNotify(Byte[], Int32, Int32, INotifyCallBack)"),(0,l.kt)("h5",{id:"declaration-7"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendNotify(byte[] packet, int offset, int length, INotifyCallBack callBacks)\n")),(0,l.kt)("h5",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null},"callBacks"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendnotifyarraysegmentbyte-inotifycallback"},"SendNotify(ArraySegment","<","Byte",">",", INotifyCallBack)"),(0,l.kt)("h5",{id:"declaration-8"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendNotify(ArraySegment<byte> packet, INotifyCallBack callBacks)\n")),(0,l.kt)("h5",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.INotifyCallBack"),(0,l.kt)("td",{parentName:"tr",align:null},"callBacks"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendreliablebyte"},"SendReliable(Byte[])"),(0,l.kt)("p",null,"single message, batched by AckSystem"),(0,l.kt)("h5",{id:"declaration-9"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendReliable(byte[] message)\n")),(0,l.kt)("h5",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendreliablebyte-int32-int32"},"SendReliable(Byte[], Int32, Int32)"),(0,l.kt)("p",null,"single message, batched by AckSystem"),(0,l.kt)("h5",{id:"declaration-10"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendReliable(byte[] message, int offset, int length)\n")),(0,l.kt)("h5",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendreliablearraysegmentbyte"},"SendReliable(ArraySegment","<","Byte",">",")"),(0,l.kt)("p",null,"single message, batched by AckSystem"),(0,l.kt)("h5",{id:"declaration-11"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendReliable(ArraySegment<byte> message)\n")),(0,l.kt)("h5",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendunreliablebyte"},"SendUnreliable(Byte[])"),(0,l.kt)("h5",{id:"declaration-12"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendUnreliable(byte[] packet)\n")),(0,l.kt)("h5",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendunreliablebyte-int32-int32"},"SendUnreliable(Byte[], Int32, Int32)"),(0,l.kt)("h5",{id:"declaration-13"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendUnreliable(byte[] packet, int offset, int length)\n")),(0,l.kt)("h5",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Byte[]"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"sendunreliablearraysegmentbyte"},"SendUnreliable(ArraySegment","<","Byte",">",")"),(0,l.kt)("h5",{id:"declaration-14"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void SendUnreliable(ArraySegment<byte> packet)\n")),(0,l.kt)("h5",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.ArraySegment","<","System.Byte",">"),(0,l.kt)("td",{parentName:"tr",align:null},"packet"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"flushbatch"},"FlushBatch()"),(0,l.kt)("p",null,"Forces the connection to send any batched message immediately to the socket"),(0,l.kt)("p",null,"Note: this will only send the packet to the socket. Some sockets may not send on main thread so might not send immediately"),(0,l.kt)("h5",{id:"declaration-15"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"void FlushBatch()\n")))}k.isMDXComponent=!0}}]);