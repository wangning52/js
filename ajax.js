

function ajax(aJson){
	
	var  type= aJson.type||'get';
	var  asyn=aJson.asyn||true;
	var  url =aJson.url;
	var success=aJson.success;
	var data=aJson.data||'';
	
	//创建ajax对象，兼容版；
	var xhr=null;
	if(window.XMLHttpRequest){
	  
	  xhr=new XMLHttpRequest();	
	
	}else{
		
	  xhr =new ActiveXObject('Microsoft.XMLHTTP');	
	}
	//判断type传输方式，并解决get方式的缓存问题
	if(type=='get'&&data){
	 url +='/?'+data+'&'+Math.random();	
		
	}
	//准备发送请求
	xhr.open(type,url,asyn);
	//规定post传输数据格式
	xhr.setRequestHeader('content-types',"application/x-www-form-urlencoded");
	//发送ajax请求（包括post数据的传输）
	type=='get'?xhr.send():xhr.send(data);
	//ajax请求处理过程
	
	xhr.onreadystatechange=function(){
	
	   if(xhr.readyState==4){
		
		   if(xhr.status>=200&&xhr.status<300){
			  
			  success&&success(xhr.responseText);
			     
			} else{
				
				alert('出错了'+xhr.status);
				}  
		   
	   }	
		
	};
	
	
};
