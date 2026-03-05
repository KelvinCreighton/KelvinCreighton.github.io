let canvas = document.getElementById("Canvas");
let Width = canvas.width;
let Height = canvas.height;
let Canvas = canvas.getContext("2d")

let PointerLock = false;

let mouseX = 0;
let mouseY = 0;
let mouseMovementX = 0;
let mouseMovementY = 0;
let mousePress;
let mouseClick;


function CanvasPointerLock()
{
	canvas.requestPointerLock();
}

function pointerlockchange()
{
	PointerLock = !PointerLock;
}

Canvas.canvas.addEventListener("mousemove", mouseCoors);
document.addEventListener('pointerlockchange', pointerlockchange)
document.addEventListener("mousedown", mousePressed);
document.addEventListener("mouseup", mouseReleased);

function mouseCoors(e) {
	mouseMovementX = e.movementX;
	mouseMovementY = e.movementY;
	
	mouseX = e.clientX - canvas.offsetLeft;
	mouseY = e.clientY - canvas.offsetTop;
}

function mousePressed()
{
	// mousePressed runs before pointerlockchange so setting
	// PointerLock to false actually sets it to true 
	// after pointerlockchange runs
	// Kinda unconventional but I'm lazy so deal with it
	PointerLock = false;
	
	mousePress = true;
	mouseClick = true;
}

function mouseReleased()
{
	mousePress = false;
}


function background(colour)
{
	restore();
	rect(0, 0, Width, Height);
	fill(colour);
	save();
}

function rotate(amount)
{
	Canvas.rotate(amount);
}

function translate(x, y)
{
	Canvas.translate(x, y);
}

function save()
{
	Canvas.save();
}

function restore()
{
	Canvas.restore();
}

function canvasGrid(w, h, weight=1)
{
	strokeWeight(weight);
	for (let x = 1; x < Width; x += w) {
		line(x, 0, x, Height);
		stroke("#000000");
	}
	for (let y = 1; y < Height; y += h) {
		line(0, y, Width, y);
		stroke("#000000");
	}
}

/*
--------
  Text
--------
*/
function textAlign(type)
{
	Canvas.textAlign = type;
}

function getTextAlign()
{
	return Canvas.textAlign;
}

function textSize(size)
{
	Canvas.font = size.toString() + "px sans-serif";
}

function getTextSize()
{
	return Canvas.font.split('p')[0];
}

function fillTextButton(message, x, y, colour)
{
	fillText(message, x, y, colour);
	
	let align = getTextAlign();
	let ySize = getTextSize()*7/10;
	let xSize = ySize * message.length;
	
	// Click detection with center alignment
	if (mouseClick) {
		if (align == "center" && mouseX > x-xSize/2 && mouseX < x+xSize/2 && mouseY > y-ySize && mouseY < y)
			return true;
		else if (align == "left" && mouseX > x && mouseX < x+xSize && mouseY > y-ySize && mouseY < y)
			return true;
		else if (align == "right" && mouseX > x-size && mouseX < x && mouseY > y-ySize && mouseY < y)
			return true;
	}
	return false;
}

function fillText(message, x, y, colour)
{
	Canvas.fillStyle = colour;
	Canvas.fillText(message, x, y);
}

function strokeText(message, x, y, colour)
{
	Canvas.strokeStyle = colour;
	Canvas.strokeText(message, x, y);
}

/*
------------
   Colour
------------
*/
function fill(colour)
{
	Canvas.fillStyle = colour;
	Canvas.fill();
}

function stroke(colour)
{
	Canvas.strokeStyle = colour;
	Canvas.stroke();
}

function strokeWeight(weight)
{
	Canvas.lineWidth = weight;
}


/*
------------
   Shapes
------------
*/
function rect(x, y, w, h)
{
	Canvas.beginPath();
	Canvas.rect(x, y, w, h);
}

function line(x1, y1, x2, y2)
{
	Canvas.beginPath();
	Canvas.moveTo(x1, y1);
	Canvas.lineTo(x2, y2);
}

function arc(x, y, r, start, end)
{
	Canvas.beginPath();
	Canvas.arc(x, y, abs(r), start, end);
}