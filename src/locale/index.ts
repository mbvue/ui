import { deepMerge, deepClone } from '../base/utils/util';
import { versions } from '../base/utils/env';
import Languages from './lang/index';

let i18n = {}, //当前语言库
    customize = {}; //自定义语言库

//切换语言
function set(key: string) {
    i18n = deepMerge(deepClone(Languages[key]), customize || {});
}

//获取语言
function get(key: string) {
    return key.split('.').reduce((o, i) => {
        if (o) return o[i];
    }, i18n);
}

export default {
    install: (app: any, locale = 'zh_cn', langs = {}) => {
        customize = langs;
        set(locale);

        if (versions() === 2) {
            app.prototype.$locale = set;
            app.prototype.$t = get;
        } else {
            app.config.globalProperties.$locale = set;
            app.config.globalProperties.$t = get;
            app.provide('i18n', i18n);
        }
    }
};
