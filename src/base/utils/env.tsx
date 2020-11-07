//import * as vue from 'vue';

const reg = /micromessenger/i;

export function wechat() {
    return window && window.navigator && reg.test(window.navigator.userAgent.toLowerCase()) ? true : false;
}

export default {
    wechat
};
