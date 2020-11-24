<template>
    <div :class="['mb-layout', sider ? 'mb-layout-sider' : '']" :style="[divStyle]">
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

    data() {
        return {
            sider: false
        };
    },

    computed: {
        //定义样式
        divStyle() {
            return this.height ? { height: unit(this.height) } : {};
        }
    },

    methods: {
        setSiderClass() {
            this.sider = true;
        }
    }
};
</script>
