# 核心工具

## 1、 环境校验工具

### 1.2、 获取 Vue 对象

```js
this.$m.env.vue;
```

### 1.2、 获取 Vue 版本

此方法只获取 Vue 大版本号，无 vue 返回 0，Vue2.x 版本返回 2，Vue3.x 版本返回 3

```js
this.$m.env.vueVer;
```

### 1.3、 获取 uni-app 对象

```js
this.$m.env.uniApp;
```

### 1.4、 微信浏览器

判断当前环境是否是微信浏览器打开

```js
this.$m.env.wechat();
```

## 2、 触发/劫持

:::warning
劫持名称不能重复，否则会被覆盖
:::

### 2.1、 劫持

```js
this.$m.emit.$on('foo', e => console.log('foo', e));
this.$m.emit.$on('*', (type, e) => console.log(type, e));
```

### 2.2、 触发

```js
this.$m.emit.$emit('foo', { a: 'b' });
```

### 2.3、 清除

```js
this.$m.emit.$off('foo', e => console.log('foo', e)); //清除指定劫持
this.$m.emit.$clear(); //清除所有劫持
```
