var basePainterFile = require("basePainter.js");
/**
 * 测试painter
 */
var testPainter = {
    createObj : function(canvas_id, options){
        var obj = basePainterFile.basePainter.createObj();
        obj.draw = function(){
            // 使用 wx.createContext 获取绘图上下文 context
            var context = wx.createContext()
            context.setStrokeStyle(obj.color.blue)
            context.setLineWidth(5)
            context.rect(0, 0, 200, 200)
            context.stroke()
            context.setStrokeStyle(obj.color.black)
            context.setLineWidth(2)
            context.moveTo(160, 100)
            context.arc(100, 100, 60, 0, 2 * Math.PI, true)
            context.moveTo(140, 100)
            context.arc(100, 100, 40, 0, Math.PI, false)
            context.moveTo(85, 80)
            context.arc(80, 80, 5, 0, 2 * Math.PI, true)
            context.moveTo(125, 80)
            context.arc(120, 80, 5, 0, 2 * Math.PI, true)
            context.stroke()
            // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
            wx.drawCanvas({
                canvasId: canvas_id,
                actions: context.getActions() // 获取绘图动作数组
            })
        };
        return obj;
    }
}

module.exports.testPainter = testPainter;