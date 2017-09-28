<template>
  <div class="hello">
    <h1>Loading demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$loading.show();
    setTimeout(() => {
      this.$loading.hide();
    }, 3000)
  }
}
</script>

<style scoped>

</style>
