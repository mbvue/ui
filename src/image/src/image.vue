<template>
    <div class="mb-image" :style="[divStyle]">
        <img
            v-show="!loading && (!error || errorIcon === 'none')"
            ref="img"
            :src="src"
            :mode="mode"
            :webp="webp"
            :lazy-load="lazyLoad"
            :show-menu-by-longpress="showMenuByLongpress"
            :style="[imgMode, { animation: animation }]"
            @load="imageLoad"
            @error="imgError"
        />

        <template v-if="loading">
            <slot v-if="$slots.loading" name="loading" :style="[{ animation: animation }]" />
            <mb-icon v-else-if="loadingIcon !== 'none'" :type="loadingIcon" :size="loadingIconSize" :style="[{ animation: animation }]" />
        </template>

        <template v-if="error">
            <slot v-if="$slots.error" name="error" :style="[{ animation: animation }]" />
            <mb-icon v-else-if="errorIcon !== 'none'" :type="errorIcon" :size="errorIconSize" :style="[{ animation: animation }]" />
        </template>
    </div>
</template>

<script>
import { vue, versions, uniApp } from '../../base/utils/env';
import { unit } from '../../base/utils/util';

export default {
    name: 'MbImage',

    components: {
        'mb-icon': versions() === 3 ? vue().defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    props: {
        src: { type: String, default: '' }, //图片资源地址
        mode: { type: String, default: 'aspectFill' }, //图片裁剪、缩放的模式
        width: { type: [String, Number], default: 300 }, //图片宽度，单位任意，如果为数值，则为px单位
        height: { type: [String, Number], default: 225 }, //图片高度，单位任意，如果为数值，则为px单位
        shape: { type: [String, Number], default: 'square' }, //图片形状，circle-圆形，pill-小圆角，square-方形，像素，单位任意，如果为数值，则为px单位
        lazyLoad: { type: Boolean, default: true }, //是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效
        showMenuByLongpress: { type: Boolean, default: false }, //是否开启长按图片显示识别小程序码菜单，仅微信小程序有效
        loadingIcon: { type: String, default: 'image' }, //加载中的图标，或者小图片
        loadingIconSize: { type: Number, default: 36 }, //加载中的图标尺寸
        errorIcon: { type: String, default: 'exclamation-circle' }, //加载失败的图标，或者小图片
        errorIconSize: { type: Number, default: 36 }, //加载失败的图标尺寸
        fade: { type: Boolean, default: true }, //是否需要淡入效果
        duration: { type: [String, Number], default: 500 }, //淡入效果过渡时间，单位ms
        webp: { type: Boolean, default: true }, //只支持网络资源，只对微信小程序有效
        bg: { type: String, default: '' } //背景颜色
    },

    data() {
        return {
            imgMode: {},
            loading: this.loadingIcon !== 'none' ? true : false,
            error: false
        };
    },

    computed: {
        //定义外层样式
        divStyle() {
            let style = {
                width: unit(this.width),
                height: unit(this.height)
            };

            if (this.shape) {
                if (this.shape === 'circle') {
                    style.borderRadius = '50%';
                } else if (this.shape === 'pill') {
                    style.borderRadius = '5%';
                } else if (this.shape !== 'square') {
                    style.borderRadius = unit(this.shape);
                }
            }

            if (this.bg) style.background = this.bg;

            return style;
        },

        //动画
        animation() {
            return this.fade ? `mb-image-fade ${unit(this.duration, 'ms')} ease` : '';
        }
    },

    methods: {
        //图片加载完成
        imageLoad() {
            if (!uniApp()) {
                //构建图片模式
                if (this.mode === 'scaleToFill') {
                    this.imgMode.width = '100%';
                    this.imgMode.height = '100%';
                } else if (this.mode === 'aspectFit') {
                    if (this.$refs.img.naturalWidth >= this.$refs.img.naturalHeight) {
                        this.imgMode.width = '100%';
                        this.imgMode.height = 'auto';
                    } else {
                        this.imgMode.width = 'auto';
                        this.imgMode.height = '100%';
                    }
                } else if (this.mode === 'aspectFill') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = 0;
                    this.imgMode.left = 0;

                    if (this.$refs.img.naturalWidth >= this.$refs.img.naturalHeight) {
                        this.imgMode.width = 'auto';
                        this.imgMode.height = '100%';
                        this.imgMode.left = -((this.$refs.img.naturalWidth / this.$refs.img.naturalHeight) * 100 - 100) / 2 + '%';
                    } else {
                        this.imgMode.width = '100%';
                        this.imgMode.height = 'auto';
                        this.imgMode.top = -((this.$refs.img.naturalHeight / this.$refs.img.naturalWidth) * 100 - 100) / 2 + '%';
                    }
                } else if (this.mode === 'widthFix') {
                    this.imgMode.height = '100%';
                } else if (this.mode === 'heightFix') {
                    this.imgMode.width = '100%';
                } else if (this.mode === 'top') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = 0;
                    this.imgMode.left = '50%';
                    this.imgMode.marginLeft = `-${this.$refs.img.naturalWidth / 2}px`;
                } else if (this.mode === 'bottom') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.bottom = 0;
                    this.imgMode.left = '50%';
                    this.imgMode.marginLeft = `-${this.$refs.img.naturalWidth / 2}px`;
                } else if (this.mode === 'center') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = '50%';
                    this.imgMode.left = '50%';
                    this.imgMode.marginLeft = `-${this.$refs.img.naturalWidth / 2}px`;
                    this.imgMode.marginTop = `-${this.$refs.img.naturalHeight / 2}px`;
                } else if (this.mode === 'left') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = '50%';
                    this.imgMode.marginTop = `-${this.$refs.img.naturalHeight / 2}px`;
                    this.imgMode.left = 0;
                } else if (this.mode === 'right') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = '50%';
                    this.imgMode.marginTop = `-${this.$refs.img.naturalHeight / 2}px`;
                    this.imgMode.right = 0;
                } else if (this.mode === 'top left') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = 0;
                    this.imgMode.left = 0;
                } else if (this.mode === 'top right') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.top = 0;
                    this.imgMode.right = 0;
                } else if (this.mode === 'bottom left') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.bottom = 0;
                    this.imgMode.left = 0;
                } else if (this.mode === 'bottom right') {
                    this.imgMode.position = 'absolute';
                    this.imgMode.bottom = 0;
                    this.imgMode.right = 0;
                }
            } else {
                this.imgMode.width = '100%';
                this.imgMode.height = '100%';
            }

            this.loading = false;
            this.$emit('load');
        },

        //图片加载失败
        imgError() {
            this.loading = false;
            if (this.$slots.error || this.errorIcon !== 'none') this.error = true;

            this.$emit('error');
        }
    }
};
</script>
