import { deepMerge, deepClone } from '../base/utils/util';
import { vueVer } from '../base/utils/env';
import Languages from './lang/index';

let i18n = {}, //当前语言库
    customize = {}; //自定义语言库

//切换语言
function setLanguage(key: string) {
    i18n = deepMerge(deepClone(Languages[key]), customize || {});
}

//获取语言
function getLanguage(key: string) {
    return key.split('.').reduce((o, i) => {
        if (o) return o[i];
    }, i18n);
}

export default {
    install: (app: any, locale = 'zh_cn', langs = {}) => {
        customize = langs;
        setLanguage(locale);

        if (vueVer === 2) {
            app.prototype.$locale = setLanguage;
            app.prototype.$t = getLanguage;
        } else {
            app.config.globalProperties.$locale = setLanguage;
            app.config.globalProperties.$t = getLanguage;
            app.provide('i18n', i18n);
        }
    }
};
