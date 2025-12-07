// Employee class
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Annual salary calculation
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Apply bonus percentage to monthly salary
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }

  // Display details
  getDetails() {
    return `${this.name} (${this.department}) - Monthly: ${this.salary}, Annual: ${this.getAnnualSalary()}`;
  }
}

// Create employee objects
const employees = [
  new Employee(1, "Amit", "HR", 4000),
  new Employee(2, "Sara", "Finance", 5000),
  new Employee(3, "Kiran", "Tech", 6000),
  new Employee(4, "Riya", "Support", 3500),
  new Employee(5, "John", "Tech", 5500)
];

// Apply bonus (10%) to all employees
employees.forEach(emp => emp.applyBonus(10));

// Display each employee's details
employees.forEach(emp => console.log(emp.getDetails()));

// Calculate total annual payout
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(`Total Annual Payout: ${totalPayout}`);
