const fibonacci = function(input) {
    //input validation
    let num;
    if (typeof input == 'string') num = +input;
    else if (+input < 0)return "OOPS";
    else num = input;

    let sequence = [1, 1];
    for (let i = 1; sequence.length < num; i++){
        let next = sequence[i] + sequence[i-1];
        sequence.push(next);
    }
    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
