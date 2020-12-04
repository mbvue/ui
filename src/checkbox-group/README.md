# CheckboxGroup 复选组

## 1、 案例

### 1.1、 基础使用

:::demo html

<mb-checkbox-group>
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group indeterminate>
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>
</mb-checkbox-group>
:::

### 1.2、 尺寸

:::demo html

<mb-checkbox-group size="xs">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group size="sm">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group size="md">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group size="lg">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group size="xl">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
:::

### 1.3、 禁用

:::demo html

<mb-checkbox-group disabled>
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
:::

### 1.4、 形状

:::demo html

<mb-checkbox-group shape="circle">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group shape="pill">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
<br/>
<br/>
<mb-checkbox-group shape="square">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
:::

### 1.5、 自定选中颜色

:::demo html

<mb-checkbox-group activeColor="#67c23a">
    <mb-checkbox checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="2">复选框</mb-checkbox>&nbsp;&nbsp;
    <mb-checkbox checkedValue="3">复选框</mb-checkbox>&nbsp;&nbsp;
</mb-checkbox-group>
:::

### 1.6、 快捷设置

:::demo html

<mb-checkbox-group activeColor="#67c23a" :data="[{ value: '1', name: '单选按钮1' }, { value: '2', name: '单选按钮2' }]"></mb-checkbox-group>
:::

## 2、 API 配置

### 2.1、 参数

| 参数           | 说明                                            | 类型                    | 默认值         | 可选值             |
| -------------- | ----------------------------------------------- | ----------------------- | -------------- | ------------------ |
| disabled       | 是否禁用状态                                    | Boolean                 | false          | true               |
| value(v-model) | 选中内容                                        | String, Number, Boolean | -              | -                  |
| indeterminate  | 只控制半选样式                                  | Boolean                 | false          | true               |
| shape          | 设置按钮形状                                    | String                  | circle         | circle pill square |
| size           | 设置按钮大小                                    | String                  | xs sm md lg xl | md                 |
| activeColor    | 选中状态下的颜色                                | String                  | -              | -                  |
| data           | 快捷设置，{ value: '选中值', name: '显示名称' } | Array                   | -              | -                  |

### 2.2、事件

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| click  | 点击事件   | event    |
| change | 值改变事件 | value    |
