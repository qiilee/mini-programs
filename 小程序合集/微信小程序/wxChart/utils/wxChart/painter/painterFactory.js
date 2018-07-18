//引入所有图表类型
var chartTypeFile = require("../chartType.js");
var chartType = chartTypeFile.chartType;
//引入所有支持的painter
var testPainterFile = require("testPainter.js");
var brokenLinetPainterFile = require("brokenLinePainter.js");
var piePainterFile = require("piePainter.js");
var mycandlestickPainterFile = require("mycandlestickpainter.js");
/**
 * 获取不同的的painter，分别画不同类型的图表。如折线图painter,散点图painter
 */
var painterFactory = {
    createObj : function(canvas_id, options){
        var obj = {};
        var chart_type = options.chart_type;
        switch(chart_type){
            case chartType.test:
                obj = testPainterFile.testPainter.createObj(canvas_id, options);
                break;
            case chartType.brokenLine:
                obj = brokenLinetPainterFile.brokenLinetPainter.createObj(canvas_id, options);
                break;
            case chartType.pie:
                obj = piePainterFile.piePainter.createObj(canvas_id, options);
                break;
            case chartType.mycandlestick:
                obj = mycandlestickPainterFile.myCandlestickPainter.createObj(canvas_id, options);
                break;
            default:
                break;
        }
        return obj;
    }
}

module.exports.painterFactory = painterFactory;