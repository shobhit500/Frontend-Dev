// Q8
// Adding custom myMap() to all arrays
Array.prototype.myMap = function (callback) {
    const result = [];

    // "this" refers to the array on which myMap() is called
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Testing
const output = [1, 2, 3].myMap(num => num * 2);
console.log(output); // [2, 4, 6]

/*
EXPLANATION:
- myMap works like Array.map().
- It loops through array elements.
- Applies callback on each value.
- Returns a new array.
*/
