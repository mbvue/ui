import Layout from './src/layout.vue';
import Content from './src/content.vue';
import Footer from './src/footer.vue';
import Header from './src/header.vue';
import Sider from './src/sider.vue';

(Layout as any).install = function (app: any) {
    app.component((Layout as any).name, Layout);
    app.component((Content as any).name, Content);
    app.component((Footer as any).name, Footer);
    app.component((Header as any).name, Header);
    app.component((Sider as any).name, Sider);
};

export default Layout;
