* 1.WXML 标签区分大小写  需闭合 特性 数据绑定 列表渲染 模板及引用 响应式像素 选择器
* 2.共同属性  id class style hidden data bind/catch
* 3.总是切换显示隐藏的话  用hidden属性
* 4.rpx  响应式的像素
* 5.wxs 八大类型  number string boolean object array function date regexp
   javascript  是六种类型
* 6.wxs  提供六种基础了类库  number date global console math json
* 7.小程序使用的是MINA架构
* 8.小程序神魔时候会被销毁，后台运行超过5分钟，或者5秒内连续收到报警
* 9.小程序冷启动时，发现新的版本，会异步下载最新版本包
* 10.应用生命周期：onLaunch初始化调用 onShow前台时调用 onHide后台运行调用 onError出错调用
  四个   在app.js中使用
* 11.页面生命周期：onLoad初次加载  onShow onReady onHide onUnload
* 12.事件：
  * 可捕获事件：touchstart touchmove touchcancel touchend tap longpress longtap
  * 可冒泡事件：touchstart touchmove touchcancel touchend tap longpress longtap  transitionend animationstart animationiteration animationend touchforcechange
