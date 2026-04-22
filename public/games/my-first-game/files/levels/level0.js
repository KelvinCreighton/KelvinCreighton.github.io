var select = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		r: 2,
		xs1: 5,
		xs2: 5,
		ys1: 5,
		ys2: 5
	};

	var num1 = 0,
		num2 = 0,
		num3 = 0,
		numSwitch = false,
		numSecret = false;
		
function level0() {
	if(play == false) {
		//play button
		ctx.beginPath();
		ctx.rect(150, 50, 212, 50);
		ctx.stroke();
		ctx.font = "30px Arial";
		ctx.fillText("Play", canvas.width / 2, 80);
		ctx.textAlign="center";
	}
	
	if(play == true && continueGame == false) {
		//buttons
		ctx.beginPath();
		ctx.rect(150, 50, 212, 50);
		ctx.stroke();
		ctx.font = "30px Arial";
		ctx.fillText("New Game", canvas.width / 2, 80);
		ctx.textAlign="center";
		
		ctx.beginPath();
		ctx.rect(150, 125, 212, 50);
		ctx.stroke();
		ctx.font = "30px Arial";
		ctx.fillText("Continue", canvas.width / 2, 150);
		ctx.textAlign="center";
	}
	
	if(play == true && continueGame == true) {
		//text
		ctx.beginPath();
		ctx.font = "25px Arial";
		ctx.fillText("Type a number then press Enter", canvas.width / 2, 80);
		ctx.textAlign="center";
	}
	
	//select tool
	ctx.beginPath();
	ctx.arc(select.x, select.y, select.r, 0, Math.PI * 2);
	ctx.fill();
	
		select.xs1 = 5;
		select.xs2 = 5;
		select.ys1 = 5;
		select.ys2 = 5;
		
		//borders
		var selectDis1 = canvas.width - select.x - select.r,
			selectDis2 = select.x - select.r,
			selectDis3 = select.y - select.r,
			selectDis4 = canvas.height - select.y - select.r;
			
	if(select.xs1 >= selectDis1) {
		select.xs1 = selectDis1;
	}
	if(select.xs2 >= selectDis2) {
		select.xs2 = selectDis2;
	}
	if(select.ys1 >= selectDis3) {
		select.ys1 = selectDis3;
	}
	if(select.ys2 >= selectDis4) {
		select.ys2 = selectDis4;
	}
		
		//movement
	if(rightPressed == true) {
		select.x += select.xs1;
	}
	if(leftPressed == true) {
		select.x -= select.xs2;
	}
	if(upPressed == true) {
		select.y -= select.ys1;
	}
	if(downPressed == true) {
		select.y += select.ys2;
	}
	
		//selecting
	if(play == false && ((spacePressed == true) && ((select.x >= 150) && (select.x <= 150 + 212)) && ((select.y >= 50) && (select.y <= 50 + 50)))) {
		play = true;
		timerState = true;
		spacePressed = false;
	}
	
	if(play == true && continueGame == false && ((spacePressed == true) && ((select.x >= 150) && (select.x <= 150 + 212)) && ((select.y >= 50) && (select.y <= 50 + 50)))) {
		level = 1;
		start = true;
		spacePressed = false;
	}
	if(play == true && continueGame == false && ((spacePressed == true) && ((select.x >= 150) && (select.x <= 150 + 212)) && ((select.y >= 125) && (select.y <= 125 + 50)))) {
		continueGame = true;
		start = true;
		spacePressed = false;
	}

		//continue game
	if(continueGame == true) {	
		if(numSecret == false) {
			ctx.beginPath();
			ctx.font = "30px Arial";
			ctx.fillText(num1 + "" + num2, canvas.width / 2, 180);
			ctx.textAlign="center";
			
			if(numSwitch == false) {
				ctx.beginPath();
				ctx.moveTo(canvas.width / 2 - 15, 183);
				ctx.lineTo(canvas.width / 2 - 1, 183);
				ctx.stroke();
			} else if(numSwitch == true) {
				ctx.beginPath();
				ctx.moveTo(canvas.width / 2 + 2, 183);
				ctx.lineTo(canvas.width / 2 + 15, 183);
				ctx.stroke();
			}
		} else if(numSecret == true) {
			ctx.beginPath();
			ctx.font = "30px Arial";
			ctx.fillText(num1 + "" + num2 + "" + num3, canvas.width / 2, 180);
			ctx.textAlign="center";
			
			ctx.beginPath();
			ctx.moveTo(canvas.width / 2 + 10, 183);
			ctx.lineTo(canvas.width / 2 + 25, 183);
			ctx.stroke();
			
			
			if(numPressed.one == true) {
				num3 = 1;
				numPressed.one = false;
				numSwitch = false;
			} else if(numPressed.two == true) {
				num3 = 2;
				numPressed.two = false;
				numSwitch = false;
			} else if(numPressed.three == true) {
				num3 = 3;
				numPressed.three = false;
				numSwitch = false;
			} else if(numPressed.four == true) {
				num3 = 4;
				numPressed.four = false;
				numSwitch = false;
			} else if(numPressed.five == true) {
				num3 = 5;
				numPressed.five = false;
				numSwitch = false;
			} else if(numPressed.six == true) {
				num3 = 6;
				numPressed.six = false;
				numSwitch = false;
			} else if(numPressed.seven == true) {
				num3 = 7;
				numPressed.seven = false;
				numSwitch = false;
			} else if(numPressed.eight == true) {
				num3 = 8;
				numPressed.eight = false;
				numSwitch = false;
			} else if(numPressed.nine == true) {
				num3 = 9;
				numPressed.nine = false;
				numSwitch = false;
			} else if(numPressed.zero == true) {
				num3 = 0;
				numPressed.zero = false;
				numSwitch = false;
			}
		}
		
		
		
		if(numSecret == false) {
			if(numPressed.one == true && numSwitch == false) {
				num1 = 1;
				numPressed.one = false;
				numSwitch = true;
			} else if(numPressed.two == true && numSwitch == false) {
				num1 = 2;
				numPressed.two = false;
				numSwitch = true;
			} else if(numPressed.three == true && numSwitch == false) {
				num1 = 3;
				numPressed.three = false;
				numSwitch = true;
			} else if(numPressed.four == true && numSwitch == false) {
				num1 = 4;
				numPressed.four = false;
				numSwitch = true;
			} else if(numPressed.five == true && numSwitch == false) {
				num1 = 5;
				numPressed.five = false;
				numSwitch = true;
			} else if(numPressed.six == true && numSwitch == false) {
				num1 = 6;
				numPressed.six = false;
				numSwitch = true;
			} else if(numPressed.seven == true && numSwitch == false) {
				num1 = 7;
				numPressed.seven = false;
				numSwitch = true;
			} else if(numPressed.eight == true && numSwitch == false) {
				num1 = 8;
				numPressed.eight = false;
				numSwitch = true;
			} else if(numPressed.nine == true && numSwitch == false) {
				num1 = 9;
				numPressed.nine = false;
				numSwitch = true;
			} else if(numPressed.zero == true && numSwitch == false) {
				num1 = 0;
				numPressed.zero = false;
				numSwitch = true;
			}
			
			if(numPressed.one == true && numSwitch == true) {
				num2 = 1;
				numPressed.one = false;
				numSwitch = false;
			} else if(numPressed.two == true && numSwitch == true) {
				num2 = 2;
				numPressed.two = false;
				numSwitch = false;
			} else if(numPressed.three == true && numSwitch == true) {
				num2 = 3;
				numPressed.three = false;
				numSwitch = false;
			} else if(numPressed.four == true && numSwitch == true) {
				num2 = 4;
				numPressed.four = false;
				numSwitch = false;
			} else if(numPressed.five == true && numSwitch == true) {
				num2 = 5;
				numPressed.five = false;
				numSwitch = false;
			} else if(numPressed.six == true && numSwitch == true) {
				num2 = 6;
				numPressed.six = false;
				numSwitch = false;
			} else if(numPressed.seven == true && numSwitch == true) {
				num2 = 7;
				numPressed.seven = false;
				numSwitch = false;
			} else if(numPressed.eight == true && numSwitch == true) {
				num2 = 8;
				numPressed.eight = false;
				numSwitch = false;
			} else if(numPressed.nine == true && numSwitch == true) {
				num2 = 9;
				numPressed.nine = false;
				numSwitch = false;
			} else if(numPressed.zero == true && numSwitch == true) {
				num2 = 0;
				numPressed.zero = false;
				numSwitch = false;
			}
		}
		
		if(num1 == 4 && num2 == 1) {
			numSecret = true;
		}
		if(num1 == 4 && num2 == 1 && num3 == 3 && enterPressed == true) {
			window.location.href = "http://www.mspaintadventures.com/";
		}
		
		if(enterPressed == true) {
			level = num1 * 10 + num2;
			
			num1 = 0;
			num2 = 0;
			enterPressed = false;
		}
	}
}