import { createRouter, createWebHistory } from 'vue-router';
import urls from './urls';

const routerHistory = createWebHistory();
const getRoutes = () => {
    const routes = [];

    urls.forEach(obj => {
        if (obj.path) routes.push({ name: obj.path, path: `/${obj.path === '/' ? '' : obj.path}`, component: obj.component, meta: { title: obj.title } });

        if (obj.children && obj.children.length) {
            obj.children.forEach(children => {
                if (children.path) routes.push({ name: children.path, path: `/${children.path}`, component: children.component, meta: { title: children.title } });
            });
        }
    });

    routes.push({ path: '/:pathMatch(.*)*', redirect: '/' });

    return routes;
};

const router = createRouter({ history: routerHistory, routes: getRoutes() });

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
