declare const uni: any;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vueObj = require('vue');
const regAgent = /micromessenger/i;

//获取Vue对象
export function vue() {
    return vueObj ? vueObj.default || vueObj : null;
}

//获取 Vue 大版本号（没有 vue：0，2 版本：2，3 版本：3）
export function versions() {
    if (vue() && vue().version) {
        return vue().version.slice(0, 1) === '2' ? 2 : 3;
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
    vue,
    versions,
    uniApp,
    wechat
};
