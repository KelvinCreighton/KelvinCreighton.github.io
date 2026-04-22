
function EmptyMatrix()
{
  return new Mat3(EmptyVector(), EmptyVector(), EmptyVector());
}

function IdentityMatrix()
{
	return new Mat3(
				new Vec3( 1, 0, 0 ),
				new Vec3( 0, 1, 0 ),
				new Vec3( 0, 0, 1 )
			);
}

class Mat3
{
  constructor(x, y, z)
  {
    // x, y, z in terms of vectors as columns in the matrix
    this.matrix = [x, y, z];
  }
  
  MatMul(m)
  {
    let result = EmptyMatrix();
    
    for (let i = 0; i < 3; i++) {
      let resultVec = EmptyVector();
      
      // Calculate the dot product of the row of matrix1 and the column of matrix2
      let column = m.matrix[i];
      for (let j = 0; j < 3; j++) {
        // Convert the row of matrix1 to a vectors
        let row = new Vec3(this.matrix[0].vector[j], this.matrix[1].vector[j], this.matrix[2].vector[j]);
        
        // Add the result into indices in an empty vector
        resultVec.vector[j] = column.Dot(row);
      }
      
      // Add each resulting vector into columns in an empty matrix
      result.matrix[i] = resultVec;
    }
    return result;
  }
  
  ToVector()
  {
	  return this.matrix[0];
  }
  
  Display()
  {
    println("--------------------------");
	print = "";
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        print += "["+x+","+y+"]: " + this.matrix[x].vector[y] + " ";
      }
	  print += "\n";
    }
	println(print);
  }
}