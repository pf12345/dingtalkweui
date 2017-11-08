<template>
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': focus}" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input 
                    type="search"
                    class="weui-search-bar__input" 
                    id="searchInput" 
                    :placeholder="placeholder" 
                    required=""
                    ref="input"
                    @keyup.enter="handleEnter"
                    @keyup="handleKeyup"
                    @keypress="handleKeypress"
                    @keydown="handleKeydown"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChange"
                    @input="handleInput"
                    @click="handleClick">
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" @click="handleInputFocus">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="focus = false">取消</a>
    </div>
</template>

<script>
    export default {  
        data() {
            return {
                focus: false,
                searchKey: ''
            }
        },
        props: {
            placeholder: {
                type: String,
                default() {
                    return '搜索'
                }
            },
            value: {
                type: [String, Number],
                default: ''
            }
        },
        mounted() {
            if(this.value) {
                this.searchKey = this.value;
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
                this.focus = true;
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.focus = false;
                this.$emit('on-blur', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            handleInput (event) {
                let value = event.target.value;
                this.$emit('input', value);
                this.searchKey = value;
                this.$emit('on-change', event);
            },
            handleInputFocus(event) {
                this.$refs.input.focus();
                this.focus = true;
            }
        }
    }
</script>