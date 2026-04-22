let Player;
let Cubes;

let GRAVITY = 0.01;
let Controls;

let Level;
let NextLevel;

let invertMouse = 1;

let DEV = true;


function Main()
{
	Setup();
	setInterval(Update, 20);	// 50fps
	//Update();
}


function Setup()
{
	Level = 1;
	NextLevel = 0;
	
	Player = {
		pos: [0, 0, 0],
		vel: [0, 0, 0],
		acc: [0, 0, 0],
		size: 0.5,
		height: 1.5,
		moveSpeed: 0.15,
		jumpHeight: 0.2,
		grounded: false,
		running: false,
		checkpoint: [0, 0, 0]
	};
	
	Controls = setArray(30, false);
	
	LoadLevel();
}

function DevStuff()
{
	if (DEV) {
		let pos = "POS: &emsp; X: " + floor(Player.pos[0], 2) + 
			" &emsp; Y: " + floor(Player.pos[1], 2) +
			" &emsp; Z: " + floor(Player.pos[2], 2);
		document.getElementById("pos").innerHTML = pos;
		let vel = "VEL: &emsp; X: " + floor(Player.vel[0], 2) + 
			" &emsp; Y: " + floor(Player.vel[1], 2) +
			" &emsp; Z: " + floor(Player.vel[2], 2);
		document.getElementById("vel").innerHTML = vel;
		let acc = "ACC: &emsp; X: " + floor(Player.acc[0], 2) + 
			" &emsp; Y: " + floor(Player.acc[1], 2) +
			" &emsp; Z: " + floor(Player.acc[2], 2) +
			" &emsp; Total: " + floor(abs(Player.acc[0])+abs(Player.acc[1])+abs(Player.acc[2]), 2);
		document.getElementById("acc").innerHTML = acc;
		let angles = "AxisX: " + floor(AngleX, 2) +
			" &emsp; AxisY: " + floor(AngleY, 2) +
			" &emsp; AxisZ: " + floor(AngleZ, 2);
		document.getElementById("angles").innerHTML = angles;
		document.getElementById("grounded").innerHTML = "Grounded: " + Player.grounded + " &emsp; Running (SHIFT): " + Player.running;
		document.getElementById("invertMouse").innerHTML = "Invert Mouse (I): " + invertMouse + " &emsp; (R): Reset"; 
		
		if (Controls[6])
			RotateZ(0.05);
		if (Controls[7])
			RotateZ(-0.05);
		if (Controls[8] || Controls[9]) {
			AngleZ = 0;
			RotateZ(0);
		}
		
	} else {
		document.getElementById("coors").innerHTML = "";
		document.getElementById("grounded").innerHTML = "";
	}
}


function Update()
{
	DevStuff();
	
	if (mouseClick)
		CanvasPointerLock();
	
	background("#000000");
	translate(Width/2.0, Height/2.0);
	
	
	// Update and draw level
	if (NextLevel != Level) {
		LoadLevel();
		NextLevel = Level;
	}
	DrawLevel();
	
	
	
	let mouseSpeed = 0.015;
	
	// Bound x rotation axis
	if (AngleX >= PI/2) {
		AngleX = PI/2;
		mouseMovementY = max(mouseMovementY, 0);
	} else if (AngleX <= -PI/2) {
		AngleX = -PI/2
		mouseMovementY = min(mouseMovementY, 0);
	}
	
	// Add running speed
	let playerMoveSpeed = Player.moveSpeed;
	if (Controls[5])
		Player.running = true;
	if (!Controls[5] && !Controls[0])
		Player.running = false;
	if (Player.running)
		playerMoveSpeed *= 3/2;
	
	
	Player.acc = [0, 0, 0];
	Player.vel[0] = 0;
	Player.vel[2] = 0;
	
	
	if (PointerLock) {
		// Player movement
			// Slow movement when combining x and z movements
		if ((Controls[0] || Controls[1]) && (Controls[2] || Controls[3]))
			playerMoveSpeed *= 2/3;
		
			// Z movement (forward, backward)
		if (Controls[0]) {
			Player.acc[2] += cos(AngleY)*playerMoveSpeed;
			Player.acc[0] -= sin(AngleY)*playerMoveSpeed;
		}
		if (Controls[1]) {
			Player.acc[2] -= cos(AngleY)*playerMoveSpeed;
			Player.acc[0] += sin(AngleY)*playerMoveSpeed;
		}
			// X movement (left, right)
		if (Controls[2]) {
			Player.acc[0] += cos(AngleY)*playerMoveSpeed;
			Player.acc[2] += sin(AngleY)*playerMoveSpeed;
		}
		if (Controls[3]) {
			Player.acc[0] -= cos(AngleY)*playerMoveSpeed;
			Player.acc[2] -= sin(AngleY)*playerMoveSpeed;
		}
		
		//let totalVelocity = pow(Player.vel[0], 2) + pow(Player.vel[2], 2);
		
		//if (totalVelocity >= playerMoveSpeed*playerMoveSpeed)
			//Player.acc = [0, 0, 0];	
		
		
			// Jump
		if (Controls[4] && Player.grounded)
			Player.vel[1] = Player.jumpHeight;
		
		// Player rotation
		RotateY(mouseMovementX*mouseSpeed);
		RotateX(invertMouse*mouseMovementY*mouseSpeed);
	}
	
	Player.vel[0] += Player.acc[0];
	Player.vel[1] += Player.acc[1];
	Player.vel[2] += Player.acc[2];
	
	
	// Apply gravity
	Player.vel[1] -= GRAVITY;
	
	// Reset grounded before the loop
	Player.grounded = false;
	
	for (let cube of Cubes) {
		cube.update();
		cube.draw();
		
		// Collision detection
		if (cube.collideTop()) {
			Player.vel[1] = max(Player.vel[1], 0);
			Player.grounded = true;
		}
		
		else if (cube.collideLeft())
			Player.vel[0] = min(Player.vel[0], 0);
		else if (cube.collideRight())
			Player.vel[0] = max(Player.vel[0], 0);
		
		
		else if (cube.collideBottom())
			Player.vel[1] = min(Player.vel[1], 0);
		
		else if (cube.collideBack())
			Player.vel[2] = min(Player.vel[2], 0);
		else if (cube.collideFront())
			Player.vel[2] = max(Player.vel[2], 0);
	}
	
	Player.pos[0] += Player.vel[0];
	Player.pos[1] += Player.vel[1];
	Player.pos[2] += Player.vel[2];
	
	
	
	mouseClick = false;
	mouseMovementX = 0;
	mouseMovementY = 0;
	
	// Reset player
	if (Controls[12]) {
		Player.pos = [...Player.checkpoint];
		Player.vel = [0, 0, 0];
		Player.acc = [0, 0, 0];
		AngleX = 0;
		AngleY = 0;
		AngleZ = 0;
		
		LoadLevel();
	}
	println(Player.checkpoint[0]);
}


document.addEventListener("keydown", KeyDownHandler, false);
document.addEventListener("keyup", KeyUpHandler, false);

function KeyDownHandler(e)
{
	//println(e.key);
    if (e.key == 'w' || e.key == 'W')
        Controls[0] = true;
    if (e.key == 's' || e.key == 'S')
        Controls[1] = true;
	if (e.key == 'a' || e.key == 'A')
        Controls[2] = true;
	if (e.key == 'd' || e.key == 'D')
        Controls[3] = true;
	if (e.key == ' ')
        Controls[4] = true;
	if (e.key == "Shift")
        Controls[5] = true;
	if (e.key == "ArrowLeft")
        Controls[6] = true;
	if (e.key == "ArrowRight")
        Controls[7] = true;
	if (e.key == "ArrowUp")
        Controls[8] = true;
	if (e.key == "ArrowDown")
        Controls[9] = true;
	if (e.key == '[')
        Controls[10] = true;
	if (e.key == ']')
        Controls[11] = true;
	if (e.key == 'r' || e.key == 'R')
        Controls[12] = true;
	if (e.key == 'x' || e.key == 'X')
        DEV = !DEV;
}

function KeyUpHandler(e)
{
    if (e.key == 'w' || e.key == 'W')
        Controls[0] = false;
    if (e.key == 's' || e.key == 'S')
        Controls[1] = false;
	if (e.key == 'a' || e.key == 'A')
        Controls[2] = false;
	if (e.key == 'd' || e.key == 'D')
        Controls[3] = false;
	if (e.key == ' ')
        Controls[4] = false;
	if (e.key == "Shift")
        Controls[5] = false;
	if (e.key == "ArrowLeft")
        Controls[6] = false;
	if (e.key == "ArrowRight")
        Controls[7] = false;
	if (e.key == "ArrowUp")
        Controls[8] = false;
	if (e.key == "ArrowDown")
        Controls[9] = false;
	if (e.key == '[')
        Controls[10] = false;
	if (e.key == ']')
        Controls[11] = false;
	if (e.key == 'r' || e.key == 'R')
        Controls[12] = false;
	if (e.key == 'i' || e.key == 'I')
		invertMouse *= -1;
}


Main();