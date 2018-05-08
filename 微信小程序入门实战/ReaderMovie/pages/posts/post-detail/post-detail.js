var postsData=require('../../../data/posts-data.js')
Page({
    data:{

    },

     onLoad:function(option){
         var postId = option.id;
         this.data.currentPostId=postId;
         var postData=postsData.postList[postId];//
        this.setData({
         postData:postsData.postList[postId]
        });
   //收藏开始
   //初始化代码
        var postsCollected= wx.getStorageSync('posts_collected');
        if(postsCollected){
                var postCollected= postsCollected[postId]
                this.setData({
                    collected:postCollected
                })
        }else{
            var postsCollected={}
                postsCollected[postId]=false;
                wx.setStorageSync('posts_collected', postsCollected);
            
        }
        
     },
     //点击时候的代码
     onColletionTap:function(event){
         //拿到这个缓存的值
         var postsCollected=wx.getStorageSync('posts_collected');
         //拿到这个值
         var postCollected = postsCollected[this.data.currentPostId];
         //取反操作 收藏的变成未收藏
         postCollected=!postCollected;
         postsCollected[this.data.currentPostId]=postCollected;
         //更新文章是否的缓存值
         wx.setStorageSync('posts_collected',postsCollected);
         //更新数据绑定变量，从而实现切换图片
         this.setData({
             collected:postCollected
         })
         wx.showToast({
             title:postCollected?'收藏成功':'取消成功',
             duration:800,
             icon:'success'
         })
     }







    //  onClollectionTap:function(event){
    //      var game=wx.getStorageInfoSync('key');
    //      console.log(game)
    //  },
    //  onClollectionTap2:function(event){
    //      var gme=wx.clearStorageSync();
    //     //  var game=wx.removeStorage({
    //     //     key: 'key'
    //     //缓存最大不能超过10m
    //     //     })
     //}
})