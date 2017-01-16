$(document).ready(function(){
	var container=$('#container');
	var list=$('#list');
	var buttons=$('#buttons span');
	var arrow_left=$('#arrow_left');
	var arrow_right=$('#arrow_right');
	var pic_width=$('#list img').innerWidth();
	var ani_flag=0;/*判断是否正在运行动画*/
	var index=1;/*存放当前的图片序号*/
	
	function move_left(){
		if(ani_flag===0){
			changeButton();
			if(index===1){
				index=4;
			}else {
				index-=1;
			}
			changeButton();
			animation(pic_width);
		}
	}
	function move_right(){
		if(ani_flag===0){
			changeButton();
			if(index===4){
				index=1;
			}else {
				index+=1;
			}
			changeButton();
			animation(-pic_width);
		}
	}
	function animation(move_step){
		ani_flag=1;
		var step=10;/*分多少步演示动画*/
		var time=500;/*动画一共多少时间*/
		
		var onestep=move_step/step;
		var animationid=setInterval(function(){
			list.css('left',parseInt(list.css('left'))+onestep+'px');
			step--;
			if(step===0){
				clearInterval(animationid);
				
				if(list.css('left')==='-5000px'){
					list.css('left','-1000px');
				}else if(list.css('left')==='0px'){
					list.css('left','-4000px');
				}/*首尾页循环*/
				
				ani_flag=0;
			}
		},time/step);
	}
	arrow_left.on('click',move_left);
	arrow_right.on('click',move_right);
	
	/*下排的button按钮响应改变*/
	function changeButton(){
		$(buttons[index-1]).toggleClass("button_on");
		/*jQuery中选择出来的数组，在用[i]选择其中之一时，其结果为DOM对象，不是jQuery对象*/
	}
	
	/*添加button按钮点击的事件，跳转到相应的图片*/
	for(var i=0;i<buttons.length;i++){
		$(buttons[i]).on('click',function(){
			if(!$(this).hasClass("button_on")){
				var myindex=parseInt($(this).attr('index'));/*获取的属性是字符串类型，需要转换*/
				changeButton();
				animation((index-myindex)*pic_width);
				index=myindex;
				changeButton();
			}
		});
	}
	
	/*以下是自动播放功能*/
	var timer=setInterval(move_right,3000);
	container.on('mouseenter',function(){
		clearInterval(timer);
	});/*鼠标在图片上面时，停止播放*/
	container.on('mouseleave',function(){
		timer=setInterval(move_right,3000);
	});
});
