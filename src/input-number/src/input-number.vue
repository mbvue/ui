<template>
    <div :class="['mb-input-number', disabled ? 'mb-input-number-disabled' : '', size ? 'mb-input-number-' + size : '']">
        <div
            v-if="$slots.less || less"
            :class="['mb-input-number-less', disabledLess ? 'mb-input-number-action-disabled' : '']"
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
                :class="['mb-input-number-box-input', disabledInput ? 'mb-input-number-box-input-disabled' : '']"
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
            :class="['mb-input-number-add', disabledAdd ? 'mb-input-number-action-disabled' : '']"
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
import { vue, versions } from '../../base/utils/env';
import { isUndefined, isNull } from '../../base/utils/test';

export default {
    name: 'MbInputNumber',

    components: {
        'mb-icon': versions() === 3 ? vue().defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

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
        cursorSpacing: { type: Number, default: 0 }, //指定光标于键盘的距离，避免键盘遮挡输入框，单位px
        longPress: { type: Boolean, default: true }, //是否开启长按连续递增或递减
        pressTime: { type: Number, default: 250 } //开启长按触发后，每触发一次需要多久，单位ms
    },

    data() {
        return {
            inputValue: this.defaultValue || this.value, //值
            disabledLess: false, //禁用左侧
            disabledAdd: false //禁用右侧
        };
    },

    watch: {
        value(nVal) {
            this.setValue(nVal);
        }
    },

    mounted() {
        if (versions() === 2) {
            this.$options.destroyed = [
                function destroyed() {
                    this.$options.unmounted();
                }
            ];
        }
    },

    unmounted() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    },

    methods: {
        setValue(val) {
            let value = Number(isUndefined(val) || isNull(val) || val === '' ? 0 : val);
            this.disabledLess = false;
            this.disabledAdd = false;

            if (!isUndefined(this.min) && !isNull(this.min) && this.min !== '' && value <= Number(this.min)) {
                this.disabledLess = true;
                this.inputValue = Number(Number(this.min).toFixed(this.precision));
            } else if (!isUndefined(this.max) && !isNull(this.max) && this.max !== '' && value >= Number(this.max)) {
                this.disabledAdd = true;
                this.inputValue = Number(Number(this.max).toFixed(this.precision));
            } else {
                this.inputValue = Number(value.toFixed(this.precision));
            }

            this.$emit('change', this.inputValue);
            this.$emit('input', this.inputValue);
        },

        onLess() {
            if (this.disabled || this.disabledLess) return;
            if (isUndefined(this.inputValue) || isNull(this.inputValue) || this.inputValue === '') this.inputValue = this.min || 0;

            this.setValue(Number(this.inputValue) - Number(this.step || 1));
            this.$emit('lessition', this.inputValue);
        },

        onAdd() {
            if (this.disabled || this.disabledAdd) return;
            if (isUndefined(this.inputValue) || isNull(this.inputValue) || this.inputValue === '') this.inputValue = this.min || 0;

            this.setValue(Number(this.inputValue) + Number(this.step || 1));
            this.$emit('addition', this.inputValue);
        },

        longStart(callback) {
            this[callback]();

            if (!this.longPress) return;

            clearInterval(this.timer);
            this.timer = null;
            this.timer = setInterval(() => {
                this[callback]();
            }, this.pressTime);
        },

        longEnd() {
            this.$nextTick(() => {
                clearInterval(this.timer);
                this.timer = null;
            });
        },

        onInput(event) {
            let value = event.target.value || event.detail.value;
            if (!isUndefined(value) && !isNull(value) && value !== '') {
                this.setValue(value);
                if (event.target) event.target.value = this.inputValue;
                if (event.detail) event.detail.value = this.inputValue;
            }
        },

        onBlur(event) {
            this.$emit('blur', event);
        },

        onFocus(event) {
            this.$emit('focus', event);
        },

        onEnter(event) {
            this.$emit('enter', event);
        },

        onConfirm(event) {
            this.$emit('confirm', event.detail.value);
        }
    }
};
</script>
