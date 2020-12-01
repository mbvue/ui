# Checkbox 复选

## 1、 案例

### 1.1、 基础使用

:::demo html

<div>
    <mb-checkbox>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked indeterminate>复选框</mb-checkbox>
</div>
:::

### 1.2、 尺寸

:::demo html

<div>
    <mb-checkbox size="xs">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="sm">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="md">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="lg">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="xl">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox size="xs" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="sm" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="md" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="lg" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox size="xl" indeterminate>复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox defaultChecked size="xs">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="sm">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="md">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="lg">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="xl">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox defaultChecked size="xs" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="sm" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="md" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="lg" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked size="xl" indeterminate>复选框</mb-checkbox>
</div>
:::

### 1.3、 禁用

:::demo html

<div>
    <mb-checkbox disabled size="xs">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled size="sm">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled size="md">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled size="lg">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled size="xl">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox disabled defaultChecked size="xs">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="sm">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="md">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="lg">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="xl">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox disabled defaultChecked size="xs" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="sm" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="md" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="lg" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox disabled defaultChecked size="xl" indeterminate>复选框</mb-checkbox>
</div>
:::

### 1.4、 形状

:::demo html

<div>
    <mb-checkbox shape="circle">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox shape="pill">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox shape="square">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox shape="circle" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox shape="pill" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox shape="square" indeterminate>复选框</mb-checkbox>
</div>
:::

### 1.5、 自定选中颜色

:::demo html

<div>
    <mb-checkbox defaultChecked activeColor="#67c23a">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked activeColor="#e6a23c">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked activeColor="#f56c6c">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox defaultChecked disabled activeColor="#67c23a">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked disabled activeColor="#e6a23c">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked disabled activeColor="#f56c6c">复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox defaultChecked activeColor="#67c23a" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked activeColor="#e6a23c" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked activeColor="#f56c6c" indeterminate>复选框</mb-checkbox>
    <br/>
    <br/>
    <mb-checkbox defaultChecked disabled activeColor="#67c23a" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked disabled activeColor="#e6a23c" indeterminate>复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox defaultChecked disabled activeColor="#f56c6c" indeterminate>复选框</mb-checkbox>
</div>
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
| indeterminate  | 只控制半选样式   | Boolean                 | -              | true false         |
| shape          | 设置按钮形状     | String                  | circle         | circle pill square |
| size           | 设置按钮大小     | String                  | xs sm md lg xl | md                 |
| activeColor    | 选中状态下的颜色 | String                  | -              | -                  |

### 2.2、事件

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | event    |
