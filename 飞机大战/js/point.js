function Point(x,y)
{
	//定义全局变量
		 this.id="a"+wtcc.zdcc.len++
	     wtcc.zdcc[this.id]=this
	   //创建子弹
        this.zidan=$("<div></div>")	
    	this.zidan.removeClass().addClass("zidantou")
    	this.zidan.css({"top":parseInt($(".wanjia").css("top")),
    	           "left":parseInt($(".wanjia").css("left"))+parseInt($(".wanjia").css("width"))-55})
    	$("#box").append(this.zidan)
    	
    	this.move();
}

Point.prototype.move=function(){

	var self = this
// 移动子弹
    	self.zidan.animate({"top":0},1000,function(){
    		self.zidan.remove()
    		
    		// 这里是删除子弹
    		delete wtcc.zdcc[this.id]
    		
    	})
}
Point.prototype.boom=function(){
	console.log("进来了")
	var self=this
	var arr=[
	 "url(img/die1.png)",
	 "url(img/die2.png)"
  ]
	var i =0
	self.zidan.stop()
	var time=setInterval(function(){
		self.zidan.css({"background":arr[i++]})
		self.zidan.css({
			width:40,
			height:43
		})
		if(i>=arr.length){
			clearInterval(time)
			self.zidan.remove()
		}
	},100)
	delete wtcc.zdcc[this.id]
}
