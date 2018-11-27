Page({
  data:{
    text:"这里是文章内容...\n 第二行",
    icons:  [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('页面初始化')
  },
  onReady:function(){
    // 页面渲染完成
    console.log('页面渲染完成')
  },
  onShow:function(){
    // 页面显示
    console.log('页面显示')
  },
  onHide:function(){
    // 页面隐藏
    console.log('页面隐藏')
  },
  onUnload:function(){
    // 页面关闭
    console.log('页面关闭')
  }
})