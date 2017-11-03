
export const getPlatform = function() {
	if(window.navigator && window.navigator.userAgent) {
		if(window.navigator.userAgent.indexOf('DingTalk') != -1) {
			return 'dingtalk';
		} else if(window.navigator.userAgent.indexOf('MicroMessenger') != -1){
			return 'weixin';
		} else {
			return 'nomal';
		}
	}
	return '';
}

export const resetKeyValue = function(arr) {
	if(arr) {
		let _arr = []
		arr.forEach((_item) => {
			if(typeof _item === 'string') {
				let item = {
					key: _item,
					value: _item,
					title: _item
				}
				_arr.push(item);
			} else {
				_arr.push(_item);
			}
		})
		return _arr;
	}
	return arr;
}