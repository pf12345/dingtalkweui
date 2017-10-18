import Vue from 'vue';

export default {
	show({content = '操作成功', duration = 3000, isError = false}) {
		if(Vue.prototype.platform === 'dingtalk' && window.dd) {
			dd.ready(function() {
				dd.device.notification.toast({
				    icon: '', //icon样式，有success和error，默认为空 0.0.2
				    text: content, //提示信息
				    duration: duration ? duration / 1000 : 3, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
				    delay: 0 //延迟显示，单位秒，默认0			    
				})
			})
		} else if(window.weui) {
			if(!isError) {
				weui.toast(content, {
					duration: duration,
					className: 'dingtalkweui-toast'
				});
			} else {
				weui.topTips(content, {
					duration: duration,
					className: 'dingtalkweui-toast'
				});
			}
			
		}
	}
};