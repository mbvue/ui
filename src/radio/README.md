# Radio 单选

## 1、 案例

### 1.1、 基础使用

:::demo html

<mb-radio>单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio defaultChecked>单选按钮</mb-radio>
:::

### 1.2、 尺寸

:::demo html

<mb-radio size="xs">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio size="sm">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio size="md">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio size="lg">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio size="xl">单选按钮</mb-radio>
:::

### 1.3、 禁用

:::demo html

<mb-radio disabled size="xs">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled size="sm">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled size="md">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled size="lg">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled size="xl">单选按钮</mb-radio>
<br/>
<br/>
<mb-radio disabled defaultChecked size="xs">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled defaultChecked size="sm">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled defaultChecked size="md">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled defaultChecked size="lg">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio disabled defaultChecked size="xl">单选按钮</mb-radio>
:::

### 1.4、 形状

:::demo html

<mb-radio shape="circle">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio shape="pill">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio shape="square">单选按钮</mb-radio>
:::

### 1.5、 自定选中颜色

:::demo html

<mb-radio defaultChecked activeColor="#67c23a">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio defaultChecked activeColor="#e6a23c">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio defaultChecked activeColor="#f56c6c">单选按钮</mb-radio>
<br/>
<br/>
<mb-radio defaultChecked disabled activeColor="#67c23a">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio defaultChecked disabled activeColor="#e6a23c">单选按钮</mb-radio>&nbsp;&nbsp;
<mb-radio defaultChecked disabled activeColor="#f56c6c">单选按钮</mb-radio>
:::

## 2、 API 配置

### 2.1、 参数

| 参数           | 说明             | 类型                    | 默认值         | 可选值             |
| -------------- | ---------------- | ----------------------- | -------------- | ------------------ |
| disabled       | 是否禁用状态     | Boolean                 | -              | true false         |
| checked        | 是否被选中       | Boolean                 | false          | true               |
| defaultChecked | 初始是否选中     | Boolean                 | false          | true               |
| value(v-model) | 选中内容         | String, Number, Boolean | -              | -                  |
| checkedValue   | 选中的值         | String, Number, Boolean | -              | -                  |
| defaultValue   | 未选中的值       | String, Number, Boolean | -              | -                  |
| shape          | 设置按钮形状     | String                  | circle         | circle pill square |
| size           | 设置按钮大小     | String                  | xs sm md lg xl | md                 |
| activeColor    | 选中状态下的颜色 | String                  | -              | -                  |

### 2.2、事件

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | event    |
