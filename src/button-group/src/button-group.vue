<template>
    <div class="mb-button-group" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
import { versions } from '../../base/utils/env';

const Vers = versions();

export default {
    name: 'MbButtonGroup',

    props: {
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        disabled: { type: Boolean, default: false } //是否禁用状态
    },

    methods: {
        //点击事件
        onClick(event) {
            //兼容vue2 点击事件
            if (Vers === 2) this.$emit('click', event);
        }
    }
};
</script>
