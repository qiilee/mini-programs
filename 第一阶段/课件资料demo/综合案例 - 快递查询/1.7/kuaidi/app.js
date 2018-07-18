//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

 getExpressInfo:function(nu,cb){
   wx.request({
      url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu,
      data: {
        x: '' ,
        y: ''
      },
      header: {
          'apikey': '2e24c33be1e7f7dafebc496c07441138'
      },
      success: function(res) {
       // console.log(res.data)
       cb(res.data)
      }
    })

 },


  globalData:{
    userInfo:null
  }
})