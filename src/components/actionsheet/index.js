import Vue from 'vue';

/*
			[
			    {
			        label: '拍照',
			        onClick: function () {
			            console.log('拍照');
			        }
			    }, {
			        label: '从相册选择',
			        onClick: function () {
			            console.log('从相册选择');
			        }
			    }, {
			        label: '其他',
			        onClick: function () {
			            console.log('其他');
			        }
			    }
			]
*/
export default {
	show({title = '提示', cancelButton = '取消', options = [], cancelClick = function(){}}) {
		if(Vue.prototype.platform === 'dingtalk' && window.dd) {
			let _otherButtons = [];
			if(options && options.length) {
				options.forEach(function(_op) {
					_otherButtons.push(_op.label);
				})
			}
			dd.ready(function() {
				dd.device.notification.actionSheet({
				    title: title, //标题
				    cancelButton: cancelButton, //取消按钮文本
				    otherButtons: _otherButtons,
				    onSuccess : function(result) {
				    	if(result && options[result.buttonIndex] && options[result.buttonIndex].onClick
				    	 && typeof options[result.buttonIndex].onClick === 'function') {
				    		options[result.buttonIndex].onClick();
				    	}
				    },
				    onFail : function(err) {}
				})
			})
		} else if(window.weui) {
			weui.actionSheet(options, [
			    {
			        label: cancelButton,
			        onClick: function () {
			            if(cancelClick && typeof cancelClick === 'function') {
			            	cancelClick();
			            }
			        }
			    }
			], {
			    className: 'custom-classname'
			});
		}
	}
};