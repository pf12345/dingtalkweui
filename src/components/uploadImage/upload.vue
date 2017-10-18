<template lang="html">
  <div class="weui-cells weui-cells_form" id="uploader">
   <div class="weui-cell">
       <div class="weui-cell__bd">
           <div class="weui-uploader">
               <div class="weui-uploader__hd">
                   <p class="weui-uploader__title">图片上传</p>
                   <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
               </div>
               <div class="weui-uploader__bd">
                   <ul class="weui-uploader__files" id="uploaderFiles"></ul>
                   <div class="weui-uploader__input-box">
                       <input @click="choseImage()" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
</template>

<script>
export default {
    name: 'uploadImage',
    props: {
        ddconfig: {
            type: Object,
            required: true
        },
        onSuccess: {
            type: Function,
            default() {
                return {};
            }
        }
    },
    created() {
        // alert(this.platform)
    },
    methods: {
        choseImage() {
          let _this = this;
          if(this.platform === 'dingtalk' && window.dd) {
            if(this.ddconfig) {
              dd.config(this.config);
              dd.ready(function() {
                try {
                  dd.biz.util.uploadImage({    
                                compression: true, //(是否压缩，默认为true)
                                onSuccess: function(result) {
                                  let _files = [];
                                  if (result && result.length) {

                                  }
                                },
                                onFail: function(err) {
                                  this.$ddUtils.showToast('访问相机出错');
                                }
                              });
                } catch (e) {

                }
              })
              dd.error(function(err) {
                alert(JSON.stringify(err))
              })
            } else {
              this.$toast.show({
                content: '请添加config配置信息'
              });
            }
          } else {
            var uploadCount = 0;
            weui.uploader('#uploader', {
             url: 'http://192.168.103.11:3001/unploadFile', 
             auto: true,
             type: 'file',
             fileVal: 'fileVal',
             compress: {
               width: 1600,
               height: 1600,
               quality: .8
             },
             onBeforeQueued: function(files) {
                       // `this` 是轮询到的文件, `files` 是所有文件

                       if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
                         weui.alert('请上传图片');
                           return false; // 阻止文件添加
                         }
                         if(this.size > 10 * 1024 * 1024){
                           weui.alert('请上传不超过10M的图片');
                           return false;
                         }
                       if (files.length > 5) { // 防止一下子选择过多文件
                         weui.alert('最多只能上传5张图片，请重新选择');
                         return false;
                       }
                       if (uploadCount + 1 > 5) {
                         weui.alert('最多只能上传5张图片');
                         return false;
                       }

                       ++uploadCount;

                       // return true; // 阻止默认行为，不插入预览图的框架
                     },
                     onQueued: function(){
                       console.log(this);

                       // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
                       // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

                       // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
                       // this.stop(); // 中断上传

                       // return true; // 阻止默认行为，不显示预览图的图像
                     },
                     onBeforeSend: function(data, headers){
                       console.log(this, data, headers);
                       // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
                       // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

                       // return false; // 阻止文件上传
                     },
                     onProgress: function(procent){
                       console.log(this, procent);
                       // return true; // 阻止默认行为，不使用默认的进度显示
                     },
                     onSuccess: function (ret) {
                       console.log(this, ret);
                       // return true; // 阻止默认行为，不使用默认的成功态
                     },
                     onError: function(err){
                      _this.$toast.show({
                        isError: true,
                        content: err.message
                      })
                       console.log(this, err);
                       // return true; // 阻止默认行为，不使用默认的失败态
                     }
                   });
          }
        }
    }
}
</script>

<style lang="css">
</style>
