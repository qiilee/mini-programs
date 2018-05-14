var app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    goodDetail:{},
    commentNum:0
  },
  onLoad: function (data) {
    let {id} = data;
    wx.request({
      url: `https://app2.benpaogg.com/shop/api/shop/goods/${id}`,
      header: {
          'Content-Type': 'application/json'
      },
      success: (res)=> {
        let {goods} = res.data.object;
        goods.goodsImageUrlArr=[];
        for(let i=1;i<=3;i++){
            if(goods[`goodsImage${i}Url`]){
                goods.goodsImageUrlArr.push(goods[`goodsImage${i}Url`]);
            }
        }
        this.setData({
          goodDetail: res.data.object
        })
      }
    });
  }
})
