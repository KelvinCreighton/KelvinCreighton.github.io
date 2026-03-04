	var smallBlockR = ball.r2 + 1;
		bigBlockR = 0.05;
	
	var flipAniX = 0,
		reverseflipAniX = ball.r2 * 2;
function mechanics() {	
	if(dPressed == true) {
		ball.x += ball.xs1;
	}
	if(aPressed == true) {
		ball.x -= ball.xs2;
	}
		ball.y += ball.g;
		
	if(ball.gAcc > 0) {
		if(wPressed == true && ball.g == 0 && ball.r == 10) {
			ball.g = -1.58;
		} else if(wPressed == true && ball.g == 0 && ball.r == 5) {
			ball.g = -1.3;
		}
		if(ball.g < 0) {
			wPressed = false;
		}
	} else if(ball.gAcc < 0) {
		if(wPressed == true && ball.g == 0 && ball.r == 10) {
			ball.g = 1.58;
		} else if(wPressed == true && ball.g == 0 && ball.r == 5) {
			ball.g = 1.3;
		}
		if(ball.g > 0) {
			wPressed = false;
		}
	}
	
	//gravity stuff
	if(ball.g == 0) {
		gFlip = true;
	}
	if(gFlipper == true && gFlip == true && spacePressed == true) {
			ball.gAcc *= -1;
			gFlip = false;
			spacePressed = false;
	}
	
	//shrinking and growing stuff
	if(shrink == true && ball.r > 5) {
		shrinking = true;
	} else {
		shrinking = false;
		shrink = false;
	}
	
	if(shrinking == true) {
		ball.r -= 0.1;
	}
	if(ball.r < 5) {
		ball.r = 5;
	}		
		smallBlockR -= 0.05
	if(smallBlockR <= 0.05) {
		smallBlockR = ball.r2 + 1;
	}
	
	
	if(grow == true && ball.r < 10) {
		growing = true;
	} else {
		growing = false;
		grow = false;
	}
	
	if(growing == true) {
		ball.r += 0.1;
	}
	if(ball.r > 10) {
		ball.r = 10;
	}
	
	bigBlockR += 0.05
	if(bigBlockR >= 10) {
		bigBlockR = 0.05;
	}
	
	if(ball.r == 5) {
		ball.speed = 0.75;
	} else {
		ball.speed = 1;
	}
	
	
	//flipper blocks animations
		flipAniX += 0.25;
	if(flipAniX >= ball.r2 * 2) {
		flipAniX = 0;
	}
	
	reverseflipAniX -= 0.25;
	if(reverseflipAniX <= 0) {
		reverseflipAniX = ball.r2 * 2;
	}
	
	//next level
	if(Math.sqrt(Math.pow(ball.x - goal.x, 2) + Math.pow(ball.y - goal.y, 2)) <= ball.r + goal.r3) {
		ball.x = 100;
		ball.y = 100;
		goal.x = 200;
		goal.y = 200;
		ball.gAcc = 0.04;
		checkpoint = 0;
		gFlipper = false;
		gFlip = false;
		start = true;
		level += 1;
	}
}
