<template lang="html">
    <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">{{title}}</label>
        </div> 
        <div class="weui-cell__bd">
            <input :readonly="readonly" 
            :type="type" 
            :maxlength="maxlength" 
            :placeholder="placeholder || (readonly ? '请选择' : '请输入')"  
            emptytips="请输入" 
            class="weui-input"
            @keyup.enter="handleEnter"
            @keyup="handleKeyup"
            @keypress="handleKeypress"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @input="handleInput"
            @click="handleClick">
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
            type: {
                validator (value) {
                    return ['text', 'textarea', 'password', 'number', 'email', 'phone'].indexOf(value) >= 0;
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            maxlength: {
                type: Number,
                default: 50
            }
        },
        data() {
            return {
                currentValue: ''
            }
        },
        created() {
            
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
