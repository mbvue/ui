# 实用工具

## 1、 基础环境

### 1.2、 获取 Vue

```js
this.$m.env.vue();
```

### 1.2、 获取 Vue 大版本号

无 vue：0<br/>2 版本：2<br/>3 版本：3

```js
this.$m.env.versions();
```

### 1.3、 uni-app 环境

```js
this.$m.env.uniApp();
```

### 1.4、 微信浏览器

```js
this.$m.env.wechat();
```

## 2、 实用工具

### 2.1、 计算单位

根据传入值如果包含字母则原样返回，如果是纯数字则增加单位返回

```js
this.$m.util.unit('auto', 'px');
```

参数：

| 名称  | 说明 | 类型           | 可选值 | 默认值 |
| ----- | ---- | -------------- | ------ | ------ |
| value | 值   | String、Number | -      | auto   |
| unit  | 单位 | String         | -      | px     |

### 2.2、 清除字符串空格

```js
this.$m.util.trim('value', 'both');
```

参数：

| 名称  | 说明 | 类型   | 可选值                                                              | 默认值 |
| ----- | ---- | ------ | ------------------------------------------------------------------- | ------ |
| value | 值   | String | -                                                                   | -      |
| pos   | 位置 | String | both：前后空格<br/>left：左空格<br/>right：右空格<br/>all：所有空格 | both   |

### 2.3、 获取 URL 参数

```js
this.$m.util.getParams('name');
```

参数：

| 名称 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| name | 键值 | String | -      | -      |

### 2.4、 生成随机数

```js
this.$m.util.randomNumber(0, 10);
```

参数：

| 名称 | 说明   | 类型   | 可选值 | 默认值 |
| ---- | ------ | ------ | ------ | ------ |
| min  | 最小值 | Number | -      | -      |
| max  | 最大值 | Number | -      | -      |

### 2.5、 生成随机字符串

```js
this.$m.util.randomString(20);
```

参数：

| 名称   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| length | 生成长度 | Number | -      | 32     |

### 2.6、 生成 UUID

```js
this.$m.util.guid(false);
```

参数：

| 名称 | 说明         | 类型    | 可选值      | 默认值 |
| ---- | ------------ | ------- | ----------- | ------ |
| bar  | 是否带中横杠 | Boolean | true、false | true   |

### 2.7、 对象深度合并

```js
this.$m.util.deepMerge({}, {});
```

参数：

| 名称 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| obj1 | 目标对象       | Object | -      | {}     |
| obj2 | 需要合并的对象 | Object | -      | {}     |

### 2.8、 深度克隆对象

```js
this.$m.util.deepClone({});
```

参数：

| 名称 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| obj  | 需要克隆的对象 | Object | -      | {}     |

### 2.9、 计算年龄

```js
this.$m.util.getAge('1998-11-11', 'Y岁M月D天');
```

参数：

| 名称     | 说明       | 类型   | 可选值 | 默认值         |
| -------- | ---------- | ------ | ------ | -------------- |
| birthday | 出生日期   | String | -      | -              |
| format   | 格式化样式 | String | -      | Y 岁 M 月 D 天 |

### 2.10、 格式化时间

```js
this.$m.util.dateFormat(new Date(), 'yyyy-mm-dd');
```

参数：

| 名称   | 说明       | 类型         | 可选值 | 默认值     |
| ------ | ---------- | ------------ | ------ | ---------- |
| value  | 日期       | String、date | -      | -          |
| format | 格式化样式 | String       | -      | yyyy-mm-dd |

### 2.11、 转化显示时间

```js
this.$m.util.transTime(new Date());
```

参数：

| 名称  | 说明                                                                                                                                                                       | 类型         | 可选值 | 默认值                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ | ------------------------------------------------------------------------------------------------------ |
| value | 日期                                                                                                                                                                       | String、Date | -      | -                                                                                                      |
| opts  | 配置信息：<br/>just：小于 5 分钟显示<br/>minute：小于 1 小时显示<br/>hour：小于 24 小时显示<br/>day：小于 30 天显示<br/>month：小于 365 天显示<br/>format：超过 365 天显示 | Object       | -      | { just: '刚刚', minute: '分钟前', hour: '小时前', day: '天前', month: '个月前, 'format: 'yyyy-mm-dd' } |

### 2.12、 隐藏部分字符串

```js
this.$m.util.hideString('15100000000', 3, 7);
```

参数：

| 名称  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| value | 字符串   | String | -      | -      |
| start | 开始位置 | Number | -      | 3      |
| end   | 结束位置 | Number | -      | 7      |

### 2.13、 计算两点距离

```js
this.$m.util.getDistance(0, 0, 1, 1);
```

参数：

| 名称   | 说明       | 类型   | 可选值 | 默认值 |
| ------ | ---------- | ------ | ------ | ------ |
| startX | 开始横坐标 | Number | -      | -      |
| startY | 开始纵坐标 | Number | -      | -      |
| endX   | 结束横坐标 | Number | -      | -      |
| endY   | 结束纵坐标 | Number | -      | -      |

<br/>

返回值：

| 名称        | 说明       | 类型   |
| ----------- | ---------- | ------ |
| distanceTxt | 距离字符串 | String |
| distanceNum | 距离数字   | Number |

### 2.14、 构建 URL 参数

```js
this.$m.util.transUrl('', {});
```

参数：

| 名称 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| url  | 前缀地址 | String | -      | -      |
| data | 参数     | Object | -      | -      |

### 2.15、 节流防抖

```js
this.$m.util.throttle(
    () => {
        console.log('1');
    },
    500,
    true
);
```

参数：

| 名称      | 说明                                     | 类型     | 可选值      | 默认值 |
| --------- | ---------------------------------------- | -------- | ----------- | ------ |
| fun       | 需要执行的方法                           | Function | -           | -      |
| wait      | 执行方法后相隔 wait 毫秒后才能再触发方法 | Number   | -           | 500    |
| immediate | 是否立即执行                             | Boolean  | true、false | true   |

## 3、 匹配

### 3.1、 校验 Undefined

```js
this.$m.test.isUndefined('');
```

### 3.2、 校验 Null

```js
this.$m.test.isNull('');
```

### 3.3、 校验字符串类型

```js
this.$m.test.isString('');
```

### 3.4、 校验数字类型

```js
this.$m.test.isNumber('');
```

### 3.5、 校验布尔类型

```js
this.$m.test.isBoolean('');
```

### 3.6、 校验方法类型

```js
this.$m.test.isFunction('');
```

### 3.7、 校验日期类型

```js
this.$m.test.isDate('');
```

### 3.8、 校验数组类型

```js
this.$m.test.isArray('');
```

### 3.9、 校验 Document 类型

```js
this.$m.test.isDocument('');
```

### 3.10、 校验对象类型

```js
this.$m.test.isObject('');
```

### 3.11、 校验 JSON 字符串

```js
this.$m.test.isJson('');
```

### 3.12、 校验纯数字

```js
this.$m.test.justNumber('');
```

### 3.13、 校验整数

```js
this.$m.test.justDigits('');
```

### 3.14、 校验字母

```js
this.$m.test.justEn('');
```

### 3.15、 校验中文

```js
this.$m.test.justChinese('');
```

### 3.16、 校验字母或者数字

```js
this.$m.test.justEnOrNum('');
```

### 3.17、 校验是否为空

```js
this.$m.test.isEmpty('');
```

### 3.18、 校验邮箱地址

```js
this.$m.test.isEmail('');
```

### 3.19、 校验手机号码

```js
this.$m.test.isMobile('');
```

### 3.20、 校验固定电话

```js
this.$m.test.isFixLine('');
```

### 3.21、 校验 URL

```js
this.$m.test.isUrl('');
```

### 3.22、 校验身份证号码

```js
this.$m.test.isIdCard('');
```
