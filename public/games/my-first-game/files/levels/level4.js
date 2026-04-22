function level4() {
	if(start == true) {
		ball.gAcc = Math.abs(ball.gAcc);
		ball.g = 0;
		ball.x = 100;
		ball.y = canvas.height - ball.r;
		goal.x = goal.r3;
		goal.y = 80 + goal.r3;
		start = false;
	}
	
	
	//gravity blocks
			//reverseBlock1
		var reverseBlock1 = {
			x: canvas.width - ball.r * 2,
			y: canvas.height - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2,
			r: ball.r / 2
			};
			
		var reverseBlock1Dis1 = reverseBlock1.x - ball.x - ball.r;
			reverseBlock1Dis2 = ball.x - ball.r - reverseBlock1.x - reverseBlock1.w;
			reverseBlock1Dis3 = reverseBlock1.y - ball.y - ball.r;
			reverseBlock1Dis4 = ball.y - ball.r - reverseBlock1.y - reverseBlock1.h;

	if(gFlipper == false) {
		ctx.beginPath();
		ctx.rect(reverseBlock1.x, reverseBlock1.y, reverseBlock1.w, reverseBlock1.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(reverseBlock1.x + reverseBlock1.w / 2, reverseBlock1.y + reverseBlock1.h / 2, reverseBlock1.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= reverseBlock1Dis1 && ball.y + ball.r > reverseBlock1.y && ball.y - ball.r < reverseBlock1.y + reverseBlock1.h  - 2 && ball.x < reverseBlock1.x) {
			gFlipper = true;
		}
		if(ball.xs2 >= reverseBlock1Dis2 && ball.y + ball.r > reverseBlock1.y && ball.y - ball.r < reverseBlock1.y + reverseBlock1.h  - 2 && ball.x > reverseBlock1.x) {
			gFlipper = true;
		}
		if(ball.g >= reverseBlock1Dis3 && ball.y < reverseBlock1.y && ball.x + ball.r > reverseBlock1.x && ball.x - ball.r < reverseBlock1.x + reverseBlock1.w) {
			gFlipper = true;
		}
		if(reverseBlock1Dis4 <= ball.g && ball.y > reverseBlock1.y + reverseBlock1.h && ball.g < 0 && ball.x + ball.r > reverseBlock1.x && ball.x - ball.r < reverseBlock1.x + reverseBlock1.w) {
			gFlipper = true;
		}
	}
	
		//halfBlock1
		var halfBlock1 = {
			x: ball.r * 2,
			y: canvas.height - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2,
			};
	if(ball.gAcc == 0.04 || ball.gAcc == -0.04) {
		ctx.beginPath();
		ctx.rect(halfBlock1.x, halfBlock1.y, halfBlock1.w, halfBlock1.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(halfBlock1.x + halfBlock1.w / 4, halfBlock1.y + halfBlock1.h / 4, halfBlock1.w / 2, halfBlock1.h / 2);
		ctx.stroke();
			
		var halfBlock1Dis1 = halfBlock1.x - ball.x - ball.r;
			halfBlock1Dis2 = ball.x - ball.r - halfBlock1.x - halfBlock1.w;
			halfBlock1Dis3 = halfBlock1.y - ball.y - ball.r;
			halfBlock1Dis4 = ball.y - ball.r - halfBlock1.y - halfBlock1.h;
		
		if(ball.xs1 >= halfBlock1Dis1 && ball.y + ball.r > halfBlock1.y && ball.y - ball.r < halfBlock1.y + halfBlock1.h  - 2 && ball.x < halfBlock1.x) {
			ball.gAcc = 0.02;
		}
		if(ball.xs2 >= halfBlock1Dis2 && ball.y + ball.r > halfBlock1.y && ball.y - ball.r < halfBlock1.y + halfBlock1.h  - 2 && ball.x > halfBlock1.x) {
			ball.gAcc = 0.02;
		}
		if(ball.g >= halfBlock1Dis3 && ball.y < halfBlock1.y && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			ball.gAcc = 0.02;
		}
		if(halfBlock1Dis4 <= ball.g && ball.y > halfBlock1.y + halfBlock1.h && ball.g < 0 && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			ball.gAcc = 0.02;
		}
	}
	
	//fullBlock1
		var fullBlock1 = {
			x: canvas.width - ball.r * 2 - ball.r / 2,
			y: canvas.height / 2 - 2,
			w: ball.r * 2,
			h: ball.r * 2,
			};
	if(ball.gAcc == 0.02 || ball.gAcc == -0.02) {
		ctx.beginPath();
		ctx.rect(fullBlock1.x, fullBlock1.y, fullBlock1.w, fullBlock1.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect(fullBlock1.x + fullBlock1.w / 4, fullBlock1.y + fullBlock1.h / 4, fullBlock1.w / 2, fullBlock1.h / 2);
		ctx.stroke();
			
		var fullBlock1Dis1 = fullBlock1.x - ball.x - ball.r;
			fullBlock1Dis2 = ball.x - ball.r - fullBlock1.x - fullBlock1.w;
			fullBlock1Dis3 = fullBlock1.y - ball.y - ball.r;
			fullBlock1Dis4 = ball.y - ball.r - fullBlock1.y - fullBlock1.h;
		
		if(ball.xs1 >= fullBlock1Dis1 && ball.y + ball.r > fullBlock1.y && ball.y - ball.r < fullBlock1.y + fullBlock1.h  - 2 && ball.x < fullBlock1.x) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.04;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.04;
			}
		}
		if(ball.xs2 >= fullBlock1Dis2 && ball.y + ball.r > fullBlock1.y && ball.y - ball.r < fullBlock1.y + fullBlock1.h  - 2 && ball.x > fullBlock1.x) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.04;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.04;
			}
		}
		if(ball.g >= fullBlock1Dis3 && ball.y < fullBlock1.y && ball.x + ball.r > fullBlock1.x && ball.x - ball.r < fullBlock1.x + fullBlock1.w) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.04;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.04;
			}
		}
		if(fullBlock1Dis4 <= ball.g && ball.y > fullBlock1.y + fullBlock1.h && ball.g < 0 && ball.x + ball.r > fullBlock1.x && ball.x - ball.r < fullBlock1.x + fullBlock1.w) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.04;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.04;
			}
		}
	}
	
		//boxes
			//box1
		var box1 = {
			x: 200,
			y: canvas.height - ball.r * 2,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box1.x, box1.y, box1.w, box1.h);
	ctx.stroke();
			
		var box1Dis1 = box1.x - ball.x - ball.r;
			box1Dis2 = ball.x - ball.r - box1.x - box1.w;
			box1Dis3 = box1.y - ball.y - ball.r;
			box1Dis4 = box1.y + box1.h - ball.y + ball.r;
		
		if(ball.xs1 >= box1Dis1 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x < box1.x) {
			ball.xs1 = box1Dis1;
		}
		if(ball.xs2 >= box1Dis2 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x > box1.x) {
			ball.xs2 = box1Dis2;
		}
		if(ball.g >= box1Dis3 && ball.y < box1.y && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = box1Dis3;
		}
		if(box1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w && ball.y + ball.r > box1.y + box1.h) {
			ball.g = box1Dis4;
		}
		
			//box2
		var box2 = {
			x: box1.x - box1.w * 3,
			y: box1.y - box1.h - ball.r,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box2.x, box2.y, box2.w, box2.h);
	ctx.stroke();
			
		var box2Dis1 = box2.x - ball.x - ball.r;
			box2Dis2 = ball.x - ball.r - box2.x - box2.w;
			box2Dis3 = box2.y - ball.y - ball.r;
			box2Dis4 = box2.y + box2.h - ball.y + ball.r;
		
		if(ball.xs1 >= box2Dis1 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x < box2.x) {
			ball.xs1 = box2Dis1;
		}
		if(ball.xs2 >= box2Dis2 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x > box2.x) {
			ball.xs2 = box2Dis2;
		}
		if(ball.g >= box2Dis3 && ball.y < box2.y && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = box2Dis3;
		}
		if(box2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w && ball.y + ball.r > box2.y + box2.h) {
			ball.g = box2Dis4;
		}
		
		//box3
		var box3 = {
			x: box1.x - box1.w * 7,
			y: box1.y - box1.h - ball.r,
			w: ball.r * 2,
			h: ball.r * 5
		};
	ctx.beginPath();
	ctx.rect(box3.x, box3.y, box3.w, box3.h);
	ctx.stroke();
			
		var box3Dis1 = box3.x - ball.x - ball.r;
			box3Dis2 = ball.x - ball.r - box3.x - box3.w;
			box3Dis3 = box3.y - ball.y - ball.r;
			box3Dis4 = box3.y + box3.h - ball.y + ball.r;
		
		if(ball.xs1 >= box3Dis1 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x < box3.x) {
			ball.xs1 = box3Dis1;
		}
		if(ball.xs2 >= box3Dis2 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x > box3.x) {
			ball.xs2 = box3Dis2;
		}
		if(ball.g >= box3Dis3 && ball.y < box3.y && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = box3Dis3;
		}
		if(box3Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w && ball.y + ball.r > box3.y + box3.h) {
			ball.g = box3Dis4;
		}
		
		//box4
		var box4 = {
			x: box1.x + box1.w * 7,
			y: box1.y - box1.h * 2 - ball.r,
			w: ball.r * 2,
			h: ball.r * 7
		};
	ctx.beginPath();
	ctx.rect(box4.x, box4.y, box4.w, box4.h);
	ctx.stroke();
			
		var box4Dis1 = box4.x - ball.x - ball.r;
			box4Dis2 = ball.x - ball.r - box4.x - box4.w;
			box4Dis3 = box4.y - ball.y - ball.r;
			box4Dis4 = box4.y + box4.h - ball.y + ball.r;
		
		if(ball.xs1 >= box4Dis1 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x < box4.x) {
			ball.xs1 = box4Dis1;
		}
		if(ball.xs2 >= box4Dis2 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x > box4.x) {
			ball.xs2 = box4Dis2;
		}
		if(ball.g >= box4Dis3 && ball.y < box4.y && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w) {
			ball.g = box4Dis3;
		}
		if(box4Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w && ball.y + ball.r > box4.y + box4.h) {
			ball.g = box4Dis4;
		}
		
		//box5
		var box5 = {
			x: box4.x + box4.w,
			y: box1.y - box1.h * 5 - ball.r,
			w: ball.r * 12,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box5.x, box5.y, box5.w, box5.h);
	ctx.stroke();
			
		var box5Dis1 = box5.x - ball.x - ball.r;
			box5Dis2 = ball.x - ball.r - box5.x - box5.w;
			box5Dis3 = box5.y - ball.y - ball.r;
			box5Dis4 = box5.y + box5.h - ball.y + ball.r;
		
		if(ball.xs1 >= box5Dis1 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h  - 2 && ball.x < box5.x) {
			ball.xs1 = box5Dis1;
		}
		if(ball.xs2 >= box5Dis2 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h  - 2 && ball.x > box5.x) {
			ball.xs2 = box5Dis2;
		}
		if(ball.g >= box5Dis3 && ball.y < box5.y && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w) {
			ball.g = box5Dis3;
		}
		if(box5Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w && ball.y + ball.r > box5.y + box5.h) {
			ball.g = box5Dis4;
		}
		
		//box6
		var box6 = {
			x: box5.x + box5.w - ball.r * 4,
			y: box5.y - box1.h,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box6.x, box6.y, box6.w, box6.h);
	ctx.stroke();
			
		var box6Dis1 = box6.x - ball.x - ball.r;
			box6Dis2 = ball.x - ball.r - box6.x - box6.w;
			box6Dis3 = box6.y - ball.y - ball.r;
			box6Dis4 = box6.y + box6.h - ball.y + ball.r;
		
		if(ball.xs1 >= box6Dis1 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x < box6.x) {
			ball.xs1 = box6Dis1;
		}
		if(ball.xs2 >= box6Dis2 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x > box6.x) {
			ball.xs2 = box6Dis2;
		}
		if(ball.g >= box6Dis3 && ball.y < box6.y && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w) {
			ball.g = box6Dis3;
		}
		if(box6Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w && ball.y + ball.r > box6.y + box6.h) {
			ball.g = box6Dis4;
		}
		
		//box7
		var box7 = {
			x: box5.x,
			y: box5.y - box1.h,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box7.x, box7.y, box7.w, box7.h);
	ctx.stroke();
			
		var box7Dis1 = box7.x - ball.x - ball.r;
			box7Dis2 = ball.x - ball.r - box7.x - box7.w;
			box7Dis3 = box7.y - ball.y - ball.r;
			box7Dis4 = box7.y + box7.h - ball.y + ball.r;
		
		if(ball.xs1 >= box7Dis1 && ball.y + ball.r > box7.y && ball.y - ball.r < box7.y + box7.h  - 2 && ball.x < box7.x) {
			ball.xs1 = box7Dis1;
		}
		if(ball.xs2 >= box7Dis2 && ball.y + ball.r > box7.y && ball.y - ball.r < box7.y + box7.h  - 2 && ball.x > box7.x) {
			ball.xs2 = box7Dis2;
		}
		if(ball.g >= box7Dis3 && ball.y < box7.y && ball.x + ball.r > box7.x && ball.x - ball.r < box7.x + box7.w) {
			ball.g = box7Dis3;
		}
		if(box7Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box7.x && ball.x - ball.r < box7.x + box7.w && ball.y + ball.r > box7.y + box7.h) {
			ball.g = box7Dis4;
		}
		
		//box8
		var box8 = {
			x: box5.x,
			y: 0,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box8.x, box8.y, box8.w, box8.h);
	ctx.stroke();
			
		var box8Dis1 = box8.x - ball.x - ball.r;
			box8Dis2 = ball.x - ball.r - box8.x - box8.w;
			box8Dis3 = box8.y - ball.y - ball.r;
			box8Dis4 = box8.y + box8.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box8Dis1 && ball.y + ball.r > box8.y && ball.y - ball.r < box8.y + box8.h  - 2 && ball.x < box8.x) {
			ball.xs1 = box8Dis1;
		}		//right side
		if(ball.xs2 >= box8Dis2 && ball.y + ball.r > box8.y && ball.y - ball.r < box8.y + box8.h  - 2 && ball.x > box8.x) {
			ball.xs2 = box8Dis2;
		}		//top side
		if(ball.g >= box8Dis3 && ball.y < box8.y && ball.x + ball.r > box8.x && ball.x - ball.r < box8.x + box8.w) {
			ball.g = box8Dis3;
		}		//bottom side
		if(box8Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box8.x && ball.x - ball.r < box8.x + box8.w && ball.y + ball.r > box8.y + box8.h) {
			ball.g = box8Dis4;
		}
		
		//box9
		var box9 = {
			x: box1.x + box1.w * 3,
			y: 0,
			w: ball.r * 2,
			h: ball.r * 15
		};
	ctx.beginPath();
	ctx.rect(box9.x, box9.y, box9.w, box9.h);
	ctx.stroke();
			
		var box9Dis1 = box9.x - ball.x - ball.r;
			box9Dis2 = ball.x - ball.r - box9.x - box9.w;
			box9Dis3 = box9.y - ball.y - ball.r;
			box9Dis4 = box9.y + box9.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box9Dis1 && ball.y + ball.r > box9.y && ball.y - ball.r < box9.y + box9.h  - 2 && ball.x < box9.x) {
			ball.xs1 = box9Dis1;
		}		//right side
		if(ball.xs2 >= box9Dis2 && ball.y + ball.r > box9.y && ball.y - ball.r < box9.y + box9.h  - 2 && ball.x > box9.x) {
			ball.xs2 = box9Dis2;
		}		//top side
		if(ball.g >= box9Dis3 && ball.y < box9.y && ball.x + ball.r > box9.x && ball.x - ball.r < box9.x + box9.w) {
			ball.g = box9Dis3;
		}		//bottom side
		if(box9Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box9.x && ball.x - ball.r < box9.x + box9.w && ball.y + ball.r > box9.y + box9.h) {
			ball.g = box9Dis4;
		}
		
		//box10
	var box10 = {
			x: box3.x + box1.w * 3,
			y: 0,
			w: ball.r * 2,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box10.x, box10.y, box10.w, box10.h);
	ctx.stroke();
			
		var box10Dis1 = box10.x - ball.x - ball.r;
			box10Dis2 = ball.x - ball.r - box10.x - box10.w;
			box10Dis3 = box10.y - ball.y - ball.r;
			box10Dis4 = box10.y + box10.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box10Dis1 && ball.y + ball.r > box10.y && ball.y - ball.r < box10.y + box10.h  - 2 && ball.x < box10.x) {
			ball.xs1 = box10Dis1;
		}		//right side
		if(ball.xs2 >= box10Dis2 && ball.y + ball.r > box10.y && ball.y - ball.r < box10.y + box10.h  - 2 && ball.x > box10.x) {
			ball.xs2 = box10Dis2;
		}		//top side
		if(ball.g >= box10Dis3 && ball.y < box10.y && ball.x + ball.r > box10.x && ball.x - ball.r < box10.x + box10.w) {
			ball.g = box10Dis3;
		}		//bottom side
		if(box10Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box10.x && ball.x - ball.r < box10.x + box10.w && ball.y + ball.r > box10.y + box10.h) {
			ball.g = box10Dis4;
		}
		
		//box11
	var box11 = {
			x: 0,
			y: goal.y + goal.r3 + ball.r * 2,
			w: box2.x - ball.r,
			h: ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box11.x, box11.y, box11.w, box11.h);
	ctx.stroke();
			
		var box11Dis1 = box11.x - ball.x - ball.r;
			box11Dis2 = ball.x - ball.r - box11.x - box11.w;
			box11Dis3 = box11.y - ball.y - ball.r;
			box11Dis4 = box11.y + box11.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box11Dis1 && ball.y + ball.r > box11.y && ball.y - ball.r < box11.y + box11.h  - 2 && ball.x < box11.x) {
			ball.xs1 = box11Dis1;
		}		//right side
		if(ball.xs2 >= box11Dis2 && ball.y + ball.r > box11.y && ball.y - ball.r < box11.y + box11.h  - 2 && ball.x > box11.x) {
			ball.xs2 = box11Dis2;
		}		//top side
		if(ball.g >= box11Dis3 && ball.y < box11.y && ball.x + ball.r > box11.x && ball.x - ball.r < box11.x + box11.w) {
			ball.g = box11Dis3;
		}		//bottom side
		if(box11Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box11.x && ball.x - ball.r < box11.x + box11.w && ball.y + ball.r > box11.y + box11.h) {
			ball.g = box11Dis4;
		}
		
		//box12
	var box12 = {
			x: 0,
			y: 0,
			w: box1.w * 2,
			h: goal.y - goal.r3 - ball.r * 2
		};
	ctx.beginPath();
	ctx.rect(box12.x, box12.y, box12.w, box12.h);
	ctx.stroke();
			
		var box12Dis1 = box12.x - ball.x - ball.r;
			box12Dis2 = ball.x - ball.r - box12.x - box12.w;
			box12Dis3 = box12.y - ball.y - ball.r;
			box12Dis4 = box12.y + box12.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box12Dis1 && ball.y + ball.r > box12.y && ball.y - ball.r < box12.y + box12.h  - 2 && ball.x < box12.x) {
			ball.xs1 = box12Dis1;
		}		//right side
		if(ball.xs2 >= box12Dis2 && ball.y + ball.r > box12.y && ball.y - ball.r < box12.y + box12.h  - 2 && ball.x > box12.x) {
			ball.xs2 = box12Dis2;
		}		//top side
		if(ball.g >= box12Dis3 && ball.y < box12.y && ball.x + ball.r > box12.x && ball.x - ball.r < box12.x + box12.w) {
			ball.g = box12Dis3;
		}		//bottom side
		if(box12Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box12.x && ball.x - ball.r < box12.x + box12.w && ball.y + ball.r > box12.y + box12.h) {
			ball.g = box12Dis4;
		}
		
		
		//spikes
			//spike1
		var spike1 = {
			x: box1.x + box1.w,
			x2: box1.x + box1.w + ball.r / 2,
			y: canvas.height - ball.r,
			w: ball.r * 12,
			w2: ball.r * 11,
			h: ball.r
		};
	
	var spike1array = [];
	var spike1move;
	var spike1Size = ball.r;
	
	for(spike1move = 0; spike1move < spike1.w / ball.r; spike1move++) {
		spike1array.push({
			spikeY: spike1.y,
			spikeX: spike1.x + spike1move * spike1Size	
		});
	}
	var spike1i, spike1disp
	for(spike1i = 0; spike1i < spike1.w / ball.r; spike1i++) {
		spike1disp = spike1array[spike1i];
		
		ctx.beginPath();
		ctx.moveTo(spike1disp.spikeX + spike1Size / 2, spike1disp.spikeY);
		ctx.lineTo(spike1disp.spikeX + spike1Size, spike1disp.spikeY + spike1Size);
		ctx.moveTo(spike1disp.spikeX + spike1Size, spike1disp.spikeY + spike1Size);
		ctx.lineTo(spike1disp.spikeX, spike1disp.spikeY + spike1Size);
		ctx.moveTo(spike1disp.spikeX, spike1disp.spikeY + spike1Size);
		ctx.lineTo(spike1disp.spikeX + spike1Size / 2, spike1disp.spikeY);
		ctx.stroke();
	}
		var spike1Dis1 = spike1.x - ball.x - ball.r;
			spike1Dis2 = ball.x - ball.r - spike1.x - spike1.w;
			spike1Dis3 = spike1.y - ball.y - ball.r;
			spike1Dis4 = ball.y - ball.r - spike1.y - spike1.h;
		
		if(ball.xs1 >= spike1Dis1 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h - 2 && ball.x < spike1.x) {
			start = true;
		}
		if(ball.xs2 >= spike1Dis2 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h - 2 && ball.x > spike1.x) {
			start = true;
		}
		if(ball.g >= spike1Dis3 && ball.y < spike1.y && ball.x + ball.r > spike1.x && ball.x - ball.r < spike1.x + spike1.w) {
			start = true;
		}
		if(spike1Dis4 <= ball.g && ball.y > spike1.y + spike1.h && ball.g < 0 && ball.x + ball.r > spike1.x && ball.x - ball.r < spike1.x + spike1.w) {
			start = true;
		}
		
		//spike2
		var spike2 = {
			x: box5.x,
			x2: box5.x + ball.r / 2,
			y: box5.y + box5.h + ball.r,
			w: box5.w,
			w2: box5.w - ball.r,
			h: ball.r,
			h2: -ball.r
		};
	
	var spike2array = [];
	var spike2move;
	var spike2Size = ball.r;
	
	for(spike2move = 0; spike2move < spike2.w / ball.r; spike2move++) {
		spike2array.push({
			spikeY: spike2.y,
			spikeX: spike2.x + spike2move * spike2Size	
		});
	}
	var spike2i, spike2disp
	for(spike2i = 0; spike2i < spike2.w / ball.r; spike2i++) {
		spike2disp = spike2array[spike2i];
		
		ctx.beginPath();
		ctx.moveTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.lineTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY - spike2Size);
		ctx.moveTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY - spike2Size);
		ctx.lineTo(spike2disp.spikeX, spike2disp.spikeY - spike2Size);
		ctx.moveTo(spike2disp.spikeX, spike2disp.spikeY - spike2Size);
		ctx.lineTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.stroke();
	}
		var spike2Dis1 = spike2.x - ball.x - ball.r;
			spike2Dis2 = ball.x - ball.r - spike2.x - spike2.w;
			spike2Dis3 = spike2.y - ball.y - ball.r;
			spike2Dis4 = ball.y - ball.r - spike2.y - spike2.h;
		
		if(ball.xs1 >= spike2Dis1 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h2 - 2 && ball.x < spike2.x) {
			start = true;
		}
		if(ball.xs2 >= spike2Dis2 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h2 - 2 && ball.x > spike2.x) {
			start = true;
		}
		if(ball.g >= spike2Dis3 && ball.y < spike2.y && ball.x + ball.r > spike2.x && ball.x - ball.r < spike2.x + spike2.w) {
			start = true;
		}
		if(spike2Dis4 <= ball.g && ball.y > spike2.y + spike2.h2 && ball.g < 0 && ball.x + ball.r > spike2.x && ball.x - ball.r < spike2.x + spike2.w) {
			start = true;
		}
		
		//spike3
		var spike3 = {
			x: spike1.x + spike1.w + box4.w,
			x2: box1.x + box1.w + ball.r / 2,
			y: canvas.height - ball.r,
			w: ball.r * 7,
			w2: ball.r * 6,
			h: ball.r
		};
	
	var spike3array = [];
	var spike3move;
	var spike3Size = ball.r;
	
	for(spike3move = 0; spike3move < spike3.w / ball.r; spike3move++) {
		spike3array.push({
			spikeY: spike3.y,
			spikeX: spike3.x + spike3move * spike3Size	
		});
	}
	var spike3i, spike3disp
	for(spike3i = 0; spike3i < spike3.w / ball.r; spike3i++) {
		spike3disp = spike3array[spike3i];
		
		ctx.beginPath();
		ctx.moveTo(spike3disp.spikeX + spike3Size / 2, spike3disp.spikeY);
		ctx.lineTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY + spike3Size);
		ctx.moveTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY + spike3Size);
		ctx.lineTo(spike3disp.spikeX, spike3disp.spikeY + spike3Size);
		ctx.moveTo(spike3disp.spikeX, spike3disp.spikeY + spike3Size);
		ctx.lineTo(spike3disp.spikeX + spike3Size / 2, spike3disp.spikeY);
		ctx.stroke();
	}
		var spike3Dis1 = spike3.x - ball.x - ball.r;
			spike3Dis2 = ball.x - ball.r - spike3.x - spike3.w;
			spike3Dis3 = spike3.y - ball.y - ball.r;
			spike3Dis4 = ball.y - ball.r - spike3.y - spike3.h;
		
		if(ball.xs1 >= spike3Dis1 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h - 2 && ball.x < spike3.x) {
			start = true;
		}
		if(ball.xs2 >= spike3Dis2 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h - 2 && ball.x > spike3.x) {
			start = true;
		}
		if(ball.g >= spike3Dis3 && ball.y < spike3.y && ball.x + ball.r > spike3.x && ball.x - ball.r < spike3.x + spike3.w) {
			start = true;
		}
		if(spike3Dis4 <= ball.g && ball.y > spike3.y + spike3.h && ball.g < 0 && ball.x + ball.r > spike3.x && ball.x - ball.r < spike3.x + spike3.w) {
			start = true;
		}
		
		//spike4
		var spike4 = {
			x: box5.x + box1.w,
			x2: box5.x + box1.w + ball.r / 2,
			y: ball.r + 1,
			w: box5.w - box1.w,
			w2: box5.w - box1.w - ball.r,
			h: -ball.r,
		};
	
	var spike4array = [];
	var spike4move;
	var spike4Size = ball.r;
	
	for(spike4move = 0; spike4move < spike4.w / ball.r; spike4move++) {
		spike4array.push({
			spikeY: spike4.y,
			spikeX: spike4.x + spike4move * spike4Size	
		});
	}
	var spike4i, spike4disp
	for(spike4i = 0; spike4i < spike4.w / ball.r; spike4i++) {
		spike4disp = spike4array[spike4i];
		
		ctx.beginPath();
		ctx.moveTo(spike4disp.spikeX + spike4Size / 2, spike4disp.spikeY);
		ctx.lineTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY - spike4Size);
		ctx.moveTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY - spike4Size);
		ctx.lineTo(spike4disp.spikeX, spike4disp.spikeY - spike4Size);
		ctx.moveTo(spike4disp.spikeX, spike4disp.spikeY - spike4Size);
		ctx.lineTo(spike4disp.spikeX + spike4Size / 2, spike4disp.spikeY);
		ctx.stroke();
	}
		var spike4Dis1 = spike4.x2 - ball.x - ball.r;
			spike4Dis2 = ball.x - ball.r - spike4.x - spike4.w;
			spike4Dis3 = spike4.y - ball.y - ball.r;
			spike4Dis4 = spike4.y + spike4.h - ball.y + ball.r;
		
		if(ball.xs1 >= spike4Dis1 && ball.y + ball.r > spike4.y && ball.y - ball.r < spike4.y + spike4.h2 - 2 && ball.x < spike4.x) {
			start = true;
		}
		if(ball.xs2 >= spike4Dis2 && ball.y + ball.r > spike4.y && ball.y - ball.r < spike4.y + spike4.h2 - 2 && ball.x > spike4.x) {
			start = true;
		}
		if(ball.g >= spike4Dis3 && ball.y < spike4.y && ball.x + ball.r > spike4.x && ball.x - ball.r < spike4.x + spike4.w) {
			start = true;
		}
		if(spike4Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > spike4.x && ball.x - ball.r < spike4.x + spike4.w && ball.y + ball.r > spike4.y + spike4.h) {
			start = true;
		}
		
		//spike5
		var spike5 = {
			x: box5.x + box1.w,
			x2: box5.x + box1.w + ball.r / 2,
			y: box5.y - ball.r,
			w: ball.r * 6,
			w2: ball.r * 5,
			h: ball.r
		};
	
	var spike5array = [];
	var spike5move;
	var spike5Size = ball.r;
	
	for(spike5move = 0; spike5move < spike5.w / ball.r; spike5move++) {
		spike5array.push({
			spikeY: spike5.y,
			spikeX: spike5.x + spike5move * spike5Size	
		});
	}
	var spike5i, spike5disp
	for(spike5i = 0; spike5i < spike5.w / ball.r; spike5i++) {
		spike5disp = spike5array[spike5i];
		
		ctx.beginPath();
		ctx.moveTo(spike5disp.spikeX + spike5Size / 2, spike5disp.spikeY);
		ctx.lineTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY + spike5Size);
		ctx.moveTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY + spike5Size);
		ctx.lineTo(spike5disp.spikeX, spike5disp.spikeY + spike5Size);
		ctx.moveTo(spike5disp.spikeX, spike5disp.spikeY + spike5Size);
		ctx.lineTo(spike5disp.spikeX + spike5Size / 2, spike5disp.spikeY);
		ctx.stroke();
	}
		var spike5Dis1 = spike5.x - ball.x - ball.r;
			spike5Dis2 = ball.x - ball.r - spike5.x - spike5.w;
			spike5Dis3 = spike5.y - ball.y - ball.r;
			spike5Dis4 = ball.y - ball.r - spike5.y - spike5.h;
		
		if(ball.xs1 >= spike5Dis1 && ball.y + ball.r > spike5.y && ball.y - ball.r < spike5.y + spike5.h - 2 && ball.x < spike5.x) {
			start = true;
		}
		if(ball.xs2 >= spike5Dis2 && ball.y + ball.r > spike5.y && ball.y - ball.r < spike5.y + spike5.h - 2 && ball.x > spike5.x) {
			start = true;
		}
		if(ball.g >= spike5Dis3 && ball.y < spike5.y && ball.x + ball.r > spike5.x && ball.x - ball.r < spike5.x + spike5.w) {
			start = true;
		}
		if(spike5Dis4 <= ball.g && ball.y > spike5.y + spike5.h && ball.g < 0 && ball.x + ball.r > spike5.x && ball.x - ball.r < spike5.x + spike5.w) {
			start = true;
		}
		
		//spike6
	var spike6 = {
			x: box5.x,
			x2: box5.x + ball.r / 2,
			y: box5.y - ball.r * 3,
			w: ball.r * 2,
			w2: ball.r,
			h: ball.r
		};
	
	var spike6array = [];
	var spike6move;
	var spike6Size = ball.r;
	
	for(spike6move = 0; spike6move < spike6.w / ball.r; spike6move++) {
		spike6array.push({
			spikeY: spike6.y,
			spikeX: spike6.x + spike6move * spike6Size	
		});
	}
	var spike6i, spike6disp
	for(spike6i = 0; spike6i < spike6.w / ball.r; spike6i++) {
		spike6disp = spike6array[spike6i];
		
		ctx.beginPath();
		ctx.moveTo(spike6disp.spikeX + spike6Size / 2, spike6disp.spikeY);
		ctx.lineTo(spike6disp.spikeX + spike6Size, spike6disp.spikeY + spike6Size);
		ctx.moveTo(spike6disp.spikeX + spike6Size, spike6disp.spikeY + spike6Size);
		ctx.lineTo(spike6disp.spikeX, spike6disp.spikeY + spike6Size);
		ctx.moveTo(spike6disp.spikeX, spike6disp.spikeY + spike6Size);
		ctx.lineTo(spike6disp.spikeX + spike6Size / 2, spike6disp.spikeY);
		ctx.stroke();
	}
		var spike6Dis1 = spike6.x - ball.x - ball.r;
			spike6Dis2 = ball.x - ball.r - spike6.x - spike6.w;
			spike6Dis3 = spike6.y - ball.y - ball.r;
			spike6Dis4 = ball.y - ball.r - spike6.y - spike6.h;
		
		if(ball.xs1 >= spike6Dis1 && ball.y + ball.r > spike6.y && ball.y - ball.r < spike6.y + spike6.h - 2 && ball.x < spike6.x) {
			start = true;
		}
		if(ball.xs2 >= spike6Dis2 && ball.y + ball.r > spike6.y && ball.y - ball.r < spike6.y + spike6.h - 2 && ball.x > spike6.x) {
			start = true;
		}
		if(ball.g >= spike6Dis3 && ball.y < spike6.y && ball.x + ball.r > spike6.x && ball.x - ball.r < spike6.x + spike6.w) {
			start = true;
		}
		if(spike6Dis4 <= ball.g && ball.y > spike6.y + spike6.h && ball.g < 0 && ball.x + ball.r > spike6.x && ball.x - ball.r < spike6.x + spike6.w) {
			start = true;
		}
		
		//spike7
	var spike7 = {
			x: box9.x + box1.w,
			x2: box5.x + box1.w + ball.r / 2,
			y: ball.r + 1,
			w: box5.w - box1.w * 2,
			w2: box5.w - box1.w * 2 - ball.r,
			h: -ball.r,
		};
	
	var spike7array = [];
	var spike7move;
	var spike7Size = ball.r;
	
	for(spike7move = 0; spike7move < spike7.w / ball.r; spike7move++) {
		spike7array.push({
			spikeY: spike7.y,
			spikeX: spike7.x + spike7move * spike7Size	
		});
	}
	var spike7i, spike7disp
	for(spike7i = 0; spike7i < spike7.w / ball.r; spike7i++) {
		spike7disp = spike7array[spike7i];
		
		ctx.beginPath();
		ctx.moveTo(spike7disp.spikeX + spike7Size / 2, spike7disp.spikeY);
		ctx.lineTo(spike7disp.spikeX + spike7Size, spike7disp.spikeY - spike7Size);
		ctx.moveTo(spike7disp.spikeX + spike7Size, spike7disp.spikeY - spike7Size);
		ctx.lineTo(spike7disp.spikeX, spike7disp.spikeY - spike7Size);
		ctx.moveTo(spike7disp.spikeX, spike7disp.spikeY - spike7Size);
		ctx.lineTo(spike7disp.spikeX + spike7Size / 2, spike7disp.spikeY);
		ctx.stroke();
	}
		var spike7Dis1 = spike7.x2 - ball.x - ball.r;
			spike7Dis2 = ball.x - ball.r - spike7.x - spike7.w;
			spike7Dis3 = spike7.y - ball.y - ball.r;
			spike7Dis4 = spike7.y + spike7.h - ball.y + ball.r;
		
		if(ball.xs1 >= spike7Dis1 && ball.y + ball.r > spike7.y && ball.y - ball.r < spike7.y + spike7.h2 - 2 && ball.x < spike7.x) {
			start = true;
		}
		if(ball.xs2 >= spike7Dis2 && ball.y + ball.r > spike7.y && ball.y - ball.r < spike7.y + spike7.h2 - 2 && ball.x > spike7.x) {
			start = true;
		}
		if(ball.g >= spike7Dis3 && ball.y < spike7.y && ball.x + ball.r > spike7.x && ball.x - ball.r < spike7.x + spike7.w) {
			start = true;
		}
		if(spike7Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > spike7.x && ball.x - ball.r < spike7.x + spike7.w && ball.y + ball.r > spike7.y + spike7.h) {
			start = true;
		}
		
		//spike8
	var spike8 = {
			x: box1.w * 2,
			x2: box1.w * 2 + ball.r / 2,
			y: ball.r + 1,
			w: box1.w + box1.w * 3,
			w2: box1.w + box1.w * 3 - ball.r,
			h: -ball.r,
		};
	
	var spike8array = [];
	var spike8move;
	var spike8Size = ball.r;
	
	for(spike8move = 0; spike8move < spike8.w / ball.r; spike8move++) {
		spike8array.push({
			spikeY: spike8.y,
			spikeX: spike8.x + spike8move * spike8Size	
		});
	}
	var spike8i, spike8disp
	for(spike8i = 0; spike8i < spike8.w / ball.r; spike8i++) {
		spike8disp = spike8array[spike8i];
		
		ctx.beginPath();
		ctx.moveTo(spike8disp.spikeX + spike8Size / 2, spike8disp.spikeY);
		ctx.lineTo(spike8disp.spikeX + spike8Size, spike8disp.spikeY - spike8Size);
		ctx.moveTo(spike8disp.spikeX + spike8Size, spike8disp.spikeY - spike8Size);
		ctx.lineTo(spike8disp.spikeX, spike8disp.spikeY - spike8Size);
		ctx.moveTo(spike8disp.spikeX, spike8disp.spikeY - spike8Size);
		ctx.lineTo(spike8disp.spikeX + spike8Size / 2, spike8disp.spikeY);
		ctx.stroke();
	}
		var spike8Dis1 = spike8.x2 - ball.x - ball.r;
			spike8Dis2 = ball.x - ball.r - spike8.x - spike8.w;
			spike8Dis3 = spike8.y - ball.y - ball.r;
			spike8Dis4 = spike8.y + spike8.h - ball.y + ball.r;
		
		if(ball.xs1 >= spike8Dis1 && ball.y + ball.r > spike8.y && ball.y - ball.r < spike8.y + spike8.h2 - 2 && ball.x < spike8.x) {
			start = true;
		}
		if(ball.xs2 >= spike8Dis2 && ball.y + ball.r > spike8.y && ball.y - ball.r < spike8.y + spike8.h2 - 2 && ball.x > spike8.x) {
			start = true;
		}
		if(ball.g >= spike8Dis3 && ball.y < spike8.y && ball.x + ball.r > spike8.x && ball.x - ball.r < spike8.x + spike8.w) {
			start = true;
		}
		if(spike8Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > spike8.x && ball.x - ball.r < spike8.x + spike8.w && ball.y + ball.r > spike8.y + spike8.h) {
			start = true;
		}
		
		//spike9
	var spike9 = {
			x: spike8.x + spike8.w + box1.w,
			x2: spike8.x + spike8.w + box1.w + ball.r / 2,
			y: ball.r + 1,
			w: box1.w + box1.w * 5,
			w2: box1.w + box1.w * 5 - ball.r,
			h: -ball.r,
		};
	
	var spike9array = [];
	var spike9move;
	var spike9Size = ball.r;
	
	for(spike9move = 0; spike9move < spike9.w / ball.r; spike9move++) {
		spike9array.push({
			spikeY: spike9.y,
			spikeX: spike9.x + spike9move * spike9Size	
		});
	}
	var spike9i, spike9disp
	for(spike9i = 0; spike9i < spike9.w / ball.r; spike9i++) {
		spike9disp = spike9array[spike9i];
		
		ctx.beginPath();
		ctx.moveTo(spike9disp.spikeX + spike9Size / 2, spike9disp.spikeY);
		ctx.lineTo(spike9disp.spikeX + spike9Size, spike9disp.spikeY - spike9Size);
		ctx.moveTo(spike9disp.spikeX + spike9Size, spike9disp.spikeY - spike9Size);
		ctx.lineTo(spike9disp.spikeX, spike9disp.spikeY - spike9Size);
		ctx.moveTo(spike9disp.spikeX, spike9disp.spikeY - spike9Size);
		ctx.lineTo(spike9disp.spikeX + spike9Size / 2, spike9disp.spikeY);
		ctx.stroke();
	}
		var spike9Dis1 = spike9.x2 - ball.x - ball.r;
			spike9Dis2 = ball.x - ball.r - spike9.x - spike9.w;
			spike9Dis3 = spike9.y - ball.y - ball.r;
			spike9Dis4 = spike9.y + spike9.h - ball.y + ball.r;
		
		if(ball.xs1 >= spike9Dis1 && ball.y + ball.r > spike9.y && ball.y - ball.r < spike9.y + spike9.h2 - 2 && ball.x < spike9.x) {
			start = true;
		}
		if(ball.xs2 >= spike9Dis2 && ball.y + ball.r > spike9.y && ball.y - ball.r < spike9.y + spike9.h2 - 2 && ball.x > spike9.x) {
			start = true;
		}
		if(ball.g >= spike9Dis3 && ball.y < spike9.y && ball.x + ball.r > spike9.x && ball.x - ball.r < spike9.x + spike9.w) {
			start = true;
		}
		if(spike9Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > spike9.x && ball.x - ball.r < spike9.x + spike9.w && ball.y + ball.r > spike9.y + spike9.h) {
			start = true;
		}
		
		//spike10
		var spike10 = {
			x: box11.x,
			x2: box11.x + ball.r / 2,
			y: box11.y - ball.r,
			w: box11.w,
			w2: box11.w - ball.r,
			h: ball.r
		};
	
	var spike10array = [];
	var spike10move;
	var spike10Size = ball.r;
	
	for(spike10move = 0; spike10move < spike10.w / ball.r; spike10move++) {
		spike10array.push({
			spikeY: spike10.y,
			spikeX: spike10.x + spike10move * spike10Size	
		});
	}
	var spike10i, spike10disp
	for(spike10i = 0; spike10i < spike10.w / ball.r; spike10i++) {
		spike10disp = spike10array[spike10i];
		
		ctx.beginPath();
		ctx.moveTo(spike10disp.spikeX + spike10Size / 2, spike10disp.spikeY);
		ctx.lineTo(spike10disp.spikeX + spike10Size, spike10disp.spikeY + spike10Size);
		ctx.moveTo(spike10disp.spikeX + spike10Size, spike10disp.spikeY + spike10Size);
		ctx.lineTo(spike10disp.spikeX, spike10disp.spikeY + spike10Size);
		ctx.moveTo(spike10disp.spikeX, spike10disp.spikeY + spike10Size);
		ctx.lineTo(spike10disp.spikeX + spike10Size / 2, spike10disp.spikeY);
		ctx.stroke();
	}
		var spike10Dis1 = spike10.x - ball.x - ball.r;
			spike10Dis2 = ball.x - ball.r - spike10.x - spike10.w;
			spike10Dis3 = spike10.y - ball.y - ball.r;
			spike10Dis4 = ball.y - ball.r - spike10.y - spike10.h;
		
		if(ball.xs1 >= spike10Dis1 && ball.y + ball.r > spike10.y && ball.y - ball.r < spike10.y + spike10.h - 2 && ball.x < spike10.x) {
			start = true;
		}
		if(ball.xs2 >= spike10Dis2 && ball.y + ball.r > spike10.y && ball.y - ball.r < spike10.y + spike10.h - 2 && ball.x > spike10.x) {
			start = true;
		}
		if(ball.g >= spike10Dis3 && ball.y < spike10.y && ball.x + ball.r > spike10.x && ball.x - ball.r < spike10.x + spike10.w) {
			start = true;
		}
		if(spike10Dis4 <= ball.g && ball.y > spike10.y + spike10.h && ball.g < 0 && ball.x + ball.r > spike10.x && ball.x - ball.r < spike10.x + spike10.w) {
			start = true;
		}
		
		//spike12
	var spike12 = {
			x: box12.x,
			x2: box12.x + ball.r / 2,
			y: box12.y + box12.h + ball.r,
			w: box12.w,
			w2: box12.w - ball.r,
			h: -ball.r,
		};
	
	var spike12array = [];
	var spike12move;
	var spike12Size = ball.r;
	
	for(spike12move = 0; spike12move < spike12.w / ball.r; spike12move++) {
		spike12array.push({
			spikeY: spike12.y,
			spikeX: spike12.x + spike12move * spike12Size	
		});
	}
	var spike12i, spike12disp
	for(spike12i = 0; spike12i < spike12.w / ball.r; spike12i++) {
		spike12disp = spike12array[spike12i];
		
		ctx.beginPath();
		ctx.moveTo(spike12disp.spikeX + spike12Size / 2, spike12disp.spikeY);
		ctx.lineTo(spike12disp.spikeX + spike12Size, spike12disp.spikeY - spike12Size);
		ctx.moveTo(spike12disp.spikeX + spike12Size, spike12disp.spikeY - spike12Size);
		ctx.lineTo(spike12disp.spikeX, spike12disp.spikeY - spike12Size);
		ctx.moveTo(spike12disp.spikeX, spike12disp.spikeY - spike12Size);
		ctx.lineTo(spike12disp.spikeX + spike12Size / 2, spike12disp.spikeY);
		ctx.stroke();
	}
		var spike12Dis1 = spike12.x2 - ball.x - ball.r;
			spike12Dis2 = ball.x - ball.r - spike12.x - spike12.w;
			spike12Dis3 = spike12.y - ball.y - ball.r;
			spike12Dis4 = spike12.y + spike12.h - ball.y + ball.r;
		
		if(ball.xs1 >= spike12Dis1 && ball.y + ball.r > spike12.y && ball.y - ball.r < spike12.y + spike12.h2 - 2 && ball.x < spike12.x) {
			start = true;
		}
		if(ball.xs2 >= spike12Dis2 && ball.y + ball.r > spike12.y && ball.y - ball.r < spike12.y + spike12.h2 - 2 && ball.x > spike12.x) {
			start = true;
		}
		if(ball.g >= spike12Dis3 && ball.y < spike12.y && ball.x + ball.r > spike12.x && ball.x - ball.r < spike12.x + spike12.w) {
			start = true;
		}
		if(spike12Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > spike12.x && ball.x - ball.r < spike12.x + spike12.w && ball.y + ball.r > spike12.y + spike12.h) {
			start = true;
		}
}