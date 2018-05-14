Page({
	data: {
	  	list:''
	},
	onLoad:function(options){
		var that = this;
		wx.request({
			url:'https://2bsapi.360che.com/56/',
			data:{
				c:'carlist',
				m:'ajaxGetShipList'
			},
			success:function(res){
				that.setData({
					list:res.data
				})
			}
		})
	}
})
