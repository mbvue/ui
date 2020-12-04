# RadioGroup 单选组

## 1、 案例

### 1.1、 基础使用

:::demo html

<mb-radio-group>
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>
</mb-radio-group>
:::

### 1.2、 尺寸

:::demo html

<mb-radio-group size="xs">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group size="sm">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group size="md">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group size="lg">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group size="xl">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
:::

### 1.3、 禁用

:::demo html

<mb-radio-group disabled>
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
:::

### 1.4、 形状

:::demo html

<mb-radio-group shape="circle">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group shape="pill">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
<br/>
<br/>
<mb-radio-group shape="square">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
:::

### 1.5、 自定选中颜色

:::demo html

<mb-radio-group activeColor="#67c23a">
    <mb-radio checkedValue="1">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="2">单选按钮</mb-radio>&nbsp;&nbsp;
    <mb-radio checkedValue="3">单选按钮</mb-radio>
</mb-radio-group>
:::

### 1.6、 快捷设置

:::demo html

<mb-radio-group activeColor="#67c23a" :data="[{ value: '1', name: '单选按钮1' }, { value: '2', name: '单选按钮2' }]"></mb-radio-group>
:::

## 2、 API 配置

### 2.1、 参数

| 参数           | 说明                                            | 类型                    | 默认值         | 可选值             |
| -------------- | ----------------------------------------------- | ----------------------- | -------------- | ------------------ |
| disabled       | 是否禁用状态                                    | Boolean                 | false          | true               |
| value(v-model) | 选中内容                                        | String, Number, Boolean | -              | -                  |
| shape          | 设置按钮形状                                    | String                  | circle         | circle pill square |
| size           | 设置按钮大小                                    | String                  | xs sm md lg xl | md                 |
| activeColor    | 选中状态下的颜色                                | String                  | -              | -                  |
| data           | 快捷设置，{ value: '选中值', name: '显示名称' } | Array                   | -              | -                  |

### 2.2、事件

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| click  | 点击事件   | event    |
| change | 值改变事件 | value    |
