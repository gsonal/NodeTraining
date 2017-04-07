//Using Modules
var Add = function(x,y) {
	return x + y;
}

var Subtract = function(x,y) {
	return x - y;
}

var Product = function(x,y) {
	return x * y;
}

var PI = 3.14;

//module.exports.Addition = Add;
//module.exports.Multiplication = Product;

module.exports = {Addition: Add, 
				  Multiplication: Product, 
				  PI: PI }
