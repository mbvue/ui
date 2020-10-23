import INSTALL from '@mbvue/ui/base/INSTALL.md';
import INSTALL_CN from '@mbvue/ui/base/INSTALL.zh-CN.md';
import HTML from '@mbvue/ui/base/HTML.md';
import HTML_CN from '@mbvue/ui/base/HTML.zh-CN.md';
import STYLE from '@mbvue/ui/base/STYLE.md';
import STYLE_CN from '@mbvue/ui/base/STYLE.zh-CN.md';
import TOOL from '@mbvue/ui/base/TOOL.md';
import TOOL_CN from '@mbvue/ui/base/TOOL.zh-CN.md';
import LOCALE from '@mbvue/ui/base/LOCALE.md';
import LOCALE_CN from '@mbvue/ui/base/LOCALE.zh-CN.md';
import THEME from '@mbvue/ui/base/THEME.md';
import THEME_CN from '@mbvue/ui/base/THEME.zh-CN.md';
import ROUTE from '@mbvue/ui/base/ROUTE.md';
import ROUTE_CN from '@mbvue/ui/base/ROUTE.zh-CN.md';

import ICON from '@mbvue/ui/icon/README.md';
import ICON_CN from '@mbvue/ui/icon/README.zh-CN.md';
import IMAGE from '@mbvue/ui/image/README.md';
import IMAGE_CN from '@mbvue/ui/image/README.zh-CN.md';
import BUTTON from '@mbvue/ui/button/README.md';
import BUTTON_CN from '@mbvue/ui/button/README.zh-CN.md';
import BUTTON_GROUP from '@mbvue/ui/buttongroup/README.md';
import BUTTON_GROUP_CN from '@mbvue/ui/buttongroup/README.zh-CN.md';
import LAYOUT from '@mbvue/ui/layout/README.md';
import LAYOUT_CN from '@mbvue/ui/layout/README.zh-CN.md';

export default {
    'zh-CN': [
        {
            title: '开发指南',
            path: '',
            children: [
                { title: '快速上手', path: 'install', component: INSTALL_CN },
                { title: '基础标签', path: 'html', component: HTML_CN },
                { title: '内置样式', path: 'style', component: STYLE_CN },
                { title: '实用工具', path: 'tool', component: TOOL_CN },
                { title: '国际化配置', path: 'locale', component: LOCALE_CN },
                { title: '定制主题', path: 'theme', component: THEME_CN },
                { title: '路由跳转', path: 'route', component: ROUTE_CN }
            ]
        },
        {
            title: '基础组件',
            children: [
                { title: 'Icon图标', path: 'icon', component: ICON_CN },
                { title: 'Image图片', path: 'image', component: IMAGE_CN },
                { title: 'Button按钮', path: 'button', component: BUTTON_CN },
                { title: 'ButtonGroup按钮组', path: 'buttongroup', component: BUTTON_GROUP_CN },
                { title: 'Layout布局', path: 'layout', component: LAYOUT_CN }
            ]
        }
    ],
    'en-US': [
        {
            title: 'Guide',
            path: '',
            children: [
                { title: 'Install', path: 'install', component: INSTALL },
                { title: 'Html', path: 'html', component: HTML },
                { title: 'Style', path: 'style', component: STYLE },
                { title: 'Tool', path: 'tool', component: TOOL },
                { title: 'Locale', path: 'locale', component: LOCALE },
                { title: 'Theme', path: 'theme', component: THEME },
                { title: 'Route', path: 'route', component: ROUTE }
            ]
        },
        {
            title: 'Component',
            children: [
                { title: 'Icon', path: 'icon', component: ICON },
                { title: 'Image', path: 'image', component: IMAGE },
                { title: 'Button', path: 'button', component: BUTTON },
                { title: 'Button Group', path: 'buttongroup', component: BUTTON_GROUP },
                { title: 'Layout', path: 'layout', component: LAYOUT }
            ]
        }
    ]
};
