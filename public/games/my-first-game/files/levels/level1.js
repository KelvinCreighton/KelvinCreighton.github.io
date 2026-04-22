function level1() {
	if(start == true) {
		ball.x = 100;
		ball.y = canvas.height / 2 - ball.r;
		goal.x = canvas.width - 100;
		goal.y = canvas.height / 2 - goal.r3;
		start = false;
	}
	
	//obstacles
		//half line
	var line1 = {
			x1: 0,
			x2: canvas.width,
			y: canvas.height / 2
		};
	ctx.beginPath();
	ctx.moveTo(line1.x1, line1.y);
	ctx.lineTo(line1.x2, line1.y);
	ctx.stroke();
	
		var line1Dis1 = line1.y - ball.y - ball.r;
		
		if(ball.g >= line1Dis1) {
			ball.g = line1Dis1;
		}
	
		//boxes
	var box1 = {
			x: 200,
			y: canvas.height / 2 - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box1.x, box1.y, box1.w, box1.h);
	ctx.stroke();
	
		var box1Dis1 = box1.x - ball.x - ball.r;
			box1Dis2 = ball.x - ball.r - box1.x - box1.w;
			box1Dis3 = box1.y - ball.y - ball.r;
		
		if(ball.xs1 >= box1Dis1 && ball.y + ball.r > box1.y && ball.x < box1.x) {
			ball.xs1 = box1Dis1;
		}
		if(ball.xs2 >= box1Dis2 && ball.y + ball.r > box1.y && ball.x > box1.x) {
			ball.xs2 = box1Dis2;
		}
		if(ball.g >= box1Dis3 && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = box1Dis3;
		}
		
	var box2 = {
			x: box1.x + ball.r * 4,
			y: box1.y - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box2.x, box2.y, box2.w, box2.h);
	ctx.stroke();
			
		var box2Dis1 = box2.x - ball.x - ball.r;
			box2Dis2 = ball.x - ball.r - box2.x - box2.w;
			box2Dis3 = box2.y - ball.y - ball.r;
			box2Dis4 = ball.y - ball.r - box2.y - box2.h;
		
		if(ball.xs1 >= box2Dis1 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h && ball.x < box2.x) {
			ball.xs1 = box2Dis1;
		}
		if(ball.xs2 >= box2Dis2 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h && ball.x > box2.x) {
			ball.xs2 = box2Dis2;
		}
		if(ball.g >= box2Dis3 && ball.y < box2.y && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = box2Dis3;
		}
		if(box2Dis4 <= ball.g && ball.y > box2.y + box2.h && ball.g < 0 && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = 0;
		}
		
	
	var box3 = {
			x: box2.x + ball.r * 4,
			y: box2.y - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 6
		};
	ctx.beginPath();
	ctx.rect(box3.x, box3.y, box3.w, box3.h);
	ctx.stroke();
			
		var box3Dis1 = box3.x - ball.x - ball.r;
			box3Dis2 = ball.x - ball.r - box3.x - box3.w;
			box3Dis3 = box3.y - ball.y - ball.r;
			box3Dis4 = ball.y - ball.r - box3.y - box3.h;
		
		if(ball.xs1 >= box3Dis1 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h && ball.x < box3.x) {
			ball.xs1 = box3Dis1;
		}
		if(ball.xs2 >= box3Dis2 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h && ball.x > box3.x) {
			ball.xs2 = box3Dis2;
		}
		if(ball.g >= box3Dis3 && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = box3Dis3;
		}
		if(box3Dis4 == 0 && ball.g < 0 && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = 0;
		}
	
}