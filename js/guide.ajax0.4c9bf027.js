(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(s,a,n){"use strict";n.r(a);var p=n(2),l={class:"markdown-content markdown-has-toc"},t=Object(p.i)('<h1>网络请求</h1><div class="markdown-warning"><p>在非 uni-app 环境需要单独安装 axios，uni-app 环境无须安装</p></div><pre class="markdown-hljs"><code>$ npm install axios --save\n<span class="hljs-comment"># OR</span>\n$ yarn add axios\n</code></pre><h2 id="1-ji-chu-pei-zhi">1、 基础配置 <a class="markdown-anchor" href="#1-ji-chu-pei-zhi">#</a></h2><h3 id="1.1-ji-chu-pei-zhi-can-shu">1.1、 基础配置参数 <a class="markdown-anchor" href="#1.1-ji-chu-pei-zhi-can-shu">#</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>baseURL</td><td>服务器接口前缀地址</td><td>string</td><td>-</td><td>-</td></tr><tr><td>method</td><td>请求方法</td><td>string</td><td>GET、POST、DELETE、HEAD、OPTIONS、PUT</td><td>GET</td></tr><tr><td>headers</td><td>设置请求的 header，header 中不能设置 Referer</td><td>object</td><td>-</td><td>-</td></tr><tr><td>timeout</td><td>超时时间，单位 ms</td><td>number</td><td>-</td><td>60000</td></tr><tr><td>responseType</td><td>设置响应的数据类型。<br>uni-app 的合法值：text、arraybuffer<br>其他：arraybuffer、blob、document、json、text、stream</td><td>string</td><td>arraybuffer、blob、document、json、text、stream</td><td>uni-app 默认：text<br> 其他默认：json</td></tr><tr><td>withCredentials</td><td>跨域请求时是否需要使用凭证</td><td>boolean</td><td>true、false</td><td>false</td></tr><tr><td>request</td><td>请求拦截器， 参数为请求配置信息</td><td>function</td><td>-</td><td>-</td></tr><tr><td>response</td><td>响应拦截器，参数为请求响应的 response.data</td><td>function</td><td>-</td><td>-</td></tr><tr><td>error</td><td>请求错误处理，参数为 response 完整数据</td><td>function</td><td>-</td><td>-</td></tr></tbody></table><br><p>更多配置：<br> 若 uni-app 环境请参考 <a href="https://uniapp.dcloud.io/api/request/request">uni.request</a> 配置<br> axios 参考 <a href="http://www.axios-js.com/zh-cn/docs/">axios</a> 配置</p><h2 id="2-response-fan-hui-shu-ju">2、 Response 返回数据 <a class="markdown-anchor" href="#2-response-fan-hui-shu-ju">#</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>object/string/arraybuffer</td><td>开发者服务器返回的数据</td></tr><tr><td>status</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td></tr><tr><td>statusText</td><td>string</td><td>开发者服务器返回的 HTTP 状态信息</td></tr><tr><td>headers</td><td>object</td><td>开发者服务器返回的 HTTP Response Header</td></tr></tbody></table><h2 id="3-ru-he-shi-yong">3、 如何使用 <a class="markdown-anchor" href="#3-ru-he-shi-yong">#</a></h2><h3 id="3.1-xin-jian-pei-zhi">3.1、 新建配置 <a class="markdown-anchor" href="#3.1-xin-jian-pei-zhi">#</a></h3><p>如”ajax.js“：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">baseURL</span>: <span class="hljs-string">&#39;http://api.xxx.com&#39;</span>,\n    <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;GET&#39;</span>,\n    <span class="hljs-attr">headers</span>: {\n        <span class="hljs-string">&#39;content-type&#39;</span>: <span class="hljs-string">&#39;application/json&#39;</span>\n    },\n    <span class="hljs-attr">timeout</span>: <span class="hljs-number">60000</span>,\n    <span class="hljs-attr">responseType</span>: <span class="hljs-string">&#39;text&#39;</span>,\n    <span class="hljs-attr">request</span>: <span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span> {\n        <span class="hljs-comment">//动态修改配置参数</span>\n        config.headers[<span class="hljs-string">&#39;Authorization&#39;</span>] = <span class="hljs-string">&#39;xxxx&#39;</span>;\n\n        <span class="hljs-keyword">return</span> config;\n    },\n    <span class="hljs-attr">response</span>: <span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n        <span class="hljs-comment">//返回Promise对象，动态处理成功失败</span>\n        <span class="hljs-keyword">if</span> (result.status === <span class="hljs-number">0</span>) {\n            <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.resolve(result.data);\n        } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject(result.data);\n        }\n    },\n    <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(response.status, response.statusText);\n\n        <span class="hljs-comment">//return Promise.resolve(response); //返回到成功方法</span>\n        <span class="hljs-comment">//return Promise.reject(response); //返回到失败方法</span>\n        <span class="hljs-comment">//return new Promise(() =&gt; {}); //终止返回</span>\n    }\n};\n</code></pre><h3 id="3.2-ru-kou-pei-zhi">3.2、 入口配置 <a class="markdown-anchor" href="#3.2-ru-kou-pei-zhi">#</a></h3><p>vue2.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n<span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;axios&#39;</span>;\n<span class="hljs-keyword">import</span> ajax <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./ajax&#39;</span>;\n\nVue.config.productionTip = <span class="hljs-literal">false</span>;\nApp.mpType = <span class="hljs-string">&#39;app&#39;</span>;\n\nVue.use(MBVueUI, { <span class="hljs-attr">ajax</span>: ajax, axios }); <span class="hljs-comment">//非uni-app环境</span>\n<span class="hljs-comment">//Vue.use(MBVueUI, { ajax: ajax }); //uni-app环境</span>\n\n<span class="hljs-keyword">new</span> Vue({ <span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App) }).$mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><p>vue3.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n<span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;axios&#39;</span>;\n<span class="hljs-keyword">import</span> ajax <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./ajax&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp(App);\n\napp.use(MBVueUI, { <span class="hljs-attr">ajax</span>: ajax, axios }); <span class="hljs-comment">//非uni-app环境</span>\n<span class="hljs-comment">//Vue.use(MBVueUI, { ajax: ajax }); //uni-app环境</span>\n\napp.mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><h3 id="3.3-ye-mian-shi-yong">3.3、 页面使用 <a class="markdown-anchor" href="#3.3-ye-mian-shi-yong">#</a></h3><pre class="markdown-hljs"><code><span class="hljs-keyword">const</span> data = {};\n<span class="hljs-keyword">const</span> config = {};\n\n<span class="hljs-built_in">this</span>.$m.ajax.request(config);\n<span class="hljs-built_in">this</span>.$m.ajax.get(<span class="hljs-string">&#39;url&#39;</span>, data, config);\n<span class="hljs-built_in">this</span>.$m.ajax.post(<span class="hljs-string">&#39;url&#39;</span>, data, config);\n<span class="hljs-built_in">this</span>.$m.ajax.delete(<span class="hljs-string">&#39;url&#39;</span>, config);\n<span class="hljs-built_in">this</span>.$m.ajax.head(<span class="hljs-string">&#39;url&#39;</span>, config);\n<span class="hljs-built_in">this</span>.$m.ajax.options(<span class="hljs-string">&#39;url&#39;</span>, config);\n<span class="hljs-built_in">this</span>.$m.ajax.put(<span class="hljs-string">&#39;url&#39;</span>, data, config);\n</code></pre><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.ajax\n    .get(<span class="hljs-string">&#39;url&#39;</span>, {})\n    .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(data);\n    })\n    .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(err);\n    });\n</code></pre><h2 id="4-api-ji-zhong-ying">4、 API 集中营 <a class="markdown-anchor" href="#4-api-ji-zhong-ying">#</a></h2><h3 id="4.1-xin-jian-pei-zhi">4.1、 新建配置 <a class="markdown-anchor" href="#4.1-xin-jian-pei-zhi">#</a></h3><p>如”apis.js“：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> ajax =&gt; {\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">getUser</span>: <span class="hljs-function">(<span class="hljs-params">name, sex</span>) =&gt;</span> ajax.get(<span class="hljs-string">&#39;/get/user&#39;</span>, { <span class="hljs-attr">name</span>: name, <span class="hljs-attr">sex</span>: sex })\n    };\n};\n</code></pre><h3 id="4.2-ru-kou-pei-zhi">4.2、 入口配置 <a class="markdown-anchor" href="#4.2-ru-kou-pei-zhi">#</a></h3><p>vue2.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n<span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;axios&#39;</span>;\n<span class="hljs-keyword">import</span> ajax <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./ajax&#39;</span>;\n<span class="hljs-keyword">import</span> apis <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./apis&#39;</span>;\n\nVue.config.productionTip = <span class="hljs-literal">false</span>;\nApp.mpType = <span class="hljs-string">&#39;app&#39;</span>;\n\nVue.use(MBVueUI, { axios, ajax, apis }); <span class="hljs-comment">//非uni-app环境</span>\n<span class="hljs-comment">//Vue.use(MBVueUI, { ajax, apis }); //uni-app环境</span>\n\n<span class="hljs-keyword">new</span> Vue({ <span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App) }).$mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><p>vue3.x 版本：</p><pre class="markdown-hljs"><code><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/App.vue&#39;</span>;\n<span class="hljs-keyword">import</span> MBVueUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mbvue/ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@mbvue/ui/index.less&#39;</span>; <span class="hljs-comment">//或者 import &#39;@mbvue/ui/index.css&#39;;</span>\n<span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;axios&#39;</span>;\n<span class="hljs-keyword">import</span> ajax <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./ajax&#39;</span>;\n<span class="hljs-keyword">import</span> apis <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./apis&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp(App);\n\napp.use(MBVueUI, { axios, ajax, apis }); <span class="hljs-comment">//非uni-app环境</span>\n<span class="hljs-comment">//Vue.use(MBVueUI, { ajax, apis }); //uni-app环境</span>\n\napp.mount(<span class="hljs-string">&#39;#app&#39;</span>);\n</code></pre><h3 id="4.3-ye-mian-shi-yong">4.3、 页面使用 <a class="markdown-anchor" href="#4.3-ye-mian-shi-yong">#</a></h3><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.apis\n    .getUser(<span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-string">&#39;sex&#39;</span>)\n    .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(data);\n    })\n    .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(err);\n    });\n</code></pre><p><div class="markdown-toc"><ul><li><a href="#1-ji-chu-pei-zhi">1、 基础配置</a><ul><li><a href="#1.1-ji-chu-pei-zhi-can-shu">1.1、 基础配置参数</a></li></ul></li><li><a href="#2-response-fan-hui-shu-ju">2、 Response 返回数据</a></li><li><a href="#3-ru-he-shi-yong">3、 如何使用</a><ul><li><a href="#3.1-xin-jian-pei-zhi">3.1、 新建配置</a></li><li><a href="#3.2-ru-kou-pei-zhi">3.2、 入口配置</a></li><li><a href="#3.3-ye-mian-shi-yong">3.3、 页面使用</a></li></ul></li><li><a href="#4-api-ji-zhong-ying">4、 API 集中营</a><ul><li><a href="#4.1-xin-jian-pei-zhi">4.1、 新建配置</a></li><li><a href="#4.2-ru-kou-pei-zhi">4.2、 入口配置</a></li><li><a href="#4.3-ye-mian-shi-yong">4.3、 页面使用</a></li></ul></li></ul></div></p>',34);const e={render:function(s,a,n,e,r,i){return Object(p.x)(),Object(p.e)("div",l,[t])}};a.default=e}}]);