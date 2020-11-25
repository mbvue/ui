<template>
    <div :class="buildClass" :style="[divStyle]">
        <slot></slot>
    </div>
</template>

<script>
import { versions } from '../../base/utils/env';
import { unit } from '../../base/utils/util';
import { isNumber, isObject } from '../../base/utils/test';

export default {
    name: 'MbCol',

    inject: ['rowGutter', 'colGutter'],

    props: {
        offset: { type: Number, default: 0 }, //栅格左侧的间隔格数，间隔内不可以有栅格
        order: { type: Number, default: 0 }, //栅格顺序，flex 布局模式下有效
        pull: { type: Number, default: 0 }, //栅格向左移动格数
        push: { type: Number, default: 0 }, //栅格向右移动格数
        span: { type: Number, default: 1 }, //栅格占位格数，为 0 时相当于 display: none
        xs: { type: [Number, Object], default: null }, //<480px 响应式栅格，可为栅格数或一个包含其他属性的对象
        sm: { type: [Number, Object], default: null }, //≥576 响应式栅格，可为栅格数或一个包含其他属性的对象
        md: { type: [Number, Object], default: null }, //≥768 响应式栅格，可为栅格数或一个包含其他属性的对象
        lg: { type: [Number, Object], default: null }, //≥992 响应式栅格，可为栅格数或一个包含其他属性的对象
        xl: { type: [Number, Object], default: null }, //≥1200 响应式栅格，可为栅格数或一个包含其他属性的对象
        xxl: { type: [Number, Object], default: null } //≥1600 响应式栅格，可为栅格数或一个包含其他属性的对象
    },

    computed: {
        //定义样式
        divStyle() {
            let style = {};
            if (versions() === 2) {
                if (this.rowGutter() != 0) {
                    style.paddingLeft = unit(this.rowGutter());
                    style.paddingRight = unit(this.rowGutter());
                }

                if (this.colGutter() != 0) {
                    style.paddingTop = unit(this.colGutter());
                    style.paddingBottom = unit(this.colGutter());
                }
            } else {
                if (this.rowGutter.value != 0) {
                    style.paddingLeft = unit(this.rowGutter.value);
                    style.paddingRight = unit(this.rowGutter.value);
                }

                if (this.colGutter.value != 0) {
                    style.paddingTop = unit(this.colGutter.value);
                    style.paddingBottom = unit(this.colGutter.value);
                }
            }

            return style;
        },

        buildClass() {
            let cls = ['mb-col'];

            if (this.span >= 0) cls.push('mb-col-' + this.span);
            if (this.offset) cls.push('mb-col-offset-' + this.offset);
            if (this.order) cls.push('mb-col-order-' + this.order);
            if (this.pull) cls.push('mb-col-pull-' + this.pull);
            if (this.push) cls.push('mb-col-push-' + this.push);
            if (this.offset) cls.push('mb-col-offset-' + this.offset);

            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(prefix => {
                if (isNumber(this[prefix])) {
                    cls.push(`mb-col-${prefix}-${this[prefix]}`);
                } else if (isObject(this[prefix])) {
                    if (this[prefix].span) cls.push(`mb-col-${prefix}-${this[prefix].span}`);
                    if (this[prefix].offset) cls.push(`mb-col-${prefix}-offset-${this[prefix].offset}`);
                    if (this[prefix].order) cls.push(`mb-col-${prefix}-order-${this[prefix].order}`);
                    if (this[prefix].pull) cls.push(`mb-col-${prefix}-pull-${this[prefix].pull}`);
                    if (this[prefix].push) cls.push(`mb-col-${prefix}-push-${this[prefix].push}`);
                }
            });

            return cls;
        }
    }
};
</script>
