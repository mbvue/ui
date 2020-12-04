<template>
    <div class="mb-form">
        <slot />
    </div>
</template>

<script>
import { isFunction } from '../../base/utils/test';

export default {
    name: 'MbForm',

    props: {
        model: {
            type: Object,
            default() {
                return {};
            }
        }, // 验证规则
        rules: {
            type: Object,
            default() {
                return {};
            }
        }, // 验证规则
        hideRequiredMark: { type: Boolean, default: false }, // 隐藏所有表单项的必选标记
        sameWidth: { type: Boolean, default: false }, // 是否 input 宽度100%
        layout: { type: String, default: 'horizontal' }, //布局 horizontal vertical inline
        colon: { type: Boolean, default: true }, // 配合 label 属性使用，表示是否显示 label 后面的冒号
        labelWidth: { type: [String, Number], default: null }, // label的宽度，单位px
        labelAlign: { type: String, default: 'left' }, // lable字体的对齐方式
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

    beforeMount() {
        this.fields = [];
    },

    methods: {
        //添加节点
        addFields(field) {
            this.fields.push(field);
        },

        //删除节点
        removeFields(field) {
            this.fields.splice(this.fields.indexOf(field), 1);
        },

        // 清空所有内容
        resetFields() {
            this.fields.map(field => {
                field.resetField();
            });
        },

        //校验数据
        validate(callback) {
            return new Promise(resolve => {
                let _count = 0,
                    _error = [];

                this.fields.map(field => {
                    field.validation('', (error, message, prop) => {
                        if (error) _error.push({ prop, message });

                        //完成校验
                        if (++_count === this.fields.length) {
                            resolve(_error.length ? false : true, this.model, _error);
                            if (callback && isFunction(callback)) callback(_error.length ? false : true, this.model, _error);
                        }
                    });
                });
            });
        },

        //校验数据
        validateField(fields, callback) {
            return new Promise(resolve => {
                let _count = 0,
                    _error = [];

                this.fields.map(field => {
                    _count++;

                    if (fields.indexOf(field.prop) > -1) {
                        field.validation((error, message, prop) => {
                            if (error) _error.push({ prop, message });
                        });
                    }

                    //完成校验
                    if (_count === this.fields.length) {
                        resolve(_error.length ? false : true, this.model, _error);
                        if (callback && isFunction(callback)) callback(_error.length ? false : true, this.model, _error);
                    }
                });
            });
        }
    }
};
</script>
