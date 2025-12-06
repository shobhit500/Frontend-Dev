let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    let totalSalary = salary;
    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Total Salary (isPermanent=${isPermanent}): ₹${totalSalary}`);
}

// Test with a permanent employee
calculateSalary(true);  // Total Salary should include bonus

// Test with a temporary employee
calculateSalary(false); // Total Salary should NOT include bonus

// Show that global bonus remains unchanged
console.log(`Global Bonus remains: ₹${bonus}`);
