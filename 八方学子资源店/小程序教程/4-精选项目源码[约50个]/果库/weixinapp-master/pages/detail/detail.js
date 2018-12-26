

Page( {
  data: {
    hidden:false
  },
  onLoad: function(options) {
    var that = this
    this.setData({
      _id: options._id
    })
    wx.request({
      url: 'https://wlwywlqk.cn/goods/getdata?_id='+this.data._id,
      success: function(res){
        that.setData(res.data[0])
        that.setData({hidden: true})
        wx.request({
          url: 'https://wlwywlqk.cn/goods/getdata?pagesize=9&category='+res.data[0].category,
          success: function(res){
            that.setData({
              nine: res.data
            })
          }
        })
      }
    })
  }
})
