import axios from 'axios'

const AJAX_DOMAIN = 'http://192.168.103.11:3001';

export const ajaxGet = function(url, params, success, error_cb) {
	axios.get(AJAX_DOMAIN + url, {
		params: params
	})
	.then(function (response) {
		if(success && typeof success === 'function') {
			success(response.data);
		}
	})
	.catch(function (error) {
		if(error_cb && typeof error_cb === 'function') {
			error_cb(error);
		}
	});
}