<template lang="html">
    <div>
        <div class="weui-cells__title">{{title}}</div> 
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea 
                    class="weui-textarea" 
                    :readonly="readonly" 
                    :maxlength="maxlength" 
                    :placeholder="placeholder || (readonly ? '请选择' : '请输入')"  
                    rows="3"
                    emptytips="请输入" 
                    :value="currentValue"
                    @keyup.enter="handleEnter"
                    @keyup="handleKeyup"
                    @keypress="handleKeypress"
                    @keydown="handleKeydown"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChange"
                    @input="handleInput"
                    @click="handleClick"></textarea>
                    <div class="weui-textarea-counter"><span>{{currentLength}}</span>/{{maxlength}}</div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
    export default {
        name: 'Input',
        props: {
            title: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                default() {
                    return '请选择'
                }
            },
            readonly: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number],
                default: ''
            },
            maxlength: {
                type: Number,
                default: 200
            }
        },
        data() {
            return {
                currentValue: '',
                currentLength: 0
            }
        },
        mounted() {
            if(this.value) {
                this.currentValue = this.value;
                this.currentLength = this.value.length;
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
            },
            handleKeydown (event) {
                this.$emit('on-keydown', event);
            },
            handleKeypress(event) {
                this.$emit('on-keypress', event);
            },
            handleKeyup (event) {
                this.$emit('on-keyup', event);
            },
            handleClick (event) {
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            handleInput (event) {
                let value = event.target.value;
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('on-change', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                this.currentValue = value;
                this.currentLength = value.length;
            }
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
