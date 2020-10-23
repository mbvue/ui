import { createApp } from 'vue';
import App from './App.vue';
import router from './depend/routes';
import DemoBlock from '@mbvue/markdown-loader/demo-block.vue';
import '@mbvue/markdown-loader/style.css';
import '@mbvue/ui/index.less';
import './index.less';

const app = createApp(App);

app.use(router);
app.component('DemoBlock', DemoBlock);
app.mount('#app');
