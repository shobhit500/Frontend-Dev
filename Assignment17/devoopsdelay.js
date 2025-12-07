// Q4_devopsDelay.js
// DevOps Delay – Async Timeout Race (Promise.all + Promise.race)

// Simulated server functions
function serverA() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.2; // 20% chance of failure
        setTimeout(() => {
            if (failed) reject("Server A failed!");
            else resolve("Server A deployed");
        }, 2000); // 2 seconds
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.2;
        setTimeout(() => {
            if (failed) reject("Server B failed!");
            else resolve("Server B deployed");
        }, 3000); // 3 seconds
    });
}

// -------- Promise.all() → Wait for all servers --------
Promise.all([serverA(), serverB()])
    .then(result => {
        console.log("Deployment completed for all servers:");
        console.log(result);
    })
    .catch(error => {
        console.error("Deployment Error:", error);
    });

// -------- Promise.race() → First to respond --------
Promise.race([serverA(), serverB()])
    .then(fast => {
        console.log("Fastest response:", fast);
    })
    .catch(error => {
        console.error("Fastest Response Error:", error);
    });
