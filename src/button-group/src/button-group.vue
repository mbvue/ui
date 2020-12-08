<template>
    <div class="mb-button-group" @click="onClick">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MbButtonGroup',

    props: {
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        disabled: { type: Boolean, default: false } //是否禁用状态
    },

    emits: ['click'],

    methods: {
        //点击事件
        onClick(event) {
            this.$emit('click', event);
        }
    }
};
</script>
