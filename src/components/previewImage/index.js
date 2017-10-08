import Vue from 'vue';

var gallery = null;
export default {
	show({url = '', success = function() {}, deleteSuccess = function() {}}) {
		let _this = this;
		if(Vue.prototype.platform === 'dingtalk' && window.dd) {
			dd.ready(function() {
				dd.biz.util.previewImage({
				    urls: [url],//图片地址列表
				    current: url,//当前显示的图片链接
				    onSuccess : function(result) {
				       if(success && typeof success === 'function') {
				    		success();
				    	}
				    },
				    onFail : function(err) {}
				})
			})
		} else if(window.weui) {
			gallery = weui.gallery(url, {
			    className: 'custom-classname',
			    onDelete: function(){
			        if(deleteSuccess && typeof deleteSuccess === 'function') {
					    deleteSuccess();
					}
					_this.hide();
			    }
			});
		}
	},
	hide(cb) {
		if(gallery) {
			gallery.hide(function() {
			    if(cb && typeof cb === 'function') {
				    cb();
				}
			});
		}
	}
};