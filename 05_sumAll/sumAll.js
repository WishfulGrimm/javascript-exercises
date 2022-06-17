const sumAll = function(num1, num2) {
    //input validation
    if (num2 < num1){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (typeof num1 != "number" || typeof num2 != "number" ||
            num1 < 0) return 'ERROR';
    
    //summation
    let sum = 0;
    for (let i = num1; i<=num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
