window.onload=function(){
	var leftbut=document.getElementById("left_button");
	var rightbut=document.getElementById("right_button");
	var list=document.getElementsByClassName("slider");
	console.log(leftbut);
	
	function initial(){//初始化slider_list
		
	}
	initial();
	
	function animation(flag){
		//flag等于0表示向左，1表示向右
		if(flag===0){
			for(var i=0;i<7;i++){
				if(list[i].getAttribute("index")>1){
					list[i].style.left=parseInt(list[i].style.left)-10+'%';
				}
				console.log(list[i].style.left);
			}
		}else{
			
		}
	}
	leftbut.onclick=function(){
		animation(0);
	}
	rightbut.onclick=function(){
		animation(1);
	}
}
