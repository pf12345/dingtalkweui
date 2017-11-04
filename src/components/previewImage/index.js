import Vue from 'vue';

var gallery = null;
export default {
	show({url = '', success = function() {}, deleteSuccess = function() {}}) {
		let _this = this;
		if(Vue.prototype.platform === 'dingtalk') {
			Vue.prototype.$utils.initDingtalk((dd) => {
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
		} else if(Vue.prototype.$weui) {
			gallery = Vue.prototype.$weui.gallery(url, {
			    className: 'custom-classname',
			    onDelete: function(){
			        if(deleteSuccess && typeof deleteSuccess === 'function') {
					    deleteSuccess();
					}
					_this.hide();
			    }
			});

			if(gallery && success && typeof success === 'function') {
				success();
			}
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