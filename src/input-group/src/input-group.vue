<template>
    <div :class="buildClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MbInputGroup',

    props: {
        size: { type: String, default: '' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        disabled: { type: Boolean, default: false } //是否禁用状态
    },

    computed: {
        //构建样式
        buildClass() {
            let cls = ['mb-input-group'];

            if (this.size) cls.push(`mb-input-group-${this.size}`);

            return cls;
        }
    }
};
</script>
