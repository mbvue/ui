(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{90:function(s,i,a){"use strict";a.r(i);var n=a(8),h={class:"markdown-content markdown-has-toc"},e=Object(n.t)('<h1>校验工具</h1><h2 id="1-shi-fou-wei-undefined-lei-xing">1、 是否为 Undefined 类型 <a class="markdown-anchor" href="#1-shi-fou-wei-undefined-lei-xing">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isUndefined(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="2-shi-fou-wei-null-lei-xing">2、 是否为 Null 类型 <a class="markdown-anchor" href="#2-shi-fou-wei-null-lei-xing">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isNull(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="3-shi-fou-wei-zi-fu-chuan-lei-xing">3、 是否为字符串类型 <a class="markdown-anchor" href="#3-shi-fou-wei-zi-fu-chuan-lei-xing">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isString(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="4-shi-fou-wei-shu-zi-lei-xing">4、 是否为数字类型 <a class="markdown-anchor" href="#4-shi-fou-wei-shu-zi-lei-xing">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isNumber(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="5-shi-fou-wei-bu-er-lei-xing">5、 是否为布尔类型 <a class="markdown-anchor" href="#5-shi-fou-wei-bu-er-lei-xing">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isBoolean(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="6-shi-fou-wei-fang-fa">6、 是否为方法 <a class="markdown-anchor" href="#6-shi-fou-wei-fang-fa">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isFunction(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="7-shi-fou-wei-ri-qi">7、 是否为日期 <a class="markdown-anchor" href="#7-shi-fou-wei-ri-qi">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isDate(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="8-shi-fou-wei-shu-zu">8、 是否为数组 <a class="markdown-anchor" href="#8-shi-fou-wei-shu-zu">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isArray(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="9-shi-fou-wei-document">9、 是否为 Document <a class="markdown-anchor" href="#9-shi-fou-wei-document">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isDocument(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="10-shi-fou-wei-object">10、 是否为 Object <a class="markdown-anchor" href="#10-shi-fou-wei-object">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isObject(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="11-shi-fou-wei-json-zi-fu-chuan">11、 是否为 JSON 字符串 <a class="markdown-anchor" href="#11-shi-fou-wei-json-zi-fu-chuan">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isJson(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="12-shi-fou-wei-chun-shu-zi">12、 是否为纯数字 <a class="markdown-anchor" href="#12-shi-fou-wei-chun-shu-zi">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.justNumber(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="13-shi-fou-wei-chun-zheng-shu">13、 是否为纯整数 <a class="markdown-anchor" href="#13-shi-fou-wei-chun-zheng-shu">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.justDigits(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="14-shi-fou-wei-chun-zi-mu">14、 是否为纯字母 <a class="markdown-anchor" href="#14-shi-fou-wei-chun-zi-mu">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.justEn(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="15-shi-fou-wei-chun-zhong-wen">15、 是否为纯中文 <a class="markdown-anchor" href="#15-shi-fou-wei-chun-zhong-wen">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.justChinese(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="16-shi-fou-wei-chun-zi-mu-huo-shu-zi">16、 是否为纯字母或数字 <a class="markdown-anchor" href="#16-shi-fou-wei-chun-zi-mu-huo-shu-zi">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.justEnOrNum(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="17-shi-fou-wei-kong">17、 是否为空 <a class="markdown-anchor" href="#17-shi-fou-wei-kong">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isEmpty(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="18-shi-fou-wei-you-xiang-di-zhi">18、 是否为邮箱地址 <a class="markdown-anchor" href="#18-shi-fou-wei-you-xiang-di-zhi">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isEmail(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="19-shi-fou-wei-shou-ji-hao-ma">19、 是否为手机号码 <a class="markdown-anchor" href="#19-shi-fou-wei-shou-ji-hao-ma">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isMobile(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="20-shi-fou-wei-gu-ding-dian-hua">20、 是否为固定电话 <a class="markdown-anchor" href="#20-shi-fou-wei-gu-ding-dian-hua">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isFixLine(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="21-shi-fou-wei-url">21、 是否为 URL <a class="markdown-anchor" href="#21-shi-fou-wei-url">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isUrl(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><h2 id="22-shi-fou-wei-shen-fen-zheng-hao-ma">22、 是否为身份证号码 <a class="markdown-anchor" href="#22-shi-fou-wei-shen-fen-zheng-hao-ma">#</a></h2><pre class="markdown-hljs"><code><span class="hljs-built_in">this</span>.$m.test.isIdCard(<span class="hljs-string">&#39;&#39;</span>);\n</code></pre><p><div class="markdown-toc"><ul><li><a href="#1-shi-fou-wei-undefined-lei-xing">1、 是否为 Undefined 类型</a></li><li><a href="#2-shi-fou-wei-null-lei-xing">2、 是否为 Null 类型</a></li><li><a href="#3-shi-fou-wei-zi-fu-chuan-lei-xing">3、 是否为字符串类型</a></li><li><a href="#4-shi-fou-wei-shu-zi-lei-xing">4、 是否为数字类型</a></li><li><a href="#5-shi-fou-wei-bu-er-lei-xing">5、 是否为布尔类型</a></li><li><a href="#6-shi-fou-wei-fang-fa">6、 是否为方法</a></li><li><a href="#7-shi-fou-wei-ri-qi">7、 是否为日期</a></li><li><a href="#8-shi-fou-wei-shu-zu">8、 是否为数组</a></li><li><a href="#9-shi-fou-wei-document">9、 是否为 Document</a></li><li><a href="#10-shi-fou-wei-object">10、 是否为 Object</a></li><li><a href="#11-shi-fou-wei-json-zi-fu-chuan">11、 是否为 JSON 字符串</a></li><li><a href="#12-shi-fou-wei-chun-shu-zi">12、 是否为纯数字</a></li><li><a href="#13-shi-fou-wei-chun-zheng-shu">13、 是否为纯整数</a></li><li><a href="#14-shi-fou-wei-chun-zi-mu">14、 是否为纯字母</a></li><li><a href="#15-shi-fou-wei-chun-zhong-wen">15、 是否为纯中文</a></li><li><a href="#16-shi-fou-wei-chun-zi-mu-huo-shu-zi">16、 是否为纯字母或数字</a></li><li><a href="#17-shi-fou-wei-kong">17、 是否为空</a></li><li><a href="#18-shi-fou-wei-you-xiang-di-zhi">18、 是否为邮箱地址</a></li><li><a href="#19-shi-fou-wei-shou-ji-hao-ma">19、 是否为手机号码</a></li><li><a href="#20-shi-fou-wei-gu-ding-dian-hua">20、 是否为固定电话</a></li><li><a href="#21-shi-fou-wei-url">21、 是否为 URL</a></li><li><a href="#22-shi-fou-wei-shen-fen-zheng-hao-ma">22、 是否为身份证号码</a></li></ul></div></p>',46);const l={render:function(s,i){return Object(n.bb)(),Object(n.o)("div",h,[e])}};i.default=l}}]);