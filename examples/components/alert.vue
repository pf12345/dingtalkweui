<template>
  <div class="hello">
    <h1>Alert demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$alert.show({
      content: 'this is alert test',
      title: 'this is title',
      success: function() {
        alert('click button');
      }
    });
  }
}
</script>

<style scoped>

</style>
