Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    //引入文件
    var chartUtilFile = require("../../utils/wxChart/chartUtil.js");
    //实例化
    var chartUtilObj = chartUtilFile.chartUtil.createObj();
    //配置参数
    var canvas_id = "first_canvas";
    var xaxis = [
      {
        xdata : ["07:00", "11:00", "15:00", "20:00", "00:00", "04:00"]
      }
    ];
    var ydata = [Math.round(Math.random()*200)];
    for (var i = 1; i < 200; i++) {
        ydata.push(Math.round((Math.random() - 0.5)*10 + ydata[i-1]));
    }
    var yaxis = [
      {
        ydata : ydata
      }
    ];
    var options = {
      "page_obj" : this,
      "chart_type" : chartUtilFile.chartType.brokenLine,
      "xaxis" : xaxis, 
      "yaxis" : yaxis,
      "line_color" : chartUtilFile.chartColor.red,
      "text" : "此处放标题！",
      "unit" : "（元/10克）",
      "font_size": 10
    };
    //初始化
    chartUtilObj.init(canvas_id, options);
    //开始画图
    chartUtilObj.draw();
  },
  data: {
    imgUrls: [
      'http://cdn.qilin99.cn/ctrade_cms/img/default_1479207074514',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})