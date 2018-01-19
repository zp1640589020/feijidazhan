function Point()
{
        this.zidan=$("<div></div>")
    	
    	this.zidan.addClass("zidantou")
    	this.zidan.css({"top":parseInt($(".wanjia").css("top")),
    	           "left":parseInt($(".wanjia").css("left"))+parseInt($(".wanjia").css("width"))-55})
    	$("#box").append(zidan)	
    	this.creat();
}
//创建子弹
Point.prototype.creat=function(x,y){

     //创建子弹
    setInterval(function(){
    	zidan.animate({"top":0},1000,function(){
    		this.remove()
    		//定义全局变量
	     this.id="a"+wtcc.zdcc.len++
	     wtcc.zdcc[this.id]=this
    	})
    },100)
}

