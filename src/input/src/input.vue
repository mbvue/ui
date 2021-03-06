<template>
    <div ref="input" :class="buildClass">
        <div v-if="$slots.addonBefore || addonBefore" class="mb-input-addon-before">
            <slot v-if="$slots.addonBefore" name="addonBefore" />
            <template v-else>{{ addonBefore }}</template>
        </div>

        <div :class="buildInputClass" :style="buildInputStyle">
            <div v-if="$slots.prefix || prefix" class="mb-input-prefix">
                <slot v-if="$slots.prefix" name="prefix" />
                <mb-icon v-else-if="prefix" :type="prefix" :size="prefixSize" />
            </div>

            <textarea
                v-if="buildType === 'textarea'"
                :id="id"
                ref="textarea"
                class="mb-input-input-input mb-input-input-textarea"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :disabled="buildDisabled"
                :readonly="readonly"
                :maxlength="maxLength"
                :value="inputValue"
                :focus="autoFocus"
                :autofocus="autoFocus"
                :autoHeight="autoHeight"
                :fixed="fixed"
                :cursorSpacing="cursorSpacing"
                :selectionStart="selectionStart"
                :selectionEnd="selectionEnd"
                @blur="onBlur"
                @focus="onFocus"
                @input="onInput"
                @confirm="onConfirm"
                @keyup.enter="onEnter"
            />

            <input
                v-else-if="buildType === 'number'"
                :id="id"
                class="mb-input-input-input"
                :type="buildType"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :disabled="buildDisabled"
                :readonly="readonly"
                :maxlength="maxLength"
                :value="inputValue"
                :confirmType="confirmType"
                :focus="autoFocus"
                :autofocus="autoFocus"
                :cursorSpacing="cursorSpacing"
                @blur="onBlur"
                @focus="onFocus"
                @input="onInput"
                @confirm="onConfirm"
                @keyup.enter="onEnter"
            />

            <input
                v-else
                :id="id"
                class="mb-input-input-input"
                :type="buildType"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :disabled="buildDisabled"
                :readonly="buildType === 'select' || readonly"
                :maxlength="maxLength"
                :password="type.toLowerCase() === 'password' ? true : false"
                :value="inputValue"
                :confirmType="confirmType"
                :focus="autoFocus"
                :autofocus="autoFocus"
                :cursorSpacing="cursorSpacing"
                :selectionStart="selectionStart"
                :selectionEnd="selectionEnd"
                @blur="onBlur"
                @focus="onFocus"
                @input="onInput"
                @confirm="onConfirm"
                @keyup.enter="onEnter"
            />

            <div v-if="allowClear || (type == 'password' && passwordIcon) || type == 'select' || $slots.suffix || suffix" class="mb-input-suffix">
                <transition name="mb-input-clear-fade">
                    <div v-if="allowClear && inputValue != '' && focused" class="mb-input-input-clear">
                        <mb-icon type="times-circle" :size="16" @mousedown="onClear" @touchstart="onClear" />
                    </div>
                </transition>

                <div v-if="type == 'password' && passwordIcon" class="mb-input-input-password">
                    <mb-icon :type="showPassword ? 'eye' : 'eye-slash'" :size="16" @mousedown="onPassword" @touchstart="onPassword" />
                </div>

                <div v-if="type == 'select'" :class="{ 'mb-input-input-select': true, 'mb-input-input-select-open': selectOpen }">
                    <mb-icon type="caret-down" :size="16" />
                </div>

                <div v-if="$slots.suffix || suffix" class="mb-input-suffix-suffix">
                    <slot v-if="$slots.suffix" name="suffix" />
                    <mb-icon v-else-if="suffix" :type="suffix" :size="suffixSize" />
                </div>
            </div>
        </div>

        <div v-if="$slots.addonAfter || addonAfter" class="mb-input-addon-after">
            <slot v-if="$slots.addonAfter" name="addonAfter" />
            <template v-else>{{ addonAfter }}</template>
        </div>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { vue, uniApp } from '../../base/utils/env';
import { isBoolean } from '../../base/utils/test';
import { unit, trim } from '../../base/utils/util';

export default {
    name: 'MbInput',

    components: {
        'mb-icon': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    mixins: [Mixins],

    props: {
        type: { type: String, default: 'text' }, //声明 input 类型，同原生 input 标签的 type 属性 select / password / textarea / number
        id: { type: String, default: null }, //输入框的 id
        border: { type: [Boolean, String], default: true }, //边框 top left bottom right
        readonly: { type: Boolean, default: false }, //是否只读
        disabled: { type: Boolean, default: null }, //是否禁用状态
        maxLength: { type: Number, default: -1 }, //最大长度
        size: { type: String, default: '' }, //输入框大小 xs、sm、md、lg、xl
        prefix: { type: String, default: '' }, //带有前缀图标的 input
        prefixSize: { type: Number, default: 16 }, //前缀图标尺寸
        suffix: { type: String, default: '' }, //带有后缀图标的 input
        suffixSize: { type: Number, default: 16 }, //后缀图标尺寸
        addonBefore: { type: String, default: '' }, //前缀内容
        addonAfter: { type: String, default: '' }, //后缀内容
        defaultValue: { type: [String, Number], default: '' }, //输入框默认内容
        value: { type: [String, Number], default: '' }, //输入框内容
        modelValue: { type: [String, Number], default: '' }, //输入框内容
        allowClear: { type: Boolean, default: false }, //可以点击清除图标删除内容
        placeholder: { type: String, default: '' }, //placeholder显示值
        placeholderStyle: { type: String, default: '' }, //placeholder的样式,仅支持uni-app
        confirmType: { type: String, default: 'done' }, //设置键盘右下角按钮的文字，仅在uni-app中type为text时生效
        customStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //自定义样式
        autoFocus: { type: Boolean, default: false }, //是否自动获得焦点
        autoHeight: { type: Boolean, default: false }, //是否自动增高输入区域，type为textarea时有效
        fixed: { type: Boolean, default: false }, //如果type为textarea，且在一个"position:fixed"的区域，需要指明为true,仅支持uni-app
        passwordIcon: { type: Boolean, default: false }, //type为password时，是否显示右侧的密码查看图标
        cursorSpacing: { type: Number, default: 0 }, //指定光标与键盘的距离，单位px
        selectOpen: { type: Boolean, default: false }, //type=select时，旋转右侧的图标，标识当前处于打开还是关闭select的状态
        selectionStart: { type: String, default: '-1' }, //光标起始位置，自动聚焦时有效，需与selection-end搭配使用
        selectionEnd: { type: String, default: '-1' }, //光标结束位置，自动聚焦时有效，需与selection-start搭配使用
        trim: { type: Boolean, default: true } //是否自动去除两端的空格
    },

    emits: ['focus', 'blur', 'change', 'input', 'update:modelValue', 'enter', 'confirm'],

    data() {
        return {
            inputValue: this.defaultValue || this.value || this.modelValue || '', //值
            baseHeight: null, //输入框基础高度
            focused: false, // 当前是否处于获得焦点的状态
            showPassword: false // 是否预览密码
        };
    },

    computed: {
        //构建类型
        buildType() {
            if (this.type.toLowerCase() === 'password' && (uniApp || this.showPassword)) return 'text';

            return this.type.toLowerCase();
        },

        //构建样式
        buildClass() {
            let cls = ['mb-input'];

            if (this.buildDisabled) cls.push('mb-input-disabled');
            if (this.buildSize) cls.push(`mb-input-${this.buildSize}`);
            if (this.buildType === 'textarea') cls.push('mb-input-textarea');
            if (this.buildType === 'textarea' && this.autoHeight) cls.push('mb-input-textarea-auto');
            if (this.buildType === 'select') cls.push('mb-input-select');
            if (this.$slots.prefix || this.prefix) cls.push(`mb-input-has-prefix`);
            if (this.allowClear || (this.type == 'password' && this.passwordIcon) || this.type == 'select' || this.$slots.suffix || this.suffix) cls.push(`mb-input-has-suffix`);

            return cls;
        },

        //构建Input样式
        buildInputClass() {
            let cls = ['mb-input-input'];

            if (isBoolean(this.border)) {
                cls.push(this.border ? 'mb-input-border-all' : '');
            } else if (this.border) {
                cls.push(`mb-input-border-${this.border}`);
            }

            if (this.focused) cls.push('mb-input-focused');

            return cls;
        },

        //构建Input样式
        buildInputStyle() {
            let style = Object.assign({}, this.customStyle);

            if (this.$slots.prefix || this.prefix) style.paddingLeft = unit(this.prefixSize + 10);
            if (this.allowClear || (this.type == 'password' && this.passwordIcon) || this.type == 'select' || this.$slots.suffix || this.suffix) {
                style.paddingRight = unit(this.suffixSize + 10);
            }

            return style;
        },

        //是否禁用
        buildDisabled() {
            return this.disabled !== null ? this.disabled : this.parent ? this.parent.disabled : false;
        },

        //按钮大小
        buildSize() {
            return this.size ? this.size : this.parent ? this.$parent.size : 'md';
        }
    },

    watch: {
        value(nVal, oVal) {
            this.inputValue = nVal;

            if (nVal != oVal && this.buildType === 'select') {
                this.onInput({ target: { value: nVal } });
            } else if (nVal != oVal) {
                this.$emit('change', nVal);
            }
        },

        modelValue(nVal, oVal) {
            this.inputValue = nVal;

            if (nVal != oVal && this.buildType === 'select') {
                this.onInput({ target: { value: nVal } });
            } else if (nVal != oVal) {
                this.$emit('change', nVal);
            }
        }
    },

    beforeMount() {
        this.parent = this.getParent('MbInputGroup');
        this.item = this.getParent('MbFormItem');
    },

    methods: {
        //输入处理
        onInput(event) {
            let value = event.target.value || event.detail.value;
            if (this.trim) value = trim(value);

            this.inputValue = value;
            this.$emit('input', this.inputValue);
            this.$emit('update:modelValue', this.inputValue);
            this.$emit('change', this.inputValue);

            //兼容web端自动增加高度
            if (this.buildType === 'textarea' && this.autoHeight && !uniApp) {
                if (!this.baseHeight) this.baseHeight = parseFloat(window.getComputedStyle(this.$refs.input, null).height) || 50;

                this.$refs.textarea.style.height = 'auto';
                this.$nextTick(() => {
                    this.$refs.input.style.height = (this.$refs.textarea.scrollHeight > this.baseHeight ? this.$refs.textarea.scrollHeight : this.baseHeight) + 'px';
                    this.$refs.textarea.style.height = '100%';
                });
            }

            this.$nextTick(() => {
                if (this.item) this.item.onFieldChange(this.inputValue);
            });
        },

        //获取光标
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },

        //失去光标
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);

            if (this.item) this.item.onFieldBlur(this.inputValue);
        },

        //确定提交
        onConfirm(event) {
            this.$emit('confirm', event.detail.value);
        },

        //回车事件
        onEnter(event) {
            this.$emit('enter', event);
        },

        //清除输入
        onClear(event) {
            event.stopPropagation();
            event.preventDefault();

            this.inputValue = '';
            this.$emit('input', '');
            this.$emit('update:modelValue', '');
            this.$emit('change', '');

            return false;
        },

        //显示密码
        onPassword(event) {
            event.stopPropagation();
            event.preventDefault();

            this.showPassword = !this.showPassword;

            return false;
        }
    }
};
</script>
