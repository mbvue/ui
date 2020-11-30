# Button 按钮

## 1、 案例

### 1.1、 按钮样式

:::demo html

<div>
    <mb-button type="default">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.2、 幽灵按钮样式

:::demo html

<div>
    <mb-button type="default" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="primary" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="warning" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="danger" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="info" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="dark" ghost="dashed">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="ghost">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="plain">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="link">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.3、 禁用按钮

:::demo html

<div>
    <mb-button type="default" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="default" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="primary" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="warning" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="danger" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="info" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="dark" ghost="dashed" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="ghost" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="plain" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" ghost="link" :disabled="true">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.4、 图标按钮

:::demo html

<div>
    <mb-button type="default" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="primary" ghost="dashed" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="ghost" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="plain" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="link" icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.5、 按钮尺寸

:::demo html

<div>
    <mb-button type="default" size="xs">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" size="sm">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" size="md">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" size="lg">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="default" size="xl">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="primary" size="xs">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" size="sm">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" size="md">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" size="lg">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" size="xl">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.6、 按钮圆角样式

:::demo html

<div>
    <mb-button type="default" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="primary" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="success" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="warning" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="danger" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="info" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <mb-button type="dark" shape="circle" icon="heart"></mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="default" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" shape="round">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="default" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" shape="pill">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="default" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.7、 按钮加载中

:::demo html

<div>
    <mb-button type="default" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="success" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="warning" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="danger" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="info" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="dark" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    <mb-button type="primary" ghost="dashed" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="ghost" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="plain" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" ghost="link" :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
    <br />
    <br />
    自定义加载中图标：
    <br />
    <br />
    <mb-button type="primary" :loading="true" loadingIcon="redo-alt">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" :disabled="true"> <mb-icon type="user" :size="16"></mb-icon>第一个按钮 </mb-button>
</div>
:::

### 1.8、 按钮宽度调整为其父宽度

:::demo html

<div>
    <mb-button type="primary" block>第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" block icon="heart">第一个按钮</mb-button>&nbsp;&nbsp;
    <mb-button type="primary" block :loading="true">第一个按钮</mb-button>&nbsp;&nbsp;
</div>
:::

### 1.9、 ajax 请求封装自动处理 Loading 状态

```html
<mb-button type="primary" :ajax="action" shape="square">第一个按钮</mb-button>&nbsp;&nbsp;
```

```js
export default {
    methods: {
        action() {
            return this.$m.ajax
                .get('http://www.baidu.com')
                .then(data => {
                    console.log(data);
                })
                .catch(data => {
                    console.log(data);
                });
        }
    }
};
```

## 2、 API 配置

### 2.1、 参数

| 参数                 | 说明                                                                                                                                                           | 类型          | 默认值       | 可选值                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ | ------------------------------------------------------ |
| type                 | 设置按钮类型                                                                                                                                                   | String        | default      | primary、success、warning、danger、info、dark、default |
| ghost                | 幽灵属性                                                                                                                                                       | String        | -            | dashed、ghost、plain、link                             |
| htmlType             | 设置 button 原生的 type 值                                                                                                                                     | String        | button       | button、submit、reset、menu                            |
| icon                 | 设置按钮的图标类型                                                                                                                                             | String        | -            | -                                                      |
| iconSize             | 按钮的图标尺寸                                                                                                                                                 | String,Number | 16           | -                                                      |
| shape                | 设置按钮形状                                                                                                                                                   | String        | pill         | circle-圆形，round-半圆角，pill-小圆角，square-方形    |
| size                 | 设置按钮大小                                                                                                                                                   | String        | md           | xs、sm、md、lg、xl                                     |
| loading              | 设置按钮载入状态                                                                                                                                               | Boolean       | false        | true                                                   |
| loadingSize          | 自定义加载中图标尺寸                                                                                                                                           | String,Number | 16           | -                                                      |
| loadingIcon          | 自定义加载中图标                                                                                                                                               | String        | spinner      | -                                                      |
| disabled             | 按钮失效状态                                                                                                                                                   | Boolean       | false        | true                                                   |
| block                | 将按钮宽度调整为其父宽度的选项                                                                                                                                 | Boolean       | false        | true                                                   |
| openType             | 开放能力                                                                                                                                                       | String        | -            | -                                                      |
| hoverClass           | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果                                                                                               | String        | button-hover | -                                                      |
| appParameter         | 打开 APP 时，向 APP 传递的参数，open-type=launchApp 时有效                                                                                                     | String        | -            | -                                                      |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态                                                                                                                         | Boolean       | false        | true                                                   |
| lang                 | 指定返回用户信息的语言                                                                                                                                         | String        | en           | zh_CN 简体中文，zh_TW 繁体中文，en 英文                |
| sessionFrom          | 会话来源，open-type="contact"时有效                                                                                                                            | String        | -            | -                                                      |
| sendMessageTitle     | 会话内消息卡片标题，open-type="contact"时有效                                                                                                                  | String        | -            | -                                                      |
| sendMessagePath      | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效                                                                                                    | String        | -            | -                                                      |
| sendMessageImg       | 会话内消息卡片图片，open-type="contact"时有效                                                                                                                  | String        | -            | -                                                      |
| showMessageCard      | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 | String        | -            | -                                                      |
| throttle             | 节流的时间间隔(一定时间内无论点击多少次，只会触发一次 click 事件)，单位 ms                                                                                     | String,Number | 500          | -                                                      |
| autoFocus            | 是否默认聚焦，仅 web 端有效                                                                                                                                    | Boolean       | false        | true                                                   |
| ajax                 | ajax 请求封装自动处理 Loading 状态                                                                                                                             | Function      | -            | -                                                      |

### 2.2、 事件

| 事件名         | 说明                                                                                                                         | 回调参数 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| click          | 点击事件                                                                                                                     | event    |
| getphonenumber | 获取用户手机号回调，仅 open-type="getPhoneNumber"有效                                                                        | res      |
| getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 uni.getUserInfo，仅 open-type="getUserInfo"有效 | res      |
| error          | 当使用开放能力时，发生错误的回调，仅 open-type="launchApp"有效                                                               | res      |
| opensetting    | 在打开授权设置页并关闭后回调，仅 open-type="openSetting"有效                                                                 | res      |
| launchapp      | 打开 APP 成功的回调，仅 open-type="launchApp"有效                                                                            | res      |
