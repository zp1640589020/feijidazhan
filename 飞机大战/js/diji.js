function diji(){
	this.ele=$("<div></div>")
	this.ele.addClass("dffj")
	this.ele.appendTo("#box")
	var x=$("body").width()*Math.random()
	this.ele.css({left:x})
	//随机飞机
	var sjfj =Math.random() *0.9+0.1;
	if(sjfj>0.5){
	  this.ele.addClass("one")
	  var ds=5000;
	}else if(sjfj>0.3){
	  this.ele.addClass("two")
	  var ds=8000;
	}else{
	  this.ele.addClass("san")
	  var ds=10000;
	}
      this.move(ds)
}
diji.prototype.move =function(ds){
	var y=$("body").height()
	this.ele.animate({top: y},ds,function(){
		this.remove()
	})
}
setInterval(function(){
	var a=new diji()
	a.move()
},1000)
