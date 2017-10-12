<template>
  <div class="hello">
    <h1>Toast demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$toast.show({
      content: '操作成功',
      duration: 3000
    });
  }
}
</script>

<style scoped>

</style>
