let AngleX = 0;
let AngleY = 0;
let AngleZ = 0;

let FOV = 2;

let RotationMatrixX = IdentityMatrix();
let RotationMatrixY = IdentityMatrix();
let RotationMatrixZ = IdentityMatrix();


function RotateX(angle)
{
	AngleX += angle;
	AngleX %= PI*2;
	RotationMatrixX = new Mat3(
		new Vec3( 1, 0, 0 ),
		new Vec3( 0, cos(AngleX), -sin(AngleX) ),
		new Vec3( 0, sin(AngleX), cos(AngleX) )
	);
}
function RotateY(angle)
{
	AngleY += angle;
	AngleY %= PI*2;
	RotationMatrixY = new Mat3(
		new Vec3( cos(AngleY), 0, -sin(AngleY) ),
		new Vec3( 0, 1, 0 ),
		new Vec3( sin(AngleY), 0, cos(AngleY) )
	);
}
function RotateZ(angle)
{
	AngleZ += angle;
	AngleZ %= PI*2;
	RotationMatrixZ = new Mat3(
		new Vec3( cos(AngleZ), -sin(AngleZ), 0),
		new Vec3( sin(AngleZ), cos(AngleZ), 0 ),
		new Vec3( 0, 0, 1 )
	);
}


class Cube
{
	constructor(x, y, z, w, h, l)
	{
		this.x = x;
		this.y = y;
		this.z = z;
		this.l = l;
		this.w = w;
		this.h = h;
		
		this.vx = 0;
		this.vy = 0;
		this.vz = 0;
		
		this.projected = setArray(8, 0);
		
		this.type = 0;
		
		this.movePos = [0, 0, 0];
		this.moveCounter = [0, 0, 0];
		this.moveSpeed = [0, 0, 0];
	}
	
	moveBlock(movePos, speed)
	{
		this.type = 1;
		this.movePos = [...movePos];
		this.moveCounter = [...movePos];
		this.moveSpeed = speed;
	}
	
	update()
	{
		if (this.type == 1) {
			this.x += this.moveSpeed[0];
			this.y += this.moveSpeed[1];
			this.z += this.moveSpeed[2];
			
			this.moveCounter[0] += this.moveSpeed[0];
			this.moveCounter[1] += this.moveSpeed[1];
			this.moveCounter[2] += this.moveSpeed[2];
			
			for (let i = 0; i < 3; i++) {
				if (this.movePos[i] > 0 && (this.moveCounter[i] > this.movePos[i] || this.moveCounter[i] < 0))
					this.moveSpeed[i] *= -1;
				if (this.movePos[i] < 0 && (this.moveCounter[i] > 0 || this.moveCounter[i] < this.movePos[i]))
					this.moveSpeed[i] *= -1;
			}
		}
		
		
		this.x += Player.pos[0]-this.vx;
		this.y += Player.pos[1]-this.vy;
		this.z += Player.pos[2]-this.vz;
		
		this.vx = Player.pos[0];
		this.vy = Player.pos[1];
		this.vz = Player.pos[2];
	}
	
	collideLeft()
	{
		return this.x+Player.vel[0] >= -(this.w+Player.size) && this.x <= Player.size
		&& this.z <= Player.size && this.z >= -(this.l+Player.size)
		&& this.y <= Player.height && this.y >= -(this.h+Player.size);
	}
	
	collideRight()
	{
		return this.x+Player.vel[0] <= Player.size && this.x > -(this.w+Player.size)
		&& this.z < Player.size && this.z >= -(this.l+Player.size)
		&& this.y < Player.height && this.y >= -(this.h+Player.size);
	}
	
	collideTop()
	{
		
		if (this.y+Player.vel[1] <= Player.height && this.y >= -(this.h+Player.size)
		&& this.x < Player.size && this.x > -(this.w+Player.size)
		&& this.z < Player.size && this.z > -(this.l+Player.size)) {
			if (this.type == 1) { 	// Move player with move block
				Player.pos[0] -= this.moveSpeed[0];
				Player.pos[1] -= this.moveSpeed[1];
				Player.pos[2] -= this.moveSpeed[2];
			}
			
			return true;
		}
		return false;
	}
	
	collideBottom()
	{
		return this.y+Player.vel[1] >= -(this.h+Player.size) && this.y < Player.height
		&& this.x < Player.size && this.x > -(this.w+Player.size)
		&& this.z < Player.size && this.z > -(this.l+Player.size);
	}
	
	collideFront()
	{
		return this.z+Player.vel[2] <= Player.size && this.z > -(this.l+Player.size)
		&& this.x < Player.size && this.x > -(this.w+Player.size)
		&& this.y < Player.height && this.y > -(this.h+Player.size)
	}
	
	collideBack()
	{
		return this.z+Player.vel[2] >= -(this.l+Player.size) && this.z < Player.size
		&& this.x < Player.size && this.x > -(this.w+Player.size)
		&& this.y < Player.height && this.y > -(this.h+Player.size);
	}
	
	draw()
	{
		let points = [
			[this.x       , this.y       , this.z       ],
			[this.x+this.w, this.y       , this.z       ],
			[this.x+this.w, this.y+this.h, this.z       ],
			[this.x       , this.y+this.h, this.z       ],
			[this.x       , this.y       , this.z+this.l],
			[this.x+this.w, this.y       , this.z+this.l],
			[this.x+this.w, this.y+this.h, this.z+this.l],
			[this.x       , this.y+this.h, this.z+this.l]
		]
		
		for (let i = 0; i < points.length; i++) {
			let point = new Vec3(points[i][0], points[i][1], points[i][2]);
			let pointMat = point.ToMatrix();
			let rotatedMatrix = RotationMatrixZ.MatMul(pointMat);
			rotatedMatrix = RotationMatrixY.MatMul(rotatedMatrix);
			rotatedMatrix = RotationMatrixX.MatMul(rotatedMatrix);
			
			let rotatedPoint = rotatedMatrix.ToVector();
			
			let zEffect = -rotatedPoint.z();
			zEffect = max(zEffect, 0.0001);
			
			let projection = EmptyMatrix();
			
			// Projection matrix onto screen
			projection = new Mat3(
			  new Vec3( 1/zEffect, 0, 0 ),
			  new Vec3( 0, 1/zEffect, 0 ),
			  EmptyVector()
			);
			
			let projected2dMatrix = projection.MatMul(rotatedMatrix);
			let projected2d = projected2dMatrix.ToVector();
			projected2d.Scale(FOV*100);
			
			this.projected[i] = projected2d;
		}
		
		// Connecting the points with edges
		strokeWeight(3);
		for (let i = 0; i < 4; i++) {
			Edges(i, (i+1)%4, this.projected)
			Edges(i+4, ((i+1)%4)+4, this.projected) 
			Edges(i, i+4, this.projected)
			
		}
	
	
		function Edges(i, j, points)
		{
			if (points[i] != null && points[j] != null) {
				let a = points[i];
				let b = points[j];
				line(a.x(), a.y(), b.x(), b.y());
				stroke("#ffffff");
			}
		}
	}
}