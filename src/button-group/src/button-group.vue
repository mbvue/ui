<template>
    <div :class="['mb-button-group', size ? 'mb-button-group-' + size : '']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MbButtonGroup',

    props: {
        size: { type: String, default: '' } //设置按钮大小，可选值为 xs sm md lg xl 或者不设
    }
};
</script>
