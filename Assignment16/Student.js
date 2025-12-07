// Q9
// --- ES6 CLASS VERSION ---
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);           // calls Person constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Testing ES6 classes
const s1 = new Student("Amit", "CSE");
s1.showName();    // from Person
s1.showBranch();  // from Student


// --- PROTOTYPE VERSION (OLD STYLE) ---

function PersonProto(name) {
    this.name = name;
}
PersonProto.prototype.showName = function () {
    console.log("Name:", this.name);
};

function StudentProto(name, branch) {
    PersonProto.call(this, name); // inherit properties
    this.branch = branch;
}

// Link prototypes
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Testing prototype version
const s2 = new StudentProto("Sara", "ECE");
s2.showName();
s2.showBranch();


/*
Both ES6 classes and prototype constructors behave the same:
- Student inherits Person behavior
- Methods in parent are accessible in child
- ES6 extends + super() is cleaner syntax
*/
