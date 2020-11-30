<template>
    <div :class="buildClass" :style="divStyle">
        <div class="mb-sider-content"><slot></slot></div>

        <div v-if="trigger" class="mb-sider-trigger" @click="collapsedClick">
            <mb-icon :type="newCollapsed ? triggerCollapsedIcon : triggerIcon" :size="buildTriggerIconSize" />
        </div>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { vue, versions } from '../../base/utils/env';
import { unit, transNumber } from '../../base/utils/util';

const Vers = versions();
const dimensionMaxMap = { xs: '479.98px', sm: '575.98px', md: '767.98px', lg: '991.98px', xl: '1199.98px', xxl: '1599.98px' };

export default {
    name: 'MbSider',

    components: {
        'mb-icon': Vers === 3 ? vue().defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    mixins: [Mixins],

    props: {
        width: { type: [String, Number], default: 200 }, //展开宽度
        collapsedWidth: { type: [String, Number], default: 60 }, //收起宽度
        collapsed: { type: Boolean, default: false }, //当前收起状态
        trigger: { type: Boolean, default: false }, //开启收缩栏状态
        triggerIcon: { type: String, default: 'angle-double-left' }, //收缩栏状态展开图标
        triggerCollapsedIcon: { type: String, default: 'angle-double-right' }, //收缩栏状态收缩图标
        triggerIconSize: { type: [String, Number], default: 16 }, //收缩栏状态图标尺寸
        breakpoint: { type: String, default: '' } //触发响应式布局的断点，可选值为 xs sm md lg xl xxl 或者不设
    },

    emits: ['collapse', 'breakpoint'],

    data() {
        return {
            newCollapsed: this.collapsed
        };
    },

    computed: {
        //构建Class
        buildClass() {
            let cls = ['mb-sider'];

            if (this.newCollapsed) cls.push(`mb-sider-collapsed`);

            return cls;
        },

        //定义样式
        divStyle() {
            let w = this.newCollapsed ? unit(this.collapsedWidth) : unit(this.width);

            return { flex: `0 0 ${w}`, width: `${w}`, minWidth: `${w}`, maxWidth: `${w}` };
        },

        //构建收缩栏状态图标尺寸
        buildTriggerIconSize() {
            return transNumber(this.triggerIconSize);
        }
    },

    watch: {
        //监听收缩状态
        collapsed(v) {
            this.newCollapsed = v;
            this.$emit('collapse', this.newCollapsed);
        }
    },

    mounted() {
        //设置父级布局Class
        if (this.$parent.$options.name === 'MbLayout' && this.$parent.setSiderClass) {
            this.$parent.setSiderClass();
        }

        //断点响应
        if (window && window.matchMedia && this.breakpoint && this.breakpoint in dimensionMaxMap) {
            this.media = window.matchMedia(`(max-width: ${dimensionMaxMap[this.breakpoint]})`);
            this.media.addListener(this.responsiveHandler);
            this.responsiveHandler(this.media);
        }
    },

    unmounted() {
        if (this.media) this.media.removeListener(this.responsiveHandler);
    },

    methods: {
        //响应式处理
        responsiveHandler(media) {
            this.newCollapsed = media.matches;

            this.$emit('breakpoint', this.newCollapsed);
            this.$emit('collapse', this.newCollapsed);
            this.$emit('update:collapsed', this.newCollapsed);
        },

        //收缩/展开事件
        collapsedClick() {
            this.newCollapsed = !this.newCollapsed;

            this.$emit('collapse', this.newCollapsed);
            this.$emit('update:collapsed', this.newCollapsed);
        }
    }
};
</script>
