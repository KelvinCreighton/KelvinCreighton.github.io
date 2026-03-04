function extra() {
	if(xPressed == true) {
		extraState = !extraState;
		xPressed = false;
	}
	
	if(extraState == true) {
		if(gFlipper == true) {
			document.getElementById("gFlip").innerHTML = "Gravity Flipper: On &nbsp; Screen X: " + screen.x;
		} else {
			document.getElementById("gFlip").innerHTML = "Gravity Flipper: Off &nbsp; Screen X: " + screen.x;
		}
		
		if(ball.gAcc == 0.04) {
			document.getElementById("gravity").innerHTML = "Gravity: 1 &emsp; &emsp; &emsp; &nbsp; Screen Y: " + screen.y;
		} else if(ball.gAcc == -0.04) {
			document.getElementById("gravity").innerHTML = "Gravity: -1 &emsp; &emsp; &emsp; &nbsp; Screen Y: " + screen.y;
		} else if(ball.gAcc == 0.02) {
			document.getElementById("gravity").innerHTML = "Gravity: 1/2 &emsp; &emsp; &emsp; Screen Y: " + screen.y;
		} else if(ball.gAcc == -0.02) {
			document.getElementById("gravity").innerHTML = "Gravity: -1/2 &emsp; &emsp; &emsp; Screen Y: " + screen.y;
		}
		
		document.getElementById("info").innerHTML = "&emsp; &emsp; <u>Info<u>";
		document.getElementById("level").innerHTML = "Level: " + level + "&emsp; &emsp; &emsp; &nbsp; &nbsp; Ball X: " + Math.floor(ball.x) + "&emsp; &emsp; &emsp; Canvas Width: " + canvas.width;
		document.getElementById("checkpoint").innerHTML = "Checkpoint: " + checkpoint + "&emsp; &emsp; Ball Y: " + Math.floor(ball.y) + "&emsp; &emsp; &emsp; Canvas Height: " + canvas.height;
		document.getElementById("size").innerHTML = "Size: " + Math.floor(ball.r) + "&emsp; &emsp; &emsp; &emsp; &nbsp; Gravity Flipper Active: " + gFlip;
		
	} else {
		document.getElementById("info").innerHTML = "";
		document.getElementById("level").innerHTML = "";
		document.getElementById("checkpoint").innerHTML = "";
		document.getElementById("gFlip").innerHTML = "";
		document.getElementById("gravity").innerHTML = "";
		document.getElementById("size").innerHTML = "";
	}
}