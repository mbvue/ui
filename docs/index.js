import { createApp } from 'vue';
import App from './App.vue';
import router from './depend/routes';
import Markdom from '@mbvue/markdown-loader/dom';
import '@mbvue/markdown-loader/style/index.less';
import axios from 'axios';
import MBVueUI from '@mbvue/ui/index.ts';
import '@mbvue/ui/index.less';
import './index.less';

const app = createApp(App);

app.use(router);
app.use(Markdom);
app.use(MBVueUI, { axios });

app.mount('#app');
