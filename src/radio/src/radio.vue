<template>
    <div :class="buildDivClass" @click="onClick">
        <div :class="buildIconClass" :style="buildIconBorderColor">
            <div class="mb-radio-icon-round" :style="buildIconBgColor"></div>
        </div>

        <div class="mb-radio-label">
            <slot />
        </div>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { versions } from '../../base/utils/env';

const Vers = versions();

export default {
    name: 'MbRadio',

    mixins: [Mixins],

    props: {
        disabled: { type: [String, Boolean], default: '' }, //是否禁用状态
        checked: { type: Boolean, default: false }, //是否被选中
        defaultChecked: { type: Boolean, default: false }, //初始是否选中
        value: { type: [String, Number, Boolean], default: null }, //选中内容
        data: { type: [String, Number, Boolean], default: null }, //备选值
        shape: { type: String, default: '' }, //设置按钮形状，可选值为 circle pill square 或者不设
        size: { type: String, default: '' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' } //选中状态下的颜色
    },

    data() {
        return {
            checkedValue: this.defaultChecked || this.checked || false //是否选中
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-radio'];

            if (this.buildDisabled) cls.push(`mb-radio-disabled`);

            console.log(this.parent);
            if (
                this.checkedValue ||
                (this.parent && this.parent.$options.name === 'MbRadioGroup' && this.parent.$options.checkedValue != null && this.parent.$options.checkedValue == this.data)
            )
                cls.push(`mb-radio-checked`);

            return cls;
        },

        //构建图标Class
        buildIconClass() {
            let cls = ['mb-radio-icon'];

            if (this.buildSize) cls.push(`mb-radio-icon-${this.buildSize}`);
            if (this.buildShape) cls.push(`mb-radio-icon-${this.buildShape}`);

            return cls;
        },

        //构建图标边框样式
        buildIconBorderColor() {
            let style = {};

            if (this.buildActiveColor && this.checkedValue) style.borderColor = this.buildActiveColor;

            return style;
        },

        //构建图标背景样式
        buildIconBgColor() {
            let style = {};

            if (this.buildActiveColor && this.checkedValue) style.backgroundColor = this.buildActiveColor;

            return style;
        },

        //是否禁用
        buildDisabled() {
            return this.disabled !== '' ? this.disabled : this.parent ? this.parent.disabled : false;
        },

        //按钮形状
        buildShape() {
            return this.shape ? this.shape : this.parent ? this.parent.shape : 'circle';
        },

        //按钮大小
        buildSize() {
            return this.size ? this.size : this.parent ? this.$parent.size : 'md';
        },

        //选中状态下的颜色
        buildActiveColor() {
            return this.activeColor ? this.activeColor : this.parent ? this.parent.activeColor : '';
        }
    },

    watch: {
        checked(nVal) {
            this.setValue(nVal);
            this.$emit('input', this.checkedValue ? this.data : null);
        },

        value(nVal) {
            this.setValue(this.data == nVal && nVal != null ? true : false);
        }
    },

    beforeMount() {
        this.parent = this.getParent('MbRadioGroup');
    },

    methods: {
        //点击事件
        onClick(event) {
            if (this.buildDisabled) return;

            this.setValue(!this.checkedValue);
            this.$emit('update:checked', this.checkedValue);
            this.$emit('input', this.checkedValue ? this.data : null);

            //兼容vue2 点击事件
            if (Vers === 2) this.$emit('click', event);
        },

        //设置值
        setValue(checked) {
            this.checkedValue = checked;
            if (this.parent) this.parent.setValue(this.checkedValue ? this.data : null);
        }
    }
};
</script>
