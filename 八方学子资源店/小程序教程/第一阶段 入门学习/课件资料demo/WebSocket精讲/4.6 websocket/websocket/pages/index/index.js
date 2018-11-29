Page({
  data:{
    messsges:['1']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.onSocketMessage(function(res) {
      console.log(res)

      var msg = that.data.messsges
      msg.push(res.data)

      console.log(msg)

      that.setData({messsges:msg})
      

    })

  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  openBtnClick:function(){
    wx.connectSocket({
      url: "ws://localhost:8080/WebSocketDemo/websocket/1",
      data: {},
      // header: {}, // 设置请求的 header
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
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
  },
  sendBtnClick:function(){
    wx.sendSocketMessage({
      data: '你好，我是小程序',
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
  },
  closeBtnClick:function(){
    wx.closeSocket()
  }
})