<template>
    <div :class="['mb-layout']" :style="[divStyle]">
        <slot></slot>
    </div>
</template>

<script>
import { unit } from '../../base/utils/util';

export default {
    name: 'MbLayout',

    props: {
        height: { type: [String, Number], default: '' } //高度
    },

    computed: {
        //定义样式
        divStyle() {
            return this.height ? { height: unit(this.height) } : {};
        }
    }
};
</script>
