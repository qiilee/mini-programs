//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    spreakingAnimation: {},//放大动画
    j: 1,//帧动画初始图片
    isSpeaking: false,//是否在录音状态
  },
  onLoad: function () {
  },
  //点击开始说话
  startSpeak: function () {
    var _this = this;
    if (!this.data.isSpeaking) {
      speaking.call(this);
      this.setData({
        isSpeaking: true
      })
    } else {
      //去除帧动画循环
      clearInterval(this.timer)
      this.setData({
        isSpeaking: false,
        j: 1
      })
    }
  },
})


function speaking() {
  //话筒帧动画
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
    return
  }, 200);
  //波纹放大,淡出动画
  var _this = this;
  var animation = wx.createAnimation({
    duration: 1000
  })
  animation.opacity(0).scale(3, 3).step();//修改透明度,放大
  this.setData({
    spreakingAnimation: animation.export()
  })
 setTimeout(function(){
    //波纹放大,淡出动画
  var animation = wx.createAnimation({
    duration: 1000
  })
  animation.opacity(0).scale(3, 3).step();//修改透明度,放大
  _this.setData({
    spreakingAnimation_1: animation.export()
  })
  },250)
   setTimeout(function(){
    //波纹放大,淡出动画
  var animation = wx.createAnimation({
    duration: 1000
  })
  animation.opacity(0).scale(3, 3).step();//修改透明度,放大
  _this.setData({
    spreakingAnimation_2: animation.export()
  })
  },500)
}