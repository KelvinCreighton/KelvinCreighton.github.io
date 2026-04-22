function LoadLevel()
{
	Cubes = [];
	// Starting platform
	for (let z = 0; z < 5; z++)
		for (let x = 0; x < 5; x++)
			Cubes.push(new Cube(x*2-5, 2, z*2-5, 2, 1, 2));
		
	if (Level == 1) {
		
		Cubes.push(new Cube(-3, 1, -10, 3, 3, 3));
		Cubes.push(new Cube(0, 1, -15, 3, 3, 3));
		createMoveBlock(5, 1, -20, 3, 3, 3, [10, 0, 0], [0.1, 0, 0]);
		createMoveBlock(10, 1, -20, 3, 3, 3, [0, 5, 0], [0, 0.1, 0]);
		Cubes.push(new Cube(5, -5, -25, 3, 3, 3));
		
	} else if (Level == 2) {
		
	}
}

function DrawLevel()
{
	
}

function createMoveBlock(x, y, z, w, h, l, movePos, speed)
{
	Cubes.push(new Cube(x, y, z, w, h, l));
	Cubes[Cubes.length-1].moveBlock(movePos, speed)
}