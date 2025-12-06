let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Highest and lowest score
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Average score
let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Number of students who passed (≥50)
let passedCount = scores.filter(score => score >= 50).length;

// Display summary
console.log(`Student Performance Summary:
-------------------------------
Scores: ${scores.join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Number of Students Passed (>=50): ${passedCount}`);
