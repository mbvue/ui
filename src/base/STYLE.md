# 内置样式

## 1、 字体颜色

:::demo html

<div class="flex">
    <div style="margin-right: 30px;">
        <div class="text-primary">.text-primary</div>
        <div class="text-success">.text-success</div>
        <div class="text-warning">.text-warning</div>
        <div class="text-danger">.text-danger</div>
        <div class="text-info">.text-info</div>
        <div class="text-dark">.text-dark</div>
    </div>
    <div>
        <div class="text-primary-light">.text-primary-light</div>
        <div class="text-success-light">.text-success-light</div>
        <div class="text-warning-light">.text-warning-light</div>
        <div class="text-danger-light">.text-danger-light</div>
        <div class="text-info-light">.text-info-light</div>
        <div class="text-dark-light">.text-dark-light</div>
    </div>
</div>
:::

## 2、 背景颜色

:::demo html

<div class="flex row-between">
    <div class="box bg-primary">.bg-primary</div>
    <div class="box bg-success">.bg-success</div>
    <div class="box bg-warning">.bg-warning</div>
    <div class="box bg-danger">.bg-danger</div>
    <div class="box bg-info">.bg-info</div>
    <div class="box bg-dark">.bg-dark</div>
</div>
<br/>
<div class="flex row-between">
    <div class="box bg-primary-light">.bg-primary-light</div>
    <div class="box bg-success-light">.bg-success-light</div>
    <div class="box bg-warning-light">.bg-warning-light</div>
    <div class="box bg-danger-light">.bg-danger-light</div>
    <div class="box bg-info-light">.bg-info-light</div>
    <div class="box bg-dark-light">.bg-dark-light</div>
</div>
<br/>
<div class="flex row-between">
    <div class="box bg-primary-lighter">.bg-primary-lighter</div>
    <div class="box bg-success-lighter">.bg-success-lighter</div>
    <div class="box bg-warning-lighter">.bg-warning-lighter</div>
    <div class="box bg-danger-lighter">.bg-danger-lighter</div>
    <div class="box bg-info-lighter">.bg-info-lighter</div>
    <div class="box bg-dark-lighter">.bg-dark-lighter</div>
</div>
:::

## 3、 H 标签样式

:::demo html

<div class="h1">.h1 标签样式<small>small 标签</small></div>
<div class="h2">.h2 标签样式<small>我是 small 标签</small></div>
<div class="h3">.h3 标签样式<small>我是 small 标签</small></div>
<div class="h4">.h4 标签样式<small>我是 small 标签</small></div>
<div class="h5">.h5 标签样式<small>我是 small 标签</small></div>
<div class="h6">.h6 标签样式<small>我是 small 标签</small></div>
:::

## 4、 边框样式

:::demo html

<div class="flex row-around">
    <div class="box border">.border</div>
    <div class="box border-top">.border-top</div>
    <div class="box border-right">.border-right</div>
    <div class="box border-bottom">.border-bottom</div>
    <div class="box border-left">.border-left</div>
    <div class="box border-left border-right">.border-left<br/>.border-right</div>
</div>
<br />
<div class="flex row-around">
    <div class="box border border-0">.border-0</div>
    <div class="box border border-top-0">.border-top-0</div>
    <div class="box border border-right-0">.border-right-0</div>
    <div class="box border border-bottom-0">.border-bottom-0</div>
    <div class="box border border-left-0">.border-left-0</div>
    <div class="box border border-left-0 border-right-0">.border-left-0<br/>.border-right-0</div>
</div>
<br />
<div class="flex row-around">
    <div class="box border border-primary">.border-primary</div>
    <div class="box border border-success">.border-success</div>
    <div class="box border border-warning">.border-warning</div>
    <div class="box border border-danger">.border-danger</div>
    <div class="box border border-info">.border-info</div>
    <div class="box border border-dark">.border-dark</div>
</div>
<br />
<div class="flex row-around">
    <div class="box border border-primary-light">.border-primary-light</div>
    <div class="box border border-success-light">.border-success-light</div>
    <div class="box border border-warning-light">.border-warning-light</div>
    <div class="box border border-danger-light">.border-danger-light</div>
    <div class="box border border-info-light">.border-info-light</div>
    <div class="box border border-dark-light">.border-dark-light</div>
</div>
<br />
<div class="flex row-around">
    <div class="box border rounded">.rounded</div>
    <div class="box border rounded-top">.rounded-top</div>
    <div class="box border rounded-right">.rounded-right</div>
    <div class="box border rounded-bottom">.rounded-bottom</div>
    <div class="box border rounded-left">.rounded-left</div>
    <div class="box border rounded-circle">.rounded-circle</div>
</div>
:::

## 5、 定位

.relative<br/>
.absolute<br/>
.fixed

## 6、 字体大小

:::demo html

<span class="font-xs">.font-xs 字体大小</span>
<br />
<span class="font-sm">.font-sm 字体大小</span>
<br />
<span class="font-md">.font-md 字体大小</span>
<br />
<span class="font-lg">.font-lg 字体大小</span>
<br />
<span class="font-xl">.font-xl 字体大小</span>
:::

<br />
具体尺寸（从 9px 到 24px，单位 px）：

:::demo html

<span class="font-9">.font-9 字体大小</span>
<br />
<span class="font-10">.font-10 字体大小</span>
<br />
<span class="font-11">.font-11 字体大小</span>
<br />
<span class="font-12">.font-12 字体大小</span>
<br />
<span class="font-13">.font-13 字体大小</span>
<br />
...
<br />
<span class="font-22">.font-22 字体大小</span>
<br />
<span class="font-23">.font-23 字体大小</span>
<br />
<span class="font-24">.font-24 字体大小</span>
:::

## 7、 文字省略

支持 1 行到 10 行

:::demo html

<div class="flex row-around">
    <div class="border line-1" style="width: 100px;">.line-1 文字超出内容盒子时显示省略号.line-1 文字超出内容盒子时显示省略号</div>
    <div class="border line-2" style="width: 100px;">.line-2 文字超出内容盒子时显示省略号.line-2 文字超出内容盒子时显示省略号</div>
    <div class="border line-3" style="width: 100px;">.line-3 文字超出内容盒子时显示省略号.line-3 文字超出内容盒子时显示省略号</div>
</div>
:::

## 8、 字体对齐方式

:::demo html

<div class="border text-left">.text-left</div>
<br/>
<div class="border text-center">.text-center</div>
<br/>
<div class="border text-right">.text-right</div>
:::

## 9、 flex 布局

### 9.1、 方向

#### 9.1.1、 水平方向

class：.row 或者不写(默认为水平方向)

:::demo html

<div class="flex row" style="width: 360px">
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
</div>
:::

#### 9.1.2、 垂直方向

class：.col

:::demo html

<div class="flex col" style="width: 360px">
    <div class="box" style="background: #00a0e9; margin-bottom: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-bottom: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::

### 9.2、 换行属性

#### 9.2.1、 换行

class：.wrap

:::demo html

<div class="flex wrap" style="width: 360px">
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
</div>
:::

#### 9.2.2、 不换行

class：.nowrap

:::demo html

<div class="flex nowrap" style="width: 360px">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
</div>
:::

#### 9.2.3、 反转换行

class：.reverse

:::demo html

<div class="flex reverse" style="width: 360px">
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
</div>
:::

### 9.3、 水平对齐方式

#### 9.3.1、 左靠齐

class：.row-left

:::demo html

<div class="flex row-left">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::

#### 9.3.2、 居中

class：.row-center

:::demo html

<div class="flex row-center">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
</div>
:::

#### 9.3.3、 右靠齐

class：.row-right

:::demo html

<div class="flex row-right">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::

#### 9.3.4、 不含左右等分对齐

class：.row-between

:::demo html

<div class="flex row-between">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::

#### 9.3.5、 含左右等分对齐

class：.row-around

:::demo html

<div class="flex row-around">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
</div>
:::

### 9.4、 垂直对齐方式

#### 9.4.1、 顶部靠齐

class：.col-top

:::demo html

<div class="flex col-top">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::

#### 9.4.2、 居中

class：.col-center

:::demo html

<div class="flex col-center">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
</div>
:::

#### 9.4.3、 底部靠齐

class：.col-bottom

:::demo html

<div class="flex col-bottom">
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
</div>
:::

### 9.5、 flex 等分

支持 1 到 24 等分

:::demo html

<div class="flex">
    <div class="box flex-1" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
    <div class="box flex-2" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
    <div class="box flex-3" style="background: #00a0e9; color: #fff;">3</div>
</div>
:::
