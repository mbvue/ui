# InputGroup 输入框组

## 1、 案例

### 1.1、 基础输入框

:::demo html

<mb-input-group>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group>
    <mb-input placeholder="请输入内容"/>
    <mb-input readonly placeholder="~" style="width: 30px; border-left: 0; border-right: 0; pointer-events: none; backgroundColor: #fff"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
:::

### 1.2、 按钮尺寸

:::demo html

<mb-input-group size="xs">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group size="sm">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group size="md">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group size="lg">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group size="xl">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
:::

### 1.3、 禁用

:::demo html

<mb-input-group disabled size="xs">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group disabled size="sm">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group disabled size="md">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group disabled size="lg">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
<br/>
<br/>
<mb-input-group disabled size="xl">
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
    <mb-input placeholder="请输入内容"/>
</mb-input-group>
:::

## 2、 API 配置

### 2.1、 参数

| 参数     | 说明         | 类型    | 默认值 | 可选值             |
| -------- | ------------ | ------- | ------ | ------------------ |
| size     | 设置按钮大小 | String  | md     | xs、sm、md、lg、xl |
| disabled | 是否禁用状态 | Boolean | false  | true               |
