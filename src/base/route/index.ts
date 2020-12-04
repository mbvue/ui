import { uniApp } from '../utils/env';
import uniRoute from './uniRoute';
import vueRoute from './vueRoute';

export default (router: any) => {
    return uniApp ? uniRoute : vueRoute(router);
};
