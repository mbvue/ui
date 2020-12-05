import { uniApp } from '../utils/env';
import uniAjax from './uniAjax';
import vueAjax from './vueAjax';

export default (confing = {}) => {
    return uniApp ? uniAjax(confing) : vueAjax(confing);
};
