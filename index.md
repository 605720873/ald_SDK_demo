# 阿拉丁统计SDK接入示例

## 一，常规小程序，接入SDK方式(常规是指小程序中没有使用微信插件)

### 1. 配置ald-stat-conf.js文件

> 1.配置在阿拉丁申请的app_key（必填项）</br>
> 2.plugin设置为false

```javascript
exports.app_key = ""; //请在此行填写从阿拉丁后台获取的appkey
exports.appid = ""; //统计分享到群、二维码扫码数据时需填写，不填写无法统计
exports.appsecret = ""; //统计分享到群、二维码扫码数据时需填写，不填写无法统计
exports.getLocation = false; //默认不获取用户坐标位置
exports.plugin = false;  //您的小程序中是否使用了插件。根据是否启用插件会有不同的接入方式，请参考文档文档。

```

### 2.在app.js中引入SDK

```javascript
    const ald = require('./utils/sdk/ald-stat.js')
    App({
        onLaunch : function(){

        },
        onShow : function(){

        }
        // .....
    })

```

## 二，小程序使用插件，接入SDK方式

### 1.  配置ald-stat-conf.js文件

> 1.配置在阿拉丁申请的app_key（必填项）</br>
> 2.plugin设置为true

```javascript
exports.app_key = ""; //请在此行填写从阿拉丁后台获取的appkey
exports.appid = ""; //统计分享到群、二维码扫码数据时需填写，不填写无法统计
exports.appsecret = ""; //统计分享到群、二维码扫码数据时需填写，不填写无法统计
exports.getLocation = false; //默认不获取用户坐标位置
exports.plugin = true;  //您的小程序中是否使用了插件。根据是否启用插件会有不同的接入方式，请参考文档文档。

```

### 2. 在app.js中引入SDK

```javascript
    const App = require('./utils/sdk/ald-stat.js').App
    App({
        onLaunch : function(){

        },
        onShow : function(){

        }
        // .....
    })
```

### 3. 在每个Page页面引入，请注意每个Page页面都需要引入

```javascript
    const Page = require('../../utils/sdk/ald-stat.js').Page
    Page({
        data : {},
        onLoad : function(){

        },
        onShow : function(){

        }
        // ....
    })
    
```

