function getCss(ele,attr){
	if(typeof getComputedStyle=="function"){
		return parseFloat(getComputedStyle(ele,null)[attr]);
	}else{
		return parseFloat(ele.currentStyle[attr]);
	}	
}

function buffer(ele,attr,target,fnCallback){	
	window.clearTimeout(ele.timer);
	_buffer();
	function _buffer(){
		var cur=getCss(ele,attr);
		var nSpeed=(target-cur)/8;		
		nSpeed=nSpeed>0?Math.ceil(nSpeed):Math.floor(nSpeed);		 
		ele.style[attr]=cur+nSpeed+"px";
		if(nSpeed){
			ele.timer=window.setTimeout(_buffer,30);
		}else{
			if(typeof fnCallback=="function"){
				fnCallback.call(ele);//让回调方法里的this指向当前运动的这个元素
			}
			ele.timer=null;//当动画结束时清空timer。timer是一个标识性的属性，如果它的值是一个数字，则表示此元素正在运动，如果是null或undefined，则表示此元素没有运动。
		}
		console.log(nSpeed);		
	}	
}
