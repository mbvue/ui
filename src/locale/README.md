# 国际化配置

默认语言是”zh_cn“，按需加载需要单独配置语言

## 1、 初始化指定语言

Vue2：

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

Vue3：

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

Vue2：

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

Vue3：

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

vue2：

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

Vue3：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Locale } from '@mbvue/ui';

const app = createApp(App);

const lang = { zh_cn: { a: { b: 'c' } } };
app.use(Locale, { locale: 'zh_cn', lang: lang });

app.mount('#app');
```
