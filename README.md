# dingtalkweui

> 钉钉平台、微信平台及普通手机访问平台开发的vue组件库, 能够更快、更方便的调用钉钉sdk、微信sdk及进行普通手机页面开发；


## Docs

- [actionsheet](docs/actionsheet.md)
- [alert](docs/alert.md)
- [confirm](docs/confirm.md)
- [loading](docs/loading.md)
- [preview image](docs/previewImage.md)

## Install

install dingtalkweui through npm

```
npm install dingtalkweui --save
```


add script tag

```
// 在钉钉中使用时，添加钉钉sdk
<script src="http://g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js"></script>

// 在微信或者其他手机页面中使用时，添加weui
<script type="text/javascript" src="https://res.wx.qq.com/open/libs/weuijs/1.1.2/weui.min.js"></script>

```

use in project

```
import Vue from 'vue'
import dingtalkweui from 'dingtalkweui'

Vue.use(dingtalkweui);


// config = { platform: 'dingding' }
// platform can use 'dingding', 'weixin', 'normal' 

或者 Vue.use(dingtalkweui, config); 



```

## 开发

安装

```
git clone https://github.com/pf12345/dingtalkweui.git
cd dingtalkweui
npm install
```

运行

```
npm run dev
```

编译

```
npm run dist
```

<!-- ### 文档

<a href="https://pf12345.gitbooks.io/dingtalkweui-api/content/" target="_blank">Documents</a> -->


### 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。


### License

The MIT License(http://opensource.org/licenses/MIT)

请自由地享受和参与开源

