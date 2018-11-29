Page({
  data:{
    actionSheetHidden:true,
    modalHidden:true,
    toastHidden:true,
    loadinHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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


  click:function(){
    this.setData({loadinHidden:false})

    var that = this;
    setTimeout(function(){
       that.setData({loadinHidden:true})
    },1500)
  },


  actionSheetChange:function(){
    this.setData({actionSheetHidden:true})
  },

  itemClick:function(event){
    console.log(event)
  },

  modalConfirm:function(){
    console.log("modalConfirm")
    this.setData({modalHidden:true})
  },

  modalCancel:function(){
    console.log("modalCancel")
    this.setData({modalHidden:true})
  },

  toastChange:function(){
    console.log("toastChange")
    this.setData({toastHidden:true})
  }



})