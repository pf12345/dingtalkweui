import Vue from 'vue';

export default {
	show({defaultItems = [], defaultValue= [], success = function(){}}) {
		Vue.prototype.$weui.picker(defaultItems, {
        	className: 'dingtalkweui-cascadepicker',
        	container: 'body',
        	defaultValue: defaultValue,
        	onChange: function (result) {
        		console.log(result)
        	},
        	onConfirm: function (result) {
        		if(success && typeof success === 'function') {
        			success(result);
        		}
        	},
        	id: 'dingtalkweui-cascadepicker'
        });
	}
};