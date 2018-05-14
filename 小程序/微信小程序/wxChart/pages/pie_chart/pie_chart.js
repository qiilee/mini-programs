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
    var color = ["#DC143C","#00008B","#1E90FF","#8B4513","#006400"];   
    var data = [10,20,20,40,10];
    var data_name = ["数据1","数据2","数据3","数据4","数据5"];
    var options = {
      "page_obj" : this,
      "chart_type" : chartUtilFile.chartType.pie,
      "back_color":"#77D1F6",
      "color":color,
      "data":data,
      "centerX":150,
      "centerY":150,
      "radius":100,
      "data_name":data_name,
      "name" : "测试饼状图"
    };
    //初始化
    chartUtilObj.init(canvas_id, options);
    //开始画图
    chartUtilObj.draw();
  }
})