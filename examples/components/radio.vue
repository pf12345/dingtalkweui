<template>
  <div class="hello" style="padding: 8px;">
    <dw-radio title="单选控件－demo" :on-ok="onOk" :datas="datas" :selected-index="selectedIndex" placeholder="请选择相关选项"></dw-radio>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      value: '',
      datas: [{
        title: '重庆',
        value: 'chongqin'
      }, {
        title: '成都',
        value: 'chengdu'
      }, {
        title: '广州',
        value: 'guangzhou'
      }],
      selectedIndex: 2
    }
  },
  methods: {
    onOk(result) {
      console.log(result)
    }
  }
}
</script>

<style scoped>

</style>
