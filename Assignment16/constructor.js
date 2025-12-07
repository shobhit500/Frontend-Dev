// Q4
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype (shared by all Car objects)
Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} ${this.model}`);
};

// Creating car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "Civic");

// Calling shared prototype method
car1.getDetails(); // Output: Car: Toyota Fortuner
car2.getDetails(); // Output: Car: Honda Civic

/*
EXPLANATION:
- getDetails() is defined on Car.prototype.
- All Car objects share this one method → Saves memory.
- car1 and car2 do NOT store separate copies of the function.
*/
