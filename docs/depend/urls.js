import { defineAsyncComponent } from 'vue';
import locales from './locales';

const lang = locales.get();
const suffix = lang === 'zh-CN' ? '' : '.' + lang;
const langs = {
    'zh-CN': {
        index: '首页',
        install: '快速上手',
        html: '基础标签',
        style: '内置样式',
        tool: '实用工具'
    },
    'en-US': {
        index: 'Home'
    }
};

export default [
    { title: langs[lang].index, path: '/', component: defineAsyncComponent(() => import(/*webpackChunkName: 'index'*/ `@mbvue/ui/README${suffix}.md`)) },
    {
        title: '开发指南',
        children: [
            { title: langs[lang].install, path: 'install', component: defineAsyncComponent(() => import(/*webpackChunkName: 'install'*/ `@mbvue/ui/base/INSTALL${suffix}.md`)) },
            { title: langs[lang].html, path: 'html', component: defineAsyncComponent(() => import(/*webpackChunkName: 'html'*/ `@mbvue/ui/base/HTML${suffix}.md`)) },
            { title: langs[lang].style, path: 'style', component: defineAsyncComponent(() => import(/*webpackChunkName: 'style'*/ `@mbvue/ui/base/STYLE${suffix}.md`)) },
            { title: langs[lang].tool, path: 'tool', component: defineAsyncComponent(() => import(/*webpackChunkName: 'tool'*/ `@mbvue/ui/base/TOOL${suffix}.md`)) }
        ]
    }
];
