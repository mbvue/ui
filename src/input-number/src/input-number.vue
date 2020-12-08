<template>
    <div :class="buildDivClass">
        <div
            v-if="$slots.less || less"
            :class="buildLessClass"
            :style="lessStyle"
            @mousedown.stop.prevent="longStart('onLess')"
            @mouseup.stop.prevent="longEnd"
            @touchstart.stop.prevent="longStart('onLess')"
            @touchend.stop.prevent="longEnd"
        >
            <slot v-if="$slots.less" name="less" />
            <mb-icon v-else-if="less" type="minus" :size="14" />
        </div>

        <div class="mb-input-number-box">
            <input
                type="number"
                :class="buildNumberClass"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :value="inputValue"
                :focus="autoFocus"
                :autofocus="autoFocus"
                :disabled="disabled || disabledInput"
                :min="min"
                :max="max"
                :step="step"
                :cursorSpacing="cursorSpacing"
                :style="customStyle"
                @input="onInput"
                @blur="onBlur"
                @focus="onFocus"
                @confirm="onConfirm"
                @keyup.enter="onEnter"
                @mousewheel="onScroll"
                @DOMMouseScroll="onScroll"
            />

            <div v-if="action" class="mb-input-number-box-action">
                <div
                    class="mb-input-number-box-action-add"
                    @mousedown.stop.prevent="longStart('onAdd')"
                    @mouseup.stop.prevent="longEnd"
                    @touchstart.stop.prevent="longStart('onAdd')"
                    @touchend.stop.prevent="longEnd"
                >
                    <mb-icon type="angle-up" :size="14" />
                </div>

                <div
                    class="mb-input-number-box-action-less"
                    @mousedown.stop.prevent="longStart('onLess')"
                    @mouseup.stop.prevent="longEnd"
                    @touchstart.stop.prevent="longStart('onLess')"
                    @touchend.stop.prevent="longEnd"
                >
                    <mb-icon type="angle-down" :size="14" />
                </div>
            </div>
        </div>

        <div
            v-if="$slots.add || add"
            :class="buildAddClass"
            :style="addStyle"
            @mousedown.stop.prevent="longStart('onAdd')"
            @mouseup.stop.prevent="longEnd"
            @touchstart.stop.prevent="longStart('onAdd')"
            @touchend.stop.prevent="longEnd"
        >
            <slot v-if="$slots.add" name="add" />
            <mb-icon v-else-if="add" type="plus" :size="14" />
        </div>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { vue } from '../../base/utils/env';
import { isUndefined, isNull } from '../../base/utils/test';

export default {
    name: 'MbInputNumber',

    components: {
        'mb-icon': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    mixins: [Mixins],

    props: {
        less: { type: Boolean, default: true }, //是否显示左侧减
        lessStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //左侧减自定义样式
        add: { type: Boolean, default: true }, //是否显示右侧加
        addStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //右侧加自定义样式
        customStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //自定义输入框的样式
        action: { type: Boolean, default: false }, //是否显示输入框右侧操作按钮
        placeholder: { type: String, default: '' }, //placeholder显示值
        placeholderStyle: { type: String, default: '' }, //placeholder的样式,仅支持uni-app
        defaultValue: { type: Number, default: null }, //初始值
        autoFocus: { type: Boolean, default: false }, //自动获取焦点
        disabled: { type: Boolean, default: false }, //禁用
        disabledInput: { type: Boolean, default: false }, //禁用输入框
        min: { type: Number, default: 0 }, //最小值
        max: { type: Number, default: 99999 }, //最大值
        precision: { type: Number, default: 2 }, //数值精度
        size: { type: String, default: 'md' }, //输入框大小 xs、sm、md、lg、xl
        step: { type: Number, default: 1 }, //每次改变步数，可以为小数
        value: { type: Number, default: null }, //当前值
        modelValue: { type: Number, default: null }, //当前值
        cursorSpacing: { type: Number, default: 0 }, //指定光标于键盘的距离，避免键盘遮挡输入框，单位px
        longPress: { type: Boolean, default: true }, //是否开启长按连续递增或递减
        pressTime: { type: Number, default: 250 }, //开启长按触发后，每触发一次需要多久，单位ms
        scroll: { type: Boolean, default: true } //鼠标滚动数字增加/减少
    },

    emits: ['input', 'update:modelValue', 'focus', 'blur', 'change', 'enter', 'lessition', 'addition', 'confirm'],

    data() {
        return {
            inputValue: this.defaultValue || this.value || this.modelValue, //值
            disabledLess: false, //禁用左侧
            disabledAdd: false //禁用右侧
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-input-number'];

            if (this.disabled) cls.push(`mb-input-number-disabled`);
            if (this.size) cls.push(`mb-input-number-${this.size}`);

            return cls;
        },

        //构建左侧减Class
        buildLessClass() {
            let cls = ['mb-input-number-less'];

            if (this.disabledLess) cls.push(`mb-input-number-action-disabled`);

            return cls;
        },

        //构建右侧加Class
        buildAddClass() {
            let cls = ['mb-input-number-add'];

            if (this.disabledAdd) cls.push(`mb-input-number-action-disabled`);

            return cls;
        },

        //构建数字框Class
        buildNumberClass() {
            let cls = ['mb-input-number-box-input'];

            if (this.disabledInput) cls.push(`mb-input-number-box-input-disabled`);

            return cls;
        }
    },

    watch: {
        value(nVal) {
            this.setValue(nVal);
        },

        modelValue(nVal) {
            this.setValue(nVal);
        }
    },

    beforeMount() {
        this.item = this.getParent('MbFormItem');
    },

    unmounted() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    },

    methods: {
        //设置值
        setValue(val) {
            if (isUndefined(val) || isNull(val) || val === '') {
                this.inputValue = null;
            } else {
                let value = Number(val);
                this.disabledLess = false;
                this.disabledAdd = false;

                if (!isUndefined(this.min) && !isNull(this.min) && this.min !== '' && value <= Number(this.min)) {
                    //最小值

                    this.disabledLess = true;
                    this.inputValue = Number(Number(this.min).toFixed(this.precision));
                } else if (!isUndefined(this.max) && !isNull(this.max) && this.max !== '' && value >= Number(this.max)) {
                    //最大值

                    this.disabledAdd = true;
                    this.inputValue = Number(Number(this.max).toFixed(this.precision));
                } else {
                    this.inputValue = Number(value.toFixed(this.precision));
                }
            }

            this.$emit('change', this.inputValue);
            this.$emit('input', this.inputValue);
            this.$emit('update:modelValue', this.inputValue);

            return Promise.resolve(this.inputValue);
        },

        //减少值事件
        onLess() {
            if (this.disabled || this.disabledLess) return;
            if (isUndefined(this.inputValue) || isNull(this.inputValue) || this.inputValue === '') this.inputValue = this.min || 0;

            this.setValue(Number(this.inputValue) - Number(this.step || 1)).then(data => {
                this.$nextTick(() => {
                    if (this.item) this.item.onFieldChange(data);
                });
            });
            this.$emit('lessition', this.inputValue);
        },

        //增加值事件
        onAdd() {
            if (this.disabled || this.disabledAdd) return;
            if (isUndefined(this.inputValue) || isNull(this.inputValue) || this.inputValue === '') this.inputValue = this.min || 0;

            this.setValue(Number(this.inputValue) + Number(this.step || 1)).then(data => {
                this.$nextTick(() => {
                    if (this.item) this.item.onFieldChange(data);
                });
            });
            this.$emit('addition', this.inputValue);
        },

        //开始长按
        longStart(callback) {
            this[callback]();

            if (!this.longPress) return;

            clearInterval(this.timer);
            this.timer = null;
            this.timer = setInterval(() => {
                this[callback]();
            }, this.pressTime);
        },

        //结束长按
        longEnd() {
            this.$nextTick(() => {
                clearInterval(this.timer);
                this.timer = null;
            });
        },

        //输入值
        onInput(event) {
            let value = event.target.value || event.detail.value;
            if (!isUndefined(value) && !isNull(value) && value !== '') {
                this.setValue(value).then(data => {
                    this.$nextTick(() => {
                        if (this.item) this.item.onFieldChange(data);
                    });
                });
                if (event.target) event.target.value = this.inputValue;
                if (event.detail) event.detail.value = this.inputValue;
            } else {
                this.disabledLess = false;
                this.disabledAdd = false;
                this.inputValue = null;

                this.$emit('change', this.inputValue);
                this.$emit('input', this.inputValue);
                this.$emit('update:modelValue', this.inputValue);

                this.$nextTick(() => {
                    if (this.item) this.item.onFieldChange(this.inputValue);
                });

                if (event.target) event.target.value = this.inputValue;
                if (event.detail) event.detail.value = this.inputValue;
            }
        },

        //失去光标
        onBlur(event) {
            this.$emit('blur', event);

            if (this.item) this.item.onFieldBlur(this.inputValue);
        },

        //获取光标
        onFocus(event) {
            this.$emit('focus', event);
        },

        //回车事件
        onEnter(event) {
            this.$emit('enter', event);
        },

        //提交事件
        onConfirm(event) {
            this.$emit('confirm', event.detail.value);
        },

        //输入框滚动事件
        onScroll(event) {
            if (this.scroll) return true;

            event = event || window.event;

            if (event.preventDefault) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
                event.returnValue = false;
            }

            return false;
        }
    }
};
</script>
