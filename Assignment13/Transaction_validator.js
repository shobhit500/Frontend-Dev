"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== Transaction Validator Report ===\n");

for (let tx of transactions) {
    try {
        // Check for null entry
        if (tx === null) {
            throw new Error("Null transaction entry.");
        }

        // Check for missing id or amount
        if (!("id" in tx) || !("amount" in tx)) {
            throw new Error("Missing transaction id or amount.");
        }

        // Check for negative amount
        if (tx.amount < 0) {
            throw new Error(`Negative amount not allowed for ID ${tx.id}.`);
        }

        // If everything is valid → store it
        validTransactions.push(tx);

    } catch (err) {
        // Store invalid transaction record with reason
        invalidTransactions.push({ transaction: tx, error: err.message });
    }
}

// ----------------------
// Final formatted reports
// ----------------------

console.log("Valid Transactions:");
console.table(validTransactions);

console.log("\nInvalid Transactions:");
console.table(invalidTransactions);

console.log(`
Summary:
Successful Transactions: ${validTransactions.length}
Failed Transactions: ${invalidTransactions.length}
`);
