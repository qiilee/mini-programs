//引入painter工厂
var painterFactoryFile = require("painter/painterFactory.js");
var painterFactory = painterFactoryFile.painterFactory;
/**
 * @author Merlin
 * @date 2016-11-10
 * @description 图表库
 */
var chartUtil = {
    createObj : function(){
        var obj = {};
        //需要渲染图表的 canvas ID
        var _canvas_id = null;
        //参数配置
        var _options = null;
        //setter and getter
        obj.setCanvasId = function(canvas_id){
            _canvas_id = canvas_id;
        }
        obj.getCanvasId = function(){
            return _canvas_id;
        }
        obj.setOptions = function(options){
            _options = options;
        }
        obj.getOptions = function(){
            return _options;
        }
        /**
         * 初始化
         */
        obj.init = function(canvas_id, options){
            obj.setCanvasId(canvas_id);
            obj.setOptions(options);
        }
        obj.hello = function(){
            console.log("hello world");
        };
        obj.draw = function(){
            var testPainterObj = painterFactory.createObj(_canvas_id, _options);
            testPainterObj.draw();
        };
        return obj;
    }
};

module.exports.chartUtil = chartUtil;
//引入其他文件
var chartTypeFile = require("chartType.js");
var chartType = chartTypeFile.chartType;
module.exports.chartType = chartType;
var chartColorFile = require("chartColor.js");
var chartColor = chartColorFile.chartColor;
module.exports.chartColor = chartColor;
