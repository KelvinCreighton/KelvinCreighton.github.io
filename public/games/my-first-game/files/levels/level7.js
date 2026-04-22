	var moveBlock1Move = {
			count: 0,
			countMax: 15,
			countMin: -15,
			speed: 0.2
		},
		moveBlock2Move = {
			count: 0,
			countMax: 15,
			countMin: -15,
			speed: -0.3
		};
function level7() {
	if(start == true) {
		if(checkpoint == 1) {
			screen.x = 768;
			screen.y = 0;
			canvas.width = 512;
			
			canvas.height = 256;
			ball.x = 30;
			ball.y = 45;
			ball.r = 5;
			ball.g = 0
			ball.gAcc = -0.02;
			gFlipper = false;
		} else if(checkpoint == 2) {
			screen.x = 0;
			screen.y = 0;
			canvas.width = 256;
			canvas.height = 256;
			
			ball.x = canvas.width / 2;
			ball.y = canvas.height - ball.r2 * 4;
			ball.r = 5;
			ball.g = 0;
			ball.gAcc = 0.02;
			gFlipper = true;
		} else {
			screen.x = 0;
			screen.y = 0;
			canvas.width = 256;
			canvas.height = 256;
			
			ball.x = canvas.width / 2;
			ball.y = canvas.height - ball.r2 * 4;
			ball.r = 5;
			ball.g = 0;
			ball.gAcc = 0.04;
			gFlipper = false;
		}
		


		start = false;
	}
	goal.x = screen.x + canvas.width / 2;
	goal.y = screen.y;
	
	
		//flip blocks
			//dont copy-paste
	//reverseflipX1
	var reverseflipX1 = {
			x: screen.x + 0.5,
			y: screen.y + canvas.height / 2 + ball.r2 * 3,
			y2: screen.y + canvas.height / 2 + ball.r2 * 5,
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
			canvas.width = 512;
			screen.x += canvas.width + 256;
			ball.x = canvas.width - ball.r2;
		}		//right side
		if(ball.xs2 >= reverseflipX1Dis2 && ball.y + ball.r > reverseflipX1.y && ball.y - ball.r < reverseflipX1.y + reverseflipX1.h  - 2 && ball.x > reverseflipX1.x) {
			canvas.width = 512;
			screen.x += canvas.width + 256;
			ball.x = canvas.width - ball.r2;
		}		//top side
		if(ball.g >= reverseflipX1Dis3 && ball.y < reverseflipX1.y && ball.x + ball.r > reverseflipX1.x && ball.x - ball.r < reverseflipX1.x + reverseflipX1.w) {
			canvas.width = 512;
			screen.x += canvas.width + 256;
			ball.x = canvas.width - ball.r2;
		}		//bottom side
		if(reverseflipX1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > reverseflipX1.x && ball.x - ball.r < reverseflipX1.x + reverseflipX1.w && ball.y + ball.r > reverseflipX1.y + reverseflipX1.h) {
			canvas.width = 512;
			screen.x += canvas.width + 256;
			ball.x = canvas.width - ball.r2;
		}
		
		//flipX1
	var flipX1 = {
			x: screen.x - 256 - ball.r2 * 2,
			y: screen.y + 64 - ball.r2 * 2,
			y2: screen.y + 64,
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
			canvas.width = 256;
			screen.x -= 512 + 256;
			ball.x = ball.r2 * 5;
		}		//right side
		if(ball.xs2 >= flipX1Dis2 && ball.y + ball.r > flipX1.y && ball.y - ball.r < flipX1.y + flipX1.h  - 2 && ball.x > flipX1.x) {
			canvas.width = 256;
			screen.x -= 512 + 256;
			ball.x = ball.r2 * 5;
		}		//top side
		if(ball.g >= flipX1Dis3 && ball.y < flipX1.y && ball.x + ball.r > flipX1.x && ball.x - ball.r < flipX1.x + flipX1.w) {
			canvas.width = 256;
			screen.x -= 512 + 256;
			ball.x = ball.r2 * 5;
		}		//bottom side
		if(flipX1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > flipX1.x && ball.x - ball.r < flipX1.x + flipX1.w && ball.y + ball.r > flipX1.y + flipX1.h) {
			canvas.width = 256;
			screen.x -= 512 + 256;
			ball.x = ball.r2 * 5;
		}
		
		//flipX2
	var flipX2 = {
			x: screen.x + 256 - ball.r2 * 2 - 0.5,
			y: screen.y + 128 + 32 + 16 - ball.r2 * 2,
			y2: screen.y + 128 + 32 + 16,
			w: ball.r2 * 2,
			h: ball.r2 * 2
		};
	ctx.beginPath();
	ctx.rect(flipX2.x, flipX2.y, flipX2.w, flipX2.h);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(flipX2.x + flipAniX, flipX2.y);
	ctx.lineTo(flipX2.x + flipAniX, flipX2.y2);
	ctx.stroke();
			
		var flipX2Dis1 = flipX2.x - ball.x - ball.r;
			flipX2Dis2 = ball.x - ball.r - flipX2.x - flipX2.w;
			flipX2Dis3 = flipX2.y - ball.y - ball.r;
			flipX2Dis4 = flipX2.y + flipX2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= flipX2Dis1 && ball.y + ball.r > flipX2.y && ball.y - ball.r < flipX2.y + flipX2.h  - 2 && ball.x < flipX2.x) {
			screen.x -= 256;
			ball.x = ball.r2;
		}		//right side
		if(ball.xs2 >= flipX2Dis2 && ball.y + ball.r > flipX2.y && ball.y - ball.r < flipX2.y + flipX2.h  - 2 && ball.x > flipX2.x) {
			screen.x -= 256;
			ball.x = ball.r2;
		}		//top side
		if(ball.g >= flipX2Dis3 && ball.y < flipX2.y && ball.x + ball.r > flipX2.x && ball.x - ball.r < flipX2.x + flipX2.w) {
			screen.x -= 256;
			ball.x = ball.r2;
		}		//bottom side
		if(flipX2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > flipX2.x && ball.x - ball.r < flipX2.x + flipX2.w && ball.y + ball.r > flipX2.y + flipX2.h) {
			screen.x -= 256;
			ball.x = ball.r2;
		}
	
	
		//boxes
	//box1
	var box1 = {
			x: screen.x + canvas.width / 2 - ball.r2 * 2,
			y: screen.y + canvas.height - ball.r2 * 3,
			w: ball.r2 * 4,
			h: ball.r2
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
			x: box1.x - ball.r2 * 3,
			y: box1.y - ball.r2 * 2,
			w: ball.r2,
			h: ball.r2
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
			x: box2.x - ball.r2 * 3,
			y: box2.y - ball.r2 * 2,
			w: ball.r2,
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
			x: (screen.x - 256) - ball.r2 * 4,
			y: screen.y + canvas.height / 2 + ball.r2 * 5,
			w: ball.r2 * 4,
			h: ball.r2 * 2
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
			x: box4.x - ball.r2 * 6,
			y: box4.y + ball.r2 * 4,
			w: ball.r2,
			h: ball.r2
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
			x: box5.x - ball.r2 * 3,
			y: box5.y - ball.r2 * 6,
			w: ball.r2,
			h: ball.r2
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
			x: box6.x - ball.r2 * 3,
			y: box6.y,
			w: ball.r2,
			h: ball.r2
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
			x: box7.x - ball.r2 * 10,
			y: box7.y + ball.r2 * 2 + ball.r2 / 2,
			w: ball.r2,
			h: ball.r2
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
			x: box8.x - ball.r2 * 3,
			y: box8.y + ball.r2 + ball.r2 / 2,
			w: ball.r2,
			h: ball.r2
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
			x: box9.x - ball.r2 * 3 - ball.r2 / 2,
			y: box9.y + ball.r2 / 2,
			w: ball.r2,
			h: ball.r2
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
			x: box10.x - ball.r2 * 5 - ball.r2 / 2,
			y: box10.y - ball.r2 * 5,
			w: ball.r2,
			h: ball.r2
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
			x: screen.x - 740,
			y: screen.y + 25,
			w: ball.r2,
			h: ball.r2
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
			x: box12.x + ball.r2 * 5,
			y: box12.y + ball.r2 * 4,
			w: ball.r2,
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
			x: box13.x + ball.r2 * 7,
			y: box12.y,
			w: ball.r2,
			h: ball.r2 * 9
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
			x: box14.x + ball.r2 * 15,
			y: box14.y + ball.r2,
			w: ball.r2 * 3,
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
			x: box15.x + ball.r2 * 7,
			y: box15.y + ball.r2 * 4,
			w: ball.r2 * 3,
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
		//half line
	var box17 = {
			x: screen.x + 256 + 256 / 2,
			y: screen.y,
			w: 0,
			h: 256
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
			x: screen.x + 256 + 16,
			y: screen.y + 256 / 2,
			w: ball.r2 * 3,
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
	
	
		//spikes
			//dont copy-paste
	//spike1
	var spike1 = {
			x: screen.x,
			x2: screen.x,
			y: screen.y + canvas.height - ball.r2,
			w: canvas.width * 2,
			w2: canvas.width * 2,
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
			x: screen.x - canvas.width - 256 + ball.r2 * 3,
			x2: screen.x - canvas.width - 256 + ball.r2 * 4,
			y: screen.y + canvas.height / 2 - ball.r2,
			w: canvas.width - ball.r2 * 3,
			w2: canvas.width - ball.r2 * 3,
			h: ball.r2
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
		ctx.lineTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY + spike2Size);
		ctx.moveTo(spike2disp.spikeX + spike2Size, spike2disp.spikeY + spike2Size);
		ctx.lineTo(spike2disp.spikeX, spike2disp.spikeY + spike2Size);
		ctx.moveTo(spike2disp.spikeX, spike2disp.spikeY + spike2Size);
		ctx.lineTo(spike2disp.spikeX + spike2Size / 2, spike2disp.spikeY);
		ctx.stroke();
	}
		var spike2Dis1 = spike2.x2 - ball.x - ball.r;
			spike2Dis2 = ball.x - ball.r - spike2.x - spike2.w2;
			spike2Dis3 = spike2.y - ball.y - ball.r2;
			spike2Dis4 = ball.y - ball.r - spike2.y - spike2.h;
		
		if(ball.xs1 >= spike2Dis1 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h - 2 && ball.x < spike2.x2) {
			start = true;
		}
		if(ball.xs2 >= spike2Dis2 && ball.y + ball.r > spike2.y && ball.y - ball.r < spike2.y + spike2.h - 2 && ball.x > spike2.x2) {
			start = true;
		}
		if(ball.g >= spike2Dis3 && ball.y < spike2.y && ball.x + ball.r > spike2.x2 && ball.x - ball.r < spike2.x2 + spike2.w2) {
			start = true;
		}
		if(spike2Dis4 <= ball.g && ball.y > spike2.y + spike2.h && ball.g < 0 && ball.x + ball.r > spike2.x2 && ball.x - ball.r < spike2.x2 + spike2.w2) {
			start = true;
		}
		
		//spike3
	var spike3 = {
			x: screen.x - canvas.width - 256 + ball.r2 * 3,
			x2: screen.x - canvas.width - 256 + ball.r2 * 4,
			y: screen.y + canvas.height / 2 + ball.r2,
			w: canvas.width - ball.r2 * 3,
			w2: canvas.width - ball.r2 * 3,
			h: -ball.r2
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
		ctx.lineTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY - spike3Size);
		ctx.moveTo(spike3disp.spikeX + spike3Size, spike3disp.spikeY - spike3Size);
		ctx.lineTo(spike3disp.spikeX, spike3disp.spikeY - spike3Size);
		ctx.moveTo(spike3disp.spikeX, spike3disp.spikeY - spike3Size);
		ctx.lineTo(spike3disp.spikeX + spike3Size / 2, spike3disp.spikeY);
		ctx.stroke();
	}
		var spike3Dis1 = spike3.x2 - ball.x - ball.r2;
			spike3Dis2 = ball.x - ball.r2 - spike3.x2 - spike3.w2;
			spike3Dis3 = spike3.y - ball.y - ball.r2;
			spike3Dis4 = spike3.y + spike3.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike3Dis1 && ball.y + ball.r2 > spike3.y && ball.y - ball.r2 < spike3.y + spike3.h2 - 2 && ball.x < spike3.x2) {
			start = true;
		}
		if(ball.xs2 >= spike3Dis2 && ball.y + ball.r2 > spike3.y && ball.y - ball.r2 < spike3.y + spike3.h2 - 2 && ball.x > spike3.x2) {
			start = true;
		}
		if(ball.g >= spike3Dis3 && ball.y < spike3.y && ball.x + ball.r2 > spike3.x2 && ball.x - ball.r2 < spike3.x2 + spike3.w2) {
			start = true;
		}
		if(spike3Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike3.x2 && ball.x - ball.r2 < spike3.x2 + spike3.w2 && ball.y + ball.r2 > spike3.y + spike3.h) {
			start = true;
		}
		
		//spike4
	var spike4 = {
			x: screen.x - canvas.width - 256,
			x2: screen.x - canvas.width - 256,
			y: screen.y + ball.r2,
			w: canvas.width,
			w2: canvas.width,
			h: -ball.r2
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
		ctx.lineTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY - spike4Size);
		ctx.moveTo(spike4disp.spikeX + spike4Size, spike4disp.spikeY - spike4Size);
		ctx.lineTo(spike4disp.spikeX, spike4disp.spikeY - spike4Size);
		ctx.moveTo(spike4disp.spikeX, spike4disp.spikeY - spike4Size);
		ctx.lineTo(spike4disp.spikeX + spike4Size / 2, spike4disp.spikeY);
		ctx.stroke();
	}
		var spike4Dis1 = spike4.x2 - ball.x - ball.r2;
			spike4Dis2 = ball.x - ball.r2 - spike4.x2 - spike4.w2;
			spike4Dis3 = spike4.y - ball.y - ball.r2;
			spike4Dis4 = spike4.y + spike4.h - ball.y + ball.r2;
		
		if(ball.xs1 >= spike4Dis1 && ball.y + ball.r2 > spike4.y && ball.y - ball.r2 < spike4.y + spike4.h2 - 2 && ball.x < spike4.x2) {
			start = true;
		}
		if(ball.xs2 >= spike4Dis2 && ball.y + ball.r2 > spike4.y && ball.y - ball.r2 < spike4.y + spike4.h2 - 2 && ball.x > spike4.x2) {
			start = true;
		}
		if(ball.g >= spike4Dis3 && ball.y < spike4.y && ball.x + ball.r2 > spike4.x2 && ball.x - ball.r2 < spike4.x2 + spike4.w2) {
			start = true;
		}
		if(spike4Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r2 > spike4.x2 && ball.x - ball.r2 < spike4.x2 + spike4.w2 && ball.y + ball.r2 > spike4.y + spike4.h) {
			start = true;
		}
		
		//spike5
	var spike5 = {
			x: screen.x - canvas.width - 256,
			x2: screen.x - canvas.width - 256,
			y: screen.y + canvas.height - ball.r2,
			w: canvas.width,
			w2: canvas.width,
			h: ball.r2
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
		ctx.lineTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY + spike5Size);
		ctx.moveTo(spike5disp.spikeX + spike5Size, spike5disp.spikeY + spike5Size);
		ctx.lineTo(spike5disp.spikeX, spike5disp.spikeY + spike5Size);
		ctx.moveTo(spike5disp.spikeX, spike5disp.spikeY + spike5Size);
		ctx.lineTo(spike5disp.spikeX + spike5Size / 2, spike5disp.spikeY);
		ctx.stroke();
	}
		var spike5Dis1 = spike5.x2 - ball.x - ball.r;
			spike5Dis2 = ball.x - ball.r - spike5.x - spike5.w2;
			spike5Dis3 = spike5.y - ball.y - ball.r2;
			spike5Dis4 = ball.y - ball.r - spike5.y - spike5.h;
		
		if(ball.xs1 >= spike5Dis1 && ball.y + ball.r > spike5.y && ball.y - ball.r < spike5.y + spike5.h - 2 && ball.x < spike5.x2) {
			start = true;
		}
		if(ball.xs2 >= spike5Dis2 && ball.y + ball.r > spike5.y && ball.y - ball.r < spike5.y + spike5.h - 2 && ball.x > spike5.x2) {
			start = true;
		}
		if(ball.g >= spike5Dis3 && ball.y < spike5.y && ball.x + ball.r > spike5.x2 && ball.x - ball.r < spike5.x2 + spike5.w2) {
			start = true;
		}
		if(spike5Dis4 <= ball.g && ball.y > spike5.y + spike5.h && ball.g < 0 && ball.x + ball.r > spike5.x2 && ball.x - ball.r < spike5.x2 + spike5.w2) {
			start = true;
		}
		
			//one spike
		//spike6
	var spike6 = {
			x: box7.x,
			x2: box7.x + ball.r2 / 4,
			y: box7.y + box7.h + ball.r2,
			w: ball.r2,
			w2: ball.r2 - ball.r2 / 2,
			h: -ball.r2
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
		
			//one spike
		//spike7
	var spike7 = {
			x: box8.x,
			x2: box8.x + ball.r2 / 4,
			y: box8.y - ball.r2,
			w: ball.r2,
			w2: ball.r2 - ball.r2 / 2,
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
			x: box15.x,
			x2: box15.x + ball.r2 / 4,
			y: box15.y + box15.h + ball.r2,
			w: box15.w,
			w2: box15.w - ball.r2 / 2,
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
			x: box16.x,
			x2: box16.x + ball.r2 / 4,
			y: box16.y - ball.r2,
			w: box16.w,
			w2: box16.w - ball.r2 / 2,
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
		
		//spike10
	var spike10 = {
			x: screen.x + 256,
			x2: screen.x + 256,
			y: screen.y + ball.r2,
			w: 256,
			w2: 256,
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
		
			
			//gravity blocks
		//reverseBlock1
	var reverseBlock1 = {
			x: box6.x + ball.r2,
			y: box6.y + ball.r2 * 3,
			w: ball.r2,
			h: ball.r2,
			r: ball.r2 / 4
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
			x: box8.x - ball.r2 / 2,
			y: box8.y + ball.r2 * 2,
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
			
	
	//reverseBlock2
	var reverseBlock2 = {
			x: box13.x + ball.r2 * 4 + ball.r2 / 2,
			y: box13.y,
			w: ball.r2,
			h: ball.r2,
			r: ball.r2 / 4
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
	
	//halfBlock1
	var halfBlock1 = {
			x: box11.x,
			y: box11.y + box11.h,
			w: ball.r2,
			h: ball.r2
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
			if(ball.gAcc > 0) {
				ball.gAcc = 0.02;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.02;
			}
		}
		if(ball.xs2 >= halfBlock1Dis2 && ball.y + ball.r > halfBlock1.y && ball.y - ball.r < halfBlock1.y + halfBlock1.h  - 2 && ball.x > halfBlock1.x) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.02;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.02;
			}
		}
		if(ball.g >= halfBlock1Dis3 && ball.y < halfBlock1.y && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.02;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.02;
			}
		}
		if(halfBlock1Dis4 <= ball.g && ball.y > halfBlock1.y + halfBlock1.h && ball.g < 0 && ball.x + ball.r > halfBlock1.x && ball.x - ball.r < halfBlock1.x + halfBlock1.w) {
			if(ball.gAcc > 0) {
				ball.gAcc = 0.02;
			} else if(ball.gAcc < 0) {
				ball.gAcc = -0.02;
			}
		}
	}
	
	
		//side switch blocks
	//sideSwitchBlock1
	var sideSwitchBlock1 = {
			x: screen.x + 256 + 16,
			y: screen.y + 256 / 2,
			w: ball.r2 * 3,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(sideSwitchBlock1.x, sideSwitchBlock1.y, sideSwitchBlock1.w, sideSwitchBlock1.h);
	ctx.stroke();
			
		var sideSwitchBlock1Dis1 = sideSwitchBlock1.x - ball.x - ball.r;
			sideSwitchBlock1Dis2 = ball.x - ball.r - sideSwitchBlock1.x - sideSwitchBlock1.w;
			sideSwitchBlock1Dis3 = sideSwitchBlock1.y - ball.y - ball.r;
			sideSwitchBlock1Dis4 = sideSwitchBlock1.y + sideSwitchBlock1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= sideSwitchBlock1Dis1 && ball.y + ball.r > sideSwitchBlock1.y && ball.y - ball.r < sideSwitchBlock1.y + sideSwitchBlock1.h  - 2 && ball.x < sideSwitchBlock1.x) {
			ball.xs1 = sideSwitchBlock1Dis1;
		}		//right side
		if(ball.xs2 >= sideSwitchBlock1Dis2 && ball.y + ball.r > sideSwitchBlock1.y && ball.y - ball.r < sideSwitchBlock1.y + sideSwitchBlock1.h  - 2 && ball.x > sideSwitchBlock1.x) {
			ball.xs2 = sideSwitchBlock1Dis2;
		}		//top side
		if(ball.g >= sideSwitchBlock1Dis3 && ball.y < sideSwitchBlock1.y && ball.x + ball.r > sideSwitchBlock1.x && ball.x - ball.r < sideSwitchBlock1.x + sideSwitchBlock1.w) {
			ball.g = sideSwitchBlock1Dis3;
		}		//bottom side
		if(sideSwitchBlock1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > sideSwitchBlock1.x && ball.x - ball.r < sideSwitchBlock1.x + sideSwitchBlock1.w && ball.y + ball.r > sideSwitchBlock1.y + sideSwitchBlock1.h) {
			ball.g = sideSwitchBlock1Dis4;
		}
	
	
		//move blocks
	//moveBlock1
	var moveBlock1 = {
			x: box14.x + ball.r2 * 6 + moveBlock1Move.count,
			y: box12.y + ball.r2 * 5,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(moveBlock1.x, moveBlock1.y, moveBlock1.w, moveBlock1.h);
	ctx.stroke();
			moveBlock1Move.count += moveBlock1Move.speed;
			if(moveBlock1Move.count >= moveBlock1Move.countMax || moveBlock1Move.count <= moveBlock1Move.countMin) {
					moveBlock1Move.speed *= -1;
			}
		var moveBlock1Dis1 = moveBlock1.x - ball.x - ball.r;
			moveBlock1Dis2 = ball.x - ball.r - moveBlock1.x - moveBlock1.w;
			moveBlock1Dis3 = moveBlock1.y - ball.y - ball.r;
			moveBlock1Dis4 = moveBlock1.y + moveBlock1.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= moveBlock1Dis1 && ball.y + ball.r > moveBlock1.y && ball.y - ball.r < moveBlock1.y + moveBlock1.h  - 2 && ball.x < moveBlock1.x) {
			ball.xs1 = moveBlock1Dis1;
		}		//right side
		if(ball.xs2 >= moveBlock1Dis2 && ball.y + ball.r > moveBlock1.y && ball.y - ball.r < moveBlock1.y + moveBlock1.h  - 2 && ball.x > moveBlock1.x) {
			ball.xs2 = moveBlock1Dis2;
		}		//top side
		if(ball.g >= moveBlock1Dis3 && ball.y < moveBlock1.y && ball.x + ball.r > moveBlock1.x && ball.x - ball.r < moveBlock1.x + moveBlock1.w) {
			ball.g = moveBlock1Dis3;
			ball.x += moveBlock1Move.speed;
		}		//bottom side
		if(moveBlock1Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > moveBlock1.x && ball.x - ball.r < moveBlock1.x + moveBlock1.w && ball.y + ball.r > moveBlock1.y + moveBlock1.h) {
			ball.g = moveBlock1Dis4;
			ball.x += moveBlock1Move.speed;
		}
		
		//moveBlock2
	var moveBlock2 = {
			x: box14.x + ball.r2 * 10 + moveBlock2Move.count,
			y: box12.y + ball.r2,
			w: ball.r2,
			h: ball.r2
		};
	ctx.beginPath();
	ctx.rect(moveBlock2.x, moveBlock2.y, moveBlock2.w, moveBlock2.h);
	ctx.stroke();
			moveBlock2Move.count += moveBlock2Move.speed;
			if(moveBlock2Move.count >= moveBlock2Move.countMax || moveBlock2Move.count <= moveBlock2Move.countMin) {
					moveBlock2Move.speed *= -1;
			}
		var moveBlock2Dis1 = moveBlock2.x - ball.x - ball.r;
			moveBlock2Dis2 = ball.x - ball.r - moveBlock2.x - moveBlock2.w;
			moveBlock2Dis3 = moveBlock2.y - ball.y - ball.r;
			moveBlock2Dis4 = moveBlock2.y + moveBlock2.h - ball.y + ball.r;
				//left side
		if(ball.xs1 >= moveBlock2Dis1 && ball.y + ball.r > moveBlock2.y && ball.y - ball.r < moveBlock2.y + moveBlock2.h  - 2 && ball.x < moveBlock2.x) {
			ball.xs1 = moveBlock2Dis1;
		}		//right side
		if(ball.xs2 >= moveBlock2Dis2 && ball.y + ball.r > moveBlock2.y && ball.y - ball.r < moveBlock2.y + moveBlock2.h  - 2 && ball.x > moveBlock2.x) {
			ball.xs2 = moveBlock2Dis2;
		}		//top side
		if(ball.g >= moveBlock2Dis3 && ball.y < moveBlock2.y && ball.x + ball.r > moveBlock2.x && ball.x - ball.r < moveBlock2.x + moveBlock2.w) {
			ball.g = moveBlock2Dis3;
			ball.x += moveBlock2Move.speed;
		}		//bottom side
		if(moveBlock2Dis4 >= ball.g && ball.g < 0 && ball.x + ball.r > moveBlock2.x && ball.x - ball.r < moveBlock2.x + moveBlock2.w && ball.y + ball.r > moveBlock2.y + moveBlock2.h) {
			ball.g = moveBlock2Dis4;
			ball.x += moveBlock2Move.speed;
		}
		
		
		//checkpoints
	//checkpoint1
	if(checkpoint != 1) {
	var checkpoint1 = {
			x: box12.x - ball.r2 - ball.r2 / 2,
			y: box12.y + ball.r2 * 10,
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
	if(checkpoint != 2 && checkpoint > 0) {
	var checkpoint2 = {
			x: box1.x + box1.w / 2 - ball.r2 / 4,
			y: box1.y - ball.r2,
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