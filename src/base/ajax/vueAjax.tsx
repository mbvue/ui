import { deepMerge } from '../utils/util';
import { isFunction } from '../utils/test';

// eslint-disable-next-line @typescript-eslint/no-var-requires
let axios = require('axios');
axios = axios ? axios.default || axios : null;

let instance: any = null;

const ajax = {
    //基础请求
    request: (conf = {}) => {
        return instance.request(conf);
    },

    //GET请求
    get: (url = '', data = {}, conf = {}) => {
        return instance.get(url, deepMerge(Object.assign({}, conf), { params: data }));
    },

    //POST请求
    post: (url = '', data = {}, conf = {}) => {
        return instance.post(url, data, conf);
    },

    //DELETE请求
    delete: (url = '', conf = {}) => {
        return instance.delete(url, conf);
    },

    //HEAD请求
    head: (url = '', conf = {}) => {
        return instance.head(url, conf);
    },

    //OPTIONS请求
    options: (url = '', conf = {}) => {
        return instance.options(url, conf);
    },

    //PUT请求
    put: (url = '', data = {}, conf = {}) => {
        return instance.put(url, data, conf);
    }
};

export default (config: any = {}) => {
    if (!axios) return {};

    //创建全局实例化对象
    instance = axios.create(deepMerge({ baseURL: '', method: 'GET', headers: {}, timeout: 60000, responseType: 'json', withCredentials: false }, config));

    // 请求拦截
    if (config.request && isFunction(config.request)) {
        instance.interceptors.request.use(config.request, (error: any) => {
            if (config.error && isFunction(config.error)) {
                return config.error(error.response);
            } else {
                return Promise.reject(error.response);
            }
        });
    }

    //响应拦截器
    if (config.response && isFunction(config.response)) {
        instance.interceptors.response.use(config.response, (error: any) => {
            if (config.error && isFunction(config.error)) {
                return config.error(error.response);
            } else {
                return Promise.reject(error.response);
            }
        });
    }

    return ajax;
};
