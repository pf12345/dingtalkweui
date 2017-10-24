<template>
    <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
    const prefixCls = 'dingtalkweui-btn';
    export default {
        name: 'Button',
        props: {
            type: {
                validator (value) {
                    return ['cancel', 'confirm'].indexOf(value) != -1;
                }
            },
            size: {
                validator (value) {
                    return ['small', 'large', 'default'].indexOf(value) != -1;
                }
            },
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return ['button', 'submit', 'reset'].indexOf(value) != -1;
                }
            },
            icon: String,
            long: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
<style scoped>
    .dingtalkweui-btn {
        color: #fff;
        transition: all .3s;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        max-width: 300px;
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        line-height: 2;
        font-size: 18px;
    }
    .dingtalkweui-btn-cancel {
        background: #fff;
        color: #333;
        border: 1px solid #ebebeb;
    }
    .dingtalkweui-btn-cancel:hover {
        color: #3b79f2;
        border-color: #3b79f2;
    }
    .dingtalkweui-btn-confirm {
        background: #3b79f2;
    }
    .dingtalkweui-btn-confirm:hover {
        background: #105AEA;
    }
</style>