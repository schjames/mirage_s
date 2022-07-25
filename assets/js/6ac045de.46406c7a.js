"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},l="Quaternion Pack",o={unversionedId:"guides/bit-packing/quaternion-pack",id:"guides/bit-packing/quaternion-pack",title:"Quaternion Pack",description:"This page is a work in progress",source:"@site/docs/guides/bit-packing/quaternion-pack.md",sourceDirName:"guides/bit-packing",slug:"/guides/bit-packing/quaternion-pack",permalink:"/Mirage/docs/guides/bit-packing/quaternion-pack",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/guides/bit-packing/quaternion-pack.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Float Pack",permalink:"/Mirage/docs/guides/bit-packing/float-pack"},next:{title:"Variable Sized Integer Blocks",permalink:"/Mirage/docs/guides/bit-packing/var-int-blocks"}},s={},u=[{value:"Quaternion Rules",id:"quaternion-rules",level:3},{value:"Quaternions should be normalized",id:"quaternions-should-be-normalized",level:4},{value:"Positive and Negative Quaternions represent the same rotation",id:"positive-and-negative-quaternions-represent-the-same-rotation",level:4},{value:"Max of the second largest element",id:"max-of-the-second-largest-element",level:4},{value:"Result",id:"result",level:4},{value:"Supported Types",id:"supported-types",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Generated Code",id:"generated-code",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quaternion-pack"},"Quaternion Pack"),(0,r.kt)("admonition",{title:"Work In Progress",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This page is a work in progress")),(0,r.kt)("h3",{id:"quaternion-rules"},"Quaternion Rules"),(0,r.kt)("p",null,"Quaternions can be packed using some of the mathematical rules they follow"),(0,r.kt)("h4",{id:"quaternions-should-be-normalized"},"Quaternions should be normalized"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x^2 + y^2 + z^2 + w^2 = 1")),(0,r.kt)("p",null,"Because of this we only need to send the smallest 3 values as we can calculate the largest one again on the other side."),(0,r.kt)("p",null,"We also need to send the index to say which of the 4 elements was the largest"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"largest = sqrt(1 - a^2 + b^2 + c^2)")),(0,r.kt)("h4",{id:"positive-and-negative-quaternions-represent-the-same-rotation"},"Positive and Negative Quaternions represent the same rotation"),(0,r.kt)("p",null,"Q(x,y,z,w) === Q(-x,-y,-z,-w)"),(0,r.kt)("p",null,"If the largest element is negative we would have to send its sign in order to calculate the correct rotation."),(0,r.kt)("p",null,"However, because Q=-Q, if the largest element is negative we can just flip the sign of all 4 elements instead."),(0,r.kt)("h4",{id:"max-of-the-second-largest-element"},"Max of the second largest element"),(0,r.kt)("p",null,"The value of the 2nd largest element is when it is also equal to the largest so we have"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"L^2 + L^2 = 1")),(0,r.kt)("p",null,"From this, we can find the max value for the 2nd largest is "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"L = +- 1 / sqrt(2) = +- ~0.707")),(0,r.kt)("p",null,"This allows us to pack the smallest 3 elements in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"-0.707")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"+0.707")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"+1")),(0,r.kt)("h4",{id:"result"},"Result"),(0,r.kt)("p",null,"Combining all this we can send each of the smallest 3 elements with 9 bits, and 2 bits for the index of the largest element. Which reduces the size of a Quaternion from 128 bits unpacked to only 29 bits."),(0,r.kt)("p",null,"The precision of the smallest 3 can in increased or decreased to change the bit counts by multiples of 3. eg 10 bits per element will result in 32 bits total."),(0,r.kt)("h3",{id:"supported-types"},"Supported Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quaternion")),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyNetworkBehaviour : NetworkBehaviour \n{\n    [SyncVar, QuaternionPack(9)]\n    public Quaternion direction;\n}\n")),(0,r.kt)("h3",{id:"generated-code"},"Generated Code"),(0,r.kt)("p",null,"Source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[SyncVar, QuaternionPack(9)]\npublic int myValue;\n")),(0,r.kt)("p",null,"Generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"\nprivate QuaternionPacker myValue__Packer = new QuaternionPacker(9);\n\npublic override bool SerializeSyncVars(NetworkWriter writer, bool initialState)\n{\n    ulong syncVarDirtyBits = base.SyncVarDirtyBits;\n    bool result = base.SerializeSyncVars(writer, initialize);\n\n    if (initialState) \n    {\n        myValue__Packer.Pack(writer, this.myValue);\n        return true;\n    }\n\n    writer.Write(syncVarDirtyBits, 1);\n    if ((syncVarDirtyBits & 1UL) != 0UL)\n    {\n        myValue__Packer.Pack(writer, this.myValue);\n        result = true;\n    }\n\n    return result;\n}\n\npublic override void DeserializeSyncVars(NetworkReader reader, bool initialState)\n{\n    base.DeserializeSyncVars(reader, initialState);\n\n    if (initialState)\n    {\n        this.myValue = myValue__Packer.Unpack(reader);\n        return;\n    }\n\n    ulong dirtyMask = reader.Read(1);\n    if ((dirtyMask & 1UL) != 0UL)\n    {\n        this.myValue = myValue__Packer.Unpack(reader);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"last updated for Mirage v101.8.0")))}p.isMDXComponent=!0}}]);