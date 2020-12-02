<template>
    <div :class="buildDivClass">
        <div class="mb-form-item-wrapper">
            <div class="mb-form-item-wrapper-lable" :style="buildLabelStyle" :for="labelFor">{{ label }}</div>
            <div class="mb-form-item-wrapper-children" :style="buildChildrenStyle"><slot /></div>
        </div>

        <transition name="mb-form-item-explain">
            <div v-if="validateMessage" class="mb-form-item-explain" :style="buildExplainStyle">{{ validateMessage }}</div>
        </transition>
    </div>
</template>

<script>
import { Mixins } from '../../base/base';
import { unit, deepMerge, deepClone, transNumber } from '../../base/utils/util';
import { isArray, isFunction } from '../../base/utils/test';
import validator from './validator';

export default {
    name: 'MbFormItem',

    mixins: [Mixins],

    props: {
        rules: {
            type: [Object, Array],
            default() {
                return {};
            }
        }, // 验证规则
        prop: { type: String, default: '' }, // 表单域 model 字段
        help: { type: String, default: '' }, // 提示信息，如不设置，则会根据校验规则自动生成
        layout: { type: String, default: null }, //布局 horizontal vertical inline
        hideRequiredMark: { type: Boolean, default: null }, // 隐藏所有表单项的必选标记
        required: { type: Boolean, default: false }, // 是否显必填
        sameWidth: { type: Boolean, default: null }, // 是否 input 宽度100%
        colon: { type: Boolean, default: null }, // 配合 label 属性使用，表示是否显示 label 后面的冒号
        label: { type: String, default: '' }, // label 文本
        labelFor: { type: String, default: null }, // 设置子元素 label for 属性
        labelWidth: { type: [String, Number], default: null }, // label的宽度，单位px
        labelAlign: { type: String, default: null }, // lable字体的对齐方式
        labelStyle: {
            type: Object,
            default() {
                return {};
            }
        }, // lable的样式，对象形式
        childrenStyle: {
            type: Object,
            default() {
                return {};
            }
        } // 节点的样式，对象形式
    },

    data() {
        return {
            initialValue: '', //默认值
            validateState: '', //校验状态
            validateMessage: '' //校验信息
        };
    },

    computed: {
        //构建外层Class
        buildDivClass() {
            let cls = ['mb-form-item'];

            if (!this.buildHideRequiredMark && this.required) cls.push(`mb-form-item-required`);
            if (this.buildColon) cls.push(`mb-form-item-colon`);
            if (this.buildLayout) cls.push(`mb-form-item-${this.buildLayout}`);
            if (this.buildSameWidth) cls.push(`mb-form-item-same-width`);
            if (this.validateState) cls.push(`mb-form-item-error`);

            return cls;
        },

        //构建标签样式
        buildLabelStyle() {
            let style = {};

            if (this.parent && this.parent.labelStyle) {
                style = deepMerge(style, this.parent.labelStyle);
            }

            if (this.labelStyle) {
                style = deepMerge(style, this.labelStyle);
            }

            if (this.buildLabelWidth) {
                style.width = unit(this.buildLabelWidth);
            }

            if (this.buildLabelAlign) {
                style.textAlign = this.buildLabelAlign;
            }

            return style;
        },

        //构建子节点样式
        buildChildrenStyle() {
            let style = {};

            if (this.parent && this.parent.childrenStyle) {
                style = deepMerge(style, this.parent.childrenStyle);
            }

            if (this.childrenStyle) {
                style = deepMerge(style, this.childrenStyle);
            }

            return style;
        },

        //构建提示宽度
        buildExplainStyle() {
            return this.buildLabelWidth ? { paddingLeft: unit(transNumber(this.buildLabelWidth) + 4) } : {};
        },

        // label的宽度，单位px
        buildLabelWidth() {
            return this.labelWidth !== null ? this.labelWidth : this.parent ? this.parent.labelWidth : null;
        },

        // 布局
        buildLayout() {
            return this.layout !== null ? this.layout : this.parent ? this.parent.layout : 'horizontal';
        },

        // lable字体的对齐方式
        buildLabelAlign() {
            return this.labelAlign !== null ? this.labelAlign : this.parent ? this.parent.labelAlign : 'left';
        },

        //隐藏所有表单项的必选标记
        buildHideRequiredMark() {
            return this.hideRequiredMark !== null ? this.hideRequiredMark : this.parent ? this.parent.hideRequiredMark : false;
        },

        //配合 label 属性使用，表示是否显示 label 后面的冒号
        buildColon() {
            return this.colon !== null ? this.colon : this.parent ? this.parent.colon : true;
        },

        //是否 input 宽度100%
        buildSameWidth() {
            return this.sameWidth !== null ? this.sameWidth : this.parent ? this.parent.sameWidth : false;
        },

        //获取校验规则
        buildRules() {
            let rules = [];

            if (this.parent && this.parent.rules) rules.concat(this.parent.rules[this.prop] || []);

            if (this.rules) {
                if (isArray(this.rules)) {
                    rules.concat(this.rules || []);
                } else if (JSON.stringify(this.rules) !== '{}') {
                    rules.push(this.rules);
                }
            }

            return rules;
        },

        //获取值
        fieldValue() {
            return this.parent ? this.parent.model[this.prop] : null;
        }
    },

    beforeMount() {
        this.parent = this.getParent('MbForm');
    },

    mounted() {
        if (this.parent) {
            this.initialValue = deepClone(this.fieldValue);
            this.parent.addFields(this);
        }
    },

    unmounted() {
        if (this.parent) this.parent.removeFields(this);
    },

    methods: {
        //监听节点失去光标
        onFieldBlur() {
            this.validation('blur');
        },

        //监听节点改变值
        onFieldChange() {
            this.validation('change');
        },

        //校验是否正确
        validation(triggerType = '', callback) {
            let rules = !triggerType
                ? this.buildRules
                : this.buildRules.filter(
                      item => item.trigger && ((isArray(item.trigger) && item.trigger.indexOf(triggerType) !== -1) || String(item.trigger).toLowerCase() === triggerType)
                  );

            //校验配置必填
            if (this.required) rules.push({ trigger: triggerType, required: true, message: this.help });

            //统一校验规则
            if (rules && rules.length > 0) {
                validator(rules, this.fieldValue, this.help).then(({ error, message }) => {
                    if (!this.validateState || (this.validateState && this.validateMessage !== message)) {
                        this.validateState = error ? 'error' : '';
                        this.validateMessage = error ? message : '';
                    } else if (!error) {
                        this.validateState = '';
                        this.validateMessage = '';
                    }

                    if (callback && isFunction(callback)) callback(error, message, this.prop);
                });
            } else {
                if (callback && isFunction(callback)) callback(false);
            }
        },

        // 清空当前的u-form-item
        resetField() {
            this.parent.model[this.prop] = this.initialValue;
            this.validateState = '';
            this.validateMessage = '';
        }
    }
};
</script>
