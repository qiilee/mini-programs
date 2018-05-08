var postsData=require('../../data/posts-data.js')
Page({
  data:{
    
  }, onLoad:function(){
    // 生命周期函数--监听页面加载1
    
    this.data.postList =postsData.postList;
    this.setData({
      posts_key:postsData.postList
    });
  },
  onPostTap:function(event){
  var postId =event.currentTarget.dataset.postid;
   wx.navigateTo({
      url: '../posts/post-detail/post-detail?id=' + postId

   })
  }

 
  
  
})