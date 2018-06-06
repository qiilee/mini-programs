var ajaxUrl = require('../../utils/url.js');
var util = require('../../utils/util.js');

var app = getApp();
Page({
    data:{
        
        "tag":[
                
        ] , 
        
        image:"",
        content:""
    },
    onLoad:function(options){
        this.fetchData(options.viewUserId,options.suitId);
         
        
    },
    fetchData:function(userId,suitId){
        var that = this;
         wx.request({
            method:"GET",
            url: ajaxUrl.ajaxUrl()+"?method=suit.getInfo",
            
            data: {
                "needCommentCount":10,
                "needCollectCount":10,
                "viewUserId":userId,
                "suitId":suitId
            },
            header: {
                'Content-Type': 'application/json'
            },
            success:function(res){
                   if(res.data.result==0){
                       //console.log(res.data.data)
                    //    that.setData({
                    //         'img':ajaxUrl.cdnUrl() + res.data.data.image+"?imageMogr/v2/auto-orient/thumbnail/750x/quality/80/"
                    //     })
                    that.setData({
                        "image":ajaxUrl.cdnUrl() + res.data.data.image+"?imageMogr/v2/auto-orient/thumbnail/750x/quality/80/",
                         "content":res.data.data.content
                    })
                    var tagList = [];
                    // _.each(res.data.data.tags,function(v,i){
                    //     tagList.push(res.data.data.tags[i])
                    // })
                    for(var i in res.data.data.tags){
                        tagList.push(res.data.data.tags[i])
                    }
                     that.setData({
                         "tag":tagList
                     })   
                 } 
                
            }
            
         })
          
    }
})