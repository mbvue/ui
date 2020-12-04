# Image 图片

## 1、 案例

### 1.1、图片模式

#### 1.1.1、原图

<img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" />

#### 1.1.2、scaleToFill 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="scaleToFill" />
:::

#### 1.1.3、aspectFit 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="aspectFit" />
:::

#### 1.1.4、aspectFill 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="aspectFill" />
:::

#### 1.1.5、widthFix 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="widthFix" />
:::

#### 1.1.6、heightFix 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="heightFix" />
:::

#### 1.1.7、top 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="top" />
:::

#### 1.1.8、bottom 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="bottom" />
:::

#### 1.1.9、center 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="center" />
:::

#### 1.1.10、left 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="left" />
:::

#### 1.1.11、right 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="right" />
:::

#### 1.1.12、top left 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="top left" />
:::

#### 1.1.13、top right 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="top right" />
:::

#### 1.1.14、bottom left 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="bottom left" />
:::

#### 1.1.15、bottom right 模式

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" mode="bottom right" />
:::

### 1.2、 圆角

#### 1.2.1、circle 圆角

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="100" :height="100" bg="#d8dbdd" shape="circle" />
:::

#### 1.2.2、pill 圆角

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="100" :height="100" bg="#d8dbdd" shape="pill" />
:::

#### 1.2.3、square 圆角

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="100" :height="100" bg="#d8dbdd" shape="square" />
:::

#### 1.2.4、任意圆角

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="100" :height="100" bg="#d8dbdd" shape="20px" />
:::

### 1.3、 自定义图标

#### 1.3.1、自定义加载中图标

:::demo html

<mb-image src="https://dss3.baidu.com/error" :width="100" :height="100">
    <template v-slot:loading><mb-icon type="spinner" :size="48" :spin="true"></mb-icon></template>
</mb-image>
:::

#### 1.3.1、自定义加载失败图标

:::demo html

<mb-image src="https://dss3.baidu.com/error" :width="100" :height="100">
    <template v-slot:error><mb-icon type="times" :size="48"></mb-icon></template>
</mb-image>
:::

### 1.4、自定义动画时间

:::demo html

<mb-image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" :width="200" :height="200" bg="#d8dbdd" :duration="1000" mode="scaleToFill" />
:::

## 2、API 配置

### 2.1、参数

| 参数                | 说明                                                          | 类型           | 默认值             | 可选值                                                                                                                                   |
| ------------------- | ------------------------------------------------------------- | -------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| src                 | 图片资源地址                                                  | String         | -                  | -                                                                                                                                        |
| mode                | 图片裁剪、缩放的模式                                          | String         | aspectFill         | scaleToFill、spectFit、aspectFill、widthFix、heightFix、top、bottom、center、left、right、top left、top right、bottom left、bottom right |
| width               | 图片宽度，单位任意，如果为数值，则为 px 单位                  | String, Number | 300                | -                                                                                                                                        |
| height              | 图片高度，单位任意，如果为数值，则为 px 单位                  | String, Number | 225                | -                                                                                                                                        |
| shape               | 图片形状，字符串像素，单位任意，如果为数值，则为 px 单位      | String, Number | square             | circle-圆形，pill-小圆角，square-方形                                                                                                    |
| lazyLoad            | 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效 | Boolean        | true               | false                                                                                                                                    |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效        | Boolean        | false              | true                                                                                                                                     |
| loadingIcon         | 加载中的图标，或者小图片,'none'表示不启动图标                 | String         | image              | none                                                                                                                                     |
| loadingIconSize     | 加载中的图标尺寸                                              | Number         | 36                 | -                                                                                                                                        |
| errorIcon           | 加载中的图标，或者小图片,'none'表示不启动图标                 | String         | exclamation-circle | none                                                                                                                                     |
| errorIconSize       | 加载失败的图标尺寸                                            | Number         | 36                 | -                                                                                                                                        |
| fade                | 是否需要淡入效果                                              | Boolean        | true               | false                                                                                                                                    |
| duration            | 淡入效果过渡时间，单位 ms                                     | String, Number | 500                | -                                                                                                                                        |
| webp                | 只支持网络资源，只对微信小程序有效                            | Boolean        | true               | false                                                                                                                                    |
| bg                  | 背景颜色                                                      | String         | -                  | -                                                                                                                                        |

### 2.2、插槽

| 名称    | 说明                   |
| ------- | ---------------------- |
| loading | 自定义加载中的提示内容 |
| error   | 自定义失败的提示内容   |

### 2.3、事件

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| click  | 点击事件           | event    |
| load   | 图片加载成功时触发 | -        |
| error  | 图片加载失败时触发 | -        |
