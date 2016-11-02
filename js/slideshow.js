window.onload=function(){
	var leftbut=document.getElementById("left_button");
	var rightbut=document.getElementById("right_button");
	var list=document.getElementsByClassName("slider");
	var moving=0;
	
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
	
	
	
	function go(dom,heightc,widthc,leftc,topc,zIndexc,indexc){
		//dom表示操作的dom对象
		//后面的参数(以c结尾)都为改变量
		var step=10;//动画分成多少步
		var time=300;//动画总时间
		
		heightc/=step;
		widthc/=step;
		leftc/=step;
		topc/=step;
		dom.step=step;
		dom.onetime=time/step;
		/*dom.style.height=parseInt(dom.style.height)+heightc+'px';
		dom.style.width=parseInt(dom.style.width)+widthc+'px';
		dom.style.left=parseInt(dom.style.left)+leftc+'%';
		dom.style.top=parseInt(dom.style.top)+topc+'%';*/
		moveonestep(dom,heightc,widthc,leftc,topc);
		dom.style.zIndex=parseInt(dom.style.zIndex)+zIndexc;
		dom.setAttribute("index",parseInt(dom.getAttribute("index"))+indexc);
	}
	
	function moveonestep(dom,heighto,widtho,lefto,topo){
		dom.style.height=parseFloat(dom.style.height)+heighto+'px';
		dom.style.width=parseFloat(dom.style.width)+widtho+'px';
		dom.style.left=parseFloat(dom.style.left)+lefto+'%';
		dom.style.top=parseFloat(dom.style.top)+topo+'%';
		dom.step--;
		/*if(dom===list[0]){
			debugger;
		}*/
		if(dom.step>0){
			setTimeout(function(){
				moveonestep(dom,heighto,widtho,lefto,topo);
			},dom.onetime);
		}else{
			moving=0;
		}
	}
	
	function animation(flag){
		//flag等于0表示向左，1表示向右
		moving=1;
		if(flag===0){
			for(var i=0;i<7;i++){
				if(list[i].getAttribute("index")>4){
					go(list[i],50,52,-10,-5,1,-1);
				}else if(list[i].getAttribute("index")>1){
					go(list[i],-50,-52,-10,5,-1,-1);
				}else {
					go(list[i],0,0,60,0,0,6);
				}
			}
		}else{
			for(var i=0;i<7;i++){
				if(list[i].getAttribute("index")<4){
					go(list[i],50,52,10,-5,1,1);
				}else if(list[i].getAttribute("index")<7){
					go(list[i],-50,-52,10,5,-1,1);
				}else {
					go(list[i],0,0,-60,0,0,-6);
				}
			}
		}
	}
	leftbut.onclick=function(e){
		if(moving===0){
			animation(0);
			e.stopPropagation();
		}
	}
	rightbut.onclick=function(e){
		if(moving==0){
			animation(1);
			e.stopPropagation();
		}
	}
}
