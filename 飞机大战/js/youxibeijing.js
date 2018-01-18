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
function feiji(){
	this.ele=$("<div></div>")
	this.ele.addClass("wanjia")
	this.ele.appendTo("#box")
}
feiji.prototype.kongzhi=function(){
	var self=this
	 $(document).keydown(function(e){
	 	switch(e.keyCode)
	 	{
	 		case 38:self.ele.css({top: parseInt(self.ele.css("top"))-10});break;
	 		case 37:self.ele.css({left: parseInt(self.ele.css("left"))-10});break;
	 		case 40:self.ele.css({top: parseInt(self.ele.css("top"))+10});break;
	 		case 39:self.ele.css({left: parseInt(self.ele.css("left"))+10});break;
	 	}
})
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
feiji.prototype.move=function(){
    setInterval(function(){
    	var zidan=$("<div></div>")
    	zidan.addClass("zidantou")
    	zidan.css({"top":parseInt($(".wanjia").css("top")),
    	           "left":parseInt($(".wanjia").css("left"))+parseInt($(".wanjia").css("width"))-55})
    	$("#box").append(zidan)
    	zidan.animate({"top":0},1000,function(){
    		this.remove() 	
    	})
    },100)
}

	


