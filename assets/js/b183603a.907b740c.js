"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>S,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},S=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,S=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},S),{},{components:n})):r.createElement(m,i({ref:t},S))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={id:"SyncSortedSet-1",title:"SyncSortedSet<T>"},i="Class SyncSortedSet&lt;T&gt;",o={unversionedId:"reference/Mirage.Collections/SyncSortedSet-1",id:"reference/Mirage.Collections/SyncSortedSet-1",title:"SyncSortedSet<T>",description:"Inheritance",source:"@site/docs/reference/Mirage.Collections/SyncSortedSet-1.md",sourceDirName:"reference/Mirage.Collections",slug:"/reference/Mirage.Collections/SyncSortedSet-1",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncSortedSet-1",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/master/doc/docs/reference/Mirage.Collections/SyncSortedSet-1.md",tags:[],version:"current",frontMatter:{id:"SyncSortedSet-1",title:"SyncSortedSet<T>"},sidebar:"api",previous:{title:"SyncSet<T>",permalink:"/Mirage/docs/reference/Mirage.Collections/SyncSet-1"},next:{title:"Mirage.DisplayMetrics",permalink:"/Mirage/docs/reference/Mirage.DisplayMetrics/"}},c={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5},{value:"Constructors",id:"constructors",level:3},{value:"SyncSortedSet()",id:"syncsortedset",level:4},{value:"Declaration",id:"declaration",level:5},{value:"SyncSortedSet(IComparer&lt;T&gt;)",id:"syncsortedseticomparert",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Methods",id:"methods",level:3},{value:"GetEnumerator()",id:"getenumerator",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Returns",id:"returns",level:5}],S={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-syncsortedsett"},"Class SyncSortedSet","<","T",">"),(0,l.kt)("div",{class:"inheritance"},(0,l.kt)("h5",{id:"inheritance"},"Inheritance"),(0,l.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,l.kt)("div",{class:"level",style:{"--data-index":1}},"Mirage.Collections.SyncSet<T>")),(0,l.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".objects"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Count"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsReadOnly"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnAdd"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnClear"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnRemove"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnChange"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Reset()"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsDirty"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Flush()"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnSerializeAll(Mirage.Serialization.NetworkWriter)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnSerializeDelta(Mirage.Serialization.NetworkWriter)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnDeserializeAll(Mirage.Serialization.NetworkReader)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".OnDeserializeDelta(Mirage.Serialization.NetworkReader)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Add(T)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".System.Collections.Generic.ICollection","<","T",">",".Add(T)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Clear()"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Contains(T)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".CopyTo(T[], System.Int32)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Remove(T)"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".System.Collections.IEnumerable.GetEnumerator()"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".ExceptWith(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IntersectWith(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsProperSubsetOf(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsProperSupersetOf(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsSubsetOf(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".IsSupersetOf(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".Overlaps(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".SetEquals(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".SymmetricExceptWith(System.Collections.Generic.IEnumerable","<","T",">",")"),(0,l.kt)("p",null,"Mirage.Collections.SyncSet","<","T",">",".UnionWith(System.Collections.Generic.IEnumerable","<","T",">",")")),(0,l.kt)("h5",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class SyncSortedSet<T> : SyncSet<T>, ISet<T>, ICollection<T>, IEnumerable<T>, IEnumerable, ISyncObject\n")),(0,l.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("h4",{id:"syncsortedset"},"SyncSortedSet()"),(0,l.kt)("h5",{id:"declaration"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncSortedSet()\n")),(0,l.kt)("h4",{id:"syncsortedseticomparert"},"SyncSortedSet(IComparer","<","T",">",")"),(0,l.kt)("h5",{id:"declaration-1"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SyncSortedSet(IComparer<T> comparer)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.IComparer","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"comparer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"getenumerator"},"GetEnumerator()"),(0,l.kt)("h5",{id:"declaration-2"},"Declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public SortedSet<T>.Enumerator GetEnumerator()\n")),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System.Collections.Generic.SortedSet.Enumerator","<",">"),(0,l.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);