<template lang="html">
    <div class="weui-cells weui-cells_form" id="uploader">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        <p class="weui-uploader__title">图片上传</p>
                    </div>
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files" id="uploaderFiles">
                            <li v-for="file in files" class="weui-uploader__file" :style="'background-image: url('+file.url+')'">      
                            </li>
                        </ul>
                        <div class="weui-uploader__input-box" @click="choseImage()">
                           
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
            },
            files: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        created() {
            
        },
        methods: {
            choseImage() {
                let _this = this;
                if (this.platform === 'dingtalk' && window.dd) {
                    if (this.ddconfig) {
                        alert(JSON.stringify(this.ddconfig))
                        dd.config(this.ddconfig);
                        dd.ready(function () {
                            try {
                                dd.biz.util.uploadImage({
                                    compression: true, //(是否压缩，默认为true)
                                    onSuccess: function (result) {
                                        let _files = [];
                                        if (result && result.length) {
                                            _this.onSuccess(result)
                                        }
                                    },
                                    onFail: function (err) {
                                        this.$ddUtils.showToast('访问相机出错');
                                    }
                                });
                            } catch (e) {
                                alert(JSON.stringify(e))
                            }
                        })
                        dd.error(function (err) {
                            alert(JSON.stringify(err))
                        })
                    } else {
                        this.$toast.show({
                            content: '请添加config配置信息'  
                        });
                    }
                } else {
                   let node = document.createElement('INPUT');
                   node.setAttribute('type', 'file');
                   node.setAttribute('accept', 'image/*');
                   node.setAttribute('capture', 'camera');
                   node.setAttribute('multiple', '');
                   node.addEventListener('change', function(e) {
                        if (e.path[0].files && e.path[0].files.length) {
                            _this.onSuccess(Array.from(e.path[0].files))
                        }
                   })
                   node.click();
                }
            }
        }
    }
</script>

<style lang="css">
</style>
