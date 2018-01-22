var te={
	
	sfdzdj:function(){   //是否打中敌机
		var zdcc=wtcc.zdcc;
		var djcc=wtcc.djcc;
		//遍历所有子弹
		for(var k in zdcc){
			if(k=="len"){
				continue
			}
			
			var z=zdcc[k]//1颗子弹
			//console.log(z)
			//遍历所有敌机
			for(var j in djcc){
				if(j=="len"){
					continue
				}
				
				var d=djcc[j]//1个敌机
				
				//console.log(d)
				//判断子弹是否和敌机碰撞
				if(isTouch(z.zidan,d.ele)){
					d.looseBlood() //敌机掉血
					//console.log("这是子弹"+z.zidan)
					z.boom()      //子弹爆炸
				}
			}
		}
		
	},
	//监听是否碰撞
	touchListen: function() {
		var self = this
		setInterval(function() {
			self.sfdzdj() 
			
		}, 30)
		
    }
    
}
