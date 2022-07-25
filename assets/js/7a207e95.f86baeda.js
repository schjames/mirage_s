"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=n,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"SocketFactory",title:"SocketFactory"},i="Class SocketFactory",o={unversionedId:"reference/Mirage.SocketLayer/SocketFactory",id:"reference/Mirage.SocketLayer/SocketFactory",title:"SocketFactory",description:"Creates an instance of",source:"@site/docs/reference/Mirage.SocketLayer/SocketFactory.md",sourceDirName:"reference/Mirage.SocketLayer",slug:"/reference/Mirage.SocketLayer/SocketFactory",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/SocketFactory",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.SocketLayer/SocketFactory.md",tags:[],version:"current",frontMatter:{id:"SocketFactory",title:"SocketFactory"},sidebar:"api",previous:{title:"Sequencer",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/Sequencer"},next:{title:"Mirage.Sockets.Udp",permalink:"/Mirage/docs/reference/Mirage.Sockets.Udp/"}},c={},d=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"MaxPacketSize",id:"maxpacketsize",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Methods",id:"methods",level:3},{value:"CreateServerSocket()",id:"createserversocket",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Returns",id:"returns",level:5},{value:"GetBindEndPoint()",id:"getbindendpoint",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Returns",id:"returns-1",level:5},{value:"CreateClientSocket()",id:"createclientsocket",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Returns",id:"returns-2",level:5},{value:"GetConnectEndPoint(String, Nullable&lt;UInt16&gt;)",id:"getconnectendpointstring-nullableuint16",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-3",level:5}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-socketfactory"},"Class SocketFactory"),(0,n.kt)("p",null,"Creates an instance of "),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract class SocketFactory : MonoBehaviour\n")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"maxpacketsize"},"MaxPacketSize"),(0,n.kt)("p",null,"Max size for packets sent to or received from Socket\nCalled once when Sockets are created"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract int MaxPacketSize { get; }\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"createserversocket"},"CreateServerSocket()"),(0,n.kt)("p",null,"Creates a  to be used by  on the server"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract ISocket CreateServerSocket()\n")),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.ISocket"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"getbindendpoint"},"GetBindEndPoint()"),(0,n.kt)("p",null,"Creates the  that the Server Socket will bind to"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract IEndPoint GetBindEndPoint()\n")),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"createclientsocket"},"CreateClientSocket()"),(0,n.kt)("p",null,"Creates a  to be used by  on the client"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract ISocket CreateClientSocket()\n")),(0,n.kt)("h5",{id:"returns-2"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.ISocket"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"getconnectendpointstring-nullableuint16"},"GetConnectEndPoint(String, Nullable","<","UInt16",">",")"),(0,n.kt)("p",null,"Creates the  that the Client Socket will connect to using the parameter given"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public abstract IEndPoint GetConnectEndPoint(string address = null, ushort? port = default(ushort? ))\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.String"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Nullable","<","System.UInt16",">"),(0,n.kt)("td",{parentName:"tr",align:null},"port"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-3"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.SocketLayer.IEndPoint"),(0,n.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);