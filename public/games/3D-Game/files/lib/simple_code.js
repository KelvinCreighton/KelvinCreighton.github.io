// ========
//   Math
// ========

var PI = Math.PI;

function pow(n, m)
{
	return Math.pow(n, m);
}

function cos(n)
{
	return Math.cos(n);
}

function sin(n)
{
	return Math.sin(n);
}

function floor(n, m=0)
{
	m = pow(10, m)
	return Math.floor(n * m) / m;
}

function ceil(n)
{
	return Math.ceil(n);
}

function min(n, m)
{
	return Math.min(n, m);
}

function max(n, m)
{
	return Math.max(n, m);
}

function minMax(n, m1, m2)
{
	n = max(n, m1);
	n = min(n, m2);
	return n;
}

function abs(n)
{
	return Math.abs(n);
}

function sqrt(n)
{
	return Math.sqrt(n);
}


// ======================
//      MATRIX MATH
// ======================

function setArray(size, dataType)
{
	let newArray = [];
	for (let i = 0; i < size; i++)
		newArray.push(dataType);
	return newArray;
}

function setMatrix(h, w, dataType)
{
	let newMatrix = [[]];
	for (let x = 0; x < w; x++)
		newMatrix.push(setArray(h, dataType));
	return newMatrix;
}


// ==================
// Other Coding Stuff
// ==================

function StringToChar(string)
{
	return string.split('');
}

function CharToString(charArray)
{
	let string = "";
	for (let i = 0; i < charArray.length; i++)
		string += charArray[i];
	return string;
}

function toInt(variable)
{
	if (typeof(variable) == "boolean") {
		if (variable)
			return 1;
		return 0;
	} else {
		println(typeof(variable));
	}
}

function println(message)
{
	console.log(message);
}

function printType(variable)
{
	println(typeof variable);
}

function print() {}