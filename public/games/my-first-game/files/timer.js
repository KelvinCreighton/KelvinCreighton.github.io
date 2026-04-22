function timer() {
	//timer
	if(timerState == true) {
		if(timerMil >= 100) {
			timerSec += 1;
			timerMil = 0;
		}
		if(timerSec >= 60) {
			timerMin += 1;
			timerSec = 0;
		}
		if(timerMin >= 60) {
			timerHou += 1;
			timerMin = 0;
		}
		
		timerMil += 1;
	}
	
	if(tPressed == true) {
		showTimer = !showTimer;
		tPressed = false;
	}
	
	if(showTimer == true) {
			document.getElementById("timer").innerHTML = "Timer: " + timerHou + "." + timerMin + "." + timerSec + "." + timerMil;
	} else {
		document.getElementById("timer").innerHTML = "&nbsp;";
	}
	
	
	if(pPressed == true) {
		timerState = !timerState;
		pPressed = false;
	}
}