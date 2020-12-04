<template>
    <div :class="buildDivClass" :style="buildStyle" @click="onClick">
        <div class="mb-switch-label">
            <template v-if="checkedStatus">
                <template v-if="$slots.checkedText"><slot name="checkedText" /></template>
                <template v-else>{{ checkedText }}</template>
            </template>

            <template v-else>
                <template v-if="$slots.defaultText"><slot name="defaultText" /></template>
                <template v-else>{{ defaultText }}</template>
            </template>
        </div>

        <div class="mb-switch-botton">
            <mb-icon v-if="loading" :type="loadingIcon" :size="buildLoadingSize" :spin="true" />
        </div>
    </div>
</template>

<script>
import { vue, uniApp, vueVer } from '../../base/utils/env';
import { transNumber } from '../../base/utils/util';

export default {
    name: 'MbSwitch',

    components: {
        'mb-icon': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    props: {
        disabled: { type: Boolean, default: false }, //是否禁用状态
        checked: { type: Boolean, default: false }, //是否被选中
        defaultChecked: { type: Boolean, default: false }, //初始是否选中
        checkedValue: { type: [String, Number, Boolean], default: true }, //选中的值
        defaultValue: { type: [String, Number, Boolean], default: false }, //未选中的值
        checkedText: { type: String, default: '' }, //选中的显示文本
        defaultText: { type: String, default: '' }, //未选中的显示文本
        loading: { type: Boolean, default: false }, //加载中
        loadingIcon: { type: String, default: 'spinner' }, //自定义加载中图标
        loadingSize: { type: [String, Number], default: 16 }, //自定义加载中图标尺寸
        vibrateShort: { type: Boolean, default: false }, //是否使手机发生短促震动，目前只在iOS的微信小程序和微信小程序开发工具有效
        size: { type: String, default: '' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' }, //选中状态下的颜色
        defaultColor: { type: String, default: '' } //未选中状态下的颜色
    },

    emits: ['input', 'change', 'update:checked'],

    data() {
        return {
            checkedStatus: this.defaultChecked || this.checked || false //是否选中
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-switch'];

            if (this.disabled || this.loading) cls.push(`mb-switch-disabled`);
            if (this.checkedStatus) cls.push(`mb-switch-checked`);
            if (this.size) cls.push(`mb-switch-${this.size}`);

            return cls;
        },

        //构建样式
        buildStyle() {
            let style = {};

            if (this.checkedStatus && this.activeColor) style.backgroundColor = this.activeColor;
            if (!this.checkedStatus && this.defaultColor) style.backgroundColor = this.defaultColor;

            return style;
        },

        //构建加载中图标尺寸
        buildLoadingSize() {
            return transNumber(this.loadingSize);
        }
    },

    watch: {
        //监听选中状态改变
        checked(nVal) {
            this.setValue(nVal).then(data => {
                this.$emit('input', data);
                this.$emit('change', data);
            });
        },

        //监听值改变
        value(nVal) {
            this.setValue(this.checkedValue === nVal ? true : false).then(data => {
                this.$emit('update:checked', this.buildStatus);
                this.$emit('change', data);
            });
        }
    },

    methods: {
        //设置值
        setValue(checked) {
            this.checkedStatus = checked;

            if (this.vibrateShort && uniApp) uniApp.vibrateShort();

            return Promise.resolve(this.checkedStatus ? this.checkedValue : this.defaultValue);
        },

        //点击事件
        onClick(event) {
            if (this.disabled || this.loading) return;

            //设置值
            this.setValue(!this.checkedStatus).then(data => {
                this.$emit('update:checked', this.checkedStatus);
                this.$emit('input', data);
                this.$emit('change', data);
            });

            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        }
    }
};
</script>
