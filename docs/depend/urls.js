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
        icon: 'Icon 图标',
        button: 'Button 按钮',
        buttongroup: 'ButtonGroup 按钮组',
        layout: 'Layout 布局',
        grid: 'Grid 栅格',
        input: 'Input 输入框',
        inputgroup: 'InputGroup 输入框组',
        inputnumber: 'InputNumber 数字输入框',
        inputsearch: 'InputSearch 搜索框',
        radio: 'Radio 单选',
        radiogroup: 'RadioGroup 单选组',
        checkbox: 'Checkbox 复选',
        checkboxgroup: 'CheckboxGroup 复选组',
        switch: 'Switch 开关',
        form: 'Form 表单'
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
            },
            {
                title: langs[lang].button,
                path: 'button',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.button'*/ `@mbvue/ui/button/README${suffix}.md`))
            },
            {
                title: langs[lang].buttongroup,
                path: 'buttongroup',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.button-group'*/ `@mbvue/ui/button-group/README${suffix}.md`))
            },
            {
                title: langs[lang].layout,
                path: 'layout',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.layout'*/ `@mbvue/ui/layout/README${suffix}.md`))
            },
            {
                title: langs[lang].grid,
                path: 'grid',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.grid'*/ `@mbvue/ui/row/README${suffix}.md`))
            },
            {
                title: langs[lang].input,
                path: 'input',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.input'*/ `@mbvue/ui/input/README${suffix}.md`))
            },
            {
                title: langs[lang].inputgroup,
                path: 'inputgroup',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.inputgroup'*/ `@mbvue/ui/input-group/README${suffix}.md`))
            },
            {
                title: langs[lang].inputnumber,
                path: 'inputnumber',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.inputnumber'*/ `@mbvue/ui/input-number/README${suffix}.md`))
            },
            {
                title: langs[lang].inputsearch,
                path: 'inputsearch',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.inputsearch'*/ `@mbvue/ui/input-search/README${suffix}.md`))
            },
            {
                title: langs[lang].radio,
                path: 'radio',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.radio'*/ `@mbvue/ui/radio/README${suffix}.md`))
            },
            {
                title: langs[lang].radiogroup,
                path: 'radiogroup',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.radiogroup'*/ `@mbvue/ui/radio-group/README${suffix}.md`))
            },
            {
                title: langs[lang].checkbox,
                path: 'checkbox',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.checkbox'*/ `@mbvue/ui/checkbox/README${suffix}.md`))
            },
            {
                title: langs[lang].checkboxgroup,
                path: 'checkboxgroup',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.checkboxgroup'*/ `@mbvue/ui/checkbox-group/README${suffix}.md`))
            },
            {
                title: langs[lang].switch,
                path: 'switch',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.switch'*/ `@mbvue/ui/switch/README${suffix}.md`))
            },
            {
                title: langs[lang].form,
                path: 'form',
                component: defineAsyncComponent(() => import(/*webpackChunkName: 'components.form'*/ `@mbvue/ui/form/README${suffix}.md`))
            }
        ]
    }
];
