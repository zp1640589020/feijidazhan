var yxjs={
	sfpz:function(){
		var djcc=wtcc.djcc;
		var wjcc=wtcc.wjcc;
		    for(var j in djcc){
			if(j=="len"){
				continue
			}
			var d=djcc[j]//1个敌机
			var e=wjcc
			if(isTouch(d.ele,e.ele)){
				alert(进来了),
			    e.fei()
			}
		}
	 },
   
		touchListen: function() {
		var self = this
		setInterval(function() {
			self.sfpz() 
			
		}, 30)
		
    }
 }
