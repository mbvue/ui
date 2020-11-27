<template>
    <div :class="buildClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MbButtonGroup',

    props: {
        size: { type: String, default: '' } //设置按钮大小，可选值为 xs sm md lg xl 或者不设
    },

    computed: {
        //构建Class
        buildClass() {
            let cls = ['mb-button-group'];

            if (this.size) cls.push(`mb-button-group-${this.size}`);

            return cls;
        }
    }
};
</script>
