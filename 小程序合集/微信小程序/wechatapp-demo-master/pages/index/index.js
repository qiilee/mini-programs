//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  linkToGoodList:function(){
    wx.navigateTo({
      url: '../show/show'
    })
  },
  onLoad: function () {
    //console.log(ajaxUrl.ajaxUrl());
    // wx.request({
    //     url: ajaxUrl.ajaxUrl()+"?method=index.getHomeData",
    //     data: {
         
    //     },
    //     header: {
    //         'Content-Type': 'application/json'
    //     },
    //     success: function(res) {
    //       console.log(res)
    //     }
    // })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
