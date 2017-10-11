<template>
  <div class="hello">
    <h1>DropDown demo</h1>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$dropdown.show({
      defaultItems: [{
        key: '苹果', //显示文本
        value: '1' //值，
      },{
        key: '梨子',
        value: '2'
      },{
        key: '葡萄',
        value: '3'
      },{
        key: '荔枝',
        value: '4'
      },{
        key: '其他',
        value: '5'
      }],
      defaultValue: '荔枝',
      success(result) {
        console.log(result);
        try {
          alert(JSON.stringify(result))
        }catch(e) {
          alert(result)
        }
      }
    });
  }
}
</script>

<style scoped>

</style>
