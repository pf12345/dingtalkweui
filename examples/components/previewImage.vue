<template>
  <div class="hello">
    <h1>PreviewImage demo</h1>
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
    this.$previewImage.show({
      url: 'https://groups35-images.b0.upaiyun.com/2017/09/wjawi5hg0ff2ntic.jpg',
      success: function() {
        alert('success button');
      },
      deleteSuccess: function() {
        alert('delete button')
      }
    });
  }
}
</script>

<style scoped>

</style>
