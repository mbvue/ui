import { transUrl, localUrl } from '../utils/util';
import { isFunction, isUrl } from '../utils/test';
import params from './params';

export default (router: any) => {
    return (...args: any[]) => {
        const config: any = params(args);
        const type = config.type.toLowerCase();

        if (router && !isUrl(config.url)) {
            if (type === 'replace') {
                return router
                    .replace({ path: config.url, query: config.params })
                    .then(() => {
                        if (config.success && isFunction(config.success)) config.success();
                    })
                    .catch(() => {
                        if (config.fail && isFunction(config.fail)) config.fail();
                    });
            } else if (type === 'go') {
                return router.go(config.delta);
            } else {
                return router
                    .push({ path: config.url, query: config.params })
                    .then(() => {
                        if (config.success && isFunction(config.success)) config.success();
                    })
                    .catch(() => {
                        if (config.fail && isFunction(config.fail)) config.fail();
                    });
            }
        } else {
            if (window && window.location) {
                window.location.href = transUrl(isUrl(config.url) ? config.url : localUrl(config.url), config.params);
            }
        }
    };
};
