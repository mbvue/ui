<template>
    <div :class="buildClass" :style="[divStyle]" @click="onClick">
        <slot />
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { vue, vueVer } from '../../base/utils/env';
import { unit, transNumber } from '../../base/utils/util';
import { isNumber, isObject, isArray } from '../../base/utils/test';

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

    mixins: [Mixins],

    provide() {
        return {
            rowGutter: vue.computed ? vue.computed(() => this.newRowGutter) : () => this.newRowGutter,
            colGutter: vue.computed ? vue.computed(() => this.newColGutter) : () => this.newColGutter
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
        //构建Class
        buildClass() {
            let cls = ['mb-row'];

            if (this.type) {
                cls.push(`mb-row-${this.type}`);

                if (this.type.toLowerCase() === 'flex') {
                    if (this.align) cls.push(`mb-row-flex-${this.align}`);
                    if (this.justify) cls.push(`mb-row-flex-${this.justify}`);
                }
            }

            return cls;
        },

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
        //构建间距
        if (isNumber(this.gutter)) {
            this.newRowGutter = transNumber(this.gutter);
            if (vueVer === 2) this._provided.rowGutter = this.newRowGutter;
        } else if (isObject(this.gutter)) {
            this.mapRow = this.gutter;
            this.match = true;
        } else if (isArray(this.gutter)) {
            if (this.gutter[0]) this.mapRow = this.gutter[0];
            if (this.gutter[1]) this.mapCol = this.gutter[1];

            if (isNumber(this.mapRow) && isNumber(this.mapCol)) {
                this.newRowGutter = transNumber(this.mapRow);
                this.newColGutter = transNumber(this.mapCol);

                if (vueVer === 2) {
                    this._provided.rowGutter = this.newRowGutter;
                    this._provided.colGutter = this.newColGutter;
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
    },

    unmounted() {
        if (this.medias) {
            for (let obj in this.medias) {
                if (this.medias[obj].media) this.medias[obj].media.removeListener(this.medias[obj].listener);
            }
        }
    },

    methods: {
        //响应式处理
        responsiveHandler(index) {
            //左右间距
            if (isNumber(this.mapRow)) {
                this.newRowGutter = transNumber(this.mapRow);
                if (vueVer === 2) this._provided.rowGutter = this.newRowGutter;
            } else if (isObject(this.mapRow)) {
                this.newRowGutter = this.mapRow[index] ? transNumber(this.mapRow[index]) : 0;
                if (vueVer === 2) this._provided.rowGutter = this.newRowGutter;
            }

            //上下间距
            if (isNumber(this.mapCol)) {
                this.newColGutter = transNumber(this.mapCol);
                if (vueVer === 2) this._provided.colGutter = this.newColGutter;
            } else if (isObject(this.mapCol)) {
                this.newColGutter = this.mapCol[index] ? transNumber(this.mapCol[index]) : 0;
                if (vueVer === 2) this._provided.colGutter = this.newColGutter;
            }
        },

        //点击事件
        onClick(event) {
            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        }
    }
};
</script>
