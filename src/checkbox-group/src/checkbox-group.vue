<template>
    <div class="mb-checkbox-group" @click="onClick">
        <slot />
    </div>
</template>

<script>
import { versions } from '../../base/utils/env';

const Vers = versions();

export default {
    name: 'MbCheckboxGroup',

    props: {
        disabled: { type: Boolean, default: false }, //是否禁用状态
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }, //选中内容
        indeterminate: { type: Boolean, default: false }, //只控制半选样式
        shape: { type: String, default: 'pill' }, //设置按钮形状，可选值为 circle pill square 或者不设
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' } //选中状态下的颜色
    },

    data() {
        return {
            checkedValue: this.value || [] //选中值
        };
    },

    watch: {
        //监听值改变
        value(nVal) {
            this.checkedValue = nVal || [];
        }
    },

    methods: {
        //点击事件
        onClick(event) {
            //兼容vue2 点击事件
            if (Vers === 2) this.$emit('click', event);
        },

        //设置值
        setValue(value, checked) {
            if (checked) {
                this.checkedValue.push(value);
            } else {
                this.checkedValue = this.checkedValue.filter(item => item !== value);
            }

            this.$emit('change', this.checkedValue);
            this.$emit('input', this.checkedValue);
        }
    }
};
</script>
