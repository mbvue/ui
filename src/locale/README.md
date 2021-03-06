# 国际化配置

:::warning
默认语言是”zh_cn“，按需加载需时要配置
:::

## 1、 指定语言

[Vue2](https://cn.vuejs.org/)：

```js
import Vue from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.use(MBVueUI, { locale: 'zh_cn' });

new Vue({ ...App }).$mount();
```

<br/>

[Vue3](https://v3.cn.vuejs.org/)：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const app = createApp(App);
app.use(MBVueUI, { locale: 'zh_cn' });
app.mount('#app');
```

## 2、 定制语言

[Vue2](https://cn.vuejs.org/)：

```js
import Vue from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

Vue.config.productionTip = false;
App.mpType = 'app';

const lang = { zh_cn: { a: { b: 'c' } } };
Vue.use(MBVueUI, { lang: lang });

new Vue({ ...App }).$mount();
```

<br/>

[Vue3](https://v3.cn.vuejs.org/)：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const app = createApp(App);

const lang = { zh_cn: { a: { b: 'c' } } };
app.use(MBVueUI, { lang: lang });

app.mount('#app');
```

## 3、 切换语言

```js
this.$locale('zh_tw');
```

## 4、 获取语言

```js
this.$t('a.b');
```

## 5、 按需加载配置

[Vue2](https://cn.vuejs.org/)：

```js
import Vue from 'vue';
import App from '@/App.vue';
import { Locale } from '@mbvue/ui';

Vue.config.productionTip = false;
App.mpType = 'app';

const lang = { zh_cn: { a: { b: 'c' } } };
Vue.use(Locale, { locale: 'zh_cn', lang: lang });

new Vue({ ...App }).$mount();
```

<br/>

[Vue3](https://v3.cn.vuejs.org/)：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Locale } from '@mbvue/ui';

const app = createApp(App);

const lang = { zh_cn: { a: { b: 'c' } } };
app.use(Locale, { locale: 'zh_cn', lang: lang });

app.mount('#app');
```
