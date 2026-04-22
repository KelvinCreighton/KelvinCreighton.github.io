//canvas vars
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = {
		x: 100,
		y: 100,
		r: 10,
		r2: 10,
		xs1: 0,
		xs2: 0,
		speed: 1,
		g: 0,
		gAcc: 0.04
	};
	
var goal = {
		x: 200,
		y: 100,
		r1: 1,
		r2: 10,
		r3: 10
	},
	sizeChange1 = 0.05,
	sizeChange2 = -0.05;
	
var screen = {
		x: 0,
		y: 0
	};
	
	
var level = 0,
	play = false,
	continueGame = false,
	start = true,
	timerState = false,
	timerMil = 0,
	timerSec = 0,
	timerMin = 0,
	timerHou = 0,
	showTimer = false,
	gFlipper = false,
	gFlip = true,
	shrink = false,
	shrinking = false,
	grow = false,
	growing = false,
	extraState = true,
	helpState = false,
	checkpoint = 0;
	
	//buttons
var wPressed = false,
	aPressed = false,
	sPressed = false,
	dPressed = false,
	spacePressed = false,
	chChange = false,
	leftPressed = false,
	rightPressed = false,
	upPressed = false,
	downPressed = false,
	tPressed = false,
	rPressed = false,
	xPressed = false,
	hPressed = false,
	numPressed = {
			one: false,
			two: false,
			three: false,
			four: false,
			five: false,
			six: false,
			seven: false,
			eight: false,
			nine: false,
			zero: false
		},
	enterPressed = false,
	pPressed = false,
	escPressed = false;
	
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.which == 87) {
        wPressed = true;
    }
    if(e.which == 65) {
        aPressed = true;
    }
	if(e.which == 83) {
        sPressed = true;
    }
	if(e.which == 68) {
        dPressed = true;
    }
	if(e.which == 32) {
        spacePressed = true;
    }
	if(e.which == 37) {
        leftPressed = true;
    }
	if(e.which == 39) {
        rightPressed = true;
    }
	if(e.which == 38) {
        upPressed = true;
    }
	if(e.which == 40) {
        downPressed = true;
    }
	if(e.which == 84) {
        tPressed = true;
    }
	if(e.which == 82) {
        rPressed = true;
    }
	if(e.which == 88) {
        xPressed = true;
    }
	if(e.which == 72) {
        hPressed = true;
    }
	if(e.which == 49) {
        numPressed.one = true;
    }
	if(e.which == 50) {
        numPressed.two = true;
    }
	if(e.which == 51) {
        numPressed.three = true;
    }
	if(e.which == 52) {
        numPressed.four = true;
    }
	if(e.which == 53) {
        numPressed.five = true;
    }
	if(e.which == 54) {
        numPressed.six = true;
    }
	if(e.which == 55) {
        numPressed.seven = true;
    }
	if(e.which == 56) {
        numPressed.eight = true;
    }
	if(e.which == 57) {
        numPressed.nine = true;
    }
	if(e.which == 48) {
        numPressed.zero = true;
    }
	if(e.which == 13) {
        enterPressed = true;
    }
	if(e.which == 80) {
        pPressed = true;
    }
	if(e.which == 27) {
        escPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.which == 87) {
        wPressed = false;
    }
    if(e.which == 65) {
        aPressed = false;
    }
	if(e.which == 83) {
        sPressed = false;
    }
	if(e.which == 68) {
        dPressed = false;
    }
	if(e.which == 32) {
        spacePressed = false;
		chChange = false;
    }
	if(e.which == 37) {
        leftPressed = false;
    }
	if(e.which == 39) {
        rightPressed = false;
    }
	if(e.which == 38) {
        upPressed = false;
    }
	if(e.which == 40) {
        downPressed = false;
    }
	if(e.which == 84) {
        tPressed = false;
    }
	if(e.which == 82) {
        rPressed = false;
    }
	if(e.which == 88) {
        xPressed = false;
    }
	if(e.which == 72) {
        hPressed = false;
    }
	if(e.which == 49) {
        numPressed.one = false;
    }
	if(e.which == 50) {
        numPressed.two = false;
    }
	if(e.which == 51) {
        numPressed.three = false;
    }
	if(e.which == 52) {
        numPressed.four = false;
    }
	if(e.which == 53) {
        numPressed.five = false;
    }
	if(e.which == 54) {
        numPressed.six = false;
    }
	if(e.which == 55) {
        numPressed.seven = false;
    }
	if(e.which == 56) {
        numPressed.eight = false;
    }
	if(e.which == 57) {
        numPressed.nine = false;
    }
	if(e.which == 48) {
        numPressed.zero = false;
    }
	if(e.which == 13) {
        enterPressed = false;
    }
	if(e.which == 80) {
        pPressed = false;
    }
	if(e.which == 27) {
        escPressed = false;
    }
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	if(level >= 1) {
		//ball
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
		ctx.stroke();
		
		//goal
		ctx.beginPath();
		ctx.arc(goal.x, goal.y, goal.r1, 0, Math.PI * 2);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(goal.x, goal.y, goal.r2, 0, Math.PI * 2);
		ctx.stroke();
	}

	//draw functions
		timer();
		help();
		extra();
		
	if(level == 0) {
		level0();
	} 
	else if(level == 1) {
		level1();
	} 
	else if(level == 2) {
		level2();
	} 
	else if(level == 3) {
		level3();
	}
	else if(level == 4) {
		level4();
	}
	else if(level == 5) {
		level5();
	}
	else if(level == 6) {
		level6();
	}
	else if(level == 7) {
		level7();
	}
	else if(level == 9) {
		level8();
	}
	else if(level == 9) {
		level9();
	}
	else if(level == 10) {
		level10();
	}
	
	if(level >= 1) {
		mechanics();
	}
	
	//game mechanics
		//goal
		if(level >= 1) {
			if(goal.r1 >= 10) {
				sizeChange1 = -0.05;
			}
			if(goal.r2 >= 10) {
				sizeChange2 = -0.05;
			}
			if(goal.r1 <= 1) {
				sizeChange1 = 0.05;
			}
			if(goal.r2 <= 1) {
				sizeChange2 = 0.05;
			}
				goal.r1 += sizeChange1;
				goal.r2 += sizeChange2;
		}
		//ball
	var ballDis1 = canvas.width - ball.x - ball.r,
		ballDis2 = ball.x - ball.r,
		ballDis3 = canvas.height - ball.y - ball.r,
		ballDis4 = 0 - ball.y + ball.r;
		
		ball.xs1 = ball.speed;
		ball.xs2 = ball.speed;
		
	if(ball.xs1 >= ballDis1) {
		ball.xs1 = ballDis1;
	}
	if(ball.xs2 >= ballDis2) {
		ball.xs2 = ballDis2;
	}
	
		ball.g += ball.gAcc;
		
	if(ball.g >= ballDis3) {
		ball.g = ballDis3;
	}
	
	if(ballDis4 >= ball.g && ball.g < 0) {
		ball.g = ballDis4;
	}
	
	
		//start
		
	if(rPressed == true) {
		start = true;
		rPressed = false;
	}
	
	if(start == true) {
		ball.gAcc = 0.04;
		gFlipper = false;
		ball.r = 10;
		shrink = false;
		grow = false;
	}
	
	
	if(escPressed == true) {
		canvas.width = 512;
		canvas.height = 256;
		screen.x = 0;
		screen.y = 0;
		level = 0;
		play = false;
		continueGame = false;
		timerState = false;
		num1 = 0;
		num2 = 0;
		num3 = 0;
		numSwitch = false;
		numSecret = false;
		escPressed = false;
	}

}

setInterval(draw, 10);