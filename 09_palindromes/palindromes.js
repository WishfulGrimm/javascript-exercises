const palindromes = function (str) {
    const s = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let checks = (s.length - (s.length % 2)) / 2;
    for (let i = 0; i < checks; i++){
        if (s.charAt(i) != s.charAt(s.length - i - 1)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
