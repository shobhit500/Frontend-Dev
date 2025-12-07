// Q4. Employee Inheritance (Classes + Polymorphism)

// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in the ${this.department} department.`);
    }
}

// Child Class
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method
    work() {
        console.log(`${this.name} is managing the ${this.department} team.`);
    }
}

// Creating objects
const emp1 = new Employee("Rohan", "Accounts");
const mgr1 = new Manager("Neha", "IT");

// Runtime Polymorphism
const staff = [emp1, mgr1];

staff.forEach(member => {
    member.work(); 
});
