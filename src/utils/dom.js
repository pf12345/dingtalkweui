
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
