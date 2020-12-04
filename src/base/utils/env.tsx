declare const uni: any;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vueObj = require('vue');
const regAgent = /micromessenger/i;

export const vue = vueObj ? vueObj.default || vueObj : null; //Vue 对象
export const vueVer = vue && vue.version ? (vue.version.slice(0, 1) === '2' ? 2 : 3) : 0; //Vue 大版本号（没有 vue：0，2 版本：2，3 版本：3）

let _uni = null;
try {
    _uni = uni;
} catch (error) {
    _uni = false;
}

export const uniApp = _uni; // uniApp 对象

//判断是否是微信浏览器访问环境
export function wechat() {
    return window && window.navigator && regAgent.test(window.navigator.userAgent.toLowerCase()) ? true : false;
}

export default { vue, vueVer, uniApp, wechat };
