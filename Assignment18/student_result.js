// Q1. Student Result Processing (reduce + Classes)

// Student class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;   // array of numbers
    }

    // Calculate average using reduce()
    calculateAverage() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    // Determine grade based on average marks
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }

    // Display details
    printResult() {
        console.log(`Student: ${this.name}`);
        console.log(`Marks: ${this.marks.join(", ")}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log("-----------------------------");
    }
}

// Testing with 3 students
const s1 = new Student("Aman", [85, 90, 78, 92]);
const s2 = new Student("Riya", [55, 60, 58, 62]);
const s3 = new Student("Karan", [40, 35, 50, 42]);

s1.printResult();
s2.printResult();
s3.printResult();
