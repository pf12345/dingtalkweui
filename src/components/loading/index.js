import Vue from 'vue';

var loading = null;
export default {
	show(content = '加载中..', success) {
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.showPreloader({
				    text: content, //loading显示的字符，空表示不显示文字
				    showIcon: true, //是否显示icon，默认true
				    onSuccess : function(result) {
				    	if(success && typeof success === 'function') {
				    		success();
				    	}
				    },
				    onFail : function(err) {}
				})
			})
		} else if(Vue.prototype.$weui) {
			loading = Vue.prototype.$weui.loading(content, {
				className: 'custom-classname'
			});
			if(success && typeof success === 'function') {
				success();
			}
		}
	},
	hide(success) {
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.hidePreloader({
					onSuccess : function(result) {
						if(success && typeof success === 'function') {
							success();
						}
					},
					onFail : function(err) {
						alert(err)
					}
				})
			})
		} else if (Vue.prototype.$weui) {
			if(loading) {
				loading.hide(function() {
					if(success && typeof success === 'function') {
						success();
					}
				});
			}
		}
	}
};