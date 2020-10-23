## MBVue UI

Vue3 simple component library

## Usage

```bash
$ npm install @mbvue/ui --save

# OR

$ yarn add @mbvue/ui
```

main.js：

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import MBVueUI from '@mbvue/ui';
import '@mbvue/ui/index.less'; //或者 import '@mbvue/ui/index.css';

const app = createApp(App);
app.use(MBVueUI);
app.mount('#app');
```

## Browser

```html
<link rel="stylesheet" href="https://www.npmjs.com/package/@mbvue/ui/index.css" />
<script src="https://www.npmjs.com/package/@mbvue/ui/index.min.js"></script>
```
