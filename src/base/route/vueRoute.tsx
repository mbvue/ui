import { transUrl } from '../utils/util';
import { isFunction, isUrl } from '../utils/test';
import params from './params';

export default (router: any) => {
    return (...args: any[]) => {
        const config: any = params(args);

        if (router && !isUrl(config.url)) {
            if (config.type.toLowerCase() === 'replace') {
                //replace

                return router
                    .replace({ path: config.url, query: config.params })
                    .then(() => {
                        if (config.success && isFunction(config.success)) config.success();
                    })
                    .catch(() => {
                        if (config.fail && isFunction(config.fail)) config.fail();
                    });
            } else if (config.type == 'go') {
                //go

                return router.go(config.delta);
            } else {
                //push

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
                window.location.href = transUrl(isUrl(config.url) ? config.url : window.location.origin + (config.url.indexOf('/') === 0 ? '' : '/') + config.url, config.params);
            }
        }
    };
};
