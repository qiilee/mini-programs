var basePainterFile = require("basePainter.js");
/**
 * 折线图
 */
var brokenLinetPainter = {
    createObj : function(canvas_id, options){
        var obj = basePainterFile.basePainter.createObj();
        obj.draw = function(){
            //获取系统信息
            var system_info = null;
            wx.getSystemInfo({
                success: function(res) {
                    system_info = res;
                }
            });
            //获取配置
            var xaxis_list = options.xaxis;
            var yaxis_list = options.yaxis;
            var xaxis = xaxis_list[0];
            var yaxis = yaxis_list[0];
            var xdata = xaxis.xdata;
            var ydata = yaxis.ydata;
            var line_color = options.line_color;
            var text = options.text;
            var unit = options.unit;
            var font_size = options.font_size;
            //声明上下文
            var context = wx.createContext();
            //这部分变量暂时写死，需要改成参数传递或者自适应
            var canvas_left = 12;//显示区域的left
            var canvas_top = 80;//显示区域的的top
            var canvas_width = 240;//显示区域的宽度
            var canvas_height = 120;//显示区域的高度
            var canvas_padding = 0.1;//padding的比例
            var canvas_width_piece_num = 5;//X轴6等分
            var canvas_height_piece_num = 6;//Y轴6等分
            //重置部分写死变量
            var window_width = system_info.windowWidth;
            canvas_left = (system_info.windowWidth-canvas_width)/2;
            line_color = "#7ca3e9";
            //声明更多需要的参数
            var ydata_max = null;//数据最大值
            var ydata_min = null;//数据最小值
            var ydata_center = null;//Y轴的中数
            var ydata_transform = null;//Y轴的变形比例，确保不超过最高最低点
            var ydata_height = null;//Y轴数据的高度
            //计算更多参数
            for(var i=0; i<ydata.length; i++){
                if(i===0){
                    ydata_max = ydata[0];
                    ydata_min = ydata[0];
                    continue;
                }
                ydata_max = ydata_max<ydata[i] ? ydata[i] : ydata_max;
                ydata_min = ydata_min>ydata[i] ? ydata[i] : ydata_min;
            }
            ydata_center = Math.round((Math.random() - 0.5)*10 + ydata[0]);
            if(ydata_min>=ydata_center){
                ydata_height = (ydata_max-ydata_center)*2;
            }else if(ydata_max<=ydata_center){
                ydata_height = (ydata_center-ydata_min)*2;
            }else{
                ydata_height = (ydata_max-ydata_center)>(ydata_center-ydata_min) ? (ydata_max-ydata_center)*2 : (ydata_center-ydata_min)*2;
            }
            ydata_transform = 1;
            if(ydata_height>canvas_height){
                ydata_transform = canvas_height*(1-canvas_padding)/ydata_height;
            }
            //画标题
            context.beginPath();
            context.setFillStyle(obj.color.black);
            context.setFontSize(12);
            context.fillText(text, canvas_left, canvas_top-30);
            context.closePath();
            //画单位
            context.beginPath();
            context.setFillStyle(obj.color.black);
            context.setFontSize(12);
            context.fillText(unit, canvas_left, canvas_top+10);
            context.closePath();
            //画底纹
            context.beginPath();//画边框
            context.rect(canvas_left, canvas_top, canvas_width, canvas_height);
            context.setLineWidth(1);
            context.setStrokeStyle("#ccccff");
            context.stroke();
            context.closePath();
            var canvas_width_piece = canvas_width/canvas_width_piece_num;
            var canvas_height_piece = canvas_height/canvas_height_piece_num;
            var canvas_width_piece_center = canvas_width_piece_num/2;//中间线的索引
            var canvas_height_piece_center = canvas_height_piece_num/2;//中间线的索引
            context.beginPath();//画内网格
            context.setStrokeStyle("#eeeeee");
            for(var i=1; i<canvas_width_piece_num; i++){
                context.moveTo(canvas_left+i*canvas_width_piece, canvas_top+canvas_height);
                context.lineTo(canvas_left+i*canvas_width_piece, canvas_top);
            }
            for(var i=1; i<canvas_height_piece_num; i++){
                context.moveTo(canvas_left, canvas_top+i*canvas_height_piece);
                context.lineTo(canvas_left+canvas_width, canvas_top+i*canvas_height_piece);
            }
            context.stroke();
            context.closePath();
            context.beginPath();//画刻度
            context.setFontSize(font_size);
            for(var i=0; i<=canvas_width_piece_num; i++){
                context.setFillStyle(obj.color.black);
                context.fillText(xdata[i], canvas_left+i*canvas_width_piece-font_size, canvas_top+canvas_height+font_size);
            }
            for(var i=0; i<=canvas_height_piece_num; i++){
                if(i<=(canvas_height_piece_num/2)){
                    context.setFillStyle(obj.color.red);
                }else{
                    context.setFillStyle(obj.color.green);
                }
                var ydata_point = (ydata_center-(i-3)*canvas_height_piece*ydata_transform).toFixed(2);
                var ydata_percent = ((ydata_point-ydata_center)/ydata_center*100).toFixed(2)+"%";
                context.fillText(ydata_point, canvas_left-font_size*3, canvas_top+i*canvas_height_piece);
                context.fillText(ydata_percent, canvas_left+canvas_width+5, canvas_top+i*canvas_height_piece);
            }
            context.closePath();
            //画数据(Y轴自适应前)
            // context.beginPath();            
            // context.setStrokeStyle(obj.color.yellow);
            // context.setLineWidth(1);
            // for(var i=0; i<ydata.length; i++){
            //     var ydata_i = ydata[i];
            //     var ydata_tmp = canvas_height-(ydata_i-ydata_center+canvas_height/2);
            //     if(i===0){
            //         context.moveTo(canvas_left+0, canvas_top+ydata_tmp);
            //     }else{
            //         context.lineTo(canvas_left+i, canvas_top+ydata_tmp);
            //     }
            // }
            // context.stroke();
            // context.closePath();
            //画数据（Y轴自适应后）
            context.beginPath();
            context.setStrokeStyle(line_color);
            context.setLineWidth(1);
            for(var i=0; i<ydata.length; i++){
                var ydata_i = ydata[i];
                if(ydata[i]>=ydata_center){
                    ydata_i = canvas_height-((ydata[i]-ydata_center)*ydata_transform+canvas_height/2);
                }else if(ydata[i]<ydata_center){
                    ydata_i = canvas_height-(canvas_height/2-(ydata_center-ydata[i])*ydata_transform);
                }
                if(i===0){
                    context.moveTo(canvas_left+0, canvas_top+ydata_i);
                }else{
                    context.lineTo(canvas_left+i, canvas_top+ydata_i);
                }
            }
            context.stroke();
            context.closePath();
            //开始画图
            wx.drawCanvas({
                canvasId: canvas_id,
                actions: context.getActions()
            });
            //重新绑定事件
            var page_obj = options.page_obj;
            page_obj.onTouchStart = obj.onTouchStart;
            page_obj.onTouchMove = obj.onTouchMove;
            page_obj.onTouchEnd = obj.onTouchEnd;
            page_obj.onTouchCancel = obj.onTouchCancel;
        };
        return obj;
    }
}

module.exports.brokenLinetPainter = brokenLinetPainter;