"use strict"; 
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Calculator ===\n");

for (let emp of employees) {
    try {
        
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing property in employee record.");
        }
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid numeric value for ${emp.name}`);
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        console.log(`
Employee: ${emp.name}
Salary: ₹${salary}
Years of Service: ${years}
Bonus Earned: ₹${bonus.toFixed(2)}
----------------------------------------
        `);

    } catch (err) {
        console.error(`Error processing employee ${emp.name || "Unknown"}:`, err.message);
    }
}
