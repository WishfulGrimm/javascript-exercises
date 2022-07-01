const findTheOldest = function(arr) {
    const sorted = arr.sort((a, b) => {
        if ("yearOfDeath" in a && "yearOfDeath" in b){
            const first = a.yearOfDeath-a.yearOfBirth;
            const second = b.yearOfDeath-b.yearOfBirth;
            return first > second ? -1:1;
        }
        else{
            let ageA = a.yearOfDeath,
                ageB = b.yearOfDeath;
            if (typeof ageA == 'undefined'){
                let temp = new Date();
                ageA = temp.getFullYear()
            }
            else if (typeof ageB == 'undefined') {
                let temp = new Date();
                ageB = temp.getFullYear();
            }
            const first = ageA - a.yearOfBirth;
            const second = ageB - b.yearOfBirth;
            return first > second ? -1:1;
        }
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
