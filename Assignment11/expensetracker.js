let expenses = {
    food: 2500,
    travel: 1200,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

// Step 2: Calculate total expense
let totalExpense = 0;
for (let category in expenses) {
    totalExpense += expenses[category];
}

// Step 3: Calculate average expense
let averageExpense = totalExpense / Object.keys(expenses).length;

// Step 4: Add 10% tax to total
let taxRate = 0.10;
let finalAmount = totalExpense + (totalExpense * taxRate);

// Step 5: Round values to 2 decimal places
totalExpense = totalExpense.toFixed(2);
averageExpense = averageExpense.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Step 6: Display results
console.log(`Monthly Expense Summary:`);
console.log(`-------------------------`);
console.log(`Total Expense: ₹${totalExpense}`);
console.log(`Average Expense: ₹${averageExpense}`);
console.log(`Final Amount after 10% Tax: ₹${finalAmount}`);
