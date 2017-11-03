<template>
  <div class="weui-tab" id="tab"> 
    <div class="weui-navbar"> 
      <div class="weui-navbar__item" @click="goto('fq')" :class="{'weui-bar__item_on': type === 'fq'}">反馈</div> 
      <div class="weui-navbar__item" @click="goto('bd')" :class="{'weui-bar__item_on': type === 'bd'}">表单</div> 
      <div class="weui-navbar__item" @click="goto('sc')" :class="{'weui-bar__item_on': type === 'sc'}">上传</div> 
      <div class="weui-navbar__item" @click="goto('qt')" :class="{'weui-bar__item_on': type === 'qt'}">其它</div> 
    </div> 
    <div class="weui-tab__panel"> 
      <div class="weui-tab__content page_feedback" v-show="type === 'fq'" style="display: block"> 
        <a href="/#/alert" id="alertBtn" class="weui-btn weui-btn_default">Alert</a> 
        <a href="/#/actionsheet" id="actionSheetBtn" class="weui-btn weui-btn_default">ActionSheet</a> 
        <a href="/#/confirm" id="confirmBtn" class="weui-btn weui-btn_default">Confirm</a> 
        <a href="/#/datepicker" id="datePickerBtn" class="weui-btn weui-btn_default">DatePicker</a> 
        <a href="/#/cascadepicker" id="cascadePickerBtn" class="weui-btn weui-btn_default">Cascade-Picker</a> 
        <a href="/#/dropdown" id="confirmBtn" class="weui-btn weui-btn_default">DropDown</a> 
        <a href="/#/loading" id="loadingBtn" class="weui-btn weui-btn_default">Loading</a> 
        <a href="/#/modal" id="topTipsBtn" class="weui-btn weui-btn_default">Modal</a> 
        <a href="/#/mutipicker" id="multiPickerBtn" class="weui-btn weui-btn_default">Multi-Picker</a> 
        <a href="/#/previewImage" id="topTipsBtn" class="weui-btn weui-btn_default">Preview Image</a> 
        <a href="/#/toast" id="toastBtn" class="weui-btn weui-btn_default">Toast</a> 
        <a href="/#/uploadImage" id="uploadImageBtn" class="weui-btn weui-btn_default">Upload-Image</a> 
        <a href="/#/radio" id="uploadImageBtn" class="weui-btn weui-btn_default">Upload-Image</a>
        <!-- <a href="javascript:;" id="topTipsBtn" class="weui-btn weui-btn_default">TopTips</a>  -->
        <!-- <a href="javascript:;" id="pickerBtn" class="weui-btn weui-btn_default">Picker</a>  -->
      </div> 
      <div class="weui-tab__content" v-show="type === 'bd'" style="display: block"> 
        <div id="form"> 

          <dw-radio :datas="radioOptions" v-model="radioValue" title="性别"></dw-radio>
          
          <dw-checkbox :datas="checkboxOptions" v-model="checkboxValue" title="天下第一" placeholder="随意选"></dw-checkbox>

        <div class="weui-cells weui-cells_form"> 
          <dw-input title="手机号" placeholder="输入你的手机号码"></dw-input>

          <dw-input title="身份证号码" placeholder="输入你的身份证号码"></dw-input>
          
          <dw-input title="验证码" placeholder="请输入验证码"></dw-input>
          
        </div> 

        <div class="weui-btn-area"> 
          <a id="formSubmitBtn" href="javascript:" class="weui-btn weui-btn_primary">提交</a> 
        </div> 
      </div> 
    </div> 
    <div class="weui-tab__content" v-show="type === 'sc'" style="display: block"> 
      
      <Upload-image :files="files" :on-success="uploadSuccess" :ddconfig="ddconfig"></Upload-image>
    </div> 
    <div class="weui-tab__content" v-show="type === 'qt'" style="display: block"> 
      <h3 style="padding: 40px 0; text-align: center">其他组件，敬请期待</h3>
    </div> 
  </div> 
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      type: 'fq', // fq, bd, sc, qt
      ddconfig: {},
      files: [],
      radioOptions: ['男', '女'],
      radioValue: '',
      checkboxOptions: ['黄药师', '欧阳锋', '洪七公'],
      checkboxValue: []
    }
  },
  methods: {
    goto(type) {
      this.type = type;
    },
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
.page_feedback {
    padding: 15px;
    overflow: auto;
    background-color: #FFF;
}
#tab {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.weui-tab__panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
