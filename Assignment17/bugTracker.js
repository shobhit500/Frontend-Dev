// Q3_bugTracker.js
// Modernized Bug Tracker – Callback → Promise Migration

// Original (old) callback version:
// function fetchBugs(callback) {
//     setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// New Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.3; // 30% chance of simulated API failure

        setTimeout(() => {
            if (failed) {
                reject("API Error: Unable to fetch bugs!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Using the Promise-based API
getBugs()
    .then(bugList => {
        console.log("Bug List Retrieved:");
        console.table(bugList); // neat tabular output
    })
    .catch(error => {
        console.error("ERROR:", error);
    });
