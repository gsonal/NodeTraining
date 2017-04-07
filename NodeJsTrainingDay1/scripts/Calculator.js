//Using Modules

var mathLib = require('./Mathlib');
//console.log("Product of 2 & 4 is: " +mathLib.Multiplication(2, 4));
//console.log("Difference of 2 & 4 is: " +mathLib.Subtract(4, 2)); // throws error : mathLib.Subtract is not a function

/*
var mathLib = require('./Mathlib').Addition;
console.log("Sum of 2 & 4 is: " +mathLib(4, 2));
*/

console.log("PI value is : " + mathLib.PI);