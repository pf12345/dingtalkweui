<template>
  <div class="hello">
    <h1>uploadImage demo</h1>
    <Upload-image :ddconfig="ddconfig"></Upload-image>
  </div>
</template>

<script>
export default {
  name: 'uploadImage',
  data () {
    return {
      ddconfig: {}
    }
  },
  created() {
    this.$root.ajaxGet('/getConfig', {
      url: window.location.href
    }, (res) => {
      if(res.result === 'TRUE') {
        this.ddconfig = Object.assgin({
          agentId: '131643752',
          type: 0,
          jsApiList: ['biz.util.uploadImage', 'runtime.info', 'biz.ding.post']
        },res.data);
      }
    })
  }
}
</script>

<style scoped>

</style>
