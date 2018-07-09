const Page = require('../../utils/sdk/ald-stat.js').Page;
const app = getApp();
Page({
  data: { },
/*
  * 自定义事件示例：
  * 触发自定义事件时，会产生事件上报。
  * 可在控制台NetWork中查看
  */
  Custom(){
    app.aldstat.sendEvent('自定义事件名称',{
      key : "自定义事件参数"
    })
  }
})