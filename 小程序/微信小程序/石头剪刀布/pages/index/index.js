
var numAi = 0
var timer
Page({
  data:{
    //控制按钮是否可点击
    btnState:false,
    //记录获胜次数
    winNum:0,
    //中间的话“Ho~ You Win”
    gameOfPlay:'',
    //用户选择的图片
    imageUserScr:'/pages/image/wenhao.png',
    //电脑随机的图片
    imageAiScr:'',
    //石头剪刀布图片数组
    srcs:[
      '/pages/image/shitou.png',
      '/pages/image/jiandao.png',
      '/pages/image/bu.png'
    ]
  },

  //生命周期，刚进来
  onLoad: function () {
    //获取本地缓存“已经获胜的次数”
    var oldWinNum = wx.getStorageSync('winNum');
    //如果有缓存，那么赋值，否则为0
    if(oldWinNum != null && oldWinNum !=''){
       this.data.winNum = oldWinNum;
    }
    this.timerGo();
  },

  //点击按钮
  changeForChoose(e){
    console.log();
      if(this.data.btnState == true){
        return;
      }

      //获取数组中用户的，石头剪刀布相应的图片。
      this.setData({
          imageUserScr:this.data.srcs[e.currentTarget.id]
      });
      //清除计时器
      clearInterval(timer);

      //获取数据源
      var user = this.data.imageUserScr;
      var ai = this.data.imageAiScr;
      var num = this.data.winNum;
      var str = '0.0~\nYou Lost!';

      //判断是否获胜
      if( user == "/pages/image/shitou.png" && ai == "/pages/image/jiandao.png"){
         //获胜后增加次数、改变文字内容、从新缓存获胜次数
         num++;
         str = 'Ho~\nYou Win!';
         wx.setStorageSync('winNum', num);
      };
      if(user == "/pages/image/jiandao.png" && ai == "/pages/image/bu.png"){
         num++;
         str = 'Ho~\nYou Win!';
         wx.setStorageSync('winNum', num);
      };
      if(user== "/pages/image/bu.png" && ai == "/pages/image/shitou.png"){
         num++;
         str = 'Ho~\nYou Win!';
         wx.setStorageSync('winNum', num);
      };

      //如果平局
      if(user == ai){
         str = 'Game Draw!';
      }

      //刷新数据
      this.setData({
          winNum:num,
          gameOfPlay:str,
          btnState:true
      });
  },

  //开启计时器
  timerGo(){
    timer = setInterval(this.move,100);
  },

  //ai滚动方法
  move(){
    //如果大于等于3，重置
    if(numAi>=3){
      numAi=0;
    }
    this.setData({
        //获取数组中Ai的，石头剪刀布相应的图片。
        imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },

  again(){
      //控制按钮
      if(this.data.btnState == false){
        return;
      }
      //从新开始计时器
      this.timerGo();
      //刷新数据
      this.setData({
          btnState:false,
          gameOfPlay:'',
          imageUserScr:'/pages/image/wenhao.png'
      });
  }
})