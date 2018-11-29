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
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })


    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        
          var latitude = res.latitude
          var longitude = res.longitude

          wx.chooseLocation({
            latitude: latitude,
            longitude: longitude,
            success: function(res){
                console.log(res)
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })

  


      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  }
})
