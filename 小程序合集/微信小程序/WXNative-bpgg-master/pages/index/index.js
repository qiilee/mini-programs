//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    recommendationList:[],
    hotSaleList: [],
    total:0,
    page:1,
    order:'DESC',
    sort:'sale_num',
    loadAnimation:true,
    noMore:false
  },
  onLoad: function () {
    wx.request({
      url: 'https://app3.benpaogg.com/api/api/shop/seller/',
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        this.setData({
          imgUrls: res.data.object
        })
      }
    });
    wx.request({
      url: 'http://app3.benpaogg.com/api/api/shop/seller/',
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        this.setData({
          imgUrls: res.data.object
        })
      }
    });
    wx.request({
      url: 'http://app2.benpaogg.com/shop/api/message/ad/SHOP/',
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        this.setData({
          imgUrls: res.data.object
        })
      }
    });
    wx.request({
      url: 'http://app2.benpaogg.com/shop/api/shop/storegoods/1/',
      data:{
        isGiftGoods:true,
        page:0,
        rows:10
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        this.setData({
          recommendationList: res.data.rows
        })
      }
    });
    wx.request({
      url: 'http://app2.benpaogg.com/shop/api/shop/storegoods/1/',
      data: {
        isNewGoods:true,
        page:this.data.page,
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        this.setData({
          hotSaleList: res.data.rows,
          total: res.data.total,
          loadAnimation:false
        })
      }
    });
  },
  onReachBottom:function(){
    console.log('more')
    if(this.data.noMroe||this.data.loadAnimation)return;
    if(this.data.page*10<=this.data.total){
        this.setData({
          page: this.data.page+1,
          loadAnimation:true
        })
        wx.request({
          url: 'http://app2.benpaogg.com/shop/api/shop/storegoods/1/',
          data: {
            isNewGoods:true,
            page:this.data.page,
          },
          header: {
              'Content-Type': 'application/json'
          },
          success: (res)=> {
            this.setData({
              hotSaleList: this.data.hotSaleList.concat(res.data.rows),
              loadAnimation:false
            })
          }
        });
    }else{
      this.setData({
        noMore:true
      })
    }
  },
  toDetail:(id)=>{
    wx.navigateTo({
      url: `pages/goodDetail/goodDetail?id=${id}`
    })
  }
})
