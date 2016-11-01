window.onload=function(){
	var leftbut=document.getElementById("left_button");
	var rightbut=document.getElementById("right_button");
	var list=document.getElementsByClassName("slider");
	
	function initial(){//初始化slider_list
		var index;
		for(var i=0;i<7;i++){
			index=parseInt(list[i].getAttribute("index"));
			list[i].style.height=50*(10-Math.abs(index-4))+'px';
			list[i].style.width=52*(10-Math.abs(index-4))+'px';
			list[i].style.left=(index+1)*10+'%';
			list[i].style.top=Math.abs(index-4)*5+'%';
			list[i].style.zIndex=3-Math.abs(index-4);
		}
	}
	initial();
	
	function animation(flag){
		//flag等于0表示向左，1表示向右
		if(flag===0){
			for(var i=0;i<7;i++){
				if(list[i].getAttribute("index")>4){
					list[i].style.height=parseInt(list[i].style.height)+50+'px';
					list[i].style.width=parseInt(list[i].style.width)+52+'px';
					list[i].style.left=parseInt(list[i].style.left)-10+'%';
					list[i].style.top=parseInt(list[i].style.top)-5+'%';
					list[i].style.zIndex=parseInt(list[i].style.zIndex)+1;
					list[i].setAttribute("index",parseInt(list[i].getAttribute("index"))-1);
				}else if(list[i].getAttribute("index")>1){
					list[i].style.height=parseInt(list[i].style.height)-50+'px';
					list[i].style.width=parseInt(list[i].style.width)-52+'px';
					list[i].style.left=parseInt(list[i].style.left)-10+'%';
					list[i].style.top=parseInt(list[i].style.top)+5+'%';
					list[i].style.zIndex=parseInt(list[i].style.zIndex)-1;
					list[i].setAttribute("index",parseInt(list[i].getAttribute("index"))-1);
				}else {
					list[i].style.left='80%';
					list[i].setAttribute("index",7);
				}
			}
		}else{
			for(var i=0;i<7;i++){
				if(list[i].getAttribute("index")<4){
					list[i].style.height=parseInt(list[i].style.height)+50+'px';
					list[i].style.width=parseInt(list[i].style.width)+52+'px';
					list[i].style.left=parseInt(list[i].style.left)+10+'%';
					list[i].style.top=parseInt(list[i].style.top)-5+'%';
					list[i].style.zIndex=parseInt(list[i].style.zIndex)+1;
					list[i].setAttribute("index",parseInt(list[i].getAttribute("index"))+1);
				}else if(list[i].getAttribute("index")<7){
					list[i].style.height=parseInt(list[i].style.height)-50+'px';
					list[i].style.width=parseInt(list[i].style.width)-52+'px';
					list[i].style.left=parseInt(list[i].style.left)+10+'%';
					list[i].style.top=parseInt(list[i].style.top)+5+'%';
					list[i].style.zIndex=parseInt(list[i].style.zIndex)-1;
					list[i].setAttribute("index",parseInt(list[i].getAttribute("index"))+1);
				}else {
					list[i].style.left='20%';
					list[i].setAttribute("index",1);
				}
			}
		}
	}
	leftbut.onclick=function(){
		animation(0);
	}
	rightbut.onclick=function(){
		animation(1);
	}
}
