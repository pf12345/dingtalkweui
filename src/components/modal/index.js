import Vue from 'vue';

let defaultButtons = [{
	label: '取消',
	type: 'default',
	onClick: function () { alert('取消') }
}, {
	label: '确定',
	type: 'primary',
	onClick: function () { alert('确定') }
}]

let $modal = null;

export default {
	show({content = '提示信息', title = '提示', image = '', buttons = defaultButtons, hideSuccess = function() {}}) {
		if(Vue.prototype.platform === 'dingtalk') {
			let _buttons = [];
			if(buttons && buttons.length) {
				buttons.forEach((_b) => {
					_buttons.push(_b.label);
				})
			}
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.device.notification.modal({
				    image: image, // 标题图片地址
				    title: title, //标题
				    content: content, //文本内容
				    buttonLabels: _buttons,// 最多两个按钮，至少有一个按钮。
				    onSuccess : function(result) {
				    	if(result && buttons[result.buttonIndex] && buttons[result.buttonIndex].onClick
				    	 && typeof buttons[result.buttonIndex].onClick === 'function') {
				    		buttons[result.buttonIndex].onClick();
				    	}
				    },
				    onFail : function(err) {}
				})
			})
		} else if(Vue.prototype.$weui) {
			$modal = Vue.prototype.$weui.dialog({
			    title: title,
			    content: content,
			    className: 'custom-classname',
			    buttons: buttons
			});
		}
	},
	hide() {
		if($modal) {
			$modal.hide(hideSuccess);
		}
	}
};