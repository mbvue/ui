# InputSearch 搜索框

## 1、 案例

### 1.1、 基础使用

:::demo html

<mb-input-search placeholder="请输入内容"/>
:::

### 1.2、 左侧图标

:::demo html

<mb-input-search icon placeholder="请输入内容"/>
:::

### 1.3、 右侧配置

:::demo html

<mb-input-search actionText="搜索" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search :action="false" actionText="搜索" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search actionFixed placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search actionButton placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search loading placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search loading actionButton :actionSize="18" placeholder="请输入内容"/>
:::

### 1.4、 禁用

:::demo html

<mb-input-search disabled placeholder="请输入内容"/>
<mb-input-search disabled actionButton placeholder="请输入内容"/>
:::

### 1.5、 尺寸

:::demo html

<mb-input-search size="xs" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-search size="sm" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-search size="md" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-search size="lg" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-search size="xl" placeholder="请输入内容"/>
:::

### 1.6、 清除

:::demo html

<mb-input-search allowClear placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search allowClear actionFixed placeholder="请输入内容"/>
:::

### 1.7、 边框

:::demo html

<mb-input-search border="top" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search border="left" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search border="bottom" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search border="right" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-search :border="false" placeholder="请输入内容"/>
:::

## 2、 API 配置

### 2.1、 参数

| 参数             | 说明                                            | 类型            | 默认值 | 可选值                                                |
| ---------------- | ----------------------------------------------- | --------------- | ------ | ----------------------------------------------------- |
| icon             | 左侧图标，false：不显示，字符串为 icon 样式编码 | Boolean, String | false  | true                                                  |
| iconSize         | 左侧图标尺寸                                    | Number          | 16     | -                                                     |
| iconStyle        | 左侧图标自定义样式                              | Object          | -      | -                                                     |
| placeholder      | placeholder 显示值                              | String          | -      | -                                                     |
| placeholderStyle | placeholder 的样式,仅支持 uni-app               | String          | -      | -                                                     |
| allowClear       | 可以点击清除图标删除内容                        | Boolean         | false  | true                                                  |
| defaultValue     | 初始值                                          | String          | -      | -                                                     |
| value(v-model)   | 当前值                                          | String          | -      | -                                                     |
| autoFocus        | 自动获取焦点                                    | Boolean         | false  | true                                                  |
| disabled         | 禁用                                            | Boolean         | false  | true                                                  |
| loading          | 右侧图标加载中                                  | Boolean         | false  | true                                                  |
| action           | 右侧图标，false：不显示，字符串为 icon 样式编码 | Boolean, String | true   | false                                                 |
| actionFixed      | 右侧图标浮动                                    | Boolean         | false  | true                                                  |
| actionSize       | 右侧图标尺寸                                    | Number          | 16     | -                                                     |
| actionText       | 右侧文字                                        | String          | -      | -                                                     |
| actionButton     | 右侧是按钮                                      | String, Boolean | false  | true default primary success warning danger info dark |
| actionStyle      | 左侧图标自定义样式                              | Object          | -      | -                                                     |
| buttonStyle      | 左侧按钮自定义样式                              | Object          | -      | -                                                     |
| customStyle      | 自定义输入框的样式                              | Object          | -      | -                                                     |
| value(v-model)   | 当前值                                          | Number          | -      | -                                                     |
| id               | 输入框的 id                                     | String          | -      | -                                                     |
| border           | 边框                                            | Boolean, String | true   | top left bottom right                                 |
| maxLength        | 最大长度                                        | Number          | -      | -                                                     |
| size             | 输入框大小                                      | String          | md     | xs、sm、md、lg、xl                                    |
| confirmType      | 设置键盘右下角按钮的文字，仅在 uni-app 中生效   | String          | done   | -                                                     |
| cursorSpacing    | 指定光标与键盘的距离，单位 px                   | Number          | 0      | -                                                     |
| trim             | 是否自动去除两端的空格                          | Boolean         | true   | false                                                 |
| enterSearch      | 是否回车触发查询                                | Boolean         | true   | false                                                 |
| history          | 历史搜索记录                                    | Array           | []     | -                                                     |

### 2.2、插槽

| 名称   | 说明           |
| ------ | -------------- |
| icon   | 自定义左侧图标 |
| action | 自定义右侧图标 |

### 2.3、事件

| 事件名  | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| focus   | 获取光标事件             | event    |
| blur    | 失去光标事件             | event    |
| change  | 内容改变事件             | value    |
| enter   | 回车事件                 | event    |
| confirm | 提交事件，仅支持 uni-app | value    |
| search  | 右侧点击查询事件         | value    |
