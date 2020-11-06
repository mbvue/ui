# 实用工具

## 1 基础环境

### 1.1 判断是否是 uni-app 环境

```js
this.$m.env.uniApp();
```

### 1.2 判断是否是微信浏览器访问环境

```js
this.$m.env.wechat();
```

### 1.3 计算单位

根据传入值如果包含字母则原样返回，如果是纯数字则增加单位返回

```js
this.$m.env.unit('auto', 'px');
```
