<template>
    <div :class="buildDivClass" tabindex="0" @click="onClick" @blur="onBlur">
        <div :class="buildIconClass" :style="buildIconBorderColor">
            <div class="mb-checkbox-icon-round" :style="buildIconBgColor"></div>
        </div>

        <div class="mb-checkbox-label">
            <slot />
        </div>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { vueVer } from '../../base/utils/env';

export default {
    name: 'MbCheckbox',

    mixins: [Mixins],

    props: {
        disabled: { type: Boolean, default: null }, //是否禁用状态
        checked: { type: Boolean, default: false }, //是否被选中
        defaultChecked: { type: Boolean, default: false }, //初始是否选中
        value: { type: [String, Number, Boolean], default: null }, //选中内容
        modelValue: { type: [String, Number, Boolean], default: null }, //选中内容
        checkedValue: { type: [String, Number, Boolean], default: true }, //选中的值
        defaultValue: { type: [String, Number, Boolean], default: false }, //未选中的值
        indeterminate: { type: Boolean, default: null }, //只控制半选样式
        shape: { type: String, default: '' }, //设置按钮形状，可选值为 circle pill square 或者不设
        size: { type: String, default: '' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' } //选中状态下的颜色
    },

    emits: ['input', 'update:modelValue', 'blur', 'update:checked'],

    data() {
        return {
            checkedStatus: this.defaultChecked || this.checked || this.modelValue || false //是否选中
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-checkbox'];

            if (this.buildDisabled) cls.push(`mb-checkbox-disabled`);
            if (this.buildStatus) cls.push(`mb-checkbox-checked`);
            if (this.buildIndeterminate) cls.push(`mb-checkbox-indeterminate`);

            return cls;
        },

        //构建图标Class
        buildIconClass() {
            let cls = ['mb-checkbox-icon'];

            if (this.buildSize) cls.push(`mb-checkbox-icon-${this.buildSize}`);
            if (this.buildShape) cls.push(`mb-checkbox-icon-${this.buildShape}`);

            return cls;
        },

        //构建图标边框样式
        buildIconBorderColor() {
            let style = {};

            if (this.buildActiveColor && this.buildStatus) style.borderColor = this.buildActiveColor;
            if (this.buildActiveColor && this.buildStatus) style.backgroundColor = this.buildActiveColor;

            return style;
        },

        //构建图标背景样式
        buildIconBgColor() {
            let style = {};

            if (this.buildActiveColor && this.buildIndeterminate && this.buildStatus) style.backgroundColor = this.buildActiveColor;

            return style;
        },

        //是否禁用
        buildDisabled() {
            return this.disabled !== null ? this.disabled : this.parent ? this.parent.disabled : false;
        },

        //按钮形状
        buildShape() {
            return this.shape ? this.shape : this.parent ? this.parent.shape : 'pill';
        },

        //按钮大小
        buildSize() {
            return this.size ? this.size : this.parent ? this.$parent.size : 'md';
        },

        //选中状态下的颜色
        buildActiveColor() {
            return this.activeColor ? this.activeColor : this.parent ? this.parent.activeColor : '';
        },

        //构建状态
        buildStatus() {
            if (!this.parent) return this.checkedStatus;

            return this.parent.checkedValue.find(item => item === this.checkedValue) ? true : false;
        },

        //半选样式
        buildIndeterminate() {
            return this.indeterminate !== null ? this.indeterminate : this.parent ? this.parent.indeterminate : false;
        }
    },

    watch: {
        //监听选中状态改变
        checked(nVal) {
            this.setValue(nVal).then(data => {
                this.$emit('input', data);
                this.$emit('update:modelValue', data);

                this.$nextTick(() => {
                    if (this.item) this.item.onFieldChange(this.inputValue);
                });
            });
        },

        //监听值改变
        value(nVal) {
            this.setValue(this.checkedValue === nVal ? true : false).then(() => {
                this.$emit('update:checked', this.buildStatus);
            });
        },

        //监听值改变
        modelValue(nVal) {
            this.setValue(this.checkedValue === nVal ? true : false).then(() => {
                this.$emit('update:checked', this.buildStatus);
            });
        }
    },

    beforeMount() {
        this.parent = this.getParent('MbCheckboxGroup');
        this.item = this.getParent('MbFormItem');

        //默认选中处理
        if ((this.defaultChecked || this.checked) && this.parent && this.parent.setValue) this.parent.setValue(this.checkedValue, true);
    },

    methods: {
        //设置值
        setValue(checked) {
            this.checkedStatus = checked;

            let data = this.checkedStatus ? this.checkedValue : this.defaultValue;
            if (this.parent && this.parent.setValue) this.parent.setValue(this.checkedValue, this.checkedStatus);

            return Promise.resolve(data);
        },

        //点击事件
        onClick(event) {
            if (this.buildDisabled) return;

            //设置值
            this.setValue(!this.buildStatus).then(data => {
                this.$emit('update:checked', this.buildStatus);
                this.$emit('input', data);
                this.$emit('update:modelValue', data);

                this.$nextTick(() => {
                    if (this.item) this.item.onFieldChange(this.inputValue);
                });
            });

            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        },

        //失去光标
        onBlur(event) {
            this.$emit('blur', event);

            if (this.item) this.item.onFieldBlur(this.inputValue);
        }
    }
};
</script>
