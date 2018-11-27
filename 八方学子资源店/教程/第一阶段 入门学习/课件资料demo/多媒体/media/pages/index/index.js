Page({
  data:{
    action:null
  },


  audioPlay:function(){
    this.setData({action:{method:"play"}})
  },

  audioPause:function(){
    
  },

  audioPlaybackRateSpeedUp:function(){
    this.setData({action:{method:"setPlaybackRate",data:2}})
  },

  videoErrorCallback:function(event){
    console.log(event)
  }

  
})