<template>
  <div class="hello">
    <h1>uploadImage demo</h1>
    <Upload-image :files="files" :on-success="uploadSuccess" :ddconfig="ddconfig"></Upload-image>
  </div>
</template>

<script>
export default {
  name: 'uploadImage',
  data () {
    return {
      ddconfig: {},
      files: []
    }
  },
  created() {
    if(this.platform === 'dingtalk') {
      alert(1)
      this.$root.ajaxGet('/getConfig', {
        url: window.location.href
      }, (res) => {
        alert(JSON.stringify(res))
        if(res.result === 'TRUE') {
          this.ddconfig = Object.assgin({
            agentId: '131643752',
            type: 0,
            jsApiList: ['biz.util.uploadImage', 'runtime.info', 'biz.ding.post']
          },res.data);
        }
      })
    }
  },
  methods: {
    uploadSuccess(files) {
      let _this = this;
      if(this.platform === 'dingtalk') {
        files.forEach((_file) => {
          this.files.push({
            url: _file
          })
        })
      } else {
        files.forEach((_file) => {
          var fileReader = new FileReader();
          fileReader.readAsDataURL(_file);
          fileReader.onloadend = function(e) {
            _this.files.push({
              url: e.target.result
            })
          }
        })
        
      }
    }
  }
}
</script>

<style scoped>

</style>
