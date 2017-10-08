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
    this.$loading.show('loading', function() {
      alert('start loading');
    });
    setTimeout(() => {
      this.$loading.hide(function() {
      alert('end loading');
    });
    }, 3000)
  }
}
</script>

<style scoped>

</style>
