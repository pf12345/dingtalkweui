<template>
  <div class="hello">
    <h1>Confirm demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$confirm.show({
      content: 'this is Confirm test',
      title: 'this is title',
      buttons: [{
        label: '确认',
        type: 'default',
        onClick: function(){
          alert('ok')
        }
      }, {
        label: '取消',
        type: 'primary',
        onClick: function(){
          alert('cancel')
        }
      }]
    });
  }
}
</script>

<style scoped>

</style>
