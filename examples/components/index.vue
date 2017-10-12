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
        <a href="/#/confirm" id="confirmBtn" class="weui-btn weui-btn_default">Confirm</a> 
        <a href="/#/dropdown" id="confirmBtn" class="weui-btn weui-btn_default">DropDown</a> 
        <a href="/#/toast" id="toastBtn" class="weui-btn weui-btn_default">Toast</a> 
        <a href="/#/loading" id="loadingBtn" class="weui-btn weui-btn_default">Loading</a> 
        <a href="/#/actionsheet" id="actionSheetBtn" class="weui-btn weui-btn_default">ActionSheet</a> 
        <a href="/#/modal" id="topTipsBtn" class="weui-btn weui-btn_default">Modal</a> 
        <a href="/#/previewImage" id="topTipsBtn" class="weui-btn weui-btn_default">Preview Image</a> 
        <!-- <a href="javascript:;" id="topTipsBtn" class="weui-btn weui-btn_default">TopTips</a>  -->
        <!-- <a href="javascript:;" id="pickerBtn" class="weui-btn weui-btn_default">Picker</a>  -->
        <a href="/#/datepicker" id="datePickerBtn" class="weui-btn weui-btn_default">DatePicker</a> 
        <a href="/#/mutipicker" id="multiPickerBtn" class="weui-btn weui-btn_default">Multi-Picker</a> 
        <a href="/#/cascadepicker" id="cascadePickerBtn" class="weui-btn weui-btn_default">Cascade-Picker</a> 
      </div> 
      <div class="weui-tab__content" v-show="type === 'bd'" style="display: block"> 
        <div id="form"> <div class="weui-cells__title">性别</div> 
        <div class="weui-cells weui-cells_radio"> 
          <label class="weui-cell weui-check__label" for="r1"> 
            <div class="weui-cell__bd">男</div> 
            <div class="weui-cell__ft"> 
              <input required="" type="radio" class="weui-check" name="sex" value="male" id="r1" tips="请选择性别"> 
              <span class="weui-icon-checked"></span> 
            </div> 
          </label> 
          <label class="weui-cell weui-check__label" for="r2"> 
            <div class="weui-cell__bd">女</div> 
            <div class="weui-cell__ft"> 
              <input type="radio" name="sex" class="weui-check" value="female" id="r2">
              <span class="weui-icon-checked"></span> 
            </div> 
          </label> 
        </div> 
        <div class="weui-cells__title">编码助手(1-2个)</div> 
        <div class="weui-cells weui-cells_checkbox"> 
          <label class="weui-cell weui-check__label" for="c1"> 
            <div class="weui-cell__hd"> 
              <input required="" pattern="{1,2}" type="checkbox" tips="请勾选1-2个敲码助手" class="weui-check" name="assistance" id="c1"> 
              <i class="weui-icon-checked"></i> 
            </div> 
            <div class="weui-cell__bd">黄药师</div> 
          </label> 
          <label class="weui-cell weui-check__label" for="c2"> 
            <div class="weui-cell__hd"> 
              <input type="checkbox" name="assistance" class="weui-check" id="c2"> 
              <i class="weui-icon-checked"></i> 
            </div> 
            <div class="weui-cell__bd">欧阳锋</div> 
          </label> 
          <label class="weui-cell weui-check__label" for="c3"> 
            <div class="weui-cell__hd"> 
              <input type="checkbox" name="assistance" class="weui-check" id="c3"> 
              <i class="weui-icon-checked"></i> 
            </div> 
            <div class="weui-cell__bd">段智兴</div> 
          </label> 
          <label class="weui-cell weui-check__label" for="c4"> 
            <div class="weui-cell__hd"> 
              <input type="checkbox" name="assistance" class="weui-check" id="c4"> 
              <i class="weui-icon-checked"></i> 
            </div> 
            <div class="weui-cell__bd">洪七公</div> 
          </label> 
        </div> 
        <div class="weui-cells weui-cells_form"> 
          <div class="weui-cell"> 
            <div class="weui-cell__hd">
              <label class="weui-label">手机号</label>
            </div> 
            <div class="weui-cell__bd"> 
              <input class="weui-input" type="tel" required="" pattern="^\d{11}$" maxlength="11" placeholder="输入你现在的手机号" emptytips="请输入手机号" notmatchtips="请输入正确的手机号"> 
            </div> 
            <div class="weui-cell__ft"> 
              <i class="weui-icon-warn"></i> 
            </div> 
          </div> 
          <div class="weui-cell"> 
            <div class="weui-cell__hd">
              <label class="weui-label">身份证号码</label>
            </div> 
            <div class="weui-cell__bd"> 
              <input class="weui-input" type="text" required="" pattern="REG_IDNUM" maxlength="18" placeholder="输入你的身份证号码" emptytips="请输入身份证号码" notmatchtips="请输入正确的身份证号码"> 
            </div> 
            <div class="weui-cell__ft"> 
              <i class="weui-icon-warn"></i> 
            </div> 
          </div> 
          <div class="weui-cell weui-cell weui-cell_vcode"> 
            <div class="weui-cell__hd">
              <label class="weui-label">验证码</label>
            </div> 
            <div class="weui-cell__bd"> 
              <input class="weui-input" maxlength="4" type="text" required="" pattern="REG_VCODE" placeholder="点击验证码更换" tips="请输入验证码"> 
            </div> 
            <div class="weui-cell__ft"> 
              <i class="weui-icon-warn"></i> 
              <img class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg"> 
            </div> 
          </div> 
        </div> 
        <div class="weui-btn-area"> 
          <a id="formSubmitBtn" href="javascript:" class="weui-btn weui-btn_primary">提交</a> 
        </div> 
      </div> 
    </div> 
    <div class="weui-tab__content" v-show="type === 'sc'" style="display: block"> 
      <p class="weui-cells__title">图片自动上传</p> 
      <div class="weui-cells weui-cells_form" id="uploader"> 
        <div class="weui-cell"> 
          <div class="weui-cell__bd"> 
            <div class="weui-uploader"> 
              <div class="weui-uploader__hd"> 
                <p class="weui-uploader__title">图片上传</p> 
                <div class="weui-uploader__info">
                  <span id="uploadCount">0</span>/5
                </div> 
              </div> 
              <div class="weui-uploader__bd"> 
                <ul class="weui-uploader__files" id="uploaderFiles"></ul> 
                <div class="weui-uploader__input-box"> 
                  <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple=""> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <p class="weui-cells__title">图片手动上传</p> 
      <div class="weui-cells weui-cells_form" id="uploaderCustom"> 
        <div class="weui-cell"> 
          <div class="weui-cell__bd"> 
            <div class="weui-uploader"> 
              <div class="weui-uploader__hd"> 
                <p class="weui-uploader__title">图片上传</p> 
              </div> 
              <div class="weui-uploader__bd"> 
                <ul class="weui-uploader__files" id="uploaderCustomFiles"></ul> 
                <div class="weui-uploader__input-box"> 
                  <input id="uploaderCustomInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
      <div class="weui-btn-area"> 
        <a id="uploaderCustomBtn" href="javascript:" class="weui-btn weui-btn_primary">上传</a> 
      </div> 
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
    }
  },
  methods: {
    goto(type) {
      this.type = type;
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
