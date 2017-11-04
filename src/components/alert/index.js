import Vue from 'vue';

export default {
	show({content = '提示信息', title = '提示', button = '确定', success = function() {}}) {
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.alert({
					message: content,
				    title: title,//可传空
				    buttonName: button,
				    onSuccess : function() {
				    	if(success && typeof success === 'function') {
				    		success();
				    	}
				    },
				    onFail : function(err) {
				    	console.log(err)
				    }
				});
			})
		} else if(Vue.prototype.$weui) {
			return Vue.prototype.$weui.alert(content, {
				title: title,
				buttons: [{
					label: button,
					type: 'primary',
					onClick: function(){ 
						if(success && typeof success === 'function') {
				    		success();
				    	}
					}
				}]
			});
		}
	}
};