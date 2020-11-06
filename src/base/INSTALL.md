# 快速上手

## 1、 脚手架

推荐使用 Vue 官方提供的脚手架 [vue-cli](https://cli.vuejs.org/zh/) 创建项目

### 1.1、 安装脚手架

```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

### 1.2、 创建一个项目

```bash
$ vue create demo
$ cd demo
```

### 1.3、 安装组件

```bash
$ npm install @mbvue/ui --save
# OR
$ yarn add @mbvue/ui
```

### 1.4、 配置组件

Vue2：

```js
import Vue from 'vue';
import App from '@/App.vue';
import MBUI from 'mb-ui';
import 'mb-ui/index.less'; //或者 import 'mb-ui/index.css';

Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(MBUI);

new Vue({ ...App }).$mount();
```

Vue3：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const app = createApp(App);
app.use(MBVueUI);
app.mount('#app');
```

## 2、 浏览器引入

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://www.npmjs.com/package/@mbvue/ui/index.css">
    </head>
    <body>
        <div id="app">
            ...
        <div>
    </body>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://www.npmjs.com/package/@mbvue/ui/index.min.js"></script>
</html>
```

## 3、 Less 配置

组件库使用 [Less](http://lesscss.cn/) 样式编译，按需加载组件库需要配置 Less 编译环境。

### 3.1、 安装依赖

```bash
$ npm install less less-loader --dev
# OR
$ yarn add -D less less-loader
```

### 3.2、 启用 Less

在 vue.config.js 增加以下配置（没有 vue.config.js 请手动新建）：

```js
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    }
};
```

## 4、 按需加载

### 4.1、 直接加载组件

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import Icon from '@mbvue/ui/lib/icon';
import '@mbvue/ui/base.less'; //或者 import '@mbvue/ui/base.css';（基础标签，可不导入）
import 'mb-ui/components/icon/style'; // 或者 mb-ui/components/icon/style/css 加载 css 文件

const app = createApp(App);
app.component(Icon.name, Icon);
app.mount('#app');
```

### 4.2、 babel-plugin-import

#### 4.2.1、安装 babel-plugin-import 插件：

```bash
$ npm install babel-plugin-import --dev
# OR
$ yarn add babel-plugin-import --dev
```

#### 4.2.2、配置 babel-plugin-import：

修改 babel.config.js 文件：

```js
module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: '@mbvue/ui',
                libraryDirectory: 'es',
                style: true
            }
        ]
    ]
};
```

#### 4.2.3、配置入口：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Icon } from '@mbvue/ui';
import '@mbvue/ui/base.less'; //或者 import '@mbvue/ui/base.css';（基础标签，可不导入）

const app = createApp(App);
app.component(Icon.name, Icon);
app.mount('#app');
```

### 4.3、 uni-app 按需加载

在 pages.json 文件中增加以下配置：

```json
{
    "easycom": {
        "^mb-(.*)": "@mbvue/ui/lib/$1/$1.js"
    }
}
```
