	var shrinkBlock1Size = 0,
		shrinkBlock2Size = 0,
		shrinkBlock3Size = 0,
		shrinkBlock4Size = 0,
		shrinkBlock5Size = 0;
		shrinkBlock6Size = 0;
function level6() {
	if(start == true) {
		shrinkBlock1Size = 0;
		shrinkBlock2Size = 0;
		shrinkBlock3Size = 0;
		shrinkBlock4Size = 0;
		shrinkBlock5Size = 0;
		shrinkBlock6Size = 0;
		
		if(checkpoint == 1) {
			ball.x = 50;
			ball.y = 145;
			ball.gAcc = 0.04;
			ball.g = 0;
			ball.r = 10;
			screen.x = -canvas.width;
			screen.y = 0;
			gFlipper = true;
		} else if(checkpoint == 2) {
			ball.x = 475;
			ball.y = 221;
			ball.gAcc = 0.04;
			ball.g = 0;
			ball.r = 5;
			screen.x = -canvas.width;
			screen.y = 0;
			gFlipper = true;
		} else {
			ball.x = 100;
			ball.y = 110;
			ball.gAcc = 0.02;
			ball.g = 0;
			ball.r = 5;
			screen.x = 0;
			screen.y = 0;
			gFlipper = false;
		}
		start = false;
	}
	goal.x = screen.x + canvas.width + 145;
	goal.y = screen.y + 225;
	
		
		//screen flipping
	//flipX1
	var flipX1 = {
			x: screen.x + canvas.width - ball.r2 * 2 - 0.5,
			y: screen.y + canvas.height / 2 - ball.r2 * 2,
			y2: screen.y + canvas.height / 2,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(flipX1.x, flipX1.y, flipX1.w, flipX1.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(flipX1.x + flipAniX, flipX1.y);
	ctx.lineTo(flipX1.x + flipAniX, flipX1.y2);
	ctx.stroke();
			
		var flipX1Dis1 = flipX1.x - ball.x - ball.r;
			flipX1Dis2 = ball.x - ball.r - flipX1.x - flipX1.w;
			flipX1Dis3 = flipX1.y - ball.y - ball.r;
			flipX1Dis4 = flipX1.y + flipX1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= flipX1Dis1 && ball.y + ball.r > flipX1.y && ball.y - ball.r < flipX1.y + flipX1.h  - 2 && ball.x < flipX1.x) {
			ball.x = ball.r2;
			screen.x -= canvas.width;
		}		//right side
		if(ball.xs2 >= flipX1Dis2 && ball.y + ball.r > flipX1.y && ball.y - ball.r < flipX1.y + flipX1.h  - 2 && ball.x > flipX1.x) {
			ball.x = ball.r2;
			screen.x -= canvas.width;
		}		//top side
		if(ball.g >= flipX1Dis3 && ball.y < flipX1.y && ball.x + ball.r > flipX1.x && ball.x - ball.r < flipX1.x + flipX1.w) {
			ball.x = ball.r2;
			screen.x -= canvas.width;
		}		//bottom side
		if(flipX1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > flipX1.x && ball.x - ball.r < flipX1.x + flipX1.w && ball.y + ball.r > flipX1.y + flipX1.h) {
			ball.x = ball.r2;
			screen.x -= canvas.width;
		}
		
	//reverseflipX1
	var reverseflipX1 = {
			x: screen.x + canvas.width,
			y: 500,
			y2: 500,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(reverseflipX1.x, reverseflipX1.y, reverseflipX1.w, reverseflipX1.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(reverseflipX1.x + reverseflipAniX, reverseflipX1.y);
	ctx.lineTo(reverseflipX1.x + reverseflipAniX, reverseflipX1.y2);
	ctx.stroke();
			
		var reverseflipX1Dis1 = reverseflipX1.x - ball.x - ball.r;
			reverseflipX1Dis2 = ball.x - ball.r - reverseflipX1.x - reverseflipX1.w;
			reverseflipX1Dis3 = reverseflipX1.y - ball.y - ball.r;
			reverseflipX1Dis4 = reverseflipX1.y + reverseflipX1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= reverseflipX1Dis1 && ball.y + ball.r > reverseflipX1.y && ball.y - ball.r < reverseflipX1.y + reverseflipX1.h  - 2 && ball.x < reverseflipX1.x) {
			ball.x = canvas.width - ball.r * 4;
			screen.x += canvas.width;
		}		//right side
		if(ball.xs2 >= reverseflipX1Dis2 && ball.y + ball.r > reverseflipX1.y && ball.y - ball.r < reverseflipX1.y + reverseflipX1.h  - 2 && ball.x > reverseflipX1.x) {
			ball.x = canvas.width - ball.r * 4;
			screen.x += canvas.width;
		}		//top side
		if(ball.g >= reverseflipX1Dis3 && ball.y < reverseflipX1.y && ball.x + ball.r > reverseflipX1.x && ball.x - ball.r < reverseflipX1.x + reverseflipX1.w) {
			ball.x = canvas.width - ball.r * 4;
			screen.x += canvas.width;
		}		//bottom side
		if(reverseflipX1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > reverseflipX1.x && ball.x - ball.r < reverseflipX1.x + reverseflipX1.w && ball.y + ball.r > reverseflipX1.y + reverseflipX1.h) {
			ball.x = canvas.width - ball.r * 4;
			screen.x += canvas.width;
		}		
		
		//boxes
	//box1
	var box1 = {
			x: screen.x + 90,
			y: screen.y + 120,
			w: ball.r2 * 2 + ball.r2 / 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(box1.x, box1.y, box1.w, box1.h);
	ctx.stroke();
			
		var box1Dis1 = box1.x - ball.x - ball.r;
			box1Dis2 = ball.x - ball.r - box1.x - box1.w;
			box1Dis3 = box1.y - ball.y - ball.r;
			box1Dis4 = box1.y + box1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box1Dis1 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x < box1.x) {
			ball.xs1 = box1Dis1;
		}		//right side
		if(ball.xs2 >= box1Dis2 && ball.y + ball.r > box1.y && ball.y - ball.r < box1.y + box1.h  - 2 && ball.x > box1.x) {
			ball.xs2 = box1Dis2;
		}		//top side
		if(ball.g >= box1Dis3 && ball.y < box1.y && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w) {
			ball.g = box1Dis3;
		}		//bottom side
		if(box1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box1.x && ball.x - ball.r < box1.x + box1.w && ball.y + ball.r > box1.y + box1.h) {
			ball.g = box1Dis4;
		}
		
		//box2
	var box2 = {
			x: box1.x + ball.r2 * 6,
			y: box1.y - ball.r2 * 4,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(box2.x, box2.y, box2.w, box2.h);
	ctx.stroke();
			
		var box2Dis1 = box2.x - ball.x - ball.r;
			box2Dis2 = ball.x - ball.r - box2.x - box2.w;
			box2Dis3 = box2.y - ball.y - ball.r;
			box2Dis4 = box2.y + box2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box2Dis1 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x < box2.x) {
			ball.xs1 = box2Dis1;
		}		//right side
		if(ball.xs2 >= box2Dis2 && ball.y + ball.r > box2.y && ball.y - ball.r < box2.y + box2.h  - 2 && ball.x > box2.x) {
			ball.xs2 = box2Dis2;
		}		//top side
		if(ball.g >= box2Dis3 && ball.y < box2.y && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w) {
			ball.g = box2Dis3;
		}		//bottom side
		if(box2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box2.x && ball.x - ball.r < box2.x + box2.w && ball.y + ball.r > box2.y + box2.h) {
			ball.g = box2Dis4;
		}
		
		//box3
	var box3 = {
			x: box1.x - ball.r2 / 2,
			y: box1.y - ball.r2 * 5 - ball.r2 / 2,
			w: ball.r2 * 4,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box3.x, box3.y, box3.w, box3.h);
	ctx.stroke();
			
		var box3Dis1 = box3.x - ball.x - ball.r;
			box3Dis2 = ball.x - ball.r - box3.x - box3.w;
			box3Dis3 = box3.y - ball.y - ball.r;
			box3Dis4 = box3.y + box3.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box3Dis1 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x < box3.x) {
			ball.xs1 = box3Dis1;
		}		//right side
		if(ball.xs2 >= box3Dis2 && ball.y + ball.r > box3.y && ball.y - ball.r < box3.y + box3.h  - 2 && ball.x > box3.x) {
			ball.xs2 = box3Dis2;
		}		//top side
		if(ball.g >= box3Dis3 && ball.y < box3.y && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w) {
			ball.g = box3Dis3;
		}		//bottom side
		if(box3Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box3.x && ball.x - ball.r < box3.x + box3.w && ball.y + ball.r > box3.y + box3.h) {
			ball.g = box3Dis4;
		}
		
		//box4
	var box4 = {
			x: screen.x + 250,
			y: box1.y - ball.r2 * 6 - ball.r2 / 2,
			w: ball.r2 * 2,
			h: ball.r2 * 17 - ball.r2 / 3
		};
	ctx.beginPath();
	ctx.rect(box4.x, box4.y, box4.w, box4.h);
	ctx.stroke();
			
		var box4Dis1 = box4.x - ball.x - ball.r;
			box4Dis2 = ball.x - ball.r - box4.x - box4.w;
			box4Dis3 = box4.y - ball.y - ball.r;
			box4Dis4 = box4.y + box4.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box4Dis1 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x < box4.x) {
			ball.xs1 = box4Dis1;
		}		//right side
		if(ball.xs2 >= box4Dis2 && ball.y + ball.r > box4.y && ball.y - ball.r < box4.y + box4.h  - 2 && ball.x > box4.x) {
			ball.xs2 = box4Dis2;
		}		//top side
		if(ball.g >= box4Dis3 && ball.y < box4.y && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w) {
			ball.g = box4Dis3;
		}		//bottom side
		if(box4Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box4.x && ball.x - ball.r < box4.x + box4.w && ball.y + ball.r > box4.y + box4.h) {
			ball.g = box4Dis4;
		}
		
		//box5
	var box5 = {
			x: box4.x + ball.r2 * 4,
			y: box4.y - ball.r2 * 4,
			w: ball.r2 * 2,
			h: ball.r2 * 16
		};
	ctx.beginPath();
	ctx.rect(box5.x, box5.y, box5.w, box5.h);
	ctx.stroke();
			
		var box5Dis1 = box5.x - ball.x - ball.r;
			box5Dis2 = ball.x - ball.r - box5.x - box5.w;
			box5Dis3 = box5.y - ball.y - ball.r;
			box5Dis4 = box5.y + box5.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box5Dis1 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h  - 2 && ball.x < box5.x) {
			ball.xs1 = box5Dis1;
		}		//right side
		if(ball.xs2 >= box5Dis2 && ball.y + ball.r > box5.y && ball.y - ball.r < box5.y + box5.h  - 2 && ball.x > box5.x) {
			ball.xs2 = box5Dis2;
		}		//top side
		if(ball.g >= box5Dis3 && ball.y < box5.y && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w) {
			ball.g = box5Dis3;
		}		//bottom side
		if(box5Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box5.x && ball.x - ball.r < box5.x + box5.w && ball.y + ball.r > box5.y + box5.h) {
			ball.g = box5Dis4;
		}
		
		//box6
	var box6 = {
			x: box5.x + box5.w + ball.r2 * 3,
			y: box5.y + box5.h + ball.r2 + ball.r2 / 2,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(box6.x, box6.y, box6.w, box6.h);
	ctx.stroke();
			
		var box6Dis1 = box6.x - ball.x - ball.r;
			box6Dis2 = ball.x - ball.r - box6.x - box6.w;
			box6Dis3 = box6.y - ball.y - ball.r;
			box6Dis4 = box6.y + box6.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box6Dis1 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x < box6.x) {
			ball.xs1 = box6Dis1;
		}		//right side
		if(ball.xs2 >= box6Dis2 && ball.y + ball.r > box6.y && ball.y - ball.r < box6.y + box6.h  - 2 && ball.x > box6.x) {
			ball.xs2 = box6Dis2;
		}		//top side
		if(ball.g >= box6Dis3 && ball.y < box6.y && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w) {
			ball.g = box6Dis3;
		}		//bottom side
		if(box6Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box6.x && ball.x - ball.r < box6.x + box6.w && ball.y + ball.r > box6.y + box6.h) {
			ball.g = box6Dis4;
		}
		
		//box7
	var box7 = {
			x: box6.x + ball.r2 * 6,
			y: screen.y + ball.r2 * 4,
			w: ball.r2 * 2,
			h: ball.r2 * 16
		};
	ctx.beginPath();
	ctx.rect(box7.x, box7.y, box7.w, box7.h);
	ctx.stroke();
			
		var box7Dis1 = box7.x - ball.x - ball.r;
			box7Dis2 = ball.x - ball.r - box7.x - box7.w;
			box7Dis3 = box7.y - ball.y - ball.r;
			box7Dis4 = box7.y + box7.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box7Dis1 && ball.y + ball.r > box7.y && ball.y - ball.r < box7.y + box7.h  - 2 && ball.x < box7.x) {
			ball.xs1 = box7Dis1;
		}		//right side
		if(ball.xs2 >= box7Dis2 && ball.y + ball.r > box7.y && ball.y - ball.r < box7.y + box7.h  - 2 && ball.x > box7.x) {
			ball.xs2 = box7Dis2;
		}		//top side
		if(ball.g >= box7Dis3 && ball.y < box7.y && ball.x + ball.r > box7.x && ball.x - ball.r < box7.x + box7.w) {
			ball.g = box7Dis3;
		}		//bottom side
		if(box7Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box7.x && ball.x - ball.r < box7.x + box7.w && ball.y + ball.r > box7.y + box7.h) {
			ball.g = box7Dis4;
		}
		
		//box8
	var box8 = {
			x: box5.x + ball.r2 * 4,
			y: box5.y + ball.r2 * 5,
			w: ball.r2 * 2,
			h: ball.r2 * 2
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
			x: screen.x + canvas.width - ball.r2 * 5,
			y: box5.y + ball.r2 * 14,
			w: ball.r2 * 2,
			h: ball.r2 * 2
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
			x: (screen.x + canvas.width + 0.5),
			y: box5.y + ball.r2 * 14,
			w: ball.r2 * 6,
			h: ball.r2 * 2
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
			x: box10.x + box10.w + ball.r2 * 3,
			y: box10.y - ball.r2 * 8,
			w: ball.r2 * 2 + ball.r2,
			h: ball.r2 * 4
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
			x: box11.x + ball.r2 * 3,
			y: box11.y - ball.r2 * 2,
			w: ball.r2,
			h: ball.r2 * 18 + ball.r2 / 2
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
		
		//box13
	var box13 = {
			x: box12.x + ball.r2,
			y: box12.y - ball.r2 * 3,
			w: ball.r2 * 3,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box13.x, box13.y, box13.w, box13.h);
	ctx.stroke();
			
		var box13Dis1 = box13.x - ball.x - ball.r;
			box13Dis2 = ball.x - ball.r - box13.x - box13.w;
			box13Dis3 = box13.y - ball.y - ball.r;
			box13Dis4 = box13.y + box13.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box13Dis1 && ball.y + ball.r > box13.y && ball.y - ball.r < box13.y + box13.h  - 2 && ball.x < box13.x) {
			ball.xs1 = box13Dis1;
		}		//right side
		if(ball.xs2 >= box13Dis2 && ball.y + ball.r > box13.y && ball.y - ball.r < box13.y + box13.h  - 2 && ball.x > box13.x) {
			ball.xs2 = box13Dis2;
		}		//top side
		if(ball.g >= box13Dis3 && ball.y < box13.y && ball.x + ball.r > box13.x && ball.x - ball.r < box13.x + box13.w) {
			ball.g = box13Dis3;
		}		//bottom side
		if(box13Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box13.x && ball.x - ball.r < box13.x + box13.w && ball.y + ball.r > box13.y + box13.h) {
			ball.g = box13Dis4;
		}
		
		//box14
	var box14 = {
			x: box13.x + box13.w + ball.r2 * 2,
			y: box13.y - ball.r2,
			w: ball.r2 * 2,
			h: ball.r2 * 4
		};
	ctx.beginPath();
	ctx.rect(box14.x, box14.y, box14.w, box14.h);
	ctx.stroke();
			
		var box14Dis1 = box14.x - ball.x - ball.r;
			box14Dis2 = ball.x - ball.r - box14.x - box14.w;
			box14Dis3 = box14.y - ball.y - ball.r;
			box14Dis4 = box14.y + box14.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box14Dis1 && ball.y + ball.r > box14.y && ball.y - ball.r < box14.y + box14.h  - 2 && ball.x < box14.x) {
			ball.xs1 = box14Dis1;
		}		//right side
		if(ball.xs2 >= box14Dis2 && ball.y + ball.r > box14.y && ball.y - ball.r < box14.y + box14.h  - 2 && ball.x > box14.x) {
			ball.xs2 = box14Dis2;
		}		//top side
		if(ball.g >= box14Dis3 && ball.y < box14.y && ball.x + ball.r > box14.x && ball.x - ball.r < box14.x + box14.w) {
			ball.g = box14Dis3;
		}		//bottom side
		if(box14Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box14.x && ball.x - ball.r < box14.x + box14.w && ball.y + ball.r > box14.y + box14.h) {
			ball.g = box14Dis4;
		}
		
		//box15
	var box15 = {
			x: box12.x + ball.r2 * 2,
			y: box14.y + box14.h + ball.r2,
			w: ball.r2 * 2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box15.x, box15.y, box15.w, box15.h);
	ctx.stroke();
			
		var box15Dis1 = box15.x - ball.x - ball.r;
			box15Dis2 = ball.x - ball.r - box15.x - box15.w;
			box15Dis3 = box15.y - ball.y - ball.r;
			box15Dis4 = box15.y + box15.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box15Dis1 && ball.y + ball.r > box15.y && ball.y - ball.r < box15.y + box15.h  - 2 && ball.x < box15.x) {
			ball.xs1 = box15Dis1;
		}		//right side
		if(ball.xs2 >= box15Dis2 && ball.y + ball.r > box15.y && ball.y - ball.r < box15.y + box15.h  - 2 && ball.x > box15.x) {
			ball.xs2 = box15Dis2;
		}		//top side
		if(ball.g >= box15Dis3 && ball.y < box15.y && ball.x + ball.r > box15.x && ball.x - ball.r < box15.x + box15.w) {
			ball.g = box15Dis3;
		}		//bottom side
		if(box15Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box15.x && ball.x - ball.r < box15.x + box15.w && ball.y + ball.r > box15.y + box15.h) {
			ball.g = box15Dis4;
		}
		
		//box16
	var box16 = {
			x: (screen.x + canvas.width) + 325,
			y: (screen.y) + 25,
			w: ball.r2 * 2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box16.x, box16.y, box16.w, box16.h);
	ctx.stroke();
			
		var box16Dis1 = box16.x - ball.x - ball.r;
			box16Dis2 = ball.x - ball.r - box16.x - box16.w;
			box16Dis3 = box16.y - ball.y - ball.r;
			box16Dis4 = box16.y + box16.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box16Dis1 && ball.y + ball.r > box16.y && ball.y - ball.r < box16.y + box16.h  - 2 && ball.x < box16.x) {
			ball.xs1 = box16Dis1;
		}		//right side
		if(ball.xs2 >= box16Dis2 && ball.y + ball.r > box16.y && ball.y - ball.r < box16.y + box16.h  - 2 && ball.x > box16.x) {
			ball.xs2 = box16Dis2;
		}		//top side
		if(ball.g >= box16Dis3 && ball.y < box16.y && ball.x + ball.r > box16.x && ball.x - ball.r < box16.x + box16.w) {
			ball.g = box16Dis3;
		}		//bottom side
		if(box16Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box16.x && ball.x - ball.r < box16.x + box16.w && ball.y + ball.r > box16.y + box16.h) {
			ball.g = box16Dis4;
		}
		
		//box17
	var box17 = {
			x: box16.x + ball.r2 * 5,
			y: box16.y + ball.r2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box17.x, box17.y, box17.w, box17.h);
	ctx.stroke();
			
		var box17Dis1 = box17.x - ball.x - ball.r;
			box17Dis2 = ball.x - ball.r - box17.x - box17.w;
			box17Dis3 = box17.y - ball.y - ball.r;
			box17Dis4 = box17.y + box17.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box17Dis1 && ball.y + ball.r > box17.y && ball.y - ball.r < box17.y + box17.h  - 2 && ball.x < box17.x) {
			ball.xs1 = box17Dis1;
		}		//right side
		if(ball.xs2 >= box17Dis2 && ball.y + ball.r > box17.y && ball.y - ball.r < box17.y + box17.h  - 2 && ball.x > box17.x) {
			ball.xs2 = box17Dis2;
		}		//top side
		if(ball.g >= box17Dis3 && ball.y < box17.y && ball.x + ball.r > box17.x && ball.x - ball.r < box17.x + box17.w) {
			ball.g = box17Dis3;
		}		//bottom side
		if(box17Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box17.x && ball.x - ball.r < box17.x + box17.w && ball.y + ball.r > box17.y + box17.h) {
			ball.g = box17Dis4;
		}
		
		//box18
	var box18 = {
			x: box17.x + ball.r2 * 5,
			y: box17.y + ball.r2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box18.x, box18.y, box18.w, box18.h);
	ctx.stroke();
			
		var box18Dis1 = box18.x - ball.x - ball.r;
			box18Dis2 = ball.x - ball.r - box18.x - box18.w;
			box18Dis3 = box18.y - ball.y - ball.r;
			box18Dis4 = box18.y + box18.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box18Dis1 && ball.y + ball.r > box18.y && ball.y - ball.r < box18.y + box18.h  - 2 && ball.x < box18.x) {
			ball.xs1 = box18Dis1;
		}		//right side
		if(ball.xs2 >= box18Dis2 && ball.y + ball.r > box18.y && ball.y - ball.r < box18.y + box18.h  - 2 && ball.x > box18.x) {
			ball.xs2 = box18Dis2;
		}		//top side
		if(ball.g >= box18Dis3 && ball.y < box18.y && ball.x + ball.r > box18.x && ball.x - ball.r < box18.x + box18.w) {
			ball.g = box18Dis3;
		}		//bottom side
		if(box18Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box18.x && ball.x - ball.r < box18.x + box18.w && ball.y + ball.r > box18.y + box18.h) {
			ball.g = box18Dis4;
		}
		
		//box19
	var box19 = {
			x: (screen.x + canvas.width) + canvas.width - ball.r2 * 5,
			y: (screen.y) + canvas.height - ball.r2 * 3,
			w: ball.r2 * 3,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box19.x, box19.y, box19.w, box19.h);
	ctx.stroke();
			
		var box19Dis1 = box19.x - ball.x - ball.r;
			box19Dis2 = ball.x - ball.r - box19.x - box19.w;
			box19Dis3 = box19.y - ball.y - ball.r;
			box19Dis4 = box19.y + box19.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box19Dis1 && ball.y + ball.r > box19.y && ball.y - ball.r < box19.y + box19.h  - 2 && ball.x < box19.x) {
			ball.xs1 = box19Dis1;
		}		//right side
		if(ball.xs2 >= box19Dis2 && ball.y + ball.r > box19.y && ball.y - ball.r < box19.y + box19.h  - 2 && ball.x > box19.x) {
			ball.xs2 = box19Dis2;
		}		//top side
		if(ball.g >= box19Dis3 && ball.y < box19.y && ball.x + ball.r > box19.x && ball.x - ball.r < box19.x + box19.w) {
			ball.g = box19Dis3;
		}		//bottom side
		if(box19Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box19.x && ball.x - ball.r < box19.x + box19.w && ball.y + ball.r > box19.y + box19.h) {
			ball.g = box19Dis4;
		}
		
		//box20
	var box20 = {
			x: (screen.x + canvas.width) + canvas.width - ball.r2 * 13,
			y: (screen.y) + 150,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box20.x, box20.y, box20.w, box20.h);
	ctx.stroke();
			
		var box20Dis1 = box20.x - ball.x - ball.r;
			box20Dis2 = ball.x - ball.r - box20.x - box20.w;
			box20Dis3 = box20.y - ball.y - ball.r;
			box20Dis4 = box20.y + box20.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box20Dis1 && ball.y + ball.r > box20.y && ball.y - ball.r < box20.y + box20.h  - 2 && ball.x < box20.x) {
			ball.xs1 = box20Dis1;
		}		//right side
		if(ball.xs2 >= box20Dis2 && ball.y + ball.r > box20.y && ball.y - ball.r < box20.y + box20.h  - 2 && ball.x > box20.x) {
			ball.xs2 = box20Dis2;
		}		//top side
		if(ball.g >= box20Dis3 && ball.y < box20.y && ball.x + ball.r > box20.x && ball.x - ball.r < box20.x + box20.w) {
			ball.g = box20Dis3;
		}		//bottom side
		if(box20Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box20.x && ball.x - ball.r < box20.x + box20.w && ball.y + ball.r > box20.y + box20.h) {
			ball.g = box20Dis4;
		}
		
		//box21
	var box21 = {
			x: (screen.x + canvas.width) + canvas.width - ball.r2 * 9,
			y: (screen.y) + canvas.height - ball.r2 * 4,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(box21.x, box21.y, box21.w, box21.h);
	ctx.stroke();
			
		var box21Dis1 = box21.x - ball.x - ball.r;
			box21Dis2 = ball.x - ball.r - box21.x - box21.w;
			box21Dis3 = box21.y - ball.y - ball.r;
			box21Dis4 = box21.y + box21.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box21Dis1 && ball.y + ball.r > box21.y && ball.y - ball.r < box21.y + box21.h  - 2 && ball.x < box21.x) {
			ball.xs1 = box21Dis1;
		}		//right side
		if(ball.xs2 >= box21Dis2 && ball.y + ball.r > box21.y && ball.y - ball.r < box21.y + box21.h  - 2 && ball.x > box21.x) {
			ball.xs2 = box21Dis2;
		}		//top side
		if(ball.g >= box21Dis3 && ball.y < box21.y && ball.x + ball.r > box21.x && ball.x - ball.r < box21.x + box21.w) {
			ball.g = box21Dis3;
		}		//bottom side
		if(box21Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box21.x && ball.x - ball.r < box21.x + box21.w && ball.y + ball.r > box21.y + box21.h) {
			ball.g = box21Dis4;
		}
		
		//box22
	var box22 = {
			x: box20.x - ball.r2 * 2,
			y: box20.y + ball.r2,
			w: ball.r2,
			h: ball.r2 * 7
		};
	ctx.beginPath();
	ctx.rect(box22.x, box22.y, box22.w, box22.h);
	ctx.stroke();
			
		var box22Dis1 = box22.x - ball.x - ball.r;
			box22Dis2 = ball.x - ball.r - box22.x - box22.w;
			box22Dis3 = box22.y - ball.y - ball.r;
			box22Dis4 = box22.y + box22.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box22Dis1 && ball.y + ball.r > box22.y && ball.y - ball.r < box22.y + box22.h  - 2 && ball.x < box22.x) {
			ball.xs1 = box22Dis1;
		}		//right side
		if(ball.xs2 >= box22Dis2 && ball.y + ball.r > box22.y && ball.y - ball.r < box22.y + box22.h  - 2 && ball.x > box22.x) {
			ball.xs2 = box22Dis2;
		}		//top side
		if(ball.g >= box22Dis3 && ball.y < box22.y && ball.x + ball.r > box22.x && ball.x - ball.r < box22.x + box22.w) {
			ball.g = box22Dis3;
		}		//bottom side
		if(box22Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box22.x && ball.x - ball.r < box22.x + box22.w && ball.y + ball.r > box22.y + box22.h) {
			ball.g = box22Dis4;
		}
		
		//box23
	var box23 = {
			x: box22.x - ball.r2 * 2,
			y: box22.y - ball.r2 * 2,
			w: ball.r2,
			h: ball.r2 * 7
		};
	ctx.beginPath();
	ctx.rect(box23.x, box23.y, box23.w, box23.h);
	ctx.stroke();
			
		var box23Dis1 = box23.x - ball.x - ball.r;
			box23Dis2 = ball.x - ball.r - box23.x - box23.w;
			box23Dis3 = box23.y - ball.y - ball.r;
			box23Dis4 = box23.y + box23.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box23Dis1 && ball.y + ball.r > box23.y && ball.y - ball.r < box23.y + box23.h  - 2 && ball.x < box23.x) {
			ball.xs1 = box23Dis1;
		}		//right side
		if(ball.xs2 >= box23Dis2 && ball.y + ball.r > box23.y && ball.y - ball.r < box23.y + box23.h  - 2 && ball.x > box23.x) {
			ball.xs2 = box23Dis2;
		}		//top side
		if(ball.g >= box23Dis3 && ball.y < box23.y && ball.x + ball.r > box23.x && ball.x - ball.r < box23.x + box23.w) {
			ball.g = box23Dis3;
		}		//bottom side
		if(box23Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box23.x && ball.x - ball.r < box23.x + box23.w && ball.y + ball.r > box23.y + box23.h) {
			ball.g = box23Dis4;
		}
		
		//box24
	var box24 = {
			x: box23.x - ball.r2 * 4,
			y: box23.y + box23.h - ball.r2 * 2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box24.x, box24.y, box24.w, box24.h);
	ctx.stroke();
			
		var box24Dis1 = box24.x - ball.x - ball.r;
			box24Dis2 = ball.x - ball.r - box24.x - box24.w;
			box24Dis3 = box24.y - ball.y - ball.r;
			box24Dis4 = box24.y + box24.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box24Dis1 && ball.y + ball.r > box24.y && ball.y - ball.r < box24.y + box24.h  - 2 && ball.x < box24.x) {
			ball.xs1 = box24Dis1;
		}		//right side
		if(ball.xs2 >= box24Dis2 && ball.y + ball.r > box24.y && ball.y - ball.r < box24.y + box24.h  - 2 && ball.x > box24.x) {
			ball.xs2 = box24Dis2;
		}		//top side
		if(ball.g >= box24Dis3 && ball.y < box24.y && ball.x + ball.r > box24.x && ball.x - ball.r < box24.x + box24.w) {
			ball.g = box24Dis3;
		}		//bottom side
		if(box24Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box24.x && ball.x - ball.r < box24.x + box24.w && ball.y + ball.r > box24.y + box24.h) {
			ball.g = box24Dis4;
		}
		
		//box25
	var box25 = {
			x: box24.x - ball.r2 * 4,
			y: box24.y - ball.r2 * 3,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box25.x, box25.y, box25.w, box25.h);
	ctx.stroke();
			
		var box25Dis1 = box25.x - ball.x - ball.r;
			box25Dis2 = ball.x - ball.r - box25.x - box25.w;
			box25Dis3 = box25.y - ball.y - ball.r;
			box25Dis4 = box25.y + box25.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box25Dis1 && ball.y + ball.r > box25.y && ball.y - ball.r < box25.y + box25.h  - 2 && ball.x < box25.x) {
			ball.xs1 = box25Dis1;
		}		//right side
		if(ball.xs2 >= box25Dis2 && ball.y + ball.r > box25.y && ball.y - ball.r < box25.y + box25.h  - 2 && ball.x > box25.x) {
			ball.xs2 = box25Dis2;
		}		//top side
		if(ball.g >= box25Dis3 && ball.y < box25.y && ball.x + ball.r > box25.x && ball.x - ball.r < box25.x + box25.w) {
			ball.g = box25Dis3;
		}		//bottom side
		if(box25Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box25.x && ball.x - ball.r < box25.x + box25.w && ball.y + ball.r > box25.y + box25.h) {
			ball.g = box25Dis4;
		}
		
		//box26
	var box26 = {
			x: box25.x - ball.r2,
			y: box25.y + ball.r2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box26.x, box26.y, box26.w, box26.h);
	ctx.stroke();
			
		var box26Dis1 = box26.x - ball.x - ball.r;
			box26Dis2 = ball.x - ball.r - box26.x - box26.w;
			box26Dis3 = box26.y - ball.y - ball.r;
			box26Dis4 = box26.y + box26.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box26Dis1 && ball.y + ball.r > box26.y && ball.y - ball.r < box26.y + box26.h  - 2 && ball.x < box26.x) {
			ball.xs1 = box26Dis1;
		}		//right side
		if(ball.xs2 >= box26Dis2 && ball.y + ball.r > box26.y && ball.y - ball.r < box26.y + box26.h  - 2 && ball.x > box26.x) {
			ball.xs2 = box26Dis2;
		}		//top side
		if(ball.g >= box26Dis3 && ball.y < box26.y && ball.x + ball.r > box26.x && ball.x - ball.r < box26.x + box26.w) {
			ball.g = box26Dis3;
		}		//bottom side
		if(box26Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box26.x && ball.x - ball.r < box26.x + box26.w && ball.y + ball.r > box26.y + box26.h) {
			ball.g = box26Dis4;
		}
		
		//box27
	var box27 = {
			x: box26.x - ball.r2 * 7,
			y: box26.y + ball.r2 * 2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(box27.x, box27.y, box27.w, box27.h);
	ctx.stroke();
			
		var box27Dis1 = box27.x - ball.x - ball.r;
			box27Dis2 = ball.x - ball.r - box27.x - box27.w;
			box27Dis3 = box27.y - ball.y - ball.r;
			box27Dis4 = box27.y + box27.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= box27Dis1 && ball.y + ball.r > box27.y && ball.y - ball.r < box27.y + box27.h  - 2 && ball.x < box27.x) {
			ball.xs1 = box27Dis1;
		}		//right side
		if(ball.xs2 >= box27Dis2 && ball.y + ball.r > box27.y && ball.y - ball.r < box27.y + box27.h  - 2 && ball.x > box27.x) {
			ball.xs2 = box27Dis2;
		}		//top side
		if(ball.g >= box27Dis3 && ball.y < box27.y && ball.x + ball.r > box27.x && ball.x - ball.r < box27.x + box27.w) {
			ball.g = box27Dis3;
		}		//bottom side
		if(box27Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > box27.x && ball.x - ball.r < box27.x + box27.w && ball.y + ball.r > box27.y + box27.h) {
			ball.g = box27Dis4;
		}
		
		
		//shrinkBlocks
	//shrinkBlock1 
	var shrinkBlock1 = {
			x: box3.x - ball.r2 * 4,
			x2: box3.x - ball.r2 * 4 + shrinkBlock1Size,
			y: screen.y + 45,
			y2: screen.y + 45 + shrinkBlock1Size,
			w: ball.r2,
			w2: ball.r2 - shrinkBlock1Size * 2,
			h: ball.r2,
			h2: ball.r2 - shrinkBlock1Size * 2
		};
		if(shrinkBlock1Size < ball.r2 / 2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock1.x2, shrinkBlock1.y2, shrinkBlock1.w2, shrinkBlock1.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock1.x2, shrinkBlock1.y2 + shrinkBlock1.h2 / 2);
	ctx.lineTo(shrinkBlock1.x2 + shrinkBlock1.w2, shrinkBlock1.y2 + shrinkBlock1.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock1.x2 + shrinkBlock1.w2 / 2, shrinkBlock1.y2);
	ctx.lineTo(shrinkBlock1.x2 + shrinkBlock1.w2 / 2, shrinkBlock1.y2 + shrinkBlock1.h2);
	ctx.stroke();
			
		var shrinkBlock1Dis1 = shrinkBlock1.x - ball.x - ball.r;
			shrinkBlock1Dis2 = ball.x - ball.r - shrinkBlock1.x - shrinkBlock1.w;
			shrinkBlock1Dis3 = shrinkBlock1.y - ball.y - ball.r;
			shrinkBlock1Dis4 = shrinkBlock1.y + shrinkBlock1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock1Dis1 && ball.y + ball.r > shrinkBlock1.y && ball.y - ball.r < shrinkBlock1.y + shrinkBlock1.h  - 2 && ball.x < shrinkBlock1.x) {
			ball.xs1 = shrinkBlock1Dis1;
			shrinkBlock1Size += 0.1;
		}		//right side
		if(ball.xs2 >= shrinkBlock1Dis2 && ball.y + ball.r > shrinkBlock1.y && ball.y - ball.r < shrinkBlock1.y + shrinkBlock1.h  - 2 && ball.x > shrinkBlock1.x) {
			ball.xs2 = shrinkBlock1Dis2;
			shrinkBlock1Size += 0.1;
		}		//top side
		if(ball.g >= shrinkBlock1Dis3 && ball.y < shrinkBlock1.y && ball.x + ball.r > shrinkBlock1.x && ball.x - ball.r < shrinkBlock1.x + shrinkBlock1.w) {
			ball.g = shrinkBlock1Dis3;
			shrinkBlock1Size += 0.1;
		}		//bottom side
		if(shrinkBlock1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock1.x && ball.x - ball.r < shrinkBlock1.x + shrinkBlock1.w && ball.y + ball.r > shrinkBlock1.y + shrinkBlock1.h) {
			ball.g = shrinkBlock1Dis4;
			shrinkBlock1Size += 0.1;
		}
	
	}
	
	//shrinkBlock2 
	var shrinkBlock2 = {
			x: box3.x - ball.r2 - ball.r2 / 2,
			x2: box3.x - ball.r2 - ball.r2 / 2 + shrinkBlock2Size,
			y: screen.y + 10,
			y2: screen.y + 10 + shrinkBlock2Size,
			w: ball.r2,
			w2: ball.r2 - shrinkBlock2Size * 2,
			h: ball.r2,
			h2: ball.r2 - shrinkBlock2Size * 2
		};
		if(shrinkBlock2Size < ball.r2 / 2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock2.x2, shrinkBlock2.y2, shrinkBlock2.w2, shrinkBlock2.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock2.x2, shrinkBlock2.y2 + shrinkBlock2.h2 / 2);
	ctx.lineTo(shrinkBlock2.x2 + shrinkBlock2.w2, shrinkBlock2.y2 + shrinkBlock2.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock2.x2 + shrinkBlock2.w2 / 2, shrinkBlock2.y2);
	ctx.lineTo(shrinkBlock2.x2 + shrinkBlock2.w2 / 2, shrinkBlock2.y2 + shrinkBlock2.h2);
	ctx.stroke();
			
		var shrinkBlock2Dis1 = shrinkBlock2.x - ball.x - ball.r;
			shrinkBlock2Dis2 = ball.x - ball.r - shrinkBlock2.x - shrinkBlock2.w;
			shrinkBlock2Dis3 = shrinkBlock2.y - ball.y - ball.r;
			shrinkBlock2Dis4 = shrinkBlock2.y + shrinkBlock2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock2Dis1 && ball.y + ball.r > shrinkBlock2.y && ball.y - ball.r < shrinkBlock2.y + shrinkBlock2.h  - 2 && ball.x < shrinkBlock2.x) {
			ball.xs1 = shrinkBlock2Dis1;
			shrinkBlock2Size += 0.1;
		}		//right side
		if(ball.xs2 >= shrinkBlock2Dis2 && ball.y + ball.r > shrinkBlock2.y && ball.y - ball.r < shrinkBlock2.y + shrinkBlock2.h  - 2 && ball.x > shrinkBlock2.x) {
			ball.xs2 = shrinkBlock2Dis2;
			shrinkBlock2Size += 0.1;
		}		//top side
		if(ball.g >= shrinkBlock2Dis3 && ball.y < shrinkBlock2.y && ball.x + ball.r > shrinkBlock2.x && ball.x - ball.r < shrinkBlock2.x + shrinkBlock2.w) {
			ball.g = shrinkBlock2Dis3;
			shrinkBlock2Size += 0.1;
		}		//bottom side
		if(shrinkBlock2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock2.x && ball.x - ball.r < shrinkBlock2.x + shrinkBlock2.w && ball.y + ball.r > shrinkBlock2.y + shrinkBlock2.h) {
			ball.g = shrinkBlock2Dis4;
			shrinkBlock2Size += 0.1;
		}
	
	}
	
	//shrinkBlock3 
	var shrinkBlock3 = {
			x: box2.x + ball.r2 * 5,
			x2: box2.x + ball.r2 * 5 + shrinkBlock3Size,
			y: box3.y,
			y2: box3.y + shrinkBlock3Size,
			w: ball.r2 * 2,
			w2: ball.r2 * 2 - shrinkBlock3Size * 2,
			h: ball.r2 * 2,
			h2: ball.r2 * 2 - shrinkBlock3Size * 2
		};
		if(shrinkBlock3Size < ball.r2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock3.x2, shrinkBlock3.y2, shrinkBlock3.w2, shrinkBlock3.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock3.x2, shrinkBlock3.y2 + shrinkBlock3.h2 / 2);
	ctx.lineTo(shrinkBlock3.x2 + shrinkBlock3.w2, shrinkBlock3.y2 + shrinkBlock3.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock3.x2 + shrinkBlock3.w2 / 2, shrinkBlock3.y2);
	ctx.lineTo(shrinkBlock3.x2 + shrinkBlock3.w2 / 2, shrinkBlock3.y2 + shrinkBlock3.h2);
	ctx.stroke();
			
		var shrinkBlock3Dis1 = shrinkBlock3.x - ball.x - ball.r;
			shrinkBlock3Dis2 = ball.x - ball.r - shrinkBlock3.x - shrinkBlock3.w;
			shrinkBlock3Dis3 = shrinkBlock3.y - ball.y - ball.r;
			shrinkBlock3Dis4 = shrinkBlock3.y + shrinkBlock3.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock3Dis1 && ball.y + ball.r > shrinkBlock3.y && ball.y - ball.r < shrinkBlock3.y + shrinkBlock3.h  - 2 && ball.x < shrinkBlock3.x) {
			ball.xs1 = shrinkBlock3Dis1;
			shrinkBlock3Size += 0.25;
		}		//right side
		if(ball.xs2 >= shrinkBlock3Dis2 && ball.y + ball.r > shrinkBlock3.y && ball.y - ball.r < shrinkBlock3.y + shrinkBlock3.h  - 2 && ball.x > shrinkBlock3.x) {
			ball.xs2 = shrinkBlock3Dis2;
			shrinkBlock3Size += 0.25;
		}		//top side
		if(ball.g >= shrinkBlock3Dis3 && ball.y < shrinkBlock3.y && ball.x + ball.r > shrinkBlock3.x && ball.x - ball.r < shrinkBlock3.x + shrinkBlock3.w) {
			ball.g = shrinkBlock3Dis3;
			shrinkBlock3Size += 0.25;
		}		//bottom side
		if(shrinkBlock3Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock3.x && ball.x - ball.r < shrinkBlock3.x + shrinkBlock3.w && ball.y + ball.r > shrinkBlock3.y + shrinkBlock3.h) {
			ball.g = shrinkBlock3Dis4;
			shrinkBlock3Size += 0.25;
		}
	
	}
	
	//shrinkBlock4 
	var shrinkBlock4 = {
			x: (screen.x + canvas.width + 250),
			x2: (screen.x + canvas.width + 250) + shrinkBlock4Size,
			y: (screen.y + 25),
			y2: (screen.y + 25) + shrinkBlock4Size,
			w: ball.r2 * 2,
			w2: ball.r2 * 2 - shrinkBlock4Size * 2,
			h: ball.r2 * 2,
			h2: ball.r2 * 2 - shrinkBlock4Size * 2
		};
		if(shrinkBlock4Size < ball.r2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock4.x2, shrinkBlock4.y2, shrinkBlock4.w2, shrinkBlock4.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock4.x2, shrinkBlock4.y2 + shrinkBlock4.h2 / 2);
	ctx.lineTo(shrinkBlock4.x2 + shrinkBlock4.w2, shrinkBlock4.y2 + shrinkBlock4.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock4.x2 + shrinkBlock4.w2 / 2, shrinkBlock4.y2);
	ctx.lineTo(shrinkBlock4.x2 + shrinkBlock4.w2 / 2, shrinkBlock4.y2 + shrinkBlock4.h2);
	ctx.stroke();
			
		var shrinkBlock4Dis1 = shrinkBlock4.x - ball.x - ball.r;
			shrinkBlock4Dis2 = ball.x - ball.r - shrinkBlock4.x - shrinkBlock4.w;
			shrinkBlock4Dis3 = shrinkBlock4.y - ball.y - ball.r;
			shrinkBlock4Dis4 = shrinkBlock4.y + shrinkBlock4.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock4Dis1 && ball.y + ball.r > shrinkBlock4.y && ball.y - ball.r < shrinkBlock4.y + shrinkBlock4.h  - 2 && ball.x < shrinkBlock4.x) {
			ball.xs1 = shrinkBlock4Dis1;
			shrinkBlock4Size += 0.25;
		}		//right side
		if(ball.xs2 >= shrinkBlock4Dis2 && ball.y + ball.r > shrinkBlock4.y && ball.y - ball.r < shrinkBlock4.y + shrinkBlock4.h  - 2 && ball.x > shrinkBlock4.x) {
			ball.xs2 = shrinkBlock4Dis2;
			shrinkBlock4Size += 0.25;
		}		//top side
		if(ball.g >= shrinkBlock4Dis3 && ball.y < shrinkBlock4.y && ball.x + ball.r > shrinkBlock4.x && ball.x - ball.r < shrinkBlock4.x + shrinkBlock4.w) {
			ball.g = shrinkBlock4Dis3;
			shrinkBlock4Size += 0.25;
		}		//bottom side
		if(shrinkBlock4Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock4.x && ball.x - ball.r < shrinkBlock4.x + shrinkBlock4.w && ball.y + ball.r > shrinkBlock4.y + shrinkBlock4.h) {
			ball.g = shrinkBlock4Dis4;
			shrinkBlock4Size += 0.25;
		}
	
	}
	
	//shrinkBlock5 
	var shrinkBlock5 = {
			x: shrinkBlock4.x + ball.r2 * 3,
			x2: shrinkBlock4.x + ball.r2 * 3 + shrinkBlock5Size,
			y: shrinkBlock4.y + ball.r2 * 3,
			y2: shrinkBlock4.y + ball.r2 * 3 + shrinkBlock5Size,
			w: ball.r2 * 2,
			w2: ball.r2 * 2 - shrinkBlock5Size * 2,
			h: ball.r2 * 2,
			h2: ball.r2 * 2 - shrinkBlock5Size * 2
		};
		if(shrinkBlock5Size < ball.r2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock5.x2, shrinkBlock5.y2, shrinkBlock5.w2, shrinkBlock5.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock5.x2, shrinkBlock5.y2 + shrinkBlock5.h2 / 2);
	ctx.lineTo(shrinkBlock5.x2 + shrinkBlock5.w2, shrinkBlock5.y2 + shrinkBlock5.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock5.x2 + shrinkBlock5.w2 / 2, shrinkBlock5.y2);
	ctx.lineTo(shrinkBlock5.x2 + shrinkBlock5.w2 / 2, shrinkBlock5.y2 + shrinkBlock5.h2);
	ctx.stroke();
			
		var shrinkBlock5Dis1 = shrinkBlock5.x - ball.x - ball.r;
			shrinkBlock5Dis2 = ball.x - ball.r - shrinkBlock5.x - shrinkBlock5.w;
			shrinkBlock5Dis3 = shrinkBlock5.y - ball.y - ball.r;
			shrinkBlock5Dis4 = shrinkBlock5.y + shrinkBlock5.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock5Dis1 && ball.y + ball.r > shrinkBlock5.y && ball.y - ball.r < shrinkBlock5.y + shrinkBlock5.h  - 2 && ball.x < shrinkBlock5.x) {
			ball.xs1 = shrinkBlock5Dis1;
			shrinkBlock5Size += 0.25;
		}		//right side
		if(ball.xs2 >= shrinkBlock5Dis2 && ball.y + ball.r > shrinkBlock5.y && ball.y - ball.r < shrinkBlock5.y + shrinkBlock5.h  - 2 && ball.x > shrinkBlock5.x) {
			ball.xs2 = shrinkBlock5Dis2;
			shrinkBlock5Size += 0.25;
		}		//top side
		if(ball.g >= shrinkBlock5Dis3 && ball.y < shrinkBlock5.y && ball.x + ball.r > shrinkBlock5.x && ball.x - ball.r < shrinkBlock5.x + shrinkBlock5.w) {
			ball.g = shrinkBlock5Dis3;
			shrinkBlock5Size += 0.25;
		}		//bottom side
		if(shrinkBlock5Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock5.x && ball.x - ball.r < shrinkBlock5.x + shrinkBlock5.w && ball.y + ball.r > shrinkBlock5.y + shrinkBlock5.h) {
			ball.g = shrinkBlock5Dis4;
			shrinkBlock5Size += 0.25;
		}
	
	}
	
	//shrinkBlock6 
	var shrinkBlock6 = {
			x: (screen.x + canvas.width) + canvas.width - ball.r2 * 9,
			x2: (screen.x + canvas.width) + canvas.width - ball.r2 * 9 + shrinkBlock6Size,
			y: (screen.y) + 150,
			y2:(screen.y) + 150 + shrinkBlock6Size,
			w: ball.r2 * 2,
			w2: ball.r2 * 2 - shrinkBlock6Size * 2,
			h: ball.r2 * 2,
			h2: ball.r2 * 2 - shrinkBlock6Size * 2
		};
		if(shrinkBlock6Size < ball.r2) {
	ctx.beginPath();
	ctx.rect(shrinkBlock6.x2, shrinkBlock6.y2, shrinkBlock6.w2, shrinkBlock6.h2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock6.x2, shrinkBlock6.y2 + shrinkBlock6.h2 / 2);
	ctx.lineTo(shrinkBlock6.x2 + shrinkBlock6.w2, shrinkBlock6.y2 + shrinkBlock6.h2 / 2);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(shrinkBlock6.x2 + shrinkBlock6.w2 / 2, shrinkBlock6.y2);
	ctx.lineTo(shrinkBlock6.x2 + shrinkBlock6.w2 / 2, shrinkBlock6.y2 + shrinkBlock6.h2);
	ctx.stroke();
			
		var shrinkBlock6Dis1 = shrinkBlock6.x - ball.x - ball.r;
			shrinkBlock6Dis2 = ball.x - ball.r - shrinkBlock6.x - shrinkBlock6.w;
			shrinkBlock6Dis3 = shrinkBlock6.y - ball.y - ball.r;
			shrinkBlock6Dis4 = shrinkBlock6.y + shrinkBlock6.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= shrinkBlock6Dis1 && ball.y + ball.r > shrinkBlock6.y && ball.y - ball.r < shrinkBlock6.y + shrinkBlock6.h  - 2 && ball.x < shrinkBlock6.x) {
			ball.xs1 = shrinkBlock6Dis1;
			shrinkBlock6Size += 0.25;
		}		//right side
		if(ball.xs2 >= shrinkBlock6Dis2 && ball.y + ball.r > shrinkBlock6.y && ball.y - ball.r < shrinkBlock6.y + shrinkBlock6.h  - 2 && ball.x > shrinkBlock6.x) {
			ball.xs2 = shrinkBlock6Dis2;
			shrinkBlock6Size += 0.25;
		}		//top side
		if(ball.g >= shrinkBlock6Dis3 && ball.y < shrinkBlock6.y && ball.x + ball.r > shrinkBlock6.x && ball.x - ball.r < shrinkBlock6.x + shrinkBlock6.w) {
			ball.g = shrinkBlock6Dis3;
			shrinkBlock6Size += 0.25;
		}		//bottom side
		if(shrinkBlock6Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > shrinkBlock6.x && ball.x - ball.r < shrinkBlock6.x + shrinkBlock6.w && ball.y + ball.r > shrinkBlock6.y + shrinkBlock6.h) {
			ball.g = shrinkBlock6Dis4;
			shrinkBlock6Size += 0.25;
		}
	
	}
	
	
		//spikes
	//spike1
	var spike1 = {
			x: screen.x,
			x2: screen.x + ball.r2 / 2,
			y: screen.y + canvas.height - ball.r2,
			w: screen.x + canvas.width * 3,
			w2: screen.x + canvas.width * 3 - ball.r2,
			h: ball.r2
		};
	
	var spike1array = [];
	var spike1move;
	var spike1Size = ball.r2;
	
	for(spike1move = 0; spike1move < spike1.w / ball.r2; spike1move++) {
		spike1array.push({
			spikeY: spike1.y,
			spikeX: spike1.x + spike1move * spike1Size	
		});
	}
	var spike1i, spike1disp
	for(spike1i = 0; spike1i < spike1.w / ball.r2; spike1i++) {
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
		var spike1Dis1 = spike1.x2 - ball.x - ball.r;
			spike1Dis2 = ball.x - ball.r - spike1.x - spike1.w2;
			spike1Dis3 = spike1.y - ball.y - ball.r2;
			spike1Dis4 = ball.y - ball.r - spike1.y - spike1.h;
		
		if(ball.xs1 >= spike1Dis1 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h - 2 && ball.x < spike1.x2) {
			start = true;
		}
		if(ball.xs2 >= spike1Dis2 && ball.y + ball.r > spike1.y && ball.y - ball.r < spike1.y + spike1.h - 2 && ball.x > spike1.x2) {
			start = true;
		}
		if(ball.g >= spike1Dis3 && ball.y < spike1.y && ball.x + ball.r > spike1.x2 && ball.x - ball.r < spike1.x2 + spike1.w2) {
			start = true;
		}
		if(spike1Dis4 <= ball.g && ball.y > spike1.y + spike1.h && ball.g < 0 && ball.x + ball.r > spike1.x2 && ball.x - ball.r < spike1.x2 + spike1.w2) {
			start = true;
		}
		
		//spike2
	var spike2 = {
			x: screen.x,
			x2: screen.x + ball.r2 / 2,
			y: screen.y + ball.r2,
			w: screen.x + canvas.width * 3,
			w2: screen.x + canvas.width * 3 - ball.r2,
			h: -ball.r2,
		};
	
	var spike2array = [];
	var spike2move;
	var spike2Size = ball.r2;
	
	for(spike2move = 0; spike2move < spike2.w / ball.r2; spike2move++) {
		spike2array.push({
			spikeY: spike2.y,
			spikeX: spike2.x + spike2move * spike2Size	
		});
	}
	var spike2i, spike2disp
	for(spike2i = 0; spike2i < spike2.w / ball.r2; spike2i++) {
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
		var spike2Dis1 = spike2.x2 - ball.x - ball.r2;
			spike2Dis2 = ball.x - ball.r2 - spike2.x2 - spike2.w2;
			spike2Dis3 = spike2.y - ball.y - ball.r2;
			spike2Dis4 = spike2.y + spike2.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike2Dis1 && ball.y + ball.r2 > spike2.y && ball.y - ball.r2 < spike2.y + spike2.h2 - 2 && ball.x < spike2.x2) {
			start = true;
		}
		if(ball.xs2 >= spike2Dis2 && ball.y + ball.r2 > spike2.y && ball.y - ball.r2 < spike2.y + spike2.h2 - 2 && ball.x > spike2.x2) {
			start = true;
		}
		if(ball.g >= spike2Dis3 && ball.y < spike2.y && ball.x + ball.r2 > spike2.x2 && ball.x - ball.r2 < spike2.x2 + spike2.w2) {
			start = true;
		}
		if(spike2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike2.x2 && ball.x - ball.r2 < spike2.x2 + spike2.w2 && ball.y + ball.r2 > spike2.y + spike2.h) {
			start = true;
		}
		
		//spike3
	var spike3 = {
			x: box3.x,
			x2: box3.x + ball.r2 / 2,
			y: box3.y - ball.r2,
			w: box3.w,
			w2: box3.w - ball.r2,
			h: ball.r2
		};
	
	var spike3array = [];
	var spike3move;
	var spike3Size = ball.r2;
	
	for(spike3move = 0; spike3move < spike3.w / ball.r2; spike3move++) {
		spike3array.push({
			spikeY: spike3.y,
			spikeX: spike3.x + spike3move * spike3Size	
		});
	}
	var spike3i, spike3disp
	for(spike3i = 0; spike3i < spike3.w / ball.r2; spike3i++) {
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
		var spike3Dis1 = spike3.x2 - ball.x - ball.r;
			spike3Dis2 = ball.x - ball.r - spike3.x - spike3.w2;
			spike3Dis3 = spike3.y - ball.y - ball.r2;
			spike3Dis4 = ball.y - ball.r - spike3.y - spike3.h;
		
		if(ball.xs1 >= spike3Dis1 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h - 2 && ball.x < spike3.x2) {
			start = true;
		}
		if(ball.xs2 >= spike3Dis2 && ball.y + ball.r > spike3.y && ball.y - ball.r < spike3.y + spike3.h - 2 && ball.x > spike3.x2) {
			start = true;
		}
		if(ball.g >= spike3Dis3 && ball.y < spike3.y && ball.x + ball.r > spike3.x2 && ball.x - ball.r < spike3.x2 + spike3.w2) {
			start = true;
		}
		if(spike3Dis4 <= ball.g && ball.y > spike3.y + spike3.h && ball.g < 0 && ball.x + ball.r > spike3.x2 && ball.x - ball.r < spike3.x2 + spike3.w2) {
			start = true;
		}
		
		//spike4
	var spike4 = {
			x: box4.x,
			x2: box4.x + ball.r2 / 2,
			y: box4.y - ball.r2,
			w: box4.w,
			w2: box4.w - ball.r2,
			h: ball.r2
		};
	
	var spike4array = [];
	var spike4move;
	var spike4Size = ball.r2;
	
	for(spike4move = 0; spike4move < spike4.w / ball.r2; spike4move++) {
		spike4array.push({
			spikeY: spike4.y,
			spikeX: spike4.x + spike4move * spike4Size	
		});
	}
	var spike4i, spike4disp
	for(spike4i = 0; spike4i < spike4.w / ball.r2; spike4i++) {
		spike4disp = spike4array[spike4i];
		
		ctx.beginPath();
		ctx.moveTo(spike4disp.spikeX + spike4Size / 2, spike4disp.spikeY);
		ctx.lineTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY + spike4Size);
		ctx.moveTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY + spike4Size);
		ctx.lineTo(spike4disp.spikeX, spike4disp.spikeY + spike4Size);
		ctx.moveTo(spike4disp.spikeX, spike4disp.spikeY + spike4Size);
		ctx.lineTo(spike4disp.spikeX + spike4Size / 2, spike4disp.spikeY);
		ctx.stroke();
	}
		var spike4Dis1 = spike4.x2 - ball.x - ball.r;
			spike4Dis2 = ball.x - ball.r - spike4.x - spike4.w2;
			spike4Dis3 = spike4.y - ball.y - ball.r2;
			spike4Dis4 = ball.y - ball.r - spike4.y - spike4.h;
		
		if(ball.xs1 >= spike4Dis1 && ball.y + ball.r > spike4.y && ball.y - ball.r < spike4.y + spike4.h - 2 && ball.x < spike4.x2) {
			start = true;
		}
		if(ball.xs2 >= spike4Dis2 && ball.y + ball.r > spike4.y && ball.y - ball.r < spike4.y + spike4.h - 2 && ball.x > spike4.x2) {
			start = true;
		}
		if(ball.g >= spike4Dis3 && ball.y < spike4.y && ball.x + ball.r > spike4.x2 && ball.x - ball.r < spike4.x2 + spike4.w2) {
			start = true;
		}
		if(spike4Dis4 <= ball.g && ball.y > spike4.y + spike4.h && ball.g < 0 && ball.x + ball.r > spike4.x2 && ball.x - ball.r < spike4.x2 + spike4.w2) {
			start = true;
		}
		
		//spike5
	var spike5 = {
			x: box3.x,
			x2: box3.x + ball.r2 / 2,
			y: box3.y + box2.h,
			w: box3.w,
			w2: box3.w - ball.r2,
			h: -ball.r2,
		};
	
	var spike5array = [];
	var spike5move;
	var spike5Size = ball.r2;
	
	for(spike5move = 0; spike5move < spike5.w / ball.r2; spike5move++) {
		spike5array.push({
			spikeY: spike5.y,
			spikeX: spike5.x + spike5move * spike5Size	
		});
	}
	var spike5i, spike5disp
	for(spike5i = 0; spike5i < spike5.w / ball.r2; spike5i++) {
		spike5disp = spike5array[spike5i];
		
		ctx.beginPath();
		ctx.moveTo(spike5disp.spikeX + spike5Size / 2, spike5disp.spikeY);
		ctx.lineTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY - spike5Size);
		ctx.moveTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY - spike5Size);
		ctx.lineTo(spike5disp.spikeX, spike5disp.spikeY - spike5Size);
		ctx.moveTo(spike5disp.spikeX, spike5disp.spikeY - spike5Size);
		ctx.lineTo(spike5disp.spikeX + spike5Size / 2, spike5disp.spikeY);
		ctx.stroke();
	}
		var spike5Dis1 = spike5.x2 - ball.x - ball.r2;
			spike5Dis2 = ball.x - ball.r2 - spike5.x2 - spike5.w2;
			spike5Dis3 = spike5.y - ball.y - ball.r2;
			spike5Dis4 = spike5.y + spike5.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike5Dis1 && ball.y + ball.r2 > spike5.y && ball.y - ball.r2 < spike5.y + spike5.h2 - 2 && ball.x < spike5.x2) {
			start = true;
		}
		if(ball.xs2 >= spike5Dis2 && ball.y + ball.r2 > spike5.y && ball.y - ball.r2 < spike5.y + spike5.h2 - 2 && ball.x > spike5.x2) {
			start = true;
		}
		if(ball.g >= spike5Dis3 && ball.y < spike5.y && ball.x + ball.r2 > spike5.x2 && ball.x - ball.r2 < spike5.x2 + spike5.w2) {
			start = true;
		}
		if(spike5Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike5.x2 && ball.x - ball.r2 < spike5.x2 + spike5.w2 && ball.y + ball.r2 > spike5.y + spike5.h) {
			start = true;
		}
		
		//spike6
	var spike6 = {
			x: box9.x,
			x2: box9.x + ball.r2 / 2,
			y: box9.y + box9.h + ball.r2,
			w: box9.w,
			w2: box9.w - ball.r2,
			h: -ball.r2,
		};
	
	var spike6array = [];
	var spike6move;
	var spike6Size = ball.r2;
	
	for(spike6move = 0; spike6move < spike6.w / ball.r2; spike6move++) {
		spike6array.push({
			spikeY: spike6.y,
			spikeX: spike6.x + spike6move * spike6Size	
		});
	}
	var spike6i, spike6disp
	for(spike6i = 0; spike6i < spike6.w / ball.r2; spike6i++) {
		spike6disp = spike6array[spike6i];
		
		ctx.beginPath();
		ctx.moveTo(spike6disp.spikeX + spike6Size / 2, spike6disp.spikeY);
		ctx.lineTo(spike6disp.spikeX + spike6Size, spike6disp.spikeY - spike6Size);
		ctx.moveTo(spike6disp.spikeX + spike6Size, spike6disp.spikeY - spike6Size);
		ctx.lineTo(spike6disp.spikeX, spike6disp.spikeY - spike6Size);
		ctx.moveTo(spike6disp.spikeX, spike6disp.spikeY - spike6Size);
		ctx.lineTo(spike6disp.spikeX + spike6Size / 2, spike6disp.spikeY);
		ctx.stroke();
	}
		var spike6Dis1 = spike6.x2 - ball.x - ball.r2;
			spike6Dis2 = ball.x - ball.r2 - spike6.x2 - spike6.w2;
			spike6Dis3 = spike6.y - ball.y - ball.r2;
			spike6Dis4 = spike6.y + spike6.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike6Dis1 && ball.y + ball.r2 > spike6.y && ball.y - ball.r2 < spike6.y + spike6.h2 - 2 && ball.x < spike6.x2) {
			start = true;
		}
		if(ball.xs2 >= spike6Dis2 && ball.y + ball.r2 > spike6.y && ball.y - ball.r2 < spike6.y + spike6.h2 - 2 && ball.x > spike6.x2) {
			start = true;
		}
		if(ball.g >= spike6Dis3 && ball.y < spike6.y && ball.x + ball.r2 > spike6.x2 && ball.x - ball.r2 < spike6.x2 + spike6.w2) {
			start = true;
		}
		if(spike6Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike6.x2 && ball.x - ball.r2 < spike6.x2 + spike6.w2 && ball.y + ball.r2 > spike6.y + spike6.h) {
			start = true;
		}
		
		//spike7
	var spike7 = {
			x: screen.x + canvas.width + 131,
			x2: screen.x + canvas.width + 130 + ball.r2 / 2,
			y: screen.y + canvas.height / 2 - ball.r2,
			w: 350,
			w2: 350 - ball.r2,
			h: ball.r2
		};
	
	var spike7array = [];
	var spike7move;
	var spike7Size = ball.r2;
	
	for(spike7move = 0; spike7move < spike7.w / ball.r2; spike7move++) {
		spike7array.push({
			spikeY: spike7.y,
			spikeX: spike7.x + spike7move * spike7Size	
		});
	}
	var spike7i, spike7disp
	for(spike7i = 0; spike7i < spike7.w / ball.r2; spike7i++) {
		spike7disp = spike7array[spike7i];
		
		ctx.beginPath();
		ctx.moveTo(spike7disp.spikeX + spike7Size / 2, spike7disp.spikeY);
		ctx.lineTo(spike7disp.spikeX + spike7Size, spike7disp.spikeY + spike7Size);
		ctx.moveTo(spike7disp.spikeX + spike7Size, spike7disp.spikeY + spike7Size);
		ctx.lineTo(spike7disp.spikeX, spike7disp.spikeY + spike7Size);
		ctx.moveTo(spike7disp.spikeX, spike7disp.spikeY + spike7Size);
		ctx.lineTo(spike7disp.spikeX + spike7Size / 2, spike7disp.spikeY);
		ctx.stroke();
	}
		var spike7Dis1 = spike7.x2 - ball.x - ball.r;
			spike7Dis2 = ball.x - ball.r - spike7.x - spike7.w2;
			spike7Dis3 = spike7.y - ball.y - ball.r2;
			spike7Dis4 = ball.y - ball.r - spike7.y - spike7.h;
		
		if(ball.xs1 >= spike7Dis1 && ball.y + ball.r > spike7.y && ball.y - ball.r < spike7.y + spike7.h - 2 && ball.x < spike7.x2) {
			start = true;
		}
		if(ball.xs2 >= spike7Dis2 && ball.y + ball.r > spike7.y && ball.y - ball.r < spike7.y + spike7.h - 2 && ball.x > spike7.x2) {
			start = true;
		}
		if(ball.g >= spike7Dis3 && ball.y < spike7.y && ball.x + ball.r > spike7.x2 && ball.x - ball.r < spike7.x2 + spike7.w2) {
			start = true;
		}
		if(spike7Dis4 <= ball.g && ball.y > spike7.y + spike7.h && ball.g < 0 && ball.x + ball.r > spike7.x2 && ball.x - ball.r < spike7.x2 + spike7.w2) {
			start = true;
		}
		
		//spike8
	var spike8 = {
			x: screen.x + canvas.width + 131,
			x2: screen.x + canvas.width + 130 + ball.r2 / 2,
			y: screen.y + canvas.height / 2 + ball.r2,
			w: 350,
			w2: 350 - ball.r2,
			h: -ball.r2
		};
	
	var spike8array = [];
	var spike8move;
	var spike8Size = ball.r2;
	
	for(spike8move = 0; spike8move < spike8.w / ball.r2; spike8move++) {
		spike8array.push({
			spikeY: spike8.y,
			spikeX: spike8.x + spike8move * spike8Size	
		});
	}
	var spike8i, spike8disp
	for(spike8i = 0; spike8i < spike8.w / ball.r2; spike8i++) {
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
		var spike8Dis1 = spike8.x2 - ball.x - ball.r2;
			spike8Dis2 = ball.x - ball.r2 - spike8.x2 - spike8.w2;
			spike8Dis3 = spike8.y - ball.y - ball.r2;
			spike8Dis4 = spike8.y + spike8.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike8Dis1 && ball.y + ball.r2 > spike8.y && ball.y - ball.r2 < spike8.y + spike8.h2 - 2 && ball.x < spike8.x2) {
			start = true;
		}
		if(ball.xs2 >= spike8Dis2 && ball.y + ball.r2 > spike8.y && ball.y - ball.r2 < spike8.y + spike8.h2 - 2 && ball.x > spike8.x2) {
			start = true;
		}
		if(ball.g >= spike8Dis3 && ball.y < spike8.y && ball.x + ball.r2 > spike8.x2 && ball.x - ball.r2 < spike8.x2 + spike8.w2) {
			start = true;
		}
		if(spike8Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike8.x2 && ball.x - ball.r2 < spike8.x2 + spike8.w2 && ball.y + ball.r2 > spike8.y + spike8.h) {
			start = true;
		}
		
		//spike9
	var spike9 = {
			x: box21.x,
			x2: box21.x + ball.r2 / 2,
			y: box21.y - ball.r2,
			w: ball.r2 * 2,
			w2: ball.r2 * 2 - ball.r2,
			h: ball.r2
		};
	
	var spike9array = [];
	var spike9move;
	var spike9Size = ball.r2;
	
	for(spike9move = 0; spike9move < spike9.w / ball.r2; spike9move++) {
		spike9array.push({
			spikeY: spike9.y,
			spikeX: spike9.x + spike9move * spike9Size	
		});
	}
	var spike9i, spike9disp
	for(spike9i = 0; spike9i < spike9.w / ball.r2; spike9i++) {
		spike9disp = spike9array[spike9i];
		
		ctx.beginPath();
		ctx.moveTo(spike9disp.spikeX + spike9Size / 2, spike9disp.spikeY);
		ctx.lineTo(spike9disp.spikeX + spike9Size, spike9disp.spikeY + spike9Size);
		ctx.moveTo(spike9disp.spikeX + spike9Size, spike9disp.spikeY + spike9Size);
		ctx.lineTo(spike9disp.spikeX, spike9disp.spikeY + spike9Size);
		ctx.moveTo(spike9disp.spikeX, spike9disp.spikeY + spike9Size);
		ctx.lineTo(spike9disp.spikeX + spike9Size / 2, spike9disp.spikeY);
		ctx.stroke();
	}
		var spike9Dis1 = spike9.x2 - ball.x - ball.r;
			spike9Dis2 = ball.x - ball.r - spike9.x - spike9.w2;
			spike9Dis3 = spike9.y - ball.y - ball.r2;
			spike9Dis4 = ball.y - ball.r - spike9.y - spike9.h;
		
		if(ball.xs1 >= spike9Dis1 && ball.y + ball.r > spike9.y && ball.y - ball.r < spike9.y + spike9.h - 2 && ball.x < spike9.x2) {
			start = true;
		}
		if(ball.xs2 >= spike9Dis2 && ball.y + ball.r > spike9.y && ball.y - ball.r < spike9.y + spike9.h - 2 && ball.x > spike9.x2) {
			start = true;
		}
		if(ball.g >= spike9Dis3 && ball.y < spike9.y && ball.x + ball.r > spike9.x2 && ball.x - ball.r < spike9.x2 + spike9.w2) {
			start = true;
		}
		if(spike9Dis4 <= ball.g && ball.y > spike9.y + spike9.h && ball.g < 0 && ball.x + ball.r > spike9.x2 && ball.x - ball.r < spike9.x2 + spike9.w2) {
			start = true;
		}
		
				//only copy for one spike
		//spike10
	var spike10 = {
			x: box25.x,
			x2: box25.x + ball.r2 / 4,
			y: box25.y + box25.h + ball.r2,
			w: ball.r2,
			w2: ball.r2 - ball.r2 / 2,
			h: -ball.r2
		};
	
	var spike10array = [];
	var spike10move;
	var spike10Size = ball.r2;
	
	for(spike10move = 0; spike10move < spike10.w / ball.r2; spike10move++) {
		spike10array.push({
			spikeY: spike10.y,
			spikeX: spike10.x + spike10move * spike10Size	
		});
	}
	var spike10i, spike10disp
	for(spike10i = 0; spike10i < spike10.w / ball.r2; spike10i++) {
		spike10disp = spike10array[spike10i];
		
		ctx.beginPath();
		ctx.moveTo(spike10disp.spikeX + spike10Size / 2, spike10disp.spikeY);
		ctx.lineTo(spike10disp.spikeX + spike10Size, spike10disp.spikeY - spike10Size);
		ctx.moveTo(spike10disp.spikeX + spike10Size, spike10disp.spikeY - spike10Size);
		ctx.lineTo(spike10disp.spikeX, spike10disp.spikeY - spike10Size);
		ctx.moveTo(spike10disp.spikeX, spike10disp.spikeY - spike10Size);
		ctx.lineTo(spike10disp.spikeX + spike10Size / 2, spike10disp.spikeY);
		ctx.stroke();
	}
		var spike10Dis1 = spike10.x2 - ball.x - ball.r2;
			spike10Dis2 = ball.x - ball.r2 - spike10.x2 - spike10.w2;
			spike10Dis3 = spike10.y - ball.y - ball.r2;
			spike10Dis4 = spike10.y + spike10.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike10Dis1 && ball.y + ball.r2 > spike10.y && ball.y - ball.r2 < spike10.y + spike10.h2 - 2 && ball.x < spike10.x2) {
			start = true;
		}
		if(ball.xs2 >= spike10Dis2 && ball.y + ball.r2 > spike10.y && ball.y - ball.r2 < spike10.y + spike10.h2 - 2 && ball.x > spike10.x2) {
			start = true;
		}
		if(ball.g >= spike10Dis3 && ball.y < spike10.y && ball.x + ball.r2 > spike10.x2 && ball.x - ball.r2 < spike10.x2 + spike10.w2) {
			start = true;
		}
		if(spike10Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike10.x2 && ball.x - ball.r2 < spike10.x2 + spike10.w2 && ball.y + ball.r2 > spike10.y + spike10.h) {
			start = true;
		}
		
		//only copy for one spike
	//spike11
	var spike11 = {
			x: box26.x,
			x2: box26.x + ball.r2 / 4,
			y: box26.y + box26.h + ball.r2,
			w: ball.r2,
			w2: ball.r2 - ball.r2 / 2,
			h: -ball.r2
		};
	
	var spike11array = [];
	var spike11move;
	var spike11Size = ball.r2;
	
	for(spike11move = 0; spike11move < spike11.w / ball.r2; spike11move++) {
		spike11array.push({
			spikeY: spike11.y,
			spikeX: spike11.x + spike11move * spike11Size	
		});
	}
	var spike11i, spike11disp
	for(spike11i = 0; spike11i < spike11.w / ball.r2; spike11i++) {
		spike11disp = spike11array[spike11i];
		
		ctx.beginPath();
		ctx.moveTo(spike11disp.spikeX + spike11Size / 2, spike11disp.spikeY);
		ctx.lineTo(spike11disp.spikeX + spike11Size, spike11disp.spikeY - spike11Size);
		ctx.moveTo(spike11disp.spikeX + spike11Size, spike11disp.spikeY - spike11Size);
		ctx.lineTo(spike11disp.spikeX, spike11disp.spikeY - spike11Size);
		ctx.moveTo(spike11disp.spikeX, spike11disp.spikeY - spike11Size);
		ctx.lineTo(spike11disp.spikeX + spike11Size / 2, spike11disp.spikeY);
		ctx.stroke();
	}
		var spike11Dis1 = spike11.x2 - ball.x - ball.r2;
			spike11Dis2 = ball.x - ball.r2 - spike11.x2 - spike11.w2;
			spike11Dis3 = spike11.y - ball.y - ball.r2;
			spike11Dis4 = spike11.y + spike11.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike11Dis1 && ball.y + ball.r2 > spike11.y && ball.y - ball.r2 < spike11.y + spike11.h2 - 2 && ball.x < spike11.x2) {
			start = true;
		}
		if(ball.xs2 >= spike11Dis2 && ball.y + ball.r2 > spike11.y && ball.y - ball.r2 < spike11.y + spike11.h2 - 2 && ball.x > spike11.x2) {
			start = true;
		}
		if(ball.g >= spike11Dis3 && ball.y < spike11.y && ball.x + ball.r2 > spike11.x2 && ball.x - ball.r2 < spike11.x2 + spike11.w2) {
			start = true;
		}
		if(spike11Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike11.x2 && ball.x - ball.r2 < spike11.x2 + spike11.w2 && ball.y + ball.r2 > spike11.y + spike11.h) {
			start = true;
		}
		
		//only copy for one spike
	//spike12
	var spike12 = {
			x: box27.x,
			x2: box27.x + ball.r2 / 4,
			y: box27.y - ball.r2,
			w: ball.r2,
			w2: ball.r2 - ball.r2 / 2,
			h: ball.r2
		};
	
	var spike12array = [];
	var spike12move;
	var spike12Size = ball.r2;
	
	for(spike12move = 0; spike12move < spike12.w / ball.r2; spike12move++) {
		spike12array.push({
			spikeY: spike12.y,
			spikeX: spike12.x + spike12move * spike12Size	
		});
	}
	var spike12i, spike12disp
	for(spike12i = 0; spike12i < spike12.w / ball.r2; spike12i++) {
		spike12disp = spike12array[spike12i];
		
		ctx.beginPath();
		ctx.moveTo(spike12disp.spikeX + spike12Size / 2, spike12disp.spikeY);
		ctx.lineTo(spike12disp.spikeX + spike12Size, spike12disp.spikeY + spike12Size);
		ctx.moveTo(spike12disp.spikeX + spike12Size, spike12disp.spikeY + spike12Size);
		ctx.lineTo(spike12disp.spikeX, spike12disp.spikeY + spike12Size);
		ctx.moveTo(spike12disp.spikeX, spike12disp.spikeY + spike12Size);
		ctx.lineTo(spike12disp.spikeX + spike12Size / 2, spike12disp.spikeY);
		ctx.stroke();
	}
		var spike12Dis1 = spike12.x2 - ball.x - ball.r;
			spike12Dis2 = ball.x - ball.r - spike12.x - spike12.w2;
			spike12Dis3 = spike12.y - ball.y - ball.r2;
			spike12Dis4 = ball.y - ball.r - spike12.y - spike12.h;
		
		if(ball.xs1 >= spike12Dis1 && ball.y + ball.r > spike12.y && ball.y - ball.r < spike12.y + spike12.h - 2 && ball.x < spike12.x2) {
			start = true;
		}
		if(ball.xs2 >= spike12Dis2 && ball.y + ball.r > spike12.y && ball.y - ball.r < spike12.y + spike12.h - 2 && ball.x > spike12.x2) {
			start = true;
		}
		if(ball.g >= spike12Dis3 && ball.y < spike12.y && ball.x + ball.r > spike12.x2 && ball.x - ball.r < spike12.x2 + spike12.w2) {
			start = true;
		}
		if(spike12Dis4 <= ball.g && ball.y > spike12.y + spike12.h && ball.g < 0 && ball.x + ball.r > spike12.x2 && ball.x - ball.r < spike12.x2 + spike12.w2) {
			start = true;
		}
		
		
		//gravity blocks
	//reverseBlock1
	var reverseBlock1 = {
			x: screen.x + 90,
			y: screen.y + 25,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 / 2
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
	
	//notreverseBlock1
	var notreverseBlock1 = {
			x: box2.x,
			y: box2.y - ball.r2 * 2,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 / 2
			};
			
		var notreverseBlock1Dis1 = notreverseBlock1.x - ball.x - ball.r;
			notreverseBlock1Dis2 = ball.x - ball.r - notreverseBlock1.x - notreverseBlock1.w;
			notreverseBlock1Dis3 = notreverseBlock1.y - ball.y - ball.r;
			notreverseBlock1Dis4 = ball.y - ball.r - notreverseBlock1.y - notreverseBlock1.h;

	if(gFlipper == true) {
		ctx.beginPath();
		ctx.rect(notreverseBlock1.x, notreverseBlock1.y, notreverseBlock1.w, notreverseBlock1.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(notreverseBlock1.x + notreverseBlock1.w / 2, notreverseBlock1.y + notreverseBlock1.h / 2, notreverseBlock1.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= notreverseBlock1Dis1 && ball.y + ball.r > notreverseBlock1.y && ball.y - ball.r < notreverseBlock1.y + notreverseBlock1.h  - 2 && ball.x < notreverseBlock1.x) {
			gFlipper = false;
		}
		if(ball.xs2 >= notreverseBlock1Dis2 && ball.y + ball.r > notreverseBlock1.y && ball.y - ball.r < notreverseBlock1.y + notreverseBlock1.h  - 2 && ball.x > notreverseBlock1.x) {
			gFlipper = false;
		}
		if(ball.g >= notreverseBlock1Dis3 && ball.y < notreverseBlock1.y && ball.x + ball.r > notreverseBlock1.x && ball.x - ball.r < notreverseBlock1.x + notreverseBlock1.w) {
			gFlipper = false;
		}
		if(notreverseBlock1Dis4 <= ball.g && ball.y > notreverseBlock1.y + notreverseBlock1.h && ball.g < 0 && ball.x + ball.r > notreverseBlock1.x && ball.x - ball.r < notreverseBlock1.x + notreverseBlock1.w) {
			gFlipper = false;
		}
	}
	
	//notreverseBlock2
	var notreverseBlock2 = {
			x: box4.x + ball.r2 * 2 + ball.r2 / 2,
			y: box4.y + box4.h / 2 + ball.r2 * 2,
			w: ball.r2,
			h: ball.r2,
			r: ball.r2 / 4
			};
			
		var notreverseBlock2Dis1 = notreverseBlock2.x - ball.x - ball.r;
			notreverseBlock2Dis2 = ball.x - ball.r - notreverseBlock2.x - notreverseBlock2.w;
			notreverseBlock2Dis3 = notreverseBlock2.y - ball.y - ball.r;
			notreverseBlock2Dis4 = ball.y - ball.r - notreverseBlock2.y - notreverseBlock2.h;

	if(gFlipper == true) {
		ctx.beginPath();
		ctx.rect(notreverseBlock2.x, notreverseBlock2.y, notreverseBlock2.w, notreverseBlock2.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(notreverseBlock2.x + notreverseBlock2.w / 2, notreverseBlock2.y + notreverseBlock2.h / 2, notreverseBlock2.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= notreverseBlock2Dis1 && ball.y + ball.r > notreverseBlock2.y && ball.y - ball.r < notreverseBlock2.y + notreverseBlock2.h  - 2 && ball.x < notreverseBlock2.x) {
			gFlipper = false;
		}
		if(ball.xs2 >= notreverseBlock2Dis2 && ball.y + ball.r > notreverseBlock2.y && ball.y - ball.r < notreverseBlock2.y + notreverseBlock2.h  - 2 && ball.x > notreverseBlock2.x) {
			gFlipper = false;
		}
		if(ball.g >= notreverseBlock2Dis3 && ball.y < notreverseBlock2.y && ball.x + ball.r > notreverseBlock2.x && ball.x - ball.r < notreverseBlock2.x + notreverseBlock2.w) {
			gFlipper = false;
		}
		if(notreverseBlock2Dis4 <= ball.g && ball.y > notreverseBlock2.y + notreverseBlock2.h && ball.g < 0 && ball.x + ball.r > notreverseBlock2.x && ball.x - ball.r < notreverseBlock2.x + notreverseBlock2.w) {
			gFlipper = false;
		}
	}
	
	//reverseBlock2
	var reverseBlock2 = {
			x: box6.x + ball.r2 * 3,
			y: box6.y - ball.r2 * 4,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 / 2
			};
			
		var reverseBlock2Dis1 = reverseBlock2.x - ball.x - ball.r;
			reverseBlock2Dis2 = ball.x - ball.r - reverseBlock2.x - reverseBlock2.w;
			reverseBlock2Dis3 = reverseBlock2.y - ball.y - ball.r;
			reverseBlock2Dis4 = ball.y - ball.r - reverseBlock2.y - reverseBlock2.h;

	if(gFlipper == false) {
		ctx.beginPath();
		ctx.rect(reverseBlock2.x, reverseBlock2.y, reverseBlock2.w, reverseBlock2.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(reverseBlock2.x + reverseBlock2.w / 2, reverseBlock2.y + reverseBlock2.h / 2, reverseBlock2.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= reverseBlock2Dis1 && ball.y + ball.r > reverseBlock2.y && ball.y - ball.r < reverseBlock2.y + reverseBlock2.h  - 2 && ball.x < reverseBlock2.x) {
			gFlipper = true;
		}
		if(ball.xs2 >= reverseBlock2Dis2 && ball.y + ball.r > reverseBlock2.y && ball.y - ball.r < reverseBlock2.y + reverseBlock2.h  - 2 && ball.x > reverseBlock2.x) {
			gFlipper = true;
		}
		if(ball.g >= reverseBlock2Dis3 && ball.y < reverseBlock2.y && ball.x + ball.r > reverseBlock2.x && ball.x - ball.r < reverseBlock2.x + reverseBlock2.w) {
			gFlipper = true;
		}
		if(reverseBlock2Dis4 <= ball.g && ball.y > reverseBlock2.y + reverseBlock2.h && ball.g < 0 && ball.x + ball.r > reverseBlock2.x && ball.x - ball.r < reverseBlock2.x + reverseBlock2.w) {
			gFlipper = true;
		}
	}
			//dont copy-paste
	//notreverseBlock3
	var notreverseBlock3 = {
			x: box13.x + ball.r2 / 2,
			y: box13.y + box13.h + ball.r2 / 2,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 / 2
			};
			
		var notreverseBlock3Dis1 = notreverseBlock3.x - ball.x - ball.r;
			notreverseBlock3Dis2 = ball.x - ball.r - notreverseBlock3.x - notreverseBlock3.w;
			notreverseBlock3Dis3 = notreverseBlock3.y - ball.y - ball.r;
			notreverseBlock3Dis4 = ball.y - ball.r - notreverseBlock3.y - notreverseBlock3.h;

	if(gFlipper == true) {
		ctx.beginPath();
		ctx.rect(notreverseBlock3.x + ball.r2 / 2, notreverseBlock3.y, notreverseBlock3.w, notreverseBlock3.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(notreverseBlock3.x + ball.r2 / 2 + notreverseBlock3.w / 2, notreverseBlock3.y + notreverseBlock3.h / 2, notreverseBlock3.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= notreverseBlock3Dis1 && ball.y + ball.r > notreverseBlock3.y && ball.y - ball.r < notreverseBlock3.y + notreverseBlock3.h  - 2 && ball.x < notreverseBlock3.x) {
			gFlipper = false;
		}
		if(ball.xs2 >= notreverseBlock3Dis2 && ball.y + ball.r > notreverseBlock3.y && ball.y - ball.r < notreverseBlock3.y + notreverseBlock3.h  - 2 && ball.x > notreverseBlock3.x) {
			gFlipper = false;
		}
		if(ball.g >= notreverseBlock3Dis3 && ball.y < notreverseBlock3.y && ball.x + ball.r > notreverseBlock3.x && ball.x - ball.r < notreverseBlock3.x + notreverseBlock3.w) {
			gFlipper = false;
		}
		if(notreverseBlock3Dis4 <= ball.g && ball.y > notreverseBlock3.y + notreverseBlock3.h && ball.g < 0 && ball.x + ball.r > notreverseBlock3.x && ball.x - ball.r < notreverseBlock3.x + notreverseBlock3.w) {
			gFlipper = false;
		}
	}
	
	//reverseBlock3
	var reverseBlock3 = {
			x: (screen.x + canvas.width) + canvas.width - ball.r2 * 3,
			y: (screen.y) + 35,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 / 2
			};
			
		var reverseBlock3Dis1 = reverseBlock3.x - ball.x - ball.r;
			reverseBlock3Dis2 = ball.x - ball.r - reverseBlock3.x - reverseBlock3.w;
			reverseBlock3Dis3 = reverseBlock3.y - ball.y - ball.r;
			reverseBlock3Dis4 = ball.y - ball.r - reverseBlock3.y - reverseBlock3.h;

	if(gFlipper == false) {
		ctx.beginPath();
		ctx.rect(reverseBlock3.x, reverseBlock3.y, reverseBlock3.w, reverseBlock3.h);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(reverseBlock3.x + reverseBlock3.w / 2, reverseBlock3.y + reverseBlock3.h / 2, reverseBlock3.r, 0, Math.PI * 2);
		ctx.stroke();
		
		if(ball.xs1 >= reverseBlock3Dis1 && ball.y + ball.r > reverseBlock3.y && ball.y - ball.r < reverseBlock3.y + reverseBlock3.h  - 2 && ball.x < reverseBlock3.x) {
			gFlipper = true;
		}
		if(ball.xs2 >= reverseBlock3Dis2 && ball.y + ball.r > reverseBlock3.y && ball.y - ball.r < reverseBlock3.y + reverseBlock3.h  - 2 && ball.x > reverseBlock3.x) {
			gFlipper = true;
		}
		if(ball.g >= reverseBlock3Dis3 && ball.y < reverseBlock3.y && ball.x + ball.r > reverseBlock3.x && ball.x - ball.r < reverseBlock3.x + reverseBlock3.w) {
			gFlipper = true;
		}
		if(reverseBlock3Dis4 <= ball.g && ball.y > reverseBlock3.y + reverseBlock3.h && ball.g < 0 && ball.x + ball.r > reverseBlock3.x && ball.x - ball.r < reverseBlock3.x + reverseBlock3.w) {
			gFlipper = true;
		}
	}
	
	//fullBlock1
		var fullBlock1 = {
			x: box6.x,
			y: box6.y + box6.h,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
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
	
	
		//size blocks
	//bigBlock1
	var bigBlock1 = {
			x: box7.x,
			y: box7.y + box7.h,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: 0.5
		};
	ctx.beginPath();
	ctx.rect(bigBlock1.x, bigBlock1.y, bigBlock1.w, bigBlock1.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(bigBlock1.x + ball.r2, bigBlock1.y + ball.r2, bigBlockR, 0, Math.PI * 2);
	ctx.stroke();
			
		var bigBlock1Dis1 = bigBlock1.x - ball.x - ball.r;
			bigBlock1Dis2 = ball.x - ball.r - bigBlock1.x - bigBlock1.w;
			bigBlock1Dis3 = bigBlock1.y - ball.y - ball.r;
			bigBlock1Dis4 = bigBlock1.y + bigBlock1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= bigBlock1Dis1 && ball.y + ball.r > bigBlock1.y && ball.y - ball.r < bigBlock1.y + bigBlock1.h  - 2 && ball.x < bigBlock1.x) {
			grow = true;
		}		//right side
		if(ball.xs2 >= bigBlock1Dis2 && ball.y + ball.r > bigBlock1.y && ball.y - ball.r < bigBlock1.y + bigBlock1.h  - 2 && ball.x > bigBlock1.x) {
			grow = true;
		}		//top side
		if(ball.g >= bigBlock1Dis3 && ball.y < bigBlock1.y && ball.x + ball.r > bigBlock1.x && ball.x - ball.r < bigBlock1.x + bigBlock1.w) {
			grow = true;
		}		//bottom side
		if(bigBlock1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > bigBlock1.x && ball.x - ball.r < bigBlock1.x + bigBlock1.w && ball.y + ball.r > bigBlock1.y + bigBlock1.h) {
			grow = true;
		}
				//dont copy-paste
		//smallBlock1
	var smallBlock1 = {
			x: box11.x + ball.r2,
			y: box11.y + box11.h,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 + 0.5
		};
	ctx.beginPath();
	ctx.rect(smallBlock1.x, smallBlock1.y, smallBlock1.w, smallBlock1.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(smallBlock1.x + ball.r2, smallBlock1.y + ball.r2, smallBlockR, 0, Math.PI * 2);
	ctx.stroke();
			
		var smallBlock1Dis1 = smallBlock1.x - ball.x - ball.r;
			smallBlock1Dis2 = ball.x - ball.r - smallBlock1.x - smallBlock1.w;
			smallBlock1Dis3 = smallBlock1.y - ball.y - ball.r;
			smallBlock1Dis4 = smallBlock1.y + smallBlock1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= smallBlock1Dis1 && ball.y + ball.r > smallBlock1.y && ball.y - ball.r < smallBlock1.y + smallBlock1.h  - 2 && ball.x < smallBlock1.x) {
			shrink = true;
			gFlip = true;
		}		//right side
		if(ball.xs2 >= smallBlock1Dis2 && ball.y + ball.r > smallBlock1.y && ball.y - ball.r < smallBlock1.y + smallBlock1.h  - 2 && ball.x > smallBlock1.x) {
			shrink = true;
			gFlip = true;
		}		//top side
		if(ball.g >= smallBlock1Dis3 && ball.y < smallBlock1.y && ball.x + ball.r > smallBlock1.x && ball.x - ball.r < smallBlock1.x + smallBlock1.w) {
			shrink = true;
			gFlip = true;
		}		//bottom side
		if(smallBlock1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > smallBlock1.x && ball.x - ball.r < smallBlock1.x + smallBlock1.w && ball.y + ball.r > smallBlock1.y + smallBlock1.h) {
			shrink = true;
			gFlip = true;
		}
		
		//bigBlock2
	var bigBlock2 = {
			x: box15.x,
			y: box15.y + box15.h + ball.r2 / 2,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: 0.5
		};
	ctx.beginPath();
	ctx.rect(bigBlock2.x, bigBlock2.y, bigBlock2.w, bigBlock2.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(bigBlock2.x + ball.r2, bigBlock2.y + ball.r2, bigBlockR, 0, Math.PI * 2);
	ctx.stroke();
			
		var bigBlock2Dis1 = bigBlock2.x - ball.x - ball.r;
			bigBlock2Dis2 = ball.x - ball.r - bigBlock2.x - bigBlock2.w;
			bigBlock2Dis3 = bigBlock2.y - ball.y - ball.r;
			bigBlock2Dis4 = bigBlock2.y + bigBlock2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= bigBlock2Dis1 && ball.y + ball.r > bigBlock2.y && ball.y - ball.r < bigBlock2.y + bigBlock2.h  - 2 && ball.x < bigBlock2.x) {
			grow = true;
		}		//right side
		if(ball.xs2 >= bigBlock2Dis2 && ball.y + ball.r > bigBlock2.y && ball.y - ball.r < bigBlock2.y + bigBlock2.h  - 2 && ball.x > bigBlock2.x) {
			grow = true;
		}		//top side
		if(ball.g >= bigBlock2Dis3 && ball.y < bigBlock2.y && ball.x + ball.r > bigBlock2.x && ball.x - ball.r < bigBlock2.x + bigBlock2.w) {
			grow = true;
		}		//bottom side
		if(bigBlock2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > bigBlock2.x && ball.x - ball.r < bigBlock2.x + bigBlock2.w && ball.y + ball.r > bigBlock2.y + bigBlock2.h) {
			grow = true;
		}
		
		//smallBlock2
	var smallBlock2 = {
			x: shrinkBlock5.x,
			y: shrinkBlock5.y + shrinkBlock5.h,
			w: ball.r2 * 2,
			h: ball.r2 * 2,
			r: ball.r2 + 0.5
		};
	ctx.beginPath();
	ctx.rect(smallBlock2.x, smallBlock2.y, smallBlock2.w, smallBlock2.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(smallBlock2.x + ball.r2, smallBlock2.y + ball.r2, smallBlockR, 0, Math.PI * 2);
	ctx.stroke();
			
		var smallBlock2Dis1 = smallBlock2.x - ball.x - ball.r;
			smallBlock2Dis2 = ball.x - ball.r - smallBlock2.x - smallBlock2.w;
			smallBlock2Dis3 = smallBlock2.y - ball.y - ball.r;
			smallBlock2Dis4 = smallBlock2.y + smallBlock2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= smallBlock2Dis1 && ball.y + ball.r > smallBlock2.y && ball.y - ball.r < smallBlock2.y + smallBlock2.h  - 2 && ball.x < smallBlock2.x) {
			shrink = true;
		}		//right side
		if(ball.xs2 >= smallBlock2Dis2 && ball.y + ball.r > smallBlock2.y && ball.y - ball.r < smallBlock2.y + smallBlock2.h  - 2 && ball.x > smallBlock2.x) {
			shrink = true;
		}		//top side
		if(ball.g >= smallBlock2Dis3 && ball.y < smallBlock2.y && ball.x + ball.r > smallBlock2.x && ball.x - ball.r < smallBlock2.x + smallBlock2.w) {
			shrink = true;
		}		//bottom side
		if(smallBlock2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > smallBlock2.x && ball.x - ball.r < smallBlock2.x + smallBlock2.w && ball.y + ball.r > smallBlock2.y + smallBlock2.h) {
			shrink = true;
		}
		
		
		//checkpoints
	//checkpoint1
	if(checkpoint > 1 || checkpoint < 1) {
	var checkpoint1 = {
			x: box10.x + box10.w - ball.r2,
			y: box10.y - ball.r2 - ball.r2 / 2,
			w: ball.r2 / 2,
			h: ball.r2 / 2
		};
	ctx.beginPath();
	ctx.rect(checkpoint1.x, checkpoint1.y, checkpoint1.w, checkpoint1.h);
	ctx.stroke();
			
		var checkpoint1Dis1 = checkpoint1.x - ball.x - ball.r;
			checkpoint1Dis2 = ball.x - ball.r - checkpoint1.x - checkpoint1.w;
			checkpoint1Dis3 = checkpoint1.y - ball.y - ball.r;
			checkpoint1Dis4 = checkpoint1.y + checkpoint1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= checkpoint1Dis1 && ball.y + ball.r > checkpoint1.y && ball.y - ball.r < checkpoint1.y + checkpoint1.h  - 2 && ball.x < checkpoint1.x) {
			checkpoint = 1;
		}		//right side
		if(ball.xs2 >= checkpoint1Dis2 && ball.y + ball.r > checkpoint1.y && ball.y - ball.r < checkpoint1.y + checkpoint1.h  - 2 && ball.x > checkpoint1.x) {
			checkpoint = 1;
		}		//top side
		if(ball.g >= checkpoint1Dis3 && ball.y < checkpoint1.y && ball.x + ball.r > checkpoint1.x && ball.x - ball.r < checkpoint1.x + checkpoint1.w) {
			checkpoint = 1;
		}		//bottom side
		if(checkpoint1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > checkpoint1.x && ball.x - ball.r < checkpoint1.x + checkpoint1.w && ball.y + ball.r > checkpoint1.y + checkpoint1.h) {
			checkpoint = 1;
		}
	}
	
	//checkpoint2
	if(checkpoint > 2 || checkpoint < 2) {
	var checkpoint2 = {
			x: box19.x + ball.r2 + ball.r2 / 4,
			y: box19.y - ball.r2,
			w: ball.r2 / 2,
			h: ball.r2 / 2
		};
	ctx.beginPath();
	ctx.rect(checkpoint2.x, checkpoint2.y, checkpoint2.w, checkpoint2.h);
	ctx.stroke();
			
		var checkpoint2Dis1 = checkpoint2.x - ball.x - ball.r;
			checkpoint2Dis2 = ball.x - ball.r - checkpoint2.x - checkpoint2.w;
			checkpoint2Dis3 = checkpoint2.y - ball.y - ball.r;
			checkpoint2Dis4 = checkpoint2.y + checkpoint2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= checkpoint2Dis1 && ball.y + ball.r > checkpoint2.y && ball.y - ball.r < checkpoint2.y + checkpoint2.h  - 2 && ball.x < checkpoint2.x) {
			checkpoint = 2;
		}		//right side
		if(ball.xs2 >= checkpoint2Dis2 && ball.y + ball.r > checkpoint2.y && ball.y - ball.r < checkpoint2.y + checkpoint2.h  - 2 && ball.x > checkpoint2.x) {
			checkpoint = 2;
		}		//top side
		if(ball.g >= checkpoint2Dis3 && ball.y < checkpoint2.y && ball.x + ball.r > checkpoint2.x && ball.x - ball.r < checkpoint2.x + checkpoint2.w) {
			checkpoint = 2;
		}		//bottom side
		if(checkpoint2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > checkpoint2.x && ball.x - ball.r < checkpoint2.x + checkpoint2.w && ball.y + ball.r > checkpoint2.y + checkpoint2.h) {
			checkpoint = 2;
		}
	}
}