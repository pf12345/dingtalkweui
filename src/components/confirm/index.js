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
	show({content = '提示信息', title = '提示', buttons = defaulButtons, success = function() {}}) {
		if(Vue.prototype.platform === 'dingtalk' && window.dd) {
			let _buttons = [];
			if(buttons && buttons.length) {
				buttons.forEach((_b) => {
					_buttons.push(_b.label);
				})
			}
			dd.ready(function() {
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
		} else if(window.weui) {
			return weui.alert(content, {
				title: title,
				buttons: buttons
			});
		}
	}
};