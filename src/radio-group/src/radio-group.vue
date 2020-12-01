<template>
    <div class="mb-radio-group" @click="onClick">
        <slot />
    </div>
</template>

<script>
import { versions } from '../../base/utils/env';

const Vers = versions();

export default {
    name: 'MbRadioGroup',

    props: {
        disabled: { type: Boolean, default: false }, //是否禁用状态
        value: { type: [String, Number, Boolean], default: null }, //选中内容
        shape: { type: String, default: 'circle' }, //设置按钮形状，可选值为 circle pill square 或者不设
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' } //选中状态下的颜色
    },

    data() {
        return {
            checkedValue: this.value //选中值
        };
    },

    watch: {
        //监听值改变
        value(nVal) {
            this.checkedValue = nVal;
        }
    },

    methods: {
        //点击事件
        onClick(event) {
            //兼容vue2 点击事件
            if (Vers === 2) this.$emit('click', event);
        },

        //设置值
        setValue(value) {
            if (this.checkedValue !== value) this.$emit('change', value);

            this.checkedValue = value;
            this.$emit('input', value);
        }
    }
};
</script>
