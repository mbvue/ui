import { deepMerge } from '../utils/util';
import { isFunction, isUrl } from '../utils/test';

declare const uni: any;
const baseConfig = { baseURL: '', method: 'GET', headers: {}, timeout: 60000, responseType: 'text', withCredentials: false };

const ajax = {
    //基础请求
    request: (conf = {}) => {
        let config: any = deepMerge(Object.assign({}, baseConfig), conf);

        // 请求拦截
        if (config.request && isFunction(config.request)) config = config.request(config);

        return new Promise((resolve, reject) => {
            //执行请求
            config.complete = (response: any) => {
                if (response.statusCode === 200) {
                    //响应拦截器
                    if (config.response && isFunction(config.response)) {
                        config
                            .response(response.data)
                            .then((data: any) => {
                                resolve(data);
                            })
                            .catch((data: any) => {
                                reject(data);
                            });
                    } else {
                        resolve(response.data);
                    }
                } else {
                    //请求失败处理
                    if (config.error && isFunction(config.error)) {
                        config
                            .error({
                                data: response.data,
                                status: response.statusCode,
                                statusText: response.errMsg,
                                headers: response.header
                            })
                            .then((data: any) => {
                                resolve(data);
                            })
                            .catch((err: any) => {
                                reject(err);
                            });
                    } else {
                        reject(response);
                    }
                }
            };

            uni.request({
                url: isUrl(config.url) ? config.url : config.baseUrl + (config.url.indexOf('/') === 0 ? '' : '/') + config.url,
                data: config.data,
                header: config.headers,
                method: config.method,
                timeout: config.timeout,
                dataType: 'json',
                responseType: config.responseType,
                sslVerify: config.sslVerify,
                withCredentials: config.withCredentials,
                firstIpv4: config.firstIpv4
            });
        });
    },

    //GET请求
    get: (url = '', data = {}, conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, data, method: 'GET' }));
    },

    //POST请求
    post: (url = '', data = {}, conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, data, method: 'POST' }));
    },

    //DELETE请求
    delete: (url = '', conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, method: 'DELETE' }));
    },

    //HEAD请求
    head: (url = '', conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, method: 'HEAD' }));
    },

    //OPTIONS请求
    options: (url = '', conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, method: 'OPTIONS' }));
    },

    //PUT请求
    put: (url = '', data = {}, conf = {}) => {
        return ajax.request(deepMerge(Object.assign({}, conf), { url, data, method: 'PUT' }));
    }
};

export default (config = {}) => {
    deepMerge(baseConfig, config);

    return ajax;
};
