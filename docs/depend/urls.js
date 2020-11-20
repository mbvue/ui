import { defineAsyncComponent } from 'vue';
import locales from './locales';

const lang = locales.get();
const suffix = lang === 'zh-CN' ? '' : '.' + lang;
const langs = {
    'zh-CN': {
        guide: '开发指南',
        index: '首页',
        install: '快速上手',
        html: '基础标签',
        style: '内置样式',
        locale: '国际化配置',
        theme: '定制主题',
        tool: '实用工具',
        route: '路由跳转',
        ajax: '网络请求',
        components: '基础组件',
        image: 'Image 图片',
        icon: 'Icon 图标'
    },
    'en-US': {
        index: 'Home'
    }
};

export default [
    { title: langs[lang].index, path: '/', component: defineAsyncComponent(() => import(/*webpackChunkName: 'index'*/ `@mbvue/ui/README${suffix}.md`)) },
    {
        title: langs[lang].guide,
        children: [
            {
                title: langs[lang].install,
                path: 'install',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.install'*/ `@mbvue/ui/base/INSTALL${suffix}.md`))
            },
            { title: langs[lang].html, path: 'html', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.html'*/ `@mbvue/ui/base/HTML${suffix}.md`)) },
            { title: langs[lang].style, path: 'style', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.style'*/ `@mbvue/ui/base/STYLE${suffix}.md`)) },
            {
                title: langs[lang].locale,
                path: 'locale',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.locale'*/ `@mbvue/ui/locale/README${suffix}.md`))
            },
            { title: langs[lang].theme, path: 'theme', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.theme'*/ `@mbvue/ui/base/THEME${suffix}.md`)) },
            { title: langs[lang].tool, path: 'tool', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.tool'*/ `@mbvue/ui/base/TOOL${suffix}.md`)) },
            { title: langs[lang].route, path: 'route', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.route'*/ `@mbvue/ui/base/ROUTE${suffix}.md`)) },
            { title: langs[lang].ajax, path: 'ajax', component: defineAsyncComponent(() => import(/*webpackChunkName: 'guide.ajax'*/ `@mbvue/ui/base/AJAX${suffix}.md`)) }
        ]
    },
    {
        title: langs[lang].components,
        children: [
            {
                title: langs[lang].image,
                path: 'image',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.image'*/ `@mbvue/ui/image/README${suffix}.md`))
            },
            {
                title: langs[lang].icon,
                path: 'icon',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.icon'*/ `@mbvue/ui/icon/README${suffix}.md`))
            }
        ]
    }
];
