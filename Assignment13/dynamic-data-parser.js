"use strict";  
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid & invalid numeric conversions
let validNumbers = [];
let invalidNumbers = [];

console.log("=== Dynamic Data Parser Report ===");

// Loop through each value
for (let value of apiData) {
    
    // Convert to Number, Boolean, String
    let numValue = Number(value);
    let boolValue = Boolean(value);
    let stringValue = String(value);

    console.log("\nOriginal:", value);
    console.log(" → Number:", numValue);
    console.log(" → Boolean:", boolValue);
    console.log(" → String:", `"${stringValue}"`);

    // ---------------------
    // Check if number is valid
    // Number("25") → 25 (valid)
    // Number("NaN") → NaN (invalid)
    // Number(" ") → 0 BUT problem says treat as invalid
    // Number("100px") → NaN (invalid)
    // ---------------------

    if (value === " " || value === "NaN" || value === "100px" || Number.isNaN(numValue)) {
        invalidNumbers.push(value);
        console.log(" → Status: INVALID NUMBER");
    } else {
        validNumbers.push(numValue);
        console.log(" → Status: VALID NUMBER");
    }
}

// Final Report Output
console.log("\n=============================");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
console.log("=============================");

