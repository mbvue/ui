<template>
    <div :class="buildDivClass">
        <div :class="buildLeftClass" :style="customStyle">
            <div v-if="$slots.icon || buildIcon" class="mb-input-search-left-icon" :style="iconStyle">
                <slot v-if="$slots.icon" name="icon" />
                <mb-icon v-else-if="buildIcon" :type="buildIcon" :size="iconSize" />
            </div>

            <input
                :id="id"
                class="mb-input-search-left-input"
                type="text"
                :value="inputValue"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :focus="autoFocus"
                :autofocus="autoFocus"
                :disabled="disabled"
                :maxlength="maxLength"
                :confirmType="confirmType"
                :cursorSpacing="cursorSpacing"
                @blur="onBlur"
                @focus="onFocus"
                @input="onInput"
                @confirm="onConfirm"
                @keyup.enter="onEnter"
            />

            <div v-if="allowClear && inputValue != '' && focused" class="mb-input-search-left-clear">
                <mb-icon type="times-circle" :size="16" @mousedown="onClear" @touchstart="onClear" />
            </div>
        </div>

        <div v-if="$slots.action || buildAction || actionText" :class="buildRightClass" :style="actionStyle" @click="onSearch">
            <mb-button v-if="buildButton" :type="buildButton" :disabled="disabled || loading" :size="size" :style="buttonStyle">
                <slot v-if="$slots.action" name="action" />
                <mb-icon v-else-if="buildAction" :type="loading ? 'spinner' : buildAction" :spin="loading" :size="actionSize" />
                <span v-if="actionText">{{ actionText }}</span>
            </mb-button>

            <template v-else>
                <slot v-if="$slots.action" name="action" />
                <mb-icon v-else-if="buildAction" :type="loading ? 'spinner' : buildAction" :spin="loading" :size="actionSize" />
                <span v-if="actionText">{{ actionText }}</span>
            </template>
        </div>
    </div>
</template>

<script>
import { vue } from '../../base/utils/env';
import { isBoolean } from '../../base/utils/test';
import { trim } from '../../base/utils/util';

export default {
    name: 'MbInputSearch',

    components: {
        'mb-icon': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue'),
        'mb-button': vue.defineAsyncComponent ? vue.defineAsyncComponent(() => import('../../button/src/button.vue')) : () => import('../../button/src/button.vue')
    },

    props: {
        icon: { type: [Boolean, String], default: false }, //左侧图标
        iconSize: { type: Number, default: 16 }, //左侧图标尺寸
        iconStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //左侧图标自定义样式
        placeholder: { type: String, default: '' }, //placeholder显示值
        placeholderStyle: { type: String, default: '' }, //placeholder的样式,仅支持uni-app
        allowClear: { type: Boolean, default: false }, //可以点击清除图标删除内容
        defaultValue: { type: String, default: null }, //初始值
        value: { type: String, default: null }, //当前值
        autoFocus: { type: Boolean, default: false }, //自动获取焦点
        disabled: { type: Boolean, default: false }, //禁用
        loading: { type: Boolean, default: false }, //右侧图标加载中
        action: { type: [Boolean, String], default: true }, //右侧图标
        actionFixed: { type: Boolean, default: false }, //右侧图标浮动
        actionSize: { type: Number, default: 16 }, //右侧图标尺寸
        actionText: { type: String, default: '' }, //右侧文字
        actionButton: { type: [Boolean, String], default: false }, //右侧是按钮
        actionStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //左侧图标自定义样式
        buttonStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //左侧按钮自定义样式
        customStyle: {
            type: Object,
            default: () => {
                return {};
            }
        }, //自定义输入框的样式
        id: { type: String, default: null }, //输入框的 id
        border: { type: [Boolean, String], default: true }, //边框 top left bottom right
        maxLength: { type: Number, default: -1 }, //最大长度
        size: { type: String, default: 'md' }, //输入框大小 xs、sm、md、lg、xl
        confirmType: { type: String, default: 'done' }, //设置键盘右下角按钮的文字，仅在uni-app中type为text时生效
        cursorSpacing: { type: Number, default: 0 }, //指定光标与键盘的距离，单位px
        trim: { type: Boolean, default: true }, //是否自动去除两端的空格
        enterSearch: { type: Boolean, default: true }, //是否回车触发查询
        history: {
            type: Array,
            default: () => {
                return [];
            }
        } //历史搜索记录
    },

    emits: ['focus', 'blur', 'change', 'input', 'enter', 'confirm', 'search', 'update:history'],

    data() {
        return {
            inputValue: this.defaultValue || this.value || '', //值
            focused: false, // 当前是否处于获得焦点的状态
            historyList: this.history || [] //历史搜索记录
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-input-search'];

            if (this.disabled) cls.push(`mb-input-search-disabled`);
            if (this.size) cls.push(`mb-input-search-${this.size}`);

            return cls;
        },

        //构建左侧Class
        buildLeftClass() {
            let cls = ['mb-input-search-left'];

            if (isBoolean(this.border)) {
                cls.push(this.border ? `mb-input-search-left-border-all` : ``);
            } else {
                cls.push(`mb-input-search-left-border-${this.border}`);
            }

            if (this.focused) cls.push(`mb-input-search-left-focused`);
            if (this.actionFixed) cls.push(`mb-input-search-left-fixed`);
            if (this.buildButton) cls.push(`mb-input-search-left-botton`);

            return cls;
        },

        //构建右侧Class
        buildRightClass() {
            let cls = ['mb-input-search-right'];

            if (this.actionFixed) cls.push(`mb-input-search-right-fixed`);
            if (this.buildButton) cls.push(`mb-input-search-right-botton`);

            return cls;
        },

        //构建左侧图标
        buildIcon() {
            return isBoolean(this.icon) ? (this.icon ? 'sistrix' : false) : this.icon;
        },

        //构建右侧图标
        buildAction() {
            return isBoolean(this.action) ? (this.action ? 'sistrix' : false) : this.action;
        },

        //构建右侧按钮
        buildButton() {
            return isBoolean(this.actionButton) ? (this.actionButton ? 'primary' : false) : this.actionButton;
        }
    },

    watch: {
        value(nVal, oVal) {
            this.inputValue = nVal;

            if (nVal != oVal) {
                this.$emit('change', nVal);
            }
        },

        history(nval) {
            this.historyList = nval || [];
        }
    },

    methods: {
        //输入值
        onInput(event) {
            let value = event.target.value || event.detail.value;
            if (this.trim) value = trim(value);

            this.inputValue = value;
            this.$emit('input', value);
            this.$emit('change', value);
        },

        //获取光标
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },

        //失去光标
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },

        //确定提交
        onConfirm(event) {
            this.$emit('confirm', event.detail.value);
        },

        //回车事件
        onEnter(event) {
            this.$emit('enter', event);

            if (this.enterSearch) this.onSearch();
        },

        //清除事件
        onClear(event) {
            event.stopPropagation();
            event.preventDefault();

            this.inputValue = '';
            this.$emit('input', '');
            this.$emit('change', '');

            return false;
        },

        //查询事件
        onSearch() {
            if (this.disabled) return;

            let val = this.trim ? trim(this.inputValue) : this.inputValue;

            //记录历史查询记录
            this.historyList.push(val);
            this.$emit('update:history', this.historyList);

            this.$emit('search', val);
        }
    }
};
</script>
