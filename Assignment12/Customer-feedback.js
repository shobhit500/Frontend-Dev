let feedback = "Great product! Fast delivery and amazing sound quality!";
let wordCount = feedback.split(" ").length;

if (feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

// Display word count
console.log(`Word Count: ${wordCount}`);
