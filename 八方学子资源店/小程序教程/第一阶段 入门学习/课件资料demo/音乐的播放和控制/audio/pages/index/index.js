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
    wx.pauseBackgroundAudio({
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    wx.getBackgroundAudioPlayerState({
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


    wx.onBackgroundAudioPlay(function() {
      console.log("--onBackgroundAudioPlay--")
    })

  },

  onReady:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      success: function(res){
        // succe
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
