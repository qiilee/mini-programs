Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('App onLoad')
  },
  onReady:function(){
    // 页面渲染完成
    console.log('App onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('App onShow')
  },
  onHide:function(){
    // 页面隐藏
    console.log('App onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('App onUnload')
  }
})