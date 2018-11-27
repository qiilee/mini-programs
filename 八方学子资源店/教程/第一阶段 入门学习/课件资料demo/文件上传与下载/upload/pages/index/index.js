//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},

    avatar:null
  },
  //事件处理函数
  bindViewTap: function() {
    console.log("--bindViewTap--")


    // wx.chooseImage({
    //   success: function(res) {
    //     var tempFilePaths = res.tempFilePaths
    //     wx.uploadFile({
    //       url: 'http://localhost:8080/jpress/test',
    //       filePath: tempFilePaths[0],
    //       name: 'file',
    //       formData:{
    //         'user': 'test'
    //       }
    //     })
    //   }
    // })


    var that = this;
    wx.downloadFile({
        url: 'http://localhost:8080/jpress/attachment/123.jpg',
        type: 'image',
        success: function(res) {
          console.log(res)
          that.setData({avatar:res.tempFilePath})
          
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
  }
})
