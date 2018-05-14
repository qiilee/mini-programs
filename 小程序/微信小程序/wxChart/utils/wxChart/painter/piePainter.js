var basePainterFile = require("basePainter.js");
/**
 * 饼状图
 */
var piePainter = {
    createObj : function(canvas_id, options){
        var startPoint=0;
        var obj = basePainterFile.basePainter.createObj();
        obj.draw = function(){
            var color = options.color;
            var data = options.data;
            var centerX=options.centerX;
            var centerY=options.centerY;
            var radius=options.radius;
            var name = options.name;
            var legent_size=radius/(data.length*2);
            //声明上下文
            var context = wx.createContext();
            //画标题
            context.beginPath();
            context.setStrokeStyle(obj.color.blue);
            context.setFontSize(14);
            context.fillText(name, centerX-name.length*14/2, centerY+radius+20);
            context.closePath();
            //画饼图背景
            context.setFillStyle(options.back_color);   
            context.beginPath();
            context.moveTo(centerX,centerY);   
            context.arc(centerX,centerY,radius,0,Math.PI*2,false);   
            context.fill();
            context.closePath();
            //画饼图数据
            for(var i=0;i<data.length;i++){  
                context.setFillStyle(color[i]);   
                context.beginPath();   
                context.moveTo(centerX,centerY);
                context.arc(centerX,centerY,radius,startPoint,Math.PI*2*(data[i]/100),false);   
                context.fill();
                context.closePath();
                //画图例
                context.beginPath();
                context.moveTo(centerX+radius+legent_size*2,centerY-radius+legent_size*2*i);
                context.rect(centerX+radius+legent_size*2,centerY-radius+legent_size*2*i,legent_size*2,legent_size);
                context.fill();
                context.closePath();
                //画图例文字
                context.beginPath();
                context.setFontSize(legent_size);
                context.fillText(options.data_name[i]+":"+data[i]+"%", centerX+radius+legent_size*4+legent_size,
                centerY-radius+legent_size*2*i+legent_size/4*3);
                context.closePath();
                startPoint+=Math.PI*2*(data[i]/100);
            }
            wx.drawCanvas({
                canvasId: canvas_id,
                actions: context.getActions()
            });
            var page_obj = options.page_obj;
            page_obj.onTouchStart = obj.onTouchStart;
            page_obj.onTouchMove = obj.onTouchMove;
            page_obj.onTouchEnd = obj.onTouchEnd;
            page_obj.onTouchCancel = obj.onTouchCancel;
        };
        return obj;
    }
}

module.exports.piePainter = piePainter;