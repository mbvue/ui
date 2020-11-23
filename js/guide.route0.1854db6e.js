(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{60:function(s,a,t){"use strict";t.r(a);var n=t(2),p={class:"markdown-content markdown-has-toc"},r=Object(n.t)('<h1>路由跳转</h1><p>此为一个路由跳转方法，内部是对 uni-app 路由跳转及 vue-router 的 api 统一封装<br></p><p>在 uni-app 环境只能使用：navigateTo、to、redirectTo、redirect、switchTab、tab、reLaunch、launch、navigateBack、back<br> 在非 uni-app 环境且已配置 vue-router 只能使用：push、replace、go<br></p><div class="markdown-warning"><p>使用 vue-router 需要单独安装 vue-router 并配置</p></div><h2 id="1-can-shu-shuo-ming">1、 参数说明 <a class="markdown-anchor" href="#1-can-shu-shuo-ming">#</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td><code>navigateTo</code> 或 <code>to</code> 对应 uni-app 的 uni.navigateTo<br><code>redirectTo</code> 或 <code>redirect</code> 对应 uni-app 的 uni.redirectTo<br><code>switchTab</code> 或 <code>tab</code> 对应 uni-app 的 uni.switchTab<br><code>reLaunch</code> 或 <code>launch</code> 对应 uni-app 的 uni.reLaunch<br><code>navigateBack</code> 或 <code>back</code> 对应 uni-app 的 uni.navigateBack<br><code>push</code>对应 vue-router 的$router.push<br><code>replace</code>对应vue-router的$router.replace<br><code>go</code>对应 vue-router 的$router.go</td><td>string</td><td>navigateTo、to<br>redirectTo、redirect<br>switchTab、tab<br>reLaunch、launch<br>navigateBack、back<br>push、replace、go</td><td>uni-app 默认：navigateTo<br>vue-router 默认：push</td></tr><tr><td>url</td><td>跳转 URL</td><td>string</td><td>-</td><td>-</td></tr><tr><td>delta</td><td>返回的页面数</td><td>number</td><td>-</td><td>1</td></tr><tr><td>params</td><td>传递的对象形式的参数</td><td>object</td><td>-</td><td>-</td></tr><tr><td>animationType</td><td>只在 APP 生效</td><td>string</td><td>-</td><td>pop-in</td></tr><tr><td>animationDuration</td><td>动画持续时间，单位 ms</td><td>number</td><td>-</td><td>300</td></tr><tr><td>success</td><td>成功的回调函数，navigateBack、go 无效</td><td>function</td><td>-</td><td>-</td></tr><tr><td>fail</td><td>失败的回调函数，navigateBack、go 无效</td><td>function</td><td>-</td><td>-</td></tr></tbody></table><br><h4>animationType 类型：</h4><table><thead><tr><th>显示动画</th><th>关闭动画</th><th>显示动画描述（关闭动画与之相反）</th></tr></thead><tbody><tr><td>slide-in-right</td><td>slide-out-right</td><td>新窗体从右侧进入</td></tr><tr><td>slide-in-left</td><td>slide-out-left</td><td>新窗体从左侧进入</td></tr><tr><td>slide-in-top</td><td>slide-out-top</td><td>新窗体从顶部进入</td></tr><tr><td>slide-in-bottom</td><td>slide-out-bottom</td><td>新窗体从底部进入</td></tr><tr><td>pop-in</td><td>pop-out</td><td>新窗体从左侧进入，且老窗体被挤压而出</td></tr><tr><td>fade-in</td><td>fade-out</td><td>新窗体从透明到不透明逐渐显示</td></tr><tr><td>zoom-out</td><td>zoom-in</td><td>新窗体从小到大缩放显示</td></tr><tr><td>zoom-fade-out</td><td>zoom-fade-in</td><td>新窗体从小到大逐渐放大并且从透明到不透明逐渐显示</td></tr><tr><td>none</td><td>none</td><td>无动画</td></tr></tbody></table><h2 id="2-ru-he-shi-yong">2、 如何使用 <a class="markdown-anchor" href="#2-ru-he-shi-yong">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.route({\n    <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;pages/empty/index&#39;</span>,\n    <span class="hljs-attr">params</span>: {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;lisi&#39;</span>\n    }\n});\n\n<span class="hljs-built_in">this</span>.$m.route({\n    <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;pages/empty/index&#39;</span>,\n    <span class="hljs-attr">params</span>: {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;lisi&#39;</span>\n    },\n    <span class="hljs-attr">success</span>: <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;success&#39;</span>);\n    },\n    <span class="hljs-attr">fail</span>: <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;fail&#39;</span>);\n    }\n});\n</code></pre><p>简写模式（只支持 vue-router 的 push 和 uni-app 的 navigateTo）：</p><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.route(<span class="hljs-string">&#39;pages/empty/index&#39;</span>, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;lisi&#39;</span> });\n\n<span class="hljs-built_in">this</span>.$m.route(\n    <span class="hljs-string">&#39;pages/empty/index&#39;</span>,\n    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;lisi&#39;</span> },\n    <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;success&#39;</span>);\n    },\n    <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;fail&#39;</span>);\n    }\n);\n</code></pre><h2 id="3-vue-pei-zhi-vue-router">3、 Vue 配置 vue-router <a class="markdown-anchor" href="#3-vue-pei-zhi-vue-router">#</a></h2><p>vue2.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> Router <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n\n<span class="hljs-keyword">const</span> Foo = { <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;div&gt;foo&lt;/div&gt;&#39;</span> };\n<span class="hljs-keyword">const</span> Bar = { <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;div&gt;bar&lt;/div&gt;&#39;</span> };\n\n<span class="hljs-keyword">const</span> routes = [\n    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/foo&#39;</span>, <span class="hljs-attr">component</span>: Foo },\n    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/bar&#39;</span>, <span class="hljs-attr">component</span>: Bar }\n];\n<span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> Router({ <span class="hljs-attr">mode</span>: <span class="hljs-string">&#39;history&#39;</span>, routes });\n\nVue.config.productionTip = <span class="hljs-literal">false</span>;\nApp.mpType = <span class="hljs-string">&#39;app&#39;</span>;\n\nVue.use(MBVueUI, { router });\n\n<span class="hljs-keyword">new</span> Vue({ router, <span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App) }).$mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><p>vue3.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> { createRouter, createWebHistory } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n\n<span class="hljs-keyword">const</span> Foo = { <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;div&gt;foo&lt;/div&gt;&#39;</span> };\n<span class="hljs-keyword">const</span> Bar = { <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;div&gt;bar&lt;/div&gt;&#39;</span> };\n\n<span class="hljs-keyword">const</span> routes = [\n    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/foo&#39;</span>, <span class="hljs-attr">component</span>: Foo },\n    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/bar&#39;</span>, <span class="hljs-attr">component</span>: Bar }\n];\n<span class="hljs-keyword">const</span> routerHistory = createWebHistory();\n<span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> createRouter({ <span class="hljs-attr">history</span>: routerHistory, routes });\n\n<span class="hljs-keyword">const</span> app = createApp(App);\n\napp.use(router);\napp.use(MBVueUI, { router });\n\napp.mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><p><div class="markdown-toc"><ul><li><a href="#1-can-shu-shuo-ming">1、 参数说明</a></li><li><a href="#2-ru-he-shi-yong">2、 如何使用</a></li><li><a href="#3-vue-pei-zhi-vue-router">3、 Vue 配置 vue-router</a></li></ul></div></p>',19);const e={render:function(s,a,t,e,l,o){return Object(n.Z)(),Object(n.o)("div",p,[r])}};a.default=e}}]);