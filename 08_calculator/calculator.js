const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(array) {
	return array.reduce((sum, currentNumber) => sum + currentNumber, 0)
};

const multiply = function(array) {
  return array.reduce((multiply, currentNumber) => multiply * currentNumber, 1);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
