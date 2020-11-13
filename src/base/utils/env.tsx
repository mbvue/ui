// eslint-disable-next-line @typescript-eslint/no-var-requires
let vue = require('vue');
vue = vue.default || vue;

declare const uni: any;
const regAgent = /micromessenger/i;

//判断vue版本
export function versions() {
    if (vue && vue.version) {
        return vue.version.slice(0, 1) === '2' ? 2 : 3;
    }

    return 0;
}

//判断是否是uni环境
export function uniApp() {
    try {
        return uni;
    } catch (error) {
        return false;
    }
}

//判断是否是微信浏览器访问环境
export function wechat() {
    return window && window.navigator && regAgent.test(window.navigator.userAgent.toLowerCase()) ? true : false;
}

export default {
    versions,
    uniApp,
    wechat
};
