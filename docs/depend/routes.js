import { createRouter, createWebHistory } from 'vue-router';
import documents from './documents';
import locales from './locales';
import HOME from '@mbvue/ui/README.md';
import HOME_CN from '@mbvue/ui/README.zh-CN.md';

const getRoutes = () => {
    const routes = [{ path: '/', component: locales.get() === 'zh-CN' ? HOME_CN : HOME, meta: { title: 'MBVue UI' } }];

    documents[locales.get()].forEach(obj => {
        if (obj.children && obj.children.length) {
            obj.children.forEach(children => {
                routes.push({ name: children.path, path: `/${children.path || ''}`, component: children.component, meta: { title: children.title } });
            });
        }
    });

    routes.push({ path: '/:pathMatch(.*)*', redirect: '/install' });

    return routes;
};

const routerHistory = createWebHistory();
const router = createRouter({ history: routerHistory, routes: getRoutes() });

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
