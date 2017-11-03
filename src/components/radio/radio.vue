<template lang="html">
    <div>
        <div class="weui-cells__title">{{title}}{{placeholder ? '(' + placeholder + ')' : ''}}</div> 
        <div class="weui-cells weui-cells_radio"> 
          <label class="weui-cell weui-check__label" :for="index" v-for="(_item,index) in _datas" @click.stop="selectRadio(index)"> 
            <div class="weui-cell__bd">{{_item.title}}</div> 
            <div class="weui-cell__ft"> 
              <span :class="{'weui-icon-checked': index === selected}"></span> 
            </div> 
          </label>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'radio',
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
                    return ''
                }
            },
            datas: {
                type: Array,
                default() {
                    return [];
                }
            },
            value: {
                type: [String, Object]
            }
        },
        data() {
            return {
               selected: '',
               _datas: []
            }
        },
        mounted() {
            this._datas.forEach((_item, _index) => {
                if(_item.title === this.value) {
                    this.selected = _index;
                }
            })
        },
        created() {
            this._datas = this.$utils.resetKeyValue(this.datas);
        },
        methods: {
            selectRadio(index) {
                this.selected = index;
                this.$emit('input', this.datas[this.selected]);
                this.onOk(this.datas[this.selected]);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
