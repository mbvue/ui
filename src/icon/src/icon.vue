<template>
    <div class="mb-icon">
        <mb-image v-if="isImage" :src="type" :width="size" :height="size" :style="[buildStyle]" mode="aspectFit" loading-icon="none" error-icon="none" :fade="false"></mb-image>
        <div v-else :class="[buildClass]" :style="[buildStyle]"></div>
    </div>
</template>

<script>
import { unit } from '../../base/utils/util';
import Image from '../../image/src/image.vue';

export default {
    name: 'MbIcon',

    components: {
        'mb-image': Image
    },

    props: {
        type: { type: String, default: '' }, //图标类型
        css: {
            type: Object,
            default() {
                return {};
            }
        }, //图标样式
        size: { type: [String, Number], default: 16 }, //图标尺寸，单位 px
        color: { type: String, default: '' }, //图标颜色
        custom: { type: String, default: '' }, //自定义字体库
        spin: { type: Boolean, default: false }, //图标是否有旋转动画
        duration: { type: [String, Number], default: 1000 }, //旋转动画间隔时间，单位ms
        rotate: { type: [String, Number], default: 0 } //图标旋转角度
    },

    computed: {
        //判断是否是图片
        isImage() {
            return this.type.indexOf('/') !== -1;
        },

        //类名称
        buildClass() {
            return this.custom !== '' ? [this.custom, this.type] : ['mb-icon-icons', 'mb-icon-' + this.type];
        },

        //定义样式
        buildStyle() {
            let style = Object.assign({}, this.css);

            if (this.color !== '') style.color = this.color;
            if (!this.isImage) style.fontSize = unit(this.size);
            if (this.spin) style.animation = `mb-icon-rotate ${unit(this.duration, 'ms')} linear infinite`;
            if (this.rotate !== 0) style.transform = `rotate(${unit(this.rotate, 'deg')})`;

            return style;
        }
    }
};
</script>
