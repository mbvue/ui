//校验是否是Undefined
export function isUndefined(value: any) {
    return Object.prototype.toString.call(value) === '[object Undefined]';
}

//校验是否是Null
export function isNull(value: any) {
    return Object.prototype.toString.call(value) === '[object Null]';
}

//校验是否是字符串类型
export function isString(value: any) {
    return Object.prototype.toString.call(value) === '[object String]';
}

//校验是否是数字类型
export function isNumber(value: any) {
    return Object.prototype.toString.call(value) === '[object Number]';
}

//校验是否是布尔类型
export function isBoolean(value: any) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}

//校验是否是方法类型
export function isFunction(value: any) {
    return Object.prototype.toString.call(value) === '[object Function]';
}

//校验是否是日期类型
export function isDate(value: any) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

//校验是否是数组类型
export function isArray(value: any) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === '[object Array]';
    }
}

//校验是否是Document类型
export function isDocument(value: any) {
    return Object.prototype.toString.call(value) === '[object HTMLDocument]';
}

//校验是否是对象类型
export function isObject(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

//校验是否是JSON字符串
export function isJson(value: any) {
    if (typeof value == 'string') {
        try {
            const obj = JSON.parse(value);
            return typeof obj == 'object' && obj ? true : false;
        } catch (error) {
            return false;
        }
    }

    return false;
}

//校验是否只是纯数字
export function justNumber(value: any) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

//校验是否只是整数
export function justDigits(value: any) {
    return /^\d+$/.test(value);
}

//校验是否值包含字母
export function justEn(value: any) {
    return /^[a-zA-Z]*$/.test(value);
}

//校验是否值包含中文
export function justChinese(value: any) {
    return /^[\u4e00-\u9fa5]+$/gi.test(value);
}

//校验是否值包含字母或者数字
export function justEnOrNum(value: any) {
    return /^[0-9a-zA-Z]*$/g.test(value);
}

//校验是否为空
export function isEmpty(value: any) {
    switch (typeof value) {
        case 'undefined':
            return true;
        case 'string':
            if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
            break;
        case 'boolean':
            if (!value) return true;
            break;
        case 'number':
            if (0 === value || isNaN(value)) return true;
            break;
        case 'object':
            if (null === value || value.length === 0) return true;
            for (const i in value) {
                return false;
            }
            return true;
    }
    return false;
}

//校验是否是正确的邮箱地址
export function isEmail(value: any) {
    return /^\w+((-\w+)|(\.\w+))*\\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

//校验是否是正确的手机号码
export function isMobile(value: any) {
    return /^1[23456789]\d{9}$/.test(value);
}

//校验是否是正确的固定电话
export function isFixLine(value: any) {
    return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(value);
}

//校验是否是正确的URL
export function isUrl(value: any) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
        value
    );
}

//校验是否是正确的身份证号码
export function isIdCard(value: any) {
    const city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
    };

    if (!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)) {
        return false;
    } else if (!city[value.substr(0, 2)]) {
        return false;
    } else {
        if (value.length == 18) {
            value = value.split('');
            const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

            let sum = 0,
                ai = 0,
                wi = 0;

            for (let i = 0; i < 17; i++) {
                ai = value[i];
                wi = factor[i];
                sum += ai * wi;
            }

            if (parity[sum % 11] != value[17]) {
                return false;
            }
        }
    }

    return true;
}

export default {
    isUndefined,
    isNull,
    isString,
    isNumber,
    isBoolean,
    isFunction,
    isDate,
    isArray,
    isDocument,
    isObject,
    isJson,
    justNumber,
    justDigits,
    justEn,
    justChinese,
    justEnOrNum,
    isEmpty,
    isEmail,
    isMobile,
    isFixLine,
    isUrl,
    isIdCard
};
