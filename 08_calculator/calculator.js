const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0);
};

const multiply = function(arr) {
    return arr.reduce((a,b) => a * b, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num == 0 || num == 1) return 1;
    let num2 = 1;
    for (let i = 2; i <= num; i++){
        num2*=i;
    }
    return num2;
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
