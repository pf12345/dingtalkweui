<template lang="html">
    <div class="input-item">
        <p class="input-title is-option">
            {{title}}
        </p>
        <input :readonly="readonly" 
                :type="type" class="input-input" 
                :value="currentValue"
                :placeholder="placeholder || (readonly ? '请选择' : '请输入')" 
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                @click="handleClick">
    </div>
</template>

<script>
    export default {
        name: 'uploadImage',
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
                    return ['text', 'textarea', 'password', 'number', 'email'].indexOf(value) >= 0;
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
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
.input-item {
    margin-bottom: 12px;
}
.input-title {
    margin-bottom: 8px;
    color: #333;
    font-size: 14px;
    line-height: 1;
}
.input-input {
    border: 1px solid #dadada;
    border-radius: 4px;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;
}
input {
    height: 40px;
    text-shadow: rgba(0,0,0,0) 0 0 0;
}
</style>
