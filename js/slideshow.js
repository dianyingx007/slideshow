/*封装的函数*/
function slideshow(option){
	var defaults = {
		container:null,/*整个控件的层，当鼠标移动到上面时，会停止自动播放*/
		list:null,/*整个图片层*/
		buttons:null,/*图片对应的每个按钮*/
		pre:null,/*前一个图片按钮*/
		next:null,/*后一个图片按钮*/
		pic_width:0,/*图片的宽度*/
		num:2,/*图片数量*/
		time:3000,/*自动播放的间隔时间*/
		speed:500,/*图片切换速度*/
		auto:1/*是否自动播放*/
	};
	var params = $.extend({},defaults,option || {});
	var ani_flag=0;/*判断是否正在运行动画*/
	var index=1;/*存放当前的图片序号*/

	function move_left(){
		if(ani_flag===0){
			changeButton();
			if(index===1){
				index=params['num'];
			}else {
				index-=1;
			}
			changeButton();
			animation(params['pic_width']);
		}
	}
	function move_right(){
		if(ani_flag===0){
			changeButton();
			if(index===params['num']){
				index=1;
			}else {
				index+=1;
			}
			changeButton();
			animation(-params['pic_width']);
		}
	}
	function animation(move_step){
		ani_flag=1;
		var step=10;/*分多少步演示动画*/
		var time=params['speed'];/*动画一共多少时间*/
		
		var onestep=move_step/step;
		var animationid=setInterval(function(){
			params['list'].css('left',parseInt(params['list'].css('left'))+onestep+'px');
			step--;
			if(step===0){
				clearInterval(animationid);

				if(params['list'].css('left')===-(params['num']+1)*params['pic_width']+'px'){
					params['list'].css('left',-params['pic_width']+'px');
				}else if(params['list'].css('left')==='0px'){
					params['list'].css('left',-params['num']*params['pic_width']+'px');
				}/*首尾页循环*/
				
				ani_flag=0;
			}
		},time/step);
	}
	params['pre'].on('click',move_left);
	params['next'].on('click',move_right);
	
	/*下排的button按钮响应改变*/
	function changeButton(){
		$(params['buttons'][index-1]).toggleClass("button_on");
		/*jQuery中选择出来的数组，在用[i]选择其中之一时，其结果为DOM对象，不是jQuery对象*/
	}
	
	/*添加button按钮点击的事件，跳转到相应的图片*/
	for(var i=0;i<params['buttons'].length;i++){
		$(params['buttons'][i]).on('click',function(){
			if(!$(this).hasClass("button_on")){
				var myindex=parseInt($(this).attr('index'));/*获取的属性是字符串类型，需要转换*/
				changeButton();
				animation((index-myindex)*params['pic_width']);
				index=myindex;
				changeButton();
			}
		});
	}
	
	/*以下是自动播放功能*/
	if(params['auto']){
		var timer=setInterval(move_right,params['time']);
		params['container'].on('mouseenter',function(){
			clearInterval(timer);
		});/*鼠标在图片上面时，停止播放*/
		params['container'].on('mouseleave',function(){
			timer=setInterval(move_right,params['time']);
		});
	}
}
