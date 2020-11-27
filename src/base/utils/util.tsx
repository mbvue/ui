const browser = location ? location.href : '';
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//计算尺寸单位
export function unit(value = 'auto', unit = 'px') {
    value = String(value);
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value) ? `${value}${unit}` : value;
}

//清除字符串空格
export function trim(value: string, pos = 'both') {
    if (!value) return '';

    if (pos == 'both') {
        return value.replace(/^\s+|\s+$/g, '');
    } else if (pos == 'left') {
        return value.replace(/^\s*/, '');
    } else if (pos == 'right') {
        return value.replace(/(\s*$)/g, '');
    } else if (pos == 'all') {
        return value.replace(/\s+/g, '');
    } else {
        return value;
    }
}

//获取URL参数
export function getParams(name: string) {
    name = trim(name);
    if (!browser || !name) return '';

    return new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i').test(browser) ? unescape(RegExp.$2.replace(/\+/g, '')) : '';
}

//两个数字之间生成随机数
export function randomNumber(min: number, max: number) {
    if (min >= 0 && max > 0 && max >= min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
        return 0;
    }
}

//生成随机字符串
export function randomString(length = 32) {
    let str = '';

    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
}

//生成UUID
export function guid(bar = true) {
    const str = bar ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx';

    return str.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0x3) | 0x8;

        return v.toString(16);
    });
}

//对象深度合并
export function deepMerge(obj1 = {}, obj2 = {}) {
    for (const key in obj2) {
        if (obj1[key] && Object.prototype.toString.call(obj1[key]) === '[object Object]' && Object.prototype.toString.call(obj2[key]) === '[object Object]') {
            deepMerge(obj1[key], obj2[key]);
        } else {
            obj1[key] = obj2[key];
        }
    }

    return obj1;
}

//深度克隆对象
export function deepClone(obj = {}) {
    return JSON.parse(JSON.stringify(obj));
}

//根据出生日期计算年龄
export function getAge(birthday: string, format = 'Y岁M月D天') {
    if (!birthday) return '';

    const now = new Date(),
        now_year = now.getFullYear(),
        now_month = now.getMonth() + 1,
        now_day = now.getDate();

    const birth = new Date(birthday),
        birth_year = birth.getFullYear(),
        birth_month = birth.getMonth() + 1,
        birth_day = birth.getDate();

    const dday = new Date(birth_year, birth_month, 0).getDate();

    let year = now_year - birth_year,
        month = 0,
        day = 0;

    if (year > 0) {
        month = 12 - birth_month + now_month - 1;
        if (month > 11) {
            month = month - 12;
        } else {
            year = year - 1;
        }
    } else {
        month = now_month - birth_month - 1;
    }

    //计算天数
    day = dday - birth_day + now_day;
    if (day >= dday) {
        day = day - dday;
        month = month + 1;
    }

    //修正月份
    if (month > 11) {
        month = month - 12;
        year = year + 1;
    }

    return format.replace(/Y/g, year.toString()).replace(/M/g, month.toString()).replace(/D/g, day.toString());
}

//格式化时间
export function dateFormat(value: any, format = 'yyyy-mm-dd') {
    if (!value) return '';

    const date = Object.prototype.toString.call(value) === '[object String]' ? new Date(value) : value;
    let ret;

    const dateOpt = {
        'y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'h+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        's+': date.getSeconds().toString() // 秒
    };

    for (const k in dateOpt) {
        ret = new RegExp('(' + k + ')').exec(format);
        if (ret) format = format.replace(ret[1], ret[1].length == 1 ? dateOpt[k] : dateOpt[k].padStart(ret[1].length, '0'));
    }

    return format;
}

//转化显示时间（小于5分钟显示'刚刚'，小于1小时显示'xxx分钟前'，小于24小时显示'xxx小时前',小于365天显示'xxx天前',其他显示格式化日期）
export function transTime(value: any, opts = { just: '刚刚', minute: '分钟前', hour: '小时前', day: '天前', month: '个月前', format: 'yyyy-mm-dd' }) {
    if (!value) return '';

    const date = Object.prototype.toString.call(value) === '[object String]' ? new Date(value) : value;
    const timer = Math.round((new Date().getTime() - date.getTime()) / 1000);

    if (timer < 300) {
        return opts.just;
    } else if (timer >= 300 && timer < 3600) {
        return Math.round(timer / 60).toString() + opts.minute;
    } else if (timer >= 3600 && timer < 86400) {
        return Math.round(timer / 3600).toString() + opts.hour;
    } else if (timer >= 86400 && timer < 2592000) {
        return Math.round(timer / 86400).toString() + opts.day;
    } else if (timer >= 2592000 && timer < 365 * 86400) {
        return Math.round(timer / (86400 * 30)).toString() + opts.month;
    } else {
        return dateFormat(value, opts.format);
    }
}

//隐藏部分字符串（适用电话号码或者身份证等信息显示）
export function hideString(value: string, start = 3, end = 7) {
    if (!value) return '';

    let str = '';
    for (let i = 0; i < value.length; i++) {
        str += i >= start && i <= end ? '*' : value[i];
    }

    return str;
}

//通过两点经纬度计算两点距离
export function getDistance(startX: number, startY: number, endX: number, endY: number) {
    startX = startX || 0;
    startY = startY || 0;
    endX = endX || 0;
    endY = endY || 0;

    const rad1 = (endX * Math.PI) / 180.0,
        rad2 = (startX * Math.PI) / 180.0;

    let distanceTxt = '';

    const distance =
        6378137 *
        2 *
        Math.asin(
            Math.sqrt(
                Math.pow(Math.sin((rad1 - rad2) / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(((endY * Math.PI) / 180.0 - (startY * Math.PI) / 180.0) / 2), 2)
            )
        );

    if (distance == 0) distanceTxt = 0 + 'm';
    distanceTxt = distance.toString();
    distanceTxt = distanceTxt.substring(0, distanceTxt.indexOf('.')).length <= 3 ? distance.toFixed(0) + 'm' : (distance / 1000).toFixed(1) + 'km';

    return {
        distanceTxt: distanceTxt,
        distanceNum: distance
    };
}

//构建URL参数
export function transUrl(url = '', data = {}) {
    url = url || '';

    const arr: any = [];
    for (const param in data) {
        arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
    }
    arr.push('random=' + Math.random());

    return url.indexOf('?') >= 0 ? (url[url.length - 1] === '?' ? url + arr.join('&') : url + '&' + arr.join('&')) : url + '?' + arr.join('&');
}

//节流防抖（immediate为true：表示执行方法后相隔wait毫秒后才能再触发方法，immediate为false：表示相隔wait毫秒后再触发方法）
export function throttle(this: any, fun: any, wait = 500, immediate = true) {
    if (!this.throttle_obj) {
        if (immediate) {
            typeof fun === 'function' && fun();
            this.throttle_obj = setTimeout(() => {
                clearTimeout(this.throttle_obj);
                this.throttle_obj = null;
            }, wait);
        } else {
            this.throttle_obj = setTimeout(() => {
                clearTimeout(this.throttle_obj);
                this.throttle_obj = null;
                typeof fun === 'function' && fun();
            }, wait);
        }
    }
}

//字符串转数字
export function transNumber(value = '', defaultValue = 0) {
    value = trim(String(value).replace(/[^0-9]+/g, ''));

    if (value === undefined || value == null || value === '') return defaultValue;

    return Number(value);
}

export default {
    unit,
    trim,
    getParams,
    randomNumber,
    randomString,
    guid,
    deepMerge,
    deepClone,
    getAge,
    dateFormat,
    transTime,
    hideString,
    getDistance,
    transUrl,
    throttle,
    transNumber
};
