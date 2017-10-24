<template>
    <transition name="translate-in">
        <aside class="slide-wrap" :style="slide_style" v-if="show" ref="slide">
            <slot></slot>
        </aside>
    </transition>
</template>
<script>
    export default{
        ready(){
            this.zIndex && (this.slide_style += `;z-index:${this.zIndex};`);
        },
        data(){
            return {
                isBack: false
            }
        },
        directives: {
        },
        watch: {
            show(val){
                if (val) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.slide);
                        //----------
                        this.$refs.slide.addEventListener('transitionend', () => {
                            this.$emit('transitionend');
                        }, false);
                    });
                    //----------
                    const slideLength = document.querySelectorAll('.dui-slide-wrap-transition').length;
                    if (slideLength > 1 && !this.zIndex) {
                        this.slide_style += `;z-index:${slideLength + 99};`;
                    }
                    //----------
                    const _this = this;
                    const nowId = `dui_slide_${Date.now()}`;
                    this.isBack = false;
                    history.replaceState({nowId}, '', '');
                    history.pushState(null, '', '');
                    window.addEventListener('popstate', function backFun(event) {
                        if (!event || !event.state || !event.state.nowId) {
                            console.log(event);
                            return;
                        }
                        if (event.state.nowId === nowId) {
                            _this.isBack = true;
                            window.removeEventListener('popstate', backFun);
                            _this.$emit('back');
                            if (typeof _this.callBack === 'function') {
                                _this.callBack();
                            }
                        }
                    }, false);
                } else {
                    if (!this.isBack) {
                        window.history.back()
                    }
                }
            }
        },
        props: {
            show: {
                type: Boolean,
                default: false,
                required: true
            },
            callBack: {
                type: Function,
                required: false
            },
            zIndex: {
                type: null
            },
            slide_style: {
                type: null,
                default: ''
            }
        }
    }
</script>
<style scoped>
.slide-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    overflow-y: auto;
    z-index: 99;
}    
</style>
