(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{434:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-对虚拟-dom-的理解-虚拟-dom-主要做了什么-虚拟-dom-本身是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-对虚拟-dom-的理解-虚拟-dom-主要做了什么-虚拟-dom-本身是什么"}},[t._v("#")]),t._v(" 1. 对虚拟 DOM 的理解？虚拟 DOM 主要做了什么？虚拟 DOM 本身是什么？")]),t._v(" "),s("p",[t._v("从本质上来说，Virtual Dom是一个JavaScript对象，通过对象的方式来表示DOM结构。将页面的状态抽象为JS对象的形式，配合不同的渲染工具，使跨平台渲染成为可能。通过事务处理机制，将多次DOM修改的结果一次性的更新到页面上，从而有效的减少页面渲染的次数，减少修改DOM的重绘重排次数，提高渲染性能。")]),t._v(" "),s("p",[t._v("虚拟DOM是对DOM的抽象，这个对象是更加轻量级的对DOM的描述。它设计的最初目的，就是更好的跨平台，比如node.js就没有DOM，如果想实现SSR，那么一个方式就是借助虚拟dom，因为虚拟dom本身是js对象。 在代码渲染到页面之前，vue或者react会把代码转换成一个对象（虚拟DOM）。以对象的形式来描述真实dom结构，最终渲染到页面。在每次数据发生变化前，虚拟dom都会缓存一份，变化之时，现在的虚拟dom会与缓存的虚拟dom进行比较。在vue或者react内部封装了diff算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没有发生改变的通过原先的数据进行渲染。")]),t._v(" "),s("p",[t._v("另外现代前端框架的一个基本要求就是无须手动操作DOM，一方面是因为手动操作DOM无法保证程序性能，多人协作的项目中如果review不严格，可能会有开发者写出性能较低的代码，另一方面更重要的是省略手动DOM操作可以大大提高开发效率。")]),t._v(" "),s("p",[s("strong",[t._v("为什么要用 Virtual DOM：")])]),t._v(" "),s("p",[s("strong",[t._v("（1）保证性能下限，在不进行手动优化的情况下，提供过得去的性能")])]),t._v(" "),s("p",[t._v("下面对比一下修改DOM时真实DOM操作和Virtual DOM的过程，来看一下它们重排重绘的性能消耗∶")]),t._v(" "),s("ul",[s("li",[t._v("真实DOM∶ 生成HTML字符串＋ 重建所有的DOM元素")]),t._v(" "),s("li",[t._v("Virtual DOM∶ 生成vNode＋ DOMDiff＋必要的DOM更新")])]),t._v(" "),s("p",[t._v("Virtual DOM的更新DOM的准备工作耗费更多的时间，也就是JS层面，相比于更多的DOM操作它的消费是极其便宜的。尤雨溪在社区论坛中说道∶ 框架给你的保证是，你不需要手动优化的情况下，我依然可以给你提供过得去的性能。 "),s("strong",[t._v("（2）跨平台")]),t._v(" Virtual DOM本质上是JavaScript的对象，它可以很方便的跨平台操作，比如服务端渲染、uniapp等。")]),t._v(" "),s("h3",{attrs:{id:"_2-react-diff-算法的原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-react-diff-算法的原理是什么"}},[t._v("#")]),t._v(" 2. React diff 算法的原理是什么？")]),t._v(" "),s("p",[t._v("实际上，diff 算法探讨的就是虚拟 DOM 树发生变化后，生成 DOM 树更新补丁的方式。它通过对比新旧两株虚拟 DOM 树的变更差异，将更新补丁作用于真实 DOM，以最小成本完成视图更新。 "),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44d4ebb48a74ffda63754428c9d5273~tplv-k3u1fbpfcp-watermark.awebp",alt:"CgqCHl_qyouAAkb9AAB_cmWuZhc920_mh1609406106571.jpg"}}),t._v(" 具体的流程如下：")]),t._v(" "),s("ul",[s("li",[t._v("真实的 DOM 首先会映射为虚拟 DOM；")]),t._v(" "),s("li",[t._v("当虚拟 DOM 发生变化后，就会根据差距计算生成 patch，这个 patch 是一个结构化的数据，内容包含了增加、更新、移除等；")]),t._v(" "),s("li",[t._v("根据 patch 去更新真实的 DOM，反馈到用户的界面上。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/246e03a02e3e48ff941f921843bd8676~tplv-k3u1fbpfcp-watermark.awebp",alt:"CgqCHl_qypGAZPuGAADYrK9nkJY878_mh1609406162857.jpg"}}),t._v(" 一个简单的例子：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"visible"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("visbile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n复制代码\n")])])]),s("p",[t._v("这里，首先假定 ExampleComponent 可见，然后再改变它的状态，让它不可见 。映射为真实的 DOM 操作是这样的，React 会创建一个 div 节点。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"visible"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("visbile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n复制代码\n")])])]),s("p",[t._v("当把 visbile 的值变为 false 时，就会替换 class 属性为 hidden，并重写内部的 innerText 为 hidden。"),s("strong",[t._v("这样一个生成补丁、更新差异的过程统称为 diff 算法。")])]),t._v(" "),s("p",[t._v("diff算法可以总结为三个策略，分别从树、组件及元素三个层面进行复杂度的优化：")]),t._v(" "),s("p",[s("strong",[t._v("策略一：忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）")])]),t._v(" "),s("p",[t._v("这一策略需要进行树比对，即对树进行分层比较。树比对的处理手法是非常“暴力”的，即两棵树只对同一层次的节点进行比较，如果发现节点已经不存在了，则该节点及其子节点会被完全删除掉，不会用于进一步的比较，这就提升了比对效率。")]),t._v(" "),s("p",[s("strong",[t._v("策略二：如果组件的 class 一致，则默认为相似的树结构，否则默认为不同的树结构。（基于组件进行对比）")])]),t._v(" "),s("p",[t._v("在组件比对的过程中：")]),t._v(" "),s("ul",[s("li",[t._v("如果组件是同一类型则进行树比对；")]),t._v(" "),s("li",[t._v("如果不是则直接放入补丁中。")])]),t._v(" "),s("p",[t._v("只要父组件类型不同，就会被重新渲染。这也就是为什么 shouldComponentUpdate、PureComponent 及 React.memo 可以提高性能的原因。")]),t._v(" "),s("p",[s("strong",[t._v("策略三：同一层级的子节点，可以通过标记 key 的方式进行列表对比。（基于节点进行对比）")])]),t._v(" "),s("p",[t._v("元素比对主要发生在同层级中，通过标记节点操作生成补丁。节点操作包含了插入、移动、删除等。其中节点重新排序同时涉及插入、移动、删除三个操作，所以效率消耗最大，此时策略三起到了至关重要的作用。通过标记 key 的方式，React 可以直接移动 DOM 节点，降低内耗。")]),t._v(" "),s("h3",{attrs:{id:"_3-react-key-是干嘛用的-为什么要加-key-主要是解决哪一类问题的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-key-是干嘛用的-为什么要加-key-主要是解决哪一类问题的"}},[t._v("#")]),t._v(" 3. React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的")]),t._v(" "),s("p",[t._v("Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。")]),t._v(" "),s("p",[t._v("在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系。")]),t._v(" "),s("p",[t._v("注意事项：")]),t._v(" "),s("ul",[s("li",[t._v("key值一定要和具体的元素—一对应；")]),t._v(" "),s("li",[t._v("尽量不要用数组的index去作为key；")]),t._v(" "),s("li",[t._v("不要在render的时候用随机数或者其他操作给元素加上不稳定的key，这样造成的性能开销比不加key的情况下更糟糕。")])]),t._v(" "),s("h3",{attrs:{id:"_4-虚拟-dom-的引入与直接操作原生-dom-相比-哪一个效率更高-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-虚拟-dom-的引入与直接操作原生-dom-相比-哪一个效率更高-为什么"}},[t._v("#")]),t._v(" 4. 虚拟 DOM 的引入与直接操作原生 DOM 相比，哪一个效率更高，为什么")]),t._v(" "),s("p",[t._v("虚拟DOM相对原生的DOM不一定是效率更高，如果只修改一个按钮的文案，那么虚拟 DOM 的操作无论如何都不可能比真实的 DOM 操作更快。在首次渲染大量DOM时，由于多了一层虚拟DOM的计算，虚拟DOM也会比innerHTML插入慢。它能保证性能下限，在真实DOM操作的时候进行针对性的优化时，还是更快的。所以要根据具体的场景进行探讨。")]),t._v(" "),s("p",[t._v("在整个 DOM 操作的演化过程中，其实主要矛盾并不在于性能，而在于开发者写得爽不爽，在于研发体验/研发效率。虚拟 DOM 不是别的，正是前端开发们为了追求更好的研发体验和研发效率而创造出来的高阶产物。虚拟 DOM 并不一定会带来更好的性能，React 官方也从来没有把虚拟 DOM 作为性能层面的卖点对外输出过。"),s("strong",[t._v("虚拟 DOM 的优越之处在于，它能够在提供更爽、更高效的研发模式（也就是函数式的 UI 编程方式）的同时，仍然保持一个还不错的性能。")])]),t._v(" "),s("h3",{attrs:{id:"_5-react-与-vue-的-diff-算法有何不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-react-与-vue-的-diff-算法有何不同"}},[t._v("#")]),t._v(" 5. React 与 Vue 的 diff 算法有何不同？")]),t._v(" "),s("p",[t._v("diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。")]),t._v(" "),s("p",[t._v("React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历，采用了深度优先遍历算法。但传统的遍历方式，效率较低。为了优化效率，使用了分治的方式。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。")]),t._v(" "),s("ul",[s("li",[t._v("树比对：由于网页视图中较少有跨层级节点移动，两株虚拟 DOM 树只对同一层次的节点进行比较。")]),t._v(" "),s("li",[t._v("组件比对：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中。")]),t._v(" "),s("li",[t._v("元素比对：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 DOM 剪裁操作。")])]),t._v(" "),s("p",[t._v("以上是经典的 React diff 算法内容。自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。")]),t._v(" "),s("p",[t._v("Vue 的整体 diff 策略与 React 对齐，虽然缺乏时间切片能力，但这并不意味着 Vue 的性能更差，因为在 Vue 3 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 Vue 中其他的场景几乎都可以使用防抖和节流去提高响应性能。")])])}),[],!1,null,null,null);a.default=r.exports}}]);