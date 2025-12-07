// BankAccount Class
class BankAccount {
#balance; // Private field

constructor(initialBalance = 0) {
this.#balance = initialBalance;
}

// Deposit method
deposit(amount) {
if (amount <= 0) {
console.log("Deposit amount must be greater than 0.");
return;
}
this.#balance += amount;
console.log(`Deposited: ₹${amount}. Current Balance: ₹${this.#balance}`);
}

// Withdraw method (throws error if insufficient balance)
withdraw(amount) {
if (amount <= 0) {
throw new Error("Withdrawal amount must be greater than 0.");
}
if (amount > this.#balance) {
throw new Error("Insufficient balance.");
}
this.#balance -= amount;
console.log(`Withdrawn: ₹${amount}. Current Balance: ₹${this.#balance}`);
}

// Get current balance
getBalance() {
return this.#balance;
}
}

// -------------------------------
// DEMONSTRATION
// -------------------------------

const account = new BankAccount(1000); // Initial balance ₹1000

// Valid Deposits
account.deposit(500);
account.deposit(200);

// Invalid Withdrawals handled using try/catch
try {
account.withdraw(300); // Valid withdrawal
account.withdraw(5000); // Invalid withdrawal, exceeds balance
} catch (error) {
console.log("Error:", error.message);
}

// Check final balance
console.log("\nFinal Balance:");
console.log(account.getBalance());
