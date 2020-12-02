import { isUndefined, isNull, isEmpty, isFunction } from '../../base/utils/test';
import { trim } from '../../base/utils/util';

//校验数据
export default (rules: any, data: any, help: string) => {
    for (let i = 0; i < rules.length; i++) {
        const _data = rules[i].space ? trim(data) : data;

        //判断空值
        if (rules[i].required && isEmpty(_data)) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //判断长度
        if (!isUndefined(rules[i].len) && !isNull(rules[i].len) && String(_data).length !== rules[i].len) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //判断最小长度
        if (!isUndefined(rules[i].min) && !isNull(rules[i].min) && String(_data).length < rules[i].min) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //判断最大长度
        if (!isUndefined(rules[i].max) && !isNull(rules[i].max) && String(_data).length > rules[i].max) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //枚举值
        if (rules[i].enum && (',' + rules[i].enum + ',').indexOf(',' + String(_data) + ',') < 0) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //正则表达式
        if (!isUndefined(rules[i].pattern) && !isNull(rules[i].pattern) && !rules[i].pattern.test(_data)) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }

        //自定义校验
        if (!isUndefined(rules[i].validator) && !isNull(rules[i].validator) && isFunction(rules[i].validator) && !rules[i].validator(_data)) {
            return Promise.resolve({ error: true, message: rules[i].message || help || '' });
        }
    }

    return Promise.resolve({});
};
