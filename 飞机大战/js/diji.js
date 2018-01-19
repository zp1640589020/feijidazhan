function diji(){
	//全局定义的储存的值
	this.id="e"+wtcc.djcc.len++
	wtcc.djcc[this.id]=this
	//定义敌机的血量
	this.xueliang=1
	//创建敌机
	this.ele=$("<div></div>")
	this.ele.addClass("dffj")
	this.ele.appendTo("#box")
	//敌机在X随机出来的位置
	var x=$("body").width()*Math.random()
	this.ele.css({left:x})
	//随机各种不同的飞机
	var sjfj =Math.random() *0.9+0.1;
	if(sjfj>0.5){
	  this.ele.addClass("one")
	  this.xueliang=1
	  var ds=5000;
	}else if(sjfj>0.3){
	  this.ele.addClass("two")
	  this.xueliang=2
	  var ds=8000;
	}else{
	  this.ele.addClass("san")
	  this.xueliang=3
	  var ds=10000;
	}
      this.move(ds)
}
//敌机飞机的动画效果
diji.prototype.move =function(ds){
	var y=$("body").height()
	this.ele.animate({top: y},ds,function(){
		this.remove()
	})
}
//循环创建敌机
setInterval(function(){
	var a=new diji()
	a.move()
},1000)
//让敌机掉血的方法
diji.prototype.looseBlood=function(){
	var self=this
	this.xueliang--
	if(this.xueliang<=0){
		self.ele.remove()
		delete wtcc.djcc[this.id]
	}
}
