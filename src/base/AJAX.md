# 网络请求

:::warning
在非 uni-app 环境需要单独安装 axios，uni-app 环境无须安装
:::

```bash
$ npm install axios --save
# OR
$ yarn add axios
```

## 1、 基础配置

### 1.1、 基础配置参数

| 名称            | 说明                                                                                                                   | 类型     | 可选值                                          | 默认值                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------- | -------------------------------------- |
| baseURL         | 服务器接口前缀地址                                                                                                     | string   | -                                               | -                                      |
| method          | 请求方法                                                                                                               | string   | GET、POST、DELETE、HEAD、OPTIONS、PUT           | GET                                    |
| headers         | 设置请求的 header，header 中不能设置 Referer                                                                           | object   | -                                               | -                                      |
| timeout         | 超时时间，单位 ms                                                                                                      | number   | -                                               | 60000                                  |
| responseType    | 设置响应的数据类型。<br/>uni-app 的合法值：text、arraybuffer<br/>其他：arraybuffer、blob、document、json、text、stream | string   | arraybuffer、blob、document、json、text、stream | uni-app 默认：text<br/> 其他默认：json |
| withCredentials | 跨域请求时是否需要使用凭证                                                                                             | boolean  | true、false                                     | false                                  |
| request         | 请求拦截器， 参数为请求配置信息                                                                                        | function | -                                               | -                                      |
| response        | 响应拦截器，参数为请求响应的 response.data                                                                             | function | -                                               | -                                      |
| error           | 请求错误处理，参数为 response 完整数据                                                                                 | function | -                                               | -                                      |

<br/>

更多配置：<br/>
若 uni-app 环境请参考 [uni.request](https://uniapp.dcloud.io/api/request/request) 配置<br/>
axios 参考 [axios](http://www.axios-js.com/zh-cn/docs/) 配置

## 2、 Response 返回数据

| 参数       | 类型                      | 说明                                    |
| ---------- | ------------------------- | --------------------------------------- |
| data       | object/string/arraybuffer | 开发者服务器返回的数据                  |
| status     | number                    | 开发者服务器返回的 HTTP 状态码          |
| statusText | string                    | 开发者服务器返回的 HTTP 状态信息        |
| headers    | object                    | 开发者服务器返回的 HTTP Response Header |

## 3、 如何使用

### 3.1、 新建配置

如”ajax.js“：

```js
export default {
    baseURL: 'http://api.xxx.com',
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },
    timeout: 60000,
    responseType: 'text',
    request: config => {
        //动态修改配置参数
        config.headers['Authorization'] = 'xxxx';

        return config;
    },
    response: result => {
        //返回Promise对象，动态处理成功失败
        if (result.status === 0) {
            return Promise.resolve(result.data);
        } else {
            return Promise.reject(result.data);
        }
    },
    error: response => {
        console.log(response.status, response.statusText);

        //return Promise.resolve(response); //返回到成功方法
        //return Promise.reject(response); //返回到失败方法
        //return new Promise(() => {}); //终止返回
    }
};
```

### 3.2、 入口配置

vue2.x 版本：

```js
import Vue from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';
import axios from 'axios';
import ajax from './ajax';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.use(MBVueUI, { ajax: ajax, axios }); //非uni-app环境
//Vue.use(MBVueUI, { ajax: ajax }); //uni-app环境

new Vue({ render: h => h(App) }).$mount('#app');
```

vue3.x 版本：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';
import axios from 'axios';
import ajax from './ajax';

const app = createApp(App);

app.use(MBVueUI, { ajax: ajax, axios }); //非uni-app环境
//Vue.use(MBVueUI, { ajax: ajax }); //uni-app环境

app.mount('#app');
```

### 3.3、 页面使用

```js
const data = {};
const config = {};

this.$m.ajax.request(config);
this.$m.ajax.get('url', data, config);
this.$m.ajax.post('url', data, config);
this.$m.ajax.delete('url', config);
this.$m.ajax.head('url', config);
this.$m.ajax.options('url', config);
this.$m.ajax.put('url', data, config);
```

```js
this.$m.ajax
    .get('url', {})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
```

## 4、 API 集中营

### 4.1、 新建配置

如”apis.js“：

```js
export default ajax => {
    return {
        getUser: (name, sex) => ajax.get('/get/user', { name: name, sex: sex })
    };
};
```

### 4.2、 入口配置

vue2.x 版本：

```js
import Vue from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';
import axios from 'axios';
import ajax from './ajax';
import apis from './apis';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.use(MBVueUI, { axios, ajax, apis }); //非uni-app环境
//Vue.use(MBVueUI, { ajax, apis }); //uni-app环境

new Vue({ render: h => h(App) }).$mount('#app');
```

vue3.x 版本：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';
import axios from 'axios';
import ajax from './ajax';
import apis from './apis';

const app = createApp(App);

app.use(MBVueUI, { axios, ajax, apis }); //非uni-app环境
//Vue.use(MBVueUI, { ajax, apis }); //uni-app环境

app.mount('#app');
```

### 4.3、 页面使用

```js
this.$m.apis
    .getUser('name', 'sex')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
```
