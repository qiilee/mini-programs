//index.js
//获取应用实例
var app = getApp()
var shiftdata = {
  1: "65%",
  0: "15%"
}
var ran = 100
Page( {
  data: {
    shiftanimation: {},
    goods: [],
    articles: [],
    hidden: false,
    margintop: -52,
    margintop2: -52,
    rotate: 0,
    scrolltop: 0,
    current: 0,
    scrollinner: "auto",
    duration: "0",
    playstate: "paused",
    rotate2: 0,
    scrolltop2: 0,
    scrollinner2: "auto",
    duration2: "0",
    playstate2: "paused"
  },
  //事件处理函数
  bindHeaderTap: function( event ) {
    console.dir( "header" )
    this.setData( {
      current: event.target.dataset.index,
    });
    this.toggleShift()
  },
  bindSwiper: function( event ) {
    this.setData( {
      current: event.detail.current,
    });
    this.toggleShift()
  },
  toggleShift: function() {
    this.shiftanimation.left( shiftdata[ this.data.current ] ).step()
    this.setData( {
      shiftanimation: this.shiftanimation.export()
    })
  },

  //Scroll事件
  onScrollToUpper: function( event ) {
    console.dir( "onScrollToLower" )
  },
  onScrollToLower: function( event ) {

  },
  onScroll: function( event ) {
    if( event.detail.scrollTop == 0 ) {
      that.data["index"+suffix] = 0
    }
  },

  onShow: function() {
    console.log( 'onShow' )
  },
  onLoad: function() {
    console.log( 'onLoad' )
    this.shiftanimation = wx.createAnimation( {
      duration: 500,
      timingFunction: "ease",
    })
    this.shiftanimation.left( "15%" ).step();
    this.setData( {
      shiftanimation: this.shiftanimation.export()
    })
    
    initPullRefresh( this, "", function() {
          ran += 16
          wx.request( {
            url: 'https://wlwywlqk.cn/goods/getdata?pageindex=' + ran + '&pagesize=16',
            success: function( res ) {
              that.setData( {
                goods: res.data,
              })
              that.data.handle()
            }
          });
        })
    initPullRefresh( this, "2", function() {
          ran += 16
          wx.request( {
            url: 'https://wlwywlqk.cn/goods/getdata?pageindex=' + ran + '&pagesize=16',
            success: function( res ) {
              that.setData( {
                articles: res.data,
              })
              that.data.handle2()
            }
          });
        })
    var that = this
    wx.request( {
      url: 'https://wlwywlqk.cn/goods/getdata?pageindex=' + ran + '&pagesize=16',
      success: function( res ) {
        that.setData( {
          goods: res.data,
          hidden: true,
        })
      }
    });
    ran += 16
    wx.request( {
      url: 'https://wlwywlqk.cn/goods/getdata?pageindex=' + ran + '&pagesize=16',
      success: function( res ) {
        that.setData( {
          articles: res.data,
        })
      }
    });


  },
})

function initPullRefresh( that, suffix, handle ) {
  var index = 0
  var y = 0
  var dy = 0
  var r = 0
  var start = false
  var refresh = false
  var obj = {}
  obj["scrollinner"+suffix] = "auto"
  obj["playstate"+suffix] = "paused"
  obj["margintop"+suffix] = -52
  obj["rotate"+suffix] = "0"
  obj["duration"+suffix] = "0"

  that[ "onScroll"+suffix ] = function( event ) {
    if( event.detail.scrollTop == 0 ) {
      index = 0
    }
  }



  that[ "onTouchStart"+suffix ] = function( event ) {
    console.log( index )
    if( index == 0 ) {
      start = true
      y = event.touches[ 0 ].clientY

      that.setData( {
      })
    } else {
      return false
    }
  }
  that[ "onTouchMove"+suffix ] = function( event ) {

    if( start ) {
      dy = event.touches[ 0 ].clientY - y
      r = 250 * 2 / Math.PI * Math.atan( dy / 500 )
      if( r < 0 ) {
        if( refresh ) {
          return false
        } else {
          start = false
          index = 1
          return false
        }
      }
      refresh = true
      obj["scrollinner"+suffix] = "100%"
      obj["margintop"+suffix] = -52 + r
      obj["rotate"+suffix] = 5*r
      that.setData(obj)
    } else {
      return false
    }
    index = 1
  }
  that[ "onTouchEnd"+suffix ] = function( event ) {
    if( start ) {
      index = 0
      
      obj["duration"+suffix] = ".2"
      that.setData( obj )

      if( r >= 52 ) {
        obj["playstate"+suffix] = "running"
        obj["margintop"+suffix] = 0
        that.setData(obj)

        setTimeout( handle, 1000 )
      } else {
        
        obj["scrollinner"+suffix] = "auto"
        obj["margintop"+suffix] = -52
        that.setData(obj)
        setTimeout( function() {
          obj["duration"+suffix] = 0
          that.setData(obj)
        }, 200 );
      }
      start = false
      refresh = false
    } else {
      return false
    }
  }
  that.data["handle"+suffix] = function (){
      obj["playstate"+suffix] = "paused"
      obj["margintop"+suffix] = -52
      obj["scrollinner"+suffix] = "auto"
      that.setData(obj)
      setTimeout( function() {
        obj["duration"+suffix] = "0"
        that.setData(obj)
    }, 200 );
  }
}
