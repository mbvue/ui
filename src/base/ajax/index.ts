import { uniApp } from '../utils/env';
import uniAjax from './uniAjax';
import vueAjax from './vueAjax';

export default (confing = {}, axios: any) => {
    return uniApp() ? uniAjax(confing) : vueAjax(confing, axios);
};
