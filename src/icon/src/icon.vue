<template>
    <div class="mb-icon" @click="onClick">
        <div v-if="isImage" :style="[buildStyle]">
            <img :src="type" mode="aspectFit" style="width: 100%; height: auto" />
        </div>

        <div v-else :class="[buildClass]" :style="[buildStyle]"></div>
    </div>
</template>

<script>
import { vueVer } from '../../base/utils/env';
import { unit } from '../../base/utils/util';

export default {
    name: 'MbIcon',

    props: {
        type: { type: String, default: '' }, //图标类型
        customStyle: {
            type: Object,
            default() {
                return {};
            }
        }, //自定义图标样式
        size: { type: [String, Number], default: 16 }, //图标尺寸，单位 px
        color: { type: String, default: '' }, //图标颜色
        custom: { type: String, default: '' }, //自定义字体库
        spin: { type: Boolean, default: false }, //图标是否有旋转动画
        duration: { type: [String, Number], default: 1000 }, //旋转动画间隔时间，单位ms
        rotate: { type: [String, Number], default: 0 } //图标旋转角度
    },

    emits: ['click'],

    computed: {
        //判断是否是图片
        isImage() {
            return this.type.indexOf('/') !== -1;
        },

        //类名称
        buildClass() {
            return this.custom ? [this.custom, this.type] : ['mb-icon-icon', 'mb-icon-' + this.type];
        },

        //定义样式
        buildStyle() {
            let style = Object.assign({}, this.customStyle);

            if (this.color) style.color = this.color;
            if (this.isImage) {
                style.display = 'flex';
                style.alignItems = 'center';
                style.width = unit(this.size);
                style.height = unit(this.size);
            } else {
                style.fontSize = unit(this.size);
            }
            if (this.spin) style.animation = `mb-icon-rotate ${unit(this.duration, 'ms')} linear infinite`;
            if (this.rotate !== null && this.rotate !== '' && this.rotate !== 0) style.transform = `rotate(${unit(this.rotate, 'deg')})`;

            return style;
        }
    },

    methods: {
        //点击事件
        onClick(event) {
            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        }
    }
};
</script>
