import Vue from 'vue';

export default {
	show({defaultItems1 = [], defaultItems2 = [], defaultValue= [], success = function(){}}) {
		weui.picker(defaultItems1, defaultItems2, {
			defaultValue: defaultValue,
			onChange: function (result) {
				console.log(result);
			},
			onConfirm: function (result) {
				if(success && typeof success === 'function') {
					success(result);
				}
			},
			id: 'dingtailweui-mutipicker'
		});
	}
};