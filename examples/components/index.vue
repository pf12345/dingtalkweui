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
        <a @click="alert()" id="alertBtn" class="weui-btn weui-btn_default">Alert</a> 
        <a @click="actionsheet()" id="actionSheetBtn" class="weui-btn weui-btn_default">ActionSheet</a> 
        <a @click="confirm()" id="confirmBtn" class="weui-btn weui-btn_default">Confirm</a> 
        <a @click="datepicker()" id="datePickerBtn" class="weui-btn weui-btn_default">DatePicker</a> 
        <a @click="cascadepicker()" id="cascadePickerBtn" class="weui-btn weui-btn_default">Cascade-Picker</a> 
        <a @click="dropdown()" id="confirmBtn" class="weui-btn weui-btn_default">DropDown</a> 
        <a @click="loading()" id="loadingBtn" class="weui-btn weui-btn_default">Loading</a> 
        <a @click="modal()" id="topTipsBtn" class="weui-btn weui-btn_default">Modal</a> 
        <a @click="mutipicker()" id="multiPickerBtn" class="weui-btn weui-btn_default">Multi-Picker</a> 
        <a @click="previewImage()" id="topTipsBtn" class="weui-btn weui-btn_default">Preview Image</a> 
        <a @click="toast()" id="toastBtn" class="weui-btn weui-btn_default">Toast</a> 
      </div> 
      <div class="weui-tab__content" v-show="type === 'bd'" style="display: block"> 
        <search-bar></search-bar>
        <div id="form"> 

          <dw-radio :datas="radioOptions" v-model="radioValue" title="性别"></dw-radio>
          
          <dw-checkbox :datas="checkboxOptions" v-model="checkboxValue" title="天下第一" placeholder="随意选"></dw-checkbox>

          <dw-form title="表单">
            <dw-input title="手机号" placeholder="输入你的手机号码"></dw-input>

            <dw-input title="身份证号码" placeholder="输入你的身份证号码"></dw-input>
            
            <dw-input title="验证码" placeholder="请输入验证码"></dw-input>

            <dw-textarea title="文本域" v-model="textarea" placeholder="说明"></dw-textarea>
          </dw-form>
        
        
          <div class="weui-btn-area"> 
            <dw-button type="primary">提交</dw-button>
          </div> 
        </div> 
      </div> 
      <div class="weui-tab__content" v-show="type === 'sc'" style="display: block"> 
        <Upload-image :files="files" :on-success="uploadSuccess" :ddconfig="ddconfig"></Upload-image>
      </div> 
      <div class="weui-tab__content" v-show="type === 'qt'" style="display: block"> 
          <dw-form title="跳转列表项">
            <dw-link target="_current" href="/#/buttons">按钮(Buttom)</dw-link>
            <dw-link target="_current" href="/#/input">输入框(Input)</dw-link>
            <dw-link target="_current" href="/#/radio">单选(Radio)</dw-link>
            <dw-link target="_current" href="/#/swiper">图片轮播(Swiper)</dw-link>
            <dw-link target="_current" href="/#/cardView">卡片视图(cardView)</dw-link>
          </dw-form> 
          <tabbar :tabs="tabs" :on-chose="tabsChose"></tabbar>
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
      textarea: '测试文本信息',
      radioOptions: ['男', '女'],
      radioValue: '',
      checkboxOptions: ['黄药师', '欧阳锋', '洪七公'],
      checkboxValue: [],
      tabs: [{
        title: '微信',
        icon: 'https://weui.io/images/icon_tabbar.png',
        badge: 5
      },{
        title: '通讯录',
        icon: 'https://weui.io/images/icon_tabbar.png'
      },{
        title: '发现',
        icon: 'https://weui.io/images/icon_tabbar.png',
        dot: true
      },{
        title: '我',
        icon: 'https://weui.io/images/icon_tabbar.png'
      },{
        title: '其他',
        icon: 'https://weui.io/images/icon_tabbar.png'
      }]
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
    },
    alert() {
      this.$alert.show({
        content: 'this is alert test',
        title: 'this is title',
        success: function() {
          alert('alert success callback');
        }
      });
    },
    actionsheet() {
      this.$actionsheet.show({
        title: 'this is actionsheet',
        options: [
          {
            label: '苹果',
            onClick() {
              alert('select 苹果')
            }
          },
          {
            label: '葡萄',
            onClick() {
              alert('select 葡萄')
            }
          },
          {
            label: '栗子',
            onClick() {
              alert('select 栗子')
            }
          }
        ],
        cancelClick: function() {
          alert('cancel');
        }
      });
    },
    confirm() {
      this.$confirm.show({
        content: 'this is Confirm test',
        title: 'this is title',
        buttons: [{
          label: '确认',
          type: 'default',
          onClick: function(){
            alert('ok')
          }
        }, {
          label: '取消',
          type: 'primary',
          onClick: function(){
            alert('cancel')
          }
        }]
      });
    },
    datepicker() {
      this.$datepicker.show({
        defaultValue: '2016-10-01',
        success(result) {
          try {
            alert(JSON.stringify(result))
          }catch(e) {
            alert(result)
          }
        }
      });
    },
    cascadepicker() {
      this.$cascadepicker.show({
        defaultItems: [{
            label: '广东',
            value: 0,
            children: [{
                label: '广州',
                value: 0,
                children: [{
                    label: '海珠',
                    value: 0
                }, {
                    label: '番禺',
                    value: 1
                }]
            }, {
                label: '佛山',
                value: 1,
                children: [{
                    label: '禅城',
                    value: 0
                }, {
                    label: '南海',
                    value: 1
                }]
            }]
        }, {
            label: '广西',
            value: 1,
            children: [{
                label: '南宁',
                value: 0,
                children: [{
                    label: '青秀',
                    value: 0
                }, {
                    label: '兴宁',
                    value: 1
                }]
            }, {
                label: '桂林',
                value: 1,
                children: [{
                    label: '象山',
                    value: 0
                }, {
                    label: '秀峰',
                    value: 1
                }]
            }]
        }],
        defaultValue: [0, 1, 1],
        success: function(result) {
          try {
            alert(JSON.stringify(result))
          }catch(e) {
            alert(result);
          } 
        }
      });
    },
    dropdown() {
      this.$dropdown.show({
        defaultItems: [{
          key: '苹果', //显示文本
          value: '1' //值，
        },{
          key: '梨子',
          value: '2'
        },{
          key: '葡萄',
          value: '3'
        },{
          key: '荔枝',
          value: '4'
        },{
          key: '其他',
          value: '5'
        }],
        defaultValue: '荔枝',
        success(result) {
          console.log(result);
          try {
            alert(JSON.stringify(result))
          }catch(e) {
            alert(result)
          }
        }
      });
    },
    loading() {
      this.$loading.show('加载中...', function() {
        // alert('start loading');
      });
      setTimeout(() => {
        this.$loading.hide(function() {
          // alert('end loading');
        });
      }, 3000)
    },
    modal() {
      this.$modal.show({
        content: '需求改为如果用户是用微信内置浏览器打开的，则提示用户换一个浏览器打开页面，否则下载不了 apk。那么该如何判断用户是否是用微信浏览器呢？'
      });
    },
    mutipicker() {
      this.$mutipicker.show({
        defaultItems1: [{
            label: '1',
            value: '1'
        }, {
            label: '2',
            value: '2'
        }, {
            label: '3',
            value: '3'
        }],
        defaultItems2: [{
            label: 'A',
            value: 'A'
        }, {
            label: 'B',
            value: 'B'
        }, {
            label: 'C',
            value: 'C'
        }],
        defaultValue: ['3', 'A'],
        success: function(result) {
          try {
            alert(JSON.stringify(result))
          }catch(e) {
            alert(result);
          } 
        }
      });
    },
    previewImage() {
      this.$previewImage.show({
        url: 'https://groups35-images.b0.upaiyun.com/2017/09/wjawi5hg0ff2ntic.jpg',
        success: function() {
          alert('success button');
        },
        deleteSuccess: function() {
          alert('delete button')
        }
      });
    },
    toast() {
      this.$toast.show({
        content: '操作成功',
        duration: 3000
      });
    },
    tabsChose(tab) {
      alert(JSON.stringify(tab))
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
