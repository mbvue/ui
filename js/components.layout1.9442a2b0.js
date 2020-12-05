(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{101:function(t,e,s){"use strict";s.r(e);var c=s(8),a={class:"markdown-content markdown-has-toc"},b=Object(c.t)('<h1>Layout 布局</h1><h2 id="1-an-li">1、 案例 <a class="markdown-anchor" href="#1-an-li">#</a></h2><h4>用于布局的容器组件，方便快速搭建页面的基本结构:</h4><br> Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。<br> Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br> Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。<br> Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br> Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。 <h3 id="1.1-ji-ben-bu-ju">1.1、基本布局 <a class="markdown-anchor" href="#1.1-ji-ben-bu-ju">#</a></h3><h4>1.1.1、上-中-下 布局</h4>',15),j=Object(c.v)("pre",{class:"markdown-hljs"},[Object(c.v)("code",null,[Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Header"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"height: 50px; background: #108ee9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Content"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Footer"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(">")]),Object(c.u)("\n"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n")])],-1),l=Object(c.u)("Header"),n=Object(c.u)("Content"),O=Object(c.u)("Footer"),u=Object(c.v)("h4",null,"1.1.2、上-中（左-右）-下 布局",-1),r=Object(c.v)("pre",{class:"markdown-hljs"},[Object(c.v)("code",null,[Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Header"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"height: 50px; background: #3ba0e9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Sider"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #108ee9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Content"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Footer"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(">")]),Object(c.u)("\n"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n")])],-1),h=Object(c.u)("Header"),o=Object(c.u)("Sider"),d=Object(c.u)("Content"),p=Object(c.u)("Footer"),i=Object(c.v)("h4",null,"1.1.3、左-右（上-中-下） 布局",-1),v=Object(c.v)("pre",{class:"markdown-hljs"},[Object(c.v)("code",null,[Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #3ba0e9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Sider"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Header"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"height: 50px; background: #108ee9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Content"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Footer"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n")])],-1),f=Object(c.u)("Sider"),g=Object(c.u)("Header"),m=Object(c.u)("Content"),y=Object(c.u)("Footer"),k=Object(c.v)("h3",{id:"1.2-ce-bian-lan-shou-suo"},[Object(c.u)("1.2、 侧边栏收缩 "),Object(c.v)("a",{class:"markdown-anchor",href:"#1.2-ce-bian-lan-shou-suo"},"#")],-1),x=Object(c.v)("pre",{class:"markdown-hljs"},[Object(c.v)("code",null,[Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Header"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-header"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"trigger"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #3ba0e9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("\n            "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"ul"),Object(c.u)(">")]),Object(c.u)("\n                "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"li"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"class"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"mb-menu-item-span"'),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"height: 40px; line-height: 40px; overflow: hidden; padding: 0 10px; display: flex; align-items: center;"'),Object(c.u)(">")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-icon"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"type"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"heart"'),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},":size"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"24"'),Object(c.u)("/>")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"span"),Object(c.u)(">")]),Object(c.u)("测试菜单一"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"span"),Object(c.u)(">")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"li"),Object(c.u)(">")]),Object(c.u)("\n                "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"li"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"class"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"mb-menu-item-span"'),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"height: 40px; line-height: 40px; overflow: hidden; padding: 0 10px; display: flex; align-items: center;"'),Object(c.u)(">")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-icon"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"type"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"hdd"'),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},":size"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"24"'),Object(c.u)("/>")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"span"),Object(c.u)(">")]),Object(c.u)("测试菜单二"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"span"),Object(c.u)(">")]),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"li"),Object(c.u)(">")]),Object(c.u)("\n            "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"ul"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-sider"),Object(c.u)(">")]),Object(c.u)("\n        "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #108ee9; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Content"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-content"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n    "),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("<"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(),Object(c.v)("span",{class:"hljs-attr"},"style"),Object(c.u)("="),Object(c.v)("span",{class:"hljs-string"},'"background: #7dbcea; color: #fff;"'),Object(c.u)(">")]),Object(c.u)("Footer"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-footer"),Object(c.u)(">")]),Object(c.u)("\n"),Object(c.v)("span",{class:"hljs-tag"},[Object(c.u)("</"),Object(c.v)("span",{class:"hljs-name"},"mb-layout"),Object(c.u)(">")]),Object(c.u)("\n")])],-1),P=Object(c.u)("Header"),w={class:"mb-menu-item-span",style:{height:"40px","line-height":"40px",overflow:"hidden",padding:"0 10px",display:"flex","align-items":"center"}},_=Object(c.v)("span",null,"测试菜单一",-1),q={class:"mb-menu-item-span",style:{height:"40px","line-height":"40px",overflow:"hidden",padding:"0 10px",display:"flex","align-items":"center"}},S=Object(c.v)("span",null,"测试菜单二",-1),H=Object(c.u)("Content"),C=Object(c.u)("Footer"),F=Object(c.t)('<h2 id="2-api-pei-zhi">2、 API 配置 <a class="markdown-anchor" href="#2-api-pei-zhi">#</a></h2><h3 id="2.1-layout">2.1、 Layout <a class="markdown-anchor" href="#2.1-layout">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>String, Number</td><td>-</td><td>-</td></tr></tbody></table><h3 id="2.2-header">2.2、 Header <a class="markdown-anchor" href="#2.2-header">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>String, Number</td><td>-</td><td>-</td></tr></tbody></table><h3 id="2.3-sider">2.3、 Sider <a class="markdown-anchor" href="#2.3-sider">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>width</td><td>展开宽度</td><td>String, Number</td><td>200</td><td>-</td></tr><tr><td>collapsedWidth</td><td>收起宽度</td><td>String, Number</td><td>60</td><td>-</td></tr><tr><td>collapsed</td><td>当前收起状态</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>trigger</td><td>开启收缩栏状态</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>triggerIcon</td><td>收缩栏状态展开图标</td><td>String</td><td>angle-double-left</td><td>-</td></tr><tr><td>triggerCollapsedIcon</td><td>收缩栏状态收缩图标</td><td>String</td><td>angle-double-right</td><td>-</td></tr><tr><td>triggerIconSize</td><td>收缩栏状态图标尺寸</td><td>String, Number</td><td>16</td><td>-</td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点,不支持 uni-app</td><td>String</td><td>-</td><td>xs sm md lg xl xxl</td></tr></tbody></table><br><br> 断点宽度说明: <pre class="markdown-hljs"><code>{\n    <span class="hljs-attr">&quot;xs&quot;</span>: <span class="hljs-string">&quot;480px&quot;</span>,\n    <span class="hljs-attr">&quot;sm&quot;</span>: <span class="hljs-string">&quot;576px&quot;</span>,\n    <span class="hljs-attr">&quot;md&quot;</span>: <span class="hljs-string">&quot;768px&quot;</span>,\n    <span class="hljs-attr">&quot;lg&quot;</span>: <span class="hljs-string">&quot;992px&quot;</span>,\n    <span class="hljs-attr">&quot;xl&quot;</span>: <span class="hljs-string">&quot;1200px&quot;</span>,\n    <span class="hljs-attr">&quot;xxl&quot;</span>: <span class="hljs-string">&quot;1600px&quot;</span>\n}\n</code></pre><h3 id="2.4-shi-jian">2.4、 事件 <a class="markdown-anchor" href="#2.4-shi-jian">#</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开-收起时的回调函数</td><td>collapsed</td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时的回调</td><td>broken</td></tr></tbody></table><p><div class="markdown-toc"><ul><li><a href="#1-an-li">1、 案例</a><ul><li><a href="#1.1-ji-ben-bu-ju">1.1、基本布局</a></li><li><a href="#1.2-ce-bian-lan-shou-suo">1.2、 侧边栏收缩</a></li></ul></li><li><a href="#2-api-pei-zhi">2、 API 配置</a><ul><li><a href="#2.1-layout">2.1、 Layout</a></li><li><a href="#2.2-header">2.2、 Header</a></li><li><a href="#2.3-sider">2.3、 Sider</a></li><li><a href="#2.4-shi-jian">2.4、 事件</a></li></ul></li></ul></div></p>',14);const L={render:function(t,e){var s=Object(c.nb)("mb-header"),L=Object(c.nb)("mb-content"),z=Object(c.nb)("mb-footer"),I=Object(c.nb)("mb-layout"),N=Object(c.nb)("demo-block"),A=Object(c.nb)("mb-sider"),B=Object(c.nb)("mb-icon");return Object(c.bb)(),Object(c.o)("div",a,[b,Object(c.v)(N,null,{highlight:Object(c.Pb)((function(){return[j]})),source:Object(c.Pb)((function(){return[Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(s,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[l]})),_:1}),Object(c.v)(L,{style:{height:"50px",background:"#108ee9",color:"#fff"}},{default:Object(c.Pb)((function(){return[n]})),_:1}),Object(c.v)(z,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[O]})),_:1})]})),_:1})]})),_:1}),u,Object(c.v)(N,null,{highlight:Object(c.Pb)((function(){return[r]})),source:Object(c.Pb)((function(){return[Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(s,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[h]})),_:1}),Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(A,{style:{height:"50px",background:"#3ba0e9",color:"#fff"}},{default:Object(c.Pb)((function(){return[o]})),_:1}),Object(c.v)(L,{style:{background:"#108ee9",color:"#fff"}},{default:Object(c.Pb)((function(){return[d]})),_:1})]})),_:1}),Object(c.v)(z,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[p]})),_:1})]})),_:1})]})),_:1}),i,Object(c.v)(N,null,{highlight:Object(c.Pb)((function(){return[v]})),source:Object(c.Pb)((function(){return[Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(A,{style:{background:"#3ba0e9",color:"#fff"}},{default:Object(c.Pb)((function(){return[f]})),_:1}),Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(s,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[g]})),_:1}),Object(c.v)(L,{style:{height:"50px",background:"#108ee9",color:"#fff"}},{default:Object(c.Pb)((function(){return[m]})),_:1}),Object(c.v)(z,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[y]})),_:1})]})),_:1})]})),_:1})]})),_:1}),k,Object(c.v)(N,null,{highlight:Object(c.Pb)((function(){return[x]})),source:Object(c.Pb)((function(){return[Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(s,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[P]})),_:1}),Object(c.v)(I,null,{default:Object(c.Pb)((function(){return[Object(c.v)(A,{trigger:"",style:{background:"#3ba0e9",color:"#fff"}},{default:Object(c.Pb)((function(){return[Object(c.v)("ul",null,[Object(c.v)("li",w,[Object(c.v)(B,{type:"heart",size:24}),_]),Object(c.v)("li",q,[Object(c.v)(B,{type:"hdd",size:24}),S])])]})),_:1}),Object(c.v)(L,{style:{background:"#108ee9",color:"#fff"}},{default:Object(c.Pb)((function(){return[H]})),_:1})]})),_:1}),Object(c.v)(z,{style:{background:"#7dbcea",color:"#fff"}},{default:Object(c.Pb)((function(){return[C]})),_:1})]})),_:1})]})),_:1}),F])}};e.default=L}}]);