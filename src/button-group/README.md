# ButtonGroup 按钮组

## 1、 案例

### 1.1、 基础按钮

:::demo html

<div>
    <mb-button-group>
        <mb-button type="default">第一个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="default">第一个按钮</mb-button>
        <mb-button type="default">第二个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="default">第一个按钮</mb-button>
        <mb-button type="default">第二个按钮</mb-button>
        <mb-button type="default">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="default">第一个按钮</mb-button>
        <mb-button type="default">第二个按钮</mb-button>
        <mb-button type="default">第三个按钮</mb-button>
        <mb-button type="default">第四个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="danger">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
</div>
:::

### 1.2、 幽灵按钮

:::demo html

<div>
    <mb-button-group>
        <mb-button type="primary" ghost="dashed">第一个按钮</mb-button>
        <mb-button type="primary" ghost="dashed">第二个按钮</mb-button>
        <mb-button type="primary" ghost="dashed">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第二个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>
        <mb-button type="danger" ghost="ghost">第二个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>
        <mb-button type="danger" ghost="ghost">第二个按钮</mb-button>
        <mb-button type="danger" ghost="ghost">第三个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第四个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>
        <mb-button type="danger" ghost="ghost">第二个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第三个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第四个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="plain">第一个按钮</mb-button>
        <mb-button type="primary" ghost="plain">第二个按钮</mb-button>
        <mb-button type="primary" ghost="plain">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="link">第一个按钮</mb-button>
        <mb-button type="primary" ghost="link">第二个按钮</mb-button>
        <mb-button type="primary" ghost="link">第三个按钮</mb-button>
    </mb-button-group>
</div>
:::

### 1.3、 禁用按钮

:::demo html

<div>
    <mb-button-group>
        <mb-button type="primary" :disabled="true">第一个按钮</mb-button>
        <mb-button type="primary" :disabled="true">第二个按钮</mb-button>
        <mb-button type="primary" :disabled="true">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group>
        <mb-button type="primary" ghost="ghost" :disabled="true">第一个按钮</mb-button>
        <mb-button type="primary" ghost="ghost" :disabled="true">第二个按钮</mb-button>
        <mb-button type="primary" ghost="ghost" :disabled="true">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group disabled>
        <mb-button type="primary" ghost="ghost">第一个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第二个按钮</mb-button>
        <mb-button type="primary" ghost="ghost">第三个按钮</mb-button>
    </mb-button-group>
</div>
:::

### 1.4、 按钮尺寸

:::demo html

<div>
    <mb-button-group size="xs">
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group size="sm">
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group size="md">
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group size="lg">
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
    <br/>
    <br/>
    <mb-button-group size="xl">
        <mb-button type="primary">第一个按钮</mb-button>
        <mb-button type="primary">第二个按钮</mb-button>
        <mb-button type="primary">第三个按钮</mb-button>
    </mb-button-group>
</div>
:::

## 2、 API 配置

### 2.1、 参数

| 参数     | 说明         | 类型    | 默认值 | 可选值             |
| -------- | ------------ | ------- | ------ | ------------------ |
| size     | 设置按钮大小 | String  | md     | xs、sm、md、lg、xl |
| disabled | 是否禁用状态 | Boolean | false  | true               |

### 2.2、事件

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | event    |
