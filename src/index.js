import 'weui';
import Alert from './components/alert';
import Confirm from './components/confirm';
import Loading from './components/loading';
import Actionsheet from './components/actionsheet';
import Modal from './components/modal';
import PreviewImage from './components/previewImage';
import DatePicker from './components/datepicker';
import Dropdown from './components/dropdown';
import Toast from './components/toast';
import Mutipicker from './components/mutipicker';
import Cascadepicker from './components/cascadepicker';
import UploadImage from './components/uploadImage';
import slideWrap from './components/slideWrap';
import input from './components/input';
import button from './components/button';

import radio from './components/radio'

import {getPlatform} from './utils/dom';

const dingtalkweui = {
	UploadImage,
    slideWrap,
    dwRadio: radio,
    dwInput: input,
    dwButton: button
}


const install = function (Vue, opts = {}) {
	Object.keys(opts).forEach((key) => {
		Vue.prototype[key] = opts[key];
	})
	
	if(getPlatform()) {
		Vue.prototype.platform = getPlatform();
	}

    Object.keys(dingtalkweui).forEach((key) => {
        Vue.component(key, dingtalkweui[key]);
    });

    Vue.prototype.$alert = Alert;
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$loading = Loading;
    Vue.prototype.$actionsheet = Actionsheet;
    Vue.prototype.$modal = Modal;
    Vue.prototype.$previewImage = PreviewImage;
    Vue.prototype.$datepicker = DatePicker;
    Vue.prototype.$dropdown = Dropdown;
    Vue.prototype.$toast = Toast;
    Vue.prototype.$mutipicker = Mutipicker;
    Vue.prototype.$cascadepicker = Cascadepicker;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(dingtalkweui, {install});  