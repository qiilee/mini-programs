Page({
  data:{
    text:"Page detail",
    url: '',
    height: 0,
    width: 0,
    loadingHidden: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)

    console.log(options.url)
    this.setData({
      url: options.url,
      height: options.height,
      width: options.width,
      loadingHidden: true

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
  }
})