package com.jikexueyuan.websocket;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

//ws://localhost:8080/WebSocketDemo/websocket/1
@ServerEndpoint(value = "/websocket/{user}")  
public class MyWebSocketServlet {  
      
    private Session session;  
      
    @OnOpen  
    public void open(Session session,  @PathParam(value = "user")String user) {  
        this.session = session;  
        System.out.println("有连接进来了 .... sessionID:" + session.getId()); 
    }  
      
    @OnMessage  
    public void inMessage(String message) {  
    	System.out.println("=====================收到消息了，sessionID是： " + this.session.getId() +"====================="); 
    	System.out.println("收到消息了，内容是： " + message); 
    	System.out.println("===============================================================");
    	
    	try {
			session.getBasicRemote().sendText("你好，我已经收到了你的内容，你发送的是："+message);
		} catch (IOException e) {
			e.printStackTrace();
		}
    }  
      
    @OnClose  
    public void end() {  
    	System.out.println("有连接关闭了 sessionId是： " + this.session.getId());  
    }  
      
  
} 