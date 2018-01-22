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
	  this.score = 1
	  this.ele.addClass("one")
	  this.xueliang=1
	  this.swtp=[
	   "url(img/plain1_die1.png)",
		"url(img/plain1_die2.png)",
		"url(img/plain1_die3.png)"
	  ]
	  var ds=5000;
	}else if(sjfj>0.3){
	  this.score = 2
	  this.ele.addClass("two")
	  this.xueliang=2
	  this.swtp=[
	   	"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	  ]
	  var ds=8000;
	}else{
	  this.score = 3
	  this.ele.addClass("san")
	  this.xueliang=3
	  this.swtp=[
	   	"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	  ]
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
	score.addScore(this.score)
	  var i=0
	  var time =setInterval(function(){
	  	self.ele.css("background",self.swtp[i++])
	  	if(i>=self.swtp.length){
	  		clearInterval(time)
	  		self.ele.remove()
	  	}
	  },100)
		delete wtcc.djcc[this.id]
	}
}
