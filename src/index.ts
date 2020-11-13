import { default as Base } from './base/index';
import { default as Icon } from './icon/index';

const version = Base.env.versions();
const components = [Icon];

const install = (app: any, options = {}) => {
    console.log(options);

    //注册组件
    components.map(component => {
        app.use(component);
    });

    //挂载全局
    if (version === 2) {
        app.prototype.$m = Base;
    } else if (version === 3) {
        app.config.globalProperties.$m = Base;
    }

    return app;
};

export { install, Icon };
export default { install };
