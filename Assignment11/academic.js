let marks = [90, 78, 85, 92, 88]; // You can change these values

// Step 2: Validation - Check if any subject is less than 35
let hasFailingMarks = marks.some(mark => mark < 35);

// Step 3: Calculate total and average
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let averageMarks = totalMarks / marks.length;

// Step 4: Calculate overall percentage
// Assuming each subject is out of 100
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Step 5: Determine result based on conditions
let result;

if (hasFailingMarks) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Step 6: Display results
console.log("Academic Performance Report:");
console.log("----------------------------");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
