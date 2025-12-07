// Q5
// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);  // Inherit name property
    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Fixing constructor reference
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// Creating a student object
const s1 = new Student("Rahul", "CSE");

// Demonstration
s1.showName();   // From Person prototype
s1.showBranch(); // From Student prototype

// Checking prototype chain
console.log(s1 instanceof Student); // true
console.log(s1 instanceof Person);  // true
console.log(Object.getPrototypeOf(s1));         // Student.prototype
console.log(Object.getPrototypeOf(Student.prototype)); // Person.prototype

/*
EXPLANATION:
- Person is the parent constructor.
- Student inherits properties using Person.call(this).
- Student inherits methods by linking its prototype to Person.prototype using Object.create().
- Prototype chain:
    s1 → Student.prototype → Person.prototype → Object.prototype
- s1 can access both showName() and showBranch().
*/
