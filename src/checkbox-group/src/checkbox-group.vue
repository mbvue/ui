<template>
    <div class="mb-checkbox-group" @click="onClick">
        <mb-checkbox
            v-for="(item, index) in data"
            :key="index"
            :checked-value="item.checkedValue || item.value"
            :default-value="item.defaultValue || false"
            :default-checked="item.checked"
            :disabled="item.disabled"
            :size="item.size || size"
        >
            {{ item.name }}&nbsp;&nbsp;
        </mb-checkbox>
        <slot />
    </div>
</template>

<script>
import { vue, vueVer } from '../../base/utils/env';

export default {
    name: 'MbCheckboxGroup',

    components: {
        'mb-checkbox': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../checkbox/src/checkbox.vue')) : () => import('../../checkbox/src/checkbox.vue')
    },

    props: {
        disabled: { type: Boolean, default: false }, //是否禁用状态
        value: {
            type: Array,
            default: () => {
                return [];
            }
        }, //选中内容
        modelValue: {
            type: Array,
            default: () => {
                return [];
            }
        }, //选中内容
        indeterminate: { type: Boolean, default: false }, //只控制半选样式
        shape: { type: String, default: 'pill' }, //设置按钮形状，可选值为 circle pill square 或者不设
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
            checkedValue: this.value || this.modelValue || [] //选中值
        };
    },

    watch: {
        //监听值改变
        value(nVal) {
            this.checkedValue = nVal || [];
        },

        //监听值改变
        modelValue(nVal) {
            this.checkedValue = nVal || [];
        }
    },

    methods: {
        //设置值
        setValue(value, checked) {
            if (checked) {
                this.checkedValue.push(value);
            } else {
                this.checkedValue = this.checkedValue.filter(item => item !== value);
            }

            this.$emit('change', this.checkedValue);
            this.$emit('input', this.checkedValue);
            this.$emit('update:modelValue', this.checkedValue);
        },

        //点击事件
        onClick(event) {
            if (vueVer === 2) this.$emit('click', event); //兼容vue2 点击事件
        }
    }
};
</script>
