"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[1384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},o="Sync List",s={unversionedId:"guides/sync/sync-list",id:"guides/sync/sync-list",title:"Sync List",description:"SyncList is an array-based list similar to C\\# List that synchronizes its contents from the server to the clients.",source:"@site/docs/guides/sync/sync-list.md",sourceDirName:"guides/sync",slug:"/guides/sync/sync-list",permalink:"/Mirage/docs/guides/sync/sync-list",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/guides/sync/sync-list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Sync Var",permalink:"/Mirage/docs/guides/sync/sync-var"},next:{title:"Sync Dictionary",permalink:"/Mirage/docs/guides/sync/sync-dictionary"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Example",id:"example",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sync-list"},"Sync List"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Collections/SyncList-1"},(0,a.kt)("inlineCode",{parentName:"a"},"SyncList"))," is an array-based list similar to C","#"," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netstandard-2.0"},"List<T",">")," that synchronizes its contents from the server to the clients."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Collections/SyncList-1"},"SyncList")," can contain any ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data-types"},"supported Mirage type"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add a field of type ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Collections/SyncList-1"},"SyncList")," on any ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage/NetworkIdentity"},"NetworkIdentity")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," can be any supported Mirage type and initialize it."),(0,a.kt)("admonition",{title:"IMPORTANT",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You need to initialize the SyncList immediately after the definition for them to work. You can mark them as ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," to enforce proper usage.")),(0,a.kt)("h3",{id:"basic-example"},"Basic example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using Mirage;\nusing Mirage.Collections;\n\n[System.Serializable]\npublic struct Item\n{\n    public string name;\n    public int amount;\n    public Color32 color;\n}\n\npublic class Player : NetworkBehaviour\n{\n    private readonly SyncList<Item> inventory = new SyncList<Item>();\n\n    public int coins = 100;\n\n    [ServerRpc]\n    public void Purchase(string itemName)\n    {\n        if (coins > 10)\n        {\n            coins -= 10;\n            Item item = new Item\n            {\n                name = "Sword",\n                amount = 3,\n                color = new Color32(125, 125, 125, 255)\n            };\n\n            // During next synchronization, all clients will see the item\n            inventory.Add(item);\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"callbacks"},"Callbacks"),(0,a.kt)("p",null,"You can detect when a ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncList")," changes on the client and/or server. This is especially useful for refreshing your UI, character appearance, etc."),(0,a.kt)("p",null,"There are different callbacks for different operations, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChange")," (any change to the list), ",(0,a.kt)("inlineCode",{parentName:"p"},"OnInsert")," (adding a new element), etc. Please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/Mirage.Collections/SyncList-1"},"SyncList API reference")," for the complete list of callbacks."),(0,a.kt)("p",null,"Depending on where you want to invoke the callbacks, you can use these methods to register them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Awake")," for both client and server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Identity.OnStartServer")," event for server-only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Identity.OnStartClient")," event for client-only")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By the time you subscribe, the list will already be initialized, so you will not get a call for the initial data, only updates.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using Mirage;\nusing Mirage.Collections;\n\npublic class Player : NetworkBehaviour \n{\n    private readonly SyncList<Item> inventory = new SyncList<Item>();\n    private readonly SyncList<Item> hotbar = new SyncList<Item>();\n\n    // This will hook the callback on both server and client\n    private void Awake()\n    {\n        inventory.OnChange += UpdateInventory;\n        Identity.OnStartClient.AddListener(OnStartClient);\n    }\n\n    // Hotbar changes will only be invoked on clients\n    private void OnStartClient() \n    {\n        hotbar.OnChange += UpdateHotbar;\n    }\n\n    private void UpdateInventory()\n    {\n        // Here you can refresh your UI for instance\n    }\n\n    private void UpdateHotbar()\n    {\n        // Here you can refresh your UI for instance\n    }\n}\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncList")," uses a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netstandard-2.0"},(0,a.kt)("inlineCode",{parentName:"a"},"List"))," to store its data. If you want to use a different list implementation, add a constructor and pass the list implementation to the parent constructor. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncList<Item> myList = new SyncList<Item>(new MyIList<Item>());\n")))}d.isMDXComponent=!0}}]);