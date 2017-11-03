<template lang="html">
    <div>
        <div class="weui-cells__title">{{title}}{{placeholder ? '(' + placeholder + ')' : ''}}</div> 
        <div class="weui-cells weui-cells_checkbox">
            <label :for="index" v-for="(_item,index) in _datas" @click.stop="selectCheckbox(index)" class="weui-cell weui-check__label">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" v-if="selected.indexOf(index) != -1" checked="checked">
                    <input type="checkbox" class="weui-check" name="checkbox1" v-else>
                    <i class="weui-icon-checked"></i>
                </div> 
                <div class="weui-cell__bd">{{_item.title}}</div>
            </label> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'checkBox',
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
                type: Array
            }
        },
        data() {
            return {
               selected: [],
               _datas: []
            }
        },
        mounted() {
            this._datas.forEach((_item, _index) => {
                this.value && this.value.forEach((_v) => {
                    if(typeof _v === 'string' && _item.title === _v) {
                        this.selected.push(_index);
                    } else if(typeof _v === 'object' && _item.title === _v.title) {
                        this.selected.push(_index);
                    }
                });
            })
        },
        created() {
            this._datas = this.$utils.resetKeyValue(this.datas);
        },
        methods: {
            selectCheckbox(index) {
                if(this.selected.indexOf(index) != -1) {
                    this.selected.splice(this.selected.indexOf(index), 1);
                } else {
                    this.selected.push(index);
                }
                let _datas = [];
                this.selected.forEach((_index) => {
                    _datas.push(this.datas[_index]);
                })
                this.$emit('input', _datas);
                this.onOk(_datas);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
