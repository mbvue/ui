# Input 输入框

## 1、 案例

### 1.1、基本使用

:::demo html

<div>
    左侧内容区域<mb-input placeholder="请输入内容" />右侧内容区域
</div>
:::

### 1.2、边框

:::demo html

<div>
    顶部边框:<br/>
    <mb-input border="top" placeholder="请输入内容" />
    <br/><br/>
    左侧边框:<br/>
    <mb-input border="left" placeholder="请输入内容" />
    <br/><br/>
    底部边框:<br/>
    <mb-input border="bottom" placeholder="请输入内容" />
    <br/><br/>
    右侧边框:<br/>
    <mb-input border="right" placeholder="请输入内容" />
    <br/><br/>
    无边框:<br/>
    <mb-input :border="false" placeholder="请输入内容" />
</div>
:::

### 1.3、禁用输入框

:::demo html

<div>
    <mb-input disabled placeholder="请输入内容" />
    <br/><br/>
    顶部边框:<br/>
    <mb-input border="top" disabled placeholder="请输入内容" />
    <br/><br/>
    左侧边框:<br/>
    <mb-input border="left" disabled placeholder="请输入内容" />
    <br/><br/>
    底部边框:<br/>
    <mb-input border="bottom" disabled placeholder="请输入内容" />
    <br/><br/>
    右侧边框:<br/>
    <mb-input border="right" disabled placeholder="请输入内容" />
    <br/><br/>
    无边框:<br/>
    <mb-input :border="false" disabled placeholder="请输入内容" />
</div>
:::

### 1.3、尺寸

:::demo html

<div>
    <mb-input size="xs" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="sm" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="md" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="lg" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="xl" placeholder="请输入内容" /> &nbsp;&nbsp;
</div>
:::

### 1.3、前缀图标

#### 1.3.1、普通前缀

:::demo html

<div>
    <mb-input size="xs" prefix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="sm" prefix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="md" prefix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="lg" prefix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="xl" prefix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
</div>
:::

#### 1.3.2、插槽前缀

:::demo html

<div>
    <mb-input placeholder="请输入内容">
        <template v-slot:prefix>
			<mb-icon type="spinner" :size="18" :spin="true"></mb-icon>
		</template>
    </mb-input>
</div>
:::

### 1.4、后缀图标

#### 1.4.1、普通后缀

:::demo html

<div>
    <mb-input size="xs" suffix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="sm" suffix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="md" suffix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="lg" suffix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
    <mb-input size="xl" suffix="user" placeholder="请输入内容" /> &nbsp;&nbsp;
</div>
:::

#### 1.4.2、插槽后缀

:::demo html

<div>
    <mb-input placeholder="请输入内容">
        <template v-slot:suffix>
			<mb-icon type="spinner" :size="18" :spin="true"></mb-icon>
		</template>
    </mb-input>
    <br/>
    <br/>
    <mb-input placeholder="请输入内容">
        <template v-slot:suffix>RMB</template>
    </mb-input>
</div>
:::

### 1.5、清除

:::demo html

<div>
    <mb-input allowClear placeholder="请输入内容" /> 
</div>
:::

### 1.6、文本框

#### 1.6.1、文本框尺寸

:::demo html

<div>
    <mb-input size="xs" type="textarea" placeholder="请输入内容" />
    <br/>
    <br/>
    <mb-input size="sm" type="textarea" placeholder="请输入内容" />
    <br/>
    <br/>
    <mb-input size="md" type="textarea" placeholder="请输入内容" />
    <br/>
    <br/>
    <mb-input size="lg" type="textarea" placeholder="请输入内容" />
    <br/>
    <br/>
    <mb-input size="xl" type="textarea" placeholder="请输入内容" />
</div>
:::

#### 1.6.1、自动高度文本框

:::demo html

<div>
    <mb-input autoHeight type="textarea" placeholder="请输入内容" />
</div>
:::

### 1.7、密码输入框

:::demo html

<div>
    <mb-input type="password" placeholder="请输入内容" />&nbsp;&nbsp;
    <mb-input passwordIcon type="password" placeholder="请输入内容" />
</div>
:::

### 1.8、下拉选择

:::demo html

<div>
    <mb-input type="select" placeholder="请输入内容" />
</div>
:::

### 1.9、数字输入框

:::demo html

<div>
    <mb-input type="number" placeholder="请输入内容" />
</div>
:::

## 2、 API 配置

### 2.1、 参数

| 参数             | 说明                                                                                  | 类型            | 默认值 | 可选值                                |
| ---------------- | ------------------------------------------------------------------------------------- | --------------- | ------ | ------------------------------------- |
| type             | 声明 input 类型，同原生 input 标签的 type 属性                                        | String          | text   | select、password、textarea、number    |
| id               | 输入框的 id                                                                           | String          | -      | -                                     |
| border           | 边框                                                                                  | String, Boolean | true   | true、false、top、left、bottom、right |
| disabled         | 是否禁用状态                                                                          | Boolean         | false  | true                                  |
| readonly         | 是否只读                                                                              | Boolean         | false  | true                                  |
| maxLength        | 最大长度                                                                              | Number          | -      | -                                     |
| size             | 输入框大小                                                                            | String          | md     | xs、sm、md、lg、xl                    |
| prefix           | 前缀图标                                                                              | String          | -      | -                                     |
| prefixSize       | 前缀图标尺寸                                                                          | Number          | 16     | -                                     |
| suffix           | 后缀图标                                                                              | String          | -      | -                                     |
| suffixSize       | 后缀图标尺寸                                                                          | Number          | 16     | -                                     |
| value(v-model)   | 输入框内容                                                                            | String,Number   | -      | -                                     |
| allowClear       | 可以点击清除图标删除内容                                                              | Boolean         | false  | true                                  |
| placeholder      | placeholder 显示值                                                                    | String          | -      | -                                     |
| placeholderStyle | placeholder 的样式,仅支持 uni-app                                                     | String          | -      | -                                     |
| confirmType      | 设置键盘右下角按钮的文字，仅在 uni-app 中 type 为 text 时生效                         | String          | done   | -                                     |
| autoFocus        | 是否自动获得焦点                                                                      | Boolean         | false  | true                                  |
| autoHeight       | 是否自动增高输入区域，type 为 textarea 时有效                                         | Boolean         | false  | true                                  |
| fixed            | 如果 type 为 textarea，且在一个"position:fixed"的区域，需要指明为 true,仅支持 uni-app | Boolean         | false  | true                                  |
| passwordIcon     | type 为 password 时，是否显示右侧的密码查看图标                                       | Boolean         | false  | true                                  |
| cursorSpacing    | 指定光标与键盘的距离，单位 px                                                         | Number          | 0      | -                                     |
| selectOpen       | type=select 时，旋转右侧的图标，标识当前处于打开还是关闭 select 的状态                | Boolean         | false  | true                                  |
| selectionStart   | 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用                             | String          | -1     | -                                     |
| selectionEnd     | 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用                           | String          | -1     | -                                     |
| trim             | 是否自动去除两端的空格                                                                | Boolean         | true   | false                                 |

### 2.2、插槽

| 名称   | 说明       |
| ------ | ---------- |
| prefix | 自定义前缀 |
| suffix | 自定义后缀 |

### 2.3、事件

| 事件名  | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| focus   | 获取光标事件             | event    |
| blur    | 失去光标事件             | event    |
| change  | 内容改变事件             | value    |
| enter   | 回车事件                 | event    |
| confirm | 提交事件，仅支持 uni-app | value    |
