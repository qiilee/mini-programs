//index.js
//获取应用实例
var app = getApp();
var cardTeams;
var startX;
var startY;
var endX;
var endY;
var key;
var maxRight = 60;
Page({
  data: {
    cardTeams:[{"id":"aaaaa", "name":"android教程", "url":"http://www.see-source.com", "right":0, "startRight":0},{"id":"bbbb", "name":"小程序教程", "url":"http://www.see-source.com", "right":0, "startRight":0}]
  },
  drawStart : function(e){
     // console.log("drawStart");
    var touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    var cardTeams = this.data.cardTeams;
    for(var i in cardTeams){
        var data = cardTeams[i];
        data.startRight = data.right;
    }
    key = true;
  },
  drawEnd : function(e){
    console.log("drawEnd");
    var cardTeams = this.data.cardTeams;
    for(var i in cardTeams){
        var data = cardTeams[i];
        if(data.right <= 100/2){
            data.right = 0;
        }else{
            data.right = maxRight;
        }
    }
    this.setData({
        cardTeams:cardTeams
    });
  },
  drawMove : function(e){
      //console.log("drawMove");
    var self = this;
    var dataId = e.currentTarget.id;
    var cardTeams = this.data.cardTeams;
    if(key){
        var touch = e.touches[0];
        endX = touch.clientX;
        endY = touch.clientY;
        console.log("startX="+startX+" endX="+endX );
        if(endX - startX == 0)
           return ;
        var res = cardTeams;
           //从右往左

            if((endX - startX) < 0){
                for(var k in res){
                    var data = res[k];
                    if(res[k].id == dataId){
                        var startRight = res[k].startRight;
                        var change = startX - endX;
                        startRight += change;
                        if(startRight > maxRight)
                            startRight = maxRight;
                        res[k].right = startRight;
                    }
                }
            }else{//从左往右
                for(var k in res){
                    var data = res[k];
                    if(res[k].id == dataId){
                        var startRight = res[k].startRight;
                        var change = endX - startX;
                        startRight -= change;
                        if(startRight < 0)
                            startRight = 0;
                        res[k].right = startRight ;
                    }
                }
            }
            self.setData({
                cardTeams:cardTeams
            });
                    
    }
  },
  //删除item
  delItem: function(e){
    var dataId = e.target.dataset.id;
    console.log("删除"+dataId);
    var cardTeams = this.data.cardTeams;
    var newCardTeams = []; 
    for(var i in cardTeams){
        var item = cardTeams[i];
        if(item.id != dataId){
          newCardTeams.push(item);
        }
    }
    this.setData({
        cardTeams:newCardTeams
     });
  },
  onLoad: function () {
    console.log('onLoad:'+app.globalData.domain)
    
  }
})