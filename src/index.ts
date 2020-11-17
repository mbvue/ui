import { default as Base } from './base/index';
import { default as Ajax } from './base/ajax/index';
import { default as Route } from './base/route/index';
import { default as Locale } from './locale/index';
import { default as Icon } from './icon/index';

const version = Base.env.versions();
const components = [Icon];

const install = (app: any, options = <any>{ locale: 'zh_cn', langs: {} }) => {
    //定制语言
    app.use(Locale, options.locale, options.langs);

    //注册组件
    components.map(component => {
        app.use(component);
    });

    //挂载全局
    if (version === 2) {
        app.prototype.$m = Base;
        app.prototype.$m.route = Route(options.router);
        app.prototype.$m.ajax = Ajax(options.ajax || {}, options.axios);

        if (options.apis && Base.test.isFunction(options.apis)) app.prototype.$m.apis = options.apis(app.prototype.$m.ajax, app);
    } else if (version === 3) {
        app.config.globalProperties.$m = Base;
        app.config.globalProperties.$m.route = Route(options.router);
        app.config.globalProperties.$m.ajax = Ajax(options.ajax || {}, options.axios);

        if (options.apis && Base.test.isFunction(options.apis)) app.config.globalProperties.$m.apis = options.apis(app.config.globalProperties.$m.ajax, app);
    }

    return app;
};

export { install, Locale, Icon };
export default { install };