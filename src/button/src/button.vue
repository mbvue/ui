<template>
    <button
        :class="buildClass"
        :type="htmlType"
        :disabled="disabled || loading || ajaxLoading"
        :open-type="openType"
        :hover-class="hoverClass"
        :hover-stay-time="throttle"
        :app-parameter="appParameter"
        :hover-stop-propagation="hoverStopPropagation"
        :lang="lang"
        :session-from="sessionFrom"
        :send-message-title="sendMessageTitle"
        :send-message-path="sendMessagePath"
        :send-message-img="sendMessageImg"
        :show-message-card="showMessageCard"
        :autofocus="autoFocus"
        @click="handleClick"
        @getphonenumber="getPhoneNumber"
        @getuserinfo="getUserInfo"
        @error="error"
        @opensetting="openSetting"
        @launchapp="launchApp"
    >
        <mb-icon v-if="loading || ajaxLoading" :type="loadingIcon" :size="buildLoadingSize" :spin="true" />
        <mb-icon v-if="icon && !loading && !ajaxLoading" :type="icon" :size="buildIconSize" />
        <span v-if="$slots.default" class="mb-button-span"><slot></slot></span>

        <div class="mb-button-hover-bg"></div>
    </button>
</template>

<script>
import { Mixins } from '../../base/base';
import { vue, versions, uniApp } from '../../base/utils/env';
import { isFunction } from '../../base/utils/test';
import { throttle, transNumber } from '../../base/utils/util';

export default {
    name: 'MbButton',

    components: {
        'mb-icon': versions() === 3 ? vue().defineAsyncComponent(() => import('../../icon/src/icon.vue')) : () => import('../../icon/src/icon.vue')
    },

    mixins: [Mixins],

    props: {
        type: { type: String, default: 'default' }, //设置按钮类型，可选值为 primary success warning danger info dark default 或者不设
        ghost: { type: String, default: '' }, //幽灵属性，可选值为 dashed ghost plain link 或者不设
        htmlType: { type: String, default: 'button' }, //设置 button 原生的 type 值，可选值为 button submit reset menu 或者不设
        icon: { type: String, default: '' }, //设置按钮的图标类型
        iconSize: { type: [String, Number], default: 16 }, //按钮的图标尺寸
        shape: { type: String, default: 'pill' }, //设置按钮形状，可选值为 circle round pill square 或者不设
        size: { type: String, default: 'md' }, //设置按钮大小，可选值为 xs sm md lg xl 或者不设
        loading: { type: Boolean, default: false }, //设置按钮载入状态
        loadingIcon: { type: String, default: 'spinner' }, //自定义加载中图标
        loadingSize: { type: [String, Number], default: 16 }, //自定义加载中图标尺寸
        disabled: { type: Boolean, default: false }, //按钮失效状态
        block: { type: Boolean, default: false }, //将按钮宽度调整为其父宽度的选项
        openType: { type: String, default: '' }, //开放能力
        hoverClass: { type: String, default: 'button-hover' }, //指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
        appParameter: { type: String, default: '' }, //打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
        hoverStopPropagation: { type: Boolean, default: false }, //指定是否阻止本节点的祖先节点出现点击态
        lang: { type: String, default: 'en' }, //指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
        sessionFrom: { type: String, default: '' }, //会话来源，open-type="contact"时有效
        sendMessageTitle: { type: String, default: '' }, //会话内消息卡片标题，open-type="contact"时有效
        sendMessagePath: { type: String, default: '' }, //会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
        sendMessageImg: { type: String, default: '' }, //会话内消息卡片图片，open-type="contact"时有效
        showMessageCard: { type: String, default: '' }, //是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
        throttle: { type: [String, Number], default: 500 }, //节流的时间间隔(一定时间内无论点击多少次，只会触发一次click事件)，单位ms
        autoFocus: { type: Boolean, default: false }, //是否默认聚焦
        ajax: { type: Function, default: null } //ajax请求封装自动处理Loading状态
    },

    data() {
        return {
            ajaxLoading: false
        };
    },

    computed: {
        //构建Class
        buildClass() {
            let cls = ['mb-button'];

            if (this.type) cls.push(`mb-button-${this.type}`);
            if (this.ghost) cls.push(`mb-button-${this.ghost}`);
            if (this.size) cls.push(`mb-button-${this.size}`);
            if (this.shape) cls.push(`mb-button-${this.shape}`);
            if (this.disabled || this.loading || this.ajaxLoading) cls.push(`mb-button-disabled`);
            if (this.block) cls.push(`mb-button-block`);

            return cls;
        },

        //构建图标尺寸
        buildIconSize() {
            return transNumber(this.iconSize);
        },

        //构建加载中图标尺寸
        buildLoadingSize() {
            return transNumber(this.loadingSize);
        }
    },

    unmounted() {
        if (this.hoverTime) {
            clearTimeout(this.hoverTime);
            this.hoverTime = null;
        }

        if (this.throttle_obj) {
            clearTimeout(this.throttle_obj);
            this.throttle_obj = null;
        }
    },

    methods: {
        //点击事件
        handleClick(evt) {
            if (this.loading || this.ajaxLoading || this.disabled) return;

            //兼容web端阻止冒泡事件
            if (!uniApp() && this.hoverStopPropagation) {
                if (evt && evt.stopPropagation()) {
                    evt.stopPropagation();
                } else {
                    window.event.cancelBubble = true;
                }
            }

            throttle.call(
                this,
                () => {
                    //增加web端点击添加HoverClass
                    if (!uniApp() && this.hoverClass !== '' && !this.hoverTime) {
                        this.$el.className = this.$el.className.concat(' ' + this.hoverClass);

                        //兼容vue2 点击事件
                        if (versions() === 2) this.$emit('click', evt);

                        this.hoverTime = setTimeout(() => {
                            this.$el.className = this.$el.className.replace(' ' + this.hoverClass, '');
                            clearTimeout(this.hoverTime);
                            this.hoverTime = null;
                        }, transNumber(this.throttle));
                    }

                    //Ajax处理
                    if (this.ajax && isFunction(this.ajax)) {
                        this.ajaxLoading = true;
                        this.ajax().finally(() => {
                            setTimeout(() => {
                                this.ajaxLoading = false;
                            }, 100);
                        });
                    }
                },
                transNumber(this.throttle)
            );
        },

        //获取用户手机号回调
        getPhoneNumber(res) {
            this.$emit('getphonenumber', res);
        },

        //用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
        getUserInfo(res) {
            this.$emit('getuserinfo', res);
        },

        //当使用开放能力时，发生错误的回调
        error(res) {
            this.$emit('error', res);
        },

        //在打开授权设置页并关闭后回调
        openSetting(res) {
            this.$emit('opensetting', res);
        },

        //打开 APP 成功的回调
        launchApp(res) {
            this.$emit('launchapp', res);
        }
    }
};
</script>
