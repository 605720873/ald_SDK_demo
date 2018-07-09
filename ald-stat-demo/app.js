const ald = require('./utils/sdk/ald-stat.js');
var time = Date.now();
App({
  onLaunch: function () {

  },
  // 在App周期中使用自定义事件
  onShow : function(){
    this.aldstat.sendEvent('小程序启动花费时间',{
      "花费时长" : Date.now() - time
    })
  },
  globalData: {
    userInfo: null
  }
})