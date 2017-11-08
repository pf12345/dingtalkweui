<template>
    <a 
        href="javascript:;"
        :class="classes" 
        :disabled="disabled" 
        @click="handleClick">
        <i class="weui-loading" v-if="loading"></i>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </a>
</template>
<script>
    const prefixCls = 'weui-btn';
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                validator (value) {
                    return ['primary', 'default', 'warn'].indexOf(value) != -1;
                }
            },
            size: {
                validator (value) {
                    return ['mini', 'default'].indexOf(value) != -1;
                }
            },
            disabled: Boolean,
            loading: {
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
                        [`${prefixCls}_${this.type}`]: !!this.type,
                        [`${prefixCls}_disabled`]: this.disabled,
                        [`${prefixCls}_${this.size}`]: !!this.size,
                        [`${prefixCls}_loading`]: this.loading != null && this.loading
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
    
</style>