import { isString, isObject, isFunction } from '../utils/test';

//构建参数
export default (args: any[]) => {
    let config = { type: '', url: '', delta: 1, params: {}, animationType: 'pop-in', animationDuration: 300, success: null, fail: null };

    //支持简写方式
    if (args.length > 1 || (args.length === 1 && isString(args[0]))) {
        args.forEach(obj => {
            if (isString(obj)) {
                config.url = obj;
            } else if (isObject(obj)) {
                config.params = obj;
            } else if (isFunction(obj)) {
                if (!config.success) {
                    config.success = obj;
                } else if (!config.fail) {
                    config.fail = obj;
                }
            }
        });
    } else {
        config = Object.assign(config, args[0] || {});
    }

    return config;
};
