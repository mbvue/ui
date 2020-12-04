# Form 表单

## 1、 案例

### 1.1、 基础使用

:::demo vue

<template>
    <mb-form ref="form" :model="formData" labelWidth="60">
        <mb-form-item required help="请输入内容" label="内容" prop="content1"><mb-input v-model="formData.content1" /></mb-form-item>
        <mb-form-item required help="请输入内容" label="内容" prop="content2"><mb-input v-model="formData.content2" border="bottom" /></mb-form-item>
        <mb-form-item required help="请输入内容" label="内容" prop="content3"><mb-input-number v-model="formData.content3" placeholder="请输入内容"/></mb-form-item>
        <mb-form-item required help="请选择内容" label="年龄" prop="content4">
            <mb-radio-group v-model="formData.content4">
                <mb-radio defaultChecked checkedValue="1">1岁</mb-radio>&nbsp;&nbsp;
                <mb-radio checkedValue="2">2岁</mb-radio>
            </mb-radio-group>
        </mb-form-item>
        <mb-form-item required help="请选择内容" label="年龄" prop="content5">
            <mb-checkbox-group v-model="formData.content5">
                <mb-checkbox defaultChecked checkedValue="1">复选框</mb-checkbox>&nbsp;&nbsp;
                <mb-checkbox checkedValue="2">复选框</mb-checkbox>
            </mb-checkbox-group>
        </mb-form-item>
        <mb-form-item :colon="false">
            <mb-button type="primary" @click="action">提交</mb-button>&nbsp;&nbsp;
            <mb-button @click="reset">重置</mb-button>
        </mb-form-item>
    </mb-form>
</template>
<script>
    export default {
        data() {
            return {
                formData: {
                    content1: '',
                    content2: '',
                    content3: null,
                    content4: null,
                    content5: []
                }
            }
        },
        methods: {
            action() {
                this.$refs.form.validate();
            },
            reset() {
                this.$refs.form.resetFields();
            }
        }
    };
</script>
:::

### 1.2、 隐藏必填

:::demo html

<mb-form>
    <mb-form-item required hideRequiredMark label="姓名"><mb-input /></mb-form-item>
    <mb-form-item required label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

<br/>

:::demo html

<mb-form hideRequiredMark>
    <mb-form-item required label="姓名"><mb-input /></mb-form-item>
    <mb-form-item required label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.3、 label 后面的冒号

:::demo html

<mb-form>
    <mb-form-item :colon="false" label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

<br/>

:::demo html

<mb-form :colon="false">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.4、 label 宽度

:::demo html

<mb-form>
    <mb-form-item labelWidth="90" label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

<br/>

:::demo html

<mb-form labelWidth="90">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.5、 label 对齐方式

:::demo html

<mb-form labelWidth="90">
    <mb-form-item labelAlign="right" label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

<br/>

:::demo html

<mb-form labelWidth="90" labelAlign="right">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.6、 布局

#### 1.6.1、 horizontal 布局

:::demo html

<mb-form layout="horizontal">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

#### 1.6.2、 vertical 布局

:::demo html

<mb-form layout="vertical">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

#### 1.6.3、 inline 布局

:::demo html

<mb-form layout="inline">
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
    <mb-form-item label="年龄"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.7、 标签是否同宽

:::demo html

<mb-form sameWidth>
    <mb-form-item label="姓名"><mb-input /></mb-form-item>
</mb-form>
:::

### 1.8、 校验规则

:::demo vue

<template>
    <mb-form ref="form" :model="formData" labelWidth="60">
        <mb-form-item required help="请输入内容" label="姓名" prop="content1"><mb-input v-model="formData.content1" /></mb-form-item>
        <mb-form-item required help="请输入内容" label="姓名" prop="content2"><mb-input v-model="formData.content2" border="bottom" /></mb-form-item>
        <mb-form-item :rules="{ trigger: ['change', 'blur'], min: 3, message: '最小长度为三' }" label="姓名" prop="content3"><mb-input v-model="formData.content3" border="bottom" /></mb-form-item>
        <mb-form-item :colon="false">
            <mb-button type="primary" @click="action">提交</mb-button>&nbsp;&nbsp;
            <mb-button @click="reset">重置</mb-button>
        </mb-form-item>
    </mb-form>
</template>
<script>
    export default {
        data() {
            return {
                formData: {
                    content1: '',
                    content2: '',
                    content3: ''
                }
            }
        },
        methods: {
            action() {
                this.$refs.form.validate();
            },
            reset() {
                this.$refs.form.resetFields();
            }
        }
    };
</script>
:::

<br/>

:::demo vue

<template>
    <mb-form ref="form" :model="formData" :rules="formRules" labelWidth="60">
        <mb-form-item label="姓名" prop="content1"><mb-input v-model="formData.content1" /></mb-form-item>
        <mb-form-item label="姓名" prop="content2"><mb-input v-model="formData.content2" border="bottom" /></mb-form-item>
        <mb-form-item label="姓名" prop="content3"><mb-input v-model="formData.content3" border="bottom" /></mb-form-item>
        <mb-form-item :colon="false">
            <mb-button type="primary" @click="action">提交</mb-button>&nbsp;&nbsp;
            <mb-button @click="reset">重置</mb-button>
        </mb-form-item>
    </mb-form>
</template>
<script>
    export default {
        data() {
            return {
                formData: {
                    content1: '',
                    content2: '',
                    content3: ''
                },
                formRules: {
                    content1: [{ trigger: ['change', 'blur'], required: true, message: '请输入内容' }],
                    content2: [{ trigger: ['change', 'blur'], required: true, message: '请输入内容' }],
                    content3: [{ trigger: ['change', 'blur'], min: 3, message: '最小长度为三' }]
                }
            }
        },
        methods: {
            action() {
                this.$refs.form.validate();
            },
            reset() {
                this.$refs.form.resetFields();
            }
        }
    };
</script>
:::

## 2、 API 配置

### 2.1、 From 参数

| 参数             | 说明                                               | 类型           | 默认值     | 可选值                     |
| ---------------- | -------------------------------------------------- | -------------- | ---------- | -------------------------- |
| model            | 表单数据对象                                       | Object         | -          | -                          |
| rules            | 验证规则                                           | Object         | -          | -                          |
| hideRequiredMark | 隐藏所有表单项的必选标记                           | Boolean        | false      | true                       |
| sameWidth        | 是否 input 等组件 宽度 100%                        | Boolean        | false      | true                       |
| layout           | 布局                                               | String         | horizontal | horizontal vertical inline |
| colon            | 配合 label 属性使用，表示是否显示 label 后面的冒号 | Boolean        | true       | false                      |
| labelWidth       | label 的宽度，单位 px                              | String, Number | -          | -                          |
| labelAlign       | lable 字体的对齐方式                               | String         | left       | left right center          |
| labelStyle       | lable 的样式，对象形式                             | Object         | -          | -                          |
| childrenStyle    | 节点的样式，对象形式                               | Object         | -          | -                          |

### 2.2、 FromItem 参数

| 参数             | 说明                                                 | 类型           | 默认值     | 可选值                     |
| ---------------- | ---------------------------------------------------- | -------------- | ---------- | -------------------------- |
| rules            | 验证规则                                             | Object, Array  | -          | -                          |
| prop             | 表单域 model 字段                                    | String         | -          | -                          |
| help             | 设置 required 的提示信息，或者校验规则未设置 message | String         | -          | -                          |
| layout           | 布局                                                 | String         | horizontal | horizontal vertical inline |
| hideRequiredMark | 隐藏所有表单项的必选标记                             | Boolean        | false      | true                       |
| required         | 是否显必填                                           | Boolean        | false      | true                       |
| sameWidth        | 是否 input 等组件 宽度 100%                          | Boolean        | false      | true                       |
| colon            | 配合 label 属性使用，表示是否显示 label 后面的冒号   | Boolean        | true       | false                      |
| label            | label 文本                                           | String         | -          | -                          |
| labelFor         | 设置子元素 label for 属性                            | String         | -          | -                          |
| labelWidth       | label 的宽度，单位 px                                | String, Number | -          | -                          |
| labelAlign       | lable 字体的对齐方式                                 | String         | left       | left right center          |
| labelStyle       | lable 的样式，对象形式                               | Object         | -          | -                          |
| childrenStyle    | 节点的样式，对象形式                                 | Object         | -          | -                          |

### 2.3、 校验规则

| 参数      | 说明                                         | 类型            | 默认值 | 可选值                             |
| --------- | -------------------------------------------- | --------------- | ------ | ---------------------------------- |
| trigger   | 校验触发的时机                               | String, Array   | -      | 'blur' 'change' ['change', 'blur'] |
| enum      | 枚举值，用英文逗号分割                       | String          | -      | -                                  |
| len       | 字段长度                                     | Number          | -      | -                                  |
| max       | 最大长度                                     | Number          | -      | -                                  |
| min       | 最小长度                                     | Number          | -      | -                                  |
| message   | 校验文案                                     | String          | -      | -                                  |
| pattern   | 正则表达式校验                               | RegExp          | -      | -                                  |
| required  | 是否必选                                     | Boolean         | -      | -                                  |
| validator | 自定义校验，返回 true 为成功，false 则为失败 | Function(value) | -      | -                                  |
| space     | 是否去除前后空格校验                         | Boolean         | false  | true                               |

### 2.4、 From 方法

| 方法名        | 说明                         | 参数                                     | 返回参数                                                                                   |
| ------------- | ---------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| validate      | 对整个表单进行校验的方法     | callback(回调方法)                       | valid(全部正确为 true，否则为 false)，data(表单数据)，error(错误信息：[{ prop, message }]) |
| validateField | 对部分表单字段进行校验的方法 | fields(字段名称数组), callback(回调方法) | valid(全部正确为 true，否则为 false)，data(表单数据)，error(错误信息：[{ prop, message }]) |
| resetFields   | 对整个表单进行重置           | -                                        | -                                                                                          |
