function applyOperation(numbers, operation) {
    return numbers.map(operation);  
}

// Callback to double numbers
function double(num) {
    return num * 2;
}

// Callback to square numbers
function square(num) {
    return num * num;
}

// Test arrays
const nums = [1, 2, 3, 4];

// Applying operations
const doubled = applyOperation(nums, double);
const squared = applyOperation(nums, square);

// Output
console.log("Doubled:", doubled);  // [2, 4, 6, 8]
console.log("Squared:", squared);  // [1, 4, 9, 16]
