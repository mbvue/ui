<template>
    <div class="mb-button-group" @click="onClick">
        <slot />
    </div>
</template>

<script>
import { vueVer } from '../../base/utils/env';

export default {
    name: 'MbButtonGroup',

    props: {
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        disabled: { type: Boolean, default: false } //是否禁用状态
    },

    methods: {
        //点击事件
        onClick(event) {
            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        }
    }
};
</script>
