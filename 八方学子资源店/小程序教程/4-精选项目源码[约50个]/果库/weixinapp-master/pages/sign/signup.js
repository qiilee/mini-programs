var email = ""
var password = ""
var rpassword = ""
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
    if(rpassword !== password){
      this.setData( { tips: "重复密码不正确" })
      setTimeout(() => {
        this.setData( { tips: "" })
      }, 3000 )
      return false;
    }
    wx.request( {
      url: 'https://wlwywlqk.cn/users/register',
      method: 'post',
      data: {
        email: email,
        password: password
      },
      success: ( res ) => {
        if( res.data == "1" ) {
          this.setData( { tips: '注册成功,正在跳转' })
          setTimeout(() => {
            this.setData( { tips: "" })
            wx.redirectTo({url:"signin"})
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
  },
  bindRPassword: function( event ) {
    rpassword = event.detail.value
  }
})