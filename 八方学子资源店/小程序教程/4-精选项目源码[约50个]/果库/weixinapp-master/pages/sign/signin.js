var email = ""
var password = ""
Page( {
  data: {
    tips: ""
  },
  onLoad: function( event ) {
    console.dir( event )
  },
  bindSubmit: function( event ) {
    if( !/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test( email ) ) {
      this.setData( { tips: "邮箱格式不正确" })
      setTimeout(() => {
        this.setData( { tips: "" })
      }, 3000 )
      return false;
    }
    if( !/[\w]{6,20}/.test( password ) ) {
      this.setData( { tips: "密码格式不正确" })
      setTimeout(() => {
        this.setData( { tips: "" })
      }, 3000 )
      return false;
    }
    wx.request( {
      url: 'https://wlwywlqk.cn/users/login',
      method: 'post',
      data: {
        email: email,
        password: password
      },
      success: ( res ) => {
        if( res.data == "1" ) {
          this.setData( { tips: '登录成功,跳转中...' })
          setTimeout(() => {
            this.setData( { tips: "" })
            wx.redirectTo({url:"../index/index"})
          }, 2000 )
        } else {
          this.setData( { tips: res.data })
          setTimeout(() => {
            this.setData( { tips: "" })
          }, 3000 )
        }
      }
    })
  },
  bindEmail: function( event ) {
    email = event.detail.value
  },
  bindPassword: function( event ) {
    password = event.detail.value
  }
})