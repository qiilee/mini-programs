Page({
  data: {
    list: [],
    user: {}
  },
  onLoad: function (options) {
    var id=options.id||'177018'
    var that = this
    wx.request({
      url: 'https://n.sqaiyan.com/userplaylists?id='+id,
      success: function (res) {
        that.setData({
          list: res.data.playlist,
          user: res.data.playlist[0].creator
        });
        wx.setNavigationBarTitle({
          title: res.data.playlist[0].creator.nickname
        })
      }
    });
  }
});
