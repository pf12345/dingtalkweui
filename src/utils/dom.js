import Vue from 'vue';

const addNode = (src) => {
	var node = document.createElement('SCRIPT');
	var _head = document.getElementsByTagName('head')[0];
	node.src = src;
	if(_head) {
		_head.appendChild(node);
	}
}

export const addSDK = function(platform) {
	if(platform && (platform.toUpperCase() === 'DINGDING' || platform.toUpperCase() === 'DINGTALK')) {
		addNode('http://g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js');
		return 'dingtalk';
	} else if (platform && (platform.toUpperCase() === 'WEIXIN' || platform.toUpperCase() === 'WEUI')) {
		addNode('http://res.wx.qq.com/open/js/jweixin-1.2.0.js');
		return 'weixin';
	}
};