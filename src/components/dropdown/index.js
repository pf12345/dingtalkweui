import Vue from 'vue';

let DefaultItems = [{
	key: '选项1', //显示文本
	value: '123' //值，
},{
	key: '选项2',
	value: '234'
}];

export default {
	show({ defaultItems = DefaultItems, defaultValue = '', success = function() {}}) {
		defaultValue = defaultValue ? defaultValue : (defaultItems[0] ? defaultItems[0].key : '');
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
				dd.biz.util.chosen({
					source: defaultItems,
				   selectedKey: defaultValue, // 默认选中的key
				   onSuccess : function(result) {
				   	if(success && typeof success === 'function') {
				   		success(result);
				   	}
				   },
				   onFail : function(err) {}
				})
			})
			
		} else if(Vue.prototype.$weui) {
			let _defaultItems = [], _defaultValue = '';
			defaultItems.forEach((_item) => {
				_defaultItems.push(Object.assign({label: _item.key}, _item));
				if(defaultValue && _item.key === defaultValue) {
					_defaultValue = _item.value;
				}
			})
			Vue.prototype.$weui.picker(_defaultItems, {
				className: 'dingtalkweui-dropdown',
				container: 'body',
				defaultValue: [_defaultValue],
				onConfirm: function (result) {
					if(success && typeof success === 'function' && result) {
				   		success(result[0]);
				   	}
				},
				id: 'dingtalkweui-dropdown'
			});
		}
	}
};