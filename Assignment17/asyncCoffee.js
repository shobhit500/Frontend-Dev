// Q1_asyncCoffee.js
function delay(ms, taskName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.2; // 20% chance to fail
            if (fail) reject(`${taskName} failed!`);
            else resolve(`${taskName} completed.`);
        }, ms);
    });
}

// Step 1: Boil Water
function boilWater() {
    return delay(1000, "Boiling water");
}

// Step 2: Brew Coffee
function brewCoffee() {
    return delay(1500, "Brewing coffee");
}

// Step 3: Pour Coffee
function pourCoffee() {
    return delay(1200, "Pouring coffee");
}

// Execute process with Promise chaining
boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch(err => {
        console.log("❌ Error:", err);
    });
