<template>
    <div
        :class="[
            'mb-row',
            type ? 'mb-row-' + type : '',
            type && type == 'flex' && align ? 'mb-row-flex-' + align : '',
            type && type == 'flex' && justify ? 'mb-row-flex-' + justify : ''
        ]"
        :style="[divStyle]"
    >
        <slot></slot>
    </div>
</template>

<script>
import { vue, versions } from '../../base/utils/env';
import { unit } from '../../base/utils/util';
import { isNumber, isObject, isArray } from '../../base/utils/test';

const V = vue();
const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const dimensionMaxMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

export default {
    name: 'MbRow',

    provide() {
        return {
            rowGutter: V.computed ? V.computed(() => this.newRowGutter) : () => this.newRowGutter,
            colGutter: V.computed ? V.computed(() => this.newColGutter) : () => this.newColGutter
        };
    },

    props: {
        type: { type: String, default: 'flex' }, //布局模式，可选 flex，现代浏览器 下有效
        align: { type: String, default: 'top' }, //flex 布局下的垂直对齐方式：top middle bottom full
        justify: { type: String, default: 'start' }, //flex 布局下的水平排列方式：start center end space-around space-between
        gutter: { type: [Number, Array, Object], default: 0 } //栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 12, md: 16, lg: 18, xl: 20, xxl: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]
    },

    data() {
        return {
            newRowGutter: 0,
            newColGutter: 0,
            match: false,
            mapRow: 0,
            mapCol: 0
        };
    },

    computed: {
        //定义样式
        divStyle() {
            let style = {};

            if (this.newRowGutter != 0) {
                style.marginLeft = unit(-this.newRowGutter);
                style.marginRight = unit(-this.newRowGutter);
            }

            if (this.newColGutter != 0) {
                style.marginTop = unit(-this.newColGutter);
                style.marginBottom = unit(-this.newColGutter);
            }

            return style;
        }
    },

    mounted() {
        if (isNumber(this.gutter)) {
            this.newRowGutter = this.gutter * 1;
            if (versions() === 2) this._provided.rowGutter = this.gutter * 1;
        } else if (isObject(this.gutter)) {
            this.mapRow = this.gutter;
            this.match = true;
        } else if (isArray(this.gutter)) {
            if (this.gutter[0]) this.mapRow = this.gutter[0];
            if (this.gutter[1]) this.mapCol = this.gutter[1];

            if (isNumber(this.mapRow) && isNumber(this.mapCol)) {
                this.newRowGutter = this.mapRow * 1;
                this.newColGutter = this.mapCol * 1;

                if (versions() === 2) {
                    this._provided.rowGutter = this.mapRow * 1;
                    this._provided.colGutter = this.mapCol * 1;
                }
            } else {
                this.match = true;
            }
        }

        //断点响应
        if (window && window.matchMedia && this.match) {
            this.medias = [];
            for (let obj in dimensionMaxMap) {
                let media = window.matchMedia(dimensionMaxMap[obj]);
                let listener = _media => {
                    this.responsiveHandler(_media.matches ? obj : responsiveArray[responsiveArray.indexOf(obj) + 1]);
                };

                media.addListener(listener);
                this.medias.push({ media: media, listener: listener });
                listener(media);
            }
        }

        if (versions() === 2) {
            this.$options.destroyed = [
                function destroyed() {
                    this.$options.unmounted();
                }
            ];
        }
    },

    unmounted() {
        if (this.medias) {
            for (let obj in this.medias) {
                if (this.medias[obj].media) this.medias[obj].media.removeListener(this.medias[obj].listener);
            }
        }
    },

    methods: {
        responsiveHandler(index) {
            if (isNumber(this.mapRow)) {
                this.newRowGutter = this.mapRow * 1;
                if (versions() === 2) this._provided.rowGutter = this.newRowGutter;
            } else if (isObject(this.mapRow)) {
                this.newRowGutter = this.mapRow[index] ? this.mapRow[index] * 1 : 0;
                if (versions() === 2) this._provided.rowGutter = this.newRowGutter;
            }

            if (isNumber(this.mapCol)) {
                this.newColGutter = this.mapCol * 1;
                if (versions() === 2) this._provided.colGutter = this.newColGutter;
            } else if (isObject(this.mapCol)) {
                this.newColGutter = this.mapCol[index] ? this.mapCol[index] * 1 : 0;
                if (versions() === 2) this._provided.colGutter = this.newColGutter;
            }
        }
    }
};
</script>
