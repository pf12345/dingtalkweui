
import moment from 'moment'

export const getDate = function(format, date) {
	if(!format) {
		format = 'YYYY-MM-DD';
	}
	if(!date) {
		date = new Date();
	}	
	return moment(date).format(format);
}

export const transDateToArr = function(format, date) {
	let _date = getDate(format, date);
	let _tag = '-';
	if(format.indexOf('/') >= 0) {
		_tag = '/';
	}
	if(format.indexOf('.') >= 0) {
		_tag = '.';
	}
	return _date.split(_tag);
}

export const getYear = function(date) {
	return moment(date || new Date()).year();
}