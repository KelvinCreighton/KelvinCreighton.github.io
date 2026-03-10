function help() {
	if(hPressed == true) {
		helpState = !helpState;
		hPressed = false;
	}
	
	if(helpState == true) {
		document.getElementById("help").innerHTML = "&emsp; &emsp; <u>Controls</u>";
		document.getElementById("hPress").innerHTML = 'H: Toggle "Controls" Display';
		document.getElementById("tPress").innerHTML = 'T: Toggle "Timer" Display';
		document.getElementById("pPress").innerHTML = 'P: Pause/Unpause "Timer"';
		document.getElementById("leftPress").innerHTML = "Left Arrow: Move Cursor Left";
		document.getElementById("rightPress").innerHTML = "Right Arrow: Move Cursor Right";
		document.getElementById("upPress").innerHTML = "Up Arrow: Move Cursor Up";
		document.getElementById("downPress").innerHTML = "Down Arrow: Move Cursor Down";
		document.getElementById("spacePress").innerHTML = "Space: Select With Cursor and Flip the Ball's Gravity";
		document.getElementById("rPress").innerHTML = 'R: Restart From Last Checkpoint';
		document.getElementById("aPress").innerHTML = "A: Move Ball Left";
		document.getElementById("dPress").innerHTML = "D: Move Ball Right";
		document.getElementById("wPress").innerHTML = "W: To Make The Ball Jump";
		document.getElementById("mPress").innerHTML = "M: For More Info";
	} else {
		document.getElementById("help").innerHTML = "";
		document.getElementById("hPress").innerHTML = "";
		document.getElementById("tPress").innerHTML = "";
		document.getElementById("pPress").innerHTML = "";
		document.getElementById("leftPress").innerHTML = "";
		document.getElementById("rightPress").innerHTML = "";
		document.getElementById("upPress").innerHTML = "";
		document.getElementById("downPress").innerHTML = "";
		document.getElementById("spacePress").innerHTML = "";
		document.getElementById("rPress").innerHTML = "";
		document.getElementById("aPress").innerHTML = "";
		document.getElementById("dPress").innerHTML = "";
		document.getElementById("wPress").innerHTML = "";
		document.getElementById("mPress").innerHTML = "";
	}
}