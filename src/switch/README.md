# Switch 开关

## 1、 案例

### 1.1、 基础使用

:::demo html

<div>
    <mb-switch />&nbsp;&nbsp;
</div>
:::

### 1.2、 默认选中

:::demo html

<div>
    <mb-switch defaultChecked />&nbsp;&nbsp;
</div>
:::

### 1.3、 自定义文字

:::demo html

<div>
    <mb-switch checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch defaultChecked checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch checkedText="开" defaultText="关">
        <template v-slot:checkedText>
            <mb-icon type="check"></mb-icon>
        </template>
        <template v-slot:defaultText>
            <mb-icon type="times"></mb-icon>
        </template>
    </mb-switch>
</div>
:::

### 1.4、 禁用

:::demo html

<div>
    <mb-switch disabled />&nbsp;&nbsp;
    <mb-switch disabled defaultChecked />&nbsp;&nbsp;
    <mb-switch disabled checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch disabled defaultChecked checkedText="开" defaultText="关"/>&nbsp;&nbsp;
</div>
:::

### 1.5、 加载中

:::demo html

<div>
    <mb-switch loading checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch loading defaultChecked checkedText="开" defaultText="关"/>&nbsp;&nbsp;
</div>
:::

### 1.6、 尺寸

:::demo html

<div>
    <mb-switch size="xs"/>&nbsp;&nbsp;
    <mb-switch size="sm"/>&nbsp;&nbsp;
    <mb-switch size="md"/>&nbsp;&nbsp;
    <mb-switch size="lg"/>&nbsp;&nbsp;
    <mb-switch size="xl"/>&nbsp;&nbsp;
    <br/>
    <br/>
    <mb-switch size="xs" checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch size="sm" checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch size="md" checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch size="lg" checkedText="开" defaultText="关"/>&nbsp;&nbsp;
    <mb-switch size="xl" checkedText="开" defaultText="关"/>&nbsp;&nbsp;
</div>
:::

### 1.7、 自定义颜色

:::demo html

<div>
    <mb-switch activeColor="#e6a23c" defaultColor="#343a40"/>&nbsp;&nbsp;
    <mb-switch activeColor="#f56c6c" defaultColor="#67c23a"/>&nbsp;&nbsp;
</div>
:::

## 2、 API 配置

### 2.1、 参数

| 参数           | 说明                                                                      | 类型                    | 默认值         | 可选值 |
| -------------- | ------------------------------------------------------------------------- | ----------------------- | -------------- | ------ |
| disabled       | 是否禁用状态                                                              | Boolean                 | false          | true   |
| checked        | 是否被选中                                                                | Boolean                 | false          | true   |
| defaultChecked | 初始是否选中                                                              | Boolean                 | false          | true   |
| value(v-model) | 选中内容                                                                  | String, Number, Boolean | -              | -      |
| checkedValue   | 选中的值                                                                  | String, Number, Boolean | -              | -      |
| defaultValue   | 未选中的值                                                                | String, Number, Boolean | -              | -      |
| checkedText    | 选中的显示文本                                                            | String                  | -              | -      |
| defaultText    | 未选中的显示文本                                                          | String                  | -              | -      |
| loading        | 加载中                                                                    | Boolean                 | false          | true   |
| loadingIcon    | 自定义加载中图标                                                          | String                  | spinner        | -      |
| loadingSize    | 自定义加载中图标尺寸                                                      | String, Number          | 16             | -      |
| vibrateShort   | 是否使手机发生短促震动，目前只在 iOS 的微信小程序和微信小程序开发工具有效 | Boolean                 | false          | true   |
| size           | 设置按钮大小                                                              | String                  | xs sm md lg xl | md     |
| activeColor    | 选中状态下的颜色                                                          | String                  | -              | -      |
| defaultColor   | 未选中状态下的颜色                                                        | String                  | -              | -      |

### 2.2、插槽

| 名称        | 说明                   |
| ----------- | ---------------------- |
| checkedText | 自定义选中的显示文本   |
| defaultText | 自定义未选中的显示文本 |

### 2.3、事件

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | event    |
| change | 切换事件 | value    |
