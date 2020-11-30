import { default as Base } from './base/index';
import { default as Ajax } from './base/ajax/index';
import { default as Route } from './base/route/index';
import { default as Locale } from './locale/index';
import { default as Image } from './image/index';
import { default as Icon } from './icon/index';
import { default as Button } from './button/index';
import { default as ButtonGroup } from './button-group/index';
import { default as Layout } from './layout/index';
import { default as Content } from './content/index';
import { default as Footer } from './footer/index';
import { default as Header } from './header/index';
import { default as Sider } from './sider/index';
import { default as Row } from './row/index';
import { default as Col } from './col/index';
import { default as Input } from './input/index';
import { default as InputGroup } from './input-group/index';
import { default as InputNumber } from './input-number/index';
import { default as InputSearch } from './input-search/index';
import { default as Radio } from './radio/index';
import { default as RadioGroup } from './radio-group/index';

const version = Base.env.versions();
const components = [Image, Icon, Button, ButtonGroup, Layout, Content, Footer, Header, Sider, Row, Col, Input, InputGroup, InputNumber, InputSearch, Radio, RadioGroup];

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

export { install, Locale, Image, Icon, Button, ButtonGroup, Layout, Content, Footer, Header, Sider, Row, Col, Input, InputGroup, InputNumber, InputSearch, Radio, RadioGroup };
export default { install };
