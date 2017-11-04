import Vue from 'vue';

const defaulButtons = [{
	label: '确认',
	type: 'default',
	onClick: function(){}
}, {
	label: '取消',
	type: 'primary',
	onClick: function(){}
}]
export default {
	show({content = '提示信息', title = '提示', buttons = defaulButtons}) {
		if(Vue.prototype.platform === 'dingtalk') {
			let _buttons = [];
			if(buttons && buttons.length) {
				buttons.forEach((_b) => {
					_buttons.push(_b.label);
				})
			}
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.confirm({
				    message: content,
				    title: title,
				    buttonLabels: _buttons,
				    onSuccess : function(result) {
				    	if(result && buttons[result.buttonIndex]) {
				    		let _button = buttons[result.buttonIndex];
				    		if(_button.onClick && typeof _button.onClick === 'function') {
				    			_button.onClick();
				    		}
				    	}
				    },
				    onFail : function(err) {}
				});
			})
		} else if(Vue.prototype.$weui) {
			return Vue.prototype.$weui.confirm(content, {
			    title: title,
			    buttons: defaulButtons
			});
		}
	}
};