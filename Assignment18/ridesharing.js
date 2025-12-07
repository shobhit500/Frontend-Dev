class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Inherited Class
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip Class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Fare = distance × 12
    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance provided.");
        }
        return this.distance * 12;
    }
}

// Scenario Example
const driver = new Driver("Aman", 4.8, "Swift Dzire");
const trip = new Trip("Delhi", "Noida", 15);

try {
    const fare = trip.calculateFare();
    console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}`);
    console.log(`Trip: ${trip.fromLocation} → ${trip.toLocation}`);
    console.log(`Distance: ${trip.distance} km`);
    console.log(`Fare: ₹${fare}`);
} catch (err) {
    console.log("Error:", err.message);
}
