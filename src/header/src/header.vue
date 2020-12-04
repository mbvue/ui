<template>
    <div class="mb-header" :style="divStyle">
        <slot />
    </div>
</template>

<script>
import { unit } from '../../base/utils/util';

export default {
    name: 'MbHeader',

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
