$(document).ready(function(){
	var container=$('#container');
	var list=$('#list');
	var button_left=$('#button_left');
	var button_right=$('#button_right');
	var pic_width=$('#list img').innerWidth();
	var ani_flag=0;/*判断是否正在运行动画*/
	
	function move_left(){
		if(ani_flag===0){
			ani_flag=1;
			animation(pic_width);
		}
	}
	function move_right(){
		if(ani_flag===0){
			ani_flag=1;
			animation(-pic_width);
		}
	}
	function animation(move_step){
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
	button_left.on('click',move_left);
	button_right.on('click',move_right);
	
	/*以下是自动播放功能*/
	var timer=setInterval(move_right,3000);
	container.on('mouseenter',function(){
		console.log(1);
		clearInterval(timer);
	});
	container.on('mouseleave',function(){
		console.log(0);
		timer=setInterval(move_right,3000);
	});
});
