//背景的动态
var yxbj={
	ele:$("#box"),
	start:function(){
		var self=this
		this.ele.animate({"background-position-y": "-230%"},10000,"linear",function(){
			self.ele.css({"background-position-y":"0%"})
			self.start()
		})
		
	}
}
//全局变量
var wtcc={
	zdcc:{len:0},
	djcc:{len:0},
	wjcc:{len:0}
}
//自己控制的飞机
function feiji(){
	this.id="e"+wtcc.wjcc.len++
	wtcc.wjcc[this.id]=this
	this.ele=$("<div></div>")
	this.ele.addClass("wanjia")
	this.ele.appendTo("#box")
}
//控制的方法
feiji.prototype.kongzhi=function(){
	var self=this
	//键盘控制
	 $(document).keydown(function(e){
	 	switch(e.keyCode)
	 	{
	 		case 38:self.ele.css({top: parseInt(self.ele.css("top"))-10});break;
	 		case 37:self.ele.css({left: parseInt(self.ele.css("left"))-10});break;
	 		case 40:self.ele.css({top: parseInt(self.ele.css("top"))+10});break;
	 		case 39:self.ele.css({left: parseInt(self.ele.css("left"))+10});break;
	 	}
})
	 //鼠标控制方法
	this.ele.mousedown(function(e){
		var X=e.offsetX
		var Y=e.offsetY
		$("#box").mousemove(function(e){
				ex=e.clientX -X,
				ey=e.clientY -Y
					if(ex<0){ex=0}else if(ex>1500){ex=1500}
					if(ey<0){ey=0}else if(ey>680){ey=680}
					self.ele.css({
						left:ex,
						top:ey
					})
		})
		$("#box").mouseup(function(){
			$('#box').off("mousemove mouseup")
		})
	})
}
//飞机爆炸
feiji.prototype.fei=function(){
	var self=this
	var arr=[
	 "url(img/me_die1.png)",
	 "url(img/me_die2.png)",
	 "url(img/me_die3.png)",
	 "url(img/me_die4.png)"
  ]
	var i =0
	self.ele.stop()
	var time=setInterval(function(){
		self.ele.css({"background":arr[i++]})
		self.ele.css({
			width:40,
			height:43
		})
		if(i>=arr.length){
			clearInterval(time)
			self.ele.remove()
		}
	},100)
	delete wtcc.wjcc[this.id]
}
//创建子弹
//feiji.prototype.move=function(x,y){
//
//   //创建子弹
//  setInterval(function(){
//  	
////  	zidan.animate({"top":0},1000,function(){
////  		this.remove()
//  		//定义全局变量
////	     this.id="a"+wtcc.zdcc.len++
////	     wtcc.zdcc[this.id]=this
//  	})
//  },100)
//}
//
//	


