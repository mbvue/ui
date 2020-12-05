import { transUrl } from '../utils/util';
import { isFunction, isUrl } from '../utils/test';
import params from './params';

declare const uni: any;

export default (...args: any[]) => {
    const config: any = params(args);

    const type = config.type.toLowerCase();
    const obj: any = {
        url: transUrl(config.url, config.params),
        success: () => {
            if (config.success && isFunction(config.success)) config.success();
        },
        fail: () => {
            if (config.fail && isFunction(config.fail)) config.fail();
        }
    };

    if ('redirectto|redirect'.indexOf(type) !== -1) {
        return uni.redirectTo(obj);
    } else if ('switchtab|tab'.indexOf(type) !== -1) {
        return uni.switchTab(obj);
    } else if ('relaunch|launch'.indexOf(type) !== -1) {
        return uni.reLaunch(obj);
    } else if ('navigateback|back'.indexOf(type) !== -1) {
        return uni.navigateBack({ delta: config.delta, animationType: config.animationType, animationDuration: config.animationDuration });
    } else {
        if (isUrl(config.url) && window && window.location) {
            window.location.href = transUrl(config.url, config.params);
        } else {
            obj.animationType = config.animationType;
            obj.animationDuration = config.animationDuration;
            return uni.navigateTo(obj);
        }
    }
};
