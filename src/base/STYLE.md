# 内置样式

## 1 字体颜色

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

## 2 背景颜色

:::demo html

<div>
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
</div>
:::

## 3 H 标签样式

:::demo html

<div>
    <div class="h1">.h1 标签样式<small>small 标签</small></div>
    <div class="h2">.h2 标签样式<small>我是 small 标签</small></div>
    <div class="h3">.h3 标签样式<small>我是 small 标签</small></div>
    <div class="h4">.h4 标签样式<small>我是 small 标签</small></div>
    <div class="h5">.h5 标签样式<small>我是 small 标签</small></div>
    <div class="h6">.h6 标签样式<small>我是 small 标签</small></div>
</div>
:::

## 4 边框样式

:::demo html

<div>
    <div class="flex row-around">
        <div class="box border">.border</div>
        <div class="box border-top">.border-top</div>
        <div class="box border-right">.border-right</div>
        <div class="box border-bottom">.border-bottom</div>
        <div class="box border-left">.border-left</div>
    </div>
    <br />
    <div class="flex row-around">
        <div class="box border-0">.border-0</div>
        <div class="box border-top-0">.border-top-0</div>
        <div class="box border-right-0">.border-right-0</div>
        <div class="box border-bottom-0">.border-bottom-0</div>
        <div class="box border-left-0">.border-left-0</div>
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
        <div class="box border rounded-pill"  style="width: 200px; height: 130px;">.rounded-pill</div>
    </div>
</div>
:::

## 5 文字省略

:::demo html

<div class="flex row-around">
    <div class="border line-1" style="width: 100px;">.line-1 文字超出内容盒子时显示省略号.line-1 文字超出内容盒子时显示省略号</div>
    <div class="border line-2" style="width: 100px;">.line-2 文字超出内容盒子时显示省略号.line-2 文字超出内容盒子时显示省略号</div>
    <div class="border line-3" style="width: 100px;">.line-3 文字超出内容盒子时显示省略号.line-3 文字超出内容盒子时显示省略号</div>
    <div class="border line-4" style="width: 100px;">.line-4 文字超出内容盒子时显示省略号.line-4 文字超出内容盒子时显示省略号</div>
    <div class="border line-5" style="width: 100px;">.line-5 文字超出内容盒子时显示省略号.line-5 文字超出内容盒子时显示省略号.line-5 文字超出内容盒子时显示省略号</div>
</div>
:::

## 6 定位

.relative<br/>
.absolute<br/>
.fixed

## 7 字体大小

:::demo html

<div>
    <span class="font-xs">.font-xs 字体大小</span>
    <br />
    <span class="font-sm">.font-sm 字体大小</span>
    <br />
    <span class="font-md">.font-md 字体大小</span>
    <br />
    <span class="font-lg">.font-lg 字体大小</span>
    <br />
    <span class="font-xl">.font-xl 字体大小</span>
</div>
:::

## 8 字体对齐方式

:::demo html

<div>
    <div class="border text-left">.text-left</div>
    <br/>
    <div class="border text-center">.text-center</div>
    <br/>
    <div class="border text-right">.text-right</div>
</div>
:::

## 9 flex 布局

:::demo html

<div>
    <h4>方向：</h4>
    <h5>1、水平方向：.flex .row 或者 .flex(默认为水平方向)</h5>
    <div class="flex row" style="width: 360px">
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
    </div>
    <h5>2、垂直方向：.flex .column</h5>
    <div class="flex column" style="width: 360px">
        <div class="box" style="background: #00a0e9; margin-bottom: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-bottom: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; color: #fff;">3</div>
    </div>
    <h4>flex-wrap 属性：</h4>
    <h5>1、换行属性：.flex .wrap</h5>
    <div class="flex wrap" style="width: 360px">
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
    </div>
    <h5>2、不换行属性：.flex .nowrap</h5>
    <div class="flex nowrap" style="width: 360px">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
    </div>
    <h5>3、反转换行属性：.flex .reverse</h5>
    <div class="flex reverse" style="width: 360px">
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; margin-bottom: 10px; color: #fff;">3</div>
    </div>
    <br />
    <h4>flex-content 属性：</h4>
    <h5>1、水平左靠齐：.flex .row-left</h5>
    <div class="flex row-left">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; color: #fff;">3</div>
    </div>
    <h5>2、水平居中：.flex .row-center</h5>
    <div class="flex row-center">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
    </div>
    <h5>3、水平右靠齐：.flex .row-right</h5>
    <div class="flex row-right">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; color: #fff;">3</div>
    </div>
    <h5>4、水平中间间隔：.flex .row-between</h5>
    <div class="flex row-between">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; color: #fff;">3</div>
    </div>
    <h5>5、水平左右间隔：.flex .row-around</h5>
    <div class="flex row-around">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
    </div>
    <br />
    <h4>align-items 属性：</h4>
    <h5>1、垂直顶部靠齐：.flex .col-top</h5>
    <div class="flex col-top">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; color: #fff;">3</div>
    </div>
    <h5>2、垂直剧中：.flex .col-center</h5>
    <div class="flex col-center">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
    </div>
    <h5>3、垂直底部靠齐：.flex .col-bottom</h5>
    <div class="flex col-bottom">
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">1</div>
        <div class="box" style="height: 100px; background: #00a0e9; margin-right: 10px; color: #fff;">2</div>
        <div class="box" style="background: #00a0e9; margin-right: 10px; color: #fff;">3</div>
    </div>
</div>
:::
