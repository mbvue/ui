<template>
    <div class="mb-radio-group" @click="onClick">
        <mb-radio
            v-for="(item, index) in data"
            :key="index"
            :checked-value="item.checkedValue || item.value"
            :default-value="item.defaultValue || false"
            :default-checked="item.checked"
            :disabled="item.disabled"
            :size="item.size || size"
        >
            {{ item.name }}&nbsp;&nbsp;
        </mb-radio>
        <slot />
    </div>
</template>

<script>
import { vue } from '../../base/utils/env';

export default {
    name: 'MbRadioGroup',

    components: {
        'mb-radio': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../radio/src/radio.vue')) : () => import('../../radio/src/radio.vue')
    },

    props: {
        disabled: { type: Boolean, default: false }, //是否禁用状态
        value: { type: [String, Number, Boolean], default: null }, //选中内容
        modelValue: { type: [String, Number, Boolean], default: null }, //选中内容
        shape: { type: String, default: 'circle' }, //设置按钮形状，可选值为 circle pill square 或者不设
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        activeColor: { type: String, default: '' }, //选中状态下的颜色
        data: {
            type: Array,
            default: () => {
                return [];
            }
        } //快捷设置
    },

    emits: ['input', 'update:modelValue', 'change', 'click'],

    data() {
        return {
            checkedValue: this.value || this.modelValue //选中值
        };
    },

    watch: {
        //监听值改变
        value(nVal) {
            this.checkedValue = nVal;
        },

        //监听值改变
        modelValue(nVal) {
            this.checkedValue = nVal;
        }
    },

    methods: {
        //设置值
        setValue(value) {
            if (this.checkedValue !== value) this.$emit('change', value);

            this.checkedValue = value;
            this.$emit('input', this.checkedValue);
            this.$emit('update:modelValue', this.checkedValue);
        },

        //点击事件
        onClick(event) {
            this.$emit('click', event);
        }
    }
};
</script>
