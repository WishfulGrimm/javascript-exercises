const reverseString = function(s) {
    if (s === '') return s;
    let result = [], 
        holder = [],
        i = 0;
    holder = s.split('');
    for (const c of holder){
        result.unshift(c);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
