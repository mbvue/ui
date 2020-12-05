# 路由跳转

路由跳转是对 uni-app 路由跳转及 vue-router 的 api 统一封装<br/>

在 uni-app 环境只能使用：navigateTo、to、redirectTo、redirect、switchTab、tab、reLaunch、launch、navigateBack、back<br/>
在非 uni-app 环境且已配置 vue-router 只能使用：push、replace、go<br/>

:::warning
使用 vue-router 需要单独安装 vue-router 并配置
:::

## 1、 参数说明

| 名称              | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 类型     | 可选值                                                                                                                       | 默认值                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| type              | <code>navigateTo</code> 或 <code>to</code> 对应 uni-app 的 uni.navigateTo<br/><code>redirectTo</code> 或 <code>redirect</code> 对应 uni-app 的 uni.redirectTo<br/><code>switchTab</code> 或 <code>tab</code> 对应 uni-app 的 uni.switchTab<br/><code>reLaunch</code> 或 <code>launch</code> 对应 uni-app 的 uni.reLaunch<br/><code>navigateBack</code> 或 <code>back</code> 对应 uni-app 的 uni.navigateBack<br/><code>push</code>对应 vue-router 的$router.push<br/><code>replace</code>对应vue-router的$router.replace<br/><code>go</code>对应 vue-router 的\$router.go | String   | navigateTo、to<br/>redirectTo、redirect<br/>switchTab、tab<br/>reLaunch、launch<br/>navigateBack、back<br/>push、replace、go | uni-app 默认：navigateTo<br/>vue-router 默认：push |
| url               | 跳转 URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | String   | -                                                                                                                            | -                                                  |
| delta             | 返回的页面数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Number   | -                                                                                                                            | 1                                                  |
| params            | 传递的对象形式的参数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Object   | -                                                                                                                            | -                                                  |
| animationType     | 只在 APP 生效                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | -                                                                                                                            | pop-in                                             |
| animationDuration | 动画持续时间，单位 ms                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Number   | -                                                                                                                            | 300                                                |
| success           | 成功的回调函数，navigateBack、go 无效                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Function | -                                                                                                                            | -                                                  |
| fail              | 失败的回调函数，navigateBack、go 无效                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Function | -                                                                                                                            | -                                                  |

<br/>

#### animationType 类型：

| 显示动画        | 关闭动画         | 显示动画描述（关闭动画与之相反）                 |
| --------------- | ---------------- | ------------------------------------------------ |
| slide-in-right  | slide-out-right  | 新窗体从右侧进入                                 |
| slide-in-left   | slide-out-left   | 新窗体从左侧进入                                 |
| slide-in-top    | slide-out-top    | 新窗体从顶部进入                                 |
| slide-in-bottom | slide-out-bottom | 新窗体从底部进入                                 |
| pop-in          | pop-out          | 新窗体从左侧进入，且老窗体被挤压而出             |
| fade-in         | fade-out         | 新窗体从透明到不透明逐渐显示                     |
| zoom-out        | zoom-in          | 新窗体从小到大缩放显示                           |
| zoom-fade-out   | zoom-fade-in     | 新窗体从小到大逐渐放大并且从透明到不透明逐渐显示 |
| none            | none             | 无动画                                           |

## 2、 如何使用

```js
this.$m.route({
    url: 'pages/empty/index',
    params: {
        name: 'lisi'
    }
});

this.$m.route({
    url: 'pages/empty/index',
    params: {
        name: 'lisi'
    },
    success: () => {
        console.log('success');
    },
    fail: () => {
        console.log('fail');
    }
});
```

<br/>

简写模式（只支持 vue-router 的 push 和 uni-app 的 navigateTo）：

```js
this.$m.route('pages/empty/index', { name: 'lisi' });

this.$m.route(
    'pages/empty/index',
    { name: 'lisi' },
    () => {
        console.log('success');
    },
    () => {
        console.log('fail');
    }
);
```

## 3、 Vue 配置 vue-router

[Vue2](https://cn.vuejs.org/) 版本：

```js
import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
const router = new Router({ mode: 'history', routes });

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.use(MBVueUI, { router });

new Vue({ router, render: h => h(App) }).$mount('#app');
```

<br/>

[Vue3](https://v3.cn.vuejs.org/) 版本：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
const routerHistory = createWebHistory();
const router = new createRouter({ history: routerHistory, routes });

const app = createApp(App);

app.use(router);
app.use(MBVueUI, { router });

app.mount('#app');
```
