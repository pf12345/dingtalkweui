<template lang="html">
    <div>
        <dw-input :title="title" :placeholder="placeholder" :readonly="readonly" :value="showValue" @on-click="choseDate"></dw-input>
        <slide-wrap :show="showSlide" @back="showSlide=false">
            <div style="overflow-y: auto; height: calc(100% - 55px);" class="listScroll"> 
                <ul style="padding-top: 0;overflow: hidden;" class="dw_plugin_list dw_alert_list">   
                    <li v-for="(_item,index) in datas" @click="selectRadio(index)"> 
                        <span class="dw_plugin_list_content">{{_item.title}}</span> 
                        <span class="weui-icon-checked" v-if="index === selected"></span>
                    </li>
                </ul> 
            </div>
            <div class="dw_plugin_btns"> 
                <dw-button type="cancel" style="margin-right: 12px;" @click="cancel">取消</dw-button>
                <dw-button type="confirm" @click="ok">确定</dw-button>
            </div>
        </slide-wrap>
    </div>
</template>

<script>
    export default {
        name: 'date',
        props: {
            onOk: {
                type: Function,
                default() {
                    return {};
                }
            },
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
            datas: {
                type: Array,
                default() {
                    return [];
                }
            },
            selectedIndex: {
                type: Number,
                default() {
                    return 0;
                }
            }
        },
        data() {
            return {
               showValue: '',
               showSlide: false,
               readonly: true,
               selected: 0
            }
        },
        created() {
            this.selected = this.selectedIndex;
        },
        components: {
        },
        methods: {
            choseDate() {
                this.showSlide = true;
            },
            selectRadio(index) {
                this.selected = index;
            },
            cancel() {
                this.showSlide = false;
            },
            ok() {
                this.showSlide = false;
                this.showValue = this.datas[this.selected].title;
                this.onOk(this.datas[this.selected]);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
