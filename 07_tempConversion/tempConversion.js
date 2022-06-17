const ftoc = function(fah) {
  let num = (+fah - 32)*(5/9);
  return +num.toFixed(1);
};

const ctof = function(cel) {
  return +((+cel * 1.8) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
