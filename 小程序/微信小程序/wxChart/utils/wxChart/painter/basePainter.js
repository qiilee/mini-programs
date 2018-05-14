var chartColorFile = require("../chartColor.js")
/**
 * painter的父类
 */
var basePainter = {
    createObj : function(){
        var obj = {};
        //颜色
        obj.color = chartColorFile.chartColor;
        //触摸事件相关
        obj.initTouchParams = function(){
            obj.x = null;
            obj.y = null;
            obj.offset_x = null;
            obj.offset_y = null;
        }
        obj.initTouchParams();
        obj.onTouchStart = function(e){
            obj.x = e.touches[0].x;
            obj.y = e.touches[0].y;
        };
        obj.onTouchMove = function(e){
            // console.log("坐标[move]x:"+obj.x+",y:"+obj.y);
            // console.log("最新坐标[move]x:"+e.touches[0].x+",y:"+e.touches[0].y);
            obj.offset_x = e.touches[0].x - obj.x; 
            obj.offset_y = e.touches[0].y - obj.y; 
            obj.x = e.touches[0].x;
            obj.y = e.touches[0].y;
            // console.log("最新后坐标[move]x:"+obj.x+",y:"+obj.y);
            // console.log("位移[move]offset_x:"+obj.offset_x+",offset_y:"+obj.offset_y);
        };
        obj.onTouchEnd = function(e){
            // console.log("painter[end]");
            obj.initTouchParams();
        };
        obj.onTouchCancel = function(e){
            // console.log("painter[cancel]");
            obj.initTouchParams();
        }; 
        return obj;
    }
}

module.exports.basePainter = basePainter;