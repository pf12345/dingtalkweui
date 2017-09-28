<template>
  <div class="hello">
    <h1>Modal demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$modal.show({
      content: '需求改为如果用户是用微信内置浏览器打开的，则提示用户换一个浏览器打开页面，否则下载不了 apk。那么该如何判断用户是否是用微信浏览器呢？'
    });
  }
}
</script>

<style scoped>

</style>
