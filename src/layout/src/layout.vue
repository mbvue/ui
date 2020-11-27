<template>
    <div :class="buildClass" :style="divStyle">
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
        //构建Class
        buildClass() {
            let cls = ['mb-layout'];

            if (this.sider) cls.push(`mb-layout-sider`);

            return cls;
        },

        //定义样式
        divStyle() {
            return this.height ? { height: unit(this.height) } : {};
        }
    },

    methods: {
        //设置包含Sider时添加class样式
        setSiderClass() {
            this.sider = true;
        }
    }
};
</script>
