

var score = {					// 定义分数板对象，全局对象
	
	sum: 0,						// 分数综合
	
	addScore: function(a) {		// 添加分数
		this.sum += a			// 加上分数
		
		$(".fenshu").html(this.sum)
	}
}
