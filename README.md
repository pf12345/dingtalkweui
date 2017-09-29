# dingtalkweui

> 钉钉平台及微信平台及普通手机访问平台vue组件库

## Install

install dingtalkweui through npm

```
npm install dingtalkweui --save
```

user in project

```
import Vue from 'vue'
import dingtalkweui from 'dingtalkweui'


// config = { platform: 'dingding' }
// platform can use 'dingding', 'weixin', 'normal' 

Vue.use(dingtalkweui, config); 

// config可不传

Vue.use(dingtalkweui);

```

## 开发

安装

```
git clone https://github.com/pf12345/dingtalkweui.git
cd dingtalkweui
npm install
npm run dev

```

编译

```
npm run dist
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
