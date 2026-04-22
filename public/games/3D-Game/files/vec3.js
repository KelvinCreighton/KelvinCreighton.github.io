
function EmptyVector()
{
  return new Vec3(0, 0, 0);
}

class Vec3
{  
  constructor(x, y, z)
  {
    this.vector = [x, y, z];
  }
  
  x()
  {
    return this.vector[0];
  }
  
  y()
  {
    return this.vector[1];
  }
  
  z()
  {
    return this.vector[2];
  }
  
  Dot(v)
  {
    let sum = 0;
    for (let i = 0; i < 3; i++)
      sum += this.vector[i]*v.vector[i];
    return sum;
  }
  
  Scale(scaler)
  {
    for (let i = 0; i < 3; i++)
      this.vector[i] *= scaler;
  }
  
  ToMatrix()
  {
	  return new Mat3(this, EmptyVector(), EmptyVector());
  }
  
  Display()
  {
    println("------");
	let print = ""
    for (let i = 0; i < 3; i++)
      print += "["+i+"]: " + this.vector[i] + "\n";
	println(print);
  }
}