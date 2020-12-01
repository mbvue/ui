<template>
    <div class="mb-input-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MbInputGroup',

    props: {
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        disabled: { type: Boolean, default: false } //是否禁用状态
    }
};
</script>
