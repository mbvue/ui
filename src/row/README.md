# Grid 栅格

## 1、 案例

### 1.1、 基本使用

:::demo html

<div>
    <mb-row>
        <mb-col :span="12" style="height: 50px; background: #7dbcea; color: #fff;">col-12</mb-col>
        <mb-col :span="12" style="height: 50px; background: #108ee9; color: #fff;">col-12</mb-col>
    </mb-row>
    <br/>
    <mb-row>
        <mb-col :span="8" style="height: 50px; background: #7dbcea; color: #fff;">col-8</mb-col>
        <mb-col :span="8" style="height: 50px; background: #108ee9; color: #fff;">col-8</mb-col>
        <mb-col :span="8" style="height: 50px; background: #7dbcea; color: #fff;">col-8</mb-col>
    </mb-row>
    <br/>
    <mb-row>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #108ee9; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #108ee9; color: #fff;">col-6</mb-col>
    </mb-row>
</div>
:::

### 1.2、 flex 布局下的垂直对齐方式

#### 1.2.1、 top

:::demo html

<div>
    <mb-row>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
    </mb-row>
</div>
:::

#### 1.2.2、 middle

:::demo html

<div>
    <mb-row align="middle">
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
    </mb-row>
</div>
:::

#### 1.2.3、 bottom

:::demo html

<div>
    <mb-row align="bottom">
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 30px; background: #108ee9; color: #fff;">col-6</mb-col>
    </mb-row>
</div>
:::

#### 1.2.4、 full

:::demo html

<div>
    <mb-row align="full">
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="background: #108ee9; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="height: 50px; background: #7dbcea; color: #fff;">col-6</mb-col>
        <mb-col :span="6" style="background: #108ee9; color: #fff;">col-6</mb-col>
    </mb-row>
</div>
:::

### 1.3、 flex 布局下的水平排列方式

#### 1.3.1、 start

:::demo html

<div>
    <mb-row justify="start">
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
    </mb-row>
</div>
:::

#### 1.3.2、 center

:::demo html

<div>
    <mb-row justify="center">
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
    </mb-row>
</div>
:::

#### 1.3.3、 end

:::demo html

<div>
    <mb-row justify="end">
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
    </mb-row>
</div>
:::

#### 1.3.4、 space-around

:::demo html

<div>
    <mb-row justify="space-around">
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
    </mb-row>
</div>
:::

#### 1.3.5、 space-between

:::demo html

<div>
    <mb-row justify="space-between">
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #7dbcea; color: #fff;">col-4</mb-col>
        <mb-col :span="4" style="height: 50px; background: #108ee9; color: #fff;">col-4</mb-col>
    </mb-row>
</div>
:::

### 1.4、 栅格间隔

#### 1.4.1、 水平间距

:::demo html

<div>
    <mb-row :gutter="16">
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
    </mb-row>
</div>
:::

#### 1.4.2、 响应式对象水平间距

:::demo html

<div>
    <mb-row :gutter="{ xs: 8, sm: 12, md: 16, lg: 18, xl: 20, xxl: 24}">
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
    </mb-row>
</div>
:::

#### 1.4.3、 垂直间距

:::demo html

<div>
    <mb-row :gutter="[16, 16]">
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
    </mb-row>
</div>
:::

#### 1.4.4、 响应式对象垂直间距

:::demo html

<div>
    <mb-row :gutter="[10, { xs: 8, sm: 12, md: 16, lg: 18, xl: 20, xxl: 24}]">
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div>
        </mb-col>
        <mb-col :span="6">
            <div style="height: 50px; background: #108ee9; color: #fff;">col-6</div>
        </mb-col>
    </mb-row>
</div>
:::

### 1.5、 右偏移

:::demo html

<div>
    <mb-row>
        <mb-col :span="8" style="height: 50px; background: #7dbcea; color: #fff;">col-8</mb-col>
        <mb-col :span="8" :offset="7" style="height: 50px; background: #7dbcea; color: #fff;">col-8</mb-col>
    </mb-row>
</div>
:::

### 1.6、 栅格顺序

:::demo html

<div>
    <mb-row :gutter="8">
        <mb-col :span="8" :order="3"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-1</div></mb-col>
        <mb-col :span="8" :order="2"><div style="height: 50px; background: #108ee9; color: #fff;">col-8-2</div></mb-col>
        <mb-col :span="8" :order="1"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-3</div></mb-col>
    </mb-row>
</div>
:::

### 1.7、 栅格向左移动格数

:::demo html

<div>
    <mb-row :gutter="8">
        <mb-col :span="8"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-1</div></mb-col>
        <mb-col :span="8" :pull="1"><div style="height: 50px; background: #108ee9; color: #fff;">col-8-2</div></mb-col>
        <mb-col :span="8"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-3</div></mb-col>
    </mb-row>
</div>
:::

### 1.8、 栅格向右移动格数

:::demo html

<div>
    <mb-row :gutter="8">
        <mb-col :span="8"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-1</div></mb-col>
        <mb-col :span="8" :push="1"><div style="height: 50px; background: #108ee9; color: #fff;">col-8-2</div></mb-col>
        <mb-col :span="8"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-3</div></mb-col>
    </mb-row>
</div>
:::

### 1.9、 响应式

:::demo html

<div>
    <mb-row :gutter="8">
        <mb-col :xs="{ span: 8 }" :sm="{ span: 9 }" :md="{ span: 10 }" :lg="{ span: 11 }" :xl="{ span: 12 }" :xxl="{ span: 13 }"><div style="height: 50px; background: #7dbcea; color: #fff;">col-x-1</div></mb-col>
        <mb-col :xs="8" :sm="7" :md="6" :lg="5" :xl="4" :xxl="3"><div style="height: 50px; background: #108ee9; color: #fff;">col-x-2</div></mb-col>
        <mb-col :span="8"><div style="height: 50px; background: #7dbcea; color: #fff;">col-8-3</div></mb-col>
    </mb-row>
</div>
:::

### 1.10、 兼容微信小程序

:::demo html

<div>
    <mb-row :gutter="8">
        <mb-col :span="6" data-span="6"><div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div></mb-col>
        <mb-col :span="6" data-span="6"><div style="height: 30px; background: #108ee9; color: #fff;">col-6</div></mb-col>
        <mb-col :span="6" data-span="6"><div style="height: 50px; background: #7dbcea; color: #fff;">col-6</div></mb-col>
        <mb-col :span="6" data-span="6"><div style="height: 30px; background: #108ee9; color: #fff;">col-6</div></mb-col>
    </mb-row>
</div>
:::

## 2、 API 配置

### 2.1、 Row

| 参数    | 说明                                                                                                                                                                                 | 类型                | 默认值 | 可选值                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------ | ------------------------------------------- |
| type    | 布局模式，可选 flex，现代浏览器 下有效                                                                                                                                               | String              | flex   | flex                                        |
| align   | flex 布局下的垂直对齐方式                                                                                                                                                            | String              | top    | top middle bottom full                      |
| justify | flex 布局下的水平排列方式                                                                                                                                                            | String              | start  | start center end space-around space-between |
| gutter  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 12, md: 16, lg: 18, xl: 20, xxl: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距],(微信小程序不支持对象) | String,Object,Array | 0      | -                                           |

### 2.2、 Col

| 参数   | 说明                                                                          | 类型          | 默认值 | 可选值 |
| ------ | ----------------------------------------------------------------------------- | ------------- | ------ | ------ |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格(微信小程序需设置属性 data-offset="x")  | String,Number | 0      | 0 ~ 24 |
| order  | 栅格顺序，flex 布局模式下有效(微信小程序需设置属性 data-order="x")            | String,Number | 0      | 0 ~ 24 |
| pull   | 栅格向左移动格数(微信小程序需设置属性 data-pull="x")                          | String,Number | 0      | 0 ~ 24 |
| push   | 栅格向右移动格数(微信小程序需设置属性 data-push="x")                          | String,Number | 0      | 0 ~ 24 |
| span   | 栅格占位格数，为 0 时相当于 display: none(微信小程序需设置属性 data-span="x") | String,Number | 1      | 0 ~ 24 |
| xs     | <480px 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)       | Number,Object | -      | -      |
| sm     | ≥576 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)         | Number,Object | -      | -      |
| md     | ≥768 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)         | Number,Object | -      | -      |
| lg     | ≥992 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)         | Number,Object | -      | -      |
| xl     | ≥1200 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)        | Number,Object | -      | -      |
| xxl    | ≥1600 响应式栅格，可为栅格数或一个包含其他属性的对象(微信小程序不支持)        | Number,Object | -      | -      |
