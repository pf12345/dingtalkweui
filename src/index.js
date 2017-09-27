import 'weui';
import Alert from './components/alert';
import Confirm from './components/confirm';
import {addSDK} from './utils/dom';

const dingtalkweui = {
	
}


const install = function (Vue, opts = {}) {
	Object.keys(opts).forEach((key) => {
		Vue.prototype[key] = opts[key];
	})
	if(opts.platform) {
		Vue.prototype.platform = addSDK(opts.platform);
	}
    Object.keys(dingtalkweui).forEach((key) => {
        Vue.component(key, dingtalkweui[key]);
    });

    Vue.prototype.$alert = Alert;
    Vue.prototype.$confirm = Confirm;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(dingtalkweui, {install});  