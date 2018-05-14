#wxChart

-----

### 什么是wxChart
* wxChart是一个微信小程序上的图表插件

-----

### 环境要求
* 需要微信小程序项目环境

-----

### 安装及使用
* wxChart目录放置在项目中引入即可
* 详细使用请参照/pages/chart/chart.js

-----

### 基本用法
*  请参照chart.js

-----

### 命名规范
* 变量名使用小写加下划线方式，例如  
<code>
var chart_type = null;
</code>
* 方法及类名使用首字母小写的驼峰形式，例如  
<code>
var painterFactory = {  
    createObj : function(){  
        ......  
    }  
}  
</code>
* 属性使用下划线开头的小写加下划线方式,例如  
<code>
var chartUtil = {  
    createObj : function(){  
        var obj = {};  
        var _canvas_id = null;  
    }  
}  
</code>

-----

### 目录结构
<code>
-wxChart
 |
 --chartUtil.js //入口
 |
 --chartColor.js //定义常用颜色
 |
 --chartType.js //定义所有图表类型
 |
 --painter //存放painter相关文件
 |      |
 |      --painterFactory.js //生成各种类型的的painter
 |      |
 |      --basePainter.js //xxxPainter的父类
 |      |
 |      --testPainter.js //测试
 |      |
 |      --brokenLinPainter.js //折线图
 |      |
 |      --candlestickPainter.js //K线图
 </code>

-----

### 开发流程
* 1./wxChart/painter 新增需要支持的painter文件，可参照testPainter.js
* 2./wxChart/chartType.js 增加图表类型
* 3./wxChart/painter/painterFactory.js 引入新增的文件，并且与对应的类型关联起来

-----

### 相关资料
* [微信小程序接入指南](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1479260646)
