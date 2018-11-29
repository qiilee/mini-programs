<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Index</title>
<script type="text/javascript" src="js/jquery.min.js"></script>
<%session.setAttribute("user", "小明");%>
<script type="text/javascript">
var ws = null;
function startWebSocket() {
    if ('WebSocket' in window)
        ws = new WebSocket("ws://localhost:8080/webSocket/mywebsocket.do");
    else if ('MozWebSocket' in window)
        ws = new MozWebSocket("ws://localhost:8080/webSocket/mywebsocket.do");
    else
        alert("not support");
    
    
    ws.onmessage = function(evt) {
        console.log(evt);
        //alert(evt.data);
        $("#xiaoxi").val(evt.data);
    };
    
    ws.onclose = function(evt) {
        //alert("close");
        document.getElementById('denglu').innerHTML="离线";
    };
    
    ws.onopen = function(evt) {
        //alert("open");
        document.getElementById('denglu').innerHTML="在线";
        document.getElementById('userName').innerHTML="小明";
    };
}

function sendMsg() {
    var fromName = "小明";
    var toName = document.getElementById('name').value;  //发给谁
    var content = document.getElementById('writeMsg').value; //发送内容
    ws.send(fromName+","+toName+","+content);
}
</script>
</head>
<body onload="startWebSocket();">
<p>聊天功能实现</p>
登录状态：
<span id="denglu" style="color:red;">正在登录</span>
<br>
登录人：
<span id="userName"></span>
<br>
<br>
<br>

发送给谁：<input type="text" id="name" value="小化"></input>
<br>
发送内容：<input type="text" id="writeMsg"></input>
<br>
聊天框：<textarea rows="13" cols="100" readonly id="xiaoxi"></textarea>
<br>
<input type="button" value="send" onclick="sendMsg()"></input>
</body>
</html>