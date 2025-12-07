// FITNESS APP ANALYTICS
const workoutData = [
{ user: "A", steps: 8000, calories: 300 },
{ user: "B", steps: 12000, calories: 500 },
{ user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
constructor(data) {
if (!data || data.length === 0) {
throw new Error("Workout dataset cannot be empty.");
}
this.data = data;
}

// Users with steps > 7000
getActiveUsers() {
return this.data.filter(u => u.steps > 7000).map(u => u.user);
}

// Average calories burned
getAverageCalories() {
const totalCalories = this.data.reduce((sum, u) => sum + u.calories, 0);
return totalCalories / this.data.length;
}

// Summary messages for each user
getUserSummary() {
return this.data.map(u =>
`User ${u.user} walked ${u.steps} steps and burned ${u.calories} calories.`
);
}
}

// -------------------------------
// DEMONSTRATION
// -------------------------------

try {
const analytics = new FitnessAnalytics(workoutData);

console.log("Active Users (>7000 steps):");
console.log(analytics.getActiveUsers());

console.log("\nAverage Calories Burned:");
console.log(analytics.getAverageCalories());

console.log("\nUser Summaries:");
console.log(analytics.getUserSummary());
} catch (error) {
console.log("Error:", error.message);
}
