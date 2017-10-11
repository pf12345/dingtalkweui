import Vue from 'vue';
import { getDate, transDateToArr, getYear } from './../../utils/date'

export default {
	show({ defaultValue = getDate(), success = function() {}}) {
		defaultValue = defaultValue ? defaultValue : getDate();
		if(Vue.prototype.platform === 'dingtalk' && window.dd) {
			dd.ready(function() {
				dd.biz.util.datepicker({
				    format: 'yyyy-MM-dd',
				    value: defaultValue, //默认显示日期
				    onSuccess : function(result) {
				        if(success && typeof success === 'function') {
							success(result);
						}
				    },
				    onFail : function(err) {}
				})
			})
		} else if(window.weui) {
			weui.datePicker({
			     start: getYear(defaultValue), 
			     end: 2030,
			     defaultValue: transDateToArr('YYYY-M-D', defaultValue),
			     onConfirm: function(result){
			     	if(success && typeof success === 'function') {
			   			if(result[0] && result[1] && result[2]) {
			   				let _result = [];
			   				result.map((_r) => {
			   					_result.push(_r.value);
			   				})
			   				success(_result.join('-'));
			   			}
			     	}
			     },
			     id: 'datePicker'
			 });
		}
	}
};