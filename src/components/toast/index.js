import Vue from 'vue';

export default {
	show({content = '操作成功', duration = 3000, isError = false}) {
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.toast({
				    icon: '', //icon样式，有success和error，默认为空 0.0.2
				    text: content, //提示信息
				    duration: duration ? duration / 1000 : 3, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
				    delay: 0, //延迟显示，单位秒，默认0	
				    onSuccess : function(result) {
				    },
				    onFail : function(err) {
				    }		    
				})
			})
		} else if(Vue.prototype.$weui) {
			if(!isError) {
				Vue.prototype.$weui.toast(content, {
					duration: duration,
					className: 'dingtalkweui-toast'
				});
			} else {
				Vue.prototype.$weui.topTips(content, {
					duration: duration,
					className: 'dingtalkweui-toast'
				});
			}
			
		}
	}
};