import { transUrl } from '../utils/util';
import { isFunction, isUrl } from '../utils/test';
import params from './params';

declare const uni: any;

export default (...args: any[]) => {
    const config: any = params(args);

    if (config.type.toLowerCase() === 'redirectto' || config.type.toLowerCase() === 'redirect') {
        //redirectTo

        return uni.redirectTo({
            url: transUrl(config.url, config.params),
            success: () => {
                if (config.success && isFunction(config.success)) config.success();
            },
            fail: () => {
                if (config.fail && isFunction(config.fail)) config.fail();
            }
        });
    } else if (config.type.toLowerCase() === 'switchtab' || config.type.toLowerCase() === 'tab') {
        //switchTab

        return uni.switchTab({
            url: transUrl(config.url, config.params),
            success: () => {
                if (config.success && isFunction(config.success)) config.success();
            },
            fail: () => {
                if (config.fail && isFunction(config.fail)) config.fail();
            }
        });
    } else if (config.type.toLowerCase() === 'relaunch' || config.type.toLowerCase() === 'launch') {
        //reLaunch

        return uni.reLaunch({
            url: transUrl(config.url, config.params),
            success: () => {
                if (config.success && isFunction(config.success)) config.success();
            },
            fail: () => {
                if (config.fail && isFunction(config.fail)) config.fail();
            }
        });
    } else if (config.type.toLowerCase() === 'navigateback' || config.type.toLowerCase() === 'back') {
        //navigateBack

        return uni.navigateBack({ delta: config.delta, animationType: config.animationType, animationDuration: config.animationDuration });
    } else {
        if (isUrl(config.url) && window && window.location) {
            window.location.href = transUrl(config.url, config.params);
        } else {
            //navigateTo

            return uni.navigateTo({
                url: transUrl(config.url, config.params),
                animationType: config.animationType,
                animationDuration: config.animationDuration,
                success: () => {
                    if (config.success && isFunction(config.success)) config.success();
                },
                fail: () => {
                    if (config.fail && isFunction(config.fail)) config.fail();
                }
            });
        }
    }
};
