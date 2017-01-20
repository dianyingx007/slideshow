#焦点图控件

##层叠式焦点图轮播

文件：index2.html slideshow3d.scss slideshow3d.js

##水平焦点图轮播

文件：index1.html slideshow.css slideshow.js

###v1.0

####缺陷：

轮播图的布局宽度未能实现自适应

**补救措施**需要使用js读取宽度后，设置示例中的container、list、list_img设置宽度，以及list的初始left值，并添加resize事件

####注意事项：
* 依赖jQuery
* 对象参数的传入必须为jQuery对象
* html布局时，注意首尾增加一个图片层，实现无限循环
* 参数是否可以为空，在下表

####可用参数：

<table>
	<tr>
		<th>参数</th>
		<th>默认值</th>
		<th>解释</th>
	</tr>
	<tr>
		<td>container</td>
		<td>null</td>
		<td>整个控件的层，当鼠标移动到上面时，会停止自动播放</td>
	</tr>
	<tr>
		<td>*list</td>
		<td>null</td>
		<td>整个图片层(各个图片层的上一层)</td>
	</tr>
	<tr>
		<td>*buttons</td>
		<td>null</td>
		<td>图片对应的每个按钮</td>
	</tr>
	<tr>
		<td>*pre</td>
		<td>null</td>
		<td>前一个图片按钮</td>
	</tr>
	<tr>
		<td>*next</td>
		<td>null</td>
		<td>后一个图片按钮</td>
	</tr>
	<tr>
		<td>*pic_width</td>
		<td>0</td>
		<td>图片的宽度</td>
	</tr>
	<tr>
		<td>num</td>
		<td>2</td>
		<td>图片数量</td>
	</tr>
	<tr>
		<td>time</td>
		<td>3000</td>
		<td>自动播放的间隔时间（以毫秒为单位）</td>
	</tr>
	<tr>
		<td>speed</td>
		<td>500</td>
		<td>图片切换速度（同上）</td>
	</tr>
	<tr>
		<td>auto</td>
		<td>1</td>
		<td>是否自动播放，不为0则表示自动播放</td>
	</tr>
</table>

**其中加*为必须传入参数**

####示例如下：

		slideshow({
			container:$('#container'),
			list:$('#list'),
			buttons:$('#buttons span'),
			pre:$('#arrow_left'),
			next:$('#arrow_right'),
			pic_width:1000,
			num:4
		});
		
可观察index1.html示例