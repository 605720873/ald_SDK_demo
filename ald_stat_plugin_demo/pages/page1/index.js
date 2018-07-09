const Page = require('../../utils/sdk/ald-stat.js').Page;
const app = getApp();
Page({
  data: {},

  goCustom(){
    wx.navigateTo({
      url: '../page2/index',
    })
  },
  // 在不填写path/title,path默认为当前页，title默认是小程序名称
  onShareAppMessage: function () {
  }
})