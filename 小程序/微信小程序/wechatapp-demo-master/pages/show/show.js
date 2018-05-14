
var ajaxUrl = require('../../utils/url.js');
var app = getApp()
Page({
  data: {
    imgUrls: [
           
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        page:1,
        postsList:[
          
        ],
        hidden:false
  },
  
  onLoad: function () {
    var that = this;
    //ajax请求数据
    wx.request({
      method:"GET",
      url: ajaxUrl.ajaxUrl()+"?method=index.getHomeData",
      
      data: {
           
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        
        if(res.data.result == 0){
          //console.log(res.data.data)
          //将图片从接口拿过来，并且用七牛参数处理一下
          var bannerImg = [];
          // _.each(res.data.data.banner,function(v,i){
          //     bannerImg.push(ajaxUrl.cdnUrl() + v.image+"?imageView2/1/w/750/h/380/q/60");
          // })
          for(var i in res.data.data.banner){
            bannerImg.push(ajaxUrl.cdnUrl() + res.data.data.banner[i].image+"?imageView2/1/w/750/h/380/q/60");
          }
         
          that.setData({
            'imgUrls':bannerImg
          })
        }
       
      }
    })

    that.fetchImgListDate();
   // console.log(that.data.postsList)
  },
  //跳转至详情页
  redictDetail:function(e){
    var userId =  e.currentTarget.dataset.userid;
    var suitId= e.currentTarget.dataset.suitid;
    var link = "../detail/detail?viewUserId="+userId+"&suitId="+suitId
    wx.navigateTo({
        url: link
      })
  },

  lower:function(e){
    var self = this;
    self.setData({
      page: self.data.page + 1
    });
    
    self.fetchImgListDate({page: self.data.page});
  },
 
  fetchImgListDate:function(data){
    var self = this;
    self.setData({
      hidden: false
    });
      if (!data) data = {};
      if (!data.page) data.page = 1;
      if (data.page === 1) {
        self.setData({
          postsList: []
        });
      }
      wx.request({
          method:"GET",
          url:ajaxUrl.ajaxUrl()+"?method=index.getChoicenessList",
          data: {
              "fromPageId":0,
              "pageSize":10,
              "viewUserId":'',
              "page":self.data.page
          },
          header: {
          'Content-Type': 'application/json'
          },
          success: function(res) {
            console.log(res)
             // var contentObj = [];
               if(res.data.result == 0){
                
                  for(var i in res.data.data.result){
                    self.data.postsList.push({
                        imgUrl: res.data.data.result[i].image+"?imageMogr/v2/auto-orient/thumbnail/750x/quality/80/",
                        userId:res.data.data.result[i].userId,
                        suitId:res.data.data.result[i].suitId
                      });
                  }
               }
               self.setData({
                 postsList:self.data.postsList
               })
              //   self.data.postsList = contentObj
               setTimeout(function () {
                  self.setData({
                    hidden: true
                  });
              }, 300);
          }
      })
      
  }


 
})
