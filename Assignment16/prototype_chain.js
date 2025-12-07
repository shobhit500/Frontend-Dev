// Q6
// Parent Constructor 
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};


// ---- Faculty Constructor (inherits from Person) ----
function Faculty(name, department) {
    Person.call(this, name);        // Inherit Person properties
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};


// ---- Professor Constructor (inherits from Faculty) ----
function Professor(name, department, subject) {
    Faculty.call(this, name, department);   // Inherit Faculty + Person properties
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};


// ---- Creating Object ----
const p1 = new Professor("Dr. Sharma", "Computer Science", "Machine Learning");


// ---- Demonstration ----
p1.showName();        // From Person prototype
p1.showDepartment();  // From Faculty prototype
p1.showSubject();     // From Professor prototype


// ---- Prototype Chain Verification ----
console.log(p1 instanceof Professor);  // true
console.log(p1 instanceof Faculty);    // true
console.log(p1 instanceof Person);     // true

/*
EXPLANATION:
Prototype Chain:
p1 → Professor.prototype 
   → Faculty.prototype
   → Person.prototype 
   → Object.prototype

Thus, a Professor object can access:
- showName() from Person
- showDepartment() from Faculty
- showSubject() from Professor
*/
