// Q7.js

// Function that returns another function (closure)
function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

// Creating multiplier functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// Testing
console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
EXPLANATION:
makeMultiplier() creates a closure.
The returned function remembers the "multiplier"
even after makeMultiplier() finishes execution.
*/
