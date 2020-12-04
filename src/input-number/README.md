# InputNumber 数字输入框

## 1、 案例

### 1.1、 基础使用

:::demo html

<mb-input-number placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-number :less="false" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-number :add="false" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-number :less="false" :add="false" :step="0.01" placeholder="请输入内容"/>
<br/>
<br/>
<mb-input-number :less="false" :add="false" :step="0.01" :action="true" :customStyle="{ border: '1px solid #dee2e6', background: '#ffffff' }" placeholder="请输入内容"/>
:::

### 1.2、 禁用

:::demo html

<mb-input-number disabled placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number disabledInput placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number disabled disabledInput placeholder="请输入内容"/>
:::

### 1.3、 尺寸

:::demo html

<mb-input-number size="xs" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number size="sm" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number size="md" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number size="lg" placeholder="请输入内容"/>&nbsp;&nbsp;
<mb-input-number size="xl" placeholder="请输入内容"/>
:::

## 2、 API 配置

### 2.1、 参数

| 参数             | 说明                                              | 类型    | 默认值 | 可选值             |
| ---------------- | ------------------------------------------------- | ------- | ------ | ------------------ |
| less             | 是否显示左侧减                                    | Boolean | true   | false              |
| lessStyle        | 左侧减自定义样式                                  | Object  | -      | -                  |
| add              | 是否显示右侧加                                    | Boolean | true   | false              |
| addStyle         | 右侧加自定义样式                                  | Object  | -      | -                  |
| customStyle      | 自定义输入框的样式                                | Object  | -      | -                  |
| action           | 是否显示输入框右侧操作按钮                        | Boolean | false  | true               |
| placeholder      | placeholder 显示值                                | String  | -      | -                  |
| placeholderStyle | placeholder 的样式,仅支持 uni-app                 | String  | -      | -                  |
| defaultValue     | 初始值                                            | Number  | -      | -                  |
| autoFocus        | 自动获取焦点                                      | Boolean | false  | true               |
| disabled         | 禁用输入框                                        | Boolean | false  | true               |
| disabledInput    | 禁用输入框                                        | Boolean | false  | true               |
| min              | 最小值                                            | Number  | 0      | -                  |
| max              | 最大值                                            | Number  | 99999  | -                  |
| precision        | 数值精度(小数点位数)                              | Number  | 2      | -                  |
| size             | 输入框大小                                        | String  | md     | xs、sm、md、lg、xl |
| step             | 每次改变步数，可以为小数                          | Number  | 1      | -                  |
| value(v-model)   | 当前值                                            | Number  | -      | -                  |
| cursorSpacing    | 指定光标于键盘的距离，避免键盘遮挡输入框，单位 px | Number  | 0      | -                  |
| longPress        | 是否开启长按连续递增或递减                        | Boolean | true   | false              |
| pressTime        | 开启长按触发后，每触发一次需要多久，单位 ms       | Number  | 250    | -                  |
| scroll           | 鼠标滚动数字增加/减少                             | Boolean | true   | false              |

### 2.2、插槽

| 名称 | 说明               |
| ---- | ------------------ |
| less | 自定义左侧操作图标 |
| add  | 自定义右侧操作图标 |

### 2.3、事件

| 事件名    | 说明                     | 回调参数 |
| --------- | ------------------------ | -------- |
| focus     | 获取光标事件             | event    |
| blur      | 失去光标事件             | event    |
| change    | 内容改变事件             | value    |
| enter     | 回车事件                 | event    |
| lessition | 减少点击事件             | value    |
| addition  | 增加点击事件             | value    |
| confirm   | 提交事件，仅支持 uni-app | value    |
