/* All functions assume well-behaved input */

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((arr, obj) => arr += obj, 0);
};

const multiply = function(arr) {
  if(arr.length === 0) return [];
  return arr.reduce((arr, obj) => arr *= obj);
};

const power = function(base, exponent) {
  if(exponent === 0) return 1;

  let result = 1;
	for(let i=0; i<exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(n) {
  if(n <= 1) return 1;

  let result = 1;
	for(let i=n; i>1; i--) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
